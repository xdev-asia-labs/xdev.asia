---
id: 019d8b31-bb11-7011-c011-ee1100000011
title: 'レッスン 11: ミッドジャーニー、フラックス、新興モデル'
slug: bai-11-midjourney-flux
description: >-
  Midjourney API と Discord の統合。 Flux: アーキテクチャと機能。 Google Imagen 3。Adobe Firefly
  API。プラットフォーム間の品質、速度、コストを比較します。マルチモデルのオーケストレーション。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 4: DALL-E、Midjourney、商用 API'
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: '生成 AI: AI を使用して画像とビデオを作成する'
  slug: generative-ai-tao-hinh-anh-video
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI と ML — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: ミッドジャーニー、フラックス、新興モデル</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成 AI: AI を使用して画像とビデオを作成する</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: DALL-E、Midjourney、商用 API</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

2026 年の画像生成市場は非常に多様です。 Stable Diffusion と DALL-E に加えて、**Midjourney** (最高の美しさ)、**Flux** (強力なオープンソース)、**Google Imagen 3**、**Adobe Firefly** (商用安全) もあります。この記事では、統合を比較し、ガイドします。

---

## 1. 旅の途中

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

### 旅の途中のパラメータ
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

## 2. フラックス

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

### 磁束のバリエーション
|モデル |ライセンス |品質 |スピード |
|----------|----------|----------|----------|
| Flux.1 プロ | API のみ |ベスト |速い |
| Flux.1 開発 |非営利 |すばらしい |中 |
| Flux.1 シュネル |アパッチ2.0 |良い |非常に速い (4 ステップ) |

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

## 5. プラットフォームの比較

|特長 | SD/SDXL |ダルイー3 |旅の途中 |フラックス |イマージェン3 |ホタル |
|----------|-----------|----------|-------------|----------|----------|----------|
|品質 |すばらしい |素晴らしい |ベスト（アート） |素晴らしい |素晴らしい |良い |
|画像内のテキスト |悪い |すばらしい |良い |ベスト |良い |良い |
|次のプロンプト |良い |素晴らしい |良い |素晴らしい |素晴らしい |良い |
|スピード |高速 (ローカル) | ～10代 | ～30代 |中 | ～10代 | ～15秒 |
|コスト/イメージ |無料 (GPU) | $0.04-0.08 | ~$0.03 |無料/API | ~$0.04 | ~$0.04 |
|オープンソース |はい |いいえ |いいえ |部分的 |いいえ |いいえ |
|商用利用 |はい |はい |はい (有料) |さまざま |はい |はい |
|微調整可能 |はい |いいえ |いいえ |はい |いいえ |いいえ |
|自己ホスト型 |はい |いいえ |いいえ |はい |いいえ |いいえ |

---

## 6. マルチモデルのオーケストレーション

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

## 7. ユースケースのモデルを選択する

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

## 概要

|プラットフォーム |こんな方に最適 |価格モデル |
|----------|----------|--------------|
|ダルイー3 |一般、テキスト レンダリング |画像ごとの API |
|旅の途中 |アート、美学 |定期購読 |
|フラックス |オープンソース、テキスト |無料/API |
|イマージェン3 |エンタープライズ、Google Cloud |画像ごと |
|ホタル |著作権保護された商用 |画像ごと |
| SD/SDXL |カスタム、バッチ、セルフホスト |無料 (GPU コスト) |

> 📌 **次の記事:** ビデオ生成 — ソラ、ランウェイ、クリング、ピカ。
