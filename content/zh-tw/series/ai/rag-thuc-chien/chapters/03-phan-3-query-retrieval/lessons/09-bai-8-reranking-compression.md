---
id: 019c9619-ff08-7008-a008-ff0800000008
title: 第 8 課：重新排名與情境壓縮
slug: bai-8-reranking-compression
description: 使用 Cross-Encoder、Cohere Rerank 對檢索結果進行重新排序。上下文壓縮刪除冗餘訊息，僅保留與問題相關的部分。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 第 3 部分：進階查詢與檢索
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: 真實戰鬥 RAG：從基礎到高級
  slug: rag-thuc-chien
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：重新排名與情境壓縮</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">真實戰鬥 RAG：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：進階查詢與檢索</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

您已檢索到前 K 個文件。但**順序錯誤**或**區塊包含太多冗餘資訊** → LLM 噪音很大，反應較差。

> **例如：** 檢索 5 個區塊，第 4 個區塊包含正確答案 - 但 LLM 重點關注區塊 1（排名較高但相關性較低）。重新排名將區塊 4 推至頂部 → 提高品質。

本文涵蓋 2 種技術：
1. **重新排名** — 根據實際相關性對結果重新排序
2. **上下文壓縮** — 壓縮/刪除不相關的部分

```
Retrieval Pipeline nâng cao:

Query → Retrieve (top-20) → Re-Rank (chọn top-5) → Compress → LLM
         ↑ recall cao          ↑ precision cao        ↑ ít noise
         (lấy nhiều)           (chọn đúng)            (nén gọn)
```

---

## 1. 為什麼需要重新排名？

### 1.1 雙編碼器的限制（嵌入搜尋）

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

### 1.2 策略：擷取大量→重新排序→選擇少數

```
                    Bi-Encoder        Cross-Encoder
                    (fast, rough)     (slow, accurate)
                         │                  │
Top-100 docs ──────→ Top-20 ──────→ Top-5 ──────→ LLM
                    (recall cao)    (precision cao)
```

---

## 2. 使用交叉編碼器重新排名

### 2.1 使用句子轉換器

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

### 2.2 接入浪鏈

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

> **💡練習 1：** 比較 top-5 結果：(a) 直接搜尋向量 top-5，(b) 向量搜尋 top-20 → 重新排名 top-5。哪個比較準確？

---

## 3. Cohere Rerank — 基於 API

### 3.1 使用 Cohere Rerank API

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

### 3.2 比較重排序器

|重新排序 |品質 |速度|成本|何時使用 |
|--------|:---:|:---:|:---:|-------------|
| **交叉編碼器（本地）** | ⭐⭐⭐ |慢|免費|原型，離線 |
| **凝聚重排名** | ⭐⭐⭐⭐ |快| API成本|生產|
| **吉娜重新排序** | ⭐⭐⭐⭐ |快| API成本|另類|
| **FlashRank（本地）** | ⭐⭐⭐ |非常快|免費|邊緣、低延遲 |

---

## 4. 上下文壓縮

### 4.1 問題：塊太長

```
Retrieved chunk (500 từ):
"Công ty XYZ được thành lập năm 2010 tại Hà Nội.
 Qua 15 năm phát triển, công ty đã mở rộng ra nhiều lĩnh vực.
 [... 400 từ không liên quan ...]
 Nhân viên full-time được 15 ngày phép/năm.    ← CÂU TRẢ LỜI
 [... 50 từ nữa ...]"

→ 490/500 từ là NOISE! LLM phải đọc hết → lãng phí tokens + giảm accuracy
```

上下文壓縮 **僅提取**相關部分：

```
Compressed: "Nhân viên full-time được 15 ngày phép/năm."
→ 1 câu duy nhất, đúng trọng tâm!
```

### 4.2 基於 LLM 的壓縮

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

### 4.3 LLM 篩選器 — 刪除不相關的區塊

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

### 4.4 EmbeddingsFilter — 快速，無需法學碩士

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

> **💡練習 2：** 比較 3 個壓縮器：LLMChainExtractor、LLMChainFilter、EmbeddingsFilter。衡量標準：(a) 輸出質量，(b) 延遲，(c) 代幣成本。

---

## 5. 完整管道：擷取→重新排序→壓縮

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

## 總結

|概念 |記住|
|--------|--------|
| **雙編碼器** |快速、離散編碼，用於檢索 |
| **交叉編碼器** |慢，準確，編碼查詢+文件 |一對
| **重新排名** |擷取大量 → 重新排序 → 選擇一些 |
| **凝聚重新排名** | API生產級，快速，準確|
| **LLMChainExtractor** |從區塊中提取相關部分 |
| **LLMChain過濾器** |保留/刪除整個區塊 |
| **嵌入過濾器** |以相似度過濾，無需LLM |
| **管道** |重新排序 → 壓縮 → LLM |

## 一般練習

1. ✅ 完成 2 個小練習 (1, 2)
2. **完整管道：** 實作：擷取 50 → 重新排序 10 → 壓縮 → 產生。測試 15 個問題。測量精度@5 和延遲。
3. **A/B 測試：** 比較答案品質（使用 GPT-4 評估）：(a) 不進行重新排名的 RAG，(b) 進行重新排名的 RAG，(c) RAG 重新排名 + 壓縮。
4. **自訂重新排序器：** 在特定領域資料（例如越南語問答）上訓練 1 個交叉編碼器。與預訓練模型進行比較。

> **下一篇文章：** 圖 RAG — 知識圖 + 向量搜尋 — 結合了圖資料庫和向量搜尋的力量來回答複雜的多步驟問題。
