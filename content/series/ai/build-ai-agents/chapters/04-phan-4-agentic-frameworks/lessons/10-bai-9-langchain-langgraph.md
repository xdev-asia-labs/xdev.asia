---
id: 019c9619-cc09-7009-d009-cc0900000009
title: 'Bài 9: LangChain & LangGraph — Stateful Agent Workflows'
slug: bai-9-langchain-langgraph
description: >-
  Từ LangChain chains đến LangGraph graphs: nodes, edges, conditional routing, state management. Xây research agent với human-in-the-loop approval flow.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 4: Agentic Frameworks"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6295" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6295)"/>

  <!-- Decorations -->
  <g>
    <circle cx="925" cy="185" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="115" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="900" cy="80" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="45" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="950.9807621135332,110 950.9807621135332,140 925,155 899.0192378864668,140 899.0192378864668,110.00000000000001 925,95" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI &amp; ML — Bài 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 9: LangChain &amp; LangGraph — Stateful</tspan>
      <tspan x="60" dy="42">Agent Workflows</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: Từ Zero đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Agentic Frameworks</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Xây agent từ đầu rất tốt để hiểu concept, nhưng production cần **framework**. LangGraph (bởi LangChain team) là framework mạnh nhất hiện tại cho stateful, graph-based agent workflows.

---

## 1. LangChain vs LangGraph

| | LangChain | LangGraph |
|---|---|---|
| Paradigm | Chains (linear) | Graphs (cyclic) |
| State | Stateless | Stateful |
| Best for | Simple pipelines, RAG | Complex agents, multi-step |
| Control flow | Sequential | Conditional routing |

## 2. LangGraph Fundamentals

```python
from langgraph.graph import StateGraph, MessagesState, START, END

def call_llm(state: MessagesState):
    response = model.invoke(state["messages"])
    return {"messages": [response]}

def use_tools(state: MessagesState):
    # Execute tool calls
    ...

# Build graph
graph = StateGraph(MessagesState)
graph.add_node("llm", call_llm)
graph.add_node("tools", use_tools)
graph.add_edge(START, "llm")
graph.add_conditional_edges("llm", should_use_tools, {"yes": "tools", "no": END})
graph.add_edge("tools", "llm")

agent = graph.compile()
```

---

## Tóm tắt

- LangGraph = state machine cho agent workflows
- Nodes = functions, Edges = transitions, State = shared data
- Conditional routing cho complex decision trees
- Human-in-the-loop built-in support
- Persistence cho long-running workflows

## Bài tập

1. Implement research agent với LangGraph
2. Thêm human-in-the-loop approval step
3. Implement retry logic khi tool fails
4. Xây agent với 3+ conditional branches

