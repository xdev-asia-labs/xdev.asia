---
id: 019c961a-aa07-7007-e007-aa0700000007
title: 'レッスン 7: エージェント クラス — 中央オーケストレーター'
slug: bai-7-agent-class
description: >-
  デザイン エージェント クラス: チャット ループ、ツール実行サイクル、メッセージ管理。
  buildMessages()、executeToolCalls()、ストリーミング応答。 AdditionalTool
  インターフェイス、マルチターン会話。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 2: LLM エンジンとエージェント コア'
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: AIエージェントプラットフォームをゼロから構築 — xClawとの実戦
  slug: xay-dung-ai-agent-platform
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5618" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5618)"/>

  <!-- Decorations -->
  <g>
    <circle cx="885" cy="85" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="670" cy="190" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="955" cy="35" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="740" cy="140" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="245" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="155" x2="1100" y2="235" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="185" x2="1050" y2="255" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="930.9807621135332,90 930.9807621135332,120 905,135 879.0192378864668,120 879.0192378864668,90.00000000000001 905,75" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: エージェント クラス — 中央オーケストレーター</tspan>
      <tspan x="60" dy="42">心</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AIエージェントプラットフォームをゼロから構築 — xClawとの実戦</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: LLM エンジンとエージェント コア</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Agent クラスは調整センターであり、LLM Router、Tool Registry、およびメモリを接続します。ユーザーがメッセージを送信するたびに、エージェントはフロー全体を調整します。つまり、メッセージの構築 → LLM の呼び出し → ツールの実行 → 必要に応じて再度ループします。

---

## 1. エージェント クラスの構造

```typescript
// packages/core/src/agent/agent.ts
export interface AdditionalTool {
  definition: ToolDefinition;
  handler: ToolHandler;
}

export class Agent {
  private config: AgentConfig;
  private llm: LLMAdapter;
  private toolRegistry: ToolRegistry;
  private memory: MemoryManager;

  constructor(
    config: AgentConfig,
    llm: LLMAdapter,
    toolRegistry: ToolRegistry,
    memory: MemoryManager,
  ) {
    this.config = config;
    this.llm = llm;
    this.toolRegistry = toolRegistry;
    this.memory = memory;
  }

  // Synchronous chat — trả về full response
  async chat(
    userMessage: string,
    context: ToolContext,
    additionalTools?: AdditionalTool[],
  ): Promise<string> {
    const messages = await this.buildMessages(userMessage, context);
    const tools = this.gatherTools(additionalTools);

    let iterations = 0;
    const maxIterations = this.config.maxToolIterations || 10;

    while (iterations < maxIterations) {
      const response = await this.llm.chat(messages, tools);
      iterations++;

      // No tool calls → final response
      if (!response.toolCalls?.length) {
        await this.memory.save(context.sessionId, userMessage, response.content);
        return response.content;
      }

      // Execute tools & add results to messages
      messages.push({
        role: 'assistant',
        content: response.content,
        toolCalls: response.toolCalls,
      });

      const results = await this.executeToolCalls(response.toolCalls, context);
      for (const result of results) {
        messages.push({
          role: 'tool',
          content: JSON.stringify(result.result),
          toolCallId: result.toolCallId,
        });
      }
    }

    return 'Max tool iterations reached';
  }
}
```

---

## 2. buildMessages — コンテキストアセンブリ

```typescript
private async buildMessages(
  userMessage: string,
  context: ToolContext,
): Promise<LLMMessage[]> {
  const messages: LLMMessage[] = [];

  // 1. System prompt
  messages.push({
    role: 'system',
    content: this.buildSystemPrompt(),
  });

  // 2. Memory context (conversation history)
  const history = await this.memory.getHistory(context.sessionId, {
    limit: 20,
    summarizeOlder: true,
  });

  for (const entry of history) {
    messages.push({ role: entry.role, content: entry.content });
  }

  // 3. RAG context (if knowledge base available)
  const ragContext = await this.memory.searchKnowledge(userMessage, context.tenantId);
  if (ragContext.length > 0) {
    messages.push({
      role: 'system',
      content: `Relevant knowledge:\n${ragContext.map(d => d.content).join('\n---\n')}`,
    });
  }

  // 4. Current user message
  messages.push({ role: 'user', content: userMessage });

  return messages;
}

private buildSystemPrompt(): string {
  const parts = [
    this.config.persona || 'You are a helpful AI assistant.',
  ];

  if (this.config.systemPrompt) {
    parts.push(this.config.systemPrompt);
  }

  // Add available tool descriptions
  const tools = this.toolRegistry.getDefinitions();
  if (tools.length > 0) {
    parts.push(`Available tools: ${tools.map(t => t.name).join(', ')}`);
  }

  return parts.join('\n\n');
}
```

---

## 3. ツールの実行サイクル

```typescript
private async executeToolCalls(
  toolCalls: ToolCall[],
  context: ToolContext,
): Promise<ToolResult[]> {
  const results: ToolResult[] = [];

  for (const call of toolCalls) {
    console.log(`[Agent] Executing tool: ${call.name}`);
    const start = performance.now();

    try {
      const result = await this.toolRegistry.execute(
        call.name,
        call.arguments,
        context,
      );

      results.push({
        ...result,
        toolCallId: call.id,
      });
    } catch (error) {
      results.push({
        toolCallId: call.id,
        success: false,
        result: null,
        error: error instanceof Error ? error.message : String(error),
        duration: performance.now() - start,
      });
    }
  }

  return results;
}

private gatherTools(additional?: AdditionalTool[]): ToolDefinition[] {
  const tools = [...this.toolRegistry.getDefinitions()];

  if (additional) {
    for (const tool of additional) {
      // Register temporarily
      this.toolRegistry.register(tool.definition, tool.handler);
      tools.push(tool.definition);
    }
  }

  return tools;
}
```

---

## 4. フロー図

```
User Message
    │
    ▼
buildMessages()
    │ system prompt + history + RAG context + user message
    ▼
LLM.chat(messages, tools)
    │
    ├── No tool_calls → Return response ✅
    │
    └── Has tool_calls
         │
         ▼
    executeToolCalls()
         │ results added to messages
         ▼
    Loop back to LLM.chat() ←─── (max N iterations)
```

**各反復:** LLM は追加のツール結果を受け取り、追加のツールを呼び出すか、最終的な回答を返すことができます。

---

## 5. まとめ

- **エージェント** はチャット フロー全体を調整します - ビジネス ロジックはなく、調整のみです
- **buildMessages()** — 複数のソースからのアセンブリ コンテキスト
- **ツール ループ** — LLM がどのツールを何回呼び出すかを決定します
- **maxToolIterations** — 無限ループを回避するための安全制限

**次の記事:** ストリーミングと EventBus — リアルタイムの応答配信。
