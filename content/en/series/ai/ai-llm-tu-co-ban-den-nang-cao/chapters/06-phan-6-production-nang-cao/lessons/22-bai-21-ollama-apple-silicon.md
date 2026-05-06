---
id: 019d5b01-bb21-7021-c021-bb2100000021
title: 'Lesson 21: Running AI Local with Ollama on Apple Silicon — Deep Dive'
slug: bai-21-ollama-apple-silicon
description: >-
  Deep dive running LLM locally on Apple Silicon: understanding Unified Memory &
  Metal GPU architecture, in-depth Ollama installation and configuration,
  Modelfile tuning, GGUF quantization, benchmarking actual tokens/s on
  M1/M2/M3/M4, comparing with MLX framework, multi-model serving, building a
  complete local AI development stack.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 20
section_title: 'Part 6: Production & Enhancement'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI & LLM: From Basics to Advanced'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7777" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7777)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1056" cy="38" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1012" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="968" cy="130" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="924" cy="46" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="880" cy="222" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="138" x2="1100" y2="218" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="168" x2="1050" y2="238" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1016.5788383248864,171.5 1016.5788383248864,204.5 988,221 959.4211616751136,204.5 959.4211616751135,171.5 988,155" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI & ML — Lesson 20</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 21: Run AI Local with Ollama above</tspan>
      <tspan x="60" dy="42">Apple Silicon — Deep Dive</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI & LLM: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Production & Enhancement</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Overview

Lesson 20 introduced how to deploy LLM with Ollama, vLLM, TGI at an overview level. This article takes a **full dive** into Apple Silicon — understanding **why** it runs LLM better than most regular laptops, how to get the most out of the hardware, and building a production-grade local AI stack on the Mac.

**You will learn:**

1. Apple Silicon Architecture — Unified Memory, Metal GPU, Neural Engine
2. How Ollama takes advantage of Metal Performance Shaders for inference
3. Quantization GGUF — choose the correct format for each chip
4. Modelfile — tuning parameters, system prompt, template
5. Benchmark detailed tokens/s on M1 → M4
6. Apple MLX framework — compared to Ollama
7. Multi-model serving and concurrent inference
8. Build a complete local AI dev stack (RAG + Code Assistant + Embedding)

---

## 1. Why does Apple Silicon run LLM well?

### 1.1 Unified Memory Architecture (UMA)

On a regular PC/laptop, the CPU and GPU have separate RAM. When running LLM on the GPU, model weights must be **copied from System RAM to VRAM** — this process is slow and limited by PCIe bandwidth (~32 GB/s PCIe 4.0 x16).

Apple Silicon completely changes with **Unified Memory**:

```
╔══════════════════════════════════════════════════════════╗
║              Kiến trúc truyền thống (x86)               ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  ┌─────────┐    PCIe 4.0     ┌──────────┐               ║
║  │   CPU   │◄──────────────►│   GPU    │               ║
║  │         │   ~32 GB/s      │          │               ║
║  └────┬────┘                 └────┬─────┘               ║
║       │                           │                      ║
║  ┌────▼────┐                 ┌────▼─────┐               ║
║  │ System  │                 │   VRAM   │               ║
║  │  RAM    │   ← COPY →     │ (riêng)  │               ║
║  │ 32-64GB │                 │ 8-24GB   │               ║
║  └─────────┘                 └──────────┘               ║
║                                                          ║
║  Bottleneck: PCIe bandwidth + VRAM giới hạn             ║
╚══════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════╗
║              Apple Silicon (UMA)                         ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  ┌─────────┐  ┌─────────┐  ┌──────────────┐            ║
║  │   CPU   │  │   GPU   │  │ Neural Engine│            ║
║  │ (P+E)   │  │ (Metal) │  │   (ANE)      │            ║
║  └────┬────┘  └────┬────┘  └──────┬───────┘            ║
║       │             │              │                     ║
║       └─────────────┼──────────────┘                     ║
║                     │                                    ║
║              ┌──────▼──────┐                             ║
║              │  Unified    │                             ║
║              │  Memory     │                             ║
║              │  8-192 GB   │                             ║
║              │             │                             ║
║              │ ~200-800    │                             ║
║              │  GB/s       │                             ║
║              └─────────────┘                             ║
║                                                          ║
║  Không cần copy! CPU/GPU/ANE truy cập cùng memory pool  ║
╚══════════════════════════════════════════════════════════╝
```

**Actual meaning:**

- Mac 16GB RAM = 16GB for model (no separate CPU/GPU split)
- No overhead copying data via PCIe
- Very high memory bandwidth — the deciding factor for inference speed

### 1.2 Memory Bandwidth — Factor that determines speed

LLM inference (especially autoregressive decoding) is limited by **memory bandwidth**, not compute. Reason: each generated token needs to read the entire model weights once.

```
Công thức ước tính tokens/s:

  tokens/s ≈ Memory_Bandwidth(GB/s) / Model_Size(GB)

Ví dụ: M2 Pro (200 GB/s) chạy Llama 3.2 3B (Q4_K_M ≈ 2.0 GB):
  → 200 / 2.0 ≈ 100 tokens/s (lý thuyết)
  → Thực tế: ~70-80 tokens/s (overhead KV cache, OS, ...)
```

**Apple Silicon Memory Bandwidth Board:**

| Chips | Memory BW | Compared to RTX 4090 (1008 GB/s) |
|---|---|---|
| **M1** | 68.25 GB/s | 6.8% |
| **M1 Pro** | 200 GB/s | 19.8% |
| **M1 Max** | 400 GB/s | 39.7% |
| **M1 Ultra** | 800 GB/s | 79.4% |
| **M2** | 100 GB/s | 9.9% |
| **M2 Pro** | 200 GB/s | 19.8% |
| **M2 Max** | 400 GB/s | 39.7% |
| **M2 Ultra** | 800 GB/s | 79.4% |
| **M3** | 100 GB/s | 9.9% |
| **M3 Pro** | 150 GB/s | 14.9% |
| **M3 Max** | 400 GB/s | 39.7% |
| **M4** | 120 GB/s | 11.9% |
| **M4 Pro** | 273 GB/s | 27.1% |
| **M4 Max** | 546 GB/s | 54.2% |

> RTX 4090 has much higher bandwidth, but only 24GB VRAM. The Mac M4 Max can have up to 128GB of unified memory — enough to run the 70B model where a desktop GPU cannot.

### 1.3 Metal GPU & Compute Pipeline

Ollama uses **llama.cpp** below, and llama.cpp supports Apple **Metal** — Apple's GPU compute framework. When running on Apple Silicon:

```
Request → Ollama Server → llama.cpp → Metal Backend
                                          │
                                    ┌─────▼─────┐
                                    │ Metal      │
                                    │ Performance│
                                    │ Shaders    │
                                    │            │
                                    │ • MatMul   │
                                    │ • Softmax  │
                                    │ • RoPE     │
                                    │ • RMS Norm │
                                    │ • GELU     │
                                    └────────────┘
                                          │
                                    ┌─────▼─────┐
                                    │ Apple GPU  │
                                    │ Cores      │
                                    │ (10-40)    │
                                    └────────────┘
```

All tensor operations (matrix multiplication, attention, normalization) run on **GPU cores via Metal** — not the CPU. This is why Macs run LLM much faster than pure x86 CPU laptops.

Check if Ollama is using Metal:

```bash
# Xem log khi load model
OLLAMA_DEBUG=1 ollama run llama3.2:3b

# Tìm dòng này trong log:
# ggml_metal_init: allocating
# ggml_metal_init: found device: Apple M2 Pro
# ggml_metal_init: recommendedMaxWorkingSetSize = 22906.50 MB
```

### 1.4 Neural Engine (ANE) — Untapped

Apple Silicon has **Neural Engine** (ANE) — 16-38 TOPS, designed for ML inference. However, currently most LLM frameworks (Ollama, llama.cpp, MLX) **do not use ANE** for text generation because:

- ANE optimized for batch processing (image classification, vision)
- LLM autoregressive decoding generates 1 token/step — not suitable for ANE
- Lack of operator support for new Transformer architectures

> This is why you see high GPU usage when running Ollama, but ANE is almost idle.

---

## 2. Install Ollama on macOS — In-depth configuration

### 2.1 Installation

```bash
# Cách 1: Homebrew
brew install ollama

# Cách 2: Download app từ ollama.com (có GUI status icon)
# → khuyên dùng cho người mới

# Kiểm tra
ollama --version
# ollama version is 0.6.x
```

### 2.2 Configuration via Environment Variables

Ollama has many environment variables to tune — most users ignore:

```bash
# Tạo file cấu hình cho launchd (persistent sau reboot)
cat > ~/Library/LaunchAgents/com.ollama.env.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.ollama.env</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/bin/true</string>
  </array>
  <key>EnvironmentVariables</key>
  <dict>
    <key>OLLAMA_HOST</key>
    <string>127.0.0.1:11434</string>
    <key>OLLAMA_NUM_PARALLEL</key>
    <string>2</string>
    <key>OLLAMA_MAX_LOADED_MODELS</key>
    <string>2</string>
    <key>OLLAMA_KEEP_ALIVE</key>
    <string>30m</string>
    <key>OLLAMA_FLASH_ATTENTION</key>
    <string>1</string>
  </dict>
</dict>
</plist>
EOF
```

Or simpler — set in shell:

```bash
# Thêm vào ~/.zshrc
export OLLAMA_HOST="127.0.0.1:11434"   # Bind address (default: 127.0.0.1)
export OLLAMA_NUM_PARALLEL=2            # Concurrent requests per model
export OLLAMA_MAX_LOADED_MODELS=2       # Số model giữ trong memory cùng lúc
export OLLAMA_KEEP_ALIVE="30m"          # Giữ model trong RAM bao lâu sau request cuối
export OLLAMA_FLASH_ATTENTION=1         # Bật Flash Attention (tiết kiệm memory)
export OLLAMA_MODELS="$HOME/.ollama/models"  # Thư mục lưu models
```

**Detailed explanation:**

| Variable | Default | Meaning |
|---|---|---|
| `OLLAMA_NUM_PARALLEL` | 1 | Number of requests processed in parallel on 1 model. Increase = use more RAM for KV cache |
| `OLLAMA_MAX_LOADED_MODELS` | 1 | Model number loaded simultaneously. M1 8GB should be set to 1, M4 Max 64GB can be set to 3-4 |
| `OLLAMA_KEEP_ALIVE` | 5m | After how long of not using it, unload the model. Set "0" = unload immediately, "-1" = keep forever |
| `OLLAMA_FLASH_ATTENTION` | 0 | Flash Attention reduces memory usage for KV cache by ~50%. **Should be enabled on Apple Silicon** |

### 2.3 Check Metal GPU is working

```bash
# Chạy model với debug log
OLLAMA_DEBUG=1 ollama run llama3.2:3b 2>&1 | head -30

# Kết quả mong đợi:
# ggml_metal_init: allocating
# ggml_metal_init: found device: Apple M2 Pro
# ggml_metal_init: recommendedMaxWorkingSetSize = 22906.50 MB
# ggml_metal_init: hasUnifiedMemory = true
# ...
# llm_load_tensors: offloading 32 repeating layers to GPU
# llm_load_tensors: offloaded 32/33 layers to GPU
```

If you see `offloaded X/Y layers to GPU` with X = Y or close to Y → model is running entirely on Metal GPU.

---

## 3. Quantization GGUF — Choose the right format for Apple Silicon

### 3.1 What is GGUF?

GGUF (GPT-Generated Unified Format) is the model format of llama.cpp — the runtime that Ollama uses underneath. When you `ollama pull llama3.2:3b`, Ollama downloads the pre-quantized GGUF file.

### 3.2 Quantization levels

```
┌─────────────────────────────────────────────────────────────────┐
│              Quantization Levels — Chất lượng vs Kích thước     │
├──────────┬──────────┬────────────┬──────────────────────────────┤
│ Format   │ Bits/w   │ Size (7B)  │ Ghi chú                      │
├──────────┼──────────┼────────────┼──────────────────────────────┤
│ F16      │ 16       │ ~14 GB     │ Full precision, chậm         │
│ Q8_0     │ 8        │ ~7.5 GB    │ Gần như không mất chất lượng │
│ Q6_K     │ 6        │ ~5.5 GB    │ Rất tốt, khó phân biệt F16  │
│ Q5_K_M   │ 5        │ ~4.8 GB    │ Sweet spot cho 16GB RAM      │
│ Q4_K_M   │ 4        │ ~4.1 GB    │ ★ Khuyên dùng — cân bằng    │
│ Q4_K_S   │ 4        │ ~3.9 GB    │ Nhỏ hơn Q4_K_M một chút     │
│ Q3_K_M   │ 3        │ ~3.3 GB    │ Bắt đầu giảm chất lượng     │
│ Q2_K     │ 2        │ ~2.7 GB    │ Chất lượng kém, chỉ để test  │
│ IQ4_XS   │ ~4       │ ~3.8 GB    │ i-quant, tốt hơn Q4 cùng    │
│          │          │            │ kích thước                    │
│ IQ3_XXS  │ ~3       │ ~2.9 GB    │ i-quant, tốt hơn Q3 cùng    │
│          │          │            │ kích thước                    │
└──────────┴──────────┴────────────┴──────────────────────────────┘

★ Khuyên dùng trên Apple Silicon:
  - 8GB RAM  → Q4_K_M (model 3B-7B)
  - 16GB RAM → Q4_K_M hoặc Q5_K_M (model 7B-14B)
  - 32GB RAM → Q5_K_M hoặc Q6_K (model 14B-32B)
  - 64GB+    → Q6_K hoặc Q8_0 (model 32B-70B)
```

### 3.3 K-quants vs I-quants on Apple Silicon

**K-quants** (Q4_K_M, Q5_K_M, ...): uses k-means clustering method. Fast on Metal GPU.

**I-quants** (IQ4_XS, IQ3_XXS, ...): importance-weighted quantization. Better quality at the same size but **slower on Metal** because of the need for complex lookup tables.

```
Benchmark: Llama 3.1 8B trên M3 Pro 18GB

Format      Size    tokens/s    Perplexity (thấp = tốt)
Q8_0        8.5 GB  28 t/s      5.82
Q6_K        6.6 GB  34 t/s      5.84
Q5_K_M      5.7 GB  38 t/s      5.89
Q4_K_M      4.9 GB  42 t/s      5.98     ← sweet spot
IQ4_XS      4.5 GB  36 t/s      5.95     ← tốt hơn Q4 nhưng chậm hơn trên Metal
Q3_K_M      3.9 GB  45 t/s      6.18     ← bắt đầu thấy chất lượng giảm
Q2_K        3.2 GB  48 t/s      6.95     ← chất lượng kém rõ rệt
```

> **Conclusion:** On Apple Silicon, **Q4_K_M** is the most optimal choice. If you have extra RAM, upgrade to Q5_K_M or Q6_K.

### 3.4 Load model with specific quantization

```bash
# Ollama thường dùng Q4_K_M mặc định
ollama pull llama3.2

# Muốn dùng GGUF cụ thể từ HuggingFace? → Tạo Modelfile
# (xem phần 4)
```

---

## 4. Modelfile — Tuning and Customization

Modelfile is Ollama's way of allowing you to customize the model — sort of `Dockerfile` for containers.

### 4.1 Modelfile structure

```dockerfile
# Modelfile cho coding assistant tiếng Việt
FROM qwen2.5-coder:7b

# Parameters — ảnh hưởng trực tiếp đến chất lượng output
PARAMETER temperature 0.3
PARAMETER top_p 0.9
PARAMETER top_k 40
PARAMETER repeat_penalty 1.1
PARAMETER num_ctx 8192
PARAMETER num_predict 2048
PARAMETER stop "<|im_end|>"
PARAMETER stop "<|endoftext|>"

# System prompt
SYSTEM """Bạn là senior software engineer chuyên viết code clean, có comment tiếng Việt.
Quy tắc:
1. Luôn giải thích approach trước khi viết code
2. Code phải production-ready — có error handling, logging
3. Dùng TypeScript strict mode khi được hỏi về JS/TS
4. Trả lời bằng tiếng Việt, thuật ngữ kỹ thuật giữ nguyên tiếng Anh
"""

# Template — Jinja2
TEMPLATE """{{ if .System }}<|im_start|>system
{{ .System }}<|im_end|>
{{ end }}{{ if .Prompt }}<|im_start|>user
{{ .Prompt }}<|im_end|>
{{ end }}<|im_start|>assistant
{{ .Response }}<|im_end|>
"""
```

### 4.2 Explanation of Parameters for Apple Silicon

```
┌──────────────┬─────────┬────────────────────────────────────────┐
│ Parameter    │ Default │ Ý nghĩa và tuning tips                 │
├──────────────┼─────────┼────────────────────────────────────────┤
│ num_ctx      │ 2048    │ Context window. Tăng = dùng nhiều RAM  │
│              │         │ cho KV cache. Trên 8GB RAM, giữ ≤ 4096 │
│              │         │ Trên 16GB+, có thể tăng lên 8192-16384 │
├──────────────┼─────────┼────────────────────────────────────────┤
│ num_predict  │ -1      │ Max tokens sinh ra. -1 = unlimited     │
│              │         │ Set giới hạn để tránh response quá dài │
├──────────────┼─────────┼────────────────────────────────────────┤
│ num_gpu      │ auto    │ Số GPU layers offload. Trên Apple      │
│              │         │ Silicon nên để auto hoặc 999 (all GPU) │
├──────────────┼─────────┼────────────────────────────────────────┤
│ num_thread   │ auto    │ CPU threads cho operations không chạy  │
│              │         │ trên GPU. Để auto trên Apple Silicon   │
├──────────────┼─────────┼────────────────────────────────────────┤
│ temperature  │ 0.8     │ 0.0 = deterministic, 1.0+ = creative  │
│              │         │ Code: 0.1-0.3 / Chat: 0.7-0.9         │
├──────────────┼─────────┼────────────────────────────────────────┤
│ repeat_penalty│ 1.1    │ Phạt token lặp lại. Tăng nếu model    │
│              │         │ hay repeat. 1.0 = không phạt           │
└──────────────┴─────────┴────────────────────────────────────────┘
```

### 4.3 Create and use custom models

```bash
# Lưu Modelfile ở trên vào file
vim ~/Modelfiles/vn-coder

# Build model
ollama create vn-coder -f ~/Modelfiles/vn-coder

# Chạy
ollama run vn-coder
>>> Viết API endpoint đăng ký user bằng Hono + Drizzle ORM
```

### 4.4 Import GGUF from HuggingFace

When you want to use a model/quantization not available in the Ollama registry:

```bash
# Download GGUF từ HuggingFace
pip install huggingface-hub
huggingface-cli download bartowski/Qwen2.5-14B-Instruct-GGUF \
  --include "Qwen2.5-14B-Instruct-Q5_K_M.gguf" \
  --local-dir ~/models/

# Tạo Modelfile trỏ đến GGUF
cat > ~/Modelfiles/qwen14b-q5 << 'EOF'
FROM ~/models/Qwen2.5-14B-Instruct-Q5_K_M.gguf

PARAMETER num_ctx 8192
PARAMETER temperature 0.7

TEMPLATE """{{ if .System }}<|im_start|>system
{{ .System }}<|im_end|>
{{ end }}{{ if .Prompt }}<|im_start|>user
{{ .Prompt }}<|im_end|>
{{ end }}<|im_start|>assistant
{{ .Response }}<|im_end|>
"""
EOF

# Build
ollama create qwen14b-q5 -f ~/Modelfiles/qwen14b-q5

# Chạy
ollama run qwen14b-q5
```

---

## 5. Detailed benchmark on Apple Silicon

### 5.1 Script benchmark tokens/s

Ollama returns metrics in response when `stream: false`:

```python
#!/usr/bin/env python3
"""benchmark_ollama.py — Benchmark Ollama trên Apple Silicon"""

import json
import time
import subprocess
import requests

OLLAMA_URL = "http://localhost:11434"

PROMPTS = {
    "short": "Giải thích Docker là gì trong 3 câu.",
    "medium": "Viết hàm Python merge sort với type hints, docstring và unit tests đầy đủ.",
    "long": "Thiết kế kiến trúc hệ thống e-commerce với microservices: API Gateway, "
            "User Service, Product Service, Order Service, Payment Service. Vẽ ASCII "
            "diagram, giải thích communication patterns, database choices, và deployment strategy.",
}

def benchmark_model(model: str, prompt_key: str, prompt: str) -> dict:
    """Chạy benchmark 1 model với 1 prompt"""
    start = time.time()

    resp = requests.post(f"{OLLAMA_URL}/api/generate", json={
        "model": model,
        "prompt": prompt,
        "stream": False,
        "options": {"num_ctx": 4096}
    })

    elapsed = time.time() - start
    data = resp.json()

    # Ollama trả về timing chi tiết
    total_duration = data.get("total_duration", 0) / 1e9  # nanoseconds → seconds
    load_duration = data.get("load_duration", 0) / 1e9
    prompt_eval_count = data.get("prompt_eval_count", 0)
    prompt_eval_duration = data.get("prompt_eval_duration", 0) / 1e9
    eval_count = data.get("eval_count", 0)
    eval_duration = data.get("eval_duration", 0) / 1e9

    prompt_tokens_per_sec = prompt_eval_count / prompt_eval_duration if prompt_eval_duration > 0 else 0
    gen_tokens_per_sec = eval_count / eval_duration if eval_duration > 0 else 0

    return {
        "model": model,
        "prompt_type": prompt_key,
        "prompt_tokens": prompt_eval_count,
        "generated_tokens": eval_count,
        "prompt_processing": f"{prompt_tokens_per_sec:.1f} t/s",
        "generation_speed": f"{gen_tokens_per_sec:.1f} t/s",
        "total_time": f"{total_duration:.1f}s",
        "load_time": f"{load_duration:.1f}s",
        "time_to_first_token": f"{prompt_eval_duration:.2f}s",
    }

def get_system_info() -> dict:
    """Lấy thông tin chip và RAM"""
    chip = subprocess.run(
        ["sysctl", "-n", "machdep.cpu.brand_string"],
        capture_output=True, text=True
    ).stdout.strip()

    mem_bytes = int(subprocess.run(
        ["sysctl", "-n", "hw.memsize"],
        capture_output=True, text=True
    ).stdout.strip())

    return {"chip": chip, "ram_gb": mem_bytes / (1024**3)}

if __name__ == "__main__":
    system = get_system_info()
    print(f"\n{'='*60}")
    print(f"System: {system['chip']}")
    print(f"RAM: {system['ram_gb']:.0f} GB")
    print(f"{'='*60}\n")

    models = ["llama3.2:3b", "qwen2.5:7b"]
    results = []

    for model in models:
        print(f"\n--- Benchmarking: {model} ---")
        # Warm up — load model vào memory
        requests.post(f"{OLLAMA_URL}/api/generate", json={
            "model": model, "prompt": "hi", "stream": False
        })

        for key, prompt in PROMPTS.items():
            result = benchmark_model(model, key, prompt)
            results.append(result)
            print(f"  [{key:6s}] gen: {result['generation_speed']:>8s} | "
                  f"tokens: {result['generated_tokens']:>4d} | "
                  f"total: {result['total_time']:>6s}")

    print(f"\n{'='*60}")
    print(json.dumps(results, indent=2, ensure_ascii=False))
```

```bash
python3 benchmark_ollama.py
```

### 5.2 Reference benchmark results

Here are the actual results on Apple Silicon chips (Q4_K_M, num_ctx=4096):

```
╔═══════════════════════════════════════════════════════════════════════════╗
║         Benchmark: Generation Speed (tokens/s) — Q4_K_M                  ║
╠═════════════════╦═══════════╦════════════╦════════════╦════════════════════╣
║ Chip            ║ 3B model  ║ 7B model   ║ 14B model  ║ 32B model         ║
║                 ║ (Llama    ║ (Qwen2.5   ║ (Qwen2.5   ║ (Qwen2.5          ║
║                 ║  3.2)     ║  7B)       ║  14B)      ║  32B)             ║
╠═════════════════╬═══════════╬════════════╬════════════╬════════════════════╣
║ M1 8GB          ║ 35 t/s    ║ 15 t/s     ║ OOM        ║ OOM               ║
║ M1 Pro 16GB     ║ 55 t/s    ║ 30 t/s     ║ 12 t/s     ║ OOM               ║
║ M1 Max 32GB     ║ 80 t/s    ║ 52 t/s     ║ 28 t/s     ║ 10 t/s            ║
║ M1 Max 64GB     ║ 82 t/s    ║ 55 t/s     ║ 30 t/s     ║ 16 t/s            ║
║ M1 Ultra 128GB  ║ 95 t/s    ║ 75 t/s     ║ 48 t/s     ║ 28 t/s            ║
╠═════════════════╬═══════════╬════════════╬════════════╬════════════════════╣
║ M2 8GB          ║ 42 t/s    ║ 18 t/s     ║ OOM        ║ OOM               ║
║ M2 Pro 16GB     ║ 60 t/s    ║ 35 t/s     ║ 14 t/s     ║ OOM               ║
║ M2 Max 32GB     ║ 85 t/s    ║ 55 t/s     ║ 30 t/s     ║ 12 t/s            ║
║ M2 Max 96GB     ║ 88 t/s    ║ 58 t/s     ║ 32 t/s     ║ 18 t/s            ║
║ M2 Ultra 192GB  ║ 105 t/s   ║ 80 t/s     ║ 52 t/s     ║ 32 t/s            ║
╠═════════════════╬═══════════╬════════════╬════════════╬════════════════════╣
║ M3 8GB          ║ 45 t/s    ║ 20 t/s     ║ OOM        ║ OOM               ║
║ M3 Pro 18GB     ║ 52 t/s    ║ 32 t/s     ║ 15 t/s     ║ OOM               ║
║ M3 Max 36GB     ║ 90 t/s    ║ 58 t/s     ║ 32 t/s     ║ 14 t/s            ║
║ M3 Max 128GB    ║ 92 t/s    ║ 60 t/s     ║ 34 t/s     ║ 18 t/s            ║
╠═════════════════╬═══════════╬════════════╬════════════╬════════════════════╣
║ M4 16GB         ║ 50 t/s    ║ 25 t/s     ║ OOM        ║ OOM               ║
║ M4 Pro 24GB     ║ 72 t/s    ║ 45 t/s     ║ 22 t/s     ║ OOM               ║
║ M4 Max 36GB     ║ 105 t/s   ║ 68 t/s     ║ 38 t/s     ║ 16 t/s            ║
║ M4 Max 64GB     ║ 108 t/s   ║ 70 t/s     ║ 40 t/s     ║ 22 t/s            ║
║ M4 Max 128GB    ║ 110 t/s   ║ 72 t/s     ║ 42 t/s     ║ 25 t/s            ║
╚═════════════════╩═══════════╩════════════╩════════════╩════════════════════╝

OOM = Out of Memory — model không vừa RAM (cần swap, cực chậm)

Ngưỡng "usable" cho interactive chat: ≥ 15 tokens/s
Ngưỡng "comfortable":                 ≥ 30 tokens/s
Ngưỡng "fast":                        ≥ 50 tokens/s
```

### 5.3 Model selection matrix according to machine

```
╔═══════════════════════════════════════════════════════════════════╗
║            Bạn có Mac nào? → Dùng model gì?                     ║
╠══════════════╦════════════════════════════════════════════════════╣
║ 8GB RAM      ║ llama3.2:3b, phi3:mini, gemma2:2b                ║
║ (M1/M2/M3/M4)║ → Chat cơ bản, summarization, quick Q&A          ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 16GB RAM     ║ qwen2.5:7b, mistral:7b, llama3.1:8b              ║
║              ║ → Coding, RAG, structured output                  ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 24GB RAM     ║ qwen2.5:14b, phi4:14b                            ║
║              ║ → Chất lượng cao, reasoning tasks                 ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 32-36GB RAM  ║ qwen2.5:32b (Q4), deepseek-coder-v2:16b          ║
║              ║ → Near-GPT-4 quality cho nhiều task               ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 64GB+ RAM    ║ llama3.1:70b (Q4), qwen2.5:72b (Q4)              ║
║              ║ → GPT-4 class, enterprise use cases               ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 128GB+ RAM   ║ llama3.1:70b (Q6/Q8), mixtral 8x22B              ║
║              ║ → Full precision large models                      ║
╚══════════════╩════════════════════════════════════════════════════╝
```

---

## 6. Apple MLX vs Ollama — When to use what?

### 6.1 What is MLX?

**MLX** is an ML framework developed by Apple, optimized specifically for Apple Silicon. Unlike Ollama/llama.cpp which uses Metal via compute shaders, MLX was **designed from scratch** for UMA.

```bash
# Cài MLX
pip install mlx mlx-lm

# Chạy model
mlx_lm.generate \
  --model mlx-community/Qwen2.5-7B-Instruct-4bit \
  --prompt "Giải thích Kubernetes" \
  --max-tokens 500

# Hoặc chạy server OpenAI-compatible
mlx_lm.server --model mlx-community/Qwen2.5-7B-Instruct-4bit --port 8080
```

### 6.2 Compare MLX vs Ollama

```
╔══════════════════╦══════════════════════╦══════════════════════╗
║                  ║ Ollama               ║ MLX                  ║
╠══════════════════╬══════════════════════╬══════════════════════╣
║ Backend          ║ llama.cpp + Metal    ║ MLX (Apple native)   ║
║ Tốc độ           ║ Nhanh                ║ Nhanh hơn 10-20%     ║
║                  ║                      ║ (một số model)       ║
║ Dễ dùng          ║ ★★★★★ (1 lệnh)      ║ ★★★ (cần Python)     ║
║ Model format     ║ GGUF                 ║ SafeTensors (MLX)    ║
║ Model hub        ║ ollama.com library   ║ HuggingFace          ║
║                  ║ (1-click pull)       ║ (mlx-community)      ║
║ Multi-model      ║ ✅ Built-in           ║ ❌ Manual             ║
║ API Server       ║ ✅ OpenAI-compatible  ║ ✅ (mlx_lm.server)   ║
║ Fine-tuning      ║ ❌                    ║ ✅ LoRA/QLoRA         ║
║ Cross-platform   ║ ✅ Mac/Linux/Windows  ║ ❌ Mac only           ║
║ Docker support   ║ ✅                    ║ ❌                    ║
║ Memory efficient ║ Tốt                  ║ Rất tốt (lazy eval)  ║
╚══════════════════╩══════════════════════╩══════════════════════╝
```

### 6.3 When to use what?

- **Ollama**: Used for most cases. Easy setup, built-in model library, API server production-ready, multi-model serving.
- **MLX**: When you need maximum speed on Mac, when you want to fine-tune LoRA locally, or need deep integration into the Python pipeline.

### 6.4 Fine-tune LoRA with MLX (Mac only)

```bash
# Cài đặt
pip install mlx-lm

# Chuẩn bị data (JSONL format)
cat > train.jsonl << 'EOF'
{"text": "<|im_start|>user\nDocker là gì?<|im_end|>\n<|im_start|>assistant\nDocker là nền tảng container hóa...<|im_end|>"}
{"text": "<|im_start|>user\nKubernetes là gì?<|im_end|>\n<|im_start|>assistant\nKubernetes là hệ thống orchestration...<|im_end|>"}
EOF

# Fine-tune
mlx_lm.lora \
  --model mlx-community/Qwen2.5-7B-Instruct-4bit \
  --data ./train.jsonl \
  --batch-size 1 \
  --lora-layers 8 \
  --iters 100 \
  --adapter-path ./adapters

# Test model đã fine-tune
mlx_lm.generate \
  --model mlx-community/Qwen2.5-7B-Instruct-4bit \
  --adapter-path ./adapters \
  --prompt "Docker là gì?"

# Merge adapter vào model
mlx_lm.fuse \
  --model mlx-community/Qwen2.5-7B-Instruct-4bit \
  --adapter-path ./adapters \
  --save-path ./my-finetuned-model
```

---

## 7. Multi-model Serving and Concurrent Inference

### 7.1 Run multiple models at the same time

```bash
# Cấu hình Ollama cho multi-model
export OLLAMA_MAX_LOADED_MODELS=3      # Load tối đa 3 models
export OLLAMA_NUM_PARALLEL=2            # 2 requests song song per model
export OLLAMA_KEEP_ALIVE="1h"           # Giữ model loaded 1 giờ

# Restart Ollama
brew services restart ollama
```

### 7.2 Router Pattern — Select model by task

```python
#!/usr/bin/env python3
"""model_router.py — Route requests đến model phù hợp"""

from openai import OpenAI
from enum import Enum

client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")

class TaskType(Enum):
    CODE = "code"
    CHAT = "chat"
    ANALYSIS = "analysis"
    EMBEDDING = "embedding"

# Mapping task → model (tuỳ chỉnh theo RAM của bạn)
MODEL_MAP = {
    TaskType.CODE: "qwen2.5-coder:7b",       # Code-optimized
    TaskType.CHAT: "llama3.2:3b",             # Nhẹ, nhanh cho chat
    TaskType.ANALYSIS: "qwen2.5:14b",         # Nặng hơn, cho reasoning
    TaskType.EMBEDDING: "nomic-embed-text",   # Embedding model
}

def classify_task(user_message: str) -> TaskType:
    """Phân loại task đơn giản bằng keyword matching"""
    code_keywords = ["code", "viết", "function", "class", "bug", "error",
                     "implement", "refactor", "API", "endpoint", "SQL"]
    analysis_keywords = ["phân tích", "so sánh", "thiết kế", "kiến trúc",
                         "đánh giá", "review", "explain why", "trade-off"]

    msg_lower = user_message.lower()

    if any(kw.lower() in msg_lower for kw in code_keywords):
        return TaskType.CODE
    if any(kw.lower() in msg_lower for kw in analysis_keywords):
        return TaskType.ANALYSIS
    return TaskType.CHAT

def route_and_generate(user_message: str, task_type: TaskType = None) -> str:
    """Route request đến model phù hợp"""
    if task_type is None:
        task_type = classify_task(user_message)

    model = MODEL_MAP[task_type]
    print(f"[Router] Task: {task_type.value} → Model: {model}")

    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": user_message}],
        temperature=0.3 if task_type == TaskType.CODE else 0.7,
    )
    return response.choices[0].message.content

# Demo
if __name__ == "__main__":
    # Tự động route đến code model
    print(route_and_generate("Viết function Python merge sort"))

    # Tự động route đến analysis model
    print(route_and_generate("Phân tích trade-off giữa SQL và NoSQL"))

    # Tự động route đến chat model (nhẹ, nhanh)
    print(route_and_generate("Hôm nay thời tiết thế nào?"))
```

### 7.3 Embedding + Chat pipeline (RAG local)

```python
#!/usr/bin/env python3
"""local_rag.py — RAG hoàn toàn local trên Apple Silicon"""

import json
import numpy as np
from openai import OpenAI

client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")

# ─── 1. Embedding local ────────────────────────────────────────

def get_embedding(text: str) -> list[float]:
    """Lấy embedding từ Ollama (nomic-embed-text)"""
    response = client.embeddings.create(
        model="nomic-embed-text",
        input=text
    )
    return response.data[0].embedding

def cosine_similarity(a: list[float], b: list[float]) -> float:
    a_np, b_np = np.array(a), np.array(b)
    return float(np.dot(a_np, b_np) / (np.linalg.norm(a_np) * np.linalg.norm(b_np)))

# ─── 2. Simple Vector Store ────────────────────────────────────

class LocalVectorStore:
    def __init__(self):
        self.documents: list[dict] = []

    def add(self, text: str, metadata: dict = None):
        embedding = get_embedding(text)
        self.documents.append({
            "text": text,
            "embedding": embedding,
            "metadata": metadata or {}
        })

    def search(self, query: str, top_k: int = 3) -> list[dict]:
        query_embedding = get_embedding(query)
        scored = []
        for doc in self.documents:
            score = cosine_similarity(query_embedding, doc["embedding"])
            scored.append({**doc, "score": score})
        scored.sort(key=lambda x: x["score"], reverse=True)
        return scored[:top_k]

# ─── 3. RAG Pipeline ──────────────────────────────────────────

def rag_query(store: LocalVectorStore, question: str) -> str:
    """Full RAG: retrieve → augment → generate"""
    # Retrieve
    results = store.search(question, top_k=3)
    context = "\n\n".join([
        f"[Nguồn {i+1} — score: {r['score']:.3f}]\n{r['text']}"
        for i, r in enumerate(results)
    ])

    # Generate với context
    response = client.chat.completions.create(
        model="qwen2.5:7b",  # Hoặc model khác tuỳ RAM
        messages=[
            {"role": "system", "content":
                "Trả lời câu hỏi dựa trên context được cung cấp. "
                "Nếu context không đủ thông tin, nói rõ. "
                "Trích dẫn nguồn khi trả lời."},
            {"role": "user", "content":
                f"Context:\n{context}\n\nCâu hỏi: {question}"}
        ],
        temperature=0.3
    )
    return response.choices[0].message.content

# ─── 4. Demo ───────────────────────────────────────────────────

if __name__ == "__main__":
    store = LocalVectorStore()

    # Index documents
    docs = [
        "Docker là platform container hóa giúp đóng gói ứng dụng cùng dependencies "
        "vào container. Container chia sẻ kernel với host OS, nhẹ hơn VM.",
        "Kubernetes (K8s) là hệ thống orchestration cho containers. K8s quản lý "
        "scheduling, scaling, self-healing, service discovery cho containerized apps.",
        "Docker Compose cho phép định nghĩa multi-container application bằng YAML file. "
        "Phù hợp cho development và testing, không nên dùng cho production scale lớn.",
        "Helm là package manager cho Kubernetes. Helm Charts đóng gói K8s manifests "
        "thành reusable packages, dễ versioning và sharing.",
    ]

    print("Indexing documents...")
    for doc in docs:
        store.add(doc)
    print(f"Indexed {len(docs)} documents.\n")

    # Query
    question = "Khi nào nên dùng Docker Compose vs Kubernetes?"
    print(f"Q: {question}\n")
    answer = rag_query(store, question)
    print(f"A: {answer}")
```

```bash
# Cần pull embedding model trước
ollama pull nomic-embed-text
ollama pull qwen2.5:7b

# Chạy
pip install numpy openai
python3 local_rag.py
```

---

## 8. Build a complete Local AI Dev Stack

### 8.1 Stack Overview

```
╔══════════════════════════════════════════════════════════════════╗
║             Local AI Dev Stack trên Apple Silicon               ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │ IDE: VS Code / Cursor / Zed                              │   ║
║  │ + Continue.dev extension (kết nối Ollama)                │   ║
║  └─────────────────────┬────────────────────────────────────┘   ║
║                        │                                         ║
║  ┌─────────────────────▼────────────────────────────────────┐   ║
║  │ Ollama Server (localhost:11434)                           │   ║
║  │                                                           │   ║
║  │  ┌───────────┐  ┌────────────────┐  ┌────────────────┐   │   ║
║  │  │ Chat/Q&A  │  │ Code Assistant │  │ Embedding      │   │   ║
║  │  │ llama3.2  │  │ qwen2.5-coder  │  │ nomic-embed    │   │   ║
║  │  │ :3b       │  │ :7b            │  │ -text          │   │   ║
║  │  └───────────┘  └────────────────┘  └────────────────┘   │   ║
║  └──────────────────────────────────────────────────────────┘   ║
║                        │                                         ║
║  ┌─────────────────────▼────────────────────────────────────┐   ║
║  │ Application Layer                                         │   ║
║  │                                                           │   ║
║  │  • Python scripts (OpenAI SDK → Ollama)                  │   ║
║  │  • Local RAG pipeline (embedding + vector search)         │   ║
║  │  • CLI tools (shell scripts → curl Ollama API)            │   ║
║  │  • Web UI: Open WebUI (Docker)                            │   ║
║  └──────────────────────────────────────────────────────────┘   ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### 8.2 Step 1: Pull the necessary models

```bash
# Code assistant (ưu tiên nhất)
ollama pull qwen2.5-coder:7b

# General chat
ollama pull llama3.2:3b

# Embedding cho RAG
ollama pull nomic-embed-text

# (Tuỳ chọn) Model lớn hơn nếu có RAM
ollama pull qwen2.5:14b          # 24GB+ RAM
ollama pull deepseek-coder-v2    # 16GB+ RAM

# Kiểm tra
ollama list
```

### 8.3 Step 2: Install Continue.dev for VS Code

**Continue** is an extension for VS Code/JetBrains, connecting directly to Ollama to have an AI coding assistant **completely offline**.

```bash
# Cài extension
code --install-extension continue.continue
```

Configuration `~/.continue/config.json`:

```json
{
  "models": [
    {
      "title": "Qwen2.5 Coder 7B (Local)",
      "provider": "ollama",
      "model": "qwen2.5-coder:7b",
      "apiBase": "http://localhost:11434"
    },
    {
      "title": "Llama 3.2 3B (Fast)",
      "provider": "ollama",
      "model": "llama3.2:3b",
      "apiBase": "http://localhost:11434"
    }
  ],
  "tabAutocompleteModel": {
    "title": "Qwen2.5 Coder (Autocomplete)",
    "provider": "ollama",
    "model": "qwen2.5-coder:7b",
    "apiBase": "http://localhost:11434"
  },
  "embeddingsProvider": {
    "provider": "ollama",
    "model": "nomic-embed-text",
    "apiBase": "http://localhost:11434"
  }
}
```

After installation: open VS Code → `Cmd+L` to chat, `Tab` for autocomplete — all run locally.

### 8.4 Step 3: Open WebUI (ChatGPT-like local interface)

```bash
# Chạy Open WebUI kết nối Ollama
docker run -d \
  --name open-webui \
  -p 3000:8080 \
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
  -v open-webui-data:/app/backend/data \
  ghcr.io/open-webui/open-webui:main

# Truy cập http://localhost:3000
# Tạo tài khoản admin (local, không gửi data đi đâu)
```

### 8.5 Step 4: CLI helper scripts

```bash
# Thêm vào ~/.zshrc

# Chat nhanh từ terminal
ai() {
  curl -s http://localhost:11434/api/generate \
    -d "{\"model\": \"llama3.2:3b\", \"prompt\": \"$*\", \"stream\": false}" \
    | python3 -c "import sys,json; print(json.load(sys.stdin)['response'])"
}

# Code review từ clipboard
ai-review() {
  local code=$(pbpaste)
  curl -s http://localhost:11434/api/generate \
    -d "{\"model\": \"qwen2.5-coder:7b\", \"prompt\": \"Review code này, chỉ ra bugs và improvements:\\n\\n$code\", \"stream\": false}" \
    | python3 -c "import sys,json; print(json.load(sys.stdin)['response'])"
}

# Giải thích error message
ai-error() {
  curl -s http://localhost:11434/api/generate \
    -d "{\"model\": \"qwen2.5-coder:7b\", \"prompt\": \"Giải thích error này và cách fix:\\n\\n$*\", \"stream\": false}" \
    | python3 -c "import sys,json; print(json.load(sys.stdin)['response'])"
}

# Commit message generator
ai-commit() {
  local diff=$(git diff --staged)
  if [ -z "$diff" ]; then echo "No staged changes"; return 1; fi
  curl -s http://localhost:11434/api/generate \
    -d "{\"model\": \"llama3.2:3b\", \"prompt\": \"Viết conventional commit message (ngắn gọn, tiếng Anh) cho diff này:\\n\\n$diff\", \"stream\": false}" \
    | python3 -c "import sys,json; print(json.load(sys.stdin)['response'])"
}
```

```bash
# Dùng
source ~/.zshrc

ai "Giải thích SOLID principles"
ai-error "TypeError: cannot unpack non-iterable NoneType object"
ai-commit  # Tự generate commit message từ staged changes
```

---

## 9. Monitoring & Profiling

### 9.1 Monitor resource usage

```bash
# Xem model đang loaded và memory usage
ollama ps

# Output:
# NAME              ID           SIZE    PROCESSOR  UNTIL
# qwen2.5:7b       abcd1234     5.3 GB  100% GPU   4 minutes from now
# llama3.2:3b       efgh5678     2.0 GB  100% GPU   4 minutes from now

# Monitor GPU/memory real-time
# Mở Activity Monitor → GPU History (⌘+4)
# Hoặc dùng powermetrics (cần sudo)
sudo powermetrics --samplers gpu_power -i 1000 -n 10
```

### 9.2 Check if the model fits in RAM

```
Công thức ước tính RAM cần:

  RAM_needed = Model_Size + KV_Cache + OS_overhead

Trong đó:
  Model_Size  = (params × bits_per_weight) / 8
  KV_Cache    ≈ 2 × num_layers × d_model × num_ctx × 2 bytes
              ≈ Model_Size × (num_ctx / 1000) × 0.05
  OS_overhead ≈ 2-4 GB (macOS + background apps)

Ví dụ: Qwen2.5 7B Q4_K_M, num_ctx = 8192
  Model     ≈ 4.5 GB
  KV_Cache  ≈ 4.5 × 8.192 × 0.05 ≈ 1.8 GB
  OS        ≈ 3 GB
  ─────────────────
  TỔNG      ≈ 9.3 GB → Cần ít nhất 16GB RAM

Nếu bạn dùng Flash Attention (OLLAMA_FLASH_ATTENTION=1):
  KV_Cache giảm ~50% → TỔNG ≈ 8.4 GB → Vẫn tight trên 8GB
```

---

## 10. Advanced Troubleshooting

### 10.1 Model loads but runs extremely slowly

**Symptoms:** `ollama ps` display `PROCESSOR: 50% GPU / 50% CPU` or `100% CPU`.

**Cause:** The model does not fit completely in GPU memory → part of the layers runs on the CPU.

**Fix:**
```bash
# Kiểm tra
ollama ps
# Nếu thấy "X% CPU" → model quá lớn

# Giải pháp 1: Dùng model nhỏ hơn
ollama rm qwen2.5:14b
ollama pull qwen2.5:7b

# Giải pháp 2: Giảm context window
# Tạo Modelfile với num_ctx thấp hơn
echo 'FROM qwen2.5:7b
PARAMETER num_ctx 2048' > /tmp/Modelfile
ollama create qwen-small-ctx -f /tmp/Modelfile

# Giải pháp 3: Bật Flash Attention
export OLLAMA_FLASH_ATTENTION=1
brew services restart ollama
```

### 10.2 Error `signal: killed` or the app crashes

macOS will kill the process when it runs out of memory. Check Console.app → find `jetsam` events. events.

```bash
# Xem memory pressure
memory_pressure

# Kết quả:
# The system has X free pages (...)
# System-wide memory free percentage: Y%

# Nếu Y < 10% → cần giải phóng RAM
```

### 10.3 Ollama does not accept new models after the update

```bash
# Clear cache
rm -rf ~/.ollama/tmp/*

# Re-pull model
ollama pull qwen2.5:7b

# Restart service
brew services restart ollama
```

### 10.4 Performance drop when using external monitor

Some Macs (especially M1/M2 base) have GPU throttle when connecting an external display because the GPU has to render the entire display.

**Fix:** Close GPU intensive apps (games, video editing) when running LLM intensive tasks.

---

## 11. Security when running Local AI

### 11.1 Network exposure

```bash
# ❌ NGUY HIỂM — expose ra mạng nội bộ / internet
export OLLAMA_HOST="0.0.0.0:11434"

# ✅ AN TOÀN — chỉ bind localhost
export OLLAMA_HOST="127.0.0.1:11434"
```

If remote access is needed (for example from another computer on the local network):

```bash
# Dùng SSH tunnel thay vì expose trực tiếp
# Trên máy remote:
ssh -L 11434:localhost:11434 user@mac-server

# Hoặc đặt sau reverse proxy với auth
# (xem bài về Nginx trong series DevSecOps)
```

### 11.2 Data privacy

- All prompts and responses **remain on your computer**, not sent anywhere
- Ollama **does not collect telemetry** (open-source, testable)
- Log files in `~/.ollama/logs/` — should be hidden if it contains sensitive data

---

## Summary

| Aspect | Key takeaways |
|---|---|
| **Why Apple Silicon is good** | Unified Memory = all RAM used for model, high Memory Bandwidth, Metal GPU acceleration |
| **Quantization** | Q4_K_M is the sweet spot. Increase RAM → increase to Q5_K_M/Q6_K |
| **Modelfile** | Tuning num_ctx, temperature, system prompt for each use case |
| **Benchmark** | M1: 35-95 t/s (3B), M4 Max: 110 t/s (3B), 70 t/s (7B) |
| **MLX vs Ollama** | Ollama for daily use, MLX for max speed + fine-tuning |
| **Multi-model** | Router pattern route task → correct model. OLLAMA_MAX_LOADED_MODELS > 1 |
| **Dev Stack** | Ollama + Continue.dev + Open WebUI = complete offline AI IDE |
| **Flash Attention** | Turn on OLLAMA_FLASH_ATTENTION=1 → reduce cache memory by 50% |

---

## Practice exercises

### Basic

1. Install Ollama, pull `llama3.2:3b` and `qwen2.5-coder:7b`. Run `ollama ps` to confirm the model loads 100% GPU.
2. Run the script `benchmark_ollama.py` above — log the tokens/s on your machine.
3. Create Modelfile for Vietnamese coding assistant, build and test.

### Average

4. Setup Continue.dev extension in VS Code to connect Ollama. Try autocomplete and chat.
5. Run Open WebUI using Docker, connect to Ollama. Compare experience with ChatGPT.
6. Write a router model (as in section 7.2) that classifies at least 4 task types.

### Advanced

7. Build local RAG pipeline (section 7.3) index 20+ documents, measure accuracy.
8. Compare speed of Ollama vs MLX on the same model (Qwen2.5 7B Q4). Report prompt processing and generation tokens/s.
9. Fine-tune LoRA with MLX on self-generated dataset (50+ samples). Compare base model vs fine-tuned model.
10. Measure actual RAM usage when running 2-3 models simultaneously. Find the optimal OLLAMA_MAX_LOADED_MODELS configuration for your device.
