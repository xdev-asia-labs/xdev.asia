---
id: 019d8b31-bb05-7005-c005-ee0500000005
title: 'Bài 5: Stable Diffusion Deep Dive — Kiến trúc & Pipeline'
slug: bai-5-stable-diffusion-deep-dive
description: >-
  Latent Diffusion Models: tại sao làm việc trong latent space? UNet
  architecture. Text conditioning với CLIP. VAE encoder/decoder.
  Scheduler: DDIM, Euler, DPM++. Pipeline chi tiết từ prompt đến image.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: Diffusion Models — Cách mạng Tạo ảnh"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

**Stable Diffusion** là **Latent Diffusion Model (LDM)** — thay vì diffusion trong pixel space (512×512×3), nó hoạt động trong **latent space** (64×64×4) nhỏ hơn 48 lần. Đây là breakthrough cho phép chạy diffusion trên consumer GPUs.

---

## 1. Kiến trúc Stable Diffusion

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

### Components chi tiết

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

## 2. Pipeline Step-by-Step

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

## 3. Classifier-Free Guidance (CFG)

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

## 4. VAE — Latent Space Compression

```python
# Encode: 512x512x3 → 64x64x4 (compression ratio ~48x)
with torch.no_grad():
    latent = vae.encode(image).latent_dist.sample()
    latent = latent * 0.18215  # scaling factor

# Decode: 64x64x4 → 512x512x3
with torch.no_grad():
    image = vae.decode(latent / 0.18215).sample
```

Tại sao latent space?
- **Memory**: 512×512×3 = 786K pixels → 64×64×4 = 16K values
- **Speed**: UNet xử lý tensor nhỏ hơn 48x
- **Quality**: VAE đã học compress thông minh

---

## 5. Schedulers — Thuật toán Denoising

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

| Scheduler | Steps | Speed | Quality | Use case |
|-----------|-------|-------|---------|----------|
| DDPM | 1000 | Very slow | Reference | Training |
| DDIM | 50 | Medium | Good | General |
| Euler | 20-30 | Fast | Great | Default SDXL |
| DPM++ 2M | 20-25 | Fast | Excellent | Recommended |
| UniPC | 10-15 | Very fast | Good | Real-time |

---

## 6. Stable Diffusion Versions

| Version | Resolution | Text Encoder | Released |
|---------|-----------|-------------|----------|
| SD 1.5 | 512×512 | CLIP ViT-L/14 | 2022 |
| SD 2.1 | 768×768 | OpenCLIP ViT-H | 2022 |
| SDXL | 1024×1024 | CLIP ViT-L + OpenCLIP ViT-bigG | 2023 |
| SD3 | 1024×1024 | Triple text encoder (CLIP×2 + T5) | 2024 |
| Flux | 1024×1024 | T5 XXL | 2024 |

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

## 7. Negative Prompts & Parameters

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

## Tổng kết

| Component | Vai trò |
|-----------|---------|
| CLIP Text Encoder | Text → embeddings (semantic meaning) |
| UNet | Noise predictor, conditioned on text |
| VAE | Compress pixel ↔ latent space |
| Scheduler | Algorithm cho denoising steps |
| CFG | Guidance scale điều chỉnh text adherence |

> 📌 **Bài tiếp theo:** Prompt Engineering cho Image Generation — kỹ thuật viết prompt hiệu quả.
