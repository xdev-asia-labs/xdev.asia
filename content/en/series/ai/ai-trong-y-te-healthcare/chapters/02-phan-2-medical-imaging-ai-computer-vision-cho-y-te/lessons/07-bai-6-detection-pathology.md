---
id: 019d8b33-bb06-7006-c006-ee0600000006
title: 'Lesson 6: Object Detection & Pathology AI'
slug: bai-6-detection-pathology
description: >-
  YOLO/Faster R-CNN for lesion detection. Whole Slide Image analysis. Digital
  pathology workflow. Cell counting, tissue classification.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 2: Medical Imaging AI — Computer Vision for Healthcare'
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: 'AI in Health & Healthcare: Real Battle Applications'
  slug: ai-trong-y-te-healthcare
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI & ML — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: Object Detection & Pathology AI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI in Health & Healthcare: Real Battle Applications</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Medical Imaging AI — Computer Vision for Healthcare</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> From this article, you will understand how to detect lesions in medical images using YOLO and Faster R-CNN, analyze the entire histopathological specimen (Whole Slide Image), and count cancer cells automatically.

---

## 1. Object Detection in Healthcare: Specific Challenges

Medical object detection is more difficult than detection in natural images because:

| Problem | Real World | Health |
|--------|--------------|-------|
| Object size | Car ~10% of photos | Microaneurysm < 0.1% photo |
| Object shapes | Clear, consistent | Lesion can be very irregular |
| Density | 1-10 objects/frame | Hundreds of cells/patch |
| Imbalance | Light | 1 lesion in 1000 normal patches |
| Ground truth | Fast | Radiologist takes 3-5 minutes/CT |

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
        Detect nodules in the entire CT volume
        Returns list of detections with 3D coordinates
        """
        all_detections = []

        for slice_idx, ct_slice in enumerate(ct_volume):
            # Apply lung window
            windowed = apply_windowing(ct_slice, window_center=-600, window_width=1500)
            image_uint8 = (windowed * 255).astype(np.uint8)
            image_rgb = cv2.cvtColor(image_uint8, cv2.COLOR_GRAY2RGB)

            #Inference
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
        """Lung-RADS classification according to ACR guideline"""
        if diameter_mm < 6:
            return "1 (Negative)"
        elif diameter_mm < 8:
            return "2 (Benign, annual follow-up)"
        elif diameter_mm < 15:
            return "3 (Probably Benign, 6-month CT)"
        else:
            return "4A (Suspicious, 3-month CT or PET)"

    def _3d_nms(self, detections: list, z_overlap_threshold: int = 3) -> list:
        """Merge detections from adjacent slices (same node)"""
        if not detects:
            return []
        # Group detections are close to each other in terms of spatial and slice positions
        # ... (clustering logic)
        return detections
```

### 2.1. Training YOLO on Medical Dataset

```python
# Dataset format for YOLO: YOLO txt format
# Each image needs a corresponding label .txt file
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

# YAML config for training
yolo_config = """
path: /data/luna16_yolo
train: images/train
val: images/val
test: images/test

nc: 2 # number of classes
names: ['nodule', 'mass']

# Training hyperparameters optimized for medical imaging
# Data augmentation: conservative (as learned in lesson 3)
"""

# Fine-tune from YOLOv8 pretrained
model = YOLO('yolov8m.pt') # medium size: balance accuracy/speed

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
    fliplr=0.5, # Horizontal flip OK
    flipud=0.0, # NO vertical flip
    degrees=10.0, # Small rotation
    translate=0.1,
    scale=0.1,
    # Disable augmentations NOT suitable for medical
    mosaic=0.0, # Mosaic creates unrealistic images
    mixup=0.0,
)
```

---

## 3. Faster R-CNN cho High-Recall Detection

When **high recall** is needed (missing a lesion is unacceptable):

```python
import torchvision
from torchvision.models.detection import FasterRCNN
from torchvision.models.detection.rpn import AnchorGenerator

def create_medical_faster_rcnn(num_classes: int = 2) -> FasterRCNN:
    """
    Faster R-CNN with ResNet-50 FPN backbone
    Custom anchor sizes for medical lesions (usually smaller than natural objects)
    """
    # Backbone: ResNet-50 with Feature Pyramid Network
    backbone = torchvision.models.detection.backbone_utils.resnet_fpn_backbone(
        'resnet50', pretrained=True
    )

    # Custom anchors for medical lesions
    # Lesion sizes: 5-50mm → image 512px, spacing 0.7mm → 7-71 pixels
    # Add more small anchors than default
    anchor_generator = AnchorGenerator(
        sizes=((8,), (16,), (32,), (64,), (128,)), # Smaller than default
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
        # Lower NMS threshold → keep more detections (recall > precision)
        box_nms_thresh=0.3,
        # Lower score threshold for RPN
        rpn_nms_thresh=0.5,
        # Minimum score to report detection
        box_score_thresh=0.1,
    )
    return model
```

---

## 4. Digital Pathology — Whole Slide Image Analysis

**Whole Slide Image (WSI)**: histopathological specimen scanned at high resolution.

- Typical size: **100,000 × 100,000 pixels** (40x magnification)
- File Content: 1-10 GB per slide
- Format: `.svs`, `.ndpi`, `.mrxs`, `.tiff`

```
WSI Challenge:
1. Cannot load the entire thing into memory → right tile
2. Multi-resolution: 40x, 20x, 10x, 5x, 2.5x
3. Staining variation: H&E color varies between hospitals
4. Artifacts: fold, blur, ink marks
```

### 4.1. Load and tile WSI

```python
import openslide # WSI reading library
import numpy as np
from PIL import Image

class WSIProcessor:
    """
    Pipeline processes Whole Slide Image for AI analysis
    """
    def __init__(self, wsi_path: str, patch_size: int = 256, magnification: int = 20):
        self.slide = openslide.OpenSlide(wsi_path)
        self.patch_size = patch_size

        # Find the level corresponding to the desired magnification
        native_mag = float(self.slide.properties.get(
            openslide.PROPERTY_NAME_OBJECTIVE_POWER, 40
        ))
        downsample_factor = native_mag / magnification
        self.level = self.slide.get_best_level_for_downsample(downsample_factor)
        self.level_downsample = self.slide.level_downsamples[self.level]

    def get_tissue_mask(self, thumbnail_size: tuple = (1000, 1000)) -> np.ndarray:
        """
        Create tissue mask: distinguish tissue vs background (white)
        Used to refer to extract patches from tissue regions, ignoring background
        """
        thumbnail = self.slide.get_thumbnail(thumbnail_size)
        thumbnail_np = np.array(thumbnail.convert('RGB'))

        # Convert to HSV: tissue has high saturation
        import cv2
        hsv = cv2.cvtColor(thumbnail_np, cv2.COLOR_RGB2HSV)

        # Threshold: S > 20 and V < 220 → tissue
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
    Macenko stain normalization: normalize H&E color to target reference.
    
    H&E staining:
    - H (Hematoxylin): stains cell nuclei → purple/blue
    - E (Eosin): cytoplasm staining → pink
    
    Each hospital, each day the staining is different → AI gets confused if it doesn't normalize
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

        # SVD to find stain directions
        _, _, V = np.linalg.svd(OD_hat, full_matrices=False)
        stain_matrix = V[:2, :] # 2 stains: H and E

        return stain_matrix

    stain_src = get_stain_matrix(source_image)
    stain_tgt = get_stain_matrix(target_image)

    # Separate stains and renormalize
    source_od = -np.log((source_image.astype(np.float32) + 1) / 256)
    source_od_flat = source_od.reshape(-1, 3)

    concentrated = np.linalg.lstsq(stain_src.T, source_od_flat.T, rcond=None)[0].T

    # Reconstruct with target stain matrix
    normalized_od = concentrations @ stain_tgt
    normalized = np.exp(-normalized_od.reshape(source_image.shape)) * 255
    return np.clip(normalized, 0, 255).astype(np.uint8)
```

### 4.3. Multiple Instance Learning (MIL) cho WSI Classification

Problem: WSI has labels like "cancer" or "normal", but only a **small portion** of patches actually contain cancer.

```python
import torch
import torch.nn as nn

class AttentionMIL(nn.Module):
    """
    Attention-based Multiple Instance Learning for WSI classification
    
    Idea:
    1. Extract features of each individual patch (no need to label each patch)
    2. Use Attention to learn which patches are most important
    3. Aggregate into slide-level prediction
    
    "Bag" = entire WSI
    "Instance" = 1 patch
    Only bag-level labels (cancer/normal), no instance labels
    """
    def __init__(self, feature_dim: int = 512, hidden_dim: int = 256):
        super().__init__()

        # Feature extractor: pretrained ResNet (frozen)
        from torchvision.models import resnet50, ResNet50_Weights
        backbone = resnet50(weights=ResNet50_Weights.IMAGENET1K_V1)
        self.feature_extractor = nn.Sequential(*list(backbone.children())[:-1])
        for param in self.feature_extractor.parameters():
            param.requires_grad = False # Freeze backbone

        # Attention mechanism
        self.attention = nn.Sequential(
            nn.Linear(feature_dim, hidden_dim),
            nn.Tanh(),
            nn.Linear(hidden_dim, 1)
        )

        #Classifier
        self.classifier = nn.Linear(feature_dim, 1)

    def forward(self, patches: torch.Tensor) -> tuple:
        """
        patches: (N_patches, 3, H, W)
        Returns: (bag_probability, attention_weights)
        """
        # Extract features for each patch
        with torch.no_grad():
            features = self.feature_extractor(patches)
        features = features.squeeze() # (N_patches, feature_dim)

        # Attention weights
        A = self.attention(features) # (N_patches, 1)
        A = torch.softmax(A, dim=0) # Normalize

        # Aggregate: weighted sum
        z = (A * features).sum(dim=0, keepdim=True) # (1, feature_dim)

        # Predict
        logit = self.classifier(z)
        prob = torch.sigmoid(logit)

        return prob.squeeze(), A.squeeze() # (1,), (N_patches,)
```

---

## 5. Cell Counting with AI

```python
import torch
import torch.nn as nn

class CellCountingModel(nn.Module):
    """
    Density map approach for cell counting:
    - Instead of detecting each cell, predict density map
    - Total density map value ≈ number of cells
    - Robust with overlapping cells (common in pathology)
    
    Used for: counting mitoses (nuclear divisions) in breast cancer
    - Ki-67 index: percentage of dividing cells
    - Important for prognosis and treatment planning
    """
    def __init__(self):
        super().__init__()
        # Modified VGG16 for density estimation
        from torchvision.models import vgg16, VGG16_Weights
        vgg = vgg16(weights=VGG16_Weights.IMAGENET1K_V1)
        features = list(vgg.features.children())

        self.frontend = nn.Sequential(*features[:23]) #Pool4

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
    cell_positions: list[tuple], # [(x1,y1), (x2,y2), ...]
    image_size: tuple,
    sigma: float = 5.0
) -> np.ndarray:
    """
    Create density map from point annotations (dot annotations)
    Each cell = 1 Gaussian blob
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

## 6. Summary & Exercises

After this post:
- ✅ YOLO cho real-time lesion detection trong CT
- ✅ Faster R-CNN cho high-recall detection
- ✅ WSI pipeline: tissue masking, tiling, stain normalization
- ✅ MIL (Multiple Instance Learning) cho slide classification
- ✅ Cell counting with density maps

**Lesson 7**: Leaving medical imaging, moving to **Clinical NLP** — analyzing medical records using BioBERT.

---

## Exercise

1. FROC Analysis: Free-Response ROC is the standard metric for node detection. Implement FROC curve and calculate sensitivity at 1/4/8 FP/scan. Why is FROC more suitable than ROC for detection tasks?

2. Download CAMELYON16 dataset (lymph node metastasis detection). Train a simple MIL model. Target: AUC > 0.85 on test set.

3. Implement Macenko normalization pipeline for a set of 50 WSI patches from 5 different hospitals. Visualize colors before and after normalization. Calculate color statistics (mean, std of R/G/B channels).

## 2. Architecture & Principles

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

## 3. Practice

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

## Summary

| Concepts | Key Takeaway |
|--------|-------------|
| Architecture | Suitable for the problem |
| Training | Careful hyperparameter tuning |
| Evaluation | Multiple metrics |
