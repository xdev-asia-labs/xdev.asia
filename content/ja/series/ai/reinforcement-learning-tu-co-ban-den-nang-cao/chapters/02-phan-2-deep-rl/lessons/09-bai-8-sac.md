---
id: 019d8b32-bb08-7008-c008-ee0800000008
title: 'レッスン 8: SAC と高度なアルゴリズム — オフポリシーのディープ RL'
slug: bai-8-sac-advanced-algorithms
description: >-
  SAC: Soft Actor-Critic — 最大エントロピー RL。 TD3: ツインディレイ DDPG。継続的なアクションスペース。
  DDPG。モデルベースの RL の概要。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 2: 深層強化学習 — ニューラル ネットワークと RL の出会い'
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: '強化学習: 基礎から高度まで'
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: SAC と高度なアルゴリズム —</tspan>
      <tspan x="60" dy="42">ポリシー外のディープ R</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化学習: 基礎から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 深層強化学習 — ニューラル ネットワークと RL の出会い</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**SAC (ソフト アクター-クリティック)** は、最大エントロピー目標とアクター-クリティックを組み合わせた、連続アクション スペース用の最先端のオフポリシー アルゴリズムです。 SAC は温度を自動的に調整し、安定しており、サンプル効率が優れています。

---

## 1. 最大エントロピー RL

$$\pi^* = \arg\max_\pi \sum_t \mathbb{E}_{\pi}[r(s_t, a_t) + \alpha \mathcal{H}(\pi(\cdot|s_t))]$$

**重要な洞察**: 報酬の最大化とエントロピー (探索) のバランス → 堅牢なポリシー。

---

## 2. SAC コンポーネント

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

### ツイン Q ネットワーク

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

## 3. TD3 — ツイン遅延 DDPG

DDPG の 3 つのトリック:
1. **双子の批判者**: 最小限にする → 過大評価を減らす
2. **ポリシー更新の遅延**: 更新アクターが批判者よりも少ない
3. **ターゲット ポリシーのスムージング**: ターゲット アクションにノイズを追加します。

---

## 4. アルゴリズムの選択ガイド

|アルゴリズム |アクションスペース |オン/オフポリシー |サンプル効率 |最適な用途 |
|----------|---------------|---------------|----------|----------|
| DQN |離散 |ポリシー外 |良い |ゲーム |
| PPO |両方 |オンポリシー |低い |汎用 |
| SAC |連続 |ポリシー外 |高 |ロボット工学 |
| TD3 |連続 |ポリシー外 |高 |ロボット工学 |
| DDPG |連続 |ポリシー外 |良い |単純な連続 |

---

## 5. モデルベースの RL の概要

モデルフリーの代わりに、環境のモデルを学習 → 計画します。

|アプローチ |モデルを学習しますか? |プラン？ |例 |
|----------|---------------|----------|----------|
|モデルフリー |いいえ |いいえ | DQN、PPO |
|モデルベース |はい |はい |ドリーマー、ミューゼロ |
|ハイブリッド |はい |はい |ワールドモデル |

---

## 概要

|コンセプト |説明 |
|----------|----------|
| SAC |最大エントロピー + 双子の批評家 + 自動温度 |
| TD3 |ツイン批評家 + 遅延 + 平滑化 |
|エントロピー |探求を奨励し、強力な政策を講じます。
|ポリシー外 |効率的なサンプル再生バッファ |
