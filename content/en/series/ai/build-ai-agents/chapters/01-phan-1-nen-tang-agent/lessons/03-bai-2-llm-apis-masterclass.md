---
id: 019c9619-cc02-7002-d002-cc0200000002
title: 'Lesson 2: LLM APIs Masterclass — OpenAI, Claude, Gemini'
slug: bai-2-llm-apis-masterclass
description: >-
  Proficient in the APIs of the top 3 LLMs: authentication, chat completions,
  streaming, structured output (JSON mode), vision, and cost optimization.
  Compare the pros and cons of each provider.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: Agent Platform — Understand before building'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'Build AI Agents: From Zero to Production'
  slug: build-ai-agents
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9550" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9550)"/>

  <!-- Decorations -->
  <g>
    <circle cx="636" cy="38" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="672" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="708" cy="130" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="744" cy="46" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="780" cy="222" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="178" x2="1100" y2="258" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="208" x2="1050" y2="278" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="956.5788383248864,111.5 956.5788383248864,144.5 928,161 899.4211616751136,144.5 899.4211616751135,111.50000000000001 928,95" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI & ML — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: LLM APIs Masterclass — OpenAI,</tspan>
      <tspan x="60" dy="42">Claude, Gemini</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: From Zero to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Agent Platform — Understand before building</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Before building an agent, you need to **master** the core tool — LLM APIs. This article focuses on the three most popular providers: **OpenAI** (GPT-4o), **Anthropic** (Claude 3.5 Sonnet), and **Google** (Gemini). You will learn how to call APIs, handle streaming, structured output, and most importantly — **optimize costs**.

---

## 1. Overview of 3 LLM Providers

### Quick comparison

| | OpenAI GPT-4o | Anthropic Claude 3.5 | Google Gemini 1.5 |
|---|---|---|---|
| **Input price** | $2.50/1M tokens | $3.00/1M tokens | $1.25/1M tokens |
| **Output price** | $10.00/1M tokens | $15.00/1M tokens | $5.00/1M tokens |
| **Context window** | 128K | 200K | 1M |
| **Strengths** | Tool use, coding | Reasoning long, safety | Huge Context, search |
| **Vision** | ✅ | ✅ | ✅ |
| **Streaming** | ✅ | ✅ | ✅ |

### When to use what?

- **OpenAI**: Default choice, largest ecosystem, stable function calling
- **Claude**: When needing complex reasoning, handling long documents, or needing high safety
- **Gemini**: When you need a very large context window or grounding with search

---

## 2. OpenAI API

### 2.1 Setup & Authentication

```bash
pip install openai
```

```python
from openai import OpenAI

# Cách 1: Environment variable (khuyến nghị)
# export OPENAI_API_KEY=sk-...
client = OpenAI()

# Cách 2: Truyền trực tiếp
client = OpenAI(api_key="sk-...")
```

### 2.2 Chat Completions — Basic

```python
response = client.chat.completions.create(
    model="gpt-4o-mini",  # Rẻ và nhanh, đủ cho hầu hết use case
    messages=[
        {"role": "system", "content": "Bạn là trợ lý AI nói tiếng Việt."},
        {"role": "user", "content": "Giải thích AI Agent trong 3 câu."}
    ],
    temperature=0.7,       # Creativity level (0 = deterministic, 2 = creative)
    max_tokens=500,        # Giới hạn output
)

print(response.choices[0].message.content)
print(f"Tokens used: {response.usage.total_tokens}")
print(f"Cost: ~${response.usage.total_tokens * 0.00000015:.6f}")
```

### 2.3 Streaming

```python
stream = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Viết một bài thơ về AI"}],
    stream=True,
)

for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)
```

### 2.4 Structured Output (JSON Mode)

```python
from pydantic import BaseModel

class AgentStep(BaseModel):
    thought: str
    action: str
    tool_name: str | None
    tool_args: dict | None

response = client.beta.chat.completions.parse(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "Analyze the user request and plan the next agent step."},
        {"role": "user", "content": "Find the weather in Hanoi and compare with Saigon"},
    ],
    response_format=AgentStep,
)

step = response.choices[0].message.parsed
print(f"Thought: {step.thought}")
print(f"Action: {step.action}")
print(f"Tool: {step.tool_name}({step.tool_args})")
```

---

## 3. Anthropic Claude API

### 3.1 Setup

```bash
pip install anthropic
```

```python
from anthropic import Anthropic

client = Anthropic()  # Dùng ANTHROPIC_API_KEY env var
```

### 3.2 Messages API

```python
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    system="Bạn là trợ lý AI cho developer Việt Nam.",
    messages=[
        {"role": "user", "content": "So sánh LangChain vs LangGraph"}
    ]
)

print(message.content[0].text)
print(f"Input tokens: {message.usage.input_tokens}")
print(f"Output tokens: {message.usage.output_tokens}")
```

### 3.3 Streaming

```python
with client.messages.stream(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Explain ReAct pattern"}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

---

## 4. Google Gemini API

### 4.1 Setup

```bash
pip install google-genai
```

```python
from google import genai

client = genai.Client()  # Dùng GOOGLE_API_KEY env var
```

### 4.2 Generate Content

```python
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="Giải thích MCP protocol cho AI Agents"
)
print(response.text)
```

---

## 5. Best Practices for Agent Development

### 5.1 Choose the appropriate model

```python
# Quy tắc ngón tay cái:
MODEL_SELECTION = {
    "simple_tasks": "gpt-4o-mini",      # Rẻ, nhanh
    "complex_reasoning": "claude-sonnet-4-20250514",  # Chính xác
    "long_context": "gemini-1.5-pro",    # 1M tokens
    "tool_calling": "gpt-4o",            # Ổn định nhất
    "cost_sensitive": "gpt-4o-mini",     # Rẻ nhất
}
```

### 5.2 Error Handling

```python
from openai import RateLimitError, APIError
import time

def call_llm_with_retry(messages, max_retries=3):
    for attempt in range(max_retries):
        try:
            return client.chat.completions.create(
                model="gpt-4o-mini",
                messages=messages,
            )
        except RateLimitError:
            wait = 2 ** attempt
            print(f"Rate limited. Waiting {wait}s...")
            time.sleep(wait)
        except APIError as e:
            print(f"API error: {e}")
            raise
    raise Exception("Max retries exceeded")
```

### 5.3 Cost Tracking

```python
class CostTracker:
    PRICING = {
        "gpt-4o-mini": {"input": 0.15/1e6, "output": 0.60/1e6},
        "gpt-4o": {"input": 2.50/1e6, "output": 10.00/1e6},
    }
    
    def __init__(self):
        self.total_cost = 0
    
    def track(self, model, usage):
        pricing = self.PRICING.get(model, {"input": 0, "output": 0})
        cost = (usage.prompt_tokens * pricing["input"] + 
                usage.completion_tokens * pricing["output"])
        self.total_cost += cost
        return cost

tracker = CostTracker()
```

---

## Summary

- Proficient in 3 LLM APIs: OpenAI, Anthropic, Google Gemini
- Know when to use which model (cost vs capability trade-off)
- Streaming, structured output, error handling — ready for agent development
- Cost tracking is **required** when building an agent (agent calls LLM multiple times!)

## Exercises

1. Write a wrapper function that calls all 3 providers with the same interface
2. Compare the response quality of 3 models for the same complex prompt
3. Implement cost tracker and run 10 requests, calculating total cost
4. Try Structured Output: force LLM to return JSON with a specific schema
