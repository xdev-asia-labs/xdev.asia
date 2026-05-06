---
id: 019d8b32-bb16-7016-c016-ee1600000016
title: 'レッスン 16: Capstone — 現実世界の問題に対する RL エージェントの構築'
slug: bai-16-capstone
description: >-
  プロジェクトの概要: Game AI Agent、Robot Control、または Chatbot 用 RLHF の 3 つのプロジェクトから 1
  つを選択します。設計から導入までのエンドツーエンドのパイプライン。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 4: RLHF、LLM の調整と生産'
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: '強化学習: 基礎から高度まで'
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-114" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-114)"/>

  <!-- Decorations -->
  <g>
    <circle cx="708" cy="194" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="816" cy="162" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="924" cy="130" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1032" cy="98" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="640" cy="66" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="234" x2="1100" y2="314" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="264" x2="1050" y2="334" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1009.1147367097487,169.5 1009.1147367097487,198.5 984,213 958.8852632902513,198.5 958.8852632902513,169.5 984,155" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI と ML — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 16: Capstone — RL エージェントの構築</tspan>
      <tspan x="60" dy="42">現実世界の問題</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化学習: 基礎から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: RLHF、LLM の調整と生産</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Capstone プロジェクトは、RL の知識をすべて実際のエンドツーエンドの問題に適用します。以下の 3 つのプロジェクトから 1 つをお選びください。

---

## プロジェクト 1: ゲーム AI エージェント

### 説明
AI ゲーム エージェントを構築します — カスタム環境からデモが可能な訓練されたエージェントまで。

### 技術スタック
- 体育館カスタム環境 (スネーク、フラッピーバード、テトリス)
- DQNまたはPPOトレーニング
- Optuna によるハイパーパラメータの最適化
- Gradio を使用した Web デモ

### ステップ

```python
# 1. Build custom environment
class GameEnv(gym.Env):
    # Implement reset(), step(), render()
    pass

# 2. Train agent
from stable_baselines3 import PPO
model = PPO("MlpPolicy", GameEnv(), verbose=1)
model.learn(total_timesteps=1_000_000)

# 3. Evaluate
mean_reward, std = evaluate_policy(model, GameEnv(), n_eval_episodes=100)
print(f"Score: {mean_reward:.1f} +/- {std:.1f}")

# 4. Demo
import gradio as gr
def play_game(seed):
    env = GameEnv(render_mode="rgb_array")
    frames = record_episode(model, env, seed)
    return frames
```

---

## プロジェクト 2: ロボット制御

### 説明
MuJoCo でロボットの移動エージェントを訓練します — 歩く、走る、または操作します。

### 技術スタック
- MuJoCo (アリ、ヒューマノイド、またはカスタム ロボット)
- ドメインのランダム化による SAC トレーニング
- TensorBoard 分析
- Sim-to-Real 転送解析

### 評価

```python
# Compare algorithms
algorithms = {
    "PPO": PPO("MlpPolicy", env),
    "SAC": SAC("MlpPolicy", env),
    "TD3": TD3("MlpPolicy", env),
}

results = {}
for name, model in algorithms.items():
    model.learn(total_timesteps=1_000_000)
    mean_reward, _ = evaluate_policy(model, env, n_eval_episodes=50)
    results[name] = mean_reward
```

---

## プロジェクト 3: RLHF / DPO チャットボット

### 説明
DPO または RLHF を使用して、小さな LLM を人間の好みに合わせます。

### 技術スタック
- ベースモデル: SmolLM または Qwen2.5 (0.5B-1.5B)
- SFT + DPO 用の TRL ライブラリ
- 評価：MT-Bench、AlpacaEval
- グラディオチャットインターフェース

### パイプライン

```python
# 1. SFT
sft_trainer = SFTTrainer(model, train_dataset=sft_data)
sft_trainer.train()

# 2. DPO
dpo_trainer = DPOTrainer(model, ref_model, train_dataset=pref_data)
dpo_trainer.train()

# 3. Evaluate
# - Perplexity
# - Win rate vs base model
# - Human evaluation

# 4. Deploy
import gradio as gr
demo = gr.ChatInterface(fn=generate_response)
demo.launch()
```

---

## 成果物

|アイテム |説明 |重量 |
|----------|---------------|----------|
|コード |クリーンで文書化された GitHub リポジトリ | 30% |
|トレーニングログ | TensorBoard の視覚化、学習曲線 | 20% |
|レポート |アーキテクチャの決定、結果分析、アブレーション | 30% |
|デモ |インタラクティブなデモ (Web アプリまたはビデオ) | 20% |

---

## 概要

**強化学習: 基本から上級まで** シリーズの完了おめでとうございます。

### 学んだ知識

|パート |主な内容 |
|-----|----------------|
| 1. プラットフォーム | MDP、DP、MC、TD、Q ラーニング |
| 2.ディープRL | DQN、ポリシー勾配、PPO、SAC |
| 3. フレームワーク |体育館、SB3、MuJoCo |
| 4. 生産 | RLHF、DPO、マルチエージェント、展開 |

### さらなる開発の方向性

- **研究**: arXiv で論文を読み、結果を再現します。
- **コンテスト**: Kaggle RL、NeurIPS の課題
- **オープンソース**: SB3、TRL、PettingZoo に貢献
- **経歴**: RL エンジニア、AI 安全研究者、ロボティクス エンジニア
