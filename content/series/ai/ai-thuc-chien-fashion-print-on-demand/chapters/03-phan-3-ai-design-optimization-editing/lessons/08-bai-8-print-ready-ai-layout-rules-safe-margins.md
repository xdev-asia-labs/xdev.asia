---
id: 019d8b30-bb08-7008-c008-f0c4e8000008
title: 'Bài 8: Print-Ready AI — Layout Rules, Safe Margins & Garment-Aware Placement'
slug: bai-8-print-ready-ai-layout-rules-safe-margins
description: >-
  AI hiểu cấu trúc áo thun: front chest, back print, sleeve print.
  Tự động detect safe margins, tránh cổ áo và mép. ControlNet
  cho garment-aware design placement.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 3: AI Design Optimization & Editing"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Design đẹp trên màn hình nhưng không in được = vô nghĩa. Bài này giải quyết thách thức quan trọng nhất của POD: **đảm bảo design phù hợp với cấu trúc áo thun thực tế** — print zones, safe margins, và garment-aware placement.

---

## 1. Print Areas trên áo thun

### Bản đồ vùng in

```
         ┌─────────────────────┐
         │    NECK ZONE ❌     │
         │   (no print)       │
         ├─────────────────────┤
         │                     │
         │  ┌───────────────┐  │
         │  │  FRONT CHEST  │  │  ← Primary print area
         │  │  30cm × 35cm  │  │     (safe zone)
         │  └───────────────┘  │
         │                     │
         │  ┌───┐       ┌───┐  │
         │  │ L │       │ R │  │  ← Sleeve print
         │  │   │       │   │  │     10cm × 25cm
         │  └───┘       └───┘  │
         │                     │
         └─────────────────────┘
         │                     │
         │  ┌───────────────┐  │
         │  │  BACK PRINT   │  │  ← Back print area
         │  │  35cm × 45cm  │  │
         │  └───────────────┘  │
         └─────────────────────┘
```

### Print Zone Definitions

```python
from dataclasses import dataclass

@dataclass
class PrintZone:
    name: str
    width_cm: float
    height_cm: float
    offset_from_top_cm: float
    safe_margin_cm: float
    max_dpi: int = 300

PRINT_ZONES = {
    "front_chest": PrintZone(
        name="Front Chest",
        width_cm=30, height_cm=35,
        offset_from_top_cm=8,   # Dưới cổ 8cm
        safe_margin_cm=2,
    ),
    "full_front": PrintZone(
        name="Full Front",
        width_cm=38, height_cm=50,
        offset_from_top_cm=5,
        safe_margin_cm=3,
    ),
    "back_print": PrintZone(
        name="Back Print",
        width_cm=35, height_cm=45,
        offset_from_top_cm=10,
        safe_margin_cm=3,
    ),
    "left_chest": PrintZone(
        name="Left Chest (Pocket)",
        width_cm=10, height_cm=10,
        offset_from_top_cm=10,
        safe_margin_cm=1,
    ),
    "sleeve_left": PrintZone(
        name="Left Sleeve",
        width_cm=10, height_cm=25,
        offset_from_top_cm=3,
        safe_margin_cm=1,
    ),
}
```

---

## 2. Safe Margin Validator

```python
class SafeMarginValidator:
    """Kiểm tra design có nằm trong safe zone không"""

    def validate(
        self,
        design: Image.Image,
        zone: PrintZone,
        shirt_size: str = "M",
    ) -> ValidationResult:
        issues = []

        # 1. Check design không quá gần edges
        content_bbox = self._get_content_bounds(design)
        margin_top = content_bbox[1]
        margin_left = content_bbox[0]
        margin_right = design.width - content_bbox[2]
        margin_bottom = design.height - content_bbox[3]

        min_margin_px = self._cm_to_px(
            zone.safe_margin_cm, dpi=300
        )

        if margin_top < min_margin_px:
            issues.append({
                "type": "margin_top",
                "severity": "error",
                "message": f"Design quá gần cổ áo ({margin_top}px < {min_margin_px}px)",
                "auto_fix": True,
            })

        if margin_left < min_margin_px or margin_right < min_margin_px:
            issues.append({
                "type": "margin_side",
                "severity": "warning",
                "message": "Design có thể bị cắt ở mép áo",
                "auto_fix": True,
            })

        # 2. Check centering
        center_offset = self._check_center_alignment(
            design, content_bbox
        )
        if center_offset > 5:  # > 5% offset
            issues.append({
                "type": "off_center",
                "severity": "warning",
                "message": f"Design lệch tâm {center_offset}%",
                "auto_fix": True,
            })

        # 3. Check resolution
        design_dpi = self._calculate_effective_dpi(
            design, zone
        )
        if design_dpi < 150:
            issues.append({
                "type": "low_resolution",
                "severity": "error",
                "message": f"DPI quá thấp ({design_dpi}). Tối thiểu 150 DPI cho in",
                "auto_fix": True,  # Có thể upscale
            })
        elif design_dpi < 300:
            issues.append({
                "type": "medium_resolution",
                "severity": "info",
                "message": f"DPI {design_dpi} — đạt yêu cầu nhưng 300 DPI tối ưu hơn",
                "auto_fix": True,
            })

        return ValidationResult(
            is_valid=not any(i["severity"] == "error" for i in issues),
            issues=issues,
            effective_dpi=design_dpi,
        )

    def auto_fix(
        self, design: Image.Image, issues: list[dict]
    ) -> Image.Image:
        """Tự động fix các vấn đề layout"""
        fixed = design.copy()

        for issue in issues:
            if not issue.get("auto_fix"):
                continue

            if issue["type"] == "off_center":
                fixed = self._center_design(fixed)
            elif issue["type"] in ("margin_top", "margin_side"):
                fixed = self._add_margins(fixed)
            elif issue["type"] in ("low_resolution", "medium_resolution"):
                fixed = self._upscale(fixed, target_dpi=300)

        return fixed
```

---

## 3. Garment-Aware Placement với AI

```python
class GarmentAwarePlacer:
    """Đặt design lên áo thun đúng vị trí"""

    def __init__(self):
        # Segmentation model cho áo thun
        self.segmenter = self._load_garment_segmenter()

    def place_design_on_garment(
        self,
        design: Image.Image,
        garment_image: Image.Image,
        zone: str = "front_chest",
    ) -> Image.Image:
        """
        Composite design lên ảnh áo thun thật

        1. Segment vùng áo (loại background)
        2. Detect print zone trên áo
        3. Warp design theo perspective áo
        4. Blend tự nhiên
        """
        # Step 1: Segment garment
        garment_mask = self.segmenter.segment(garment_image)

        # Step 2: Find print zone on garment
        zone_bbox = self._detect_print_zone(
            garment_image, garment_mask, zone
        )

        # Step 3: Perspective transform
        warped_design = self._perspective_warp(
            design, zone_bbox
        )

        # Step 4: Blend
        result = self._alpha_blend(
            garment_image, warped_design, zone_bbox
        )

        return result

    def _perspective_warp(
        self,
        design: Image.Image,
        target_quad: list[tuple],
    ) -> Image.Image:
        """Warp design theo perspective của áo"""
        import cv2
        import numpy as np

        src_points = np.float32([
            [0, 0],
            [design.width, 0],
            [design.width, design.height],
            [0, design.height],
        ])
        dst_points = np.float32(target_quad)

        matrix = cv2.getPerspectiveTransform(src_points, dst_points)
        warped = cv2.warpPerspective(
            np.array(design),
            matrix,
            (design.width, design.height),
        )

        return Image.fromarray(warped)
```

---

## 4. Quality Gates cho Print

```python
class PrintQualityGate:
    """Tất cả design PHẢI pass quality gate trước khi cho phép order"""

    GATES = [
        ("resolution", "DPI >= 150"),
        ("color_space", "Không có màu ngoài gamut CMYK"),
        ("margins", "Safe margins đủ"),
        ("centering", "Design centered ± 5%"),
        ("file_size", "File < 50MB"),
        ("transparency", "Transparent background hoặc solid"),
    ]

    def check_all(self, design: Image.Image) -> QualityReport:
        results = {}
        for gate_name, description in self.GATES:
            checker = getattr(self, f"_check_{gate_name}")
            passed, detail = checker(design)
            results[gate_name] = {
                "passed": passed,
                "description": description,
                "detail": detail,
            }

        all_passed = all(r["passed"] for r in results.values())
        return QualityReport(
            passed=all_passed,
            gates=results,
        )
```

---

## Tổng kết

Print-Ready AI đảm bảo:

1. **Print zones** — hiểu chính xác các vùng in trên áo thun
2. **Safe margins** — auto-validate và auto-fix design vượt margins
3. **Garment-aware placement** — perspective warp, natural blending
4. **Quality gates** — DPI, color gamut, centering — tất cả phải pass

Bài tiếp theo: **Auto-Scaling Design** — resize thông minh khi user đổi size và form áo.
