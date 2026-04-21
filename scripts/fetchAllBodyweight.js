/**
 * Fetches ALL body-weight exercises from EDB API and saves to public/edbExercises.json
 * Run: node scripts/fetchAllBodyweight.js
 */

const fs = require('fs')
const path = require('path')

// Load .env.local
const envPath = path.join(__dirname, '..', '.env.local')
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf-8').split('\n')
  for (const line of lines) {
    const [key, ...rest] = line.split('=')
    if (key && rest.length) {
      process.env[key.trim()] = rest.join('=').trim().replace(/^["']|["']$/g, '')
    }
  }
}

const RAPIDAPI_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY
const HOST = process.env.RAPIDAPI_HOST || 'edb-with-videos-and-images-by-ascendapi.p.rapidapi.com'
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'edbExercises.json')

if (!RAPIDAPI_KEY) {
  console.error('ERROR: NEXT_PUBLIC_RAPIDAPI_KEY not set in .env.local')
  process.exit(1)
}

async function fetchPage(cursor, limit) {
  let url = `https://${HOST}/api/v1/exercises?equipments=BODY+WEIGHT&limit=${limit}`
  if (cursor) url += `&cursor=${cursor}`
  console.log(`  Fetching cursor=${cursor ?? 'start'} limit=${limit} ...`)
  const res = await fetch(url, {
    headers: {
      'x-rapidapi-key': RAPIDAPI_KEY,
      'x-rapidapi-host': HOST,
    },
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`)
  }
  const data = await res.json()
  return {
    exercises: data?.data ?? data?.exercises ?? data?.results ?? [],
    nextCursor: data?.meta?.nextCursor ?? null,
    hasNextPage: data?.meta?.hasNextPage ?? false,
    meta: data?.meta ?? null,
  }
}

async function main() {
  console.log('\nFetching all body-weight exercises from EDB API...\n')

  let allExercises = []
  const limit = 25
  let cursor = null
  let total = Infinity
  let page = 1
  const seenCursors = new Set()

  while (allExercises.length < total) {
    const { exercises, nextCursor, hasNextPage, meta } = await fetchPage(cursor, limit)
    if (!Array.isArray(exercises)) {
      console.error('Unexpected response format:', JSON.stringify(exercises).slice(0, 300))
      break
    }
    if (page === 1 && meta?.total) total = meta.total
    console.log(`  Page ${page}: got ${exercises.length} exercises (${allExercises.length + exercises.length}/${total})`)
    allExercises = allExercises.concat(exercises)
    if (!hasNextPage || !nextCursor || exercises.length === 0) break
    if (seenCursors.has(nextCursor)) {
      console.log(`  Cursor repeated (${nextCursor}), stopping.`)
      break
    }
    seenCursors.add(nextCursor)
    cursor = nextCursor
    page++
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 300))
  }

  console.log(`\nTotal exercises fetched: ${allExercises.length}`)

  // Normalize to a consistent shape
  const normalized = allExercises.map(ex => ({
    id: ex.exerciseId ?? ex.id ?? ex._id ?? '',
    name: ex.name ?? ex.exerciseName ?? '',
    equipment: (ex.equipments ?? ex.equipment ?? []).join(', '),
    bodyPart: (ex.bodyParts ?? ex.bodyPart ?? []).join(', '),
    target: (ex.targetMuscles ?? ex.target ?? []).join(', '),
    gifUrl: ex.imageUrl ?? ex.gifUrl ?? ex.gif_url ?? ex.animatedImage ?? '',
    images: ex.images ?? [],
    instructions: ex.instructions ?? [],
  }))

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(normalized, null, 2))
  console.log(`Saved to: ${OUTPUT_PATH}`)

  // Preview first 5
  console.log('\nFirst 5 exercises:')
  normalized.slice(0, 5).forEach(ex => {
    console.log(`  - "${ex.name}" | gif: ${ex.gifUrl ? 'YES' : 'no'}`)
  })
}

main().catch(err => {
  console.error('FATAL:', err.message)
  process.exit(1)
})
