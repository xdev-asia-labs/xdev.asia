---
id: 019c9619-cc06-7006-d006-cc0600000006
title: 'Lesson 6: The Agent Loop — Thought-Action-Observation Cycle'
slug: bai-6-the-agent-loop
description: >-
  Implement a complete agent loop from scratch in pure Python: ReAct pattern,
  handling multi-step reasoning, conversation history management, token budget,
  and stopping conditions.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 2: Function Calling & Tool Use'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'Build AI Agents: From Zero to Production'
  slug: build-ai-agents
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6217" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6217)"/>

  <!-- Decorations -->
  <g>
    <circle cx="810" cy="260" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1020" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="730" cy="240" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="940" cy="230" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="220" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="180" x2="1100" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="210" x2="1050" y2="280" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1060.3108891324553,212.5 1060.3108891324553,247.5 1030,265 999.6891108675446,247.5 999.6891108675446,212.5 1030,195" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: The Agent Loop —</tspan>
      <tspan x="60" dy="42">Thought-Action-Observation Cycle</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: From Zero to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Function Calling & Tool Use</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

This is the most important lesson of the series — you will **implement a complete agent loop from scratch**, without using any framework. Understanding this loop in depth will help you debug and optimize agents more effectively when using the framework later.

---

## 1. The Agent Loop — Core Architecture

```python
class SimpleAgent:
    def __init__(self, model="gpt-4o-mini", max_steps=10):
        self.client = OpenAI()
        self.model = model
        self.max_steps = max_steps
        self.tools = ToolRegistry()
        self.messages = []
        self.cost_tracker = CostTracker()
    
    def run(self, user_input: str) -> str:
        self.messages = [
            {"role": "system", "content": self.system_prompt},
            {"role": "user", "content": user_input}
        ]
        
        for step in range(self.max_steps):
            response = self.client.chat.completions.create(
                model=self.model,
                messages=self.messages,
                tools=self.tools.schemas,
            )
            
            message = response.choices[0].message
            self.messages.append(message)
            self.cost_tracker.track(self.model, response.usage)
            
            # No tool calls → final answer
            if not message.tool_calls:
                return message.content
            
            # Execute tools
            for tool_call in message.tool_calls:
                result = self.tools.execute(
                    tool_call.function.name,
                    json.loads(tool_call.function.arguments)
                )
                self.messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": str(result),
                })
        
        return "Max steps reached without final answer."
```

---

## 2. Token Budget Management

```python
def trim_messages(messages, max_tokens=100000):
    """Giữ messages trong budget token."""
    # Luôn giữ system prompt và user message gần nhất
    essential = [messages[0], messages[-1]]
    middle = messages[1:-1]
    
    # Xóa messages cũ nhất nếu vượt budget
    while estimate_tokens(essential + middle) > max_tokens and middle:
        middle.pop(0)
    
    return [essential[0]] + middle + [essential[1]]
```

---

## 3. Stopping Conditions

Agent needs to know when to stop:

1. **LLM decides to stop at its own discretion** (no additional tools are called)
2. **Max steps reached** — safety net
3. **Token budget exceeded** — avoid unexpected costs
4. **Error threshold** — too many tool failures in a row
5. **User interrupt** — human-in-the-loop

---

## Summary

- Agent loop = while loop calls LLM → check tool_calls → execute → repeat
- Token budget management prevents agents from "going wild"
- Multiple stopping conditions for safety
- Logging every step to debug

## Exercises

1. Implement SimpleAgent class complete with 5+ tools
2. Add token budget management
3. Add conversation history persistence (save/load from file)
4. Test with complex tasks that require 5+ steps

