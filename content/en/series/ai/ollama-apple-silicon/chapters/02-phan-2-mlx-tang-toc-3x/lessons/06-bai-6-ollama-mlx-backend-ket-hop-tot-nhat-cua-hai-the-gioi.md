---
id: 019c9619-bb06-7006-d006-bb0600000006
title: 'Lesson 6: Ollama + MLX backend - Combining the best of two worlds'
slug: bai-6-ollama-mlx-backend-ket-hop-tot-nhat-cua-hai-the-gioi
description: >-
  Configure Ollama to use MLX backend instead of llama.cpp. Detailed benchmarks.
  Optimize context window. When to use MLX backend, when to use llama.cpp.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 2: MLX - 3x acceleration with Apple''s native framework'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Running AI Local with Ollama on Apple Silicon
  slug: ollama-apple-silicon
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2579" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2579)"/>

  <!-- Decorations -->
  <g>
    <circle cx="934" cy="192" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="768" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="602" cy="40" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="936" cy="94" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="770" cy="148" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="232" x2="1100" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="262" x2="1050" y2="332" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.3826859021799,118.5 955.3826859021799,145.5 932,159 908.6173140978201,145.5 908.6173140978201,118.5 932,105" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI & ML — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: Ollama + MLX backend - Good combination</tspan>
      <tspan x="60" dy="42">best of two worlds</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Running AI Local with Ollama on Apple Silicon</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: MLX - 3x acceleration with Apple's native framework</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

You already know Ollama (convenient, has a large API, ecosystem) and MLX (faster on Mac). Natural question: **can the two be combined?**

Answer: **Yes**. Ollama supports MLX backend, allowing you to use Ollama's utilities (API, model management) but infer using the MLX engine.

---

## 1. MLX backend in Ollama

From version 0.5+, Ollama adds support for MLX on macOS. Instead of using llama.cpp (GGUF format), you can import the MLX model (safetensors format) and Ollama will use the MLX engine.

### How it works

```
                    ┌─────── Backend ────────┐
User ──► Ollama ──►│ llama.cpp (default)     │──► Response
         API       │ MLX (khi dùng MLX model)│
                    └────────────────────────┘
```

---

## 2. Create Ollama model from MLX weights

### Step 1: Download model MLX

```bash
# Dùng huggingface-cli
pip3 install huggingface-hub
huggingface-cli download mlx-community/Llama-3.2-3B-Instruct-4bit \
  --local-dir ./models/llama-3.2-3b-mlx
```

### Step 2: Create Modelfile

```bash
cat > Modelfile.mlx << 'EOF'
FROM ./models/llama-3.2-3b-mlx

PARAMETER temperature 0.7
PARAMETER top_p 0.9
PARAMETER num_ctx 4096

SYSTEM """Bạn là trợ lý AI thông minh. Trả lời ngắn gọn, chính xác, bằng tiếng Việt."""
EOF
```

### Step 3: Build model in Ollama

```bash
ollama create llama3.2-mlx -f Modelfile.mlx
```

### Step 4: Run

```bash
ollama run llama3.2-mlx
```

Now Ollama will use MLX engine for this model, but you still use Ollama CLI and API as usual.

---

## 3. Comparison: same model, two backends

### Benchmark script

```bash
#!/bin/bash
# benchmark-backends.sh

PROMPT="Write a Python function that implements binary search on a sorted list. Include docstring and type hints."

echo "=== Ollama + llama.cpp (GGUF) ==="
curl -s http://localhost:11434/api/generate -d "{
  \"model\": \"llama3.2\",
  \"prompt\": \"$PROMPT\",
  \"stream\": false
}" | python3 -c "
import sys, json
d = json.load(sys.stdin)
pt = d['prompt_eval_duration']/1e9
gt = d['eval_duration']/1e9
print(f'Prompt: {d[\"prompt_eval_count\"]} tok in {pt:.2f}s = {d[\"prompt_eval_count\"]/pt:.0f} tok/s')
print(f'Generate: {d[\"eval_count\"]} tok in {gt:.2f}s = {d[\"eval_count\"]/gt:.0f} tok/s')
"

echo ""
echo "=== Ollama + MLX ==="
curl -s http://localhost:11434/api/generate -d "{
  \"model\": \"llama3.2-mlx\",
  \"prompt\": \"$PROMPT\",
  \"stream\": false
}" | python3 -c "
import sys, json
d = json.load(sys.stdin)
pt = d['prompt_eval_duration']/1e9
gt = d['eval_duration']/1e9
print(f'Prompt: {d[\"prompt_eval_count\"]} tok in {pt:.2f}s = {d[\"prompt_eval_count\"]/pt:.0f} tok/s')
print(f'Generate: {d[\"eval_count\"]} tok in {gt:.2f}s = {d[\"eval_count\"]/gt:.0f} tok/s')
"
```

### Sample results (M3 Pro 36GB)

| Metrics | llama.cpp | MLX | Speedup |
|--------|-----------|-----|---------|
| Prompt processing | 285 tok/s | 640 tok/s | 2.2x |
| Token generation | 33 tok/s | 55 tok/s | 1.7x |
| Memory usage | 6.5 GB | 5.8 GB | -10% |
| API response time | 8.2s ​​| 4.8s | 1.7x |

---

## 4. Context window tuning

Context window decides how much text model "remembers" in a conversation. Increasing context = consuming more RAM.

### Calculate RAM for context

```
KV Cache memory ≈ 2 × n_layers × n_heads × head_dim × context_length × 2 bytes (FP16)
```

Llama 3.2 8B with context lengths:

| Context | KV Cache added | Total RAM |
|--------|---------------|-----------|
| 2048 | ~0.5 GB | ~6 GB |
| 4096 | ~1 GB | ~6.5 GB |
| 8192 | ~2 GB | ~7.5 GB |
| 16384 | ~4 GB | ~9.5 GB |
| 32768 | ~8 GB | ~13.5 GB |
| 131072 | ~32 GB | ~37.5 GB |

### Set context in Modelfile

```
FROM ./models/llama-3.2-3b-mlx

# Context window
PARAMETER num_ctx 8192

# Giảm context nếu ít RAM
# PARAMETER num_ctx 2048
```

### Set context at runtime

```bash
# Override context khi chạy
ollama run llama3.2-mlx --num-ctx 16384
```

> 💡 **Recommended**: Start with `4096`, gradually increase until the RAM runs out or enough for the use case.

---

## 5. Optimize performance

### GPU utilization

```bash
# Kiểm tra model dùng GPU hay CPU
ollama ps
```

Ideal output: `100% GPU`. If you see CPU, it means the model does not fit in GPU accessible memory.

### Keep model in memory

By default, Ollama unloads the model after 5 minutes of idle time. Change:

```bash
# Giữ model loaded 30 phút
export OLLAMA_KEEP_ALIVE=30m

# Giữ vĩnh viễn (cho đến khi restart)
export OLLAMA_KEEP_ALIVE=-1
```

Or in the API:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2-mlx",
  "keep_alive": -1
}'
```

### Run multiple models simultaneously

```bash
# Cho phép 3 model cùng lúc
export OLLAMA_MAX_LOADED_MODELS=3

# Chạy song song
export OLLAMA_NUM_PARALLEL=4
```

> ⚠️ Each model occupies its own RAM. 3 models × 5GB = 15GB. Make sure there is enough RAM for macOS + other apps.

---

## 6. Monitoring performance

### Activity Monitor

Open **Activity Monitor** → **GPU** tab to see:

- GPU utilization % during inference
- GPU memory usage

### Terminal monitoring

```bash
# Xem GPU usage real-time
sudo powermetrics --samplers gpu_power -i 1000

# Xem memory pressure
memory_pressure

# Xem Ollama process
ps aux | grep ollama
```

### Ollama logs

```bash
# Xem logs chi tiết
cat ~/.ollama/logs/server.log | tail -50

# Follow logs real-time
tail -f ~/.ollama/logs/server.log
```

---

## 7. Recommended Workflow

Based on practical experience, here is the optimal workflow:

### Daily use: Ollama (llama.cpp)

```bash
# Model mặc định cho chat, hỏi đáp
ollama run qwen2.5:14b
```

- Stable, large ecosystem (Open WebUI, Continue.dev...)
- Fast enough for interactive chat

### When you need speed: Ollama + MLX

```bash
# Model MLX cho tác vụ cần nhanh
ollama run qwen2.5-mlx
```

- Prompt processing is 2x fast → time-to-first-token is very low
- Batch processing multiple requests

### Scripting/Pipeline: mlx-lm directly

```python
from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Qwen2.5-14B-Instruct-4bit")
# Custom pipeline, batch processing, fine-tuning...
```

- Complete control
- No Ollama server overhead

---

## Summary

| Approach | Pros | Disadvantages | When to use |
|----------|---|-------|-------------|
| Ollama + llama.cpp | Stable, ecosystem | Slower than MLX | Daily default |
| Ollama + MLX | Faster, use Ollama API | More complicated setup | Need speed + API |
| mlx-lm live | Fastest, flexible | No API server | Scripting, pipeline |

---

## Exercises

1. Create Ollama model with MLX backend according to instructions in section 2
2. Run a benchmark comparing two backends (llama.cpp vs MLX) for the same model
3. Try increasing the context window: 2048 → 4096 → 8192. Record how much RAM usage increases?
4. Test `OLLAMA_KEEP_ALIVE=-1` — does it affect RAM when idle?
5. Build a personal workflow: choose model + backend for your 3 daily use cases

**Next article**: Ollama REST API →
