---
id: 019d8b32-bb15-7015-c015-ee1500000015
title: 第 15 課：強化學習生產 — 部署與監控強化學習代理
slug: bai-15-rl-production
description: 將強化學習策略部署到生產中。使用 ONNX、TorchScript 提供模型服務。安全限制。線上與線下盧比。監控獎勵漂移。 A/B 測試政策。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 第 4 部分：RLHF、LLM 調整和製作
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 強化學習：從基礎到高級
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：強化學習生產 — 部署與監控</tspan>
      <tspan x="60" dy="42">RL 代理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：RLHF、LLM 調整和製作</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

將強化學習代理部署到生產中與監督式機器學習有很大不同——需要處理**安全約束**、**線上學習**、**獎勵監控**和**策略版本控制**。

---

## 1. 模型匯出與服務

### ONNX 匯出

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

### FastAPI 服務

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

## 2. 安全限制

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

## 3. 離線盧比

根據記錄的資料進行訓練－無環境互動：

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

## 4. 監控與 A/B 測試

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

## 5. 生產清單

|方面|方法|
|--------|----------|
|模型格式| ONNX 或 TorchScript |
|服務| FastAPI + 非同步推理 |
|安全|硬約束+後備政策|
|監控|獎勵追蹤、漂移檢測 |
|版本控制 |政策版本登記|
|回滾 |即時切換到先前的政策|
| A/B 測試 |金絲雀部署 |
|記錄 |完整的狀態-動作-獎勵軌跡|

---

## 總結

|主題 |要點 |
|--------|-------------|
|出口|用於跨平台部署的 ONNX |
|安全|總是有後備政策|
|監控|追蹤一段時間內的獎勵分配 |
|離線強化學習 |無法在線上時從日誌進行訓練 |
