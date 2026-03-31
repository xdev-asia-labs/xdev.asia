---
id: 019d8b31-bb09-7009-c009-ee0900000009
title: 'Bài 9: LoRA & Custom Model Training — Tạo Style Riêng'
slug: bai-9-lora-custom-model-training
description: >-
  Fine-tuning Stable Diffusion với LoRA: concept, math, implementation.
  DreamBooth: personalized generation. Textual Inversion. Training
  dataset preparation và best practices. Merge LoRA models.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: Thực hành Image Generation Nâng cao"
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: "Generative AI: Tạo Hình ảnh & Video với AI"
  slug: generative-ai-tao-hinh-anh-video
---

## Giới thiệu

Pre-trained Stable Diffusion tạo ảnh tốt nhưng thiếu **style riêng** hoặc **concept cụ thể** (brand, nhân vật, sản phẩm). **LoRA (Low-Rank Adaptation)** cho phép fine-tune model chỉ với 10-20 ảnh, train trên consumer GPU, file output chỉ 10-100MB.

---

## 1. LoRA — Low-Rank Adaptation

```
Full fine-tuning: update ALL parameters (hàng tỷ) → đắt, cần nhiều data
LoRA: chỉ thêm low-rank matrices nhỏ → rẻ, ít data, kết quả tốt

Toán: W' = W + ΔW = W + BA
- W: original weight matrix (frozen)
- B: low-rank matrix (r × d), trainable
- A: low-rank matrix (d × r), trainable
- r << d (rank 4-128, thường 8-32)
```

$$W' = W + \alpha \cdot BA$$

Chỉ train B và A → parameters giảm từ $d^2$ xuống $2dr$ (reducing 99%+).

---

## 2. Dataset Preparation

```
Yêu cầu:
- 10-30 ảnh high quality cho subject/style
- Consistent quality và resolution
- Đa dạng góc, lighting, background (cho subject)
- Uniform style (cho style LoRA)

Cấu trúc folder:
dataset/
├── image_001.png    # 768x768 hoặc 1024x1024
├── image_001.txt    # caption: "a photo of sks person, smiling"
├── image_002.png
├── image_002.txt    # caption: "a photo of sks person, side view"
└── ...
```

### Auto-captioning

```python
from transformers import BlipForConditionalGeneration, BlipProcessor

processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-large")
model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-large")

def caption_image(image_path, trigger_word="sks"):
    image = Image.open(image_path)
    inputs = processor(image, return_tensors="pt")
    output = model.generate(**inputs, max_length=50)
    caption = processor.decode(output[0], skip_special_tokens=True)
    # Prepend trigger word
    return f"a photo of {trigger_word}, {caption}"
```

---

## 3. Training LoRA với Diffusers

```bash
# Install training dependencies
pip install peft accelerate bitsandbytes

# Training script
accelerate launch train_dreambooth_lora_sdxl.py \
  --pretrained_model_name_or_path="stabilityai/stable-diffusion-xl-base-1.0" \
  --instance_data_dir="./dataset" \
  --instance_prompt="a photo of sks dog" \
  --output_dir="./lora_output" \
  --resolution=1024 \
  --train_batch_size=1 \
  --gradient_accumulation_steps=4 \
  --learning_rate=1e-4 \
  --lr_scheduler="cosine" \
  --lr_warmup_steps=100 \
  --max_train_steps=1000 \
  --rank=32 \
  --mixed_precision="fp16" \
  --seed=42
```

### Training Parameters Guide

| Parameter | Recommended | Notes |
|-----------|-------------|-------|
| rank | 8-32 | Higher = more capacity, more VRAM |
| learning_rate | 1e-5 to 1e-4 | Start low, increase if underfitting |
| max_train_steps | 500-2000 | More data → more steps |
| resolution | 1024 | Match base model resolution |
| train_batch_size | 1-4 | Depends on VRAM |

---

## 4. DreamBooth — Personalized Generation

```python
# DreamBooth concept: fine-tune the model to learn a specific subject
# Uses a rare trigger word (e.g., "sks") to represent the concept

# Training data:
# - 5-30 images of YOUR specific subject
# - Caption: "a photo of sks [class]" (e.g., "a photo of sks dog")

# Class images (regularization):
# - Generated images of the general class
# - Prevents model from forgetting the class concept
# - "a photo of dog" (without sks)
```

```bash
# DreamBooth + LoRA training
accelerate launch train_dreambooth_lora_sdxl.py \
  --instance_data_dir="./my_dog_photos" \
  --instance_prompt="a photo of sks dog" \
  --class_data_dir="./dog_class_images" \
  --class_prompt="a photo of dog" \
  --num_class_images=200 \
  --with_prior_preservation \
  --prior_loss_weight=1.0 \
  --max_train_steps=800
```

---

## 5. Textual Inversion

```python
# Concept: Học một embedding vector mới cho concept
# Không thay đổi model weights → chỉ thêm 1 token

# Train: 3-10 images → learn embedding cho <my-concept>
# Use: "a painting in the style of <my-concept>"

# Ưu điểm: rất nhỏ (vài KB), không ảnh hưởng model
# Nhược điểm: ít expressive hơn LoRA

from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
pipe.load_textual_inversion("path/to/embedding.safetensors", token="<my-style>")

image = pipe("a landscape in the style of <my-style>").images[0]
```

---

## 6. Load & Use LoRA

```python
from diffusers import StableDiffusionXLPipeline
import torch

pipe = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16,
)
pipe.to("cuda")

# Load LoRA weights
pipe.load_lora_weights("./lora_output", weight_name="pytorch_lora_weights.safetensors")

# Adjust LoRA strength
pipe.fuse_lora(lora_scale=0.8)  # 0.0-1.0

# Generate with LoRA
image = pipe(
    prompt="a photo of sks dog wearing a crown, royal portrait",
    num_inference_steps=30,
    guidance_scale=7.5,
).images[0]

# Unload LoRA
pipe.unfuse_lora()
pipe.unload_lora_weights()
```

---

## 7. Merge Multiple LoRAs

```python
# Combine style LoRA + character LoRA
pipe.load_lora_weights("style_lora.safetensors", adapter_name="style")
pipe.load_lora_weights("character_lora.safetensors", adapter_name="character")

pipe.set_adapters(["style", "character"], adapter_weights=[0.7, 0.9])

image = pipe(
    prompt="sks person in anime style, bright colors",
    num_inference_steps=30,
).images[0]
```

---

## 8. Best Practices

```
Dataset:
✅ High quality, consistent resolution
✅ Variety in poses/angles (cho subject)
✅ Clear, noise-free images
✅ Good captions with trigger word
❌ Blurry, low-res images
❌ Watermarked images
❌ Too few images (< 5)

Training:
✅ Start with low learning rate
✅ Use cosine scheduler
✅ Save checkpoints frequently
✅ Compare different ranks (8, 16, 32)
✅ Train 500-1500 steps cho LoRA
❌ Overtrain (> 3000 steps usually)
❌ Too high rank (> 64) without enough data
```

---

## Tổng kết

| Method | Parameters | File size | Quality | Data needed |
|--------|-----------|-----------|---------|-------------|
| Full fine-tune | ~1B | ~6GB | Best | 1000+ images |
| LoRA | ~1-50M | 10-100MB | Great | 10-30 images |
| DreamBooth | ~1B | ~6GB | Great | 5-30 images |
| DreamBooth+LoRA | ~1-50M | 10-100MB | Great | 5-30 images |
| Textual Inversion | 1 token | ~4KB | Good | 3-10 images |

> 📌 **Bài tiếp theo:** DALL-E 3 API — tích hợp OpenAI Image Generation vào application.
