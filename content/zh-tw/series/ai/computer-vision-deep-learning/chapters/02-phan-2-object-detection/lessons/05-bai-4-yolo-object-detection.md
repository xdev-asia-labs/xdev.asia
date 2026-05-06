---
id: 019c9619-ab04-7004-c104-ab0400000004
title: 第 4 課：YOLO 從 v3 到 v11 — 理論與實踐
slug: bai-4-yolo-object-detection
description: >-
  YOLO 的歷史：從 YOLOv3 到 YOLOv11（Ultralytics）。 YOLO架構，錨框，非極大值抑制。動手實作：使用 YOLOv8/v11
  預訓練模型偵測物件。指標：mAP、IoU、精準度、召回率。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 3
section_title: 第 2 部分：物體偵測
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: 深度學習的電腦視覺：從 CNN 到 Vision Transformer
  slug: computer-vision-deep-learning
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5836" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5836)"/>

  <!-- Decorations -->
  <g>
    <circle cx="665" cy="165" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="730" cy="210" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="795" cy="255" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="860" cy="40" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="925" cy="85" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="195" x2="1100" y2="275" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="225" x2="1050" y2="295" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1070.9807621135333,230 1070.9807621135333,260 1045,275 1019.0192378864668,260 1019.0192378864668,230 1045,215" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 人工智慧與機器學習 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：YOLO 從 v3 到 v11 — 理論與</tspan>
      <tspan x="60" dy="42">練習</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深度學習的電腦視覺：從 CNN 到 Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：物體偵測</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**物件偵測** = 找到影像中每個物件的**位置**（邊界框）+ **標籤**（類別）。 **YOLO**（You Only Look Once）是王者👑－最快、最準確、最容易使用。

> 🎯 **為什麼選擇YOLO？ ** 即時（>100 FPS）、高精度（mAP 50%+）、1行程式碼即可偵測，Ultralytics生態系統極為成熟。

---

## 1.物體偵測101

### 1.1 分類、偵測、分割

```
Image Classification:   "This is a cat"          → 1 label
Object Detection:       "Cat at (x,y,w,h)"       → N bounding boxes + labels
Instance Segmentation:  "Cat occupies these pixels" → Pixel-level masks
```

### 1.2 邊界框 — 圍繞物件的框

```python
# Bounding box formats
# Format 1: (x_center, y_center, width, height) — YOLO format
bbox_yolo = [0.5, 0.5, 0.3, 0.4]  # Normalized (0-1)

# Format 2: (x_min, y_min, x_max, y_max) — Pascal VOC format
bbox_voc = [150, 100, 350, 300]    # Pixels

# Format 3: (x_min, y_min, width, height) — COCO format
bbox_coco = [150, 100, 200, 200]   # Pixels

# Convert YOLO → VOC
def yolo_to_voc(bbox, img_w, img_h):
    x_c, y_c, w, h = bbox
    x_min = int((x_c - w/2) * img_w)
    y_min = int((y_c - h/2) * img_h)
    x_max = int((x_c + w/2) * img_w)
    y_max = int((y_c + h/2) * img_h)
    return [x_min, y_min, x_max, y_max]
```

### 1.3 IoU——並集的交集

```python
"""IoU: đo mức overlap giữa 2 bounding boxes"""
def calculate_iou(box1, box2):
    """
    box1, box2: [x_min, y_min, x_max, y_max]
    """
    # Intersection
    x_inter_min = max(box1[0], box2[0])
    y_inter_min = max(box1[1], box2[1])
    x_inter_max = min(box1[2], box2[2])
    y_inter_max = min(box1[3], box2[3])

    inter_area = max(0, x_inter_max - x_inter_min) * \
                 max(0, y_inter_max - y_inter_min)

    # Union
    area1 = (box1[2] - box1[0]) * (box1[3] - box1[1])
    area2 = (box2[2] - box2[0]) * (box2[3] - box2[1])
    union_area = area1 + area2 - inter_area

    return inter_area / union_area if union_area > 0 else 0

# Ví dụ
pred_box = [100, 100, 300, 300]
gt_box = [120, 110, 310, 320]
iou = calculate_iou(pred_box, gt_box)
print(f"IoU: {iou:.4f}")  # ~0.73
```

```
IoU Thresholds:
IoU > 0.5  → True Positive (mAP@50)
IoU > 0.75 → True Positive (mAP@75 — strict)
IoU < 0.5  → False Positive (miss!)
```

---

## 2. YOLO——你只看一次

### 2.1 核心思想

在YOLO之前，檢測使用**2階段**：提出區域→對每個區域進行分類（R-CNN，慢）。

YOLO：**1-stage** — 查看圖像**僅一次** → 輸出所有框+類別。

```
Input Image (640×640)
    ↓
YOLO Backbone (feature extraction)
    ↓
YOLO Neck (feature fusion — FPN/PAN)
    ↓
YOLO Head (predict boxes + classes)
    ↓
NMS (Non-Max Suppression — lọc box trùng)
    ↓
Final Detections: [(class, confidence, x, y, w, h), ...]
```

### 2.2 YOLO的歷史

|版本 |年份|主要貢獻 |地圖 (COCO) |
|--------|-----|----------------|------------|
| YOLOv1 | 2016 | 2016最初的想法－1階段偵測| 63.4 | 63.4
| YOLOv2 | 2017 | 2017錨框，批次標準化| 78.6 | 78.6
| YOLOv3 | 2018 |多尺度偵測，Darknet-53 | 33.0 (mAP@50:95) |
| YOLOv4 | 2020 | CSPDarknet、Mish 活化、Mosaic 增強 | 43.5 | 43.5
| YOLOv5 | 2020 | PyTorch，Ultralytics 生態系統，易於使用 | 48.2 | 48.2
| YOLOv6 | 2022 | 2022美團、BiC模組、SimOTA | 52.5 | 52.5
| YOLOv7 | 2022 | 2022 E-ELAN，模型重新參數化| 56.8 | 56.8
| **YOLOv8** | **2023** | **無錨、分離頭，Ultralytics** | **53.9** |
| YOLOv9 | 2024 | 2024 PGI、GELAN架構| 55.6 | 55.6
| YOLOv10 | 2024 | 2024免網管，效率驅動 | 54.4 | 54.4
| **YOLOv11** | **2024** | **C3k2 塊，注意，SOTA** | **56.1** |

> **⭐ 實作：** 使用 **YOLOv8** 或 **YOLOv11** (Ultralytics)。最好的生態系統、清晰的文檔、最大的社群。

### 2.3 非極大值抑制（NMS）

```python
"""NMS: loại bỏ bounding boxes trùng nhau"""
def nms(boxes, scores, iou_threshold=0.5):
    """
    boxes: [[x1,y1,x2,y2], ...] — tất cả predicted boxes
    scores: [0.9, 0.85, 0.7, ...] — confidence của mỗi box
    """
    indices = sorted(range(len(scores)), key=lambda i: scores[i], reverse=True)
    keep = []

    while indices:
        current = indices.pop(0)
        keep.append(current)

        remaining = []
        for idx in indices:
            iou = calculate_iou(boxes[current], boxes[idx])
            if iou < iou_threshold:  # Chỉ giữ box ít overlap
                remaining.append(idx)
        indices = remaining

    return keep
```

---

## 3. 實踐：YOLO 與 Ultralytics

### 3.1 安裝

```bash
pip install ultralytics
```

### 3.2 推理－立即偵測

```python
"""YOLO Detection — chỉ 3 dòng code!"""
from ultralytics import YOLO

# Load pretrained model (tự download)
model = YOLO("yolo11n.pt")  # nano (nhanh nhất)
# model = YOLO("yolo11s.pt")  # small
# model = YOLO("yolo11m.pt")  # medium
# model = YOLO("yolo11l.pt")  # large
# model = YOLO("yolo11x.pt")  # extra large (chính xác nhất)

# Detect trên ảnh
results = model("street_photo.jpg")

# Hiển thị kết quả
results[0].show()  # Mở ảnh với bounding boxes
results[0].save("output.jpg")  # Lưu ảnh
```

### 3.3 分析詳細結果

```python
"""Phân tích detection results"""
results = model("street.jpg")

for result in results:
    boxes = result.boxes

    for box in boxes:
        # Bounding box coordinates
        x1, y1, x2, y2 = box.xyxy[0].tolist()
        # Confidence score
        confidence = box.conf[0].item()
        # Class
        class_id = int(box.cls[0].item())
        class_name = result.names[class_id]

        print(f"📦 {class_name}: {confidence:.2%} "
              f"at ({x1:.0f}, {y1:.0f}, {x2:.0f}, {y2:.0f})")

    # Summary
    print(f"\nTotal detections: {len(boxes)}")
    print(f"Classes found: {set(result.names[int(c)] for c in boxes.cls)}")
```

### 3.4 影片偵測

```python
"""Object detection trên video"""
import cv2
from ultralytics import YOLO

model = YOLO("yolo11n.pt")

# Mở video
cap = cv2.VideoCapture("traffic.mp4")
# Hoặc webcam: cap = cv2.VideoCapture(0)

# Video writer
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
fps = cap.get(cv2.CAP_PROP_FPS)
writer = cv2.VideoWriter("output.mp4", cv2.VideoWriter_fourcc(*"mp4v"), fps, (width, height))

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    # Detect
    results = model(frame, verbose=False)

    # Vẽ results lên frame
    annotated = results[0].plot()

    # Lưu
    writer.write(annotated)

cap.release()
writer.release()
print("Done! Saved to output.mp4")
```

### 3.5 YOLO 任務：不只是偵測

```python
"""YOLO hỗ trợ nhiều tasks"""

# Object Detection
det_model = YOLO("yolo11n.pt")
det_results = det_model("street.jpg")

# Instance Segmentation
seg_model = YOLO("yolo11n-seg.pt")
seg_results = seg_model("street.jpg")

# Pose Estimation
pose_model = YOLO("yolo11n-pose.pt")
pose_results = pose_model("person.jpg")

# Classification
cls_model = YOLO("yolo11n-cls.pt")
cls_results = cls_model("cat.jpg")

# OBB (Oriented Bounding Boxes)
obb_model = YOLO("yolo11n-obb.pt")
obb_results = obb_model("aerial.jpg")
```

---

## 4. 評估指標

### 4.1 精確度、召回率、mAP

```
                    Predicted Positive    Predicted Negative
Actual Positive     TP (True Positive)    FN (False Negative)
Actual Negative     FP (False Positive)   TN (True Negative)

Precision = TP / (TP + FP)  → "Trong tất cả detect, bao nhiêu đúng?"
Recall    = TP / (TP + FN)  → "Trong tất cả objects thật, bao nhiêu detect được?"
```

### 4.2 mAP（平均精確度）

```python
"""Đánh giá YOLO model"""
from ultralytics import YOLO

model = YOLO("yolo11n.pt")

# Evaluate trên COCO val set
metrics = model.val(data="coco.yaml")

print(f"mAP@50:      {metrics.box.map50:.4f}")     # mAP at IoU=0.5
print(f"mAP@50:95:   {metrics.box.map:.4f}")        # mAP at IoU=0.5:0.95
print(f"Precision:   {metrics.box.mp:.4f}")          # Mean Precision
print(f"Recall:      {metrics.box.mr:.4f}")          # Mean Recall
```

### 4.3 YOLO模型比較

|型號|參數|地圖@50 |地圖@50:95 |速度（T4 GPU）|
|--------|--------|--------|------------------------|----------------|
| YOLOv11n | 260 萬 | 70.3 | 70.3 39.5 | 39.5 1.5 毫秒 |
| YOLOv11s | 940 萬 | 77.1 | 77.1 47.0 | 47.0 2.5 毫秒 |
| YOLOv11m | 2010 萬 | 80.4 | 80.4 51.5 | 51.5 4.7 毫秒 |
| YOLOv11l | 2530 萬 | 81.2 | 81.2 53.4 | 53.4 6.2 毫秒 |
| YOLOv11x | 56.9M | 82.0 | 54.7 | 54.7 11.3 毫秒 |

---

## 5. 進階YOLO配置

```python
"""Cấu hình detection chi tiết"""

results = model.predict(
    source="image.jpg",        # ảnh, video, folder, url, webcam
    conf=0.25,                 # Confidence threshold (default 0.25)
    iou=0.45,                  # NMS IoU threshold (default 0.7)
    classes=[0, 1, 2],         # Chỉ detect classes cụ thể (0=person, 1=bicycle, 2=car)
    max_det=300,               # Số detection tối đa
    imgsz=640,                 # Input size
    device="cuda",             # GPU
    save=True,                 # Lưu ảnh kết quả
    save_txt=True,             # Lưu labels txt
    save_conf=True,            # Lưu confidence trong txt
    show=False,                # Hiển thị real-time
    verbose=False,             # Tắt log
)
```

---

## 總結

|概念 |記住|
|--------|--------|
| **物体检测** |查找对象的位置（bbox）+标签（类）|
| **YOLO** | 1 級偵測器，即時，SOTA |
| **欠条** |测量预测框和真实框之间的重叠 |
| **网络管理系统** |消除重复盒子，保留最好的盒子 |
| **地图** |检测的主要指标：平均精度|平均精度
| **超解** | YOLO 的 Python 库 — 3 行检测代码 |

## 一般練習

1. **快速入门：** 安装 Ultralytics，检测 10 个不同的图像（街道、室内、自然）。統計每個班級。
2. **視訊偵測：** 偵測視訊流量。平均有多少輛車/車架？
3. **模型大小比较：** 比较 yolo11n、yolo11m 和 yolo11x：准确性、速度、内存。
4. **IoU计算器：** 实现IoU函数，用5对不同的盒子进行测试。
5. **自定义过滤器：** 编写一个脚本，仅以 > 80% 的置信度检测 **人**（0 类）。

> **下一篇文章：** YOLO 自定义训练 - 标记您自己的数据，针对特定问题训练您自己的模型。
