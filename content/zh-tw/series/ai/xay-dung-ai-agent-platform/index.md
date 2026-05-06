---
id: 019c9619-bb03-7003-c003-bb0300000003
title: 從零開始搭建AI代理平台－與xClaw實戰
slug: xay-dung-ai-agent-platform
description: >-
  使用 TypeScript 建立完整 AI 代理平台的實作系列 — 從 monorepo 設計、LLM 路由器、工具註冊表、RAG 管道、工作流引擎、多租戶
  RBAC 到部署 Docker 生產。透過 xClaw 的實際原始碼進行學習 - 一個在生產中運行的開源平台。
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
  name: 人工智慧與機器學習
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
    title: 第 1 部分：Monorepo 架構與平台
    description: 設計AI平台架構、設定TypeScript monorepo、雙資料庫
    sort_order: 1
    lessons:
      - id: 019c961a-aa01-7001-e001-aa0100000001
        title: 第 1 課：AI Agent 平台架構概述
        slug: bai-1-tong-quan-kien-truc
        description: >-
          為什麼需要一個平台而不是單一腳本？ Gateway + Monorepo 架構、雙資料庫設計（PostgreSQL + MongoDB +
          Redis）、技術堆疊決策。分析 xClaw 源代码。
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c961a-aa02-7002-e002-aa0200000002
        title: 第 2 課：使用 npm 工作區設定 TypeScript Monorepo
        slug: bai-2-setup-typescript-monorepo
        description: >-
          從頭開始建立 monorepo：npm 工作區、tsconfig 專案參考、共用類型、建置順序。套件結構：共用→資料庫→核心→網關→伺服器。
          ESM 模組、路徑別名。
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c961a-aa03-7003-e003-aa0300000003
        title: 第三課：雙資料庫－PostgreSQL（Drizzle ORM）+MongoDB
        slug: bai-3-dual-database
        description: >-
          使用 Drizzle ORM 為設定資料設計 PostgreSQL 架構。用於 AI/聊天資料的 MongoDB
          驅動程式。遷移、種子資料、連線池。資料庫抽象層。
        duration_minutes: 180
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019c961a-aa04-7004-e004-aa0400000004
        title: 第 4 課：使用 Hono 的 API 閘道 — 路由、中介軟體、驗證
        slug: bai-4-api-gateway-hono
        description: >-
          使用 Hono 建構 HTTP 伺服器：路由、中間件鏈、CORS、速率限制。 JWT 身份驗證、密碼雜湊、OAuth2
          流程。請求驗證和錯誤處理。
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：LLM 引擎和代理核心
    description: 建構LLM路由器、代理類別、工具註冊表和串流媒體
    sort_order: 2
    lessons:
      - id: 019c961a-aa05-7005-e005-aa0500000005
        title: 第 5 課：LLM 路由器 — 多提供者的適配器模式
        slug: bai-5-llm-router
        description: >-
          設計LLMAdapter接口，實作OpenAI適配器、Anthropic適配器、Ollama適配器。 LLMRouter
          具有後備鏈、任務複雜性路由（快速/智慧/便宜）。自動檢測。
        duration_minutes: 180
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c961a-aa06-7006-e006-aa0600000006
        title: 第 6 課：工具註冊 — 註冊並執行工具
        slug: bai-6-tool-registry
        description: >-
          實作 ToolRegistry 類別：註冊/取消註冊工具、ToolDefinition 架構（JSON 架構）、ToolHandler
          函數。使用錯誤處理、計時和結果類型執行工具呼叫。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019c961a-aa07-7007-e007-aa0700000007
        title: 第 7 課：代理類別 — 完整的工具呼叫循環
        slug: bai-7-agent-class
        description: >-
          實作代理類別：chat() 和 chatStream() 方法。帶有 maxIterations
          保護的工具呼叫循環。記憶體整合、系統提示建置、RAG 上下文注入。附加工具模式。
        duration_minutes: 210
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c961a-aa08-7008-e008-aa0800000008
        title: 第 8 課：串流回應和 EventBus
        slug: bai-8-streaming-eventbus
        description: >-
          用於串流的 AsyncGenerator：文字增量、工具呼叫開始、工具呼叫結束、完成事件。代理事件的 EventBus 模式。從 Hono
          到前端的伺服器發送事件 (SSE)。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 第 3 部分：RAG 管道和知識庫
    description: 建立完整的 RAG 引擎 — 從文件處理到語義搜索
    sort_order: 3
    lessons:
      - id: 019c961a-aa09-7009-e009-aa0900000009
        title: 第 9 課：文件處理器 — 分塊策略
        slug: bai-9-document-processor
        description: >-
          解析 PDF、DOCX、TXT、Markdown。分塊策略：固定大小、基於句子、語意分塊。區塊重疊，元資料擷取。 xClaw 的
          ProcessText 方法。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c961a-aa10-7010-e010-aa1000000010
        title: 第 10 課：嵌入與向量存儲
        slug: bai-10-embedding-vector-store
        description: >-
          EmbeddingProvider 介面：OpenAI 嵌入與 LocalEmbeddingProvider。
          InMemoryVectorStore：餘弦相似度搜索，新增/刪除/更新向量。批量嵌入、尺寸處理。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c961a-aa11-7011-e011-aa1100000011
        title: 第 11 課：RAG 引擎 — 檢索、重新排名與知識管理
        slug: bai-11-rag-engine
        description: >-
          RagEngine 類別：ingestText、ingestUrl、retrieve、searchWithReranking。集合、文檔
          CRUD、租戶隔離。網路爬蟲整合。查詢歷史記錄和分析。
        duration_minutes: 210
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 第 4 部分：工作流程引擎和自動化
    description: 具有 16 種節點類型的視覺化工作流程建構器 — 從設計到執行
    sort_order: 4
    lessons:
      - id: 019c961a-aa12-7012-e012-aa1200000012
        title: 第 12 課：工作流程引擎 — 架構與節點處理程序
        slug: bai-12-workflow-engine
        description: >-
          設計 WorkflowEngine 類別：節點處理程序、邊遍歷、變數範圍。 16
          種節點類型：trigger、llm-call、tool-call、condition、switch、loop、merge、code、http-request、transform
          等。
        duration_minutes: 210
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c961a-aa13-7013-e013-aa1300000013
        title: 第 13 課：工作流程驗證、執行與沙箱
        slug: bai-13-workflow-validation-execution
        description: >-
          validateWorkflow()：循環偵測、孤立節點、所需配置。使用 {{variables}} 進行模板解析。使用 Node.js
          vm 模組執行沙盒程式碼。合併同步。
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-05
    title: 第 5 部分：技能、領域和插件系統
    description: 透過技能係統、域包和外掛架構擴展代理
    sort_order: 5
    lessons:
      - id: 019c961a-aa14-7014-e014-aa1400000014
        title: 第 14 課：技能係統 — DefineSkill 和 SkillManager
        slug: bai-14-skill-system
        description: >-
          SkillDefinition 介面：清單、工具、啟用/停用。
          SkillManager：註冊、啟動、取得ActiveTools、取得RankedTools。基於 RL 的
          SkillSelector（Multi-Armed Bandit）用於智慧排名。
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019c961a-aa15-7015-e015-aa1500000015
        title: 第 15 課：領域包 — 13 個專業領域
        slug: bai-15-domain-packs
        description: 設計DomainPack架構：基礎域類別、專門的系統提示、特定領域的工具。實施醫療保健、開發人員、金融領域。用戶域偏好。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c961a-aa16-7016-e016-aa1600000016
        title: 第 16 課：插件架構和 MCP 集成
        slug: bai-16-plugin-mcp
        description: 插件載入模式，官方插件的 git 子模組。 MCP協定實作：伺服器發現、執行工具。開發文檔 MCP 伺服器。技能中心市場模式。
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-06
    title: 第 6 部分：多租戶、RBAC 和安全性
    description: 使用完整的 RBAC 建構多租戶系統
    sort_order: 6
    lessons:
      - id: 019c961a-aa17-7017-e017-aa1700000017
        title: 第 17 課：多租用戶 RBAC — 角色、權限與租用戶隔離
        slug: bai-17-multi-tenant-rbac
        description: >-
          設計RBAC架構：租用戶、使用者、角色、權限、rolePermissions。
          4個系統角色，15個權限群組，60個權限。資料庫層租戶隔離。中間件授權。
        duration_minutes: 210
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019c961a-aa18-7018-e018-aa1800000018
        title: 第 18 課：聊天頻道 — Telegram、Discord、Slack、Zalo
        slug: bai-18-chat-channels
        description: >-
          通道抽像模式。實作 Telegram 機器人（輪詢）、Discord 機器人（閘道）、Slack（Web API）、Zalo
          OA（webhook）。通道管理器、訊息路由、可嵌入的 WebChat 小工具。
        duration_minutes: 180
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-07
    title: 第 7 部分：前端、監控與生產
    description: React 前端、監控儀表板與部署生產
    sort_order: 7
    lessons:
      - id: 019c961a-aa19-7019-e019-aa1900000019
        title: 第 19 課：React 前端 — 聊天 UI、工作流程產生器和儀表板
        slug: bai-19-react-frontend
        description: >-
          React 19 + Vite + Tailwind +
          Zustand。帶有串流媒體、視覺化工作流程建立器（拖放）、管理儀表板、設定頁面的聊天介面。 i18n、鉤子、元件架構。
        duration_minutes: 210
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019c961a-aa20-7020-e020-aa2000000020
        title: 第 20 課：監控、審核日誌和 Docker 生產部署
        slug: bai-20-monitoring-deploy
        description: >-
          系統指標、審核日誌（90 天 TTL）、系統日誌（30 天 TTL）。監控商店模式。 Docker 多階段構建，docker-compose
          生產。 Nginx 反向代理、SSL、備份策略。
        duration_minutes: 210
        is_free: true
        sort_order: 19
        video_url: null
reviews: []
quizzes: []
locale: zh-tw
---

## 系列介紹

**從零開始建立人工智慧代理平台**是一個實用的系列，幫助您了解並自行建立一個完整的人工智慧代理平台——不是一個簡單的聊天機器人，而是一個具有多LLM、RAG、工作流程自動化、多租戶RBAC、插件系統等的**企業級平台**。

整個系列均基於實際原始碼 [xClaw](https://github.com/xdev-asia-labs/xClaw) — 在生產中運行的開源 AI 代理平台，以 TypeScript 編寫。

> 🎯 **目標：** 完成後，您可以建立自己的 AI 代理平台 - 或為 xClaw 做出貢獻。

## 你會學到什麼？

### 第 1 部分：Monorepo 架構與平台
- **第1課：**架構概述－為什麼需要平台、雙庫設計
- **第 2 課：** 使用 npm 工作區和專案參考設定 TypeScript monorepo
- **第3課：** 雙資料庫 — PostgreSQL (Drizzle ORM) + MongoDB + Redis
- **第 4 課：** 使用 Hono 的 API 閘道 — 路由、中介軟體、JWT 驗證、OAuth2

### 第 2 部分：LLM 引擎和代理核心
- **第 5 課：** LLM 路由器 — 具有後備鏈的 10 個 LLM 提供者的適配器模式
- **第 6 課：** 工具註冊表 — 註冊、管理和執行工具
- **第 7 課：** 代理類別 — 完整的工具呼叫循環、記憶體、RAG 上下文
- **第 8 課：** 串流回應 — AsyncGenerator、EventBus、伺服器傳送的事件

### 第 3 部分：RAG 管道和知識庫
- **第 9 課：** 文件處理器 — 分塊策略、元資料擷取
- **第 10 課：** 嵌入與向量儲存 — 餘弦相似度、批次
- **第 11 課：** RAG 引擎 — 檢索、重新排名、集合、網路爬蟲

### 第 4 部分：工作流程引擎與自動化
- **第 12 課：** 工作流程引擎 — 16 節點類型、處理程序模式、邊緣遍歷
- **第 13 課：** 驗證、執行、沙盒程式碼、範本解析

### 第 5 部分：技能、領域和外掛系統
- **第 14 課：** 技能係統 — DefineSkill、SkillManager、基於 RL 的選擇
- **第 15 課：** 域包 — 13 個區域、特定領域的提示和工具
- **第 16 課：** 外掛架構、MCP 協定、Skill Hub 市場

### 第 6 部分：多租戶、RBAC 和通道
- **第 17 課：** 多租用戶 RBAC — 角色、權限、租用戶隔離
- **第 18 課：** 聊天頻道 — Telegram、Discord、Slack、Zalo、WebChat

### 第 7 部分：前端、監控與生產
- **第 19 課：** React 前端 — 聊天 UI、工作流程產生器、儀表板
- **第 20 課：** 監控、審核日誌、Docker 部署、Nginx SSL

## 請求

- 基本 **TypeScript/JavaScript**（ES2022+、非同步/等待、生成器）
- **Node.js** ≥ 20
- **Docker** 和 Docker Compose
- 對 REST API、SQL、NoSQL 的基本了解
- 使用過 ChatGPT 或 Claude API（很好，但不是必需的）

## 原始碼

完整原始碼參考：

```bash
git clone --recurse-submodules https://github.com/xdev-asia-labs/xClaw.git
cd xClaw
cp .env.example .env
docker compose up --build
```

**GitHub：** [github.com/xdev-asia-labs/xClaw](https://github.com/xdev-asia-labs/xClaw)
**許可證：** 麻省理工學院
