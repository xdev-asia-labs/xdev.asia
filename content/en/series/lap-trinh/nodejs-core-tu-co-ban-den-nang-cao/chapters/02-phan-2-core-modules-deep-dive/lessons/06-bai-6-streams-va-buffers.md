---
id: 019d8b40-g202-7001-b008-nodejs0000202
title: 'Lesson 6: Streams & Buffers'
slug: bai-6-streams-va-buffers
description: >-
  Readable, Writable, Transform, Duplex streams. Backpressure, pipeline(),
  stream.compose(). Buffer API, ArrayBuffer, TypedArrays. Stream-based file
  processing, CSV/JSON parsing.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 2: Core Modules Deep Dive'
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: From Basics to Advanced'
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-896" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-896)"/>

  <!-- Decorations -->
  <g>
    <circle cx="827" cy="271" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1054" cy="178" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="781" cy="85" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="1008" cy="252" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="159" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="221" x2="1100" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="251" x2="1050" y2="321" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1002.1769145362398,153 1002.1769145362398,189 971,207 939.8230854637602,189 939.8230854637602,153 971,135" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Programming — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: Streams & Buffers</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js Core: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Core Modules Deep Dive</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-stream-types"><strong>1. Types of Streams</strong></h2>

<table>
<thead><tr><th>Type</th><th>Description</th><th>For example</th></tr></thead>
<tbody>
<tr><td>Readable</td><td>Data source</td><td>fs.createReadStream, http request</td></tr>
<tr><td>Writeable</td><td>Data recording destination</td><td>fs.createWriteStream, http response</td></tr>
<tr><td>Transform</td><td>Read + transform + write</td><td>zlib.createGzip, crypto.createCipher</td></tr>
<tr><td>Duplex</td><td>Read + write independently</td><td>net.Socket, WebSocket</td></tr>
</tbody>
</table>

<h2 id="2-readable"><strong>2. Custom Readable Stream</strong></h2>

<pre><code class="language-ts">import { Readable } from 'node:stream'

// Readable từ array
const readable = Readable.from(['Hello', ' ', 'World'])

for await (const chunk of readable) {
  console.log(chunk) // 'Hello', ' ', 'World'
}

// Custom Readable
class CounterStream extends Readable {
  private current = 0
  constructor(private max: number) {
    super({ objectMode: true })
  }
  _read() {
    if (this.current < this.max) {
      this.push({ value: this.current++ })
    } else {
      this.push(null) // Signal end
    }
  }
}
</code></pre>

<h2 id="3-transform"><strong>3. Transform Stream</strong></h2>

<pre><code class="language-ts">import { Transform, pipeline } from 'node:stream'
import { createReadStream, createWriteStream } from 'node:fs'
import { promisify } from 'node:util'

const pipelineAsync = promisify(pipeline)

// Transform: uppercase mỗi dòng
const toUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase())
  },
})

// CSV line parser
const csvParser = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    const lines = chunk.toString().split('\n').filter(Boolean)
    for (const line of lines) {
      const [name, age, city] = line.split(',')
      this.push({ name, age: Number(age), city })
    }
    callback()
  },
})

await pipelineAsync(
  createReadStream('input.txt'),
  toUpperCase,
  createWriteStream('output.txt')
)
</code></pre>

<h2 id="4-backpressure"><strong>4. Backpressure</strong></h2>

<pre><code class="language-ts">import { createReadStream, createWriteStream } from 'node:fs'

const readable = createReadStream('large-file.bin')
const writable = createWriteStream('output.bin')

// Xử lý backpressure thủ công
readable.on('data', (chunk) => {
  const canContinue = writable.write(chunk)
  if (!canContinue) {
    readable.pause() // Tạm dừng đọc
    writable.once('drain', () => readable.resume()) // Resume khi đã ghi xong
  }
})

// pipeline() tự xử lý backpressure — KHUYẾN NGHỊ
import { pipeline } from 'node:stream/promises'
await pipeline(readable, writable)
</code></pre>

<h2 id="5-buffer"><strong>5. Buffer API</strong></h2>

<pre><code class="language-ts">// Tạo Buffer
const buf1 = Buffer.from('Hello', 'utf8')
const buf2 = Buffer.alloc(16)         // Zero-filled
const buf3 = Buffer.allocUnsafe(16)   // Không clear — nhanh hơn

// Đọc/ghi
buf2.writeUInt32BE(0x48454c4c, 0) // 'HELL'
console.log(buf1.toString('hex'))   // 48656c6c6f
console.log(buf1.toString('base64'))

// So sánh
Buffer.compare(buf1, buf2) // -1, 0, 1
buf1.equals(buf2)           // false

// Nối
const combined = Buffer.concat([buf1, buf2])
</code></pre>

<h2 id="6-compose"><strong>6. stream.compose (Node.js 22+)</strong></h2>

<pre><code class="language-ts">import { compose } from 'node:stream'

// Compose nhiều transforms thành 1 stream
const processPipeline = compose(
  csvParser,
  filterAge,
  toJSON
)

await pipeline(
  createReadStream('users.csv'),
  processPipeline,
  createWriteStream('output.json')
)
</code></pre>

<p>Next article: <strong>HTTP/HTTPS & HTTP/2</strong> — server, routing, TLS.</p>
