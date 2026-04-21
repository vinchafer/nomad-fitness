/**
 * Fuzzy-matches our exercise names against yoga/wger/EDB sources
 * Priority: yogaPoses.json → wgerExercises.json + edbExercises.json
 *
 * Run after fetch scripts:
 *   node scripts/fetchYogaApi.js
 *   node scripts/fetchWger.js
 *   node scripts/matchExercises.js
 */

const fs = require('fs')
const path = require('path')

const EDB_PATH  = path.join(__dirname, '..', 'public', 'edbExercises.json')
const WGER_PATH = path.join(__dirname, '..', 'public', 'wgerExercises.json')
const YOGA_PATH = path.join(__dirname, '..', 'public', 'yogaPoses.json')
const DATA_PATH = path.join(__dirname, '..', 'data', 'workouts.json')
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'exerciseData.json')

// ── Normalize ──────────────────────────────────────────────────────────────
function normalize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')  // remove punctuation
    .replace(/\s+/g, ' ')
    .trim()
}

// ── Simple Levenshtein ─────────────────────────────────────────────────────
function levenshtein(a, b) {
  const m = a.length, n = b.length
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)])
  for (let j = 0; j <= n; j++) dp[0][j] = j
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    }
  }
  return dp[m][n]
}

// ── Word-overlap score (0–1) ───────────────────────────────────────────────
function wordOverlap(a, b) {
  const wordsA = new Set(a.split(' ').filter(w => w.length > 1))
  const wordsB = new Set(b.split(' ').filter(w => w.length > 1))
  if (!wordsA.size || !wordsB.size) return 0
  let overlap = 0
  for (const w of wordsA) if (wordsB.has(w)) overlap++
  return overlap / Math.max(wordsA.size, wordsB.size)
}

// ── Best match ────────────────────────────────────────────────────────────
function findBestMatch(ourName, edbList, threshold = 0.55) {
  const normOur = normalize(ourName)

  let best = null
  let bestScore = -Infinity

  for (const ex of edbList) {
    const normEdb = normalize(ex.name)

    // Exact match — instant win
    if (normOur === normEdb) return { ex, score: 1, method: 'exact' }

    // Substring match — high score
    const isSubstr = normEdb.includes(normOur) || normOur.includes(normEdb)

    // Word overlap
    const overlap = wordOverlap(normOur, normEdb)

    // Levenshtein similarity (normalized 0–1)
    const maxLen = Math.max(normOur.length, normEdb.length)
    const lev = maxLen > 0 ? 1 - levenshtein(normOur, normEdb) / maxLen : 0

    // Combined score
    const score = overlap * 0.6 + lev * 0.3 + (isSubstr ? 0.1 : 0)

    if (score > bestScore) {
      bestScore = score
      best = { ex, score, method: 'fuzzy' }
    }
  }

  return bestScore >= threshold ? best : null
}

// ── Main ──────────────────────────────────────────────────────────────────
function main() {
  // 1) Yoga list — highest priority
  let yogaList = []
  if (fs.existsSync(YOGA_PATH)) {
    const raw = JSON.parse(fs.readFileSync(YOGA_PATH, 'utf-8'))
    yogaList = raw.map(p => ({
      name: p.english_name,
      gifUrl: p.url_png ?? '',
      images: [],
      instructions: p.pose_description ? [p.pose_description] : [],
      targetMuscles: [],
      description: p.pose_benefits ?? '',
    }))
    console.log(`Yoga API: ${yogaList.length} poses`)
  }

  // 2) Gym list — EDB + wger fallback
  let gymList = []
  if (fs.existsSync(EDB_PATH)) {
    gymList = gymList.concat(JSON.parse(fs.readFileSync(EDB_PATH, 'utf-8')))
  }
  if (fs.existsSync(WGER_PATH)) {
    const wger = JSON.parse(fs.readFileSync(WGER_PATH, 'utf-8'))
    gymList = gymList.concat(wger.map(ex => ({ ...ex, gifUrl: ex.imageUrl ?? '' })))
  }
  console.log(`Gym sources: ${gymList.length} entries (EDB + wger)`)

  if (yogaList.length === 0 && gymList.length === 0) {
    console.error('ERROR: No exercise data found. Run fetch scripts first.')
    process.exit(1)
  }

  const workouts = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'))

  // Collect unique exercise names
  const nameSet = new Set()
  for (const workout of workouts) {
    for (const exercise of workout.exercises ?? []) {
      if (exercise.name) nameSet.add(exercise.name)
    }
  }
  const names = Array.from(nameSet).sort()
  console.log(`\nMatching ${names.length} exercises...\n`)

  // Load existing output
  let existing = {}
  if (fs.existsSync(OUTPUT_PATH)) {
    existing = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf-8'))
  }

  const result = {}
  const matchedYoga = []
  const matchedGym  = []
  const unmatched   = []

  for (const name of names) {
    // Pass 1: try yoga (lower threshold — pose names are short, "Pose" suffix dilutes score)
    // Guard: ≥60% of the yoga pose's words must appear in our exercise name
    const yogaMatch = findBestMatch(name, yogaList, 0.5)
    let yogaGuard = false
    if (yogaMatch) {
      const normYogaWords = normalize(yogaMatch.ex.name).split(' ').filter(w => w.length > 2)
      const normOur = normalize(name)
      const hit = normYogaWords.filter(w => normOur.includes(w)).length
      const need = normYogaWords.length === 1 ? 1 : Math.ceil(normYogaWords.length * 0.6)
      yogaGuard = hit >= need
    }
    if (yogaGuard && yogaMatch.ex.gifUrl) {
      const ex = yogaMatch.ex
      result[name] = {
        gifUrl: ex.gifUrl,
        images: ex.images,
        instructions: ex.instructions,
        targetMuscles: ex.targetMuscles,
        _source: 'yoga',
        _matchedName: ex.name,
        _score: Math.round(yogaMatch.score * 100) / 100,
      }
      matchedYoga.push({ our: name, matched: ex.name, score: yogaMatch.score })
      continue
    }

    // Pass 2: try gym sources
    const gymMatch = findBestMatch(name, gymList)
    if (gymMatch && (gymMatch.ex.gifUrl || gymMatch.ex.images?.length)) {
      const ex = gymMatch.ex
      result[name] = {
        gifUrl: ex.gifUrl || null,
        images: ex.images ?? [],
        instructions: ex.instructions ?? [],
        targetMuscles: ex.target ? [ex.target] : (ex.muscles ?? []),
        _source: 'gym',
        _matchedName: ex.name,
        _score: Math.round(gymMatch.score * 100) / 100,
      }
      matchedGym.push({ our: name, matched: ex.name, score: gymMatch.score })
      continue
    }

    // No match
    result[name] = existing[name] ?? null
    unmatched.push(name)
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2))

  console.log(`YOGA MATCHED (${matchedYoga.length}):`)
  for (const m of matchedYoga) {
    console.log(`  ✓ "${m.our}" → "${m.matched}" (${Math.round(m.score * 100)}%)`)
  }

  console.log(`\nGYM MATCHED (${matchedGym.length}):`)
  for (const m of matchedGym) {
    console.log(`  ✓ "${m.our}" → "${m.matched}" (${Math.round(m.score * 100)}%)`)
  }

  console.log(`\nUNMATCHED (${unmatched.length} — SVG fallback):`)
  for (const u of unmatched) {
    console.log(`  ✗ ${u}`)
  }

  console.log(`\n─────────────────────────────────`)
  console.log(`Total: ${names.length}  ✓ Yoga: ${matchedYoga.length}  ✓ Gym: ${matchedGym.length}  ✗ No image: ${unmatched.length}`)
  console.log(`Saved to: ${OUTPUT_PATH}`)
}

main()
