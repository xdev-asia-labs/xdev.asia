---
id: 019d8b40-g503-7001-b008-nodejs0000503
title: 第 19 課：Docker 與 CI/CD
slug: bai-19-docker-va-cicd
description: >-
  Node.js 的 Docker 多階段建置。 Alpine、slim 和 distroless。 Docker Compose，健康檢查。 GitHub
  Actions CI/CD 管道。 Docker 中的 pnpm，.dockerignore 最佳實踐。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 19
section_title: 第 5 部分：測試、性能和生產
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: Node.js 核心：從基礎到高級
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4469" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4469)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1010" cy="140" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="920" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="830" cy="40" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="250" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 程式設計 — 第 19 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 19 課：Docker 與 CI/CD</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js 核心：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：測試、性能和生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-dockerfile"><strong>1. 多階段Dockerfile</strong></h2>

<pre><code class="language-dockerfile">FROM node:22-alpine AS base
RUN corepack enable

# Dependencies stage
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Build stage
FROM base AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Production stage
FROM base AS runtime
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./

ENV NODE_ENV=production
EXPOSE 3000

USER node
CMD ["node", "dist/app.js"]
</code></pre>

<h2 id="2-dockerignore"><strong>2..dockerignore</strong></h2>

<pre><code class="language-text">node_modules
dist
.git
.env
.env.*
*.md
tests
coverage
.vscode
</code></pre>

<h2 id="3-compose"><strong>3.Docker 組合</strong></h2>

<pre><code class="language-yaml">services:
  app:
    build: .
    ports:
      - "3000:3000"
    env_file: .env
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_started
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:3000/health"]
      interval: 30s
      timeout: 5s
      retries: 3

  postgres:
    image: postgres:17-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: app
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app"]
      interval: 5s
      timeout: 3s

  redis:
    image: redis:7-alpine
    command: redis-server --maxmemory 256mb --maxmemory-policy allkeys-lru

volumes:
  pgdata:
</code></pre>

<h2 id="4-github-actions"><strong>4.GitHub Actions CI/CD</strong></h2>

<pre><code class="language-yaml">name: CI/CD
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:17
        env:
          POSTGRES_DB: test
          POSTGRES_PASSWORD: test
        ports: [5432:5432]
        options: --health-cmd pg_isready --health-interval 10s

    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm

      - run: pnpm install --frozen-lockfile
      - run: pnpm typecheck
      - run: pnpm lint
      - run: pnpm test -- --coverage
        env:
          DATABASE_URL: postgres://postgres:test@localhost:5432/test

      - uses: codecov/codecov-action@v4
        with:
          token: ${{ secrets.CODECOV_TOKEN }}

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        run: |
          ssh ${{ secrets.SERVER }} "cd /app && git pull && docker compose up -d --build"
</code></pre>

<h2 id="5-base-images"><strong>5. 基礎影像比較</strong></h2>

<table>
<thead><tr><th>圖片</th><th>尺寸</th><th>使用案例</th></tr></thead>
<tbody>
<tr><td>節點：22</td><td>〜1GB</td><td>開發、本機構建</td></tr>
<tr><td>節點：22-slim</td><td>〜200MB</td><td>生產（無本地部門）</td></tr>
<tr><td>節點：22-高山</td><td>〜130MB</td><td>產量（最小）</td></tr>
<tr><td>gcr.io/distroless/nodejs22</td><td>〜50MB</td><td>安全強化生產</td></tr>
</tbody>
</table>

<p>下一篇： <strong>生產監控和擴展</strong> — 皮諾、OpenTelemetry、普羅米修斯。</p>
