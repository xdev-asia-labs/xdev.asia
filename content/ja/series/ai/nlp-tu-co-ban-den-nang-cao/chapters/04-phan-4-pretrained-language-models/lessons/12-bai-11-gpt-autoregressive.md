---
id: 019d8b30-bb11-7011-c011-ee1100000011
title: 'レッスン 11: GPT と自己回帰モデル — 生成事前トレーニング済みトランスフォーマー'
slug: bai-11-gpt-autoregressive
description: >-
  GPT アーキテクチャ: 因果言語モデリング。 GPT-1→GPT-2→GPT-3→GPT-4の進化。自己回帰生成: 温度、top-k、top-p
  サンプリング。創発的な能力。文脈に沿った学習。 BERT (エンコーダー)、GPT (デコーダー)、T5 (エンコーダー-デコーダー) を比較します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 4: 事前トレーニングされた言語モデル — BERT、GPT、その他'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP の基礎から上級まで: 自然言語処理をマスターする'
  slug: nlp-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1871" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1871)"/>

  <!-- Decorations -->
  <g>
    <circle cx="668" cy="134" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="736" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="804" cy="30" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="872" cy="238" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="186" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="214" x2="1100" y2="294" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="244" x2="1050" y2="314" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="939.1147367097487,99.5 939.1147367097487,128.5 914,143 888.8852632902513,128.5 888.8852632902513,99.50000000000001 914,85" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI と ML — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: GPT と自己回帰モデル —</tspan>
      <tspan x="60" dy="42">事前にトレーニングされた生成トランスフォーマー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP の基礎から上級まで: 自然言語処理をマスターする</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 事前トレーニングされた言語モデル — BERT、GPT、その他</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

BERT がテキストを 2 方向から「読み取る」場合、**GPT** はテキストを左から右に「書き込み」ます (**自己回帰生成**)。 GPT は、世界を変えている LLM である ChatGPT、Claude、Gemini の基盤です。

---

## 1. GPT アーキテクチャ: デコーダのみ

```
Input:  "Once upon a time"
         │      │     │    │
         ▼      ▼     ▼    ▼
    ┌──────────────────────────┐
    │   Transformer Decoder    │
    │   (Causal Self-Attention)│
    │    Chỉ nhìn bên trái!   │
    └──────────────────────────┘
         │      │     │    │
         ▼      ▼     ▼    ▼
       "upon"  "a"  "time" ","
```

### 因果言語モデリング

$$P(x_1, x_2, ..., x_n) = \prod_{i=1}^{n} P(x_i | x_1, ..., x_{i-1})$$

このモデルは、**以前のすべてのトークン**に基づいて次のトークンを予測します (将来は考慮しません)。

---

## 2. 進化: GPT-1 → GPT-4

|モデル |年 |パラメータ |トレーニングデータ |ブレークスルー |
|----------|-----|---------------|---------------|---------------|
| GPT-1 | 2018年 | 117M |ブックコーパス |生成的な事前トレーニング作品 |
| GPT-2 | 2019年 | 1.5B |ウェブテキスト (40GB) | 「危険すぎて解放できない」 |
| GPT-3 | 2020年 | 175B | 570GB テキスト |状況に応じた学習、少数ショット |
| GPT-4 | 2023年 | ~1.8T (噂) |インターネット規模 |マルチモーダル、推論 |
| GPT-4o | 2024年 |未公開 | + 画像、音声 |ネイティブマルチモーダル |

---

## 3. デコード戦略

### 温度、トップ k、トップ p

```python
from transformers import GPT2LMHeadModel, GPT2Tokenizer

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")

input_text = "Artificial intelligence will"
input_ids = tokenizer.encode(input_text, return_tensors="pt")

# Greedy (deterministic, boring)
greedy = model.generate(input_ids, max_length=50, do_sample=False)

# Temperature sampling (creativity control)
creative = model.generate(
    input_ids, max_length=50,
    do_sample=True,
    temperature=0.8,   # < 1: focused, > 1: creative
    top_k=50,          # Chỉ xét 50 tokens có probability cao nhất
    top_p=0.9,         # Nucleus sampling: 90% probability mass
)

print(tokenizer.decode(creative[0]))
```

|パラメータ |低い |曹操 |
|----------|----------|-----|
|温度 |正確で再現性のある |クリエイティブ、ランダム |
|トップk |選択肢は少なく、安全 |多くの多様なオプション |
|トップ |トークンに確実に焦点を当てる |より多くのトークンを検討してください |

---

## 4. コンテキスト内学習 (ICL)

GPT-3 は次のことを発見しました。微調整の必要はなく、**プロンプトに例を入力**するだけです。

```python
prompt = """
Classify the sentiment:
Text: "This movie is amazing!" → Positive
Text: "Terrible experience" → Negative
Text: "The food was okay" → Neutral
Text: "I absolutely love this product!" →"""

# GPT sẽ trả lời: "Positive"
# Không cần fine-tune! Chỉ cần prompt engineering.
```

|パラダイム |例 |微調整？ |
|----------|----------|----------|
|ゼロショット |例はありません |いいえ |
|ワンショット | 1 例 |いいえ |
|数ショット | 3-10 例 |いいえ |
|微調整 |数千の例 |はい |

---

## 5. BERT 対 GPT 対 T5

|特長 | BERT (エンコーダー) | GPT (デコーダー) | T5 (Enc-Dec) |
|----------|------|------|---------------|
|方向 |双方向 |左から右 |両方 |
|事前トレーニング | MLM + NSP |コーザルLM |ノイズ除去 |
|良いこと |分類、NER、QA |生成、チャット |すべて (テキストからテキストへ) |
|例 |ロバート・フォバート | GPT-4、LLaMA | T5、mT5、ViT5 |

---

## 概要

|コンセプト |詳細 |
|----------|----------|
| GPT |デコーダのみ、因果的 LM、自己回帰 |
|スケーリングの法則 |より大きなモデル + より多くのデータ = より良いパフォーマンス |
|デコード |温度、top-k、top-p 制御出力ダイバーシティ |
| ICL |微調整なしの数ショット学習 |
| BERT 対 GPT |理解 (BERT) と生成 (GPT) |

---

## 次の記事

**レッスン 12: ハグフェイス エコシステム** — 最もよく使用されるライブラリ (トランスフォーマー、データセット、トークナイザー) を使用して最新の NLP を練習します。
