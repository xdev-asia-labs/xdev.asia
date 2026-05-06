---
id: 019d8b32-bb16-7016-c016-ee1600000016
title: 'Lesson 16: Capstone — Building RL Agent for Real-world Problem'
slug: bai-16-capstone
description: >-
  Summary project: Choose 1 of 3 projects: Game AI Agent, Robot Control, or RLHF
  for Chatbot. End-to-end pipeline from design to deployment.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 15
section_title: 'Part 4: RLHF, LLM Alignment & Production'
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 'Reinforcement Learning: From Basics to Advanced'
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI & ML — Lesson 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 16: Capstone — Building RL Agent for</tspan>
      <tspan x="60" dy="42">Real-world Problem</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Reinforcement Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: RLHF, LLM Alignment & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Capstone project applies all RL knowledge to a real end-to-end problem. Choose 1 of 3 projects below.

---

## Project 1: Game AI Agent

### Description
Build AI gaming agents — from custom environments to trained agents that can demo.

### Technical Stack
- Gymnasium custom environment (Snake, Flappy Bird, Tetris)
- DQN or PPO training
- Hyperparameter optimization with Optuna
- Web demo with Gradio

### Steps

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

## Project 2: Robot Control

### Description
Train robot locomotion agent in MuJoCo — walking, running, or manipulation.

### Technical Stack
- MuJoCo (Ant, Humanoid, or custom robot)
- SAC training with domain randomization
- TensorBoard analysis
- Sim-to-real transfer analysis

### Evaluation

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

## Project 3: RLHF / DPO Chatbot

### Description
Align a small LLM with human preferences using DPO or RLHF.

### Technical Stack
- Base model: SmolLM or Qwen2.5 (0.5B-1.5B)
- TRL library for SFT + DPO
- Evaluation: MT-Bench, AlpacaEval
- Gradio chat interface

### Pipelines

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

## Deliverables

| Item | Description | Weight |
|-------|-------------|--------|
| Code | Clean, documented GitHub repository | 30% |
| Training logs | TensorBoard visualizations, learning curves | 20% |
| Report | Architecture decisions, results analysis, ablations | 30% |
| Demo | Interactive demo (web app or video) | 20% |

---

## Summary

Congratulations on completing the **Reinforcement Learning: From Basic to Advanced** series!

### Learned knowledge

| Part | Main content |
|-----|----------------|
| 1. Platform | MDP, DP, MC, TD, Q-Learning |
| 2. Deep RL | DQN, Policy Gradient, PPO, SAC |
| 3. Frameworks | Gymnasium, SB3, MuJoCo |
| 4. Production | RLHF, DPO, Multi-agent, Deploy |

### Further development direction

- **Research**: Read papers on arXiv, reproduce results
- **Competition**: Kaggle RL, NeurIPS challenges
- **Open-source**: Contribute to SB3, TRL, PettingZoo
- **Career**: RL Engineer, AI Safety Researcher, Robotics Engineer
