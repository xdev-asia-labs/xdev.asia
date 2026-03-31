---
id: 019d8b40-g203-7001-b008-nodejs0000203
title: 'Bài 7: HTTP/HTTPS & HTTP/2'
slug: bai-7-http-https-va-http2
description: >-
  http.createServer, routing, middleware pattern từ scratch.
  HTTPS/TLS setup. HTTP/2 server push. Request/Response handling,
  chunked transfer. Keep-alive, connection pooling.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Core Modules Deep Dive"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-http-server"><strong>1. HTTP Server cơ bản</strong></h2>

<pre><code class="language-ts">import { createServer, IncomingMessage, ServerResponse } from 'node:http'

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  // Request info
  const { method, url, headers } = req
  console.log(`${method} ${url}`)

  // Routing cơ bản
  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Hello World' }))
  } else if (method === 'GET' && url === '/health') {
    res.writeHead(200)
    res.end('OK')
  } else {
    res.writeHead(404)
    res.end('Not Found')
  }
})

server.listen(3000, () => console.log('Server on :3000'))
</code></pre>

<h2 id="2-request-body"><strong>2. Đọc Request Body</strong></h2>

<pre><code class="language-ts">async function parseBody(req: IncomingMessage): Promise&lt;unknown&gt; {
  const chunks: Buffer[] = []
  for await (const chunk of req) {
    chunks.push(chunk as Buffer)
  }
  const body = Buffer.concat(chunks).toString()
  const contentType = req.headers['content-type'] || ''

  if (contentType.includes('application/json')) {
    return JSON.parse(body)
  }
  return body
}

// Sử dụng
const server = createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/api/users') {
    const body = await parseBody(req) as { name: string }
    res.writeHead(201, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ id: 1, name: body.name }))
  }
})
</code></pre>

<h2 id="3-https"><strong>3. HTTPS/TLS Server</strong></h2>

<pre><code class="language-ts">import { createServer } from 'node:https'
import { readFileSync } from 'node:fs'

const server = createServer({
  key: readFileSync('certs/private-key.pem'),
  cert: readFileSync('certs/certificate.pem'),
  ca: readFileSync('certs/ca.pem'),
}, (req, res) => {
  res.writeHead(200)
  res.end('Secure!')
})

server.listen(443)
</code></pre>

<h2 id="4-http2"><strong>4. HTTP/2 Server</strong></h2>

<pre><code class="language-ts">import { createSecureServer } from 'node:http2'
import { readFileSync } from 'node:fs'

const server = createSecureServer({
  key: readFileSync('certs/key.pem'),
  cert: readFileSync('certs/cert.pem'),
  allowHTTP1: true,
})

server.on('stream', (stream, headers) => {
  const path = headers[':path']
  const method = headers[':method']

  stream.respond({
    'content-type': 'application/json',
    ':status': 200,
  })
  stream.end(JSON.stringify({ path, method, protocol: 'h2' }))
})

server.listen(8443)
</code></pre>

<h2 id="5-fetch"><strong>5. fetch (Built-in)</strong></h2>

<pre><code class="language-ts">// Node.js 22+ — fetch là global (dựa trên undici)
const response = await fetch('https://api.github.com/users/octocat', {
  headers: { 'User-Agent': 'Node.js' },
  signal: AbortSignal.timeout(5000), // Timeout 5s
})

if (!response.ok) throw new Error(`HTTP ${response.status}`)
const data = await response.json()
</code></pre>

<h2 id="6-keep-alive"><strong>6. Connection Pooling</strong></h2>

<pre><code class="language-ts">import { Agent } from 'node:http'

// Custom agent với connection pooling
const agent = new Agent({
  keepAlive: true,
  keepAliveMsecs: 30000,
  maxSockets: 50,
  maxFreeSockets: 10,
})

// Dùng với fetch (undici)
import { Agent as UndiciAgent, setGlobalDispatcher } from 'undici'

setGlobalDispatcher(new UndiciAgent({
  connections: 50,
  pipelining: 10,
  keepAliveTimeout: 30000,
}))
</code></pre>

<p>Bài tiếp theo: <strong>Crypto, OS & Process</strong> — hashing, encryption, child processes.</p>
