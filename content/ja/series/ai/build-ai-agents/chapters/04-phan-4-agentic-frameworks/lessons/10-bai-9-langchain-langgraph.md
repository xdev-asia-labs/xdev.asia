---
id: 019c9619-cc09-7009-d009-cc0900000009
title: 'レッスン 9: LangChain と LangGraph — ステートフル エージェント ワークフロー'
slug: bai-9-langchain-langgraph
description: >-
  LangChain チェーンから LangGraph グラフまで:
  ノード、エッジ、条件付きルーティング、状態管理。人間参加型の承認フローを備えた調査エージェントを構築します。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 4: エージェント フレームワーク'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'AI エージェントの構築: ゼロから本番環境まで'
  slug: build-ai-agents
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6295" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6295)"/>

  <!-- Decorations -->
  <g>
    <circle cx="925" cy="185" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="115" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="900" cy="80" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="45" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="950.9807621135332,110 950.9807621135332,140 925,155 899.0192378864668,140 899.0192378864668,110.00000000000001 925,95" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: LangChain と LangGraph — ステートフル</tspan>
      <tspan x="60" dy="42">エージェントのワークフロー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI エージェントの構築: ゼロから本番環境まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: エージェント フレームワーク</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

エージェントをゼロから構築するのは概念を理解するのに最適ですが、運用には **フレームワーク** が必要です。 LangGraph (LangChain チームによる) は、ステートフルなグラフベースのエージェント ワークフローに現在利用できる最も強力なフレームワークです。

---

## 1. LangChain と LangGraph の比較

| |ラングチェーン |ランググラフ |
|---|---|---|
|パラダイム |チェーン (リニア) |グラフ (循環) |
|状態 |無国籍 |ステートフル |
|こんな方に最適 |シンプルなパイプライン、RAG |複雑なエージェント、マルチステップ |
|制御フロー |シーケンシャル |条件付きルーティング |

## 2. LangGraph の基礎

```python
from langgraph.graph import StateGraph, MessagesState, START, END

def call_llm(state: MessagesState):
    response = model.invoke(state["messages"])
    return {"messages": [response]}

def use_tools(state: MessagesState):
    # Execute tool calls
    ...

# Build graph
graph = StateGraph(MessagesState)
graph.add_node("llm", call_llm)
graph.add_node("tools", use_tools)
graph.add_edge(START, "llm")
graph.add_conditional_edges("llm", should_use_tools, {"yes": "tools", "no": END})
graph.add_edge("tools", "llm")

agent = graph.compile()
```

---

## 概要

- LangGraph = エージェント ワークフローのステート マシン
- ノード = 関数、エッジ = 遷移、状態 = 共有データ
- 複雑なデシジョンツリーの条件付きルーティング
- 人間参加型の組み込みサポート
- 長時間実行されるワークフローの永続性

## 演習

1. LangGraphでリサーチエージェントを実装する
2.人間参加型の承認ステップを追加する
3. ツールが失敗した場合の再試行ロジックを実装する
4. 3 つ以上の条件分岐を持つエージェントを構築する

