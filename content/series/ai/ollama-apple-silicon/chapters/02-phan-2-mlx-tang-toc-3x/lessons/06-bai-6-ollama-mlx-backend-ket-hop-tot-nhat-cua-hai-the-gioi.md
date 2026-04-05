---
id: 019c9619-bb06-7006-d006-bb0600000006
title: 'Bài 6: Ollama + MLX backend - Kết hợp tốt nhất của hai thế giới'
slug: bai-6-ollama-mlx-backend-ket-hop-tot-nhat-cua-hai-the-gioi
description: >-
  Cấu hình Ollama dùng MLX backend thay vì llama.cpp. Benchmark chi tiết.
  Tối ưu context window. Khi nào dùng MLX backend, khi nào dùng llama.cpp.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 2: MLX - Tăng tốc 3x với framework native của Apple"
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Chạy AI Local với Ollama trên Apple Silicon
  slug: ollama-apple-silicon
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI &amp; ML — Bài 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: Ollama + MLX backend - Kết hợp tốt</tspan>
      <tspan x="60" dy="42">nhất của hai thế giới</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Chạy AI Local với Ollama trên Apple Silicon</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: MLX - Tăng tốc 3x với framework native của Apple</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Bạn đã biết Ollama (tiện lợi, có API, ecosystem lớn) và MLX (nhanh hơn trên Mac). Câu hỏi tự nhiên: **có thể kết hợp cả hai không?**

Câu trả lời: **Có**. Ollama hỗ trợ MLX backend, cho phép bạn dùng tiện ích của Ollama (API, model management) nhưng inference bằng MLX engine.

---

## 1. MLX backend trong Ollama

Từ phiên bản 0.5+, Ollama thêm support cho MLX trên macOS. Thay vì dùng llama.cpp (GGUF format), bạn có thể import model MLX (safetensors format) và Ollama sẽ dùng MLX engine.

### Cách hoạt động

```
                    ┌─────── Backend ────────┐
User ──► Ollama ──►│ llama.cpp (default)     │──► Response
         API       │ MLX (khi dùng MLX model)│
                    └────────────────────────┘
```

---

## 2. Tạo model Ollama từ MLX weights

### Bước 1: Tải model MLX

```bash
# Dùng huggingface-cli
pip3 install huggingface-hub
huggingface-cli download mlx-community/Llama-3.2-3B-Instruct-4bit \
  --local-dir ./models/llama-3.2-3b-mlx
```

### Bước 2: Tạo Modelfile

```bash
cat > Modelfile.mlx << 'EOF'
FROM ./models/llama-3.2-3b-mlx

PARAMETER temperature 0.7
PARAMETER top_p 0.9
PARAMETER num_ctx 4096

SYSTEM """Bạn là trợ lý AI thông minh. Trả lời ngắn gọn, chính xác, bằng tiếng Việt."""
EOF
```

### Bước 3: Build model trong Ollama

```bash
ollama create llama3.2-mlx -f Modelfile.mlx
```

### Bước 4: Chạy

```bash
ollama run llama3.2-mlx
```

Bây giờ Ollama sẽ dùng MLX engine cho model này, nhưng bạn vẫn dùng qua Ollama CLI và API như bình thường.

---

## 3. So sánh: cùng model, hai backend

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

### Kết quả mẫu (M3 Pro 36GB)

| Metric | llama.cpp | MLX | Speedup |
|--------|-----------|-----|---------|
| Prompt processing | 285 tok/s | 640 tok/s | 2.2x |
| Token generation | 33 tok/s | 55 tok/s | 1.7x |
| Memory usage | 6.5 GB | 5.8 GB | -10% |
| API response time | 8.2s | 4.8s | 1.7x |

---

## 4. Context window tuning

Context window quyết định bao nhiêu text model "nhớ" trong một conversation. Tăng context = tốn RAM hơn.

### Tính RAM cho context

```
KV Cache memory ≈ 2 × n_layers × n_heads × head_dim × context_length × 2 bytes (FP16)
```

Llama 3.2 8B với các context length:

| Context | KV Cache thêm | Total RAM |
|---------|---------------|-----------|
| 2048 | ~0.5 GB | ~6 GB |
| 4096 | ~1 GB | ~6.5 GB |
| 8192 | ~2 GB | ~7.5 GB |
| 16384 | ~4 GB | ~9.5 GB |
| 32768 | ~8 GB | ~13.5 GB |
| 131072 | ~32 GB | ~37.5 GB |

### Đặt context trong Modelfile

```
FROM ./models/llama-3.2-3b-mlx

# Context window
PARAMETER num_ctx 8192

# Giảm context nếu ít RAM
# PARAMETER num_ctx 2048
```

### Đặt context khi chạy

```bash
# Override context khi chạy
ollama run llama3.2-mlx --num-ctx 16384
```

> 💡 **Khuyến nghị**: Bắt đầu với `4096`, tăng dần đến khi hết RAM hoặc đủ cho use case.

---

## 5. Tối ưu performance

### GPU utilization

```bash
# Kiểm tra model dùng GPU hay CPU
ollama ps
```

Output lý tưởng: `100% GPU`. Nếu thấy CPU, nghĩa là model không fit trong GPU accessible memory.

### Giữ model trong memory

Mặc định, Ollama unload model sau 5 phút idle. Thay đổi:

```bash
# Giữ model loaded 30 phút
export OLLAMA_KEEP_ALIVE=30m

# Giữ vĩnh viễn (cho đến khi restart)
export OLLAMA_KEEP_ALIVE=-1
```

Hoặc trong API:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2-mlx",
  "keep_alive": -1
}'
```

### Chạy nhiều model đồng thời

```bash
# Cho phép 3 model cùng lúc
export OLLAMA_MAX_LOADED_MODELS=3

# Chạy song song
export OLLAMA_NUM_PARALLEL=4
```

> ⚠️ Mỗi model chiếm RAM riêng. 3 model × 5GB = 15GB. Đảm bảo đủ RAM cho macOS + apps khác.

---

## 6. Monitoring performance

### Activity Monitor

Mở **Activity Monitor** → tab **GPU** để xem:

- GPU utilization % khi đang inference
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

## 7. Workflow khuyến nghị

Dựa trên kinh nghiệm thực tế, đây là workflow tối ưu:

### Daily use: Ollama (llama.cpp)

```bash
# Model mặc định cho chat, hỏi đáp
ollama run qwen2.5:14b
```

- Ổn định, ecosystem lớn (Open WebUI, Continue.dev...)
- Đủ nhanh cho interactive chat

### Khi cần tốc độ: Ollama + MLX

```bash
# Model MLX cho tác vụ cần nhanh
ollama run qwen2.5-mlx
```

- Prompt processing nhanh 2x → time-to-first-token rất thấp
- Batch processing nhiều requests

### Scripting/Pipeline: mlx-lm trực tiếp

```python
from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Qwen2.5-14B-Instruct-4bit")
# Custom pipeline, batch processing, fine-tuning...
```

- Kiểm soát hoàn toàn
- Không overhead của Ollama server

---

## Tóm tắt

| Approach | Ưu | Nhược | Khi nào dùng |
|----------|---|-------|-------------|
| Ollama + llama.cpp | Ổn định, ecosystem | Chậm hơn MLX | Daily default |
| Ollama + MLX | Nhanh hơn, dùng Ollama API | Setup phức tạp hơn | Cần tốc độ + API |
| mlx-lm trực tiếp | Nhanh nhất, flexible | Không có API server | Scripting, pipeline |

---

## Bài tập

1. Tạo model Ollama với MLX backend theo hướng dẫn ở mục 2
2. Chạy benchmark so sánh hai backend (llama.cpp vs MLX) cho cùng model
3. Thử tăng context window: 2048 → 4096 → 8192. Ghi nhận RAM usage tăng bao nhiêu?
4. Test `OLLAMA_KEEP_ALIVE=-1` — có ảnh hưởng đến RAM khi idle không?
5. Xây workflow cá nhân: chọn model + backend cho 3 use case hàng ngày của bạn

**Bài tiếp theo**: Ollama REST API →
