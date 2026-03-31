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
