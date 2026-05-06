---
id: 019d8b39-bb14-7014-c014-ee1400000014
title: 第 14 課：資料外洩與錯誤分析（必修）
slug: bai-14-data-leakage-error-analysis
description: 識別常見的洩漏，調查錯誤預測模式，並根據實際錯誤而不是猜測來計劃改進。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 第 2 部分：業界標準工作流程
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1852" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1852)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1002" cy="76" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="904" cy="178" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="806" cy="280" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="708" cy="122" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="610" cy="224" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="96" x2="1100" y2="176" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="126" x2="1050" y2="196" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="972.8467875173176,130.5 972.8467875173176,161.5 946,177 919.1532124826824,161.5 919.1532124826824,130.5 946,115" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第14課：資料外洩&錯誤分析（catch</tspan>
      <tspan x="60" dy="42">被迫）</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：業界標準工作流程</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

許多模型取得了不錯的成績，但無法在現實環境中生存，原因有一個很基本的原因：資料外洩。這篇文章非常重要，因為如果你在這裡弄錯了，之前所有漂亮的指標幾乎都毫無價值。

## 課程目標

- 識別常見的洩漏類型。
- 知道如何進行錯誤分析以了解模型的錯誤所在。
- 培養一種在相信分數之前先檢查模型的心態。

## 什麼是資料外洩？

當模型在預測時意外看到實際上不允許知道的資訊時，就會發生洩漏，例如，在分割之前對資料進行歸一化或使用目標時間之後的資料建立特徵。

## 疑似洩漏跡象

- 與專業直覺相比，結果過於美麗。
- 驗證分數非常高，但實際實施卻很差。
- 有些功能聽起來太熟悉了。

## 錯誤分析

訓練模型後，查看哪些模式預測錯誤最多，錯誤集中在哪些使用者群組，以及是否有任何模式與缺失資料、異常值或特殊細分相關。

## 快速入住流程

1. 檢查哪些功能僅在目標事件之後出現。
2. 檢查所有預處理是否都在進行中。
3. 查看最嚴重的錯誤和重複出現的錯誤群組。
4. 確認資料劃分在時間邏輯或使用者邏輯上是否正確。

## 常見錯誤

- 只要看看美麗的排行榜，就立刻相信它。
- 不要讀取幾十行實際錯誤資料。
- 忽略預測問題中的時間因素。

## 練習練習

- 建立自己的小洩漏範例並觀察分數異常增加。
- 返回並正確修復管道。
- 製作20個錯誤預測樣本的誤差分析表。

## 完成標準

- [ ] 偵測至少 3 種常見的洩漏類型。
- [ ] 養成查看真實錯誤樣本而不僅僅是查看分數的習慣。
- [ ] 知道為什麼分數好的模型可能不可用。

## 逐步練習（進階）

1. 建立資料時間軸來標記要素的建立時間。
2. 檢查所有特徵是否違反預測時間。
3. 消除可疑洩漏特徵後重新訓練模型。
4. 比較之前/之後的指標以量化洩漏影響。
5. 對前 30 個最錯誤的預測進行錯誤分析。

## 應提交工件

- 依時間軸排列的功能審核表。
- 報告洩漏發現和糾正措施。
- 主要錯誤組表及改進建議。

## 自測題

- 預處理型洩漏與洩漏目標型洩漏有何不同？
- 為什麼太漂亮的模特兒會成為危險訊號？
- 錯誤分析如何幫助選擇改進方向？
