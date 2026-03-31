---
id: 019d8b40-h603-7001-b009-vuenuxt000603
title: 'Bài 21: Deployment & Hosting'
slug: bai-21-deployment-va-hosting
description: >-
  Nuxt deployment targets (Node, Static, Edge). Vercel, Netlify,
  Cloudflare Pages, AWS. Docker deployment, Dockerfile.
  GitHub Actions CI/CD. Environment variables management.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 21
section_title: "Phần 6: Testing, Deployment & Production"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-deployment-targets"><strong>1. Deployment Targets</strong></h2>

<table>
<thead><tr><th>Preset</th><th>Output</th><th>Use case</th></tr></thead>
<tbody>
<tr><td>node-server</td><td>Node.js server</td><td>VPS, Docker, PM2</td></tr>
<tr><td>static</td><td>Static HTML</td><td>Netlify, GitHub Pages</td></tr>
<tr><td>cloudflare-pages</td><td>Edge Workers</td><td>Cloudflare</td></tr>
<tr><td>vercel</td><td>Serverless</td><td>Vercel</td></tr>
<tr><td>netlify</td><td>Serverless</td><td>Netlify</td></tr>
</tbody>
</table>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  // Auto-detect hoặc set thủ công
  nitro: {
    preset: 'node-server', // 'cloudflare-pages' | 'vercel' | ...
  },
})
</code></pre>

<h2 id="2-docker"><strong>2. Docker Deployment</strong></h2>

<pre><code class="language-dockerfile"># Dockerfile
FROM node:20-alpine AS base
RUN corepack enable

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM base AS runtime
WORKDIR /app
COPY --from=build /app/.output ./.output

ENV NODE_ENV=production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000

USER node
CMD ["node", ".output/server/index.mjs"]
</code></pre>

<pre><code class="language-yaml"># docker-compose.yml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    env_file: .env.production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 5s
      retries: 3
</code></pre>

<h2 id="3-vercel"><strong>3. Deploy lên Vercel</strong></h2>

<pre><code class="language-bash"># Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
</code></pre>

<pre><code class="language-json">// vercel.json
{
  "buildCommand": "nuxt build",
  "outputDirectory": ".output",
  "framework": "nuxtjs"
}
</code></pre>

<h2 id="4-cloudflare"><strong>4. Cloudflare Pages</strong></h2>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages',
  },
})
</code></pre>

<pre><code class="language-bash"># Deploy via Wrangler
npx wrangler pages deploy .output/public
</code></pre>

<h2 id="5-env"><strong>5. Environment Variables</strong></h2>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    // Server-only (NUXT_ prefix)
    databaseUrl: process.env.NUXT_DATABASE_URL,
    jwtSecret: process.env.NUXT_JWT_SECRET,
    // Public (NUXT_PUBLIC_ prefix)
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      appName: 'My App',
    },
  },
})
</code></pre>

<pre><code class="language-bash"># .env.production
NUXT_DATABASE_URL=postgresql://user:pass@host:5432/db
NUXT_JWT_SECRET=super-secret-key
NUXT_PUBLIC_API_BASE=https://api.example.com
</code></pre>

<h2 id="6-cicd"><strong>6. GitHub Actions CI/CD</strong></h2>

<pre><code class="language-yaml"># .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 9

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - run: pnpm install --frozen-lockfile

      - run: pnpm test
        env:
          NUXT_PUBLIC_API_BASE: http://localhost:3000

      - run: pnpm build

      - name: Deploy to server
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /app
            docker compose pull
            docker compose up -d --build
</code></pre>

<h2 id="7-pm2"><strong>7. PM2 Production</strong></h2>

<pre><code class="language-js">// ecosystem.config.cjs
module.exports = {
  apps: [{
    name: 'nuxt-app',
    script: '.output/server/index.mjs',
    instances: 'max',
    exec_mode: 'cluster',
    env_production: {
      NODE_ENV: 'production',
      NUXT_PORT: 3000,
    },
  }],
}
</code></pre>

<pre><code class="language-bash">pm2 start ecosystem.config.cjs --env production
pm2 save
pm2 startup
</code></pre>

<p>Bài tiếp theo: <strong>Production Monitoring & Best Practices</strong> — Sentry, logging, security.</p>
