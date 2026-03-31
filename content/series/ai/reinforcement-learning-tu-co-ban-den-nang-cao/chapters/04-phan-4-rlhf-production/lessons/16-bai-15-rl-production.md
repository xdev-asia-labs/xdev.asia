---
id: 019d8b32-bb15-7015-c015-ee1500000015
title: "Bài 15: RL Production — Deploy & Monitor RL Agents"
slug: bai-15-rl-production
description: >-
  Deploy RL policies vào production. Model serving với ONNX, TorchScript. Safety constraints. Online vs offline RL. Monitoring reward drift. A/B testing policies.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: RLHF, LLM Alignment & Production"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

Deploy RL agents vào production khác biệt lớn với supervised ML — cần xử lý **safety constraints**, **online learning**, **reward monitoring**, và **policy versioning**.

---

## 1. Model Export & Serving

### ONNX Export

```python
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
```

### FastAPI Serving

```python
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
```

---

## 2. Safety Constraints

```python
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
```

---

## 3. Offline RL

Train from logged data — no environment interaction:

```python
# Conservative Q-Learning (CQL)
from d3rlpy.algos import CQLConfig

cql = CQLConfig().create(device="cuda")
cql.fit(
    offline_dataset,
    n_steps=100_000,
    evaluators={"environment": gym_evaluator}
)
```

---

## 4. Monitoring & A/B Testing

```python
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
```

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
| Offline RL | Train from logs when online not possible |
