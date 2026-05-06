---
id: 019c961a-aa20-7020-e020-aa2000000020
title: 第 20 課：監控、可觀察性與生產部署
slug: bai-20-monitoring-deploy
description: >-
  生產部署：Docker Compose、環境配置、健康檢查。監控：使用狀況分析、成本追蹤、錯誤率。可觀察性：結構化日誌記錄、OpenTelemetry
  追蹤。帶有 GitHub Actions 的 CI/CD 管道。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 19
section_title: 第 7 部分：前端、監控與生產
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: 從零開始搭建AI代理平台－與xClaw實戰
  slug: xay-dung-ai-agent-platform
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 19 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 20 課：監控、可觀察性和</tspan>
      <tspan x="60" dy="42">生產實施</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從零開始搭建AI代理平台－與xClaw實戰</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：前端、監控與生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

最後一課——透過監控、警報、成本追蹤和 CI/CD 管道將 AI 代理平台部署到生產中。

---

## 1. Docker Compose — 生產堆疊

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

## 2. 監控服務

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

## 3. 結構化日誌記錄

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

## 4.健康檢驗API

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

## 5. CI/CD 管道

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

## 6. 生產清單

|類別 |檢查 |狀態 |
|----------|--------|--------|
| **安全** | JWT 秘密 32+ 位元組 | ○|
| | API 金鑰已加密 | ○|
| | CORS 限制 | ○|
| |速率限制 | ○|
| |僅限 HTTPS | ○|
| **效能** |連線池 | ○|
| |響應流 | ○|
| |靜態資產CDN | ○|
| **可靠性** |健康檢查| ○|
| |優雅關機 | ○|
| |每日資料庫備份 | ○|
| |錯誤警報 | ○|
| **監控** |每個租戶的法學碩士成本| ○|
| |代幣使用儀表板 | ○|
| |錯誤率警報 | ○|
| | 延遲追蹤（第 50 頁、第 99 頁）| ○|

---

## 7. 回顧系列

透過20堂課，您已經建立了一個完整的**AI代理平台**：

|層 |文章|內容 |
|--------|-----|----------|
| **基金會** | 1-4 | 1-4架構、Monorepo、資料庫、API 閘道 |
| **人工智慧核心** | 5-8 | LLM 路由器、工具註冊表、代理、串流媒體 |
| **知識** | 9-11 |文件處理、嵌入、RAG 引擎 |
| **自動化** | 12-13 |工作流程引擎、驗證與執行 |
| **擴充** | 14-16 |技能、網域包、外掛程式和 MCP |
| **訪問** | 17-18 | 17-18多租戶 RBAC、聊天頻道 |
| **生產** | 19-20 | 19-20 React 前端、監控與部署 |

**原始碼：** [github.com/xdev-asia-labs/xClaw](https://github.com/xdev-asia-labs/xClaw)
