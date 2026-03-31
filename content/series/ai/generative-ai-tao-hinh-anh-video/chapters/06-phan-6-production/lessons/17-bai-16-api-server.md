---
id: 019d8b31-bb16-7016-c016-ee1600000016
title: 'Bài 16: Generative AI API Server — Xây dựng Platform'
slug: bai-16-generative-ai-api-server
description: >-
  Xây API server cho image generation: FastAPI + Stable Diffusion.
  Queue-based processing với Celery/Redis. GPU memory management.
  Model loading optimization. Rate limiting và authentication.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 6: Production & Ứng dụng Thực tế"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

Xây dựng Generative AI platform production cần giải quyết: **GPU memory management**, **queue-based processing**, **model caching**, **rate limiting**, và **storage**. Bài này hướng dẫn architecture và implementation chi tiết.

---

## 1. Architecture Overview

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

## 2. FastAPI Server

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

## 3. Celery Worker with GPU

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

## 4. GPU Memory Management

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

## 5. WebSocket for Real-time Progress

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

## 6. S3 Storage Integration

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

## 7. Docker Deployment

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

## Tổng kết

| Component | Technology |
|-----------|-----------|
| API Server | FastAPI |
| Task Queue | Celery + Redis |
| GPU Worker | Diffusers + PyTorch |
| Storage | S3 / MinIO |
| Real-time | WebSocket |
| Deployment | Docker + nvidia-container |

> 📌 **Bài tiếp theo:** AI Safety, Ethics & Copyright trong Generative AI.
