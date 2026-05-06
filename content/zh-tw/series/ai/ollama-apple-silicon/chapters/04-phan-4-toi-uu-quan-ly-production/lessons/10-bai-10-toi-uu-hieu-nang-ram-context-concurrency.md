---
id: 019c9619-bb10-7010-d010-bb1000000010
title: 第 10 課：優化效能 - RAM、上下文視窗和並發性
slug: bai-10-toi-uu-hieu-nang-ram-context-concurrency
description: >-
  OLLAMA_NUM_PARALLEL、OLLAMA_MAX_LOADED_MODELS、上下文視窗和 RAM。針對每種 MacBook
  配置進行基準測試、監控和最佳化。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 第 4 部分：最佳化、管理和生產設置
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: 在 Apple Silicon 上使用 Ollama 運行本地 AI
  slug: ollama-apple-silicon
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2828" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2828)"/>

  <!-- Decorations -->
  <g>
    <circle cx="942" cy="116" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="784" cy="58" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="626" cy="260" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="968" cy="202" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="810" cy="144" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="216" x2="1100" y2="296" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="246" x2="1050" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1042.8467875173176,200.5 1042.8467875173176,231.5 1016,247 989.1532124826824,231.5 989.1532124826824,200.5 1016,185" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：優化效能 - RAM、上下文</tspan>
      <tspan x="60" dy="42">視窗和並發</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">在 Apple Silicon 上使用 Ollama 運行本地 AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：最佳化、管理和生產設置</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在本地運行人工智慧意味著您管理資源而不是雲端提供者。本文將引導您優化 RAM、上下文視窗、並發性 — 以便 Ollama 在 Mac 上運行得最快。

---

## 1. 了解 Ollama 如何使用 RAM

### Apple Silicon 上的統一內存

Apple Silicon 使用**統一記憶體** — CPU 和 GPU 共享相同的記憶體：

```
┌─────────────────────────────────┐
│        Unified Memory           │
│  ┌───────────┐ ┌──────────────┐ │
│  │  CPU RAM   │ │   GPU VRAM   │ │
│  │  (macOS,   │ │  (Model      │ │
│  │   apps)    │ │   weights,   │ │
│  │            │ │   KV cache)  │ │
│  └───────────┘ └──────────────┘ │
└─────────────────────────────────┘
```

### 運行模型時 RAM 崩潰

|成分|描述 |範例（Llama 3.2 3B Q4）|
|----------|------|------------------------|
|模型重量 |量化權重 | 〜2.0 GB |
| KV 快取 |上下文視窗快取| ~0.5-2.0 GB |
|作業系統開銷| macOS 需要運作 | 〜3-4 GB |
|奧拉馬運行時 |伺服器進程 | 〜200 MB |

### 計算模型所需的 RAM

估計公式：

```
RAM = Model_Size + KV_Cache + OS_Overhead

KV_Cache ≈ (context_length × num_layers × hidden_dim × 2 × 2) / (1024³)
          ≈ (context_length × num_params_billions × 0.05) GB
```

參考表：

|型號| Q4_K_M |背景 2K |背景 8K |上下文 32K |
|--------|--------|------------|------------|------------|
| 1B | 0.7 GB | 0.7 GB 1.2 GB | 1.2 GB 1.5 GB | 1.5 GB 3.0GB|
| 3B | 2.0GB| 2.8 GB | 2.8 GB 3.5 GB | 3.5 GB 6.5GB|
| 7B| 4.4GB| 5.5 GB | 5.5 GB 7.0GB| 13GB|
| 13B | 13B 7.9 GB | 7.9 GB 10GB| 13GB| 22GB|
| 27B | 27B 17GB| 20GB| 25GB| 40+ GB |

---

## 2.Ollama環境變量

### 重要配置

```bash
# Số request xử lý song song (default: 1)
export OLLAMA_NUM_PARALLEL=2

# Số model giữ trong RAM cùng lúc (default: 1)
export OLLAMA_MAX_LOADED_MODELS=2

# Context window tối đa (default: 2048)
export OLLAMA_NUM_CTX=4096

# Thời gian giữ model trong RAM (default: 5m)
export OLLAMA_KEEP_ALIVE=10m

# Bind address (default: 127.0.0.1:11434)
export OLLAMA_HOST=0.0.0.0:11434

# Thư mục lưu model
export OLLAMA_MODELS=~/.ollama/models

# Flash attention (nhanh hơn)
export OLLAMA_FLASH_ATTENTION=1

# Max queue size
export OLLAMA_MAX_QUEUE=512
```

### 設定永久 (macOS)

建立文件 `~/.zshrc` 或添加：

```bash
# Ollama optimization
export OLLAMA_NUM_PARALLEL=2
export OLLAMA_FLASH_ATTENTION=1
export OLLAMA_NUM_CTX=4096
export OLLAMA_KEEP_ALIVE=10m
```

或使用 launchd plist （對於 Ollama 應用程式）：

```bash
# Tạo file override
cat > ~/Library/LaunchAgents/com.ollama.env.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.ollama.env</string>
    <key>ProgramArguments</key>
    <array>
        <string>launchctl</string>
        <string>setenv</string>
        <string>OLLAMA_NUM_PARALLEL</string>
        <string>2</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
EOF
```

---

## 3.根據MacBook配置進行最佳化

### MacBook Air/Pro 8GB 內存

```bash
export OLLAMA_NUM_PARALLEL=1
export OLLAMA_MAX_LOADED_MODELS=1
export OLLAMA_NUM_CTX=2048
export OLLAMA_KEEP_ALIVE=3m
export OLLAMA_FLASH_ATTENTION=1
```

**建議型號：**

- `llama3.2:1b` — 快速、輕便
- `gemma3:4b` — 平衡質量/速度
- `qwen2.5-coder:1.5b` — 程式碼生成
- `phi4-mini` — 輕推理

### MacBook Pro 16GB 內存

```bash
export OLLAMA_NUM_PARALLEL=2
export OLLAMA_MAX_LOADED_MODELS=2
export OLLAMA_NUM_CTX=4096
export OLLAMA_KEEP_ALIVE=10m
export OLLAMA_FLASH_ATTENTION=1
```

**建議型號：**

- `llama3.2:3b` — 通用
- `gemma3:12b` — 高品質
- `qwen2.5-coder:7b` — 良好的程式碼生成
- `deepseek-r1:7b` — 推理

### MacBook Pro 24-36GB 內存

```bash
export OLLAMA_NUM_PARALLEL=4
export OLLAMA_MAX_LOADED_MODELS=3
export OLLAMA_NUM_CTX=8192
export OLLAMA_KEEP_ALIVE=30m
export OLLAMA_FLASH_ATTENTION=1
```

**建議型號：**

- `llama3.3:70b` (Q4) — 40 GB，需要 48GB+ RAM
- `gemma3:27b` — 非常強
- `qwen2.5-coder:14b` — 代碼專家
- `command-r:35b` — 專用 RAG

### Mac Studio/Pro 64GB+ 內存

```bash
export OLLAMA_NUM_PARALLEL=8
export OLLAMA_MAX_LOADED_MODELS=4
export OLLAMA_NUM_CTX=16384
export OLLAMA_KEEP_ALIVE=1h
export OLLAMA_FLASH_ATTENTION=1
```

---

## 4. 上下文視窗 & num_ctx

### 什麼是上下文視窗？

上下文視窗=模型的短期記憶。每個訊息（系統+使用者+助手）都必須位於上下文視窗中。

```python
import ollama

# Set context window per request
response = ollama.chat(
    model='llama3.2',
    messages=[{'role': 'user', 'content': 'Hello'}],
    options={
        'num_ctx': 4096,       # Context window
        'num_predict': 512,    # Max tokens to generate
    }
)
```

### 權衡

| num_ctx |額外 RAM（7B 型號）|速度|使用案例 |
|--------|--------------------|--------|----------|
| 2048 | 2048 +0 GB |最快|短聊|
| 4096 | +0.5 GB |快|休閒聊天|
| 8192 | +1.5 GB |平均 |文獻分析|
| 16384 | +3.5 GB |慢一點 |長文檔 |
| 32768 | +8GB |慢| RAG，書籍分析|

### 自動調整上下文

```python
import ollama
import psutil

def get_optimal_ctx():
    """Tự động chọn context window dựa trên RAM available."""
    available_gb = psutil.virtual_memory().available / (1024**3)

    if available_gb > 24:
        return 16384
    elif available_gb > 12:
        return 8192
    elif available_gb > 6:
        return 4096
    else:
        return 2048

ctx = get_optimal_ctx()
print(f"Setting num_ctx = {ctx}")
```

---

## 5. 並行和並行請求

### OLLAMA_NUM_PARALLEL

控制**一個模型**同時處理的請求數。

```bash
# 1 request/lần (default) - ít RAM nhất
export OLLAMA_NUM_PARALLEL=1

# 2 request/lần - cần thêm ~1.5x KV cache RAM
export OLLAMA_NUM_PARALLEL=2

# 4 request/lần - cần thêm ~3x KV cache RAM
export OLLAMA_NUM_PARALLEL=4
```

### 測試並發

```python
import ollama
import concurrent.futures
import time

def chat(prompt):
    start = time.time()
    response = ollama.chat(
        model='llama3.2:3b',
        messages=[{'role': 'user', 'content': prompt}],
        options={'num_predict': 100}
    )
    elapsed = time.time() - start
    return elapsed

prompts = [
    "Giải thích Docker bằng 3 câu",
    "Python list comprehension là gì?",
    "REST vs GraphQL khác nhau thế nào?",
    "Git rebase vs merge: khi nào dùng?",
]

# Sequential
print("=== Sequential ===")
total_seq = 0
for p in prompts:
    t = chat(p)
    total_seq += t
    print(f"  {t:.1f}s")
print(f"  Total: {total_seq:.1f}s\n")

# Concurrent
print("=== Concurrent ===")
start = time.time()
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
    futures = [executor.submit(chat, p) for p in prompts]
    for f in concurrent.futures.as_completed(futures):
        print(f"  {f.result():.1f}s")
total_conc = time.time() - start
print(f"  Total: {total_conc:.1f}s")

print(f"\nSpeedup: {total_seq/total_conc:.1f}x")
```

---

## 6. 監控與基準測試

### 監控記憶體使用情況

```bash
# Xem Ollama process
ps aux | grep ollama

# Realtime monitoring
top -pid $(pgrep ollama)

# Hoặc dùng htop
brew install htop && htop -p $(pgrep ollama)
```

### GPU 利用率

```bash
# macOS Activity Monitor → GPU History (Window menu)
# Hoặc dùng powermetrics (cần sudo)
sudo powermetrics --samplers gpu_power -i 1000
```

### 基準腳本

```python
#!/usr/bin/env python3
"""Benchmark Ollama models trên Mac."""

import ollama
import time
import json

def benchmark_model(model, prompt, num_ctx=2048, num_predict=256):
    start = time.time()
    response = ollama.chat(
        model=model,
        messages=[{'role': 'user', 'content': prompt}],
        options={
            'num_ctx': num_ctx,
            'num_predict': num_predict,
        }
    )
    elapsed = time.time() - start

    content = response['message']['content']
    tokens = len(content.split())  # Rough estimate
    tps = tokens / elapsed if elapsed > 0 else 0

    return {
        'model': model,
        'time': round(elapsed, 2),
        'tokens': tokens,
        'tokens_per_sec': round(tps, 1),
        'num_ctx': num_ctx,
    }

# Run benchmarks
models = ['llama3.2:1b', 'llama3.2:3b', 'gemma3:4b']
prompt = "Write a Python function to sort a list using quicksort algorithm. Include docstring and comments."

print("🏁 Benchmarking Ollama models...\n")
results = []
for model in models:
    print(f"  Testing {model}...")
    try:
        result = benchmark_model(model, prompt)
        results.append(result)
        print(f"  ✅ {result['time']}s, ~{result['tokens_per_sec']} tok/s")
    except Exception as e:
        print(f"  ❌ Error: {e}")

print("\n📊 Results:")
print(f"{'Model':<20} {'Time (s)':<10} {'Tokens':<10} {'Tok/s':<10}")
print("-" * 50)
for r in results:
    print(f"{r['model']:<20} {r['time']:<10} {r['tokens']:<10} {r['tokens_per_sec']:<10}")
```

---

## 7. 進階優化技巧

### 閃光注意

```bash
export OLLAMA_FLASH_ATTENTION=1
```

減少 KV 快取的記憶體佔用，當上下文較長時，速度提高約 10-20%。

### 保活管理

```bash
# Giữ model trong RAM lâu hơn (tránh reload)
export OLLAMA_KEEP_ALIVE=30m

# Luôn giữ (không tự unload)
export OLLAMA_KEEP_ALIVE=-1

# Unload ngay sau response (tiết kiệm RAM nhất)
export OLLAMA_KEEP_ALIVE=0
```

或根據請求：

```python
response = ollama.chat(
    model='llama3.2',
    messages=[{'role': 'user', 'content': 'Hi'}],
    keep_alive='30m'
)
```

### 手動卸載模型

```python
# Unload model khỏi RAM ngay lập tức
ollama.chat(model='llama3.2', messages=[], keep_alive=0)
```

### 需要時使用較低的量化

```bash
# Q8 — chất lượng cao nhất, tốn RAM nhất
ollama pull llama3.2:3b-instruct-q8_0

# Q4_K_M — balance (default)
ollama pull llama3.2:3b

# Q2_K — nhỏ nhất, chất lượng thấp hơn
# Tạo Modelfile custom với quantization thấp
```

### 交換與記憶體壓力

```bash
# Check memory pressure
memory_pressure

# Xem swap usage
sysctl vm.swapusage

# Nếu quá nhiều swap → giảm model size hoặc num_ctx
```

---

## 建議配置總結

|記憶體 |最大型號 | num_ctx |並行數 |最大負載|
|-----|----------|---------|-------------|------------|
| 8GB| 3B（第四季）| 2048 | 2048 1 | 1 |
| 16GB| 7B（第四季）| 4096 | 2 | 2 |
| 24GB| 13B（第四季）| 8192 | 2 | 2 |
| 36GB| 27B（第四季）| 8192 | 4 | 3 |
| 64GB| 70B（第四季）| 16384 | 8 | 4 |

---

## 練習

1.檢查您的MacBook RAM，設定最佳配置
2. 使用上面的腳本對 3 個不同的模型進行基準測試
3.測試並發：比較 OLLAMA_NUM_PARALLEL=1 vs 2 vs 4
4. 使用 Activity Monitor 執行模型時監控 GPU 使用率
5.（獎勵）編寫腳本以根據可用 RAM 自動選擇模型/配置

**下一篇文章**：模型檔 — 自訂模型與系統提示 →
