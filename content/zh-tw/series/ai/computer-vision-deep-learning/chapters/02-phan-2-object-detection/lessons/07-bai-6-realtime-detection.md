---
id: 019c9619-ab06-7006-c106-ab0600000006
title: 第 6 課：即時偵測 — 攝影機、視訊串流
slug: bai-6-realtime-detection
description: >-
  即時物件偵測：網路攝影機、RTSP 串流、視訊檔案。追蹤：SORT、DeepSORT、ByteTrack。透過基於線、區域的偵測對物體進行計數。高 FPS
  優化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：物體偵測
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: 深度學習的電腦視覺：從 CNN 到 Vision Transformer
  slug: computer-vision-deep-learning
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9739" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9739)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1053" cy="289" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="1006" cy="202" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="959" cy="115" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="912" cy="288" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="865" cy="201" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="119" x2="1100" y2="199" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="149" x2="1050" y2="219" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="948.444863728671,102 948.444863728671,136 919,153 889.555136271329,136 889.555136271329,102.00000000000001 919,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：即時偵測 — 攝影機、視頻</tspan>
      <tspan x="60" dy="42">串流</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深度學習的電腦視覺：從 CNN 到 Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：物體偵測</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

靜態影像的偵測很容易。但現實世界需要**即時**：監視器、自動駕駛汽車、乘客數。本文涵蓋：視訊偵測、**物件追蹤**（透過幀追蹤物件）、**計數**（計數通道）和 FPS 優化。

> 🎯 **目標：** 建立一個具有追蹤和計數功能的 30+ FPS 即時檢測系統。

---

## 1. 視訊串流上的 YOLO

### 1.1 即時網路攝影機

```python
"""YOLO real-time trên webcam"""
import cv2
from ultralytics import YOLO
import time

model = YOLO("yolo11n.pt")

cap = cv2.VideoCapture(0)  # 0 = webcam
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)

fps_counter = 0
fps_start = time.time()
fps_display = 0

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Detection
    results = model(frame, verbose=False, conf=0.5)
    annotated = results[0].plot()

    # FPS counter
    fps_counter += 1
    elapsed = time.time() - fps_start
    if elapsed >= 1.0:
        fps_display = fps_counter / elapsed
        fps_counter = 0
        fps_start = time.time()

    cv2.putText(annotated, f"FPS: {fps_display:.0f}", (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    cv2.imshow("YOLO Real-time", annotated)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
```

### 1.2 RTSP / IP 攝影機串流

```python
"""YOLO trên IP camera (RTSP stream)"""
from ultralytics import YOLO

model = YOLO("yolo11n.pt")

# RTSP stream
rtsp_url = "rtsp://admin:password@192.168.1.100:554/stream1"

# Stream mode — xử lý frame-by-frame, tiết kiệm RAM
results = model(rtsp_url, stream=True, conf=0.25)

for result in results:
    annotated = result.plot()
    cv2.imshow("RTSP Stream", annotated)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
```

---

## 2. 物件追蹤

### 2.1 為什麼我們需要追蹤？

```
Detection only:    Frame 1: person A, person B
                   Frame 2: person ?, person ?  ← KHÔNG BIẾT ai là ai!

Detection + Tracking: Frame 1: person A (ID=1), person B (ID=2)
                      Frame 2: person A (ID=1), person B (ID=2) ← BIẾT!
```

### 2.2 追蹤演算法

|演算法|它是如何運作的 |速度|準確度|使用案例 |
|------------|-------------|--------|---------|----------|
| **排序** |卡爾曼濾波器+匈牙利| ⚡ 非常快| ⭐⭐⭐ |即時、簡單 |
| **深度排序** |排序+外觀特徵（Re-ID） | 🔥 快速 | ⭐⭐⭐⭐ |人員追蹤 |
| **位元組追蹤** |追蹤低置信度檢測 | ⚡ 非常快| ⭐⭐⭐⭐⭐ | SOTA，建議|
| **機器人排序** | ByteTrack + 相機運動補償 | 🔥 快速 | ⭐⭐⭐⭐⭐ |移動相機|

### 2.3 YOLO + 3行程式碼追蹤

```python
"""YOLO Tracking — cực kỳ đơn giản với Ultralytics"""
from ultralytics import YOLO

model = YOLO("yolo11n.pt")

# Track trên video — 1 dòng!
results = model.track(
    source="people_walking.mp4",
    tracker="bytetrack.yaml",  # Hoặc "botsort.yaml"
    show=True,                 # Hiển thị real-time
    conf=0.3,
    persist=True,              # Giữ tracking IDs giữa frames
)
```

### 2.4 詳細追蹤－獲取信息

```python
"""Phân tích tracking results"""
import cv2
from ultralytics import YOLO
from collections import defaultdict

model = YOLO("yolo11n.pt")
cap = cv2.VideoCapture("crosswalk.mp4")

# Lưu trajectory (đường đi) của mỗi object
track_history = defaultdict(list)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    results = model.track(frame, persist=True, verbose=False)
    result = results[0]

    if result.boxes.id is not None:
        boxes = result.boxes.xywh.cpu().numpy()
        track_ids = result.boxes.id.int().cpu().numpy()
        classes = result.boxes.cls.int().cpu().numpy()

        for box, track_id, cls in zip(boxes, track_ids, classes):
            x, y, w, h = box
            class_name = result.names[cls]

            # Lưu vị trí center
            track_history[track_id].append((float(x), float(y)))

            # Vẽ trajectory (đường đi)
            track = track_history[track_id]
            if len(track) > 1:
                points = [(int(p[0]), int(p[1])) for p in track[-30:]]
                for i in range(1, len(points)):
                    cv2.line(frame, points[i-1], points[i], (0, 255, 0), 2)

            # Info
            cv2.putText(frame, f"ID:{track_id} {class_name}",
                       (int(x-w/2), int(y-h/2)-10),
                       cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 255), 2)

    cv2.imshow("Tracking", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
print(f"Total unique objects tracked: {len(track_history)}")
```

---

## 3. 物件計數

### 3.1 行計數 — 透過行進行計數

```python
"""Đếm objects đi qua 1 đường kẻ"""
import cv2
import numpy as np
from ultralytics import YOLO
from collections import defaultdict

model = YOLO("yolo11n.pt")
cap = cv2.VideoCapture("highway.mp4")

# Đường đếm (ngang giữa frame)
frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
count_line_y = frame_height // 2

# Tracking state
track_history = defaultdict(list)
counted_ids = set()
count_up = 0
count_down = 0

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    results = model.track(frame, persist=True, verbose=False, classes=[2])  # class 2 = car

    # Vẽ counting line
    cv2.line(frame, (0, count_line_y), (frame_width, count_line_y),
             (0, 0, 255), 2)

    if results[0].boxes.id is not None:
        for box, track_id in zip(results[0].boxes.xywh.cpu(),
                                  results[0].boxes.id.int().cpu()):
            x, y = float(box[0]), float(box[1])
            tid = int(track_id)

            track_history[tid].append(y)

            # Check nếu đi qua line
            if tid not in counted_ids and len(track_history[tid]) >= 2:
                prev_y = track_history[tid][-2]
                curr_y = track_history[tid][-1]

                if prev_y < count_line_y <= curr_y:
                    count_down += 1
                    counted_ids.add(tid)
                elif prev_y > count_line_y >= curr_y:
                    count_up += 1
                    counted_ids.add(tid)

    # Display counts
    cv2.putText(frame, f"Up: {count_up} | Down: {count_down}",
               (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    cv2.imshow("Vehicle Counter", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
print(f"Final count — Up: {count_up}, Down: {count_down}")
```

### 3.2 基於區域的偵測－區域內計數

```python
"""Đếm objects trong 1 vùng (polygon zone)"""
import numpy as np

# Định nghĩa vùng (polygon)
zone_polygon = np.array([
    [200, 300],
    [600, 300],
    [700, 500],
    [100, 500],
], dtype=np.int32)

def point_in_polygon(point, polygon):
    """Kiểm tra point có nằm trong polygon không"""
    return cv2.pointPolygonTest(polygon, point, False) >= 0

# Trong tracking loop:
objects_in_zone = 0
for box in results[0].boxes.xywh.cpu():
    center = (float(box[0]), float(box[1]))
    if point_in_polygon(center, zone_polygon):
        objects_in_zone += 1

# Vẽ zone
cv2.polylines(frame, [zone_polygon], True, (255, 255, 0), 2)
cv2.putText(frame, f"In Zone: {objects_in_zone}",
           (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 0), 2)
```

---

## 4.優化FPS

### 4.1 優化速度的技巧

```python
"""Các kỹ thuật tăng FPS"""

# 1. Dùng model nhỏ
model = YOLO("yolo11n.pt")  # nano: nhanh nhất

# 2. Giảm input size
results = model(frame, imgsz=320)  # 320 thay vì 640

# 3. Half precision (FP16)
model = YOLO("yolo11n.pt")
results = model(frame, half=True)  # FP16 trên GPU

# 4. Export sang TensorRT
model.export(format="engine", half=True)
trt_model = YOLO("yolo11n.engine")  # 2-3x faster

# 5. Skip frames — không xử lý mọi frame
frame_skip = 2  # Xử lý 1 frame, skip 1
frame_count = 0
while cap.isOpened():
    ret, frame = cap.read()
    frame_count += 1
    if frame_count % frame_skip != 0:
        continue  # Skip frame
    results = model(frame)

# 6. Chỉ detect classes cần thiết
results = model(frame, classes=[0, 2])  # Chỉ person + car
```

### 4.2 基準 FPS

|配置|第一人稱射擊 (RTX 3060) |第一人稱射擊 (T4) | FPS（CPU）|
|----------|-------------|---------|----------|
| yolo11n，640 | 180 | 180 120 | 120 25 | 25
| yolo11n，320 | 300+ | 200 | 200 45 | 45
| yolo11s，640 | 120 | 120 80| 12 | 12
| yolo11m, 640 | 70 | 70 45 | 45 5 |
| yolo11n TRT，640 | 350+ | 250 | 250 — |

---

## 總結

|概念 |記住|
|--------|--------|
| **視頻檢測** | YOLO + OpenCV，對於長視頻，stream=True |
| **物件追蹤** | ByteTrack（建議），為每個物件分配一個唯一的ID |
| **行計數** |線路追蹤+檢查→計數|
| **區域偵測** | pointPolygonTest 檢查區域中的物件 |
| **FPS 最佳化** |小模型、小imgsz、TensorRT、跳幀 |

## 一般練習

1. **網路攝影機偵測器：** YOLO + 網路攝影機 + FPS 顯示。
2. **人數統計器：** 從影片中統計通過門的人數（行計數）。
3. **速度比較：** 在 1 分鐘影片上對 yolo11n 與 yolo11s 進行基準測試。第一人稱射擊？
4. **軌跡可見：** 繪製每個人最近30幀的軌跡。

> **下一篇文章：** 影像分割 - 逐像素分類、語意與實例與全景。
