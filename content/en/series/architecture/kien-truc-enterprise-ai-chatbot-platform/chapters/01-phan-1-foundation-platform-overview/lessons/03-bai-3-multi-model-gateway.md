---
id: 019f0b20-b103-7001-e001-f2b8f9000103
title: 'Lesson 3: Multi-Model Gateway — LLM Router, Cost Optimization & Fallback'
slug: bai-3-multi-model-gateway
description: >-
  Multi-model gateway architecture, LLM router
  (GPT-4/Claude/Gemini/Llama/Mistral), model selection strategy
  (cost/latency/quality), fallback chain, rate limiting, token budget
  management, provider abstraction layer.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 1: Foundation & Platform Overview'
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Enterprise AI Chatbot Platform Architecture — From Prototype to Production
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7484" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7484)"/>

  <!-- Decorations -->
  <g>
    <circle cx="865" cy="65" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="630" cy="250" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="895" cy="175" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="660" cy="100" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="925" cy="285" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="195" x2="1100" y2="275" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="225" x2="1050" y2="295" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1020.9807621135332,180 1020.9807621135332,210 995,225 969.0192378864668,210 969.0192378864668,180 995,165" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ Architecture — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Multi-Model Gateway — LLM Router,</tspan>
      <tspan x="60" dy="42">Cost Optimization & Fallback</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Enterprise AI Chatbot Platform Architecture — From Prototype to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Foundation & Platform Overview</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tai-sao-multi-model"><strong>1. Why is Multi-Model Gateway needed?</strong></h2>

<p>There is no "one model fits all". Each model has its own trade-off:</p>

<table>
<thead>
<tr><th>Model</th><th>Strength</th><th>Input $/1M tokens</th><th>Output $/1M tokens</th><th>Latency (TTFT)</th></tr>
</thead>
<tbody>
<tr><td>GPT-4o</td><td>Versatile, multimodal, tool use</td><td>$2.50</td><td>$10.00</td><td>~300ms</td></tr>
<tr><td>GPT-4o-mini</td><td>Fast, cheap, good enough</td><td>$0.15</td><td>$0.60</td><td>~150ms</td></tr>
<tr><td>Claude 3.5 Sonnets</td><td>Reasoning, long context (200K)</td><td>$3.00</td><td>$15.00</td><td>~400ms</td></tr>
<tr><td>Claude 3.5 Haiku</td><td>Fast, cheap alternative</td><td>$0.25</td><td>$1.25</td><td>~200ms</td></tr>
<tr><td>Gemini 2.0 Flash</td><td>1M context, fast</td><td>$0.10</td><td>$0.40</td><td>~200ms</td></tr>
<tr><td>Llama 3.3 70B (self-hosted)</td><td>No API cost, data privacy</td><td>$0 (GPU cost)</td><td>$0 (GPU cost)</td><td>~500ms</td></tr>
<tr><td>Mistral Large</td><td>European, GDPR-friendly</td><td>$2.00</td><td>$6.00</td><td>~350ms</td></tr>
</tbody>
</table>

<p>Multi-model gateway allows:</p>
<ul>
<li><strong>Cost optimization</strong> — Route simple queries to cheap models (4o-mini), complex to strong models (GPT-4o)</li>
<li><strong>Availability</strong> — Fallback when a provider outages</li>
<li><strong>Compliance</strong> — Route sensitive data to self-hosted models</li>
<li><strong>A/B testing</strong> — Test new models without affecting production</li>
</ul>

<h2 id="2-gateway-architecture"><strong>2. Gateway Architecture</strong></h2>

<pre><code class="language-text">
┌─────────────────────────────────────────────────────────────────┐
│                    MULTI-MODEL GATEWAY                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Request ──▶ ┌──────────┐    ┌──────────┐    ┌──────────┐       │
│              │  Router   │───▶│ Provider │───▶│ Response │       │
│              │  Engine   │    │ Adapter  │    │ Normalizer│      │
│              └────┬─────┘    └──────────┘    └──────────┘       │
│                   │                                              │
│           ┌───────┼───────┐                                      │
│           │       │       │                                      │
│     ┌─────▼──┐ ┌─▼─────┐ ┌▼────────┐                           │
│     │ Rate   │ │Token  │ │Fallback │                            │
│     │ Limiter│ │Budget │ │Chain    │                            │
│     └────────┘ └───────┘ └─────────┘                            │
│                                                                  │
│  Provider Adapters:                                              │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│  │ OpenAI │ │Anthropic│ │ Google │ │ vLLM   │ │ Mistral│       │
│  │Adapter │ │ Adapter │ │Adapter │ │Adapter │ │Adapter │       │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="3-provider-abstraction"><strong>3. Provider Abstraction Layer</strong></h2>

<pre><code class="language-typescript">
// Unified interface cho tất cả LLM providers
interface LLMProvider {
  readonly name: string;
  readonly models: ModelInfo[];

  chat(request: ChatRequest): Promise&lt;ChatResponse&gt;;
  chatStream(request: ChatRequest): AsyncIterable&lt;ChatChunk&gt;;
  countTokens(messages: Message[]): Promise&lt;number&gt;;
}

interface ChatRequest {
  model: string;
  messages: Message[];
  temperature?: number;
  maxTokens?: number;
  tools?: ToolDefinition[];
  responseFormat?: 'text' | 'json';
  stream?: boolean;
}

interface ChatResponse {
  id: string;
  content: string;
  toolCalls?: ToolCall[];
  usage: { inputTokens: number; outputTokens: number };
  model: string;
  finishReason: 'stop' | 'tool_calls' | 'length' | 'content_filter';
  latencyMs: number;
}

interface ChatChunk {
  delta: string;
  toolCallDelta?: Partial&lt;ToolCall&gt;;
  finishReason?: string;
}

interface ModelInfo {
  id: string;
  provider: string;
  maxContextTokens: number;
  inputPricePerMToken: number;
  outputPricePerMToken: number;
  supportsTools: boolean;
  supportsVision: boolean;
  supportsStreaming: boolean;
}
</code></pre>

<h2 id="4-openai-adapter"><strong>4. OpenAI Provider Adapter</strong></h2>

<pre><code class="language-typescript">
import OpenAI from 'openai';

class OpenAIProvider implements LLMProvider {
  readonly name = 'openai';
  readonly models: ModelInfo[] = [
    {
      id: 'gpt-4o', provider: 'openai',
      maxContextTokens: 128_000,
      inputPricePerMToken: 2.5, outputPricePerMToken: 10,
      supportsTools: true, supportsVision: true, supportsStreaming: true,
    },
    {
      id: 'gpt-4o-mini', provider: 'openai',
      maxContextTokens: 128_000,
      inputPricePerMToken: 0.15, outputPricePerMToken: 0.6,
      supportsTools: true, supportsVision: true, supportsStreaming: true,
    },
  ];

  private client: OpenAI;

  constructor(apiKey: string) {
    this.client = new OpenAI({ apiKey });
  }

  async chat(request: ChatRequest): Promise&lt;ChatResponse&gt; {
    const startTime = performance.now();

    const response = await this.client.chat.completions.create({
      model: request.model,
      messages: this.mapMessages(request.messages),
      temperature: request.temperature ?? 0.7,
      max_tokens: request.maxTokens,
      tools: request.tools?.map(this.mapTool),
      response_format: request.responseFormat === 'json'
        ? { type: 'json_object' } : undefined,
    });

    const choice = response.choices[0];
    return {
      id: response.id,
      content: choice.message.content ?? '',
      toolCalls: choice.message.tool_calls?.map(tc =&gt; ({
        id: tc.id,
        name: tc.function.name,
        arguments: JSON.parse(tc.function.arguments),
      })),
      usage: {
        inputTokens: response.usage?.prompt_tokens ?? 0,
        outputTokens: response.usage?.completion_tokens ?? 0,
      },
      model: response.model,
      finishReason: this.mapFinishReason(choice.finish_reason),
      latencyMs: Math.round(performance.now() - startTime),
    };
  }

  async *chatStream(request: ChatRequest): AsyncIterable&lt;ChatChunk&gt; {
    const stream = await this.client.chat.completions.create({
      model: request.model,
      messages: this.mapMessages(request.messages),
      temperature: request.temperature ?? 0.7,
      max_tokens: request.maxTokens,
      tools: request.tools?.map(this.mapTool),
      stream: true,
    });

    for await (const chunk of stream) {
      const delta = chunk.choices[0]?.delta;
      yield {
        delta: delta?.content ?? '',
        toolCallDelta: delta?.tool_calls?.[0] ? {
          id: delta.tool_calls[0].id,
          name: delta.tool_calls[0].function?.name,
          arguments: delta.tool_calls[0].function?.arguments
            ? JSON.parse(delta.tool_calls[0].function.arguments) : undefined,
        } : undefined,
        finishReason: chunk.choices[0]?.finish_reason ?? undefined,
      };
    }
  }

  private mapMessages(messages: Message[]): OpenAI.ChatCompletionMessageParam[] {
    return messages.map(m =&gt; ({ role: m.role, content: m.content }));
  }

  private mapTool(tool: ToolDefinition): OpenAI.ChatCompletionTool {
    return {
      type: 'function',
      function: {
        name: tool.name,
        description: tool.description,
        parameters: tool.parameters,
      },
    };
  }

  private mapFinishReason(reason: string | null): ChatResponse['finishReason'] {
    const map: Record&lt;string, ChatResponse['finishReason']&gt; = {
      stop: 'stop', tool_calls: 'tool_calls',
      length: 'length', content_filter: 'content_filter',
    };
    return map[reason ?? 'stop'] ?? 'stop';
  }
}
</code></pre>

<h2 id="5-router-engine"><strong>5. Router Engine — Model Selection Strategy</strong></h2>

<pre><code class="language-typescript">
interface RoutingConfig {
  strategy: 'cost-optimized' | 'quality-first' | 'latency-first' | 'custom';
  rules: RoutingRule[];
  fallbackChain: string[];   // Ordered list of model IDs
  costBudget?: {
    maxCostPerRequest: number;   // USD
    dailyBudget: number;
    monthlyBudget: number;
  };
}

interface RoutingRule {
  condition: RoutingCondition;
  model: string;
  priority: number;
}

type RoutingCondition =
  | { type: 'complexity'; threshold: 'simple' | 'medium' | 'complex' }
  | { type: 'topic'; topics: string[] }
  | { type: 'language'; languages: string[] }
  | { type: 'tokenCount'; maxTokens: number }
  | { type: 'requiresTool'; value: boolean }
  | { type: 'requiresVision'; value: boolean }
  | { type: 'sensitive'; value: boolean };

class ModelRouter {
  constructor(
    private providers: Map&lt;string, LLMProvider&gt;,
    private config: RoutingConfig,
    private complexityClassifier: ComplexityClassifier,
    private costTracker: CostTracker,
  ) {}

  async selectModel(request: ChatRequest, context: RoutingContext): Promise&lt;string&gt; {
    // 1. Evaluate explicit rules
    for (const rule of this.config.rules.sort((a, b) =&gt; a.priority - b.priority)) {
      if (await this.evaluateCondition(rule.condition, request, context)) {
        if (this.isModelAvailable(rule.model)) {
          return rule.model;
        }
      }
    }

    // 2. Strategy-based selection
    switch (this.config.strategy) {
      case 'cost-optimized':
        return this.selectCheapestCapable(request, context);
      case 'quality-first':
        return this.selectStrongest(request, context);
      case 'latency-first':
        return this.selectFastest(request, context);
      default:
        return this.config.fallbackChain[0];
    }
  }

  private async selectCheapestCapable(
    request: ChatRequest,
    context: RoutingContext,
  ): Promise&lt;string&gt; {
    const complexity = await this.complexityClassifier.classify(request);

    // Simple queries → cheapest model
    if (complexity === 'simple') {
      return 'gpt-4o-mini'; // $0.15/1M input
    }

    // Complex reasoning → best model within budget
    if (this.config.costBudget) {
      const budget = await this.costTracker.getRemainingBudget(context.tenantId);
      if (budget.daily &lt; 1.0) { // Low budget — force cheap model
        return 'gpt-4o-mini';
      }
    }

    return 'gpt-4o';
  }

  private isModelAvailable(modelId: string): boolean {
    const provider = this.getProviderForModel(modelId);
    return provider !== undefined && !this.isProviderDown(provider.name);
  }
}
</code></pre>

<h2 id="6-complexity-classifier"><strong>6. Query Complexity Classifier</strong></h2>

<pre><code class="language-typescript">
// Classify query complexity to route to appropriate model
class ComplexityClassifier {
  private readonly SIMPLE_PATTERNS = [
    /^(hi|hello|hey|xin chào|chào)/i,
    /^(thanks|thank you|cảm ơn)/i,
    /^(yes|no|ok|được|không)/i,
  ];

  async classify(request: ChatRequest): Promise&lt;'simple' | 'medium' | 'complex'&gt; {
    const lastMessage = request.messages[request.messages.length - 1];
    const content = lastMessage.content;

    // Rule-based fast path
    if (this.SIMPLE_PATTERNS.some(p =&gt; p.test(content))) return 'simple';
    if (content.length &lt; 20) return 'simple';

    // Feature-based classification
    const features = {
      messageLength: content.length,
      wordCount: content.split(/\s+/).length,
      hasCode: /```|`[^`]+`/.test(content),
      hasNumbers: /\d{3,}/.test(content),
      questionMarks: (content.match(/\?/g) || []).length,
      requiresTool: request.tools && request.tools.length &gt; 0,
      conversationLength: request.messages.length,
      hasMultipleSteps: /bước|step|đầu tiên|thứ hai|sau đó|tiếp theo/i.test(content),
    };

    // Scoring
    let score = 0;
    if (features.messageLength &gt; 200) score += 2;
    if (features.wordCount &gt; 50) score += 2;
    if (features.hasCode) score += 3;
    if (features.questionMarks &gt; 2) score += 2;
    if (features.requiresTool) score += 3;
    if (features.conversationLength &gt; 10) score += 1;
    if (features.hasMultipleSteps) score += 2;

    if (score &lt;= 2) return 'simple';
    if (score &lt;= 6) return 'medium';
    return 'complex';
  }
}
</code></pre>

<h2 id="7-fallback-chain"><strong>7. Fallback Chain & Circuit Breaker</strong></h2>

<pre><code class="language-typescript">
class FallbackChain {
  private circuitBreakers: Map&lt;string, CircuitBreaker&gt; = new Map();

  constructor(private providers: Map&lt;string, LLMProvider&gt;) {
    for (const [name] of providers) {
      this.circuitBreakers.set(name, new CircuitBreaker({
        failureThreshold: 5,
        resetTimeoutMs: 60_000, // 1 minute
        halfOpenRequests: 2,
      }));
    }
  }

  async executeWithFallback(
    request: ChatRequest,
    modelChain: string[],
  ): Promise&lt;ChatResponse&gt; {
    const errors: Array&lt;{ model: string; error: Error }&gt; = [];

    for (const modelId of modelChain) {
      const provider = this.getProvider(modelId);
      const breaker = this.circuitBreakers.get(provider.name)!;

      if (breaker.state === 'open') {
        errors.push({ model: modelId, error: new Error('Circuit breaker open') });
        continue;
      }

      try {
        const response = await breaker.execute(() =&gt;
          provider.chat({ ...request, model: modelId }),
        );
        return response;
      } catch (error) {
        errors.push({ model: modelId, error: error as Error });
        // Continue to next model in chain
      }
    }

    throw new AllProvidersFailedError(errors);
  }
}

class CircuitBreaker {
  state: 'closed' | 'open' | 'half-open' = 'closed';
  private failureCount = 0;
  private lastFailureTime = 0;
  private halfOpenSuccesses = 0;

  constructor(private config: {
    failureThreshold: number;
    resetTimeoutMs: number;
    halfOpenRequests: number;
  }) {}

  async execute&lt;T&gt;(fn: () =&gt; Promise&lt;T&gt;): Promise&lt;T&gt; {
    if (this.state === 'open') {
      if (Date.now() - this.lastFailureTime &gt; this.config.resetTimeoutMs) {
        this.state = 'half-open';
        this.halfOpenSuccesses = 0;
      } else {
        throw new Error('Circuit breaker is open');
      }
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  private onSuccess(): void {
    if (this.state === 'half-open') {
      this.halfOpenSuccesses++;
      if (this.halfOpenSuccesses &gt;= this.config.halfOpenRequests) {
        this.state = 'closed';
        this.failureCount = 0;
      }
    } else {
      this.failureCount = 0;
    }
  }

  private onFailure(): void {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    if (this.failureCount &gt;= this.config.failureThreshold) {
      this.state = 'open';
    }
  }
}
</code></pre>

<h2 id="8-token-budget"><strong>8. Token Budget Management</strong></h2>

<pre><code class="language-typescript">
interface TokenBudget {
  tenantId: string;
  dailyLimit: number;
  monthlyLimit: number;
  dailyUsed: number;
  monthlyUsed: number;
}

class CostTracker {
  constructor(private redis: Redis, private db: Database) {}

  async trackUsage(
    tenantId: string,
    model: string,
    usage: { inputTokens: number; outputTokens: number },
  ): Promise&lt;void&gt; {
    const modelInfo = this.getModelInfo(model);
    const cost =
      (usage.inputTokens / 1_000_000) * modelInfo.inputPricePerMToken +
      (usage.outputTokens / 1_000_000) * modelInfo.outputPricePerMToken;

    const today = new Date().toISOString().split('T')[0];
    const month = today.substring(0, 7);

    // Atomic increment in Redis for real-time tracking
    await this.redis
      .multi()
      .incrbyfloat(`budget:${tenantId}:daily:${today}`, cost)
      .incrbyfloat(`budget:${tenantId}:monthly:${month}`, cost)
      .incrby(`tokens:${tenantId}:daily:${today}`, usage.inputTokens + usage.outputTokens)
      .expire(`budget:${tenantId}:daily:${today}`, 86400 * 2)
      .expire(`budget:${tenantId}:monthly:${month}`, 86400 * 35)
      .exec();

    // Async write to DB for persistence
    await this.db.usageLog.create({
      tenantId, model, cost,
      inputTokens: usage.inputTokens,
      outputTokens: usage.outputTokens,
      timestamp: new Date(),
    });
  }

  async getRemainingBudget(tenantId: string): Promise&lt;{ daily: number; monthly: number }&gt; {
    const tenant = await this.db.tenant.findById(tenantId);
    const today = new Date().toISOString().split('T')[0];
    const month = today.substring(0, 7);

    const dailyUsed = parseFloat(
      await this.redis.get(`budget:${tenantId}:daily:${today}`) ?? '0'
    );
    const monthlyUsed = parseFloat(
      await this.redis.get(`budget:${tenantId}:monthly:${month}`) ?? '0'
    );

    return {
      daily: (tenant.config.dailyBudget ?? Infinity) - dailyUsed,
      monthly: (tenant.config.monthlyBudget ?? Infinity) - monthlyUsed,
    };
  }

  async checkBudget(tenantId: string): Promise&lt;{ allowed: boolean; reason?: string }&gt; {
    const remaining = await this.getRemainingBudget(tenantId);
    if (remaining.daily &lt;= 0) return { allowed: false, reason: 'Daily budget exceeded' };
    if (remaining.monthly &lt;= 0) return { allowed: false, reason: 'Monthly budget exceeded' };
    return { allowed: true };
  }
}
</code></pre>

<h2 id="9-rate-limiting"><strong>9. Rate Limiting per Provider</strong></h2>

<pre><code class="language-typescript">
// Sliding window rate limiter per provider
class ProviderRateLimiter {
  private limits: Map&lt;string, { rpm: number; tpm: number }&gt; = new Map([
    ['openai', { rpm: 5000, tpm: 800_000 }],
    ['anthropic', { rpm: 4000, tpm: 400_000 }],
    ['google', { rpm: 6000, tpm: 1_000_000 }],
  ]);

  constructor(private redis: Redis) {}

  async checkAndConsume(
    provider: string,
    estimatedTokens: number,
  ): Promise&lt;{ allowed: boolean; retryAfterMs?: number }&gt; {
    const limits = this.limits.get(provider);
    if (!limits) return { allowed: true };

    const now = Date.now();
    const windowKey = `ratelimit:${provider}`;

    // Sliding window counter with Redis
    const [requestCount, tokenCount] = await this.redis
      .multi()
      .zcount(`${windowKey}:rpm`, now - 60_000, now)
      .get(`${windowKey}:tpm:${Math.floor(now / 60_000)}`)
      .exec() as [number, string | null];

    if (requestCount >= limits.rpm) {
      return { allowed: false, retryAfterMs: 60_000 };
    }

    const currentTokens = parseInt(tokenCount ?? '0', 10);
    if (currentTokens + estimatedTokens > limits.tpm) {
      return { allowed: false, retryAfterMs: 60_000 - (now % 60_000) };
    }

    // Consume
    await this.redis
      .multi()
      .zadd(`${windowKey}:rpm`, now, `${now}-${Math.random()}`)
      .zremrangebyscore(`${windowKey}:rpm`, 0, now - 60_000)
      .incrby(`${windowKey}:tpm:${Math.floor(now / 60_000)}`, estimatedTokens)
      .expire(`${windowKey}:tpm:${Math.floor(now / 60_000)}`, 120)
      .exec();

    return { allowed: true };
  }
}
</code></pre>

<h2 id="10-gateway-integration"><strong>10. Putting It All Together — Gateway Service</strong></h2>

<pre><code class="language-typescript">
class MultiModelGateway {
  constructor(
    private router: ModelRouter,
    private fallbackChain: FallbackChain,
    private rateLimiter: ProviderRateLimiter,
    private costTracker: CostTracker,
    private eventBus: EventBus,
  ) {}

  async chat(request: ChatRequest, context: RoutingContext): Promise&lt;ChatResponse&gt; {
    // 1. Check budget
    const budget = await this.costTracker.checkBudget(context.tenantId);
    if (!budget.allowed) {
      throw new BudgetExceededError(budget.reason!);
    }

    // 2. Select model
    const primaryModel = await this.router.selectModel(request, context);

    // 3. Build fallback chain
    const chain = [primaryModel, ...this.router.getFallbacks(primaryModel)];

    // 4. Execute with fallback
    const response = await this.fallbackChain.executeWithFallback(request, chain);

    // 5. Track usage & cost
    await this.costTracker.trackUsage(context.tenantId, response.model, response.usage);

    // 6. Emit events
    await this.eventBus.publish('ai-engine', {
      type: 'response.generated',
      payload: {
        sessionId: context.sessionId,
        tokensUsed: response.usage.inputTokens + response.usage.outputTokens,
        latencyMs: response.latencyMs,
        model: response.model,
        tenantId: context.tenantId,
      },
    });

    return response;
  }
}
</code></pre>

<h2 id="tong-ket"><strong>Summary of Lesson 3</strong></h2>

<table>
<thead>
<tr><th>Component</th><th>Responsibility</th></tr>
</thead>
<tbody>
<tr><td><strong>Provider Adapter</strong></td><td>Normalize API differences between OpenAI/Claude/Gemini/vLLM</td></tr>
<tr><td><strong>Router Engine</strong></td><td>Select model based on complexity, topic, cost, capability</td></tr>
<tr><td><strong>Complexity Classifier</strong></td><td>Classify query (simple/medium/complex) for cost optimization</td></tr>
<tr><td><strong>Circuit Breaker</strong></td><td>Detect provider failure, auto-switch to fallback</td></tr>
<tr><td><strong>Token Budget</strong></td><td>Track & enforce daily/monthly spending limits per tenant</td></tr>
<tr><td><strong>Rate Limiter</strong></td><td>Respect provider rate limits (RPM/TPM) to avoid 429 errors</td></tr>
</tbody>
</table>

<p><strong>Next article:</strong> Conversation Management — session lifecycle, context window optimization (sliding window, summarization, compression), short-term vs long-term memory architecture.</p>
