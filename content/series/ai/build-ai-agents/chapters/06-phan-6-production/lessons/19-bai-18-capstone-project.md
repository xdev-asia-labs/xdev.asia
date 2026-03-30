---
id: 019c9619-cc18-7018-d018-cc1800000018
title: 'Bài 18: Capstone Project — Xây AI Agent Team hoàn chỉnh'
slug: bai-18-capstone-project
description: >-
  Dự án tổng kết: xây hệ thống multi-agent hoàn chỉnh có RAG, MCP tools, memory, guardrails, observability, và deploy lên production. Code review và best practices tổng hợp.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 6: Production & Triển khai thực tế"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

Đây là bài tổng kết — bạn sẽ xây dựng **hệ thống multi-agent hoàn chỉnh** từ A đến Z, áp dụng mọi kiến thức đã học.

---

## 1. Project: AI Research & Content Team

### Kiến trúc

```
User Request
    │
    ▼
┌─────────────┐
│  Supervisor │ (LangGraph)
│   Agent     │
└──────┬──────┘
       │
  ┌────┼────┐
  ▼    ▼    ▼
┌───┐┌───┐┌───┐
│ R ││ W ││ E │
│ e ││ r ││ d │
│ s ││ i ││ i │
│ e ││ t ││ t │
│ a ││ e ││ o │
│ r ││ r ││ r │
│ c │└───┘└───┘
│ h │
│ e │
│ r │──── MCP: Web Search
│   │──── MCP: Database
│   │──── RAG: Knowledge Base
└───┘
```

### Components checklist

- [ ] Supervisor Agent (LangGraph orchestration)
- [ ] Research Agent (web search + RAG + memory)
- [ ] Writer Agent (content generation)
- [ ] Editor Agent (review + quality check)
- [ ] MCP Servers (web search, database)
- [ ] Memory system (short-term + long-term)
- [ ] Guardrails (input validation, output filtering)
- [ ] Observability (LangSmith tracing)
- [ ] FastAPI wrapper + WebSocket
- [ ] Docker deployment
- [ ] Evaluation suite (golden test cases)

## 2. Step-by-step Implementation

### Phase 1: Core Agents (2 giờ)
- Implement 3 agents với clear roles
- Define tool schemas
- Build basic orchestration

### Phase 2: Infrastructure (1 giờ)
- RAG knowledge base
- Memory system
- MCP server connections

### Phase 3: Safety & Quality (30 phút)
- Guardrails
- Observability
- Basic evaluation

### Phase 4: Deployment (30 phút)
- FastAPI wrapper
- Docker
- Deploy

---

## 3. Best Practices Tổng hợp

### Architecture
- Single Responsibility: mỗi agent làm 1 việc tốt
- Supervisor pattern cho phức tạp orchestrations
- Loose coupling: agents communicate qua messages, không shared state

### Safety
- Never trust user input
- Read-only tools by default
- Human-in-the-loop cho critical actions
- Cost budgets

### Performance
- Cache responses khi có thể
- Parallel tool execution
- Token budget management
- Model selection: cheap model cho simple tasks

---

## 🎉 Chúc mừng!

Bạn đã hoàn thành series **Build AI Agents: Từ Zero đến Production**! Từ đây, bạn có thể:

1. **Xây agent cho công việc**: automate research, content, coding tasks
2. **Contribute open-source**: xây MCP servers, agent tools
3. **Build products**: SaaS products powered by AI agents
4. **Continue learning**: explore OpenAI Swarm, AutoGen, DSPy

## Bài tập cuối

1. Hoàn thành capstone project với đầy đủ components
2. Deploy lên cloud và share link
3. Viết blog post về experience building AI agents
4. Pick một real-world problem và xây agent giải quyết nó

