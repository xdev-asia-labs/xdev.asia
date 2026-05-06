---
id: 019c961a-aa17-7017-e017-aa1700000017
title: 第 17 課：多租用戶 RBAC — 租用戶隔離與權限
slug: bai-17-multi-tenant-rbac
description: 多租戶架構：租戶隔離、資料分區。 RBAC系統：角色、權限、策略。 60個細化權限，4個系統角色。租戶設定、使用配額、計費。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 16
section_title: 第 6 部分：多租戶、RBAC 和通道
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: 從零開始搭建AI代理平台－與xClaw實戰
  slug: xay-dung-ai-agent-platform
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4390" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4390)"/>

  <!-- Decorations -->
  <g>
    <circle cx="689" cy="77" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="778" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="867" cy="195" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="956" cy="124" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="53" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="247" x2="1100" y2="327" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="277" x2="1050" y2="347" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1033.3730669589463,176 1033.3730669589463,218 997,239 960.6269330410536,218 960.6269330410536,176 997,155" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 人工智慧與機器學習 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：多租戶 RBAC — 租戶</tspan>
      <tspan x="60" dy="42">隔離與權限</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從零開始搭建AI代理平台－與xClaw實戰</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：多租戶、RBAC 和通道</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

多租戶平台必須保證資料隔離－租戶A無法存取租戶B的資料。 RBAC（基於角色的存取控制）控制誰可以做什麼。本文實現了一個完整的多租戶RBAC系統。

---

## 1. 租戶隔離

### 1.1 資料分割區策略

```typescript
// Approach: Shared database, tenant_id column
// Mỗi query phải filter theo tenantId

// packages/db/src/middleware/tenant-middleware.ts
export function tenantScope(tenantId: string) {
  return {
    // PostgreSQL: Drizzle ORM filter
    pg: <T extends { tenantId: string }>(query: any) =>
      query.where(eq(schema.tenantId, tenantId)),

    // MongoDB: add tenantId to all queries
    mongo: (filter: Record<string, unknown>) => ({
      ...filter,
      tenantId,
    }),
  };
}

// Usage in service layer
async function getSessions(tenantId: string, userId: string) {
  return db.collection('sessions')
    .find(tenantScope(tenantId).mongo({ userId }))
    .sort({ updatedAt: -1 })
    .toArray();
}
```

### 1.2 租戶設置

```typescript
interface TenantSettings {
  // LLM Configuration
  llm: {
    defaultProvider: string;
    defaultModel: string;
    apiKeys: Record<string, string>; // encrypted
    maxTokensPerRequest: number;
  };

  // Usage Quotas
  quotas: {
    maxUsersPerTenant: number;
    maxRequestsPerDay: number;
    maxStorageMB: number;
    maxCollections: number;
  };

  // Features
  features: {
    ragEnabled: boolean;
    workflowsEnabled: boolean;
    mcpEnabled: boolean;
    customDomainsEnabled: boolean;
  };

  // Branding
  branding: {
    logo?: string;
    primaryColor?: string;
    appName?: string;
  };
}
```

---

## 2.RBAC系統

### 2.1 權限定義

```typescript
// packages/core/src/auth/permissions.ts
export const PERMISSIONS = {
  // Chat
  'chat:send': 'Send chat messages',
  'chat:view_history': 'View chat history',
  'chat:delete': 'Delete chat sessions',
  'chat:export': 'Export chat data',

  // Models
  'models:view': 'View available models',
  'models:configure': 'Configure model settings',

  // Knowledge Base (RAG)
  'knowledge:view': 'View knowledge collections',
  'knowledge:create': 'Create collections',
  'knowledge:upload': 'Upload documents',
  'knowledge:delete': 'Delete collections/documents',

  // Workflows
  'workflows:view': 'View workflows',
  'workflows:create': 'Create workflows',
  'workflows:execute': 'Execute workflows',
  'workflows:delete': 'Delete workflows',

  // Skills & Domains
  'skills:view': 'View available skills',
  'skills:activate': 'Activate/deactivate skills',
  'skills:manage': 'Manage skill configurations',

  // Users & Roles
  'users:view': 'View user list',
  'users:invite': 'Invite new users',
  'users:remove': 'Remove users',
  'roles:view': 'View roles',
  'roles:manage': 'Create/edit/delete roles',

  // Tenant
  'tenant:settings': 'Manage tenant settings',
  'tenant:billing': 'View/manage billing',
  'tenant:api_keys': 'Manage API keys',

  // Monitoring
  'monitoring:view': 'View usage analytics',
  'monitoring:logs': 'View system logs',
  'monitoring:audit': 'View audit trail',
} as const;

export type Permission = keyof typeof PERMISSIONS;
```

### 2.2 系統角色

```typescript
export const SYSTEM_ROLES = {
  owner: {
    name: 'Owner',
    permissions: Object.keys(PERMISSIONS) as Permission[], // All 60 permissions
    description: 'Full access to everything',
  },
  admin: {
    name: 'Admin',
    permissions: Object.keys(PERMISSIONS).filter(
      p => !p.startsWith('tenant:') // Everything except tenant management
    ) as Permission[],
    description: 'Manage users, content, and settings',
  },
  member: {
    name: 'Member',
    permissions: [
      'chat:send', 'chat:view_history',
      'models:view',
      'knowledge:view', 'knowledge:upload',
      'workflows:view', 'workflows:execute',
      'skills:view', 'skills:activate',
      'monitoring:view',
    ] as Permission[],
    description: 'Standard user access',
  },
  viewer: {
    name: 'Viewer',
    permissions: [
      'chat:send', 'chat:view_history',
      'models:view',
      'knowledge:view',
      'workflows:view',
      'skills:view',
    ] as Permission[],
    description: 'Read-only access',
  },
};
```

### 2.3 權限檢查器

```typescript
// packages/core/src/auth/rbac.ts
export class RBACService {
  private db: DrizzleDB;

  async hasPermission(
    userId: string,
    tenantId: string,
    permission: Permission,
  ): Promise<boolean> {
    const userRoles = await this.db
      .select()
      .from(schema.userRoles)
      .innerJoin(schema.roles, eq(schema.roles.id, schema.userRoles.roleId))
      .where(
        and(
          eq(schema.userRoles.userId, userId),
          eq(schema.roles.tenantId, tenantId),
        ),
      );

    for (const ur of userRoles) {
      const perms = ur.roles.permissions as string[];
      if (perms.includes(permission)) return true;
    }

    return false;
  }

  async getUserPermissions(
    userId: string,
    tenantId: string,
  ): Promise<Permission[]> {
    const userRoles = await this.db
      .select()
      .from(schema.userRoles)
      .innerJoin(schema.roles, eq(schema.roles.id, schema.userRoles.roleId))
      .where(
        and(
          eq(schema.userRoles.userId, userId),
          eq(schema.roles.tenantId, tenantId),
        ),
      );

    const permissions = new Set<Permission>();
    for (const ur of userRoles) {
      const perms = ur.roles.permissions as Permission[];
      perms.forEach(p => permissions.add(p));
    }

    return Array.from(permissions);
  }
}
```

---

## 3. 審計追踪

```typescript
// Mọi action quan trọng đều được log
async function auditLog(
  tenantId: string,
  userId: string,
  action: string,
  details: Record<string, unknown>,
) {
  await db.collection('audit_logs').insertOne({
    tenantId,
    userId,
    action,
    details,
    ip: context.ip,
    userAgent: context.userAgent,
    createdAt: new Date(),
  });
}

// Usage
await auditLog(tenantId, userId, 'role:assigned', {
  targetUserId: newUser.id,
  roleName: 'member',
});
```

---

## 4. 總結

- **租用戶隔離** — 與以下人員共用資料庫 `tenantId` 濾
- **60 權限** — 細化，依功能分組
- **4 個系統角色** — 擁有者、管理者、成員、檢視者
- **自訂角色** — 租用戶可以創建自己的角色
- **審計追蹤** — 記錄的每項重要操作

**下一篇文章：** 聊天頻道 — 多平台訊息連線。
