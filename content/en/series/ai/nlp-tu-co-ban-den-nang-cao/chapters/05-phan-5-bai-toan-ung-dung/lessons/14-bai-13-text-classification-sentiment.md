---
id: 019d8b30-bb13-7013-c013-ee1300000013
title: 'Lesson 13: Text Classification & Sentiment Analysis'
slug: bai-13-text-classification-sentiment
description: >-
  Text classification pipeline end-to-end. Sentiment analysis: binary,
  multi-class, aspect-based. Fine-tune BERT/PhoBERT for Vietnamese
  classification. Evaluation: accuracy, F1, confusion matrix. Deploy model with
  FastAPI.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 12
section_title: 'Part 5: Applied NLP problems — Hands-on Projects'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP from Basics to Advanced: Mastering Natural Language Processing'
  slug: nlp-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7991" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7991)"/>

  <!-- Decorations -->
  <g>
    <circle cx="880" cy="150" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="940" cy="230" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="270" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="90" x2="1100" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="120" x2="1050" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1061.650635094611,227.5 1061.650635094611,252.5 1040,265 1018.349364905389,252.5 1018.349364905389,227.5 1040,215" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 13: Text Classification & Sentiment</tspan>
      <tspan x="60" dy="42">Analysis</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP from Basics to Advanced: Mastering Natural Language Processing</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Applied NLP problems — Hands-on Projects</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**Text Classification** is the most popular NLP problem — from spam detection, sentiment analysis, to support ticket classification. This article guides from A-Z: prepare data → choose model → train → evaluate → deploy.

---

## 1. Types of Text Classification

| Type | Input | Output | Example |
|-------|-------|--------|-------|
| Binary | Text | 0/1 | Spam vs Not spam |
| Multi-class | Text | 1 of N labels | Topic classification |
| Multi-label | Text | N labels (many simultaneously) | Tags for articles |
| Aspect-based Sentiment | Text + Aspect | Sentiment per aspect | Product reviews |

---

## 2. End-to-End Pipeline with PhoBERT

### 2.1 Prepare Data

```python
import pandas as pd
from datasets import Dataset, DatasetDict
from sklearn.model_selection import train_test_split

# Ví dụ: phân loại sentiment tiếng Việt
data = pd.DataFrame({
    "text": [
        "Sản phẩm rất tốt, giao hàng nhanh",
        "Chất lượng tệ, không đáng tiền",
        "Bình thường, không có gì đặc biệt",
        # ... thêm data
    ],
    "label": [2, 0, 1],  # 0=negative, 1=neutral, 2=positive
})

# Split
train_df, test_df = train_test_split(data, test_size=0.2, random_state=42)

dataset = DatasetDict({
    "train": Dataset.from_pandas(train_df),
    "test": Dataset.from_pandas(test_df),
})
```

### 2.2 Tokenize

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("vinai/phobert-base-v2")

def tokenize_fn(examples):
    return tokenizer(
        examples["text"],
        truncation=True,
        padding="max_length",
        max_length=128,
    )

tokenized = dataset.map(tokenize_fn, batched=True)
```

### 2.3 Fine-tune

```python
from transformers import (
    AutoModelForSequenceClassification,
    Trainer,
    TrainingArguments,
)
import numpy as np
from sklearn.metrics import accuracy_score, f1_score

model = AutoModelForSequenceClassification.from_pretrained(
    "vinai/phobert-base-v2",
    num_labels=3,
)

def compute_metrics(eval_pred):
    logits, labels = eval_pred
    predictions = np.argmax(logits, axis=-1)
    return {
        "accuracy": accuracy_score(labels, predictions),
        "f1_macro": f1_score(labels, predictions, average="macro"),
        "f1_weighted": f1_score(labels, predictions, average="weighted"),
    }

training_args = TrainingArguments(
    output_dir="./sentiment-phobert",
    num_train_epochs=5,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=32,
    learning_rate=2e-5,
    weight_decay=0.01,
    evaluation_strategy="epoch",
    save_strategy="epoch",
    load_best_model_at_end=True,
    metric_for_best_model="f1_macro",
    fp16=True,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized["train"],
    eval_dataset=tokenized["test"],
    compute_metrics=compute_metrics,
)

trainer.train()
```

### 2.4 Evaluation

```python
from sklearn.metrics import classification_report, confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt

# Predictions
preds = trainer.predict(tokenized["test"])
y_pred = np.argmax(preds.predictions, axis=-1)
y_true = preds.label_ids

# Classification Report
labels = ["Negative", "Neutral", "Positive"]
print(classification_report(y_true, y_pred, target_names=labels))

# Confusion Matrix
cm = confusion_matrix(y_true, y_pred)
sns.heatmap(cm, annot=True, fmt='d', xticklabels=labels, yticklabels=labels)
plt.xlabel("Predicted")
plt.ylabel("True")
plt.title("Confusion Matrix")
plt.show()
```

---

## 3. Deploy with FastAPI

```python
from fastapi import FastAPI
from transformers import pipeline
from pydantic import BaseModel

app = FastAPI()

# Load model
classifier = pipeline(
    "sentiment-analysis",
    model="./sentiment-phobert",
    tokenizer="vinai/phobert-base-v2",
)

class TextInput(BaseModel):
    text: str

@app.post("/predict")
def predict(input_data: TextInput):
    result = classifier(input_data.text)
    return {"sentiment": result[0]["label"], "score": result[0]["score"]}
```

---

## Summary

| Step | Tools |
|-----|------|
| Data preparation | pandas, datasets |
| Tokenization | AutoTokenizer (PhoBERT) |
| Training | Trainer API |
| Evaluation | sklearn metrics, confusion matrix |
| Deployment | FastAPI + pipeline |

---

## Next article

**Lesson 14: Named Entity Recognition (NER)** — Extract entities: people, organizations, locations from text.
