---
id: 019d8b30-bb12-7012-c012-f0c4e8000012
title: 'Bài 12: Style Analysis Engine — Phân tích Gu thẩm mỹ từ User Input'
slug: bai-12-style-analysis-engine-phan-tich-gu-tham-my
description: >-
  Xây dựng onboarding flow: user upload 5–10 ảnh → AI phân tích
  color palette, typography preference, pattern style, aesthetic
  (cyberpunk, minimal, vintage, gaming). CLIP + clustering.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: AI Personalization & Recommendation"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2080" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2080)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1092" cy="126" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="1084" cy="158" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1076" cy="190" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="1068" cy="222" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="254" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="166" x2="1100" y2="246" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="196" x2="1050" y2="266" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="951.507041555162,95.5 951.507041555162,136.5 916,157 880.492958444838,136.5 880.492958444838,95.50000000000001 916,75" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI &amp; ML — Bài 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: Style Analysis Engine — Phân tích</tspan>
      <tspan x="60" dy="42">Gu thẩm mỹ từ User Input</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI Thực Chiến: Xây dựng AI Platform cho Fashion &amp; Print-on-Demand</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: AI Personalization &amp; Recommendation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Platform không chỉ tạo design ngẫu nhiên — AI phải **hiểu gu thẩm mỹ** của từng user để tạo design phù hợp hơn theo thời gian. Bài này xây dựng **Style Analysis Engine** — module AI phân tích preference từ onboarding data.

---

## 1. Onboarding Flow

```
User đăng ký platform
    │
    ├── Upload 5–10 ảnh design yêu thích
    │   (áo thun, artwork, meme, illustration...)
    │
    ├── AI phân tích:
    │   ├── Color palette preference
    │   ├── Typography style
    │   ├── Pattern/layout preference
    │   └── Aesthetic category
    │
    └── Tạo User Style Profile
        ├── Style vector (CLIP embedding)
        ├── Dominant colors
        ├── Preferred categories
        └── Confidence score
```

---

## 2. CLIP-based Style Profiling

```python
class StyleProfiler:
    """Tạo style profile từ ảnh user upload"""

    def __init__(self):
        self.clip_model = CLIPModel.from_pretrained(
            "openai/clip-vit-large-patch14-336"
        )
        self.clip_processor = CLIPProcessor.from_pretrained(
            "openai/clip-vit-large-patch14-336"
        )
        self.color_extractor = ColorExtractor()

    def create_profile(
        self, images: list[Image.Image]
    ) -> StyleProfile:
        # 1. Extract CLIP embeddings
        embeddings = [
            self._get_embedding(img) for img in images
        ]

        # 2. Compute average style vector
        style_vector = torch.stack(embeddings).mean(dim=0)
        style_vector = style_vector / style_vector.norm()

        # 3. Classify aesthetics
        aesthetics = self._classify_aesthetics(images)

        # 4. Extract color preferences
        color_prefs = self._aggregate_colors(images)

        # 5. Detect patterns
        patterns = self._detect_patterns(images)

        return StyleProfile(
            style_vector=style_vector,
            aesthetics=aesthetics,
            color_preferences=color_prefs,
            pattern_preferences=patterns,
            confidence=self._calculate_confidence(embeddings),
        )

    def _classify_aesthetics(
        self, images: list[Image.Image]
    ) -> dict:
        """Classify aesthetic style across all images"""
        all_styles = {}

        for img in images:
            styles = self.style_analyzer.classify_style(img)
            for style, score in styles.items():
                if style not in all_styles:
                    all_styles[style] = []
                all_styles[style].append(score)

        # Average scores
        avg_styles = {
            style: sum(scores) / len(scores)
            for style, scores in all_styles.items()
        }

        # Return top 3
        sorted_styles = sorted(
            avg_styles.items(), key=lambda x: x[1], reverse=True
        )
        return dict(sorted_styles[:3])

    def _aggregate_colors(
        self, images: list[Image.Image]
    ) -> list[dict]:
        """Tổng hợp color palette từ tất cả ảnh"""
        all_colors = []
        for img in images:
            colors = self.color_extractor.extract_palette(img, n_colors=3)
            all_colors.extend(colors)

        # Cluster lại để tìm dominant colors
        from sklearn.cluster import KMeans
        import numpy as np

        rgb_values = np.array([c["rgb"] for c in all_colors])
        kmeans = KMeans(n_clusters=5, n_init=10, random_state=42)
        kmeans.fit(rgb_values)

        dominant = []
        for center in kmeans.cluster_centers_:
            rgb = tuple(center.astype(int))
            dominant.append({
                "rgb": rgb,
                "hex": "#{:02x}{:02x}{:02x}".format(*rgb),
            })

        return dominant

    def _calculate_confidence(
        self, embeddings: list[torch.Tensor]
    ) -> float:
        """
        Confidence = mức độ consistent của style

        Nếu tất cả ảnh cùng style → confidence cao
        Nếu ảnh rất đa dạng → confidence thấp
        """
        if len(embeddings) < 2:
            return 0.5

        # Pairwise cosine similarity
        similarities = []
        for i in range(len(embeddings)):
            for j in range(i + 1, len(embeddings)):
                sim = torch.cosine_similarity(
                    embeddings[i], embeddings[j], dim=0
                )
                similarities.append(sim.item())

        avg_similarity = sum(similarities) / len(similarities)
        # Normalize to 0-1 range
        return min(max(avg_similarity, 0), 1)
```

---

## 3. Style Profile Storage

```python
@dataclass
class StyleProfile:
    style_vector: torch.Tensor      # CLIP embedding (768-dim)
    aesthetics: dict                 # {"cyberpunk": 0.7, "neon": 0.5}
    color_preferences: list[dict]   # Top 5 colors
    pattern_preferences: list[str]  # ["geometric", "typography"]
    confidence: float               # 0-1

    def to_storage(self) -> dict:
        """Serialize cho database storage"""
        return {
            "style_vector": self.style_vector.tolist(),
            "aesthetics": self.aesthetics,
            "color_preferences": self.color_preferences,
            "pattern_preferences": self.pattern_preferences,
            "confidence": self.confidence,
        }

# Storage: Vector DB (Qdrant/Pinecone)
async def store_profile(
    user_id: str, profile: StyleProfile
):
    # Store style vector trong Vector DB
    await vector_db.upsert(
        collection="user_styles",
        points=[{
            "id": user_id,
            "vector": profile.style_vector.tolist(),
            "payload": {
                "aesthetics": profile.aesthetics,
                "colors": profile.color_preferences,
                "confidence": profile.confidence,
            },
        }],
    )
```

---

## 4. Similar Users Discovery

```python
class SimilarUsersFinder:
    """Tìm users có gu tương tự (cho collaborative filtering)"""

    async def find_similar(
        self, user_id: str, top_k: int = 20
    ) -> list[dict]:
        # Get user's style vector
        user_profile = await vector_db.get(
            collection="user_styles", id=user_id
        )

        # Search similar vectors
        results = await vector_db.search(
            collection="user_styles",
            query_vector=user_profile.vector,
            limit=top_k + 1,  # +1 because self is included
        )

        # Exclude self
        similar = [
            r for r in results if r.id != user_id
        ]

        return similar[:top_k]
```

---

## Tổng kết

Style Analysis Engine:

1. **Onboarding** — user upload 5–10 ảnh → AI phân tích
2. **CLIP profiling** — tạo style vector 768-dim đại diện gu thẩm mỹ
3. **Aesthetic classification** — detect cyberpunk, minimal, vintage, gaming...
4. **Color aggregation** — tổng hợp dominant colors từ preferences
5. **Confidence scoring** — đánh giá mức độ rõ ràng của style preference
6. **Similar users** — tìm users tương tự qua vector similarity

Bài tiếp theo: **Behavioral Learning** — AI học từ hành vi sử dụng theo thời gian.
