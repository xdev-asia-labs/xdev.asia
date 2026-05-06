---
id: 019c9619-dd15-7015-e015-dd1500000015
title: 第 15 課：常見陷阱與故障排除
slug: bai-15-common-pitfalls
description: 微調時的十大錯誤：災難性遺忘、過度擬合、資料外洩、評估差距。調試技術。恢復策略。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 第 6 部分：生產和最佳實踐
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6890" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6890)"/>

  <!-- Decorations -->
  <g>
    <circle cx="805" cy="225" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1010" cy="30" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="715" cy="95" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="920" cy="160" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="625" cy="225" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="115" x2="1100" y2="195" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="145" x2="1050" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="990.9807621135332,150 990.9807621135332,180 965,195 939.0192378864668,180 939.0192378864668,150 965,135" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 人工智慧與機器學習 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：常見陷阱與故障排除</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：生產和最佳實踐</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

微調很容易開始，但**容易出錯**。本文介紹了 10 個最常見的陷阱以及如何解決它們。

---

## 十大陷阱

### 1. 災難性遺忘
**症狀**：模型擅長新任務，但「忘記」舊任務
**修復**：降低學習率，更少的時期，向資料集中添加一般範例

### 2. 過度擬合
**症狀**：訓練損失減少，但驗證損失增加
**修復**：新增資料、正規化、提前停止、減少紀元

### 3. 資料外洩
**症狀**：評估分數非常高，但生產品質很差
**修復**：確保訓練/測試之間沒有重疊，使用時間分割

### 4. 資料品質差
**症狀**：模型「學習」不正確，因為範例是錯誤的
**修復**：手動審查隨機樣本、品質評分管道

### 5. 錯誤的粒度
**症狀**：對任務微調太寬泛或太窄
**修復**：專注於特定行為，不要試圖教導“一切”

### 6. 評估不足
**症狀**：“看起來不錯”，但沒有具體指標
**修復**：多層評估管道（第 13 課）

### 7. 忽略基本模型功能
**症狀**：對運作良好的基本模型進行微調
**修復**：始終先對基本模型進行基準測試

### 8. 太多紀元
**症狀**：模型回答“陳詞濫調”，重複訓練範例
**修復**：監控損失驗證，在損失穩定時停止

### 9. 成本驚喜
**症狀**：訓練/推理費用意外高
**修復**：先計算成本（第 3 課），設定預算警報

### 10. 無版本控制
**症狀**：「哪種型號版本最好？」 — 不知道
**修復**：版本控制資料集+模型+評估結果

---

## 總結

- 微調如果不繫統的話很容易出錯
- 在微調之前始終對基本模型進行基準測試
- 多層評估可以防止大多數陷阱
- 版本控制一切：資料、模型、配置、評估結果

## 練習

1. 故意製造過度擬合（20 epoch）→觀察症狀
2. 為每個訓練作業建立飛行前檢查表
3. 實施模型版本控制系統
4.記錄你遇到的3個陷阱（如果有的話）

