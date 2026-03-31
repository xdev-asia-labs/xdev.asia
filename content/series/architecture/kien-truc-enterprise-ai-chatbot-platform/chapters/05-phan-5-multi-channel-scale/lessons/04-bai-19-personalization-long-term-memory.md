---
id: 019f0b20-b504-7001-e001-f2b8f9000504
title: 'Bài 19: Personalization & Long-term Memory — User Profiling, Preference Learning & Memory Consolidation'
slug: bai-19-personalization-long-term-memory
description: >-
  User profiling, preference learning, contextual personalization, long-term
  memory architecture, memory consolidation, forgetting strategies, privacy-aware
  personalization.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 5: Multi-Channel & Scale"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<h2 id="1-memory-architecture"><strong>1. Long-term Memory Architecture</strong></h2>

<p>Con người nhớ context qua nhiều lần conversation — chatbot cũng cần. Long-term memory giúp chatbot <strong>nhớ preferences, history, relationships</strong> của user qua các sessions.</p>

<pre><code class="language-text">
┌──────────── MEMORY ARCHITECTURE ──────────────────────┐
│                                                        │
│  ┌────────────────────────────────────────────────┐    │
│  │               SHORT-TERM MEMORY                │    │
│  │  (Current conversation — Redis, max 20 turns)  │    │
│  └────────────────────┬───────────────────────────┘    │
│                       │ consolidate                    │
│  ┌────────────────────▼───────────────────────────┐    │
│  │              WORKING MEMORY                    │    │
│  │  (Session buffer — entity extraction,          │    │
│  │   preference tracking, intent patterns)        │    │
│  └────────────────────┬───────────────────────────┘    │
│                       │ persist                        │
│  ┌────────────────────▼───────────────────────────┐    │
│  │              LONG-TERM MEMORY                  │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────────┐   │    │
│  │  │Episodic  │ │Semantic  │ │ Procedural   │   │    │
│  │  │(Events)  │ │(Facts)   │ │(Preferences) │   │    │
│  │  └──────────┘ └──────────┘ └──────────────┘   │    │
│  │  PostgreSQL + pgvector                        │    │
│  └────────────────────────────────────────────────┘    │
└────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-memory-types"><strong>2. Memory Types & Storage</strong></h2>

<pre><code class="language-typescript">
interface MemoryEntry {
  id: string;
  userId: string;
  tenantId: string;
  type: 'episodic' | 'semantic' | 'procedural';
  content: string;
  embedding: number[];
  importance: number;        // 0.0 - 1.0
  accessCount: number;       // How many times retrieved
  lastAccessed: Date;
  createdAt: Date;
  expiresAt?: Date;          // Optional TTL
  source: {
    conversationId: string;
    messageIndex: number;
  };
  metadata: Record&lt;string, unknown&gt;;
}

// Episodic: specific events/interactions
// "Đã hỏi về đơn hàng ORD-12345 ngày 15/01, đơn bị delay"
// "Đã được hướng dẫn đổi mật khẩu thành công"

// Semantic: facts about the user
// "Tên: Nguyễn Văn A"
// "Thường mua sản phẩm category 'điện tử'"
// "Sử dụng tiếng Việt, thỉnh thoảng mix English"

// Procedural: preferences & patterns
// "Thích response ngắn gọn, không dài dòng"
// "Hay hỏi vào buổi tối (20h-22h)"
// "Muốn nhận thông báo qua Zalo, không email"
</code></pre>

<h2 id="3-memory-extraction"><strong>3. Memory Extraction — Learning from Conversations</strong></h2>

<pre><code class="language-typescript">
class MemoryExtractor {
  async extractMemories(
    conversation: CompletedConversation,
  ): Promise&lt;MemoryEntry[]&gt; {
    const memories: MemoryEntry[] = [];

    // 1. Extract via LLM
    const response = await this.llm.chat({
      messages: [{
        role: 'system',
        content: `Extract memorable information from this conversation.

For each memory, classify:
- type: episodic (events), semantic (facts about user), procedural (preferences)
- importance: 0.0-1.0 (how important to remember)
- content: concise statement

ONLY extract information that would be useful in future conversations.
Do NOT extract: generic greetings, system messages, or trivial details.

Output JSON: {"memories": [{"type": "...", "importance": 0.X, "content": "..."}]}`,
      }, {
        role: 'user',
        content: JSON.stringify(conversation.messages),
      }],
      response_format: { type: 'json_object' },
      model: 'gpt-4o-mini',
    });

    const extracted = JSON.parse(response.content);

    for (const mem of extracted.memories) {
      // Skip low-importance memories
      if (mem.importance &lt; 0.3) continue;

      // Check for duplicate/conflicting memories
      const existing = await this.findSimilarMemories(
        conversation.userId,
        mem.content,
      );

      if (existing.length &gt; 0 &amp;&amp; existing[0].similarity &gt; 0.9) {
        // Update existing memory instead of creating duplicate
        await this.updateMemory(existing[0].id, {
          accessCount: existing[0].accessCount + 1,
          lastAccessed: new Date(),
        });
        continue;
      }

      // Handle contradictions
      if (existing.length &gt; 0 &amp;&amp; existing[0].similarity &gt; 0.7) {
        const isContradiction = await this.checkContradiction(
          existing[0].content,
          mem.content,
        );
        if (isContradiction) {
          // Newer info takes precedence — archive old
          await this.archiveMemory(existing[0].id, 'superseded');
        }
      }

      const embedding = await this.embedder.embed(mem.content);
      memories.push({
        id: crypto.randomUUID(),
        userId: conversation.userId,
        tenantId: conversation.tenantId,
        type: mem.type,
        content: mem.content,
        embedding,
        importance: mem.importance,
        accessCount: 0,
        lastAccessed: new Date(),
        createdAt: new Date(),
        source: {
          conversationId: conversation.id,
          messageIndex: 0,
        },
        metadata: {},
      });
    }

    return memories;
  }
}
</code></pre>

<h2 id="4-memory-retrieval"><strong>4. Context-Aware Memory Retrieval</strong></h2>

<pre><code class="language-typescript">
class MemoryRetriever {
  async getRelevantMemories(
    userId: string,
    tenantId: string,
    currentMessage: string,
    maxMemories: number = 5,
  ): Promise&lt;MemoryEntry[]&gt; {
    const queryEmbedding = await this.embedder.embed(currentMessage);

    // Hybrid retrieval: semantic similarity + recency + importance
    const candidates = await this.vectorStore.search({
      vector: queryEmbedding,
      filter: { userId, tenantId },
      topK: maxMemories * 3, // Over-fetch for re-ranking
    });

    // Re-rank with combined scoring
    const scored = candidates.map(candidate =&gt; {
      const memory = candidate.metadata as MemoryEntry;
      const semanticScore = candidate.score;
      const recencyScore = this.recencyDecay(memory.lastAccessed);
      const importanceScore = memory.importance;
      const accessScore = Math.min(memory.accessCount / 10, 1.0);

      const combined = (
        semanticScore * 0.4 +
        recencyScore * 0.2 +
        importanceScore * 0.3 +
        accessScore * 0.1
      );

      return { memory, score: combined };
    });

    // Return top-K
    const topMemories = scored
      .sort((a, b) =&gt; b.score - a.score)
      .slice(0, maxMemories)
      .map(s =&gt; s.memory);

    // Update access counts
    await Promise.all(
      topMemories.map(m =&gt;
        this.updateMemory(m.id, {
          accessCount: m.accessCount + 1,
          lastAccessed: new Date(),
        }),
      ),
    );

    return topMemories;
  }

  private recencyDecay(lastAccessed: Date): number {
    const daysSince = (Date.now() - lastAccessed.getTime()) / (24 * 3600 * 1000);
    return Math.exp(-daysSince / 30); // Half-life: ~21 days
  }

  // Format memories for system prompt injection
  formatForPrompt(memories: MemoryEntry[]): string {
    if (memories.length === 0) return '';

    const grouped = {
      semantic: memories.filter(m =&gt; m.type === 'semantic'),
      episodic: memories.filter(m =&gt; m.type === 'episodic'),
      procedural: memories.filter(m =&gt; m.type === 'procedural'),
    };

    let prompt = '## What you remember about this user:\n';

    if (grouped.semantic.length) {
      prompt += '\nFacts:\n';
      grouped.semantic.forEach(m =&gt; { prompt += `- ${m.content}\n`; });
    }

    if (grouped.episodic.length) {
      prompt += '\nPast interactions:\n';
      grouped.episodic.forEach(m =&gt; { prompt += `- ${m.content}\n`; });
    }

    if (grouped.procedural.length) {
      prompt += '\nPreferences:\n';
      grouped.procedural.forEach(m =&gt; { prompt += `- ${m.content}\n`; });
    }

    return prompt;
  }
}
</code></pre>

<h2 id="5-memory-consolidation"><strong>5. Memory Consolidation & Forgetting</strong></h2>

<pre><code class="language-typescript">
class MemoryConsolidator {
  // Run periodically (daily cron)
  async consolidate(tenantId: string): Promise&lt;ConsolidationReport&gt; {
    const report = { merged: 0, archived: 0, deleted: 0 };

    // 1. Merge similar memories
    const users = await this.db.memory.distinctUsers(tenantId);

    for (const userId of users) {
      const memories = await this.db.memory.findAll({ userId, tenantId });

      // Find clusters of similar memories
      const clusters = await this.clusterMemories(memories);

      for (const cluster of clusters) {
        if (cluster.length &lt;= 1) continue;

        // Merge into single consolidated memory
        const merged = await this.mergeCluster(cluster);
        await this.db.memory.create(merged);
        await this.db.memory.deleteMany(cluster.map(m =&gt; m.id));
        report.merged += cluster.length;
      }
    }

    // 2. Archive old, low-importance, rarely-accessed memories
    const staleMemories = await this.db.memory.findMany({
      where: {
        tenantId,
        lastAccessed: { lt: new Date(Date.now() - 90 * 24 * 3600 * 1000) },
        importance: { lt: 0.3 },
        accessCount: { lt: 2 },
      },
    });

    for (const memory of staleMemories) {
      await this.archiveMemory(memory.id);
      report.archived++;
    }

    // 3. Hard delete very old archived memories (GDPR compliance)
    const expiredMemories = await this.db.memory.findMany({
      where: {
        tenantId,
        status: 'archived',
        archivedAt: { lt: new Date(Date.now() - 365 * 24 * 3600 * 1000) },
      },
    });

    for (const memory of expiredMemories) {
      await this.db.memory.delete(memory.id);
      await this.vectorStore.delete(memory.id);
      report.deleted++;
    }

    return report;
  }

  private async mergeCluster(memories: MemoryEntry[]): Promise&lt;MemoryEntry&gt; {
    const mergedContent = await this.llm.chat({
      messages: [{
        role: 'system',
        content: 'Merge these related memory entries into a single, concise statement. Keep the most recent/important information. Output just the merged text.',
      }, {
        role: 'user',
        content: memories.map(m =&gt; `- ${m.content} (importance: ${m.importance})`).join('\n'),
      }],
      model: 'gpt-4o-mini',
    });

    return {
      ...memories[0],
      id: crypto.randomUUID(),
      content: mergedContent.content,
      importance: Math.max(...memories.map(m =&gt; m.importance)),
      accessCount: memories.reduce((sum, m) =&gt; sum + m.accessCount, 0),
      embedding: await this.embedder.embed(mergedContent.content),
    };
  }
}
</code></pre>

<h2 id="6-privacy"><strong>6. Privacy-Aware Memory (GDPR Compliance)</strong></h2>

<pre><code class="language-typescript">
class MemoryPrivacyManager {
  // User right to be forgotten
  async deleteAllUserMemories(userId: string, tenantId: string): Promise&lt;void&gt; {
    // Delete from DB
    await this.db.memory.deleteMany({ where: { userId, tenantId } });

    // Delete from vector store
    await this.vectorStore.deleteByFilter({ userId, tenantId });

    // Audit log
    await this.auditLog.log({
      action: 'memory_erasure',
      userId,
      tenantId,
      timestamp: new Date(),
      reason: 'user_request',
    });
  }

  // User can view what bot remembers
  async getUserMemories(userId: string, tenantId: string): Promise&lt;MemoryEntry[]&gt; {
    return this.db.memory.findMany({
      where: { userId, tenantId, status: 'active' },
      orderBy: { createdAt: 'desc' },
    });
  }

  // User can delete specific memories
  async deleteMemory(memoryId: string, userId: string): Promise&lt;void&gt; {
    const memory = await this.db.memory.findUnique({ where: { id: memoryId } });
    if (memory?.userId !== userId) throw new ForbiddenError();

    await this.db.memory.delete(memoryId);
    await this.vectorStore.delete(memoryId);
  }
}
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết Bài 19</strong></h2>

<ul>
<li><strong>3 Memory Types</strong>: Episodic (events), Semantic (facts), Procedural (preferences)</li>
<li><strong>Extraction</strong>: LLM extracts memories from conversations, dedup + contradiction handling</li>
<li><strong>Retrieval</strong>: Hybrid scoring = semantic (40%) + recency (20%) + importance (30%) + access (10%)</li>
<li><strong>Consolidation</strong>: Daily cron — merge similar, archive stale, delete expired (GDPR 1-year)</li>
<li><strong>Privacy</strong>: User can view/delete memories — right to be forgotten compliance</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Domain-Specific AI — Healthcare, Finance, Legal chatbot compliance, domain knowledge fine-tuning.</p>
