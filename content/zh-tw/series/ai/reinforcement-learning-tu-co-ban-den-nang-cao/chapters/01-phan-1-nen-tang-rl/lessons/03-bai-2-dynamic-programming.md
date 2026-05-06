---
id: 019d8b32-bb02-7002-c002-ee0200000002
title: 第 2 課：動態規劃－策略迭代與值迭代
slug: bai-2-dynamic-programming
description: 貝爾曼方程式。政策評估、政策改進。值迭代算法。 Python 中的 GridWorld 實作。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：強化學習基礎 — 馬可夫決策過程與表格方法
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 強化學習：從基礎到高級
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：動態規劃 — 策略</tspan>
      <tspan x="60" dy="42">迭代與值迭代</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：強化學習基礎 — 馬可夫決策過程與表格方法</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**動態規劃 (DP)** 在了解整個模型的情況下求解 MDP — 轉移機率 P(s'|s,a) 和獎勵 R。這是所有 RL 演算法的理論基礎。

---

## 1. 貝爾曼方程

### 貝爾曼期望方程

$$V^\pi(s) = \sum_a \pi(a|s) \sum_{s'} P(s'|s,a)[R(s,a,s') + \gamma V^\pi(s')]$$

### 貝爾曼最優方程

$$V^*(s) = \max_a \sum_{s'} P(s'|s,a)[R(s,a,s') + \gamma V^*(s')]$$

---

## 2.政策評估

計算固定策略的 V(s)：

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

## 3. 政策改進

基於V(s)的貪婪改進：

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

## 4. 策略迭代

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

## 5. 值迭代

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

## 6.GridWorld 演示

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

## 總結

|方法|方法|收斂|複雜度 |
|--------|----------|-------------|------------|
|政策迭代|評估→改進|幾次迭代 |每次評估的 O(S²A) |
|價值迭代|一步前瞻性 |多次迭代 |每次迭代 O(SA) |
