---
id: 019d8b39-bb18-7018-c018-ee1800000018
title: 第 18 課：PCA、t-SNE、UMAP 用於視覺化
slug: bai-18-pca-tsne-umap
description: 降低資料維度以了解叢集、檢測異常並提高下游模型效能。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 17
section_title: 第 3 部分：足以使用的高階演算法
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1930" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1930)"/>

  <!-- Decorations -->
  <g>
    <circle cx="768" cy="274" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="936" cy="182" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="604" cy="90" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="772" cy="258" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="166" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="214" x2="1100" y2="294" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="244" x2="1050" y2="314" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="989.1147367097487,149.5 989.1147367097487,178.5 964,193 938.8852632902513,178.5 938.8852632902513,149.5 964,135" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：PCA、t-SNE、UMAP 用於視覺化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：足以使用的高階演算法</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

當資料的維度太多時，就很難看到、難以繪製，有時甚至很難建模。 PCA、t-SNE 和 UMAP 有助於降低資料維度，但用途不同。

## 課程目標

- 區分 PCA 與 t-SNE 和 UMAP。
- 知道何時使用它進行維度壓縮以及何時使用它進行視覺化。
- 避免誤解降維圖。

## 主成分分析

PCA 找到保留資料最大變異數的新軸。這是一種快速、線性的技術，相對容易解釋，並且在降低輸入維度方面非常有用。

## t-SNE 和 UMAP

t-SNE 和 UMAP 主要用於視覺化高維度資料中的局部結構。 UMAP 通常速度更快且非常適合嵌入；用於視覺化本地叢集的強大 t-SNE。

## 解釋警告

降維後的二維圖表上的距離並不總是反映原始空間中的真實距離。不要使用漂亮的圖表作為結論的有力證據。

## 常見錯誤

- 使用t-SNE或UMAP作為主要特徵輸入而沒有仔細檢查。
- 將圖解釋為真正的類別邊界。
- 需要時，不要在 PCA 之前縮放資料。

## 練習練習

- 在相同資料集上執行 PCA 和 t-SNE。
- 為兩者繪製二維圖。
- 寫評論：哪個工具更適合視覺化，哪個工具更適合預處理。

## 完成標準

- [ ]區分PCA、t-SNE、UMAP的用途。
- [ ] 不要過度解釋降維圖。
- [ ] 了解如何為正確的目的選擇工具。

## 逐步練習（進階）

1. 執行保留 90% 變異數的 PCA。
2. 使用 2D PCA 進行資料視覺化。
3. 在同一輸入嵌入上執行 t-SNE 和 UMAP。
4.運行時和群集鏡像穩定性比較。
5. 為儀表板查看者撰寫解釋性警告。

## 應提交工件

- 3 種技術的視覺效果。
- 比較使用每種技巧的目標的表格。
- 根據用例選擇降維工具的說明。

## 自測題

- PCA 在再現性方面有哪些優勢？
- 為什麼t-SNE不適合作為主要特徵？
- UMAP 何時優於 t-SNE？
