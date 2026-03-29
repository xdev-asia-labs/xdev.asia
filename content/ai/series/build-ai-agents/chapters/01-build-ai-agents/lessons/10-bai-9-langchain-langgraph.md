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

