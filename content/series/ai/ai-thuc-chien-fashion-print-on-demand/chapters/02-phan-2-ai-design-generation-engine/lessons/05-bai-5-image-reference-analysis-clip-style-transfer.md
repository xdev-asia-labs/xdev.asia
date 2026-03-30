---
id: 019d8b30-bb05-7005-c005-f0c4e8000005
title: 'Bài 5: Image Reference Analysis — CLIP, Style Transfer & Layout Detection'
slug: bai-5-image-reference-analysis-clip-style-transfer
description: >-
  Phân tích ảnh reference với CLIP embeddings: trích xuất style,
  color palette, bố cục. IP-Adapter cho style-consistent generation.
  Layout detection xác định vùng design trên áo.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: AI Design Generation Engine"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Không phải lúc nào user cũng biết diễn tả design bằng text. Nhiều khi họ có sẵn ảnh tham khảo — một artwork, logo, meme, hoặc ảnh áo thun khác — và muốn AI tạo design mới **lấy cảm hứng** từ đó. Bài này xây dựng module **Image Reference Analysis**.

---

## 1. Use Cases cho Image Reference

```
User uploads:
├── Ảnh áo thun → AI trích xuất style & tạo design tương tự
├── Logo/artwork → AI adapt thành t-shirt design
├── Meme → AI tạo meme-style design
├── Illustration → AI generate design cùng art style
└── Mood board → AI phân tích aesthetic tổng thể
```

### Pipeline tổng quát

```
Reference Image
    │
    ├── CLIP encode → Style embedding
    │
    ├── Color extraction → Dominant colors
    │
    ├── Layout detection → Bố cục (center, offset, full-print)
    │
    └── Style classification → Cyberpunk / Minimal / Vintage / Gaming
            │
            ▼
    IP-Adapter + ControlNet → New design variations
```

---

## 2. CLIP Embedding cho Style Analysis

```python
import torch
from transformers import CLIPModel, CLIPProcessor
from PIL import Image

class StyleAnalyzer:
    """Phân tích style từ reference image dùng CLIP"""

    def __init__(self):
        self.model = CLIPModel.from_pretrained(
            "openai/clip-vit-large-patch14-336"
        )
        self.processor = CLIPProcessor.from_pretrained(
            "openai/clip-vit-large-patch14-336"
        )
        self.model.eval()

    def get_image_embedding(self, image: Image.Image) -> torch.Tensor:
        """Trích xuất CLIP embedding từ image"""
        inputs = self.processor(images=image, return_tensors="pt")
        with torch.no_grad():
            embedding = self.model.get_image_features(**inputs)
        return embedding / embedding.norm(dim=-1, keepdim=True)

    def classify_style(self, image: Image.Image) -> dict:
        """Zero-shot classification style"""
        style_labels = [
            "cyberpunk neon design",
            "minimalist clean design",
            "vintage retro design",
            "gaming esports design",
            "streetwear urban design",
            "japanese typography design",
            "graffiti art design",
            "nature botanical design",
            "abstract geometric design",
            "pop art colorful design",
            "gothic dark design",
            "kawaii cute design",
        ]

        inputs = self.processor(
            text=style_labels,
            images=image,
            return_tensors="pt",
            padding=True,
        )

        with torch.no_grad():
            outputs = self.model(**inputs)
            logits = outputs.logits_per_image
            probs = logits.softmax(dim=1)

        results = {}
        for label, prob in zip(style_labels, probs[0]):
            style_name = label.replace(" design", "")
            results[style_name] = round(prob.item(), 3)

        # Sort by probability
        return dict(sorted(
            results.items(), key=lambda x: x[1], reverse=True
        ))

    def compute_similarity(
        self, img1: Image.Image, img2: Image.Image
    ) -> float:
        """Tính độ tương đồng giữa 2 designs"""
        emb1 = self.get_image_embedding(img1)
        emb2 = self.get_image_embedding(img2)
        similarity = torch.cosine_similarity(emb1, emb2)
        return similarity.item()
```

---

## 3. Color Palette Extraction

```python
from sklearn.cluster import KMeans
import numpy as np
from PIL import Image
from colorsys import rgb_to_hsv

class ColorExtractor:
    """Trích xuất color palette từ reference image"""

    def extract_palette(
        self, image: Image.Image, n_colors: int = 5
    ) -> list[dict]:
        # Convert to RGB array
        img_array = np.array(image.convert("RGB"))

        # Remove transparent pixels if RGBA
        if image.mode == "RGBA":
            alpha = np.array(image)[:, :, 3]
            mask = alpha > 128
            pixels = img_array[mask]
        else:
            pixels = img_array.reshape(-1, 3)

        # K-means clustering
        kmeans = KMeans(n_clusters=n_colors, n_init=10, random_state=42)
        kmeans.fit(pixels)

        # Sort by cluster size (dominant first)
        colors = []
        labels, counts = np.unique(kmeans.labels_, return_counts=True)
        sorted_indices = np.argsort(-counts)

        for idx in sorted_indices:
            rgb = kmeans.cluster_centers_[idx].astype(int)
            hex_color = "#{:02x}{:02x}{:02x}".format(*rgb)
            percentage = counts[idx] / len(pixels) * 100

            colors.append({
                "rgb": tuple(rgb),
                "hex": hex_color,
                "percentage": round(percentage, 1),
                "cmyk": self.rgb_to_cmyk(*rgb),
                "name": self.closest_color_name(rgb),
            })

        return colors

    def rgb_to_cmyk(self, r: int, g: int, b: int) -> tuple:
        """Convert RGB to CMYK cho print preview"""
        r, g, b = r / 255, g / 255, b / 255
        k = 1 - max(r, g, b)
        if k == 1:
            return (0, 0, 0, 100)
        c = round((1 - r - k) / (1 - k) * 100)
        m = round((1 - g - k) / (1 - k) * 100)
        y = round((1 - b - k) / (1 - k) * 100)
        k = round(k * 100)
        return (c, m, y, k)

    def check_print_compatibility(
        self, colors: list[dict]
    ) -> list[dict]:
        """Kiểm tra màu có in được tốt không"""
        warnings = []
        for color in colors:
            c, m, y, k = color["cmyk"]
            total_ink = c + m + y + k

            if total_ink > 300:
                warnings.append({
                    "color": color["hex"],
                    "issue": "Tổng ink > 300% — có thể bị lem khi in",
                    "suggestion": "Giảm saturation hoặc thay màu gần tương tự",
                })

            h, s, v = rgb_to_hsv(*[x / 255 for x in color["rgb"]])
            if s > 0.95 and v > 0.95:
                warnings.append({
                    "color": color["hex"],
                    "issue": "Neon/highly saturated — CMYK không thể tái tạo chính xác",
                    "suggestion": "Giảm saturation 10-15% hoặc dùng spot color",
                })

        return warnings
```

---

## 4. IP-Adapter — Style-Consistent Generation

```python
from diffusers import StableDiffusionXLPipeline
from diffusers.utils import load_image

class ImageReferenceGenerator:
    """Generate design mới dựa trên style reference"""

    def __init__(self):
        self.pipe = StableDiffusionXLPipeline.from_pretrained(
            "stabilityai/stable-diffusion-xl-base-1.0",
            torch_dtype=torch.float16,
        )
        self.pipe.load_lora_weights("models/sdxl-fashion-lora-v2.1")

        # Load IP-Adapter
        self.pipe.load_ip_adapter(
            "h94/IP-Adapter",
            subfolder="sdxl_models",
            weight_name="ip-adapter-plus_sdxl_vit-h.safetensors",
        )
        self.pipe.to("cuda")

    def generate_from_reference(
        self,
        reference_image: Image.Image,
        prompt: str = "",
        style_strength: float = 0.6,
        num_variations: int = 4,
    ) -> list[Image.Image]:
        """
        Generate design mới giữ style reference

        style_strength:
        - 0.3: nhẹ, chỉ lấy cảm hứng
        - 0.6: trung bình, giữ style + color
        - 0.9: mạnh, rất giống reference
        """
        # Set IP-Adapter scale
        self.pipe.set_ip_adapter_scale(style_strength)

        # Auto-enhance prompt nếu rỗng
        if not prompt:
            prompt = "t-shirt design, transparent background, print-ready"

        images = self.pipe(
            prompt=prompt,
            ip_adapter_image=reference_image,
            num_images_per_prompt=num_variations,
            num_inference_steps=30,
            guidance_scale=7.5,
        ).images

        return images
```

---

## 5. Layout Detection

```python
class LayoutDetector:
    """Phân tích bố cục design trên áo thun"""

    LAYOUT_TYPES = {
        "center_chest": "Design ở giữa ngực (phổ biến nhất)",
        "full_front": "Design phủ toàn bộ mặt trước",
        "left_chest": "Design nhỏ bên ngực trái (pocket area)",
        "back_print": "Design ở lưng",
        "sleeve": "Design trên tay áo",
        "all_over": "Design phủ toàn bộ áo",
    }

    def detect_layout(self, design_image: Image.Image) -> dict:
        """Phân tích layout phù hợp cho design"""
        width, height = design_image.size
        aspect_ratio = width / height

        # Phân tích kích thước và tỷ lệ
        if aspect_ratio > 2.0:
            layout = "full_front"  # Wide → full front
        elif aspect_ratio < 0.5:
            layout = "sleeve"  # Tall & narrow → sleeve
        elif width < 300 and height < 300:
            layout = "left_chest"  # Small → pocket
        else:
            layout = "center_chest"  # Default

        # Phân tích content density
        density = self._content_density(design_image)
        if density > 0.7:
            layout = "all_over"

        return {
            "recommended_layout": layout,
            "description": self.LAYOUT_TYPES[layout],
            "aspect_ratio": round(aspect_ratio, 2),
            "content_density": round(density, 2),
            "print_area_cm": self._calculate_print_area(layout),
        }

    def _calculate_print_area(self, layout: str) -> dict:
        """Vùng in thực tế theo layout (cm)"""
        areas = {
            "center_chest": {"width": 30, "height": 35},
            "full_front": {"width": 38, "height": 50},
            "left_chest": {"width": 10, "height": 10},
            "back_print": {"width": 35, "height": 45},
            "sleeve": {"width": 10, "height": 25},
            "all_over": {"width": 55, "height": 75},
        }
        return areas.get(layout, areas["center_chest"])
```

---

## Tổng kết

Module Image Reference Analysis bao gồm:

1. **CLIP Style Analysis** — zero-shot classify style, compute similarity giữa designs
2. **Color Palette Extraction** — K-means clustering, CMYK compatibility check
3. **IP-Adapter** — generate design mới giữ style reference với controllable strength
4. **Layout Detection** — tự động recommend vùng in phù hợp

Bài tiếp theo: **Multi-modal Generation** — kết hợp text prompt + image reference cho design output mạnh hơn.
