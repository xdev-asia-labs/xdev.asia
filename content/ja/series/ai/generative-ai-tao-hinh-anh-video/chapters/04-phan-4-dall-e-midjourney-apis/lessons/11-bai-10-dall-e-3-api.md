---
id: 019d8b31-bb10-7010-c010-ee1000000010
title: 'レッスン 10: DALL-E 3 API — OpenAI イメージ生成の統合'
slug: bai-10-dall-e-3-api
description: >-
  DALL-E 3 アーキテクチャの概要。 OpenAI 画像 API: 生成、編集、バリエーション。 DALL-E のベスト
  プラクティスを迅速に実行します。レート制限と価格設定の最適化。 Web アプリケーションとの統合パターン。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 4: DALL-E、Midjourney、商用 API'
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: '生成 AI: AI を使用して画像とビデオを作成する'
  slug: generative-ai-tao-hinh-anh-video
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7511" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7511)"/>

  <!-- Decorations -->
  <g>
    <circle cx="825" cy="105" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1050" cy="130" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="775" cy="155" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1000" cy="180" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="205" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="175" x2="1100" y2="255" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="205" x2="1050" y2="275" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1050.9807621135333,210 1050.9807621135333,240 1025,255 999.0192378864668,240 999.0192378864668,210 1025,195" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: DALL-E 3 API — OpenAI の統合</tspan>
      <tspan x="60" dy="42">画像生成</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成 AI: AI を使用して画像とビデオを作成する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: DALL-E、Midjourney、商用 API</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**DALL-E 3** は、OpenAI の最も強力な画像生成モデルです。ChatGPT と深く統合されており、自然なプロンプトをよく理解し、実稼働対応の API を備えています。この記事では、DALL-E 3 API を実際のアプリケーションに統合する方法を説明します。

---

## 1. OpenAI 画像 API

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

### サイズと価格

|サイズ |品質 |価格 |
|------|--------|------|
| 1024×1024 |標準 | ~$0.04 |
| 1024×1024 | HD | ~$0.08 |
| 1024×1792 |標準 | ~$0.08 |
| 1792×1024 |標準 | ~$0.08 |

---

## 2. 画像編集 (DALL-E 2)

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

### 画像のバリエーション

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

## 3. 画像をダウンロードして保存する

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

## 4. DALL-E 3 のベスト プラクティスを迅速に実行する

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

## 5. 統合パターン — FastAPI サーバー

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

## 6. レート制限とコストの最適化

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

## 7. 安全性とコンテンツに関するポリシー

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

## 概要

|特長 |ダルイー3 |ダルイー2 |
|----------|----------|----------|
|品質 |素晴らしい |良い |
|迅速な理解 |自然言語 |キーワード |
|編集 |いいえ |はい (マスク) |
|バリエーション |いいえ |はい |
|最大解像度 | 1792×1024 | 1024×1024 |
|即時書き換え |自動 |いいえ |

> 📌 **次の記事:** Midjourney、Flux、新興モデル — プラットフォームの比較。
