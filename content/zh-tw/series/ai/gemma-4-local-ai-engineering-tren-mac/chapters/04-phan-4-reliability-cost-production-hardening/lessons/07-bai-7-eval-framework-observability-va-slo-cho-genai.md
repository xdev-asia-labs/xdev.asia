---
id: 01970001-bb07-7007-d007-bb0700001007
title: '課程 7：GenAI 的 Eval Framework、Observability 與 SLO'
slug: bai-7-eval-framework-observability-va-slo-cho-genai
description: >-
  設計 golden set、線上回饋迴路、延遲/接地性/成本指標，
  定義 AI 功能的 SLO。
duration_minutes: 95
is_free: true
video_url: null
sort_order: 0
section_title: "第四部分：可靠性、成本與生產環境強化"
course:
  id: 01970001-aa11-7011-b011-aa1100001011
  title: Gemma 4 本地 AI 工程實戰 on Mac
  slug: gemma-4-local-ai-engineering-tren-mac
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7071" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-7071)"/>
  <g>
    <circle cx="740" cy="70" r="22" fill="#fb923c" opacity="0.09"/>
    <circle cx="900" cy="200" r="28" fill="#fb923c" opacity="0.07"/>
    <circle cx="1020" cy="130" r="18" fill="#fb923c" opacity="0.11"/>
    <circle cx="1100" cy="270" r="14" fill="#fb923c" opacity="0.13"/>
    <line x1="600" y1="85" x2="1100" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="115" x2="1050" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI &amp; ML — L0</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">課程 7：GenAI 的 Eval Framework、</tspan>
      <tspan x="60" dy="42">Observability 與 SLO</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Gemma 4 本地 AI 工程實戰 on Mac</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第四部分：可靠性、成本與生產環境強化</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 前言

本地 AI 技術棧能運作只是開始。您需要衡量品質、偵測劣化，並以 SLO 向團隊提供保證。

## 1. 核心指標

GenAI 系統需要的四個核心指標：

- 延遲（p50/p95/p99）
- 接地性（引用正確率）
- Token 成本（每次請求估算）
- 錯誤率（schema 失敗、逾時）

## 2. 建構 Golden Set

Golden set 包含：

- 20-50 個標準問題
- 每個問題的預期回答要素
- 自動化評分腳本

定期執行以追蹤品質趨勢。

## 3. 線上回饋迴路

使用者信號：

- 👍/👎 按鈕
- 「回答錯誤」回報
- 重新生成請求

將這些信號匯聚到儀表板，及早偵測品質劣化。

## 4. 定義 SLO

AI 功能的 SLO 範例：

| 指標 | 目標 | 衡量期間 |
|------|------|---------|
| 延遲 p95 | < 5 秒 | 7 天 |
| 接地性 | > 85% | 7 天 |
| 可用性 | > 99% | 30 天 |
| 錯誤率 | < 5% | 7 天 |

也請定義未達 SLO 時的升級程序。

## 5. 儀表板設計

最少應包含的面板：

- 請求量（時間序列）
- 延遲分佈
- 各模型錯誤率
- 回饋分數趨勢
- 使用中的模型版本

## Demo 程式碼

Eval framework 執行結果 — 分數摘要：

![Eval 分數](/images/blog/gemma4-series-demo/07-eval-scores.png)

> 原始碼：[06-eval-framework](https://github.com/xdev-asia-labs/gemma-4-local-ai-engineering-on-mac/tree/main/06-eval-framework)

## 總結
