---
id: 019c9619-bb03-7003-c003-bb0300000003
title: Building AI Agent Platform from Zero — Real battle with xClaw
slug: xay-dung-ai-agent-platform
description: >-
  A hands-on series on building a complete AI Agent Platform using TypeScript —
  from monorepo design, LLM Router, Tool Registry, RAG Pipeline, Workflow
  Engine, Multi-tenant RBAC to deploying Docker production. Learn through the
  actual source code of xClaw — an open-source platform running in production.
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
    title: 'Part 1: Monorepo Architecture & Platform'
    description: 'Design AI platform architecture, setup TypeScript monorepo, dual-database'
    sort_order: 1
    lessons:
      - id: 019c961a-aa01-7001-e001-aa0100000001
        title: 'Lesson 1: Overview of AI Agent Platform architecture'
        slug: bai-1-tong-quan-kien-truc
        description: >-
          Why need a platform instead of a single script? Gateway + Monorepo
          architecture, Dual-Database Design (PostgreSQL + MongoDB + Redis),
          tech stack decisions. Analyze xClaw source code.
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c961a-aa02-7002-e002-aa0200000002
        title: 'Lesson 2: Setup TypeScript Monorepo with npm Workspaces'
        slug: bai-2-setup-typescript-monorepo
        description: >-
          Create monorepo from scratch: npm workspaces, tsconfig project
          references, shared types, build order. Packages structure: shared → db
          → core → gateway → server. ESM modules, path aliases.
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c961a-aa03-7003-e003-aa0300000003
        title: 'Lesson 3: Dual-Database — PostgreSQL (Drizzle ORM) + MongoDB'
        slug: bai-3-dual-database
        description: >-
          Design PostgreSQL schema with Drizzle ORM for config data. MongoDB
          driver for AI/chat data. Migrations, seed data, connection pooling.
          Database abstraction layer.
        duration_minutes: 180
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019c961a-aa04-7004-e004-aa0400000004
        title: 'Lesson 4: API Gateway with Hono — Routes, Middleware, Auth'
        slug: bai-4-api-gateway-hono
        description: >-
          Build HTTP server with Hono: routing, middleware chain, CORS, rate
          limiting. JWT authentication, password hashing, OAuth2 flow. Request
          validation and error handling.
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Part 2: LLM Engine & Agent Core'
    description: 'Build LLM Router, Agent class, Tool Registry and streaming'
    sort_order: 2
    lessons:
      - id: 019c961a-aa05-7005-e005-aa0500000005
        title: 'Lesson 5: LLM Router — Adapter Pattern for Multi-Provider'
        slug: bai-5-llm-router
        description: >-
          Design LLMAdapter interface, implement OpenAI adapter, Anthropic
          adapter, Ollama adapter. LLMRouter with fallback chains, task
          complexity routing (fast/smart/cheap). Auto-detection.
        duration_minutes: 180
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c961a-aa06-7006-e006-aa0600000006
        title: 'Lesson 6: Tool Registry — Register and execute Tools'
        slug: bai-6-tool-registry
        description: >-
          Implement ToolRegistry class: register/unregister tools,
          ToolDefinition schema (JSON Schema), ToolHandler functions. Execute
          tool calls with error handling, timing, and result types.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019c961a-aa07-7007-e007-aa0700000007
        title: 'Lesson 7: Agent Class — Complete Tool-Calling Loop'
        slug: bai-7-agent-class
        description: >-
          Implement Agent class: chat() and chatStream() methods. Tool-calling
          loop with maxIterations guard. Memory integration, system prompt
          building, RAG context injection. AdditionalTools pattern.
        duration_minutes: 210
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c961a-aa08-7008-e008-aa0800000008
        title: 'Lesson 8: Streaming Responses & EventBus'
        slug: bai-8-streaming-eventbus
        description: >-
          AsyncGenerator for streaming: text-delta, tool-call-start,
          tool-call-end, finish events. EventBus pattern for agent events.
          Server-Sent Events (SSE) from Hono to frontend.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'Part 3: RAG Pipeline & Knowledge Base'
    description: >-
      Build the complete RAG Engine — from document processing to semantic
      search
    sort_order: 3
    lessons:
      - id: 019c961a-aa09-7009-e009-aa0900000009
        title: 'Lesson 9: Document Processor — Chunking Strategies'
        slug: bai-9-document-processor
        description: >-
          Parse PDF, DOCX, TXT, Markdown. Chunking strategies: fixed-size,
          sentence-based, semantic chunking. Chunk overlap, metadata extraction.
          xClaw's ProcessText method.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c961a-aa10-7010-e010-aa1000000010
        title: 'Lesson 10: Embedding & Vector Store'
        slug: bai-10-embedding-vector-store
        description: >-
          EmbeddingProvider interface: OpenAI embeddings vs
          LocalEmbeddingProvider. InMemoryVectorStore: cosine similarity search,
          add/remove/update vectors. Batch embedding, dimension handling.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c961a-aa11-7011-e011-aa1100000011
        title: 'Lesson 11: RAG Engine — Retrieval, Reranking & Knowledge Management'
        slug: bai-11-rag-engine
        description: >-
          RagEngine class: ingestText, ingestUrl, retrieve, searchWithReranking.
          Collections, document CRUD, tenant isolation. Web crawler integration.
          Query history and analytics.
        duration_minutes: 210
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'Part 4: Workflow Engine & Automation'
    description: Visual workflow builder with 16 node types — from design to execution
    sort_order: 4
    lessons:
      - id: 019c961a-aa12-7012-e012-aa1200000012
        title: 'Lesson 12: Workflow Engine — Architecture & Node Handlers'
        slug: bai-12-workflow-engine
        description: >-
          Design WorkflowEngine class: node handlers, edge traversal, variable
          scoping. 16 node types: trigger, llm-call, tool-call, condition,
          switch, loop, merge, code, http-request, transform, etc.
        duration_minutes: 210
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c961a-aa13-7013-e013-aa1300000013
        title: 'Lesson 13: Workflow Validation, Execution & Sandbox'
        slug: bai-13-workflow-validation-execution
        description: >-
          validateWorkflow(): cycle detection, orphan nodes, required config.
          Template resolution with {{variables}}. Sandboxed code execution with
          Node.js vm module. Merge synchronization.
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-05
    title: 'Part 5: Skills, Domains & Plugin System'
    description: 'Expand the agent with skill system, domain packs and plugin architecture'
    sort_order: 5
    lessons:
      - id: 019c961a-aa14-7014-e014-aa1400000014
        title: 'Lesson 14: Skill System — defineSkill & SkillManager'
        slug: bai-14-skill-system
        description: >-
          SkillDefinition interface: manifest, tools, activate/deactivate.
          SkillManager: register, activate, getActiveTools, getRankedTools.
          RL-based SkillSelector (Multi-Armed Bandit) for intelligent ranking.
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019c961a-aa15-7015-e015-aa1500000015
        title: 'Lesson 15: Domain Packs — 13 specialized fields'
        slug: bai-15-domain-packs
        description: >-
          Design DomainPack architecture: base domain class, specialized system
          prompts, domain-specific tools. Implement Healthcare, Developer,
          Finance domains. User domain preferences.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c961a-aa16-7016-e016-aa1600000016
        title: 'Lesson 16: Plugin Architecture & MCP Integration'
        slug: bai-16-plugin-mcp
        description: >-
          Plugin loading pattern, git submodules for official plugins. MCP
          Protocol implementation: server discovery, execution tool. Dev Docs
          MCP server. Skill Hub marketplace pattern.
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-06
    title: 'Part 6: Multi-tenant, RBAC & Security'
    description: Build multi-tenant systems with complete RBAC
    sort_order: 6
    lessons:
      - id: 019c961a-aa17-7017-e017-aa1700000017
        title: 'Lesson 17: Multi-tenant RBAC — Roles, Permissions & Tenant Isolation'
        slug: bai-17-multi-tenant-rbac
        description: >-
          Design RBAC schema: tenants, users, roles, permissions,
          rolePermissions. 4 system roles, 15 permission groups, 60 permissions.
          Tenant isolation at the database layer. Middleware authorization.
        duration_minutes: 210
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019c961a-aa18-7018-e018-aa1800000018
        title: 'Lesson 18: Chat Channels — Telegram, Discord, Slack, Zalo'
        slug: bai-18-chat-channels
        description: >-
          Channel abstraction pattern. Implement Telegram bot (polling), Discord
          bot (gateway), Slack (Web API), Zalo OA (webhook). Channel manager,
          message routing, embeddable WebChat widget.
        duration_minutes: 180
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-07
    title: 'Part 7: Frontend, Monitoring & Production'
    description: 'React frontend, monitoring dashboard and deploy production'
    sort_order: 7
    lessons:
      - id: 019c961a-aa19-7019-e019-aa1900000019
        title: 'Lesson 19: React Frontend — Chat UI, Workflow Builder & Dashboard'
        slug: bai-19-react-frontend
        description: >-
          React 19 + Vite + Tailwind + Zustand. Chat interface with streaming,
          visual workflow builder (drag-and-drop), admin dashboard, settings
          pages. i18n, hooks, component architecture.
        duration_minutes: 210
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019c961a-aa20-7020-e020-aa2000000020
        title: 'Lesson 20: Monitoring, Audit Logs & Docker Production Deploy'
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
locale: en
---

## Introducing the Series

**Building an AI Agent Platform from Zero** is a practical series that helps you understand and build a complete AI Agent Platform yourself — not a simple chatbot, but an **enterprise-level platform** with multi-LLM, RAG, workflow automation, multi-tenant RBAC, plugin system and more.

The entire series is based on the actual source code of [xClaw](https://github.com/xdev-asia-labs/xClaw) — open-source AI Agent Platform running in production, written in TypeScript.

> 🎯 **Goal:** Once completed, you can build your own AI Agent Platform — or contribute to xClaw.

## What will you learn?

### Part 1: Monorepo Architecture & Platform
- **Lesson 1:** Architecture overview — why do we need platform, dual-database design
- **Lesson 2:** Setup TypeScript monorepo with npm workspaces and project references
- **Lesson 3:** Dual-database — PostgreSQL (Drizzle ORM) + MongoDB + Redis
- **Lesson 4:** API Gateway with Hono — routes, middleware, JWT auth, OAuth2

### Part 2: LLM Engine & Agent Core
- **Lesson 5:** LLM Router — Adapter Pattern for 10 LLM providers with fallback chains
- **Lesson 6:** Tool Registry — register, manage and execute tools
- **Lesson 7:** Agent class — complete tool-calling loop, memory, RAG context
- **Lesson 8:** Streaming responses — AsyncGenerator, EventBus, Server-Sent Events

### Part 3: RAG Pipeline & Knowledge Base
- **Lesson 9:** Document Processor — chunking strategies, metadata extraction
- **Lesson 10:** Embedding & Vector Store — cosine similarity, batch processing
- **Lesson 11:** RAG Engine — retrieval, reranking, collections, web crawler

### Part 4: Workflow Engine & Automation
- **Lesson 12:** Workflow Engine — 16 node types, handler pattern, edge traversal
- **Lesson 13:** Validation, execution, sandboxed code, template resolution

### Part 5: Skills, Domains & Plugin System
- **Lesson 14:** Skill System — defineSkill, SkillManager, RL-based selection
- **Lesson 15:** Domain Packs — 13 areas, domain-specific prompts & tools
- **Lesson 16:** Plugin architecture, MCP Protocol, Skill Hub marketplace

### Part 6: Multi-tenant, RBAC & Channels
- **Lesson 17:** Multi-tenant RBAC — roles, permissions, tenant isolation
- **Lesson 18:** Chat Channels — Telegram, Discord, Slack, Zalo, WebChat

### Part 7: Frontend, Monitoring & Production
- **Lesson 19:** React frontend — Chat UI, Workflow Builder, Dashboard
- **Lesson 20:** Monitoring, audit logs, Docker deploy, Nginx SSL

## Request

- Basic **TypeScript/JavaScript** (ES2022+, async/await, generators)
- **Node.js** ≥ 20
- **Docker** & Docker Compose
- Basic understanding of REST API, SQL, NoSQL
- Have used ChatGPT or Claude API (good to have, not required)

## Source Code

Full source code reference:

```bash
git clone --recurse-submodules https://github.com/xdev-asia-labs/xClaw.git
cd xClaw
cp .env.example .env
docker compose up --build
```

**GitHub:** [github.com/xdev-asia-labs/xClaw](https://github.com/xdev-asia-labs/xClaw)
**License:** MIT
