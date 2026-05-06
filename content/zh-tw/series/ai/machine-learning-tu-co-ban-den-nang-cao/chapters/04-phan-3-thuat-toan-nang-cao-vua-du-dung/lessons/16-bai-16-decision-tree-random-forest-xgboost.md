---
id: 019d8b39-bb16-7016-c016-ee1600000016
title: 第 16 課：決策樹、隨機森林、XGBoost
slug: bai-16-decision-tree-random-forest-xgboost
description: 比較基於樹的模型，了解特徵重要性、過度擬合控制以及如何根據資料選擇模型。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: 第 3 部分：足以使用的高階演算法
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6500" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6500)"/>

  <!-- Decorations -->
  <g>
    <circle cx="961" cy="253" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="822" cy="154" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="683" cy="55" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1044" cy="216" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="117" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="103" x2="1100" y2="183" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="133" x2="1050" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.9089653438086,134 985.9089653438086,172 953,191 920.0910346561914,172 920.0910346561914,134 953,115" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：決策樹、隨機森林、</tspan>
      <tspan x="60" dy="42">XGBoost</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：足以使用的高階演算法</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

至此，您已經有了線性模型的良好基礎。本文介紹了面板資料在實務上最強大的一組演算法：決策樹、隨機森林和Boosting。

## 課程目標

- 了解決策樹、隨機森林和提升的直覺。
- 了解可解釋性、速度和強度之間的權衡。
- 為表格資料選擇正確的基於樹的模型。

## 決策樹

決策樹依照年齡 > 35 或 num_tickets > 3 等問題來分割資料。優點是易於理解，不需要縮放特徵並捕獲非線性關係。缺點是如果樹太深，很容易過度擬合。

## 隨機森林

隨機森林是許多決策樹一起投票。與單棵樹相比，它通常可以減少過度擬合，並且是表格數據的非常強大的基線。

## XGBoost 和提升

Boosting 依序訓練多棵樹；每棵新樹都專注於糾正前一棵樹的錯誤。因此，提昇在排行榜上通常非常強大，但如果驗證控制不好，也很容易被濫用。

## 何時使用哪一種模型？

- 決策樹：直覺學習或需要一個非常容易解釋的模型。
- 隨機森林：表格資料的強大基線。
- XGBoost、LightGBM、CatBoost：當您想要認真優化效能時。

## 常見錯誤

- 從一開始就調整了太多參數。
- 使用特徵重要性作為因果證據。
- 無需查看洩漏或錯誤分析即可信任排行榜。

## 練習練習

- 在同一資料集上比較邏輯迴歸、隨機森林和 XGBoost。
- 記錄指標、訓練時間、可解釋性。
- 總結哪種模式最適合中小企業環境。

## 完成標準

- [ ] 解釋 bagging 和 boosting 之間的差異。
- [ ] 了解基於樹的模型何時比線性模型更強。
- [ ] 比較同一問題的至少 3 個模型。

## 逐步練習（進階）

1. 運行 3 個模型：決策樹、隨機森林、XGBoost。
2. 保持相同的訓練/驗證分割以進行公平比較。
3、各型號燈光調校（2-3個主要參數）。
4. 比較指標、訓練時間和解釋的難易度。
5. 撰寫根據資料大小選擇模型的指南。

## 應提交工件

- 三種模型的基準表。
- 功能重要性圖表有仔細的註釋。
- 根據每個項目背景選擇模型的規則。

## 自測題

- Bagging 和 Boosting 在誤差減少機制方面有何不同？
- 隨機森林什麼時候比 XGBoost 更好？
- 為什麼特徵重要性不等於因果關係？
