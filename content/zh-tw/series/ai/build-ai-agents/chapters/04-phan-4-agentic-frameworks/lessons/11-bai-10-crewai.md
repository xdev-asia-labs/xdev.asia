---
id: 019c9619-cc10-7010-d010-cc1000000010
title: 第 10 課：CrewAI — 建立人工智慧代理“團隊”
slug: bai-10-crewai
description: 使用 CrewAI 的多代理：定義代理（角色、目標、背景故事）、任務和 Crew 編排。建構內容管道：研究員→作家→編輯。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 第 4 部分：代理框架
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：CrewAI — 建立人工智慧「團隊」。</tspan>
      <tspan x="60" dy="42">代理商</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：代理框架</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

單一代理有其限制。 CrewAI 允許您創建具有不同角色的**代理團隊**，協作完成複雜的任務 - 就像真正的團隊一樣。

---

## 1. CrewAI 概念

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

## 總結

- CrewAI = 具有專門角色的代理團隊
- 代理 = 角色 + 目標 + 背景故事 + 工具
- 任務 = 分配給代理人的工作項
- 流程類型：順序、分層、協商一致

## 練習

1. 建構內容創作管道：研究員→作家→編輯
2.用Manager代理實現分層流程
3.為每個代理程式新增自訂工具
4. 比較輸出品質：1 名特工與 3 名特工人員

