---
id: 019c961a-aa06-7006-e006-aa0600000006
title: 第 6 課：工具註冊 — 註冊與執行工具
slug: bai-6-tool-registry
description: 建立工具註冊表：註冊工具、驗證、沙盒執行。 ToolHandler 介面、參數模式、逾時和錯誤處理。安全性：沙盒與可信任執行。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：LLM 引擎和代理核心
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: 從零開始搭建AI代理平台－與xClaw實戰
  slug: xay-dung-ai-agent-platform
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3454" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3454)"/>

  <!-- Decorations -->
  <g>
    <circle cx="876" cy="58" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="652" cy="154" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="928" cy="250" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="704" cy="86" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="980" cy="182" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="98" x2="1100" y2="178" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="128" x2="1050" y2="198" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1076.5788383248864,231.5 1076.5788383248864,264.5 1048,281 1019.4211616751136,264.5 1019.4211616751135,231.5 1048,215" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：工具註冊 — 註冊與執行</tspan>
      <tspan x="60" dy="42">工具</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從零開始搭建AI代理平台－與xClaw實戰</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：LLM 引擎和代理核心</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

人工智慧代理需要與外界互動的工具－網路搜尋、資料庫查詢、程式碼執行。工具註冊表管理所有工具的生命週期：註冊、驗證、執行和安全。

---

## 1.ToolHandler介面

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

工具處理程序是接收參數+上下文並傳回任何結果的函數。

---

## 2. 工具註冊表實現

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

## 3.內建工具

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

## 4. 沙盒執行

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

**安全原理：** 工具標記 `sandbox: { required: true }` 僅在虛擬機器沙箱中運作 - 無法存取檔案系統、網路或進程。

---

## 5. 總結

- **ToolHandler** — 簡單的功能介面： `(args, context) => Promise<result>`
- **ToolRegistry** — 用於註冊/取消註冊/執行的註冊表模式
- **並行執行** — `executeAll()` 並行運行工具
- **沙箱** — 針對不可信程式碼的基於虛擬機器的隔離

**下一篇：** 建築代理類－平台的協調中心。
