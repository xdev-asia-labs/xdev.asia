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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1432" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1432)"/>

  <!-- Decorations -->
  <g>
    <circle cx="998" cy="204" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="896" cy="262" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="794" cy="60" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="692" cy="118" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1090" cy="176" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="104" x2="1100" y2="184" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="134" x2="1050" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="937.7749907475932,84.5 937.7749907475932,123.5 904,143 870.2250092524068,123.5 870.2250092524068,84.50000000000001 904,65" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI &amp; ML — Bài 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 18: Capstone Project — Xây AI Agent</tspan>
      <tspan x="60" dy="42">Team hoàn chỉnh</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: Từ Zero đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Production &amp; Triển khai thực tế</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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

