---
id: 019d8b30-bb06-7006-c006-f0c4e8000006
title: 'Bài 6: Multi-modal Generation — Kết hợp Text + Image cho Design Output'
slug: bai-6-multi-modal-generation-text-image
description: >-
  Xây dựng pipeline kết hợp text prompt + image reference:
  ControlNet conditioning, IP-Adapter + prompt fusion,
  multi-reference blending. Output 2–4 design variations.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: AI Design Generation Engine"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Sức mạnh thực sự của platform nằm ở khả năng kết hợp **text + image** — user vừa mô tả bằng lời, vừa đưa ảnh tham khảo. Bài này xây dựng pipeline **multi-modal generation** sử dụng IP-Adapter + ControlNet + text prompt fusion.

---

## 1. Kiến trúc Multi-modal Pipeline

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

## 2. Prompt + Image Fusion Engine

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

## 3. ControlNet cho Layout Control

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

## 4. Multi-Reference Blending

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

## Tổng kết

Multi-modal generation pipeline:

1. **Prompt + Image fusion** — kết hợp text intent với visual reference
2. **IP-Adapter** — controllable style transfer với adjustable strength
3. **ControlNet** — layout control cho garment-aware placement
4. **Multi-reference blending** — pha trộn nhiều references theo trọng số

Bài tiếp theo: **Prompt Engineering cho Fashion** — xây dựng template system, bilingual handling và variation strategies.
