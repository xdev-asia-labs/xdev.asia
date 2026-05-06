---
id: 019d8b30-bb06-7006-c006-f0c4e8000006
title: 第 6 課：多模態生成 — 結合文字 + 影像進行設計輸出
slug: bai-6-multi-modal-generation-text-image
description: 建立結合文字提示 + 影像參考的管道：ControlNet 調節、IP 適配器 + 提示融合、多參考混合。輸出 2–4 種設計變體。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：AI 設計生成引擎
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 人工智慧在行動：建構時尚和按需印刷的人工智慧平台
  slug: ai-thuc-chien-fashion-print-on-demand
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2812" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2812)"/>

  <!-- Decorations -->
  <g>
    <circle cx="754" cy="72" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="908" cy="86" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1062" cy="100" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="716" cy="114" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="870" cy="128" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="92" x2="1100" y2="172" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="122" x2="1050" y2="192" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1065.38268590218,228.5 1065.38268590218,255.5 1042,269 1018.6173140978201,255.5 1018.6173140978201,228.5 1042,215" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：多模態生成－組合</tspan>
      <tspan x="60" dy="42">設計輸出的文字+圖像</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧在行動：建構時尚和按需印刷的人工智慧平台</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：AI 設計生成引擎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

平台的真正強大之處在於能夠結合**文字+圖像**－使用者既可以用文字描述，又可以提供參考圖像。本文使用 IP-Adapter + ControlNet + 文字提示融合建構了**多模態生成**管道。

---

## 1.多模態Pipeline架構

```
User Input
├── Text Prompt: "cyberpunk cat with neon glasses"
└── Reference Image: [uploaded artwork]
        │
        ├── CLIP encode → style embedding
        ├── IP-Adapter → style conditioning
        └── Color extraction → color guidance
                │
                ▼
    ┌───────────────────────────┐
    │   SDXL + LoRA (fashion)   │
    │   + IP-Adapter (style)    │
    │   + ControlNet (layout)   │
    └───────────────────────────┘
                │
                ▼
        4 Design Variations
```

---

## 2.提示+影像融合引擎

```python
class MultiModalGenerator:
    """Kết hợp text prompt + image reference để generate design"""

    def __init__(self):
        self.pipe = self._setup_pipeline()
        self.style_analyzer = StyleAnalyzer()
        self.color_extractor = ColorExtractor()

    def _setup_pipeline(self):
        pipe = StableDiffusionXLPipeline.from_pretrained(
            "stabilityai/stable-diffusion-xl-base-1.0",
            torch_dtype=torch.float16,
        )
        pipe.load_lora_weights("models/sdxl-fashion-lora-v2.1")
        pipe.load_ip_adapter(
            "h94/IP-Adapter",
            subfolder="sdxl_models",
            weight_name="ip-adapter-plus_sdxl_vit-h.safetensors",
        )
        pipe.to("cuda")
        return pipe

    async def generate(
        self,
        prompt: str | None = None,
        reference_image: Image.Image | None = None,
        num_variations: int = 4,
        style_strength: float = 0.5,
    ) -> GenerationResult:
        # Determine generation mode
        if prompt and reference_image:
            return await self._generate_multimodal(
                prompt, reference_image,
                num_variations, style_strength
            )
        elif prompt:
            return await self._generate_text_only(
                prompt, num_variations
            )
        elif reference_image:
            return await self._generate_image_only(
                reference_image, num_variations
            )
        else:
            raise ValueError("Cần ít nhất prompt hoặc reference image")

    async def _generate_multimodal(
        self,
        prompt: str,
        reference: Image.Image,
        num_variations: int,
        style_strength: float,
    ) -> GenerationResult:
        # 1. Analyze reference
        style = self.style_analyzer.classify_style(reference)
        colors = self.color_extractor.extract_palette(reference)

        # 2. Enhance prompt with reference info
        enhanced_prompt = self._fuse_prompt_with_reference(
            prompt, style, colors
        )

        # 3. Set IP-Adapter influence
        self.pipe.set_ip_adapter_scale(style_strength)

        # 4. Generate
        images = self.pipe(
            prompt=enhanced_prompt,
            negative_prompt=self.FASHION_NEGATIVE_PROMPT,
            ip_adapter_image=reference,
            num_images_per_prompt=num_variations,
            num_inference_steps=30,
            guidance_scale=7.5,
        ).images

        return GenerationResult(
            images=images,
            prompt_used=enhanced_prompt,
            style_analysis=style,
            colors=colors,
        )

    def _fuse_prompt_with_reference(
        self,
        user_prompt: str,
        style: dict,
        colors: list[dict],
    ) -> str:
        """Kết hợp prompt với thông tin từ reference"""
        top_style = list(style.keys())[0]
        color_names = [c["name"] for c in colors[:3]]

        fused = (
            f"{user_prompt}, "
            f"{top_style} style, "
            f"color palette: {', '.join(color_names)}, "
            f"t-shirt design, transparent background, print-ready"
        )
        return fused
```

---

## 3. 佈局控制的 ControlNet

```python
from diffusers import ControlNetModel, StableDiffusionXLControlNetPipeline

class LayoutControlledGenerator:
    """Generate design với layout control từ ControlNet"""

    def __init__(self):
        controlnet = ControlNetModel.from_pretrained(
            "diffusers/controlnet-canny-sdxl-1.0",
            torch_dtype=torch.float16,
        )
        self.pipe = StableDiffusionXLControlNetPipeline.from_pretrained(
            "stabilityai/stable-diffusion-xl-base-1.0",
            controlnet=controlnet,
            torch_dtype=torch.float16,
        )
        self.pipe.load_lora_weights("models/sdxl-fashion-lora-v2.1")
        self.pipe.to("cuda")

    def generate_with_layout(
        self,
        prompt: str,
        layout_image: Image.Image,
        controlnet_scale: float = 0.5,
    ) -> list[Image.Image]:
        """
        Generate design theo layout guide

        layout_image: Ảnh canny edge hoặc sketch
        controlnet_scale: 0.3 (loose) → 0.8 (strict)
        """
        # Generate canny edge nếu input là ảnh thường
        control_image = self._prepare_control(layout_image)

        images = self.pipe(
            prompt=prompt,
            image=control_image,
            controlnet_conditioning_scale=controlnet_scale,
            num_images_per_prompt=4,
            num_inference_steps=30,
        ).images

        return images

    def _prepare_control(self, image: Image.Image) -> Image.Image:
        """Tạo control image (canny edge)"""
        import cv2
        import numpy as np

        img_array = np.array(image.convert("RGB"))
        gray = cv2.cvtColor(img_array, cv2.COLOR_RGB2GRAY)
        edges = cv2.Canny(gray, 100, 200)
        return Image.fromarray(edges)
```

---

## 4. 多參考混合

```python
class MultiReferenceBlender:
    """Kết hợp nhiều reference images"""

    def blend_references(
        self,
        references: list[Image.Image],
        weights: list[float] | None = None,
    ) -> torch.Tensor:
        """
        Blend CLIP embeddings từ nhiều references

        references: List ảnh tham khảo
        weights: Trọng số mỗi reference (sum = 1.0)
        """
        if weights is None:
            weights = [1.0 / len(references)] * len(references)

        embeddings = []
        for ref in references:
            emb = self.style_analyzer.get_image_embedding(ref)
            embeddings.append(emb)

        # Weighted average
        blended = sum(
            w * emb for w, emb in zip(weights, embeddings)
        )
        blended = blended / blended.norm(dim=-1, keepdim=True)

        return blended
```

---

## 總結

多模式生成管道：

1. **提示+影像融合**－將文字意圖與視覺參考結合
2. **IP-Adapter** — 風格轉換可控，強度可調
3. **ControlNet** — 用於服裝感知放置的版面控制
4. **多重參考混合** — 按權重混合多個參考

下一篇文章：**時尚快速工程** - 建立模板系統、雙語處理和變化策略。
