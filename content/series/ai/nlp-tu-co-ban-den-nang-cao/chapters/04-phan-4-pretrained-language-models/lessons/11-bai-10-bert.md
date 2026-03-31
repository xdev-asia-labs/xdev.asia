---
id: 019d8b30-bb10-7010-c010-ee1000000010
title: 'Bài 10: BERT — Bidirectional Encoder Representations from Transformers'
slug: bai-10-bert
description: >-
  BERT architecture: masked language modeling, next sentence prediction.
  Pre-training vs fine-tuning paradigm. BERT variants: RoBERTa, ALBERT,
  DistilBERT, PhoBERT (tiếng Việt). Feature extraction vs fine-tuning.
  Demo classification với Hugging Face Transformers.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 4: Pre-trained Language Models — BERT, GPT & Beyond"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

## Giới thiệu

**BERT** (Devlin et al., 2018) là model đã **cách mạng hóa NLP** — lần đầu tiên chứng minh rằng một model pre-trained trên lượng lớn text có thể fine-tune cho hầu hết mọi NLP task và đạt state-of-the-art. BERT mở ra kỷ nguyên **transfer learning** cho NLP.

---

## 1. BERT Architecture

### Encoder-only Transformer

BERT chỉ dùng **Encoder** của Transformer — xử lý text **bidirectional** (cả trái-phải và phải-trái cùng lúc).

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

| Objective | Cách hoạt động |
|-----------|---------------|
| **MLM (Masked Language Modeling)** | Che 15% tokens, dự đoán từ bị che |
| **NSP (Next Sentence Prediction)** | Dự đoán câu B có phải câu tiếp theo câu A không |

```
MLM: "The [MASK] sat on the [MASK]" → "The cat sat on the mat"
NSP: Câu A + Câu B → IsNext / NotNext
```

---

## 2. Fine-tuning BERT cho Classification

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

| Model | Khác biệt | Parameters | Tiếng Việt |
|-------|----------|-----------|-----------|
| BERT-base | Original | 110M | Không tốt |
| RoBERTa | Bỏ NSP, train lâu hơn | 125M | Không |
| ALBERT | Factorized embeddings | 12M–235M | Không |
| DistilBERT | Distilled BERT, 40% nhỏ hơn | 66M | Không |
| **PhoBERT** | Pre-trained cho tiếng Việt | 135M | **Có!** |
| XLM-RoBERTa | Multilingual, 100 ngôn ngữ | 270M | Có |

### PhoBERT cho Tiếng Việt

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

| Cách dùng | Ý nghĩa | Khi nào dùng |
|-----------|---------|-------------|
| Feature extraction | Freeze BERT, chỉ train classifier head | Ít data, compute limited |
| Fine-tuning | Train cả BERT (learning rate nhỏ) | Đủ data, cần accuracy cao |
| LoRA/Adapter | Thêm trainable layers nhỏ | Cân bằng quality/cost |

```python
# Feature extraction: freeze BERT
for param in model.bert.parameters():
    param.requires_grad = False
# Chỉ train classification head
```

---

## Tổng kết

| Điểm chính | Chi tiết |
|------------|---------|
| BERT | Encoder-only, bidirectional, MLM + NSP |
| Transfer learning | Pre-train → Fine-tune paradigm |
| PhoBERT | BERT cho tiếng Việt |
| Fine-tuning | 2-5 epochs, lr=2e-5, batch=16-32 |

---

## Bài tiếp theo

**Bài 11: GPT & Autoregressive Models** — Mặt kia của Transformer: decoder-only, causal language modeling, và con đường dẫn đến ChatGPT.
