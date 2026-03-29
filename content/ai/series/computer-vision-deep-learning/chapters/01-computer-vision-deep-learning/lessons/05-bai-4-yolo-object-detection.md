---
id: 019c9619-ab04-7004-c104-ab0400000004
title: 'Bài 4: YOLO từ v3 đến v11 — Lý thuyết & Thực hành'
slug: bai-4-yolo-object-detection
description: >-
  Lịch sử YOLO: từ YOLOv3 đến YOLOv11 (Ultralytics). Kiến trúc YOLO,
  anchor boxes, non-max suppression. Hands-on: detect đối tượng với
  YOLOv8/v11 pretrained models. Metrics: mAP, IoU, Precision, Recall.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 2: Object Detection"
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: "Computer Vision với Deep Learning: Từ CNN đến Vision Transformer"
  slug: computer-vision-deep-learning
---

## Giới thiệu

**Object Detection** = tìm **vị trí** (bounding box) + **nhãn** (class) của mọi đối tượng trong ảnh. Và **YOLO** (You Only Look Once) là king 👑 — nhanh nhất, chính xác nhất, dễ dùng nhất.

> 🎯 **Tại sao YOLO?** Real-time (>100 FPS), accuracy cao (mAP 50%+), 1 dòng code để detect, hệ sinh thái Ultralytics cực kỳ mature.

---

## 1. Object Detection 101

### 1.1 Classification vs Detection vs Segmentation

```
Image Classification:   "This is a cat"          → 1 label
Object Detection:       "Cat at (x,y,w,h)"       → N bounding boxes + labels
Instance Segmentation:  "Cat occupies these pixels" → Pixel-level masks
```

### 1.2 Bounding Box — Hộp bao quanh đối tượng

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

### 1.3 IoU — Intersection over Union

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

## 2. YOLO — You Only Look Once

### 2.1 Ý tưởng cốt lõi

Trước YOLO, detection dùng **2-stage**: đề xuất vùng → classify từng vùng (R-CNN, chậm).

YOLO: **1-stage** — nhìn ảnh **1 lần duy nhất** → output tất cả boxes + classes.

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

### 2.2 Lịch sử YOLO

| Version | Năm | Đóng góp chính | mAP (COCO) |
|---------|-----|----------------|------------|
| YOLOv1 | 2016 | Ý tưởng gốc — 1 stage detection | 63.4 |
| YOLOv2 | 2017 | Anchor boxes, batch normalization | 78.6 |
| YOLOv3 | 2018 | Multi-scale detection, Darknet-53 | 33.0 (mAP@50:95) |
| YOLOv4 | 2020 | CSPDarknet, Mish activation, Mosaic augmentation | 43.5 |
| YOLOv5 | 2020 | PyTorch, Ultralytics ecosystem, dễ dùng | 48.2 |
| YOLOv6 | 2022 | Meituan, BiC module, SimOTA | 52.5 |
| YOLOv7 | 2022 | E-ELAN, model reparameterization | 56.8 |
| **YOLOv8** | **2023** | **Anchor-free, decoupled head, Ultralytics** | **53.9** |
| YOLOv9 | 2024 | PGI, GELAN architecture | 55.6 |
| YOLOv10 | 2024 | NMS-free, efficiency-driven | 54.4 |
| **YOLOv11** | **2024** | **C3k2 block, attention, SOTA** | **56.1** |

> **⭐ Trong thực tế:** Dùng **YOLOv8** hoặc **YOLOv11** (Ultralytics). Ecosystem tốt nhất, documentation rõ ràng, community lớn nhất.

### 2.3 Non-Maximum Suppression (NMS)

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

## 3. Hands-on: YOLO với Ultralytics

### 3.1 Cài đặt

```bash
pip install ultralytics
```

### 3.2 Inference — Detect ngay lập tức

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

### 3.3 Phân tích kết quả chi tiết

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

### 3.4 Detect trên Video

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

### 3.5 YOLO Tasks: không chỉ Detection

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

## 4. Evaluation Metrics

### 4.1 Precision, Recall, mAP

```
                    Predicted Positive    Predicted Negative
Actual Positive     TP (True Positive)    FN (False Negative)
Actual Negative     FP (False Positive)   TN (True Negative)

Precision = TP / (TP + FP)  → "Trong tất cả detect, bao nhiêu đúng?"
Recall    = TP / (TP + FN)  → "Trong tất cả objects thật, bao nhiêu detect được?"
```

### 4.2 mAP (mean Average Precision)

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

### 4.3 YOLO Model Comparison

| Model | Params | mAP@50 | mAP@50:95 | Speed (T4 GPU) |
|-------|--------|--------|-----------|----------------|
| YOLOv11n | 2.6M | 70.3 | 39.5 | 1.5ms |
| YOLOv11s | 9.4M | 77.1 | 47.0 | 2.5ms |
| YOLOv11m | 20.1M | 80.4 | 51.5 | 4.7ms |
| YOLOv11l | 25.3M | 81.2 | 53.4 | 6.2ms |
| YOLOv11x | 56.9M | 82.0 | 54.7 | 11.3ms |

---

## 5. Cấu hình YOLO nâng cao

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

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Object Detection** | Tìm vị trí (bbox) + nhãn (class) của objects |
| **YOLO** | 1-stage detector, real-time, SOTA |
| **IoU** | Đo overlap giữa predicted và ground truth box |
| **NMS** | Loại bỏ boxes trùng lặp, giữ box tốt nhất |
| **mAP** | Metric chính cho detection: mean Average Precision |
| **Ultralytics** | Library Python cho YOLO — 3 dòng code detect |

## Bài tập tổng hợp

1. **Quick Start:** Cài Ultralytics, detect trên 10 ảnh khác nhau (street, indoor, nature). Đếm mỗi class.
2. **Video Detection:** Detect trên video traffic. Tính trung bình bao nhiêu xe/frame?
3. **Model Size Comparison:** So sánh yolo11n vs yolo11m vs yolo11x: accuracy, speed, memory.
4. **IoU Calculator:** Implement hàm IoU, test với 5 cặp boxes khác nhau.
5. **Custom Filter:** Viết script chỉ detect **người** (class 0) có confidence > 80%.

> **Bài tiếp theo:** Huấn luyện YOLO Custom — label data riêng, train model riêng cho bài toán cụ thể.
