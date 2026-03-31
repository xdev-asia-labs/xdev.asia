---
id: 019d8b31-bb02-7002-c002-ee0200000002
title: 'Bài 2: GAN — Generative Adversarial Networks từ Zero'
slug: bai-2-gan-generative-adversarial-networks
description: >-
  Kiến trúc GAN: generator vs discriminator, minimax game. Training
  dynamics và mode collapse. GAN variants: DCGAN, WGAN, StyleGAN,
  CycleGAN. Hands-on: train GAN generate faces với PyTorch.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng Generative AI — Lý thuyết & Kiến trúc"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

**GAN (Generative Adversarial Network)** do Ian Goodfellow đề xuất năm 2014 — được Yann LeCun gọi là "ý tưởng tuyệt vời nhất trong Machine Learning 20 năm qua". GAN đặt 2 neural networks đấu với nhau: **Generator** (kẻ giả mạo) và **Discriminator** (cảnh sát phát hiện giả).

---

## 1. Kiến trúc GAN

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

- **D** cố gắng maximize: phân biệt real vs fake
- **G** cố gắng minimize: lừa D nghĩ fake là real

---

## 2. Implement GAN từ Scratch

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

## 4. GAN Variants quan trọng

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

| Metric | Đo gì | Better |
|--------|--------|--------|
| FID | Khoảng cách real vs generated distribution | Lower |
| IS | Quality + diversity | Higher |
| KID | Kernel Inception Distance | Lower |
| LPIPS | Perceptual similarity | Lower |

---

## Tổng kết

| Khái niệm | Mô tả |
|-----------|--------|
| GAN | 2 networks đấu nhau: Generator vs Discriminator |
| Minimax | G minimize, D maximize — Nash equilibrium |
| Mode collapse | G chỉ generate 1 vài modes |
| DCGAN | GAN + Convolutional layers |
| WGAN | Wasserstein distance thay BCE — stable training |
| CycleGAN | Unpaired image-to-image translation |
| StyleGAN | High quality face generation |
| FID | Fréchet Inception Distance — evaluation metric |

> 📌 **Bài tiếp theo:** VAE — Variational Autoencoders, latent space, và so sánh VAE vs GAN.
