---
id: 019e0a01-bb11-7001-c001-ee1100000001
title: 'レッスン 11: 高度な RAG — 再ランキング、HyDE、セルフ RAG'
slug: bai-11-advanced-rag-reranking-hyde-self-rag
description: >-
  高度な検索: ハイブリッド検索 (スパース + デンス)、再ランキング (Cohere、クロスエンコーダー)。クエリ変換:
  HyDE、マルチクエリ、ステップバック プロンプト。セルフラグ、クラッグ。エージェント RAG、グラフ RAG。生産の最適化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 3: RAG、埋め込み、ベクトル データベース'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **RAG パイプラインは 20 個のチャンクを取得します。ただし、LLM は最初の 3 個だけを正しく読み取ります。** Naive RAG は、1000 件の結果を返す Google 検索のようなものですが、クリックするのは 1 ページ目だけです。最も重要なチャンクはプロンプトの中央にあり、LLM はそれらを無視します。間違った答えです。ユーザーは信頼を失います。高度な RAG はすべてを解決します。**ハイブリッド検索** はキーワードとセマンティクスを組み合わせ、**再ランキング** は重要なチャンクを上位に押し出し、**HyDE** は検索前にクエリを仮説的な回答に変換し、**Self-RAG** は LLM で検索結果自体を批評します。これは RAG セクションの最も重要なレッスンです。これらのテクニックをマスターすると、RAG パイプラインが「デモ」から「本番グレード」に変わります。

---

## 1. Naive RAG — 問題と制限

＃＃＃１．１．単純な RAG パイプラインの繰り返し

前のレッスンでは、Naive RAG を構築しました: 埋め込みクエリ → 類似性検索 → 上位 K チャンク → LLM 生成。このパイプラインはデモではうまく機能しますが、本番環境では重大な問題が発生します。

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

＃＃＃１．２．問題と解決策のまとめ表

|問題 |説明 |高度な RAG ソリューション |
|----------|------|----------|
|低精度 |多数の無関係なチャンクを取得します。 **再ランキング** (クロスエンコーダー) |
|セマンティックギャップ |クエリはドキュメントとは異なる単語を使用しています | **HyDE**、**クエリ拡張** |
|途中で迷った | LLM はプロンプトの途中のチャンクを無視します。 **並べ替え**、**圧縮** |
|単一の取得 | 1 回の検索では不十分 | **セルフ RAG**、**CRAG** |
|キーワード ミス |密な検索では正確な用語が見つからない | **ハイブリッド検索** (BM25 + 密集) |
|複雑なクエリ |複雑なマルチホップの質問 | **マルチクエリ**、**ステップバック** |
|静的パイプライン |堅固なパイプライン | **Agentic RAG** |
|失われた関係 |エンティティ関係をキャプチャしない | **グラフ RAG** |

＃＃＃１．３． RAG 進化マップ

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

## 2. ハイブリッド検索 — スパース + デンス検索

＃＃＃２．１．なぜハイブリッド検索が必要なのでしょうか?

**高密度検索** (埋め込みベース) はセマンティック マッチングには優れていますが、正確なキーワードを見逃します。 **スパース検索** (BM25、TF-IDF) はキーワード マッチングには優れていますが、セマンティクスは理解していません。両方を組み合わせる → 両方の長所を実現します。

|特長 |スパース (BM25) |密 (埋め込み) |ハイブリッド |
|--------|--------------|--------|----------|
|キーワードの完全一致 | ✅ 素晴らしい | ❌ 弱い | ✅ |
|意味の理解 | ❌ なし | ✅ 強い | ✅ |
|タイプミスの許容範囲 | ❌ いいえ | ✅ はい | ✅ |
|頭字語/専門用語 | ✅ 良い | ❌ 見逃す可能性があります | ✅ |
|トレーニングが必要 | ❌ いいえ | ✅ はい | ✅ |
|スピード | ⚡ 非常に速い | 🔄 中程度 | 🔄 中程度 |

＃＃＃２．２．相互ランク融合 (RRF)

RRF は、複数の取得者からの結果をマージするアルゴリズムです。アイデア: ドキュメントが多くのレトリバーで上位に表示される → 高スコア。

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

＃＃＃２．３． LangChainによる実装

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

## 3. 再ランキング — クロスエンコーダーの 2 ステージ パイプライン

＃＃＃３．１．バイエンコーダーとクロスエンコーダー

検索では、**バイエンコーダ** (クエリとドキュメントを別々に埋め込む → コサイン類似度) を使用することがよくあります。ただし、バイエンコーダには制限があります。クエリとドキュメント間の相互作用が認識されないということです。 **クロスエンコーダー** は両方の (クエリ、ドキュメント) ペアを同時に受け入れます → はるかに正確です。

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

＃＃＃３．２． 2 段階の取得パイプライン

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

＃＃＃３．３．人気の再ランカー

|リランカー |モデル |特長 |レイテンシ |精度 |
|----------|----------|---------------|----------|----------|
| Cohereの再ランク | `rerank-v3.5` | API ベース、多言語、使いやすい | ~200ms | ⭐⭐⭐⭐⭐ |
| BGEリランカー | `bge-reranker-v2-m3` |オープンソース、多言語 | ~150ms | ⭐⭐⭐⭐ |
| MSマルコ | `cross-encoder/ms-marco-MiniLM-L-12` |軽量、英語中心 | ~80ms | ⭐⭐⭐ |
|コルバート | `colbert-v2` |遅いインタラクション、効率的 | ～100ミリ秒 | ⭐⭐⭐⭐ |
|ジナ・リランカー | `jina-reranker-v2` | API + オープンソース オプション | ~180ms | ⭐⭐⭐⭐ |
|フラッシュランク | `rank-T5-flan` |超軽量、ローカル | ~30ms | ⭐⭐⭐ |

＃＃＃３．４．実装の再ランキング

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

## 4. クエリ変換 — 検索前にクエリを変換する

＃＃＃４．１．なぜクエリ変換が必要なのでしょうか?

ユーザーのクエリは、多くの場合、短く、曖昧で、または文書以外の単語が使用されています。クエリ変換は、取得前にクエリを変換することで品質を向上させます。

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

＃＃＃４．２． HyDE — 仮説的なドキュメントの埋め込み

HyDE は、クエリ変換グループの中で最も強力な技術です。短いクエリを埋め込む代わりに、LLM を使用して **仮説的な答え** を生成し、その答えを検索用に埋め込みます。これは、答えが文書言語に近いためです。

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

＃＃＃４．３．複数クエリの取得

N 個のクエリのバリエーションを生成 → バリエーションごとに取得 → マージ + 重複排除。

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

＃＃＃４．４．ステップバックプロンプト

特定の質問を直接検索するのではなく、まずより抽象的な質問 (ステップバック質問) を生成し、より広範なコンテキストを取得し、次に元の質問に回答します。

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

＃＃＃４．５。クエリ変換手法の比較

|テクニック |いつ使用するか | LLM コール |レイテンシ |改善点 |
|----------|---------------|---------------|----------|-------------|
|クエリのリライト |短いクエリ、省略形 | 1 | +200ms | 5-10% |
|クエリ拡張 |欠落している同義語/異形 | 1 | +200ms | 5-15% |
|ハイデ |意味上の大きなギャップ | 1 | +500ミリ秒 | 15-25% |
|マルチクエリ |複雑で多面的なクエリ | 1 (→ N クエリ) | +1 | 10-20% |
|ステップバック |質問が具体的すぎます | 1 | +300ms | 10-15% |

> **プロのヒント:** HyDE は、ドキュメントがユーザーのクエリとは異なる言語で書かれている場合に最も効果的です (例: ユーザーが一般的な言語で質問し、ドキュメントが学術言語で書かれている場合)。しかし、LLM がドメインを知らない場合、HyDE は幻覚を起こします。その場合はマルチクエリの方が優れています。

---

## 5. Self-RAG — 検索 → 批評 → 再生成

＃＃＃５．１．セルフRAGのアイデア

Self-RAG (Self-Reflective RAG) は、**自己反射** ステップをパイプラインに追加します。 LLM の自己評価:
1. 取得する必要がありますか?
2. 取得されたチャンクは関連していますか?
3. その回答は証拠によって裏付けられていますか?
4. 回答は役に立ちましたか?

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

＃＃＃５．２． Self-RAGの実装（簡易版）

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

## 6. CRAG — 修正用 RAG

＃＃＃６．１． CRAGのアイデア

CRAG は結果として得られる取得の品質を評価し、3 つの異なるアクションを実行します。

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

＃＃＃６．２．実装 CRAG

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

## 7. Agentic RAG — エージェントがいつ取得するかを決定します

＃＃＃７．１．パイプラインからエージェントまで

Naive/Advanced RAG は **ハード パイプライン** であり、各クエリが取得されて生成されます。 Agentic RAG は、パイプラインを **エージェント ループ** に変えます。エージェントは次のことを自分自身で決定します。
- 取得する必要がありますか、それとも十分な情報がありますか?
- どのソースから取得しますか? (内部ドキュメント、SQL データベース、Web、API)
- 結果は良好ですか? それともさらに検索する必要がありますか?
- 他にツールが必要ですか? (電卓、コードインタープリタ)

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

＃＃＃７．２．ルーター パターン — マルチソース RAG

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

## 8. グラフ RAG — ナレッジ グラフ + ベクトル検索

### 8.1。なぜGraph RAGが必要なのでしょうか?

ベクトル検索では**類似**のチャンクが見つかりますが、エンティティ間の**関係**は理解されません。 Graph RAG は、ナレッジ グラフ (エンティティ → 関係 → エンティティ) とベクトル検索を組み合わせます。

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

### 8.2。グラフ RAG アーキテクチャ

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

## 9. 途中で迷った場合と解決策

＃＃＃９．１．中間喪失問題

スタンフォード大学 (2023) の調査によると、LLM の注意は不均等に分散されており、プロンプトの **最初**と**終わり**に集中し、**中間**の情報は無視されています。

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

＃＃＃９．２．ソリューション

|ソリューション |仕組み |いつ使用するか |
|----------|------|---------------|
| **再注文** |関連するチャンクを先頭と末尾に配置し、関連性の低いチャンクを中間に配置します。常に |
| **圧縮** |チャンクから冗長な情報を要約/削除する |長いチャンク |
| **チャンクの削減** |トップ K を削減 (20 ではなく 5) |リランカーが良いとき |
| **LongContextReorder** |関連性パターンに従ってシャッフルする |デフォルトの戦略 |

```python
from langchain.document_transformers import LongContextReorder

reorder = LongContextReorder()

# Input: [most_relevant, ..., least_relevant]
# Output: [most_relevant, 3rd, 5th, ..., 4th, 2nd]
# → Relevant nhất ở đầu và cuối

reordered_docs = reorder.transform_documents(docs)
```

---

## 10. 本番環境の高度な RAG アーキテクチャ

### 10.1。すべてをまとめる

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

### 10.2。完全なパイプライン コード

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

### 10.3。性能比較

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

### 10.4。意思決定ツリー: どの RAG 戦略を選択するか?

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

## 概要

高度な RAG は、単一の技術を選択することではなく、適切な使用例に応じて適切な技術を組み合わせることが重要です。

**重要なポイント:**

1. **ハイブリッド検索** (BM25 + Dense) をデフォルトのベースラインにする必要があります。実装が簡単で、明らかに改善されています。
2. **再ランキング** (クロスエンコーダー) は「簡単に実現できる成果」です。労力が減り、精度が大幅に向上します @K。
3. **HyDE** は、クエリとドキュメント間のセマンティック ギャップが大きい場合に強力ですが、LLM 呼び出しが 1 つ追加されます。
4. **マルチクエリ**は、多くの側面を持つ複雑な質問に適しています。
5. **Self-RAG / CRAG** は、生産の信頼性にとって重要な自己修正を追加します。
6. **Agentic RAG** は、厳格なパイプラインを柔軟なエージェントに変えます - RAG の未来。
7. **グラフ RAG** エンティティ関係の質問 - 補数ベクトル検索。
8. **途中で失われた**は、並べ替えと圧縮で解決されました。

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

## 演習

### 演習 1: ハイブリッド検索 + 再ランキング パイプライン
BM25 + Dense retrieval と Cohere Rerank (またはオープンソースのクロスエンコーダー) を組み合わせたパイプラインを構築します。データセット 100 以上のドキュメントでテスト:
- Naive RAG vs ハイブリッド vs ハイブリッド + 再ランキング間の Precision@5 の比較
- BM25 と Dense の異なるウェイトをテスト (0.3/0.7、0.5/0.5、0.7/0.3)
- 各ステージのログ遅延

### 演習 2: HyDE とマルチクエリ
HyDE とマルチクエリ リトリーバーの両方を実装します。
- 50 個のテスト質問で再現率 @10 を比較
- どのタイプの質問が HyDE より優れているか、どのタイプのマルチクエリがより優れているかを判断します。
- 両方を組み合わせてみます: HyDE + マルチクエリ → 結果を比較

### 演習 3: 自己 RAG 実装
LangGraph を使用して完全な Self-RAG パイプラインを構築します。
- 4 つの批判トークンを実装します。 `[Retrieve]`、 `[ISREL]`、 `[ISSUP]`、 `[ISUSE]`
- CRAG フォールバックを追加 (検索が不十分な場合の Web 検索)
- 平均リトライ回数と精度の向上を測定
- エージェントの軌跡（思考→行動→観察）を可視化

### 演習 4: 本番 RAG の評価
Advanced RAG の評価パイプラインを構築します。
- RAGAS メトリクスを使用します: 忠実度、回答の関連性、コンテキストの精度、コンテキストの再現率
- 少なくとも 3 つの構成を比較します: Naive、Advanced (ハイブリッド + リランク)、Self-RAG
- 評価結果のダッシュボード視覚化を作成します。
- ボーナス: RAG 構成の A/B テスト フレームワークを実装する
