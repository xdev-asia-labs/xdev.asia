---
id: 019c961a-aa03-7003-e003-aa0300000003
title: "Bài 3: Dual-Database — PostgreSQL (Drizzle ORM) + MongoDB"
slug: bai-3-dual-database
description: >-
  Thiết kế schema PostgreSQL với Drizzle ORM cho config data. MongoDB
  driver cho AI/chat data. Migrations, seed data, connection pooling.
  Database abstraction layer.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Kiến trúc & Nền tảng Monorepo"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9928" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9928)"/>

  <!-- Decorations -->
  <g>
    <circle cx="783" cy="239" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="966" cy="222" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="649" cy="205" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="832" cy="188" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="1015" cy="171" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="209" x2="1100" y2="289" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="239" x2="1050" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.1051177665154,187 1047.1051177665154,231 1009,253 970.8948822334847,231 970.8948822334847,187 1009,165" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI &amp; ML — Bài 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 3: Dual-Database — PostgreSQL (Drizzle</tspan>
      <tspan x="60" dy="42">ORM) + MongoDB</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Kiến trúc &amp; Nền tảng Monorepo</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

xClaw tách database thành 2 hệ thống: PostgreSQL cho structured config data và MongoDB cho flexible AI/chat data. Bài này hướng dẫn thiết kế schema và implement database layer.

---

## 1. PostgreSQL Schema với Drizzle ORM

### 1.1 Tại sao Drizzle?

| Feature | Drizzle | Prisma | TypeORM |
|---------|---------|--------|---------|
| Type Safety | Compile-time | Runtime codegen | Decorators |
| Bundle Size | ~50KB | ~2MB | ~1MB |
| Raw SQL | Native | Limited | QueryBuilder |
| Migrations | SQL-first | Auto | Auto |
| Performance | Zero overhead | Proxy overhead | Reflection overhead |

### 1.2 Schema Definitions

```typescript
// packages/db/src/schema/tenants.ts
import { pgTable, uuid, varchar, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const tenants = pgTable('tenants', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  settings: jsonb('settings').default({}),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  tenantId: uuid('tenant_id').references(() => tenants.id).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const roles = pgTable('roles', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 100 }).notNull(),
  tenantId: uuid('tenant_id').references(() => tenants.id).notNull(),
  permissions: jsonb('permissions').default([]),
});

export const userRoles = pgTable('user_roles', {
  userId: uuid('user_id').references(() => users.id).notNull(),
  roleId: uuid('role_id').references(() => roles.id).notNull(),
});
```

### 1.3 Migrations

```bash
# Generate migration từ schema changes
npm run db:generate

# Run migrations
npm run db:migrate

# Visual database browser
npm run db:studio
```

---

## 2. MongoDB cho AI Data

### 2.1 Connection Setup

```typescript
// packages/db/src/mongo.ts
import { MongoClient, Db } from 'mongodb';

let client: MongoClient;
let db: Db;

export async function connectMongo(url: string): Promise<Db> {
  client = new MongoClient(url);
  await client.connect();
  db = client.db();

  // Create TTL indexes
  await db.collection('audit_logs').createIndex(
    { createdAt: 1 },
    { expireAfterSeconds: 90 * 24 * 60 * 60 } // 90 days
  );
  await db.collection('system_logs').createIndex(
    { timestamp: 1 },
    { expireAfterSeconds: 30 * 24 * 60 * 60 } // 30 days
  );

  return db;
}

export function getMongo(): Db {
  if (!db) throw new Error('MongoDB not connected');
  return db;
}
```

### 2.2 Collections Structure

```typescript
// Sessions collection
interface Session {
  _id: string;
  tenantId: string;
  userId: string;
  title: string;
  model: string;
  domainId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Messages collection
interface Message {
  _id: string;
  sessionId: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  toolCalls?: ToolCall[];
  toolCallId?: string;
  images?: string[];
  usage?: { promptTokens: number; completionTokens: number };
  timestamp: Date;
}

// Memory entries
interface MemoryEntry {
  _id: string;
  sessionId: string;
  type: 'conversation' | 'entity' | 'summary';
  content: string;
  embedding?: number[];
  createdAt: Date;
}
```

---

## 3. Seed Data

```typescript
// packages/db/src/seed.ts
export async function seedDatabase(pgDb: DrizzleDB, mongoDB: Db) {
  // Create default tenant
  const [tenant] = await pgDb.insert(tenants).values({
    name: 'Default',
    slug: 'default',
  }).returning();

  // Create admin user (password: password123)
  const passwordHash = await hash('password123', 12);
  const [admin] = await pgDb.insert(users).values({
    email: 'admin@xclaw.io',
    passwordHash,
    name: 'Admin',
    tenantId: tenant.id,
  }).returning();

  // Create system roles with permissions
  const systemRoles = [
    { name: 'owner', permissions: ALL_PERMISSIONS },        // 60 perms
    { name: 'admin', permissions: ADMIN_PERMISSIONS },      // 52 perms
    { name: 'member', permissions: MEMBER_PERMISSIONS },    // 14 perms
    { name: 'viewer', permissions: VIEWER_PERMISSIONS },    //  8 perms
  ];

  for (const role of systemRoles) {
    await pgDb.insert(roles).values({
      ...role,
      tenantId: tenant.id,
    });
  }
}
```

---

## 4. Tổng kết

- **PostgreSQL + Drizzle ORM** cho structured config data — type-safe, migrations
- **MongoDB** cho AI/chat data — flexible schema, TTL indexes
- **Redis** cho caching — session, rate limiting
- **Seed data** cho initial setup — admin user, system roles

**Bài tiếp theo:** Xây API Gateway với Hono — routes, middleware, JWT auth.
