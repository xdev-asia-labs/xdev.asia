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

