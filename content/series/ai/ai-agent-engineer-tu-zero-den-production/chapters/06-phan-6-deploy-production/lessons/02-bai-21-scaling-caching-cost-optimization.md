---
id: 019e0a01-bb21-7001-c001-ee2100000001
title: "Bài 21: Scaling, Caching & Cost Optimization"
slug: bai-21-scaling-caching-cost-optimization
description: >-
  Scaling strategies: horizontal, auto-scaling, load balancing. Caching layers: Redis, semantic cache. Model quantization (GPTQ, AWQ, GGUF). Batching inference requests. Token usage optimization. Cost analysis & budgeting.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 6: Deploy AI System Production"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **Chi phí API cho 1 triệu queries/tháng có thể dao động từ $500 đến $50,000 — tùy thuộc vào cách bạn scale, cache và route model.** Bài này sẽ biến bạn từ người "đốt tiền" thành kiến trúc sư tối ưu chi phí AI production.

## 1. Scaling Challenges cho AI Systems

### 1.1. Tại sao AI khác biệt khi scale

Scaling một AI system không giống scaling một web app thông thường. Có 3 thách thức cốt lõi:

| Challenge | Web App truyền thống | AI System |
|-----------|---------------------|-----------|
| **Compute** | CPU-bound, dễ scale | GPU-bound, đắt đỏ |
| **Latency** | ~50-200ms | ~500ms-30s per request |
| **Memory** | ~100MB-1GB per instance | ~4-80GB VRAM per model |
| **Cost per request** | ~$0.0001 | ~$0.001-$0.10 |
| **Stateful** | Stateless thường | Conversation context, KV cache |
| **Cold start** | ~100ms | ~10-60s (model loading) |

### 1.2. GPU Bottleneck — Bài toán cốt lõi

```
┌─────────────────────────────────────────────────────┐
│              GPU Bottleneck Analysis                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Request Queue     GPU Processing      Response     │
│  ┌─────────┐      ┌─────────────┐    ┌─────────┐  │
│  │ ░░░░░░░ │─────▶│  Model      │───▶│ Result  │  │
│  │ ░░░░░░░ │      │  Inference  │    └─────────┘  │
│  │ ░░░░░░░ │      │  (1 GPU)    │                  │
│  │ ░░░░░░░ │      └─────────────┘                  │
│  │ WAITING │                                        │
│  └─────────┘      Throughput: ~10-50 req/s          │
│                   (depends on model size)            │
│                                                     │
│  Problem: 100 concurrent users = 90 đang chờ!      │
└─────────────────────────────────────────────────────┘
```

### 1.3. Cost Explosion — Kịch bản thực tế

```python
# Cost explosion khi scale naively
def calculate_naive_cost():
    """1M queries/month với GPT-4o"""
    avg_input_tokens = 500
    avg_output_tokens = 300
    
    # GPT-4o pricing
    input_cost_per_1m = 2.50   # $/1M input tokens
    output_cost_per_1m = 10.00  # $/1M output tokens
    
    monthly_input_tokens = 1_000_000 * avg_input_tokens   # 500M tokens
    monthly_output_tokens = 1_000_000 * avg_output_tokens  # 300M tokens
    
    input_cost = (monthly_input_tokens / 1_000_000) * input_cost_per_1m
    output_cost = (monthly_output_tokens / 1_000_000) * output_cost_per_1m
    
    total = input_cost + output_cost
    print(f"Input cost:  ${input_cost:,.2f}/month")
    print(f"Output cost: ${output_cost:,.2f}/month")
    print(f"Total LLM:   ${total:,.2f}/month")
    # Input cost:  $1,250.00/month
    # Output cost: $3,000.00/month
    # Total LLM:   $4,250.00/month
    # Chưa tính embedding, infra, storage!
```

---

## 2. Horizontal Scaling — Load Balancing AI Services

### 2.1. Architecture Pattern

```
                    ┌──────────────┐
                    │   Clients    │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │ Load Balancer│
                    │  (L7/gRPC)  │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
        ┌─────▼────┐ ┌────▼─────┐ ┌────▼─────┐
        │ AI Svc 1 │ │ AI Svc 2 │ │ AI Svc 3 │
        │ (GPU A)  │ │ (GPU B)  │ │ (GPU C)  │
        └─────┬────┘ └────┬─────┘ └────┬─────┘
              │            │            │
        ┌─────▼────────────▼────────────▼─────┐
        │          Shared Cache (Redis)        │
        └──────────────────────────────────────┘
```

### 2.2. Load Balancing Strategies cho AI

```python
# nginx.conf cho AI load balancing
"""
upstream ai_backend {
    # Least connections — phù hợp AI vì request time khác nhau
    least_conn;
    
    server gpu-node-1:8000 weight=3;  # A100 80GB — mạnh hơn
    server gpu-node-2:8000 weight=2;  # A100 40GB
    server gpu-node-3:8000 weight=1;  # T4 16GB — yếu hơn
    
    # Health check
    keepalive 32;
}
"""

# Python: Custom load balancer với health-aware routing
import asyncio
import httpx
from dataclasses import dataclass, field
from typing import Optional

@dataclass
class GPUNode:
    url: str
    gpu_memory_total: int     # GB
    gpu_memory_used: float = 0.0
    active_requests: int = 0
    avg_latency_ms: float = 0.0
    is_healthy: bool = True
    
    @property
    def load_score(self) -> float:
        """Score thấp = node tốt hơn để route đến"""
        memory_ratio = self.gpu_memory_used / self.gpu_memory_total
        return (self.active_requests * 0.4 
                + memory_ratio * 0.4 
                + self.avg_latency_ms / 1000 * 0.2)

class AILoadBalancer:
    def __init__(self, nodes: list[GPUNode]):
        self.nodes = nodes
    
    def select_node(self, request_type: str = "default") -> Optional[GPUNode]:
        healthy = [n for n in self.nodes if n.is_healthy]
        if not healthy:
            return None
        # Chọn node có load_score thấp nhất
        return min(healthy, key=lambda n: n.load_score)
    
    async def health_check(self):
        """Định kỳ kiểm tra GPU health"""
        async with httpx.AsyncClient() as client:
            for node in self.nodes:
                try:
                    resp = await client.get(
                        f"{node.url}/health", timeout=5.0
                    )
                    data = resp.json()
                    node.gpu_memory_used = data["gpu_memory_used"]
                    node.active_requests = data["active_requests"]
                    node.is_healthy = True
                except Exception:
                    node.is_healthy = False
```

### 2.3. Sticky Sessions cho Stateful Agents

Multi-turn conversation agents cần giữ context trên cùng một node:

```python
# Sticky session với conversation_id routing
import hashlib

class ConversationRouter:
    def __init__(self, nodes: list[str]):
        self.nodes = sorted(nodes)
    
    def route(self, conversation_id: str) -> str:
        """Consistent hashing — cùng conversation luôn đến cùng node"""
        hash_val = int(hashlib.md5(
            conversation_id.encode()
        ).hexdigest(), 16)
        node_index = hash_val % len(self.nodes)
        return self.nodes[node_index]
    
    def route_with_fallback(self, conversation_id: str, 
                            unhealthy: set[str]) -> str:
        """Fallback nếu node chính down"""
        primary = self.route(conversation_id)
        if primary not in unhealthy:
            return primary
        # Ring-based fallback
        start = self.nodes.index(primary)
        for i in range(1, len(self.nodes)):
            candidate = self.nodes[(start + i) % len(self.nodes)]
            if candidate not in unhealthy:
                return candidate
        raise RuntimeError("All nodes unhealthy")
```

---

## 3. Auto-Scaling Strategies

### 3.1. Kubernetes HPA cho AI Workloads

```yaml
# hpa-ai-service.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: ai-inference-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ai-inference
  minReplicas: 2
  maxReplicas: 10
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60    # Chờ 1 phút trước khi scale up
      policies:
        - type: Pods
          value: 2                       # Tối đa thêm 2 pods mỗi lần
          periodSeconds: 120
    scaleDown:
      stabilizationWindowSeconds: 300    # Chờ 5 phút trước khi scale down
      policies:
        - type: Pods
          value: 1
          periodSeconds: 300
  metrics:
    # Custom metric: GPU utilization
    - type: Pods
      pods:
        metric:
          name: gpu_utilization_percent
        target:
          type: AverageValue
          averageValue: "70"             # Scale khi GPU > 70%
    # Custom metric: request queue length
    - type: External
      external:
        metric:
          name: inference_queue_length
        target:
          type: AverageValue
          averageValue: "20"             # Scale khi queue > 20 requests
```

### 3.2. AWS Auto Scaling với Target Tracking

```python
import boto3

def setup_ai_autoscaling():
    client = boto3.client('application-autoscaling')
    
    # Register scalable target
    client.register_scalable_target(
        ServiceNamespace='ecs',
        ResourceId='service/ai-cluster/ai-inference-service',
        ScalableDimension='ecs:service:DesiredCount',
        MinCapacity=2,
        MaxCapacity=20,
    )
    
    # Target tracking: GPU utilization
    client.put_scaling_policy(
        PolicyName='ai-gpu-target-tracking',
        ServiceNamespace='ecs',
        ResourceId='service/ai-cluster/ai-inference-service',
        ScalableDimension='ecs:service:DesiredCount',
        PolicyType='TargetTrackingScaling',
        TargetTrackingScalingPolicyConfiguration={
            'TargetValue': 70.0,
            'CustomizedMetricSpecification': {
                'MetricName': 'GPUUtilization',
                'Namespace': 'AI/Inference',
                'Statistic': 'Average',
            },
            'ScaleInCooldown': 300,    # 5 min cooldown
            'ScaleOutCooldown': 60,    # 1 min cooldown
        },
    )
    
    # Step scaling: queue-based
    client.put_scaling_policy(
        PolicyName='ai-queue-step-scaling',
        ServiceNamespace='ecs',
        ResourceId='service/ai-cluster/ai-inference-service',
        ScalableDimension='ecs:service:DesiredCount',
        PolicyType='StepScaling',
        StepScalingPolicyConfiguration={
            'AdjustmentType': 'ChangeInCapacity',
            'StepAdjustments': [
                {'MetricIntervalLowerBound': 0,
                 'MetricIntervalUpperBound': 50, 
                 'ScalingAdjustment': 2},       # Queue 0-50: +2
                {'MetricIntervalLowerBound': 50,
                 'MetricIntervalUpperBound': 200, 
                 'ScalingAdjustment': 5},       # Queue 50-200: +5
                {'MetricIntervalLowerBound': 200, 
                 'ScalingAdjustment': 10},      # Queue >200: +10
            ],
            'Cooldown': 120,
        },
    )
```

### 3.3. Predictive Scaling — Lên lịch trước

```python
# Predictive scaling dựa trên traffic patterns
from datetime import datetime

SCALING_SCHEDULE = {
    # Weekday patterns (UTC)
    "weekday": {
        (0, 6):   2,    # 00:00-06:00: 2 replicas (low)
        (6, 9):   5,    # 06:00-09:00: ramp up
        (9, 17):  10,   # 09:00-17:00: peak hours
        (17, 21): 7,    # 17:00-21:00: wind down
        (21, 24): 3,    # 21:00-00:00: evening low
    },
    "weekend": {
        (0, 10):  2,
        (10, 20): 5,
        (20, 24): 2,
    },
}

def get_desired_replicas(now: datetime = None) -> int:
    now = now or datetime.utcnow()
    day_type = "weekend" if now.weekday() >= 5 else "weekday"
    hour = now.hour
    for (start, end), replicas in SCALING_SCHEDULE[day_type].items():
        if start <= hour < end:
            return replicas
    return 2
```

---

## 4. Caching Layers for AI

Caching là **vũ khí mạnh nhất** để giảm chi phí AI. Một cache hit có thể tiết kiệm $0.01-$0.10 per request.

```
┌──────────────────────────────────────────────────────┐
│                 AI Caching Architecture               │
│                                                       │
│  Request ──▶ [L1: Exact Cache] ──hit──▶ Response     │
│                    │ miss                              │
│                    ▼                                   │
│             [L2: Semantic Cache] ──hit──▶ Response    │
│                    │ miss                              │
│                    ▼                                   │
│             [L3: Embedding Cache] ──hit──▶ Embedding  │
│                    │ miss                              │
│                    ▼                                   │
│             [LLM / Embedding API] ──▶ Response        │
│                    │                                   │
│                    ▼                                   │
│             [Update All Cache Layers]                  │
└──────────────────────────────────────────────────────┘
```

### 4.1. Exact Match Cache (Redis)

```python
import hashlib
import json
import redis
from typing import Optional

class ExactMatchCache:
    """Cache cho identical prompts — hit rate ~15-30% typical"""
    
    def __init__(self, redis_url: str = "redis://localhost:6379"):
        self.redis = redis.from_url(redis_url)
        self.ttl = 3600 * 24  # 24 hours
    
    def _make_key(self, model: str, messages: list[dict], 
                  temperature: float) -> str:
        """Deterministic key từ request params"""
        payload = json.dumps({
            "model": model,
            "messages": messages,
            "temperature": temperature,
        }, sort_keys=True)
        return f"llm:exact:{hashlib.sha256(payload.encode()).hexdigest()}"
    
    def get(self, model: str, messages: list[dict], 
            temperature: float) -> Optional[dict]:
        key = self._make_key(model, messages, temperature)
        cached = self.redis.get(key)
        if cached:
            self.redis.incr("cache:exact:hits")
            return json.loads(cached)
        self.redis.incr("cache:exact:misses")
        return None
    
    def set(self, model: str, messages: list[dict], 
            temperature: float, response: dict):
        # Chỉ cache khi temperature = 0 (deterministic)
        if temperature > 0:
            return
        key = self._make_key(model, messages, temperature)
        self.redis.setex(key, self.ttl, json.dumps(response))
```

### 4.2. Semantic Cache — Similar Prompts

```python
import numpy as np
from openai import OpenAI

class SemanticCache:
    """Cache cho semantically similar prompts — hit rate +20-40%"""
    
    def __init__(self, redis_url: str, similarity_threshold: float = 0.95):
        self.redis = redis.from_url(redis_url)
        self.client = OpenAI()
        self.threshold = similarity_threshold
        self.index_key = "cache:semantic:index"
    
    def _get_embedding(self, text: str) -> list[float]:
        """Compute embedding cho query"""
        resp = self.client.embeddings.create(
            model="text-embedding-3-small",
            input=text,
        )
        return resp.data[0].embedding
    
    def _cosine_similarity(self, a: list[float], b: list[float]) -> float:
        a_np, b_np = np.array(a), np.array(b)
        return float(np.dot(a_np, b_np) / (
            np.linalg.norm(a_np) * np.linalg.norm(b_np)
        ))
    
    def get(self, query: str) -> Optional[dict]:
        query_embedding = self._get_embedding(query)
        
        # Scan cached embeddings (production: dùng vector DB)
        cached_keys = self.redis.smembers(self.index_key)
        best_match = None
        best_score = 0.0
        
        for key in cached_keys:
            cached = json.loads(self.redis.get(key))
            score = self._cosine_similarity(
                query_embedding, cached["embedding"]
            )
            if score > best_score:
                best_score = score
                best_match = cached
        
        if best_match and best_score >= self.threshold:
            return {
                "response": best_match["response"],
                "similarity": best_score,
                "cache_type": "semantic",
            }
        return None
    
    def set(self, query: str, response: dict):
        embedding = self._get_embedding(query)
        key = f"cache:semantic:{hashlib.md5(query.encode()).hexdigest()}"
        self.redis.setex(key, 86400, json.dumps({
            "query": query,
            "embedding": embedding,
            "response": response,
        }))
        self.redis.sadd(self.index_key, key)
```

> **Lưu ý quan trọng:** Trong production, dùng **Redis Vector Search** hoặc **Qdrant** thay vì scan toàn bộ keys. Cách trên chỉ minh họa logic.

### 4.3. Embedding Cache

```python
class EmbeddingCache:
    """Tránh re-compute embeddings cho cùng text"""
    
    def __init__(self, redis_url: str):
        self.redis = redis.from_url(redis_url)
        self.ttl = 86400 * 7  # 7 ngày — embeddings ít thay đổi
    
    def get_or_compute(self, texts: list[str], 
                       model: str = "text-embedding-3-small") -> list[list[float]]:
        results = [None] * len(texts)
        to_compute = []
        to_compute_indices = []
        
        # Check cache trước
        for i, text in enumerate(texts):
            key = f"emb:{model}:{hashlib.sha256(text.encode()).hexdigest()}"
            cached = self.redis.get(key)
            if cached:
                results[i] = json.loads(cached)
            else:
                to_compute.append(text)
                to_compute_indices.append(i)
        
        # Compute missing embeddings (batch)
        if to_compute:
            client = OpenAI()
            resp = client.embeddings.create(
                model=model, input=to_compute
            )
            for j, emb_data in enumerate(resp.data):
                idx = to_compute_indices[j]
                results[idx] = emb_data.embedding
                # Cache kết quả
                key = f"emb:{model}:{hashlib.sha256(to_compute[j].encode()).hexdigest()}"
                self.redis.setex(key, self.ttl, json.dumps(emb_data.embedding))
        
        cache_hit_rate = (len(texts) - len(to_compute)) / len(texts)
        print(f"Embedding cache hit rate: {cache_hit_rate:.1%}")
        return results
```

### 4.4. Multi-Layer Cache Orchestrator

```python
class AICache:
    """Orchestrate multiple cache layers"""
    
    def __init__(self, redis_url: str):
        self.exact = ExactMatchCache(redis_url)
        self.semantic = SemanticCache(redis_url)
        self.stats = {"exact_hits": 0, "semantic_hits": 0, "misses": 0}
    
    async def get_or_call(self, model: str, messages: list[dict],
                          temperature: float, call_fn) -> dict:
        # L1: Exact match
        result = self.exact.get(model, messages, temperature)
        if result:
            self.stats["exact_hits"] += 1
            return result
        
        # L2: Semantic (chỉ check user message cuối)
        user_query = messages[-1]["content"] if messages else ""
        result = self.semantic.get(user_query)
        if result:
            self.stats["semantic_hits"] += 1
            return result["response"]
        
        # L3: Call API
        self.stats["misses"] += 1
        response = await call_fn(model=model, messages=messages,
                                  temperature=temperature)
        
        # Update caches
        self.exact.set(model, messages, temperature, response)
        self.semantic.set(user_query, response)
        return response
    
    def get_hit_rate(self) -> dict:
        total = sum(self.stats.values())
        if total == 0:
            return {"total_hit_rate": 0}
        hits = self.stats["exact_hits"] + self.stats["semantic_hits"]
        return {
            "total_hit_rate": f"{hits/total:.1%}",
            "exact_hit_rate": f"{self.stats['exact_hits']/total:.1%}",
            "semantic_hit_rate": f"{self.stats['semantic_hits']/total:.1%}",
            "total_requests": total,
        }
```

---

## 5. Model Quantization for Production

Quantization giảm model size và tăng inference speed bằng cách giảm precision (FP16 → INT8 → INT4).

### 5.1. So sánh các phương pháp

| Method | Precision | Size giảm | Speed tăng | Quality loss | Use case |
|--------|-----------|-----------|------------|--------------|----------|
| **FP16** | 16-bit | Baseline | Baseline | None | Default inference |
| **GPTQ** | 4-bit | ~75% | ~2-3x | Rất nhỏ | GPU inference |
| **AWQ** | 4-bit | ~75% | ~2-4x | Nhỏ hơn GPTQ | GPU inference (tốt hơn) |
| **GGUF** | 2-8 bit | ~60-85% | ~1.5-3x | Tùy quant level | CPU + GPU (llama.cpp) |
| **bitsandbytes** | 4/8-bit | ~50-75% | ~1.5-2x | Nhỏ | Training + Inference |

### 5.2. Deploy model quantized với vLLM

```bash
# Cài đặt vLLM
pip install vllm

# Serve model GPTQ quantized
python -m vllm.entrypoints.openai.api_server \
    --model TheBloke/Llama-2-13B-chat-GPTQ \
    --quantization gptq \
    --dtype half \
    --max-model-len 4096 \
    --gpu-memory-utilization 0.90 \
    --port 8000

# Serve model AWQ quantized (thường nhanh hơn GPTQ)
python -m vllm.entrypoints.openai.api_server \
    --model TheBloke/Llama-2-13B-chat-AWQ \
    --quantization awq \
    --dtype half \
    --max-model-len 4096 \
    --port 8000
```

### 5.3. GGUF cho CPU/Hybrid Inference

```python
# llama-cpp-python: chạy GGUF models trên CPU hoặc CPU+GPU
from llama_cpp import Llama

# Load model GGUF — tự động offload layers lên GPU
llm = Llama(
    model_path="./models/llama-2-13b-chat.Q4_K_M.gguf",
    n_ctx=4096,          # Context window
    n_gpu_layers=20,     # Offload 20 layers lên GPU, còn lại CPU
    n_threads=8,         # CPU threads
    verbose=False,
)

# Inference
output = llm.create_chat_completion(
    messages=[{"role": "user", "content": "Explain AI caching"}],
    max_tokens=512,
    temperature=0.7,
)
print(output["choices"][0]["message"]["content"])
```

```
┌──────────────────────────────────────────┐
│     Quantization Decision Tree           │
│                                          │
│  Có GPU?                                 │
│  ├─ Yes ─▶ VRAM >= 24GB?                │
│  │         ├─ Yes ─▶ FP16 hoặc AWQ      │
│  │         └─ No ──▶ GPTQ / AWQ (4-bit) │
│  └─ No ──▶ GGUF Q4_K_M (CPU)            │
│                                          │
│  Cần quality cao nhất?                   │
│  ├─ Yes ─▶ AWQ > GPTQ > GGUF Q8         │
│  └─ No ──▶ GGUF Q4_K_M (best trade-off) │
└──────────────────────────────────────────┘
```

---

## 6. Batching Inference Requests

### 6.1. Dynamic Batching

Gom nhiều requests thành 1 batch để maximize GPU utilization:

```python
import asyncio
import time
from dataclasses import dataclass, field

@dataclass
class InferenceRequest:
    prompt: str
    max_tokens: int = 256
    future: asyncio.Future = field(default_factory=lambda: asyncio.get_event_loop().create_future())
    arrived_at: float = field(default_factory=time.time)

class DynamicBatcher:
    """Gom requests thành batches cho GPU inference"""
    
    def __init__(self, max_batch_size: int = 32, 
                 max_wait_ms: float = 50):
        self.queue: asyncio.Queue[InferenceRequest] = asyncio.Queue()
        self.max_batch_size = max_batch_size
        self.max_wait_ms = max_wait_ms
    
    async def add_request(self, prompt: str, 
                          max_tokens: int = 256) -> str:
        req = InferenceRequest(prompt=prompt, max_tokens=max_tokens)
        await self.queue.put(req)
        return await req.future
    
    async def batch_processor(self, model):
        """Background task: liên tục gom và xử lý batch"""
        while True:
            batch: list[InferenceRequest] = []
            
            # Chờ request đầu tiên
            first = await self.queue.get()
            batch.append(first)
            
            # Gom thêm requests trong max_wait_ms
            deadline = time.time() + self.max_wait_ms / 1000
            while len(batch) < self.max_batch_size:
                remaining = deadline - time.time()
                if remaining <= 0:
                    break
                try:
                    req = await asyncio.wait_for(
                        self.queue.get(), timeout=remaining
                    )
                    batch.append(req)
                except asyncio.TimeoutError:
                    break
            
            # Process batch
            prompts = [r.prompt for r in batch]
            try:
                results = await model.generate_batch(prompts)
                for req, result in zip(batch, results):
                    req.future.set_result(result)
            except Exception as e:
                for req in batch:
                    req.future.set_exception(e)
```

### 6.2. Continuous Batching với vLLM

```python
# vLLM tự động continuous batching — không cần code custom
# Chỉ cần start server, nó handle batching internally

# Client gửi requests concurrent — vLLM tự batch
import asyncio
import httpx

async def send_concurrent_requests():
    prompts = [f"Explain concept {i}" for i in range(100)]
    
    async with httpx.AsyncClient() as client:
        tasks = [
            client.post("http://localhost:8000/v1/completions", json={
                "model": "meta-llama/Llama-2-13b-chat",
                "prompt": prompt,
                "max_tokens": 256,
            }, timeout=60.0)
            for prompt in prompts
        ]
        # vLLM continuous batching: iterate token by token
        # Requests xong sớm giải phóng slot cho requests mới
        responses = await asyncio.gather(*tasks)
    return responses
```

| Batching Type | Throughput | Latency | Complexity |
|---------------|-----------|---------|------------|
| **No batching** | 10 req/s | Low | None |
| **Static batching** | 30 req/s | Higher (chờ full batch) | Low |
| **Dynamic batching** | 40 req/s | Medium | Medium |
| **Continuous batching** (vLLM) | 50-80 req/s | Low | Built-in |

---

## 7. Token Usage Optimization

### 7.1. Prompt Compression

```python
# Kỹ thuật 1: Loại bỏ verbose instructions
VERBOSE_PROMPT = """
You are a helpful AI assistant. I would like you to help me with 
a question about programming. Please provide a detailed and 
comprehensive answer. The question is: What is a Python decorator?
"""  # ~40 tokens

COMPRESSED_PROMPT = """
Explain Python decorators concisely.
"""  # ~6 tokens  → tiết kiệm 85% input tokens

# Kỹ thuật 2: Tóm tắt conversation history
def compress_history(messages: list[dict], 
                     max_messages: int = 10) -> list[dict]:
    """Giữ system prompt + N messages gần nhất"""
    if len(messages) <= max_messages + 1:
        return messages
    
    system = [m for m in messages if m["role"] == "system"]
    recent = messages[-(max_messages):]
    
    # Tóm tắt messages cũ thành 1 summary
    old_messages = messages[len(system):-max_messages]
    summary = summarize_messages(old_messages)  # Call LLM nhỏ
    
    return system + [
        {"role": "system", "content": f"Previous context: {summary}"}
    ] + recent

# Kỹ thuật 3: Context pruning cho RAG
def prune_context(chunks: list[str], max_tokens: int = 2000) -> list[str]:
    """Chỉ giữ chunks relevant nhất, fit trong token budget"""
    pruned = []
    total_tokens = 0
    for chunk in chunks:  # Đã sort theo relevance score
        chunk_tokens = len(chunk.split()) * 1.3  # Ước lượng
        if total_tokens + chunk_tokens > max_tokens:
            break
        pruned.append(chunk)
        total_tokens += chunk_tokens
    return pruned
```

### 7.2. Output Length Control

```python
# Kiểm soát output tokens — tránh LLM "nói dài"
def smart_max_tokens(query_type: str) -> int:
    """Đặt max_tokens phù hợp theo loại query"""
    TOKEN_LIMITS = {
        "yes_no": 10,
        "classification": 20,
        "short_answer": 100,
        "explanation": 300,
        "code_generation": 500,
        "long_form": 1000,
    }
    return TOKEN_LIMITS.get(query_type, 256)

# Kết hợp trong API call
def call_llm(query: str, query_type: str):
    max_tokens = smart_max_tokens(query_type)
    return client.chat.completions.create(
        model="gpt-4o-mini",      # Model rẻ cho tasks đơn giản
        messages=[{"role": "user", "content": query}],
        max_tokens=max_tokens,
        temperature=0,             # Deterministic → cacheable
    )
```

---

## 8. Model Routing — Cheap → Expensive

Ý tưởng cốt lõi: **không phải query nào cũng cần GPT-4**. Route queries đến model phù hợp nhất.

```
┌─────────────────────────────────────────────────────┐
│              Intelligent Model Router                │
│                                                      │
│  Query ──▶ [Classifier] ──▶ Complexity Score        │
│                                                      │
│  Score < 0.3  ──▶ GPT-4o-mini   ($0.15/1M tokens)  │
│  Score 0.3-0.7──▶ GPT-4o        ($2.50/1M tokens)  │
│  Score > 0.7  ──▶ Claude Opus   ($15/1M tokens)    │
│                                                      │
│  Tiết kiệm: 60-80% chi phí khi 70% queries simple  │
└─────────────────────────────────────────────────────┘
```

### 8.1. Implementation

```python
from openai import OpenAI

class ModelRouter:
    """Route queries đến model phù hợp dựa trên complexity"""
    
    MODELS = {
        "simple": {
            "name": "gpt-4o-mini",
            "cost_per_1m_input": 0.15,
            "cost_per_1m_output": 0.60,
        },
        "medium": {
            "name": "gpt-4o",
            "cost_per_1m_input": 2.50,
            "cost_per_1m_output": 10.00,
        },
        "complex": {
            "name": "claude-sonnet-4-20250514",
            "cost_per_1m_input": 3.00,
            "cost_per_1m_output": 15.00,
        },
    }
    
    def __init__(self):
        self.client = OpenAI()
        self.stats = {"simple": 0, "medium": 0, "complex": 0}
    
    def classify_complexity(self, query: str) -> str:
        """Dùng model rẻ nhất để classify"""
        response = self.client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{
                "role": "system",
                "content": (
                    "Classify query complexity. Respond with ONE word:\n"
                    "- simple: factual, short answer, classification\n"
                    "- medium: explanation, comparison, moderate reasoning\n"
                    "- complex: multi-step reasoning, creative, code generation"
                ),
            }, {
                "role": "user",
                "content": query,
            }],
            max_tokens=5,
            temperature=0,
        )
        level = response.choices[0].message.content.strip().lower()
        return level if level in self.MODELS else "medium"
    
    def route(self, query: str, messages: list[dict] = None) -> dict:
        level = self.classify_complexity(query)
        model_config = self.MODELS[level]
        self.stats[level] += 1
        
        response = self.client.chat.completions.create(
            model=model_config["name"],
            messages=messages or [{"role": "user", "content": query}],
        )
        
        return {
            "response": response.choices[0].message.content,
            "model_used": model_config["name"],
            "complexity": level,
            "estimated_cost": self._estimate_cost(response, model_config),
        }
    
    def _estimate_cost(self, response, model_config) -> float:
        input_tokens = response.usage.prompt_tokens
        output_tokens = response.usage.completion_tokens
        cost = (
            input_tokens / 1_000_000 * model_config["cost_per_1m_input"]
            + output_tokens / 1_000_000 * model_config["cost_per_1m_output"]
        )
        return round(cost, 6)
    
    def get_savings_report(self) -> dict:
        total = sum(self.stats.values())
        if total == 0:
            return {}
        return {
            "distribution": {k: f"{v/total:.1%}" for k, v in self.stats.items()},
            "estimated_savings": f"{self.stats['simple']/total * 0.9:.0%}",
        }
```

---

## 9. Cost Analysis Framework

### 9.1. Chi phí per-query breakdown

```python
from dataclasses import dataclass

@dataclass
class CostBreakdown:
    """Chi phí chi tiết cho 1 query"""
    llm_input: float = 0.0
    llm_output: float = 0.0
    embedding: float = 0.0
    vector_search: float = 0.0
    cache_infra: float = 0.0
    compute: float = 0.0    # GPU/CPU instance
    storage: float = 0.0
    network: float = 0.0
    
    @property
    def total(self) -> float:
        return sum([
            self.llm_input, self.llm_output, self.embedding,
            self.vector_search, self.cache_infra, self.compute,
            self.storage, self.network,
        ])
    
    def report(self) -> str:
        items = {
            "LLM Input": self.llm_input,
            "LLM Output": self.llm_output,
            "Embedding": self.embedding,
            "Vector Search": self.vector_search,
            "Cache Infra": self.cache_infra,
            "Compute": self.compute,
            "Storage": self.storage,
            "Network": self.network,
        }
        lines = [f"  {k}: ${v:.6f}" for k, v in items.items() if v > 0]
        return f"Cost/query: ${self.total:.6f}\n" + "\n".join(lines)


def estimate_rag_query_cost() -> CostBreakdown:
    """Ước tính cost cho 1 RAG query typical"""
    return CostBreakdown(
        llm_input=0.001250,    # 500 tokens @ $2.50/1M
        llm_output=0.003000,   # 300 tokens @ $10/1M
        embedding=0.000010,    # 100 tokens @ $0.10/1M
        vector_search=0.000050,# Qdrant/Pinecone query
        cache_infra=0.000005,  # Redis amortized
        compute=0.000500,      # GPU instance amortized
        storage=0.000001,      # S3/disk
        network=0.000002,      # Data transfer
    )

cost = estimate_rag_query_cost()
print(cost.report())
# Cost/query: $0.004818
# 1M queries/month = $4,818/month
```

### 9.2. Monthly Cost Dashboard

```python
def monthly_cost_projection(
    queries_per_month: int,
    cache_hit_rate: float = 0.40,
    model_routing_savings: float = 0.30,
) -> dict:
    """Projection chi phí monthly với optimization"""
    
    base_cost = estimate_rag_query_cost()
    
    # Queries thực sự gọi LLM (sau cache)
    actual_llm_calls = queries_per_month * (1 - cache_hit_rate)
    
    # Savings từ model routing
    avg_cost_after_routing = base_cost.total * (1 - model_routing_savings)
    
    # Fixed infrastructure costs
    infra_costs = {
        "GPU instances (2x A10G)": 1500,   # ~$750/instance/month
        "Redis cluster": 200,
        "Vector DB (Qdrant)": 300,
        "Load balancer": 50,
        "Monitoring": 100,
        "Storage (S3)": 50,
    }
    
    variable_cost = actual_llm_calls * avg_cost_after_routing
    fixed_cost = sum(infra_costs.values())
    total = variable_cost + fixed_cost
    
    return {
        "queries_per_month": f"{queries_per_month:,}",
        "cache_hit_rate": f"{cache_hit_rate:.0%}",
        "actual_llm_calls": f"{actual_llm_calls:,.0f}",
        "variable_cost": f"${variable_cost:,.2f}",
        "fixed_infra_cost": f"${fixed_cost:,.2f}",
        "total_monthly": f"${total:,.2f}",
        "cost_per_query": f"${total/queries_per_month:.6f}",
        "infra_breakdown": infra_costs,
    }

# 1M queries/month
report = monthly_cost_projection(1_000_000, cache_hit_rate=0.40)
for k, v in report.items():
    if k != "infra_breakdown":
        print(f"{k}: {v}")
```

---

## 10. Infrastructure Cost Optimization

### 10.1. Spot/Preemptible Instances

```yaml
# Kubernetes: mixed spot + on-demand cho AI workloads
# node-pool-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: ai-node-pools
data:
  # On-demand: cho critical, low-latency inference
  on-demand: |
    nodeSelector:
      cloud.google.com/gke-nodepool: gpu-ondemand
    tolerations:
      - key: nvidia.com/gpu
        operator: Exists
        effect: NoSchedule
  
  # Spot: cho batch processing, embedding, non-critical
  spot: |
    nodeSelector:
      cloud.google.com/gke-nodepool: gpu-spot
    tolerations:
      - key: cloud.google.com/gke-spot
        operator: Equal
        value: "true"
        effect: NoSchedule

---
# Deployment với spot instances (giảm 60-70% GPU cost)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: embedding-service
spec:
  replicas: 3
  template:
    spec:
      nodeSelector:
        cloud.google.com/gke-spot: "true"
      tolerations:
        - key: cloud.google.com/gke-spot
          operator: Equal
          value: "true"
      terminationGracePeriodSeconds: 30
      containers:
        - name: embedding
          image: ai-embedding:latest
          resources:
            limits:
              nvidia.com/gpu: 1
            requests:
              memory: "8Gi"
              cpu: "4"
```

### 10.2. Serverless cho Bursty Workloads

```python
# AWS Lambda + Bedrock: zero compute cost khi idle
# Phù hợp cho workloads < 50 req/s, bursty

import json
import boto3

bedrock = boto3.client('bedrock-runtime', region_name='us-east-1')

def lambda_handler(event, context):
    """Serverless AI inference — pay per invocation"""
    body = json.loads(event['body'])
    
    response = bedrock.invoke_model(
        modelId='anthropic.claude-3-haiku-20240307-v1:0',
        body=json.dumps({
            "anthropic_version": "bedrock-2023-05-31",
            "messages": body["messages"],
            "max_tokens": body.get("max_tokens", 256),
        }),
    )
    
    result = json.loads(response['body'].read())
    return {
        'statusCode': 200,
        'body': json.dumps(result),
    }
```

### 10.3. So sánh Infrastructure Options

| Option | Cost khi idle | Cost khi peak | Latency | Best for |
|--------|--------------|---------------|---------|----------|
| **Reserved GPU** | $$$$ (trả trước) | $ (rẻ nhất/req) | Thấp nhất | Stable high traffic |
| **On-demand GPU** | $0 | $$$ | Thấp | Bursty, predictable |
| **Spot GPU** | $0 | $ | Thấp + interruption risk | Batch, non-critical |
| **Serverless** (Bedrock/Lambda) | $0 | $$ | Medium (cold start) | Low traffic, bursty |
| **API providers** (OpenAI) | $0 | $$ per token | Medium | MVP, variable load |

---

## 11. Monitoring Costs — Real-time Dashboard

### 11.1. Cost Tracking Middleware

```python
import time
from functools import wraps
from prometheus_client import Counter, Histogram, Gauge

# Prometheus metrics
llm_cost_total = Counter(
    'llm_cost_dollars_total', 
    'Total LLM cost in dollars',
    ['model', 'endpoint']
)
llm_tokens_total = Counter(
    'llm_tokens_total',
    'Total tokens used',
    ['model', 'type']  # type: input/output
)
llm_request_cost = Histogram(
    'llm_request_cost_dollars',
    'Cost per request in dollars',
    ['model'],
    buckets=[0.0001, 0.001, 0.005, 0.01, 0.05, 0.1, 0.5]
)
daily_budget_remaining = Gauge(
    'daily_budget_remaining_dollars',
    'Remaining daily budget'
)

# Pricing table
MODEL_PRICING = {
    "gpt-4o-mini":  {"input": 0.15,  "output": 0.60},
    "gpt-4o":       {"input": 2.50,  "output": 10.00},
    "claude-sonnet-4-20250514": {"input": 3.00, "output": 15.00},
}

def track_cost(func):
    """Decorator: tự động track cost cho mỗi LLM call"""
    @wraps(func)
    async def wrapper(*args, **kwargs):
        response = await func(*args, **kwargs)
        
        model = kwargs.get("model", "unknown")
        usage = response.usage
        pricing = MODEL_PRICING.get(model, {"input": 0, "output": 0})
        
        input_cost = usage.prompt_tokens / 1_000_000 * pricing["input"]
        output_cost = usage.completion_tokens / 1_000_000 * pricing["output"]
        total = input_cost + output_cost
        
        # Record metrics
        llm_cost_total.labels(model=model, endpoint="chat").inc(total)
        llm_tokens_total.labels(model=model, type="input").inc(usage.prompt_tokens)
        llm_tokens_total.labels(model=model, type="output").inc(usage.completion_tokens)
        llm_request_cost.labels(model=model).observe(total)
        
        return response
    return wrapper
```

### 11.2. Budget Alert System

```python
import asyncio
from datetime import datetime, timedelta

class BudgetGuard:
    """Protect against cost explosion"""
    
    def __init__(self, daily_budget: float = 100.0,
                 monthly_budget: float = 2000.0):
        self.daily_budget = daily_budget
        self.monthly_budget = monthly_budget
        self.daily_spend = 0.0
        self.monthly_spend = 0.0
        self.last_reset = datetime.utcnow()
    
    def check_budget(self, estimated_cost: float) -> dict:
        self._maybe_reset()
        
        if self.daily_spend + estimated_cost > self.daily_budget:
            return {
                "allowed": False,
                "reason": f"Daily budget exceeded: ${self.daily_spend:.2f}/${self.daily_budget}",
                "action": "Fallback to cheaper model or queue for later",
            }
        
        if self.monthly_spend + estimated_cost > self.monthly_budget * 0.9:
            return {
                "allowed": True,
                "warning": f"Monthly budget at 90%: ${self.monthly_spend:.2f}/${self.monthly_budget}",
            }
        
        return {"allowed": True}
    
    def record_spend(self, cost: float):
        self.daily_spend += cost
        self.monthly_spend += cost
        daily_budget_remaining.set(self.daily_budget - self.daily_spend)
    
    def _maybe_reset(self):
        now = datetime.utcnow()
        if now.date() > self.last_reset.date():
            self.daily_spend = 0.0
        if now.month != self.last_reset.month:
            self.monthly_spend = 0.0
        self.last_reset = now
```

---

## 12. Real-World Case Study: 1M Queries/Month

### 12.1. Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│         Production AI System: 1M queries/month              │
│                                                             │
│  Users ──▶ CloudFront CDN ──▶ ALB                          │
│                                  │                          │
│                           ┌──────▼──────┐                   │
│                           │  API Gateway │                  │
│                           │  (FastAPI)   │                  │
│                           └──────┬───────┘                  │
│                                  │                          │
│                    ┌─────────────┼──────────────┐           │
│                    │             │              │           │
│              ┌─────▼────┐ ┌─────▼────┐ ┌──────▼─────┐     │
│              │ L1 Cache │ │ Budget   │ │ Rate       │     │
│              │ (Redis)  │ │ Guard    │ │ Limiter    │     │
│              └─────┬────┘ └─────┬────┘ └──────┬─────┘     │
│                    │            │             │            │
│              ┌─────▼────────────▼─────────────▼─────┐     │
│              │        Model Router                   │     │
│              │  simple → 4o-mini | medium → 4o      │     │
│              │  complex → Claude Sonnet             │     │
│              └─────┬────────────┬───────────────────┘     │
│                    │            │                          │
│              ┌─────▼────┐ ┌────▼─────┐                    │
│              │ On-demand│ │ Spot GPU │                    │
│              │ GPU (2x) │ │ Pool (4x)│                    │
│              └──────────┘ └──────────┘                    │
│                                                             │
│  Embedding: Spot instances + Embedding Cache               │
│  Vector DB: Qdrant (3-node cluster)                        │
│  Storage: S3 + DynamoDB (conversation history)             │
└─────────────────────────────────────────────────────────────┘
```

### 12.2. Cost Breakdown chi tiết

```python
def case_study_1m_queries():
    """Real-world cost breakdown: 1M queries/month"""
    
    total_queries = 1_000_000
    
    # Traffic distribution (sau model routing)
    distribution = {
        "simple (4o-mini)":  0.60,   # 600K queries
        "medium (4o)":       0.30,   # 300K queries
        "complex (Claude)":  0.10,   # 100K queries
    }
    
    # Cache hit rate = 40% overall
    cache_hit_rate = 0.40
    actual_llm_calls = total_queries * (1 - cache_hit_rate)  # 600K
    
    # === VARIABLE COSTS ===
    # LLM API costs (per actual call, avg tokens)
    llm_costs = {
        "gpt-4o-mini (360K calls)": 360_000 * 0.000280,    # $100.80
        "gpt-4o (180K calls)":      180_000 * 0.004250,    # $765.00
        "Claude Sonnet (60K calls)": 60_000 * 0.006750,    # $405.00
    }
    
    # Embedding costs
    embedding_cost = total_queries * 0.6 * 0.000010  # 60% need embedding
    
    # === FIXED INFRASTRUCTURE ===
    infra_costs = {
        "GPU on-demand (2x g5.xlarge)":  730 * 2,     # $1,460
        "GPU spot (4x g5.xlarge, 70% discount)": 730 * 4 * 0.3,  # $876
        "Redis cluster (r6g.xlarge)":    350,
        "Qdrant cluster (3 nodes)":      450,
        "ECS/EKS cluster":               200,
        "ALB + CloudFront":              150,
        "S3 + DynamoDB":                 100,
        "Monitoring (Datadog)":          200,
        "Misc (NAT, DNS, secrets)":      100,
    }
    
    total_llm = sum(llm_costs.values())
    total_infra = sum(infra_costs.values())
    total_monthly = total_llm + embedding_cost + total_infra
    
    print("=" * 55)
    print("MONTHLY COST REPORT: 1M queries/month")
    print("=" * 55)
    print(f"\n--- LLM API Costs ---")
    for k, v in llm_costs.items():
        print(f"  {k}: ${v:,.2f}")
    print(f"  Embedding: ${embedding_cost:,.2f}")
    print(f"  Subtotal: ${total_llm + embedding_cost:,.2f}")
    
    print(f"\n--- Infrastructure Costs ---")
    for k, v in infra_costs.items():
        print(f"  {k}: ${v:,.2f}")
    print(f"  Subtotal: ${total_infra:,.2f}")
    
    print(f"\n{'=' * 55}")
    print(f"TOTAL MONTHLY:    ${total_monthly:,.2f}")
    print(f"COST PER QUERY:   ${total_monthly/total_queries:.5f}")
    print(f"{'=' * 55}")
    
    # So sánh với naive approach
    naive_cost = total_queries * 0.004818  # All GPT-4o, no cache
    savings = naive_cost - total_monthly
    print(f"\nNaive approach:    ${naive_cost:,.2f}/month")
    print(f"Optimized:         ${total_monthly:,.2f}/month")
    print(f"SAVINGS:           ${savings:,.2f}/month ({savings/naive_cost:.0%})")

case_study_1m_queries()
```

### 12.3. Optimization Impact Summary

| Optimization | Áp dụng | Savings |
|-------------|---------|---------|
| **Semantic + Exact cache** | 40% hit rate | -40% LLM calls |
| **Model routing** | 60% → mini, 30% → 4o, 10% → Claude | -65% LLM cost |
| **Spot instances** | Embedding + batch jobs | -70% GPU infra |
| **Prompt compression** | Giảm avg tokens 30% | -30% token cost |
| **Output length control** | max_tokens per query type | -20% output cost |
| **Embedding cache** | 7-day TTL | -60% embedding cost |
| **Combined** | Tất cả | **~70% tổng cost** |

---

## Tổng kết

✅ **Scaling AI** khác web truyền thống — GPU bottleneck, high latency, stateful contexts đều là thách thức riêng

✅ **Horizontal scaling** cần load balancer health-aware (GPU utilization, queue length) và sticky sessions cho stateful agents

✅ **Auto-scaling** kết hợp HPA (custom GPU metrics), target tracking, và predictive scheduling để tối ưu

✅ **Caching 3 layers** (exact → semantic → embedding) có thể giảm 40-60% LLM calls — ROI cao nhất

✅ **Quantization** (AWQ > GPTQ > GGUF) giảm 75% VRAM với quality loss minimal, cho phép serve models lớn trên GPU nhỏ

✅ **Continuous batching** (vLLM) tăng throughput 3-5x so với no batching — miễn phí

✅ **Model routing** (cheap → expensive) tiết kiệm 60-80% khi phần lớn queries đơn giản

✅ **Cost monitoring** real-time với budget guards ngăn chặn cost explosion trước khi xảy ra

✅ **Combined optimizations** có thể giảm chi phí **~70%** so với naive deployment

## Bài tập

### Bài tập 1: Xây dựng Multi-Layer Cache System
Implement một **AICache** class hoàn chỉnh với Redis backend bao gồm:
- Exact match cache với TTL configurable
- Semantic cache sử dụng cosine similarity (threshold 0.92)
- Hit rate tracking và reporting
- Test với 100 sample queries, đo cache hit rate

### Bài tập 2: Model Router với Cost Tracking
Xây dựng **ModelRouter** có khả năng:
- Classify query complexity (simple/medium/complex) bằng classifier model
- Route đến model phù hợp (GPT-4o-mini / GPT-4o / Claude)
- Track cost per request và tạo daily cost report
- Implement budget guard: reject/downgrade khi vượt daily limit $50
- Bonus: thêm A/B testing để so sánh routing accuracy

### Bài tập 3: Cost Analysis cho dự án của bạn
Tạo **Cost Analysis Framework** cho 1 AI application giả định (chatbot hỗ trợ khách hàng):
- Ước tính 500K queries/month, avg 400 input + 200 output tokens
- So sánh 3 scenarios: (A) Full GPT-4o, (B) Model routing + cache, (C) Self-hosted quantized model
- Tính break-even point giữa API vs self-hosted
- Vẽ cost projection chart 12 tháng
- Đề xuất architecture tối ưu với budget $3,000/month
