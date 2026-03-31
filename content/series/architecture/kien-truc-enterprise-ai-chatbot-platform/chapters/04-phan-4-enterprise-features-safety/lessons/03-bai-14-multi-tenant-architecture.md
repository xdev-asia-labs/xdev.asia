---
id: 019f0b20-b403-7001-e001-f2b8f9000403
title: 'Bài 14: Multi-Tenant Architecture — Tenant Isolation, Quotas & Billing'
slug: bai-14-multi-tenant-architecture
description: >-
  Multi-tenant design patterns, tenant isolation strategies, configuration per
  tenant, resource quotas, billing metering, data partitioning, tenant
  onboarding automation.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Enterprise Features & Safety"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<h2 id="1-multi-tenant-overview"><strong>1. Multi-Tenant Architecture Overview</strong></h2>

<p>Enterprise chatbot platform phục vụ hàng trăm organizations — mỗi tenant có data, config, branding, models, và quotas riêng. Multi-tenancy là yếu tố quyết định <strong>unit economics</strong> của platform.</p>

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

<h2 id="2-tenant-configuration"><strong>2. Tenant Configuration System</strong></h2>

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

<h2 id="3-data-isolation"><strong>3. Data Isolation — Row-Level Security</strong></h2>

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

<h2 id="4-quota-metering"><strong>4. Resource Quota & Usage Metering</strong></h2>

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

<h2 id="5-tenant-onboarding"><strong>5. Automated Tenant Onboarding</strong></h2>

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

<h2 id="tong-ket"><strong>Tổng kết Bài 14</strong></h2>

<ul>
<li><strong>Isolation Levels</strong>: Shared DB + RLS (starter) → Separate schema (pro) → Separate DB (enterprise)</li>
<li><strong>Tenant Config</strong>: AI models, features, guardrails, branding, quotas — all per tenant</li>
<li><strong>Row-Level Security</strong>: PostgreSQL RLS + middleware <code>SET app.tenant_id</code> ensures data isolation</li>
<li><strong>Quota & Billing</strong>: Redis atomic counters for real-time limits, async persist to DB for billing</li>
<li><strong>Onboarding Automation</strong>: 1-click provisioning — DB, vector store, Redis, personas, guardrails</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Analytics & Observability — conversation analytics, LLM metrics, dashboards, alerting, cost tracking.</p>
