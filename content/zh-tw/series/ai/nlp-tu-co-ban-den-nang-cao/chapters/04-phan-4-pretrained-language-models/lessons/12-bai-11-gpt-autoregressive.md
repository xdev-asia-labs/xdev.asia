---
id: 019d8b30-bb11-7011-c011-ee1100000011
title: 第 11 課：GPT 與自迴歸模型 — 生成式預訓練 Transformer
slug: bai-11-gpt-autoregressive
description: >-
  GPT 架構：因果語言建模。 GPT-1 → GPT-2 → GPT-3 → ​​GPT-4 演化。自回歸產生：溫度、top-k、top-p
  採樣。新興能力。情境學習。比較 BERT（編碼器）與 GPT（解碼器）與 T5（編碼器-解碼器）。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 第 4 部分：預訓練語言模型 — BERT、GPT 及其他
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：GPT 與自迴歸模型 —</tspan>
      <tspan x="60" dy="42">生成式預訓練 Transformer</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：預訓練語言模型 — BERT、GPT 及其他</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

如果 BERT 從兩個方向「讀取」文本，**GPT** 從左到右「寫入」文本 — **自回歸生成**。 GPT 是 ChatGPT、Claude、Gemini 的基礎——正在改變世界的法學碩士。

---

## 1. GPT 架構：僅解碼器

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

### 因果語言建模

$$P(x_1, x_2, ..., x_n) = \prod_{i=1}^{n} P(x_i | x_1, ..., x_{i-1})$$

該模型根據**所有先前的令牌**預測下一個令牌（不展望未來）。

---

## 2.演化：GPT-1 → GPT-4

|型號|年份|參數|訓練資料|突破|
|--------|-----|------------|-------------|------------|
| GPT-1 | 2018 | 117M |圖書語料庫 |生成式預訓練工作 |
| GPT-2 | 2019 | 2019 1.5B | 1.5B網路文字 (40GB) | 「釋放太危險」|
| GPT-3 | 2020 | 175B | 175B 570GB 文字 |情境學習，少量鏡頭 |
| GPT-4 | 2023 | ~1.8T（傳聞）|網路規模|多模態、推理 |
| GPT-4o | 2024 | 2024未公開 | + 圖片、音訊 |本地多式聯運 |

---

## 3. 解碼策略

### 溫度、Top-k、Top-p

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

|參數|低|曹 |
|------------|--------|-----|
|溫度|精準、可重複 |創意、隨性|
|熱門 |選擇少，安全|多種選擇 |
|頂p |絕對關注代幣|考慮更多代幣 |

---

## 4.情境學習（ICL）

GPT-3發現：不需要微調，只要**在提示中放一個例子**！

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

|範式|範例|微調？ |
|----------|---------|------------|
|零射擊|沒有例子|沒有 |
|一擊| 1 個例子 |沒有 |
|少射 | 3-10 例 |沒有 |
|微調|數以千計的例子|是的 |

---

## 5.BERT vs GPT vs T5

|特點| BERT（編碼器）| GPT（解碼器）| T5（Enc-Dec）|
|----------|--------------|----------------|----------|
|方向 |雙向|由左至右 |兩者 |
|預訓練|傳銷+NSP |因果LM |去雜訊 |
|適合 |分類、NER、QA |世代，聊天|一切（文字到文字）|
|例|羅伯特·福伯特 | GPT-4，駱駝| T5、mT5、ViT5 |

---

## 總結

|概念 |詳情 |
|------------|---------|
| GPT |僅解碼器、因果 LM、自回歸 |
|縮放定律 |更大的模型+更多的數據=更好的性能|
|解碼|溫度、top-k、top-p 控制輸出多樣性 |
| ICL |無需微調的少樣本學習 |
| BERT 與 GPT |理解 (BERT) 與生成 (GPT) |

---

## 下一篇文章

**第 12 課：Hugging Face 生態系統** — 使用最常用的庫練習現代 NLP：Transformers、Datasets、Tokenizers。
