---
id: 019d8b30-bb02-7002-c002-f0c4e8000002
title: 'Bài 2: Kiến trúc AI System — Microservices, Model Pipeline & GPU Infrastructure'
slug: bai-2-kien-truc-ai-system-microservices-model-pipeline
description: >-
  Thiết kế kiến trúc AI microservices: Model Serving (Triton, vLLM),
  Task Queue (Celery/Redis), GPU scheduling, model versioning và
  A/B testing pipeline cho AI models.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Kiến trúc AI System & Nền tảng"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Một AI demo chạy trong Jupyter Notebook và một AI system chạy trên production là hai thế giới hoàn toàn khác nhau. Bài này sẽ thiết kế **kiến trúc AI microservices** cho Fashion AI Platform — nơi nhiều AI models cùng phục vụ hàng nghìn requests đồng thời.

---

## 1. Tại sao cần kiến trúc riêng cho AI?

### Thách thức của AI trong Production

| Thách thức | Giải thích |
|-----------|-----------|
| **GPU scarcity** | GPU đắt, cần share giữa nhiều models |
| **Long inference time** | Stable Diffusion mất 5–15s, không thể blocking |
| **Model size** | SDXL ~6.5GB VRAM, CLIP ~2GB, SMPL ~500MB |
| **Concurrency** | Nhiều user generate cùng lúc |
| **Model versioning** | A/B test model mới vs cũ |
| **Cold start** | Load model mất 30–60s |

### Monolith vs Microservices cho AI

```
❌ Monolith AI Server
   - 1 server load TẤT CẢ models
   - VRAM overflow
   - 1 model crash → toàn bộ hệ thống down

✅ AI Microservices
   - Mỗi module AI = 1 service riêng
   - Scale độc lập
   - Isolate failures
```

---

## 2. Kiến trúc tổng thể

```
                    ┌─────────────────┐
                    │   API Gateway   │
                    │   (FastAPI)     │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │   Task Queue    │
                    │ (Celery + Redis)│
                    └────────┬────────┘
                             │
            ┌────────────────┼────────────────┐
            │                │                │
   ┌────────▼──────┐ ┌──────▼───────┐ ┌──────▼───────┐
   │ Design Gen    │ │ Edit         │ │ Try-On       │
   │ Service       │ │ Service      │ │ Service      │
   │ (GPU: A100)   │ │ (GPU: A100)  │ │ (GPU: A10G)  │
   └────────┬──────┘ └──────┬───────┘ └──────┬───────┘
            │                │                │
   ┌────────▼──────┐ ┌──────▼───────┐ ┌──────▼───────┐
   │ Model Store   │ │ Personalize  │ │ Production   │
   │ (S3 + Cache)  │ │ Service      │ │ AI Service   │
   │               │ │ (CPU/T4)     │ │ (CPU/T4)     │
   └───────────────┘ └──────────────┘ └──────────────┘
```

### Các thành phần chính

#### 2.1 API Gateway (FastAPI)

```python
# Nhận request từ frontend
# Validate input
# Gửi task vào queue
# Return task_id để client polling

@app.post("/api/v1/design/generate")
async def generate_design(request: GenerateRequest):
    task = celery_app.send_task(
        "design_gen.generate",
        args=[request.dict()],
        queue="gpu_high_priority"
    )
    return {"task_id": task.id, "status": "queued"}
```

#### 2.2 Task Queue (Celery + Redis)

```python
# Queues phân theo priority và resource
CELERY_QUEUES = {
    "gpu_high_priority": {
        "tasks": ["design_gen.generate", "edit.apply"],
        "concurrency": 2,  # Max 2 concurrent GPU tasks
    },
    "gpu_low_priority": {
        "tasks": ["tryon.render", "production.upscale"],
        "concurrency": 4,
    },
    "cpu_tasks": {
        "tasks": ["personalize.update", "production.convert_cmyk"],
        "concurrency": 16,
    },
}
```

#### 2.3 Model Serving Layer

Hai lựa chọn chính:

| | NVIDIA Triton | vLLM | Custom (PyTorch) |
|--|--------------|------|-----------------|
| **Best for** | Multi-model serving | LLM inference | Diffusion models |
| **Batching** | Dynamic batching | Continuous batching | Manual |
| **Format** | ONNX, TensorRT, PyTorch | HF models | Any |
| **Use case** | CLIP, classifier | Product description gen | SDXL, ControlNet |

---

## 3. GPU Scheduling Strategy

### GPU Pool Architecture

```
GPU Pool
├── Partition A: Design Generation (A100 x 2)
│   ├── SDXL model (always loaded)
│   ├── ControlNet (loaded on demand)
│   └── IP-Adapter (loaded on demand)
│
├── Partition B: Editing & Try-On (A100 x 1 + A10G x 1)
│   ├── InstructPix2Pix
│   ├── SMPL-X
│   └── Cloth simulation
│
└── Partition C: Lightweight AI (T4 x 2)
    ├── CLIP (always loaded)
    ├── Auto-tagger
    ├── Real-ESRGAN upscaler
    └── Size recommendation model
```

### Model Loading Strategy

```python
class ModelManager:
    """Quản lý load/unload models theo demand"""

    def __init__(self, gpu_memory_limit: int):
        self.loaded_models: dict[str, Model] = {}
        self.gpu_memory_limit = gpu_memory_limit
        self.lru_cache = OrderedDict()

    async def get_model(self, model_name: str) -> Model:
        if model_name in self.loaded_models:
            self.lru_cache.move_to_end(model_name)
            return self.loaded_models[model_name]

        # Check if enough VRAM
        required = MODEL_VRAM_MAP[model_name]
        while self._used_vram() + required > self.gpu_memory_limit:
            self._evict_lru()

        model = await self._load_model(model_name)
        self.loaded_models[model_name] = model
        self.lru_cache[model_name] = True
        return model
```

---

## 4. Model Versioning & A/B Testing

### Model Registry

```yaml
# model_registry.yaml
models:
  design_gen_sdxl:
    current: v2.1
    versions:
      v2.1:
        path: s3://models/sdxl-fashion-v2.1/
        lora: s3://models/lora-tshirt-v2.1/
        metrics:
          fid_score: 12.3
          user_satisfaction: 4.2
      v2.0:
        path: s3://models/sdxl-fashion-v2.0/
        metrics:
          fid_score: 15.7
          user_satisfaction: 3.8

  style_analyzer:
    current: v1.0
    versions:
      v1.0:
        path: s3://models/clip-style-v1.0/
        type: onnx
```

### A/B Testing Pipeline

```python
class ABTestRouter:
    """Route requests tới model versions theo experiment config"""

    def __init__(self, experiments: list[Experiment]):
        self.experiments = experiments

    def get_model_version(
        self, model_name: str, user_id: str
    ) -> str:
        experiment = self._get_active_experiment(model_name)
        if not experiment:
            return self._get_default_version(model_name)

        # Deterministic assignment based on user_id
        bucket = hash(f"{user_id}:{experiment.id}") % 100
        for variant in experiment.variants:
            if bucket < variant.traffic_percentage:
                return variant.model_version
            bucket -= variant.traffic_percentage

        return experiment.control_version
```

---

## 5. Async Processing Pipeline

### Design Generation Flow

```
Client                 API              Queue           GPU Worker
  │                     │                │                  │
  │── POST /generate ──►│                │                  │
  │                     │── send_task ──►│                  │
  │◄── {task_id} ──────│                │                  │
  │                     │                │── pick task ────►│
  │── GET /status ─────►│                │                  │
  │◄── "processing" ───│                │                  │
  │                     │                │     (5-15s)      │
  │                     │                │◄── result ──────│
  │── GET /status ─────►│                │                  │
  │◄── "completed" ────│                │                  │
  │    + design URLs    │                │                  │
```

### Webhook Alternative (cho production)

```python
# Thay vì polling, dùng webhook callback
@celery_app.task(bind=True)
def generate_design(self, request: dict):
    result = model.generate(request)

    # Notify client via webhook
    webhook_url = request.get("callback_url")
    if webhook_url:
        requests.post(webhook_url, json={
            "task_id": self.request.id,
            "status": "completed",
            "designs": result.urls,
        })

    return result
```

---

## 6. Storage Architecture

```
┌────────────────────────────────────────────┐
│              Storage Layer                  │
├────────────────────────────────────────────┤
│                                            │
│  S3 / MinIO                                │
│  ├── /models/          (AI model weights)  │
│  ├── /designs/         (generated designs) │
│  ├── /uploads/         (user uploads)      │
│  ├── /print-files/     (CMYK print-ready)  │
│  └── /mockups/         (product mockups)   │
│                                            │
│  Redis                                     │
│  ├── Task queue                            │
│  ├── Model cache metadata                  │
│  ├── User session / style embeddings       │
│  └── Rate limiting                         │
│                                            │
│  PostgreSQL                                │
│  ├── User data                             │
│  ├── Design metadata                       │
│  ├── Order history                         │
│  ├── A/B test results                      │
│  └── Behavioral logs                       │
│                                            │
│  Vector DB (Qdrant / Pinecone)             │
│  ├── Design embeddings (search)            │
│  ├── Style embeddings (personalization)    │
│  └── User preference vectors               │
│                                            │
└────────────────────────────────────────────┘
```

---

## 7. Error Handling & Resilience

### Retry Strategy

```python
@celery_app.task(
    bind=True,
    max_retries=3,
    default_retry_delay=5,
    autoretry_for=(GPUOutOfMemoryError, ModelLoadError),
)
def generate_design(self, request: dict):
    try:
        model = model_manager.get_model("sdxl")
        return model.generate(request)
    except GPUOutOfMemoryError:
        # Clear GPU cache and retry
        torch.cuda.empty_cache()
        raise self.retry()
```

### Fallback Strategy

```python
# Nếu SDXL fail → fallback về lightweight model
FALLBACK_CHAIN = [
    "sdxl_fashion_v2",      # Primary: best quality
    "sdxl_base",             # Fallback 1: generic SDXL
    "sd15_fashion",          # Fallback 2: SD 1.5 (faster, less quality)
]
```

---

## 8. Monitoring & Observability

### Key Metrics

```python
# Prometheus metrics cho AI system
ai_request_duration = Histogram(
    "ai_request_duration_seconds",
    "Time spent processing AI request",
    ["model_name", "model_version", "task_type"],
)

ai_gpu_utilization = Gauge(
    "ai_gpu_utilization_percent",
    "GPU utilization percentage",
    ["gpu_id", "partition"],
)

ai_queue_length = Gauge(
    "ai_queue_length",
    "Number of pending tasks in queue",
    ["queue_name", "priority"],
)

ai_generation_quality = Histogram(
    "ai_generation_quality_score",
    "Quality score of generated designs",
    ["model_version"],
)
```

---

## Tổng kết

Kiến trúc AI system cho Fashion AI Platform bao gồm:

1. **API Gateway** (FastAPI) — nhận request, validate, queue task
2. **Task Queue** (Celery + Redis) — async processing, priority queues
3. **GPU Workers** — phân partition theo workload, LRU model loading
4. **Model Registry** — versioning, A/B testing, rollback
5. **Storage** — S3 (files), Redis (cache), PostgreSQL (metadata), Vector DB (embeddings)
6. **Monitoring** — GPU utilization, queue length, generation quality

Bài tiếp theo sẽ đi vào chi tiết **AI Tech Stack**: so sánh Stable Diffusion XL vs FLUX, ControlNet, CLIP, và setup MLOps pipeline.
