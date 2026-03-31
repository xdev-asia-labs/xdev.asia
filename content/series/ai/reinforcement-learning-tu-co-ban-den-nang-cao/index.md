---
id: 019d8b32-aa01-7001-b001-ff0300000001
title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
slug: reinforcement-learning-tu-co-ban-den-nang-cao
description: >-
  Khóa học toàn diện về Reinforcement Learning — từ nền tảng MDP, Q-Learning
  đến Deep RL với DQN, Policy Gradient, PPO, SAC. Thực hành game AI,
  robotics simulation, RLHF cho LLM, và deploy RL agents production-ready
  với Python, Gymnasium, Stable-Baselines3.
featured_image: uploads/2026/03/reinforcement-learning-tu-co-ban-den-nang-cao-cover.png
level: intermediate
duration_hours: 50
lesson_count: 16
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T10:00:00.000000Z'
created_at: '2026-03-31T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI & Machine Learning
  slug: ai-machine-learning
tags:
  - name: Reinforcement Learning
    slug: reinforcement-learning
  - name: Q-Learning
    slug: q-learning
  - name: DQN
    slug: dqn
  - name: PPO
    slug: ppo
  - name: RLHF
    slug: rlhf
  - name: Deep RL
    slug: deep-rl
  - name: Gymnasium
    slug: gymnasium
  - name: Stable-Baselines3
    slug: stable-baselines3
  - name: Policy Gradient
    slug: policy-gradient
  - name: Python
    slug: python
  - name: AI
    slug: ai
sections:
  - id: section-rl-01
    title: "Phần 1: Nền tảng RL — Markov Decision Process & Tabular Methods"
    description: Hiểu bản chất RL — agent, environment, reward, policy
    sort_order: 1
    lessons:
      - id: 019d8b32-bb01-7001-c001-ee0100000001
        title: 'Bài 1: Reinforcement Learning là gì? — Agent, Environment & Reward'
        slug: bai-1-reinforcement-learning-la-gi
        description: >-
          Định nghĩa RL, so sánh supervised/unsupervised/RL. Agent-Environment
          interaction loop. State, Action, Reward, Policy, Value function.
          Markov Decision Process (MDP). Exploration vs Exploitation dilemma.
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b32-bb02-7002-c002-ee0200000002
        title: 'Bài 2: Dynamic Programming — Policy Iteration & Value Iteration'
        slug: bai-2-dynamic-programming
        description: >-
          Bellman equation. Policy evaluation, policy improvement. Value
          iteration algorithm. GridWorld implementation. Convergence guarantees.
          Limitations: cần biết model dynamics.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b32-bb03-7003-c003-ee0300000003
        title: 'Bài 3: Monte Carlo & Temporal Difference Learning'
        slug: bai-3-monte-carlo-td-learning
        description: >-
          Monte Carlo methods: first-visit, every-visit. TD(0) learning.
          TD vs MC comparison. SARSA: on-policy TD control. Q-Learning:
          off-policy TD control. Hands-on Taxi environment.
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b32-bb04-7004-c004-ee0400000004
        title: 'Bài 4: Q-Learning Deep Dive & Multi-Armed Bandits'
        slug: bai-4-q-learning-bandits
        description: >-
          Q-Learning algorithm chi tiết. ε-greedy exploration. Multi-Armed
          Bandit problem. UCB, Thompson Sampling. Epsilon decay strategies.
          Hands-on: Q-Learning cho FrozenLake, CartPole discretized.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-rl-02
    title: "Phần 2: Deep Reinforcement Learning — Neural Networks meet RL"
    description: Kết hợp Deep Learning với RL để giải quyết high-dimensional problems
    sort_order: 2
    lessons:
      - id: 019d8b32-bb05-7005-c005-ee0500000005
        title: 'Bài 5: DQN — Deep Q-Network & Experience Replay'
        slug: bai-5-dqn-deep-q-network
        description: >-
          Tại sao Q-table không scale? Function approximation với neural
          networks. DQN architecture. Experience Replay buffer. Target
          network. Atari game implementation. Double DQN, Dueling DQN.
        duration_minutes: 180
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b32-bb06-7006-c006-ee0600000006
        title: 'Bài 6: Policy Gradient — REINFORCE & Actor-Critic'
        slug: bai-6-policy-gradient-actor-critic
        description: >-
          Policy gradient theorem. REINFORCE algorithm. Baseline reduction
          variance. Actor-Critic: value function as baseline. A2C:
          Advantage Actor-Critic. Hands-on CartPole, LunarLander.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b32-bb07-7007-c007-ee0700000007
        title: 'Bài 7: PPO — Proximal Policy Optimization'
        slug: bai-7-ppo
        description: >-
          Tại sao PPO là "default" algorithm? Trust region methods. PPO-Clip
          objective. GAE: Generalized Advantage Estimation. Implementation
          chi tiết. Hyperparameter tuning. So sánh PPO vs TRPO vs A3C.
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b32-bb08-7008-c008-ee0800000008
        title: 'Bài 8: SAC & Advanced Algorithms — Off-Policy Deep RL'
        slug: bai-8-sac-advanced-algorithms
        description: >-
          SAC: Soft Actor-Critic — maximum entropy RL. TD3: Twin Delayed
          DDPG. Continuous action spaces. Model-based RL basics: Dreamer,
          World Models. Offline RL: CQL, IQL. Algorithm selection guide.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-rl-03
    title: "Phần 3: RL Frameworks & Thực hành"
    description: Sử dụng frameworks production-ready cho RL
    sort_order: 3
    lessons:
      - id: 019d8b32-bb09-7009-c009-ee0900000009
        title: 'Bài 9: Gymnasium & Stable-Baselines3 — RL Frameworks'
        slug: bai-9-gymnasium-stable-baselines3
        description: >-
          Gymnasium (ex-OpenAI Gym) API. Custom environment creation.
          Stable-Baselines3: PPO, DQN, SAC out-of-box. Training, evaluation,
          callback system. Logging với TensorBoard. Model saving/loading.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8b32-bb10-7010-c010-ee1000000010
        title: 'Bài 10: Custom Environment Design — Xây dựng Game AI'
        slug: bai-10-custom-environment
        description: >-
          Design reward functions. State/action space design. Environment
          wrapper patterns. Multi-agent environments. Procedural generation.
          Hands-on: xây game AI environment từ scratch.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b32-bb11-7011-c011-ee1100000011
        title: 'Bài 11: Robotics Simulation — MuJoCo & Isaac Gym'
        slug: bai-11-robotics-simulation
        description: >-
          Physics simulation cho RL. MuJoCo environments. NVIDIA Isaac Gym.
          Sim-to-real transfer. Domain randomization. Locomotion tasks.
          Robot arm manipulation. Hands-on robot walking agent.
        duration_minutes: 180
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-rl-04
    title: "Phần 4: RLHF, LLM Alignment & Production"
    description: RL cho AI alignment — RLHF, direct preference optimization, production deployment
    sort_order: 4
    lessons:
      - id: 019d8b32-bb12-7012-c012-ee1200000012
        title: 'Bài 12: RLHF — Reinforcement Learning from Human Feedback'
        slug: bai-12-rlhf
        description: >-
          RLHF pipeline: SFT → Reward Model → PPO training. InstructGPT
          paper walkthrough. Reward modeling từ human preferences. PPO
          cho LLM fine-tuning. Constitutional AI. Hands-on RLHF với trl.
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b32-bb13-7013-c013-ee1300000013
        title: 'Bài 13: DPO & GRPO — Direct Preference Optimization'
        slug: bai-13-dpo-grpo
        description: >-
          DPO: skip reward model, train directly from preferences. RLHF
          vs DPO comparison. GRPO: Group Relative Policy Optimization.
          KTO, IPO variants. Implementation với Hugging Face trl.
          When to use RLHF vs DPO.
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b32-bb14-7014-c014-ee1400000014
        title: 'Bài 14: Multi-Agent RL — Cooperation & Competition'
        slug: bai-14-multi-agent-rl
        description: >-
          Multi-agent settings: cooperative, competitive, mixed. Independent
          learners vs centralized training. MARL algorithms: MAPPO, QMIX.
          PettingZoo framework. Game theory basics. Emergent behaviors.
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b32-bb15-7015-c015-ee1500000015
        title: 'Bài 15: RL Production — Deploy & Monitor RL Agents'
        slug: bai-15-rl-production
        description: >-
          Deploying RL policies. Model serving patterns. Safety constraints
          và guardrails. Online vs offline training. A/B testing RL policies.
          Monitoring reward drift. RL in recommendation systems.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b32-bb16-7016-c016-ee1600000016
        title: 'Bài 16: Capstone — Xây dựng RL Agent cho Real-world Problem'
        slug: bai-16-capstone
        description: >-
          Dự án tổng kết: chọn 1 trong 3 projects — (1) Game AI agent
          (Atari/custom game), (2) Robot control simulation, (3) RLHF
          cho chatbot. End-to-end: environment → training → evaluation →
          deployment. Best practices và career roadmap.
        duration_minutes: 240
        is_free: true
        sort_order: 15
        video_url: null
reviews: []
quizzes: []
---

## Giới thiệu Series

**Reinforcement Learning: Từ Cơ bản đến Nâng cao** là khóa học giúp bạn nắm vững toàn bộ lĩnh vực RL — từ nền tảng MDP, Q-Learning đến Deep RL hiện đại với PPO, SAC, và RLHF cho LLM Alignment.

> 🎯 **Sau khi hoàn thành khóa học, bạn sẽ:**
> - Hiểu sâu lý thuyết RL: MDP, Bellman, Policy Gradient
> - Implement DQN, PPO, SAC từ scratch
> - Sử dụng thành thạo Gymnasium & Stable-Baselines3
> - Hiểu RLHF/DPO cho LLM alignment
> - Xây dựng RL agent cho game, robotics, và real-world problems

## Lộ trình học

### Phần 1: Nền tảng RL
MDP, Dynamic Programming, Q-Learning — bước đầu vào thế giới RL.

### Phần 2: Deep Reinforcement Learning
DQN, Policy Gradient, PPO, SAC — khi neural networks gặp RL.

### Phần 3: Frameworks & Thực hành
Gymnasium, Stable-Baselines3, robotics simulation.

### Phần 4: RLHF & Production
RL cho LLM alignment, multi-agent, và deploy production.
