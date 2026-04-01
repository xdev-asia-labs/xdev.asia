---
id: 019d8b33-bb05-7005-c005-ee0500000005
title: "Bài 5: Medical Image Segmentation — U-Net & Variants"
slug: bai-5-unet-segmentation
description: >-
  U-Net architecture. Attention U-Net, TransUNet. Organ/tumor segmentation. Dice loss, IoU metrics. 3D medical image segmentation.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: Medical Imaging AI — Computer Vision cho Y tế"
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: "AI trong Y tế & Healthcare: Ứng dụng Thực chiến"
  slug: ai-trong-y-te-healthcare
---

> Phát hiện bệnh mới là bước đầu. Bác sĩ xạ trị cần biết **chính xác ranh giới** của khối u để phóng tia. Phẫu thuật viên cần biết khối u **dính vào mạch máu nào**. Đây là bài toán segmentation.

---

## 1. Segmentation vs Classification vs Detection

```
Classification:  "Có khối u không?"                   → 1 label
Detection:       "Khối u ở đâu trong ảnh?"             → Bounding box
Segmentation:    "Chính xác pixel nào là khối u?"      → Binary/Multi-class mask

Semantic Segmentation:  Tất cả pixel thuộc class nào?
Instance Segmentation:  Tách riêng từng object (khối u #1, khối u #2)
Panoptic Segmentation:  Combine cả hai
```

Trong medical imaging, **semantic segmentation** là phổ biến nhất vì:
- Organ segmentation: "Đây là gan, đây là lách"
- Lesion segmentation: "Đây là khối u" (không cần tách instance)
- Surgical planning cần exact boundaries

---

## 2. U-Net — Kiến trúc Gold Standard

U-Net (Ronneberger et al., MICCAI 2015) — được cite hơn **25,000 lần** — thiết kế đặc biệt cho medical image segmentation với dataset nhỏ.

### 2.1. Ý tưởng cốt lõi: Encoder-Decoder + Skip Connections

```
Encoder (Contracting path):
  Học được "what" — context, semantics, "đây là khối u"
  Spatial resolution giảm dần (32 → 16 → 8 → 4 → 2)

Decoder (Expansive path):
  Học được "where" — exact location, boundaries
  Spatial resolution tăng dần (2 → 4 → 8 → 16 → 32)

Skip Connections (U-shape):
  Truyền thông tin high-resolution từ encoder sang decoder
  → Decoder biết BOTH "đây là khối u" VÀ "ở pixel chính xác này"
```

### 2.2. Implementation đầy đủ

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class DoubleConv(nn.Module):
    """(Conv → BN → ReLU) × 2 — building block của U-Net"""
    def __init__(self, in_channels: int, out_channels: int, mid_channels: int = None):
        super().__init__()
        if mid_channels is None:
            mid_channels = out_channels

        self.double_conv = nn.Sequential(
            nn.Conv2d(in_channels, mid_channels, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(mid_channels),
            nn.ReLU(inplace=True),
            nn.Conv2d(mid_channels, out_channels, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(out_channels),
            nn.ReLU(inplace=True),
        )

    def forward(self, x):
        return self.double_conv(x)


class Down(nn.Module):
    """Maxpool → DoubleConv (Encoder step)"""
    def __init__(self, in_channels: int, out_channels: int):
        super().__init__()
        self.maxpool_conv = nn.Sequential(
            nn.MaxPool2d(2),
            DoubleConv(in_channels, out_channels)
        )

    def forward(self, x):
        return self.maxpool_conv(x)


class Up(nn.Module):
    """Upsample + DoubleConv (Decoder step) với skip connection"""
    def __init__(self, in_channels: int, out_channels: int, bilinear: bool = True):
        super().__init__()
        if bilinear:
            self.up = nn.Upsample(scale_factor=2, mode='bilinear', align_corners=True)
            self.conv = DoubleConv(in_channels, out_channels, in_channels // 2)
        else:
            self.up = nn.ConvTranspose2d(in_channels, in_channels // 2, kernel_size=2, stride=2)
            self.conv = DoubleConv(in_channels, out_channels)

    def forward(self, x1, x2):
        """
        x1: feature map từ previous decoder layer (upsampled)
        x2: skip connection từ encoder (same level)
        """
        x1 = self.up(x1)

        # Pad x1 nếu size khác x2 (do odd input dims)
        diff_h = x2.size(2) - x1.size(2)
        diff_w = x2.size(3) - x1.size(3)
        x1 = F.pad(x1, [diff_w // 2, diff_w - diff_w // 2,
                         diff_h // 2, diff_h - diff_h // 2])

        # Concatenate theo channel dimension
        x = torch.cat([x2, x1], dim=1)
        return self.conv(x)


class UNet(nn.Module):
    def __init__(
        self,
        in_channels: int = 1,      # Grayscale medical images
        num_classes: int = 1,      # Binary: tumor vs background
        features: list = [64, 128, 256, 512],
        bilinear: bool = True
    ):
        super().__init__()
        self.inc = DoubleConv(in_channels, features[0])

        # Encoder
        self.down1 = Down(features[0], features[1])
        self.down2 = Down(features[1], features[2])
        self.down3 = Down(features[2], features[3])
        factor = 2 if bilinear else 1
        self.down4 = Down(features[3], features[3] * 2 // factor)

        # Decoder
        self.up1 = Up(features[3] * 2, features[3] // factor, bilinear)
        self.up2 = Up(features[3], features[2] // factor, bilinear)
        self.up3 = Up(features[2], features[1] // factor, bilinear)
        self.up4 = Up(features[1], features[0], bilinear)

        # Output
        self.outc = nn.Conv2d(features[0], num_classes, kernel_size=1)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # Encoder
        x1 = self.inc(x)     # (B, 64, H, W)
        x2 = self.down1(x1)  # (B, 128, H/2, W/2)
        x3 = self.down2(x2)  # (B, 256, H/4, W/4)
        x4 = self.down3(x3)  # (B, 512, H/8, W/8)
        x5 = self.down4(x4)  # (B, 1024, H/16, W/16)  ← Bottleneck

        # Decoder với skip connections
        x = self.up1(x5, x4) # (B, 512, H/8, W/8)
        x = self.up2(x, x3)  # (B, 256, H/4, W/4)
        x = self.up3(x, x2)  # (B, 128, H/2, W/2)
        x = self.up4(x, x1)  # (B, 64, H, W)

        logits = self.outc(x) # (B, num_classes, H, W)
        return logits         # Không sigmoid — dùng trong loss function
```

---

## 3. Attention U-Net — Tập trung vào vùng liên quan

Vấn đề của U-Net chuẩn: skip connections truyền **tất cả** features, kể cả background noise. **Attention Gate** học cách lọc — chỉ giữ features quan trọng cho segmentation task:

```python
class AttentionGate(nn.Module):
    """
    Attention Gate: học trọng số cho mỗi pixel trong skip connection
    Pixel nào "liên quan" đến task segmentation sẽ được khuếch đại
    """
    def __init__(self, F_g: int, F_l: int, F_int: int):
        super().__init__()
        # F_g: channels từ decoder (gating signal)
        # F_l: channels từ encoder (skip connection)
        # F_int: intermediate channels

        self.W_g = nn.Sequential(
            nn.Conv2d(F_g, F_int, kernel_size=1),
            nn.BatchNorm2d(F_int)
        )
        self.W_x = nn.Sequential(
            nn.Conv2d(F_l, F_int, kernel_size=1),
            nn.BatchNorm2d(F_int)
        )
        self.psi = nn.Sequential(
            nn.Conv2d(F_int, 1, kernel_size=1),
            nn.BatchNorm2d(1),
            nn.Sigmoid()  # Attention coefficient [0, 1]
        )
        self.relu = nn.ReLU(inplace=True)

    def forward(self, g: torch.Tensor, x: torch.Tensor) -> torch.Tensor:
        """
        g: gating signal từ decoder (coarser resolution)
        x: feature map từ encoder (skip connection)
        """
        # Upsample g lên cùng size với x
        g_up = F.interpolate(g, size=x.shape[2:], mode='bilinear', align_corners=True)

        g1 = self.W_g(g_up)
        x1 = self.W_x(x)

        # Compute attention coefficient
        psi = self.relu(g1 + x1)
        psi = self.psi(psi)  # (B, 1, H, W)

        # Apply attention
        return x * psi  # Pixel-wise scaling của skip connection
```

---

## 4. Loss Functions cho Segmentation

Trong segmentation, accuracy không đủ vì class imbalance. Khối u nhỏ trong ảnh lớn → 99% background pixels!

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class DiceLoss(nn.Module):
    """
    Dice Loss = 1 - Dice Coefficient
    Dice = 2|X∩Y| / (|X| + |Y|)
    
    Tương đương F1-score nhưng cho spatial predictions
    Không bị ảnh hưởng bởi class imbalance!
    """
    def __init__(self, smooth: float = 1.0):
        super().__init__()
        self.smooth = smooth

    def forward(self, logits: torch.Tensor, targets: torch.Tensor) -> torch.Tensor:
        probs = torch.sigmoid(logits)

        # Flatten spatial dimensions
        probs_flat = probs.view(probs.size(0), -1)
        targets_flat = targets.view(targets.size(0), -1)

        intersection = (probs_flat * targets_flat).sum(dim=1)
        dice = (2.0 * intersection + self.smooth) / (
            probs_flat.sum(dim=1) + targets_flat.sum(dim=1) + self.smooth
        )
        return 1 - dice.mean()


class FocalLoss(nn.Module):
    """
    Focal Loss: giảm weight của easy examples (background)
    Tập trung model vào hard examples (small tumors, fuzzy boundaries)
    
    FL(p_t) = -(1 - p_t)^γ * log(p_t)
    γ=2 là phổ biến nhất
    """
    def __init__(self, alpha: float = 0.25, gamma: float = 2.0):
        super().__init__()
        self.alpha = alpha
        self.gamma = gamma

    def forward(self, logits: torch.Tensor, targets: torch.Tensor) -> torch.Tensor:
        bce_loss = F.binary_cross_entropy_with_logits(logits, targets, reduction='none')
        probs = torch.sigmoid(logits)
        p_t = probs * targets + (1 - probs) * (1 - targets)
        focal_weight = self.alpha * (1 - p_t) ** self.gamma
        return (focal_weight * bce_loss).mean()


class CombinedLoss(nn.Module):
    """
    Thực chiến: kết hợp Dice + BCE (hoặc Focal) cho kết quả tốt nhất
    """
    def __init__(self, bce_weight: float = 0.5, dice_weight: float = 0.5):
        super().__init__()
        self.bce = nn.BCEWithLogitsLoss()
        self.dice = DiceLoss()
        self.bce_w = bce_weight
        self.dice_w = dice_weight

    def forward(self, logits, targets):
        return self.bce_w * self.bce(logits, targets) + \
               self.dice_w * self.dice(logits, targets)
```

---

## 5. Metrics: Dice, IoU, Hausdorff Distance

```python
import numpy as np
from scipy.ndimage import distance_transform_edt

def compute_segmentation_metrics(pred_mask: np.ndarray, gt_mask: np.ndarray) -> dict:
    """
    pred_mask, gt_mask: binary arrays (0/1), same shape
    
    Metrics chuẩn cho medical segmentation:
    - Dice Coefficient: primary metric (range 0-1, cao hơn = tốt)
    - IoU (Jaccard): thường thấp hơn Dice ~10%, cùng ý nghĩa
    - Hausdorff Distance 95%: độ lệch tối đa về boundary (mm) — quan trọng cho radiation therapy
    - Average Surface Distance: trung bình khoảng cách giữa hai boundaries
    """
    pred = pred_mask.astype(bool)
    gt = gt_mask.astype(bool)

    # Dice
    intersection = (pred & gt).sum()
    dice = 2 * intersection / (pred.sum() + gt.sum() + 1e-8)

    # IoU
    union = (pred | gt).sum()
    iou = intersection / (union + 1e-8)

    # Hausdorff Distance 95th percentile
    if pred.any() and gt.any():
        # Distance transform: khoảng cách mỗi pixel GT đến prediction boundary
        pred_dist = distance_transform_edt(~pred)
        gt_dist = distance_transform_edt(~gt)

        gt_to_pred = pred_dist[gt]   # Distances từ GT surface đến pred surface
        pred_to_gt = gt_dist[pred]   # Distances từ pred surface đến GT surface

        hd95 = max(
            np.percentile(gt_to_pred, 95),
            np.percentile(pred_to_gt, 95)
        )
    else:
        hd95 = float('inf')  # Nếu prediction empty hoặc GT empty

    return {
        "Dice": dice,
        "IoU": iou,
        "HD95_pixels": hd95,
        # Để convert sang mm: hd95 * pixel_spacing
    }

# Ngưỡng clinically acceptable:
# Organ segmentation (gan, lách): Dice ≥ 0.90, HD95 ≤ 5mm
# Tumor segmentation (brain, lung): Dice ≥ 0.80, HD95 ≤ 10mm
# Prostate segmentation (radiation): Dice ≥ 0.85, HD95 ≤ 3mm
```

---

## 6. Dataset: Brain Tumor Segmentation (BraTS)

```python
from torch.utils.data import Dataset
import nibabel as nib  # Đọc file NIfTI (.nii.gz) — format brain MRI

class BraTSDataset(Dataset):
    """
    BraTS (Brain Tumor Segmentation) Challenge dataset
    4 MRI modalities: T1, T1ce (contrast-enhanced), T2, FLAIR
    3 tumor regions:
      - WT (Whole Tumor): toàn bộ khối u
      - TC (Tumor Core): lõi khối u
      - ET (Enhancing Tumor): vùng enhancing (active)
    """
    def __init__(self, patient_dirs: list, patch_size: int = 128, augment: bool = False):
        self.patient_dirs = patient_dirs
        self.patch_size = patch_size
        self.augment = augment

    def __len__(self):
        return len(self.patient_dirs)

    def __getitem__(self, idx):
        patient_dir = self.patient_dirs[idx]

        # Load 4 modalities
        t1 = nib.load(f"{patient_dir}/{patient_dir.name}_t1.nii.gz").get_fdata()
        t1ce = nib.load(f"{patient_dir}/{patient_dir.name}_t1ce.nii.gz").get_fdata()
        t2 = nib.load(f"{patient_dir}/{patient_dir.name}_t2.nii.gz").get_fdata()
        flair = nib.load(f"{patient_dir}/{patient_dir.name}_flair.nii.gz").get_fdata()
        seg = nib.load(f"{patient_dir}/{patient_dir.name}_seg.nii.gz").get_fdata()

        # Stack modalities: (4, H, W, D)
        volume = np.stack([t1, t1ce, t2, flair], axis=0)

        # Normalize mỗi modality theo Z-score (chỉ trên brain voxels)
        for i in range(4):
            brain_mask = volume[i] > 0
            mean = volume[i][brain_mask].mean()
            std = volume[i][brain_mask].std()
            volume[i] = (volume[i] - mean) / (std + 1e-8)
            volume[i][~brain_mask] = 0  # Reset non-brain to 0

        # Convert segmentation labels
        # BraTS labels: 0=background, 1=NCR/NET, 2=ED, 4=ET
        wt = (seg > 0).astype(np.float32)   # Whole tumor = tất cả khác 0
        tc = ((seg == 1) | (seg == 4)).astype(np.float32)  # Tumor core
        et = (seg == 4).astype(np.float32)   # Enhancing tumor

        masks = np.stack([wt, tc, et], axis=0)  # (3, H, W, D)

        # Random 3D patch extraction
        patch = self._extract_random_patch(volume, masks)
        return torch.FloatTensor(patch[0]), torch.FloatTensor(patch[1])

    def _extract_random_patch(self, volume, masks):
        """Extract random 3D patch của size patch_size^3"""
        p = self.patch_size
        _, h, w, d = volume.shape
        z = np.random.randint(0, h - p)
        y = np.random.randint(0, w - p)
        x = np.random.randint(0, d - p)
        return (
            volume[:, z:z+p, y:y+p, x:x+p],
            masks[:, z:z+p, y:y+p, x:x+p]
        )
```

---

## 7. Tổng kết & Bài tập

Sau bài này, bạn nắm được:
- ✅ Segmentation vs Classification vs Detection
- ✅ U-Net architecture: encoder-decoder, skip connections
- ✅ Attention U-Net: focus vào vùng liên quan
- ✅ Dice Loss, Focal Loss, Combined Loss
- ✅ Metrics: Dice, IoU, HD95
- ✅ BraTS dataset pipeline cho 3D brain tumor

**Bài 6**: Detection — từ "đây là khối u" đến "khối u ở tọa độ (x,y,w,h)" trong ảnh MRI.

---

## Bài tập

1. Implement `nnU-Net` — phiên bản "self-configuring" của U-Net tự động chọn architecture dựa trên dataset. Đọc paper và giải thích tại sao nó thường outperform custom U-Net.

2. Thêm Deep Supervision vào U-Net: thêm auxiliary loss ở mỗi decoder level, không chỉ ở output cuối. Tại sao điều này giúp training cho deep networks?

3. Implement sliding window inference: thay vì resize toàn bộ CT về 512x512, chia thành patches 256x256 với overlap 50%, predict từng patch rồi stitch lại. Tính toán inference time và memory usage so với resize approach.

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
