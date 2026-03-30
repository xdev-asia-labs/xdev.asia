---
id: 019c961a-aa08-7008-e008-aa0800000008
title: "Bài 8: Streaming & EventBus — Real-time Responses"
slug: bai-8-streaming-eventbus
description: >-
  Implement streaming chat: SSE (Server-Sent Events), AsyncGenerator,
  EventBus pattern. Token-by-token delivery, tool execution events,
  progress tracking. Backpressure handling.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: LLM Engine & Agent Core"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

User không muốn đợi 10 giây để nhận toàn bộ response. Streaming cho phép delivery token-by-token — user thấy kết quả ngay lập tức. Bài này implement streaming với AsyncGenerator + SSE.

---

## 1. Agent chatStream()

```typescript
// packages/core/src/agent/agent.ts
async *chatStream(
  userMessage: string,
  context: ToolContext,
  additionalTools?: AdditionalTool[],
): AsyncGenerator<StreamEvent> {
  const messages = await this.buildMessages(userMessage, context);
  const tools = this.gatherTools(additionalTools);

  let iterations = 0;
  const maxIterations = this.config.maxToolIterations || 10;

  while (iterations < maxIterations) {
    let fullContent = '';
    const toolCalls: ToolCall[] = [];
    const toolCallArgs = new Map<string, string>();

    // Stream from LLM
    for await (const event of this.llm.chatStream(messages, tools)) {
      switch (event.type) {
        case 'text-delta':
          fullContent += event.delta;
          yield event; // Forward to client immediately
          break;

        case 'tool-call-start':
          yield event;
          break;

        case 'tool-call-args':
          const existing = toolCallArgs.get(event.toolCallId) || '';
          toolCallArgs.set(event.toolCallId, existing + event.args);
          yield event;
          break;

        case 'tool-call-end':
          const args = toolCallArgs.get(event.toolCallId) || '{}';
          toolCalls.push({
            id: event.toolCallId,
            name: '', // set from tool-call-start
            arguments: JSON.parse(args),
          });
          yield event;
          break;

        case 'finish':
          yield event;
          break;
      }
    }

    iterations++;

    // No tool calls → done
    if (toolCalls.length === 0) {
      await this.memory.save(context.sessionId, userMessage, fullContent);
      return;
    }

    // Execute tools & stream results
    messages.push({
      role: 'assistant',
      content: fullContent,
      toolCalls,
    });

    const results = await this.executeToolCalls(toolCalls, context);
    for (const result of results) {
      yield { type: 'tool-result', toolCallId: result.toolCallId, result };
      messages.push({
        role: 'tool',
        content: JSON.stringify(result.result),
        toolCallId: result.toolCallId,
      });
    }
    // Loop back — LLM receives tool results
  }
}
```

---

## 2. SSE Endpoint

```typescript
// packages/gateway/src/routes/chat.ts
app.post('/api/chat/stream', async (c) => {
  const { message, sessionId, model } = await c.req.json();
  const user = c.get('user');

  const context: ToolContext = {
    tenantId: user.tenantId,
    userId: user.sub,
    sessionId,
  };

  return streamSSE(c, async (stream) => {
    const generator = agent.chatStream(message, context);

    for await (const event of generator) {
      await stream.writeSSE({
        event: event.type,
        data: JSON.stringify(event),
      });
    }
  });
});
```

---

## 3. EventBus Pattern

```typescript
// packages/core/src/events/event-bus.ts
type EventHandler<T = unknown> = (data: T) => void | Promise<void>;

export class EventBus {
  private handlers = new Map<string, Set<EventHandler>>();

  on<T>(event: string, handler: EventHandler<T>) {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, new Set());
    }
    this.handlers.get(event)!.add(handler as EventHandler);

    // Return unsubscribe function
    return () => this.handlers.get(event)?.delete(handler as EventHandler);
  }

  async emit<T>(event: string, data: T) {
    const handlers = this.handlers.get(event);
    if (!handlers) return;

    await Promise.all(
      Array.from(handlers).map(h => h(data)),
    );
  }
}

// Usage
const bus = new EventBus();
bus.on('chat:start', ({ sessionId }) => auditLog.log('chat_started', sessionId));
bus.on('tool:executed', ({ name, duration }) => metrics.recordToolExecution(name, duration));
bus.on('chat:complete', ({ usage }) => billing.recordUsage(usage));
```

---

## 4. Client-side Consumption

```typescript
// Frontend: consuming SSE stream
async function streamChat(message: string) {
  const response = await fetch('/api/chat/stream', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ message, sessionId }),
  });

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const event = JSON.parse(line.slice(6));
        handleStreamEvent(event);
      }
    }
  }
}

function handleStreamEvent(event: StreamEvent) {
  switch (event.type) {
    case 'text-delta':
      appendToChat(event.delta); // Append token to UI
      break;
    case 'tool-call-start':
      showToolIndicator(event.toolName); // Show "Searching..."
      break;
    case 'tool-result':
      hideToolIndicator();
      break;
  }
}
```

---

## 5. Tổng kết

- **AsyncGenerator** — elegant streaming API, composable
- **SSE** — HTTP-native, no WebSocket needed, auto-reconnect
- **EventBus** — decouple side effects (audit, billing, metrics) from main flow
- **Backpressure** — reader.read() tự handle

**Bài tiếp theo:** Document Processor — Xử lý tài liệu cho RAG Pipeline.
