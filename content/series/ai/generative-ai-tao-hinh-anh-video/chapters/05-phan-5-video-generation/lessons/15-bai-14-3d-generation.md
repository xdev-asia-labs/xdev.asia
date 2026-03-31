---
id: 019d8b31-bb14-7014-c014-ee1400000014
title: 'Bài 14: 3D Generation & Avatar AI'
slug: bai-14-3d-generation-avatar
description: >-
  Text-to-3D: DreamFusion, Magic3D, Point-E. Image-to-3D models.
  3D Gaussian Splatting. AI Avatars: talking head, full body.
  NeRF basics. 3D asset generation cho games & VR.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 5: Video Generation & Multimodal"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

3D generation đang phát triển nhanh — từ **text-to-3D** (DreamFusion, Magic3D), **image-to-3D** (TripoSR, InstantMesh), đến **3D Gaussian Splatting** và **AI Avatars**. Đây là frontier tiếp theo sau image và video generation.

---

## 1. Text-to-3D Overview

```
Text → Image → 3D reconstruction

Approaches:
1. Score Distillation Sampling (SDS): dùng 2D diffusion model guide 3D
2. Multi-view generation → 3D reconstruction
3. Direct 3D generation (native 3D models)
```

### DreamFusion / Magic3D

```python
# Concept: optimize a NeRF/mesh using SDS loss from Stable Diffusion
# 1. Render NeRF from random viewpoint
# 2. Add noise to rendered image
# 3. Use SD to predict noise → compute SDS gradient
# 4. Update NeRF parameters
# Repeat → NeRF learns 3D shape matching text prompt

# DreamFusion uses NeRF, Magic3D uses mesh (2-stage: coarse → fine)
```

---

## 2. Image-to-3D — TripoSR

```python
# TripoSR: fast image-to-3D (< 1 second!)
# Input: single image → Output: 3D mesh

from tsr.system import TSR
from PIL import Image

model = TSR.from_pretrained("stabilityai/TripoSR")
model.to("cuda")

image = Image.open("object.png")

# Generate 3D mesh
mesh = model.run(
    image,
    foreground_ratio=0.85,
    mc_resolution=256,
)

# Export
mesh.export("output.obj")  # or .glb, .ply
```

---

## 3. 3D Gaussian Splatting

```
3DGS: represent scene as millions of 3D Gaussians
- Each Gaussian: position, covariance, opacity, color (SH)
- Render via differentiable rasterization → very fast
- Train from multi-view images (like NeRF but faster)

Advantages over NeRF:
- 100x faster rendering (real-time)
- Explicit representation (can edit)
- Better quality on many scenes
```

```python
# Training 3DGS from images
# Input: 50-200 images from different viewpoints
# Output: .ply file with Gaussian parameters

# Using gsplat library
# pip install gsplat

# Typical workflow:
# 1. Capture images/video of object
# 2. Run COLMAP for camera poses
# 3. Train 3D Gaussians
# 4. Export and render in real-time
```

---

## 4. AI Avatars — Talking Heads

```python
# SadTalker: animate face from audio
# Input: face image + audio → Output: talking head video

# pip install sadtalker

# Usage:
# python inference.py \
#   --source_image face.jpg \
#   --driven_audio speech.wav \
#   --result_dir results/

# API integration
class TalkingHeadGenerator:
    def __init__(self):
        self.model = self.load_sadtalker()

    def generate(self, face_image_path, audio_path):
        """Generate talking head video"""
        result = self.model.inference(
            source_image=face_image_path,
            driven_audio=audio_path,
            enhancer="gfpgan",       # face enhancement
            preprocess="crop",
            still_mode=False,
            expression_scale=1.0,
        )
        return result["video_path"]
```

---

## 5. Full Body Avatars

```python
# Digital human pipeline
# 1. Generate character image (Stable Diffusion)
# 2. Create 3D mesh (TripoSR / PIFuHD)
# 3. Rig and animate (motion capture / text-to-motion)
# 4. Add voice (TTS + lip sync)

class DigitalHumanPipeline:
    async def create_avatar(self, description, script):
        # Generate character
        char_image = await self.generate_character(description)

        # Create 3D model
        mesh = self.image_to_3d(char_image)

        # Generate animation from text
        motion = await self.text_to_motion(script)

        # Generate voice
        audio = await self.text_to_speech(script)

        # Combine
        video = self.render_animated_avatar(mesh, motion, audio)
        return video
```

---

## 6. NeRF Basics

```
NeRF (Neural Radiance Fields):
- Represent 3D scene as neural network
- Input: (x, y, z, θ, φ) → Output: (color, density)
- Train from multi-view images
- Render novel views via volume rendering

Key concept:
- Positional encoding: map coordinates to higher dimensions
- Volume rendering: ray marching through NeRF
- Training: photometric loss between rendered and real images
```

```python
# Simplified NeRF forward
import torch.nn as nn

class SimpleNeRF(nn.Module):
    def __init__(self):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(60, 256),  # positional encoded input
            nn.ReLU(),
            nn.Linear(256, 256),
            nn.ReLU(),
            nn.Linear(256, 256),
            nn.ReLU(),
            nn.Linear(256, 4),  # RGB + density
        )

    def forward(self, x):
        output = self.net(x)
        rgb = torch.sigmoid(output[:, :3])
        density = torch.relu(output[:, 3])
        return rgb, density
```

---

## 7. 3D Asset Generation cho Games

```
Workflow:
1. Concept → text prompt
2. Generate reference images (SD/DALL-E)
3. Image-to-3D (TripoSR / InstantMesh)
4. Clean up mesh (Blender, Meshy)
5. Texture generation (TEXTure, Text2Tex)
6. Export to game engine (Unity, Unreal)

Tools:
- Meshy.ai: text-to-3D with textures
- Luma Genie: high-quality 3D generation
- Point-E (OpenAI): point cloud generation
- Shap-E (OpenAI): 3D mesh generation
```

---

## Tổng kết

| Technology | Input | Output | Speed |
|-----------|-------|--------|-------|
| DreamFusion | Text | NeRF/Mesh | ~1 hour |
| TripoSR | Image | Mesh | < 1 sec |
| 3D Gaussian Splatting | Multi-view images | Gaussians | ~30 min |
| SadTalker | Face + Audio | Talking video | ~1 min |
| Meshy | Text | Textured mesh | ~2 min |

> 📌 **Bài tiếp theo:** ComfyUI Mastery — visual workflow cho AI art.
