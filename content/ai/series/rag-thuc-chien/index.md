---
id: 019c9619-aa05-7005-b005-aa0500000005
title: "RAG Thực Chiến: Từ Basic đến Advanced"
slug: rag-thuc-chien
description: >-
  Khóa học chuyên sâu về Retrieval-Augmented Generation (RAG) — kỹ thuật
  kết nối LLM với dữ liệu riêng của bạn. Từ basic RAG đến Graph RAG,
  Agentic RAG, Multimodal RAG. Hands-on với ChromaDB, Qdrant, LangChain,
  LlamaIndex. Deploy "Chat with Documents" lên production.
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
    title: "Phần 1: Nền tảng RAG"
    description: Hiểu RAG từ gốc, embedding models, và vector databases
    sort_order: 1
    lessons:
      - id: 019c9619-ff01-7001-a001-ff0100000001
        title: 'Bài 1: RAG là gì? — Kiến trúc, Use Cases & Tại sao cần RAG'
        slug: bai-1-rag-la-gi
        description: >-
          RAG giải quyết vấn đề gì: hallucination, knowledge cutoff, domain-specific.
          Kiến trúc Retrieve → Augment → Generate. So sánh RAG vs Fine-tuning.
          Demo "Chat with PDF" đơn giản nhất trong 50 dòng code.
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-ff02-7002-a002-ff0200000002
        title: 'Bài 2: Embedding Models — Biến Text thành Vector'
        slug: bai-2-embedding-models
        description: >-
          Embedding là gì, tại sao quan trọng. So sánh models: OpenAI text-embedding-3,
          Cohere embed-v3, Sentence-Transformers, BGE. Benchmark hiệu năng.
          Multilingual embeddings cho tiếng Việt.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-ff03-7003-a003-ff0300000003
        title: 'Bài 3: Vector Databases — Chroma, Qdrant, Pinecone, Weaviate'
        slug: bai-3-vector-databases
        description: >-
          So sánh 4 vector DB phổ biến nhất: setup, API, performance, pricing.
          HNSW index, IVF, PQ. Hybrid search (vector + keyword). Metadata
          filtering. Hands-on với ChromaDB và Qdrant.
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-rag-02
    title: "Phần 2: Document Processing Pipeline"
    description: Xử lý tài liệu — từ PDF đến chunks sẵn sàng cho RAG
    sort_order: 2
    lessons:
      - id: 019c9619-ff04-7004-a004-ff0400000004
        title: 'Bài 4: Document Loading — PDF, DOCX, Web, YouTube, Code'
        slug: bai-4-document-loading
        description: >-
          Xử lý đa dạng nguồn tài liệu: PDF (bảng, hình), DOCX, HTML/Web
          scraping, YouTube transcripts, GitHub code repos. LangChain document
          loaders vs LlamaIndex readers. Handling tiếng Việt.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-ff05-7005-a005-ff0500000005
        title: 'Bài 5: Chunking Strategies — Fixed, Semantic, Recursive'
        slug: bai-5-chunking-strategies
        description: >-
          Chunking ảnh hưởng trực tiếp đến chất lượng RAG. So sánh: fixed-size,
          recursive character, semantic chunking, document-based. Overlap strategy.
          Chunk size optimization. Demo và benchmark từng strategy.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-ff06-7006-a006-ff0600000006
        title: 'Bài 6: Metadata, Filtering & Hybrid Search'
        slug: bai-6-metadata-hybrid-search
        description: >-
          Thêm metadata (source, date, author, category) cho chunks. Metadata
          filtering trong query. Hybrid search: kết hợp vector similarity +
          BM25 keyword search. Reciprocal Rank Fusion.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-rag-03
    title: "Phần 3: Advanced RAG Techniques"
    description: Kỹ thuật RAG nâng cao — đáng giá nhất 2025-2026
    sort_order: 3
    lessons:
      - id: 019c9619-ff07-7007-a007-ff0700000007
        title: 'Bài 7: Query Transformation — HyDE, Multi-Query, Step-Back'
        slug: bai-7-query-transformation
        description: >-
          Cải thiện retrieval bằng biến đổi câu hỏi: HyDE (generate hypothetical
          answer rồi search), Multi-Query (tạo nhiều biến thể câu hỏi),
          Step-Back (hỏi câu tổng quan trước). So sánh accuracy.
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-ff08-7008-a008-ff0800000008
        title: 'Bài 8: Re-Ranking & Contextual Compression'
        slug: bai-8-reranking-compression
        description: >-
          Sau khi retrieve, re-rank kết quả bằng cross-encoder (Cohere Rerank,
          BGE Reranker). Contextual compression: nén context giữ phần relevant.
          Long-context reordering. Lost-in-the-middle problem.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9619-ff09-7009-a009-ff0900000009
        title: 'Bài 9: Graph RAG — Knowledge Graph + Vector Search'
        slug: bai-9-graph-rag
        description: >-
          Graph RAG của Microsoft: entity extraction, community detection,
          global + local search. So sánh với naive RAG. Neo4j + LangChain
          integration. Khi nào Graph RAG vượt trội vector RAG.
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-ff10-7010-a010-ff1000000010
        title: 'Bài 10: Multimodal RAG — Ảnh, Bảng, Biểu đồ trong Tài liệu'
        slug: bai-10-multimodal-rag
        description: >-
          Xử lý tài liệu có ảnh, bảng, biểu đồ: OCR, table extraction,
          chart understanding. Multimodal embeddings (CLIP). Vision-language
          models cho document QA. Unstructured.io integration.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-rag-04
    title: "Phần 4: Production RAG"
    description: Đưa RAG từ prototype lên production-grade
    sort_order: 4
    lessons:
      - id: 019c9619-ff11-7011-a011-ff1100000011
        title: 'Bài 11: Agentic RAG — Agent + RAG kết hợp sức mạnh'
        slug: bai-11-agentic-rag
        description: >-
          Agentic RAG: LLM tự quyết định khi nào retrieve, query nào, từ nguồn
          nào. Multi-source RAG (nhiều knowledge base). Routing queries.
          Self-correcting RAG (kiểm tra answer quality rồi retry).
        duration_minutes: 180
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-ff12-7012-a012-ff1200000012
        title: 'Bài 12: RAG Evaluation — RAGAS, Faithfulness & Relevancy'
        slug: bai-12-rag-evaluation
        description: >-
          Đánh giá RAG pipeline: RAGAS framework (Faithfulness, Answer Relevancy,
          Context Precision, Context Recall). LLM-as-Judge cho RAG. Xây evaluation
          suite tự động. Khi nào RAG "đủ tốt" cho production.
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-ff13-7013-a013-ff1300000013
        title: 'Bài 13: Deploy RAG lên Production — API, Caching & Monitoring'
        slug: bai-13-deploy-rag-production
        description: >-
          Xây RAG API với FastAPI. Semantic caching (tránh compute lại câu hỏi
          tương tự). Document sync pipeline. Monitoring: latency, cost, accuracy
          drift. Scaling strategies.
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9619-ff14-7014-a014-ff1400000014
        title: 'Bài 14: Capstone — Xây "Chat with Documents" hoàn chỉnh'
        slug: bai-14-capstone
        description: >-
          Dự án tổng kết: xây hệ thống "Chat with Documents" production-ready.
          Multi-format ingestion, advanced chunking, hybrid search, re-ranking,
          evaluation, caching, monitoring. Deploy và demo.
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
reviews: []
quizzes: []
---

## Giới thiệu Series

**RAG Thực Chiến** là khóa học chuyên sâu về **Retrieval-Augmented Generation** — kỹ thuật cho phép LLM truy cập và sử dụng **dữ liệu riêng** của bạn (tài liệu nội bộ, knowledge base, database) để trả lời chính xác và cập nhật.

> 🎯 **Tại sao RAG quan trọng?** RAG là **kỹ thuật #1** được doanh nghiệp áp dụng để giải quyết 3 vấn đề lớn nhất của LLM: hallucination (bịa đặt), knowledge cutoff (kiến thức cũ), và domain-specific knowledge (kiến thức chuyên ngành).

## Bạn sẽ học được gì?

### Phần 1: Nền tảng RAG
- **Bài 1:** RAG là gì? Kiến trúc Retrieve → Augment → Generate
- **Bài 2:** Embedding Models: OpenAI, Cohere, Open-source cho tiếng Việt
- **Bài 3:** Vector Databases: Chroma, Qdrant, Pinecone — setup & so sánh

### Phần 2: Document Processing Pipeline
- **Bài 4:** Document Loading: PDF, DOCX, Web, YouTube, Code repos
- **Bài 5:** Chunking Strategies: fixed vs semantic vs recursive
- **Bài 6:** Metadata, Filtering & Hybrid Search

### Phần 3: Advanced RAG Techniques
- **Bài 7:** Query Transformation: HyDE, Multi-Query, Step-Back
- **Bài 8:** Re-Ranking & Contextual Compression
- **Bài 9:** 🔥 **Graph RAG** — Knowledge Graph + Vector Search
- **Bài 10:** 🔥 **Multimodal RAG** — Ảnh, bảng, biểu đồ trong tài liệu

### Phần 4: Production RAG
- **Bài 11:** 🔥 **Agentic RAG** — Agent tự quyết định khi nào retrieve
- **Bài 12:** RAG Evaluation: RAGAS framework
- **Bài 13:** Deploy lên Production: API, caching, monitoring
- **Bài 14:** Capstone: "Chat with Documents" hoàn chỉnh

## Yêu cầu đầu vào

- **Python trung cấp** (async/await, file I/O, API calls)
- Hiểu cơ bản về LLM và Prompt Engineering
- Tài khoản OpenAI hoặc Anthropic (cho embedding + LLM calls)

## Công cụ sử dụng

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
