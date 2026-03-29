---
id: 019c9619-ab08-7008-c108-ab0800000008
title: 'Bài 8: SAM (Segment Anything) — Zero-shot Segmentation'
slug: bai-8-sam-segment-anything
description: >-
  Meta SAM & SAM2: segment bất kỳ đối tượng nào mà không cần train.
  Prompt types: point, box, text. SAM + YOLO combo. Grounding DINO +
  SAM. Interactive segmentation tool.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 3: Segmentation & Modern CV"
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: "Computer Vision với Deep Learning: Từ CNN đến Vision Transformer"
  slug: computer-vision-deep-learning
---

## Giới thiệu

**SAM — Segment Anything Model** (Meta AI, 2023) là bước đột phá trong CV: segment **bất kỳ đối tượng nào** trong ảnh mà **không cần train**. Chỉ cần 1 click (point), 1 box, hoặc 1 câu text → SAM segment ngay lập tức.

> 🎯 **SAM** giống ChatGPT nhưng cho segmentation: zero-shot, general-purpose, hoạt động trên mọi loại ảnh.

---

## 1. SAM là gì?

### 1.1 Kiến trúc SAM

```
Input Image
    ↓
┌──────────────────┐
│ Image Encoder    │  ViT-H (Vision Transformer Huge)
│ (chạy 1 lần!)   │  → Image embedding
└──────────────────┘
    ↓
┌──────────────────┐     ┌──────────────┐
│ Prompt Encoder   │ ←── │ User Prompt  │
│                  │     │ (point/box/  │
│                  │     │  text/mask)  │
└──────────────────┘     └──────────────┘
    ↓
┌──────────────────┐
│ Mask Decoder     │  Lightweight decoder
│ (chạy cực nhanh) │  → 3 mask candidates + quality scores
└──────────────────┘
    ↓
Output: Segmentation Mask
```

### 1.2 SAM Models

| Model | Encoder | Params | Speed | Quality |
|-------|---------|--------|-------|---------|
| SAM ViT-B | ViT-Base | 91M | ⚡ Nhanh | ⭐⭐⭐ |
| SAM ViT-L | ViT-Large | 308M | 🔥 Vừa | ⭐⭐⭐⭐ |
| **SAM ViT-H** | ViT-Huge | **636M** | 🐌 Chậm | **⭐⭐⭐⭐⭐** |
| **SAM 2** | Hiera | **Nhẹ hơn** | **⚡ Nhanh hơn** | **⭐⭐⭐⭐⭐** |

---

## 2. Hands-on: SAM cơ bản

### 2.1 Cài đặt

```bash
pip install segment-anything
pip install opencv-python matplotlib
# Download model weights
wget https://dl.fbaipublicfiles.com/segment_anything/sam_vit_h_4b8939.pth
```

### 2.2 Point Prompt — Click để segment

```python
"""SAM: click 1 điểm → segment object"""
import numpy as np
import matplotlib.pyplot as plt
from segment_anything import sam_model_registry, SamPredictor
from PIL import Image

# Load SAM
sam = sam_model_registry["vit_h"](checkpoint="sam_vit_h_4b8939.pth")
sam.to(device="cuda")
predictor = SamPredictor(sam)

# Load image
image = np.array(Image.open("photo.jpg"))

# Set image (encode 1 lần → predict nhiều lần)
predictor.set_image(image)

# Point prompt: click vào object bạn muốn segment
input_point = np.array([[500, 375]])  # (x, y)
input_label = np.array([1])           # 1 = foreground, 0 = background

# Predict
masks, scores, logits = predictor.predict(
    point_coords=input_point,
    point_labels=input_label,
    multimask_output=True,  # Trả 3 masks (ambiguity)
)

# Visualize
fig, axes = plt.subplots(1, 3, figsize=(20, 6))
for i, (mask, score) in enumerate(zip(masks, scores)):
    axes[i].imshow(image)
    axes[i].imshow(mask, alpha=0.5, cmap="jet")
    axes[i].set_title(f"Mask {i+1} (score: {score:.3f})")
    axes[i].plot(input_point[0][0], input_point[0][1], 'r*', markersize=15)
    axes[i].axis("off")
plt.tight_layout()
plt.show()

# Chọn mask có score cao nhất
best_mask = masks[scores.argmax()]
```

### 2.3 Box Prompt — Vẽ box để segment

```python
"""SAM: vẽ bounding box → segment object trong box"""

# Box prompt: [x_min, y_min, x_max, y_max]
input_box = np.array([200, 100, 500, 400])

masks, scores, logits = predictor.predict(
    box=input_box,
    multimask_output=False,  # 1 mask khi dùng box
)

# Visualize
plt.figure(figsize=(10, 8))
plt.imshow(image)
plt.imshow(masks[0], alpha=0.5, cmap="jet")

# Vẽ box
import matplotlib.patches as patches
rect = patches.Rectangle(
    (input_box[0], input_box[1]),
    input_box[2]-input_box[0], input_box[3]-input_box[1],
    linewidth=2, edgecolor='green', facecolor='none'
)
plt.gca().add_patch(rect)
plt.title(f"Box Prompt (score: {scores[0]:.3f})")
plt.axis("off")
plt.show()
```

### 2.4 Multiple Points — Refine segmentation

```python
"""Nhiều points để refine: foreground + background points"""

# Foreground points (đối tượng cần segment)
fg_points = np.array([[500, 375], [520, 400], [480, 350]])
fg_labels = np.array([1, 1, 1])

# Background points (đối tượng KHÔNG cần)
bg_points = np.array([[100, 100], [700, 500]])
bg_labels = np.array([0, 0])

# Combine
all_points = np.vstack([fg_points, bg_points])
all_labels = np.concatenate([fg_labels, bg_labels])

masks, scores, _ = predictor.predict(
    point_coords=all_points,
    point_labels=all_labels,
    multimask_output=False,
)
```

### 2.5 Automatic Mask Generation — Segment mọi thứ

```python
"""SAM: tự động segment TẤT CẢ objects trong ảnh"""
from segment_anything import SamAutomaticMaskGenerator

mask_generator = SamAutomaticMaskGenerator(
    model=sam,
    points_per_side=32,          # Grid density
    pred_iou_thresh=0.88,        # Quality threshold
    stability_score_thresh=0.95, # Stability threshold
    min_mask_region_area=100,    # Min pixels
)

masks = mask_generator.generate(image)

print(f"Found {len(masks)} masks")

# Sort by area
masks = sorted(masks, key=lambda x: x['area'], reverse=True)

# Visualize
plt.figure(figsize=(15, 10))
plt.imshow(image)
for mask_data in masks:
    mask = mask_data['segmentation']
    color = np.random.random(3)
    overlay = np.zeros_like(image, dtype=np.float32)
    overlay[mask] = color
    plt.imshow(overlay, alpha=0.3)
plt.title(f"SAM Auto: {len(masks)} segments")
plt.axis("off")
plt.show()
```

---

## 3. SAM 2 — Nhanh hơn, hỗ trợ Video

### 3.1 SAM 2 Improvements

```
SAM 2 vs SAM:
✅ 6× nhanh hơn trên ảnh
✅ Hỗ trợ VIDEO (track objects across frames)
✅ Architecture nhẹ hơn (Hiera encoder)
✅ Memory attention cho video context
✅ streaming mode: xử lý video dài
```

```python
"""SAM 2 — ví dụ cơ bản"""
# pip install sam-2
from sam2.build_sam import build_sam2
from sam2.sam2_image_predictor import SAM2ImagePredictor

# Load model
sam2 = build_sam2("sam2_hiera_large.yaml", "sam2_hiera_large.pt")
predictor = SAM2ImagePredictor(sam2)

# Sử dụng tương tự SAM 1
predictor.set_image(image)
masks, scores, logits = predictor.predict(
    point_coords=np.array([[500, 375]]),
    point_labels=np.array([1]),
)
```

---

## 4. SAM + YOLO Combo

### 4.1 Ý tưởng: YOLO detect → SAM segment

```
YOLO: "Có 1 con mèo ở (100, 50, 300, 250)"  → Bounding Box
SAM:  "Segment chính xác con mèo trong box"   → Pixel Mask

→ Kết hợp = Instance Segmentation chất lượng cao!
```

```python
"""YOLO + SAM Pipeline"""
from ultralytics import YOLO
from segment_anything import sam_model_registry, SamPredictor
import numpy as np

# Load models
yolo = YOLO("yolo11n.pt")
sam = sam_model_registry["vit_h"](checkpoint="sam_vit_h_4b8939.pth")
sam.to("cuda")
predictor = SamPredictor(sam)

# Step 1: YOLO detect
image = np.array(Image.open("photo.jpg"))
yolo_results = yolo(image, conf=0.5)

# Step 2: SAM segment from YOLO boxes
predictor.set_image(image)

all_masks = []
for box in yolo_results[0].boxes:
    bbox = box.xyxy[0].cpu().numpy()  # [x1, y1, x2, y2]
    class_name = yolo_results[0].names[int(box.cls)]
    confidence = box.conf[0].item()

    # SAM segment with box prompt
    masks, scores, _ = predictor.predict(
        box=bbox,
        multimask_output=False,
    )

    all_masks.append({
        "mask": masks[0],
        "class": class_name,
        "confidence": confidence,
        "score": scores[0],
    })

print(f"Generated {len(all_masks)} precise masks from YOLO detections")
```

### 4.2 Grounding DINO + SAM

```python
"""Text → Detection → Segmentation"""
# Grounding DINO: "Find all cats in this image"
# → Bounding boxes
# SAM: Segment each box
# → Pixel-precise masks

# Sử dụng GroundingDINO + SAM = "Grounded SAM"
# pip install groundingdino-py

# Ví dụ: segment bất kỳ object nào bằng text prompt
# Input: image + "cat, dog, ball"
# Output: precise masks cho mỗi cat, dog, ball found
```

---

## 5. Ứng dụng SAM thực tế

```python
"""Ứng dụng 1: Background Removal"""
def remove_background(image_path, point):
    image = np.array(Image.open(image_path))
    predictor.set_image(image)

    masks, scores, _ = predictor.predict(
        point_coords=np.array([point]),
        point_labels=np.array([1]),
        multimask_output=False,
    )

    mask = masks[0]

    # Tạo ảnh RGBA (transparent background)
    rgba = np.zeros((*image.shape[:2], 4), dtype=np.uint8)
    rgba[mask] = np.concatenate([image[mask], np.full((mask.sum(), 1), 255, dtype=np.uint8)], axis=1)

    result = Image.fromarray(rgba)
    result.save("no_background.png")
    return result
```

```python
"""Ứng dụng 2: Interactive Annotation Tool"""
# Kết hợp SAM + UI framework (Gradio/Streamlit)
# → Tool label data tự động: click → mask → save

# Ứng dụng 3: Medical Image — click vào tổn thương → segment chính xác
# Ứng dụng 4: E-commerce — tách sản phẩm khỏi background
# Ứng dụng 5: Video editing — segment object → thay background
```

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **SAM** | Segment Anything — zero-shot, prompt-based |
| **Point Prompt** | Click 1+ điểm → segment |
| **Box Prompt** | Vẽ bounding box → segment |
| **Auto Generate** | Segment mọi object tự động |
| **SAM 2** | Nhanh 6×, hỗ trợ video |
| **YOLO + SAM** | YOLO detect (box) → SAM segment (mask) |

## Bài tập tổng hợp

1. **Point Prompt:** Dùng SAM segment 5 objects khác nhau trong 1 ảnh bằng point prompt.
2. **Auto Segment:** Chạy Automatic Mask Generation trên 3 ảnh. Bao nhiêu segments?
3. **YOLO + SAM:** Xây pipeline YOLO detect → SAM segment. Visualize with colored masks.
4. **Background Removal:** Dùng SAM tách object khỏi background, lưu ảnh PNG transparent.

> **Bài tiếp theo:** Image Generation & Stable Diffusion — tạo ảnh từ text với AI.
