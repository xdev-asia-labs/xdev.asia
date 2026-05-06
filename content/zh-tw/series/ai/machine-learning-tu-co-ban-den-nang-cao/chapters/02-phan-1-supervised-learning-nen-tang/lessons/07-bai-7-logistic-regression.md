---
id: 019d8b39-bb07-7007-c007-ee0700000007
title: 第 7 課：Logistic 迴歸與分類機率
slug: bai-7-logistic-regression
description: 邏輯迴歸、S形、決策邊界、閾值以及如何正確讀取預測機率。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 第 1 部分：監督學習基礎
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8295" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8295)"/>

  <!-- Decorations -->
  <g>
    <circle cx="977" cy="61" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="854" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="731" cy="255" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="608" cy="92" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="985" cy="189" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="71" x2="1100" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="101" x2="1050" y2="171" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="943.5166604983954,108 943.5166604983954,134 921,147 898.4833395016046,134 898.4833395016046,108 921,95" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 人工智慧與機器學習 — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：Logistic 迴歸與機率</tspan>
      <tspan x="60" dy="42">分類</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：監督學習基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

迴歸預測連續數，而分類預測標籤。邏輯迴歸是最好的入門分類模型，因為它簡單、快速、易於解釋，並且在實踐中仍然非常有用。

## 課程目標

- 了解邏輯迴歸與線性迴歸有何不同。
- 讀取模型的輸出機率。
- 知道如何使用閾值將機率轉換為預測標籤。

## 從直線到機率

線性迴歸可以產生從負無窮到正無窮的任何值。二元分類需要0到1之間的機率。 Logistic迴歸透過sigmoid函數解決了這個問題：

$$
\sigma(z) = \frac{1}{1 + e^{-z}}
$$

其中 $z = w_1x_1 + ... + w_nx_n + b$。

## 閾值並不是固定的事實

許多新用戶預設閾值 = 0.5。只有當假陽性和假陰性的成本相等時，這才是正確的。

例如，疾病預測通常優先考慮回憶；客戶流失可能會接受多餘的電話，而不是錯過即將離開的客戶。

## 程式碼範例

~~~蟒蛇
從 sklearn.linear_model 導入 LogisticRegression
從 sklearn.metrics 導入分類報告

模型=邏輯迴歸(max_iter=1000)
model.fit(X_train, y_train)
機率 = model.predict_proba(X_test)[:, 1]
preds = (proba >= 0.5).astype(int)

列印（分類報告（y_test，preds））
~~~

## 優點和缺點

優點：快速、易於基線、易於解釋。

缺點：當類別邊界過於非線性時效果不佳，對特徵工程和尺度敏感。

## 常見錯誤

- 僅當資料超出類別時才查看準確度。
- 不要測試不同的閾值。
- 導致編碼或縮放步驟中的洩漏。

## 練習練習

- 針對流失或垃圾郵件問題訓練邏輯迴歸。
- 比較閾值 0.3、0.5 和 0.7 處的結果。
- 寫評論：哪個閾值更適合問題以及原因。

## 完成標準

- [ ]解釋一下sigmoid的作用。
- [ ] 了解輸出與預測標籤不同的機率。
- [ ] 了解如何根據業務目標變更閾值。

## 逐步練習（進階）

1. 使用具有輕微類別偏差的資料集分類。
2. 使用預設的class_weight和balanced訓練Logistic回歸。
3. 比較閾值 0.3、0.5、0.7 處的精確度、召回率和 F1。
4. 權衡精確率與召回率。
5. 根據具體產品場景選擇閾值。

## 應提交工件

- 根據閾值的度量表。
- 清晰註釋的 FP/FN 的混淆矩陣。
- 1 頁解釋發送給 PM 進行模擬。

## 自測題

- 為什麼閾值 0.5 並不總是正確的？
- 在什麼情況下應優先考慮召回率而不是精確率？
- ROC-AUC 高，但業務成果仍不佳，原因可能是什麼？
