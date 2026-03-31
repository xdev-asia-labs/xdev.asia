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
