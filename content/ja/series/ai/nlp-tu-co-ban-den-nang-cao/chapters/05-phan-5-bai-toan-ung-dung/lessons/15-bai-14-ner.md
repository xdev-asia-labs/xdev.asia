---
id: 019d8b30-bb14-7014-c014-ee1400000014
title: 'レッスン 14: 固有表現認識 (NER) — 実体の抽出'
slug: bai-14-ner
description: >-
  NER とは: エンティティ タイプ (PER、ORG、LOC、DATE)。 IOB/BIO タグ付け。配列ラベル付け用の CRF。 NER 用に BERT
  を微調整します。スペイシーNERトレーニング。ドメイン固有 (医療、法律) のカスタム エンティティ タイプ。評価: エンティティレベル F1。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 5: NLP の応用問題 — 実践プロジェクト'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP の基礎から上級まで: 自然言語処理をマスターする'
  slug: nlp-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5108" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5108)"/>

  <!-- Decorations -->
  <g>
    <circle cx="808" cy="274" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1016" cy="182" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="724" cy="90" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="932" cy="258" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="640" cy="166" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="134" x2="1100" y2="214" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="164" x2="1050" y2="234" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1059.1147367097487,219.5 1059.1147367097487,248.5 1034,263 1008.8852632902513,248.5 1008.8852632902513,219.5 1034,205" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI と ML — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: 固有表現認識 (NER) —</tspan>
      <tspan x="60" dy="42">エンティティの抽出</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP の基礎から上級まで: 自然言語処理をマスターする</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: NLP の応用問題 — 実践プロジェクト</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**固有表現認識 (NER)** - 固有表現認識 - は、テキストから実体 (人、組織、場所、日付など) を抽出する問題です。 NER は、情報抽出、ナレッジ グラフ、チャットボットの中核コンポーネントです。

---

## 1. NER の基本

### 一般的なエンティティ タイプ

|タグ |意味 |例 |
|-----|----------|----------|
| PER |人物 |グエン・ヴァン・A |
|組織 |組織 | FPT、Google |
|ロケ地 |場所 |カリフォルニア州ハノイ |
|日付 |日付/時刻 | 2026 年 3 月 31 日 |
|お金 |金銭的価値 | 100万ドン |
|その他 |その他 |新型コロナウイルス感染症 (COVID-19)

### IOB タグ付け

```
Text:   Nguyễn Văn A  làm  việc  tại  FPT   ở  Hà  Nội
Tags:   B-PER  I-PER  I-PER  O    O    O   B-ORG  O  B-LOC I-LOC
```

|プレフィックス |意味 |
|----------|----------|
| B- |エンティティの始まり |
|私 - |エンティティの内部 (続き) |
|ああ |外部 (エンティティではない) |

---

## 2. 顔を抱きしめるNER

```python
from transformers import pipeline

# Pre-trained NER
ner = pipeline("ner", model="dslim/bert-base-NER", grouped_entities=True)

text = "Elon Musk is the CEO of Tesla and SpaceX, based in Austin, Texas"
entities = ner(text)

for e in entities:
    print(f"  {e['word']:20s} | {e['entity_group']:5s} | {e['score']:.4f}")
# Elon Musk            | PER   | 0.9987
# Tesla                | ORG   | 0.9956
# SpaceX               | ORG   | 0.9934
# Austin               | LOC   | 0.9891
# Texas                | LOC   | 0.9923
```

---

## 3. カスタム NER 用に BERT を微調整する

```python
from transformers import (
    AutoTokenizer,
    AutoModelForTokenClassification,
    Trainer,
    TrainingArguments,
    DataCollatorForTokenClassification,
)
from datasets import load_dataset

# Load NER dataset
dataset = load_dataset("conll2003")

# Label mapping
label_list = dataset["train"].features["ner_tags"].feature.names
id2label = {i: l for i, l in enumerate(label_list)}
label2id = {l: i for i, l in enumerate(label_list)}

# Tokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")

def tokenize_and_align_labels(examples):
    tokenized = tokenizer(
        examples["tokens"],
        truncation=True,
        is_split_into_words=True,
    )
    labels = []
    for i, label in enumerate(examples["ner_tags"]):
        word_ids = tokenized.word_ids(batch_index=i)
        label_ids = []
        prev_word_id = None
        for word_id in word_ids:
            if word_id is None:
                label_ids.append(-100)
            elif word_id != prev_word_id:
                label_ids.append(label[word_id])
            else:
                label_ids.append(-100)  # Subword tokens
            prev_word_id = word_id
        labels.append(label_ids)
    tokenized["labels"] = labels
    return tokenized

tokenized = dataset.map(tokenize_and_align_labels, batched=True)

# Model
model = AutoModelForTokenClassification.from_pretrained(
    "bert-base-cased",
    num_labels=len(label_list),
    id2label=id2label,
    label2id=label2id,
)

# Train
data_collator = DataCollatorForTokenClassification(tokenizer)

training_args = TrainingArguments(
    output_dir="./ner-model",
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
    data_collator=data_collator,
    tokenizer=tokenizer,
)

trainer.train()
```

---

## 4. SPYCYを備えたNER

```python
import spacy

# Load pre-trained
nlp = spacy.load("en_core_web_trf")  # Transformer-based

doc = nlp("Apple was founded by Steve Jobs in Cupertino, California")

for ent in doc.ents:
    print(f"  {ent.text:20s} | {ent.label_:10s} | {ent.start_char}-{ent.end_char}")
# Apple                | ORG        | 0-5
# Steve Jobs           | PERSON     | 22-32
# Cupertino            | GPE        | 36-45
# California           | GPE        | 47-57
```

---

## 5. 評価: エンティティレベル F1

```python
from seqeval.metrics import classification_report, f1_score

# Predictions vs Ground truth (IOB format)
y_true = [["B-PER", "I-PER", "O", "B-ORG", "O"]]
y_pred = [["B-PER", "I-PER", "O", "B-ORG", "O"]]

print(classification_report(y_true, y_pred))
# Entity-level: chỉ tính đúng khi TOÀN BỘ entity đúng
```

> ⚠️ エンティティ レベルの F1 はトークン レベルの F1 とは異なります。正しいとみなされるには、**スパン全体** (B + I トークン) が正しい必要があります。

---

## 概要

|アプローチ |利点 |使用例 |
|----------|----------|----------|
|事前トレーニングされたパイプライン |速く、トレーニング不要 |一般的な NER |
| BERT を微調整する |カスタムエンティティ |ドメイン固有 |
|スペイシー |実稼働対応 |パイプラインの統合 |

---

## 次の記事

**レッスン 15: 質問応答** — スマートな質疑応答システムの構築: BERT を使用した抽出 QA と検索拡張 QA。
