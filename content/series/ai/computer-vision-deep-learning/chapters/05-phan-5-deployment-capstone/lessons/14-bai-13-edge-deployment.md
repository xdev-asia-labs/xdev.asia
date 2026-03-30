---
id: 019c9619-ab13-7013-c113-ab1300000013
title: 'Bài 13: Edge Deployment — TensorRT, ONNX & Mobile'
slug: bai-13-edge-deployment
description: >-
  Model optimization: quantization, pruning, knowledge distillation. ONNX
  export & runtime. TensorRT cho NVIDIA GPU. TFLite cho mobile. CoreML
  cho iOS. Jetson Nano, Raspberry Pi deployment. Benchmark & profiling.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 5: Deployment & Capstone"
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: "Computer Vision với Deep Learning: Từ CNN đến Vision Transformer"
  slug: computer-vision-deep-learning
---

## Giới thiệu

Bạn đã train được model ngon — nhưng **deploy ở đâu?** Laptop có GPU thì dễ, nhưng thực tế model cần chạy trên:

- 📱 **Mobile** (Android/iOS) — RAM 2-4GB, no GPU
- 🤖 **Edge devices** (Jetson Nano, Raspberry Pi) — low power
- ☁️ **Cloud** nhưng cần **low latency** (<50ms)

Bài này dạy bạn toàn bộ quy trình **optimize → convert → deploy** model CV lên production.

> 🎯 **Mục tiêu:** Giảm model từ 100MB → 10MB, inference từ 500ms → 20ms.

---

## 1. Tại sao cần Edge Deployment?

```
Cloud Inference:
  Client → API call → Cloud GPU → Response
  Latency: 100-500ms  |  Cost: $$$/request  |  Privacy: ❌

Edge Inference:
  Camera → Local Device → Result
  Latency: 10-50ms  |  Cost: One-time  |  Privacy: ✅
```

| Yếu tố | Cloud | Edge |
|---------|-------|------|
| **Latency** | 100-500ms | 10-50ms |
| **Cost** | Per-request | One-time hardware |
| **Privacy** | Data sent to server | Data stays local |
| **Offline** | ❌ Cần internet | ✅ Hoạt động offline |
| **Bandwidth** | Tốn bandwidth | Không cần |

---

## 2. Model Optimization Techniques

### 2.1 Quantization — Giảm precision

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

### 2.2 Pruning — Cắt bỏ neuron không quan trọng

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

### 2.3 Knowledge Distillation — Teacher-Student

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

## 3. ONNX — Open Neural Network Exchange

### 3.1 Export sang ONNX

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

### 3.2 ONNX Runtime — Inference

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

### 3.3 ONNX Optimization

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

## 4. TensorRT — NVIDIA GPU Optimization

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

## 5. TFLite — Mobile (Android)

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

## 6. CoreML — iOS Deployment

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

## 7. Edge Devices Deployment

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

### 7.2 Raspberry Pi

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

## 8. Benchmark & Profiling

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

## 9. Deployment Checklist

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

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Quantization** | FP32→FP16→INT8, giảm 2-4x size |
| **Pruning** | Cắt weights ~0, giảm computation |
| **Distillation** | Model lớn dạy model nhỏ |
| **ONNX** | Format chung, ONNX Runtime nhanh 2-3x |
| **TensorRT** | NVIDIA GPU, nhanh 3-5x, FP16/INT8 |
| **TFLite** | Android/Raspberry Pi, INT8 |
| **CoreML** | iOS/macOS, Neural Engine |

## Bài tập tổng hợp

1. **ONNX Pipeline:** Export YOLOv5s → ONNX → ONNX Runtime. So sánh latency vs PyTorch native.
2. **Quantization Test:** Áp dụng FP16 + INT8 quantization cho MobileNet. Đo accuracy drop trên ImageNet validation.
3. **Edge Deploy:** Deploy model classification lên Raspberry Pi (hoặc laptop CPU-only với TFLite). Target: >10 FPS.
4. **Full Benchmark:** Benchmark cùng 1 model trên 3 format (PyTorch, ONNX, TensorRT). Tạo bảng so sánh latency/FPS/accuracy.

> **Bài tiếp theo:** Capstone — Xây hệ thống CV End-to-End, tổng hợp tất cả kiến thức.
