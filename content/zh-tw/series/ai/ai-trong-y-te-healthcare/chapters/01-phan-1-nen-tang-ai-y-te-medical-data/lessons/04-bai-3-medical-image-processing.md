---
id: 019d8b33-bb03-7003-c003-ee0300000003
title: 第 3 課：醫學影像處理基礎知識
slug: bai-3-medical-image-processing
description: X 光、CT、MRI 基礎知識。使用 pydicom 進行 DICOM 處理。影像預處理：加窗、歸一化。醫學影像的數據增強。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：醫療 AI 平台和醫療數據
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: 健康與醫療保健中的人工智慧：實戰應用
  slug: ai-trong-y-te-healthcare
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2335" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2335)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1034" cy="32" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="968" cy="206" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="902" cy="120" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="836" cy="34" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="770" cy="208" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="232" x2="1100" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="262" x2="1050" y2="332" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.3826859021799,168.5 1005.3826859021799,195.5 982,209 958.6173140978201,195.5 958.6173140978201,168.5 982,155" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：醫學影像處理</tspan>
      <tspan x="60" dy="42">基礎知識</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">健康與醫療保健中的人工智慧：實戰應用</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：醫療 AI 平台和醫療數據</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

> 醫學影像預處理並不是一個「小」步驟——如果這裡做得不對，那麼無論模型有多好都毫無意義。本課程教您從一開始就正確執行此操作。

---

## 1. 醫學影像類型及規格

在編碼之前，您需要了解每種圖像背後的**物理原理：

|模態 |物理原理|快遞|用於 |
|----------|-----------------|----------|----------|
| **X 光 (CR/DR)** | X光穿透身體|明亮的骨頭（緻密），黑暗的肺部（空氣）|胸部、骨骼、關節 |
| **CT** |多角度X光→3D重建| HU 值，軸向切片 |大腦、腹部、血管|
| **核磁共振** |磁場+無線電波|軟組織對比度良好|大腦、脊椎、關節|
| **超音波** |反射聲波|散斑噪音，消音 = 黑色 |心臟、腹部、胎兒|
| **病理學 (WSI)** |數位顯微鏡| H&E 染色 |癌症組織學|

### 1.1。為什麼X光和CT切片在預處理方面有如此不同？

```
X-ray (2D projection):
- Phẳng, mọi cấu trúc chồng lên nhau
- 1 file DICOM = 1 ảnh
- Dynamic range: 8-12 bits
- Kích thước: 1024x1024 đến 4096x4096 (full resolution DR)

CT (3D volumetric):
- Stack của nhiều 2D slices (thường 50-500 slices/patient)
- 1 Study = 1 Series = nhiều DICOM files
- Values là Hounsfield Units (-1024 đến +3000)
- Slice thickness: 0.5mm (thin-slice) đến 10mm (scout)
- Voxel spacing: có thể khác nhau ở x, y, z axis!
```

---

## 2. X 光預處理流程

### 2.1。標準程序

```python
import numpy as np
import cv2
from PIL import Image
import pydicom
import albumentations as A
from albumentations.pytorch import ToTensorV2

def preprocess_chest_xray(
    dicom_path: str,
    target_size: tuple = (512, 512),
    apply_clahe: bool = True
) -> np.ndarray:
    """
    Preprocessing pipeline hoàn chỉnh cho chest X-ray:
    DICOM → HU → Windowing → Resize → CLAHE → Normalize
    """
    # 1. Load DICOM
    dcm = pydicom.dcmread(dicom_path)
    image = dcm.pixel_array.astype(np.float32)

    # 2. Normalize về [0, 1] dựa vào actual range
    # (Không dùng fixed range vì X-ray khác CT — không có HU units)
    image = (image - image.min()) / (image.max() - image.min() + 1e-8)

    # 3. Photometric Interpretation: check xem ảnh có bị inverted không
    if hasattr(dcm, 'PhotometricInterpretation'):
        if dcm.PhotometricInterpretation == 'MONOCHROME1':
            # MONOCHROME1: cao = tối → cần invert
            image = 1.0 - image

    # 4. Resize
    image_uint8 = (image * 255).astype(np.uint8)
    resized = cv2.resize(image_uint8, target_size, interpolation=cv2.INTER_LANCZOS4)

    # 5. CLAHE (Contrast Limited Adaptive Histogram Equalization)
    # Làm nổi bật các vùng mờ (ví dụ: subtle infiltrates)
    if apply_clahe:
        clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
        resized = clahe.apply(resized)

    # 6. Convert sang float32 + normalize về ImageNet mean/std
    # (Cần thiết nếu dùng ImageNet pretrained backbone)
    result = resized.astype(np.float32) / 255.0

    return result  # Shape: (H, W), values [0, 1]

def to_rgb_3channel(gray_image: np.ndarray) -> np.ndarray:
    """
    Grayscale → 3-channel RGB
    Cần vì PyTorch ImageNet pretrained models expect 3 channels
    Cách đơn giản: duplicate channel
    """
    return np.stack([gray_image, gray_image, gray_image], axis=-1)
    # Shape: (H, W, 3)
```

### 2.2。檢測並處理旋轉/翻轉的影像

```python
def detect_and_fix_orientation(image: np.ndarray) -> np.ndarray:
    """
    X-ray chest có thể bị chụp:
    - AP (Anteroposterior): bệnh nhân đứng, tia từ trước ra sau
    - PA (Posteroanterior): bệnh nhân đứng, tia từ sau ra trước (chuẩn hơn)
    - Lateral: nghiêng 90°
    - Supine: nằm ngửa (bệnh nhân nặng)
    
    DICOM tag (0018,5100) ViewPosition thường cho biết loại view
    """
    # Simple heuristic: detect laterality từ lung position
    # (Phổi trái thường nhỏ hơn phổi phải vì có tim)
    h, w = image.shape[:2]
    left_half_mean = image[:, :w//2].mean()
    right_half_mean = image[:, w//2:].mean()
    # Phổi = vùng sáng trong lung window → mean cao hơn = nhiều phổi hơn
    # Nếu left_half_mean >> right_half_mean → ảnh có thể bị flip
    return image
```

---

## 3. CT 預處理流程

CT 更為複雜，因為它必須處理**體積資料**。

### 3.1。加載並排列 CT 切片

```python
from pathlib import Path
import pydicom
import numpy as np

def load_ct_volume(dicom_dir: str) -> tuple[np.ndarray, dict]:
    """
    Load toàn bộ CT study từ thư mục DICOM
    Return: (volume array, metadata)
    """
    dicom_dir = Path(dicom_dir)
    slices = []
    
    for dcm_path in sorted(dicom_dir.glob("*.dcm")):
        dcm = pydicom.dcmread(dcm_path)
        # Chỉ lấy CT slices (bỏ scout/localizer)
        if hasattr(dcm, 'ImagePositionPatient'):
            slices.append(dcm)

    if not slices:
        raise ValueError(f"No valid CT slices found in {dicom_dir}")

    # Sắp xếp theo vị trí thực tế trong không gian (z-axis)
    # KHÔNG sort theo filename — filenames không đáng tin cậy!
    slices.sort(key=lambda s: float(s.ImagePositionPatient[2]))

    # Convert tất cả về Hounsfield Units
    volume = np.stack([
        dcm.pixel_array.astype(np.float32) * float(getattr(dcm, 'RescaleSlope', 1.0))
        + float(getattr(dcm, 'RescaleIntercept', 0.0))
        for dcm in slices
    ])  # Shape: (n_slices, H, W)

    # Tính voxel spacing (mm)
    first_slice = slices[0]
    pixel_spacing = [float(x) for x in first_slice.PixelSpacing]  # [row_mm, col_mm]
    
    if len(slices) > 1:
        z_spacing = abs(
            float(slices[1].ImagePositionPatient[2]) -
            float(slices[0].ImagePositionPatient[2])
        )
    else:
        z_spacing = float(getattr(first_slice, 'SliceThickness', 1.0))

    metadata = {
        "voxel_spacing": [z_spacing] + pixel_spacing,  # (z, y, x) in mm
        "n_slices": len(slices),
        "volume_shape": volume.shape,
        "patient_id": str(first_slice.PatientID),
    }

    return volume, metadata

def resample_ct_volume(
    volume: np.ndarray,
    original_spacing: list,  # [z, y, x] in mm
    target_spacing: list = [1.0, 1.0, 1.0]  # Isotropic 1mm
) -> np.ndarray:
    """
    Resample CT volume về isotropic spacing
    Quan trọng: CT slices thường có z-spacing khác (1-5mm) so với xy-spacing (0.5-0.7mm)
    → Cần resample để model không bị confuse bởi anisotropic voxels
    """
    from scipy.ndimage import zoom

    zoom_factors = [
        original_spacing[i] / target_spacing[i]
        for i in range(3)
    ]

    resampled = zoom(volume, zoom_factors, order=1)  # order=1: bilinear
    return resampled
```

### 3.2。 CT 的加窗與歸一化

```python
def ct_windowing_presets():
    """Các preset windowing cho CT — dùng đúng preset cho đúng task"""
    return {
        "lung":         {"center": -600, "width": 1500},
        "mediastinum":  {"center": 40,   "width": 400},
        "abdomen":      {"center": 60,   "width": 400},
        "brain":        {"center": 40,   "width": 80},
        "brain_stroke": {"center": 35,   "width": 35},   # Hematoma detection
        "bone":         {"center": 400,  "width": 1800},
        "liver":        {"center": 60,   "width": 160},
        "pulmonary_embolism": {"center": 100, "width": 700},
    }

def prepare_ct_for_model(
    volume_hu: np.ndarray,
    task: str = "lung",
    target_size: tuple = (512, 512),
    n_slices: int = 64  # Số slices sampling
) -> np.ndarray:
    """
    Chuẩn bị một CT volume cho 3D CNN hoặc 2.5D approach
    """
    preset = ct_windowing_presets()[task]

    # 1. Apply windowing
    lower = preset["center"] - preset["width"] / 2
    upper = preset["center"] + preset["width"] / 2
    windowed = np.clip(volume_hu, lower, upper)
    windowed = (windowed - lower) / (upper - lower)  # [0, 1]

    # 2. Resize spatial dimensions
    from skimage.transform import resize
    resized_slices = []
    for slice_2d in windowed:
        resized = resize(slice_2d, target_size, anti_aliasing=True, preserve_range=True)
        resized_slices.append(resized)
    volume_resized = np.stack(resized_slices)  # (n_slices, H, W)

    # 3. Sample fixed number of slices (nhiều task dùng uniform sampling)
    total = volume_resized.shape[0]
    indices = np.linspace(0, total - 1, n_slices, dtype=int)
    volume_sampled = volume_resized[indices]  # (n_slices, H, W)

    return volume_sampled.astype(np.float32)
```

---

## 4. 資料增強－醫學影像的正確方法

### 4.1。合理的臨床醫療增強原則

**每次增強之前的重要問題**：*變換後的影像可以在臨床上存在嗎？ *

```python
# ✅ ĐÚNG — Augmentations phù hợp lâm sàng
valid_augmentations = {
    "horizontal_flip": "OK cho phần lớn body parts. NGOẠI TRỆ: tâm đồ, ECG",
    "small_rotation": "±15° cho X-ray (bệnh nhân không đứng thẳng hoàn toàn)",
    "brightness_contrast": "Máy X-ray khác nhau, exposure khác nhau",
    "gaussian_noise": "Detector noise, kẽm aging artifacts",
    "elastic_deformation": "Nhẹ (~α=50, σ=5) để simulate tư thế khác nhau",
    "random_crop": "OK nếu anatomical landmark còn trong frame",
    "scale_jitter": "±10-20% vì bệnh nhân context size khác nhau",
}

# ❌ SAI — Augmentations không hợp lý lâm sàng
invalid_augmentations = {
    "vertical_flip_chest": "Tim không nằm ở phía dưới phổi",
    "rotate_90_or_180": "Không có bệnh nhân nằm theo hướng đó trong CT đứng",
    "color_jitter_extreme": "Digital X-ray là grayscale — không có màu thực",
    "cutout_aggressive": "Xóa vùng bệnh lý quan trọng → label noise",
    "heavy_elastic_chest": "Biến dạng cơ quan quá mức = không realistic",
}
```

### 4.2。帶有Albumentations的增強管道

```python
import albumentations as A
from albumentations.pytorch import ToTensorV2
import cv2

def get_training_transform(image_size: int = 512) -> A.Compose:
    """
    Augmentation pipeline cho chest X-ray classification
    Tuned để cân bằng diversity vs clinical realism
    """
    return A.Compose([
        # Geometric transforms (nhẹ)
        A.HorizontalFlip(p=0.5),
        A.Rotate(
            limit=10,           # ±10 degrees
            border_mode=cv2.BORDER_CONSTANT,
            value=0,            # Padding = black
            p=0.3
        ),
        A.ShiftScaleRotate(
            shift_limit=0.05,   # Max 5% shift
            scale_limit=0.1,    # Max 10% scale
            rotate_limit=0,     # Already handled above
            p=0.3
        ),

        # Pixel-level transforms
        A.RandomBrightnessContrast(
            brightness_limit=0.2,
            contrast_limit=0.2,
            p=0.5
        ),
        A.GaussNoise(var_limit=(0, 15.0), p=0.2),
        A.GaussianBlur(blur_limit=(3, 5), p=0.1),

        # Medical-specific
        A.CLAHE(clip_limit=2.0, tile_grid_size=(8, 8), p=0.3),

        # Resize + normalize
        A.Resize(image_size, image_size),
        A.Normalize(
            mean=[0.485, 0.456, 0.406],  # ImageNet mean
            std=[0.229, 0.224, 0.225],   # ImageNet std
        ),
        ToTensorV2()
    ])

def get_validation_transform(image_size: int = 512) -> A.Compose:
    """Validation: KHÔNG augment, chỉ resize + normalize"""
    return A.Compose([
        A.Resize(image_size, image_size),
        A.Normalize(
            mean=[0.485, 0.456, 0.406],
            std=[0.229, 0.224, 0.225],
        ),
        ToTensorV2()
    ])
```

### 4.3。用於醫學成像的 MixUp 和 CutMix

```python
def medical_mixup(
    image1: torch.Tensor,
    image2: torch.Tensor,
    label1: torch.Tensor,
    label2: torch.Tensor,
    alpha: float = 0.4
) -> tuple:
    """
    MixUp: blend hai ảnh + labels tương ứng
    
    Lưu ý cho medical: alpha nhỏ hơn (0.2-0.4) so với natural images (0.8-1.0)
    Vì mixing quá mạnh tạo ra ảnh không realistic về mặt lâm sàng
    """
    lam = np.random.beta(alpha, alpha)
    mixed_image = lam * image1 + (1 - lam) * image2
    mixed_label = lam * label1 + (1 - lam) * label2
    return mixed_image, mixed_label
```

---

## 5. 處理類別不平衡

醫療資料集幾乎總是不平衡的：

```python
import torch
from torch.utils.data import WeightedRandomSampler
import numpy as np

def compute_class_weights(labels: np.ndarray) -> torch.Tensor:
    """
    Tính class weights để handle imbalance trong loss function
    
    Ví dụ CheXpert:
    'No Finding': 60%, 'Cardiomegaly': 10%, 'Pneumothorax': 2%
    → Weight Pneumothorax cao hơn No Finding 30x
    """
    # Multi-label: tính weight cho từng pathology riêng
    n_samples, n_classes = labels.shape
    weights = np.zeros(n_classes)

    for i in range(n_classes):
        pos = labels[:, i].sum()
        neg = n_samples - pos
        # pos_weight = neg/pos (BCE with logits convention)
        weights[i] = neg / (pos + 1e-8)

    return torch.FloatTensor(weights)

def create_balanced_sampler(labels: np.ndarray) -> WeightedRandomSampler:
    """
    WeightedRandomSampler: oversample minority class trong từng batch
    Hiệu quả hơn loss weighting cho extreme imbalance (>100:1)
    """
    # For multi-label: sample weight = max weight of any positive label
    class_weights = compute_class_weights(labels)

    sample_weights = np.zeros(len(labels))
    for i, label_row in enumerate(labels):
        active_classes = np.where(label_row > 0)[0]
        if len(active_classes) > 0:
            sample_weights[i] = class_weights[active_classes].max().item()
        else:
            sample_weights[i] = 1.0  # Normal samples

    sampler = WeightedRandomSampler(
        weights=torch.DoubleTensor(sample_weights),
        num_samples=len(sample_weights),
        replacement=True
    )
    return sampler

# Usage trong DataLoader
# dataloader = DataLoader(dataset, batch_size=32, sampler=create_balanced_sampler(labels))
```

---

## 6.總結與練習

讀完本文，您將了解：
- ✅ 醫學影像的類型和規格
- ✅ X 射線預處理：CLAHE、MONOCHROME 反轉
- ✅ CT 預處理：HU 轉換、體積加載、各向同性重採樣
- ✅ 醫療增強：哪個合理，哪個不合理
- ✅ 類別不平衡：加權損失和取樣器

**第 4 課**開始最有趣的部分：使用 CheXpert 資料集在真實 X 光上訓練 CNN！

---

## 練習

1. 從下列位置下載 10 個胸部 X 光 DICOM 文件 [RSNA Pneumonia Detection Challenge](https://www.kaggle.com/competitions/rsna-pneumonia-detection-challenge)。編寫測試腳本 `PhotometricInterpretation` 並處理 MONOCHROME1 與 MONOCHROME2。

2. 使用相同的 CT 掃描，並排顯示 4 種類型的視窗（肺、縱膈、骨骼、腦）。評論：每個視窗中可以看到哪些結構？

3. 為什麼？ `cv2.resize` 與 `INTER_NEAREST` 不適合醫學影像？應該使用哪種插值法以及何時使用？

## 2. 架構與原理

### 核心架構

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

## 3. 練習

### 設定

```bash
pip install torch transformers datasets
```

### 訓練管道

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

## 4. 最佳實踐

|方面|推薦|
|--------|----------------|
|數據|品質重於數量 |
|型號|從簡單開始，擴大規模 |
|培訓|監控損耗曲線|
|評價|使用適當的指標|

---

## 總結

|概念 |重點 |
|--------|-------------|
|建築|適合問題|
|培訓|仔細調整超參數 |
|評價|多個指標|
