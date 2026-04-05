---
id: 019d8b33-bb06-7006-c006-ee0600000006
title: "Bài 6: Object Detection & Pathology AI"
slug: bai-6-detection-pathology
description: >-
  YOLO/Faster R-CNN cho lesion detection. Whole Slide Image analysis. Digital pathology workflow. Cell counting, tissue classification.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Medical Imaging AI — Computer Vision cho Y tế"
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: "AI trong Y tế & Healthcare: Ứng dụng Thực chiến"
  slug: ai-trong-y-te-healthcare
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2405" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2405)"/>

  <!-- Decorations -->
  <g>
    <circle cx="907" cy="91" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="714" cy="198" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1021" cy="45" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="828" cy="152" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="635" cy="259" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="61" x2="1100" y2="141" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="91" x2="1050" y2="161" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="942.1769145362398,93 942.1769145362398,129 911,147 879.8230854637602,129 879.8230854637602,93.00000000000001 911,75" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI &amp; ML — Bài 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: Object Detection &amp; Pathology AI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI trong Y tế &amp; Healthcare: Ứng dụng Thực chiến</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Medical Imaging AI — Computer Vision cho Y tế</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> Từ bài này, bạn hiểu cách detect lesion trong ảnh y tế bằng YOLO và Faster R-CNN, phân tích toàn bộ tiêu bản mô bệnh học (Whole Slide Image), và đếm tế bào ung thư tự động.

---

## 1. Object Detection trong Y tế: Thách thức Đặc thù

Medical object detection khó hơn detection trong ảnh tự nhiên vì:

| Vấn đề | Thế giới thực | Y tế |
|--------|--------------|------|
| Object size | Xe hơi ~10% ảnh | Microaneurysm < 0.1% ảnh |
| Object shape | Rõ ràng, nhất quán | Lesion có thể rất bất quy tắc |
| Density | 1-10 objects/frame | Hàng trăm tế bào/patch |
| Imbalance | Nhẹ | 1 lesion trong 1000 normal patches |
| Ground truth | Nhanh | Radiologist mất 3-5 phút/CT |

---

## 2. YOLO cho Lesion Detection trong CT

```python
from ultralytics import YOLO
import cv2
import numpy as np

# YOLOv8 — state of the art cho medical object detection 2024
# Ưu điểm cho y tế:
# - Real-time inference (< 10ms/image trên GPU)
# - Tốt cho deployment trên clinical workstation
# - Anchor-free → handle lesion sizes đa dạng tốt hơn YOLOv5

class LesionDetector:
    """
    Detect pulmonary nodules (u phổi nhỏ) trong CT slices
    Sử dụng YOLOv8 fine-tuned trên LUNA16 dataset
    """
    def __init__(self, model_path: str, conf_threshold: float = 0.25):
        self.model = YOLO(model_path)
        self.conf_threshold = conf_threshold
        self.class_names = {0: "nodule", 1: "mass"}

    def detect_in_ct_volume(
        self,
        ct_volume: np.ndarray,  # (n_slices, H, W) HU values
        pixel_spacing: float = 0.7  # mm/pixel
    ) -> list[dict]:
        """
        Detect nodules trong toàn bộ CT volume
        Returns list of detections với 3D coordinates
        """
        all_detections = []

        for slice_idx, ct_slice in enumerate(ct_volume):
            # Apply lung window
            windowed = apply_windowing(ct_slice, window_center=-600, window_width=1500)
            image_uint8 = (windowed * 255).astype(np.uint8)
            image_rgb = cv2.cvtColor(image_uint8, cv2.COLOR_GRAY2RGB)

            # Inference
            results = self.model(image_rgb, conf=self.conf_threshold, verbose=False)

            for result in results:
                for box in result.boxes:
                    x1, y1, x2, y2 = box.xyxy[0].cpu().numpy()
                    conf = float(box.conf[0])
                    cls = int(box.cls[0])

                    # Convert pixels → mm
                    diameter_mm = ((x2-x1) + (y2-y1)) / 2 * pixel_spacing

                    all_detections.append({
                        "slice_idx": slice_idx,
                        "bbox_pixels": [x1, y1, x2, y2],
                        "confidence": conf,
                        "class": self.class_names.get(cls, "unknown"),
                        "diameter_mm": round(diameter_mm, 1),
                        # Lung-RADS: < 6mm = 1, 6-8mm = 2, > 8mm = 3/4
                        "lung_rads": self._lung_rads_category(diameter_mm)
                    })

        # Non-Maximum Suppression across slices (3D NMS)
        return self._3d_nms(all_detections)

    def _lung_rads_category(self, diameter_mm: float) -> str:
        """Lung-RADS classification theo ACR guideline"""
        if diameter_mm < 6:
            return "1 (Negative)"
        elif diameter_mm < 8:
            return "2 (Benign, annual follow-up)"
        elif diameter_mm < 15:
            return "3 (Probably Benign, 6-month CT)"
        else:
            return "4A (Suspicious, 3-month CT or PET)"

    def _3d_nms(self, detections: list, z_overlap_threshold: int = 3) -> list:
        """Merge detections từ adjacent slices (cùng một nodule)"""
        if not detections:
            return []
        # Group detections gần nhau về vị trí spatial và slice
        # ... (clustering logic)
        return detections
```

### 2.1. Training YOLO trên Medical Dataset

```python
# Dataset format cho YOLO: YOLO txt format
# Mỗi image cần file label .txt tương ứng
# Format: class_id x_center y_center width height (normalized 0-1)

import os
from pathlib import Path

def convert_dicom_annotations_to_yolo(
    annotations: list[dict],
    image_size: tuple = (512, 512)
) -> str:
    """
    Convert medical annotations (x1,y1,x2,y2 pixels) → YOLO format
    
    annotations: [{"class": 0, "x1": 100, "y1": 80, "x2": 150, "y2": 130}]
    """
    H, W = image_size
    lines = []

    for ann in annotations:
        x_center = ((ann["x1"] + ann["x2"]) / 2) / W
        y_center = ((ann["y1"] + ann["y2"]) / 2) / H
        width = (ann["x2"] - ann["x1"]) / W
        height = (ann["y2"] - ann["y1"]) / H
        lines.append(f"{ann['class']} {x_center:.6f} {y_center:.6f} {width:.6f} {height:.6f}")

    return "\n".join(lines)

# YAML config cho training
yolo_config = """
path: /data/luna16_yolo
train: images/train
val: images/val
test: images/test

nc: 2  # number of classes
names: ['nodule', 'mass']

# Training hyperparameters tối ưu cho medical imaging
# Data augmentation: conservative (như đã học trong bài 3)
"""

# Fine-tune từ YOLOv8 pretrained
model = YOLO('yolov8m.pt')  # medium size: balance accuracy/speed

results = model.train(
    data="luna16.yaml",
    epochs=100,
    imgsz=512,
    batch=16,
    lr0=0.001,
    lrf=0.01,
    momentum=0.937,
    weight_decay=0.0005,
    # Medical-specific augmentation settings
    fliplr=0.5,      # Horizontal flip OK
    flipud=0.0,      # NO vertical flip
    degrees=10.0,    # Small rotation
    translate=0.1,
    scale=0.1,
    # Disable augmentations NOT suitable for medical
    mosaic=0.0,      # Mosaic creates unrealistic images
    mixup=0.0,
)
```

---

## 3. Faster R-CNN cho High-Recall Detection

Khi cần **recall cao** (bỏ sót lesion là không chấp nhận được):

```python
import torchvision
from torchvision.models.detection import FasterRCNN
from torchvision.models.detection.rpn import AnchorGenerator

def create_medical_faster_rcnn(num_classes: int = 2) -> FasterRCNN:
    """
    Faster R-CNN với backbone ResNet-50 FPN
    Custom anchor sizes cho medical lesions (thường nhỏ hơn objects tự nhiên)
    """
    # Backbone: ResNet-50 với Feature Pyramid Network
    backbone = torchvision.models.detection.backbone_utils.resnet_fpn_backbone(
        'resnet50', pretrained=True
    )

    # Custom anchors cho medical lesions
    # Lesion sizes: 5-50mm → ảnh 512px, spacing 0.7mm → 7-71 pixels
    # Thêm nhiều small anchors hơn default
    anchor_generator = AnchorGenerator(
        sizes=((8,), (16,), (32,), (64,), (128,)),  # Nhỏ hơn default
        aspect_ratios=((0.5, 1.0, 2.0),) * 5
    )

    roi_pooler = torchvision.ops.MultiScaleRoIAlign(
        featmap_names=['0', '1', '2', '3'],
        output_size=7,
        sampling_ratio=2
    )

    model = FasterRCNN(
        backbone=backbone,
        num_classes=num_classes,
        rpn_anchor_generator=anchor_generator,
        box_roi_pool=roi_pooler,
        # Lower NMS threshold → giữ nhiều detections hơn (recall > precision)
        box_nms_thresh=0.3,
        # Lower score threshold cho RPN
        rpn_nms_thresh=0.5,
        # Minimum score để report detection
        box_score_thresh=0.1,
    )
    return model
```

---

## 4. Digital Pathology — Whole Slide Image Analysis

**Whole Slide Image (WSI)**: tiêu bản mô bệnh học được scan ở độ phân giải cao.

- Kích thước điển hình: **100,000 × 100,000 pixels** (40x magnification)
- File NỘI dung: 1-10 GB per slide
- Format: `.svs`, `.ndpi`, `.mrxs`, `.tiff`

```
Thách thức WSI:
1. Không thể load toàn bộ vào memory → phải tile
2. Multi-resolution: 40x, 20x, 10x, 5x, 2.5x
3. Staining variation: màu H&E khác nhau giữa bệnh viện
4. Artifacts: fold, blur, ink marks
```

### 4.1. Load và tile WSI

```python
import openslide  # Thư viện đọc WSI
import numpy as np
from PIL import Image

class WSIProcessor:
    """
    Pipeline xử lý Whole Slide Image cho AI analysis
    """
    def __init__(self, wsi_path: str, patch_size: int = 256, magnification: int = 20):
        self.slide = openslide.OpenSlide(wsi_path)
        self.patch_size = patch_size

        # Tìm level tương ứng với magnification mong muốn
        native_mag = float(self.slide.properties.get(
            openslide.PROPERTY_NAME_OBJECTIVE_POWER, 40
        ))
        downsample_factor = native_mag / magnification
        self.level = self.slide.get_best_level_for_downsample(downsample_factor)
        self.level_downsample = self.slide.level_downsamples[self.level]

    def get_tissue_mask(self, thumbnail_size: tuple = (1000, 1000)) -> np.ndarray:
        """
        Tạo tissue mask: phân biệt tissue vs background (trắng)
        Dùng để chỉ extract patches từ tissue regions, bỏ qua background
        """
        thumbnail = self.slide.get_thumbnail(thumbnail_size)
        thumbnail_np = np.array(thumbnail.convert('RGB'))

        # Convert sang HSV: tissue có saturation cao
        import cv2
        hsv = cv2.cvtColor(thumbnail_np, cv2.COLOR_RGB2HSV)

        # Threshold: S > 20 và V < 220 → tissue
        tissue_mask = (hsv[:, :, 1] > 20) & (hsv[:, :, 2] < 220)
        tissue_mask = tissue_mask.astype(np.uint8) * 255

        # Morphological operations để clean up
        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (10, 10))
        tissue_mask = cv2.morphologyEx(tissue_mask, cv2.MORPH_CLOSE, kernel)

        return tissue_mask

    def extract_patches(self, tissue_mask: np.ndarray, min_tissue_pct: float = 0.5):
        """
        Generator: yield patches từ tissue regions
        """
        W, H = self.slide.level_dimensions[self.level]
        thumb_H, thumb_W = tissue_mask.shape

        scale_x = W / thumb_W
        scale_y = H / thumb_H

        step = self.patch_size

        for y in range(0, H - self.patch_size, step):
            for x in range(0, W - self.patch_size, step):
                # Check tissue percentage trong patch (trên thumbnail)
                thumb_y = int(y / scale_y)
                thumb_x = int(x / scale_x)
                thumb_ph = max(1, int(self.patch_size / scale_y))
                thumb_pw = max(1, int(self.patch_size / scale_x))

                patch_mask = tissue_mask[
                    thumb_y:thumb_y+thumb_ph,
                    thumb_x:thumb_x+thumb_pw
                ]
                tissue_pct = patch_mask.mean() / 255

                if tissue_pct >= min_tissue_pct:
                    # Convert level coordinates → level 0 coordinates
                    x0 = int(x * self.level_downsample)
                    y0 = int(y * self.level_downsample)

                    patch = self.slide.read_region(
                        (x0, y0), self.level,
                        (self.patch_size, self.patch_size)
                    )
                    patch_rgb = np.array(patch.convert('RGB'))

                    yield patch_rgb, (x, y)

    def close(self):
        self.slide.close()
```

### 4.2. Stain Normalization (Macenko Method)

```python
import cv2
import numpy as np

def macenko_stain_normalization(
    source_image: np.ndarray,
    target_image: np.ndarray
) -> np.ndarray:
    """
    Macenko stain normalization: chuẩn hóa màu H&E về target reference.
    
    H&E staining:
    - H (Hematoxylin): nhuộm nhân tế bào → màu tím/xanh
    - E (Eosin): nhuộm cytoplasm → màu hồng
    
    Mỗi bệnh viện, mỗi ngày staining khác nhau → AI bị confused nếu không normalize
    """
    def get_stain_matrix(image: np.ndarray, beta: float = 0.15, alpha: float = 1):
        image = image.astype(np.float32) / 255

        # Optical density
        image[image == 0] = 1e-6
        OD = -np.log(image)

        # Reshape to (N, 3)
        OD_flat = OD.reshape(-1, 3)

        # Remove pixels with low optical density (background)
        OD_hat = OD_flat[(OD_flat > beta).any(axis=1)]

        # SVD để tìm stain directions
        _, _, V = np.linalg.svd(OD_hat, full_matrices=False)
        stain_matrix = V[:2, :]  # 2 stains: H and E

        return stain_matrix

    stain_src = get_stain_matrix(source_image)
    stain_tgt = get_stain_matrix(target_image)

    # Separate stains và renormalize
    source_od = -np.log((source_image.astype(np.float32) + 1) / 256)
    source_od_flat = source_od.reshape(-1, 3)

    concentrations = np.linalg.lstsq(stain_src.T, source_od_flat.T, rcond=None)[0].T

    # Reconstruct với target stain matrix
    normalized_od = concentrations @ stain_tgt
    normalized = np.exp(-normalized_od.reshape(source_image.shape)) * 255
    return np.clip(normalized, 0, 255).astype(np.uint8)
```

### 4.3. Multiple Instance Learning (MIL) cho WSI Classification

Vấn đề: WSI có label "ung thư" hay "bình thường", nhưng chỉ có **một phần nhỏ** patches thực sự chứa ung thư.

```python
import torch
import torch.nn as nn

class AttentionMIL(nn.Module):
    """
    Attention-based Multiple Instance Learning cho WSI classification
    
    Ý tưởng:
    1. Extract features từng patch riêng lẻ (không cần label từng patch)
    2. Dùng Attention để học patch nào quan trọng nhất
    3. Aggregate thành slide-level prediction
    
    "Bag" = toàn bộ WSI
    "Instance" = 1 patch
    Chỉ có bag-level label (ung thư/bình thường), không có instance label
    """
    def __init__(self, feature_dim: int = 512, hidden_dim: int = 256):
        super().__init__()

        # Feature extractor: pretrained ResNet (frozen)
        from torchvision.models import resnet50, ResNet50_Weights
        backbone = resnet50(weights=ResNet50_Weights.IMAGENET1K_V1)
        self.feature_extractor = nn.Sequential(*list(backbone.children())[:-1])
        for param in self.feature_extractor.parameters():
            param.requires_grad = False  # Freeze backbone

        # Attention mechanism
        self.attention = nn.Sequential(
            nn.Linear(feature_dim, hidden_dim),
            nn.Tanh(),
            nn.Linear(hidden_dim, 1)
        )

        # Classifier
        self.classifier = nn.Linear(feature_dim, 1)

    def forward(self, patches: torch.Tensor) -> tuple:
        """
        patches: (N_patches, 3, H, W)
        Returns: (bag_probability, attention_weights)
        """
        # Extract features cho từng patch
        with torch.no_grad():
            features = self.feature_extractor(patches)
        features = features.squeeze()  # (N_patches, feature_dim)

        # Attention weights
        A = self.attention(features)  # (N_patches, 1)
        A = torch.softmax(A, dim=0)   # Normalize

        # Aggregate: weighted sum
        z = (A * features).sum(dim=0, keepdim=True)  # (1, feature_dim)

        # Predict
        logit = self.classifier(z)
        prob = torch.sigmoid(logit)

        return prob.squeeze(), A.squeeze()  # (1,), (N_patches,)
```

---

## 5. Cell Counting với AI

```python
import torch
import torch.nn as nn

class CellCountingModel(nn.Module):
    """
    Density map approach cho cell counting:
    - Thay vì detect từng tế bào, predict density map
    - Tổng giá trị density map ≈ số lượng tế bào
    - Robust với overlapping cells (phổ biến trong bệnh lý)
    
    Dùng cho: đếm mitoses (nhân phân chia) trong ung thư vú
    - Ki-67 index: tỷ lệ tế bào đang phân chia
    - Quan trọng cho prognosis và treatment planning
    """
    def __init__(self):
        super().__init__()
        # Modified VGG16 cho density estimation
        from torchvision.models import vgg16, VGG16_Weights
        vgg = vgg16(weights=VGG16_Weights.IMAGENET1K_V1)
        features = list(vgg.features.children())

        self.frontend = nn.Sequential(*features[:23])  # Pool4

        self.backend = nn.Sequential(
            nn.Conv2d(512, 256, 3, padding=2, dilation=2),
            nn.ReLU(inplace=True),
            nn.Conv2d(256, 128, 3, padding=2, dilation=2),
            nn.ReLU(inplace=True),
            nn.Conv2d(128, 64, 3, padding=1),
            nn.ReLU(inplace=True),
        )

        self.output = nn.Conv2d(64, 1, 1)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        """
        Returns: density map (batch, 1, H/8, W/8)
        Count = density_map.sum() * normalization_factor
        """
        x = self.frontend(x)
        x = self.backend(x)
        return self.output(x)

def generate_density_map(
    cell_positions: list[tuple],  # [(x1,y1), (x2,y2), ...]
    image_size: tuple,
    sigma: float = 5.0
) -> np.ndarray:
    """
    Tạo density map từ point annotations (dot annotations)
    Mỗi tế bào = 1 Gaussian blob
    """
    from scipy.ndimage import gaussian_filter
    density = np.zeros(image_size, dtype=np.float32)

    for x, y in cell_positions:
        if 0 <= x < image_size[1] and 0 <= y < image_size[0]:
            density[int(y), int(x)] = 1.0

    # Smooth với Gaussian kernel
    density = gaussian_filter(density, sigma=sigma)
    return density
```

---

## 6. Tổng kết & Bài tập

Sau bài này:
- ✅ YOLO cho real-time lesion detection trong CT
- ✅ Faster R-CNN cho high-recall detection
- ✅ WSI pipeline: tissue masking, tiling, stain normalization
- ✅ MIL (Multiple Instance Learning) cho slide classification
- ✅ Cell counting với density maps

**Bài 7**: Rời medical imaging, sang **Clinical NLP** — phân tích hồ sơ bệnh án bằng BioBERT.

---

## Bài tập

1. FROC Analysis: Free-Response ROC là metric chuẩn cho nodule detection. Implement FROC curve và tính sensitivity ở 1/4/8 FP/scan. Tại sao FROC phù hợp hơn ROC cho detection tasks?

2. Download CAMELYON16 dataset (lymph node metastasis detection). Train một MIL model đơn giản. Target: AUC > 0.85 trên test set.

3. Implement Macenko normalization pipeline cho một bộ 50 WSI patches từ 5 bệnh viện khác nhau. Visualize màu sắc trước và sau normalization. Tính color statistics (mean, std của R/G/B channels).

## 2. Kiến trúc & Nguyên lý

### Core Architecture

```python
# Example implementation
import torch
import torch.nn as nn

class ExampleModel(nn.Module):
    def __init__(self, input_dim, output_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, 256),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(256, 128),
            nn.ReLU(),
            nn.Linear(128, output_dim),
        )
    
    def forward(self, x):
        return self.net(x)
```

---

## 3. Thực hành

### Setup

```bash
pip install torch transformers datasets
```

### Training Pipeline

```python
# Training loop
model = ExampleModel(input_dim=768, output_dim=10)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-4)
criterion = nn.CrossEntropyLoss()

for epoch in range(10):
    for batch in train_loader:
        optimizer.zero_grad()
        outputs = model(batch["input"])
        loss = criterion(outputs, batch["label"])
        loss.backward()
        optimizer.step()
```

---

## 4. Best Practices

| Aspect | Recommendation |
|--------|---------------|
| Data | Quality over quantity |
| Model | Start simple, scale up |
| Training | Monitor loss curves |
| Evaluation | Use appropriate metrics |

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| Architecture | Phù hợp với bài toán |
| Training | Careful hyperparameter tuning |
| Evaluation | Multiple metrics |
