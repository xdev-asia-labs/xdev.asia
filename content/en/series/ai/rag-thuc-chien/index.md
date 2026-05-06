---
id: 019c9619-aa05-7005-b005-aa0500000005
title: 'Real Battle RAG: From Basic to Advanced'
slug: rag-thuc-chien
description: >-
  In-depth course on Retrieval-Augmented Generation (RAG) — techniques for
  connecting the LLM to your own data. From basic RAG to Graph RAG, Agentic RAG,
  Multimodal RAG. Hands-on with ChromaDB, Qdrant, LangChain, LlamaIndex. Deploy
  "Chat with Documents" to production.
featured_image: uploads/2026/03/rag-thuc-chien-cover.png
level: intermediate
duration_hours: 45
lesson_count: 14
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-29T14:00:00.000000Z'
created_at: '2026-03-29T14:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI & Machine Learning
  slug: ai-machine-learning
tags:
  - name: RAG
    slug: rag
  - name: Vector Database
    slug: vector-database
  - name: LangChain
    slug: langchain
  - name: LlamaIndex
    slug: llamaindex
  - name: ChromaDB
    slug: chromadb
  - name: Embedding
    slug: embedding
  - name: Graph RAG
    slug: graph-rag
  - name: Agentic RAG
    slug: agentic-rag
  - name: RAGAS
    slug: ragas
  - name: Python
    slug: python
  - name: LLM
    slug: llm
  - name: hands-on
    slug: hands-on
  - name: production
    slug: production
sections:
  - id: section-rag-01
    title: 'Part 1: RAG Platform'
    description: 'Understand RAG roots, embedding models, and vector databases'
    sort_order: 1
    lessons:
      - id: 019c9619-ff01-7001-a001-ff0100000001
        title: 'Lesson 1: What is RAG? — Architecture, Use Cases & Why RAG is needed'
        slug: bai-1-rag-la-gi
        description: >-
          What problem does RAG solve: hallucination, knowledge cutoff,
          domain-specific. Architecture Retrieve → Augment → Generate. Compare
          RAG vs Fine-tuning. The simplest "Chat with PDF" demo in 50 lines of
          code.
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-ff02-7002-a002-ff0200000002
        title: 'Lesson 2: Embedding Models — Turn Text into Vector'
        slug: bai-2-embedding-models
        description: >-
          What is Embedding, why is it important? Compare models: OpenAI
          text-embedding-3, Cohere embed-v3, Sentence-Transformers, BGE.
          Benchmark performance. Multilingual embeddings for Vietnamese.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-ff03-7003-a003-ff0300000003
        title: 'Lesson 3: Vector Databases — Chroma, Qdrant, Pinecone, Weaviate'
        slug: bai-3-vector-databases
        description: >-
          Compare the 4 most popular DB vectors: setup, API, performance,
          pricing. HNSW index, IVF, PQ. Hybrid search (vector + keyword).
          Metadata filtering. Hands-on with ChromaDB and Qdrant.
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-rag-02
    title: 'Part 2: Document Processing Pipeline'
    description: Document handling — from PDF to RAG-ready chunks
    sort_order: 2
    lessons:
      - id: 019c9619-ff04-7004-a004-ff0400000004
        title: 'Lesson 4: Document Loading — PDF, DOCX, Web, YouTube, Code'
        slug: bai-4-document-loading
        description: >-
          Handle a variety of document sources: PDF (tables, images), DOCX,
          HTML/Web scraping, YouTube transcripts, GitHub code repos. LangChain
          document loaders vs LlamaIndex readers. Handling Vietnamese.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-ff05-7005-a005-ff0500000005
        title: 'Lesson 5: Chunking Strategies — Fixed, Semantic, Recursive'
        slug: bai-5-chunking-strategies
        description: >-
          Chunking directly affects RAG quality. Compare: fixed-size, recursive
          character, semantic chunking, document-based. Overlap strategy. Chunk
          size optimization. Demo and benchmark each strategy.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-ff06-7006-a006-ff0600000006
        title: 'Lesson 6: Metadata, Filtering & Hybrid Search'
        slug: bai-6-metadata-hybrid-search
        description: >-
          Add metadata (source, date, author, category) for chunks. Metadata
          filtering in query. Hybrid search: combine vector similarity + BM25
          keyword search. Reciprocal Rank Fusion.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-rag-03
    title: 'Part 3: Advanced RAG Techniques'
    description: Advanced RAG techniques — most valuable 2025-2026
    sort_order: 3
    lessons:
      - id: 019c9619-ff07-7007-a007-ff0700000007
        title: 'Lesson 7: Query Transformation — HyDE, Multi-Query, Step-Back'
        slug: bai-7-query-transformation
        description: >-
          Improve retrieval with question variations: HyDE (generate
          hypothetical answer then search), Multi-Query (generate multiple
          question variations), Step-Back (ask overview question first). Compare
          accuracy.
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-ff08-7008-a008-ff0800000008
        title: 'Lesson 8: Re-Ranking & Contextual Compression'
        slug: bai-8-reranking-compression
        description: >-
          After retrieval, re-rank the results using cross-encoder (Cohere
          Rerank, BGE Reranker). Contextual compression: compress context to
          keep relevant parts. Long-context reordering. Lost-in-the-middle
          problem.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9619-ff09-7009-a009-ff0900000009
        title: 'Lesson 9: Graph RAG — Knowledge Graph + Vector Search'
        slug: bai-9-graph-rag
        description: >-
          Microsoft's Graph RAG: entity extraction, community detection, global
          + local search. Compare with naive RAG. Neo4j + LangChain integration.
          When does Graph RAG outperform vector RAG?
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-ff10-7010-a010-ff1000000010
        title: 'Lesson 10: Multimodal RAG — Images, Tables, Charts in Documents'
        slug: bai-10-multimodal-rag
        description: >-
          Handling documents with images, tables, charts: OCR, table extraction,
          chart understanding. Multimodal embeddings (CLIP). Vision-language
          models for document QA. Unstructured.io integration.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-rag-04
    title: 'Part 4: Production RAG'
    description: Take RAG from prototype to production-grade
    sort_order: 4
    lessons:
      - id: 019c9619-ff11-7011-a011-ff1100000011
        title: 'Lesson 11: Agentic RAG — Agent + RAG combines power'
        slug: bai-11-agentic-rag
        description: >-
          Agentic RAG: LLM decides when to retrieve, which query, and from which
          source. Multi-source RAG (multiple knowledge base). Routing queries.
          Self-correcting RAG (check answer quality then retry).
        duration_minutes: 180
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-ff12-7012-a012-ff1200000012
        title: 'Lesson 12: RAG Evaluation — RAGAS, Faithfulness & Relevancy'
        slug: bai-12-rag-evaluation
        description: >-
          Evaluate the RAG pipeline: RAGAS framework (Faithfulness, Answer
          Relevancy, Context Precision, Context Recall). LLM-as-Judge for RAG.
          Build an automatic evaluation suite. When is RAG "good enough" for
          production?
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-ff13-7013-a013-ff1300000013
        title: 'Lesson 13: Deploy RAG to Production — API, Caching & Monitoring'
        slug: bai-13-deploy-rag-production
        description: >-
          Build RAG API with FastAPI. Semantic caching (avoid recompiling the
          same question). Document sync pipeline. Monitoring: latency, cost,
          accuracy drift. Scaling strategies.
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9619-ff14-7014-a014-ff1400000014
        title: 'Lesson 14: Capstone — Build a complete "Chat with Documents".'
        slug: bai-14-capstone
        description: >-
          Project summary: building a production-ready "Chat with Documents"
          system. Multi-format ingestion, advanced chunking, hybrid search,
          re-ranking, evaluation, caching, monitoring. Deploy and demo.
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
reviews: []
quizzes: []
locale: en
---

## Introducing the Series

**Retrieval-Augmented Generation** is an in-depth course on **Retrieval-Augmented Generation** — a technique that allows LLM to access and use your **private data** (internal documents, knowledge base, database) to answer accurately and up-to-date.

> 🎯 **Why is RAG important?** RAG is **the #1 technique** applied by businesses to solve the 3 biggest problems of LLM: hallucination, knowledge cutoff (old knowledge), and domain-specific knowledge (specialized knowledge).

## What will you learn?

### Part 1: RAG Platform
- **Lesson 1:** What is RAG? Architecture Retrieve → Augment → Generate
- **Lesson 2:** Embedding Models: OpenAI, Cohere, Open-source for Vietnamese
- **Lesson 3:** Vector Databases: Chroma, Qdrant, Pinecone — setup & comparison

### Part 2: Document Processing Pipeline
- **Lesson 4:** Document Loading: PDF, DOCX, Web, YouTube, Code repos
- **Lesson 5:** Chunking Strategies: fixed vs semantic vs recursive
- **Lesson 6:** Metadata, Filtering & Hybrid Search

### Part 3: Advanced RAG Techniques
- **Lesson 7:** Query Transformation: HyDE, Multi-Query, Step-Back
- **Lesson 8:** Re-Ranking & Contextual Compression
- **Lesson 9:** 🔥 **Graph RAG** — Knowledge Graph + Vector Search
- **Lesson 10:** 🔥 **Multimodal RAG** — Photos, tables, charts in documents

### Part 4: Production RAG
- **Lesson 11:** 🔥 **Agentic RAG** — Agent decides when to retrieve
- **Lesson 12:** RAG Evaluation: RAGAS framework
- **Lesson 13:** Deploy to Production: API, caching, monitoring
- **Lesson 14:** Capstone: "Chat with Documents" complete

## Input required

- **Intermediate Python** (async/await, file I/O, API calls)
- Basic understanding of LLM and Prompt Engineering
- OpenAI or Anthropic account (for embedding + LLM calls)

## Tools used

```
Python 3.11+        | Ngôn ngữ chính
OpenAI / Anthropic   | LLM APIs + Embeddings
ChromaDB / Qdrant    | Vector Databases
LangChain            | RAG framework
LlamaIndex           | Alternative RAG framework
Unstructured.io      | Document processing
Neo4j                | Graph database (Graph RAG)
RAGAS                | RAG evaluation
FastAPI              | Production API
```
