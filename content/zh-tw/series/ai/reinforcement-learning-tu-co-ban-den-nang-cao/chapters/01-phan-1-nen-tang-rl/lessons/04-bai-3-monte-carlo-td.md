---
id: 019d8b32-bb03-7003-c003-ee0300000003
title: 第 3 課：蒙地卡羅和時間差分學習
slug: bai-3-monte-carlo-td-learning
description: 無模型方法。蒙特卡洛預測與控制。 TD(0) 學習。 SARSA 策略 TD 控制。偏差-方差權衡。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：強化學習基礎 — 馬可夫決策過程與表格方法
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 強化學習：從基礎到高級
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1330" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1330)"/>

  <!-- Decorations -->
  <g>
    <circle cx="792" cy="126" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="984" cy="158" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="676" cy="190" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="868" cy="222" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="254" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="951.507041555162,95.5 951.507041555162,136.5 916,157 880.492958444838,136.5 880.492958444838,95.50000000000001 916,75" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：蒙地卡羅和時間差異</tspan>
      <tspan x="60" dy="42">學習</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：強化學習基礎 — 馬可夫決策過程與表格方法</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**蒙特卡羅**和**時間差分 (TD)** 是兩種核心的無模型方法 - 無需知道轉移機率。這是從 DP 到實際 RL 的重要轉變。

---

## 1. 蒙地卡羅預測

透過平均多個情節的回報來估計 V(s)：

```python
from collections import defaultdict

def mc_prediction(policy, env, num_episodes, gamma=1.0):
    returns_sum = defaultdict(float)
    returns_count = defaultdict(int)
    V = defaultdict(float)
    
    for _ in range(num_episodes):
        episode = generate_episode(policy, env)
        G = 0
        visited_states = set()
        
        for t in reversed(range(len(episode))):
            state, action, reward = episode[t]
            G = gamma * G + reward
            
            if state not in visited_states:  # First-visit MC
                visited_states.add(state)
                returns_sum[state] += G
                returns_count[state] += 1
                V[state] = returns_sum[state] / returns_count[state]
    return V
```

---

## 2. 蒙地卡羅控制

MC+ε-貪婪策略改進：

```python
def mc_control(env, num_episodes, gamma=1.0, epsilon=0.1):
    Q = defaultdict(lambda: np.zeros(env.action_space.n))
    returns_sum = defaultdict(float)
    returns_count = defaultdict(int)
    
    for _ in range(num_episodes):
        episode = generate_episode_epsilon_greedy(Q, env, epsilon)
        G = 0
        
        for t in reversed(range(len(episode))):
            state, action, reward = episode[t]
            G = gamma * G + reward
            sa_pair = (state, action)
            returns_sum[sa_pair] += G
            returns_count[sa_pair] += 1
            Q[state][action] = returns_sum[sa_pair] / returns_count[sa_pair]
    return Q
```

---

## 3. TD(0) 學習

每一步後更新 V（無需等待劇集結束）：

$$V(s) \leftarrow V(s) + \alpha [r + \gamma V(s') - V(s)]$$

```python
def td_prediction(policy, env, num_episodes, alpha=0.1, gamma=0.99):
    V = defaultdict(float)
    
    for _ in range(num_episodes):
        state, _ = env.reset()
        done = False
        while not done:
            action = policy(state)
            next_state, reward, terminated, truncated, _ = env.step(action)
            done = terminated or truncated
            
            # TD update
            td_target = reward + gamma * V[next_state] * (1 - done)
            td_error = td_target - V[state]
            V[state] += alpha * td_error
            
            state = next_state
    return V
```

---

## 4. SARSA — 策略 TD 控制

```python
def sarsa(env, num_episodes, alpha=0.1, gamma=0.99, epsilon=0.1):
    Q = np.zeros((env.observation_space.n, env.action_space.n))
    
    for _ in range(num_episodes):
        state, _ = env.reset()
        action = epsilon_greedy(Q, state, epsilon)
        done = False
        
        while not done:
            next_state, reward, terminated, truncated, _ = env.step(action)
            done = terminated or truncated
            next_action = epsilon_greedy(Q, next_state, epsilon)
            
            # SARSA update: Q(s,a) += α[r + γQ(s',a') - Q(s,a)]
            Q[state, action] += alpha * (
                reward + gamma * Q[next_state, next_action] * (1-done) - Q[state, action]
            )
            state, action = next_state, next_action
    return Q
```

---

## 5. MC 與 TD 比較

|方面|蒙地卡羅 |達陣 (0) |
|--------|-------------|--------|
|無模型| ✅ | ✅ |
|線上 | ❌（需要完整劇集）| ✅（每一步）|
|偏見|公正|有偏見（引導）|
|方差 |高|低|
|適用於連續任務 | ❌ | ✅ |

---

## 總結

|方法|關鍵想法|更新 |
|--------|----------|--------|
|主持人 |平均完全回報|劇集結束後 |
| 達陣 (0) |從下一個狀態引導 |每一步|
|非典 |同策略 TD 控制 | Q(s,a) 與實際的下一步行動 |
