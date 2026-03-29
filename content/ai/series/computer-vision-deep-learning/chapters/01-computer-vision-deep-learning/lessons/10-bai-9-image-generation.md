---
id: 019c9619-ab09-7009-c109-ab0900000009
title: 'Bài 9: Image Generation & Stable Diffusion'
slug: bai-9-image-generation
description: >-
  Diffusion Models lý thuyết: forward/reverse process. Stable Diffusion
  kiến trúc: VAE, U-Net, CLIP text encoder. Hands-on: text-to-image,
  image-to-image, ControlNet, LoRA cho style.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: Segmentation & Modern CV"
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: "Computer Vision với Deep Learning: Từ CNN đến Vision Transformer"
  slug: computer-vision-deep-learning
---

## Giới thiệu

Từ **DALL·E**, **Midjourney** đến **Stable Diffusion** — AI tạo ảnh từ text đã thay đổi ngành sáng tạo. Bài này deep dive vào **Diffusion Models**: cách chúng hoạt động, kiến trúc Stable Diffusion, và hands-on text-to-image, image-to-image, ControlNet.

> 🎯 **Tại sao học?** Hiểu Diffusion Models giúp bạn tạo ảnh, edit ảnh, và ứng dụng trong pipeline CV (synthetic data, augmentation, inpainting).

---

## 1. Diffusion Models — Lý thuyết

### 1.1 Ý tưởng cốt lõi

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

### 1.2 Tại sao Diffusion tốt hơn GAN?

| | GAN | Diffusion |
|--|-----|-----------|
| **Training** | Khó (mode collapse, unstable) | Ổn định |
| **Diversity** | Thấp (mode collapse) | Cao (đa dạng output) |
| **Quality** | Tốt nhưng artifacts | Xuất sắc |
| **Control** | Khó điều khiển | Text prompt, ControlNet |
| **Speed** | Nhanh (1 forward pass) | Chậm hơn (iterative) |

---

## 2. Stable Diffusion — Kiến trúc

### 2.1 Ba thành phần chính

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

### 2.2 Latent Space — Bí quyết tốc độ

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

### 3.4 Parameters quan trọng

| Parameter | Giá trị | Ảnh hưởng |
|-----------|---------|-----------|
| `num_inference_steps` | 20-50 | Nhiều hơn = chi tiết hơn, chậm hơn |
| `guidance_scale` (CFG) | 1-20 | Cao = bám prompt hơn, nhưng kém tự nhiên |
| `seed` | int | Cùng seed = cùng kết quả (reproducible) |
| `negative_prompt` | text | Những gì KHÔNG muốn trong ảnh |

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

## 5. ControlNet — Điều khiển chính xác

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

## 6. LoRA — Fine-tune Style nhẹ

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

## 7. Inpainting — Sửa 1 phần ảnh

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

## 8. Ứng dụng trong CV Pipeline

```
🎨 Synthetic Data:     Tạo training data cho rare cases
🔄 Data Augmentation:  Stable Diffusion biến thể ảnh
🖼️ Inpainting:        Xóa watermark, sửa defects
📐 ControlNet:         Maintain layout, thay đổi style
🎭 Style Transfer:     Chuyển đổi phong cách ảnh
📸 Super Resolution:   Upscale ảnh chất lượng thấp
```

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Diffusion** | Thêm noise → học khử noise → generate |
| **Latent Space** | Xử lý ở không gian nén (64×64) → nhanh hơn |
| **CFG Scale** | Guidance: cao = bám prompt hơn |
| **ControlNet** | Điều khiển layout bằng edge/pose/depth |
| **LoRA** | Fine-tune nhẹ cho style mới |
| **Inpainting** | Sửa 1 phần ảnh, giữ phần còn lại |

## Bài tập tổng hợp

1. **Text-to-Image:** Generate 10 ảnh với cùng prompt nhưng khác seed. Ảnh nào đẹp nhất?
2. **Style Transfer:** Dùng img2img biến 1 ảnh chụp thành oil painting, watercolor, anime.
3. **ControlNet:** Dùng Canny edge từ phòng nhà bạn → generate phòng theo style khác.
4. **Synthetic Data:** Dùng SD tạo 50 ảnh "product defect" cho training dataset.

> **Bài tiếp theo:** Vision Transformer (ViT) & CLIP — Transformer cho ảnh, kết nối text và image.
