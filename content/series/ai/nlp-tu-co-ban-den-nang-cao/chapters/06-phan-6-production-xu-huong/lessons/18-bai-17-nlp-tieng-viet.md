---
id: 019d8b30-bb17-7017-c017-ee1700000017
title: 'Bài 17: NLP cho Tiếng Việt — Thách thức & Giải pháp'
slug: bai-17-nlp-tieng-viet
description: >-
  Đặc thù ngôn ngữ tiếng Việt: word segmentation (VnCoreNLP, underthesea),
  dấu thanh, từ ghép. PhoBERT, ViT5, BARTpho. Dataset tiếng Việt:
  VLSP, vietnews. Benchmark các model trên tasks tiếng Việt. Best
  practices cho multilingual NLP.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 6: NLP Production & Xu hướng Hiện đại"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3084" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3084)"/>

  <!-- Decorations -->
  <g>
    <circle cx="971" cy="83" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="842" cy="274" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="713" cy="205" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="1084" cy="136" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="955" cy="67" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="133" x2="1100" y2="213" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="163" x2="1050" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="957.2487113059643,119 957.2487113059643,147 933,161 908.7512886940357,147 908.7512886940357,119 933,105" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI &amp; ML — Bài 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 17: NLP cho Tiếng Việt — Thách thức &amp;</tspan>
      <tspan x="60" dy="42">Giải pháp</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: NLP Production &amp; Xu hướng Hiện đại</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Tiếng Việt thuộc nhóm **analytic language** (ngôn ngữ đơn lập) — khác biệt cơ bản so với tiếng Anh. NLP tiếng Việt đòi hỏi hiểu biết sâu về đặc thù ngôn ngữ và các công cụ chuyên biệt.

---

## 1. Thách thức Đặc thù

### 1.1 Word Segmentation — Vấn đề số 1

Tiếng Việt **không tách từ bằng dấu cách** giống tiếng Anh:

```
Tiếng Anh: "machine learning"     → ["machine", "learning"]  ← Rõ ràng
Tiếng Việt: "học sinh học sinh học" → ???
  - "học_sinh / học / sinh_học"    ← học sinh ĐI học môn sinh học
  - "học / sinh_học / sinh_học"    ← ???
```

```python
from underthesea import word_tokenize

text = "Trường đại học Bách Khoa Hà Nội là trường đại học kỹ thuật hàng đầu"
tokens = word_tokenize(text)
print(tokens)
# ['Trường', 'đại_học', 'Bách_Khoa', 'Hà_Nội', 'là', 'trường',
#  'đại_học', 'kỹ_thuật', 'hàng_đầu']
```

### 1.2 Dấu thanh (Tone Marks)

```python
# 6 thanh điệu: ngang, sắc, huyền, hỏi, ngã, nặng
# "ma", "má", "mà", "mả", "mã", "mạ" — 6 từ hoàn toàn khác nghĩa!

# Vấn đề: user thường gõ không dấu
text_no_accent = "hoc sinh hoc sinh hoc"
# Cần accent restoration trước khi xử lý NLP
```

### 1.3 Bảng So sánh Thách thức

| Thách thức | Tiếng Anh | Tiếng Việt |
|------------|----------|-----------|
| Word boundary | Dấu cách | Cần word segmentation |
| Morphology | Inflection (run/ran/running) | Không inflection |
| Tone/Accent | Không | 6 thanh điệu |
| Resources | Rất nhiều | Ít hơn nhiều |
| Tokenizer efficiency | ~1 token/word | ~1.5-2 tokens/word (LLM) |

---

## 2. Công cụ NLP Tiếng Việt

### 2.1 underthesea

```python
from underthesea import (
    word_tokenize,
    pos_tag,
    ner,
    classify,
    sentiment,
)

text = "Nguyễn Phú Trọng làm việc tại Hà Nội, Việt Nam"

# Word segmentation
print(word_tokenize(text))

# POS Tagging
print(pos_tag(text))
# [('Nguyễn_Phú_Trọng', 'Np'), ('làm_việc', 'V'), ('tại', 'E'),
#  ('Hà_Nội', 'Np'), (',', 'CH'), ('Việt_Nam', 'Np')]

# NER
print(ner(text))
# [('Nguyễn_Phú_Trọng', 'B-PER'), ..., ('Hà_Nội', 'B-LOC'), ...]

# Sentiment
print(sentiment("Sản phẩm này rất tốt"))
# positive
```

### 2.2 VnCoreNLP

```python
from vncorenlp import VnCoreNLP

annotator = VnCoreNLP("VnCoreNLP-1.2.jar", annotators="wseg,pos,ner", max_heap_size='-Xmx2g')

text = "Trường Đại học Bách Khoa Hà Nội tuyển sinh năm 2026"
result = annotator.annotate(text)

for sentence in result['sentences']:
    for word_info in sentence:
        print(f"  {word_info['form']:20s} | {word_info['posTag']:5s} | {word_info['nerLabel']}")
```

---

## 3. Pre-trained Models cho Tiếng Việt

| Model | Type | Base | Tasks |
|-------|------|------|-------|
| PhoBERT | Encoder | RoBERTa | Classification, NER, QA |
| BARTpho | Enc-Dec | BART | Summarization, generation |
| ViT5 | Enc-Dec | T5 | Summarization, translation |
| XLM-RoBERTa | Encoder | RoBERTa | Multilingual tasks |
| BGE-M3 | Encoder | — | Multilingual embeddings |

### PhoBERT cho Text Classification

```python
from transformers import AutoTokenizer, AutoModelForSequenceClassification

# PhoBERT yêu cầu word segmentation TRƯỚC khi tokenize
from underthesea import word_tokenize

text = "Sản phẩm rất tốt và giao hàng nhanh"
segmented = word_tokenize(text, format="text")
# "Sản_phẩm rất tốt và giao_hàng nhanh"

tokenizer = AutoTokenizer.from_pretrained("vinai/phobert-base-v2")
model = AutoModelForSequenceClassification.from_pretrained(
    "vinai/phobert-base-v2", num_labels=3
)

inputs = tokenizer(segmented, return_tensors="pt")
outputs = model(**inputs)
```

---

## 4. Datasets Tiếng Việt

| Dataset | Task | Size | Source |
|---------|------|------|--------|
| VLSP 2016-2023 | NER, SA, QA, WS | Varies | VLSP workshops |
| UIT-VSFC | Sentiment | 16K reviews | UIT |
| vietnews | Summarization | 150K articles | VietAI |
| PhoNER_COVID19 | NER (COVID) | 35K entities | VinAI |
| ViQuAD | Question Answering | 23K QA pairs | UIT |

---

## 5. Best Practices

1. **Luôn word-segment** trước khi dùng PhoBERT
2. **Unicode NFC normalize** — đặc biệt quan trọng
3. **Multilingual models** (XLM-R, BGE-M3) thường tốt hơn cho zero-shot
4. **Tăng data** bằng back-translation (EN→VI→EN) hoặc LLM synthetic data

---

## Tổng kết

| Khía cạnh | Giải pháp |
|-----------|----------|
| Word segmentation | underthesea, VnCoreNLP |
| Classification/NER | PhoBERT v2 |
| Summarization | ViT5, BARTpho |
| Embeddings | BGE-M3, multilingual-e5 |
| Translation | NLLB, envit5 |

---

## Bài tiếp theo

**Bài 18: NLP Pipeline Production** — Đưa NLP models lên production: serving, monitoring, CI/CD.
