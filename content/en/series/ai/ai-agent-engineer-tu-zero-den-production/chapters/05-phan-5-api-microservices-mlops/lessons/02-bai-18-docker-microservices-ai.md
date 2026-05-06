---
id: 019e0a01-bb18-7001-c001-ee1800000001
title: 'Lesson 18: Docker & Microservices Architecture for AI'
slug: bai-18-docker-microservices-ai
description: >-
  Docker for AI: multi-stage builds, GPU support, model caching. Docker Compose
  for local dev. Microservices patterns: API Gateway, service mesh. Message
  queue (Redis, RabbitMQ). Separating services: inference, embedding, retrieval,
  orchestration.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: 'Part 5: APIs, Microservices & MLOps'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI Agent Engineer: From Zero to Production'
  slug: ai-agent-engineer-tu-zero-den-production
locale: en
---

> You've finished coding the AI ​​Agent, pushed it to GitHub — but when your colleague clones it, it *"works on my machine"*. Model needs CUDA 12.1, LangChain requires Python 3.11, ChromaDB needs the latest SQLite... Docker solves this entire dependency hell, and Microservices Architecture helps you scale each part independently.

## 1. Why Docker for AI?

### 1.1. Dependency hell in AI/ML

AI projects have much more complex dependencies than regular web apps:

```
Python App thường:         AI/ML App:
├── flask==3.0             ├── torch==2.3.0+cu121
├── requests==2.31         ├── transformers==4.41
└── redis==5.0             ├── langchain==0.2.5
                           ├── chromadb==0.5.0
   ~5 packages                ├── sentence-transformers==3.0
   ~50MB                      ├── opencv-python==4.10
                           ├── numpy==1.26 (conflict với torch?)
                           ├── CUDA 12.1 runtime
                           └── cuDNN 8.9
                              ~200+ packages
                              ~5-15GB
```

### 1.2. What does Docker solve?

| Problem | No Docker | There is Docker |
|---|---|---|
| Python version conflict | pyenv, conda puppet | 1 Python container per container |
| CUDA version mismatch | Install system-wide | CUDA in image |
| "Works on my machine" | Always happens | Image is the same everywhere |
| Reproducibility | requirements.txt missing | Dockerfile = full recipe |
| Scale horizontal | Manually install each server | `docker compose scale` |
| Rollback deployment | Fear | `docker rollback` 1 command |

### 1.3. Containers vs VM for AI workloads

```
┌──────────────────────────────────────────────────┐
│              Virtual Machine                      │
│  ┌────────┐  ┌────────┐  ┌────────┐             │
│  │ App A  │  │ App B  │  │ App C  │             │
│  │ Bins/  │  │ Bins/  │  │ Bins/  │             │
│  │ Libs   │  │ Libs   │  │ Libs   │             │
│  │ OS     │  │ OS     │  │ OS     │  ← Mỗi VM  │
│  └────────┘  └────────┘  └────────┘    1 OS     │
│           Hypervisor                              │
│           Host OS                                 │
│           Hardware (GPU)                          │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│              Container (Docker)                   │
│  ┌────────┐  ┌────────┐  ┌────────┐             │
│  │ App A  │  │ App B  │  │ App C  │             │
│  │ Bins/  │  │ Bins/  │  │ Bins/  │             │
│  │ Libs   │  │ Libs   │  │ Libs   │             │
│  └────────┘  └────────┘  └────────┘             │
│           Docker Engine                           │
│           Host OS ← Share kernel                  │
│           Hardware (GPU passthrough)              │
└──────────────────────────────────────────────────┘
```

> **Key insight:** Container shares kernel with host → almost zero overhead. GPU passthrough via NVIDIA Container Toolkit → performance = bare metal.

## 2. Dockerfile for AI Services

### 2.1. Multi-stage build — reduces image size

Multi-stage build separates **build dependencies** (gcc, build tools) from **runtime**, reducing image size from 5GB to 1-2GB:

```dockerfile
# ============================================
# Stage 1: Builder — cài dependencies
# ============================================
FROM python:3.11-slim AS builder

WORKDIR /app

# Cài build tools (chỉ cần trong build stage)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements trước (layer caching)
COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

# ============================================
# Stage 2: Runtime — chỉ giữ những gì cần
# ============================================
FROM python:3.11-slim AS runtime

WORKDIR /app

# Copy installed packages từ builder
COPY --from=builder /install /usr/local

# Copy source code
COPY src/ ./src/
COPY config/ ./config/

# Non-root user (security best practice)
RUN useradd -m -r appuser && chown -R appuser:appuser /app
USER appuser

EXPOSE 8000

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### 2.2. Layer caching — optimize build time

Docker caches each layer. **Copy order is very important** — small changes should be placed first:

```dockerfile
# ❌ BAD: Copy tất cả → mỗi lần sửa code đều reinstall packages
COPY . .
RUN pip install -r requirements.txt

# ✅ GOOD: Copy requirements trước → chỉ reinstall khi thêm package
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY src/ ./src/
```

```
Layer cache visualization:

COPY requirements.txt .     ← Cached (không đổi)
RUN pip install ...          ← Cached (requirements không đổi)
COPY src/ ./src/             ← Rebuilt  (code thay đổi)
CMD [...]                    ← Rebuilt

→ Build time: 5 phút → 10 giây (khi chỉ sửa code)
```

### 2.3. .dockerignore for AI projects

```
# .dockerignore
__pycache__/
*.pyc
*.pyo

# Model files (mount volume thay vì bake vào image)
models/
*.bin
*.safetensors
*.gguf

# Dev/test files
.git/
.github/
tests/
notebooks/
*.ipynb

# Environment
.env
.env.*
.venv/
venv/

# Data files
data/raw/
data/tmp/
*.csv
*.parquet

# IDE
.vscode/
.idea/

# Docker
docker-compose*.yml
Dockerfile*
```

## 3. GPU Support with Docker

### 3.1. NVIDIA Container Toolkit setup

```bash
# Cài NVIDIA Container Toolkit (Ubuntu/Debian)
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey \
  | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg

curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list \
  | sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' \
  | sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

sudo apt-get update
sudo apt-get install -y nvidia-container-toolkit

# Configure Docker runtime
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker

# Verify
docker run --rm --gpus all nvidia/cuda:12.1.0-base-ubuntu22.04 nvidia-smi
```

### 3.2. CUDA base images

| Base Image | Size | Use Case |
|---|---|---|
| `nvidia/cuda:12.1.0-base-ubuntu22.04` | ~120MB | Only CUDA runtime |
| `nvidia/cuda:12.1.0-runtime-ubuntu22.04` | ~800MB | Runtime + cuDNN |
| `nvidia/cuda:12.1.0-devel-ubuntu22.04` | ~3.5GB | Build custom CUDA ops |
| `pytorch/pytorch:2.3.0-cuda12.1-cudnn8-runtime` | ~5.5GB | PyTorch pre-installed |

```dockerfile
# Dockerfile.gpu — AI inference service với GPU
FROM nvidia/cuda:12.1.0-runtime-ubuntu22.04 AS runtime

# Cài Python
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3.11 \
    python3.11-venv \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements-gpu.txt .
RUN pip install --no-cache-dir -r requirements-gpu.txt

COPY src/ ./src/

# GPU memory settings
ENV CUDA_VISIBLE_DEVICES=0
ENV PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:512

EXPOSE 8000
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

```bash
# Chạy container với GPU
docker run --gpus all -p 8000:8000 my-ai-service:gpu

# Chỉ định GPU cụ thể
docker run --gpus '"device=0,1"' -p 8000:8000 my-ai-service:gpu
```

## 4. Model Caching Strategies

AI models are usually 1-10GB — should not be baked into Docker images. There are 3 strategies:

### 4.1. Strategy comparison

| Strategy | Build Time | Cold Start | Disk Usage | Best For |
|---|---|---|---|---|
| Volume mount | Instant | Host dependent | Shared | Dev, on-prem |
| Download at startups | Fast builds | Slow (first time) | Per-container | Cloud, auto-scale |
| Model registry (MLflow) | Fast builds | Fast (cached) | Centralized | Production, teams |

### 4.2. Volume mount — simplest

```yaml
# docker-compose.yml
services:
  inference:
    build: .
    volumes:
      - ./models:/app/models:ro    # Read-only mount
      - model-cache:/root/.cache   # HuggingFace cache
    environment:
      - TRANSFORMERS_CACHE=/root/.cache

volumes:
  model-cache:   # Docker managed volume
```

```python
# src/model_loader.py
import os
from pathlib import Path

MODEL_DIR = Path(os.getenv("MODEL_DIR", "/app/models"))

def load_model(model_name: str):
    """Load model từ mounted volume."""
    model_path = MODEL_DIR / model_name
    if not model_path.exists():
        raise FileNotFoundError(
            f"Model {model_name} not found. "
            f"Mount volume chứa model vào {MODEL_DIR}"
        )
    return AutoModelForCausalLM.from_pretrained(str(model_path))
```

### 4.3. Download at startup with caching

```python
# src/startup.py
import hashlib
from huggingface_hub import snapshot_download

CACHE_DIR = "/app/model-cache"

def ensure_model(model_id: str, revision: str = "main") -> str:
    """Download model nếu chưa có trong cache."""
    cache_key = hashlib.sha256(
        f"{model_id}:{revision}".encode()
    ).hexdigest()[:12]

    model_path = f"{CACHE_DIR}/{cache_key}"

    if os.path.exists(f"{model_path}/config.json"):
        print(f"✅ Model {model_id} found in cache")
        return model_path

    print(f"⬇️  Downloading {model_id}...")
    snapshot_download(
        repo_id=model_id,
        revision=revision,
        local_dir=model_path,
        local_dir_use_symlinks=False,
    )
    return model_path
```

## 5. Docker Compose for AI Stack

### 5.1. Full AI development stack

```yaml
# docker-compose.yml
version: "3.9"

services:
  # ============================================
  # Core AI API
  # ============================================
  api:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - REDIS_URL=redis://redis:6379/0
      - CHROMA_HOST=chromadb
      - CHROMA_PORT=8100
      - POSTGRES_URL=postgresql://ai:secret@postgres:5432/aidb
    volumes:
      - model-cache:/app/models
    depends_on:
      redis:
        condition: service_healthy
      chromadb:
        condition: service_healthy
      postgres:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  # ============================================
  # Background Worker (async tasks)
  # ============================================
  worker:
    build: .
    command: >
      celery -A src.worker worker
      --loglevel=info
      --concurrency=2
      --queues=inference,embedding,document
    environment:
      - REDIS_URL=redis://redis:6379/0
      - CHROMA_HOST=chromadb
    volumes:
      - model-cache:/app/models
    depends_on:
      - redis
      - chromadb

  # ============================================
  # Vector Database
  # ============================================
  chromadb:
    image: chromadb/chroma:0.5.0
    ports:
      - "8100:8000"
    volumes:
      - chroma-data:/chroma/chroma
    environment:
      - ANONYMIZED_TELEMETRY=false
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/api/v1/heartbeat"]
      interval: 10s
      timeout: 5s
      retries: 5

  # ============================================
  # Cache & Message Broker
  # ============================================
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data
    command: redis-server --maxmemory 512mb --maxmemory-policy allkeys-lru
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  # ============================================
  # Relational Database
  # ============================================
  postgres:
    image: postgres:16-alpine
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=ai
      - POSTGRES_PASSWORD=secret
      - POSTGRES_DB=aidb
    volumes:
      - postgres-data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ai -d aidb"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  model-cache:
  chroma-data:
  redis-data:
  postgres-data:
```

### 5.2. Launch and manage

```bash
# Start toàn bộ stack
docker compose up -d

# Xem logs real-time
docker compose logs -f api worker

# Scale worker lên 3 instances
docker compose up -d --scale worker=3

# Restart 1 service
docker compose restart api

# Xem resource usage
docker compose stats

# Dừng và xoá data
docker compose down           # Giữ volumes
docker compose down -v        # Xoá cả volumes
```

## 6. Microservices Architecture for AI

### 6.1. Monolith vs Microservices — when to split?

```
Monolith AI Service:              Microservices AI:
┌─────────────────────┐     ┌──────────┐ ┌──────────┐
│  /chat               │     │ Chat API │ │ Embed    │
│  /embed              │     │ Service  │ │ Service  │
│  /search             │     └────┬─────┘ └────┬─────┘
│  /process-doc        │          │             │
│                      │     ┌────┴─────┐ ┌────┴─────┐
│  Model Loading       │     │ Inference│ │ Retrieval│
│  Embedding           │     │ Service  │ │ Service  │
│  Vector Search       │     └──────────┘ └──────────┘
│  Document Processing │
└─────────────────────┘     Mỗi service scale riêng
1 process, tất cả memory     GPU chỉ cho inference
```

| Criteria | Monolith | Microservices |
|---|---|---|
| Team size | 1-3 devs | 4+ devs |
| Scale pattern | Uniform | Per-service (Dedicated GPU) |
| Deploy frequency | All at once | Each service |
| Complexity | Low | High (networking, discovery) |
| AI-specific | Model shares memory | Better model isolation |
| **When to choose** | MVP, prototype, POC | Production, multi-model |

> **Practical rule:** Start Monolith → separate Microservices when you need to scale **inference** separately, or when the team is > 4 people, or when deploy frequency is different between components.

### 6.2. Service decomposition for AI

```
┌─────────────────────────────────────────────────────────────┐
│                     API Gateway (Kong/Traefik)              │
│                 Rate limiting, Auth, Routing                │
└────┬──────────┬──────────┬──────────┬──────────┬────────────┘
     │          │          │          │          │
     ▼          ▼          ▼          ▼          ▼
┌─────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌──────────┐
│ Orchest-│ │Inferen-│ │Embed-  │ │Retriev-│ │Document  │
│ rator   │ │ce SVC  │ │ding SVC│ │al SVC  │ │Processor │
│         │ │        │ │        │ │        │ │          │
│ Agent   │ │ LLM    │ │Sentence│ │Vector  │ │ PDF/DOCX │
│ Logic   │ │ Models │ │Transf. │ │Search  │ │ Chunking │
│ Routing │ │ GPU ⚡ │ │ GPU ⚡ │ │ChromaDB│ │ Parsing  │
└────┬────┘ └────────┘ └────────┘ └────────┘ └──────────┘
     │                                │            │
     ▼                                ▼            ▼
┌──────────┐                   ┌──────────┐  ┌──────────┐
│  Redis   │                   │ ChromaDB │  │PostgreSQL│
│ Cache +  │                   │ Vectors  │  │ Metadata │
│ Queue    │                   └──────────┘  └──────────┘
└──────────┘
```

Each service has **1 responsibility** (Single Responsibility):

| Service | Responsibility | Scale Factor | GPU? |
|---|---|---|---|
| **Orchestrator** | Agent logic, routing, tool calling | CPU-bound, I/O-wait | ❌ |
| **Inference** | LLM generation (chat, completion) | GPU memory-bound | ✅ |
| **Embedding** | Text → vectors | GPU compute-bound | ✅ |
| **Retrieval** | Vector search, re-ranking | Memory-bound | ❌ |
| **Document Processor** | Parse, chunk, extract | CPU-bound, I/O | ❌ |

### 6.3. Service interfaces

```python
# Mỗi service expose REST API rõ ràng
# inference_service/main.py
from fastapi import FastAPI

app = FastAPI(title="Inference Service")

@app.post("/v1/generate")
async def generate(request: GenerateRequest) -> GenerateResponse:
    """LLM text generation."""
    ...

@app.post("/v1/generate/stream")
async def generate_stream(request: GenerateRequest):
    """Streaming generation via SSE."""
    ...

# embedding_service/main.py
app = FastAPI(title="Embedding Service")

@app.post("/v1/embed")
async def embed(request: EmbedRequest) -> EmbedResponse:
    """Text → vector embedding."""
    ...

@app.post("/v1/embed/batch")
async def embed_batch(request: BatchEmbedRequest) -> BatchEmbedResponse:
    """Batch embedding cho hiệu năng cao."""
    ...
```

## 7. API Gateway Pattern

### 7.1. Why do we need API Gateway?

Clients should not call each microservice directly — need **1 entry point** to handle cross-cutting concerns:

```
Không Gateway:                  Có Gateway:
Client ──→ Auth Service         Client ──→ API Gateway ──→ Services
Client ──→ Inference SVC                   ├── Auth
Client ──→ Embedding SVC                   ├── Rate Limit
Client ──→ Retrieval SVC                   ├── Routing
   ↑ Client biết mọi service              ├── CORS
   ↑ Auth lặp lại mọi nơi                 └── Logging
```

### 7.2. Traefik configuration for AI services

```yaml
# docker-compose.gateway.yml
services:
  traefik:
    image: traefik:v3.0
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entryPoints.web.address=:80"
    ports:
      - "80:80"
      - "8080:8080"    # Traefik dashboard
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro

  orchestrator:
    build: ./services/orchestrator
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.orchestrator.rule=PathPrefix(`/api/v1/chat`)"
      - "traefik.http.routers.orchestrator.entrypoints=web"
      - "traefik.http.services.orchestrator.loadbalancer.server.port=8000"
      # Rate limiting
      - "traefik.http.middlewares.ai-ratelimit.ratelimit.average=10"
      - "traefik.http.middlewares.ai-ratelimit.ratelimit.burst=20"
      - "traefik.http.routers.orchestrator.middlewares=ai-ratelimit"

  inference:
    build: ./services/inference
    deploy:
      replicas: 2
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.inference.rule=PathPrefix(`/api/v1/generate`)"
      - "traefik.http.services.inference.loadbalancer.server.port=8001"

  embedding:
    build: ./services/embedding
    deploy:
      replicas: 3
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.embedding.rule=PathPrefix(`/api/v1/embed`)"
      - "traefik.http.services.embedding.loadbalancer.server.port=8002"
```

## 8. Message Queue for Async AI Tasks

### 8.1. Why do we need a message queue?

Many AI tasks **do not require immediate response** — document processing takes 30 seconds, batch embedding takes 5 minutes. HTTP timeout will kill the request.

```
Synchronous (❌ cho heavy tasks):
Client ──HTTP──→ API ──process 30s──→ Response
                      ↑ Connection timeout!

Asynchronous (✅):
Client ──HTTP──→ API ──enqueue──→ Response (task_id)
                        │
                  Queue ─┤
                        │
                Worker ──┘ process in background
Client ──HTTP──→ API ──check status──→ Result
```

### 8.2. Redis Streams for AI task queue

```python
# src/queue/producer.py
import redis
import json
import uuid

redis_client = redis.Redis(host="redis", port=6379, db=0)

def enqueue_task(task_type: str, payload: dict) -> str:
    """Đẩy task vào Redis Stream."""
    task_id = str(uuid.uuid4())
    message = {
        "task_id": task_id,
        "type": task_type,
        "payload": json.dumps(payload),
        "status": "pending",
    }
    # XADD vào stream tương ứng
    redis_client.xadd(f"tasks:{task_type}", message)
    # Lưu status riêng để query nhanh
    redis_client.hset(f"task:{task_id}", mapping=message)
    return task_id

# API endpoint
@app.post("/api/v1/process-document")
async def process_document(file: UploadFile):
    """Upload document → queue → background processing."""
    content = await file.read()
    task_id = enqueue_task("document", {
        "filename": file.filename,
        "content_b64": base64.b64encode(content).decode(),
    })
    return {"task_id": task_id, "status": "queued"}

@app.get("/api/v1/tasks/{task_id}")
async def get_task_status(task_id: str):
    """Check task completion status."""
    status = redis_client.hgetall(f"task:{task_id}")
    return status
```

```python
# src/queue/consumer.py
import redis
import json

redis_client = redis.Redis(host="redis", port=6379, db=0)
CONSUMER_GROUP = "ai-workers"
CONSUMER_NAME = f"worker-{os.getpid()}"

def process_tasks(stream: str):
    """Consumer group — nhiều worker xử lý song song."""
    # Tạo consumer group (idempotent)
    try:
        redis_client.xgroup_create(stream, CONSUMER_GROUP, id="0", mkstream=True)
    except redis.ResponseError:
        pass  # Group already exists

    while True:
        # Đọc message chưa ai xử lý
        messages = redis_client.xreadgroup(
            CONSUMER_GROUP, CONSUMER_NAME,
            {stream: ">"},
            count=1, block=5000  # Block 5s nếu không có message
        )

        for stream_name, stream_messages in messages:
            for msg_id, data in stream_messages:
                task_id = data[b"task_id"].decode()
                payload = json.loads(data[b"payload"])

                try:
                    # Xử lý task
                    result = handle_task(data[b"type"].decode(), payload)

                    # Update status
                    redis_client.hset(f"task:{task_id}", mapping={
                        "status": "completed",
                        "result": json.dumps(result),
                    })

                    # Acknowledge message
                    redis_client.xack(stream_name, CONSUMER_GROUP, msg_id)

                except Exception as e:
                    redis_client.hset(f"task:{task_id}", mapping={
                        "status": "failed",
                        "error": str(e),
                    })
```

### 8.3. Task types in AI system

| Task Type | Priorities | Avg Time | Workers |
|---|---|---|---|
| `inference` (chat) | 🔴 High | 2-10s | GPU workers |
| `embedding` | 🟡 Medium | 0.5-2s | GPU workers |
| `document_process` | 🟢 Low | 10-60s | CPU workers |
| `batch_inference` | 🟢 Low | 1-30 min | GPU workers (off-peak) |
| `reindex` | ⚪ Background | 5-60 min | CPU workers |

## 9. REST vs gRPC for AI Services

### 9.1. Compare details

| Criteria | REST/JSON | gRPC/Protobuf |
|---|---|---|
| Serialization | JSON (text) | Protobuf (binary) |
| Payload size | Large (~2-5x) | Small, compact |
| Speed ​​(latency) | ~30% slower | Faster |
| Streaming | SSE (1-way), WebSocket | Bi-directional native |
| Browser support | ✅ Native | ⚠️ Need grpc-web proxy |
| Debugging | curl, Postman | grpcurl, Postman (new) |
| Code generation | Manual / OpenAPI | Auto from .proto |
| **Best for AI** | Client-facing API | Service-to-service |

### 9.2. Hybrid approach — most practical

```
External clients (browser, mobile):
  └──→ REST/JSON qua API Gateway

Internal service-to-service:
  └──→ gRPC cho tốc độ

┌──────────┐  REST   ┌──────────┐  gRPC   ┌──────────┐
│  Client  │────────→│ API GW / │────────→│Inference │
│ (React)  │  JSON   │ Orchest. │ Protobuf│ Service  │
└──────────┘         └──────────┘         └──────────┘
```

```protobuf
// protos/inference.proto
syntax = "proto3";

service InferenceService {
  rpc Generate (GenerateRequest) returns (GenerateResponse);
  rpc GenerateStream (GenerateRequest) returns (stream Token);
}

message GenerateRequest {
  string prompt = 1;
  string model = 2;
  float temperature = 3;
  int32 max_tokens = 4;
}

message Token {
  string text = 1;
  bool is_finished = 2;
}
```

## 10. Docker Networking & Service Discovery

### 10.1. Docker network basics

```yaml
# docker-compose.yml
services:
  api:
    networks:
      - frontend    # Exposed to client
      - backend     # Internal services

  inference:
    networks:
      - backend     # KHÔNG expose ra ngoài

  chromadb:
    networks:
      - backend

  traefik:
    networks:
      - frontend
      - backend

networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge
    internal: true    # Không route ra internet
```

### 10.2. Service discovery

In Docker Compose, each service automatically has **DNS name = service name**:

```python
# Trong code, dùng service name thay vì IP
import os

# ✅ Docker DNS tự resolve
INFERENCE_URL = os.getenv("INFERENCE_URL", "http://inference:8001")
EMBEDDING_URL = os.getenv("EMBEDDING_URL", "http://embedding:8002")
REDIS_URL = os.getenv("REDIS_URL", "redis://redis:6379/0")
CHROMA_URL = os.getenv("CHROMA_URL", "http://chromadb:8000")

# ❌ KHÔNG hardcode IP
# INFERENCE_URL = "http://172.18.0.5:8001"
```

```
Docker DNS resolution:
┌──────────────────────────────────────────┐
│ Docker Network: ai-network               │
│                                          │
│  api ─────────→ inference:8001  ✅       │
│  api ─────────→ redis:6379      ✅       │
│  api ─────────→ chromadb:8000   ✅       │
│                                          │
│  DNS: service_name → container_IP        │
│  Load Balance: round-robin khi replicas  │
└──────────────────────────────────────────┘
```

## 11. Complete Docker Compose for AI Agent Stack

Summary from Lesson 16 (RAG Agent) + Lesson 17 (FastAPI):

```yaml
# docker-compose.prod.yml
# Complete AI Agent Stack
version: "3.9"

x-common-env: &common-env
  REDIS_URL: redis://redis:6379/0
  CHROMA_HOST: chromadb
  CHROMA_PORT: 8000
  POSTGRES_URL: postgresql://ai:${DB_PASSWORD}@postgres:5432/aidb
  LOG_LEVEL: ${LOG_LEVEL:-info}

services:
  # ── Gateway ──────────────────────────────
  traefik:
    image: traefik:v3.0
    command:
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entryPoints.web.address=:80"
      - "--accesslog=true"
      - "--metrics.prometheus=true"
    ports:
      - "80:80"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    networks:
      - frontend
      - backend

  # ── Orchestrator (Agent logic) ───────────
  orchestrator:
    build:
      context: ./services/orchestrator
      dockerfile: Dockerfile
    environment:
      <<: *common-env
      INFERENCE_URL: http://inference:8001
      EMBEDDING_URL: http://embedding:8002
      RETRIEVAL_URL: http://retrieval:8003
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.orch.rule=PathPrefix(`/api/v1`)"
      - "traefik.http.services.orch.loadbalancer.server.port=8000"
    depends_on:
      redis:
        condition: service_healthy
    networks:
      - backend
    deploy:
      replicas: 2
      resources:
        limits:
          memory: 1G
          cpus: "1.0"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  # ── Inference Service (LLM) ──────────────
  inference:
    build: ./services/inference
    environment:
      <<: *common-env
      MODEL_NAME: ${MODEL_NAME:-gpt-4o-mini}
      OPENAI_API_KEY: ${OPENAI_API_KEY}
    networks:
      - backend
    deploy:
      replicas: 1
      resources:
        limits:
          memory: 4G
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8001/health"]
      interval: 15s
      timeout: 5s
      retries: 5

  # ── Embedding Service ────────────────────
  embedding:
    build: ./services/embedding
    environment:
      <<: *common-env
      EMBED_MODEL: sentence-transformers/all-MiniLM-L6-v2
    volumes:
      - model-cache:/app/models
    networks:
      - backend
    deploy:
      replicas: 2
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8002/health"]
      interval: 15s
      timeout: 5s
      retries: 5

  # ── Retrieval Service ────────────────────
  retrieval:
    build: ./services/retrieval
    environment:
      <<: *common-env
    networks:
      - backend
    deploy:
      replicas: 2
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8003/health"]
      interval: 15s
      timeout: 5s
      retries: 5

  # ── Worker (async tasks) ─────────────────
  worker:
    build: ./services/orchestrator
    command: >
      celery -A src.tasks worker
      --loglevel=info
      --queues=documents,batch
      --concurrency=4
    environment:
      <<: *common-env
    networks:
      - backend
    deploy:
      replicas: 2
      resources:
        limits:
          memory: 2G

  # ── Data Stores ──────────────────────────
  redis:
    image: redis:7-alpine
    command: >
      redis-server
      --maxmemory 1gb
      --maxmemory-policy allkeys-lru
      --appendonly yes
    volumes:
      - redis-data:/data
    networks:
      - backend
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 5

  chromadb:
    image: chromadb/chroma:0.5.0
    environment:
      - ANONYMIZED_TELEMETRY=false
    volumes:
      - chroma-data:/chroma/chroma
    networks:
      - backend
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/api/v1/heartbeat"]
      interval: 10s
      timeout: 5s
      retries: 5

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: ai
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: aidb
    volumes:
      - postgres-data:/var/lib/postgresql/data
      - ./init-db:/docker-entrypoint-initdb.d
    networks:
      - backend
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ai -d aidb"]
      interval: 10s
      timeout: 5s
      retries: 5

networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge
    internal: true

volumes:
  model-cache:
  redis-data:
  chroma-data:
  postgres-data:
```

```bash
# .env file (KHÔNG commit vào git!)
OPENAI_API_KEY=sk-...
DB_PASSWORD=strong-random-password-here
MODEL_NAME=gpt-4o-mini
LOG_LEVEL=info
```

## 12. Health Checks, Logging & Monitoring

### 12.1. Health check pattern for AI services

```python
# src/health.py
from fastapi import APIRouter, Response
from datetime import datetime
import asyncio

router = APIRouter()

@router.get("/health")
async def health_check():
    """Liveness probe — service còn sống không?"""
    return {"status": "ok", "timestamp": datetime.utcnow().isoformat()}

@router.get("/ready")
async def readiness_check():
    """Readiness probe — service sẵn sàng nhận request không?"""
    checks = {}

    # Check model loaded
    checks["model"] = model_manager.is_loaded()

    # Check Redis connection
    try:
        await redis_client.ping()
        checks["redis"] = True
    except Exception:
        checks["redis"] = False

    # Check vector DB
    try:
        await chroma_client.heartbeat()
        checks["chromadb"] = True
    except Exception:
        checks["chromadb"] = False

    all_healthy = all(checks.values())
    status_code = 200 if all_healthy else 503

    return Response(
        content=json.dumps({
            "status": "ready" if all_healthy else "not_ready",
            "checks": checks,
        }),
        status_code=status_code,
        media_type="application/json",
    )
```

### 12.2. Structured logging

```python
# src/logging_config.py
import structlog
import logging

def setup_logging():
    """Structured JSON logging — dễ parse bởi ELK/Grafana."""
    structlog.configure(
        processors=[
            structlog.contextvars.merge_contextvars,
            structlog.processors.add_log_level,
            structlog.processors.TimeStamper(fmt="iso"),
            structlog.processors.JSONRenderer(),
        ],
        logger_factory=structlog.PrintLoggerFactory(),
    )

# Usage trong AI service
logger = structlog.get_logger()

@app.post("/api/v1/chat")
async def chat(request: ChatRequest):
    logger.info(
        "chat_request",
        model=request.model,
        message_count=len(request.messages),
        user_id=request.user_id,
    )

    start = time.time()
    response = await inference_service.generate(request)
    duration = time.time() - start

    logger.info(
        "chat_response",
        model=request.model,
        tokens_used=response.usage.total_tokens,
        duration_seconds=round(duration, 3),
        user_id=request.user_id,
    )
    return response
```

### 12.3. Container monitoring commands

```bash
# Real-time resource usage
docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.NetIO}}"

# Output:
# NAME          CPU %   MEM USAGE / LIMIT   NET I/O
# api           12.5%   256MiB / 1GiB       5.2MB / 1.1MB
# inference     85.3%   3.2GiB / 4GiB       12MB / 45MB
# worker        5.2%    512MiB / 2GiB       1.1MB / 0.5MB
# redis         0.5%    128MiB / 512MiB     8.5MB / 4.2MB
# chromadb      2.1%    1.1GiB / 2GiB       3.2MB / 1.8MB

# Xem logs với timestamps
docker compose logs --timestamps --tail=100 api

# Inspect container details
docker inspect --format='{{.State.Health.Status}}' ai-api-1

# GPU monitoring (trong container)
docker exec inference nvidia-smi --query-gpu=utilization.gpu,memory.used,memory.total \
  --format=csv,noheader,nounits
```

### 12.4. Monitoring architecture overview

```
┌─────────────────────────────────────────────────┐
│                 Grafana Dashboard                │
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐   │
│  │ Request  │ │ GPU Usage│ │ Queue Depth  │   │
│  │ Latency  │ │ Memory   │ │ Task Status  │   │
│  └──────────┘ └──────────┘ └──────────────┘   │
└────────────────────┬────────────────────────────┘
                     │
              ┌──────┴──────┐
              │ Prometheus  │  ← Scrape /metrics
              └──────┬──────┘
                     │
    ┌────────────────┼────────────────┐
    │                │                │
┌───┴───┐     ┌─────┴────┐    ┌──────┴─────┐
│Traefik│     │ AI Svcs  │    │   Redis    │
│metrics│     │ /metrics │    │  Exporter  │
└───────┘     └──────────┘    └────────────┘
```

## Summary

This article covers all **containerization + microservices** for AI systems:

- ✅ **Docker fundamentals** — multi-stage builds, layer caching, .dockerignore optimized for AI
- ✅ **GPU support** — NVIDIA Container Toolkit, CUDA base images, device reservation
- ✅ **Model caching** — volume mount, download at startup, 3 strategies depending on use case
- ✅ **Docker Compose** — full AI stack: API + Worker + VectorDB + Redis + PostgreSQL
- ✅ **Microservices decomposition** — Orchestrator, Inference, Embedding, Retrieval, Document Processor
- ✅ **API Gateway** — Traefik routing, rate limiting, load balancing
- ✅ **Message Queue** — Redis Streams for async tasks (document processing, batch inference)
- ✅ **REST vs gRPC** — hybrid approach: REST for client, gRPC for service-to-service
- ✅ **Networking** — Docker networks, service discovery, DNS resolution
- ✅ **Monitoring** — health checks, structured logging, Prometheus + Grafana stack

> **Next article:** Lesson 19 will cover **CI/CD & MLOps** — GitHub Actions, model versioning, automated testing, blue-green deployment for AI services.

## Exercises

### Exercise 1: Dockerfile for RAG Service (30 minutes)

Write multi-stage Dockerfile for RAG service from Lesson 16:
- Stage 1: Install dependencies (requirements.txt has langchain, chromadb, sentence-transformers)
- Stage 2: Copy code, non-root user, health check
- Create a suitable .dockerignore
- Build and test run: `docker build -t rag-service . && docker run -p 8000:8000 rag-service`

### Exercise 2: Docker Compose AI Stack (45 minutes)

Create `docker-compose.yml` for system:
- **api**: FastAPI service from Lesson 17 (port 8000)
- **chromadb**: Vector database (port 8100)
- **redis**: Cache + message broker
- **postgres**: Metadata storage
- Health checks for all services
- Shared network, environment variables from `.env` file

### Exercise 3: Microservices Decomposition (60 minutes)

Split the monolith AI service into 3 microservices:
1. **orchestrator** — receives requests, calls other services, returns responses
2. **embedding-service** — text → vector (endpoint `/v1/embed`)
3. **retrieval-service** — vector search from ChromaDB (endpoint `/v1/search`)

Requirements:
- Each service has its own Dockerfile
- Docker Compose connects it all
- Orchestrator calls embedding + retrieval over HTTP
- Test with curl: send query → receive RAG results

### Exercise 4: Async Task Queue (45 minutes)

Implement document processing pipeline:
- `POST /upload` — upload PDF, pay `task_id`
- Redis Stream as queue
- Worker reads from queue, parses PDF, chunks, embeds, stores into ChromaDB
- `GET /tasks/{task_id}` — check status (pending/processing/completed/failed)
- Test with 3 documents uploaded at the same time

