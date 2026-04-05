---
id: 019c9619-bb02-7002-d002-bb0200000002
title: 'Bài 2: Cài đặt Ollama - Từ zero đến chạy LLM trong 5 phút'
slug: bai-2-cai-dat-ollama-tu-zero-den-chay-llm-trong-5-phut
description: >-
  Cài Ollama trên macOS, hiểu cấu trúc thư mục và cách quản lý model.
  Pull và chạy Llama 3.2, Gemma 3, Mistral, Qwen 2.5.
  Ollama CLI commands quan trọng: run, pull, list, rm, show, ps.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng - Ollama & Apple Silicon"
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Chạy AI Local với Ollama trên Apple Silicon
  slug: ollama-apple-silicon
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI &amp; ML — Bài 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 2: Cài đặt Ollama - Từ zero đến chạy</tspan>
      <tspan x="60" dy="42">LLM trong 5 phút</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Chạy AI Local với Ollama trên Apple Silicon</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng - Ollama &amp; Apple Silicon</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Ở bài trước, bạn đã hiểu tại sao Apple Silicon mạnh cho AI. Bây giờ hãy biến lý thuyết thành thực tế: cài Ollama và chat với LLM ngay trên máy, không cần internet, không cần API key.

**Mục tiêu bài này**: Sau 5 phút, bạn sẽ đang chat với AI model chạy hoàn toàn trên máy tính của bạn.

---

## 1. Ollama là gì?

[Ollama](https://ollama.com) là công cụ chạy LLM local dễ nhất hiện nay. Think of it as "Docker for LLMs":

- **Pull model** từ registry như pull Docker images
- **Chạy model** bằng một lệnh duy nhất
- **Expose API** tương thích OpenAI endpoint
- **Quản lý** nhiều model cùng lúc

Ollama dùng **llama.cpp** (một inference engine viết bằng C++) ở bên dưới, nhưng wrap lại thành trải nghiệm siêu đơn giản.

---

## 2. Cài đặt Ollama trên macOS

### Cách 1: Tải từ website (khuyến nghị)

```bash
# Truy cập https://ollama.com/download và tải bản macOS
# Hoặc dùng curl:
curl -fsSL https://ollama.com/install.sh | sh
```

### Cách 2: Dùng Homebrew

```bash
brew install ollama
```

### Xác nhận cài đặt

```bash
ollama --version
```

Output:

```
ollama version is 0.6.x
```

### Khởi động Ollama server

Nếu cài từ `.dmg`, Ollama app sẽ tự chạy server khi mở. Nếu cài từ CLI:

```bash
# Chạy server (giữ terminal này mở)
ollama serve
```

Server chạy trên `http://localhost:11434`.

Kiểm tra:

```bash
curl http://localhost:11434
# Output: Ollama is running
```

---

## 3. Chạy model đầu tiên

### Pull và chạy Llama 3.2

```bash
# Pull model (chỉ cần lần đầu, ~2GB cho 3B, ~4.5GB cho 8B)
ollama pull llama3.2

# Chạy và chat
ollama run llama3.2
```

Bạn sẽ thấy prompt:

```
>>> Send a message (/? for help)
```

Thử hỏi:

```
>>> Giải thích Docker trong 3 câu
```

AI sẽ trả lời ngay lập tức, chạy hoàn toàn trên máy bạn. Nhấn `Ctrl+D` để thoát.

### Pull thêm model khác

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

## 4. Ollama CLI Commands quan trọng

### Xem danh sách model đã tải

```bash
ollama list
```

Output mẫu:

```
NAME                ID              SIZE      MODIFIED
llama3.2:latest     a80c4f17acd5    2.0 GB    2 minutes ago
gemma3:4b           2d2a94b1e3fc    3.3 GB    5 minutes ago
qwen2.5:7b          845dbda0ea48    4.7 GB    8 minutes ago
```

### Xem thông tin chi tiết model

```bash
ollama show llama3.2
```

Output hiển thị:

- Architecture (LlamaForCausalLM)
- Parameters (3.2B)
- Quantization (Q4_K_M)
- Context length (128K)
- System prompt mặc định

### Xem model đang chạy

```bash
ollama ps
```

Output:

```
NAME              ID            SIZE     PROCESSOR    UNTIL
llama3.2:latest   a80c4f17acd5  3.2 GB   100% GPU     4 minutes from now
```

> 💡 **100% GPU** nghĩa là toàn bộ model nằm trên GPU memory (Metal trên Mac). Đây là trường hợp lý tưởng.

### Xóa model

```bash
# Xóa một model để giải phóng ổ cứng
ollama rm mistral
```

### Copy model (tạo bản sao với tên khác)

```bash
ollama cp llama3.2 my-assistant
```

---

## 5. Cấu trúc thư mục Ollama

Ollama lưu trữ mọi thứ tại:

```
~/.ollama/
├── models/
│   ├── blobs/        # Model weights (file lớn)
│   └── manifests/    # Metadata cho mỗi model
└── logs/             # Logs
```

Kiểm tra dung lượng:

```bash
du -sh ~/.ollama/models
```

> ⚠️ **Lưu ý**: Model nặng! 3-5 model có thể chiếm 20-30GB. Nếu ổ SSD nhỏ, hãy chọn lọc model cần thiết.

### Di chuyển thư mục models sang ổ ngoài

Nếu ổ chính nhỏ:

```bash
# Dừng Ollama
# Di chuyển thư mục
mv ~/.ollama/models /Volumes/ExternalSSD/ollama-models

# Tạo symlink
ln -s /Volumes/ExternalSSD/ollama-models ~/.ollama/models

# Khởi động lại Ollama
```

---

## 6. Chat nâng cao với Ollama

### System prompt inline

```bash
ollama run llama3.2 "Bạn là một chuyên gia Python. Trả lời bằng tiếng Việt." \
  --system "You are a senior Python developer who explains things simply in Vietnamese."
```

### Multi-line input

Trong chat mode, dùng `"""` để nhập nhiều dòng:

```
>>> """
... Phân tích đoạn code sau:
... def fibonacci(n):
...     if n <= 1: return n
...     return fibonacci(n-1) + fibonacci(n-2)
... """
```

### Đặt temperature và context

```bash
# Temperature thấp = ít sáng tạo, chính xác hơn
ollama run llama3.2 --temperature 0.1

# Context window lớn hơn (tốn RAM hơn)
ollama run llama3.2 --num-ctx 8192
```

### Slash commands trong chat

| Command | Mô tả |
|---------|-------|
| `/set system <prompt>` | Đặt system prompt |
| `/show info` | Xem thông tin model |
| `/show modelfile` | Xem Modelfile |
| `/clear` | Xóa lịch sử chat |
| `/bye` hoặc `Ctrl+D` | Thoát |
| `/?` | Xem help |

---

## 7. Environment Variables hữu ích

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

Thêm vào `~/.zshrc` để lưu vĩnh viễn:

```bash
echo 'export OLLAMA_MAX_LOADED_MODELS=2' >> ~/.zshrc
source ~/.zshrc
```

---

## 8. Troubleshooting thường gặp

### "Error: model requires more memory than available"

Model quá lớn cho RAM. Giải pháp:

- Dùng model nhỏ hơn: `llama3.2:3b` thay vì `llama3.2:8b`
- Đóng các app khác để giải phóng RAM

### Tốc độ chậm bất thường

```bash
# Kiểm tra GPU utilization
ollama ps
# Nếu thấy "100% CPU" thay vì "100% GPU" → model quá lớn, không fit GPU memory
```

### Ollama server không khởi động

```bash
# Kiểm tra port xem có bị chiếm không
lsof -i :11434

# Kill process cũ nếu cần
pkill ollama
ollama serve
```

---

## Tóm tắt

| Lệnh | Mô tả |
|-------|-------|
| `ollama pull <model>` | Tải model |
| `ollama run <model>` | Chạy và chat |
| `ollama list` | Xem model đã tải |
| `ollama ps` | Xem model đang chạy |
| `ollama show <model>` | Thông tin model |
| `ollama rm <model>` | Xóa model |
| `ollama serve` | Khởi động server |

---

## Bài tập

1. Cài Ollama và kéo 2 model: `llama3.2` và `gemma3:4b`
2. Chat với mỗi model cùng một câu hỏi và so sánh chất lượng trả lời
3. Dùng `ollama show` xem thông tin cả hai model: quantization, parameter count, context length
4. Kiểm tra `ollama ps` khi đang chat — model dùng bao nhiêu RAM? GPU hay CPU?
5. Dùng `du -sh ~/.ollama/models` xem model chiếm bao nhiêu dung lượng

**Bài tiếp theo**: Chọn model nào cho use case của bạn? →
