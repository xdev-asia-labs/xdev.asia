---
id: 019c9619-cc12-7012-d012-cc1200000012
title: 'レッスン 12: モデル コンテキスト プロトコル (MCP) — エージェントの接続標準'
slug: bai-12-mcp
description: >-
  MCPとは何ですか?なぜ標準化が必要なのでしょうか?クライアント/サーバー アーキテクチャ、検出ツール、機能ネゴシエーション。データベース、GitHub
  API、ファイルシステムを接続するMCPサーバーを構築します。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 5: MCP、A2A、およびマルチエージェント システム'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'AI エージェントの構築: ゼロから本番環境まで'
  slug: build-ai-agents
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI と ML — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: モデル コンテキスト プロトコル (MCP) —</tspan>
      <tspan x="60" dy="42">Agentの接続規格</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI エージェントの構築: ゼロから本番環境まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: MCP、A2A、およびマルチエージェント システム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**モデル コンテキスト プロトコル (MCP)** — Anthropic によって開発された — は、エージェントが一貫した方法であらゆるデータ ソースまたはツールに接続するのに役立つオープン スタンダードです。ツールごとにカスタム統合を作成する代わりに、MCP サーバーを一度実装すれば、すべての MCP 互換クライアントがそれを使用できるようになります。

---

## 1. MCP アーキテクチャ

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  MCP Client  │◄───►│  MCP Server  │◄───►│  Data Source  │
│  (Agent/IDE) │     │  (Your code) │     │  (DB/API/FS) │
└──────────────┘     └──────────────┘     └──────────────┘
```

## 2. MCP サーバーを構築する

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

## 概要

- MCP = AI 用 USB-C — ユニバーサル接続規格
- クライアント/サーバー アーキテクチャ: エージェントはクライアント、ツールはサーバー
- ツールの検出: エージェントはどのツールが利用可能であるかを認識します。
- エコシステム: 1000 以上の MCP サーバーが利用可能

## 演習

1. SQLite データベース用の MCP サーバーを構築する
2. GitHub API 用の MCP サーバーの構築 (リポジトリの検索、ファイルの読み取り)
3. エージェントを 3 つ以上の MCP サーバーに同時に接続する
4. カスタム ツールと MCP ツールの比較: 開発経験

