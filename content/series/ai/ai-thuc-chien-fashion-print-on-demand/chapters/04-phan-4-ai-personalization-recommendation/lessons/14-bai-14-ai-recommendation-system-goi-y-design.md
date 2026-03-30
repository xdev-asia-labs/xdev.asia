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
