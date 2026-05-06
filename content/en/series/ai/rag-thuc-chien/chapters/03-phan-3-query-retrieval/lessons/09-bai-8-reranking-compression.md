---
id: 019c9619-ff08-7008-a008-ff0800000008
title: 'Lesson 8: Re-Ranking & Contextual Compression'
slug: bai-8-reranking-compression
description: >-
  Re-rank retrieval results using Cross-Encoder, Cohere Rerank. Contextual
  Compression removes redundant information, keeping only the part relevant to
  the question.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 3: Advanced Query & Retrieval'
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: 'Real Battle RAG: From Basic to Advanced'
  slug: rag-thuc-chien
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2251" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2251)"/>

  <!-- Decorations -->
  <g>
    <circle cx="840" cy="90" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1080" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="130" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="150" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="70" x2="1100" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="100" x2="1050" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="991.650635094611,157.5 991.650635094611,182.5 970,195 948.349364905389,182.5 948.349364905389,157.5 970,145" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 8: Re-Ranking & Contextual Compression</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Real Battle RAG: From Basic to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Advanced Query & Retrieval</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

You have retrieved top-K documents. But **wrong order** or **chunks contain too much redundant information** → LLM is noisy, poor response.

> **For example:** Retrieve 5 chunks, the 4th chunk contains the correct answer — but LLM focuses on chunk 1 (high rank but less relevant). Re-Ranking pushes chunk 4 to the top → improves quality.

This article covers 2 techniques:
1. **Re-Ranking** — reorder results according to actual relevance
2. **Contextual Compression** — compress/remove irrelevant parts

```
Retrieval Pipeline nâng cao:

Query → Retrieve (top-20) → Re-Rank (chọn top-5) → Compress → LLM
         ↑ recall cao          ↑ precision cao        ↑ ít noise
         (lấy nhiều)           (chọn đúng)            (nén gọn)
```

---

## 1. Why is Re-Ranking necessary?

### 1.1 Limitations of Bi-Encoder (embedding search)

```
Bi-Encoder (vector search):
  Query  →  Encoder A  →  vector_q ─┐
                                      ├── cosine similarity
  Doc    →  Encoder B  →  vector_d ─┘

Ưu: NHANH (pre-compute embeddings, tìm bằng ANN)
Nhược: Encode query và doc RIÊNG RẼ → bỏ lỡ cross-attention
       → ranking có thể sai thứ tự

Cross-Encoder (re-ranker):
  [Query + Doc] → Encoder → relevance score (0-1)

Ưu: CHÍNH XÁC hơn (xem query+doc cùng lúc, full attention)
Nhược: CHẬM (phải chạy model cho mỗi cặp query-doc)
```

### 1.2 Strategy: Retrieve many → Re-rank → Select few

```
                    Bi-Encoder        Cross-Encoder
                    (fast, rough)     (slow, accurate)
                         │                  │
Top-100 docs ──────→ Top-20 ──────→ Top-5 ──────→ LLM
                    (recall cao)    (precision cao)
```

---

## 2. Re-Ranking with Cross-Encoder

### 2.1 Use sentence-transformers

```python
"""Cross-Encoder re-ranking với sentence-transformers"""
from sentence_transformers import CrossEncoder

# Load model cross-encoder
reranker = CrossEncoder("cross-encoder/ms-marco-MiniLM-L-6-v2")

query = "Nghỉ phép bao nhiêu ngày?"

# Documents từ retrieval (top-20)
docs = [
    "Công ty thành lập năm 2020, trụ sở tại TP.HCM.",
    "Nhân viên full-time được 15 ngày phép có lương mỗi năm.",
    "Quy trình tuyển dụng gồm 3 vòng phỏng vấn.",
    "Nhân viên trên 5 năm được thêm 3 ngày phép.",
    "Lương được trả vào ngày 5 hàng tháng.",
]

# Re-rank: tính relevance score cho mỗi cặp (query, doc)
pairs = [(query, doc) for doc in docs]
scores = reranker.predict(pairs)

# Sắp xếp theo score giảm dần
ranked = sorted(zip(docs, scores), key=lambda x: x[1], reverse=True)
for doc, score in ranked:
    print(f"[{score:.3f}] {doc}")

# Output:
# [0.987] Nhân viên full-time được 15 ngày phép có lương mỗi năm.
# [0.912] Nhân viên trên 5 năm được thêm 3 ngày phép.
# [0.023] Lương được trả vào ngày 5 hàng tháng.
# [0.008] Quy trình tuyển dụng gồm 3 vòng phỏng vấn.
# [0.003] Công ty thành lập năm 2020, trụ sở tại TP.HCM.
```

### 2.2 Integration into LangChain

```python
"""Re-ranking trong LangChain pipeline"""
from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import CrossEncoderReranker
from langchain_community.cross_encoders import HuggingFaceCrossEncoder

# Base retriever (retrieve top-20)
base_retriever = vectorstore.as_retriever(search_kwargs={"k": 20})

# Cross-encoder reranker
model = HuggingFaceCrossEncoder(model_name="cross-encoder/ms-marco-MiniLM-L-6-v2")
reranker = CrossEncoderReranker(model=model, top_n=5)  # Chỉ giữ top-5

# Pipeline: retrieve 20 → rerank → top 5
reranking_retriever = ContextualCompressionRetriever(
    base_compressor=reranker,
    base_retriever=base_retriever,
)

results = reranking_retriever.invoke("Nghỉ phép bao nhiêu ngày?")
# Trả về 5 docs chính xác nhất (đã re-ranked)
```

> **💡 Exercise 1:** Compare top-5 results: (a) direct search vector top-5, (b) vector search top-20 → rerank top-5. Which is more accurate?

---

## 3. Cohere Rerank — API-based

### 3.1 Using Cohere Rerank API

```python
"""Cohere Rerank — production-grade reranking API"""
from langchain_cohere import CohereRerank
from langchain.retrievers import ContextualCompressionRetriever

# Cohere reranker (cần API key)
reranker = CohereRerank(
    model="rerank-v3.5",
    top_n=5,
)

reranking_retriever = ContextualCompressionRetriever(
    base_compressor=reranker,
    base_retriever=base_retriever,  # top-20
)

results = reranking_retriever.invoke("Nghỉ phép bao nhiêu ngày?")
```

### 3.2 Compare Rerankers

| Reranker | Quality | Speed ​​| Cost | When to use |
|--------|:---:|:---:|:---:|-------------|
| **Cross-Encoder (local)** | ⭐⭐⭐ | Slow | Free | Prototype, offline |
| **Cohere Rerank** | ⭐⭐⭐⭐ | Fast | API cost | Production |
| **Jina Reranker** | ⭐⭐⭐⭐ | Fast | API cost | Alternative |
| **FlashRank (local)** | ⭐⭐⭐ | Very fast | Free | Edge, low-latency |

---

## 4. Contextual Compression

### 4.1 Problem: Chunk is too long

```
Retrieved chunk (500 từ):
"Công ty XYZ được thành lập năm 2010 tại Hà Nội.
 Qua 15 năm phát triển, công ty đã mở rộng ra nhiều lĩnh vực.
 [... 400 từ không liên quan ...]
 Nhân viên full-time được 15 ngày phép/năm.    ← CÂU TRẢ LỜI
 [... 50 từ nữa ...]"

→ 490/500 từ là NOISE! LLM phải đọc hết → lãng phí tokens + giảm accuracy
```

Contextual Compression **extracts** only the relevant part:

```
Compressed: "Nhân viên full-time được 15 ngày phép/năm."
→ 1 câu duy nhất, đúng trọng tâm!
```

### 4.2 LLM-based Compression

```python
"""Dùng LLM để nén context — chỉ giữ phần liên quan"""
from langchain.retrievers.document_compressors import LLMChainExtractor
from langchain.retrievers import ContextualCompressionRetriever
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

# LLM extractor: đọc chunk + query → trích xuất phần liên quan
compressor = LLMChainExtractor.from_llm(llm)

compression_retriever = ContextualCompressionRetriever(
    base_compressor=compressor,
    base_retriever=base_retriever,
)

results = compression_retriever.invoke("Nghỉ phép bao nhiêu ngày?")
# Mỗi document.page_content đã được NÉN — chỉ giữ phần liên quan
```

### 4.3 LLM Filter — Remove irrelevant chunks

```python
"""LLMChainFilter: giữ/bỏ toàn bộ chunk (không trích xuất)"""
from langchain.retrievers.document_compressors import LLMChainFilter

# Filter: giữ chunk liên quan, bỏ chunk không liên quan
filter_compressor = LLMChainFilter.from_llm(llm)

filter_retriever = ContextualCompressionRetriever(
    base_compressor=filter_compressor,
    base_retriever=base_retriever,
)

# Nếu retrieve 20 chunks → filter có thể giữ 3-5 chunks liên quan
results = filter_retriever.invoke("Nghỉ phép bao nhiêu ngày?")
```

### 4.4 EmbeddingsFilter — Fast, no LLM needed

```python
"""EmbeddingsFilter: lọc bằng similarity threshold, không tốn LLM call"""
from langchain.retrievers.document_compressors import EmbeddingsFilter
from langchain_openai import OpenAIEmbeddings

embeddings_filter = EmbeddingsFilter(
    embeddings=OpenAIEmbeddings(),
    similarity_threshold=0.75,  # Chỉ giữ chunks có similarity >= 0.75
)

filter_retriever = ContextualCompressionRetriever(
    base_compressor=embeddings_filter,
    base_retriever=base_retriever,
)
```

> **💡 Exercise 2:** Compare 3 compressors: LLMChainExtractor, LLMChainFilter, EmbeddingsFilter. Measure: (a) output quality, (b) latency, (c) token cost.

---

## 5. Complete pipeline: Retrieve → Rerank → Compress

```python
"""Full pipeline: retrieve 20 → rerank top 5 → compress"""
from langchain.retrievers.document_compressors import DocumentCompressorPipeline

# Pipeline: rerank TRƯỚC, compress SAU
pipeline = DocumentCompressorPipeline(
    transformers=[
        reranker,           # CrossEncoder: 20 → top-5
        compressor,         # LLMChainExtractor: nén mỗi chunk
    ]
)

full_retriever = ContextualCompressionRetriever(
    base_compressor=pipeline,
    base_retriever=base_retriever,  # top-20
)

results = full_retriever.invoke("Nghỉ phép bao nhiêu ngày?")
# 5 chunks đã rerank + compress → feed vào LLM
```

```
Pipeline flow:

Query: "Nghỉ phép bao nhiêu ngày?"
    │
    ├── Bi-Encoder retrieve top-20  (fast, ~50ms)
    │
    ├── Cross-Encoder rerank → top-5  (slow, ~200ms)
    │
    ├── LLM compress 5 chunks  (slow, ~500ms)
    │
    └── LLM generate answer  (~1000ms)
    
Total: ~1.8s — acceptable cho chatbot
```

---

## Summary

| Concepts | Remember |
|--------|--------|
| **Bi-Encoder** | Fast, discrete encoding, used for retrieval |
| **Cross-Encoder** | Slow, accurate, encodes query+doc | pair
| **Re-Ranking** | Retrieve a lot → rerank → choose a little |
| **Cohere Rerank** | API production-grade, fast, accurate |
| **LLMChainExtractor** | Extract relevant part from chunk |
| **LLMChainFilter** | Keep/remove entire chunk |
| **EmbeddingsFilter** | Filter by similarity, no need for LLM |
| **Pipeline** | Rerank → Compress → LLM |

## General exercises

1. ✅ Complete 2 small exercises (1, 2)
2. **Full Pipeline:** Implement: retrieve 50 → rerank 10 → compress → generate. Test on 15 questions. Measure precision@5 and latency.
3. **A/B Test:** Compare answer quality (using GPT-4 to evaluate): (a) RAG without reranking, (b) RAG with reranking, (c) RAG reranking + compress.
4. **Custom Reranker:** Train 1 cross-encoder on domain-specific data (eg Vietnamese Q&A). Compare with pre-trained model.

> **Next article:** Graph RAG — Knowledge Graph + Vector Search — combines the power of graph database and vector search to answer complex, multi-step questions.
