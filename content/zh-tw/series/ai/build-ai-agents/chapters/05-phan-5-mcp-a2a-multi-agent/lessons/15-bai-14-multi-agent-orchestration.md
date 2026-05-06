---
id: 019c9619-cc14-7014-d014-cc1400000014
title: 第 14 課：多代理編排 — 架構與設計模式
slug: bai-14-multi-agent-orchestration
description: 編排模式：順序、平行、分層、叢集。主管代理與點對點。處理衝突、死鎖、錯誤傳播。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 13
section_title: 第 5 部分：MCP、A2A 和多代理系統
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5493" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5493)"/>

  <!-- Decorations -->
  <g>
    <circle cx="898" cy="84" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="696" cy="102" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="994" cy="120" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="792" cy="138" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1090" cy="156" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <polygon points="987.7749907475932,134.5 987.7749907475932,173.5 954,193 920.2250092524068,173.5 920.2250092524068,134.5 954,115" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：多元代理編排 — Ant</tspan>
      <tspan x="60" dy="42">架構與設計模式</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：MCP、A2A 和多代理系統</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

多智能體系統是人工智慧應用的未來。但協調多個代理比單一代理複雜得多。本文介紹了建構多代理系統時的設計模式和挑戰。

---

## 1. 編排模式

### 1.1 順序（管道）
```
Agent A → Agent B → Agent C → Output
```

### 1.2 並行（扇出/扇入）
```
           ┌→ Agent B ─┐
Agent A ──►├→ Agent C ─┤──► Agent E
           └→ Agent D ─┘
```

### 1.3 層級（主管）
```
         Supervisor
        /    |     \
    Agent A  Agent B  Agent C
```

### 1.4 Swarm（去中心化）
```
Agent A ←→ Agent B
  ↕           ↕
Agent C ←→ Agent D
```

## 2. 編碼團隊範例

```python
# PM analyzes requirements → Developer writes code → Reviewer reviews
pm_agent = Agent(role="Product Manager", ...)
dev_agent = Agent(role="Senior Developer", ...)  
reviewer_agent = Agent(role="Code Reviewer", ...)
```

---

## 總結

- 4 種模式：順序、平行、分層、集群
- 最受歡迎的生產主管模式
- 處理衝突：優先權佇列、投票、升級
- 錯誤傳播：優雅失敗，無級聯

## 練習

1. 實作編碼團隊：PM → Developer → Reviewer
2. 建構平行研究系統（3個智能體同時搜尋）
3.用LangGraph實現supervisor模式
4. 處理2個代理互相等待時的死鎖場景

