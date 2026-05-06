---
id: 019d8b30-bb11-7011-c011-ee1100000011
title: 'Lesson 11: GPT & Autoregressive Models — Generative Pre-trained Transformer'
slug: bai-11-gpt-autoregressive
description: >-
  GPT architecture: causal language modeling. GPT-1 → GPT-2 → GPT-3 → GPT-4
  Evolution. Autoregressive generation: temperature, top-k, top-p sampling.
  Emergent abilities. In-context learning. Compare BERT (encoder) vs GPT
  (decoder) vs T5 (encoder-decoder).
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'Part 4: Pre-trained Language Models — BERT, GPT & Beyond'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP from Basics to Advanced: Mastering Natural Language Processing'
  slug: nlp-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1871" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1871)"/>

  <!-- Decorations -->
  <g>
    <circle cx="668" cy="134" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="736" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="804" cy="30" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="872" cy="238" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="186" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="214" x2="1100" y2="294" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="244" x2="1050" y2="314" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="939.1147367097487,99.5 939.1147367097487,128.5 914,143 888.8852632902513,128.5 888.8852632902513,99.50000000000001 914,85" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI & ML — Lesson 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: GPT & Autoregressive Models —</tspan>
      <tspan x="60" dy="42">Generative Pre-trained Transformer</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP from Basics to Advanced: Mastering Natural Language Processing</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Pre-trained Language Models — BERT, GPT & Beyond</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

If BERT "reads" text from two directions, **GPT** "writes" text from left to right — **autoregressive generation**. GPT is the foundation of ChatGPT, Claude, Gemini — LLMs that are changing the world.

---

## 1. GPT Architecture: Decoder-only

```
Input:  "Once upon a time"
         │      │     │    │
         ▼      ▼     ▼    ▼
    ┌──────────────────────────┐
    │   Transformer Decoder    │
    │   (Causal Self-Attention)│
    │    Chỉ nhìn bên trái!   │
    └──────────────────────────┘
         │      │     │    │
         ▼      ▼     ▼    ▼
       "upon"  "a"  "time" ","
```

### Causal Language Modeling

$$P(x_1, x_2, ..., x_n) = \prod_{i=1}^{n} P(x_i | x_1, ..., x_{i-1})$$

The model predicts the next token based on **all previous tokens** (not looking into the future).

---

## 2. Evolution: GPT-1 → GPT-4

| Model | Year | Parameters | Training Data | Breakthrough |
|-------|-----|-----------|-------------|-------------|
| GPT-1 | 2018 | 117M | BookCorpus | Generative pre-training works |
| GPT-2 | 2019 | 1.5B | WebText (40GB) | "Too dangerous to release" |
| GPT-3 | 2020 | 175B | 570GB text | In-context learning, few-shot |
| GPT-4 | 2023 | ~1.8T (rumored) | Internet-scale | Multimodal, reasoning |
| GPT-4o | 2024 | Undisclosed | + Images, Audio | Native multimodal |

---

## 3. Decoding Strategies

### Temperature, Top-k, Top-p

```python
from transformers import GPT2LMHeadModel, GPT2Tokenizer

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")

input_text = "Artificial intelligence will"
input_ids = tokenizer.encode(input_text, return_tensors="pt")

# Greedy (deterministic, boring)
greedy = model.generate(input_ids, max_length=50, do_sample=False)

# Temperature sampling (creativity control)
creative = model.generate(
    input_ids, max_length=50,
    do_sample=True,
    temperature=0.8,   # < 1: focused, > 1: creative
    top_k=50,          # Chỉ xét 50 tokens có probability cao nhất
    top_p=0.9,         # Nucleus sampling: 90% probability mass
)

print(tokenizer.decode(creative[0]))
```

| Parameters | Low | Cao |
|-----------|-------|-----|
| Temperature | Accurate, repeatable | Creative, random |
| Top-k | Few options, safe | Many, diverse options |
| Top-p | Focus on tokens definitely | Consider more tokens |

---

## 4. In-Context Learning (ICL)

GPT-3 discovers: no need for fine-tuning, just **put an example in the prompt**!

```python
prompt = """
Classify the sentiment:
Text: "This movie is amazing!" → Positive
Text: "Terrible experience" → Negative
Text: "The food was okay" → Neutral
Text: "I absolutely love this product!" →"""

# GPT sẽ trả lời: "Positive"
# Không cần fine-tune! Chỉ cần prompt engineering.
```

| Paradigm | Example | Fine-tune? |
|----------|-------|-----------|
| Zero-shot | There are no examples | No |
| One-shot | 1 example | No |
| Few-shot | 3-10 examples | No |
| Fine-tuning | Thousands of examples | Yes |

---

## 5. BERT vs GPT vs T5

| Features | BERT (Encoder) | GPT (Decoder) | T5 (Enc-Dec) |
|-----------|---------------|---------------|-------------|
| Direction | Bidirectional | Left-to-right | Both |
| Pre-training | MLM + NSP | Causal LM | Denoising |
| Good for | Classification, NER, QA | Generation, chat | Everything (text-to-text) |
| Example | PhoBERT, RoBERTa | GPT-4, LLaMA | T5, mT5, ViT5 |

---

## Summary

| Concept | Details |
|-----------|---------|
| GPT | Decoder-only, causal LM, autoregressive |
| Scaling laws | Bigger model + more data = better performance |
| Decoding | Temperature, top-k, top-p controls output diversity |
| ICL | Few-shot learning without fine-tuning |
| BERT vs GPT | Understanding (BERT) vs Generation (GPT) |

---

## Next article

**Lesson 12: Hugging Face Ecosystem** — Practice modern NLP with the most used libraries: Transformers, Datasets, Tokenizers.
