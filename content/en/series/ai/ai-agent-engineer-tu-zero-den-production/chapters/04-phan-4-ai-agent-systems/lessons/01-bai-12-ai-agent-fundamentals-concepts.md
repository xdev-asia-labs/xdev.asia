---
id: 019e0a01-bb12-7001-c001-ee1200000001
title: 'Lesson 12: AI Agent Fundamentals — Concepts & Architecture'
slug: bai-12-ai-agent-fundamentals-concepts
description: >-
  What is AI Agent? Agent vs Chatbot vs Pipeline. Core components: perception,
  reasoning, action. Agent architectures: ReAct, Plan-and-Execute, Reflexion.
  Agent loop, state management. Taxonomy of AI Agents. Real-world use cases.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 4: AI Agent & Agent-based Systems'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI Agent Engineer: From Zero to Production'
  slug: ai-agent-engineer-tu-zero-den-production
locale: en
---

> **You ask ChatGPT a question, it answers. You ask the AI ​​Agent a question, it makes a plan, calls 5 different tools, self-corrects, then delivers the complete result.** Chatbot is reactive — waits for you to ask and then answers. Agent is proactive — it thinks for itself, acts for itself, and evaluates results for itself. This difference is the reason why 2024-2025 is the boom year for AI Agents — from Devin (coding agent), to AutoGPT, to a series of startups building agents for customer support, data analysis, and DevOps. In this article, we will start from the beginning: **What is AI Agent**, how does **architecture** work, popular **design patterns**, and finally we will **code a mini agent from scratch** so you can deeply understand each component.

---

## 1. What is AI Agent?

### 1.1. Definition

**AI Agent** (Autonomous Agent) is a software system that uses LLM as the "brain" to automatically **perceive** the environment, **reason** about goals, and **act** (act) to complete tasks — repeatedly until the desired result is achieved.

Core formula:

```text
Agent = LLM  +  Tools  +  Memory  +  Goal  +  Loop
         │         │         │         │         │
    Brain/       Hands     Brain      Why       How
    Reasoning    (APIs,    (history,  (task     (iterate
    Engine       code,     context)   to do)    until done)
                 search)
```

### 1.2. Perception → Reasoning → Action Loop

Every AI Agent follows a basic loop:

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

### 1.3. Real-life example

You tell the agent: *"Find the top 5 most popular AI Agent building frameworks, compare them, then write a Markdown report."*

Agent will:
1. **Perceive:** Understand the task — need to research, compare, write a report
2. **Reason:** Make a plan — step 1 search the web, step 2 compare, step 3 write
3. **Act:** Call web search tool → get top 5 frameworks
4. **Perceive:** Read search results → see LangGraph, CrewAI, AutoGen, LlamaIndex, Semantic Kernel
5. **Reason:** Need to compare according to criteria: ease of use, multi-agent, production-ready
6. **Act:** Find more details for each framework → write a comparison table
7. **Reason:** Enough data, write final report
8. **Act:** Output complete Markdown report

> **Note:** There is no time for humans to intervene midway. The agent decides how many steps to take, what tool to call, and when to stop — that is **autonomy**.

---

## 2. Agent vs Chatbot vs Pipeline vs Workflow

### 2.1. Comparison Table

| Features | Chatbots | Pipelines | Workflow | AI Agent |
|--------|---------|----------|----------|----------|
| **Autonomy** | ❌ Reactive — waits for user | ❌ Fixed sequence | ⚠️ Conditional branching | ✅ Self-directed |
| **Decision-making** | Minimal | None | Rule-based | LLM-powered |
| **Tool use** | ❌ No | ❌ Hardcoded steps | ⚠️ Predefined tools | ✅ Dynamic tool selection |
| **Planning** | ❌ No | ❌ No | ⚠️ Predefined flow | ✅ LLM generates plan |
| **Error recovery** | ❌ User retry | ❌ Fail & stop | ⚠️ Fallback paths | ✅ Self-correction |
| **Memory** | Session-only | None | None | Short + long-term |
| **Multi-step** | ❌ Single turn | ✅ Fixed steps | ✅ Fixed branches | ✅ Dynamic steps |
| **Examples** | ChatGPT, Gemini | ETL, CI/CD | n8n, Zapier, Airflow | Devin, AutoGPT, Cursor |

### 2.2. Comparative architecture

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

### 2.3. When to use what?

```text
Task đơn giản, Q&A ──────────────────→ Chatbot
Task fixed steps, data processing ───→ Pipeline
Task conditional, business logic ────→ Workflow (n8n, Airflow)
Task complex, cần reasoning + tools ─→ AI Agent
```

> **Tips:** Many production systems use a hybrid approach — Workflow orchestration at a high level (for example, Airflow schedules daily jobs), where each node is an AI Agent handling complex tasks. Don't use Agent for everything — simple tasks should use simple tools.

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

### 3.2. Component 1: Perception

Perception is how the agent "sees" the world around it — receives input, parses tool results, reads error messages.

| Input Type | Description | Example |
|-----------|--------|-------|
| User messages | Initial question/request | "Find bugs in main.py file" |
| Tool output | Result from tool call | JSON response from API |
| Error/Exception | Error executing | `FileNotFoundError: main.py` |
| Environment state | Context information | Current directory, OS, time |
| Human feedback | Mid-loop response | "No, I want Python, not JS" |

### 3.3. Component 2: Brain/Reasoning (LLM)

LLM is the "brain" — the most important component. It undertakes 3 main tasks:

**a) Reasoning:**
- Understand the problem, analyze information
- Chain-of-Thought: think step by step before deciding
- Determine what is missing → which tool to call

**b) Planning:**
- Decompose large tasks into small sub-tasks
- Determine order of execution
- Predict the results of each step

**c) Decision-Making:**
- Choose the most suitable tool for the next step
- Decide whether to use the tool or answer directly
- Decide to stop the loop or continue

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

### 3.4. Component 3: Action

Action is the agent's "hands" — executing decisions through tools.

| Tool Category | Examples | Capabilities |
|--------------|----------|-------------|
| **Web Search** | Google, Bing, Tavily | Find real-time information |
| **Code Execution** | Python REPL, sandbox | Run code, calculate |
| **API Calls** | REST, GraphQL | Communicate with external services |
| **File System** | Read/Write files | File and folder operations |
| **Database** | SQL queries | Query, insert, update data |
| **Browser** | Playwright, Selenium | Web scraping, automation |
| **Communication** | Email, Slack | Send notifications, messages |

### 3.5. Component 4: Memory

Memory helps agents remember context across steps and sessions.

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

> **Tips:** Short-term memory is limited by LLM's context window (128K tokens for GPT-4o, 200K for Claude 3.5). When the conversation is too long, you have to summarize or truncate — this is one of the biggest challenges when building a production agent.

---

## 4. Agent Architectures

This is the most important part — understanding agent architectures will help you design the system properly.

### 4.1. ReAct (Reasoning + Acting)

**ReAct** (Yao et al., 2022) is the most popular pattern currently. Idea: LLM alternates between **Thought** (thinking) and **Action** (action), then **Observe** the results before moving on.

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

**Advantages:**
- Simple, easy to implement
- Interpretable — can read reasoning traces
- Good compatibility with function calling API
- Most popular, many frameworks support

**Disadvantages:**
- Greedy — decide step by step, not the big picture
- Easy to get stuck if early steps are taken in the wrong direction
- No backtrack mechanism

### 4.2. Plan-and-Execute

**Plan-and-Execute** (Wang et al., 2023) separates planning and execution into two phases.

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

**Advantages:**
- Look at the task overview before taking action
- Effective for complex, multi-step tasks
- Can re-plan when encountering problems

**Disadvantages:**
- Initial plan can be wrong if the task is not clear
- Overhead for simple tasks (unnecessary planning)
- Re-planning adds latency

### 4.3. Reflexion (Self-Critique Loop)

**Reflexion** (Shinn et al., 2023) adds the ability to **self-assess** — the agent performs the task, then critiques the results, then tries again if it's not good.

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

**Advantages:**
- Self-improve with each attempt
- Learn from mistakes — don't repeat the same mistakes
- Especially good for coding tasks (test-driven)

**Disadvantages:**
- Many LLM calls → costs tokens + latency
- Need clear evaluation function
- Can loop infinitely if the task is too difficult

### 4.4. LATS (Language Agent Tree Search)

**LATS** (Zhou et al., 2023) combines tree search (like Monte Carlo Tree Search in AlphaGo) with LLM agent.

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

**Advantages:**
- Explore multiple solution paths at the same time
- Can backtrack — not stuck
- Highest quality for complex reasoning

**Disadvantages:**
- Very computationally intensive (many LLM calls for each path)
- Complex implementation
- Overkill for simple tasks

### 4.5. Compare 4 architectures

| Criteria | ReAct | Plan-and-Execute | Reflexion | LATS |
|----------|-------|-------------------|-----------|-------|
| **Complexity** | ⭐ Low | ⭐⭐ Medium | ⭐⭐ Medium | ⭐⭐⭐ High |
| **Quality** | Good | Good-Great | Great | Excellent |
| **Latency** | Fast | Medium | Slow | Very Slow |
| **Token cost** | Low | Medium | High | Very High |
| **Error recovery** | ❌ None | ⚠️ Re-plan | ✅ Self-fix | ✅ Backtrack |
| **Interpretability** | ✅ High | ✅ High | ✅ High | ⚠️ Medium |
| **Best for** | Simple Q&A, lookups | Multi-step projects | Gene code, writing | Complex reasoning |
| **Frameworks** | LangChain, most | LangGraph | Custom | Custom |

> **Tips:** Production often starts with **ReAct** (simple, fast), then moves up to **Plan-and-Execute** when needing to handle complex tasks. **Reflexion** and **LATS** are used for high-stakes tasks (coding, research) when quality is more important than speed.

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

Agent state includes all the information needed to continue execution at any point.

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

Agent loop needs to know when to stop — it can't run forever.

| Stopping Conditions | Description | Priorities |
|-------------------|--------|----------|
| **Task completed** | LLM decided to pay final answer | ✅ Primary |
| **Max iterations** | Loop limit reached (e.g. 15) | 🛡️ Safety |
| **Max tokens** | Out of budget tokens | 🛡️ Safety |
| **Timeout** | Time limit exceeded | 🛡️ Safety |
| **Error threshold** | Too many consecutive errors | 🛡️ Safety |
| **Human interrupt** | User cancel or modify task | ⚠️ Override |
| **Repeated action** | Agent calls the same tool with the same args | 🔄 Loop detection |

> **Tips:** Always set **max_iterations** and **timeout** in production. Agent loop has no safety limit = costs infinite money. For example, GPT-4o at $2.50/1M input tokens, an agent loop of 50 iterations with long context can cost $5-10 per request.

---

## 6. Taxonomy of AI Agents

### 6.1. Classified from simple to complex

Based on the classic AI textbook (Russell & Norvig), there are 5 types of agents from simple to complex:

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

### 6.2. Detailed Comparison Table

| Type | Memory | Planning | Learning | Example AI Agent | Real-world |
|-------|--------|----------|----------|-----------|-------------|
| **Simple Reflex** | ❌ None | ❌ None | ❌ None | If-else chatbot | Thermostat, vending machine |
| **Model-Based** | ✅ World models | ❌ None | ❌ None | Context-aware assistant | Spam filter, autocomplete |
| **Goal-Based** | ✅ World models | ✅ Search/Plan | ❌ None | ReAct agent with tools | GPS navigation, game AI |
| **Utility-Based** | ✅ World models | ✅ Optimized | ❌ None | Agent chooses best tool | Trading bot, ad bidding |
| **Learning** | ✅ Episodic | ✅ Adaptive | ✅ Yes | Reflexion agent | AlphaGo, modern AI agents |

### 6.3. Mapping into the modern LLM Agent

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

> **Tips:** When designing an agent, start with the simplest type that can solve the problem. Not every task needs a Learning Agent — many times a Goal-Based Agent (ReAct + tools) is enough. Over-engineering agent architecture is a common mistake.

---

## 7. Real-World AI Agent Use Cases

### 7.1. Use case summary table

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

### 8.1. Install

```bash
pip install openai
```

### 8.2. Definition of Tools

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

### 8.4. Sample output

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

### 8.5. Upgrade: Add Memory and Error Handling

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

> **Tips:** The code above is **minimal viable agent** — enough to understand the concept. Production agent needs to add: structured logging, token counting, rate limiting, async execution, proper sandboxing for code execution, and comprehensive error handling. The following articles will go deeper into each section.

---

## 9. Agent Design Patterns — Summary

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

When building agents for production, always ensure:

| Aspect | What to check | Why |
|--------|--------------|-----|
| **Safety limits** | max_iterations, timeout, token budget | Avoid infinite loop, cost explosion |
| **Error handling** | Retry logic, fallback, graceful degradation | Agent must be resilient |
| **Observability** | Log each step: thought, tool call, result | Debug and improve |
| **Guardrails** | Input/output validation, content filtering | Prevent harmful actions |
| **Human-in-the-loop** | Approval for destructive actions | Safety net |
| **Cost tracking** | Token usage per request, daily budget | Control spending |
| **Testing** | Unit test tools, integration test full loop | Reliability |
| **Evaluation** | Success rate, latency, cost per task | Continuous improvement |

---

## Summary

This article has covered all the fundamentals of AI Agent — from definition to architecture to hands-on implementation.

**Key takeaways:**

1. **AI Agent = LLM + Tools + Memory + Goal + Loop** — the core difference compared to chatbots is **autonomy** (self-determination, self-action, self-correction).
2. **4 core components:** Perception, Brain/Reasoning, Action, Memory — every agent has these 4 components.
3. **4 main architectures:** ReAct (simple, fast), Plan-and-Execute (for complex tasks), Reflexion (self-improvement), LATS (explore multiple paths) — choose the right architecture for the right problem.
4. **Agent Loop** is the core pattern: perceive → reason → act → loop. There must be clear stopping conditions.
5. **Taxonomy:** From Simple Reflex to Learning Agent — modern LLM agent is the most complex type but does not always need that level.
6. **Production agents** need safety limits, error handling, observability, guardrails, and human-in-the-loop.
7. **Start simple** — ReAct + few tools are enough for many use cases. Don't over-engineer.

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

## Next article

**Lesson 13: Tool Calling, Function Calling & ReAct Pattern** — dive into the most important component of the agent: **tools**. You will learn how to define tools with the OpenAI Function Calling API, implement the full ReAct pattern, build custom tools (web search, database query, code execution), and handle error handling + retry logic for tool calls in production. From the mini agent of this article, we will upgrade it into a real agent system with 10+ tools.

