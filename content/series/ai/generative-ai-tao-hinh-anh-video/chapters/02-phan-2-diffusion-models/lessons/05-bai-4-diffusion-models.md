---
id: 019d8b31-bb04-7004-c004-ee0400000004
title: 'Bài 4: Diffusion Models — Toán học & Trực giác'
slug: bai-4-diffusion-models-toan-hoc
description: >-
  Forward process: thêm noise progressively. Reverse process: denoise
  step-by-step. DDPM: denoising diffusion probabilistic models.
  Score-based models. Noise scheduling. Hands-on DDPM from scratch.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 2: Diffusion Models — Cách mạng Tạo ảnh"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

**Diffusion Models** là nền tảng của Stable Diffusion, DALL-E 2/3, Midjourney — đạt chất lượng sinh ảnh vượt trội GAN. Ý tưởng thiên tài: **thêm noise dần dần cho đến khi ảnh thành noise hoàn toàn, rồi học cách đảo ngược quá trình đó**.

---

## 1. Forward Process — Thêm Noise

$$q(x_t | x_{t-1}) = \mathcal{N}(x_t; \sqrt{1-\beta_t} x_{t-1}, \beta_t I)$$

```python
import torch

def forward_diffusion(x_0, t, betas):
    """Thêm noise vào image tại timestep t"""
    alphas = 1 - betas
    alpha_bar = torch.cumprod(alphas, dim=0)

    sqrt_alpha_bar = torch.sqrt(alpha_bar[t])
    sqrt_one_minus = torch.sqrt(1 - alpha_bar[t])

    noise = torch.randn_like(x_0)
    x_t = sqrt_alpha_bar * x_0 + sqrt_one_minus * noise
    return x_t, noise
```

```
t=0 (clean)  →  t=250  →  t=500  →  t=750  →  t=1000 (noise)
  [clear]       [hazy]    [noisy]   [very noisy]  [pure noise]
```

---

## 2. Reverse Process — Denoise (Học)

$$p_\theta(x_{t-1} | x_t) = \mathcal{N}(x_{t-1}; \mu_\theta(x_t, t), \sigma_t^2 I)$$

```python
class UNet(nn.Module):
    """Noise predictor: dự đoán noise đã thêm vào"""
    def __init__(self):
        super().__init__()
        # Simplified UNet
        self.time_embed = nn.Sequential(
            nn.Linear(1, 128),
            nn.SiLU(),
            nn.Linear(128, 128),
        )
        self.encoder = nn.Sequential(
            nn.Conv2d(1, 64, 3, padding=1),
            nn.SiLU(),
            nn.Conv2d(64, 128, 3, stride=2, padding=1),
            nn.SiLU(),
        )
        self.decoder = nn.Sequential(
            nn.ConvTranspose2d(128 + 128, 64, 4, stride=2, padding=1),
            nn.SiLU(),
            nn.Conv2d(64, 1, 3, padding=1),
        )

    def forward(self, x, t):
        t_emb = self.time_embed(t.float().unsqueeze(-1))
        h = self.encoder(x)
        t_emb = t_emb.view(-1, 128, 1, 1).expand_as(h)
        h = torch.cat([h, t_emb], dim=1)
        return self.decoder(h)
```

### Training

```python
def train_step(model, x_0, optimizer, betas, T=1000):
    """DDPM training step"""
    t = torch.randint(0, T, (x_0.size(0),))

    # Forward: add noise
    x_t, noise = forward_diffusion(x_0, t, betas)

    # Predict noise
    noise_pred = model(x_t, t)

    # Simple MSE loss
    loss = nn.functional.mse_loss(noise_pred, noise)

    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
    return loss.item()
```

---

## 3. Sampling — Generate Image

```python
@torch.no_grad()
def sample(model, shape, betas, T=1000):
    """DDPM sampling: noise → image"""
    alphas = 1 - betas
    alpha_bar = torch.cumprod(alphas, dim=0)

    # Start from pure noise
    x = torch.randn(shape)

    for t in reversed(range(T)):
        noise_pred = model(x, torch.tensor([t]))

        # Compute x_{t-1}
        alpha = alphas[t]
        alpha_bar_t = alpha_bar[t]

        mean = (1 / torch.sqrt(alpha)) * (
            x - (betas[t] / torch.sqrt(1 - alpha_bar_t)) * noise_pred
        )

        if t > 0:
            noise = torch.randn_like(x)
            x = mean + torch.sqrt(betas[t]) * noise
        else:
            x = mean

    return x  # Generated image!
```

---

## 4. Noise Scheduling

```python
# Linear schedule (DDPM original)
betas = torch.linspace(1e-4, 0.02, T)

# Cosine schedule (improved, OpenAI)
def cosine_schedule(T, s=0.008):
    steps = torch.arange(T + 1)
    f = torch.cos((steps / T + s) / (1 + s) * torch.pi / 2) ** 2
    alpha_bar = f / f[0]
    betas = 1 - alpha_bar[1:] / alpha_bar[:-1]
    return torch.clamp(betas, 0.0001, 0.999)

# Cosine schedule → better quality ở low-noise timesteps
```

---

## 5. DDIM — Faster Sampling

```python
# DDPM: 1000 steps → slow
# DDIM: 50 steps → fast, deterministic

@torch.no_grad()
def ddim_sample(model, shape, alpha_bar, steps=50):
    """DDIM: deterministic, fewer steps"""
    # Sub-sample timesteps
    timesteps = torch.linspace(999, 0, steps).long()
    x = torch.randn(shape)

    for i in range(len(timesteps) - 1):
        t = timesteps[i]
        t_prev = timesteps[i + 1]

        noise_pred = model(x, torch.tensor([t]))

        # DDIM update (deterministic, η=0)
        x0_pred = (x - torch.sqrt(1 - alpha_bar[t]) * noise_pred) / torch.sqrt(alpha_bar[t])
        x = torch.sqrt(alpha_bar[t_prev]) * x0_pred + \
            torch.sqrt(1 - alpha_bar[t_prev]) * noise_pred

    return x
```

| Method | Steps | Speed | Quality | Deterministic |
|--------|-------|-------|---------|--------------|
| DDPM | 1000 | Slow | Best | No |
| DDIM | 50 | 20x faster | Good | Yes |
| DPM++ | 20-30 | 35x faster | Great | Yes |
| Euler | 20-30 | 35x faster | Great | Configurable |

---

## 6. Score-based Models

$$\nabla_x \log p(x) \approx s_\theta(x)$$

```
Score function: gradient of log-probability
- Không cần biết p(x) chính xác
- Chỉ cần biết "hướng nào density tăng"
- Langevin dynamics: follow score → sample

Liên hệ: score matching ≡ denoising score matching ≡ diffusion
→ Các framework thực ra equivalent!
```

---

## Tổng kết

| Khái niệm | Mô tả |
|-----------|--------|
| Forward process | Thêm Gaussian noise progressively |
| Reverse process | Học denoise step-by-step |
| DDPM | Denoising Diffusion Probabilistic Models |
| UNet | Neural network dự đoán noise |
| DDIM | Deterministic sampling, ít steps hơn |
| Noise schedule | Linear vs cosine — ảnh hưởng quality |
| Score-based | Học gradient of log-density |

> 📌 **Bài tiếp theo:** Stable Diffusion Deep Dive — latent diffusion, UNet, CLIP conditioning.
