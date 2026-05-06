---
id: 019d8b39-bb21-7021-c021-ee2100000021
title: 第 21 課：利害關係人的可解釋性和公平性
slug: bai-21-explainability-fairness
description: SHAP、排列重要性、公平性檢查以及如何呈現結果，以便業務團隊能夠理解並信任該模型。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: 第 4 部分：生產、可解釋性和頂點
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7373" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7373)"/>

  <!-- Decorations -->
  <g>
    <circle cx="678" cy="144" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="756" cy="182" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="834" cy="220" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="912" cy="258" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="990" cy="36" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="244" x2="1100" y2="324" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="274" x2="1050" y2="344" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="977.7749907475932,124.5 977.7749907475932,163.5 944,183 910.2250092524068,163.5 910.2250092524068,124.50000000000001 944,105" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 20 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 21 課：可解釋性和公平性</tspan>
      <tspan x="60" dy="42">利害關係人</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：生產、可解釋性和頂點</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

筆記型電腦中只有一個好的模型是不夠的。利害關係人需要了解模型做出決策的原因，組織也需要知道模型是否有偏差。這就是可解釋性和公平性變得至關重要的地方。

## 課程目標

- 了解局部可解釋性和全局可解釋性之間的差異。
- 了解如何在入門級別使用排列重要性或 SHAP。
- 了解如何在部署之前提出公平性問題。

## 向誰解釋？

- 資料科學家需要調試模型。
- PM 需要了解哪些特徵會影響結果。
- 專業利害關係人需要簡單、值得信賴的故事。
- 最終使用者可能需要特定的原因來進行單獨的預測。

## 兩個層次的解釋

- 全域可解釋性：模型通常依賴哪些因素？
- 局部可解釋性：為什麼特定樣本會被這樣預測。

## 公平不是次要選擇

如果模型影響人類決策，您應該測試每個使用者群組的效能、每個群組的誤報或漏報率，以及哪些特徵可以作為敏感屬性的代理。

## 如何向利害關係人展示

- 避免冗長的公式。
- 使用 3 到 5 個最有影響力的特徵。
- 清楚說明模型的置信度和限制。
- 坦率地陳述偏見的風險。

## 常見錯誤

- 濫用 SHAP 圖表而不了解其本質。
- 將可解釋性與證明因果關係混為一談。
- 僅在部署後檢查公平性。

## 練習練習

- 選擇經過訓練的分類模型。
- 建立排列重要性或 SHAP 摘要。
- 檢查 2 個不同使用者群組的指標。
- 寫下解釋，就像你向 PM 做示範一樣。

## 完成標準

- [ ] 區分全局可解釋性和局部可解釋性。
- [ ] 至少了解一項基本的公平性檢查。
- [ ] 呈現非技術利害關係人仍可理解的結果。

## 逐步練習（進階）

1. 選擇經過訓練的模型和固定的驗證集。
2. 計算5個樣本的全域重要性和局部解釋。
3.將資料分為2-3個用戶組，比較公平性。
4. 按組記錄度量差異。
5. 準備道德風險備忘錄和控制建議。

## 應提交工件

- 1-2 頁的可解釋性報告。
- 按組別劃分的公平性指標表。
- 按優先順序減少偏見的行動清單。

## 自測題

- 為什麼可解釋性不能證明因果關係？
- 多少公制差異令人震驚？
- 我什麼時候應該因為公平風險而拒絕部署？
