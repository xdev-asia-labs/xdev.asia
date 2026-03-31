---
id: 019f0b20-b201-7001-e001-f2b8f9000201
title: 'Bài 4: Conversation Management — Session, Context Window & Memory Architecture'
slug: bai-4-conversation-management
description: >-
  Conversation lifecycle, session management, context window optimization
  (sliding window, summarization, compression), short-term vs long-term memory,
  conversation state machine, multi-turn dialogue handling.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: Core Chatbot Engine"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<h2 id="1-conversation-lifecycle"><strong>1. Conversation Lifecycle</strong></h2>

<p>Mỗi conversation đi qua các trạng thái sau:</p>

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

<p>Thách thức lớn nhất: LLM có giới hạn context window (128K tokens cho GPT-4o). Conversation dài + RAG results + system prompt có thể <strong>vượt context limit</strong>.</p>

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
<p>Giữ N messages gần nhất. Đơn giản nhưng mất context cũ.</p>

<h3>Strategy 2: Summarization</h3>
<p>Tóm tắt conversation cũ thành summary, chèn vào context.</p>

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
<p>Giữ messages có relevance cao với query hiện tại, remove irrelevant turns.</p>

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

<h2 id="tong-ket"><strong>Tổng kết Bài 4</strong></h2>

<ul>
<li>Conversation lifecycle: <strong>idle → active → processing → waiting → resolved/escalated</strong></li>
<li>Context window budget: system prompt + memory + RAG + messages + reserved = total tokens</li>
<li>3 strategies cho context management: <strong>Sliding Window</strong> (simple), <strong>Summarization</strong> (balanced), <strong>Semantic Compression</strong> (smart)</li>
<li>Memory = <strong>Short-term</strong> (Redis, per-conversation) + <strong>Long-term</strong> (PostgreSQL + Vector DB, per-user)</li>
<li>Auto-extract memorable info từ conversations cho personalization</li>
</ul>

<p><strong>Bài tiếp theo:</strong> RAG Pipeline — document ingestion, chunking strategies, hybrid search, re-ranking, và citation generation.</p>
