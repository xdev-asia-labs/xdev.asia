---
id: 019c9619-ab03-7003-c103-ab0300000003
title: 第 3 課：遷移學習 — 使用經過訓練的模型
slug: bai-3-transfer-learning
description: 遷移學習：預訓練模型、特徵提取、微調。實作：使用在 ImageNet 上預先訓練的 EfficientNet 進行影像分類。小數據集的資料增強策略。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：電腦視覺平台
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: 深度學習的電腦視覺：從 CNN 到 Vision Transformer
  slug: computer-vision-deep-learning
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 人工智慧與機器學習 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：遷移學習－先使用模型</tspan>
      <tspan x="60" dy="42">訓練</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深度學習的電腦視覺：從 CNN 到 Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：電腦視覺平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

您有 **500 隻狗和貓的圖片**，想要建立一個分類模型。從頭開始訓練？需要 **數百萬張圖像** + **強大的 GPU** + **數週的訓練**。或...使用**遷移學習**：採用在 ImageNet（1400 萬張圖像）上訓練的模型，將知識「遷移」到您的問題。只需 **500 張圖像 + 10 分鐘訓練** → 準確率 95%+！

> 🎯 **遷移學習**是真實履歷中**最**使用的技術。 90% 的項目從一開始就沒有進行訓練。

---

## 1.什麼是遷移學習？

### 1.1 想法

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

### 1.2 兩個主要策略

|戰略|怎麼辦|何時使用 |
|------------|---------|-------------|
| **特徵抓取** | 凍結主幹，只有新列車分類器 | 小資料集（<1000 張），域名與 ImageNet 相同 |
| **微調** |解凍部分主幹+新的訓練分類器 |中等資料集（1000-10000 張影像），不同域 ImageNet |

```
Dataset size vs Strategy:
< 500 ảnh   → Feature Extraction (freeze toàn bộ)
500 - 5000  → Fine-tune top layers
5000+       → Fine-tune toàn bộ (lower learning rate)
50000+      → Có thể train from scratch
```

---

## 2. 資料增強－資料增強

### 2.1 為什麼有必要？

小資料集→模型很容易**過度擬合**。資料增強創造了更多的影像「變化」→模型學習得更好。

### 2.2 常用技術

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

## 3. 實作：使用 EfficientNet 進行遷移學習

### 3.1 準備資料集

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
    if val_acc > 最佳值acc：
        最佳_val_acc = val_acc
        torch.save(model.state_dict(), "best_model.pth")

    print(f"曆元 {epoch+1}/{num_epochs} | "
          f"列車損失：{train_loss/len(train_loader):.4f} | "
          f“訓練加速度：{train_acc：.4f} |”
          f"Val Acc: {val_acc:.4f} {'⭐' if val_acc == best_val_acc else ''}")

print(f"\n最佳驗證精確度: {best_val_acc:.4f}")
```

### 3.5 Inference

```蟒蛇
"""推理 — 預測新照片"""
從 PIL 匯入影像

# 載入最佳模型
model.load_state_dict(torch.load("best_model.pth"))
模型.eval()

def Predict_image（影像路徑，模型，變換，類別名稱）：
    img = Image.open(image_path).convert("RGB")
    input_tensor = 變換(img).unsqueeze(0).to(device)

    使用 torch.no_grad()：
        輸出=模型（輸入張量）
        機率 = torch.softmax(輸出, 暗淡=1)
        置信度，預測 = probabilities.max(1)

    pred_class = class_names[預測.item()]
    conf =confidence.item()

    print(f"🖼️ {image_path}")
    print(f"📌 預測：{pred_class} ({conf:.1%})")
    對於 i，枚舉中的名稱（class_names）：
        print(f" {name}: {機率[0][i]:.1%}")

    回傳 pred_class,conf

# 測試
類別名稱= [“貓”，“狗”]
預測映像（“test_cat.jpg”，模型，val_transform，class_names）
預測映像（“test_dog.jpg”，模型，val_transform，class_names）
```

---

## 4. 實用技巧

### 4.1 選擇預訓練模型

```
問題 → 建議型號
────────────────────────────────────────────────
一般分類 → EfficientNet-B0/B2
需要高精度 → EfficientNetV2-M
移動/邊緣 → MobileNetV3
偵測主幹 → ResNet-50 + FPN
醫學影像 → ResNet-50（許多研究）
小數據集（<500)    → Feature Extraction + heavy augmentation
```

### 4.2 Common Mistakes

|錯誤|後果|如何修復 |
|---------|---------|---------|
|學習率太高 |模型「忘記」學到的特徵 |使用1e-4 ~ 1e-5進行微調 |
|沒有增強數據 |快速過度擬合 |始終擴充火車組 |
|增強驗證集|準確度評估錯誤 |僅增加 **train** 集 |
|冷凍太少|訓練不穩定|開始大量凍結，然後逐漸解凍 |
|忘記標準化 |準確率很低 |使用 ImageNet 平均值/標準差 |

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

＃＃ 概括

|概念 |記住|
|---------|---------|
| **遷移學習** |使用預先訓練的模型，將知識「轉移」到新任務 |
| **特徵擷取** |凍結骨幹網，僅訓練頭部 - 對於小資料集 |
| **微調** |解凍部分主幹 — 對於中等資料集 |
| **資料增強** |資料增強：翻轉、旋轉、色彩震動 |
| **學習率** |微調需要低LR (1e-4 ~ 1e-5) |
| **標準化** |始終使用 ImageNet 統計資料：[0.485, 0.456, 0.406] |

## 一般練習

1. **貓與狗：** 從 Kaggle 下載資料集，透過特徵提取和微調來訓練 EfficientNet-B0。比較準確度。
2. **3 類別分類：** 增加 1 個類別（例如：鳥）。再次訓練。精度還好嗎？
3. **增強實驗：** 比較3個增強等級：無增強、輕度增強、強增強。繪製學習曲線。
4. **小數據挑戰：** 僅使用 50 個圖像/類別。微調與特徵提取－誰勝出？

> **下一篇文章：** YOLO 物體偵測 — 從 v3 到 v11，偵測即時照片/影片中的任何物體。
