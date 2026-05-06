---
id: 019d8b39-bb09-7009-c009-ee0900000009
title: 第 9 課：過度擬合/欠擬合以及如何修復它
slug: bai-9-overfitting-underfitting
description: 學習曲線、驗證曲線、偏差-方差權衡和系統模型改進策略。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 第 1 部分：監督學習基礎
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6534" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6534)"/>

  <!-- Decorations -->
  <g>
    <circle cx="780" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="960" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="90" x2="1100" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="120" x2="1050" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1011.650635094611,177.5 1011.650635094611,202.5 990,215 968.349364905389,202.5 968.349364905389,177.5 990,165" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：過度擬合/欠擬合以及如何實現</tspan>
      <tspan x="60" dy="42">編輯</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：監督學習基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

學習 ML 不僅僅是為了獲得更好的成績。在訓練集上很強但在新資料上很弱的模型是尚未準備好用於實際使用的模型。本文可協助您透過非常具體的跡象來發現過度擬合和欠擬合。

## 課程目標

- 區分過度擬合和欠擬合。
- 知道如何一起讀取訓練分數和驗證分數。
- 當模型沒有正確學習時，有一個清單可以處理。

## 什麼是欠擬合？

當模型太簡單或特徵太差時，就會出現欠擬合，導致即使在訓練集上也無法很好地學習訊號。

## 什麼是過度擬合？

當模型同時學習真實訊號和訓練集的獨特雜訊時，就會發生過度擬合。

典型跡象：

- 火車分數非常高。
- 驗證分數顯然很低。
- 每次更改分割時，結果都會大幅波動。

## 如何務實處理

欠擬合時：加入有用的特徵，使用更強的模型，如果是迭代演算法，則訓練時間更長。

過度擬合時：降低模型複雜性、添加正規化、增加資料或使用交叉驗證。

## 學習曲線

學習曲線顯示，如果增加數據，模型可能會得到改善。這是比猜測更好的診斷方法。

## 常見錯誤

- 在沒有適當驗證的情況下不斷增加模型複雜度。
- 運行多次，然後選擇最佳分割。
- 修復基於測試集的功能。

## 練習練習

- 訓練 3 個模型，其複雜度不斷增加。
- 記錄訓練分數和驗證分數。
- 結論哪個模型欠擬合，哪個模型過擬合，哪個模型最合理。

## 完成標準

- [ ] 用日常語言解釋兩個概念。
- [ ] 知道如何理解訓練和驗證之間的差異。
- [ ] 針對每種情況提出至少 2 個解決方案。

## 逐步練習（進階）

1. 訓練三個複雜度不斷增加的模型。
2. 收集每個模型的訓練/驗證分數。
3.根據訓練資料量繪製學習曲線。
4. 嘗試正規化或減少模型深度。
5.記錄編輯前後的變化。

## 應提交工件

- 學習曲線圖。
- 調整前後的比較表。
- 適用於以下項目的過度擬合決策清單。

## 自測題

- 哪一個標誌最能區分欠擬合和過擬合？
- 為什麼更多的數據可以減少過度擬合？
- 什麼時候降低模型複雜度是最合理的選擇？
