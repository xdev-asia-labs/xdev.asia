---
id: 019d8b32-bb14-7014-c014-ee1400000014
title: "Bài 14: Multi-Agent RL — Cooperation & Competition"
slug: bai-14-multi-agent-rl
description: >-
  Multi-agent settings: cooperative, competitive, mixed. MAPPO, QMIX algorithms. PettingZoo framework. Game theory basics. Emergent behaviors. Self-play.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: RLHF, LLM Alignment & Production"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI &amp; ML — Bài 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 14: Multi-Agent RL — Cooperation &amp;</tspan>
      <tspan x="60" dy="42">Competition</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Reinforcement Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: RLHF, LLM Alignment &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

**Multi-Agent RL (MARL)** — khi nhiều agents cùng interact trong một environment. Từ cooperative (team) đến competitive (adversarial) đến mixed-motive scenarios.

---

## 1. MARL Settings

| Setting | Reward Structure | Ví dụ | Challenge |
|---------|-----------------|-------|-----------|
| Cooperative | Shared reward | Robot team | Credit assignment |
| Competitive | Zero-sum | Chess, Go | Non-stationary |
| Mixed | Individual + shared | Traffic, Markets | Equilibrium |

---

## 2. PettingZoo Framework

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

## 3. MAPPO — Multi-Agent PPO

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

**CTDE**: Centralized Training, Decentralized Execution
- Training: Critic sees everything
- Execution: Actor only sees local observation

---

## 4. Self-Play

Train agent by playing against copies of itself:

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

## 5. Emergent Behaviors

Multi-agent training often produces surprising emergent behaviors:
- **Communication**: Agents develop protocols
- **Specialization**: Role differentiation
- **Deception**: Strategic hiding in competitive settings

---

## Tổng kết

| Algorithm | Setting | Key Idea |
|-----------|---------|----------|
| MAPPO | Cooperative | Centralized critic, decentralized actors |
| QMIX | Cooperative | Monotonic value decomposition |
| Self-play | Competitive | Play against yourself |
| MADDPG | Mixed | Multi-agent DDPG with centralized critics |
