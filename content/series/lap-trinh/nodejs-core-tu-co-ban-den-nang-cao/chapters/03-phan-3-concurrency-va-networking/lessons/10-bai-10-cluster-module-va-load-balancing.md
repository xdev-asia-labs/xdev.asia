---
id: 019d8b40-g302-7001-b008-nodejs0000302
title: 'Bài 10: Cluster Module & Load Balancing'
slug: bai-10-cluster-module-va-load-balancing
description: >-
  Cluster module, fork(), round-robin. PM2 process manager, graceful
  shutdown. Sticky sessions, shared state challenges. Zero-downtime
  deployment, rolling restarts.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Concurrency & Networking"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-cluster"><strong>1. Cluster Module</strong></h2>

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

<h2 id="2-graceful-shutdown"><strong>2. Graceful Shutdown</strong></h2>

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

<h2 id="3-pm2"><strong>3. PM2 Process Manager</strong></h2>

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

<h2 id="4-zero-downtime"><strong>4. Zero-Downtime Deployment</strong></h2>

<pre><code class="language-bash">#!/bin/bash
# deploy.sh
git pull origin main
pnpm install --frozen-lockfile
pnpm build
pm2 reload ecosystem.config.cjs --env production
# PM2 reload từng worker 1, đảm bảo luôn có worker handling requests
</code></pre>

<h2 id="5-sticky-sessions"><strong>5. Sticky Sessions</strong></h2>

<pre><code class="language-ts">// Khi dùng WebSocket hoặc session, cần sticky sessions
// Dùng nginx upstream hoặc PM2 sticky cluster

// Với nginx:
// upstream app {
//   ip_hash;  # Sticky sessions
//   server 127.0.0.1:3001;
//   server 127.0.0.1:3002;
// }
</code></pre>

<p>Bài tiếp theo: <strong>TCP, UDP & WebSockets</strong> — net, dgram, ws.</p>
