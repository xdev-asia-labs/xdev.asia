---
id: 019c9619-cc18-7018-d018-cc1800000018
title: 'Lesson 18: Capstone Project — Build a complete AI Agent Team'
slug: bai-18-capstone-project
description: >-
  Project summary: build a complete multi-agent system with RAG, MCP tools,
  memory, guardrails, observability, and deploy to production. Code review and
  best practices summarized.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 17
section_title: 'Part 6: Production & Actual Deployment'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'Build AI Agents: From Zero to Production'
  slug: build-ai-agents
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI & ML — Lesson 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 18: Capstone Project — Building AI Agent</tspan>
      <tspan x="60" dy="42">Complete team</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: From Zero to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Production & Actual Deployment</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

This is the summary — you will build a **complete multi-agent system** from A to Z, applying everything you have learned.

---

## 1. Project: AI Research & Content Team

### Architecture

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

### Phase 1: Core Agents (2 hours)
- Implement 3 agents with clear roles
- Define tool schemas
- Build basic orchestration

### Phase 2: Infrastructure (1 hour)
- RAG knowledge base
- Memory system
- MCP server connections

### Phase 3: Safety & Quality (30 minutes)
- Guardrails
- Observability
- Basic evaluation

### Phase 4: Deployment (30 minutes)
- FastAPI wrapper
- Docker
- Deploy

---

## 3. Best Practices Summary

### Architecture
- Single Responsibility: each agent does one good thing
- Supervisor pattern for complex orchestrations
- Loose coupling: agents communicate via messages, not shared state

### Safety
- Never trust user input
- Read-only tools by default
- Human-in-the-loop for critical actions
- Cost budgets

### Performance
- Cache responses when possible
- Parallel tool execution
- Token budget management
- Model selection: cheap model for simple tasks

---

## 🎉 Congratulations!

You have completed the **Build AI Agents: From Zero to Production** series! From here, you can:

1. **Build agents for work**: automate research, content, coding tasks
2. **Contribute open-source**: build MCP servers, agent tools
3. **Build products**: SaaS products powered by AI agents
4. **Continue learning**: explore OpenAI Swarm, AutoGen, DSPy

## Final exercise

1. Complete the capstone project with all components
2. Deploy to the cloud and share the link
3. Write a blog post about experience building AI agents
4. Pick a real-world problem and build an agent to solve it

