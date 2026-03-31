---
id: 019d8b31-bb07-7007-c007-ee0700000007
title: 'Bài 7: ControlNet & Image-to-Image — Kiểm soát Output'
slug: bai-7-controlnet-image-to-image
description: >-
  img2img pipeline: sử dụng reference image. ControlNet: canny edge,
  depth map, pose estimation, segmentation. IP-Adapter cho style transfer.
  Hands-on tạo ảnh có kiểm soát bố cục với ComfyUI và Diffusers.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 3: Thực hành Image Generation Nâng cao"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

Text-to-image mạnh mẽ nhưng khó kiểm soát chính xác bố cục, pose, hay style. **ControlNet** giải quyết vấn đề này: thêm spatial conditioning (canny edge, depth, pose) để kiểm soát output mà vẫn giữ creativity.

---

## 1. Image-to-Image Pipeline

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

### Strength parameter
```
strength=0.3  →  Giữ nguyên phần lớn input, chỉ enhance
strength=0.5  →  Balance giữa input và generation
strength=0.75 →  Generate nhiều, giữ composition
strength=1.0  →  Hoàn toàn mới (giống txt2img)
```

---

## 2. ControlNet — Spatial Control

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

## 3. ControlNet Types

### Canny Edge
```python
# Detect edges → preserve structure/outlines
edges = cv2.Canny(image, 100, 200)
# Use case: maintain composition, change style
```

### Depth Map
```python
from transformers import pipeline
depth_estimator = pipeline("depth-estimation", model="Intel/dpt-hybrid-midas")
depth = depth_estimator(image)["depth"]
# Use case: maintain 3D structure, change scene
```

### OpenPose (Human Pose)
```python
# Detect skeleton → control body pose
from controlnet_aux import OpenposeDetector
openpose = OpenposeDetector.from_pretrained("lllyasviel/ControlNet")
pose = openpose(image)
# Use case: maintain pose, change character appearance
```

### Segmentation Map
```python
# Semantic regions → control spatial layout
from controlnet_aux import SamDetector
sam = SamDetector.from_pretrained("ybelkada/segment-anything")
seg_map = sam(image)
# Use case: control where each element goes
```

### Scribble / Line Art
```python
# Hand-drawn sketches → detailed images
from controlnet_aux import PidiNetDetector
pidi = PidiNetDetector.from_pretrained("lllyasviel/Annotators")
scribble = pidi(image, safe=True)
```

---

## 4. Multi-ControlNet

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

## 5. IP-Adapter — Style Transfer

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

## 6. ControlNet conditioning_scale Guide

```
scale=0.0  →  Ignore control (pure text-to-image)
scale=0.3  →  Subtle guidance, high creativity
scale=0.5  →  Balanced control and creativity
scale=0.7  →  Strong control (recommended)
scale=1.0  →  Strict adherence to control image
scale=1.5+ →  Over-constrained (artifacts)
```

---

## Tổng kết

| Kỹ thuật | Input → Output |
|----------|---------------|
| img2img | Reference image → styled variation |
| ControlNet Canny | Edge lines → preserve structure |
| ControlNet Depth | Depth map → maintain 3D layout |
| ControlNet Pose | Skeleton → control body pose |
| IP-Adapter | Style image → transfer aesthetic |
| Multi-ControlNet | Multiple controls → combined |

> 📌 **Bài tiếp theo:** Inpainting, Outpainting & Image Editing với AI.
