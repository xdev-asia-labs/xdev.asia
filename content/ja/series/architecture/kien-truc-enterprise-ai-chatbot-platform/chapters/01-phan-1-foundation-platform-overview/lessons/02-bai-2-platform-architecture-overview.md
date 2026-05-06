---
id: 019f0b20-b102-7001-e001-f2b8f9000102
title: 'レッスン 2: プラットフォーム アーキテクチャの概要 — マイクロサービス、イベント駆動型、DDD'
slug: bai-2-platform-architecture-overview
description: >-
  高レベルのシステム アーキテクチャ、限定されたコンテキスト
  (会話、ナレッジ、エージェント、チャネル、分析、請求)、イベント駆動型アーキテクチャ、テクノロジー スタックの選択、C4 図、展開トポロジ。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: 基盤とプラットフォームの概要'
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ アーキテクチャ — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: プラットフォーム アーキテクチャの概要 —</tspan>
      <tspan x="60" dy="42">マイクロサービス、イベント駆動型、DDD</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 基盤とプラットフォームの概要</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-architecture-philosophy"><strong>1. 建築哲学</strong></h2>

<p>エンタープライズAIチャットボットプラットフォームは、単に「OpenAI APIを呼び出して応答を返す」だけではありません。それは一つです <strong>分散システム</strong> リアルタイムの調整を必要とする多くのコンポーネントを含む複雑なシステム。 3 つのアーキテクチャ原則:</p>

<ul>
<li><strong>モジュール性</strong> — 各機能は独立した境界付きコンテキストであり、個別に置き換え/アップグレードできます。</li>
<li><strong>イベント駆動型</strong> — サービスはイベントを介して通信し、結合を軽減し、監査証跡をサポートします</li>
<li><strong>AIファースト</strong> — AI ワークロードのアーキテクチャの最適化: ストリーミング、長時間実行推論、GPU 対応スケーリング</li>
</ul>

<h2 id="2-bounded-contexts"><strong>2. 境界付きコンテキスト — AI チャットボットの DDD</strong></h2>

<p>ドメイン駆動設計を適用してプラットフォームを分割します。 <strong>8 つの境界付きコンテキスト</strong>:</p>

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

<h2 id="3-context-map"><strong>3. コンテキスト マップ — サービス インタラクション</strong></h2>

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

<h2 id="4-high-level-architecture"><strong>4. 高レベルのアーキテクチャ — C4 レベル 1 (システム コンテキスト)</strong></h2>

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

<h2 id="5-c4-level2"><strong>5. C4 レベル 2 — コンテナ図</strong></h2>

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

<h2 id="6-event-driven"><strong>6. イベント駆動型アーキテクチャ</strong></h2>

<p>AI チャットボットになぜイベント駆動型なのか?</p>

<ul>
<li><strong>監査証跡</strong> — すべての会話イベントがログに記録され、コンプライアンスにとって重要です</li>
<li><strong>非同期処理</strong> — ナレッジの取り込み、分析、請求は非同期で実行されます</li>
<li><strong>デカップリング</strong> — AI エンジンは請求について知る必要はありません。トークン使用状況イベントのみを発行する</li>
<li><strong>リプレイ</strong> — イベントを再生して会話フローをデバッグし、モデルを再トレーニングします</li>
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

<h2 id="7-request-flow"><strong>7. リクエスト フロー — ユーザー メッセージから応答まで</strong></h2>

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

<h2 id="8-data-model"><strong>8. コアデータモデル</strong></h2>

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

<h2 id="9-deployment"><strong>9. 導入トポロジ</strong></h2>

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

<h2 id="10-api-design"><strong>10. API 設計原則</strong></h2>

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

<h2 id="tong-ket"><strong>レッスン 2 のまとめ</strong></h2>

<ul>
<li><strong>8 つの境界付きコンテキスト</strong>: 会話、ナレッジ、エージェント、チャネル、AI エンジン、ガードレール、分析、請求</li>
<li><strong>イベント駆動型</strong> 監査証跡 + 非同期処理 + デカップリングのための Kafka を使用したアーキテクチャ</li>
<li>リクエストのフロースルー <strong>7段階</strong>: チャネル → 入力ガード → コンテキスト ビルド → RAG + メモリ → プロンプト → LLM → 出力ガード</li>
<li>それぞれのサービスは、 <strong>独立して展開可能</strong> Kubernetes 上で</li>
<li>コアエンティティ: テナント → 会話 → メッセージ → 引用</li>
</ul>

<p><strong>次の記事:</strong> マルチモデル ゲートウェイ — OpenAI/Claude/Gemini/セルフホスト モデル間でリクエストをルーティングする方法、フォールバック チェーン、コストの最適化、トークンの予算管理。</p>
