---
id: 019f0b20-b102-7001-e001-f2b8f9000102
title: 'Bài 2: Platform Architecture Overview — Microservices, Event-Driven & DDD'
slug: bai-2-platform-architecture-overview
description: >-
  High-level system architecture, bounded contexts (Conversation, Knowledge,
  Agent, Channel, Analytics, Billing), event-driven architecture,
  technology stack selection, C4 diagrams, deployment topology.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Foundation & Platform Overview"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<h2 id="1-architecture-philosophy"><strong>1. Architecture Philosophy</strong></h2>

<p>Một enterprise AI chatbot platform không phải là "gọi API OpenAI rồi trả response". Nó là một <strong>distributed system</strong> phức tạp với nhiều thành phần cần phối hợp real-time. Ba nguyên tắc kiến trúc:</p>

<ul>
<li><strong>Modularity</strong> — Mỗi capability là một bounded context độc lập, có thể thay thế/upgrade riêng</li>
<li><strong>Event-Driven</strong> — Các service giao tiếp qua events, giảm coupling, hỗ trợ audit trail</li>
<li><strong>AI-First</strong> — Architecture optimize cho AI workloads: streaming, long-running inference, GPU-aware scaling</li>
</ul>

<h2 id="2-bounded-contexts"><strong>2. Bounded Contexts — DDD cho AI Chatbot</strong></h2>

<p>Áp dụng Domain-Driven Design để chia platform thành <strong>8 bounded contexts</strong>:</p>

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

<h2 id="3-context-map"><strong>3. Context Map — Service Interactions</strong></h2>

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

<h2 id="4-high-level-architecture"><strong>4. High-Level Architecture — C4 Level 1 (System Context)</strong></h2>

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

<h2 id="5-c4-level2"><strong>5. C4 Level 2 — Container Diagram</strong></h2>

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

<h2 id="6-event-driven"><strong>6. Event-Driven Architecture</strong></h2>

<p>Tại sao event-driven cho AI chatbot?</p>

<ul>
<li><strong>Audit Trail</strong> — Mọi conversation event được log, crucial cho compliance</li>
<li><strong>Async Processing</strong> — Knowledge ingestion, analytics, billing chạy async</li>
<li><strong>Decoupling</strong> — AI Engine không cần biết về Billing; chỉ emit token usage events</li>
<li><strong>Replay</strong> — Replay events để debug conversation flow, retrain models</li>
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

<h2 id="7-request-flow"><strong>7. Request Flow — Từ User Message đến Response</strong></h2>

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

<h2 id="8-data-model"><strong>8. Core Data Model</strong></h2>

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

<h2 id="9-deployment"><strong>9. Deployment Topology</strong></h2>

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

<h2 id="10-api-design"><strong>10. API Design Principles</strong></h2>

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

<h2 id="tong-ket"><strong>Tổng kết Bài 2</strong></h2>

<ul>
<li><strong>8 bounded contexts</strong>: Conversation, Knowledge, Agent, Channel, AI Engine, Guardrail, Analytics, Billing</li>
<li><strong>Event-driven</strong> architecture với Kafka cho audit trail + async processing + decoupling</li>
<li>Request flow qua <strong>7 stages</strong>: Channel → Input Guard → Context Build → RAG + Memory → Prompt → LLM → Output Guard</li>
<li>Mỗi service là <strong>independently deployable</strong> trên Kubernetes</li>
<li>Core entities: Tenant → Conversation → Message → Citation</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Multi-Model Gateway — cách route requests giữa OpenAI/Claude/Gemini/self-hosted models, fallback chain, cost optimization, và token budget management.</p>
