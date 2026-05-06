---
id: 019d8b33-bb15-7015-c015-ee1500000015
title: 第 15 課：Capstone — 建構端對端醫療 AI 管道
slug: bai-15-capstone-medical-ai
description: 最終項目：X 光分類系統或臨床 NLP 流程。從資料處理到部署均符合法規。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 14
section_title: 第 4 部分：生產與合規性
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: 健康與醫療保健中的人工智慧：實戰應用
  slug: ai-trong-y-te-healthcare
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：Capstone — 建構醫療 AI</tspan>
      <tspan x="60" dy="42">端對端管道</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">健康與醫療保健中的人工智慧：實戰應用</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：生產與合規性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

> 這是本系列的最後一課。您將建立一個完整的醫療人工智慧系統，從原始 DICOM → 臨床 API——整合第 1 課到第 14 課的所有知識。

---

## Capstone 專案：胸部 X 光人工智慧系統

**目標**：建立端對端胸部X光分析系統：
1. 從 PACS 攝取 DICOM（模擬）
2. 預處理（加窗、標準化）
3. 將 14 種病理分類 (CheXpert)
4. 產生 Grad-CAM 熱圖
5. 透過符合 HIPAA 的 REST API 提供服務
6. 具有漂移偵測功能的監視器

**堆疊**：PyTorch + FastAPI + Docker + MLflow

---

## 第一階段：資料管道

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

## 第 2 階段：模型架構

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

## 第 3 階段：訓練管道

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

## 第四階段：評估

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

## 第 5 階段：API 整合（來自第 14 課）

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

## 結論係列

恭喜您 - 您已完成 **健康與醫療保健中的人工智慧** 系列！

### 你學到了什麼：

|部分|主題 |技能 |
|--------|--------|--------|
|第 1 部分 |平台| DICOM、FHIR、醫療資料預處理 |
|第 2 部分 |醫學影像 | CNN、U-Net、YOLO、WSI 分析 |
|第 3 部分 |臨床人工智慧 | NLP、藥物發現 GNN、基因組學 |
|第 4 部分 |生產|聯邦學習、XAI、FDA、MLOps |
|頂點|端對端|從 DICOM 到 API 的完整系統 |

### 下一步：

1. **Kaggle 競賽**：RSNA Pneumonia、PadChest、CheXpert
2. **資料集**：MIMIC-IV、PhysioNet、英國生物銀行
3. **會議**：MICCAI、NeurIPS 醫學影像研討會
4. **認證**：AWS Healthcare、GCP Healthcare API
5. **開源**：為 monai、nnU-Net、medperf 做出貢獻

---

## 最終頂點任務

**最低要求**（被視為完成的系列）：

1. 訓練 CheXpert 模型，使其在驗證集上的 AUC ≥ 0.80。
2. 使用 Docker 部署 API。使用 10 個 X 光 DICOM 樣本進行測試。
3. 為每個預測產生 Grad-CAM。覆蓋到原始影像。
4. 新增漂移偵測：比較 100 個請求與驗證集後的預測置信度分佈。
5. 寫一張簡單的模型卡（1 頁）：預期用途、績效指標、限制、道德考量。

**獎金（高級）：**
- 使用 ViT-B/16（視覺變壓器）進行微調。與 DenseNet-121 進行比較。
- 實作聯合版本：使用 CheXpert 子集模擬 3 家醫院。
- 將結果提交至 CheXpert 排行榜。
