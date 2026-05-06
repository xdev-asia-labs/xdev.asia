---
id: 019d8b36-bb14-7014-c014-ee1400000014
title: 第 14 課：Capstone — 電子商務推薦引擎
slug: bai-14-capstone-recsys
description: 專案概要：建構端到端的電子商務推薦引擎。兩塔檢索+重新排序+A/B測試+部署。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 13
section_title: 第 4 部分：RecSys 生產 — 部署與擴展
course:
  id: 019d8b36-aa01-7001-b001-ff0700000001
  title: 推薦系​​統：從基礎到生產
  slug: he-thong-goi-y-recommendation-systems
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8605" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8605)"/>

  <!-- Decorations -->
  <g>
    <circle cx="692" cy="206" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="784" cy="178" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="876" cy="150" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="968" cy="122" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="94" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="951.507041555162,95.5 951.507041555162,136.5 916,157 880.492958444838,136.5 880.492958444838,95.50000000000001 916,75" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：頂點 — 電子商務</tspan>
      <tspan x="60" dy="42">推薦引擎</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">推薦系統：從基礎到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：RecSys 生產 — 部署與擴展</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Capstone 專案將本系列中學到的所有知識應用於真正的端到端問題。

---

## 專案要求

### 描述
專案概要：建構端到端的電子商務推薦引擎。兩塔檢索+重新排序+A/B測試+部署。

### 可交付成果

|項目 |描述 |重量 |
|--------|-------------|--------|
|程式碼|乾淨、記錄的 GitHub 儲存庫 | 30% |
|報告|架構決策、結果分析 | 30% |
|演示 |互動式演示（網頁應用程式或影片）| 20% |
|文檔 |自述文件、API 文件、部署指南 | 20% |

---

## 推薦管道

1. **資料收集和預處理**：收集和處理數據
2. **模型開發**：建構與訓練模型
3. **評估**：使用適當的指標進行評估
4. **優化**：優化效能和成本
5. **部署**：部署到生產環境
6. **監控**：設定監控和警報

---

## 總結

恭喜您完成系列！將您的知識應用到實際項目中。
