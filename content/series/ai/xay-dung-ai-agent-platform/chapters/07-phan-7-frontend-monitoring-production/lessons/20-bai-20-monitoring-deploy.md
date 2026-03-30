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
