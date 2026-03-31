---
id: 019d8b40-g402-7001-b008-nodejs0000402
title: 'Bài 14: Database Drivers & Connection Pooling'
slug: bai-14-database-drivers-va-connection-pooling
description: >-
  pg (PostgreSQL), mysql2, better-sqlite3 native drivers. Connection
  pooling, prepared statements. Transactions, query builders
  (Knex.js). Migration tools.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Building Without Frameworks"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-pg"><strong>1. PostgreSQL (pg)</strong></h2>

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

<h2 id="2-mysql2"><strong>2. MySQL (mysql2)</strong></h2>

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

<h2 id="3-sqlite"><strong>3. SQLite (better-sqlite3)</strong></h2>

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

<h2 id="4-knex"><strong>4. Query Builder (Knex.js)</strong></h2>

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

<h2 id="5-migrations"><strong>5. Migrations</strong></h2>

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

<p>Bài tiếp theo: <strong>Caching, Queues & Background Jobs</strong> — Redis, BullMQ, cron.</p>
