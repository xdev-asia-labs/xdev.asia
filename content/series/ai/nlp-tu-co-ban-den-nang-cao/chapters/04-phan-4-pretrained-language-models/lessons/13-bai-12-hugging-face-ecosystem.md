---
id: 019d8b30-bb12-7012-c012-ee1200000012
title: 'Bài 12: Hugging Face Ecosystem — Thực hành NLP hiện đại'
slug: bai-12-hugging-face-ecosystem
description: >-
  Transformers library deep-dive: pipeline, AutoModel, AutoTokenizer.
  Model Hub: tìm và sử dụng pre-trained models. Datasets library.
  Trainer API cho fine-tuning nhanh. PEFT/LoRA cho efficient tuning.
  Accelerate cho multi-GPU. Spaces cho demo.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: Pre-trained Language Models — BERT, GPT & Beyond"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

## Giới thiệu

**Hugging Face** là "GitHub cho AI" — nền tảng chia sẻ models, datasets, và tools mà **mọi** NLP/AI engineer đều cần biết. Thư viện `transformers` là công cụ thực hành NLP phổ biến nhất thế giới.

---

## 1. Transformers Library — Quick Start

### Pipeline API (5 dòng code)

```python
from transformers import pipeline

# Sentiment Analysis
classifier = pipeline("sentiment-analysis")
result = classifier("NLP is amazing!")
print(result)  # [{'label': 'POSITIVE', 'score': 0.9998}]

# NER
ner = pipeline("ner", grouped_entities=True)

# Question Answering
qa = pipeline("question-answering")

# Summarization
summarizer = pipeline("summarization")

# Translation
translator = pipeline("translation_en_to_vi", model="Helsinki-NLP/opus-mt-en-vi")

# Zero-shot Classification
zero_shot = pipeline("zero-shot-classification")
result = zero_shot(
    "NLP giúp máy tính hiểu ngôn ngữ",
    candidate_labels=["technology", "sports", "politics"],
)
print(result)  # technology: 0.95
```

### AutoModel & AutoTokenizer

```python
from transformers import AutoTokenizer, AutoModelForSequenceClassification

model_name = "vinai/phobert-base-v2"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(
    model_name, num_labels=3
)

# Tokenize
inputs = tokenizer("NLP rất thú vị!", return_tensors="pt", padding=True)
print(inputs.keys())  # dict_keys(['input_ids', 'attention_mask'])

# Forward pass
outputs = model(**inputs)
print(outputs.logits.shape)  # torch.Size([1, 3])
```

---

## 2. Datasets Library

```python
from datasets import load_dataset

# Load từ Hub
dataset = load_dataset("imdb")
print(dataset)
# DatasetDict({
#     train: Dataset({features: ['text', 'label'], num_rows: 25000})
#     test: Dataset({features: ['text', 'label'], num_rows: 25000})
# })

# Load CSV/JSON local
dataset = load_dataset("csv", data_files="data.csv")

# Map (preprocessing)
def tokenize_fn(examples):
    return tokenizer(examples["text"], truncation=True, padding="max_length")

tokenized = dataset.map(tokenize_fn, batched=True)

# Filter
short = dataset.filter(lambda x: len(x["text"]) < 200)

# Train/test split
split = dataset["train"].train_test_split(test_size=0.2)
```

---

## 3. Trainer API — Fine-tuning nhanh

```python
from transformers import Trainer, TrainingArguments

training_args = TrainingArguments(
    output_dir="./results",
    num_train_epochs=3,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=32,
    learning_rate=2e-5,
    weight_decay=0.01,
    evaluation_strategy="epoch",
    save_strategy="epoch",
    load_best_model_at_end=True,
    logging_dir="./logs",
    fp16=True,  # Mixed precision
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized["train"],
    eval_dataset=tokenized["test"],
    tokenizer=tokenizer,
)

# Train!
trainer.train()

# Evaluate
results = trainer.evaluate()
print(results)

# Save
model.save_pretrained("./my-model")
tokenizer.save_pretrained("./my-model")
```

---

## 4. PEFT & LoRA — Efficient Fine-tuning

```python
from peft import LoraConfig, get_peft_model, TaskType

# Cấu hình LoRA
lora_config = LoraConfig(
    task_type=TaskType.SEQ_CLS,
    r=8,               # Rank
    lora_alpha=16,
    lora_dropout=0.1,
    target_modules=["query", "value"],
)

# Wrap model với LoRA
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# trainable params: 294,912 || all params: 109,482,240 || trainable%: 0.27%
# → Chỉ train 0.27% parameters!
```

---

## 5. Model Hub — Tìm Pre-trained Models

| Task | Models phổ biến | Tiếng Việt |
|------|----------------|-----------|
| Classification | bert-base, roberta-large | vinai/phobert-base-v2 |
| NER | dslim/bert-base-NER | NlpHUST/vibert4news-base-cased |
| QA | deepset/roberta-base-squad2 | — |
| Translation | Helsinki-NLP/opus-mt-* | VietAI/envit5-translation |
| Embeddings | sentence-transformers/* | BAAI/bge-m3 |

---

## Tổng kết

| Component | Chức năng |
|-----------|----------|
| `pipeline()` | Quick inference, 5 dòng code |
| `AutoModel` | Load bất kỳ pre-trained model |
| `datasets` | Load, process, cache datasets |
| `Trainer` | Fine-tuning với best practices built-in |
| `PEFT/LoRA` | Efficient fine-tuning (0.1-1% parameters) |

---

## Bài tiếp theo

**Bài 13: Text Classification & Sentiment Analysis** — Bài toán NLP ứng dụng phổ biến nhất: phân loại text và phân tích cảm xúc.
