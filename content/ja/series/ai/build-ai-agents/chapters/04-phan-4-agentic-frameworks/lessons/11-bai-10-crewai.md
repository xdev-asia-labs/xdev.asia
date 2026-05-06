---
id: 019c9619-cc10-7010-d010-cc1000000010
title: 'レッスン 10: CrewAI — AI エージェントの「チーム」の構築'
slug: bai-10-crewai
description: >-
  CrewAI によるマルチエージェント: エージェント (役割、目標、バックストーリー)、タスク、およびクルーのオーケストレーションを定義します。コンテンツ
  パイプラインを構築: 研究者 → ライター → 編集者。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 4: エージェント フレームワーク'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'AI エージェントの構築: ゼロから本番環境まで'
  slug: build-ai-agents
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1499" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1499)"/>

  <!-- Decorations -->
  <g>
    <circle cx="960" cy="270" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="170" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1040" cy="250" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="230" x2="1100" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="260" x2="1050" y2="330" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.650635094611,167.5 1001.650635094611,192.5 980,205 958.349364905389,192.5 958.349364905389,167.5 980,155" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: CrewAI — AI「チーム」の構築。</tspan>
      <tspan x="60" dy="42">エージェント</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI エージェントの構築: ゼロから本番環境まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: エージェント フレームワーク</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

単一のエージェントには制限があります。 CrewAI を使用すると、実際のチームと同じように、さまざまな役割を持つ **エージェントのチーム** を作成し、協力して複雑なタスクを完了できます。

---

## 1. CrewAI の概念

```python
from crewai import Agent, Task, Crew

researcher = Agent(
    role="Senior Researcher",
    goal="Tìm kiếm và tổng hợp thông tin chính xác",
    backstory="Bạn là researcher 10 năm kinh nghiệm...",
    tools=[web_search_tool],
)

writer = Agent(
    role="Content Writer",
    goal="Viết bài viết hấp dẫn từ research",
    backstory="Bạn là technical writer...",
)

editor = Agent(
    role="Editor",
    goal="Review và polish bài viết",
    backstory="Bạn là senior editor...",
)

# Define tasks
research_task = Task(description="Research about AI Agents trends 2025", agent=researcher)
write_task = Task(description="Write a blog post from the research", agent=writer)
edit_task = Task(description="Edit and polish the blog post", agent=editor)

# Assemble crew
crew = Crew(agents=[researcher, writer, editor], tasks=[research_task, write_task, edit_task])
result = crew.kickoff()
```

---

## 概要

- CrewAI = 専門的な役割を持つエージェントのチーム
- エージェント = 役割 + 目標 + バックストーリー + ツール
- タスク = エージェントに割り当てられた作業項目
- プロセスの種類: 逐次的、階層的、合意的

## 演習

1. コンテンツ作成パイプラインを構築します: 研究者 → ライター → 編集者
2. Managerエージェントによる階層化処理の実装
3. 各エージェントにカスタム ツールを追加する
4. 出力品質の比較: エージェント 1 名とエージェント 3 名のクルー

