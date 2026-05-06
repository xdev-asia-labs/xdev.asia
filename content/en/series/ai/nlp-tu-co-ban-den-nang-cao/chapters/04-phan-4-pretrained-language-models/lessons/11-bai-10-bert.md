---
id: 019d8b30-bb10-7010-c010-ee1000000010
title: 'Lesson 10: BERT — Bidirectional Encoder Representations from Transformers'
slug: bai-10-bert
description: >-
  BERT architecture: masked language modeling, next sentence prediction.
  Pre-training vs fine-tuning paradigm. BERT variants: RoBERTa, ALBERT,
  DistilBERT, PhoBERT (Vietnamese). Feature extraction vs fine-tuning. Demo
  classification with Hugging Face Transformers.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 'Part 4: Pre-trained Language Models — BERT, GPT & Beyond'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP from Basics to Advanced: Mastering Natural Language Processing'
  slug: nlp-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 10: BERT — Bidirectional Encoder</tspan>
      <tspan x="60" dy="42">Representations from Transformers</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP from Basics to Advanced: Mastering Natural Language Processing</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Pre-trained Language Models — BERT, GPT & Beyond</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**BERT** (Devlin et al., 2018) is the model that **revolutionized NLP** — demonstrating for the first time that a model pre-trained on large amounts of text can fine-tune almost any NLP task and reach state-of-the-art. BERT opens the era of **transfer learning** for NLP.

---

## 1. BERT Architecture

### Encoder-only Transformer

BERT only uses Transformer's **Encoder** — processes text **bidirectional** (both left-right and right-left at the same time).

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

### Pre-training Objectives

| Objective | How it works |
|-----------|---------------|
| **MLM (Masked Language Modeling)** | Cover 15% of tokens, predict the covered word |
| **NSP (Next Sentence Prediction)** | Predict whether sentence B is the next sentence from sentence A |

```
MLM: "The [MASK] sat on the [MASK]" → "The cat sat on the mat"
NSP: Câu A + Câu B → IsNext / NotNext
```

---

## 2. Fine-tuning BERT for Classification

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

## 3. BERT Variants

| Model | Difference | Parameters | Vietnamese |
|-------|----------|-----------|-----------|
| BERT-base | Original | 110M | Not good |
| RoBERTa | Abandon NSP, train longer | 125M | No |
| ALBERT | Factorized embeddings | 12M–235M | No |
| DistilBERT | Distilled BERT, 40% smaller | 66M | No |
| **PhoBERT** | Pre-trained for Vietnamese | 135M | **Yes!** |
| XLM-RoBERTa | Multilingual, 100 languages ​​| 270M | Yes |

### PhoBERT for Vietnamese

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

## 4. Feature Extraction vs Fine-tuning

| How to use | Meaning | When to use |
|-----------|---------|-------------|
| Feature extraction | Freeze BERT, only train classifier head | Little data, limited compute |
| Fine-tuning | Train both BERT (small learning rate) | Enough data, need high accuracy |
| LoRA/Adapter | Add small trainable layers | Balance quality/cost |

```python
# Feature extraction: freeze BERT
for param in model.bert.parameters():
    param.requires_grad = False
# Chỉ train classification head
```

---

## Summary

| Key points | Details |
|-----------|---------|
| BERT | Encoder-only, bidirectional, MLM + NSP |
| Transfer learning | Pre-train → Fine-tune paradigm |
| PhoBERT | BERT for Vietnamese |
| Fine-tuning | 2-5 epochs, lr=2e-5, batch=16-32 |

---

## Next article

**Lesson 11: GPT & Autoregressive Models** — The other side of the Transformer: decoder-only, causal language modeling, and the path to ChatGPT.
