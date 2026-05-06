---
id: 019d8b30-bb01-7001-c001-ee0100000001
title: 'Lesson 1: What is NLP? — Overview of the field of Natural Language Processing'
slug: bai-1-nlp-la-gi
description: >-
  Definition of NLP, history of development from rule-based to deep learning.
  Core problems: classification, NER, POS tagging, parsing, generation, QA,
  summarization. NLP pipeline overview. Simple end-to-end demo with Python.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'Part 1: NLP Foundations — Understanding Language Through a Computer Lens'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP from Basics to Advanced: Mastering Natural Language Processing'
  slug: nlp-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9534" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9534)"/>

  <!-- Decorations -->
  <g>
    <circle cx="640" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="170" x2="1100" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="200" x2="1050" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1041.650635094611,207.5 1041.650635094611,232.5 1020,245 998.349364905389,232.5 998.349364905389,207.5 1020,195" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: What is NLP? — Overview of the Processing field</tspan>
      <tspan x="60" dy="42">Natural Language Physics</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP from Basics to Advanced: Mastering Natural Language Processing</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: NLP Foundations — Understanding Language Through a Computer Lens</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**Natural Language Processing (NLP)** — Natural Language Processing — is a field at the intersection of **Computer Science**, **Artificial Intelligence** and **Linguistics**, studying how to help computers understand, analyze and generate human language.

> 💡 **One sentence:** NLP teaches computers to "read", "understand" and "write" natural language.

From Google Search, Gmail Smart Compose, ChatGPT to virtual assistant Siri — all are based on NLP.

---

## 1. Where is NLP in AI?

```
┌─────────────────────────────────────────────────────────┐
│                  ARTIFICIAL INTELLIGENCE                 │
│                                                         │
│   ┌─────────────────────────────────────────────────┐   │
│   │              MACHINE LEARNING                    │   │
│   │                                                  │   │
│   │   ┌────────────────────────────────────────┐    │   │
│   │   │          DEEP LEARNING                  │    │   │
│   │   │                                         │    │   │
│   │   │   ┌──────────┐  ┌──────────────────┐   │    │   │
│   │   │   │    NLP    │  │ Computer Vision  │   │    │   │
│   │   │   │          │  │                  │   │    │   │
│   │   │   │ • Text   │  │ • Image          │   │    │   │
│   │   │   │ • Speech │  │ • Video          │   │    │   │
│   │   │   └──────────┘  └──────────────────┘   │    │   │
│   │   └────────────────────────────────────────┘    │   │
│   └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## 2. History of NLP — From Rule-based to Transformer

| Period | Method | Features | Example |
|----------|-------------|-----------|-------|
| 1950s–1980s | **Rule-based** | Write regex, grammar rules manually | ELIZA chatbot |
| 1990s–2000s | **Statistical** | Probability, n-gram, HMM, CRF | Spam filters, POS tagging |
| 2010s | **ML/Deep Learning** | Word2Vec, RNN, LSTM, CNN | Sentiment analysis |
| 2017 | **Transformer** | Self-attention, parallelization | Improved Google Translate |
| 2018–now | **Pre-trained LMs** | BERT, GPT, T5, LLaMA | ChatGPT, Gemini, Claude |

### Important turning point

1. **2013 — Word2Vec**: First time representing words using dense meaningful vectors
2. **2017 — Transformer**: "Attention Is All You Need" changes everything
3. **2018 — BERT & GPT**: Transfer learning for NLP, pre-train once, use everywhere
4. **2022 to present — LLM era**: ChatGPT, emergent ability, reasoning

---

## 3. Core problems in NLP

### 3.1 Classification by level

```
┌────────────────────────────────────────────────────────┐
│                    CÁC BÀI TOÁN NLP                    │
│                                                        │
│  📝 CẤP ĐỘ TỪ (Token-level)                          │
│  ├── POS Tagging: gán nhãn từ loại (danh từ, động từ) │
│  ├── NER: trích xuất thực thể (người, địa điểm, tổ chức)│
│  └── Word Segmentation: tách từ (quan trọng cho tiếng Việt)│
│                                                        │
│  📄 CẤP ĐỘ CÂU/TÀI LIỆU (Sequence-level)            │
│  ├── Text Classification: phân loại văn bản            │
│  ├── Sentiment Analysis: phân tích cảm xúc             │
│  └── Topic Modeling: phát hiện chủ đề                  │
│                                                        │
│  🔄 CẤP ĐỘ SINH (Generation)                          │
│  ├── Machine Translation: dịch máy                     │
│  ├── Text Summarization: tóm tắt                       │
│  ├── Question Answering: hỏi đáp                       │
│  └── Text Generation: sinh văn bản (ChatGPT, Gemini)   │
│                                                        │
│  🔗 CẤP ĐỘ QUAN HỆ (Relation)                        │
│  ├── Semantic Similarity: đo độ tương đồng nghĩa       │
│  ├── Textual Entailment: suy luận logic                 │
│  └── Coreference Resolution: xác định đại từ           │
└────────────────────────────────────────────────────────┘
```

### 3.2 Practical example

| Math problem | Input | Output | Application |
|----------|-------|-------|----------|
| Sentiment Analysis | "This product is great!" | Positive (0.95) | Review monitoring |
| NER | "Nguyen Van A works at FPT" | PER: Nguyen Van A, ORG: FPT | Extract information |
| Translation | "Hello, how are you?" | "Hello, how are you?" | Google Translate |
| Summarization | 1000 word article | 50 word summary | Auto news |
| QA | Context + "Who is Apple's CEO?" | "Tim Cook" | Chatbots, search |

---

## 4. NLP Pipeline overview

No matter what problem you solve, the basic NLP pipeline includes the following steps:

```
Input Text
    │
    ▼
┌──────────────────┐
│  1. Preprocessing │ ← Tokenization, cleaning, normalization
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  2. Representation│ ← BoW, TF-IDF, Word Embeddings, BERT
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  3. Modeling      │ ← ML/DL model: classification, NER, generation
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  4. Post-processing│ ← Decode, format, threshold, filter
└────────┬─────────┘
         │
         ▼
    Output
```

---

## 5. Demo: NLP in 5 minutes with Python

```python
# Cài đặt: pip install transformers torch

from transformers import pipeline

# 1. Sentiment Analysis
sentiment = pipeline("sentiment-analysis")
result = sentiment("Khóa học NLP này thực sự hay quá!")
print(result)
# [{'label': 'POSITIVE', 'score': 0.9998}]

# 2. Named Entity Recognition
ner = pipeline("ner", grouped_entities=True)
entities = ner("Elon Musk là CEO của Tesla và SpaceX tại California")
for e in entities:
    print(f"  {e['word']}: {e['entity_group']} ({e['score']:.2f})")
# Elon Musk: PER (0.99)
# Tesla: ORG (0.98)
# SpaceX: ORG (0.97)
# California: LOC (0.99)

# 3. Question Answering
qa = pipeline("question-answering")
answer = qa(
    question="NLP là gì?",
    context="NLP (Natural Language Processing) là lĩnh vực AI giúp máy tính hiểu ngôn ngữ tự nhiên."
)
print(f"Answer: {answer['answer']} (score: {answer['score']:.2f})")

# 4. Summarization
summarizer = pipeline("summarization")
summary = summarizer("Your long text here...", max_length=50)
print(summary)

# 5. Translation
translator = pipeline("translation_en_to_vi", model="Helsinki-NLP/opus-mt-en-vi")
result = translator("Natural Language Processing is amazing!")
print(result)
```

> 🎯 Only with Hugging Face `pipeline`, you have run 5 different NLP problems — no need to understand the theory!

---

## 6. NLP for Vietnamese — Quick Overview

Vietnamese has specific challenges:

| Challenge | Example | Solution |
|-------------|-------|-----------|
| Word segmentation | "student" vs "study" + "student" | VnCoreNLP, underthesea |
| Bar mark | "study" ≠ "learn" ≠ "paint" | Accent normalization |
| Few resources | Fewer datasets compared to English | PhoBERT, ViT5, VLSP datasets |
| Compound words | "computer", "keyboard" | Dictionary-based segmentation |

```python
# Demo NLP tiếng Việt với underthesea
from underthesea import word_tokenize, pos_tag, ner

text = "Nguyễn Phú Trọng làm việc tại Hà Nội"

# Word segmentation
print(word_tokenize(text))
# ['Nguyễn_Phú_Trọng', 'làm_việc', 'tại', 'Hà_Nội']

# POS Tagging
print(pos_tag(text))
# [('Nguyễn_Phú_Trọng', 'Np'), ('làm_việc', 'V'), ('tại', 'E'), ('Hà_Nội', 'Np')]
```

> 📌 Lesson 17 will delve into NLP for Vietnamese.

---

## Summary

| Concept | Meaning |
|-----------|---------|
| NLP | The field of AI helps computers understand natural language |
| History | Rule-based → Statistical → Deep Learning → Transformer → LLM |
| Math problem | Classification, NER, QA, Summarization, Translation, Generation |
| Pipelines | Preprocessing → Representation → Modeling → Post-processing |
| Vietnamese | Word segmentation challenge, low resources but growing |

---

## Next article

**Lesson 2: Text Preprocessing** — Delve into the first and most important step: Tokenization, cleaning, normalization. "Garbage in, garbage out" — data preprocessing determines 80% of success in NLP.
