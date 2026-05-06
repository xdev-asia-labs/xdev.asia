---
id: 019c9619-bb07-7007-c007-bb0700000007
title: 'Lesson 7: BERT and Encoder-only Models'
slug: bai-7-bert-va-encoder-only-models
description: >-
  Learn about BERT (2018) — groundbreaking Encoder-only architecture with Masked
  Language Modeling and Next Sentence Prediction. Learn how to fine-tune BERT
  for downstream tasks such as sentiment analysis, NER, Q&A, and compare
  RoBERTa, ALBERT, DistilBERT variants.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 2: Transformer architecture'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI & LLM: From Basics to Advanced'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI & ML — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: BERT and Encoder-only Models</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI & LLM: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Transformer architecture</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# Lesson 7: BERT and Encoder-only Models

## 1. BERT was born in 2018 — The Story Behind

In October 2018, Jacob Devlin and the research team at Google announced **BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding**. BERT broke records on 11 NLP benchmarks at the same time — something that had never happened before.

**Problems with previous models:**
- ELMo (2018) uses biLSTM — bidirectional but shallow (two independent directions, no deep interaction).
- GPT-1 (2018) uses Transformer Decoder — unidirectional (only looks left to right), does not take advantage of context from the right.

**BERT Insight:** To understand a word, you need context from **both sides**. The word "bank" in "I went to the bank to deposit money" vs "I sat by the bank of the river" needs to be seen both before and after to distinguish.

**BERT = Bidirectional Encoder Representations from Transformers** — uses Transformer Encoder (without causal mask) to learn deep bidirectional representations.

### Two original versions:

| | BERT-Base | BERT-Large |
|---|---|---|
| Layers (L) | 12 | 24 |
| Hidden size (H) | 768 | 1024 |
| Attention heads (A) | 12 | 16 |
| Parameters | 110M | 340M |

## 2. Pre-training Tasks: MLM and NSP

BERT is pre-trained on **BookCorpus** (800M words) + **English Wikipedia** (2,500M words) with two tasks:

### 2.1 Masked Language Modeling (MLM)

The idea is inspired by **Cloze test** in linguistics. Random mask 15% tokens in input and predict them.

Of the 15% of selected tokens:
- **80%** replaced with `[MASK]` token.
- **10%** replaced with another random token.
- **10%** retains the original token.

Why not mask 100%? Because fine-tuning will not be available `[MASK]` token — creates **mismatch** between pre-training and fine-tuning. Mixing the three types helps the model learn better representations.

```
Input:  "my dog is [MASK] . he likes play [MASK] ."
Output: "my dog is hairy . he likes playing ."
```

### 2.2 Next Sentence Prediction (NSP)

Many important tasks (Q&A, Natural Language Inference) require understanding the relationship between two sentences. NSP train model distinguishes:
- **IsNext (50%)**: Sentence B actually follows sentence A in the corpus.
- **NotNext (50%)**: Sentence B is a random sentence.

```
[CLS] the man went to [MASK] store [SEP] he bought a gallon [MASK] milk [SEP]
Label: IsNext

[CLS] the man went to [MASK] store [SEP] penguin [MASK] are flightless birds [SEP]
Label: NotNext
```

*Note: Later studies (RoBERTa, 2019) show that NSP is not really useful and even reduces performance — BERT uses NSP for this reason.*

## 3. BERT Architecture: Tokenization and Special Tokens

### 3.1 WordPiece Tokenization

BERT uses **WordPiece** with vocab size 30,000. Rare words are split into subwords:
```
"unaffable"  →  ["un", "##aff", "##able"]
"playing"    →  ["play", "##ing"]
```
Prefix `##` only this is a continuation of the previous word.

### 3.2 Special Tokens

- **`[CLS]`**: First token — its representation is used for classification tasks.
- **`[SEP]`**: Separate sentences.
- **`[MASK]`**: Placeholder in MLM.
- **`[PAD]`**: Padding to uniform length in batch.

```
Input sequence:   [CLS] Sentence A [SEP] Sentence B [SEP]
Token IDs:         101   ...        102   ...        102
Segment IDs:        0     0          0     1          1
Position IDs:       0     1,2,...    n    n+1,...    m
```

## 4. Fine-tuning BERT for Downstream Tasks

BERT is especially powerful because fine-tuning is simple: add a linear layer on top of pretrained BERT and train the whole thing with a small learning rate.

### 4.1 Text Classification

Get representation of `[CLS]` token → Linear(hidden_size, num_labels).

### 4.2 Named Entity Recognition (NER)

Get the representation of **each token** → Linear(hidden_size, num_entity_labels).

### 4.3 Extractive Question Answering (SQuAD)

Predict the **start** and **end** position of the answer span in the passage:
```
Linear(hidden_size, 2)  →  start_logits, end_logits
```

## 5. Compare BERT Variants

### RoBERTa (2019) — Facebook AI

**Robustly Optimized BERT Pretraining Approach** — train BERT more properly:
- Eliminates NSP (proven to be harmful).
- Train longer (10x steps), larger batch.
- Dynamic masking (different mask patterns each epoch).
- Train on 160GB of data (instead of 16GB of BERT).
- Results: significantly surpasses BERT on GLUE, SQuAD.

### ALBERT (2020) — Google

**A Lite BERT** — reduce parameter count:
- **Factorized embedding parameterization**: Split the embedding matrix into two smaller matrices.
- **Cross-layer parameter sharing**: Share weights between all layers.
- Replace NSP with **Sentence Order Prediction (SOP)** — more effective.
- ALBERT-xxlarge has fewer params than BERT-Large but better performance.

### DistilBERT (2019) — Hugging Face

**Knowledge Distillation** from BERT-Base:
- 40% fewer parameters (66M vs 110M).
- 60% faster when inference.
- Maintain 97% performance of BERT-Base.
- Use **soft labels** from teacher BERT to train students.

| Model | Params | GLUE Score | Speed ​​|
|---|---|---|---|
| BERT-Base | 110M | 79.6 | 1x |
| RoBERTa-Base | 125M | 83.7 | 1x |
| ALBERT-Base | 12M | 80.1 | 1.7x |
| DistilBERT | 66M | 77.0 | 1.6x |

## 6. Code: Fine-tune BERT for Sentiment Analysis with Hugging Face

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

### Faster fine-tuning with Hugging Face Trainer API

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

## 7. When to use BERT vs GPT?

### Choose BERT (Encoder-only) when:
- **Classification tasks**: Sentiment, spam detection, topic classification.
- **NER** and sequence labeling.
- **Extractive Q&A**: Find answer span in document.
- **Semantic similarity**: Sentence embeddings, semantic search.
- **Latency sensitive**: Encoder runs once, faster than autoregressive decoder.

### Choose GPT (Decoder-only) when:
- **Text generation**: Write text, code, summary.
- **Chatbot and conversational AI**.
- **Zero/few-shot learning** with prompting.
- **Creative tasks** need open output.
- **Instruction follows**.

### Simple rule of thumb:
> "If you want to **understand** text → BERT. If you want to **generate** text → GPT."

However in modern reality (2024-2025), the major **decoder-only LLMs** (GPT-4, LLaMA, Gemma) are gradually replacing BERT for many understanding tasks thanks to in-context learning and instruction following — especially when you don't want fine-tune.

## Summary

1. **BERT** uses Transformer Encoder bidirectional — each token can attend in both directions.
2. **MLM** (Masked Language Modeling) is the main pre-training objective — more effective than NSP.
3. **Fine-tuning** is simple: add linear head, train with small lr (2e-5 to 5e-5), few epochs.
4. **RoBERTa** is a better optimized version; **DistilBERT** is smaller and faster.
5. BERT is best for **understanding tasks**; GPT is best for **generation tasks**.

The next article will explore **GPT and Decoder-only models** — the architecture behind ChatGPT and state-of-the-art LLMs.
