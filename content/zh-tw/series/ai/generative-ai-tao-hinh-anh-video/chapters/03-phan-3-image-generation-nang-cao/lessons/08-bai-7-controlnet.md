---
id: 019d8b31-bb07-7007-c007-ee0700000007
title: 第 7 課：ControlNet 與影像到影像 — 控制輸出
slug: bai-7-controlnet-image-to-image
description: >-
  img2img 管道：使用參考影像。 ControlNet：canny 邊緣、深度圖、姿態估計、分割。用於風格傳輸的 IP 轉接器。使用 ComfyUI 和
  Diffusers 進行佈局控制來實際建立影像。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 第 3 部分：練習進階影像生成
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: 生成式 AI：使用 AI 創建圖像和視頻
  slug: generative-ai-tao-hinh-anh-video
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4186" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4186)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1053" cy="69" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="1006" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="959" cy="95" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="912" cy="108" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="865" cy="121" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="219" x2="1100" y2="299" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="249" x2="1050" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="948.444863728671,102 948.444863728671,136 919,153 889.555136271329,136 889.555136271329,102.00000000000001 919,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：ControlNet 與影像到影像 — 檢查</tspan>
      <tspan x="60" dy="42">輸出控制</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成式 AI：使用 AI 創建圖像和視頻</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：練習進階影像生成</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

文字到圖像功能強大，但難以精確控制佈局、姿勢或風格。 **ControlNet** 解決了這個問題：增加空間條件（精明的邊緣、深度、姿勢）來控制輸出，同時保留創造力。

---

## 1. 影像到影像管道

```python
from diffusers import StableDiffusionImg2ImgPipeline
from PIL import Image

pipe = StableDiffusionImg2ImgPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16,
)
pipe.to("cuda")

init_image = Image.open("sketch.png").resize((1024, 1024))

image = pipe(
    prompt="a detailed digital painting of a castle",
    image=init_image,
    strength=0.75,      # 0.0 = no change, 1.0 = full generation
    guidance_scale=7.5,
    num_inference_steps=30,
).images[0]
```

### 強度參數
```
strength=0.3  →  Giữ nguyên phần lớn input, chỉ enhance
strength=0.5  →  Balance giữa input và generation
strength=0.75 →  Generate nhiều, giữ composition
strength=1.0  →  Hoàn toàn mới (giống txt2img)
```

---

## 2. ControlNet — 空間控制

```python
from diffusers import StableDiffusionXLControlNetPipeline, ControlNetModel
import cv2
import numpy as np

# Load ControlNet model (canny edge)
controlnet = ControlNetModel.from_pretrained(
    "diffusers/controlnet-canny-sdxl-1.0",
    torch_dtype=torch.float16,
)

pipe = StableDiffusionXLControlNetPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    controlnet=controlnet,
    torch_dtype=torch.float16,
)
pipe.to("cuda")

# Extract canny edges from reference image
image = cv2.imread("reference.jpg")
edges = cv2.Canny(image, 100, 200)
control_image = Image.fromarray(edges)

# Generate with ControlNet
result = pipe(
    prompt="a futuristic city, cyberpunk style",
    image=control_image,
    controlnet_conditioning_scale=0.7,  # strength of control
    num_inference_steps=30,
).images[0]
```

---

## 3. ControlNet 類型

### 精明邊緣
```python
# Detect edges → preserve structure/outlines
edges = cv2.Canny(image, 100, 200)
# Use case: maintain composition, change style
```

### 深度圖
```python
from transformers import pipeline
depth_estimator = pipeline("depth-estimation", model="Intel/dpt-hybrid-midas")
depth = depth_estimator(image)["depth"]
# Use case: maintain 3D structure, change scene
```

### OpenPose（人體姿勢）
```python
# Detect skeleton → control body pose
from controlnet_aux import OpenposeDetector
openpose = OpenposeDetector.from_pretrained("lllyasviel/ControlNet")
pose = openpose(image)
# Use case: maintain pose, change character appearance
```

### 分割圖
```python
# Semantic regions → control spatial layout
from controlnet_aux import SamDetector
sam = SamDetector.from_pretrained("ybelkada/segment-anything")
seg_map = sam(image)
# Use case: control where each element goes
```

### 塗鴉/線條藝術
```python
# Hand-drawn sketches → detailed images
from controlnet_aux import PidiNetDetector
pidi = PidiNetDetector.from_pretrained("lllyasviel/Annotators")
scribble = pidi(image, safe=True)
```

---

## 4. 多重控制網絡

```python
from diffusers import StableDiffusionXLControlNetPipeline, ControlNetModel

# Combine multiple controlnets
controlnets = [
    ControlNetModel.from_pretrained("controlnet-canny-sdxl-1.0"),
    ControlNetModel.from_pretrained("controlnet-depth-sdxl-1.0"),
]

pipe = StableDiffusionXLControlNetPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    controlnet=controlnets,
    torch_dtype=torch.float16,
)

result = pipe(
    prompt="...",
    image=[canny_image, depth_image],
    controlnet_conditioning_scale=[0.7, 0.5],  # per-controlnet weight
).images[0]
```

---

## 5. IP 適配器 — 風格傳輸

```python
from diffusers import StableDiffusionXLPipeline
from diffusers.utils import load_image

pipe = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16,
)
pipe.load_ip_adapter(
    "h94/IP-Adapter",
    subfolder="sdxl_models",
    weight_name="ip-adapter_sdxl.bin"
)

# Style image determines the aesthetic
style_image = load_image("style_reference.jpg")

pipe.set_ip_adapter_scale(0.6)  # strength of style transfer

result = pipe(
    prompt="a cat sitting on a windowsill",
    ip_adapter_image=style_image,
    num_inference_steps=30,
).images[0]
```

---

## 6. ControlNet Conditioning_scale 指南

```
scale=0.0  →  Ignore control (pure text-to-image)
scale=0.3  →  Subtle guidance, high creativity
scale=0.5  →  Balanced control and creativity
scale=0.7  →  Strong control (recommended)
scale=1.0  →  Strict adherence to control image
scale=1.5+ →  Over-constrained (artifacts)
```

---

## 總結

|工程|輸入→輸出|
|----------|--------------|
|圖像2圖像|參考圖片→風格變化|
| ControlNet 精明 |邊緣線→保留結構|
|控制網路深度 |深度圖 → 保持 3D 佈局 |
| ControlNet 姿勢 |骨骼→控制身體姿勢|
| IP 適配器 |風格形象→傳遞美感|
|多重控制網路 |多控制 → 組合 |

> 📌 **下一篇文章：** 使用 AI 進行修復、修復和圖像編輯。
