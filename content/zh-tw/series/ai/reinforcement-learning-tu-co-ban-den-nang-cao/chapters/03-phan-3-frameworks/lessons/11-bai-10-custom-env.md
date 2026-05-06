---
id: 019d8b32-bb10-7010-c010-ee1000000010
title: 第 10 課：自訂環境設計 — 建構遊戲 AI
slug: bai-10-custom-environment
description: 針對特定議題設計體育館環境。獎勵塑造。狀態/動作空間設計。環境包裝器。動手實踐貪吃蛇遊戲人工智慧。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：強化學習架構與實踐
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 強化學習：從基礎到高級
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4882" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4882)"/>

  <!-- Decorations -->
  <g>
    <circle cx="678" cy="44" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="756" cy="222" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="834" cy="140" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="912" cy="58" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="990" cy="236" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="144" x2="1100" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="174" x2="1050" y2="244" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.7749907475932,174.5 1027.7749907475932,213.5 994,233 960.2250092524068,213.5 960.2250092524068,174.5 994,155" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：自訂環境設計 — 構建</tspan>
      <tspan x="60" dy="42">建構遊戲人工智慧</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：強化學習架構與實踐</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

針對您自己的問題建立自訂 Gymnasium 環境 - 從設計狀態/動作空間到獎勵塑造和培訓代理商。

---

## 1.自訂環境模板

```python
import gymnasium as gym
from gymnasium import spaces
import numpy as np

class SnakeEnv(gym.Env):
    metadata = {"render_modes": ["human", "rgb_array"], "render_fps": 10}

    def __init__(self, grid_size=10, render_mode=None):
        super().__init__()
        self.grid_size = grid_size
        self.render_mode = render_mode
        
        # Action: 0=up, 1=right, 2=down, 3=left
        self.action_space = spaces.Discrete(4)
        
        # Observation: grid with snake body, head, food
        self.observation_space = spaces.Box(
            low=0, high=3, shape=(grid_size, grid_size), dtype=np.uint8
        )

    def reset(self, seed=None, options=None):
        super().reset(seed=seed)
        self.snake = [(5, 5)]
        self.direction = 1  # right
        self.food = self._place_food()
        self.score = 0
        self.steps = 0
        return self._get_obs(), self._get_info()

    def step(self, action):
        self.steps += 1
        self._move_snake(action)
        
        terminated = self._check_collision()
        truncated = self.steps >= self.grid_size * self.grid_size * 2
        reward = self._compute_reward(terminated)
        
        return self._get_obs(), reward, terminated, truncated, self._get_info()

    def _place_food(self):
        while True:
            pos = (self.np_random.integers(0, self.grid_size),
                   self.np_random.integers(0, self.grid_size))
            if pos not in self.snake:
                return pos
    
    def _get_obs(self):
        grid = np.zeros((self.grid_size, self.grid_size), dtype=np.uint8)
        for segment in self.snake:
            grid[segment] = 1  # body
        grid[self.snake[0]] = 2  # head
        grid[self.food] = 3  # food
        return grid
    
    def _get_info(self):
        return {"score": self.score, "length": len(self.snake)}
```

---

## 2. 獎勵塑造

```python
def _compute_reward(self, terminated):
    if terminated:
        return -10.0
    if self.snake[0] == self.food:
        self.score += 1
        return 10.0
    
    # Distance-based shaping
    head = self.snake[0]
    dist_to_food = abs(head[0] - self.food[0]) + abs(head[1] - self.food[1])
    prev_dist = abs(self.prev_head[0] - self.food[0]) + abs(self.prev_head[1] - self.food[1])
    
    if dist_to_food < prev_dist:
        return 0.1   # Moving closer
    else:
        return -0.1  # Moving away
```

### 獎勵設計原則

|原理|說明 |
|------------|--------|
|稀疏與密集 |獎勵密集，學習速度更快，但獎勵黑客風險較大
|幅度 |平衡正/負獎勵 |
|塑形|在不改變最優策略的情況下引導智能體 |
|潛力為本 |保證策略不變性 |

---

## 3. 註冊和培訓

```python
# Register custom env
gym.register(id="Snake-v0", entry_point="snake_env:SnakeEnv")

# Train with SB3
from stable_baselines3 import PPO
env = gym.make("Snake-v0")
model = PPO("MlpPolicy", env, verbose=1)
model.learn(total_timesteps=500_000)
```

---

## 總結

|方面|最佳實務 |
|--------|----------------|
|觀察|最小化、資訊豐富、標準化 |
|行動空間|盡可能離散 |
|獎勵 |密集塑形+稀疏加分|
|終止|明確、公平的條件 |
|測試|首先與隨機代理驗證 |
