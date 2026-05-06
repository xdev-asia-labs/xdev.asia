---
id: 019c9619-cc16-7016-d016-cc1600000016
title: 'レッスン 16: 可観測性と評価 — エージェントが「考えている」ことを監視する'
slug: bai-16-observability-evaluation
description: >-
  LangSmith、Langfuse を使用してエージェントの決定を追跡します。ロギング、メトリクス、コスト追跡。評価:
  LLM-as-a-Judge、ゴールデン テスト セット、人間による評価。 A/B テスト エージェントのプロンプト。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 6: 本番環境と実際のデプロイメント'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'AI エージェントの構築: ゼロから本番環境まで'
  slug: build-ai-agents
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2825" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2825)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1023" cy="239" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="946" cy="222" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="869" cy="205" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="792" cy="188" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="171" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="229" x2="1100" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="259" x2="1050" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.1051177665153,107 967.1051177665153,151 929,173 890.8948822334847,151 890.8948822334847,107.00000000000001 929,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI と ML — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 16: 可観測性と評価 — による</tspan>
      <tspan x="60" dy="42">エージェントが「考えている」ことを観察する</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI エージェントの構築: ゼロから本番環境まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 本番環境と実際のデプロイメント</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

「私のラップトップで動作します」というだけでは、制作エージェントにとっては十分ではありません。エージェントが何を考えているのか、なぜそのツールを選択したのかを**確認し、体系的な方法で出力品質を**測定**する必要があります。

---

## 1. 可観測性スタック

### 1.1 トレース
```python
from langsmith import traceable

@traceable(name="research_agent")
def run_agent(query):
    # Mọi LLM call, tool call đều được trace
    ...
```

### 1.2 主要な指標
- **待ち時間**: 最初のトークンまでの時間、合計応答時間
- **コスト**: リクエストごとのコスト、1 日の予算の使用量
- **成功率**: 正常に完了したタスクの割合(%)
- **ツールの使用法**: 最も多く呼び出されたツール、失敗率

## 2. 評価

### 2.1 裁判官としての LLM
```python
def evaluate_output(task, agent_output, reference_output):
    judge_prompt = f"""
    Evaluate agent output on a scale of 1-5:
    Task: {task}
    Agent output: {agent_output}
    Reference: {reference_output}
    
    Score: [1-5]
    Reasoning: [why]
    """
    return call_llm(judge_prompt)
```

---

## 概要

- 可観測性 = トレース + ロギング + メトリクス + コスト追跡
- エージェント追跡用の LangSmith / Langfuse
- 評価: LLM-as-Judge、ゴールデンセット、人間評価
- 最適化のための A/B テスト プロンプト/ツール

## 演習

1. エージェントの LangSmith トレースをセットアップする
2. カスタム ダッシュボードの構築: コスト、レイテンシ、成功率
3. ゴールデン テスト セット (20 ケース) を作成し、評価を実行します
4. 2 つの異なるシステム プロンプトの A/B テスト

