---
id: 019d8b40-g302-7001-b008-nodejs0000302
title: 'レッスン 10: クラスター モジュールとロード バランシング'
slug: bai-10-cluster-module-va-load-balancing
description: >-
  クラスターモジュール、fork()、ラウンドロビン。 PM2 プロセス
  マネージャー、正常なシャットダウン。スティッキーなセッション、共有された状態の課題。ダウンタイムゼロの導入、ローリング再起動。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 3: 同時実行性とネットワーキング'
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js コア: 基本から高度まで'
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6395" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6395)"/>

  <!-- Decorations -->
  <g>
    <circle cx="623" cy="79" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="646" cy="182" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="669" cy="285" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="692" cy="128" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="231" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="129" x2="1100" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="159" x2="1050" y2="229" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.1051177665153,107 967.1051177665153,151 929,173 890.8948822334847,151 890.8948822334847,107.00000000000001 929,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 プログラミング — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: クラスター モジュールとロード バランシング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js コア: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 同時実行性とネットワーキング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cluster"><strong>1. クラスターモジュール</strong></h2>

<pre><code class="language-ts">import cluster from 'node:cluster'
import { createServer } from 'node:http'
import os from 'node:os'

const numCPUs = os.cpus().length

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`)

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died (${signal || code})`)
    cluster.fork() // Auto-restart
  })
} else {
  const server = createServer((req, res) => {
    res.writeHead(200)
    res.end(`Worker ${process.pid}\n`)
  })

  server.listen(3000)
  console.log(`Worker ${process.pid} started`)
}
</code></pre>

<h2 id="2-graceful-shutdown"><strong>2. 正常なシャットダウン</strong></h2>

<pre><code class="language-ts">if (cluster.isPrimary) {
  function shutdown() {
    console.log('Shutting down cluster...')
    for (const id in cluster.workers) {
      cluster.workers[id]?.send('shutdown')
    }
    setTimeout(() => process.exit(0), 10000) // Force exit after 10s
  }

  process.on('SIGTERM', shutdown)
  process.on('SIGINT', shutdown)
} else {
  const server = createServer(handler)
  server.listen(3000)

  process.on('message', (msg) => {
    if (msg === 'shutdown') {
      server.close(() => {
        console.log(`Worker ${process.pid} closed gracefully`)
        process.exit(0)
      })
    }
  })
}
</code></pre>

<h2 id="3-pm2"><strong>3. PM2プロセスマネージャー</strong></h2>

<pre><code class="language-js">// ecosystem.config.cjs
module.exports = {
  apps: [{
    name: 'api-server',
    script: 'dist/app.js',
    instances: 'max',        // Số CPU cores
    exec_mode: 'cluster',
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
    // Logs
    error_file: 'logs/err.log',
    out_file: 'logs/out.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
  }],
}
</code></pre>

<pre><code class="language-bash"># PM2 commands
pm2 start ecosystem.config.cjs --env production
pm2 reload api-server       # Zero-downtime reload
pm2 scale api-server +2     # Thêm 2 instances
pm2 monit                   # Monitor dashboard
pm2 logs api-server --lines 50
pm2 save && pm2 startup     # Auto-start on boot
</code></pre>

<h2 id="4-zero-downtime"><strong>4. ゼロダウンタイムの導入</strong></h2>

<pre><code class="language-bash">#!/bin/bash
# deploy.sh
git pull origin main
pnpm install --frozen-lockfile
pnpm build
pm2 reload ecosystem.config.cjs --env production
# PM2 reload từng worker 1, đảm bảo luôn có worker handling requests
</code></pre>

<h2 id="5-sticky-sessions"><strong>5. スティッキーセッション</strong></h2>

<pre><code class="language-ts">// Khi dùng WebSocket hoặc session, cần sticky sessions
// Dùng nginx upstream hoặc PM2 sticky cluster

// Với nginx:
// upstream app {
//   ip_hash;  # Sticky sessions
//   server 127.0.0.1:3001;
//   server 127.0.0.1:3002;
// }
</code></pre>

<p>次の記事: <strong>TCP、UDP、WebSocket</strong> — ネット、ディグラム、WS。</p>
