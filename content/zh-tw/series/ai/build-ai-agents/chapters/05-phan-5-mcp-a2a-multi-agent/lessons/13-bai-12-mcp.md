---
id: 019c9619-cc12-7012-d012-cc1200000012
title: 第 12 課：模型情境協定 (MCP) — 代理人的連結標準
slug: bai-12-mcp
description: 什麼是MCP，為什麼需要標準化？客戶端/伺服器架構、發現工具、能力協商。建構MCP Server連接資料庫、GitHub API、檔案系統。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: 第 5 部分：MCP、A2A 和多代理系統
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6856" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6856)"/>

  <!-- Decorations -->
  <g>
    <circle cx="629" cy="157" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="658" cy="286" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="687" cy="155" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="716" cy="284" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="745" cy="153" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="67" x2="1100" y2="147" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="97" x2="1050" y2="167" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1003.3730669589464,146 1003.3730669589464,188 967,209 930.6269330410536,188 930.6269330410536,146 967,125" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 人工智慧與機器學習 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：模型上下文協定 (MCP) —</tspan>
      <tspan x="60" dy="42">Agent連接標準</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：MCP、A2A 和多代理系統</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**模型上下文協定 (MCP)** — 由 Anthropic 開發 — 是一個開放標準，可協助代理程式以一致的方式連接到任何資料來源或工具。您無需為每個工具編寫自訂集成，只需實施一次 MCP 伺服器，所有 MCP 相容客戶端都可以使用它。

---

## 1.MCP架構

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  MCP Client  │◄───►│  MCP Server  │◄───►│  Data Source  │
│  (Agent/IDE) │     │  (Your code) │     │  (DB/API/FS) │
└──────────────┘     └──────────────┘     └──────────────┘
```

## 2. 搭建MCP伺服器

```python
from mcp.server import Server
from mcp.types import Tool

server = Server("my-tools")

@server.tool("query_database")
async def query_db(sql: str) -> str:
    """Execute read-only SQL query."""
    result = await db.execute(sql)
    return json.dumps(result)

@server.tool("search_github")
async def search_github(query: str, repo: str) -> str:
    """Search code in a GitHub repository."""
    ...
```

---

## 總結

- MCP = USB-C for AI — 通用連接標準
- 客戶端/伺服器架構：代理是客戶端，工具是伺服器
- 工具發現：代理商知道哪些工具可用
- 生態系：1000+ MCP 伺服器可用

## 練習

1. 為SQLite資料庫建置MCP Server
2. 為 GitHub API 建立 MCP 伺服器（搜尋儲存庫、讀取檔案）
3.同時連接agent到3+MCP伺服器
4. 比較自訂工具與 MCP 工具：開發經驗

