---
id: 019e0a01-bb08-7001-c001-ee0800000001
title: 'レッスン 8: 埋め込みとセマンティック検索の基礎'
slug: bai-8-embeddings-semantic-search
description: >-
  テキスト埋め込み: 文変換、OpenAI 埋め込み。埋め込みモデルの比較。コサイン類似性、セマンティック検索。チャンク戦略:
  固定サイズ、セマンティック、再帰的。 PDF、Web、データベース用のドキュメント ローダー。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 3: RAG、埋め込み、ベクトル データベース'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **コンピュータは言語を理解せず、数値を理解します。** 埋め込みはテキストをベクトルに変換し、「意味」を高次元空間の座標に変換する橋渡しです。同じ意味を持つ 2 つの文が、その空間内で**互いに近くに**存在します。これは、すべての RAG、セマンティック検索、および推奨システムの基礎です。エンベディングを理解していない → 実戦用 AI エージェントを構築できない。この記事では、ワンホット エンコーディング理論から、完全なセマンティック検索エンジンを構築するための実践的なコードまでを説明します。

## 1. 埋め込みとは何ですか? — ワンホットベクトルから高密度ベクトルへ

＃＃＃１．１．問題: コンピュータはテキストを理解できません

テキストは **非構造化データ**です。すべての ML/DL モデルには数値入力が必要です。問題は、**「意味」を保ったままテキストを数値に変換するにはどうすればよいですか?**

＃＃＃１．２．ワンホット エンコーディング — 古くて限定的な方法

各単語はベクトルであり、1 つの位置のみが 1 に等しく、残りは 0 に等しくなります。

```text
Vocabulary: [cat, dog, fish, bird]

cat  → [1, 0, 0, 0]
dog  → [0, 1, 0, 0]
fish → [0, 0, 1, 0]
bird → [0, 0, 0, 1]
```

**深刻な問題:**

|制限事項 |説明 |
|----------|---------------|
| **セマンティクスなし** |同じ動物であっても、cosine(cat, Dog) = 0 |
| **非常に大きな寸法** |語彙 100K ワード → ベクトル 100K 次元 |
| **疎行列** | 99.99% の値 = 0、メモリを無駄に消費します。
| **一般化しないでください** |新しい単語には表現がありません |

＃＃＃１．３．高密度埋め込み — 画期的なアイデア

スパース ベクトルの代わりに、**各次元が暗黙の「意味」を持つ**、小さいサイズ (256 ～ 3072 次元) の **高密度ベクトル** を使用します。

```text
One-Hot (sparse, high-dim)          Dense Embedding (learned, low-dim)
┌────────────────────────┐          ┌───────────────────────────────┐
│ cat  = [1,0,0,...,0]   │    →     │ cat  = [0.23, -0.45, 0.87, …]│
│ dog  = [0,1,0,...,0]   │    →     │ dog  = [0.25, -0.41, 0.82, …]│
│ fish = [0,0,1,...,0]   │    →     │ fish = [-0.6, 0.31, 0.15, …] │
│                        │          │                               │
│ Dim: 100,000           │          │ Dim: 768                      │
│ cosine(cat,dog) = 0    │          │ cosine(cat,dog) = 0.92 ✓      │
└────────────────────────┘          └───────────────────────────────┘
```

＃＃＃１．４．幾何学的直観 — 意味は距離にある

埋め込みにより **意味空間** が作成されます。似た意味を持つ単語/文は**互いに近い**になります:

```text
        Semantic Space (simplified 2D)
    ▲ dimension_2
    │
    │   ● "happy"
    │       ● "joyful"          ● "king"
    │   ● "glad"                   ● "queen"
    │                                  ● "prince"
    │
    │           ● "sad"
    │       ● "unhappy"
    │   ● "depressed"
    │
    └───────────────────────────────────► dimension_1

     Cluster cảm xúc tích cực   Cluster hoàng gia
     nằm gần nhau               nằm gần nhau
```

注目すべき特性: **ベクトル("王") - ベクトル("男性") + ベクトル("女性") ≈ ベクトル("女王")**。埋め込みにより、概念間の**関係**がエンコードされます。

## 2. テキスト埋め込みモデル — 現在の状況

＃＃＃２．１．文トランスフォーマー (オープンソース)

```python
from sentence_transformers import SentenceTransformer

# Load model — chạy local, free, không cần API key
model = SentenceTransformer("BAAI/bge-m3")

sentences = [
    "Embeddings convert text to vectors",
    "Vector representations of text",
    "How to cook pasta",
]

# Encode → numpy array shape (3, 1024)
embeddings = model.encode(sentences, normalize_embeddings=True)

print(f"Shape: {embeddings.shape}")       # (3, 1024)
print(f"Type: {type(embeddings[0])}")     # numpy.ndarray
```

**利点**: 無料、ローカルで実行、プライバシー保護、豊富なオプション。
**短所**: 速度を上げるには GPU が必要で、大きなモデルは RAM を消費します。

＃＃＃２．２． OpenAI テキスト埋め込み-3

```python
from openai import OpenAI

client = OpenAI()

response = client.embeddings.create(
    model="text-embedding-3-large",
    input=["Embeddings convert text to vectors"],
    dimensions=1024  # Có thể giảm dimension (Matryoshka)
)

embedding = response.data[0].embedding
print(f"Dimensions: {len(embedding)}")  # 1024
```

**マトリョーシカの埋め込み**: OpenAI `text-embedding-3-*` 高品質を維持しながら寸法の縮小をサポートし、ストレージとコストを節約します。

＃＃＃２．３． Cohere 埋め込み v4

```python
import cohere

co = cohere.ClientV2()

response = co.embed(
    texts=["Embeddings convert text to vectors"],
    model="embed-v4.0",
    input_type="search_document",
    embedding_types=["float"],
)

embedding = response.embeddings.float_[0]
print(f"Dimensions: {len(embedding)}")  # 1536
```

＃＃＃２．４．航海AI

```python
import voyageai

vo = voyageai.Client()

result = vo.embed(
    texts=["Embeddings convert text to vectors"],
    model="voyage-3-large",
    input_type="document",
)

embedding = result.embeddings[0]
print(f"Dimensions: {len(embedding)}")  # 1024
```

## 3. 埋め込みモデルの比較

|モデル |プロバイダー |ディム |最大トークン |多言語 |コスト/100万トークン | MTEB スコア |メモ |
|----------|----------|-----|----------|-------------|-----------|-------------|-----------|
| `text-embedding-3-large` |オープンAI | 3072* | 8191 | ✅ | ~0.13ドル | ~64.6 | *マトリョーシカ: 減らすことができます |
| `text-embedding-3-small` |オープンAI | 1536* | 8191 | ✅ | ~$0.02 | ~62.3 |最安の API ベース |
| `embed-v4.0` |コヒア | 1536年 | 512 | ✅ | ~0.10ドル | ~66.1 |バイナリ埋め込みのサポート |
| `voyage-3-large` |航海AI | 1024 | 32000 | ✅ | ~$0.18 | ~67.2 |コンテキスト ウィンドウ 大 |
| `BAAI/bge-m3` |オープンソース | 1024 | 8192 | ✅ 100+ |無料 | ～65.0 |密 + 疎 + ColBERT |
| `nomic-embed-text` |オープンソース | 768 | 8192 |制限事項 |無料 | ~62.4 |軽量、CPU で良好に動作 |
| `all-MiniLM-L6-v2` |オープンソース | 384 | 256 | ❌ 英語のみ |無料 | ~56.3 |最速、最小 |

> **注:** MTEB スコアはベンチマーク バージョンによって異なります。常にチェックする [huggingface.co/spaces/mteb/leaderboard](https://huggingface.co/spaces/mteb/leaderboard) 最新の番号については。

＃＃＃３．１．モデルの選択方法 — デシジョン ツリー

```text
Chọn Embedding Model — Decision Tree
─────────────────────────────────────
                ┌──────────────┐
                │ Có budget cho│
                │  API cost?   │
                └──────┬───────┘
                  Yes  │  No
            ┌──────────┴──────────┐
            ▼                     ▼
    ┌───────────────┐    ┌────────────────┐
    │ Cần top-tier  │    │  Có GPU?       │
    │ quality?      │    └───────┬────────┘
    └───────┬───────┘       Yes  │  No
       Yes  │  No       ┌───────┴────────┐
    ┌───────┴───────┐   ▼                ▼
    ▼               ▼  bge-m3       nomic-embed
 voyage-3-large  text-embed-3    all-MiniLM-L6-v2
 (best quality)  -small (cheap)  (CPU-friendly)
```

## 4. 距離メトリクス — コサイン、ドット積、ユークリッド

＃＃＃４．１． 3 つの主要な指標

```python
import numpy as np

def cosine_similarity(a, b):
    """Đo góc giữa 2 vectors. Range: [-1, 1]. 1 = giống nhất."""
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

def dot_product(a, b):
    """Tích vô hướng. Range: (-∞, +∞). Lớn hơn = giống hơn."""
    return np.dot(a, b)

def euclidean_distance(a, b):
    """Khoảng cách Euclid. Range: [0, +∞). Nhỏ hơn = giống hơn."""
    return np.linalg.norm(a - b)

# Demo
a = np.array([0.23, -0.45, 0.87, 0.12])
b = np.array([0.25, -0.41, 0.82, 0.15])
c = np.array([-0.60, 0.31, 0.15, -0.88])

print(f"cosine(a,b) = {cosine_similarity(a,b):.4f}")  # ~0.998 (rất giống)
print(f"cosine(a,c) = {cosine_similarity(a,c):.4f}")  # ~-0.65 (khác nhiều)
print(f"euclid(a,b) = {euclidean_distance(a,b):.4f}") # ~0.08 (rất gần)
print(f"euclid(a,c) = {euclidean_distance(a,c):.4f}") # ~2.10 (rất xa)
```

＃＃＃４．２．いつどの指標を使用するか?

|メトリクス |いつ使用するか |注 |
|----------|---------------|----------|
| **コサイン類似度** |ほとんどの使用例のデフォルト。埋め込みが正規化されました |大きさは考慮せず、方向のみを考慮します。
| **内積** |規模が重要な場合 (人気度、関連性スコア) |コサインより高速 (正規化をスキップ) |
| **ユークリッド (L2)** |絶対距離が必要な場合のクラスタリング |スケールの影響を受ける |

> **実用的なヒント:** ほとんどの埋め込みモデルは **出力を正規化します** (単位ベクトル)。正規化したら: `cosine_similarity = dot_product`。どれを使用しても、ドット積の方が高速です。

```text
Normalized Vectors:  ‖v‖ = 1

   cosine(a,b) = dot(a,b) / (‖a‖ × ‖b‖)
               = dot(a,b) / (1 × 1)
               = dot(a,b)           ← tương đương!
```

## 5. チャンク戦略の詳細

＃＃＃５．１．なぜチャンク化するのか?

埋め込みモデルには **トークン制限** (通常は 512 ～ 8192 トークン) があります。長いドキュメントは、埋め込む前に **チャンクに分割**する必要があります。チャンク化は検索の品質に大きく影響します。

```text
Document dài (10,000 tokens)
┌──────────────────────────────────────────────────────────┐
│ Lorem ipsum dolor sit amet... (quá dài cho embedding)    │
└──────────────────────────┬───────────────────────────────┘
                           │ Chunking
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
   ┌──────────┐      ┌──────────┐      ┌──────────┐
   │ Chunk 1  │      │ Chunk 2  │      │ Chunk 3  │
   │ 500 tok  │      │ 500 tok  │      │ 500 tok  │
   └──────────┘      └──────────┘      └──────────┘
        │                  │                  │
        ▼                  ▼                  ▼
   [0.2, -0.1,...]   [0.5, 0.3,...]   [-0.1, 0.7,...]
   Embedding 1        Embedding 2       Embedding 3
```

＃＃＃５．２．固定サイズのチャンク化

最も簡単な方法: 文字/トークンの固定数に切り分けます。

```python
from langchain.text_splitter import CharacterTextSplitter

splitter = CharacterTextSplitter(
    separator="\n\n",     # Cắt ưu tiên theo paragraph
    chunk_size=1000,      # Tối đa 1000 ký tự
    chunk_overlap=200,    # Overlap 200 ký tự giữa chunks
)

chunks = splitter.split_text(document_text)
```

**利点**: シンプルで実装が簡単で、チャンク サイズが予測可能です。
**短所**: 文やアイデアの途中でカットされ、文脈が失われる可能性があります。

＃＃＃５．３．再帰的な文字分割

階層に従ってカットしてみてください。 `\n\n` → `\n` → `. ` → ` ` → `""`。段落や文をそのままの状態に保つことを優先します。

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    separators=["\n\n", "\n", ". ", " ", ""],
    length_function=len,
)

chunks = splitter.split_text(document_text)
print(f"Tạo {len(chunks)} chunks")
```

**これは、ほとんどのユースケースにおけるデフォルトの選択**であり、シンプルさと品質のバランスが保たれています。

＃＃＃５．４．セマンティックチャンク化

**意味の変更**に基づいてカット — 2 つの連続する文間の埋め込みがあまりにも異なる場合 → 新しいチャンクを作成します。

```python
from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

chunker = SemanticChunker(
    embeddings,
    breakpoint_threshold_type="percentile",
    breakpoint_threshold_amount=75,  # Top 25% distance → break
)

chunks = chunker.split_text(document_text)
```

```text
Semantic Chunking — How it works

Câu 1  Câu 2  Câu 3  Câu 4  Câu 5  Câu 6  Câu 7
  ●──────●──────●      ●──────●      ●──────●
  │ sim=0.92   sim=0.88│ sim=0.91    │ sim=0.89
  │                     │             │
  │  distance < threshold → same chunk│
  │                     │             │
  └─── Chunk 1 ────┘   └─ Chunk 2 ─┘ └ Chunk 3 ┘
     (topic A)          (topic B)     (topic C)

  Khi cosine distance giữa 2 câu liên tiếp > threshold
  → tạo breakpoint → chunk mới
```

＃＃＃５．５。ドキュメント対応のチャンク化

ドキュメントの構造 (見出し、セクション) を利用して、よりスマートにチャンク化します。

```python
from langchain.text_splitter import MarkdownHeaderTextSplitter

headers_to_split = [
    ("#", "Header 1"),
    ("##", "Header 2"),
    ("###", "Header 3"),
]

splitter = MarkdownHeaderTextSplitter(headers_to_split)
chunks = splitter.split_text(markdown_text)

# Mỗi chunk giữ metadata headers
for chunk in chunks:
    print(f"Content: {chunk.page_content[:100]}...")
    print(f"Headers: {chunk.metadata}")
    # Output: Headers: {"Header 1": "Chapter 1", "Header 2": "Section 1.2"}
```

＃＃＃５．６．チャンキング戦略の比較

|戦略 |品質 |スピード |複雑さ |こんな方に最適 |
|----------|-----------|----------|----------|----------|
| **固定サイズ** | ⭐⭐ | ⭐⭐⭐⭐⭐ |低い |プロトタイプ、プレーンテキスト |
| **再帰的** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |低い | **デフォルトの選択** |
| **セマンティック** | ⭐⭐⭐⭐⭐ | ⭐⭐ |曹操 |高品質ラグ |
| **ドキュメント対応** | ⭐⭐⭐⭐ | ⭐⭐⭐ |平均 |マークダウン、HTML、コード |

## 6. チャンク サイズとオーバーラップ — トレードオフとベスト プラクティス

＃＃＃６．１．チャンク サイズ — 精度とコンテキストのバランス

```text
Chunk Size Tradeoffs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Small chunks (128-256 tokens)
├─ ✅ Precise retrieval — tìm đúng đoạn liên quan
├─ ✅ Ít noise — chunk chỉ chứa 1 ý
├─ ❌ Mất context — không đủ thông tin xung quanh
└─ ❌ Nhiều chunks → embedding cost cao hơn

Large chunks (1024-2048 tokens)
├─ ✅ Giữ context đầy đủ — đủ thông tin cho LLM
├─ ✅ Ít chunks → embedding cost thấp hơn
├─ ❌ Recall thấp hơn — nhiều noise trong chunk
└─ ❌ Có thể trộn nhiều topics trong 1 chunk
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

＃＃＃６．２．オーバーラップ — チャンク間の連続性を維持します

オーバーラップは、2 つのチャンク間の **境界での情報の損失を回避**するのに役立ちます。

```text
Không overlap:                    Có overlap (200 chars):
┌──────────┐┌──────────┐         ┌──────────────┐
│ Chunk 1  ││ Chunk 2  │         │   Chunk 1    │
│  "...AI  ││ models   │         │  "...AI      │
│  agent"  ││ need..." │         │  agent models│
└──────────┘└──────────┘         └───┬──────────┘
  ↑ mất context!                     │ overlap
                                 ┌───┴──────────┐
                                 │   Chunk 2    │
                                 │ "agent models│
                                 │  need..."    │
                                 └──────────────┘
```

＃＃＃６．３．経験から得たベストプラクティス

|パラメータ |推奨範囲 |理由 |
|----------|-----------|----------|
| **チャンク サイズ** | 500 ～ 1000 文字 (約 128 ～ 256 トークン) |精度とコンテキストのバランスをとる |
| **オーバーラップ** | chunk_size の 10 ～ 20% |境界コンテキストを保持する |
| **区切り文字の優先度** | `\n\n` → `\n` → `. ` → ` ` |自然な境界を優先する |

```python
# Production-recommended config
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=800,       # ~200 tokens — sweet spot
    chunk_overlap=150,    # ~19% overlap
    separators=["\n\n", "\n", ". ", " ", ""],
    length_function=len,
    is_separator_regex=False,
)
```

> **ヒント:** 普遍的な「最適なチャンク サイズ」はありません。決定する前に、必ず取得メトリクス (セクション 9) を使用して **実際のデータを評価**してください。

## 7. ドキュメント ローダー — あらゆる種類のデータ ソースを読み取ります

＃＃＃７．１． PDF — PyMuPDF + 非構造化

```python
# Option 1: PyMuPDF — nhanh, chính xác cho text-based PDFs
from langchain_community.document_loaders import PyMuPDFLoader

loader = PyMuPDFLoader("report.pdf")
docs = loader.load()
print(f"Loaded {len(docs)} pages")
print(docs[0].page_content[:200])

# Option 2: Unstructured — xử lý PDFs phức tạp (tables, images)
from langchain_community.document_loaders import UnstructuredPDFLoader

loader = UnstructuredPDFLoader(
    "complex_report.pdf",
    mode="elements",       # Tách từng element (title, text, table)
    strategy="hi_res",     # OCR cho scanned PDFs
)
docs = loader.load()
```

＃＃＃７．２． Web ページ — BeautifulSoup と WebBaseLoader

```python
from langchain_community.document_loaders import WebBaseLoader
import bs4

# Load web page, parse chỉ main content
loader = WebBaseLoader(
    web_paths=["https://example.com/article"],
    bs_kwargs={
        "parse_only": bs4.SoupStrainer(
            class_=("post-content", "article-body")
        )
    },
)
docs = loader.load()
```

＃＃＃７．３． CSVとJSON

```python
from langchain_community.document_loaders import CSVLoader, JSONLoader

# CSV — mỗi row = 1 document
csv_loader = CSVLoader(
    "products.csv",
    csv_args={"delimiter": ","},
    source_column="product_id",
)
csv_docs = csv_loader.load()

# JSON — dùng jq-style schema
json_loader = JSONLoader(
    file_path="articles.json",
    jq_schema=".articles[]",
    content_key="body",
    metadata_func=lambda record, metadata: {
        **metadata,
        "title": record.get("title"),
        "author": record.get("author"),
    },
)
json_docs = json_loader.load()
```

＃＃＃７．４．ドキュメントローダー決定表

|出典 |ローダー |いつ使用するか |
|----------|----------|---------------|
| **PDF (テキストベース)** | `PyMuPDFLoader` |高速、小文字の PDF |
| **PDF (スキャン/複合)** | `UnstructuredPDFLoader` | OCR、テーブル、画像が必要 |
| **ウェブページ** | `WebBaseLoader` |記事、ドキュメントをクロールする |
| **CSV** | `CSVLoader` |構造化データ、各行 = 1 ドキュメント |
| **JSON** | `JSONLoader` | API 応答、構造化エクスポート |
| **マークダウン** | `UnstructuredMarkdownLoader` |ドキュメント、メモ |
| **データベース** | SQLAlchemy + カスタム |クエリ結果をドキュメントに変換する |

## 8. 実践: セマンティック検索エンジンの構築

これは**本当の戦い**の部分であり、完全なセマンティック検索エンジンをゼロから構築します。

### 8.1。アーキテクチャの概要

```text
Semantic Search Engine — Architecture
═════════════════════════════════════════════════════════════

  INDEXING PIPELINE (offline, run once)
  ┌────────────┐    ┌────────────┐    ┌───────────────┐
  │  Documents  │───→│  Chunking  │───→│   Embedding   │
  │  (PDF,Web)  │    │  (Recursive│    │   (BGE-M3 /   │
  │             │    │   800 char)│    │    OpenAI)     │
  └────────────┘    └────────────┘    └───────┬───────┘
                                              │
                                              ▼
                                    ┌───────────────────┐
                                    │   Vector Store    │
                                    │  (NumPy / FAISS)  │
                                    └───────────────────┘

  QUERY PIPELINE (online, per query)
  ┌────────────┐    ┌────────────┐    ┌───────────────┐
  │   Query    │───→│  Embedding │───→│  Similarity   │
  │  (user)    │    │ (same model│    │   Search      │
  │            │    │  as index) │    │  (top-k)      │
  └────────────┘    └────────────┘    └───────┬───────┘
                                              │
                                              ▼
                                    ┌───────────────────┐
                                    │  Ranked Results   │
                                    │  (score + chunk)  │
                                    └───────────────────┘
```

### 8.2。ステップ 1 — 環境を準備する

```bash
pip install sentence-transformers langchain langchain-community \
    pymupdf numpy scikit-learn rich
```

### 8.3。ステップ 2 — ドキュメントのロードとチャンク化

```python
import os
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import (
    PyMuPDFLoader,
    TextLoader,
    DirectoryLoader,
)

# Load tất cả .txt files trong thư mục
loader = DirectoryLoader(
    "./documents/",
    glob="**/*.txt",
    loader_cls=TextLoader,
    loader_kwargs={"encoding": "utf-8"},
)
docs = loader.load()
print(f"Loaded {len(docs)} documents")

# Chunk documents
splitter = RecursiveCharacterTextSplitter(
    chunk_size=800,
    chunk_overlap=150,
    separators=["\n\n", "\n", ". ", " ", ""],
)
chunks = splitter.split_documents(docs)
print(f"Created {len(chunks)} chunks")

# Xem sample chunk
print(f"\n--- Sample Chunk ---")
print(f"Content: {chunks[0].page_content[:200]}...")
print(f"Metadata: {chunks[0].metadata}")
```

### 8.4。ステップ 3 — 埋め込みとインデックス付け

```python
import numpy as np
from sentence_transformers import SentenceTransformer

# Load embedding model
embed_model = SentenceTransformer("BAAI/bge-m3")

# Embed all chunks
texts = [chunk.page_content for chunk in chunks]
embeddings = embed_model.encode(
    texts,
    normalize_embeddings=True,  # Normalize cho cosine similarity
    show_progress_bar=True,
    batch_size=32,
)

# Save index (simple numpy)
np.save("embeddings.npy", embeddings)
print(f"Index shape: {embeddings.shape}")  # (num_chunks, 1024)
```

＃＃＃８．５。ステップ 4 — 検索機能

```python
import numpy as np
from sentence_transformers import SentenceTransformer

class SemanticSearchEngine:
    def __init__(self, model_name="BAAI/bge-m3"):
        self.model = SentenceTransformer(model_name)
        self.embeddings = None
        self.chunks = None

    def index(self, chunks):
        """Index a list of document chunks."""
        self.chunks = chunks
        texts = [c.page_content for c in chunks]
        self.embeddings = self.model.encode(
            texts, normalize_embeddings=True, show_progress_bar=True
        )
        print(f"Indexed {len(chunks)} chunks")

    def search(self, query: str, top_k: int = 5) -> list[dict]:
        """Search for the most relevant chunks."""
        # Embed query
        query_emb = self.model.encode(
            [query], normalize_embeddings=True
        )[0]

        # Cosine similarity (= dot product khi normalized)
        scores = self.embeddings @ query_emb

        # Top-k indices
        top_indices = np.argsort(scores)[::-1][:top_k]

        results = []
        for idx in top_indices:
            results.append({
                "rank": len(results) + 1,
                "score": float(scores[idx]),
                "content": self.chunks[idx].page_content,
                "metadata": self.chunks[idx].metadata,
            })
        return results

# --- Usage ---
engine = SemanticSearchEngine()
engine.index(chunks)

results = engine.search("What are embeddings used for?", top_k=3)
for r in results:
    print(f"\n[Rank {r['rank']}] Score: {r['score']:.4f}")
    print(f"Source: {r['metadata'].get('source', 'N/A')}")
    print(f"Content: {r['content'][:200]}...")
```

### 8.6。ステップ5 — リッチで美しい出力

```python
from rich.console import Console
from rich.table import Table
from rich.panel import Panel

console = Console()

def pretty_search(engine, query, top_k=5):
    console.print(Panel(f"[bold cyan]Query:[/] {query}", expand=False))

    results = engine.search(query, top_k=top_k)

    table = Table(title="Search Results", show_lines=True)
    table.add_column("Rank", style="bold", width=5)
    table.add_column("Score", width=8)
    table.add_column("Source", width=25)
    table.add_column("Content Preview", width=60)

    for r in results:
        source = r["metadata"].get("source", "N/A")
        preview = r["content"][:150].replace("\n", " ") + "..."
        table.add_row(
            str(r["rank"]),
            f"{r['score']:.4f}",
            source,
            preview,
        )

    console.print(table)

# Demo
pretty_search(engine, "How to fine-tune a language model?")
```

## 9. 評価 - 取得メトリクス

＃＃＃９．１．なぜ検索を評価するのでしょうか?

検索エンジンは 5 つの結果を返しますが、**正しいものはいくつあるでしょうか?** そして、**正しいものは上位に表示されますか?** だからこそ、検索指標が必要です。

＃＃＃９．２．最も重要な 3 つの指標

|メトリクス |レシピ |意味 |
|----------|----------|----------|
| **Recall@k** | (上位 k の関連ドキュメント) / (関連ドキュメントの合計) |ドキュメントの何％が正しいですか? |
| **MRR** | 1 / 関連する最初の順位 |最初の正しいドキュメントはどこにありますか? |
| **NDCG@k** |正規化された DCG@k |正しいドキュメントが一番上にありますか? (位置的に重み付け) |

＃＃＃９．３．計算例

```text
Query: "What are embeddings?"

Ground truth relevant docs: {D2, D5, D8}

Search results (top-5): [D3, D2, D7, D5, D1]
                          ❌   ✅   ❌   ✅   ❌

Recall@5 = 2/3 = 0.667  (tìm được 2/3 docs relevant)
MRR       = 1/2 = 0.500  (doc relevant đầu tiên ở rank 2)
```

＃＃＃９．４．実装

```python
import numpy as np

def recall_at_k(retrieved_ids: list, relevant_ids: set, k: int) -> float:
    """Recall@k: fraction of relevant docs found in top-k."""
    retrieved_set = set(retrieved_ids[:k])
    return len(retrieved_set & relevant_ids) / len(relevant_ids)

def mrr(retrieved_ids: list, relevant_ids: set) -> float:
    """Mean Reciprocal Rank: 1/rank of first relevant result."""
    for i, doc_id in enumerate(retrieved_ids):
        if doc_id in relevant_ids:
            return 1.0 / (i + 1)
    return 0.0

def ndcg_at_k(retrieved_ids: list, relevant_ids: set, k: int) -> float:
    """NDCG@k: position-weighted relevance score."""
    dcg = 0.0
    for i, doc_id in enumerate(retrieved_ids[:k]):
        rel = 1.0 if doc_id in relevant_ids else 0.0
        dcg += rel / np.log2(i + 2)  # i+2 vì log2(1) = 0

    # Ideal DCG (all relevant docs ở top)
    ideal_rels = sorted(
        [1.0 if did in relevant_ids else 0.0 for did in retrieved_ids[:k]],
        reverse=True,
    )
    idcg = sum(r / np.log2(i + 2) for i, r in enumerate(ideal_rels))

    return dcg / idcg if idcg > 0 else 0.0

# --- Ví dụ ---
retrieved = ["D3", "D2", "D7", "D5", "D1"]
relevant = {"D2", "D5", "D8"}

print(f"Recall@5: {recall_at_k(retrieved, relevant, 5):.3f}")  # 0.667
print(f"MRR:      {mrr(retrieved, relevant):.3f}")              # 0.500
print(f"NDCG@5:   {ndcg_at_k(retrieved, relevant, 5):.3f}")    # 0.653
```

＃＃＃９．５。評価のベストプラクティス

```text
Retrieval Eval Workflow
━━━━━━━━━━━━━━━━━━━━━
1. Tạo evaluation dataset (query → relevant doc IDs)
   ├─ Manual labeling (chính xác nhất)
   ├─ LLM-generated (nhanh, cần spot-check)
   └─ Click-through logs (production data)

2. Run search cho mỗi query → retrieved IDs

3. Tính metrics: Recall@5, MRR, NDCG@10

4. So sánh khi thay đổi:
   ├─ Embedding model
   ├─ Chunk size / overlap
   ├─ Distance metric
   └─ Re-ranking strategy

5. Pick config cho Recall@5 > 0.85 & MRR > 0.6
```

> **ヒント:** 運用環境では、RAG パイプラインにとって **Recall@k が最も重要です**。検索で関連する文書が見つからない場合、LLM は幻覚を起こします。ターゲットリコール@5 ≥ 0.85。

## 概要

この記事では、セマンティック検索のすべての**基礎**、つまりすべての RAG システムの基礎について説明します。

|コンセプト |重要なポイント |
|----------|---------------|
| **埋め込み** |テキスト変数 → 密ベクトル、セマンティックな意味を維持 |
| **モデルの選択** | `bge-m3` オープンソースの場合、 `text-embedding-3-small` 予算に優しい API 用 |
| **距離メトリック** |コサイン類似度はデフォルトです。正規化 → コサイン = ドット積 |
| **チャンク** | `RecursiveCharacterTextSplitter` がデフォルトです。 500 ～ 1000 文字、10 ～ 20% の重複 |
| **ドキュメントローダー** | PDF 用 PyMuPDF、Web 用 WebBaseLoader、CSV 用 CSVLoader |
| **検索パイプライン** |埋め込み → インデックス → クエリ → ランク → トップを返す |
| **評価** | Recall@k、MRR、NDCG — ターゲット Recall@5 ≥ 0.85 |

```text
Bài 8 Knowledge Map
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    Embeddings
                    (dense vectors)
                        │
          ┌─────────────┼──────────────┐
          ▼             ▼              ▼
     Embedding      Chunking      Distance
      Models       Strategies      Metrics
    (bge-m3,       (recursive,    (cosine,
     OpenAI)       semantic)      dot product)
          │             │              │
          └─────────────┼──────────────┘
                        ▼
               Semantic Search
                  Engine
                    │
            ┌───────┴───────┐
            ▼               ▼
        Document         Retrieval
        Loaders          Evaluation
     (PDF, Web, CSV)   (Recall, MRR)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 演習

### 演習 1: 独自のセマンティック検索を構築する (基本)

任意の **10 個の記事**に対するセマンティック検索エンジンを作成します。

1. テキスト記事 10 件をフォルダーにダウンロード/コピーします `./documents/`
2.実装する `SemanticSearchEngine` クラス (セクション 8)
3. すべてのドキュメントにインデックスを付ける
4. 5 つの異なるクエリで検索をテストする
5. モデル間で結果を比較する `all-MiniLM-L6-v2` そして `bge-m3`

**成果物**: Python スクリプトを実行して、各クエリの上位 3 位の結果を出力できます。

### 演習 2: チャンク実験 (中)

チャンク化が検索品質に及ぼす影響を比較します。

1. 同じドキュメントのセットを使用します (10 ページ以上)
2. 異なるチャンク構成を使用して 4 つのインデックス バージョンを作成します。
   - `chunk_size=256, overlap=50`
   - `chunk_size=512, overlap=100`
   - `chunk_size=1024, overlap=200`
   - `SemanticChunker` (OpenAI APIキーが必要)
3. 10 個のクエリと回答のペア (グラウンド トゥルース) を作成します。
4. 各構成の Recall@5 と MRR を計算します。
5. 表を描いて結果を比較する

**成果物**: 分析と結論を含む Jupyter Notebook。

### 演習 3: マルチソース検索エンジン (上級)

**多くの種類のデータ ソース**を処理するセマンティック検索エンジンを構築します。

1. 少なくとも 3 つのソースからドキュメントをロードします: PDF + Web + CSV
2. メタデータ フィルタリングを実装します (例: PDF 内のみを検索)
3. ハイブリッド スコアリングを実装します。 `final_score = 0.7 * semantic_score + 0.3 * keyword_score`
4. クロスエンコーダーを使用して再ランキングを追加します (`ms-marco-MiniLM-L-6-v2`）
5. CLI インターフェイスを構築します。 `python search.py --query "..." --source pdf --top 5`

**成果物**: README、テスト、デモ出力を含む GitHub リポジトリ。
