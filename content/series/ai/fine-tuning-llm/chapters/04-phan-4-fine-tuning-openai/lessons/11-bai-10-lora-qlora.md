---
id: 019c9619-dd10-7010-e010-dd1000000010
title: 'Bài 10: LoRA & QLoRA — Fine-tune Open-source Models'
slug: bai-10-lora-qlora
description: >-
  Lý thuyết LoRA: low-rank matrix decomposition. QLoRA: quantization + LoRA. Hands-on fine-tune LLaMA 3 với Hugging Face PEFT. Google Colab miễn phí.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 4: Fine-tuning trên OpenAI & các Platform khác"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3311" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3311)"/>

  <!-- Decorations -->
  <g>
    <circle cx="921" cy="153" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="742" cy="194" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1063" cy="235" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="884" cy="276" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="705" cy="57" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="183" x2="1100" y2="263" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="213" x2="1050" y2="283" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.9089653438086,164 1015.9089653438086,202 983,221 950.0910346561914,202 950.0910346561914,164 983,145" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI &amp; ML — Bài 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 10: LoRA &amp; QLoRA — Fine-tune</tspan>
      <tspan x="60" dy="42">Open-source Models</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Fine-tuning trên OpenAI &amp; các Platform khác</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

LoRA và QLoRA là kỹ thuật fine-tune **tiết kiệm nhất** — chỉ cập nhật 0.1–1% parameters, chạy được trên GPU miễn phí (Colab T4).

---

## 1. LoRA — Intuition

```
Thay vì update TOÀN BỘ weight matrix W (d × d):
  W_new = W + ΔW

LoRA decompose ΔW thành 2 matrices nhỏ:
  ΔW = A × B  (A: d × r, B: r × d, với r << d)

Ví dụ:
  W: 4096 × 4096 = 16.7M params → cập nhật TẤT CẢ
  LoRA (r=16): 4096×16 + 16×4096 = 131K params → cập nhật 0.8%
```

## 2. QLoRA — Quantize + LoRA

```
QLoRA = 4-bit quantization base model + LoRA adapters
→ Giảm VRAM từ 32GB → 6GB
→ Chạy được trên Google Colab T4 (16GB)!
```

## 3. Hands-on với Unsloth

```python
from unsloth import FastLanguageModel

# Load model với 4-bit quantization
model, tokenizer = FastLanguageModel.from_pretrained(
    model_name="unsloth/Meta-Llama-3.1-8B-Instruct",
    max_seq_length=2048,
    load_in_4bit=True,
)

# Add LoRA adapters
model = FastLanguageModel.get_peft_model(
    model, r=16, lora_alpha=16,
    target_modules=["q_proj","k_proj","v_proj","o_proj"],
    lora_dropout=0,
)

# Train
from trl import SFTTrainer
trainer = SFTTrainer(
    model=model,
    dataset=dataset,
    max_seq_length=2048,
    args=TrainingArguments(
        per_device_train_batch_size=2,
        num_train_epochs=3,
        learning_rate=2e-4,
        output_dir="outputs",
    ),
)
trainer.train()
```

---

## Tóm tắt

- LoRA: chỉ update ~1% parameters → tiết kiệm GPU và thời gian
- QLoRA: thêm quantization → chạy trên consumer GPU
- Unsloth: 2x nhanh hơn standard LoRA training
- Chi phí: $0 trên Colab, hoặc ~$1–3/giờ cloud GPU

## Bài tập

1. Fine-tune LLaMA 3 8B trên Google Colab (QLoRA)
2. So sánh output: LoRA FT vs API FT (Gemini/OpenAI)
3. Thử rank r=8 vs r=16 vs r=32 — so sánh quality
4. Merge LoRA adapters và export model hoàn chỉnh

