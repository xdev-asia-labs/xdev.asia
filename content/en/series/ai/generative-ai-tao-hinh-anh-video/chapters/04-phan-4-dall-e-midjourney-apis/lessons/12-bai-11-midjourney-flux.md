---
id: 019d8b31-bb11-7011-c011-ee1100000011
title: 'Lesson 11: Midjourney, Flux & Emerging Models'
slug: bai-11-midjourney-flux
description: >-
  Midjourney API and Discord integration. Flux: architecture and capabilities.
  Google Imagen 3. Adobe Firefly API. Compare quality, speed, cost between
  platforms. Multi-model orchestration.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: 'Part 4: DALL-E, Midjourney & Commercial APIs'
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: 'Generative AI: Create Images & Videos with AI'
  slug: generative-ai-tao-hinh-anh-video
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI & ML — Lesson 10</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: Midjourney, Flux & Emerging Models</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Generative AI: Create Images & Videos with AI</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: DALL-E, Midjourney & Commercial APIs</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

The image generation 2026 market is very diverse. In addition to Stable Diffusion and DALL-E, there are also **Midjourney** (best aesthetic), **Flux** (strong open-source), **Google Imagen 3**, **Adobe Firefly** (commercial-safe). This article compares and guides integration.

---

## 1. Midjourney

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

### Midjourney Parameters
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

## 2. Flux

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

### Flux Variants
| Model | License | Quality | Speed ​​|
|-------|--------|--------|-------|
| Flux.1 Pro | API only | Best | Fast |
| Flux.1 Dev | Non-commercial | Great | Medium |
| Flux.1 Schnell | Apache 2.0 | Good | Very fast (4 steps) |

---

## 3. Google Imagen 3

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

## 4. Adobe Firefly API

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

## 5. Compare Platforms

| Features | SD/SDXL | DALL-E 3 | Midjourney | Flux | Imagen 3 | Firefly |
|--------|---------|----------|-------------|-------|----------|--------|
| Quality | Great | Excellent | Best (art) | Excellent | Excellent | Good |
| Text in images | Poor | Great | Good | Best | Good | Good |
| Prompt following | Good | Excellent | Good | Excellent | Excellent | Good |
| Speed ​​| Fast (local) | ~10s | ~30s | Medium | ~10s | ~15s |
| Cost/image | Free (GPU) | $0.04-0.08 | ~$0.03 | Free/API | ~$0.04 | ~$0.04 |
| Open source | Yes | No | No | Partial | No | No |
| Commercial use | Yes | Yes | Yes (paid) | Varies | Yes | Yes |
| Fine-tunable | Yes | No | No | Yes | No | No |
| Self-hosted | Yes | No | No | Yes | No | No |

---

## 6. Multi-model Orchestration

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

## 7. Select Model for Use Case

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

## Summary

| Platform | Best for | Pricing model |
|----------|----------|--------------|
| DALL-E 3 | General, text rendering | Per-image API |
| Midjourney | Art, aesthetic | Subscriptions |
| Flux | Open-source, text | Free/API |
| Imagen 3 | Enterprise, Google Cloud | Per-image |
| Firefly | Copyright-safe commercial | Per-image |
| SD/SDXL | Custom, batch, self-hosted | Free (GPU cost) |

> 📌 **Next article:** Video Generation — Sora, Runway, Kling & Pika.
