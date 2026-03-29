---
id: 019c9619-ff02-7002-a002-ff0200000002
title: 'Bài 2: Embedding Models — Biến Text thành Vector'
slug: bai-2-embedding-models
description: >-
  Embedding là gì, tại sao quan trọng. So sánh models: OpenAI text-embedding-3,
  Cohere embed-v3, Sentence-Transformers, BGE. Benchmark hiệu năng.
  Multilingual embeddings cho tiếng Việt.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng RAG"
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: "RAG Thực Chiến: Từ Basic đến Advanced"
  slug: rag-thuc-chien
---

## Giới thiệu

Ở bài trước, chúng ta đã thấy RAG cần **biến text thành vector** để tìm kiếm. Nhưng cụ thể, "biến text thành vector" nghĩa là gì? Tại sao đây là bước **quan trọng nhất** trong RAG pipeline?

> **Sự thật:** Embedding model quyết định **70% chất lượng** của RAG. Chọn sai model = retriever tìm sai tài liệu = LLM trả lời sai.

---

## 1. Embedding là gì?

### 1.1 Ý tưởng chính

**Ví dụ đời thường:** Hãy tưởng tượng bạn tổ chức thư viện. Sách cần được **xếp theo chủ đề**: sách nấu ăn gần sách dinh dưỡng, sách lập trình gần sách toán.

Embedding làm tương tự: biến text thành **tọa độ** trong không gian nhiều chiều, sao cho text có ý nghĩa **gần nhau** sẽ có tọa độ **gần nhau**.

```
"Con mèo đang ngủ trên ghế"    → [0.82, -0.15, 0.43, ...]
"Chú mèo nằm nghỉ trên sofa"  → [0.80, -0.13, 0.45, ...]  ← GẦN! ✅
"Giá Bitcoin hôm nay"          → [-0.55, 0.72, -0.31, ...]  ← XA!  ❌
```

### 1.2 Tại sao cần Embedding?

Máy tính **không hiểu text** — nó chỉ hiểu **số**. Embedding là cầu nối:

```
Text (con người hiểu)                    Vector (máy tính hiểu)
"Chính sách nghỉ phép"    ──────────>     [0.23, -0.15, 0.87, ...]
"Quy định ngày phép"      ──────────>     [0.25, -0.12, 0.85, ...]
                                           ↑ Cosine similarity = 0.97!
```

**Cosine Similarity** = đo "góc" giữa 2 vectors:
- 1.0 = giống hệt
- 0.0 = không liên quan
- -1.0 = ngược nghĩa

### 1.3 So sánh: Keyword Search vs Semantic Search

| | Keyword Search (BM25) | Semantic Search (Embedding) |
|--|---------------------|---------------------------|
| **Cách hoạt động** | Tìm từ khóa **exact match** | Tìm **ý nghĩa** tương đồng |
| **"Nghỉ phép" vs "Leave policy"** | ❌ Không tìm thấy (khác ngôn ngữ) | ✅ Tìm thấy (cùng ý nghĩa) |
| **"Xe tự lái" vs "Autonomous vehicle"** | ❌ | ✅ |
| **Typos / Synonyms** | ❌ "Nghi phep" không match | ✅ Vẫn hiểu gần đúng |
| **Khi nào tốt** | Exact terms (code, tên riêng) | Ngôn ngữ tự nhiên |

---

## 2. Embedding Models phổ biến

### 2.1 Bảng so sánh

| Model | Provider | Dimensions | Strengths | Pricing |
|-------|----------|-----------|----------|---------|
| **text-embedding-3-small** | OpenAI | 1536 | Nhẹ, rẻ, tốt đủ cho hầu hết | $0.02/1M tokens |
| **text-embedding-3-large** | OpenAI | 3072 | Chính xác hơn, multilingual tốt | $0.13/1M tokens |
| **embed-v3** | Cohere | 1024 | Multilingual xuất sắc, search_type | $0.10/1M tokens |
| **all-MiniLM-L6-v2** | Sentence-Transformers | 384 | Free, nhẹ, chạy local | Miễn phí |
| **bge-large-en-v1.5** | BAAI | 1024 | Free, SOTA quality | Miễn phí |
| **multilingual-e5-large** | Microsoft | 1024 | Free, multilingual tốt | Miễn phí |

### 2.2 Hands-on: So sánh 3 models

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

**Output kỳ vọng:**
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

> **💡 Bài tập 2:** Chạy code OpenAI hoặc Sentence-Transformers ở trên. Thêm 3 câu tiếng Việt: 2 câu cùng chủ đề, 1 câu khác. Similarity có đúng kỳ vọng không?

---

## 3. Embedding cho Tiếng Việt

### 3.1 Vấn đề

Hầu hết embedding models được train chủ yếu trên **tiếng Anh**. Tiếng Việt có thể bị embedding kém hơn:

```
Tiếng Anh: "leave policy" ≈ "vacation rules"  → similarity: 0.92 ✅
Tiếng Việt: "nghỉ phép"   ≈ "ngày phép"       → similarity: 0.78 ✅ (thấp hơn)
Cross-lingual: "nghỉ phép" ≈ "leave policy"    → similarity: 0.65 ⚠️ (hơi thấp)
```

### 3.2 Models tốt cho tiếng Việt

| Model | Tiếng Việt | Chất lượng | Ghi chú |
|-------|-----------|-----------|---------|
| **text-embedding-3-large** (OpenAI) | ✅ Tốt | ⭐⭐⭐⭐⭐ | Trả phí, tốt nhất |
| **embed-multilingual-v3** (Cohere) | ✅ Rất tốt | ⭐⭐⭐⭐⭐ | Trả phí, designed cho multilingual |
| **multilingual-e5-large** (Microsoft) | ✅ Tốt | ⭐⭐⭐⭐ | Free, chạy local |
| **paraphrase-multilingual-MiniLM** | ✅ OK | ⭐⭐⭐ | Free, nhẹ |
| **all-MiniLM-L6-v2** | ⚠️ English-focused | ⭐⭐ (TV) | Free nhưng TV yếu |

### 3.3 Benchmark nhanh cho tiếng Việt

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

> **💡 Bài tập 3:** Chạy benchmark trên. Model nào cho kết quả tiếng Việt tốt nhất? Ghi lại kết luận.

---

## 4. Chọn Embedding Model — Decision Framework

### 4.1 Flowchart quyết định

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

### 4.2 Tips thực tế

| Tip | Giải thích |
|-----|-----------|
| **Bắt đầu bằng OpenAI** | Dễ nhất, chất lượng tốt, rẻ cho prototype |
| **Test với data thật** | Đừng chỉ dùng benchmark, test trên data domain của bạn |
| **Dimension quan trọng** | 384 vs 1024 vs 3072: cao hơn = chính xác hơn nhưng tốn storage |
| **Cache embeddings** | Embed 1 lần, lưu vào vector DB, không cần re-embed mỗi lần query |
| **Batch processing** | Gửi nhiều texts 1 lúc thay vì 1-by-1 → nhanh + rẻ hơn |

---

## 5. Tính chi phí Embedding

### 5.1 Ước tính

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

> **Kết luận:** Embedding rất rẻ! Phần tốn chi phí nhất trong RAG là **LLM generation**, không phải embedding.

> **💡 Bài tập 5:** Ước tính chi phí embedding cho knowledge base công ty/trường của bạn. Bao nhiêu tài liệu? Bao nhiêu tokens? Chi phí hàng tháng (nếu re-embed 1 lần/tháng)?

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Embedding** | Biến text → vector, text giống nhau = vector gần nhau |
| **Cosine Similarity** | Đo "độ giống" giữa 2 vectors (0→1) |
| **Semantic vs Keyword** | Embedding tìm theo ý nghĩa, keyword tìm từ chính xác |
| **Tiếng Việt** | Dùng multilingual models (e5-large, text-embedding-3-large) |
| **Chi phí** | Rất rẻ ($0.02-0.13 / 1M tokens) hoặc miễn phí (local) |

## Bài tập tổng hợp

1. ✅ Hoàn thành bài tập nhỏ (2, 3, 5)
2. **Build Embedding Explorer:** Viết script nhận 10 câu input, tạo embedding, visualize bằng t-SNE 2D plot (dùng sklearn). Nhóm câu tương tự gần nhau không?
3. **Benchmark riêng:** Test 3 models (OpenAI, Cohere/local) trên 20 câu trong domain của bạn. Model nào tốt nhất cho use case cụ thể?
4. **Cost Calculator:** Viết function tính chi phí embedding cho N documents × M avg_words. Test với dataset thật.

> **Bài tiếp theo:** Vector Databases — lưu trữ và tìm kiếm vectors hiệu quả với ChromaDB, Qdrant, Pinecone.
