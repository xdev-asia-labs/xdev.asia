---
id: 019c9619-bb01-7001-d001-bb0100000001
title: 第 1 課：Apple Silicon 與 AI - 為什麼 M-chip 是本地推理之王
slug: bai-1-apple-silicon-ai-tai-sao-m-chip-la-vua-inference-local
description: >-
  什麼是統一記憶體架構 (UMA)？它為何改變本地人工智慧遊戲？將 M1/M2/M3/M4 與 NVIDIA GPU 進行比較。記憶體頻寬、神經引擎、GPU
  核心。為什麼LLM 7B-30B在MacBook上運行流暢？
duration_minutes: 45
is_free: true
video_url: null
sort_order: 0
section_title: 第 1 部分：平台 - Ollama 和 Apple Silicon
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: 在 Apple Silicon 上使用 Ollama 運行本地 AI
  slug: ollama-apple-silicon
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2699" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2699)"/>

  <!-- Decorations -->
  <g>
    <circle cx="727" cy="191" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="854" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="981" cy="125" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="608" cy="92" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="59" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="221" x2="1100" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="251" x2="1050" y2="321" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1002.1769145362398,153 1002.1769145362398,189 971,207 939.8230854637602,189 939.8230854637602,153 971,135" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 人工智慧與機器學習 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：Apple Silicon 和 AI - 為什麼選擇 M-chip</tspan>
      <tspan x="60" dy="42">是局部推理之王</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">在 Apple Silicon 上使用 Ollama 運行本地 AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：平台 - Ollama 和 Apple Silicon</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

到 2026 年，在筆記型電腦上本地運行 AI 不再只是“玩玩”，而是一項真正有用的技能。 Apple Silicon 是當今最好的本地推理平台之一。

在進入下一篇文章中的設定之前，本文將幫助您了解 **為什麼** Apple Silicon 在人工智慧方面表現出色。

---

## 1. 統一記憶體架構 (UMA) — 遊戲規則改變者

在大多數傳統系統上，CPU 和 GPU 具有**獨立的**記憶體區域：

```
[CPU] ←→ [System RAM 32GB]
  ↕ (PCIe bus - bottleneck)
[GPU] ←→ [VRAM 8-24GB]
```

在 NVIDIA GPU 上執行 LLM 時，模型必須完全駐留在 VRAM 中。如果 13B 型號需要 8GB，但 GPU 只有 8GB VRAM，您將收到記憶體不足錯誤。

Apple Silicon 使用**統一記憶體架構**：

```
[CPU cores] ←→
[GPU cores] ←→  [Unified Memory 16-192GB]
[Neural Engine] ←→
[Media Engine] ←→
```

**所有** CPU、GPU、神經引擎存取相同的記憶體池。型號LLM 13B需要8GB？ CPU 和 GPU 都可以「看到」它，而不需要來回複製資料。

> 💡 **關鍵見解**：在 Apple Silicon 上，您可以在相同的價格範圍內加載比獨立顯示卡大得多的模型，因為系統 RAM =“VRAM”。

---

## 2. 記憶體頻寬－讀/寫速度決定推理

LLM 推理很大程度上取決於**記憶體頻寬**——從 RAM 讀取權重的速度。這是執行LLM時的主要瓶頸。

|晶片|記憶體頻寬 |最大記憶體 |
|--------|--------|-------------|
| M1 | 68.25 GB/秒 | 16GB|
| M1專業版| 200 GB/秒 | 32GB|
| M1 最大 | 400 GB/秒 | 64GB|
| M1超| 800 GB/秒 | 128GB|
| M2| 100 GB/秒 | 24GB|
| M2 Pro | 200 GB/秒 | 32GB|
| M2 最大 | 400 GB/秒 | 96GB |
| M2超| 800 GB/秒 | 192 GB | 192 GB
| M3 | 100 GB/秒 | 24GB|
| M3 Pro | 150 GB/秒 | 36GB|
| M3 最大 | 400 GB/秒 | 128GB|
| M4 | 120 GB/秒 | 32GB|
| M4 Pro | 273 GB/秒 | 48GB|
| M4 最大 | 546 GB/秒 | 128GB|

**與 NVIDIA 比較：**

|圖形處理器 |顯存 |頻寬|價格|
|-----|-----|------------|-----|
| RTX 4060 | 8GB| 272 GB/秒 | 〜$300 |
| RTX 4070 鈦 | 12GB| 504 GB/秒 | ~$750 |
| RTX 4090 | 24GB| 1008 GB/秒 | 〜$ 1600 |

NVIDIA 在高階擁有更高的頻寬，但受到 VRAM 的限制。 RTX 4060 具有 272 GB/s 頻寬，但只有 **8GB VRAM** — 對於 13B 型號來說不夠。

同時，MacBook Pro M3 Pro 36GB：頻寬 150 GB/s，但可以輕鬆加載 **30B 量化**模型，因為所有 36GB 都可用。

---

## 3. Apple Silicon 上的 GPU 核心

Apple Silicon 將 GPU 直接整合在晶片上（整合 GPU），但這是一個**非常強大**的 GPU，而不是弱的「整合高清顯示卡」類型：

|晶片| GPU 核心 | FP16 TFLOPS |
|--------|------------|-------------|
| M1 | 7-8 | 2.6 | 2.6
| M2| 10 | 10 3.6 |
| M3 | 10 | 10 4.1 |
| M3 Pro | 14-18 | 7.4 | 7.4
| M3 最大 | 30-40 | 30-40 14.2 | 14.2
| M4 | 10 | 10 4.6 |
| M4 Pro | 20 | 8.7 | 8.7
| M4 最大 | 40| 17.4 | 17.4

這些 GPU 核心非常有效地運行 LLM 推理，特別是在使用 Apple 的 **MLX** 框架時（將在第 2 部分中學習）。

---

## 4. 神經引擎－隱藏的寶石

每個 Apple Silicon 晶片都有一個 **神經引擎** - 用於機器學習的專用處理器：

- M1：16 核，11 TOPS
- M2：16 核，15.8 TOPS
- M3：16 核，18 TOPS
- M4：16 核，38 TOPS

神經引擎針對神經網路典型的矩陣計算進行了最佳化。目前，大多數推理框架（Ollama、llama.cpp）主要使用 GPU，但 Core ML 和一些新框架已經開始利用 Neural Engine。

---

## 5.為什麼LLM 7B-30B在Mac上運作順暢？

我們來具體計算一下：

**型號 Llama 3.2 8B（第 4 季量化）：**

- 大小：~4.5 GB
- 推理需要約 5.5 GB RAM（模型 + KV 快取 + 開銷）
- MacBook Air M2（8GB RAM）：可以使用，但很緊
- MacBook Pro M3（18GB RAM）：運行非常舒適

**型號 Qwen 2.5 32B（Q4 量化）：**

- 大小：~18 GB
- 推理需要約 22 GB RAM
- MacBook Pro 36 GB：運作順暢
- MacBook Air 24 GB：可以運行，但不應打開許多其他應用程式

**M3 Pro (36GB) 上的實際生成速度：**

|型號|令牌/秒 |感覺|
|--------|-------------|----------|
|駱駝 3.2 3B Q4 | ~65 托克/秒 |極快|
|駱駝 3.2 8B Q4 | ~32 托克/秒 |非常快|
|傑瑪 3 12B Q4 | ~22 托克/秒 |快|
|酷文2.5 14B Q4 | ~18 托克/秒 |好 |
|酷文2.5 32B Q4 | ~8 托克/秒 |可以接受|

> 💡 人類閱讀約 250 個字/分鐘 ≈ 約 5 個令牌/秒。所以8 tok/s已經比讀取速度快了。

---

## 6. 整體比較：Mac 與 PC 的本地 AI

|標準| Mac 蘋果晶片 | PC + NVIDIA GPU |
|----------|--------------------|-----------------|
|最大模型尺寸 |取決於 RAM（最高 192GB）|取決於 VRAM（通常為 8-24GB）|
|頻寬| 100-800 GB/秒 | 272-1000 GB/秒 |
|售價/GB「VRAM」 |便宜很多|昂貴（RTX 4090：24GB 1600 美元）|
|噪音|沉默|風扇運轉聲音大|
|電力 | 15-65W| GPU獨顯100-450W|
|手機 |輕薄筆記型電腦|桌上型電腦或重型遊戲筆記型電腦|
|生態系|僅限 macOS | Linux/Windows，更多工具 |

**結論**：對於想要每天在本地運行 AI 的開發人員來說，Mac Apple Silicon 是一個不錯的選擇。不是最快的，而是性能、便利性、噪音和便攜性之間的最佳平衡。

---

## 7. 測試你的 Mac

打開終端機並運作：

```bash
# Xem chip và RAM
system_profiler SPHardwareDataType | grep -E "(Chip|Memory)"
```

範例輸出：

```
Chip: Apple M3 Pro
Total Number of Cores: 12 (6 performance and 6 efficiency)
Memory: 36 GB
```

或者使用命令：

```bash
# Xem GPU cores
system_profiler SPDisplaysDataType | grep "Total Number of Cores"
```

請記住此資訊 - 您將需要它來在第 3 課中選擇正確的模型。

---

## 總結

|概念 |記住|
|--------|--------|
|烏瑪| CPU + GPU 共享 RAM → 載入更大的模型 |
|記憶體頻寬 |決定推理速度，M3 Max達到400GB/s |
| GPU 核心 |整合但功能強大，有效運行 LLM 推理 |
|神經引擎 |專用AI處理器，被逐步應用 |
|模型尺寸最佳點| 3B-14B 適用於 16GB RAM，14B-32B 適用於 32GB+ RAM |

---

## 練習

1. 檢查您的 Mac：什麼晶片、多少 RAM、多少 GPU 核心？
2. 根據記憶體頻寬表，估計您的 Mac 可以運行的最大尺寸型號？
3. 比較：如果您有相同的預算購買 RTX 4070 Ti（750 美元），那麼為 Mac 購買更多 RAM 或購買單獨的 GPU 是否更有意義？

**下一篇文章**：安裝 Ollama 並在 5 分鐘內運行您的第一個 LLM →
