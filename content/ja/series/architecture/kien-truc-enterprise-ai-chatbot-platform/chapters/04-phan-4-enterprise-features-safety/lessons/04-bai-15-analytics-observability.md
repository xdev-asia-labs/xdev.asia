---
id: 019f0b20-b404-7001-e001-f2b8f9000404
title: 'レッスン 15: 分析と可観測性 — 会話分析、LLM メトリクス、コスト追跡'
slug: bai-15-analytics-observability
description: 会話分析、LLM 可観測性 (レイテンシ、トークン、コスト)、トレース パイプライン、ダッシュボード設計、アラート、A/B テスト指標、ROI 測定。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 4: エンタープライズ機能と安全性'
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-529" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-529)"/>

  <!-- Decorations -->
  <g>
    <circle cx="892" cy="146" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="684" cy="98" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="976" cy="50" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="768" cy="262" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="214" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="166" x2="1100" y2="246" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="196" x2="1050" y2="266" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="951.507041555162,95.5 951.507041555162,136.5 916,157 880.492958444838,136.5 880.492958444838,95.50000000000001 916,75" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ アーキテクチャ — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: 分析と可観測性 —</tspan>
      <tspan x="60" dy="42">会話分析、LLM メトリクス、コスト</tspan>
      <tspan x="60" dy="42">追跡</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: エンタープライズ機能と安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-observability-stack"><strong>1. AIチャットボットの可観測性スタック</strong></h2>

<pre><code class="language-text">
┌─────────── OBSERVABILITY ARCHITECTURE ───────────────┐
│                                                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │  Traces  │  │  Metrics │  │   Logs   │  3 Pillars │
│  │(LangFuse)│  │(Prometheus│  │ (ELK /  │            │
│  │          │  │ /Grafana) │  │  Loki)   │            │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘            │
│       │              │             │                  │
│       └──────────────┼─────────────┘                  │
│                      │                                │
│              ┌───────▼──────┐                         │
│              │  Analytics   │                         │
│              │  Dashboard   │                         │
│              │  (Grafana /  │                         │
│              │   Custom)    │                         │
│              └──────────────┘                         │
└───────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-conversation-analytics"><strong>2. 会話分析 — 主要な指標</strong></h2>

<table>
<thead>
<tr>
<th>メトリック</th>
<th>説明</th>
<th>ターゲット</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>解像度レート</strong></td>
<td>人間なしで解決された会話の割合</td>
<td>>70%</td>
</tr>
<tr>
<td><strong>CSAT</strong></td>
<td>顧客満足度 (高評価/低評価)</td>
<td>>4.0/5.0</td>
</tr>
<tr>
<td><strong>平均回転数</strong></td>
<td>会話ごとの平均メッセージ</td>
<td><8</td>
</tr>
<tr>
<td><strong>最初の応答時間</strong></td>
<td>最初のトークンまでの時間 (TTFT)</td>
<td><500ms</td>
</tr>
<tr>
<td><strong>エスカレーション率</strong></td>
<td>人間のエージェントに転送された割合</td>
<td><30%</td>
</tr>
<tr>
<td><strong>封じ込め率</strong></td>
<td>% は完全にボットによって処理されます</td>
<td>>60%</td>
</tr>
<tr>
<td><strong>会話あたりのコスト</strong></td>
<td>LLM とコンバージョンあたりのインフラ費用の合計</td>
<td><$0.05</td>
</tr>
<tr>
<td><strong>幻覚率</strong></td>
<td>サポートされていない主張を含む回答の割合</td>
<td><5%</td>
</tr>
</tbody>
</table>

<pre><code class="language-typescript">
class ConversationAnalytics {
  async recordConversationMetrics(
    conversation: CompletedConversation,
  ): Promise&lt;void&gt; {
    const metrics: ConversationMetric = {
      tenantId: conversation.tenantId,
      conversationId: conversation.id,
      timestamp: new Date(),
      
      // Conversation metrics
      totalTurns: conversation.messages.filter(m =&gt; m.role === 'user').length,
      duration: conversation.endedAt.getTime() - conversation.startedAt.getTime(),
      resolved: conversation.status === 'resolved',
      escalated: conversation.status === 'escalated',
      
      // Satisfaction
      userRating: conversation.feedback?.rating,
      
      // LLM metrics (aggregated)
      totalInputTokens: this.sumTokens(conversation, 'input'),
      totalOutputTokens: this.sumTokens(conversation, 'output'),
      totalCost: this.calculateCost(conversation),
      avgLatency: this.avgLatency(conversation),
      
      // Quality metrics
      toolCallCount: this.countToolCalls(conversation),
      ragRetrievalCount: this.countRagRetrievals(conversation),
      guardrailTriggered: conversation.guardrailEvents?.length ?? 0,
      
      // Classification
      intent: conversation.detectedIntent,
      sentiment: conversation.avgSentiment,
      agentsUsed: conversation.agentHistory,
    };

    // Store in ClickHouse for fast OLAP queries
    await this.clickhouse.insert('conversation_metrics', metrics);
    
    // Also emit to Prometheus for real-time dashboards
    this.prometheus.conversationDuration.observe(
      { tenant: conversation.tenantId, status: conversation.status },
      metrics.duration / 1000,
    );
    this.prometheus.conversationCost.observe(
      { tenant: conversation.tenantId },
      metrics.totalCost,
    );
  }
}
</code></pre>

<h2 id="3-llm-tracing"><strong>3. LLM コール トレーシング — Langfuse の統合</strong></h2>

<pre><code class="language-typescript">
class LLMTracer {
  private langfuse: Langfuse;

  async traceCompletion(
    params: TracedCompletionParams,
  ): Promise&lt;TracedCompletion&gt; {
    const trace = this.langfuse.trace({
      name: 'chat-completion',
      userId: params.userId,
      metadata: {
        tenantId: params.tenantId,
        conversationId: params.conversationId,
        agentId: params.agentId,
      },
    });

    // Span for each pipeline stage
    const ragSpan = trace.span({ name: 'rag-retrieval' });
    const ragResults = await this.rag.retrieve(params.query);
    ragSpan.end({
      output: { documentCount: ragResults.length },
      metadata: { topScore: ragResults[0]?.score },
    });

    const guardrailSpan = trace.span({ name: 'input-guardrail' });
    const guardrailResult = await this.guardrails.checkInput(params.query);
    guardrailSpan.end({
      output: { passed: !guardrailResult.blocked },
    });

    const llmSpan = trace.span({ name: 'llm-generation' });
    const startTime = Date.now();
    const generation = trace.generation({
      name: 'chat',
      model: params.model,
      input: params.messages,
      modelParameters: { temperature: params.temperature },
    });

    const response = await this.llm.chat(params);

    generation.end({
      output: response.content,
      usage: {
        promptTokens: response.usage.promptTokens,
        completionTokens: response.usage.completionTokens,
        totalTokens: response.usage.totalTokens,
      },
    });
    llmSpan.end({ metadata: { latencyMs: Date.now() - startTime } });

    // Score the trace
    trace.score({
      name: 'cost',
      value: this.calculateCost(params.model, response.usage),
    });

    return { response, traceId: trace.id };
  }
}
</code></pre>

<h2 id="4-cost-tracking"><strong>4. コストの追跡と最適化</strong></h2>

<pre><code class="language-typescript">
class CostTracker {
  private modelPricing: Record&lt;string, { input: number; output: number }&gt; = {
    'gpt-4o':         { input: 2.50, output: 10.00 },  // per 1M tokens
    'gpt-4o-mini':    { input: 0.15, output: 0.60 },
    'claude-3.5-sonnet': { input: 3.00, output: 15.00 },
    'claude-3.5-haiku':  { input: 0.80, output: 4.00 },
  };

  calculateCost(model: string, usage: TokenUsage): number {
    const pricing = this.modelPricing[model];
    if (!pricing) return 0;

    return (
      (usage.promptTokens / 1_000_000) * pricing.input +
      (usage.completionTokens / 1_000_000) * pricing.output
    );
  }

  async getDailyCostReport(tenantId: string, date: string): Promise&lt;CostReport&gt; {
    const costs = await this.clickhouse.query(`
      SELECT
        model,
        COUNT(*) as total_calls,
        SUM(input_tokens) as total_input_tokens,
        SUM(output_tokens) as total_output_tokens,
        SUM(cost_usd) as total_cost
      FROM llm_calls
      WHERE tenant_id = {tenantId:String}
        AND toDate(timestamp) = {date:Date}
      GROUP BY model
      ORDER BY total_cost DESC
    `, { tenantId, date });

    return {
      date,
      tenantId,
      byModel: costs,
      totalCost: costs.reduce((sum, c) =&gt; sum + c.total_cost, 0),
      recommendations: this.generateCostRecommendations(costs),
    };
  }

  private generateCostRecommendations(costs: ModelCost[]): string[] {
    const recommendations: string[] = [];

    for (const cost of costs) {
      // Recommend cheaper model for simple tasks
      if (cost.model === 'gpt-4o' &amp;&amp; cost.total_calls &gt; 1000) {
        const potentialSaving = cost.total_cost * 0.85;
        recommendations.push(
          `Consider routing simple queries to gpt-4o-mini. Potential saving: $${potentialSaving.toFixed(2)}/day`,
        );
      }
    }

    return recommendations;
  }
}
</code></pre>

<h2 id="5-alerting"><strong>5. アラートと異常検出</strong></h2>

<pre><code class="language-typescript">
class AlertManager {
  private rules: AlertRule[] = [
    {
      name: 'high_error_rate',
      condition: (metrics) =&gt; metrics.errorRate &gt; 0.05,
      severity: 'critical',
      message: 'Error rate exceeded 5%',
    },
    {
      name: 'high_latency',
      condition: (metrics) =&gt; metrics.p95LatencyMs &gt; 5000,
      severity: 'warning',
      message: 'P95 latency exceeded 5s',
    },
    {
      name: 'high_cost',
      condition: (metrics) =&gt; metrics.dailyCostUsd &gt; metrics.budget * 0.8,
      severity: 'warning',
      message: 'Daily cost approaching budget (80%)',
    },
    {
      name: 'low_resolution_rate',
      condition: (metrics) =&gt; metrics.resolutionRate &lt; 0.5,
      severity: 'warning',
      message: 'Resolution rate below 50%',
    },
    {
      name: 'hallucination_spike',
      condition: (metrics) =&gt; metrics.hallucinationRate &gt; 0.1,
      severity: 'critical',
      message: 'Hallucination rate exceeded 10%',
    },
  ];

  async evaluate(tenantId: string): Promise&lt;Alert[]&gt; {
    const metrics = await this.getRecentMetrics(tenantId);
    const alerts: Alert[] = [];

    for (const rule of this.rules) {
      if (rule.condition(metrics)) {
        alerts.push({
          tenantId,
          rule: rule.name,
          severity: rule.severity,
          message: rule.message,
          metrics: this.getRelevantMetrics(metrics, rule),
          timestamp: new Date(),
        });
      }
    }

    // Send notifications
    for (const alert of alerts) {
      await this.notify(alert);
    }

    return alerts;
  }
}
</code></pre>

<h2 id="tong-ket"><strong>レッスン 15 のまとめ</strong></h2>

<ul>
<li><strong>3本の柱</strong>: トレース (Langfuse)、メトリクス (Prometheus/Grafana)、ログ (ELK/Loki)</li>
<li><strong>主要な指標</strong>：解決率、CSAT、コスト/会話、幻覚率、待ち時間</li>
<li><strong>LLM トレース</strong>: スパン (RAG、ガードレール、LLM) + コスト スコアリングを使用したコールごとの Langfuse トレース</li>
<li><strong>コストの追跡</strong>: モデルごとのコスト、日次レポート、最適化の推奨事項</li>
<li><strong>警告中</strong>: エラー率、遅延のスパイク、コストの超過、品質の低下に関する自動アラート</li>
</ul>

<p><strong>次の記事:</strong> マルチチャネル統合 — オムニチャネル ゲートウェイ、Facebook メッセンジャー、Zalo OA、Web ウィジェット、LINE、Slack、Teams。
</p>
