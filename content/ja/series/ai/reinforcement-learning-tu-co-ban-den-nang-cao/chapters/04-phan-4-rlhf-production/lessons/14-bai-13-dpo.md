---
id: 019d8b32-bb13-7013-c013-ee1300000013
title: 'レッスン 13: DPO と GRPO — 直接優先の最適化'
slug: bai-13-dpo-grpo
description: >-
  DPO: 報酬モデルをスキップし、設定から直接トレーニングします。 RLHFとDPOの比較。 GRPO (ディープシーク)。 KTO、IPO
  のバリエーション。 TRL による完全な実装。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 4: RLHF、LLM の調整と生産'
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: '強化学習: 基礎から高度まで'
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: DPO と GRPO — 直接優先</tspan>
      <tspan x="60" dy="42">最適化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化学習: 基礎から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: RLHF、LLM の調整と生産</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**DPO (直接優先最適化)** は RLHF を簡素化し、個別の報酬モデルや PPO を必要とせずに、優先データから直接トレーニングします。

---

## 1. DPO 対 RLHF

|側面 | ＲＬＨＦ | DPO |
|--------|--------|-----|
|ステップ | SFT → RM → PPO (3ステップ) | SFT → DPO (2ステップ) |
|報酬モデル |明示的、個別 |ポリシーに暗黙的に含まれる |
|トレーニング |複合施設 (PPO) |シンプル (教師付きのような) |
|安定性 |調整が難しい |安定 |
|パフォーマンス |最先端 |比較可能な |

---

## 2. DPO の目的

$$\mathcal{L}_{DPO}(\pi_\theta; \pi_{ref}) = -\mathbb{E}\left[\log \sigma\left(\beta \log \frac{\pi_\theta(y_w|x)}{\pi_{ref}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{ref}(y_l|x)}\right)\right]$$

---

## 3. TRL を使用した DPO の実装

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

## 4. GRPO — グループ相対ポリシーの最適化

**DeepSeek-R1** で使用される:
- 批判や価値観のネットワークは必要ありません
- グループベースの優位性の推定
- 効率的な報酬計算

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

## 5. その他のバリエーション

|方法 |必要なデータ |主要なアイデア |
|----------|-----------|----------|
| DPO |ペアごとの設定 |ポリシーにおける暗黙の報酬 |
| GRPO |プロンプト + 報酬 fn |グループならではのメリット |
| KTO |バイナリ (良い/悪い) |ペアなしで動作します |
| IPO |ペアごとの設定 |正規化された DPO |
|オルポ |ペアごとの設定 |参照モデルは必要ありません |

---

## 概要

|方法 |複雑さ |データ |パフォーマンス |
|----------|-----------|----------|---------------|
| ＲＬＨＦ |高 |比較 + RM |ベスト |
| DPO |低い |比較のみ |すばらしい |
| GRPO |中 |プロンプト + 報酬 fn |すばらしい |
| KTO |低い |バイナリフィードバック |良い |
