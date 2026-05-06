---
id: 019c961a-aa02-7002-e002-aa0200000002
title: 第 2 課：使用 npm 工作區設定 TypeScript Monorepo
slug: bai-2-setup-typescript-monorepo
description: >-
  從頭開始建立 monorepo：npm 工作區、tsconfig 專案參考、共用類型、建置順序。套件結構：共用→資料庫→核心→網關→伺服器。 ESM
  模組、路徑別名。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：Monorepo 架構與平台
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: 從零開始搭建AI代理平台－與xClaw實戰
  slug: xay-dung-ai-agent-platform
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9447" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9447)"/>

  <!-- Decorations -->
  <g>
    <circle cx="603" cy="219" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="606" cy="282" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="609" cy="85" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="612" cy="148" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="615" cy="211" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="169" x2="1100" y2="249" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="199" x2="1050" y2="269" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1007.1051177665153,147 1007.1051177665153,191 969,213 930.8948822334847,191 930.8948822334847,147 969,125" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：使用 npm 設定 TypeScript Monorepo</tspan>
      <tspan x="60" dy="42">工作空間</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從零開始搭建AI代理平台－與xClaw實戰</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Monorepo 架構與平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Monorepo 允許管理儲存庫中的所有套件 - 共用類型、建置順序和原子變更。本文將引導您從頭開始完成設定。

---

## 1.初始化Monorepo

### 1.1 原始Package.json

```json
{
  "name": "xclaw",
  "private": true,
  "type": "module",
  "workspaces": [
    "packages/*",
    "packages/channels/*"
  ],
  "scripts": {
    "build": "npm run build --workspaces --if-present",
    "dev": "concurrently \"npm run dev:server\" \"npm run dev:web\"",
    "dev:server": "npm run dev -w @xclaw-ai/server",
    "dev:web": "npm run dev -w @xclaw-ai/web",
    "test": "vitest",
    "lint": "eslint packages/*/src"
  },
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=10.0.0"
  }
}
```

### 1.2 建立套件結構

```bash
mkdir -p packages/{shared,core,db,gateway,server,integrations,domains,skills,ml,web}/src
```

---

## 2. 共享套件－基礎類型

### 2.1 套件/共享/package.json

```json
{
  "name": "@xclaw-ai/shared",
  "version": "1.0.0",
  "type": "module",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc -b",
    "dev": "tsc -b --watch"
  },
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    }
  }
}
```

### 2.2 共享類型

```typescript
// packages/shared/src/types/agent.ts
export interface AgentConfig {
  id: string;
  name: string;
  persona: string;
  systemPrompt?: string;
  llm: LLMConfig;
  maxToolIterations: number;
}

export interface LLMConfig {
  provider: string;
  model?: string;
  apiKey?: string;
  baseUrl?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface LLMMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
  images?: string[];
  toolCalls?: ToolCall[];
  toolCallId?: string;
}

export interface LLMResponse {
  content: string;
  toolCalls?: ToolCall[];
  usage?: { promptTokens: number; completionTokens: number; totalTokens: number };
  finishReason?: 'stop' | 'tool_calls' | 'length';
}
```

```typescript
// packages/shared/src/types/tools.ts
export interface ToolDefinition {
  name: string;
  description: string;
  parameters: {
    type: 'object';
    properties: Record<string, {
      type: string;
      description: string;
      enum?: string[];
    }>;
    required?: string[];
  };
  sandbox?: { required: boolean };
}

export interface ToolCall {
  id: string;
  name: string;
  arguments: Record<string, unknown>;
}

export interface ToolResult {
  toolCallId: string;
  success: boolean;
  result: unknown;
  error?: string;
  duration: number;
}
```

```typescript
// packages/shared/src/types/streaming.ts
export type StreamEvent =
  | { type: 'text-delta'; delta: string }
  | { type: 'tool-call-start'; toolCallId: string; toolName: string }
  | { type: 'tool-call-args'; toolCallId: string; args: string }
  | { type: 'tool-call-end'; toolCallId: string }
  | { type: 'tool-result'; toolCallId: string; result: ToolResult }
  | { type: 'finish'; usage?: LLMResponse['usage'] }
  | { type: 'error'; error: string };
```

---

## 3. TypeScript 專案參考

### 3.1 根 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true
  }
}
```

### 3.2 套件級 tsconfig

```json
// packages/core/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
    "composite": true
  },
  "include": ["src"],
  "references": [
    { "path": "../shared" },
    { "path": "../db" }
  ]
}
```

### 3.3 建置順序

```
shared (0 deps)
  ↓
db (depends on shared)
  ↓
core (depends on shared, db)
  ↓
integrations (depends on shared, core)
domains (depends on shared, core)
ml (depends on shared, core)
  ↓
skills (depends on shared, core)
skill-hub (depends on shared, core, skills)
  ↓
gateway (depends on shared, db, core, integrations, domains, skills)
  ↓
server (depends on all)
```

---

## 4. npm 工作區指令

```bash
# Install dependencies cho tất cả packages
npm install

# Build tất cả packages theo dependency order
npm run build

# Chạy script trong package cụ thể
npm run dev -w @xclaw-ai/server

# Thêm dependency vào package
npm install hono -w @xclaw-ai/gateway

# Thêm internal dependency
# (npm workspaces tự link qua symlinks)
npm install @xclaw-ai/shared -w @xclaw-ai/core
```

---

## 5.ESM 配置

xClaw 完全使用 ESM（ECMAScript 模組）：

```typescript
// ✅ ESM imports — phải có .js extension
import { Agent } from './agent/agent.js';
import { LLMRouter } from '../llm/llm-router.js';
import type { AgentConfig } from '@xclaw-ai/shared';

// ❌ CommonJS — KHÔNG dùng
// const { Agent } = require('./agent');
```

**重要提示：** 導入路徑必須存在 `.js` 即使來源檔案是副檔名 `.ts`。 TypeScript 編譯器將會正確解析。

---

## 6. 總結

您已經了解：
- 設定 npm 工作區 monorepo
- 建立共享類型包
- 用於建置順序的 TypeScript 專案參考
- ESM模組配置

**下一篇：** 使用 PostgreSQL (Drizzle ORM) + MongoDB 設計雙資料庫。
