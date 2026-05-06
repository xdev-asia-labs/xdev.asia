---
id: 019c9619-ab13-7013-c113-ab1300000013
title: 第 13 課：邊緣部署 — TensorRT、ONNX 與移動
slug: bai-13-edge-deployment
description: >-
  模型優化：量化、剪枝、知識蒸餾。 ONNX 匯出和執行時間。適用於 NVIDIA GPU 的 TensorRT。行動版 TFLite。適用於 iOS 的
  CoreML。 Jetson Nano、Raspberry Pi 部署。基準測試和分析。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 第 5 部分：部署與頂點
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: 深度學習的電腦視覺：從 CNN 到 Vision Transformer
  slug: computer-vision-deep-learning
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-658" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-658)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1081" cy="73" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="1062" cy="174" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1043" cy="275" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="1024" cy="116" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="1005" cy="217" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="63" x2="1100" y2="143" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="93" x2="1050" y2="163" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="945.9089653438086,94 945.9089653438086,132 913,151 880.0910346561914,132 880.0910346561914,94.00000000000001 913,75" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：邊緣部署 — TensorRT、ONNX 和</tspan>
      <tspan x="60" dy="42">智慧型手機</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深度學習的電腦視覺：從 CNN 到 Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：部署與頂點</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

您已經訓練了一個很好的模型 - 但**在哪裡部署？ ** 帶有 GPU 的筆記型電腦很容易，但實際上模型需要在以下設備上運行：

- 📱 **行動** (Android/iOS) — 2-4GB RAM，無 GPU
- 🤖 **邊緣裝置**（Jetson Nano、Raspberry Pi）— 低功耗
- ☁️ **雲**但需要**低延遲**（<50ms)

本課程將向您介紹 **最佳化→轉換→部署** CV 模型到生產的整個過程。

> 🎯 **目標：** 將模型從 100MB → 10MB 減少，推理從 500ms → 20ms。

---

## 1. 為什麼需要邊緣部署？

```
Cloud Inference:
  Client → API call → Cloud GPU → Response
  Latency: 100-500ms  |  Cost: $$$/request  |  Privacy: ❌

Edge Inference:
  Camera → Local Device → Result
  Latency: 10-50ms  |  Cost: One-time  |  Privacy: ✅
```

|因素 |雲|邊緣 |
|--------|--------|--------|
| **延遲** | 100-500 毫秒 | 10-50 毫秒 |
| **成本** |依要求 |一次性硬體 |
| **隱私權** |資料傳送至伺服器 |資料保留在本機 |
| **離線** | ❌ 需要網路 | ✅ 離線工作 |
| **頻寬** |消耗頻寬 |不需要|

---

## 2. 模型最佳化技術

### 2.1 量化－降低精度

```python
"""Quantization: Float32 → Int8, giảm 4x kích thước"""
import torch

# === Post-Training Quantization (PTQ) ===
model = torch.load("yolov8n.pt")
model.eval()

# Dynamic quantization (CPU inference)
quantized_model = torch.quantization.quantize_dynamic(
    model,
    {torch.nn.Linear, torch.nn.Conv2d},
    dtype=torch.qint8,
)

# So sánh kích thước
import os
torch.save(model.state_dict(), "original.pt")
torch.save(quantized_model.state_dict(), "quantized.pt")

orig_size = os.path.getsize("original.pt") / 1e6
quant_size = os.path.getsize("quantized.pt") / 1e6
print(f"Original:  {orig_size:.1f} MB")
print(f"Quantized: {quant_size:.1f} MB")
print(f"Compression: {orig_size/quant_size:.1f}x")
```

```
Quantization levels:
┌──────────────────────────────────────────┐
│ FP32 (4 bytes)  → Accuracy cao nhất     │
│ FP16 (2 bytes)  → ~0% loss, 2x nhỏ hơn │
│ INT8 (1 byte)   → ~1% loss, 4x nhỏ hơn │
│ INT4 (0.5 byte) → ~3% loss, 8x nhỏ hơn │
└──────────────────────────────────────────┘
```

### 2.2 剪枝－剪枝不重要的神經元

```python
"""Pruning: Loại bỏ weights gần 0"""
import torch.nn.utils.prune as prune

model = torch.load("resnet50.pt")

# Prune 30% weights nhỏ nhất trong Conv2d layers
for name, module in model.named_modules():
    if isinstance(module, torch.nn.Conv2d):
        prune.l1_unstructured(module, name='weight', amount=0.3)

# Kiểm tra sparsity
total = 0
pruned = 0
for name, module in model.named_modules():
    if isinstance(module, torch.nn.Conv2d):
        total += module.weight.nelement()
        pruned += (module.weight == 0).sum().item()

print(f"Sparsity: {pruned/total:.1%}")  # ~30%

# Make pruning permanent
for name, module in model.named_modules():
    if isinstance(module, torch.nn.Conv2d):
        prune.remove(module, 'weight')
```

### 2.3 知識蒸餾－師生

```python
"""Knowledge Distillation: Model lớn dạy model nhỏ"""
import torch
import torch.nn.functional as F

# Teacher: model lớn, accuracy cao
teacher = load_model("resnet152")  # 60M params
teacher.eval()

# Student: model nhỏ, cần train
student = load_model("mobilenetv3_small")  # 2.5M params

# Distillation loss
def distillation_loss(student_logits, teacher_logits, labels,
                      temperature=4.0, alpha=0.7):
    # Soft targets từ teacher
    soft_loss = F.kl_div(
        F.log_softmax(student_logits / temperature, dim=1),
        F.softmax(teacher_logits / temperature, dim=1),
        reduction='batchmean',
    ) * (temperature ** 2)

    # Hard targets (ground truth)
    hard_loss = F.cross_entropy(student_logits, labels)

    return alpha * soft_loss + (1 - alpha) * hard_loss

# Training loop
optimizer = torch.optim.Adam(student.parameters(), lr=1e-3)
for images, labels in dataloader:
    with torch.no_grad():
        teacher_logits = teacher(images)

    student_logits = student(images)
    loss = distillation_loss(student_logits, teacher_logits, labels)

    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
```

---

## 3. ONNX — 開放式神經網路交換

### 3.1 匯出到 ONNX

```python
"""ONNX: Format chung cho mọi framework"""
import torch
import onnx

# Load PyTorch model
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')
model.eval()

# Export
dummy_input = torch.randn(1, 3, 640, 640)
torch.onnx.export(
    model,
    dummy_input,
    "yolov5s.onnx",
    opset_version=17,
    input_names=["images"],
    output_names=["output"],
    dynamic_axes={
        "images": {0: "batch_size"},
        "output": {0: "batch_size"},
    },
)

# Verify
onnx_model = onnx.load("yolov5s.onnx")
onnx.checker.check_model(onnx_model)
print("✅ ONNX model is valid")
print(f"📦 Size: {os.path.getsize('yolov5s.onnx')/1e6:.1f} MB")
```

### 3.2 ONNX 執行時間 — 推理

```python
"""ONNX Runtime: 2-3x faster inference"""
# pip install onnxruntime-gpu  # hoặc onnxruntime (CPU)
import onnxruntime as ort
import numpy as np
import cv2
import time

# Load model
providers = ['CUDAExecutionProvider', 'CPUExecutionProvider']
session = ort.InferenceSession("yolov5s.onnx", providers=providers)

# Preprocessing
img = cv2.imread("test.jpg")
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
img_resized = cv2.resize(img_rgb, (640, 640))
img_normalized = img_resized.astype(np.float32) / 255.0
input_tensor = np.transpose(img_normalized, (2, 0, 1))[np.newaxis, ...]

# Inference
start = time.time()
outputs = session.run(None, {"images": input_tensor})
latency = (time.time() - start) * 1000

print(f"⚡ Inference: {latency:.1f}ms")
print(f"📊 Output shape: {outputs[0].shape}")
```

### 3.3 ONNX 最佳化

```python
"""Optimize ONNX model"""
# pip install onnxoptimizer
import onnxoptimizer

model = onnx.load("yolov5s.onnx")
optimized = onnxoptimizer.optimize(model, [
    'eliminate_deadend',
    'eliminate_identity',
    'fuse_bn_into_conv',
    'fuse_consecutive_transposes',
    'fuse_matmul_add_bias_into_gemm',
])
onnx.save(optimized, "yolov5s_optimized.onnx")
```

---

## 4. TensorRT — NVIDIA GPU 最佳化

```python
"""TensorRT: Tối ưu inference trên NVIDIA GPU"""
# pip install tensorrt

# Cách 1: Qua trtexec CLI (đơn giản nhất)
# trtexec --onnx=yolov5s.onnx --saveEngine=yolov5s.engine --fp16

# Cách 2: Python API
import tensorrt as trt

TRT_LOGGER = trt.Logger(trt.Logger.WARNING)

def build_engine(onnx_path, engine_path, fp16=True):
    builder = trt.Builder(TRT_LOGGER)
    network = builder.create_network(
        1 << int(trt.NetworkDefinitionCreationFlag.EXPLICIT_BATCH)
    )
    parser = trt.OnnxParser(network, TRT_LOGGER)

    # Parse ONNX
    with open(onnx_path, 'rb') as f:
        if not parser.parse(f.read()):
            for i in range(parser.num_errors):
                print(f"❌ {parser.get_error(i)}")
            return None

    # Config
    config = builder.create_builder_config()
    config.set_memory_pool_limit(
        trt.MemoryPoolType.WORKSPACE, 1 << 30  # 1GB
    )

    if fp16 and builder.platform_has_fast_fp16:
        config.set_flag(trt.BuilderFlag.FP16)
        print("✅ FP16 enabled")

    # Build engine
    engine = builder.build_serialized_network(network, config)

    with open(engine_path, 'wb') as f:
        f.write(engine)

    print(f"✅ Engine saved: {engine_path}")
    return engine

build_engine("yolov5s.onnx", "yolov5s.engine", fp16=True)
```

```
TensorRT optimizations:
┌─────────────────────────────────────┐
│ Layer Fusion     → Gộp nhiều layer │
│ Kernel Auto-Tune → Chọn kernel tốt │
│ FP16/INT8        → Reduce precision│
│ Memory Optimize  → Pool allocation │
│ Dynamic Batching → Batch requests  │
└─────────────────────────────────────┘

Speedup thường: 2-5x so với PyTorch native
```

---

## 5.TFLite — 移動（Android）

```python
"""TensorFlow Lite cho Android deployment"""
import tensorflow as tf

# Convert from SavedModel
converter = tf.lite.TFLiteConverter.from_saved_model("saved_model/")

# Quantization options
converter.optimizations = [tf.lite.Optimize.DEFAULT]

# Full INT8 quantization (cần representative dataset)
def representative_data_gen():
    for i in range(100):
        # Dùng ảnh thật từ dataset
        img = load_and_preprocess_image(f"calibration/{i}.jpg")
        yield [img.astype(np.float32)]

converter.representative_dataset = representative_data_gen
converter.target_spec.supported_ops = [
    tf.lite.OpsSet.TFLITE_BUILTINS_INT8
]
converter.inference_input_type = tf.uint8
converter.inference_output_type = tf.uint8

# Convert
tflite_model = converter.convert()

# Save
with open("model_int8.tflite", "wb") as f:
    f.write(tflite_model)

print(f"📱 TFLite size: {len(tflite_model)/1e6:.1f} MB")
```

```python
"""Inference với TFLite trên Python (test trước khi deploy)"""
import numpy as np

interpreter = tf.lite.Interpreter(model_path="model_int8.tflite")
interpreter.allocate_tensors()

input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Inference
img = preprocess("test.jpg").astype(np.uint8)
interpreter.set_tensor(input_details[0]['index'], img)
interpreter.invoke()

output = interpreter.get_tensor(output_details[0]['index'])
print(f"Prediction: {output}")
```

---

## 6. CoreML — iOS 部署

```python
"""CoreML cho iOS/macOS deployment"""
# pip install coremltools
import coremltools as ct
import torch

# Load PyTorch model
model = torch.hub.load('pytorch/vision', 'mobilenet_v3_small', pretrained=True)
model.eval()

# Trace
example = torch.randn(1, 3, 224, 224)
traced = torch.jit.trace(model, example)

# Convert to CoreML
mlmodel = ct.convert(
    traced,
    inputs=[ct.ImageType(
        name="image",
        shape=(1, 3, 224, 224),
        scale=1/255.0,
        bias=[0, 0, 0],
    )],
    classifier_config=ct.ClassifierConfig(class_labels),
    compute_precision=ct.precision.FLOAT16,
)

# Save
mlmodel.save("MobileNetV3.mlpackage")
print("✅ CoreML model saved")
```

```swift
// Swift code cho iOS app
import CoreML
import Vision

let model = try! MobileNetV3(configuration: .init())

let request = VNCoreMLRequest(model: try! VNCoreMLModel(for: model.model)) {
    request, error in
    guard let results = request.results as? [VNClassificationObservation] else { return }

    let top = results.first!
    print("Prediction: \(top.identifier) (\(top.confidence * 100)%)")
}

let handler = VNImageRequestHandler(cgImage: image, options: [:])
try! handler.perform([request])
```

---

## 7. 邊緣設備部署

### 7.1 NVIDIA Jetson Nano

```python
"""Deploy trên Jetson Nano với TensorRT"""
# Jetson Nano specs:
# - 128 CUDA cores
# - 4GB RAM
# - ~472 GFLOPS (FP16)

# pip install jetson-inference jetson-utils

import jetson_inference
import jetson_utils

# Load TensorRT engine
net = jetson_inference.detectNet(
    model="ssd-mobilenet-v2",
    threshold=0.5,
)

# Camera input
camera = jetson_utils.videoSource("csi://0")  # CSI camera
display = jetson_utils.videoOutput("display://0")

while display.IsStreaming():
    img = camera.Capture()

    # Detect
    detections = net.Detect(img)

    for d in detections:
        print(f"  {net.GetClassDesc(d.ClassID)}: {d.Confidence:.0%}")

    display.Render(img)
    display.SetStatus(f"FPS: {net.GetNetworkFPS():.0f}")
```

### 7.2 樹莓派

```python
"""Deploy trên Raspberry Pi với TFLite"""
# Raspberry Pi 4 specs:
# - ARM Cortex-A72
# - 4-8GB RAM
# - No GPU → CPU only

# pip install tflite-runtime picamera2
import tflite_runtime.interpreter as tflite
from picamera2 import Picamera2
import numpy as np
import cv2

# Load model
interpreter = tflite.Interpreter(
    model_path="mobilenet_v2_int8.tflite",
    num_threads=4,  # Dùng hết 4 cores
)
interpreter.allocate_tensors()

input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Camera
picam2 = Picamera2()
picam2.configure(picam2.create_preview_configuration(
    main={"size": (640, 480)}
))
picam2.start()

while True:
    frame = picam2.capture_array()

    # Preprocess
    img = cv2.resize(frame, (224, 224))
    img = np.expand_dims(img.astype(np.uint8), axis=0)

    # Inference
    interpreter.set_tensor(input_details[0]['index'], img)
    interpreter.invoke()
    output = interpreter.get_tensor(output_details[0]['index'])

    label = CLASS_NAMES[np.argmax(output)]
    cv2.putText(frame, label, (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.imshow("RPi Detection", frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
```

---

## 8. 基準測試與分析

```python
"""Benchmark inference speed"""
import time
import numpy as np

def benchmark_model(inference_fn, input_data, n_warmup=10, n_runs=100):
    """Benchmark inference speed with warmup"""
    # Warmup
    for _ in range(n_warmup):
        inference_fn(input_data)

    # Benchmark
    times = []
    for _ in range(n_runs):
        start = time.perf_counter()
        inference_fn(input_data)
        elapsed = (time.perf_counter() - start) * 1000
        times.append(elapsed)

    times = np.array(times)
    print(f"  Mean:   {times.mean():.1f}ms")
    print(f"  Median: {np.median(times):.1f}ms")
    print(f"  P95:    {np.percentile(times, 95):.1f}ms")
    print(f"  P99:    {np.percentile(times, 99):.1f}ms")
    print(f"  FPS:    {1000/times.mean():.0f}")

# Benchmark từng format
dummy = np.random.randn(1, 3, 640, 640).astype(np.float32)

print("=== PyTorch ===")
benchmark_model(lambda x: model(torch.from_numpy(x)), dummy)

print("=== ONNX Runtime ===")
benchmark_model(lambda x: session.run(None, {"images": x}), dummy)

print("=== TensorRT ===")
benchmark_model(lambda x: trt_inference(x), dummy)
```

```
Benchmark results (YOLOv5s, 640x640):
┌──────────────┬────────┬──────────┬────────┐
│ Format       │ GPU    │ Latency  │ FPS    │
├──────────────┼────────┼──────────┼────────┤
│ PyTorch FP32 │ T4     │ 12ms     │ 83     │
│ ONNX FP32    │ T4     │ 8ms      │ 125    │
│ TensorRT FP16│ T4     │ 4ms      │ 250    │
│ TFLite INT8  │ RPi4   │ 180ms    │ 5.5    │
│ TensorRT FP16│ Jetson │ 35ms     │ 28     │
└──────────────┴────────┴──────────┴────────┘
```

---

## 9. 部署清單

```
✅  Pre-deployment:
    □ Model accuracy OK trên test set
    □ Chọn target platform (GPU/CPU/Mobile/Edge)
    □ Chọn optimization: Quantize? Prune? Distill?
    □ Export sang format phù hợp (ONNX/TFLite/CoreML/TensorRT)

✅  Optimization:
    □ Benchmark FP32 baseline
    □ Áp dụng FP16 → check accuracy drop
    □ Áp dụng INT8 (nếu cần) → check accuracy drop
    □ Profile memory usage
    □ Test edge cases (ảnh mờ, tối, xoay)

✅  Deployment:
    □ Wrap model trong API (FastAPI/Flask) hoặc SDK
    □ Add pre/post-processing
    □ Error handling & fallback
    □ Logging & monitoring
    □ Load testing (concurrent requests)
```

---

## 總結

|概念 |記住|
|--------|--------|
| **量化** | FP32→FP16→INT8，尺寸縮小2-4倍 |
| **修剪** |減少權重~0，減少計算 |
| **蒸餾** |大模特兒教小模特兒|
| **ONNX** |通用格式，ONNX 運行時快 2-3 倍 |
| **TensorRT** | NVIDIA GPU，速度提升 3-5 倍，FP16/INT8 |
| **TFLite** |安卓/樹莓派，INT8 |
| **CoreML** | iOS/macOS，神經引擎 |

## 一般練習

1. **ONNX 管道：** 匯出 YOLOv5s → ONNX → ONNX 執行時間。比較延遲與 PyTorch 本機延遲。
2. **量化測試：** 將 FP16 + INT8 量化應用於 MobileNet。測量 ImageNet 驗證的準確度下降。
3. **邊緣部署：** 將模型分類部署到 Raspberry Pi（或帶有 TFLite 的純 CPU 筆記型電腦）。目標：>10 FPS。
4. **完整基準測試：** 以 3 種格式（PyTorch、ONNX、TensorRT）對同一模型進行基準測試。建立延遲/FPS/準確性比較表。

> **下一篇文章：** Capstone — 建立端到端的履歷系統，綜合所有知識。
