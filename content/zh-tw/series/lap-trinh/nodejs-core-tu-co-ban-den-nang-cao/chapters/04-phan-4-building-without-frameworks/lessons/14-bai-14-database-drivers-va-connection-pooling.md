---
id: 019d8b40-g402-7001-b008-nodejs0000402
title: 第 14 課：資料庫驅動程式和連線池
slug: bai-14-database-drivers-va-connection-pooling
description: >-
  pg (PostgreSQL)、mysql2、better-sqlite3 本機驅動程式。連接池、準備好的語句。事務、查詢建構器
  (Knex.js)。遷移工具。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 第 4 部分：無框架構建
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: Node.js 核心：從基礎到高級
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1403" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1403)"/>

  <!-- Decorations -->
  <g>
    <circle cx="852" cy="106" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="604" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="856" cy="70" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="608" cy="182" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="860" cy="34" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="246" x2="1100" y2="326" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="276" x2="1050" y2="346" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1081.507041555162,225.5 1081.507041555162,266.5 1046,287 1010.492958444838,266.5 1010.492958444838,225.5 1046,205" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：資料庫驅動程式和連接</tspan>
      <tspan x="60" dy="42">池化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js 核心：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：無框架構建</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-pg"><strong>1.PostgreSQL（頁）</strong></h2>

<pre><code class="language-ts">import pg from 'pg'

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
})

// Query
const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [userId])
const user = rows[0]

// Parameterized query — chống SQL injection
const result = await pool.query(
  'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
  [name, email]
)

// Transaction
const client = await pool.connect()
try {
  await client.query('BEGIN')
  await client.query('UPDATE accounts SET balance = balance - $1 WHERE id = $2', [100, fromId])
  await client.query('UPDATE accounts SET balance = balance + $1 WHERE id = $2', [100, toId])
  await client.query('COMMIT')
} catch (err) {
  await client.query('ROLLBACK')
  throw err
} finally {
  client.release()
}
</code></pre>

<h2 id="2-mysql2"><strong>2.MySQL（mysql2）</strong></h2>

<pre><code class="language-ts">import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 20,
})

const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [userId])

// Prepared statements
const [result] = await pool.execute(
  'INSERT INTO users (name, email) VALUES (?, ?)',
  [name, email]
)
</code></pre>

<h2 id="3-sqlite"><strong>3.SQLite（更好的sqlite3）</strong></h2>

<pre><code class="language-ts">import Database from 'better-sqlite3'

const db = new Database('app.db', { verbose: console.log })

// Synchronous — nhanh nhất cho SQLite
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  )
`)

const insert = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)')
const user = insert.run('Nguyen Van A', 'a@example.com')

const getUser = db.prepare('SELECT * FROM users WHERE id = ?')
const row = getUser.get(1)

// Transaction
const insertMany = db.transaction((users: { name: string; email: string }[]) => {
  for (const u of users) insert.run(u.name, u.email)
})
insertMany([{ name: 'B', email: 'b@test.com' }, { name: 'C', email: 'c@test.com' }])
</code></pre>

<h2 id="4-knex"><strong>4. 查詢產生器 (Knex.js)</strong></h2>

<pre><code class="language-ts">import Knex from 'knex'

const knex = Knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  pool: { min: 2, max: 20 },
})

// Query builder
const users = await knex('users')
  .select('id', 'name', 'email')
  .where('active', true)
  .orderBy('created_at', 'desc')
  .limit(10)

// Join
const orders = await knex('orders')
  .join('users', 'orders.user_id', 'users.id')
  .select('orders.*', 'users.name as user_name')
  .where('orders.status', 'pending')
</code></pre>

<h2 id="5-migrations"><strong>5. 遷移</strong></h2>

<pre><code class="language-ts">// migrations/20260101_create_users.ts
import type { Knex } from 'knex'

export async function up(knex: Knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').unique().notNullable()
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex) {
  await knex.schema.dropTable('users')
}
</code></pre>

<pre><code class="language-bash">npx knex migrate:latest
npx knex migrate:rollback
npx knex seed:run
</code></pre>

<p>下一篇： <strong>快取、佇列和後台作業</strong> — Redis、BullMQ、cron。</p>
