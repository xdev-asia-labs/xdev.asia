---
id: 019c9619-bb02-7002-d002-bb0200000002
title: 'Lesson 2: Installing Ollama - From zero to running LLM in 5 minutes'
slug: bai-2-cai-dat-ollama-tu-zero-den-chay-llm-trong-5-phut
description: >-
  Install Ollama on macOS, understand folder structure and model management.
  Pull and run Llama 3.2, Gemma 3, Mistral, Qwen 2.5. Important Ollama CLI
  commands: run, pull, list, rm, show, ps.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: Platform - Ollama & Apple Silicon'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Running AI Local with Ollama on Apple Silicon
  slug: ollama-apple-silicon
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1428" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1428)"/>

  <!-- Decorations -->
  <g>
    <circle cx="784" cy="222" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="968" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="652" cy="90" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="836" cy="154" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="218" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="82" x2="1100" y2="162" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="112" x2="1050" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1064.0429399400243,213.5 1064.0429399400243,250.5 1032,269 999.9570600599758,250.5 999.9570600599758,213.5 1032,195" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI & ML — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: Installing Ollama - From zero to running</tspan>
      <tspan x="60" dy="42">LLM in 5 minutes</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Running AI Local with Ollama on Apple Silicon</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Platform - Ollama & Apple Silicon</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

In the previous article, you understood why Apple Silicon is strong for AI. Now let's turn theory into reality: install Ollama and chat with LLM right on your computer, no internet needed, no API key needed.

**Goal of this lesson**: After 5 minutes, you will be chatting with an AI model running entirely on your computer.

---

## 1. What is Ollama?

[Ollama](https://ollama.com) is the easiest tool to run LLM locally today. Think of it as "Docker for LLMs":

- **Pull model** from registry like pulling Docker images
- **Run model** with a single command
- **Expose API** compatible with OpenAI endpoint
- **Manage** multiple models at the same time

Ollama uses **llama.cpp** (an inference engine written in C++) underneath, but wraps it up into a super simple experience.

---

## 2. Install Ollama on macOS

### Method 1: Download from website (recommended)

```bash
# Truy cập https://ollama.com/download và tải bản macOS
# Hoặc dùng curl:
curl -fsSL https://ollama.com/install.sh | sh
```

### Method 2: Use Homebrew

```bash
brew install ollama
```

### Confirm installation

```bash
ollama --version
```

Output:

```
ollama version is 0.6.x
```

### Start the Ollama server

If installed from `.dmg`, Ollama app will automatically run the server when opened. If installing from CLI:

```bash
# Chạy server (giữ terminal này mở)
ollama serve
```

Server runs on `http://localhost:11434`.

Check:

```bash
curl http://localhost:11434
# Output: Ollama is running
```

---

## 3. Run the first model

### Pull and run Llama 3.2

```bash
# Pull model (chỉ cần lần đầu, ~2GB cho 3B, ~4.5GB cho 8B)
ollama pull llama3.2

# Chạy và chat
ollama run llama3.2
```

You will see the prompt:

```
>>> Send a message (/? for help)
```

Try asking:

```
>>> Giải thích Docker trong 3 câu
```

AI will respond immediately, running entirely on your computer. Press `Ctrl+D` to escape.

### Pull another model

```bash
# Gemma 3 - model của Google, mạnh với tiếng Việt
ollama pull gemma3:4b

# Qwen 2.5 - model của Alibaba, đa ngôn ngữ xuất sắc
ollama pull qwen2.5:7b

# Mistral - model của Pháp, code tốt
ollama pull mistral

# Phi-4 - model nhỏ của Microsoft, hiệu quả
ollama pull phi4-mini
```

---

## 4. Important Ollama CLI Commands

### View the list of loaded models

```bash
ollama list
```

Sample output:

```
NAME                ID              SIZE      MODIFIED
llama3.2:latest     a80c4f17acd5    2.0 GB    2 minutes ago
gemma3:4b           2d2a94b1e3fc    3.3 GB    5 minutes ago
qwen2.5:7b          845dbda0ea48    4.7 GB    8 minutes ago
```

### View detailed model information

```bash
ollama show llama3.2
```

Output displays:

- Architecture (LlamaForCausalLM)
- Parameters (3.2B)
- Quantization (Q4_K_M)
- Context length (128K)
- System prompt default

### See the running model

```bash
ollama ps
```

Output:

```
NAME              ID            SIZE     PROCESSOR    UNTIL
llama3.2:latest   a80c4f17acd5  3.2 GB   100% GPU     4 minutes from now
```

> 💡 **100% GPU** means the entire model is on GPU memory (Metal on Mac). This is the ideal case.

### Delete model

```bash
# Xóa một model để giải phóng ổ cứng
ollama rm mistral
```

### Copy model (create a copy with a different name)

```bash
ollama cp llama3.2 my-assistant
```

---

## 5. Ollama folder structure

Ollama hosts everything at:

```
~/.ollama/
├── models/
│   ├── blobs/        # Model weights (file lớn)
│   └── manifests/    # Metadata cho mỗi model
└── logs/             # Logs
```

Check capacity:

```bash
du -sh ~/.ollama/models
```

> ⚠️ **Note**: Heavy model! 3-5 models can take up 20-30GB. If the SSD is small, select the necessary model.

### Move the models folder to an external drive

If the main drive is small:

```bash
# Dừng Ollama
# Di chuyển thư mục
mv ~/.ollama/models /Volumes/ExternalSSD/ollama-models

# Tạo symlink
ln -s /Volumes/ExternalSSD/ollama-models ~/.ollama/models

# Khởi động lại Ollama
```

---

## 6. Advanced chat with Ollama

### System prompt inline

```bash
ollama run llama3.2 "Bạn là một chuyên gia Python. Trả lời bằng tiếng Việt." \
  --system "You are a senior Python developer who explains things simply in Vietnamese."
```

### Multi-line input

In chat mode, use `"""` to enter multiple lines:

```
>>> """
... Phân tích đoạn code sau:
... def fibonacci(n):
...     if n <= 1: return n
...     return fibonacci(n-1) + fibonacci(n-2)
... """
```

### Set temperature and context

```bash
# Temperature thấp = ít sáng tạo, chính xác hơn
ollama run llama3.2 --temperature 0.1

# Context window lớn hơn (tốn RAM hơn)
ollama run llama3.2 --num-ctx 8192
```

### Slash commands in chat

| Command | Description |
|--------|-------|
| `/set system <prompt>` | Set system prompt |
| `/show info` | View model information |
| `/show modelfile` | See Modelfile |
| `/clear` | Delete chat history |
| `/bye` or `Ctrl+D` | Exit |
| `/?` | See help |

---

## 7. Useful Environment Variables

```bash
# Thay đổi host/port
export OLLAMA_HOST=0.0.0.0:11434

# Thay đổi thư mục lưu model
export OLLAMA_MODELS=/path/to/models

# Giới hạn số model load đồng thời
export OLLAMA_MAX_LOADED_MODELS=2

# Bật debug logging
export OLLAMA_DEBUG=1
```

Added `~/.zshrc` to save permanently:

```bash
echo 'export OLLAMA_MAX_LOADED_MODELS=2' >> ~/.zshrc
source ~/.zshrc
```

---

## 8. Troubleshooting is common

### "Error: model requires more memory than available"

Model is too large for RAM. Solution:

- Use a smaller model: `llama3.2:3b` instead `llama3.2:8b`
- Close other apps to free up RAM

### Unusually slow speed

```bash
# Kiểm tra GPU utilization
ollama ps
# Nếu thấy "100% CPU" thay vì "100% GPU" → model quá lớn, không fit GPU memory
```

### Ollama server did not start

```bash
# Kiểm tra port xem có bị chiếm không
lsof -i :11434

# Kill process cũ nếu cần
pkill ollama
ollama serve
```

---

## Summary

| Command | Description |
|-------|-------|
| `ollama pull <model>` | Download model |
| `ollama run <model>` | Run and chat |
| `ollama list` | View downloaded models |
| `ollama ps` | View running models |
| `ollama show <model>` | Model information |
| `ollama rm <model>` | Delete model |
| `ollama serve` | Start the server |

---

## Exercises

1. Install Ollama and drag 2 models: `llama3.2` and `gemma3:4b`
2. Chat with each model asking the same question and compare the quality of the answers
3. Use `ollama show` See information for both models: quantization, parameter count, context length
4. Check `ollama ps` while chatting — how much RAM does the model use? GPU or CPU?
5. Use `du -sh ~/.ollama/models` See how much space the model takes up

**Next article**: Which model to choose for your use case? →
