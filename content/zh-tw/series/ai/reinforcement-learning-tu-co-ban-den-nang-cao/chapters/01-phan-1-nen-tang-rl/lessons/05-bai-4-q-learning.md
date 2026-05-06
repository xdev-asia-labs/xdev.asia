---
id: 019d8b32-bb04-7004-c004-ee0400000004
title: 第 4 課：Q-Learning 深入研究與多臂 Bandits
slug: bai-4-q-learning-bandits
description: Q-Learning 演算法詳細資訊。 ε-貪婪探索。多臂強盜問題。 UCB，湯普森採樣。實踐計程車環境。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 第 1 部分：強化學習基礎 — 馬可夫決策過程與表格方法
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 強化學習：從基礎到高級
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1853" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1853)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1044" cy="242" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="988" cy="226" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="932" cy="210" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="876" cy="194" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="820" cy="178" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="62" x2="1100" y2="142" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="92" x2="1050" y2="162" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="994.0429399400242,143.5 994.0429399400242,180.5 962,199 929.9570600599758,180.5 929.9570600599758,143.5 962,125" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：Q-Learning 深入研究與多臂訓練</tspan>
      <tspan x="60" dy="42">土匪</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：強化學習基礎 — 馬可夫決策過程與表格方法</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**Q-Learning** 是離策略 TD 控制演算法 - DQN 和所有基於值的深度 RL 的基礎。 **多臂強盜**是一種簡化的強化學習，專注於探索與利用。

---

## 1.Q-Learning演算法

```python
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
```

### SARSA 與 Q-Learning

| |非典 | Q-學習 |
|---|--------|-------------|
|類型 |在保政策 |政策外 |
|更新 | Q(s,a) += α[r + γQ(s',a') - Q(s,a)] | Q(s,a) += α[r + γ max Q(s',·) - Q(s,a)] |
|行為 |更安全，遵循 ε-貪婪 |學習最優策略 |

---

## 2. 探索策略

### ε-貪婪衰變

```python
def epsilon_greedy_decay(Q, state, episode, min_epsilon=0.01, decay=0.995):
    epsilon = max(min_epsilon, 1.0 * (decay ** episode))
    if np.random.random() < epsilon:
        return env.action_space.sample()
    return np.argmax(Q[state])
```

### 玻爾茲曼（Softmax）探索

```python
def boltzmann_action(Q, state, temperature=1.0):
    q_values = Q[state] / temperature
    probs = np.exp(q_values - np.max(q_values))
    probs /= probs.sum()
    return np.random.choice(len(probs), p=probs)
```

---

## 3. 多臂強盜

簡化的 RL：1 個狀態，K 個動作（武器），最大化獎勵。

```python
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
```

---

## 4. 實踐：計程車環境

```python
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
```

---

## 總結

|戰略|優勢 |缺點 |
|----------|--------|-------------|
| ε-貪婪 |簡單、有效 |統一隨機探索|
| ε-衰變|平衡探索/利用 |需要調整衰減率|
|聯合銀行|有原則，沒有ε |確定性|
|湯普森|貝葉斯最優 |計算成本|
|波茲曼|平穩、溫控|對規模敏感 |
