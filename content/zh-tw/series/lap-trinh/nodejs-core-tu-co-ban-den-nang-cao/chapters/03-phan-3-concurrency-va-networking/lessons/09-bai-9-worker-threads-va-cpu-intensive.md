---
id: 019d8b40-g301-7001-b008-nodejs0000301
title: 第 9 課：工作執行緒與 CPU 密集型任務
slug: bai-9-worker-threads-va-cpu-intensive
description: >-
  工作線程、SharedArrayBuffer、原子。 MessageChannel，可傳輸物件。線程池模式，Piscina。 CPU
  密集型任務卸載、映像處理。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：並發與網絡
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: Node.js 核心：從基礎到高級
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6545" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6545)"/>

  <!-- Decorations -->
  <g>
    <circle cx="638" cy="164" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="676" cy="122" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="714" cy="80" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="752" cy="38" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="256" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="124" x2="1100" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="154" x2="1050" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1007.7749907475932,154.5 1007.7749907475932,193.5 974,213 940.2250092524068,193.5 940.2250092524068,154.5 974,135" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 程式設計 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：工作執行緒與 CPU 密集型</tspan>
      <tspan x="60" dy="42">任務</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js 核心：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：並發與網絡</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-worker-threads"><strong>1. 基本工作線程</strong></h2>

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

<h2 id="2-parallel"><strong>2. 並行處理</strong></h2>

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

<h2 id="3-shared-memory"><strong>3. SharedArrayBuffer 和原子</strong></h2>

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

<h2 id="4-piscina"><strong>4. 帶有 Piscina 的線程池</strong></h2>

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

<h2 id="5-transferable"><strong>5. 可轉讓物品</strong></h2>

<pre><code class="language-ts">// Transfer ownership (zero-copy) thay vì clone
const buffer = new ArrayBuffer(1024 * 1024) // 1MB

worker.postMessage({ buffer }, [buffer])
// buffer.byteLength === 0 (đã transfer, không còn ở main thread)
</code></pre>

<p>下一篇： <strong>叢集模組和負載平衡</strong> — fork、PM2、優雅關機。</p>
