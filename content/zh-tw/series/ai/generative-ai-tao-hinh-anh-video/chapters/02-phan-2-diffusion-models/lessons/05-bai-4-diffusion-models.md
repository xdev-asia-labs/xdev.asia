---
id: 019d8b31-bb04-7004-c004-ee0400000004
title: 第 4 課：擴散模型 — 數學與直覺
slug: bai-4-diffusion-models-toan-hoc
description: 前向過程：逐步加入雜訊。逆過程：逐步去噪。 DDPM：去噪擴散機率模型。基於分數的模型。噪音調度。從頭開始實踐 DDPM。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 3
section_title: 第 2 部分：擴散模型 — 革命性的影像創建
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: 生成式 AI：使用 AI 創建圖像和視頻
  slug: generative-ai-tao-hinh-anh-video
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6950" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6950)"/>

  <!-- Decorations -->
  <g>
    <circle cx="942" cy="256" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="784" cy="158" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="626" cy="60" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="968" cy="222" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="810" cy="124" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="116" x2="1100" y2="196" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="146" x2="1050" y2="216" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1042.8467875173176,200.5 1042.8467875173176,231.5 1016,247 989.1532124826824,231.5 989.1532124826824,200.5 1016,185" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：擴散模型 — 數學與方向性</tspan>
      <tspan x="60" dy="42">感覺</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成式 AI：使用 AI 創建圖像和視頻</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：擴散模型 — 革命性的影像創建</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**擴散模型**是穩定擴散、DALL-E 2/3、Midjourney 的基礎 — 實現比 GAN 更出色的影像生成品質。天才的想法：**逐漸添加噪聲，直到圖像完全充滿噪聲，然後學習如何逆轉該過程**。

---

## 1. 前向過程－新增噪聲

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

## 2. 逆向過程－去雜訊（研究）

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

### 訓練

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

## 3. 取樣－生成影像

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

## 4. 雜訊調度

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

## 5. DDIM — 更快的取樣

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

|方法|步驟|速度|品質 |確定性|
|--------|--------|--------|--------|-------------|
| DDPM | 1000 | 1000慢|最佳|沒有 |
| DDIM | 50 | 50快 20 倍 |好 |是的 |
| DPM++ | 20-30 | 20-30快 35 倍 |太棒了|是的 |
|歐拉| 20-30 | 20-30快 35 倍 |太棒了|可設定|

---

## 6. 基於分數的模型

$$\nabla_x \log p(x) \近似 s_\theta(x)$$

```
Score function: gradient of log-probability
- Không cần biết p(x) chính xác
- Chỉ cần biết "hướng nào density tăng"
- Langevin dynamics: follow score → sample

Liên hệ: score matching ≡ denoising score matching ≡ diffusion
→ Các framework thực ra equivalent!
```

---

## 總結

|概念 |描述 |
|------------|--------|
|轉發進程|逐步加入高斯雜訊 |
|逆向流程 |逐步學習降噪 |
| DDPM |去噪擴散機率模型|
|大學網|神經網路預測噪音 |
| DDIM |確定性採樣，更少的步驟 |
|噪音表|線性與餘弦－品質影響|
|基於分數 |學習對數密度的梯度 |

> 📌 **下一篇：** 穩定擴散深入研究 — 潛在擴散、UNet、CLIP 調節。
