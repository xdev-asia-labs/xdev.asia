---
id: 019d8b30-bb20-7020-c020-f0c4e8000020
title: 'Lesson 20: Print File Optimization — RGB→CMYK, DPI, Super Resolution'
slug: bai-20-print-file-optimization-rgb-cmyk-dpi
description: >-
  Convert design from screen (RGB) to print-ready (CMYK), ensure DPI, AI upscale
  with Real-ESRGAN, color profile management. ICC profile, gamut mapping.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 19
section_title: 'Part 6: AI for Production Pipeline'
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 'AI in Action: Building an AI Platform for Fashion & Print-on-Demand'
  slug: ai-thuc-chien-fashion-print-on-demand
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6245" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6245)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1099" cy="167" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1098" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1097" cy="85" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1096" cy="44" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="1095" cy="263" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="177" x2="1100" y2="257" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="207" x2="1050" y2="277" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1004.712812921102,161 1004.712812921102,193 977,209 949.287187078898,193 949.287187078898,161 977,145" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI & ML — Lesson 19</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 20: Print File Optimization —</tspan>
      <tspan x="60" dy="42">RGB→CMYK, DPI, Super Resolution</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI in Action: Building an AI Platform for Fashion & Print-on-Demand</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: AI for Production Pipeline</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

A design that looks good on screen may not look good in print. This article handles the **print production pipeline**: standard RGB → CMYK conversion, ensuring a minimum DPI of 300, and AI upscale low-res design using Real-ESRGAN.

---

## 1. Print Production Pipeline

```
User Design (RGB, 72-150 DPI)
        │
        ▼
┌──────────────────────┐
│ 1. Quality Assessment │  ← Check DPI, resolution, artifacts
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ 2. AI Super Resolution│  ← Real-ESRGAN upscale (if needed)
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ 3. Color Conversion   │  ← RGB → CMYK với ICC profile
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ 4. Print File Export  │  ← TIFF/PDF, 300+ DPI, CMYK
└──────────────────────┘
```

---

## 2. Quality Assessment

```python
from PIL import Image
import numpy as np

class PrintQualityAssessor:
    """Đánh giá chất lượng design cho print"""

    # DPI thresholds cho các phương pháp in
    MIN_DPI = {
        "dtg": 300,           # Direct-to-Garment
        "screen_print": 300,  # Screen Printing
        "sublimation": 150,   # Sublimation
        "vinyl": 72,          # Vinyl Cut
    }

    def assess(
        self,
        image: Image.Image,
        target_size_cm: tuple[float, float],
        print_method: str = "dtg",
    ) -> PrintQualityReport:
        width_px, height_px = image.size
        target_w_cm, target_h_cm = target_size_cm

        # Calculate actual DPI at target size
        dpi_w = width_px / (target_w_cm / 2.54)
        dpi_h = height_px / (target_h_cm / 2.54)
        actual_dpi = min(dpi_w, dpi_h)

        required_dpi = self.MIN_DPI[print_method]

        # Calculate upscale needed
        if actual_dpi < required_dpi:
            scale_factor = required_dpi / actual_dpi
            needs_upscale = True
        else:
            scale_factor = 1.0
            needs_upscale = False

        # Check for artifacts
        artifacts = self._detect_artifacts(image)

        return PrintQualityReport(
            actual_dpi=actual_dpi,
            required_dpi=required_dpi,
            needs_upscale=needs_upscale,
            scale_factor=scale_factor,
            artifacts=artifacts,
            is_print_ready=actual_dpi >= required_dpi and not artifacts,
        )

    def _detect_artifacts(
        self, image: Image.Image
    ) -> list[str]:
        """Detect common image artifacts"""
        issues = []
        img_array = np.array(image)

        # Check JPEG artifacts (blockiness)
        if self._detect_blockiness(img_array) > 0.3:
            issues.append("jpeg_artifacts")

        # Check if too small
        if min(image.size) < 500:
            issues.append("very_low_resolution")

        # Check transparency issues
        if image.mode == "RGBA":
            alpha = np.array(image.split()[3])
            if np.any((alpha > 0) & (alpha < 255)):
                issues.append("semi_transparent_pixels")

        return issues
```

---

## 3. AI Super Resolution (Real-ESRGAN)

```python
import torch
from basicsr.archs.rrdbnet_arch import RRDBNet
from realesrgan import RealESRGANer

class AIUpscaler:
    """AI-powered image upscaling cho print"""

    def __init__(self):
        # RealESRGAN x4 model
        model = RRDBNet(
            num_in_ch=3, num_out_ch=3,
            num_feat=64, num_block=23,
            num_grow_ch=32, scale=4,
        )
        self.upsampler = RealESRGANer(
            scale=4,
            model_path="models/RealESRGAN_x4plus.pth",
            model=model,
            tile=400,       # Process in tiles (GPU memory)
            tile_pad=10,
            pre_pad=0,
            half=True,      # FP16 for speed
        )

    def upscale(
        self,
        image: Image.Image,
        target_scale: float,
    ) -> Image.Image:
        """
        Upscale image by target_scale factor

        Real-ESRGAN supports 4x natively.
        For other scales, upscale 4x then resize.
        """
        img_array = np.array(image.convert("RGB"))

        # Upscale 4x
        output, _ = self.upsampler.enhance(
            img_array, outscale=4
        )

        result = Image.fromarray(output)

        # If target < 4x, downscale to exact size
        if target_scale < 4:
            new_size = (
                int(image.width * target_scale),
                int(image.height * target_scale),
            )
            result = result.resize(
                new_size, Image.Resampling.LANCZOS
            )

        return result

    def upscale_for_print(
        self,
        image: Image.Image,
        target_size_cm: tuple[float, float],
        target_dpi: int = 300,
    ) -> Image.Image:
        """Upscale to exact print size + DPI"""
        target_w_px = int(target_size_cm[0] / 2.54 * target_dpi)
        target_h_px = int(target_size_cm[1] / 2.54 * target_dpi)

        # Calculate needed scale
        scale_w = target_w_px / image.width
        scale_h = target_h_px / image.height
        scale = max(scale_w, scale_h)

        if scale <= 1.0:
            # Already big enough, just resize
            return image.resize(
                (target_w_px, target_h_px),
                Image.Resampling.LANCZOS,
            )

        # Multi-pass upscale if scale > 4x
        current = image
        while scale > 1.0:
            step_scale = min(scale, 4.0)
            current = self.upscale(current, step_scale)
            scale /= 4.0

        # Final resize to exact dimensions
        return current.resize(
            (target_w_px, target_h_px),
            Image.Resampling.LANCZOS,
        )
```

---

## 4. RGB → CMYK Conversion

```python
from PIL import ImageCms

class ColorConverter:
    """Convert RGB → CMYK với ICC profile"""

    def __init__(self):
        # ICC profiles
        self.srgb_profile = ImageCms.createProfile("sRGB")
        self.cmyk_profile = ImageCms.getOpenProfile(
            "profiles/USWebCoatedSWOP.icc"
        )

    def rgb_to_cmyk(
        self,
        image: Image.Image,
        rendering_intent: int = ImageCms.Intent.RELATIVE_COLORIMETRIC,
    ) -> Image.Image:
        """
        Convert RGB → CMYK sử dụng ICC profiles

        Rendering Intents:
        - PERCEPTUAL (0): Giữ overall look, tốt cho photos
        - RELATIVE_COLORIMETRIC (1): Accurate colors, default
        - SATURATION (2): Vivid colors, tốt cho graphics
        - ABSOLUTE_COLORIMETRIC (3): Exact match
        """
        # Ensure RGB input
        if image.mode == "RGBA":
            # Flatten alpha onto white background
            background = Image.new("RGB", image.size, (255, 255, 255))
            background.paste(image, mask=image.split()[3])
            image = background
        elif image.mode != "RGB":
            image = image.convert("RGB")

        # Create transform
        transform = ImageCms.buildTransformFromOpenProfiles(
            self.srgb_profile,
            self.cmyk_profile,
            "RGB",
            "CMYK",
            renderingIntent=rendering_intent,
        )

        # Apply transform
        cmyk_image = ImageCms.applyTransform(image, transform)

        return cmyk_image

    def check_gamut(
        self, image: Image.Image
    ) -> GamutReport:
        """Check which colors are out of CMYK gamut"""
        img_array = np.array(image.convert("RGB"))

        out_of_gamut = 0
        total = img_array.shape[0] * img_array.shape[1]

        for y in range(0, img_array.shape[0], 10):
            for x in range(0, img_array.shape[1], 10):
                r, g, b = img_array[y, x]
                if self._is_out_of_gamut(r, g, b):
                    out_of_gamut += 1

        return GamutReport(
            total_pixels_sampled=total // 100,
            out_of_gamut_pixels=out_of_gamut,
            percentage=out_of_gamut / (total // 100) * 100,
        )
```

---

## 5. Print File Export Pipeline

```python
class PrintFileExporter:
    """Export print-ready files"""

    async def export(
        self,
        design: Image.Image,
        product_type: str,
        size: str,
        print_method: str = "dtg",
    ) -> PrintFile:
        # 1. Get print specs
        specs = self._get_print_specs(product_type, size)

        # 2. Assess quality
        quality = assessor.assess(
            design, specs.print_area_cm, print_method
        )

        # 3. Upscale if needed
        if quality.needs_upscale:
            design = upscaler.upscale_for_print(
                design, specs.print_area_cm, specs.dpi
            )

        # 4. Convert color space
        cmyk_design = color_converter.rgb_to_cmyk(design)

        # 5. Export TIFF
        output_path = f"print_files/{uuid4()}.tiff"
        cmyk_design.save(
            output_path,
            format="TIFF",
            dpi=(specs.dpi, specs.dpi),
            compression="lzw",
        )

        return PrintFile(
            path=output_path,
            dpi=specs.dpi,
            color_space="CMYK",
            size_cm=specs.print_area_cm,
        )
```

---

## Summary

Print File Optimization:

1. **Quality assessment** — DPI check, artifact detection
2. **Real-ESRGAN** — AI upscale 4x, multi-pass for > 4x
3. **Color conversion** — ICC profile RGB→CMYK, gamut check
4. **Print export** — TIFF/PDF, 300 DPI, LZW compression

Next article: **AI Auto-Tagging** — automatically tagging and classifying designs.
