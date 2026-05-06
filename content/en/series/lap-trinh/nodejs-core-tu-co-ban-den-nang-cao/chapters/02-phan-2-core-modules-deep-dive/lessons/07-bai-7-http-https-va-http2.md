---
id: 019d8b40-g203-7001-b008-nodejs0000203
title: 'Lesson 7: HTTP/HTTPS & HTTP/2'
slug: bai-7-http-https-va-http2
description: >-
  http.createServer, routing, middleware pattern from scratch. HTTPS/TLS setup.
  HTTP/2 server push. Request/Response handling, chunked transfer. Keep-alive,
  connection pooling.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 2: Core Modules Deep Dive'
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: From Basics to Advanced'
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4448" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4448)"/>

  <!-- Decorations -->
  <g>
    <circle cx="702" cy="276" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="804" cy="98" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="906" cy="180" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="1008" cy="262" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="610" cy="84" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="196" x2="1100" y2="276" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="226" x2="1050" y2="296" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1072.8467875173176,230.5 1072.8467875173176,261.5 1046,277 1019.1532124826824,261.5 1019.1532124826824,230.5 1046,215" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 Programming — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: HTTP/HTTPS & HTTP/2</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js Core: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Core Modules Deep Dive</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-http-server"><strong>1. Basic HTTP Server</strong></h2>

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

<h2 id="2-request-body"><strong>2. Read Request Body</strong></h2>

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

<p>Next article: <strong>Crypto, OS & Process</strong> — hashing, encryption, child processes.</p>
