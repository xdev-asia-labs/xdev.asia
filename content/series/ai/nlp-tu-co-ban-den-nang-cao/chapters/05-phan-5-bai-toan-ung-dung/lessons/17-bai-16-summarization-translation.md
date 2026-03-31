---
id: 019d8b30-bb16-7016-c016-ee1600000016
title: 'Bài 16: Text Summarization & Machine Translation'
slug: bai-16-summarization-translation
description: >-
  Extractive vs abstractive summarization. T5, BART, Pegasus cho
  summarization. Evaluation: ROUGE metrics. Machine Translation:
  MarianMT, mBART, NLLB. Translation quality: BLEU, chrF. Demo
  tóm tắt tin tức và dịch thuật tiếng Việt.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 5: Bài toán NLP Ứng dụng — Hands-on Projects"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

## Giới thiệu

**Summarization** (tóm tắt) và **Machine Translation** (dịch máy) là hai bài toán **sequence-to-sequence** quan trọng nhất — input là text, output cũng là text. Cả hai đều dùng encoder-decoder architecture (T5, BART, mBART).

---

## 1. Text Summarization

### 1.1 Extractive vs Abstractive

| Loại | Cách hoạt động | Ưu điểm | Hạn chế |
|------|---------------|---------|---------|
| **Extractive** | Chọn câu quan trọng nhất | Không hallucinate | Có thể không mạch lạc |
| **Abstractive** | Sinh câu mới tóm tắt | Mạch lạc, tự nhiên | Có thể hallucinate |

### 1.2 Abstractive Summarization với T5

```python
from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

article = """
Natural Language Processing (NLP) is a subfield of artificial intelligence
that focuses on enabling computers to understand, interpret, and generate
human language. NLP combines computational linguistics, machine learning,
and deep learning to process and analyze large amounts of natural language
data. Key applications include machine translation, sentiment analysis,
chatbots, and text summarization. Recent advances in transformer-based
models like BERT and GPT have significantly improved NLP capabilities.
"""

summary = summarizer(article, max_length=60, min_length=20, do_sample=False)
print(summary[0]["summary_text"])
```

### 1.3 Evaluation: ROUGE Metrics

```python
from rouge_score import rouge_scorer

scorer = rouge_scorer.RougeScorer(['rouge1', 'rouge2', 'rougeL'], use_stemmer=True)

reference = "NLP enables computers to understand human language using AI and deep learning."
hypothesis = "NLP is an AI subfield that helps computers process natural language."

scores = scorer.score(reference, hypothesis)
for key, value in scores.items():
    print(f"  {key}: P={value.precision:.3f} R={value.recall:.3f} F1={value.fmeasure:.3f}")
```

| Metric | Đo gì |
|--------|-------|
| ROUGE-1 | Unigram overlap |
| ROUGE-2 | Bigram overlap |
| ROUGE-L | Longest Common Subsequence |

---

## 2. Machine Translation

### 2.1 Dịch với Hugging Face

```python
from transformers import pipeline

# English → Vietnamese
translator = pipeline("translation", model="Helsinki-NLP/opus-mt-en-vi")
result = translator("Natural Language Processing is a fascinating field of AI")
print(result[0]["translation_text"])

# Multilingual translation với NLLB
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

model_name = "facebook/nllb-200-distilled-600M"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

# Dịch EN → VI
text = "Machine learning is transforming every industry."
inputs = tokenizer(text, return_tensors="pt")

translated = model.generate(
    **inputs,
    forced_bos_token_id=tokenizer.convert_tokens_to_ids("vie_Latn"),
    max_length=128,
)
print(tokenizer.decode(translated[0], skip_special_tokens=True))
```

### 2.2 Evaluation: BLEU Score

```python
from sacrebleu import corpus_bleu

references = [["Xử lý ngôn ngữ tự nhiên là lĩnh vực hấp dẫn của AI"]]
hypotheses = ["Xử lý ngôn ngữ tự nhiên là lĩnh vực thú vị của trí tuệ nhân tạo"]

bleu = corpus_bleu(hypotheses, references)
print(f"BLEU: {bleu.score:.2f}")
```

| Metric | Đo gì | Range |
|--------|-------|-------|
| BLEU | N-gram precision | 0-100 |
| chrF | Character F-score | 0-100 |
| COMET | Learned metric (neural) | 0-1 |

---

## 3. Tóm tắt Tiếng Việt với ViT5

```python
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

model_name = "VietAI/vit5-base-vietnews-summarization"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

article = """Trí tuệ nhân tạo đang thay đổi mọi lĩnh vực trong cuộc sống.
Từ y tế, giáo dục đến tài chính, AI mang lại nhiều lợi ích to lớn.
Tuy nhiên, việc phát triển AI cũng đặt ra nhiều thách thức về đạo đức
và quyền riêng tư cần được giải quyết."""

inputs = tokenizer(article, return_tensors="pt", max_length=512, truncation=True)
outputs = model.generate(**inputs, max_length=100)
summary = tokenizer.decode(outputs[0], skip_special_tokens=True)
print(summary)
```

---

## Tổng kết

| Bài toán | Models | Metrics | Tiếng Việt |
|----------|--------|---------|-----------|
| Summarization | BART, T5, Pegasus | ROUGE-1/2/L | ViT5, BARTpho |
| Translation | MarianMT, NLLB, mBART | BLEU, chrF, COMET | opus-mt-en-vi, NLLB |

---

## Bài tiếp theo

**Bài 17: NLP cho Tiếng Việt** — Thách thức đặc thù và giải pháp cho NLP tiếng Việt: word segmentation, PhoBERT, ViT5.
