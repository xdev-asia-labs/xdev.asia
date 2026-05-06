---
id: 019c9619-bb04-7004-d004-bb0400000004
title: 'Lesson 4: MLX Framework - Apple Intelligence under the hood'
slug: bai-4-mlx-framework-apple-intelligence-duoi-nap-capo
description: >-
  What is MLX, why did Apple create it? Lazy evaluation architecture, unified
  computation graph. Compare MLX vs llama.cpp vs Core ML. Actual benchmarks on
  M1/M2/M3/M4.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 0
section_title: 'Part 2: MLX - 3x acceleration with Apple''s native framework'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Running AI Local with Ollama on Apple Silicon
  slug: ollama-apple-silicon
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-772" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-772)"/>

  <!-- Decorations -->
  <g>
    <circle cx="895" cy="95" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="690" cy="30" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="985" cy="225" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="780" cy="160" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="95" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="85" x2="1100" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="115" x2="1050" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1019.6410161513776,165 1019.6410161513776,205 985,225 950.3589838486224,205 950.3589838486224,165 985,145" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI & ML — Lesson 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: MLX Framework - Apple Intelligence</tspan>
      <tspan x="60" dy="42">under the hood</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Running AI Local with Ollama on Apple Silicon</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: MLX - 3x acceleration with Apple's native framework</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Ollama uses **llama.cpp** to run LLM — and that's already very fast. But Apple has a "secret weapon": **MLX** — a machine learning framework designed specifically for Apple Silicon, taking advantage of all the features of unified memory.

Result? Inference is 2-3x faster than llama.cpp on the same hardware.

---

## 1. What is MLX?

[MLX](https://github.com/ml-explore/mlx) is an open source framework from Apple Research, released late 2023. It is designed for **Apple Silicon**, just like PyTorch is designed for NVIDIA CUDA.

### Main features

- **Unified Memory**: Model, data and computation share the same memory — zero copy overhead
- **Lazy Evaluation**: Only calculate when needed, automatically optimize the computation graph
- **Dynamic Shapes**: No need to pre-compile each shape tensor
- **NumPy-like API**: Familiar if you know NumPy/PyTorch
- **Multi-device**: Automatically takes advantage of GPU, CPU, Neural Engine

### MLX vs other frameworks

| Features | MLX | llama.cpp | PyTorch (MPS) | Core ML |
|--------|-----|-----------|---------------|---------|
| Target | Apple Silicon | Cross-platform | Cross-platform | Apple only |
| Backend | Metal | Metal/CPU | MPS | ANE + GPU |
| Unified Memory aware | ✅ Native | ❌ Ported | ❌ Ported | ✅ Native |
| Ease of use | ★★★★★ | ★★★☆ | ★★★★ | ★★☆☆ |
| LLM inference speed | Fastest | Fast | Slow | Fast (but limited) |
| Model ecosystem | HuggingFace MLX | GGUF | PyTorch | CoreML models |
| Training support | ✅ | ❌ | ✅ | ❌ |

---

## 2. Why is MLX faster?

### Zero-copy memory access

On llama.cpp run through Metal:

```
[CPU loads model] → [Copy to GPU buffer] → [GPU compute] → [Copy result back]
```

On MLX:

```
[Load model to unified memory] → [GPU compute directly] → [Result already accessible]
```

There is no step to copy data back and forth between CPU and GPU. On Apple Silicon, both access the same physical memory.

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

MLX collects all operations into a computation graph and optimizes them before execution. In LLM inference, this makes a big difference because each token generation requires thousands of matrix operations.

### Metal shader optimization

MLX uses custom Metal shaders specifically optimized for Apple GPU architecture, especially for quantized matrix multiplication — the most common operation in LLM inference.

---

## 3. Install MLX

### Prerequisites

```bash
# Python 3.9+ (khuyến nghị 3.11+)
python3 --version

# pip
pip3 --version
```

### Install MLX core

```bash
pip3 install mlx
```

### Check settings

```python
python3 -c "
import mlx.core as mx
print(f'MLX version: {mx.__version__}')
print(f'Default device: {mx.default_device()}')
a = mx.array([1.0, 2.0, 3.0])
print(f'Test: {a * 2}')
"
```

Expected output:

```
MLX version: 0.x.x
Default device: Device(gpu, 0)
Test: array([2, 4, 6], dtype=float32)
```

> 💡 `Device(gpu, 0)` meaning MLX automatically uses Apple GPU. No need for any further configuration.

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

### Lazy eval in practice

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

Benchmark on **MacBook Pro M3 Pro (36GB RAM)** with Llama 3.2 8B Q4:

| Metrics | llama.cpp (Ollama) | MLX (mlx-lm) | Speedup |
|--------|-------|-------|---------|
| Prompt processing | 280 tok/s | 650 tok/s | **2.3x** |
| Token generation | 32 tok/s | 58 tok/s | **1.8x** |
| Time to first token | 0.45s | 0.19s | **2.4x** |
| Memory usage | 6.5 GB | 5.8 GB | -11% |

On **M4 Max (128GB)**:

| Metrics | llama.cpp | MLX | Speedup |
|--------|-----------|-----|---------|
| Prompt (8B Q4) | 680 tok/s | 1450 tok/s | **2.1x** |
| Generation (8B Q4) | 65 tok/s | 105 tok/s | **1.6x** |
| Generation (32B Q4) | 22 tok/s | 42 tok/s | **1.9x** |

> 💡 MLX is especially faster at **prompt processing** (prefill). This creates a feeling of "instant feedback" when chatting.

---

## 6. When to use MLX, when to use llama.cpp?

| Situation | Recommendations |
|-----------|-------------|
| Need maximum speed on Mac | MLX |
| Needs OpenAI-compatible API | Ollama (llama.cpp) |
| Need beautiful UI (Open WebUI...) | Ollama |
| Runs on Linux/Windows | llama.cpp |
| Training/fine-tuning local | MLX |
| Quick prototyping | MLX |
| Production server | Ollama (more stable) |

**Good news**: You can use both! Ollama for daily use, MLX for when speed or custom pipeline is needed. Lesson 6 will guide the combination.

---

## 7. MLX Ecosystem

MLX doesn't just have a core library. Apple and the community have built a rich ecosystem:

| Packages | Description |
|--------|-------|
| `mlx` | Core array framework |
| `mlx-lm` | LLM inference & fine-tuning |
| `mlx-vlm` | Vision-Language models |
| `mlx-whisper` | Speech-to-text |
| `mlx-audio` | Text-to-speech |
| `mlx-image` | Image generation (Stable Diffusion) |

Hugging Face has a community **MLX Community** specializing in converting models to MLX format:

- [huggingface.co/mlx-community](https://huggingface.co/mlx-community)
- Hundreds of pre-quantized models, ready to use

---

## Summary

| Concepts | Remember |
|--------|--------|
| MLX | Apple's ML framework, designed for Apple Silicon |
| Zero-copy | No need to copy CPU↔GPU data thanks to unified memory |
| Lazy eval | Collect operations, optimize graph before calculating |
| Speedup | Faster than llama.cpp ~1.5-2.5x on Mac |
| Ecosystem | mlx-lm, mlx-vlm, mlx-whisper, mlx-audio |

---

## Exercises

1. Install `mlx` and run basic tests: create array, matmul, check device
2. Benchmark matmul with increasing size (1024, 2048, 4096, 8192) — plot time chart
3. Compare `mx.array` with `numpy.array` for the same calculation — which is faster?

**Next article**: Install mlx-lm and run MLX-quantized model →
