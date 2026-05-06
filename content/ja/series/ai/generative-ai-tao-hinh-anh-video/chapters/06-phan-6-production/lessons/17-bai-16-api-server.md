---
id: 019d8b31-bb16-7016-c016-ee1600000016
title: 'レッスン 16: 生成 AI API サーバー — プラットフォームの構築'
slug: bai-16-generative-ai-api-server
description: >-
  画像生成用の API サーバーを構築: FastAPI + Stable Diffusion。 Celery/Redis によるキューベースの処理。 GPU
  メモリ管理。モデル読み込みの最適化。レート制限と認証。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 6: 生産と実用化'
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: '生成 AI: AI を使用して画像とビデオを作成する'
  slug: generative-ai-tao-hinh-anh-video
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8903" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8903)"/>

  <!-- Decorations -->
  <g>
    <circle cx="749" cy="257" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="898" cy="246" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1047" cy="235" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="696" cy="224" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="845" cy="213" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="127" x2="1100" y2="207" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="157" x2="1050" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1013.3730669589464,156 1013.3730669589464,198 977,219 940.6269330410536,198 940.6269330410536,156 977,135" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI と ML — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 16: 生成 AI API サーバー — 構築</tspan>
      <tspan x="60" dy="42">プラットフォームの構築</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成 AI: AI を使用して画像とビデオを作成する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 生産と実用化</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Generative AI プロダクション プラットフォームを構築するには、**GPU メモリ管理**、**キューベースの処理**、**モデル キャッシュ**、**レート制限**、**ストレージ**に対処する必要があります。この記事では、アーキテクチャと実装手順について詳しく説明します。

---

## 1. アーキテクチャの概要

```
┌──────────────────────────────────────────────────────────┐
│                  GENERATIVE AI PLATFORM                   │
│                                                          │
│  Client ──→ API Gateway ──→ FastAPI Server               │
│                                    ↓                     │
│                              ┌──────────┐                │
│                              │  Redis    │                │
│                              │  Queue    │                │
│                              └────┬─────┘                │
│                                   ↓                      │
│                         ┌─────────────────┐              │
│                         │  GPU Workers    │              │
│                         │  (Celery)       │              │
│                         │                 │              │
│                         │  SD Pipeline    │              │
│                         │  DALL-E Client  │              │
│                         │  ComfyUI        │              │
│                         └────────┬────────┘              │
│                                  ↓                       │
│                         ┌──────────────┐                 │
│                         │  S3 Storage  │                 │
│                         └──────────────┘                 │
└──────────────────────────────────────────────────────────┘
```

---

## 2. FastAPI サーバー

```python
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from uuid import uuid4
import redis

app = FastAPI(title="GenAI Platform")
redis_client = redis.Redis(host="localhost", port=6379)

class GenerateRequest(BaseModel):
    prompt: str
    negative_prompt: str = ""
    width: int = 1024
    height: int = 1024
    steps: int = 30
    guidance_scale: float = 7.5
    model: str = "sdxl"

class GenerateResponse(BaseModel):
    task_id: str
    status: str
    estimated_time: int

@app.post("/api/v1/generate", response_model=GenerateResponse)
async def generate_image(req: GenerateRequest):
    task_id = str(uuid4())

    # Queue task
    from tasks import generate_image_task
    generate_image_task.delay(
        task_id=task_id,
        prompt=req.prompt,
        negative_prompt=req.negative_prompt,
        width=req.width,
        height=req.height,
        steps=req.steps,
        guidance_scale=req.guidance_scale,
        model=req.model,
    )

    return GenerateResponse(
        task_id=task_id,
        status="queued",
        estimated_time=30,
    )

@app.get("/api/v1/status/{task_id}")
async def get_status(task_id: str):
    status = redis_client.hgetall(f"task:{task_id}")
    if not status:
        raise HTTPException(status_code=404, detail="Task not found")
    return {
        "task_id": task_id,
        "status": status.get(b"status", b"unknown").decode(),
        "image_url": status.get(b"image_url", b"").decode(),
    }
```

---

## 3. GPU を備えたセロリワーカー

```python
from celery import Celery
import torch
from diffusers import StableDiffusionXLPipeline
import redis
import boto3

celery_app = Celery("genai", broker="redis://localhost:6379/0")
redis_client = redis.Redis(host="localhost", port=6379)

# Model cache — load once per worker
_pipelines = {}

def get_pipeline(model_name):
    """Lazy load and cache model"""
    if model_name not in _pipelines:
        if model_name == "sdxl":
            pipe = StableDiffusionXLPipeline.from_pretrained(
                "stabilityai/stable-diffusion-xl-base-1.0",
                torch_dtype=torch.float16,
            )
            pipe.to("cuda")
            pipe.enable_model_cpu_offload()
        _pipelines[model_name] = pipe
    return _pipelines[model_name]

@celery_app.task(bind=True)
def generate_image_task(self, task_id, prompt, negative_prompt,
                         width, height, steps, guidance_scale, model):
    try:
        redis_client.hset(f"task:{task_id}", "status", "processing")

        pipe = get_pipeline(model)

        image = pipe(
            prompt=prompt,
            negative_prompt=negative_prompt,
            width=width,
            height=height,
            num_inference_steps=steps,
            guidance_scale=guidance_scale,
        ).images[0]

        # Upload to S3
        image_url = upload_to_s3(image, f"generated/{task_id}.png")

        redis_client.hset(f"task:{task_id}", mapping={
            "status": "completed",
            "image_url": image_url,
        })

    except Exception as e:
        redis_client.hset(f"task:{task_id}", mapping={
            "status": "failed",
            "error": str(e),
        })
        raise
```

---

## 4. GPU メモリ管理

```python
import torch
import gc

class GPUMemoryManager:
    """Manage GPU memory for multiple models"""

    def __init__(self, max_models=2):
        self.max_models = max_models
        self.loaded = {}  # model_name → (pipeline, last_used)

    def get_model(self, model_name):
        if model_name in self.loaded:
            self.loaded[model_name] = (
                self.loaded[model_name][0],
                time.time()
            )
            return self.loaded[model_name][0]

        # Evict least recently used if at capacity
        if len(self.loaded) >= self.max_models:
            self._evict_lru()

        # Load new model
        pipe = self._load_model(model_name)
        self.loaded[model_name] = (pipe, time.time())
        return pipe

    def _evict_lru(self):
        lru_name = min(self.loaded, key=lambda k: self.loaded[k][1])
        pipe = self.loaded.pop(lru_name)[0]
        del pipe
        torch.cuda.empty_cache()
        gc.collect()

    def _load_model(self, model_name):
        pipe = StableDiffusionXLPipeline.from_pretrained(
            model_name, torch_dtype=torch.float16
        )
        pipe.to("cuda")
        return pipe
```

---

## 5. リアルタイムの進行のための WebSocket

```python
from fastapi import WebSocket
import asyncio

@app.websocket("/ws/generate/{task_id}")
async def generate_websocket(websocket: WebSocket, task_id: str):
    await websocket.accept()

    while True:
        status = redis_client.hgetall(f"task:{task_id}")
        if not status:
            await websocket.send_json({"error": "Task not found"})
            break

        current_status = status.get(b"status", b"").decode()
        progress = int(status.get(b"progress", b"0"))

        await websocket.send_json({
            "task_id": task_id,
            "status": current_status,
            "progress": progress,
        })

        if current_status in ("completed", "failed"):
            if current_status == "completed":
                await websocket.send_json({
                    "image_url": status[b"image_url"].decode()
                })
            break

        await asyncio.sleep(1)

    await websocket.close()
```

---

## 6. S3 ストレージの統合

```python
import boto3
from io import BytesIO

s3_client = boto3.client("s3")
BUCKET = "genai-images"

def upload_to_s3(image, key):
    """Upload PIL Image to S3"""
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    buffer.seek(0)

    s3_client.upload_fileobj(
        buffer, BUCKET, key,
        ExtraArgs={"ContentType": "image/png"}
    )

    return f"https://{BUCKET}.s3.amazonaws.com/{key}"
```

---

## 7. Docker のデプロイメント

```dockerfile
FROM nvidia/cuda:12.1-runtime-ubuntu22.04

WORKDIR /app

RUN pip install torch torchvision --index-url https://download.pytorch.org/whl/cu121
RUN pip install diffusers transformers accelerate fastapi uvicorn celery redis boto3

COPY . .

# Pre-download models
RUN python -c "from diffusers import StableDiffusionXLPipeline; \
    StableDiffusionXLPipeline.from_pretrained('stabilityai/stable-diffusion-xl-base-1.0')"

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

```yaml
# docker-compose.yml
services:
  api:
    build: .
    ports: ["8000:8000"]
    depends_on: [redis]

  worker:
    build: .
    command: celery -A tasks worker --loglevel=info
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]
    depends_on: [redis]

  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]
```

---

## 概要

|コンポーネント |テクノロジー |
|----------|----------|
| APIサーバー |ファストAPI |
|タスクキュー |セロリ + レディス |
| GPU ワーカー |ディフューザー + PyTorch |
|ストレージ | S3/MinIO |
|リアルタイム |ウェブソケット |
|導入 | Docker + nvidia コンテナ |

> 📌 **次の記事:** 生成 AI における AI の安全性、倫理、著作権。
