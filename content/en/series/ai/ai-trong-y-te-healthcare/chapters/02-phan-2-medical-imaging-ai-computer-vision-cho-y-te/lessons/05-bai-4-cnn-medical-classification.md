---
id: 019d8b33-bb04-7004-c004-ee0400000004
title: 'Lesson 4: CNN for Medical Image Classification'
slug: bai-4-cnn-medical-classification
description: >-
  Transfer learning ResNet/EfficientNet for X-ray classification. CheXpert
  dataset. Multi-label classification. Grad-CAM explainability.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 2: Medical Imaging AI — Computer Vision for Healthcare'
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: 'AI in Health & Healthcare: Real Battle Applications'
  slug: ai-trong-y-te-healthcare
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: CNN for Medical Image</tspan>
      <tspan x="60" dy="42">Classification</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI in Health & Healthcare: Real Battle Applications</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Medical Imaging AI — Computer Vision for Healthcare</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> This article will train a real X-ray classification model from start to finish — transfer learning, multi-label, clinically accurate evaluation, and Grad-CAM so doctors can trust the results.

---

## 1. Why Transfer Learning is mandatory in Medical Imaging

**Paradox**: Models need millions of images to learn well, but healthcare only has a few thousand images.

**Solution**: Transfer learning from ImageNet — the model learned basic patterns (edges, textures, shapes) from 1.2 million natural images. Healthcare just needs to fine-tune what's different.

```
ImageNet features → Medical features (fine-tuning)

Low-level (giữ nguyên):  Edges, corners, basic textures
Mid-level (fine-tune nhẹ): Complex patterns, shapes
High-level (fine-tune nhiều): Domain-specific: infiltrates, nodules, effusions
```

**Evidence**: CheXNet (Stanford 2017) using DenseNet-121 pretrained ImageNet → AUC 0.900 with 112K chest X-ray, surpassing 4 radiologists.

---

## 2. Dataset: CheXpert

**CheXpert** is the most standard chest X-ray dataset available today:
- 224,316 images from 65,240 patients (Stanford Medicine)
- 14 labels: Atelectasis, Cardiomegaly, Consolidation, Edema, Enlarged Cardiomediastinum, Fracture, Lung Lesion, Lung Opacity, No Finding, Pleural Effusion, Pleural Other, Pneumonia, Pneumothorax, Support Devices
- **Uncertainty labels**: "1" (positive), "0" (negative), "-1" (uncertain)

### 2.1. Handling Uncertainty Labels — Medical's unique problem

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

## 3. Model Architecture: DenseNet-121

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

## 4. Loss Function for Multi-label Classification

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

## 5. Training Loop

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

## 6. Grad-CAM — Explained to Doctors

**Grad-CAM** highlights areas in the image that the model "looks at" to make decisions. This is not a nice-to-have — this is **required** for doctors to trust and audit the AI.

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

## 7. Evaluation Metrics according to Clinical Standards

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

## 8. Summary & Exercises

After this article, you will understand:
- ✅ Transfer learning from ImageNet → medical X-ray
- ✅ DenseNet-121 architecture and why use it
- ✅ Multi-label loss with positive class weighting
- ✅ Training loop with AMP, gradient clipping
- ✅ Grad-CAM explainability
- ✅ Clinical evaluation: sensitivity, specificity, PPV, NPV

**Lesson 5**: U-Net — from classification to **segmentation**, accurately drawing tumor boundaries.

---

## Exercises

1. Implement `EfficientNet-B4` replaces DenseNet-121. Compare the number of params, inference time and AUC on the same validation set. Conclusion: which model is more suitable for production?

2. Change the uncertainty strategy from "zeroes" to "ones" and retrain. Compare how AUC changes. Which Pathology is Most Affected?

3. Implement Optimal Threshold Selection: instead of using a fixed 0.5, find the optimal threshold on the validation set based on the F1 score for each individual pathology.

## 2. Architecture & Principles

### Core Architecture

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

## 3. Practice

### Setup

```bash
pip install torch transformers datasets
```

### Training Pipeline

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

## 4. Best Practices

| Aspect | Recommendation |
|--------|---------------|
| Data | Quality over quantity |
| Model | Start simple, scale up |
| Training | Monitor loss curves |
| Evaluation | Use appropriate metrics |

---

## Summary

| Concepts | Key Takeaway |
|--------|-------------|
| Architecture | Suitable for the problem |
| Training | Careful hyperparameter tuning |
| Evaluation | Multiple metrics |
