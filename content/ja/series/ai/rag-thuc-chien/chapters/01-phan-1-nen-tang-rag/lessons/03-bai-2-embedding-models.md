---
id: 019c9619-ff02-7002-a002-ff0200000002
title: 'レッスン 2: モデルの埋め込み — テキストをベクトルに変換する'
slug: bai-2-embedding-models
description: >-
  埋め込みとは何ですか?なぜ重要ですか?モデルの比較: OpenAI text-embedding-3、Cohere
  embed-v3、Sentence-Transformers、BGE。ベンチマークパフォーマンス。ベトナム語の多言語埋め込み。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: RAG プラットフォーム'
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: リアルバトルRAG：基礎から上級まで
  slug: rag-thuc-chien
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI と ML — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: モデルの埋め込み — テキストを</tspan>
      <tspan x="60" dy="42">ベクトル</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">リアルバトルRAG：基礎から上級まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: RAG プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

前回の記事では、RAG が検索のために **テキストをベクターに変換**する必要があることを見ました。しかし、具体的に「テキストをベクターに変換する」とは何を意味するのでしょうか?これが RAG パイプラインで **最も重要**なステップであるのはなぜですか?

> **事実:** 埋め込みモデルは RAG の **品質の 70%** を決定します。間違ったモデルを選択 = レトリーバーは間違ったドキュメントを検出 = LLM は間違った答えを返します。

---

## 1. 埋め込みとは何ですか?

### 1.1 主なアイデア

**実際の例:** 図書館を整理していると想像してください。本は**トピック別に並べる**必要があります。料理本は栄養学の本の近く、プログラミング本は数学の本の近くにあります。

埋め込みでも同じことが行われます。つまり、テキストを高次元空間の **座標**に変換し、**互いに近い**意味を持つテキストが**互いに近い**座標を持つようにします。

```
"Con mèo đang ngủ trên ghế"    → [0.82, -0.15, 0.43, ...]
"Chú mèo nằm nghỉ trên sofa"  → [0.80, -0.13, 0.45, ...]  ← GẦN! ✅
"Giá Bitcoin hôm nay"          → [-0.55, 0.72, -0.31, ...]  ← XA!  ❌
```

### 1.2 なぜ埋め込みが必要なのでしょうか?

コンピュータは **テキストを理解できません**。**数値**のみを理解します。埋め込みは橋渡しです:

```
Text (con người hiểu)                    Vector (máy tính hiểu)
"Chính sách nghỉ phép"    ──────────>     [0.23, -0.15, 0.87, ...]
"Quy định ngày phép"      ──────────>     [0.25, -0.12, 0.85, ...]
                                           ↑ Cosine similarity = 0.97!
```

**コサイン類似度** = 2 つのベクトル間の「角度」を測定します。
- 1.0 = 同一
- 0.0 = 関連しない
- -1.0 = 逆の意味

### 1.3 比較: キーワード検索とセマンティック検索

| |キーワード検索(BM25) |セマンティック検索 (埋め込み) |
|--|---------------------|--------------------------|
| **仕組み** | **完全一致**のキーワードを検索します。類似の**意味**を検索 |
| **「退職ポリシー」と「退職ポリシー」** | ❌ 見つかりません (別の言語) | ✅見つかった（同じ意味） |
| **「自動運転車」と「自動運転車」** | ❌ | ✅ |
| **タイプミス/類義語** | ❌ 「疑わしい」は一致しません | ✅それでも大体わかる |
| **いつが良いですか** |正確な用語 (コード、固有名) |自然言語 |

---

## 2. 一般的な埋め込みモデル

### 2.1 比較表

|モデル |プロバイダー |寸法 |強み |価格 |
|----------|----------|---------------|----------|----------|
| **text-embedding-3-small** |オープンAI | 1536年 |軽くて安くて、ほとんどの人には十分 | $0.02/100万トークン |
| **text-embedding-3-large** |オープンAI | 3072 |より正確に言えば、優れた多言語 | $0.13/100万トークン |
| **埋め込みv3** |コヒア | 1024 |優れた多言語、search_type | $0.10/100万トークン |
| **all-MiniLM-L6-v2** |文-トランスフォーマー | 384 |無料、軽量、ローカルで実行 |無料 |
| **bge-large-en-v1.5** |ばい | 1024 |無料、SOTA 品質 |無料 |
| **多言語-e5-large** |マイクロソフト | 1024 |無料で優れた多言語 |無料 |

### 2.2 実践: 3 つのモデルを比較する

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

**期待される出力:**
```
✅ [0] vs [1]: 0.9234   ← "Nghỉ phép" ≈ "Ngày phép" → GẦN!
❌ [0] vs [2]: 0.3421   ← "Nghỉ phép" ≠ "Bảng giá" → XA!
✅ [0] vs [3]: 0.8567   ← Tiếng Việt ≈ Tiếng Anh cùng ý → GẦN!
```

### 2.3 オープンソース: 文トランスフォーマー

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

> **💡 演習 2:** 上記の OpenAI または Sentence-Transformers コードを実行します。ベトナム語の文を 3 つ追加します。同じトピックに関する 2 つの文と、異なる 1 つの文です。予想どおりの類似性ですか?

---

## 3. ベトナム語の埋め込み

### 3.1 問題

ほとんどの埋め込みモデルは主に **英語** でトレーニングされます。ベトナム語の埋め込みは劣る可能性があります。

```
Tiếng Anh: "leave policy" ≈ "vacation rules"  → similarity: 0.92 ✅
Tiếng Việt: "nghỉ phép"   ≈ "ngày phép"       → similarity: 0.78 ✅ (thấp hơn)
Cross-lingual: "nghỉ phép" ≈ "leave policy"    → similarity: 0.65 ⚠️ (hơi thấp)
```

### 3.2 モデルはベトナム人に適しています

|モデル |ベトナム語 |品質 |メモ |
|----------|-----------|---------------|----------|
| **text-embedding-3-large** (OpenAI) | ✅ 良い | ⭐⭐⭐⭐⭐ |有料、最高 |
| **embed-multilingual-v3** (Cohere) | ✅ とても良い | ⭐⭐⭐⭐⭐ |有料、多言語対応 |
| **多言語-e5-large** (Microsoft) | ✅ 良い | ⭐⭐⭐⭐ |無料、ローカルで実行 |
| **言い換え-多言語-MiniLM** | ✅ わかりました | ⭐⭐⭐ |無料、軽量 |
| **all-MiniLM-L6-v2** | ⚠️英語中心 | ⭐⭐ (テレビ) |無料だが弱いテレビ |

### 3.3 ベトナム語の簡単なベンチマーク

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

> **💡 演習 3:** 上記のベンチマークを実行します。どのモデルがベトナム語で最良の結果をもたらしますか?結論を記録します。

---

## 4. 埋め込みモデルの選択 — 意思決定フレームワーク

### 4.1 意思決定のフローチャート

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

### 4.2 実践的なヒント

|ヒント |説明 |
|-----|----------|
| **OpenAI を始めましょう** |最も簡単、高品質、安価なプロトタイプ |
| **実際のデータを使用したテスト** |ベンチマークを使用するだけでなく、ドメイン データでテストしてください。
| **寸法は重要です** | 384 vs 1024 vs 3072: 高いほど精度が高くなりますが、ストレージを消費します。
| **キャッシュ埋め込み** |一度埋め込むとベクター DB に保存されるため、クエリごとに再埋め込む必要はありません |
| **バッチ処理** |複数のテキストを 1 つずつ送信するのではなく一度に送信 → より速く + 安価 |

---

## 5. 埋め込みコストを計算する

### 5.1 見積もり

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

> **結論:** 埋め込みは非常に安価です。 RAG で最もコストがかかる部分は、埋め込みではなく **LLM 生成**です。

> **💡 演習 5:** 会社/学校のナレッジ ベースに埋め込むコストを見積もります。書類は何枚ですか？トークンは何枚ですか?月額料金 (月に 1 回再埋め込んだ場合)?

---

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| **埋め込み** |変数テキスト → ベクトル、同じテキスト = ベクトルを閉じる |
| **コサイン類似度** | 2 つのベクトル間の「類似性」を測定します (0→1) |
| **セマンティックとキーワード** |意味による埋め込み検索、完全に一致する単語のキーワード検索 |
| **ベトナム語** |多言語モデルを使用する (e5-large、text-embedding-3-large) |
| **コスト** |非常に安い ($0.02-0.13 / 100 万トークン) または無料 (ローカル) |

## 一般的な演習

1. ✅ 小さな演習 (2、3、5) を完了する
2. **エンベディング エクスプローラーの構築:** 10 個の入力文を受け取り、エンベディングを作成し、t-SNE 2D プロット (sklearn を使用) を使用して視覚化するスクリプトを作成します。類似した文のグループは近くにありますか?
3. **プライベート ベンチマーク:** ドメイン内の 20 の質問について 3 つのモデル (OpenAI、Cohere/ローカル) をテストします。特定のユースケースにはどのモデルが最適ですか?
4. **コスト計算:** N ドキュメント × M avg_words の埋め込みコストを計算する関数を作成します。実際のデータセットを使用してテストします。

> **次の記事:** ベクトル データベース — ChromaDB、Qdrant、Pinecone を使用してベクトルを効率的に保存および検索します。
