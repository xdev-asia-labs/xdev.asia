---
id: 019d8b32-bb11-7011-c011-ee1100000011
title: "Bài 11: Robotics Simulation — MuJoCo & Isaac Gym"
slug: bai-11-robotics-simulation
description: >-
  Physics simulation cho RL. MuJoCo environments. NVIDIA Isaac Gym GPU-accelerated training. Sim-to-real transfer. Domain randomization.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: RL Frameworks & Thực hành"
course:
  id: 019d8b32-aa01-7001-b001-ff0300000001
  title: "Reinforcement Learning: Từ Cơ bản đến Nâng cao"
  slug: reinforcement-learning-tu-co-ban-den-nang-cao
---

## Giới thiệu

Robotics là ứng dụng quan trọng nhất của RL — train agent trong simulation, deploy lên robot thật. **MuJoCo** và **NVIDIA Isaac Gym** là 2 physics simulators hàng đầu.

---

## 1. MuJoCo Environments

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

## 3. NVIDIA Isaac Gym

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

## 4. Sim-to-Real Transfer

| Technique | Mô tả |
|-----------|--------|
| Domain Randomization | Randomize physics params (mass, friction, etc.) |
| System Identification | Calibrate simulation to match real robot |
| Curriculum Learning | Easy → hard tasks gradually |
| Teacher-Student | Train teacher in sim, distill to student |

```python
# Domain randomization example
def randomize_physics(env):
    env.gravity = np.random.uniform(-10.5, -9.5)
    env.friction = np.random.uniform(0.5, 1.5)
    env.mass_scale = np.random.uniform(0.8, 1.2)
    env.actuator_strength = np.random.uniform(0.9, 1.1)
```

---

## Tổng kết

| Simulator | GPU Accel | Speed | Realism | License |
|-----------|----------|-------|---------|---------|
| MuJoCo | ❌ CPU | Medium | High | Free |
| Isaac Gym | ✅ GPU | Very fast | High | Free |
| PyBullet | ❌ CPU | Medium | Medium | Open-source |
| Brax | ✅ JAX | Fast | Medium | Open-source |
