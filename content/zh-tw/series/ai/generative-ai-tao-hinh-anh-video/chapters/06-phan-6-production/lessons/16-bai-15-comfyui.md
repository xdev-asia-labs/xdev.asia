---
id: 019d8b31-bb15-7015-c015-ee1500000015
title: 第 15 課：ComfyUI 掌握 — AI 藝術的視覺工作流程
slug: bai-15-comfyui-mastery
description: ComfyUI 設定和介面。基於節點的工作流程設計。自訂節點。用於生產的工作流程範本。批次處理。用於自動化的 API 模式。性能優化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: 第六部分：生產與實際應用
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: 生成式 AI：使用 AI 創建圖像和視頻
  slug: generative-ai-tao-hinh-anh-video
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：ComfyUI 掌握 — 視覺化工作流程</tspan>
      <tspan x="60" dy="42">人工智慧藝術</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成式 AI：使用 AI 創建圖像和視頻</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第六部分：生產與實際應用</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**ComfyUI** 是用於穩定擴散的基於節點的 UI - 一種可視化工作流程，可透過拖放節點幫助建立複雜的生成管道。從簡單的txt2img到多ControlNet + LoRA +高級管道，ComfyUI是最重要的製作工具。

---

## 1. 設定 ComfyUI

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

### 目錄結構
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

## 2. 基本工作流程－文字轉圖像

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

## 3. 進階工作流程 — ControlNet + LoRA

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

### 關鍵節點

|節點|目的|
|--------|--------|
| KS 取樣器 |主降噪取樣器 |
| ControlNet應用程式 |應用 ControlNet 調節 |
|洛拉裝載機 |載入 LoRA 權重 |
|影像升級與模型 | AI 升級 (4x) |
| VAE 編碼/解碼 |潛在 ↔ 像素 |
|影像比例|調整影像大小 |
| FaceRestoreWithModel | 臉部恢復修復/增強臉部 |

---

## 4.ComfyUI API模式

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

## 5. 批次處理

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

## 6. 自訂節點

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

## 7. 效能優化

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

## 總結

|特點|描述 |
|--------|--------|
|基於節點的使用者介面 |視覺化工作流程設計|
| API模式 |自動化和批次|
|自訂節點 |社群擴展 |
|工作流程共享|匯出/匯入 JSON |
|生產就緒 |用於整合的 API 伺服器 |

> 📌 **下一篇：** 生成式 AI API 伺服器 - 平台建置。
