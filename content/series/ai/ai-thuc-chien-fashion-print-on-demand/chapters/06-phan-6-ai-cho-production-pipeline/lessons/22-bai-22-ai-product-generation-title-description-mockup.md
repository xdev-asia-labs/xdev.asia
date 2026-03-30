---
id: 019d8b30-bb22-7022-c022-f0c4e8000022
title: 'Bài 22: AI Product Generation — Title, Description & Mockup tự động'
slug: bai-22-ai-product-generation-title-description-mockup
description: >-
  LLM generate product title & description từ design tags.
  Auto-mockup rendering: ghép design lên product photo thật.
  Multi-marketplace format (Etsy, Amazon, Shopify).
duration_minutes: 180
is_free: true
video_url: null
sort_order: 21
section_title: "Phần 6: AI cho Production Pipeline"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Seller có design, có tags — giờ cần **product listing**: title SEO-friendly, description hấp dẫn, và mockup images chuyên nghiệp. Bài này dùng LLM cho copywriting và perspective transform cho mockup generation.

---

## 1. Product Content Generation Architecture

```
Design Tags                    Seller Preferences
(style, theme, colors)         (brand, tone, marketplace)
        │                              │
        └──────────┬───────────────────┘
                   │
          ┌────────▼────────┐
          │  LLM Content     │
          │  Generation      │
          │  (GPT-4 / Llama) │
          └────────┬────────┘
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
     Title    Description   SEO Tags
                   │
          ┌────────▼────────┐
          │  Mockup Engine   │
          │  (CV Transform)  │
          └────────┬────────┘
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
   Front Mock  Lifestyle  Detail Shot
```

---

## 2. LLM Product Copywriter

```python
from openai import AsyncOpenAI

class ProductCopywriter:
    """Generate product title & description bằng LLM"""

    def __init__(self):
        self.client = AsyncOpenAI()

    async def generate_listing(
        self,
        tags: DesignTags,
        product_type: str = "t-shirt",
        marketplace: str = "etsy",
        language: str = "en",
    ) -> ProductListing:
        # Build context from tags
        tag_context = self._build_tag_context(tags)

        # Marketplace-specific rules
        rules = self._marketplace_rules(marketplace)

        prompt = f"""Generate a product listing for a {product_type}.

Design characteristics:
{tag_context}

Marketplace: {marketplace}
{rules}

Return JSON:
{{
    "title": "SEO-optimized title ({rules['title_max_chars']} chars max)",
    "description": "Compelling product description",
    "bullet_points": ["feature 1", "feature 2", ...],
    "seo_tags": ["tag1", "tag2", ...]
}}"""

        response = await self.client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": "You are an expert e-commerce copywriter."
                },
                {"role": "user", "content": prompt},
            ],
            response_format={"type": "json_object"},
            temperature=0.7,
        )

        data = json.loads(response.choices[0].message.content)
        return ProductListing(**data)

    def _marketplace_rules(self, marketplace: str) -> dict:
        rules = {
            "etsy": {
                "title_max_chars": 140,
                "guidelines": (
                    "Title should be keyword-rich. "
                    "Use format: [Main keyword] - [Description] "
                    "- [Gift occasion]. "
                    "Include 13 SEO tags."
                ),
            },
            "amazon": {
                "title_max_chars": 200,
                "guidelines": (
                    "Title format: Brand + Product + "
                    "Key Feature + Material + Size. "
                    "Description: 5 bullet points + paragraph."
                ),
            },
            "shopify": {
                "title_max_chars": 70,
                "guidelines": (
                    "Short, clean title. "
                    "Rich HTML description with features."
                ),
            },
        }
        return rules.get(marketplace, rules["shopify"])

    def _build_tag_context(self, tags: DesignTags) -> str:
        lines = []
        if tags.style:
            styles = [t.label for t in tags.style[:3]]
            lines.append(f"Style: {', '.join(styles)}")
        if tags.theme:
            themes = [t.label for t in tags.theme[:3]]
            lines.append(f"Theme: {', '.join(themes)}")
        if tags.colors:
            lines.append(f"Colors: {', '.join(tags.colors)}")
        if tags.mood:
            moods = [t.label for t in tags.mood[:2]]
            lines.append(f"Mood: {', '.join(moods)}")
        if tags.audience:
            audiences = [t.label for t in tags.audience[:2]]
            lines.append(f"Audience: {', '.join(audiences)}")
        return "\n".join(lines)
```

---

## 3. Mockup Generation Engine

```python
import cv2
import numpy as np
from PIL import Image

class MockupGenerator:
    """Generate product mockups bằng perspective transform"""

    # Template library
    MOCKUP_TEMPLATES = {
        "flat_lay": {
            "image": "mockups/tshirt_flat_lay.png",
            "corners": [(320, 180), (680, 180), (700, 550), (300, 550)],
            "mask": "mockups/tshirt_flat_lay_mask.png",
        },
        "model_front": {
            "image": "mockups/model_male_front.png",
            "corners": [(285, 210), (515, 210), (530, 480), (270, 480)],
            "mask": "mockups/model_male_front_mask.png",
        },
        "hanger": {
            "image": "mockups/tshirt_hanger.png",
            "corners": [(310, 200), (690, 200), (710, 560), (290, 560)],
            "mask": "mockups/tshirt_hanger_mask.png",
        },
    }

    def generate_mockup(
        self,
        design: Image.Image,
        template_name: str = "flat_lay",
        shirt_color: str = "#FFFFFF",
    ) -> Image.Image:
        template = self.MOCKUP_TEMPLATES[template_name]

        # Load template image and mask
        bg = cv2.imread(template["image"], cv2.IMREAD_UNCHANGED)
        mask = cv2.imread(template["mask"], cv2.IMREAD_GRAYSCALE)

        # Apply shirt color to template
        bg = self._apply_shirt_color(bg, mask, shirt_color)

        # Perspective transform design onto template
        design_cv = cv2.cvtColor(np.array(design), cv2.COLOR_RGBA2BGRA)

        # Source corners (design image)
        h, w = design_cv.shape[:2]
        src_corners = np.float32([
            [0, 0], [w, 0], [w, h], [0, h]
        ])

        # Destination corners (on template)
        dst_corners = np.float32(template["corners"])

        # Compute perspective transform
        matrix = cv2.getPerspectiveTransform(
            src_corners, dst_corners
        )
        warped = cv2.warpPerspective(
            design_cv, matrix, (bg.shape[1], bg.shape[0]),
            flags=cv2.INTER_LINEAR,
        )

        # Create mask for warped design
        design_mask = np.zeros(
            (bg.shape[0], bg.shape[1]), dtype=np.uint8
        )
        cv2.fillConvexPoly(
            design_mask, dst_corners.astype(int), 255
        )

        # Blend design onto template
        result = self._blend_design(bg, warped, design_mask, mask)

        return Image.fromarray(
            cv2.cvtColor(result, cv2.COLOR_BGRA2RGBA)
        )

    def _apply_shirt_color(
        self, bg, mask, hex_color: str
    ) -> np.ndarray:
        """Apply shirt color to template using mask"""
        r = int(hex_color[1:3], 16)
        g = int(hex_color[3:5], 16)
        b = int(hex_color[5:7], 16)

        # Create color overlay
        overlay = bg.copy()
        overlay[mask > 128] = [b, g, r, 255]

        # Blend with multiply mode
        result = cv2.addWeighted(bg, 0.3, overlay, 0.7, 0)
        return result

    def generate_all_mockups(
        self,
        design: Image.Image,
        shirt_color: str = "#FFFFFF",
    ) -> dict[str, Image.Image]:
        """Generate all mockup variants"""
        return {
            name: self.generate_mockup(design, name, shirt_color)
            for name in self.MOCKUP_TEMPLATES
        }
```

---

## 4. Batch Product Creation

```python
class ProductCreationPipeline:
    """End-to-end product creation pipeline"""

    def __init__(self):
        self.tagger = AutoTagPipeline()
        self.copywriter = ProductCopywriter()
        self.mockup_gen = MockupGenerator()

    async def create_product(
        self,
        design: Image.Image,
        shirt_colors: list[str],
        marketplaces: list[str],
    ) -> Product:
        # 1. Auto-tag
        tags = await self.tagger.tag_design(design)

        # 2. Generate listings per marketplace
        listings = {}
        for marketplace in marketplaces:
            listing = await self.copywriter.generate_listing(
                tags, marketplace=marketplace
            )
            listings[marketplace] = listing

        # 3. Generate mockups per color
        mockups = {}
        for color in shirt_colors:
            color_mockups = self.mockup_gen.generate_all_mockups(
                design, shirt_color=color
            )
            mockups[color] = color_mockups

        return Product(
            design=design,
            tags=tags,
            listings=listings,
            mockups=mockups,
        )
```

---

## Tổng kết

AI Product Generation:

1. **LLM copywriting** — GPT-4o-mini generate title, description, SEO tags
2. **Multi-marketplace** — format rules cho Etsy, Amazon, Shopify
3. **Mockup engine** — perspective transform design lên template photos
4. **Batch pipeline** — tag → copy → mockup in one workflow

Bài tiếp theo: **Trending Detection & Content Moderation**.
