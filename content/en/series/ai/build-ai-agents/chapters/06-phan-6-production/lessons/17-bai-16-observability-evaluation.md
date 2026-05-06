---
id: 019c9619-cc16-7016-d016-cc1600000016
title: 'Lesson 16: Observability & Evaluation — Monitor what Agents "think"'
slug: bai-16-observability-evaluation
description: >-
  Tracing agent decisions with LangSmith, Langfuse. Logging, metrics, cost
  tracking. Evaluation: LLM-as-a-Judge, golden test sets, human evaluation. A/B
  testing agent prompts.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 15
section_title: 'Part 6: Production & Actual Deployment'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'Build AI Agents: From Zero to Production'
  slug: build-ai-agents
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI & ML — Lesson 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 16: Observability & Evaluation — According</tspan>
      <tspan x="60" dy="42">Watch what Agent "thinks"</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: From Zero to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Production & Actual Deployment</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

"It works on my laptop" is not enough for a production agent. You need to **see** what the agent is thinking, why it chose that tool, and **measure** the output quality in a systematic way.

---

## 1. Observability Stack

### 1.1 Tracing
```python
from langsmith import traceable

@traceable(name="research_agent")
def run_agent(query):
    # Mọi LLM call, tool call đều được trace
    ...
```

### 1.2 Key Metrics
- **Latency**: Time to first token, total response time
- **Cost**: Per-request cost, daily budget usage
- **Success rate**: % tasks completed successfully
- **Tool usage**: Which tools called most, failure rates

## 2. Evaluation

### 2.1 LLM-as-a-Judge
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

## Summary

- Observability = tracing + logging + metrics + cost tracking
- LangSmith / Langfuse for agent tracing
- Evaluation: LLM-as-Judge, golden sets, human eval
- A/B test prompts/tools to optimize

## Exercises

1. Setup LangSmith tracing for agent
2. Build custom dashboard: cost, latency, success rate
3. Create golden test set (20 cases) and run evaluation
4. A/B test 2 different system prompts

