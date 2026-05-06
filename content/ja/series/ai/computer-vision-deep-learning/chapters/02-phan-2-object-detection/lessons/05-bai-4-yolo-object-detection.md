---
id: 019c9619-ab04-7004-c104-ab0400000004
title: 'レッスン 4: YOLO v3 から v11 — 理論と実践'
slug: bai-4-yolo-object-detection
description: >-
  YOLO の歴史: YOLOv3 から YOLOv11 (Ultralytics) まで。 YOLO アーキテクチャ、アンカー
  ボックス、非最大抑制。ハンズオン: YOLOv8/v11 の事前トレーニング済みモデルを使用してオブジェクトを検出します。メトリック:
  mAP、IoU、精度、リコール。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 2: 物体の検出'
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: '深層学習によるコンピューター ビジョン: CNN から Vision Transformer まで'
  slug: computer-vision-deep-learning
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: YOLO v3 から v11 — 理論と</tspan>
      <tspan x="60" dy="42">練習する</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深層学習によるコンピューター ビジョン: CNN から Vision Transformer まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 物体の検出</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**オブジェクト検出** = 画像内のすべてのオブジェクトの **位置** (境界ボックス) + **ラベル** (クラス) を見つけます。そして、**YOLO** (You Only Look Once) が王です 👑 - 最速、最も正確、そして使いやすい。

> 🎯 **YOLO を選択する理由** リアルタイム (>100 FPS)、高精度 (mAP 50%+)、検出するコードは 1 行で、Ultralytics エコシステムは非常に成熟しています。

---

## 1. 物体検出 101

### 1.1 分類、検出、セグメンテーション

```
Image Classification:   "This is a cat"          → 1 label
Object Detection:       "Cat at (x,y,w,h)"       → N bounding boxes + labels
Instance Segmentation:  "Cat occupies these pixels" → Pixel-level masks
```

### 1.2 境界ボックス — オブジェクトを囲むボックス

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

### 1.3 IoU — 和集合上の交差

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

## 2. YOLO — 一度しか見ない

### 2.1 中心的なアイデア

YOLO 以前は、**2 段階**の検出が使用されていました: 領域の提案 → 各領域の分類 (R-CNN、遅い)。

YOLO: **1 ステージ** — 画像を **1 回だけ**見て、すべてのボックスとクラスを出力します。

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

### 2.2 YOLOの歴史

|バージョン |年 |主な貢献 | mAP（ココ） |
|----------|-----|-----|----------|
| YOLOv1 | 2016年 |独自のアイデア — 1 段階検出 | 63.4 |
|ヨロv2 | 2017年 |アンカー ボックス、バッチ正規化 | 78.6 |
|ヨロv3 | 2018年 |マルチスケール検出、Darknet-53 | 33.0 (mAP@50:95) |
|ヨロv4 | 2020年 | CSPDarknet、Mish アクティベーション、モザイク拡張 | 43.5 |
|ヨロv5 | 2020年 | PyTorch、Ultralytics エコシステム、使いやすい | 48.2 |
| YOLOv6 | 2022年 | Meituan、BiC モジュール、SimOTA | 52.5 |
|ヨロv7 | 2022年 | E-ELAN、モデルの再パラメータ化 | 56.8 |
| **YOLOv8** | **2023** | **アンカーフリー、分離ヘッド、Ultralytics** | **53.9** |
|ヨロv9 | 2024年 | PGI、GELAN アーキテクチャ | 55.6 |
| YOLOv10 | 2024年 | NMS 不要、効率重視 | 54.4 |
| **YOLOv11** | **2024** | **C3k2 ブロック、注意、SOTA** | **56.1** |

> **⭐ 実際には:** **YOLOv8** または **YOLOv11** (Ultralytics) を使用します。最高のエコシステム、明確なドキュメント、最大のコミュニティ。

### 2.3 非最大抑制 (NMS)

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

## 3. 実践: Ultralytics を使用した YOLO

### 3.1 インストール

```bash
pip install ultralytics
```

### 3.2 推論 — 即座に検出

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

### 3.3 詳細な結果を分析する

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

### 3.4 ビデオでの検出

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

### 3.5 YOLO タスク: 検出だけではない

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

## 4. 評価指標

### 4.1 精度、リコール、mAP

```
                    Predicted Positive    Predicted Negative
Actual Positive     TP (True Positive)    FN (False Negative)
Actual Negative     FP (False Positive)   TN (True Negative)

Precision = TP / (TP + FP)  → "Trong tất cả detect, bao nhiêu đúng?"
Recall    = TP / (TP + FN)  → "Trong tất cả objects thật, bao nhiêu detect được?"
```

### 4.2 mAP (平均平均精度)

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

### 4.3 YOLO モデルの比較

|モデル |パラメータ | mAP@50 | mAP@50:95 |速度 (T4 GPU) |
|----------|----------|----------|----------|-----|
|ヨロv11n | 2.6M | 70.3 | 39.5 | 1.5ミリ秒 |
| YOLOv11s | 9.4M | 77.1 | 47.0 | 2.5ミリ秒 |
| YOLOv11m | 20.1M | 80.4 | 51.5 | 4.7ミリ秒 |
| YOLOv11l | 25.3M | 81.2 | 53.4 | 6.2ミリ秒 |
| YOLOv11x | 56.9M | 82.0 | 54.7 | 11.3ミリ秒 |

---

## 5. 高度な YOLO 構成

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

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| **物体検出** |オブジェクトの位置 (bbox) + ラベル (クラス) を見つける |
| **ヨロ** | 1 ステージ検出器、リアルタイム、SOTA |
| **IoU** |予測ボックスとグランド トゥルース ボックス間の重複を測定する |
| **NMS** |重複したボックスを排除し、最適なボックスを維持 |
| **マップ** |検出の主な指標: 平均平均精度 |
| **ウルトラリティクス** | YOLO の Python ライブラリ — 3 行の検出コード |

## 一般的な演習

1. **クイック スタート:** Ultralytics をインストールし、10 種類の画像 (街頭、屋内、自然) で検出します。クラスごとにカウントします。
2. **ビデオ検出:** ビデオ トラフィックを検出します。平均して、1 フレームあたり何台の車両ですか?
3. **モデル サイズの比較:** yolo11n、yolo11m、yolo11x を比較します: 精度、速度、メモリ。
4. **IoU 計算ツール:** IoU 関数を実装し、5 つの異なるボックスのペアでテストします。
5. **カスタム フィルター:** 信頼度 > 80% で **人** (クラス 0) のみを検出するスクリプトを作成します。

> **次の記事:** YOLO カスタム トレーニング — 独自のデータにラベルを付け、特定の問題に対して独自のモデルをトレーニングします。
