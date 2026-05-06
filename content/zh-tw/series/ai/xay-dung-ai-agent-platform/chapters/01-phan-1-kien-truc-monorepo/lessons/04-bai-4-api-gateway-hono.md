---
id: 019c961a-aa04-7004-e004-aa0400000004
title: 第 4 課：使用 Hono 的 API 閘道 — 路由、中介軟體、驗證
slug: bai-4-api-gateway-hono
description: 使用 Hono 建構 HTTP 伺服器：路由、中間件鏈、CORS、速率限制。 JWT 身份驗證、密碼雜湊、OAuth2 流程。請求驗證和錯誤處理。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 3
section_title: 第 1 部分：Monorepo 架構與平台
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: 從零開始搭建AI代理平台－與xClaw實戰
  slug: xay-dung-ai-agent-platform
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8327" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8327)"/>

  <!-- Decorations -->
  <g>
    <circle cx="872" cy="286" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="644" cy="198" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="916" cy="110" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="688" cy="282" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="960" cy="194" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="106" x2="1100" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="136" x2="1050" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="991.507041555162,135.5 991.507041555162,176.5 956,197 920.492958444838,176.5 920.492958444838,135.5 956,115" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：使用 Hono 的 API 閘道 — 路由、</tspan>
      <tspan x="60" dy="42">中介軟體、授權</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從零開始搭建AI代理平台－與xClaw實戰</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Monorepo 架構與平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Hono 是一個在 Web 標準 API 上運行的輕量級 HTTP 框架 — 快速、輕巧且類型安全。 xClaw 使用 Hono 作為 API 閘道－所有 HTTP 請求的入口點。

---

## 1.Hono伺服器設置

```typescript
// packages/gateway/src/gateway.ts
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

export function createGateway() {
  const app = new Hono();

  // Global middleware
  app.use('*', logger());
  app.use('*', cors({
    origin: process.env.CORS_ORIGINS?.split(',') ?? ['http://localhost:3001'],
    credentials: true,
  }));

  // Health check
  app.get('/health', (c) => {
    return c.json({
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    });
  });

  // Auth routes (public)
  app.post('/auth/login', loginHandler);
  app.post('/auth/register', registerHandler);

  // Protected API routes
  const api = new Hono();
  api.use('*', authMiddleware);   // JWT verification
  api.use('*', rbacMiddleware);   // Permission checking

  api.post('/chat', chatHandler);
  api.get('/models', modelsHandler);
  api.route('/workflows', workflowRoutes);
  api.route('/knowledge', knowledgeRoutes);
  api.route('/monitoring', monitoringRoutes);

  app.route('/api', api);
  return app;
}
```

## 2.JWT認證

```typescript
// packages/gateway/src/auth.ts
import { sign, verify } from 'hono/jwt';
import { compare, hash } from 'bcrypt';

async function loginHandler(c: Context) {
  const { email, password } = await c.req.json();

  const user = await findUserByEmail(email);
  if (!user) return c.json({ error: 'Invalid credentials' }, 401);

  const valid = await compare(password, user.passwordHash);
  if (!valid) return c.json({ error: 'Invalid credentials' }, 401);

  const token = await sign(
    { sub: user.id, tenantId: user.tenantId, email: user.email },
    process.env.JWT_SECRET!,
  );

  return c.json({ token, user: { id: user.id, name: user.name, email: user.email } });
}

// Auth middleware
async function authMiddleware(c: Context, next: Next) {
  const header = c.req.header('Authorization');
  if (!header?.startsWith('Bearer ')) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  const token = header.slice(7);
  const payload = await verify(token, process.env.JWT_SECRET!);
  c.set('user', payload);
  await next();
}
```

## 3. RBAC 中介軟體

```typescript
function requirePermission(...permissions: string[]) {
  return async (c: Context, next: Next) => {
    const user = c.get('user');
    const userPerms = await getUserPermissions(user.sub, user.tenantId);

    for (const perm of permissions) {
      if (!userPerms.includes(perm)) {
        return c.json({ error: 'Forbidden', required: perm }, 403);
      }
    }

    await next();
  };
}

// Usage
api.post('/workflows', requirePermission('workflows:create'), createWorkflowHandler);
api.delete('/workflows/:id', requirePermission('workflows:delete'), deleteWorkflowHandler);
```

---

## 4. 總結

- **Hono** — 輕量級、Web 標準、中介軟體鏈
- **JWT auth** — 無狀態身份驗證
- **RBAC 中介軟體** — 每個路由基於權限的存取控制
- **錯誤處理** — 一致的 JSON 錯誤回應

**下一篇文章：** LLM 路由器 - 多提供者 LLM 的適配器模式。
