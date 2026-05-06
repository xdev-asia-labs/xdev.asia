---
id: 019d8b31-bb05-7005-c005-ee0500000005
title: 第 5 課：穩定擴散深入探討 — 架構與管道
slug: bai-5-stable-diffusion-deep-dive
description: >-
  潛在擴散模型：為什麼在潛在空間中工作？ UNet架構。使用 CLIP 進行文字調節。
  VAE編碼器/解碼器。調度器：DDIM、Euler、DPM++。從提示到圖像的詳細流程。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 4
section_title: 第 2 部分：擴散模型 — 革命性的影像創建
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: 生成式 AI：使用 AI 創建圖像和視頻
  slug: generative-ai-tao-hinh-anh-video
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6782" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6782)"/>

  <!-- Decorations -->
  <g>
    <circle cx="646" cy="268" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="692" cy="174" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="738" cy="80" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="784" cy="246" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="830" cy="152" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="208" x2="1100" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="238" x2="1050" y2="308" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="945.2390923627308,86.5 945.2390923627308,129.5 908,151 870.7609076372692,129.5 870.7609076372692,86.50000000000001 908,65" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：穩定擴散深入研究 — 螞蟻</tspan>
      <tspan x="60" dy="42">結構及管線</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成式 AI：使用 AI 創建圖像和視頻</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：擴散模型 — 革命性的影像創建</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**穩定擴散**是**潛在擴散模型（LDM）** - 它不是在像素空間（512×512×3）中擴散，而是在小48倍的**潛在空間**（64×64×4）中運行。這是一項突破，允許在消費級 GPU 上運行擴散。

---

## 1.穩定的擴散架構

```
┌─────────────────────────────────────────────────────────┐
│              STABLE DIFFUSION PIPELINE                   │
│                                                         │
│  "a cat in space"                                       │
│        ↓                                                │
│  ┌──────────┐     ┌─────────────────────────┐          │
│  │   CLIP   │────→│    UNet + Scheduler      │          │
│  │  Text    │     │  (Denoise in latent)     │          │
│  │ Encoder  │     │  T steps: 20-50          │          │
│  └──────────┘     └───────────┬─────────────┘          │
│                               ↓                         │
│                       ┌──────────────┐                  │
│  Noise z (64x64x4) → │  VAE Decoder  │ → Image 512x512│
│                       └──────────────┘                  │
└─────────────────────────────────────────────────────────┘
```

### 組件詳細信息

```python
from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained("stabilityai/stable-diffusion-xl-base-1.0")

# 4 components chính:
# 1. Text Encoder (CLIP): text → embeddings
pipe.text_encoder  # CLIPTextModel

# 2. UNet: noise predictor, conditioned on text
pipe.unet  # UNet2DConditionModel

# 3. VAE: latent ↔ pixel space
pipe.vae  # AutoencoderKL

# 4. Scheduler: noise schedule algorithm
pipe.scheduler  # EulerDiscreteScheduler
```

---

## 2. 管道分步

```python
import torch
from diffusers import AutoencoderKL, UNet2DConditionModel, EulerDiscreteScheduler
from transformers import CLIPTextModel, CLIPTokenizer

# Step 1: Tokenize & encode text
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-large-patch14")
text_encoder = CLIPTextModel.from_pretrained("openai/clip-vit-large-patch14")

prompt = "a cat wearing sunglasses, digital art"
tokens = tokenizer(prompt, return_tensors="pt", padding="max_length", max_length=77)
text_embeddings = text_encoder(tokens.input_ids)[0]  # [1, 77, 768]

# Step 2: Initialize random latent
latent = torch.randn(1, 4, 64, 64)  # latent space

# Step 3: Denoise loop
scheduler = EulerDiscreteScheduler(num_train_timesteps=1000)
scheduler.set_timesteps(30)  # 30 denoising steps

for t in scheduler.timesteps:
    # Predict noise conditioned on text
    noise_pred = unet(latent, t, encoder_hidden_states=text_embeddings).sample

    # Classifier-free guidance
    noise_uncond = unet(latent, t, encoder_hidden_states=uncond_embeddings).sample
    noise_pred = noise_uncond + guidance_scale * (noise_pred - noise_uncond)

    # Update latent
    latent = scheduler.step(noise_pred, t, latent).prev_sample

# Step 4: Decode latent → pixel image
image = vae.decode(latent / 0.18215).sample
```

---

## 3.無分類器指導（CFG）

$$\hat{\epsilon} = \epsilon_{uncond} + s \cdot (\epsilon_{cond} - \epsilon_{uncond})$$

```python
# guidance_scale s controls text adherence
# s = 1: no guidance (ignore prompt)
# s = 7-8: balanced (default)
# s = 15-20: strong adherence (can be over-saturated)

guidance_scale = 7.5

# During inference: run UNet twice
noise_cond = unet(latent, t, text_embeddings)    # conditioned
noise_uncond = unet(latent, t, empty_embeddings)  # unconditioned

# Interpolate
noise_pred = noise_uncond + guidance_scale * (noise_cond - noise_uncond)
```

---

## 4.VAE——潛在空間壓縮

```python
# Encode: 512x512x3 → 64x64x4 (compression ratio ~48x)
with torch.no_grad():
    latent = vae.encode(image).latent_dist.sample()
    latent = latent * 0.18215  # scaling factor

# Decode: 64x64x4 → 512x512x3
with torch.no_grad():
    image = vae.decode(latent / 0.18215).sample
```

為什麼是潛在空間？
- **記憶體**：512×512×3 = 786K 像素 → 64×64×4 = 16K 值
- **速度**：UNet 處理小於 48x 的張量
- **品質**：VAE 學會了智慧壓縮

---

## 5. 調度程式－去雜訊演算法

```python
from diffusers import (
    DDPMScheduler,        # Original, 1000 steps
    DDIMScheduler,        # Deterministic, 50 steps
    EulerDiscreteScheduler,       # Fast, 20-30 steps
    DPMSolverMultistepScheduler,  # DPM++, 20 steps, high quality
    UniPCMultistepScheduler,      # 10-20 steps
)

# Đổi scheduler dễ dàng
pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
```

|調度程序|步驟|速度|品質 |使用案例 |
|------------|---------|--------|---------|----------|
| DDPM | 1000 | 1000很慢|參考|訓練|
| DDIM | 50 | 50中|好 |一般|
|歐拉| 20-30 | 20-30快|太棒了|預設 SDXL |
| DPM++ 2M | 20-25 | 20-25快|優|推薦|
|聯合電腦| 10-15 | 10-15非常快|好 |即時 |

---

## 6. 穩定的擴散版本

|版本 |解析度|文字編碼器 |發佈 |
|--------|---------|-------------|---------|
|標清1.5 | 512×512 |剪輯 ViT-L/14 | 2022 | 2022
|標清2.1 | 768×768 | OpenCLIP ViT-H | 2022 | 2022
| SDXL | 1024×1024 | CLIP ViT-L + OpenCLIP ViT-bigG | 2023 |
| SD3 | 1024×1024 |三重文字編碼器（CLIP×2 + T5）| 2024 | 2024
|助焊劑| 1024×1024 | T5 特大號 | 2024 | 2024

```python
# SDXL — recommended cho production
pipe = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16,
    variant="fp16",
)
pipe.to("cuda")

image = pipe(
    prompt="a majestic lion in a forest, photorealistic",
    negative_prompt="blurry, low quality, distorted",
    num_inference_steps=30,
    guidance_scale=7.5,
    width=1024,
    height=1024,
).images[0]
```

---

## 7. 否定提示與參數

```python
# Negative prompt: things to avoid
negative_prompt = "blurry, low quality, deformed, ugly, bad anatomy"

# Key parameters
image = pipe(
    prompt="...",
    negative_prompt=negative_prompt,
    num_inference_steps=30,    # More = better quality, slower
    guidance_scale=7.5,        # Text adherence (7-9 optimal)
    width=1024,
    height=1024,
    seed=42,                   # Reproducibility
).images[0]
```

---

## 總結

|組件|角色 |
|------------|---------|
| CLIP 文字編碼器 |文字→嵌入（語意）|
|大學網|以文字為條件的噪音預測器 |
| VAE |壓縮像素 ↔ 潛在空間 |
|調度程序|去雜訊步驟演算法|
| CFG |指導尺度調整文本依從性 |

> 📌 **下一篇文章：** 圖像生成提示工程－有效的提示寫作技巧。
