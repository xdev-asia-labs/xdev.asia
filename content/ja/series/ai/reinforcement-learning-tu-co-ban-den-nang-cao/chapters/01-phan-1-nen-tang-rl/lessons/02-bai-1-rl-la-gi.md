---
id: 019d8b32-bb01-7001-c001-ee0100000001
title: 'レッスン 1: 強化学習とは何ですか? — エージェント、環境、報酬'
slug: bai-1-reinforcement-learning-la-gi
description: RL を定義し、教師あり/教師なし/RL を比較します。エージェントと環境の相互作用ループ。状態、アクション、報酬、ポリシー、価値関数。民主党。探索と搾取。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 1: RL の基礎 — マルコフの意思決定プロセスと表形式の手法'
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: '強化学習: 基礎から高度まで'
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1020" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1020)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1074" cy="192" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="1048" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1022" cy="40" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="996" cy="94" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="148" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="152" x2="1100" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="182" x2="1050" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1025.38268590218,188.5 1025.38268590218,215.5 1002,229 978.6173140978201,215.5 978.6173140978201,188.5 1002,175" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI と ML — レッスン 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: 強化学習とは何ですか? —</tspan>
      <tspan x="60" dy="42">エージェント、環境、報酬</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化学習: 基礎から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: RL の基礎 — マルコフの意思決定プロセスと表形式の手法</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**強化学習 (RL)** は機械学習の 3 番目のパラダイムです。エージェントは、累積報酬を最大化するために環境内でどのように行動するかを学習します。

---

## 1. RL vs 監視あり vs 監視なし

|パラダイム |データ |フィードバック |例 |
|----------|----------|----------|----------|
|監修 | (x, y) ペア |ラベル |画像分類 |
|監督なし | x のみ |なし |クラスタリング |
| ＲＬ |状態、アクション |報酬 (遅延) |ゲームプレイ |

### RL のユニークな特性

- **連続的な意思決定**: 将来に影響を与える決定
- **報酬の遅延**: アクションが良いか悪いかすぐにはわかりません
- **探索 vs 活用**: 新しいことを試す vs 既知の知識を活用する
- **スーパーバイザーなし**: 報酬シグナルのみ

---

## 2. エージェントと環境の対話ループ

すべての RL 問題はループの後に続きます。

```
Agent quan sát state s_t
  → Chọn action a_t theo policy π
  → Environment trả về reward r_{t+1} và state mới s_{t+1}
  → Lặp lại
```

### 例: ロボットが迷路を通過する

```python
import gymnasium as gym

env = gym.make("FrozenLake-v1", render_mode="human")
state, info = env.reset()

for step in range(100):
    action = env.action_space.sample()  # Random policy
    next_state, reward, terminated, truncated, info = env.step(action)
    print(f"State: {state}, Action: {action}, Reward: {reward}")
    
    if terminated or truncated:
        state, info = env.reset()
    else:
        state = next_state
```

---

## 3. 中心となる概念

### 州
環境の現在の状態を完全に説明します。

### アクション (a)
離散 (左/右) または連続 (回転角度) のどちらのエージェントを実行するかを決定します。

### 報酬 (r)
環境からのスカラー応答 — エージェントは総報酬を最大化したいと考えています。

### ポリシー (π)
状態→アクションのマッピング戦略:
- **決定論的**: π(s) = a
- **確率的**: π(a|s) = P(a|s)

### 値関数 V(s)
状態 s から開始した場合に期待される累積報酬:

$$V^\pi(s) = \mathbb{E}_\pi\left[\sum_{t=0}^{\infty} \gamma^t r_{t+1} | s_0 = s\right]$$

### Q関数 Q(s,a)
状態 s でアクション a を選択した場合に期待される累積報酬:

$$Q^\pi(s,a) = \mathbb{E}_\pi\left[\sum_{t=0}^{\infty} \gamma^t r_{t+1} | s_0 = s、a_0 = a\right]$$

---

## 4. マルコフ決定プロセス (MDP)

MDP は RL の標準的な数学的フレームワークです: **(S, A, P, R, γ)**

|成分 |記号 |説明 |
|----------|-----------|----------|
|州 | S |すべての状態のコレクション |
|アクション |あ |すべてのアクションのコレクション |
|移行 | P(s'|s,a) |状態遷移確率 |
|報酬 | R(s,a,s') |報酬関数 |
|割引 | γ ∈ [0,1] |割引率 |

**マルコフ特性**: 未来は現在のみに依存し、過去には依存しません。

---

## 5. 探索 vs 搾取

|戦略 |説明 |トレードオフ |
|----------|----------|----------|
|探検 |新しいアクションを試す |より良い戦略を見つける |
|搾取 |最もよく知られているアクションを使用します |短期的な報酬を最大化する |

バランス調整方法:
- **ε-greedy**: 確率 ε でランダム
- **UCB**: 信頼限界の上限
- **トンプソン サンプリング**: ベイジアン アプローチ

---

## 概要

|コンセプト |説明 |
|----------|----------|
| ＲＬ |エージェントは環境とのインタラクションから学習します |
| MDP |数学のフレームワーク: 状態、アクション、報酬 |
|ポリシー |アクション選択戦略 |
|値 |予想される累積報酬 |
|探検 |新しい試みと活用のバランス |
