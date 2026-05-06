---
id: 019d8b40-h402-7001-b009-vuenuxt000402
title: 'Lesson 14: Database & ORM in Nuxt'
slug: bai-14-database-va-orm-trong-nuxt
description: >-
  Drizzle ORM, Prisma in Nuxt. Database migrations, seeding. nuxt-hub for D1/R2
  (Cloudflare). Repository pattern, server-side CRUD.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 'Part 4: Nuxt Advanced & Full-Stack'
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: From Basics to Advanced'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5073" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5073)"/>

  <!-- Decorations -->
  <g>
    <circle cx="664" cy="142" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="728" cy="266" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="792" cy="130" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="856" cy="254" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="118" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="122" x2="1100" y2="202" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="152" x2="1050" y2="222" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1004.0429399400242,153.5 1004.0429399400242,190.5 972,209 939.9570600599758,190.5 939.9570600599758,153.5 972,135" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Programming — Lesson 14</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 14: Database & ORM in Nuxt</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js & Nuxt: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Nuxt Advanced & Full-Stack</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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

<p>Next article: <strong>File Upload, Images & SEO</strong> — upload, @nuxt/image, metadata.</p>
