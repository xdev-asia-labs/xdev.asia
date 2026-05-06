---
id: 019e0a01-bb18-7001-c001-ee1800000001
title: 第 18 課：人工智慧的 Docker 和微服務架構
slug: bai-18-docker-microservices-ai
description: >-
  適用於 AI 的 Docker：多階段建置、GPU 支援、模型快取。用於本地開發的 Docker Compose。微服務模式：API
  閘道、服務網格。訊息佇列（Redis、RabbitMQ）。分離服務：推理、嵌入、檢索、編排。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: 第 5 部分：API、微服務和 MLOps
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> 您已經完成了 AI 代理的編碼，並將其推送到 GitHub - 但是當您的同事克隆它時，它*「可以在我的機器上運行」*。模型需要 CUDA 12.1，LangChain 需要 Python 3.11，ChromaDB 需要最新的 SQLite...Docker 解決了整個依賴地獄，微服務架構幫助您獨立擴展每個部分。

## 1. 為什麼選擇 Docker 來實作 AI？

### 1.1。 AI/ML 中的依賴地獄

AI 專案比常規 Web 應用程式具有更複雜的依賴關係：

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

### 1.2。 Docker解決什麼問題？

|問題 |沒有 Docker |有 Docker |
|---|---|---|
| Python版本衝突| pyenv，conda 木偶 |每個容器 1 個 Python 容器 |
| CUDA 版本不符 |安裝系統範圍 |映像中的 CUDA |
| “在我的機器上運行”|總是會發生|圖像到處都是一樣的 |
|再現性|缺少requirements.txt | Dockerfile = 完整配方 |
|水平縮放|手動安裝每台伺服器| `docker compose scale` |
|回滾部署|恐懼| `docker rollback` 1 個命令 |

### 1.3。 AI 工作負載的容器與虛擬機

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

> **關鍵見解：** 容器與主機共用核心 → 幾乎零開銷。透過 NVIDIA Container Toolkit 的 GPU 直通 → 效能 = 裸機。

## 2. AI 服務的 Dockerfile

### 2.1。多階段建構－減小影像大小

多階段建置將**建置依賴項**（gcc、建置工具）與**執行時間**分開，將映像大小從 5GB 減少到 1-2GB：

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

### 2.2。層快取－優化建置時間

Docker 快取每一層。 **複製順序非常重要** - 應先進行小的更改：

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

### 2.3。 .dockerignore 用於 AI 項目

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

## 3. Docker 的 GPU 支持

### 3.1。 NVIDIA 容器工具包設置

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

### 3.2。 CUDA 基礎鏡像

|基礎圖像|尺寸|使用案例|
|---|---|---|
| `nvidia/cuda:12.1.0-base-ubuntu22.04` | 〜120MB |僅 CUDA 運行時 |
| `nvidia/cuda:12.1.0-runtime-ubuntu22.04` | 〜800MB |運行時 + cuDNN |
| `nvidia/cuda:12.1.0-devel-ubuntu22.04` | 〜3.5GB |建立自訂 CUDA 操作 |
| `pytorch/pytorch:2.3.0-cuda12.1-cudnn8-runtime` | 〜5.5GB |預裝 PyTorch |

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

## 4. 模型快取策略

AI 模型通常為 1-10GB——不應該被烘焙到 Docker 映像中。有3種策略：

### 4.1。策略比較

|戰略|建置時間 |冷啟動|磁碟使用情況|最適合 |
|---|---|---|---|---|
|磁碟區安裝 |即時 |主機依賴 |共用|開發、本機部署 |
|在新創公司下載 |快速建置 |慢（第一次）|每個貨櫃 |雲，自動縮放 |
|模型登錄（MLflow）|快速建置 |快速（快取）|集中式|生產、團隊|

### 4.2。捲安裝 — 最簡單

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

### 4.3。啟動時下載並快取

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

## 5. 用於 AI 堆疊的 Docker Compose

### 5.1。完整的人工智慧開發堆疊

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

### 5.2。啟動和管理

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

## 6. AI 微服務架構

### 6.1。單體應用 vs 微服務－何時拆分？

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

|標準|巨石|微服務|
|---|---|---|
|團隊規模| 1-3 位開發人員 | 4+ 開發人員 |
|刻度圖案|制服|每服務（專用 GPU）|
|部署頻率 |一次全部|每項服務|
|複雜度 |低|高（網路、發現）|
|人工智慧專用|模型共享記憶體|更好的模型隔離 |
| **何時選擇** | MVP、原型、POC |多型號生產 |

> **實用規則：** 當您需要單獨擴展 **推理** 時，或當團隊超過 4 人時，或當元件之間的部署頻率不同時，啟動整體 → 單獨的微服務。

### 6.2。 AI 服務分解

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

每個服務都有 **1 個責任**（單一責任）：

|服務 |責任|比例因子|圖形處理器？ |
|---|---|---|---|
| **編曲家** |代理邏輯、路由、工具呼叫 | CPU 限制、I/O 等待 | ❌ |
| **推論** | LLM 產生（聊天、完成）| GPU 記憶體限制 | ✅ |
| **嵌入** |文字→向量| GPU 運算限制 | ✅ |
| **檢索** |向量搜索，重新排名 |內存限制| ❌ |
| **文檔處理器** |解析、分塊、提取 | CPU 限制、I/O | ❌ |

### 6.3。服務介面

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

## 7. API 閘道模式

### 7.1。為什麼我們需要API網關？

客戶端不應直接呼叫每個微服務 - 需要 **1 個入口點** 來處理橫切問題：

```
Không Gateway:                  Có Gateway:
Client ──→ Auth Service         Client ──→ API Gateway ──→ Services
Client ──→ Inference SVC                   ├── Auth
Client ──→ Embedding SVC                   ├── Rate Limit
Client ──→ Retrieval SVC                   ├── Routing
   ↑ Client biết mọi service              ├── CORS
   ↑ Auth lặp lại mọi nơi                 └── Logging
```

### 7.2。 AI 服務的 Traefik 配置

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

## 8. 非同步 AI 任務的訊息佇列

### 8.1。為什麼我們需要訊息隊列？

許多人工智慧任務**不需要立即回應**——文件處理需要 30 秒，批量嵌入需要 5 分鐘。 HTTP 逾時將終止請求。

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

### 8.2。用於 AI 任務隊列的 Redis Streams

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

### 8.3。 AI系統中的任務類型

|任務類型 |優先事項 |平均時間 |工人|
|---|---|---|---|
| `inference` （聊天）| 🔴高| 2-10 秒 | GPU 工作者 |
| `embedding` | 🟡 中 | 0.5-2秒| GPU 工作者 |
| `document_process` | 🟢 低 | 10-60 秒 | CPU工作人員|
| `batch_inference` | 🟢 低 | 1-30 分鐘 | GPU 工作執行緒（非高峰）|
| `reindex` | ⚪ 背景 | 5-60 分鐘 | CPU工作人員|

## 9. AI 服務的 REST 與 gRPC

### 9.1。比較細節

|標準|休息/JSON | gRPC/Protobuf |
|---|---|---|
|連載 | JSON（文字）| Protobuf（二進位）|
|有效負載大小|大 (~2-5x) |小型、緊湊 |
|速度（延遲）|慢約 30% |更快 |
|串流媒體| SSE（1 路）、WebSocket |雙向本機 |
|瀏覽器支援 | ✅ 本地人 | ⚠️ 需要 grpc-web 代理 |
|調試|捲曲，郵差 | grpcurl，郵差（新）|
|程式碼產生|手冊/OpenAPI |來自 .proto 的自動 |
| **最適合人工智慧** |面向客戶的API |服務到服務|

### 9.2。混合方法—最實用

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

## 10. Docker 網路和服務發現

### 10.1。 Docker 網路基礎知識

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

### 10.2。服務發現

在 Docker Compose 中，每個服務自動具有 **DNS 名稱 = 服務名稱**：

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

## 11. AI Agent 堆疊的完整 Docker Compose

第 16 課（RAG 代理）+ 第 17 課（FastAPI）總結：

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

## 12. 健康檢查、日誌記錄和監控

### 12.1。 AI服務健康檢查模式

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

### 12.2。結構化日誌記錄

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

### 12.3。容器監控命令

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

### 12.4。監控架構概覽

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

## 總結

本文涵蓋了人工智慧系統的所有**容器化+微服務**：

- ✅ **Docker 基礎** — 多階段建置、層快取、針對 AI 最佳化的 .dockerignore
- ✅ **GPU 支援** — NVIDIA 容器工具包、CUDA 基礎映像、裝置預留
- ✅ **模型快取** — 磁碟區安裝、啟動時下載、3 種策略（取決於用例）
- ✅ **Docker Compose** — 完整的 AI 堆疊：API + Worker + VectorDB + Redis + PostgreSQL
- ✅ **微服務分解** — 編排器、推理、嵌入、檢索、文件處理器
- ✅ **API Gateway** — Traefik 路由、速率限制、負載平衡
- ✅ **訊息佇列** — 用於非同步任務的 Redis Streams（文件處理、批次推理）
- ✅ **REST 與 gRPC** — 混合方法：REST 用於客戶端，gRPC 用於服務到服務
- ✅ **網路** — Docker 網路、服務發現、DNS 解析
- ✅ **監控** — 健康檢查、結構化日誌記錄、Prometheus + Grafana 堆疊

> **下一篇文章：** 第 19 課將涵蓋 **CI/CD 和 MLOps** — GitHub Actions、模型版本控制、自動化測試、AI 服務的藍綠部署。

## 練習

### 練習 1：RAG 服務的 Dockerfile（30 分鐘）

為第 16 課中的 RAG 服務編寫多階段 Dockerfile：
- 第 1 階段：安裝依賴項（requirements.txt 有 langchain、chromadb、sentence-transformers）
- 第2階段：複製程式碼、非root使用者、健康檢查
- 建立一個合適的.dockerignore
- 建置和測試運行： `docker build -t rag-service . && docker run -p 8000:8000 rag-service`

### 練習 2：Docker Compose AI 堆疊（45 分鐘）

創建 `docker-compose.yml` 對於系統：
- **api**：第 17 課中的 FastAPI 服務（連接埠 8000）
- **chromadb**：向量資料庫（連接埠 8100）
- **redis**：快取+訊息代理
- **postgres**：元資料存儲
- 所有服務的健康檢查
- 共享網路、環境變量 `.env` 文件

### 練習 3：微服務分解（60 分鐘）

將整體 AI 服務拆分為 3 個微服務：
1. **協調器** — 接收請求，呼叫其他服務，回傳回應
2. **嵌入服務** — 文字→向量（端點 `/v1/embed`）
3. **retrieval-service** — 來自 ChromaDB 的向量搜尋（端點 `/v1/search`）

要求：
- 每個服務都有自己的Dockerfile
- Docker Compose 連接這一切
- Orchestrator 透過 HTTP 呼叫嵌入 + 檢索
- 使用curl進行測試：傳送查詢→接收RAG結果

### 練習 4：非同步任務佇列（45 分鐘）

實施文件處理管道：
- `POST /upload` — 上傳 PDF，付費 `task_id`
- Redis Stream 作為隊列
- Worker 從佇列讀取、解析 PDF、分塊、嵌入、儲存到 ChromaDB 中
- `GET /tasks/{task_id}` — 檢查狀態（待處理/處理中/已完成/失敗）
- 同時上傳3個文件進行測試

