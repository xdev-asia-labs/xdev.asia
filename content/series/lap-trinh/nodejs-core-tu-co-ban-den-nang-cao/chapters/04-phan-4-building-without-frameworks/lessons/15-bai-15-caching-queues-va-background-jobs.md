---
id: 019d8b40-g403-7001-b008-nodejs0000403
title: 'Bài 15: Caching, Queues & Background Jobs'
slug: bai-15-caching-queues-va-background-jobs
description: >-
  Redis client (ioredis), caching patterns. BullMQ job queues,
  priority queues, rate limiting. Cron jobs với node-cron.
  In-memory caching (LRU cache).
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 4: Building Without Frameworks"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-redis"><strong>1. Redis Client (ioredis)</strong></h2>

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

<h2 id="2-caching"><strong>2. Caching Patterns</strong></h2>

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

<h2 id="3-bullmq"><strong>3. BullMQ Job Queue</strong></h2>

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

<h2 id="4-cron"><strong>4. Cron Jobs</strong></h2>

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

<p>Bài tiếp theo: <strong>Native Addons & N-API</strong> — napi-rs, node-gyp, Rust bindings.</p>
