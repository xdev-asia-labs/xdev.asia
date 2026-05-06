---
id: 019d8b39-bb23-7023-c023-ee2300000023
title: 第 23 課：監控、漂移偵測與再培訓
slug: bai-23-monitoring-drift-retraining
description: 部署後監控品質、偵測偏差、設計再訓練循環和最小化警報。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: 第 4 部分：生產、可解釋性和頂點
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4184" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4184)"/>

  <!-- Decorations -->
  <g>
    <circle cx="857" cy="221" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="614" cy="198" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="871" cy="175" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="628" cy="152" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="129" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="111" x2="1100" y2="191" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="141" x2="1050" y2="211" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="933.5166604983954,98 933.5166604983954,124 911,137 888.4833395016046,124 888.4833395016046,98 911,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 人工智慧與機器學習 — 第 22 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 23 課：監控、漂移偵測和</tspan>
      <tspan x="60" dy="42">再培訓</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：生產、可解釋性和頂點</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

部署後的模型並沒有靜止不動。使用者資料變化、市場行為變化、產品變化。因此，機器學習系統有責任在部署後監控質量，而不是認為訓練已完成。

## 課程目標

- 了解預測漂移、資料漂移和概念漂移。
- 了解需要監控的最小訊號。
- 設計一個基本的再訓練循環。

## 需要追蹤的事情

- 分配輸入功能。
- 每個類別的預測率。
- 當有回饋標籤時模型品質。
- 延遲、請求錯誤和服務可用性。

## 漂流的類型

- 資料漂移：輸入分佈變化。
- 概念漂移：輸入與目標變化之間的關係。
- 預測漂移：模型輸出變化異常。

## 何時重新訓練？

並非每次看到漂移時，您都會立即重新訓練。你需要回答漂移是否真的影響效能，是否有足夠的新的可靠數據來重新訓練，以及重新訓練是否需要在發布前進行人工審核。

## 對新手的最低限度監控

- 儀表板追蹤請求和錯誤的數量。
- 一些重要特徵的分佈圖。
- 按週或按月追蹤關鍵指標。
- 當分佈偏差超出閾值時發出警告。

## 常見錯誤

- 僅監控基礎設施，但不監控模型品質。
- 自動重新訓練不檢查迴歸。
- 不要對資料和模型進行版本控制。

## 練習練習

- 設計模型流失或住房的監控清單。
- 確定必須監控的 5 個指標。
- 寫一個簡單的重新訓練策略：何時重新訓練、誰批准、如何回滾。

## 完成標準

- [ ] 區分資料漂移和概念漂移。
- [ ] 建議的最小監控指標集。
- [ ] 制定基本的重新訓練和回溯計畫。

## 逐步練習（進階）

1. 選擇一組品質和績效監控指標。
2. 為5個主要功能設定資料漂移警告閾值。
3. 模擬漂移場景並觀察警告。
4. 設計有核准步驟的再訓練流程。
5. 當新模型較差時編寫回滾劇本。

## 應提交工件

- 每週監控清單。
- 重新訓練和發布模型流程。
- 模型的事件回應手冊。

## 自測題

- 資料漂移和概念漂移有什麼不同？
- 什麼時候應該定期重新訓練，什麼時候應該根據事件重新訓練？
- 如果漂移增加但指標並未減少，首先應採取什麼措施？
