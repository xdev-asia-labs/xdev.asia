---
id: 019d8b30-bb04-7004-c004-f0c4e8000004
title: 'Bài 4: Text-to-Design — Fine-tune Stable Diffusion cho Fashion'
slug: bai-4-text-to-design-fine-tune-stable-diffusion
description: >-
  Fine-tune SDXL/FLUX trên dataset áo thun thực tế. Huấn luyện LoRA
  chuyên biệt cho t-shirt design. DreamBooth cho brand-specific styles.
  Xử lý prompt với fashion-specific vocabulary.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 2: AI Design Generation Engine"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Đây là module AI quan trọng nhất của platform — **Text-to-Design Engine**. User chỉ cần mô tả bằng text, AI sẽ tạo ra design áo thun có thể in được. Bài này sẽ hướng dẫn fine-tune SDXL với LoRA chuyên biệt cho fashion domain.

---

## 1. Tại sao cần Fine-tune?

### SDXL Base vs Fine-tuned

| Aspect | SDXL Base | SDXL Fine-tuned cho Fashion |
|--------|-----------|---------------------------|
| Output | Ảnh nghệ thuật tổng quát | Design áo thun production-ready |
| Background | Phong cảnh, texture | Transparent / solid background |
| Style | Nhiều style | Tối ưu cho streetwear, minimal, gaming... |
| Print area | Không hiểu | Hiểu front/back/sleeve placement |
| Color | RGB tổng quát | Tối ưu cho CMYK printing |

### Vấn đề của SDXL Base khi tạo t-shirt design

```
Prompt: "cyberpunk smiley face t-shirt design"

SDXL Base output:
❌ Render cả người mặc áo (không phải chỉ design)
❌ Background phức tạp (không thể tách)
❌ Design bị cắt ở viền
❌ Không phù hợp print area

SDXL Fine-tuned output:
✅ Chỉ design, transparent background
✅ Tỷ lệ phù hợp cho front chest print
✅ Màu sắc tối ưu cho in vải
✅ Clean edges, vector-like quality
```

---

## 2. Chuẩn bị Dataset

### Nguồn dữ liệu

```
Dataset cho fine-tuning SDXL:

1. T-shirt design marketplaces
   - Scrape (có license) từ các POD platforms
   - Creative Commons designs

2. Custom generated
   - Dùng SDXL base + img2img + manual cleanup
   - Midjourney / DALL-E generated + cleanup

3. Real product photos
   - Chụp áo thun thật → extract design
   - Background removal

Target: 5,000 – 10,000 design images
```

### Data Pipeline

```python
from PIL import Image
from pathlib import Path
import json

class FashionDatasetPipeline:
    """Pipeline chuẩn bị dataset cho fine-tuning"""

    def process_image(self, img_path: str) -> dict:
        img = Image.open(img_path)

        # 1. Resize to training resolution
        img = self.resize_and_pad(img, target_size=1024)

        # 2. Background removal (transparent)
        img = self.remove_background(img)

        # 3. Center the design
        img = self.center_design(img)

        # 4. Quality check
        if not self.quality_check(img):
            return None

        return {
            "image": img,
            "metadata": self.extract_metadata(img),
        }

    def generate_caption(self, img: Image, metadata: dict) -> str:
        """Auto-generate caption cho training"""
        # Dùng CLIP + LLM để tạo caption
        clip_tags = self.clip_classify(img)
        style = self.detect_style(img)  # cyberpunk, minimal, etc.
        colors = self.extract_colors(img)

        caption = (
            f"a {style} t-shirt design, "
            f"{', '.join(clip_tags)}, "
            f"color palette: {', '.join(colors)}, "
            f"isolated on transparent background, "
            f"high resolution, print-ready"
        )
        return caption

    def create_training_dataset(
        self, input_dir: str, output_dir: str
    ):
        """Tạo dataset format cho Diffusers training"""
        metadata = []
        for img_path in Path(input_dir).glob("*.png"):
            result = self.process_image(str(img_path))
            if result is None:
                continue

            caption = self.generate_caption(
                result["image"], result["metadata"]
            )

            # Save processed image
            out_path = Path(output_dir) / img_path.name
            result["image"].save(out_path)

            metadata.append({
                "file_name": img_path.name,
                "text": caption,
            })

        # Save metadata.jsonl
        with open(Path(output_dir) / "metadata.jsonl", "w") as f:
            for item in metadata:
                f.write(json.dumps(item) + "\n")
```

---

## 3. LoRA Fine-tuning

### Cấu hình Training

```python
from diffusers import StableDiffusionXLPipeline
from peft import LoraConfig
import torch

# LoRA config cho fashion
lora_config = LoraConfig(
    r=32,                          # Rank
    lora_alpha=32,                 # Alpha
    target_modules=[
        "to_q", "to_v", "to_k", "to_out.0",  # Attention
        "proj_in", "proj_out",                 # Projections
    ],
    lora_dropout=0.05,
)

# Training arguments
training_args = {
    "pretrained_model": "stabilityai/stable-diffusion-xl-base-1.0",
    "dataset": "./dataset/tshirt_designs",
    "output_dir": "./models/sdxl-fashion-lora",

    # Training params
    "learning_rate": 1e-4,
    "train_batch_size": 4,
    "gradient_accumulation_steps": 4,
    "max_train_steps": 5000,
    "lr_scheduler": "cosine",
    "lr_warmup_steps": 500,

    # Resolution
    "resolution": 1024,
    "center_crop": True,
    "random_flip": True,

    # Optimization
    "mixed_precision": "bf16",
    "use_8bit_adam": True,
    "gradient_checkpointing": True,
    "enable_xformers": True,

    # Validation
    "validation_prompt": "minimal geometric t-shirt design, clean lines, transparent background",
    "validation_epochs": 1,
    "num_validation_images": 4,
}
```

### Training Script

```bash
# Launch training
accelerate launch train_dreambooth_lora_sdxl.py \
  --pretrained_model_name_or_path="stabilityai/stable-diffusion-xl-base-1.0" \
  --dataset_name="./dataset/tshirt_designs" \
  --output_dir="./models/sdxl-fashion-lora-v1" \
  --resolution=1024 \
  --train_batch_size=4 \
  --gradient_accumulation_steps=4 \
  --learning_rate=1e-4 \
  --lr_scheduler="cosine" \
  --lr_warmup_steps=500 \
  --max_train_steps=5000 \
  --rank=32 \
  --mixed_precision="bf16" \
  --validation_prompt="cyberpunk neon t-shirt design, transparent background" \
  --validation_epochs=1 \
  --seed=42
```

### Evaluation

```python
def evaluate_fashion_lora(model_path: str, test_prompts: list[str]):
    """Đánh giá chất lượng LoRA cho fashion"""
    pipe = StableDiffusionXLPipeline.from_pretrained(
        "stabilityai/stable-diffusion-xl-base-1.0",
        torch_dtype=torch.float16,
    )
    pipe.load_lora_weights(model_path)
    pipe.to("cuda")

    metrics = {
        "clip_score": [],        # Text-image alignment
        "aesthetic_score": [],    # Chất lượng thẩm mỹ
        "transparency_rate": [],  # % có transparent background
        "print_ready_rate": [],   # % phù hợp cho in
    }

    for prompt in test_prompts:
        images = pipe(
            prompt=prompt,
            num_images_per_prompt=4,
            num_inference_steps=30,
        ).images

        for img in images:
            metrics["clip_score"].append(
                calculate_clip_score(img, prompt)
            )
            metrics["aesthetic_score"].append(
                calculate_aesthetic_score(img)
            )
            metrics["transparency_rate"].append(
                has_transparent_background(img)
            )
            metrics["print_ready_rate"].append(
                is_print_ready(img)
            )

    return {k: sum(v) / len(v) for k, v in metrics.items()}
```

---

## 4. Inference Pipeline

### Generation Service

```python
class DesignGenerationService:
    """Service tạo design từ text prompt"""

    def __init__(self):
        self.pipe = StableDiffusionXLPipeline.from_pretrained(
            "stabilityai/stable-diffusion-xl-base-1.0",
            torch_dtype=torch.float16,
            variant="fp16",
        )
        self.pipe.load_lora_weights("models/sdxl-fashion-lora-v2.1")
        self.pipe.to("cuda")

        # Enable optimizations
        self.pipe.enable_xformers_memory_efficient_attention()

    def generate(
        self,
        prompt: str,
        negative_prompt: str | None = None,
        num_variations: int = 4,
        seed: int | None = None,
    ) -> list[Image.Image]:
        # Default negative prompt cho fashion
        if negative_prompt is None:
            negative_prompt = (
                "blurry, low quality, watermark, text overlay, "
                "person wearing shirt, full body, mannequin, "
                "wrinkled fabric, photographic background, "
                "distorted, deformed"
            )

        # Auto-enhance prompt
        enhanced_prompt = self.enhance_prompt(prompt)

        generator = torch.Generator("cuda")
        if seed:
            generator.manual_seed(seed)

        images = self.pipe(
            prompt=enhanced_prompt,
            negative_prompt=negative_prompt,
            num_images_per_prompt=num_variations,
            num_inference_steps=30,
            guidance_scale=7.5,
            generator=generator,
        ).images

        # Post-processing
        processed = []
        for img in images:
            img = self.ensure_transparent_bg(img)
            img = self.center_and_crop(img)
            img = self.upscale_for_print(img)
            processed.append(img)

        return processed

    def enhance_prompt(self, user_prompt: str) -> str:
        """Tự động cải thiện prompt cho fashion domain"""
        suffix = (
            ", t-shirt design, isolated design element, "
            "transparent background, high resolution, "
            "clean edges, vector art style, print-ready, "
            "professional quality"
        )
        return user_prompt.strip() + suffix
```

---

## 5. Bilingual Support (EN/VI)

```python
class BilingualPromptHandler:
    """Xử lý prompt tiếng Anh và tiếng Việt"""

    def __init__(self):
        # Sử dụng LLM để dịch và enhance prompt
        self.llm_client = openai.Client()

    async def process_prompt(self, prompt: str) -> str:
        # Detect language
        lang = self.detect_language(prompt)

        if lang == "vi":
            # Dịch sang tiếng Anh + enhance
            enhanced = await self.translate_and_enhance(prompt)
        else:
            enhanced = await self.enhance_english(prompt)

        return enhanced

    async def translate_and_enhance(self, vi_prompt: str) -> str:
        response = await self.llm_client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{
                "role": "system",
                "content": (
                    "Translate this Vietnamese t-shirt design prompt "
                    "to English. Keep the creative intent. "
                    "Add fashion design keywords."
                )
            }, {
                "role": "user",
                "content": vi_prompt
            }],
            temperature=0.3,
        )
        return response.choices[0].message.content
```

---

## 6. Design Variation Strategy

```python
class VariationGenerator:
    """Tạo nhiều variations từ 1 prompt"""

    def generate_variations(
        self, prompt: str, num_variations: int = 4
    ) -> list[Image.Image]:
        variations = []

        # Strategy 1: Seed variation (cùng prompt, khác seed)
        seeds = self._generate_diverse_seeds(num_variations)
        for seed in seeds:
            img = self.pipe(prompt=prompt, seed=seed)
            variations.append(img)

        return variations

    def _generate_diverse_seeds(self, n: int) -> list[int]:
        """Tạo seeds cho output đa dạng"""
        import random
        base = random.randint(0, 2**32)
        # Spread seeds để output khác nhau
        return [base + i * 1000 for i in range(n)]
```

---

## Tổng kết

Bài 4 đã cover toàn bộ pipeline **Text-to-Design**:

1. **Dataset preparation** — thu thập, xử lý, auto-caption cho fashion data
2. **LoRA fine-tuning** — train SDXL LoRA chuyên biệt cho t-shirt design
3. **Evaluation** — CLIP score, aesthetic score, print-ready rate
4. **Inference pipeline** — auto-enhance prompt, generate, post-process
5. **Bilingual support** — xử lý prompt tiếng Việt/Anh
6. **Variation strategy** — tạo 2–4 design variations đa dạng

Bài tiếp theo: **Image Reference Analysis** — phân tích ảnh reference với CLIP và IP-Adapter.
