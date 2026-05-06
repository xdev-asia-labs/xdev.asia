---
id: 019c9619-bb11-7011-c011-bb1100000011
title: 'Lesson 11: Supervised Fine-Tuning (SFT) — Instruction Tuning'
slug: bai-11-supervised-fine-tuning
description: >-
  Explore the Supervised Fine-Tuning (SFT) technique to turn pre-trained LLM
  into an instruction-following model. Learn how to prepare data, configure
  SFTTrainer, apply chat templates and optimize hyperparameters to fine-tune
  Mistral-7B effectively.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 10
section_title: 'Part 3: Training & Fine-tuning LLMs'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI & LLM: From Basics to Advanced'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-932" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-932)"/>

  <!-- Decorations -->
  <g>
    <circle cx="703" cy="99" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="806" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="909" cy="145" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1012" cy="168" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="615" cy="191" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="169" x2="1100" y2="249" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="199" x2="1050" y2="269" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.1051177665154,197 1057.1051177665154,241 1019,263 980.8948822334847,241 980.8948822334847,197 1019,175" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI & ML — Lesson 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: Supervised Fine-Tuning (SFT) —</tspan>
      <tspan x="60" dy="42">Instruction Tuning</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI & LLM: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Training & Fine-tuning LLMs</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# Lesson 11: Supervised Fine-Tuning (SFT) — Instruction Tuning

## 1. Why is Fine-Tuning needed?

### Pre-trained Model vs Instruction-Following Model

A **pre-trained LLM** (like GPT-2, LLaMA base, Mistral base) is trained with a single goal: **predict the next token** in the text. As a result, the model learned grammar, world knowledge, and the ability to reason — but it **didn't know how to answer questions or follow instructions**.

```
Input:  "Thủ đô của Việt Nam là"
Output: "thành phố lớn nhất ở miền Bắc, nằm bên bờ sông Hồng..."
```

This is pure text completion — not useful to the end user.

**Instruction-following model** (ChatGPT, Claude, Mistral-Instruct) has been fine-tuned to:
- Understand and follow **user instructions**
- Reply in **desired format** (JSON, bullet points, etc.)
- Maintain **roles** (assistant, expert, etc.) defined in system prompt
- Reject **harmful or inappropriate requests**

The process of turning a base model into an instruction model is **Supervised Fine-Tuning (SFT)**.

### When should you fine-tune?

| Situation | Solution |
|-----------|-----------|
| Model needs to understand domain-specific knowledge | Fine-tune on domain data |
| Need output in fixed format | SFT with format example |
| Want the model to "speak" in its own style | SFT with style data |
| Need to optimize inference costs | Fine-tune smaller model |
| Prompt engineering is not enough | SFT is often more effective |

---

## 2. Instruction Dataset Format

### Basic structure: (Instruction, Input, Output)

SFT datasets usually have the form **triple**:

```json
{
  "instruction": "Dịch đoạn văn sau sang tiếng Anh.",
  "input": "Hôm nay trời đẹp, tôi muốn đi dạo.",
  "output": "The weather is nice today, I want to go for a walk."
}
```

- **instruction**: Specific requirements (mandatory)
- **input**: Context or additional data (can be empty)
- **output**: Desired answer (ground truth)

### Conversation Format (Multi-turn)

To train the multi-turn conversation model:

```json
{
  "conversations": [
    {"role": "system", "content": "Bạn là trợ lý AI hữu ích."},
    {"role": "user", "content": "Python là gì?"},
    {"role": "assistant", "content": "Python là ngôn ngữ lập trình..."},
    {"role": "user", "content": "Nó có ưu điểm gì?"},
    {"role": "assistant", "content": "Python có nhiều ưu điểm..."}
  ]
}
```

---

## 3. Popular Datasets

### Alpaca (Stanford, 2023)

- **52,000 instruction-following examples** generated by GPT-3.5
- Format: instruction + input + output
- Pave the way for the self-instruct movement

```python
from datasets import load_dataset
alpaca = load_dataset("tatsu-lab/alpaca")
print(alpaca["train"][0])
# {'instruction': 'Give three tips for staying healthy.',
#  'input': '',
#  'output': '1. Eat a balanced diet...'}
```

### ShareGPT

- Real conversations from ChatGPT users (shared voluntarily)
- Multi-turn, diverse topics
- Suitable for chat models

### Dolly (Databricks)

- **15,000 examples** written by Databricks staff
- Completely open-source, no legal issues
- Higher quality than Alpaca (written by human)

### FLAN Collection

- Compiled from hundreds of different NLP tasks
- Very good for general instruction following
- Used in FLAN-T5, FLAN-UL2

---

## 4. SFT with Hugging Face TRL

### Install

```bash
pip install trl transformers datasets accelerate peft
```

### SFTTrainer

`SFTTrainer` from the **TRL (Transformer Reinforcement Learning)** library which is the standard tool for SFT:

```python
from trl import SFTTrainer, SFTConfig
from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("mistralai/Mistral-7B-v0.1")
tokenizer = AutoTokenizer.from_pretrained("mistralai/Mistral-7B-v0.1")

trainer = SFTTrainer(
    model=model,
    train_dataset=dataset,
    args=SFTConfig(
        output_dir="./sft-output",
        num_train_epochs=3,
        per_device_train_batch_size=4,
        learning_rate=2e-5,
    ),
)
trainer.train()
```

### Data Collators

`DataCollatorForCompletionOnlyLM` Only calculate loss on **assistant response**, not loss on instruction/input:

```python
from trl import DataCollatorForCompletionOnlyLM

response_template = "[/INST]"  # Llama-2 format
collator = DataCollatorForCompletionOnlyLM(
    response_template=response_template,
    tokenizer=tokenizer
)
```

This is very important: if you calculate loss on prompts, the model will learn to generate... prompts instead of responses.

---

## 5. Chat Templates

### ChatML Format (OpenAI)

```
<|im_start|>system
You are a helpful assistant.<|im_end|>
<|im_start|>user
Hello!<|im_end|>
<|im_start|>assistant
Hi! How can I help you?<|im_end|>
```

### Llama-3 Format (Meta)

```
<|begin_of_text|><|start_header_id|>system<|end_header_id|>
You are a helpful assistant.<|eot_id|>
<|start_header_id|>user<|end_header_id|>
Hello!<|eot_id|>
<|start_header_id|>assistant<|end_header_id|>
Hi! How can I help?<|eot_id|>
```

### Mistral/Llama-2 Format

```
<s>[INST] <<SYS>>
You are a helpful assistant.
<</SYS>>

Hello! [/INST] Hi! How can I help you? </s>
```

### Apply Chat Template automatically

```python
messages = [
    {"role": "system", "content": "Bạn là trợ lý AI hữu ích."},
    {"role": "user", "content": "Python là gì?"}
]

# Tokenizer sẽ tự áp dụng đúng template
formatted = tokenizer.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True
)
print(formatted)
```

---

## 6. Training Hyperparameters

### Learning Rate

```python
learning_rate = 2e-5  # Điểm khởi đầu tốt cho full fine-tuning
# Với LoRA: 1e-4 đến 3e-4
# Quá cao: model "quên" kiến thức cũ (catastrophic forgetting)
# Quá thấp: học rất chậm, không hội tụ
```

### Epochs and Overfitting

```python
num_train_epochs = 3
# 1-3 epochs thường đủ cho SFT
# Nhiều hơn: nguy cơ overfitting, model chỉ nhớ training data
```

### Batch Size and Gradient Accumulation

```python
per_device_train_batch_size = 4
gradient_accumulation_steps = 4
# Effective batch size = 4 * 4 = 16
# Dùng gradient accumulation khi VRAM không đủ để batch lớn
```

### Warmup

```python
warmup_ratio = 0.03
# 3% đầu của training: learning rate tăng dần từ 0
# Giúp tránh gradient explosion ở đầu training
```

---

## 7. Mixed Precision, Gradient Checkpointing

### BF16/FP16

```python
from transformers import TrainingArguments

args = TrainingArguments(
    bf16=True,   # Dùng BF16 nếu có Ampere GPU (A100, 3090)
    fp16=False,  # FP16 cho GPU cũ hơn (V100, T4)
    # BF16 ổn định hơn FP16, ít bị overflow hơn
)
```

### Gradient Checkpointing

```python
# Tiết kiệm VRAM bằng cách không lưu tất cả activations
# Đánh đổi: chậm hơn ~30% do phải tính lại activations
model.gradient_checkpointing_enable()

args = TrainingArguments(
    gradient_checkpointing=True,
    gradient_checkpointing_kwargs={"use_reentrant": False}
)
```

---

## 8. Full Code Example: Fine-tune Mistral-7B with TRL SFTTrainer

```python
import torch
from datasets import load_dataset
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
)
from peft import LoraConfig, get_peft_model
from trl import SFTTrainer, SFTConfig

# --- 1. Load model (4-bit để tiết kiệm VRAM) ---
model_id = "mistralai/Mistral-7B-v0.3"

bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16,
    bnb_4bit_use_double_quant=True,
)

model = AutoModelForCausalLM.from_pretrained(
    model_id,
    quantization_config=bnb_config,
    device_map="auto",
    trust_remote_code=True,
)
model.config.use_cache = False

tokenizer = AutoTokenizer.from_pretrained(model_id)
tokenizer.pad_token = tokenizer.eos_token
tokenizer.padding_side = "right"

# --- 2. LoRA Config ---
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj", "k_proj", "o_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM",
)
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# trainable params: 83,886,080 || all params: 3,836,829,696 || ~2.19%

# --- 3. Dataset ---
dataset = load_dataset("tatsu-lab/alpaca", split="train[:5000]")

def format_prompt(example):
    """Chuyển Alpaca format sang Mistral instruction format."""
    if example["input"]:
        prompt = (
            f"[INST] {example['instruction']}\n\n"
            f"Input: {example['input']} [/INST] "
            f"{example['output']}"
        )
    else:
        prompt = (
            f"[INST] {example['instruction']} [/INST] "
            f"{example['output']}"
        )
    return {"text": prompt}

dataset = dataset.map(format_prompt)

# --- 4. Training Config ---
sft_config = SFTConfig(
    output_dir="./mistral-sft-alpaca",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    gradient_accumulation_steps=4,
    learning_rate=2e-4,
    lr_scheduler_type="cosine",
    warmup_ratio=0.03,
    bf16=True,
    gradient_checkpointing=True,
    logging_steps=25,
    save_steps=500,
    evaluation_strategy="no",
    max_seq_length=2048,
    dataset_text_field="text",
    report_to="wandb",  # hoặc "tensorboard"
)

# --- 5. Trainer ---
trainer = SFTTrainer(
    model=model,
    args=sft_config,
    train_dataset=dataset,
    tokenizer=tokenizer,
)

trainer.train()

# --- 6. Lưu model ---
trainer.save_model("./mistral-sft-alpaca/final")
tokenizer.save_pretrained("./mistral-sft-alpaca/final")
print("Training complete!")
```

---

## 9. Evaluation: Loss Curve & Qualitative Testing

### Track Training Loss

```python
# Training loss nên giảm dần và ổn định
# - Giảm quá nhanh rồi tăng lại: overfitting
# - Không giảm: learning rate quá thấp hoặc data có vấn đề
# - Dao động lớn: learning rate quá cao

# Với wandb: loss curve được vẽ tự động
# Mục tiêu: train loss < 1.0 sau vài epoch
```

### Qualitative Testing

```python
from transformers import pipeline

pipe = pipeline(
    "text-generation",
    model="./mistral-sft-alpaca/final",
    tokenizer=tokenizer,
    device_map="auto",
)

test_prompts = [
    "[INST] Giải thích khái niệm recursion trong lập trình. [/INST]",
    "[INST] Viết hàm Python tính số Fibonacci. [/INST]",
    "[INST] Tóm tắt bài báo sau: ... [/INST]",
]

for prompt in test_prompts:
    output = pipe(
        prompt,
        max_new_tokens=256,
        temperature=0.7,
        do_sample=True,
    )
    print(output[0]["generated_text"])
    print("-" * 50)
```

### Simple benchmark

```python
# So sánh model trước và sau fine-tune trên test set
# Đo lường:
# - ROUGE score cho summarization
# - Exact match cho extraction tasks
# - Human evaluation cho general quality
```

---

## Summary

In this lesson we learned:

- **Pre-trained model** only does text completion; **SFT** turns it into an instruction follower
- SFT data needs at least **instruction** and **output**; many popular datasets such as Alpaca, ShareGPT, Dolly
- **TRL SFTTrainer** helps simplify the fine-tuning process, especially with `DataCollatorForCompletionOnlyLM`
- **Chat templates** (ChatML, Llama-3, Mistral) define the conversation structure — using the wrong template will give bad results
- Combining **LoRA + 4-bit quantization** allows fine-tuning 7B models on consumer GPUs
- Always **evaluate qualitatively** (realistic testing) in parallel with the loss curve

The next article will delve into **PEFT, LoRA and QLoRA** — techniques that help fine-tune large models with minimal VRAM.
