---
id: 019d8b40-g201-7001-b008-nodejs0000201
title: 第 5 課：檔案系統與路徑
slug: bai-5-file-system-va-path
description: >-
  fs/promises、fs.createReadStream/WriteStream。文件監視（fs.watch、chokidar）。路徑操作，__dirname，import.meta.url。臨時文件，原子寫入。全域模式。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：核心模組深入探討
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: Node.js 核心：從基礎到高級
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9273" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9273)"/>

  <!-- Decorations -->
  <g>
    <circle cx="737" cy="101" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="874" cy="38" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1011" cy="235" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="648" cy="172" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="109" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="51" x2="1100" y2="131" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="81" x2="1050" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="973.5166604983954,138 973.5166604983954,164 951,177 928.4833395016046,164 928.4833395016046,138 951,125" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：檔案系統與路徑</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js 核心：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：核心模組深入探討</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-fs-promises"><strong>1.fs/promise API</strong></h2>

<pre><code class="language-ts">import { readFile, writeFile, mkdir, readdir, stat, rm, cp, rename } from 'node:fs/promises'
import path from 'node:path'

// Đọc file
const content = await readFile('config.json', 'utf8')
const config = JSON.parse(content)

// Ghi file
await writeFile('output.txt', 'Hello World', 'utf8')

// Tạo thư mục (recursive)
await mkdir('data/logs/2026', { recursive: true })

// Liệt kê directory
const entries = await readdir('src', { withFileTypes: true, recursive: true })
const tsFiles = entries
  .filter(e => e.isFile() && e.name.endsWith('.ts'))
  .map(e => path.join(e.parentPath, e.name))

// File info
const info = await stat('package.json')
console.log(`Size: ${info.size}, Modified: ${info.mtime}`)

// Copy & rename
await cp('src', 'backup/src', { recursive: true })
await rename('old.txt', 'new.txt')
</code></pre>

<h2 id="2-streams"><strong>2. 文件流</strong></h2>

<pre><code class="language-ts">import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'
import { createGzip, createGunzip } from 'node:zlib'

// Copy file lớn bằng streams (không load hết vào memory)
await pipeline(
  createReadStream('large-file.csv'),
  createWriteStream('copy.csv')
)

// Nén file
await pipeline(
  createReadStream('data.json'),
  createGzip(),
  createWriteStream('data.json.gz')
)

// Giải nén
await pipeline(
  createReadStream('data.json.gz'),
  createGunzip(),
  createWriteStream('data.json')
)
</code></pre>

<h2 id="3-path"><strong>3. 路徑模組</strong></h2>

<pre><code class="language-ts">import path from 'node:path'

// ESM — lấy __dirname
const __dirname = import.meta.dirname  // Node.js 21+

path.join(__dirname, 'data', 'config.json')   // /app/data/config.json
path.resolve('..', 'shared')                  // Absolute path
path.basename('/app/src/index.ts')             // index.ts
path.extname('image.png')                      // .png
path.dirname('/app/src/index.ts')              // /app/src
path.parse('/app/src/index.ts')
// { root: '/', dir: '/app/src', base: 'index.ts', ext: '.ts', name: 'index' }
</code></pre>

<h2 id="4-file-watching"><strong>4. 文件查看</strong></h2>

<pre><code class="language-ts">import { watch } from 'node:fs/promises'

// Native fs.watch (recursive trên macOS/Windows)
const watcher = watch('src', { recursive: true })

for await (const event of watcher) {
  console.log(`${event.eventType}: ${event.filename}`)
}
</code></pre>

<h2 id="5-atomic-write"><strong>5. 原子寫入</strong></h2>

<pre><code class="language-ts">import { writeFile, rename } from 'node:fs/promises'
import { randomUUID } from 'node:crypto'

// Ghi atomic — tránh corrupt nếu crash giữa chừng
async function atomicWrite(filePath: string, data: string) {
  const tmpPath = `${filePath}.${randomUUID()}.tmp`
  await writeFile(tmpPath, data, 'utf8')
  await rename(tmpPath, filePath) // rename là atomic trên cùng filesystem
}
</code></pre>

<h2 id="6-glob"><strong>6. 全域模式（Node.js 22+）</strong></h2>

<pre><code class="language-ts">import { glob } from 'node:fs/promises'

// Tìm tất cả .ts files
for await (const entry of glob('src/**/*.ts')) {
  console.log(entry)
}

// Collect thành array
const files = await Array.fromAsync(glob('**/*.md'))
</code></pre>

<p>下一篇： <strong>流和緩衝區</strong> — 可讀、可寫、轉換、背壓。</p>
