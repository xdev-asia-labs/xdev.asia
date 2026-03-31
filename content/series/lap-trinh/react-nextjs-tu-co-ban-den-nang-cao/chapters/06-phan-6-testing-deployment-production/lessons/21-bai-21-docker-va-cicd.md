---
id: 019d8b40-d603-7001-b005-reactnx000603
title: 'Bài 21: Docker & CI/CD'
slug: bai-21-docker-va-cicd
description: >-
  Dockerize Next.js app. Multi-stage build, standalone output.
  GitHub Actions CI/CD pipeline. Vercel deployment.
  Environment variables management.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 21
section_title: "Phần 6: Testing, Deployment & Production"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-dockerfile"><strong>1. Dockerfile Multi-stage</strong></h2>

<pre><code class="language-dockerfile"># Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Stage 2: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Stage 3: Production
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
</code></pre>

<h2 id="2-next-config"><strong>2. Standalone Output Config</strong></h2>

<pre><code class="language-ts">// next.config.ts
const config = {
  output: 'standalone', // Required for Docker
};
export default config;
</code></pre>

<h2 id="3-docker-compose"><strong>3. Docker Compose</strong></h2>

<pre><code class="language-yaml"># docker-compose.yml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
      - NEXTAUTH_URL=http://localhost:3000
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
    depends_on:
      db:
        condition: service_healthy

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d mydb"]
      interval: 5s
      timeout: 5s
      retries: 5

volumes:
  pgdata:
</code></pre>

<h2 id="4-github-actions"><strong>4. GitHub Actions CI/CD</strong></h2>

<pre><code class="language-yaml"># .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm test -- --coverage

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - name: Build Docker image
        run: docker build -t myapp:${{ github.sha }} .
      - name: Push to registry
        run: |
          echo ${{ secrets.REGISTRY_TOKEN }} | docker login ghcr.io -u ${{ github.actor }} --password-stdin
          docker tag myapp:${{ github.sha }} ghcr.io/${{ github.repository }}:latest
          docker push ghcr.io/${{ github.repository }}:latest

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to server
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            docker pull ghcr.io/${{ github.repository }}:latest
            docker compose up -d --force-recreate
</code></pre>

<h2 id="5-vercel"><strong>5. Vercel Deployment</strong></h2>

<pre><code class="language-json">// vercel.json
{
  "buildCommand": "prisma generate && next build",
  "installCommand": "npm ci",
  "framework": "nextjs",
  "regions": ["sin1"],
  "crons": [
    {
      "path": "/api/cron/cleanup",
      "schedule": "0 0 * * *"
    }
  ]
}
</code></pre>

<h2 id="6-env"><strong>6. Environment Variables</strong></h2>

<pre><code class="language-bash"># .env.local (development)
DATABASE_URL=postgresql://user:pass@localhost:5432/mydb
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=dev-secret

# .env.production (production)
DATABASE_URL=postgresql://user:pass@prod-db:5432/mydb
NEXTAUTH_URL=https://myapp.com
</code></pre>

<pre><code class="language-ts">// lib/env.ts — Type-safe env validation
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
});

export const env = envSchema.parse(process.env);
</code></pre>

<p>Bài tiếp theo: <strong>Production Best Practices & Monitoring</strong> — logging, error tracking, health checks.</p>
