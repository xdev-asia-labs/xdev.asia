---
id: 019e0a01-bb12-7001-c001-ee1200000001
title: 第 12 課：AI 代理基礎 — 概念與架構
slug: bai-12-ai-agent-fundamentals-concepts
description: >-
  什麼是AI代理？代理、聊天機器人、管道。核心組成：感知、推理、行動。代理架構：反應、計畫與執行、反射。代理循環，狀態管理。人工智慧代理的分類。現實世界的用例。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: 第 4 部分：AI 代理和基於代理的系統
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> **你問 ChatGPT 一個問題，它會回答。您向 AI 代理提出問題，它會制定計劃，調用 5 種不同的工具，進行自我更正，然後提供完整的結果。 ** 聊天機器人是反應式的 — 等待您提出問題，然後給出答案。 Agent 是主動的——它為自己思考、為自己行動、為自己評估結果。這種差異就是為什麼 2024-2025 年是人工智慧代理繁榮的一年——從 Devin（編碼代理）到 AutoGPT，再到一系列為客戶支援、資料分析和 DevOps 建立代理的新創公司。在本文中，我們將從頭開始：**什麼是 AI Agent**、**架構**如何運作、流行的**設計模式**，最後我們將**從頭開始編寫一個迷你代理**，以便您可以深入了解每個元件。

---

## 1.什麼是AI Agent？

### 1.1。定義

**AI Agent**（Autonomous Agent）是一個以LLM為「大腦」的軟體系統，能夠自動**感知**環境，**推理**目標，並**行動**（行動）來完成任務——不斷重複，直到達到想要的結果。

核心公式：

```text
Agent = LLM  +  Tools  +  Memory  +  Goal  +  Loop
         │         │         │         │         │
    Brain/       Hands     Brain      Why       How
    Reasoning    (APIs,    (history,  (task     (iterate
    Engine       code,     context)   to do)    until done)
                 search)
```

### 1.2。感知→推理→動作循環

每個人工智慧代理都遵循一個基本循環：

```text
┌──────────────────────────────────────────────────────────────────┐
│                    THE AGENT LOOP                                 │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│     ┌───────────┐                                                │
│     │   USER    │                                                │
│     │   GOAL    │                                                │
│     └─────┬─────┘                                                │
│           │                                                       │
│           ▼                                                       │
│     ┌───────────┐     ┌───────────┐     ┌───────────┐           │
│     │ PERCEIVE  │────→│  REASON   │────→│   ACT     │           │
│     │           │     │           │     │           │           │
│     │ • User msg│     │ • Analyze │     │ • Call API│           │
│     │ • Tool    │     │ • Plan    │     │ • Run code│           │
│     │   output  │     │ • Decide  │     │ • Search  │           │
│     │ • Error   │     │   next    │     │ • Write   │           │
│     │   info    │     │   step    │     │   file    │           │
│     └───────────┘     └───────────┘     └─────┬─────┘           │
│           ▲                                     │                 │
│           │           ┌───────────┐             │                 │
│           │           │  MEMORY   │             │                 │
│           │           │           │             │                 │
│           │           │ • History │             │                 │
│           │           │ • Context │             │                 │
│           │           │ • State   │             │                 │
│           │           └───────────┘             │                 │
│           │                                     │                 │
│           └─────────────────────────────────────┘                │
│                   (loop until goal achieved                       │
│                    or max iterations reached)                     │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

### 1.3。現實生活中的例子

你告訴代理：*「找到前 5 個最受歡迎的 AI 代理構建框架，比較它們，然後編寫 Markdown 報告。」*

代理人將：
1. **感知：**理解任務－需要研究、比較、寫報告
2. **原因：** 制定計劃 - 步驟 1 搜尋網絡，步驟 2 比較，步驟 3 寫作
3. **行動：** 呼叫網路搜尋工具→取得排名前5的框架
4. **Perceive：** 讀取搜尋結果 → 檢視 LangGraph、CrewAI、AutoGen、LlamaIndex、Semantic Kernel
5. **原因：** 需依照標準進行比較：易用性、多代理、生產就緒
6. **行動：**找到每個框架的更多細節→寫一個比較表
7. **原因：** 數據夠，寫最終報告
8. **動作：**輸出完整的Markdown報告

> **注意：**人類沒有時間中途幹預。代理決定採取多少步驟、呼叫什麼工具以及何時停止—這就是**自治**。

---

## 2. 代理商、聊天機器人、管道、工作流程

### 2.1。比較表

|特色|聊天機器人 |管道|工作流程|人工智慧代理|
|--------|---------|----------|---------|----------|
| **自治** | ❌ 反應式 — 等待使用者 | ❌ 固定順序 | ⚠️ 條件分支 | ✅ 自我指導 |
| **決策** |最小 |無 |基於規則|法學碩士驅動|
| **工具使用** | ❌ 否 | ❌ 硬編碼步驟 | ⚠️ 預設工具 | ✅ 動態工具選擇 |
| **規劃** | ❌ 否 | ❌ 否 | ⚠️ 預設流程 | ✅ LLM 產生計畫 |
| **錯誤恢復** | ❌ 用戶重試 | ❌ 失敗並停止 | ⚠️ 後備路徑 | ✅ 自我修正 |
| **記憶體** |僅會話 |無 |無 |短期+長期|
| **多重步驟** | ❌ 單圈 | ✅ 固定步驟 | ✅ 固定分支 | ✅ 動態步驟 |
| **範例** | ChatGPT，雙子座 | ETL、CI/CD | n8n、扎皮爾、氣流 | Devin、AutoGPT、遊標 |

### 2.2。比較建築

```text
CHATBOT:                    PIPELINE:
┌─────────┐                 ┌──────┐ ┌──────┐ ┌──────┐
│  User   │                 │Step 1│→│Step 2│→│Step 3│
│    ↓    │                 └──────┘ └──────┘ └──────┘
│  LLM    │                 (fixed order, no branching)
│    ↓    │
│ Response│
└─────────┘
(single turn, no tools)

WORKFLOW:                   AI AGENT:
┌──────┐                    ┌──────────────────────────┐
│Start │                    │ Goal: "Analyze Q3 data"  │
│  ↓   │                    │         ↓                │
│ ◇────┤                    │  ┌──── Plan ────┐        │
│ │ IF │→ Path A            │  │1. Load data  │        │
│ │ELSE│→ Path B            │  │2. Clean      │        │
│ └────┘                    │  │3. Analyze    │        │
│  ...  │                    │  │4. Viz + report│       │
│ End   │                    │  └──────────────┘        │
└──────┘                    │    ↓↑ (loop, retry,      │
(predefined branches)       │     self-correct)         │
                            └──────────────────────────┘
                            (dynamic, autonomous)
```

### 2.3。什麼時候用什麼？

```text
Task đơn giản, Q&A ──────────────────→ Chatbot
Task fixed steps, data processing ───→ Pipeline
Task conditional, business logic ────→ Workflow (n8n, Airflow)
Task complex, cần reasoning + tools ─→ AI Agent
```

> **提示：** 許多生產系統使用混合方法 - 高層工作流程編排（例如，Airflow 安排日常作業），其中每個節點都是處理複雜任務的 AI 代理程式。不要將代理用於所有事情 - 簡單的任務應該使用簡單的工具。

---

## 3. AI 代理程式的核心元件

### 3.1。架構概述

```text
┌──────────────────────────────────────────────────────────────────────┐
│                       AI AGENT ARCHITECTURE                           │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │                     🧠 BRAIN (LLM)                           │    │
│  │                                                               │    │
│  │  ┌──────────┐  ┌───────────────┐  ┌───────────────────┐     │    │
│  │  │ Reasoning│  │   Planning    │  │  Decision-Making  │     │    │
│  │  │ (CoT,    │  │ (decompose   │  │  (which tool?     │     │    │
│  │  │  ReAct)  │  │  into steps) │  │   stop or cont?)  │     │    │
│  │  └──────────┘  └───────────────┘  └───────────────────┘     │    │
│  └──────────────────────────────────────────────────────────────┘    │
│       ▲           │           │           │           ▲              │
│       │           │           │           │           │              │
│  ┌────┴───┐  ┌────▼───┐  ┌───▼────┐  ┌───▼────┐  ┌──┴──────┐     │
│  │PERCEP- │  │ TOOLS  │  │ TOOLS  │  │ TOOLS  │  │ MEMORY  │     │
│  │TION    │  │        │  │        │  │        │  │         │     │
│  │        │  │ Web    │  │ Code   │  │ File   │  │ Short-  │     │
│  │ Input  │  │ Search │  │ Exec   │  │ System │  │ term    │     │
│  │ Parser │  │        │  │        │  │        │  │         │     │
│  │        │  │ API    │  │ DB     │  │ Browser│  │ Long-   │     │
│  │ User   │  │ Calls  │  │ Query  │  │ Control│  │ term    │     │
│  │ Intent │  │        │  │        │  │        │  │         │     │
│  └────────┘  └────────┘  └────────┘  └────────┘  │ Vector  │     │
│                                                    │ Store   │     │
│                                                    └─────────┘     │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

### 3.2。第 1 部分：感知

感知是代理「看到」周圍世界的方式——接收輸入、解析工具結果、讀取錯誤訊息。

|輸入類型|描述 |範例|
|------------|--------|--------|
|使用者留言|最初的問題/請求 | “在 main.py 檔案中尋找錯誤”|
|刀具輸出|工具呼叫的結果 |來自 API 的 JSON 回應 |
|錯誤/異常 |執行時出錯 | `FileNotFoundError: main.py` |
|環境狀態|上下文資訊 |目前目錄、作業系統、時間 |
|人類回饋 |中環回應| “不，我想要 Python，而不是 JS”|

### 3.3。第 2 部分：大腦/推理 (LLM)

LLM是「大腦」－最重要的組成部分。主要承擔3項任務：

**a) 推理：**
- 理解問題，分析訊息
- 思考鏈：一步步思考再做決定
- 確定缺少什麼→呼叫哪個工具

**b) 規劃：**
- 將大任務分解為小任務
- 確定執行順序
- 預測每個步驟的結果

**c) 決策：**
- 選擇最適合下一步的工具
- 決定是否使用該工具或直接回答
- 決定停止循環或繼續

```text
LLM Reasoning Process:
─────────────────────

User: "Tìm giá Bitcoin hôm nay và so sánh với tuần trước"

LLM Thinking:
  1. Cần giá BTC hiện tại → gọi tool: get_crypto_price("BTC")
  2. Cần giá BTC 7 ngày trước → gọi tool: get_crypto_price("BTC", days_ago=7)
  3. Khi có cả 2 giá → tính % thay đổi
  4. Format kết quả → trả về user

Decision: Gọi tool get_crypto_price trước
```

### 3.4。第 3 部分：行動

行動是代理人的「手」－透過工具執行決策。

|工具組 |範例 |能力|
|--------------|----------|------------|
| **網頁搜尋** |Google、必應、泰維利 |尋找即時資訊 |
| **程式碼執行** | Python REPL、沙箱 |運行程式碼，計算 |
| **API 呼叫** |休息、GraphQL |與外部服務通訊 |
| **檔案系統** |讀取/寫入檔案 |檔案與資料夾操作|
| **資料庫** | SQL 查詢 |查詢、插入、更新資料|
| **瀏覽器** |劇作家，硒 |網頁抓取、自動化 |
| **通訊** |電子郵件、鬆弛 |發送通知、訊息 |

### 3.5。第 4 部分：內存

記憶可以幫助代理人記住跨步驟和會話的上下文。

```text
┌──────────────────────────────────────────────────────────┐
│                    AGENT MEMORY TYPES                      │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  SHORT-TERM MEMORY (Working Memory)                       │
│  ┌─────────────────────────────────────────────────┐     │
│  │ • Conversation history (current session)         │     │
│  │ • Tool call results (this loop iteration)        │     │
│  │ • Current plan/state                             │     │
│  │ → Stored in: LLM context window                  │     │
│  │ → Lifetime: single conversation                  │     │
│  └─────────────────────────────────────────────────┘     │
│                                                           │
│  LONG-TERM MEMORY (Persistent Memory)                     │
│  ┌─────────────────────────────────────────────────┐     │
│  │ • User preferences learned over time             │     │
│  │ • Past task summaries                            │     │
│  │ • Knowledge base (RAG)                           │     │
│  │ → Stored in: Vector DB, external DB              │     │
│  │ → Lifetime: across conversations                 │     │
│  └─────────────────────────────────────────────────┘     │
│                                                           │
│  EPISODIC MEMORY (Experience)                             │
│  ┌─────────────────────────────────────────────────┐     │
│  │ • Previous successful strategies                 │     │
│  │ • Mistakes and corrections                       │     │
│  │ • Solution patterns for similar tasks            │     │
│  │ → Stored in: Vector DB with metadata             │     │
│  │ → Lifetime: permanent, growing                   │     │
│  └─────────────────────────────────────────────────┘     │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

> **提示：** 短期記憶受到 LLM 上下文視窗的限制（GPT-4o 為 128K 標記，Claude 3.5 為 200K）。當對話太長時，您必須進行總結或截斷——這是建立生產代理時最大的挑戰之一。

---

## 4. 代理架構

這是最重要的部分 - 了解代理架構將幫助您正確設計系統。

### 4.1。 ReAct（推理+行動）

**ReAct**（Yao et al., 2022）是目前最受歡迎的模式。想法：LLM在**Thought**（思考）和**Action**（行動）之間交替，然後**觀察**結果，然後再繼續。

```text
┌────────────────────────────────────────────────────────┐
│                    ReAct PATTERN                        │
├────────────────────────────────────────────────────────┤
│                                                         │
│  Question: "Ai là CEO của công ty tạo ra iPhone,       │
│             và người đó sinh năm bao nhiêu?"            │
│                                                         │
│  ┌──────────────────────────────────────────┐          │
│  │ Thought 1: Tôi cần tìm công ty tạo iPhone│          │
│  │ Action 1:  search("company created iPhone")│         │
│  │ Observation 1: Apple Inc.                  │          │
│  └──────────────────────────────────────────┘          │
│                    │                                    │
│                    ▼                                    │
│  ┌──────────────────────────────────────────┐          │
│  │ Thought 2: Apple → CEO hiện tại là Tim Cook│        │
│  │ Action 2:  search("Tim Cook birth year")   │        │
│  │ Observation 2: 1960                         │        │
│  └──────────────────────────────────────────┘          │
│                    │                                    │
│                    ▼                                    │
│  ┌──────────────────────────────────────────┐          │
│  │ Thought 3: Đã đủ info → trả lời          │          │
│  │ Final Answer: Tim Cook, CEO Apple,        │          │
│  │              sinh năm 1960                │          │
│  └──────────────────────────────────────────┘          │
│                                                         │
│  Loop: Thought → Action → Observation → Thought → ...   │
│  Stop: Khi đủ info để trả lời (Final Answer)           │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**優點：**
- 簡單、易於實施
- 可解釋－可以讀取推理痕跡
- 與函數呼叫API良好的兼容性
- 最流行，很多框架支持

**缺點：**
- 貪婪－一步步決定，而不是大局觀
- 如果早期的步驟方向錯誤，很容易陷入困境
- 無回溯機制

### 4.2。計劃與執行

**計劃與執行**（Wang 等人，2023）將計劃和執行分為兩個階段。

```text
┌─────────────────────────────────────────────────────────┐
│              PLAN-AND-EXECUTE ARCHITECTURE                │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────────────────────────────────────────┐        │
│  │              PLANNER (LLM)                   │        │
│  │                                              │        │
│  │  Input: "Build a sentiment analysis API"     │        │
│  │                                              │        │
│  │  Plan:                                       │        │
│  │   Step 1: Choose sentiment model (BERT/RoBERTa)│      │
│  │   Step 2: Write inference function            │        │
│  │   Step 3: Create FastAPI endpoint             │        │
│  │   Step 4: Add error handling + validation     │        │
│  │   Step 5: Write tests                         │        │
│  │   Step 6: Create Dockerfile                   │        │
│  └────────────────────┬────────────────────────┘        │
│                       │                                  │
│                       ▼                                  │
│  ┌─────────────────────────────────────────────┐        │
│  │            EXECUTOR (Agent + Tools)           │        │
│  │                                              │        │
│  │  Step 1 → [code_exec] → model selected ✓    │        │
│  │  Step 2 → [write_file] → inference.py ✓     │        │
│  │  Step 3 → [write_file] → main.py ✓          │        │
│  │  Step 4 → [edit_file] → error handling ✓    │        │
│  │  Step 5 → [code_exec] → tests pass ✓       │        │
│  │  Step 6 → [write_file] → Dockerfile ✓      │        │
│  └────────────────────┬────────────────────────┘        │
│                       │                                  │
│                       ▼                                  │
│  ┌─────────────────────────────────────────────┐        │
│  │           RE-PLANNER (optional)               │        │
│  │  If step fails → adjust remaining plan        │        │
│  │  If new info → add/remove steps               │        │
│  └─────────────────────────────────────────────┘        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**優點：**
- 在採取行動之前查看任務概述
- 對於複雜、多步驟的任務有效
- 遇到問題時可以重新規劃

**缺點：**
- 如果任務不明確，最初的計劃可能是錯誤的
- 簡單任務的開銷（不必要的計畫）
- 重新規劃會增加延遲

### 4.3。反思（自我批判循環）

**反射**（Shinn 等人，2023）增加了**自我評估**的能力 - 代理執行任務，然後批評結果，如果不好則再次嘗試。

```text
┌─────────────────────────────────────────────────────────┐
│                REFLEXION ARCHITECTURE                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────┐                                           │
│  │  Task:   │                                           │
│  │ "Write   │                                           │
│  │  sort    │                                           │
│  │  algo"   │                                           │
│  └────┬─────┘                                           │
│       │                                                  │
│       ▼                                                  │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐          │
│  │  ACTOR   │───→│EVALUATOR │───→│REFLECTOR │          │
│  │          │    │          │    │          │          │
│  │ Generate │    │ Run tests│    │ "My sort │          │
│  │ solution │    │ Check    │    │  fails on│          │
│  │          │    │ result   │    │  negative│          │
│  │          │    │          │    │  nums"   │          │
│  └──────────┘    └──────────┘    └────┬─────┘          │
│       ▲                               │                  │
│       │         ┌──────────┐          │                  │
│       │         │ MEMORY   │          │                  │
│       └─────────│          │←─────────┘                  │
│                 │ Store    │                              │
│                 │ learnings│  "Need to handle             │
│                 │ from     │   negative numbers.          │
│                 │ failures │   Use abs() comparison"      │
│                 └──────────┘                              │
│                                                          │
│  Loop: Act → Evaluate → Reflect → Remember → Retry       │
│  Stop: Tests pass OR max_retries reached                  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**優點：**
- 透過每次嘗試來提升自我
- 從錯誤中學習－不要重複相同的錯誤
- 特別適合編碼任務（測試驅動）

**缺點：**
- 許多 LLM 調用 → 成本代幣 + 延遲
- 需要明確的評價功能
- 如果任務太困難，可以無限循環

### 4.4。 LATS（語言代理樹搜尋）

**LATS**（Zhou et al., 2023）將樹搜尋（如 AlphaGo 中的蒙特卡羅樹搜尋）與 LLM 代理程式結合。

```text
┌──────────────────────────────────────────────────────────┐
│                 LATS ARCHITECTURE                          │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  Root: "Debug this API returning 500 error"               │
│                    │                                      │
│         ┌──────────┼──────────┐                          │
│         ▼          ▼          ▼                           │
│    ┌─────────┐ ┌─────────┐ ┌─────────┐                  │
│    │ Path A  │ │ Path B  │ │ Path C  │                  │
│    │ Check   │ │ Check   │ │ Check   │                  │
│    │ logs    │ │ DB conn │ │ API     │                  │
│    │ Score:7 │ │ Score:4 │ │ schema  │                  │
│    └────┬────┘ └─────────┘ │ Score:8 │                  │
│         │                   └────┬────┘                  │
│         │                        │                        │
│    ┌────┴────┐             ┌────┴────┐                   │
│    │ Path A1 │             │ Path C1 │  ← expand best    │
│    │ Found   │             │ Schema  │                   │
│    │ timeout │             │ mismatch│                   │
│    │ error   │             │ found!  │                   │
│    │ Score:6 │             │ Score:9 │ ← SOLUTION ✓      │
│    └─────────┘             └─────────┘                   │
│                                                           │
│  Strategy: Explore multiple paths → score each            │
│           → expand best → backtrack if needed             │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

**優點：**
- 同時探索多種解決方案路徑
- 可以原路返回－不會卡住
- 複雜推理的最高品質

**缺點：**
- 計算量非常大（每個路徑都有許多LLM呼叫）
- 複雜的實施
- 對於簡單的任務來說太過分了

### 4.5。比較 4 種架構

|標準|反應 |計畫與執行|反思 |拉茲|
|----------|------|--------------------|---------|--------|
| **複雜性** | ⭐ 低 | ⭐⭐ 中 | ⭐⭐ 中 | ⭐⭐⭐ 高 |
| **品質** |好 |好極了 |太棒了|優秀|
| **延遲** |快|中|慢|非常慢|
| **代幣成本** |低|中|高|非常高 |
| **錯誤恢復** | ❌ 無 | ⚠️重新規劃| ✅ 自我修復 | ✅ 回溯 |
| **可解釋性** | ✅ 高 | ✅ 高 | ✅ 高 | ⚠️ 中等 |
| **最適合** |簡單的問答、找出 |多步驟項目|基因密碼，寫作|複雜推理|
| **框架** |浪鏈，最|郎圖|定制|定制|

> **提示：** 生產通常從 **ReAct** （簡單、快速）開始，然後在需要處理複雜任務時轉向 **計劃和執行**。 **反射**和**LATS** 用於當品質比速度更重要時的高風險任務（編碼、研究）。

---

## 5. 代理循環深入研究

### 5.1。偽代碼中的循環

```python
from typing import Literal

def agent_loop(
    goal: str,
    tools: dict,
    llm,
    max_iterations: int = 10,
) -> str:
    """Simplified agent loop — core pattern mọi framework đều follow."""
    
    # Initialize state
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": goal},
    ]
    iteration = 0
    
    while iteration < max_iterations:
        iteration += 1
        print(f"\n--- Iteration {iteration} ---")
        
        # REASONING: LLM quyết định next step
        response = llm.chat(messages, tools=tools)
        
        # CHECK: LLM muốn gọi tool hay trả lời?
        if response.has_tool_calls:
            # ACTION: Execute tool(s)
            for tool_call in response.tool_calls:
                tool_name = tool_call.function.name
                tool_args = tool_call.function.arguments
                
                print(f"  Tool: {tool_name}({tool_args})")
                
                # Execute tool
                result = tools[tool_name].execute(**tool_args)
                
                # PERCEPTION: Feed result back
                messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": str(result),
                })
        else:
            # STOP: LLM decided to give final answer
            final_answer = response.content
            print(f"  Final Answer: {final_answer}")
            return final_answer
    
    return "Max iterations reached — could not complete task."
```

### 5.2。狀態管理

代理狀態包括在任何時間繼續執行所需的所有資訊。

```text
┌────────────────────────────────────────────────────────┐
│                    AGENT STATE                          │
├────────────────────────────────────────────────────────┤
│                                                         │
│  state = {                                              │
│    "messages": [...],      # Full conversation history  │
│    "current_plan": [...],  # Remaining steps            │
│    "completed_steps": [...], # Done steps + results     │
│    "tool_results": {...},  # Cached tool outputs        │
│    "iteration": 5,         # Current loop count         │
│    "status": "running",    # running | completed | error│
│    "metadata": {           # Extra context              │
│       "start_time": "...",                              │
│       "tokens_used": 4520,                              │
│       "tools_called": ["search", "code_exec"],          │
│    }                                                    │
│  }                                                      │
│                                                         │
└────────────────────────────────────────────────────────┘
```

### 5.3。停止條件

代理循環需要知道何時停止—它不能永遠運作。

|停止條件|說明 |優先事項 |
|--------------------|--------|----------|
| **任務完成** | LLM決定付費最終答案| ✅ 小學 |
| **最大迭代次數** |達到循環限制（例如 15）| 🛡️安全|
| **最大令牌** |超出預算的代幣 | 🛡️安全|
| **逾時** |超過時間限制 | 🛡️安全|
| **錯誤閾值** |連續錯誤太多 | 🛡️安全|
| **人為中斷** |使用者取消或修改任務| ⚠️ 覆蓋 |
| **重複動作** |代理人使用相同的參數呼叫相同的工具 | 🔄 循環偵測 |

> **提示：** 在生產中始終設定 **max_iterations** 和 **timeout**。代理循環沒有安全限制=花費無限的金錢。例如，GPT-4o 的輸入令牌為 2.50 美元/100 萬美元，具有長上下文的 50 次迭代的代理循環每個請求的成本可能為 5-10 美元。

---

## 6. AI 代理程式的分類

### 6.1。從簡單到複雜分類

根據經典人工智慧教科書（Russell & Norvig），智能體從簡單到複雜分為 5 種類型：

```text
Complexity & Capability →
─────────────────────────────────────────────────────────→

┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
│  Simple    │ │  Model-    │ │  Goal-     │ │  Utility-  │ │  Learning  │
│  Reflex    │ │  Based     │ │  Based     │ │  Based     │ │  Agent     │
│            │ │            │ │            │ │            │ │            │
│ IF rain    │ │ Tracks     │ │ Has a      │ │ Optimizes  │ │ Improves   │
│ THEN       │ │ world      │ │ goal to    │ │ for best   │ │ over time  │
│ umbrella   │ │ state      │ │ achieve    │ │ outcome    │ │ from exp.  │
│            │ │            │ │            │ │            │ │            │
│ No memory  │ │ Has memory │ │ Plans      │ │ Evaluates  │ │ Self-      │
│ No goal    │ │ Predicts   │ │ actions    │ │ tradeoffs  │ │ improving  │
└────────────┘ └────────────┘ └────────────┘ └────────────┘ └────────────┘
     ▲              ▲              ▲              ▲              ▲
     │              │              │              │              │
  Thermostat    Spam filter    GPS nav       Trading bot    AlphaGo
  Rule engine   Autocomplete   Game AI      Recommendation  Modern LLM
                                             system          Agents
```

### 6.2。詳細對照表

|類型 |記憶體|規劃|學習 | AI 代理範例 |現實世界|
|--------|--------|----------|----------|------------|------------|
| **簡單的反射** | ❌ 無 | ❌ 無 | ❌ 無 | If-else 聊天機器人 |恆溫器、自動販賣機|
| **基於模型** | ✅ 世界模特兒 | ❌ 無 | ❌ 無 |情境感知助手 |垃圾郵件過濾器、自動完成 |
| **基於目標** | ✅ 世界模特兒 | ✅ 搜尋/方案 | ❌ 無 |附工具的 ReAct 代理 | GPS導航、遊戲AI |
| **基於實用性** | ✅ 世界模特兒 | ✅ 最佳化 | ❌ 無 |代理商選擇最佳工具 |交易機器人、廣告競標 |
| **學習** | ✅ 情境式 | ✅ 自適應 | ✅ 是的 |反射劑| AlphaGo，現代人工智慧代理 |

### 6.3。映射到現代 LLM 代理

```text
Modern LLM Agent = LEARNING AGENT (loại phức tạp nhất)

Tại sao?
  ✓ Memory: conversation history + vector DB (long-term)
  ✓ Planning: LLM generates step-by-step plans
  ✓ Learning: Reflexion — tự critique và cải thiện
  ✓ Utility: LLM evaluates multiple options, chọn best
  ✓ Model-Based: LLM có "world model" from training data

Tuy nhiên, cũng có giới hạn:
  ✗ Learning không persistent (trừ khi save to memory)
  ✗ World model bị outdated (training cutoff)
  ✗ Planning chưa reliable (hallucinate plan)
```

> **提示：** 設計代理程式時，從能夠解決問題的最簡單的類型開始。並不是每個任務都需要學習代理程式－很多時候基於目標的代理程式（ReAct + 工具）就足夠了。過度設計代理架構是常見的錯誤。

---

## 7. 真實世界的 AI 代理用例

### 7.1。用例匯總表

|類 |代理|使用的工具 |建築|
|----------|---------|------------|--------------|
| **編碼** | GitHub Copilot、遊標、Devin |程式碼執行、檔案系統、git、瀏覽器 |規劃與執行+反思|
| **客戶支援** |對講 Fin、Zendesk AI |知識庫、票務 API、CRM |反應 + RAG |
| **資料分析** | Julius AI，程式碼解釋器 | Python REPL、圖表、檔案 I/O |反應 |
| **研究** |困惑，引出|網路搜尋、PDF 解析器、引文資料庫 | ReAct + 多重來源 |
| **開發營運** | PagerDuty AI，Kubiya | kubectl、雲端 API、監控 |計畫與執行|
| **銷售** |克萊，阿波羅人工智慧 | CRM、電子郵件、LinkedIn、豐富 |工作流程+代理混合 |
| **法律** |哈維人工智慧|文件檢索、引用、起草 | RAG + 反應 |
| **醫療保健** |希波克拉底人工智慧 |醫療知識庫、病患記錄、日程安排 | RAG + 護欄 |

### 7.2。案例研究：編碼代理（Devin-like）

```text
┌──────────────────────────────────────────────────────────────┐
│                  CODING AGENT ARCHITECTURE                     │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  User: "Add user authentication to my FastAPI app"            │
│                                                               │
│  PLANNER:                                                     │
│  ┌─────────────────────────────────────────────────┐         │
│  │ 1. Analyze existing codebase (read files)        │         │
│  │ 2. Design auth schema (JWT + bcrypt)             │         │
│  │ 3. Install dependencies (python-jose, passlib)   │         │
│  │ 4. Create User model + migration                 │         │
│  │ 5. Write auth utils (hash, verify, JWT)          │         │
│  │ 6. Create auth endpoints (register, login)       │         │
│  │ 7. Add middleware for protected routes            │         │
│  │ 8. Write tests                                   │         │
│  │ 9. Run tests, fix if failed                      │         │
│  └─────────────────────────────────────────────────┘         │
│                                                               │
│  EXECUTOR:                                                    │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐            │
│  │ File   │  │Terminal│  │ Code   │  │Browser │            │
│  │ System │  │ (bash) │  │ Editor │  │(docs)  │            │
│  │ R/W    │  │ pip,git│  │ Edit   │  │ Search │            │
│  └────────┘  └────────┘  └────────┘  └────────┘            │
│                                                               │
│  REFLEXION:                                                   │
│  Test failed → Read error → Fix code → Retry → Pass ✓       │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

### 7.3。案例研究：客戶支援代理

```text
Customer: "Tôi đặt hàng 3 ngày rồi mà chưa nhận được"

Agent Flow:
  1. [PERCEIVE] Parse intent: order tracking inquiry
  2. [REASON]   Cần order ID → hỏi customer hoặc lookup by email
  3. [ACT]      Call CRM API: get_orders(email="customer@...")
  4. [PERCEIVE] Order #12345 — status: "shipped", tracking: VN123456
  5. [REASON]   Có tracking → check shipping API
  6. [ACT]      Call shipping API: track("VN123456")
  7. [PERCEIVE] "In transit — estimated delivery: tomorrow"
  8. [REASON]   Đủ info → compose response
  9. [ACT]      Reply: "Đơn hàng #12345 đang trên đường giao,
                        dự kiến nhận ngày mai. Tracking: VN123456"

Total: 4 tool calls, ~3 seconds, no human intervention
```

---

## 8. 實踐：從頭開始建立最小代理

### 8.1。安裝

```bash
pip install openai
```

### 8.2。工具的定義

```python
import json
import math
from datetime import datetime

# Tool definitions (OpenAI function calling format)
TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "calculate",
            "description": "Evaluate a math expression. Supports +, -, *, /, sqrt, pow.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "Math expression, e.g. '2 + 3 * 4' or 'sqrt(144)'"
                    }
                },
                "required": ["expression"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_current_time",
            "description": "Get current date and time.",
            "parameters": {
                "type": "object",
                "properties": {}
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "search_knowledge",
            "description": "Search a knowledge base for information.",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "Search query"
                    }
                },
                "required": ["query"]
            }
        }
    },
]

# Tool implementations
KNOWLEDGE_BASE = {
    "python": "Python is a high-level programming language created by Guido van Rossum in 1991.",
    "fastapi": "FastAPI is a modern Python web framework for building APIs, created by Sebastián Ramírez.",
    "langchain": "LangChain is a framework for building LLM applications, created by Harrison Chase in 2022.",
}

def execute_tool(name: str, args: dict) -> str:
    """Execute a tool and return result as string."""
    if name == "calculate":
        try:
            # Safe math evaluation (production cần sandbox!)
            allowed = {
                "sqrt": math.sqrt, "pow": pow, "abs": abs,
                "sin": math.sin, "cos": math.cos, "pi": math.pi,
            }
            result = eval(args["expression"], {"__builtins__": {}}, allowed)
            return f"Result: {result}"
        except Exception as e:
            return f"Error: {e}"
    
    elif name == "get_current_time":
        return f"Current time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
    
    elif name == "search_knowledge":
        query = args["query"].lower()
        matches = [v for k, v in KNOWLEDGE_BASE.items() if k in query]
        return matches[0] if matches else "No relevant information found."
    
    return f"Unknown tool: {name}"
```

### 8.3。 Agent Loop－ReAct 風格

```python
from openai import OpenAI

client = OpenAI()  # OPENAI_API_KEY from env

SYSTEM_PROMPT = """You are a helpful AI assistant with access to tools.
Use tools when needed to answer questions accurately.
Think step-by-step before deciding which tool to use.
When you have enough information, provide a final answer directly."""


def run_agent(user_query: str, max_iterations: int = 5) -> str:
    """Run a minimal ReAct-style agent loop."""
    
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": user_query},
    ]
    
    for i in range(max_iterations):
        print(f"\n🔄 Iteration {i + 1}")
        
        # LLM decides: use tool or answer directly
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            tools=TOOLS,
            tool_choice="auto",
        )
        
        msg = response.choices[0].message
        messages.append(msg)  # Add assistant message to history
        
        # Check if LLM wants to call tools
        if msg.tool_calls:
            for tool_call in msg.tool_calls:
                func_name = tool_call.function.name
                func_args = json.loads(tool_call.function.arguments)
                
                print(f"  🔧 Tool: {func_name}({func_args})")
                
                # Execute tool
                result = execute_tool(func_name, func_args)
                print(f"  📋 Result: {result}")
                
                # Feed result back to LLM
                messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": result,
                })
        else:
            # No tool calls = final answer
            print(f"\n✅ Final Answer: {msg.content}")
            return msg.content
    
    return "⚠️ Max iterations reached."


# Test the agent
if __name__ == "__main__":
    # Test 1: Simple calculation
    run_agent("What is sqrt(144) + 10 * 3?")
    
    # Test 2: Knowledge search
    run_agent("Tell me about LangChain and who created it")
    
    # Test 3: Multi-step reasoning
    run_agent("What time is it now, and what is 24 minus the current hour?")
```

### 8.4。樣本輸出

```text
🔄 Iteration 1
  🔧 Tool: calculate({"expression": "sqrt(144) + 10 * 3"})
  📋 Result: Result: 42.0

🔄 Iteration 2

✅ Final Answer: sqrt(144) + 10 * 3 = 42.0
   - sqrt(144) = 12
   - 10 * 3 = 30
   - 12 + 30 = 42
```

### 8.5。升級：新增記憶體和錯誤處理

```python
class SimpleAgent:
    """Agent với memory và error handling."""
    
    def __init__(self, model: str = "gpt-4o-mini", max_iterations: int = 10):
        self.client = OpenAI()
        self.model = model
        self.max_iterations = max_iterations
        self.conversation_history = []  # Long-term memory (across calls)
    
    def run(self, query: str) -> str:
        messages = [
            {"role": "system", "content": SYSTEM_PROMPT},
            # Include recent conversation history (short-term memory)
            *self.conversation_history[-10:],  # Last 5 exchanges
            {"role": "user", "content": query},
        ]
        
        consecutive_errors = 0
        
        for i in range(self.max_iterations):
            try:
                response = self.client.chat.completions.create(
                    model=self.model,
                    messages=messages,
                    tools=TOOLS,
                    tool_choice="auto",
                )
                
                msg = response.choices[0].message
                messages.append(msg)
                consecutive_errors = 0  # Reset error counter
                
                if msg.tool_calls:
                    for tc in msg.tool_calls:
                        name = tc.function.name
                        args = json.loads(tc.function.arguments)
                        result = execute_tool(name, args)
                        
                        messages.append({
                            "role": "tool",
                            "tool_call_id": tc.id,
                            "content": result,
                        })
                else:
                    # Save to conversation history
                    self.conversation_history.append(
                        {"role": "user", "content": query}
                    )
                    self.conversation_history.append(
                        {"role": "assistant", "content": msg.content}
                    )
                    return msg.content
                    
            except Exception as e:
                consecutive_errors += 1
                if consecutive_errors >= 3:
                    return f"Agent stopped: too many consecutive errors. Last: {e}"
                messages.append({
                    "role": "user",
                    "content": f"Error occurred: {e}. Please try a different approach.",
                })
        
        return "Max iterations reached."


# Usage
agent = SimpleAgent()
print(agent.run("What is 2^10?"))
print(agent.run("And what about 2^20?"))  # Agent remembers previous context
```

> **提示：**上面的程式碼是**最小可行代理** - 足以理解這個概念。生產代理需要新增：結構化日誌記錄、令牌計數、速率限制、非同步執行、程式碼執行的適當沙箱以及全面的錯誤處理。以下文章將深入探討每個部分。

---

## 9. 代理設計模式 — 總結

### 9.1。圖案選擇指南

```text
                        Chọn Agent Architecture nào?
                                │
                    ┌───────────┴───────────┐
                    │                       │
              Task đơn giản?          Task phức tạp?
              (1-3 tool calls)        (multi-step)
                    │                       │
                    ▼                       │
                  ReAct              ┌──────┴──────┐
                                    │             │
                              Cần planning?   Cần self-fix?
                                    │             │
                                    ▼             ▼
                            Plan-and-Execute  Reflexion
                                    │
                              ┌─────┴─────┐
                              │           │
                        One best path? Multiple paths?
                              │           │
                              ▼           ▼
                         Keep P&E       LATS
```

### 9.2。生產清單

在構建生產代理時，始終確保：

|方面|檢查什麼 |為什麼 |
|--------|--------------|-----|
| **安全限制** |最大迭代次數、逾時、代幣預算 |避免死循環、成本爆炸|
| **錯誤處理** |重試邏輯、回退、優雅降級 |代理必須有彈性 |
| **可觀察性** |記錄每個步驟：想法、工具呼叫、結果 |調試和改進 |
| **護欄** |輸入/輸出驗證、內容過濾 |防止有害行為|
| **人在環路** |破壞性行為的批准|安全網|
| **成本追蹤** |每個請求的代幣使用情況、每日預算 |控制開支|
| **測試** |單元測試工具、整合測試全循環|可靠性|
| **評估** |成功率、延遲、每項任務的成本 |持續改善|

---

## 總結

本文涵蓋了 AI Agent 的所有基礎知識——從定義到架構再到實際實現。

**重點：**

1. **AI Agent = LLM + 工具 + 記憶體 + 目標 + 循環**－與聊天機器人相比，核心差異在於**自主性**（自我決定、自我行動、自我修正）。
2. **4個核心組件：** 感知、大腦/推理、行動、記憶－每個智能體都有這4個組件。
3. **4 個主要架構：** ReAct（簡單、快速）、規劃和執行（針對複雜任務）、Reflexion（自我改進）、LATS（探索多條路徑）－為正確的問題選擇正確的架構。
4. **代理循環**是核心模式：感知→推理→行動→循環。必須有明確的停止條件。
5. **分類：** 從簡單反射到學習代理 — 現代 LLM 代理是最複雜的類型，但並不總是需要該等級。
6. **生產代理**需要安全限制、錯誤處理、可觀察性、護欄和人機互動。
7. **從簡單開始** — ReAct + 少量工具足以滿足許多用例。不要過度設計。

```text
Agent Knowledge Map (Bài 12):

  ┌──────────────────────────────────────────────────┐
  │  WHAT: Agent = LLM + Tools + Memory + Loop       │
  │  WHY:  Autonomous task completion                 │
  │  HOW:  Perceive → Reason → Act → Loop            │
  │                                                   │
  │  Architectures:                                   │
  │    ReAct ──→ Plan-and-Execute ──→ Reflexion ──→ LATS│
  │    (simple)   (structured)      (self-fix)   (search)│
  │                                                   │
  │  Types: Reflex → Model → Goal → Utility → Learning│
  │                                                   │
  │  Production: Limits + Logging + Guardrails +      │
  │              Human-in-the-loop + Evaluation       │
  └──────────────────────────────────────────────────┘
```

---

## 下一篇文章

**第 13 課：工具呼叫、函數呼叫和 ReAct 模式** — 深入了解代理程式最重要的元件：**工具**。您將學習如何使用 OpenAI 函數呼叫 API 定義工具、實作完整的 ReAct 模式、建立自訂工具（Web 搜尋、資料庫查詢、程式碼執行）以及處理生產中工具呼叫的錯誤處理 + 重試邏輯。從本文的迷你代理，我們將把它升級為擁有10+工具的真正的代理系統。

