---
id: 019e0a01-aa01-7001-b001-ff0500000001
title: 'AI Agent Engineer: From Zero to Production'
slug: ai-agent-engineer-tu-zero-den-production
description: >-
  Comprehensive course on AI Agent Engineering — from Python & ML foundation,
  NLP & LLMs (LLaMA, Mistral, Qwen, Phi), RAG with Vector DB (FAISS, Milvus,
  Pinecone), to building AI Agent systems with LangChain, LlamaIndex, CrewAI,
  LangGraph. Practice Fine-tuning, Prompt Engineering, Tool Calling,
  Multi-Agent. Deploy production with FastAPI, Docker, Microservices, MLOps,
  CI/CD on AWS/Azure/GCP. Fully meets AI/ML Engineer recruitment requirements at
  leading technology companies.
featured_image: uploads/2026/04/ai-agent-engineer-cover.png
level: intermediate
duration_hours: 80
lesson_count: 22
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-15T10:00:00.000000Z'
created_at: '2026-04-15T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9616-cat1-7001-a001-000000000001
  name: AI & Machine Learning
  slug: ai-machine-learning
tags:
  - name: AI
    slug: ai
  - name: LLM
    slug: llm
  - name: Machine Learning
    slug: machine-learning
  - name: NLP
    slug: nlp
  - name: RAG
    slug: rag
  - name: Python
    slug: python
  - name: Deep Learning
    slug: deep-learning
  - name: Docker
    slug: docker
  - name: Microservices
    slug: microservices
  - name: Fine-tuning
    slug: fine-tuning
  - name: Prompt Engineering
    slug: prompt-engineering
sections:
  - id: section-agent-01
    title: 'Part 1: Foundation — Python, ML & AI Tooling'
    description: >-
      Build a solid foundation in Python, Machine Learning pipeline and Deep
      Learning for AI Engineer
    sort_order: 1
    lessons:
      - id: 019e0a01-bb01-7001-c001-ee0100000001
        title: 'Lesson 1: Python for AI Engineers — Ecosystem & Best Practices'
        slug: bai-1-python-ai-engineer-ecosystem
        description: >-
          Python ecosystem for AI: NumPy, Pandas, scikit-learn. Virtual
          environments, dependency management. Coding patterns for ML projects.
          Type hints, testing, production standard project structure.
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019e0a01-bb02-7001-c001-ee0200000001
        title: 'Lesson 2: Machine Learning Pipeline — From Data to Model'
        slug: bai-2-ml-pipeline-data-den-model
        description: >-
          End-to-end ML pipeline: data collection, preprocessing, feature
          engineering. Model training, evaluation, hyperparameter tuning.
          scikit-learn, XGBoost. MLflow tracking.
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e0a01-bb03-7001-c001-ee0300000001
        title: 'Lesson 3: Deep Learning & Neural Networks Essentials'
        slug: bai-3-deep-learning-neural-networks
        description: >-
          Neural networks fundamentals. PyTorch basics. CNN, RNN overview.
          Training loops, loss functions, optimizers. GPU training. Transfer
          learning concepts. Model serialization.
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-agent-02
    title: 'Part 2: NLP & Large Language Models (LLMs)'
    description: 'Deep dive into NLP, Transformer architecture and popular open source LLMs'
    sort_order: 2
    lessons:
      - id: 019e0a01-bb04-7001-c001-ee0400000001
        title: 'Lesson 4: NLP Fundamentals — Tokenization, Embeddings & Transformer'
        slug: bai-4-nlp-tokenization-embeddings-transformer
        description: >-
          NLP pipeline: tokenization (BPE, WordPiece, SentencePiece). Word
          embeddings (Word2Vec, GloVe). Transformer architecture:
          self-attention, multi-head attention, positional encoding. Hugging
          Face Transformers library.
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019e0a01-bb05-7001-c001-ee0500000001
        title: 'Lesson 5: LLM Deep Dive — LLaMA, Mistral, Qwen, Phi'
        slug: bai-5-llm-deep-dive-llama-mistral-qwen-phi
        description: >-
          Detailed comparison of open-source LLMs: LLaMA 3, Mistral, Qwen 2.5,
          Phi-3/4. Architecture differences, benchmarks, use cases. Run locally
          with Ollama, vLLM. Commercial models: GPT-4, Claude, Gemini.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e0a01-bb06-7001-c001-ee0600000001
        title: 'Lesson 6: Fine-tuning LLMs — LoRA, QLoRA & PEFT'
        slug: bai-6-fine-tuning-llm-lora-qlora-peft
        description: >-
          Fine-tuning strategies: full fine-tuning vs parameter-efficient. LoRA,
          QLoRA, PEFT. Dataset preparation, training with Hugging Face TRL.
          Evaluation metrics. Merging adapters. Practice fine-tuning
          Mistral/LLaMA for domain-specific tasks.
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e0a01-bb07-7001-c001-ee0700000001
        title: 'Lesson 7: Prompt Engineering & LLM Evaluation'
        slug: bai-7-prompt-engineering-llm-evaluation
        description: >-
          Prompt engineering techniques: zero-shot, few-shot, chain-of-thought,
          tree-of-thought. System prompts, structured output. LLM evaluation:
          BLEU, ROUGE, human eval. LLM-as-judge. Benchmarking frameworks.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-agent-03
    title: 'Part 3: RAG, Embeddings & Vector Database'
    description: >-
      Build a complete RAG system with vector database and advanced retrieval
      techniques
    sort_order: 3
    lessons:
      - id: 019e0a01-bb08-7001-c001-ee0800000001
        title: 'Lesson 8: Embeddings & Semantic Search Fundamentals'
        slug: bai-8-embeddings-semantic-search
        description: >-
          Text embeddings: sentence-transformers, OpenAI embeddings. Embedding
          models comparison. Cosine similarity, semantic search. Chunking
          strategies: fixed-size, semantic, recursive. Document loaders for PDF,
          web, database.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e0a01-bb09-7001-c001-ee0900000001
        title: 'Lesson 9: Vector Database — FAISS, Milvus, Pinecone'
        slug: bai-9-vector-database-faiss-milvus-pinecone
        description: >-
          Vector DB concepts: indexing (IVF, HNSW, PQ), similarity search. FAISS
          for local development. Milvus distributed setup. Pinecone managed
          service. Chroma, Weaviate alternatives. Performance benchmarks, cost
          comparisons.
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e0a01-bb10-7001-c001-ee1000000001
        title: 'Lesson 10: RAG Pipeline — LangChain & LlamaIndex'
        slug: bai-10-rag-pipeline-langchain-llamaindex
        description: >-
          RAG architecture: indexing, retrieval, generation. LangChain RAG
          chain. LlamaIndex data framework. Document processing pipeline.
          Retriever types. Response synthesis. Evaluation with RAGAS. Practice
          building a complete RAG chatbot.
        duration_minutes: 180
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019e0a01-bb11-7001-c001-ee1100000001
        title: 'Lesson 11: Advanced RAG — Reranking, HyDE & Self-RAG'
        slug: bai-11-advanced-rag-reranking-hyde-self-rag
        description: >-
          Advanced retrieval: hybrid search (sparse + dense), reranking (Cohere,
          cross-encoder). Query transformation: HyDE, multi-query, step-back
          prompting. Self-RAG, CRAG. Agentic RAG, Graph RAG. Production
          optimization.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-agent-04
    title: 'Part 4: AI Agent & Agent-based Systems'
    description: >-
      Core of the course — building AI Agent from concepts to multi-agent
      production system
    sort_order: 4
    lessons:
      - id: 019e0a01-bb12-7001-c001-ee1200000001
        title: 'Lesson 12: AI Agent Fundamentals — Concepts & Architecture'
        slug: bai-12-ai-agent-fundamentals-concepts
        description: >-
          What is AI Agent? Agent vs Chatbot vs Pipeline. Core components:
          perception, reasoning, action. Agent architectures: ReAct,
          Plan-and-Execute, Reflexion. Agent loop, state management. Taxonomy of
          AI Agents. Real-world use cases.
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e0a01-bb13-7001-c001-ee1300000001
        title: 'Lesson 13: Tool Calling, Function Calling & ReAct Pattern'
        slug: bai-13-tool-calling-function-calling-react
        description: >-
          Function calling API (OpenAI, Anthropic). Tool definition, schema
          design. ReAct pattern implementation. Tool selection, error handling,
          retry logic. Custom tools: web search, database query, API calls, code
          execution. Practice building Agents with tool calling.
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019e0a01-bb14-7001-c001-ee1400000001
        title: 'Lesson 14: Multi-Agent Systems — CrewAI, AutoGen & LangGraph'
        slug: bai-14-multi-agent-crewai-autogen-langgraph
        description: >-
          Multi-agent architectures: hierarchical, collaborative, competitive.
          CrewAI framework. Microsoft AutoGen. LangGraph state machines. Agent
          communication protocols. Orchestration patterns. Practice building
          multi-agent teams for complex tasks.
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e0a01-bb15-7001-c001-ee1500000001
        title: 'Lesson 15: Memory, Planning & Reasoning in AI Agent'
        slug: bai-15-memory-planning-reasoning-ai-agent
        description: >-
          Memory types: short-term (conversation), long-term (vector store),
          episodic. Planning strategies: task decomposition, sub-goal
          generation. Chain-of-thought reasoning. Self-reflection, iterative
          refinement. Human-in-the-loop patterns.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e0a01-bb16-7001-c001-ee1600000001
        title: 'Lesson 16: Building Production AI Agent — End-to-End Project'
        slug: bai-16-production-ai-agent-end-to-end
        description: >-
          Capstone project: build a complete AI Agent system. Requirements
          analysis, architecture design. RAG + Tool Calling + Multi-Agent.
          Conversation management, streaming responses. Error handling, fallback
          strategies. Testing AI Agents. Demo deployment.
        duration_minutes: 240
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-agent-05
    title: 'Part 5: APIs, Microservices & MLOps'
    description: 'Build AI services production-ready with FastAPI, Docker and MLOps pipeline'
    sort_order: 5
    lessons:
      - id: 019e0a01-bb17-7001-c001-ee1700000001
        title: 'Lesson 17: FastAPI for AI Services'
        slug: bai-17-fastapi-ai-services
        description: >-
          FastAPI fundamentals: async/await, Pydantic models, dependency
          injection. Streaming responses (SSE). WebSocket for real-time chat.
          File upload processing. Authentication, rate limiting. OpenAPI
          documentation. Background tasks.
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e0a01-bb18-7001-c001-ee1800000001
        title: 'Lesson 18: Docker & Microservices Architecture for AI'
        slug: bai-18-docker-microservices-ai
        description: >-
          Docker for AI: multi-stage builds, GPU support, model caching. Docker
          Compose for local dev. Microservices patterns: API Gateway, service
          mesh. Message queue (Redis, RabbitMQ). Separating services: inference,
          embedding, retrieval, orchestration.
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e0a01-bb19-7001-c001-ee1900000001
        title: 'Lesson 19: MLOps — CI/CD, Monitoring & Model Registry'
        slug: bai-19-mlops-cicd-monitoring-model-registry
        description: >-
          MLOps fundamentals: model versioning, experiment tracking (MLflow,
          W&B). CI/CD pipeline for AI: GitHub Actions, testing strategies. Model
          registry. Monitoring: latency, quality metrics, drift detection.
          Logging & observability (LangSmith).
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-agent-06
    title: 'Part 6: Deploy AI System Production'
    description: 'Deploy, scale and secure AI systems on the cloud'
    sort_order: 6
    lessons:
      - id: 019e0a01-bb20-7001-c001-ee2000000001
        title: 'Lesson 20: Cloud Deployment — AWS, Azure & GCP for AI'
        slug: bai-20-cloud-deployment-aws-azure-gcp
        description: >-
          AWS: SageMaker, Bedrock, Lambda. Azure: OpenAI Service, ML Studio.
          GCP: Vertex AI. Kubernetes for AI workloads. Serverless vs dedicated
          GPU instances. Infrastructure as Code (Terraform). Cost estimation.
        duration_minutes: 180
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e0a01-bb21-7001-c001-ee2100000001
        title: 'Lesson 21: Scaling, Caching & Cost Optimization'
        slug: bai-21-scaling-caching-cost-optimization
        description: >-
          Scaling strategies: horizontal, auto-scaling, load balancing. Caching
          layers: Redis, semantic cache. Model quantization (GPTQ, AWQ, GGUF).
          Batching inference requests. Token usage optimization. Cost analysis &
          budgeting.
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019e0a01-bb22-7001-c001-ee2200000001
        title: 'Lesson 22: Security, Guardrails & Responsible AI'
        slug: bai-22-security-guardrails-responsible-ai
        description: >-
          AI security: prompt injection, data poisoning, model extraction.
          Guardrails frameworks (NeMo Guardrails, Guardrails AI). Content
          filtering, PII detection. Rate limiting, abuse prevention. Responsible
          AI: bias mitigation, fairness, transparency. Compliance (GDPR, AI
          Act).
        duration_minutes: 150
        is_free: true
        sort_order: 21
        video_url: null
locale: en
---

