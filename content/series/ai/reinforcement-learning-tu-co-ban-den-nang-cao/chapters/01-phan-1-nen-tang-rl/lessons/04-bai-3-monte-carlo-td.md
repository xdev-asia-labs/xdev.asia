---
id: 019d8b32-bb03-7003-c003-ee0300000003
title: "Bài 3: Monte Carlo & Temporal Difference Learning"
slug: bai-3-monte-carlo-td-learning
description: >-
  Model-free methods. Monte Carlo prediction & control. TD(0) learning. SARSA on-policy TD control. Bias-variance trade-off.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng RL — Markov Decision Process & Tabular Methods"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

**Monte Carlo** và **Temporal Difference (TD)** là hai model-free methods cốt lõi — không cần biết transition probabilities. Đây là bước chuyển quan trọng từ DP sang RL thực tế.

---

## 1. Monte Carlo Prediction

Ước lượng V(s) bằng trung bình returns từ nhiều episodes:

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

Update V sau mỗi step (không cần đợi hết episode):

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
|--------|------------|-------|
| Model-free | ✅ | ✅ |
| Online | ❌ (needs full episode) | ✅ (every step) |
| Bias | Unbiased | Biased (bootstrapping) |
| Variance | High | Low |
| Works with continuing tasks | ❌ | ✅ |

---

## Tổng kết

| Method | Key Idea | Update |
|--------|----------|--------|
| MC | Average complete returns | After episode |
| TD(0) | Bootstrap from next state | Every step |
| SARSA | On-policy TD control | Q(s,a) with actual next action |
