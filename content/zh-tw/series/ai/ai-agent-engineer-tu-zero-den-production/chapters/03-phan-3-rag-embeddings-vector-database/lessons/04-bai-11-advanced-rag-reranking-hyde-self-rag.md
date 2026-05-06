---
id: 019e0a01-bb11-7001-c001-ee1100000001
title: 第 11 課：高級 RAG — 重新排名、HyDE 和 Self-RAG
slug: bai-11-advanced-rag-reranking-hyde-self-rag
description: >-
  進階檢索：混合搜尋（稀疏+密集）、重新排序（Cohere、交叉編碼器）。查詢轉換：HyDE、多重查詢、後退提示。自我破爛，破爛不堪。代理 RAG、圖
  RAG。生產優化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 第 3 部分：RAG、嵌入和向量資料庫
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> **您的 RAG 管道檢索 20 個區塊 - 但 LLM 只能正確讀取前 3 個區塊。 ** Naive RAG 就像 Google 搜索，返回 1000 個結果，但您只點擊第 1 頁。最重要的區塊位於提示的中間 - LLM 會忽略它們。錯誤的答案。用戶失去信任。高級 RAG 解決了一切：**混合搜尋**結合了關鍵字和語義，**重新排名**將重要的區塊推到頂部，**HyDE**在搜尋之前將查詢轉化為假設的答案，**Self-RAG**讓 LLM 自己批評檢索結果。這是 RAG 部分最重要的課程 - 掌握這些技術將使您的 RAG 管道從「演示」到「生產級」。

---

## 1. Naive RAG — 問題與限制

### 1.1。重申 Naive RAG 管道

在上一課中，我們建立了 Naive RAG：嵌入查詢→相似性搜尋→top-K 區塊→LLM 生成。該管道適用於演示，但生產時存在嚴重問題。

```text
┌──────────────────────────────────────────────────────────────────┐
│                    NAIVE RAG — Failure Modes                      │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Problem 1: LOW PRECISION (nhiều chunks không liên quan)          │
│  ┌─────────┐    similarity     ┌──────────┐                      │
│  │  Query   │───────search────→│ Top-K=10 │                      │
│  │ "cách    │                  │ chunk 1 ✓│  ← relevant          │
│  │  deploy  │                  │ chunk 2 ✗│  ← off-topic         │
│  │  k8s"    │                  │ chunk 3 ✗│  ← off-topic         │
│  └─────────┘                   │ chunk 4 ✓│  ← relevant          │
│                                │ chunk 5 ✗│  ← off-topic         │
│                                └──────────┘                      │
│  → Chỉ 2/5 chunks thực sự hữu ích, 3/5 là noise                │
│                                                                   │
│  Problem 2: SEMANTIC GAP (query ≠ document language)              │
│  Query: "how to fix OOM error"                                    │
│  Document: "memory allocation exceeds limit threshold"            │
│  → Cosine similarity thấp dù nội dung liên quan                  │
│                                                                   │
│  Problem 3: LOST IN THE MIDDLE                                    │
│  ┌────────────────────────────────────────┐                      │
│  │  Prompt: [ctx1][ctx2]...[ctx8][ctx9]   │                      │
│  │  LLM attention: ████░░░░░░░░░░░░████   │                      │
│  │  → Chunks ở giữa bị LLM "bỏ qua"     │                      │
│  └────────────────────────────────────────┘                      │
│                                                                   │
│  Problem 4: WRONG GRANULARITY                                     │
│  → Chunks quá lớn: chứa noise; Chunks quá nhỏ: mất context      │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

### 1.2。問題及解決方案總表

|問題 |描述 |先進的 RAG 解決方案 |
|--------|--------------------|---------------------|
|低精度 |許多不相關的檢索塊 | **重新排名**（交叉編碼器）|
|語意差距|查詢使用與文件不同的單字 | **HyDE**，**查詢擴充** |
|迷失在中間| LLM 忽略提示中間的區塊 | **重新排序**、**壓縮** |
|單次檢索 |一次搜尋是不夠的 | **自我RAG**，**CRAG**|
|關鍵字小姐|密集搜尋遺漏確切術語 | **混合搜尋**（BM25 + 密集）|
|複雜查詢 |複雜的多跳問題 | **多查詢**、**後退** |
|靜態管道|剛性管道| **代理RAG** |
|失蹤的關係|不捕獲實體關係 | **圖RAG**|

### 1.3。 RAG進化圖

```text
Evolution: Naive → Advanced → Agentic → Graph

  Naive RAG          Advanced RAG         Agentic RAG        Graph RAG
  ─────────          ────────────         ───────────        ─────────
  ┌─────────┐       ┌─────────────┐     ┌────────────┐    ┌──────────┐
  │ Query    │       │ Query Transform│   │ Agent Loop │    │ KG + Vec │
  │    ↓     │       │    ↓          │   │    ↓       │    │    ↓     │
  │ Retrieve │       │ Hybrid Search │   │ Plan/Route │    │ Traverse │
  │    ↓     │       │    ↓          │   │    ↓       │    │    +     │
  │ Generate │       │ Rerank        │   │ Retrieve   │    │ Retrieve │
  │          │       │    ↓          │   │    ↓       │    │    ↓     │
  │          │       │ Generate      │   │ Critique   │    │ Synthesize│
  │          │       │               │   │    ↓       │    │          │
  │          │       │               │   │ Regenerate │    │          │
  └─────────┘       └─────────────┘     └────────────┘    └──────────┘

  Accuracy:  60-70%     80-90%             90-95%            92-97%
  Latency:   ~1s        ~2-3s              ~5-10s            ~3-5s
  Complexity: Low       Medium             High              High
```

---

## 2. 混合搜尋－稀疏+密集檢索

### 2.1。為什麼我們需要混合搜尋？

**密集搜尋**（基於嵌入）擅長語義匹配，但會錯過精確的關鍵字。 **稀疏搜尋**（BM25、TF-IDF）擅長關鍵字匹配但不理解語義。兩者結合 → 兩全其美。

|特性|稀疏 (BM25) |密集（嵌入）|混合動力|
|--------|--------------|--------------------|--------|
|關鍵字精準配對 | ✅ 優 | ❌弱| ✅ |
|語意理解 | ❌ 無 | ✅ 強 | ✅ |
|錯字容忍度 | ❌ 否 | ✅ 是的 | ✅ |
| 縮寫/行話 | ✅ 好 | ❌可能會錯過| ✅ |
|需要訓練 | ❌ 否 | ✅ 是的 | ✅ |
|速度| ⚡ 非常快速| 🔄 中等 | 🔄 中等 |

### 2.2。倒數秩融合 (RRF)

RRF 是一種合併多個檢索器結果的演算法。想法：文件在許多檢索器中出現高排名 → 高分。

```text
RRF Formula:  score(d) = Σ  1 / (k + rank_i(d))
                         i

Ví dụ: k = 60 (constant)

BM25 Results:          Dense Results:         RRF Score:
─────────────          ──────────────         ──────────
rank 1: doc_A          rank 1: doc_C          doc_A: 1/(60+1) + 1/(60+3) = 0.0164+0.0159 = 0.0323
rank 2: doc_B          rank 2: doc_A          doc_C: 1/(60+4) + 1/(60+1) = 0.0156+0.0164 = 0.0320
rank 3: doc_C          rank 3: doc_D          doc_B: 1/(60+2) + 1/(60+5) = 0.0161+0.0154 = 0.0315
rank 4: doc_D          rank 4: doc_B          doc_D: 1/(60+3) + 1/(60+3) = 0.0159+0.0159 = 0.0318

Final Ranking: doc_A > doc_D > doc_C > doc_B
→ doc_A thắng vì rank cao ở CẢ HAI retrievers
```

### 2.3。浪鏈實施

```python
from langchain.retrievers import BM25Retriever, EnsembleRetriever
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

# 1. Dense retriever (embedding-based)
vectorstore = Chroma.from_documents(documents, OpenAIEmbeddings())
dense_retriever = vectorstore.as_retriever(search_kwargs={"k": 10})

# 2. Sparse retriever (BM25)
bm25_retriever = BM25Retriever.from_documents(documents)
bm25_retriever.k = 10

# 3. Hybrid = Ensemble + RRF
hybrid_retriever = EnsembleRetriever(
    retrievers=[bm25_retriever, dense_retriever],
    weights=[0.4, 0.6],  # dense search trọng số cao hơn
)

# Query
results = hybrid_retriever.invoke("how to handle OOM in Kubernetes pods")
# → BM25 bắt "OOM", "Kubernetes", "pods" (exact match)
# → Dense bắt semantic: "memory limit exceeded", "resource allocation"
# → Kết hợp → kết quả chính xác hơn
```

---

## 3. 重新排序——交叉编码器两阶段管道

### 3.1。雙編碼器與交叉編碼器

检索通常使用**双编码器**（分别嵌入查询和文档→余弦相似度）。但双编码器有一个局限性：它看不到查询和文档之间的交互。 **交叉编码器**同时接受两个（查询、文档）对 → 更加准确。

```text
Bi-Encoder (fast, less accurate):        Cross-Encoder (slow, more accurate):
┌───────────┐  ┌───────────┐              ┌─────────────────────────┐
│   Query    │  │ Document  │              │  [CLS] Query [SEP] Doc │
│     ↓      │  │     ↓     │              │           ↓             │
│  Encoder   │  │  Encoder  │              │    BERT / Transformer   │
│     ↓      │  │     ↓     │              │           ↓             │
│  vec_q     │  │  vec_d    │              │    Relevance Score      │
│     └──cosine──┘          │              │      (0.0 → 1.0)       │
│         similarity        │              └─────────────────────────┘
└───────────────────────────┘

Speed:  ~1ms/pair                         Speed:  ~50ms/pair
Use:    Retrieval (top-100)               Use:    Reranking (top-100 → top-10)
```

### 3.2。兩階段檢索管道

```text
┌──────────────────────────────────────────────────────────────┐
│              TWO-STAGE RETRIEVAL PIPELINE                      │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  Query ──→ ┌──────────────┐    Top-100    ┌──────────────┐   │
│            │ STAGE 1:     │───────────────→│ STAGE 2:     │   │
│            │ Bi-Encoder   │  (fast, broad) │ Cross-Encoder│   │
│            │ Retrieval    │               │ Reranking    │   │
│            │ (< 50ms)     │               │ (< 500ms)    │   │
│            └──────────────┘               └──────┬───────┘   │
│                                                   │           │
│                                              Top-5 (precise)  │
│                                                   │           │
│                                                   ▼           │
│                                            ┌──────────────┐   │
│                                            │ LLM Generate │   │
│                                            └──────────────┘   │
│                                                               │
│  Latency: ~50ms (retrieve) + ~300ms (rerank) + ~1s (LLM)     │
│  Quality: Precision@5 tăng 15-30% so với Naive RAG            │
└──────────────────────────────────────────────────────────────┘
```

### 3.3。熱門重新排名者

|重新排序 |型號|特點|延遲 |準確度|
|----------|---------|------------|--------|----------|
|凝聚力重新排名 | `rerank-v3.5` |基于API、多语言、易于使用|约 200 毫秒 | ⭐⭐⭐⭐⭐ |
| BGE 重新排序 | `bge-reranker-v2-m3` |開源、多國語言 | 〜150ms | ⭐⭐⭐⭐ |
|馬可女士 | `cross-encoder/ms-marco-MiniLM-L-12` |轻量级，以英语为主 | 〜80ms | ⭐⭐⭐ |
|科爾伯特 | `colbert-v2` |晚互动，高效 |约 100 毫秒 | ⭐⭐⭐⭐ |
|吉娜重新排序 | `jina-reranker-v2` | API + 開源選項 | 〜180ms | ⭐⭐⭐⭐ |
| FlashRank | `rank-T5-flan` |超輕量、本地化| 〜30ms | ⭐⭐⭐ |

### 3.4。實施重新排名

```python
# --- Option 1: Cohere Rerank (API) ---
from langchain.retrievers import ContextualCompressionRetriever
from langchain_cohere import CohereRerank

# Base retriever: lấy top-20 candidates
base_retriever = vectorstore.as_retriever(search_kwargs={"k": 20})

# Reranker: Cohere rerank top-20 → top-5
cohere_reranker = CohereRerank(
    model="rerank-v3.5",
    top_n=5,
)
reranking_retriever = ContextualCompressionRetriever(
    base_compressor=cohere_reranker,
    base_retriever=base_retriever,
)

results = reranking_retriever.invoke("Kubernetes pod OOM troubleshooting")
# results: 5 chunks chính xác nhất

# --- Option 2: Open-source Cross-Encoder (local) ---
from sentence_transformers import CrossEncoder

cross_encoder = CrossEncoder("BAAI/bge-reranker-v2-m3")

# Retrieve top-20 candidates
candidates = base_retriever.invoke(query)

# Rerank
pairs = [(query, doc.page_content) for doc in candidates]
scores = cross_encoder.predict(pairs)

# Sort by score, take top-5
reranked = sorted(
    zip(candidates, scores), key=lambda x: x[1], reverse=True
)[:5]
```

---

## 4. 查询转换 — 在搜索之前转换查询

### 4.1。為什麼我們需要查詢轉換？

用户查询通常简短、模糊，或者使用文档以外的词语。查询转换通过在检索之前转换查询来提高质量。

```text
┌─────────────────────────────────────────────────────────────┐
│             QUERY TRANSFORMATION TECHNIQUES                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Original Query: "fix OOM k8s"                               │
│        │                                                     │
│        ├──→ Query Rewriting:                                 │
│        │    "How to fix Out of Memory errors in Kubernetes"  │
│        │                                                     │
│        ├──→ Query Expansion:                                 │
│        │    "fix OOM k8s" + "memory limit" + "resource quota"│
│        │                                                     │
│        ├──→ HyDE (generate hypothetical answer):             │
│        │    "To fix OOM in K8s, increase memory limits in    │
│        │     pod spec, set resource requests, use VPA..."    │
│        │                                                     │
│        ├──→ Multi-Query (N variations):                      │
│        │    Q1: "Kubernetes OOM killed troubleshooting"      │
│        │    Q2: "pod memory limit configuration"             │
│        │    Q3: "container resource management best practice"│
│        │                                                     │
│        └──→ Step-back (abstract first):                      │
│             "What are Kubernetes resource management          │
│              concepts and memory handling mechanisms?"        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 4.2。 HyDE－假設文檔嵌入

HyDE 是查詢轉換組中最強大的技術。我們沒有嵌入簡短的查詢，而是使用 LLM 生成**假設答案**，然後嵌入該答案以進行搜索 - 因為答案更接近文檔語言。

```text
Traditional Search:                HyDE Search:
──────────────────                 ────────────
Query: "fix OOM k8s"               Query: "fix OOM k8s"
       ↓                                  ↓
  embed("fix OOM k8s")             LLM generates hypothetical answer:
       ↓                           "To resolve OOM issues in K8s,
  search vector DB                  configure memory limits in the
       ↓                            pod specification under
  (semantic gap!)                    resources.limits.memory..."
                                           ↓
                                    embed(hypothetical_answer)
                                           ↓
                                    search vector DB
                                           ↓
                                    (closer match to documents!)
```

```python
from langchain.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Chroma

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.0)
embeddings = OpenAIEmbeddings()

# HyDE prompt
hyde_prompt = ChatPromptTemplate.from_template(
    """Please write a detailed technical paragraph that would answer
the following question. Write as if it's from a technical document.
Do not include any preamble.

Question: {question}

Technical paragraph:"""
)

def hyde_retrieve(question: str, vectorstore, top_k: int = 5):
    # Step 1: Generate hypothetical document
    hyde_chain = hyde_prompt | llm
    hypothetical_doc = hyde_chain.invoke({"question": question}).content

    # Step 2: Embed the hypothetical doc (not the original query)
    hyde_embedding = embeddings.embed_query(hypothetical_doc)

    # Step 3: Search using hypothetical doc embedding
    results = vectorstore.similarity_search_by_vector(
        hyde_embedding, k=top_k
    )
    return results

# Usage
results = hyde_retrieve("fix OOM k8s", vectorstore)
```

### 4.3。多查詢檢索

生成 N 个查询变体 → 检索每个变体 → 合并 + 去重。

```python
from langchain.retrievers import MultiQueryRetriever

multi_query_retriever = MultiQueryRetriever.from_llm(
    retriever=vectorstore.as_retriever(search_kwargs={"k": 5}),
    llm=ChatOpenAI(model="gpt-4o-mini", temperature=0.7),
)

# Automatically generates 3 query variations
# "fix OOM k8s" →
#   1. "How to troubleshoot OutOfMemory errors in Kubernetes pods?"
#   2. "Kubernetes container memory limit configuration best practices"
#   3. "Pod OOMKilled resolution steps and resource management"

results = multi_query_retriever.invoke("fix OOM k8s")
# → Merge unique docs from all 3 queries
```

### 4.4。後退提示

不要直接搜尋特定問題，而是先產生一個更抽象的問題（後退問題）→檢索更廣泛的上下文→然後回答原始問題。

```python
stepback_prompt = ChatPromptTemplate.from_template(
    """You are an expert at generating step-back questions.
Given a specific question, generate a more general question that
captures the broader context needed to answer the original question.

Original: {question}
Step-back question:"""
)

# "Why does pod X get OOMKilled with 512Mi limit?"
# → Step-back: "How does Kubernetes memory management and
#    OOM killing mechanism work?"
# → Retrieve broader context first, then answer specific question
```

### 4.5。比較查詢轉換技術

|技術|何時使用 | LLM 電話 |延遲 |改進|
|------------|-------------|------------|--------|-------------|
|查詢重寫 |簡短查詢、縮寫| 1 | +200 毫秒 | 5-10% |
|查詢擴充 |缺少同義詞/變體 | 1 | +200 毫秒 | 5-15% |
| 海德 |語意差距大 | 1 | +500 毫秒 | 15-25% |
|多查詢 |複雜、多方面的查詢 | 1（→ N 個查詢）| +1s | 10-20% |
|後退一步|問題太具體了 | 1 | +300 毫秒 | 10-15% |

> **專業提示：** 當文件使用與使用者查詢不同的語言時（例如：使用者用流行語言詢問，文件以學術語言編寫），HyDE 最有效。但如果 LLM 不知道該領域，HyDE 就會產生幻覺——那麼 Multi-Query 會更好。

---

## 5. 自我 RAG — 檢索 → 批評 → 重生

### 5.1。自我RAG理念

Self-RAG（自反射 RAG）為管道添加了一個**自反射**步驟。 LLM自我評估：
1.我需要取回嗎？
2. 檢索到的區塊是否相關？
3. 答覆是否有證據支持？
4. 回覆有用嗎？

```text
┌──────────────────────────────────────────────────────────────┐
│                    SELF-RAG PIPELINE                           │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  Query ──→ [Decide: need retrieval?]                          │
│                  │                                            │
│           ┌──Yes─┘──No──┐                                     │
│           ▼              ▼                                     │
│     ┌──────────┐   ┌─────────┐                                │
│     │ Retrieve │   │ Generate│──→ Done (no retrieval needed)   │
│     │ Top-K    │   │ directly│                                │
│     └────┬─────┘   └─────────┘                                │
│          ▼                                                    │
│  [Critique: chunks relevant?]                                 │
│       │            │                                          │
│   Relevant    Not relevant                                    │
│       ▼            ▼                                          │
│  ┌──────────┐  ┌────────────┐                                 │
│  │ Generate │  │ Re-retrieve│──→ (loop back with new query)   │
│  │ Response │  │ or skip    │                                 │
│  └────┬─────┘  └────────────┘                                 │
│       ▼                                                       │
│  [Critique: response supported by evidence?]                  │
│       │               │                                       │
│   Supported      Not supported                                │
│       ▼               ▼                                       │
│  [Useful?]      ┌────────────┐                                │
│       │         │ Regenerate │──→ (loop with different chunks) │
│       ▼         └────────────┘                                │
│   Return                                                      │
│   Final Answer                                                │
│                                                               │
│  Special tokens:  [Retrieve]  [ISREL]  [ISSUP]  [ISUSE]      │
└──────────────────────────────────────────────────────────────┘
```

### 5.2。實施 Self-RAG（簡化）

```python
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

llm = ChatOpenAI(model="gpt-4o", temperature=0.0)

def self_rag(query: str, retriever, max_retries: int = 2):
    # Step 1: Decide if retrieval is needed
    need_retrieval = llm.invoke(
        f"Does this question require external knowledge to answer?\n"
        f"Question: {query}\nAnswer YES or NO only."
    ).content.strip().upper()

    if need_retrieval == "NO":
        return llm.invoke(query).content

    for attempt in range(max_retries):
        # Step 2: Retrieve
        docs = retriever.invoke(query)
        context = "\n\n".join(d.page_content for d in docs)

        # Step 3: Critique relevance
        relevance = llm.invoke(
            f"Are these passages relevant to the question?\n"
            f"Question: {query}\n"
            f"Passages: {context[:2000]}\n"
            f"Answer RELEVANT or NOT_RELEVANT."
        ).content.strip().upper()

        if "NOT_RELEVANT" in relevance:
            query = llm.invoke(
                f"Rewrite this query to find better results: {query}"
            ).content
            continue  # retry with rewritten query

        # Step 4: Generate response
        response = llm.invoke(
            f"Answer based on the context provided.\n"
            f"Context: {context}\n"
            f"Question: {query}"
        ).content

        # Step 5: Check if response is supported
        supported = llm.invoke(
            f"Is this response fully supported by the context?\n"
            f"Response: {response}\n"
            f"Context: {context[:2000]}\n"
            f"Answer SUPPORTED or NOT_SUPPORTED."
        ).content.strip().upper()

        if "SUPPORTED" in supported:
            return response

    return response  # return best effort after max retries
```

---

## 6. CRAG — 矯正 RAG

### 6.1。岩壁理念

CRAG 評估檢索結果的質量，並有 3 種不同的操作：

```text
┌──────────────────────────────────────────────────────────────┐
│                    CRAG PIPELINE                               │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  Query ──→ Retrieve Top-K ──→ Evaluate Relevance              │
│                                      │                        │
│                      ┌───────────────┼──────────────┐         │
│                      ▼               ▼              ▼         │
│                 ┌─────────┐   ┌───────────┐  ┌───────────┐   │
│                 │ CORRECT │   │ AMBIGUOUS │  │ INCORRECT │   │
│                 │ Score>0.7│  │0.3<Score<0.7│ │ Score<0.3│   │
│                 └────┬────┘   └─────┬─────┘  └─────┬─────┘   │
│                      ▼              ▼              ▼          │
│                 Use retrieved   Refine +      Web Search      │
│                 docs as-is    supplement     (Tavily/Google)   │
│                      │         with web          │            │
│                      └──────────┬───────────────┘            │
│                                 ▼                             │
│                     Knowledge Refinement                      │
│                     (strip irrelevant parts)                  │
│                                 ▼                             │
│                          LLM Generate                         │
│                                 ▼                             │
│                          Final Answer                         │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

### 6.2。實施CRAG

```python
from langchain_community.tools.tavily_search import TavilySearchResults

web_search = TavilySearchResults(max_results=3)

def corrective_rag(query: str, retriever, llm):
    # Step 1: Initial retrieval
    docs = retriever.invoke(query)

    # Step 2: Grade each document
    graded_docs = []
    for doc in docs:
        grade = llm.invoke(
            f"Grade this document's relevance (0.0-1.0):\n"
            f"Question: {query}\n"
            f"Document: {doc.page_content[:500]}\n"
            f"Return ONLY a number between 0.0 and 1.0."
        ).content.strip()
        score = float(grade)
        if score > 0.3:
            graded_docs.append((doc, score))

    # Step 3: Determine action
    if not graded_docs:
        # All INCORRECT → web search fallback
        web_results = web_search.invoke(query)
        context = "\n".join(r["content"] for r in web_results)
    elif max(s for _, s in graded_docs) < 0.7:
        # AMBIGUOUS → combine retrieved + web
        context = "\n".join(d.page_content for d, _ in graded_docs)
        web_results = web_search.invoke(query)
        context += "\n" + "\n".join(r["content"] for r in web_results)
    else:
        # CORRECT → use retrieved docs
        context = "\n".join(d.page_content for d, _ in graded_docs)

    # Step 4: Generate
    return llm.invoke(
        f"Answer based on context:\n{context}\n\nQuestion: {query}"
    ).content
```

---

## 7. Agentic RAG－代理程式決定何時檢索

### 7.1。從管道到代理

Naive/Advanced RAG 是一個**硬管道** — 每個查詢都會被檢索然後產生。 Agentic RAG 將管道變成**代理循環**：代理自行決定：
- 我需要檢索還是我有足夠的資訊？
- 從什麼來源檢索？ （內部文件、SQL 資料庫、Web、API）
- 結果好還是我們需要更多檢索？
- 需要其他工具嗎？ （計算器、程式碼解釋器）

```text
┌───────────────────────────────────────────────────────────────┐
│                     AGENTIC RAG                                │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  User Query ──→ ┌──────────────────────────────────┐          │
│                 │         AGENT (LLM + Tools)       │          │
│                 │                                    │          │
│                 │  "Let me think about this..."      │          │
│                 │                                    │          │
│                 │  Available tools:                   │          │
│                 │  ┌──────────┐  ┌──────────┐       │          │
│                 │  │ Vector   │  │   SQL    │       │          │
│                 │  │ Search   │  │  Query   │       │          │
│                 │  └──────────┘  └──────────┘       │          │
│                 │  ┌──────────┐  ┌──────────┐       │          │
│                 │  │   Web    │  │   Code   │       │          │
│                 │  │ Search   │  │ Executor │       │          │
│                 │  └──────────┘  └──────────┘       │          │
│                 │  ┌──────────┐  ┌──────────┐       │          │
│                 │  │ Knowledge│  │  API     │       │          │
│                 │  │  Graph   │  │  Call    │       │          │
│                 │  └──────────┘  └──────────┘       │          │
│                 │                                    │          │
│                 │  Agent loop:                        │          │
│                 │  1. Observe query                   │          │
│                 │  2. Think → pick tool               │          │
│                 │  3. Act → retrieve/compute          │          │
│                 │  4. Observe result                  │          │
│                 │  5. Think → enough info?            │          │
│                 │  6. If no → goto 2                  │          │
│                 │  7. If yes → generate answer        │          │
│                 └────────────────┬───────────────────┘          │
│                                  ▼                              │
│                          Final Answer                           │
└───────────────────────────────────────────────────────────────┘
```

### 7.2。路由器模式 — 多來源 RAG

```python
from langchain.tools import tool
from langgraph.prebuilt import create_react_agent

@tool
def search_docs(query: str) -> str:
    """Search internal documentation for technical answers."""
    docs = vectorstore.as_retriever(search_kwargs={"k": 5}).invoke(query)
    return "\n".join(d.page_content for d in docs)

@tool
def search_web(query: str) -> str:
    """Search the web for recent information not in internal docs."""
    results = TavilySearchResults(max_results=3).invoke(query)
    return "\n".join(r["content"] for r in results)

@tool
def query_database(sql: str) -> str:
    """Execute SQL query against the metrics database."""
    # In production: validate SQL, use read-only connection
    return db.execute(sql).fetchall()

# Agentic RAG: agent picks the right tool
agent = create_react_agent(
    model=ChatOpenAI(model="gpt-4o"),
    tools=[search_docs, search_web, query_database],
    prompt="You are a helpful assistant with access to internal docs, "
           "web search, and a SQL database. Use the right tool for each query."
)

# Agent decides: internal docs for technical questions,
# web for recent events, SQL for metrics data
response = agent.invoke({
    "messages": [{"role": "user", "content": "What was our P99 latency last week?"}]
})
# → Agent chọn query_database vì đây là metrics question
```

---

## 8.Graph RAG——知識圖譜+向量搜索

### 8.1。為什麼我們需要圖 RAG？

向量搜尋找到**相似**區塊，但不理解實體之間的**關係**。 Graph RAG將知識圖譜（實體→關係→實體）與向量搜尋結合。

```text
Vector Search Only:              Graph RAG:
──────────────────               ──────────
"Who reports to the CTO?"        "Who reports to the CTO?"
    ↓                                ↓
Query → embed → search           Query → extract entities: CTO
    ↓                                ↓
Chunks mentioning "CTO"          Traverse graph:
(may not have reporting              CTO
 structure info)                    ├──reports_to──→ CEO
                                    ├──manages──→ VP Engineering
                                    ├──manages──→ VP Data
                                    └──manages──→ VP Security
                                         ↓
                                    Combine with vector context
                                         ↓
                                    Precise answer with relationships
```

### 8.2。圖RAG架構

```text
┌───────────────────────────────────────────────────────────────┐
│                       GRAPH RAG                                │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  Documents ──→ Entity Extraction ──→ Knowledge Graph           │
│                (LLM-based)           (Neo4j / NetworkX)        │
│                                                                │
│  Query ──→ ┬──→ Vector Search ──→ Relevant chunks              │
│            │                                                   │
│            └──→ Entity Recognition ──→ Graph Traversal          │
│                                        (neighbors, paths)      │
│                      │                      │                  │
│                      └──────────┬───────────┘                  │
│                                 ▼                              │
│                    Merged Context (chunks + graph)              │
│                                 ▼                              │
│                          LLM Generate                          │
│                                 ▼                              │
│                  Answer with entity relationships              │
└───────────────────────────────────────────────────────────────┘
```

```python
# Simplified Graph RAG with LangChain + NetworkX
import networkx as nx
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o-mini")

# Step 1: Build knowledge graph from documents
def extract_triplets(text: str) -> list[tuple]:
    response = llm.invoke(
        f"Extract entity-relation-entity triplets from:\n{text}\n"
        f"Format: entity1 | relation | entity2 (one per line)"
    ).content
    triplets = []
    for line in response.strip().split("\n"):
        parts = [p.strip() for p in line.split("|")]
        if len(parts) == 3:
            triplets.append(tuple(parts))
    return triplets

# Step 2: Build graph
G = nx.DiGraph()
for doc in documents:
    for subj, rel, obj in extract_triplets(doc.page_content):
        G.add_edge(subj, obj, relation=rel)

# Step 3: Query with graph context
def graph_rag_query(query: str, G, vectorstore):
    # Vector search
    vector_results = vectorstore.similarity_search(query, k=5)

    # Extract entities from query → traverse graph
    entities = llm.invoke(
        f"Extract key entities from: {query}"
    ).content.split(",")

    graph_context = []
    for entity in entities:
        entity = entity.strip()
        if entity in G:
            neighbors = list(G.neighbors(entity))
            for n in neighbors:
                rel = G[entity][n]["relation"]
                graph_context.append(f"{entity} --{rel}--> {n}")

    # Combine
    context = "\n".join(d.page_content for d in vector_results)
    context += "\n\nGraph relationships:\n" + "\n".join(graph_context)

    return llm.invoke(
        f"Context:\n{context}\n\nQuestion: {query}"
    ).content
```

---

## 9. 迷失與解決方案

### 9.1。失去在中間的問題

史丹佛大學的研究（2023）顯示：LLM 的注意力分佈不均勻－集中在提示的**開始**和**結束**，忽略了**中間**的訊息。

```text
LLM Attention Distribution:
───────────────────────────

Attention
  ▲
  │ ████                                          ████
  │ ████                                          ████
  │ ████░░                                    ░░██████
  │ ██████░░░░                          ░░░░░░████████
  │ ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██████████
  │ ████████████░░░░░░░░░░░░░░░░░░░░████████████████
  └──────────────────────────────────────────────────→ Position
    [Start]          [Middle]            [End]

→ Chunks ở giữa prompt bị "bỏ qua" lên tới 20-30%
```

### 9.2。解決方案

|解決方案 |它是如何運作的 |何時使用 |
|----------|----------------|-------------|
| **重新排序** |將相關的區塊放在開頭+結尾，不太相關的放在中間 |永遠 |
| **壓縮** |總結/刪除區塊中的冗餘資訊 |長塊|
| **更少的區塊** |減少 top-K（5 個而不是 20 個）|當重新排序是好的 |
| **LongContextReorder** |根據相關性模式進行隨機播放 |預設策略 |

```python
from langchain.document_transformers import LongContextReorder

reorder = LongContextReorder()

# Input: [most_relevant, ..., least_relevant]
# Output: [most_relevant, 3rd, 5th, ..., 4th, 2nd]
# → Relevant nhất ở đầu và cuối

reordered_docs = reorder.transform_documents(docs)
```

---

## 10. 生產高階 RAG 架構

### 10.1。把它們放在一起

```text
┌──────────────────────────────────────────────────────────────────────┐
│             PRODUCTION ADVANCED RAG ARCHITECTURE                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  User Query                                                           │
│      │                                                                │
│      ▼                                                                │
│  ┌─────────────────────┐                                              │
│  │ 1. QUERY ANALYSIS   │  Route: simple? → direct LLM                │
│  │    (classify/route)  │         complex? → RAG pipeline             │
│  └──────────┬──────────┘         multi-hop? → agent loop             │
│             ▼                                                         │
│  ┌─────────────────────┐                                              │
│  │ 2. QUERY TRANSFORM  │  HyDE / Multi-Query / Step-back             │
│  │    (optional)        │  based on query analysis                    │
│  └──────────┬──────────┘                                              │
│             ▼                                                         │
│  ┌─────────────────────┐     ┌──────────────┐                        │
│  │ 3. HYBRID RETRIEVAL │────→│ BM25 (sparse)│                        │
│  │    (parallel)        │     │ Vector(dense) │                        │
│  │                      │     │ Graph(KG)     │                        │
│  └──────────┬──────────┘     └──────────────┘                        │
│             ▼                                                         │
│  ┌─────────────────────┐     Reciprocal Rank Fusion                   │
│  │ 4. MERGE + DEDUP    │     → Unique top-20 candidates              │
│  └──────────┬──────────┘                                              │
│             ▼                                                         │
│  ┌─────────────────────┐     Cross-encoder reranker                   │
│  │ 5. RERANK           │     top-20 → top-5                          │
│  └──────────┬──────────┘                                              │
│             ▼                                                         │
│  ┌─────────────────────┐     Context compression +                    │
│  │ 6. POST-PROCESS     │     LongContextReorder                      │
│  └──────────┬──────────┘                                              │
│             ▼                                                         │
│  ┌─────────────────────┐     Grounded generation with                 │
│  │ 7. GENERATE + CITE  │     source citations                        │
│  └──────────┬──────────┘                                              │
│             ▼                                                         │
│  ┌─────────────────────┐     Self-RAG / CRAG:                         │
│  │ 8. VALIDATE         │     check relevance, hallucination           │
│  │    (self-critique)   │     → re-retrieve if needed                 │
│  └──────────┬──────────┘                                              │
│             ▼                                                         │
│  ┌─────────────────────┐     Cache, log, track metrics                │
│  │ 9. DELIVER + LOG    │     (latency, relevance, user feedback)      │
│  └─────────────────────┘                                              │
│                                                                       │
│  Metrics to track:                                                    │
│  • Retrieval: Precision@K, Recall@K, MRR, NDCG                       │
│  • Generation: Faithfulness, Relevance, Answer quality                │
│  • System: Latency P50/P99, Cost per query, Cache hit rate            │
└──────────────────────────────────────────────────────────────────────┘
```

### 10.2。完整的管道代碼

```python
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain.retrievers import EnsembleRetriever, BM25Retriever
from langchain.retrievers import ContextualCompressionRetriever
from langchain_cohere import CohereRerank
from langchain.document_transformers import LongContextReorder
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

llm = ChatOpenAI(model="gpt-4o", temperature=0.0)

# --- Stage 1: Hybrid Retrieval ---
dense_retriever = vectorstore.as_retriever(search_kwargs={"k": 15})
bm25_retriever = BM25Retriever.from_documents(all_docs, k=15)

hybrid = EnsembleRetriever(
    retrievers=[bm25_retriever, dense_retriever],
    weights=[0.3, 0.7],
)

# --- Stage 2: Reranking ---
reranker = CohereRerank(model="rerank-v3.5", top_n=5)
reranking_retriever = ContextualCompressionRetriever(
    base_compressor=reranker,
    base_retriever=hybrid,
)

# --- Stage 3: Post-processing ---
reorder = LongContextReorder()

# --- Stage 4: Generation with citations ---
rag_prompt = ChatPromptTemplate.from_template("""
Answer the question based on the context below.
For each claim, cite the source using [Source N].
If the context doesn't contain the answer, say "I don't have enough
information to answer this question."

Context:
{context}

Question: {question}

Answer with citations:""")

def advanced_rag_pipeline(question: str) -> str:
    # Retrieve + Rerank
    docs = reranking_retriever.invoke(question)

    # Reorder for lost-in-the-middle
    docs = reorder.transform_documents(docs)

    # Format context with source numbers
    context = "\n\n".join(
        f"[Source {i+1}]: {doc.page_content}"
        for i, doc in enumerate(docs)
    )

    # Generate
    chain = rag_prompt | llm | StrOutputParser()
    answer = chain.invoke({"context": context, "question": question})

    return answer

# Usage
answer = advanced_rag_pipeline("How to configure Kubernetes HPA?")
```

### 10.3。效能比較

```text
Benchmark: Retrieval Quality (BEIR dataset, nDCG@10)

Method                        nDCG@10    Latency    LLM Calls
──────────────────────────────────────────────────────────────
Naive RAG (dense only)         0.42       ~1.2s        1
+ BM25 Hybrid                  0.48       ~1.4s        1
+ Reranking                    0.55       ~1.8s        1
+ HyDE                         0.53       ~2.5s        2
+ Multi-Query                  0.51       ~3.0s        2
+ Hybrid + Rerank + HyDE       0.59       ~3.2s        2
+ Self-RAG                     0.61       ~5.0s        3-5
+ Agentic (full)               0.64       ~8.0s        3-8
──────────────────────────────────────────────────────────────

Trade-off: Mỗi technique tăng accuracy nhưng cũng tăng latency + cost.
→ Production: chọn combo phù hợp use case, không nhất thiết dùng tất cả.
```

### 10.4。決策樹：選擇哪一種 RAG 策略？

```text
                    ┌─────────────────────┐
                    │  Query đơn giản?     │
                    └──────────┬──────────┘
                          ┌───┴───┐
                         Yes      No
                          │       │
                          ▼       ▼
                    ┌──────────┐ ┌──────────────────┐
                    │Naive RAG │ │Keyword quan trọng?│
                    │(fast,     │ └────────┬─────────┘
                    │ cheap)    │     ┌────┴────┐
                    └──────────┘    Yes        No
                                    │          │
                                    ▼          ▼
                             ┌───────────┐ ┌────────────┐
                             │Hybrid     │ │Semantic gap?│
                             │Search     │ └──────┬─────┘
                             └───────────┘   ┌────┴────┐
                                            Yes       No
                                             │         │
                                             ▼         ▼
                                      ┌──────────┐ ┌──────────┐
                                      │  HyDE    │ │ Reranking│
                                      └──────────┘ │ (always  │
                                                    │  helps!) │
                                                    └──────────┘

     ┌────────────────────────────────────────────────────────┐
     │  If accuracy still insufficient:                        │
     │  → Add Self-RAG / CRAG for self-correction              │
     │  → Add Agentic RAG for multi-source / complex queries   │
     │  → Add Graph RAG for entity-relationship questions      │
     └────────────────────────────────────────────────────────┘
```

---

## 總結

進階 RAG 並不是選擇單一技術，而是針對正確的用例組合正確的技術。

**重點：**

1. **混合搜尋**（BM25 + Dense）應該是預設基線 - 易於實施，明顯改進。
2. **重新排名**（交叉編碼器）是「容易實現的目標」－更少的努力，顯著提高的精確度@K。
3. 當查詢和文件之間的語義差距很大時，**HyDE** 很強大，但增加了 1 個 LLM 呼叫。
4. **多查詢**適合處理多面的複雜問題。
5. **Self-RAG / CRAG** 增加了自我校正－對於生產可靠性很重要。
6. **Agentic RAG** 將剛性管道變成靈活的代理人－RAG的未來。
7. **Graph RAG** 用於實體關係問題－補向量搜尋。
8. **中間迷失**透過重新排序+壓縮解決。

```text
RAG Maturity Model:
────────────────────

Level 1: Naive RAG
  → embed → search → generate
  → Accuracy: ~60-70%

Level 2: Advanced RAG
  → hybrid search + reranking + query transform
  → Accuracy: ~80-90%

Level 3: Self-Correcting RAG
  → Self-RAG / CRAG + validation loop
  → Accuracy: ~85-93%

Level 4: Agentic RAG
  → Agent-driven, multi-source, adaptive
  → Accuracy: ~90-95%

Level 5: Graph + Agentic RAG
  → Knowledge graph + agent + vector
  → Accuracy: ~92-97%
```

---

## 練習

### 練習 1：混合搜尋 + 重新排名管道
建立一個將 BM25 + 密集檢索與 Cohere Rerank（或開源交叉編碼器）結合的管道。對資料集 100 多個文件進行測試：
- 比較 Precision@5：Naive RAG 與 Hybrid 與 Hybrid + 重新排名
- 測試 BM25 與 Dense 的不同權重（0.3/0.7、0.5/0.5、0.7/0.3）
- 記錄每個階段的延遲

### 練習 2：HyDE 與多查詢
實作 HyDE 和多查詢檢索器：
- 比較 50 個測試問題的recall@10
- 確定哪種類型的問題 HyDE 更好，哪種類型的 Multi-Query 更好
- 嘗試結合兩者：HyDE + 多查詢 → 比較結果

### 練習 3：自我 RAG 實作
使用 LangGraph 建立完整的 Self-RAG 管道：
- 實施 4 個批評標記： `[Retrieve]`, `[ISREL]`, `[ISSUP]`, `[ISUSE]`
- 新增 CRAG 後備（檢索不佳時的網路搜尋）
- 測量平均重試次數和準確度改進
- 可視化代理軌跡（思考→行動→觀察）

### 練習 4：生產 RAG 評估
建構高級 RAG 的評估管道：
- 使用 RAGAS 指標：忠實度、答案相關性、上下文精確度、上下文回想率
- 比較至少 3 種配置：Naive、Advanced（混合 + 重新排名）、Self-RAG
- 建立評估結果的儀表板視覺化
- 獎勵：為 RAG 配置實施 A/B 測試框架
