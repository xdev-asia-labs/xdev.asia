---
id: 019e0a01-bb12-7001-c001-ee1200000001
title: "Bài 12: AI Agent Fundamentals — Concepts & Architecture"
slug: bai-12-ai-agent-fundamentals-concepts
description: >-
  AI Agent là gì? Agent vs Chatbot vs Pipeline. Core components: perception, reasoning, action. Agent architectures: ReAct, Plan-and-Execute, Reflexion. Agent loop, state management. Taxonomy of AI Agents. Real-world use cases.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: AI Agent & Agent-based Systems"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **Bạn hỏi ChatGPT một câu, nó trả lời. Bạn hỏi AI Agent một câu, nó lên kế hoạch, gọi 5 tool khác nhau, tự sửa lỗi, rồi deliver kết quả hoàn chỉnh.** Chatbot là reactive — chờ bạn hỏi rồi trả lời. Agent là proactive — nó tự suy nghĩ, tự hành động, tự đánh giá kết quả. Sự khác biệt này chính là lý do tại sao 2024-2025 là năm bùng nổ của AI Agent — từ Devin (coding agent), tới AutoGPT, tới hàng loạt startup xây agent cho customer support, data analysis, DevOps. Bài này ta sẽ đi từ gốc: **AI Agent là gì**, **architecture** hoạt động thế nào, các **design patterns** phổ biến, và cuối cùng sẽ **code một mini agent từ scratch** để bạn hiểu sâu từng component.

---

## 1. AI Agent là gì?

### 1.1. Định nghĩa

**AI Agent** (Autonomous Agent) là một hệ thống phần mềm sử dụng LLM làm "bộ não" (brain) để tự động **nhận thức** (perceive) môi trường, **suy luận** (reason) về mục tiêu, và **hành động** (act) để hoàn thành task — lặp đi lặp lại cho đến khi đạt kết quả mong muốn.

Công thức cốt lõi:

```text
Agent = LLM  +  Tools  +  Memory  +  Goal  +  Loop
         │         │         │         │         │
    Brain/       Hands     Brain      Why       How
    Reasoning    (APIs,    (history,  (task     (iterate
    Engine       code,     context)   to do)    until done)
                 search)
```

### 1.2. Perception → Reasoning → Action Loop

Mọi AI Agent đều tuân theo vòng lặp cơ bản:

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

### 1.3. Ví dụ thực tế

Bạn nói với agent: *"Tìm top 5 framework xây AI Agent phổ biến nhất, so sánh chúng, rồi viết báo cáo Markdown."*

Agent sẽ:
1. **Perceive:** Hiểu task — cần research, compare, viết report
2. **Reason:** Lên plan — bước 1 search web, bước 2 so sánh, bước 3 viết
3. **Act:** Gọi web search tool → lấy top 5 frameworks
4. **Perceive:** Đọc kết quả search → thấy LangGraph, CrewAI, AutoGen, LlamaIndex, Semantic Kernel
5. **Reason:** Cần so sánh theo tiêu chí: ease of use, multi-agent, production-ready
6. **Act:** Tìm thêm chi tiết từng framework → viết comparison table
7. **Reason:** Đủ data, viết final report
8. **Act:** Output Markdown report hoàn chỉnh

> **Lưu ý:** Không có lúc nào con người phải can thiệp giữa chừng. Agent tự quyết bao nhiêu bước, gọi tool nào, dừng khi nào — đó chính là **autonomy**.

---

## 2. Agent vs Chatbot vs Pipeline vs Workflow

### 2.1. Comparison Table

| Feature | Chatbot | Pipeline | Workflow | AI Agent |
|---------|---------|----------|----------|----------|
| **Autonomy** | ❌ Reactive — chờ user | ❌ Fixed sequence | ⚠️ Conditional branching | ✅ Self-directed |
| **Decision-making** | Minimal | None | Rule-based | LLM-powered |
| **Tool use** | ❌ Không | ❌ Hardcoded steps | ⚠️ Predefined tools | ✅ Dynamic tool selection |
| **Planning** | ❌ Không | ❌ Không | ⚠️ Predefined flow | ✅ LLM generates plan |
| **Error recovery** | ❌ User retry | ❌ Fail & stop | ⚠️ Fallback paths | ✅ Self-correction |
| **Memory** | Session-only | None | None | Short + long-term |
| **Multi-step** | ❌ Single turn | ✅ Fixed steps | ✅ Fixed branches | ✅ Dynamic steps |
| **Examples** | ChatGPT, Gemini | ETL, CI/CD | n8n, Zapier, Airflow | Devin, AutoGPT, Cursor |

### 2.2. Kiến trúc so sánh

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

### 2.3. Khi nào dùng gì?

```text
Task đơn giản, Q&A ──────────────────→ Chatbot
Task fixed steps, data processing ───→ Pipeline
Task conditional, business logic ────→ Workflow (n8n, Airflow)
Task complex, cần reasoning + tools ─→ AI Agent
```

> **Tips:** Rất nhiều hệ thống production dùng hybrid approach — Workflow orchestration ở high level (ví dụ Airflow schedules job hàng ngày), trong đó từng node là một AI Agent xử lý task phức tạp. Đừng dùng Agent cho mọi thứ — simple tasks nên dùng simple tools.

---

## 3. Core Components of an AI Agent

### 3.1. Architecture Overview

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

### 3.2. Component 1: Perception (Nhận thức)

Perception là cách agent "nhìn thấy" thế giới xung quanh — nhận input, parse kết quả tool, đọc error messages.

| Input Type | Mô tả | Ví dụ |
|-----------|--------|-------|
| User message | Câu hỏi/yêu cầu ban đầu | "Tìm bug trong file main.py" |
| Tool output | Kết quả từ tool call | JSON response từ API |
| Error/Exception | Lỗi khi thực thi | `FileNotFoundError: main.py` |
| Environment state | Thông tin context | Current directory, OS, time |
| Human feedback | Phản hồi mid-loop | "Không, tôi muốn Python, không phải JS" |

### 3.3. Component 2: Brain/Reasoning (LLM)

LLM là "bộ não" — component quan trọng nhất. Nó đảm nhận 3 việc chính:

**a) Reasoning (Suy luận):**
- Hiểu vấn đề, phân tích information
- Chain-of-Thought: suy nghĩ từng bước trước khi quyết định
- Xác định thiếu gì → cần gọi tool nào

**b) Planning (Lập kế hoạch):**
- Decompose task lớn thành sub-tasks nhỏ
- Xác định thứ tự thực hiện
- Predict kết quả của mỗi bước

**c) Decision-Making (Ra quyết định):**
- Chọn tool phù hợp nhất cho bước tiếp theo
- Quyết định dùng tool hay trả lời trực tiếp
- Quyết định dừng loop hay tiếp tục

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

### 3.4. Component 3: Action (Hành động)

Action là "đôi tay" của agent — thực thi quyết định thông qua tools.

| Tool Category | Examples | Capabilities |
|--------------|----------|-------------|
| **Web Search** | Google, Bing, Tavily | Tìm kiếm thông tin real-time |
| **Code Execution** | Python REPL, sandbox | Chạy code, tính toán |
| **API Calls** | REST, GraphQL | Giao tiếp với external services |
| **File System** | Read/Write files | Thao tác file, folder |
| **Database** | SQL queries | Query, insert, update data |
| **Browser** | Playwright, Selenium | Web scraping, automation |
| **Communication** | Email, Slack | Gửi thông báo, messages |

### 3.5. Component 4: Memory (Bộ nhớ)

Memory giúp agent nhớ context qua các bước và sessions.

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

> **Tips:** Short-term memory bị giới hạn bởi context window của LLM (128K tokens cho GPT-4o, 200K cho Claude 3.5). Khi conversation quá dài, phải summarize hoặc truncate — đây là một trong những thách thức lớn nhất khi build production agent.

---

## 4. Agent Architectures

Đây là phần quan trọng nhất — hiểu các kiến trúc agent sẽ giúp bạn thiết kế system đúng cách.

### 4.1. ReAct (Reasoning + Acting)

**ReAct** (Yao et al., 2022) là pattern phổ biến nhất hiện tại. Ý tưởng: LLM xen kẽ giữa **Thought** (suy nghĩ) và **Action** (hành động), rồi **Observe** kết quả trước khi tiếp tục.

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

**Ưu điểm:**
- Simple, dễ implement
- Interpretable — có thể đọc reasoning trace
- Tương thích tốt với function calling API
- Phổ biến nhất, nhiều framework hỗ trợ

**Nhược điểm:**
- Greedy — quyết định từng bước, không nhìn tổng thể
- Dễ bị stuck nếu early steps sai hướng
- Không có cơ chế backtrack

### 4.2. Plan-and-Execute

**Plan-and-Execute** (Wang et al., 2023) tách biệt planning và execution thành 2 phase.

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

**Ưu điểm:**
- Nhìn tổng quan task trước khi hành động
- Hiệu quả cho complex, multi-step tasks
- Có thể re-plan khi gặp vấn đề

**Nhược điểm:**
- Initial plan có thể sai nếu task chưa rõ ràng
- Overhead cho simple tasks (planning không cần thiết)
- Re-planning thêm latency

### 4.3. Reflexion (Self-Critique Loop)

**Reflexion** (Shinn et al., 2023) thêm khả năng **tự đánh giá** — agent thực hiện task, rồi tự critique kết quả, rồi thử lại nếu chưa tốt.

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

**Ưu điểm:**
- Tự cải thiện qua mỗi attempt
- Học từ sai lầm — cùng lỗi không lặp lại
- Đặc biệt tốt cho coding tasks (test-driven)

**Nhược điểm:**
- Nhiều LLM calls → tốn token + latency
- Cần evaluation function rõ ràng
- Có thể loop vô hạn nếu task quá khó

### 4.4. LATS (Language Agent Tree Search)

**LATS** (Zhou et al., 2023) kết hợp tree search (giống Monte Carlo Tree Search trong AlphaGo) với LLM agent.

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

**Ưu điểm:**
- Explore nhiều solution paths cùng lúc
- Có thể backtrack — không bị stuck
- Quality cao nhất cho complex reasoning

**Nhược điểm:**
- Rất tốn compute (nhiều LLM calls cho mỗi path)
- Complex implementation
- Overkill cho simple tasks

### 4.5. So sánh 4 architectures

| Criteria | ReAct | Plan-and-Execute | Reflexion | LATS |
|----------|-------|-------------------|-----------|------|
| **Complexity** | ⭐ Low | ⭐⭐ Medium | ⭐⭐ Medium | ⭐⭐⭐ High |
| **Quality** | Good | Good-Great | Great | Excellent |
| **Latency** | Fast | Medium | Slow | Very Slow |
| **Token cost** | Low | Medium | High | Very High |
| **Error recovery** | ❌ None | ⚠️ Re-plan | ✅ Self-fix | ✅ Backtrack |
| **Interpretability** | ✅ High | ✅ High | ✅ High | ⚠️ Medium |
| **Best for** | Simple Q&A, lookups | Multi-step projects | Code gen, writing | Complex reasoning |
| **Frameworks** | LangChain, most | LangGraph | Custom | Custom |

> **Tips:** Production thường bắt đầu với **ReAct** (đơn giản, nhanh), rồi nâng lên **Plan-and-Execute** khi cần handle complex tasks. **Reflexion** và **LATS** dùng cho high-stakes tasks (coding, research) khi quality quan trọng hơn speed.

---

## 5. Agent Loop Deep-Dive

### 5.1. The Loop in Pseudocode

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

### 5.2. State Management

Agent state bao gồm tất cả thông tin cần thiết để tiếp tục execution tại bất kỳ điểm nào.

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

### 5.3. Stopping Conditions

Agent loop cần biết khi nào dừng — không thể chạy mãi.

| Stopping Condition | Mô tả | Priority |
|-------------------|--------|----------|
| **Task completed** | LLM quyết định trả final answer | ✅ Primary |
| **Max iterations** | Đạt giới hạn vòng lặp (ví dụ 15) | 🛡️ Safety |
| **Max tokens** | Hết budget token | 🛡️ Safety |
| **Timeout** | Quá thời gian cho phép | 🛡️ Safety |
| **Error threshold** | Quá nhiều consecutive errors | 🛡️ Safety |
| **Human interrupt** | User cancel hoặc modify task | ⚠️ Override |
| **Repeated action** | Agent gọi cùng tool với cùng args | 🔄 Loop detect |

> **Tips:** Luôn set **max_iterations** và **timeout** trong production. Agent loop không có safety limit = tốn tiền vô hạn. Ví dụ: GPT-4o ở $2.50/1M input tokens, một agent loop 50 iterations với long context có thể tốn $5-10 cho một request.

---

## 6. Taxonomy of AI Agents

### 6.1. Phân loại từ đơn giản đến phức tạp

Dựa theo giáo trình AI kinh điển (Russell & Norvig), có 5 loại agent từ đơn giản đến phức tạp:

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

### 6.2. Comparison Table chi tiết

| Type | Memory | Planning | Learning | Ví dụ AI Agent | Real-world |
|------|--------|----------|----------|---------------|------------|
| **Simple Reflex** | ❌ None | ❌ None | ❌ None | If-else chatbot | Thermostat, vending machine |
| **Model-Based** | ✅ World model | ❌ None | ❌ None | Context-aware assistant | Spam filter, autocomplete |
| **Goal-Based** | ✅ World model | ✅ Search/Plan | ❌ None | ReAct agent với tools | GPS navigation, game AI |
| **Utility-Based** | ✅ World model | ✅ Optimized | ❌ None | Agent chọn best tool | Trading bot, ad bidding |
| **Learning** | ✅ Episodic | ✅ Adaptive | ✅ Yes | Reflexion agent | AlphaGo, modern AI agents |

### 6.3. Mapping vào LLM Agent hiện đại

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

> **Tips:** Khi design agent, hãy bắt đầu từ loại đơn giản nhất có thể giải quyết problem. Không phải mọi task đều cần Learning Agent — nhiều khi Goal-Based Agent (ReAct + tools) là đủ. Over-engineering agent architecture là sai lầm phổ biến.

---

## 7. Real-World AI Agent Use Cases

### 7.1. Bảng tổng hợp use cases

| Category | Agent | Tools Used | Architecture |
|----------|-------|-----------|--------------|
| **Coding** | GitHub Copilot, Cursor, Devin | Code exec, file system, git, browser | Plan-and-Execute + Reflexion |
| **Customer Support** | Intercom Fin, Zendesk AI | Knowledge base, ticketing API, CRM | ReAct + RAG |
| **Data Analysis** | Julius AI, Code Interpreter | Python REPL, charting, file I/O | ReAct |
| **Research** | Perplexity, Elicit | Web search, PDF parser, citation DB | ReAct + multi-source |
| **DevOps** | PagerDuty AI, Kubiya | kubectl, cloud APIs, monitoring | Plan-and-Execute |
| **Sales** | Clay, Apollo AI | CRM, email, LinkedIn, enrichment | Workflow + Agent hybrid |
| **Legal** | Harvey AI | Document search, citation, drafting | RAG + ReAct |
| **Healthcare** | Hippocratic AI | Medical KB, patient records, scheduling | RAG + Guard rails |

### 7.2. Case Study: Coding Agent (Devin-like)

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

### 7.3. Case Study: Customer Support Agent

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

## 8. Hands-on: Build a Minimal Agent from Scratch

### 8.1. Cài đặt

```bash
pip install openai
```

### 8.2. Định nghĩa Tools

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

### 8.3. Agent Loop — ReAct Style

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

### 8.4. Output mẫu

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

### 8.5. Nâng cấp: Thêm Memory và Error Handling

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

> **Tips:** Code trên là **minimal viable agent** — đủ để hiểu concept. Production agent cần thêm: structured logging, token counting, rate limiting, async execution, proper sandboxing cho code execution, và comprehensive error handling. Các bài tiếp theo sẽ đi sâu vào từng phần.

---

## 9. Agent Design Patterns — Tổng hợp

### 9.1. Pattern Selection Guide

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

### 9.2. Production Checklist

Khi build agent cho production, luôn đảm bảo:

| Aspect | What to check | Why |
|--------|--------------|-----|
| **Safety limits** | max_iterations, timeout, token budget | Tránh infinite loop, cost explosion |
| **Error handling** | Retry logic, fallback, graceful degradation | Agent phải resilient |
| **Observability** | Log mỗi step: thought, tool call, result | Debug và improve |
| **Guardrails** | Input/output validation, content filtering | Ngăn harmful actions |
| **Human-in-the-loop** | Approval for destructive actions | Safety net |
| **Cost tracking** | Token usage per request, daily budget | Control spending |
| **Testing** | Unit test tools, integration test full loop | Reliability |
| **Evaluation** | Success rate, latency, cost per task | Continuous improvement |

---

## Tổng kết

Bài này đã cover toàn bộ fundamentals về AI Agent — từ definition đến architecture đến hands-on implementation.

**Key takeaways:**

1. **AI Agent = LLM + Tools + Memory + Goal + Loop** — khác biệt cốt lõi so với chatbot là **autonomy** (tự quyết, tự hành động, tự sửa lỗi).
2. **4 core components:** Perception (nhận thức), Brain/Reasoning (suy luận), Action (hành động), Memory (bộ nhớ) — mọi agent đều có 4 thành phần này.
3. **4 architectures chính:** ReAct (đơn giản, nhanh), Plan-and-Execute (cho complex tasks), Reflexion (self-improvement), LATS (explore nhiều paths) — chọn đúng architecture cho đúng problem.
4. **Agent Loop** là pattern cốt lõi: perceive → reason → act → loop. Phải có stopping conditions rõ ràng.
5. **Taxonomy:** Từ Simple Reflex đến Learning Agent — modern LLM agent thuộc loại phức tạp nhất nhưng không phải lúc nào cũng cần level đó.
6. **Production agents** cần safety limits, error handling, observability, guardrails, và human-in-the-loop.
7. **Start simple** — ReAct + few tools đã đủ cho nhiều use cases. Đừng over-engineer.

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

## Bài tiếp theo

**Bài 13: Tool Calling, Function Calling & ReAct Pattern** — đi sâu vào component quan trọng nhất của agent: **tools**. Bạn sẽ học cách define tools với OpenAI Function Calling API, implement ReAct pattern đầy đủ, build custom tools (web search, database query, code execution), và xử lý error handling + retry logic cho tool calls trong production. Từ mini agent của bài này, ta sẽ nâng cấp thành một agent system thực thụ với 10+ tools.

