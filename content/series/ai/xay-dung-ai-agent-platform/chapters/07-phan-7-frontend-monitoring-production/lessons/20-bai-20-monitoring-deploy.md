---
id: 019c961a-aa20-7020-e020-aa2000000020
title: "Bài 20: Monitoring, Observability & Production Deploy"
slug: bai-20-monitoring-deploy
description: >-
  Production deployment: Docker Compose, environment config,
  health checks. Monitoring: usage analytics, cost tracking,
  error rates. Observability: structured logging, OpenTelemetry
  traces. CI/CD pipeline với GitHub Actions.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 7: Frontend, Monitoring & Production"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6617" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6617)"/>

  <!-- Decorations -->
  <g>
    <circle cx="612" cy="66" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="624" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="636" cy="90" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="648" cy="102" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="660" cy="114" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="226" x2="1100" y2="306" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="256" x2="1050" y2="326" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="961.507041555162,105.5 961.507041555162,146.5 926,167 890.492958444838,146.5 890.492958444838,105.50000000000001 926,85" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI &amp; ML — Bài 19</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 20: Monitoring, Observability &amp;</tspan>
      <tspan x="60" dy="42">Production Deploy</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 7: Frontend, Monitoring &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Bài cuối cùng — deploy AI Agent Platform lên production với monitoring, alerting, cost tracking, và CI/CD pipeline.

---

## 1. Docker Compose — Production Stack

```yaml
# docker-compose.yml
services:
  server:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@postgres:5432/xclaw
      - MONGODB_URL=mongodb://mongo:27017/xclaw
      - REDIS_URL=redis://redis:6379
      - JWT_SECRET=${JWT_SECRET}
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
    depends_on:
      postgres:
        condition: service_healthy
      mongo:
        condition: service_started
      redis:
        condition: service_started
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  web:
    build:
      context: ./packages/web
      dockerfile: Dockerfile
    ports:
      - "3001:3001"

  postgres:
    image: postgres:16-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=xclaw
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user"]
      interval: 10s

  mongo:
    image: mongo:7
    volumes:
      - mongodata:/data/db

  redis:
    image: redis:7-alpine
    volumes:
      - redisdata:/data

volumes:
  pgdata:
  mongodata:
  redisdata:
```

---

## 2. Monitoring Service

```typescript
// packages/core/src/monitoring/monitoring-service.ts
export class MonitoringService {
  private db: Db;

  async recordLLMUsage(data: {
    tenantId: string;
    userId: string;
    provider: string;
    model: string;
    promptTokens: number;
    completionTokens: number;
    latencyMs: number;
    cost: number;
  }) {
    await this.db.collection('llm_usage').insertOne({
      ...data,
      timestamp: new Date(),
    });
  }

  async recordToolExecution(data: {
    tenantId: string;
    toolName: string;
    success: boolean;
    durationMs: number;
  }) {
    await this.db.collection('tool_usage').insertOne({
      ...data,
      timestamp: new Date(),
    });
  }

  async getUsageAnalytics(tenantId: string, days: number = 30) {
    const since = new Date(Date.now() - days * 86400000);

    const [llmStats, toolStats, costByDay] = await Promise.all([
      this.db.collection('llm_usage').aggregate([
        { $match: { tenantId, timestamp: { $gte: since } } },
        { $group: {
          _id: '$model',
          totalRequests: { $sum: 1 },
          totalTokens: { $sum: { $add: ['$promptTokens', '$completionTokens'] } },
          totalCost: { $sum: '$cost' },
          avgLatency: { $avg: '$latencyMs' },
        }},
      ]).toArray(),

      this.db.collection('tool_usage').aggregate([
        { $match: { tenantId, timestamp: { $gte: since } } },
        { $group: {
          _id: '$toolName',
          totalCalls: { $sum: 1 },
          successRate: { $avg: { $cond: ['$success', 1, 0] } },
          avgDuration: { $avg: '$durationMs' },
        }},
      ]).toArray(),

      this.db.collection('llm_usage').aggregate([
        { $match: { tenantId, timestamp: { $gte: since } } },
        { $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$timestamp' } },
          cost: { $sum: '$cost' },
          requests: { $sum: 1 },
        }},
        { $sort: { _id: 1 } },
      ]).toArray(),
    ]);

    return { llmStats, toolStats, costByDay };
  }
}
```

---

## 3. Structured Logging

```typescript
// packages/core/src/logging/logger.ts
export class Logger {
  private context: Record<string, unknown>;

  constructor(context: Record<string, unknown> = {}) {
    this.context = context;
  }

  child(ctx: Record<string, unknown>) {
    return new Logger({ ...this.context, ...ctx });
  }

  info(message: string, data?: Record<string, unknown>) {
    this.log('info', message, data);
  }

  warn(message: string, data?: Record<string, unknown>) {
    this.log('warn', message, data);
  }

  error(message: string, error?: Error, data?: Record<string, unknown>) {
    this.log('error', message, {
      ...data,
      error: error ? {
        message: error.message,
        stack: error.stack,
        name: error.name,
      } : undefined,
    });
  }

  private log(level: string, message: string, data?: Record<string, unknown>) {
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      level,
      message,
      ...this.context,
      ...data,
    }));
  }
}

// Usage
const logger = new Logger({ service: 'xclaw' });
const chatLogger = logger.child({ component: 'chat' });
chatLogger.info('Chat completed', { sessionId, tokens: 1500, latencyMs: 2340 });
```

---

## 4. Health Check API

```typescript
// packages/gateway/src/routes/health.ts
app.get('/health', async (c) => {
  const checks = await Promise.allSettled([
    checkPostgres(),
    checkMongo(),
    checkRedis(),
  ]);

  const status = checks.every(c => c.status === 'fulfilled') ? 'healthy' : 'degraded';

  return c.json({
    status,
    uptime: process.uptime(),
    version: process.env.APP_VERSION || 'dev',
    checks: {
      postgres: checks[0].status === 'fulfilled' ? 'ok' : 'error',
      mongo: checks[1].status === 'fulfilled' ? 'ok' : 'error',
      redis: checks[2].status === 'fulfilled' ? 'ok' : 'error',
    },
    timestamp: new Date().toISOString(),
  }, status === 'healthy' ? 200 : 503);
});
```

---

## 5. CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Build & Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run test

  build-and-push:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: docker/setup-buildx-action@v3
      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/${{ github.repository }}:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.DEPLOY_HOST }}
          username: ${{ secrets.DEPLOY_USER }}
          key: ${{ secrets.DEPLOY_KEY }}
          script: |
            cd /opt/xclaw
            docker compose pull
            docker compose up -d --remove-orphans
```

---

## 6. Production Checklist

| Category | Check | Status |
|----------|-------|--------|
| **Security** | JWT secret 32+ bytes | ☐ |
| | API keys encrypted | ☐ |
| | CORS restricted | ☐ |
| | Rate limiting | ☐ |
| | HTTPS only | ☐ |
| **Performance** | Connection pooling | ☐ |
| | Response streaming | ☐ |
| | CDN for static assets | ☐ |
| **Reliability** | Health checks | ☐ |
| | Graceful shutdown | ☐ |
| | DB backups daily | ☐ |
| | Error alerting | ☐ |
| **Monitoring** | LLM cost per tenant | ☐ |
| | Token usage dashboards | ☐ |
| | Error rate alerts | ☐ |
| | Latency tracking (p50, p99) | ☐ |

---

## 7. Series Recap

Qua 20 bài, bạn đã xây dựng **AI Agent Platform** hoàn chỉnh:

| Layer | Bài | Nội dung |
|-------|-----|----------|
| **Foundation** | 1-4 | Kiến trúc, Monorepo, Database, API Gateway |
| **AI Core** | 5-8 | LLM Router, Tool Registry, Agent, Streaming |
| **Knowledge** | 9-11 | Document Processing, Embeddings, RAG Engine |
| **Automation** | 12-13 | Workflow Engine, Validation & Execution |
| **Extensions** | 14-16 | Skills, Domain Packs, Plugins & MCP |
| **Access** | 17-18 | Multi-tenant RBAC, Chat Channels |
| **Production** | 19-20 | React Frontend, Monitoring & Deploy |

**Source code:** [github.com/xdev-asia-labs/xClaw](https://github.com/xdev-asia-labs/xClaw)
