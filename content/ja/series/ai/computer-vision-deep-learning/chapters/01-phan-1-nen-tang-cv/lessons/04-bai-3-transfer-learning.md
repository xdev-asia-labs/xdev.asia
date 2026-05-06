---
id: 019c9619-ab03-7003-c103-ab0300000003
title: 'レッスン 3: 転移学習 — トレーニング済みモデルの使用'
slug: bai-3-transfer-learning
description: >-
  転移学習: 事前トレーニングされたモデル、特徴抽出、微調整。実践: ImageNet で事前トレーニングされた EfficientNet
  を使用した画像分類。小規模なデータセット向けのデータ拡張戦略。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: コンピューター ビジョン プラットフォーム'
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: '深層学習によるコンピューター ビジョン: CNN から Vision Transformer まで'
  slug: computer-vision-deep-learning
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI と ML — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: 転移学習 — 最初にモデルを使用する</tspan>
      <tspan x="60" dy="42">トレーニング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深層学習によるコンピューター ビジョン: CNN から Vision Transformer まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: コンピューター ビジョン プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

あなたは犬と猫の **500 枚の写真**を持っており、分類モデルを構築したいと考えています。ゼロからトレーニングしますか？ **数百万の画像** + **強力な GPU** + **数週間のトレーニング**が必要です。または...**転移学習**を使用します。ImageNet (1,400 万枚の画像) でトレーニングされたモデルを取得し、問題に知識を「転移」します。わずか **500 枚の画像 + 10 分間のトレーニング** → 精度 95%+!

> 🎯 **転移学習**は、実際の履歴書で**最もよく使用される**テクニックです。プロジェクトの 90% は最初からトレーニングを行いません。

---

## 1.転移学習とは何ですか?

### 1.1 アイデア

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

### 1.2 2 つの主な戦略

|戦略 |やり方 |いつ使用するか |
|----------|-----------|---------------|
| **特徴抽出** |バックボーンを凍結し、新しいトレイン分類器のみ小規模 |なデータセット(<1000画像)、ImageNetに類似したドメイン |
| **微調整** |バックボーンの一部を解凍 + 新しいトレイン分類器 |中規模のデータセット (1000 ～ 10000 画像)、異なるドメイン ImageNet |

```
Dataset size vs Strategy:
< 500 ảnh   → Feature Extraction (freeze toàn bộ)
500 - 5000  → Fine-tune top layers
5000+       → Fine-tune toàn bộ (lower learning rate)
50000+      → Có thể train from scratch
```

---

## 2. データ拡張 — データ拡張

### 2.1 なぜ必要なのでしょうか?

データセットが小さい → モデルは**過剰適合**しやすい。データ拡張により、画像のより多くの「バリエーション」が作成され、モデルの学習が向上します。

### 2.2 一般的なテクニック

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

## 3. 実践: EfficientNet を使用した転移学習

### 3.1 データセットの準備

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

    print(f"エポック {epoch+1}/{num_epochs} | "
          f"列車損失: {train_loss/len(train_loader):.4f} | "
          f"列車アクセス: {train_acc:.4f} | "
          f"Val Acc: {val_acc:.4f} {'⭐' if val_acc == best_val_acc else ''}")

print(f"\n最高の検証精度: {best_val_acc:.4f}")
```

### 3.5 Inference

```パイソン
"""推論 — 新しい写真を予測します"""
PILインポート画像から

# 最適なモデルをロードする
model.load_state_dict(torch.load("best_model.pth"))
モデル.eval()

def 予測画像(画像パス、モデル、変換、クラス名):
    img = Image.open(image_path).convert("RGB")
    input_tensor = 変換(img).unsqueeze(0).to(デバイス)

    torch.no_grad() を使用:
        出力 = モデル(入力テンソル)
        確率 = torch.softmax(出力、dim=1)
        信頼度、予測 = probabilities.max(1)

    pred_class = class_names[predicted.item()]
    conf = 信頼性.item()

    print(f"🖼️ {image_path}")
    print(f"📌 予測: {pred_class} ({conf:.1%})")
    私にとって、enumerate(class_names) の名前:
        print(f" {名前}: {確率[0][i]:.1%}")

    pred_class、confを返す

# テスト
class_names = ["猫", "犬"]
detect_image("test_cat.jpg", モデル, val_transform, class_names)
detect_image("test_dog.jpg", モデル, val_transform, class_names)
```

---

## 4. 実践的なヒント

### 4.1 事前トレーニング済みモデルの選択

```
問題点 → 推奨機種
─────────────────────
大分類 → EfficientNet-B0/B2
高い精度が必要 → EfficientNetV2-M
モバイル/エッジ → MobileNetV3
検出バックボーン → ResNet-50 + FPN
医用画像処理 → ResNet-50 (多くの研究)
小規模なデータセット (<500)    → Feature Extraction + heavy augmentation
```

### 4.2 Common Mistakes

|間違い |結果 |修正方法 |
|---------|---------|---------|
|学習率が高すぎる |モデルは学習した特徴を「忘れる」 |微調整には1e-4～1e-5を使用 |
|拡張データなし |高速オーバーフィット |常に列車セットを増強する |
|検証セットを拡張する |精度の誤った評価 | **トレーニング** セットのみを強化します |
|凍結が少なすぎる |不安定なトレーニング |最初は大量に凍結し、徐々に解凍します。
|正規化するのを忘れました |精度が非常に低い | ImageNet の平均値/標準値を使用する |

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

＃＃ まとめ

|コンセプト |覚えておいてください |
|---------|---------|
| **転移学習** |事前トレーニングされたモデルを使用して、知識を新しいタスクに「転送」します。
| **特徴抽出** |バックボーンをフリーズし、ヘッドのみをトレーニングする - 小規模なデータセットの場合 |
| **微調整** |バックボーンの一部をフリーズ解除します — 中規模のデータセットの場合 |
| **データ拡張** |データ拡張: 反転、回転、カラージッター |
| **学習率** |微調整には低い LR (1e-4 ～ 1e-5) が必要です。
| **正規化** |常に ImageNet 統計を使用してください: [0.485, 0.456, 0.406] |

## 一般的な演習

1. **猫 vs 犬:** Kaggle からデータセットをダウンロードし、特徴抽出と微調整を使用して EfficientNet-B0 をトレーニングします。精度を比較します。
2. **3 クラス分類:** さらに 1 クラスを追加します (例: 鳥)。またトレーニングします。精度はまだ大丈夫ですか？
3. **増強実験:** 増強の 3 つのレベルを比較します: 増強なし、軽度の増強、強力な増強。学習曲線を描きます。
4. **小規模データの課題:** クラスあたり 50 個の画像のみを使用します。微調整と特徴抽出 — どちらが勝つでしょうか?

> **次の記事:** YOLO オブジェクト検出 — v3 から v11 まで、リアルタイムの写真/ビデオ内のあらゆるオブジェクトを検出します。
