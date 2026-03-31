---
id: 019d8b40-h402-7001-b009-vuenuxt000402
title: 'Bài 14: Database & ORM trong Nuxt'
slug: bai-14-database-va-orm-trong-nuxt
description: >-
  Drizzle ORM, Prisma trong Nuxt. Database migrations, seeding.
  nuxt-hub cho D1/R2 (Cloudflare). Repository pattern,
  server-side CRUD.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Nuxt Advanced & Full-Stack"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-drizzle-setup"><strong>1. Drizzle ORM Setup</strong></h2>

<pre><code class="language-bash">npm install drizzle-orm postgres
npm install -D drizzle-kit
</code></pre>

<pre><code class="language-ts">// server/db/schema.ts
import { pgTable, text, timestamp, boolean, integer } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  hashedPassword: text('hashed_password'),
  role: text('role').default('user'),
  createdAt: timestamp('created_at').defaultNow(),
})

export const posts = pgTable('posts', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  content: text('content'),
  published: boolean('published').default(false),
  authorId: text('author_id').references(() => users.id),
  viewCount: integer('view_count').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})
</code></pre>

<pre><code class="language-ts">// server/db/index.ts
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const client = postgres(process.env.DATABASE_URL!)
export const db = drizzle(client, { schema })
</code></pre>

<h2 id="2-migrations"><strong>2. Migrations</strong></h2>

<pre><code class="language-ts">// drizzle.config.ts
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './server/db/schema.ts',
  out: './server/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
</code></pre>

<pre><code class="language-bash">npx drizzle-kit generate  # Generate migration
npx drizzle-kit migrate   # Apply migration
npx drizzle-kit studio    # Visual editor
</code></pre>

<h2 id="3-crud"><strong>3. CRUD Operations</strong></h2>

<pre><code class="language-ts">// server/api/posts/index.get.ts
import { db } from '~/server/db'
import { posts, users } from '~/server/db/schema'
import { eq, desc, like, and, sql } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = Number(query.page || 1)
  const limit = Number(query.limit || 10)
  const search = query.search as string

  const conditions = [eq(posts.published, true)]
  if (search) {
    conditions.push(like(posts.title, `%${search}%`))
  }

  const [data, [{ count }]] = await Promise.all([
    db.select({
      id: posts.id,
      title: posts.title,
      slug: posts.slug,
      createdAt: posts.createdAt,
      author: { name: users.name },
    })
    .from(posts)
    .leftJoin(users, eq(posts.authorId, users.id))
    .where(and(...conditions))
    .orderBy(desc(posts.createdAt))
    .offset((page - 1) * limit)
    .limit(limit),

    db.select({ count: sql`count(*)`.mapWith(Number) })
      .from(posts)
      .where(and(...conditions)),
  ])

  return { data, total: count, page, limit }
})

// server/api/posts/index.post.ts
export default defineEventHandler(async (event) => {
  const user = await requireAuth(event)
  const body = await readBody(event)

  const [post] = await db.insert(posts).values({
    title: body.title,
    slug: body.slug,
    content: body.content,
    authorId: user.id,
  }).returning()

  setResponseStatus(event, 201)
  return post
})

// server/api/posts/[id].put.ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')!
  const body = await readBody(event)

  const [updated] = await db.update(posts)
    .set({ ...body, updatedAt: new Date() })
    .where(eq(posts.id, id))
    .returning()

  return updated
})
</code></pre>

<h2 id="4-nuxthub"><strong>4. NuxtHub (Cloudflare)</strong></h2>

<pre><code class="language-bash">npx nuxthub init my-app
</code></pre>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxthub/core'],
  hub: {
    database: true, // Cloudflare D1
    blob: true,     // Cloudflare R2
    kv: true,       // Cloudflare KV
  },
})

// server/api/posts.get.ts — using D1
export default defineEventHandler(async () => {
  const db = hubDatabase()
  return db.prepare('SELECT * FROM posts WHERE published = 1').all()
})
</code></pre>

<p>Bài tiếp theo: <strong>File Upload, Images & SEO</strong> — upload, @nuxt/image, metadata.</p>
