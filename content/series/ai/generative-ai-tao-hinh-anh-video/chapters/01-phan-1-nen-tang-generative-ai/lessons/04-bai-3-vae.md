---
id: 019d8b31-bb03-7003-c003-ee0300000003
title: 'Bài 3: VAE — Variational Autoencoders & Latent Space'
slug: bai-3-vae-variational-autoencoders
description: >-
  Autoencoder recap. VAE: ELBO, reparameterization trick, KL divergence.
  Latent space exploration và interpolation. Conditional VAE. VQ-VAE
  cho discrete latents. So sánh VAE vs GAN.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng Generative AI — Lý thuyết & Kiến trúc"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

**VAE (Variational Autoencoder)** là generative model kết hợp deep learning với Bayesian inference. Không giống GAN đấu 2 networks, VAE học một **latent space có cấu trúc** — cho phép interpolation, generation có kiểm soát, và exact likelihood estimation.

---

## 1. Autoencoder Recap

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

**Vấn đề:** Autoencoder latent space không liên tục → không thể sample random z để generate.

---

## 2. VAE — Ý tưởng cốt lõi

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

### ELBO — Evidence Lower Bound

$$\mathcal{L} = \mathbb{E}_{q(z|x)}[\log p(x|z)] - D_{KL}(q(z|x) || p(z))$$

- **Reconstruction loss**: $\mathbb{E}_{q(z|x)}[\log p(x|z)]$ — decode phải giống input
- **KL divergence**: $D_{KL}(q(z|x) || p(z))$ — ép latent distribution gần $\mathcal{N}(0, I)$

---

## 3. Implement VAE

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

## 4. Reparameterization Trick

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

## 5. Latent Space Exploration

### Interpolation

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

### Random Generation

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

## 6. Conditional VAE (CVAE)

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

## 7. VQ-VAE — Vector Quantized VAE

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

## 8. VAE vs GAN

| Đặc điểm | VAE | GAN |
|-----------|-----|-----|
| Training | Stable, single objective | Unstable, minimax |
| Generated quality | Blurry | Sharp |
| Latent space | Structured, smooth | Unstructured |
| Likelihood | Tractable (ELBO) | Intractable |
| Diversity | Good | Mode collapse risk |
| Interpolation | Smooth | Unpredictable |
| Use case | Latent manipulation | High-quality synthesis |

---

## Tổng kết

| Khái niệm | Mô tả |
|-----------|--------|
| VAE | Encoder-decoder với probabilistic latent space |
| ELBO | Evidence Lower Bound = Recon + KL |
| Reparameterization | z = μ + σ·ε — enable backprop through sampling |
| KL Divergence | Ép latent gần N(0, I) |
| CVAE | Conditional VAE — generation có kiểm soát |
| VQ-VAE | Discrete codebook — nền tảng DALL-E 1 |

> 📌 **Bài tiếp theo:** Diffusion Models — toán học, trực giác, và DDPM from scratch.
