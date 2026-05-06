---
id: 019d8b39-bb24-7024-c024-ee2400000024
title: 第 24 課：Capstone — 端對端 ML 專案 + 演示
slug: bai-24-capstone-ml-end-to-end
description: 依照以下標準完成專案：基準 -> 管道 -> 調整 -> 評估 -> API -> 監控 -> 一頁業務報告。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 23
section_title: 第 4 部分：生產、可解釋性和頂點
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7565" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7565)"/>

  <!-- Decorations -->
  <g>
    <circle cx="665" cy="265" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="730" cy="170" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="795" cy="75" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="860" cy="240" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="925" cy="145" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="195" x2="1100" y2="275" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="225" x2="1050" y2="295" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1020.9807621135332,180 1020.9807621135332,210 995,225 969.0192378864668,210 969.0192378864668,180 995,165" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 人工智慧與機器學習 — 第 23 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 24 課：Capstone — 端對端 ML 專案 +</tspan>
      <tspan x="60" dy="42">示範</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：生產、可解釋性和頂點</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 課程目標

- 根據明確的規則完成端到端的機器學習項目
- 從技術和業務角度展示成果
- 準備作品集以備面試

## 提交清單

- [ ] 問題描述、指標與基線
- [ ] 預處理管道+可重現的訓練模型
- [ ] 驗證與錯誤分析結果
- [ ] 有意義的可解釋性（SHAP/排列）
- [ ] 推理API處於活動狀態並且有運行指令
- [ ] 監控計畫（漂移、再訓練、警報）
- [ ] 為利害關係人提供一頁報告

## 頂點評分標準（100 分）

- 正確的問題定義與指標：10
- 資料品質與預處理：15
- 基線和系統改進：15
- 模型評估+CV+調整：20
- 錯誤分析+結果解讀：15
- 發球+重置+運行指令：15
- 監控/再培訓+業務報告：10

## 實作說明

1. 選擇特定用例（客戶流失、詐欺、需求預測、定價）。
2. 在使用複雜模型之前使用簡單的基線。
3.只從一開始就優化設定的指標，不要中途改變指標。
4、將所有預處理裝入管路內，避免洩漏。
5. 撰寫一個簡短的自述文件：如何在部署後進行訓練、評估、服務和監控。

## 預期輸出

您有一個完整的專案可以包含在您的履歷/作品集和麵試期間的演示中。

## 建議的頂點提交路線

1. 結論和可衡量的成功標準。
2. 基線引腳、主要度量集和輔助度量集。
3.完整的流水線+錯誤分析報告。
4. 有一個最小的推理演示（批次或 API）。
5. 依照100分標準提交最終報告。

## 需要工件

- 資料集卡描述資料和風險。
- 模型卡描述了使用範圍、限制和公平性說明。
- Repo 有重新運行整個過程的說明。

## 提交前自我評估

- 結果可以在另一台機器上重現嗎？
- 是否透明地說明了洩漏或偏見的風險？
- 投產後是否有監測計畫？
