---
id: 019d8b31-bb15-7015-c015-ee1500000015
title: 'Bài 15: ComfyUI Mastery — Visual Workflow cho AI Art'
slug: bai-15-comfyui-mastery
description: >-
  ComfyUI setup và interface. Node-based workflow design. Custom nodes.
  Workflow templates cho production. Batch processing. API mode
  cho automation. Performance optimization.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 6: Production & Ứng dụng Thực tế"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

**ComfyUI** là node-based UI cho Stable Diffusion — visual workflow giúp xây dựng complex generation pipelines bằng cách kéo thả nodes. Từ simple txt2img đến multi-ControlNet + LoRA + upscale pipelines, ComfyUI là tool production quan trọng nhất.

---

## 1. Setup ComfyUI

```bash
# Clone repository
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI

# Install dependencies
pip install -r requirements.txt

# Download models
# Place in ComfyUI/models/checkpoints/
# SDXL: stabilityai/stable-diffusion-xl-base-1.0

# Start server
python main.py --listen 0.0.0.0 --port 8188

# Access at http://localhost:8188
```

### Directory Structure
```
ComfyUI/
├── models/
│   ├── checkpoints/     # Base models (.safetensors)
│   ├── loras/           # LoRA weights
│   ├── controlnet/      # ControlNet models
│   ├── vae/             # VAE models
│   ├── upscale_models/  # Upscalers
│   └── embeddings/      # Textual inversions
├── custom_nodes/        # Community extensions
├── input/               # Input images
└── output/              # Generated images
```

---

## 2. Basic Workflow — Text-to-Image

```json
{
  "nodes": [
    {"type": "CheckpointLoaderSimple", "model": "sdxl_base.safetensors"},
    {"type": "CLIPTextEncode", "text": "a cat in space, digital art"},
    {"type": "CLIPTextEncode", "text": "blurry, low quality"},
    {"type": "EmptyLatentImage", "width": 1024, "height": 1024},
    {"type": "KSampler", "steps": 30, "cfg": 7.5, "scheduler": "euler"},
    {"type": "VAEDecode"},
    {"type": "SaveImage", "filename_prefix": "output"}
  ]
}
```

```
Node flow:
CheckpointLoader → MODEL, CLIP, VAE
                      ↓
CLIPTextEncode (positive) ─┐
CLIPTextEncode (negative) ─┤
EmptyLatentImage ──────────┤
                           ↓
                      KSampler → LATENT
                           ↓
                      VAEDecode → IMAGE
                           ↓
                      SaveImage
```

---

## 3. Advanced Workflow — ControlNet + LoRA

```
Workflow:
1. Load base model
2. Load LoRA → merge with model
3. Load ControlNet model
4. Preprocess input (Canny/Depth/Pose)
5. Apply ControlNet conditioning
6. Sample with both text + control
7. Upscale result
8. Save
```

### Key Nodes

| Node | Purpose |
|------|---------|
| KSampler | Main denoising sampler |
| ControlNetApply | Apply ControlNet conditioning |
| LoraLoader | Load LoRA weights |
| ImageUpscaleWithModel | AI upscaling (4x) |
| VAEEncode/Decode | Latent ↔ pixel |
| ImageScale | Resize image |
| FaceRestoreWithModel | Fix/enhance faces |

---

## 4. ComfyUI API Mode

```python
import json
import requests
import io
from PIL import Image

COMFYUI_URL = "http://localhost:8188"

def queue_prompt(workflow):
    """Submit workflow to ComfyUI"""
    response = requests.post(
        f"{COMFYUI_URL}/prompt",
        json={"prompt": workflow}
    )
    return response.json()["prompt_id"]

def get_image(prompt_id):
    """Wait and retrieve generated image"""
    import time
    while True:
        response = requests.get(f"{COMFYUI_URL}/history/{prompt_id}")
        history = response.json()
        if prompt_id in history:
            outputs = history[prompt_id]["outputs"]
            for node_id, output in outputs.items():
                if "images" in output:
                    image_data = output["images"][0]
                    img_response = requests.get(
                        f"{COMFYUI_URL}/view",
                        params=image_data
                    )
                    return Image.open(io.BytesIO(img_response.content))
        time.sleep(1)

# Load workflow from file
with open("my_workflow_api.json") as f:
    workflow = json.load(f)

# Modify prompt dynamically
workflow["6"]["inputs"]["text"] = "a dragon flying over mountains"

# Generate
prompt_id = queue_prompt(workflow)
image = get_image(prompt_id)
image.save("result.png")
```

---

## 5. Batch Processing

```python
import json

def batch_generate(workflow_path, prompts, output_dir):
    """Generate images for multiple prompts"""
    with open(workflow_path) as f:
        base_workflow = json.load(f)

    for i, prompt in enumerate(prompts):
        workflow = json.loads(json.dumps(base_workflow))
        workflow["6"]["inputs"]["text"] = prompt
        workflow["9"]["inputs"]["filename_prefix"] = f"batch_{i:04d}"

        prompt_id = queue_prompt(workflow)
        image = get_image(prompt_id)
        image.save(f"{output_dir}/batch_{i:04d}.png")
        print(f"✓ [{i+1}/{len(prompts)}] {prompt[:50]}...")

# Usage
prompts = [
    "a sunset over mountains, photography",
    "a futuristic city at night, cyberpunk",
    "a peaceful garden, watercolor painting",
]
batch_generate("workflow_api.json", prompts, "output/")
```

---

## 6. Custom Nodes

```
Popular custom node packs:
- ComfyUI-Manager: install/manage other custom nodes
- comfyui-reactor: face swap
- ComfyUI-Impact-Pack: detailer, face fixes
- ComfyUI-AnimateDiff: animation workflows
- comfyui-tooling-nodes: utility nodes
- ComfyUI-KJNodes: quality-of-life nodes

Install:
cd ComfyUI/custom_nodes
git clone https://github.com/author/custom-node-pack
pip install -r custom-node-pack/requirements.txt
# Restart ComfyUI
```

---

## 7. Performance Optimization

```
Memory optimization:
- Use --lowvram or --medvram flags
- Enable tiling for large images
- Use FP16 models
- Clear VRAM between batches

Speed optimization:
- Use fast schedulers (DPM++ 2M, Euler)
- Reduce steps (20-25 usually sufficient)
- Batch in latent space
- Use SDXL Turbo for real-time (4 steps)

Quality optimization:
- 2-pass workflow: base → refiner
- Hi-res fix: generate small → upscale → img2img
- Face restore: GFPGAN, CodeFormer
- 4x upscale: RealESRGAN, SwinIR
```

---

## Tổng kết

| Feature | Mô tả |
|---------|--------|
| Node-based UI | Visual workflow design |
| API mode | Automation và batch processing |
| Custom nodes | Community extensions |
| Workflow sharing | Export/import JSON |
| Production ready | API server cho integration |

> 📌 **Bài tiếp theo:** Generative AI API Server — xây dựng platform.
