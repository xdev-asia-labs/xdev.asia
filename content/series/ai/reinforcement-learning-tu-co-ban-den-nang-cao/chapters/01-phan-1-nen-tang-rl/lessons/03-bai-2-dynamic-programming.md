---
id: 019d8b32-bb02-7002-c002-ee0200000002
title: "Bài 2: Dynamic Programming — Policy Iteration & Value Iteration"
slug: bai-2-dynamic-programming
description: >-
  Bellman equation. Policy evaluation, policy improvement. Value iteration algorithm. GridWorld implementation bằng Python.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng RL — Markov Decision Process & Tabular Methods"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9869" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9869)"/>

  <!-- Decorations -->
  <g>
    <circle cx="615" cy="215" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="630" cy="190" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="645" cy="165" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="660" cy="140" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="675" cy="115" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="245" x2="1100" y2="325" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="275" x2="1050" y2="345" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1029.6410161513775,175 1029.6410161513775,215 995,235 960.3589838486224,215 960.3589838486224,175 995,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI &amp; ML — Bài 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 2: Dynamic Programming — Policy</tspan>
      <tspan x="60" dy="42">Iteration &amp; Value Iteration</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Reinforcement Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng RL — Markov Decision Process &amp; Tabular Methods</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

**Dynamic Programming (DP)** giải MDP khi biết toàn bộ model — transition probabilities P(s'|s,a) và reward R. Đây là nền tảng lý thuyết cho mọi RL algorithm.

---

## 1. Bellman Equation

### Bellman Expectation Equation

$$V^\pi(s) = \sum_a \pi(a|s) \sum_{s'} P(s'|s,a)[R(s,a,s') + \gamma V^\pi(s')]$$

### Bellman Optimality Equation

$$V^*(s) = \max_a \sum_{s'} P(s'|s,a)[R(s,a,s') + \gamma V^*(s')]$$

---

## 2. Policy Evaluation

Tính V(s) cho một policy cố định:

```python
import numpy as np

def policy_evaluation(policy, env, gamma=0.99, theta=1e-8):
    V = np.zeros(env.nS)
    while True:
        delta = 0
        for s in range(env.nS):
            v = 0
            for a, action_prob in enumerate(policy[s]):
                for prob, next_state, reward, done in env.P[s][a]:
                    v += action_prob * prob * (reward + gamma * V[next_state])
            delta = max(delta, abs(V[s] - v))
            V[s] = v
        if delta < theta:
            break
    return V
```

---

## 3. Policy Improvement

Greedy improvement dựa trên V(s):

```python
def policy_improvement(V, env, gamma=0.99):
    policy = np.zeros([env.nS, env.nA])
    for s in range(env.nS):
        q_values = np.zeros(env.nA)
        for a in range(env.nA):
            for prob, next_state, reward, done in env.P[s][a]:
                q_values[a] += prob * (reward + gamma * V[next_state])
        best_action = np.argmax(q_values)
        policy[s][best_action] = 1.0
    return policy
```

---

## 4. Policy Iteration

```python
def policy_iteration(env, gamma=0.99):
    policy = np.ones([env.nS, env.nA]) / env.nA  # Uniform random
    while True:
        V = policy_evaluation(policy, env, gamma)
        new_policy = policy_improvement(V, env, gamma)
        if np.array_equal(policy, new_policy):
            break
        policy = new_policy
    return policy, V
```

---

## 5. Value Iteration

```python
def value_iteration(env, gamma=0.99, theta=1e-8):
    V = np.zeros(env.nS)
    while True:
        delta = 0
        for s in range(env.nS):
            v = V[s]
            V[s] = max(
                sum(p * (r + gamma * V[s_])
                    for p, s_, r, _ in env.P[s][a])
                for a in range(env.nA)
            )
            delta = max(delta, abs(v - V[s]))
        if delta < theta:
            break
    return V
```

---

## 6. GridWorld Demo

```python
import gymnasium as gym

env = gym.make("FrozenLake-v1", is_slippery=False)
policy, V = policy_iteration(env.unwrapped, gamma=0.99)

print("Optimal Value Function:")
print(V.reshape(4, 4))
print("Optimal Policy (0=L, 1=D, 2=R, 3=U):")
print(np.argmax(policy, axis=1).reshape(4, 4))
```

---

## Tổng kết

| Method | Approach | Convergence | Complexity |
|--------|----------|-------------|------------|
| Policy Iteration | Evaluate → Improve | Few iterations | O(S²A) per evaluation |
| Value Iteration | One-step lookahead | Many iterations | O(SA) per iteration |
