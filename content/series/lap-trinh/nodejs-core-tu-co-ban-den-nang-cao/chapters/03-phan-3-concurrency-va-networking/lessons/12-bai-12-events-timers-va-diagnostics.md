---
id: 019d8b40-g304-7001-b008-nodejs0000304
title: 'Bài 12: Events, Timers & Diagnostics'
slug: bai-12-events-timers-va-diagnostics
description: >-
  EventEmitter patterns, custom events, memory leak detection.
  AbortController/AbortSignal. Diagnostic Channel, async_hooks.
  Node.js Inspector, heap snapshots.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 3: Concurrency & Networking"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2479" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2479)"/>

  <!-- Decorations -->
  <g>
    <circle cx="870" cy="220" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="910" cy="260" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="150" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="40" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="60" x2="1100" y2="140" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="90" x2="1050" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="940.3108891324554,92.5 940.3108891324554,127.5 910,145 879.6891108675446,127.5 879.6891108675446,92.50000000000001 910,75" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Lập trình — Bài 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: Events, Timers &amp; Diagnostics</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js Core: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Concurrency &amp; Networking</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-eventemitter"><strong>1. EventEmitter Patterns</strong></h2>

<pre><code class="language-ts">import { EventEmitter } from 'node:events'

// Typed EventEmitter
interface OrderEvents {
  created: [order: { id: string; total: number }]
  paid: [orderId: string, amount: number]
  shipped: [orderId: string]
  error: [error: Error]
}

class OrderService extends EventEmitter&lt;OrderEvents&gt; {
  async createOrder(data: { items: string[]; total: number }) {
    const order = { id: crypto.randomUUID(), total: data.total }
    this.emit('created', order)
    return order
  }
}

const service = new OrderService()

service.on('created', (order) => {
  console.log(`Order ${order.id} created: $${order.total}`)
})

// Once — lắng nghe 1 lần
service.once('paid', (orderId, amount) => {
  console.log(`${orderId} paid $${amount}`)
})

// Async iterator
const ac = new AbortController()
for await (const [order] of EventEmitter.on(service, 'created', { signal: ac.signal })) {
  console.log(`New order: ${order.id}`)
}
</code></pre>

<h2 id="2-abort"><strong>2. AbortController & AbortSignal</strong></h2>

<pre><code class="language-ts">// Timeout signal
const signal = AbortSignal.timeout(5000)

// Combine signals
const controller = new AbortController()
const combined = AbortSignal.any([
  controller.signal,
  AbortSignal.timeout(10000),
])

// Sử dụng với EventEmitter
const emitter = new EventEmitter()
const promise = EventEmitter.once(emitter, 'data', { signal: combined })

// Cancel
controller.abort('User cancelled')
</code></pre>

<h2 id="3-diagnostics"><strong>3. Diagnostics Channel</strong></h2>

<pre><code class="language-ts">import diagnostics_channel from 'node:diagnostics_channel'

// Subscribe to HTTP requests
diagnostics_channel.subscribe('http.client.request.start', (message) => {
  const { request } = message as any
  console.log(`HTTP → ${request.method} ${request.host}${request.path}`)
})

// Custom channel
const channel = diagnostics_channel.channel('myapp:db:query')

channel.subscribe((message) => {
  const { query, duration } = message as { query: string; duration: number }
  if (duration > 100) {
    console.warn(`Slow query (${duration}ms): ${query}`)
  }
})

// Publish
channel.publish({ query: 'SELECT * FROM users', duration: 150 })
</code></pre>

<h2 id="4-memory-leak"><strong>4. Memory Leak Detection</strong></h2>

<pre><code class="language-ts">import v8 from 'node:v8'
import { writeFileSync } from 'node:fs'

// Heap snapshot
function takeHeapSnapshot() {
  const snapshotStream = v8.writeHeapSnapshot()
  console.log(`Heap snapshot: ${snapshotStream}`)
}

// Memory monitoring
setInterval(() => {
  const { heapUsed, heapTotal, rss } = process.memoryUsage()
  console.log({
    heapUsed: `${(heapUsed / 1e6).toFixed(1)}MB`,
    heapTotal: `${(heapTotal / 1e6).toFixed(1)}MB`,
    rss: `${(rss / 1e6).toFixed(1)}MB`,
  })

  // Alert if memory exceeds threshold
  if (heapUsed > 500 * 1e6) {
    takeHeapSnapshot()
    console.error('Memory threshold exceeded!')
  }
}, 10000)

// EventEmitter leak warning
const emitter = new EventEmitter()
emitter.setMaxListeners(20) // Default: 10
</code></pre>

<h2 id="5-inspector"><strong>5. Node.js Inspector API</strong></h2>

<pre><code class="language-ts">import inspector from 'node:inspector/promises'

// Programmatic profiling
const session = new inspector.Session()
session.connect()

await session.post('Profiler.enable')
await session.post('Profiler.start')

// ... run code to profile ...

const { profile } = await session.post('Profiler.stop')
// Save profile for Chrome DevTools
</code></pre>

<p>Bài tiếp theo: <strong>Xây dựng HTTP Framework từ Scratch</strong> — router, middleware pipeline.</p>
