---
id: 019e0a01-bb03-7001-c001-ee0300000001
title: 第 3 課：深度學習與神經網路基礎知識
slug: bai-3-deep-learning-neural-networks
description: 神經網路基礎知識。 PyTorch 基礎知識。 CNN、RNN 概述。訓練循環、損失函數、最佳化器。 GPU 訓練。遷移學習概念。模型序列化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：基礎 — Python、ML 與 AI 工具
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> **如果傳統的機器學習是“你自己選擇特徵”，那麼深度學習就是“模型從原始資料中學習特徵”。 ** 神經網路是所有現代法學碩士的基礎。本課程將為您提供堅實的 PyTorch 基礎：從張量到訓練循環、CNN/RNN 概述到遷移學習 — 為第 4 課（NLP 和 Transformer）做好準備。

## 1.從傳統機器學習到深度學習

傳統的機器學習可以很好地處理**結構化資料**和手動功能。當資料是圖像、文字、音訊時，您需要深度學習。

```text
ML truyền thống:  Raw Data ──▶ [Feature Engineering] ──▶ Model ──▶ Output
                                 (con người thiết kế)
Deep Learning:    Raw Data ──▶ [Neural Network] ──▶ Output
                                (tự học features qua nhiều layers)
```

|標準|傳統機器學習 |深度學習 |
|----------|-----------------|------------------------|
|資料類型 |結構化（表格）|非結構化（圖像、文字、音訊）|
|資料大小| 100 — 10K 樣本 | 10K — 數百萬 |
|特徵工程 |手動，需要領域知識 |自動過層 |
|可解釋性|高（SHAP，決策樹）|低（黑盒子）|
|運算|足夠的CPU |需要 GPU/TPU |
|工具| scikit-learn、XGBoost | PyTorch、TensorFlow |

> **實用提示：** 對於表格數據，XGBoost 在大多數情況下仍然擊敗 DL。僅當資料非結構化或需要端到端學習時才使用神經網路。

### 1.1。環境設定

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

## 2. 神經網路基礎知識

### 2.1。神經元、層、架構

**神經元**：接收輸入→乘以權重→添加偏差→透過激活函數。

```text
x₁ ──w₁──┐
          ├──▶ Σ(wᵢxᵢ + b) ──▶ f(z) ──▶ output
x₂ ──w₂──┤      (linear)     (activation)
          │
x₃ ──w₃──┘
```

**神經網路** = 多層堆疊。每層都有許多神經元。輸入→隱藏層→輸出。

### 2.2。激活函數

活化會產生**非線性**－沒有它，網路只是矩陣乘法。

|啟動 |食譜|使用時 |筆記|
|------------|------------|----------|--------|
| **ReLU** |最大（0，x）|隱藏層（預設）|速度快，可殺死神經元|
| **格魯** | x·Φ(x) |變壓器型號|用於BERT/GPT |
| **乙狀結腸** | 1/(1+e⁻ˣ)|二進位輸出|輸出 ε (0,1) |
| **Softmax** | eˣⁱ/Σeˣʲ |多類輸出|機率分佈|

```python
import torch.nn.functional as F
x = torch.tensor([-2.0, -1.0, 0.0, 1.0, 2.0])
print(f"ReLU:    {F.relu(x)}")         # [0, 0, 0, 1, 2]
print(f"Sigmoid: {torch.sigmoid(x)}")  # [0.12, 0.27, 0.5, 0.73, 0.88]
```

> **實用提示：** 95% 的情況 → **ReLU** 用於隱藏層。 **GELU** 代表變壓器。 **Sigmoid** 用於二進位輸出，**Softmax** 用於多類別。

## 3. 從頭開始的 PyTorch

### 3.1。張量

**Tensor** = 多維數組，與 NumPy 類似，但在 GPU 上運行並支援 autograd。

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

### 3.2。自動梯度

**Autograd** 自動計算反向傳播的梯度：

```python
x = torch.tensor([2.0, 3.0], requires_grad=True)
y = x ** 2 + 3 * x
loss = y.sum()
loss.backward()
print(x.grad)  # tensor([7., 9.])  — dy/dx = 2x + 3
```

### 3.3。 nn.模組

所有舊版 PyTorch 模型 `nn.Module`:

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

## 4. 詳細的訓練循環

訓練循環－深度學習的**核心**－總是歸結為 5 個步驟：

```text
for each epoch:
  for each batch:
    1. Forward:  output = model(data)
    2. Loss:     loss = criterion(output, target)
    3. Zero:     optimizer.zero_grad()
    4. Backward: loss.backward()
    5. Update:   optimizer.step()
```

### 4.1。 MNIST 範例 — 全循環

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

> **實用技巧：** `val_loss` 增加+ `train_loss` 減少 → **過度擬合**。減小模型大小、增加 dropout 或使用提前停止。

## 5. 損失函數 — 選擇正確的損失

|損失|用於 |輸入→目標| PyTorch |
|--------|----------|----------|---------|
| **交叉熵損失** |多類別|原始 logits → 類別索引 | `nn.CrossEntropyLoss()` |
| **BCEWithLogitsLoss** |二元/多標籤|原始邏輯 → 0/1 | `nn.BCEWithLogitsLoss()` |
| **MSEL 損失** |迴歸 |預測→實際| `nn.MSELoss()` |
| **Huber損失** |迴歸（穩健）|預測→實際| `nn.HuberLoss()` |

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

> **實用技巧：** `CrossEntropyLoss` 包括softmax。請勿使用 `softmax` 在 `forward()` 然後傳入－將softmax加倍，訓練速度極慢。

## 6. 優化器 — SGD、Adam、AdamW

|優化器|優點 |缺點 |使用時 |
|------------|---------|-------------|---------|
| **新元+動量** |概括得好 |收斂速度慢，敏感lr |願景（CNN）|
| **亞當** |快速收斂，更少調整 |泛化比 SGD 更糟 |預設/原型 |
| **亞當W** |修復重量衰減，最適合變形金剛 | — | **最佳預設** |

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

> **實用提示：**不知道要選什麼→ **AdamW lr=1e-3，weight_decay=0.01**。幾乎所有問題的安全預設值。

## 7. CNN 概述 — 卷積神經網絡

CNN 專門使用在輸入上滑動的**卷積濾波器**來處理**空間資料**（影像、影片）。

```text
Input(3×32×32) ──▶ Conv+BN+ReLU ──▶ Pool ──▶ Conv+BN+ReLU ──▶ Pool ──▶ FC
                   (3→32, 3×3)     (2×2)    (32→64, 3×3)     (2×2)   (→10)
Feature maps: spatial giảm dần, channels tăng dần
```

|組件|角色 | PyTorch |
|------------|---------|---------|
| **Conv2d** |提取局部特徵 | `nn.Conv2d(in, out, kernel_size)` |
| **MaxPool2d** |縮小空間尺寸 | `nn.MaxPool2d(2)` |
| **BatchNorm2d** |穩定訓練| `nn.BatchNorm2d(channels)` |

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

### 7.1。 ResNet — 跳過連接

**ResNet** 使用跳躍連接解決梯度消失問題： `output = F(x) + x`。梯度直接流經身份路徑，允許訓練非常深的網路（50-152 層）。

> **實用提示：** 生產中沒有人從頭開始編寫 CNN。使用**預先訓練的 ResNet、EfficientNet**，然後進行微調（請參閱第 9 部分）。

## 8. RNN/LSTM/GRU — 序列建模

RNN 處理**序列資料**（文字、時間序列）。每個步驟接收上一步驟的輸入+隱藏狀態。

```text
x₁       x₂       x₃       x₄
 │        │        │        │
 ▼        ▼        ▼        ▼
[RNN]─h₁─[RNN]─h₂─[RNN]─h₃─[RNN]─h₄──▶ output

Vấn đề: vanishing gradient khi sequence dài → LSTM/GRU
```

|型號|蓋茲|優點 |使用案例 |
|--------|--------|--------|----------|
| **RNN** |沒有 |快速、簡單 |短序列|
| **LSTM** | 3（忘記、輸入、輸出）|遠端依賴 |文字、語音 |
| **格魯** | 2（重置、更新）|幾乎等於 LSTM，更快 |權衡速度|

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

> **實用提示：** LSTM/GRU 幾乎完全被 NLP 中的 **Transformers** 取代。第 4 課將深入研究 Transformers——每個現代法學碩士背後的架構。

## 9. 遷移學習

在大型資料集上訓練模型 → 針對特定問題進行**微調**。這是最有效的生產方式。

|戰略|當 |該怎麼辦|
|----------|--------|--------|
| **特徵提取** |數據很少（<1K)，相似的域 |凍結骨幹，只培養新FC |
| **部分微調** |平均資料（1K-10K）|解凍最後幾層+FC|
| **全面微調** |大量資料（>10K），其他域 |全部解凍，低lr |

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

> **實用提示：** 遷移學習是最重要的技術。第 2 部分將使用相同的技術來微調 LLM（BERT、GPT）。

## 10.GPU 訓練與效能

### 10.1。高效率的資料載入器

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

### 10.2。混合精度 (AMP)

大多數計算使用 float16 → **加速 2-3 倍**，減少 VRAM ~50%：

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

|工程|加速|何時使用 |
|----------|---------|-------------|
|混合精度 (AMP) | 2-3x，~50% VRAM |始終開啟 GPU |
| `pin_memory=True` | 10-30% 轉讓 |使用 GPU 時 |
| `num_workers > 0` | 2-4 倍載入 |當CPU空閒時|
| `torch.compile()` | 10-40% | PyTorch 2.0+ |

> **實用提示：** 永遠開啟 `torch.amp` + `pin_memory=True` 在GPU上—“自由性能”，不影響準確度。

## 11. 模型保存/載入與匯出

### 11.1。 state_dict（PyTorch 標準）

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

### 11.2。 TorchScript 和 ONNX 匯出

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

|格式|使用案例|便攜式|
|--------|----------|----------|
| `state_dict` (.pth) |訓練、PyTorch 推理 |僅 PyTorch |
| TorchScript (.pt) |生產、移動、C++ |不需要Python |
| ONNX (.onnx) | ONNX (.onnx) |跨框架部署|所有框架 |
|張量RT | NVIDIA GPU 最佳化推理 |僅限 NVIDIA，最快 |

> **實用提示：**流行工作流程：訓練 PyTorch → 儲存 `state_dict` → 匯出 ONNX → 使用 ONNX 執行時間進行部署。

## 總結

- ✅ **神經網路基礎**：神經元、層、活化（ReLU、GELU、Sigmoid）
- ✅ **PyTorch 核心**：張量、autograd、 `nn.Module` ——深度學習的主要框架
- ✅ **訓練循環**：向前→損失→zero_grad→向後→步驟
- ✅ **損失函數**：CrossEntropy、BCE、MSE — 為正確的任務選擇正確的損失
- ✅ **最佳化器**：AdamW 是安全預設值，SGD 用於視覺微調
- ✅ **CNN**：Conv2d、池化、ResNet 跳過連接
- ✅ **RNN/LSTM/GRU**：序列建模－變形金剛之前的墊腳石
- ✅ **遷移學習**：預訓練+微調－最重要的技術
- ✅ **GPU 訓練**：AMP、DataLoader、pin_memory
- ✅ **匯出模型**：state_dict、TorchScript、ONNX

**下一頁 → 第 4 課：NLP 與 Transformer 架構** — 自註意、Transformer 架構、BERT/GPT 基礎。理解第 2 部分中的法學碩士的直接基礎。

## 練習

### 練習 1：MNIST CNN（基礎）

為 MNIST 訓練 CNN，達到 > 99% 的準確率：
- 使用 `SimpleCNN` 從第 7 部分開始，新增學習率排程程序
- 開啟混合精度（AMP），相應保存最佳檢查點 `val_accuracy`

### 練習 2：遷移學習 CIFAR-10（中）

針對 CIFAR-10 微調 ResNet-18：
1. 嘗試特徵提取與微調，比較準確度+訓練時間
2. 將最佳模型匯出到ONNX

### 練習 3：LSTM 文本分類（高級）

建構用於情緒分析的雙向 LSTM（IMDB 資料集）：
1. 實作分詞+詞彙構建
2. 在相同數據上與簡單 MLP 進行比較
3. 獎勵：嘗試 GRU — 比較速度與準確性

###練習4：訓練儀表板（實戰）

訓練腳本包含 Tensorboard 日誌記錄、提前停止（耐心 = 5）、模型檢查點、配置 `dataclass`。
