---
id: 019d8b30-bb14-7014-c014-f0c4e8000014
title: 'Bài 14: AI Recommendation System — Gợi ý Design cá nhân hóa'
slug: bai-14-ai-recommendation-system-goi-y-design
description: >-
  Kết hợp style profile + behavioral data → personalized generation.
  AI ưu tiên màu user thích, gợi ý niche phù hợp, tối ưu layout.
  Cold start problem và progressive personalization.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: AI Personalization & Recommendation"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9685" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9685)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1050" cy="40" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="220" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="50" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="850" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="200" x2="1100" y2="280" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="230" x2="1050" y2="300" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1030.3108891324553,182.5 1030.3108891324553,217.5 1000,235 969.6891108675446,217.5 969.6891108675446,182.5 1000,165" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI &amp; ML — Bài 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 14: AI Recommendation System — Gợi ý</tspan>
      <tspan x="60" dy="42">Design cá nhân hóa</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI Thực Chiến: Xây dựng AI Platform cho Fashion &amp; Print-on-Demand</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: AI Personalization &amp; Recommendation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Bài 12 xây dựng style profile, Bài 13 xây dựng behavioral learning. Bài này **kết hợp tất cả** thành Recommendation System — AI biết user thích gì và tạo design phù hợp.

---

## 1. Recommendation Architecture

```
User Request: "Generate a cool design"
        │
        ├── Style Profile (Bài 12)
        │   ├── style_vector: [0.12, -0.34, ...]
        │   ├── aesthetics: {cyberpunk: 0.7, neon: 0.5}
        │   └── colors: [#FF00FF, #00FFFF, #0A0A0A]
        │
        ├── Behavioral Data (Bài 13)
        │   ├── prompt_themes: {gaming: 0.4, cyberpunk: 0.3}
        │   ├── preferred_layouts: [center_chest, full_front]
        │   └── engagement_patterns
        │
        ├── Collaborative Filtering
        │   └── similar_users_liked: [design_A, design_B, ...]
        │
        └── Context
            ├── time_of_day
            ├── trending_now
            └── season
                │
                ▼
    ┌──────────────────────────────┐
    │  Personalization Engine      │
    │                              │
    │  1. Enhance prompt           │
    │  2. Adjust generation params │
    │  3. Apply style conditioning │
    │  4. Post-filter results      │
    └──────────────────────────────┘
                │
                ▼
        Personalized Designs
```

---

## 2. Personalized Generation

```python
class PersonalizedGenerator:
    """Generate design có personalization"""

    def __init__(self):
        self.generator = DesignGenerationService()
        self.profiler = StyleProfiler()
        self.behavior = BehaviorCollector()

    async def generate_personalized(
        self,
        user_id: str,
        prompt: str,
        num_variations: int = 4,
    ) -> list[Image.Image]:
        # 1. Get user profile
        profile = await self.get_profile(user_id)
        level = self._get_personalization_level(profile)

        if level == "none":
            # New user, no data → generic generation
            return await self.generator.generate(prompt)

        # 2. Enhance prompt with preferences
        enhanced = self._personalize_prompt(prompt, profile)

        # 3. Adjust generation parameters
        gen_params = self._personalize_params(profile)

        # 4. Generate with IP-Adapter style conditioning
        designs = await self._generate_with_style(
            enhanced, profile, gen_params, num_variations
        )

        # 5. Re-rank results by user preference
        ranked = self._rank_by_preference(designs, profile)

        return ranked

    def _get_personalization_level(
        self, profile: StyleProfile | None
    ) -> str:
        if profile is None:
            return "none"
        if profile.confidence < 0.3:
            return "light"    # Chỉ enhance prompt nhẹ
        if profile.confidence < 0.7:
            return "medium"   # Enhance + IP-Adapter nhẹ
        return "full"         # Full personalization

    def _personalize_prompt(
        self,
        prompt: str,
        profile: StyleProfile,
    ) -> str:
        """Thêm style keywords dựa trên preference"""
        # Top aesthetic
        top_aesthetic = list(profile.aesthetics.keys())[0]

        # Top colors
        color_names = [c.get("name", c["hex"])
                      for c in profile.color_preferences[:2]]

        additions = []
        if top_aesthetic and profile.confidence > 0.3:
            additions.append(f"{top_aesthetic} style")
        if color_names and profile.confidence > 0.5:
            additions.append(
                f"color palette: {', '.join(color_names)}"
            )

        if additions:
            return f"{prompt}, {', '.join(additions)}"
        return prompt
```

---

## 3. Cold Start Problem

```python
class ColdStartHandler:
    """Xử lý user mới chưa có dữ liệu"""

    async def handle_new_user(
        self, user_id: str, prompt: str
    ) -> list[Image.Image]:
        # Strategy 1: Popular designs
        trending = await self.get_trending_designs()

        # Strategy 2: Diverse variations
        # Tạo 4 variations với 4 styles khác nhau
        styles = ["cyberpunk", "minimal", "streetwear", "vintage"]
        variations = []
        for style in styles:
            styled_prompt = f"{prompt}, {style} style"
            design = await self.generator.generate(
                styled_prompt, num_variations=1
            )
            variations.extend(design)

        return variations

    def progressive_personalization(
        self, interaction_count: int
    ) -> dict:
        """Personalization tăng dần theo số interactions"""
        if interaction_count < 5:
            return {
                "strategy": "exploration",
                "diversity": 0.9,  # Rất đa dạng
                "personalization_weight": 0.1,
            }
        elif interaction_count < 20:
            return {
                "strategy": "balanced",
                "diversity": 0.6,
                "personalization_weight": 0.4,
            }
        elif interaction_count < 50:
            return {
                "strategy": "personalized",
                "diversity": 0.3,
                "personalization_weight": 0.7,
            }
        else:
            return {
                "strategy": "highly_personalized",
                "diversity": 0.2,
                "personalization_weight": 0.8,
            }
```

---

## 4. Design Discovery & Feed

```python
class DesignFeed:
    """Personalized design feed cho marketplace"""

    async def get_feed(
        self, user_id: str, page: int = 0, limit: int = 20
    ) -> list[DesignCard]:
        profile = await self.get_profile(user_id)

        # Mix strategies
        feed = []

        # 40% — personalized (dựa trên style profile)
        personalized = await self._get_similar_to_profile(
            profile, limit=int(limit * 0.4)
        )
        feed.extend(personalized)

        # 30% — collaborative filtering
        cf_results = await self._get_cf_recommendations(
            user_id, limit=int(limit * 0.3)
        )
        feed.extend(cf_results)

        # 20% — trending
        trending = await self._get_trending(
            limit=int(limit * 0.2)
        )
        feed.extend(trending)

        # 10% — exploration (designs hoàn toàn mới)
        explore = await self._get_random_quality(
            limit=int(limit * 0.1)
        )
        feed.extend(explore)

        # Deduplicate & shuffle
        feed = self._deduplicate(feed)
        feed = self._interleave(feed)  # Mix strategies

        return feed[:limit]
```

---

## Tổng kết

AI Recommendation System:

1. **Kết hợp signals** — style profile + behavior + collaborative filtering
2. **Personalized generation** — enhance prompt & params theo preference
3. **Cold start** — exploration-first cho user mới, progressive personalization
4. **Design feed** — 40% personalized + 30% CF + 20% trending + 10% exploration

Bài tiếp theo: **AI Size Recommendation** — dự đoán size áo từ body measurements.
