---
id: 019d8b31-bb18-7018-c018-ee1800000018
title: 'Bài 18: Capstone — Xây dựng AI Creative Platform'
slug: bai-18-capstone-ai-creative-platform
description: >-
  Dự án tổng kết: xây dựng platform tạo content AI — text-to-image,
  image editing, video generation. Architecture: frontend React +
  backend FastAPI + ComfyUI + S3. Deploy với Docker & GPU cloud.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 6: Production & Ứng dụng Thực tế"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

Bài capstone này tổng hợp tất cả kiến thức từ khóa học để xây dựng **AI Creative Platform** hoàn chỉnh — một ứng dụng web cho phép user tạo images, edit photos, generate videos, với hệ thống credit, gallery, và admin dashboard.

---

## 1. Project Overview

```
AI Creative Platform Features:
├── Text-to-Image (SDXL, DALL-E 3)
├── Image Editing (Inpainting, Background Removal)
├── Image-to-Image (Style Transfer, ControlNet)
├── Video Generation (SVD, external APIs)
├── Gallery (browse, share, download)
├── Credit System (usage tracking)
├── User Management (auth, profiles)
└── Admin Dashboard (monitoring, moderation)
```

### Tech Stack
```
Frontend:  React / Next.js + TailwindCSS
Backend:   FastAPI + Celery + Redis
AI Engine: ComfyUI (local) + OpenAI API (cloud)
Storage:   MinIO (S3-compatible)
Database:  PostgreSQL
Auth:      JWT + OAuth2
Deploy:    Docker Compose + NVIDIA Container
```

---

## 2. Database Schema

```sql
-- Users
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    avatar_url TEXT,
    credits INTEGER DEFAULT 100,
    plan VARCHAR(50) DEFAULT 'free',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Generations
CREATE TABLE generations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    prompt TEXT NOT NULL,
    negative_prompt TEXT,
    model VARCHAR(100) NOT NULL,
    width INTEGER,
    height INTEGER,
    steps INTEGER,
    guidance_scale FLOAT,
    seed BIGINT,
    image_url TEXT,
    thumbnail_url TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    credits_used INTEGER DEFAULT 1,
    duration_ms INTEGER,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gallery (public shared images)
CREATE TABLE gallery (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    generation_id UUID REFERENCES generations(id),
    title VARCHAR(255),
    likes_count INTEGER DEFAULT 0,
    views_count INTEGER DEFAULT 0,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 3. Backend API

```python
from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import HTTPBearer
from pydantic import BaseModel

app = FastAPI(title="AI Creative Platform")

class TextToImageRequest(BaseModel):
    prompt: str
    negative_prompt: str = ""
    model: str = "sdxl"
    width: int = 1024
    height: int = 1024
    steps: int = 30
    guidance_scale: float = 7.5

@app.post("/api/v1/generate/text-to-image")
async def text_to_image(
    req: TextToImageRequest,
    user = Depends(get_current_user),
):
    # Check credits
    if user.credits < 1:
        raise HTTPException(402, "Insufficient credits")

    # Check prompt safety
    if not is_prompt_safe(req.prompt):
        raise HTTPException(400, "Prompt violates content policy")

    # Queue generation
    task_id = queue_generation(user.id, req)

    # Deduct credits
    deduct_credits(user.id, 1)

    return {"task_id": task_id, "status": "queued"}

@app.post("/api/v1/generate/inpaint")
async def inpaint_image(
    image: UploadFile,
    mask: UploadFile,
    prompt: str,
    user = Depends(get_current_user),
):
    # Process inpainting request
    task_id = queue_inpainting(user.id, image, mask, prompt)
    deduct_credits(user.id, 2)  # inpainting costs more
    return {"task_id": task_id}

@app.get("/api/v1/gallery")
async def get_gallery(page: int = 1, limit: int = 20):
    """Public gallery of shared generations"""
    return get_public_gallery(page, limit)
```

---

## 4. ComfyUI Integration

```python
class ComfyUIClient:
    """Client for ComfyUI API"""

    def __init__(self, base_url="http://comfyui:8188"):
        self.base_url = base_url
        self.workflows = self._load_workflows()

    def _load_workflows(self):
        return {
            "txt2img": json.load(open("workflows/txt2img.json")),
            "inpaint": json.load(open("workflows/inpaint.json")),
            "controlnet": json.load(open("workflows/controlnet.json")),
            "upscale": json.load(open("workflows/upscale.json")),
        }

    async def generate(self, workflow_name, params):
        workflow = json.loads(json.dumps(self.workflows[workflow_name]))

        # Inject params into workflow
        if workflow_name == "txt2img":
            workflow["6"]["inputs"]["text"] = params["prompt"]
            workflow["7"]["inputs"]["text"] = params.get("negative_prompt", "")
            workflow["5"]["inputs"]["width"] = params.get("width", 1024)
            workflow["5"]["inputs"]["height"] = params.get("height", 1024)

        # Submit to ComfyUI
        async with httpx.AsyncClient() as client:
            resp = await client.post(
                f"{self.base_url}/prompt",
                json={"prompt": workflow}
            )
            prompt_id = resp.json()["prompt_id"]

        # Wait for result
        return await self._poll_result(prompt_id)
```

---

## 5. Frontend — React Components

```tsx
// components/ImageGenerator.tsx
function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState(null);

  const generate = async () => {
    setGenerating(true);
    const { task_id } = await api.post("/generate/text-to-image", {
      prompt,
      model: selectedModel,
    });

    // WebSocket for real-time progress
    const ws = new WebSocket(`ws://api/ws/generate/${task_id}`);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.status === "completed") {
        setResult(data.image_url);
        setGenerating(false);
        ws.close();
      }
      setProgress(data.progress);
    };
  };

  return (
    <div className="space-y-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the image you want to create..."
        className="w-full p-4 border rounded-lg"
      />
      <button
        onClick={generate}
        disabled={generating}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        {generating ? `Generating... ${progress}%` : "Generate"}
      </button>
      {result && <img src={result} alt="Generated" className="rounded-lg" />}
    </div>
  );
}
```

---

## 6. Docker Compose

```yaml
services:
  frontend:
    build: ./frontend
    ports: ["3000:3000"]
    depends_on: [api]

  api:
    build: ./backend
    ports: ["8000:8000"]
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/genai
      - REDIS_URL=redis://redis:6379
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    depends_on: [db, redis]

  worker:
    build: ./backend
    command: celery -A tasks worker -Q generation --loglevel=info
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]
    depends_on: [redis, comfyui]

  comfyui:
    image: comfyui:latest
    ports: ["8188:8188"]
    volumes:
      - ./models:/app/models
      - ./workflows:/app/workflows
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]

  db:
    image: postgres:16
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: genai
    volumes: [pgdata:/var/lib/postgresql/data]

  redis:
    image: redis:7-alpine

  minio:
    image: minio/minio
    command: server /data --console-address ":9001"
    ports: ["9000:9000", "9001:9001"]
    volumes: [minio_data:/data]

volumes:
  pgdata:
  minio_data:
```

---

## 7. Deployment & Monitoring

```python
# Health check endpoint
@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "gpu_available": torch.cuda.is_available(),
        "gpu_memory": f"{torch.cuda.mem_get_info()[0]/1e9:.1f}GB free",
        "queue_length": redis_client.llen("celery"),
        "active_workers": get_active_workers(),
    }

# Monitoring metrics (Prometheus)
from prometheus_client import Counter, Histogram

generation_counter = Counter(
    "generations_total", "Total generations", ["model", "status"]
)
generation_duration = Histogram(
    "generation_duration_seconds", "Generation duration"
)
```

---

## 8. Next Steps

```
Roadmap:
□ Add more models (Flux, Midjourney API)
□ Implement LoRA gallery (community LoRAs)
□ Add batch generation
□ Mobile app (React Native)
□ API marketplace (developers)
□ Fine-tuning service (custom LoRA training)
□ Enterprise plan (dedicated GPU, custom models)
```

---

## Tổng kết

Trong capstone này, bạn đã xây dựng:

| Component | Implementation |
|-----------|---------------|
| Backend API | FastAPI + JWT auth + credit system |
| AI Engine | ComfyUI + SDXL + DALL-E 3 |
| Task Queue | Celery + Redis |
| Storage | MinIO (S3) |
| Frontend | React + WebSocket progress |
| Safety | Prompt filter + NSFW detection |
| Deploy | Docker Compose + GPU |

**Chúc mừng hoàn thành series Generative AI!** 🎉
