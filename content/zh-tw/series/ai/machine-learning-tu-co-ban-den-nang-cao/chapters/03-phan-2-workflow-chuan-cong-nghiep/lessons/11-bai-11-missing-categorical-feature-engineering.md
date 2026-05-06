---
id: 019d8b39-bb11-7011-c011-ee1100000011
title: 第 11 課：缺失值、分類變數、特徵工程
slug: bai-11-missing-categorical-feature-engineering
description: 實際資料處理過程：缺失、編碼、縮放、異常值處理和基本特徵交叉。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 第 2 部分：業界標準工作流程
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8918" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8918)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1006" cy="168" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="912" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="818" cy="260" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="724" cy="46" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="92" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="188" x2="1100" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="218" x2="1050" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.2390923627308,116.5 975.2390923627308,159.5 938,181 900.7609076372692,159.5 900.7609076372692,116.50000000000001 938,95" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：缺失值，分類</tspan>
      <tspan x="60" dy="42">變數、特徵工程</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：業界標準工作流程</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

現實生活中的數據很少是乾淨的。列缺少值，文字有奇怪的符號，類別有太多級別，手動建立的特徵不一致。本文可協助您以可重複且無錯誤的方式處理這些任務。

## 課程目標

- 處理數字和分類的缺失值。
- 正確編碼分類變數。
- 了解什麼是特徵工程以及何時停止。

## 缺失值：不表示全部缺失

遺失資料有時是一個訊號。在填寫之前，先問一下：為什麼資料會遺失，是隨機遺失還是系統遺失，我們是否應該建立額外的欄位來標記遺失或不遺失？

## 常見處理

- 數字：當存在異常值時，中位數通常比平均值更安全。
- 分類：填入最常見的值或將其標記為未知。
- 缺失指示器：當缺失本身就是一個訊號時很有用。

## 特徵工程實用

優先考慮具有清晰業務邏輯的功能，例如過去 30 天內的總支出、每月的支援票數或超出限制的使用率。

## 框架程式碼

~~~蟒蛇
從 sklearn.impute 導入 SimpleImputer
從 sklearn.preprocessing 導入 OneHotEncoder

num_imputer = SimpleImputer(策略='中位數')
cat_imputer = SimpleImputer(策略='most_frequent')
編碼器 = OneHotEncoder(handle_unknown='忽略')
~~~

## 常見錯誤

- 在分割資料之前填充缺失。
- 創造一個預見未來的功能。
- One-hot 的類別太多，導致功能空間無用地臃腫。

## 練習練習

- 選擇同時具有數字和分類的表格資料集。
- 嘗試 2 種方法來填寫數字中缺少的數字。
- 建立 3 個具有清晰業務解釋的新功能。

## 完成標準

- [ ] 了解如何為每種列類型選擇填入缺失策略。
- [ ] 使用one-hot編碼在遇到新類別時不會導致錯誤。
- [ ] 建立新功能而不造成洩漏。

## 逐步練習（進階）

1. 準備資料分析報告（缺失率、基數、異常值）。
2. 建立2個版本的缺失處理以進行比較。
3.使用one-hot對分類進行編碼，並與目標安全編碼進行比較。
4. 增加 3 個具有明確解釋來源的業務功能。
5. 評估每個步驟對最終指標的影響。

## 應提交工件

- 處理前/後的資料品質表。
- 新功能清單及其存在的原因。
- 每個預處理步驟之後的實驗日誌。

## 自測題

- 非隨機缺失需要以不同方式處理嗎？
- one-hot什麼時候會失效？
- 如何證明新功能有真正的價值？
