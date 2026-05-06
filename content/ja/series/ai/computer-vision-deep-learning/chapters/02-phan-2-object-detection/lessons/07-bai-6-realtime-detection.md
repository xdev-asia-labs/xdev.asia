---
id: 019c9619-ab06-7006-c106-ab0600000006
title: 'レッスン 6: リアルタイム検出 — カメラ、ビデオ ストリーム'
slug: bai-6-realtime-detection
description: >-
  リアルタイムのオブジェクト検出: Web カメラ、RTSP ストリーム、ビデオ ファイル。トラッキング:
  SORT、DeepSORT、ByteTrack。ライン、ゾーンベースの検出を介してオブジェクトをカウントします。高 FPS 向けの最適化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: 物体の検出'
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: '深層学習によるコンピューター ビジョン: CNN から Vision Transformer まで'
  slug: computer-vision-deep-learning
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI と ML — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: リアルタイム検出 — カメラ、ビデオ</tspan>
      <tspan x="60" dy="42">ストリーム</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深層学習によるコンピューター ビジョン: CNN から Vision Transformer まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 物体の検出</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

静止画での検出は簡単です。しかし、現実世界では**リアルタイム**が必要です: 監視カメラ、自動運転車、乗客数のカウント。この記事では、ビデオ検出、**オブジェクト追跡** (フレームを介したオブジェクトの追跡)、**カウント** (パスのカウント)、および FPS の最適化について説明します。

> 🎯 **目標:** 追跡とカウントを備えた 30 FPS 以上のリアルタイム検出システムを構築します。

---

## 1.ビデオストリームのYOLO

### 1.1 リアルタイム Web カメラ

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

### 1.2 RTSP / IP カメラストリーム

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

## 2. オブジェクトの追跡

### 2.1 なぜ追跡が必要なのでしょうか?

```
Detection only:    Frame 1: person A, person B
                   Frame 2: person ?, person ?  ← KHÔNG BIẾT ai là ai!

Detection + Tracking: Frame 1: person A (ID=1), person B (ID=2)
                      Frame 2: person A (ID=1), person B (ID=2) ← BIẾT!
```

### 2.2 追跡アルゴリズム

|アルゴリズム |仕組み |スピード |精度 |使用例 |
|----------|------|----------|----------|----------|
| **並べ替え** |カルマン フィルター + ハンガリー語 | ⚡ 非常に速い | ⭐⭐⭐ |リアルタイム、シンプル |
| **DeepSORT** | SORT + 外観機能 (Re-ID) | 🔥 速い | ⭐⭐⭐⭐ |人物追跡 |
| **バイトトラック** |信頼性の低い検出を両方追跡します。 ⚡ 非常に速い | ⭐⭐⭐⭐⭐ | SOTA、おすすめ |
| **BoT-SORT** | ByteTrack + カメラモーション補正 | 🔥 速い | ⭐⭐⭐⭐⭐ |動くカメラ |

### 2.3 YOLO + 3 行のコードでの追跡

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

### 2.4 詳細な追跡 — 情報の取得

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

## 3. オブジェクトのカウント

### 3.1 行カウント — 行ごとにカウントする

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

### 3.2 ゾーンベースの検出 — ゾーン内のカウント

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

## 4. FPS を最適化する

### 4.1 速度を最適化するためのヒント

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

### 4.2 ベンチマーク FPS

|構成 | FPS (RTX 3060) | FPS (T4) | FPS（CPU） |
|----------|------|----------|----------|
| yolo11n、640 | 180 | 120 | 25 |
|ヨロ11n、320 | 300+ | 200 | 45 |
| yolo11s、640 | 120 | 80 | 12 |
|ヨロ11メートル、640 | 70 | 45 | 5 |
| yolo11n TRT、640 | 350+ | 250 | — |

---

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| **ビデオ検出** | YOLO + OpenCV、長いビデオの場合は stream=True |
| **オブジェクト追跡** | ByteTrack (推奨)、各オブジェクトに一意の ID を割り当てます。
| **行数カウント** |トラック + ライン経由でチェック → カウント |
| **ゾーン検出** |エリア内のオブジェクトをチェックする pointPolygonTest |
| **FPS の最適化** |小さいモデル、小さい imgsz、TensorRT、フレームをスキップ |

## 一般的な演習

1. **ウェブカメラ検出器:** YOLO + ウェブカメラ + FPS ディスプレイ。
2. **人数カウンター:** ビデオからドアを通過する人数をカウントします (ラインカウント)。
3. **速度の比較:** 1 分間のビデオで yolo11n と yolo11s のベンチマークを行います。 FPS？
4. **軌跡の可視性:** 最後の 30 フレームを通じて各人の軌跡を描画します。

> **次の記事:** 画像のセグメンテーション — ピクセルごとの分類、セマンティック vs インスタンス vs パノプティック。
