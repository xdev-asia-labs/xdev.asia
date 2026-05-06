---
id: 019d8b32-bb14-7014-c014-ee1400000014
title: 第 14 課：多智能體強化學習 — 合作與競爭
slug: bai-14-multi-agent-rl
description: 多智能體設定：合作、競爭、混合。 MAPPO、QMIX 演算法。 PettingZoo 框架。博弈論基礎。突發行為為。自玩。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 第 4 部分：RLHF、LLM 調整和製作
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 強化學習：從基礎到高級
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：多智能體強化學習 — 合作與</tspan>
      <tspan x="60" dy="42">競爭</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：RLHF、LLM 調整和製作</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**多智能體強化學習 (MARL)** — 當多個智能體在同一環境中互動。從合作（團隊）到競爭（對抗）再到混合動機場景。

---

## 1.MARL 設定

|設定|獎勵結構|範例|挑戰|
|--------|-----------------|--------|------------|
|合作|共享獎勵 |機器人團隊|學分分配|
|競賽|零和|西洋棋、圍棋 |非平穩|
|混合|個人+共享|交通、市場|平衡|

---

## 2.PettingZoo框架

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

## 3. MAPPO — 多代理 PPO

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

**CTDE**：集中訓練，分散執行
- 訓練：批評者看見一切
- 執行：演員只能看到局部觀察

---

## 4. 自玩

透過與自身的副本進行比賽來訓練代理：

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

## 5. 突發行為

多智能體訓練通常會產生令人驚訝的突發行為為：
- **通訊**：代理開發協議
- **專業化**：角色分化
- **欺騙**：競爭環境中的策略隱藏

---

## 總結

|演算法|設定|關鍵想法|
|------------|---------|----------|
| MAPPO |合作|集中的評論家，分散的參與者 |
| QMIX |合作|單調值分解 |
|自玩 |競爭|與自己對戰 |
| MADDPG|混合|具有集中批評者的多代理 DDPG |
