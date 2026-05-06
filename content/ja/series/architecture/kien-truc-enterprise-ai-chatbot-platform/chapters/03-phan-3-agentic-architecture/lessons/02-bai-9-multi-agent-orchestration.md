---
id: 019f0b20-b302-7001-e001-f2b8f9000302
title: 'レッスン 9: マルチエージェント オーケストレーション — スーパーバイザー、ルーティング、およびハンドオフ プロトコル'
slug: bai-9-multi-agent-orchestration
description: >-
  エージェント ルーティング、スーパーバイザ パターン、エージェント ハンドオフ
  プロトコル、共有メモリ、エージェントの特化、会話の分岐、エージェントの同時実行。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 3: エージェントのアーキテクチャ'
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9912" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9912)"/>

  <!-- Decorations -->
  <g>
    <circle cx="678" cy="124" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="756" cy="242" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="834" cy="100" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="912" cy="218" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="990" cy="76" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="244" x2="1100" y2="324" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="274" x2="1050" y2="344" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1077.7749907475932,224.5 1077.7749907475932,263.5 1044,283 1010.2250092524068,263.5 1010.2250092524068,224.5 1044,205" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ アーキテクチャ — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: マルチエージェント オーケストレーション —</tspan>
      <tspan x="60" dy="42">スーパーバイザ、ルーティングおよびハンドオフ プロトコル</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: エージェントのアーキテクチャ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-multi-agent-overview"><strong>1. なぜマルチエージェントなのか? — 単一エージェントの制限</strong></h2>

<p>1 人のエージェントが 50 以上のツールを使用すると、次の問題が発生します。 <strong>ツールの混乱</strong> (間違ったツールを選択してください)、 <strong>コンテキストのオーバーロード</strong> (システムプロンプトが長すぎます)、および <strong>専門性が低い</strong>。マルチエージェントは専門化されたエージェントに分割され、各エージェントは 1 つのドメインのみを処理します。</p>

<pre><code class="language-text">
┌──────────────────── MULTI-AGENT ARCHITECTURE ────────────────────┐
│                                                                   │
│  User Message                                                     │
│       │                                                           │
│       ▼                                                           │
│  ┌──────────────┐                                                 │
│  │  Supervisor   │  (Router + Orchestrator)                       │
│  │  Agent        │                                                │
│  └──┬───┬───┬───┘                                                 │
│     │   │   │                                                     │
│     ▼   ▼   ▼                                                     │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                        │
│  │Order│ │ FAQ │ │ HR  │ │ IT  │ │Sales│  Specialist Agents      │
│  │Agent│ │Agent│ │Agent│ │Agent│ │Agent│                          │
│  └──┬──┘ └──┬──┘ └──┬──┘ └──┬──┘ └──┬──┘                        │
│     │       │       │       │       │                             │
│     └───────┴───────┴───────┴───────┘                             │
│                     │                                             │
│              ┌──────▼──────┐                                      │
│              │ Shared State│ (Memory, Context, Conversation)      │
│              └─────────────┘                                      │
└───────────────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-agent-definition"><strong>2. エージェントの定義と専門化</strong></h2>

<pre><code class="language-typescript">
interface AgentDefinition {
  id: string;
  name: string;
  description: string;          // For supervisor's routing decision
  systemPrompt: string;
  tools: string[];              // Tool names this agent can use
  capabilities: string[];       // What this agent can do (for routing)
  escalationRules: EscalationRule[];
  modelConfig: {
    model: string;              // GPT-4o, Claude 3.5, etc.
    temperature: number;
    maxTokens: number;
  };
}

const AGENTS: AgentDefinition[] = [
  {
    id: 'order-agent',
    name: 'Order Management Agent',
    description: 'Handles order inquiries: status, tracking, cancellation, returns',
    systemPrompt: `You are an order management specialist. Help customers with:
- Checking order status and tracking
- Processing cancellations and returns
- Updating shipping addresses
Always verify the order ID before taking any action.`,
    tools: ['get_order_status', 'cancel_order', 'create_return', 'update_shipping'],
    capabilities: ['order_status', 'order_cancel', 'order_return', 'shipping_update'],
    escalationRules: [
      { condition: 'refund_amount > 1000000', action: 'escalate_to_human' },
      { condition: 'customer_sentiment < -0.5', action: 'escalate_to_human' },
    ],
    modelConfig: { model: 'gpt-4o-mini', temperature: 0.3, maxTokens: 1024 },
  },
  {
    id: 'knowledge-agent',
    name: 'Knowledge Base Agent',
    description: 'Answers questions from company documentation, policies, and FAQs',
    systemPrompt: `You are a knowledge base specialist. Answer questions using RAG-retrieved documents.
Always cite sources. If unsure, say you don't know.`,
    tools: ['search_knowledge_base', 'get_document'],
    capabilities: ['faq', 'policy_inquiry', 'documentation', 'how_to'],
    escalationRules: [
      { condition: 'no_relevant_documents', action: 'transfer_to_human' },
    ],
    modelConfig: { model: 'gpt-4o', temperature: 0.2, maxTokens: 2048 },
  },
  {
    id: 'sales-agent',
    name: 'Sales Assistant Agent',
    description: 'Helps with product recommendations, pricing, and promotions',
    systemPrompt: `You are a sales assistant. Help customers find the right products.
Recommend based on their needs. Mention active promotions when relevant.`,
    tools: ['search_products', 'get_promotions', 'calculate_quote', 'create_cart'],
    capabilities: ['product_recommendation', 'pricing', 'promotion', 'quote'],
    escalationRules: [
      { condition: 'deal_value > 50000000', action: 'transfer_to_sales_rep' },
    ],
    modelConfig: { model: 'gpt-4o', temperature: 0.5, maxTokens: 1536 },
  },
];
</code></pre>

<h2 id="3-supervisor-pattern"><strong>3. スーパーバイザ パターン — インテリジェント ルーティング</strong></h2>

<pre><code class="language-typescript">
class SupervisorAgent {
  private routerPrompt = `
You are a routing supervisor. Analyze the user's message and determine which specialist agent should handle it.

Available agents:
{{#each agents}}
- **{{this.name}}** ({{this.id}}): {{this.description}}
  Capabilities: {{this.capabilities}}
{{/each}}

Rules:
1. Route to the most relevant agent based on user intent
2. If unclear, ask a clarifying question (respond with agent_id: "clarify")
3. If it's a greeting or general chat, handle it yourself (agent_id: "self")
4. You can route to multiple agents if the query spans multiple domains

Respond with JSON:
{
  "reasoning": "brief explanation",
  "agent_id": "selected-agent-id",
  "confidence": 0.0-1.0
}`;

  async route(
    message: string,
    conversationHistory: Message[],
    agents: AgentDefinition[],
  ): Promise&lt;RoutingDecision&gt; {
    const response = await this.llm.chat({
      messages: [
        { role: 'system', content: this.buildRouterPrompt(agents) },
        ...conversationHistory.slice(-3), // Last 3 messages for context
        { role: 'user', content: message },
      ],
      response_format: { type: 'json_object' },
      model: 'gpt-4o-mini', // Fast, cheap for routing
      temperature: 0,
    });

    const decision = JSON.parse(response.content);

    // Low confidence → use classifier fallback
    if (decision.confidence &lt; 0.6) {
      return this.classifierFallback(message, agents);
    }

    return decision;
  }

  private async classifierFallback(
    message: string,
    agents: AgentDefinition[],
  ): Promise&lt;RoutingDecision&gt; {
    // Embedding-based classification
    const messageEmbedding = await this.embedder.embed(message);

    let bestMatch = { agentId: 'self', score: 0 };
    for (const agent of agents) {
      const agentEmbedding = await this.embedder.embed(
        `${agent.description} ${agent.capabilities.join(' ')}`,
      );
      const similarity = this.cosineSimilarity(messageEmbedding, agentEmbedding);
      if (similarity &gt; bestMatch.score) {
        bestMatch = { agentId: agent.id, score: similarity };
      }
    }

    return {
      reasoning: 'Fallback: embedding similarity routing',
      agent_id: bestMatch.agentId,
      confidence: bestMatch.score,
    };
  }
}
</code></pre>

<h2 id="4-handoff-protocol"><strong>4. エージェントハンドオフプロトコル</strong></h2>

<pre><code class="language-typescript">
interface HandoffContext {
  fromAgentId: string;
  toAgentId: string;
  reason: string;
  summary: string;         // Summary of what happened so far
  pendingActions: string[]; // What the new agent should do
  metadata: Record&lt;string, unknown&gt;; // Additional context
}

class AgentHandoffManager {
  async handoff(context: HandoffContext, conversation: Conversation): Promise&lt;void&gt; {
    // 1. Generate summary from departing agent
    const summary = await this.generateHandoffSummary(
      context.fromAgentId,
      conversation,
    );

    // 2. Create handoff message (visible to new agent, not to user)
    const handoffMessage: Message = {
      role: 'system',
      content: `
[AGENT HANDOFF]
Previous agent: ${context.fromAgentId}
Reason: ${context.reason}
Summary: ${summary}
Pending actions: ${context.pendingActions.join(', ')}
Continue helping the user from where the previous agent left off.
Do NOT repeat information already provided.`,
      metadata: { isHandoff: true, fromAgent: context.fromAgentId },
    };

    // 3. Update conversation state
    await this.conversationService.addSystemMessage(
      conversation.id,
      handoffMessage,
    );
    await this.conversationService.setActiveAgent(
      conversation.id,
      context.toAgentId,
    );

    // 4. Emit event
    await this.eventBus.publish('agent.handoff', {
      conversationId: conversation.id,
      from: context.fromAgentId,
      to: context.toAgentId,
      reason: context.reason,
    });
  }

  private async generateHandoffSummary(
    agentId: string,
    conversation: Conversation,
  ): Promise&lt;string&gt; {
    const recentMessages = conversation.messages.slice(-10);

    const response = await this.llm.chat({
      messages: [
        {
          role: 'system',
          content: 'Summarize this conversation concisely for handoff to another agent. Include: user intent, actions taken, pending issues.',
        },
        ...recentMessages,
      ],
      model: 'gpt-4o-mini',
      maxTokens: 256,
    });

    return response.content;
  }
}
</code></pre>

<h2 id="5-orchestrator"><strong>5. Agent Orchestrator — すべてをまとめる</strong></h2>

<pre><code class="language-typescript">
class AgentOrchestrator {
  constructor(
    private supervisor: SupervisorAgent,
    private agentRegistry: Map&lt;string, AgentDefinition&gt;,
    private handoffManager: AgentHandoffManager,
    private toolExecutor: ToolChainExecutor,
  ) {}

  async processMessage(
    conversationId: string,
    message: string,
  ): Promise&lt;AsyncIterable&lt;StreamChunk&gt;&gt; {
    const conversation = await this.conversationService.get(conversationId);

    // 1. Check if there's an active specialist agent
    let activeAgentId = conversation.activeAgentId;

    if (!activeAgentId) {
      // 2. Route via supervisor
      const routing = await this.supervisor.route(
        message,
        conversation.messages,
        Array.from(this.agentRegistry.values()),
      );

      if (routing.agent_id === 'self') {
        // Supervisor handles directly (greetings, general chat)
        return this.streamSupervisorResponse(conversation, message);
      }

      if (routing.agent_id === 'clarify') {
        return this.streamClarificationQuestion(conversation, message);
      }

      activeAgentId = routing.agent_id;
      await this.conversationService.setActiveAgent(conversationId, activeAgentId);
    }

    // 3. Execute with specialist agent
    const agent = this.agentRegistry.get(activeAgentId)!;
    const tools = this.toolRegistry.getToolsForAgent(agent);

    // 4. Build messages with agent's system prompt
    const messages: LLMMessage[] = [
      { role: 'system', content: agent.systemPrompt },
      ...conversation.messages.slice(-20), // Recent context
      { role: 'user', content: message },
    ];

    // 5. Run tool chain
    const result = await this.toolExecutor.executeChain(messages, tools, {
      tenantId: conversation.tenantId,
      userId: conversation.userId,
      userPermissions: conversation.userPermissions,
    });

    // 6. Check for escalation
    if (this.shouldEscalate(result, agent)) {
      return this.handleEscalation(conversation, agent, result);
    }

    // 7. Check for handoff
    if (this.shouldHandoff(result, message)) {
      const newRouting = await this.supervisor.route(message, conversation.messages,
        Array.from(this.agentRegistry.values()));
      await this.handoffManager.handoff({
        fromAgentId: activeAgentId,
        toAgentId: newRouting.agent_id,
        reason: 'Topic changed',
        summary: '',
        pendingActions: [],
        metadata: {},
      }, conversation);

      return this.processMessage(conversationId, message); // Re-process with new agent
    }

    return this.streamResponse(result.finalResponse!);
  }

  private shouldHandoff(result: ChainResult, message: string): boolean {
    // Detect topic change patterns
    const topicChangeKeywords = [
      'khác', 'chuyển sang', 'câu hỏi khác',
      'another question', 'different topic',
    ];
    return topicChangeKeywords.some(kw =&gt;
      message.toLowerCase().includes(kw),
    );
  }
}
</code></pre>

<h2 id="6-shared-memory"><strong>6. エージェント間の共有メモリ</strong></h2>

<pre><code class="language-typescript">
class AgentSharedMemory {
  // Agents can read/write to shared conversation context
  async getSharedContext(conversationId: string): Promise&lt;SharedContext&gt; {
    const data = await this.redis.hgetall(`shared:${conversationId}`);
    return {
      customerInfo: data.customerInfo ? JSON.parse(data.customerInfo) : null,
      identifiedIntents: data.intents ? JSON.parse(data.intents) : [],
      collectedData: data.collected ? JSON.parse(data.collected) : {},
      agentNotes: data.notes ? JSON.parse(data.notes) : [],
    };
  }

  async updateSharedContext(
    conversationId: string,
    agentId: string,
    updates: Partial&lt;SharedContext&gt;,
  ): Promise&lt;void&gt; {
    const pipeline = this.redis.pipeline();

    if (updates.customerInfo) {
      pipeline.hset(`shared:${conversationId}`, 'customerInfo',
        JSON.stringify(updates.customerInfo));
    }

    if (updates.collectedData) {
      // Merge, don't overwrite
      const existing = await this.redis.hget(`shared:${conversationId}`, 'collected');
      const merged = { ...JSON.parse(existing ?? '{}'), ...updates.collectedData };
      pipeline.hset(`shared:${conversationId}`, 'collected', JSON.stringify(merged));
    }

    if (updates.agentNotes?.length) {
      const note = {
        agentId,
        notes: updates.agentNotes,
        timestamp: Date.now(),
      };
      pipeline.rpush(`shared:${conversationId}:notes`, JSON.stringify(note));
    }

    pipeline.expire(`shared:${conversationId}`, 86400); // 24h TTL
    await pipeline.exec();
  }
}
</code></pre>

<h2 id="tong-ket"><strong>レッスン 9 のまとめ</strong></h2>

<ul>
<li><strong>マルチエージェント</strong>: チャットボットを専門のエージェントに分割し、各エージェントが独自のツールとプロンプトを備えています。</li>
<li><strong>スーパーバイザパターン</strong>: LLM ベースのルーターがどのエージェントを処理するかを決定し、類似性を埋め込むことにフォールバックします</li>
<li><strong>ハンドオフプロトコル</strong>: 概要 + システム メッセージを介してエージェント間でコンテキストを転送します。</li>
<li><strong>共有メモリ</strong>: Redis ベースの共有コンテキスト (顧客情報、収集されたデータ、エージェントのメモ)</li>
<li><strong>トピック変更の検出</strong>: ユーザーがトピック→ハンドオフエージェントを変更したことを自動的に検出します</li>
</ul>

<p><strong>次の記事:</strong> 計画と振り返り — ReAct パターン、自己反省ループ、複雑なタスクの計画、実行、レビューのサイクル。</p>
