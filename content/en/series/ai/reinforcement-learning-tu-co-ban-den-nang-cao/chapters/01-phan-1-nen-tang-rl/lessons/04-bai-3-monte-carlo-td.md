---
id: 019d8b32-bb03-7003-c003-ee0300000003
title: 'Lesson 3: Monte Carlo & Temporal Difference Learning'
slug: bai-3-monte-carlo-td-learning
description: >-
  Model-free methods. Monte Carlo prediction & control. TD(0) learning. SARSA
  on-policy TD control. Bias-variance trade-off.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 1: RL Foundation — Markov Decision Process & Tabular Methods'
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 'Reinforcement Learning: From Basics to Advanced'
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1330" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1330)"/>

  <!-- Decorations -->
  <g>
    <circle cx="792" cy="126" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="984" cy="158" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="676" cy="190" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="868" cy="222" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="254" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="951.507041555162,95.5 951.507041555162,136.5 916,157 880.492958444838,136.5 880.492958444838,95.50000000000001 916,75" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Monte Carlo & Temporal Difference</tspan>
      <tspan x="60" dy="42">Learning</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Reinforcement Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: RL Foundation — Markov Decision Process & Tabular Methods</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**Monte Carlo** and **Temporal Difference (TD)** are two core model-free methods — no need to know transition probabilities. This is an important transition from DP to actual RL.

---

## 1. Monte Carlo Prediction

Estimate V(s) by averaging returns from multiple episodes:

```python
from collections import defaultdict

def mc_prediction(policy, env, num_episodes, gamma=1.0):
    returns_sum = defaultdict(float)
    returns_count = defaultdict(int)
    V = defaultdict(float)
    
    for _ in range(num_episodes):
        episode = generate_episode(policy, env)
        G = 0
        visited_states = set()
        
        for t in reversed(range(len(episode))):
            state, action, reward = episode[t]
            G = gamma * G + reward
            
            if state not in visited_states:  # First-visit MC
                visited_states.add(state)
                returns_sum[state] += G
                returns_count[state] += 1
                V[state] = returns_sum[state] / returns_count[state]
    return V
```

---

## 2. Monte Carlo Control

MC + ε-greedy policy improvement:

```python
def mc_control(env, num_episodes, gamma=1.0, epsilon=0.1):
    Q = defaultdict(lambda: np.zeros(env.action_space.n))
    returns_sum = defaultdict(float)
    returns_count = defaultdict(int)
    
    for _ in range(num_episodes):
        episode = generate_episode_epsilon_greedy(Q, env, epsilon)
        G = 0
        
        for t in reversed(range(len(episode))):
            state, action, reward = episode[t]
            G = gamma * G + reward
            sa_pair = (state, action)
            returns_sum[sa_pair] += G
            returns_count[sa_pair] += 1
            Q[state][action] = returns_sum[sa_pair] / returns_count[sa_pair]
    return Q
```

---

## 3. TD(0) Learning

Update V after each step (no need to wait for the episode to end):

$$V(s) \leftarrow V(s) + \alpha [r + \gamma V(s') - V(s)]$$

```python
def td_prediction(policy, env, num_episodes, alpha=0.1, gamma=0.99):
    V = defaultdict(float)
    
    for _ in range(num_episodes):
        state, _ = env.reset()
        done = False
        while not done:
            action = policy(state)
            next_state, reward, terminated, truncated, _ = env.step(action)
            done = terminated or truncated
            
            # TD update
            td_target = reward + gamma * V[next_state] * (1 - done)
            td_error = td_target - V[state]
            V[state] += alpha * td_error
            
            state = next_state
    return V
```

---

## 4. SARSA — On-policy TD Control

```python
def sarsa(env, num_episodes, alpha=0.1, gamma=0.99, epsilon=0.1):
    Q = np.zeros((env.observation_space.n, env.action_space.n))
    
    for _ in range(num_episodes):
        state, _ = env.reset()
        action = epsilon_greedy(Q, state, epsilon)
        done = False
        
        while not done:
            next_state, reward, terminated, truncated, _ = env.step(action)
            done = terminated or truncated
            next_action = epsilon_greedy(Q, next_state, epsilon)
            
            # SARSA update: Q(s,a) += α[r + γQ(s',a') - Q(s,a)]
            Q[state, action] += alpha * (
                reward + gamma * Q[next_state, next_action] * (1-done) - Q[state, action]
            )
            state, action = next_state, next_action
    return Q
```

---

## 5. MC vs TD Comparison

| Aspect | Monte Carlo | TD(0) |
|--------|-------------|-------|
| Model-free | ✅ | ✅ |
| Online | ❌ (needs full episode) | ✅ (every step) |
| Bias | Unbiased | Biased (bootstrapping) |
| Variance | High | Low |
| Works with continuing tasks | ❌ | ✅ |

---

## Summary

| Method | Key Ideas | Update |
|--------|----------|--------|
| MC | Average complete returns | After episode |
| TD(0) | Bootstrap from next state | Every step |
| SARSA | On-policy TD control | Q(s,a) with actual next action |
