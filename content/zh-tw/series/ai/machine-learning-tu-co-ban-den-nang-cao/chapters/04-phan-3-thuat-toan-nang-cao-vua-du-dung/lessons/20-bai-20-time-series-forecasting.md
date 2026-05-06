---
id: 019d8b39-bb20-7020-c020-ee2000000020
title: 第 20 課：基本時間序列預測
slug: bai-20-time-series-forecasting
description: 步進驗證、滯後特徵、基線預測和基本需求預測應用。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: 第 3 部分：足以使用的高階演算法
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5736" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5736)"/>

  <!-- Decorations -->
  <g>
    <circle cx="869" cy="77" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="638" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="907" cy="195" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="676" cy="124" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="945" cy="53" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="87" x2="1100" y2="167" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="117" x2="1050" y2="187" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1023.3730669589464,166 1023.3730669589464,208 987,229 950.6269330410536,208 950.6269330410536,166 987,145" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 人工智慧與機器學習 — 第 19 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 20 課：基本時間序列預測</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：足以使用的高階演算法</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

基於時間的預測與常規表格機器學習有一個非常重要的區別：時間順序是核心。如果您以錯誤的方式劃分資料或建立功能，很容易用漂亮的結果來欺騙自己，但在實際部署時卻毫無用處。

## 課程目標

- 了解預測和常規迴歸之間的差異。
- 知道如何建立基本的時間特徵。
- 避免時間序列中的洩漏。

## 時間序列的特徵

- 資料依先前的順序排列。
- 可能有趨勢、季節、週期。
- 密切觀察往往是相互依賴的。

## 熱門功能

- 滯後功能，例如 sales_t-1、sales_t-7。
- 滾動統計，例如7天、30天平均值。
- 日曆功能，例如星期幾、月份、季度和假期。

## 如何正確劃分數據

不會像常規表格那樣隨機洗牌。我們沿著時間軸來劃分：train是過去的，validation是接近現在的，test是最新的一段。

## 基線非常重要

在使用複雜模型之前，請與基準進行比較，例如前一期的數值、移動平均值或上週同一時期的數值。

## 常見錯誤

- 隨機分割時間序列。
- 創建一個展望未來的滾動功能。
- 不要與幼稚基線進行比較。

## 練習練習

- 使用滯後特徵和簡單的基於樹的模型預測每日收入。
- 與前一天同期的基準進行比較。
- 當模型學習到超出基線的更多訊號時寫下評論。

## 完成標準

- [ ] 以時間邏輯劃分資料。
- [ ] 建立基本的滯後和滾動功能。
- [ ] 將模型與時間基準進行比較。

## 逐步練習（進階）

1. 在時間軸上建立訓練/驗證/測試。
2. 建立滯後特徵和捲動視窗特徵。
3. 將 ML 模型與樸素基準進行比較。
4. 透過MAE、MAPE和階段誤差進行評估。
5. 在重要的季節性里程碑測試效能。

## 應提交工件

- 隨著時間的推移預測與實際圖表。
- 按週或按月的錯誤表。
- 對季節性漂移發表評論並建議模型更新。

## 自測題

- 為什麼隨機分裂會導致預測出現嚴重錯誤？
- 同期基線什麼時候夠好可以立即使用？
- 哪些特徵容易導致時間序列洩漏？
