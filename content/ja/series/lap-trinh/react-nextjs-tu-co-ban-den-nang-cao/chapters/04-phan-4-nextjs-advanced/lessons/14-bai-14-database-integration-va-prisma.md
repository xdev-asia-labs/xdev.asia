---
id: 019d8b40-d403-7001-b005-reactnx000403
title: 'レッスン 14: データベース統合と Prisma'
slug: bai-14-database-integration-va-prisma
description: >-
  Prisma ORM セットアップ、スキーマ設計。移行、シード。関係 (1-1、1-N、M-N)。高度なクエリ、トランザクション。 Prisma
  クライアント拡張機能。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 4: Next.js の上級者向け'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React と Next.js: 基本から高度まで'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5513" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5513)"/>

  <!-- Decorations -->
  <g>
    <circle cx="910" cy="200" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1030" cy="140" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="110" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="80" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="180" x2="1100" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="210" x2="1050" y2="280" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.3108891324554,162.5 1010.3108891324554,197.5 980,215 949.6891108675446,197.5 949.6891108675446,162.5 980,145" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 プログラミング — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: データベース統合と Prisma</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React と Next.js: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: Next.js の上級者向け</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup"><strong>1. プリズマのセットアップ</strong></h2>

<pre><code class="language-bash">npm install prisma @prisma/client
npx prisma init --datasource-provider postgresql
</code></pre>

<h2 id="2-schema"><strong>2. スキーマ設計</strong></h2>

<pre><code class="language-prisma">// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  posts     Post[]
  profile   Profile?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([email])
}

model Profile {
  id     String  @id @default(cuid())
  bio    String?
  avatar String?
  userId String  @unique
  user   User    @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Post {
  id         String     @id @default(cuid())
  title      String
  content    String?
  published  Boolean    @default(false)
  authorId   String
  author     User       @relation(fields: [authorId], references: [id])
  categories Category[]
  tags       Tag[]
  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt

  @@index([authorId])
  @@index([published, createdAt])
}

model Category {
  id    String @id @default(cuid())
  name  String @unique
  slug  String @unique
  posts Post[]
}

model Tag {
  id    String @id @default(cuid())
  name  String @unique
  posts Post[]
}

enum Role {
  USER
  ADMIN
  EDITOR
}
</code></pre>

<h2 id="3-migration"><strong>3. 移行とシード</strong></h2>

<pre><code class="language-bash"># Create migration
npx prisma migrate dev --name init

# Apply in production
npx prisma migrate deploy

# Reset database
npx prisma migrate reset
</code></pre>

<pre><code class="language-ts">// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin',
      role: 'ADMIN',
      profile: { create: { bio: 'Administrator' } },
      posts: {
        create: [
          { title: 'First Post', content: 'Hello!', published: true },
          { title: 'Draft', content: 'WIP' },
        ],
      },
    },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
</code></pre>

<h2 id="4-singleton"><strong>4. Prisma クライアント シングルトン</strong></h2>

<pre><code class="language-ts">// lib/db.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : [],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
</code></pre>

<h2 id="5-queries"><strong>5. 高度なクエリ</strong></h2>

<pre><code class="language-ts">// Pagination + Filter + Sort
const posts = await db.post.findMany({
  where: {
    published: true,
    OR: [
      { title: { contains: search, mode: 'insensitive' } },
      { content: { contains: search, mode: 'insensitive' } },
    ],
    categories: { some: { slug: categorySlug } },
  },
  include: {
    author: { select: { name: true, email: true } },
    categories: true,
    _count: { select: { tags: true } },
  },
  orderBy: { createdAt: 'desc' },
  skip: (page - 1) * limit,
  take: limit,
});

// Count
const total = await db.post.count({ where: { published: true } });

// Transaction
const [post, user] = await db.$transaction([
  db.post.create({ data: { title: 'New', authorId: userId } }),
  db.user.update({
    where: { id: userId },
    data: { postCount: { increment: 1 } },
  }),
]);

// Interactive transaction
await db.$transaction(async (tx) => {
  const user = await tx.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error('User not found');
  await tx.post.create({ data: { title: 'Post', authorId: user.id } });
});
</code></pre>

<h2 id="6-server-component"><strong>6. サーバーコンポーネントでの使用</strong></h2>

<pre><code class="language-tsx">import { db } from '@/lib/db';
import { Suspense } from 'react';

async function PostList() {
  const posts = await db.post.findMany({
    where: { published: true },
    include: { author: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    &lt;div className="grid gap-4"&gt;
      {posts.map(post =&gt; (
        &lt;article key={post.id}&gt;
          &lt;h2&gt;{post.title}&lt;/h2&gt;
          &lt;p&gt;By {post.author.name}&lt;/p&gt;
        &lt;/article&gt;
      ))}
    &lt;/div&gt;
  );
}

export default function PostsPage() {
  return (
    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;PostList /&gt;
    &lt;/Suspense&gt;
  );
}
</code></pre>

<p>次の記事: <strong>国際化とSEO</strong> — 多言語、メタデータ、構造化データ。</p>
