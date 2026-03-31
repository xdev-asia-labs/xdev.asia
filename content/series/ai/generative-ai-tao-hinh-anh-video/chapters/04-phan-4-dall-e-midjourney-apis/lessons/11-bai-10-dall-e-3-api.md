---
id: 019d8b31-bb10-7010-c010-ee1000000010
title: 'Bài 10: DALL-E 3 API — Tích hợp OpenAI Image Generation'
slug: bai-10-dall-e-3-api
description: >-
  DALL-E 3 architecture overview. OpenAI Images API: generation,
  editing, variations. Prompt best practices cho DALL-E. Rate limits
  và pricing optimization. Integration patterns với web applications.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 4: DALL-E, Midjourney & Commercial APIs"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

**DALL-E 3** là image generation model mạnh nhất của OpenAI — tích hợp sâu với ChatGPT, hiểu prompt tự nhiên tốt, và có API production-ready. Bài này hướng dẫn tích hợp DALL-E 3 API vào ứng dụng thực tế.

---

## 1. OpenAI Images API

```python
from openai import OpenAI

client = OpenAI()

# Text-to-Image
response = client.images.generate(
    model="dall-e-3",
    prompt="A white siamese cat sitting on a windowsill, watercolor painting",
    size="1024x1024",      # 1024x1024, 1024x1792, 1792x1024
    quality="standard",     # standard, hd
    style="vivid",          # vivid, natural
    n=1,
)

image_url = response.data[0].url
revised_prompt = response.data[0].revised_prompt  # DALL-E rewrites prompt
```

### Sizes & Pricing

| Size | Quality | Price |
|------|---------|-------|
| 1024×1024 | Standard | ~$0.04 |
| 1024×1024 | HD | ~$0.08 |
| 1024×1792 | Standard | ~$0.08 |
| 1792×1024 | Standard | ~$0.08 |

---

## 2. Image Editing (DALL-E 2)

```python
# Edit specific region of image
response = client.images.edit(
    model="dall-e-2",
    image=open("original.png", "rb"),
    mask=open("mask.png", "rb"),  # transparent area = edit zone
    prompt="a golden retriever sitting naturally",
    size="1024x1024",
    n=1,
)
```

### Image Variations

```python
# Generate variations of existing image
response = client.images.create_variation(
    model="dall-e-2",
    image=open("cat.png", "rb"),
    size="1024x1024",
    n=4,  # 4 variations
)
```

---

## 3. Download & Save Images

```python
import httpx
from pathlib import Path

async def generate_and_save(prompt, output_path, client):
    """Generate image and save to disk"""
    response = client.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size="1024x1024",
        quality="hd",
        response_format="b64_json",  # get base64 instead of URL
    )

    # From base64
    import base64
    image_data = base64.b64decode(response.data[0].b64_json)
    Path(output_path).write_bytes(image_data)

    return response.data[0].revised_prompt


# Or download from URL
def download_image(url, output_path):
    response = httpx.get(url)
    Path(output_path).write_bytes(response.content)
```

---

## 4. Prompt Best Practices cho DALL-E 3

```python
# DALL-E 3 hiểu ngôn ngữ tự nhiên tốt hơn SD
# Viết mô tả chi tiết như đang nói chuyện

# ❌ SD-style prompt (keyword spam)
bad_prompt = "cat, digital art, 4k, trending on artstation, highly detailed"

# ✅ DALL-E 3 prompt (natural description)
good_prompt = """
A fluffy white cat sitting on a velvet cushion in a cozy library.
The cat is wearing tiny round glasses and looking at an open book.
Warm golden afternoon light streams through tall windows.
Style: detailed watercolor illustration with soft colors.
"""

# DALL-E 3 tự động rewrite prompt → check revised_prompt
print(f"Original: {prompt}")
print(f"Revised: {response.data[0].revised_prompt}")
```

---

## 5. Integration Pattern — FastAPI Server

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from openai import OpenAI
import base64

app = FastAPI()
client = OpenAI()

class ImageRequest(BaseModel):
    prompt: str
    size: str = "1024x1024"
    quality: str = "standard"
    style: str = "vivid"

class ImageResponse(BaseModel):
    image_url: str
    revised_prompt: str

@app.post("/generate", response_model=ImageResponse)
async def generate_image(req: ImageRequest):
    try:
        response = client.images.generate(
            model="dall-e-3",
            prompt=req.prompt,
            size=req.size,
            quality=req.quality,
            style=req.style,
        )
        return ImageResponse(
            image_url=response.data[0].url,
            revised_prompt=response.data[0].revised_prompt,
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

---

## 6. Rate Limiting & Cost Optimization

```python
import asyncio
from collections import deque
import time

class RateLimiter:
    """Simple rate limiter for API calls"""
    def __init__(self, max_calls=5, period=60):
        self.max_calls = max_calls
        self.period = period
        self.calls = deque()

    async def acquire(self):
        now = time.time()
        while self.calls and self.calls[0] < now - self.period:
            self.calls.popleft()
        if len(self.calls) >= self.max_calls:
            sleep_time = self.calls[0] + self.period - now
            await asyncio.sleep(sleep_time)
        self.calls.append(time.time())

# Usage
limiter = RateLimiter(max_calls=5, period=60)

async def safe_generate(prompt):
    await limiter.acquire()
    return client.images.generate(model="dall-e-3", prompt=prompt)
```

---

## 7. Safety & Content Policy

```python
# DALL-E 3 có built-in safety filters
# Tự động reject: violence, explicit content, real people

# Handle content policy errors
from openai import BadRequestError

try:
    response = client.images.generate(
        model="dall-e-3",
        prompt=user_prompt,
    )
except BadRequestError as e:
    if "content_policy" in str(e):
        print("Prompt vi phạm content policy")
    elif "billing" in str(e):
        print("Hết quota hoặc billing issue")
    raise
```

---

## Tổng kết

| Feature | DALL-E 3 | DALL-E 2 |
|---------|----------|----------|
| Quality | Excellent | Good |
| Prompt understanding | Natural language | Keywords |
| Editing | No | Yes (mask) |
| Variations | No | Yes |
| Max resolution | 1792×1024 | 1024×1024 |
| Prompt rewriting | Auto | No |

> 📌 **Bài tiếp theo:** Midjourney, Flux & Emerging Models — so sánh platforms.
