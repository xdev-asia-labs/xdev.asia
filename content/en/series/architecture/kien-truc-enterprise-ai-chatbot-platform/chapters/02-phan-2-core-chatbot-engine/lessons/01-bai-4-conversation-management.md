---
id: 019f0b20-b201-7001-e001-f2b8f9000201
title: >-
  Lesson 4: Conversation Management — Session, Context Window & Memory
  Architecture
slug: bai-4-conversation-management
description: >-
  Conversation lifecycle, session management, context window optimization
  (sliding window, summarization, compression), short-term vs long-term memory,
  conversation state machine, multi-turn dialogue handling.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: 'Part 2: Core Chatbot Engine'
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Enterprise AI Chatbot Platform Architecture — From Prototype to Production
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5540" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5540)"/>

  <!-- Decorations -->
  <g>
    <circle cx="791" cy="63" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="982" cy="74" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="673" cy="85" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="864" cy="96" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="1055" cy="107" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="193" x2="1100" y2="273" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="223" x2="1050" y2="293" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1067.2487113059642,229 1067.2487113059642,257 1043,271 1018.7512886940357,257 1018.7512886940357,229 1043,215" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ Architecture — Lesson 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: Conversation Management — Session,</tspan>
      <tspan x="60" dy="42">Context Window & Memory Architecture</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Enterprise AI Chatbot Platform Architecture — From Prototype to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Core Chatbot Engine</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-conversation-lifecycle"><strong>1. Conversation Lifecycle</strong></h2>

<p>Each conversation goes through the following states:</p>

<pre><code class="language-text">
  ┌──────┐   user message   ┌────────┐   AI response   ┌──────────┐
  │ IDLE │──────────────────▶│ ACTIVE │────────────────▶│ WAITING  │
  └──────┘                   └───┬────┘                 └────┬─────┘
                                 │                           │
                            tool call                   user replies
                                 │                           │
                            ┌────▼─────┐                     │
                            │PROCESSING│─────────────────────┘
                            └────┬─────┘
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
              ┌─────▼────┐ ┌────▼─────┐ ┌───▼──────┐
              │ ESCALATED│ │ RESOLVED │ │ TIMED_OUT│
              │(→ human) │ │  (done)  │ │ (30 min) │
              └──────────┘ └──────────┘ └──────────┘
</code></pre>

<pre><code class="language-typescript">
type ConversationStatus =
  | 'idle'
  | 'active'
  | 'waiting_user'
  | 'processing'
  | 'escalated'
  | 'resolved'
  | 'timed_out';

interface ConversationManager {
  startConversation(params: StartParams): Promise&lt;Conversation&gt;;
  sendMessage(conversationId: string, message: UserMessage): Promise&lt;AssistantMessage&gt;;
  getHistory(conversationId: string, limit?: number): Promise&lt;Message[]&gt;;
  escalate(conversationId: string, reason: string): Promise&lt;void&gt;;
  close(conversationId: string): Promise&lt;void&gt;;
}

class ConversationService implements ConversationManager {
  constructor(
    private db: Database,
    private redis: Redis,
    private aiEngine: AIEngine,
    private memoryService: MemoryService,
    private eventBus: EventBus,
  ) {}

  async sendMessage(conversationId: string, userMessage: UserMessage): Promise&lt;AssistantMessage&gt; {
    const conversation = await this.db.conversation.findById(conversationId);
    if (!conversation) throw new NotFoundError('Conversation not found');

    // 1. Persist user message
    const savedMessage = await this.db.message.create({
      conversationId,
      role: 'user',
      content: userMessage.content,
      createdAt: new Date(),
    });

    // 2. Build context (messages + memory + knowledge)
    const context = await this.buildContext(conversation, savedMessage);

    // 3. Generate response via AI Engine
    const response = await this.aiEngine.generate(context);

    // 4. Persist assistant message
    const assistantMessage = await this.db.message.create({
      conversationId,
      role: 'assistant',
      content: response.content,
      metadata: {
        model: response.model,
        tokensUsed: response.usage,
        latencyMs: response.latencyMs,
        sources: response.citations,
      },
      createdAt: new Date(),
    });

    // 5. Update conversation state
    await this.db.conversation.update(conversationId, {
      status: 'waiting_user',
      lastMessageAt: new Date(),
    });

    // 6. Update memory
    await this.memoryService.updateFromMessage(conversation, savedMessage, assistantMessage);

    // 7. Emit events
    await this.eventBus.publish('conversation', {
      type: 'message.received',
      payload: { sessionId: conversationId, content: userMessage.content, role: 'user' },
    });

    return assistantMessage;
  }
}
</code></pre>

<h2 id="2-context-window"><strong>2. Context Window Management</strong></h2>

<p>Biggest challenge: LLM has a limited context window (128K tokens for GPT-4o). Long conversation + RAG results + possible system prompt <strong>exceed context limit</strong>.</p>

<pre><code class="language-text">
┌──────────────────────── Context Window Budget ──────────────────────┐
│                                                                      │
│  ┌──────────┐ ┌────────────┐ ┌──────────┐ ┌────────┐ ┌──────────┐  │
│  │  System   │ │  Memory    │ │   RAG    │ │Messages│ │ Reserved │  │
│  │  Prompt   │ │  Summary   │ │ Results  │ │History │ │(response)│  │
│  │           │ │            │ │          │ │        │ │          │  │
│  │ ~500 tok  │ │ ~500 tok   │ │~2000 tok │ │ flex   │ │ 4096 tok │  │
│  └──────────┘ └────────────┘ └──────────┘ └────────┘ └──────────┘  │
│                                                                      │
│  Total Budget = model.maxContextTokens - reservedForResponse         │
│  Messages Budget = Total - systemPrompt - memory - ragResults        │
└──────────────────────────────────────────────────────────────────────┘
</code></pre>

<pre><code class="language-typescript">
interface ContextBudget {
  totalTokens: number;          // Model's max context (e.g., 128000)
  reservedForResponse: number;  // Max output tokens (e.g., 4096)
  systemPromptTokens: number;   // ~500
  memoryTokens: number;         // ~500
  ragTokens: number;            // ~2000
  availableForMessages: number; // Calculated remaining
}

class ContextBuilder {
  constructor(
    private tokenCounter: TokenCounter,
    private memoryService: MemoryService,
    private ragPipeline: RAGPipeline,
  ) {}

  async buildContext(
    conversation: Conversation,
    currentMessage: Message,
    config: ContextConfig,
  ): Promise&lt;BuiltContext&gt; {
    const budget: ContextBudget = {
      totalTokens: config.modelMaxTokens,
      reservedForResponse: config.maxResponseTokens,
      systemPromptTokens: 0,
      memoryTokens: 0,
      ragTokens: 0,
      availableForMessages: 0,
    };

    // 1. System prompt (always included)
    const systemPrompt = config.systemPrompt;
    budget.systemPromptTokens = await this.tokenCounter.count(systemPrompt);

    // 2. Memory summary
    const memory = await this.memoryService.getSummary(conversation.id);
    budget.memoryTokens = await this.tokenCounter.count(memory);

    // 3. RAG results
    const ragResults = await this.ragPipeline.search(
      currentMessage.content,
      { tenantId: conversation.tenantId, topK: 5 },
    );
    const ragContent = this.formatRAGResults(ragResults);
    budget.ragTokens = await this.tokenCounter.count(ragContent);

    // 4. Calculate remaining budget for messages
    budget.availableForMessages =
      budget.totalTokens -
      budget.reservedForResponse -
      budget.systemPromptTokens -
      budget.memoryTokens -
      budget.ragTokens;

    // 5. Select messages within budget
    const messages = await this.selectMessages(
      conversation.id,
      budget.availableForMessages,
    );

    return {
      systemPrompt,
      memory,
      ragResults: ragContent,
      messages: [...messages, currentMessage],
      budget,
    };
  }

  private async selectMessages(
    conversationId: string,
    tokenBudget: number,
  ): Promise&lt;Message[]&gt; {
    // Strategy: Keep recent messages, summarize older ones
    const allMessages = await this.db.message.findByConversation(conversationId, {
      orderBy: 'createdAt',
      order: 'desc',
    });

    const selected: Message[] = [];
    let usedTokens = 0;

    for (const msg of allMessages) {
      const msgTokens = await this.tokenCounter.count(msg.content);
      if (usedTokens + msgTokens > tokenBudget) break;
      selected.unshift(msg);
      usedTokens += msgTokens;
    }

    return selected;
  }
}
</code></pre>

<h2 id="3-context-strategies"><strong>3. Context Window Strategies</strong></h2>

<h3>Strategy 1: Sliding Window</h3>
<p>Keep the N most recent messages. Simple but loses old context.</p>

<h3>Strategy 2: Summarization</h3>
<p>Summarize the old conversation into summary, insert into context.</p>

<pre><code class="language-typescript">
class ConversationSummarizer {
  constructor(private llm: LLMProvider) {}

  async summarize(messages: Message[]): Promise&lt;string&gt; {
    const response = await this.llm.chat({
      model: 'gpt-4o-mini', // Cheap model for summarization
      messages: [
        {
          role: 'system',
          content: `Summarize the following conversation concisely in Vietnamese.
Focus on: key topics discussed, decisions made, pending questions, user preferences.
Keep under 200 words.`,
        },
        {
          role: 'user',
          content: messages.map(m =&gt; `${m.role}: ${m.content}`).join('\n'),
        },
      ],
      maxTokens: 300,
      temperature: 0.3,
    });

    return response.content;
  }

  // Auto-summarize when conversation gets too long
  async autoSummarize(
    conversationId: string,
    threshold: number = 20,
  ): Promise&lt;void&gt; {
    const messages = await this.db.message.findByConversation(conversationId);

    if (messages.length &lt; threshold) return;

    // Summarize older messages (keep last 10)
    const toSummarize = messages.slice(0, -10);
    const summary = await this.summarize(toSummarize);

    await this.memoryService.updateConversationSummary(conversationId, summary);
  }
}
</code></pre>

<h3>Strategy 3: Semantic Compression</h3>
<p>Keep messages high in relevance to the current query, remove irrelevant turns.</p>

<pre><code class="language-typescript">
class SemanticCompressor {
  constructor(private embeddingService: EmbeddingService) {}

  async compress(
    messages: Message[],
    currentQuery: string,
    maxMessages: number,
  ): Promise&lt;Message[]&gt; {
    // Embed current query
    const queryEmbedding = await this.embeddingService.embed(currentQuery);

    // Score each message by relevance
    const scored = await Promise.all(
      messages.map(async (msg) =&gt; {
        const msgEmbedding = await this.embeddingService.embed(msg.content);
        const similarity = this.cosineSimilarity(queryEmbedding, msgEmbedding);
        return { message: msg, score: similarity };
      }),
    );

    // Always keep system messages and recent N messages
    const recent = messages.slice(-4);
    const older = scored
      .filter(s =&gt; !recent.includes(s.message))
      .sort((a, b) =&gt; b.score - a.score)
      .slice(0, maxMessages - recent.length)
      .map(s =&gt; s.message);

    // Merge and sort by timestamp
    return [...older, ...recent].sort(
      (a, b) =&gt; a.createdAt.getTime() - b.createdAt.getTime(),
    );
  }

  private cosineSimilarity(a: number[], b: number[]): number {
    let dot = 0, normA = 0, normB = 0;
    for (let i = 0; i &lt; a.length; i++) {
      dot += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }
    return dot / (Math.sqrt(normA) * Math.sqrt(normB));
  }
}
</code></pre>

<h2 id="4-memory-architecture"><strong>4. Memory Architecture — Short-term vs Long-term</strong></h2>

<pre><code class="language-text">
┌───────────────────────── MEMORY SYSTEM ─────────────────────────┐
│                                                                   │
│  ┌─────────────────── Short-term Memory ──────────────────────┐  │
│  │  • Message history (within conversation)                    │  │
│  │  • Working memory (current tool results, RAG results)       │  │
│  │  • Conversation summary (auto-generated)                    │  │
│  │  Storage: Redis (TTL: conversation duration)                │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─────────────────── Long-term Memory ───────────────────────┐  │
│  │  • User preferences (e.g., "prefers Vietnamese")            │  │
│  │  • Past conversation summaries                              │  │
│  │  • Learned facts about user (e.g., "works at company X")    │  │
│  │  • Important decisions/actions taken                        │  │
│  │  Storage: PostgreSQL + Vector DB (permanent)                │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
</code></pre>

<pre><code class="language-typescript">
interface MemoryService {
  // Short-term
  getConversationContext(conversationId: string): Promise&lt;ShortTermMemory&gt;;
  updateWorkingMemory(conversationId: string, data: unknown): Promise&lt;void&gt;;

  // Long-term
  getUserMemory(userId: string, query: string): Promise&lt;MemoryEntry[]&gt;;
  saveToLongTermMemory(userId: string, entry: MemoryEntry): Promise&lt;void&gt;;
  extractMemorableInfo(messages: Message[]): Promise&lt;MemoryEntry[]&gt;;
}

interface MemoryEntry {
  id: string;
  userId: string;
  type: 'preference' | 'fact' | 'decision' | 'summary';
  content: string;
  embedding: number[];
  confidence: number;
  source: { conversationId: string; messageId: string };
  createdAt: Date;
  lastAccessedAt: Date;
}

class MemoryServiceImpl implements MemoryService {
  async extractMemorableInfo(messages: Message[]): Promise&lt;MemoryEntry[]&gt; {
    const response = await this.llm.chat({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `Extract memorable information from this conversation.
Return JSON array with objects: { type, content, confidence }.
Types: "preference" (user likes/dislikes), "fact" (about user/company), "decision" (agreed actions).
Only extract high-confidence (>0.7) items. Be concise.`,
        },
        {
          role: 'user',
          content: messages.map(m =&gt; `${m.role}: ${m.content}`).join('\n'),
        },
      ],
      responseFormat: 'json',
    });

    return JSON.parse(response.content);
  }

  async getUserMemory(userId: string, query: string): Promise&lt;MemoryEntry[]&gt; {
    const queryEmbedding = await this.embeddingService.embed(query);

    // Search relevant memories by vector similarity
    const memories = await this.vectorDb.search({
      collection: 'user_memories',
      vector: queryEmbedding,
      filter: { userId },
      limit: 5,
      minScore: 0.7,
    });

    // Update last accessed (for memory decay)
    await Promise.all(
      memories.map(m =&gt;
        this.db.memory.update(m.id, { lastAccessedAt: new Date() }),
      ),
    );

    return memories;
  }
}
</code></pre>

<h2 id="5-session-management"><strong>5. Session Management</strong></h2>

<pre><code class="language-typescript">
class SessionManager {
  private readonly SESSION_TTL = 30 * 60; // 30 minutes

  constructor(private redis: Redis) {}

  async getOrCreateSession(
    tenantId: string,
    channelType: string,
    channelUserId: string,
  ): Promise&lt;Session&gt; {
    const sessionKey = `session:${tenantId}:${channelType}:${channelUserId}`;
    const existing = await this.redis.get(sessionKey);

    if (existing) {
      const session = JSON.parse(existing) as Session;
      // Extend TTL on activity
      await this.redis.expire(sessionKey, this.SESSION_TTL);
      return session;
    }

    // Create new session
    const session: Session = {
      id: crypto.randomUUID(),
      tenantId,
      channelType,
      channelUserId,
      conversationId: crypto.randomUUID(),
      startedAt: new Date().toISOString(),
      metadata: {},
    };

    await this.redis.set(sessionKey, JSON.stringify(session), 'EX', this.SESSION_TTL);
    return session;
  }

  async invalidateSession(sessionKey: string): Promise&lt;void&gt; {
    await this.redis.del(sessionKey);
  }
}
</code></pre>

<h2 id="tong-ket"><strong>Summary of Lesson 4</strong></h2>

<ul>
<li>Conversation lifecycle: <strong>idle → active → processing → waiting → resolved/escalated</strong></li>
<li>Context window budget: system prompt + memory + RAG + messages + reserved = total tokens</li>
<li>3 strategies for context management: <strong>Sliding Window</strong> (simple), <strong>Summary</strong> (balanced), <strong>Semantic Compression</strong> (smart)</li>
<li>Memory = <strong>Short term</strong> (Redis, per-conversation) + <strong>Long term</strong> (PostgreSQL + Vector DB, per-user)</li>
<li>Auto-extract memorable info from conversations for personalization</li>
</ul>

<p><strong>Next article:</strong> RAG Pipeline — document ingestion, chunking strategies, hybrid search, re-ranking, and citation generation.</p>
