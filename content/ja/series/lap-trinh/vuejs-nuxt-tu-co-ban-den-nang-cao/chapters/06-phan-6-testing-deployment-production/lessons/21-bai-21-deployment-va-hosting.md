---
id: 019d8b40-h603-7001-b009-vuenuxt000603
title: 'レッスン 21: 導入とホスティング'
slug: bai-21-deployment-va-hosting
description: >-
  Nuxt デプロイメントターゲット (ノード、静的、エッジ)。 Vercel、Netlify、Cloudflare Pages、AWS。 Docker
  のデプロイメント、Dockerfile。 GitHub アクション CI/CD。環境変数の管理。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 21
section_title: 'パート 6: テスト、展開、実稼働'
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js と Nuxt: 基本から高度まで'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9452" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9452)"/>

  <!-- Decorations -->
  <g>
    <circle cx="615" cy="195" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="630" cy="250" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="645" cy="45" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="660" cy="100" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="675" cy="155" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="245" x2="1100" y2="325" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="275" x2="1050" y2="345" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1029.6410161513775,175 1029.6410161513775,215 995,235 960.3589838486224,215 960.3589838486224,175 995,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 プログラミング — レッスン 21</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 21: 導入とホスティング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js と Nuxt: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: テスト、展開、実稼働</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-deployment-targets"><strong>1. 導入対象</strong></h2>

<table>
<thead><tr><th>プリセット</th><th>出力</th><th>ユースケース</th></tr></thead>
<tbody>
<tr><td>ノードサーバー</td><td>Node.jsサーバー</td><td>VPS、ドッカー、PM2</td></tr>
<tr><td>静的な。静的</td><td>静的HTML</td><td>Netlify、GitHub ページ</td></tr>
<tr><td>クラウドフレアページ</td><td>エッジワーカー</td><td>クラウドフレア</td></tr>
<tr><td>ヴェルセル</td><td>サーバーレス</td><td>ヴェルセル</td></tr>
<tr><td>ネット化する</td><td>サーバーレス</td><td>Netflix</td></tr>
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

<h2 id="2-docker"><strong>2. Docker のデプロイメント</strong></h2>

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

<h2 id="3-vercel"><strong>3. Vercel へのデプロイ</strong></h2>

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

<h2 id="4-cloudflare"><strong>4.Cloudflareページ</strong></h2>

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

<h2 id="5-env"><strong>5. 環境変数</strong></h2>

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

<h2 id="6-cicd"><strong>6. GitHub アクション CI/CD</strong></h2>

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

<h2 id="7-pm2"><strong>7. PM2の発生</strong></h2>

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

<p>次の記事: <strong>生産監視とベストプラクティス</strong> — 歩哨、ロギング、セキュリティ。</p>
