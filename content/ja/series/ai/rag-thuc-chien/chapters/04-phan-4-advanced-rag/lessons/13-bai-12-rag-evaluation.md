---
id: 019c9619-ff12-7012-a012-ff1200000012
title: 'レッスン 12: RAG 評価 — RAGAS、忠実性、関連性'
slug: bai-12-rag-evaluation
description: >-
  RAGAS フレームワークを使用して RAG を評価します。指標: 忠実度、回答の関連性、コンテキストの精度、コンテキストの想起。ゴールデン テスト
  セットを作成し、評価を自動化します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 4: 高度な RAG パターン'
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: リアルバトルRAG：基礎から上級まで
  slug: rag-thuc-chien
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7779" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7779)"/>

  <!-- Decorations -->
  <g>
    <circle cx="706" cy="148" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="812" cy="274" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="918" cy="140" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1024" cy="266" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="132" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="88" x2="1100" y2="168" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="118" x2="1050" y2="188" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1075.2390923627308,216.5 1075.2390923627308,259.5 1038,281 1000.7609076372692,259.5 1000.7609076372692,216.5 1038,195" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: RAG 評価 — RAGAS、</tspan>
      <tspan x="60" dy="42">忠実さと関連性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">リアルバトルRAG：基礎から上級まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 高度な RAG パターン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

RAG パイプラインが構築されました。しかし、**それはどの程度優れているのでしょうか?** それは単に「感じる」だけではなく、特定の**指標**で測定する必要があります。 RAG 評価は、「検索は正しいか?」という質問に答えるのに役立ちます。 LLM は正しく答えますか?幻覚はありますか？

> **例:** RAG は「20 日間の休暇」と返信しましたが、文書には「15 日間」と記載されています。評価しない → エラーを検出しない → ユーザーは信頼を失います。

この記事の内容は次のとおりです。
1. **RAG 評価指標** — 忠実性、関連性、精度、再現率
2. **RAGAS フレームワーク** — 自動評価
3. **ゴールデン テスト セット** — 標準テスト セットを作成します

---

## 1. RAG 評価指標

### 1.1 2 つのメトリクス グループ

```
RAG Pipeline:  Query → Retrieve → Generate → Answer

Retrieval Metrics (retrieve có tốt không?):
├── Context Precision: bao nhiêu % context là relevant?
└── Context Recall: có miss thông tin quan trọng không?

Generation Metrics (LLM generate có tốt không?):
├── Faithfulness: answer có đúng với context không? (no hallucination)
└── Answer Relevancy: answer có trả lời đúng câu hỏi không?
```

### 1.2 各指標の説明

|メトリクス |質問 |範囲 |目標 |
|--------|--------|:---:|:---:|
| **忠実さ** |アンサーはさらに多くを占めていますか？ | 0-1 | > 0.9 |
| **回答の関連性** |答えは的を得ていますか？ | 0-1 | > 0.8 |
| **コンテキストの精度** |コンテキストの取得は関連していますか? | 0-1 | > 0.8 |
| **コンテキストの想起** |重要なコンテキストが欠けていますか? | 0-1 | > 0.7 |

### 1.3 実例

```
Question: "Nghỉ phép bao nhiêu ngày?"
Ground truth: "15 ngày cho full-time, 8 ngày cho part-time"

Retrieved contexts:
  C1: "Nhân viên full-time được 15 ngày phép" ← Relevant
  C2: "Quy trình xin nghỉ phép..."           ← Partially relevant
  C3: "Công ty thành lập năm 2020..."         ← NOT relevant

Answer: "Nhân viên được 15 ngày nghỉ phép mỗi năm."

Metrics:
├── Faithfulness: 1.0 (answer đúng với context C1)
├── Answer Relevancy: 0.8 (trả lời đúng nhưng thiếu part-time)
├── Context Precision: 0.33 (1/3 context relevant)
└── Context Recall: 0.5 (có full-time, thiếu part-time)
```

---

## 2. RAGAS フレームワーク

### 2.1 インストールとセットアップ

```python
"""RAGAS — RAG Assessment framework"""
# pip install ragas

from ragas import evaluate
from ragas.metrics import (
    faithfulness,
    answer_relevancy,
    context_precision,
    context_recall,
)
from datasets import Dataset

# Chuẩn bị evaluation data
eval_data = {
    "question": [
        "Nghỉ phép bao nhiêu ngày?",
        "Quy trình tuyển dụng thế nào?",
    ],
    "answer": [
        "Nhân viên full-time được 15 ngày phép/năm.",
        "Tuyển dụng gồm 3 vòng: CV screening, phỏng vấn kỹ thuật, phỏng vấn văn hóa.",
    ],
    "contexts": [
        ["Nhân viên full-time được 15 ngày phép có lương mỗi năm."],
        ["Quy trình tuyển dụng 3 vòng: screening CV, phỏng vấn tech, phỏng vấn culture fit."],
    ],
    "ground_truth": [
        "15 ngày cho full-time, 8 ngày cho part-time.",
        "3 vòng: CV screening, phỏng vấn kỹ thuật, phỏng vấn văn hóa.",
    ],
}

dataset = Dataset.from_dict(eval_data)

# Evaluate
result = evaluate(
    dataset=dataset,
    metrics=[faithfulness, answer_relevancy, context_precision, context_recall],
)

print(result)
# {'faithfulness': 0.95, 'answer_relevancy': 0.82,
#  'context_precision': 0.90, 'context_recall': 0.65}
```

### 2.2 結果を理解する

```
Faithfulness: 0.95  ← Tốt! Answer không bịa
Answer Relevancy: 0.82  ← OK, nhưng có thể cải thiện
Context Precision: 0.90  ← Retrieval tìm đúng documents
Context Recall: 0.65  ← ⚠️ Thiếu sót! Cần cải thiện retrieval

Action plan:
├── Context Recall thấp → cải thiện chunking hoặc thêm tài liệu
├── Answer Relevancy trung bình → tune prompt generation
└── Faithfulness cao → generation prompt tốt, ít hallucination
```

> **💡 演習 1:** RAGAS を使用して現在の RAG パイプラインを評価します。グラウンド トゥルースを使用して 10 個のテスト質問を作成します。 4 つの指標を計算します。どの指標が最も低いでしょうか?

---

## 3. ゴールデン テスト セットを作成する

### 3.1 なぜゴールデン テスト セットが必要なのでしょうか?

```
Golden Test Set = bộ câu hỏi + đáp án chuẩn (ground truth)
→ Dùng để đánh giá mọi thay đổi trong RAG pipeline

Khi thay đổi chunk size:  chạy golden test → so sánh metrics
Khi thay đổi embedding:   chạy golden test → so sánh metrics
Khi thêm reranker:        chạy golden test → so sánh metrics

Không có golden test = mù → không biết thay đổi tốt hay xấu!
```

### 3.2 ドキュメントから作成

```python
"""Tự động sinh golden test set từ tài liệu"""
from ragas.testset.generator import TestsetGenerator
from ragas.testset.evolutions import simple, reasoning, multi_context
from langchain_openai import ChatOpenAI, OpenAIEmbeddings

generator_llm = ChatOpenAI(model="gpt-4o")
critic_llm = ChatOpenAI(model="gpt-4o")
embeddings = OpenAIEmbeddings()

# Tạo test set generator
generator = TestsetGenerator.from_langchain(
    generator_llm=generator_llm,
    critic_llm=critic_llm,
    embeddings=embeddings,
)

# Sinh test set từ documents
testset = generator.generate_with_langchain_docs(
    documents=chunks,   # Documents đã chunk
    test_size=20,        # 20 câu test
    distributions={
        simple: 0.5,       # 50% câu đơn giản
        reasoning: 0.25,   # 25% câu cần suy luận
        multi_context: 0.25,  # 25% câu cần nhiều context
    },
)

test_df = testset.to_pandas()
print(test_df[["question", "ground_truth"]].head())
```

### 3.3 手動レビュー

| # |質問 |地上の真実 |作成者 |
|---|--------|-------------|--------|
| 1 |休みは何日ですか？ |フルタイム 15 日、パートタイム 8 日 |専門家 |
| 2 |休暇申請の手続きは？ | 3日前までに申請書を提出し、マネージャーが承認します |専門家 |
| 3 |給料は何日に支払われますか？ |毎月5日 |オート（RAGAS） |

> **経験則:** ゴールデン テスト セットには、50% の単純な問題、30% の推理問題、20% の特殊なケースを含む少なくとも **50 問**が含まれている必要があります。

---

## 4. エンドツーエンドの評価パイプライン

### 4.1 自動評価

```python
"""Full evaluation pipeline: RAG → Evaluate → Report"""
def evaluate_rag_pipeline(pipeline, golden_testset):
    questions = golden_testset["question"]
    ground_truths = golden_testset["ground_truth"]
    
    answers = []
    contexts = []
    
    for question in questions:
        # Chạy RAG pipeline
        result = pipeline.invoke(question)
        answers.append(result["answer"])
        contexts.append([doc.page_content for doc in result["source_documents"]])
    
    # RAGAS evaluate
    eval_dataset = Dataset.from_dict({
        "question": questions,
        "answer": answers,
        "contexts": contexts,
        "ground_truth": ground_truths,
    })
    
    scores = evaluate(
        dataset=eval_dataset,
        metrics=[faithfulness, answer_relevancy, context_precision, context_recall],
    )
    
    return scores

# Compare 2 pipelines
scores_v1 = evaluate_rag_pipeline(pipeline_v1, golden_test)
scores_v2 = evaluate_rag_pipeline(pipeline_v2, golden_test)

print("V1:", scores_v1)
print("V2:", scores_v2)
# V1: {'faithfulness': 0.85, 'context_recall': 0.60}
# V2: {'faithfulness': 0.92, 'context_recall': 0.78}  ← Better!
```

### 4.2 評価ダッシュボード

```python
"""Streamlit dashboard cho RAG evaluation"""
import streamlit as st
import pandas as pd

st.title("RAG Evaluation Dashboard")

# Upload golden test
uploaded = st.file_uploader("Upload golden test CSV")

if uploaded:
    test_df = pd.read_csv(uploaded)
    
    # Run evaluation
    if st.button("Run Evaluation"):
        scores = evaluate_rag_pipeline(pipeline, test_df)
        
        # Display metrics
        col1, col2, col3, col4 = st.columns(4)
        col1.metric("Faithfulness", f"{scores['faithfulness']:.2f}")
        col2.metric("Answer Relevancy", f"{scores['answer_relevancy']:.2f}")
        col3.metric("Context Precision", f"{scores['context_precision']:.2f}")
        col4.metric("Context Recall", f"{scores['context_recall']:.2f}")
        
        # Per-question breakdown
        st.dataframe(scores.to_pandas())
```

> **💡 演習 2:** ゴールデン テスト セット (20 文以上) を作成 → RAG パイプラインを評価 → 1 つのパラメーター (チャンク サイズまたは top_k) を変更 → 再評価 → 前後のメトリクスを比較します。

---

## 5. メトリクスに基づいて RAG を改善する

### 5.1 診断とアクション

|低メトリクス |原因 |アクション |
|----------|-----------|----------|
| **コンテキストリコール↓** |ドキュメントの取得ミス |ドキュメントを追加し、チャンクを改善し、ハイブリッド検索を試してください |
| **コンテキストの精度 ↓** |大量のノイズを取得する |リランカーの追加、top_k の削減、メタデータのフィルター |
| **忠実さ↓** | LLM幻覚 |より大きなモデルを使用してプロンプトを改善します (「コンテキストのみに基づく」)。
| **回答の関連性↓** |トピックから外れた回答 |プロンプトを改善し、数ショットの例を追加 |

---

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| **忠実さ** |答えは文脈に対して正しいですか? (幻覚なし) |
| **回答の関連性** |答えは質問の要点に対して正しいですか？ |
| **コンテキストの精度** |検索は正確ですか? |
| **コンテキストの想起** |回収は完了しましたか？ |
| **ラガス** |自動化された RAG 評価フレームワーク |
| **ゴールデン テスト セット** |グラウンド トゥルースを備えた標準テスト スイート |
| **反復** |指標が低い → 診断 → 改善 → 再評価 |

## 一般的な演習

1. ✅ 2 つの小さな演習 (1、2) を完了します。
2. **完全な評価:** 50 の質問からなるゴールデン テストを作成 → 現在のパイプラインを評価 → ボトルネックを特定 → コンポーネントを変更 → 再評価 → 比較レポートを作成。
3. **CI/CD 評価:** パイプラインが変更されるたびに RAGAS を自動的に実行します。スクリプト: `python evaluate.py` → 出力メトリクス → 忠実な場合は失敗 < 0.85.
4. **人間参加型:** Streamlit アプリの作成: 質問 + 回答 + コンテキスト + ground_truth を表示します。ユーザーは各文を 1 ～ 5 で評価します。人間の評価と RAGAS スコアを比較します。

> **次の記事:** RAG を運用環境に展開する — API、キャッシュ、およびモニタリング — RAG をノートブックから実際の製品に導入します。
