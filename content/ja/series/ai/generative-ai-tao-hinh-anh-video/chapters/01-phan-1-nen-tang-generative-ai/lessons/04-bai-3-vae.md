---
id: 019d8b31-bb03-7003-c003-ee0300000003
title: 'レッスン 3: VAE — 変分オートエンコーダーと潜在空間'
slug: bai-3-vae-variational-autoencoders
description: >-
  オートエンコーダーの要約。 VAE: ELBO、再パラメータ化トリック、KL 発散。潜在空間の探索と補間。条件付きVAE。離散潜在の VQ-VAE。 VAE
  と GAN を比較します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: 生成 AI プラットフォーム — 理論とアーキテクチャ'
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: '生成 AI: AI を使用して画像とビデオを作成する'
  slug: generative-ai-tao-hinh-anh-video
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8172" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8172)"/>

  <!-- Decorations -->
  <g>
    <circle cx="749" cy="257" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="898" cy="246" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1047" cy="235" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="696" cy="224" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="845" cy="213" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="127" x2="1100" y2="207" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="157" x2="1050" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="963.3730669589464,106 963.3730669589464,148 927,169 890.6269330410536,148 890.6269330410536,106.00000000000001 927,85" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI と ML — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: VAE — 変分オートエンコーダーと</tspan>
      <tspan x="60" dy="42">潜在空間</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成 AI: AI を使用して画像とビデオを作成する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 生成 AI プラットフォーム — 理論とアーキテクチャ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**VAE (variational Autoencoder)** は、深層学習とベイズ推論を組み合わせた生成モデルです。 2 つのネットワークに対する GAN とは異なり、VAE は構造化された**潜在空間**を学習し、内挿、制御された生成、および正確な尤度推定を可能にします。

---

## 1. オートエンコーダーの要約

```python
import torch.nn as nn

class Autoencoder(nn.Module):
    def __init__(self):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Linear(784, 256),
            nn.ReLU(),
            nn.Linear(256, 64),  # bottleneck
        )
        self.decoder = nn.Sequential(
            nn.Linear(64, 256),
            nn.ReLU(),
            nn.Linear(256, 784),
            nn.Sigmoid(),
        )

    def forward(self, x):
        z = self.encoder(x)  # compress
        x_hat = self.decoder(z)  # reconstruct
        return x_hat

# Loss: ||x - x_hat||² (reconstruction error)
```

**問題:** オートエンコーダーの潜在空間が断続的である → ランダムな z をサンプリングして生成できない。

---

## 2. VAE — 中心となるアイデア

```
┌─────────────────────────────────────────────────────────┐
│                    VAE Architecture                      │
│                                                         │
│  x ──→ Encoder ──→ μ, σ ──→ z = μ + σ·ε ──→ Decoder → x̂│
│                          ↑                               │
│                     ε ~ N(0, 1)                          │
│                (reparameterization trick)                 │
│                                                         │
│  Loss = Reconstruction + KL Divergence                  │
│       = ||x - x̂||² + KL(q(z|x) || p(z))               │
└─────────────────────────────────────────────────────────┘
```

### ELBO — 証拠の下限

$$\mathcal{L} = \mathbb{E}_{q(z|x)}[\log p(x|z)] - D_{KL}(q(z|x) || p(z))$$

- **再構成損失**: $\mathbb{E}_{q(z|x)}[\log p(x|z)]$ — デコードは入力と同じである必要があります
- **KL 発散**: $D_{KL}(q(z|x) || p(z))$ — 潜在分布を $\mathcal{N}(0, I)$ に近づける

---

## 3. VAE を実装する

```python
class VAE(nn.Module):
    def __init__(self, input_dim=784, latent_dim=20):
        super().__init__()
        # Encoder
        self.fc1 = nn.Linear(input_dim, 400)
        self.fc_mu = nn.Linear(400, latent_dim)      # mean
        self.fc_logvar = nn.Linear(400, latent_dim)   # log variance

        # Decoder
        self.fc3 = nn.Linear(latent_dim, 400)
        self.fc4 = nn.Linear(400, input_dim)

    def encode(self, x):
        h = torch.relu(self.fc1(x))
        mu = self.fc_mu(h)
        logvar = self.fc_logvar(h)
        return mu, logvar

    def reparameterize(self, mu, logvar):
        """Reparameterization trick: z = μ + σ · ε"""
        std = torch.exp(0.5 * logvar)
        eps = torch.randn_like(std)  # ε ~ N(0, 1)
        return mu + eps * std

    def decode(self, z):
        h = torch.relu(self.fc3(z))
        return torch.sigmoid(self.fc4(h))

    def forward(self, x):
        mu, logvar = self.encode(x.view(-1, 784))
        z = self.reparameterize(mu, logvar)
        x_hat = self.decode(z)
        return x_hat, mu, logvar

def vae_loss(x_hat, x, mu, logvar):
    # Reconstruction loss (BCE)
    recon = nn.functional.binary_cross_entropy(
        x_hat, x.view(-1, 784), reduction='sum'
    )
    # KL divergence: -0.5 * Σ(1 + log(σ²) - μ² - σ²)
    kl = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp())
    return recon + kl
```

---

## 4. 再パラメータ化のトリック

```
Vấn đề: z ~ q(z|x) → sampling không differentiable → không thể backprop

Giải pháp: z = μ + σ · ε, với ε ~ N(0, 1)
- μ, σ là output của encoder (differentiable)
- ε là random noise (không phụ thuộc parameters)
→ Gradient có thể flow qua μ, σ
```

```python
# ❌ Không thể backprop qua sampling
z = torch.distributions.Normal(mu, std).sample()

# ✅ Reparameterization trick
eps = torch.randn_like(std)
z = mu + eps * std  # gradient flows through mu and std
```

---

## 5. 潜在宇宙探査

### 補間

```python
def interpolate(model, x1, x2, steps=10):
    """Interpolate between 2 images in latent space"""
    model.eval()
    with torch.no_grad():
        mu1, _ = model.encode(x1.view(-1, 784))
        mu2, _ = model.encode(x2.view(-1, 784))

        images = []
        for alpha in torch.linspace(0, 1, steps):
            z = (1 - alpha) * mu1 + alpha * mu2
            img = model.decode(z)
            images.append(img.view(28, 28))

    return images  # smooth transition từ x1 → x2
```

### ランダム生成

```python
def generate(model, num_images=16):
    """Generate new images by sampling from latent space"""
    model.eval()
    with torch.no_grad():
        z = torch.randn(num_images, 20)  # sample từ N(0, I)
        images = model.decode(z)
    return images.view(num_images, 28, 28)
```

---

## 6. 条件付き VAE (CVAE)

```python
class ConditionalVAE(nn.Module):
    """VAE conditioned on label → kiểm soát generation"""
    def __init__(self, input_dim=784, latent_dim=20, num_classes=10):
        super().__init__()
        # Encoder nhận cả x và label
        self.fc1 = nn.Linear(input_dim + num_classes, 400)
        self.fc_mu = nn.Linear(400, latent_dim)
        self.fc_logvar = nn.Linear(400, latent_dim)

        # Decoder nhận z và label
        self.fc3 = nn.Linear(latent_dim + num_classes, 400)
        self.fc4 = nn.Linear(400, input_dim)

    def encode(self, x, y_onehot):
        h = torch.relu(self.fc1(torch.cat([x, y_onehot], dim=1)))
        return self.fc_mu(h), self.fc_logvar(h)

    def decode(self, z, y_onehot):
        h = torch.relu(self.fc3(torch.cat([z, y_onehot], dim=1)))
        return torch.sigmoid(self.fc4(h))

# Generate digit "7":
y = torch.zeros(1, 10)
y[0, 7] = 1  # one-hot cho số 7
z = torch.randn(1, 20)
img = model.decode(z, y)  # → ảnh số 7
```

---

## 7. VQ-VAE — ベクトル量子化 VAE

```
Ý tưởng: Thay continuous latent → discrete codebook
- Encoder output → tìm nearest codebook vector
- Codebook: tập các learnable vectors
- Decoder nhận discrete code → reconstruct

Ưu điểm:
- Avoid posterior collapse
- Codebook = "vocabulary" của visual concepts
- Nền tảng cho DALL-E 1 (VQ-VAE + Transformer)
```

```python
class VectorQuantizer(nn.Module):
    def __init__(self, num_embeddings=512, embedding_dim=64):
        super().__init__()
        self.codebook = nn.Embedding(num_embeddings, embedding_dim)

    def forward(self, z):
        # Tìm nearest codebook vector
        distances = torch.cdist(z, self.codebook.weight)
        indices = distances.argmin(dim=-1)
        z_q = self.codebook(indices)

        # Straight-through estimator
        z_q = z + (z_q - z).detach()
        return z_q, indices
```

---

## 8. VAE 対 GAN

|特長 | VAE |ガン |
|----------|-----|-----|
|トレーニング |安定した単一の目標 |不安定、ミニマックス |
|生み出される品質 |ぼやけた |シャープ |
|潜在空間 |構造的でスムーズ |非構造化 |
|可能性 |トラクタブル (ELBO) |難治性 |
|多様性 |良い |モード崩壊のリスク |
|補間 |スムーズ |予測不可能 |
|使用例 |潜在的な操作 |高品質な合成 |

---

## 概要

|コンセプト |説明 |
|----------|----------|
| VAE |確率的潜在空間を備えたエンコーダ-デコーダ |
|エルボ |証拠の下限 = 偵察 + KL |
|再パラメータ化 | z = μ + σ·ε — サンプリングによる逆伝播を有効にする |
| KLダイバージェンス | N(0, I) | 付近の潜在的なプレス
| CVA |条件付き VAE — 制御された生成 |
| VQ-VAE |離散コードブック — DALL-E 1 プラットフォーム |

> 📌 **次の投稿:** 拡散モデル — ゼロからの数学、直感、および DDPM。
