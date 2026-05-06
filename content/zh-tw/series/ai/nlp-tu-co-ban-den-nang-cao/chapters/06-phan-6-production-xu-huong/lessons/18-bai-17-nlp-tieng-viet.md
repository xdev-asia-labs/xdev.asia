---
id: 019d8b30-bb17-7017-c017-ee1700000017
title: 第 17 課：越南語 NLP — 挑戰與解決方案
slug: bai-17-nlp-tieng-viet
description: >-
  越南語語言特徵：分詞（VnCoreNLP、underthesea）、變音符號、複合詞。
  PhoBERT、ViT5、BARTpho。越南資料集：VLSP、vietnews。越南任務的基準模型。多語言 NLP 的最佳實踐。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 16
section_title: 第 6 部分：NLP 產生與現代趨勢
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：越南語 NLP — 挑戰與</tspan>
      <tspan x="60" dy="42">解決方案</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：NLP 產生與現代趨勢</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

越南語屬於**分析語言**（孤立語言）－根本與英語不同。越南語 NLP 需要對語言特性和專業工具有深入的了解。

---

## 1. 具體挑戰

### 1.1 分詞 — 問題#1

越南語**不像英文那樣用空格**分隔單字：

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

### 1.2 聲調標記

```python
# 6 thanh điệu: ngang, sắc, huyền, hỏi, ngã, nặng
# "ma", "má", "mà", "mả", "mã", "mạ" — 6 từ hoàn toàn khác nghĩa!

# Vấn đề: user thường gõ không dấu
text_no_accent = "hoc sinh hoc sinh hoc"
# Cần accent restoration trước khi xử lý NLP
```

### 1.3 挑戰比較表

|挑戰|英語 |越南語 |
|------------|----------|------------|
|字邊界|空間|需要分詞|
|形態|詞形變化（跑/跑/跑）|無屈折變化|
|語氣/口音|沒有 | 6 種聲音 |
|資源 |很多|少很多|
|分詞器效率 | ~1 個標記/單字 | ~1.5-2 個令牌/字（法學碩士）|

---

## 2.越南語NLP工具

### 2.1 海底

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

## 3. 越南語預訓練模型

|型號|類型 |基地|任務 |
|--------|--------|--------|--------|
|菲伯特 |編碼器 |羅伯塔 |分類、NER、QA |
|巴特佛 |編碼-十二月 |巴特 |總結、生成|
| ViT5 |編碼-十二月 | T5|總結、翻譯 |
| XLM-羅伯塔 |編碼器 |羅伯塔 |多語言任務 |
| BGE-M3 |編碼器 | — |多語言嵌入 |

### 用於文字分類的 PhoBERT

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

## 4. 越南語資料集

|資料集 |任務 |尺寸|來源 |
|--------|--------|--------|--------|
| VLSP 2016-2023 | NER、SA、QA、WS |變更 | VLSP 研討會 |
| UIT-VSFC |感想 | 16,000 則評論 |大學 |
|越南新聞|總結| 15 萬篇文章 |越南AI |
| PhoNER_新冠肺炎 | NER (新冠肺炎) | 35K 實體 |維艾 |
| ViQuAD |問答 | 23K QA 對 |大學 |

---

## 5. 最佳實踐

1. **在使用 PhoBERT 之前總是進行分詞**
2. **Unicode NFC 標準化** — 特別重要
3. **多語言模型**（XLM-R、BGE-M3）通常更適合零樣本
4. **透過反向翻譯（EN→VI→EN）或LLM合成資料增加資料**

---

## 總結

|方面|解決方案 |
|------------|----------|
|分詞|海底，VnCoreNLP |
|分類/NER | PhoBERT v2 |
|總結| ViT5、BARTpho |
|嵌入 | BGE-M3，多語言-e5 |
|譯 | NLLB，環境5 |

---

## 下一篇文章

**第 18 課：NLP 管道生產** — 將 NLP 模型投入生產：服務、監控、CI/CD。
