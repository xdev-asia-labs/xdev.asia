---
id: 019d8b31-bb02-7002-c002-ee0200000002
title: 第 2 課：GAN－從零開始的生成對抗網絡
slug: bai-2-gan-generative-adversarial-networks
description: >-
  GAN 架構：生成器與判別器、極小極大遊戲。訓練動態和模式崩潰。 GAN 變體：DCGAN、WGAN、StyleGAN、CycleGAN。動手實作：使用
  PyTorch 訓練 GAN 產生人臉。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：生成式 AI 平台 — 理論與架構
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: 生成式 AI：使用 AI 創建圖像和視頻
  slug: generative-ai-tao-hinh-anh-video
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：GAN－生成對抗</tspan>
      <tspan x="60" dy="42">從零開始的網絡</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成式 AI：使用 AI 創建圖像和視頻</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：生成式 AI 平台 — 理論與架構</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**GAN（生成對抗網路）** 由 Ian Goodfellow 在 2014 年提出，被 Yann LeCun 稱為「過去 20 年來機器學習的最佳想法」。 GAN 將兩個神經網路相互競爭：**生成器**（冒名頂替者）和**鑑別器**（假檢測器）。

---

## 1.GAN架構

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

### 極小極大遊戲

$$\min_G \max_D V(D, G) = \mathbb{E}_{x \sim p_{data}}[\log D(x)] + \mathbb{E}_{z \sim p_z}[\log(1 - D(G(z)))]$$

- **D** 嘗試最大化：區分真假
- **G** 試圖最小化：欺騙 D 認為假的是真的

---

## 2. 從頭開始實作 GAN

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

### 訓練循環

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

## 3.GAN 訓練挑戰

### 模式崩潰
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

### 訓練不穩定
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

## 4.GAN 的重要變體

### DCGAN — 深度卷積 GAN

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

### CycleGAN — 未配對影像翻譯

```
Ứng dụng: horse ↔ zebra, summer ↔ winter, photo ↔ painting
Không cần paired training data!

Architecture: 2 Generators + 2 Discriminators
- G_AB: domain A → domain B
- G_BA: domain B → domain A
- Cycle consistency: A → G_AB → B' → G_BA → A' ≈ A
```

### StyleGAN — 高品質人臉生成

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

## 5.GAN 評估指標

### FID — Fréchet 起始距離

```python
from torchmetrics.image.fid import FrechetInceptionDistance

fid = FrechetInceptionDistance(feature=2048)
fid.update(real_images, real=True)
fid.update(generated_images, real=False)
score = fid.compute()
print(f"FID Score: {score:.2f}")  # Lower = better
```

### IS — 初始分數

```python
# Higher = better (diverse + high quality)
# IS = exp(E[KL(p(y|x) || p(y))])
# Đo: diversity (p(y) uniform) + quality (p(y|x) peaked)
```

|指標|測量什麼|更好|
|--------|--------|--------|
| FID |真實分配與分配分配|降低|
|是|品質+多樣性|更高|
|孩子|內核起始距離|降低|
| LPIPS | 知覺性 | 降低 |

---

## 總結

|概念 |描述 |
|------------|--------|
|甘| 2 網路之戰：生成器 vs 判別器 |
|極小極| G 最小化，D 最大化 — 納許均衡 |
|模式崩潰| G 只生成幾種模式 |
| DCGAN | GAN + 表皮層 |
| WGAN | Wasserstein 距離取代 BCE — 穩定訓練 |
| 循環 GAN | 不安裝的映像到映像翻譯 |
|StyleGAN |高品質人臉生成 |
| FID | Fréchet開始距離－評估指標|

> 📌 **下一篇文章：** VAE — 變分自動編碼器、潛在空間以及 VAE 與 GAN 的比較。
