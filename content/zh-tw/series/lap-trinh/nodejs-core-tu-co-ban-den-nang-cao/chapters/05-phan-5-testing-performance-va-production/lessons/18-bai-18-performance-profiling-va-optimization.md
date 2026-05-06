---
id: 019d8b40-g502-7001-b008-nodejs0000502
title: 第 18 課：效能分析與最佳化
slug: bai-18-performance-profiling-va-optimization
description: >-
  V8 分析器，--prof 標誌，火焰圖。記憶體洩漏檢測、堆快照。
  Clinic.js（Doctor、Bubbleprof、Flame）。事件循環滯後監控，0x 分析器。 GC 調諧。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 18
section_title: 第 5 部分：測試、性能和生產
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: Node.js 核心：從基礎到高級
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4368" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4368)"/>

  <!-- Decorations -->
  <g>
    <circle cx="940" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="780" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="960" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="170" x2="1100" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="200" x2="1050" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1041.650635094611,207.5 1041.650635094611,232.5 1020,245 998.349364905389,232.5 998.349364905389,207.5 1020,195" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 程式設計 — 第 18 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：表現分析與</tspan>
      <tspan x="60" dy="42">最佳化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js 核心：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：測試、性能和生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-v8-profiler"><strong>1.V8 分析器</strong></h2>

<pre><code class="language-bash"># CPU profiling
node --prof app.js
# Tạo isolate-*.log
node --prof-process isolate-0x*.log > processed.txt

# Flamegraph với 0x
npx 0x app.js
# Mở browser tại flamegraph output
</code></pre>

<h2 id="2-clinic"><strong>2.Clinic.js</strong></h2>

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

<h2 id="3-memory"><strong>3.內存洩漏檢測</strong></h2>

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

<h2 id="4-event-loop-lag"><strong>4. 事件循環延遲</strong></h2>

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

<h2 id="5-gc-tuning"><strong>5. GC 調優</strong></h2>

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

<h2 id="6-optimization"><strong>6. 優化清單</strong></h2>

<table>
<thead><tr><th>科技</th><th>影響</th><th>當</th></tr></thead>
<tbody>
<tr><td>流而不是緩衝區</td><td>高</td><td>大檔案處理</td></tr>
<tr><td>連接池</td><td>高</td><td>資料庫/Redis 連接</td></tr>
<tr><td>快取（Redis/LRU）</td><td>高</td><td>經常閱讀</td></tr>
<tr><td>工作執行緒</td><td>平均</td><td>CPU密集型任務</td></tr>
<tr><td>集群模式</td><td>平均</td><td>多核心利用率</td></tr>
<tr><td>原生插件</td><td>高</td><td>加密、影像處理</td></tr>
</tbody>
</table>

<p>下一篇： <strong>Docker 和 CI/CD</strong> — 多階段構建，GitHub Actions。</p>
