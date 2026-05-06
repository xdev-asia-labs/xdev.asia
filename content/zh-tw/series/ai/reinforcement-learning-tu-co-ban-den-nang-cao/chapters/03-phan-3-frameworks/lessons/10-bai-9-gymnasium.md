---
id: 019d8b32-bb09-7009-c009-ee0900000009
title: 第 9 課：Gymnasium 與穩定基線 3 — 現實生活中的 RL 框架
slug: bai-9-gymnasium-stable-baselines3
description: 體育館 API 詳細資料。包裝紙。穩定基線3 訓練、評估、回調。超參數調整。 TensorBoard 日誌記錄。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 第 3 部分：強化學習架構與實踐
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 強化學習：從基礎到高級
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9681" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9681)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1095" cy="115" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="1090" cy="230" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1085" cy="85" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="1080" cy="200" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="55" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="185" x2="1100" y2="265" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="215" x2="1050" y2="285" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1069.6410161513775,215 1069.6410161513775,255 1035,275 1000.3589838486224,255 1000.3589838486224,215 1035,195" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 人工智慧與機器學習 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：體育館與穩定基線3 — 盧比</tspan>
      <tspan x="60" dy="42">實戰框架</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：強化學習架構與實踐</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**Gymnasium**（OpenAI Gym 的後繼者）是 RL 環境的標準 API。 **穩定基線3 (SB3)** 提供 DQN、PPO、SAC、TD3 的生產就緒實施。

---

## 1. 體操基礎知識

```python
import gymnasium as gym

# Create environment
env = gym.make("CartPole-v1", render_mode="human")
obs, info = env.reset(seed=42)

for step in range(1000):
    action = env.action_space.sample()  # Random policy
    obs, reward, terminated, truncated, info = env.step(action)
    
    if terminated or truncated:
        obs, info = env.reset()

env.close()
```

### 空格

```python
# Discrete actions
env = gym.make("CartPole-v1")
print(env.action_space)  # Discrete(2)

# Continuous actions
env = gym.make("Pendulum-v1")
print(env.action_space)  # Box(-2.0, 2.0, (1,))

# Complex observations
env = gym.make("CarRacing-v2")
print(env.observation_space)  # Box(0, 255, (96, 96, 3))
```

---

## 2. 包裝器

```python
from gymnasium.wrappers import TimeLimit, RecordVideo, NormalizeObservation

env = gym.make("CartPole-v1")
env = TimeLimit(env, max_episode_steps=500)
env = NormalizeObservation(env)
env = RecordVideo(env, "videos/", episode_trigger=lambda e: e % 100 == 0)
```

---

## 3. 穩定基線3 訓練

```python
from stable_baselines3 import PPO, DQN, SAC
from stable_baselines3.common.env_util import make_vec_env

# Vectorized environments for faster training
env = make_vec_env("CartPole-v1", n_envs=4)

model = PPO("MlpPolicy", env, verbose=1,
    learning_rate=3e-4,
    n_steps=2048,
    batch_size=64,
    n_epochs=10,
    gamma=0.99,
    tensorboard_log="./tensorboard/"
)
model.learn(total_timesteps=500_000)
model.save("ppo_cartpole")
```

---

## 4. 評估

```python
from stable_baselines3.common.evaluation import evaluate_policy

model = PPO.load("ppo_cartpole")
eval_env = gym.make("CartPole-v1")
mean_reward, std = evaluate_policy(model, eval_env, n_eval_episodes=20)
print(f"Mean reward: {mean_reward:.2f} +/- {std:.2f}")
```

---

## 5. 回調

```python
from stable_baselines3.common.callbacks import EvalCallback, CheckpointCallback

eval_callback = EvalCallback(
    eval_env, best_model_save_path="./best/",
    log_path="./logs/", eval_freq=5000,
    n_eval_episodes=10, deterministic=True,
)

checkpoint_callback = CheckpointCallback(
    save_freq=10000, save_path="./checkpoints/"
)

model.learn(
    total_timesteps=500_000,
    callback=[eval_callback, checkpoint_callback]
)
```

---

## 6. TensorBoard

```bash
tensorboard --logdir ./tensorboard/
# Monitor: reward, loss, learning rate, etc.
```

---

## 總結

|框架|角色 |主要特點|
|------------|--------|-------------|
|體育館 |環境API |標準化，包裝紙|
| SB3 |演算法庫| PPO、SAC、DQN — 生產就緒 |
|張量板 |視覺化|即時訓練指標 |
|奧圖納 |磷酸二氫鉀|貝葉斯超參數調整 |
