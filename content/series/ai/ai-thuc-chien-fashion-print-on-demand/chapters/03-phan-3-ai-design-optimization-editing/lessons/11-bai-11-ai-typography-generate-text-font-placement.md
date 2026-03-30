---
id: 019d8b30-bb11-7011-c011-f0c4e8000011
title: 'Bài 11: AI Typography — Generate Text, Font Style & Placement'
slug: bai-11-ai-typography-generate-text-font-placement
description: >-
  AI generate quotes, meme text, stylized typography cho áo thun.
  Font recommendation engine. Text rendering pipeline: style
  transfer cho font, auto-placement trên vùng print.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: AI Design Optimization & Editing"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Typography là thành phần quan trọng trong t-shirt design — quotes, meme text, brand names, stylized lettering. AI không chỉ tạo ảnh mà còn phải generate text đẹp, đúng font style, và đặt vào vị trí phù hợp trên áo.

---

## 1. Typography Challenges trong AI

### Tại sao text generation khó?

```
Stable Diffusion (SDXL) + text:
❌ Chữ bị sai spelling ("COFEE" thay vì "COFFEE")
❌ Chữ bị méo, khó đọc
❌ Font không consistent
❌ Chữ bị mirror/reverse

Giải pháp: KHÔNG dùng Diffusion model để render text trực tiếp.
→ Dùng text rendering engine riêng + composite lên design.
```

---

## 2. Text Generation Pipeline

```
User Input
├── "Tạo áo với quote motivational"
│
├── LLM generate quote text
│   └── "HUSTLE HARDER"
│
├── Font recommendation engine
│   └── Bold sans-serif, uppercase
│
├── Text rendering (Pillow/Cairo)
│   └── High-res text image (transparent)
│
├── Style transfer (optional)
│   └── Neon glow, shadow, gradient
│
└── Composite onto design
    └── Auto-placement + position
```

---

## 3. AI Text Content Generator

```python
class TextContentGenerator:
    """AI generate text content cho áo thun"""

    async def generate_text(
        self,
        category: str,
        style: str = "default",
        language: str = "en",
    ) -> list[str]:
        prompt = f"""
Generate 5 short text/quotes for a {style} style t-shirt.
Category: {category}
Language: {language}

Rules:
- Maximum 5 words per line
- Maximum 2 lines
- ALL CAPS preferred for impact
- Catchy, memorable, trendy
- No offensive content

Return as JSON array of strings.
"""
        response = await self.llm.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            response_format={"type": "json_object"},
        )

        return json.loads(
            response.choices[0].message.content
        )["texts"]
```

---

## 4. Font Recommendation Engine

```python
class FontRecommender:
    """Gợi ý font phù hợp theo style design"""

    FONT_STYLES = {
        "cyberpunk": [
            {"name": "Orbitron", "weight": "Bold", "case": "upper"},
            {"name": "Rajdhani", "weight": "SemiBold", "case": "upper"},
        ],
        "minimal": [
            {"name": "Montserrat", "weight": "Light", "case": "upper"},
            {"name": "Futura", "weight": "Medium", "case": "mixed"},
        ],
        "streetwear": [
            {"name": "Impact", "weight": "Regular", "case": "upper"},
            {"name": "Bebas Neue", "weight": "Regular", "case": "upper"},
        ],
        "vintage": [
            {"name": "Playfair Display", "weight": "Bold", "case": "mixed"},
            {"name": "Lora", "weight": "Regular", "case": "mixed"},
        ],
        "gaming": [
            {"name": "Press Start 2P", "weight": "Regular", "case": "upper"},
            {"name": "Audiowide", "weight": "Regular", "case": "upper"},
        ],
        "japanese": [
            {"name": "Noto Sans JP", "weight": "Black", "case": "mixed"},
            {"name": "M PLUS 1p", "weight": "Bold", "case": "mixed"},
        ],
    }

    def recommend(self, design_style: str) -> list[dict]:
        return self.FONT_STYLES.get(
            design_style, self.FONT_STYLES["minimal"]
        )
```

---

## 5. Text Rendering Engine

```python
from PIL import Image, ImageDraw, ImageFont

class TextRenderer:
    """Render text thành image cho composite"""

    def render(
        self,
        text: str,
        font_name: str,
        font_size: int,
        color: str = "#FFFFFF",
        effects: list[str] | None = None,
    ) -> Image.Image:
        # Load font
        font = ImageFont.truetype(
            f"fonts/{font_name}.ttf", font_size
        )

        # Calculate text size
        bbox = font.getbbox(text)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]

        # Create canvas with padding
        padding = font_size // 4
        canvas = Image.new(
            "RGBA",
            (text_width + padding * 2, text_height + padding * 2),
            (0, 0, 0, 0)
        )

        draw = ImageDraw.Draw(canvas)
        draw.text(
            (padding, padding),
            text, font=font,
            fill=color,
        )

        # Apply effects
        if effects:
            for effect in effects:
                canvas = self._apply_effect(canvas, effect)

        return canvas

    def _apply_effect(
        self, img: Image.Image, effect: str
    ) -> Image.Image:
        if effect == "neon_glow":
            return self._neon_glow(img)
        elif effect == "drop_shadow":
            return self._drop_shadow(img)
        elif effect == "outline":
            return self._outline(img)
        elif effect == "gradient":
            return self._gradient_fill(img)
        return img

    def _neon_glow(self, img: Image.Image) -> Image.Image:
        """Hiệu ứng neon glow cho text"""
        from PIL import ImageFilter
        import numpy as np

        # Create glow layer
        glow = img.filter(ImageFilter.GaussianBlur(radius=10))
        glow = glow.filter(ImageFilter.GaussianBlur(radius=5))

        # Brighten glow
        glow_array = np.array(glow)
        glow_array[:, :, :3] = np.clip(
            glow_array[:, :, :3] * 1.5, 0, 255
        ).astype(np.uint8)
        glow = Image.fromarray(glow_array)

        # Composite: glow behind text
        result = Image.alpha_composite(glow, img)
        return result
```

---

## 6. Auto-Placement

```python
class TextPlacer:
    """Tự động đặt text vào vị trí phù hợp trên design"""

    def auto_place(
        self,
        design: Image.Image,
        text_image: Image.Image,
        position: str = "auto",
    ) -> Image.Image:
        if position == "auto":
            position = self._find_best_position(
                design, text_image
            )

        positions = {
            "top_center": self._place_top_center,
            "bottom_center": self._place_bottom_center,
            "center": self._place_center,
            "arc_top": self._place_arc_top,
            "arc_bottom": self._place_arc_bottom,
        }

        placer = positions.get(position, self._place_center)
        return placer(design, text_image)

    def _find_best_position(
        self,
        design: Image.Image,
        text_image: Image.Image,
    ) -> str:
        """AI-detect vùng trống tốt nhất cho text"""
        # Phân tích content density theo vùng
        regions = self._analyze_regions(design)

        # Text đặt ở vùng ít content nhất
        least_dense = min(regions, key=lambda r: r["density"])
        return least_dense["position"]
```

---

## Tổng kết

AI Typography System:

1. **Text generation** — LLM tạo quotes, meme text, slogans
2. **Font recommendation** — gợi ý font theo design style
3. **Text rendering** — Pillow/Cairo render text quality cao
4. **Effects** — neon glow, shadow, outline, gradient
5. **Auto-placement** — tìm vùng trống phù hợp trên design

Bài tiếp theo bắt đầu **Phần 4: AI Personalization** — hệ thống AI học gu thẩm mỹ từng user.
