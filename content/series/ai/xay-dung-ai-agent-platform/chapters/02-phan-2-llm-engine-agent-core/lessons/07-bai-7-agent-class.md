---
id: 019c961a-aa07-7007-e007-aa0700000007
title: "Bài 7: Agent Class — Orchestrator trung tâm"
slug: bai-7-agent-class
description: >-
  Thiết kế Agent class: chat loop, tool execution cycle, message
  management. buildMessages(), executeToolCalls(), streaming
  response. AdditionalTool interface, multi-turn conversations.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: LLM Engine & Agent Core"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

Agent class là trung tâm điều phối — nó kết nối LLM Router, Tool Registry, và Memory. Mỗi lần user gửi message, Agent orchestrate entire flow: build messages → call LLM → execute tools → loop lại nếu cần.

---

## 1. Agent Class Structure

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

## 2. buildMessages — Context Assembly

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

## 3. Tool Execution Cycle

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

## 4. Flow Diagram

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

**Mỗi iteration:** LLM nhận thêm tool results → có thể gọi thêm tools hoặc trả final answer.

---

## 5. Tổng kết

- **Agent** orchestrate entire chat flow — không business logic, chỉ coordination
- **buildMessages()** — assembly context từ nhiều nguồn
- **Tool loop** — LLM tự quyết định gọi tool nào, bao nhiêu lần
- **maxToolIterations** — safety limit tránh infinite loop

**Bài tiếp theo:** Streaming & EventBus — Real-time response delivery.
