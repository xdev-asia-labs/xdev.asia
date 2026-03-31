---
id: 019d8b32-bb04-7004-c004-ee0400000004
title: "Bài 4: Q-Learning Deep Dive & Multi-Armed Bandits"
slug: bai-4-q-learning-bandits
description: >-
  Q-Learning algorithm chi tiết. ε-greedy exploration. Multi-Armed Bandit problem. UCB, Thompson Sampling. Hands-on Taxi environment.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Nền tảng RL — Markov Decision Process & Tabular Methods"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

**Q-Learning** là off-policy TD control algorithm — nền tảng cho DQN và mọi value-based deep RL. **Multi-Armed Bandits** là simplified RL tập trung vào exploration vs exploitation.

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
|---|-------|------------|
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

## Tổng kết

| Strategy | Ưu điểm | Nhược điểm |
|----------|---------|------------|
| ε-greedy | Simple, effective | Uniform random exploration |
| ε-decay | Balances explore/exploit | Need to tune decay rate |
| UCB | Principled, no ε | Deterministic |
| Thompson | Bayesian optimal | Computational cost |
| Boltzmann | Smooth, temperature control | Sensitive to scale |
