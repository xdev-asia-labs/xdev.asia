---
id: 019d8b32-bb08-7008-c008-ee0800000008
title: 第 8 課：SAC 和高階演算法 — Off-Policy Deep RL
slug: bai-8-sac-advanced-algorithms
description: SAC：Soft Actor-Critic — 最大熵 RL。 TD3：雙延遲 DDPG。連續的行動空間。 DDPG。基於模型的強化學習概述。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 第 2 部分：深度強化學習 — 神經網路與 RL 的結合
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 強化學習：從基礎到高級
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1107" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1107)"/>

  <!-- Decorations -->
  <g>
    <circle cx="865" cy="105" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="630" cy="130" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="895" cy="155" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="660" cy="180" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="925" cy="205" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="195" x2="1100" y2="275" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="225" x2="1050" y2="295" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="970.9807621135332,130 970.9807621135332,160 945,175 919.0192378864668,160 919.0192378864668,130 945,115" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 人工智慧與機器學習 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：SAC 與高階演算法 —</tspan>
      <tspan x="60" dy="42">離保單深盧比</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：深度強化學習 — 神經網路與 RL 的結合</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**SAC（Soft Actor-Critic）**是一種用於連續動作空間的最先進的離策略演算法 - 將最大熵目標與 Actor-Critic 結合。 SAC 自動調節溫度，穩定且樣品效率高。

---

## 1. 最大熵 RL

$$\pi^* = \arg\max_\pi \sum_t \mathbb{E}_{\pi}[r(s_t, a_t) + \alpha \mathcal{H}(\pi(\cdot|s_t))]$$

**關鍵見解**：平衡獎勵最大化和熵（探索）→ 穩健的政策。

---

## 2.SAC 元件

```python
class SACActorContinuous(nn.Module):
    """Gaussian policy for continuous actions"""
    def __init__(self, state_dim, action_dim, hidden=256):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(state_dim, hidden), nn.ReLU(),
            nn.Linear(hidden, hidden), nn.ReLU(),
        )
        self.mean = nn.Linear(hidden, action_dim)
        self.log_std = nn.Linear(hidden, action_dim)
    
    def forward(self, state):
        feat = self.net(state)
        mean = self.mean(feat)
        log_std = self.log_std(feat).clamp(-20, 2)
        return mean, log_std
    
    def sample(self, state):
        mean, log_std = self.forward(state)
        std = log_std.exp()
        dist = torch.distributions.Normal(mean, std)
        x = dist.rsample()  # Reparameterization trick
        action = torch.tanh(x)
        log_prob = dist.log_prob(x) - torch.log(1 - action.pow(2) + 1e-6)
        return action, log_prob.sum(-1)
```

### 雙 Q 網絡

```python
class TwinQNetwork(nn.Module):
    def __init__(self, state_dim, action_dim, hidden=256):
        super().__init__()
        self.q1 = nn.Sequential(
            nn.Linear(state_dim + action_dim, hidden), nn.ReLU(),
            nn.Linear(hidden, hidden), nn.ReLU(),
            nn.Linear(hidden, 1),
        )
        self.q2 = nn.Sequential(
            nn.Linear(state_dim + action_dim, hidden), nn.ReLU(),
            nn.Linear(hidden, hidden), nn.ReLU(),
            nn.Linear(hidden, 1),
        )
    
    def forward(self, state, action):
        x = torch.cat([state, action], dim=-1)
        return self.q1(x), self.q2(x)
```

---

## 3. TD3 — 雙重延遲 DDPG

DDPG 的 3 個技巧：
1. **雙批評者**：取最小值→減少高估
2. **延遲策略更新**：更新參與者少於批評者
3. **目標策略平滑**：為目標操作添加噪音

---

## 4.演算法選擇指南

|演算法|行動空間|開/關政策|樣品效率 |最適合 |
|------------|-------------|-------------|--------------------|----------|
| DQN |離散|政策外 |好 |遊戲 |
|聚苯醚 |兩者 |在保政策 |低|通用|
|策略諮詢委員會 |連續|政策外 |高|機器人 |
| TD3 |連續 |政策外 |高|機器人 |
| DDPG|連續|政策外 |好 |簡單連續 |

---

## 5. 基於模型的強化學習概述

學習環境模型 → 計劃，而非無模型：

|方法|學習模型？ |計劃？ |範例|
|----------|-------------|--------|---------|
|無模型|沒有 |沒有 | DQN、PPO |
|基於模型|是的 |是的 |夢想家，MuZero |
|混合動力|是的 |是的 |世界模特兒|

---

## 總結

|概念 |描述 |
|--------|--------|
|策略諮詢委員會 |最大熵 + 雙重批評者 + 自動溫度 |
| TD3 |雙批評家+延遲+平滑|
|熵|鼓勵勘探，政策穩健|
|政策外 |取樣效率高，重播緩衝|
