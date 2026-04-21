/**
 * Fetches exercise GIFs/images from the EDB API (via RapidAPI).
 * Run: npx ts-node scripts/fetchExerciseGifs.ts
 *
 * Requires env var: NEXT_PUBLIC_RAPIDAPI_KEY
 */

import * as fs from 'fs'
import * as path from 'path'

// Load .env.local if present
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
const HOST = 'edb-with-videos-and-images-by-ascendapi.p.rapidapi.com'
const BASE_URL = `https://${HOST}/api/v1/exercises/search`
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'exerciseData.json')
const DELAY_MS = 600

interface ExerciseResult {
  gifUrl?: string
  videoUrl?: string
  images?: string[]
  instructions?: string[]
  targetMuscles?: string[]
}

type ExerciseDataMap = Record<string, ExerciseResult | null>

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchExercise(name: string): Promise<ExerciseResult | null> {
  if (!RAPIDAPI_KEY) {
    console.warn('  NEXT_PUBLIC_RAPIDAPI_KEY not set — skipping API call')
    return null
  }
  try {
    const url = `${BASE_URL}?query=${encodeURIComponent(name)}&limit=1`
    const res = await fetch(url, {
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': HOST,
      },
    })
    if (!res.ok) {
      console.warn(`  HTTP ${res.status} for "${name}"`)
      return null
    }
    const data = await res.json()
    const exercises = data?.exercises ?? data?.data ?? data?.results ?? []
    if (!exercises.length) return null

    const ex = exercises[0]
    return {
      gifUrl: ex.gifUrl ?? ex.gif_url ?? undefined,
      videoUrl: ex.videoUrl ?? ex.video_url ?? undefined,
      images: ex.images ?? [],
      instructions: ex.instructions ?? [],
      targetMuscles: ex.targetMuscles ?? ex.target_muscles ?? [],
    }
  } catch (err) {
    console.warn(`  Error fetching "${name}":`, err)
    return null
  }
}

async function main() {
  const workoutsPath = path.join(__dirname, '..', 'data', 'workouts.json')
  const workouts = JSON.parse(fs.readFileSync(workoutsPath, 'utf-8'))

  // Collect unique exercise names
  const nameSet = new Set<string>()
  for (const workout of workouts) {
    for (const exercise of workout.exercises ?? []) {
      if (exercise.name) nameSet.add(exercise.name)
    }
  }
  const names = Array.from(nameSet).sort()
  console.log(`\nFetching ${names.length} unique exercises from EDB API...\n`)

  // Load existing data if present (resume support)
  let existing: ExerciseDataMap = {}
  if (fs.existsSync(OUTPUT_PATH)) {
    existing = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf-8'))
  }

  const result: ExerciseDataMap = { ...existing }
  let matched = 0
  let missed = 0

  for (const name of names) {
    if (name in result) {
      // Already fetched
      if (result[name]) {
        console.log(`  ✓ (cached) ${name}`)
        matched++
      } else {
        console.log(`  ✗ (cached) ${name}`)
        missed++
      }
      continue
    }

    const data = await fetchExercise(name)
    result[name] = data

    if (data?.gifUrl || data?.images?.length) {
      console.log(`  ✓ ${name}`)
      matched++
    } else {
      console.log(`  ✗ ${name}`)
      missed++
    }

    // Save incrementally in case of crash
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2))
    await sleep(DELAY_MS)
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2))

  console.log(`\n─────────────────────────────────`)
  console.log(`Total: ${names.length}  ✓ Match: ${matched}  ✗ Kein Match: ${missed}`)
  console.log(`Saved to: ${OUTPUT_PATH}`)
}

main().catch(console.error)
