---
id: 019f0b20-b102-7001-e001-f2b8f9000102
title: 第 2 課：平台架構概述 — 微服務、事件驅動與 DDD
slug: bai-2-platform-architecture-overview
description: 高階系統架構、有界上下文（對話、知識、代理、通路、分析、計費）、事件驅動架構、技術堆疊選擇、C4 圖、部署拓樸。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：基礎與平台概述
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: 企業人工智慧聊天機器人平台架構－從原型到生產
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8689" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8689)"/>

  <!-- Decorations -->
  <g>
    <circle cx="837" cy="61" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1074" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="811" cy="255" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="1048" cy="92" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="189" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="51" x2="1100" y2="131" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="81" x2="1050" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="923.5166604983954,88 923.5166604983954,114 901,127 878.4833395016046,114 878.4833395016046,88 901,75" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ 建築 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 课：平台架构概述 —</tspan>
      <tspan x="60" dy="42">微服务、事件驱动和 DDD</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">企業人工智慧聊天機器人平台架構－從原型到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：基礎與平台概述</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-architecture-philosophy"><strong>1. 建筑哲学</strong></h2>

<p>企業AI聊天機器人平台不僅僅是「呼叫OpenAI API並回傳回應」。這是一個 <strong>分散式系統</strong> 复杂，有许多需要实时协调的组件。三个架构原则：</p>

<ul>
<li><strong>模組化</strong> — 每個能力都是獨立的有界上下文，可以單獨替換/升級</li>
<li><strong>事件驅動</strong> — 服務透過事件進行通信，減少耦合，支援審計跟踪</li>
<li><strong>人工智慧優先</strong> — AI 工作負載的架構最佳化：串流、長時間運行的推理、GPU 感知擴展</li>
</ul>

<h2 id="2-bounded-contexts"><strong>2. 有界上下文－AI 聊天機器人的 DDD</strong></h2>

<p>应用领域驱动设计将平台划分为 <strong>8 有界上下文</strong>：</p>

<pre><code class="language-text">
┌───────────────────────────────────────────────────────────────────┐
│                    AI CHATBOT PLATFORM                             │
├───────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │
│  │ CONVERSATION │  │  KNOWLEDGE   │  │    AGENT     │             │
│  │   CONTEXT    │  │   CONTEXT    │  │   CONTEXT    │             │
│  │              │  │              │  │              │             │
│  │ • Session    │  │ • Documents  │  │ • Tools      │             │
│  │ • Messages   │  │ • Embeddings │  │ • Functions  │             │
│  │ • Memory     │  │ • Search     │  │ • Workflows  │             │
│  │ • Context    │  │ • Sync       │  │ • Planning   │             │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘             │
│         │                 │                 │                      │
│  ┌──────┴───────┐  ┌──────┴───────┐  ┌──────┴───────┐             │
│  │   CHANNEL    │  │  AI ENGINE   │  │  GUARDRAIL   │             │
│  │   CONTEXT    │  │   CONTEXT    │  │   CONTEXT    │             │
│  │              │  │              │  │              │             │
│  │ • Web Widget │  │ • LLM Router │  │ • Input Gate │             │
│  │ • Slack Bot  │  │ • Streaming  │  │ • Output Gate│             │
│  │ • WhatsApp   │  │ • Prompt Eng │  │ • PII Mask   │             │
│  │ • Mobile SDK │  │ • Model Mgmt │  │ • Toxicity   │             │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘             │
│         │                 │                 │                      │
│  ┌──────┴───────┐  ┌──────┴───────┐                               │
│  │  ANALYTICS   │  │   BILLING    │                               │
│  │   CONTEXT    │  │   CONTEXT    │                               │
│  │              │  │              │                               │
│  │ • Metrics    │  │ • Usage      │                               │
│  │ • Tracing    │  │ • Plans      │                               │
│  │ • Feedback   │  │ • Invoicing  │                               │
│  │ • Evals      │  │ • Quotas     │                               │
│  └──────────────┘  └──────────────┘                               │
│                                                                    │
└───────────────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="3-context-map"><strong>3. 上下文映射——服务交互</strong></h2>

<pre><code class="language-typescript">
// Domain Events flowing between bounded contexts
type DomainEvent =
  | { type: 'conversation.started'; payload: { sessionId: string; channelType: string; tenantId: string } }
  | { type: 'message.received'; payload: { sessionId: string; content: string; role: 'user' | 'assistant' } }
  | { type: 'knowledge.searched'; payload: { query: string; results: number; latencyMs: number } }
  | { type: 'tool.invoked'; payload: { toolName: string; params: Record&lt;string, unknown&gt;; success: boolean } }
  | { type: 'agent.planned'; payload: { plan: string[]; model: string } }
  | { type: 'guardrail.triggered'; payload: { type: string; severity: 'low' | 'medium' | 'high' | 'critical' } }
  | { type: 'response.generated'; payload: { sessionId: string; tokensUsed: number; latencyMs: number } }
  | { type: 'human.escalated'; payload: { sessionId: string; reason: string } }
  | { type: 'feedback.submitted'; payload: { messageId: string; rating: 'positive' | 'negative'; comment?: string } };
</code></pre>

<h2 id="4-high-level-architecture"><strong>4. 高層架構－C4 1級（系統上下文）</strong></h2>

<pre><code class="language-text">
                    ┌─────────────┐
                    │   End User  │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
        ┌─────▼────┐ ┌────▼─────┐ ┌───▼──────┐
        │ Web Chat │ │  Slack   │ │ WhatsApp │
        │  Widget  │ │   Bot    │ │   Bot    │
        └─────┬────┘ └────┬─────┘ └───┬──────┘
              │            │            │
              └────────────┼────────────┘
                           │
                   ┌───────▼───────┐
                   │  API Gateway  │
                   │  (Kong/Nginx) │
                   └───────┬───────┘
                           │
              ┌────────────┼────────────┐
              │                         │
     ┌────────▼─────────┐    ┌─────────▼──────────┐
     │  Chatbot Platform │    │   Admin Dashboard  │
     │     (Core API)    │    │   (Management UI)  │
     └────────┬─────────┘    └─────────┬──────────┘
              │                         │
    ┌─────────┼──────────┐             │
    │         │          │             │
┌───▼──┐ ┌───▼──┐ ┌────▼───┐  ┌─────▼─────┐
│OpenAI│ │Claude│ │ Self-  │  │PostgreSQL │
│ API  │ │ API  │ │ Hosted │  │  Qdrant   │
│      │ │      │ │ (vLLM) │  │  Redis    │
└──────┘ └──────┘ └────────┘  └───────────┘
</code></pre>

<h2 id="5-c4-level2"><strong>5. C4 2 级——容器图</strong></h2>

<pre><code class="language-text">
┌─────────────────────────────────────────────────────────────────────┐
│                        CHATBOT PLATFORM                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────┐    ┌──────────────────┐    ┌────────────────┐  │
│  │  Channel Gateway │───▶│ Conversation Svc │───▶│ AI Engine Svc  │  │
│  │  (NestJS)        │    │  (NestJS)        │    │ (Python/FastAPI│  │
│  │                  │    │                  │    │  + TypeScript) │  │
│  │  • WebSocket     │    │  • Session mgmt  │    │  • LLM Router  │  │
│  │  • REST API      │    │  • Context build │    │  • RAG Pipeline│  │
│  │  • Webhook recv  │    │  • Memory mgmt   │    │  • Prompt Eng  │  │
│  └─────────────────┘    └──────────────────┘    │  • Streaming   │  │
│                                                  └────────────────┘  │
│  ┌─────────────────┐    ┌──────────────────┐    ┌────────────────┐  │
│  │  Agent Service   │    │ Knowledge Service│    │ Guardrail Svc  │  │
│  │  (Python)        │    │  (Python)        │    │ (Python)       │  │
│  │                  │    │                  │    │                │  │
│  │  • Tool Registry │    │  • Doc Ingestion │    │  • Input check │  │
│  │  • Executor      │    │  • Embedding     │    │  • Output check│  │
│  │  • Planner       │    │  • Search        │    │  • PII masking │  │
│  └─────────────────┘    └──────────────────┘    └────────────────┘  │
│                                                                      │
│  ┌─────────────────┐    ┌──────────────────┐    ┌────────────────┐  │
│  │ Analytics Svc    │    │  Billing Service │    │ Admin API      │  │
│  │  (Python)        │    │  (NestJS)        │    │ (NestJS)       │  │
│  │                  │    │                  │    │                │  │
│  │  • Tracing       │    │  • Usage meter   │    │  • Tenant mgmt │  │
│  │  • Metrics       │    │  • Subscription  │    │  • Config      │  │
│  │  • Evals         │    │  • Invoicing     │    │  • Prompt mgmt │  │
│  └─────────────────┘    └──────────────────┘    └────────────────┘  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="6-event-driven"><strong>6. 事件驅動架構</strong></h2>

<p>為什麼人工智慧聊天機器人採用事件驅動？</p>

<ul>
<li><strong>審計追蹤</strong> — 所有對話事件都會被記錄，這對合規性至關重要</li>
<li><strong>非同步處理</strong> — 知识摄取、分析、计费运行异步</li>
<li><strong>解耦</strong> — AI Engine不需要了解Billing；只發出令牌使用事件</li>
<li><strong>重播</strong> — 重播事件以調試對話流程、重新訓練模型</li>
</ul>

<pre><code class="language-typescript">
// Event Bus implementation với Kafka
import { Kafka, Producer, Consumer } from 'kafkajs';

interface EventBus {
  publish(topic: string, event: DomainEvent): Promise&lt;void&gt;;
  subscribe(topic: string, handler: (event: DomainEvent) =&gt; Promise&lt;void&gt;): Promise&lt;void&gt;;
}

class KafkaEventBus implements EventBus {
  private producer: Producer;
  private consumers: Map&lt;string, Consumer&gt; = new Map();

  constructor(private kafka: Kafka) {
    this.producer = kafka.producer();
  }

  async publish(topic: string, event: DomainEvent): Promise&lt;void&gt; {
    await this.producer.send({
      topic,
      messages: [{
        key: event.payload.sessionId ?? crypto.randomUUID(),
        value: JSON.stringify({
          ...event,
          timestamp: new Date().toISOString(),
          eventId: crypto.randomUUID(),
        }),
        headers: {
          'event-type': event.type,
          'tenant-id': event.payload.tenantId ?? 'system',
        },
      }],
    });
  }

  async subscribe(
    topic: string,
    handler: (event: DomainEvent) =&gt; Promise&lt;void&gt;,
  ): Promise&lt;void&gt; {
    const consumer = this.kafka.consumer({ groupId: `${topic}-consumer` });
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: false });
    await consumer.run({
      eachMessage: async ({ message }) =&gt; {
        const event = JSON.parse(message.value!.toString()) as DomainEvent;
        await handler(event);
      },
    });
    this.consumers.set(topic, consumer);
  }
}
</code></pre>

<h2 id="7-request-flow"><strong>7. 请求流程——从用户消息到响应</strong></h2>

<pre><code class="language-text">
User Message
     │
     ▼
┌──────────┐     ┌──────────┐     ┌──────────┐
│ Channel  │────▶│ Input    │────▶│Conversa- │
│ Gateway  │     │ Guardrail│     │tion Svc  │
└──────────┘     └──────────┘     └────┬─────┘
                                       │
                    ┌──────────────────┤
                    │                  │
                    ▼                  ▼
              ┌──────────┐      ┌──────────┐
              │ Memory   │      │ Knowledge│
              │ Retrieve │      │ Search   │
              └────┬─────┘      └────┬─────┘
                   │                  │
                   └────────┬─────────┘
                            │
                            ▼
                      ┌──────────┐
                      │  Prompt  │
                      │ Assembly │
                      └────┬─────┘
                           │
                           ▼
                      ┌──────────┐
                      │ AI Engine│──── Tool Calls? ───▶ Agent Svc
                      │ (LLM)   │◀──── Results ──────┘
                      └────┬─────┘
                           │
                           ▼
                      ┌──────────┐     ┌──────────┐
                      │  Output  │────▶│ Channel  │──▶ User
                      │ Guardrail│     │ Delivery │
                      └──────────┘     └──────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ Event Bus    │
                    │ (Analytics,  │
                    │  Billing,    │
                    │  Logging)    │
                    └──────────────┘
</code></pre>

<h2 id="8-data-model"><strong>8. 核心資料模型</strong></h2>

<pre><code class="language-typescript">
// Core domain entities
interface Tenant {
  id: string;
  name: string;
  plan: 'free' | 'pro' | 'enterprise';
  config: TenantConfig;
  createdAt: Date;
}

interface TenantConfig {
  defaultModel: string;               // e.g., 'gpt-4o'
  fallbackModels: string[];            // e.g., ['claude-3-sonnet', 'gpt-4o-mini']
  maxTokensPerRequest: number;         // e.g., 4096
  maxConversationsPerDay: number;      // e.g., 10000
  enabledChannels: ChannelType[];      // e.g., ['web', 'slack']
  guardrailConfig: GuardrailConfig;
  ragConfig: RAGConfig;
}

interface Conversation {
  id: string;
  tenantId: string;
  channelType: ChannelType;
  channelUserId: string;
  status: 'active' | 'closed' | 'escalated';
  metadata: Record&lt;string, unknown&gt;;
  startedAt: Date;
  lastMessageAt: Date;
}

interface Message {
  id: string;
  conversationId: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  toolCalls?: ToolCall[];
  metadata: {
    model?: string;
    tokensUsed?: { input: number; output: number };
    latencyMs?: number;
    sources?: Citation[];
  };
  createdAt: Date;
}

interface Citation {
  documentId: string;
  chunkId: string;
  content: string;
  score: number;
  metadata: Record&lt;string, unknown&gt;;
}

type ChannelType = 'web' | 'slack' | 'teams' | 'whatsapp' | 'discord' | 'email' | 'api';
</code></pre>

<h2 id="9-deployment"><strong>9. 部署拓扑</strong></h2>

<pre><code class="language-text">
┌─────────────────────────── Kubernetes Cluster ──────────────────────┐
│                                                                      │
│  ┌─── Namespace: chatbot-platform ──────────────────────────────┐   │
│  │                                                               │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │   │
│  │  │Channel   │ │Conversa- │ │AI Engine │ │Agent Svc │        │   │
│  │  │Gateway   │ │tion Svc  │ │(2 replicas│ │          │        │   │
│  │  │(3 rep.)  │ │(2 rep.)  │ │+ GPU pod)│ │(2 rep.)  │        │   │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │   │
│  │                                                               │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │   │
│  │  │Knowledge │ │Guardrail │ │Analytics │ │Billing   │        │   │
│  │  │  Svc     │ │  Svc     │ │  Svc     │ │  Svc     │        │   │
│  │  │(2 rep.)  │ │(2 rep.)  │ │(1 rep.)  │ │(1 rep.)  │        │   │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │   │
│  └───────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─── Namespace: data ──────────────────────────────────────────┐   │
│  │  PostgreSQL (HA) │ Qdrant │ Redis Cluster │ Kafka │ MinIO    │   │
│  └───────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─── Namespace: monitoring ────────────────────────────────────┐   │
│  │  Langfuse │ Prometheus │ Grafana │ AlertManager │ Loki       │   │
│  └───────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="10-api-design"><strong>10.API设计原则</strong></h2>

<pre><code class="language-typescript">
// REST API structure
// POST /api/v1/conversations                    — Start conversation
// POST /api/v1/conversations/:id/messages       — Send message (returns stream)
// GET  /api/v1/conversations/:id/messages       — Get message history
// POST /api/v1/conversations/:id/feedback       — Submit feedback
// POST /api/v1/conversations/:id/escalate       — Escalate to human
// GET  /api/v1/conversations/:id                — Get conversation details

// WebSocket for real-time
// ws://api/v1/ws?token=xxx

// Admin API
// POST /api/v1/admin/knowledge-bases             — Create knowledge base
// POST /api/v1/admin/knowledge-bases/:id/documents — Upload document
// GET  /api/v1/admin/analytics/conversations      — Analytics dashboard
// PUT  /api/v1/admin/prompts/:id                  — Update prompt template
// POST /api/v1/admin/tools                        — Register tool
</code></pre>

<h2 id="tong-ket"><strong>第 2 课总结</strong></h2>

<ul>
<li><strong>8 有界上下文</strong>：對話、知識、代理商、通路、AI引擎、Guardrail、分析、計費</li>
<li><strong>事件驅動</strong> 使用 Kafka 進行稽核追蹤 + 非同步處理 + 解耦的架構</li>
<li>請求流經 <strong>7個階段</strong>：通道→輸入防護→上下文建置→RAG +記憶體→提示→LLM→輸出防護</li>
<li>每项服务都是 <strong>可独立部署</strong> 在 Kubernetes 上</li>
<li>核心实体：租户→对话→消息→引用</li>
</ul>

<p><strong>下一篇：</strong> 多模型閘道 — 如何在 OpenAI/Claude/Gemini/自架模型、後備鏈、成本最佳化和代幣預算管理之間路由請求。</p>
