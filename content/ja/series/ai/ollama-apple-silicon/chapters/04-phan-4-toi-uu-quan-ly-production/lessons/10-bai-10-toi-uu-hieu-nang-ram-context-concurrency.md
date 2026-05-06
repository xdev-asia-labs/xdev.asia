---
id: 019c9619-bb10-7010-d010-bb1000000010
title: 'レッスン 10: パフォーマンスの最適化 - RAM、コンテキスト ウィンドウ、同時実行性'
slug: bai-10-toi-uu-hieu-nang-ram-context-concurrency
description: >-
  OLLAMA_NUM_PARALLEL、OLLAMA_MAX_LOADED_MODELS、コンテキスト ウィンドウと RAM。ベンチマーク、モニタリング、各
  MacBook 構成に最適化。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 4: 最適化、管理、および生産セットアップ'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Apple Silicon で Ollama を使用して AI Local を実行する
  slug: ollama-apple-silicon
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI と ML — レッスン 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: パフォーマンスの最適化 - RAM、コンテキスト</tspan>
      <tspan x="60" dy="42">ウィンドウと同時実行性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Apple Silicon で Ollama を使用して AI Local を実行する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 最適化、管理、および生産セットアップ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

AI をローカルで実行するということは、クラウド プロバイダーではなくリソースを管理することを意味します。この記事では、Ollama が Mac 上で最速で動作するように、RAM、コンテキスト ウィンドウ、同時実行性を最適化する方法について説明します。

---

## 1. Ollama が RAM をどのように使用するかを理解する

### Apple Silicon 上のユニファイド メモリ

Apple Silicon は **ユニファイド メモリ** を使用します。CPU と GPU は同じメモリを共有します。

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

### モデル実行時の RAM の故障

|成分 |説明 |例 (ラマ 3.2 3B Q4) |
|----------|----------|--------------------------|
|モデルの重み |量子化された重み | ～2.0 GB |
| KVキャッシュ |コンテキスト ウィンドウ キャッシュ | ~0.5 ～ 2.0 GB |
| OS のオーバーヘッド | macOS を実行する必要があります | ~3～4 GB |
| Ollama ランタイム |サーバープロセス | ～200MB |

### モデルに必要な RAM を計算します。

推定式:

```
RAM = Model_Size + KV_Cache + OS_Overhead

KV_Cache ≈ (context_length × num_layers × hidden_dim × 2 × 2) / (1024³)
          ≈ (context_length × num_params_billions × 0.05) GB
```

参考表：

|モデル | Q4_K_M |コンテキスト 2K |コンテキスト8K |コンテキスト 32K |
|----------|----------|---------------|-----------|-------------|
| 1B | 0.7GB | 1.2GB | 1.5GB | 3.0GB |
| 3B | 2.0GB | 2.8GB | 3.5GB | 6.5GB |
| 7B | 4.4GB | 5.5GB | 7.0GB | 13GB |
| 13B | 7.9GB | 10GB | 13GB | 22GB |
| 27B | 17GB | 20GB | 25GB | 40GB以上 |

---

## 2. Ollama 環境変数

### 重要な構成

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

### 永続的に設定 (macOS)

ファイルの作成 `~/.zshrc` または次のように追加します。

```bash
# Ollama optimization
export OLLAMA_NUM_PARALLEL=2
export OLLAMA_FLASH_ATTENTION=1
export OLLAMA_NUM_CTX=4096
export OLLAMA_KEEP_ALIVE=10m
```

または、launchd plist (Ollama アプリの場合) を使用します。

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

## 3. MacBook の構成に応じて最適化する

### MacBook Air/Pro 8GB RAM

```bash
export OLLAMA_NUM_PARALLEL=1
export OLLAMA_MAX_LOADED_MODELS=1
export OLLAMA_NUM_CTX=2048
export OLLAMA_KEEP_ALIVE=3m
export OLLAMA_FLASH_ATTENTION=1
```

**推奨モデル:**

- `llama3.2:1b` — 速くて軽い
- `gemma3:4b` — 品質と速度のバランスをとる
- `qwen2.5-coder:1.5b` — コード生成
- `phi4-mini` — 軽い推理

### MacBook Pro 16GB RAM

```bash
export OLLAMA_NUM_PARALLEL=2
export OLLAMA_MAX_LOADED_MODELS=2
export OLLAMA_NUM_CTX=4096
export OLLAMA_KEEP_ALIVE=10m
export OLLAMA_FLASH_ATTENTION=1
```

**推奨モデル:**

- `llama3.2:3b` — 汎用
- `gemma3:12b` — 高品質
- `qwen2.5-coder:7b` — 優れたコード生成
- `deepseek-r1:7b` — 推論

### MacBook Pro 24-36GB RAM

```bash
export OLLAMA_NUM_PARALLEL=4
export OLLAMA_MAX_LOADED_MODELS=3
export OLLAMA_NUM_CTX=8192
export OLLAMA_KEEP_ALIVE=30m
export OLLAMA_FLASH_ATTENTION=1
```

**推奨モデル:**

- `llama3.3:70b` (Q4) — 40 GB、48GB 以上の RAM が必要
- `gemma3:27b` — とても強い
- `qwen2.5-coder:14b` — コードの専門家
- `command-r:35b` — 専用RAG

### Mac Studio/Pro 64GB+ RAM

```bash
export OLLAMA_NUM_PARALLEL=8
export OLLAMA_MAX_LOADED_MODELS=4
export OLLAMA_NUM_CTX=16384
export OLLAMA_KEEP_ALIVE=1h
export OLLAMA_FLASH_ATTENTION=1
```

---

## 4. コンテキストウィンドウと num_ctx

### コンテキストウィンドウとは何ですか?

コンテキスト ウィンドウ = モデルの短期記憶。すべてのメッセージ (システム + ユーザー + アシスタント) はコンテキスト ウィンドウ内に存在する必要があります。

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

### トレードオフ

|数値ctx |追加RAM (7Bモデル) |スピード |使用例 |
|----------|----------|----------|----------|
| 2048年 | +0 GB |最速 |短いチャット |
| 4096 | +0.5GB |速い |カジュアルチャット |
| 8192 | +1.5GB |平均 |文書分析 |
| 16384 | +3.5GB |遅い |長い文書 |
| 32768 | +8 GB |遅い | RAG、書籍分析 |

### コンテキストの自動調整

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

## 5. 同時実行と並列リクエスト

### OLLAMA_NUM_PARALLEL

**1 つのモデル**に対して同時に処理するリクエストの数を制御します。

```bash
# 1 request/lần (default) - ít RAM nhất
export OLLAMA_NUM_PARALLEL=1

# 2 request/lần - cần thêm ~1.5x KV cache RAM
export OLLAMA_NUM_PARALLEL=2

# 4 request/lần - cần thêm ~3x KV cache RAM
export OLLAMA_NUM_PARALLEL=4
```

### 同時実行性のテスト

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

## 6. モニタリングとベンチマーク

### RAM 使用量を監視する

```bash
# Xem Ollama process
ps aux | grep ollama

# Realtime monitoring
top -pid $(pgrep ollama)

# Hoặc dùng htop
brew install htop && htop -p $(pgrep ollama)
```

### GPU 使用率

```bash
# macOS Activity Monitor → GPU History (Window menu)
# Hoặc dùng powermetrics (cần sudo)
sudo powermetrics --samplers gpu_power -i 1000
```

### ベンチマーク スクリプト

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

## 7. 高度な最適化のヒント

### フラッシュアテンション

```bash
export OLLAMA_FLASH_ATTENTION=1
```

KV キャッシュのメモリ フットプリントを削減し、コンテキストが長い場合は最大 10 ～ 20% 高速化します。

### キープアライブ管理

```bash
# Giữ model trong RAM lâu hơn (tránh reload)
export OLLAMA_KEEP_ALIVE=30m

# Luôn giữ (không tự unload)
export OLLAMA_KEEP_ALIVE=-1

# Unload ngay sau response (tiết kiệm RAM nhất)
export OLLAMA_KEEP_ALIVE=0
```

またはリクエストごとに:

```python
response = ollama.chat(
    model='llama3.2',
    messages=[{'role': 'user', 'content': 'Hi'}],
    keep_alive='30m'
)
```

### モデルを手動でアンロードする

```python
# Unload model khỏi RAM ngay lập tức
ollama.chat(model='llama3.2', messages=[], keep_alive=0)
```

### 必要に応じて、より低い量子化を使用します

```bash
# Q8 — chất lượng cao nhất, tốn RAM nhất
ollama pull llama3.2:3b-instruct-q8_0

# Q4_K_M — balance (default)
ollama pull llama3.2:3b

# Q2_K — nhỏ nhất, chất lượng thấp hơn
# Tạo Modelfile custom với quantization thấp
```

### スワップとメモリの負荷

```bash
# Check memory pressure
memory_pressure

# Xem swap usage
sysctl vm.swapusage

# Nếu quá nhiều swap → giảm model size hoặc num_ctx
```

---

## 推奨構成の概要

| RAM |マックスモデル |数値ctx |並列数 |最大ロード |
|-----|----------|----------|---------------|-------------|
| 8GB | 3B (Q4) | 2048年 | 1 | 1 |
| 16GB | 7B (Q4) | 4096 | 2 | 2 |
| 24GB | 13B (Q4) | 8192 | 2 | 2 |
| 36GB | 27B (Q4) | 8192 | 4 | 3 |
| 64GB | 70B (Q4) | 16384 | 8 | 4 |

---

## 演習

1. MacBook RAM を確認し、最適な構成を設定します
2. 上記のスクリプトを使用して 3 つの異なるモデルをベンチマークします。
3. 同時実行性のテスト: OLLAMA_NUM_PARALLEL=1 対 2 対 4 を比較します。
4.アクティビティモニターを使用してモデルを実行する際のGPU使用率を監視する
5. (おまけ) 利用可能な RAM に基づいてモデル/構成を自動的に選択するスクリプトを作成します。

**次の記事**: Modelfiles — カスタム モデルとシステム プロンプト →
