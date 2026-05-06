---
id: 019c9619-ab02-7002-c102-ab0200000002
title: 'レッスン 2: CNN の詳細 - ResNet、EfficientNet、MobileNet'
slug: bai-2-cnn-deep-dive
description: >-
  最新の CNN アーキテクチャの詳細: ResNet (スキップ接続)、EfficientNet (複合スケーリング)、MobileNet
  (深さ方向の分離可能な畳み込み)。 ImageNet ベンチマーク。機能の視覚化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: コンピューター ビジョン プラットフォーム'
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: '深層学習によるコンピューター ビジョン: CNN から Vision Transformer まで'
  slug: computer-vision-deep-learning
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2253" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2253)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1031" cy="143" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="962" cy="94" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="893" cy="45" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="824" cy="256" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="755" cy="207" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="213" x2="1100" y2="293" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="243" x2="1050" y2="313" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="987.2487113059643,149 987.2487113059643,177 963,191 938.7512886940357,177 938.7512886940357,149 963,135" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI と ML — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: CNN の詳細 — ResNet、</tspan>
      <tspan x="60" dy="42">EfficientNet、MobileNet</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深層学習によるコンピューター ビジョン: CNN から Vision Transformer まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: コンピューター ビジョン プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

前回の記事では、基本的な画像処理に OpenCV を使用しました。しかし、**画像を分類**、**オブジェクトを検出**、または**セグメント**するには、**ディープラーニング**が必要です。そして、そのすべての基盤は **CNN — 畳み込みニューラル ネットワーク** です。

> 🎯 **目標:** YOLO、SAM、およびすべての CV モデルの基盤である最新の CNN アーキテクチャ (ResNet、EfficientNet、MobileNet) を深く理解します。

---

## 1. CNN — 畳み込みニューラル ネットワーク

### 1.1 画像に MLP を使用しないのはなぜですか?

```
Ảnh 224×224×3 = 150,528 pixels
MLP: 150,528 → 1024 → 512 → 10 (classes)
     = 150,528 × 1024 = 154 TRIỆU parameters chỉ ở layer 1!

CNN: Dùng convolution → chỉ ~5 TRIỆU parameters cho cả network
     = Giảm 30× parameters! 🔥
```

**CNN は 3 つの問題を解決します:**
1. **パラメータ爆発:** 小さな畳み込みカーネル (3×3)、共有重み
2. **空間関係:** ピクセルの位置情報を保持します
3. **翻訳の不変性:** 左隅または右隅の猫を検出できます

### 1.2 畳み込み演算

```python
"""Visualize convolution operation"""
import torch
import torch.nn as nn

# Input image: 1 channel, 5×5
input_img = torch.tensor([[
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
]], dtype=torch.float32).unsqueeze(0)  # Shape: (1, 1, 5, 5)

# 3×3 Convolution kernel (filter)
conv = nn.Conv2d(
    in_channels=1,
    out_channels=1,
    kernel_size=3,
    stride=1,
    padding=0
)

output = conv(input_img)
print(f"Input: {input_img.shape}")   # (1, 1, 5, 5)
print(f"Output: {output.shape}")     # (1, 1, 3, 3)
# Output nhỏ hơn: (5 - 3)/1 + 1 = 3
```

### 1.3 標準 CNN アーキテクチャ

```
Input Image (224×224×3)
    ↓
[Conv 3×3 → ReLU → MaxPool] × N     ← Feature Extraction
    ↓
Flatten
    ↓
[Fully Connected → ReLU] × M         ← Classification
    ↓
Softmax → Prediction
```

```python
"""CNN cơ bản trong PyTorch"""
import torch.nn as nn

class SimpleCNN(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()

        # Feature Extraction
        self.features = nn.Sequential(
            # Block 1: 3 → 32 channels
            nn.Conv2d(3, 32, kernel_size=3, padding=1),
            nn.BatchNorm2d(32),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),          # 224 → 112

            # Block 2: 32 → 64 channels
            nn.Conv2d(32, 64, kernel_size=3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),          # 112 → 56

            # Block 3: 64 → 128 channels
            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),          # 56 → 28
        )

        # Classification Head
        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(128 * 28 * 28, 512),
            nn.ReLU(inplace=True),
            nn.Dropout(0.5),
            nn.Linear(512, num_classes),
        )

    def forward(self, x):
        x = self.features(x)
        x = self.classifier(x)
        return x

model = SimpleCNN(num_classes=10)
total_params = sum(p.numel() for p in model.parameters())
print(f"Total parameters: {total_params:,}")
```

---

## 2. ResNet — 接続をスキップするゲームチェンジャー

### 2.1 問題: 勾配消失

CNN ネットワークが**深く** (層が多いほど)、理論は**より良く** なるはずです。しかし実際には:

```
VGG-16 (16 layers):  accuracy 92.7%
VGG-20 (20 layers):  accuracy 91.5%  ← GIẢM! 😱

Lý do: gradient "biến mất" qua nhiều layers → weights ở đầu không học được
```

### 2.2 解決策: 残留接続 (スキップ接続)

```
Thay vì học: F(x) = output
ResNet học:  F(x) = output - x
             output = F(x) + x    ← "Residual" + "Identity shortcut"
```

```python
"""ResNet Residual Block"""
class ResidualBlock(nn.Module):
    def __init__(self, channels):
        super().__init__()
        self.conv1 = nn.Conv2d(channels, channels, 3, padding=1)
        self.bn1 = nn.BatchNorm2d(channels)
        self.conv2 = nn.Conv2d(channels, channels, 3, padding=1)
        self.bn2 = nn.BatchNorm2d(channels)
        self.relu = nn.ReLU(inplace=True)

    def forward(self, x):
        identity = x                              # Lưu input gốc
        out = self.relu(self.bn1(self.conv1(x)))   # Conv → BN → ReLU
        out = self.bn2(self.conv2(out))            # Conv → BN
        out = out + identity                       # ✨ SKIP CONNECTION
        out = self.relu(out)                       # ReLU
        return out
```

### 2.3 ボトルネック ブロック — ResNet-50/101/152

```python
"""Bottleneck Block — giảm computation bằng 1×1 conv"""
class BottleneckBlock(nn.Module):
    expansion = 4

    def __init__(self, in_channels, mid_channels):
        super().__init__()
        out_channels = mid_channels * self.expansion

        self.conv1 = nn.Conv2d(in_channels, mid_channels, 1)    # 1×1: giảm channels
        self.bn1 = nn.BatchNorm2d(mid_channels)
        self.conv2 = nn.Conv2d(mid_channels, mid_channels, 3, padding=1)  # 3×3: main conv
        self.bn2 = nn.BatchNorm2d(mid_channels)
        self.conv3 = nn.Conv2d(mid_channels, out_channels, 1)   # 1×1: tăng channels
        self.bn3 = nn.BatchNorm2d(out_channels)
        self.relu = nn.ReLU(inplace=True)

        # Shortcut nếu dimensions khác
        self.shortcut = nn.Sequential()
        if in_channels != out_channels:
            self.shortcut = nn.Sequential(
                nn.Conv2d(in_channels, out_channels, 1),
                nn.BatchNorm2d(out_channels)
            )

    def forward(self, x):
        identity = self.shortcut(x)
        out = self.relu(self.bn1(self.conv1(x)))
        out = self.relu(self.bn2(self.conv2(out)))
        out = self.bn3(self.conv3(out))
        out = out + identity
        return self.relu(out)
```

### 2.4 ResNet のバリアント

|モデル |レイヤー |パラメータ |トップ 1 アクセス | FPS(V100) |
|----------|----------|----------|----------|----------|
|レスネット-18 | 18 | 11.7M | 69.8% | 1200 |
|レスネット-34 | 34 | 21.8M | 73.3% | 800 |
| **ResNet-50** | 50 | **25.6M** | **76.1%** | **600** |
|レスネット-101 | 101 | 44.5M | 77.4% | 350 |
|レスネット-152 | 152 | 60.2M | 78.3% | 250 |

> **💡 実際には:** ResNet-50 が最も一般的な選択肢であり、精度と速度のバランスが優れています。

---

## 3. EfficientNet — 複合スケーリング

### 3.1 アイデア: 適切にスケーリングする

EfficientNet が登場する前は、次の 3 つの方法のうちの 1 つで CNN を拡張していました。
- **幅のスケーリング:** チャンネル数を増やします (幅を広くします)。
- **深さのスケーリング:** レイヤーを追加します (より深く)
- **解像度のスケーリング:** より大きな画像 (高解像度) を使用します。

EfficientNet は **3 つすべてを同時に**最適な比率にスケールします。

```
depth = α^φ    (sâu hơn)
width = β^φ    (rộng hơn)
resolution = γ^φ  (ảnh to hơn)

Constraint: α × β² × γ² ≈ 2
```

### 3.2 MBConv ブロック — ビルディング ブロック

```python
"""MBConv (Mobile Inverted Bottleneck) — core block của EfficientNet"""
class MBConv(nn.Module):
    def __init__(self, in_ch, out_ch, expand_ratio=6, stride=1):
        super().__init__()
        mid_ch = in_ch * expand_ratio
        self.use_residual = (stride == 1 and in_ch == out_ch)

        layers = []
        # 1. Expand (1×1 conv)
        if expand_ratio != 1:
            layers.extend([
                nn.Conv2d(in_ch, mid_ch, 1, bias=False),
                nn.BatchNorm2d(mid_ch),
                nn.SiLU(inplace=True),  # Swish activation
            ])

        # 2. Depthwise Conv (3×3 hoặc 5×5)
        layers.extend([
            nn.Conv2d(mid_ch, mid_ch, 3, stride=stride, padding=1,
                      groups=mid_ch, bias=False),  # Depthwise!
            nn.BatchNorm2d(mid_ch),
            nn.SiLU(inplace=True),
        ])

        # 3. Squeeze-and-Excitation (Channel Attention)
        # ... SE block (bỏ qua cho ngắn gọn)

        # 4. Project (1×1 conv)
        layers.extend([
            nn.Conv2d(mid_ch, out_ch, 1, bias=False),
            nn.BatchNorm2d(out_ch),
        ])

        self.block = nn.Sequential(*layers)

    def forward(self, x):
        if self.use_residual:
            return x + self.block(x)  # Skip connection
        return self.block(x)
```

### 3.3 EfficientNet のバリアント

|モデル |パラメータ |トップ 1 アクセス |入力サイズ |
|----------|----------|---------------|-------------|
| EfficientNet-B0 | 5.3M | 77.1% | 224 |
| EfficientNet-B1 | 7.8M | 79.1% | 240 |
| EfficientNet-B2 | 9.2M | 80.1% | 260 |
| EfficientNet-B3 | 12M | 81.6% | 300 |
| EfficientNet-B4 | 19M | 82.9% | 380 |
| **EfficientNetV2-S** | **2150万** | **83.9%** | **384** |
| EfficientNetV2-M | 54M | 85.1% | 480 |

> **💡 コメント:** EfficientNet-B0 はわずか **530 万パラメータ**ですが、精度は **ResNet-50 (2560 万パラメータ) を超えています。 5倍効果的。

---

## 4. MobileNet — モバイル向けに超軽量

### 4.1 深さ方向の分離可能な畳み込み

MobileNet の秘密: 標準畳み込みを 2 つのステップに**分割**:

```
Standard Conv 3×3:
  Input (H×W×Cin) → Conv 3×3 → Output (H×W×Cout)
  Computation: H × W × Cin × Cout × 3 × 3

Depthwise Separable Conv:
  Step 1: Depthwise (3×3, groups=Cin)  → (H×W×Cin)    ← filter spatial
  Step 2: Pointwise (1×1)              → (H×W×Cout)   ← combine channels
  Computation: H × W × Cin × (3×3 + Cout)

  → Giảm computation ~8-9× !
```

```python
"""So sánh Standard vs Depthwise Separable Convolution"""

# Standard Convolution
standard_conv = nn.Conv2d(64, 128, kernel_size=3, padding=1)
params_standard = sum(p.numel() for p in standard_conv.parameters())
# = 64 × 128 × 3 × 3 + 128 = 73,856

# Depthwise Separable
depthwise = nn.Conv2d(64, 64, kernel_size=3, padding=1, groups=64)  # Depthwise
pointwise = nn.Conv2d(64, 128, kernel_size=1)                        # Pointwise
params_separable = sum(p.numel() for p in depthwise.parameters()) + \
                   sum(p.numel() for p in pointwise.parameters())
# = (64 × 3 × 3 + 64) + (64 × 128 + 128) = 640 + 8,320 = 8,960

print(f"Standard Conv params: {params_standard:,}")     # 73,856
print(f"Separable Conv params: {params_separable:,}")    # 8,960
print(f"Reduction: {params_standard/params_separable:.1f}×")  # 8.2×
```

### 4.2 MobileNet のバリアント

|モデル |パラメータ |トップ 1 アクセス |レイテンシ (CPU) |使用例 |
|----------|----------|---------------|----------|----------|
|モバイルネットV2 | 3.4M | 72.0% | 75ミリ秒 |モバイルアプリ |
| **MobileNetV3-Small** | **250万** | **67.4%** | **15ms** | **IoT、エッジ** |
| MobileNetV3-Large | 5.4M | 75.2% | 50ミリ秒 |モバイルアプリ |

---

## 5. 実践: 事前トレーニング済みモデルの使用

```python
"""Dùng ResNet, EfficientNet pretrained — phân loại ảnh"""
import torch
import torchvision.models as models
import torchvision.transforms as T
from PIL import Image

# === 1. Load pretrained model ===
model = models.efficientnet_b0(weights="IMAGENET1K_V1")
model.eval()

# === 2. Preprocessing ===
transform = T.Compose([
    T.Resize(256),
    T.CenterCrop(224),
    T.ToTensor(),
    T.Normalize(mean=[0.485, 0.456, 0.406],    # ImageNet stats
                std=[0.229, 0.224, 0.225]),
])

# === 3. Load và tiền xử lý ảnh ===
img = Image.open("cat.jpg")
input_tensor = transform(img).unsqueeze(0)  # Add batch dimension

# === 4. Inference ===
with torch.no_grad():
    outputs = model(input_tensor)
    probabilities = torch.nn.functional.softmax(outputs[0], dim=0)

# === 5. Top-5 predictions ===
# Load ImageNet labels
import json
import urllib.request
url = "https://raw.githubusercontent.com/pytorch/hub/master/imagenet_classes.txt"
categories = urllib.request.urlopen(url).read().decode().strip().split("\n")

top5_prob, top5_idx = torch.topk(probabilities, 5)
for i in range(5):
    print(f"{categories[top5_idx[i]]:30s} {top5_prob[i].item():.4f}")
```

### 5.1 複数のモデルを比較する

```python
"""Benchmark 4 models trên cùng 1 ảnh"""
import time

models_to_test = {
    "ResNet-18": models.resnet18(weights="IMAGENET1K_V1"),
    "ResNet-50": models.resnet50(weights="IMAGENET1K_V1"),
    "EfficientNet-B0": models.efficientnet_b0(weights="IMAGENET1K_V1"),
    "MobileNetV3-Small": models.mobilenet_v3_small(weights="IMAGENET1K_V1"),
}

img = Image.open("test.jpg")
input_tensor = transform(img).unsqueeze(0)

for name, model in models_to_test.items():
    model.eval()
    params = sum(p.numel() for p in model.parameters())

    # Warmup
    with torch.no_grad():
        model(input_tensor)

    # Benchmark
    start = time.time()
    with torch.no_grad():
        for _ in range(100):
            outputs = model(input_tensor)
    elapsed = (time.time() - start) / 100 * 1000  # ms

    probs = torch.softmax(outputs[0], dim=0)
    top1_prob, top1_idx = probs.max(0)

    print(f"{name:25s} | {params/1e6:.1f}M params | {elapsed:.1f}ms | "
          f"{categories[top1_idx]}: {top1_prob:.3f}")
```

---

## 6. 特徴の視覚化 — CNN は何を「見ている」のでしょうか?

```python
"""Visualize feature maps từ các layer CNN"""
import torchvision.models as models
import matplotlib.pyplot as plt

model = models.resnet50(weights="IMAGENET1K_V1")
model.eval()

# Hook để lấy feature maps
activation = {}
def get_activation(name):
    def hook(model, input, output):
        activation[name] = output.detach()
    return hook

# Đăng ký hooks ở các layers khác nhau
model.layer1[0].register_forward_hook(get_activation('layer1'))
model.layer2[0].register_forward_hook(get_activation('layer2'))
model.layer3[0].register_forward_hook(get_activation('layer3'))
model.layer4[0].register_forward_hook(get_activation('layer4'))

# Forward pass
img = Image.open("cat.jpg")
input_tensor = transform(img).unsqueeze(0)
with torch.no_grad():
    model(input_tensor)

# Visualize
fig, axes = plt.subplots(4, 8, figsize=(20, 10))
for row, layer_name in enumerate(['layer1', 'layer2', 'layer3', 'layer4']):
    features = activation[layer_name][0]  # (C, H, W)
    for col in range(8):
        ax = axes[row][col]
        ax.imshow(features[col].numpy(), cmap='viridis')
        ax.axis('off')
        if col == 0:
            ax.set_ylabel(layer_name, fontsize=12)
plt.suptitle("ResNet-50 Feature Maps", fontsize=16)
plt.tight_layout()
plt.show()
```

> **💡 観察:** 最初のレイヤーは **エッジ、テクスチャ**を検出します。中間層は**パターン、パーツ**を検出します。最後の層は **オブジェクト、概念** を検出します。

---

## 概要

|モデル |主なアイデア |パラメータ |いつ使用するか |
|----------|----------|----------|---------------|
| **ResNet** |接続をスキップする | 25.6M (ResNet-50) |強力で多用途なバックボーン |
| **EfficientNet** |複合スケーリング | 5.3M (B0) |高精度、少ないパラメータ |
| **モバイルネット** |奥行き方向に分離可能 | 2.5M (V3-S) |モバイル、エッジ、IoT |

**選び方:**
```
Accuracy quan trọng nhất → EfficientNet-B4/B5
Cân bằng speed/accuracy  → EfficientNet-B0 hoặc ResNet-50
Mobile/Edge deployment   → MobileNetV3
Backbone cho detection   → ResNet-50 + FPN
```

## 一般的な演習

1. **モデルの比較:** 20 個の画像で 4 つのモデル (ResNet-18、ResNet-50、EfficientNet-B0、MobileNetV3) のベンチマークを実行します。精度と推論時間を比較します。
2. **機能 Viz:** EfficientNet-B0 のすべてのレイヤーの機能マップを視覚化します。 ResNet と比較してください。どのように異なりますか?
3. **カスタム ブロック:** ResidualBlock と BottleneckBlock を最初から実装します (torchvision は使用しません)。ランダムな入力でテストします。
4. **パラメータ カウンター:** 各レイヤーのパラメータをカウントする関数を作成します。 ResNet-50 で最も多くのパラメータを占める層はどれですか?

> **次の記事:** 転移学習 — 事前学習済みモデルを使用して、少ないデータで独自の問題を解決する方法。
