---
id: 019c9619-bb12-7012-c012-bb1200000012
title: 'Lesson 12: PEFT — LoRA, QLoRA and Adapter Methods'
slug: bai-12-peft-lora-qlora
description: >-
  Learn Parameter-Efficient Fine-Tuning (PEFT) with LoRA and QLoRA — a technique
  that allows fine-tuning LLMs with billions of parameters with just consumer
  GPUs. Master LoRA mathematics, 4-bit BitsAndBytes configuration, and compare
  the efficiency between methods.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 3: Training & Fine-tuning LLMs'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI & LLM: From Basics to Advanced'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1777" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1777)"/>

  <!-- Decorations -->
  <g>
    <circle cx="999" cy="267" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="898" cy="86" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="797" cy="165" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="696" cy="244" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="1095" cy="63" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="177" x2="1100" y2="257" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="207" x2="1050" y2="277" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1054.712812921102,211 1054.712812921102,243 1027,259 999.287187078898,243 999.287187078898,211 1027,195" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI & ML — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 12: PEFT — LoRA, QLoRA and Adapter</tspan>
      <tspan x="60" dy="42">Methods</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI & LLM: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Training & Fine-tuning LLMs</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# Lesson 12: PEFT — LoRA, QLoRA and Adapter Methods

## 1. The problem of Full Fine-Tuning

Fine-tuning the entire parameters of a large LLM poses huge challenges:

### Memory required

| Model | Number of parameters | VRAM (FP32) | VRAM (BF16) | VRAM + Adam (BF16) |
|-------|-----------|-------------|-------------|-------------------|
| GPT-2 | 117M | 0.5 GB | 0.25 GB | ~1 GB |
| LLaMA-7B | 7B | 28 GB | 14 GB | ~56 GB |
| LLaMA-13B | 13B | 52 GB | 26 GB | ~104 GB |
| LLaMA-70B | 70B | 280 GB | 140 GB | ~560 GB |

Adam optimizer saves **momentum** and **variance** for each parameter — 3 times the model weight memory. LLaMA-7B needs 4× A100 80GB for full fine-tune!

### Other issues

- **Catastrophic forgetting**: model "forgets" pre-training knowledge
- **Storage**: each fine-tuned version = full model copy (14GB for 7B)
- **Cost**: thousands of USD for one training run

---

## 2. Parameter-Efficient Fine-Tuning (PEFT) Overview

**PEFT** is a family of techniques that only updates a **small subset** of parameters, leaving the rest unchanged:

```
Full Fine-Tuning:  cập nhật 100% params  → VRAM cao, chậm, tốn kém
PEFT:              cập nhật 0.1% - 5%    → VRAM thấp, nhanh, tiết kiệm
```

Main PEFT methods:

1. **Adapter Layers**: add small layers between transformer layers
2. **Prefix Tuning**: add trainable tokens to the beginning of the sequence
3. **Prompt Tuning**: only fine-tune soft prompt embeddings
4. **LoRA**: decomposes the weight update matrix into the product of two low rank matrices

---

## 3. LoRA: Low-Rank Adaptation

### Mathematics of LoRA

Core idea: **weight updates in fine-tuning often have low rankings**.

Instead of learning directly:
```
W_new = W_original + ΔW   (ΔW có kích thước d×d, rất lớn)
```

LoRA factorize ΔW to:
```
ΔW = B × A
```

In which:
- `W_original` ∈ ℝ^(d×d): frozen, not updated
- `A` ∈ ℝ^(r×d): trainable, random Gaussian initialization
- `B` ∈ ℝ^(d×r): trainable, initialized to 0 (so that ΔW = 0 initially)
- `r` is **rank** (usually 4-64), r << d

```
Forward pass: h = W_original × x + (B × A) × x × (alpha/r)
```

**Benefits of parameters:**

```
d = 4096 (LLaMA-7B hidden dim)

Full ΔW:   4096 × 4096 = 16,777,216 tham số
LoRA r=16: (4096×16) + (16×4096) = 131,072 tham số
→ Giảm 128 lần!
```

### Rank and Alpha

```python
lora_config = LoraConfig(
    r=16,          # Rank: càng cao → càng nhiều params nhưng expressive hơn
    lora_alpha=32, # Scaling factor: alpha/r = scale của LoRA
    # Thường đặt alpha = 2*r hoặc alpha = r
    lora_dropout=0.05,  # Regularization
)
```

**Instructions for choosing rank:**

| Rank (r) | Use cases | Number of trainable params (7B model) |
|--------|----------|-------------------------|
| 4 | Simple task, little data | ~4M (~0.06%) |
| 8 | Good balance | ~8M (~0.12%) |
| 16 | More complex tasks | ~17M (~0.24%) |
| 64 | Large domain adaptation | ~67M (~0.95%) |

---

## 4. Select Target Modules

LoRA is applied to **linear layers** in the attention mechanism:

```python
# Với LLaMA/Mistral architecture:
target_modules = [
    "q_proj",   # Query projection
    "v_proj",   # Value projection
    "k_proj",   # Key projection
    "o_proj",   # Output projection
    # Tùy chọn thêm:
    "gate_proj", # MLP gate
    "up_proj",   # MLP up
    "down_proj", # MLP down
]
```

**Strategy:**

```python
# Minimal (nhanh, ít VRAM):
target_modules = ["q_proj", "v_proj"]

# Standard (cân bằng tốt):
target_modules = ["q_proj", "k_proj", "v_proj", "o_proj"]

# Full attention + MLP (tốt nhất, nhưng chậm hơn):
target_modules = ["q_proj", "k_proj", "v_proj", "o_proj",
                  "gate_proj", "up_proj", "down_proj"]
```

---

## 5. QLoRA: 4-bit Quantization + LoRA

**QLoRA** (Dettmers et al., 2023) combines two techniques:

1. **NF4 (NormalFloat 4-bit)**: quantize model weights down to 4-bit
2. **Double Quantization**: quantize both quantization constants
3. **Paged Optimizers**: optimizer memory management with CPU offloading

### Why is NF4 better than INT4?

NF4 is designed for a **normal distribution** of model weights:
- LLM weights are normally distributed normally (Gaussian)
- NF4 allocates more bins in high density areas
- Significantly reduced quantization error compared to INT4

```
FP16 → NF4: giảm 75% bộ nhớ, chất lượng gần như giữ nguyên
```

### VRAM Comparison (LLaMA-7B)

| Method | VRAM Training | Quality |
|--------|---------------|-----------|
| Full FT (FP16) | ~56 GB | Baseline |
| LoRA (FP16) | ~28 GB | ~98% baseline |
| QLoRA (NF4) | ~10 GB | ~97% baseline |

---

## 6. BitsAndBytes: Load Model 4-bit

```python
import torch
from transformers import AutoModelForCausalLM, BitsAndBytesConfig

# Cấu hình 4-bit quantization
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,              # Bật 4-bit loading
    bnb_4bit_quant_type="nf4",      # Dùng NF4 (tốt hơn fp4)
    bnb_4bit_compute_dtype=torch.bfloat16,  # Dtype cho compute
    bnb_4bit_use_double_quant=True, # Double quantization (tiết kiệm thêm ~0.4 bit/param)
)

model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Meta-Llama-3-8B",
    quantization_config=bnb_config,
    device_map="auto",  # Tự động phân bổ layers lên GPU/CPU
)

# Kiểm tra bộ nhớ
print(f"Model footprint: {model.get_memory_footprint() / 1e9:.2f} GB")
# → ~4.5 GB thay vì ~16 GB (BF16)
```

---

## 7. Prefix Tuning and Prompt Tuning

### Prompt Tuning

Just fine-tune the **soft prompt embeddings** (virtual embeddings tokens are added to the input):

```python
from peft import PromptTuningConfig, TaskType, get_peft_model

config = PromptTuningConfig(
    task_type=TaskType.CAUSAL_LM,
    num_virtual_tokens=20,  # Số soft prompt tokens
    tokenizer_name_or_path="gpt2",
)
model = get_peft_model(model, config)
# trainable params: 15,360 / 124,475,648 → 0.01%!
```

### Prefix Tuning

Add trainable "prefix" to the **key and value** of each attention layer:

```python
from peft import PrefixTuningConfig

config = PrefixTuningConfig(
    task_type=TaskType.CAUSAL_LM,
    num_virtual_tokens=30,
    encoder_hidden_size=512,  # MLP để tạo prefix
)
```

Prefix Tuning is better than Prompt Tuning but worse than LoRA in many tasks. Use when very few trainable params are needed.

---

## 8. Full code: QLoRA Fine-tuning LLaMA with PEFT + TRL

```python
import torch
from datasets import load_dataset
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
)
from peft import (
    LoraConfig,
    get_peft_model,
    prepare_model_for_kbit_training,
    TaskType,
)
from trl import SFTTrainer, SFTConfig

# ============================================================
# 1. Cấu hình
# ============================================================
MODEL_ID = "meta-llama/Meta-Llama-3-8B"
OUTPUT_DIR = "./llama3-8b-qlora-vi"
MAX_SEQ_LENGTH = 2048

# ============================================================
# 2. Load Tokenizer
# ============================================================
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)
tokenizer.pad_token = tokenizer.eos_token
tokenizer.padding_side = "right"

# ============================================================
# 3. Load Model với 4-bit Quantization
# ============================================================
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16,
    bnb_4bit_use_double_quant=True,
)

model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID,
    quantization_config=bnb_config,
    device_map="auto",
    attn_implementation="flash_attention_2",  # Faster attention
)

# Chuẩn bị model cho k-bit training
model = prepare_model_for_kbit_training(model)

# ============================================================
# 4. Cấu hình LoRA
# ============================================================
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=[
        "q_proj", "k_proj", "v_proj", "o_proj",
        "gate_proj", "up_proj", "down_proj",
    ],
    lora_dropout=0.05,
    bias="none",
    task_type=TaskType.CAUSAL_LM,
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()

# ============================================================
# 5. Dataset: Vietnamese instruction data
# ============================================================
dataset = load_dataset("tatsu-lab/alpaca", split="train[:10000]")

def format_chat(example):
    messages = [
        {"role": "system", "content": "Bạn là trợ lý AI hữu ích, trả lời bằng tiếng Việt."},
        {"role": "user", "content": example["instruction"]
                                    + (f"\n\n{example['input']}" if example["input"] else "")},
        {"role": "assistant", "content": example["output"]},
    ]
    text = tokenizer.apply_chat_template(messages, tokenize=False)
    return {"text": text}

dataset = dataset.map(format_chat, remove_columns=dataset.column_names)

# ============================================================
# 6. Training Configuration
# ============================================================
training_args = SFTConfig(
    output_dir=OUTPUT_DIR,
    num_train_epochs=2,
    per_device_train_batch_size=2,
    gradient_accumulation_steps=8,      # Effective batch = 16
    learning_rate=2e-4,
    lr_scheduler_type="cosine",
    warmup_ratio=0.05,
    bf16=True,
    gradient_checkpointing=True,
    gradient_checkpointing_kwargs={"use_reentrant": False},
    max_seq_length=MAX_SEQ_LENGTH,
    dataset_text_field="text",
    logging_steps=10,
    save_strategy="epoch",
    optim="paged_adamw_8bit",           # Paged optimizer cho QLoRA
    report_to="tensorboard",
)

# ============================================================
# 7. Train
# ============================================================
trainer = SFTTrainer(
    model=model,
    args=training_args,
    train_dataset=dataset,
    tokenizer=tokenizer,
)

trainer.train()

# ============================================================
# 8. Lưu LoRA weights (chỉ ~80MB, không phải toàn bộ model!)
# ============================================================
trainer.save_model(OUTPUT_DIR + "/lora-weights")
tokenizer.save_pretrained(OUTPUT_DIR + "/lora-weights")

# ============================================================
# 9. Merge LoRA vào base model (cho inference)
# ============================================================
from peft import PeftModel

base_model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID,
    torch_dtype=torch.bfloat16,
    device_map="auto",
)
merged_model = PeftModel.from_pretrained(base_model, OUTPUT_DIR + "/lora-weights")
merged_model = merged_model.merge_and_unload()
merged_model.save_pretrained(OUTPUT_DIR + "/merged")
print("Done! Merged model saved.")
```

---

## 9. Comparison: Full FT vs LoRA vs QLoRA

| Criteria | Full Fine-Tuning | LoRA (BF16) | QLoRA (NF4) |
|----------|-----------------|-------------|-------------|
| VRAM (7B model) | ~56 GB | ~28 GB | ~10 GB |
| Required GPU | 4× A100 | 2× A100 | 1× RTX 3090 |
| Training speed | Fastest | Fast | ~30% slower |
| Quality | 100% (baseline) | ~98-99% | ~96-98% |
| Checkpoint size | 14 GB | ~80 MB | ~80 MB |
| Easy to test | Difficult | Easy | Easiest |
| Catastrophic forgetting | Cao | Low | Low |

### When to use what?

- **Full FT**: Has many GPUs, large dataset, needs maximum quality
- **LoRA**: A100/H100 GPU, good balance between quality and resources
- **QLoRA**: consumer GPU (RTX 3090/4090), personal research, rapid prototype

---

## Summary

- **Full fine-tuning** is not practical with model 7B+ on regular GPUs
- **LoRA** factorize weight updates to `B × A` with low rank — reduce 99%+ trainable params
- **QLoRA** combines NF4 quantization with LoRA — fine-tune 70B model on 2× RTX 3090
- `target_modules` important: start with `q_proj, v_proj`, expand if necessary
- After training, **merge LoRA** into the base model for inference without overhead

The next article will go into **RLHF and Alignment** — the process of training the model to not only follow instructions but also to be safe and consistent with human values.
