// Unduh foto artikel dari Unsplash sebagai WebP 1200x630 (dipotong di server Unsplash): node scripts/fetch-photos.js
const fs = require('fs');
const path = require('path');
const photos = require('./articles-photos');
const dir = path.join(__dirname, '..', 'public', 'artikel', 'img');
fs.mkdirSync(dir, { recursive: true });

async function save(url, file) {
  const fm = file.endsWith('.jpg') ? 'jpg' : 'webp';
  const res = await fetch(url + '?w=1200&h=630&fit=crop&crop=entropy&fm=' + fm + '&q=80');
  if (!res.ok) throw new Error(res.status + ' ' + url);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join(dir, file), buf);
  return Math.round(buf.length / 1024) + ' KB';
}

(async () => {
  for (const [slug, p] of Object.entries(photos)) {
    const a = await save(p.cover.img, slug + '.webp');
    const b = await save(p.inline.img, slug + '-2.webp');
    const c = await save(p.cover.img, slug + '.jpg'); // untuk og:image (pratinjau link)
    console.log(slug, a, b, c);
  }
})().catch((e) => { console.error(e); process.exit(1); });
