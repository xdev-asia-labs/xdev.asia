---
id: 019c9619-ac07-7007-d107-ac0700000007
title: 'Lesson 7: LLMOps vs MLOps — Paradigm Shift'
slug: bai-7-llmops-vs-mlops
description: >-
  LLMOps paradigm: differences from traditional MLOps. LLM-specific challenges:
  prompt engineering, evaluation, hallucination, cost management. LLMOps stack
  overview. When to fine-tune vs prompt engineer.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 3: LLMOps'
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: 'MLOps & LLMOps: Bringing AI to Production'
  slug: mlops-llmops
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7341" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7341)"/>

  <!-- Decorations -->
  <g>
    <circle cx="670" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="810" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="80" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="160" x2="1100" y2="240" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="190" x2="1050" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="990.3108891324554,142.5 990.3108891324554,177.5 960,195 929.6891108675446,177.5 929.6891108675446,142.5 960,125" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: LLMOps vs MLOps — Paradigm Shift</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">MLOps & LLMOps: Bringing AI to Production</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: LLMOps</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

MLOps is hard — LLMOps is even harder. LLM is not like traditional models: you don't train from scratch, evaluation is very difficult, and inference costs are 100x higher.

> 🎯 **LLMOps** = effective process of bringing LLM applications to production.

---

## 1. MLOps vs LLMOps — What's the difference?

```
Traditional ML:
  Data → Feature Eng → Train Model → Deploy → Monitor
  ✅ Model nhỏ (MB)
  ✅ Train trên dataset nhỏ (GB)
  ✅ Evaluation rõ ràng (accuracy, F1)
  ✅ Inference rẻ (<1ms)

LLM:
  Prompt → LLM API → Post-process → Deploy → Monitor
  ❌ Model rất lớn (100B params, 100GB+)
  ❌ Không train (hoặc fine-tune rất đắt)
  ❌ Evaluation mơ hồ (chất lượng text?)
  ❌ Inference đắt ($0.01-$0.10/request)
```

### Detailed comparison:

| Aspect | Traditional ML | LLMOps |
|--------|---------------|--------|
| **Model** | Train from scratch | Pre-trained, prompt/fine-tune |
| **Data** | Structured (tabular) | Unstructured (text, code) |
| **Training** | Hours-days | Weeks-months (or N/A) |
| **Cost** | Train expensive, serve cheap | Train VERY expensive, serve expensive |
| **Evaluation** | Clear metrics (acc, F1) | Subjective + multiple dimensions |
| **Versioning** | Model weights | Prompts + model selection |
| **Deployment** | Self-host easy | API calls or huge GPU servers |
| **Monitoring** | Data drift | Prompt drift, hallucination, toxicity |
| **Failure mode** | Wrong prediction | Hallucination, harmful content |

---

## 2. LLMOps Stack

```
┌─────────────────────────────────────────────────┐
│                  LLMOps Stack                    │
├──────────────┬──────────────────────────────────┤
│ Layer        │ Components                        │
├──────────────┼──────────────────────────────────┤
│ Foundation   │ OpenAI, Anthropic, Google, Llama  │
│ Models       │ Mistral, Cohere                   │
├──────────────┼──────────────────────────────────┤
│ Prompt       │ Prompt templates, versioning      │
│ Management   │ A/B testing, optimization         │
├──────────────┼──────────────────────────────────┤
│ RAG          │ Vector DBs, embeddings, chunking  │
│ Pipeline     │ retrieval, re-ranking             │
├──────────────┼──────────────────────────────────┤
│ Orchestration│ LangChain, LlamaIndex, DSPy       │
│              │ Agents, chains, tool use           │
├──────────────┼──────────────────────────────────┤
│ Evaluation   │ Human eval, LLM-as-judge          │
│              │ Benchmarks, A/B testing            │
├──────────────┼──────────────────────────────────┤
│ Observability│ LangSmith, Langfuse, Arize        │
│              │ Tracing, logging, debugging        │
├──────────────┼──────────────────────────────────┤
│ Guardrails   │ Content filtering, PII detection   │
│              │ Output validation, rate limiting    │
├──────────────┼──────────────────────────────────┤
│ Cost Mgmt    │ Caching, routing, token counting   │
│              │ Budget alerts, model selection      │
└──────────────┴──────────────────────────────────┘
```

---

## 3. LLM Application Patterns

### 3.1 Direct API Call

```python
"""Pattern 1: Direct API call — đơn giản nhất"""
from openai import OpenAI

client = OpenAI()

def classify_sentiment(text):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Classify sentiment as positive/negative/neutral. Return ONLY the label."},
            {"role": "user", "content": text},
        ],
        temperature=0,
        max_tokens=10,
    )
    return response.choices[0].message.content.strip()

# Simple, nhưng:
# ❌ Không cache
# ❌ Không track prompts
# ❌ Không monitor
# ❌ Không fallback
```

### 3.2 Production-Ready Pattern

```python
"""Pattern 2: Production-ready LLM call"""
from openai import OpenAI
import hashlib
import json
import time
import logging
from functools import lru_cache

logger = logging.getLogger(__name__)

class LLMService:
    def __init__(self):
        self.client = OpenAI()
        self.cache = {}  # Redis in production
        self.total_tokens = 0
        self.total_cost = 0

    def call(self, messages, model="gpt-4o-mini", **kwargs):
        """Production LLM call with caching, logging, and fallback"""

        # 1. Check cache
        cache_key = self._cache_key(messages, model)
        if cache_key in self.cache:
            logger.info(f"Cache hit: {cache_key[:8]}")
            return self.cache[cache_key]

        # 2. Call with retry
        for attempt in range(3):
            try:
                start = time.time()
                response = self.client.chat.completions.create(
                    model=model,
                    messages=messages,
                    **kwargs,
                )
                latency = time.time() - start

                # 3. Track usage
                usage = response.usage
                self.total_tokens += usage.total_tokens
                cost = self._calculate_cost(model, usage)
                self.total_cost += cost

                # 4. Log
                logger.info(
                    f"LLM call: model={model}, tokens={usage.total_tokens}, "
                    f"latency={latency:.2f}s, cost=${cost:.4f}"
                )

                result = response.choices[0].message.content
                self.cache[cache_key] = result
                return result

            except Exception as e:
                logger.warning(f"Attempt {attempt+1} failed: {e}")
                if attempt == 2:
                    # Fallback to cheaper model
                    if model != "gpt-4o-mini":
                        logger.info("Falling back to gpt-4o-mini")
                        return self.call(messages, model="gpt-4o-mini", **kwargs)
                    raise
                time.sleep(2 ** attempt)

    def _cache_key(self, messages, model):
        content = json.dumps({"messages": messages, "model": model})
        return hashlib.md5(content.encode()).hexdigest()

    def _calculate_cost(self, model, usage):
        prices = {
            "gpt-4o": {"input": 2.50/1e6, "output": 10.0/1e6},
            "gpt-4o-mini": {"input": 0.15/1e6, "output": 0.60/1e6},
        }
        p = prices.get(model, prices["gpt-4o-mini"])
        return usage.prompt_tokens * p["input"] + \
               usage.completion_tokens * p["output"]
```

### 3.3 RAG Pattern

```python
"""Pattern 3: RAG (Retrieval-Augmented Generation)"""
from openai import OpenAI
import chromadb

class RAGService:
    def __init__(self):
        self.llm = OpenAI()
        self.db = chromadb.HttpClient(host="localhost", port=8000)
        self.collection = self.db.get_collection("knowledge_base")

    def query(self, question, top_k=5):
        # 1. Retrieve relevant documents
        results = self.collection.query(
            query_texts=[question],
            n_results=top_k,
        )

        # 2. Build context
        context = "\n\n".join(results['documents'][0])

        # 3. Generate answer
        response = self.llm.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": f"""
Answer based ONLY on the provided context.
If the answer is not in the context, say "I don't know."

Context:
{context}
"""},
                {"role": "user", "content": question},
            ],
        )

        return {
            "answer": response.choices[0].message.content,
            "sources": results['metadatas'][0],
        }
```

---

## 4. LLM Evaluation — Big challenge

### 4.1 Problem

```
Traditional ML: accuracy = 0.92 → Good!

LLM: "Summarize this article" → ???
  - Chính xác?
  - Đầy đủ?
  - Ngắn gọn?
  - Đúng tone?
  - Không hallucinate?
  → Rất khó đo tự động
```

### 4.2 Evaluation Framework

```python
"""LLM Evaluation pipeline"""
from openai import OpenAI
import json

client = OpenAI()

def evaluate_with_llm_judge(question, answer, reference_answer=None):
    """LLM-as-a-Judge evaluation"""
    eval_prompt = f"""
Evaluate the following answer on these criteria (1-5 scale):

1. **Correctness**: Is the answer factually correct?
2. **Completeness**: Does it cover all key points?
3. **Conciseness**: Is it appropriately concise?
4. **Relevance**: Does it actually answer the question?
5. **Harmlessness**: Is it safe and appropriate?

Question: {question}
Answer: {answer}
{"Reference: " + reference_answer if reference_answer else ""}

Respond in JSON: {{"correctness": X, "completeness": X, "conciseness": X, "relevance": X, "harmlessness": X, "explanation": "..."}}
"""

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": eval_prompt}],
        response_format={"type": "json_object"},
    )

    return json.loads(response.choices[0].message.content)


# Chạy evaluation trên test set
test_cases = [
    {
        "question": "Python list comprehension là gì?",
        "reference": "List comprehension là cú pháp ngắn gọn để tạo list mới từ iterable.",
    },
    # ... more test cases
]

results = []
for tc in test_cases:
    answer = my_llm_service.query(tc["question"])
    eval_result = evaluate_with_llm_judge(
        tc["question"], answer, tc.get("reference")
    )
    results.append(eval_result)
    print(f"Q: {tc['question'][:50]}... → Score: {eval_result}")

# Aggregate
avg_scores = {
    key: sum(r[key] for r in results) / len(results)
    for key in ["correctness", "completeness", "relevance"]
}
print(f"\n📊 Average scores: {avg_scores}")
```

---

## 5. Decision Framework: Prompt vs Fine-tune vs RAG

```
                      Cần domain knowledge?
                       /              \
                     Yes               No
                      |                 |
               Data có sẵn?      Task phức tạp?
               /          \        /        \
             Yes           No    Yes         No
              |             |     |           |
        Fine-tune     RAG + Prompt  Few-shot   Zero-shot
         + RAG        Engineering   Prompting  Prompting

Quy tắc ngón cái:
  1. Thử Prompt Engineering trước (rẻ, nhanh)
  2. Thêm RAG nếu cần knowledge (medium effort)
  3. Fine-tune cuối cùng (đắt, chậm, nhưng mạnh)
```

| Approach | Cost | Effort | When to use |
|----------|-------|-------|-------------|
| **Zero-shot** | 💰 | 🔨 | Simple task, powerful model |
| **Few-shot** | 💰 | 🔨🔨 | Need examples, specific format |
| **RAG** ​​| 💰💰 | 🔨🔨🔨 | Need domain knowledge, data changes |
| **Fine-tune** | 💰💰💰 | 🔨🔨🔨🔨 | Specific tasks, need unique style |

---

## 6. LLMOps Lifecycle

```python
"""LLMOps Lifecycle trong practice"""

# Phase 1: Prototype (1-2 tuần)
# - Thử nhiều prompts trong playground
# - So sánh models (GPT-4o vs Claude vs Gemini)
# - Build basic RAG nếu cần

# Phase 2: Evaluation (1-2 tuần)
# - Tạo eval dataset (50-200 test cases)
# - LLM-as-judge evaluation
# - Human evaluation (sample)
# - Benchmark: latency, cost, accuracy

# Phase 3: Production (1-2 tuần)
# - Prompt versioning
# - Caching (semantic cache)
# - Rate limiting
# - Error handling & fallbacks
# - Guardrails (content filter)

# Phase 4: Monitoring (ongoing)
# - Track: latency, cost, token usage
# - Track: user feedback, thumbs up/down
# - Track: hallucination rate
# - Data drift detection
# - A/B testing prompts
```

---

## Summary

| Concepts | Remember |
|--------|--------|
| **LLMOps** | MLOps adapted for LLM applications |
| **Key differences** | No training, expensive inference, hard evaluation |
| **LLMOps Stack** | Models → Prompts → RAG → Orchestration → Eval → Observability |
| **Evaluation** | LLM-as-judge + human eval + automated metrics |
| **Decision** | Prompt first → RAG → Fine-tune (escalate as needed) |
| **Production** | Cache + retry + fallback + guardrails |

## Exercises

1. **Stack Analysis:** Which LLM is your team using? List components needed for production.
2. **Evaluation:** Create an eval dataset of 20 test cases. Run LLM-as-judge. Report scores.
3. **Production Wrapper:** Wrap OpenAI API calls with cache, retry, fallback, cost tracking.
4. **Decision Matrix:** For 3 use cases, decide: prompt vs RAG vs fine-tune. Explain.

> **Next article:** Prompt Management & A/B Testing.
