---
id: 019d8b32-bb12-7012-c012-ee1200000012
title: 'レッスン 12: RLHF — 人間のフィードバックからの強化学習'
slug: bai-12-rlhf
description: >-
  RLHF パイプラインの詳細: SFT → 報酬モデル → PPO 微調整。 GPTペーパーを指導します。報酬モデリング。憲法AI。
  TRLライブラリによる実装。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 4: RLHF、LLM の調整と生産'
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: '強化学習: 基礎から高度まで'
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5039" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5039)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1015" cy="215" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="930" cy="190" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="845" cy="165" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="760" cy="140" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="675" cy="115" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="145" x2="1100" y2="225" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="175" x2="1050" y2="245" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1029.6410161513775,175 1029.6410161513775,215 995,235 960.3589838486224,215 960.3589838486224,175 995,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: RLHF — からの強化学習</tspan>
      <tspan x="60" dy="42">人間によるフィードバック</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化学習: 基礎から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: RLHF、LLM の調整と生産</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**RLHF (人間のフィードバックからの強化学習)** は、GPT-3 を ChatGPT に変えた技術であり、報酬モデルと PPO を通じて LLM を人間の好みに合わせます。

---

## 1. RLHF パイプライン — 3 つのステップ

### ステップ 1: 教師あり微調整 (SFT)

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

### ステップ 2: 報酬モデルのトレーニング

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

### ステップ 3: PPO の微調整

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

## 2. 報酬ハッキングと KL ダイバージェンス

```
Total Reward = RM_score(response) - β * KL(π || π_ref)
```

KL ペナルティはモデルを SFT モデルに近づけます → 報酬のハッキングを回避します。

---

## 3. 憲法上の AI (人間的)

1. 応答を生成する
2.モデルに原則に基づいて批評してもらいます
3. モデルに修正を依頼する
4. 修正された対応についてトレーニングする (RLAIF)

---

## 概要

|ステップ |入力 |出力 |目的 |
|----------|----------|----------|----------|
| ＳＦＴ |デモンストレーション |微調整された LLM |学習形式 |
|報酬モデル |人間の好み |報酬スコアラー |好みを学ぶ |
| PPO | RMの報酬 |整列LLM |好みに合わせて最適化する |
