---
id: 019c9619-ab03-7003-c103-ab0300000003
title: 'Bài 3: Transfer Learning — Dùng Model đã Huấn luyện'
slug: bai-3-transfer-learning
description: >-
  Transfer learning: pretrained models, feature extraction, fine-tuning.
  Hands-on: image classification với EfficientNet pretrained trên ImageNet.
  Data augmentation strategies cho dataset nhỏ.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng Computer Vision"
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: "Computer Vision với Deep Learning: Từ CNN đến Vision Transformer"
  slug: computer-vision-deep-learning
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2382" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2382)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1009" cy="157" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="918" cy="286" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="827" cy="155" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="736" cy="284" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="153" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="207" x2="1100" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="237" x2="1050" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="993.3730669589464,136 993.3730669589464,178 957,199 920.6269330410536,178 920.6269330410536,136 957,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI &amp; ML — Bài 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 3: Transfer Learning — Dùng Model đã</tspan>
      <tspan x="60" dy="42">Huấn luyện</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Computer Vision với Deep Learning: Từ CNN đến Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng Computer Vision</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Bạn có **500 ảnh** chó mèo và muốn xây model phân loại. Train từ đầu? Cần **triệu ảnh** + **GPU mạnh** + **tuần huấn luyện**. Hoặc... dùng **Transfer Learning**: lấy model đã train trên ImageNet (14 triệu ảnh), "chuyển" kiến thức sang bài toán của bạn. Chỉ cần **500 ảnh + 10 phút train** → accuracy 95%+!

> 🎯 **Transfer Learning** là kỹ thuật được dùng **nhiều nhất** trong CV thực tế. 90% projects không train từ đầu.

---

## 1. Transfer Learning là gì?

### 1.1 Ý tưởng

```
ImageNet Model (train trên 14M ảnh, 1000 classes):
┌──────────────────────────┬───────────────┐
│   Feature Extraction     │  Classifier   │
│   (Conv layers)          │  (FC layers)  │
│                          │               │
│   Học: edges, textures,  │  Học: 1000    │
│   shapes, patterns,      │  ImageNet     │
│   parts, objects         │  classes      │
└──────────────────────────┴───────────────┘
         ↓ KEEP                  ↓ REPLACE
┌──────────────────────────┬───────────────┐
│   Feature Extraction     │  New Classifier│
│   (GIỮA NGUYÊN hoặc     │  (Train mới   │
│    fine-tune nhẹ)        │   cho task    │
│                          │   của bạn)    │
└──────────────────────────┴───────────────┘
```

### 1.2 Hai chiến lược chính

| Chiến lược | Cách làm | Khi nào dùng |
|-----------|---------|-------------|
| **Feature Extraction** | Freeze backbone, chỉ train classifier mới | Dataset nhỏ (<1000 ảnh), domain giống ImageNet |
| **Fine-tuning** | Unfreeze 1 phần backbone + train classifier mới | Dataset vừa (1000-10000 ảnh), domain khác ImageNet |

```
Dataset size vs Strategy:
< 500 ảnh   → Feature Extraction (freeze toàn bộ)
500 - 5000  → Fine-tune top layers
5000+       → Fine-tune toàn bộ (lower learning rate)
50000+      → Có thể train from scratch
```

---

## 2. Data Augmentation — Tăng cường dữ liệu

### 2.1 Tại sao cần?

Dataset nhỏ → model dễ **overfit**. Data augmentation tạo thêm "biến thể" của ảnh → model học tốt hơn.

### 2.2 Các kỹ thuật phổ biến

```python
"""Data Augmentation với torchvision transforms"""
import torchvision.transforms as T
from PIL import Image

# Training transforms (có augmentation)
train_transform = T.Compose([
    T.RandomResizedCrop(224, scale=(0.8, 1.0)),  # Random crop + resize
    T.RandomHorizontalFlip(p=0.5),                # Lật ngang 50%
    T.RandomVerticalFlip(p=0.1),                   # Lật dọc 10%
    T.RandomRotation(degrees=15),                  # Xoay ±15°
    T.ColorJitter(
        brightness=0.2,  # Thay đổi sáng ±20%
        contrast=0.2,    # Thay đổi contrast ±20%
        saturation=0.2,  # Thay đổi saturation ±20%
        hue=0.1,         # Thay đổi hue ±10%
    ),
    T.RandomGrayscale(p=0.1),                      # Đen trắng 10%
    T.GaussianBlur(kernel_size=3, sigma=(0.1, 2.0)), # Blur nhẹ
    T.ToTensor(),
    T.Normalize(mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225]),
])

# Validation transforms (KHÔNG augment)
val_transform = T.Compose([
    T.Resize(256),
    T.CenterCrop(224),
    T.ToTensor(),
    T.Normalize(mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225]),
])
```

### 2.3 Visualize Augmentation

```python
"""Xem ảnh sau augmentation"""
import matplotlib.pyplot as plt

img = Image.open("dog.jpg")

# Augmentation nhẹ (không normalize)
aug_viz = T.Compose([
    T.RandomResizedCrop(224, scale=(0.8, 1.0)),
    T.RandomHorizontalFlip(p=0.5),
    T.RandomRotation(degrees=15),
    T.ColorJitter(brightness=0.3, contrast=0.3),
])

fig, axes = plt.subplots(2, 5, figsize=(20, 8))
axes[0][0].imshow(img)
axes[0][0].set_title("Original")
for i in range(1, 10):
    ax = axes[i // 5][i % 5]
    augmented = aug_viz(img)
    ax.imshow(augmented)
    ax.set_title(f"Aug #{i}")
for ax in axes.flat:
    ax.axis("off")
plt.suptitle("Data Augmentation Samples", fontsize=16)
plt.tight_layout()
plt.show()
```

### 2.4 Advanced: RandAugment & Mixup

```python
"""Augmentation nâng cao — dùng cho SOTA results"""
from torchvision.transforms import v2

# RandAugment: tự động chọn augmentation tốt nhất
train_transform_v2 = T.Compose([
    T.RandomResizedCrop(224),
    T.RandomHorizontalFlip(),
    v2.RandAugment(num_ops=2, magnitude=9),  # Auto augmentation!
    T.ToTensor(),
    T.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225]),
])

# CutMix / MixUp: trộn 2 ảnh → model robust hơn
# (thường implement trong training loop)
```

---

## 3. Hands-on: Transfer Learning với EfficientNet

### 3.1 Chuẩn bị Dataset

```python
"""Tải và chuẩn bị dataset — ví dụ: Cats vs Dogs"""
import torch
from torch.utils.data import DataLoader
from torchvision import datasets

# Cấu trúc folders:
# data/
#   train/
#     cat/   (200 ảnh)
#     dog/   (200 ảnh)
#   val/
#     cat/   (50 ảnh)
#     dog/   (50 ảnh)

# Load dataset từ folder structure
train_dataset = datasets.ImageFolder(
    root="data/train",
    transform=train_transform,  # Có augmentation
)

val_dataset = datasets.ImageFolder(
    root="data/val",
    transform=val_transform,    # Không augmentation
)

print(f"Training samples: {len(train_dataset)}")
print(f"Validation samples: {len(val_dataset)}")
print(f"Classes: {train_dataset.classes}")  # ['cat', 'dog']

# DataLoaders
train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True, num_workers=4)
val_loader = DataLoader(val_dataset, batch_size=32, shuffle=False, num_workers=4)
```

### 3.2 Strategy 1: Feature Extraction

```python
"""Feature Extraction — freeze backbone, chỉ train classifier"""
import torch.nn as nn
import torchvision.models as models

# Load pretrained EfficientNet-B0
model = models.efficientnet_b0(weights="IMAGENET1K_V1")

# ❄️ FREEZE tất cả layers
for param in model.parameters():
    param.requires_grad = False

# 🔥 Thay classifier head mới (train cho 2 classes)
num_features = model.classifier[1].in_features  # 1280
model.classifier = nn.Sequential(
    nn.Dropout(p=0.3),
    nn.Linear(num_features, 2),  # 2 classes: cat, dog
)

# Chỉ classifier mới có requires_grad=True
trainable = sum(p.numel() for p in model.parameters() if p.requires_grad)
total = sum(p.numel() for p in model.parameters())
print(f"Trainable: {trainable:,} / {total:,} ({trainable/total*100:.1f}%)")
# Trainable: 2,562 / 5,290,130 (0.05%)  ← CHỈ 0.05%!
```

### 3.3 Strategy 2: Fine-tuning

```python
"""Fine-tuning — unfreeze top layers + train"""

# Load pretrained
model = models.efficientnet_b0(weights="IMAGENET1K_V1")

# ❄️ Freeze tất cả
for param in model.parameters():
    param.requires_grad = False

# 🔥 Unfreeze top 2 blocks + classifier
for param in model.features[-2:].parameters():
    param.requires_grad = True

# Thay classifier
model.classifier = nn.Sequential(
    nn.Dropout(p=0.3),
    nn.Linear(1280, 2),
)

trainable = sum(p.numel() for p in model.parameters() if p.requires_grad)
total = sum(p.numel() for p in model.parameters())
print(f"Trainable: {trainable:,} / {total:,} ({trainable/total*100:.1f}%)")
```

### 3.4 Training Loop

```python
"""Training loop hoàn chỉnh cho Transfer Learning"""
import torch.optim as optim

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)

# Optimizer — learning rate THẤP cho fine-tuning!
optimizer = optim.AdamW(
    model.parameters(),
    lr=1e-4,          # Thấp hơn train from scratch (thường 1e-3)
    weight_decay=1e-4,
)

# Learning Rate Scheduler
scheduler = optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=10)

# Loss function
criterion = nn.CrossEntropyLoss()

# Training
num_epochs = 10
best_val_acc = 0.0

for epoch in range(num_epochs):
    # === TRAIN ===
    model.train()
    train_loss = 0
    train_correct = 0

    for images, labels in train_loader:
        images, labels = images.to(device), labels.to(device)

        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        train_loss += loss.item()
        train_correct += (outputs.argmax(1) == labels).sum().item()

    train_acc = train_correct / len(train_dataset)

    # === VALIDATE ===
    model.eval()
    val_correct = 0

    with torch.no_grad():
        for images, labels in val_loader:
            images, labels = images.to(device), labels.to(device)
            outputs = model(images)
            val_correct += (outputs.argmax(1) == labels).sum().item()

    val_acc = val_correct / len(val_dataset)

    # Scheduler step
    scheduler.step()

    # Save best model
    if val_acc > best_val_acc:
        best_val_acc = val_acc
        torch.save(model.state_dict(), "best_model.pth")

    print(f"Epoch {epoch+1}/{num_epochs} | "
          f"Train Loss: {train_loss/len(train_loader):.4f} | "
          f"Train Acc: {train_acc:.4f} | "
          f"Val Acc: {val_acc:.4f} {'⭐' if val_acc == best_val_acc else ''}")

print(f"\nBest Validation Accuracy: {best_val_acc:.4f}")
```

### 3.5 Inference

```python
"""Inference — dự đoán ảnh mới"""
from PIL import Image

# Load best model
model.load_state_dict(torch.load("best_model.pth"))
model.eval()

def predict_image(image_path, model, transform, class_names):
    img = Image.open(image_path).convert("RGB")
    input_tensor = transform(img).unsqueeze(0).to(device)

    with torch.no_grad():
        output = model(input_tensor)
        probabilities = torch.softmax(output, dim=1)
        confidence, predicted = probabilities.max(1)

    pred_class = class_names[predicted.item()]
    conf = confidence.item()

    print(f"🖼️  {image_path}")
    print(f"📌 Prediction: {pred_class} ({conf:.1%})")
    for i, name in enumerate(class_names):
        print(f"   {name}: {probabilities[0][i]:.1%}")

    return pred_class, conf

# Test
class_names = ["cat", "dog"]
predict_image("test_cat.jpg", model, val_transform, class_names)
predict_image("test_dog.jpg", model, val_transform, class_names)
```

---

## 4. Tips Thực Tế

### 4.1 Chọn Model Pretrained

```
Bài toán                → Model gợi ý
──────────────────────────────────────────────
General classification  → EfficientNet-B0/B2
High accuracy needed    → EfficientNetV2-M
Mobile/Edge             → MobileNetV3
Detection backbone      → ResNet-50 + FPN
Medical imaging         → ResNet-50 (nhiều research)
Small dataset (<500)    → Feature Extraction + heavy augmentation
```

### 4.2 Common Mistakes

| Sai lầm | Hậu quả | Cách sửa |
|---------|---------|---------|
| Learning rate quá cao | Model "quên" features đã học | Dùng 1e-4 ~ 1e-5 cho fine-tuning |
| Không augment data | Overfit nhanh | Luôn augment cho train set |
| Augment validation set | Đánh giá sai accuracy | Chỉ augment **train** set |
| Freeze quá ít | Unstable training | Bắt đầu freeze nhiều, dần unfreeze |
| Quên normalize | Accuracy rất thấp | Dùng ImageNet mean/std |

### 4.3 Discriminative Learning Rates

```python
"""Trick: dùng learning rate khác nhau cho từng phần model"""

# Backbone: lr rất nhỏ (fine-tune nhẹ)
# Classifier: lr lớn hơn (train nhiều hơn)
param_groups = [
    {"params": model.features.parameters(), "lr": 1e-5},     # Backbone
    {"params": model.classifier.parameters(), "lr": 1e-3},   # Classifier
]

optimizer = optim.AdamW(param_groups, weight_decay=1e-4)
```

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Transfer Learning** | Dùng model đã train sẵn, "chuyển" kiến thức sang task mới |
| **Feature Extraction** | Freeze backbone, chỉ train head — cho dataset nhỏ |
| **Fine-tuning** | Unfreeze 1 phần backbone — cho dataset vừa |
| **Data Augmentation** | Tăng cường dữ liệu: flip, rotate, color jitter |
| **Learning Rate** | Fine-tuning cần LR thấp (1e-4 ~ 1e-5) |
| **Normalize** | LUÔN dùng ImageNet stats: [0.485, 0.456, 0.406] |

## Bài tập tổng hợp

1. **Cats vs Dogs:** Download dataset từ Kaggle, train EfficientNet-B0 với feature extraction VÀ fine-tuning. So sánh accuracy.
2. **3-class Classification:** Thêm 1 class nữa (ví dụ: bird). Train lại. Accuracy vẫn tốt?
3. **Augmentation Experiment:** So sánh 3 mức augmentation: không augment, augment nhẹ, augment mạnh. Vẽ learning curves.
4. **Small Data Challenge:** Chỉ dùng 50 ảnh/class. Fine-tuning vs Feature Extraction — cái nào thắng?

> **Bài tiếp theo:** YOLO Object Detection — từ v3 đến v11, detect bất kỳ đối tượng nào trong ảnh/video real-time.
