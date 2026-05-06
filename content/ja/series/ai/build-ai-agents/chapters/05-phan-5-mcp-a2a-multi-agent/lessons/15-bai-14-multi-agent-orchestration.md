---
id: 019c9619-cc14-7014-d014-cc1400000014
title: 'レッスン 14: マルチエージェント オーケストレーション — アーキテクチャとデザイン パターン'
slug: bai-14-multi-agent-orchestration
description: >-
  オーケストレーション パターン: シーケンシャル、パラレル、階層、スウォーム。スーパーバイザ
  エージェントとピアツーピア。競合、デッドロック、エラーの伝播を処理します。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 5: MCP、A2A、およびマルチエージェント システム'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'AI エージェントの構築: ゼロから本番環境まで'
  slug: build-ai-agents
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI と ML — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: マルチエージェント オーケストレーション — Ant</tspan>
      <tspan x="60" dy="42">アーキテクチャとデザインパターン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI エージェントの構築: ゼロから本番環境まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: MCP、A2A、およびマルチエージェント システム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

マルチエージェント システムは AI アプリケーションの未来です。ただし、複数のエージェントを調整することは、単一のエージェントよりもはるかに複雑です。この記事では、マルチエージェント システムを構築する際の設計パターンと課題について説明します。

---

## 1. オーケストレーション パターン

### 1.1 シーケンシャル (パイプライン)
```
Agent A → Agent B → Agent C → Output
```

### 1.2 並列 (ファンアウト/ファンイン)
```
           ┌→ Agent B ─┐
Agent A ──►├→ Agent C ─┤──► Agent E
           └→ Agent D ─┘
```

### 1.3 階層 (スーパーバイザー)
```
         Supervisor
        /    |     \
    Agent A  Agent B  Agent C
```

### 1.4 スウォーム (分散型)
```
Agent A ←→ Agent B
  ↕           ↕
Agent C ←→ Agent D
```

## 2. コーディングチームの例

```python
# PM analyzes requirements → Developer writes code → Reviewer reviews
pm_agent = Agent(role="Product Manager", ...)
dev_agent = Agent(role="Senior Developer", ...)  
reviewer_agent = Agent(role="Code Reviewer", ...)
```

---

## 概要

- 4 パターン: シーケンシャル、パラレル、階層、スウォーム
- 実稼働環境で最も人気のあるスーパーバイザー パターン
- 競合の処理: 優先キュー、投票、エスカレーション
- エラーの伝播: 正常に失敗し、カスケードはありません

## 演習

1. コーディングチームの実装: PM → 開発者 → レビュー担当者
2. 並行調査システムの構築（3人のエージェントが同時に調査）
3. LangGraph を使用してスーパーバイザー パターンを実装する
4. 2 つのエージェントがお互いを待機している場合のデッドロック シナリオを処理する

