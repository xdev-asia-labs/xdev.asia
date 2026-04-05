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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2305" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2305)"/>

  <!-- Decorations -->
  <g>
    <circle cx="779" cy="187" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="958" cy="66" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="637" cy="205" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="816" cy="84" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="995" cy="223" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="217" x2="1100" y2="297" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="247" x2="1050" y2="317" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="994.712812921102,151 994.712812921102,183 967,199 939.287187078898,183 939.287187078898,151 967,135" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI &amp; ML — Bài 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: Hugging Face Ecosystem — Thực hành</tspan>
      <tspan x="60" dy="42">NLP hiện đại</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Pre-trained Language Models — BERT, GPT &amp; Beyond</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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
