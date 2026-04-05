---
id: 019d8b30-bb01-7001-c001-ee0100000001
title: 'Bài 1: NLP là gì? — Toàn cảnh lĩnh vực Xử lý Ngôn ngữ Tự nhiên'
slug: bai-1-nlp-la-gi
description: >-
  Định nghĩa NLP, lịch sử phát triển từ rule-based đến deep learning.
  Các bài toán cốt lõi: classification, NER, POS tagging, parsing,
  generation, QA, summarization. NLP pipeline tổng quan. Demo end-to-end
  đơn giản với Python.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 1: Nền tảng NLP — Hiểu Ngôn ngữ qua lăng kính Máy tính"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI &amp; ML — Bài 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 1: NLP là gì? — Toàn cảnh lĩnh vực Xử</tspan>
      <tspan x="60" dy="42">lý Ngôn ngữ Tự nhiên</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng NLP — Hiểu Ngôn ngữ qua lăng kính Máy tính</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

**Natural Language Processing (NLP)** — Xử lý Ngôn ngữ Tự nhiên — là lĩnh vực giao thoa giữa **Khoa học Máy tính**, **Trí tuệ Nhân tạo** và **Ngôn ngữ học**, nghiên cứu cách giúp máy tính hiểu, phân tích và sinh ngôn ngữ con người.

> 💡 **Một câu:** NLP dạy máy tính "đọc", "hiểu" và "viết" ngôn ngữ tự nhiên.

Từ Google Search, Gmail Smart Compose, ChatGPT đến trợ lý ảo Siri — tất cả đều dựa trên NLP.

---

## 1. NLP nằm ở đâu trong AI?

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

## 2. Lịch sử NLP — Từ Rule-based đến Transformer

| Thời kỳ | Phương pháp | Đặc điểm | Ví dụ |
|----------|-------------|-----------|-------|
| 1950s–1980s | **Rule-based** | Viết regex, grammar rules thủ công | ELIZA chatbot |
| 1990s–2000s | **Statistical** | Xác suất, n-gram, HMM, CRF | Spam filters, POS tagging |
| 2010s | **ML/Deep Learning** | Word2Vec, RNN, LSTM, CNN | Sentiment analysis |
| 2017 | **Transformer** | Self-attention, parallelization | Google Translate cải tiến |
| 2018–now | **Pre-trained LMs** | BERT, GPT, T5, LLaMA | ChatGPT, Gemini, Claude |

### Bước ngoặt quan trọng

1. **2013 — Word2Vec**: Lần đầu biểu diễn từ bằng dense vectors có nghĩa
2. **2017 — Transformer**: "Attention Is All You Need" thay đổi tất cả
3. **2018 — BERT & GPT**: Transfer learning cho NLP, pre-train một lần dùng mọi nơi
4. **2022 đến nay — LLM era**: ChatGPT, khả năng emergent, reasoning

---

## 3. Các bài toán cốt lõi trong NLP

### 3.1 Phân loại theo cấp độ

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

### 3.2 Ví dụ thực tế

| Bài toán | Input | Output | Ứng dụng |
|----------|-------|--------|----------|
| Sentiment Analysis | "Sản phẩm này tuyệt vời!" | Positive (0.95) | Review monitoring |
| NER | "Nguyễn Văn A làm việc tại FPT" | PER: Nguyễn Văn A, ORG: FPT | Trích xuất thông tin |
| Translation | "Hello, how are you?" | "Xin chào, bạn khỏe không?" | Google Translate |
| Summarization | Bài báo 1000 từ | Tóm tắt 50 từ | Tin tức tự động |
| QA | Context + "CEO Apple là ai?" | "Tim Cook" | Chatbot, search |

---

## 4. NLP Pipeline tổng quan

Dù giải quyết bài toán nào, NLP pipeline cơ bản gồm các bước:

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

## 5. Demo: NLP trong 5 phút với Python

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

> 🎯 Chỉ với Hugging Face `pipeline`, bạn đã chạy được 5 bài toán NLP khác nhau — chưa cần hiểu lý thuyết!

---

## 6. NLP cho Tiếng Việt — Tổng quan nhanh

Tiếng Việt có những thách thức đặc thù:

| Thách thức | Ví dụ | Giải pháp |
|------------|-------|-----------|
| Word segmentation | "học sinh" vs "học" + "sinh" | VnCoreNLP, underthesea |
| Dấu thanh | "hoc" ≠ "học" ≠ "họa" | Accent normalization |
| Ít tài nguyên | Ít dataset so với tiếng Anh | PhoBERT, ViT5, VLSP datasets |
| Từ ghép | "máy tính", "bàn phím" | Dictionary-based segmentation |

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

> 📌 Bài 17 sẽ đi sâu vào NLP cho tiếng Việt.

---

## Tổng kết

| Khái niệm | Ý nghĩa |
|------------|---------|
| NLP | Lĩnh vực AI giúp máy tính hiểu ngôn ngữ tự nhiên |
| Lịch sử | Rule-based → Statistical → Deep Learning → Transformer → LLM |
| Bài toán | Classification, NER, QA, Summarization, Translation, Generation |
| Pipeline | Preprocessing → Representation → Modeling → Post-processing |
| Tiếng Việt | Thách thức word segmentation, ít tài nguyên nhưng đang phát triển |

---

## Bài tiếp theo

**Bài 2: Text Preprocessing** — Đi sâu vào bước đầu tiên và quan trọng nhất: Tokenization, cleaning, normalization. "Garbage in, garbage out" — data preprocessing quyết định 80% thành công trong NLP.
