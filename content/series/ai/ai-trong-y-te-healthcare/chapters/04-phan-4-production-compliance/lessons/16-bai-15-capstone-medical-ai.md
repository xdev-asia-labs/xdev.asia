---
id: 019d8b33-bb15-7015-c015-ee1500000015
title: "Bài 15: Capstone — Xây dựng Medical AI Pipeline End-to-End"
slug: bai-15-capstone-medical-ai
description: >-
  Dự án tổng kết: X-ray classification system hoặc Clinical NLP pipeline. Từ data processing đến deploy tuân thủ regulations.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Production & Compliance"
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: "AI trong Y tế & Healthcare: Ứng dụng Thực chiến"
  slug: ai-trong-y-te-healthcare
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3790" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3790)"/>

  <!-- Decorations -->
  <g>
    <circle cx="740" cy="210" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1020" cy="70" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="130" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="170" x2="1100" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="200" x2="1050" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="991.650635094611,157.5 991.650635094611,182.5 970,195 948.349364905389,182.5 948.349364905389,157.5 970,145" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI &amp; ML — Bài 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 15: Capstone — Xây dựng Medical AI</tspan>
      <tspan x="60" dy="42">Pipeline End-to-End</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI trong Y tế &amp; Healthcare: Ứng dụng Thực chiến</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Production &amp; Compliance</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> Đây là bài học cuối cùng của series. Bạn sẽ xây dựng một hệ thống Medical AI hoàn chỉnh từ raw DICOM → clinical API — tích hợp tất cả kiến thức từ bài 1 đến bài 14.

---

## Capstone Project: Chest X-ray AI System

**Mục tiêu**: Xây dựng end-to-end chest X-ray analysis system:
1. Ingest DICOM từ PACS (simulated)
2. Preprocess (windowing, normalization)
3. Classify 14 pathologies (CheXpert)
4. Generate Grad-CAM heatmaps
5. Serve qua HIPAA-compliant REST API
6. Monitor với drift detection

**Stack**: PyTorch + FastAPI + Docker + MLflow

---

## Phase 1: Data Pipeline

```python
import pydicom
import numpy as np
import cv2
from pathlib import Path
import torch
from torchvision import transforms

class ChestXrayPipeline:
    """End-to-end pipeline từ DICOM → tensor cho inference."""
    
    # 14 CheXpert pathologies
    PATHOLOGIES = [
        "No Finding", "Enlarged Cardiomediastinum", "Cardiomegaly",
        "Lung Opacity", "Lung Lesion", "Edema", "Consolidation",
        "Pneumonia", "Atelectasis", "Pneumothorax", "Pleural Effusion",
        "Pleural Other", "Fracture", "Support Devices"
    ]
    
    def __init__(self):
        self.transform = transforms.Compose([
            transforms.ToPILImage(),
            transforms.Resize((320, 320)),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406],
                               std=[0.229, 0.224, 0.225])
        ])
    
    def load_dicom(self, dicom_path: str) -> np.ndarray:
        """Load DICOM và convert to normalized 8-bit grayscale."""
        ds = pydicom.dcmread(dicom_path)
        pixel_array = ds.pixel_array.astype(np.float32)
        
        # Apply rescale slope/intercept
        slope = float(getattr(ds, 'RescaleSlope', 1.0))
        intercept = float(getattr(ds, 'RescaleIntercept', 0.0))
        pixel_array = pixel_array * slope + intercept
        
        # Invert if MONOCHROME1
        photometric = getattr(ds, 'PhotometricInterpretation', 'MONOCHROME2')
        if photometric == 'MONOCHROME1':
            pixel_array = pixel_array.max() - pixel_array
        
        # Normalize to 0-255
        p2, p98 = np.percentile(pixel_array, [2, 98])
        pixel_array = np.clip(pixel_array, p2, p98)
        pixel_array = ((pixel_array - p2) / (p98 - p2) * 255).astype(np.uint8)
        
        # Apply CLAHE
        clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
        pixel_array = clahe.apply(pixel_array)
        
        # Convert to 3-channel
        image_rgb = cv2.cvtColor(pixel_array, cv2.COLOR_GRAY2RGB)
        return image_rgb
    
    def preprocess(self, image: np.ndarray) -> torch.Tensor:
        """Image → normalized tensor."""
        return self.transform(image).unsqueeze(0)
```

---

## Phase 2: Model Architecture

```python
import torch
import torch.nn as nn
from torchvision.models import densenet121, DenseNet121_Weights

class CheXpertModel(nn.Module):
    """DenseNet-121 fine-tuned cho CheXpert 14 pathologies."""
    
    def __init__(self, n_classes: int = 14, pretrained: bool = True):
        super().__init__()
        
        weights = DenseNet121_Weights.IMAGENET1K_V1 if pretrained else None
        backbone = densenet121(weights=weights)
        
        # Freeze early layers
        layers = list(backbone.features.children())
        for layer in layers[:6]:
            for param in layer.parameters():
                param.requires_grad = False
        
        self.features = backbone.features
        
        in_features = backbone.classifier.in_features
        self.classifier = nn.Sequential(
            nn.AdaptiveAvgPool2d((1, 1)),
            nn.Flatten(),
            nn.Linear(in_features, 512),
            nn.BatchNorm1d(512),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(512, n_classes)
        )
        
        # Store last conv layer for Grad-CAM
        self.last_conv = self.features[-1]
        self._activations = None
        self._gradients = None
    
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        features = self.features(x)
        return self.classifier(features)
    
    def register_hooks(self):
        """Register hooks cho Grad-CAM."""
        def save_activation(module, input, output):
            self._activations = output
        
        def save_gradient(module, grad_input, grad_output):
            self._gradients = grad_output[0]
        
        self.last_conv.register_forward_hook(save_activation)
        self.last_conv.register_backward_hook(save_gradient)


def compute_gradcam(model, image_tensor, class_idx):
    """Generate Grad-CAM heatmap."""
    model.register_hooks()
    model.eval()
    
    output = model(image_tensor)
    model.zero_grad()
    output[0, class_idx].backward()
    
    activations = model._activations.detach()
    gradients = model._gradients.detach()
    
    weights = gradients.mean(dim=[2, 3], keepdim=True)
    cam = (weights * activations).sum(dim=1, keepdim=True)
    cam = torch.relu(cam).squeeze()
    
    # Normalize
    cam = cam - cam.min()
    cam = cam / (cam.max() + 1e-8)
    
    # Upsample
    H, W = image_tensor.shape[2:]
    cam_np = cam.cpu().numpy()
    cam_resized = cv2.resize(cam_np, (W, H))
    
    return cam_resized
```

---

## Phase 3: Training Pipeline

```python
import mlflow
import mlflow.pytorch
from torch.cuda.amp import GradScaler, autocast

def train_chexpert(
    model: CheXpertModel,
    train_loader,
    val_loader,
    n_epochs: int = 30,
    lr: float = 1e-4,
    device: str = "cuda"
):
    """Production training với MLflow tracking."""
    
    with mlflow.start_run(run_name="chexpert-densenet121"):
        # Log hyperparameters
        mlflow.log_params({
            "model": "densenet121",
            "lr": lr,
            "n_epochs": n_epochs,
            "batch_size": train_loader.batch_size,
        })
        
        optimizer = torch.optim.AdamW(
            filter(lambda p: p.requires_grad, model.parameters()),
            lr=lr, weight_decay=1e-5
        )
        scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=n_epochs)
        scaler = GradScaler()
        
        # Weighted BCE: upweight positive cases
        pos_weights = compute_positive_weights(train_loader)
        criterion = nn.BCEWithLogitsLoss(pos_weight=pos_weights.to(device))
        
        best_val_auc = 0
        
        for epoch in range(n_epochs):
            model.train()
            train_losses = []
            
            for batch in train_loader:
                images = batch["image"].to(device)
                labels = batch["labels"].float().to(device)
                
                optimizer.zero_grad()
                with autocast():
                    logits = model(images)
                    loss = criterion(logits, labels)
                
                scaler.scale(loss).backward()
                scaler.unscale_(optimizer)
                nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
                scaler.step(optimizer)
                scaler.update()
                train_losses.append(loss.item())
            
            # Validation
            val_metrics = evaluate_chexpert(model, val_loader, device)
            scheduler.step()
            
            mlflow.log_metrics({
                "train_loss": np.mean(train_losses),
                "val_auc_mean": val_metrics["mean_auc"],
                **{f"val_auc_{p}": v for p, v in val_metrics["per_class_auc"].items()}
            }, step=epoch)
            
            # Save best model
            if val_metrics["mean_auc"] > best_val_auc:
                best_val_auc = val_metrics["mean_auc"]
                mlflow.pytorch.log_model(model, "best_model")
                print(f"Epoch {epoch}: New best AUC = {best_val_auc:.4f}")
        
        mlflow.log_metric("best_val_auc", best_val_auc)
        print(f"Training complete. Best val AUC: {best_val_auc:.4f}")


def compute_positive_weights(loader) -> torch.Tensor:
    """Compute class weights for imbalanced multilabel dataset."""
    label_counts = None
    total = 0
    for batch in loader:
        labels = batch["labels"].numpy()
        if label_counts is None:
            label_counts = labels.sum(axis=0)
        else:
            label_counts += labels.sum(axis=0)
        total += labels.shape[0]
    
    pos_weight = (total - label_counts) / (label_counts + 1e-6)
    return torch.tensor(pos_weight, dtype=torch.float32)
```

---

## Phase 4: Evaluation

```python
from sklearn.metrics import roc_auc_score, average_precision_score
import pandas as pd

def evaluate_chexpert(model, loader, device):
    model.eval()
    all_labels = []
    all_probs = []
    
    with torch.no_grad():
        for batch in loader:
            images = batch["image"].to(device)
            labels = batch["labels"].numpy()
            
            logits = model(images)
            probs = torch.sigmoid(logits).cpu().numpy()
            
            all_labels.append(labels)
            all_probs.append(probs)
    
    all_labels = np.concatenate(all_labels)
    all_probs = np.concatenate(all_probs)
    
    per_class_auc = {}
    for i, pathology in enumerate(ChestXrayPipeline.PATHOLOGIES):
        if all_labels[:, i].sum() > 0:
            auc = roc_auc_score(all_labels[:, i], all_probs[:, i])
            per_class_auc[pathology] = round(float(auc), 4)
    
    # Clinical metrics per pathology at threshold=0.5
    threshold = 0.5
    preds = (all_probs >= threshold).astype(int)
    
    clinical_report = []
    for i, pathology in enumerate(ChestXrayPipeline.PATHOLOGIES):
        if all_labels[:, i].sum() > 0:
            tp = ((preds[:, i] == 1) & (all_labels[:, i] == 1)).sum()
            tn = ((preds[:, i] == 0) & (all_labels[:, i] == 0)).sum()
            fp = ((preds[:, i] == 1) & (all_labels[:, i] == 0)).sum()
            fn = ((preds[:, i] == 0) & (all_labels[:, i] == 1)).sum()
            
            sensitivity = tp / (tp + fn + 1e-8)
            specificity = tn / (tn + fp + 1e-8)
            
            clinical_report.append({
                "pathology": pathology,
                "sensitivity": round(float(sensitivity), 4),
                "specificity": round(float(specificity), 4),
                "auc": per_class_auc.get(pathology, 0)
            })
    
    return {
        "per_class_auc": per_class_auc,
        "mean_auc": round(float(np.mean(list(per_class_auc.values()))), 4),
        "clinical_report": pd.DataFrame(clinical_report)
    }
```

---

## Phase 5: API Integration (từ Bài 14)

```python
from fastapi import FastAPI
import mlflow.pytorch
import io
from PIL import Image

app = FastAPI(title="CheXpert AI API v1.0")

# Load model từ MLflow
MODEL_URI = "runs:/best_run_id/best_model"
ai_model = mlflow.pytorch.load_model(MODEL_URI)
ai_model.eval()

pipeline = ChestXrayPipeline()

@app.post("/api/v1/analyze-xray")
async def analyze_xray(dicom_path: str, generate_heatmap: bool = True):
    """Analyze chest X-ray DICOM file."""
    # Load & preprocess
    image = pipeline.load_dicom(dicom_path)
    tensor = pipeline.preprocess(image).to("cuda")
    
    # Inference
    with torch.no_grad():
        logits = ai_model(tensor)
        probs = torch.sigmoid(logits).squeeze().cpu().numpy()
    
    # Format findings
    findings = []
    for i, (pathology, prob) in enumerate(zip(ChestXrayPipeline.PATHOLOGIES, probs)):
        if prob > 0.3:  # Threshold: tunable
            finding = {
                "pathology": pathology,
                "confidence": round(float(prob), 4),
                "severity": "high" if prob > 0.7 else "moderate" if prob > 0.5 else "low"
            }
            # Generate Grad-CAM for this finding
            if generate_heatmap:
                finding["heatmap"] = compute_gradcam(ai_model, tensor, i).tolist()
            findings.append(finding)
    
    return {
        "findings": sorted(findings, key=lambda x: x["confidence"], reverse=True),
        "total_pathologies_detected": len(findings),
        "disclaimer": "For clinical decision support only. Not for standalone diagnosis.",
    }
```

---

## Kết luận Series

Xin chúc mừng — bạn đã hoàn thành series **AI trong Y tế & Healthcare**!

### Những gì bạn đã học:

| Phần | Chủ đề | Kỹ năng |
|------|--------|---------|
| Phần 1 | Nền tảng | DICOM, FHIR, medical data preprocessing |
| Phần 2 | Medical Imaging | CNN, U-Net, YOLO, WSI analysis |
| Phần 3 | Clinical AI | NLP, Drug Discovery GNN, Genomics |
| Phần 4 | Production | Federated Learning, XAI, FDA, MLOps |
| Capstone | End-to-end | Full system từ DICOM đến API |

### Bước tiếp theo:

1. **Kaggle competitions**: RSNA Pneumonia, PadChest, CheXpert
2. **Datasets**: MIMIC-IV, PhysioNet, UK Biobank
3. **Conferences**: MICCAI, NeurIPS Medical Imaging Workshop
4. **Certifications**: AWS Healthcare, GCP Healthcare API
5. **Open source**: contribute vào monai, nnU-Net, medperf

---

## Bài tập Capstone Cuối

**Yêu cầu tối thiểu** (để coi là hoàn thành series):

1. Train CheXpert model đến mean AUC ≥ 0.80 trên validation set.
2. Deploy API với Docker. Test bằng 10 X-ray DICOM samples.
3. Generate Grad-CAM cho mỗi prediction. Overlay lên original image.
4. Add drift detection: compare prediction confidence distribution sau 100 requests vs validation set.
5. Viết một model card đơn giản (1 trang): intended use, performance metrics, limitations, ethical considerations.

**Bonus (nâng cao):**
- Fine-tune với ViT-B/16 (Vision Transformer). So sánh với DenseNet-121.
- Implement federated version: simulate 3 hospitals với subset CheXpert.
- Submit kết quả lên CheXpert leaderboard.
