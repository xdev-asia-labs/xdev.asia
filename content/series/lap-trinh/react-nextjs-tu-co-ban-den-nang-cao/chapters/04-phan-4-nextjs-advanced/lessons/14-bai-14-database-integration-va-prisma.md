---
id: 019d8b40-d403-7001-b005-reactnx000403
title: 'Bài 14: Database Integration & Prisma'
slug: bai-14-database-integration-va-prisma
description: >-
  Prisma ORM setup, schema design. Migrations, seeding.
  Relations (1-1, 1-N, M-N). Advanced queries, transactions.
  Prisma Client extensions.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Next.js Advanced"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-setup"><strong>1. Setup Prisma</strong></h2>

<pre><code class="language-bash">npm install prisma @prisma/client
npx prisma init --datasource-provider postgresql
</code></pre>

<h2 id="2-schema"><strong>2. Schema Design</strong></h2>

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

<h2 id="3-migration"><strong>3. Migration & Seeding</strong></h2>

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

<h2 id="4-singleton"><strong>4. Prisma Client Singleton</strong></h2>

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

<h2 id="5-queries"><strong>5. Advanced Queries</strong></h2>

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

<h2 id="6-server-component"><strong>6. Sử dụng trong Server Component</strong></h2>

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

<p>Bài tiếp theo: <strong>Internationalization & SEO</strong> — đa ngôn ngữ, metadata, structured data.</p>
