---
id: 019d8b30-bb14-7014-c014-ee1400000014
title: 第 14 課：命名實體辨識 (NER) — 實體擷取
slug: bai-14-ner
description: >-
  什麼是 NER：實體類型（PER、ORG、LOC、DATE）。 IOB/BIO 標記。用於序列標記的 CRF。為 NER 微調 BERT。 spaCy
  NER 訓練。特定領域（醫療、法律）的自訂實體類型。評價：實體等級F1。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 第 5 部分：應用 NLP 問題 — 實作項目
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 课：命名实体识别 (NER) —</tspan>
      <tspan x="60" dy="42">擷取實體</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：應用 NLP 問題 — 實作項目</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**命名實體識別 (NER)** — 命名實體識別 — 是從文本中提取實體（人、組織、地點、日期...）的問題。 NER 是資訊擷取、知識圖和聊天機器人的核心元件。

---

## 1. NER 基礎知識

### 常見實體類型

|標籤 |意義|範例|
|-----|---------|--------|
| PER |人 |阮文A |
|組織|組織| FPT、Google |
|地點 |地點 |加州河內 |
|日期 |日期/时间 | 2026 年 3 月 31 日 |
|金钱 |货币价值 | 100万越南盾 |
|其他 |雜項 |新型冠狀病毒 (COVID-19) |

### IOB 標記

```
Text:   Nguyễn Văn A  làm  việc  tại  FPT   ở  Hà  Nội
Tags:   B-PER  I-PER  I-PER  O    O    O   B-ORG  O  B-LOC I-LOC
```

|前綴 |意義|
|--------|--------|
| B- |實體的開始 |
|我- |實體內部（延續） |
|哦|外部（非實體）|

---

## 2. NER 擁抱臉

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

## 3. 微調 BERT 以實作自訂 NER

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

## 4. 使用 spaCy 进行 NER

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

## 5.評估：實體層級F1

```python
from seqeval.metrics import classification_report, f1_score

# Predictions vs Ground truth (IOB format)
y_true = [["B-PER", "I-PER", "O", "B-ORG", "O"]]
y_pred = [["B-PER", "I-PER", "O", "B-ORG", "O"]]

print(classification_report(y_true, y_pred))
# Entity-level: chỉ tính đúng khi TOÀN BỘ entity đúng
```

> ⚠️ 實體級 F1 與令牌級 F1 不同：必須**整個**範圍（B + I 令牌）正確才能被視為正確。

---

## 總結

|方法|优势 |使用案例 |
|----------|--------|----------|
|預訓練管道 |快速，無需訓練 |一般NER |
|微调 BERT |自定义实体 |特定领域 |
|斯帕西 |生产就绪 |管道集成 |

---

## 下一篇文章

**第 15 課：問答** — 建立智慧問答系統：使用 BERT 進行萃取 QA 和檢索增強式 QA。
