---
id: 019d8b39-bb12-7012-c012-ee1200000012
title: 第 12 課：使用 scikit-learn 進行管道和 ColumnTransformer
slug: bai-12-pipelines-columntransformer
description: 建構抗人工錯誤、復用性好的管道，降低訓練中外流的風險。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 第 2 部分：業界標準工作流程
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1947" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1947)"/>

  <!-- Decorations -->
  <g>
    <circle cx="910" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1030" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="80" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="80" x2="1100" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="110" x2="1050" y2="180" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="960.3108891324554,112.5 960.3108891324554,147.5 930,165 899.6891108675446,147.5 899.6891108675446,112.50000000000001 930,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：管道和 ColumnTransformer</tspan>
      <tspan x="60" dy="42">scikit學習</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：業界標準工作流程</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

當 ML 專案從許多預處理步驟開始時，手寫每個步驟很容易出錯。 Pipeline 和 ColumnTransformer 可協助您將所有預處理和模型組合成統一的流程，易於重現、易於調試並降低洩漏風險。

## 課程目標

- 了解為什麼應該使用管道而不是離散處理。
- 了解如何使用 ColumnTransformer 處理多種列類型的資料。
- 建立一致的訓練/預測工作流程。

## 為什麼管道很重要？

管道有助於避免常見錯誤，例如在訓練和測試上安裝縮放器、在預測新資料時忘記應用相同的轉換，或儲存模型但忘記預處理邏輯。

## 標準結構

- 數字：估算然後縮放。
- 分類：先估算後單熱。
- 使用 ColumnTransformer 合併。
- 在最後一步中設定分類器或回歸器。

## 程式碼範例

~~~蟒蛇
從 sklearn.compose 導入 ColumnTransformer
從 sklearn.pipeline 導入管道
從 sklearn.preprocessing 導入 OneHotEncoder、StandardScaler
從 sklearn.impute 導入 SimpleImputer
從 sklearn.ensemble 導入 RandomForestClassifier
~~~

## 實踐中的好處

- 易於進行交叉驗證。
- 使用 joblib 輕鬆儲存/載入。
- 部署批次推理時錯誤更少。

## 常見錯誤

- 列清單的錯誤使用。
- 新增了新功能但忘記更新 ColumnTransformer。
- 在管道外呼叫fit_transform，然後在管道內再次進行擬合。

## 練習練習

- 為客戶流失或住房資料建立完整的管道。
- 比較使用管道的程式碼和手動處理的程式碼。
- 寫 5 行：管道最能幫助減少哪種類型的錯誤？

## 完成標準

- [ ] 可以自己建構Pipeline和ColumnTransformer。
- [ ] 了解管道如何幫助避免洩漏。
- [ ] 可以儲存/載入完整的工作流程。

## 逐步練習（進階）

1.寫一個完整的pipeline，包括預處理+模型。
2. 將數字/分類分割為兩個變換分支。
3. 使用相同的流程來訓練、驗證和預測新樣本。
4. 使用 joblib 儲存管道並重新載入以進行預測。
5. 編寫小測試以確保輸入模式不會被破壞。

## 應提交工件

- 文件管道可以重複使用。
- 1 筆記錄的最小預測腳本。
- 基於管道的洩漏預防檢查表。

## 自測題

- 為什麼手動 fit_transform 比 pipeline 更容易出錯？
- 新增功能時，ColumnTransformer 中需要更新哪些內容？
- 部署管道時最大的好處是什麼？
