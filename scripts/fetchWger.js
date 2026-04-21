/**
 * Fetches exercises from wger.de public API (no API key needed)
 * Uses /exerciseinfo/ which includes English translations + images in one call
 * Run: node scripts/fetchWger.js
 */

const fs = require('fs')
const path = require('path')

const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'wgerExercises.json')

async function fetchPage(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

function getEnglishName(translations) {
  const en = (translations ?? []).find(t => t.language === 2)
  return en?.name ?? ''
}

function getEnglishDescription(translations) {
  const en = (translations ?? []).find(t => t.language === 2)
  return en?.description ?? ''
}

async function main() {
  console.log('\nFetching exercises from wger.de (exerciseinfo)...\n')

  let all = []
  let url = 'https://wger.de/api/v2/exerciseinfo/?format=json&language=2&limit=100'
  let page = 1

  while (url) {
    console.log(`  Page ${page} ...`)
    const data = await fetchPage(url)
    const results = data.results ?? []

    for (const ex of results) {
      const name = getEnglishName(ex.translations)
      if (!name) continue  // skip exercises with no English name
      all.push({
        id: ex.id,
        uuid: ex.uuid,
        name,
        description: getEnglishDescription(ex.translations),
        category: ex.category?.name ?? '',
        muscles: (ex.muscles ?? []).map(m => m.name_en ?? m.name),
        equipment: (ex.equipment ?? []).map(e => e.name),
        imageUrl: ex.images?.[0]?.image ?? '',
      })
    }

    console.log(`    got ${results.length} (${all.length} with English name so far / ${data.count} total)`)
    url = data.next ?? null
    page++
    await new Promise(r => setTimeout(r, 300))
  }

  console.log(`\nTotal with English name: ${all.length}`)
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(all, null, 2))
  console.log(`Saved to: ${OUTPUT_PATH}`)

  console.log('\nFirst 20 exercise names:')
  all.slice(0, 20).forEach((ex, i) => {
    console.log(`  ${i + 1}. "${ex.name}" | img: ${ex.imageUrl ? 'YES' : 'no'} | cat: ${ex.category}`)
  })
}

main().catch(err => {
  console.error('FATAL:', err.message)
  process.exit(1)
})
