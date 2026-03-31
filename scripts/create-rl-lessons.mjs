import fs from 'fs';
import path from 'path';

const base = "content/series/ai/reinforcement-learning-tu-co-ban-den-nang-cao/chapters";

const lessons = [
  {
    dir: "01-phan-1-nen-tang-rl", file: "02-bai-1-rl-la-gi.md",
    id: "019d8b32-bb01-7001-c001-ee0100000001",
    title: "Bài 1: Reinforcement Learning là gì? — Agent, Environment & Reward",
    slug: "bai-1-reinforcement-learning-la-gi",
    desc: "Định nghĩa RL, so sánh supervised/unsupervised/RL. Agent-Environment interaction loop. State, Action, Reward, Policy, Value function. MDP. Exploration vs Exploitation.",
    mins: 90, sort: 0,
    section: "Phần 1: Nền tảng RL — Markov Decision Process & Tabular Methods",
    body: `## Giới thiệu

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

\`\`\`
Agent quan sát state s_t
  → Chọn action a_t theo policy π
  → Environment trả về reward r_{t+1} và state mới s_{t+1}
  → Lặp lại
\`\`\`

### Ví dụ: Robot đi mê cung

\`\`\`python
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
\`\`\`

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

$$V^\\pi(s) = \\mathbb{E}_\\pi\\left[\\sum_{t=0}^{\\infty} \\gamma^t r_{t+1} | s_0 = s\\right]$$

### Q-function Q(s,a)
Expected cumulative reward khi chọn action a tại state s:

$$Q^\\pi(s,a) = \\mathbb{E}_\\pi\\left[\\sum_{t=0}^{\\infty} \\gamma^t r_{t+1} | s_0 = s, a_0 = a\\right]$$

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
| Exploration | Cân bằng giữa thử mới và khai thác |`
  },
  {
    dir: "01-phan-1-nen-tang-rl", file: "03-bai-2-dynamic-programming.md",
    id: "019d8b32-bb02-7002-c002-ee0200000002",
    title: "Bài 2: Dynamic Programming — Policy Iteration & Value Iteration",
    slug: "bai-2-dynamic-programming",
    desc: "Bellman equation. Policy evaluation, policy improvement. Value iteration algorithm. GridWorld implementation bằng Python.",
    mins: 120, sort: 1,
    section: "Phần 1: Nền tảng RL — Markov Decision Process & Tabular Methods",
    body: `## Giới thiệu

**Dynamic Programming (DP)** giải MDP khi biết toàn bộ model — transition probabilities P(s'|s,a) và reward R. Đây là nền tảng lý thuyết cho mọi RL algorithm.

---

## 1. Bellman Equation

### Bellman Expectation Equation

$$V^\\pi(s) = \\sum_a \\pi(a|s) \\sum_{s'} P(s'|s,a)[R(s,a,s') + \\gamma V^\\pi(s')]$$

### Bellman Optimality Equation

$$V^*(s) = \\max_a \\sum_{s'} P(s'|s,a)[R(s,a,s') + \\gamma V^*(s')]$$

---

## 2. Policy Evaluation

Tính V(s) cho một policy cố định:

\`\`\`python
import numpy as np

def policy_evaluation(policy, env, gamma=0.99, theta=1e-8):
    V = np.zeros(env.nS)
    while True:
        delta = 0
        for s in range(env.nS):
            v = 0
            for a, action_prob in enumerate(policy[s]):
                for prob, next_state, reward, done in env.P[s][a]:
                    v += action_prob * prob * (reward + gamma * V[next_state])
            delta = max(delta, abs(V[s] - v))
            V[s] = v
        if delta < theta:
            break
    return V
\`\`\`

---

## 3. Policy Improvement

Greedy improvement dựa trên V(s):

\`\`\`python
def policy_improvement(V, env, gamma=0.99):
    policy = np.zeros([env.nS, env.nA])
    for s in range(env.nS):
        q_values = np.zeros(env.nA)
        for a in range(env.nA):
            for prob, next_state, reward, done in env.P[s][a]:
                q_values[a] += prob * (reward + gamma * V[next_state])
        best_action = np.argmax(q_values)
        policy[s][best_action] = 1.0
    return policy
\`\`\`

---

## 4. Policy Iteration

\`\`\`python
def policy_iteration(env, gamma=0.99):
    policy = np.ones([env.nS, env.nA]) / env.nA  # Uniform random
    while True:
        V = policy_evaluation(policy, env, gamma)
        new_policy = policy_improvement(V, env, gamma)
        if np.array_equal(policy, new_policy):
            break
        policy = new_policy
    return policy, V
\`\`\`

---

## 5. Value Iteration

\`\`\`python
def value_iteration(env, gamma=0.99, theta=1e-8):
    V = np.zeros(env.nS)
    while True:
        delta = 0
        for s in range(env.nS):
            v = V[s]
            V[s] = max(
                sum(p * (r + gamma * V[s_])
                    for p, s_, r, _ in env.P[s][a])
                for a in range(env.nA)
            )
            delta = max(delta, abs(v - V[s]))
        if delta < theta:
            break
    return V
\`\`\`

---

## 6. GridWorld Demo

\`\`\`python
import gymnasium as gym

env = gym.make("FrozenLake-v1", is_slippery=False)
policy, V = policy_iteration(env.unwrapped, gamma=0.99)

print("Optimal Value Function:")
print(V.reshape(4, 4))
print("Optimal Policy (0=L, 1=D, 2=R, 3=U):")
print(np.argmax(policy, axis=1).reshape(4, 4))
\`\`\`

---

## Tổng kết

| Method | Approach | Convergence | Complexity |
|--------|----------|-------------|------------|
| Policy Iteration | Evaluate → Improve | Few iterations | O(S²A) per evaluation |
| Value Iteration | One-step lookahead | Many iterations | O(SA) per iteration |`
  },
  {
    dir: "01-phan-1-nen-tang-rl", file: "04-bai-3-monte-carlo-td.md",
    id: "019d8b32-bb03-7003-c003-ee0300000003",
    title: "Bài 3: Monte Carlo & Temporal Difference Learning",
    slug: "bai-3-monte-carlo-td-learning",
    desc: "Model-free methods. Monte Carlo prediction & control. TD(0) learning. SARSA on-policy TD control. Bias-variance trade-off.",
    mins: 150, sort: 2,
    section: "Phần 1: Nền tảng RL — Markov Decision Process & Tabular Methods",
    body: `## Giới thiệu

**Monte Carlo** và **Temporal Difference (TD)** là hai model-free methods cốt lõi — không cần biết transition probabilities. Đây là bước chuyển quan trọng từ DP sang RL thực tế.

---

## 1. Monte Carlo Prediction

Ước lượng V(s) bằng trung bình returns từ nhiều episodes:

\`\`\`python
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
\`\`\`

---

## 2. Monte Carlo Control

MC + ε-greedy policy improvement:

\`\`\`python
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
\`\`\`

---

## 3. TD(0) Learning

Update V sau mỗi step (không cần đợi hết episode):

$$V(s) \\leftarrow V(s) + \\alpha [r + \\gamma V(s') - V(s)]$$

\`\`\`python
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
\`\`\`

---

## 4. SARSA — On-policy TD Control

\`\`\`python
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
\`\`\`

---

## 5. MC vs TD Comparison

| Aspect | Monte Carlo | TD(0) |
|--------|------------|-------|
| Model-free | ✅ | ✅ |
| Online | ❌ (needs full episode) | ✅ (every step) |
| Bias | Unbiased | Biased (bootstrapping) |
| Variance | High | Low |
| Works with continuing tasks | ❌ | ✅ |

---

## Tổng kết

| Method | Key Idea | Update |
|--------|----------|--------|
| MC | Average complete returns | After episode |
| TD(0) | Bootstrap from next state | Every step |
| SARSA | On-policy TD control | Q(s,a) with actual next action |`
  },
  {
    dir: "01-phan-1-nen-tang-rl", file: "05-bai-4-q-learning.md",
    id: "019d8b32-bb04-7004-c004-ee0400000004",
    title: "Bài 4: Q-Learning Deep Dive & Multi-Armed Bandits",
    slug: "bai-4-q-learning-bandits",
    desc: "Q-Learning algorithm chi tiết. ε-greedy exploration. Multi-Armed Bandit problem. UCB, Thompson Sampling. Hands-on Taxi environment.",
    mins: 120, sort: 3,
    section: "Phần 1: Nền tảng RL — Markov Decision Process & Tabular Methods",
    body: `## Giới thiệu

**Q-Learning** là off-policy TD control algorithm — nền tảng cho DQN và mọi value-based deep RL. **Multi-Armed Bandits** là simplified RL tập trung vào exploration vs exploitation.

---

## 1. Q-Learning Algorithm

\`\`\`python
def q_learning(env, num_episodes, alpha=0.1, gamma=0.99, epsilon=0.1):
    Q = np.zeros((env.observation_space.n, env.action_space.n))
    
    for episode in range(num_episodes):
        state, _ = env.reset()
        done = False
        
        while not done:
            # ε-greedy action selection
            if np.random.random() < epsilon:
                action = env.action_space.sample()
            else:
                action = np.argmax(Q[state])
            
            next_state, reward, terminated, truncated, _ = env.step(action)
            done = terminated or truncated
            
            # Q-Learning update (off-policy: max over next actions)
            Q[state, action] += alpha * (
                reward + gamma * np.max(Q[next_state]) * (1 - done) - Q[state, action]
            )
            state = next_state
    return Q
\`\`\`

### SARSA vs Q-Learning

| | SARSA | Q-Learning |
|---|-------|------------|
| Type | On-policy | Off-policy |
| Update | Q(s,a) += α[r + γQ(s',a') - Q(s,a)] | Q(s,a) += α[r + γ max Q(s',·) - Q(s,a)] |
| Behavior | Safer, follows ε-greedy | Learns optimal policy |

---

## 2. Exploration Strategies

### ε-greedy with Decay

\`\`\`python
def epsilon_greedy_decay(Q, state, episode, min_epsilon=0.01, decay=0.995):
    epsilon = max(min_epsilon, 1.0 * (decay ** episode))
    if np.random.random() < epsilon:
        return env.action_space.sample()
    return np.argmax(Q[state])
\`\`\`

### Boltzmann (Softmax) Exploration

\`\`\`python
def boltzmann_action(Q, state, temperature=1.0):
    q_values = Q[state] / temperature
    probs = np.exp(q_values - np.max(q_values))
    probs /= probs.sum()
    return np.random.choice(len(probs), p=probs)
\`\`\`

---

## 3. Multi-Armed Bandit

Simplified RL: 1 state, K actions (arms), maximize reward.

\`\`\`python
class MultiArmedBandit:
    def __init__(self, k=10):
        self.k = k
        self.true_values = np.random.randn(k)
    
    def pull(self, arm):
        return np.random.randn() + self.true_values[arm]

class UCBAgent:
    def __init__(self, k, c=2.0):
        self.counts = np.zeros(k)
        self.values = np.zeros(k)
        self.c = c
        self.t = 0
    
    def select_arm(self):
        self.t += 1
        if 0 in self.counts:
            return np.argmin(self.counts)
        ucb = self.values + self.c * np.sqrt(np.log(self.t) / self.counts)
        return np.argmax(ucb)
    
    def update(self, arm, reward):
        self.counts[arm] += 1
        self.values[arm] += (reward - self.values[arm]) / self.counts[arm]
\`\`\`

---

## 4. Hands-on: Taxi Environment

\`\`\`python
env = gym.make("Taxi-v3")
Q = q_learning(env, num_episodes=10000, alpha=0.1, gamma=0.99, epsilon=0.1)

# Test learned policy
state, _ = env.reset()
total_reward = 0
for _ in range(200):
    action = np.argmax(Q[state])
    state, reward, done, _, _ = env.step(action)
    total_reward += reward
    if done:
        break
print(f"Total reward: {total_reward}")
\`\`\`

---

## Tổng kết

| Strategy | Ưu điểm | Nhược điểm |
|----------|---------|------------|
| ε-greedy | Simple, effective | Uniform random exploration |
| ε-decay | Balances explore/exploit | Need to tune decay rate |
| UCB | Principled, no ε | Deterministic |
| Thompson | Bayesian optimal | Computational cost |
| Boltzmann | Smooth, temperature control | Sensitive to scale |`
  },
  {
    dir: "02-phan-2-deep-rl", file: "06-bai-5-dqn.md",
    id: "019d8b32-bb05-7005-c005-ee0500000005",
    title: "Bài 5: DQN — Deep Q-Network & Experience Replay",
    slug: "bai-5-dqn-deep-q-network",
    desc: "Function approximation với neural networks. DQN architecture. Experience Replay Buffer. Target network. Double DQN, Dueling DQN, Rainbow DQN.",
    mins: 180, sort: 4,
    section: "Phần 2: Deep Reinforcement Learning — Neural Networks meet RL",
    body: `## Giới thiệu

**DQN (Deep Q-Network)** — bước nhảy vọt khi DeepMind dùng neural network thay Q-table, đạt superhuman performance trên Atari games (Nature, 2015).

---

## 1. Từ Q-Table đến DQN

| Q-Table | DQN |
|---------|-----|
| Lưu Q(s,a) trong table | Neural network xấp xỉ Q(s,a;θ) |
| Chỉ hoạt động với discrete, small state space | Hoạt động với continuous, high-dimensional states |
| Exact | Approximate |

---

## 2. DQN Architecture

\`\`\`python
import torch
import torch.nn as nn

class DQN(nn.Module):
    def __init__(self, state_dim, action_dim, hidden_dim=128):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(state_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, action_dim),
        )
    
    def forward(self, x):
        return self.net(x)
\`\`\`

---

## 3. Experience Replay

\`\`\`python
from collections import deque
import random

class ReplayBuffer:
    def __init__(self, capacity=100_000):
        self.buffer = deque(maxlen=capacity)
    
    def push(self, state, action, reward, next_state, done):
        self.buffer.append((state, action, reward, next_state, done))
    
    def sample(self, batch_size):
        batch = random.sample(self.buffer, batch_size)
        states, actions, rewards, next_states, dones = zip(*batch)
        return (
            torch.FloatTensor(np.array(states)),
            torch.LongTensor(actions),
            torch.FloatTensor(rewards),
            torch.FloatTensor(np.array(next_states)),
            torch.FloatTensor(dones),
        )
    
    def __len__(self):
        return len(self.buffer)
\`\`\`

---

## 4. DQN Training Loop

\`\`\`python
class DQNAgent:
    def __init__(self, state_dim, action_dim, lr=1e-3, gamma=0.99):
        self.online_net = DQN(state_dim, action_dim)
        self.target_net = DQN(state_dim, action_dim)
        self.target_net.load_state_dict(self.online_net.state_dict())
        self.optimizer = torch.optim.Adam(self.online_net.parameters(), lr=lr)
        self.buffer = ReplayBuffer()
        self.gamma = gamma
    
    def update(self, batch_size=64):
        states, actions, rewards, next_states, dones = self.buffer.sample(batch_size)
        
        # Current Q values
        q_values = self.online_net(states).gather(1, actions.unsqueeze(1)).squeeze()
        
        # Target Q values
        with torch.no_grad():
            next_q = self.target_net(next_states).max(1)[0]
            target = rewards + self.gamma * next_q * (1 - dones)
        
        loss = nn.MSELoss()(q_values, target)
        self.optimizer.zero_grad()
        loss.backward()
        self.optimizer.step()
    
    def sync_target(self):
        self.target_net.load_state_dict(self.online_net.state_dict())
\`\`\`

---

## 5. DQN Improvements

### Double DQN
Decouple action selection và evaluation → reduce overestimation:

\`\`\`python
# Double DQN target
best_actions = self.online_net(next_states).argmax(1)
next_q = self.target_net(next_states).gather(1, best_actions.unsqueeze(1)).squeeze()
\`\`\`

### Dueling DQN
Separate value V(s) và advantage A(s,a):

\`\`\`python
class DuelingDQN(nn.Module):
    def __init__(self, state_dim, action_dim):
        super().__init__()
        self.feature = nn.Sequential(nn.Linear(state_dim, 128), nn.ReLU())
        self.value = nn.Sequential(nn.Linear(128, 64), nn.ReLU(), nn.Linear(64, 1))
        self.advantage = nn.Sequential(nn.Linear(128, 64), nn.ReLU(), nn.Linear(64, action_dim))
    
    def forward(self, x):
        feat = self.feature(x)
        val = self.value(feat)
        adv = self.advantage(feat)
        return val + adv - adv.mean(dim=1, keepdim=True)
\`\`\`

---

## Tổng kết

| Improvement | Giải quyết vấn đề |
|------------|-------------------|
| Experience Replay | Correlation giữa consecutive samples |
| Target Network | Training instability (moving target) |
| Double DQN | Q-value overestimation |
| Dueling DQN | Better value estimation |
| Prioritized Replay | Sample important experiences more |
| Rainbow | Combine all improvements |`
  },
  {
    dir: "02-phan-2-deep-rl", file: "07-bai-6-policy-gradient.md",
    id: "019d8b32-bb06-7006-c006-ee0600000006",
    title: "Bài 6: Policy Gradient — REINFORCE & Actor-Critic",
    slug: "bai-6-policy-gradient-actor-critic",
    desc: "Policy gradient theorem. REINFORCE algorithm. Baseline & variance reduction. Actor-Critic. A2C. Hands-on CartPole, LunarLander.",
    mins: 150, sort: 5,
    section: "Phần 2: Deep Reinforcement Learning — Neural Networks meet RL",
    body: `## Giới thiệu

**Policy Gradient** methods trực tiếp optimize policy π(a|s;θ) — thay vì học value function rồi derive policy. Ưu điểm: handle continuous actions, stochastic policies, và convergence guarantees.

---

## 1. Policy Gradient Theorem

$$\\nabla_\\theta J(\\theta) = \\mathbb{E}_{\\pi_\\theta}[\\nabla_\\theta \\log \\pi_\\theta(a|s) \\cdot G_t]$$

**Intuition**: Tăng probability của actions dẫn đến high return, giảm probability của actions dẫn đến low return.

---

## 2. REINFORCE Algorithm

\`\`\`python
import torch
import torch.nn as nn
from torch.distributions import Categorical

class PolicyNetwork(nn.Module):
    def __init__(self, state_dim, action_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(state_dim, 128),
            nn.ReLU(),
            nn.Linear(128, action_dim),
            nn.Softmax(dim=-1),
        )
    
    def forward(self, x):
        return self.net(x)

def reinforce(env, policy_net, optimizer, num_episodes, gamma=0.99):
    for episode in range(num_episodes):
        log_probs = []
        rewards = []
        state, _ = env.reset()
        done = False
        
        while not done:
            probs = policy_net(torch.FloatTensor(state))
            dist = Categorical(probs)
            action = dist.sample()
            log_probs.append(dist.log_prob(action))
            
            state, reward, terminated, truncated, _ = env.step(action.item())
            rewards.append(reward)
            done = terminated or truncated
        
        # Compute discounted returns
        returns = []
        G = 0
        for r in reversed(rewards):
            G = r + gamma * G
            returns.insert(0, G)
        returns = torch.FloatTensor(returns)
        returns = (returns - returns.mean()) / (returns.std() + 1e-8)
        
        # Policy gradient loss
        loss = sum(-lp * G for lp, G in zip(log_probs, returns))
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
\`\`\`

---

## 3. Baseline & Variance Reduction

Dùng baseline b(s) để giảm variance mà không thay đổi expected gradient:

$$\\nabla_\\theta J(\\theta) = \\mathbb{E}[\\nabla_\\theta \\log \\pi_\\theta(a|s) \\cdot (G_t - b(s))]$$

---

## 4. Actor-Critic

\`\`\`python
class ActorCritic(nn.Module):
    def __init__(self, state_dim, action_dim):
        super().__init__()
        self.shared = nn.Sequential(nn.Linear(state_dim, 128), nn.ReLU())
        self.actor = nn.Sequential(nn.Linear(128, action_dim), nn.Softmax(dim=-1))
        self.critic = nn.Linear(128, 1)
    
    def forward(self, x):
        feat = self.shared(x)
        return self.actor(feat), self.critic(feat)

def actor_critic_update(model, optimizer, state, action, reward, next_state, done, gamma):
    probs, value = model(torch.FloatTensor(state))
    _, next_value = model(torch.FloatTensor(next_state))
    
    # Advantage = TD error
    advantage = reward + gamma * next_value * (1 - done) - value
    
    # Actor loss
    dist = Categorical(probs)
    actor_loss = -dist.log_prob(torch.tensor(action)) * advantage.detach()
    
    # Critic loss
    critic_loss = advantage.pow(2)
    
    loss = actor_loss + 0.5 * critic_loss
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
\`\`\`

---

## 5. A2C — Advantage Actor-Critic

A2C = synchronous, multiple workers → reduce variance + faster training.

---

## Tổng kết

| Method | Type | Variance | Bias | Online |
|--------|------|----------|------|--------|
| REINFORCE | Policy | High | None | ❌ |
| REINFORCE + baseline | Policy | Medium | None | ❌ |
| Actor-Critic | Both | Low | Some | ✅ |
| A2C | Both | Lower | Some | ✅ |`
  },
  {
    dir: "02-phan-2-deep-rl", file: "08-bai-7-ppo.md",
    id: "019d8b32-bb07-7007-c007-ee0700000007",
    title: "Bài 7: PPO — Proximal Policy Optimization",
    slug: "bai-7-ppo",
    desc: "Trust region methods. PPO-Clip objective. Generalized Advantage Estimation (GAE). Full PPO implementation. So sánh PPO vs TRPO vs A3C.",
    mins: 180, sort: 6,
    section: "Phần 2: Deep Reinforcement Learning — Neural Networks meet RL",
    body: `## Giới thiệu

**PPO (Proximal Policy Optimization)** là algorithm được dùng nhiều nhất trong RL hiện đại — từ game AI (OpenAI Five, Dota 2) đến RLHF (ChatGPT). PPO đơn giản, stable, và hiệu quả.

---

## 1. Motivation: Tại sao cần PPO?

Policy gradient gốc có vấn đề:
- **Quá nhỏ step**: Chậm
- **Quá lớn step**: Policy collapse

PPO giới hạn policy update trong "trust region" — không thay đổi quá nhiều mỗi lần.

---

## 2. PPO-Clip Objective

$$L^{CLIP}(\\theta) = \\mathbb{E}[\\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t)]$$

Trong đó:
- $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$ — probability ratio
- $\\hat{A}_t$ — estimated advantage
- $\\epsilon$ — clipping range (thường 0.2)

---

## 3. GAE — Generalized Advantage Estimation

$$\\hat{A}_t^{GAE(\\gamma,\\lambda)} = \\sum_{l=0}^{\\infty} (\\gamma\\lambda)^l \\delta_{t+l}$$

\`\`\`python
def compute_gae(rewards, values, dones, gamma=0.99, lam=0.95):
    advantages = []
    gae = 0
    for t in reversed(range(len(rewards))):
        if t == len(rewards) - 1:
            next_value = 0
        else:
            next_value = values[t + 1]
        delta = rewards[t] + gamma * next_value * (1 - dones[t]) - values[t]
        gae = delta + gamma * lam * (1 - dones[t]) * gae
        advantages.insert(0, gae)
    return torch.FloatTensor(advantages)
\`\`\`

---

## 4. Full PPO Implementation

\`\`\`python
class PPO:
    def __init__(self, state_dim, action_dim, lr=3e-4, gamma=0.99,
                 lam=0.95, clip_eps=0.2, epochs=10, batch_size=64):
        self.actor_critic = ActorCritic(state_dim, action_dim)
        self.optimizer = torch.optim.Adam(self.actor_critic.parameters(), lr=lr)
        self.gamma = gamma
        self.lam = lam
        self.clip_eps = clip_eps
        self.epochs = epochs
        self.batch_size = batch_size
    
    def update(self, states, actions, rewards, dones, old_log_probs, values):
        advantages = compute_gae(rewards, values, dones, self.gamma, self.lam)
        returns = advantages + torch.FloatTensor(values)
        advantages = (advantages - advantages.mean()) / (advantages.std() + 1e-8)
        
        for _ in range(self.epochs):
            probs, new_values = self.actor_critic(states)
            dist = Categorical(probs)
            new_log_probs = dist.log_prob(actions)
            entropy = dist.entropy().mean()
            
            # PPO-Clip
            ratio = (new_log_probs - old_log_probs).exp()
            surr1 = ratio * advantages
            surr2 = torch.clamp(ratio, 1 - self.clip_eps, 1 + self.clip_eps) * advantages
            policy_loss = -torch.min(surr1, surr2).mean()
            
            # Value loss
            value_loss = nn.MSELoss()(new_values.squeeze(), returns)
            
            # Total loss
            loss = policy_loss + 0.5 * value_loss - 0.01 * entropy
            
            self.optimizer.zero_grad()
            loss.backward()
            nn.utils.clip_grad_norm_(self.actor_critic.parameters(), 0.5)
            self.optimizer.step()
\`\`\`

---

## 5. PPO vs TRPO vs A3C

| Feature | PPO | TRPO | A3C |
|---------|-----|------|-----|
| Simplicity | ✅ Simple | ❌ Complex | ✅ Simple |
| Performance | High | High | Medium |
| Stability | ✅ | ✅ | ❌ |
| Parallelizable | ✅ | ✅ | ✅ |
| Default choice | ✅ | No | No |

---

## Tổng kết

| Concept | Mô tả |
|---------|--------|
| PPO-Clip | Giới hạn policy change bằng clipping |
| GAE | Balanced bias-variance advantage estimation |
| Entropy bonus | Khuyến khích exploration |
| Multiple epochs | Reuse collected data nhiều lần |`
  },
  {
    dir: "02-phan-2-deep-rl", file: "09-bai-8-sac.md",
    id: "019d8b32-bb08-7008-c008-ee0800000008",
    title: "Bài 8: SAC & Advanced Algorithms — Off-Policy Deep RL",
    slug: "bai-8-sac-advanced-algorithms",
    desc: "SAC: Soft Actor-Critic — maximum entropy RL. TD3: Twin Delayed DDPG. Continuous action spaces. DDPG. Model-based RL overview.",
    mins: 150, sort: 7,
    section: "Phần 2: Deep Reinforcement Learning — Neural Networks meet RL",
    body: `## Giới thiệu

**SAC (Soft Actor-Critic)** là state-of-the-art off-policy algorithm cho continuous action spaces — kết hợp maximum entropy objective với actor-critic. SAC tự động tune temperature, ổn định và sample-efficient.

---

## 1. Maximum Entropy RL

$$\\pi^* = \\arg\\max_\\pi \\sum_t \\mathbb{E}_{\\pi}[r(s_t, a_t) + \\alpha \\mathcal{H}(\\pi(\\cdot|s_t))]$$

**Key insight**: Balance reward maximization VÀ entropy (exploration) → robust policies.

---

## 2. SAC Components

\`\`\`python
class SACActorContinuous(nn.Module):
    """Gaussian policy for continuous actions"""
    def __init__(self, state_dim, action_dim, hidden=256):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(state_dim, hidden), nn.ReLU(),
            nn.Linear(hidden, hidden), nn.ReLU(),
        )
        self.mean = nn.Linear(hidden, action_dim)
        self.log_std = nn.Linear(hidden, action_dim)
    
    def forward(self, state):
        feat = self.net(state)
        mean = self.mean(feat)
        log_std = self.log_std(feat).clamp(-20, 2)
        return mean, log_std
    
    def sample(self, state):
        mean, log_std = self.forward(state)
        std = log_std.exp()
        dist = torch.distributions.Normal(mean, std)
        x = dist.rsample()  # Reparameterization trick
        action = torch.tanh(x)
        log_prob = dist.log_prob(x) - torch.log(1 - action.pow(2) + 1e-6)
        return action, log_prob.sum(-1)
\`\`\`

### Twin Q-Networks

\`\`\`python
class TwinQNetwork(nn.Module):
    def __init__(self, state_dim, action_dim, hidden=256):
        super().__init__()
        self.q1 = nn.Sequential(
            nn.Linear(state_dim + action_dim, hidden), nn.ReLU(),
            nn.Linear(hidden, hidden), nn.ReLU(),
            nn.Linear(hidden, 1),
        )
        self.q2 = nn.Sequential(
            nn.Linear(state_dim + action_dim, hidden), nn.ReLU(),
            nn.Linear(hidden, hidden), nn.ReLU(),
            nn.Linear(hidden, 1),
        )
    
    def forward(self, state, action):
        x = torch.cat([state, action], dim=-1)
        return self.q1(x), self.q2(x)
\`\`\`

---

## 3. TD3 — Twin Delayed DDPG

3 tricks trên DDPG:
1. **Twin critics**: Take minimum → reduce overestimation
2. **Delayed policy updates**: Update actor ít hơn critic
3. **Target policy smoothing**: Add noise to target actions

---

## 4. Algorithm Selection Guide

| Algorithm | Action Space | On/Off-Policy | Sample Efficiency | Best For |
|-----------|-------------|--------------|-------------------|----------|
| DQN | Discrete | Off-policy | Good | Games |
| PPO | Both | On-policy | Low | General purpose |
| SAC | Continuous | Off-policy | High | Robotics |
| TD3 | Continuous | Off-policy | High | Robotics |
| DDPG | Continuous | Off-policy | Good | Simple continuous |

---

## 5. Model-based RL Overview

Thay vì model-free, học model of environment → plan:

| Approach | Learn Model? | Plan? | Example |
|----------|-------------|-------|---------|
| Model-free | No | No | DQN, PPO |
| Model-based | Yes | Yes | Dreamer, MuZero |
| Hybrid | Yes | Yes | World Models |

---

## Tổng kết

| Concept | Mô tả |
|---------|--------|
| SAC | Max entropy + twin critics + auto temperature |
| TD3 | Twin critics + delayed + smoothing |
| Entropy | Encourages exploration, robust policies |
| Off-policy | Sample efficient, replay buffer |`
  },
  {
    dir: "03-phan-3-frameworks", file: "10-bai-9-gymnasium.md",
    id: "019d8b32-bb09-7009-c009-ee0900000009",
    title: "Bài 9: Gymnasium & Stable-Baselines3 — RL Frameworks thực chiến",
    slug: "bai-9-gymnasium-stable-baselines3",
    desc: "Gymnasium API chi tiết. Wrappers. Stable-Baselines3 training, evaluation, callbacks. Hyperparameter tuning. TensorBoard logging.",
    mins: 150, sort: 8,
    section: "Phần 3: RL Frameworks & Thực hành",
    body: `## Giới thiệu

**Gymnasium** (successor OpenAI Gym) là standard API cho RL environments. **Stable-Baselines3 (SB3)** cung cấp production-ready implementations của DQN, PPO, SAC, TD3.

---

## 1. Gymnasium Fundamentals

\`\`\`python
import gymnasium as gym

# Create environment
env = gym.make("CartPole-v1", render_mode="human")
obs, info = env.reset(seed=42)

for step in range(1000):
    action = env.action_space.sample()  # Random policy
    obs, reward, terminated, truncated, info = env.step(action)
    
    if terminated or truncated:
        obs, info = env.reset()

env.close()
\`\`\`

### Spaces

\`\`\`python
# Discrete actions
env = gym.make("CartPole-v1")
print(env.action_space)  # Discrete(2)

# Continuous actions
env = gym.make("Pendulum-v1")
print(env.action_space)  # Box(-2.0, 2.0, (1,))

# Complex observations
env = gym.make("CarRacing-v2")
print(env.observation_space)  # Box(0, 255, (96, 96, 3))
\`\`\`

---

## 2. Wrappers

\`\`\`python
from gymnasium.wrappers import TimeLimit, RecordVideo, NormalizeObservation

env = gym.make("CartPole-v1")
env = TimeLimit(env, max_episode_steps=500)
env = NormalizeObservation(env)
env = RecordVideo(env, "videos/", episode_trigger=lambda e: e % 100 == 0)
\`\`\`

---

## 3. Stable-Baselines3 Training

\`\`\`python
from stable_baselines3 import PPO, DQN, SAC
from stable_baselines3.common.env_util import make_vec_env

# Vectorized environments for faster training
env = make_vec_env("CartPole-v1", n_envs=4)

model = PPO("MlpPolicy", env, verbose=1,
    learning_rate=3e-4,
    n_steps=2048,
    batch_size=64,
    n_epochs=10,
    gamma=0.99,
    tensorboard_log="./tensorboard/"
)
model.learn(total_timesteps=500_000)
model.save("ppo_cartpole")
\`\`\`

---

## 4. Evaluation

\`\`\`python
from stable_baselines3.common.evaluation import evaluate_policy

model = PPO.load("ppo_cartpole")
eval_env = gym.make("CartPole-v1")
mean_reward, std = evaluate_policy(model, eval_env, n_eval_episodes=20)
print(f"Mean reward: {mean_reward:.2f} +/- {std:.2f}")
\`\`\`

---

## 5. Callbacks

\`\`\`python
from stable_baselines3.common.callbacks import EvalCallback, CheckpointCallback

eval_callback = EvalCallback(
    eval_env, best_model_save_path="./best/",
    log_path="./logs/", eval_freq=5000,
    n_eval_episodes=10, deterministic=True,
)

checkpoint_callback = CheckpointCallback(
    save_freq=10000, save_path="./checkpoints/"
)

model.learn(
    total_timesteps=500_000,
    callback=[eval_callback, checkpoint_callback]
)
\`\`\`

---

## 6. TensorBoard

\`\`\`bash
tensorboard --logdir ./tensorboard/
# Monitor: reward, loss, learning rate, etc.
\`\`\`

---

## Tổng kết

| Framework | Vai trò | Key Features |
|-----------|--------|-------------|
| Gymnasium | Environment API | Standardized, wrappers |
| SB3 | Algorithm library | PPO, SAC, DQN — production-ready |
| TensorBoard | Visualization | Real-time training metrics |
| Optuna | HPO | Bayesian hyperparameter tuning |`
  },
  {
    dir: "03-phan-3-frameworks", file: "11-bai-10-custom-env.md",
    id: "019d8b32-bb10-7010-c010-ee1000000010",
    title: "Bài 10: Custom Environment Design — Xây dựng Game AI",
    slug: "bai-10-custom-environment",
    desc: "Design Gymnasium environment cho bài toán riêng. Reward shaping. State/action space design. Environment wrappers. Hands-on Snake Game AI.",
    mins: 150, sort: 9,
    section: "Phần 3: RL Frameworks & Thực hành",
    body: `## Giới thiệu

Xây dựng custom Gymnasium environment cho bài toán riêng — từ design state/action spaces đến reward shaping và training agent.

---

## 1. Custom Environment Template

\`\`\`python
import gymnasium as gym
from gymnasium import spaces
import numpy as np

class SnakeEnv(gym.Env):
    metadata = {"render_modes": ["human", "rgb_array"], "render_fps": 10}

    def __init__(self, grid_size=10, render_mode=None):
        super().__init__()
        self.grid_size = grid_size
        self.render_mode = render_mode
        
        # Action: 0=up, 1=right, 2=down, 3=left
        self.action_space = spaces.Discrete(4)
        
        # Observation: grid with snake body, head, food
        self.observation_space = spaces.Box(
            low=0, high=3, shape=(grid_size, grid_size), dtype=np.uint8
        )

    def reset(self, seed=None, options=None):
        super().reset(seed=seed)
        self.snake = [(5, 5)]
        self.direction = 1  # right
        self.food = self._place_food()
        self.score = 0
        self.steps = 0
        return self._get_obs(), self._get_info()

    def step(self, action):
        self.steps += 1
        self._move_snake(action)
        
        terminated = self._check_collision()
        truncated = self.steps >= self.grid_size * self.grid_size * 2
        reward = self._compute_reward(terminated)
        
        return self._get_obs(), reward, terminated, truncated, self._get_info()

    def _place_food(self):
        while True:
            pos = (self.np_random.integers(0, self.grid_size),
                   self.np_random.integers(0, self.grid_size))
            if pos not in self.snake:
                return pos
    
    def _get_obs(self):
        grid = np.zeros((self.grid_size, self.grid_size), dtype=np.uint8)
        for segment in self.snake:
            grid[segment] = 1  # body
        grid[self.snake[0]] = 2  # head
        grid[self.food] = 3  # food
        return grid
    
    def _get_info(self):
        return {"score": self.score, "length": len(self.snake)}
\`\`\`

---

## 2. Reward Shaping

\`\`\`python
def _compute_reward(self, terminated):
    if terminated:
        return -10.0
    if self.snake[0] == self.food:
        self.score += 1
        return 10.0
    
    # Distance-based shaping
    head = self.snake[0]
    dist_to_food = abs(head[0] - self.food[0]) + abs(head[1] - self.food[1])
    prev_dist = abs(self.prev_head[0] - self.food[0]) + abs(self.prev_head[1] - self.food[1])
    
    if dist_to_food < prev_dist:
        return 0.1   # Moving closer
    else:
        return -0.1  # Moving away
\`\`\`

### Reward Design Principles

| Principle | Mô tả |
|-----------|--------|
| Sparse vs Dense | Dense rewards faster learning but risk reward hacking |
| Magnitude | Balance positive/negative rewards |
| Shaping | Guide agent without changing optimal policy |
| Potential-based | Guarantees policy invariance |

---

## 3. Register & Train

\`\`\`python
# Register custom env
gym.register(id="Snake-v0", entry_point="snake_env:SnakeEnv")

# Train with SB3
from stable_baselines3 import PPO
env = gym.make("Snake-v0")
model = PPO("MlpPolicy", env, verbose=1)
model.learn(total_timesteps=500_000)
\`\`\`

---

## Tổng kết

| Aspect | Best Practice |
|--------|---------------|
| Observation | Minimal, informative, normalized |
| Action space | Discrete when possible |
| Reward | Dense shaping + sparse bonus |
| Termination | Clear, fair conditions |
| Testing | Verify with random agent first |`
  },
  {
    dir: "03-phan-3-frameworks", file: "12-bai-11-robotics.md",
    id: "019d8b32-bb11-7011-c011-ee1100000011",
    title: "Bài 11: Robotics Simulation — MuJoCo & Isaac Gym",
    slug: "bai-11-robotics-simulation",
    desc: "Physics simulation cho RL. MuJoCo environments. NVIDIA Isaac Gym GPU-accelerated training. Sim-to-real transfer. Domain randomization.",
    mins: 180, sort: 10,
    section: "Phần 3: RL Frameworks & Thực hành",
    body: `## Giới thiệu

Robotics là ứng dụng quan trọng nhất của RL — train agent trong simulation, deploy lên robot thật. **MuJoCo** và **NVIDIA Isaac Gym** là 2 physics simulators hàng đầu.

---

## 1. MuJoCo Environments

\`\`\`python
import gymnasium as gym

# Standard robotics environments
envs = [
    "Ant-v4",        # 4-legged locomotion
    "Humanoid-v4",   # Bipedal walking
    "HalfCheetah-v4", # 2D running
    "Hopper-v4",     # 1-leg hopping
    "Walker2d-v4",   # 2D walking
]

for env_name in envs:
    env = gym.make(env_name)
    print(f"{env_name}: obs={env.observation_space.shape}, act={env.action_space.shape}")
    env.close()
\`\`\`

---

## 2. Training with SAC

\`\`\`python
from stable_baselines3 import SAC

env = gym.make("Ant-v4")
model = SAC(
    "MlpPolicy", env,
    learning_rate=3e-4,
    buffer_size=1_000_000,
    batch_size=256,
    tau=0.005,
    gamma=0.99,
    verbose=1,
    tensorboard_log="./ant_tensorboard/",
)
model.learn(total_timesteps=1_000_000)
model.save("sac_ant")
\`\`\`

---

## 3. NVIDIA Isaac Gym

GPU-accelerated parallel training — 1000× faster:

\`\`\`python
# Isaac Gym runs thousands of environments in parallel on GPU
from isaacgym import gymapi, gymtorch

gym = gymapi.acquire_gym()
sim = gym.create_sim(0, 0, gymapi.SIM_PHYSX)

# Create 4096 parallel environments
num_envs = 4096
envs = []
for i in range(num_envs):
    env = gym.create_env(sim, lower, upper, num_per_row)
    envs.append(env)
\`\`\`

---

## 4. Sim-to-Real Transfer

| Technique | Mô tả |
|-----------|--------|
| Domain Randomization | Randomize physics params (mass, friction, etc.) |
| System Identification | Calibrate simulation to match real robot |
| Curriculum Learning | Easy → hard tasks gradually |
| Teacher-Student | Train teacher in sim, distill to student |

\`\`\`python
# Domain randomization example
def randomize_physics(env):
    env.gravity = np.random.uniform(-10.5, -9.5)
    env.friction = np.random.uniform(0.5, 1.5)
    env.mass_scale = np.random.uniform(0.8, 1.2)
    env.actuator_strength = np.random.uniform(0.9, 1.1)
\`\`\`

---

## Tổng kết

| Simulator | GPU Accel | Speed | Realism | License |
|-----------|----------|-------|---------|---------|
| MuJoCo | ❌ CPU | Medium | High | Free |
| Isaac Gym | ✅ GPU | Very fast | High | Free |
| PyBullet | ❌ CPU | Medium | Medium | Open-source |
| Brax | ✅ JAX | Fast | Medium | Open-source |`
  },
  {
    dir: "04-phan-4-rlhf-production", file: "13-bai-12-rlhf.md",
    id: "019d8b32-bb12-7012-c012-ee1200000012",
    title: "Bài 12: RLHF — Reinforcement Learning from Human Feedback",
    slug: "bai-12-rlhf",
    desc: "RLHF pipeline chi tiết: SFT → Reward Model → PPO fine-tuning. InstructGPT paper. Reward modeling. Constitutional AI. Implementation với TRL library.",
    mins: 180, sort: 11,
    section: "Phần 4: RLHF, LLM Alignment & Production",
    body: `## Giới thiệu

**RLHF (Reinforcement Learning from Human Feedback)** là kỹ thuật đã biến GPT-3 thành ChatGPT — align LLM với human preferences thông qua reward model and PPO.

---

## 1. RLHF Pipeline — 3 Steps

### Step 1: Supervised Fine-Tuning (SFT)

\`\`\`python
from transformers import AutoModelForCausalLM, TrainingArguments
from trl import SFTTrainer

model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-3.1-8B")

trainer = SFTTrainer(
    model=model,
    train_dataset=demo_dataset,  # (prompt, response) pairs
    args=TrainingArguments(
        output_dir="./sft_model",
        num_train_epochs=3,
        per_device_train_batch_size=4,
        learning_rate=2e-5,
    ),
)
trainer.train()
\`\`\`

### Step 2: Reward Model Training

\`\`\`python
from trl import RewardTrainer, RewardConfig

reward_model = AutoModelForSequenceClassification.from_pretrained(
    "meta-llama/Llama-3.1-8B", num_labels=1
)

trainer = RewardTrainer(
    model=reward_model,
    train_dataset=preference_dataset,
    # Format: {prompt, chosen_response, rejected_response}
    args=RewardConfig(
        output_dir="./reward_model",
        per_device_train_batch_size=4,
        num_train_epochs=1,
    ),
)
trainer.train()
\`\`\`

### Step 3: PPO Fine-Tuning

\`\`\`python
from trl import PPOTrainer, PPOConfig, AutoModelForCausalLMWithValueHead

model = AutoModelForCausalLMWithValueHead.from_pretrained("./sft_model")
ref_model = AutoModelForCausalLMWithValueHead.from_pretrained("./sft_model")

config = PPOConfig(
    batch_size=16,
    learning_rate=1e-5,
    ppo_epochs=4,
    mini_batch_size=4,
)

trainer = PPOTrainer(config, model, ref_model, tokenizer)

for batch in dataloader:
    queries = batch["query"]
    responses = model.generate(queries)
    rewards = reward_model(queries, responses)
    
    # KL penalty to prevent reward hacking
    trainer.step(queries, responses, rewards)
\`\`\`

---

## 2. Reward Hacking & KL Divergence

\`\`\`
Total Reward = RM_score(response) - β * KL(π || π_ref)
\`\`\`

KL penalty giữ model gần SFT model → tránh reward hacking.

---

## 3. Constitutional AI (Anthropic)

1. Generate responses
2. Ask model to critique based on principles
3. Ask model to revise
4. Train on revised responses (RLAIF)

---

## Tổng kết

| Step | Input | Output | Purpose |
|------|-------|--------|---------|
| SFT | Demonstrations | Fine-tuned LLM | Learn format |
| Reward Model | Human preferences | Reward scorer | Learn preferences |
| PPO | RM rewards | Aligned LLM | Optimize for preferences |`
  },
  {
    dir: "04-phan-4-rlhf-production", file: "14-bai-13-dpo.md",
    id: "019d8b32-bb13-7013-c013-ee1300000013",
    title: "Bài 13: DPO & GRPO — Direct Preference Optimization",
    slug: "bai-13-dpo-grpo",
    desc: "DPO: skip reward model, train trực tiếp từ preferences. RLHF vs DPO comparison. GRPO (DeepSeek). KTO, IPO variants. Full implementation với TRL.",
    mins: 150, sort: 12,
    section: "Phần 4: RLHF, LLM Alignment & Production",
    body: `## Giới thiệu

**DPO (Direct Preference Optimization)** đơn giản hóa RLHF — train trực tiếp từ preference data mà không cần reward model riêng và PPO.

---

## 1. DPO vs RLHF

| Aspect | RLHF | DPO |
|--------|------|-----|
| Steps | SFT → RM → PPO (3 steps) | SFT → DPO (2 steps) |
| Reward Model | Explicit, separate | Implicit in policy |
| Training | Complex (PPO) | Simple (supervised-like) |
| Stability | Tricky to tune | Stable |
| Performance | State-of-the-art | Comparable |

---

## 2. DPO Objective

$$\\mathcal{L}_{DPO}(\\pi_\\theta; \\pi_{ref}) = -\\mathbb{E}\\left[\\log \\sigma\\left(\\beta \\log \\frac{\\pi_\\theta(y_w|x)}{\\pi_{ref}(y_w|x)} - \\beta \\log \\frac{\\pi_\\theta(y_l|x)}{\\pi_{ref}(y_l|x)}\\right)\\right]$$

---

## 3. DPO Implementation với TRL

\`\`\`python
from trl import DPOTrainer, DPOConfig
from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("./sft_model")
ref_model = AutoModelForCausalLM.from_pretrained("./sft_model")
tokenizer = AutoTokenizer.from_pretrained("./sft_model")

config = DPOConfig(
    beta=0.1,
    learning_rate=5e-7,
    per_device_train_batch_size=4,
    num_train_epochs=3,
    output_dir="./dpo_model",
)

trainer = DPOTrainer(
    model=model,
    ref_model=ref_model,
    train_dataset=preference_dataset,
    # Dataset format: {"prompt": str, "chosen": str, "rejected": str}
    tokenizer=tokenizer,
    args=config,
)
trainer.train()
\`\`\`

---

## 4. GRPO — Group Relative Policy Optimization

Dùng trong **DeepSeek-R1**:
- Không cần critic/value network
- Group-based advantage estimation
- Efficient reward computation

\`\`\`python
from trl import GRPOTrainer, GRPOConfig

config = GRPOConfig(
    num_generations=4,  # Generate multiple responses per prompt
    learning_rate=1e-6,
)

trainer = GRPOTrainer(
    model=model,
    reward_funcs=[reward_function],
    train_dataset=prompt_dataset,
    args=config,
)
trainer.train()
\`\`\`

---

## 5. Other Variants

| Method | Data Needed | Key Idea |
|--------|------------|----------|
| DPO | Pairwise preferences | Implicit reward in policy |
| GRPO | Prompts + reward fn | Group-based advantages |
| KTO | Binary (good/bad) | Works without pairs |
| IPO | Pairwise preferences | Regularized DPO |
| ORPO | Pairwise preferences | No reference model needed |

---

## Tổng kết

| Method | Complexity | Data | Performance |
|--------|-----------|------|-------------|
| RLHF | High | Comparisons + RM | Best |
| DPO | Low | Comparisons only | Great |
| GRPO | Medium | Prompts + reward fn | Great |
| KTO | Low | Binary feedback | Good |`
  },
  {
    dir: "04-phan-4-rlhf-production", file: "15-bai-14-multi-agent.md",
    id: "019d8b32-bb14-7014-c014-ee1400000014",
    title: "Bài 14: Multi-Agent RL — Cooperation & Competition",
    slug: "bai-14-multi-agent-rl",
    desc: "Multi-agent settings: cooperative, competitive, mixed. MAPPO, QMIX algorithms. PettingZoo framework. Game theory basics. Emergent behaviors. Self-play.",
    mins: 150, sort: 13,
    section: "Phần 4: RLHF, LLM Alignment & Production",
    body: `## Giới thiệu

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

\`\`\`python
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
\`\`\`

---

## 3. MAPPO — Multi-Agent PPO

\`\`\`python
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
\`\`\`

**CTDE**: Centralized Training, Decentralized Execution
- Training: Critic sees everything
- Execution: Actor only sees local observation

---

## 4. Self-Play

Train agent by playing against copies of itself:

\`\`\`python
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
\`\`\`

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
| MADDPG | Mixed | Multi-agent DDPG with centralized critics |`
  },
  {
    dir: "04-phan-4-rlhf-production", file: "16-bai-15-rl-production.md",
    id: "019d8b32-bb15-7015-c015-ee1500000015",
    title: "Bài 15: RL Production — Deploy & Monitor RL Agents",
    slug: "bai-15-rl-production",
    desc: "Deploy RL policies vào production. Model serving với ONNX, TorchScript. Safety constraints. Online vs offline RL. Monitoring reward drift. A/B testing policies.",
    mins: 120, sort: 14,
    section: "Phần 4: RLHF, LLM Alignment & Production",
    body: `## Giới thiệu

Deploy RL agents vào production khác biệt lớn với supervised ML — cần xử lý **safety constraints**, **online learning**, **reward monitoring**, và **policy versioning**.

---

## 1. Model Export & Serving

### ONNX Export

\`\`\`python
import torch
from stable_baselines3 import PPO

model = PPO.load("best_model")

# Export policy to ONNX
dummy_input = torch.randn(1, model.observation_space.shape[0])
torch.onnx.export(
    model.policy, dummy_input, "policy.onnx",
    input_names=["observation"],
    output_names=["action"],
    dynamic_axes={"observation": {0: "batch"}, "action": {0: "batch"}}
)
\`\`\`

### FastAPI Serving

\`\`\`python
from fastapi import FastAPI
import onnxruntime as ort
import numpy as np

app = FastAPI()
session = ort.InferenceSession("policy.onnx")

@app.post("/predict")
def predict(observation: list[float]):
    obs = np.array([observation], dtype=np.float32)
    result = session.run(None, {"observation": obs})
    action = int(np.argmax(result[0]))
    return {"action": action}
\`\`\`

---

## 2. Safety Constraints

\`\`\`python
class SafeRLPolicy:
    def __init__(self, model, constraints):
        self.model = model
        self.constraints = constraints
    
    def predict(self, observation):
        action, _ = self.model.predict(observation, deterministic=True)
        
        # Check safety constraints
        if self.constraints.is_unsafe(observation, action):
            action = self.constraints.safe_fallback(observation)
            self.log_safety_override(observation, action)
        
        return action
    
    def log_safety_override(self, obs, action):
        # Track safety overrides for monitoring
        pass
\`\`\`

---

## 3. Offline RL

Train from logged data — no environment interaction:

\`\`\`python
# Conservative Q-Learning (CQL)
from d3rlpy.algos import CQLConfig

cql = CQLConfig().create(device="cuda")
cql.fit(
    offline_dataset,
    n_steps=100_000,
    evaluators={"environment": gym_evaluator}
)
\`\`\`

---

## 4. Monitoring & A/B Testing

\`\`\`python
class RLMonitor:
    def __init__(self):
        self.rewards = []
        self.actions = []
    
    def log_step(self, obs, action, reward):
        self.rewards.append(reward)
        self.actions.append(action)
    
    def check_drift(self, window=1000):
        recent = self.rewards[-window:]
        historical = self.rewards[-2*window:-window]
        # Statistical test for reward drift
        from scipy.stats import ks_2samp
        statistic, p_value = ks_2samp(recent, historical)
        if p_value < 0.05:
            alert("Reward distribution drift detected!")
\`\`\`

---

## 5. Production Checklist

| Aspect | Approach |
|--------|----------|
| Model format | ONNX or TorchScript |
| Serving | FastAPI + async inference |
| Safety | Hard constraints + fallback policy |
| Monitoring | Reward tracking, drift detection |
| Versioning | Policy version registry |
| Rollback | Instant switch to previous policy |
| A/B testing | Canary deployments |
| Logging | Full state-action-reward traces |

---

## Tổng kết

| Topic | Key Takeaway |
|-------|-------------|
| Export | ONNX for cross-platform deployment |
| Safety | Always have fallback policy |
| Monitoring | Track reward distribution over time |
| Offline RL | Train from logs when online not possible |`
  },
  {
    dir: "04-phan-4-rlhf-production", file: "17-bai-16-capstone.md",
    id: "019d8b32-bb16-7016-c016-ee1600000016",
    title: "Bài 16: Capstone — Xây dựng RL Agent cho Real-world Problem",
    slug: "bai-16-capstone",
    desc: "Dự án tổng kết: Chọn 1 trong 3 projects: Game AI Agent, Robot Control, hoặc RLHF cho Chatbot. End-to-end pipeline từ design đến deploy.",
    mins: 240, sort: 15,
    section: "Phần 4: RLHF, LLM Alignment & Production",
    body: `## Giới thiệu

Capstone project áp dụng toàn bộ kiến thức RL vào một bài toán thực tế end-to-end. Chọn 1 trong 3 projects bên dưới.

---

## Project 1: Game AI Agent

### Mô tả
Xây dựng AI agent chơi game — từ custom environment đến trained agent có thể demo.

### Technical Stack
- Gymnasium custom environment (Snake, Flappy Bird, Tetris)
- DQN hoặc PPO training
- Hyperparameter optimization với Optuna
- Web demo với Gradio

### Steps

\`\`\`python
# 1. Build custom environment
class GameEnv(gym.Env):
    # Implement reset(), step(), render()
    pass

# 2. Train agent
from stable_baselines3 import PPO
model = PPO("MlpPolicy", GameEnv(), verbose=1)
model.learn(total_timesteps=1_000_000)

# 3. Evaluate
mean_reward, std = evaluate_policy(model, GameEnv(), n_eval_episodes=100)
print(f"Score: {mean_reward:.1f} +/- {std:.1f}")

# 4. Demo
import gradio as gr
def play_game(seed):
    env = GameEnv(render_mode="rgb_array")
    frames = record_episode(model, env, seed)
    return frames
\`\`\`

---

## Project 2: Robot Control

### Mô tả
Train robot locomotion agent trong MuJoCo — walking, running, or manipulation.

### Technical Stack
- MuJoCo (Ant, Humanoid, or custom robot)
- SAC training with domain randomization
- TensorBoard analysis
- Sim-to-real transfer analysis

### Evaluation

\`\`\`python
# Compare algorithms
algorithms = {
    "PPO": PPO("MlpPolicy", env),
    "SAC": SAC("MlpPolicy", env),
    "TD3": TD3("MlpPolicy", env),
}

results = {}
for name, model in algorithms.items():
    model.learn(total_timesteps=1_000_000)
    mean_reward, _ = evaluate_policy(model, env, n_eval_episodes=50)
    results[name] = mean_reward
\`\`\`

---

## Project 3: RLHF / DPO Chatbot

### Mô tả
Align một small LLM với human preferences sử dụng DPO hoặc RLHF.

### Technical Stack
- Base model: SmolLM hoặc Qwen2.5 (0.5B-1.5B)
- TRL library cho SFT + DPO
- Evaluation: MT-Bench, AlpacaEval
- Gradio chat interface

### Pipeline

\`\`\`python
# 1. SFT
sft_trainer = SFTTrainer(model, train_dataset=sft_data)
sft_trainer.train()

# 2. DPO
dpo_trainer = DPOTrainer(model, ref_model, train_dataset=pref_data)
dpo_trainer.train()

# 3. Evaluate
# - Perplexity
# - Win rate vs base model
# - Human evaluation

# 4. Deploy
import gradio as gr
demo = gr.ChatInterface(fn=generate_response)
demo.launch()
\`\`\`

---

## Deliverables

| Item | Description | Weight |
|------|-------------|--------|
| Code | Clean, documented GitHub repository | 30% |
| Training logs | TensorBoard visualizations, learning curves | 20% |
| Report | Architecture decisions, results analysis, ablations | 30% |
| Demo | Interactive demo (web app or video) | 20% |

---

## Tổng kết

Chúc mừng bạn đã hoàn thành series **Reinforcement Learning: Từ Cơ bản đến Nâng cao**!

### Kiến thức đã học

| Phần | Nội dung chính |
|------|----------------|
| 1. Nền tảng | MDP, DP, MC, TD, Q-Learning |
| 2. Deep RL | DQN, Policy Gradient, PPO, SAC |
| 3. Frameworks | Gymnasium, SB3, MuJoCo |
| 4. Production | RLHF, DPO, Multi-agent, Deploy |

### Hướng phát triển tiếp

- **Research**: Read papers on arXiv, reproduce results
- **Competition**: Kaggle RL, NeurIPS challenges
- **Open-source**: Contribute to SB3, TRL, PettingZoo
- **Career**: RL Engineer, AI Safety Researcher, Robotics Engineer`
  }
];

for (const l of lessons) {
  const dirPath = path.join(base, l.dir, "lessons");
  fs.mkdirSync(dirPath, { recursive: true });
  const frontmatter = [
    "---",
    `id: ${l.id}`,
    `title: ${JSON.stringify(l.title)}`,
    `slug: ${l.slug}`,
    `description: >-`,
    `  ${l.desc}`,
    `duration_minutes: ${l.mins}`,
    `is_free: true`,
    `video_url: null`,
    `sort_order: ${l.sort}`,
    `section_title: ${JSON.stringify(l.section)}`,
    `course:`,
    `  id: 019d8b32-aa01-7001-b001-ff0300000001`,
    `  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"`,
    `  slug: reinforcement-learning-tu-co-ban-den-nang-cao`,
    "---",
    "",
    l.body,
    ""
  ].join("\n");
  fs.writeFileSync(path.join(dirPath, l.file), frontmatter);
  console.log("Created: " + l.file);
}
console.log("\nDone! Created " + lessons.length + " RL lesson files.");
