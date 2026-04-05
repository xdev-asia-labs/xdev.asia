---
id: 019c9619-ab07-7007-c107-ab0700000007
title: 'Bài 7: Image Segmentation — Semantic, Instance & Panoptic'
slug: bai-7-image-segmentation
description: >-
  3 loại segmentation: semantic (phân loại pixel), instance (phân biệt
  từng đối tượng), panoptic (kết hợp). U-Net, Mask R-CNN. Hands-on
  với SegFormer. Ứng dụng: y tế, tự lái, bản đồ.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 3: Segmentation & Modern CV"
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: "Computer Vision với Deep Learning: Từ CNN đến Vision Transformer"
  slug: computer-vision-deep-learning
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4558" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4558)"/>

  <!-- Decorations -->
  <g>
    <circle cx="765" cy="285" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="930" cy="110" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1095" cy="195" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="760" cy="280" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="925" cy="105" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="95" x2="1100" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="125" x2="1050" y2="195" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1070.9807621135333,230 1070.9807621135333,260 1045,275 1019.0192378864668,260 1019.0192378864668,230 1045,215" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI &amp; ML — Bài 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 7: Image Segmentation — Semantic,</tspan>
      <tspan x="60" dy="42">Instance &amp; Panoptic</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Computer Vision với Deep Learning: Từ CNN đến Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Segmentation &amp; Modern CV</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Object Detection cho ta **bounding box** — hình chữ nhật bao quanh đối tượng. Nhưng nhiều ứng dụng cần **chính xác hơn**: y tế cần biết **đúng vùng** khối u, xe tự lái cần biết **đúng pixel** nào là đường, nào là vỉa hè. Đó là **Image Segmentation**.

> 🎯 **Segmentation** = phân loại **từng pixel** trong ảnh. Chi tiết hơn detection rất nhiều.

---

## 1. Ba loại Segmentation

### 1.1 So sánh

```
Input Image: 2 con mèo + 1 nền cỏ

Semantic Segmentation:    Tất cả pixels mèo → "cat" (KHÔNG phân biệt 2 con)
                          Tất cả pixels cỏ  → "grass"

Instance Segmentation:    Mèo 1 → "cat #1", Mèo 2 → "cat #2" (PHÂN BIỆT)
                          Cỏ → không xử lý (chỉ "things")

Panoptic Segmentation:    Mèo 1 → "cat #1", Mèo 2 → "cat #2"
                          Cỏ → "grass" (xử lý CẢ "things" lẫn "stuff")
```

| Loại | Phân biệt objects? | "Stuff" (background)? | Use case |
|------|-------------------|----------------------|----------|
| **Semantic** | ❌ | ✅ | Tự lái (road, sky), y tế |
| **Instance** | ✅ | ❌ | Robot, đếm objects |
| **Panoptic** | ✅ | ✅ | Scene understanding toàn diện |

### 1.2 Metrics cho Segmentation

```python
"""IoU (Intersection over Union) cho Segmentation"""
import numpy as np

def pixel_iou(pred_mask, gt_mask, class_id):
    """IoU cho 1 class cụ thể"""
    pred = (pred_mask == class_id)
    gt = (gt_mask == class_id)

    intersection = np.logical_and(pred, gt).sum()
    union = np.logical_or(pred, gt).sum()

    return intersection / union if union > 0 else 0

def mean_iou(pred_mask, gt_mask, num_classes):
    """Mean IoU: trung bình IoU tất cả classes"""
    ious = []
    for c in range(num_classes):
        iou = pixel_iou(pred_mask, gt_mask, c)
        ious.append(iou)
    return np.mean(ious)

# Ví dụ:
# mIoU = 0.75 → trung bình, model cover 75% diện tích đúng
```

---

## 2. Kiến trúc Segmentation

### 2.1 U-Net — King of Medical Image Segmentation

```
Encoder (downsampling)          Decoder (upsampling)
┌─────────────────┐            ┌─────────────────┐
│ Conv 3×3, 64    │────────────│ Conv 3×3, 64    │  ← Skip Connection
│ MaxPool 2×2     │            │ UpConv 2×2      │
├─────────────────┤            ├─────────────────┤
│ Conv 3×3, 128   │────────────│ Conv 3×3, 128   │  ← Skip Connection
│ MaxPool 2×2     │            │ UpConv 2×2      │
├─────────────────┤            ├─────────────────┤
│ Conv 3×3, 256   │────────────│ Conv 3×3, 256   │  ← Skip Connection
│ MaxPool 2×2     │            │ UpConv 2×2      │
├─────────────────┤            ├─────────────────┤
│     Bottleneck (512)         │                     
└─────────────────┘            └─────────────────┘
```

```python
"""U-Net implementation simplified"""
import torch
import torch.nn as nn

class UNet(nn.Module):
    def __init__(self, in_channels=3, num_classes=2):
        super().__init__()

        # Encoder
        self.enc1 = self._double_conv(in_channels, 64)
        self.enc2 = self._double_conv(64, 128)
        self.enc3 = self._double_conv(128, 256)

        self.pool = nn.MaxPool2d(2, 2)

        # Bottleneck
        self.bottleneck = self._double_conv(256, 512)

        # Decoder
        self.up3 = nn.ConvTranspose2d(512, 256, 2, stride=2)
        self.dec3 = self._double_conv(512, 256)  # 256 + 256 = 512 input
        self.up2 = nn.ConvTranspose2d(256, 128, 2, stride=2)
        self.dec2 = self._double_conv(256, 128)
        self.up1 = nn.ConvTranspose2d(128, 64, 2, stride=2)
        self.dec1 = self._double_conv(128, 64)

        # Output
        self.out = nn.Conv2d(64, num_classes, 1)

    def _double_conv(self, in_ch, out_ch):
        return nn.Sequential(
            nn.Conv2d(in_ch, out_ch, 3, padding=1),
            nn.BatchNorm2d(out_ch),
            nn.ReLU(inplace=True),
            nn.Conv2d(out_ch, out_ch, 3, padding=1),
            nn.BatchNorm2d(out_ch),
            nn.ReLU(inplace=True),
        )

    def forward(self, x):
        # Encoder
        e1 = self.enc1(x)
        e2 = self.enc2(self.pool(e1))
        e3 = self.enc3(self.pool(e2))

        # Bottleneck
        b = self.bottleneck(self.pool(e3))

        # Decoder + Skip Connections
        d3 = self.dec3(torch.cat([self.up3(b), e3], dim=1))
        d2 = self.dec2(torch.cat([self.up2(d3), e2], dim=1))
        d1 = self.dec1(torch.cat([self.up1(d2), e1], dim=1))

        return self.out(d1)

model = UNet(in_channels=3, num_classes=5)
x = torch.randn(1, 3, 256, 256)
print(f"Output shape: {model(x).shape}")  # (1, 5, 256, 256)
```

### 2.2 SegFormer — Transformer cho Segmentation

```python
"""SegFormer: model segmentation hiện đại dùng Transformer"""
from transformers import SegformerForSemanticSegmentation, SegformerImageProcessor
from PIL import Image
import torch

# Load pretrained SegFormer
processor = SegformerImageProcessor.from_pretrained(
    "nvidia/segformer-b2-finetuned-ade-512-512"
)
model = SegformerForSemanticSegmentation.from_pretrained(
    "nvidia/segformer-b2-finetuned-ade-512-512"
)

# Inference
image = Image.open("street_scene.jpg")
inputs = processor(images=image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

# Upscale to original size
logits = torch.nn.functional.interpolate(
    outputs.logits,
    size=image.size[::-1],  # (H, W)
    mode="bilinear",
    align_corners=False,
)

# Predicted mask
predicted_mask = logits.argmax(dim=1).squeeze().numpy()
print(f"Mask shape: {predicted_mask.shape}")  # (H, W)
print(f"Classes found: {set(predicted_mask.flatten())}")
```

### 2.3 YOLO Segmentation

```python
"""Instance Segmentation với YOLO"""
from ultralytics import YOLO

model = YOLO("yolo11n-seg.pt")  # Segmentation model

results = model("people_park.jpg")

for result in results:
    # Masks
    if result.masks is not None:
        masks = result.masks.data.cpu().numpy()  # (N, H, W)
        print(f"Found {len(masks)} instance masks")

        for i, (mask, box) in enumerate(zip(masks, result.boxes)):
            class_name = result.names[int(box.cls)]
            confidence = box.conf[0].item()
            mask_area = mask.sum()  # Pixels in mask
            print(f"  {class_name} ({confidence:.1%}): {mask_area:.0f} pixels")

    # Visualize
    result.show()
```

---

## 3. Hands-on: Medical Image Segmentation

```python
"""Semantic Segmentation cho ảnh y tế — ví dụ: segment tumor"""
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader
import cv2
import numpy as np

class MedicalDataset(Dataset):
    def __init__(self, image_paths, mask_paths, size=256):
        self.image_paths = image_paths
        self.mask_paths = mask_paths
        self.size = size

    def __len__(self):
        return len(self.image_paths)

    def __getitem__(self, idx):
        # Read image
        img = cv2.imread(self.image_paths[idx])
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = cv2.resize(img, (self.size, self.size))
        img = img.astype(np.float32) / 255.0
        img = torch.from_numpy(img).permute(2, 0, 1)  # (C, H, W)

        # Read mask
        mask = cv2.imread(self.mask_paths[idx], cv2.IMREAD_GRAYSCALE)
        mask = cv2.resize(mask, (self.size, self.size), interpolation=cv2.INTER_NEAREST)
        mask = torch.from_numpy(mask).long()

        return img, mask

# Training với Dice Loss (tốt cho medical segmentation)
class DiceLoss(nn.Module):
    def forward(self, pred, target, smooth=1e-6):
        pred = torch.softmax(pred, dim=1)
        target_one_hot = torch.nn.functional.one_hot(
            target, num_classes=pred.shape[1]
        ).permute(0, 3, 1, 2).float()

        intersection = (pred * target_one_hot).sum(dim=(2, 3))
        union = pred.sum(dim=(2, 3)) + target_one_hot.sum(dim=(2, 3))
        dice = (2 * intersection + smooth) / (union + smooth)

        return 1 - dice.mean()
```

---

## 4. Ứng dụng thực tế

```
🏥 Y tế:           Segment khối u, tế bào, cơ quan
🚗 Tự lái:         Segment đường, vỉa hè, biển báo, người
🗺️ Bản đồ:        Segment buildings, roads từ ảnh vệ tinh
🌾 Nông nghiệp:    Segment cây trồng, detect vùng bệnh
📱 Điện thoại:     Portrait mode (tách người khỏi nền)
🏭 Công nghiệp:    Kiểm tra bề mặt sản phẩm
```

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Semantic** | Phân loại mỗi pixel → class (không phân biệt instances) |
| **Instance** | Phân biệt từng đối tượng riêng lẻ |
| **Panoptic** | Kết hợp semantic + instance |
| **U-Net** | Encoder-Decoder + Skip connections (y tế) |
| **SegFormer** | Transformer-based, SOTA |
| **YOLO-Seg** | Instance segmentation real-time |
| **Dice Loss** | Loss phù hợp cho segmentation (class imbalance) |

## Bài tập tổng hợp

1. **SegFormer Demo:** Chạy SegFormer pretrained trên 5 ảnh đường phố. Visualize masks màu.
2. **YOLO-Seg:** Instance segmentation trên video ngắn. Đếm unique instances.
3. **U-Net Mini:** Train U-Net đơn giản trên dataset nhị phân (foreground/background).
4. **Mask Overlay:** Viết function overlay segmentation mask (bán trong suốt) lên ảnh gốc.

> **Bài tiếp theo:** SAM (Segment Anything) — segment bất kỳ đối tượng nào mà **không cần train**.
