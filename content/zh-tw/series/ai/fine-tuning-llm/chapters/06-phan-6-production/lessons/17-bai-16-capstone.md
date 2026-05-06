---
id: 019c9619-dd16-7016-e016-dd1600000016
title: 第 16 課：Capstone — 針對實際用例微調模型
slug: bai-16-capstone
description: 總結項目：選擇用例→收集資料→在Gemini + LoRA上微調→比較評估→部署到生產。端到端的工作流程。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 15
section_title: 第 6 部分：生產和最佳實踐
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-114" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-114)"/>

  <!-- Decorations -->
  <g>
    <circle cx="708" cy="194" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="816" cy="162" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="924" cy="130" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1032" cy="98" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="640" cy="66" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="234" x2="1100" y2="314" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="264" x2="1050" y2="334" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1009.1147367097487,169.5 1009.1147367097487,198.5 984,213 958.8852632902513,198.5 958.8852632902513,169.5 984,155" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：Capstone — 微調模型以供使用</tspan>
      <tspan x="60" dy="42">實際案例</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：生產和最佳實踐</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

總結如下—您將從 A → Z 建立一個**端到端微調專案**。

---

## 1. 項目：越南語代碼審查助理

### 架構
```
┌────────────────────────────────────────────────┐
│           FINE-TUNING PIPELINE                  │
│                                                │
│  Data Collection  → Data Cleaning → Training   │
│  (GitHub PRs,       (Dedup,         (Gemini    │
│   code reviews)     quality score)   Flash SFT)│
│                                                │
│  Evaluation → A/B Testing → Production Deploy  │
│  (ROUGE,      (Base vs FT,   (Vertex AI       │
│   LLM-Judge,   100 queries)   Endpoint)        │
│   Golden Set)                                  │
└────────────────────────────────────────────────┘
```

### 元件清單
- [ ] 選擇用例並定義成功指標
- [ ] 收集200+訓練實例
- [ ] 資料清理與品質評分
- [ ] 將 Gemini Flash (Vertex AI) 微調
- [ ] 對開源進行微調（LoRA，用於比較）
- [ ] 多層評估管道
- [ ] 災難性遺忘檢查
- [ ] A/B 測試基礎與微調
- [ ] 成本分析與投資報酬率報告
- [ ] 部署生產端點
- [ ] 監控設定

## 2. 一步一步

### 第 1 階段：資料（2-4 小時）
- 收集 200 多個範例
- 清理、格式化、分割 (80/10/10)
- 品質審查隨機20個樣品

### 第 2 階段：培訓（1-2 小時）
- 在 Vertex AI 上微調 Gemini Flash
- 微調 LLaMA с LoRA（比較）
- 3 個實驗：第 2、3、5 紀元

### 第 3 階段：評估（2-3 小時）
- 自動化指標：ROUGE、BERTScore
- 法學碩士法官：50 個測試案例
- 黃金測試集：30 個精選案例
- 災難性遺忘：20 個一般問題

### 第 4 階段：製作（1 小時）
- 部署最佳模型
- 監控設定
- 成本分析報告

---

## 3. 最佳實務總結

```
✅ DO:
- Start with prompt engineering (free!)
- Invest 70% time in data quality
- Use multi-layer evaluation
- Version control everything
- Calculate ROI before and after
- Monitor in production

❌ DON'T:
- Fine-tune without trying PE/RAG first
- Use raw, unclean data
- Evaluate by "vibes" — use metrics
- Ignore catastrophic forgetting
- Skip A/B testing
- Forget about ongoing maintenance cost
```

---

## 🎉 恭喜！

您已完成**微調法學碩士：人工智慧調優的藝術**！您可以：

1. **正確的決定**：微調、RAG 與即時工程
2. **在3個平台上微調**：Google Gemini、OpenAI、LoRA開源
3. **科學評估**：BLEU、ROUGE、BERTScore、LLM-as-Judge、Human Eval
4. **成本計算**：投資報酬率計算器、預算規劃、成本最佳化
5. **部署生產**：監控、A/B 測試、偏差檢測

## 最後練習

1. 完成端到端頂點項目
2. 撰寫包含特定指標的評估報告（3頁以上）
3. 發布模型或與社群分享研究結果
4. 確定下一個需要微調的用例

