---
id: 019c9619-bb06-7006-d006-bb0600000006
title: 第 6 課：Ollama + MLX 後端 - 結合兩個世界的優點
slug: bai-6-ollama-mlx-backend-ket-hop-tot-nhat-cua-hai-the-gioi
description: 配置 Ollama 以使用 MLX 後端而不是 llama.cpp。詳細的基準。優化上下文視窗。何時使用 MLX 後端，何時使用 llama.cpp。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: 第 2 部分：MLX - 使用 Apple 原生框架實現 3 倍加速
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: 在 Apple Silicon 上使用 Ollama 運行本地 AI
  slug: ollama-apple-silicon
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：Ollama + MLX 後端 - 良好的組合</tspan>
      <tspan x="60" dy="42">兩個世界中最好的</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">在 Apple Silicon 上使用 Ollama 運行本地 AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：MLX - 使用 Apple 原生框架實現 3 倍加速</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

您已經了解 Ollama（方便，擁有大型 API、生態系統）和 MLX（在 Mac 上更快）。自然問題：**兩者可以結合嗎？ **

答：**是**。 Ollama 支援 MLX 後端，讓您可以使用 Ollama 的實用程式（API、模型管理），但使用 MLX 引擎進行推理。

---

## 1. Ollama 中的 MLX 後端

從版本 0.5+ 開始，Ollama 新增了對 macOS 上的 MLX 的支援。您可以匯入 MLX 模型（safetensors 格式），而不是使用 llama.cpp（GGUF 格式），Ollama 將使用 MLX 引擎。

### 它是如何工作的

```
                    ┌─────── Backend ────────┐
User ──► Ollama ──►│ llama.cpp (default)     │──► Response
         API       │ MLX (khi dùng MLX model)│
                    └────────────────────────┘
```

---

## 2. 根據 MLX 權重建立 Ollama 模型

### 第 1 步：下載模型 MLX

```bash
# Dùng huggingface-cli
pip3 install huggingface-hub
huggingface-cli download mlx-community/Llama-3.2-3B-Instruct-4bit \
  --local-dir ./models/llama-3.2-3b-mlx
```

### 第 2 步：建立模型文件

```bash
cat > Modelfile.mlx << 'EOF'
FROM ./models/llama-3.2-3b-mlx

PARAMETER temperature 0.7
PARAMETER top_p 0.9
PARAMETER num_ctx 4096

SYSTEM """Bạn là trợ lý AI thông minh. Trả lời ngắn gọn, chính xác, bằng tiếng Việt."""
EOF
```

### 第 3 步：在 Ollama 中建立模型

```bash
ollama create llama3.2-mlx -f Modelfile.mlx
```

### 第 4 步：運行

```bash
ollama run llama3.2-mlx
```

現在 Ollama 將為該模型使用 MLX 引擎，但您仍然像往常一樣使用 Ollama CLI 和 API。

---

## 3. 比較：相同模型，兩個後端

### 基準腳本

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

### 結果範例（M3 Pro 36GB）

|指標|駱駝.cpp | MLX |加速|
|--------|---------|-----|---------|
|及時處理 | 285 托克/秒 | 640 托克/秒 | 2.2 倍 |
|代幣生成 | 33 托克/秒 | 55 托克/秒 | 1.7 倍 |
|記憶體使用情況 | 6.5GB| 5.8GB| -10% |
| API回應時間| 8.2秒| 4.8秒| 1.7 倍 |

---

## 4. 上下文視窗調整

上下文視窗決定了對話中文字模型「記住」的程度。增加上下文 = 消耗更多 RAM。

### 計算上下文的 RAM

```
KV Cache memory ≈ 2 × n_layers × n_heads × head_dim × context_length × 2 bytes (FP16)
```

Llama 3.2 8B 的上下文長度：

|背景 |新增 KV 快取 |總記憶體 |
|--------|----------------|------------|
| 2048 | 2048 〜0.5 GB | 〜6 GB |
| 4096 | 〜1 GB | 〜6.5 GB |
| 8192 | 〜2 GB | 〜7.5 GB |
| 16384 | 〜4 GB | 〜9.5 GB |
| 32768 | 〜8 GB | 〜13.5 GB |
| 131072 | 131072 〜32 GB | 〜37.5 GB |

### 在模型檔案中設定上下文

```
FROM ./models/llama-3.2-3b-mlx

# Context window
PARAMETER num_ctx 8192

# Giảm context nếu ít RAM
# PARAMETER num_ctx 2048
```

### 在運行時設定上下文

```bash
# Override context khi chạy
ollama run llama3.2-mlx --num-ctx 16384
```

> 💡 **推薦**：從 `4096`，逐漸增加，直到 RAM 耗盡或足以滿足用例。

---

## 5.優化效能

### GPU 利用率

```bash
# Kiểm tra model dùng GPU hay CPU
ollama ps
```

理想輸出： `100% GPU`。如果您看到 CPU，則表示該模型不適合 GPU 可存取記憶體。

### 將模型保存在記憶體中

預設情況下，Ollama 在 5 分鐘空閒時間後卸載模型。改變：

```bash
# Giữ model loaded 30 phút
export OLLAMA_KEEP_ALIVE=30m

# Giữ vĩnh viễn (cho đến khi restart)
export OLLAMA_KEEP_ALIVE=-1
```

或在 API 中：

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2-mlx",
  "keep_alive": -1
}'
```

### 同時運行多個模型

```bash
# Cho phép 3 model cùng lúc
export OLLAMA_MAX_LOADED_MODELS=3

# Chạy song song
export OLLAMA_NUM_PARALLEL=4
```

> ⚠️ 每個型號都佔自己的 RAM。 3 個型號 × 5GB = 15GB。確保有足夠的 RAM 用於 macOS 和其他應用程式。

---

## 6. 監控效能

### 活動監視器

開啟 **Activity Monitor** → **GPU** 選項卡可以看到：

- 推理過程中 GPU 利用率百分比
- GPU 記憶體使用情況

### 終端機監控

```bash
# Xem GPU usage real-time
sudo powermetrics --samplers gpu_power -i 1000

# Xem memory pressure
memory_pressure

# Xem Ollama process
ps aux | grep ollama
```

### 奧拉瑪日誌

```bash
# Xem logs chi tiết
cat ~/.ollama/logs/server.log | tail -50

# Follow logs real-time
tail -f ~/.ollama/logs/server.log
```

---

## 7. 推薦的工作流程

根據實務經驗，最佳工作流程如下：

### 日常使用：Ollama (llama.cpp)

```bash
# Model mặc định cho chat, hỏi đáp
ollama run qwen2.5:14b
```

- 穩定、龐大的生態系（Open WebUI、Continue.dev...）
- 夠快的互動聊天

### 當你需要速度時：Ollama + MLX

```bash
# Model MLX cho tác vụ cần nhanh
ollama run qwen2.5-mlx
```

- 提示處理速度快 2 倍 → 第一顆代幣的時間非常低
- 批量處理多個請求

### 腳本/管道：直接 mlx-lm

```python
from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Qwen2.5-14B-Instruct-4bit")
# Custom pipeline, batch processing, fine-tuning...
```

- 完全控制
- 沒有 Ollama 伺服器開銷

---

## 總結

|方法|優點 |缺點 |何時使用 |
|----------|---|--------|-------------|
|奧拉馬 + llama.cpp |穩定，生態系 |比 MLX 慢 |每日預設 |
|奧拉馬 + MLX |使用 Ollama API 更快 |更複雜的設定 |需要速度+API |
| MLX-LM 直播 |最快、靈活 |沒有API伺服器|腳本、管道 |

---

## 練習

1. 根據第 2 節的說明使用 MLX 後端建立 Ollama 模型
2. 執行基準測試，比較同一模型的兩個後端（llama.cpp 與 MLX）
3. 嘗試增加上下文視窗：2048 → 4096 → 8192。記錄 RAM 使用量增加了多少？
4. 測試 `OLLAMA_KEEP_ALIVE=-1` — 空閒時會影響 RAM 嗎？
5. 建立個人工作流程：為您的 3 個日常用例選擇模型 + 後端

**下一篇**：Ollama REST API →
