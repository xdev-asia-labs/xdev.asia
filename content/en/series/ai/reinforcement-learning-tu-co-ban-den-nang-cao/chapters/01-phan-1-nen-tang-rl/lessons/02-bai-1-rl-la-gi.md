---
id: 019d8b32-bb01-7001-c001-ee0100000001
title: 'Lesson 1: What is Reinforcement Learning? — Agent, Environment & Rewards'
slug: bai-1-reinforcement-learning-la-gi
description: >-
  Define RL, compare supervised/unsupervised/RL. Agent-Environment interaction
  loop. State, Action, Reward, Policy, Value function. MDP. Exploration vs
  Exploitation.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'Part 1: RL Foundation — Markov Decision Process & Tabular Methods'
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 'Reinforcement Learning: From Basics to Advanced'
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1020" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1020)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1074" cy="192" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="1048" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1022" cy="40" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="996" cy="94" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="148" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="152" x2="1100" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="182" x2="1050" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1025.38268590218,188.5 1025.38268590218,215.5 1002,229 978.6173140978201,215.5 978.6173140978201,188.5 1002,175" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI & ML — Lesson 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: What is Reinforcement Learning? —</tspan>
      <tspan x="60" dy="42">Agent, Environment & Reward</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Reinforcement Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: RL Foundation — Markov Decision Process & Tabular Methods</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**Reinforcement Learning (RL)** is the third paradigm of Machine Learning — the agent learns how to act in the environment to maximize cumulative reward.

---

## 1. RL vs Supervised vs Unsupervised

| Paradigm | Data | Feedback | Example |
|----------|-------|----------|-------|
| Supervised | (x, y) pairs | Labels | Image classification |
| Unsupervised | x only | None | Clustering |
| RL | States, actions | Rewards (delayed) | Game playing |

### Unique characteristics of RL

- **Sequential decision making**: Decisions that affect the future
- **Delayed reward**: Not knowing immediately whether the action is good or bad
- **Exploration vs Exploitation**: Try new things vs exploit known knowledge
- **No supervisor**: Only reward signal

---

## 2. Agent-Environment Interaction Loop

Every RL problem follows a loop:

```
Agent quan sát state s_t
  → Chọn action a_t theo policy π
  → Environment trả về reward r_{t+1} và state mới s_{t+1}
  → Lặp lại
```

### Example: Robot goes through a maze

```python
import gymnasium as gym

env = gym.make("FrozenLake-v1", render_mode="human")
state, info = env.reset()

for step in range(100):
    action = env.action_space.sample()  # Random policy
    next_state, reward, terminated, truncated, info = env.step(action)
    print(f"State: {state}, Action: {action}, Reward: {reward}")
    
    if terminated or truncated:
        state, info = env.reset()
    else:
        state = next_state
```

---

## 3. Core concepts

### State(s)
Fully describes the current state of the environment.

### Action (a)
Decide which agent to execute — discrete (left/right) or continuous (rotation angle).

### Rewards (r)
Scalar response from environment — agent wants to maximize total reward.

### Policy (π)
State → action mapping strategy:
- **Deterministic**: π(s) = a
- **Stochastic**: π(a|s) = P(a|s)

### Value Function V(s)
Expected cumulative reward when starting from state s:

$$V^\pi(s) = \mathbb{E}_\pi\left[\sum_{t=0}^{\infty} \gamma^t r_{t+1} | s_0 = s\right]$$

### Q-function Q(s,a)
Expected cumulative reward when choosing action a at state s:

$$Q^\pi(s,a) = \mathbb{E}_\pi\left[\sum_{t=0}^{\infty} \gamma^t r_{t+1} | s_0 = s, a_0 = a\right]$$

---

## 4. Markov Decision Process (MDP)

MDP is the standard mathematical framework for RL: **(S, A, P, R, γ)**

| Ingredients | Symbol | Description |
|-----------|---------|--------|
| States | S | Collection of all states |
| Actions | A | Collection of all actions |
| Transition | P(s'|s,a) | State transition probability |
| Rewards | R(s,a,s') | Reward function |
| Discount | γ ∈ [0,1] | Discount factor |

**Markov Property**: The future depends only on the present, not the past.

---

## 5. Exploration vs Exploitation

| Strategy | Description | Trade-off |
|-----------|--------|-----------|
| Exploration | Try new action | Find a better strategy |
| Exploitation | Use the best known action | Maximize short-term rewards |

Balancing method:
- **ε-greedy**: Random with probability ε
- **UCB**: Upper Confidence Bound
- **Thompson Sampling**: Bayesian approach

---

## Summary

| Concept | Description |
|-----------|--------|
| RL | Agent learns from interaction with environment |
| MDP | Math framework: states, actions, rewards |
| Policy | Action selection strategy |
| Value | Expected cumulative reward |
| Exploration | Balance between trying new and exploiting |
