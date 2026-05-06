---
id: 019d8b31-bb05-7005-c005-ee0500000005
title: 'レッスン 5: 安定拡散の詳細 - アーキテクチャとパイプライン'
slug: bai-5-stable-diffusion-deep-dive
description: >-
  潜在拡散モデル: なぜ潜在空間で機能するのでしょうか? UNet アーキテクチャ。 CLIP を使用したテキストの調整。
  VAEエンコーダ/デコーダ。スケジューラ: DDIM、オイラー、DPM++。プロンプトから画像までの詳細なパイプライン。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 2: 拡散モデル — 革新的なイメージの作成'
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: '生成 AI: AI を使用して画像とビデオを作成する'
  slug: generative-ai-tao-hinh-anh-video
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: 安定拡散の詳細 - アリ</tspan>
      <tspan x="60" dy="42">構造とパイプライン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成 AI: AI を使用して画像とビデオを作成する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 拡散モデル — 革新的なイメージの作成</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**安定拡散**は **潜在拡散モデル (LDM)** です。ピクセル空間 (512×512×3) での拡散ではなく、48 倍小さい **潜在空間** (64×64×4) で動作します。これは、コンシューマー GPU での拡散の実行を可能にする画期的な進歩です。

---

## 1. 安定した拡散アーキテクチャ

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

### コンポーネントの詳細

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

## 2. パイプラインのステップバイステップ

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

## 3. 分類子を使用しないガイダンス (CFG)

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

## 4. VAE — 潜在空間圧縮

```python
# Encode: 512x512x3 → 64x64x4 (compression ratio ~48x)
with torch.no_grad():
    latent = vae.encode(image).latent_dist.sample()
    latent = latent * 0.18215  # scaling factor

# Decode: 64x64x4 → 512x512x3
with torch.no_grad():
    image = vae.decode(latent / 0.18215).sample
```

なぜ潜在空間なのでしょうか？
- **メモリ**: 512×512×3 = 786K ピクセル → 64×64×4 = 16K 値
- **速度**: UNet は 48x より小さいテンソルを処理します
- **品質**: VAE はスマート圧縮を学習しました

---

## 5. スケジューラ — ノイズ除去アルゴリズム

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

|スケジューラー |ステップ |スピード |品質 |使用例 |
|----------|----------|----------|----------|----------|
| DDPM | 1000 |非常に遅い |参考資料 |トレーニング |
| DDIM | 50 |中 |良い |一般 |
|オイラー | 20-30 |速い |すばらしい |デフォルトの SDXL |
| DPM++ 2M | 20-25 |速い |素晴らしい |おすすめ |
|ユニPC | 10-15 |非常に速い |良い |リアルタイム |

---

## 6. 安定した拡散バージョン

|バージョン |解像度 |テキストエンコーダ |リリース |
|----------|----------|---------------|----------|
| SD1.5 | 512×512 |クリップ ViT-L/14 | 2022年 |
| SD2.1 | 768×768 | OpenCLIP ViT-H | 2022年 |
| SDXL | 1024×1024 | CLIP ViT-L + OpenCLIP ViT-bigG | 2023年 |
| SD3 | 1024×1024 |トリプルテキストエンコーダー（CLIP×2 + T5） | 2024年 |
|フラックス | 1024×1024 | T5XXL | 2024年 |

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

## 7. 否定的なプロンプトとパラメータ

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

## 概要

|コンポーネント |役割 |
|----------|----------|
| CLIP テキスト エンコーダ |テキスト → 埋め込み (意味論的な意味) |
| Uネット |テキストに基づいたノイズ予測器 |
| VAE |ピクセル ↔ 潜在空間を圧縮 |
|スケジューラー |ノイズ除去ステップのアルゴリズム |
| CFG |ガイダンス スケールでテキストの遵守度を調整 |

> 📌 **次の記事:** 画像生成のためのプロンプト エンジニアリング — 効果的なプロンプト作成テクニック。
