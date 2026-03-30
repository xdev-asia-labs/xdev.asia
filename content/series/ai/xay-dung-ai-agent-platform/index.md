---
id: 019c9619-bb03-7003-c003-bb0300000003
title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
slug: xay-dung-ai-agent-platform
description: >-
  Series thực chiến xây dựng AI Agent Platform hoàn chỉnh bằng TypeScript —
  từ thiết kế monorepo, LLM Router, Tool Registry, RAG Pipeline, Workflow Engine,
  Multi-tenant RBAC đến deploy Docker production. Học qua mã nguồn thực tế của
  xClaw — open-source platform đang chạy production.
featured_image: uploads/2026/03/ai-agent-platform-banner-2026.png
level: intermediate
duration_hours: 60
lesson_count: 20
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-30T10:00:00.000000Z'
created_at: '2026-03-30T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI & Machine Learning
  slug: ai-machine-learning
tags:
  - name: AI Agents
    slug: ai-agents
  - name: TypeScript
    slug: typescript
  - name: monorepo
    slug: monorepo
  - name: Hono
    slug: hono
  - name: React
    slug: react
  - name: RAG
    slug: rag
  - name: MCP
    slug: mcp
  - name: workflow
    slug: workflow
  - name: multi-tenant
    slug: multi-tenant
  - name: rbac
    slug: rbac
  - name: Docker
    slug: docker
  - name: postgresql
    slug: postgresql
  - name: mongodb
    slug: mongodb
  - name: open-source
    slug: open-source
  - name: hands-on
    slug: hands-on
  - name: production
    slug: production
sections:
  - id: section-01
    title: "Phần 1: Kiến trúc & Nền tảng Monorepo"
    description: Thiết kế kiến trúc AI platform, setup TypeScript monorepo, dual-database
    sort_order: 1
    lessons:
      - id: 019c961a-aa01-7001-e001-aa0100000001
        title: "Bài 1: Tổng quan kiến trúc AI Agent Platform"
        slug: bai-1-tong-quan-kien-truc
        description: >-
          Tại sao cần một platform thay vì script đơn lẻ? Kiến trúc Gateway +
          Monorepo, Dual-Database Design (PostgreSQL + MongoDB + Redis), tech
          stack decisions. Phân tích source code xClaw.
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c961a-aa02-7002-e002-aa0200000002
        title: "Bài 2: Setup TypeScript Monorepo với npm Workspaces"
        slug: bai-2-setup-typescript-monorepo
        description: >-
          Tạo monorepo từ đầu: npm workspaces, tsconfig project references,
          shared types, build order. Cấu trúc packages: shared → db → core →
          gateway → server. ESM modules, path aliases.
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c961a-aa03-7003-e003-aa0300000003
        title: "Bài 3: Dual-Database — PostgreSQL (Drizzle ORM) + MongoDB"
        slug: bai-3-dual-database
        description: >-
          Thiết kế schema PostgreSQL với Drizzle ORM cho config data. MongoDB
          driver cho AI/chat data. Migrations, seed data, connection pooling.
          Database abstraction layer.
        duration_minutes: 180
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019c961a-aa04-7004-e004-aa0400000004
        title: "Bài 4: API Gateway với Hono — Routes, Middleware, Auth"
        slug: bai-4-api-gateway-hono
        description: >-
          Xây HTTP server với Hono: routing, middleware chain, CORS, rate
          limiting. JWT authentication, password hashing, OAuth2 flow.
          Request validation và error handling.
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: "Phần 2: LLM Engine & Agent Core"
    description: Xây dựng LLM Router, Agent class, Tool Registry và streaming
    sort_order: 2
    lessons:
      - id: 019c961a-aa05-7005-e005-aa0500000005
        title: "Bài 5: LLM Router — Adapter Pattern cho Multi-Provider"
        slug: bai-5-llm-router
        description: >-
          Thiết kế LLMAdapter interface, implement OpenAI adapter, Anthropic
          adapter, Ollama adapter. LLMRouter với fallback chains, task
          complexity routing (fast/smart/cheap). Auto-detection.
        duration_minutes: 180
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c961a-aa06-7006-e006-aa0600000006
        title: "Bài 6: Tool Registry — Đăng ký và thực thi Tools"
        slug: bai-6-tool-registry
        description: >-
          Implement ToolRegistry class: register/unregister tools, ToolDefinition
          schema (JSON Schema), ToolHandler functions. Execute tool calls với
          error handling, timing, và result types.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019c961a-aa07-7007-e007-aa0700000007
        title: "Bài 7: Agent Class — Vòng lặp Tool-Calling hoàn chỉnh"
        slug: bai-7-agent-class
        description: >-
          Implement Agent class: chat() và chatStream() methods. Tool-calling
          loop với maxIterations guard. Memory integration, system prompt
          building, RAG context injection. AdditionalTools pattern.
        duration_minutes: 210
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c961a-aa08-7008-e008-aa0800000008
        title: "Bài 8: Streaming Responses & EventBus"
        slug: bai-8-streaming-eventbus
        description: >-
          AsyncGenerator cho streaming: text-delta, tool-call-start,
          tool-call-end, finish events. EventBus pattern cho agent events.
          Server-Sent Events (SSE) từ Hono đến frontend.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: "Phần 3: RAG Pipeline & Knowledge Base"
    description: Xây dựng RAG Engine hoàn chỉnh — từ document processing đến semantic search
    sort_order: 3
    lessons:
      - id: 019c961a-aa09-7009-e009-aa0900000009
        title: "Bài 9: Document Processor — Chunking Strategies"
        slug: bai-9-document-processor
        description: >-
          Parse PDF, DOCX, TXT, Markdown. Chunking strategies: fixed-size,
          sentence-based, semantic chunking. Chunk overlap, metadata extraction.
          ProcessText method của xClaw.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c961a-aa10-7010-e010-aa1000000010
        title: "Bài 10: Embedding & Vector Store"
        slug: bai-10-embedding-vector-store
        description: >-
          EmbeddingProvider interface: OpenAI embeddings vs LocalEmbeddingProvider.
          InMemoryVectorStore: cosine similarity search, add/remove/update
          vectors. Batch embedding, dimension handling.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c961a-aa11-7011-e011-aa1100000011
        title: "Bài 11: RAG Engine — Retrieval, Reranking & Knowledge Management"
        slug: bai-11-rag-engine
        description: >-
          RagEngine class: ingestText, ingestUrl, retrieve, searchWithReranking.
          Collections, document CRUD, tenant isolation. Web crawler integration.
          Query history và analytics.
        duration_minutes: 210
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: "Phần 4: Workflow Engine & Automation"
    description: Visual workflow builder với 16 node types — từ thiết kế đến thực thi
    sort_order: 4
    lessons:
      - id: 019c961a-aa12-7012-e012-aa1200000012
        title: "Bài 12: Workflow Engine — Kiến trúc & Node Handlers"
        slug: bai-12-workflow-engine
        description: >-
          Thiết kế WorkflowEngine class: node handlers, edge traversal, variable
          scoping. 16 node types: trigger, llm-call, tool-call, condition,
          switch, loop, merge, code, http-request, transform, etc.
        duration_minutes: 210
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c961a-aa13-7013-e013-aa1300000013
        title: "Bài 13: Workflow Validation, Execution & Sandbox"
        slug: bai-13-workflow-validation-execution
        description: >-
          validateWorkflow(): cycle detection, orphan nodes, required config.
          Template resolution với {{variables}}. Sandboxed code execution với
          Node.js vm module. Merge synchronization.
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-05
    title: "Phần 5: Skills, Domains & Plugin System"
    description: Mở rộng agent với skill system, domain packs và plugin architecture
    sort_order: 5
    lessons:
      - id: 019c961a-aa14-7014-e014-aa1400000014
        title: "Bài 14: Skill System — defineSkill & SkillManager"
        slug: bai-14-skill-system
        description: >-
          SkillDefinition interface: manifest, tools, activate/deactivate.
          SkillManager: register, activate, getActiveTools, getRankedTools.
          RL-based SkillSelector (Multi-Armed Bandit) cho intelligent ranking.
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019c961a-aa15-7015-e015-aa1500000015
        title: "Bài 15: Domain Packs — 13 lĩnh vực chuyên biệt"
        slug: bai-15-domain-packs
        description: >-
          Thiết kế DomainPack architecture: base domain class, specialized
          system prompts, domain-specific tools. Implement Healthcare, Developer,
          Finance domains. User domain preferences.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c961a-aa16-7016-e016-aa1600000016
        title: "Bài 16: Plugin Architecture & MCP Integration"
        slug: bai-16-plugin-mcp
        description: >-
          Plugin loading pattern, git submodules cho official plugins.
          MCP Protocol implementation: server discovery, tool execution.
          Dev Docs MCP server. Skill Hub marketplace pattern.
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-06
    title: "Phần 6: Multi-tenant, RBAC & Security"
    description: Xây dựng hệ thống multi-tenant với RBAC hoàn chỉnh
    sort_order: 6
    lessons:
      - id: 019c961a-aa17-7017-e017-aa1700000017
        title: "Bài 17: Multi-tenant RBAC — Roles, Permissions & Tenant Isolation"
        slug: bai-17-multi-tenant-rbac
        description: >-
          Thiết kế schema RBAC: tenants, users, roles, permissions,
          rolePermissions. 4 system roles, 15 permission groups, 60 permissions.
          Tenant isolation ở database layer. Middleware authorization.
        duration_minutes: 210
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019c961a-aa18-7018-e018-aa1800000018
        title: "Bài 18: Chat Channels — Telegram, Discord, Slack, Zalo"
        slug: bai-18-chat-channels
        description: >-
          Channel abstraction pattern. Implement Telegram bot (polling),
          Discord bot (gateway), Slack (Web API), Zalo OA (webhook).
          Channel manager, message routing, embeddable WebChat widget.
        duration_minutes: 180
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-07
    title: "Phần 7: Frontend, Monitoring & Production"
    description: React frontend, monitoring dashboard và deploy production
    sort_order: 7
    lessons:
      - id: 019c961a-aa19-7019-e019-aa1900000019
        title: "Bài 19: React Frontend — Chat UI, Workflow Builder & Dashboard"
        slug: bai-19-react-frontend
        description: >-
          React 19 + Vite + Tailwind + Zustand. Chat interface với streaming,
          visual workflow builder (drag-and-drop), admin dashboard, settings
          pages. i18n, hooks, component architecture.
        duration_minutes: 210
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019c961a-aa20-7020-e020-aa2000000020
        title: "Bài 20: Monitoring, Audit Logs & Docker Production Deploy"
        slug: bai-20-monitoring-deploy
        description: >-
          System metrics, audit logs (90-day TTL), system logs (30-day TTL).
          Monitoring store pattern. Docker multi-stage build, docker-compose
          production. Nginx reverse proxy, SSL, backup strategies.
        duration_minutes: 210
        is_free: true
        sort_order: 19
        video_url: null
reviews: []
quizzes: []
---

## Giới thiệu Series

**Xây dựng AI Agent Platform từ Zero** là series thực chiến giúp bạn hiểu và tự xây dựng được một AI Agent Platform hoàn chỉnh — không phải chatbot đơn giản, mà là một **platform cấp enterprise** với multi-LLM, RAG, workflow automation, multi-tenant RBAC, plugin system và nhiều hơn nữa.

Toàn bộ series dựa trên mã nguồn thực tế của [xClaw](https://github.com/xdev-asia-labs/xClaw) — open-source AI Agent Platform đang chạy production, viết bằng TypeScript.

> 🎯 **Mục tiêu:** Sau khi hoàn thành, bạn có thể tự xây dựng AI Agent Platform cho riêng mình — hoặc contribute vào xClaw.

## Bạn sẽ học được gì?

### Phần 1: Kiến trúc & Nền tảng Monorepo
- **Bài 1:** Tổng quan kiến trúc — tại sao cần platform, dual-database design
- **Bài 2:** Setup TypeScript monorepo với npm workspaces và project references
- **Bài 3:** Dual-database — PostgreSQL (Drizzle ORM) + MongoDB + Redis
- **Bài 4:** API Gateway với Hono — routes, middleware, JWT auth, OAuth2

### Phần 2: LLM Engine & Agent Core
- **Bài 5:** LLM Router — Adapter Pattern cho 10 LLM providers với fallback chains
- **Bài 6:** Tool Registry — đăng ký, quản lý và thực thi tools
- **Bài 7:** Agent class — vòng lặp tool-calling hoàn chỉnh, memory, RAG context
- **Bài 8:** Streaming responses — AsyncGenerator, EventBus, Server-Sent Events

### Phần 3: RAG Pipeline & Knowledge Base
- **Bài 9:** Document Processor — chunking strategies, metadata extraction
- **Bài 10:** Embedding & Vector Store — cosine similarity, batch processing
- **Bài 11:** RAG Engine — retrieval, reranking, collections, web crawler

### Phần 4: Workflow Engine & Automation
- **Bài 12:** Workflow Engine — 16 node types, handler pattern, edge traversal
- **Bài 13:** Validation, execution, sandboxed code, template resolution

### Phần 5: Skills, Domains & Plugin System
- **Bài 14:** Skill System — defineSkill, SkillManager, RL-based selection
- **Bài 15:** Domain Packs — 13 lĩnh vực, domain-specific prompts & tools
- **Bài 16:** Plugin architecture, MCP Protocol, Skill Hub marketplace

### Phần 6: Multi-tenant, RBAC & Channels
- **Bài 17:** Multi-tenant RBAC — roles, permissions, tenant isolation
- **Bài 18:** Chat Channels — Telegram, Discord, Slack, Zalo, WebChat

### Phần 7: Frontend, Monitoring & Production
- **Bài 19:** React frontend — Chat UI, Workflow Builder, Dashboard
- **Bài 20:** Monitoring, audit logs, Docker deploy, Nginx SSL

## Yêu cầu

- **TypeScript/JavaScript** cơ bản (ES2022+, async/await, generators)
- **Node.js** ≥ 20
- **Docker** & Docker Compose
- Hiểu biết cơ bản về REST API, SQL, NoSQL
- Đã từng dùng qua ChatGPT hoặc Claude API (có thì tốt, không bắt buộc)

## Source Code

Toàn bộ source code tham khảo:

```bash
git clone --recurse-submodules https://github.com/xdev-asia-labs/xClaw.git
cd xClaw
cp .env.example .env
docker compose up --build
```

**GitHub:** [github.com/xdev-asia-labs/xClaw](https://github.com/xdev-asia-labs/xClaw)
**License:** MIT
