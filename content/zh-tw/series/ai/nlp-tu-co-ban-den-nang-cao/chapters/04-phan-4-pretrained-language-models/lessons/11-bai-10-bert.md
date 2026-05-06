---
id: 019d8b30-bb10-7010-c010-ee1000000010
title: 第 10 課：BERT－Transformers 的雙向編碼器表示
slug: bai-10-bert
description: >-
  BERT 架構：掩碼語言建模、下一句預測。預訓練與微調範例。 BERT
  變體：RoBERTa、ALBERT、DistilBERT、PhoBERT（越南語）。特徵提取與微調。使用 Hugging Face Transformer
  進行演示分類。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 第 4 部分：預訓練語言模型 — BERT、GPT 及其他
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：BERT－雙向編碼器</tspan>
      <tspan x="60" dy="42">變形金剛的代表</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：預訓練語言模型 — BERT、GPT 及其他</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**BERT**（Devlin 等人，2018）是 **NLP 革命性的模型**——首次證明在大量文本上預先訓練的模型可以微調幾乎任何 NLP 任務並達到最先進的水平。 BERT 開啟了 NLP 的**遷移學習**時代。

---

## 1. BERT 架構

### 僅編碼器變壓器

BERT 僅使用 Transformer 的 **編碼器** — 處理文字 **雙向**（同時左右和左右）。

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

### 預訓練目標

|目標|它是如何運作的 |
|------------|--------------|
| **MLM（掩碼語言建模）** |覆蓋15%的token，預測覆蓋的單字 |
| **NSP（下一句預測）** |預測句子 B 是否是句子 A 的下一個句子 |

```
MLM: "The [MASK] sat on the [MASK]" → "The cat sat on the mat"
NSP: Câu A + Câu B → IsNext / NotNext
```

---

## 2. 微調 BERT 進行分類

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

## 3.BERT 變體

|型號|差異|參數|越南語 |
|--------|----------|------------|-----------|
| BERT 基礎 |原創| 110M |不好|
|羅伯塔 |放棄NSP，訓練更長| 125M |沒有 |
|阿爾伯特 |因式分解嵌入 | 12M–235M |沒有 |
| 蒸餾伯特 |蒸餾版 BERT，縮小 40% | 66M |沒有 |
| **PhoBERT** |越南語預訓練 | 135M | **是的！ ** |
| XLM-羅伯塔 |多語言，100種語言，100種語言| 270M |是的 |

### PhoBERT 越南語

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

## 4. 特徵提取與微調

|如何使用 |意義|何時使用 |
|------------|---------|-------------|
|特徵提取|凍結BERT，只訓練分類器頭 |資料少，計算有限 |
|微調|訓練兩個 BERT（小學習率）|資料足夠，準確度要求高 |
| LoRA/轉接器 |新增小的可訓練層 |平衡品質/成本|

```python
# Feature extraction: freeze BERT
for param in model.bert.parameters():
    param.requires_grad = False
# Chỉ train classification head
```

---

## 總結

|重點|詳情 |
|------------|---------|
|伯特 |僅編碼器、雙向、MLM + NSP |
|遷移學習 |預訓練 → 微調範式 |
|菲伯特 | BERT 越南語 |
|微調| 2-5 epoch，lr=2e-5，batch=16-32 |

---

## 下一篇文章

**第 11 課：GPT 與自回歸模型** — Transformer 的另一面：僅解碼器、因果語言建模以及通往 ChatGPT 的路徑。
