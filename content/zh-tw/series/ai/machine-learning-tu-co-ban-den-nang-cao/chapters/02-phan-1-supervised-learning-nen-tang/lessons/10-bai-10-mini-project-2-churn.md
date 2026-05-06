---
id: 019d8b39-bb10-7010-c010-ee1000000010
title: 第 10 課：迷你專案 2 — 預測客戶流失
slug: bai-10-mini-project-2-churn
description: 將監督學習應用於實際的分類問題，並從產品角度呈現結果。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 第 1 部分：監督學習基礎
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5862" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5862)"/>

  <!-- Decorations -->
  <g>
    <circle cx="766" cy="48" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="932" cy="54" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1098" cy="60" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="764" cy="66" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="72" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="168" x2="1100" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="198" x2="1050" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.2390923627308,96.5 955.2390923627308,139.5 918,161 880.7609076372692,139.5 880.7609076372692,96.50000000000001 918,75" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：迷你項目 2 — 流失預測</tspan>
      <tspan x="60" dy="42">顧客</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：監督學習基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

這是該系列的第一個小型項目分類。目標不僅僅是訓練流失模型，而是知道如何提出產品問題：預測誰要離開做什麼、將觸發什麼操作、哪些指標真正值得關注。

## 課程目標

- 制定了比較完整的分類工作流程。
- 建立基線，選擇指標，嘗試多個閾值。
- 從商業角度呈現結果。

## 問題背景

一家訂閱公司希望預測哪些客戶在未來 30 天內有離開的風險。如果您儘早知道，CS 或行銷團隊可以發送保留獎勵。

## 推薦程序

1.讀取並檢查資料。
2. 查看客戶流失率是否超標。
3. 建立一個簡單的基線。
4. 先訓練邏輯迴歸。
5.透過混淆矩陣、精確率、召回率、F1、ROC-AUC進行評估。
6.根據業務目標測試閾值。

## 功能建議

- 終身教職
- 每月費用
- 合約類型
- 支持門票
- 付款方式
- is_auto_renew

## 框架程式碼

~~~蟒蛇
從 sklearn.compose 導入 ColumnTransformer
從 sklearn.pipeline 導入管道
從 sklearn.preprocessing 導入 OneHotEncoder、StandardScaler
從 sklearn.impute 導入 SimpleImputer
從 sklearn.linear_model 導入 LogisticRegression
~~~

## 如何向利害關係人展示

不要只是說「模型達到 F1 = 0.71」。假設模型捕捉了即將流失的客戶的百分比，有多少客戶被錯誤警告，以及保留成本是否合理。

## 常見錯誤

- 資料超出類別時的準確性指示器。
- 不指定正在使用的閾值。
- 使用攪拌時間後出現的功能，導致洩漏。

## 練習練習

- 製作一本完整的筆記本來預測客戶流失。
- 選擇 2 個不同的門檻並比較假設的成本/效益。
- 將結論寫成一封簡短的電子郵件發送給 PM。

## 完成標準

- [ ] 具有清晰的基準、主要模型和指標。
- [ ] 有關於閾值的解釋。
- [ ] 從業務角度而非技術角度得出結論。

## 逐步練習（進階）

1. 設計具有明確預測視窗時間的流失目標變數。
2. 根據業務規則（基於規則）建立基準。
3. 訓練至少2個模型：Logistic + Tree-based。
4.根據假設的保留成本優化閾值。
5. 為業務團隊撰寫簡短的執行摘要。

## 應提交工件

- 帶管道的端到端筆記本。
- Markdown 文件總結了成本假設。
- 行動清單表：哪一組需要先介入。

## 自測題

- 流失標籤在哪一步可能會洩漏？
- 為什麼我們在 ML 模型之前需要一個基於規則的基準？
- 如何選擇哪個門檻更接近利潤目標？
