---
id: 019d8b30-bb10-7010-c010-f0c4e8000010
title: 'Bài 10: AI Editing Assistant — Chỉnh Design bằng Natural Language'
slug: bai-10-ai-editing-assistant-natural-language
description: >-
  Xây dựng AI editor nhận lệnh tiếng Anh/Việt: "make neon brighter",
  "move design higher", "change color to purple". InstructPix2Pix,
  Instruct-NeRF2NeRF cho image editing. LLM routing intent.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: AI Design Optimization & Editing"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

User tạo design xong, muốn chỉnh: *"make the neon brighter"*, *"di chuyển design lên trên"*, *"đổi màu sang tím"*. Thay vì bắt user dùng Photoshop, platform cho phép **chỉnh design bằng ngôn ngữ tự nhiên**. Bài này xây dựng AI Editing Assistant.

---

## 1. Edit Categories

```
User instructions phân loại thành 4 nhóm:

1. LAYOUT EDITING
   "move design higher"
   "make it smaller"
   "rotate 15 degrees"
   "center the design"

2. STYLE EDITING
   "make neon brighter"
   "add shadow effect"
   "change to grayscale"
   "add texture"

3. COLOR EDITING
   "change color to purple"
   "make it more vibrant"
   "darken the background"
   "invert colors"

4. CONTENT EDITING
   "remove the text"
   "add a skull"
   "replace cat with dog"
   "add lightning effect"
```

---

## 2. Intent Router (LLM-powered)

```python
class EditIntentRouter:
    """Phân tích lệnh edit và route đến handler phù hợp"""

    ROUTING_PROMPT = """
You are an edit intent classifier for a t-shirt design editor.

Classify the user's edit instruction into exactly ONE category:
- LAYOUT: move, resize, rotate, center, align, position
- STYLE: brightness, contrast, shadow, glow, texture, filter, effect
- COLOR: change color, hue, saturation, vibrance, invert, grayscale
- CONTENT: add element, remove element, replace, modify content
- REGENERATE: completely redo, start over, try again

Also extract parameters:
- For LAYOUT: direction, amount, anchor
- For COLOR: target_color, source_color
- For STYLE: effect_name, intensity
- For CONTENT: action, subject

Respond in JSON format.
User instruction: {instruction}
"""

    async def route(self, instruction: str) -> EditIntent:
        response = await self.llm.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{
                "role": "system",
                "content": self.ROUTING_PROMPT.format(
                    instruction=instruction
                )
            }],
            response_format={"type": "json_object"},
            temperature=0,
        )

        intent_data = json.loads(
            response.choices[0].message.content
        )

        return EditIntent(
            category=intent_data["category"],
            params=intent_data.get("params", {}),
            original_instruction=instruction,
        )
```

---

## 3. Layout Editor (Programmatic)

```python
class LayoutEditor:
    """Xử lý layout editing — không cần AI model"""

    def apply(
        self, design: Image.Image, intent: EditIntent
    ) -> Image.Image:
        params = intent.params

        action = params.get("action", "move")

        if action == "move":
            return self._move(
                design,
                direction=params.get("direction", "up"),
                amount=params.get("amount", 10),  # percent
            )
        elif action == "resize":
            return self._resize(
                design,
                scale=params.get("scale", 1.1),
            )
        elif action == "rotate":
            return self._rotate(
                design,
                angle=params.get("angle", 15),
            )
        elif action == "center":
            return self._center(design)

        return design

    def _move(
        self, img: Image.Image, direction: str, amount: int
    ) -> Image.Image:
        """Move design trong canvas"""
        canvas = Image.new("RGBA", img.size, (0, 0, 0, 0))
        offset_px = int(img.height * amount / 100)

        offsets = {
            "up": (0, -offset_px),
            "down": (0, offset_px),
            "left": (-offset_px, 0),
            "right": (offset_px, 0),
        }
        dx, dy = offsets.get(direction, (0, 0))
        canvas.paste(img, (dx, dy), img)
        return canvas
```

---

## 4. Style Editor (AI-powered)

```python
class StyleEditor:
    """AI-based style editing với InstructPix2Pix"""

    def __init__(self):
        from diffusers import (
            StableDiffusionInstructPix2PixPipeline
        )
        self.pipe = (
            StableDiffusionInstructPix2PixPipeline.from_pretrained(
                "timbrooks/instruct-pix2pix",
                torch_dtype=torch.float16,
            )
        )
        self.pipe.to("cuda")

    def apply(
        self,
        design: Image.Image,
        instruction: str,
        strength: float = 0.5,
    ) -> Image.Image:
        """
        Apply style edit bằng natural language

        strength: 0.3 (subtle) → 0.8 (dramatic)
        """
        result = self.pipe(
            prompt=instruction,
            image=design,
            num_inference_steps=20,
            image_guidance_scale=1.5,
            guidance_scale=7.5,
        ).images[0]

        return result
```

---

## 5. Color Editor

```python
class ColorEditor:
    """Chỉnh màu design"""

    def change_color(
        self,
        design: Image.Image,
        source_color: str | None,
        target_color: str,
    ) -> Image.Image:
        """Đổi màu design"""
        import numpy as np
        from colorsys import rgb_to_hsv, hsv_to_rgb

        img_array = np.array(design.convert("RGBA"))
        rgb = img_array[:, :, :3].astype(float) / 255

        target_rgb = self._hex_to_rgb(target_color)
        target_hsv = rgb_to_hsv(*target_rgb)

        # Convert to HSV
        h, s, v = np.vectorize(rgb_to_hsv)(
            rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]
        )

        # Shift hue to target, keep saturation and value
        h_new = np.full_like(h, target_hsv[0])
        s_new = s * (target_hsv[1] / max(np.mean(s), 0.01))
        s_new = np.clip(s_new, 0, 1)

        # Convert back
        r, g, b = np.vectorize(hsv_to_rgb)(h_new, s_new, v)
        result = np.stack([r, g, b], axis=-1) * 255

        img_array[:, :, :3] = result.astype(np.uint8)
        return Image.fromarray(img_array)

    def adjust_brightness(
        self, design: Image.Image, factor: float
    ) -> Image.Image:
        from PIL import ImageEnhance
        enhancer = ImageEnhance.Brightness(design)
        return enhancer.enhance(factor)

    def adjust_vibrance(
        self, design: Image.Image, factor: float
    ) -> Image.Image:
        from PIL import ImageEnhance
        enhancer = ImageEnhance.Color(design)
        return enhancer.enhance(factor)
```

---

## 6. Unified Edit Pipeline

```python
class EditingAssistant:
    """Unified pipeline cho tất cả editing operations"""

    def __init__(self):
        self.router = EditIntentRouter()
        self.editors = {
            "LAYOUT": LayoutEditor(),
            "STYLE": StyleEditor(),
            "COLOR": ColorEditor(),
            "CONTENT": ContentEditor(),
        }

    async def edit(
        self,
        design: Image.Image,
        instruction: str,
    ) -> EditResult:
        # 1. Route intent
        intent = await self.router.route(instruction)

        # 2. Get appropriate editor
        editor = self.editors.get(intent.category)
        if not editor:
            return EditResult(
                success=False,
                message=f"Unsupported edit type: {intent.category}"
            )

        # 3. Apply edit
        edited = editor.apply(design, intent)

        # 4. Validate result
        quality = PrintQualityGate().check_all(edited)

        return EditResult(
            success=True,
            image=edited,
            intent=intent,
            quality_report=quality,
        )
```

---

## Tổng kết

AI Editing Assistant:

1. **Intent routing** — LLM phân loại lệnh edit thành 4 categories
2. **Layout editor** — programmatic move/resize/rotate/center
3. **Style editor** — InstructPix2Pix cho AI-based style changes
4. **Color editor** — hue shift, brightness, vibrance adjustment
5. **Quality validation** — auto-check sau mỗi edit

Bài tiếp theo: **AI Typography** — generate text, font style và auto-placement cho áo thun.
