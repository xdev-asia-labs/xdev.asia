---
id: 019d5b01-bb21-7021-c021-bb2100000021
title: 第 21 課：在 Apple Silicon 上使用 Ollama 運行本地 AI — 深入探討
slug: bai-21-ollama-apple-silicon
description: >-
  深入了解在 Apple Silicon 上本地運行 LLM：了解統一內存和 Metal GPU 架構、深入 Ollama 安裝和配置、模型文件調整、GGUF
  量化、在 M1/M2/M3/M4 上對實際代幣進行基準測試、與 MLX 框架進行比較、多棧模型服務、構建完整的本地 AI 開發堆棧。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 20
section_title: 第 6 部分：製作與增強
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7777" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7777)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1056" cy="38" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1012" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="968" cy="130" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="924" cy="46" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="880" cy="222" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="138" x2="1100" y2="218" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="168" x2="1050" y2="238" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1016.5788383248864,171.5 1016.5788383248864,204.5 988,221 959.4211616751136,204.5 959.4211616751135,171.5 988,155" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 20 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 21 課：使用上面的 Ollama 來執行 AI Local</tspan>
      <tspan x="60" dy="42">Apple Silicon — 深入探究</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：製作與增強</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 概述

第 20 課概述如何使用 Ollama、vLLM、TGI 部署 LLM。本文**全面深入**Apple Silicon - 了解**為什麼**它比大多數普通筆記型電腦運行 LLM 更好，如何充分利用硬件，以及在 Mac 上構建生產級本地 AI 堆棧。

**您將學到：**

1. Apple Silicon架構－統一記憶體、Metal GPU、神經引擎
2. Ollama 如何利用 Metal Performance Shaders 進行推理
3. 量化GGUF－為每個晶片選擇正確的格式
4.模型檔案－調整參數、系統提示、模板
5. 對 M1 → M4 上的詳細代幣進行基準測試
6. Apple MLX框架－與Ollama相比
7. 多模型服務與並發推理
8. 建立完整的本地 AI 開發堆疊（RAG + Code Assistant + Embedding）

---

## 1. 為什麼Apple Silicon 的LLM 辦得很好？

### 1.1 統一記憶體架構（UMA）

在普通 PC/筆記型電腦上，CPU 和 GPU 具有獨立的 RAM。在 GPU 上執行 LLM 時，必須**將模型權重從系統 RAM 複製到 VRAM** - 此過程很慢並且受到 PCIe 頻寬（約 32 GB/s PCIe 4.0 x16）的限制。

Apple Silicon 透過**統一記憶體**徹底改變：

```
╔══════════════════════════════════════════════════════════╗
║              Kiến trúc truyền thống (x86)               ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  ┌─────────┐    PCIe 4.0     ┌──────────┐               ║
║  │   CPU   │◄──────────────►│   GPU    │               ║
║  │         │   ~32 GB/s      │          │               ║
║  └────┬────┘                 └────┬─────┘               ║
║       │                           │                      ║
║  ┌────▼────┐                 ┌────▼─────┐               ║
║  │ System  │                 │   VRAM   │               ║
║  │  RAM    │   ← COPY →     │ (riêng)  │               ║
║  │ 32-64GB │                 │ 8-24GB   │               ║
║  └─────────┘                 └──────────┘               ║
║                                                          ║
║  Bottleneck: PCIe bandwidth + VRAM giới hạn             ║
╚══════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════╗
║              Apple Silicon (UMA)                         ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  ┌─────────┐  ┌─────────┐  ┌──────────────┐            ║
║  │   CPU   │  │   GPU   │  │ Neural Engine│            ║
║  │ (P+E)   │  │ (Metal) │  │   (ANE)      │            ║
║  └────┬────┘  └────┬────┘  └──────┬───────┘            ║
║       │             │              │                     ║
║       └─────────────┼──────────────┘                     ║
║                     │                                    ║
║              ┌──────▼──────┐                             ║
║              │  Unified    │                             ║
║              │  Memory     │                             ║
║              │  8-192 GB   │                             ║
║              │             │                             ║
║              │ ~200-800    │                             ║
║              │  GB/s       │                             ║
║              └─────────────┘                             ║
║                                                          ║
║  Không cần copy! CPU/GPU/ANE truy cập cùng memory pool  ║
╚══════════════════════════════════════════════════════════╝
```

**實際意義：**

- Mac 16GB RAM = 16GB 型號（沒有單獨的 CPU/GPU 分割）
- 透過 PCIe 複製資料無開銷
- 非常高的記憶體頻寬－推理速度的決定因素

### 1.2 記憶體頻寬－決定速度的因素

LLM 推理（尤其是自回歸解碼）受到 **記憶體頻寬** 的限制，而不是計算。原因：每個產生的token都需要讀取整個模型權重一次。

```
Công thức ước tính tokens/s:

  tokens/s ≈ Memory_Bandwidth(GB/s) / Model_Size(GB)

Ví dụ: M2 Pro (200 GB/s) chạy Llama 3.2 3B (Q4_K_M ≈ 2.0 GB):
  → 200 / 2.0 ≈ 100 tokens/s (lý thuyết)
  → Thực tế: ~70-80 tokens/s (overhead KV cache, OS, ...)
```

**Apple Silicon 記憶體頻寬板：**

|晶片|記憶體頻寬 |與 RTX 4090（1008 GB/秒）比較 |
|---|---|---|
| **M1** | 68.25 GB/秒 | 6.8% |
| **M1 Pro** | 200 GB/秒 | 19.8% |
| **M1 最大** | 400 GB/秒 | 39.7% |
| **M1 超** | 800 GB/秒 | 79.4% |
| **M2** | 100 GB/秒 | 9.9% |
| **M2 Pro** | 200 GB/秒 | 19.8% |
| **M2 最大** | 400 GB/秒 | 39.7% |
| **M2 超** | 800 GB/秒 | 79.4% |
| **M3** | 100 GB/秒 | 9.9% |
| **M3 Pro** | 150 GB/秒 | 14.9% |
| **M3 最大** | 400 GB/秒 | 39.7% |
| **M4** | 120 GB/秒 | 11.9% |
| **M4 Pro** | 273 GB/秒 | 27.1% |
| **M4 最大** | 546 GB/秒 | 54.2% |

> RTX 4090 具有更高的頻寬，但只有 24GB VRAM。 Mac M4 Max 可以擁有高達 128GB 的​​統一內存，足以運行桌面 GPU 無法運行的 70B 型號。

### 1.3 Metal GPU 與運算管道

Ollama 使用下面的 **llama.cpp**，並且 llama.cpp 支援 Apple **Metal** — Apple 的 GPU 計算框架。在 Apple Silicon 上運行時：

```
Request → Ollama Server → llama.cpp → Metal Backend
                                          │
                                    ┌─────▼─────┐
                                    │ Metal      │
                                    │ Performance│
                                    │ Shaders    │
                                    │            │
                                    │ • MatMul   │
                                    │ • Softmax  │
                                    │ • RoPE     │
                                    │ • RMS Norm │
                                    │ • GELU     │
                                    └────────────┘
                                          │
                                    ┌─────▼─────┐
                                    │ Apple GPU  │
                                    │ Cores      │
                                    │ (10-40)    │
                                    └────────────┘
```

所有張量運算（矩陣乘法、注意力、歸一化）都透過 Metal 在 **GPU 核心上運行，而不是在 CPU 上運行。這就是 Mac 運行 LLM 比純 x86 CPU 筆記型電腦快得多的原因。

檢查 Ollama 是否使用 Metal：

```bash
# Xem log khi load model
OLLAMA_DEBUG=1 ollama run llama3.2:3b

# Tìm dòng này trong log:
# ggml_metal_init: allocating
# ggml_metal_init: found device: Apple M2 Pro
# ggml_metal_init: recommendedMaxWorkingSetSize = 22906.50 MB
```

### 1.4 神經引擎 (ANE) — 未開發

Apple Silicon 擁有**神經引擎** (ANE) — 16-38 TOPS，專為 ML 推理而設計。然而，目前大多數 LLM 框架（Ollama、llama.cpp、MLX）**不使用 ANE** 進行文字生成，因為：

- ANE 針對批次（影像分類、視覺）進行了最佳化
- LLM 自回歸解碼每步驟產生 1 個令牌 — 不適合 ANE
- 缺乏營運商對新 Transformer 架構的支持

> 這就是為什麼您在運行 Ollama 時看到 GPU 使用率很高，但 ANE 幾乎空閒的原因。

---

## 2. 在 macOS 上安裝 Ollama — 深入配置

### 2.1 安裝

```bash
# Cách 1: Homebrew
brew install ollama

# Cách 2: Download app từ ollama.com (có GUI status icon)
# → khuyên dùng cho người mới

# Kiểm tra
ollama --version
# ollama version is 0.6.x
```

### 2.2 透過環境變數進行配置

Ollama 有許多環境變數需要調整 - 大多數使用者都會忽略：

```bash
# Tạo file cấu hình cho launchd (persistent sau reboot)
cat > ~/Library/LaunchAgents/com.ollama.env.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.ollama.env</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/bin/true</string>
  </array>
  <key>EnvironmentVariables</key>
  <dict>
    <key>OLLAMA_HOST</key>
    <string>127.0.0.1:11434</string>
    <key>OLLAMA_NUM_PARALLEL</key>
    <string>2</string>
    <key>OLLAMA_MAX_LOADED_MODELS</key>
    <string>2</string>
    <key>OLLAMA_KEEP_ALIVE</key>
    <string>30m</string>
    <key>OLLAMA_FLASH_ATTENTION</key>
    <string>1</string>
  </dict>
</dict>
</plist>
EOF
```

或更簡單——在 shell 中設定：

```bash
# Thêm vào ~/.zshrc
export OLLAMA_HOST="127.0.0.1:11434"   # Bind address (default: 127.0.0.1)
export OLLAMA_NUM_PARALLEL=2            # Concurrent requests per model
export OLLAMA_MAX_LOADED_MODELS=2       # Số model giữ trong memory cùng lúc
export OLLAMA_KEEP_ALIVE="30m"          # Giữ model trong RAM bao lâu sau request cuối
export OLLAMA_FLASH_ATTENTION=1         # Bật Flash Attention (tiết kiệm memory)
export OLLAMA_MODELS="$HOME/.ollama/models"  # Thư mục lưu models
```

**詳細說明：**

|變數|預設 |意義|
|---|---|---|
| `OLLAMA_NUM_PARALLEL` | 1 |在 1 個模型上並行處理的請求數。增加=使用更多RAM用於KV快取|
| `OLLAMA_MAX_LOADED_MODELS` | 1 |型號同時加載。 M1 8GB應設定為1，M4 Max 64GB可設定為3-4 |
| `OLLAMA_KEEP_ALIVE` | 5m|閒置一段時間後，卸載模型。設定“0”=立即卸載，“-1”=永久保留 |
| `OLLAMA_FLASH_ATTENTION` | 0 | Flash Attention 將 KV 快取的記憶體使用量減少了約 50%。 **應在 Apple Silicon 上啟用** |

### 2.3 檢查 Metal GPU 是否運作

```bash
# Chạy model với debug log
OLLAMA_DEBUG=1 ollama run llama3.2:3b 2>&1 | head -30

# Kết quả mong đợi:
# ggml_metal_init: allocating
# ggml_metal_init: found device: Apple M2 Pro
# ggml_metal_init: recommendedMaxWorkingSetSize = 22906.50 MB
# ggml_metal_init: hasUnifiedMemory = true
# ...
# llm_load_tensors: offloading 32 repeating layers to GPU
# llm_load_tensors: offloaded 32/33 layers to GPU
```

如果你看到 `offloaded X/Y layers to GPU` X = Y 或接近 Y → 模型完全在 Metal GPU 上運作。

---

## 3. 量化 GGUF — 為 Apple Silicon 選擇正確的格式

### 3.1 什麼是GGUF？

GGUF（GPT 產生的統一格式）是 llama.cpp 的模型格式 - Ollama 在底層使用的運行時。當你 `ollama pull llama3.2:3b`，Ollama 下載預先量化的 GGUF 檔案。

### 3.2 量化級別

```
┌─────────────────────────────────────────────────────────────────┐
│              Quantization Levels — Chất lượng vs Kích thước     │
├──────────┬──────────┬────────────┬──────────────────────────────┤
│ Format   │ Bits/w   │ Size (7B)  │ Ghi chú                      │
├──────────┼──────────┼────────────┼──────────────────────────────┤
│ F16      │ 16       │ ~14 GB     │ Full precision, chậm         │
│ Q8_0     │ 8        │ ~7.5 GB    │ Gần như không mất chất lượng │
│ Q6_K     │ 6        │ ~5.5 GB    │ Rất tốt, khó phân biệt F16  │
│ Q5_K_M   │ 5        │ ~4.8 GB    │ Sweet spot cho 16GB RAM      │
│ Q4_K_M   │ 4        │ ~4.1 GB    │ ★ Khuyên dùng — cân bằng    │
│ Q4_K_S   │ 4        │ ~3.9 GB    │ Nhỏ hơn Q4_K_M một chút     │
│ Q3_K_M   │ 3        │ ~3.3 GB    │ Bắt đầu giảm chất lượng     │
│ Q2_K     │ 2        │ ~2.7 GB    │ Chất lượng kém, chỉ để test  │
│ IQ4_XS   │ ~4       │ ~3.8 GB    │ i-quant, tốt hơn Q4 cùng    │
│          │          │            │ kích thước                    │
│ IQ3_XXS  │ ~3       │ ~2.9 GB    │ i-quant, tốt hơn Q3 cùng    │
│          │          │            │ kích thước                    │
└──────────┴──────────┴────────────┴──────────────────────────────┘

★ Khuyên dùng trên Apple Silicon:
  - 8GB RAM  → Q4_K_M (model 3B-7B)
  - 16GB RAM → Q4_K_M hoặc Q5_K_M (model 7B-14B)
  - 32GB RAM → Q5_K_M hoặc Q6_K (model 14B-32B)
  - 64GB+    → Q6_K hoặc Q8_0 (model 32B-70B)
```

### 3.3 Apple Silicon 上的 K 量子與 I 量子

**K-quants** (Q4_K_M, Q5_K_M, ...)：使用 k-means 聚類方法。在 Metal GPU 上速度很快。

**I-quants**（IQ4_XS、IQ3_XXS、...）：重要性加權量化。相同尺寸下品質較好，但 **Metal 速度較慢**，因為需要複雜的查找表。

```
Benchmark: Llama 3.1 8B trên M3 Pro 18GB

Format      Size    tokens/s    Perplexity (thấp = tốt)
Q8_0        8.5 GB  28 t/s      5.82
Q6_K        6.6 GB  34 t/s      5.84
Q5_K_M      5.7 GB  38 t/s      5.89
Q4_K_M      4.9 GB  42 t/s      5.98     ← sweet spot
IQ4_XS      4.5 GB  36 t/s      5.95     ← tốt hơn Q4 nhưng chậm hơn trên Metal
Q3_K_M      3.9 GB  45 t/s      6.18     ← bắt đầu thấy chất lượng giảm
Q2_K        3.2 GB  48 t/s      6.95     ← chất lượng kém rõ rệt
```

> **結論：** 在 Apple Silicon 上，**Q4_K_M** 是最佳選擇。如果您有額外的 RAM，請升級到 Q5_K_M 或 Q6_K。

### 3.4 載入具有特定量化的模型

```bash
# Ollama thường dùng Q4_K_M mặc định
ollama pull llama3.2

# Muốn dùng GGUF cụ thể từ HuggingFace? → Tạo Modelfile
# (xem phần 4)
```

---

## 4. 模型檔案 — 調整與自訂

Modelfile 是 Ollama 允許您自訂模型的方式——有點像 `Dockerfile` 對於容器。

### 4.1 模型檔案結構

```dockerfile
# Modelfile cho coding assistant tiếng Việt
FROM qwen2.5-coder:7b

# Parameters — ảnh hưởng trực tiếp đến chất lượng output
PARAMETER temperature 0.3
PARAMETER top_p 0.9
PARAMETER top_k 40
PARAMETER repeat_penalty 1.1
PARAMETER num_ctx 8192
PARAMETER num_predict 2048
PARAMETER stop "<|im_end|>"
PARAMETER stop "<|endoftext|>"

# System prompt
SYSTEM """Bạn là senior software engineer chuyên viết code clean, có comment tiếng Việt.
Quy tắc:
1. Luôn giải thích approach trước khi viết code
2. Code phải production-ready — có error handling, logging
3. Dùng TypeScript strict mode khi được hỏi về JS/TS
4. Trả lời bằng tiếng Việt, thuật ngữ kỹ thuật giữ nguyên tiếng Anh
"""

# Template — Jinja2
TEMPLATE """{{ if .System }}<|im_start|>system
{{ .System }}<|im_end|>
{{ end }}{{ if .Prompt }}<|im_start|>user
{{ .Prompt }}<|im_end|>
{{ end }}<|im_start|>assistant
{{ .Response }}<|im_end|>
"""
```

### 4.2 Apple Silicon參數說明

```
┌──────────────┬─────────┬────────────────────────────────────────┐
│ Parameter    │ Default │ Ý nghĩa và tuning tips                 │
├──────────────┼─────────┼────────────────────────────────────────┤
│ num_ctx      │ 2048    │ Context window. Tăng = dùng nhiều RAM  │
│              │         │ cho KV cache. Trên 8GB RAM, giữ ≤ 4096 │
│              │         │ Trên 16GB+, có thể tăng lên 8192-16384 │
├──────────────┼─────────┼────────────────────────────────────────┤
│ num_predict  │ -1      │ Max tokens sinh ra. -1 = unlimited     │
│              │         │ Set giới hạn để tránh response quá dài │
├──────────────┼─────────┼────────────────────────────────────────┤
│ num_gpu      │ auto    │ Số GPU layers offload. Trên Apple      │
│              │         │ Silicon nên để auto hoặc 999 (all GPU) │
├──────────────┼─────────┼────────────────────────────────────────┤
│ num_thread   │ auto    │ CPU threads cho operations không chạy  │
│              │         │ trên GPU. Để auto trên Apple Silicon   │
├──────────────┼─────────┼────────────────────────────────────────┤
│ temperature  │ 0.8     │ 0.0 = deterministic, 1.0+ = creative  │
│              │         │ Code: 0.1-0.3 / Chat: 0.7-0.9         │
├──────────────┼─────────┼────────────────────────────────────────┤
│ repeat_penalty│ 1.1    │ Phạt token lặp lại. Tăng nếu model    │
│              │         │ hay repeat. 1.0 = không phạt           │
└──────────────┴─────────┴────────────────────────────────────────┘
```

### 4.3 建立並使用自訂模型

```bash
# Lưu Modelfile ở trên vào file
vim ~/Modelfiles/vn-coder

# Build model
ollama create vn-coder -f ~/Modelfiles/vn-coder

# Chạy
ollama run vn-coder
>>> Viết API endpoint đăng ký user bằng Hono + Drizzle ORM
```

### 4.4 從 HuggingFace 導入 GGUF

當您想要使用 Ollama 註冊表中不可用的模型/量化時：

```bash
# Download GGUF từ HuggingFace
pip install huggingface-hub
huggingface-cli download bartowski/Qwen2.5-14B-Instruct-GGUF \
  --include "Qwen2.5-14B-Instruct-Q5_K_M.gguf" \
  --local-dir ~/models/

# Tạo Modelfile trỏ đến GGUF
cat > ~/Modelfiles/qwen14b-q5 << 'EOF'
FROM ~/models/Qwen2.5-14B-Instruct-Q5_K_M.gguf

PARAMETER num_ctx 8192
PARAMETER temperature 0.7

TEMPLATE """{{ if .System }}<|im_start|>system
{{ .System }}<|im_end|>
{{ end }}{{ if .Prompt }}<|im_start|>user
{{ .Prompt }}<|im_end|>
{{ end }}<|im_start|>assistant
{{ .Response }}<|im_end|>
"""
EOF

# Build
ollama create qwen14b-q5 -f ~/Modelfiles/qwen14b-q5

# Chạy
ollama run qwen14b-q5
```

---

## 5. Apple Silicon 的詳細基準測試

### 5.1 腳本基準令牌/秒

Ollama 在以下情況下返回指標作為回應 `stream: false`:

```python
#!/usr/bin/env python3
"""benchmark_ollama.py — Benchmark Ollama trên Apple Silicon"""

import json
import time
import subprocess
import requests

OLLAMA_URL = "http://localhost:11434"

PROMPTS = {
    "short": "Giải thích Docker là gì trong 3 câu.",
    "medium": "Viết hàm Python merge sort với type hints, docstring và unit tests đầy đủ.",
    "long": "Thiết kế kiến trúc hệ thống e-commerce với microservices: API Gateway, "
            "User Service, Product Service, Order Service, Payment Service. Vẽ ASCII "
            "diagram, giải thích communication patterns, database choices, và deployment strategy.",
}

def benchmark_model(model: str, prompt_key: str, prompt: str) -> dict:
    """Chạy benchmark 1 model với 1 prompt"""
    start = time.time()

    resp = requests.post(f"{OLLAMA_URL}/api/generate", json={
        "model": model,
        "prompt": prompt,
        "stream": False,
        "options": {"num_ctx": 4096}
    })

    elapsed = time.time() - start
    data = resp.json()

    # Ollama trả về timing chi tiết
    total_duration = data.get("total_duration", 0) / 1e9  # nanoseconds → seconds
    load_duration = data.get("load_duration", 0) / 1e9
    prompt_eval_count = data.get("prompt_eval_count", 0)
    prompt_eval_duration = data.get("prompt_eval_duration", 0) / 1e9
    eval_count = data.get("eval_count", 0)
    eval_duration = data.get("eval_duration", 0) / 1e9

    prompt_tokens_per_sec = prompt_eval_count / prompt_eval_duration if prompt_eval_duration > 0 else 0
    gen_tokens_per_sec = eval_count / eval_duration if eval_duration > 0 else 0

    return {
        "model": model,
        "prompt_type": prompt_key,
        "prompt_tokens": prompt_eval_count,
        "generated_tokens": eval_count,
        "prompt_processing": f"{prompt_tokens_per_sec:.1f} t/s",
        "generation_speed": f"{gen_tokens_per_sec:.1f} t/s",
        "total_time": f"{total_duration:.1f}s",
        "load_time": f"{load_duration:.1f}s",
        "time_to_first_token": f"{prompt_eval_duration:.2f}s",
    }

def get_system_info() -> dict:
    """Lấy thông tin chip và RAM"""
    chip = subprocess.run(
        ["sysctl", "-n", "machdep.cpu.brand_string"],
        capture_output=True, text=True
    ).stdout.strip()

    mem_bytes = int(subprocess.run(
        ["sysctl", "-n", "hw.memsize"],
        capture_output=True, text=True
    ).stdout.strip())

    return {"chip": chip, "ram_gb": mem_bytes / (1024**3)}

if __name__ == "__main__":
    system = get_system_info()
    print(f"\n{'='*60}")
    print(f"System: {system['chip']}")
    print(f"RAM: {system['ram_gb']:.0f} GB")
    print(f"{'='*60}\n")

    models = ["llama3.2:3b", "qwen2.5:7b"]
    results = []

    for model in models:
        print(f"\n--- Benchmarking: {model} ---")
        # Warm up — load model vào memory
        requests.post(f"{OLLAMA_URL}/api/generate", json={
            "model": model, "prompt": "hi", "stream": False
        })

        for key, prompt in PROMPTS.items():
            result = benchmark_model(model, key, prompt)
            results.append(result)
            print(f"  [{key:6s}] gen: {result['generation_speed']:>8s} | "
                  f"tokens: {result['generated_tokens']:>4d} | "
                  f"total: {result['total_time']:>6s}")

    print(f"\n{'='*60}")
    print(json.dumps(results, indent=2, ensure_ascii=False))
```

```bash
python3 benchmark_ollama.py
```

### 5.2 參考基準測試結果

以下是 Apple Silicon 晶片上的實際結果（Q4_K_M，num_ctx=4096）：

```
╔═══════════════════════════════════════════════════════════════════════════╗
║         Benchmark: Generation Speed (tokens/s) — Q4_K_M                  ║
╠═════════════════╦═══════════╦════════════╦════════════╦════════════════════╣
║ Chip            ║ 3B model  ║ 7B model   ║ 14B model  ║ 32B model         ║
║                 ║ (Llama    ║ (Qwen2.5   ║ (Qwen2.5   ║ (Qwen2.5          ║
║                 ║  3.2)     ║  7B)       ║  14B)      ║  32B)             ║
╠═════════════════╬═══════════╬════════════╬════════════╬════════════════════╣
║ M1 8GB          ║ 35 t/s    ║ 15 t/s     ║ OOM        ║ OOM               ║
║ M1 Pro 16GB     ║ 55 t/s    ║ 30 t/s     ║ 12 t/s     ║ OOM               ║
║ M1 Max 32GB     ║ 80 t/s    ║ 52 t/s     ║ 28 t/s     ║ 10 t/s            ║
║ M1 Max 64GB     ║ 82 t/s    ║ 55 t/s     ║ 30 t/s     ║ 16 t/s            ║
║ M1 Ultra 128GB  ║ 95 t/s    ║ 75 t/s     ║ 48 t/s     ║ 28 t/s            ║
╠═════════════════╬═══════════╬════════════╬════════════╬════════════════════╣
║ M2 8GB          ║ 42 t/s    ║ 18 t/s     ║ OOM        ║ OOM               ║
║ M2 Pro 16GB     ║ 60 t/s    ║ 35 t/s     ║ 14 t/s     ║ OOM               ║
║ M2 Max 32GB     ║ 85 t/s    ║ 55 t/s     ║ 30 t/s     ║ 12 t/s            ║
║ M2 Max 96GB     ║ 88 t/s    ║ 58 t/s     ║ 32 t/s     ║ 18 t/s            ║
║ M2 Ultra 192GB  ║ 105 t/s   ║ 80 t/s     ║ 52 t/s     ║ 32 t/s            ║
╠═════════════════╬═══════════╬════════════╬════════════╬════════════════════╣
║ M3 8GB          ║ 45 t/s    ║ 20 t/s     ║ OOM        ║ OOM               ║
║ M3 Pro 18GB     ║ 52 t/s    ║ 32 t/s     ║ 15 t/s     ║ OOM               ║
║ M3 Max 36GB     ║ 90 t/s    ║ 58 t/s     ║ 32 t/s     ║ 14 t/s            ║
║ M3 Max 128GB    ║ 92 t/s    ║ 60 t/s     ║ 34 t/s     ║ 18 t/s            ║
╠═════════════════╬═══════════╬════════════╬════════════╬════════════════════╣
║ M4 16GB         ║ 50 t/s    ║ 25 t/s     ║ OOM        ║ OOM               ║
║ M4 Pro 24GB     ║ 72 t/s    ║ 45 t/s     ║ 22 t/s     ║ OOM               ║
║ M4 Max 36GB     ║ 105 t/s   ║ 68 t/s     ║ 38 t/s     ║ 16 t/s            ║
║ M4 Max 64GB     ║ 108 t/s   ║ 70 t/s     ║ 40 t/s     ║ 22 t/s            ║
║ M4 Max 128GB    ║ 110 t/s   ║ 72 t/s     ║ 42 t/s     ║ 25 t/s            ║
╚═════════════════╩═══════════╩════════════╩════════════╩════════════════════╝

OOM = Out of Memory — model không vừa RAM (cần swap, cực chậm)

Ngưỡng "usable" cho interactive chat: ≥ 15 tokens/s
Ngưỡng "comfortable":                 ≥ 30 tokens/s
Ngưỡng "fast":                        ≥ 50 tokens/s
```

### 5.3 根據機器選型矩陣

```
╔═══════════════════════════════════════════════════════════════════╗
║            Bạn có Mac nào? → Dùng model gì?                     ║
╠══════════════╦════════════════════════════════════════════════════╣
║ 8GB RAM      ║ llama3.2:3b, phi3:mini, gemma2:2b                ║
║ (M1/M2/M3/M4)║ → Chat cơ bản, summarization, quick Q&A          ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 16GB RAM     ║ qwen2.5:7b, mistral:7b, llama3.1:8b              ║
║              ║ → Coding, RAG, structured output                  ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 24GB RAM     ║ qwen2.5:14b, phi4:14b                            ║
║              ║ → Chất lượng cao, reasoning tasks                 ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 32-36GB RAM  ║ qwen2.5:32b (Q4), deepseek-coder-v2:16b          ║
║              ║ → Near-GPT-4 quality cho nhiều task               ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 64GB+ RAM    ║ llama3.1:70b (Q4), qwen2.5:72b (Q4)              ║
║              ║ → GPT-4 class, enterprise use cases               ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 128GB+ RAM   ║ llama3.1:70b (Q6/Q8), mixtral 8x22B              ║
║              ║ → Full precision large models                      ║
╚══════════════╩════════════════════════════════════════════════════╝
```

---

## 6. Apple MLX 與 Ollama — 何時使用什麼？

### 6.1 什麼是MLX？

**MLX** 是 Apple 開發的 ML 框架，專門針對 Apple Silicon 進行了最佳化。與透過計算著色器使用 Metal 的 Ollama/llama.cpp 不同，MLX 是針對 UMA **從頭開始設計**的。

```bash
# Cài MLX
pip install mlx mlx-lm

# Chạy model
mlx_lm.generate \
  --model mlx-community/Qwen2.5-7B-Instruct-4bit \
  --prompt "Giải thích Kubernetes" \
  --max-tokens 500

# Hoặc chạy server OpenAI-compatible
mlx_lm.server --model mlx-community/Qwen2.5-7B-Instruct-4bit --port 8080
```

### 6.2 比較 MLX 與 Ollama

```
╔══════════════════╦══════════════════════╦══════════════════════╗
║                  ║ Ollama               ║ MLX                  ║
╠══════════════════╬══════════════════════╬══════════════════════╣
║ Backend          ║ llama.cpp + Metal    ║ MLX (Apple native)   ║
║ Tốc độ           ║ Nhanh                ║ Nhanh hơn 10-20%     ║
║                  ║                      ║ (một số model)       ║
║ Dễ dùng          ║ ★★★★★ (1 lệnh)      ║ ★★★ (cần Python)     ║
║ Model format     ║ GGUF                 ║ SafeTensors (MLX)    ║
║ Model hub        ║ ollama.com library   ║ HuggingFace          ║
║                  ║ (1-click pull)       ║ (mlx-community)      ║
║ Multi-model      ║ ✅ Built-in           ║ ❌ Manual             ║
║ API Server       ║ ✅ OpenAI-compatible  ║ ✅ (mlx_lm.server)   ║
║ Fine-tuning      ║ ❌                    ║ ✅ LoRA/QLoRA         ║
║ Cross-platform   ║ ✅ Mac/Linux/Windows  ║ ❌ Mac only           ║
║ Docker support   ║ ✅                    ║ ❌                    ║
║ Memory efficient ║ Tốt                  ║ Rất tốt (lazy eval)  ║
╚══════════════════╩══════════════════════╩══════════════════════╝
```

### 6.3 何時使用什麼？

- **Ollama**：用於大多數情況。輕鬆設定、內建模型庫、API 伺服器生產就緒、多模型服務。
- **MLX**：當您需要在 Mac 上獲得最大速度時，當您想要在本機微調 LoRA 時，或需要深度整合到 Python 管道中。

### 6.4 使用 MLX 微調 LoRA（僅限 Mac）

```bash
# Cài đặt
pip install mlx-lm

# Chuẩn bị data (JSONL format)
cat > train.jsonl << 'EOF'
{"text": "<|im_start|>user\nDocker là gì?<|im_end|>\n<|im_start|>assistant\nDocker là nền tảng container hóa...<|im_end|>"}
{"text": "<|im_start|>user\nKubernetes là gì?<|im_end|>\n<|im_start|>assistant\nKubernetes là hệ thống orchestration...<|im_end|>"}
EOF

# Fine-tune
mlx_lm.lora \
  --model mlx-community/Qwen2.5-7B-Instruct-4bit \
  --data ./train.jsonl \
  --batch-size 1 \
  --lora-layers 8 \
  --iters 100 \
  --adapter-path ./adapters

# Test model đã fine-tune
mlx_lm.generate \
  --model mlx-community/Qwen2.5-7B-Instruct-4bit \
  --adapter-path ./adapters \
  --prompt "Docker là gì?"

# Merge adapter vào model
mlx_lm.fuse \
  --model mlx-community/Qwen2.5-7B-Instruct-4bit \
  --adapter-path ./adapters \
  --save-path ./my-finetuned-model
```

---

## 7. 多模型服務與同時推理

### 7.1 同時運行多個模型

```bash
# Cấu hình Ollama cho multi-model
export OLLAMA_MAX_LOADED_MODELS=3      # Load tối đa 3 models
export OLLAMA_NUM_PARALLEL=2            # 2 requests song song per model
export OLLAMA_KEEP_ALIVE="1h"           # Giữ model loaded 1 giờ

# Restart Ollama
brew services restart ollama
```

### 7.2 路由器模式 — 依任務選擇模型

```python
#!/usr/bin/env python3
"""model_router.py — Route requests đến model phù hợp"""

from openai import OpenAI
from enum import Enum

client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")

class TaskType(Enum):
    CODE = "code"
    CHAT = "chat"
    ANALYSIS = "analysis"
    EMBEDDING = "embedding"

# Mapping task → model (tuỳ chỉnh theo RAM của bạn)
MODEL_MAP = {
    TaskType.CODE: "qwen2.5-coder:7b",       # Code-optimized
    TaskType.CHAT: "llama3.2:3b",             # Nhẹ, nhanh cho chat
    TaskType.ANALYSIS: "qwen2.5:14b",         # Nặng hơn, cho reasoning
    TaskType.EMBEDDING: "nomic-embed-text",   # Embedding model
}

def classify_task(user_message: str) -> TaskType:
    """Phân loại task đơn giản bằng keyword matching"""
    code_keywords = ["code", "viết", "function", "class", "bug", "error",
                     "implement", "refactor", "API", "endpoint", "SQL"]
    analysis_keywords = ["phân tích", "so sánh", "thiết kế", "kiến trúc",
                         "đánh giá", "review", "explain why", "trade-off"]

    msg_lower = user_message.lower()

    if any(kw.lower() in msg_lower for kw in code_keywords):
        return TaskType.CODE
    if any(kw.lower() in msg_lower for kw in analysis_keywords):
        return TaskType.ANALYSIS
    return TaskType.CHAT

def route_and_generate(user_message: str, task_type: TaskType = None) -> str:
    """Route request đến model phù hợp"""
    if task_type is None:
        task_type = classify_task(user_message)

    model = MODEL_MAP[task_type]
    print(f"[Router] Task: {task_type.value} → Model: {model}")

    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": user_message}],
        temperature=0.3 if task_type == TaskType.CODE else 0.7,
    )
    return response.choices[0].message.content

# Demo
if __name__ == "__main__":
    # Tự động route đến code model
    print(route_and_generate("Viết function Python merge sort"))

    # Tự động route đến analysis model
    print(route_and_generate("Phân tích trade-off giữa SQL và NoSQL"))

    # Tự động route đến chat model (nhẹ, nhanh)
    print(route_and_generate("Hôm nay thời tiết thế nào?"))
```

### 7.3 嵌入 + 聊天管道（RAG 本地）

```python
#!/usr/bin/env python3
"""local_rag.py — RAG hoàn toàn local trên Apple Silicon"""

import json
import numpy as np
from openai import OpenAI

client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")

# ─── 1. Embedding local ────────────────────────────────────────

def get_embedding(text: str) -> list[float]:
    """Lấy embedding từ Ollama (nomic-embed-text)"""
    response = client.embeddings.create(
        model="nomic-embed-text",
        input=text
    )
    return response.data[0].embedding

def cosine_similarity(a: list[float], b: list[float]) -> float:
    a_np, b_np = np.array(a), np.array(b)
    return float(np.dot(a_np, b_np) / (np.linalg.norm(a_np) * np.linalg.norm(b_np)))

# ─── 2. Simple Vector Store ────────────────────────────────────

class LocalVectorStore:
    def __init__(self):
        self.documents: list[dict] = []

    def add(self, text: str, metadata: dict = None):
        embedding = get_embedding(text)
        self.documents.append({
            "text": text,
            "embedding": embedding,
            "metadata": metadata or {}
        })

    def search(self, query: str, top_k: int = 3) -> list[dict]:
        query_embedding = get_embedding(query)
        scored = []
        for doc in self.documents:
            score = cosine_similarity(query_embedding, doc["embedding"])
            scored.append({**doc, "score": score})
        scored.sort(key=lambda x: x["score"], reverse=True)
        return scored[:top_k]

# ─── 3. RAG Pipeline ──────────────────────────────────────────

def rag_query(store: LocalVectorStore, question: str) -> str:
    """Full RAG: retrieve → augment → generate"""
    # Retrieve
    results = store.search(question, top_k=3)
    context = "\n\n".join([
        f"[Nguồn {i+1} — score: {r['score']:.3f}]\n{r['text']}"
        for i, r in enumerate(results)
    ])

    # Generate với context
    response = client.chat.completions.create(
        model="qwen2.5:7b",  # Hoặc model khác tuỳ RAM
        messages=[
            {"role": "system", "content":
                "Trả lời câu hỏi dựa trên context được cung cấp. "
                "Nếu context không đủ thông tin, nói rõ. "
                "Trích dẫn nguồn khi trả lời."},
            {"role": "user", "content":
                f"Context:\n{context}\n\nCâu hỏi: {question}"}
        ],
        temperature=0.3
    )
    return response.choices[0].message.content

# ─── 4. Demo ───────────────────────────────────────────────────

if __name__ == "__main__":
    store = LocalVectorStore()

    # Index documents
    docs = [
        "Docker là platform container hóa giúp đóng gói ứng dụng cùng dependencies "
        "vào container. Container chia sẻ kernel với host OS, nhẹ hơn VM.",
        "Kubernetes (K8s) là hệ thống orchestration cho containers. K8s quản lý "
        "scheduling, scaling, self-healing, service discovery cho containerized apps.",
        "Docker Compose cho phép định nghĩa multi-container application bằng YAML file. "
        "Phù hợp cho development và testing, không nên dùng cho production scale lớn.",
        "Helm là package manager cho Kubernetes. Helm Charts đóng gói K8s manifests "
        "thành reusable packages, dễ versioning và sharing.",
    ]

    print("Indexing documents...")
    for doc in docs:
        store.add(doc)
    print(f"Indexed {len(docs)} documents.\n")

    # Query
    question = "Khi nào nên dùng Docker Compose vs Kubernetes?"
    print(f"Q: {question}\n")
    answer = rag_query(store, question)
    print(f"A: {answer}")
```

```bash
# Cần pull embedding model trước
ollama pull nomic-embed-text
ollama pull qwen2.5:7b

# Chạy
pip install numpy openai
python3 local_rag.py
```

---

## 8. 建立完整的本機 AI 開發堆疊

### 8.1 堆疊概述

```
╔══════════════════════════════════════════════════════════════════╗
║             Local AI Dev Stack trên Apple Silicon               ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │ IDE: VS Code / Cursor / Zed                              │   ║
║  │ + Continue.dev extension (kết nối Ollama)                │   ║
║  └─────────────────────┬────────────────────────────────────┘   ║
║                        │                                         ║
║  ┌─────────────────────▼────────────────────────────────────┐   ║
║  │ Ollama Server (localhost:11434)                           │   ║
║  │                                                           │   ║
║  │  ┌───────────┐  ┌────────────────┐  ┌────────────────┐   │   ║
║  │  │ Chat/Q&A  │  │ Code Assistant │  │ Embedding      │   │   ║
║  │  │ llama3.2  │  │ qwen2.5-coder  │  │ nomic-embed    │   │   ║
║  │  │ :3b       │  │ :7b            │  │ -text          │   │   ║
║  │  └───────────┘  └────────────────┘  └────────────────┘   │   ║
║  └──────────────────────────────────────────────────────────┘   ║
║                        │                                         ║
║  ┌─────────────────────▼────────────────────────────────────┐   ║
║  │ Application Layer                                         │   ║
║  │                                                           │   ║
║  │  • Python scripts (OpenAI SDK → Ollama)                  │   ║
║  │  • Local RAG pipeline (embedding + vector search)         │   ║
║  │  • CLI tools (shell scripts → curl Ollama API)            │   ║
║  │  • Web UI: Open WebUI (Docker)                            │   ║
║  └──────────────────────────────────────────────────────────┘   ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### 8.2 第 1 步：拉取必要的模型

```bash
# Code assistant (ưu tiên nhất)
ollama pull qwen2.5-coder:7b

# General chat
ollama pull llama3.2:3b

# Embedding cho RAG
ollama pull nomic-embed-text

# (Tuỳ chọn) Model lớn hơn nếu có RAM
ollama pull qwen2.5:14b          # 24GB+ RAM
ollama pull deepseek-coder-v2    # 16GB+ RAM

# Kiểm tra
ollama list
```

### 8.3 步驟 2：安裝 VS Code 的Continue.dev

**Continue** 是 VS Code/JetBrains 的擴展，直接連接到 Ollama 以獲得 AI 編碼助手**完全離線**。

```bash
# Cài extension
code --install-extension continue.continue
```

配置 `~/.continue/config.json`:

```json
{
  "models": [
    {
      "title": "Qwen2.5 Coder 7B (Local)",
      "provider": "ollama",
      "model": "qwen2.5-coder:7b",
      "apiBase": "http://localhost:11434"
    },
    {
      "title": "Llama 3.2 3B (Fast)",
      "provider": "ollama",
      "model": "llama3.2:3b",
      "apiBase": "http://localhost:11434"
    }
  ],
  "tabAutocompleteModel": {
    "title": "Qwen2.5 Coder (Autocomplete)",
    "provider": "ollama",
    "model": "qwen2.5-coder:7b",
    "apiBase": "http://localhost:11434"
  },
  "embeddingsProvider": {
    "provider": "ollama",
    "model": "nomic-embed-text",
    "apiBase": "http://localhost:11434"
  }
}
```

安裝後：開啟VS Code → `Cmd+L` 聊天， `Tab` 對於自動完成 - 全部在本地運行。

### 8.4 步驟3：開啟WebUI（類似ChatGPT的本機介面）

```bash
# Chạy Open WebUI kết nối Ollama
docker run -d \
  --name open-webui \
  -p 3000:8080 \
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
  -v open-webui-data:/app/backend/data \
  ghcr.io/open-webui/open-webui:main

# Truy cập http://localhost:3000
# Tạo tài khoản admin (local, không gửi data đi đâu)
```

### 8.5 第 4 步：CLI 幫助程式腳本

```bash
# Thêm vào ~/.zshrc

# Chat nhanh từ terminal
ai() {
  curl -s http://localhost:11434/api/generate \
    -d "{\"model\": \"llama3.2:3b\", \"prompt\": \"$*\", \"stream\": false}" \
    | python3 -c "import sys,json; print(json.load(sys.stdin)['response'])"
}

# Code review từ clipboard
ai-review() {
  local code=$(pbpaste)
  curl -s http://localhost:11434/api/generate \
    -d "{\"model\": \"qwen2.5-coder:7b\", \"prompt\": \"Review code này, chỉ ra bugs và improvements:\\n\\n$code\", \"stream\": false}" \
    | python3 -c "import sys,json; print(json.load(sys.stdin)['response'])"
}

# Giải thích error message
ai-error() {
  curl -s http://localhost:11434/api/generate \
    -d "{\"model\": \"qwen2.5-coder:7b\", \"prompt\": \"Giải thích error này và cách fix:\\n\\n$*\", \"stream\": false}" \
    | python3 -c "import sys,json; print(json.load(sys.stdin)['response'])"
}

# Commit message generator
ai-commit() {
  local diff=$(git diff --staged)
  if [ -z "$diff" ]; then echo "No staged changes"; return 1; fi
  curl -s http://localhost:11434/api/generate \
    -d "{\"model\": \"llama3.2:3b\", \"prompt\": \"Viết conventional commit message (ngắn gọn, tiếng Anh) cho diff này:\\n\\n$diff\", \"stream\": false}" \
    | python3 -c "import sys,json; print(json.load(sys.stdin)['response'])"
}
```

```bash
# Dùng
source ~/.zshrc

ai "Giải thích SOLID principles"
ai-error "TypeError: cannot unpack non-iterable NoneType object"
ai-commit  # Tự generate commit message từ staged changes
```

---

## 9. 監控與分析

### 9.1 監控資源使用狀況

```bash
# Xem model đang loaded và memory usage
ollama ps

# Output:
# NAME              ID           SIZE    PROCESSOR  UNTIL
# qwen2.5:7b       abcd1234     5.3 GB  100% GPU   4 minutes from now
# llama3.2:3b       efgh5678     2.0 GB  100% GPU   4 minutes from now

# Monitor GPU/memory real-time
# Mở Activity Monitor → GPU History (⌘+4)
# Hoặc dùng powermetrics (cần sudo)
sudo powermetrics --samplers gpu_power -i 1000 -n 10
```

### 9.2 檢查模型是否適合 RAM

```
Công thức ước tính RAM cần:

  RAM_needed = Model_Size + KV_Cache + OS_overhead

Trong đó:
  Model_Size  = (params × bits_per_weight) / 8
  KV_Cache    ≈ 2 × num_layers × d_model × num_ctx × 2 bytes
              ≈ Model_Size × (num_ctx / 1000) × 0.05
  OS_overhead ≈ 2-4 GB (macOS + background apps)

Ví dụ: Qwen2.5 7B Q4_K_M, num_ctx = 8192
  Model     ≈ 4.5 GB
  KV_Cache  ≈ 4.5 × 8.192 × 0.05 ≈ 1.8 GB
  OS        ≈ 3 GB
  ─────────────────
  TỔNG      ≈ 9.3 GB → Cần ít nhất 16GB RAM

Nếu bạn dùng Flash Attention (OLLAMA_FLASH_ATTENTION=1):
  KV_Cache giảm ~50% → TỔNG ≈ 8.4 GB → Vẫn tight trên 8GB
```

---

## 10. 進階故障排除

### 10.1 模型載入但運行速度極慢

**症狀：** `ollama ps` 顯示 `PROCESSOR: 50% GPU / 50% CPU` 或 `100% CPU`。

**原因：** 模型不完全適合 GPU 記憶體 → 部分層在 CPU 上運作。

**修復：**
```bash
# Kiểm tra
ollama ps
# Nếu thấy "X% CPU" → model quá lớn

# Giải pháp 1: Dùng model nhỏ hơn
ollama rm qwen2.5:14b
ollama pull qwen2.5:7b

# Giải pháp 2: Giảm context window
# Tạo Modelfile với num_ctx thấp hơn
echo 'FROM qwen2.5:7b
PARAMETER num_ctx 2048' > /tmp/Modelfile
ollama create qwen-small-ctx -f /tmp/Modelfile

# Giải pháp 3: Bật Flash Attention
export OLLAMA_FLASH_ATTENTION=1
brew services restart ollama
```

### 10.2 錯誤 `signal: killed` 或應用程式崩潰

當記憶體不足時，macOS 將終止該進程。檢查Console.app → 查找 `jetsam` 事件。事件。

```bash
# Xem memory pressure
memory_pressure

# Kết quả:
# The system has X free pages (...)
# System-wide memory free percentage: Y%

# Nếu Y < 10% → cần giải phóng RAM
```

### 10.3 Ollama 更新後不接受新模型

```bash
# Clear cache
rm -rf ~/.ollama/tmp/*

# Re-pull model
ollama pull qwen2.5:7b

# Restart service
brew services restart ollama
```

### 10.4 使用外部顯示器時效能下降

某些 Mac（尤其是 M1/M2 底座）在連接外部顯示器時會出現 GPU 節流，因為 GPU 必須渲染整個顯示器。

**修復：** 執行 LLM 密集型任務時關閉 GPU 密集型應用程式（遊戲、影片編輯）。

---

## 11. 運行本地 AI 時的安全性

### 11.1 網路曝光

```bash
# ❌ NGUY HIỂM — expose ra mạng nội bộ / internet
export OLLAMA_HOST="0.0.0.0:11434"

# ✅ AN TOÀN — chỉ bind localhost
export OLLAMA_HOST="127.0.0.1:11434"
```

如果需要遠端存取（例如從本機網路上的另一台電腦）：

```bash
# Dùng SSH tunnel thay vì expose trực tiếp
# Trên máy remote:
ssh -L 11434:localhost:11434 user@mac-server

# Hoặc đặt sau reverse proxy với auth
# (xem bài về Nginx trong series DevSecOps)
```

### 11.2 資料隱私

- 所有提示和回覆**保留在您的電腦上**，不會發送到任何地方
- Ollama **不收集遙測資料**（開源，可測試）
- 記錄文件 `~/.ollama/logs/` — 若包含敏感資料則應隱藏

---

## 總結

|方面|要點 |
|---|---|
| **為什麼 Apple Silicon 很好** |統一記憶體 = 所有 RAM 用於模型、高記憶體頻寬、Metal GPU 加速 |
| **量化** | Q4_K_M 是最佳位置。增加RAM → 增加到Q5_K_M/Q6_K |
| **模型檔案** |為每個用例調整 num_ctx、溫度、系統提示字元 |
| **基準** | M1：35-95噸/秒（3B），M4最大：110噸/秒（3B），70噸/秒（7B）|
| **MLX 與 Ollama** | Ollama 日常使用，MLX 最大速度 + 微調 |
| **多型號** |路由器模式路由任務→正確的模型。 OLLAMA_MAX_LOADED_MODELS > 1 |
| **開發堆疊** | Ollama + Continue.dev + 開啟WebUI = 完整的離線AI IDE |
| **快閃注意** |開啟 OLLAMA_FLASH_ATTENTION=1 → 減少快取 50% |

---

## 練習練習

### 基本

1.安裝Ollama，拉取 `llama3.2:3b` 和 `qwen2.5-coder:7b`。運行 `ollama ps` 確認模型載入 100% GPU。
2.運行腳本 `benchmark_ollama.py` 上面 - 在您的機器上記錄令牌。
3. 為越南語編碼助手建立模型文件，建構並測試。

### 平均

4. 在 VS Code 中設定Continue.dev 擴充功能以連接 Ollama。嘗試自動完成和聊天。
5. 使用 Docker 執行 Open WebUI，連線到 Ollama。與 ChatGPT 比較經驗。
6. 寫一個路由器模型（如第 7.2 節），對至少 4 種任務類型進行分類。

### 高級

7. 建立本地 RAG 管道（第 7.3 節）索引 20+ 文檔，測量準確性。
8. 比較 Ollama 與 MLX 在同一型號（Qwen2.5 7B Q4）上的速度。報告提示處理和產生令牌。
9. 在自行產生的資料集（50+ 個樣本）上使用 MLX 微調 LoRA。比較基本模型與微調模型。
10. 測量同時執行 2-3 個模型時的實際 RAM 使用量。找到適合您裝置的最佳 OLLAMA_MAX_LOADED_MODELS 設定。
