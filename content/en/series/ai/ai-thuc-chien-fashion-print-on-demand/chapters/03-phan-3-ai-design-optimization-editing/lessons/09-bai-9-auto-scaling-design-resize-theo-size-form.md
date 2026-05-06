---
id: 019d8b30-bb09-7009-c009-f0c4e8000009
title: 'Lesson 9: Auto-Scaling Design — Smart Resize according to Shirt Size & Form'
slug: bai-9-auto-scaling-design-resize-theo-size-form
description: >-
  Auto-scale design algorithm when changing size (S→XL) and form (slim fit →
  oversize). Content-aware scaling keeps the design proportional. Dynamic DPI
  adjustment according to print area.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 'Part 3: AI Design Optimization & Editing'
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 'AI in Action: Building an AI Platform for Fashion & Print-on-Demand'
  slug: ai-thuc-chien-fashion-print-on-demand
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2347" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2347)"/>

  <!-- Decorations -->
  <g>
    <circle cx="840" cy="150" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1080" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="230" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="270" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="170" x2="1100" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="200" x2="1050" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="991.650635094611,157.5 991.650635094611,182.5 970,195 948.349364905389,182.5 948.349364905389,157.5 970,145" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 9: Auto-Scaling Design — Resize information</tspan>
      <tspan x="60" dy="42">Please follow Size & Form of shirt</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI in Action: Building an AI Platform for Fashion & Print-on-Demand</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: AI Design Optimization & Editing</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

When a user chooses a size S shirt and then changes it to XL, or from slim fit to oversize — the design must **self-adjust**. It's not a matter of simple scale, but you have to understand the context: if the design has text, the text must still be readable, the full-front design must expand accordingly, the left-chest print must maintain a small scale.

---

## 1. Size & Form Data Model

```python
@dataclass
class GarmentSpec:
    size: str              # XS, S, M, L, XL, 2XL, 3XL
    form: str              # slim, regular, oversize
    chest_width_cm: float  # Rộng ngực
    body_length_cm: float  # Dài thân áo

GARMENT_SPECS = {
    # Size → Form → Measurements
    ("S", "slim"):     GarmentSpec("S", "slim", 46, 68),
    ("S", "regular"):  GarmentSpec("S", "regular", 48, 70),
    ("M", "slim"):     GarmentSpec("M", "slim", 49, 71),
    ("M", "regular"):  GarmentSpec("M", "regular", 51, 72),
    ("M", "oversize"): GarmentSpec("M", "oversize", 56, 74),
    ("L", "regular"):  GarmentSpec("L", "regular", 54, 74),
    ("L", "oversize"): GarmentSpec("L", "oversize", 59, 76),
    ("XL", "regular"): GarmentSpec("XL", "regular", 57, 76),
    ("XL", "oversize"):GarmentSpec("XL", "oversize", 62, 78),
    ("2XL", "regular"):GarmentSpec("2XL", "regular", 60, 78),
    ("2XL", "oversize"):GarmentSpec("2XL", "oversize", 65, 80),
}
```

---

## 2. Scaling Engine

```python
class DesignScaler:
    """Auto-scale design theo size và form áo"""

    def scale_for_garment(
        self,
        design: Image.Image,
        print_zone: str,
        from_spec: GarmentSpec,
        to_spec: GarmentSpec,
    ) -> Image.Image:
        # Tính scale ratio
        ratio = self._calculate_scale_ratio(
            print_zone, from_spec, to_spec
        )

        if abs(ratio - 1.0) < 0.02:
            return design  # Không cần scale

        # Scale với anti-aliasing
        new_width = int(design.width * ratio)
        new_height = int(design.height * ratio)

        scaled = design.resize(
            (new_width, new_height),
            Image.Resampling.LANCZOS
        )

        # Verify quality after scaling
        if ratio > 1.3:  # Scale lên > 30%
            scaled = self._upscale_ai(scaled)  # Real-ESRGAN

        return scaled

    def _calculate_scale_ratio(
        self,
        print_zone: str,
        from_spec: GarmentSpec,
        to_spec: GarmentSpec,
    ) -> float:
        if print_zone == "left_chest":
            # Left chest: giữ nguyên kích thước tuyệt đối
            return 1.0

        elif print_zone == "front_chest":
            # Front chest: scale theo tỷ lệ ngực
            return to_spec.chest_width_cm / from_spec.chest_width_cm

        elif print_zone == "full_front":
            # Full front: scale theo cả width VÀ height
            width_ratio = to_spec.chest_width_cm / from_spec.chest_width_cm
            height_ratio = to_spec.body_length_cm / from_spec.body_length_cm
            return (width_ratio + height_ratio) / 2

        elif print_zone == "back_print":
            return to_spec.chest_width_cm / from_spec.chest_width_cm

        return 1.0
```

---

## 3. Content-Aware Scaling

```python
class ContentAwareScaler:
    """Scale thông minh — giữ text readable, giữ tỷ lệ quan trọng"""

    def smart_scale(
        self,
        design: Image.Image,
        scale_ratio: float,
    ) -> Image.Image:
        # Detect content type
        has_text = self._detect_text(design)
        has_faces = self._detect_faces(design)

        if has_text and scale_ratio < 0.7:
            # Text sẽ quá nhỏ → cảnh báo
            return self._scale_with_text_preservation(
                design, scale_ratio
            )

        if has_faces and scale_ratio != 1.0:
            # Faces cần giữ tỷ lệ chính xác
            return self._scale_face_aware(design, scale_ratio)

        # Standard scaling
        return self._standard_scale(design, scale_ratio)

    def _scale_with_text_preservation(
        self,
        design: Image.Image,
        ratio: float,
    ) -> Image.Image:
        """
        Khi scale nhỏ lại, text có thể không đọc được.
        Strategy: scale graphics nhưng giữ text size minimum.
        """
        # Separate text layer và graphics layer
        text_mask = self._segment_text(design)
        graphics = self._remove_text(design, text_mask)

        # Scale graphics theo ratio
        scaled_graphics = graphics.resize(
            (int(graphics.width * ratio),
             int(graphics.height * ratio)),
            Image.Resampling.LANCZOS,
        )

        # Text: scale nhưng enforce minimum size
        min_text_ratio = max(ratio, 0.8)
        scaled_text = self._scale_text_layer(
            design, text_mask, min_text_ratio
        )

        # Composite
        return self._composite(scaled_graphics, scaled_text)
```

---

## 4. DPI Management

```python
class DPIManager:
    """Quản lý DPI khi scale design"""

    MIN_PRINT_DPI = 150
    OPTIMAL_PRINT_DPI = 300

    def calculate_effective_dpi(
        self,
        design: Image.Image,
        print_zone: PrintZone,
    ) -> float:
        """Tính DPI thực tế khi in"""
        # DPI = pixels / inches
        print_width_inches = print_zone.width_cm / 2.54
        effective_dpi = design.width / print_width_inches
        return round(effective_dpi, 1)

    def needs_upscale(
        self,
        design: Image.Image,
        print_zone: PrintZone,
    ) -> bool:
        dpi = self.calculate_effective_dpi(design, print_zone)
        return dpi < self.MIN_PRINT_DPI

    def upscale_for_print(
        self,
        design: Image.Image,
        target_dpi: int = 300,
        print_zone: PrintZone = None,
    ) -> Image.Image:
        """Upscale design để đạt target DPI"""
        current_dpi = self.calculate_effective_dpi(design, print_zone)
        if current_dpi >= target_dpi:
            return design

        scale = target_dpi / current_dpi

        if scale <= 2.0:
            # Lanczos đủ tốt cho scale <= 2x
            return design.resize(
                (int(design.width * scale),
                 int(design.height * scale)),
                Image.Resampling.LANCZOS,
            )
        else:
            # Cần AI upscaling (Real-ESRGAN)
            return self._ai_upscale(design, scale)
```

---

## Summary

Auto-Scaling System:

1. **Garment specs** — accurate model data for each size/form
2. **Scale ratio** — different calculation for each print zone
3. **Content-aware** — keep text readable, face proportions when scaling
4. **DPI management** — auto-upscale when DPI is not enough for printing

Next article: **AI Editing Assistant** — edit design using natural language.
