---
id: 019f0b20-b502-7001-e001-f2b8f9000502
title: 'Bài 17: Human Handoff & Hybrid Support — Escalation Triggers, Live Chat & Agent Assist'
slug: bai-17-human-handoff-hybrid-support
description: >-
  Escalation triggers, agent routing algorithms, live chat integration,
  seamless handoff UX, agent assist (AI suggestions), co-pilot mode,
  queue management, SLA tracking.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Multi-Channel & Scale"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<h2 id="1-handoff-architecture"><strong>1. Human Handoff Architecture</strong></h2>

<p>Không chatbot nào đạt 100% resolution rate. Enterprise cần <strong>seamless handoff</strong> từ bot → human agent, với <strong>full context transfer</strong> để agent không phải hỏi lại từ đầu.</p>

<pre><code class="language-text">
┌───────── HANDOFF FLOW ─────────────────────────────────┐
│                                                         │
│  ┌────────┐    ┌───────────┐    ┌──────────────────┐    │
│  │  User  │───▶│  AI Bot   │───▶│  Escalation      │    │
│  │        │    │           │    │  Decision Engine  │    │
│  └────────┘    └───────────┘    └────────┬─────────┘    │
│                                          │              │
│                              ┌───────────▼──────────┐   │
│                              │    HANDOFF MANAGER    │   │
│                              │  • Context packaging  │   │
│                              │  • Agent matching     │   │
│                              │  • Queue management   │   │
│                              └───────────┬──────────┘   │
│                                          │              │
│  ┌────────┐    ┌───────────┐    ┌────────▼─────────┐    │
│  │  User  │◀──▶│  Human    │◀───│  Agent Workspace │    │
│  │        │    │  Agent    │    │  (AI-assisted)   │    │
│  └────────┘    └───────────┘    └──────────────────┘    │
└─────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-escalation-triggers"><strong>2. Escalation Decision Engine</strong></h2>

<pre><code class="language-typescript">
interface EscalationTrigger {
  type: 'explicit' | 'sentiment' | 'confidence' | 'topic' | 'loop' | 'vip';
  check: (context: ConversationContext) =&gt; EscalationDecision;
}

class EscalationEngine {
  private triggers: EscalationTrigger[] = [
    // User explicitly asks for human
    {
      type: 'explicit',
      check: (ctx) =&gt; {
        const keywords = ['nói chuyện với người', 'gặp nhân viên', 'hỗ trợ viên',
          'talk to agent', 'human agent', 'real person'];
        const lastMessage = ctx.lastUserMessage.toLowerCase();
        const triggered = keywords.some(kw =&gt; lastMessage.includes(kw));
        return { shouldEscalate: triggered, reason: 'User requested human agent' };
      },
    },
    // Negative sentiment detected
    {
      type: 'sentiment',
      check: (ctx) =&gt; {
        const triggered = ctx.sentimentScore &lt; -0.6;
        return {
          shouldEscalate: triggered,
          reason: `Negative sentiment: ${ctx.sentimentScore.toFixed(2)}`,
          priority: 'high',
        };
      },
    },
    // Low AI confidence
    {
      type: 'confidence',
      check: (ctx) =&gt; {
        const triggered = ctx.lastConfidenceScore &lt; 0.3;
        return {
          shouldEscalate: triggered,
          reason: `Low confidence: ${ctx.lastConfidenceScore.toFixed(2)}`,
        };
      },
    },
    // Restricted topic
    {
      type: 'topic',
      check: (ctx) =&gt; {
        const escalationTopics = ['complaint', 'refund', 'legal', 'billing_dispute'];
        const triggered = escalationTopics.includes(ctx.detectedIntent);
        return {
          shouldEscalate: triggered,
          reason: `Sensitive topic: ${ctx.detectedIntent}`,
          priority: 'high',
          targetSkill: ctx.detectedIntent,
        };
      },
    },
    // Conversation loop (bot can't help)
    {
      type: 'loop',
      check: (ctx) =&gt; {
        const triggered = ctx.turnCount &gt; 8 &amp;&amp; !ctx.isProgressing;
        return {
          shouldEscalate: triggered,
          reason: 'Conversation not progressing after 8 turns',
        };
      },
    },
    // VIP customer
    {
      type: 'vip',
      check: (ctx) =&gt; {
        const triggered = ctx.customerSegment === 'vip' || ctx.customerSegment === 'enterprise';
        return {
          shouldEscalate: triggered,
          reason: 'VIP customer — prioritize human support',
          priority: 'urgent',
        };
      },
    },
  ];

  evaluate(context: ConversationContext): EscalationDecision {
    for (const trigger of this.triggers) {
      const decision = trigger.check(context);
      if (decision.shouldEscalate) {
        return decision;
      }
    }
    return { shouldEscalate: false };
  }
}
</code></pre>

<h2 id="3-handoff-manager"><strong>3. Handoff Manager — Context Packaging & Agent Matching</strong></h2>

<pre><code class="language-typescript">
class HandoffManager {
  async initiateHandoff(
    conversationId: string,
    decision: EscalationDecision,
  ): Promise&lt;HandoffResult&gt; {
    const conversation = await this.conversationService.get(conversationId);

    // 1. Package context for human agent
    const handoffContext = await this.packageContext(conversation);

    // 2. Find best available agent
    const agent = await this.routeToAgent(decision, conversation.tenantId);

    // 3. Create handoff record
    const handoff = await this.db.handoff.create({
      conversationId,
      agentId: agent?.id,
      status: agent ? 'assigned' : 'queued',
      priority: decision.priority ?? 'normal',
      context: handoffContext,
      queuedAt: new Date(),
    });

    // 4. Notify user
    await this.notifyUser(conversationId, agent);

    // 5. Notify agent (if assigned)
    if (agent) {
      await this.notifyAgent(agent.id, handoff);
    }

    return {
      handoffId: handoff.id,
      status: handoff.status,
      estimatedWaitTime: agent ? 0 : await this.estimateWaitTime(conversation.tenantId),
      queuePosition: agent ? 0 : await this.getQueuePosition(handoff.id),
    };
  }

  private async packageContext(conversation: Conversation): Promise&lt;HandoffContext&gt; {
    // Generate AI summary of the conversation
    const summary = await this.llm.chat({
      messages: [{
        role: 'system',
        content: `Summarize this customer conversation for a human support agent. Include:
1. Customer's main issue/question
2. What the bot tried to do
3. Why it couldn't resolve
4. Customer sentiment
5. Any actions already taken
Be concise - max 200 words.`,
      }, {
        role: 'user',
        content: JSON.stringify(conversation.messages.slice(-20)),
      }],
      model: 'gpt-4o-mini',
    });

    return {
      summary: summary.content,
      customerInfo: conversation.customerInfo,
      conversationHistory: conversation.messages,
      detectedIntent: conversation.intent,
      sentiment: conversation.sentimentScore,
      toolActionsPerformed: conversation.toolResults,
      ragSourcesUsed: conversation.ragSources,
      suggestedNextActions: await this.suggestActions(conversation),
    };
  }

  private async routeToAgent(
    decision: EscalationDecision,
    tenantId: string,
  ): Promise&lt;HumanAgent | null&gt; {
    // Find available agents with matching skills
    const availableAgents = await this.agentService.getAvailable(tenantId, {
      skill: decision.targetSkill,
      language: decision.language,
    });

    if (availableAgents.length === 0) return null;

    // Route based on: skill match + availability + current load
    return availableAgents.sort((a, b) =&gt; {
      const scoreA = this.routingScore(a, decision);
      const scoreB = this.routingScore(b, decision);
      return scoreB - scoreA;
    })[0];
  }
}
</code></pre>

<h2 id="4-agent-assist"><strong>4. Agent Assist — AI Co-Pilot for Human Agents</strong></h2>

<pre><code class="language-typescript">
class AgentAssistService {
  // Real-time suggestions as customer types
  async getSuggestions(
    conversationId: string,
    customerMessage: string,
  ): Promise&lt;AgentAssistSuggestion&gt; {
    const conversation = await this.conversationService.get(conversationId);

    // 1. Generate response suggestions
    const suggestions = await this.llm.chat({
      messages: [{
        role: 'system',
        content: `You are an AI assistant helping a human support agent.
Based on the conversation and customer's latest message, suggest 3 response options:
1. A direct answer (if you know it)
2. A clarifying question
3. An empathetic response + next steps

Also list any relevant knowledge base articles.
Output JSON.`,
      }, {
        role: 'user',
        content: `Conversation:\n${JSON.stringify(conversation.messages.slice(-10))}\n\nLatest customer message: ${customerMessage}`,
      }],
      response_format: { type: 'json_object' },
    });

    const parsed = JSON.parse(suggestions.content);

    // 2. Search knowledge base
    const articles = await this.rag.retrieve(customerMessage, { topK: 3 });

    // 3. Check for macros/templates
    const macros = await this.macroService.findRelevant(
      conversation.tenantId,
      customerMessage,
    );

    return {
      suggestedResponses: parsed.suggestions,
      knowledgeArticles: articles.map(a =&gt; ({
        title: a.title,
        snippet: a.content.slice(0, 200),
        url: a.sourceUrl,
      })),
      macros,
      customerSentiment: parsed.sentiment,
    };
  }

  // Auto-summarize when agent closes conversation
  async generateWrapUp(conversationId: string): Promise&lt;WrapUpSummary&gt; {
    const conversation = await this.conversationService.get(conversationId);

    const summary = await this.llm.chat({
      messages: [{
        role: 'system',
        content: `Generate a wrap-up summary for this support conversation:
- Issue category
- Root cause
- Resolution
- Follow-up actions needed
- Customer satisfaction assessment
Output JSON.`,
      }, {
        role: 'user',
        content: JSON.stringify(conversation.messages),
      }],
      response_format: { type: 'json_object' },
    });

    return JSON.parse(summary.content);
  }
}
</code></pre>

<h2 id="5-queue-management"><strong>5. Queue Management & SLA Tracking</strong></h2>

<pre><code class="language-typescript">
class QueueManager {
  async getQueueStatus(tenantId: string): Promise&lt;QueueStatus&gt; {
    const queued = await this.db.handoff.count({
      where: { tenantId, status: 'queued' },
    });

    const avgWaitTime = await this.db.handoff.aggregate({
      where: {
        tenantId,
        status: 'assigned',
        assignedAt: { gte: new Date(Date.now() - 3600 * 1000) },
      },
      _avg: { waitTimeMs: true },
    });

    const availableAgents = await this.agentService.countAvailable(tenantId);

    return {
      queuedConversations: queued,
      avgWaitTimeMs: avgWaitTime._avg.waitTimeMs ?? 0,
      availableAgents,
      estimatedWaitForNew: queued &gt; 0
        ? (avgWaitTime._avg.waitTimeMs ?? 120_000) * (queued / Math.max(availableAgents, 1))
        : 0,
    };
  }

  // SLA monitoring
  async checkSLABreaches(tenantId: string): Promise&lt;SLABreach[]&gt; {
    const slaConfig = await this.getSLAConfig(tenantId);
    const breaches: SLABreach[] = [];

    // Check first response time SLA
    const pendingHandoffs = await this.db.handoff.findMany({
      where: {
        tenantId,
        status: 'queued',
        queuedAt: { lt: new Date(Date.now() - slaConfig.firstResponseTimeMs) },
      },
    });

    for (const handoff of pendingHandoffs) {
      breaches.push({
        type: 'first_response_time',
        handoffId: handoff.id,
        slaTarget: slaConfig.firstResponseTimeMs,
        actualMs: Date.now() - handoff.queuedAt.getTime(),
        priority: handoff.priority,
      });
    }

    return breaches;
  }
}
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết Bài 17</strong></h2>

<ul>
<li><strong>Escalation Triggers</strong>: 6 loại — explicit request, sentiment, confidence, topic, loop, VIP</li>
<li><strong>Context Packaging</strong>: AI-generated summary + conversation history + customer info + suggested actions</li>
<li><strong>Agent Routing</strong>: Skill-based + availability + load balancing</li>
<li><strong>Agent Assist</strong>: AI co-pilot gợi ý response, tìm knowledge articles, auto wrap-up summary</li>
<li><strong>SLA Tracking</strong>: Monitor first response time, queue length, breach alerts</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Chatbot Evaluation & Testing — LLM-as-Judge, automated test suites, regression testing, evaluation metrics, red teaming.</p>
