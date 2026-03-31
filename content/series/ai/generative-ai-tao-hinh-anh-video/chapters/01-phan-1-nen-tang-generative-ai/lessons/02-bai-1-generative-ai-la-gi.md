---
id: 019d8b31-bb01-7001-c001-ee0100000001
title: 'Bài 1: Generative AI là gì? — Toàn cảnh AI Sáng tạo'
slug: bai-1-generative-ai-la-gi
description: >-
  Định nghĩa Generative AI, phân biệt discriminative vs generative models.
  Lịch sử phát triển từ Boltzmann Machine đến Diffusion Models.
  Các loại generative models: GAN, VAE, Flow-based, Diffusion, Autoregressive.
  Ứng dụng thực tế và landscape hiện tại 2026.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 1: Nền tảng Generative AI — Lý thuyết & Kiến trúc"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

**Generative AI** là nhánh AI có khả năng **tạo ra nội dung mới** — hình ảnh, video, âm thanh, text, code — thay vì chỉ phân loại hay dự đoán. Đây là bước nhảy vọt từ AI "nhận biết" sang AI "sáng tạo".

> 💡 **Discriminative models** trả lời "đây là gì?" — **Generative models** trả lời "tạo cái mới như thế nào?"

---

## 1. Discriminative vs Generative Models

```
┌──────────────────────────────────────────────────────────┐
│              DISCRIMINATIVE MODELS                        │
│   Input: x → P(y|x) → Label/Class                       │
│   "Ảnh này là mèo hay chó?"                             │
│   Ví dụ: CNN classifier, SVM, Logistic Regression       │
├──────────────────────────────────────────────────────────┤
│              GENERATIVE MODELS                            │
│   Noise z → P(x) → Synthetic Data                       │
│   "Tạo một ảnh mèo mới"                                │
│   Ví dụ: GAN, VAE, Diffusion, GPT                       │
└──────────────────────────────────────────────────────────┘
```

| Đặc điểm | Discriminative | Generative |
|-----------|---------------|------------|
| Mục tiêu | Học P(y\|x) | Học P(x) hoặc P(x\|z) |
| Output | Label, score | Dữ liệu mới |
| Ví dụ | ResNet, BERT classifier | GAN, Stable Diffusion |
| Ứng dụng | Classification, detection | Generation, synthesis |

---

## 2. Lịch sử Generative AI

| Năm | Milestone | Mô hình |
|-----|-----------|---------|
| 2013 | VAE ra đời | Kingma & Welling |
| 2014 | GAN: "The coolest idea in ML" | Ian Goodfellow |
| 2015 | DCGAN: stable GAN training | Radford et al. |
| 2018 | StyleGAN: realistic faces | NVIDIA |
| 2020 | DDPM: Diffusion Models | Ho et al. |
| 2021 | DALL-E, CLIP | OpenAI |
| 2022 | Stable Diffusion, Midjourney | Stability AI |
| 2023 | SDXL, DALL-E 3, Midjourney v5 | Multiple |
| 2024 | Sora, Flux, SD3 | OpenAI, BFL |
| 2025-26 | Video gen maturity, 3D gen | Multiple |

---

## 3. Taxonomy — Các loại Generative Models

### 3.1 GAN — Generative Adversarial Networks

```python
# Concept: 2 networks chơi game
# Generator: tạo fake data
# Discriminator: phân biệt real vs fake

# Generator
z = torch.randn(batch_size, latent_dim)  # random noise
fake_images = generator(z)  # tạo ảnh giả

# Discriminator
real_score = discriminator(real_images)  # → 1 (real)
fake_score = discriminator(fake_images)  # → 0 (fake)

# Training: Generator cố gắng "lừa" Discriminator
```

### 3.2 VAE — Variational Autoencoders

```python
# Concept: Encode → Latent Space → Decode
# Input image → encoder → μ, σ → sample z → decoder → reconstructed image

# Ưu điểm: latent space có cấu trúc, có thể interpolation
# Nhược điểm: ảnh thường bị blurry
```

### 3.3 Diffusion Models

```python
# Concept: Thêm noise dần → Học cách bỏ noise
# Forward: image → noisy → noisier → ... → pure noise
# Reverse: pure noise → less noisy → ... → clean image

# Ưu điểm: chất lượng cao nhất hiện tại
# Nhược điểm: chậm hơn GAN (nhiều steps)
```

### 3.4 Autoregressive Models

```python
# Concept: Tạo từng phần một, dựa vào context trước
# GPT: tạo text token by token
# PixelCNN: tạo image pixel by pixel
# DALL-E 1: text → image tokens (autoregressive)
```

### 3.5 Flow-based Models

```python
# Concept: Invertible transformations
# z → f1 → f2 → ... → x (exact likelihood)
# Normalizing Flows: RealNVP, Glow
# Ưu điểm: exact log-likelihood
# Nhược điểm: architecture constraints
```

---

## 4. Ứng dụng thực tế Generative AI 2026

### Image Generation
- **Marketing**: Tạo ảnh quảng cáo, banner, product mockup
- **Design**: UI/UX prototyping, concept art
- **E-commerce**: Product photography, virtual try-on

### Video Generation
- **Content creation**: Social media videos, ads
- **Education**: Teaching material, simulations
- **Entertainment**: SFX, animation

### 3D & Spatial
- **Gaming**: 3D asset generation
- **Architecture**: Interior design visualization
- **AR/VR**: Virtual environments

### Audio & Music
- **Podcasting**: Voice synthesis, editing
- **Music**: Background music, jingles
- **Accessibility**: Text-to-speech

---

## 5. Generative AI Landscape 2026

```
┌──────────────────────────────────────────────────────┐
│                GENERATIVE AI STACK                    │
│                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐  │
│  │   Text-to-   │  │  Text-to-    │  │ Text-to-  │  │
│  │    Image      │  │   Video      │  │   3D      │  │
│  │              │  │              │  │           │  │
│  │ • SD, SDXL  │  │ • Sora       │  │ • Point-E │  │
│  │ • DALL-E 3  │  │ • Runway     │  │ • Magic3D │  │
│  │ • Midjourney│  │ • Kling      │  │ • 3D GS   │  │
│  │ • Flux      │  │ • Pika       │  │           │  │
│  └──────────────┘  └──────────────┘  └───────────┘  │
│                                                      │
│  ┌──────────────────────────────────────────────┐    │
│  │            Foundation Models                  │    │
│  │  Diffusion Models, Transformers, GANs        │    │
│  └──────────────────────────────────────────────┘    │
│                                                      │
│  ┌──────────────────────────────────────────────┐    │
│  │            Infrastructure                     │    │
│  │  GPU Cloud, Model Serving, Storage           │    │
│  └──────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────┘
```

---

## 6. Setup môi trường phát triển

```bash
# Tạo virtual environment
python -m venv genai-env
source genai-env/bin/activate

# Cài đặt core packages
pip install torch torchvision torchaudio
pip install diffusers transformers accelerate
pip install Pillow opencv-python matplotlib

# Verify GPU
python -c "import torch; print(f'CUDA: {torch.cuda.is_available()}')"
python -c "import diffusers; print(f'Diffusers: {diffusers.__version__}')"
```

```python
# Quick test: generate image với Stable Diffusion
from diffusers import StableDiffusionPipeline
import torch

pipe = StableDiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16,
    variant="fp16"
)
pipe.to("cuda")

image = pipe("a cat wearing sunglasses, digital art").images[0]
image.save("first_genai_image.png")
print("✅ Generated first image!")
```

---

## Tổng kết

| Khái niệm | Mô tả |
|-----------|--------|
| Generative AI | AI tạo nội dung mới (image, video, audio, text) |
| GAN | Generator vs Discriminator — adversarial training |
| VAE | Encode-decode qua latent space — structured generation |
| Diffusion | Noise → denoise step-by-step — chất lượng cao nhất |
| Autoregressive | Tạo tuần tự từng phần — GPT, PixelCNN |

> 📌 **Bài tiếp theo:** Deep dive GAN — Generative Adversarial Networks từ zero, training dynamics, và các variant quan trọng.
