---
id: 019d8b32-bb16-7016-c016-ee1600000016
title: 第 16 課：Capstone — 為現實問題建構 RL 代理
slug: bai-16-capstone
description: 摘要項目：從 3 個項目中選擇一個：遊戲 AI 代理、機器人控製或聊天機器人的 RLHF。從設計到部署的端對端管道。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 15
section_title: 第 4 部分：RLHF、LLM 調整和製作
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 強化學習：從基礎到高級
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：Capstone — 建構 RL 代理</tspan>
      <tspan x="60" dy="42">現實世界的問題</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：RLHF、LLM 調整和製作</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Capstone 專案將所有 RL 知識應用於真正的端到端問題。從以下 3 個項目中選擇 1 個。

---

## 項目1：遊戲AI代理

### 描述
建立人工智慧遊戲代理程式——從自訂環境到經過培訓的可以演示的代理。

### 技術堆疊
- 體育館自訂環境（蛇、Flappy Bird、俄羅斯方塊）
- DQN 或 PPO 培训
- 使用 Optuna 進行超參數優化
- 帶有 Gradio 的網路演示

### 步骤

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

## 專案2：機器人控制

### 描述
在 MuJoCo 中訓練機器人運動代理 — 步行、跑步或操縱。

### 技術堆疊
- MuJoCo（螞蟻、人形機器人或客製化機器人）
- 具有域隨機化的 SAC 訓練
- TensorBoard 分析
- 模擬到真實的傳輸分析

### 評價

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

## 專案 3：RLHF / DPO 聊天機器人

### 描述
使用 DPO 或 RLHF 使小型法學碩士與人們的偏好保持一致。

### 技術堆疊
- 基本款：SmolLM 或 Qwen2.5 (0.5B-1.5B)
- SFT + DPO 的 TRL 库
- 評估：MT-Bench、AlpacaEval
- 广播聊天界面

### 管道

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

## 可交付成果

|項目 |描述 |重量 |
|--------|-------------|--------|
|程式碼|乾淨、記錄的 GitHub 儲存庫 | 30% |
|訓練日誌| TensorBoard 視覺化、學習曲線 | 20% |
|報告|架構決策、結果分析、消融 | 30% |
|演示 |互動式演示（網頁應用程式或影片）| 20% |

---

## 總結

恭喜您完成**強化學習：從基礎到進階**系列！

###學到的知識

|部分|主要内容 |
|-----|----------------|
| 1. 平台 | MDP、DP、MC、TD、Q 學習 |
| 2. 深度強化學習 | DQN、策略梯度、PPO、SAC |
| 3. 框架 |體育館、SB3、MuJoCo |
| 4. 生產| RLHF、DPO、多重代理、部署 |

###進一步的發展方向

- **研究**：閱讀 arXiv 上的論文，重現結果
- **競賽**：Kaggle RL、NeurIPS 挑戰
- **開源**：為 SB3、TRL、PettingZoo 做出貢獻
- **職業**：強化學習工程師、人工智慧安全研究員、機器人工程師
