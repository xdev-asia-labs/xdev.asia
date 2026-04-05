---
id: 019c9619-ac10-7010-d110-ac1000000010
title: 'Bài 10: Cost Optimization — Caching, Routing & Quantization'
slug: bai-10-cost-optimization
description: >-
  LLM cost optimization: semantic caching, prompt compression, model
  routing, token optimization. Self-hosted models: vLLM, Ollama.
  Quantization cho inference. Cost monitoring & budgeting.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 4: Production & Governance"
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: "MLOps & LLMOps: Đưa AI lên Production"
  slug: mlops-llmops
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7209" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7209)"/>

  <!-- Decorations -->
  <g>
    <circle cx="658" cy="164" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="716" cy="122" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="774" cy="80" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="832" cy="38" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="890" cy="256" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="84" x2="1100" y2="164" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="114" x2="1050" y2="184" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1017.7749907475932,164.5 1017.7749907475932,203.5 984,223 950.2250092524068,203.5 950.2250092524068,164.5 984,145" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI &amp; ML — Bài 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 10: Cost Optimization — Caching,</tspan>
      <tspan x="60" dy="42">Routing &amp; Quantization</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">MLOps &amp; LLMOps: Đưa AI lên Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Production &amp; Governance</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

LLM API calls đắt. Một ứng dụng RAG chatbot phục vụ 10K users/ngày có thể tốn **$500-5000/tháng** chỉ riêng API costs. Bài này dạy các kỹ thuật giảm chi phí mà **không hy sinh chất lượng**.

> 🎯 **Mục tiêu:** Giảm 50-80% LLM costs mà vẫn giữ quality.

---

## 1. LLM Cost Breakdown

```
Chi phí LLM call = Input Tokens × Input Price + Output Tokens × Output Price

Ví dụ GPT-4o (per 1M tokens):
  Input:  $2.50
  Output: $10.00

10K requests/ngày × 2000 tokens/request:
  = 20M tokens/ngày
  = $50-200/ngày
  = $1,500-6,000/tháng 😱
```

| Model | Input ($/1M) | Output ($/1M) | Speed |
|-------|-------------|---------------|-------|
| GPT-4o | $2.50 | $10.00 | Medium |
| GPT-4o-mini | $0.15 | $0.60 | Fast |
| Claude 3.5 Sonnet | $3.00 | $15.00 | Medium |
| Claude 3.5 Haiku | $0.25 | $1.25 | Fast |
| Gemini 1.5 Flash | $0.075 | $0.30 | Very Fast |
| Llama 3.1 70B (self) | ~$0.00 | ~$0.00 | Depends on GPU |

---

## 2. Semantic Caching

### 2.1 Exact Match Cache

```python
"""Exact match caching — đơn giản nhất"""
import hashlib
import json
import redis

class ExactCache:
    def __init__(self):
        self.redis = redis.Redis(host='localhost', port=6379)
        self.ttl = 3600 * 24  # 24h

    def _key(self, messages, model):
        content = json.dumps({"messages": messages, "model": model}, sort_keys=True)
        return f"llm:exact:{hashlib.md5(content.encode()).hexdigest()}"

    def get(self, messages, model):
        key = self._key(messages, model)
        cached = self.redis.get(key)
        if cached:
            return json.loads(cached)
        return None

    def set(self, messages, model, response):
        key = self._key(messages, model)
        self.redis.setex(key, self.ttl, json.dumps(response))

# Usage
cache = ExactCache()

def cached_llm_call(messages, model="gpt-4o-mini"):
    # Check cache
    cached = cache.get(messages, model)
    if cached:
        print("💾 Cache hit!")
        return cached

    # API call
    response = client.chat.completions.create(model=model, messages=messages)
    result = response.choices[0].message.content

    # Cache result
    cache.set(messages, model, result)
    return result
```

### 2.2 Semantic Cache

```python
"""Semantic caching — cache câu hỏi tương tự"""
import numpy as np
from openai import OpenAI

class SemanticCache:
    def __init__(self, similarity_threshold=0.95):
        self.client = OpenAI()
        self.threshold = similarity_threshold
        self.cache = []  # [{embedding, query, response}]

    def _get_embedding(self, text):
        response = self.client.embeddings.create(
            model="text-embedding-3-small",
            input=text,
        )
        return np.array(response.data[0].embedding)

    def _cosine_similarity(self, a, b):
        return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

    def get(self, query):
        """Find similar cached query"""
        query_embedding = self._get_embedding(query)

        best_score = 0
        best_response = None

        for item in self.cache:
            score = self._cosine_similarity(query_embedding, item["embedding"])
            if score > best_score:
                best_score = score
                best_response = item["response"]

        if best_score >= self.threshold:
            print(f"💾 Semantic cache hit! (similarity: {best_score:.3f})")
            return best_response
        return None

    def set(self, query, response):
        self.cache.append({
            "embedding": self._get_embedding(query),
            "query": query,
            "response": response,
        })

# Usage
sem_cache = SemanticCache(similarity_threshold=0.92)

# Query 1: "MLOps là gì?"
response1 = llm_call("MLOps là gì?")
sem_cache.set("MLOps là gì?", response1)

# Query 2: "ML Ops nghĩa là gì?" → Cache HIT (semantic similar)
cached = sem_cache.get("ML Ops nghĩa là gì?")
```

### 2.3 GPTCache (Production-ready)

```python
"""GPTCache — production semantic caching"""
# pip install gptcache
from gptcache import cache
from gptcache.adapter import openai as gptcache_openai
from gptcache.embedding import Onnx
from gptcache.manager import get_data_manager, CacheBase
from gptcache.similarity_evaluation.distance import SearchDistanceEvaluation

# Setup
onnx = Onnx()
cache_base = CacheBase('sqlite')
data_manager = get_data_manager(cache_base, vector_base=None)

cache.init(
    embedding_func=onnx.to_embeddings,
    data_manager=data_manager,
    similarity_evaluation=SearchDistanceEvaluation(),
)
cache.set_openai_key()

# Use (drop-in replacement)
response = gptcache_openai.ChatCompletion.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "What is MLOps?"}],
)
# → First call: API, subsequent similar calls: cache
```

---

## 3. Model Routing

```python
"""Smart model routing — dùng model rẻ khi có thể"""

class ModelRouter:
    def __init__(self):
        self.client = OpenAI()

    def classify_complexity(self, query):
        """Phân loại độ phức tạp của query"""
        # Rule-based (nhanh, free)
        simple_patterns = [
            "dịch", "translate", "define", "what is",
            "list", "yes or no", "true or false",
        ]
        complex_patterns = [
            "analyze", "compare", "explain why",
            "design", "architect", "optimize",
            "code review", "debug",
        ]

        query_lower = query.lower()
        for pattern in simple_patterns:
            if pattern in query_lower:
                return "simple"
        for pattern in complex_patterns:
            if pattern in query_lower:
                return "complex"
        return "medium"

    def route(self, query, messages):
        """Route to appropriate model"""
        complexity = self.classify_complexity(query)

        model_map = {
            "simple": "gpt-4o-mini",      # $0.15/M input — rẻ
            "medium": "gpt-4o-mini",       # $0.15/M input
            "complex": "gpt-4o",           # $2.50/M input — đắt nhưng mạnh
        }

        model = model_map[complexity]
        print(f"🔀 Routing [{complexity}] → {model}")

        response = self.client.chat.completions.create(
            model=model,
            messages=messages,
        )
        return response

router = ModelRouter()

# Simple → gpt-4o-mini (rẻ 16x)
router.route("Dịch sang tiếng Anh: Xin chào", messages=[...])

# Complex → gpt-4o (mạnh)
router.route("Analyze this system architecture and suggest improvements", messages=[...])
```

### Cascading Strategy

```python
"""Cascading: thử model rẻ trước, fallback model đắt"""

class CascadingRouter:
    def __init__(self):
        self.client = OpenAI()
        self.models = [
            {"name": "gpt-4o-mini", "max_attempts": 1},
            {"name": "gpt-4o", "max_attempts": 1},
        ]

    def call(self, messages, quality_threshold=0.7):
        """Try cheap model first, escalate if quality is low"""
        for model_config in self.models:
            model = model_config["name"]
            response = self.client.chat.completions.create(
                model=model,
                messages=messages,
            )

            output = response.choices[0].message.content

            # Quick quality check
            quality = self.assess_quality(messages[-1]["content"], output)

            if quality >= quality_threshold:
                print(f"✅ {model} passed quality check ({quality:.2f})")
                return output, model
            else:
                print(f"⚠️ {model} failed quality ({quality:.2f}), escalating...")

        return output, model  # Return last attempt

    def assess_quality(self, question, answer):
        """Quick quality assessment (rule-based for speed)"""
        score = 0.5
        if len(answer) > 50:  score += 0.1
        if "?" not in answer:  score += 0.1  # Not just asking back
        if len(answer) < 2000: score += 0.1  # Not too verbose
        # Add more heuristics
        return min(score, 1.0)
```

---

## 4. Token Optimization

```python
"""Giảm token usage"""

# Technique 1: Prompt compression
def compress_prompt(system_prompt, max_words=200):
    """Rút gọn prompt giữ ý chính"""
    words = system_prompt.split()
    if len(words) <= max_words:
        return system_prompt

    # Remove filler words
    fillers = {"the", "a", "an", "is", "are", "was", "were",
               "will", "would", "could", "should", "very", "really"}
    compressed = [w for w in words if w.lower() not in fillers]
    return " ".join(compressed[:max_words])

# Technique 2: Context pruning cho RAG
def prune_context(documents, max_tokens=2000):
    """Giữ docs quan trọng nhất, cắt phần dư"""
    import tiktoken
    enc = tiktoken.encoding_for_model("gpt-4o-mini")

    pruned = []
    total_tokens = 0

    for doc in sorted(documents, key=lambda d: d["score"], reverse=True):
        doc_tokens = len(enc.encode(doc["content"]))
        if total_tokens + doc_tokens > max_tokens:
            # Truncate last doc
            remaining = max_tokens - total_tokens
            if remaining > 100:
                truncated = enc.decode(enc.encode(doc["content"])[:remaining])
                pruned.append({**doc, "content": truncated})
            break
        pruned.append(doc)
        total_tokens += doc_tokens

    return pruned

# Technique 3: Structured output (giảm output tokens)
# Thay vì: "The sentiment of this text is positive because..."
# Dùng: {"sentiment": "positive", "confidence": 0.95}
def get_structured_output(text):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Classify sentiment. Return JSON only: {\"sentiment\": \"positive|negative|neutral\", \"confidence\": 0.0-1.0}"},
            {"role": "user", "content": text},
        ],
        response_format={"type": "json_object"},
        max_tokens=50,  # Giới hạn output
    )
    return response
```

---

## 5. Self-Hosted Models

### 5.1 vLLM — High-throughput Serving

```python
"""vLLM: Serve LLM self-hosted, rất nhanh"""
# pip install vllm

# Start server
# python -m vllm.entrypoints.openai.api_server \
#   --model meta-llama/Llama-3.1-8B-Instruct \
#   --dtype float16 \
#   --max-model-len 8192 \
#   --gpu-memory-utilization 0.9

# Client (OpenAI-compatible API)
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="not-needed",
)

response = client.chat.completions.create(
    model="meta-llama/Llama-3.1-8B-Instruct",
    messages=[{"role": "user", "content": "MLOps là gì?"}],
)
print(response.choices[0].message.content)
# Cost: $0 per token (chỉ trả tiền GPU)
```

### 5.2 Ollama — Local Development

```python
"""Ollama: Chạy LLM trên laptop"""
# brew install ollama
# ollama pull llama3.1:8b

from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:11434/v1",
    api_key="ollama",
)

response = client.chat.completions.create(
    model="llama3.1:8b",
    messages=[{"role": "user", "content": "Explain Docker"}],
)
# Free, offline, private!
```

### 5.3 Cost Comparison: API vs Self-hosted

```
Scenario: 1M requests/tháng, 1000 tokens/request

API (GPT-4o-mini):
  1B tokens × $0.375/M = $375/tháng

Self-hosted (Llama 3.1 8B on A100):
  GPU: ~$1.50/hour × 24 × 30 = $1,080/tháng
  But: faster, private, no rate limits

Self-hosted (Llama 3.1 8B on A10G):
  GPU: ~$0.75/hour × 24 × 30 = $540/tháng

Break-even point:
  API rẻ hơn khi: < 2.5M requests/tháng (GPT-4o-mini)
  Self-host rẻ hơn khi: > 2.5M requests/tháng
```

---

## 6. Cost Monitoring & Budgeting

```python
"""Cost monitoring system"""
import time
from collections import defaultdict
from datetime import datetime, timedelta

class CostMonitor:
    def __init__(self, daily_budget=50.0):
        self.daily_budget = daily_budget
        self.costs = defaultdict(float)  # date → cost
        self.model_costs = defaultdict(float)  # model → cost

    def log_cost(self, model, input_tokens, output_tokens):
        """Log cost for a call"""
        prices = {
            "gpt-4o": {"input": 2.50/1e6, "output": 10.0/1e6},
            "gpt-4o-mini": {"input": 0.15/1e6, "output": 0.60/1e6},
        }

        p = prices.get(model, prices["gpt-4o-mini"])
        cost = input_tokens * p["input"] + output_tokens * p["output"]

        today = datetime.now().strftime("%Y-%m-%d")
        self.costs[today] += cost
        self.model_costs[model] += cost

        # Budget check
        if self.costs[today] > self.daily_budget:
            self._alert(f"🚨 Daily budget exceeded: ${self.costs[today]:.2f} > ${self.daily_budget}")

        if self.costs[today] > self.daily_budget * 0.8:
            self._alert(f"⚠️ 80% of daily budget used: ${self.costs[today]:.2f}")

        return cost

    def get_report(self):
        """Cost report"""
        today = datetime.now().strftime("%Y-%m-%d")
        return {
            "today_cost": f"${self.costs[today]:.2f}",
            "today_budget_usage": f"{self.costs[today]/self.daily_budget:.0%}",
            "cost_by_model": {k: f"${v:.2f}" for k, v in self.model_costs.items()},
            "total_cost": f"${sum(self.costs.values()):.2f}",
        }

    def _alert(self, message):
        print(message)
        # Send to Slack/PagerDuty/etc.

# Usage
monitor = CostMonitor(daily_budget=50.0)
cost = monitor.log_cost("gpt-4o-mini", input_tokens=500, output_tokens=200)
print(monitor.get_report())
```

---

## Tóm tắt

| Technique | Savings | Effort | Trade-off |
|-----------|---------|--------|-----------|
| **Semantic Caching** | 30-60% | 🔨🔨 | Cache staleness |
| **Model Routing** | 40-70% | 🔨🔨 | Quality on edge cases |
| **Token Optimization** | 20-40% | 🔨 | Prompt length limits |
| **Structured Output** | 30-50% | 🔨 | Less verbose |
| **Self-Hosted** | 50-90% | 🔨🔨🔨🔨 | Infra management |
| **Cascading** | 40-60% | 🔨🔨 | Added latency |

## Bài tập

1. **Semantic Cache:** Implement semantic cache, so sánh cache hit rate vs exact cache.
2. **Router:** Build model router (simple→mini, complex→4o). Test trên 100 queries.
3. **Cost Dashboard:** Build cost monitor, chạy 1000 LLM calls, generate report.
4. **Self-hosted:** Deploy Llama 3.1 8B qua Ollama, benchmark vs GPT-4o-mini.

> **Bài tiếp theo:** Guardrails, Safety & Compliance.
