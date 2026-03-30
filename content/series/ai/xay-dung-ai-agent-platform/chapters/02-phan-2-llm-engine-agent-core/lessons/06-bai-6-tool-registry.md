---
id: 019c961a-aa06-7006-e006-aa0600000006
title: "Bài 6: Tool Registry — Đăng ký & Thực thi Tools"
slug: bai-6-tool-registry
description: >-
  Xây dựng Tool Registry: đăng ký tools, validation, sandboxed
  execution. ToolHandler interface, parameter schema, timeout &
  error handling. Security: sandboxed vs trusted execution.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: LLM Engine & Agent Core"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

AI agents cần tools để tương tác với thế giới bên ngoài — web search, database queries, code execution. Tool Registry quản lý lifecycle của tất cả tools: đăng ký, validation, execution, và security.

---

## 1. ToolHandler Interface

```typescript
// packages/core/src/tools/types.ts
export type ToolHandler = (
  args: Record<string, unknown>,
  context: ToolContext,
) => Promise<unknown>;

export interface ToolContext {
  tenantId: string;
  userId: string;
  sessionId: string;
  abortSignal?: AbortSignal;
}
```

Tool handler là một function nhận arguments + context, trả về kết quả bất kỳ.

---

## 2. Tool Registry Implementation

```typescript
// packages/core/src/tools/tool-registry.ts
export class ToolRegistry {
  private tools = new Map<string, {
    definition: ToolDefinition;
    handler: ToolHandler;
  }>();

  register(definition: ToolDefinition, handler: ToolHandler) {
    if (this.tools.has(definition.name)) {
      throw new Error(`Tool "${definition.name}" already registered`);
    }
    this.tools.set(definition.name, { definition, handler });
  }

  unregister(name: string) {
    this.tools.delete(name);
  }

  getDefinitions(): ToolDefinition[] {
    return Array.from(this.tools.values()).map(t => t.definition);
  }

  async execute(
    name: string,
    args: Record<string, unknown>,
    context: ToolContext,
  ): Promise<ToolResult> {
    const tool = this.tools.get(name);
    if (!tool) {
      return {
        toolCallId: '',
        success: false,
        result: null,
        error: `Unknown tool: ${name}`,
        duration: 0,
      };
    }

    const start = performance.now();
    try {
      const result = await tool.handler(args, context);
      return {
        toolCallId: '',
        success: true,
        result,
        duration: performance.now() - start,
      };
    } catch (error) {
      return {
        toolCallId: '',
        success: false,
        result: null,
        error: error instanceof Error ? error.message : String(error),
        duration: performance.now() - start,
      };
    }
  }

  // Execute all tool calls from LLM response
  async executeAll(
    toolCalls: ToolCall[],
    context: ToolContext,
  ): Promise<ToolResult[]> {
    return Promise.all(
      toolCalls.map(async (call) => {
        const result = await this.execute(call.name, call.arguments, context);
        return { ...result, toolCallId: call.id };
      }),
    );
  }
}
```

---

## 3. Built-in Tools

```typescript
// packages/core/src/tools/builtin/web-search.ts
export const webSearchTool: ToolDefinition = {
  name: 'web_search',
  description: 'Search the web for current information',
  parameters: {
    type: 'object',
    properties: {
      query: { type: 'string', description: 'Search query' },
      maxResults: { type: 'number', description: 'Max results (1-10)' },
    },
    required: ['query'],
  },
};

export const webSearchHandler: ToolHandler = async (args) => {
  const { query, maxResults = 5 } = args as { query: string; maxResults?: number };

  const results = await fetch(`https://api.search.example/search?q=${encodeURIComponent(query)}&limit=${maxResults}`);
  return results.json();
};
```

```typescript
// packages/core/src/tools/builtin/code-interpreter.ts
export const codeInterpreterTool: ToolDefinition = {
  name: 'execute_code',
  description: 'Execute JavaScript/TypeScript code in a sandbox',
  parameters: {
    type: 'object',
    properties: {
      code: { type: 'string', description: 'Code to execute' },
      language: { type: 'string', enum: ['javascript', 'typescript', 'python'] },
    },
    required: ['code'],
  },
  sandbox: { required: true },
};
```

---

## 4. Sandboxed Execution

```typescript
// packages/core/src/tools/sandbox.ts
import { runInNewContext } from 'node:vm';

export interface SandboxToolExecutor {
  execute(code: string): Promise<unknown>;
}

export class VMSandbox implements SandboxToolExecutor {
  async execute(code: string): Promise<unknown> {
    const context = {
      console: { log: (...args: unknown[]) => args },
      Math,
      JSON,
      Date,
      // NO access to: fs, process, require, import, fetch
    };

    return runInNewContext(code, context, {
      timeout: 5000,          // 5s max
      displayErrors: true,
    });
  }
}
```

**Security principle:** Tools marked `sandbox: { required: true }` chỉ được chạy trong VM sandbox — không có access tới filesystem, network, hay process.

---

## 5. Tổng kết

- **ToolHandler** — function interface đơn giản: `(args, context) => Promise<result>`
- **ToolRegistry** — registry pattern cho register/unregister/execute
- **Parallel execution** — `executeAll()` chạy tools song song
- **Sandbox** — VM-based isolation cho untrusted code

**Bài tiếp theo:** Xây dựng Agent Class — trung tâm điều phối của platform.
