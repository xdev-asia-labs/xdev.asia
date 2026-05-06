---
id: 019d8b30-bb03-7003-c003-f0c4e8000003
title: 'Lesson 3: AI Tech Stack — Diffusion Models, Vision Models, LLM & MLOps'
slug: bai-3-ai-tech-stack-diffusion-vision-llm-mlops
description: >-
  Select and compare tech stack: Stable Diffusion XL vs FLUX, ControlNet, CLIP,
  Segment Anything, body estimation models. Setup MLOps pipeline with MLflow,
  Weights & Biases.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 1: AI System Architecture & Platform'
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 'AI in Action: Building an AI Platform for Fashion & Print-on-Demand'
  slug: ai-thuc-chien-fashion-print-on-demand
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6740" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6740)"/>

  <!-- Decorations -->
  <g>
    <circle cx="762" cy="196" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="924" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1086" cy="220" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="748" cy="102" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="244" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="76" x2="1100" y2="156" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="106" x2="1050" y2="176" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="952.8467875173176,110.5 952.8467875173176,141.5 926,157 899.1532124826824,141.5 899.1532124826824,110.50000000000001 926,95" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: AI Tech Stack — Diffusion Models,</tspan>
      <tspan x="60" dy="42">Vision Models, LLM & MLOps</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI in Action: Building an AI Platform for Fashion & Print-on-Demand</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: AI System Architecture & Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Before starting to code, you need to choose the right AI models and tools for each module. This article will compare the options in detail, explain why model X is chosen over model Y, and set up an MLOps environment to manage the entire lifecycle.

---

## 1. AI Models Map — Which model for which problem?

```
┌─────────────────────────────────────────────────────────────┐
│                   Fashion AI Platform — Model Map                │
├──────────────────┬──────────────────────────────────────────┤
│ Module           │ AI Models                                │
├──────────────────┼──────────────────────────────────────────┤
│ Design Gen       │ SDXL / FLUX, ControlNet, IP-Adapter      │
│ Image Analysis   │ CLIP, DINOv2                              │
│ Editing          │ InstructPix2Pix, Instruct-Diffusion      │
│ Typography       │ TextDiffuser, GlyphControl               │
│ Personalization  │ CLIP (embeddings), Rec model              │
│ Size Recommend   │ Custom ML (XGBoost / LightGBM)           │
│ Body Estimation  │ MediaPipe, OpenPose, SMPL-X               │
│ Garment Render   │ Cloth simulation, PyTorch3D               │
│ Auto-Tagging     │ CLIP zero-shot, fine-tuned ViT           │
│ Upscaling        │ Real-ESRGAN, SwinIR                       │
│ Product Copy     │ GPT-4o / Claude API / local LLM           │
│ Content Mod.     │ CLIP + NSFW classifier                    │
└──────────────────┴──────────────────────────────────────────┘
```

---

## 2. Diffusion Models — SDXL vs FLUX vs SD3

### Detailed comparison

| Features | SD 1.5 | SDXL | SD3 | FLUX.1 |
|--------|--------|--------|-----|--------|
| **Resolution** | 512x512 | 1024x1024 | 1024x1024 | 1024x1024+ |
| **Architecture** | UNet | UNet (larger) | MMDiT | Rectified Flow |
| **VRAM** | ~4GB | ~6.5GB | ~12GB | ~12GB |
| **Speed** | Fast | Medium | Slow | Medium |
| **Quality** | Good | Very good | Excellent | Excellent |
| **Text rendering** | Poor | Average | Good | Very good |
| **Fine-tune** | Easy, cheap | Average | Difficult | Average |
| **ControlNet** | Mature | Mature | Early | Growing |
| **License** | Open | Open | Gated | Mixed |

### Recommendation for Fashion AI Platform

```
Primary:   SDXL + LoRA fine-tuned cho fashion
           → Ecosystem mature, ControlNet đầy đủ, fine-tune dễ

Secondary: FLUX.1 Dev
           → Text rendering tốt hơn (quan trọng cho typography trên áo)

Fallback:  SD 1.5 + LoRA
           → Nhanh, nhẹ, dùng cho preview nhanh
```

### Why SDXL for MVP?

1. Complete **ControlNet ecosystem** — needed for garment-aware placement
2. **IP-Adapter** stable — needed for image reference
3. **LoRA fine-tuning** is cheap and fast — can train on 1x A100 in a few hours
4. Rich **Community models** — many LoRA fashions available
5. **Diffusers library** full support

---

## 3. Vision Models

### CLIP (Contrastive Language-Image Pre-training)

```python
# CLIP — backbone cho nhiều module
from transformers import CLIPModel, CLIPProcessor

# Use cases trong Fashion AI Platform:
# 1. Style analysis: Encode ảnh user upload → style vector
# 2. Auto-tagging: Zero-shot classification
# 3. Design search: Semantic similarity
# 4. Content moderation: NSFW detection

model = CLIPModel.from_pretrained("openai/clip-vit-large-patch14-336")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-large-patch14-336")
```

**Variants:**

| Model | Params | Image Size | Speed ​​| Accuracy |
|-------|--------|-----------|-------|----------|
| ViT-B/32 | 151M | 224 | Fast | Good |
| ViT-L/14 | 428M | 224 | Average | Very good |
| ViT-L/14@336 | 428M | 336 | Slower | Excellent |
| SigLIP | 878M | 384 | Slow | State-of-art |

**Recommendation**: `ViT-L/14@336` — balanced accuracy/speed, enough for style analysis and tagging.

### ControlNet

```
ControlNet variants cần cho Fashion AI Platform:

1. controlnet-canny
   → Garment edge detection, layout placement

2. controlnet-depth
   → 3D-aware design placement trên áo

3. controlnet-seg (segmentation)
   → Phân vùng áo: front, back, sleeve

4. controlnet-inpaint
   → Edit vùng cụ thể của design

5. controlnet-pose (OpenPose)
   → Virtual try-on, body-aware rendering
```

### IP-Adapter

```python
# IP-Adapter — dùng image reference để guide generation
# Thay vì chỉ dùng text prompt, kết hợp reference image

from diffusers import StableDiffusionXLPipeline
from ip_adapter import IPAdapterXL

# Load IP-Adapter
ip_adapter = IPAdapterXL(
    pipe, "ip-adapter-plus_sdxl_vit-h.safetensors"
)

# Generate với image reference
result = ip_adapter.generate(
    prompt="minimalist streetwear t-shirt design",
    pil_image=reference_image,    # Style reference
    scale=0.6,                     # Influence strength
    num_images=4,                  # 4 variations
)
```

---

## 4. Body & Garment Models

### MediaPipe Pose

```python
import mediapipe as mp

# Lightweight, chạy trên CPU
# 33 body landmarks → estimate body proportions
# Phù hợp cho: size recommendation, basic body shape

mp_pose = mp.solutions.pose
pose = mp_pose.Pose(
    static_image_mode=True,
    model_complexity=2,     # 0, 1, or 2
    min_detection_confidence=0.5
)
```

### SMPL-X (body model for Virtual Try-On)

```python
# SMPL-X — parametric body model
# Input: body shape parameters (β) + pose parameters (θ)
# Output: 3D mesh (10,475 vertices)

import smplx

body_model = smplx.create(
    model_path="models/smplx",
    model_type="smplx",
    gender="neutral",
    num_betas=10,        # Body shape parameters
    num_expression_coeffs=10,
)

# Generate body mesh from measurements
body_params = measurements_to_smplx_params(
    height=172, weight=70,
    chest=95, waist=80, shoulder=45
)
output = body_model(**body_params)
vertices = output.vertices  # (10475, 3)
```

---

## 5. LLM Integration

### Use Cases for LLM in Fashion AI Platform

| Use Case | Model | Latency | Cost |
|----------|-------|---------|-------|
| **Prompt enhancement** | GPT-4o / Claude | 1–3s | Low |
| **Product title/desc** | GPT-4o / Claude | 2–5s | Low |
| **Edit intent parsing** | GPT-4o-mini | <1s | Very low |
| **Style description** | Local LLM (Mistral 7B) | 1–2s | Free |
| **Content moderation** | GPT-4o-mini | <1s | Very low |

### Prompt Enhancement Pipeline

```python
ENHANCE_PROMPT = """
You are a fashion design AI assistant for a t-shirt print-on-demand platform.

Given the user's design prompt, enhance it to produce better t-shirt designs:
1. Add specific style details (art style, color palette)
2. Add print-quality keywords (high resolution, vector, clean lines)
3. Keep the core concept intact
4. Add "t-shirt design, isolated on transparent background"

User prompt: {user_prompt}
Enhanced prompt:
"""
```

---

## 6. MLOps Pipeline

### Experiment Tracking (MLflow / Weights & Biases)

```python
import mlflow

# Track mỗi lần fine-tune model
with mlflow.start_run(run_name="sdxl-fashion-lora-v2.1"):
    mlflow.log_params({
        "base_model": "stabilityai/sdxl-base-1.0",
        "lora_rank": 32,
        "learning_rate": 1e-4,
        "train_steps": 5000,
        "dataset_size": 10000,
        "resolution": 1024,
    })

    # Train
    model = train_lora(config)

    # Evaluate
    fid_score = evaluate_fid(model, test_set)
    clip_score = evaluate_clip_score(model, test_prompts)
    user_pref = run_human_eval(model, eval_set)

    mlflow.log_metrics({
        "fid_score": fid_score,
        "clip_score": clip_score,
        "user_preference_rate": user_pref,
    })

    # Register model
    mlflow.pytorch.log_model(model, "model")
```

### Model Deployment Pipeline

```yaml
# CI/CD cho AI models
# .github/workflows/model-deploy.yml

name: Deploy AI Model
on:
  workflow_dispatch:
    inputs:
      model_name:
        description: 'Model to deploy'
        required: true
      model_version:
        description: 'Version to deploy'
        required: true

jobs:
  validate:
    runs-on: gpu-runner
    steps:
      - name: Run quality checks
        run: |
          python scripts/validate_model.py \
            --model ${{ inputs.model_name }} \
            --version ${{ inputs.model_version }} \
            --min-fid 20 \
            --min-clip-score 0.25

  canary:
    needs: validate
    steps:
      - name: Deploy canary (5% traffic)
        run: |
          kubectl set image deployment/$MODEL \
            model=$IMAGE:$VERSION
          kubectl annotate deployment/$MODEL \
            traffic-split="95:current,5:canary"

  promote:
    needs: canary
    steps:
      - name: Monitor for 1 hour
        run: python scripts/monitor_canary.py --duration 3600
      - name: Promote to 100%
        run: |
          kubectl annotate deployment/$MODEL \
            traffic-split="100:new"
```

---

## 7. Development Environment Setup

### Requirements

```txt
# requirements-ai.txt
torch>=2.2.0
torchvision>=0.17.0
diffusers>=0.27.0
transformers>=4.40.0
accelerate>=0.28.0
safetensors>=0.4.0
xformers>=0.0.25
ip-adapter>=1.0.0
controlnet-aux>=0.0.8
mediapipe>=0.10.0
smplx>=0.1.28
trimesh>=4.0.0
onnxruntime-gpu>=1.17.0
mlflow>=2.12.0
wandb>=0.16.0
celery>=5.3.0
redis>=5.0.0
fastapi>=0.110.0
pillow>=10.3.0
opencv-python>=4.9.0
scikit-learn>=1.4.0
```

### Docker Setup cho AI Worker

```dockerfile
FROM nvidia/cuda:12.1.1-cudnn8-runtime-ubuntu22.04

# Python environment
RUN apt-get update && apt-get install -y python3.11 python3-pip
COPY requirements-ai.txt .
RUN pip install -r requirements-ai.txt

# Pre-download models
RUN python3 -c "
from diffusers import StableDiffusionXLPipeline
StableDiffusionXLPipeline.from_pretrained(
    'stabilityai/stable-diffusion-xl-base-1.0',
    cache_dir='/models'
)
"

COPY . /app
WORKDIR /app
CMD ["celery", "-A", "workers", "worker", "--pool=solo", "-Q", "gpu_tasks"]
```

---

## 8. Cost Estimation

### GPU Cloud Costs (reference)

| Provider | GPU | $/hour | Use case |
|----------|-----|--------|----------|
| RunPod | A100 80GB | $1.64 | Design generation |
| Lambda | A100 40GB | $1.10 | Fine-tuning |
| RunPod | A10G | $0.50 | Try-on, editing |
| RunPod | T4 | $0.20 | Tagging, upscaling |
| AWS | g5.xlarge (A10G) | $1.00 | Production serving |

### Estimate operating costs

```
1000 designs/day:
├── Design generation: 500 GPU-minutes (A100) = ~$14/day
├── Editing: 200 GPU-minutes (A100) = ~$5/day
├── Try-on rendering: 300 GPU-minutes (A10G) = ~$2.5/day
├── Tagging & upscale: 100 GPU-minutes (T4) = ~$0.3/day
├── LLM API calls: 2000 calls = ~$2/day
└── Total: ~$24/day = ~$720/month
```

---

## Summary

Tech stack for Fashion AI Platform:

| Layers | Choice | Reason |
|-------|--------|-------|
| **Image Generation** | SDXL + LoRA | Ecosystem mature, fine-tune easy |
| **Control** | ControlNet + IP-Adapter | Garment-aware placement |
| **Vision** | CLIP ViT-L/14@336 | Multi-purpose: analysis, tagging, search |
| **Body** | MediaPipe + SMPL-X | Lightweight estimation + detailed 3D |
| **LLM** | GPT-4o API + Mistral 7B local | API for production copy, local for real-time |
| **Upscale** | Real-ESRGAN | Best quality for printing |
| **MLOps** | MLflow + W&B | Experimental tracking + model registry |
| **Serving** | Triton + Celery | Multi-model serving + async |

The next article will start building the first AI module — **Text-to-Design** with Stable Diffusion fine-tuned for fashion.
