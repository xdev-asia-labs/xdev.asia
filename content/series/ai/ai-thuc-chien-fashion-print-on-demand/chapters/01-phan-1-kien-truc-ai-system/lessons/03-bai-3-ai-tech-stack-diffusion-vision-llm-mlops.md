---
id: 019d8b30-bb03-7003-c003-f0c4e8000003
title: 'Bài 3: AI Tech Stack — Diffusion Models, Vision Models, LLM & MLOps'
slug: bai-3-ai-tech-stack-diffusion-vision-llm-mlops
description: >-
  Lựa chọn và so sánh tech stack: Stable Diffusion XL vs FLUX,
  ControlNet, CLIP, Segment Anything, body estimation models.
  Setup MLOps pipeline với MLflow, Weights & Biases.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Kiến trúc AI System & Nền tảng"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Trước khi bắt đầu code, bạn cần chọn đúng AI models và tools cho từng module. Bài này sẽ so sánh chi tiết các lựa chọn, giải thích tại sao chọn model X thay vì model Y, và setup môi trường MLOps để quản lý toàn bộ lifecycle.

---

## 1. AI Models Map — Model nào cho bài toán nào?

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

### So sánh chi tiết

| Feature | SD 1.5 | SDXL | SD3 | FLUX.1 |
|---------|--------|------|-----|--------|
| **Resolution** | 512x512 | 1024x1024 | 1024x1024 | 1024x1024+ |
| **Architecture** | UNet | UNet (larger) | MMDiT | Rectified Flow |
| **VRAM** | ~4GB | ~6.5GB | ~12GB | ~12GB |
| **Speed** | Fast | Medium | Slow | Medium |
| **Quality** | Tốt | Rất tốt | Xuất sắc | Xuất sắc |
| **Text rendering** | Kém | Trung bình | Tốt | Rất tốt |
| **Fine-tune** | Dễ, rẻ | Trung bình | Khó | Trung bình |
| **ControlNet** | Mature | Mature | Early | Growing |
| **License** | Open | Open | Gated | Mixed |

### Khuyến nghị cho Fashion AI Platform

```
Primary:   SDXL + LoRA fine-tuned cho fashion
           → Ecosystem mature, ControlNet đầy đủ, fine-tune dễ

Secondary: FLUX.1 Dev
           → Text rendering tốt hơn (quan trọng cho typography trên áo)

Fallback:  SD 1.5 + LoRA
           → Nhanh, nhẹ, dùng cho preview nhanh
```

### Tại sao SDXL cho MVP?

1. **ControlNet ecosystem** hoàn thiện — cần cho garment-aware placement
2. **IP-Adapter** stable — cần cho image reference
3. **LoRA fine-tuning** rẻ và nhanh — có thể train trên 1x A100 trong vài giờ
4. **Community models** phong phú — nhiều fashion LoRA có sẵn
5. **Diffusers library** support đầy đủ

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

| Model | Params | Image Size | Speed | Accuracy |
|-------|--------|-----------|-------|----------|
| ViT-B/32 | 151M | 224 | Nhanh | Tốt |
| ViT-L/14 | 428M | 224 | Trung bình | Rất tốt |
| ViT-L/14@336 | 428M | 336 | Chậm hơn | Xuất sắc |
| SigLIP | 878M | 384 | Chậm | State-of-art |

**Khuyến nghị**: `ViT-L/14@336` — cân bằng accuracy/speed, đủ cho style analysis và tagging.

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

### SMPL-X (body model cho Virtual Try-On)

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

### Use Cases cho LLM trong Fashion AI Platform

| Use Case | Model | Latency | Cost |
|----------|-------|---------|------|
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

### GPU Cloud Costs (tham khảo)

| Provider | GPU | $/hour | Use case |
|----------|-----|--------|----------|
| RunPod | A100 80GB | $1.64 | Design generation |
| Lambda | A100 40GB | $1.10 | Fine-tuning |
| RunPod | A10G | $0.50 | Try-on, editing |
| RunPod | T4 | $0.20 | Tagging, upscaling |
| AWS | g5.xlarge (A10G) | $1.00 | Production serving |

### Ước tính chi phí vận hành

```
1000 designs/ngày:
├── Design generation:  500 GPU-minutes (A100)  = ~$14/day
├── Editing:            200 GPU-minutes (A100)  = ~$5/day
├── Try-on rendering:   300 GPU-minutes (A10G)  = ~$2.5/day
├── Tagging & upscale:  100 GPU-minutes (T4)    = ~$0.3/day
├── LLM API calls:      2000 calls              = ~$2/day
└── Total: ~$24/day = ~$720/month
```

---

## Tổng kết

Tech stack cho Fashion AI Platform:

| Layer | Choice | Lý do |
|-------|--------|-------|
| **Image Generation** | SDXL + LoRA | Ecosystem mature, fine-tune dễ |
| **Control** | ControlNet + IP-Adapter | Garment-aware placement |
| **Vision** | CLIP ViT-L/14@336 | Multi-purpose: analysis, tagging, search |
| **Body** | MediaPipe + SMPL-X | Lightweight estimation + detailed 3D |
| **LLM** | GPT-4o API + Mistral 7B local | API cho production copy, local cho real-time |
| **Upscale** | Real-ESRGAN | Best quality for print |
| **MLOps** | MLflow + W&B | Experiment tracking + model registry |
| **Serving** | Triton + Celery | Multi-model serving + async |

Bài tiếp theo sẽ bắt đầu xây dựng module AI đầu tiên — **Text-to-Design** với Stable Diffusion fine-tuned cho fashion.
