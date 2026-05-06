---
id: 019c9619-ab05-7005-c105-ab0500000005
title: 第 5 課：YOLO 自訂訓練 - 標記資料、訓練與部署
slug: bai-5-train-yolo-custom
description: >-
  端對端自訂 YOLO：收集映像、使用 Roboflow/CVAT 進行標記、設定 YAML 資料集、在 Google Colab 上訓練、評估
  mAP、匯出模型。使用案例：計數產品、檢測生產錯誤。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 4
section_title: 第 2 部分：物體偵測
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: 深度學習的電腦視覺：從 CNN 到 Vision Transformer
  slug: computer-vision-deep-learning
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-121" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-121)"/>

  <!-- Decorations -->
  <g>
    <circle cx="643" cy="159" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="686" cy="202" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="729" cy="245" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="772" cy="288" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="815" cy="71" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="189" x2="1100" y2="269" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="219" x2="1050" y2="289" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1077.1051177665154,217 1077.1051177665154,261 1039,283 1000.8948822334847,261 1000.8948822334847,217 1039,195" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：訓練 YOLO Custom — 標籤</tspan>
      <tspan x="60" dy="42">資料、訓練和部署</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深度學習的電腦視覺：從 CNN 到 Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：物體偵測</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

YOLO 預訓練可偵測 80 個 COCO 類別。但是您是否需要檢測**有缺陷的產品**、**越南車牌**或特定的**類型的魚**？需要在單獨的資料集上**訓練 YOLO custom**。

> 🎯 **本文：** 端到端工作流程：收集影像→標籤→配置→訓練→評估→匯出。

---

## 1. 資料收集

### 1.1 多少張照片才夠？

```
Rule of thumb cho YOLO custom:
───────────────────────────────────
Minimum:    100 ảnh/class (chỉ OK nếu dùng pretrained)
Tốt:        300-500 ảnh/class
Rất tốt:    1000+ ảnh/class
Production: 3000+ ảnh/class

Lưu ý:
- CHẤT LƯỢNG > Số lượng
- Đa dạng: nhiều góc chụp, ánh sáng, background
- Nếu ít data → dùng pretrained + augmentation mạnh
```

### 1.2 資料來源

```
1. Chụp ảnh thực tế (tốt nhất!)
2. Tải từ Roboflow Universe (roboflow.com/universe)
3. Google Images (cần lọc + verify)
4. Scraping (cẩn thận copyright)
5. Synthetic data (render 3D, paste objects)
```

### 1.3 收集好照片的技巧

```
✅ ĐA DẠNG:
  - Nhiều góc chụp (trước, sau, trên, nghiêng)
  - Nhiều điều kiện ánh sáng (ngày, đêm, trong nhà, ngoài trời)
  - Nhiều background
  - Objects bị che 1 phần (occlusion)
  - Objects nhỏ và lớn trong cùng ảnh

❌ TRÁNH:
  - Tất cả ảnh cùng 1 góc
  - Chỉ ảnh chất lượng studio
  - Không có negative samples
  - Objects luôn ở center
```

---

## 2. 標註資料（資料註記）

### 2.1 標籤工具

|工具|類型 |自由的？ |優勢 |
|--------|--------|--------|--------|
| **Roboflow** |網頁 |免費套餐 |最簡單使用，匯出YOLO格式 |
| **CVAT** |網頁/自架 |免費|強大，影片支援|
| **標籤工作室** |自架 |免費|多種任務類型 |
| **標籤圖像** |桌面|免費|簡單，離線|
| **標籤我** |桌面|免費|多邊形註解|

### 2.2 使用 Roboflow 進行標籤（建議）

```
Workflow Roboflow:
1. Sign up: roboflow.com (free tier: 10K ảnh)
2. Create Project → Object Detection
3. Upload ảnh
4. Label:
   - Vẽ bounding box quanh mỗi object
   - Gán class name
5. Generate Dataset:
   - Train/Val/Test split (70/20/10)
   - Augmentation (optional)
6. Export → YOLO format → Download
```

### 2.3 YOLO標籤格式

```
# Mỗi ảnh có 1 file .txt cùng tên
# Mỗi dòng: class_id x_center y_center width height (normalized 0-1)

# Ví dụ: labels/image001.txt
0 0.4523 0.3211 0.1250 0.2340
1 0.7100 0.6500 0.0890 0.1560
0 0.2300 0.8100 0.1100 0.1900

# class 0: person, class 1: car
# Tọa độ normalized (chia cho width/height ảnh)
```

### 2.4 品質標籤提示

```
✅ TIPS:
  - Tight bounding box (sát object, không quá rộng hoặc hẹp)
  - Nhất quán: cùng 1 object → cùng 1 class
  - Đừng quên objects nhỏ hoặc bị che 1 phần
  - Label ALL objects of interest (đừng bỏ sót)
  - Dùng "review" bước để double-check

❌ SAI LẦM:
  - Box quá rộng (chứa nhiều background)
  - Bỏ sót objects
  - Label sai class
  - Inconsistent: object giống nhau nhưng label khác tên
```

---

## 3. 設定資料集

### 3.1 目錄結構

```
datasets/
  my_project/
    images/
      train/
        img001.jpg
        img002.jpg
        ...
      val/
        img050.jpg
        ...
      test/
        img070.jpg
        ...
    labels/
      train/
        img001.txt
        img002.txt
        ...
      val/
        img050.txt
        ...
      test/
        img070.txt
        ...
```

### 3.2 YAML 資料集

```yaml
# dataset.yaml — file cấu hình cho YOLO
path: /path/to/datasets/my_project  # Root directory
train: images/train                  # Train images (relative to path)
val: images/val                      # Val images
test: images/test                    # Test images (optional)

# Classes
names:
  0: product_ok       # Sản phẩm tốt
  1: product_defect   # Sản phẩm lỗi
  2: product_scratch  # Sản phẩm xước

# Số classes
nc: 3
```

---

## 4. 訓練 YOLO 自訂

### 4.1 基礎訓練

```python
"""Train YOLO custom model"""
from ultralytics import YOLO

# Bắt đầu từ pretrained model (TRANSFER LEARNING!)
model = YOLO("yolo11n.pt")  # nano — bắt đầu từ đây

# Train
results = model.train(
    data="dataset.yaml",      # Path to dataset config
    epochs=100,               # Số epochs
    imgsz=640,                # Input image size
    batch=16,                 # Batch size
    device="0",               # GPU 0 (hoặc "cpu")
    project="runs/detect",    # Output directory
    name="my_product_model",  # Run name
)
```

### 4.2 進階訓練－最佳化超參數

```python
"""Training với cấu hình nâng cao"""
results = model.train(
    data="dataset.yaml",
    epochs=200,
    imgsz=640,
    batch=16,

    # === Optimization ===
    optimizer="AdamW",         # AdamW thường tốt hơn SGD
    lr0=0.01,                  # Initial learning rate
    lrf=0.01,                  # Final learning rate factor
    warmup_epochs=3,           # Warmup epochs
    weight_decay=0.0005,       # Regularization

    # === Augmentation ===
    hsv_h=0.015,               # Hue augmentation
    hsv_s=0.7,                 # Saturation augmentation
    hsv_v=0.4,                 # Value augmentation
    degrees=10.0,              # Rotation ±10°
    translate=0.1,             # Translation 10%
    scale=0.5,                 # Scale ±50%
    fliplr=0.5,                # Horizontal flip 50%
    flipud=0.0,                # Vertical flip (tắt — không hợp lý cho hầu hết tasks)
    mosaic=1.0,                # Mosaic augmentation (ghép 4 ảnh)
    mixup=0.1,                 # MixUp augmentation

    # === Early Stopping ===
    patience=50,               # Stop nếu 50 epochs không improve

    # === Resuming ===
    # resume=True,             # Resume from last checkpoint
)
```

### 4.3 Google Colab 訓練

```python
"""Google Colab training script"""
# Cell 1: Setup
!pip install ultralytics

# Cell 2: Check GPU
import torch
print(f"GPU: {torch.cuda.get_device_name(0)}")
print(f"Memory: {torch.cuda.get_device_properties(0).total_mem / 1e9:.1f} GB")

# Cell 3: Upload dataset
# Option A: Upload ZIP file
from google.colab import files
uploaded = files.upload()  # Upload dataset.zip

!unzip dataset.zip -d /content/datasets/

# Option B: Từ Roboflow
!pip install roboflow
from roboflow import Roboflow
rf = Roboflow(api_key="YOUR_KEY")
project = rf.workspace("workspace").project("project")
dataset = project.version(1).download("yolov8")

# Cell 4: Train
from ultralytics import YOLO
model = YOLO("yolo11s.pt")
results = model.train(data="/content/datasets/data.yaml", epochs=100, imgsz=640)

# Cell 5: Evaluate
metrics = model.val()
print(f"mAP@50: {metrics.box.map50:.4f}")
print(f"mAP@50:95: {metrics.box.map:.4f}")

# Cell 6: Download model
from google.colab import files
files.download("runs/detect/train/weights/best.pt")
```

---

## 5. 評估與除錯

### 5.1 模型評估

```python
"""Evaluate model chi tiết"""
from ultralytics import YOLO

# Load trained model
model = YOLO("runs/detect/my_product_model/weights/best.pt")

# Validate
metrics = model.val(data="dataset.yaml")

# Per-class results
print("\n📊 Per-class Performance:")
for i, name in enumerate(metrics.names.values()):
    print(f"  {name}:")
    print(f"    Precision: {metrics.box.p[i]:.4f}")
    print(f"    Recall:    {metrics.box.r[i]:.4f}")
    print(f"    mAP@50:    {metrics.box.ap50[i]:.4f}")
```

### 5.2 混淆矩陣

```python
"""Xem confusion matrix để hiểu errors"""
# Ultralytics tự tạo confusion matrix trong runs/detect/val/
# Kiểm tra file: confusion_matrix.png

# Manual analysis
results = model("test_images/", save=True, conf=0.5)

# Đếm detections theo class
from collections import Counter
class_counts = Counter()
for result in results:
    for box in result.boxes:
        class_name = result.names[int(box.cls)]
        class_counts[class_name] += 1

print("\n📈 Detection Distribution:")
for cls, count in class_counts.most_common():
    print(f"  {cls}: {count}")
```

### 5.3 常見訓練問題

|問題 |症狀 |解決方案 |
|--------|-------------|----------|
| **過度擬合** |列車損失 ↓，Val 損失 ↑ |新增資料、增強、遺失 |
| **欠擬合** |兩項損失皆較高 |增加模型大小、紀元、lr |
| **標籤錯誤** | mAP 異常低 |審查標籤，檢查一致性 |
| **小物體錯過** |對小物體的召回率低 |增加imgsz=1280，增加SAHI |
| **類別不平衡** | 1 級偵測不佳 |過採樣少數類 |

---

## 6. 匯出模型

```python
"""Export model sang các format khác nhau"""
model = YOLO("runs/detect/train/weights/best.pt")

# ONNX — cross-platform
model.export(format="onnx", imgsz=640, simplify=True)

# TensorRT — NVIDIA GPU (nhanh nhất)
model.export(format="engine", imgsz=640, half=True)

# CoreML — iOS
model.export(format="coreml", imgsz=640)

# TFLite — Android / Edge
model.export(format="tflite", imgsz=640)

# OpenVINO — Intel hardware
model.export(format="openvino", imgsz=640)
```

---

## 7. 使用案例：偵測有缺陷的產品

```python
"""Complete pipeline: phát hiện sản phẩm lỗi trong nhà máy"""
from ultralytics import YOLO
import cv2
from datetime import datetime

# Load custom trained model
model = YOLO("product_defect_model.pt")

def inspect_product(image_path):
    """Kiểm tra 1 sản phẩm"""
    results = model(image_path, conf=0.5)
    result = results[0]

    defects_found = []
    for box in result.boxes:
        class_name = result.names[int(box.cls)]
        confidence = box.conf[0].item()
        x1, y1, x2, y2 = box.xyxy[0].tolist()

        if "defect" in class_name or "scratch" in class_name:
            defects_found.append({
                "type": class_name,
                "confidence": confidence,
                "location": (x1, y1, x2, y2),
            })

    # Quyết định
    status = "❌ REJECT" if defects_found else "✅ PASS"
    print(f"{status} | {image_path}")
    for d in defects_found:
        print(f"  ⚠️  {d['type']} ({d['confidence']:.1%})")

    return {
        "status": "reject" if defects_found else "pass",
        "defects": defects_found,
        "timestamp": datetime.now().isoformat(),
    }

# Test
inspect_product("product_001.jpg")
inspect_product("product_002.jpg")
```

---

## 總結

|步驟|工作|工具|
|--------|----------|--------|
| 1. 資料收集|每堂課收集 300 多張照片 |相機，Roboflow 宇宙 |
| 2. 標籤|繪製邊界框 | Roboflow、CVAT |
| 3. 設定 |建立資料集.yaml | YAML 檔案 |
| 4. 培訓|訓練YOLO定制| Ultralytics，Google Colab |
| 5. 評量| mAP、P、R 評量 | `model.val()` |
| 6. 出口|轉換為 ONNX/TRT | `model.export()` |

## 一般練習

1. **快速項目：** 從 Roboflow Universe 載入資料集（例如「安全帽偵測」）。訓練 YOLOv11n。實作 mAP@50 > 80%。
2. **自訂資料集：** 為 1 個物體（例如：杯子、鋼筆、水瓶）拍攝 100 張照片。 Roboflow 上的標籤。訓練和測試。
3. **比較：** 訓練與 yolo11n、yolo11s、yolo11m 相同的資料集。比較精度、速度、模型大小。
4. **匯出測試：** 匯出到ONNX。使用 ONNX 運行時進行推理。與 PyTorch 比較速度。

> **下一篇文章：** 即時偵測 — 使用 DeepSORT 偵測攝影機、視訊串流、物件追蹤。
