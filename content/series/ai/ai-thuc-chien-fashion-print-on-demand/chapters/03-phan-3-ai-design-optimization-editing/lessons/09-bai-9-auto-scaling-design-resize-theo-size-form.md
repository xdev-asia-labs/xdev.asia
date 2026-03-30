---
id: 019d8b30-bb09-7009-c009-f0c4e8000009
title: 'Bài 9: Auto-Scaling Design — Resize thông minh theo Size & Form áo'
slug: bai-9-auto-scaling-design-resize-theo-size-form
description: >-
  Thuật toán auto-scale design khi đổi size (S→XL) và form
  (slim fit → oversize). Content-aware scaling giữ tỷ lệ design.
  Dynamic DPI adjustment theo print area.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: AI Design Optimization & Editing"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Khi user chọn áo size S rồi đổi sang XL, hoặc từ slim fit sang oversize — design phải **tự điều chỉnh**. Không phải scale đơn giản, mà phải hiểu context: design có text thì text phải vẫn đọc được, design full-front phải mở rộng theo, left-chest print phải giữ nguyên tỷ lệ nhỏ.

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

## Tổng kết

Auto-Scaling System:

1. **Garment specs** — data model chính xác cho từng size/form
2. **Scale ratio** — tính toán khác nhau cho từng print zone
3. **Content-aware** — giữ text readable, face proportions khi scale
4. **DPI management** — auto-upscale khi DPI không đủ cho print

Bài tiếp theo: **AI Editing Assistant** — chỉnh design bằng ngôn ngữ tự nhiên.
