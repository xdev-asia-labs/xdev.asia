---
id: 019d8b30-bb07-7007-c007-f0c4e8000007
title: 'Bài 7: Prompt Engineering cho Fashion — Tối ưu Prompt & Design Variations'
slug: bai-7-prompt-engineering-cho-fashion
description: >-
  Xây dựng prompt template system cho fashion design. Auto-enhance
  prompt với LLM. Bilingual support (EN/VI). Negative prompt
  optimization cho print quality. Variation generation strategies.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: AI Design Generation Engine"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Prompt là giao diện giữa user và AI. Một prompt tốt tạo ra design tuyệt vời, prompt kém tạo ra rác. Bài này xây dựng **Prompt Engineering System** chuyên biệt cho fashion — bao gồm template, auto-enhance, negative prompt optimization, và bilingual handling.

---

## 1. Fashion Prompt Anatomy

### Cấu trúc prompt hiệu quả cho t-shirt design

```
[Style] + [Subject] + [Details] + [Technical Quality] + [Print Spec]

Ví dụ:
"cyberpunk style, neon smiley face with sunglasses,
 glowing edges, holographic effect,
 high detail, vector art, clean lines,
 t-shirt design, transparent background, print-ready, 300 DPI"
```

### Prompt Components

```python
PROMPT_COMPONENTS = {
    "styles": [
        "cyberpunk", "minimalist", "vintage retro", "gaming esports",
        "streetwear urban", "japanese typography", "graffiti art",
        "botanical nature", "abstract geometric", "pop art",
        "gothic dark", "kawaii cute", "vaporwave", "psychedelic",
    ],
    "techniques": [
        "vector art", "illustration", "watercolor", "line art",
        "pixel art", "3D render", "collage", "halftone",
        "screen print style", "embroidery style",
    ],
    "quality_boosters": [
        "high detail", "clean lines", "sharp edges",
        "professional quality", "studio quality",
        "crisp", "vibrant colors",
    ],
    "print_specs": [
        "t-shirt design", "isolated design element",
        "transparent background", "print-ready",
        "single color background", "centered composition",
    ],
}
```

---

## 2. Auto-Enhance Pipeline

```python
class PromptEnhancer:
    """Tự động nâng cấp user prompt cho fashion design"""

    def __init__(self):
        self.llm = openai.AsyncClient()

    async def enhance(self, user_prompt: str) -> EnhancedPrompt:
        # Step 1: Detect language
        lang = self._detect_language(user_prompt)

        # Step 2: Translate if Vietnamese
        if lang == "vi":
            user_prompt = await self._translate_vi_to_en(user_prompt)

        # Step 3: Analyze prompt completeness
        analysis = self._analyze_prompt(user_prompt)

        # Step 4: Enhance with missing components
        enhanced = await self._llm_enhance(user_prompt, analysis)

        # Step 5: Build negative prompt
        negative = self._build_negative_prompt(analysis)

        return EnhancedPrompt(
            original=user_prompt,
            enhanced=enhanced,
            negative=negative,
            detected_style=analysis.get("style"),
            detected_language=lang,
        )

    ENHANCE_SYSTEM_PROMPT = """
You are a fashion design prompt engineer for a t-shirt print-on-demand AI.

Given a user's design idea, create an optimized Stable Diffusion prompt.

Rules:
1. Keep the user's core concept intact
2. Add art style if missing (e.g., vector art, illustration)
3. Add "t-shirt design, isolated, transparent background, print-ready"
4. Add quality boosters: "high detail, clean lines, vibrant"
5. Maximum 77 tokens (CLIP limit)
6. Do NOT add: people, mannequins, mockups, backgrounds

Output only the enhanced prompt, nothing else.
"""

    FASHION_NEGATIVE_PROMPT = (
        "blurry, low quality, watermark, signature, text overlay, "
        "person wearing shirt, full body, mannequin, model, "
        "wrinkled fabric, photographic, photo, realistic background, "
        "busy background, multiple designs, border, frame, "
        "distorted, deformed, ugly, duplicate, morbid, "
        "low resolution, jpeg artifacts, out of frame"
    )
```

---

## 3. Template System

```python
class PromptTemplateSystem:
    """Template-based prompt generation cho quick design"""

    TEMPLATES = {
        "meme": {
            "prompt": (
                "{subject}, meme style, bold text ready, "
                "humorous illustration, {color_scheme}, "
                "t-shirt design, transparent background"
            ),
            "negative_extra": "serious, realistic, photographic",
        },
        "gaming": {
            "prompt": (
                "{subject}, gaming esports style, "
                "glowing effects, neon lighting, {color_scheme}, "
                "dynamic composition, t-shirt design, "
                "transparent background"
            ),
            "negative_extra": "calm, peaceful, nature",
        },
        "minimal": {
            "prompt": (
                "{subject}, minimalist design, clean lines, "
                "simple composition, {color_scheme}, "
                "flat design, t-shirt design, transparent background"
            ),
            "negative_extra": "complex, detailed, busy, cluttered",
        },
        "streetwear": {
            "prompt": (
                "{subject}, streetwear urban style, bold graphics, "
                "{color_scheme}, grunge texture, "
                "t-shirt design, transparent background"
            ),
            "negative_extra": "elegant, formal, corporate",
        },
        "japanese": {
            "prompt": (
                "{subject}, Japanese aesthetic, kanji typography, "
                "{color_scheme}, ukiyo-e inspired, "
                "t-shirt design, transparent background"
            ),
            "negative_extra": "western, modern, corporate",
        },
    }

    def apply_template(
        self,
        template_name: str,
        subject: str,
        color_scheme: str = "vibrant colors",
    ) -> tuple[str, str]:
        template = self.TEMPLATES[template_name]
        prompt = template["prompt"].format(
            subject=subject,
            color_scheme=color_scheme,
        )
        negative = (
            PromptEnhancer.FASHION_NEGATIVE_PROMPT
            + ", " + template["negative_extra"]
        )
        return prompt, negative
```

---

## 4. Variation Strategies

```python
class VariationStrategy:
    """Tạo variations đa dạng từ 1 prompt"""

    def generate_diverse_variations(
        self, base_prompt: str, num_variations: int = 4
    ) -> list[dict]:
        strategies = [
            self._seed_variation,       # Cùng prompt, khác seed
            self._style_variation,      # Cùng subject, khác style
            self._color_variation,      # Cùng design, khác color
            self._composition_variation, # Cùng elements, khác layout
        ]

        variations = []
        for i in range(num_variations):
            strategy = strategies[i % len(strategies)]
            variation = strategy(base_prompt, i)
            variations.append(variation)

        return variations

    def _style_variation(
        self, prompt: str, index: int
    ) -> dict:
        """Thay đổi art style"""
        styles = [
            "vector art style",
            "watercolor illustration",
            "line art style",
            "screen print style",
        ]
        return {
            "prompt": f"{prompt}, {styles[index % len(styles)]}",
            "strategy": "style_variation",
        }

    def _color_variation(
        self, prompt: str, index: int
    ) -> dict:
        """Thay đổi color scheme"""
        schemes = [
            "vibrant neon colors",
            "monochrome black and white",
            "pastel soft colors",
            "earth tones warm colors",
        ]
        return {
            "prompt": f"{prompt}, {schemes[index % len(schemes)]}",
            "strategy": "color_variation",
        }
```

---

## Tổng kết

Prompt Engineering System cho fashion:

1. **Prompt anatomy** — cấu trúc [Style] + [Subject] + [Details] + [Quality] + [Print]
2. **Auto-enhance** — LLM tự động nâng cấp prompt, thêm fashion-specific keywords
3. **Template system** — templates cho meme, gaming, minimal, streetwear, Japanese
4. **Negative prompt** — tối ưu cho print quality, loại bỏ unwanted elements
5. **Variation strategies** — seed, style, color, composition variations

Bài tiếp theo bắt đầu **Phần 3: AI Design Optimization & Editing** — đảm bảo design có thể in thực tế.
