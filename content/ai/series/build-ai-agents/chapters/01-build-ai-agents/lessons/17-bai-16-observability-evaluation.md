---
id: 019c9619-cc16-7016-d016-cc1600000016
title: 'Bài 16: Observability & Evaluation — Theo dõi Agent "nghĩ gì"'
slug: bai-16-observability-evaluation
description: >-
  Tracing agent decisions với LangSmith, Langfuse. Logging, metrics, cost tracking. Evaluation: LLM-as-a-Judge, golden test sets, human eval. A/B testing agent prompts.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 6: Production & Triển khai thực tế"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

"It works on my laptop" không đủ cho production agent. Bạn cần **nhìn thấy** agent đang nghĩ gì, tại sao nó chọn tool đó, và **đo lường** chất lượng output một cách systematic.

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

## Tóm tắt

- Observability = tracing + logging + metrics + cost tracking
- LangSmith / Langfuse cho agent tracing
- Evaluation: LLM-as-Judge, golden sets, human eval
- A/B test prompts/tools để optimize

## Bài tập

1. Setup LangSmith tracing cho agent
2. Build custom dashboard: cost, latency, success rate
3. Create golden test set (20 cases) và run evaluation
4. A/B test 2 different system prompts

