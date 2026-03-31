---
id: 019d8b40-g303-7001-b008-nodejs0000303
title: 'Bài 11: TCP, UDP & WebSockets'
slug: bai-11-tcp-udp-va-websockets
description: >-
  net module (TCP server/client), dgram (UDP). WebSocket server
  với ws library. Connection management, binary protocols.
  Protocol design, custom wire formats.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Concurrency & Networking"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-tcp"><strong>1. TCP Server & Client</strong></h2>

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

<h2 id="2-udp"><strong>2. UDP (dgram)</strong></h2>

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

<h2 id="3-websocket"><strong>3. WebSocket Server (ws)</strong></h2>

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

<h2 id="4-rooms"><strong>4. Room-based Pattern</strong></h2>

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

<h2 id="5-binary"><strong>5. Binary Protocol</strong></h2>

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

<p>Bài tiếp theo: <strong>Events, Timers & Diagnostics</strong> — EventEmitter, AbortController, async_hooks.</p>
