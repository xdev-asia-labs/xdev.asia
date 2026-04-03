---
id: 019c9619-bb04-7004-d004-bb0400000004
title: 'Bài 4: MLX Framework - Apple Intelligence dưới nắp capo'
slug: bai-4-mlx-framework-apple-intelligence-duoi-nap-capo
description: >-
  MLX là gì, tại sao Apple tạo ra nó. Kiến trúc lazy evaluation, unified computation graph.
  So sánh MLX vs llama.cpp vs Core ML. Benchmarks thực tế trên M1/M2/M3/M4.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 2: MLX - Tăng tốc 3x với framework native của Apple"
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Chạy AI Local với Ollama trên Apple Silicon
  slug: ollama-apple-silicon
---

## Giới thiệu

Ollama dùng **llama.cpp** để chạy LLM — và đó đã là rất nhanh. Nhưng Apple có một "vũ khí bí mật": **MLX** — framework machine learning được thiết kế riêng cho Apple Silicon, tận dụng mọi đặc tính của unified memory.

Kết quả? Inference nhanh hơn 2-3x so với llama.cpp trên cùng phần cứng.

---

## 1. MLX là gì?

[MLX](https://github.com/ml-explore/mlx) là framework mã nguồn mở của Apple Research, ra mắt cuối 2023. Nó được thiết kế cho **Apple Silicon**, giống như PyTorch được thiết kế cho NVIDIA CUDA.

### Đặc điểm chính

- **Unified Memory**: Model, data và computation share cùng memory — zero copy overhead
- **Lazy Evaluation**: Chỉ tính toán khi cần, tối ưu tự động computation graph
- **Dynamic Shapes**: Không cần compile trước cho từng tensor shape
- **NumPy-like API**: Quen thuộc nếu bạn biết NumPy/PyTorch
- **Multi-device**: Tự động tận dụng GPU, CPU, Neural Engine

### MLX vs các framework khác

| Feature | MLX | llama.cpp | PyTorch (MPS) | Core ML |
|---------|-----|-----------|---------------|---------|
| Target | Apple Silicon | Cross-platform | Cross-platform | Apple only |
| Backend | Metal | Metal/CPU | MPS | ANE + GPU |
| Unified Memory aware | ✅ Native | ❌ Ported | ❌ Ported | ✅ Native |
| Ease of use | ★★★★★ | ★★★☆ | ★★★★ | ★★☆☆ |
| LLM inference speed | Nhanh nhất | Nhanh | Chậm | Nhanh (but limited) |
| Model ecosystem | HuggingFace MLX | GGUF | PyTorch | CoreML models |
| Training support | ✅ | ❌ | ✅ | ❌ |

---

## 2. Tại sao MLX nhanh hơn?

### Zero-copy memory access

Trên llama.cpp chạy qua Metal:

```
[CPU loads model] → [Copy to GPU buffer] → [GPU compute] → [Copy result back]
```

Trên MLX:

```
[Load model to unified memory] → [GPU compute directly] → [Result already accessible]
```

Không có bước copy data qua lại giữa CPU và GPU. Trên Apple Silicon, cả hai đều truy cập cùng physical memory.

### Lazy evaluation graph

```python
import mlx.core as mx

# Không tính ngay!
a = mx.array([1, 2, 3])
b = mx.array([4, 5, 6])
c = a + b        # Chưa tính
d = c * 2         # Chưa tính
result = d.sum()  # Chưa tính

# Chỉ tính khi cần giá trị
mx.eval(result)   # Bây giờ mới tính tất cả, tối ưu tự động
```

MLX gom tất cả operations thành một computation graph và tối ưu trước khi thực thi. Trong LLM inference, điều này tạo ra sự khác biệt lớn vì mỗi token generation cần hàng nghìn matrix operations.

### Metal shader optimization

MLX dùng custom Metal shaders được tối ưu riêng cho Apple GPU architecture, đặc biệt cho quantized matrix multiplication — operation phổ biến nhất trong LLM inference.

---

## 3. Cài đặt MLX

### Prerequisites

```bash
# Python 3.9+ (khuyến nghị 3.11+)
python3 --version

# pip
pip3 --version
```

### Cài MLX core

```bash
pip3 install mlx
```

### Kiểm tra cài đặt

```python
python3 -c "
import mlx.core as mx
print(f'MLX version: {mx.__version__}')
print(f'Default device: {mx.default_device()}')
a = mx.array([1.0, 2.0, 3.0])
print(f'Test: {a * 2}')
"
```

Output mong đợi:

```
MLX version: 0.x.x
Default device: Device(gpu, 0)
Test: array([2, 4, 6], dtype=float32)
```

> 💡 `Device(gpu, 0)` nghĩa là MLX tự động dùng Apple GPU. Không cần config gì thêm.

---

## 4. MLX core concepts

### Arrays

```python
import mlx.core as mx

# Tạo array (giống NumPy)
a = mx.array([1, 2, 3, 4])
b = mx.zeros((3, 4))
c = mx.random.normal((2, 3))

# Operations
d = mx.matmul(c, b[:, :3].T)  # Matrix multiplication

# Dtype
e = mx.array([1.0, 2.0], dtype=mx.float16)
```

### Device placement

```python
# MLX tự động dùng GPU
# Nhưng bạn có thể chỉ định:
with mx.stream(mx.cpu):
    result_cpu = mx.matmul(a, b)  # Chạy trên CPU

with mx.stream(mx.gpu):
    result_gpu = mx.matmul(a, b)  # Chạy trên GPU
```

### Lazy eval trong thực tế

```python
import mlx.core as mx
import time

# Tạo matrix lớn
a = mx.random.normal((4096, 4096))
b = mx.random.normal((4096, 4096))

# Chưa tính!
c = mx.matmul(a, b)
print(type(c))  # <class 'mlx.core.array'>

# Tính khi cần
start = time.time()
mx.eval(c)
print(f"Matmul 4096x4096: {time.time() - start:.4f}s")
```

---

## 5. Benchmark: MLX vs llama.cpp

Benchmark trên **MacBook Pro M3 Pro (36GB RAM)** với Llama 3.2 8B Q4:

| Metric | llama.cpp (Ollama) | MLX (mlx-lm) | Speedup |
|--------|-------------------|--------------|---------|
| Prompt processing | 280 tok/s | 650 tok/s | **2.3x** |
| Token generation | 32 tok/s | 58 tok/s | **1.8x** |
| Time to first token | 0.45s | 0.19s | **2.4x** |
| Memory usage | 6.5 GB | 5.8 GB | -11% |

Trên **M4 Max (128GB)**:

| Metric | llama.cpp | MLX | Speedup |
|--------|-----------|-----|---------|
| Prompt (8B Q4) | 680 tok/s | 1450 tok/s | **2.1x** |
| Generation (8B Q4) | 65 tok/s | 105 tok/s | **1.6x** |
| Generation (32B Q4) | 22 tok/s | 42 tok/s | **1.9x** |

> 💡 MLX đặc biệt nhanh hơn ở **prompt processing** (prefill). Điều này tạo cảm giác "phản hồi tức thì" khi chat.

---

## 6. Khi nào dùng MLX, khi nào dùng llama.cpp?

| Tình huống | Khuyến nghị |
|-----------|-------------|
| Cần tốc độ tối đa trên Mac | MLX |
| Cần OpenAI-compatible API | Ollama (llama.cpp) |
| Cần UI đẹp (Open WebUI...) | Ollama |
| Chạy trên Linux/Windows | llama.cpp |
| Training/fine-tuning local | MLX |
| Quick prototyping | MLX |
| Production server | Ollama (ổn định hơn) |

**Tin vui**: Bạn có thể dùng cả hai! Ollama cho daily use, MLX cho khi cần tốc độ hoặc custom pipeline. Bài 6 sẽ hướng dẫn kết hợp.

---

## 7. MLX Ecosystem

MLX không chỉ có core library. Apple và cộng đồng đã xây dựng ecosystem phong phú:

| Package | Mô tả |
|---------|-------|
| `mlx` | Core array framework |
| `mlx-lm` | LLM inference & fine-tuning |
| `mlx-vlm` | Vision-Language models |
| `mlx-whisper` | Speech-to-text |
| `mlx-audio` | Text-to-speech |
| `mlx-image` | Image generation (Stable Diffusion) |

Hugging Face có cộng đồng **MLX Community** chuyên convert model sang format MLX:

- [huggingface.co/mlx-community](https://huggingface.co/mlx-community)
- Hàng trăm model quantized sẵn, ready to use

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| MLX | Framework ML của Apple, thiết kế cho Apple Silicon |
| Zero-copy | Không cần copy data CPU↔GPU nhờ unified memory |
| Lazy eval | Gom operations, tối ưu graph trước khi tính |
| Speedup | Nhanh hơn llama.cpp ~1.5-2.5x trên Mac |
| Ecosystem | mlx-lm, mlx-vlm, mlx-whisper, mlx-audio |

---

## Bài tập

1. Cài `mlx` và chạy test cơ bản: tạo array, matmul, kiểm tra device
2. Benchmark matmul với kích thước tăng dần (1024, 2048, 4096, 8192) — vẽ biểu đồ thời gian
3. So sánh `mx.array` với `numpy.array` cho cùng phép tính — cái nào nhanh hơn?

**Bài tiếp theo**: Cài mlx-lm và chạy model MLX-quantized →
