---
id: 019c961a-aa04-7004-e004-aa0400000004
title: "Bài 4: API Gateway với Hono — Routes, Middleware, Auth"
slug: bai-4-api-gateway-hono
description: >-
  Xây HTTP server với Hono: routing, middleware chain, CORS, rate
  limiting. JWT authentication, password hashing, OAuth2 flow.
  Request validation và error handling.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Kiến trúc & Nền tảng Monorepo"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

Hono là một lightweight HTTP framework chạy trên Web Standards API — nhanh, nhẹ, và type-safe. xClaw dùng Hono làm API Gateway — entry point cho tất cả HTTP requests.

---

## 1. Hono Server Setup

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

## 2. JWT Authentication

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

## 3. RBAC Middleware

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

## 4. Tổng kết

- **Hono** — lightweight, Web Standards, middleware chain
- **JWT auth** — stateless authentication
- **RBAC middleware** — permission-based access control per route
- **Error handling** — consistent JSON error responses

**Bài tiếp theo:** LLM Router — Adapter Pattern cho multi-provider LLM.
