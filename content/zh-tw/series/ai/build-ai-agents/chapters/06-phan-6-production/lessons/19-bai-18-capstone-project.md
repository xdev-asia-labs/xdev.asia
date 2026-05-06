---
id: 019c9619-cc18-7018-d018-cc1800000018
title: 第 18 課：Capstone 專案 — 建立完整的 AI 代理團隊
slug: bai-18-capstone-project
description: 專案摘要：使用 RAG、MCP 工具、記憶體、護欄、可觀察性建立完整的多代理系統，並部署到生產。程式碼審查和最佳實踐總結。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 17
section_title: 第 6 部分：生產與實際部署
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1432" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1432)"/>

  <!-- Decorations -->
  <g>
    <circle cx="998" cy="204" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="896" cy="262" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="794" cy="60" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="692" cy="118" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1090" cy="176" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="104" x2="1100" y2="184" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="134" x2="1050" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="937.7749907475932,84.5 937.7749907475932,123.5 904,143 870.2250092524068,123.5 870.2250092524068,84.50000000000001 904,65" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：Capstone 專案 — 建構 AI 代理</tspan>
      <tspan x="60" dy="42">完整的團隊</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：生產與實際部署</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

這是總結——您將應用您所學到的一切，從頭到尾建立一個**完整的多代理系統**。

---

## 1. 專案：人工智慧研究與內容團隊

### 架構

```
User Request
    │
    ▼
┌─────────────┐
│  Supervisor │ (LangGraph)
│   Agent     │
└──────┬──────┘
       │
  ┌────┼────┐
  ▼    ▼    ▼
┌───┐┌───┐┌───┐
│ R ││ W ││ E │
│ e ││ r ││ d │
│ s ││ i ││ i │
│ e ││ t ││ t │
│ a ││ e ││ o │
│ r ││ r ││ r │
│ c │└───┘└───┘
│ h │
│ e │
│ r │──── MCP: Web Search
│   │──── MCP: Database
│   │──── RAG: Knowledge Base
└───┘
```

### 元件清單

- [ ] Supervisor 代理程式（LangGraph 編排）
- [ ] 研究代理（網路搜尋 + RAG + 記憶體）
- [ ] 作家代理（內容生成）
- [ ] 編輯代理（審稿+品質檢查）
- [ ] MCP 伺服器（網路搜尋、資料庫）
- [ ] 記憶系統（短期+長期）
- [ ] Guardrails（輸入驗證、輸出過濾）
- [ ] 可觀測性（LangSmith 追蹤）
- [ ] FastAPI 包裝器 + WebSocket
- [ ] Docker 部署
- [ ] 評估套件（黃金測試案例）

## 2. 逐步實施

### 第 1 階段：核心代理程式（2 小時）
- 實施 3 個角色明確的代理
- 定義工具模式
- 建立基本編排

### 第 2 階段：基礎設施（1 小時）
- RAG知識庫
- 記憶系統
- MCP伺服器連接

### 第 3 階段：安全與品質（30 分鐘）
- 護欄
- 可觀察性
- 基本評價

### 第 4 階段：部署（30 分鐘）
- FastAPI 包裝器
- 碼頭工人
- 部署

---

## 3. 最佳實務總結

### 架構
- 單一職責：每個代理人只做一件好事
- 複雜編排的主管模式
- 鬆散耦合：代理透過訊息進行通信，而不是共享狀態

### 安全
- 永遠不要相信使用者輸入
- 預設唯讀工具
- 關鍵行動的人機參與
- 成本預算

### 效能
- 盡可能緩存回應
- 平行工具執行
- 代幣預算管理
- 模型選擇：用於簡單任務的廉價模型

---

## 🎉 恭喜！

您已完成**建立 AI 代理：從零到生產**系列！從這裡，您可以：

1. **建構工作代理**：自動化研究、內容、編碼任務
2. **貢獻開源**：搭建MCP伺服器、代理工具
3. **建構產品**：由人工智慧代理提供支援的 SaaS 產品
4. **繼續學習**：探索 OpenAI Swarm、AutoGen、DSPy

## 最後練習

1. 完成頂點專案的所有組件
2.部署到雲端並分享鏈接
3. 寫一篇關於建構 AI 代理經驗的部落格文章
4. 選擇一個現實世界的問題並建立一個代理來解決它

