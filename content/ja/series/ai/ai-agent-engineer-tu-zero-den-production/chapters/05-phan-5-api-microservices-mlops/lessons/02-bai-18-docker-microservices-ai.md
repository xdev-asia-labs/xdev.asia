---
id: 019e0a01-bb18-7001-c001-ee1800000001
title: 'レッスン 18: AI 用の Docker およびマイクロサービス アーキテクチャ'
slug: bai-18-docker-microservices-ai
description: >-
  AI 用 Docker: マルチステージ ビルド、GPU サポート、モデル キャッシュ。ローカル開発用の Docker Compose。マイクロサービス
  パターン: API ゲートウェイ、サービス メッシュ。メッセージキュー (Redis、RabbitMQ)。サービスの分離:
  推論、埋め込み、取得、オーケストレーション。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: 'パート 5: API、マイクロサービス、MLOps'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> AI エージェントのコーディングが完了し、GitHub にプッシュしましたが、同僚がそれを複製すると、*「私のマシン上で動作」* します。モデルには CUDA 12.1 が必要で、LangChain には Python 3.11 が必要で、ChromaDB には最新の SQLite が必要です...Docker はこの依存関係の地獄全体を解決し、マイクロサービス アーキテクチャは各部分を個別にスケールするのに役立ちます。

## 1. AI に Docker を使用する理由

＃＃＃１．１． AI/ML における依存地獄

AI プロジェクトには、通常の Web アプリよりもはるかに複雑な依存関係があります。

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

＃＃＃１．２． Docker は何を解決しますか?

|問題 |ドッカーなし | Dockerがある |
|---|---|---|
| Python バージョンの競合 | pyenv、conda パペット |コンテナごとに 1 つの Python コンテナ |
| CUDA バージョンの不一致 |システム全体にインストール |画像内の CUDA |
| 「私のマシンで動作します」 |いつも起こる |イメージはどこでも同じです |
|再現性 |要件.txt がありません | Dockerfile = 完全なレシピ |
|水平スケール |各サーバーを手動でインストールする | `docker compose scale` |
|ロールバック展開 |恐怖 | `docker rollback` 1 コマンド |

＃＃＃１．３． AI ワークロードのコンテナと VM

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

> **重要な洞察:** コンテナはホストとカーネルを共有 → オーバーヘッドはほぼゼロ。 NVIDIA Container Toolkit 経由の GPU パススルー → パフォーマンス = ベアメタル。

## 2. AI サービス用の Dockerfile

＃＃＃２．１．マルチステージビルド — イメージサイズを削減します

マルチステージ ビルドにより、**ビルドの依存関係** (gcc、ビルド ツール) が **ランタイム**から分離され、イメージ サイズが 5 GB から 1 ～ 2 GB に削減されます。

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

＃＃＃２．２．レイヤーキャッシュ — ビルド時間を最適化します

Docker は各レイヤーをキャッシュします。 **コピーの順序は非常に重要です** - 小さな変更を最初に配置する必要があります。

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

＃＃＃２．３． AI プロジェクト用の .dockerignore

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

## 3. Docker による GPU サポート

＃＃＃３．１． NVIDIA コンテナ ツールキットのセットアップ

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

＃＃＃３．２． CUDAベースイメージ

|ベースイメージ |サイズ |使用例 |
|---|---|---|
| `nvidia/cuda:12.1.0-base-ubuntu22.04` | ～120MB | CUDA ランタイムのみ |
| `nvidia/cuda:12.1.0-runtime-ubuntu22.04` | ~800MB |ランタイム + cuDNN |
| `nvidia/cuda:12.1.0-devel-ubuntu22.04` | ～3.5GB |カスタム CUDA オペレーションを構築する |
| `pytorch/pytorch:2.3.0-cuda12.1-cudnn8-runtime` | ～5.5GB | PyTorch がプリインストールされています |

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

## 4. モデルのキャッシュ戦略

AI モデルは通常 1 ～ 10 GB です。Docker イメージにベイクしないでください。戦略は 3 つあります。

＃＃＃４．１．戦略の比較

|戦略 |ビルド時間 |コールドスタート |ディスク使用量 |最適な用途 |
|---|---|---|---|---|
|ボリュームマウント |インスタント |ホストに依存 |共有 |開発、オンプレミス |
|起動時にダウンロード |高速ビルド |ゆっくり（初めて） |コンテナごと |クラウド、自動スケール |
|モデルレジストリ (MLflow) |高速ビルド |高速 (キャッシュ) |集中型 |制作、チーム |

＃＃＃４．２．ボリューム マウント — 最も単純な

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

＃＃＃４．３．キャッシュを使用して起動時にダウンロードする

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

## 5. AI スタック用の Docker Compose

＃＃＃５．１．完全な AI 開発スタック

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

＃＃＃５．２．立ち上げと管理

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

## 6. AI 用のマイクロサービス アーキテクチャ

＃＃＃６．１．モノリスとマイクロサービス — いつ分割するか?

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

|基準 |モノリス |マイクロサービス |
|---|---|---|
|チームの規模 | 1 ～ 3 人の開発者 | 4 人以上の開発者 |
|スケールパターン |ユニフォーム |サービスごと (専用 GPU) |
|導入頻度 |一気に |各サービス |
|複雑さ |低い |高 (ネットワーキング、ディスカバリー) |
| AI 固有 |モデルはメモリを共有します |モデルの分離の改善 |
| **いつ選択するか** | MVP、プロトタイプ、POC |量産、マルチモデル |

> **実践的なルール:** **推論**を個別にスケーリングする必要がある場合、チームが 4 名を超える場合、またはコンポーネント間でデプロイ頻度が異なる場合は、Monolith を開始して、マイクロサービスを個別に開始します。

＃＃＃６．２． AIのサービス分解

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

各サービスには **1 つの責任** (単一責任) があります。

|サービス |責任 |スケール係数 | GPU？ |
|---|---|---|---|
| **オーケストレーター** |エージェントロジック、ルーティング、ツール呼び出し | CPU バウンド、I/O 待機 | ❌ |
| **推論** | LLM 生成 (チャット、補完) | GPU メモリ制限 | ✅ |
| **埋め込み** |テキスト → ベクトル | GPU コンピューティング バウンド | ✅ |
| **検索** |ベクトル検索、再ランキング |メモリバウンド | ❌ |
| **ドキュメント プロセッサ** |解析、チャンク、抽出 | CPU バウンド、I/O | ❌ |

＃＃＃６．３．サービスインターフェース

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

## 7. API ゲートウェイ パターン

＃＃＃７．１．なぜ API ゲートウェイが必要なのでしょうか?

クライアントは各マイクロサービスを直接呼び出すべきではありません。横断的な問題を処理するには **1 つのエントリ ポイント**が必要です。

```
Không Gateway:                  Có Gateway:
Client ──→ Auth Service         Client ──→ API Gateway ──→ Services
Client ──→ Inference SVC                   ├── Auth
Client ──→ Embedding SVC                   ├── Rate Limit
Client ──→ Retrieval SVC                   ├── Routing
   ↑ Client biết mọi service              ├── CORS
   ↑ Auth lặp lại mọi nơi                 └── Logging
```

＃＃＃７．２． AI サービス用の Traefik 構成

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

## 8. 非同期 AI タスクのメッセージ キュー

### 8.1。なぜメッセージキューが必要なのでしょうか?

多くの AI タスクは **即時応答を必要としません**。ドキュメントの処理には 30 秒かかり、バッチの埋め込みには 5 分かかります。 HTTP タイムアウトによりリクエストは強制終了されます。

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

### 8.2。 AI タスクキュー用の Redis ストリーム

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

### 8.3。 AI システムのタスクの種類

|タスクの種類 |優先事項 |平均時間 |労働者 |
|---|---|---|---|
| `inference` (チャット) | 🔴高い | 2～10秒 | GPU ワーカー |
| `embedding` | 🟡 中 | 0.5～2秒 | GPU ワーカー |
| `document_process` | 🟢 低い | 10～60代 | CPU ワーカー |
| `batch_inference` | 🟢 低い | 1～30分 | GPU ワーカー (オフピーク) |
| `reindex` | ⚪ 背景 | 5～60分 | CPU ワーカー |

## 9. AI サービスの REST と gRPC の比較

＃＃＃９．１．詳細を比較する

|基準 | REST/JSON | gRPC/プロトバッファ |
|---|---|---|
|連載 | JSON (テキスト) | Protobuf (バイナリ) |
|ペイロードサイズ |大 (~2～5x) |小型、コンパクト |
|速度(レイテンシー) | ~30% 遅くなる |より速く |
|ストリーミング | SSE (一方向)、WebSocket |双方向ネイティブ |
|ブラウザのサポート | ✅ ネイティブ | ⚠️ grpc-web プロキシが必要 |
|デバッグ |カール、郵便配達員 | 写真grpurl、ポストマン (新機能) |
|コード生成 |マニュアル / OpenAPI | .protoから自動 |
| **AI に最適** |クライアント向け API |サービス間 |

＃＃＃９．２．ハイブリッド アプローチ — 最も実用的

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

## 10. Docker ネットワーキングとサービス検出

### 10.1。 Dockerネットワークの基本

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

### 10.2。サービスディスカバリ

Docker Compose では、各サービスには自動的に **DNS 名 = サービス名** が設定されます。

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

## 11. AI エージェント スタック用の完全な Docker Compose

レッスン 16 (RAG エージェント) + レッスン 17 (FastAPI) の要約:

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

## 12. ヘルスチェック、ロギング、モニタリング

### 12.1。 AIサービスのヘルスチェックパターン

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

＃＃＃１２．２．構造化されたロギング

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

### 12.3。コンテナ監視コマンド

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

＃＃＃１２．４。モニタリングアーキテクチャの概要

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

## 概要

この記事では、AI システムのすべての**コンテナ化 + マイクロサービス**について説明します。

- ✅ **Docker の基礎** — マルチステージ ビルド、レイヤー キャッシュ、AI 用に最適化された .dockerignore
- ✅ **GPU サポート** — NVIDIA コンテナ ツールキット、CUDA ベース イメージ、デバイス予約
- ✅ **モデル キャッシュ** — ボリューム マウント、起動時のダウンロード、ユースケースに応じた 3 つの戦略
- ✅ **Docker Compose** — フル AI スタック: API + Worker + VectorDB + Redis + PostgreSQL
- ✅ **マイクロサービスの分解** — オーケストレーター、推論、埋め込み、取得、ドキュメント プロセッサ
- ✅ **API ゲートウェイ** — Traefik ルーティング、レート制限、ロード バランシング
- ✅ **メッセージ キュー** — 非同期タスク用の Redis ストリーム (ドキュメント処理、バッチ推論)
- ✅ **REST vs gRPC** — ハイブリッド アプローチ: クライアントには REST、サービス間には gRPC
- ✅ **ネットワーク** — Docker ネットワーク、サービス検出、DNS 解決
- ✅ **モニタリング** — ヘルスチェック、構造化ログ、Prometheus + Grafana スタック

> **次の記事:** レッスン 19 では、**CI/CD と MLOps** — GitHub アクション、モデルのバージョニング、自動テスト、AI サービスの Blue-Green デプロイメントについて説明します。

## 演習

### 演習 1: RAG サービスの Dockerfile (30 分)

レッスン 16 の RAG サービス用のマルチステージ Dockerfile を作成します。
- ステージ 1: 依存関係をインストールします (requirements.txt には langchain、chromadb、sentence-transformers が含まれています)
- ステージ 2: コードのコピー、非 root ユーザー、ヘルス チェック
- 適切な .dockerignore を作成する
- ビルドとテスト実行: `docker build -t rag-service . && docker run -p 8000:8000 rag-service`

### 演習 2: Docker Compose AI スタック (45 分)

作成 `docker-compose.yml` システムの場合:
- **api**: レッスン 17 の FastAPI サービス (ポート 8000)
- **chromadb**: ベクター データベース (ポート 8100)
- **redis**: キャッシュ + メッセージ ブローカー
- **postgres**: メタデータ ストレージ
- すべてのサービスのヘルスチェック
- 共有ネットワーク、環境変数 `.env` ファイル

### 演習 3: マイクロサービスの分解 (60 分)

モノリス AI サービスを 3 つのマイクロサービスに分割します。
1. **オーケストレーター** — リクエストを受信し、他のサービスを呼び出し、応答を返します
2. **embedding-service** — テキスト → ベクター (エンドポイント `/v1/embed`）
3. **検索サービス** — ChromaDB からのベクトル検索 (エンドポイント `/v1/search`）

要件:
- 各サービスには独自の Dockerfile があります
- Docker Compose がすべてを接続します
- オーケストレーターは HTTP 経由で埋め込みと取得を呼び出します
-curl でテスト: クエリを送信 → RAG 結果を受信

### 演習 4: 非同期タスク キュー (45 分)

ドキュメント処理パイプラインを実装します。
- `POST /upload` — PDF をアップロードし、支払います `task_id`
- キューとしての Redis ストリーム
- ワーカーはキューから読み取り、PDF を解析し、チャンクを埋め込み、ChromaDB に保存します。
- `GET /tasks/{task_id}` — ステータスの確認 (保留中/処理中/完了/失敗)
- 3 つのドキュメントを同時にアップロードしてテストする

