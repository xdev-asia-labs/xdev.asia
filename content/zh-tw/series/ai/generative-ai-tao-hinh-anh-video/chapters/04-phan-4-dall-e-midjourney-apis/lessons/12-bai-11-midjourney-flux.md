---
id: 019d8b31-bb11-7011-c011-ee1100000011
title: 第 11 課：中途、通量與新興模型
slug: bai-11-midjourney-flux
description: >-
  Midjourney API 和 Discord 整合。 Flux：架構和功能。 Google Imagen 3. Adob​​e Firefly
  API。比較平台之間的品質、速度、成本。多模型編排。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: 第 4 部分：DALL-E、中途和商業 API
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: 生成式 AI：使用 AI 創建圖像和視頻
  slug: generative-ai-tao-hinh-anh-video
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4895" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4895)"/>

  <!-- Decorations -->
  <g>
    <circle cx="684" cy="222" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="768" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="852" cy="90" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="936" cy="154" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="218" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="182" x2="1100" y2="262" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="212" x2="1050" y2="282" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="964.0429399400242,113.5 964.0429399400242,150.5 932,169 899.9570600599758,150.5 899.9570600599758,113.50000000000001 932,95" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：中途、通量與新興模型</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成式 AI：使用 AI 創建圖像和視頻</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：DALL-E、中途和商業 API</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

影像生成 2026 市場非常多樣化。除了Stable Diffusion和DALL-E之外，還有**Midjourney**（最佳美學）、**Flux**（強開源）、**Google Imagen 3**、**Adobe Firefly**（商業安全）。本文對整合進行了比較和指導。

---

## 1. 中途

```
Đặc điểm:
- Aesthetic quality tốt nhất (đặc biệt art, illustration)
- Chạy qua Discord bot hoặc Web UI
- Closed-source, subscription-based
- Hỗ trợ: text-to-image, image-to-image, vary, upscale

Pricing (2026):
- Basic: $10/month (~200 images)
- Standard: $30/month (~900 images)
- Pro: $60/month (unlimited relaxed)
```

### 中途參數
```
/imagine prompt: a dragon flying over mountains --ar 16:9 --v 6 --stylize 750

Parameters:
--ar 16:9      → Aspect ratio
--v 6          → Version
--stylize 750  → Creativity level (0-1000)
--chaos 50     → Variation (0-100)
--quality 2    → Detail level
--no text      → Exclude elements
--tile          → Seamless pattern
--seed 12345   → Reproducibility
```

---

## 2. 通量

```python
# Flux: open-source từ Black Forest Labs (ex-Stability AI team)
# Kiến trúc: DiT (Diffusion Transformer) + T5 text encoder
# Quality ngang DALL-E 3, open-source

from diffusers import FluxPipeline
import torch

pipe = FluxPipeline.from_pretrained(
    "black-forest-labs/FLUX.1-dev",
    torch_dtype=torch.bfloat16,
)
pipe.to("cuda")

image = pipe(
    prompt="A cat holding a sign that says 'Hello World'",
    num_inference_steps=30,
    guidance_scale=3.5,
    height=1024,
    width=1024,
).images[0]
```

### 通量變體
|型號|許可證|品質 |速度|
|--------|--------|--------|--------|
| Flux.1 專業版 |僅限 API |最佳|快速|
| Flux.1 開發 |非商業 |太棒了|中等|
| Flux.1 施內爾 |阿帕契2.0 |好 |非常快（4步）|

---

## 3. 谷歌圖片 3

```python
# Google Imagen 3 via Vertex AI
from google.cloud import aiplatform
from vertexai.preview.vision_models import ImageGenerationModel

model = ImageGenerationModel.from_pretrained("imagen-3.0-generate-001")

response = model.generate_images(
    prompt="A peaceful Japanese garden with cherry blossoms",
    number_of_images=4,
    aspect_ratio="16:9",
    safety_filter_level="block_some",
    person_generation="dont_allow",
)

response[0].save("imagen_output.png")
```

---

## 4.Adobe Firefly API

```python
# Adobe Firefly: trained on licensed content → commercially safe
import requests

headers = {
    "Authorization": f"Bearer {FIREFLY_TOKEN}",
    "Content-Type": "application/json",
}

response = requests.post(
    "https://firefly-api.adobe.io/v2/images/generate",
    headers=headers,
    json={
        "prompt": "A modern office space with plants",
        "contentClass": "photo",  # photo, art
        "size": {"width": 2048, "height": 2048},
        "n": 1,
        "styles": {"presets": ["photo"]},
    }
)
```

---

## 5. 比較平台

|特色|標清/標清XL |達爾-E 3 |中途 |助焊劑|圖 3 |螢火蟲 |
|--------|---------|----------|------------|--------|---------|--------|
|品質 |太棒了|優秀|最佳（藝術）|優秀|優秀|好 |
|圖片中的文字 |可憐|太棒了|好 |最佳|好 |好 |
|提示關注 |好 |優秀|好 |優秀|優秀|好 |
|速度|快速（本地）| 〜10 秒 | 〜30秒|中| 〜10 秒 |〜15秒|
|成本/圖片 |免費（GPU）| 0.04-0.08 美元 | ~$0.03 |免費/API | ~$0.04 | ~$0.04 |
|開源 |是的 |沒有 |沒有 |部分|沒有 |沒有 |
|商業用途|是的 |是的 |是（付費）|變化 |是的 |是的 |
|微調|是的 |沒有 |沒有 |是的 |沒有 |沒有 |
|自架 |是的 |沒有 |沒有 |是的 |沒有 |沒有 |

---

## 6. 多模型編排

```python
class ImageGeneratorOrchestrator:
    """Route to best model based on use case"""

    def __init__(self):
        self.dalle = OpenAI()
        self.sd_pipe = StableDiffusionXLPipeline.from_pretrained(...)

    async def generate(self, prompt, use_case="general"):
        if use_case == "text_in_image":
            # Flux/DALL-E best for text rendering
            return await self._dalle_generate(prompt)
        elif use_case == "artistic":
            # Local SD with LoRA for custom styles
            return self._sd_generate(prompt)
        elif use_case == "commercial":
            # Firefly for copyright-safe content
            return await self._firefly_generate(prompt)
        elif use_case == "batch":
            # Local SD for cost efficiency
            return self._sd_generate(prompt)
        else:
            return await self._dalle_generate(prompt)

    async def _dalle_generate(self, prompt):
        response = self.dalle.images.generate(
            model="dall-e-3", prompt=prompt, size="1024x1024"
        )
        return response.data[0].url

    def _sd_generate(self, prompt):
        return self.sd_pipe(prompt, num_inference_steps=25).images[0]
```

---

## 7. 為用例選擇模型

```
📸 Product Photography → DALL-E 3, Imagen 3
🎨 Art & Illustration → Midjourney, SD + LoRA
📝 Text in Image → Flux, DALL-E 3
🏢 Commercial (copyright safe) → Adobe Firefly
🔧 Custom Style → Stable Diffusion + LoRA
💰 Budget / Batch → Stable Diffusion (local)
⚡ Real-time → Flux Schnell, SD Turbo
🔬 Research → Stable Diffusion, Flux Dev
```

---

## 總結

|平台|最適合 |定價模式|
|----------|----------|--------------|
|達爾-E 3 |一般，文字渲染 |每個圖像 API |
|中途 |藝術、美學 |訂閱 |
|助焊劑|開源，文字 |免費/API |
|圖片 3 |企業、Google雲端 |每張圖片 |
|螢火蟲 |版權安全的廣告 |每張圖片 |
|標清/標清XL |客製化、大量、自架 |免費（GPU 成本）|

> 📌 **下一篇文章：** 影片產生 — Sora、Runway、Kling 和 Pika。
