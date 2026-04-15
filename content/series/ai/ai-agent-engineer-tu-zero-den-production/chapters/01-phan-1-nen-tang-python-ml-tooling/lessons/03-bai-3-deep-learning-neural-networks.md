---
id: 019e0a01-bb03-7001-c001-ee0300000001
title: "Bài 3: Deep Learning & Neural Networks Essentials"
slug: bai-3-deep-learning-neural-networks
description: >-
  Neural networks fundamentals. PyTorch basics. CNN, RNN overview. Training loop, loss functions, optimizers. GPU training. Transfer learning concepts. Model serialization.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng — Python, ML & AI Tooling"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **Nếu ML truyền thống là "bạn tự chọn features", thì Deep Learning là "model tự học features từ raw data".** Neural networks là nền tảng cho mọi LLM hiện đại. Bài này cho bạn PyTorch vững chắc: từ tensor đến training loop, CNN/RNN overview đến transfer learning — chuẩn bị cho Bài 4 (NLP & Transformers).

## 1. Từ ML truyền thống đến Deep Learning

ML truyền thống hoạt động tốt với **structured data** và manual features. Khi data là ảnh, văn bản, âm thanh — bạn cần Deep Learning.

```text
ML truyền thống:  Raw Data ──▶ [Feature Engineering] ──▶ Model ──▶ Output
                                 (con người thiết kế)
Deep Learning:    Raw Data ──▶ [Neural Network] ──▶ Output
                                (tự học features qua nhiều layers)
```

| Tiêu chí | ML truyền thống | Deep Learning |
|----------|-----------------|---------------|
| Data type | Structured (tabular) | Unstructured (image, text, audio) |
| Data size | 100 — 10K samples | 10K — millions |
| Feature engineering | Thủ công, cần domain knowledge | Tự động qua layers |
| Interpretability | Cao (SHAP, decision tree) | Thấp (black box) |
| Compute | CPU đủ | Cần GPU/TPU |
| Tools | scikit-learn, XGBoost | PyTorch, TensorFlow |

> **Tip thực tế:** Với tabular data, XGBoost vẫn thắng DL trong hầu hết cases. Chỉ dùng neural network khi data unstructured hoặc cần end-to-end learning.

### 1.1. Setup môi trường

```bash
pip install torch torchvision torchaudio
# CUDA 12.x: thêm --index-url https://download.pytorch.org/whl/cu121
```

```python
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader
import torchvision.transforms as transforms

device = torch.device(
    "cuda" if torch.cuda.is_available()
    else "mps" if torch.backends.mps.is_available()
    else "cpu"
)
print(f"Using device: {device}")
```

## 2. Neural Network Fundamentals

### 2.1. Neuron, Layers, Architecture

Một **neuron**: nhận inputs → nhân weights → cộng bias → qua activation function.

```text
x₁ ──w₁──┐
          ├──▶ Σ(wᵢxᵢ + b) ──▶ f(z) ──▶ output
x₂ ──w₂──┤      (linear)     (activation)
          │
x₃ ──w₃──┘
```

**Neural network** = chồng nhiều layers. Mỗi layer có nhiều neurons. Input → Hidden layers → Output.

### 2.2. Activation Functions

Activation tạo **non-linearity** — không có nó, network chỉ là phép nhân ma trận.

| Activation | Công thức | Dùng khi | Note |
|-----------|-----------|----------|------|
| **ReLU** | max(0, x) | Hidden layers (default) | Nhanh, có thể dead neurons |
| **GELU** | x·Φ(x) | Transformer models | Dùng trong BERT/GPT |
| **Sigmoid** | 1/(1+e⁻ˣ) | Binary output | Output ∈ (0,1) |
| **Softmax** | eˣⁱ/Σeˣʲ | Multi-class output | Probability distribution |

```python
import torch.nn.functional as F
x = torch.tensor([-2.0, -1.0, 0.0, 1.0, 2.0])
print(f"ReLU:    {F.relu(x)}")         # [0, 0, 0, 1, 2]
print(f"Sigmoid: {torch.sigmoid(x)}")  # [0.12, 0.27, 0.5, 0.73, 0.88]
```

> **Tip thực tế:** 95% cases → **ReLU** cho hidden layers. **GELU** cho Transformer. **Sigmoid** cho binary output, **Softmax** cho multi-class.

## 3. PyTorch from Scratch

### 3.1. Tensors

**Tensor** = mảng đa chiều, giống NumPy nhưng chạy trên GPU và hỗ trợ autograd.

```python
a = torch.tensor([1.0, 2.0, 3.0])       # từ list
b = torch.randn(3, 4)                    # random normal 3×4
c = torch.from_numpy(np.array([1, 2]))   # từ NumPy (zero-copy)

x, y = torch.randn(3, 4), torch.randn(3, 4)
z = x + y              # element-wise
m = x @ y.T            # matrix multiply
s = x.sum(dim=1)       # sum theo axis
t_gpu = x.to(device)   # chuyển lên GPU
```

### 3.2. Autograd

**Autograd** tự động tính gradient cho backpropagation:

```python
x = torch.tensor([2.0, 3.0], requires_grad=True)
y = x ** 2 + 3 * x
loss = y.sum()
loss.backward()
print(x.grad)  # tensor([7., 9.])  — dy/dx = 2x + 3
```

### 3.3. nn.Module

Mọi model PyTorch kế thừa `nn.Module`:

```python
class SimpleClassifier(nn.Module):
    def __init__(self, input_dim, hidden_dim, output_dim):
        super().__init__()
        self.network = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(hidden_dim, hidden_dim // 2),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(hidden_dim // 2, output_dim),
        )

    def forward(self, x):
        return self.network(x)

model = SimpleClassifier(784, 256, 10)
total_params = sum(p.numel() for p in model.parameters())
print(f"Total parameters: {total_params:,}")  # 235,146
```

## 4. Training Loop chi tiết

Training loop — **trái tim** của deep learning — luôn quy về 5 bước:

```text
for each epoch:
  for each batch:
    1. Forward:  output = model(data)
    2. Loss:     loss = criterion(output, target)
    3. Zero:     optimizer.zero_grad()
    4. Backward: loss.backward()
    5. Update:   optimizer.step()
```

### 4.1. MNIST Example — Full Loop

```python
from torchvision import datasets, transforms

transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.1307,), (0.3081,)),
])
train_dataset = datasets.MNIST("./data", train=True, download=True, transform=transform)
test_dataset = datasets.MNIST("./data", train=False, transform=transform)
train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=1000)

class MNISTNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.net = nn.Sequential(
            nn.Flatten(),
            nn.Linear(28*28, 512), nn.ReLU(), nn.Dropout(0.2),
            nn.Linear(512, 256), nn.ReLU(), nn.Dropout(0.2),
            nn.Linear(256, 10),
        )
    def forward(self, x):
        return self.net(x)

model = MNISTNet().to(device)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=1e-3)

def train_one_epoch(model, loader, criterion, optimizer):
    model.train()
    total_loss, correct, total = 0, 0, 0
    for data, target in loader:
        data, target = data.to(device), target.to(device)
        output = model(data)
        loss = criterion(output, target)
        optimizer.zero_grad()   # QUAN TRỌNG — quên = gradients accumulate
        loss.backward()
        optimizer.step()
        total_loss += loss.item()
        correct += output.argmax(1).eq(target).sum().item()
        total += target.size(0)
    return total_loss / len(loader), 100.0 * correct / total

def evaluate(model, loader, criterion):
    model.eval()
    total_loss, correct, total = 0, 0, 0
    with torch.no_grad():
        for data, target in loader:
            data, target = data.to(device), target.to(device)
            output = model(data)
            total_loss += criterion(output, target).item()
            correct += output.argmax(1).eq(target).sum().item()
            total += target.size(0)
    return total_loss / len(loader), 100.0 * correct / total

for epoch in range(1, 11):
    t_loss, t_acc = train_one_epoch(model, train_loader, criterion, optimizer)
    v_loss, v_acc = evaluate(model, test_loader, criterion)
    print(f"Epoch {epoch:2d} | Train {t_loss:.4f} ({t_acc:.1f}%) | Val {v_loss:.4f} ({v_acc:.1f}%)")
```

> **Tip thực tế:** `val_loss` tăng + `train_loss` giảm → **overfitting**. Giảm model size, tăng dropout, hoặc dùng early stopping.

## 5. Loss Functions — Chọn đúng loss

| Loss | Dùng cho | Input → Target | PyTorch |
|------|----------|----------------|---------|
| **CrossEntropyLoss** | Multi-class | Raw logits → Class index | `nn.CrossEntropyLoss()` |
| **BCEWithLogitsLoss** | Binary / Multi-label | Raw logits → 0/1 | `nn.BCEWithLogitsLoss()` |
| **MSELoss** | Regression | Predicted → Actual | `nn.MSELoss()` |
| **HuberLoss** | Regression (robust) | Predicted → Actual | `nn.HuberLoss()` |

```python
# CrossEntropy — KHÔNG cần softmax trước đó (đã tích hợp)
logits = torch.tensor([[2.0, 1.0, 0.1]])
target = torch.tensor([0])
print(nn.CrossEntropyLoss()(logits, target))  # 0.4170

# BCEWithLogits — binary/multi-label
logits_bin = torch.tensor([0.5, -1.0, 2.0])
target_bin = torch.tensor([1.0, 0.0, 1.0])
print(nn.BCEWithLogitsLoss()(logits_bin, target_bin))  # 0.3364
```

> **Tip thực tế:** `CrossEntropyLoss` đã bao gồm softmax. KHÔNG dùng `softmax` trong `forward()` rồi truyền vào — sẽ double softmax, train cực chậm.

## 6. Optimizers — SGD, Adam, AdamW

| Optimizer | Ưu điểm | Nhược điểm | Dùng khi |
|-----------|---------|------------|----------|
| **SGD+Momentum** | Generalize tốt | Hội tụ chậm, nhạy lr | Vision (CNN) |
| **Adam** | Hội tụ nhanh, ít tuning | Generalize kém hơn SGD | Default/prototype |
| **AdamW** | Fix weight decay, best cho Transformers | — | **Best default** |

```python
optimizer_sgd = optim.SGD(model.parameters(), lr=0.01, momentum=0.9, weight_decay=1e-4)
optimizer_adam = optim.Adam(model.parameters(), lr=1e-3)
optimizer_adamw = optim.AdamW(model.parameters(), lr=5e-5, weight_decay=0.01)

# Learning rate schedulers
scheduler = optim.lr_scheduler.CosineAnnealingLR(optimizer_adamw, T_max=100)
```

```text
Optimizer Decision Tree:
├── Vision (CNN)            ──▶ SGD + Momentum (lr=0.01-0.1)
├── NLP / Transformer       ──▶ AdamW (lr=1e-5 to 5e-5)
├── General / Prototype     ──▶ Adam (lr=1e-3)
└── Fine-tuning pretrained  ──▶ AdamW + low lr
```

> **Tip thực tế:** Không biết chọn gì → **AdamW lr=1e-3, weight_decay=0.01**. Safe default cho gần như mọi bài toán.

## 7. CNN Overview — Convolutional Neural Networks

CNN chuyên xử lý **dữ liệu spatial** (ảnh, video) bằng **convolution filters** trượt qua input.

```text
Input(3×32×32) ──▶ Conv+BN+ReLU ──▶ Pool ──▶ Conv+BN+ReLU ──▶ Pool ──▶ FC
                   (3→32, 3×3)     (2×2)    (32→64, 3×3)     (2×2)   (→10)
Feature maps: spatial giảm dần, channels tăng dần
```

| Component | Vai trò | PyTorch |
|-----------|---------|---------|
| **Conv2d** | Trích xuất local features | `nn.Conv2d(in, out, kernel_size)` |
| **MaxPool2d** | Giảm spatial size | `nn.MaxPool2d(2)` |
| **BatchNorm2d** | Stabilize training | `nn.BatchNorm2d(channels)` |

```python
class SimpleCNN(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 32, 3, padding=1), nn.BatchNorm2d(32), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(32, 64, 3, padding=1), nn.BatchNorm2d(64), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(64, 128, 3, padding=1), nn.BatchNorm2d(128), nn.ReLU(),
            nn.AdaptiveAvgPool2d(1),
        )
        self.classifier = nn.Sequential(nn.Flatten(), nn.Dropout(0.5), nn.Linear(128, num_classes))

    def forward(self, x):
        return self.classifier(self.features(x))
```

### 7.1. ResNet — Skip Connections

**ResNet** giải quyết vanishing gradient bằng skip connections: `output = F(x) + x`. Gradient chảy trực tiếp qua identity path, cho phép train networks rất sâu (50-152 layers).

> **Tip thực tế:** Production không ai viết CNN từ đầu. Dùng **pretrained ResNet, EfficientNet** rồi fine-tune (xem phần 9).

## 8. RNN/LSTM/GRU — Sequence Modeling

RNN xử lý **dữ liệu tuần tự** (text, time series). Mỗi step nhận input + hidden state từ step trước.

```text
x₁       x₂       x₃       x₄
 │        │        │        │
 ▼        ▼        ▼        ▼
[RNN]─h₁─[RNN]─h₂─[RNN]─h₃─[RNN]─h₄──▶ output

Vấn đề: vanishing gradient khi sequence dài → LSTM/GRU
```

| Model | Gates | Ưu điểm | Use case |
|-------|-------|---------|----------|
| **RNN** | Không | Nhanh, đơn giản | Short sequences |
| **LSTM** | 3 (forget, input, output) | Long-range dependencies | Text, speech |
| **GRU** | 2 (reset, update) | Gần bằng LSTM, nhanh hơn | Trade-off tốc độ |

```python
class LSTMClassifier(nn.Module):
    def __init__(self, vocab_size, embed_dim, hidden_dim, output_dim):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim)
        self.lstm = nn.LSTM(embed_dim, hidden_dim, num_layers=2,
                            batch_first=True, dropout=0.3, bidirectional=True)
        self.fc = nn.Linear(hidden_dim * 2, output_dim)
        self.dropout = nn.Dropout(0.3)

    def forward(self, x):
        embedded = self.dropout(self.embedding(x))
        _, (hidden, _) = self.lstm(embedded)
        hidden_cat = torch.cat([hidden[-2], hidden[-1]], dim=1)
        return self.fc(self.dropout(hidden_cat))
```

> **Tip thực tế:** LSTM/GRU đã bị **Transformers** thay thế gần hoàn toàn trong NLP. Bài 4 sẽ đi sâu vào Transformers — kiến trúc đằng sau mọi LLM hiện đại.

## 9. Transfer Learning

Lấy model đã train trên dataset lớn → **fine-tune** cho bài toán cụ thể. Đây là cách hiệu quả nhất cho production.

| Strategy | Khi nào | Cách làm |
|----------|--------|---------|
| **Feature Extraction** | Data ít (<1K), domain tương tự | Freeze backbone, chỉ train FC mới |
| **Partial Fine-tuning** | Data trung bình (1K-10K) | Unfreeze vài layers cuối + FC |
| **Full Fine-tuning** | Data nhiều (>10K), domain khác | Unfreeze all, lr thấp |

```python
from torchvision import models

weights = models.ResNet18_Weights.IMAGENET1K_V1
model_tl = models.resnet18(weights=weights)

# Strategy 1: Feature Extraction — freeze backbone
for param in model_tl.parameters():
    param.requires_grad = False

num_features = model_tl.fc.in_features  # 512
model_tl.fc = nn.Sequential(nn.Dropout(0.3), nn.Linear(num_features, 5))
model_tl = model_tl.to(device)
optimizer = optim.Adam(model_tl.fc.parameters(), lr=1e-3)

# Strategy 2: Fine-tuning — unfreeze last layers, differential lr
for name, param in model_tl.named_parameters():
    if "layer4" in name or "fc" in name:
        param.requires_grad = True

optimizer = optim.AdamW([
    {"params": model_tl.layer4.parameters(), "lr": 1e-5},
    {"params": model_tl.fc.parameters(), "lr": 1e-3},
], weight_decay=0.01)

# Data preprocessing PHẢI dùng transform giống lúc pretrain
preprocess = weights.transforms()
```

> **Tip thực tế:** Transfer Learning là kỹ thuật quan trọng nhất. Phần 2 sẽ dùng chính kỹ thuật này để fine-tune LLMs (BERT, GPT).

## 10. GPU Training & Performance

### 10.1. DataLoader hiệu quả

```python
train_loader = DataLoader(
    train_dataset,
    batch_size=64,
    shuffle=True,
    num_workers=4,           # parallel data loading
    pin_memory=True,         # tăng tốc CPU→GPU transfer
    persistent_workers=True,
)
```

### 10.2. Mixed Precision (AMP)

Dùng float16 cho phần lớn computation → **tăng tốc 2-3x**, giảm VRAM ~50%:

```python
from torch.amp import autocast, GradScaler

scaler = GradScaler("cuda")
for data, target in train_loader:
    data, target = data.to(device), target.to(device)
    with autocast("cuda"):
        output = model(data)
        loss = criterion(output, target)
    optimizer.zero_grad()
    scaler.scale(loss).backward()
    scaler.step(optimizer)
    scaler.update()
```

| Kỹ thuật | Speedup | Khi nào dùng |
|----------|---------|-------------|
| Mixed Precision (AMP) | 2-3x, ~50% VRAM | Luôn luôn trên GPU |
| `pin_memory=True` | 10-30% transfer | Khi dùng GPU |
| `num_workers > 0` | 2-4x loading | Khi CPU idle |
| `torch.compile()` | 10-40% | PyTorch 2.0+ |

> **Tip thực tế:** Luôn bật `torch.amp` + `pin_memory=True` trên GPU — "free performance", không ảnh hưởng accuracy.

## 11. Model Saving/Loading & Export

### 11.1. state_dict (chuẩn PyTorch)

```python
# Save checkpoint (training continuation)
torch.save({
    "model_state_dict": model.state_dict(),
    "optimizer_state_dict": optimizer.state_dict(),
    "epoch": epoch,
}, "checkpoint.pth")

# Load
ckpt = torch.load("checkpoint.pth", map_location=device, weights_only=True)
model.load_state_dict(ckpt["model_state_dict"])

# Production: chỉ save weights
torch.save(model.state_dict(), "model_weights.pth")
```

### 11.2. TorchScript & ONNX Export

```python
# TorchScript — portable, chạy không cần Python
model.eval()
scripted = torch.jit.script(model)
scripted.save("model_scripted.pt")

# ONNX — cross-framework (ONNX Runtime, TensorRT, CoreML)
dummy = torch.randn(1, 1, 28, 28).to(device)
torch.onnx.export(model, dummy, "model.onnx",
    input_names=["input"], output_names=["output"],
    dynamic_axes={"input": {0: "batch"}, "output": {0: "batch"}},
    opset_version=17)
```

| Format | Use Case | Portable |
|--------|----------|----------|
| `state_dict` (.pth) | Training, PyTorch inference | PyTorch only |
| TorchScript (.pt) | Production, mobile, C++ | Không cần Python |
| ONNX (.onnx) | Cross-framework deploy | Mọi framework |
| TensorRT | NVIDIA GPU inference tối ưu | NVIDIA only, nhanh nhất |

> **Tip thực tế:** Workflow phổ biến: train PyTorch → save `state_dict` → export ONNX → deploy bằng ONNX Runtime.

## Tổng kết

- ✅ **Neural Network fundamentals**: neurons, layers, activations (ReLU, GELU, Sigmoid)
- ✅ **PyTorch core**: tensors, autograd, `nn.Module` — framework chính cho DL
- ✅ **Training loop**: forward → loss → zero_grad → backward → step
- ✅ **Loss functions**: CrossEntropy, BCE, MSE — chọn đúng loss cho đúng task
- ✅ **Optimizers**: AdamW là safe default, SGD cho vision fine-tuning
- ✅ **CNN**: Conv2d, pooling, ResNet skip connections
- ✅ **RNN/LSTM/GRU**: sequence modeling — bước đệm trước Transformers
- ✅ **Transfer Learning**: pretrained + fine-tuning — kỹ thuật quan trọng nhất
- ✅ **GPU training**: AMP, DataLoader, pin_memory
- ✅ **Model export**: state_dict, TorchScript, ONNX

**Tiếp theo → Bài 4: NLP & Transformer Architecture** — Self-Attention, kiến trúc Transformer, BERT/GPT foundations. Nền tảng trực tiếp để hiểu LLMs trong Phần 2.

## Bài tập

### Bài tập 1: MNIST CNN (Cơ bản)

Train CNN cho MNIST, đạt accuracy > 99%:
- Dùng `SimpleCNN` từ phần 7, thêm learning rate scheduler
- Bật mixed precision (AMP), save best checkpoint theo `val_accuracy`

### Bài tập 2: Transfer Learning CIFAR-10 (Trung bình)

Fine-tune ResNet-18 cho CIFAR-10:
1. Thử cả feature extraction vs fine-tuning, so sánh accuracy + training time
2. Export model tốt nhất sang ONNX

### Bài tập 3: LSTM Text Classification (Nâng cao)

Build bidirectional LSTM cho sentiment analysis (IMDB dataset):
1. Implement tokenization + vocabulary building
2. So sánh với simple MLP trên cùng data
3. Bonus: thử GRU — so sánh speed vs accuracy

### Bài tập 4: Training Dashboard (Thực chiến)

Training script hoàn chỉnh với Tensorboard logging, early stopping (patience=5), model checkpointing, config bằng `dataclass`.
