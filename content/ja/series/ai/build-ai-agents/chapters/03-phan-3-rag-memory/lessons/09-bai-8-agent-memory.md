---
id: 019c9619-cc08-7008-d008-cc0800000008
title: 'レッスン 8: エージェントの記憶 — 短期、長期、およびエピソード的'
slug: bai-8-agent-memory
description: >-
  メモリの種類: 会話バッファ、要約メモリ、エンティティ メモリ。 DB
  ベクトルを使用して長期メモリを実装します。エピソード記憶により、エージェントは経験から「学習」できます。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 3: RAG とメモリ — エージェントにメモリを与える'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'AI エージェントの構築: ゼロから本番環境まで'
  slug: build-ai-agents
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9194" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9194)"/>

  <!-- Decorations -->
  <g>
    <circle cx="713" cy="229" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="826" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="939" cy="275" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1052" cy="168" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="665" cy="61" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="99" x2="1100" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="129" x2="1050" y2="199" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1078.444863728671,232 1078.444863728671,266 1049,283 1019.555136271329,266 1019.555136271329,232 1049,215" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI と ML — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: エージェントの記憶 — 短期的、</tspan>
      <tspan x="60" dy="42">長期的および一時的なもの</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI エージェントの構築: ゼロから本番環境まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: RAG とメモリ — エージェントにメモリを与える</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

記憶はエージェントを「金魚」（会話のたびに忘れる）から真のアシスタントに変えます。好みを覚え、間違いから学び、時間をかけて知識を蓄積します。

---

## 1. メモリの種類

### 1.1 短期記憶 (作業記憶)
- 現在のセッションでの会話履歴
- コンテキストウィンドウによる制限

### 1.2 長期記憶
- セッション間で永続的
- ベクターDBまたはデータベースに保存
- 例: ユーザーの好み、重要な事実

### 1.3 エピソード記憶
- 「エピソード」を覚えておいてください — エージェントがタスクを完了した回数
- エージェントが経験から学ぶのを支援します
- 「前回ユーザーが同じことを尋ねたので、これを実行したらうまくいきました。」

## 2. 実装

```python
class AgentMemory:
    def __init__(self):
        self.short_term = []
        self.long_term = chromadb.Collection("long_term")
        self.episodes = chromadb.Collection("episodes")
    
    def remember(self, content, memory_type="long_term"):
        if memory_type == "long_term":
            self.long_term.add(documents=[content], ...)
    
    def recall(self, query, n=5):
        return self.long_term.query(query_texts=[query], n_results=n)
    
    def save_episode(self, task, steps, outcome):
        episode = f"Task: {task}\nSteps: {steps}\nOutcome: {outcome}"
        self.episodes.add(documents=[episode], ...)
```

---

## 概要

- 3 種類の記憶: 短期 (会話)、長期 (事実)、エピソード (経験)
- Vector DB は長期記憶とエピソード記憶のバックボーンです
- 要約記憶により、長い会話をコンテキスト ウィンドウに収めるのに役立ちます
- エピソード記憶は、エージェントが時間の経過とともに改善するのに役立ちます

## 演習

1. 完全な AgentMemory クラスを実装する
2. セッション全体でユーザー設定を「記憶」するエージェントを構築する
3. エピソード記憶を実装すると、テスト エージェントは改善されますか?
4. 比較: 長い会話のバッファ メモリと要約メモリ

