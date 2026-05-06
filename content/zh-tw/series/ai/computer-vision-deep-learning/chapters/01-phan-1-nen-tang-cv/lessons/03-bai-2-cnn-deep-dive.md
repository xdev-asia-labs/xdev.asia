---
id: 019c9619-ab02-7002-c102-ab0200000002
title: 第 2 課：CNN 深入研究 — ResNet、EfficientNet、MobileNet
slug: bai-2-cnn-deep-dive
description: >-
  詳細的現代 CNN 架構：ResNet（跳過連接）、EfficientNet（複合縮放）、MobileNet（深度可分離卷積）。 ImageNet
  基準測試。特徵可視化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：電腦視覺平台
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: 深度學習的電腦視覺：從 CNN 到 Vision Transformer
  slug: computer-vision-deep-learning
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：CNN 深入研究 — ResNet，</tspan>
      <tspan x="60" dy="42">高效率網路、行動網絡</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深度學習的電腦視覺：從 CNN 到 Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：電腦視覺平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在上一篇文章中我們使用OpenCV進行基本的影像處理。但要**對影像進行分類**、**偵測物件**或**分段**－我們需要**深度學習**。這一切的基礎就是**CNN－卷積神經網路**。

> 🎯 **目標：** 深入了解現代 CNN 架構（ResNet、EfficientNet、MobileNet）－YOLO、SAM 與所有 CV 模型的基礎。

---

## 1. CNN — 卷積神經網絡

### 1.1 為什麼不對影像使用 MLP？

```
Ảnh 224×224×3 = 150,528 pixels
MLP: 150,528 → 1024 → 512 → 10 (classes)
     = 150,528 × 1024 = 154 TRIỆU parameters chỉ ở layer 1!

CNN: Dùng convolution → chỉ ~5 TRIỆU parameters cho cả network
     = Giảm 30× parameters! 🔥
```

**CNN 解決了 3 個問題：**
1. **參數爆炸：** 小卷積核（3×3），共享權重
2. **空間關係：**儲存像素位置訊息
3. **平移不變性：** 可偵測到左側或右側角落的貓

### 1.2 卷積運算

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

### 1.3 標準CNN架構

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

## 2. ResNet — 跳過連線遊戲規則改變者

### 2.1 問題：梯度消失

CNN 網路**越深**（層數越多），理論就**越好**。但實際上：

```
VGG-16 (16 layers):  accuracy 92.7%
VGG-20 (20 layers):  accuracy 91.5%  ← GIẢM! 😱

Lý do: gradient "biến mất" qua nhiều layers → weights ở đầu không học được
```

### 2.2 解決方案：殘留連接（跳過連接）

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

### 2.3 瓶頸塊 — ResNet-50/101/152

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

### 2.4 ResNet 變體

|型號|層 |參數|前 1 名 Acc |第一人稱射擊 (V100) |
|--------|--------|--------|------------|-----------|
| ResNet-18 | 18 | 18 1170 萬 | 69.8% | 1200 | 1200
| ResNet-34 | ResNet-34 34 | 34 2180 萬 | 73.3% | 800 |
| **ResNet-50** | 50 | 50 **25.6M** | **76.1%** | **600** |
| ResNet-101 | ResNet-101 101 | 101 4450 萬 | 77.4% | 350 | 350
| ResNet-152 | ResNet-152 152 | 152 6020 萬 | 78.3% | 250 | 250

> **💡 在實踐中：** ResNet-50 是最受歡迎的選擇 - 精度/速度的良好平衡。

---

## 3. EfficientNet — 複合縮放

### 3.1 想法：適當擴展

在 EfficientNet 之前，人們透過以下三種方式之一擴展 CNN：
- **寬度縮放：** 增加通道數（更寬）
- **深度縮放：** 新增圖層（更深）
- **解析度縮放：** 使用更大的影像（更高的解析度）

EfficientNet **同時縮放所有 3 個**至最佳比例：

```
depth = α^φ    (sâu hơn)
width = β^φ    (rộng hơn)
resolution = γ^φ  (ảnh to hơn)

Constraint: α × β² × γ² ≈ 2
```

### 3.2 MBConv 區塊 — 建構塊

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

### 3.3 EfficientNet 變體

|型號|參數|前 1 名 Acc |輸入大小 |
|--------|--------|------------|------------|
| EfficientNet-B0 | 530 萬 | 77.1% | 224 | 224
| EfficientNet-B1 | 780 萬 | 79.1% | 240 | 240
| EfficientNet-B2 | 920 萬 | 80.1% | 260 | 260
| EfficientNet-B3 | 12M | 81.6% | 300 | 300
| EfficientNet-B4 | 19M | 82.9% | 380 | 380
| **EfficientNetV2-S** | **21.5M** | **83.9%** | **384** |
| EfficientNetV2-M | 54M | 85.1% | 480 | 480

> **💡評論：** EfficientNet-B0 只有 **5.3M 參數**，但準確率 **超過** ResNet-50（25.6M 參數）！效率提高 5 倍。

---

## 4. MobileNet — 超輕量級行動網絡

### 4.1 深度可分離卷積

MobileNet 的秘密：**將**標準卷積分為 2 個步驟：

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

### 4.2 MobileNet 變體

|型號|參數|前 1 名 Acc |延遲（CPU）|使用案例 |
|--------|--------|------------|---------|----------|
|行動網路V2 | 340 萬 | 72.0% | 75 毫秒 |行動應用程式 |
| **MobileNetV3-小型** | **2.5M** | **67.4%** | **15ms** | **物聯網、邊緣** |
| MobileNetV3-大型 | 540 萬 | 75.2% | 50 毫秒 |行動應用程式 |

---

## 5. 實作：使用預訓練模型

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

### 5.1 比較多個模型

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

## 6. 特徵視覺化－CNN「看到」什麼？

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

> **💡觀察：**第一層偵測**邊緣、紋理**。中間層檢測**模式、零件**。最後一層檢測**物件、概念**。

---

## 總結

|型號|主要思想|參數|何時使用 |
|--------|--------|--------|-------------|
| **ResNet** |跳過連接 | 25.6M（ResNet-50）|強壯、多才多藝的骨幹 |
| **高效率網** |複合縮放 | 5.3M（B0）|精度高，參數少 |
| **行動網路** |深度可分離 | 2.5M（V3-S）|移動、邊緣、物聯網 |

**如何選擇：**
```
Accuracy quan trọng nhất → EfficientNet-B4/B5
Cân bằng speed/accuracy  → EfficientNet-B0 hoặc ResNet-50
Mobile/Edge deployment   → MobileNetV3
Backbone cho detection   → ResNet-50 + FPN
```

## 一般練習

1. **模型比較：** 在 20 張影像上執行 4 個模型（ResNet-18、ResNet-50、EfficientNet-B0、MobileNetV3）的基準測試。比較準確性和推理時間。
2. **特徵視覺化：** 視覺化 EfficientNet-B0 的所有層的特徵映射。與 ResNet 相比—有何不同？
3. **自訂區塊：** 從頭開始實作 ResidualBlock 和 BottleneckBlock（不使用 torchvision）。使用隨機輸入進行測試。
4. **參數計數器：** 寫一個函數來計算每一層的參數。 ResNet-50 中哪一層佔用的參數最多？

> **下一篇文章：** 遷移學習 — 如何使用預訓練模型用少量資料解決您自己的問題。
