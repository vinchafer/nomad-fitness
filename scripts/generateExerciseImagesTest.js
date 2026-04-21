const OpenAI = require('openai');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const OUTPUT_DIR = path.join(__dirname, '../public/exercise-images');

const flowImages = [
  {
    filename: 'childs-pose-flow.png',
    size: '1792x1024',
    prompt:
      'Three-panel fitness instructional diagram. Female athlete in her 30s, white fitted t-shirt, dark grey leggings, ponytail, barefoot on yoga mat. Grey panels, dark vertical dividers, full body visible. LEFT: kneeling upright, hands on thighs. MIDDLE: bending forward, arms reaching. RIGHT: Balasana pose. Detailed line art, grey shading, no text.',
  },
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const protocol = url.startsWith('https') ? https : http;
    protocol
      .get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => file.close(resolve));
      })
      .on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateImage(filename, prompt, size, attempt = 1) {
  const filepath = path.join(OUTPUT_DIR, filename);
  console.log(`\nGenerating: ${filename} (attempt ${attempt})`);

  let response;
  try {
    response = await openai.images.generate({
      model: 'dall-e-3',
      prompt,
      n: 1,
      size,
      quality: 'standard',
      response_format: 'url',
    });
  } catch (err) {
    if (err.status === 400 && err.message.includes('content filters') && attempt < 10) {
      console.log(`  Content filter hit — retrying in 5s...`);
      await sleep(5000);
      return generateImage(filename, prompt, size, attempt + 1);
    }
    throw err;
  }

  console.log(`  Downloading...`);
  await downloadImage(response.data[0].url, filepath);
  console.log(`  Done: ${filename}`);
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error('ERROR: OPENAI_API_KEY not found in .env.local');
    process.exit(1);
  }

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log('=== Nomad Fitness — Test 4: Child\'s Pose Flow (neu) ===\n');

  for (const img of flowImages) {
    try {
      await generateImage(img.filename, img.prompt, img.size);
    } catch (err) {
      console.error(`\nERROR generating ${img.filename}:`, err.message);
      process.exit(1);
    }
  }

  console.log('\n=== Done! ===');
}

main();
