---
id: 019e0a01-bb03-7001-c001-ee0300000001
title: 'レッスン 3: ディープラーニングとニューラル ネットワークの基礎'
slug: bai-3-deep-learning-neural-networks
description: >-
  ニューラル ネットワークの基礎。 PyTorch の基本。 CNN、RNNの概要。トレーニング ループ、損失関数、オプティマイザー。
  GPUトレーニング。転移学習の概念。モデルのシリアル化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: 基礎 — Python、ML、AI ツール'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **従来の ML が「機能を自分で選択する」ものである場合、深層学習は「モデルが生データから機能を学習する」ものです。** ニューラル ネットワークは、最新のすべての LLM の基盤です。このレッスンでは、テンソルからトレーニング ループ、CNN/RNN の概要から転移学習まで、PyTorch の強固な基礎を学びます。レッスン 4 (NLP とトランスフォーマー) の準備をします。

## 1. 従来の ML から深層学習へ

従来の ML は **構造化データ** および手動機能とうまく連携します。データが画像、テキスト、音声の場合、ディープラーニングが必要になります。

```text
ML truyền thống:  Raw Data ──▶ [Feature Engineering] ──▶ Model ──▶ Output
                                 (con người thiết kế)
Deep Learning:    Raw Data ──▶ [Neural Network] ──▶ Output
                                (tự học features qua nhiều layers)
```

|基準 |従来の ML |ディープラーニング |
|----------|---------------|---------------|
|データ型 |構造化 (表形式) |非構造化 (画像、テキスト、音声) |
|データサイズ | 100 — 10K サンプル | 10,000 — 百万 |
|特徴エンジニアリング |手動では、ドメインの知識が必要です |レイヤーを自動的に渡す |
|解釈可能性 |高 (SHAP、決定木) |低 (ブラック ボックス) |
|コンピューティング |十分な CPU | GPU/TPU が必要 |
|ツール | scikit-learn、XGBoost | PyTorch、TensorFlow |

> **実用的なヒント:** 表形式のデータでは、ほとんどの場合、XGBoost が DL を上回ります。ニューラル ネットワークは、データが構造化されていない場合、またはエンドツーエンドの学習が必要な場合にのみ使用してください。

＃＃＃１．１．環境設定

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

## 2. ニューラル ネットワークの基礎

＃＃＃２．１．ニューロン、レイヤー、アーキテクチャ

**ニューロン**: 入力を受信 → 重みを乗算 → バイアスを追加 → 活性化関数を介します。

```text
x₁ ──w₁──┐
          ├──▶ Σ(wᵢxᵢ + b) ──▶ f(z) ──▶ output
x₂ ──w₂──┤      (linear)     (activation)
          │
x₃ ──w₃──┘
```

**ニューラル ネットワーク** = 複数のレイヤーのスタック。各層には多くのニューロンがあります。入力→非表示レイヤー→出力。

＃＃＃２．２．アクティベーション関数

アクティベーションは **非線形性** を生み出します。それがなければ、ネットワークは単なる行列の乗算になります。

|アクティベーション |レシピ | | の場合に使用します。メモ |
|----------|-----------|----------|----------|
| **ReLU** |最大(0, x) |非表示レイヤー (デフォルト) |速く、ニューロンを殺すことができる |
| **ゲル** | x・Φ(x) |変圧器モデル | BERT/GPT で使用 |
| **シグモイド** | 1/(1+e⁻ˣ) |バイナリ出力 |出力 ∈ (0,1) |
| **ソフトマックス** | eˣⁱ/Σeˣʲ |マルチクラス出力 |確率分布 |

```python
import torch.nn.functional as F
x = torch.tensor([-2.0, -1.0, 0.0, 1.0, 2.0])
print(f"ReLU:    {F.relu(x)}")         # [0, 0, 0, 1, 2]
print(f"Sigmoid: {torch.sigmoid(x)}")  # [0.12, 0.27, 0.5, 0.73, 0.88]
```

> **実用的なヒント:** ケースの 95% → 隠れ層の **ReLU**。 **GELU** トランスフォーマー。バイナリ出力の場合は **Sigmoid**、マルチクラスの場合は **Softmax**。

## 3. ゼロからの PyTorch

＃＃＃３．１．テンソル

**Tensor** = 多次元配列。NumPy に似ていますが、GPU 上で実行され、autograd をサポートします。

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

＃＃＃３．２．オートグラード

**Autograd** はバックプロパゲーションの勾配を自動的に計算します。

```python
x = torch.tensor([2.0, 3.0], requires_grad=True)
y = x ** 2 + 3 * x
loss = y.sum()
loss.backward()
print(x.grad)  # tensor([7., 9.])  — dy/dx = 2x + 3
```

＃＃＃３．３． nn.モジュール

すべてのレガシー PyTorch モデル `nn.Module`:

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

## 4. 詳細なトレーニング ループ

ディープラーニングの**核心**であるトレーニング ループは、常に 5 つのステップに要約されます。

```text
for each epoch:
  for each batch:
    1. Forward:  output = model(data)
    2. Loss:     loss = criterion(output, target)
    3. Zero:     optimizer.zero_grad()
    4. Backward: loss.backward()
    5. Update:   optimizer.step()
```

＃＃＃４．１． MNIST の例 — フルループ

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

> **実用的なヒント:** `val_loss` 増加 + `train_loss` 削減 → **過学習**。モデルのサイズを小さくするか、ドロップアウトを増やすか、早期停止を使用します。

## 5. 損失関数 — 適切な損失を選択する

|損失 |用途 |入力 → ターゲット |パイトーチ |
|----------|----------|----------|----------|
| **クロスエントロピーロス** |マルチクラス |生のロジット → クラスインデックス | `nn.CrossEntropyLoss()` |
| **BCEWithLogitsLoss** |バイナリ/マルチラベル |生のロジット → 0/1 | `nn.BCEWithLogitsLoss()` |
| **MSELoss** |回帰 |予測 → 実際 | `nn.MSELoss()` |
| **ヒューバーロス** |回帰 (ロバスト) |予測 → 実際 | `nn.HuberLoss()` |

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

> **実用的なヒント:** `CrossEntropyLoss` ソフトマックスも付属。使用しないでください `softmax` で `forward()` 次に渡されます - ソフトマックスを 2 倍にし、トレーニングが非常に遅くなります。

## 6. オプティマイザー — SGD、Adam、AdamW

|オプティマイザー |利点 |デメリット | | の場合に使用します。
|----------|-----------|---------------|----------|
| **SGD+モメンタム** |よく一般化する |遅い収束、敏感な lr |ビジョン (CNN) |
| **アダム** |高速コンバージェンス、少ないチューニング | Generalize は SGD よりも悪い |デフォルト/プロトタイプ |
| **アダム** |重量減衰を修正、トランスフォーマーに最適 | — | **最良のデフォルト** |

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

> **実用的なヒント:** 何を選択すればよいかわからない → **AdamW lr=1e-3、weight_decay=0.01**。ほぼすべての問題に対して安全なデフォルト。

## 7. CNN の概要 — 畳み込みニューラル ネットワーク

CNN は、入力上でスライドする **畳み込みフィルター** を使用した **空間データ** (画像、ビデオ) の処理を専門としています。

```text
Input(3×32×32) ──▶ Conv+BN+ReLU ──▶ Pool ──▶ Conv+BN+ReLU ──▶ Pool ──▶ FC
                   (3→32, 3×3)     (2×2)    (32→64, 3×3)     (2×2)   (→10)
Feature maps: spatial giảm dần, channels tăng dần
```

|コンポーネント |役割 |パイトーチ |
|----------|-----------|----------|
| **Conv2d** |局所的な特徴を抽出する | `nn.Conv2d(in, out, kernel_size)` |
| **MaxPool2d** |空間サイズを縮小する | `nn.MaxPool2d(2)` |
| **BatchNorm2d** |トレーニングを安定させる | `nn.BatchNorm2d(channels)` |

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

＃＃＃７．１． ResNet — 接続をスキップする

**ResNet** は、スキップ接続を使用して勾配消失を解決します。 `output = F(x) + x`。勾配はアイデンティティ パスを直接流れるため、非常に深いネットワーク (50 ～ 152 層) のトレーニングが可能になります。

> **実践的なヒント:** 本番環境で CNN を最初から作成した人はいません。 **事前トレーニングされた ResNet、EfficientNet** を使用し、微調整します (パート 9 を参照)。

## 8. RNN/LSTM/GRU — シーケンス モデリング

RNN は **連続データ** (テキスト、時系列) を処理します。各ステップは、前のステップからの入力 + 非表示状態を受け取ります。

```text
x₁       x₂       x₃       x₄
 │        │        │        │
 ▼        ▼        ▼        ▼
[RNN]─h₁─[RNN]─h₂─[RNN]─h₃─[RNN]─h₄──▶ output

Vấn đề: vanishing gradient khi sequence dài → LSTM/GRU
```

|モデル |ゲイツ |利点 |使用例 |
|----------|----------|----------|----------|
| **RNN** |いいえ |速くて簡単 |短いシーケンス |
| **LSTM** | 3 (忘れ、入力、出力) |長期的な依存関係 |テキスト、音声 |
| **GRU** | 2 (リセット、更新) | LSTM とほぼ同等、より高速 |トレードオフ速度 |

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

> **実用的なヒント:** LSTM/GRU は、NLP ではほぼ完全に **Transformers** に置き換えられました。レッスン 4 では、最新の LLM の背後にあるアーキテクチャであるトランスフォーマーについて詳しく説明します。

## 9. 転移学習

大規模なデータセットでモデルをトレーニングし、特定の問題に合わせて**微調整**します。これは生産にとって最も効率的な方法です。

|戦略 |いつ |やり方 |
|----------|----------|----------|
| **特徴抽出** |データが少ない (<1K)、類似ドメイン |バックボーンを凍結し、新しい FC のみをトレーニングする |
| **部分的な微調整** |平均データ (1K-10K) |最後の数層のフリーズを解除 + FC |
| **完全な微調整** |大量のデータ (>10K)、その他のドメイン |すべて解決します、LR が低い |

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

> **実践的なヒント:** 転移学習は最も重要なテクニックです。パート 2 では、これと同じ手法を使用して LLM (BERT、GPT) を微調整します。

## 10. GPU トレーニングとパフォーマンス

### 10.1。効率的なデータローダー

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

ほとんどの計算に float16 を使用 → **速度が 2 ～ 3 倍**、VRAM が最大 50% 削減されます。

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

|エンジニアリング |スピードアップ |いつ使用するか |
|----------|----------|---------------|
|混合精度 (AMP) | 2 ～ 3 倍、VRAM 最大 50% |常に GPU を使用 |
| `pin_memory=True` | 10-30% 転送 | GPU使用時 |
| `num_workers > 0` | 2 ～ 4 倍の読み込み | CPUアイドル時 |
| `torch.compile()` | 10-40% | PyTorch 2.0+ |

> **実践的なヒント:** 常にオン `torch.amp` + `pin_memory=True` GPU 上 — 「フリーパフォーマンス」、精度には影響しません。

## 11. モデルの保存/読み込みとエクスポート

### 11.1。 state_dict (PyTorch 標準)

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

＃＃＃１１．２．トーチスクリプトと ONNX エクスポート

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

|フォーマット |使用例 |ポータブル |
|----------|----------|----------|
| `state_dict` (.pth) |トレーニング、PyTorch 推論 | PyTorch のみ |
|トーチスクリプト (.pt) |プロダクション、モバイル、C++ | Python は必要ありません |
| ONNX (.onnx) |クロスフレームワーク展開 |すべてのフレームワーク |
|テンソルRT | NVIDIA GPU に最適化された推論 | NVIDIA のみ、最速 |

> **実践的なヒント:** 一般的なワークフロー: PyTorch のトレーニング → 保存 `state_dict` → ONNX をエクスポート → ONNX ランタイムを使用して展開します。

## 概要

- ✅ **ニューラル ネットワークの基礎**: ニューロン、層、活性化 (ReLU、GELU、シグモイド)
- ✅ **PyTorch コア**: テンソル、autograd、 `nn.Module` — DL のメインフレームワーク
- ✅ **トレーニング ループ**: 前進 → 損失 → zero_grad → 逆方向 → ステップ
- ✅ **損失関数**: CrossEntropy、BCE、MSE — 適切なタスクに適切な損失を選択
- ✅ **オプティマイザー**: AdamW は安全なデフォルト、SGD はビジョンの微調整用です
- ✅ **CNN**: Conv2d、プーリング、ResNet スキップ接続
- ✅ **RNN/LSTM/GRU**: シーケンス モデリング — トランスフォーマーの前の足がかり
- ✅ **転移学習**: 事前トレーニング + 微調整 — 最も重要なテクニック
- ✅ **GPU トレーニング**: AMP、DataLoader、pin_memory
- ✅ **エクスポート モデル**: state_dict、TorchScript、ONNX

**次へ → レッスン 4: NLP とトランスフォーマー アーキテクチャ** — Self-Attendance、トランスフォーマー アーキテクチャ、BERT/GPT の基礎。第 2 部では、LLM を理解するための直接的な基礎を説明します。

## 演習

### 演習 1: MNIST CNN (基本)

MNIST 用に CNN をトレーニングし、99% 以上の精度を達成します。
- 使用する `SimpleCNN` パート 7 から、学習率スケジューラを追加します
- 混合精度 (AMP) をオンにし、それに応じて最適なチェックポイントを保存します `val_accuracy`

### 演習 2: 転移学習 CIFAR-10 (中)

CIFAR-10 用に ResNet-18 を微調整します。
1. 特徴抽出と微調整の両方を試し、精度 + トレーニング時間を比較します。
2. 最適なモデルを ONNX にエクスポートする

### 演習 3: LSTM テキスト分類 (上級)

センチメント分析用の双方向 LSTM を構築します (IMDB データセット):
1. トークン化 + 語彙構築を実装する
2. 同じデータについて単純な MLP と比較する
3. おまけ: GRU を試す — 速度と精度を比較する

### 演習 4: トレーニング ダッシュボード (実際の戦闘)

Tensorboard ロギング、早期停止 (patience=5)、モデルのチェックポイント設定、構成を備えたトレーニング スクリプトが完了しました `dataclass`。
