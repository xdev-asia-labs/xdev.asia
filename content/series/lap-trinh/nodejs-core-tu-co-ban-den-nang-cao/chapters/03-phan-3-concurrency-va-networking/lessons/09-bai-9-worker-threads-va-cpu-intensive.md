---
id: 019d8b40-g301-7001-b008-nodejs0000301
title: 'Bài 9: Worker Threads & CPU-intensive Tasks'
slug: bai-9-worker-threads-va-cpu-intensive
description: >-
  Worker Threads, SharedArrayBuffer, Atomics. MessageChannel,
  transferable objects. Thread pool patterns, Piscina.
  CPU-intensive task offloading, image processing.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Concurrency & Networking"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-worker-threads"><strong>1. Worker Threads cơ bản</strong></h2>

<pre><code class="language-ts">// main.ts
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads'

if (isMainThread) {
  // Main thread — tạo worker
  const worker = new Worker(new URL(import.meta.url), {
    workerData: { start: 0, end: 1_000_000 }
  })

  worker.on('message', (result) => {
    console.log(`Sum: ${result}`)
  })

  worker.on('error', (err) => console.error(err))
  worker.on('exit', (code) => console.log(`Worker exited: ${code}`))
} else {
  // Worker thread
  const { start, end } = workerData as { start: number; end: number }
  let sum = 0
  for (let i = start; i < end; i++) sum += i
  parentPort!.postMessage(sum)
}
</code></pre>

<h2 id="2-parallel"><strong>2. Parallel Processing</strong></h2>

<pre><code class="language-ts">import { Worker } from 'node:worker_threads'
import os from 'node:os'

function runWorker(data: { start: number; end: number }): Promise&lt;number&gt; {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData: data })
    worker.on('message', resolve)
    worker.on('error', reject)
  })
}

// Chia công việc cho nhiều workers
const cpuCount = os.cpus().length
const total = 10_000_000
const chunkSize = Math.ceil(total / cpuCount)

const tasks = Array.from({ length: cpuCount }, (_, i) => ({
  start: i * chunkSize,
  end: Math.min((i + 1) * chunkSize, total),
}))

const results = await Promise.all(tasks.map(runWorker))
const totalSum = results.reduce((a, b) => a + b, 0)
console.log(`Total: ${totalSum} (${cpuCount} workers)`)
</code></pre>

<h2 id="3-shared-memory"><strong>3. SharedArrayBuffer & Atomics</strong></h2>

<pre><code class="language-ts">// Shared memory giữa threads — zero-copy
const sharedBuffer = new SharedArrayBuffer(4) // 4 bytes
const sharedArray = new Int32Array(sharedBuffer)

const worker = new Worker('./worker.js', {
  workerData: { buffer: sharedBuffer }
})

// worker.js
const { buffer } = workerData
const arr = new Int32Array(buffer)

// Atomic operations — thread-safe
Atomics.add(arr, 0, 1)
Atomics.store(arr, 0, 42)
const value = Atomics.load(arr, 0)

// Wait/Notify — synchronization
Atomics.wait(arr, 0, 0)    // Block until value changes
Atomics.notify(arr, 0, 1)  // Wake 1 waiting thread
</code></pre>

<h2 id="4-piscina"><strong>4. Thread Pool với Piscina</strong></h2>

<pre><code class="language-ts">import Piscina from 'piscina'

const pool = new Piscina({
  filename: new URL('./worker.js', import.meta.url).href,
  maxThreads: 4,
  minThreads: 2,
  idleTimeout: 30000,
})

// Worker task
// worker.js
export default function processImage(data: { path: string; width: number }) {
  // CPU-intensive image processing
  return { processed: true, path: data.path }
}

// Main — submit tasks
const results = await Promise.all(
  images.map(img => pool.run({ path: img, width: 800 }))
)
</code></pre>

<h2 id="5-transferable"><strong>5. Transferable Objects</strong></h2>

<pre><code class="language-ts">// Transfer ownership (zero-copy) thay vì clone
const buffer = new ArrayBuffer(1024 * 1024) // 1MB

worker.postMessage({ buffer }, [buffer])
// buffer.byteLength === 0 (đã transfer, không còn ở main thread)
</code></pre>

<p>Bài tiếp theo: <strong>Cluster Module & Load Balancing</strong> — fork, PM2, graceful shutdown.</p>
