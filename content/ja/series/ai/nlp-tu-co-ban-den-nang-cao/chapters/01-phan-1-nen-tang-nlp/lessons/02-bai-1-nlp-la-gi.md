---
id: 019d8b30-bb01-7001-c001-ee0100000001
title: 'レッスン 1: NLP とは何ですか? — 自然言語処理分野の概要'
slug: bai-1-nlp-la-gi
description: >-
  NLPの定義、ルールベースからディープラーニングまでの開発の歴史。中核的な問題: 分類、NER、POS タグ付け、解析、生成、QA、要約。 NLP
  パイプラインの概要。 Python を使用したシンプルなエンドツーエンドのデモ。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 1: NLP の基礎 — コンピューターのレンズを通して言語を理解する'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP の基礎から上級まで: 自然言語処理をマスターする'
  slug: nlp-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9534" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9534)"/>

  <!-- Decorations -->
  <g>
    <circle cx="640" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="170" x2="1100" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="200" x2="1050" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1041.650635094611,207.5 1041.650635094611,232.5 1020,245 998.349364905389,232.5 998.349364905389,207.5 1020,195" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: NLP とは何ですか? — 処理分野の概要</tspan>
      <tspan x="60" dy="42">自然言語物理学</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP の基礎から上級まで: 自然言語処理をマスターする</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: NLP の基礎 — コンピューターのレンズを通して言語を理解する</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**自然言語処理 (NLP)** — 自然言語処理 — は、**コンピューター サイエンス**、**人工知能**、**言語学**が交わる分野であり、コンピューターによる人間の言語の理解、分析、生成を支援する方法を研究しています。

> 💡 **一文:** NLP はコンピューターに自然言語を「読む」、「理解する」、「書く」ことを教えます。

Google 検索、Gmail Smart Compose、ChatGPT から仮想アシスタント Siri に至るまで、すべて NLP に基づいています。

---

## 1. AI における NLP はどこにあるのでしょうか?

```
┌─────────────────────────────────────────────────────────┐
│                  ARTIFICIAL INTELLIGENCE                 │
│                                                         │
│   ┌─────────────────────────────────────────────────┐   │
│   │              MACHINE LEARNING                    │   │
│   │                                                  │   │
│   │   ┌────────────────────────────────────────┐    │   │
│   │   │          DEEP LEARNING                  │    │   │
│   │   │                                         │    │   │
│   │   │   ┌──────────┐  ┌──────────────────┐   │    │   │
│   │   │   │    NLP    │  │ Computer Vision  │   │    │   │
│   │   │   │          │  │                  │   │    │   │
│   │   │   │ • Text   │  │ • Image          │   │    │   │
│   │   │   │ • Speech │  │ • Video          │   │    │   │
│   │   │   └──────────┘  └──────────────────┘   │    │   │
│   │   └────────────────────────────────────────┘    │   │
│   └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## 2. NLP の歴史 — ルールベースからトランスフォーマーまで

|期間 |方法 |特長 |例 |
|----------|---------------|---------------|----------|
| 1950 年代～1980 年代 | **ルールベース** |正規表現、文法規則を手動で作成する | ELIZA チャットボット |
| 1990 年代～2000 年代 | **統計** |確率、n-gram、HMM、CRF |スパムフィルター、POSタグ付け |
| 2010年代 | **ML/深層学習** | Word2Vec、RNN、LSTM、CNN |感情分析 |
| 2017年 | **トランス** |自己注意、並列化 | Google 翻訳の改善 |
| 2018–現在 | **事前トレーニングされた LM** |バート、GPT、T5、LLaMA | ChatGPT、ジェミニ、クロード |

### 重要な転換点

1. **2013 — Word2Vec**: 初めて意味のある高密度ベクトルを使用して単語を表現
2. **2017 — Transformer**: 「必要なのは注意だけ」がすべてを変える
3. **2018 — BERT および GPT**: NLP の転移学習、事前トレーニングを 1 回行えば、どこでも使用可能
4. **2022 年から現在 — LLM 時代**: ChatGPT、創発能力、推論

---

## 3. NLP の中核的な問題

### 3.1 レベルによる分類

```
┌────────────────────────────────────────────────────────┐
│                    CÁC BÀI TOÁN NLP                    │
│                                                        │
│  📝 CẤP ĐỘ TỪ (Token-level)                          │
│  ├── POS Tagging: gán nhãn từ loại (danh từ, động từ) │
│  ├── NER: trích xuất thực thể (người, địa điểm, tổ chức)│
│  └── Word Segmentation: tách từ (quan trọng cho tiếng Việt)│
│                                                        │
│  📄 CẤP ĐỘ CÂU/TÀI LIỆU (Sequence-level)            │
│  ├── Text Classification: phân loại văn bản            │
│  ├── Sentiment Analysis: phân tích cảm xúc             │
│  └── Topic Modeling: phát hiện chủ đề                  │
│                                                        │
│  🔄 CẤP ĐỘ SINH (Generation)                          │
│  ├── Machine Translation: dịch máy                     │
│  ├── Text Summarization: tóm tắt                       │
│  ├── Question Answering: hỏi đáp                       │
│  └── Text Generation: sinh văn bản (ChatGPT, Gemini)   │
│                                                        │
│  🔗 CẤP ĐỘ QUAN HỆ (Relation)                        │
│  ├── Semantic Similarity: đo độ tương đồng nghĩa       │
│  ├── Textual Entailment: suy luận logic                 │
│  └── Coreference Resolution: xác định đại từ           │
└────────────────────────────────────────────────────────┘
```

### 3.2 実践例

|数学の問題 |入力 |出力 |アプリケーション |
|----------|----------|----------|----------|
|感情分析 | 「この商品はすごいですよ！」 |ポジティブ (0.95) |モニタリングのレビュー |
|ナー | 「Nguyen Van A は FPT で働いています」 | PER: Nguyen Van A、ORG: FPT |情報を抽出する |
|翻訳 | "こんにちは お元気ですか？" | "こんにちは お元気ですか？" | Google翻訳 |
|要約 | 1000ワードの記事 | 50語の要約 |自動車ニュース |
| QA |コンテキスト + 「Apple の CEO は誰ですか?」 | 「ティム・クック」 |チャットボット、検索 |

---

## 4. NLP パイプラインの概要

どのような問題を解決する場合でも、基本的な NLP パイプラインには次の手順が含まれます。

```
Input Text
    │
    ▼
┌──────────────────┐
│  1. Preprocessing │ ← Tokenization, cleaning, normalization
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  2. Representation│ ← BoW, TF-IDF, Word Embeddings, BERT
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  3. Modeling      │ ← ML/DL model: classification, NER, generation
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  4. Post-processing│ ← Decode, format, threshold, filter
└────────┬─────────┘
         │
         ▼
    Output
```

---

## 5. デモ: Python を使用した 5 分間の NLP

```python
# Cài đặt: pip install transformers torch

from transformers import pipeline

# 1. Sentiment Analysis
sentiment = pipeline("sentiment-analysis")
result = sentiment("Khóa học NLP này thực sự hay quá!")
print(result)
# [{'label': 'POSITIVE', 'score': 0.9998}]

# 2. Named Entity Recognition
ner = pipeline("ner", grouped_entities=True)
entities = ner("Elon Musk là CEO của Tesla và SpaceX tại California")
for e in entities:
    print(f"  {e['word']}: {e['entity_group']} ({e['score']:.2f})")
# Elon Musk: PER (0.99)
# Tesla: ORG (0.98)
# SpaceX: ORG (0.97)
# California: LOC (0.99)

# 3. Question Answering
qa = pipeline("question-answering")
answer = qa(
    question="NLP là gì?",
    context="NLP (Natural Language Processing) là lĩnh vực AI giúp máy tính hiểu ngôn ngữ tự nhiên."
)
print(f"Answer: {answer['answer']} (score: {answer['score']:.2f})")

# 4. Summarization
summarizer = pipeline("summarization")
summary = summarizer("Your long text here...", max_length=50)
print(summary)

# 5. Translation
translator = pipeline("translation_en_to_vi", model="Helsinki-NLP/opus-mt-en-vi")
result = translator("Natural Language Processing is amazing!")
print(result)
```

> 🎯 抱きしめ顔のみ `pipeline`、5 つの異なる NLP 問題を実行しました。理論を理解する必要はありません。

---

## 6. ベトナム語のための NLP — 概要

ベトナム人には特有の課題があります。

|チャレンジ |例 |ソリューション |
|---------------|----------|----------|
|単語の分割 | 「学生」 vs 「勉強」 + 「学生」 | VnCoreNLP、海底 |
|バーマーク | 「勉強」≠「学ぶ」≠「絵を描く」 |アクセントの正規化 |
|リソースが少ない |英語と比較してデータセットが少ない | PhoBERT、ViT5、VLSP データセット |
|複合語 | 「コンピュータ」、「キーボード」 |辞書ベースのセグメンテーション |

```python
# Demo NLP tiếng Việt với underthesea
from underthesea import word_tokenize, pos_tag, ner

text = "Nguyễn Phú Trọng làm việc tại Hà Nội"

# Word segmentation
print(word_tokenize(text))
# ['Nguyễn_Phú_Trọng', 'làm_việc', 'tại', 'Hà_Nội']

# POS Tagging
print(pos_tag(text))
# [('Nguyễn_Phú_Trọng', 'Np'), ('làm_việc', 'V'), ('tại', 'E'), ('Hà_Nội', 'Np')]
```

> 📌 レッスン 17 では、ベトナム語の NLP について詳しく説明します。

---

## 概要

|コンセプト |意味 |
|----------|----------|
| NLP | AI の分野は、コンピューターが自然言語を理解するのに役立ちます |
|歴史 |ルールベース → 統計 → ディープラーニング → トランスフォーマー → LLM |
|数学の問題 |分類、NER、QA、要約、翻訳、生成 |
|パイプライン |前処理 → 表現 → モデリング → 後処理 |
|ベトナム語 |単語のセグメンテーションの課題、リソースは少ないが成長中 |

---

## 次の記事

**レッスン 2: テキストの前処理** — 最初で最も重要なステップであるトークン化、クリーニング、正規化について詳しく説明します。 「ガベージイン、ガベージアウト」 — データの前処理が NLP の成功の 80% を決定します。
