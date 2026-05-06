---
id: 019d8b40-g403-7001-b008-nodejs0000403
title: 'レッスン 15: キャッシュ、キュー、バックグラウンド ジョブ'
slug: bai-15-caching-queues-va-background-jobs
description: >-
  Redis クライアント (ioredis)、キャッシュ パターン。 BullMQ ジョブ キュー、優先キュー、レート制限。 node-cron を使用した
  Cron ジョブ。インメモリ キャッシュ (LRU キャッシュ)。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 4: フレームワークを使用しない構築'
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js コア: 基本から高度まで'
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9048" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9048)"/>

  <!-- Decorations -->
  <g>
    <circle cx="794" cy="132" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="988" cy="166" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="682" cy="200" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="876" cy="234" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="268" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="112" x2="1100" y2="192" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="142" x2="1050" y2="212" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="935.3826859021799,98.5 935.3826859021799,125.5 912,139 888.6173140978201,125.5 888.6173140978201,98.5 912,85" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 プログラミング — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: キャッシュ、キュー、バックグラウンド ジョブ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js コア: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: フレームワークを使用しない構築</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-redis"><strong>1. Redis クライアント (ioredis)</strong></h2>

<pre><code class="language-ts">import Redis from 'ioredis'

const redis = new Redis({
  host: 'localhost',
  port: 6379,
  maxRetriesPerRequest: 3,
  retryStrategy: (times) => Math.min(times * 50, 2000),
})

// Basic operations
await redis.set('user:1', JSON.stringify({ name: 'A' }), 'EX', 3600)
const user = JSON.parse(await redis.get('user:1') || 'null')

// Hash
await redis.hset('user:1', { name: 'A', email: 'a@test.com' })
const data = await redis.hgetall('user:1')

// Sorted set (leaderboard)
await redis.zadd('scores', 100, 'player1', 200, 'player2')
const top10 = await redis.zrevrange('scores', 0, 9, 'WITHSCORES')
</code></pre>

<h2 id="2-caching"><strong>2. キャッシュパターン</strong></h2>

<pre><code class="language-ts">// Cache-aside pattern
async function getUser(id: string) {
  const cacheKey = `user:${id}`
  const cached = await redis.get(cacheKey)
  if (cached) return JSON.parse(cached)

  const user = await db.query('SELECT * FROM users WHERE id = $1', [id])
  await redis.set(cacheKey, JSON.stringify(user), 'EX', 300) // 5 phút
  return user
}

// Cache invalidation
async function updateUser(id: string, data: Partial&lt;User&gt;) {
  await db.query('UPDATE users SET name = $1 WHERE id = $2', [data.name, id])
  await redis.del(`user:${id}`) // Invalidate cache
}

// LRU Cache (in-memory)
const { LRUCache } = await import('lru-cache')

const cache = new LRUCache&lt;string, any&gt;({
  max: 500,            // Max entries
  ttl: 1000 * 60 * 5,  // 5 phút
  ttlAutopurge: true,
})
</code></pre>

<h2 id="3-bullmq"><strong>3. BullMQ ジョブキュー</strong></h2>

<pre><code class="language-ts">import { Queue, Worker, QueueScheduler } from 'bullmq'

const connection = { host: 'localhost', port: 6379 }

// Tạo queue
const emailQueue = new Queue('emails', { connection })

// Add job
await emailQueue.add('welcome', {
  to: 'user@example.com',
  subject: 'Welcome!',
}, {
  attempts: 3,
  backoff: { type: 'exponential', delay: 1000 },
  priority: 1,
  removeOnComplete: 100,
})

// Worker xử lý jobs
const worker = new Worker('emails', async (job) => {
  console.log(`Processing ${job.name}: ${job.data.to}`)
  await sendEmail(job.data)
}, {
  connection,
  concurrency: 5,
  limiter: { max: 10, duration: 1000 }, // Rate limit: 10/s
})

worker.on('completed', (job) => console.log(`Done: ${job.id}`))
worker.on('failed', (job, err) => console.error(`Failed: ${job?.id}`, err))
</code></pre>

<h2 id="4-cron"><strong>4. Cron ジョブ</strong></h2>

<pre><code class="language-ts">import cron from 'node-cron'

// Chạy mỗi 5 phút
cron.schedule('*/5 * * * *', async () => {
  console.log('Running cleanup...')
  await db.query('DELETE FROM sessions WHERE expires_at < NOW()')
})

// Chạy lúc 2:00 AM hàng ngày
cron.schedule('0 2 * * *', async () => {
  await generateDailyReport()
})

// Chạy đầu mỗi tháng
cron.schedule('0 0 1 * *', async () => {
  await archiveOldData()
})
</code></pre>

<h2 id="5-pub-sub"><strong>5. Redis Pub/Sub</strong></h2>

<pre><code class="language-ts">const subscriber = new Redis()
const publisher = new Redis()

// Subscribe
await subscriber.subscribe('notifications')
subscriber.on('message', (channel, message) => {
  console.log(`[${channel}] ${message}`)
})

// Publish
await publisher.publish('notifications', JSON.stringify({
  type: 'order_created',
  orderId: '123',
}))
</code></pre>

<p>次の記事: <strong>ネイティブ アドオンと N-API</strong> — napi-rs、node-gyp、Rust バインディング。</p>
