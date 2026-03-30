---
id: 019d8b30-bb13-7013-c013-f0c4e8000013
title: 'Bài 13: Behavioral Learning — Học từ Hành vi & Preference theo thời gian'
slug: bai-13-behavioral-learning-hoc-hanh-vi-preference
description: >-
  Implicit feedback system: prompt history, regenerate patterns,
  color changes, saved/purchased/liked/shared designs. User
  embedding update pipeline. Collaborative filtering.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: AI Personalization & Recommendation"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Style profile từ onboarding chỉ là snapshot ban đầu. Gu thẩm mỹ thay đổi theo thời gian. Bài này xây dựng hệ thống **Behavioral Learning** — AI liên tục học từ mọi interaction của user để cá nhân hóa ngày càng chính xác.

---

## 1. Implicit Feedback Signals

```
User behaviors (sorted by signal strength):

STRONG SIGNALS:
├── purchased_design    (9/10) — User mua = chắc chắn thích
├── saved_to_library    (8/10) — Save = có ý định dùng
└── shared_design       (7/10) — Share = muốn show

MEDIUM SIGNALS:
├── liked_design        (6/10) — Like nhưng chưa mua
├── time_spent_viewing  (5/10) — Xem lâu = quan tâm
└── edited_further      (5/10) — Chỉnh thêm = gần ý muốn

WEAK SIGNALS:
├── clicked_design      (3/10) — Click xem nhưng thoát
├── prompt_history      (3/10) — Chủ đề quan tâm
└── regenerated         (2/10) — Không thích kết quả ban đầu

NEGATIVE SIGNALS:
├── skipped_quickly     (-3/10) — Thoát nhanh = không thích
├── regenerated_many    (-5/10) — Regen nhiều = AI chưa hiểu
└── reported_design     (-8/10) — Báo cáo = hoàn toàn không phù hợp
```

---

## 2. Event Collection

```python
from datetime import datetime
from enum import Enum

class EventType(Enum):
    GENERATE = "generate"
    REGENERATE = "regenerate"
    EDIT = "edit"
    SAVE = "save"
    LIKE = "like"
    SHARE = "share"
    PURCHASE = "purchase"
    VIEW = "view"
    SKIP = "skip"
    REPORT = "report"

@dataclass
class UserEvent:
    user_id: str
    event_type: EventType
    design_id: str | None
    prompt: str | None
    metadata: dict          # Extra context
    timestamp: datetime
    design_embedding: list[float] | None  # CLIP embedding

class BehaviorCollector:
    """Thu thập behavioral events"""

    SIGNAL_WEIGHTS = {
        EventType.PURCHASE: 9.0,
        EventType.SAVE: 8.0,
        EventType.SHARE: 7.0,
        EventType.LIKE: 6.0,
        EventType.VIEW: 5.0,  # if duration > 10s
        EventType.EDIT: 5.0,
        EventType.GENERATE: 3.0,
        EventType.SKIP: -3.0,
        EventType.REGENERATE: -2.0,
        EventType.REPORT: -8.0,
    }

    async def record(self, event: UserEvent):
        # Store event
        await self.event_store.insert(event)

        # Update user embedding (async)
        await self.embedding_updater.schedule_update(
            event.user_id
        )
```

---

## 3. User Embedding Update Pipeline

```python
class UserEmbeddingUpdater:
    """Cập nhật user style embedding từ behavioral data"""

    def __init__(self):
        self.clip_model = CLIPModel.from_pretrained(
            "openai/clip-vit-large-patch14-336"
        )

    async def update_embedding(self, user_id: str):
        # 1. Get current profile
        profile = await self.get_profile(user_id)

        # 2. Get recent events (last 30 days)
        events = await self.event_store.get_recent(
            user_id, days=30
        )

        if not events:
            return  # Nothing to update

        # 3. Weighted embedding update
        new_vector = self._compute_weighted_embedding(
            profile.style_vector, events
        )

        # 4. Exponential moving average
        alpha = 0.3  # Learning rate
        updated_vector = (
            (1 - alpha) * profile.style_vector
            + alpha * new_vector
        )
        updated_vector = updated_vector / updated_vector.norm()

        # 5. Update profile
        profile.style_vector = updated_vector
        profile.aesthetics = self._recompute_aesthetics(
            updated_vector
        )
        await self.store_profile(user_id, profile)

    def _compute_weighted_embedding(
        self,
        current: torch.Tensor,
        events: list[UserEvent],
    ) -> torch.Tensor:
        """Compute weighted average of design embeddings"""
        weighted_sum = torch.zeros_like(current)
        total_weight = 0

        for event in events:
            if event.design_embedding is None:
                continue

            weight = self.SIGNAL_WEIGHTS.get(
                event.event_type, 0
            )
            # Time decay: events gần đây có trọng số cao hơn
            days_ago = (
                datetime.now() - event.timestamp
            ).days
            time_decay = 0.95 ** days_ago

            final_weight = weight * time_decay

            embedding = torch.tensor(event.design_embedding)
            weighted_sum += final_weight * embedding
            total_weight += abs(final_weight)

        if total_weight == 0:
            return current

        return weighted_sum / total_weight
```

---

## 4. Prompt Pattern Learning

```python
class PromptPatternLearner:
    """Học patterns từ prompt history"""

    async def analyze_patterns(
        self, user_id: str
    ) -> PromptPatterns:
        # Get prompt history
        prompts = await self.get_prompt_history(user_id)

        if len(prompts) < 5:
            return PromptPatterns(confidence=0.0)

        # Extract keywords frequency
        keywords = self._extract_keywords(prompts)

        # Classify dominant themes
        themes = self._classify_themes(prompts)

        # Detect color preferences from prompts
        color_mentions = self._extract_colors_from_text(prompts)

        return PromptPatterns(
            top_keywords=keywords[:10],
            dominant_themes=themes,
            color_mentions=color_mentions,
            prompt_count=len(prompts),
            confidence=min(len(prompts) / 20, 1.0),
        )

    def _classify_themes(
        self, prompts: list[str]
    ) -> dict[str, float]:
        """Classify prompts vào themes"""
        themes = {
            "gaming": ["game", "esport", "pixel", "controller", "gamer"],
            "meme": ["meme", "funny", "lol", "humor", "joke"],
            "cyberpunk": ["cyber", "neon", "futuristic", "sci-fi", "robot"],
            "nature": ["flower", "tree", "animal", "botanical", "forest"],
            "typography": ["quote", "text", "word", "slogan", "letter"],
            "streetwear": ["street", "urban", "graffiti", "hip-hop", "skate"],
        }

        scores = {theme: 0.0 for theme in themes}
        for prompt in prompts:
            prompt_lower = prompt.lower()
            for theme, keywords in themes.items():
                for kw in keywords:
                    if kw in prompt_lower:
                        scores[theme] += 1
                        break

        # Normalize
        total = sum(scores.values())
        if total > 0:
            scores = {k: v / total for k, v in scores.items()}

        return dict(sorted(
            scores.items(), key=lambda x: x[1], reverse=True
        ))
```

---

## 5. Collaborative Filtering

```python
class CollaborativeFilter:
    """Gợi ý dựa trên users có gu tương tự"""

    async def get_cf_recommendations(
        self,
        user_id: str,
        top_k: int = 10,
    ) -> list[str]:
        # 1. Find similar users
        similar_users = await self.similar_finder.find_similar(
            user_id, top_k=20
        )

        # 2. Get designs liked/purchased by similar users
        candidate_designs = set()
        for sim_user in similar_users:
            designs = await self.get_positive_interactions(
                sim_user.id
            )
            candidate_designs.update(designs)

        # 3. Remove designs user already interacted with
        user_designs = await self.get_all_interactions(user_id)
        new_designs = candidate_designs - user_designs

        # 4. Rank by popularity among similar users
        ranked = self._rank_by_similarity_weighted_popularity(
            new_designs, similar_users
        )

        return ranked[:top_k]
```

---

## Tổng kết

Behavioral Learning System:

1. **Implicit feedback** — 10 signal types với weighted scores
2. **Event collection** — real-time behavioral event stream
3. **Embedding update** — EMA update user style vector từ behaviors
4. **Prompt patterns** — learn themes, keywords, color preferences
5. **Collaborative filtering** — gợi ý từ users có gu tương tự

Bài tiếp theo: **AI Recommendation System** — kết hợp tất cả signals để personalize generation.
