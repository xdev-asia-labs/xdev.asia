---
id: 019d8b40-g102-7001-b008-nodejs0000102
title: 'Lesson 2: Event Loop & Async Patterns'
slug: bai-2-event-loop-va-async-patterns
description: >-
  Event Loop phases (timers, pending, poll, check, close). Microtasks vs
  macrotasks. process.nextTick vs queueMicrotask vs setImmediate. Callbacks,
  Promises, async/await. Promise.allSettled, Promise.any.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 1: Node.js Internals'
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: From Basics to Advanced'
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1301" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1301)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1046" cy="88" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="992" cy="194" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="938" cy="40" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="884" cy="146" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="830" cy="252" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="108" x2="1100" y2="188" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="138" x2="1050" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="945.2390923627308,86.5 945.2390923627308,129.5 908,151 870.7609076372692,129.5 870.7609076372692,86.50000000000001 908,65" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 Programming — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: Event Loop & Async Patterns</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js Core: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Node.js Internals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-event-loop"><strong>1. Event Loop Phases</strong></h2>

<pre><code class="language-text">   ┌───────────────────────────┐
┌─>│         timers            │  setTimeout, setInterval
│  └──────────┬────────────────┘
│  ┌──────────┴────────────────┐
│  │     pending callbacks     │  I/O callbacks deferred
│  └──────────┬────────────────┘
│  ┌──────────┴────────────────┐
│  │       idle, prepare       │  internal use
│  └──────────┬────────────────┘
│  ┌──────────┴────────────────┐
│  │         poll              │  I/O events (fs, net)
│  └──────────┬────────────────┘
│  ┌──────────┴────────────────┐
│  │         check             │  setImmediate
│  └──────────┬────────────────┘
│  ┌──────────┴────────────────┐
└──│      close callbacks      │  socket.on('close')
   └───────────────────────────┘
</code></pre>

<h2 id="2-microtasks"><strong>2. Microtasks vs Macrotasks</strong></h2>

<pre><code class="language-ts">console.log('1: Script start')

setTimeout(() => console.log('2: setTimeout'), 0)       // Macrotask (timers)
setImmediate(() => console.log('3: setImmediate'))       // Macrotask (check)

Promise.resolve().then(() => console.log('4: Promise'))  // Microtask
queueMicrotask(() => console.log('5: queueMicrotask'))   // Microtask
process.nextTick(() => console.log('6: nextTick'))       // Microtask (ưu tiên cao nhất)

console.log('7: Script end')

// Output:
// 1: Script start
// 7: Script end
// 6: nextTick        ← nextTick luôn chạy trước
// 4: Promise
// 5: queueMicrotask
// 2: setTimeout      ← hoặc 3 trước (phụ thuộc event loop)
// 3: setImmediate
</code></pre>

<h2 id="3-nexttick"><strong>3. process.nextTick vs queueMicrotask</strong></h2>

<table>
<thead><tr><th>API</th><th>Queue</th><th>Order</th><th>When to use</th></tr></thead>
<tbody>
<tr><td>process.nextTick</td><td>nextTick queue</td><td>Highest</td><td>Make sure to run immediately after the current operation</td></tr>
<tr><td>queueMicrotask</td><td>Microtask queue</td><td>After nextTick</td><td>Standards-compliant, web-compatible</td></tr>
<tr><td>Promise.then</td><td>Microtask queue</td><td>After nextTick</td><td>Async chaining</td></tr>
<tr><td>setTimeout(fn, 0)</td><td>Timers phase</td><td>Macrotask</td><td>Defer to next event loop iteration</td></tr>
<tr><td>setImmediate</td><td>Check phase</td><td>Macrotask</td><td>Execute after I/O poll</td></tr>
</tbody>
</table>

<h2 id="4-async-patterns"><strong>4. Async Patterns Evolution</strong></h2>

<pre><code class="language-ts">import { readFile } from 'node:fs'
import { readFile as readFileAsync } from 'node:fs/promises'

// 1. Callback (old style)
readFile('/etc/hosts', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})

// 2. Promise
readFileAsync('/etc/hosts', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err))

// 3. Async/Await (recommended)
async function main() {
  try {
    const data = await readFileAsync('/etc/hosts', 'utf8')
    console.log(data)
  } catch (err) {
    console.error(err)
  }
}
</code></pre>

<h2 id="5-promise-combinators"><strong>5. Promise Combinators</strong></h2>

<pre><code class="language-ts">const tasks = [
  fetch('https://api.example.com/users'),
  fetch('https://api.example.com/posts'),
  fetch('https://api.example.com/comments'),
]

// Promise.all — fail nếu 1 reject
const [users, posts, comments] = await Promise.all(tasks)

// Promise.allSettled — không fail, trả status
const results = await Promise.allSettled(tasks)
results.forEach(r => {
  if (r.status === 'fulfilled') console.log(r.value)
  else console.error(r.reason)
})

// Promise.any — trả kết quả đầu tiên thành công
const fastest = await Promise.any(tasks)

// Promise.race — trả kết quả đầu tiên (fulfilled hoặc rejected)
const first = await Promise.race(tasks)
</code></pre>

<h2 id="6-abort"><strong>6. AbortController</strong></h2>

<pre><code class="language-ts">const controller = new AbortController()
const { signal } = controller

// Timeout tự động cancel
setTimeout(() => controller.abort(), 5000)

try {
  const response = await fetch('https://api.example.com/data', { signal })
  const data = await response.json()
} catch (err) {
  if (err instanceof DOMException && err.name === 'AbortError') {
    console.log('Request was aborted')
  }
}
</code></pre>

<p>Next article: <strong>Module System & Package Management</strong> — CJS vs ESM, npm, pnpm.</p>
