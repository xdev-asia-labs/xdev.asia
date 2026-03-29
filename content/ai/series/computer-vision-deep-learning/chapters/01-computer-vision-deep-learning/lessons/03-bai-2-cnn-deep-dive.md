---
id: 019c9619-ab02-7002-c102-ab0200000002
title: 'Bài 2: CNN Deep Dive — ResNet, EfficientNet, MobileNet'
slug: bai-2-cnn-deep-dive
description: >-
  Kiến trúc CNN hiện đại chi tiết: ResNet (skip connections), EfficientNet
  (compound scaling), MobileNet (depthwise separable convolutions).
  ImageNet benchmark. Feature visualization.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng Computer Vision"
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: "Computer Vision với Deep Learning: Từ CNN đến Vision Transformer"
  slug: computer-vision-deep-learning
---

## Giới thiệu

Ở bài trước chúng ta đã dùng OpenCV cho image processing cơ bản. Nhưng để **phân loại ảnh**, **detect đối tượng**, hay **segment** — ta cần **Deep Learning**. Và nền tảng của tất cả là **CNN — Convolutional Neural Network**.

> 🎯 **Mục tiêu:** Hiểu sâu kiến trúc CNN hiện đại (ResNet, EfficientNet, MobileNet) — nền tảng cho YOLO, SAM, và mọi model CV.

---

## 1. CNN — Convolutional Neural Network

### 1.1 Tại sao không dùng MLP cho ảnh?

```
Ảnh 224×224×3 = 150,528 pixels
MLP: 150,528 → 1024 → 512 → 10 (classes)
     = 150,528 × 1024 = 154 TRIỆU parameters chỉ ở layer 1!

CNN: Dùng convolution → chỉ ~5 TRIỆU parameters cho cả network
     = Giảm 30× parameters! 🔥
```

**CNN giải quyết 3 vấn đề:**
1. **Parameter explosion:** Convolution kernel nhỏ (3×3), share weights
2. **Spatial relationship:** Giữ thông tin vị trí pixel
3. **Translation invariance:** Mèo ở góc trái hay phải đều detect được

### 1.2 Convolution Operation

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

### 1.3 Kiến trúc CNN tiêu chuẩn

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

## 2. ResNet — Skip Connections Thay Đổi Cuộc Chơi

### 2.1 Vấn đề: Vanishing Gradient

Mạng CNN càng **sâu** (nhiều layers) thì lý thuyết phải **tốt hơn**. Nhưng thực tế:

```
VGG-16 (16 layers):  accuracy 92.7%
VGG-20 (20 layers):  accuracy 91.5%  ← GIẢM! 😱

Lý do: gradient "biến mất" qua nhiều layers → weights ở đầu không học được
```

### 2.2 Giải pháp: Residual Connections (Skip Connections)

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

### 2.3 Bottleneck Block — ResNet-50/101/152

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

### 2.4 ResNet Variants

| Model | Layers | Params | Top-1 Acc | FPS (V100) |
|-------|--------|--------|-----------|------------|
| ResNet-18 | 18 | 11.7M | 69.8% | 1200 |
| ResNet-34 | 34 | 21.8M | 73.3% | 800 |
| **ResNet-50** | 50 | **25.6M** | **76.1%** | **600** |
| ResNet-101 | 101 | 44.5M | 77.4% | 350 |
| ResNet-152 | 152 | 60.2M | 78.3% | 250 |

> **💡 Trong thực tế:** ResNet-50 là lựa chọn phổ biến nhất — cân bằng tốt accuracy/speed.

---

## 3. EfficientNet — Compound Scaling

### 3.1 Ý tưởng: Scale đúng cách

Trước EfficientNet, người ta scale CNN bằng 1 trong 3 cách:
- **Width scaling:** Tăng số channels (wider)
- **Depth scaling:** Thêm layers (deeper)
- **Resolution scaling:** Dùng ảnh lớn hơn (higher res)

EfficientNet **scale cả 3 cùng lúc** theo tỉ lệ tối ưu:

```
depth = α^φ    (sâu hơn)
width = β^φ    (rộng hơn)
resolution = γ^φ  (ảnh to hơn)

Constraint: α × β² × γ² ≈ 2
```

### 3.2 MBConv Block — Building block

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

### 3.3 EfficientNet Variants

| Model | Params | Top-1 Acc | Input Size |
|-------|--------|-----------|------------|
| EfficientNet-B0 | 5.3M | 77.1% | 224 |
| EfficientNet-B1 | 7.8M | 79.1% | 240 |
| EfficientNet-B2 | 9.2M | 80.1% | 260 |
| EfficientNet-B3 | 12M | 81.6% | 300 |
| EfficientNet-B4 | 19M | 82.9% | 380 |
| **EfficientNetV2-S** | **21.5M** | **83.9%** | **384** |
| EfficientNetV2-M | 54M | 85.1% | 480 |

> **💡 Nhận xét:** EfficientNet-B0 chỉ **5.3M params** nhưng accuracy **vượt** ResNet-50 (25.6M params)! Hiệu quả hơn 5×.

---

## 4. MobileNet — Siêu nhẹ cho Mobile

### 4.1 Depthwise Separable Convolution

Bí quyết của MobileNet: **tách** standard convolution thành 2 bước:

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

### 4.2 MobileNet Variants

| Model | Params | Top-1 Acc | Latency (CPU) | Use case |
|-------|--------|-----------|--------------|----------|
| MobileNetV2 | 3.4M | 72.0% | 75ms | Mobile apps |
| **MobileNetV3-Small** | **2.5M** | **67.4%** | **15ms** | **IoT, edge** |
| MobileNetV3-Large | 5.4M | 75.2% | 50ms | Mobile apps |

---

## 5. Hands-on: Sử dụng Pretrained Models

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

### 5.1 So sánh nhiều models

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

## 6. Feature Visualization — CNN "nhìn thấy" gì?

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

> **💡 Observation:** Layer đầu detect **edges, textures**. Layer giữa detect **patterns, parts**. Layer cuối detect **objects, concepts**.

---

## Tóm tắt

| Model | Ý tưởng chính | Params | Khi nào dùng |
|-------|------|--------|-------------|
| **ResNet** | Skip Connections | 25.6M (ResNet-50) | Backbone mạnh, đa dụng |
| **EfficientNet** | Compound Scaling | 5.3M (B0) | Accuracy cao, ít params |
| **MobileNet** | Depthwise Separable | 2.5M (V3-S) | Mobile, Edge, IoT |

**Cách chọn:**
```
Accuracy quan trọng nhất → EfficientNet-B4/B5
Cân bằng speed/accuracy  → EfficientNet-B0 hoặc ResNet-50
Mobile/Edge deployment   → MobileNetV3
Backbone cho detection   → ResNet-50 + FPN
```

## Bài tập tổng hợp

1. **Model Comparison:** Chạy benchmark 4 models (ResNet-18, ResNet-50, EfficientNet-B0, MobileNetV3) trên 20 ảnh. So sánh accuracy và inference time.
2. **Feature Viz:** Visualize feature maps tất cả layers của EfficientNet-B0. So sánh với ResNet — khác nhau thế nào?
3. **Custom Block:** Implement ResidualBlock và BottleneckBlock từ đầu (không dùng torchvision). Test bằng random input.
4. **Parameter Counter:** Viết function đếm params cho từng layer. Layer nào chiếm nhiều params nhất trong ResNet-50?

> **Bài tiếp theo:** Transfer Learning — cách dùng model đã huấn luyện sẵn (pretrained) để giải quyết bài toán riêng của bạn với ít data.
