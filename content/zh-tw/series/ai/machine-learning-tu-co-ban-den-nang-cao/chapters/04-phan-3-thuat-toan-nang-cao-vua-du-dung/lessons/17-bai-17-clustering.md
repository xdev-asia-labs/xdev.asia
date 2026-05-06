---
id: 019d8b39-bb17-7017-c017-ee1700000017
title: 第 17 課：聚類（K-Means、DBSCAN、分層）
slug: bai-17-clustering
description: 在沒有標籤的情況下進行客戶細分和資料結構發現的無監督學習。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: 第 3 部分：足以使用的高階演算法
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4140" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4140)"/>

  <!-- Decorations -->
  <g>
    <circle cx="980" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="860" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="190" x2="1100" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="220" x2="1050" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1011.650635094611,177.5 1011.650635094611,202.5 990,215 968.349364905389,202.5 968.349364905389,177.5 990,165" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：聚類（K-Means、DBSCAN、</tspan>
      <tspan x="60" dy="42">分層）</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：足以使用的高階演算法</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

你並不總是有標籤。聚類是一組幫助發現未標記資料中隱藏結構的技術。在實踐中，它經常用於客戶細分、行為分組和數據發現。

## 課程目標

- 了解聚類與監督學習有何不同。
- 了解如何在基礎層面上使用 K 均值。
- 了解聚類評估的限制。

## K 均值如何運作？

1. 選擇簇數 k。
2. 將每個點分配給最近的聚類中心。
3. 再次更新聚類中心。
4. 重複直至穩定。

## 適當的實際問題

- 依照購買行為將客戶分組。
- 透過嵌入將貼文或使用者分組。
- 為業務團隊建立細分，以採取不同的行動。

## 如何選擇簇的數量？

沒有絕對的答案。可以參考肘法、剪影評分以及最重要的商業解讀。

## 常見錯誤

- 認為生成的簇始終是自然真理。
- 選擇 k 只是因為圖表看起來不錯。
- 不檢查集群的業務意義。

## 練習練習

- 對資料集分段運行 K-Means。
- 用業務語言描述每個集群。
- 為每個集群建議不同的操作。

## 完成標準

- [ ] 了解沒有標籤的聚類。
- [ ] 可以使用縮放資料來運行 K-Means。
- [ ]從業務角度解讀叢集。

## 逐步練習（進階）

1. 聚類前對特徵進行歸一化。
2. 使用多個 k 值運行 K 均值。
3. 使用輪廓分數和業務解釋進行評估。
4. 嘗試加入DBSCAN或Hierarchical進行比較。
5. 根據業務語言為集群命名。

## 應提交工件

- 聚類演算法比較表。
- 描述每個叢集的設定檔（叢集設定檔）。
- 每個集群的建議操作清單。

## 自測題

- 為什麼聚類沒有絕對正確的答案？
- DBSCAN 在什麼時候比 K-Means 更有利？
- 如何評價一個集群對業務是否有用？
