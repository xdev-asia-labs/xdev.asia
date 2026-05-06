---
id: 019d8b30-bb01-7001-c001-ee0100000001
title: 第一课：什么是 NLP？ ——自然語言處理領域概述
slug: bai-1-nlp-la-gi
description: >-
  NLP的定義，從基於規則到深度學習的發展史。核心問題：分類、NER、POS標記、解析、產生、QA、摘要。 NLP 管道概述。使用 Python
  的簡單端對端演示。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 第 1 部分：NLP 基礎 — 透過電腦鏡頭理解語言
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第一課：什麼是 NLP？ — 加工領域概述</tspan>
      <tspan x="60" dy="42">自然語言物理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：NLP 基礎 — 透過電腦鏡頭理解語言</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**自然語言處理 (NLP)** — 自然語言處理 — 是 **電腦科學**、**人工智慧** 和 **語言學** 的交叉領域，研究如何幫助電腦理解、分析和產生人類語言。

> 💡 **一句話：** NLP 教電腦「讀」、「理解」和「寫」自然語言。

從 Google 搜尋、Gmail Smart Compose、ChatGPT 到虛擬助理 Siri——所有這些都基於 NLP。

---

## 1. NLP在AI中的位置在哪裡？

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

## 2. NLP 的歷史－從基於規則到 Transformer

|期間 |方法|特點|範例|
|----------|-------------|------------|--------|
| 1950 年代–1980 年代 | **基於規則** |手動編寫正則表達式、語法規則 | ELIZA 聊天機器人 |
| 1990 年代至 2000 年代 | **統計** |機率、n-gram、HMM、CRF |垃圾郵件過濾器、POS 標記 |
| 2010 年代 | **機器學習/深度學習** | Word2Vec、RNN、LSTM、CNN |情緒分析|
| 2017 | 2017 **變壓器** |自註意力、並行化 |改進的Google翻譯 |
| 2018 年至今 | **預先訓練的 LM** | BERT、GPT、T5、LLaMA | ChatGPT，雙子座，克勞德 |

### 重要轉折點

1. **2013 — Word2Vec**：首次使用密集有意義的向量表示單字
2. **2017 — Transformer**：「注意力就是你所需要的」改變一切
3. **2018 — BERT & GPT**：NLP 的遷移學習，預訓練一次，隨處使用
4. **2022年至今－LLM時代**：ChatGPT、湧現能力、推理

---

## 3. NLP 的核心問題

### 3.1 依等級分類

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

### 3.2 實際例子

|數學問題|輸入|輸出|應用 |
|----------|---------|--------|----------|
|情緒分析| 「這個產品太棒了！」| 正 (0.95) |審查監控|
|內爾 | “Nguyen Van A 在 FPT 工作”| PER：Nguyen Van A，ORG：FPT |提取資訊|
|翻譯 | “你好嗎？” | “你好嗎？”| 谷歌翻譯 |
|總結| 1000字文章| 50字總結|汽車新聞|
|品質保證 |背景+“蘋果公司的首席執行官是誰？” | “蒂姆·庫克”|聊天機器人、搜尋 |

---

## 4. NLP Pipeline 概述

無論您解決什麼問題，基本的 NLP 流程都包含以下步驟：

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

## 5. 示範：5 分鐘使用 Python 實作 NLP

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

> 🎯 僅限抱臉 `pipeline`，你已經運行了 5 個不同的 NLP 問題——無需理解理論！

---

## 6. 越南語 NLP — 快速概述

越南語面臨具體的挑戰：

|挑戰|範例|解決方案 |
|------------|---------|------------|
|分詞| “學生” vs “學習” + “學生” | VnCoreNLP，海底 |
|條形標記| 「學習」≠「學習」≠「畫畫」|口音標準化 |
|資源很少 |與英語相比，資料集較少 | PhoBERT、ViT5、VLSP 資料集 |
|複合字| 「電腦」、「鍵盤」|基於字典的分割 |

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

> 📌 第 17 課將深入研究越南語 NLP。

---

## 總結

|概念 |意義|
|------------|---------|
|自然語言處理 |人工智慧領域幫助電腦理解自然語言 |
|歷史|基於規則 → 統計 → 深度學習 → Transformer → LLM |
|數學問題|分類、NER、QA、摘要、翻譯、生成 |
|管道|預處理→表示→建模→後處理|
|越南語 |分詞挑戰，資源少但不斷增長 |

---

## 下一篇文章

**第 2 課：文字預處理** — 深入研究第一步也是最重要的一步：標記化、清理、規範化。 「垃圾進，垃圾出」－資料預處理決定了 NLP 80% 的成功。
