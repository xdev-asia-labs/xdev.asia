---
id: 019c961a-aa01-7001-e001-aa0100000001
title: 第 1 課：AI Agent 平台架構概述
slug: bai-1-tong-quan-kien-truc
description: >-
  為什麼需要一個平台而不是單一腳本？ Gateway + Monorepo 架構、雙資料庫設計（PostgreSQL + MongoDB +
  Redis）、技術堆疊決策。分析 xClaw 源代码。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 0
section_title: 第 1 部分：Monorepo 架構與平台
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: 從零開始搭建AI代理平台－與xClaw實戰
  slug: xay-dung-ai-agent-platform
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1290" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1290)"/>

  <!-- Decorations -->
  <g>
    <circle cx="992" cy="226" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="884" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="776" cy="270" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="668" cy="162" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="54" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.507041555162,145.5 1001.507041555162,186.5 966,207 930.492958444838,186.5 930.492958444838,145.5 966,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：AI Agent 架構概述</tspan>
      <tspan x="60" dy="42">平台</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從零開始搭建AI代理平台－與xClaw實戰</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Monorepo 架構與平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

您可以用 20 行程式碼編寫一個呼叫 OpenAI API 的 Python 腳本。但當需要時：

- 支援**10個不同的法學碩士提供者**並具有自動回退功能？
- **多租戶** — 許多組織共享相同的平台但資料隔離？
- **視覺化工作流程建立器**，因此不知道如何編碼的人也可以建立 AI 管道？
- **插件系統**根據每個行業（醫療保健、金融、法律）進行擴展？
- **聊天頻道**同時連接 Telegram、Discord、Slack、Zalo？

那麼您需要一個**人工智慧代理平台**——而不是腳本。

---

## 1. 為什麼需要平台？

### 1.1 腳本與平台

|方面|單一腳本 |人工智慧代理平台|
|------------|--------------|--------------------|
|法學碩士提供者|硬編碼 1 提供者 | 10+ 供應商，自動回退 |
|使用者 | 1 開發人員 |多租用戶、RBAC |
|知識 |無 | RAG 管道 + 知識庫 |
|自動化|手動觸發器|視覺化工作流程引擎|
|可擴充性|編輯代碼 |外掛系統、網域包 |
|頻道 | CLI / API | Telegram、Discord、Slack、Web... |
|監控|控制台日誌 |審核日誌、指標、儀表板 |

### 1.2 實際問題

想像一下您正在為一家公司建立人工智慧：

```
CEO:     "Tôi muốn chatbot hỗ trợ khách hàng trên Telegram và Zalo"
CTO:     "Phải hỗ trợ nhiều LLM, có thể chuyển provider khi cần"
Dev:     "Cần workflow automation cho quy trình nội bộ"
Legal:   "Data giữa các phòng ban phải cách ly, có audit log"
Finance: "Agent phải hiểu domain tài chính"
```

一個劇本並不能滿足一切。你需要一個**平台**。

---

## 2. xClaw 概述架構

xClaw 採用 **Gateway + Monorepo** 架構：

```
┌─────────────────────────────────────────────────────┐
│                    Clients                           │
│  Web App │ Telegram │ Discord │ Slack │ Zalo │ CLI   │
└─────────────────┬───────────────────────────────────┘
                  │ HTTP / WebSocket / Bot APIs
                  ▼
┌─────────────────────────────────────────────────────┐
│              API Gateway (@xclaw-ai/gateway)         │
│              Hono — Port 3000                        │
│  ┌──────┬──────┬──────┬──────┬──────┬──────┐        │
│  │ Auth │ RBAC │ Rate │ CORS │ Audit│ PII  │        │
│  │      │      │Limit │      │ Log  │Filter│        │
│  └──────┴──────┴──────┴──────┴──────┴──────┘        │
├─────────────────────────────────────────────────────┤
│              Core Engine (@xclaw-ai/core)            │
│  ┌──────────┬────────────┬──────────┬────────────┐  │
│  │  Agent   │  LLM       │  RAG     │ Workflow   │  │
│  │  Engine  │  Router    │  Engine  │ Engine     │  │
│  ├──────────┼────────────┼──────────┼────────────┤  │
│  │  Tools   │  Skills    │  Memory  │ Monitoring │  │
│  │  Registry│  Manager   │  Manager │ Store      │  │
│  └──────────┴────────────┴──────────┴────────────┘  │
├─────────────────────────────────────────────────────┤
│                 Data Layer                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │PostgreSQL│  │ MongoDB  │  │  Redis   │          │
│  │(Config)  │  │(AI/Chat) │  │ (Cache)  │          │
│  └──────────┘  └──────────┘  └──────────┘          │
└─────────────────────────────────────────────────────┘
```

### 2.1 為什麼要採用這種架構？

**網關模式：**
- 所有客戶的單一入口點
- 中間件鏈：Auth → RBAC → Rate Limit → Route Handler
- 輕鬆新增頻道而不影響核心

**Monorepo 模式：**
- 所有包之間共用類型
- 建造順序清晰，附有項目參考
- 原子變更 - 編輯類型定義，所有套件同時更新

---

## 3. 雙資料庫設計

最重要的架構決策：**根據資料性質分離資料庫**。

### 3.1 PostgreSQL — 結構化設定數據

```
tenants ──┬── tenantSettings
          ├── users ──── userRoles ──── roles ──── rolePermissions ──── permissions
          ├── oauthAccounts
          ├── workflows ──── workflowExecutions
          ├── integrationConnections
          └── webhooks
```

**為什麼選擇 PostgreSQL？ **
- ACID事務－確保使用者/角色操作的一致性
- 關係連線－跨多個表格查詢使用者權限
- Drizzle ORM — 類型安全、編譯時 SQL 驗證
- 模式遷移—版本控制資料庫模式

### 3.2 MongoDB — 靈活的人工智慧數據

```
sessions ──── messages
agent_configs
memory_entries
audit_logs (TTL: 90 days)
system_logs (TTL: 30 days)
```

**為什麼選擇 MongoDB？ **
- 靈活的模式－人工智慧訊息具有複雜的結構（工具呼叫、圖像、嵌入）
- 時間序列 TTL — 自動清理審核日誌、系統日誌
- 文件儲存－無需標準化聊天記錄
- 高寫入吞吐量－許多並發聊天會話

### 3.3 Redis — 記憶體緩存

- 會話快取－避免每個要求的資料庫往返
- 速率限制計數器
- 即時指標聚合

---

## 4. 技術堆疊決策

|決定|選擇|考慮的替代方案|原因 |
|----------|--------|---------------------|--------|
|語言 |打字稿 | Python、Go、Rust |全端（後端+前端），良好的LLM SDK生態 |
| API架構|榮譽資格 | Express、Fastify、Koa |輕量級、Web 標準、邊緣就緒、良好的中間件 |
|前端 | React 19 + Vite | Next.js、Vue、Svelte | Vite HMR 速度快，最大的 React 生態 |
|國家管理|祖斯坦| Redux、Jotai、MobX |輕量級，無樣板 |
| PG ORM |細雨 | Prisma、TypeORM、Kysely |類型安全的 SQL，無運行時開銷，輕鬆自訂查詢 |
|授權 | JWT + bcrypt | Passport.js、Auth0 |自託管、簡單、無第三方依賴 |
|建造 |碼頭工人 | K8s，裸機 |開發人員的 Docker Compose，以後可輕鬆擴展到 K8s |
|模組 |環境管理 |通用JS |標準、驚天動地、頂級等待|

---

## 5. Monorepo 結構

```
xClaw/
├── packages/
│   ├── shared/          # Foundation types & constants
│   ├── core/            # Agent engine, LLM, RAG, workflow, monitoring
│   │   └── src/
│   │       ├── agent/       # Agent class, EventBus
│   │       ├── llm/         # LLM adapters, router
│   │       ├── rag/         # RAG engine, vector store, embeddings
│   │       ├── workflow/    # Workflow engine, node handlers
│   │       ├── tools/       # Tool registry
│   │       ├── skills/      # Skill manager
│   │       ├── memory/      # Memory manager
│   │       ├── streaming/   # Stream utilities
│   │       ├── monitoring/  # Metrics collection
│   │       ├── guardrails/  # Input/output safety
│   │       ├── tracing/     # Distributed tracing
│   │       └── plugins/     # Plugin loader
│   ├── db/              # Drizzle ORM (PG) + MongoDB driver
│   │   └── src/
│   │       ├── schema/      # Drizzle table definitions
│   │       ├── migrations/  # SQL migrations
│   │       ├── mongo.ts     # MongoDB connection
│   │       ├── seed.ts      # Initial data
│   │       └── monitoring-store.ts
│   ├── gateway/         # Hono HTTP server, all API routes
│   │   └── src/
│   │       ├── auth.ts      # Login, register, JWT
│   │       ├── chat.ts      # Chat endpoint
│   │       ├── knowledge.ts # RAG endpoints
│   │       ├── workflows.ts # Workflow CRUD + execute
│   │       ├── rbac.ts      # RBAC management
│   │       ├── monitoring.ts
│   │       └── ... (30+ route files)
│   ├── server/          # Entry point, startup orchestration
│   ├── integrations/    # 11 service connectors
│   ├── domains/         # 13 industry domain packs
│   ├── skills/          # Built-in skills
│   ├── skill-hub/       # Marketplace, MCP adapters
│   ├── ml/              # 12 ML algorithms, AutoML
│   ├── cli/             # CLI interface
│   ├── sandbox/         # Sandboxed code execution
│   ├── web/             # React frontend
│   └── channels/        # Telegram, Discord, Slack, Zalo, MS Teams
├── docker-compose.yml
├── Dockerfile
└── package.json
```

### 建置順序（項目參考）

```
shared → db → core → integrations → domains → ml → skills → skill-hub → gateway → server
```

每個包都清楚地聲明了它的依賴關係 `tsconfig.json` 項目參考。建構 `server` 將自動按順序建立所有依賴項。

---

## 6. 實踐：探索 xClaw

### 6.1 克隆並運行

```bash
git clone --recurse-submodules https://github.com/xdev-asia-labs/xClaw.git
cd xClaw
cp .env.example .env
docker compose up --build
```

### 6.2 訪問

- **前端：** http://localhost:3001
- **API：** http://localhost:3000
- **健康檢查：** http://localhost:3000/health

```bash
# Login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@xclaw.io", "password": "password123"}'

# Kết quả: {"token": "eyJhbG..."}
```

### 6.3 探索原始碼

打開IDE，看一下主要檔案：

|文件 |功能|
|-----|------------|
| `packages/shared/src/types/` |所有 TypeScript 類型 |
| `packages/core/src/agent/agent.ts` |代理類別－平台的核心|
| `packages/core/src/llm/llm-router.ts` | LLM路由與後備|
| `packages/core/src/rag/rag-engine.ts` |完整的 RAG 管道 |
| `packages/core/src/workflow/workflow-engine.ts` |工作流程執行 |
| `packages/gateway/src/gateway.ts` |榮譽伺服器設定|
| `packages/db/src/schema/` |資料庫架構|

---

## 7. 總結

透過這篇文章您已經了解了：

- **為什麼我們需要人工智慧代理平台**而不是單一腳本
- **Gateway + Monorepo Architecture** — 高效率的程式碼組織
- **雙資料庫設計** — PostgreSQL用於配置，MongoDB用於AI數據，Redis用於緩存
- **技術堆疊決策** — 選擇 TypeScript、Hono、Drizzle、React 的原因
- xClaw的**原始碼結構**

**下一篇文章：** 我們將從頭開始設定 TypeScript monorepo — npm 工作區、專案參考、共用類型。
