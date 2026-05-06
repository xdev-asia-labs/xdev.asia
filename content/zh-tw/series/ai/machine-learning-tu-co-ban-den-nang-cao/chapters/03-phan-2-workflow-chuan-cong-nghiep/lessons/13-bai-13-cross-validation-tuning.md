---
id: 019d8b39-bb13-7013-c013-ee1300000013
title: 第 13 課：交叉驗證與超參數調優
slug: bai-13-cross-validation-tuning
description: KFold/StratifiedKFold、GridSearch/RandomizedSearch，以及如何讀取調優結果以選擇更可靠的模型。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 第 2 部分：業界標準工作流程
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7754" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7754)"/>

  <!-- Decorations -->
  <g>
    <circle cx="864" cy="262" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="628" cy="166" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="892" cy="70" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="656" cy="234" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="138" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="222" x2="1100" y2="302" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="252" x2="1050" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1054.0429399400243,203.5 1054.0429399400243,240.5 1022,259 989.9570600599758,240.5 989.9570600599758,203.5 1022,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：交叉驗證與超參數</tspan>
      <tspan x="60" dy="42">調音</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：業界標準工作流程</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

單一的訓練-測試分割可能會讓您對模型品質產生錯誤的感覺。交叉驗證提供了更穩定的評估，而超參數調整可以幫助您找到合理的配置，而無需依賴資料分割的運氣。

## 課程目標

- 理解為什麼你不應該絕對相信單一分裂。
- 使用交叉驗證來估計更穩定的性能。
- 根據受控製程調整超參數。

## 什麼是交叉驗證？

數據被分成很多部分。每次，一個折疊進行驗證，其餘折疊進行訓練。最終結果是多次評價的平均值。

## 什麼是超參數？

超參數是您在訓練之前選擇的值，例如 max_depth、n_estimators、C 或learning_rate。它們與模型從數據中學習的參數不同。

## 實際調優

- 從簡單的基線開始。
- 選擇最不重要的超參數。
- 使用 GridSearchCV 或 RandomizedSearchCV。
- 追蹤折疊之間的平均分數和標準差。

## 範例程式碼

~~~蟒蛇
從 sklearn.model_selection 導入 RandomizedSearchCV
從 sklearn.ensemble 導入 RandomForestClassifier
~~~

## 常見錯誤

- 當基線尚未穩定時，調整範圍太寬。
- 使用測試集調整超參數。
- 進行大量測試但不記錄結果。

## 練習練習

- 使用 3 個超參數調整基於樹的模型。
- 比較調音前和調音後的分數。
- 錄音評論：調音真的有改善，還是只改善很少？

## 完成標準

- [ ] 可以在完整的管道中使用交叉驗證。
- [ ] 區分用於調整的驗證和用於最終評估的測試。
- [ ] 有系統地記錄實驗。

## 逐步練習（進階）

1. 使用標準分割運行基線。
2. 運行 KFold 或 StratifiedKFold 5 折。
3.使用RandomizedSearchCV進行調優，重要參數不超過4個。
4. 比較配置之間的平均得分和標準得分。
5. 根據性能+穩定性最終確定配置。

## 應提交工件

- 按分數排名前 10 名的配置表。
- 以倍數分割的分數分佈圖。
- 停止調整以避免過度搜尋的規則。

## 自測題

- 什麼時候應該優先使用 RandomizedSearchCV 而不是 GridSearchCV？
- 折疊之間的高標準差意味著什麼？
- 為什麼測試集不用於調優？
