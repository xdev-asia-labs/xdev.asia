---
id: 019d8b31-bb01-7001-c001-ee0100000001
title: 'レッスン 1: 生成 AI とは何ですか? — クリエイティブな AI ランドスケープ'
slug: bai-1-generative-ai-la-gi
description: >-
  生成 AI の定義、判別モデルと生成モデルの区別。ボルツマンマシンから普及モデルまでの開発の歴史。生成モデルの種類:
  GAN、VAE、フローベース、拡散、自己回帰。現実的なアプリケーションと 2026 年の現在の状況。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 1: 生成 AI プラットフォーム — 理論とアーキテクチャ'
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: '生成 AI: AI を使用して画像とビデオを作成する'
  slug: generative-ai-tao-hinh-anh-video
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1641" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1641)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1037" cy="141" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="974" cy="178" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="911" cy="215" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="848" cy="252" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="289" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="151" x2="1100" y2="231" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="181" x2="1050" y2="251" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="973.5166604983954,138 973.5166604983954,164 951,177 928.4833395016046,164 928.4833395016046,138 951,125" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI と ML — レッスン 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: 生成 AI とは何ですか? — AI パノラマ</tspan>
      <tspan x="60" dy="42">創造性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成 AI: AI を使用して画像とビデオを作成する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 生成 AI プラットフォーム — 理論とアーキテクチャ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**生成 AI** は、単なる分類や予測ではなく、**新しいコンテンツ** (画像、ビデオ、サウンド、テキスト、コード) を生成する機能を備えた AI の分野です。これは「認知型」AI から「創造型」AI への飛躍です。

> 💡 **差別モデル**は「これは何ですか?」と答えます。 — **生成モデル** は、「新しいモデルを作成するにはどうすればよいですか?」に答えます。

---

## 1. 識別モデルと生成モデル

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

|特長 |差別的 |生成 |
|----------|------|---------------|
|目標 | P(y\|x) | を学習します。 P(x) または P(x\|z) | を学習します。
|出力 |ラベル、スコア |新しいデータ |
|例 | ResNet、BERT 分類器 | GAN、安定拡散 |
|アプリケーション |分類、検出 |生成、合成 |

---

## 2. 生成型 AI の歴史

|年 |マイルストーン |モデル |
|-----|----------|----------|
| 2013年 | VAE誕生 |キングマ＆ウェリング |
| 2014年 | GAN: 「ML で最もクールなアイデア」 |イアン・グッドフェロー |
| 2015年 | DCGAN: 安定した GAN トレーニング |ラドフォードら。 |
| 2018年 | StyleGAN: リアルな顔 |エヌビディア |
| 2020年 | DDPM: 普及モデル |ホーら。 |
| 2021年 |ダルイー、クリップ |オープンAI |
| 2022年 |安定した拡散、ミッドジャーニー |安定性AI |
| 2023年 | SDXL、DALL-E 3、ミッドジャーニー v5 |複数 |
| 2024年 |ソラ、フラックス、SD3 | OpenAI、BFL |
| 2025-26 |ビデオ遺伝子の成熟、3D 遺伝子 |複数 |

---

## 3. 分類 - 生成モデルの種類

### 3.1 GAN — 敵対的生成ネットワーク

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

### 3.2 VAE — 変分オートエンコーダー

```python
# Concept: Encode → Latent Space → Decode
# Input image → encoder → μ, σ → sample z → decoder → reconstructed image

# Ưu điểm: latent space có cấu trúc, có thể interpolation
# Nhược điểm: ảnh thường bị blurry
```

### 3.3 普及モデル

```python
# Concept: Thêm noise dần → Học cách bỏ noise
# Forward: image → noisy → noisier → ... → pure noise
# Reverse: pure noise → less noisy → ... → clean image

# Ưu điểm: chất lượng cao nhất hiện tại
# Nhược điểm: chậm hơn GAN (nhiều steps)
```

### 3.4 自己回帰モデル

```python
# Concept: Tạo từng phần một, dựa vào context trước
# GPT: tạo text token by token
# PixelCNN: tạo image pixel by pixel
# DALL-E 1: text → image tokens (autoregressive)
```

### 3.5 フローベースのモデル

```python
# Concept: Invertible transformations
# z → f1 → f2 → ... → x (exact likelihood)
# Normalizing Flows: RealNVP, Glow
# Ưu điểm: exact log-likelihood
# Nhược điểm: architecture constraints
```

---

## 4. Generative AI 2026 の実用化

### 画像の生成
- **マーケティング**: 広告画像、バナー、製品モックアップを作成します。
- **デザイン**: UI/UX プロトタイピング、コンセプト アート
- **Eコマース**: 商品写真撮影、バーチャル試着

### ビデオの生成
- **コンテンツ作成**: ソーシャルメディアビデオ、広告
- **教育**: 教材、シミュレーション
- **エンターテイメント**: SFX、アニメーション

### 3D と空間
- **ゲーム**: 3D アセットの生成
- **アーキテクチャ**: インテリア デザインの視覚化
- **AR/VR**: 仮想環境

### オーディオと音楽
- **ポッドキャスティング**: 音声合成、編集
- **音楽**: BGM、ジングル
- **アクセシビリティ**: テキスト読み上げ

---

## 5. ジェネレーティブ AI ランドスケープ 2026

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

## 6. 開発環境をセットアップする

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

## 概要

|コンセプト |説明 |
|----------|----------|
|生成AI | AI が新しいコンテンツ (画像、ビデオ、オーディオ、テキスト) を作成 |
|ガン |ジェネレーターとディスクリミネーター — 高度なトレーニング |
| VAE |潜在空間を介したエンコードとデコード — 構造化された生成 |
|拡散 |ノイズ→ノイズ除去の段階的 — 最高品質 |
|自己回帰 |部分的な順次生成 — GPT、PixelCNN |

> 📌 **次の記事:** GAN の詳細 — ゼロからの敵対的生成ネットワーク、トレーニング ダイナミクス、および重要なバリアント。
