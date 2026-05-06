---
id: 019c9619-bb10-7010-d010-bb1000000010
title: 'Lesson 10: Optimizing performance - RAM, context window & concurrency'
slug: bai-10-toi-uu-hieu-nang-ram-context-concurrency
description: >-
  OLLAMA_NUM_PARALLEL, OLLAMA_MAX_LOADED_MODELS, context window & RAM.
  Benchmark, monitoring, optimized for each MacBook configuration.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'Part 4: Optimization, management & production setup'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Running AI Local with Ollama on Apple Silicon
  slug: ollama-apple-silicon
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2828" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2828)"/>

  <!-- Decorations -->
  <g>
    <circle cx="942" cy="116" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="784" cy="58" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="626" cy="260" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="968" cy="202" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="810" cy="144" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="216" x2="1100" y2="296" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="246" x2="1050" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1042.8467875173176,200.5 1042.8467875173176,231.5 1016,247 989.1532124826824,231.5 989.1532124826824,200.5 1016,185" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 10: Optimizing performance - RAM, context</tspan>
      <tspan x="60" dy="42">window & concurrency</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Running AI Local with Ollama on Apple Silicon</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Optimization, management & production setup</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Running AI locally means you manage resources instead of a cloud provider. This article guides you on optimizing RAM, context window, concurrency — so that Ollama runs fastest on Mac.

---

## 1. Understand how Ollama uses RAM

### Unified Memory on Apple Silicon

Apple Silicon uses **Unified Memory** — CPU and GPU share the same memory:

```
┌─────────────────────────────────┐
│        Unified Memory           │
│  ┌───────────┐ ┌──────────────┐ │
│  │  CPU RAM   │ │   GPU VRAM   │ │
│  │  (macOS,   │ │  (Model      │ │
│  │   apps)    │ │   weights,   │ │
│  │            │ │   KV cache)  │ │
│  └───────────┘ └──────────────┘ │
└─────────────────────────────────┘
```

### RAM breakdown when running the model

| Ingredients | Description | Example (Llama 3.2 3B Q4) |
|-----------|-------|------------------------|
| Model weights | Quantized weights | ~2.0 GB |
| KV Cache | Context window cache | ~0.5-2.0 GB |
| OS overhead | macOS needs to run | ~3-4 GB |
| Ollama runtime | Server processes | ~200 MB |

### Calculate the RAM needed for the model

Estimated formula:

```
RAM = Model_Size + KV_Cache + OS_Overhead

KV_Cache ≈ (context_length × num_layers × hidden_dim × 2 × 2) / (1024³)
          ≈ (context_length × num_params_billions × 0.05) GB
```

Reference table:

| Model | Q4_K_M | Context 2K | Context 8K | Context 32K |
|-------|--------|-----------|-----------|-------------|
| 1B | 0.7 GB | 1.2 GB | 1.5 GB | 3.0 GB |
| 3B | 2.0 GB | 2.8 GB | 3.5 GB | 6.5 GB |
| 7B | 4.4 GB | 5.5 GB | 7.0 GB | 13 GB |
| 13B | 7.9 GB | 10 GB | 13 GB | 22 GB |
| 27B | 17 GB | 20 GB | 25 GB | 40+ GB |

---

## 2. Ollama environment variable

### Important configuration

```bash
# Số request xử lý song song (default: 1)
export OLLAMA_NUM_PARALLEL=2

# Số model giữ trong RAM cùng lúc (default: 1)
export OLLAMA_MAX_LOADED_MODELS=2

# Context window tối đa (default: 2048)
export OLLAMA_NUM_CTX=4096

# Thời gian giữ model trong RAM (default: 5m)
export OLLAMA_KEEP_ALIVE=10m

# Bind address (default: 127.0.0.1:11434)
export OLLAMA_HOST=0.0.0.0:11434

# Thư mục lưu model
export OLLAMA_MODELS=~/.ollama/models

# Flash attention (nhanh hơn)
export OLLAMA_FLASH_ATTENTION=1

# Max queue size
export OLLAMA_MAX_QUEUE=512
```

### Set permanent (macOS)

Create files `~/.zshrc` or add:

```bash
# Ollama optimization
export OLLAMA_NUM_PARALLEL=2
export OLLAMA_FLASH_ATTENTION=1
export OLLAMA_NUM_CTX=4096
export OLLAMA_KEEP_ALIVE=10m
```

Or use launchd plist (for Ollama app):

```bash
# Tạo file override
cat > ~/Library/LaunchAgents/com.ollama.env.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.ollama.env</string>
    <key>ProgramArguments</key>
    <array>
        <string>launchctl</string>
        <string>setenv</string>
        <string>OLLAMA_NUM_PARALLEL</string>
        <string>2</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
EOF
```

---

## 3. Optimize according to MacBook configuration

### MacBook Air/Pro 8GB RAM

```bash
export OLLAMA_NUM_PARALLEL=1
export OLLAMA_MAX_LOADED_MODELS=1
export OLLAMA_NUM_CTX=2048
export OLLAMA_KEEP_ALIVE=3m
export OLLAMA_FLASH_ATTENTION=1
```

**Recommended models:**

- `llama3.2:1b` — Fast, light
- `gemma3:4b` — Balance quality/speed
- `qwen2.5-coder:1.5b` — Code generation
- `phi4-mini` — Light reasoning

### MacBook Pro 16GB RAM

```bash
export OLLAMA_NUM_PARALLEL=2
export OLLAMA_MAX_LOADED_MODELS=2
export OLLAMA_NUM_CTX=4096
export OLLAMA_KEEP_ALIVE=10m
export OLLAMA_FLASH_ATTENTION=1
```

**Recommended models:**

- `llama3.2:3b` — General purpose
- `gemma3:12b` — High quality
- `qwen2.5-coder:7b` — Good code generation
- `deepseek-r1:7b` — Reasoning

### MacBook Pro 24-36GB RAM

```bash
export OLLAMA_NUM_PARALLEL=4
export OLLAMA_MAX_LOADED_MODELS=3
export OLLAMA_NUM_CTX=8192
export OLLAMA_KEEP_ALIVE=30m
export OLLAMA_FLASH_ATTENTION=1
```

**Recommended models:**

- `llama3.3:70b` (Q4) — 40 GB, requires 48GB+ RAM
- `gemma3:27b` — Very strong
- `qwen2.5-coder:14b` — Code expert
- `command-r:35b` — Dedicated RAG

### Mac Studio/Pro 64GB+ RAM

```bash
export OLLAMA_NUM_PARALLEL=8
export OLLAMA_MAX_LOADED_MODELS=4
export OLLAMA_NUM_CTX=16384
export OLLAMA_KEEP_ALIVE=1h
export OLLAMA_FLASH_ATTENTION=1
```

---

## 4. Context window & num_ctx

### What is Context window?

Context window = model's short-term memory. Every message (system + user + assistant) must be in the context window.

```python
import ollama

# Set context window per request
response = ollama.chat(
    model='llama3.2',
    messages=[{'role': 'user', 'content': 'Hello'}],
    options={
        'num_ctx': 4096,       # Context window
        'num_predict': 512,    # Max tokens to generate
    }
)
```

### Tradeoff

| num_ctx | Extra RAM (7B model) | Speed ​​| Use cases |
|--------|---------------------|--------|----------|
| 2048 | +0 GB | Fastest | Short chat |
| 4096 | +0.5 GB | Fast | Casual chat |
| 8192 | +1.5 GB | Average | Document analysis |
| 16384 | +3.5 GB | Slower | Long document |
| 32768 | +8 GB | Slow | RAG, book analysis |

### Auto-adjust context

```python
import ollama
import psutil

def get_optimal_ctx():
    """Tự động chọn context window dựa trên RAM available."""
    available_gb = psutil.virtual_memory().available / (1024**3)

    if available_gb > 24:
        return 16384
    elif available_gb > 12:
        return 8192
    elif available_gb > 6:
        return 4096
    else:
        return 2048

ctx = get_optimal_ctx()
print(f"Setting num_ctx = {ctx}")
```

---

## 5. Concurrency & parallel requests

### OLLAMA_NUM_PARALLEL

Controls how many requests to process at the same time for **one model**.

```bash
# 1 request/lần (default) - ít RAM nhất
export OLLAMA_NUM_PARALLEL=1

# 2 request/lần - cần thêm ~1.5x KV cache RAM
export OLLAMA_NUM_PARALLEL=2

# 4 request/lần - cần thêm ~3x KV cache RAM
export OLLAMA_NUM_PARALLEL=4
```

### Test concurrency

```python
import ollama
import concurrent.futures
import time

def chat(prompt):
    start = time.time()
    response = ollama.chat(
        model='llama3.2:3b',
        messages=[{'role': 'user', 'content': prompt}],
        options={'num_predict': 100}
    )
    elapsed = time.time() - start
    return elapsed

prompts = [
    "Giải thích Docker bằng 3 câu",
    "Python list comprehension là gì?",
    "REST vs GraphQL khác nhau thế nào?",
    "Git rebase vs merge: khi nào dùng?",
]

# Sequential
print("=== Sequential ===")
total_seq = 0
for p in prompts:
    t = chat(p)
    total_seq += t
    print(f"  {t:.1f}s")
print(f"  Total: {total_seq:.1f}s\n")

# Concurrent
print("=== Concurrent ===")
start = time.time()
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
    futures = [executor.submit(chat, p) for p in prompts]
    for f in concurrent.futures.as_completed(futures):
        print(f"  {f.result():.1f}s")
total_conc = time.time() - start
print(f"  Total: {total_conc:.1f}s")

print(f"\nSpeedup: {total_seq/total_conc:.1f}x")
```

---

## 6. Monitoring & Benchmark

### Monitor RAM usage

```bash
# Xem Ollama process
ps aux | grep ollama

# Realtime monitoring
top -pid $(pgrep ollama)

# Hoặc dùng htop
brew install htop && htop -p $(pgrep ollama)
```

### GPU utilization

```bash
# macOS Activity Monitor → GPU History (Window menu)
# Hoặc dùng powermetrics (cần sudo)
sudo powermetrics --samplers gpu_power -i 1000
```

### Benchmark script

```python
#!/usr/bin/env python3
"""Benchmark Ollama models trên Mac."""

import ollama
import time
import json

def benchmark_model(model, prompt, num_ctx=2048, num_predict=256):
    start = time.time()
    response = ollama.chat(
        model=model,
        messages=[{'role': 'user', 'content': prompt}],
        options={
            'num_ctx': num_ctx,
            'num_predict': num_predict,
        }
    )
    elapsed = time.time() - start

    content = response['message']['content']
    tokens = len(content.split())  # Rough estimate
    tps = tokens / elapsed if elapsed > 0 else 0

    return {
        'model': model,
        'time': round(elapsed, 2),
        'tokens': tokens,
        'tokens_per_sec': round(tps, 1),
        'num_ctx': num_ctx,
    }

# Run benchmarks
models = ['llama3.2:1b', 'llama3.2:3b', 'gemma3:4b']
prompt = "Write a Python function to sort a list using quicksort algorithm. Include docstring and comments."

print("🏁 Benchmarking Ollama models...\n")
results = []
for model in models:
    print(f"  Testing {model}...")
    try:
        result = benchmark_model(model, prompt)
        results.append(result)
        print(f"  ✅ {result['time']}s, ~{result['tokens_per_sec']} tok/s")
    except Exception as e:
        print(f"  ❌ Error: {e}")

print("\n📊 Results:")
print(f"{'Model':<20} {'Time (s)':<10} {'Tokens':<10} {'Tok/s':<10}")
print("-" * 50)
for r in results:
    print(f"{r['model']:<20} {r['time']:<10} {r['tokens']:<10} {r['tokens_per_sec']:<10}")
```

---

## 7. Advanced optimization tips

### Flash Attention

```bash
export OLLAMA_FLASH_ATTENTION=1
```

Reduce memory footprint for KV cache, speed up ~10-20% when context is long.

### Keep-alive management

```bash
# Giữ model trong RAM lâu hơn (tránh reload)
export OLLAMA_KEEP_ALIVE=30m

# Luôn giữ (không tự unload)
export OLLAMA_KEEP_ALIVE=-1

# Unload ngay sau response (tiết kiệm RAM nhất)
export OLLAMA_KEEP_ALIVE=0
```

Or per-request:

```python
response = ollama.chat(
    model='llama3.2',
    messages=[{'role': 'user', 'content': 'Hi'}],
    keep_alive='30m'
)
```

### Unload model manually

```python
# Unload model khỏi RAM ngay lập tức
ollama.chat(model='llama3.2', messages=[], keep_alive=0)
```

### Use lower quantization when needed

```bash
# Q8 — chất lượng cao nhất, tốn RAM nhất
ollama pull llama3.2:3b-instruct-q8_0

# Q4_K_M — balance (default)
ollama pull llama3.2:3b

# Q2_K — nhỏ nhất, chất lượng thấp hơn
# Tạo Modelfile custom với quantization thấp
```

### Swap and memory pressure

```bash
# Check memory pressure
memory_pressure

# Xem swap usage
sysctl vm.swapusage

# Nếu quá nhiều swap → giảm model size hoặc num_ctx
```

---

## Summary of recommended configuration

| RAM | Max models | num_ctx | num_parallel | max_loaded |
|-----|----------|---------|-------------|-------------|
| 8 GB | 3B (Q4) | 2048 | 1 | 1 |
| 16 GB | 7B (Q4) | 4096 | 2 | 2 |
| 24 GB | 13B (Q4) | 8192 | 2 | 2 |
| 36 GB | 27B (Q4) | 8192 | 4 | 3 |
| 64 GB | 70B (Q4) | 16384 | 8 | 4 |

---

## Exercises

1. Check your MacBook RAM, set optimal configuration
2. Benchmark 3 different models with the script above
3. Test concurrency: compare OLLAMA_NUM_PARALLEL=1 vs 2 vs 4
4. Monitor GPU utilization when running the model using Activity Monitor
5. (Bonus) Write a script to automatically select model/config based on available RAM

**Next article**: Modelfiles — Custom models & system prompts →
