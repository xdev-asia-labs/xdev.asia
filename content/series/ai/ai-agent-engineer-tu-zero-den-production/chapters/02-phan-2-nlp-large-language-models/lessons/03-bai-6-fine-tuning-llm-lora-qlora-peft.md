---
id: 019e0a01-bb06-7001-c001-ee0600000001
title: "Bài 6: Fine-tuning LLMs — LoRA, QLoRA & PEFT"
slug: bai-6-fine-tuning-llm-lora-qlora-peft
description: >-
  Fine-tuning strategies: full fine-tuning vs parameter-efficient. LoRA, QLoRA, PEFT. Dataset preparation, training với Hugging Face TRL. Evaluation metrics. Merging adapters. Thực hành fine-tune Mistral/LLaMA cho domain-specific tasks.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: NLP & Large Language Models (LLMs)"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **GPT-4 biết mọi thứ, nhưng không biết gì về dữ liệu NỘI BỘ của bạn.** Pretrained model là nền tảng — fine-tuning là bước biến nó thành chuyên gia domain. Vấn đề? Full fine-tuning LLaMA 3 70B cần 140GB+ VRAM. LoRA chỉ cần train **0.1% parameters**. QLoRA đẩy xuống **single GPU 24GB**. Bài này từ lý thuyết đến code hoàn chỉnh — fine-tune Mistral 7B trên dữ liệu riêng với Hugging Face TRL.

## 1. Tại sao Fine-tuning? — When Pretrained Models Are Not Enough

### 1.1. Giới hạn của Pretrained Models

Pretrained LLMs được train trên **internet-scale data** — Wikipedia, GitHub, sách, forums. Nhưng chúng thiếu:

- **Domain knowledge cụ thể**: thuật ngữ y tế, luật Việt Nam, internal codebase
- **Output format nhất quán**: JSON schema cố định, report template công ty
- **Tone & style**: chatbot customer support khác hoàn toàn chatbot kỹ thuật
- **Private data**: model không biết gì về data nội bộ chưa từng xuất hiện online

```text
Khi nào cần Fine-tuning vs Prompting vs RAG?

                    ┌─────────────────────┐
                    │  Task cần gì?       │
                    └─────────┬───────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
     ┌────────────┐  ┌──────────────┐  ┌──────────────┐
     │ Knowledge  │  │   Behavior   │  │  Both        │
     │ mới        │  │   mới        │  │              │
     └─────┬──────┘  └──────┬───────┘  └──────┬───────┘
           │                │                  │
           ▼                ▼                  ▼
       ┌───────┐     ┌────────────┐     ┌────────────┐
       │  RAG  │     │ Fine-tune  │     │ Fine-tune  │
       └───────┘     └────────────┘     │  + RAG     │
                                        └────────────┘

Decision Matrix:
┌──────────────────┬──────────┬────────────┬───────────────┐
│ Yêu cầu         │ Prompting│ RAG        │ Fine-tuning   │
├──────────────────┼──────────┼────────────┼───────────────┤
│ Thêm knowledge  │ ✗        │ ✓ (best)   │ ✓ (expensive) │
│ Thay đổi style  │ ~        │ ✗          │ ✓ (best)      │
│ Output format    │ ~        │ ✗          │ ✓ (best)      │
│ Giảm latency    │ ✗        │ ✗          │ ✓             │
│ Giảm token cost │ ✗        │ ✗          │ ✓             │
│ Setup nhanh     │ ✓ (best) │ ✓          │ ✗             │
└──────────────────┴──────────┴────────────┴───────────────┘
```

### 1.2. Ví dụ thực tế

| Use case | Tại sao fine-tuning? |
|----------|---------------------|
| Chatbot y tế tiếng Việt | Cần hiểu thuật ngữ y khoa VN, trả lời đúng format |
| Code assistant cho internal framework | RAG không đủ — cần model "hiểu" coding patterns |
| Phân loại email support | Consistent JSON output, low latency, no API cost |
| Tóm tắt báo cáo tài chính | Domain-specific terminology + strict format |

> **Key insight:** Fine-tuning thay đổi **behavior** của model. RAG thay đổi **knowledge**. Prompting thay đổi **context**. Ba kỹ thuật bổ trợ nhau, không thay thế.

## 2. Full Fine-tuning vs Parameter-Efficient Fine-tuning (PEFT)

### 2.1. Full Fine-tuning — Brute Force Approach

Full fine-tuning cập nhật **toàn bộ parameters** của model. Với LLaMA 3 8B — đó là **8 tỷ parameters**.

```text
Full Fine-tuning Memory Requirements:

Model Parameters:  8B × 4 bytes (FP32)  = 32 GB
              or   8B × 2 bytes (BF16)  = 16 GB

Optimizer States (AdamW):
  - Momentum (m):      8B × 4 bytes     = 32 GB
  - Variance (v):      8B × 4 bytes     = 32 GB

Gradients:            8B × 4 bytes       = 32 GB

Activations (vary):   ~10-30 GB (batch, seq_len dependent)

TOTAL (FP32):    32 + 32 + 32 + 32 + ~20 = ~148 GB VRAM
TOTAL (BF16):    16 + 32 + 32 + 16 + ~20 = ~116 GB VRAM

→ Cần 4× A100 80GB hoặc 2× H100 80GB cho LLaMA 8B
→ LLaMA 70B? 10-16× A100 80GB → ~$30-50/hour cloud
```

### 2.2. PEFT — Train Ít, Hiệu Quả Ngang

**Parameter-Efficient Fine-Tuning (PEFT)** chỉ train một phần rất nhỏ parameters — thường **0.1% - 1%** tổng model.

| Tiêu chí | Full Fine-tuning | PEFT (LoRA/QLoRA) |
|----------|-----------------|-------------------|
| **Trainable params** | 100% (8B) | 0.1-1% (8-80M) |
| **VRAM (LLaMA 8B)** | ~116 GB (BF16) | ~6-16 GB |
| **Training time** | Hours-days (multi-GPU) | Hours (single GPU) |
| **GPU cần thiết** | 4-8× A100 | 1× RTX 4090/A100 |
| **Cloud cost (8B)** | $50-200 | $5-20 |
| **Risk catastrophic forgetting** | Cao | Thấp |
| **Dễ swap adapters** | Không — full model mới | Có — chỉ swap adapter nhỏ |
| **Quality** | Cao nhất (nếu data đủ) | 95-99% so với full FT |

> **Key takeaway:** PEFT đạt ~95% quality của full fine-tuning với **1/10 cost**. Trừ khi bạn có hàng trăm nghìn samples và budget lớn, PEFT luôn là lựa chọn mặc định.

## 3. LoRA Deep Dive — Low-Rank Adaptation

### 3.1. Core Idea — Matrix Decomposition

**LoRA (Low-Rank Adaptation)** — paper từ Microsoft Research (Hu et al., 2021). Ý tưởng cốt lõi:

> Khi fine-tuning, **thay đổi trong weights có intrinsic low rank**. Thay vì update ma trận W lớn, ta decompose thay đổi thành tích hai ma trận nhỏ.

```text
LoRA Math Intuition:

Standard fine-tuning:
  W' = W + ΔW          (ΔW has same shape as W)
  W ∈ ℝ^(d×d)         (ví dụ: 4096 × 4096 = 16.7M params)

LoRA decomposition:
  W' = W + BA           (freeze W, chỉ train B và A)
  A ∈ ℝ^(r×d)          (ví dụ: r=16 → 16 × 4096 = 65K)
  B ∈ ℝ^(d×r)          (ví dụ: 4096 × 16 = 65K)
  ΔW = BA ∈ ℝ^(d×d)   (full-rank approximation)

Params so sánh:
  ΔW trực tiếp:  d × d = 4096 × 4096 = 16,777,216  params
  LoRA (r=16):   2 × d × r = 2 × 4096 × 16 = 131,072  params
  → Giảm 128×! (chỉ 0.78% original)

Scaling factor:
  h = Wx + (α/r) · BAx
  α (lora_alpha): scaling hyperparameter, thường α = 2×r

Hình dung:

  Input x ──────────────────── W (frozen) ────────── + ──▶ Output h
     │                                                ▲
     │                                                │
     └──▶ A (down-project) ──▶ B (up-project) ──────┘
          d → r (compress)      r → d (expand)
          ℝ^(r×d)               ℝ^(d×r)
          
     r = rank (4, 8, 16, 32, 64)
     Nhỏ hơn → ít params hơn, nhưng có thể mất expressiveness
```

### 3.2. Where to Apply LoRA — Target Modules

Trong Transformer, mỗi attention layer có 4 projection matrices. LoRA áp dụng vào một hoặc nhiều:

```text
Attention Block Target Modules:

Input ──▶ ┌─── q_proj (Query)  ──┐
           ├─── k_proj (Key)    ──┤──▶ Attention ──▶ o_proj (Output)
           └─── v_proj (Value)  ──┘
           
MLP Block:
Input ──▶ gate_proj ──▶ SiLU ──▶ × ──▶ down_proj ──▶ Output
           up_proj ────────────▶ ┘

Recommended Target Modules:
┌────────────────┬───────────┬──────────────────────────────┐
│ Target         │ Impact    │ Khi nào dùng                │
├────────────────┼───────────┼──────────────────────────────┤
│ q_proj, v_proj │ Cao       │ Default choice, paper gốc   │
│ + k_proj       │ Cao hơn   │ Thêm ~33% params, nhích     │
│ + o_proj       │ Marginal  │ Thêm nếu budget cho phép    │
│ + gate, up,    │ Cao nhất  │ "all-linear" — best quality │
│   down proj    │           │ nhưng 3× params so default   │
└────────────────┴───────────┴──────────────────────────────┘

Ví dụ thực tế (Mistral 7B, r=16):
  - q_proj + v_proj only:      ~4.2M trainable params
  - All attention + MLP:       ~21M trainable params  
  - Tổng model: 7.24B → train 0.06% - 0.3%
```

### 3.3. LoRA Hyperparameters

| Hyperparameter | Ý nghĩa | Giá trị phổ biến | Khuyến nghị |
|---------------|---------|------------------|-------------|
| `r` (rank) | Rank của decomposition | 4, 8, 16, 32, 64 | 16-32 cho hầu hết tasks |
| `lora_alpha` | Scaling factor | 16, 32, 64 | Thường = 2×r |
| `lora_dropout` | Dropout trên LoRA layers | 0.0, 0.05, 0.1 | 0.05-0.1 nếu overfitting |
| `target_modules` | Layers áp dụng LoRA | q_proj, v_proj, ... | "all" cho best quality |
| `bias` | Train bias không | "none", "all", "lora_only" | "none" (default) |
| `task_type` | Loại task | CAUSAL_LM, SEQ_CLS | CAUSAL_LM cho generation |

> **Exam tip:** `r` cao hơn **không luôn tốt hơn**. r=16 thường đủ. Tăng r=64 chỉ giúp khi dataset lớn (>50K samples) và task phức tạp. r=256 gần tương đương full fine-tuning nhưng chậm hơn.

## 4. QLoRA — 4-bit Quantization + LoRA

### 4.1. QLoRA: Ba Innovation Chính

**QLoRA** (Dettmers et al., 2023) kết hợp quantization với LoRA — cho phép fine-tune 65B model trên single 48GB GPU.

```text
QLoRA = 3 innovations:

1. NF4 (4-bit NormalFloat):
   ┌─────────────────────────────────────────────────┐
   │  FP16 weights → quantize → 4-bit NF4           │
   │  Dựa trên: weight distributions are ~Normal     │
   │  Optimal cho normal distribution → ít info loss  │
   │                                                  │
   │  FP16: 16 bits → NF4: 4 bits = 4× compression  │
   │  7B model: 14GB → 3.5GB                         │
   └─────────────────────────────────────────────────┘

2. Double Quantization:
   ┌─────────────────────────────────────────────────┐
   │  Quantization constants cũng được quantize!     │
   │  Mỗi block 64 weights → 1 FP32 scale (4 bytes) │
   │  Double quant: FP32 scale → FP8 (1 byte)        │
   │  Tiết kiệm thêm ~0.37 bits/param               │
   │  7B model: tiết kiệm ~3GB RAM                   │
   └─────────────────────────────────────────────────┘

3. Paged Optimizers:
   ┌─────────────────────────────────────────────────┐
   │  Optimizer states (AdamW m,v) → CPU RAM          │
   │  Khi GPU VRAM hết → page out to CPU              │
   │  Giống virtual memory của OS                     │
   │  Tránh OOM khi batch lớn hoặc sequence dài       │
   └─────────────────────────────────────────────────┘

Memory comparison (LLaMA 7B fine-tuning):
┌───────────────────┬──────────┬──────────┬──────────┐
│                   │ Full FT  │ LoRA     │ QLoRA    │
├───────────────────┼──────────┼──────────┼──────────┤
│ Model weights     │ 14 GB    │ 14 GB    │ 3.5 GB   │
│ LoRA params       │ —        │ ~50 MB   │ ~50 MB   │
│ Optimizer states  │ 28 GB    │ ~100 MB  │ ~100 MB  │
│ Gradients         │ 14 GB    │ ~50 MB   │ ~50 MB   │
│ Activations       │ ~10 GB   │ ~5 GB    │ ~5 GB    │
├───────────────────┼──────────┼──────────┼──────────┤
│ TOTAL VRAM        │ ~66 GB   │ ~19 GB   │ ~9 GB    │
│ GPU needed        │ 2×A100   │ 1×A100   │ 1×RTX4090│
└───────────────────┴──────────┴──────────┴──────────┘
```

### 4.2. NF4 vs INT4 vs FP4

| Quantization Type | Precision | Best for | Info loss |
|-------------------|-----------|----------|-----------|
| **INT4** | Uniform 4-bit | General purpose | Moderate |
| **FP4** | Floating-point 4-bit | Outlier-friendly | Lower than INT4 |
| **NF4** | NormalFloat 4-bit | Neural network weights | Lowest (optimal) |

NF4 hoạt động dựa trên observation: **neural network weights follow normal distribution**. NF4 chia quantization bins theo quantiles của normal distribution → mỗi bin chứa cùng số lượng values → minimum information loss.

> **Key insight:** QLoRA + NF4 achieves **99.3% quality** so full fine-tuning FP16 mà chỉ dùng **~1/7 VRAM**. Sự khác biệt về quality gần như unmeasurable trên hầu hết benchmarks.

## 5. Other PEFT Methods — Prefix Tuning, Prompt Tuning, IA3

### 5.1. Quick Comparison

```text
PEFT Methods Family:

┌─────────────────────────────────────────────────────┐
│                 PEFT Methods                        │
├──────────────┬──────────────┬───────────────────────┤
│  Additive    │  Reparameter.│  Selective            │
├──────────────┼──────────────┼───────────────────────┤
│ Adapter      │ LoRA         │ BitFit (bias only)    │
│ Prefix Tuning│ QLoRA        │ Freeze some layers    │
│ Prompt Tuning│ IA3          │                       │
│ (IA)3        │ DoRA         │                       │
└──────────────┴──────────────┴───────────────────────┘
```

| Method | Trainable params | Ý tưởng chính | Ưu điểm | Nhược điểm |
|--------|-----------------|---------------|---------|------------|
| **LoRA** | 0.1-1% | Low-rank matrices song song | Best quality/cost tradeoff | Cần chọn rank, target modules |
| **QLoRA** | 0.1-1% | LoRA + 4-bit quantization | Chạy trên consumer GPU | Chậm hơn LoRA ~15-20% |
| **Prefix Tuning** | ~0.1% | Prepend trainable vectors vào K,V | Rất ít params | Quality thấp hơn LoRA |
| **Prompt Tuning** | <0.01% | Trainable soft tokens prepend | Siêu nhẹ, swap dễ | Chỉ tốt với model >10B |
| **IA3** | <0.01% | Scale K, V, FFN bằng learned vectors | Ít params nhất, train nhanh nhất | Quality thấp hơn LoRA |
| **DoRA** | ~1-2% | LoRA + weight decomposition (magnitude/direction) | Quality = full FT trên một số tasks | Mới, ít tested |
| **Adapter** | 1-5% | Bottleneck layers xen kẽ | Proven, modular | Tăng latency (thêm layers) |

### 5.2. Prefix Tuning vs Prompt Tuning

```text
Prompt Tuning:
  [P1 P2 P3 ... Pk] [actual input tokens] → Model → Output
   └── trainable ──┘  └── frozen ────────┘
  Soft prompts prepend trước input, chỉ train Pk vectors

Prefix Tuning:
  Mỗi layer attention nhận prefix:
  Layer 1: [prefix_K₁, prefix_V₁] + [actual K, V]
  Layer 2: [prefix_K₂, prefix_V₂] + [actual K, V]
  ...
  Trainable prefixes ở MỌI layer → expressive hơn Prompt Tuning
```

> **Practical advice:** Trong 95% trường hợp, bạn nên dùng **QLoRA**. Nó là sweet spot giữa quality, cost, và ease of use. Chỉ consider Prompt Tuning khi cần swap hàng trăm tasks trên cùng model (serving efficiency) hoặc model rất lớn (>100B).

## 6. Dataset Preparation cho Fine-tuning

### 6.1. Instruction Format — Alpaca vs ShareGPT

Dataset là yếu tố **quyết định nhất** cho quality fine-tuning. Format phổ biến:

**Alpaca Format** — single-turn instruction-response:

```json
{
  "instruction": "Tóm tắt đoạn văn sau thành 3 bullet points",
  "input": "Trí tuệ nhân tạo (AI) đang thay đổi ngành y tế...",
  "output": "• AI giúp chẩn đoán chính xác hơn\n• Giảm chi phí vận hành\n• Cá nhân hóa điều trị"
}
```

**ShareGPT / Conversational Format** — multi-turn:

```json
{
  "conversations": [
    {"role": "system", "content": "Bạn là trợ lý y tế chuyên nghiệp."},
    {"role": "user", "content": "Triệu chứng đau đầu kéo dài là gì?"},
    {"role": "assistant", "content": "Đau đầu kéo dài có thể do nhiều nguyên nhân..."},
    {"role": "user", "content": "Khi nào cần đi khám?"},
    {"role": "assistant", "content": "Bạn nên đi khám khi đau đầu kèm theo..."}
  ]
}
```

### 6.2. Chat Template — Tại sao quan trọng

Mỗi model có **chat template riêng**. Training data PHẢI match template của base model:

```text
Mistral / LLaMA 3 Chat Template:

<s>[INST] <<SYS>>
{system_message}
<</SYS>>

{user_message_1} [/INST] {assistant_response_1} </s>
<s>[INST] {user_message_2} [/INST] {assistant_response_2} </s>

ChatML Template (Qwen, nhiều model khác):

<|im_start|>system
{system_message}<|im_end|>
<|im_start|>user
{user_message}<|im_end|>
<|im_start|>assistant
{assistant_response}<|im_end|>
```

> **Cảnh báo:** Dùng sai chat template là lỗi phổ biến nhất khi fine-tuning. Model sẽ generate gibberish nếu training format khác inference format. **Luôn dùng `tokenizer.apply_chat_template()`**.

### 6.3. Dataset Quality Checklist

| Tiêu chí | Mô tả | Tối thiểu |
|----------|-------|----------|
| **Số lượng** | Số instruction-response pairs | 1,000+ cho task cụ thể |
| **Diversity** | Đa dạng instructions | Tránh copy-paste patterns |
| **Quality** | Responses chính xác, đầy đủ | Human review > AI-generated |
| **Length** | Consistent length cho output | Match expected output length |
| **Format** | Đúng chat template | Validate trước training |
| **No duplicates** | Deduplicate | Hash-based dedup |

```text
Dataset Size Guidelines:

Task specificity:        Samples needed:
┌──────────────────────┬───────────────────┐
│ Single narrow task   │ 500 - 2,000       │
│ (classify, extract)  │                   │
├──────────────────────┼───────────────────┤
│ Domain adaptation    │ 5,000 - 20,000    │
│ (medical, legal)     │                   │
├──────────────────────┼───────────────────┤
│ General assistant    │ 50,000 - 200,000  │
│ (chat, multi-task)   │                   │
├──────────────────────┼───────────────────┤
│ Pretrain-style       │ 1M+ tokens        │
│ (continued pretraining│                  │
└──────────────────────┴───────────────────┘
```

## 7. Hands-on: Fine-tune Mistral 7B với QLoRA

### 7.1. Environment Setup

```bash
# Tạo environment
conda create -n finetune python=3.11 -y
conda activate finetune

# Install core packages
pip install torch==2.3.0 --index-url https://download.pytorch.org/whl/cu121
pip install transformers==4.44.0
pip install datasets==2.20.0
pip install peft==0.12.0
pip install trl==0.9.6
pip install bitsandbytes==0.43.1
pip install accelerate==0.33.0
pip install scipy sentencepiece protobuf

# Verify CUDA
python -c "import torch; print(f'CUDA: {torch.cuda.is_available()}, Device: {torch.cuda.get_device_name(0)}')"
```

### 7.2. Full Training Script

Đây là script hoàn chỉnh — chạy được trên **single GPU 24GB** (RTX 4090, A5000, hoặc A100):

```python
"""
Fine-tune Mistral 7B Instruct với QLoRA
Yêu cầu: 1× GPU 24GB VRAM, ~16GB RAM
Thời gian: ~2-4 hours cho 3 epochs trên 5K samples
"""

import torch
from datasets import load_dataset, Dataset
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
    TrainingArguments,
)
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training
from trl import SFTTrainer

# ============================================================
# 1. Configuration
# ============================================================
MODEL_NAME = "mistralai/Mistral-7B-Instruct-v0.3"
OUTPUT_DIR = "./mistral-7b-finetuned"
MAX_SEQ_LENGTH = 2048

# LoRA Config
LORA_R = 16              # Rank — 16 là sweet spot
LORA_ALPHA = 32          # Scaling factor = 2 * r
LORA_DROPOUT = 0.05      # Nhẹ dropout chống overfitting
TARGET_MODULES = [        # Apply LoRA vào attention + MLP
    "q_proj", "k_proj", "v_proj", "o_proj",
    "gate_proj", "up_proj", "down_proj",
]

# Training Config
NUM_EPOCHS = 3
BATCH_SIZE = 4
GRADIENT_ACCUMULATION = 4  # Effective batch = 4 × 4 = 16
LEARNING_RATE = 2e-4
WARMUP_RATIO = 0.03
WEIGHT_DECAY = 0.001

# ============================================================
# 2. Load Model với 4-bit Quantization (QLoRA)
# ============================================================
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",          # NormalFloat4 — optimal
    bnb_4bit_compute_dtype=torch.bfloat16,  # Compute in BF16
    bnb_4bit_use_double_quant=True,     # Double quantization
)

print("Loading model in 4-bit...")
model = AutoModelForCausalLM.from_pretrained(
    MODEL_NAME,
    quantization_config=bnb_config,
    device_map="auto",             # Auto distribute across GPUs
    attn_implementation="flash_attention_2",  # Flash Attention 2
    torch_dtype=torch.bfloat16,
)
model.config.use_cache = False     # Disable KV cache for training
model.config.pretraining_tp = 1

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
tokenizer.pad_token = tokenizer.eos_token
tokenizer.padding_side = "right"   # Phải padding right cho causal LM

# Prepare model cho k-bit training
model = prepare_model_for_kbit_training(model)

# ============================================================
# 3. Configure LoRA
# ============================================================
lora_config = LoraConfig(
    r=LORA_R,
    lora_alpha=LORA_ALPHA,
    lora_dropout=LORA_DROPOUT,
    target_modules=TARGET_MODULES,
    bias="none",
    task_type="CAUSAL_LM",
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# Output: trainable params: 21,299,200 || all params: 7,262,928,896
#         || trainable: 0.293%

# ============================================================
# 4. Prepare Dataset
# ============================================================
def format_instruction(sample):
    """Format sample thành Mistral chat template."""
    messages = [
        {"role": "user", "content": sample["instruction"]},
        {"role": "assistant", "content": sample["output"]},
    ]
    # Dùng apply_chat_template để format đúng
    text = tokenizer.apply_chat_template(
        messages,
        tokenize=False,
        add_generation_prompt=False,
    )
    return {"text": text}

# Load dataset — thay bằng dataset của bạn
# Ví dụ: dataset medical QA tiếng Việt
dataset = load_dataset("json", data_files="./data/medical_qa_vi.json")

# Nếu chưa có dataset, tạo demo dataset
demo_data = [
    {
        "instruction": "Triệu chứng COVID-19 phổ biến nhất là gì?",
        "output": "Các triệu chứng phổ biến nhất của COVID-19 bao gồm: sốt, ho khan, mệt mỏi, đau họng, đau cơ, và mất vị giác/khứu giác. Triệu chứng nặng gồm khó thở, đau ngực, và lú lẫn.",
    },
    {
        "instruction": "Phân biệt viêm phổi do vi khuẩn và virus",
        "output": "Viêm phổi vi khuẩn: sốt cao đột ngột, đờm vàng/xanh, bạch cầu tăng, đáp ứng kháng sinh. Viêm phổi virus: sốt nhẹ từ từ, ho khan, bạch cầu bình thường/giảm, không đáp ứng kháng sinh.",
    },
]
# Trong thực tế, cần 1000+ samples
dataset = Dataset.from_list(demo_data)
dataset = dataset.map(format_instruction)

# Split train/eval (90/10)
dataset = dataset.train_test_split(test_size=0.1, seed=42)

# ============================================================
# 5. Training Arguments
# ============================================================
training_args = TrainingArguments(
    output_dir=OUTPUT_DIR,
    num_train_epochs=NUM_EPOCHS,
    per_device_train_batch_size=BATCH_SIZE,
    per_device_eval_batch_size=BATCH_SIZE,
    gradient_accumulation_steps=GRADIENT_ACCUMULATION,
    gradient_checkpointing=True,        # Tiết kiệm VRAM
    optim="paged_adamw_32bit",          # Paged optimizer (QLoRA)
    learning_rate=LEARNING_RATE,
    lr_scheduler_type="cosine",
    warmup_ratio=WARMUP_RATIO,
    weight_decay=WEIGHT_DECAY,
    max_grad_norm=0.3,                  # Gradient clipping
    fp16=False,
    bf16=True,                          # BFloat16 training
    logging_steps=10,
    eval_strategy="steps",
    eval_steps=50,
    save_strategy="steps",
    save_steps=100,
    save_total_limit=3,                 # Keep last 3 checkpoints
    load_best_model_at_end=True,
    metric_for_best_model="eval_loss",
    report_to="tensorboard",            # Hoặc "wandb"
    seed=42,
)

# ============================================================
# 6. Initialize Trainer & Train
# ============================================================
trainer = SFTTrainer(
    model=model,
    args=training_args,
    train_dataset=dataset["train"],
    eval_dataset=dataset["test"],
    tokenizer=tokenizer,
    dataset_text_field="text",          # Column chứa formatted text
    max_seq_length=MAX_SEQ_LENGTH,
    packing=True,                       # Pack ngắn samples → 1 sequence
)

print("Starting training...")
trainer.train()

# Save final adapter
trainer.save_model(f"{OUTPUT_DIR}/final")
tokenizer.save_pretrained(f"{OUTPUT_DIR}/final")
print(f"Training complete! Adapter saved to {OUTPUT_DIR}/final")
```

### 7.3. Inference với Fine-tuned Model

```python
"""Test model sau fine-tuning."""
from peft import PeftModel
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# Load base model + adapter
base_model = AutoModelForCausalLM.from_pretrained(
    "mistralai/Mistral-7B-Instruct-v0.3",
    torch_dtype=torch.bfloat16,
    device_map="auto",
    load_in_4bit=True,
)
model = PeftModel.from_pretrained(base_model, "./mistral-7b-finetuned/final")
tokenizer = AutoTokenizer.from_pretrained("./mistral-7b-finetuned/final")

# Generate
messages = [
    {"role": "user", "content": "Triệu chứng sốt xuất huyết và cách xử lý?"}
]
input_ids = tokenizer.apply_chat_template(
    messages, return_tensors="pt", add_generation_prompt=True
).to(model.device)

outputs = model.generate(
    input_ids,
    max_new_tokens=512,
    temperature=0.7,
    top_p=0.9,
    do_sample=True,
    repetition_penalty=1.1,
)

response = tokenizer.decode(outputs[0][input_ids.shape[-1]:], skip_special_tokens=True)
print(response)
```

## 8. Training Monitoring — Loss Curves & Common Problems

### 8.1. Metrics cần theo dõi

```text
Healthy Training Curves:

Loss                     Learning Rate
│                        │
│╲                       │    ╱‾‾‾‾‾‾╲
│  ╲                     │   ╱ warmup  ╲
│    ╲___                │  ╱           ╲
│        ╲___            │ ╱    cosine   ╲
│            ╲____       │╱    decay      ╲
│                 ╲___   │                 ╲
├──────────────────────  ├──────────────────────
0   steps         end    0   steps         end

Training loss: giảm smooth, cuối ổn định
Eval loss:     giảm theo train loss, KHÔNG tăng ngược lại
```

| Vấn đề | Dấu hiệu | Giải pháp |
|--------|-----------|----------|
| **Overfitting** | Eval loss tăng, train loss giảm | Giảm epochs, tăng dropout, thêm data |
| **Underfitting** | Cả hai loss cao, không giảm | Tăng r/rank, tăng learning rate, thêm target_modules |
| **Catastrophic forgetting** | Model quên general knowledge | Giảm LR, giảm epochs, dùng PEFT thay full FT |
| **Loss spike** | Loss tăng đột ngột | Giảm LR, tăng warmup, kiểm tra data quality |
| **NaN loss** | Loss = NaN | Dùng BF16 thay FP16, giảm LR, check data |
| **Slow convergence** | Loss giảm rất chậm | Tăng LR, kiểm tra data format, kiểm tra chat template |

### 8.2. Evaluate chất lượng Fine-tuned Model

```python
"""Simple evaluation script."""
import json

# Test samples (không nằm trong training data)
test_prompts = [
    "Phân biệt tiểu đường type 1 và type 2",
    "Khi nào cần xét nghiệm máu?",
    "Tác dụng phụ phổ biến của kháng sinh là gì?",
]

results = []
for prompt in test_prompts:
    messages = [{"role": "user", "content": prompt}]
    input_ids = tokenizer.apply_chat_template(
        messages, return_tensors="pt", add_generation_prompt=True
    ).to(model.device)
    
    outputs = model.generate(input_ids, max_new_tokens=256, temperature=0.1)
    response = tokenizer.decode(
        outputs[0][input_ids.shape[-1]:], skip_special_tokens=True
    )
    results.append({"prompt": prompt, "response": response})
    print(f"Q: {prompt}")
    print(f"A: {response}\n{'='*60}")

# Save results cho human review
with open("eval_results.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
```

> **Best practice:** Đừng chỉ dựa vào loss. **Human evaluation** trên 50-100 samples là gold standard. Tạo rubric: accuracy, relevance, format adherence, then chấm 1-5.

## 9. Merging Adapters & Deployment

### 9.1. Merge LoRA vào Base Model

Khi deploy, bạn có 2 lựa chọn:
- **Giữ riêng adapter**: base model + adapter file nhỏ (~50-100MB). Flexible, swap được.
- **Merge**: Gộp adapter vào model → single model file. Inference nhanh hơn.

```python
"""Merge LoRA adapter vào base model và push lên HF Hub."""
from peft import PeftModel
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# Load base model (KHÔNG quantize — phải full precision để merge)
base_model = AutoModelForCausalLM.from_pretrained(
    "mistralai/Mistral-7B-Instruct-v0.3",
    torch_dtype=torch.bfloat16,
    device_map="auto",
)

# Load adapter
model = PeftModel.from_pretrained(base_model, "./mistral-7b-finetuned/final")

# Merge adapter vào base model
print("Merging adapter into base model...")
merged_model = model.merge_and_unload()

# Save merged model
MERGED_DIR = "./mistral-7b-medical-merged"
merged_model.save_pretrained(MERGED_DIR)
tokenizer = AutoTokenizer.from_pretrained("./mistral-7b-finetuned/final")
tokenizer.save_pretrained(MERGED_DIR)

# Push to Hugging Face Hub (optional)
# merged_model.push_to_hub("your-username/mistral-7b-medical-vi")
# tokenizer.push_to_hub("your-username/mistral-7b-medical-vi")

print(f"Merged model saved to {MERGED_DIR}")
```

### 9.2. Deployment Options sau Merge

```text
Deployment Pipeline:

Fine-tuned Adapter
       │
       ├──▶ Option A: Serve riêng adapter
       │    ├── vLLM: --lora-modules adapter_name=./adapter_path
       │    ├── Ollama: tạo Modelfile FROM base + ADAPTER
       │    └── Ưu điểm: swap adapters runtime, multi-tenant
       │
       └──▶ Option B: Merge → Single model
            ├── merge_and_unload() → GGUF (llama.cpp)
            ├── merge → Quantize (GPTQ/AWQ) → vLLM
            └── Ưu điểm: faster inference, simpler deploy
```

## 10. DPO/ORPO — Preference-based Training

### 10.1. Beyond SFT — Alignment with Human Preferences

**Supervised Fine-Tuning (SFT)** dạy model TRẢ LỜI. Nhưng không dạy model phân biệt response TỐT vs XẤU. Đây là lúc cần **alignment**.

```text
Training Pipeline:

Pretrained Model
       │
       ▼
┌──────────────┐
│     SFT      │◄── Instruction dataset (instruction → response)
│ (Bài này)    │    Dạy model follow instructions
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  RLHF / DPO  │◄── Preference dataset (chosen vs rejected)
│  / ORPO      │    Dạy model chọn response TỐT hơn
└──────┬───────┘
       │
       ▼
  Aligned Model (helpful, harmless, honest)
```

| Method | Data cần | Ưu điểm | Nhược điểm |
|--------|---------|---------|------------|
| **RLHF** | Preference pairs + reward model | Gold standard (ChatGPT) | Phức tạp, unstable, cần reward model |
| **DPO** | Preference pairs only | Stable, simple, no reward model | Cần SFT trước, sensitive to data |
| **ORPO** | Preference pairs only | Single stage (SFT + alignment cùng lúc) | Mới hơn, ít validated |
| **KTO** | Chỉ cần thumbs up/down | Dễ thu thập data nhất | Quality thấp hơn DPO |

**DPO (Direct Preference Optimization)** dataset format:

```json
{
  "prompt": "Giải thích machine learning cho người mới",
  "chosen": "Machine learning là phương pháp giúp máy tính tự học từ dữ liệu mà không cần lập trình cụ thể. Ví dụ: email spam filter học phân loại từ hàng ngàn email...",
  "rejected": "ML là AI subfield dùng statistical methods để tối ưu loss function trên hypothesis space H với VC dimension hữu hạn qua ERM principle..."
}
```

> **Practical note:** Với hầu hết use cases, **SFT đủ tốt**. Chỉ cần DPO/ORPO khi model inconsistent quality hoặc bạn cần alignment nghiêm ngặt (safety, tone). DPO thêm 1 training stage nhưng cải thiện rõ rệt consistency.

## 11. Fine-tuning Cost Estimation

### 11.1. GPU Hours & Cloud Pricing

```text
Cost Estimation Formula:

Training time ≈ (num_samples × num_epochs × seq_length) / 
                (tokens_per_second × batch_size)

Ví dụ: 10K samples, 3 epochs, avg 512 tokens:
  Total tokens = 10,000 × 3 × 512 = 15,360,000 tokens
  QLoRA speed ≈ 3,000 tokens/sec (A100) hoặc 1,500 tokens/sec (4090)
  A100: 15.36M / 3,000 = 5,120 sec ≈ 1.4 hours
  4090: 15.36M / 1,500 = 10,240 sec ≈ 2.8 hours
```

| Cloud Provider | GPU | VRAM | Giá/hour (on-demand) | QLoRA 7B (10K samples) |
|---------------|-----|------|---------------------|----------------------|
| **Lambda Labs** | A100 80GB | 80 GB | ~$1.10/hr | ~$1.50 |
| **RunPod** | A100 80GB | 80 GB | ~$1.64/hr | ~$2.30 |
| **RunPod** | RTX 4090 | 24 GB | ~$0.44/hr | ~$1.20 |
| **AWS** | p4d (A100) | 80 GB | ~$3.80/hr | ~$5.30 |
| **Google Cloud** | A100 | 80 GB | ~$3.67/hr | ~$5.10 |
| **Vast.ai** | RTX 4090 | 24 GB | ~$0.30/hr | ~$0.85 |
| **Google Colab** | T4/A100 | 15-40 GB | Free-$10/mo | Miễn phí (T4, slow) |

### 11.2. Cost so sánh: Fine-tune vs API

```text
Scenario: Medical QA chatbot, 1000 queries/day, avg 500 tokens response

Option A — GPT-4o API:
  1000 queries × (200 input + 500 output) tokens/query
  Input:  200K tokens/day × $2.50/1M = $0.50/day
  Output: 500K tokens/day × $10/1M  = $5.00/day
  Monthly: $165/month

Option B — Fine-tuned Mistral 7B (self-hosted):
  Training: ~$5 one-time (QLoRA trên RunPod)
  Serving: RTX 4090 instance ~$0.44/hr × 24hr = $10.56/day
  Monthly: $320/month (dedicated) hoặc $50/month (spot/shared)

Option C — Fine-tuned + quantized (GGUF Q4):
  Serving trên CPU/small GPU: ~$50-100/month VPS
  Monthly: $50-100/month
  
Break-even analysis:
  GPT-4o rẻ hơn nếu < 500 queries/day
  Self-host rẻ hơn nếu > 2000 queries/day hoặc cần privacy
```

> **Practical advice:** Bắt đầu với API (GPT-4o / Claude) để validate idea. Khi volume > 2000 queries/day HOẶC cần data privacy → fine-tune + self-host. QLoRA training cost gần như negligible (<$10 cho 7B model).

## 12. Cheat Sheet — Quick Reference

```text
┌──────────────────────────────────────────────────────────┐
│          FINE-TUNING LLMs — CHEAT SHEET                 │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  KTHND fine-tune?                                        │
│  ✓ Behavior thay đổi (style, format, domain)            │
│  ✗ Knowledge mới → dùng RAG                             │
│                                                          │
│  Method: QLoRA (99% trường hợp)                         │
│  ├── r=16-32, alpha=2×r, dropout=0.05                   │
│  ├── target_modules="all" (attention + MLP)             │
│  ├── bnb: nf4 + double_quant + bf16_compute             │
│  └── paged_adamw_32bit optimizer                        │
│                                                          │
│  Dataset:                                                │
│  ├── Format: Alpaca (single-turn) / ShareGPT (multi)    │
│  ├── PHẢI match chat_template của base model            │
│  ├── Min 1000 samples cho narrow task                   │
│  └── Quality > Quantity (always)                        │
│                                                          │
│  Training args:                                          │
│  ├── LR: 2e-4 (QLoRA default)                          │
│  ├── Epochs: 1-3 (ít data=3, nhiều data=1)             │
│  ├── Batch: 4-16 (effective, dùng grad accumulation)    │
│  ├── gradient_checkpointing=True                        │
│  └── bf16=True, fp16=False                              │
│                                                          │
│  Deployment:                                             │
│  ├── merge_and_unload() → single model                  │
│  ├── Quantize (GGUF/GPTQ) → serve vLLM/Ollama          │
│  └── Hoặc serve adapter trực tiếp (multi-tenant)        │
│                                                          │
│  Debug:                                                  │
│  ├── NaN loss → check FP16/BF16, reduce LR              │
│  ├── Eval loss tăng → overfitting, reduce epochs         │
│  ├── Gibberish output → sai chat template               │
│  └── Catastrophic forgetting → reduce LR, reduce epochs │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Tổng kết

Bài này đã cover toàn bộ pipeline fine-tuning LLMs:

1. **Why fine-tune**: Khi prompting và RAG không đủ — cần thay đổi behavior, không chỉ knowledge
2. **Full FT vs PEFT**: PEFT (LoRA/QLoRA) đạt 95%+ quality với 1/10 cost — luôn là default choice
3. **LoRA**: Low-rank decomposition — train 0.1-0.3% parameters, hiệu quả gần full fine-tuning
4. **QLoRA**: 4-bit quantization (NF4) + LoRA — fine-tune 7B model trên single 24GB GPU
5. **PEFT Zoo**: Prefix Tuning, Prompt Tuning, IA3 — niche use cases, QLoRA vẫn là king
6. **Dataset**: Format đúng chat template là QUAN TRỌNG NHẤT. Quality > quantity
7. **Hands-on**: Complete code fine-tune Mistral 7B với SFTTrainer + QLoRA
8. **Monitoring**: Loss curves, eval metrics, common problems và solutions
9. **Merge & Deploy**: merge_and_unload, push to Hub, serve với vLLM/Ollama
10. **DPO/ORPO**: Alignment sau SFT — dùng khi cần consistent quality
11. **Cost**: QLoRA training < $10 cho 7B model. Self-host rẻ hơn API khi > 2000 queries/day

**Bài tiếp theo** sẽ cover **RAG (Retrieval-Augmented Generation)** — kỹ thuật bổ sung knowledge cho model mà không cần fine-tuning.

## Bài tập

### Bài tập 1: QLoRA Fine-tuning (Thực hành)

1. Tạo dataset 200 instruction-response pairs cho domain bạn chọn (code review, customer support, medical QA...)
2. Format dataset theo Alpaca format, validate chat template
3. Fine-tune Mistral 7B (hoặc LLaMA 3 8B) dùng script trong bài
4. So sánh output trước/sau fine-tuning trên 20 test prompts
5. Thử thay đổi `r` (8 vs 16 vs 32) và so sánh quality + training time

### Bài tập 2: LoRA Hyperparameter Sweep (Phân tích)

Chạy grid search với các hyperparameters:

| Experiment | r | alpha | target_modules | Expect |
|-----------|---|-------|---------------|--------|
| Baseline | 16 | 32 | q_proj, v_proj | — |
| Low rank | 4 | 8 | q_proj, v_proj | Faster, lower quality? |
| High rank | 64 | 128 | q_proj, v_proj | Better quality? |
| All linear | 16 | 32 | all | Best quality? |

So sánh: training time, eval loss, human eval trên 50 samples.

### Bài tập 3: Merge & Deploy (End-to-end)

1. Merge adapter vào base model dùng `merge_and_unload()`
2. Convert sang GGUF format (dùng `llama.cpp/convert.py`)
3. Quantize GGUF sang Q4_K_M
4. Serve với Ollama: tạo Modelfile và `ollama create mymodel`
5. Benchmark: latency, throughput (tokens/sec), quality so với adapter inference

### Bài tập 4: DPO Training (Nâng cao)

1. Từ SFT model ở bài tập 1, tạo 100 preference pairs (chosen/rejected)
2. Fine-tune thêm bằng DPO sử dụng `DPOTrainer` từ TRL
3. So sánh SFT-only vs SFT+DPO trên cùng test set
4. Đánh giá: consistency, safety, format adherence

