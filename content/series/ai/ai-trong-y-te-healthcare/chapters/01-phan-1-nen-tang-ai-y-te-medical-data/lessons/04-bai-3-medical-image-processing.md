---
id: 019d8b33-bb03-7003-c003-ee0300000003
title: "Bài 3: Medical Image Processing Fundamentals"
slug: bai-3-medical-image-processing
description: >-
  X-ray, CT, MRI fundamentals. DICOM processing với pydicom. Image preprocessing: windowing, normalization. Data augmentation cho medical images.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng AI Y tế & Medical Data"
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: "AI trong Y tế & Healthcare: Ứng dụng Thực chiến"
  slug: ai-trong-y-te-healthcare
---

> Medical imaging preprocessing không phải một bước "nhỏ" — làm sai ở đây thì model tốt đến đâu cũng vô nghĩa. Bài này dạy bạn làm đúng từ đầu.

---

## 1. Các loại hình ảnh y tế và đặc điểm kỹ thuật

Trước khi code bất cứ thứ gì, bạn cần hiểu **vật lý** đằng sau mỗi loại ảnh:

| Modality | Nguyên tắc vật lý | Thể hiện | Dùng cho |
|----------|-----------------|----------|----------|
| **X-ray (CR/DR)** | Tia X xuyên qua cơ thể | Xương sáng (dense), phổi tối (air) | Ngực, xương, khớp |
| **CT** | X-ray nhiều góc → reconstruct 3D | HU values, axial slices | Não, bụng, mạch máu |
| **MRI** | Từ trường + radio waves | Soft tissue contrast tốt | Não, cột sống, khớp |
| **Ultrasound** | Sóng âm phản xạ | Speckle noise, anechoic = đen | Tim, bụng, thai nhi |
| **Pathology (WSI)** | Kính hiển vi digital | Màu sắc H&E stain | Ung thư mô học |

### 1.1. Vì sao X-ray và CT slice rất khác nhau về preprocessing

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

## 2. Preprocessing Pipeline cho X-ray

### 2.1. Quy trình chuẩn

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

### 2.2. Phát hiện và xử lý ảnh bị quay/lật

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

## 3. Preprocessing Pipeline cho CT

CT phức tạp hơn vì phải xử lý **volumetric data**.

### 3.1. Load và sắp xếp CT slices

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

### 3.2. Windowing và chuẩn hóa cho CT

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

## 4. Data Augmentation — Đúng cách cho Medical Images

### 4.1. Nguyên tắc augmentation y tế lâm sàng hợp lý

**Câu hỏi quan trọng trước mỗi augmentation**: *Ảnh sau transform này có thể tồn tại trong thực tế lâm sàng không?*

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

### 4.2. Augmentation pipeline với Albumentations

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

### 4.3. MixUp và CutMix cho Medical Imaging

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

## 5. Xử lý Class Imbalance

Medical datasets gần như luôn imbalanced:

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

## 6. Tổng kết & Bài tập

Sau bài này, bạn nắm được:
- ✅ Các loại hình ảnh y tế và đặc điểm kỹ thuật
- ✅ X-ray preprocessing: CLAHE, MONOCHROME inversion
- ✅ CT preprocessing: HU conversion, volume loading, isotropic resampling
- ✅ Medical augmentation: cái nào hợp lý, cái nào không
- ✅ Class imbalance: weighted loss và sampler

**Bài 4** bắt đầu phần thú vị nhất: train CNN trên X-ray thực tế với CheXpert dataset!

---

## Bài tập

1. Download 10 chest X-ray DICOM files từ [RSNA Pneumonia Detection Challenge](https://www.kaggle.com/competitions/rsna-pneumonia-detection-challenge). Viết script kiểm tra `PhotometricInterpretation` và xử lý MONOCHROME1 vs MONOCHROME2.

2. Với cùng một CT scan, hiển thị 4 loại windowing (lung, mediastinum, bone, brain) side-by-side. Nhận xét: cấu trúc nào visible ở mỗi window?

3. Vì sao `cv2.resize` với `INTER_NEAREST` lại không phù hợp cho medical images? Dùng interpolation nào thay thế và khi nào?

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
