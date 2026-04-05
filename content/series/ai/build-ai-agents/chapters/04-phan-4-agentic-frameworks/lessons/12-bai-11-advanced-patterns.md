---
id: 019c9619-cc11-7011-d011-cc1100000011
title: 'Bài 11: Advanced Patterns — Planning, Reflection & Self-Correction'
slug: bai-11-advanced-patterns
description: >-
  Pattern nâng cao: Plan-and-Execute, Tree-of-Thought planning, Self-Reflection loops, Critic-and-Revise. Implement agent tự đánh giá và sửa lỗi output của mình.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 4: Agentic Frameworks"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI &amp; ML — Bài 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 11: Advanced Patterns — Planning,</tspan>
      <tspan x="60" dy="42">Reflection &amp; Self-Correction</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: Từ Zero đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Agentic Frameworks</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Agent cơ bản hoạt động theo kiểu "nghĩ 1 bước, làm 1 bước". Agent nâng cao cần biết **lên kế hoạch**, **tự đánh giá**, và **tự sửa lỗi**. Bài này cover các design patterns quan trọng nhất.

---

## 1. Plan-and-Execute Pattern

```
User Request → Planner (tạo plan) → Executor (thực hiện từng step) → Re-planner (adjust)
```

## 2. Self-Reflection / Critic Loop

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

## 3. Tree-of-Thought

Thay vì 1 chain of thought, explore **nhiều nhánh** suy nghĩ song song, rồi chọn nhánh tốt nhất.

---

## Tóm tắt

- Plan-and-Execute: lên kế hoạch trước, thực hiện sau
- Self-Reflection: critic loop cải thiện output quality
- Tree-of-Thought: explore nhiều reasoning paths
- Combine patterns cho agent mạnh nhất

## Bài tập

1. Implement Plan-and-Execute agent
2. Thêm self-reflection loop (max 3 iterations)
3. So sánh output quality: with vs without reflection
4. Implement Tree-of-Thought cho math problem solving

