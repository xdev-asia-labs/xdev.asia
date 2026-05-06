---
id: 019d8b40-h303-7001-b009-vuenuxt000303
title: 'レッスン 11: Nitro サーバー エンジンと API ルート'
slug: bai-11-nitro-server-engine-va-api-routes
description: >-
  Nitro サーバー エンジン、サーバー ルート、イベント
  ハンドラー。サーバーミドルウェア、サーバープラグイン。サーバーストレージ、KVストレージ。データベース統合 (Drizzle
  ORM)。サーバーユーティリティ。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 3: Nuxt 3 の基礎'
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js と Nuxt: 基本から高度まで'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8989" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8989)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1019" cy="107" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="938" cy="46" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="857" cy="245" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="776" cy="184" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="695" cy="123" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="237" x2="1100" y2="317" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="267" x2="1050" y2="337" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="964.712812921102,121 964.712812921102,153 937,169 909.287187078898,153 909.287187078898,121.00000000000001 937,105" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 プログラミング — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: Nitro サーバー エンジンと API ルート</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js と Nuxt: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: Nuxt 3 の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-server-routes"><strong>1. サーバールート</strong></h2>

<pre><code class="language-ts">// server/api/posts/index.get.ts
export default defineEventHandler(async (event) => {
  const query = getQuery(event) // { page: '1', limit: '10' }
  const posts = await db.post.findMany({
    skip: (Number(query.page || 1) - 1) * 10,
    take: Number(query.limit || 10),
  })
  return posts
})

// server/api/posts/index.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const post = await db.post.create({
    data: { title: body.title, content: body.content },
  })

  setResponseStatus(event, 201)
  return post
})

// server/api/posts/[id].get.ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const post = await db.post.findUnique({ where: { id } })

  if (!post) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  return post
})

// server/api/posts/[id].delete.ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  await db.post.delete({ where: { id } })
  return { deleted: true }
})
</code></pre>

<h2 id="2-validation"><strong>2. 入力の検証</strong></h2>

<pre><code class="language-ts">// server/api/posts/index.post.ts
import { z } from 'zod'

const PostSchema = z.object({
  title: z.string().min(3).max(200),
  content: z.string().min(10),
  published: z.boolean().optional().default(false),
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, (body) =>
    PostSchema.parse(body)
  )

  return db.post.create({ data: body })
})
</code></pre>

<h2 id="3-middleware"><strong>3. サーバーミドルウェア</strong></h2>

<pre><code class="language-ts">// server/middleware/auth.ts
export default defineEventHandler(async (event) => {
  const protectedPaths = ['/api/admin', '/api/user']
  const path = getRequestURL(event).pathname

  if (protectedPaths.some(p => path.startsWith(p))) {
    const token = getHeader(event, 'authorization')?.replace('Bearer ', '')

    if (!token) {
      throw createError({ statusCode: 401, message: 'Unauthorized' })
    }

    try {
      const payload = verifyToken(token)
      event.context.user = payload
    } catch {
      throw createError({ statusCode: 401, message: 'Invalid token' })
    }
  }
})

// server/middleware/logger.ts
export default defineEventHandler((event) => {
  console.log(`[${event.method}] ${getRequestURL(event).pathname}`)
})
</code></pre>

<h2 id="4-drizzle"><strong>4. Drizzle ORMによるデータベース</strong></h2>

<pre><code class="language-ts">// server/db/schema.ts
import { pgTable, text, timestamp, boolean } from 'drizzle-orm/pg-core'

export const posts = pgTable('posts', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: text('title').notNull(),
  content: text('content'),
  published: boolean('published').default(false),
  createdAt: timestamp('created_at').defaultNow(),
})

// server/db/index.ts
import { drizzle } from 'drizzle-orm/node-postgres'
import * as schema from './schema'

export const db = drizzle(process.env.DATABASE_URL!, { schema })

// server/api/posts/index.get.ts
import { db } from '~/server/db'
import { posts } from '~/server/db/schema'
import { desc, eq } from 'drizzle-orm'

export default defineEventHandler(async () => {
  return db.select().from(posts).where(eq(posts.published, true)).orderBy(desc(posts.createdAt))
})
</code></pre>

<h2 id="5-storage"><strong>5. サーバーストレージ</strong></h2>

<pre><code class="language-ts">// KV Storage — built-in
export default defineEventHandler(async (event) => {
  const storage = useStorage('cache')

  // Get cached data
  let data = await storage.getItem('posts:all')
  if (!data) {
    data = await db.select().from(posts)
    await storage.setItem('posts:all', data)
  }

  return data
})

// nuxt.config.ts — storage driver
export default defineNuxtConfig({
  nitro: {
    storage: {
      cache: {
        driver: 'redis',
        host: 'localhost',
        port: 6379,
      },
    },
  },
})
</code></pre>

<h2 id="6-server-plugins"><strong>6. サーバープラグイン</strong></h2>

<pre><code class="language-ts">// server/plugins/db.ts
export default defineNitroPlugin((nitroApp) => {
  console.log('Nitro plugin — DB initialized')

  nitroApp.hooks.hook('request', (event) => {
    // Run on every request
  })

  nitroApp.hooks.hook('close', async () => {
    // Cleanup on shutdown
    await db.$disconnect()
  })
})
</code></pre>

<p>次の記事: <strong>ミドルウェア、プラグイン、モジュール</strong> — ルートミドルウェア、Nuxtモジュールエコシステム。</p>
