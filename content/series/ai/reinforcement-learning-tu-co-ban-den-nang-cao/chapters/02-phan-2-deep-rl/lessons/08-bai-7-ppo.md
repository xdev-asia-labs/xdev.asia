---
id: 019d8b32-bb07-7007-c007-ee0700000007
title: "Bài 7: PPO — Proximal Policy Optimization"
slug: bai-7-ppo
description: >-
  Trust region methods. PPO-Clip objective. Generalized Advantage Estimation (GAE). Full PPO implementation. So sánh PPO vs TRPO vs A3C.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Deep Reinforcement Learning — Neural Networks meet RL"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

**PPO (Proximal Policy Optimization)** là algorithm được dùng nhiều nhất trong RL hiện đại — từ game AI (OpenAI Five, Dota 2) đến RLHF (ChatGPT). PPO đơn giản, stable, và hiệu quả.

---

## 1. Motivation: Tại sao cần PPO?

Policy gradient gốc có vấn đề:
- **Quá nhỏ step**: Chậm
- **Quá lớn step**: Policy collapse

PPO giới hạn policy update trong "trust region" — không thay đổi quá nhiều mỗi lần.

---

## 2. PPO-Clip Objective

$$L^{CLIP}(\theta) = \mathbb{E}[\min(r_t(\theta)\hat{A}_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon)\hat{A}_t)]$$

Trong đó:
- $r_t(\theta) = \frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{old}}(a_t|s_t)}$ — probability ratio
- $\hat{A}_t$ — estimated advantage
- $\epsilon$ — clipping range (thường 0.2)

---

## 3. GAE — Generalized Advantage Estimation

$$\hat{A}_t^{GAE(\gamma,\lambda)} = \sum_{l=0}^{\infty} (\gamma\lambda)^l \delta_{t+l}$$

```python
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
```

---

## 4. Full PPO Implementation

```python
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
```

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
| Multiple epochs | Reuse collected data nhiều lần |
