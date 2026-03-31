---
id: 019d8b32-bb12-7012-c012-ee1200000012
title: "Bài 12: RLHF — Reinforcement Learning from Human Feedback"
slug: bai-12-rlhf
description: >-
  RLHF pipeline chi tiết: SFT → Reward Model → PPO fine-tuning. InstructGPT paper. Reward modeling. Constitutional AI. Implementation với TRL library.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: RLHF, LLM Alignment & Production"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

**RLHF (Reinforcement Learning from Human Feedback)** là kỹ thuật đã biến GPT-3 thành ChatGPT — align LLM với human preferences thông qua reward model and PPO.

---

## 1. RLHF Pipeline — 3 Steps

### Step 1: Supervised Fine-Tuning (SFT)

```python
from transformers import AutoModelForCausalLM, TrainingArguments
from trl import SFTTrainer

model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-3.1-8B")

trainer = SFTTrainer(
    model=model,
    train_dataset=demo_dataset,  # (prompt, response) pairs
    args=TrainingArguments(
        output_dir="./sft_model",
        num_train_epochs=3,
        per_device_train_batch_size=4,
        learning_rate=2e-5,
    ),
)
trainer.train()
```

### Step 2: Reward Model Training

```python
from trl import RewardTrainer, RewardConfig

reward_model = AutoModelForSequenceClassification.from_pretrained(
    "meta-llama/Llama-3.1-8B", num_labels=1
)

trainer = RewardTrainer(
    model=reward_model,
    train_dataset=preference_dataset,
    # Format: {prompt, chosen_response, rejected_response}
    args=RewardConfig(
        output_dir="./reward_model",
        per_device_train_batch_size=4,
        num_train_epochs=1,
    ),
)
trainer.train()
```

### Step 3: PPO Fine-Tuning

```python
from trl import PPOTrainer, PPOConfig, AutoModelForCausalLMWithValueHead

model = AutoModelForCausalLMWithValueHead.from_pretrained("./sft_model")
ref_model = AutoModelForCausalLMWithValueHead.from_pretrained("./sft_model")

config = PPOConfig(
    batch_size=16,
    learning_rate=1e-5,
    ppo_epochs=4,
    mini_batch_size=4,
)

trainer = PPOTrainer(config, model, ref_model, tokenizer)

for batch in dataloader:
    queries = batch["query"]
    responses = model.generate(queries)
    rewards = reward_model(queries, responses)
    
    # KL penalty to prevent reward hacking
    trainer.step(queries, responses, rewards)
```

---

## 2. Reward Hacking & KL Divergence

```
Total Reward = RM_score(response) - β * KL(π || π_ref)
```

KL penalty giữ model gần SFT model → tránh reward hacking.

---

## 3. Constitutional AI (Anthropic)

1. Generate responses
2. Ask model to critique based on principles
3. Ask model to revise
4. Train on revised responses (RLAIF)

---

## Tổng kết

| Step | Input | Output | Purpose |
|------|-------|--------|---------|
| SFT | Demonstrations | Fine-tuned LLM | Learn format |
| Reward Model | Human preferences | Reward scorer | Learn preferences |
| PPO | RM rewards | Aligned LLM | Optimize for preferences |
