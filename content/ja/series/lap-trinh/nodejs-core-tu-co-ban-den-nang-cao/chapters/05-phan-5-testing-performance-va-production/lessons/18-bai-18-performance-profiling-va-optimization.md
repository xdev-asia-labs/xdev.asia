---
id: 019d8b40-g502-7001-b008-nodejs0000502
title: 'レッスン 18: パフォーマンスのプロファイリングと最適化'
slug: bai-18-performance-profiling-va-optimization
description: >-
  V8 プロファイラ、--prof フラグ、フレームグラフ。メモリ リークの検出、ヒープ スナップショット。 Clinic.js
  (Doctor、Bubbleprof、Flame)。イベントループラグモニタリング、0xプロファイラ。 GCチューニング。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 18
section_title: 'パート 5: テスト、パフォーマンス、および実稼働'
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js コア: 基本から高度まで'
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 プログラミング — レッスン 18</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 18: パフォーマンス プロファイリングと</tspan>
      <tspan x="60" dy="42">最適化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js コア: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: テスト、パフォーマンス、および実稼働</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-v8-profiler"><strong>1. V8プロファイラー</strong></h2>

<pre><code class="language-bash"># CPU profiling
node --prof app.js
# Tạo isolate-*.log
node --prof-process isolate-0x*.log > processed.txt

# Flamegraph với 0x
npx 0x app.js
# Mở browser tại flamegraph output
</code></pre>

<h2 id="2-clinic"><strong>2. クリニック.js</strong></h2>

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

<h2 id="3-memory"><strong>3. メモリリークの検出</strong></h2>

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

<h2 id="4-event-loop-lag"><strong>4. イベントループラグ</strong></h2>

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

<h2 id="5-gc-tuning"><strong>5. GC チューニング</strong></h2>

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

<h2 id="6-optimization"><strong>6. 最適化チェックリスト</strong></h2>

<table>
<thead><tr><th>技術的な</th><th>影響</th><th>いつ</th></tr></thead>
<tbody>
<tr><td>バッファの代わりにストリーム</td><td>高</td><td>大きなファイルの処理</td></tr>
<tr><td>接続プーリング</td><td>高</td><td>データベース/Redis接続</td></tr>
<tr><td>キャッシュ (Redis/LRU)</td><td>高</td><td>頻繁に読む</td></tr>
<tr><td>ワーカースレッド</td><td>平均</td><td>CPU を集中的に使用するタスク</td></tr>
<tr><td>クラスターモード</td><td>平均</td><td>マルチコアの利用</td></tr>
<tr><td>ネイティブアドオン</td><td>高</td><td>暗号、画像処理</td></tr>
</tbody>
</table>

<p>次の記事: <strong>Docker と CI/CD</strong> — マルチステージビルド、GitHub Actions。</p>
