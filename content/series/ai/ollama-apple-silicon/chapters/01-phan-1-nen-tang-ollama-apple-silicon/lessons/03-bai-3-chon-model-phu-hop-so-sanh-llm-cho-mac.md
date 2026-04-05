---
id: 019c9619-bb03-7003-d003-bb0300000003
title: 'Bài 3: Chọn model phù hợp - So sánh LLM cho Mac'
slug: bai-3-chon-model-phu-hop-so-sanh-llm-cho-mac
description: >-
  Bảng so sánh toàn diện: Llama 3.2 vs Gemma 3 vs Qwen 2.5 vs Mistral vs Phi-4.
  RAM requirements cho từng model size. Quantization (Q4, Q5, Q8) ảnh hưởng speed vs quality.
  Chọn model theo use case.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng - Ollama & Apple Silicon"
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Chạy AI Local với Ollama trên Apple Silicon
  slug: ollama-apple-silicon
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4148" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4148)"/>

  <!-- Decorations -->
  <g>
    <circle cx="812" cy="146" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="1024" cy="98" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="736" cy="50" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="948" cy="262" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="660" cy="214" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="126" x2="1100" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="156" x2="1050" y2="226" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="961.507041555162,105.5 961.507041555162,146.5 926,167 890.492958444838,146.5 890.492958444838,105.50000000000001 926,85" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI &amp; ML — Bài 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 3: Chọn model phù hợp - So sánh LLM</tspan>
      <tspan x="60" dy="42">cho Mac</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Chạy AI Local với Ollama trên Apple Silicon</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng - Ollama &amp; Apple Silicon</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Ollama registry có hàng trăm model. Vậy chọn model nào? Bài này là **cheat sheet** thực chiến: so sánh các model phổ biến nhất, giúp bạn chọn đúng model cho từng tác vụ và cấu hình Mac.

---

## 1. Hiểu Model Naming Convention

Khi bạn thấy `qwen2.5:14b-instruct-q4_K_M`, đây là cách đọc:

```
qwen2.5    :  14b    -  instruct   -  q4_K_M
└── Family    └── Size   └── Variant    └── Quantization
```

- **Family**: Tên model gốc (Llama, Gemma, Qwen, Mistral...)
- **Size**: Số parameter (1B, 3B, 7B, 8B, 14B, 32B, 70B...)
- **Variant**: `instruct` (chat), `base` (raw), `code` (coding)
- **Quantization**: Mức nén model (Q4, Q5, Q8, F16)

---

## 2. Quantization — Chọn Q mấy?

Quantization là kỹ thuật giảm kích thước model bằng cách giảm precision của weights:

| Quantization | Bits/weight | Size ratio | Quality | Speed |
|-------------|-------------|------------|---------|-------|
| F16 | 16 bit | 100% (baseline) | Tốt nhất | Chậm nhất |
| Q8_0 | 8 bit | ~50% | Gần bằng F16 | Nhanh hơn |
| Q6_K | 6 bit | ~37% | Rất tốt | Nhanh |
| Q5_K_M | 5 bit | ~31% | Tốt | Nhanh |
| Q4_K_M | 4 bit | ~25% | Khá tốt | Nhanh nhất |
| Q3_K_M | 3 bit | ~19% | Giảm đáng kể | Rất nhanh |
| Q2_K | 2 bit | ~12% | Kém | Cực nhanh |

> 💡 **Khuyến nghị**: **Q4_K_M** là sweet spot cho hầu hết trường hợp. Giảm ~75% kích thước mà chất lượng vẫn tốt. Q5_K_M nếu muốn chất lượng cao hơn một chút.

### Ví dụ thực tế: Llama 3.2 8B

| Quantization | Size trên disk | RAM cần | Tokens/s (M3 Pro) |
|-------------|---------------|---------|-------------------|
| F16 | 16 GB | ~18 GB | ~12 tok/s |
| Q8_0 | 8.5 GB | ~10 GB | ~24 tok/s |
| Q4_K_M | 4.9 GB | ~6.5 GB | ~32 tok/s |

---

## 3. Bảng so sánh model toàn diện

### Nhóm model nhỏ (1B-4B) — MacBook Air 8GB

| Model | Size (Q4) | RAM min | Code | Tiếng Việt | Tổng quan |
|-------|-----------|---------|------|------------|-----------|
| Llama 3.2 3B | 2.0 GB | 4 GB | ★★★☆ | ★★☆☆ | Jack of all trades |
| Gemma 3 4B | 3.3 GB | 5 GB | ★★★☆ | ★★★☆ | Đa ngôn ngữ tốt |
| Phi-4 Mini 3.8B | 2.5 GB | 4.5 GB | ★★★★ | ★★☆☆ | Code/math rất mạnh |
| Qwen 2.5 3B | 1.9 GB | 4 GB | ★★★☆ | ★★★☆ | Cân bằng tốt |

### Nhóm model trung bình (7B-14B) — MacBook 16-24GB

| Model | Size (Q4) | RAM min | Code | Tiếng Việt | Tổng quan |
|-------|-----------|---------|------|------------|-----------|
| Llama 3.2 8B | 4.9 GB | 7 GB | ★★★★ | ★★★☆ | Best all-round |
| Gemma 3 12B | 8.1 GB | 10 GB | ★★★★ | ★★★★ | Multilingual champion |
| Qwen 2.5 14B | 9.0 GB | 11 GB | ★★★★ | ★★★★★ | Tiếng Việt tốt nhất |
| Mistral 7B | 4.1 GB | 6 GB | ★★★★ | ★★★☆ | Code/reasoning solid |
| DeepSeek Coder V2 16B | 10.2 GB | 13 GB | ★★★★★ | ★★☆☆ | Coding beast |

### Nhóm model lớn (30B+) — MacBook 32GB+

| Model | Size (Q4) | RAM min | Code | Tiếng Việt | Tổng quan |
|-------|-----------|---------|------|------------|-----------|
| Qwen 2.5 32B | 18 GB | 22 GB | ★★★★★ | ★★★★★ | Best local model |
| Llama 3.3 70B | 40 GB | 48 GB | ★★★★★ | ★★★★ | Cần 64GB+ RAM |
| DeepSeek V3 (distill 32B) | 19 GB | 23 GB | ★★★★★ | ★★★☆ | Reasoning king |

---

## 4. Chọn model theo use case

### Chatbot thông minh / Hỏi đáp

```bash
# Tiếng Việt tốt nhất
ollama run qwen2.5:14b

# Cân bằng nhất
ollama run llama3.2

# RAM ít (8GB)
ollama run gemma3:4b
```

### Viết code / Code review

```bash
# Coding chuyên sâu
ollama run deepseek-coder-v2:16b

# Cân bằng code + chat
ollama run qwen2.5-coder:14b

# RAM ít
ollama run phi4-mini
```

### Tóm tắt / Viết văn bản

```bash
# Tiếng Việt
ollama run qwen2.5:14b

# Tiếng Anh
ollama run llama3.2
```

### Phân tích hình ảnh (Vision)

```bash
# Vision tốt nhất
ollama run gemma3:12b   # Có vision built-in

# Nhẹ hơn
ollama run llava:7b
```

---

## 5. Chọn model theo RAM Mac

### 8 GB RAM (MacBook Air M1/M2 base)

```bash
# Chỉ nên dùng model 3-4B
ollama run llama3.2:3b     # 2.0 GB, chạy tốt
ollama run phi4-mini       # 2.5 GB, code tốt
ollama run gemma3:1b       # 1.0 GB, cực nhẹ
```

> ⚠️ Với 8GB, hãy đóng Safari trước khi chạy model 3B. macOS cần ~4GB cho hệ thống.

### 16 GB RAM

```bash
# Sweet spot
ollama run llama3.2        # 8B, 4.9 GB
ollama run qwen2.5:7b      # 7B, 4.7 GB
ollama run mistral          # 7B, 4.1 GB
```

### 24-36 GB RAM

```bash
# Mở rộng lên 12-14B
ollama run gemma3:12b      # 8.1 GB
ollama run qwen2.5:14b     # 9.0 GB, khuyến nghị
ollama run deepseek-coder-v2:16b  # 10.2 GB
```

### 48-64 GB+ RAM

```bash
# Model lớn, chất lượng gần cloud
ollama run qwen2.5:32b     # 18 GB
ollama run llama3.3:70b    # 40 GB, cần 48GB+ RAM
```

---

## 6. Benchmark thực tế

Chạy benchmark đơn giản:

```bash
# Đo thời gian generate
time ollama run llama3.2 "Viết function fibonacci bằng Python" --nowordwrap
```

Hoặc dùng Ollama API để lấy metrics chính xác:

```bash
curl -s http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Explain Docker in 3 sentences",
  "stream": false
}' | python3 -c "
import sys, json
d = json.load(sys.stdin)
prompt_tokens = d['prompt_eval_count']
gen_tokens = d['eval_count']
prompt_time = d['prompt_eval_duration'] / 1e9
gen_time = d['eval_duration'] / 1e9
print(f'Prompt: {prompt_tokens} tokens in {prompt_time:.2f}s ({prompt_tokens/prompt_time:.1f} tok/s)')
print(f'Generate: {gen_tokens} tokens in {gen_time:.2f}s ({gen_tokens/gen_time:.1f} tok/s)')
"
```

---

## 7. Model tags nên biết

Khi pull model, tag mặc định là `latest` (thường là instruct + Q4_K_M). Nhưng bạn có thể chỉ định cụ thể:

```bash
# Chất lượng cao hơn (tốn RAM hơn)
ollama pull llama3.2:8b-instruct-q8_0

# Nhẹ nhất có thể
ollama pull llama3.2:3b-instruct-q4_0

# Model vision
ollama pull gemma3:12b    # Tự động có vision

# Chỉ lấy text model
ollama pull gemma3:4b-it-q4_K_M
```

Xem toàn bộ tags có sẵn:

```bash
# Truy cập: https://ollama.com/library/llama3.2/tags
# Hoặc: https://ollama.com/library/qwen2.5/tags
```

---

## Tóm tắt

| RAM Mac | Model khuyến nghị | Kích thước |
|---------|-------------------|------------|
| 8 GB | `llama3.2:3b`, `phi4-mini` | 2-3 GB |
| 16 GB | `llama3.2`, `qwen2.5:7b` | 4-5 GB |
| 24-36 GB | `qwen2.5:14b`, `gemma3:12b` | 8-10 GB |
| 48 GB+ | `qwen2.5:32b` | 18 GB |

**Quantization**: Luôn bắt đầu với **Q4_K_M** (default). Chỉ nâng lên Q5/Q8 khi muốn chất lượng tốt hơn và có dư RAM.

---

## Bài tập

1. Dựa vào RAM Mac của bạn, chọn 2-3 model phù hợp và pull về
2. Hỏi cùng một câu hỏi về tiếng Việt cho mỗi model, ghi nhận model nào trả lời tốt nhất
3. Dùng benchmark script ở trên để đo tokens/second của mỗi model
4. So sánh Q4 vs Q8 cùng một model: chất lượng có khác biệt rõ rệt không? Tốc độ khác bao nhiêu?

**Bài tiếp theo**: MLX Framework — Tăng tốc 3x inference →
