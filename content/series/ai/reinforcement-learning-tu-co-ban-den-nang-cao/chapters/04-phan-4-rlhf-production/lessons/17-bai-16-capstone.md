---
id: 019d8b32-bb16-7016-c016-ee1600000016
title: "Bài 16: Capstone — Xây dựng RL Agent cho Real-world Problem"
slug: bai-16-capstone
description: >-
  Dự án tổng kết: Chọn 1 trong 3 projects: Game AI Agent, Robot Control, hoặc RLHF cho Chatbot. End-to-end pipeline từ design đến deploy.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 4: RLHF, LLM Alignment & Production"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

Capstone project áp dụng toàn bộ kiến thức RL vào một bài toán thực tế end-to-end. Chọn 1 trong 3 projects bên dưới.

---

## Project 1: Game AI Agent

### Mô tả
Xây dựng AI agent chơi game — từ custom environment đến trained agent có thể demo.

### Technical Stack
- Gymnasium custom environment (Snake, Flappy Bird, Tetris)
- DQN hoặc PPO training
- Hyperparameter optimization với Optuna
- Web demo với Gradio

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

### Mô tả
Train robot locomotion agent trong MuJoCo — walking, running, or manipulation.

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

### Mô tả
Align một small LLM với human preferences sử dụng DPO hoặc RLHF.

### Technical Stack
- Base model: SmolLM hoặc Qwen2.5 (0.5B-1.5B)
- TRL library cho SFT + DPO
- Evaluation: MT-Bench, AlpacaEval
- Gradio chat interface

### Pipeline

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
|------|-------------|--------|
| Code | Clean, documented GitHub repository | 30% |
| Training logs | TensorBoard visualizations, learning curves | 20% |
| Report | Architecture decisions, results analysis, ablations | 30% |
| Demo | Interactive demo (web app or video) | 20% |

---

## Tổng kết

Chúc mừng bạn đã hoàn thành series **Reinforcement Learning: Từ Cơ bản đến Nâng cao**!

### Kiến thức đã học

| Phần | Nội dung chính |
|------|----------------|
| 1. Nền tảng | MDP, DP, MC, TD, Q-Learning |
| 2. Deep RL | DQN, Policy Gradient, PPO, SAC |
| 3. Frameworks | Gymnasium, SB3, MuJoCo |
| 4. Production | RLHF, DPO, Multi-agent, Deploy |

### Hướng phát triển tiếp

- **Research**: Read papers on arXiv, reproduce results
- **Competition**: Kaggle RL, NeurIPS challenges
- **Open-source**: Contribute to SB3, TRL, PettingZoo
- **Career**: RL Engineer, AI Safety Researcher, Robotics Engineer
