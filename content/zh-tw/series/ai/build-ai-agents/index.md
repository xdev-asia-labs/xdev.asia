---
id: 019c9619-aa02-7002-b002-aa0200000002
title: 建構 AI 代理：從零到生產
slug: build-ai-agents
description: >-
  關於建立人工智慧代理的實用課程——從簡單的聊天機器人到複雜的多代理系統。精通函數呼叫、工具使用、RAG、MCP、LangGraph、CrewAI 以及將
  Agent 部署到生產中。每節課都使用 Python 進行實踐編碼。
featured_image: uploads/2026/03/build-ai-agents-cover.png
level: intermediate
duration_hours: 50
lesson_count: 18
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-29T10:00:00.000000Z'
created_at: '2026-03-29T10:00:00.000000Z'
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
  - name: LangGraph
    slug: langgraph
  - name: CrewAI
    slug: crewai
  - name: MCP
    slug: mcp
  - name: Function Calling
    slug: function-calling
  - name: Tool Use
    slug: tool-use
  - name: RAG
    slug: rag
  - name: Multi-Agent
    slug: multi-agent
  - name: LangChain
    slug: langchain
  - name: Python
    slug: python
  - name: OpenAI
    slug: openai
  - name: production
    slug: production
  - name: hands-on
    slug: hands-on
  - name: A2A
    slug: a2a
  - name: agentic-ai
    slug: agentic-ai
sections:
  - id: section-01
    title: 第 1 部分：代理平台 — 建置前了解
    description: 掌握 Agent、Perceive-Reason-Act 迴圈和 LLM API 的概念
    sort_order: 1
    lessons:
      - id: 019c9619-cc01-7001-d001-cc0100000001
        title: 第一課：什麼是代理？ — 從聊天機器人到自主人工智慧
        slug: bai-1-agent-la-gi
        description: >-
          定義人工智慧代理，區分聊天機器人、代理和副駕駛。感知-理性-計劃-行動循環。代理類型：反應型、深思熟慮型、混合型。最簡單的 Python
          演示代理。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-cc02-7002-d002-cc0200000002
        title: 第 2 課：LLM API 大師班 — OpenAI、Claude、Gemini
        slug: bai-2-llm-apis-masterclass
        description: 精通排名前 3 位的 LLM 的 API：身份驗證、聊天完成、串流、結構化輸出（JSON 模式）、視覺和成本優化。比較每個提供者的優缺點。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-cc03-7003-d003-cc0300000003
        title: 第 3 課：代理人的提示工程 — 系統提示與角色
        slug: bai-3-prompt-engineering-cho-agent
        description: 為代理程式編寫有效的系統提示：定義角色、邊界、輸出模式。思想鏈、少量鏡頭和格式相容的 LLM 壓制技術。 ReAct 提示模式。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-02
    title: 第二部分：函數呼叫和工具使用
    description: 打開Agent與外界互動的大門
    sort_order: 2
    lessons:
      - id: 019c9619-cc04-7004-d004-cc0400000004
        title: 第 4 課：函數呼叫 — 為 Agent 提供“手腳”
        slug: bai-4-function-calling
        description: >-
          OpenAI、Anthropic、Gemini 的函數呼叫/工具使用機制。定義工具架構 (JSON)、處理
          tool_calls、平行函數呼叫。建構計算器代理程式和天氣代理。
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-cc05-7005-d005-cc0500000005
        title: 第 5 課：建立自訂工具 - Web 搜尋、程式碼執行、API 集成
        slug: bai-5-xay-dung-custom-tools
        description: >-
          創建複雜的工具：網頁抓取、Google 搜尋、Python 程式碼沙箱、資料庫查詢、REST API
          呼叫程式。管理登錄工具、錯誤處理和重試邏輯。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-cc06-7006-d006-cc0600000006
        title: 第 6 課：代理循環－思想-行動-觀察循環
        slug: bai-6-the-agent-loop
        description: 使用純 Python 從頭開始實現完整的代理循環：ReAct 模式、處理多步驟推理、對話歷史記錄管理、令牌預算和停止條件。
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-03
    title: 第 3 部分：RAG 和內存 — 為 Agent 提供內存
    description: 由於知識庫和記憶體管理，代理變得更加聰明
    sort_order: 3
    lessons:
      - id: 019c9619-cc07-7007-d007-cc0700000007
        title: 第 7 課：以代理人為導向的 RAG — 連結到知識庫
        slug: bai-7-rag-cho-agent
        description: 為代理程式建立 RAG 管道：文件載入、分塊策略、嵌入模型、向量儲存（ChromaDB、Qdrant）。語義搜尋與關鍵字搜尋。混合檢索。
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-cc08-7008-d008-cc0800000008
        title: 第 8 課：代理記憶－短期、長期與情景
        slug: bai-8-agent-memory
        description: 記憶類型：對話緩衝區、摘要記憶、實體記憶。使用 DB 向量實現長期記憶。情景記憶允許代理從經驗中「學習」。設計記憶體架構。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-04
    title: 第 4 部分：代理框架
    description: 使用專業的框架來建立複雜的代理
    sort_order: 4
    lessons:
      - id: 019c9619-cc09-7009-d009-cc0900000009
        title: 第 9 課：LangChain 和 LangGraph — 有狀態代理工作流程
        slug: bai-9-langchain-langgraph
        description: 從 LangChain 鏈到 LangGraph 圖：節點、邊、條件路由、狀態管理。建構具有人機互動審批流程的研究代理。
        duration_minutes: 210
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-cc10-7010-d010-cc1000000010
        title: 第 10 課：CrewAI — 建立人工智慧代理“團隊”
        slug: bai-10-crewai
        description: >-
          使用 CrewAI 的多代理：定義代理（角色、目標、背景故事）、任務和 Crew
          編排。建構內容管道：研究員→作家→編輯。流程類型：順序、分層。
        duration_minutes: 180
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c9619-cc11-7011-d011-cc1100000011
        title: 第 11 課：高階模式－規劃、反思與自我修正
        slug: bai-11-advanced-patterns
        description: 高階模式：計畫與執行、思想樹計畫、自我反思循環、批評與修正。實施代理評估並修正其自己的輸出。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-05
    title: 第 5 部分：MCP、A2A 和多代理系統
    description: 連接標準和大規模多代理系統
    sort_order: 5
    lessons:
      - id: 019c9619-cc12-7012-d012-cc1200000012
        title: 第 12 課：模型情境協定 (MCP) — 代理人的連結標準
        slug: bai-12-mcp
        description: 什麼是MCP，為什麼需要標準化？客戶端/伺服器架構、發現工具、能力協商。建構MCP Server連接資料庫、GitHub API、檔案系統。
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-cc13-7013-d013-cc1300000013
        title: 第 13 課：代理間 (A2A) 協定 — 代理之間相互通信
        slug: bai-13-a2a-protocol
        description: Google A2A 協定：代理卡、能力發現、任務生命週期、代理間通訊。比較 A2A 與 MCP。演示來自兩個不同框架的兩個代理的協作。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9619-cc14-7014-d014-cc1400000014
        title: 第 14 課：多代理編排 — 架構與設計模式
        slug: bai-14-multi-agent-orchestration
        description: 編排模式：順序、平行、分層、叢集。主管代理與點對點。處理衝突、死鎖、錯誤傳播。建構編碼團隊系統：PM→開發人員→審閱者。
        duration_minutes: 210
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-06
    title: 第 6 部分：生產與實際部署
    description: 將 AI Agent 從原型提升到生產級
    sort_order: 6
    lessons:
      - id: 019c9619-cc15-7015-d015-cc1500000015
        title: 第 15 課：護欄與安全 — 保護特工免受“叛亂”
        slug: bai-15-guardrails-safety
        description: >-
          及時注入防禦、輸出驗證、PII 過濾。 Guardrails 框架：NeMo Guardrails、Guardrails
          AI。人機互動模式。速率限制和成本控制。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c9619-cc16-7016-d016-cc1600000016
        title: 第 16 課：可觀察性與評估－監控智能體的“想法”
        slug: bai-16-observability-evaluation
        description: >-
          使用 LangSmith、Langfuse 追蹤代理決策。日誌記錄、指標、成本追蹤。評估：法學碩士作為法官、黃金測試集、人工評估。 A/B
          測試代理程式提示。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019c9619-cc17-7017-d017-cc1700000017
        title: 第 17 課：將代理部署到生產環境 - FastAPI、Docker 和雲端
        slug: bai-17-deploy-agent-production
        description: >-
          使用 FastAPI 將代理程式包裝到 API 中。 Dockerize、CI/CD 管道。部署到雲端
          (AWS/GCP)。擴展策略、會話管理、快取。用於即時代理聊天的 WebSocket。
        duration_minutes: 210
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019c9619-cc18-7018-d018-cc1800000018
        title: 第 18 課：Capstone 專案 — 建立完整的 AI 代理團隊
        slug: bai-18-capstone-project
        description: 專案摘要：使用 RAG、MCP 工具、記憶體、護欄、可觀察性建立完整的多代理系統，並部署到生產。程式碼審查和最佳實踐總結。
        duration_minutes: 240
        is_free: true
        sort_order: 17
        video_url: null
reviews: []
quizzes: []
locale: zh-tw
---

## 系列介紹

**建立 AI 代理：從零到生產**是一個真實的旅程，可幫助您建立 AI 代理 - 從最基本的概念到在生產中運行的複雜多代理系統。

與專注於理論和架構的「AI & LLM」系列不同，該系列是100%**動手**——每節課都是一個真實的項目，每個概念都有可以立即運行的程式碼。

> 🎯 **目標：** 完成後，您可以為任何用例建置和部署可用於生產的 AI 代理系統。

## 你會學到什麼？

### 第 1 部分：代理平台 — 在建置之前了解

- **第 1 課：** 什麼是代理？區分聊天機器人、代理商和副駕駛
- **第 2 課：** LLM API 大師班：OpenAI、Claude、Gemini — 掌握所有 3 個課程
- **第 3 課：** 代理程式提示工程：系統提示、角色、ReAct 模式

### 第 2 部分：函數呼叫與工具使用

- **第 4 課：** 函數呼叫 — 為代理人提供「手腳」來與世界交互
- **第 5 課：** 自訂工具：網路搜尋、程式碼執行、API 集成
- **第 6 課：** 代理循環 — 從頭開始實現思想-行動-觀察循環

### 第 3 部分：RAG 和記憶體 — 為 Agent 提供內存

- **第 7 課：** RAG for Agent：將知識庫與 ChromaDB、Qdrant 連接
- **第 8 課：** 代理記憶：短期、長期、情境記憶架構

### 第 4 部分：代理框架

- **第 9 課：** LangChain 和 LangGraph：具有基於圖形的編排的有狀態代理工作流程
- **第 10 課：** CrewAI：建立一個 AI 代理「團隊」以相互合作
- **第 11 課：** 高階模式：規劃、反思、自我修正

### 第 5 部分：MCP、A2A 和多代理系統

- **第 12 課：** 模型上下文協定 (MCP)：代理程式的通用連接標準
- **第 13 課：** Agent-to-Agent (A2A)：代理跨框架通訊的協議
- **第 14 課：** 多代理程式編排：架構與設計模式

### 第 6 部分：生產與實際部署

- **第 15 課：** 護欄與安全：保護特務免於即時注射與幻覺
- **第 16 課：** 可觀察性與評估：追蹤、記錄、法學碩士法官
- **第 17 課：** 將代理程式部署到生產環境：FastAPI、Docker、雲端
- **第 18 課：** Capstone 專案：建立完整的端對端 AI 代理團隊

## 需要輸入

- **中級Python**（非同步/等待、裝飾器、類別、錯誤處理）
- 對 LLM 的基本了解（了解 ChatGPT/Claude API 是什麼 - 或完成“AI & LLM”系列）
- 具有至少 8GB RAM 的電腦（不需要 GPU — 大多數透過 API 運作）
- OpenAI/Anthropic/Google AI 帳戶（免費套餐足以滿足大多數課程）

## 使用的工具

```
Python 3.11+      | Ngôn ngữ chính
OpenAI SDK         | GPT-4o, Function Calling
Anthropic SDK      | Claude, Tool Use
Google GenAI       | Gemini, Grounding
LangChain          | Chain & Agent framework
LangGraph          | Stateful graph-based workflows
CrewAI             | Multi-agent orchestration
ChromaDB / Qdrant  | Vector databases
FastAPI            | API server
Docker             | Containerization
LangSmith          | Observability & tracing
```

## 這個系列與《AI & LLM：從基礎到進階》有何不同？

| |人工智慧與法學碩士系列|建構人工智慧代理 |
|---|---|---|
| **焦點** |理論+架構法學碩士|建立實用的 Agent 應用程式 |
| **物件** |人工智慧初學者 |已經了解 LLM 基礎 |
| **練習** |程式碼說明概念 |每堂課的實際項目 |
| **輸出** |了解LLM如何運作|擁有代理專案組合 |
| **技術** | PyTorch、變形金剛 | LangGraph、CrewAI、MCP、A2A |
