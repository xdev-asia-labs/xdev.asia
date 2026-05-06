---
id: 019c961a-aa05-7005-e005-aa0500000005
title: 'Lesson 5: LLM Router — Multi-Provider Adapter Pattern'
slug: bai-5-llm-router
description: >-
  Design Adapter Pattern for multi-LLM: OpenAI, Anthropic, Google, Groq, Ollama.
  LLMRouter class with fallback chains, task complexity routing, cost
  optimization.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 4
section_title: 'Part 2: LLM Engine & Agent Core'
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: Building AI Agent Platform from Zero — Real battle with xClaw
  slug: xay-dung-ai-agent-platform
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5369" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5369)"/>

  <!-- Decorations -->
  <g>
    <circle cx="780" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="960" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="90" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="190" x2="1100" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="220" x2="1050" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1061.650635094611,227.5 1061.650635094611,252.5 1040,265 1018.349364905389,252.5 1018.349364905389,227.5 1040,215" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 5: LLM Router — Multi-Provider Adapter</tspan>
      <tspan x="60" dy="42">Pattern</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Building AI Agent Platform from Zero — Real battle with xClaw</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: LLM Engine & Agent Core</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

A practical AI platform needs to support many LLM providers. You cannot hardcode OpenAI — customers may want to use Claude, Gemini, or Ollama locally. LLM Router solves this problem using Adapter Pattern.

---

## 1. LLMAdapter Interface

```typescript
// packages/core/src/llm/types.ts
export interface LLMAdapter {
  readonly provider: string;

  chat(
    messages: LLMMessage[],
    tools?: ToolDefinition[],
    options?: LLMOptions,
  ): Promise<LLMResponse>;

  chatStream(
    messages: LLMMessage[],
    tools?: ToolDefinition[],
    options?: LLMOptions,
  ): AsyncGenerator<StreamEvent>;

  listModels(): Promise<ModelInfo[]>;
}

export interface LLMOptions {
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  stop?: string[];
  jsonMode?: boolean;
}

export interface ModelInfo {
  id: string;
  name: string;
  provider: string;
  contextWindow: number;
  pricing?: { inputPer1k: number; outputPer1k: number };
}
```

Every LLM provider must implement this interface — this is the **Adapter Pattern**.

---

## 2. OpenAI Adapter

```typescript
// packages/core/src/llm/adapters/openai-adapter.ts
import OpenAI from 'openai';

export class OpenAIAdapter implements LLMAdapter {
  readonly provider = 'openai';
  private client: OpenAI;

  constructor(config: { apiKey: string; baseUrl?: string }) {
    this.client = new OpenAI({
      apiKey: config.apiKey,
      baseURL: config.baseUrl,
    });
  }

  async chat(messages: LLMMessage[], tools?: ToolDefinition[]): Promise<LLMResponse> {
    const response = await this.client.chat.completions.create({
      model: 'gpt-4o',
      messages: this.convertMessages(messages),
      tools: tools ? this.convertTools(tools) : undefined,
    });

    const choice = response.choices[0];
    return {
      content: choice.message.content ?? '',
      toolCalls: choice.message.tool_calls?.map(tc => ({
        id: tc.id,
        name: tc.function.name,
        arguments: JSON.parse(tc.function.arguments),
      })),
      usage: response.usage ? {
        promptTokens: response.usage.prompt_tokens,
        completionTokens: response.usage.completion_tokens,
        totalTokens: response.usage.total_tokens,
      } : undefined,
    };
  }

  async *chatStream(messages: LLMMessage[], tools?: ToolDefinition[]): AsyncGenerator<StreamEvent> {
    const stream = await this.client.chat.completions.create({
      model: 'gpt-4o',
      messages: this.convertMessages(messages),
      tools: tools ? this.convertTools(tools) : undefined,
      stream: true,
    });

    for await (const chunk of stream) {
      const delta = chunk.choices[0]?.delta;
      if (delta?.content) {
        yield { type: 'text-delta', delta: delta.content };
      }
      if (delta?.tool_calls) {
        for (const tc of delta.tool_calls) {
          if (tc.function?.name) {
            yield { type: 'tool-call-start', toolCallId: tc.id!, toolName: tc.function.name };
          }
          if (tc.function?.arguments) {
            yield { type: 'tool-call-args', toolCallId: tc.id!, args: tc.function.arguments };
          }
        }
      }
    }
    yield { type: 'finish' };
  }

  private convertMessages(messages: LLMMessage[]) {
    // Convert platform-agnostic format → OpenAI format
    return messages.map(m => ({
      role: m.role as 'system' | 'user' | 'assistant' | 'tool',
      content: m.content,
      tool_calls: m.toolCalls?.map(tc => ({
        id: tc.id,
        type: 'function' as const,
        function: { name: tc.name, arguments: JSON.stringify(tc.arguments) },
      })),
      tool_call_id: m.toolCallId,
    }));
  }

  private convertTools(tools: ToolDefinition[]) {
    return tools.map(t => ({
      type: 'function' as const,
      function: {
        name: t.name,
        description: t.description,
        parameters: t.parameters,
      },
    }));
  }
}
```

---

## 3. LLM Router — Routing Logic

```typescript
// packages/core/src/llm/llm-router.ts
export type TaskComplexity = 'fast' | 'smart' | 'cheap';

export class LLMRouter {
  private adapters = new Map<string, LLMAdapter>();
  private fallbackChains: Record<TaskComplexity, string[]> = {
    fast: ['groq', 'openai', 'anthropic'],
    smart: ['anthropic', 'openai', 'google'],
    cheap: ['ollama', 'groq', 'openai'],
  };

  register(adapter: LLMAdapter) {
    this.adapters.set(adapter.provider, adapter);
  }

  // Resolve chain — tìm provider available theo priority
  resolveChain(complexity: TaskComplexity): LLMAdapter {
    const chain = this.fallbackChains[complexity];
    for (const provider of chain) {
      const adapter = this.adapters.get(provider);
      if (adapter) return adapter;
    }
    // Fallback: lấy bất kỳ adapter nào available
    const first = this.adapters.values().next().value;
    if (!first) throw new Error('No LLM providers configured');
    return first;
  }

  async chat(
    messages: LLMMessage[],
    tools?: ToolDefinition[],
    complexity: TaskComplexity = 'smart',
  ): Promise<LLMResponse> {
    const adapter = this.resolveChain(complexity);

    try {
      return await adapter.chat(messages, tools);
    } catch (error) {
      // Auto-fallback to next provider
      const chain = this.fallbackChains[complexity];
      const currentIndex = chain.indexOf(adapter.provider);

      for (let i = currentIndex + 1; i < chain.length; i++) {
        const fallback = this.adapters.get(chain[i]);
        if (fallback) {
          console.warn(`Falling back from ${adapter.provider} to ${chain[i]}`);
          return await fallback.chat(messages, tools);
        }
      }
      throw error;
    }
  }
}
```

---

## 4. Anthropic & Google Adapters

```typescript
// packages/core/src/llm/adapters/anthropic-adapter.ts
export class AnthropicAdapter implements LLMAdapter {
  readonly provider = 'anthropic';

  async chat(messages: LLMMessage[], tools?: ToolDefinition[]): Promise<LLMResponse> {
    // Anthropic API has a different format:
    // - system prompt is separate from messages
    // - tool_use blocks instead of tool_calls
    const systemMsg = messages.find(m => m.role === 'system');
    const otherMsgs = messages.filter(m => m.role !== 'system');

    const response = await this.client.messages.create({
      model: 'claude-sonnet-4-20250514',
      system: systemMsg?.content,
      messages: this.convertMessages(otherMsgs),
      tools: tools?.map(t => ({
        name: t.name,
        description: t.description,
        input_schema: t.parameters,
      })),
      max_tokens: 4096,
    });

    return this.parseResponse(response);
  }
}
```

Each adapter has a unique task: **convert format** between the platform-agnostic interface and the provider's specific API.

---

## 5. Summary

| Pattern | Role |
|--------|--------|
| **Adapter** | Normalize API differences between LLM providers |
| **Strategy** | Select provider according to TaskComplexity |
| **Chain of Responsibility** | Fallback chain when provider fails |

**Next article:** Tool Registry — Register and execute tools for AI Agent.
