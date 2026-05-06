---
id: 019c9619-cc13-7013-d013-cc1300000013
title: 'レッスン 13: エージェント間 (A2A) プロトコル — エージェントは相互に通信します'
slug: bai-13-a2a-protocol
description: >-
  Google A2A プロトコル: エージェント カード、機能検出、タスクのライフサイクル、エージェント間通信。 A2A と MCP を比較します。 2
  つの異なるフレームワークの 2 つのエージェントが連携するデモを行います。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 5: MCP、A2A、およびマルチエージェント システム'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'AI エージェントの構築: ゼロから本番環境まで'
  slug: build-ai-agents
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI と ML — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: エージェント間 (A2A) プロトコル —</tspan>
      <tspan x="60" dy="42">エージェント同士が会話する</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI エージェントの構築: ゼロから本番環境まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: MCP、A2A、およびマルチエージェント システム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

MCP はエージェントを **tools/data** に接続します。しかし、エージェントを**別のエージェント**に接続する必要がある場合はどうでしょうか? Google によって開発された **A2A (エージェント間プロトコル)** は、この問題を解決します。

---

## 1. A2A 対 MCP

| | MCP | A2A |
|---|---|---|
|接続 |エージェント ↔ ツール/データ |エージェント ↔ エージェント |
|モデル |クライアント/サーバー |ピアツーピア |
|発見 |ツールスキーマ |エージェントカード |
|使用例 | DBを読んでAPIを呼び出す |エージェント間でタスクを委任する |

## 2. エージェントカード

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

## 3. フレームワーク間の通信

A2A を使用すると、LangGraph のエージェントが CrewAI、AutoGen、またはその他のフレームワークのエージェントと通信できるようになります。

---

## 概要

- A2A = エージェント間通信用のプロトコル
- エージェント カード = 機能発見の自己説明
- MCP + A2A = 完全な接続 (ツール + エージェント)
- フレームワーク間の相互運用性

## 演習

1. 3 人の異なるエージェントのエージェント カードを作成する
2. シンプルなA2Aサーバーを実装する
3. 2 つのフレームワークの 2 つのエージェントが通信するデモ
4. 比較: 直接通話と A2A プロトコル経由

