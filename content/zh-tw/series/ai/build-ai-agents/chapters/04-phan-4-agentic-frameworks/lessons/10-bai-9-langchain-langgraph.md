---
id: 019c9619-cc09-7009-d009-cc0900000009
title: 第 9 課：LangChain 和 LangGraph — 有狀態代理工作流程
slug: bai-9-langchain-langgraph
description: 從 LangChain 鏈到 LangGraph 圖：節點、邊、條件路由、狀態管理。建構具有人機互動審批流程的研究代理。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 8
section_title: 第 4 部分：代理框架
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 人工智慧與機器學習 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：LangChain 和 LangGraph — 有狀態</tspan>
      <tspan x="60" dy="42">代理商工作流程</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：代理框架</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

從頭開始建立代理對於理解這個概念非常有用，但生產需要一個**框架**。 LangGraph（由 LangChain 團隊開發）是目前可用於有狀態、基於圖表的代理程式工作流程的最強大的框架。

---

## 1. LangChain 與 LangGraph

| |浪鏈 |郎圖|
|---|---|---|
|範式|鏈條（線性）|圖表（循環）|
|狀態|無國籍|有狀態 |
|最適合 |簡單的管道，RAG |複雜代理，多步驟|
|控制流程|順序|條件路由|

## 2. LangGraph 基礎知識

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

## 總結

- LangGraph = 代理程式工作流程的狀態機
- 節點 = 函數，邊 = 轉換，狀態 = 共享數據
- 複雜決策樹的條件路由
- 人機互動內建支持
- 長期運作的工作流程的持久性

## 練習

1.用LangGraph實現研究代理
2.新增人機互動審核步驟
3. 工具失敗時實作重試邏輯
4. 建構一個具有 3 個以上條件分支的代理

