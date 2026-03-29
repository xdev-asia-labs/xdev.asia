---
id: 019c9619-ac09-7009-d109-ac0900000009
title: 'Bài 9: LLM Observability — LangSmith, Langfuse & Arize'
slug: bai-9-llm-observability
description: >-
  LLM observability: tracing, logging, debugging. LangSmith integration.
  Langfuse self-hosted setup. Arize Phoenix cho LLM monitoring. Custom
  observability pipeline. Production debugging patterns.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: LLMOps"
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: "MLOps & LLMOps: Đưa AI lên Production"
  slug: mlops-llmops
---

## Giới thiệu

LLM application fail — nhưng **tại sao?** Prompt sai? Context thiếu? Model hallucinate? Retrieval kém? Bạn cần **observability** để debug.

> 🎯 **LLM Observability** = tracing + logging + monitoring cho LLM pipelines.

---

## 1. Tại sao cần LLM Observability?

```
Traditional Software:
  Request → Function A → Function B → Response
  Debug: logs, stack trace, breakpoints
  → Deterministic, easy to debug

LLM Application:
  User Query → Retrieve Docs → Build Prompt → LLM Call → Parse → Response
  Debug:
  ❌ LLM output non-deterministic
  ❌ Prompt dài, khó đọc log
  ❌ Chain of calls (RAG = 5+ bước)
  ❌ Tại sao model trả lời sai?
  ❌ Retrieval có đúng docs không?
```

### Những gì cần observe:

| Layer | Metrics | Traces |
|-------|---------|--------|
| **User** | Query patterns, feedback | User journey |
| **Retrieval** | Recall, relevance, latency | Chunks retrieved |
| **Prompt** | Token count, template used | Full prompt content |
| **LLM** | Latency, cost, tokens | Input/output, model config |
| **Output** | Quality, hallucination | Parsed result, errors |

---

## 2. LangSmith

### 2.1 Setup

```bash
pip install langsmith langchain
export LANGCHAIN_TRACING_V2=true
export LANGCHAIN_API_KEY="ls_..."
export LANGCHAIN_PROJECT="my-llm-app"
```

### 2.2 Automatic Tracing với LangChain

```python
"""LangSmith + LangChain — automatic tracing"""
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.schema.output_parser import StrOutputParser

# Tự động trace khi LANGCHAIN_TRACING_V2=true
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant. Respond in Vietnamese."),
    ("user", "{question}"),
])

chain = prompt | llm | StrOutputParser()

# Mọi call tự động được trace trên LangSmith
result = chain.invoke({"question": "MLOps là gì?"})
# → Xem trace trên smith.langchain.com
```

### 2.3 Manual Tracing

```python
"""LangSmith manual tracing — không cần LangChain"""
from langsmith import traceable, Client
from openai import OpenAI

client = OpenAI()
ls_client = Client()

@traceable(name="summarize_article")
def summarize(article: str) -> str:
    """Mỗi function call = 1 span trong trace"""
    chunks = chunk_text(article)
    context = retrieve_context(chunks)
    summary = generate_summary(context)
    return summary

@traceable(name="chunk_text")
def chunk_text(text: str) -> list:
    # Split text into chunks
    chunks = [text[i:i+1000] for i in range(0, len(text), 500)]
    return chunks

@traceable(name="retrieve_context")
def retrieve_context(chunks: list) -> str:
    # Retrieve relevant context
    return " ".join(chunks[:3])

@traceable(name="generate_summary")
def generate_summary(context: str) -> str:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Summarize in Vietnamese."},
            {"role": "user", "content": context},
        ],
    )
    return response.choices[0].message.content

# Call → tự trace với nested spans
result = summarize("Your long article here...")
```

### 2.4 Feedback & Evaluation

```python
"""LangSmith Evaluation"""
from langsmith import Client
from langsmith.evaluation import evaluate

client = Client()

# Define evaluator
def quality_evaluator(run, example):
    """Custom evaluator"""
    prediction = run.outputs.get("output", "")
    reference = example.outputs.get("expected", "")

    # Simple: check if key points are covered
    key_points = reference.split(". ")
    covered = sum(1 for point in key_points if point.lower() in prediction.lower())
    score = covered / len(key_points) if key_points else 0

    return {"score": score, "key": "coverage"}

# Run evaluation
results = evaluate(
    lambda inputs: {"output": summarize(inputs["article"])},
    data="my-eval-dataset",  # Dataset trên LangSmith
    evaluators=[quality_evaluator],
    experiment_prefix="summarizer-v2",
)

print(f"Average coverage: {results.aggregate_metrics['coverage']:.2%}")
```

---

## 3. Langfuse — Open Source Alternative

### 3.1 Setup (Self-hosted)

```bash
# Docker compose
git clone https://github.com/langfuse/langfuse.git
cd langfuse
docker compose up -d
# → http://localhost:3000
```

```bash
pip install langfuse
export LANGFUSE_PUBLIC_KEY="pk-..."
export LANGFUSE_SECRET_KEY="sk-..."
export LANGFUSE_HOST="http://localhost:3000"
```

### 3.2 Tracing

```python
"""Langfuse tracing"""
from langfuse import Langfuse
from langfuse.decorators import observe, langfuse_context
from openai import OpenAI

langfuse = Langfuse()
openai_client = OpenAI()

@observe()
def rag_pipeline(question: str):
    """Full RAG pipeline — auto traced"""
    # Step 1: Retrieve
    docs = retrieve_documents(question)

    # Step 2: Generate
    answer = generate_answer(question, docs)

    return answer

@observe()
def retrieve_documents(question: str):
    """Retrieve relevant documents"""
    # Simulate retrieval
    langfuse_context.update_current_observation(
        metadata={"retriever": "chromadb", "top_k": 5}
    )
    return ["doc1 content", "doc2 content", "doc3 content"]

@observe(as_type="generation")
def generate_answer(question: str, docs: list):
    """Generate answer từ LLM"""
    context = "\n".join(docs)

    response = openai_client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": f"Answer based on context:\n{context}"},
            {"role": "user", "content": question},
        ],
    )

    # Log generation details
    langfuse_context.update_current_observation(
        model="gpt-4o-mini",
        usage={
            "input": response.usage.prompt_tokens,
            "output": response.usage.completion_tokens,
        },
        metadata={"temperature": 0.7},
    )

    return response.choices[0].message.content

# Use
answer = rag_pipeline("MLOps best practices là gì?")
langfuse.flush()  # Đảm bảo gửi traces
```

### 3.3 Scores & Feedback

```python
"""Langfuse scoring — track quality"""
from langfuse import Langfuse

langfuse = Langfuse()

# Score a trace
langfuse.score(
    trace_id="trace-id-from-observation",
    name="quality",
    value=4.5,
    comment="Good summary, covers all key points",
)

# User feedback
langfuse.score(
    trace_id="trace-id",
    name="user_feedback",
    value=1,  # thumbs up
    data_type="BOOLEAN",
)

# Automated scoring
langfuse.score(
    trace_id="trace-id",
    name="hallucination",
    value=0,  # no hallucination
    comment="All facts verified against source",
)
```

---

## 4. Arize Phoenix — Local LLM Tracing

```python
"""Arize Phoenix — Open source LLM observability"""
# pip install arize-phoenix openinference-instrumentation-openai

import phoenix as px
from openinference.instrumentation.openai import OpenAIInstrumentor

# Launch Phoenix UI
session = px.launch_app()
# → http://localhost:6006

# Instrument OpenAI
OpenAIInstrumentor().instrument()

# Now all OpenAI calls are automatically traced
from openai import OpenAI
client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Explain MLOps"}],
)
# → Xem trace trên Phoenix UI

# Instrument LangChain
from openinference.instrumentation.langchain import LangChainInstrumentor
LangChainInstrumentor().instrument()
```

---

## 5. Custom Observability Pipeline

```python
"""Custom LLM observability khi không dùng tool bên ngoài"""
import json
import time
import logging
from datetime import datetime
from dataclasses import dataclass, asdict

logger = logging.getLogger("llm_observability")

@dataclass
class LLMTrace:
    trace_id: str
    timestamp: str
    function_name: str
    model: str
    input_tokens: int
    output_tokens: int
    latency_ms: float
    cost_usd: float
    status: str
    input_preview: str
    output_preview: str
    metadata: dict = None
    error: str = None

class LLMObserver:
    def __init__(self):
        self.traces = []

    def trace(self, func):
        """Decorator cho LLM calls"""
        def wrapper(*args, **kwargs):
            trace_id = f"trace_{int(time.time()*1000)}"
            start = time.time()

            try:
                result = func(*args, **kwargs)
                latency = (time.time() - start) * 1000

                trace = LLMTrace(
                    trace_id=trace_id,
                    timestamp=datetime.now().isoformat(),
                    function_name=func.__name__,
                    model=kwargs.get("model", "unknown"),
                    input_tokens=getattr(result, 'usage', None) and result.usage.prompt_tokens or 0,
                    output_tokens=getattr(result, 'usage', None) and result.usage.completion_tokens or 0,
                    latency_ms=latency,
                    cost_usd=self._calc_cost(result),
                    status="success",
                    input_preview=str(args)[:200],
                    output_preview=str(result)[:200],
                )
                self._log(trace)
                return result

            except Exception as e:
                latency = (time.time() - start) * 1000
                trace = LLMTrace(
                    trace_id=trace_id,
                    timestamp=datetime.now().isoformat(),
                    function_name=func.__name__,
                    model=kwargs.get("model", "unknown"),
                    input_tokens=0, output_tokens=0,
                    latency_ms=latency, cost_usd=0,
                    status="error",
                    input_preview=str(args)[:200],
                    output_preview="",
                    error=str(e),
                )
                self._log(trace)
                raise

        return wrapper

    def _log(self, trace):
        self.traces.append(trace)
        logger.info(json.dumps(asdict(trace)))

    def _calc_cost(self, result):
        if not hasattr(result, 'usage'):
            return 0
        # Simplified pricing
        return (result.usage.prompt_tokens * 0.15 +
                result.usage.completion_tokens * 0.60) / 1e6

    def get_dashboard(self):
        """Dashboard metrics"""
        if not self.traces:
            return {}

        successful = [t for t in self.traces if t.status == "success"]
        return {
            "total_calls": len(self.traces),
            "success_rate": len(successful) / len(self.traces),
            "total_cost": sum(t.cost_usd for t in self.traces),
            "avg_latency_ms": sum(t.latency_ms for t in successful) / len(successful),
            "total_tokens": sum(t.input_tokens + t.output_tokens for t in self.traces),
            "errors": len([t for t in self.traces if t.status == "error"]),
        }

# Usage
observer = LLMObserver()

@observer.trace
def call_llm(**kwargs):
    return client.chat.completions.create(**kwargs)

# Later
print(observer.get_dashboard())
```

---

## 6. Production Debugging Patterns

```python
"""Common LLM debugging patterns"""

# Pattern 1: Trace ID propagation
# Mỗi request có unique trace_id → track qua toàn bộ pipeline

# Pattern 2: Input/Output logging
# Log full prompt & response (cẩn thận PII!)

# Pattern 3: Retrieval debugging
def debug_retrieval(question, retrieved_docs, answer):
    """Debug RAG quality"""
    print(f"❓ Question: {question}")
    print(f"📄 Retrieved {len(retrieved_docs)} docs:")
    for i, doc in enumerate(retrieved_docs):
        print(f"   [{i+1}] {doc['title']} (score: {doc['score']:.3f})")
        print(f"       {doc['content'][:100]}...")
    print(f"💬 Answer: {answer[:200]}...")

    # Check if answer is grounded in retrieved docs
    grounded = check_grounding(answer, retrieved_docs)
    if not grounded:
        print("⚠️ HALLUCINATION DETECTED: Answer not grounded in docs!")

# Pattern 4: Cost anomaly detection
def check_cost_anomaly(recent_cost, baseline_cost, threshold=2.0):
    if recent_cost > baseline_cost * threshold:
        alert(f"🚨 Cost anomaly: ${recent_cost:.2f} vs baseline ${baseline_cost:.2f}")
```

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **LLM Observability** | Tracing + Logging + Monitoring cho LLM |
| **LangSmith** | Cloud, tích hợp LangChain, evaluation |
| **Langfuse** | Open source, self-hosted, scoring |
| **Arize Phoenix** | Local, auto-instrument OpenAI/LangChain |
| **Tracing** | Xem từng bước trong pipeline |
| **Scoring** | Track quality qua feedback & automated |

## Bài tập

1. **LangSmith:** Setup LangSmith, trace 1 RAG pipeline, xem traces trên UI.
2. **Langfuse:** Deploy Langfuse local (Docker), instrument 1 LLM app, xem traces.
3. **Custom Observer:** Build custom observability class, log 50 LLM calls, tạo dashboard.
4. **Debugging:** Tạo 1 RAG pipeline có bug (retrieval kém), dùng traces để tìm & fix.

> **Bài tiếp theo:** Cost Optimization — Caching, Routing & Quantization.
