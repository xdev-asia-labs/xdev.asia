---
id: 019c9619-bb03-7003-d003-bb0300000003
title: 'Lesson 3: Choose the right model - Compare LLM for Mac'
slug: bai-3-chon-model-phu-hop-so-sanh-llm-cho-mac
description: >-
  Comprehensive comparison table: Llama 3.2 vs Gemma 3 vs Qwen 2.5 vs Mistral vs
  Phi-4. RAM requirements for each model size. Quantization (Q4, Q5, Q8) affects
  speed vs quality. Choose model according to use case.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 1: Platform - Ollama & Apple Silicon'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Running AI Local with Ollama on Apple Silicon
  slug: ollama-apple-silicon
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Choose the right model - Compare LLM</tspan>
      <tspan x="60" dy="42">for Mac</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Running AI Local with Ollama on Apple Silicon</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Platform - Ollama & Apple Silicon</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Ollama registry has hundreds of models. So which model to choose? This article is a real-life **cheat sheet**: comparing the most popular models, helping you choose the right model for each task and Mac configuration.

---

## 1. Understand Model Naming Convention

When you see `qwen2.5:14b-instruct-q4_K_M`, here's how to read:

```
qwen2.5    :  14b    -  instruct   -  q4_K_M
└── Family    └── Size   └── Variant    └── Quantization
```

- **Family**: Original model name (Llama, Gemma, Qwen, Mistral...)
- **Size**: Number of parameters (1B, 3B, 7B, 8B, 14B, 32B, 70B...)
- **Variant**: `instruct` (chat), `base` (raw), `code` (coding)
- **Quantization**: Model compression level (Q4, Q5, Q8, F16)

---

## 2. Quantization — Which Q to choose?

Quantization is a technique to reduce model size by reducing the precision of weights:

| Quantization | Bits/weight | Size ratio | Quality | Speed ​​|
|-------------|-------------|-------------|--------|-------|
| F16 | 16 bits | 100% (baseline) | Best | Slowest |
| Q8_0 | 8 bits | ~50% | Almost equal to F16 | Faster |
| Q6_K | 6 bits | ~37% | Very good | Fast |
| Q5_K_M | 5 bits | ~31% | Good | Fast |
| Q4_K_M | 4 bits | ~25% | Pretty good | Fastest |
| Q3_K_M | 3 bits | ~19% | Significant reduction | Very fast |
| Q2_K | 2 bits | ~12% | Poor | Extremely fast |

> 💡 **Recommended**: **Q4_K_M** is the sweet spot for most cases. Reduced size by ~75% but still good quality. Q5_K_M if you want a little higher quality.

### Real world example: Llama 3.2 8B

| Quantization | Size on disk | RAM needed | Tokens/s (M3 Pro) |
|-------------|---------------|---------|-------------------|
| F16 | 16 GB | ~18 GB | ~12 tok/s |
| Q8_0 | 8.5 GB | ~10 GB | ~24 tok/s |
| Q4_K_M | 4.9 GB | ~6.5 GB | ~32 tok/s |

---

## 3. Comprehensive model comparison table

### Small model group (1B-4B) — MacBook Air 8GB

| Model | Size (Q4) | RAM min | Code | Vietnamese | Overview |
|-------|-----------|---------|-----|-------------|-----------|
| Llama 3.2 3B | 2.0 GB | 4 GB | ★★★☆ | ★★☆☆ | Jack of all trades |
| Gemma 3 4B | 3.3 GB | 5 GB | ★★★☆ | ★★★☆ | Good multilingual |
| Phi-4 Mini 3.8B | 2.5 GB | 4.5 GB | ★★★★ | ★★☆☆ | Code/math is very powerful |
| Qwen 2.5 3B | 1.9 GB | 4 GB | ★★★☆ | ★★★☆ | Good balance |

### Medium model group (7B-14B) — MacBook 16-24GB

| Model | Size (Q4) | RAM min | Code | Vietnamese | Overview |
|-------|-----------|---------|-----|-------------|-----------|
| Llama 3.2 8B | 4.9 GB | 7 GB | ★★★★ | ★★★☆ | Best all round |
| Gemma 3 12B | 8.1 GB | 10 GB | ★★★★ | ★★★★ | Multilingual champion |
| Qwen 2.5 14B | 9.0 GB | 11 GB | ★★★★ | ★★★★★ | Best Vietnamese |
| Mistral 7B | 4.1 GB | 6 GB | ★★★★ | ★★★☆ | Code/reasoning solid |
| DeepSeek Coder V2 16B | 10.2 GB | 13 GB | ★★★★★ | ★★☆☆ | Coding beast |

### Large model group (30B+) — MacBook 32GB+

| Model | Size (Q4) | RAM min | Code | Vietnamese | Overview |
|-------|-----------|---------|-----|-------------|-----------|
| Qwen 2.5 32B | 18 GB | 22 GB | ★★★★★ | ★★★★★ | Best local model |
| Llama 3.3 70B | 40 GB | 48 GB | ★★★★★ | ★★★★ | Needs 64GB+ RAM |
| DeepSeek V3 (distill 32B) | 19 GB | 23 GB | ★★★★★ | ★★★☆ | Reasoning king |

---

## 4. Choose model according to use case

### Smart Chatbot / Q&A

```bash
# Tiếng Việt tốt nhất
ollama run qwen2.5:14b

# Cân bằng nhất
ollama run llama3.2

# RAM ít (8GB)
ollama run gemma3:4b
```

### Code writing / Code review

```bash
# Coding chuyên sâu
ollama run deepseek-coder-v2:16b

# Cân bằng code + chat
ollama run qwen2.5-coder:14b

# RAM ít
ollama run phi4-mini
```

### Summary / Writing

```bash
# Tiếng Việt
ollama run qwen2.5:14b

# Tiếng Anh
ollama run llama3.2
```

### Image analysis (Vision)

```bash
# Vision tốt nhất
ollama run gemma3:12b   # Có vision built-in

# Nhẹ hơn
ollama run llava:7b
```

---

## 5. Select model according to Mac RAM

### 8 GB RAM (MacBook Air M1/M2 base)

```bash
# Chỉ nên dùng model 3-4B
ollama run llama3.2:3b     # 2.0 GB, chạy tốt
ollama run phi4-mini       # 2.5 GB, code tốt
ollama run gemma3:1b       # 1.0 GB, cực nhẹ
```

> ⚠️ With 8GB, close Safari before running model 3B. macOS requires ~4GB for the system.

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

## 6. Realistic benchmark

Run a simple benchmark:

```bash
# Đo thời gian generate
time ollama run llama3.2 "Viết function fibonacci bằng Python" --nowordwrap
```

Or use Ollama API to get accurate metrics:

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

## 7. Model tags you should know

When pulling a model, the default tag is `latest` (usually instruct + Q4_K_M). But you can specify:

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

See all available tags:

```bash
# Truy cập: https://ollama.com/library/llama3.2/tags
# Hoặc: https://ollama.com/library/qwen2.5/tags
```

---

## Summary

| Mac RAM | Recommended model | Size |
|--------|-------------------|-------------|
| 8 GB | `llama3.2:3b`, `phi4-mini` | 2-3 GB |
| 16 GB | `llama3.2`, `qwen2.5:7b` | 4-5 GB |
| 24-36 GB | `qwen2.5:14b`, `gemma3:12b` | 8-10 GB |
| 48 GB+ | `qwen2.5:32b` | 18 GB |

**Quantization**: Always start with **Q4_K_M** (default). Only upgrade to Q5/Q8 when you want better quality and have extra RAM.

---

## Exercises

1. Based on your Mac's RAM, choose 2-3 suitable models and download them
2. Ask the same question about Vietnamese for each model, noting which model answers best
3. Use the benchmark script above to measure tokens/second of each model
4. Compare Q4 vs Q8 with the same model: is there a clear difference in quality? How much different speed?

**Next article**: MLX Framework — Accelerate 3x inference →
