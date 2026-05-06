---
id: 019d8b32-bb14-7014-c014-ee1400000014
title: 'レッスン 14: マルチエージェント RL — 協力と競争'
slug: bai-14-multi-agent-rl
description: >-
  マルチエージェント設定: 協力、競争、混合。 MAPPO、QMIX アルゴリズム。 PettingZoo
  フレームワーク。ゲーム理論の基礎。突発的な行動。セルフプレイ。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 4: RLHF、LLM の調整と生産'
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: '強化学習: 基礎から高度まで'
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6593" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6593)"/>

  <!-- Decorations -->
  <g>
    <circle cx="991" cy="143" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="882" cy="94" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="773" cy="45" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="664" cy="256" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="1055" cy="207" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="93" x2="1100" y2="173" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="123" x2="1050" y2="193" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1067.2487113059642,229 1067.2487113059642,257 1043,271 1018.7512886940357,257 1018.7512886940357,229 1043,215" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI と ML — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: マルチエージェント RL — 協力と</tspan>
      <tspan x="60" dy="42">競争</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化学習: 基礎から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: RLHF、LLM の調整と生産</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**マルチエージェント RL (MARL)** — 複数のエージェントが同じ環境で対話する場合。協力的 (チーム) から競争的 (敵対的)、そして動機が混在するシナリオまで。

---

## 1. MARLの設定

|設定 |報酬体系 |例 |チャレンジ |
|----------|------|----------|-----------|
|協同組合 |共有特典 |ロボットチーム |単位の割り当て |
|競争力 |ゼロサム |チェス、囲碁 |非定常 |
|混合 |個人 + 共有 |交通、市場 |平衡 |

---

## 2. PettingZoo フレームワーク

```python
from pettingzoo.mpe import simple_spread_v3

# Parallel API — all agents act simultaneously
env = simple_spread_v3.parallel_env(N=3, max_cycles=25)
observations, infos = env.reset()

while env.agents:
    actions = {
        agent: env.action_space(agent).sample()
        for agent in env.agents
    }
    observations, rewards, terminations, truncations, infos = env.step(actions)

env.close()
```

---

## 3. MAPPO — マルチエージェント PPO

```python
class MAPPOAgent:
    def __init__(self, obs_dim, act_dim, global_state_dim):
        # Decentralized actor
        self.actor = PolicyNetwork(obs_dim, act_dim)
        # Centralized critic (sees global state)
        self.critic = ValueNetwork(global_state_dim)
    
    def act(self, local_obs):
        return self.actor(local_obs)  # Only local observation
    
    def evaluate(self, global_state):
        return self.critic(global_state)  # Full state info
```

**CTDE**: 集中トレーニング、分散実行
- トレーニング: 批評家はすべてを見ています
- 実行: アクターはローカルの観察のみを参照します。

---

## 4. セルフプレイ

エージェント自身のコピーと対戦してエージェントをトレーニングします。

```python
def self_play_training(env, agent, num_games):
    for game in range(num_games):
        obs = env.reset()
        opponent = agent.clone()  # Create copy
        
        while not done:
            action_agent = agent.act(obs["player_1"])
            action_opponent = opponent.act(obs["player_2"])
            obs, rewards, done, _ = env.step({
                "player_1": action_agent,
                "player_2": action_opponent,
            })
        
        agent.update(trajectory)
        # Periodically update opponent pool
        if game % 100 == 0:
            opponent_pool.append(agent.clone())
```

---

## 5. 緊急の行動

マルチエージェントのトレーニングでは、多くの場合、驚くべき創発的な行動が生成されます。
- **コミュニケーション**: エージェントがプロトコルを開発
- **専門分野**: 役割の差別化
- **欺瞞**: 競争環境における戦略的な隠蔽

---

## 概要

|アルゴリズム |設定 |主要なアイデア |
|----------|-----------|----------|
|マッポ |協同組合 |集中化された批評家と分散化されたアクター |
| QMIX |協同組合 |単調値分解 |
|自動演奏 |競争力 |自分自身と対戦する |
|マッドペグ |混合 |中央集中型の批評家を備えたマルチエージェント DDPG |
