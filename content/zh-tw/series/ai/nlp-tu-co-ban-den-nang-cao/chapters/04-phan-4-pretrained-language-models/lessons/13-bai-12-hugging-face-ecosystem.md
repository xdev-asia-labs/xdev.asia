---
id: 019d8b30-bb12-7012-c012-ee1200000012
title: 第十二課：抱臉生態系－現代NLP實踐
slug: bai-12-hugging-face-ecosystem
description: >-
  Transformers
  庫深入研究：管道、AutoModel、AutoTokenizer。模型中心：尋找並使用預先訓練的模型。數據集庫。用於快速微調的訓練器 API。
  PEFT/LoRA 用於高效調整。加速多 GPU。演示空間。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: 第 4 部分：預訓練語言模型 — BERT、GPT 及其他
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 人工智慧與機器學習 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第十二課：抱臉生態系－實踐</tspan>
      <tspan x="60" dy="42">現代自然語言處理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：預訓練語言模型 — BERT、GPT 及其他</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**Hugging Face** 是「AI 的 GitHub」——一個共享模型、資料集和工具的平台，**每個** NLP/AI 工程師都需要了解這些。圖書館 `transformers` 是全球最受歡迎的NLP練習工具。

---

## 1. Transformers 庫 — 快速入門

### Pipeline API（5行程式碼）

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

### 自動模型與自動標記器

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

## 2. 資料集庫

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

## 3. Trainer API — 快速微調

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

## 4. PEFT & LoRA — 高效能微調

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

## 5. 模型中心 — 尋找預訓練模型

|任務 |熱門型號 |越南語 |
|-----|----------|------------|
|分類|伯特基地，羅伯塔大| vinai/phobert-base-v2 |
|內爾 | dslim/bert-base-NER | dslim/bert-base-NER | NlpHUST/vibert4news-base-cased | NlpHUST/vibert4news-base-cased |
|品質保證 | Deepset/羅伯塔基地小隊2 | — |
|翻譯 |赫爾辛基-NLP/opus-mt-* | VietAI/envit5-翻譯 |
|嵌入 |句子轉換器/* | BAAI/bge-m3 |

---

## 總結

|組件|功能|
|------------|----------|
| `pipeline()` |快速推理，5行程式碼 |
| `AutoModel` |載入任何預先訓練的模型 |
| `datasets` |載入、處理、快取資料集 |
| `Trainer` |使用內建最佳實踐微調 |
| `PEFT/LoRA` |高效率微調（0.1-1%參數）|

---

## 下一篇文章

**第 13 課：文本分類與情緒分析** — 最常應用的 NLP 問題：文本分類與情緒分析。
