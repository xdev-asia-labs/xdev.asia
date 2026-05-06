---
id: 019c961a-aa08-7008-e008-aa0800000008
title: 'Lesson 8: Streaming & EventBus — Real-time Responses'
slug: bai-8-streaming-eventbus
description: >-
  Implement streaming chat: SSE (Server-Sent Events), AsyncGenerator, EventBus
  pattern. Token-by-token delivery, tool execution events, progress tracking.
  Backpressure handling.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 2: LLM Engine & Agent Core'
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: Building AI Agent Platform from Zero — Real battle with xClaw
  slug: xay-dung-ai-agent-platform
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1468" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1468)"/>

  <!-- Decorations -->
  <g>
    <circle cx="989" cy="237" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="878" cy="46" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="767" cy="115" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="656" cy="184" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="253" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1033.3730669589463,176 1033.3730669589463,218 997,239 960.6269330410536,218 960.6269330410536,176 997,155" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI & ML — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 8: Streaming & EventBus — Real-time</tspan>
      <tspan x="60" dy="42">Responses</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Building AI Agent Platform from Zero — Real battle with xClaw</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: LLM Engine & Agent Core</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Users do not want to wait 10 seconds to receive the entire response. Streaming allows for token-by-token delivery — users see results immediately. This article implements streaming with AsyncGenerator + SSE.

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

## 5. Summary

- **AsyncGenerator** — elegant streaming API, composable
- **SSE** — HTTP-native, no WebSocket needed, auto-reconnect
- **EventBus** — decouple side effects (audit, billing, metrics) from main flow
- **Backpressure** — reader.read() handles itself

**Next article:** Document Processor — Document processing for RAG Pipeline.
