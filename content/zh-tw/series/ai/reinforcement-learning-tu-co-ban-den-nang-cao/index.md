---
id: 019d8b32-aa01-7001-b001-ff0300000001
title: 強化學習：從基礎到高級
slug: reinforcement-learning-tu-co-ban-den-nang-cao
description: >-
  全面的密集學習課程－從 MDP、Q-Learning 到具有 DQN、策略梯度、PPO、SAC 的深度 RL 平台。練習遊戲 AI、機器人模擬、LLM 的
  RLHF，並使用 Python、Gymnasium、Stable-Baselines3 部署可用於生產的 RL 代理程式。
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
  name: 人工智慧與機器學習
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
    title: 第 1 部分：強化學習基礎 — 馬可夫決策過程與表格方法
    description: 了解強化學習的本質－代理、環境、獎勵、策略
    sort_order: 1
    lessons:
      - id: 019d8b32-bb01-7001-c001-ee0100000001
        title: 第一課：什麼是強化學習？ — 代理、環境與獎勵
        slug: bai-1-reinforcement-learning-la-gi
        description: 定義 RL，比較監督/無監督/RL。代理-環境交互循環。狀態、行動、獎勵、策略、價值函數。馬可夫決策過程（MDP）。探索與利用的困境。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b32-bb02-7002-c002-ee0200000002
        title: 第 2 課：動態規劃－策略迭代與值迭代
        slug: bai-2-dynamic-programming
        description: 貝爾曼方程式。政策評估、政策改進。值迭代算法。網格世界的實現。收斂保證。限制：需要了解模型動力學。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b32-bb03-7003-c003-ee0300000003
        title: 第 3 課：蒙地卡羅和時間差分學習
        slug: bai-3-monte-carlo-td-learning
        description: >-
          蒙特卡羅方法：首次訪問、每次訪問。 TD(0) 學習。 TD 與 MC 比較。 SARSA：在策略 TD 控制。
          Q-Learning：離策略 TD 控制。實踐計程車環境。
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b32-bb04-7004-c004-ee0400000004
        title: 第 4 課：Q-Learning 深入研究與多臂 Bandits
        slug: bai-4-q-learning-bandits
        description: >-
          Q-Learning 演算法詳細資訊。 ε-貪婪探索。多臂強盜問題。 UCB，湯普森採樣。 Epsilon
          衰變策略。實踐：FrozenLake 的 Q-Learning、CartPole 離散化。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-rl-02
    title: 第 2 部分：深度強化學習 — 神經網路與 RL 的結合
    description: 將深度學習與強化學習結合來解決高維度問題
    sort_order: 2
    lessons:
      - id: 019d8b32-bb05-7005-c005-ee0500000005
        title: 第 5 課：DQN — 深度 Q 網路與體驗回放
        slug: bai-5-dqn-deep-q-network
        description: 為什麼 Q 表無法擴充？用神經網路進行函數逼近。 DQN 架構。體驗重播緩衝區。目標網路。雅達利遊戲的實現。雙 DQN、決鬥 DQN。
        duration_minutes: 180
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b32-bb06-7006-c006-ee0600000006
        title: 第 6 課：政策梯度 — 強化與演員批評家
        slug: bai-6-policy-gradient-actor-critic
        description: >-
          政策梯度定理。強化演算法。基線減少方差。 Actor-Critic：作為基線的價值函數。 A2C：優勢演員評論家。動手操作
          CartPole、LunarLander。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b32-bb07-7007-c007-ee0700000007
        title: 第 7 課：PPO — 近端策略優化
        slug: bai-7-ppo
        description: >-
          為什麼 PPO 是「預設」演算法？信任域方法。 PPO-Clip 物鏡。 GAE：廣義優勢估計。詳細實施。超參數調整。比較 PPO、TRPO
          和 A3C。
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b32-bb08-7008-c008-ee0800000008
        title: 第 8 課：SAC 和高階演算法 — Off-Policy Deep RL
        slug: bai-8-sac-advanced-algorithms
        description: >-
          SAC：Soft Actor-Critic — 最大熵 RL。 TD3：雙延遲
          DDPG。連續的行動空間。基於模型的強化學習基礎：夢想家、世界模型。離線強化學習：CQL、IQL。演算法選擇指南。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-rl-03
    title: 第 3 部分：強化學習架構與實踐
    description: 使用可用於生產的 RL 框架
    sort_order: 3
    lessons:
      - id: 019d8b32-bb09-7009-c009-ee0900000009
        title: 第 9 課：體育館與穩定基線3 — 強化學習框架
        slug: bai-9-gymnasium-stable-baselines3
        description: >-
          Gymnasium（前 OpenAI Gym）API。自訂環境創建。穩定基線3：PPO、DQN、SAC 開箱即用。培訓、考核、回訪制度。使用
          TensorBoard 進行日誌記錄。模型保存/載入。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8b32-bb10-7010-c010-ee1000000010
        title: 第 10 課：自訂環境設計 — 建構遊戲 AI
        slug: bai-10-custom-environment
        description: 設計獎勵函數。狀態/動作空間設計。環境包裝模式。多代理環境。程式生成。動手實作：從頭開始建構AI遊戲環境。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b32-bb11-7011-c011-ee1100000011
        title: 第 11 課：機器人模擬 — MuJoCo & Isaac Gym
        slug: bai-11-robotics-simulation
        description: >-
          強化學習的物理模擬。 MuJoCo 環境。 NVIDIA
          艾萨克健身房。模擬到真實的傳輸。域隨機化。運動任務。機器人手臂操縱。动手机器人步行代理。
        duration_minutes: 180
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-rl-04
    title: 第 4 部分：RLHF、LLM 調整和製作
    description: 用於 AI 對齊的 RL — RLHF、直接偏好優化、生產部署
    sort_order: 4
    lessons:
      - id: 019d8b32-bb12-7012-c012-ee1200000012
        title: 第 12 課：RLHF — 根據人類回饋進行強化學習
        slug: bai-12-rlhf
        description: >-
          RLHF 流程：SFT → 獎勵模型 → PPO 訓練。指導 GPT 論文演練。根據人類偏好進行獎勵建模。 PPO 用於 LLM
          微調。憲法人工智慧。 Hands-on RLHF with trl.
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b32-bb13-7013-c013-ee1300000013
        title: 第 13 課：DPO 和 GRPO — 直接偏好優化
        slug: bai-13-dpo-grpo
        description: >-
          DPO：跳過獎勵模型，直接依照偏好進行訓練。 RLHF 與 DPO 比較。 GRPO：群組相關策略優化。 KTO、IPO 變體。使用
          Hugging Face trl 實作。何時使用 RLHF 與 DPO。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b32-bb14-7014-c014-ee1400000014
        title: 第 14 課：多智能體強化學習 — 合作與競爭
        slug: bai-14-multi-agent-rl
        description: >-
          多智能體設定：合作、競爭、混合。獨立學習者與集中培訓。 MARL 演算法：MAPPO、QMIX。 PettingZoo
          框架。博弈論基礎。突發行為為。
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b32-bb15-7015-c015-ee1500000015
        title: 第 15 課：強化學習生產 — 部署與監控強化學習代理
        slug: bai-15-rl-production
        description: 部署強化學習策略。模型服務模式。安全約束和護欄。線上與離線培訓。 A/B 測試 RL 策略。監控獎勵漂移。推薦系​​統中的強化學習。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b32-bb16-7016-c016-ee1600000016
        title: 第 16 課：Capstone — 為現實問題建構 RL 代理
        slug: bai-16-capstone
        description: >-
          摘要項目：從 3 個項目中選擇 1 個 - (1) 遊戲 AI 代理程式（Atari/自訂遊戲），(2) 機器人控制模擬，(3)
          聊天機器人的 RLHF。端對端：環境→訓練→評估→部署。最佳實踐和職業路線圖。
        duration_minutes: 240
        is_free: true
        sort_order: 15
        video_url: null
reviews: []
quizzes: []
locale: zh-tw
---

## 系列介紹

**強化學習：從基礎知識到高級**是一門幫助您掌握 RL 整個領域的課程 - 從 MDP、Q-Learning 平台到使用 PPO、SAC 和 RLHF 進行 LLM 調整的現代深度 RL。

> 🎯 **完成課程後，您將：**
> - 深入理解RL理論：MDP、Bellman、Policy Gradient
> - 從頭開始實施DQN、PPO、SAC
> - 熟練使用體育館和穩定基線3
> - 了解 RLHF/DPO 以實現 LLM 對齊
> - 為遊戲、機器人和現實問題建立強化學習代理

## 學習路徑

### 第 1 部分：強化學習平台
MDP、動態規劃、Q-Learning——您進入 RL 世界的第一步。

### 第 2 部分：深度強化學習
DQN、策略梯度、PPO、SAC——當神經網路遇到 RL 時。

### 第 3 部分：框架與實踐
體育館、穩定基準3、機器人模擬。

### 第 4 部分：RLHF 和製作
用於 LLM 對齊、多代理程式和生產部署的 RL。
