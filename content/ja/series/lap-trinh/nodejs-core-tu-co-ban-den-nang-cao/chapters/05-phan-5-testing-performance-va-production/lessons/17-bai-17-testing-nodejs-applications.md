---
id: 019d8b40-g501-7001-b008-nodejs0000501
title: 'レッスン 17: Node.js アプリケーションのテスト'
slug: bai-17-testing-nodejs-applications
description: >-
  Node.js 組み込みテスト ランナー (node:test)。単体テスト/統合テスト用の Vitest。 HTTP テスト用のスーパーテスト。 HTTP
  モックの場合はノックします。テストコンテナ、コードカバレッジ (c8/istanbul)。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: 'パート 5: テスト、パフォーマンス、および実稼働'
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js コア: 基本から高度まで'
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6321" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6321)"/>

  <!-- Decorations -->
  <g>
    <circle cx="624" cy="262" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="648" cy="166" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="672" cy="70" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="696" cy="234" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="720" cy="138" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="102" x2="1100" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="132" x2="1050" y2="202" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1034.0429399400243,183.5 1034.0429399400243,220.5 1002,239 969.9570600599758,220.5 969.9570600599758,183.5 1002,165" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 プログラミング — レッスン 17</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: Node.js アプリケーションのテスト</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js コア: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: テスト、パフォーマンス、および実稼働</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-node-test"><strong>1. 組み込みテストランナー (node:test)</strong></h2>

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

<h2 id="2-vitest"><strong>2. ヴィテスト</strong></h2>

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

<h2 id="3-supertest"><strong>3. HTTP テスト (スーパーテスト)</strong></h2>

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

<h2 id="4-nock"><strong>4. HTTP モッキング (Nock)</strong></h2>

<pre><code class="language-ts">import nock from 'nock'

it('handles external API', async () => {
  nock('https://api.github.com')
    .get('/users/octocat')
    .reply(200, { login: 'octocat', id: 1 })

  const user = await fetchGitHubUser('octocat')
  expect(user.login).toBe('octocat')
})
</code></pre>

<h2 id="5-testcontainers"><strong>5. テストコンテナ</strong></h2>

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

<p>次の記事: <strong>パフォーマンスのプロファイリングと最適化</strong> — V8 プロファイラー、フレームグラフ、Clinic.js。</p>
