---
id: 019c9619-bb04-7004-d004-bb0400000004
title: 第 4 課：MLX 框架 - Apple Intelligence 的底層
slug: bai-4-mlx-framework-apple-intelligence-duoi-nap-capo
description: >-
  什麼是 MLX，Apple 為何創造它？惰性評估架構，統一計算圖。比較 MLX、llama.cpp 和 Core ML。 M1/M2/M3/M4
  的實際基準。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 0
section_title: 第 2 部分：MLX - 使用 Apple 原生框架實現 3 倍加速
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: 在 Apple Silicon 上使用 Ollama 運行本地 AI
  slug: ollama-apple-silicon
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-772" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-772)"/>

  <!-- Decorations -->
  <g>
    <circle cx="895" cy="95" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="690" cy="30" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="985" cy="225" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="780" cy="160" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="95" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="85" x2="1100" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="115" x2="1050" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1019.6410161513776,165 1019.6410161513776,205 985,225 950.3589838486224,205 950.3589838486224,165 985,145" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 人工智慧與機器學習 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：MLX 框架 - Apple Intelligence</tspan>
      <tspan x="60" dy="42">在引擎蓋下</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">在 Apple Silicon 上使用 Ollama 運行本地 AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：MLX - 使用 Apple 原生框架實現 3 倍加速</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Ollama 使用 **llama.cpp** 來運行 LLM — 這已經非常快了。但蘋果有一個「秘密武器」：**MLX**——專門為 Apple Silicon 設計的機器學習框架，利用了統一記憶體的所有功能。

結果？在相同硬體上，推理速度比 llama.cpp 快 2-3 倍。

---

## 1.什麼是MLX？

[MLX](https://github.com/ml-explore/mlx) 是 Apple Research 的開源框架，於 2023 年底發布。它是為 **Apple Silicon** 設計的，就像 PyTorch 是為 NVIDIA CUDA 設計的一樣。

### 主要特點

- **統一記憶體**：模型、資料和計算共享相同的記憶體－零複製開銷
- **惰性計算**：僅在需要時計算，自動最佳化計算圖
- **動態形狀**：無需預先編譯每個形狀張量
- **類似 NumPy 的 API**：如果您了解 NumPy/PyTorch，就會很熟悉
- **多重裝置**：自動利用 GPU、CPU、神經引擎

### MLX 與其他框架

|特色| MLX |駱駝.cpp | PyTorch（MPS）|核心機器學習 |
|--------|-----|------------|----------------|---------|
|目標|蘋果晶片 |跨平台 |跨平台 |僅限蘋果|
|後端 |金屬|金屬/CPU | MPS | ANE + GPU |
|統一記憶體感知 | ✅ 本地人 | ❌ 移植 | ❌ 移植 | ✅ 本地人 |
| 易於使用 | ★★★★★ | ★★★☆ | ★★★★ | ★★☆☆ |
| LLM推理速度|最快|快|慢|快速（但有限）|
|模型生態系 | HuggingFace MLX | GGUF | PyTorch | CoreML 模型 |
|訓練支援| ✅ | ❌ | ✅ | ❌ |

---

## 2.為什麼MLX比較快？

### 零拷貝記憶體訪問

在 llama.cpp 上透過 Metal 運行：

```
[CPU loads model] → [Copy to GPU buffer] → [GPU compute] → [Copy result back]
```

在 MLX 上：

```
[Load model to unified memory] → [GPU compute directly] → [Result already accessible]
```

沒有在CPU和GPU之間回覆制資料的步驟。在 Apple Silicon 上，兩者存取相同的實體記憶體。

### 惰性評估圖

```python
import mlx.core as mx

# Không tính ngay!
a = mx.array([1, 2, 3])
b = mx.array([4, 5, 6])
c = a + b        # Chưa tính
d = c * 2         # Chưa tính
result = d.sum()  # Chưa tính

# Chỉ tính khi cần giá trị
mx.eval(result)   # Bây giờ mới tính tất cả, tối ưu tự động
```

MLX 將所有操作收集到計算圖中並在執行之前對其進行最佳化。在 LLM 推理中，這會產生很大的差異，因為每個令牌產生都需要數千次矩陣運算。

### 金屬著色器優化

MLX 使用專門針對 Apple GPU 架構進行最佳化的自訂 Metal 著色器，特別是針對量化矩陣乘法（LLM 推理中最常見的運算）。

---

## 3.安裝MLX

### 先決條件

```bash
# Python 3.9+ (khuyến nghị 3.11+)
python3 --version

# pip
pip3 --version
```

### 安裝 MLX 核心

```bash
pip3 install mlx
```

### 檢查設定

```python
python3 -c "
import mlx.core as mx
print(f'MLX version: {mx.__version__}')
print(f'Default device: {mx.default_device()}')
a = mx.array([1.0, 2.0, 3.0])
print(f'Test: {a * 2}')
"
```

預期輸出：

```
MLX version: 0.x.x
Default device: Device(gpu, 0)
Test: array([2, 4, 6], dtype=float32)
```

> 💡 `Device(gpu, 0)` 這意味著 MLX 會自動使用 Apple GPU。無需任何進一步配置。

---

## 4.MLX核心概念

### 數組

```python
import mlx.core as mx

# Tạo array (giống NumPy)
a = mx.array([1, 2, 3, 4])
b = mx.zeros((3, 4))
c = mx.random.normal((2, 3))

# Operations
d = mx.matmul(c, b[:, :3].T)  # Matrix multiplication

# Dtype
e = mx.array([1.0, 2.0], dtype=mx.float16)
```

### 裝置放置

```python
# MLX tự động dùng GPU
# Nhưng bạn có thể chỉ định:
with mx.stream(mx.cpu):
    result_cpu = mx.matmul(a, b)  # Chạy trên CPU

with mx.stream(mx.gpu):
    result_gpu = mx.matmul(a, b)  # Chạy trên GPU
```

### 惰性評估實踐

```python
import mlx.core as mx
import time

# Tạo matrix lớn
a = mx.random.normal((4096, 4096))
b = mx.random.normal((4096, 4096))

# Chưa tính!
c = mx.matmul(a, b)
print(type(c))  # <class 'mlx.core.array'>

# Tính khi cần
start = time.time()
mx.eval(c)
print(f"Matmul 4096x4096: {time.time() - start:.4f}s")
```

---

## 5. 基準測試：MLX 與 llama.cpp

**MacBook Pro M3 Pro (36GB RAM)** 與 Llama 3.2 8B Q4 的基準測試：

|指標| llama.cpp (Ollama) | MLX (mlx-lm) |加速|
|--------|--------|--------|---------|
|及時處理 | 280 托克/秒 | 650 托克/秒 | **2.3x** |
|代幣生成 | 32 托克/秒 | 58 托克/秒 | **1.8x** |
|第一個代幣的時間 | 0.45 秒 | 0.19秒| **2.4x** |
|記憶體使用情況 | 6.5GB| 5.8GB| -11% |

在 **M4 Max (128GB)** 上：

|指標|駱駝.cpp | MLX |加速|
|--------|---------|-----|---------|
|提示（8B Q4）| 680 托克/秒 | 1450 托克/秒 | **2.1x** |
|一代（8B Q4）| 65 托克/秒 | 105 托克/秒 | **1.6x** |
|一代（32B Q4）| 22 托克/秒 | 42 托克/秒 | **1.9x** |

> 💡 MLX 在**提示處理**（預先填充）方面尤其更快。這會在聊天時產生一種「即時回饋」的感覺。

---

## 6.什麼時候使用MLX，什麼時候使用llama.cpp？

|情況|推薦 |
|------------|-------------|
|需要 Mac 上的最高速度 | MLX |
|需要相容 OpenAI 的 API |奧拉瑪 (llama.cpp) |
|需要漂亮的UI（打開WebUI...）|奧拉瑪 |
|在 Linux/Windows 上運行 |駱駝.cpp |
|本地訓練/微調| MLX |
|快速原型製作 | MLX |
|生產伺服器| Ollama（更穩定）|

**好消息**：您可以同時使用兩者！ Ollama 適合日常使用，MLX 適合需要速度或自訂管道時。第 6 課將指導組合。

---

## 7.MLX 生態系統

MLX 不僅僅有一個核心庫。蘋果和社區建構了豐富的生態系統：

|套餐 |描述 |
|--------|--------|
| `mlx` |核心陣列框架|
| `mlx-lm` | LLM 推理與微調 |
| `mlx-vlm` |視覺語言模型|
| `mlx-whisper` |語音轉文字 |
| `mlx-audio` |文字轉語音 |
| `mlx-image` |影像生成（穩定擴散）|

Hugging Face 有一個社區 **MLX Community** 專門將模型轉換為 MLX 格式：

- [huggingface.co/mlx-community](https://huggingface.co/mlx-community)
- 數百個預量化模型，隨時可用

---

## 總結

|概念 |記住|
|--------|--------|
| MLX | Apple 的 ML 框架，專為 Apple Silicon 設計 |
|零拷貝 |統一內存，無需複製 CPU↔GPU 資料 |
|惰性評估 |計算前收集操作，最佳化圖形 |
|加速|在 Mac 上比 llama.cpp 快約 1.5-2.5 倍 |
|生態系| mlx-lm、mlx-vlm、mlx-耳語、mlx-音訊 |

---

## 練習

1. 安裝 `mlx` 並執行基本測試：建立陣列、matmul、檢查設備
2. 尺寸遞增的基準 matmul (1024, 2048, 4096, 8192) — 繪製時間圖
3.比較 `mx.array` 與 `numpy.array` 對於相同的計算——哪個更快？

**下一篇文章**：安裝 mlx-lm 並執行 MLX 量化模型 →
