---
id: 019d8b31-bb02-7002-c002-ee0200000002
title: 'Lesson 2: GAN — Generative Adversarial Networks from Zero'
slug: bai-2-gan-generative-adversarial-networks
description: >-
  GAN architecture: generator vs discriminator, minimax game. Training dynamics
  and mode collapse. GAN variants: DCGAN, WGAN, StyleGAN, CycleGAN. Hands-on:
  train GAN generate faces with PyTorch.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: Generative AI Platform — Theory & Architecture'
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: 'Generative AI: Create Images & Videos with AI'
  slug: generative-ai-tao-hinh-anh-video
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-773" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-773)"/>

  <!-- Decorations -->
  <g>
    <circle cx="868" cy="34" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="636" cy="122" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="904" cy="210" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="672" cy="38" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="126" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="114" x2="1100" y2="194" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="144" x2="1050" y2="214" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="939.1147367097487,99.5 939.1147367097487,128.5 914,143 888.8852632902513,128.5 888.8852632902513,99.50000000000001 914,85" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI & ML — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: GAN — Generative Adversarial</tspan>
      <tspan x="60" dy="42">Networks from Zero</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Generative AI: Create Images & Videos with AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Generative AI Platform — Theory & Architecture</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**GAN (Generative Adversarial Network)** proposed by Ian Goodfellow in 2014 — called "the best idea in Machine Learning in the last 20 years" by Yann LeCun. GAN pits two neural networks against each other: **Generator** (imposter) and **Discriminator** (fake detector).

---

## 1. GAN architecture

```
┌─────────────────────────────────────────────────────┐
│                  GAN Architecture                    │
│                                                     │
│  Random Noise z ──→ ┌───────────┐ ──→ Fake Image   │
│                     │ Generator │                   │
│                     │     G     │                   │
│                     └───────────┘                   │
│                           ↓                         │
│  Real Image ──────→ ┌───────────────┐ ──→ Real/Fake │
│                     │ Discriminator │                │
│  Fake Image ──────→ │      D        │                │
│                     └───────────────┘                │
└─────────────────────────────────────────────────────┘
```

### Minimax Game

$$\min_G \max_D V(D, G) = \mathbb{E}_{x \sim p_{data}}[\log D(x)] + \mathbb{E}_{z \sim p_z}[\log(1 - D(G(z)))]$$

- **D** try to maximize: distinguish between real and fake
- **G** tries to minimize: trick D into thinking fake is real

---

## 2. Implement GAN from Scratch

```python
import torch
import torch.nn as nn

# Generator: noise → image
class Generator(nn.Module):
    def __init__(self, latent_dim=100, img_channels=1, img_size=28):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(latent_dim, 256),
            nn.LeakyReLU(0.2),
            nn.BatchNorm1d(256),
            nn.Linear(256, 512),
            nn.LeakyReLU(0.2),
            nn.BatchNorm1d(512),
            nn.Linear(512, 1024),
            nn.LeakyReLU(0.2),
            nn.BatchNorm1d(1024),
            nn.Linear(1024, img_channels * img_size * img_size),
            nn.Tanh(),  # Output: [-1, 1]
        )
        self.img_shape = (img_channels, img_size, img_size)

    def forward(self, z):
        img = self.net(z)
        return img.view(img.size(0), *self.img_shape)

# Discriminator: image → real/fake score
class Discriminator(nn.Module):
    def __init__(self, img_channels=1, img_size=28):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(img_channels * img_size * img_size, 512),
            nn.LeakyReLU(0.2),
            nn.Dropout(0.3),
            nn.Linear(512, 256),
            nn.LeakyReLU(0.2),
            nn.Dropout(0.3),
            nn.Linear(256, 1),
            nn.Sigmoid(),  # Output: probability [0, 1]
        )

    def forward(self, img):
        img_flat = img.view(img.size(0), -1)
        return self.net(img_flat)
```

### Training Loop

```python
def train_gan(generator, discriminator, dataloader, epochs=200):
    criterion = nn.BCELoss()
    opt_G = torch.optim.Adam(generator.parameters(), lr=0.0002, betas=(0.5, 0.999))
    opt_D = torch.optim.Adam(discriminator.parameters(), lr=0.0002, betas=(0.5, 0.999))

    for epoch in range(epochs):
        for real_imgs, _ in dataloader:
            batch_size = real_imgs.size(0)
            real_labels = torch.ones(batch_size, 1)
            fake_labels = torch.zeros(batch_size, 1)

            # ─── Train Discriminator ───
            z = torch.randn(batch_size, 100)
            fake_imgs = generator(z).detach()

            d_real = discriminator(real_imgs)
            d_fake = discriminator(fake_imgs)

            d_loss = criterion(d_real, real_labels) + criterion(d_fake, fake_labels)

            opt_D.zero_grad()
            d_loss.backward()
            opt_D.step()

            # ─── Train Generator ───
            z = torch.randn(batch_size, 100)
            fake_imgs = generator(z)
            d_fake = discriminator(fake_imgs)

            g_loss = criterion(d_fake, real_labels)  # G wants D to say "real"

            opt_G.zero_grad()
            g_loss.backward()
            opt_G.step()

        if epoch % 20 == 0:
            print(f"Epoch {epoch}: D_loss={d_loss:.4f}, G_loss={g_loss:.4f}")
```

---

## 3. GAN Training Challenges

### Mode Collapse
```
Problem: Generator chỉ tạo ra 1-2 loại output, bỏ qua diversity

Triệu chứng:
- Generated images rất giống nhau
- G "lạm dụng" 1 mode mà D yếu

Giải pháp:
- Mini-batch discrimination
- Feature matching
- Unrolled GAN
- WGAN (Wasserstein distance)
```

### Training Instability
```
Problem: D quá mạnh → G không learn được
         G quá mạnh → D không catch up

Giải pháp:
- Two-timescale update rule (TTUR)
- Spectral normalization
- Progressive training
- Learning rate scheduling
```

---

## 4. GAN Important Variants

### DCGAN — Deep Convolutional GAN

```python
class DCGenerator(nn.Module):
    def __init__(self, latent_dim=100, channels=3):
        super().__init__()
        self.net = nn.Sequential(
            # latent_dim → 512 x 4 x 4
            nn.ConvTranspose2d(latent_dim, 512, 4, 1, 0, bias=False),
            nn.BatchNorm2d(512),
            nn.ReLU(True),
            # 512 x 4 x 4 → 256 x 8 x 8
            nn.ConvTranspose2d(512, 256, 4, 2, 1, bias=False),
            nn.BatchNorm2d(256),
            nn.ReLU(True),
            # 256 x 8 x 8 → 128 x 16 x 16
            nn.ConvTranspose2d(256, 128, 4, 2, 1, bias=False),
            nn.BatchNorm2d(128),
            nn.ReLU(True),
            # 128 x 16 x 16 → 64 x 32 x 32
            nn.ConvTranspose2d(128, 64, 4, 2, 1, bias=False),
            nn.BatchNorm2d(64),
            nn.ReLU(True),
            # 64 x 32 x 32 → channels x 64 x 64
            nn.ConvTranspose2d(64, channels, 4, 2, 1, bias=False),
            nn.Tanh(),
        )

    def forward(self, z):
        return self.net(z.view(z.size(0), -1, 1, 1))
```

### WGAN — Wasserstein GAN

```python
# Thay BCE Loss bằng Wasserstein distance
# D không dùng Sigmoid → output không bounded

# Discriminator loss (Critic)
d_loss = -torch.mean(d_real) + torch.mean(d_fake)

# Generator loss
g_loss = -torch.mean(d_fake)

# Weight clipping cho Lipschitz constraint
for p in discriminator.parameters():
    p.data.clamp_(-0.01, 0.01)
```

### CycleGAN — Unpaired Image Translation

```
Ứng dụng: horse ↔ zebra, summer ↔ winter, photo ↔ painting
Không cần paired training data!

Architecture: 2 Generators + 2 Discriminators
- G_AB: domain A → domain B
- G_BA: domain B → domain A
- Cycle consistency: A → G_AB → B' → G_BA → A' ≈ A
```

### StyleGAN — High-quality Face Generation

```
Key innovations:
- Mapping network: z → w (intermediate latent)
- AdaIN (Adaptive Instance Normalization)
- Progressive growing
- Style mixing

StyleGAN2: improved quality, removed artifacts
StyleGAN3: alias-free generation
```

---

## 5. GAN Evaluation Metrics

### FID — Fréchet Inception Distance

```python
from torchmetrics.image.fid import FrechetInceptionDistance

fid = FrechetInceptionDistance(feature=2048)
fid.update(real_images, real=True)
fid.update(generated_images, real=False)
score = fid.compute()
print(f"FID Score: {score:.2f}")  # Lower = better
```

### IS — Inception Score

```python
# Higher = better (diverse + high quality)
# IS = exp(E[KL(p(y|x) || p(y))])
# Đo: diversity (p(y) uniform) + quality (p(y|x) peaked)
```

| Metrics | What to measure | Better |
|--------|--------|--------|
| FID | Real vs generated distribution gap | Lower |
| IS | Quality + diversity | Higher |
| KID | Kernel Inception Distance | Lower |
| LPIPS | Perceptual similarity | Lower |

---

## Summary

| Concepts | Description |
|-----------|--------|
| GAN | 2 networks fighting: Generator vs Discriminator |
| Minimax | G minimize, D maximize — Nash equilibrium |
| Mode collapse | G only generates a few modes |
| DCGAN | GAN + Convolutional layers |
| WGAN | Wasserstein distance instead of BCE — stable training |
| CycleGAN | Unpaired image-to-image translation |
| StyleGAN | High quality face generation |
| FID | Fréchet Inception Distance — evaluation metric |

> 📌 **Next article:** VAE — Variational Autoencoders, latent space, and comparison of VAE vs GAN.
