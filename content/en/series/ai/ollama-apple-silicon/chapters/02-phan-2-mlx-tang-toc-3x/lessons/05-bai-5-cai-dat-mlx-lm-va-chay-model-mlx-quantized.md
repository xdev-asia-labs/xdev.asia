---
id: 019c9619-bb05-7005-d005-bb0500000005
title: 'Lesson 5: Install mlx-lm and run the MLX-quantized model'
slug: bai-5-cai-dat-mlx-lm-va-chay-model-mlx-quantized
description: >-
  Install mlx-lm, mlx-vlm. Download model from Hugging Face MLX Community.
  Compare speed of Ollama (llama.cpp) vs mlx-lm with the same model. Understand
  format safetensors and quantization in MLX. Run chat inference.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 2: MLX - 3x acceleration with Apple''s native framework'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Running AI Local with Ollama on Apple Silicon
  slug: ollama-apple-silicon
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-184" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-184)"/>

  <!-- Decorations -->
  <g>
    <circle cx="720" cy="270" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="960" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1080" cy="250" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="210" x2="1100" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="240" x2="1050" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="931.650635094611,97.5 931.650635094611,122.5 910,135 888.349364905389,122.5 888.349364905389,97.5 910,85" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 5: Install mlx-lm and run the model</tspan>
      <tspan x="60" dy="42">MLX-quantized</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Running AI Local with Ollama on Apple Silicon</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: MLX - 3x acceleration with Apple's native framework</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

In the previous article, you understood what MLX is and why it is fast. Now it's hands-on time: install `mlx-lm`, download the model from Hugging Face, and run LLM inference directly with MLX.

---

## 1. Install mlx-lm

```bash
# Cài đặt mlx-lm (bao gồm mlx core)
pip3 install mlx-lm

# Cài thêm mlx-vlm cho vision models (tùy chọn)
pip3 install mlx-vlm

# Kiểm tra
python3 -c "import mlx_lm; print('mlx-lm ready!')"
```

> 💡 Recommended to use virtual environment:
>
> ```bash
> python3 -m venv ~/mlx-env
> source ~/mlx-env/bin/activate
> pip install mlx-lm mlx-vlm
> ```

---

## 2. Download model from MLX Community

Hugging Face has a community [mlx-community](https://huggingface.co/mlx-community) specializes in converting and quantifying models to MLX format.

### Download and run right from CLI

```bash
# Chạy Llama 3.2 8B (4-bit quantized)
mlx_lm.generate \
  --model mlx-community/Llama-3.2-3B-Instruct-4bit \
  --prompt "Viết hàm fibonacci bằng Python" \
  --max-tokens 500
```

### Chat mode (interactive)

```bash
mlx_lm.chat \
  --model mlx-community/Llama-3.2-3B-Instruct-4bit
```

First run will download model from Hugging Face (~2GB for 3B Q4). Model is cached at `~/.cache/huggingface/`.

### Popular MLX models

```bash
# Llama 3.2
mlx_lm.chat --model mlx-community/Llama-3.2-3B-Instruct-4bit
mlx_lm.chat --model mlx-community/Llama-3.2-8B-Instruct-4bit

# Qwen 2.5
mlx_lm.chat --model mlx-community/Qwen2.5-7B-Instruct-4bit
mlx_lm.chat --model mlx-community/Qwen2.5-14B-Instruct-4bit

# Gemma 3
mlx_lm.chat --model mlx-community/gemma-3-4b-it-4bit

# Mistral
mlx_lm.chat --model mlx-community/Mistral-7B-Instruct-v0.3-4bit

# Phi-4
mlx_lm.chat --model mlx-community/phi-4-mini-instruct-4bit
```

---

## 3. Use mlx-lm in Python

### Basic Inference

```python
from mlx_lm import load, generate

# Load model (tải lần đầu, cache lần sau)
model, tokenizer = load("mlx-community/Llama-3.2-3B-Instruct-4bit")

# Chat format
messages = [
    {"role": "system", "content": "Bạn là trợ lý AI thông minh, trả lời bằng tiếng Việt."},
    {"role": "user", "content": "Docker compose là gì?"}
]

prompt = tokenizer.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True
)

# Generate
response = generate(
    model,
    tokenizer,
    prompt=prompt,
    max_tokens=500,
    temp=0.7,
)

print(response)
```

### Streaming output

```python
from mlx_lm import load, stream_generate

model, tokenizer = load("mlx-community/Llama-3.2-3B-Instruct-4bit")

prompt = tokenizer.apply_chat_template(
    [{"role": "user", "content": "Giải thích Kubernetes trong 5 câu"}],
    tokenize=False,
    add_generation_prompt=True
)

# Stream từng token
for token_text in stream_generate(model, tokenizer, prompt=prompt, max_tokens=300):
    print(token_text, end="", flush=True)
print()
```

### Tracking metrics

```python
from mlx_lm import load, generate
import time

model, tokenizer = load("mlx-community/Llama-3.2-8B-Instruct-4bit")

prompt = tokenizer.apply_chat_template(
    [{"role": "user", "content": "Write a Python function to sort a list"}],
    tokenize=False,
    add_generation_prompt=True
)

start = time.time()
response = generate(
    model, tokenizer,
    prompt=prompt,
    max_tokens=200,
    verbose=True,  # In metrics
)
elapsed = time.time() - start
print(f"\nTotal time: {elapsed:.2f}s")
```

Sample output:

```
Prompt: 18 tokens, 842.3 tokens/s
Generation: 156 tokens, 54.2 tokens/s, 2.88s
Total time: 2.90s
```

---

## 4. Understand the MLX model format

### Model folder structure

```
~/.cache/huggingface/hub/models--mlx-community--Llama-3.2-3B-Instruct-4bit/
├── config.json          # Model config (architecture, hidden size...)
├── model.safetensors    # Weights (quantized)
├── tokenizer.json       # Tokenizer vocabulary
├── tokenizer_config.json
└── special_tokens_map.json
```

### SafeTensors format

MLX uses **safetensors** format (by Hugging Face):

- Safer than pickle (does not run arbitrary code)
- Memory-mappable (loads quickly, no need to read everything into RAM)
- Compatible with Hugging Face ecosystem

### Quantization in MLX

MLX supports quantization levels:

```python
# Kiểm tra quantization của model đã load
import json
config = json.load(open("config.json"))
print(config.get("quantization", "No quantization info"))
```

| Level | Bits | Quality | In model name |
|--------|--------|---------|-----------------|
| 4-bit | 4 | Good (recommended) | `*-4bit` |
| 8-bit | 8 | Very good | `*-8bit` |
| 3-bit | 3 | Quite | `*-3bit` |
| FP16 | 16 | Best | No suffix |

---

## 5. Quantize model converts automatically

If the model does not have MLX version, you can convert it yourself:

```bash
# Convert từ Hugging Face model sang MLX format
mlx_lm.convert \
  --hf-path meta-llama/Llama-3.2-3B-Instruct \
  --mlx-path ./my-llama-3.2-3b-4bit \
  --quantize \
  --q-bits 4

# Chạy model vừa convert
mlx_lm.chat --model ./my-llama-3.2-3b-4bit
```

### Convert with other quantization

```bash
# 8-bit (chất lượng cao, tốn RAM hơn)
mlx_lm.convert \
  --hf-path meta-llama/Llama-3.2-3B-Instruct \
  --mlx-path ./my-llama-3.2-3b-8bit \
  --quantize \
  --q-bits 8

# 3-bit (nhỏ nhất, giảm chất lượng)
mlx_lm.convert \
  --hf-path meta-llama/Llama-3.2-3B-Instruct \
  --mlx-path ./my-llama-3.2-3b-3bit \
  --quantize \
  --q-bits 3
```

---

## 6. Direct comparison: Ollama vs mlx-lm

Run the same model, same prompt, on the same device:

### Script benchmark

```python
import subprocess
import time
import json

PROMPT = "Explain what Docker Compose is and give an example docker-compose.yml"

# --- Benchmark Ollama ---
print("=== Ollama (llama.cpp) ===")
start = time.time()
result = subprocess.run(
    ["curl", "-s", "http://localhost:11434/api/generate",
     "-d", json.dumps({"model": "llama3.2", "prompt": PROMPT, "stream": False})],
    capture_output=True, text=True
)
ollama_time = time.time() - start
data = json.loads(result.stdout)
ollama_gen_speed = data["eval_count"] / (data["eval_duration"] / 1e9)
print(f"Time: {ollama_time:.2f}s")
print(f"Generation: {ollama_gen_speed:.1f} tok/s")
print(f"Tokens: {data['eval_count']}")

print()

# --- Benchmark MLX ---
print("=== MLX (mlx-lm) ===")
from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Llama-3.2-3B-Instruct-4bit")
prompt = tokenizer.apply_chat_template(
    [{"role": "user", "content": PROMPT}],
    tokenize=False, add_generation_prompt=True
)

start = time.time()
response = generate(model, tokenizer, prompt=prompt, max_tokens=500, verbose=True)
mlx_time = time.time() - start
print(f"Total time: {mlx_time:.2f}s")
```

---

## 7. Vision models with mlx-vlm

```bash
# Cài mlx-vlm
pip3 install mlx-vlm
```

```python
from mlx_vlm import load, generate

# Load vision model
model, processor = load("mlx-community/Qwen2-VL-7B-Instruct-4bit")

# Phân tích hình ảnh
response = generate(
    model, processor,
    prompt="Describe this image in detail",
    image="path/to/image.jpg",
    max_tokens=500,
)
print(response)
```

---

## 8. Cache management

Model takes up a lot of space. Cache management:

```bash
# Xem dung lượng cache Hugging Face
du -sh ~/.cache/huggingface/hub/

# Xóa model cụ thể
rm -rf ~/.cache/huggingface/hub/models--mlx-community--Llama-3.2-3B-Instruct-4bit

# Dùng huggingface-cli (cài sẵn với mlx-lm)
huggingface-cli scan-cache
huggingface-cli delete-cache
```

---

## Summary

| Command | Description |
|-------|-------|
| `mlx_lm.chat --model <name>` | Interactive Chat |
| `mlx_lm.generate --model <name> --prompt "..."` | Generate once |
| `mlx_lm.convert --hf-path <model> --quantize` | Convert model |
| `load(model_name)` | Load model in Python |
| `generate(model, tokenizer, ...)` | Generate text |
| `stream_generate(...)` | Generate streaming |

---

## Exercises

1. Install mlx-lm, download `mlx-community/Llama-3.2-3B-Instruct-4bit` and chat
2. Write a Python script to use `load()` + `generate()` create a simple chatbot (loop input)
3. Compare Ollama vs mlx-lm speed for the same model with the same prompt
4. Download model Qwen 2.5 7B MLX, compare quality with Llama 3.2
5. (Bonus) Convert a small model from Hugging Face to MLX format

**Next article**: Combining Ollama + MLX backend →
