---
id: 019c9619-bb12-7012-c012-bb1200000012
title: 'Bài 12: PEFT — LoRA, QLoRA và Adapter Methods'
slug: bai-12-peft-lora-qlora
description: >-
  Tìm hiểu Parameter-Efficient Fine-Tuning (PEFT) với LoRA và QLoRA — kỹ thuật
  cho phép fine-tune các LLM hàng tỷ tham số chỉ với GPU consumer. Nắm vững
  toán học LoRA, cấu hình BitsAndBytes 4-bit, và so sánh hiệu quả giữa các phương pháp.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Training & Fine-tuning LLMs"
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: "AI & LLM: Từ Cơ bản đến Nâng cao"
  slug: ai-llm-tu-co-ban-den-nang-cao
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI &amp; ML — Bài 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: PEFT — LoRA, QLoRA và Adapter</tspan>
      <tspan x="60" dy="42">Methods</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI &amp; LLM: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Training &amp; Fine-tuning LLMs</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# Bài 12: PEFT — LoRA, QLoRA và Adapter Methods

## 1. Vấn đề của Full Fine-Tuning

Fine-tuning toàn bộ tham số của một LLM lớn đặt ra những thách thức khổng lồ:

### Yêu cầu bộ nhớ

| Model | Số tham số | VRAM (FP32) | VRAM (BF16) | VRAM + Adam (BF16) |
|-------|-----------|-------------|-------------|-------------------|
| GPT-2 | 117M | 0.5 GB | 0.25 GB | ~1 GB |
| LLaMA-7B | 7B | 28 GB | 14 GB | ~56 GB |
| LLaMA-13B | 13B | 52 GB | 26 GB | ~104 GB |
| LLaMA-70B | 70B | 280 GB | 140 GB | ~560 GB |

Adam optimizer lưu **momentum** và **variance** cho mỗi tham số — gấp 3 lần bộ nhớ model weight. LLaMA-7B cần 4× A100 80GB để full fine-tune!

### Các vấn đề khác

- **Catastrophic forgetting**: model "quên" kiến thức pre-training
- **Lưu trữ**: mỗi fine-tuned version = full model copy (14GB cho 7B)
- **Chi phí**: hàng ngàn USD cho một lần training run

---

## 2. Parameter-Efficient Fine-Tuning (PEFT) Overview

**PEFT** là họ kỹ thuật chỉ cập nhật một **tập con nhỏ** các tham số, giữ nguyên phần còn lại:

```
Full Fine-Tuning:  cập nhật 100% params  → VRAM cao, chậm, tốn kém
PEFT:              cập nhật 0.1% - 5%    → VRAM thấp, nhanh, tiết kiệm
```

Các phương pháp PEFT chính:

1. **Adapter Layers**: thêm các lớp nhỏ vào giữa transformer layers
2. **Prefix Tuning**: thêm trainable tokens vào đầu sequence
3. **Prompt Tuning**: chỉ fine-tune soft prompt embeddings
4. **LoRA**: phân tách ma trận weight update thành tích hai ma trận rank thấp

---

## 3. LoRA: Low-Rank Adaptation

### Toán học của LoRA

Ý tưởng cốt lõi: **weight update trong fine-tuning thường có rank thấp**.

Thay vì học trực tiếp:
```
W_new = W_original + ΔW   (ΔW có kích thước d×d, rất lớn)
```

LoRA factorize ΔW thành:
```
ΔW = B × A
```

Trong đó:
- `W_original` ∈ ℝ^(d×d): frozen, không cập nhật
- `A` ∈ ℝ^(r×d): trainable, khởi tạo random Gaussian
- `B` ∈ ℝ^(d×r): trainable, khởi tạo bằng 0 (để ΔW = 0 ban đầu)
- `r` là **rank** (thường 4-64), r << d

```
Forward pass: h = W_original × x + (B × A) × x × (alpha/r)
```

**Lợi ích về tham số:**

```
d = 4096 (LLaMA-7B hidden dim)

Full ΔW:   4096 × 4096 = 16,777,216 tham số
LoRA r=16: (4096×16) + (16×4096) = 131,072 tham số
→ Giảm 128 lần!
```

### Rank và Alpha

```python
lora_config = LoraConfig(
    r=16,          # Rank: càng cao → càng nhiều params nhưng expressive hơn
    lora_alpha=32, # Scaling factor: alpha/r = scale của LoRA
    # Thường đặt alpha = 2*r hoặc alpha = r
    lora_dropout=0.05,  # Regularization
)
```

**Hướng dẫn chọn rank:**

| Rank (r) | Use case | Số trainable params (7B model) |
|---------|----------|-------------------------------|
| 4 | Tác vụ đơn giản, ít data | ~4M (~0.06%) |
| 8 | Balance tốt | ~8M (~0.12%) |
| 16 | Tác vụ phức tạp hơn | ~17M (~0.24%) |
| 64 | Domain adaptation lớn | ~67M (~0.95%) |

---

## 4. Lựa chọn Target Modules

LoRA được áp dụng lên các **linear layers** trong attention mechanism:

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

**Chiến lược:**

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

**QLoRA** (Dettmers et al., 2023) kết hợp hai kỹ thuật:

1. **NF4 (NormalFloat 4-bit)**: quantize model weights xuống 4-bit
2. **Double Quantization**: quantize cả quantization constants
3. **Paged Optimizers**: quản lý bộ nhớ optimizer với CPU offloading

### Tại sao NF4 tốt hơn INT4?

NF4 được thiết kế cho **normal distribution** của model weights:
- LLM weights thường phân phối chuẩn (Gaussian)
- NF4 phân bổ nhiều bins hơn ở vùng mật độ cao
- Giảm quantization error đáng kể so với INT4

```
FP16 → NF4: giảm 75% bộ nhớ, chất lượng gần như giữ nguyên
```

### VRAM Comparison (LLaMA-7B)

| Method | VRAM Training | Chất lượng |
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

## 7. Prefix Tuning và Prompt Tuning

### Prompt Tuning

Chỉ fine-tune các **soft prompt embeddings** (token embeddings ảo được thêm vào đầu input):

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

Thêm trainable "prefix" vào **key và value** của mỗi attention layer:

```python
from peft import PrefixTuningConfig

config = PrefixTuningConfig(
    task_type=TaskType.CAUSAL_LM,
    num_virtual_tokens=30,
    encoder_hidden_size=512,  # MLP để tạo prefix
)
```

Prefix Tuning tốt hơn Prompt Tuning nhưng kém LoRA hơn ở nhiều task. Dùng khi cần cực kỳ ít trainable params.

---

## 8. Code đầy đủ: QLoRA Fine-tuning LLaMA với PEFT + TRL

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

## 9. So sánh: Full FT vs LoRA vs QLoRA

| Tiêu chí | Full Fine-Tuning | LoRA (BF16) | QLoRA (NF4) |
|----------|-----------------|-------------|-------------|
| VRAM (7B model) | ~56 GB | ~28 GB | ~10 GB |
| GPU cần thiết | 4× A100 | 2× A100 | 1× RTX 3090 |
| Training speed | Nhanh nhất | Nhanh | Chậm hơn ~30% |
| Chất lượng | 100% (baseline) | ~98-99% | ~96-98% |
| Checkpoint size | 14 GB | ~80 MB | ~80 MB |
| Dễ thử nghiệm | Khó | Dễ | Dễ nhất |
| Catastrophic forgetting | Cao | Thấp | Thấp |

### Khi nào dùng gì?

- **Full FT**: Có nhiều GPU, dataset lớn, cần chất lượng tối đa
- **LoRA**: GPU A100/H100, balance tốt giữa chất lượng và tài nguyên
- **QLoRA**: GPU consumer (RTX 3090/4090), nghiên cứu cá nhân, prototype nhanh

---

## Tổng kết

- **Full fine-tuning** không thực tế với model 7B+ trên GPU thông thường
- **LoRA** factorize weight updates thành `B × A` với rank thấp — giảm 99%+ trainable params
- **QLoRA** kết hợp NF4 quantization với LoRA — fine-tune 70B model trên 2× RTX 3090
- `target_modules` quan trọng: bắt đầu với `q_proj, v_proj`, mở rộng nếu cần
- Sau training, **merge LoRA** vào base model để inference không có overhead

Bài tiếp theo sẽ đi vào **RLHF và Alignment** — quá trình huấn luyện model không chỉ làm theo hướng dẫn mà còn an toàn và phù hợp với giá trị con người.
