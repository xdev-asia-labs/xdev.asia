---
id: 019c9619-ab05-7005-c105-ab0500000005
title: 'レッスン 5: YOLO カスタム トレーニング — データのラベル付け、トレーニング、デプロイ'
slug: bai-5-train-yolo-custom
description: >-
  エンドツーエンドのカスタム YOLO: 画像の収集、Roboflow/CVAT によるラベル付け、YAML データセットの構成、Google Colab
  でのトレーニング、mAP の評価、モデルのエクスポート。使用例: 製品のカウント、生産エラーの検出。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 2: 物体の検出'
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: '深層学習によるコンピューター ビジョン: CNN から Vision Transformer まで'
  slug: computer-vision-deep-learning
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI と ML — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: YOLO カスタムのトレーニング — ラベル</tspan>
      <tspan x="60" dy="42">データ、トレーニング、導入</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深層学習によるコンピューター ビジョン: CNN から Vision Transformer まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 物体の検出</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

YOLO 事前トレーニングは 80 個の COCO クラスを検出します。しかし、**欠陥品**、**ベトナムのナンバープレート**、または特定の**種類の魚**を検出する必要があるでしょうか?別のデータセットで **YOLO カスタム**をトレーニングする必要があります。

> 🎯 **この記事:** エンドツーエンドのワークフロー: 画像の収集 → ラベル → 構成 → トレーニング → 評価 → エクスポート。

---

## 1. データ収集

### 1.1 写真は何枚あれば十分ですか?

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

### 1.2 データソース

```
1. Chụp ảnh thực tế (tốt nhất!)
2. Tải từ Roboflow Universe (roboflow.com/universe)
3. Google Images (cần lọc + verify)
4. Scraping (cẩn thận copyright)
5. Synthetic data (render 3D, paste objects)
```

### 1.3 良い写真を集めるためのヒント

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

## 2. データのラベル付け (データ アノテーション)

### 2.1 ラベルツール

|ツール |タイプ |無料？ |利点 |
|----------|----------|----------|----------|
| **ロボフロー** |ウェブ |無料枠 |最も使いやすい、YOLO 形式でエクスポート |
| **CVAT** |ウェブ/セルフホスト |無料 |強力なビデオサポート |
| **ラベルスタジオ** |自己ホスト型 |無料 |多くのタスクの種類 |
| **LabelImg** |デスクトップ |無料 |シンプル、オフライン |
| **レーベル名** |デスクトップ |無料 |ポリゴンの注釈 |

### 2.2 Roboflow によるラベル付け (推奨)

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

### 2.3 YOLO ラベルの形式

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

### 2.4 品質ラベルのヒント

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

## 3. データセットの構成

### 3.1 ディレクトリ構造

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

### 3.2 YAML データセット

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

## 4. YOLOカスタムのトレーニング

### 4.1 基本トレーニング

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

### 4.2 高度なトレーニング — ハイパーパラメータの最適化

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

### 4.3 Google Colab でのトレーニング

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

## 5. 評価とデバッグ

### 5.1 モデルの評価

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

### 5.2 混同行列

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

### 5.3 一般的なトレーニングの問題

|問題 |症状 |ソリューション |
|----------|---------------|----------|
| **過学習** |列車損失↓、ヴァル損失↑ |データの追加、拡張、ドロップアウト |
| **フィッティング不足** |どちらの損失も大きい |モデル サイズ、エポック、lr を増やす |
| **ラベルエラー** | mAP が異常に低い |ラベルを確認し、一貫性をチェックします |
| **小さな物体は見逃されます** |小さなオブジェクトの再現率が低い | imgsz=1280 を増やし、SAHI を追加 |
| **クラスの不均衡** | 1 クラスの検出が不十分 |少数派クラスのオーバーサンプル |

---

## 6. エクスポートモデル

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

## 7. ユースケース: 不良品の検出

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

## 概要

|ステップ |仕事 |ツール |
|----------|----------|----------|
| 1. データ収集 | 1クラスあたり300枚以上の写真を収集 |カメラ、Roboflow ユニバース |
| 2. ラベル付け |境界ボックスを描画する |ロボフロー、CVAT |
| 3. 設定 | dataset.yaml を作成する | YAML ファイル |
| 4. トレーニング |鉄道YOLOカスタム |ウルトラリティクス、Google Colab |
| 5. 評価 | mAP、P、Rの評価 | `model.val()` |
| 6. エクスポート | ONNX/TRT に変換 | `model.export()` |

## 一般的な演習

1. **クイック プロジェクト:** Roboflow Universe からデータセットを読み込みます (例: 「ハードハット検出」)。 YOLOv11n を訓練します。 mAP@50 > 80% を達成しました。
2. **カスタム データセット:** 1 つのオブジェクト (例: カップ、ペン、水筒) の写真を 100 枚撮影します。 Roboflow のラベル。トレーニングとテスト。
3. **比較:** yolo11n、yolo11s、yolo11m と同じデータセットをトレーニングします。精度、速度、モデルのサイズを比較します。
4. **エクスポート テスト:** ONNX にエクスポートします。 ONNX ランタイムを使用した推論。 PyTorch と速度を比較します。

> **次の記事:** リアルタイム検出 — DeepSORT を使用してカメラ、ビデオ ストリーム、オブジェクト追跡を検出します。
