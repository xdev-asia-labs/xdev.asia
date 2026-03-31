---
id: 019d8b32-bb01-7001-c001-ee0100000001
title: "Bài 1: Reinforcement Learning là gì? — Agent, Environment & Reward"
slug: bai-1-reinforcement-learning-la-gi
description: >-
  Định nghĩa RL, so sánh supervised/unsupervised/RL. Agent-Environment interaction loop. State, Action, Reward, Policy, Value function. MDP. Exploration vs Exploitation.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 1: Nền tảng RL — Markov Decision Process & Tabular Methods"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

**Reinforcement Learning (RL)** là paradigm thứ ba của Machine Learning — agent học cách hành động trong environment để maximize cumulative reward.

---

## 1. RL vs Supervised vs Unsupervised

| Paradigm | Data | Feedback | Ví dụ |
|----------|------|----------|-------|
| Supervised | (x, y) pairs | Labels | Image classification |
| Unsupervised | x only | None | Clustering |
| RL | States, actions | Rewards (delayed) | Game playing |

### Đặc điểm riêng của RL

- **Sequential decision making**: Quyết định ảnh hưởng tương lai
- **Delayed reward**: Không biết ngay hành động tốt hay xấu
- **Exploration vs Exploitation**: Thử mới vs khai thác kiến thức đã biết
- **No supervisor**: Chỉ có reward signal

---

## 2. Agent-Environment Interaction Loop

Mọi bài toán RL đều tuân theo vòng lặp:

```
Agent quan sát state s_t
  → Chọn action a_t theo policy π
  → Environment trả về reward r_{t+1} và state mới s_{t+1}
  → Lặp lại
```

### Ví dụ: Robot đi mê cung

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

## 3. Các khái niệm cốt lõi

### State (s)
Mô tả đầy đủ tình trạng hiện tại của environment.

### Action (a)
Quyết định agent thực hiện — discrete (trái/phải) hoặc continuous (góc quay).

### Reward (r)
Phản hồi scalar từ environment — agent muốn maximize tổng reward.

### Policy (π)
Chiến lược mapping state → action:
- **Deterministic**: π(s) = a
- **Stochastic**: π(a|s) = P(a|s)

### Value Function V(s)
Expected cumulative reward khi bắt đầu từ state s:

$$V^\pi(s) = \mathbb{E}_\pi\left[\sum_{t=0}^{\infty} \gamma^t r_{t+1} | s_0 = s\right]$$

### Q-function Q(s,a)
Expected cumulative reward khi chọn action a tại state s:

$$Q^\pi(s,a) = \mathbb{E}_\pi\left[\sum_{t=0}^{\infty} \gamma^t r_{t+1} | s_0 = s, a_0 = a\right]$$

---

## 4. Markov Decision Process (MDP)

MDP là framework toán học chuẩn cho RL: **(S, A, P, R, γ)**

| Thành phần | Ký hiệu | Mô tả |
|-----------|---------|--------|
| States | S | Tập hợp tất cả states |
| Actions | A | Tập hợp tất cả actions |
| Transition | P(s'|s,a) | Xác suất chuyển state |
| Reward | R(s,a,s') | Reward function |
| Discount | γ ∈ [0,1] | Discount factor |

**Markov Property**: Tương lai chỉ phụ thuộc vào hiện tại, không phụ thuộc quá khứ.

---

## 5. Exploration vs Exploitation

| Chiến lược | Mô tả | Trade-off |
|-----------|--------|-----------|
| Exploration | Thử action mới | Tìm strategy tốt hơn |
| Exploitation | Dùng action tốt nhất đã biết | Maximize reward ngắn hạn |

Phương pháp cân bằng:
- **ε-greedy**: Random với xác suất ε
- **UCB**: Upper Confidence Bound
- **Thompson Sampling**: Bayesian approach

---

## Tổng kết

| Khái niệm | Mô tả |
|-----------|--------|
| RL | Agent học từ interaction với environment |
| MDP | Framework toán học: states, actions, rewards |
| Policy | Chiến lược chọn action |
| Value | Expected cumulative reward |
| Exploration | Cân bằng giữa thử mới và khai thác |
