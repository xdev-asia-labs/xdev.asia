---
id: 019e0a01-bb11-7001-c001-ee1100000001
title: "Bài 11: Advanced RAG — Reranking, HyDE & Self-RAG"
slug: bai-11-advanced-rag-reranking-hyde-self-rag
description: >-
  Advanced retrieval: hybrid search (sparse + dense), reranking (Cohere, cross-encoder). Query transformation: HyDE, multi-query, step-back prompting. Self-RAG, CRAG. Agentic RAG, Graph RAG. Production optimization.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: RAG, Embeddings & Vector Database"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **RAG pipeline của bạn retrieve được 20 chunks — nhưng LLM chỉ đọc đúng 3 cái đầu.** Naive RAG giống như Google Search trả 1000 kết quả nhưng bạn chỉ click trang 1. Chunks quan trọng nhất lọt xuống giữa prompt — LLM bỏ qua. Câu trả lời sai. User mất niềm tin. Advanced RAG giải quyết toàn bộ: **Hybrid Search** kết hợp keyword lẫn semantic, **Reranking** đẩy chunks quan trọng lên top, **HyDE** biến query thành hypothetical answer trước khi search, **Self-RAG** để LLM tự critique kết quả retrieval. Đây là bài quan trọng nhất của phần RAG — nắm vững những kỹ thuật này sẽ đưa RAG pipeline của bạn từ "demo" lên "production-grade".

---

## 1. Naive RAG — Vấn đề và giới hạn

### 1.1. Naive RAG Pipeline nhắc lại

Bài trước ta đã build Naive RAG: embed query → similarity search → top-K chunks → LLM generate. Pipeline này hoạt động tốt cho demo, nhưng production thì gặp nhiều vấn đề nghiêm trọng.

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

### 1.2. Bảng tổng hợp vấn đề và giải pháp

| Vấn đề | Mô tả | Giải pháp Advanced RAG |
|--------|-------|----------------------|
| Low Precision | Nhiều chunks retrieve không liên quan | **Reranking** (cross-encoder) |
| Semantic Gap | Query dùng từ khác document | **HyDE**, **Query Expansion** |
| Lost in the Middle | LLM bỏ qua chunks ở giữa prompt | **Reordering**, **Compression** |
| Single Retrieval | Một lần search không đủ | **Self-RAG**, **CRAG** |
| Keyword Miss | Dense search miss exact terms | **Hybrid Search** (BM25 + dense) |
| Complex Query | Câu hỏi phức tạp, multi-hop | **Multi-Query**, **Step-back** |
| Static Pipeline | Pipeline cứng nhắc | **Agentic RAG** |
| Missing Relations | Không capture entity relationships | **Graph RAG** |

### 1.3. RAG Evolution Map

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

## 2. Hybrid Search — Sparse + Dense Retrieval

### 2.1. Tại sao cần Hybrid Search?

**Dense search** (embedding-based) giỏi semantic matching nhưng miss exact keywords. **Sparse search** (BM25, TF-IDF) giỏi keyword matching nhưng không hiểu semantic. Kết hợp cả hai → best of both worlds.

| Feature | Sparse (BM25) | Dense (Embedding) | Hybrid |
|---------|--------------|-------------------|--------|
| Exact keyword match | ✅ Excellent | ❌ Weak | ✅ |
| Semantic understanding | ❌ None | ✅ Strong | ✅ |
| Typo tolerance | ❌ No | ✅ Yes | ✅ |
| Acronym/jargon | ✅ Good | ❌ May miss | ✅ |
| Training required | ❌ No | ✅ Yes | ✅ |
| Speed | ⚡ Very fast | 🔄 Moderate | 🔄 Moderate |

### 2.2. Reciprocal Rank Fusion (RRF)

RRF là thuật toán merge kết quả từ nhiều retriever. Ý tưởng: document xuất hiện ở rank cao trong nhiều retriever → score cao.

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

### 2.3. Implementation với LangChain

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

## 3. Reranking — Cross-Encoder Two-Stage Pipeline

### 3.1. Bi-Encoder vs Cross-Encoder

Retrieval thường dùng **bi-encoder** (embed query & doc riêng rẽ → cosine similarity). Nhưng bi-encoder có hạn chế: nó không thấy interaction giữa query và document. **Cross-encoder** nhận cả cặp (query, doc) cùng lúc → chính xác hơn nhiều.

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

### 3.2. Two-Stage Retrieval Pipeline

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

### 3.3. Các Reranker phổ biến

| Reranker | Model | Đặc điểm | Latency | Accuracy |
|----------|-------|-----------|---------|----------|
| Cohere Rerank | `rerank-v3.5` | API-based, multilingual, dễ dùng | ~200ms | ⭐⭐⭐⭐⭐ |
| BGE Reranker | `bge-reranker-v2-m3` | Open-source, multilingual | ~150ms | ⭐⭐⭐⭐ |
| MS MARCO | `cross-encoder/ms-marco-MiniLM-L-12` | Lightweight, English-focused | ~80ms | ⭐⭐⭐ |
| ColBERT | `colbert-v2` | Late interaction, efficient | ~100ms | ⭐⭐⭐⭐ |
| Jina Reranker | `jina-reranker-v2` | API + open-source options | ~180ms | ⭐⭐⭐⭐ |
| FlashRank | `rank-T5-flan` | Ultra lightweight, local | ~30ms | ⭐⭐⭐ |

### 3.4. Implementation Reranking

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

## 4. Query Transformation — Biến đổi query trước khi search

### 4.1. Tại sao cần Query Transformation?

User query thường ngắn, mơ hồ, hoặc dùng từ khác document. Query Transformation cải thiện quality bằng cách biến đổi query trước khi retrieve.

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

### 4.2. HyDE — Hypothetical Document Embedding

HyDE là technique mạnh nhất trong nhóm Query Transformation. Thay vì embed query ngắn gọn, ta dùng LLM generate một **hypothetical answer** rồi embed answer đó để search — vì answer gần ngôn ngữ document hơn.

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

### 4.3. Multi-Query Retrieval

Generate N variations của query → retrieve cho mỗi variation → merge + deduplicate.

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

### 4.4. Step-back Prompting

Thay vì search trực tiếp câu hỏi cụ thể, trước tiên generate một câu hỏi trừu tượng hơn (step-back question) → retrieve broader context → rồi mới trả lời câu hỏi gốc.

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

### 4.5. So sánh Query Transformation Techniques

| Technique | Khi nào dùng | LLM calls | Latency | Improvement |
|-----------|-------------|-----------|---------|-------------|
| Query Rewriting | Query ngắn, abbreviation | 1 | +200ms | 5-10% |
| Query Expansion | Missing synonyms/variants | 1 | +200ms | 5-15% |
| HyDE | Semantic gap lớn | 1 | +500ms | 15-25% |
| Multi-Query | Query phức tạp, multi-facet | 1 (→ N queries) | +1s | 10-20% |
| Step-back | Câu hỏi quá cụ thể | 1 | +300ms | 10-15% |

> **Pro tip:** HyDE hiệu quả nhất khi document dùng ngôn ngữ khác user query (vd: user hỏi tiếng bình dân, document viết academic). Nhưng HyDE sẽ hallucinate nếu LLM không biết domain — lúc đó Multi-Query tốt hơn.

---

## 5. Self-RAG — Retrieve → Critique → Regenerate

### 5.1. Ý tưởng Self-RAG

Self-RAG (Self-Reflective RAG) thêm bước **self-reflection** vào pipeline. LLM tự đánh giá:
1. Có cần retrieve không?
2. Chunks retrieved có relevant không?
3. Response có supported by evidence không?
4. Response có useful không?

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

### 5.2. Implementation Self-RAG (simplified)

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

## 6. CRAG — Corrective RAG

### 6.1. Ý tưởng CRAG

CRAG đánh giá chất lượng retrieval kết quả và có 3 action khác nhau:

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

### 6.2. Implementation CRAG

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

## 7. Agentic RAG — Agent quyết định khi nào retrieve

### 7.1. Từ Pipeline sang Agent

Naive/Advanced RAG là **pipeline cứng** — mỗi query đều retrieve rồi generate. Agentic RAG biến pipeline thành **agent loop**: agent tự quyết định:
- Cần retrieve không hay đã có đủ info?
- Retrieve từ nguồn nào? (internal docs, SQL database, web, API)
- Kết quả tốt chưa hay cần retrieve thêm?
- Cần tool nào khác? (calculator, code interpreter)

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

### 7.2. Router Pattern — Multi-Source RAG

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

## 8. Graph RAG — Knowledge Graph + Vector Search

### 8.1. Tại sao cần Graph RAG?

Vector search tìm chunks **tương tự** nhưng không hiểu **relationships** giữa entities. Graph RAG kết hợp knowledge graph (entity → relation → entity) với vector search.

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

### 8.2. Graph RAG Architecture

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

## 9. Lost-in-the-Middle & Solutions

### 9.1. Vấn đề Lost-in-the-Middle

Research từ Stanford (2023) chỉ ra: LLM attention phân bố không đều — tập trung ở **đầu** và **cuối** prompt, bỏ qua thông tin ở **giữa**.

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

### 9.2. Solutions

| Solution | Cách hoạt động | Khi nào dùng |
|----------|---------------|-------------|
| **Reordering** | Đặt relevant chunks ở đầu + cuối, less relevant ở giữa | Luôn luôn |
| **Compression** | Tóm tắt/loại bỏ thông tin thừa từ chunks | Chunks dài |
| **Fewer Chunks** | Giảm top-K (5 thay vì 20) | Khi reranker tốt |
| **LongContextReorder** | Shuffle theo relevance pattern | Default strategy |

```python
from langchain.document_transformers import LongContextReorder

reorder = LongContextReorder()

# Input: [most_relevant, ..., least_relevant]
# Output: [most_relevant, 3rd, 5th, ..., 4th, 2nd]
# → Relevant nhất ở đầu và cuối

reordered_docs = reorder.transform_documents(docs)
```

---

## 10. Production Advanced RAG Architecture

### 10.1. Putting It All Together

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

### 10.2. Full Pipeline Code

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

### 10.3. Performance Comparison

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

### 10.4. Decision Tree: Chọn RAG strategy nào?

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

## Tổng kết

Advanced RAG không phải chọn một technique duy nhất — mà là kết hợp đúng techniques cho đúng use case.

**Key takeaways:**

1. **Hybrid Search** (BM25 + Dense) nên là baseline mặc định — dễ implement, cải thiện rõ rệt.
2. **Reranking** (cross-encoder) là "low-hanging fruit" — ít effort, tăng precision@K đáng kể.
3. **HyDE** mạnh khi semantic gap lớn giữa query và document, nhưng thêm 1 LLM call.
4. **Multi-Query** tốt cho câu hỏi complex, nhiều facet.
5. **Self-RAG / CRAG** thêm self-correction — quan trọng cho production reliability.
6. **Agentic RAG** biến pipeline cứng thành agent linh hoạt — tương lai của RAG.
7. **Graph RAG** cho entity-relationship questions — complement vector search.
8. **Lost-in-the-middle** giải quyết bằng reordering + compression.

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

## Bài tập

### Bài tập 1: Hybrid Search + Reranking Pipeline
Xây dựng pipeline kết hợp BM25 + Dense retrieval với Cohere Rerank (hoặc open-source cross-encoder). Test trên dataset 100+ documents:
- So sánh Precision@5 giữa: Naive RAG vs Hybrid vs Hybrid + Reranking
- Thử nghiệm các weight khác nhau cho BM25 vs Dense (0.3/0.7, 0.5/0.5, 0.7/0.3)
- Log latency cho mỗi stage

### Bài tập 2: HyDE vs Multi-Query
Implement cả HyDE và Multi-Query retrievers:
- So sánh recall@10 trên 50 câu hỏi test
- Xác định loại câu hỏi nào HyDE tốt hơn, loại nào Multi-Query tốt hơn
- Thử kết hợp cả hai: HyDE + Multi-Query → so sánh kết quả

### Bài tập 3: Self-RAG Implementation
Build Self-RAG pipeline hoàn chỉnh với LangGraph:
- Implement 4 critique tokens: `[Retrieve]`, `[ISREL]`, `[ISSUP]`, `[ISUSE]`
- Thêm CRAG fallback (web search khi retrieval kém)
- Đo số lần retry trung bình và accuracy improvement
- Visualize agent trace (thinking → action → observation)

### Bài tập 4: Production RAG Evaluation
Xây dựng evaluation pipeline cho Advanced RAG:
- Dùng RAGAS metrics: Faithfulness, Answer Relevancy, Context Precision, Context Recall
- So sánh ít nhất 3 configurations: Naive, Advanced (hybrid + rerank), Self-RAG
- Tạo dashboard visualization cho kết quả evaluation
- Bonus: implement A/B testing framework cho RAG configs
