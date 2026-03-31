---
id: 019d8b40-h303-7001-b009-vuenuxt000303
title: 'Bài 11: Nitro Server Engine & API Routes'
slug: bai-11-nitro-server-engine-va-api-routes
description: >-
  Nitro server engine, server routes, event handlers. Server middleware,
  server plugins. Server storage, KV storage. Database integration
  (Drizzle ORM). Server utilities.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Nuxt 3 Fundamentals"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-server-routes"><strong>1. Server Routes</strong></h2>

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

<h2 id="2-validation"><strong>2. Input Validation</strong></h2>

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

<h2 id="3-middleware"><strong>3. Server Middleware</strong></h2>

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

<h2 id="4-drizzle"><strong>4. Database với Drizzle ORM</strong></h2>

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

<h2 id="5-storage"><strong>5. Server Storage</strong></h2>

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

<h2 id="6-server-plugins"><strong>6. Server Plugins</strong></h2>

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

<p>Bài tiếp theo: <strong>Middleware, Plugins & Modules</strong> — route middleware, Nuxt modules ecosystem.</p>
