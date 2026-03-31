---
id: 019d8b32-bb08-7008-c008-ee0800000008
title: "Bài 8: SAC & Advanced Algorithms — Off-Policy Deep RL"
slug: bai-8-sac-advanced-algorithms
description: >-
  SAC: Soft Actor-Critic — maximum entropy RL. TD3: Twin Delayed DDPG. Continuous action spaces. DDPG. Model-based RL overview.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Deep Reinforcement Learning — Neural Networks meet RL"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

**SAC (Soft Actor-Critic)** là state-of-the-art off-policy algorithm cho continuous action spaces — kết hợp maximum entropy objective với actor-critic. SAC tự động tune temperature, ổn định và sample-efficient.

---

## 1. Maximum Entropy RL

$$\pi^* = \arg\max_\pi \sum_t \mathbb{E}_{\pi}[r(s_t, a_t) + \alpha \mathcal{H}(\pi(\cdot|s_t))]$$

**Key insight**: Balance reward maximization VÀ entropy (exploration) → robust policies.

---

## 2. SAC Components

```python
class SACActorContinuous(nn.Module):
    """Gaussian policy for continuous actions"""
    def __init__(self, state_dim, action_dim, hidden=256):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(state_dim, hidden), nn.ReLU(),
            nn.Linear(hidden, hidden), nn.ReLU(),
        )
        self.mean = nn.Linear(hidden, action_dim)
        self.log_std = nn.Linear(hidden, action_dim)
    
    def forward(self, state):
        feat = self.net(state)
        mean = self.mean(feat)
        log_std = self.log_std(feat).clamp(-20, 2)
        return mean, log_std
    
    def sample(self, state):
        mean, log_std = self.forward(state)
        std = log_std.exp()
        dist = torch.distributions.Normal(mean, std)
        x = dist.rsample()  # Reparameterization trick
        action = torch.tanh(x)
        log_prob = dist.log_prob(x) - torch.log(1 - action.pow(2) + 1e-6)
        return action, log_prob.sum(-1)
```

### Twin Q-Networks

```python
class TwinQNetwork(nn.Module):
    def __init__(self, state_dim, action_dim, hidden=256):
        super().__init__()
        self.q1 = nn.Sequential(
            nn.Linear(state_dim + action_dim, hidden), nn.ReLU(),
            nn.Linear(hidden, hidden), nn.ReLU(),
            nn.Linear(hidden, 1),
        )
        self.q2 = nn.Sequential(
            nn.Linear(state_dim + action_dim, hidden), nn.ReLU(),
            nn.Linear(hidden, hidden), nn.ReLU(),
            nn.Linear(hidden, 1),
        )
    
    def forward(self, state, action):
        x = torch.cat([state, action], dim=-1)
        return self.q1(x), self.q2(x)
```

---

## 3. TD3 — Twin Delayed DDPG

3 tricks trên DDPG:
1. **Twin critics**: Take minimum → reduce overestimation
2. **Delayed policy updates**: Update actor ít hơn critic
3. **Target policy smoothing**: Add noise to target actions

---

## 4. Algorithm Selection Guide

| Algorithm | Action Space | On/Off-Policy | Sample Efficiency | Best For |
|-----------|-------------|--------------|-------------------|----------|
| DQN | Discrete | Off-policy | Good | Games |
| PPO | Both | On-policy | Low | General purpose |
| SAC | Continuous | Off-policy | High | Robotics |
| TD3 | Continuous | Off-policy | High | Robotics |
| DDPG | Continuous | Off-policy | Good | Simple continuous |

---

## 5. Model-based RL Overview

Thay vì model-free, học model of environment → plan:

| Approach | Learn Model? | Plan? | Example |
|----------|-------------|-------|---------|
| Model-free | No | No | DQN, PPO |
| Model-based | Yes | Yes | Dreamer, MuZero |
| Hybrid | Yes | Yes | World Models |

---

## Tổng kết

| Concept | Mô tả |
|---------|--------|
| SAC | Max entropy + twin critics + auto temperature |
| TD3 | Twin critics + delayed + smoothing |
| Entropy | Encourages exploration, robust policies |
| Off-policy | Sample efficient, replay buffer |
