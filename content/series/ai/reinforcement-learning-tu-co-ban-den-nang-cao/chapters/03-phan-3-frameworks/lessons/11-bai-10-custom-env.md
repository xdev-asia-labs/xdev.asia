---
id: 019d8b32-bb10-7010-c010-ee1000000010
title: "Bài 10: Custom Environment Design — Xây dựng Game AI"
slug: bai-10-custom-environment
description: >-
  Design Gymnasium environment cho bài toán riêng. Reward shaping. State/action space design. Environment wrappers. Hands-on Snake Game AI.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: RL Frameworks & Thực hành"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

Xây dựng custom Gymnasium environment cho bài toán riêng — từ design state/action spaces đến reward shaping và training agent.

---

## 1. Custom Environment Template

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

## 2. Reward Shaping

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

### Reward Design Principles

| Principle | Mô tả |
|-----------|--------|
| Sparse vs Dense | Dense rewards faster learning but risk reward hacking |
| Magnitude | Balance positive/negative rewards |
| Shaping | Guide agent without changing optimal policy |
| Potential-based | Guarantees policy invariance |

---

## 3. Register & Train

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

## Tổng kết

| Aspect | Best Practice |
|--------|---------------|
| Observation | Minimal, informative, normalized |
| Action space | Discrete when possible |
| Reward | Dense shaping + sparse bonus |
| Termination | Clear, fair conditions |
| Testing | Verify with random agent first |
