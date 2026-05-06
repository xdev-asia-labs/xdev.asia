---
id: 019c9619-cc13-7013-d013-cc1300000013
title: 第 13 課：代理間 (A2A) 協定 — 代理之間相互通信
slug: bai-13-a2a-protocol
description: Google A2A 協定：代理卡、能力發現、任務生命週期、代理間通訊。比較 A2A 與 MCP。演示來自兩個不同框架的兩個代理的協作。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 第 5 部分：MCP、A2A 和多代理系統
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2469" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2469)"/>

  <!-- Decorations -->
  <g>
    <circle cx="603" cy="179" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="606" cy="142" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="609" cy="105" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="612" cy="68" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="615" cy="31" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="69" x2="1100" y2="149" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="99" x2="1050" y2="169" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1007.1051177665153,147 1007.1051177665153,191 969,213 930.8948822334847,191 930.8948822334847,147 969,125" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：代理到代理 (A2A) 協定 —</tspan>
      <tspan x="60" dy="42">代理互相交談</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：MCP、A2A 和多代理系統</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

MCP 將代理程式連接到**工具/資料**。但是，當您需要代理連接到**另一個代理**時該怎麼辦？ **A2A（代理到代理協議）** — 由 Google 開發 — 解決了這個問題。

---

## 1. A2A 與 MCP

| | MCP| A2A |
|---|---|---|
|連線 |代理 ↔ 工具/資料 |代理 ↔ 代理 |
|型號|客戶端/伺服器 |點對點|
|發現 |工具模式|代理卡|
|使用案例 |讀取DB，呼叫API |在代理之間委派任務 |

## 2. 代理卡

```json
{
  "name": "Research Agent",
  "description": "Tìm kiếm và tổng hợp thông tin",
  "capabilities": ["web_search", "summarize", "translate"],
  "endpoint": "https://research-agent.example.com/a2a",
  "input_schema": {...},
  "output_schema": {...}
}
```

## 3.跨框架通信

A2A 允許 LangGraph 中的代理程式與 CrewAI、AutoGen 或任何其他框架中的代理程式進行通訊。

---

## 總結

- A2A = 代理間通訊協議
- 代理卡 = 用於能力發現的自我描述
- MCP + A2A = 完全連接（工具+代理）
- 跨框架互通性

## 練習

1. 為3個不同的代理程式建立代理卡
2. 實作簡單的A2A伺服器
3. 示範2個框架的2個代理人進行通信
4. 比較：直接調用與透過A2A協定調用

