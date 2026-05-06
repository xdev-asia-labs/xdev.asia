---
id: 019d8b31-bb09-7009-c009-ee0900000009
title: 'レッスン 9: LoRA とカスタム モデルのトレーニング — 独自のスタイルの作成'
slug: bai-9-lora-custom-model-training
description: >-
  LoRA による安定拡散の微調整: 概念、計算、実装。 DreamBooth: パーソナライズされた世代。テキストの反転。トレーニング
  データセットの準備とベスト プラクティス。 LoRA モデルをマージします。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 3: 高度な画像生成の実践'
course:
  id: 019d8b31-aa01-7001-b001-ff0200000001
  title: '生成 AI: AI を使用して画像とビデオを作成する'
  slug: generative-ai-tao-hinh-anh-video
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9474" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9474)"/>

  <!-- Decorations -->
  <g>
    <circle cx="638" cy="264" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="676" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="714" cy="160" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="752" cy="238" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="56" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="124" x2="1100" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="154" x2="1050" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="957.7749907475932,104.5 957.7749907475932,143.5 924,163 890.2250092524068,143.5 890.2250092524068,104.50000000000001 924,85" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI と ML — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: LoRA とカスタム モデル トレーニング — 作成</tspan>
      <tspan x="60" dy="42">パーソナルスタイル</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">生成 AI: AI を使用して画像とビデオを作成する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 高度な画像生成の実践</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

事前トレーニングされた安定拡散は優れた画像を作成しますが、**ユニークなスタイル** や **特定のコンセプト** (ブランド、キャラクター、製品) が欠けています。 **LoRA (低ランク適応)** では、コンシューマ GPU でトレーニングされたわずか 10 ～ 20 枚の画像を使用してモデルを微調整でき、出力ファイルはわずか 10 ～ 100 MB です。

---

## 1. LoRA — 低ランクの適応

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

B と A のみをトレーニング → パラメーターが $d^2$ から $2dr$ に減少しました (99% 以上減少)。

---

## 2. データセットの準備

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

### 自動キャプション

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

## 3. ディフューザーを使用した LoRA のトレーニング

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

### トレーニングパラメータガイド

|パラメータ |おすすめ |メモ |
|----------|---------------|----------|
|ランク | 8-32 |高い = より多くの容量、より多くの VRAM |
|学習率 | 1e-5 から 1e-4 |低く開始し、適合が不十分な場合は増加します |
|最大トレインステップ数 | 500-2000 |より多くのデータ → より多くのステップ |
|解像度 | 1024 |基本モデルの解像度を一致させる |
|トレイン_バッチ_サイズ | 1-4 | VRAM に依存 |

---

## 4. DreamBooth — パーソナライズされた生成

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

## 5. テキストの反転

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

## 6. LoRA をロードして使用する

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

## 7. 複数の LoRA をマージする

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

## 8. ベストプラクティス

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

## 概要

|方法 |パラメータ |ファイルサイズ |品質 |必要なデータ |
|----------|-----------|---------------|----------|-------------|
|フル微調整 | ～1B | ～6GB |ベスト | 1000 枚以上の画像 |
|ロラ | ~1-50M | 10～100MB |すばらしい |画像 10 ～ 30 枚 |
|ドリームブース | ～1B | ～6GB |すばらしい |画像5～30枚 |
|ドリームブース+LoRA | ~1-50M | 10～100MB |すばらしい |画像5～30枚 |
|テキストの反転 | 1トークン | ～4KB |良い |画像 3 ～ 10 枚 |

> 📌 **次の記事:** DALL-E 3 API — OpenAI Image Generation をアプリケーションに統合します。
