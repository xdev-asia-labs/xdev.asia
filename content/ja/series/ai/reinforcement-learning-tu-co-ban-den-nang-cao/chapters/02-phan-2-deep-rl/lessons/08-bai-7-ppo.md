---
id: 019d8b32-bb07-7007-c007-ee0700000007
title: 'レッスン 7: PPO — 近接ポリシーの最適化'
slug: bai-7-ppo
description: 信頼領域メソッド。 PPO クリップの目標。一般化利点推定 (GAE)。完全な PPO の導入。 PPO、TRPO、A3C を比較します。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 2: 深層強化学習 — ニューラル ネットワークと RL の出会い'
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: '強化学習: 基礎から高度まで'
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8747" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8747)"/>

  <!-- Decorations -->
  <g>
    <circle cx="810" cy="60" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1020" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="730" cy="80" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="940" cy="90" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="100" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="180" x2="1100" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="210" x2="1050" y2="280" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.3108891324554,162.5 1010.3108891324554,197.5 980,215 949.6891108675446,197.5 949.6891108675446,162.5 980,145" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: PPO — 近接ポリシーの最適化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化学習: 基礎から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 深層強化学習 — ニューラル ネットワークと RL の出会い</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**PPO (Proximal Policy Optimization)** は、ゲーム AI (OpenAI Five、Dota 2) から RLHF (ChatGPT) に至るまで、最新の RL で最も使用されているアルゴリズムです。 PPO はシンプルで安定しており、効果的です。

---

## 1. 動機: なぜ PPO が必要なのでしょうか?

元の勾配ポリシーには次の問題があります。
- **ステップが小さすぎる**: 遅い
- **大きすぎるステップ**: 政策の崩壊

PPO は、ポリシーの更新を「信頼できる領域」に制限し、一度にあまり変更しないようにします。

---

## 2. PPO クリップの目的

$$L^{CLIP}(\theta) = \mathbb{E}[\min(r_t(\theta)\hat{A}_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon)\hat{A}_t)]$$

その中で:
- $r_t(\theta) = \frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{old}}(a_t|s_t)}$ — 確率比
- $\hat{A}_t$ — 推定アドバンテージ
- $\epsilon$ — クリッピング範囲 (通常は 0.2)

---

## 3. GAE — 一般化された利点の推定

$$\hat{A}_t^{GAE(\gamma,\lambda)} = \sum_{l=0}^{\infty} (\gamma\lambda)^l \delta_{t+l}$$

```python
def compute_gae(rewards, values, dones, gamma=0.99, lam=0.95):
    advantages = []
    gae = 0
    for t in reversed(range(len(rewards))):
        if t == len(rewards) - 1:
            next_value = 0
        else:
            next_value = values[t + 1]
        delta = rewards[t] + gamma * next_value * (1 - dones[t]) - values[t]
        gae = delta + gamma * lam * (1 - dones[t]) * gae
        advantages.insert(0, gae)
    return torch.FloatTensor(advantages)
```

---

## 4. 完全な PPO の実装

```python
class PPO:
    def __init__(self, state_dim, action_dim, lr=3e-4, gamma=0.99,
                 lam=0.95, clip_eps=0.2, epochs=10, batch_size=64):
        self.actor_critic = ActorCritic(state_dim, action_dim)
        self.optimizer = torch.optim.Adam(self.actor_critic.parameters(), lr=lr)
        self.gamma = gamma
        self.lam = lam
        self.clip_eps = clip_eps
        self.epochs = epochs
        self.batch_size = batch_size
    
    def update(self, states, actions, rewards, dones, old_log_probs, values):
        advantages = compute_gae(rewards, values, dones, self.gamma, self.lam)
        returns = advantages + torch.FloatTensor(values)
        advantages = (advantages - advantages.mean()) / (advantages.std() + 1e-8)
        
        for _ in range(self.epochs):
            probs, new_values = self.actor_critic(states)
            dist = Categorical(probs)
            new_log_probs = dist.log_prob(actions)
            entropy = dist.entropy().mean()
            
            # PPO-Clip
            ratio = (new_log_probs - old_log_probs).exp()
            surr1 = ratio * advantages
            surr2 = torch.clamp(ratio, 1 - self.clip_eps, 1 + self.clip_eps) * advantages
            policy_loss = -torch.min(surr1, surr2).mean()
            
            # Value loss
            value_loss = nn.MSELoss()(new_values.squeeze(), returns)
            
            # Total loss
            loss = policy_loss + 0.5 * value_loss - 0.01 * entropy
            
            self.optimizer.zero_grad()
            loss.backward()
            nn.utils.clip_grad_norm_(self.actor_critic.parameters(), 0.5)
            self.optimizer.step()
```

---

## 5. PPO 対 TRPO 対 A3C

|特長 | PPO | TRPO | A3C |
|----------|-----|----------|-----|
|シンプルさ | ✅ シンプル | ❌ 複雑 | ✅ シンプル |
|パフォーマンス |高 |高 |中 |
|安定性 | ✅ | ✅ | ❌ |
|並列化可能 | ✅ | ✅ | ✅ |
|デフォルトの選択肢 | ✅ |いいえ |いいえ |

---

## 概要

|コンセプト |説明 |
|----------|----------|
| PPOクリップ |クリッピングによるポリシー変更の制限 |
|ゲイ |バランスの取れたバイアス分散優位性の推定 |
|エントロピーボーナス |探検を奨励する |
|複数のエポック |収集したデータを何度も再利用 |
