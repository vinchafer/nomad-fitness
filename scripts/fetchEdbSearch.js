/**
 * Searches EDB API for specific strength exercises by keyword
 * and merges results into public/exerciseData.json
 * Run: node scripts/fetchEdbSearch.js
 */

const fs = require('fs')
const path = require('path')

// Load .env.local
const envPath = path.join(__dirname, '..', '.env.local')
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const [key, ...rest] = line.split('=')
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim().replace(/^["']|["']$/g, '')
  }
}

const RAPIDAPI_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY
const HOST = process.env.RAPIDAPI_HOST || 'edb-with-videos-and-images-by-ascendapi.p.rapidapi.com'
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'exerciseData.json')

if (!RAPIDAPI_KEY) {
  console.error('ERROR: NEXT_PUBLIC_RAPIDAPI_KEY not set in .env.local')
  process.exit(1)
}

// Map: our exercise name → search term to use
const SEARCH_MAP = {
  'Push-Ups':                  'push up',
  'Push-Up with Control':      'push up',
  'Push-Up to Rotation':       'push up',
  'Diamond Push-Ups':          'push up',
  'Pike Push-Ups':             'push up',
  'Tricep Push-Ups':           'push up',
  'Wall Push-Ups':             'push up',
  'Archer Push-Ups':           'push up',
  'Dolphin Push-Ups':          'push up',
  'Bodyweight Squats':         'squat',
  'Squats':                    'squat',
  'Jump Squats':               'jump squat',
  'Squat Jumps':               'jump squat',
  'Sumo Squats':               'sumo squat',
  'Single-Leg Squats (Pistol Squat progression)': 'single leg squat',
  'Assisted Squats (hold chair)': 'squat',
  'Plank':                     'plank',
  'Modified Plank (on knees)': 'plank',
  'Side Plank left':           'side plank',
  'Side Plank right':          'side plank',
  'Side Plank (modified)':     'side plank',
  'Plank to Down Dog':         'plank',
  'Shoulder Taps':             'plank shoulder tap',
  'Lunges':                    'lunge',
  'Reverse Lunges':            'reverse lunge',
  'Reverse Lunge + Knee Drive':'reverse lunge',
  'Step Lunges':               'lunge',
  'Low Lunge both sides':      'lunge',
  'Burpees':                   'burpee',
  'Mountain Climbers':         'mountain climber',
  'Jumping Jacks':             'jumping jack',
  'Star Jumps':                'jumping jack',
  'Bicycle Crunches':          'bicycle crunch',
  'Leg Raises':                'leg raise',
  'Calf Raises':               'calf raise',
  'Glute Bridges':             'glute bridge',
  'Single Leg Glute Bridge':   'glute bridge',
  'Donkey Kicks':              'donkey kick',
  'Fire Hydrants':             'fire hydrant',
  'High Knees':                'high knees',
  'Inchworm Walk-Out':         'inchworm',
  'Superman':                  'superman',
  'Superman Pull':             'superman',
  'Dead Bug':                  'dead bug',
  'Bird Dog':                  'bird dog',
  'Tricep Dips (using chair/bed)': 'tricep dip',
  'Nordic Curls':              'nordic curl',
  'L-Sit Hold':                'l-sit',
  'Hollow Body Hold':          'hollow body',
  'Lateral Hops':              'lateral jump',
  'Single Leg Deadlift':       'single leg deadlift',
  'Wall Angels':               'wall angel',
  'Reverse Snow Angels':       'snow angel',
  'March in Place':            'march',
  'Hip Circles':               'hip circle',
}

async function searchExercise(term) {
  const url = `https://${HOST}/api/v1/exercises/search?query=${encodeURIComponent(term)}&limit=1`
  const res = await fetch(url, {
    headers: { 'x-rapidapi-key': RAPIDAPI_KEY, 'x-rapidapi-host': HOST },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  // Response is array or wrapped
  const exercises = Array.isArray(data) ? data : (data.data ?? data.results ?? data.exercises ?? [])
  return exercises[0] ?? null
}

async function main() {
  console.log('\nSearching EDB for strength exercises...\n')

  // Load existing output
  let existing = {}
  if (fs.existsSync(OUTPUT_PATH)) {
    existing = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf-8'))
  }

  const result = { ...existing }
  const termCache = {}  // cache per search term to avoid duplicate API calls
  let matched = 0
  let failed = 0

  const entries = Object.entries(SEARCH_MAP)
  for (let i = 0; i < entries.length; i++) {
    const [ourName, term] = entries[i]

    // Use cached result for same search term
    if (!(term in termCache)) {
      try {
        const ex = await searchExercise(term)
        termCache[term] = ex
        await new Promise(r => setTimeout(r, 250))
      } catch (err) {
        console.error(`  ERROR searching "${term}": ${err.message}`)
        termCache[term] = null
      }
    }

    const ex = termCache[term]
    if (ex) {
      const imageUrl = ex.imageUrl ?? ex.gifUrl ?? ex.gif_url ?? ''
      if (imageUrl) {
        result[ourName] = {
          gifUrl: imageUrl,
          images: ex.images ?? [],
          instructions: ex.instructions ?? [],
          targetMuscles: ex.targetMuscles ?? (ex.target ? [ex.target] : []),
          _edbName: ex.name,
          _searchTerm: term,
        }
        console.log(`  ✓ "${ourName}" → "${ex.name}"`)
        matched++
      } else {
        console.log(`  ~ "${ourName}" → found "${ex.name}" but no image`)
        failed++
      }
    } else {
      console.log(`  ✗ "${ourName}" → no result for "${term}"`)
      failed++
    }
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2))
  console.log(`\n─────────────────────────────────`)
  console.log(`Searched: ${entries.length}  ✓ With image: ${matched}  ✗ No image: ${failed}`)
  console.log(`Saved to: ${OUTPUT_PATH}`)
}

main().catch(err => {
  console.error('FATAL:', err.message)
  process.exit(1)
})
