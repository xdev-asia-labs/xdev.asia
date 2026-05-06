---
id: 019c9619-ab09-7009-c109-ab0900000009
title: 'Lesson 9: Image Generation & Stable Diffusion'
slug: bai-9-image-generation
description: >-
  Theoretical Diffusion Models: forward/reverse process. Stable Diffusion
  architecture: VAE, U-Net, CLIP text encoder. Hands-on: text-to-image,
  image-to-image, ControlNet, LoRA for style.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: 'Part 3: Segmentation & Modern CV'
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: 'Computer Vision with Deep Learning: From CNN to Vision Transformer'
  slug: computer-vision-deep-learning
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7809" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7809)"/>

  <!-- Decorations -->
  <g>
    <circle cx="611" cy="183" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="622" cy="234" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="633" cy="285" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="644" cy="76" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="127" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="153" x2="1100" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="183" x2="1050" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="927.2487113059643,89 927.2487113059643,117 903,131 878.7512886940357,117 878.7512886940357,89 903,75" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI & ML — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 9: Image Generation & Stable Diffusion</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Computer Vision with Deep Learning: From CNN to Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Segmentation & Modern CV</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

From **DALL·E**, **Midjourney** to **Stable Diffusion** — AI that creates images from text has changed the creative industry. This article dives deep into **Diffusion Models**: how they work, the Stable Diffusion architecture, and hands-on text-to-image, image-to-image, ControlNet.

> 🎯 **Why learn?** Understanding Diffusion Models helps you create images, edit images, and apply them in the CV pipeline (synthetic data, augmentation, inpainting).

---

## 1. Diffusion Models — Theory

### 1.1 Core ideas

```
Forward Process (Thêm noise):
Ảnh gốc → Ảnh hơi noise → ... → Noise thuần túy (Gaussian)
  x_0        x_1                      x_T

Reverse Process (Khử noise):
Noise → Bớt noise → ... → Ảnh sạch!
 x_T      x_{T-1}           x_0

Model học: "Cho 1 ảnh có noise, predict noise đã thêm vào"
→ Trừ noise đi = ảnh sạch hơn
→ Lặp lại T bước = ảnh hoàn chỉnh
```

### 1.2 Why is Diffusion better than GAN?

| | GAN | Diffusion |
|--|-----|-----------|
| **Training** | Difficult (mode collapse, unstable) | Stable |
| **Diversity** | Low (mode collapse) | High (varied output) |
| **Quality** | Good but artifacts | Excellent |
| **Control** | Difficult to control | Text prompt, ControlNet |
| **Speed** | Fast (1 forward pass) | Slower (iterative) |

---

## 2. Stable Diffusion — Architecture

### 2.1 Three main components

```
Text Prompt: "A cat sitting on a beach at sunset"
    ↓
┌──────────────────┐
│ CLIP Text Encoder│  Biến text → embedding vector
│ (Frozen)         │
└──────────────────┘
    ↓ text embedding
┌──────────────────┐
│ U-Net            │  Predict noise trong LATENT SPACE
│ (Trained)        │  (không phải pixel space!)
│ + Cross-Attention│  (text embedding guide denoising)
└──────────────────┘
    ↓ denoised latent
┌──────────────────┐
│ VAE Decoder      │  Latent → Pixel image (upscale 8×)
│ (Frozen)         │
└──────────────────┘
    ↓
Output: 512×512 image
```

### 2.2 Latent Space — The secret to speed

```
Pixel Space:  512×512×3  = 786,432 numbers → Chậm!
Latent Space: 64×64×4    = 16,384 numbers  → Nhanh 48×!

VAE Encoder: Image (512×512) → Latent (64×64)
U-Net: Denoise in Latent Space
VAE Decoder: Latent (64×64) → Image (512×512)
```

---

## 3. Hands-on: Text-to-Image

### 3.1 Setup

```bash
pip install diffusers transformers accelerate torch
```

### 3.2 Basic Text-to-Image

```python
"""Text-to-Image với Stable Diffusion"""
import torch
from diffusers import StableDiffusionPipeline

# Load model (tải lần đầu ~5GB)
pipe = StableDiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-2-1",
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")

# Generate
prompt = "A majestic lion wearing a crown, digital art, 4k, highly detailed"
negative_prompt = "blurry, low quality, deformed"

image = pipe(
    prompt=prompt,
    negative_prompt=negative_prompt,
    num_inference_steps=30,    # Số bước denoise (20-50)
    guidance_scale=7.5,        # CFG: prompt adherence (5-15)
    width=768,
    height=768,
).images[0]

image.save("lion_king.png")
image.show()
```

### 3.3 SDXL — Stable Diffusion XL

```python
"""SDXL: chất lượng cao hơn, 1024×1024"""
from diffusers import StableDiffusionXLPipeline

pipe = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16,
    variant="fp16",
)
pipe = pipe.to("cuda")

# Tối ưu memory
pipe.enable_model_cpu_offload()

image = pipe(
    prompt="A Vietnamese phở restaurant in cyberpunk style, neon lights, rain",
    negative_prompt="ugly, blurry, low quality",
    num_inference_steps=40,
    guidance_scale=8.0,
).images[0]

image.save("cyberpunk_pho.png")
```

### 3.4 Important Parameters

| Parameters | Value | Influence |
|-----------|---------|-----------|
| `num_inference_steps` | 20-50 | More = more detail, slower |
| `guidance_scale` (CFG) | 1-20 | High = more sticky, but less natural |
| `seed` | int | Same seed = same result (reproducible) |
| `negative_prompt` | text | What NOT to want in photos |

```python
# Reproducible generation
generator = torch.Generator(device="cuda").manual_seed(42)
image = pipe(prompt="...", generator=generator).images[0]
```

---

## 4. Image-to-Image

```python
"""Image-to-Image: biến đổi ảnh có sẵn"""
from diffusers import StableDiffusionImg2ImgPipeline
from PIL import Image

pipe = StableDiffusionImg2ImgPipeline.from_pretrained(
    "stabilityai/stable-diffusion-2-1",
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")

# Load ảnh gốc
init_image = Image.open("sketch.png").resize((768, 768))

# Transform
result = pipe(
    prompt="A detailed watercolor painting of a village",
    image=init_image,
    strength=0.75,     # 0 = giữ nguyên, 1 = tạo mới hoàn toàn
    guidance_scale=7.5,
    num_inference_steps=30,
).images[0]

result.save("watercolor_village.png")
```

---

## 5. ControlNet — Precise control

```python
"""ControlNet: điều khiển layout ảnh bằng edge/pose/depth"""
from diffusers import StableDiffusionControlNetPipeline, ControlNetModel
import cv2
import numpy as np

# Load ControlNet (Canny edge)
controlnet = ControlNetModel.from_pretrained(
    "lllyasviel/control_v11p_sd15_canny",
    torch_dtype=torch.float16,
)

pipe = StableDiffusionControlNetPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    controlnet=controlnet,
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")

# Tạo Canny edge map từ ảnh gốc
image = np.array(Image.open("room_photo.jpg"))
edges = cv2.Canny(image, 100, 200)
canny_image = Image.fromarray(edges)

# Generate với cùng layout nhưng style khác
result = pipe(
    prompt="A modern minimalist living room, interior design magazine",
    image=canny_image,
    num_inference_steps=30,
).images[0]

result.save("modern_room.png")
```

---

## 6. LoRA — Light Fine-tune Style

```python
"""LoRA: thêm style mới cho Stable Diffusion"""
from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")

# Load LoRA weights (ví dụ: anime style)
pipe.load_lora_weights("path/to/anime_lora.safetensors")

# Generate với style mới
image = pipe(
    prompt="1girl, cherry blossoms, anime style",
    num_inference_steps=30,
).images[0]

# Unload LoRA
pipe.unload_lora_weights()
```

---

## 7. Inpainting — Edit part of an image

```python
"""Inpainting: sửa/thay thế 1 vùng trong ảnh"""
from diffusers import StableDiffusionInpaintPipeline
from PIL import Image

pipe = StableDiffusionInpaintPipeline.from_pretrained(
    "stabilityai/stable-diffusion-2-inpainting",
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")

# Ảnh gốc + mask (vùng trắng = vùng cần sửa)
image = Image.open("photo.jpg").resize((512, 512))
mask = Image.open("mask.png").resize((512, 512))  # Trắng = replace

result = pipe(
    prompt="A beautiful garden with flowers",
    image=image,
    mask_image=mask,
    num_inference_steps=30,
).images[0]
```

---

## 8. Application in CV Pipeline

```
🎨 Synthetic Data:     Tạo training data cho rare cases
🔄 Data Augmentation:  Stable Diffusion biến thể ảnh
🖼️ Inpainting:        Xóa watermark, sửa defects
📐 ControlNet:         Maintain layout, thay đổi style
🎭 Style Transfer:     Chuyển đổi phong cách ảnh
📸 Super Resolution:   Upscale ảnh chất lượng thấp
```

---

## Summary

| Concepts | Remember |
|--------|--------|
| **Diffusion** | Add noise → learn to remove noise → generate |
| **Latent Space** | Processing in compressed space (64×64) → faster |
| **CFG Scale** | Guidance: high = more prompt |
| **ControlNet** | Control layout using edge/pose/depth |
| **LoRA** | Light fine-tune for new style |
| **Inpainting** | Edit part of the photo, keep the rest |

## General exercises

1. **Text-to-Image:** Generate 10 images with the same prompt but different seeds. Which photo is the most beautiful?
2. **Style Transfer:** Use img2img to turn a photo into oil painting, watercolor, anime.
3. **ControlNet:** Use Canny edge from your room → generate room in a different style.
4. **Synthetic Data:** Use SD to create 50 "product defect" images for the training dataset.

> **Next article:** Vision Transformer (ViT) & CLIP — Transformer for images, connecting text and images.
