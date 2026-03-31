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
