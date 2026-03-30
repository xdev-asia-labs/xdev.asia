---
id: 019d8b30-bb21-7021-c021-f0c4e8000021
title: 'Bài 21: AI Auto-Tagging — Gắn Tag & Phân loại Design tự động'
slug: bai-21-ai-auto-tagging-gan-tag-phan-loai
description: >-
  CLIP zero-shot classification cho design tagging, multi-label
  taxonomy (style, theme, color, season). Training custom
  classifier. Integration vào listing workflow.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 6: AI cho Production Pipeline"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Seller upload design nhưng **không muốn gắn tag thủ công**. AI Auto-Tagging tự động phân loại design theo style, theme, color palette, season — giúp design dễ tìm và recommend chính xác hơn.

---

## 1. Tagging Architecture

```
Design Upload
     │
     ▼
┌─────────────────────────────────────────┐
│           AI Auto-Tagger                 │
│                                          │
│  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│  │ CLIP      │  │ Color    │  │ Custom │ │
│  │ Zero-shot │  │ Analyzer │  │ Model  │ │
│  └─────┬────┘  └─────┬────┘  └───┬────┘ │
│        └──────┬──────┘       ────┘       │
│               ▼                          │
│        Tag Aggregator                    │
│        Confidence Filter                 │
└─────────────────┬───────────────────────┘
                  │
                  ▼
        ┌─────────────────┐
        │ Tags:            │
        │ style: minimalist│
        │ theme: nature    │
        │ colors: green    │
        │ season: spring   │
        │ audience: unisex │
        └─────────────────┘
```

---

## 2. CLIP Zero-shot Classification

```python
import torch
import clip
from PIL import Image

class CLIPTagger:
    """Zero-shot design classification with CLIP"""

    # Tag taxonomy
    TAXONOMIES = {
        "style": [
            "minimalist", "vintage", "retro", "modern",
            "grunge", "kawaii", "street", "classic",
            "abstract", "geometric", "illustrative",
            "typography-focused", "photographic",
        ],
        "theme": [
            "nature", "animals", "music", "sports",
            "gaming", "food", "travel", "humor",
            "motivational", "holiday", "cultural",
            "pop culture", "sci-fi", "horror",
        ],
        "audience": [
            "men", "women", "unisex", "kids", "teens",
        ],
        "season": [
            "spring", "summer", "autumn", "winter",
            "all-season",
        ],
        "mood": [
            "fun", "serious", "edgy", "cute",
            "elegant", "bold", "calm", "energetic",
        ],
    }

    def __init__(self):
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.model, self.preprocess = clip.load(
            "ViT-L/14", device=self.device
        )

    def tag_design(
        self,
        image: Image.Image,
        confidence_threshold: float = 0.15,
    ) -> dict[str, list[TagResult]]:
        """
        Tag design sử dụng CLIP zero-shot

        Returns tags per category, sorted by confidence
        """
        image_input = self.preprocess(image).unsqueeze(0).to(self.device)

        results = {}
        with torch.no_grad():
            image_features = self.model.encode_image(image_input)
            image_features /= image_features.norm(dim=-1, keepdim=True)

            for category, labels in self.TAXONOMIES.items():
                # Create text prompts
                prompts = [
                    f"a {label} style t-shirt design"
                    for label in labels
                ]
                text_tokens = clip.tokenize(prompts).to(self.device)
                text_features = self.model.encode_text(text_tokens)
                text_features /= text_features.norm(dim=-1, keepdim=True)

                # Calculate similarity
                similarity = (
                    image_features @ text_features.T
                ).softmax(dim=-1)[0]

                # Filter by threshold
                tags = []
                for i, (label, score) in enumerate(
                    zip(labels, similarity.cpu().numpy())
                ):
                    if score >= confidence_threshold:
                        tags.append(TagResult(
                            label=label,
                            confidence=float(score),
                        ))

                # Sort by confidence
                tags.sort(key=lambda t: t.confidence, reverse=True)
                results[category] = tags

        return results
```

---

## 3. Color Analysis

```python
from sklearn.cluster import KMeans
from collections import Counter

class ColorAnalyzer:
    """Extract và classify color palette"""

    COLOR_NAMES = {
        (255, 0, 0): "red",
        (0, 255, 0): "green",
        (0, 0, 255): "blue",
        (255, 255, 0): "yellow",
        (255, 165, 0): "orange",
        (128, 0, 128): "purple",
        (255, 192, 203): "pink",
        (0, 0, 0): "black",
        (255, 255, 255): "white",
        (128, 128, 128): "gray",
        (139, 69, 19): "brown",
        (0, 128, 128): "teal",
        (0, 255, 255): "cyan",
        (255, 215, 0): "gold",
        (192, 192, 192): "silver",
    }

    def extract_palette(
        self, image: Image.Image, n_colors: int = 5
    ) -> list[ColorInfo]:
        """Extract dominant colors bằng K-means clustering"""
        # Resize for speed
        img_small = image.resize((150, 150)).convert("RGB")
        pixels = np.array(img_small).reshape(-1, 3)

        # Remove near-white/transparent pixels
        mask = np.all(pixels < 250, axis=1)
        pixels = pixels[mask]

        if len(pixels) < n_colors:
            return []

        # K-means clustering
        kmeans = KMeans(
            n_clusters=n_colors, random_state=42, n_init=10
        )
        kmeans.fit(pixels)

        # Get cluster sizes
        labels = kmeans.labels_
        counts = Counter(labels)
        total = len(labels)

        colors = []
        for i, center in enumerate(kmeans.cluster_centers_):
            rgb = tuple(int(c) for c in center)
            name = self._closest_color_name(rgb)
            percentage = counts[i] / total

            colors.append(ColorInfo(
                rgb=rgb,
                hex=f"#{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}",
                name=name,
                percentage=percentage,
            ))

        colors.sort(key=lambda c: c.percentage, reverse=True)
        return colors

    def _closest_color_name(self, rgb: tuple) -> str:
        """Find closest named color"""
        min_dist = float("inf")
        closest = "unknown"

        for ref_rgb, name in self.COLOR_NAMES.items():
            dist = sum((a - b) ** 2 for a, b in zip(rgb, ref_rgb))
            if dist < min_dist:
                min_dist = dist
                closest = name

        return closest
```

---

## 4. Custom Multi-label Classifier

```python
import torch
import torch.nn as nn
from torchvision import models, transforms

class DesignClassifier(nn.Module):
    """Custom multi-label classifier trained trên design dataset"""

    def __init__(self, num_labels: int = 50):
        super().__init__()
        # ResNet50 backbone
        backbone = models.resnet50(pretrained=True)
        self.features = nn.Sequential(
            *list(backbone.children())[:-1]
        )

        # Multi-label head
        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(2048, 512),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(512, num_labels),
            nn.Sigmoid(),  # Multi-label: independent probabilities
        )

    def forward(self, x):
        features = self.features(x)
        return self.classifier(features)


class CustomTagger:
    """Wrapper cho custom classifier"""

    def __init__(self, model_path: str, label_map: dict):
        self.model = DesignClassifier(num_labels=len(label_map))
        self.model.load_state_dict(torch.load(model_path))
        self.model.eval()
        self.label_map = label_map

        self.transform = transforms.Compose([
            transforms.Resize(256),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            transforms.Normalize(
                mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225],
            ),
        ])

    def predict(
        self,
        image: Image.Image,
        threshold: float = 0.5,
    ) -> list[TagResult]:
        input_tensor = self.transform(image).unsqueeze(0)

        with torch.no_grad():
            probs = self.model(input_tensor)[0]

        tags = []
        for idx, prob in enumerate(probs.numpy()):
            if prob >= threshold:
                tags.append(TagResult(
                    label=self.label_map[idx],
                    confidence=float(prob),
                ))

        return sorted(tags, key=lambda t: t.confidence, reverse=True)
```

---

## 5. Unified Tagging Pipeline

```python
class AutoTagPipeline:
    """Pipeline gom kết quả từ nhiều taggers"""

    def __init__(self):
        self.clip_tagger = CLIPTagger()
        self.color_analyzer = ColorAnalyzer()
        self.custom_tagger = CustomTagger(
            "models/design_classifier.pt",
            label_map=LABEL_MAP,
        )

    async def tag_design(
        self, image: Image.Image
    ) -> DesignTags:
        # CLIP zero-shot tags
        clip_tags = self.clip_tagger.tag_design(image)

        # Color palette
        colors = self.color_analyzer.extract_palette(image)

        # Custom model tags
        custom_tags = self.custom_tagger.predict(image)

        # Merge and deduplicate
        return DesignTags(
            style=clip_tags.get("style", []),
            theme=clip_tags.get("theme", []),
            audience=clip_tags.get("audience", []),
            season=clip_tags.get("season", []),
            mood=clip_tags.get("mood", []),
            colors=[c.name for c in colors[:3]],
            color_palette=colors,
            custom_tags=custom_tags,
        )
```

---

## Tổng kết

AI Auto-Tagging:

1. **CLIP zero-shot** — classify design theo 5 taxonomies, không cần training data
2. **Color analysis** — K-means clustering, closest named color matching
3. **Custom classifier** — ResNet50 multi-label, trained trên design dataset
4. **Pipeline** — merge results từ 3 taggers

Bài tiếp theo: **AI Product Generation** — auto-generate title, description, và mockup.
