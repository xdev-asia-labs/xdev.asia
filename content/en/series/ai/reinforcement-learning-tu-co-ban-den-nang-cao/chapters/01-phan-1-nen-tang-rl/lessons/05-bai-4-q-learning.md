---
id: 019d8b32-bb04-7004-c004-ee0400000004
title: 'Lesson 4: Q-Learning Deep Dive & Multi-Armed Bandits'
slug: bai-4-q-learning-bandits
description: >-
  Q-Learning algorithm in detail. ε-greedy exploration. Multi-Armed Bandit
  problem. UCB, Thompson Sampling. Hands-on Taxi environment.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 1: RL Foundation — Markov Decision Process & Tabular Methods'
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 'Reinforcement Learning: From Basics to Advanced'
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1853" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1853)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1044" cy="242" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="988" cy="226" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="932" cy="210" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="876" cy="194" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="820" cy="178" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="62" x2="1100" y2="142" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="92" x2="1050" y2="162" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="994.0429399400242,143.5 994.0429399400242,180.5 962,199 929.9570600599758,180.5 929.9570600599758,143.5 962,125" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI & ML — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: Q-Learning Deep Dive & Multi-Armed</tspan>
      <tspan x="60" dy="42">Bandits</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Reinforcement Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: RL Foundation — Markov Decision Process & Tabular Methods</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**Q-Learning** is the off-policy TD control algorithm — the foundation for DQN and all value-based deep RL. **Multi-Armed Bandits** is a simplified RL focusing on exploration vs exploitation.

---

## 1. Q-Learning Algorithm

```python
def q_learning(env, num_episodes, alpha=0.1, gamma=0.99, epsilon=0.1):
    Q = np.zeros((env.observation_space.n, env.action_space.n))
    
    for episode in range(num_episodes):
        state, _ = env.reset()
        done = False
        
        while not done:
            # ε-greedy action selection
            if np.random.random() < epsilon:
                action = env.action_space.sample()
            else:
                action = np.argmax(Q[state])
            
            next_state, reward, terminated, truncated, _ = env.step(action)
            done = terminated or truncated
            
            # Q-Learning update (off-policy: max over next actions)
            Q[state, action] += alpha * (
                reward + gamma * np.max(Q[next_state]) * (1 - done) - Q[state, action]
            )
            state = next_state
    return Q
```

### SARSA vs Q-Learning

| | SARSA | Q-Learning |
|---|-------|-------------|
| Type | On-policy | Off-policy |
| Update | Q(s,a) += α[r + γQ(s',a') - Q(s,a)] | Q(s,a) += α[r + γ max Q(s',·) - Q(s,a)] |
| Behavior | Safer, follows ε-greedy | Learns optimal policy |

---

## 2. Exploration Strategies

### ε-greedy with Decay

```python
def epsilon_greedy_decay(Q, state, episode, min_epsilon=0.01, decay=0.995):
    epsilon = max(min_epsilon, 1.0 * (decay ** episode))
    if np.random.random() < epsilon:
        return env.action_space.sample()
    return np.argmax(Q[state])
```

### Boltzmann (Softmax) Exploration

```python
def boltzmann_action(Q, state, temperature=1.0):
    q_values = Q[state] / temperature
    probs = np.exp(q_values - np.max(q_values))
    probs /= probs.sum()
    return np.random.choice(len(probs), p=probs)
```

---

## 3. Multi-Armed Bandit

Simplified RL: 1 state, K actions (arms), maximize reward.

```python
class MultiArmedBandit:
    def __init__(self, k=10):
        self.k = k
        self.true_values = np.random.randn(k)
    
    def pull(self, arm):
        return np.random.randn() + self.true_values[arm]

class UCBAgent:
    def __init__(self, k, c=2.0):
        self.counts = np.zeros(k)
        self.values = np.zeros(k)
        self.c = c
        self.t = 0
    
    def select_arm(self):
        self.t += 1
        if 0 in self.counts:
            return np.argmin(self.counts)
        ucb = self.values + self.c * np.sqrt(np.log(self.t) / self.counts)
        return np.argmax(ucb)
    
    def update(self, arm, reward):
        self.counts[arm] += 1
        self.values[arm] += (reward - self.values[arm]) / self.counts[arm]
```

---

## 4. Hands-on: Taxi Environment

```python
env = gym.make("Taxi-v3")
Q = q_learning(env, num_episodes=10000, alpha=0.1, gamma=0.99, epsilon=0.1)

# Test learned policy
state, _ = env.reset()
total_reward = 0
for _ in range(200):
    action = np.argmax(Q[state])
    state, reward, done, _, _ = env.step(action)
    total_reward += reward
    if done:
        break
print(f"Total reward: {total_reward}")
```

---

## Summary

| Strategy | Advantages | Disadvantages |
|----------|--------|-------------|
| ε-greedy | Simple, effective | Uniform random exploration |
| ε-decay | Balances explore/exploit | Need to tune decay rate |
| UCB | Principled, no ε | Deterministic |
| Thompson | Bayesian optimal | Computational costs |
| Boltzmann | Smooth, temperature control | Sensitive to scale |
