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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3226" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3226)"/>

  <!-- Decorations -->
  <g>
    <circle cx="838" cy="284" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1076" cy="282" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="814" cy="280" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1052" cy="278" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="276" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="224" x2="1100" y2="304" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="254" x2="1050" y2="324" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.7749907475932,204.5 1057.7749907475932,243.5 1024,263 990.2250092524068,243.5 990.2250092524068,204.5 1024,185" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI &amp; ML — Bài 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 15: RL Production — Deploy &amp; Monitor</tspan>
      <tspan x="60" dy="42">RL Agents</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Reinforcement Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: RLHF, LLM Alignment &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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
