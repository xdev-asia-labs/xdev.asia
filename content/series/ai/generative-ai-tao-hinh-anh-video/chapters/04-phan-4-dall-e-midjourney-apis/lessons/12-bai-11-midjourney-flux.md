---
id: 019d8b31-bb11-7011-c011-ee1100000011
title: 'Bài 11: Midjourney, Flux & Emerging Models'
slug: bai-11-midjourney-flux
description: >-
  Midjourney API và Discord integration. Flux: architecture và
  capabilities. Google Imagen 3. Adobe Firefly API. So sánh quality,
  speed, cost giữa các platforms. Multi-model orchestration.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 4: DALL-E, Midjourney & Commercial APIs"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

Thị trường image generation 2026 rất đa dạng. Ngoài Stable Diffusion và DALL-E, còn có **Midjourney** (aesthetic tốt nhất), **Flux** (open-source mạnh), **Google Imagen 3**, **Adobe Firefly** (commercial-safe). Bài này so sánh và hướng dẫn tích hợp.

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
| Model | License | Quality | Speed |
|-------|---------|---------|-------|
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

## 5. So sánh Platforms

| Feature | SD/SDXL | DALL-E 3 | Midjourney | Flux | Imagen 3 | Firefly |
|---------|---------|----------|------------|------|----------|---------|
| Quality | Great | Excellent | Best (art) | Excellent | Excellent | Good |
| Text in images | Poor | Great | Good | Best | Good | Good |
| Prompt following | Good | Excellent | Good | Excellent | Excellent | Good |
| Speed | Fast (local) | ~10s | ~30s | Medium | ~10s | ~15s |
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

## 7. Chọn Model cho Use Case

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

## Tổng kết

| Platform | Best for | Pricing model |
|----------|----------|--------------|
| DALL-E 3 | General, text rendering | Per-image API |
| Midjourney | Art, aesthetic | Subscription |
| Flux | Open-source, text | Free/API |
| Imagen 3 | Enterprise, Google Cloud | Per-image |
| Firefly | Copyright-safe commercial | Per-image |
| SD/SDXL | Custom, batch, self-hosted | Free (GPU cost) |

> 📌 **Bài tiếp theo:** Video Generation — Sora, Runway, Kling & Pika.
