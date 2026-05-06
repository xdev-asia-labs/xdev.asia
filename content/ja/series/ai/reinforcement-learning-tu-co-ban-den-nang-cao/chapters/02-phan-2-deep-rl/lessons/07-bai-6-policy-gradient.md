---
id: 019d8b32-bb06-7006-c006-ee0600000006
title: 'レッスン 6: ポリシーの勾配 — REINFORCE とアクター - 批評家'
slug: bai-6-policy-gradient-actor-critic
description: >-
  政策勾配定理。 REINFORCE アルゴリズム。ベースラインと分散の削減。俳優兼評論家。 A2C。 CartPole、LunarLander
  を実際に体験してみませんか。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: 深層強化学習 — ニューラル ネットワークと RL の出会い'
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: '強化学習: 基礎から高度まで'
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3446" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3446)"/>

  <!-- Decorations -->
  <g>
    <circle cx="956" cy="118" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="812" cy="234" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="668" cy="90" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1024" cy="206" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="880" cy="62" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <polygon points="966.5788383248864,121.5 966.5788383248864,154.5 938,171 909.4211616751136,154.5 909.4211616751135,121.50000000000001 938,105" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: ポリシーの勾配 — 強化と</tspan>
      <tspan x="60" dy="42">俳優・評論家</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化学習: 基礎から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 深層強化学習 — ニューラル ネットワークと RL の出会い</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**ポリシー勾配** メソッドは、値関数を学習してポリシーを導出する代わりに、ポリシー π(a|s;θ) を直接最適化します。利点: 継続的なアクション、確率的ポリシー、および収束保証を処理します。

---

## 1. ポリシー勾配定理

$$\nabla_\theta J(\theta) = \mathbb{E}_{\pi_\theta}[\nabla_\theta \log \pi_\theta(a|s) \cdot G_t]$$

**直感**: アクションの確率を高めると高いリターンが得られ、アクションの確率を下げると低いリターンが得られます。

---

## 2. REINFORCE アルゴリズム

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

## 3. ベースラインと分散の削減

ベースライン b(s) を使用して、予想される勾配を変更せずに分散を削減します。

$$\nabla_\theta J(\theta) = \mathbb{E}[\nabla_\theta \log \pi_\theta(a|s) \cdot (G_t - b(s))]$$

---

## 4. 俳優兼批評家

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

## 5. A2C — アドバンテージアクター兼批評家

A2C = 同期、複数のワーカー → 差異の削減 + トレーニングの高速化。

---

## 概要

|方法 |タイプ |分散 |バイアス |オンライン |
|----------|----------|----------|----------|----------|
|補強する |ポリシー |高 |なし | ❌ |
|補強 + ベースライン |ポリシー |中 |なし | ❌ |
|俳優・評論家 |両方 |低い |いくつか | ✅ |
| A2C |両方 |下 |いくつか | ✅ |
