---
id: 019d8b31-bb08-7008-c008-ee0800000008
title: 'レッスン 8: AI を使用したインペインティング、アウトペインティング、画像編集'
slug: bai-8-inpainting-outpainting
description: >-
  修復: 画像内の特定の領域を編集します。アウトペイント: 画像を外側に拡張します。命令ベースの編集: InstructPix2Pix。背景の削除と置き換え。
  Stable Diffusion 修復パイプラインを実際に使用します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 3: 高度な画像生成の実践'
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: '生成 AI: AI を使用して画像とビデオを作成する'
  slug: generative-ai-tao-hinh-anh-video
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1305" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1305)"/>

  <!-- Decorations -->
  <g>
    <circle cx="610" cy="180" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="630" cy="280" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="120" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="80" x2="1100" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="110" x2="1050" y2="180" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="960.3108891324554,112.5 960.3108891324554,147.5 930,165 899.6891108675446,147.5 899.6891108675446,112.50000000000001 930,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: インペインティング、アウトペインティング、イメージ</tspan>
      <tspan x="60" dy="42">AIによる編集</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成 AI: AI を使用して画像とビデオを作成する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 高度な画像生成の実践</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**修復** を使用すると、AI を使用して写真の特定の領域を編集できます。オブジェクトの変更、透かしの削除、または新しい詳細の追加が可能です。 **アウトペイント** は、元のフレームを超えて画像を拡大します。これは、AI を活用した画像編集の基盤です。

---

## 1. パイプラインの修復

```python
from diffusers import StableDiffusionXLInpaintPipeline
from PIL import Image
import torch

pipe = StableDiffusionXLInpaintPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16,
)
pipe.to("cuda")

# Original image + mask (white = area to edit)
image = Image.open("photo.png").resize((1024, 1024))
mask = Image.open("mask.png").resize((1024, 1024))

result = pipe(
    prompt="a golden retriever puppy",
    image=image,
    mask_image=mask,
    num_inference_steps=30,
    guidance_scale=7.5,
    strength=0.99,  # how much to change masked area
).images[0]
```

### プログラムでマスクを作成する

```python
from PIL import Image, ImageDraw
import numpy as np

# Mask thủ công: rectangle vùng cần edit
mask = Image.new("L", (1024, 1024), 0)  # black = keep
draw = ImageDraw.Draw(mask)
draw.rectangle([300, 200, 700, 600], fill=255)  # white = edit

# Mask từ segmentation (SAM)
from segment_anything import SamPredictor, sam_model_registry

sam = sam_model_registry["vit_h"](checkpoint="sam_vit_h.pth")
predictor = SamPredictor(sam)
predictor.set_image(np.array(image))
masks, _, _ = predictor.predict(point_coords=np.array([[500, 400]]),
                                  point_labels=np.array([1]))
mask = Image.fromarray(masks[0].astype(np.uint8) * 255)
```

---

## 2. アウトペイント — 画像を拡大する

```python
def outpaint(pipe, image, direction="right", extend_px=512):
    """Mở rộng ảnh bằng inpainting"""
    w, h = image.size

    if direction == "right":
        canvas = Image.new("RGB", (w + extend_px, h), (0, 0, 0))
        canvas.paste(image, (0, 0))
        mask = Image.new("L", (w + extend_px, h), 0)
        draw = ImageDraw.Draw(mask)
        draw.rectangle([w - 50, 0, w + extend_px, h], fill=255)  # overlap 50px
    elif direction == "down":
        canvas = Image.new("RGB", (w, h + extend_px), (0, 0, 0))
        canvas.paste(image, (0, 0))
        mask = Image.new("L", (w, h + extend_px), 0)
        draw = ImageDraw.Draw(mask)
        draw.rectangle([0, h - 50, w, h + extend_px], fill=255)

    result = pipe(
        prompt="continue the scene naturally",
        image=canvas,
        mask_image=mask,
        num_inference_steps=30,
    ).images[0]

    return result
```

---

## 3. InstructPix2Pix — コマンドによる編集

```python
from diffusers import StableDiffusionInstructPix2PixPipeline

pipe = StableDiffusionInstructPix2PixPipeline.from_pretrained(
    "timbrooks/instruct-pix2pix",
    torch_dtype=torch.float16,
)
pipe.to("cuda")

image = Image.open("photo.jpg")

# Chỉnh sửa bằng text instruction
edited = pipe(
    prompt="make it a winter scene with snow",
    image=image,
    image_guidance_scale=1.5,  # how close to original
    guidance_scale=7.0,
    num_inference_steps=20,
).images[0]

# Ví dụ khác
# "turn the cat into a tiger"
# "make it sunset lighting"
# "add flowers to the garden"
# "change the shirt color to blue"
```

---

## 4. 背景の削除と置換

```python
from rembg import remove
from PIL import Image

# Remove background
input_img = Image.open("person.jpg")
output = remove(input_img)  # transparent background
output.save("person_nobg.png")

# Replace background with AI
def replace_background(person_img, bg_prompt, pipe):
    # 1. Remove background
    fg = remove(person_img)

    # 2. Generate new background
    bg = pipe(
        prompt=bg_prompt,
        num_inference_steps=25,
        width=person_img.width,
        height=person_img.height,
    ).images[0]

    # 3. Composite
    bg.paste(fg, (0, 0), fg)  # paste with alpha mask
    return bg

result = replace_background(
    Image.open("person.jpg"),
    "a tropical beach at sunset, palm trees",
    pipe
)
```

---

## 5. オブジェクトの削除

```python
from diffusers import StableDiffusionXLInpaintPipeline
from segment_anything import SamPredictor

# 1. Select object to remove (click point)
predictor.set_image(np.array(image))
masks, _, _ = predictor.predict(
    point_coords=np.array([[x, y]]),  # click on object
    point_labels=np.array([1])
)

# 2. Dilate mask slightly
import cv2
kernel = np.ones((15, 15), np.uint8)
dilated = cv2.dilate(masks[0].astype(np.uint8), kernel) * 255
mask = Image.fromarray(dilated)

# 3. Inpaint to remove
result = pipe(
    prompt="empty background, natural scenery",
    image=image,
    mask_image=mask,
    num_inference_steps=30,
).images[0]
```

---

## 6. 画像のバッチ編集

```python
import os
from pathlib import Path

def batch_edit(input_dir, output_dir, pipe, edit_prompt):
    """Batch edit images with InstructPix2Pix"""
    Path(output_dir).mkdir(exist_ok=True)

    for img_file in Path(input_dir).glob("*.{jpg,png}"):
        image = Image.open(img_file).resize((512, 512))
        edited = pipe(
            prompt=edit_prompt,
            image=image,
            num_inference_steps=20,
        ).images[0]
        edited.save(Path(output_dir) / img_file.name)
        print(f"✓ {img_file.name}")

batch_edit("photos/", "edited/", pipe, "make it a pencil sketch")
```

---

## 概要

|エンジニアリング |説明 |使用例 |
|----------|----------|----------|
|修復 |マスク領域を編集 |オブジェクトの置換 |
|上塗り |写真を拡大 |構成を拡張する |
|指示Pix2Pix |テキストで編集 |スタイルの変更 |
|背景の除去 |前景を分割 |製品写真 |
|オブジェクトの削除 |オブジェクトの削除 |画像をクリーンアップする |

> 📌 **次の記事:** LoRA とカスタム モデル トレーニング — 独自のスタイルを作成します。
