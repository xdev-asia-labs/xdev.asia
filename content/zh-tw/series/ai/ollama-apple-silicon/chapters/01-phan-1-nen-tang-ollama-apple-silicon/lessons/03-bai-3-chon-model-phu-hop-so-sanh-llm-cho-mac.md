---
id: 019c9619-bb03-7003-d003-bb0300000003
title: 第 3 課：選擇正確的模型 - 比較 Mac 版 LLM
slug: bai-3-chon-model-phu-hop-so-sanh-llm-cho-mac
description: >-
  綜合比較表：Llama 3.2 vs Gemma 3 vs Qwen 2.5 vs Mistral vs Phi-4。每種型號尺寸的 RAM
  要求。量化（Q4、Q5、Q8）會影響速度與品質。根據使用案例選擇型號。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：平台 - Ollama 和 Apple Silicon
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: 在 Apple Silicon 上使用 Ollama 運行本地 AI
  slug: ollama-apple-silicon
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：選擇正確的模式 - 比較 LLM</tspan>
      <tspan x="60" dy="42">適用於蘋果電腦</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">在 Apple Silicon 上使用 Ollama 運行本地 AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：平台 - Ollama 和 Apple Silicon</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Ollama 註冊表有數百個模型。那麼選擇哪種型號呢？本文是現實生活中的 **備忘單**：比較最受歡迎的型號，幫助您為每個任務和 Mac 配置選擇正確的型號。

---

## 1. 了解模型命名約定

當你看到 `qwen2.5:14b-instruct-q4_K_M`，閱讀方法如下：

```
qwen2.5    :  14b    -  instruct   -  q4_K_M
└── Family    └── Size   └── Variant    └── Quantization
```

- **家庭**：原始模型名稱（Llama、Gemma、Qwen、Mistral...）
- **大小**：參數數（1B、3B、7B、8B、14B、32B、70B...）
- **變體**： `instruct` （聊天）， `base` （原始）， `code` （編碼）
- **量化**：模型壓縮等級（Q4、Q5、Q8、F16）

---

## 2. 量化 — 選擇哪一個 Q？

量化是一種透過降低權重精度來減少模型大小的技術：

|量化|位數/重量 |尺寸比例|品質 |速度|
|------------|-------------|------------|--------|--------|
| F16| 16位元| 100%（基線）|最佳|最慢|
| Q8_0 | 8位元| 〜50% |幾乎等於F16|更快 |
| Q6_K | 6位元| ~37% |很好|快|
| Q5_K_M | 5 位元 | ~31% |好 |快|
| Q4_K_M | 4位元| 〜25% |還不錯|最快|
| Q3_K_M | 3位元| 〜19% |大幅減少|非常快速|
| Q2_K | 2位| 〜12% |可憐|極快|

> 💡 **推薦**：**Q4_K_M** 是大多數情況下的最佳選擇。尺寸減小了約 75%，但品質仍然很好。 Q5_K_M 如果你想要更高一點的品質。

### 現實世界範例：Llama 3.2 8B

|量化|磁碟大小 |需要記憶體|令牌/秒（M3 Pro）|
|------------|--------------|---------|--------------------|
| F16| 16GB| 〜18 GB | ~12 托克/秒 |
| Q8_0 | 8.5 GB | 8.5 GB 〜10 GB | ~24 托克/秒 |
| Q4_K_M | 4.9 GB | 4.9 GB 〜6.5 GB | ~32 托克/秒 |

---

## 3.綜合模型比較表

### 小型號組 (1B-4B) — MacBook Air 8GB

|型號|尺寸 (Q4) |最小內存 |代碼|越南語 |概述 |
|--------|---------|---------|-----|-------------|------------|
|駱駝 3.2 3B | 2.0GB| 4GB| ★★★☆ | ★★☆☆ |萬事通|
|傑瑪 3 4B | 3.3 GB | 3.3 GB 5GB| ★★★☆ | ★★★☆ |良好的多語言 |
| Phi-4 迷你 3.8B | 2.5 GB | 2.5 GB 4.5 GB | 4.5 GB ★★★★ | ★★☆☆ |程式碼/數學很強 |
|啟文2.5 3B | 1.9 GB | 1.9 GB 4GB| ★★★☆ | ★★★☆ |良好的平衡性|

### 中型機種組 (7B-14B) — MacBook 16-24GB

|型號|尺寸 (Q4) |最小內存 |代碼|越南語 |概述 |
|--------|---------|---------|-----|-------------|------------|
|駱駝 3.2 8B | 4.9 GB | 4.9 GB 7GB| ★★★★ | ★★★☆ |全面最佳 |
|傑瑪 3 12B | 8.1GB| 10GB| ★★★★ | ★★★★ |多語言冠軍 |
|啟文2.5 14B | 9.0GB| 11GB| ★★★★ | ★★★★★ |最佳越南語 |
|米斯特拉爾 7B | 4.1GB| 6GB| ★★★★ | ★★★☆ |代碼/推理紮實 |
| DeepSeek 編碼器 V2 16B | 10.2 GB | 10.2 GB 13GB| ★★★★★ | ★★☆☆ |編碼野獸 |

### 大型型號組 (30B+) — MacBook 32GB+

|型號|尺寸 (Q4) |最小內存 |代碼|越南語 |概述 |
|--------|---------|---------|-----|-------------|------------|
|啟文2.5 32B | 18GB| 22GB| ★★★★★ | ★★★★★ |最佳本土模特兒|
|駱駝 3.3 70B | 40GB| 48GB| ★★★★★ | ★★★★ |需要 64GB+ RAM |
| DeepSeek V3（蒸餾 32B）| 19GB| 23GB| ★★★★★ | ★★★☆ |推理王|

---

## 4.根據用例選擇模型

### 智慧聊天機器人/問答

```bash
# Tiếng Việt tốt nhất
ollama run qwen2.5:14b

# Cân bằng nhất
ollama run llama3.2

# RAM ít (8GB)
ollama run gemma3:4b
```

### 程式碼編寫/程式碼審查

```bash
# Coding chuyên sâu
ollama run deepseek-coder-v2:16b

# Cân bằng code + chat
ollama run qwen2.5-coder:14b

# RAM ít
ollama run phi4-mini
```

### 總結/寫作

```bash
# Tiếng Việt
ollama run qwen2.5:14b

# Tiếng Anh
ollama run llama3.2
```

### 影像分析（視覺）

```bash
# Vision tốt nhất
ollama run gemma3:12b   # Có vision built-in

# Nhẹ hơn
ollama run llava:7b
```

---

## 5.根據Mac RAM選擇型號

### 8 GB RAM（MacBook Air M1/M2 底座）

```bash
# Chỉ nên dùng model 3-4B
ollama run llama3.2:3b     # 2.0 GB, chạy tốt
ollama run phi4-mini       # 2.5 GB, code tốt
ollama run gemma3:1b       # 1.0 GB, cực nhẹ
```

> ⚠️ 使用 8GB，在執行型號 3B 之前關閉 Safari。 macOS 系統需要 ~4GB。

### 16 GB 內存

```bash
# Sweet spot
ollama run llama3.2        # 8B, 4.9 GB
ollama run qwen2.5:7b      # 7B, 4.7 GB
ollama run mistral          # 7B, 4.1 GB
```

### 24-36 GB 內存

```bash
# Mở rộng lên 12-14B
ollama run gemma3:12b      # 8.1 GB
ollama run qwen2.5:14b     # 9.0 GB, khuyến nghị
ollama run deepseek-coder-v2:16b  # 10.2 GB
```

### 48-64 GB+ 內存

```bash
# Model lớn, chất lượng gần cloud
ollama run qwen2.5:32b     # 18 GB
ollama run llama3.3:70b    # 40 GB, cần 48GB+ RAM
```

---

## 6.現實基準

執行一個簡單的基準測試：

```bash
# Đo thời gian generate
time ollama run llama3.2 "Viết function fibonacci bằng Python" --nowordwrap
```

或使用 Ollama API 取得準確的指標：

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

## 7. 你應該知道的模型標籤

拉取模型時，預設標籤是 `latest` （通常是指令+Q4_K_M）。但您可以指定：

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

查看所有可用標籤：

```bash
# Truy cập: https://ollama.com/library/llama3.2/tags
# Hoặc: https://ollama.com/library/qwen2.5/tags
```

---

## 總結

| Mac 內存 |建議型號|尺寸|
|--------|--------------------|-------------|
| 8GB| `llama3.2:3b`, `phi4-mini` | 2-3GB|
| 16GB| `llama3.2`, `qwen2.5:7b` | 4-5GB|
| 24-36GB| `qwen2.5:14b`, `gemma3:12b` | 8-10GB|
| 48 GB+ | `qwen2.5:32b` | 18GB|

**量化**：始終以 **Q4_K_M** 開始（預設）。只有當您想要更好的品質並擁有額外的 RAM 時才升級到 Q5/Q8。

---

## 練習

1. 根據您Mac的RAM，選擇2-3個合適的型號並下載
2. 對每個模型詢問關於越南語的相同問題，並注意哪個模型回答最好
3. 使用上面的基準腳本來測量每個模型的令牌/秒
4.同型號Q4與Q8比較：品質有明顯差異嗎？速度相差多少？

**下一篇**：MLX 框架 — 加速 3 倍推理 →
