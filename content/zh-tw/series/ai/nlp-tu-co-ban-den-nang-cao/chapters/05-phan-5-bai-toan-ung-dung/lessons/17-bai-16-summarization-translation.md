---
id: 019d8b30-bb16-7016-c016-ee1600000016
title: 第 16 課：文本摘要和機器翻譯
slug: bai-16-summarization-translation
description: >-
  提取與抽象總結。 T5、BART、Pegasus 進行總結。評估：ROUGE
  指標。機器翻譯：MarianMT、mBART、NLLB。翻譯品質：BLEU、chrF。演示總結新聞和越南語翻譯。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 15
section_title: 第 5 部分：應用 NLP 問題 — 實作項目
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8175" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8175)"/>

  <!-- Decorations -->
  <g>
    <circle cx="792" cy="186" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="984" cy="238" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="676" cy="30" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="868" cy="82" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="134" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.507041555162,145.5 1001.507041555162,186.5 966,207 930.492958444838,186.5 930.492958444838,145.5 966,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：文本摘要和機器</tspan>
      <tspan x="60" dy="42">翻譯</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：應用 NLP 問題 — 實作項目</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**Summarization**（摘要）和**Machine Translation**（機器翻譯）是兩個最重要的**序列到序列**問題——輸入是文本，輸出也是文本。兩者都使用編碼器-解碼器架構（T5、BART、mBART）。

---

## 1. 文字摘要

### 1.1 提取與抽象

|類型 |它是如何運作的 |優點 |限制 |
|--------|-------------|--------|--------|
| **提取** |選擇最重要的一句話 |沒有產生幻覺|可能語無倫次 |
| **抽象** |產生新的摘要句 |連貫、自然 |會產生幻覺|

### 1.2 使用 T5 進行抽象概括

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

### 1.3 評估：ROUGE 指標

```python
from rouge_score import rouge_scorer

scorer = rouge_scorer.RougeScorer(['rouge1', 'rouge2', 'rougeL'], use_stemmer=True)

reference = "NLP enables computers to understand human language using AI and deep learning."
hypothesis = "NLP is an AI subfield that helps computers process natural language."

scores = scorer.score(reference, hypothesis)
for key, value in scores.items():
    print(f"  {key}: P={value.precision:.3f} R={value.recall:.3f} F1={value.fmeasure:.3f}")
```

|指標|測量什麼 |
|--------|--------|
|胭脂-1 |一元重疊 |
|胭脂-2 |二元組重疊 |
|胭脂-L |最長公共子序列|

---

## 2. 機器翻譯

### 2.1 抱臉翻譯

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

### 2.2 評估：BLEU 分數

```python
from sacrebleu import corpus_bleu

references = [["Xử lý ngôn ngữ tự nhiên là lĩnh vực hấp dẫn của AI"]]
hypotheses = ["Xử lý ngôn ngữ tự nhiên là lĩnh vực thú vị của trí tuệ nhân tạo"]

bleu = corpus_bleu(hypotheses, references)
print(f"BLEU: {bleu.score:.2f}")
```

|指標|測量什麼 |範圍 |
|--------|--------|--------|
|藍色| N 元語法精度 | 0-100 |
| chrF |角色 F 分數 | 0-100 |
|彗星 |學習指標（神經）| 0-1 |

---

## 3. ViT5 越南語總結

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

## 總結

|數學問題|模式|指標|越南語 |
|----------|--------|---------|------------|
|總結| BART、T5、飛馬 | ROUGE-1/2/L | ViT5、BARTpho |
|譯 | MarianMT、NLLB、mBART | BLEU、chrF、COMET |作品 mt-en-vi，NLLB |

---

## 下一篇文章

**第 17 課：越南語 NLP** — 越南語 NLP 的具體挑戰和解決方案：分詞、PhoBERT、ViT5。
