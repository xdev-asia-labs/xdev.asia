---
id: 019c9619-ff02-7002-a002-ff0200000002
title: 第 2 課：嵌入模型 — 將文字轉換為向量
slug: bai-2-embedding-models
description: >-
  什麼是嵌入，為什麼它很重要？比較模型：OpenAI text-embedding-3、Cohere
  embed-v3、Sentence-Transformers、BGE。基準性能。越南語的多語言嵌入。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：RAG 平台
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: 真實戰鬥 RAG：從基礎到高級
  slug: rag-thuc-chien
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 课：嵌入模型 — 将文本转换为</tspan>
      <tspan x="60" dy="42">向量</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">真實戰鬥 RAG：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：RAG 平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在上一篇文章中，我们看到RAG需要**将文本转换为向量**来进行搜索。但具体来说，“将文本变成矢量”是什么意思？为什么这是 RAG 管道中**最重要的**步骤？

> **事實：** 嵌入模型決定了 RAG 的 **70% 的品質**。选择错误的模型 = 检索器发现错误的文档 = LLM 给出错误的答案。

---

## 1. 什麼是嵌入？

### 1.1 主要思想

**现实生活中的例子：**想象一下您组织了一个图书馆。书籍应该**按主题排序**：烹饪书靠近营养书，编程书靠近数学书。

嵌入做同樣的事情：將文字轉換成高維空間中的**座標**，使得意義**彼此接近**的文字將具有**彼此接近**的座標。

```
"Con mèo đang ngủ trên ghế"    → [0.82, -0.15, 0.43, ...]
"Chú mèo nằm nghỉ trên sofa"  → [0.80, -0.13, 0.45, ...]  ← GẦN! ✅
"Giá Bitcoin hôm nay"          → [-0.55, 0.72, -0.31, ...]  ← XA!  ❌
```

### 1.2 为什么我们需要嵌入？

電腦**不理解文字**－它們只理解**數字**。嵌入是一座橋樑：

```
Text (con người hiểu)                    Vector (máy tính hiểu)
"Chính sách nghỉ phép"    ──────────>     [0.23, -0.15, 0.87, ...]
"Quy định ngày phép"      ──────────>     [0.25, -0.12, 0.85, ...]
                                           ↑ Cosine similarity = 0.97!
```

**餘弦相似度** = 測量 2 個向量之間的「角度」：
- 1.0 = 相同
- 0.0 = 不相關
- -1.0 = 相反含義

### 1.3 比较：关键字搜索与语义搜索

| |關鍵字搜尋（BM25）|語意搜尋（嵌入）|
|--|---------------------|--------------------------|
| **它是如何工作的** |查找關鍵字**完全匹配** |查找類似的**含義** |
| **「休假政策」與「休假政策」** | ❌ 未找到（不同語言）| ✅ 發現（同義）|
| **“自动驾驶汽车”与“自动驾驶汽车”** | ❌ | ✅ |
| **拼写错误/同义词** | ❌“可疑”不匹配 | ✅ 大概还是了解一下 |
| **什麼時候好** |確切的術語（代碼、專有名稱）|自然語言|

---

## 2. 流行的嵌入模型

### 2.1 比較表

|型号|供应商|尺寸|优势 |定价|
|--------|----------|------------|---------|----------|
| **文字嵌入-3-小** |開放人工智慧 | 1536 | 1536輕便、便宜，對大多數人來說已經足夠了 | 0.02 美元/100 萬代幣 |
| **文字嵌入-3-大** |開放人工智慧 | 3072 | 3072更準確地說，良好的多語言 | 0.13 美元/100 萬代幣 |
| **嵌入-v3** |連貫| 1024 | 1024優秀的多語言，search_type | 0.10 美元/100 萬代幣 |
| **全 MiniLM-L6-v2** |句子變形金剛 | 384 | 384免費、輕量級、本地運行 |免費|
| **bge-large-en-v1.5** |巴愛 | 1024 | 1024免費，品質一流 |免費|
| **多語言-e5-大** |微軟 | 1024 | 1024免費、良好的多語言 |免費|

### 2.2 实践：比较 3 个模型

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

**預期輸出：**
```
✅ [0] vs [1]: 0.9234   ← "Nghỉ phép" ≈ "Ngày phép" → GẦN!
❌ [0] vs [2]: 0.3421   ← "Nghỉ phép" ≠ "Bảng giá" → XA!
✅ [0] vs [3]: 0.8567   ← Tiếng Việt ≈ Tiếng Anh cùng ý → GẦN!
```

### 2.3 开源：句子转换器

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

> **💡練習 2：** 執行上面的 OpenAI 或 Sentence-Transformers 程式碼。增加 3 個越南語句子：2 個句子相同主題，1 個句子不同。相似度是否符合預期？

---

## 3. 越南語嵌入

### 3.1 問題

大多數嵌入模型主要以**英語**進行訓練。越南語的嵌入可能較差：

```
Tiếng Anh: "leave policy" ≈ "vacation rules"  → similarity: 0.92 ✅
Tiếng Việt: "nghỉ phép"   ≈ "ngày phép"       → similarity: 0.78 ✅ (thấp hơn)
Cross-lingual: "nghỉ phép" ≈ "leave policy"    → similarity: 0.65 ⚠️ (hơi thấp)
```

### 3.2 模型適合越南人

|型號|越南語 |品質 |筆記|
|--------|---------|------------|---------|
| **文本嵌入-3-large** (OpenAI) | ✅ 好 | ⭐⭐⭐⭐⭐ |付費，最好 |
| **嵌入多語言-v3** (Cohere) | ✅ 非常好 | ⭐⭐⭐⭐⭐ |付費，專為多語言設計 |
| **多語言-e5-大** (微軟) | ✅ 好 | ⭐⭐⭐⭐ |免費，本地運行 |
| **釋義-多語-MiniLM** | ✅ 好的 | ⭐⭐⭐ |免費、輕量|
| **全 MiniLM-L6-v2** | ⚠️ 以英語為主 | ⭐⭐（電視）|免費但薄弱的電視|

### 3.3 越南語快速基準

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

> **💡練習 3：** 執行上述基準測試。哪個模型給出了最好的越南語結果？記錄你的結論。

---

## 4. 選擇嵌入模型－決策框架

### 4.1 決策流程圖

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

### 4.2 實用技巧

|提示|說明|
|-----|------------|
| **開始使用 OpenAI** |最簡單、品質好、價格便宜的原型 |
| **用真實資料測試** |不要只使用基準測試，也要測試您的網域資料 |
| **尺寸重要** | 384 vs 1024 vs 3072：更高 = 更準確，但消耗儲存空間 |
| **快取嵌入** |嵌入一次，儲存到向量資料庫，無需重新嵌入每個查詢 |
| **批次** |一次發送多條文字而不是逐一發送 → 更快+更便宜 |

---

## 5. 計算嵌入成本

### 5.1 估計

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

> **結論：** 嵌入非常便宜！ RAG 最昂貴的部分是**LLM 生成**，而不是嵌入。

> **💡練習 5：** 估算嵌入公司/學校知識庫的成本。有多少文件？有多少代幣？每月費用（如果每月重新嵌入一次）？

---

## 總結

|概念 |記住|
|--------|--------|
| **嵌入** |可變文字→向量，相同文字=閉合向量|
| **餘弦相似度** |測量 2 個向量之間的「相似度」(0→1) |
| **語義與關鍵字** |按含義嵌入搜索，關鍵字搜索精確單字 |
| **越南語** |使用多語言模型（e5-large、text-embedding-3-large） |
| **成本** |非常便宜（$0.02-0.13 / 1M 代幣）或免費（本地）|

## 一般練習

1. ✅ 完成小練習（2、3、5）
2. **建立嵌入瀏覽器：** 編寫一個腳本來接收 10 個輸入句子，建立嵌入，使用 t-SNE 2D 圖進行視覺化（使用 sklearn）。相似的句子組是否靠得很近？
3. **私人基準測試：** 針對您所在領域的 20 個問題測試 3 個模型（OpenAI、Cohere/local）。哪種模型最適合特定用例？
4. **成本計算器：** 寫一個函數來計算 N 個文檔 × M avg_words 的嵌入成本。使用真實資料集進行測試。

> **下一篇文章：** 向量資料庫 — 使用 ChromaDB、Qdrant、Pinecone 高效儲存和搜尋向量。
