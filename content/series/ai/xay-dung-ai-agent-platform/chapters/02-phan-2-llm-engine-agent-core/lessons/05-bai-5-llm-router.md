---
id: 019c961a-aa05-7005-e005-aa0500000005
title: "Bài 5: LLM Router — Multi-Provider Adapter Pattern"
slug: bai-5-llm-router
description: >-
  Thiết kế Adapter Pattern cho multi-LLM: OpenAI, Anthropic, Google,
  Groq, Ollama. LLMRouter class với fallback chains, task complexity
  routing, cost optimization.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: LLM Engine & Agent Core"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

Một platform AI thực tế cần support nhiều LLM providers. Bạn không thể hardcode OpenAI — khách hàng có thể muốn dùng Claude, Gemini, hoặc Ollama local. LLM Router giải quyết bài toán này bằng Adapter Pattern.

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

Mọi LLM provider phải implement interface này — đây là **Adapter Pattern**.

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

Mỗi adapter nhiệm vụ duy nhất: **convert format** giữa platform-agnostic interface và API đặc thù của provider.

---

## 5. Tổng kết

| Pattern | Vai trò |
|---------|---------|
| **Adapter** | Normalize API differences giữa LLM providers |
| **Strategy** | Chọn provider theo TaskComplexity |
| **Chain of Responsibility** | Fallback chain khi provider fail |

**Bài tiếp theo:** Tool Registry — Đăng ký và thực thi tools cho AI Agent.
