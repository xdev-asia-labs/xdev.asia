---
id: 019c9619-cc11-7011-d011-cc1100000011
title: 'レッスン 11: 高度なパターン — 計画、反省、自己修正'
slug: bai-11-advanced-patterns
description: '高度なパターン: 計画と実行、思考ツリー計画、内省ループ、批判と修正。実装エージェントは自身の出力を評価して修正します。'
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 4: エージェント フレームワーク'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'AI エージェントの構築: ゼロから本番環境まで'
  slug: build-ai-agents
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6138" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6138)"/>

  <!-- Decorations -->
  <g>
    <circle cx="636" cy="58" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="672" cy="154" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="708" cy="250" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="744" cy="86" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="780" cy="182" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="78" x2="1100" y2="158" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="108" x2="1050" y2="178" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1006.5788383248864,161.5 1006.5788383248864,194.5 978,211 949.4211616751136,194.5 949.4211616751135,161.5 978,145" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: 高度なパターン — 計画、</tspan>
      <tspan x="60" dy="42">反省と自己修正</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI エージェントの構築: ゼロから本番環境まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: エージェント フレームワーク</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

エージェントは基本的に「1ステップ考えて1ステップ実行」スタイルで仕事をします。上級エージェントは、**計画**、**自己評価**、**自己修正**の方法を知る必要があります。この記事では、最も重要なデザイン パターンについて説明します。

---

## 1. 計画と実行のパターン

```
User Request → Planner (tạo plan) → Executor (thực hiện từng step) → Re-planner (adjust)
```

## 2. 内省/批判のループ

```python
def reflect_and_improve(agent_output, original_task):
    critic_prompt = f"""
    Task: {original_task}
    Agent Output: {agent_output}
    
    Evaluate:
    1. Does it fully answer the task? (completeness)
    2. Is the information accurate? (accuracy)
    3. Is it well-structured? (quality)
    
    If issues found, provide specific improvements.
    """
    feedback = call_llm(critic_prompt)
    
    if "APPROVED" in feedback:
        return agent_output
    else:
        improved = call_llm(f"Improve based on feedback: {feedback}")
        return improved
```

## 3. 思考の木

1 つの思考チェーンではなく、並行した思考の**複数の分岐**を検討し、最適な分岐を選択します。

---

## 概要

- 計画と実行: 最初に計画し、後で実行します。
- 内省: 批判ループにより出力の品質が向上します
- Tree-of-Thought: 多くの推論パスを探索します
- パターンを組み合わせて最強のエージェントを実現

## 演習

1. 計画実行エージェントの実装
2. 自己反射ループを追加 (最大 3 回の反復)
3. 出力品質の比較: 反射ありと反射なし
4. 数学の問題解決のために思考の木を実装する

