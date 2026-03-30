---
id: 019c9619-cc10-7010-d010-cc1000000010
title: 'Bài 10: CrewAI — Xây dựng "đội ngũ" AI Agent'
slug: bai-10-crewai
description: >-
  Multi-agent với CrewAI: định nghĩa Agents (role, goal, backstory), Tasks, và Crew orchestration. Xây content pipeline: Researcher → Writer → Editor.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 4: Agentic Frameworks"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

Một agent đơn lẻ có giới hạn. CrewAI cho phép bạn tạo **đội ngũ agents** với vai trò khác nhau, cộng tác để hoàn thành task phức tạp — giống như team thật.

---

## 1. CrewAI Concepts

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

## Tóm tắt

- CrewAI = team of agents with specialized roles
- Agent = role + goal + backstory + tools
- Task = work item assigned to an agent
- Process types: sequential, hierarchical, consensual

## Bài tập

1. Xây content creation pipeline: Researcher → Writer → Editor
2. Implement hierarchical process với Manager agent
3. Thêm custom tools cho mỗi agent
4. So sánh output quality: 1 agent vs 3-agent crew

