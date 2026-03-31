---
id: 019d8b32-bb09-7009-c009-ee0900000009
title: "Bài 9: Gymnasium & Stable-Baselines3 — RL Frameworks thực chiến"
slug: bai-9-gymnasium-stable-baselines3
description: >-
  Gymnasium API chi tiết. Wrappers. Stable-Baselines3 training, evaluation, callbacks. Hyperparameter tuning. TensorBoard logging.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: RL Frameworks & Thực hành"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

**Gymnasium** (successor OpenAI Gym) là standard API cho RL environments. **Stable-Baselines3 (SB3)** cung cấp production-ready implementations của DQN, PPO, SAC, TD3.

---

## 1. Gymnasium Fundamentals

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

### Spaces

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

## 2. Wrappers

```python
from gymnasium.wrappers import TimeLimit, RecordVideo, NormalizeObservation

env = gym.make("CartPole-v1")
env = TimeLimit(env, max_episode_steps=500)
env = NormalizeObservation(env)
env = RecordVideo(env, "videos/", episode_trigger=lambda e: e % 100 == 0)
```

---

## 3. Stable-Baselines3 Training

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

## 4. Evaluation

```python
from stable_baselines3.common.evaluation import evaluate_policy

model = PPO.load("ppo_cartpole")
eval_env = gym.make("CartPole-v1")
mean_reward, std = evaluate_policy(model, eval_env, n_eval_episodes=20)
print(f"Mean reward: {mean_reward:.2f} +/- {std:.2f}")
```

---

## 5. Callbacks

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

## Tổng kết

| Framework | Vai trò | Key Features |
|-----------|--------|-------------|
| Gymnasium | Environment API | Standardized, wrappers |
| SB3 | Algorithm library | PPO, SAC, DQN — production-ready |
| TensorBoard | Visualization | Real-time training metrics |
| Optuna | HPO | Bayesian hyperparameter tuning |
