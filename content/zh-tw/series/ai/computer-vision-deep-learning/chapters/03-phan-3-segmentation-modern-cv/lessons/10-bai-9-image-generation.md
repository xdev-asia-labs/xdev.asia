---
id: 019c9619-ab09-7009-c109-ab0900000009
title: 第 9 課：影像生成與穩定擴散
slug: bai-9-image-generation
description: 理論擴散模型：正向/反向過程。穩定擴散架構：VAE、U-Net、CLIP 文字編碼器。實踐：文字到圖像、圖像到圖像、ControlNet、LoRA 風格。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: 第 3 部分：細分與現代履歷
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: 深度學習的電腦視覺：從 CNN 到 Vision Transformer
  slug: computer-vision-deep-learning
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：影像生成與穩定擴散</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深度學習的電腦視覺：從 CNN 到 Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：細分與現代履歷</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

從**DALL·E**、**中途**到**穩定擴散**——從文字創建圖像的人工智慧改變了創意產業。本文深入探討**擴散模型**：它們如何運作、穩定擴散架構以及文字到圖像、圖像到圖像、ControlNet 的實踐。

> 🎯 **為什麼要學習？ ** 了解擴散模型可以幫助您建立影像、編輯影像並將其應用到 CV 管道中（合成資料、增強、修復）。

---

## 1. 擴散模型—理論

### 1.1 核心思想

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

### 1.2 為什麼 Diffusion 比 GAN 更好？

| |甘 |擴散|
|--|-----|------------|
| **訓練** |困難（模式崩潰、不穩定）|穩定|
| **多元化** |低（模式崩潰）|高（不同的輸出）|
| **品質** |不錯不過神器|優|
| **控制** |難以控制|文字提示，ControlNet |
| **速度** |快速（1 次前向傳球）|較慢（迭代）|

---

## 2. 穩定擴散－架構

### 2.1 三個主要組成部分

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

### 2.2 潛在空間－速度的秘密

```
Pixel Space:  512×512×3  = 786,432 numbers → Chậm!
Latent Space: 64×64×4    = 16,384 numbers  → Nhanh 48×!

VAE Encoder: Image (512×512) → Latent (64×64)
U-Net: Denoise in Latent Space
VAE Decoder: Latent (64×64) → Image (512×512)
```

---

## 3. 實踐：文字到圖像

### 3.1 設置

```bash
pip install diffusers transformers accelerate torch
```

### 3.2 基本文字轉圖像

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

### 3.3 SDXL — 穩定擴散 XL

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

### 3.4 重要參數

|參數|價值|影響力 |
|------------|---------|------------|
| `num_inference_steps` | 20-50 | 20-50更多 = 更多細節，更慢 |
| `guidance_scale` (CFG) | 1-20 | 1-20高=較黏性，但較不自然 |
| `seed` |整數 |相同的種子=相同的結果（可重現）|
| `negative_prompt` |文字|照片中不想要什麼？

```python
# Reproducible generation
generator = torch.Generator(device="cuda").manual_seed(42)
image = pipe(prompt="...", generator=generator).images[0]
```

---

## 4. 影像到影像

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

## 5. ControlNet — 精確控制

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

## 6. LoRA－輕微調風格

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

## 7. 修復 — 編輯圖片的一部分

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

## 8. CV Pipeline 中的應用

```
🎨 Synthetic Data:     Tạo training data cho rare cases
🔄 Data Augmentation:  Stable Diffusion biến thể ảnh
🖼️ Inpainting:        Xóa watermark, sửa defects
📐 ControlNet:         Maintain layout, thay đổi style
🎭 Style Transfer:     Chuyển đổi phong cách ảnh
📸 Super Resolution:   Upscale ảnh chất lượng thấp
```

---

## 總結

|概念 |記住|
|--------|--------|
| **擴散** |增加雜訊→學習消除雜訊→生成|
| **潛在空間** |在壓縮空間 (64×64) 中處理 → 更快 |
| **CFG 規模** |指導意見：高=更及時|
| **控制網** |使用邊緣/姿態/深度控制佈局 |
| **洛拉** |燈光微調新風格|
| **修復** |編輯部分照片，保留其餘部分 |

## 一般練習

1. **文字轉圖像：** 產生 10 張具有相同提示但不同種子的圖像。哪張照片最漂亮？
2. **風格轉換：** 使用img2img將照片變成油畫、水彩、動漫。
3. **ControlNet：** 從您的房間使用 Canny Edge → 產生不同風格的房間。
4. **合成資料：** 使用 SD 為訓練資料集建立 50 個「產品缺陷」影像。

> **下一篇文章：** Vision Transformer (ViT) 和 CLIP — 圖像轉換器，連接文字和圖像。
