---
id: 019c9619-bb07-7007-c007-bb0700000007
title: 'Bài 7: BERT và Encoder-only Models'
slug: bai-7-bert-va-encoder-only-models
description: >-
  Tìm hiểu BERT (2018) — kiến trúc Encoder-only đột phá với Masked Language
  Modeling và Next Sentence Prediction. Học cách fine-tune BERT cho các tasks
  downstream như sentiment analysis, NER, Q&A, và so sánh các biến thể RoBERTa,
  ALBERT, DistilBERT.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Kiến trúc Transformer"
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: "AI & LLM: Từ Cơ bản đến Nâng cao"
  slug: ai-llm-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2942" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2942)"/>

  <!-- Decorations -->
  <g>
    <circle cx="891" cy="83" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="682" cy="274" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="973" cy="205" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="764" cy="136" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="1055" cy="67" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="193" x2="1100" y2="273" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="223" x2="1050" y2="293" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1067.2487113059642,229 1067.2487113059642,257 1043,271 1018.7512886940357,257 1018.7512886940357,229 1043,215" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI &amp; ML — Bài 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 7: BERT và Encoder-only Models</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI &amp; LLM: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Kiến trúc Transformer</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# Bài 7: BERT và Encoder-only Models

## 1. BERT Ra Đời 2018 — Câu Chuyện Đằng Sau

Tháng 10 năm 2018, Jacob Devlin và nhóm nghiên cứu tại Google công bố **BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding**. BERT phá vỡ kỷ lục trên 11 NLP benchmarks cùng lúc — một điều chưa từng xảy ra trước đó.

**Vấn đề với các mô hình trước:**
- ELMo (2018) dùng biLSTM — bidirectional nhưng shallow (hai chiều độc lập, không tương tác sâu).
- GPT-1 (2018) dùng Transformer Decoder — unidirectional (chỉ nhìn trái sang phải), không tận dụng được context từ phải.

**Insight của BERT:** Để hiểu một từ, bạn cần ngữ cảnh từ **cả hai phía**. Từ "bank" trong "I went to the bank to deposit money" vs "I sat by the bank of the river" cần nhìn cả trước lẫn sau mới phân biệt được.

**BERT = Bidirectional Encoder Representations from Transformers** — dùng Transformer Encoder (không có causal mask) để học deep bidirectional representations.

### Hai phiên bản gốc:

| | BERT-Base | BERT-Large |
|---|---|---|
| Layers (L) | 12 | 24 |
| Hidden size (H) | 768 | 1024 |
| Attention heads (A) | 12 | 16 |
| Parameters | 110M | 340M |

## 2. Pre-training Tasks: MLM và NSP

BERT được pre-train trên **BookCorpus** (800M words) + **English Wikipedia** (2,500M words) với hai tasks:

### 2.1 Masked Language Modeling (MLM)

Ý tưởng lấy cảm hứng từ **Cloze test** trong ngôn ngữ học. Random mask 15% tokens trong input và dự đoán chúng.

Trong 15% tokens bị chọn:
- **80%** thay bằng `[MASK]` token.
- **10%** thay bằng một random token khác.
- **10%** giữ nguyên token gốc.

Tại sao không mask 100%? Vì lúc fine-tuning sẽ không có `[MASK]` token — tạo **mismatch** giữa pre-training và fine-tuning. Trộn lẫn ba loại giúp mô hình học được representation tốt hơn.

```
Input:  "my dog is [MASK] . he likes play [MASK] ."
Output: "my dog is hairy . he likes playing ."
```

### 2.2 Next Sentence Prediction (NSP)

Nhiều tasks quan trọng (Q&A, Natural Language Inference) đòi hỏi hiểu quan hệ giữa hai câu. NSP train model phân biệt:
- **IsNext (50%)**: Câu B thực sự theo sau câu A trong corpus.
- **NotNext (50%)**: Câu B là random sentence.

```
[CLS] the man went to [MASK] store [SEP] he bought a gallon [MASK] milk [SEP]
Label: IsNext

[CLS] the man went to [MASK] store [SEP] penguin [MASK] are flightless birds [SEP]
Label: NotNext
```

*Lưu ý: Các nghiên cứu sau (RoBERTa, 2019) cho thấy NSP không thực sự hữu ích và thậm chí làm giảm performance — BERT dùng NSP vì lý do này.*

## 3. Kiến trúc BERT: Tokenization và Special Tokens

### 3.1 WordPiece Tokenization

BERT dùng **WordPiece** với vocab size 30,000. Các từ hiếm bị split thành subwords:
```
"unaffable"  →  ["un", "##aff", "##able"]
"playing"    →  ["play", "##ing"]
```
Prefix `##` chỉ đây là continuation của từ trước.

### 3.2 Special Tokens

- **`[CLS]`**: Token đầu tiên — representation của nó được dùng cho classification tasks.
- **`[SEP]`**: Phân cách các câu.
- **`[MASK]`**: Placeholder trong MLM.
- **`[PAD]`**: Padding để đồng đều độ dài trong batch.

```
Input sequence:   [CLS] Sentence A [SEP] Sentence B [SEP]
Token IDs:         101   ...        102   ...        102
Segment IDs:        0     0          0     1          1
Position IDs:       0     1,2,...    n    n+1,...    m
```

## 4. Fine-tuning BERT cho Downstream Tasks

BERT đặc biệt mạnh vì fine-tuning rất đơn giản: thêm một linear layer lên trên pretrained BERT và train toàn bộ với learning rate nhỏ.

### 4.1 Text Classification

Lấy representation của `[CLS]` token → Linear(hidden_size, num_labels).

### 4.2 Named Entity Recognition (NER)

Lấy representation của **mỗi token** → Linear(hidden_size, num_entity_labels).

### 4.3 Extractive Question Answering (SQuAD)

Dự đoán **start** và **end** position của answer span trong passage:
```
Linear(hidden_size, 2)  →  start_logits, end_logits
```

## 5. So sánh Các BERT Variants

### RoBERTa (2019) — Facebook AI

**Robustly Optimized BERT Pretraining Approach** — train BERT đúng cách hơn:
- Loại bỏ NSP (chứng minh là có hại).
- Train lâu hơn (10x steps), batch lớn hơn.
- Dynamic masking (mask patterns khác nhau mỗi epoch).
- Train trên 160GB data (thay vì 16GB của BERT).
- Kết quả: vượt BERT đáng kể trên GLUE, SQuAD.

### ALBERT (2020) — Google

**A Lite BERT** — giảm parameter count:
- **Factorized embedding parameterization**: Tách embedding matrix thành hai ma trận nhỏ hơn.
- **Cross-layer parameter sharing**: Chia sẻ weights giữa tất cả layers.
- Thay NSP bằng **Sentence Order Prediction (SOP)** — hiệu quả hơn.
- ALBERT-xxlarge có ít params hơn BERT-Large nhưng performance tốt hơn.

### DistilBERT (2019) — Hugging Face

**Knowledge Distillation** từ BERT-Base:
- 40% ít parameters hơn (66M vs 110M).
- 60% nhanh hơn khi inference.
- Giữ 97% performance của BERT-Base.
- Dùng **soft labels** từ teacher BERT để train student.

| Model | Params | GLUE Score | Speed |
|---|---|---|---|
| BERT-Base | 110M | 79.6 | 1x |
| RoBERTa-Base | 125M | 83.7 | 1x |
| ALBERT-Base | 12M | 80.1 | 1.7x |
| DistilBERT | 66M | 77.0 | 1.6x |

## 6. Code: Fine-tune BERT cho Sentiment Analysis với Hugging Face

```python
# pip install transformers datasets torch scikit-learn

import torch
from torch.utils.data import DataLoader
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    get_linear_schedule_with_warmup,
)
from datasets import load_dataset
from torch.optim import AdamW
from sklearn.metrics import accuracy_score
import numpy as np

# ── 1. Load dataset ──────────────────────────────────────────────
dataset = load_dataset("imdb")  # 25k train, 25k test, binary sentiment

# ── 2. Tokenization ──────────────────────────────────────────────
MODEL_NAME = "bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)

def tokenize(batch):
    return tokenizer(
        batch["text"],
        padding="max_length",
        truncation=True,
        max_length=256,
    )

tokenized = dataset.map(tokenize, batched=True, remove_columns=["text"])
tokenized.set_format("torch")

train_loader = DataLoader(tokenized["train"], batch_size=16, shuffle=True)
test_loader  = DataLoader(tokenized["test"],  batch_size=32, shuffle=False)

# ── 3. Model ──────────────────────────────────────────────────────
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model = AutoModelForSequenceClassification.from_pretrained(
    MODEL_NAME, num_labels=2
).to(device)

# ── 4. Optimizer & Scheduler ──────────────────────────────────────
EPOCHS = 3
optimizer = AdamW(model.parameters(), lr=2e-5, weight_decay=0.01)
total_steps = len(train_loader) * EPOCHS
scheduler = get_linear_schedule_with_warmup(
    optimizer, num_warmup_steps=total_steps // 10, num_training_steps=total_steps
)

# ── 5. Training loop ──────────────────────────────────────────────
for epoch in range(EPOCHS):
    model.train()
    total_loss = 0.0

    for batch in train_loader:
        batch = {k: v.to(device) for k, v in batch.items()}
        outputs = model(**batch)

        loss = outputs.loss
        loss.backward()

        torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
        optimizer.step()
        scheduler.step()
        optimizer.zero_grad()

        total_loss += loss.item()

    avg_loss = total_loss / len(train_loader)
    print(f"Epoch {epoch+1}/{EPOCHS} | Loss: {avg_loss:.4f}")

# ── 6. Evaluation ─────────────────────────────────────────────────
model.eval()
all_preds, all_labels = [], []

with torch.no_grad():
    for batch in test_loader:
        batch = {k: v.to(device) for k, v in batch.items()}
        outputs = model(**batch)
        preds = outputs.logits.argmax(dim=-1).cpu().numpy()
        labels = batch["labels"].cpu().numpy()
        all_preds.extend(preds)
        all_labels.extend(labels)

acc = accuracy_score(all_labels, all_preds)
print(f"Test Accuracy: {acc:.4f}")   # Expected ~93-94%

# ── 7. Inference ──────────────────────────────────────────────────
def predict_sentiment(text: str) -> str:
    inputs = tokenizer(text, return_tensors="pt", truncation=True, max_length=256).to(device)
    with torch.no_grad():
        logits = model(**inputs).logits
    pred = logits.argmax(dim=-1).item()
    return "Positive" if pred == 1 else "Negative"

print(predict_sentiment("This movie was absolutely fantastic!"))  # Positive
print(predict_sentiment("Worst film I've ever seen."))            # Negative
```

### Fine-tuning nhanh hơn với Hugging Face Trainer API

```python
from transformers import TrainingArguments, Trainer
import evaluate

accuracy_metric = evaluate.load("accuracy")

def compute_metrics(eval_pred):
    logits, labels = eval_pred
    preds = np.argmax(logits, axis=-1)
    return accuracy_metric.compute(predictions=preds, references=labels)

training_args = TrainingArguments(
    output_dir="./bert-imdb",
    num_train_epochs=3,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=32,
    warmup_ratio=0.1,
    weight_decay=0.01,
    learning_rate=2e-5,
    evaluation_strategy="epoch",
    save_strategy="epoch",
    load_best_model_at_end=True,
    fp16=torch.cuda.is_available(),  # Mixed precision training
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

## 7. Khi Nào Dùng BERT vs GPT?

### Chọn BERT (Encoder-only) khi:
- **Classification tasks**: Sentiment, spam detection, topic classification.
- **NER** và sequence labeling.
- **Extractive Q&A**: Tìm answer span trong document.
- **Semantic similarity**: Sentence embeddings, semantic search.
- **Latency nhạy cảm**: Encoder chạy một lần, nhanh hơn decoder autoregressive.

### Chọn GPT (Decoder-only) khi:
- **Text generation**: Viết văn bản, code, tóm tắt.
- **Chatbot và conversational AI**.
- **Zero/few-shot learning** với prompting.
- **Creative tasks** cần output mở.
- **Instruction following**.

### Rule of thumb đơn giản:
> "Nếu bạn muốn **hiểu** văn bản → BERT. Nếu bạn muốn **tạo ra** văn bản → GPT."

Tuy nhiên trong thực tế hiện đại (2024-2025), các **decoder-only LLMs lớn** (GPT-4, LLaMA, Gemma) đang dần thay thế cả BERT cho nhiều understanding tasks nhờ in-context learning và instruction following — đặc biệt khi bạn không muốn fine-tune.

## Tóm tắt

1. **BERT** dùng Transformer Encoder bidirectional — mỗi token có thể attend vào cả hai chiều.
2. **MLM** (Masked Language Modeling) là pre-training objective chính — hiệu quả hơn NSP.
3. **Fine-tuning** đơn giản: thêm linear head, train với lr nhỏ (2e-5 đến 5e-5), vài epochs.
4. **RoBERTa** là phiên bản được optimize tốt hơn; **DistilBERT** nhỏ và nhanh hơn.
5. BERT tốt nhất cho **understanding tasks**; GPT tốt nhất cho **generation tasks**.

Bài tiếp theo sẽ khám phá **GPT và Decoder-only models** — kiến trúc đứng sau ChatGPT và các LLMs hiện đại nhất.
