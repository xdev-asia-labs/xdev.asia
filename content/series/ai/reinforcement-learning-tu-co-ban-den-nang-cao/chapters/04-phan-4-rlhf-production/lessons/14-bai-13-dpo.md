---
id: 019d8b32-bb13-7013-c013-ee1300000013
title: "Bài 13: DPO & GRPO — Direct Preference Optimization"
slug: bai-13-dpo-grpo
description: >-
  DPO: skip reward model, train trực tiếp từ preferences. RLHF vs DPO comparison. GRPO (DeepSeek). KTO, IPO variants. Full implementation với TRL.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: RLHF, LLM Alignment & Production"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

**DPO (Direct Preference Optimization)** đơn giản hóa RLHF — train trực tiếp từ preference data mà không cần reward model riêng và PPO.

---

## 1. DPO vs RLHF

| Aspect | RLHF | DPO |
|--------|------|-----|
| Steps | SFT → RM → PPO (3 steps) | SFT → DPO (2 steps) |
| Reward Model | Explicit, separate | Implicit in policy |
| Training | Complex (PPO) | Simple (supervised-like) |
| Stability | Tricky to tune | Stable |
| Performance | State-of-the-art | Comparable |

---

## 2. DPO Objective

$$\mathcal{L}_{DPO}(\pi_\theta; \pi_{ref}) = -\mathbb{E}\left[\log \sigma\left(\beta \log \frac{\pi_\theta(y_w|x)}{\pi_{ref}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{ref}(y_l|x)}\right)\right]$$

---

## 3. DPO Implementation với TRL

```python
from trl import DPOTrainer, DPOConfig
from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("./sft_model")
ref_model = AutoModelForCausalLM.from_pretrained("./sft_model")
tokenizer = AutoTokenizer.from_pretrained("./sft_model")

config = DPOConfig(
    beta=0.1,
    learning_rate=5e-7,
    per_device_train_batch_size=4,
    num_train_epochs=3,
    output_dir="./dpo_model",
)

trainer = DPOTrainer(
    model=model,
    ref_model=ref_model,
    train_dataset=preference_dataset,
    # Dataset format: {"prompt": str, "chosen": str, "rejected": str}
    tokenizer=tokenizer,
    args=config,
)
trainer.train()
```

---

## 4. GRPO — Group Relative Policy Optimization

Dùng trong **DeepSeek-R1**:
- Không cần critic/value network
- Group-based advantage estimation
- Efficient reward computation

```python
from trl import GRPOTrainer, GRPOConfig

config = GRPOConfig(
    num_generations=4,  # Generate multiple responses per prompt
    learning_rate=1e-6,
)

trainer = GRPOTrainer(
    model=model,
    reward_funcs=[reward_function],
    train_dataset=prompt_dataset,
    args=config,
)
trainer.train()
```

---

## 5. Other Variants

| Method | Data Needed | Key Idea |
|--------|------------|----------|
| DPO | Pairwise preferences | Implicit reward in policy |
| GRPO | Prompts + reward fn | Group-based advantages |
| KTO | Binary (good/bad) | Works without pairs |
| IPO | Pairwise preferences | Regularized DPO |
| ORPO | Pairwise preferences | No reference model needed |

---

## Tổng kết

| Method | Complexity | Data | Performance |
|--------|-----------|------|-------------|
| RLHF | High | Comparisons + RM | Best |
| DPO | Low | Comparisons only | Great |
| GRPO | Medium | Prompts + reward fn | Great |
| KTO | Low | Binary feedback | Good |
