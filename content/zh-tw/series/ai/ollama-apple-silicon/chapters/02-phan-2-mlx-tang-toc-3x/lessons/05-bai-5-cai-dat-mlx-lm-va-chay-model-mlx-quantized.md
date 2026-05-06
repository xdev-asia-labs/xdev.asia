---
id: 019c9619-bb05-7005-d005-bb0500000005
title: 第 5 課：安裝 mlx-lm 並執行 MLX 量化模型
slug: bai-5-cai-dat-mlx-lm-va-chay-model-mlx-quantized
description: >-
  安裝 mlx-lm、mlx-vlm。從 Hugging Face MLX 社群下載模型。比較 Ollama (llama.cpp) 與相同型號的
  mlx-lm 的速度。了解 MLX 中的格式安全張量和量化。運行聊天推理。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 1
section_title: 第 2 部分：MLX - 使用 Apple 原生框架實現 3 倍加速
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: 在 Apple Silicon 上使用 Ollama 運行本地 AI
  slug: ollama-apple-silicon
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：安裝 mlx-lm 並執行模型</tspan>
      <tspan x="60" dy="42">MLX量化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">在 Apple Silicon 上使用 Ollama 運行本地 AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：MLX - 使用 Apple 原生框架實現 3 倍加速</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在上一篇文章中，您了解了 MLX 是什麼以及它為何如此快。現在是動手時間：安裝 `mlx-lm`，從 Hugging Face 下載模型，直接用 MLX 執行 LLM 推理。

---

## 1.安裝mlx-lm

```bash
# Cài đặt mlx-lm (bao gồm mlx core)
pip3 install mlx-lm

# Cài thêm mlx-vlm cho vision models (tùy chọn)
pip3 install mlx-vlm

# Kiểm tra
python3 -c "import mlx_lm; print('mlx-lm ready!')"
```

> 💡推薦使用虛擬環境：
>
> ```bash
> python3 -m venv ~/mlx-env
> source ~/mlx-env/bin/activate
> pip install mlx-lm mlx-vlm
> ```

---

## 2.從MLX社群下載模型

Hugging Face 有一個社區 [mlx-community](https://huggingface.co/mlx-community) 專門將模型轉換和量化為 MLX 格式。

### 直接從 CLI 下載並執行

```bash
# Chạy Llama 3.2 8B (4-bit quantized)
mlx_lm.generate \
  --model mlx-community/Llama-3.2-3B-Instruct-4bit \
  --prompt "Viết hàm fibonacci bằng Python" \
  --max-tokens 500
```

### 聊天模式（互動）

```bash
mlx_lm.chat \
  --model mlx-community/Llama-3.2-3B-Instruct-4bit
```

第一次運行將從 Hugging Face 下載模型（3B Q4 約為 2GB）。模型緩存在 `~/.cache/huggingface/`。

### 熱門 MLX 型號

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

## 3. 在 Python 中使用 mlx-lm

### 基本推理

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

### 流輸出

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

### 追蹤指標

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

範例輸出：

```
Prompt: 18 tokens, 842.3 tokens/s
Generation: 156 tokens, 54.2 tokens/s, 2.88s
Total time: 2.90s
```

---

## 4.了解MLX模型格式

### 模型資料夾結構

```
~/.cache/huggingface/hub/models--mlx-community--Llama-3.2-3B-Instruct-4bit/
├── config.json          # Model config (architecture, hidden size...)
├── model.safetensors    # Weights (quantized)
├── tokenizer.json       # Tokenizer vocabulary
├── tokenizer_config.json
└── special_tokens_map.json
```

### SafeTensors 格式

MLX 使用 **safetensors** 格式（由 Hugging Face 提供）：

- 比 pickle 更安全（不運行任意程式碼）
- 可記憶體映射（載入速度快，無需將所有內容讀入 RAM）
- 相容Hugging Face生態系統

### MLX 中的量化

MLX 支援量化等級：

```python
# Kiểm tra quantization của model đã load
import json
config = json.load(open("config.json"))
print(config.get("quantization", "No quantization info"))
```

|水平|位元|品質 |型號名稱中 |
|--------|--------|---------|--------------------|
| 4 位 | 4 |好（建議）| `*-4bit` |
| 8 位元 | 8 |很好| `*-8bit` |
| 3位| 3 |相當| `*-3bit` |
| FP16 | 16 | 16最佳|無字尾 |

---

## 5.量化模型自動轉換

如果模型沒有MLX版本，可以自行轉換：

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

### 使用其他量化進行轉換

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

## 6. 直接比較：Ollama 與 mlx-lm

在同一裝置上執行相同的模型、相同的提示：

### 腳本基準測試

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

## 7. 使用 mlx-vlm 的視覺模型

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

## 8.快取管理

模型佔用大量空間。快取管理：

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

## 總結

|命令|描述 |
|--------|--------|
| `mlx_lm.chat --model <name>` |互動聊天 |
| `mlx_lm.generate --model <name> --prompt "..."` |生成一次 |
| `mlx_lm.convert --hf-path <model> --quantize` |轉換型號 |
| `load(model_name)` |在 Python 中載入模型 |
| `generate(model, tokenizer, ...)` |生成文字 |
| `stream_generate(...)` |生成流 |

---

## 練習

1.安裝mlx-lm，下載 `mlx-community/Llama-3.2-3B-Instruct-4bit` 和聊天
2.編寫Python腳本使用 `load()` + `generate()` 創建一個簡單的聊天機器人（循環輸入）
3. 比較Ollama與mlx-lm速度對於相同型號和相同的提示
4.下載型號Qwen 2.5 7B MLX，與Llama 3.2進行品質比較
5.（獎勵）將小模型從 Hugging Face 轉換為 MLX 格式

**下一篇**：結合 Ollama + MLX 後端 →
