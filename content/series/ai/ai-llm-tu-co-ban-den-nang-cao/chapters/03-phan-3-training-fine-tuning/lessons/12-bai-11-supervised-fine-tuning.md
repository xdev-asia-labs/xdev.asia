---
id: 019c9619-bb11-7011-c011-bb1100000011
title: 'Bài 11: Supervised Fine-Tuning (SFT) — Instruction Tuning'
slug: bai-11-supervised-fine-tuning
description: >-
  Khám phá kỹ thuật Supervised Fine-Tuning (SFT) để biến pre-trained LLM thành
  instruction-following model. Học cách chuẩn bị dữ liệu, cấu hình SFTTrainer,
  áp dụng chat templates và tối ưu hyperparameters để fine-tune Mistral-7B hiệu quả.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Training & Fine-tuning LLMs"
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: "AI & LLM: Từ Cơ bản đến Nâng cao"
  slug: ai-llm-tu-co-ban-den-nang-cao
---

# Bài 11: Supervised Fine-Tuning (SFT) — Instruction Tuning

## 1. Tại sao cần Fine-Tuning?

### Pre-trained Model vs Instruction-Following Model

Một **pre-trained LLM** (như GPT-2, LLaMA base, Mistral base) được huấn luyện với mục tiêu duy nhất: **dự đoán token tiếp theo** trong văn bản. Kết quả là mô hình học được ngữ pháp, kiến thức thế giới, và khả năng suy luận — nhưng nó **không biết cách trả lời câu hỏi hay làm theo hướng dẫn**.

```
Input:  "Thủ đô của Việt Nam là"
Output: "thành phố lớn nhất ở miền Bắc, nằm bên bờ sông Hồng..."
```

Đây là text completion thuần túy — không hữu ích cho người dùng cuối.

**Instruction-following model** (ChatGPT, Claude, Mistral-Instruct) được fine-tune thêm để:
- Hiểu và làm theo **hướng dẫn** của người dùng
- Trả lời theo **format mong muốn** (JSON, bullet points, v.v.)
- Duy trì **vai trò** (assistant, expert, v.v.) được định nghĩa trong system prompt
- Từ chối các yêu cầu **có hại hoặc không phù hợp**

Quá trình biến base model thành instruction model chính là **Supervised Fine-Tuning (SFT)**.

### Khi nào nên fine-tune?

| Tình huống | Giải pháp |
|-----------|-----------|
| Model cần hiểu domain-specific knowledge | Fine-tune trên dữ liệu domain |
| Cần output theo format cố định | SFT với ví dụ format |
| Muốn model "nói" theo phong cách riêng | SFT với dữ liệu phong cách |
| Cần tối ưu chi phí inference | Fine-tune model nhỏ hơn |
| Prompt engineering không đủ | SFT thường hiệu quả hơn |

---

## 2. Instruction Dataset Format

### Cấu trúc cơ bản: (Instruction, Input, Output)

Dataset SFT thường có dạng **triple**:

```json
{
  "instruction": "Dịch đoạn văn sau sang tiếng Anh.",
  "input": "Hôm nay trời đẹp, tôi muốn đi dạo.",
  "output": "The weather is nice today, I want to go for a walk."
}
```

- **instruction**: Yêu cầu cụ thể (bắt buộc)
- **input**: Ngữ cảnh hoặc dữ liệu bổ sung (có thể rỗng)
- **output**: Câu trả lời mong muốn (ground truth)

### Conversation Format (Multi-turn)

Để huấn luyện mô hình hội thoại đa lượt:

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

- **52,000 instruction-following examples** được tạo bởi GPT-3.5
- Format: instruction + input + output
- Mở đường cho phong trào self-instruct

```python
from datasets import load_dataset
alpaca = load_dataset("tatsu-lab/alpaca")
print(alpaca["train"][0])
# {'instruction': 'Give three tips for staying healthy.',
#  'input': '',
#  'output': '1. Eat a balanced diet...'}
```

### ShareGPT

- Conversations thực từ người dùng ChatGPT (được chia sẻ tự nguyện)
- Multi-turn, đa dạng chủ đề
- Phù hợp cho chat models

### Dolly (Databricks)

- **15,000 examples** được viết bởi nhân viên Databricks
- Hoàn toàn open-source, không có vấn đề pháp lý
- Chất lượng cao hơn Alpaca (do con người viết)

### FLAN Collection

- Tổng hợp từ hàng trăm NLP tasks khác nhau
- Rất tốt cho general instruction following
- Sử dụng trong FLAN-T5, FLAN-UL2

---

## 4. SFT với Hugging Face TRL

### Cài đặt

```bash
pip install trl transformers datasets accelerate peft
```

### SFTTrainer

`SFTTrainer` từ thư viện **TRL (Transformer Reinforcement Learning)** là công cụ chuẩn để SFT:

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

`DataCollatorForCompletionOnlyLM` chỉ tính loss trên phần **assistant response**, không tính loss trên instruction/input:

```python
from trl import DataCollatorForCompletionOnlyLM

response_template = "[/INST]"  # Llama-2 format
collator = DataCollatorForCompletionOnlyLM(
    response_template=response_template,
    tokenizer=tokenizer
)
```

Điều này rất quan trọng: nếu tính loss trên cả prompt, model sẽ học cách tạo ra... prompt thay vì response.

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

### Áp dụng Chat Template tự động

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

### Epochs và Overfitting

```python
num_train_epochs = 3
# 1-3 epochs thường đủ cho SFT
# Nhiều hơn: nguy cơ overfitting, model chỉ nhớ training data
```

### Batch Size và Gradient Accumulation

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

## 8. Full Code Example: Fine-tune Mistral-7B với TRL SFTTrainer

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

### Theo dõi Training Loss

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

### Benchmark đơn giản

```python
# So sánh model trước và sau fine-tune trên test set
# Đo lường:
# - ROUGE score cho summarization
# - Exact match cho extraction tasks
# - Human evaluation cho general quality
```

---

## Tổng kết

Trong bài này chúng ta đã học:

- **Pre-trained model** chỉ làm text completion; **SFT** biến nó thành instruction follower
- Dữ liệu SFT cần ít nhất **instruction** và **output**; nhiều dataset phổ biến như Alpaca, ShareGPT, Dolly
- **TRL SFTTrainer** giúp đơn giản hóa quá trình fine-tuning, đặc biệt với `DataCollatorForCompletionOnlyLM`
- **Chat templates** (ChatML, Llama-3, Mistral) định nghĩa cấu trúc hội thoại — dùng sai template sẽ cho kết quả tệ
- Kết hợp **LoRA + 4-bit quantization** cho phép fine-tune 7B model trên GPU consumer
- Luôn **evaluate định tính** (thử nghiệm thực tế) song song với loss curve

Bài tiếp theo sẽ đi sâu vào **PEFT, LoRA và QLoRA** — những kỹ thuật giúp fine-tune model lớn với VRAM tối thiểu.
