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
