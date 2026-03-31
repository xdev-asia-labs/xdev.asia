---
id: 019d8b40-g102-7001-b008-nodejs0000102
title: 'Bài 2: Event Loop & Async Patterns'
slug: bai-2-event-loop-va-async-patterns
description: >-
  Event Loop phases (timers, pending, poll, check, close). Microtasks
  vs macrotasks. process.nextTick vs queueMicrotask vs setImmediate.
  Callbacks, Promises, async/await. Promise.allSettled, Promise.any.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Node.js Internals"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

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
<thead><tr><th>API</th><th>Queue</th><th>Thứ tự</th><th>Khi nào dùng</th></tr></thead>
<tbody>
<tr><td>process.nextTick</td><td>nextTick queue</td><td>Cao nhất</td><td>Đảm bảo chạy ngay sau operation hiện tại</td></tr>
<tr><td>queueMicrotask</td><td>Microtask queue</td><td>Sau nextTick</td><td>Standards-compliant, web-compatible</td></tr>
<tr><td>Promise.then</td><td>Microtask queue</td><td>Sau nextTick</td><td>Async chaining</td></tr>
<tr><td>setTimeout(fn, 0)</td><td>Timers phase</td><td>Macrotask</td><td>Defer to next event loop iteration</td></tr>
<tr><td>setImmediate</td><td>Check phase</td><td>Macrotask</td><td>Execute sau I/O poll</td></tr>
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

<p>Bài tiếp theo: <strong>Module System & Package Management</strong> — CJS vs ESM, npm, pnpm.</p>
