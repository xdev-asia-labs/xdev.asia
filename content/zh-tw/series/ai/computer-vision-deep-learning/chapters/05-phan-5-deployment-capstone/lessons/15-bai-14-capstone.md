---
id: 019c9619-ab14-7014-c114-ab1400000014
title: 第 14 課：Capstone — 建置端對端 CV 系統
slug: bai-14-capstone
description: Capstone專案：從資料收集→訓練→最佳化→部署建置完整的電腦視覺系統。包括：資料管道、模型選擇、訓練、評估、API服務、監控。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 第 5 部分：部署與頂點
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: 深度學習的電腦視覺：從 CNN 到 Vision Transformer
  slug: computer-vision-deep-learning
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3797" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3797)"/>

  <!-- Decorations -->
  <g>
    <circle cx="838" cy="264" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1076" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="814" cy="160" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1052" cy="238" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="56" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="224" x2="1100" y2="304" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="254" x2="1050" y2="324" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1007.7749907475932,154.5 1007.7749907475932,193.5 974,213 940.2250092524068,193.5 940.2250092524068,154.5 974,135" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：Capstone－建構履歷系統</tspan>
      <tspan x="60" dy="42">端到端</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深度學習的電腦視覺：從 CNN 到 Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：部署與頂點</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

這是整個課程的總結。您將建立**一個完整的簡歷系統** - 從資料收集到部署再到生產。

> 🎯 **目標：** 建立一個系統來偵測和分類生產線上的缺陷產品（製造缺陷偵測）。

### 為什麼選擇這個項目？

```
✅ Ứng dụng thực tế đang có nhu cầu rất cao
✅ Cover hết: detection + classification + segmentation
✅ Cần optimize cho real-time (edge deployment)
✅ Cần monitoring & retraining pipeline
```

---

## 1.系統架構

```
📸 Camera Stream
    │
    ▼
┌────────────────────┐
│  Image Capture     │  ← Capture & preprocessing
│  (OpenCV/GStreamer) │
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│  Defect Detection  │  ← YOLOv8 (TensorRT)
│  (Object Detection)│
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│  Classification    │  ← MobileNet (crop → classify)
│  (Defect Type)     │
└────────┬───────────┘
         │
         ▼
┌─────────┬──────────┐
│ API     │ Dashboard│  ← FastAPI + WebSocket
│ Server  │ (React)  │
└─────────┴──────────┘
         │
         ▼
┌────────────────────┐
│  Logging &         │  ← MLflow + Prometheus
│  Monitoring        │
└────────────────────┘
```

---

## 2.第一階段：資料管道

### 2.1 資料收集

```python
"""Data collection từ camera hoặc folder ảnh"""
import cv2
import os
from pathlib import Path
from datetime import datetime

class DataCollector:
    def __init__(self, save_dir="data/raw"):
        self.save_dir = Path(save_dir)
        self.save_dir.mkdir(parents=True, exist_ok=True)

    def capture_from_camera(self, camera_id=0, interval_sec=2):
        """Chụp ảnh từ camera theo interval"""
        cap = cv2.VideoCapture(camera_id)
        count = 0

        while True:
            ret, frame = cap.read()
            if not ret:
                break

            # Hiển thị
            cv2.imshow("Capture", frame)

            # Lưu theo interval
            key = cv2.waitKey(int(interval_sec * 1000))
            if key == ord('s'):  # Press 's' to save
                timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                filename = f"img_{timestamp}_{count:04d}.jpg"
                cv2.imwrite(str(self.save_dir / filename), frame)
                count += 1
                print(f"📸 Saved: {filename} (total: {count})")
            elif key == ord('q'):
                break

        cap.release()
        print(f"✅ Collected {count} images")

    def augment_dataset(self, src_dir, dst_dir, multiplier=5):
        """Augment dataset để tăng dữ liệu"""
        import albumentations as A

        transform = A.Compose([
            A.RandomRotate90(p=0.5),
            A.HorizontalFlip(p=0.5),
            A.VerticalFlip(p=0.3),
            A.RandomBrightnessContrast(p=0.5),
            A.GaussNoise(p=0.3),
            A.Blur(blur_limit=3, p=0.2),
            A.CLAHE(p=0.3),
        ])

        dst = Path(dst_dir)
        dst.mkdir(parents=True, exist_ok=True)

        for img_path in Path(src_dir).glob("*.jpg"):
            img = cv2.imread(str(img_path))
            # Save original
            cv2.imwrite(str(dst / img_path.name), img)

            # Augmented copies
            for i in range(multiplier - 1):
                augmented = transform(image=img)["image"]
                aug_name = f"{img_path.stem}_aug{i}{img_path.suffix}"
                cv2.imwrite(str(dst / aug_name), augmented)

        print(f"✅ Augmented: {multiplier}x")
```

### 2.2 資料標籤

```python
"""Setup labeling project — Dùng Label Studio hoặc CVAT"""

# Option 1: Label Studio (recommended)
# pip install label-studio
# label-studio start --port 8080

# Option 2: Roboflow (web-based, free tier)
# https://roboflow.com → Upload → Annotate → Export YOLO format

# Option 3: Script tạo dataset structure
def prepare_yolo_dataset(labeled_dir, output_dir, train_ratio=0.8):
    """Chia dataset thành train/val theo YOLO format"""
    import random
    import shutil

    images = list(Path(labeled_dir).glob("*.jpg"))
    random.shuffle(images)

    split = int(len(images) * train_ratio)
    train_images = images[:split]
    val_images = images[split:]

    for split_name, split_images in [("train", train_images), ("val", val_images)]:
        img_dir = Path(output_dir) / split_name / "images"
        lbl_dir = Path(output_dir) / split_name / "labels"
        img_dir.mkdir(parents=True, exist_ok=True)
        lbl_dir.mkdir(parents=True, exist_ok=True)

        for img_path in split_images:
            shutil.copy(img_path, img_dir / img_path.name)
            label_path = img_path.with_suffix(".txt")
            if label_path.exists():
                shutil.copy(label_path, lbl_dir / label_path.name)

    # Tạo data.yaml
    data_yaml = {
        "path": str(output_dir),
        "train": "train/images",
        "val": "val/images",
        "names": {
            0: "scratch",
            1: "dent",
            2: "discoloration",
            3: "crack",
            4: "missing_part",
        },
    }

    import yaml
    with open(Path(output_dir) / "data.yaml", "w") as f:
        yaml.dump(data_yaml, f)

    print(f"✅ Dataset: {len(train_images)} train, {len(val_images)} val")
```

---

## 3.第二階段：模型訓練

### 3.1 偵測模型（YOLOv8）

```python
"""Train YOLOv8 cho defect detection"""
from ultralytics import YOLO

# Load pretrained
model = YOLO("yolov8s.pt")  # Small variant — tốt cho edge

# Train
results = model.train(
    data="dataset/data.yaml",
    epochs=100,
    imgsz=640,
    batch=16,
    device=0,
    # Optimization
    lr0=0.01,
    lrf=0.01,
    momentum=0.937,
    weight_decay=0.0005,
    warmup_epochs=3,
    # Augmentation
    hsv_h=0.015,
    hsv_s=0.7,
    hsv_v=0.4,
    flipud=0.5,
    mosaic=1.0,
    mixup=0.1,
    # Callbacks
    project="runs/defect_detection",
    name="yolov8s_v1",
    save_period=10,
)

# Evaluate
metrics = model.val()
print(f"mAP@50: {metrics.box.map50:.3f}")
print(f"mAP@50-95: {metrics.box.map:.3f}")
```

### 3.2 分類模型（針對偵測到的作物）

```python
"""Train classifier cho defect type"""
import torch
import torchvision
from torchvision import transforms
from torch.utils.data import DataLoader

# Dataset cho classification (crop từ detection)
transform_train = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.RandomHorizontalFlip(),
    transforms.RandomRotation(15),
    transforms.ColorJitter(brightness=0.2, contrast=0.2),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225]),
])

train_dataset = torchvision.datasets.ImageFolder(
    "dataset/classification/train",
    transform=transform_train,
)
train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True)

# Model: MobileNetV3 (lightweight cho edge)
model = torchvision.models.mobilenet_v3_small(pretrained=True)
model.classifier[-1] = torch.nn.Linear(1024, 5)  # 5 defect types

# Train
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3)
scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=30)
criterion = torch.nn.CrossEntropyLoss()

for epoch in range(30):
    model.train()
    total_loss = 0
    correct = 0
    total = 0

    for images, labels in train_loader:
        images, labels = images.cuda(), labels.cuda()

        outputs = model(images)
        loss = criterion(outputs, labels)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        total_loss += loss.item()
        correct += (outputs.argmax(1) == labels).sum().item()
        total += labels.size(0)

    scheduler.step()
    acc = correct / total
    print(f"Epoch {epoch+1}: loss={total_loss/len(train_loader):.4f}, acc={acc:.2%}")

torch.save(model.state_dict(), "models/defect_classifier.pt")
```

---

## 4. 第 3 階段：最佳化與匯出

```python
"""Optimize models cho deployment"""
from ultralytics import YOLO

# === Detection: YOLOv8 → TensorRT ===
model = YOLO("runs/defect_detection/yolov8s_v1/weights/best.pt")
model.export(
    format="engine",       # TensorRT
    half=True,             # FP16
    imgsz=640,
    device=0,
    simplify=True,
)
# Output: best.engine

# === Classification: MobileNetV3 → ONNX ===
import torch

classifier = torchvision.models.mobilenet_v3_small()
classifier.classifier[-1] = torch.nn.Linear(1024, 5)
classifier.load_state_dict(torch.load("models/defect_classifier.pt"))
classifier.eval()

dummy = torch.randn(1, 3, 224, 224)
torch.onnx.export(
    classifier, dummy,
    "models/defect_classifier.onnx",
    opset_version=17,
    input_names=["image"],
    output_names=["logits"],
)
```

---

## 5.第4階段：API伺服器

```python
"""FastAPI server cho inference"""
from fastapi import FastAPI, File, UploadFile, WebSocket
from fastapi.responses import JSONResponse
import cv2
import numpy as np
from ultralytics import YOLO
import onnxruntime as ort
from datetime import datetime
import asyncio
import json

app = FastAPI(title="Defect Detection API")

# Load models
detector = YOLO("models/best.engine")
classifier_session = ort.InferenceSession("models/defect_classifier.onnx")

DEFECT_NAMES = ["scratch", "dent", "discoloration", "crack", "missing_part"]

def classify_crop(crop_img):
    """Classify một crop region"""
    img = cv2.resize(crop_img, (224, 224))
    img = img.astype(np.float32) / 255.0
    img = (img - [0.485, 0.456, 0.406]) / [0.229, 0.224, 0.225]
    img = np.transpose(img, (2, 0, 1))[np.newaxis, ...]

    logits = classifier_session.run(None, {"image": img.astype(np.float32)})[0]
    probs = np.exp(logits) / np.exp(logits).sum()
    idx = probs.argmax()
    return DEFECT_NAMES[idx], float(probs[0][idx])


@app.post("/detect")
async def detect_defects(file: UploadFile = File(...)):
    """Detect defects trong ảnh upload"""
    contents = await file.read()
    nparr = np.frombuffer(contents, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Detection
    results = detector(img, conf=0.5)

    defects = []
    for box in results[0].boxes:
        x1, y1, x2, y2 = box.xyxy[0].cpu().numpy().astype(int)

        # Crop & classify
        crop = img[y1:y2, x1:x2]
        defect_type, confidence = classify_crop(crop)

        defects.append({
            "type": defect_type,
            "confidence": confidence,
            "bbox": [int(x1), int(y1), int(x2), int(y2)],
            "timestamp": datetime.now().isoformat(),
        })

    return JSONResponse({
        "total_defects": len(defects),
        "defects": defects,
        "image_size": list(img.shape[:2]),
    })


@app.websocket("/ws/stream")
async def websocket_stream(websocket: WebSocket):
    """WebSocket cho real-time camera stream"""
    await websocket.accept()

    cap = cv2.VideoCapture(0)
    try:
        while True:
            ret, frame = cap.read()
            if not ret:
                break

            results = detector(frame, conf=0.5)

            defects = []
            for box in results[0].boxes:
                x1, y1, x2, y2 = box.xyxy[0].cpu().numpy().astype(int)
                crop = frame[y1:y2, x1:x2]
                defect_type, conf = classify_crop(crop)
                defects.append({
                    "type": defect_type,
                    "confidence": conf,
                    "bbox": [int(x1), int(y1), int(x2), int(y2)],
                })

            await websocket.send_json({
                "defects": defects,
                "fps": detector.speed,
            })

            await asyncio.sleep(0.033)  # ~30 FPS

    except Exception:
        pass
    finally:
        cap.release()


# Run: uvicorn server:app --host 0.0.0.0 --port 8000
```

---

## 6. 第 5 階段：監控與再培訓

```python
"""Monitoring pipeline"""
import mlflow
from prometheus_client import Counter, Histogram, start_http_server
import logging

# === Prometheus metrics ===
INFERENCE_COUNT = Counter('inference_total', 'Total inferences')
DEFECT_COUNT = Counter('defects_detected', 'Defects detected', ['type'])
INFERENCE_LATENCY = Histogram('inference_seconds', 'Inference latency')

# === MLflow tracking ===
mlflow.set_tracking_uri("http://mlflow-server:5000")
mlflow.set_experiment("defect_detection_production")

class ProductionMonitor:
    def __init__(self):
        self.predictions = []
        self.low_confidence = []

    def log_prediction(self, defects, latency_ms):
        """Log mỗi prediction"""
        INFERENCE_COUNT.inc()
        INFERENCE_LATENCY.observe(latency_ms / 1000)

        for d in defects:
            DEFECT_COUNT.labels(type=d["type"]).inc()

            # Flag low confidence cho review
            if d["confidence"] < 0.7:
                self.low_confidence.append(d)
                logging.warning(
                    f"⚠️ Low confidence: {d['type']} ({d['confidence']:.0%})"
                )

    def check_data_drift(self, recent_images, reference_stats):
        """Detect data drift → trigger retraining"""
        # So sánh distribution của brightness, contrast, etc.
        recent_brightness = np.mean([img.mean() for img in recent_images])
        ref_brightness = reference_stats["mean_brightness"]

        drift_score = abs(recent_brightness - ref_brightness) / ref_brightness
        if drift_score > 0.2:  # >20% drift
            logging.error(f"🚨 Data drift detected! Score: {drift_score:.2%}")
            self.trigger_retraining()

    def trigger_retraining(self):
        """Trigger retraining pipeline"""
        with mlflow.start_run(run_name="auto_retrain"):
            mlflow.log_param("trigger", "data_drift")
            mlflow.log_param("n_new_samples", len(self.low_confidence))
            # ... trigger training job
            logging.info("🔄 Retraining triggered!")

# Start Prometheus metrics server
start_http_server(9090)
```

---

## 7. Docker 部署

```dockerfile
# Dockerfile
FROM nvidia/cuda:12.1-runtime-ubuntu22.04

# System deps
RUN apt-get update && apt-get install -y \
    python3-pip libgl1-mesa-glx libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Python deps
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# App
WORKDIR /app
COPY models/ models/
COPY server.py .

EXPOSE 8000
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
```

```yaml
# docker-compose.yml
services:
  api:
    build: .
    ports:
      - "8000:8000"
    deploy:
      resources:
        reservations:
          devices:
            - capabilities: [gpu]

  mlflow:
    image: ghcr.io/mlflow/mlflow:latest
    ports:
      - "5000:5000"
    command: mlflow server --host 0.0.0.0

  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    depends_on:
      - prometheus
```

---

## 8. 項目清單

```
Phase 1: Data
  ✅ Thu thập ≥500 ảnh
  ✅ Label với bounding boxes
  ✅ Augmentation → 2500+ ảnh
  ✅ Train/Val split 80/20

Phase 2: Training
  ✅ YOLOv8s detection: mAP@50 > 0.85
  ✅ MobileNetV3 classification: accuracy > 90%
  ✅ Validation trên holdout set

Phase 3: Optimization
  ✅ Export TensorRT (FP16)
  ✅ Benchmark: <20ms per frame
  ✅ Model size < 50MB

Phase 4: Deployment
  ✅ FastAPI server + WebSocket
  ✅ Docker containerized
  ✅ API documentation (Swagger)

Phase 5: Monitoring
  ✅ Prometheus metrics
  ✅ Grafana dashboard
  ✅ MLflow experiment tracking
  ✅ Data drift detection
  ✅ Auto-retrain pipeline
```

---

## 課程總結

|文章|主題 |關鍵知識|
|-----|--------|-----------------|
| 1 |什麼是履歷？ |影像基礎、OpenCV、PIL |
| 2 | CNN 深度報告 |會議、泳池、建築 |
| 3 |遷移學習 |預訓練模型，微調 |
| 4 | YOLO檢測| YOLOv8 推理 |
| 5 |訓練 YOLO 自訂 |自訂資料集訓練 |
| 6 |即時偵測|視訊、網路攝影機、追蹤 |
| 7 |影像分割|語意、實例、全景 |
| 8 |薩姆 |分割任何模型 |
| 9 |影像生成|穩定擴散，ControlNet |
| 10 | 10 ViT 和 CLIP | Vision Transformer，零樣本 |
| 11 | 11光學字元辨識 | Tesseract、PaddleOCR、LayoutLM |
| 12 | 12多式聯運 | GPT-4o 視覺，雙子座 |
| 13 |邊緣部署 | ONNX、TensorRT、TFLite |
| **14** | **頂點** | **端對端系統** |

## 頂點練習

1. **選擇一個真實問題**（可能不是缺陷檢測）：
   - 人數統計系統
   - 車牌識別
   - 垃圾分類
   - 檢查農產品質量

2. **應用上述所有 5 個階段**。

3. **可交付成果：**
   - GitHub 上的源代碼
   - Docker Compose 部署
   - 包含基準結果的自述文件
   - 實際示範影片

> 🎉 **恭喜您完成電腦視覺與深度學習課程！ **
