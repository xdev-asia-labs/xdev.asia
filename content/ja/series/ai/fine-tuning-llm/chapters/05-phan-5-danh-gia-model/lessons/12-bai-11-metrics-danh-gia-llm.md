---
id: 019c9619-dd11-7011-e011-dd1100000011
title: 'レッスン 11: LLM 評価メトリクス — 複雑性から BERTScore まで'
slug: bai-11-metrics-danh-gia-llm
description: >-
  包括的なガイド指標:
  Perplexity、BLEU、ROUGE、METEOR、BERTScore、完全一致、F1。いつどの指標を使用するか?コードは各メトリクスを実装します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 5: モデルの評価 — メソッドとメトリクス'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'LLM の微調整: AI チューニングの技術'
  slug: fine-tuning-llm
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI と ML — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: LLM 評価メトリクス — から</tspan>
      <tspan x="60" dy="42">BERTScore に対するパープレキシティ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">LLM の微調整: AI チューニングの技術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: モデルの評価 — メソッドとメトリクス</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

「モデルの方が良いですか？」 — 答えるには感情ではなく**具体的な指標**が必要です。この記事では、重要な指標をすべて説明します。

---

## 1. メトリクスの分類

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

## 2. 各メトリックを実装する

### 2.1 ROUGE (リコール指向の代役)
```python
from rouge_score import rouge_scorer
scorer = rouge_scorer.RougeScorer(['rouge1','rouge2','rougeL'])
scores = scorer.score("reference text here", "generated text here")
print(f"ROUGE-L: {scores['rougeL'].fmeasure:.3f}")
```

### 2.2 BERTScore (意味的類似性)
```python
from bert_score import score
P, R, F1 = score(["generated"], ["reference"], lang="vi")
print(f"BERTScore F1: {F1.mean():.3f}")
```

### 2.3 複雑さ
```python
import math
# Perplexity = exp(average negative log-likelihood)
# Thấp hơn = model tốt hơn
perplexity = math.exp(avg_loss)
```

## 3. どのメトリックをいつ使用するか?

|タスク |プライマリメトリクス |二次 |
|-----|------|----------|
|テキスト生成 | ROUGE-L、BERTScore | LLM-裁判官 |
|分類 |精度、F1 |混同行列 |
|要約 |ルージュ-1/2/L | BERTSスコア |
|翻訳 |ブルー、メテオ |人間の評価 |
|コード生成 | Pass@k、完全一致 |テストケース |
|会話 |裁判官としてのLLM |人間の好み |

---

## 概要

- **BLEU/ROUGE**: 高速で再現可能ですが、語彙の重複のみを測定します
- **BERTScore**: 意味的な類似性を測定します - クリエイティブなタスクに適しています
- **複雑さ**: 品質指標ではなくトレーニング診断
- **LLM-as-Judge**: 人間の好みとの相関が最も高い
- **組み合わせ**を使用します — 単一の指標だけでは十分ではありません

## 演習

1. 評価スイートの実装: ROUGE + BERTScore + Perplexity
2. 基本モデルと微調整モデルで実行 — スコアを比較
3. ビジュアライゼーションの作成: メトリックを比較するレーダー チャート
4. 分析: 「真の品質」を最もよく反映する指標はどれですか?

