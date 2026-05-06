---
id: 019c961a-aa05-7005-e005-aa0500000005
title: 第 5 課：LLM 路由器 — 多提供者適配器模式
slug: bai-5-llm-router
description: >-
  多 LLM 的設計適配器模式：OpenAI、Anthropic、Google、Groq、Ollama。 LLMRouter
  類別具有後備鏈、任務複雜度路由、成本最佳化。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 4
section_title: 第 2 部分：LLM 引擎和代理核心
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: 從零開始搭建AI代理平台－與xClaw實戰
  slug: xay-dung-ai-agent-platform
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：LLM 路由器 — 多提供者適配器</tspan>
      <tspan x="60" dy="42">圖案</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從零開始搭建AI代理平台－與xClaw實戰</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：LLM 引擎和代理核心</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

一個實用的人工智慧平台需要支援許多LLM提供者。您無法對 OpenAI 進行硬編碼 - 客戶可能希望在本地使用 Claude、Gemini 或 Ollama。 LLM Router 使用適配器模式解決了這個問題。

---

## 1.LLMAdapter接口

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

每個 LLM 提供者都必須實作此介面 - 這就是 **適配器模式**。

---

## 2.OpenAI 適配器

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

## 3.LLM 路由器 — 路由邏輯

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

## 4. Anthropic 與 Google 轉接器

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

每個適配器都有一個獨特的任務：**在平台無關的介面和提供者的特定 API 之間轉換格式**。

---

## 5. 總結

|圖案|角色 |
|--------|--------|
| **適配器** |規格 LLM 提供者之間的 API 差異 |
| **策略** |根據任務複雜度選擇提供者 |
| **責任鏈** |提供者失敗時的後備鏈 |

**下一篇文章：** 工具註冊表 — 為 AI Agent 註冊並執行工具。
