---
id: 019d8b31-bb12-7012-c012-ee1200000012
title: 'Bài 12: Video Generation — Sora, Runway, Kling & Pika'
slug: bai-12-video-generation
description: >-
  Video generation landscape 2026. Text-to-video: Sora, Runway Gen-3,
  Kling, Pika Labs. Image-to-video. Video editing với AI. Temporal
  consistency challenges. API integration patterns.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 5: Video Generation & Multimodal"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

2024-2026 là bước nhảy vọt của **AI Video Generation** — từ Sora (OpenAI), Runway Gen-3, Kling (Kuaishou), đến Pika Labs. Chất lượng từ "toy demo" đã thành "production-ready" cho nhiều use cases.

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

| Platform | Cost per 10s | Quality | Speed |
|----------|-------------|---------|-------|
| Sora | ~$0.50-2.00 | Best | ~2 min |
| Runway Gen-3 | ~$0.25-0.50 | Great | ~1 min |
| Kling | ~$0.10-0.20 | Good | ~30s |
| Pika | ~$0.05-0.15 | Good | ~20s |
| SVD (local) | GPU cost only | Decent | ~5 min |

---

## Tổng kết

| Concept | Mô tả |
|---------|--------|
| Text-to-video | Generate video từ text description |
| Image-to-video | Animate still image |
| Temporal consistency | Giữ nhất quán qua frames |
| Video pipeline | Script → storyboard → animate → edit |

> 📌 **Bài tiếp theo:** Audio & Music Generation — tạo âm thanh và nhạc với AI.
