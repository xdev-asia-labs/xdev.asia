---
id: 019d8b40-g303-7001-b008-nodejs0000303
title: 'レッスン 11: TCP、UDP、WebSocket'
slug: bai-11-tcp-udp-va-websockets
description: >-
  net モジュール (TCP サーバー/クライアント)、dgram (UDP)。 wsライブラリを備えたWebSocketサーバー。接続管理、バイナリ
  プロトコル。プロトコル設計、カスタムワイヤフォーマット。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 3: 同時実行性とネットワーキング'
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js コア: 基本から高度まで'
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5190" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5190)"/>

  <!-- Decorations -->
  <g>
    <circle cx="984" cy="182" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="868" cy="146" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="752" cy="110" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="636" cy="74" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="38" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="182" x2="1100" y2="262" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="212" x2="1050" y2="282" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1064.0429399400243,213.5 1064.0429399400243,250.5 1032,269 999.9570600599758,250.5 999.9570600599758,213.5 1032,195" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 プログラミング — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: TCP、UDP、WebSocket</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js コア: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 同時実行性とネットワーキング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tcp"><strong>1. TCPサーバーとクライアント</strong></h2>

<pre><code class="language-ts">import net from 'node:net'

// TCP Server
const server = net.createServer((socket) => {
  console.log(`Client connected: ${socket.remoteAddress}:${socket.remotePort}`)

  socket.on('data', (data) => {
    const message = data.toString().trim()
    console.log(`Received: ${message}`)
    socket.write(`Echo: ${message}\n`)
  })

  socket.on('end', () => console.log('Client disconnected'))
  socket.on('error', (err) => console.error('Socket error:', err))
})

server.listen(8080, () => console.log('TCP server on :8080'))

// TCP Client
const client = net.createConnection({ port: 8080 }, () => {
  client.write('Hello Server!')
})

client.on('data', (data) => {
  console.log(`Server: ${data.toString()}`)
  client.end()
})
</code></pre>

<h2 id="2-udp"><strong>2.UDP(dgram)</strong></h2>

<pre><code class="language-ts">import dgram from 'node:dgram'

// UDP Server
const server = dgram.createSocket('udp4')

server.on('message', (msg, rinfo) => {
  console.log(`${rinfo.address}:${rinfo.port} → ${msg}`)
  server.send(`ACK: ${msg}`, rinfo.port, rinfo.address)
})

server.bind(41234)

// UDP Client
const client = dgram.createSocket('udp4')
client.send('Hello UDP', 41234, 'localhost', (err) => {
  if (err) console.error(err)
})
client.on('message', (msg) => {
  console.log(`Response: ${msg}`)
  client.close()
})
</code></pre>

<h2 id="3-websocket"><strong>3. WebSocketサーバー(ws)</strong></h2>

<pre><code class="language-ts">import { WebSocketServer, WebSocket } from 'ws'
import { createServer } from 'node:http'

const httpServer = createServer()
const wss = new WebSocketServer({ server: httpServer })

const clients = new Set&lt;WebSocket&gt;()

wss.on('connection', (ws, req) => {
  clients.add(ws)
  console.log(`Connected: ${req.socket.remoteAddress} (${clients.size} clients)`)

  ws.on('message', (data, isBinary) => {
    const message = data.toString()
    // Broadcast cho tất cả clients
    for (const client of clients) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    }
  })

  ws.on('close', () => {
    clients.delete(ws)
  })

  ws.on('error', (err) => console.error('WS error:', err))

  // Heartbeat
  ws.on('pong', () => { (ws as any).isAlive = true })
})

// Ping/Pong heartbeat
setInterval(() => {
  for (const ws of clients) {
    if ((ws as any).isAlive === false) return ws.terminate()
    ;(ws as any).isAlive = false
    ws.ping()
  }
}, 30000)

httpServer.listen(3000)
</code></pre>

<h2 id="4-rooms"><strong>4. 部屋ベースのパターン</strong></h2>

<pre><code class="language-ts">const rooms = new Map&lt;string, Set&lt;WebSocket&gt;&gt;()

function joinRoom(ws: WebSocket, room: string) {
  if (!rooms.has(room)) rooms.set(room, new Set())
  rooms.get(room)!.add(ws)
}

function broadcastToRoom(room: string, message: string, exclude?: WebSocket) {
  const members = rooms.get(room)
  if (!members) return
  for (const ws of members) {
    if (ws !== exclude && ws.readyState === WebSocket.OPEN) {
      ws.send(message)
    }
  }
}
</code></pre>

<h2 id="5-binary"><strong>5. バイナリプロトコル</strong></h2>

<pre><code class="language-ts">// Custom binary protocol: [type:1][length:4][payload:N]
function encodeMessage(type: number, payload: Buffer): Buffer {
  const header = Buffer.alloc(5)
  header.writeUInt8(type, 0)
  header.writeUInt32BE(payload.length, 1)
  return Buffer.concat([header, payload])
}

function decodeMessage(data: Buffer) {
  const type = data.readUInt8(0)
  const length = data.readUInt32BE(1)
  const payload = data.subarray(5, 5 + length)
  return { type, payload }
}
</code></pre>

<p>次の記事: <strong>イベント、タイマー、診断</strong> — EventEmitter、AbortController、async_hooks。</p>
