---
id: 019d8b32-bb13-7013-c013-ee1300000013
title: 第 13 課：DPO 和 GRPO — 直接偏好優化
slug: bai-13-dpo-grpo
description: DPO：跳過獎勵模型，直接依照偏好進行訓練。 RLHF 與 DPO 比較。 GRPO（深度搜尋）。 KTO、IPO 變體。與 TRL 全面實施。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 第 4 部分：RLHF、LLM 調整和製作
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 強化學習：從基礎到高級
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2896" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2896)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1076" cy="118" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1052" cy="234" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1028" cy="90" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1004" cy="206" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="980" cy="62" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="198" x2="1100" y2="278" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="228" x2="1050" y2="298" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1076.5788383248864,231.5 1076.5788383248864,264.5 1048,281 1019.4211616751136,264.5 1019.4211616751135,231.5 1048,215" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：DPO 和 GRPO — 直接偏好</tspan>
      <tspan x="60" dy="42">最佳化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：RLHF、LLM 調整和製作</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**DPO（直接偏好優化）** 簡化了 RLHF — 直接根據偏好資料進行訓練，無需單獨的獎勵模型和 PPO。

---

## 1. DPO 與 RLHF

|方面| RLHF |資料保護官 |
|--------|--------|-----|
|步驟| SFT→RM→PPO（3步驟）| SFT → DPO（2 步驟）|
|獎勵模式|明確的、單獨的|政策隱含 |
|訓練|複合物 (PPO) |簡單（類似監督）|
|穩定性|調整起來很棘手|穩定|
|性能|最先進的 |類似|

---

## 2. DPO 目標

$$\mathcal{L}_{DPO}(\pi_\theta; \pi_{ref}) = -\mathbb{E}\left[\log \sigma\left(\beta \log \frac{\pi_\theta(y_w|x)}{\pi_{ref}(y_beta|x) - \y_w| \frac{\pi_\theta(y_l|x)}{\pi_{ref}(y_l|x)}\right)\right]$$

---

## 3. 使用 TRL 實作 DPO

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

## 4.GRPO－群組相關策略優化

用於 **DeepSeek-R1**：
- 不需要批評/價值網絡
- 基於群體的優勢估計
- 高效率的獎勵計算

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

## 5.其他變體

|方法|所需資料|關鍵想法|
|--------|------------|----------|
|資料保護官 |成對偏好 |政策中的隱性獎勵|
| GRPO |提示+獎勵fn |集團優勢 |
|韓國貿易組織 |二進制（好/壞）|無需配對即可工作 |
|首次公開發行 |成對偏好 |正規化 DPO |
|奧爾波|成對偏好 |無需參考模型 |

---

## 總結

|方法|複雜性 |資料|效能|
|--------|---------|--------|------------|
| RLHF |高|比較 + RM |最佳|
|資料保護官 |低|僅供比較|太棒了|
| GRPO |中等|提示+獎勵fn |太棒了|
|韓國貿易組織 |低|二進制回饋|好 |
