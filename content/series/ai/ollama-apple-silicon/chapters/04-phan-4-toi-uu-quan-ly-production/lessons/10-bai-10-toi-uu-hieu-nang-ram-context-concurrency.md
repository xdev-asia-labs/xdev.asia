---
id: 019c9619-bb10-7010-d010-bb1000000010
title: 'Bài 10: Tối ưu hiệu năng - RAM, context window & concurrency'
slug: bai-10-toi-uu-hieu-nang-ram-context-concurrency
description: >-
  OLLAMA_NUM_PARALLEL, OLLAMA_MAX_LOADED_MODELS, context window & RAM.
  Benchmark, monitoring, tối ưu cho từng cấu hình MacBook.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 4: Tối ưu, quản lý & production setup"
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Chạy AI Local với Ollama trên Apple Silicon
  slug: ollama-apple-silicon
---

## Giới thiệu

Chạy AI local nghĩa là bạn quản lý tài nguyên thay vì cloud provider. Bài này hướng dẫn tối ưu RAM, context window, concurrency — để Ollama chạy nhanh nhất trên Mac.

---

## 1. Hiểu cách Ollama dùng RAM

### Unified Memory trên Apple Silicon

Apple Silicon dùng **Unified Memory** — CPU và GPU chia sẻ chung bộ nhớ:

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

### RAM breakdown khi chạy model

| Thành phần | Mô tả | Ví dụ (Llama 3.2 3B Q4) |
|-----------|-------|-------------------------|
| Model weights | Trọng số đã quantize | ~2.0 GB |
| KV Cache | Context window cache | ~0.5-2.0 GB |
| OS overhead | macOS cần chạy | ~3-4 GB |
| Ollama runtime | Server process | ~200 MB |

### Tính RAM cần cho model

Công thức ước lượng:

```
RAM = Model_Size + KV_Cache + OS_Overhead

KV_Cache ≈ (context_length × num_layers × hidden_dim × 2 × 2) / (1024³)
          ≈ (context_length × num_params_billions × 0.05) GB
```

Bảng tham khảo:

| Model | Q4_K_M | Context 2K | Context 8K | Context 32K |
|-------|--------|-----------|-----------|------------|
| 1B | 0.7 GB | 1.2 GB | 1.5 GB | 3.0 GB |
| 3B | 2.0 GB | 2.8 GB | 3.5 GB | 6.5 GB |
| 7B | 4.4 GB | 5.5 GB | 7.0 GB | 13 GB |
| 13B | 7.9 GB | 10 GB | 13 GB | 22 GB |
| 27B | 17 GB | 20 GB | 25 GB | 40+ GB |

---

## 2. Biến môi trường Ollama

### Cấu hình quan trọng

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

Tạo file `~/.zshrc` hoặc thêm vào:

```bash
# Ollama optimization
export OLLAMA_NUM_PARALLEL=2
export OLLAMA_FLASH_ATTENTION=1
export OLLAMA_NUM_CTX=4096
export OLLAMA_KEEP_ALIVE=10m
```

Hoặc dùng launchd plist (cho Ollama app):

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

## 3. Tối ưu theo cấu hình MacBook

### MacBook Air/Pro 8GB RAM

```bash
export OLLAMA_NUM_PARALLEL=1
export OLLAMA_MAX_LOADED_MODELS=1
export OLLAMA_NUM_CTX=2048
export OLLAMA_KEEP_ALIVE=3m
export OLLAMA_FLASH_ATTENTION=1
```

**Models khuyến nghị:**

- `llama3.2:1b` — Nhanh, nhẹ
- `gemma3:4b` — Cân bằng chất lượng/tốc độ
- `qwen2.5-coder:1.5b` — Code generation
- `phi4-mini` — Reasoning nhẹ

### MacBook Pro 16GB RAM

```bash
export OLLAMA_NUM_PARALLEL=2
export OLLAMA_MAX_LOADED_MODELS=2
export OLLAMA_NUM_CTX=4096
export OLLAMA_KEEP_ALIVE=10m
export OLLAMA_FLASH_ATTENTION=1
```

**Models khuyến nghị:**

- `llama3.2:3b` — General purpose
- `gemma3:12b` — Chất lượng cao
- `qwen2.5-coder:7b` — Code generation tốt
- `deepseek-r1:7b` — Reasoning

### MacBook Pro 24-36GB RAM

```bash
export OLLAMA_NUM_PARALLEL=4
export OLLAMA_MAX_LOADED_MODELS=3
export OLLAMA_NUM_CTX=8192
export OLLAMA_KEEP_ALIVE=30m
export OLLAMA_FLASH_ATTENTION=1
```

**Models khuyến nghị:**

- `llama3.3:70b` (Q4) — 40 GB, cần 48GB+ RAM
- `gemma3:27b` — Rất mạnh
- `qwen2.5-coder:14b` — Code expert
- `command-r:35b` — RAG chuyên dụng

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

### Context window là gì?

Context window = bộ nhớ ngắn hạn của model. Mọi message (system + user + assistant) phải nằm trong context window.

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

| num_ctx | RAM thêm (7B model) | Tốc độ | Use case |
|---------|---------------------|--------|----------|
| 2048 | +0 GB | Nhanh nhất | Chat ngắn |
| 4096 | +0.5 GB | Nhanh | Chat thông thường |
| 8192 | +1.5 GB | Trung bình | Document analysis |
| 16384 | +3.5 GB | Chậm hơn | Long document |
| 32768 | +8 GB | Chậm | RAG, book analysis |

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

Điều khiển bao nhiêu request xử lý cùng lúc cho **một model**.

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

### Theo dõi RAM usage

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

## 7. Tips tối ưu nâng cao

### Flash Attention

```bash
export OLLAMA_FLASH_ATTENTION=1
```

Giảm memory footprint cho KV cache, tăng tốc ~10-20% khi context dài.

### Keep-alive management

```bash
# Giữ model trong RAM lâu hơn (tránh reload)
export OLLAMA_KEEP_ALIVE=30m

# Luôn giữ (không tự unload)
export OLLAMA_KEEP_ALIVE=-1

# Unload ngay sau response (tiết kiệm RAM nhất)
export OLLAMA_KEEP_ALIVE=0
```

Hoặc per-request:

```python
response = ollama.chat(
    model='llama3.2',
    messages=[{'role': 'user', 'content': 'Hi'}],
    keep_alive='30m'
)
```

### Unload model thủ công

```python
# Unload model khỏi RAM ngay lập tức
ollama.chat(model='llama3.2', messages=[], keep_alive=0)
```

### Dùng quantization thấp hơn khi cần

```bash
# Q8 — chất lượng cao nhất, tốn RAM nhất
ollama pull llama3.2:3b-instruct-q8_0

# Q4_K_M — balance (default)
ollama pull llama3.2:3b

# Q2_K — nhỏ nhất, chất lượng thấp hơn
# Tạo Modelfile custom với quantization thấp
```

### Swap và memory pressure

```bash
# Check memory pressure
memory_pressure

# Xem swap usage
sysctl vm.swapusage

# Nếu quá nhiều swap → giảm model size hoặc num_ctx
```

---

## Tóm tắt cấu hình khuyến nghị

| RAM | Max model | num_ctx | num_parallel | max_loaded |
|-----|----------|---------|-------------|------------|
| 8 GB | 3B (Q4) | 2048 | 1 | 1 |
| 16 GB | 7B (Q4) | 4096 | 2 | 2 |
| 24 GB | 13B (Q4) | 8192 | 2 | 2 |
| 36 GB | 27B (Q4) | 8192 | 4 | 3 |
| 64 GB | 70B (Q4) | 16384 | 8 | 4 |

---

## Bài tập

1. Kiểm tra RAM MacBook của bạn, set cấu hình tối ưu
2. Benchmark 3 model khác nhau với script ở trên
3. Test concurrency: so sánh OLLAMA_NUM_PARALLEL=1 vs 2 vs 4
4. Theo dõi GPU utilization khi chạy model bằng Activity Monitor
5. (Bonus) Viết script tự động chọn model/config dựa trên RAM available

**Bài tiếp theo**: Modelfiles — Custom models & system prompts →
