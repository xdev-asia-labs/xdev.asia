---
id: 019d8b31-bb12-7012-c012-ee1200000012
title: 'Lesson 12: Video Generation — Sora, Runway, Kling & Pika'
slug: bai-12-video-generation
description: >-
  Video generation landscape 2026. Text-to-video: Sora, Runway Gen-3, Kling,
  Pika Labs. Image-to-video. Video editing with AI. Temporal consistency
  challenges. API integration patterns.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 5: Video Generation & Multimodal'
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: 'Generative AI: Create Images & Videos with AI'
  slug: generative-ai-tao-hinh-anh-video
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-567" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-567)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1061" cy="93" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="1022" cy="114" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="983" cy="135" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="944" cy="156" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="177" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="103" x2="1100" y2="183" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="133" x2="1050" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="935.9089653438086,84 935.9089653438086,122 903,141 870.0910346561914,122 870.0910346561914,84.00000000000001 903,65" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI & ML — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 12: Video Generation — Sora, Runway,</tspan>
      <tspan x="60" dy="42">Kling & Pika</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Generative AI: Create Images & Videos with AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Video Generation & Multimodal</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

2024-2026 is a giant leap for **AI Video Generation** — from Sora (OpenAI), Runway Gen-3, Kling (Kuaishou), to Pika Labs. Quality from "toy demo" has become "production-ready" for many use cases.

---

## 1. Video Generation Landscape 2026

| Platform | Developer | Strengths | Max Duration |
|----------|-----------|-----------|-------------|
| Sora | OpenAI | Photorealism, physics | 60s |
| Runway Gen-3 | Runway | Creative control, editing | 10-40s |
| Kling | Kuaishou | Motion quality, affordable | 10s |
| Pika | Pika Labs | Speed, ease of use | 10s |
| Luma Dream Machine | Luma AI | 3D consistency | 5-10s |
| Stable Video | Stability AI | Open-source | 4s |

---

## 2. OpenAI Sora API

```python
from openai import OpenAI

client = OpenAI()

# Text-to-Video
response = client.videos.generate(
    model="sora",
    prompt="""
    A golden retriever playing fetch on a sunny beach.
    The waves gently crash in the background.
    The dog runs towards the camera with a ball in its mouth.
    Shot on a cinematic camera, shallow depth of field.
    """,
    duration=10,           # seconds
    resolution="1080p",
    aspect_ratio="16:9",
)

video_url = response.data[0].url
```

---

## 3. Runway Gen-3 API

```python
import requests

RUNWAY_API_KEY = "your_api_key"

# Text-to-video
response = requests.post(
    "https://api.runwayml.com/v1/generate/video",
    headers={"Authorization": f"Bearer {RUNWAY_API_KEY}"},
    json={
        "prompt": "A timelapse of a flower blooming",
        "model": "gen3",
        "duration": 10,
        "resolution": "1280x768",
    }
)

task_id = response.json()["task_id"]

# Poll for completion
import time
while True:
    status = requests.get(
        f"https://api.runwayml.com/v1/tasks/{task_id}",
        headers={"Authorization": f"Bearer {RUNWAY_API_KEY}"},
    ).json()
    if status["status"] == "completed":
        video_url = status["output"]["video_url"]
        break
    time.sleep(5)
```

---

## 4. Image-to-Video

```python
# Animate a still image into a video
import base64

with open("landscape.png", "rb") as f:
    image_b64 = base64.b64encode(f.read()).decode()

response = requests.post(
    "https://api.runwayml.com/v1/generate/video",
    headers={"Authorization": f"Bearer {RUNWAY_API_KEY}"},
    json={
        "prompt": "camera slowly pans right, clouds moving",
        "image": image_b64,
        "model": "gen3",
        "duration": 5,
    }
)
```

---

## 5. Stable Video Diffusion (Open-source)

```python
from diffusers import StableVideoDiffusionPipeline
from diffusers.utils import load_image, export_to_video
import torch

pipe = StableVideoDiffusionPipeline.from_pretrained(
    "stabilityai/stable-video-diffusion-img2vid-xt",
    torch_dtype=torch.float16,
)
pipe.to("cuda")

# Image-to-video
image = load_image("input_frame.png").resize((1024, 576))

frames = pipe(
    image,
    num_frames=25,          # number of frames
    decode_chunk_size=4,
    motion_bucket_id=127,    # amount of motion (0-255)
    fps=7,
    num_inference_steps=25,
).frames[0]

export_to_video(frames, "output.mp4", fps=7)
```

---

## 6. Temporal Consistency

```
Challenge: giữ cho video nhất quán qua các frame

Vấn đề thường gặp:
- Flickering: brightness/color thay đổi giữa frames
- Morphing: objects thay đổi shape
- Disappearing: objects xuất hiện/biến mất
- Physics: vật thể di chuyển không tự nhiên

Giải pháp:
- Temporal attention layers (Sora)
- Frame interpolation (FILM, RIFE)
- Optical flow guidance
- Longer context windows
```

---

## 7. Video Editing Pipeline

```python
# Complete video creation workflow

class VideoCreationPipeline:
    def __init__(self, sora_client, runway_key):
        self.sora = sora_client
        self.runway_key = runway_key

    async def create_video(self, script):
        """Full pipeline: script → storyboard → video → edit"""
        # 1. Generate storyboard (images for each scene)
        scenes = self.parse_script(script)
        storyboard = []
        for scene in scenes:
            img = self.sora.images.generate(
                model="dall-e-3",
                prompt=scene["visual_description"],
            )
            storyboard.append(img)

        # 2. Animate each scene
        clips = []
        for img, scene in zip(storyboard, scenes):
            clip = await self.animate_scene(img, scene["motion"])
            clips.append(clip)

        # 3. Concatenate clips
        final = self.concatenate_clips(clips)
        return final

    def parse_script(self, script):
        """Parse script into scenes"""
        # Use LLM to break down script
        response = self.sora.chat.completions.create(
            model="gpt-4",
            messages=[{
                "role": "user",
                "content": f"Break this into video scenes: {script}"
            }]
        )
        return eval(response.choices[0].message.content)
```

---

## 8. Cost Comparison

| Platform | Cost per 10s | Quality | Speed ​​|
|----------|-------------|-------|-------|
| Sora | ~$0.50-2.00 | Best | ~2 min |
| Runway Gen-3 | ~$0.25-0.50 | Great | ~1 min |
| Kling | ~$0.10-0.20 | Good | ~30s |
| Pika | ~$0.05-0.15 | Good | ~20s |
| SVD (local) | GPU cost only | Decent | ~5 min |

---

## Summary

| Concepts | Description |
|--------|--------|
| Text-to-video | Generate video from text description |
| Image-to-video | Animate still images |
| Temporal consistency | Stay consistent across frames |
| Video pipeline | Script → storyboard → animate → edit |

> 📌 **Next article:** Audio & Music Generation — create sounds and music with AI.
