---
id: 019d8b40-g202-7001-b008-nodejs0000202
title: 'Bài 6: Streams & Buffers'
slug: bai-6-streams-va-buffers
description: >-
  Readable, Writable, Transform, Duplex streams. Backpressure,
  pipeline(), stream.compose(). Buffer API, ArrayBuffer, TypedArrays.
  Stream-based file processing, CSV/JSON parsing.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Core Modules Deep Dive"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-stream-types"><strong>1. Các loại Stream</strong></h2>

<table>
<thead><tr><th>Loại</th><th>Mô tả</th><th>Ví dụ</th></tr></thead>
<tbody>
<tr><td>Readable</td><td>Nguồn dữ liệu</td><td>fs.createReadStream, http request</td></tr>
<tr><td>Writable</td><td>Đích ghi dữ liệu</td><td>fs.createWriteStream, http response</td></tr>
<tr><td>Transform</td><td>Đọc + biến đổi + ghi</td><td>zlib.createGzip, crypto.createCipher</td></tr>
<tr><td>Duplex</td><td>Đọc + ghi độc lập</td><td>net.Socket, WebSocket</td></tr>
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

<p>Bài tiếp theo: <strong>HTTP/HTTPS & HTTP/2</strong> — server, routing, TLS.</p>
