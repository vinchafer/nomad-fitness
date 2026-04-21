/**
 * Fetches all yoga poses from yoga-api-nzy4.onrender.com
 * Run: node scripts/fetchYogaApi.js
 */

const fs = require('fs')
const path = require('path')

const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'yogaPoses.json')

async function main() {
  console.log('\nFetching yoga poses from yoga-api-nzy4.onrender.com...\n')

  const res = await fetch('https://yoga-api-nzy4.onrender.com/v1/poses')
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()

  const poses = Array.isArray(data) ? data : (data.poses ?? data.data ?? data)
  console.log(`Fetched ${poses.length} poses`)

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(poses, null, 2))
  console.log(`Saved to: ${OUTPUT_PATH}`)

  console.log('\nFirst 20 pose names:')
  poses.slice(0, 20).forEach((p, i) => {
    console.log(`  ${i + 1}. "${p.english_name}" | img: ${p.url_png ? 'YES' : 'no'}`)
  })
}

main().catch(err => {
  console.error('FATAL:', err.message)
  process.exit(1)
})
