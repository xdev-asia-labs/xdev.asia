---
id: 019d8b32-bb05-7005-c005-ee0500000005
title: 'レッスン 5: DQN — ディープ Q ネットワークとエクスペリエンス リプレイ'
slug: bai-5-dqn-deep-q-network
description: >-
  ニューラルネットワークによる関数近似。 DQN
  アーキテクチャ。リプレイバッファーを体験してください。ターゲットネットワーク。ダブルDQN、決闘DQN、レインボーDQN。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 2: 深層強化学習 — ニューラル ネットワークと RL の出会い'
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: '強化学習: 基礎から高度まで'
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6049" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6049)"/>

  <!-- Decorations -->
  <g>
    <circle cx="656" cy="58" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="712" cy="154" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="768" cy="250" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="824" cy="86" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="880" cy="182" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="138" x2="1100" y2="218" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="168" x2="1050" y2="238" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1016.5788383248864,171.5 1016.5788383248864,204.5 988,221 959.4211616751136,204.5 959.4211616751135,171.5 988,155" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: DQN — ディープ Q ネットワークと経験</tspan>
      <tspan x="60" dy="42">リプレイ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化学習: 基礎から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 深層強化学習 — ニューラル ネットワークと RL の出会い</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**DQN (Deep Q-Network)** — DeepMind が Q テーブルの代わりにニューラル ネットワークを使用し、Atari ゲームで超人的なパフォーマンスを達成したときの大きな飛躍 (Nature、2015)。

---

## 1. Q テーブルから DQN へ

| Qテーブル | DQN |
|--------|-----|
| Q(s,a) をテーブルに格納 |ニューラル ネットワークは Q(s,a;θ) | を近似します。
| | 離散的な小さな状態空間でのみ機能します。連続した高次元の状態を扱う |
|正確 |おおよそ |

---

## 2. DQN アーキテクチャ

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

## 3. 体験リプレイ

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

## 4. DQN トレーニング ループ

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

## 5. DQN の改善

### ダブル DQN
アクションの選択と評価を分離 → 過大評価を減らす:

```python
# Double DQN target
best_actions = self.online_net(next_states).argmax(1)
next_q = self.target_net(next_states).gather(1, best_actions.unsqueeze(1)).squeeze()
```

### 決闘DQN
値 V(s) と利点 A(s,a) を分離します。

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

## 概要

|改善点 |問題解決 |
|----------|--------|
|体験リプレイ |連続サンプル間の相関 |
|ターゲットネットワーク |トレーニングの不安定性 (ターゲットの移動) |
|ダブルDQN | Q値の過大評価 |
| DQNとの決闘 |より良い価値推定 |
|優先再生 |重要な経験のサンプルをもっと見る |
|レインボー |すべての改善点を組み合わせる |
