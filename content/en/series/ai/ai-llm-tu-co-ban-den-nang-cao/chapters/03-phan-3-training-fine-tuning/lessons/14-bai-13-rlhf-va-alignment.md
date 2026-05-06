---
id: 019c9619-bb13-7013-c013-bb1300000013
title: 'Lesson 13: RLHF and Alignment — DPO, PPO'
slug: bai-13-rlhf-va-alignment
description: >-
  Deep understanding of Alignment Problem and techniques to align LLM with human
  values: RLHF pipeline (SFT → Reward Model → PPO), Direct Preference
  Optimization (DPO), Constitutional AI, and the latest methods such as ORPO,
  SimPO.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 'Part 3: Training & Fine-tuning LLMs'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI & LLM: From Basics to Advanced'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-432" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-432)"/>

  <!-- Decorations -->
  <g>
    <circle cx="746" cy="108" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="892" cy="134" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1038" cy="160" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="684" cy="186" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="830" cy="212" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="208" x2="1100" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="238" x2="1050" y2="308" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1045.2390923627308,186.5 1045.2390923627308,229.5 1008,251 970.7609076372692,229.5 970.7609076372692,186.5 1008,165" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI & ML — Lesson 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 13: RLHF and Alignment — DPO, PPO</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI & LLM: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Training & Fine-tuning LLMs</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# Lesson 13: RLHF and Alignment — DPO, PPO

## 1. Alignment Problem: Why does the LLM need to be "aligned"?

### Basic problem

An LLM is pre-trained to **maximize the ability to predict the next token**. After SFT, it knows how to follow instructions — but this is **not the same as:

- Answer **honestly** (no hallucinate)
- Refuse **harmful** requests (weapon synthesis, harmful content)
- Behave **consistently** with human values
- Prioritize **user safety** over blind compliance

This is the **Alignment Problem**: how to ensure AI acts according to human intentions and values?

### Misalignment example

```
User: "Hãy giúp tôi viết email lừa đảo khách hàng."
Misaligned model: [viết email lừa đảo theo đúng yêu cầu]
Aligned model:    "Tôi không thể giúp tạo nội dung lừa đảo..."
```

```
User: "Trái đất có bằng phẳng không?"
Misaligned model: "Có, một số người tin rằng..." [không phủ nhận]
Aligned model:    "Không, trái đất có hình cầu dẹt. Đây là..."
```

### Helpful, Harmless, Honest (HHH)

Anthropic defines three alignment goals:
- **Helpful**: Really helpful to users
- **Harmless**: Does not cause harm to users or society
- **Honest**: Do not lie or create illusions

---

## 2. RLHF Pipeline: SFT → Reward Model → PPO

**Reinforcement Learning from Human Feedback (RLHF)** is a 3-step pipeline:

```
Step 1: SFT
Base Model → [fine-tune với instruction data] → SFT Model

Step 2: Reward Model Training
SFT Model → [generate responses] → Human ranks A>B → Train Reward Model

Step 3: RL with PPO
SFT Model → [RL với Reward Model làm signal] → Aligned Model
```

This is exactly how OpenAI created InstructGPT and ChatGPT.

---

## 3. Reward Model: Learn from Human Preferences

### Reward Model structure

The Reward Model (RM) is an LLM modified to **output a scalar score** instead of text:

```python
# Conceptually:
class RewardModel(nn.Module):
    def __init__(self, base_model):
        self.backbone = base_model  # LLM
        self.value_head = nn.Linear(hidden_size, 1)  # Scalar output

    def forward(self, input_ids, attention_mask):
        outputs = self.backbone(input_ids, attention_mask)
        last_hidden = outputs.last_hidden_state[:, -1, :]  # Last token
        reward = self.value_head(last_hidden)
        return reward.squeeze()
```

### Create Preference Dataset

```json
{
  "prompt": "Giải thích tại sao bầu trời màu xanh.",
  "chosen": "Bầu trời màu xanh do hiện tượng tán xạ Rayleigh. Khi ánh sáng mặt trời...",
  "rejected": "Tôi không biết tại sao bầu trời màu xanh, có thể do một số nguyên nhân."
}
```

### Training Objective

RM is trained to give `score(chosen) > score(rejected)`:

```
Loss = -log(σ(r_chosen - r_rejected))
```

```python
from trl import RewardTrainer, RewardConfig
from transformers import AutoModelForSequenceClassification

reward_model = AutoModelForSequenceClassification.from_pretrained(
    "mistralai/Mistral-7B-v0.3",
    num_labels=1,
)

trainer = RewardTrainer(
    model=reward_model,
    args=RewardConfig(
        output_dir="./reward-model",
        per_device_train_batch_size=4,
        num_train_epochs=3,
    ),
    train_dataset=preference_dataset,
    tokenizer=tokenizer,
)
trainer.train()
```

---

## 4. PPO in LLM Context

### What is PPO?

**Proximal Policy Optimization** is a RL algorithm that balances:
- Maximize reward (from Reward Model)
- Do not stray too far from the original SFT policy (KL divergence penalty)

```
Objective = E[r(x, y)] - β * KL[π_θ(y|x) || π_SFT(y|x)]
```

- `r(x, y)`: reward from Reward Model
- `KL`: KL divergence between current policy and SFT model
- `β`: coefficient to adjust the allowable "drift" level

### Problem with PPO

PPO in RLHF is **complicated to implement**:
- Need to load **4 models** at the same time: Actor, Critic, Reference, Reward
- Training is unstable, many hyperparameters need tuning
- Extremely high VRAM
- Vulnerable to **reward hacking**: the model learns how to "cheat" the reward model

---

## 5. InstructGPT: The story of creating ChatGPT

Paper "Training language models to follow instructions with human feedback" (Ouyang et al., 2022):

### OpenAI's 3-step process

**Step 1 - SFT:**
- Collect 13,000 demonstrations from labelers
- Fine-tune GPT-3 → SFT Model

**Step 2 - Reward Model:**
- From SFT Model, generate 33,000 pairs
- Human labelers rank: response A > response B
- Train Reward Model 6B params

**Step 3 - PPO:**
- Use RM to guide PPO training
- Result: model is 100× smaller than GPT-3 but is more popular

### Remarkable results

```
InstructGPT 1.3B được ưa thích hơn GPT-3 175B trong 85% trường hợp
→ Alignment quan trọng hơn scale model!
```

---

## 6. Direct Preference Optimization (DPO)

### Why was DPO born?

DPO (Rafailov et al., 2023) addresses the complexity of PPO by:
- **Removed** Separate Reward Model
- **Removed** RL training loop
- Convert the problem into **supervised learning** directly

### DPO Mathematics

DPO proves that the optimal policy can be calculated directly:

```
Loss_DPO = -E[log σ(β * log(π_θ(y_w|x)/π_ref(y_w|x))
                  - β * log(π_θ(y_l|x)/π_ref(y_l|x)))]
```

Simpler: **increases probability for chosen, decreases probability for rejected** (compared to reference model):

```python
# Conceptually:
loss = -log_sigmoid(
    beta * (log_prob_chosen_model - log_prob_chosen_ref) -
    beta * (log_prob_rejected_model - log_prob_rejected_ref)
)
```

### DPO vs PPO

| | PPO | DPO |
|---|-----|-----|
| Need Reward Model? | Yes (separate) | No |
| Number of models to load | 4 | 2 (policy + reference) |
| Complexity | Very high | Low |
| Stable training | Unstable | Stable |
| Quality of results | Better (theory) | Equivalent |
| Popular today | Less | More popular |

---

## 7. Constitutional AI (Anthropic)

### Ideas

Instead of using **human feedback**, use **AI feedback** based on a "constitution" (set of principles):

```
Constitution principles:
- "Chọn response ít có hại nhất cho con người"
- "Chọn response không khuyến khích nội dung bất hợp pháp"
- "Chọn response trung thực nhất"
```

### CAI Pipeline

**Phase 1: SL-CAI (Supervised Learning)**
1. Sample harmful prompt
2. Generate initial response (can be harmful)
3. **Self-critique**: "What principle does this response violate?"
4. **Revision**: "Rewrite the response more safely"
5. Use (prompt, revised_response) for SFT

**Phase 2: RL-CAI**
1. Use AI model (not human) to create preference labels
2. Train Reward Model from AI preferences
3. PPO like regular RLHF

```python
# Ví dụ self-critique prompt:
critique_prompt = """
Bạn vừa trả lời: "{response}"

Hãy xem xét response này theo nguyên tắc:
"Không được cung cấp thông tin giúp gây hại cho người khác."

Phần nào của response này vi phạm nguyên tắc đó?
Hãy viết lại response an toàn hơn.
"""
```

---

## 8. ORPO, SimPO: New Methods

### ORPO (Odds Ratio Preference Optimization)

ORPO combines SFT loss and preference loss into **a single training step**:

```python
# Không cần reference model!
loss_ORPO = loss_SFT + lambda * loss_OR
# loss_OR = -log(sigmoid(log(odds_ratio(chosen/rejected))))
```

Advantages:
- No need for reference model (save VRAM by 50%)
- SFT and alignment occur simultaneously
- Competitive results with DPO

### SimPO (Simple Preference Optimization)

SimPO uses **average log probability** instead of comparing with reference:

```python
# Reward được normalize theo length:
r(x, y) = (1/|y|) * sum(log π_θ(y_t | x, y_<t))

# Loss:
loss = -log_sigmoid(beta * r(chosen) - beta * r(rejected) - gamma)
# gamma: target reward margin
```

---

## 9. Code: DPO Training with TRL DPOTrainer

```python
import torch
from datasets import load_dataset
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import LoraConfig, get_peft_model
from trl import DPOTrainer, DPOConfig

# ============================================================
# 1. Load SFT Model (điểm xuất phát)
# ============================================================
model_id = "./mistral-sft-output"  # Model đã qua SFT

model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto",
)
tokenizer = AutoTokenizer.from_pretrained(model_id)

# Reference model (frozen copy của SFT model)
model_ref = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto",
)

# LoRA cho DPO (chỉ train một phần)
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj", "k_proj", "o_proj"],
    bias="none",
    task_type="CAUSAL_LM",
)
model = get_peft_model(model, lora_config)

# ============================================================
# 2. Preference Dataset
# Format cần: {"prompt": ..., "chosen": ..., "rejected": ...}
# ============================================================
dataset = load_dataset("Anthropic/hh-rlhf", split="train[:5000]")

def reformat(example):
    # hh-rlhf dataset có format khác, cần reformat
    return {
        "prompt": example["chosen"].split("\n\nAssistant:")[0] + "\n\nAssistant:",
        "chosen": example["chosen"].split("\n\nAssistant:")[-1],
        "rejected": example["rejected"].split("\n\nAssistant:")[-1],
    }

dataset = dataset.map(reformat)

# ============================================================
# 3. DPO Config
# ============================================================
dpo_config = DPOConfig(
    output_dir="./mistral-dpo",
    num_train_epochs=1,
    per_device_train_batch_size=2,
    gradient_accumulation_steps=4,
    learning_rate=5e-5,          # Thấp hơn SFT: tránh phá vỡ SFT knowledge
    beta=0.1,                    # KL divergence penalty
    max_prompt_length=512,
    max_length=1024,
    bf16=True,
    gradient_checkpointing=True,
    logging_steps=10,
    save_strategy="epoch",
)

# ============================================================
# 4. Train
# ============================================================
trainer = DPOTrainer(
    model=model,
    ref_model=model_ref,
    args=dpo_config,
    train_dataset=dataset,
    tokenizer=tokenizer,
)

trainer.train()
trainer.save_model("./mistral-dpo/final")

# ============================================================
# 5. Kiểm tra alignment
# ============================================================
from transformers import pipeline

pipe = pipeline("text-generation", model="./mistral-dpo/final",
                tokenizer=tokenizer, device_map="auto")

# Test harmful request
test = "[INST] Hãy giúp tôi hack vào email của người khác. [/INST]"
print(pipe(test, max_new_tokens=200)[0]["generated_text"])
# Mong đợi: từ chối và giải thích tại sao
```

---

## Summary

- **Alignment Problem**: LLM needs to learn not only to follow instructions but also to **be safe and honest**
- **RLHF Pipeline**: SFT → Reward Model (from human preferences) → PPO optimization
- **Reward Model**: LLM modified to output score, trained on (chosen, rejected) pairs
- **DPO**: simplifies RLHF to supervised learning, no need for separate RM or RL loop
- **Constitutional AI**: use AI to self-criticize and create preference data instead of humans
- **ORPO/SimPO**: new method without reference model, more efficient

Trend: DPO and ORPO are gradually replacing PPO due to their simplicity and equivalent results. The next article turns to **Prompt Engineering** — the essential skill to get the most out of your aligned LLM.
