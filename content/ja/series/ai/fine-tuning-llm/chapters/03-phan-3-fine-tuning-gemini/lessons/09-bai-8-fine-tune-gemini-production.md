---
id: 019c9619-dd08-7008-e008-dd0800000008
title: 'レッスン 8: 実稼働用に Gemini を微調整する — 高度なテクニック'
slug: bai-8-fine-tune-gemini-production
description: 大型→小型モデルへの蒸留。ハイパーパラメータの最適化。統合された評価パイプライン。 A/B テスト。マルチタスクの微調整。コストの最適化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 3: Google Gemini / Vertex AI での微調整'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'LLM の微調整: AI チューニングの技術'
  slug: fine-tuning-llm
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9127" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9127)"/>

  <!-- Decorations -->
  <g>
    <circle cx="713" cy="189" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="826" cy="242" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="939" cy="35" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1052" cy="88" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="665" cy="141" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="99" x2="1100" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="129" x2="1050" y2="199" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="978.444863728671,132 978.444863728671,166 949,183 919.555136271329,166 919.555136271329,132 949,115" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI と ML — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: 実稼働用に Gemini を微調整する —</tspan>
      <tspan x="60" dy="42">高度なテクニック</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">LLM の微調整: AI チューニングの技術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: Google Gemini / Vertex AI での微調整</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

一度の微調整はプロトタイプであり、実稼働用の微調整には **反復、評価、最適化** が必要です。

---

## 1. 蒸留：大型モデル → 小型モデル

```python
# Step 1: Dùng Gemini Pro (lớn) để generate training data
# Step 2: Fine-tune Gemini Flash (nhỏ) trên data đó
# → Flash performs gần Pro nhưng rẻ hơn 10x

def distill_dataset(prompts, teacher_model="gemini-2.0-pro"):
    training_data = []
    for prompt in prompts:
        response = client.models.generate_content(
            model=teacher_model, contents=prompt
        )
        training_data.append({
            "messages": [
                {"role": "user", "content": prompt},
                {"role": "model", "content": response.text}
            ]
        })
    return training_data
```

## 2. ハイパーパラメータの最適化

|パラム |デフォルト |増やす時期 |いつ削減するか |
|----------|-----------|---------------|-------------|
|エポック | 3 |小規模なデータセット (<200) |大規模なデータセット (>2000) |
|学習率 | 1.0 |遅い学習モデル |モデルは古い知識を「忘れる」 |

## 3. A/B テストのフレームワーク

```python
import random

def ab_test(query, model_a, model_b, n_trials=100):
    results = {"a_wins": 0, "b_wins": 0, "tie": 0}
    for _ in range(n_trials):
        resp_a = call_model(model_a, query)
        resp_b = call_model(model_b, query)
        winner = llm_judge(query, resp_a, resp_b)
        results[winner] += 1
    return results
```

---

## 概要

- 蒸留: 大→小さいモデルの知識を蒸留し、推論を 10 倍節約します
- ハイパーパラメータ調整: エポック、学習率、バッチ サイズ
- 本番環境に移行する前に A/B テストが必要
- マルチタスクの微調整: 1 つのモデル、多くの機能

## 演習

1. 蒸留を実行します: Gemini Pro → Gemini Flash
2. 異なるエポックで 3 つの実験を実行し、結果を比較します。
3. A/B テストのフレームワークを構築する
4. コスト削減の計算: 蒸留モデルとオリジナルの Pro モデル

