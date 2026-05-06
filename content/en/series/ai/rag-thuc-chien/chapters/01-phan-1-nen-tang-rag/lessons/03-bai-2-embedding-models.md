---
id: 019c9619-ff02-7002-a002-ff0200000002
title: 'Lesson 2: Embedding Models — Turn Text into Vector'
slug: bai-2-embedding-models
description: >-
  What is Embedding, why is it important? Compare models: OpenAI
  text-embedding-3, Cohere embed-v3, Sentence-Transformers, BGE. Benchmark
  performance. Multilingual embeddings for Vietnamese.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: RAG Platform'
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: 'Real Battle RAG: From Basic to Advanced'
  slug: rag-thuc-chien
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9407" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9407)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1058" cy="64" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1016" cy="162" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="974" cy="260" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="932" cy="98" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="890" cy="196" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="184" x2="1100" y2="264" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="214" x2="1050" y2="284" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1067.7749907475932,214.5 1067.7749907475932,253.5 1034,273 1000.2250092524068,253.5 1000.2250092524068,214.5 1034,195" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI & ML — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: Embedding Models — Turn Text into</tspan>
      <tspan x="60" dy="42">Vector</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Real Battle RAG: From Basic to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: RAG Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

In the previous article, we saw that RAG needs to **transform text into vector** to search. But specifically, what does "turn text into vector" mean? Why is this the **most important** step in the RAG pipeline?

> **Fact:** Embedding model determines **70% of the quality** of RAG. Choose wrong model = retriever finds wrong document = LLM gives wrong answer.

---

## 1. What is Embedding?

### 1.1 Main idea

**Real life example:** Imagine you organize a library. Books should be **sorted by topic**: cookbooks near nutrition books, programming books near math books.

Embedding does the same thing: turning text into **coordinates** in high-dimensional space, so that text with meanings **close to each other** will have coordinates **close to each other**.

```
"Con mèo đang ngủ trên ghế"    → [0.82, -0.15, 0.43, ...]
"Chú mèo nằm nghỉ trên sofa"  → [0.80, -0.13, 0.45, ...]  ← GẦN! ✅
"Giá Bitcoin hôm nay"          → [-0.55, 0.72, -0.31, ...]  ← XA!  ❌
```

### 1.2 Why do we need Embedding?

Computers **don't understand text** — they only understand **numbers**. Embedding is a bridge:

```
Text (con người hiểu)                    Vector (máy tính hiểu)
"Chính sách nghỉ phép"    ──────────>     [0.23, -0.15, 0.87, ...]
"Quy định ngày phép"      ──────────>     [0.25, -0.12, 0.85, ...]
                                           ↑ Cosine similarity = 0.97!
```

**Cosine Similarity** = measures the "angle" between 2 vectors:
- 1.0 = identical
- 0.0 = not relevant
- -1.0 = opposite meaning

### 1.3 Comparison: Keyword Search vs Semantic Search

| | Keyword Search (BM25) | Semantic Search (Embedding) |
|--|---------------------|--------------------------|
| **How ​​it works** | Find the keyword **exact match** | Find similar **meanings** |
| **"Leave policy" vs "Leave policy"** | ❌ Not found (different language) | ✅ Found (same meaning) |
| **"Autonomous vehicle" vs "Autonomous vehicle"** | ❌ | ✅ |
| **Typos / Synonyms** | ❌ "Doubtful" does not match | ✅ Still understand roughly |
| **When is it good** | Exact terms (code, proper name) | Natural Language |

---

## 2. Popular Embedding Models

### 2.1 Comparison table

| Model | Provider | Dimensions | Strengths | Pricing |
|-------|----------|-----------|----------|---------|
| **text-embedding-3-small** | OpenAI | 1536 | Light, cheap, good enough for most | $0.02/1M tokens |
| **text-embedding-3-large** | OpenAI | 3072 | More precisely, good multilingual | $0.13/1M tokens |
| **embed-v3** | Cohere | 1024 | Excellent multilingual, search_type | $0.10/1M tokens |
| **all-MiniLM-L6-v2** | Sentence-Transformers | 384 | Free, lightweight, runs locally | Free |
| **bge-large-en-v1.5** | BAAI | 1024 | Free, SOTA quality | Free |
| **multilingual-e5-large** | Microsoft | 1024 | Free, good multilingual | Free |

### 2.2 Hands-on: Compare 3 models

```python
"""So sánh 3 embedding models phổ biến nhất"""
import numpy as np
from openai import OpenAI

client = OpenAI()

# === 1. OpenAI Embedding ===
def openai_embed(texts):
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=texts
    )
    return [r.embedding for r in response.data]

# Test: câu tiếng Việt
texts = [
    "Chính sách nghỉ phép của công ty",
    "Quy định về ngày phép hàng năm",       # Giống ý câu 1
    "Bảng giá sản phẩm quý 4",              # Khác hoàn toàn
    "Annual leave policy for employees",      # Giống ý câu 1, khác ngôn ngữ
]

embeddings = openai_embed(texts)

# Tính cosine similarity
def cosine_sim(a, b):
    a, b = np.array(a), np.array(b)
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

print("=== Similarity Matrix ===")
for i in range(len(texts)):
    for j in range(i+1, len(texts)):
        sim = cosine_sim(embeddings[i], embeddings[j])
        label = "✅" if sim > 0.7 else "❌"
        print(f"{label} [{i}] vs [{j}]: {sim:.4f}")
        print(f"   '{texts[i][:30]}...' vs '{texts[j][:30]}...'")
```

**Expected output:**
```
✅ [0] vs [1]: 0.9234   ← "Nghỉ phép" ≈ "Ngày phép" → GẦN!
❌ [0] vs [2]: 0.3421   ← "Nghỉ phép" ≠ "Bảng giá" → XA!
✅ [0] vs [3]: 0.8567   ← Tiếng Việt ≈ Tiếng Anh cùng ý → GẦN!
```

### 2.3 Open-source: Sentence-Transformers

```python
"""Chạy embedding LOCAL — miễn phí, không cần API key"""
from sentence_transformers import SentenceTransformer
import numpy as np

# Download model (lần đầu, ~80MB)
model = SentenceTransformer("all-MiniLM-L6-v2")

texts = [
    "Machine learning is a subset of AI",
    "Deep learning uses neural networks",
    "I had pizza for lunch yesterday",
]

embeddings = model.encode(texts)
print(f"Shape: {embeddings.shape}")  # (3, 384)

# Similarity
from sklearn.metrics.pairwise import cosine_similarity
sim_matrix = cosine_similarity(embeddings)
print("\nSimilarity Matrix:")
print(np.round(sim_matrix, 3))
```

> **💡 Exercise 2:** Run the OpenAI or Sentence-Transformers code above. Add 3 Vietnamese sentences: 2 sentences on the same topic, 1 sentence different. Is Similarity as expected?

---

## 3. Embedding for Vietnamese

### 3.1 Problem

Most embedding models are trained mainly in **English**. Vietnamese may have poorer embedding:

```
Tiếng Anh: "leave policy" ≈ "vacation rules"  → similarity: 0.92 ✅
Tiếng Việt: "nghỉ phép"   ≈ "ngày phép"       → similarity: 0.78 ✅ (thấp hơn)
Cross-lingual: "nghỉ phép" ≈ "leave policy"    → similarity: 0.65 ⚠️ (hơi thấp)
```

### 3.2 Models are good for Vietnamese

| Model | Vietnamese | Quality | Notes |
|-------|-----------|-----------|---------|
| **text-embedding-3-large** (OpenAI) | ✅ Good | ⭐⭐⭐⭐⭐ | Paid, best |
| **embed-multilingual-v3** (Cohere) | ✅ Very good | ⭐⭐⭐⭐⭐ | Paid, designed for multilingual |
| **multilingual-e5-large** (Microsoft) | ✅ Good | ⭐⭐⭐⭐ | Free, runs locally |
| **paraphrase-multilingual-MiniLM** | ✅ OK | ⭐⭐⭐ | Free, lightweight |
| **all-MiniLM-L6-v2** | ⚠️ English-focused | ⭐⭐ (TV) | Free but weak TV |

### 3.3 Quick Benchmark for Vietnamese

```python
"""Benchmark embedding models cho tiếng Việt"""
from sentence_transformers import SentenceTransformer
import numpy as np

# Test pairs: (câu 1, câu 2, expected_similarity)
test_pairs = [
    ("Học máy là gì?", "Machine learning là gì?", "HIGH"),
    ("Giá cổ phiếu VNM hôm nay", "Thị trường chứng khoán VN", "MEDIUM"),
    ("Cách nấu phở bò", "Thuật toán sắp xếp", "LOW"),
    ("Chính sách nghỉ phép", "Quy định ngày nghỉ hàng năm", "HIGH"),
    ("Tuyển dụng developer Python", "Vị trí lập trình viên Python", "HIGH"),
]

models_to_test = [
    "all-MiniLM-L6-v2",
    "paraphrase-multilingual-MiniLM-L12-v2",
    "intfloat/multilingual-e5-large",
]

for model_name in models_to_test:
    print(f"\n{'='*50}")
    print(f"Model: {model_name}")
    model = SentenceTransformer(model_name)

    for s1, s2, expected in test_pairs:
        emb = model.encode([s1, s2])
        sim = np.dot(emb[0], emb[1]) / (
            np.linalg.norm(emb[0]) * np.linalg.norm(emb[1])
        )
        status = "✅" if (
            (expected == "HIGH" and sim > 0.7) or
            (expected == "MEDIUM" and 0.4 < sim < 0.8) or
            (expected == "LOW" and sim < 0.4)
        ) else "⚠️"
        print(f"  {status} [{expected:6}] {sim:.3f} | {s1[:25]} ↔ {s2[:25]}")
```

> **💡 Exercise 3:** Run the above benchmark. Which model gives the best Vietnamese results? Record your conclusions.

---

## 4. Select Embedding Model — Decision Framework

### 4.1 Decision Flowchart

```
Bạn cần embedding cho:

1. Ngôn ngữ nào?
   ├── English only → all-MiniLM-L6-v2 (free) hoặc text-embedding-3-small (paid)
   ├── Tiếng Việt → multilingual-e5-large (free) hoặc text-embedding-3-large (paid)
   └── Nhiều ngôn ngữ → embed-multilingual-v3 (Cohere) hoặc text-embedding-3-large

2. Budget?
   ├── Miễn phí → Sentence-Transformers / BGE (chạy local)
   └── Có budget → OpenAI / Cohere (dễ dùng, chất lượng cao)

3. Volume?
   ├── < 100K documents → OpenAI / Cohere đủ rẻ
   └── > 1M documents → Self-hosted để tiết kiệm cost
```

### 4.2 Practical Tips

| Tip | Explanation |
|-----|-----------|
| **Get Started with OpenAI** | Easiest, good quality, cheap for prototype |
| **Test with real data** | Don't just use benchmarks, test on your domain data |
| **Dimension important** | 384 vs 1024 vs 3072: higher = more accurate but consumes storage |
| **Cache embeddings** | Embed once, saved to vector DB, no need to re-embed every query |
| **Batch processing** | Sending multiple texts at once instead of 1-by-1 → faster + cheaper |

---

## 5. Calculate Embedding costs

### 5.1 Estimate

```python
"""Tính chi phí embedding cho 1 knowledge base"""

# Giả sử:
num_documents = 500            # 500 tài liệu
avg_words_per_doc = 2000       # Mỗi tài liệu 2000 từ
total_words = num_documents * avg_words_per_doc  # 1,000,000 từ
total_tokens = total_words * 1.3  # ~1.3 tokens/word (ước tính)

# OpenAI text-embedding-3-small: $0.02 / 1M tokens
cost_small = (total_tokens / 1_000_000) * 0.02
# OpenAI text-embedding-3-large: $0.13 / 1M tokens
cost_large = (total_tokens / 1_000_000) * 0.13

print(f"Total tokens: {total_tokens:,.0f}")
print(f"Cost (small):  ${cost_small:.4f}")   # ~$0.026
print(f"Cost (large):  ${cost_large:.4f}")   # ~$0.169
print(f"Cost (local):  $0.00 ✅")
print(f"\n→ Embedding 500 tài liệu chỉ tốn ~$0.03 - $0.17!")
```

> **Conclusion:** Embedding is very cheap! The most expensive part of RAG is **LLM generation**, not embedding.

> **💡 Exercise 5:** Estimate the cost of embedding for your company/school's knowledge base. How many documents? How many tokens? Monthly cost (if re-embed once/month)?

---

## Summary

| Concepts | Remember |
|--------|--------|
| **Embedding** | Variable text → vector, same text = close vector |
| **Cosine Similarity** | Measure the "similarity" between 2 vectors (0→1) |
| **Semantic vs Keyword** | Embedding searches by meaning, keyword searches for exact words |
| **Vietnamese** | Use multilingual models (e5-large, text-embedding-3-large) |
| **Cost** | Very cheap ($0.02-0.13 / 1M tokens) or free (local) |

## General exercises

1. ✅ Complete small exercises (2, 3, 5)
2. **Build Embedding Explorer:** Write a script to receive 10 input sentences, create embedding, visualize using t-SNE 2D plot (using sklearn). Are groups of similar sentences close together?
3. **Private benchmark:** Test 3 models (OpenAI, Cohere/local) on 20 questions in your domain. Which model is best for a specific use case?
4. **Cost Calculator:** Write a function to calculate embedding costs for N documents × M avg_words. Test with real dataset.

> **Next article:** Vector Databases — store and search vectors efficiently with ChromaDB, Qdrant, Pinecone.
