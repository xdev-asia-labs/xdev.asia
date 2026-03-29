---
id: 019c9619-dd03-7003-e003-dd0300000003
title: 'Bài 3: Chi phí Fine-tuning — Tính toán ROI trước khi bắt đầu'
slug: bai-3-chi-phi-fine-tuning
description: >-
  Bảng giá chi tiết: Google Gemini, OpenAI, Anthropic, self-hosted. Tính chi phí training theo tokens × epochs. Inference cost comparison. ROI calculator. Budget planning template.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Tổng quan & Chiến lược — Khi nào cần Fine-tune?"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

## Giới thiệu

Fine-tuning không miễn phí — nhưng cũng không đắt như bạn nghĩ. Bài này giúp bạn **tính toán chính xác** chi phí và ROI trước khi commit.

---

## 1. Công thức chi phí Training

```
Chi phí Training = (Số tokens trong dataset) × (Số epochs) × (Giá per token)
```

### Ví dụ tính nhanh
- Dataset: 500 examples × ~500 tokens/example = 250,000 tokens
- Epochs: 3
- Total training tokens: 250,000 × 3 = 750,000 tokens

---

## 2. Bảng giá so sánh (2025–2026)

| Provider | Model | Training cost | Inference cost |
|----------|-------|--------------|----------------|
| **Google Vertex AI** | Gemini 2.0 Flash | ~$0.40/1M tokens | Bằng base model |
| **OpenAI** | GPT-4o-mini | $3.00/1M tokens | 2x base model |
| **OpenAI** | GPT-4o | $25.00/1M tokens | 2x base model |
| **Self-hosted** | LLaMA 3 (LoRA) | GPU cost (~$1–3/giờ) | Hosting cost only |

### Google Vertex AI — Ưu điểm lớn nhất
- Training rẻ hơn OpenAI
- **Inference KHÔNG tăng giá** — đây là game changer
- Free trial $300 credit đủ cho hàng chục lần fine-tune

---

## 3. ROI Calculator

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

## 4. Hidden Costs — Chi phí ẩn

| Chi phí | Mô tả | Ước tính |
|---------|--------|----------|
| Data preparation | Thu thập, clean, label data | 2–20 giờ engineer |
| Evaluation | Test, iterate, re-train | 5–15 giờ engineer |
| Maintenance | Re-train khi data thay đổi | 2–5 giờ/tháng |
| Opportunity cost | Thời gian không làm việc khác | Tuỳ team |

---

## 5. Budget Planning Template

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

## Tóm tắt

- Chi phí = Training tokens × Epochs × Price per token
- Google Vertex AI rẻ nhất cho inference (không tăng giá)
- OpenAI inference đắt hơn 2x cho fine-tuned models
- Luôn tính hidden costs: data prep, evaluation, maintenance
- Fine-tune có thể TIẾT KIỆM tiền nếu giảm được prompt length

## Bài tập

1. Tính chi phí fine-tune cho use case của bạn (dùng ROI calculator)
2. So sánh: Google vs OpenAI cho cùng dataset size
3. Tính break-even point: sau bao lâu fine-tuning "hồi vốn"?
4. Tạo budget proposal cho team/manager

