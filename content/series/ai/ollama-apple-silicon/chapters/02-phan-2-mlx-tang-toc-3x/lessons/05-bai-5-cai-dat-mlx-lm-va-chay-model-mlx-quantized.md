---
id: 019c9619-bb05-7005-d005-bb0500000005
title: 'Bài 5: Cài đặt mlx-lm và chạy model MLX-quantized'
slug: bai-5-cai-dat-mlx-lm-va-chay-model-mlx-quantized
description: >-
  Cài mlx-lm, mlx-vlm. Tải model từ Hugging Face MLX Community.
  So sánh tốc độ Ollama (llama.cpp) vs mlx-lm cùng model.
  Hiểu format safetensors và quantization trong MLX. Chạy chat inference.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 2: MLX - Tăng tốc 3x với framework native của Apple"
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Chạy AI Local với Ollama trên Apple Silicon
  slug: ollama-apple-silicon
---

## Giới thiệu

Bài trước bạn đã hiểu MLX là gì và tại sao nó nhanh. Giờ là lúc hands-on: cài `mlx-lm`, tải model từ Hugging Face, và chạy LLM inference trực tiếp bằng MLX.

---

## 1. Cài đặt mlx-lm

```bash
# Cài đặt mlx-lm (bao gồm mlx core)
pip3 install mlx-lm

# Cài thêm mlx-vlm cho vision models (tùy chọn)
pip3 install mlx-vlm

# Kiểm tra
python3 -c "import mlx_lm; print('mlx-lm ready!')"
```

> 💡 Khuyến nghị dùng virtual environment:
>
> ```bash
> python3 -m venv ~/mlx-env
> source ~/mlx-env/bin/activate
> pip install mlx-lm mlx-vlm
> ```

---

## 2. Tải model từ MLX Community

Hugging Face có cộng đồng [mlx-community](https://huggingface.co/mlx-community) chuyên convert và quantize model sang format MLX.

### Tải và chạy ngay từ CLI

```bash
# Chạy Llama 3.2 8B (4-bit quantized)
mlx_lm.generate \
  --model mlx-community/Llama-3.2-3B-Instruct-4bit \
  --prompt "Viết hàm fibonacci bằng Python" \
  --max-tokens 500
```

### Chat mode (tương tác)

```bash
mlx_lm.chat \
  --model mlx-community/Llama-3.2-3B-Instruct-4bit
```

Lần đầu chạy sẽ tải model từ Hugging Face (~2GB cho 3B Q4). Model được cache tại `~/.cache/huggingface/`.

### Các model MLX phổ biến

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

## 3. Dùng mlx-lm trong Python

### Inference cơ bản

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

Output mẫu:

```
Prompt: 18 tokens, 842.3 tokens/s
Generation: 156 tokens, 54.2 tokens/s, 2.88s
Total time: 2.90s
```

---

## 4. Hiểu format model MLX

### Cấu trúc thư mục model

```
~/.cache/huggingface/hub/models--mlx-community--Llama-3.2-3B-Instruct-4bit/
├── config.json          # Model config (architecture, hidden size...)
├── model.safetensors    # Weights (quantized)
├── tokenizer.json       # Tokenizer vocabulary
├── tokenizer_config.json
└── special_tokens_map.json
```

### SafeTensors format

MLX dùng format **safetensors** (của Hugging Face):

- An toàn hơn pickle (không chạy code arbitrary)
- Memory-mappable (load nhanh, không cần đọc hết vào RAM)
- Tương thích với Hugging Face ecosystem

### Quantization trong MLX

MLX hỗ trợ quantization levels:

```python
# Kiểm tra quantization của model đã load
import json
config = json.load(open("config.json"))
print(config.get("quantization", "No quantization info"))
```

| Level | Bits | Quality | Trong tên model |
|-------|------|---------|-----------------|
| 4-bit | 4 | Tốt (khuyến nghị) | `*-4bit` |
| 8-bit | 8 | Rất tốt | `*-8bit` |
| 3-bit | 3 | Khá | `*-3bit` |
| FP16 | 16 | Tốt nhất | Không có suffix |

---

## 5. Quantize model tự convert

Nếu model chưa có bản MLX, bạn có thể tự convert:

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

### Convert với quantization khác

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

## 6. So sánh trực tiếp: Ollama vs mlx-lm

Chạy cùng model, cùng prompt, trên cùng máy:

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

## 7. Vision models với mlx-vlm

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

Model chiếm nhiều dung lượng. Quản lý cache:

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

## Tóm tắt

| Lệnh | Mô tả |
|-------|-------|
| `mlx_lm.chat --model <name>` | Chat tương tác |
| `mlx_lm.generate --model <name> --prompt "..."` | Generate một lần |
| `mlx_lm.convert --hf-path <model> --quantize` | Convert model |
| `load(model_name)` | Load model trong Python |
| `generate(model, tokenizer, ...)` | Generate text |
| `stream_generate(...)` | Generate streaming |

---

## Bài tập

1. Cài mlx-lm, tải `mlx-community/Llama-3.2-3B-Instruct-4bit` và chat
2. Viết script Python dùng `load()` + `generate()` tạo chatbot đơn giản (loop input)
3. So sánh tốc độ Ollama vs mlx-lm cho cùng model cùng prompt
4. Tải thêm model Qwen 2.5 7B MLX, so sánh chất lượng với Llama 3.2
5. (Bonus) Convert một model nhỏ từ Hugging Face sang MLX format

**Bài tiếp theo**: Kết hợp Ollama + MLX backend →
