---
id: 019c9619-dd11-7011-e011-dd1100000011
title: 第 11 課：LLM 評量指標 — 從 Perplexity 到 BERTScore
slug: bai-11-metrics-danh-gia-llm
description: >-
  全面的指導指標：Perplexity、BLEU、ROUGE、METEOR、BERTScore、Exact
  Match、F1。何時使用哪個指標？代碼實現了每個指標。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 第 5 部分：模型評估 — 方法與指標
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6708" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6708)"/>

  <!-- Decorations -->
  <g>
    <circle cx="667" cy="51" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="734" cy="58" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="801" cy="65" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="868" cy="72" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="935" cy="79" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="141" x2="1100" y2="221" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="171" x2="1050" y2="241" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1072.1769145362398,223 1072.1769145362398,259 1041,277 1009.8230854637602,259 1009.8230854637602,223 1041,205" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 人工智慧與機器學習 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：LLM 評量指標 — 來自</tspan>
      <tspan x="60" dy="42">BERTcore 的困惑</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：模型評估 — 方法與指標</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

「模型好點了嗎？」—你需要**具體的指標**來回答，而不是感覺。本文涵蓋了所有重要指標。

---

## 1. 指標分類

```
┌──────────────────────────────────────────────────┐
│              LLM EVALUATION METRICS               │
├──────────────────────────────────────────────────┤
│                                                  │
│  Statistical (Lexical)     Semantic              │
│  ├── BLEU                  ├── BERTScore         │  
│  ├── ROUGE                 ├── Embedding cosine  │
│  ├── METEOR                └── BLEURT            │
│  └── Exact Match                                 │
│                                                  │
│  Training-focused          Task-specific         │
│  ├── Perplexity            ├── Accuracy          │
│  └── Loss curve            ├── F1 Score          │
│                            └── Pass@k (code)     │
│                                                  │
│  Model-based                                     │
│  ├── LLM-as-a-Judge                              │
│  └── Pairwise comparison                         │
└──────────────────────────────────────────────────┘
```

## 2. 實施每個指標

### 2.1 ROUGE（面對回憶的替補）
```python
from rouge_score import rouge_scorer
scorer = rouge_scorer.RougeScorer(['rouge1','rouge2','rougeL'])
scores = scorer.score("reference text here", "generated text here")
print(f"ROUGE-L: {scores['rougeL'].fmeasure:.3f}")
```

### 2.2 BERTcore（語意相似度）
```python
from bert_score import score
P, R, F1 = score(["generated"], ["reference"], lang="vi")
print(f"BERTScore F1: {F1.mean():.3f}")
```

### 2.3 困惑
```python
import math
# Perplexity = exp(average negative log-likelihood)
# Thấp hơn = model tốt hơn
perplexity = math.exp(avg_loss)
```

## 3. 何時使用哪一個指標？

|任務 |主要指標|中學|
|-----|----------------|------------|
|文本生成 | ROUGE-L、BERTcore |法學碩士法官|
|分類|準確度，F1 |混淆矩陣|
|總結| ROUGE-1/2/L | BERT 評分 |
|翻譯 |藍色、流星|人類評估 |
|程式碼產生| Pass@k，精確比對|測試案例|
|對話 |法學碩士法官 |人類偏好|

---

## 總結

- **BLEU/ROUGE**：快速、可重複，但僅測量詞彙重疊
- **BERTScore**：測量語意相似性－更適合創意任務
- **困惑**：訓練診斷，而不是品質指標
- **法學碩士為法官**：與人類偏好的相關性最高
- 使用**組合**－沒有一個單一的指標夠好

## 練習

1. 實作評估套件：ROUGE + BERTScore + Perplexity
2. 在基本模型與微調模型上運行 — 比較分數
3. 創建可視化：比較指標的雷達圖
4. 分析：哪個指標最能反映「真實品質」？

