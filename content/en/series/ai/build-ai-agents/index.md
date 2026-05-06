---
id: 019c9619-aa02-7002-b002-aa0200000002
title: 'Build AI Agents: From Zero to Production'
slug: build-ai-agents
description: >-
  Practical course on building AI Agents — from simple chatbots to complex
  Multi-Agent systems. Proficient in Function Calling, Tool Use, RAG, MCP,
  LangGraph, CrewAI and deploying Agent to production. Each lesson is coded
  hands-on with Python.
featured_image: uploads/2026/03/build-ai-agents-cover.png
level: intermediate
duration_hours: 50
lesson_count: 18
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-29T10:00:00.000000Z'
created_at: '2026-03-29T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI & Machine Learning
  slug: ai-machine-learning
tags:
  - name: AI Agents
    slug: ai-agents
  - name: LangGraph
    slug: langgraph
  - name: CrewAI
    slug: crewai
  - name: MCP
    slug: mcp
  - name: Function Calling
    slug: function-calling
  - name: Tool Use
    slug: tool-use
  - name: RAG
    slug: rag
  - name: Multi-Agent
    slug: multi-agent
  - name: LangChain
    slug: langchain
  - name: Python
    slug: python
  - name: OpenAI
    slug: openai
  - name: production
    slug: production
  - name: hands-on
    slug: hands-on
  - name: A2A
    slug: a2a
  - name: agentic-ai
    slug: agentic-ai
sections:
  - id: section-01
    title: 'Part 1: Agent Platform — Understand before building'
    description: 'Master the concept of Agent, Perceive-Reason-Act loop, and LLM APIs'
    sort_order: 1
    lessons:
      - id: 019c9619-cc01-7001-d001-cc0100000001
        title: 'Lesson 1: What is an agent? — From Chatbots to Autonomous AI'
        slug: bai-1-agent-la-gi
        description: >-
          Defining AI Agent, distinguishing between chatbot vs agent vs copilot.
          Perceive-Reason-Plan-Act Loop. Types of agents: reactive,
          deliberative, hybrid. The simplest demo agent with Python.
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-cc02-7002-d002-cc0200000002
        title: 'Lesson 2: LLM APIs Masterclass — OpenAI, Claude, Gemini'
        slug: bai-2-llm-apis-masterclass
        description: >-
          Proficient in the APIs of the top 3 LLMs: authentication, chat
          completions, streaming, structured output (JSON mode), vision, and
          cost optimization. Compare the pros and cons of each provider.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-cc03-7003-d003-cc0300000003
        title: 'Lesson 3: Prompt Engineering for Agents — System Prompts & Personas'
        slug: bai-3-prompt-engineering-cho-agent
        description: >-
          Write an effective System Prompt for agents: define persona, boundary,
          output schema. Chain-of-Thought, few-shot, and format-compliant LLM
          pressing techniques. ReAct prompting pattern.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-02
    title: 'Part 2: Function Calling & Tool Use'
    description: Opens the door for Agent to interact with the outside world
    sort_order: 2
    lessons:
      - id: 019c9619-cc04-7004-d004-cc0400000004
        title: 'Lesson 4: Function Calling — Give Agent "hands and feet"'
        slug: bai-4-function-calling
        description: >-
          Function Calling/Tool Use mechanism of OpenAI, Anthropic, Gemini.
          Define tool schema (JSON), handle tool_calls, parallel function
          calling. Build calculator agent and weather agent.
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-cc05-7005-d005-cc0500000005
        title: >-
          Lesson 5: Building Custom Tools — Web Search, Code Execution, API
          Integration
        slug: bai-5-xay-dung-custom-tools
        description: >-
          Create complex tools: web scraping, Google Search, Python code
          sandbox, database query, REST API caller. Manage registry tools, error
          handling, and retry logic.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-cc06-7006-d006-cc0600000006
        title: 'Lesson 6: The Agent Loop — Thought-Action-Observation Cycle'
        slug: bai-6-the-agent-loop
        description: >-
          Implement a complete agent loop from scratch in pure Python: ReAct
          pattern, handling multi-step reasoning, conversation history
          management, token budget, and stopping conditions.
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-03
    title: 'Part 3: RAG & Memory — Give Agent memory'
    description: Agents are smarter thanks to knowledge base and memory management
    sort_order: 3
    lessons:
      - id: 019c9619-cc07-7007-d007-cc0700000007
        title: 'Lesson 7: RAG for Agents — Connecting to Knowledge Base'
        slug: bai-7-rag-cho-agent
        description: >-
          Build RAG pipeline for agents: document loading, chunking strategies,
          embedding models, vector store (ChromaDB, Qdrant). Semantic search vs
          keyword search. Hybrid retrieval.
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-cc08-7008-d008-cc0800000008
        title: 'Lesson 8: Agent Memory — Short-term, Long-term & Episodic'
        slug: bai-8-agent-memory
        description: >-
          Types of memory: conversation buffer, summary memory, entity memory.
          Implement long-term memory with DB vector. Episodic memory allows the
          agent to "learn" from experience. Design memory architecture.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-04
    title: 'Part 4: Agentic Frameworks'
    description: Use a professional framework to build complex agents
    sort_order: 4
    lessons:
      - id: 019c9619-cc09-7009-d009-cc0900000009
        title: 'Lesson 9: LangChain & LangGraph — Stateful Agent Workflows'
        slug: bai-9-langchain-langgraph
        description: >-
          From LangChain chains to LangGraph graphs: nodes, edges, conditional
          routing, state management. Build research agents with
          human-in-the-loop approval flow.
        duration_minutes: 210
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-cc10-7010-d010-cc1000000010
        title: 'Lesson 10: CrewAI — Building a "team" of AI Agents'
        slug: bai-10-crewai
        description: >-
          Multi-agent with CrewAI: define Agents (role, goal, backstory), Tasks,
          and Crew orchestration. Build content pipeline: Researcher → Writer →
          Editor. Process types: sequential, hierarchical.
        duration_minutes: 180
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c9619-cc11-7011-d011-cc1100000011
        title: 'Lesson 11: Advanced Patterns — Planning, Reflection & Self-Correction'
        slug: bai-11-advanced-patterns
        description: >-
          Advanced Pattern: Plan-and-Execute, Tree-of-Thought planning,
          Self-Reflection loops, Critic-and-Revise. Implement agent evaluates
          and corrects its own output.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-05
    title: 'Part 5: MCP, A2A & Multi-Agent Systems'
    description: Connection standards and large-scale multi-agent systems
    sort_order: 5
    lessons:
      - id: 019c9619-cc12-7012-d012-cc1200000012
        title: >-
          Lesson 12: Model Context Protocol (MCP) — Connection standard for
          Agents
        slug: bai-12-mcp
        description: >-
          What is MCP, why is standardization needed? Client/Server
          architecture, discovery tool, capability negotiation. Build MCP Server
          connecting database, GitHub API, file system.
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-cc13-7013-d013-cc1300000013
        title: 'Lesson 13: Agent-to-Agent (A2A) Protocol — Agents talk to each other'
        slug: bai-13-a2a-protocol
        description: >-
          Google A2A Protocol: Agent Cards, capability discovery, task
          lifecycle, inter-agent communication. Compare A2A vs MCP. Demo two
          agents from two different frameworks collaborating.
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9619-cc14-7014-d014-cc1400000014
        title: 'Lesson 14: Multi-Agent Orchestration — Architecture & Design Patterns'
        slug: bai-14-multi-agent-orchestration
        description: >-
          Orchestration patterns: Sequential, Parallel, Hierarchical, Swarm.
          Supervisor agent vs peer-to-peer. Handle conflicts, deadlocks, error
          propagation. Build a coding team system: PM → Developer → Reviewer.
        duration_minutes: 210
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-06
    title: 'Part 6: Production & Actual Deployment'
    description: Take AI Agent from prototype to production-grade
    sort_order: 6
    lessons:
      - id: 019c9619-cc15-7015-d015-cc1500000015
        title: 'Lesson 15: Guardrails & Safety — Protect Agents from "rebellion"'
        slug: bai-15-guardrails-safety
        description: >-
          Prompt injection defense, output validation, PII filtering. Guardrails
          frameworks: NeMo Guardrails, Guardrails AI. Human-in-the-loop
          patterns. Rate limiting and cost controls.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c9619-cc16-7016-d016-cc1600000016
        title: 'Lesson 16: Observability & Evaluation — Monitor what Agents "think"'
        slug: bai-16-observability-evaluation
        description: >-
          Tracing agent decisions with LangSmith, Langfuse. Logging, metrics,
          cost tracking. Evaluation: LLM-as-a-Judge, golden test sets, human
          evaluation. A/B testing agent prompts.
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019c9619-cc17-7017-d017-cc1700000017
        title: 'Lesson 17: Deploy Agent to Production — FastAPI, Docker & Cloud'
        slug: bai-17-deploy-agent-production
        description: >-
          Wrap agent into API with FastAPI. Dockerize, CI/CD pipeline. Deploy to
          cloud (AWS/GCP). Scaling strategies, session management, caching.
          WebSocket for real-time agent chat.
        duration_minutes: 210
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019c9619-cc18-7018-d018-cc1800000018
        title: 'Lesson 18: Capstone Project — Build a complete AI Agent Team'
        slug: bai-18-capstone-project
        description: >-
          Project summary: build a complete multi-agent system with RAG, MCP
          tools, memory, guardrails, observability, and deploy to production.
          Code review and best practices summarized.
        duration_minutes: 240
        is_free: true
        sort_order: 17
        video_url: null
reviews: []
quizzes: []
locale: en
---

## Introducing the Series

**Build AI Agents: From Zero to Production** is a real-life journey that helps you build AI Agents — from the most basic concepts to complex Multi-Agent systems running in production.

Unlike the "AI & LLM" series that focuses on theory and architecture, this series is 100% **hands-on** — each lesson is a real project, each concept has code that can be run immediately.

> 🎯 **Goal:** Once completed, you can build and deploy a production-ready AI Agent system for any use case.

## What will you learn?

### Part 1: Agent Platform — Understand before you build

- **Lesson 1:** What is an agent? Distinguish between chatbot vs agent vs copilot
- **Lesson 2:** LLM APIs Masterclass: OpenAI, Claude, Gemini — master all 3
- **Lesson 3:** Prompt Engineering for Agents: system prompts, personas, ReAct pattern

### Part 2: Function Calling & Tool Use

- **Lesson 4:** Function Calling — gives the agent "hands and feet" to interact with the world
- **Lesson 5:** Custom Tools: web search, code execution, API integration
- **Lesson 6:** The Agent Loop — implement the Thought-Action-Observation loop from scratch

### Part 3: RAG & Memory — Give Agent memory

- **Lesson 7:** RAG for Agent: connect knowledge base with ChromaDB, Qdrant
- **Lesson 8:** Agent Memory: short-term, long-term, episodic memory architecture

### Part 4: Agentic Frameworks

- **Lesson 9:** LangChain & LangGraph: stateful agent workflows with graph-based orchestration
- **Lesson 10:** CrewAI: build a "team" of AI Agents to collaborate with each other
- **Lesson 11:** Advanced Patterns: Planning, Reflection, Self-Correction

### Part 5: MCP, A2A & Multi-Agent Systems

- **Lesson 12:** Model Context Protocol (MCP): universal connection standard for agents
- **Lesson 13:** Agent-to-Agent (A2A): protocol for agents to communicate cross-framework
- **Lesson 14:** Multi-Agent Orchestration: architecture & design patterns

### Part 6: Production & Actual Deployment

- **Lesson 15:** Guardrails & Safety: protect agents from prompt injection and hallucination
- **Lesson 16:** Observability & Evaluation: tracing, logging, LLM-as-a-Judge
- **Lesson 17:** Deploy Agent to Production: FastAPI, Docker, Cloud
- **Lesson 18:** Capstone Project: build a complete end-to-end AI Agent Team

## Input required

- **Intermediate Python** (async/await, decorators, classes, error handling)
- Basic understanding of LLM (know what ChatGPT/Claude API is — or complete the "AI & LLM" series)
- Computer with at least 8GB of RAM (GPU not required — most run via API)
- OpenAI/Anthropic/Google AI account (free tier is enough for most lessons)

## Tools used

```
Python 3.11+      | Ngôn ngữ chính
OpenAI SDK         | GPT-4o, Function Calling
Anthropic SDK      | Claude, Tool Use
Google GenAI       | Gemini, Grounding
LangChain          | Chain & Agent framework
LangGraph          | Stateful graph-based workflows
CrewAI             | Multi-agent orchestration
ChromaDB / Qdrant  | Vector databases
FastAPI            | API server
Docker             | Containerization
LangSmith          | Observability & tracing
```

## How is this series different from "AI & LLM: From Basics to Advanced"?

| | AI & LLM Series | Build AI Agents |
|---|---|---|
| **Focus** | Theory + Architecture LLM | Build a practical Agent application |
| **Object** | AI Beginner | Already know LLM basics |
| **Practice** | Code illustrates concept | Actual project per lesson |
| **Output** | Understand how LLM works | Has a portfolio of Agent projects |
| **Technology** | PyTorch, Transformers | LangGraph, CrewAI, MCP, A2A |
