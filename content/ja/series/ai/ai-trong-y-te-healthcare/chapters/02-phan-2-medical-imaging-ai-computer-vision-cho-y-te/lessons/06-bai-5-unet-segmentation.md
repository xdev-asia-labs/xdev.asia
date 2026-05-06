---
id: 019d8b33-bb05-7005-c005-ee0500000005
title: 'レッスン 5: 医療画像のセグメンテーション — U-Net とバリアント'
slug: bai-5-unet-segmentation
description: >-
  U-Net アーキテクチャ。 U-Net、TransUNetに注意してください。臓器/腫瘍のセグメンテーション。ダイスの損失、IoU メトリクス。 3D
  医療画像セグメンテーション。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 2: 医用画像 AI — ヘルスケアのためのコンピューター ビジョン'
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: '医療とヘルスケアにおける AI: 実戦アプリケーション'
  slug: ai-trong-y-te-healthcare
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4032" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4032)"/>

  <!-- Decorations -->
  <g>
    <circle cx="976" cy="158" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="852" cy="114" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="728" cy="70" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="604" cy="286" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="980" cy="242" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="198" x2="1100" y2="278" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="228" x2="1050" y2="298" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="976.5788383248864,131.5 976.5788383248864,164.5 948,181 919.4211616751136,164.5 919.4211616751135,131.5 948,115" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: 医療画像のセグメンテーション — U-Net</tspan>
      <tspan x="60" dy="42">& バリエーション</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">医療とヘルスケアにおける AI: 実戦アプリケーション</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 医用画像 AI — ヘルスケアのためのコンピューター ビジョン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> 病気を検出することが最初のステップです。放射線療法士は、放射線を照射するために腫瘍の**正確な境界**を知る必要があります。外科医は腫瘍がどの血管に付着しているかを知る必要があります。これはセグメンテーションの問題です。

---

## 1. セグメンテーション vs 分類 vs 検出

```
Classification:  "Có khối u không?"                   → 1 label
Detection:       "Khối u ở đâu trong ảnh?"             → Bounding box
Segmentation:    "Chính xác pixel nào là khối u?"      → Binary/Multi-class mask

Semantic Segmentation:  Tất cả pixel thuộc class nào?
Instance Segmentation:  Tách riêng từng object (khối u #1, khối u #2)
Panoptic Segmentation:  Combine cả hai
```

医療画像処理では、**セマンティック セグメンテーション**が最もよく使われています。その理由は次のとおりです。
- 臓器の分割: 「これは肝臓、これは脾臓」
- 病変のセグメンテーション: 「これは腫瘍です」 (インスタンスを分割する必要はありません)
- 手術計画には正確な境界線が必要です

---

## 2. U-Net — ゴールド スタンダード アーキテクチャ

U-Net (Ronneberger et al.、MICCAI 2015) (**25,000 回**以上引用) は、小規模なデータセットによる医療画像のセグメンテーション用に特別に設計されています。

＃＃＃２．１．中心となるアイデア: エンコーダー/デコーダー + スキップ接続

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

＃＃＃２．２．完全な実装

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

## 3. U-Net への注意 — 関連領域に焦点を当てる

標準的な U-Net の問題: スキップ接続は、バックグラウンド ノイズを含む **すべて** の機能を送信します。 **アテンション ゲート** はフィルタリングを学習し、セグメンテーション タスクに重要な特徴のみを保持します。

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

## 4. セグメンテーションのための損失関数

セグメンテーションでは、クラスの不均衡により精度が十分ではありません。大きな画像内の小さな腫瘍 → 背景ピクセル 99%!

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

## 5. メトリクス: ダイス、IoU、ハウスドルフ距離

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

## 6. データセット: 脳腫瘍セグメンテーション (BraTS)

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

## 7. まとめと演習

この記事を読み終えると、次のことが理解できるようになります。
- ✅ セグメンテーション vs 分類 vs 検出
- ✅ U-Net アーキテクチャ: エンコーダー/デコーダー、スキップ接続
- ✅ 注意 U-Net: 関連する領域に注目してください
- ✅ ダイス損失、焦点損失、複合損失
- ✅ メトリクス: ダイス、IoU、HD95
- ✅ 3D 脳腫瘍用 BraTS データセット パイプライン

**レッスン 6**: 検出 — 「これは腫瘍である」から、MRI 画像内の「腫瘍は座標 (x,y,w,h) にある」まで。

---

## 演習

1.実装する `nnU-Net` — U-Net の「自己構成」バージョンは、データセットに基づいてアーキテクチャを自動的に選択します。論文を読んで、カスタム U-Net よりもパフォーマンスが優れていることが多い理由を説明してください。

2. U-Net に深い監視を追加します。最終出力だけでなく、各デコーダ レベルで補助損失を追加します。これがディープネットワークのトレーニングに役立つのはなぜですか?

3. スライディング ウィンドウ推論を実装します。CT 全体のサイズを 512x512 に変更する代わりに、50% 重複する 256x256 のパッチに分割し、各パッチを予測してから再度ステッチします。サイズ変更アプローチと比較して、推論時間とメモリ使用量を計算します。

## 2. アーキテクチャと原則

### コアアーキテクチャ

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

## 3. 練習する

### セットアップ

```bash
pip install torch transformers datasets
```

### トレーニング パイプライン

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

## 4. ベストプラクティス

|側面 |推薦 |
|------|------|
|データ |量より質 |
|モデル |シンプルに始めてスケールアップ |
|トレーニング |損失曲線を監視する |
|評価 |適切な指標を使用する |

---

## 概要

|コンセプト |重要なポイント |
|----------|---------------|
|建築 |問題に適した |
|トレーニング |ハイパーパラメータの慎重な調整 |
|評価 |複数のメトリクス |
