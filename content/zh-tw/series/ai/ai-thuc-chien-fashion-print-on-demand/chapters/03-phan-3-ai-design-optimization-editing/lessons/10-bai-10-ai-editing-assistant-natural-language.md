---
id: 019d8b30-bb10-7010-c010-f0c4e8000010
title: 第10課：AI編輯助手－用自然語言編輯設計
slug: bai-10-ai-editing-assistant-natural-language
description: >-
  建立一個人工智慧編輯器，接收英語/越南語命令：「使霓虹燈更亮」、「將設計移得更高」、「將顏色更改為紫色」。
  InstructPix2Pix、Instruct-NeRF2NeRF 用於影像編輯。 LLM路由意圖。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：AI 設計優化與編輯
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 人工智慧在行動：建構時尚和按需印刷的人工智慧平台
  slug: ai-thuc-chien-fashion-print-on-demand
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8988" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8988)"/>

  <!-- Decorations -->
  <g>
    <circle cx="610" cy="60" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="630" cy="80" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="100" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="180" x2="1100" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="210" x2="1050" y2="280" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="960.3108891324554,112.5 960.3108891324554,147.5 930,165 899.6891108675446,147.5 899.6891108675446,112.50000000000001 930,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第10課：AI編輯助理－編輯</tspan>
      <tspan x="60" dy="42">自然語言設計</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧在行動：建構時尚和按需印刷的人工智慧平台</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：AI 設計優化與編輯</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

建立設計後，使用者想要編輯：*「讓霓虹燈更亮」*，*「向上移動設計」*，*「將顏色改為紫色」*。該平台並沒有強迫使用者使用 Photoshop，而是允許 **用自然語言進行設計編輯**。本文搭建AI編輯助理。

---

## 1. 編輯類別

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

## 2. 意圖路由器（LLM 支援）

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

## 3.佈局編輯器（程式設計）

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

## 4. 風格編輯器（AI 驅動）

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

## 5. 顏色編輯器

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

## 6. 統一編輯管道

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

## 總結

人工智慧編輯助理：

1. **意圖路由**－LLM將編輯指令分為4類
2. **佈局編輯器** — 編程移動/調整大小/旋轉/居中
3. **樣式編輯器** — InstructPix2Pix 用於基於 AI 的樣式更改
4. **顏色編輯器** — 色調偏移、亮度、鮮豔度調整
5. **品質驗證** — 每次編輯後自動檢查

下一篇文章：**AI Typography** — 產生 T 卹文字、字體樣式和自動放置。
