---
id: 019d8b40-g201-7001-b008-nodejs0000201
title: 'Bài 5: File System & Path'
slug: bai-5-file-system-va-path
description: >-
  fs/promises, fs.createReadStream/WriteStream. File watching
  (fs.watch, chokidar). Path manipulation, __dirname, import.meta.url.
  Temporary files, atomic writes. Glob patterns.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Core Modules Deep Dive"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-fs-promises"><strong>1. fs/promises API</strong></h2>

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

<h2 id="2-streams"><strong>2. File Streams</strong></h2>

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

<h2 id="3-path"><strong>3. Path Module</strong></h2>

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

<h2 id="4-file-watching"><strong>4. File Watching</strong></h2>

<pre><code class="language-ts">import { watch } from 'node:fs/promises'

// Native fs.watch (recursive trên macOS/Windows)
const watcher = watch('src', { recursive: true })

for await (const event of watcher) {
  console.log(`${event.eventType}: ${event.filename}`)
}
</code></pre>

<h2 id="5-atomic-write"><strong>5. Atomic Write</strong></h2>

<pre><code class="language-ts">import { writeFile, rename } from 'node:fs/promises'
import { randomUUID } from 'node:crypto'

// Ghi atomic — tránh corrupt nếu crash giữa chừng
async function atomicWrite(filePath: string, data: string) {
  const tmpPath = `${filePath}.${randomUUID()}.tmp`
  await writeFile(tmpPath, data, 'utf8')
  await rename(tmpPath, filePath) // rename là atomic trên cùng filesystem
}
</code></pre>

<h2 id="6-glob"><strong>6. Glob Patterns (Node.js 22+)</strong></h2>

<pre><code class="language-ts">import { glob } from 'node:fs/promises'

// Tìm tất cả .ts files
for await (const entry of glob('src/**/*.ts')) {
  console.log(entry)
}

// Collect thành array
const files = await Array.fromAsync(glob('**/*.md'))
</code></pre>

<p>Bài tiếp theo: <strong>Streams & Buffers</strong> — Readable, Writable, Transform, backpressure.</p>
