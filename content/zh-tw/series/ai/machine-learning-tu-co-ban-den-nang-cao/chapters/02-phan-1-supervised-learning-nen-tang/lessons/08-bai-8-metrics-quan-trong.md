---
id: 019d8b39-bb08-7008-c008-ee0800000008
title: 第 8 課：重要指標：準確率、精確率、召回率、F1、AUC
slug: bai-8-metrics-quan-trong
description: 根據業務問題選擇合適的指標；何時使用 PR-AUC 而不是 ROC-AUC；避免針對錯誤的目標進行最佳化。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 7
section_title: 第 1 部分：監督學習基礎
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-777" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-777)"/>

  <!-- Decorations -->
  <g>
    <circle cx="916" cy="178" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="732" cy="54" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1048" cy="190" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="864" cy="66" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="680" cy="202" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="218" x2="1100" y2="298" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="248" x2="1050" y2="318" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="946.5788383248864,101.5 946.5788383248864,134.5 918,151 889.4211616751136,134.5 889.4211616751135,101.50000000000001 918,85" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：重要指標：準確性、</tspan>
      <tspan x="60" dy="42">準確率、召回率、F1、AUC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：監督學習基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

模型好不好很大程度取決於您選擇的指標。同一個模型在準確率方面可能看起來非常好，但在召回率方面卻很糟糕。本文幫助您根據正確的問題而不是出於習慣來選擇指標。

## 課程目標

- 區分迴歸和分類的指標。
- 了解準確度、精確度、召回率、F1、ROC-AUC 以及何時使用它們。
- 了解為什麼指標必須遵循產品目標。

## 回歸指標

- MAE：易於理解，測量平均絕對誤差。
- RMSE：嚴重錯誤的懲罰大於 MAE。
- R 平方：衡量所解釋的變異量，但不將其神聖化。

## 分類指標

- 準確度：整體正確預測率。
- 精確度：預測為陽性的樣本中，有多少實際為陽性。
- 回想率：在真陽性樣本中，模型能捕捉多少個？
- F1-score：精確率和召回率之間的平衡。
- ROC-AUC：衡量對兩個類別之間的機率進行排名的能力。

## 根據上下文選擇指標的範例

- 偵測詐欺：優先考慮高召回率，這樣您就不會錯過它。
- 垃圾郵件：需要足夠準確，以避免錯誤地阻止常規電子郵件。
- 客戶流失：通常關心召回和保留行動的商業價值。

## 範例程式碼

~~~蟒蛇
從 sklearn.metrics 導入 precision_score、 precision_score、recall_score、f1_score、roc_auc_score

print('準確度：', precision_score(y_test, preds))
print('精確度：', precision_score(y_test, preds))
print('召回率：',recall_score(y_test, preds))
print('F1:', f1_score(y_test, preds))
print('ROC-AUC:', roc_auc_score(y_test, proba))
~~~

## 常見錯誤

- 對嚴重不平衡的資料使用準確性。
- 在測試之間使用不同指標來比較模型。
- 優化技術指標，但忘記業務成本。

## 練習練習

- 考慮一個不平衡的分類問題。
- 計算混淆矩陣和 5 個主要指標。
- 寫一小段：如果您是 PM，您會選擇哪個指標作為主要 KPI？

## 完成標準

- [ ] 為至少 3 個不同的問題選擇適當的指標。
- [ ] 用現實生活中的例子解釋精確度和回想率。
- [ ] 可以無混淆地讀取混淆矩陣。

## 逐步練習（進階）

1. 選擇類別不平衡的流失或詐欺問題。
2. 測量 5 個指標：準確度、精確度、召回率、F1、ROC-AUC。
3.新增PR-AUC用於類別差異資料的比較。
4. 模擬FP/FN成本並計算預期成本。
5. 用於每週報告的關鍵指標。

## 應提交工件

- 指標表+PR曲線和ROC曲線圖。
- 簡單的成本矩陣模型。
- 總結監測的主要指標和次要指標。

## 自測題

- 為什麼類外資料的準確性會產生誤導？
- PR-AUC 與 ROC-AUC 在意義上有何不同？
- 什麼時候需要同時監控多個指標？
