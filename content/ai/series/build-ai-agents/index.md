---
id: 019c9619-aa02-7002-b002-aa0200000002
title: "Build AI Agents: Từ Zero đến Production"
slug: build-ai-agents
description: >-
  Khóa học thực chiến xây dựng AI Agents — từ chatbot đơn giản đến hệ thống
  Multi-Agent phức tạp. Thành thạo Function Calling, Tool Use, RAG, MCP,
  LangGraph, CrewAI và triển khai Agent lên production. Mỗi bài đều code
  hands-on với Python.
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
  name: DUY TRAN
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
    title: "Phần 1: Nền tảng Agent — Hiểu trước khi xây"
    description: Nắm vững khái niệm Agent, vòng lặp Perceive-Reason-Act, và LLM APIs
    sort_order: 1
    lessons:
      - id: 019c9619-cc01-7001-d001-cc0100000001
        title: 'Bài 1: Agent là gì? — Từ Chatbot đến Autonomous AI'
        slug: bai-1-agent-la-gi
        description: >-
          Định nghĩa AI Agent, phân biệt chatbot vs agent vs copilot. Vòng lặp
          Perceive-Reason-Plan-Act. Các loại agent: reactive, deliberative,
          hybrid. Demo agent đơn giản nhất với Python.
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-cc02-7002-d002-cc0200000002
        title: 'Bài 2: LLM APIs Masterclass — OpenAI, Claude, Gemini'
        slug: bai-2-llm-apis-masterclass
        description: >-
          Thành thạo API của 3 LLM hàng đầu: authentication, chat completions,
          streaming, structured output (JSON mode), vision, và cost optimization.
          So sánh ưu nhược từng provider.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-cc03-7003-d003-cc0300000003
        title: 'Bài 3: Prompt Engineering cho Agent — System Prompts & Personas'
        slug: bai-3-prompt-engineering-cho-agent
        description: >-
          Viết System Prompt hiệu quả cho agent: định nghĩa persona, boundary,
          output schema. Chain-of-Thought, few-shot, và kỹ thuật ép LLM tuân thủ
          format. ReAct prompting pattern.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-02
    title: "Phần 2: Function Calling & Tool Use"
    description: Mở cánh cửa cho Agent tương tác với thế giới bên ngoài
    sort_order: 2
    lessons:
      - id: 019c9619-cc04-7004-d004-cc0400000004
        title: 'Bài 4: Function Calling — Cho Agent "tay chân"'
        slug: bai-4-function-calling
        description: >-
          Cơ chế Function Calling/Tool Use của OpenAI, Anthropic, Gemini. Định
          nghĩa tool schema (JSON), xử lý tool_calls, parallel function calling.
          Xây calculator agent và weather agent.
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-cc05-7005-d005-cc0500000005
        title: 'Bài 5: Xây dựng Custom Tools — Web Search, Code Execution, API Integration'
        slug: bai-5-xay-dung-custom-tools
        description: >-
          Tạo tool phức tạp: web scraping, Google Search, Python code sandbox,
          database query, REST API caller. Quản lý tool registry, error handling,
          và retry logic.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-cc06-7006-d006-cc0600000006
        title: 'Bài 6: The Agent Loop — Thought-Action-Observation Cycle'
        slug: bai-6-the-agent-loop
        description: >-
          Implement vòng lặp agent hoàn chỉnh từ đầu bằng Python thuần: ReAct
          pattern, xử lý multi-step reasoning, conversation history management,
          token budget, và stopping conditions.
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-03
    title: "Phần 3: RAG & Memory — Cho Agent trí nhớ"
    description: Agent thông minh hơn nhờ knowledge base và memory management
    sort_order: 3
    lessons:
      - id: 019c9619-cc07-7007-d007-cc0700000007
        title: 'Bài 7: RAG cho Agent — Kết nối Knowledge Base'
        slug: bai-7-rag-cho-agent
        description: >-
          Xây RAG pipeline cho agent: document loading, chunking strategies,
          embedding models, vector store (ChromaDB, Qdrant). Semantic search vs
          keyword search. Hybrid retrieval.
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-cc08-7008-d008-cc0800000008
        title: 'Bài 8: Agent Memory — Short-term, Long-term & Episodic'
        slug: bai-8-agent-memory
        description: >-
          Các loại memory: conversation buffer, summary memory, entity memory.
          Implement long-term memory với vector DB. Episodic memory để agent
          "học" từ kinh nghiệm. Thiết kế memory architecture.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-04
    title: "Phần 4: Agentic Frameworks"
    description: Sử dụng framework chuyên nghiệp để xây agent phức tạp
    sort_order: 4
    lessons:
      - id: 019c9619-cc09-7009-d009-cc0900000009
        title: 'Bài 9: LangChain & LangGraph — Stateful Agent Workflows'
        slug: bai-9-langchain-langgraph
        description: >-
          Từ LangChain chains đến LangGraph graphs: nodes, edges, conditional
          routing, state management. Xây research agent với human-in-the-loop
          approval flow.
        duration_minutes: 210
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-cc10-7010-d010-cc1000000010
        title: 'Bài 10: CrewAI — Xây dựng "đội ngũ" AI Agent'
        slug: bai-10-crewai
        description: >-
          Multi-agent với CrewAI: định nghĩa Agents (role, goal, backstory),
          Tasks, và Crew orchestration. Xây content pipeline: Researcher →
          Writer → Editor. Process types: sequential, hierarchical.
        duration_minutes: 180
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c9619-cc11-7011-d011-cc1100000011
        title: 'Bài 11: Advanced Patterns — Planning, Reflection & Self-Correction'
        slug: bai-11-advanced-patterns
        description: >-
          Pattern nâng cao: Plan-and-Execute, Tree-of-Thought planning, Self-
          Reflection loops, Critic-and-Revise. Implement agent tự đánh giá và
          sửa lỗi output của mình.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-05
    title: "Phần 5: MCP, A2A & Multi-Agent Systems"
    description: Tiêu chuẩn kết nối và hệ thống đa agent quy mô lớn
    sort_order: 5
    lessons:
      - id: 019c9619-cc12-7012-d012-cc1200000012
        title: 'Bài 12: Model Context Protocol (MCP) — Chuẩn kết nối cho Agent'
        slug: bai-12-mcp
        description: >-
          MCP là gì, tại sao cần standardization. Kiến trúc Client/Server,
          tool discovery, capability negotiation. Xây MCP Server kết nối
          database, GitHub API, file system.
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-cc13-7013-d013-cc1300000013
        title: 'Bài 13: Agent-to-Agent (A2A) Protocol — Agent nói chuyện với nhau'
        slug: bai-13-a2a-protocol
        description: >-
          Google A2A Protocol: Agent Cards, capability discovery, task lifecycle,
          inter-agent communication. So sánh A2A vs MCP. Demo hai agent từ hai
          framework khác nhau collaborate.
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9619-cc14-7014-d014-cc1400000014
        title: 'Bài 14: Multi-Agent Orchestration — Kiến trúc & Design Patterns'
        slug: bai-14-multi-agent-orchestration
        description: >-
          Các pattern orchestration: Sequential, Parallel, Hierarchical, Swarm.
          Supervisor agent vs peer-to-peer. Xử lý conflicts, deadlocks, error
          propagation. Xây hệ thống coding team: PM → Developer → Reviewer.
        duration_minutes: 210
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-06
    title: "Phần 6: Production & Triển khai thực tế"
    description: Đưa AI Agent từ prototype lên production-grade
    sort_order: 6
    lessons:
      - id: 019c9619-cc15-7015-d015-cc1500000015
        title: 'Bài 15: Guardrails & Safety — Bảo vệ Agent khỏi "nổi loạn"'
        slug: bai-15-guardrails-safety
        description: >-
          Prompt injection defense, output validation, PII filtering. Guardrails
          frameworks: NeMo Guardrails, Guardrails AI. Human-in-the-loop patterns.
          Rate limiting và cost controls.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c9619-cc16-7016-d016-cc1600000016
        title: 'Bài 16: Observability & Evaluation — Theo dõi Agent "nghĩ gì"'
        slug: bai-16-observability-evaluation
        description: >-
          Tracing agent decisions với LangSmith, Langfuse. Logging, metrics,
          cost tracking. Evaluation: LLM-as-a-Judge, golden test sets, human
          eval. A/B testing agent prompts.
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019c9619-cc17-7017-d017-cc1700000017
        title: 'Bài 17: Deploy Agent lên Production — FastAPI, Docker & Cloud'
        slug: bai-17-deploy-agent-production
        description: >-
          Wrap agent thành API với FastAPI. Dockerize, CI/CD pipeline. Deploy
          lên cloud (AWS/GCP). Scaling strategies, session management, caching.
          WebSocket cho real-time agent chat.
        duration_minutes: 210
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019c9619-cc18-7018-d018-cc1800000018
        title: 'Bài 18: Capstone Project — Xây AI Agent Team hoàn chỉnh'
        slug: bai-18-capstone-project
        description: >-
          Dự án tổng kết: xây hệ thống multi-agent hoàn chỉnh có RAG, MCP tools,
          memory, guardrails, observability, và deploy lên production. Code review
          và best practices tổng hợp.
        duration_minutes: 240
        is_free: true
        sort_order: 17
        video_url: null
reviews: []
quizzes: []
---

## Giới thiệu Series

**Build AI Agents: Từ Zero đến Production** là hành trình thực chiến giúp bạn xây dựng AI Agents — từ những concept cơ bản nhất cho đến hệ thống Multi-Agent phức tạp chạy trên production.

Khác với series "AI & LLM" tập trung vào lý thuyết và kiến trúc, series này 100% **hands-on** — mỗi bài là một project thực tế, mỗi concept đều có code chạy được ngay.

> 🎯 **Mục tiêu:** Sau khi hoàn thành, bạn có thể tự xây dựng và deploy một hệ thống AI Agent production-ready cho bất kỳ use case nào.

## Bạn sẽ học được gì?

### Phần 1: Nền tảng Agent — Hiểu trước khi xây

- **Bài 1:** Agent là gì? Phân biệt chatbot vs agent vs copilot
- **Bài 2:** LLM APIs Masterclass: OpenAI, Claude, Gemini — thành thạo cả 3
- **Bài 3:** Prompt Engineering cho Agent: system prompts, personas, ReAct pattern

### Phần 2: Function Calling & Tool Use

- **Bài 4:** Function Calling — cho agent "tay chân" để tương tác với thế giới
- **Bài 5:** Custom Tools: web search, code execution, API integration
- **Bài 6:** The Agent Loop — implement vòng lặp Thought-Action-Observation từ đầu

### Phần 3: RAG & Memory — Cho Agent trí nhớ

- **Bài 7:** RAG cho Agent: kết nối knowledge base với ChromaDB, Qdrant
- **Bài 8:** Agent Memory: short-term, long-term, episodic memory architecture

### Phần 4: Agentic Frameworks

- **Bài 9:** LangChain & LangGraph: stateful agent workflows với graph-based orchestration
- **Bài 10:** CrewAI: xây "đội ngũ" AI Agent cộng tác với nhau
- **Bài 11:** Advanced Patterns: Planning, Reflection, Self-Correction

### Phần 5: MCP, A2A & Multi-Agent Systems

- **Bài 12:** Model Context Protocol (MCP): chuẩn kết nối universal cho agent
- **Bài 13:** Agent-to-Agent (A2A): protocol để agent giao tiếp cross-framework
- **Bài 14:** Multi-Agent Orchestration: kiến trúc & design patterns

### Phần 6: Production & Triển khai thực tế

- **Bài 15:** Guardrails & Safety: bảo vệ agent khỏi prompt injection, hallucination
- **Bài 16:** Observability & Evaluation: tracing, logging, LLM-as-a-Judge
- **Bài 17:** Deploy Agent lên Production: FastAPI, Docker, Cloud
- **Bài 18:** Capstone Project: xây AI Agent Team hoàn chỉnh end-to-end

## Yêu cầu đầu vào

- **Python trung cấp** (async/await, decorators, classes, error handling)
- Hiểu cơ bản về LLM (đã biết ChatGPT/Claude API là gì — hoặc hoàn thành series "AI & LLM")
- Máy tính với ít nhất 8GB RAM (GPU không bắt buộc — phần lớn chạy qua API)
- Tài khoản OpenAI/Anthropic/Google AI (free tier đủ cho hầu hết bài học)

## Công cụ sử dụng

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

## Series này khác gì với "AI & LLM: Từ Cơ bản đến Nâng cao"?

| | AI & LLM Series | Build AI Agents |
|---|---|---|
| **Focus** | Lý thuyết + kiến trúc LLM | Xây dựng ứng dụng Agent thực tế |
| **Đối tượng** | Người mới bắt đầu AI | Đã biết cơ bản LLM |
| **Thực hành** | Code minh hoạ concept | Project thực tế mỗi bài |
| **Output** | Hiểu cách LLM hoạt động | Có portfolio Agent projects |
| **Công nghệ** | PyTorch, Transformers | LangGraph, CrewAI, MCP, A2A |
