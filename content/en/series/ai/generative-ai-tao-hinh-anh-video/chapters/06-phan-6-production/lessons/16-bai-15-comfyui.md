---
id: 019d8b31-bb15-7015-c015-ee1500000015
title: 'Lesson 15: ComfyUI Mastery — Visual Workflow for AI Art'
slug: bai-15-comfyui-mastery
description: >-
  ComfyUI setup and interface. Node-based workflow design. Custom nodes.
  Workflow templates for production. Batch processing. API mode for automation.
  Performance optimization.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: 'Part 6: Production & Practical Application'
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: 'Generative AI: Create Images & Videos with AI'
  slug: generative-ai-tao-hinh-anh-video
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8558" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8558)"/>

  <!-- Decorations -->
  <g>
    <circle cx="740" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1020" cy="90" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="70" x2="1100" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="100" x2="1050" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="941.650635094611,107.5 941.650635094611,132.5 920,145 898.349364905389,132.5 898.349364905389,107.5 920,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 15: ComfyUI Mastery — Visual Workflow</tspan>
      <tspan x="60" dy="42">for AI Art</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Generative AI: Create Images & Videos with AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Production & Practical Application</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**ComfyUI** is the node-based UI for Stable Diffusion — a visual workflow that helps build complex generation pipelines by dragging and dropping nodes. From simple txt2img to multi-ControlNet + LoRA + upscale pipelines, ComfyUI is the most important production tool.

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

| Nodes | Purpose |
|--------|--------|
| KSampler | Main denoising sampler |
| ControlNetApply | Apply ControlNet conditioning |
| LoraLoader | Load LoRA weights |
| ImageUpscaleWithModel | AI upscaling (4x) |
| VAEEncode/Decode | Latent ↔ pixels |
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

## Summary

| Features | Description |
|--------|--------|
| Node-based UI | Visual workflow design |
| API mode | Automation and batch processing |
| Custom nodes | Community extensions |
| Workflow sharing | Export/import JSON |
| Production ready | API server for integration |

> 📌 **Next article:** Generative AI API Server — platform building.
