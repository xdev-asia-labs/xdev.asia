---
id: 019e0a01-bb21-7001-c001-ee2100000001
title: 第 21 課：擴充、快取和成本優化
slug: bai-21-scaling-caching-cost-optimization
description: 擴展策略：水平、自動擴展、負載平衡。快取層：Redis、語意快取。模型量化（GPTQ、AWQ、GGUF）。批次推理請求。令牌使用優化。成本分析和預算。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 20
section_title: 第 6 部分：部署 AI 系統生產
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> **每月 100 萬次查詢的 API 成本可能從 500 美元到 50,000 美元不等，具體取決於您的擴充功能、快取和路由模型的方式。 ** 本文將把您從「燒錢者」轉變為 AI 生產成本優化架構師。

## 1. AI 系統的擴展挑戰

### 1.1。為什麼人工智慧在擴展時會有所不同

擴展人工智慧系統與擴展常規網路應用程式不同。有3個核心挑戰：

|挑戰|傳統網路應用程式 |人工智慧系統 |
|------------|----------|------------|
| **運算** |受 CPU 限制，易於擴充 |受 GPU 限制，價格昂貴 |
| **延遲** | 〜50-200ms |每個請求 ~500ms-30s |
| **記憶體** |每個實例 ~100MB-1GB |每個型號 ~4-80GB VRAM |
| **每次請求的成本** | ~$0.0001 | ~$0.001-$0.10 |
| **有狀態** |通常無狀態 |會話上下文、KV快取 |
| **冷啟動** |約 100 毫秒 | ~10-60 秒（模型載入）|

### 1.2。 GPU 瓶頸－核心問題

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

### 1.3。成本爆炸——現實場景

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

## 2. 水平擴展－負載平衡AI服務

### 2.1。架構模式

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

### 2.2。 AI 負載平衡策略

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

### 2.3。有狀態代理的粘性會話

多輪對話代理需要在同一節點上保留上下文：

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

## 3. 自動擴充策略

### 3.1。適用於 AI 工作負載的 Kubernetes HPA

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

### 3.2。具有目標追蹤功能的 AWS Auto Scaling

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

### 3.3。預測性擴展－提前安排

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

## 4. AI 快取層

快取是降低人工智慧成本的**最有力的武器**。每次請求快取命中可以節省 0.01-0.10 美元。

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

### 4.1。精確匹配快取（Redis）

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

### 4.2。語意緩存 — 類似提示

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

> **重要說明：** 在生產中，使用 **Redis Vector Search** 或 **Qdrant** 而不是掃描所有鍵。上述方法僅說明邏輯。

### 4.3。嵌入緩存

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

### 4.4。多層快取編排器

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

## 5. 生產模型量化

量化透過降低精度來減少模型大小並提高推理速度（FP16 → INT8 → INT4）。

### 5.1。比較方法

|方法|精密|尺寸縮小 |速度提升 |品質損失|使用案例 |
|--------|---------|------------|------------|---------|----------|
| **FP16** | 16 位元 |基線|基線|無 |預設推論 |
| **GPTQ** | 4 位元 | 〜75% | 〜2-3x |很小| GPU 推理 |
| **AWQ** | 4 位元 | 〜75% | 〜2-4x |小於 GPTQ | GPU 推理（更好）|
| **GGUF** | 2-8 位元 | 〜60-85% | 〜1.5-3x |取決於定量等級 | CPU + GPU (llama.cpp) |
| **位元與位元組** | 4/8 位元 | 〜50-75% | 〜1.5-2x |小|訓練+推理|

### 5.2。使用 vLLM 部署量化模型

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

### 5.3。用於 CPU/混合推理的 GGUF

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

## 6. 批次推理請求

### 6.1。動態配料

將多個請求分組為 1 個批次，以最大限度地提高 GPU 利用率：

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

### 6.2。使用 vLLM 進行連續批次處理

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

|配料類型|吞吐量|延遲 |複雜度 |
|------------|------------|---------|------------|
| **無批次** | 10 請求/秒 |低|無 |
| **靜態批次** | 30 請求/秒 |更高（等待整批）|低|
| **動態批次** | 40 請求/秒 |中|中|
| **連續批次** (vLLM) | 50-80 請求/秒 |低|內建|

---

## 7. 代幣使用優化

### 7.1。即時壓縮

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

### 7.2。輸出長度控制

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

## 8. 模型路由 — 便宜 → 昂貴

核心思想：**並非所有查詢都需要 GPT-4**。將查詢路由到最適合的模型。

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

### 8.1。實施

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

## 9. 成本分析框架

### 9.1。每個查詢的成本明細

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

### 9.2。每月成本儀表板

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

## 10. 基礎設施成本最佳化

### 10.1。現貨/搶佔式實例

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

### 10.2。適用於突發工作負載的無伺服器

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

### 10.3。比較基礎設施選項

|選項|閒置時的成本|高峰期成本|延遲 |最適合 |
|--------|--------------|----------------|--------|------------|
| **預留 GPU** | $$$$（預付）| $（最便宜/要求）|最低|穩定高流量 |
| **按需 GPU** | 0 美元 | $$$ |低|突發、可預測|
| **GPU 現貨** | 0 美元 | $ |低+中斷風險|批量，非關鍵 |
| **無伺服器**（基岩/Lambda）| 0 美元 | $$ |中（冷啟動）|流量低，突發 |
| **API 提供者** (OpenAI) | 0 美元 |每個代幣 $$ |中| MVP，可變負載|

---

## 11. 監控成本－即時儀表板

### 11.1。成本追蹤中介軟體

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

### 11.2。預算警報系統

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

## 12. 真實案例研究：每月 100 萬次查詢

### 12.1。架構概述

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

### 12.2。成本明細詳情

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

### 12.3。優化影響摘要

|優化|申請 |儲蓄|
|-------------|---------|---------|
| **語意+精確快取** | 40% 命中率 | -40% 法學碩士電話 |
| **模型路由** | 60% → 迷你，30% → 4o，10% → 克勞德 | -65% 法學碩士費用 |
| **現貨實例** |嵌入+批次作業| -70% GPU 基礎設施 |
| **即時壓縮** |平均代幣折扣 30% | -30% 代幣成本 |
| **輸出長度控制** |每個查詢類型的 max_tokens | -20% 輸出成本 |
| **嵌入快取** | 7 天 TTL | -60% 嵌入成本 |
| **合併** |全部 | **~總成本的70%** |

---

## 總結

✅ **擴展 AI** 與傳統 Web 不同 - GPU 瓶頸、高延遲、有狀態上下文都是獨特的挑戰

✅ **水平擴展**需要健康感知負載平衡器（GPU 使用率、佇列長度）和有狀態代理的黏性會話

✅ **自動縮放**結合了 HPA（自訂 GPU 指標）、目標追蹤和預測調度以進行最佳化

✅ **快取 3 層**（精確 → 語意 → 嵌入）可以減少 40-60% 的 LLM 呼叫 — 最高的投資報酬率

✅ **量化** (AWQ > GPTQ > GGUF) 將 VRAM 減少 75%，同時將質量損失降至最低，從而允許在小型 GPU 上提供大型模型

✅ **連續批次** (vLLM) 與無批次相比，吞吐量提高了 3-5 倍 — 免費

✅ **模型路由**（便宜 → 昂貴）在大多數查詢都很簡單時節省 60-80%

✅ **成本監控** 即時監控預算，防止成本爆炸發生

✅ **與簡單部署相比，組合最佳化**可以降低成本**~70%**

## 練習

### 練習1：建構多層快取系統
使用 Redis 後端實現完整的 **AICache** 類，包括：
- 具有可配置 TTL 的精確匹配緩存
- 語意緩存使用餘弦相似度（閾值0.92）
- 命中率追蹤和報告
- 使用 100 個範例查詢進行測試，測量快取命中率

### 練習 2：具有成本追蹤的模型路由器
建構一個具有以下功能的 **ModelRouter**：
- 使用分類器模型對查詢複雜度（簡單/中/複雜）進行分類
- 路由至適當的型號（GPT-4o-mini / GPT-4o / Claude）
- 追蹤每個請求的成本並建立每日成本報告
- 實施預算保護：超過每日限額 50 美元時拒絕/降級
- 獎勵：新增 A/B 測試來比較路由準確性

### 練習 3：專案成本分析
為假設的人工智慧應用程式（客戶支援聊天機器人）創建**成本分析框架**：
- 估計每月 50 萬次查詢，平均 400 個輸入 + 200 個輸出令牌
- 比較 3 個場景：(A) 完整 GPT-4o，(B) 模型路由 + 緩存，(C) 自託管量化模型
- 計算 API 與自架之間的收支平衡點
- 繪製12個月的成本預測圖
- 提出最佳架構建議，預算為 3,000 美元/月
