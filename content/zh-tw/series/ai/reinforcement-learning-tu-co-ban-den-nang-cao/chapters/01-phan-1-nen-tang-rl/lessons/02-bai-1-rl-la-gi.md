---
id: 019d8b32-bb01-7001-c001-ee0100000001
title: 第一課：什麼是強化學習？ — 代理、環境與獎勵
slug: bai-1-reinforcement-learning-la-gi
description: 定義 RL，比較監督/無監督/RL。代理-環境交互循環。狀態、行動、獎勵、策略、價值函數。 MDP。探索與利用。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 第 1 部分：強化學習基礎 — 馬可夫決策過程與表格方法
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 強化學習：從基礎到高級
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第一課：什麼是強化學習？ —</tspan>
      <tspan x="60" dy="42">代理、環境和獎勵</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：強化學習基礎 — 馬可夫決策過程與表格方法</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**強化學習 (RL)** 是機器學習的第三個範例 - 代理學習如何在環境中採取行動以最大化累積獎勵。

---

## 1. 強化學習 vs 有監督 vs 無監督

|範式|資料|回饋 |範例|
|----------|--------|----------|--------|
|監督| (x, y) 對 |標籤|圖像分類|
|無人監督 |僅限 x |無 |聚類|
| RL |狀態、行動 |獎勵（延遲）|遊戲玩法|

### 強化學習的獨特特徵

- **順序決策**：影響未來的決策
- **延遲獎勵**：無法立即知道該行為是好還是壞
- **探索與利用**：嘗試新事物與利用已知知識
- **無監督者**：僅獎勵訊號

---

## 2. 智能體-環境互動循環

每個強化學習問題都遵循一個循環：

```
Agent quan sát state s_t
  → Chọn action a_t theo policy π
  → Environment trả về reward r_{t+1} và state mới s_{t+1}
  → Lặp lại
```

### 範例：機器人穿越迷宮

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

## 3.核心概念

### 州
充分描述了環境的當前狀態。

### 行動（一）
決定執行哪個代理 - 離散（左/右）或連續（旋轉角度）。

### 獎勵 (r)
來自環境的標量響應－智能體希望最大化總獎勵。

### 政策 (π)
狀態→動作映射策略：
- **確定性**：π(s) = a
- **隨機**：π(a|s) = P(a|s)

### 值函數 V(s)
從狀態 s 開始時的期望累積獎勵：

$$V^\pi(s) = \mathbb{E}_\pi\left[\sum_{t=0}^{\infty} \gamma^t r_{t+1} | s_0 = s\右]$$

### Q-函數 Q(s,a)
在狀態 s 選擇動作 a 時的期望累積獎勵：

$$Q^\pi(s,a) = \mathbb{E}_\pi\left[\sum_{t=0}^{\infty} \gamma^t r_{t+1} | s_0 = s, a_0 = a\右]$$

---

## 4.馬可夫決策過程（MDP）

MDP 是 RL 的標準數學架構：**(S, A, P, R, γ)**

|成分|符號|描述 |
|------------|---------|--------|
|州 | S |各州合集|
|行動|一個 |所有動作集合|
|過渡 | P(s'|s,a) | P(s'|s,a) |狀態轉移機率|
|獎勵 | R(s,a,s') | R(s,a,s') |獎勵功能|
|折扣| γ ∈ [0,1] |折扣係數|

**馬可夫性質**：未來只取決於現在，而不取決於過去。

---

## 5. 探索與利用

|戰略|描述 |權衡|
|------------|--------|------------|
|探索|嘗試新動作 |尋找更好的策略 |
|剝削|使用最著名的動作 |短期回報最大化 |

平衡方法：
- **ε-貪婪**：機率為 ε 的隨機
- **UCB**：信賴上限
- **湯普森採樣**：貝葉斯方法

---

## 總結

|概念 |描述 |
|------------|--------|
| RL |代理人從與環境的互動中學習 |
| MDP |數學架構：狀態、行動、獎勵 |
|政策 |行動選擇策略|
|價值|預期累計獎勵 |
|探索|嘗試新事物與探索之間的平衡|
