---
id: 019d8b30-bb22-7022-c022-f0c4e8000022
title: 'Lesson 22: AI Product Generation — Automatic Title, Description & Mockup'
slug: bai-22-ai-product-generation-title-description-mockup
description: >-
  LLM generates product title & description from design tags. Auto-mockup
  rendering: superimpose design onto real product photo. Multi-marketplace
  format (Etsy, Amazon, Shopify).
duration_minutes: 180
is_free: true
video_url: null
sort_order: 21
section_title: 'Part 6: AI for Production Pipeline'
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 'AI in Action: Building an AI Platform for Fashion & Print-on-Demand'
  slug: ai-thuc-chien-fashion-print-on-demand
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1181" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1181)"/>

  <!-- Decorations -->
  <g>
    <circle cx="701" cy="113" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="802" cy="54" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="903" cy="255" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1004" cy="196" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="605" cy="137" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="123" x2="1100" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="153" x2="1050" y2="223" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.9089653438086,104 955.9089653438086,142 923,161 890.0910346561914,142 890.0910346561914,104.00000000000001 923,85" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI & ML — Lesson 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 22: AI Product Generation — Title,</tspan>
      <tspan x="60" dy="42">Description & Automatic Mockup</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI in Action: Building an AI Platform for Fashion & Print-on-Demand</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: AI for Production Pipeline</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Seller has design, tags — now needs **product listing**: SEO-friendly title, attractive description, and professional mockup images. This article uses LLM for copywriting and perspective transform for mockup generation.

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

## Summary

AI Product Generation:

1. **LLM copywriting** — GPT-4o-mini generates title, description, SEO tags
2. **Multi-marketplace** — format rules for Etsy, Amazon, Shopify
3. **Mockup engine** — perspective transform design onto template photos
4. **Batch pipeline** — tag → copy → mockup in one workflow

Next article: **Trending Detection & Content Moderation**.
