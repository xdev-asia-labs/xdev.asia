---
id: 019d8b40-g502-7001-b008-nodejs0000502
title: 'Bài 18: Performance Profiling & Optimization'
slug: bai-18-performance-profiling-va-optimization
description: >-
  V8 profiler, --prof flag, flamegraphs. Memory leak detection,
  heap snapshots. Clinic.js (Doctor, Bubbleprof, Flame). Event Loop
  lag monitoring, 0x profiler. GC tuning.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 5: Testing, Performance & Production"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-v8-profiler"><strong>1. V8 Profiler</strong></h2>

<pre><code class="language-bash"># CPU profiling
node --prof app.js
# Tạo isolate-*.log
node --prof-process isolate-0x*.log > processed.txt

# Flamegraph với 0x
npx 0x app.js
# Mở browser tại flamegraph output
</code></pre>

<h2 id="2-clinic"><strong>2. Clinic.js</strong></h2>

<pre><code class="language-bash"># Clinic Doctor — phân tích tổng quát
npx clinic doctor -- node app.js
# Output: HTML report với CPU, memory, event loop, handles

# Clinic Flame — flamegraph
npx clinic flame -- node app.js
# Output: Interactive flamegraph

# Clinic Bubbleprof — async visualization
npx clinic bubbleprof -- node app.js
# Output: Async flow visualization
</code></pre>

<h2 id="3-memory"><strong>3. Memory Leak Detection</strong></h2>

<pre><code class="language-ts">import v8 from 'node:v8'

// Heap snapshot
v8.writeHeapSnapshot() // Tạo file .heapsnapshot → mở trong Chrome DevTools

// Programmatic monitoring
function monitorMemory() {
  const { heapUsed, heapTotal, external, rss } = process.memoryUsage()
  return {
    heapUsed: Math.round(heapUsed / 1e6),
    heapTotal: Math.round(heapTotal / 1e6),
    external: Math.round(external / 1e6),
    rss: Math.round(rss / 1e6),
  }
}

// Detect memory growth
let lastHeap = 0
setInterval(() => {
  const { heapUsed } = monitorMemory()
  const growth = heapUsed - lastHeap
  if (growth > 10) console.warn(`Memory grew by ${growth}MB`)
  lastHeap = heapUsed
}, 30000)
</code></pre>

<h2 id="4-event-loop-lag"><strong>4. Event Loop Lag</strong></h2>

<pre><code class="language-ts">import { monitorEventLoopDelay } from 'node:perf_hooks'

const histogram = monitorEventLoopDelay({ resolution: 20 })
histogram.enable()

setInterval(() => {
  console.log({
    min: (histogram.min / 1e6).toFixed(2) + 'ms',
    max: (histogram.max / 1e6).toFixed(2) + 'ms',
    mean: (histogram.mean / 1e6).toFixed(2) + 'ms',
    p99: (histogram.percentile(99) / 1e6).toFixed(2) + 'ms',
  })
  histogram.reset()
}, 10000)
</code></pre>

<h2 id="5-gc-tuning"><strong>5. GC Tuning</strong></h2>

<pre><code class="language-bash"># Xem GC events
node --trace-gc app.js

# GC flags
node --max-old-space-size=4096 \
     --max-semi-space-size=64 \
     --optimize-for-size \
     app.js

# Expose GC cho manual trigger (chỉ dev/debugging)
node --expose-gc -e "global.gc(); console.log(process.memoryUsage())"
</code></pre>

<h2 id="6-optimization"><strong>6. Optimization Checklist</strong></h2>

<table>
<thead><tr><th>Kỹ thuật</th><th>Impact</th><th>Khi nào</th></tr></thead>
<tbody>
<tr><td>Stream thay Buffer</td><td>Cao</td><td>File processing lớn</td></tr>
<tr><td>Connection pooling</td><td>Cao</td><td>Database/Redis connections</td></tr>
<tr><td>Caching (Redis/LRU)</td><td>Cao</td><td>Frequent reads</td></tr>
<tr><td>Worker Threads</td><td>Trung bình</td><td>CPU-intensive tasks</td></tr>
<tr><td>Cluster mode</td><td>Trung bình</td><td>Multi-core utilization</td></tr>
<tr><td>Native addons</td><td>Cao</td><td>Crypto, image processing</td></tr>
</tbody>
</table>

<p>Bài tiếp theo: <strong>Docker & CI/CD</strong> — multi-stage build, GitHub Actions.</p>
