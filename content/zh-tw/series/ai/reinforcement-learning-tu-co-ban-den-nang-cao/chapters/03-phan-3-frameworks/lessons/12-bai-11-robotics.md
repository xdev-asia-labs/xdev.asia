---
id: 019d8b32-bb11-7011-c011-ee1100000011
title: 第 11 課：機器人模擬 — MuJoCo & Isaac Gym
slug: bai-11-robotics-simulation
description: 強化學習的物理模擬。 MuJoCo 環境。 NVIDIA Isaac Gym GPU 加速訓練。模擬到真實的傳輸。域隨機化。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 10
section_title: 第 3 部分：強化學習架構與實踐
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: 強化學習：從基礎到高級
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4891" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4891)"/>

  <!-- Decorations -->
  <g>
    <circle cx="623" cy="59" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="646" cy="242" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="669" cy="165" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="692" cy="88" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="271" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="229" x2="1100" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="259" x2="1050" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1017.1051177665153,157 1017.1051177665153,201 979,223 940.8948822334847,201 940.8948822334847,157 979,135" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 课：机器人模拟 — MuJoCo &</tspan>
      <tspan x="60" dy="42">艾薩克健身房</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">強化學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：強化學習架構與實踐</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Robotics is the most important application of RL - train agents in simulation, deploy to real robots. **MuJoCo** and **NVIDIA Isaac Gym** are the top 2 physics simulators.

---

## 1. MuJoCo 環境

```python
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
```

---

## 2. Training with SAC

```python
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
```

---

## 3.NVIDIA Isaac 健身房

GPU-accelerated parallel training — 1000× faster:

```python
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
```

---

## 4. 模擬到真實的傳輸

|技術|描述 |
|------------|--------|
|領域隨機化 | Randomize physics params (mass, friction, etc.) |
|系統識別|校準模擬以匹配真實機器人 |
| Curriculum Learning |簡單→困難的任務逐漸|
|師生 |模擬培訓教師，精進學生 |

```python
# Domain randomization example
def randomize_physics(env):
    env.gravity = np.random.uniform(-10.5, -9.5)
    env.friction = np.random.uniform(0.5, 1.5)
    env.mass_scale = np.random.uniform(0.8, 1.2)
    env.actuator_strength = np.random.uniform(0.9, 1.1)
```

---

## 總結

|模擬器| GPU Accel |速度|現實主義|授權|
|-----------|----------|-------|--------|---------|
|穆喬科| ❌ CPU |中|高|免費|
| Isaac Gym | ✅ GPU |很快|高|免費|
| PyBullet | ❌ CPU |中等|中等|开源|
| Brax | ✅ 賈克斯 |快|中等|開源|
