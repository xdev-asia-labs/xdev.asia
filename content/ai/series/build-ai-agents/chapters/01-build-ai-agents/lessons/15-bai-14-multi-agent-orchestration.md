---
id: 019c9619-cc14-7014-d014-cc1400000014
title: 'Bài 14: Multi-Agent Orchestration — Kiến trúc & Design Patterns'
slug: bai-14-multi-agent-orchestration
description: >-
  Các pattern orchestration: Sequential, Parallel, Hierarchical, Swarm. Supervisor agent vs peer-to-peer. Xử lý conflicts, deadlocks, error propagation.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 5: MCP, A2A & Multi-Agent Systems"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

Multi-agent systems là tương lai của AI applications. Nhưng orchestrate nhiều agents phức tạp hơn nhiều so với single agent. Bài này cover các design patterns và challenges khi xây multi-agent systems.

---

## 1. Orchestration Patterns

### 1.1 Sequential (Pipeline)
```
Agent A → Agent B → Agent C → Output
```

### 1.2 Parallel (Fan-out/Fan-in)
```
           ┌→ Agent B ─┐
Agent A ──►├→ Agent C ─┤──► Agent E
           └→ Agent D ─┘
```

### 1.3 Hierarchical (Supervisor)
```
         Supervisor
        /    |     \
    Agent A  Agent B  Agent C
```

### 1.4 Swarm (Decentralized)
```
Agent A ←→ Agent B
  ↕           ↕
Agent C ←→ Agent D
```

## 2. Coding Team Example

```python
# PM analyzes requirements → Developer writes code → Reviewer reviews
pm_agent = Agent(role="Product Manager", ...)
dev_agent = Agent(role="Senior Developer", ...)  
reviewer_agent = Agent(role="Code Reviewer", ...)
```

---

## Tóm tắt

- 4 patterns: Sequential, Parallel, Hierarchical, Swarm
- Supervisor pattern phổ biến nhất cho production
- Handle conflicts: priority queue, voting, escalation
- Error propagation: fail gracefully, không cascade

## Bài tập

1. Implement coding team: PM → Developer → Reviewer
2. Xây parallel research system (3 agents search cùng lúc)
3. Implement supervisor pattern với LangGraph
4. Handle deadlock scenario khi 2 agents chờ nhau

