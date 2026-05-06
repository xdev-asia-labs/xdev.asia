---
id: 019f0b20-b403-7001-e001-f2b8f9000403
title: 第 14 課：多租戶架構 — 租戶隔離、配額和計費
slug: bai-14-multi-tenant-architecture
description: 多租戶設計模式、租戶隔離策略、每個租戶的配置、資源配額、計費計量、資料分區、租戶加入自動化。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 14
section_title: 第 4 部分：企業功能與安全
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: 企業人工智慧聊天機器人平台架構－從原型到生產
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1179" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1179)"/>

  <!-- Decorations -->
  <g>
    <circle cx="951" cy="83" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="802" cy="274" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="653" cy="205" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="1004" cy="136" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="67" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="173" x2="1100" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="203" x2="1050" y2="273" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.2487113059642,209 1047.2487113059642,237 1023,251 998.7512886940357,237 998.7512886940357,209 1023,195" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ 建築 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：多租戶架構 — 租戶</tspan>
      <tspan x="60" dy="42">隔離、配額和計費</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">企業人工智慧聊天機器人平台架構－從原型到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：企業功能與安全</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-multi-tenant-overview"><strong>1. 多租戶架構概述</strong></h2>

<p>企業聊天機器人平台為數百個組織提供服務——每個租戶都有自己的數據、配置、品牌、模型和配額。多租戶是決定因素 <strong>單位經濟</strong> 的平台。</p>

<pre><code class="language-text">
┌────────── MULTI-TENANT ISOLATION MODEL ──────────────┐
│                                                       │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                 │
│  │Tenant A │ │Tenant B │ │Tenant C │  (Customers)    │
│  └────┬────┘ └────┬────┘ └────┬────┘                 │
│       │           │           │                       │
│  ═════╪═══════════╪═══════════╪═══════ API Gateway    │
│       │           │           │       (Auth + Route)  │
│       │           │           │                       │
│  ┌────▼───────────▼───────────▼────┐                 │
│  │      SHARED APPLICATION LAYER   │                 │
│  │   (Same code, different config) │                 │
│  └────┬───────────┬───────────┬────┘                 │
│       │           │           │                       │
│  Level 1: Shared DB + Row-Level Security             │
│  Level 2: Separate schemas per tenant                │
│  Level 3: Separate databases (enterprise tier)       │
│                                                       │
│  ┌────▼───────────▼───────────▼────┐                 │
│  │  tenant_a    tenant_b   tenant_c│  Data Layer     │
│  │  ┌──────┐   ┌──────┐  ┌──────┐ │                 │
│  │  │ data │   │ data │  │ data │ │                 │
│  │  └──────┘   └──────┘  └──────┘ │                 │
│  └─────────────────────────────────┘                 │
└───────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-tenant-configuration"><strong>2. 租戶配置系統</strong></h2>

<pre><code class="language-typescript">
interface TenantConfig {
  id: string;
  name: string;
  slug: string;
  plan: 'starter' | 'professional' | 'enterprise';
  
  // AI Configuration
  ai: {
    defaultModel: string;
    allowedModels: string[];
    temperature: number;
    maxTokensPerRequest: number;
    systemPromptOverride?: string;
  };

  // Feature flags
  features: {
    multiAgent: boolean;
    voiceAgent: boolean;
    textToSQL: boolean;
    customTools: boolean;
    analyticsDashboard: boolean;
    sso: boolean;
    customDomain: boolean;
  };

  // Guardrails
  guardrails: {
    piiMasking: boolean;
    toxicityFilter: boolean;
    jailbreakDetection: boolean;
    allowedTopics: string[];
    forbiddenTopics: string[];
    brandVoice: string;
  };

  // Branding
  branding: {
    botName: string;
    botAvatar: string;
    primaryColor: string;
    welcomeMessage: string;
  };

  // Resource quotas
  quotas: {
    maxConversationsPerMonth: number;
    maxTokensPerMonth: number;
    maxDocuments: number;
    maxStorageMB: number;
    maxConcurrentUsers: number;
    maxToolsCustom: number;
  };
}

class TenantConfigService {
  private cache = new Map&lt;string, { config: TenantConfig; expiresAt: number }&gt;();

  async getConfig(tenantId: string): Promise&lt;TenantConfig&gt; {
    // Check cache (5 min TTL)
    const cached = this.cache.get(tenantId);
    if (cached &amp;&amp; cached.expiresAt &gt; Date.now()) {
      return cached.config;
    }

    const config = await this.db.tenantConfig.findUnique({ where: { id: tenantId } });
    if (!config) throw new TenantNotFoundError(tenantId);

    this.cache.set(tenantId, {
      config,
      expiresAt: Date.now() + 5 * 60 * 1000,
    });

    return config;
  }

  async updateConfig(tenantId: string, updates: Partial&lt;TenantConfig&gt;): Promise&lt;void&gt; {
    await this.db.tenantConfig.update({
      where: { id: tenantId },
      data: updates,
    });

    // Invalidate cache
    this.cache.delete(tenantId);

    // Notify all instances
    await this.redis.publish('tenant:config:updated', JSON.stringify({ tenantId }));
  }
}
</code></pre>

<h2 id="3-data-isolation"><strong>3. 資料隔離－行級安全</strong></h2>

<pre><code class="language-sql">
-- PostgreSQL Row-Level Security for multi-tenant

-- Enable RLS on all tables
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY tenant_isolation_conversations ON conversations
  USING (tenant_id = current_setting('app.tenant_id')::uuid);

CREATE POLICY tenant_isolation_messages ON messages
  USING (tenant_id = current_setting('app.tenant_id')::uuid);

CREATE POLICY tenant_isolation_documents ON documents
  USING (tenant_id = current_setting('app.tenant_id')::uuid);

-- Application sets tenant context per request
-- SET app.tenant_id = 'tenant-uuid-here';
</code></pre>

<pre><code class="language-typescript">
// Middleware to set tenant context
class TenantMiddleware {
  async handle(req: Request, res: Response, next: NextFunction): Promise&lt;void&gt; {
    const tenantId = this.extractTenantId(req);
    if (!tenantId) {
      res.status(401).json({ error: 'Missing tenant identification' });
      return;
    }

    // Validate tenant exists and is active
    const tenant = await this.tenantService.getConfig(tenantId);
    if (!tenant || tenant.status === 'suspended') {
      res.status(403).json({ error: 'Tenant suspended or not found' });
      return;
    }

    // Set context for downstream services
    req.tenantId = tenantId;
    req.tenantConfig = tenant;

    // Set RLS context for database queries
    await this.db.$executeRaw`SET app.tenant_id = ${tenantId}`;

    next();
  }

  private extractTenantId(req: Request): string | null {
    // Strategy 1: From JWT token
    if (req.user?.tenantId) return req.user.tenantId;
    // Strategy 2: From subdomain (tenant-a.chatbot.example.com)
    const subdomain = req.hostname.split('.')[0];
    return this.tenantBySubdomain.get(subdomain) ?? null;
    // Strategy 3: From API key header
  }
}
</code></pre>

<h2 id="4-quota-metering"><strong>4. 資源配額與使用計量</strong></h2>

<pre><code class="language-typescript">
class QuotaManager {
  async checkQuota(
    tenantId: string,
    resource: keyof TenantConfig['quotas'],
    amount: number = 1,
  ): Promise&lt;{ allowed: boolean; remaining: number }&gt; {
    const config = await this.tenantService.getConfig(tenantId);
    const limit = config.quotas[resource];

    // Get current usage from Redis (real-time counter)
    const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM
    const key = `quota:${tenantId}:${resource}:${currentMonth}`;
    const currentUsage = parseInt(await this.redis.get(key) ?? '0', 10);

    const remaining = limit - currentUsage;
    const allowed = remaining &gt;= amount;

    if (!allowed) {
      await this.notifyQuotaExceeded(tenantId, resource, currentUsage, limit);
    }

    return { allowed, remaining };
  }

  async recordUsage(
    tenantId: string,
    resource: keyof TenantConfig['quotas'],
    amount: number = 1,
  ): Promise&lt;void&gt; {
    const currentMonth = new Date().toISOString().slice(0, 7);
    const key = `quota:${tenantId}:${resource}:${currentMonth}`;

    // Atomic increment in Redis
    await this.redis.incrby(key, amount);

    // Set expiry (end of next month as safety)
    await this.redis.expire(key, 62 * 24 * 3600);

    // Persist to DB for billing (async)
    await this.usageQueue.publish('usage.recorded', {
      tenantId,
      resource,
      amount,
      timestamp: new Date(),
    });
  }
}

class BillingMeter {
  async calculateMonthlyBill(tenantId: string, month: string): Promise&lt;Bill&gt; {
    const usage = await this.db.usageRecord.aggregate({
      where: { tenantId, month },
      groupBy: ['resource'],
      _sum: { amount: true },
    });

    const config = await this.tenantService.getConfig(tenantId);
    const basePlanPrice = this.getPlanPrice(config.plan);

    const overageCharges = usage.map(u =&gt; {
      const limit = config.quotas[u.resource];
      const overage = Math.max(0, u._sum.amount - limit);
      return {
        resource: u.resource,
        used: u._sum.amount,
        included: limit,
        overage,
        charge: overage * this.getOverageRate(u.resource),
      };
    });

    return {
      tenantId,
      month,
      basePlanPrice,
      overageCharges,
      total: basePlanPrice + overageCharges.reduce((sum, o) =&gt; sum + o.charge, 0),
    };
  }
}
</code></pre>

<h2 id="5-tenant-onboarding"><strong>5. 自動化租戶入職</strong></h2>

<pre><code class="language-typescript">
class TenantOnboardingService {
  async onboard(input: OnboardingInput): Promise&lt;TenantConfig&gt; {
    // 1. Create tenant record
    const tenant = await this.db.tenant.create({
      data: {
        id: crypto.randomUUID(),
        name: input.organizationName,
        slug: this.slugify(input.organizationName),
        plan: input.plan,
        status: 'active',
        createdAt: new Date(),
      },
    });

    // 2. Create default config based on plan
    const config = await this.createDefaultConfig(tenant.id, input.plan);

    // 3. Provision resources
    await Promise.all([
      this.provisionVectorNamespace(tenant.id),
      this.provisionRedisNamespace(tenant.id),
      this.createDefaultPersona(tenant.id),
      this.createAPIKeys(tenant.id),
    ]);

    // 4. Import initial knowledge (if provided)
    if (input.initialDocuments?.length) {
      await this.knowledgeService.bulkIngest(tenant.id, input.initialDocuments);
    }

    // 5. Setup default guardrails
    await this.guardrailService.applyDefaults(tenant.id, input.industry);

    return config;
  }
}
</code></pre>

<h2 id="tong-ket"><strong>第 14 課總結</strong></h2>

<ul>
<li><strong>隔離等級</strong>：共享資料庫+RLS（入門版）→單獨模式（專業版）→單獨資料庫（企業版）</li>
<li><strong>租戶配置</strong>：AI 模型、功能、護欄、品牌、配額 — 全部針對每位租戶</li>
<li><strong>行級安全性</strong>: PostgreSQL RLS + 中介軟體 <code>SET app.tenant_id</code> 確保資料隔離</li>
<li><strong>配額與計費</strong>：Redis原子計數器用於即時限制，非同步持久化到資料庫進行計費</li>
<li><strong>入職自動化</strong>：一鍵配置 — DB、向量儲存、Redis、角色、護欄</li>
</ul>

<p><strong>下一篇：</strong> 分析和可觀察性——對話分析、法學碩士指標、儀表板、警報、成本追蹤。</p>
