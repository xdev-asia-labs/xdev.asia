---
id: 019c9619-aa05-7005-b005-aa0500000005
title: 真實戰鬥 RAG：從基礎到高級
slug: rag-thuc-chien
description: >-
  關於檢索增強生成 (RAG) 的深入課程 - 將法學碩士與您自己的數據連接起來的技術。從基本 RAG 到 Graph RAG、Agentic
  RAG、Multimodal RAG。實踐 ChromaDB、Qdrant、LangChain、LlamaIndex。將“Chat with
  Documents”部署到生產環境。
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
  name: 人工智慧與機器學習
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
    title: 第 1 部分：RAG 平台
    description: 了解 RAG 根、嵌入模型和向量資料庫
    sort_order: 1
    lessons:
      - id: 019c9619-ff01-7001-a001-ff0100000001
        title: 第 1 課：什麼是 RAG？ — 架構、用例以及為什麼需要 RAG
        slug: bai-1-rag-la-gi
        description: RAG解決什麼問題：幻覺、知識切割、特定領域。架構檢索→增強→產生。比較 RAG 與微調。最簡單的「用 PDF 聊天」演示，50 行程式碼。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-ff02-7002-a002-ff0200000002
        title: 第 2 課：嵌入模型 — 將文字轉換為向量
        slug: bai-2-embedding-models
        description: >-
          什麼是嵌入，為什麼它很重要？比較模型：OpenAI text-embedding-3、Cohere
          embed-v3、Sentence-Transformers、BGE。基準性能。越南語的多語言嵌入。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-ff03-7003-a003-ff0300000003
        title: 第 3 課：向量資料庫 — Chroma、Qdrant、Pinecone、Weaviate
        slug: bai-3-vector-databases
        description: >-
          比較 4 個最受歡迎的資料庫向量：設定、API、效能、定價。 HNSW 指數、IVF、PQ。混合搜尋（向量+關鍵字）。元資料過濾。實踐
          ChromaDB 和 Qdrant。
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-rag-02
    title: 第 2 部分：文件處理管道
    description: 文件處理 — 從 PDF 到 RAG 就緒區塊
    sort_order: 2
    lessons:
      - id: 019c9619-ff04-7004-a004-ff0400000004
        title: 第 4 課：文件載入 — PDF、DOCX、Web、YouTube、程式碼
        slug: bai-4-document-loading
        description: >-
          處理各種文件來源：PDF（表格、圖像）、DOCX、HTML/Web 抓取、YouTube 成績單、GitHub 程式碼儲存庫。
          LangChain 文件載入器與 LlamaIndex 閱讀器。處理越南語。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-ff05-7005-a005-ff0500000005
        title: 第 5 課：分塊策略－固定、語意、遞迴
        slug: bai-5-chunking-strategies
        description: 分塊直接影響 RAG 品質。比較：固定大小、遞歸字元、語意分塊、基於文件。重疊策略。塊大小優化。對每個策略進行演示和基準測試。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-ff06-7006-a006-ff0600000006
        title: 第 6 課：元資料、過濾和混合搜索
        slug: bai-6-metadata-hybrid-search
        description: 新增區塊的元資料（來源、日期、作者、類別）。查詢中的元資料過濾。混合搜尋：結合向量相似度+BM25關鍵字搜尋。倒數等級融合。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-rag-03
    title: 第 3 部分：高級 RAG 技術
    description: 先進的 RAG 技術－2025-2026 年最有價值
    sort_order: 3
    lessons:
      - id: 019c9619-ff07-7007-a007-ff0700000007
        title: 第 7 課：查詢轉換 — HyDE、多查詢、Step-Back
        slug: bai-7-query-transformation
        description: 透過問題變體改進檢索：HyDE（產生假設答案，然後搜尋）、多查詢（產生多個問題變體）、Step-Back（首先詢問概述問題）。比較準確度。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-ff08-7008-a008-ff0800000008
        title: 第 8 課：重新排名與情境壓縮
        slug: bai-8-reranking-compression
        description: >-
          檢索後，使用交叉編碼器（Cohere Rerank、BGE
          Reranker）重新排序結果。上下文壓縮：壓縮上下文以保留相關部分。長上下文重新排序。迷失在中間的問題。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9619-ff09-7009-a009-ff0900000009
        title: 第 9 課：Graph RAG — 知識圖譜 + 向量搜尋
        slug: bai-9-graph-rag
        description: >-
          微軟的Graph RAG：實體提取、社群偵測、全域+本地搜尋。與天真的 RAG 相比。 Neo4j + LangChain 整合。
          Graph RAG 何時優於向量 RAG？
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-ff10-7010-a010-ff1000000010
        title: 第 10 課：多模式 RAG — 文件中的圖像、表格、圖表
        slug: bai-10-multimodal-rag
        description: 處理帶有圖像、表格、圖表的文檔：OCR、表格提取、圖表理解。多模態嵌入（CLIP）。用於文件品質檢查的視覺語言模型。非結構化.io 整合。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-rag-04
    title: 第 4 部分：生產 RAG
    description: 將 RAG 從原型提升到生產級
    sort_order: 4
    lessons:
      - id: 019c9619-ff11-7011-a011-ff1100000011
        title: 第 11 課：Agentic RAG — Agent + RAG 結合力量
        slug: bai-11-agentic-rag
        description: >-
          Agentic RAG：LLM 決定何時檢索、哪個查詢、從哪個來源檢索。多源RAG（多知識庫）。路由查詢。自校正
          RAG（檢查答案品質然後重試）。
        duration_minutes: 180
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-ff12-7012-a012-ff1200000012
        title: 第 12 課：RAG 評估 — RAGAS、忠實性和相關性
        slug: bai-12-rag-evaluation
        description: >-
          評估 RAG 管道：RAGAS 框架（忠實度、答案相關性、情境精確度、情境回想）。法學碩士擔任 RAG 法官。建立自動評估套件。 RAG
          什麼時候「夠好」用於生產？
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-ff13-7013-a013-ff1300000013
        title: 第 13 課：將 RAG 部署到生產環境 — API、快取和監控
        slug: bai-13-deploy-rag-production
        description: 使用 FastAPI 建置 RAG API。語義緩存（避免重新編譯相同問題）。文檔同步管道。監控：延遲、成本、準確性漂移。擴展策略。
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9619-ff14-7014-a014-ff1400000014
        title: 第 14 課：Capstone — 建立完整的「使用文件聊天」。
        slug: bai-14-capstone
        description: >-
          專案摘要：建構一個可投入生產的「Chat with
          Documents」系統。多格式攝取、進階分塊、混合搜尋、重新排名、評估、快取、監控。部署和演示。
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
reviews: []
quizzes: []
locale: zh-tw
---

## 系列介紹

**檢索增強生成**是關於**檢索增強生成**的深入課程——一種允許法學碩士訪問和使用您的**私有數據**（內部文檔、知識庫、數據庫）以準確和最新回答的技術。

> 🎯 **為什麼RAG很重要？ ** RAG是企業應用的**#1技術**，用於解決LLM的3個最大問題：幻覺、知識切斷（舊知識）和特定領域知識（專業知識）。

## 你會學到什麼？

### 第 1 部分：RAG 平台
- **第 1 課：** RAG 是什麼？架構檢索 → 增強 → 生成
- **第 2 課：** 嵌入模型：OpenAI、Cohere、越南語開源
- **第 3 課：** 向量資料庫：Chroma、Qdrant、Pinecone — 設定與比較

### 第 2 部分：文件處理管道
- **第 4 課：** 文件載入：PDF、DOCX、Web、YouTube、程式碼儲存庫
- **第 5 課：** 分塊策略：固定、語意、遞迴
- **第 6 課：** 元資料、過濾和混合搜索

### 第 3 部分：進階 RAG 技術
- **第 7 課：** 查詢轉換：HyDE、多重查詢、Step-Back
- **第 8 課：** 重新排名與情境壓縮
- **第 9 課：** 🔥 **圖 RAG** — 知識圖 + 向量搜尋
- **第 10 課：** 🔥 **Multimodal RAG** — 文件中的照片、表格、圖表

### 第 4 部分：生產 RAG
- **第 11 課：** 🔥 **代理 RAG** — 代理決定何時檢索
- **第 12 課：** RAG 評估：RAGAS 框架
- **第 13 課：** 部署到生產：API、快取、監控
- **第 14 課：** 頂點：「與文件聊天」完成

## 需要輸入

- **中級 Python**（非同步/等待、檔案 I/O、API 呼叫）
- 對LLM和Prompt Engineering的基本了解
- OpenAI 或 Anthropic 帳戶（用於嵌入 + LLM 呼叫）

## 使用的工具

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
