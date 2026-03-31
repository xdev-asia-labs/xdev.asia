---
id: 019d8b32-bb05-7005-c005-ee0500000005
title: "Bài 5: DQN — Deep Q-Network & Experience Replay"
slug: bai-5-dqn-deep-q-network
description: >-
  Function approximation với neural networks. DQN architecture. Experience Replay Buffer. Target network. Double DQN, Dueling DQN, Rainbow DQN.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: Deep Reinforcement Learning — Neural Networks meet RL"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

**DQN (Deep Q-Network)** — bước nhảy vọt khi DeepMind dùng neural network thay Q-table, đạt superhuman performance trên Atari games (Nature, 2015).

---

## 1. Từ Q-Table đến DQN

| Q-Table | DQN |
|---------|-----|
| Lưu Q(s,a) trong table | Neural network xấp xỉ Q(s,a;θ) |
| Chỉ hoạt động với discrete, small state space | Hoạt động với continuous, high-dimensional states |
| Exact | Approximate |

---

## 2. DQN Architecture

```python
import torch
import torch.nn as nn

class DQN(nn.Module):
    def __init__(self, state_dim, action_dim, hidden_dim=128):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(state_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, action_dim),
        )
    
    def forward(self, x):
        return self.net(x)
```

---

## 3. Experience Replay

```python
from collections import deque
import random

class ReplayBuffer:
    def __init__(self, capacity=100_000):
        self.buffer = deque(maxlen=capacity)
    
    def push(self, state, action, reward, next_state, done):
        self.buffer.append((state, action, reward, next_state, done))
    
    def sample(self, batch_size):
        batch = random.sample(self.buffer, batch_size)
        states, actions, rewards, next_states, dones = zip(*batch)
        return (
            torch.FloatTensor(np.array(states)),
            torch.LongTensor(actions),
            torch.FloatTensor(rewards),
            torch.FloatTensor(np.array(next_states)),
            torch.FloatTensor(dones),
        )
    
    def __len__(self):
        return len(self.buffer)
```

---

## 4. DQN Training Loop

```python
class DQNAgent:
    def __init__(self, state_dim, action_dim, lr=1e-3, gamma=0.99):
        self.online_net = DQN(state_dim, action_dim)
        self.target_net = DQN(state_dim, action_dim)
        self.target_net.load_state_dict(self.online_net.state_dict())
        self.optimizer = torch.optim.Adam(self.online_net.parameters(), lr=lr)
        self.buffer = ReplayBuffer()
        self.gamma = gamma
    
    def update(self, batch_size=64):
        states, actions, rewards, next_states, dones = self.buffer.sample(batch_size)
        
        # Current Q values
        q_values = self.online_net(states).gather(1, actions.unsqueeze(1)).squeeze()
        
        # Target Q values
        with torch.no_grad():
            next_q = self.target_net(next_states).max(1)[0]
            target = rewards + self.gamma * next_q * (1 - dones)
        
        loss = nn.MSELoss()(q_values, target)
        self.optimizer.zero_grad()
        loss.backward()
        self.optimizer.step()
    
    def sync_target(self):
        self.target_net.load_state_dict(self.online_net.state_dict())
```

---

## 5. DQN Improvements

### Double DQN
Decouple action selection và evaluation → reduce overestimation:

```python
# Double DQN target
best_actions = self.online_net(next_states).argmax(1)
next_q = self.target_net(next_states).gather(1, best_actions.unsqueeze(1)).squeeze()
```

### Dueling DQN
Separate value V(s) và advantage A(s,a):

```python
class DuelingDQN(nn.Module):
    def __init__(self, state_dim, action_dim):
        super().__init__()
        self.feature = nn.Sequential(nn.Linear(state_dim, 128), nn.ReLU())
        self.value = nn.Sequential(nn.Linear(128, 64), nn.ReLU(), nn.Linear(64, 1))
        self.advantage = nn.Sequential(nn.Linear(128, 64), nn.ReLU(), nn.Linear(64, action_dim))
    
    def forward(self, x):
        feat = self.feature(x)
        val = self.value(feat)
        adv = self.advantage(feat)
        return val + adv - adv.mean(dim=1, keepdim=True)
```

---

## Tổng kết

| Improvement | Giải quyết vấn đề |
|------------|-------------------|
| Experience Replay | Correlation giữa consecutive samples |
| Target Network | Training instability (moving target) |
| Double DQN | Q-value overestimation |
| Dueling DQN | Better value estimation |
| Prioritized Replay | Sample important experiences more |
| Rainbow | Combine all improvements |
