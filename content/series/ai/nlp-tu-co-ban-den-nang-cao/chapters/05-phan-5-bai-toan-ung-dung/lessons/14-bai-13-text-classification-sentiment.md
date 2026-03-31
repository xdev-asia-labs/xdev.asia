---
id: 019d8b30-bb13-7013-c013-ee1300000013
title: 'Bài 13: Text Classification & Sentiment Analysis'
slug: bai-13-text-classification-sentiment
description: >-
  Text classification pipeline end-to-end. Sentiment analysis: binary,
  multi-class, aspect-based. Fine-tune BERT/PhoBERT cho phân loại
  tiếng Việt. Evaluation: accuracy, F1, confusion matrix. Deploy
  model với FastAPI.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 5: Bài toán NLP Ứng dụng — Hands-on Projects"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

## Giới thiệu

**Text Classification** là bài toán NLP phổ biến nhất — từ spam detection, sentiment analysis, đến phân loại ticket hỗ trợ. Bài này hướng dẫn từ A-Z: chuẩn bị data → chọn model → train → evaluate → deploy.

---

## 1. Các loại Text Classification

| Loại | Input | Output | Ví dụ |
|------|-------|--------|-------|
| Binary | Text | 0/1 | Spam vs Not spam |
| Multi-class | Text | 1 trong N labels | Phân loại chủ đề |
| Multi-label | Text | N labels (nhiều đồng thời) | Tags cho bài viết |
| Aspect-based Sentiment | Text + Aspect | Sentiment per aspect | Review sản phẩm |

---

## 2. Pipeline End-to-End với PhoBERT

### 2.1 Chuẩn bị Data

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

## 3. Deploy với FastAPI

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

## Tổng kết

| Bước | Tool |
|------|------|
| Data preparation | pandas, datasets |
| Tokenization | AutoTokenizer (PhoBERT) |
| Training | Trainer API |
| Evaluation | sklearn metrics, confusion matrix |
| Deployment | FastAPI + pipeline |

---

## Bài tiếp theo

**Bài 14: Named Entity Recognition (NER)** — Trích xuất thực thể: người, tổ chức, địa điểm từ text.
