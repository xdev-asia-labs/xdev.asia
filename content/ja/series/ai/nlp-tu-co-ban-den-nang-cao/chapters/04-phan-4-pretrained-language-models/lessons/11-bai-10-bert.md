---
id: 019d8b30-bb10-7010-c010-ee1000000010
title: 'レッスン 10: BERT — トランスフォーマーからの双方向エンコーダー表現'
slug: bai-10-bert
description: >-
  BERT アーキテクチャ: マスクされた言語モデリング、次の文の予測。事前トレーニングと微調整のパラダイム。 BERT の亜種:
  RoBERTa、ALBERT、DistilBERT、PhoBERT (ベトナム語)。特徴抽出と微調整。ハグフェイストランスフォーマーによるデモ分類。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 4: 事前トレーニングされた言語モデル — BERT、GPT、その他'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP の基礎から上級まで: 自然言語処理をマスターする'
  slug: nlp-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2175" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2175)"/>

  <!-- Decorations -->
  <g>
    <circle cx="972" cy="186" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="844" cy="238" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="716" cy="30" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="1088" cy="82" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="960" cy="134" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="106" x2="1100" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="136" x2="1050" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="941.507041555162,85.5 941.507041555162,126.5 906,147 870.492958444838,126.5 870.492958444838,85.50000000000001 906,65" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI と ML — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: BERT — 双方向エンコーダー</tspan>
      <tspan x="60" dy="42">トランスフォーマーの表現</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP の基礎から上級まで: 自然言語処理をマスターする</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 事前トレーニングされた言語モデル — BERT、GPT、その他</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**BERT** (Devlin et al., 2018) は、**NLP に革命をもたらしたモデルです**。大量のテキストで事前トレーニングされたモデルがほぼすべての NLP タスクを微調整し、最先端のレベルに到達できることを初めて実証しました。 BERT は、NLP の **転移学習** の時代を開きます。

---

## 1. BERT アーキテクチャ

### エンコーダ専用トランスフォーマー

BERT は Transformer の **エンコーダ** のみを使用し、テキストを **双方向** (左右と左右の両方を同時に) 処理します。

```
Input:  [CLS] The cat sat on the mat [SEP]
         │     │    │   │   │   │   │   │
         ▼     ▼    ▼   ▼   ▼   ▼   ▼   ▼
    ┌──────────────────────────────────────┐
    │         Transformer Encoder          │
    │            (12 layers)               │
    │         Self-Attention → FFN         │
    └──────────────────────────────────────┘
         │     │    │   │   │   │   │   │
         ▼     ▼    ▼   ▼   ▼   ▼   ▼   ▼
       T_CLS  T₁   T₂  T₃  T₄  T₅  T₆ T_SEP

[CLS] → Classification head
[SEP] → Separator between sentences
```

### トレーニング前の目標

|目的 |仕組み |
|----------|------|
| **MLM (マスクされた言語モデリング)** |トークンの 15% をカバーし、カバーされる単語を予測します |
| **NSP (次文予測)** |文 B が文 A の次の文であるかどうかを予測します。

```
MLM: "The [MASK] sat on the [MASK]" → "The cat sat on the mat"
NSP: Câu A + Câu B → IsNext / NotNext
```

---

## 2. 分類のための BERT の微調整

```python
from transformers import BertTokenizer, BertForSequenceClassification
from transformers import Trainer, TrainingArguments
from datasets import load_dataset

# 1. Load pre-trained BERT
model_name = "bert-base-uncased"
tokenizer = BertTokenizer.from_pretrained(model_name)
model = BertForSequenceClassification.from_pretrained(
    model_name, num_labels=3
)

# 2. Tokenize dataset
def tokenize_fn(examples):
    return tokenizer(
        examples["text"],
        padding="max_length",
        truncation=True,
        max_length=128,
    )

dataset = load_dataset("emotion")
tokenized = dataset.map(tokenize_fn, batched=True)

# 3. Fine-tune
training_args = TrainingArguments(
    output_dir="./results",
    num_train_epochs=3,
    per_device_train_batch_size=16,
    learning_rate=2e-5,
    evaluation_strategy="epoch",
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized["train"],
    eval_dataset=tokenized["validation"],
)
trainer.train()
```

---

## 3. BERT のバリアント

|モデル |違い |パラメータ |ベトナム語 |
|----------|----------|---------------|----------|
| BERT ベース |オリジナル | 110M |良くない |
|ロベルタ | NSPを放棄し、より長くトレーニングする | 125M |いいえ |
|アルバート |因数分解された埋め込み | 12M～235M |いいえ |
|ディスティルバート |蒸留 BERT、40% 小型 | 66M |いいえ |
| **フォバート** |ベトナム語の事前トレーニング済み | 135M | **はい!** |
| XLM-ロベルタ |多言語、100言語 | 270M |はい |

### ベトナム人向けPhoBERT

```python
from transformers import AutoTokenizer, AutoModelForSequenceClassification

# PhoBERT — BERT cho tiếng Việt
tokenizer = AutoTokenizer.from_pretrained("vinai/phobert-base-v2")
model = AutoModelForSequenceClassification.from_pretrained(
    "vinai/phobert-base-v2", num_labels=3
)

text = "Sản phẩm này rất tốt, tôi rất hài lòng"
inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)
outputs = model(**inputs)
print(outputs.logits)
```

---

## 4. 特徴抽出と微調整

|使い方 |意味 |いつ使用するか |
|----------|-----------|---------------|
|特徴抽出 | BERT をフリーズし、分類子ヘッドのみをトレーニングする |データが少なく、コンピューティングが制限されている |
|微調整 |両方の BERT をトレーニングする (学習率が小さい) |十分なデータ、高い精度が必要 |
| LoRA/アダプター |小さなトレーニング可能なレイヤーを追加する |品質とコストのバランス |

```python
# Feature extraction: freeze BERT
for param in model.bert.parameters():
    param.requires_grad = False
# Chỉ train classification head
```

---

## 概要

|重要なポイント |詳細 |
|----------|----------|
|バート |エンコーダのみ、双方向、MLM + NSP |
|転移学習 |事前トレーニング → 微調整パラダイム |
|フォバート |ベトナム語版 BERT |
|微調整 | 2 ～ 5 エポック、lr=2e-5、バッチ=16-32 |

---

## 次の記事

**レッスン 11: GPT と自己回帰モデル** — Transformer のもう一方の側面: デコーダーのみ、因果関係のある言語モデリング、および ChatGPT へのパス。
