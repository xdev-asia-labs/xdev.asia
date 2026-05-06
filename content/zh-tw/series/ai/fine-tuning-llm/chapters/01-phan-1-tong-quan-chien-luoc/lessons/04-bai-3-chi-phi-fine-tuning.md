---
id: 019c9619-dd03-7003-e003-dd0300000003
title: 第 3 課：微調成本 — 在開始之前計算投資報酬率
slug: bai-3-chi-phi-fine-tuning
description: >-
  詳細價格表：Google Gemini、OpenAI、Anthropic、自架。計算訓練成本（以 token × epoch
  為單位）。推理成本比較。投資報酬率計算器。預算規劃範本。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：概述與策略 — 何時進行微調？
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：微調成本 — 計算投資報酬率</tspan>
      <tspan x="60" dy="42">開始之前</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：概述與策略 — 何時進行微調？</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

微調並不是免費的，但也沒有您想像的那麼昂貴。本文可幫助您在投入之前**準確地**計算成本和投資回報率。

---

## 1. 培訓成本公式

```
Chi phí Training = (Số tokens trong dataset) × (Số epochs) × (Giá per token)
```

### 快速計算範例
- 資料集：500 個範例 × ~500 個令牌/範例 = 250,000 個令牌
- 紀元：3
- 總訓練代幣：250,000 × 3 = 750,000 代幣

---

## 2. 比較價格表（2025–2026）

|供應商|型號|培訓費用|推理成本 |
|----------|------|--------------|----------------|
| **Google Vertex AI** |雙子座2.0快閃記憶體| ~$0.40/1M 代幣 |依基本型號 |
| **開放人工智慧** | GPT-4o-迷你 | 3.00 美元/100 萬代幣 | 2x 基本型號 |
| **開放人工智慧** | GPT-4o | 25.00 美元/100 萬代幣 | 2x 基本型號 |
| **自架** |駱駝 3 (LoRA) | GPU 成本（約 1-3 美元/小時）|僅託管費用 |

### Google Vertex AI — 最大優勢
- 訓練比 OpenAI 便宜
- **推斷價格不會上漲** — 這是一個遊戲規則改變者
- 免費試用 300 美元積分足以進行數十次微調

---

## 3. 投資報酬率計算器

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

## 4. 隱性成本 — 隱性成本

|成本|描述 |估計|
|--------|--------|----------|
|資料準備 |收集、清理、標記資料 | 2–20 工程小時 |
|評估|測試、迭代、再訓練 | 5-15 小時工程 |
|保養|資料變更時重新訓練 |每月 2–5 小時 |
|機會成本|其他非工作時間 |取決於團隊|

---

## 5.預算計劃模板

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

## 總結

- 成本 = 訓練代幣 × 曆元 × 每個代幣的價格
- 最便宜的 Google Vertex AI 推理（不漲價）
- 對於微調模型，OpenAI 推理的成本高出 2 倍
- 始終計算隱藏成本：資料準備、評估、維護
- 如果縮短提示長度，微調可以節省金錢

## 練習

1. 計算您的用例的微調成本（使用 ROI 計算器）
2. 比較：相同資料集大小的 Google 與 OpenAI
3.計算損益平衡點：微調需要多長時間才能「收回成本」？
4. 為團隊/經理制定預算建議

