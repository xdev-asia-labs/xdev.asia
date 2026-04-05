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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1107" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1107)"/>

  <!-- Decorations -->
  <g>
    <circle cx="865" cy="105" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="630" cy="130" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="895" cy="155" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="660" cy="180" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="925" cy="205" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="195" x2="1100" y2="275" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="225" x2="1050" y2="295" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="970.9807621135332,130 970.9807621135332,160 945,175 919.0192378864668,160 919.0192378864668,130 945,115" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI &amp; ML — Bài 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 8: SAC &amp; Advanced Algorithms —</tspan>
      <tspan x="60" dy="42">Off-Policy Deep RL</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Reinforcement Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Deep Reinforcement Learning — Neural Networks meet RL</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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
