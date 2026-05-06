---
id: 019d8b33-bb04-7004-c004-ee0400000004
title: 第 4 課：用於醫學影像分類的 CNN
slug: bai-4-cnn-medical-classification
description: 用於 X 光分類的遷移學習 ResNet/EfficientNet。 CheXpert 資料集。多標籤分類。 Grad-CAM 可解釋性。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 3
section_title: 第 2 部分：醫學影像 AI — 醫療保健電腦視覺
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: 健康與醫療保健中的人工智慧：實戰應用
  slug: ai-trong-y-te-healthcare
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1434" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1434)"/>

  <!-- Decorations -->
  <g>
    <circle cx="672" cy="206" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="744" cy="178" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="816" cy="150" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="888" cy="122" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="960" cy="94" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="106" x2="1100" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="136" x2="1050" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="941.507041555162,85.5 941.507041555162,126.5 906,147 870.492958444838,126.5 870.492958444838,85.50000000000001 906,65" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：醫學影像 CNN</tspan>
      <tspan x="60" dy="42">分類</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">健康與醫療保健中的人工智慧：實戰應用</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：醫學影像 AI — 醫療保健電腦視覺</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

> 本文將從頭到尾訓練一個真實的 X 射線分類模型 - 遷移學習、多標籤、臨床準確評估和 Grad-CAM，以便醫生可以信任結果。

---

## 1. 為什麼遷移學習在醫學影像中是強制性的

**悖論**：模型需要數百萬張圖像才能很好地學習，但醫療保健只有幾千張圖像。

**解決方案**：從 ImageNet 進行遷移學習 — 模型從 120 萬張自然圖像中學習基本模式（邊緣、紋理、形狀）。醫療保健只需要微調不同之處。

```
ImageNet features → Medical features (fine-tuning)

Low-level (giữ nguyên):  Edges, corners, basic textures
Mid-level (fine-tune nhẹ): Complex patterns, shapes
High-level (fine-tune nhiều): Domain-specific: infiltrates, nodules, effusions
```

**證據**：CheXNet（史丹佛 2017 年）使用 DenseNet-121 預訓練 ImageNet → AUC 0.900，112K 胸部 X 射線，超過 4 名放射科醫生。

---

## 2. 資料集：CheXpert

**CheXpert** 是當今可用的最標準的胸部 X 光資料集：
- 來自 65,240 名患者的 224,316 張影像（史丹佛大學醫學）
- 14 個標籤：肺不張、心臟肥大、實質變化、水腫、心縱膈擴大、骨折、肺部病灶、肺部混濁、未發現、胸腔積水、胸膜其他、肺炎、氣胸、支撐裝置
- **不確定性標籤**：「1」（正）、「0」（負）、「-1」（不確定）

### 2.1。處理不確定性標籤—醫學的獨特問題

```python
import pandas as pd
import numpy as np

class CheXpertDataset(torch.utils.data.Dataset):
    PATHOLOGIES = [
        'No Finding', 'Enlarged Cardiomediastinum', 'Cardiomegaly',
        'Lung Opacity', 'Lung Lesion', 'Edema', 'Consolidation',
        'Pneumonia', 'Atelectasis', 'Pneumothorax', 'Pleural Effusion',
        'Pleural Other', 'Fracture', 'Support Devices'
    ]

    def __init__(
        self,
        csv_path: str,
        image_root: str,
        transform=None,
        uncertainty_strategy: str = "zeroes"  # "zeroes" | "ones" | "ignore"
    ):
        self.df = pd.read_csv(csv_path)
        self.image_root = image_root
        self.transform = transform

        # Xử lý uncertainty labels (-1)
        # Các strategies khác nhau cho kết quả khác nhau:
        #
        # "zeroes":  -1 → 0 (treat uncertain as negative) — Conservative
        # "ones":    -1 → 1 (treat uncertain as positive) — Liberal
        # "ignore":  Skip images với uncertain labels — ít data nhưng cleaner
        #
        # Literature: "U-Ones" thường tốt hơn cho Edema, Atelectasis
        # Trong thực chiến: thử cả hai, chọn theo AUC trên validation

        for col in self.PATHOLOGIES:
            if col in self.df.columns:
                if uncertainty_strategy == "zeroes":
                    self.df[col] = self.df[col].replace(-1, 0)
                elif uncertainty_strategy == "ones":
                    self.df[col] = self.df[col].replace(-1, 1)
                # Fill NaN (missing label) = 0
                self.df[col] = self.df[col].fillna(0)

    def __len__(self):
        return len(self.df)

    def __getitem__(self, idx):
        row = self.df.iloc[idx]

        # Load image
        img_path = f"{self.image_root}/{row['Path']}"
        image = Image.open(img_path).convert('RGB')

        if self.transform:
            image = self.transform(np.array(image))

        # Labels
        labels = torch.FloatTensor([row[p] for p in self.PATHOLOGIES])
        return image, labels
```

---

## 3.模型架構：DenseNet-121

```python
import torch
import torch.nn as nn
from torchvision import models
from torchvision.models import DenseNet121_Weights

class CheXpertModel(nn.Module):
    """
    DenseNet-121 pretrained ImageNet → fine-tune cho chest X-ray classification
    
    Tại sao DenseNet?
    - Dense connections: mỗi layer nhận feature maps từ MỌI layer trước
    - Gradient flow tốt hơn ResNet cho dataset nhỏ
    - Feature reuse giảm số parameters cần học
    - Trong medical imaging, nhiều features ở resolution khác nhau đều quan trọng
    """
    def __init__(self, num_classes: int = 14, dropout_rate: float = 0.5):
        super().__init__()

        # Load pretrained DenseNet-121
        backbone = models.densenet121(weights=DenseNet121_Weights.IMAGENET1K_V1)

        # Lấy tất cả layers ngoại trừ classifier gốc
        self.features = backbone.features

        # Freeze early layers (optional — thiếu data thì freeze nhiều hơn)
        # Chỉ fine-tune denseblock3 và denseblock4
        for name, param in self.features.named_parameters():
            if 'denseblock1' in name or 'denseblock2' in name:
                param.requires_grad = False  # Freeze

        # Global Average Pooling + Classifier mới
        self.classifier = nn.Sequential(
            nn.AdaptiveAvgPool2d((1, 1)),  # → (batch, 1024, 1, 1)
            nn.Flatten(),                   # → (batch, 1024)
            nn.Dropout(p=dropout_rate),
            nn.Linear(1024, 512),
            nn.ReLU(inplace=True),
            nn.Dropout(p=dropout_rate * 0.6),
            nn.Linear(512, num_classes),
            # KHÔNG thêm Sigmoid ở đây — dùng BCEWithLogitsLoss (stable hơn)
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        features = self.features(x)
        features = F.relu(features, inplace=True)
        output = self.classifier(features)
        return output

    def predict_proba(self, x: torch.Tensor) -> torch.Tensor:
        """Inference: return probabilities"""
        with torch.no_grad():
            logits = self.forward(x)
            return torch.sigmoid(logits)
```

---

## 4.多標籤分類的損失函數

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class WeightedBCEWithLogitsLoss(nn.Module):
    """
    BCEWithLogitsLoss với positive class weights để handle imbalance
    
    pos_weight[i] = #negative_samples / #positive_samples cho class i
    """
    def __init__(self, pos_weights: torch.Tensor):
        super().__init__()
        self.pos_weights = pos_weights  # Shape: (num_classes,)

    def forward(self, logits: torch.Tensor, targets: torch.Tensor) -> torch.Tensor:
        return F.binary_cross_entropy_with_logits(
            logits,
            targets,
            pos_weight=self.pos_weights.to(logits.device)
        )

def compute_pos_weights(labels_df: pd.DataFrame, pathologies: list) -> torch.Tensor:
    """Tính positive weights từ training data"""
    pos_weights = []
    for p in pathologies:
        n_pos = (labels_df[p] == 1).sum()
        n_neg = (labels_df[p] == 0).sum()
        pos_weights.append(n_neg / (n_pos + 1e-8))  # Avoid division by zero
    return torch.FloatTensor(pos_weights)
```

---

## 5. 訓練循環

```python
from torch.optim import AdamW
from torch.optim.lr_scheduler import CosineAnnealingLR
from torch.cuda.amp import GradScaler, autocast
from sklearn.metrics import roc_auc_score
import numpy as np

def train_epoch(
    model: nn.Module,
    dataloader,
    optimizer,
    criterion,
    scaler: GradScaler,
    device: str
) -> float:
    model.train()
    total_loss = 0.0

    for batch_idx, (images, labels) in enumerate(dataloader):
        images = images.to(device)
        labels = labels.to(device)

        optimizer.zero_grad()

        # Mixed Precision Training (AMP) — 2x speedup trên modern GPUs
        with autocast():
            logits = model(images)
            loss = criterion(logits, labels)

        scaler.scale(loss).backward()
        scaler.unscale_(optimizer)
        # Gradient clipping — ổn định training
        torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
        scaler.step(optimizer)
        scaler.update()

        total_loss += loss.item()

        if (batch_idx + 1) % 100 == 0:
            print(f"  Step {batch_idx+1}/{len(dataloader)}, Loss: {loss.item():.4f}")

    return total_loss / len(dataloader)

@torch.no_grad()
def evaluate(
    model: nn.Module,
    dataloader,
    device: str,
    pathologies: list
) -> dict:
    model.eval()
    all_labels = []
    all_probs = []

    for images, labels in dataloader:
        images = images.to(device)
        with autocast():
            logits = model(images)
        probs = torch.sigmoid(logits).cpu().numpy()
        all_probs.append(probs)
        all_labels.append(labels.numpy())

    all_probs = np.vstack(all_probs)   # (N, 14)
    all_labels = np.vstack(all_labels) # (N, 14)

    # Tính AUC cho từng pathology
    aucs = {}
    for i, p in enumerate(pathologies):
        unique_labels = np.unique(all_labels[:, i])
        if len(unique_labels) >= 2:  # Cần cả 0 và 1 để tính AUC
            aucs[p] = roc_auc_score(all_labels[:, i], all_probs[:, i])
        else:
            aucs[p] = None  # Skip nếu chỉ có 1 class trong batch

    mean_auc = np.mean([v for v in aucs.values() if v is not None])
    aucs["mean"] = mean_auc
    return aucs

def train_chexpert_model(
    train_csv: str,
    val_csv: str,
    image_root: str,
    epochs: int = 30,
    batch_size: int = 32,
    lr: float = 1e-4
):
    device = "cuda" if torch.cuda.is_available() else "cpu"
    print(f"Training on: {device}")

    # Datasets
    train_transform = get_training_transform(512)
    val_transform = get_validation_transform(512)

    train_dataset = CheXpertDataset(train_csv, image_root, train_transform)
    val_dataset = CheXpertDataset(val_csv, image_root, val_transform)

    # Compute class weights từ training data
    pos_weights = compute_pos_weights(train_dataset.df, CheXpertDataset.PATHOLOGIES)

    # DataLoaders
    train_loader = DataLoader(
        train_dataset,
        batch_size=batch_size,
        shuffle=True,
        num_workers=4,
        pin_memory=True
    )
    val_loader = DataLoader(
        val_dataset,
        batch_size=batch_size * 2,
        shuffle=False,
        num_workers=4,
        pin_memory=True
    )

    # Model
    model = CheXpertModel(num_classes=14).to(device)
    criterion = WeightedBCEWithLogitsLoss(pos_weights).to(device)

    # Optimizer: AdamW với weight decay
    optimizer = AdamW(
        filter(lambda p: p.requires_grad, model.parameters()),
        lr=lr,
        weight_decay=1e-4
    )
    scheduler = CosineAnnealingLR(optimizer, T_max=epochs, eta_min=1e-6)
    scaler = GradScaler()

    best_mean_auc = 0.0

    for epoch in range(epochs):
        print(f"\nEpoch {epoch+1}/{epochs}")
        train_loss = train_epoch(model, train_loader, optimizer, criterion, scaler, device)
        val_aucs = evaluate(model, val_loader, device, CheXpertDataset.PATHOLOGIES)

        print(f"  Train Loss: {train_loss:.4f}")
        print(f"  Val Mean AUC: {val_aucs['mean']:.4f}")
        for p, auc in val_aucs.items():
            if p != "mean" and auc is not None:
                print(f"    {p}: {auc:.3f}")

        # Save best model
        if val_aucs["mean"] > best_mean_auc:
            best_mean_auc = val_aucs["mean"]
            torch.save({
                "epoch": epoch,
                "model_state": model.state_dict(),
                "optimizer_state": optimizer.state_dict(),
                "best_auc": best_mean_auc,
            }, "best_chexpert_model.pt")
            print(f"  ✓ Saved best model (AUC: {best_mean_auc:.4f})")

        scheduler.step()

    print(f"\nTraining complete. Best Mean AUC: {best_mean_auc:.4f}")
```

---

## 6. Grad-CAM — 向醫生解釋

**Grad-CAM** 突出顯示模型「查看」以做出決策的圖像中的區域。這並不是一個可有可無的東西——這是醫生信任和審核人工智慧所必需的。

```python
import torch
import numpy as np
import cv2

class GradCAM:
    """
    Gradient-weighted Class Activation Mapping
    Cho thấy vùng nào trong X-ray model đang "focus" để predict pathology
    """
    def __init__(self, model: nn.Module, target_layer):
        self.model = model
        self.target_layer = target_layer
        self.gradients = None
        self.activations = None

        # Register hooks
        target_layer.register_forward_hook(self._save_activation)
        target_layer.register_backward_hook(self._save_gradient)

    def _save_activation(self, module, input, output):
        self.activations = output.detach()

    def _save_gradient(self, module, grad_input, grad_output):
        self.gradients = grad_output[0].detach()

    def generate(
        self,
        image: torch.Tensor,
        class_idx: int,
        original_image: np.ndarray
    ) -> np.ndarray:
        """
        Args:
            image: preprocessed tensor (1, 3, H, W)
            class_idx: index của pathology muốn visualize
            original_image: numpy array (H, W) để overlay
        """
        self.model.eval()
        image = image.unsqueeze(0).requires_grad_(True)

        # Forward pass
        logits = self.model(image)

        # Backward cho class cụ thể
        self.model.zero_grad()
        logits[0, class_idx].backward()

        # Compute Grad-CAM
        gradients = self.gradients  # (1, C, h, w)
        activations = self.activations  # (1, C, h, w)

        # Global average pooling của gradients
        weights = gradients.mean(dim=[2, 3], keepdim=True)  # (1, C, 1, 1)

        # Weighted combination của activation maps
        cam = (weights * activations).sum(dim=1, keepdim=True)  # (1, 1, h, w)
        cam = F.relu(cam)  # ReLU: chỉ giữ positive contributions

        # Normalize và resize về original image size
        cam = cam.squeeze().cpu().numpy()
        cam = (cam - cam.min()) / (cam.max() - cam.min() + 1e-8)
        cam = cv2.resize(cam, (original_image.shape[1], original_image.shape[0]))

        # Create heatmap overlay
        heatmap = cv2.applyColorMap((cam * 255).astype(np.uint8), cv2.COLORMAP_JET)
        overlay = cv2.addWeighted(
            cv2.cvtColor(original_image, cv2.COLOR_GRAY2BGR), 0.6,
            heatmap, 0.4,
            0
        )
        return overlay, cam

# Usage
model = CheXpertModel()
model.load_state_dict(torch.load("best_chexpert_model.pt")["model_state"])

# Target layer = denseblock4 (last dense block)
gradcam = GradCAM(model, model.features.denseblock4)

# Visualize cho 'Pleural Effusion' (index 10)
overlay, cam = gradcam.generate(
    preprocessed_tensor,
    class_idx=10,  # Pleural Effusion
    original_image=original_xray
)
# overlay là ảnh gốc + heatmap — vùng đỏ = model "nhìn" vào đó để quyết định
```

---

## 7. 根據臨床標準的評估指標

```python
from sklearn.metrics import (
    roc_auc_score, average_precision_score,
    confusion_matrix, classification_report
)
import matplotlib.pyplot as plt

def clinical_evaluation_report(
    labels: np.ndarray,      # (N, num_classes)
    probabilities: np.ndarray, # (N, num_classes)
    pathologies: list,
    threshold: float = 0.5
) -> dict:
    """
    Báo cáo đầy đủ theo chuẩn lâm sàng
    
    Metrics quan trọng trong y tế:
    - AUC-ROC: đo discrimination ability (primary metric)
    - Sensitivity (Recall): tỷ lệ phát hiện bệnh thực → quan trọng cho screening
    - Specificity: tỷ lệ xác nhận đúng người khỏe → quan trọng để tránh false alarm
    - PPV (Precision): khi AI nói "có bệnh", độ chính xác bao nhiêu?
    - NPV: khi AI nói "không có bệnh", độ chính xác bao nhiêu?
    """
    predictions = (probabilities >= threshold).astype(int)
    results = {}

    for i, p in enumerate(pathologies):
        y_true = labels[:, i]
        y_prob = probabilities[:, i]
        y_pred = predictions[:, i]

        if y_true.sum() == 0:
            continue  # Skip classes với không có positive samples

        tn, fp, fn, tp = confusion_matrix(y_true, y_pred, labels=[0, 1]).ravel()

        sensitivity = tp / (tp + fn + 1e-8)  # Recall
        specificity = tn / (tn + fp + 1e-8)
        ppv = tp / (tp + fp + 1e-8)          # Precision
        npv = tn / (tn + fn + 1e-8)

        results[p] = {
            "AUC": roc_auc_score(y_true, y_prob),
            "AUPRC": average_precision_score(y_true, y_prob),
            "Sensitivity": sensitivity,   # Cao → ít bỏ sót bệnh
            "Specificity": specificity,   # Cao → ít báo nhầm người khỏe
            "PPV": ppv,
            "NPV": npv,
            "F1": 2 * ppv * sensitivity / (ppv + sensitivity + 1e-8),
        }

    return results
```

---

## 8.總結與練習

讀完本文，您將了解：
- ✅ 從 ImageNet 遷移學習 → 醫學 X 射線
- ✅ DenseNet-121 架構以及為什麼要使用它
- ✅ 具有正類別權重的多重標籤損失
- ✅ 使用 AMP 進行訓練循環，梯度裁剪
- ✅ Grad-CAM 可解釋性
- ✅ 臨床評估：敏感性、特異性、PPV、NPV

**第5課**：U-Net－從分類到**分割**，準確繪製腫瘤邊界。

---

## 練習

1. 實施 `EfficientNet-B4` 取代 DenseNet-121。比較同一驗證集上的參數數、推理時間和 AUC。結論：哪種型號較適合量產？

2. 將不確定性策略從「零」改為「一」並重新訓練。比較 AUC 的變化情況。哪種病理學受影響最大？

3. 實施最佳閾值選擇：不使用固定的 0.5，而是根據每個單獨病理的 F1 分數在驗證集上找到最佳閾值。

## 2. 架構與原理

### 核心架構

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

## 3. 練習

### 設定

```bash
pip install torch transformers datasets
```

### 訓練管道

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

## 4. 最佳實踐

|方面|推薦|
|--------|----------------|
|數據|品質重於數量 |
|型號|從簡單開始，擴大規模 |
|培訓|監控損耗曲線|
|評價|使用適當的指標|

---

## 總結

|概念 |重點 |
|--------|-------------|
|建築|適合問題|
|培訓|仔細調整超參數 |
|評價|多個指標|
