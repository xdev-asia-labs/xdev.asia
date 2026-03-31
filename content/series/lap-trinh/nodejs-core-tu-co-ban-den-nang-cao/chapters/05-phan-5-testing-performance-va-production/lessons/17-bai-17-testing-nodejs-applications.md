---
id: 019d8b40-g501-7001-b008-nodejs0000501
title: 'Bài 17: Testing Node.js Applications'
slug: bai-17-testing-nodejs-applications
description: >-
  Node.js built-in test runner (node:test). Vitest cho unit/integration
  tests. Supertest cho HTTP testing. Nock cho HTTP mocking.
  Testcontainers, code coverage (c8/istanbul).
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Testing, Performance & Production"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-node-test"><strong>1. Built-in Test Runner (node:test)</strong></h2>

<pre><code class="language-ts">import { describe, it, before, after, mock } from 'node:test'
import assert from 'node:assert/strict'

describe('UserService', () => {
  let db: Database

  before(async () => {
    db = await Database.connect(':memory:')
    await db.migrate()
  })

  after(async () => {
    await db.close()
  })

  it('creates a user', async () => {
    const user = await createUser(db, { name: 'Test', email: 'test@test.com' })
    assert.strictEqual(user.name, 'Test')
    assert.ok(user.id)
  })

  it('rejects duplicate email', async () => {
    await assert.rejects(
      () => createUser(db, { name: 'Test2', email: 'test@test.com' }),
      { message: /unique constraint/i }
    )
  })

  it('mocks external service', async () => {
    const sendEmail = mock.fn(async () => ({ success: true }))
    const result = await sendEmail('test@test.com', 'Hello')
    assert.strictEqual(sendEmail.mock.calls.length, 1)
  })
})
</code></pre>

<pre><code class="language-bash">node --test --test-reporter spec src/**/*.test.ts
</code></pre>

<h2 id="2-vitest"><strong>2. Vitest</strong></h2>

<pre><code class="language-ts">// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**'],
      exclude: ['src/**/*.test.ts'],
    },
  },
})
</code></pre>

<pre><code class="language-ts">// src/services/user.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('UserService', () => {
  const mockDb = {
    query: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('finds user by id', async () => {
    mockDb.query.mockResolvedValue({
      rows: [{ id: '1', name: 'Test' }]
    })

    const user = await findUser(mockDb as any, '1')
    expect(user).toEqual({ id: '1', name: 'Test' })
    expect(mockDb.query).toHaveBeenCalledWith(
      expect.stringContaining('SELECT'),
      ['1']
    )
  })
})
</code></pre>

<h2 id="3-supertest"><strong>3. HTTP Testing (Supertest)</strong></h2>

<pre><code class="language-ts">import request from 'supertest'
import { createApp } from '../src/app'

const app = createApp()

describe('API', () => {
  it('GET /api/users returns users', async () => {
    const res = await request(app)
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /json/)

    expect(res.body).toBeInstanceOf(Array)
    expect(res.body[0]).toHaveProperty('name')
  })

  it('POST /api/users creates user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'New User', email: 'new@test.com' })
      .expect(201)

    expect(res.body.name).toBe('New User')
  })

  it('returns 401 without auth', async () => {
    await request(app)
      .get('/api/admin')
      .expect(401)
  })
})
</code></pre>

<h2 id="4-nock"><strong>4. HTTP Mocking (Nock)</strong></h2>

<pre><code class="language-ts">import nock from 'nock'

it('handles external API', async () => {
  nock('https://api.github.com')
    .get('/users/octocat')
    .reply(200, { login: 'octocat', id: 1 })

  const user = await fetchGitHubUser('octocat')
  expect(user.login).toBe('octocat')
})
</code></pre>

<h2 id="5-testcontainers"><strong>5. Testcontainers</strong></h2>

<pre><code class="language-ts">import { PostgreSqlContainer } from '@testcontainers/postgresql'

let container: any
let connectionString: string

beforeAll(async () => {
  container = await new PostgreSqlContainer().start()
  connectionString = container.getConnectionUri()
  await runMigrations(connectionString)
}, 30000)

afterAll(async () => {
  await container.stop()
})
</code></pre>

<p>Bài tiếp theo: <strong>Performance Profiling & Optimization</strong> — V8 profiler, flamegraphs, Clinic.js.</p>
