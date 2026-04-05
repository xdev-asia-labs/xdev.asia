---
id: 019c9619-ab06-7006-c106-ab0600000006
title: 'Bài 6: Real-time Detection — Camera, Video Stream'
slug: bai-6-realtime-detection
description: >-
  Object detection real-time: webcam, RTSP stream, video file.
  Tracking: SORT, DeepSORT, ByteTrack. Counting objects qua line,
  zone-based detection. Optimization cho FPS cao.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Object Detection"
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: "Computer Vision với Deep Learning: Từ CNN đến Vision Transformer"
  slug: computer-vision-deep-learning
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI &amp; ML — Bài 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: Real-time Detection — Camera, Video</tspan>
      <tspan x="60" dy="42">Stream</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Computer Vision với Deep Learning: Từ CNN đến Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Object Detection</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Detection trên ảnh tĩnh thì dễ. Nhưng real-world cần **real-time**: camera giám sát, xe tự lái, đếm khách. Bài này cover: video detection, **object tracking** (theo dõi đối tượng qua frames), **counting** (đếm qua đường), và tối ưu FPS.

> 🎯 **Mục tiêu:** Xây hệ thống detection real-time 30+ FPS với tracking và counting.

---

## 1. YOLO trên Video Stream

### 1.1 Webcam Real-time

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

### 1.2 RTSP / IP Camera Stream

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

## 2. Object Tracking

### 2.1 Tại sao cần Tracking?

```
Detection only:    Frame 1: person A, person B
                   Frame 2: person ?, person ?  ← KHÔNG BIẾT ai là ai!

Detection + Tracking: Frame 1: person A (ID=1), person B (ID=2)
                      Frame 2: person A (ID=1), person B (ID=2) ← BIẾT!
```

### 2.2 Tracking Algorithms

| Algorithm | Cách hoạt động | Tốc độ | Accuracy | Use case |
|-----------|---------------|--------|----------|----------|
| **SORT** | Kalman Filter + Hungarian | ⚡ Rất nhanh | ⭐⭐⭐ | Realtime, simple |
| **DeepSORT** | SORT + appearance features (Re-ID) | 🔥 Nhanh | ⭐⭐⭐⭐ | People tracking |
| **ByteTrack** | Track cả low-confidence detections | ⚡ Rất nhanh | ⭐⭐⭐⭐⭐ | SOTA, recommended |
| **BoT-SORT** | ByteTrack + camera motion compensation | 🔥 Nhanh | ⭐⭐⭐⭐⭐ | Moving camera |

### 2.3 YOLO + Tracking trong 3 dòng code

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

### 2.4 Tracking chi tiết — Lấy thông tin

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

## 3. Object Counting

### 3.1 Line Counting — Đếm qua đường kẻ

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

### 3.2 Zone-based Detection — Đếm trong vùng

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

## 4. Tối ưu FPS

### 4.1 Tips tối ưu speed

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

### 4.2 Benchmark FPS

| Cấu hình | FPS (RTX 3060) | FPS (T4) | FPS (CPU) |
|----------|---------------|---------|----------|
| yolo11n, 640 | 180 | 120 | 25 |
| yolo11n, 320 | 300+ | 200 | 45 |
| yolo11s, 640 | 120 | 80 | 12 |
| yolo11m, 640 | 70 | 45 | 5 |
| yolo11n TRT, 640 | 350+ | 250 | — |

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Video Detection** | YOLO + OpenCV, stream=True cho video dài |
| **Object Tracking** | ByteTrack (recommended), gán unique ID mỗi object |
| **Line Counting** | Track + check qua line → count |
| **Zone Detection** | pointPolygonTest để check object trong vùng |
| **FPS Optimization** | Model nhỏ, imgsz nhỏ, TensorRT, skip frames |

## Bài tập tổng hợp

1. **Webcam Detector:** YOLO + webcam + hiển thị FPS.
2. **People Counter:** Đếm người đi qua 1 cửa (line counting) từ video.
3. **Speed Compare:** Benchmark yolo11n vs yolo11s trên video 1 phút. FPS?
4. **Trajectory Vis:** Vẽ đường đi (trajectory) của mỗi person qua 30 frames gần nhất.

> **Bài tiếp theo:** Image Segmentation — phân loại từng pixel, semantic vs instance vs panoptic.
