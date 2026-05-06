---
id: 019c961a-aa01-7001-e001-aa0100000001
title: 'Lesson 1: Overview of AI Agent Platform architecture'
slug: bai-1-tong-quan-kien-truc
description: >-
  Why need a platform instead of a single script? Gateway + Monorepo
  architecture, Dual-Database Design (PostgreSQL + MongoDB + Redis), tech stack
  decisions. Analyze xClaw source code.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 0
section_title: 'Part 1: Monorepo Architecture & Platform'
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: Building AI Agent Platform from Zero — Real battle with xClaw
  slug: xay-dung-ai-agent-platform
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: Overview of AI Agent architecture</tspan>
      <tspan x="60" dy="42">Platform</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Building AI Agent Platform from Zero — Real battle with xClaw</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Monorepo Architecture & Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

You can write a Python script that calls the OpenAI API in 20 lines of code. But when needed:

- Support **10 different LLM providers** with automatic fallback?
- **Multi-tenant** — many organizations share the same platform but data isolated?
- **Visual workflow builder** so people who don't know how to code can create AI pipelines?
- **Plugin system** expands according to each industry (Healthcare, Finance, Legal)?
- **Chat channels** connect Telegram, Discord, Slack, Zalo at the same time?

Then you need an **AI Agent Platform** — not a script.

---

## 1. Why do we need Platform?

### 1.1 Script vs Platform

| Aspect | Single script | AI Agent Platform |
|-----------|--------------|-------------------|
| LLM Provider | Hardcode 1 provider | 10+ providers, auto-fallback |
| Users | 1 developer | Multi-tenant, RBAC |
| Knowledge | None | RAG Pipeline + Knowledge Base |
| Automation | Manual triggers | Visual Workflow Engine |
| Extensibility | Edit code | Plugin system, Domain Packs |
| Channels | CLI / API | Telegram, Discord, Slack, Web... |
| Monitoring | console.log | Audit logs, metrics, dashboard |

### 1.2 Practical problems

Imagine you're building AI for a company:

```
CEO:     "Tôi muốn chatbot hỗ trợ khách hàng trên Telegram và Zalo"
CTO:     "Phải hỗ trợ nhiều LLM, có thể chuyển provider khi cần"
Dev:     "Cần workflow automation cho quy trình nội bộ"
Legal:   "Data giữa các phòng ban phải cách ly, có audit log"
Finance: "Agent phải hiểu domain tài chính"
```

One script cannot satisfy everything. You need a **platform**.

---

## 2. xClaw overview architecture

xClaw uses **Gateway + Monorepo** architecture:

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

### 2.1 Why this architecture?

**Gateway Pattern:**
- A single entry point for all clients
- Middleware chain: Auth → RBAC → Rate Limit → Route Handler
- Easy to add new channels without affecting the core

**Monorepo Pattern:**
- Shared types between all packages
- Build order is clear with project references
- Atomic changes — edit type definition, all packages updated at the same time

---

## 3. Dual-Database Design

Most important architectural decision: **separate database according to data nature**.

### 3.1 PostgreSQL — Structured Config Data

```
tenants ──┬── tenantSettings
          ├── users ──── userRoles ──── roles ──── rolePermissions ──── permissions
          ├── oauthAccounts
          ├── workflows ──── workflowExecutions
          ├── integrationConnections
          └── webhooks
```

**Why PostgreSQL?**
- ACID transactions — ensures consistency for user/role operations
- Relational joins — query user permissions across multiple tables
- Drizzle ORM — type-safe, compile-time SQL validation
- Schema migrations — version control database schema

### 3.2 MongoDB — Flexible AI Data

```
sessions ──── messages
agent_configs
memory_entries
audit_logs (TTL: 90 days)
system_logs (TTL: 30 days)
```

**Why MongoDB?**
- Flexible schema — AI messages have complex structures (tool calls, images, embeddings)
- Time-series TTL — auto-cleanup audit logs, system logs
- Document storage — no need to normalize chat history
- High write throughput — many concurrent chat sessions

### 3.3 Redis — In-Memory Cache

- Session cache — avoid database roundtrip per request
- Rate limiting counters
- Real-time metrics aggregation

---

## 4. Tech Stack Decisions

| Decision | Choice | Alternatives considered | Reason |
|----------|--------|---------------------|-------|
| Language | TypeScript | Python, Go, Rust | Full-stack (backend + frontend), good LLM SDK ecosystem |
| API Framework | Honor | Express, Fastify, Koa | Lightweight, Web Standards, edge-ready, good middleware |
| Frontend | React 19 + Vite | Next.js, Vue, Svelte | Vite HMR is fast, the largest React ecosystem |
| State Mgmt | Zustand | Redux, Jotai, MobX | Lightweight, no boilerplate |
| PG ORM | Drizzle | Prisma, TypeORM, Kysely | Type-safe SQL, no runtime overhead, easy custom queries |
| Auth | JWT + bcrypt | Passport.js, Auth0 | Self-hosted, simple, no 3rd party dependencies |
| Build | Docker | K8s, bare metal | Docker Compose for devs, easy to scale to K8s later |
| Modules | ESM | CommonJS | Standard, tree-shaking, top-level await |

---

## 5. Monorepo structure

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

### Build Order (Project References)

```
shared → db → core → integrations → domains → ml → skills → skill-hub → gateway → server
```

Each package clearly declares its dependencies `tsconfig.json` project references. Build `server` will automatically build all dependencies in order.

---

## 6. Hands-on: Explore xClaw

### 6.1 Clone & run

```bash
git clone --recurse-submodules https://github.com/xdev-asia-labs/xClaw.git
cd xClaw
cp .env.example .env
docker compose up --build
```

### 6.2 Access

- **Frontend:** http://localhost:3001
- **API:** http://localhost:3000
- **Health check:** http://localhost:3000/health

```bash
# Login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@xclaw.io", "password": "password123"}'

# Kết quả: {"token": "eyJhbG..."}
```

### 6.3 Explore source code

Open the IDE and take a look at the main files:

| File | Function |
|-----|-----------|
| `packages/shared/src/types/` | All TypeScript types |
| `packages/core/src/agent/agent.ts` | Agent class — the heart of the platform |
| `packages/core/src/llm/llm-router.ts` | LLM routing & fallback |
| `packages/core/src/rag/rag-engine.ts` | Complete RAG pipeline |
| `packages/core/src/workflow/workflow-engine.ts` | Workflow execution |
| `packages/gateway/src/gateway.ts` | Hono server setup |
| `packages/db/src/schema/` | Database schema |

---

## 7. Summary

In this article you have understood:

- **Why do we need AI Agent Platform** instead of a single script
- **Gateway + Monorepo Architecture** — efficient code organization
- **Dual-Database Design** — PostgreSQL for config, MongoDB for AI data, Redis for cache
- **Tech stack decisions** — reasons for choosing TypeScript, Hono, Drizzle, React
- **Source code structure** of xClaw

**Next article:** We will start setting up TypeScript monorepo from scratch — npm workspaces, project references, shared types.
