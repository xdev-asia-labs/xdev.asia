---
id: 019c9619-dd03-7003-e003-dd0300000003
title: 'レッスン 3: コストの微調整 — 開始する前に ROI を計算する'
slug: bai-3-chi-phi-fine-tuning
description: >-
  詳細な料金リスト: Google Gemini、OpenAI、Anthropic、セルフホスト。トレーニング コストをトークン ×
  エポックで計算します。推論コストの比較。 ROI 計算ツール。予算計画テンプレート。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: 概要と戦略 — いつ微調整するか?'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'LLM の微調整: AI チューニングの技術'
  slug: fine-tuning-llm
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9573" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9573)"/>

  <!-- Decorations -->
  <g>
    <circle cx="670" cy="220" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="810" cy="260" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="40" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="60" x2="1100" y2="140" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="90" x2="1050" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="990.3108891324554,142.5 990.3108891324554,177.5 960,195 929.6891108675446,177.5 929.6891108675446,142.5 960,125" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: コストの微調整 — ROI の計算</tspan>
      <tspan x="60" dy="42">始める前に</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">LLM の微調整: AI チューニングの技術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 概要と戦略 — いつ微調整するか?</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

微調整は無料ではありませんが、思っているほど高価でもありません。この記事は、コミットする前にコストと ROI を **正確に** 計算するのに役立ちます。

---

## 1. トレーニング費用の計算式

```
Chi phí Training = (Số tokens trong dataset) × (Số epochs) × (Giá per token)
```

### 簡単な計算例
- データセット: 500 例 × ~500 トークン/例 = 250,000 トークン
- エポック: 3
- トレーニングトークンの合計: 250,000 × 3 = 750,000 トークン

---

## 2. 比較価格表 (2025 ～ 2026 年)

|プロバイダー |モデル |トレーニング費用 |推論コスト |
|----------|------|--------------|--------------|
| **Google Vertex AI** |ジェミニ 2.0 フラッシュ | ~$0.40/100 万トークン |ベースモデル別 |
| **OpenAI** | GPT-4o-mini | $3.00/100万トークン | 2x 基本モデル |
| **OpenAI** | GPT-4o | $25.00/100万トークン | 2x 基本モデル |
| **セルフホスト** | LLaMA 3 (LoRA) | GPU コスト (~1 ～ 3 ドル/時間) |ホスティング費用のみ |

### Google Vertex AI — 最大の利点
- トレーニングは OpenAI よりも安価です
- **推論による値上げはありません** — これはゲームチェンジャーです
- 無料トライアル 数十回の微調整に十分な 300 ドルのクレジット

---

## 3. ROI 計算ツール

```python
def calculate_roi(
    training_cost: float,
    queries_per_day: int,
    prompt_tokens_saved: int,  # Nhờ FT, system prompt ngắn hơn
    price_per_1m_tokens: float,
    days: int = 30
):
    daily_savings = queries_per_day * prompt_tokens_saved * price_per_1m_tokens / 1_000_000
    total_savings = daily_savings * days
    roi_days = training_cost / daily_savings if daily_savings > 0 else float('inf')
    return {
        "training_cost": f"${training_cost:.2f}",
        "monthly_savings": f"${total_savings:.2f}",
        "break_even_days": f"{roi_days:.0f} ngày",
        "6_month_net": f"${total_savings * 6 - training_cost:.2f}"
    }

# Ví dụ: Fine-tune tiết kiệm 2000 tokens/query system prompt
print(calculate_roi(
    training_cost=50,
    queries_per_day=5000,
    prompt_tokens_saved=2000,
    price_per_1m_tokens=0.15  # GPT-4o-mini input
))
# → Break even: ~33 ngày, 6-month net savings: ~$220
```

---

## 4. 隠れたコスト — 隠れたコスト

|コスト |説明 |見積もり |
|----------|----------|----------|
|データ準備 |データの収集、クリーニング、ラベル付け |エンジニアリング時間 2 ～ 20 時間 |
|評価 |テスト、反復、再トレーニング | 5 ～ 15 時間のエンジニアリング |
|メンテナンス |データが変更されたときに再トレーニングする |月に 2 ～ 5 時間 |
|機会費用 |その他の非勤務時間 |チームによる |

---

## 5. 予算計画テンプレート

```
┌─────────────────────────────────────┐
│  FINE-TUNING BUDGET PLANNER         │
├─────────────────────────────────────┤
│  Phase 1: Data Prep      $0–$200   │
│  Phase 2: Training v1    $10–$100  │
│  Phase 3: Evaluation     $5–$50   │
│  Phase 4: Iterations ×3  $30–$300 │
│  Phase 5: Production     $0–$100  │
│  ───────────────────────────────── │
│  TOTAL                   $45–$750  │
│  (Typical: ~$200)                  │
└─────────────────────────────────────┘
```

---

## 概要

- コスト = トレーニング トークン × エポック × トークンあたりの価格
- 推論用の最も安価な Google Vertex AI (値上げなし)
- 微調整されたモデルの場合、OpenAI 推論は 2 倍高価になります
- データの準備、評価、メンテナンスなどの隠れたコストを常に計算します
- プロンプトの長さが短縮された場合、微調整により費用を節約できます

## 演習

1. ユースケースに応じて微調整コストを計算します (ROI 計算ツールを使用します)。
2. 比較: 同じデータセットサイズの Google と OpenAI
3. 損益分岐点を計算します。微調整を行って「元を取る」にはどれくらいの時間がかかりますか?
4. チーム/マネージャー向けの予算案を作成する

