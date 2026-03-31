---
id: 019d8b40-g503-7001-b008-nodejs0000503
title: 'Bài 19: Docker & CI/CD'
slug: bai-19-docker-va-cicd
description: >-
  Docker multi-stage build cho Node.js. Alpine vs slim vs distroless.
  Docker Compose, health checks. GitHub Actions CI/CD pipeline.
  pnpm trong Docker, .dockerignore best practices.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 5: Testing, Performance & Production"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-dockerfile"><strong>1. Multi-stage Dockerfile</strong></h2>

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

<h2 id="2-dockerignore"><strong>2. .dockerignore</strong></h2>

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

<h2 id="3-compose"><strong>3. Docker Compose</strong></h2>

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

<h2 id="4-github-actions"><strong>4. GitHub Actions CI/CD</strong></h2>

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

<h2 id="5-base-images"><strong>5. Base Image Comparison</strong></h2>

<table>
<thead><tr><th>Image</th><th>Size</th><th>Use case</th></tr></thead>
<tbody>
<tr><td>node:22</td><td>~1GB</td><td>Development, native builds</td></tr>
<tr><td>node:22-slim</td><td>~200MB</td><td>Production (no native deps)</td></tr>
<tr><td>node:22-alpine</td><td>~130MB</td><td>Production (nhỏ nhất)</td></tr>
<tr><td>gcr.io/distroless/nodejs22</td><td>~50MB</td><td>Security-hardened production</td></tr>
</tbody>
</table>

<p>Bài tiếp theo: <strong>Production Monitoring & Scaling</strong> — Pino, OpenTelemetry, Prometheus.</p>
