---
id: 019d8b32-bb06-7006-c006-ee0600000006
title: "Bài 6: Policy Gradient — REINFORCE & Actor-Critic"
slug: bai-6-policy-gradient-actor-critic
description: >-
  Policy gradient theorem. REINFORCE algorithm. Baseline & variance reduction. Actor-Critic. A2C. Hands-on CartPole, LunarLander.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Deep Reinforcement Learning — Neural Networks meet RL"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

**Policy Gradient** methods trực tiếp optimize policy π(a|s;θ) — thay vì học value function rồi derive policy. Ưu điểm: handle continuous actions, stochastic policies, và convergence guarantees.

---

## 1. Policy Gradient Theorem

$$\nabla_\theta J(\theta) = \mathbb{E}_{\pi_\theta}[\nabla_\theta \log \pi_\theta(a|s) \cdot G_t]$$

**Intuition**: Tăng probability của actions dẫn đến high return, giảm probability của actions dẫn đến low return.

---

## 2. REINFORCE Algorithm

```python
import torch
import torch.nn as nn
from torch.distributions import Categorical

class PolicyNetwork(nn.Module):
    def __init__(self, state_dim, action_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(state_dim, 128),
            nn.ReLU(),
            nn.Linear(128, action_dim),
            nn.Softmax(dim=-1),
        )
    
    def forward(self, x):
        return self.net(x)

def reinforce(env, policy_net, optimizer, num_episodes, gamma=0.99):
    for episode in range(num_episodes):
        log_probs = []
        rewards = []
        state, _ = env.reset()
        done = False
        
        while not done:
            probs = policy_net(torch.FloatTensor(state))
            dist = Categorical(probs)
            action = dist.sample()
            log_probs.append(dist.log_prob(action))
            
            state, reward, terminated, truncated, _ = env.step(action.item())
            rewards.append(reward)
            done = terminated or truncated
        
        # Compute discounted returns
        returns = []
        G = 0
        for r in reversed(rewards):
            G = r + gamma * G
            returns.insert(0, G)
        returns = torch.FloatTensor(returns)
        returns = (returns - returns.mean()) / (returns.std() + 1e-8)
        
        # Policy gradient loss
        loss = sum(-lp * G for lp, G in zip(log_probs, returns))
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
```

---

## 3. Baseline & Variance Reduction

Dùng baseline b(s) để giảm variance mà không thay đổi expected gradient:

$$\nabla_\theta J(\theta) = \mathbb{E}[\nabla_\theta \log \pi_\theta(a|s) \cdot (G_t - b(s))]$$

---

## 4. Actor-Critic

```python
class ActorCritic(nn.Module):
    def __init__(self, state_dim, action_dim):
        super().__init__()
        self.shared = nn.Sequential(nn.Linear(state_dim, 128), nn.ReLU())
        self.actor = nn.Sequential(nn.Linear(128, action_dim), nn.Softmax(dim=-1))
        self.critic = nn.Linear(128, 1)
    
    def forward(self, x):
        feat = self.shared(x)
        return self.actor(feat), self.critic(feat)

def actor_critic_update(model, optimizer, state, action, reward, next_state, done, gamma):
    probs, value = model(torch.FloatTensor(state))
    _, next_value = model(torch.FloatTensor(next_state))
    
    # Advantage = TD error
    advantage = reward + gamma * next_value * (1 - done) - value
    
    # Actor loss
    dist = Categorical(probs)
    actor_loss = -dist.log_prob(torch.tensor(action)) * advantage.detach()
    
    # Critic loss
    critic_loss = advantage.pow(2)
    
    loss = actor_loss + 0.5 * critic_loss
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
```

---

## 5. A2C — Advantage Actor-Critic

A2C = synchronous, multiple workers → reduce variance + faster training.

---

## Tổng kết

| Method | Type | Variance | Bias | Online |
|--------|------|----------|------|--------|
| REINFORCE | Policy | High | None | ❌ |
| REINFORCE + baseline | Policy | Medium | None | ❌ |
| Actor-Critic | Both | Low | Some | ✅ |
| A2C | Both | Lower | Some | ✅ |
