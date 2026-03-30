---
id: 019d8b30-bb23-7023-c023-f0c4e8000023
title: 'Bài 23: Trending Detection & Content Moderation'
slug: bai-23-trending-detection-xu-huong-content-moderation
description: >-
  Phát hiện xu hướng design từ engagement metrics: trending
  score algorithm, seasonal detection. Content moderation:
  NSFW detection, copyright check, brand safety.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 22
section_title: "Phần 6: AI cho Production Pipeline"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Platform cần 2 module quan trọng: (1) **phát hiện design đang trending** để boost visibility, và (2) **content moderation** để filter design vi phạm. Bài này build cả hai với scoring algorithm và AI classification.

---

## 1. Trending Detection Architecture

```
Design Events
(views, likes, purchases, shares)
        │
        ▼
┌─────────────────────────┐
│ Event Aggregation        │
│ (time-windowed counters) │
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│ Trending Score Algorithm │
│ - Velocity scoring       │
│ - Decay function         │
│ - Category normalization │
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│ Seasonal Detection       │
│ - Calendar-based signals │
│ - Emerging trend analysis│
└────────┬────────────────┘
         │
         ▼
   Trending Feed / Boost
```

---

## 2. Trending Score Algorithm

```python
import math
from datetime import datetime, timedelta

class TrendingScorer:
    """Calculate trending score cho designs"""

    # Event weights
    EVENT_WEIGHTS = {
        "view": 1.0,
        "like": 5.0,
        "add_to_cart": 10.0,
        "purchase": 25.0,
        "share": 8.0,
        "save": 6.0,
    }

    # Time decay half-life (hours)
    HALF_LIFE_HOURS = 24

    def calculate_score(
        self,
        events: list[DesignEvent],
        current_time: datetime | None = None,
    ) -> float:
        """
        Trending Score = Σ (weight × decay(age))

        Uses exponential decay: score decays by 50% every HALF_LIFE hours
        """
        now = current_time or datetime.utcnow()
        score = 0.0

        for event in events:
            weight = self.EVENT_WEIGHTS.get(event.type, 1.0)
            age_hours = (now - event.timestamp).total_seconds() / 3600

            # Exponential decay
            decay = math.pow(0.5, age_hours / self.HALF_LIFE_HOURS)

            score += weight * decay

        return score

    def calculate_velocity(
        self,
        events: list[DesignEvent],
        window_hours: int = 6,
    ) -> float:
        """
        Velocity = events trong window gần nhất / events trong window trước

        Velocity > 1: đang tăng tốc (trending up)
        Velocity < 1: đang giảm
        """
        now = datetime.utcnow()
        recent_cutoff = now - timedelta(hours=window_hours)
        prev_cutoff = now - timedelta(hours=window_hours * 2)

        recent_score = sum(
            self.EVENT_WEIGHTS.get(e.type, 1.0)
            for e in events if e.timestamp >= recent_cutoff
        )
        prev_score = sum(
            self.EVENT_WEIGHTS.get(e.type, 1.0)
            for e in events
            if prev_cutoff <= e.timestamp < recent_cutoff
        )

        if prev_score == 0:
            return recent_score if recent_score > 0 else 0

        return recent_score / prev_score


class TrendingRanker:
    """Rank designs theo trending score"""

    def __init__(self):
        self.scorer = TrendingScorer()

    async def get_trending(
        self,
        category: str | None = None,
        time_window: str = "24h",
        limit: int = 50,
    ) -> list[TrendingDesign]:
        # Get all designs with recent events
        designs = await self._fetch_designs_with_events(
            category, time_window
        )

        # Calculate scores
        results = []
        for design in designs:
            score = self.scorer.calculate_score(design.events)
            velocity = self.scorer.calculate_velocity(design.events)

            results.append(TrendingDesign(
                design_id=design.id,
                score=score,
                velocity=velocity,
                rank=0,  # assigned below
            ))

        # Sort by composite score (score × velocity_boost)
        results.sort(
            key=lambda d: d.score * max(d.velocity, 1.0),
            reverse=True,
        )

        # Assign ranks
        for i, result in enumerate(results[:limit]):
            result.rank = i + 1

        return results[:limit]
```

---

## 3. Seasonal Trend Detection

```python
class SeasonalDetector:
    """Detect seasonal trends từ calendar và search data"""

    SEASONAL_THEMES = {
        "christmas": {
            "months": [11, 12],
            "keywords": [
                "christmas", "santa", "reindeer",
                "snowflake", "xmas", "ho ho ho",
            ],
        },
        "halloween": {
            "months": [9, 10],
            "keywords": [
                "halloween", "spooky", "ghost",
                "pumpkin", "witch", "skeleton",
            ],
        },
        "valentines": {
            "months": [1, 2],
            "keywords": [
                "valentine", "love", "heart",
                "cupid", "romantic",
            ],
        },
        "summer": {
            "months": [5, 6, 7],
            "keywords": [
                "summer", "beach", "tropical",
                "vacation", "sun", "surf",
            ],
        },
    }

    def get_current_themes(self) -> list[str]:
        """Get seasonal themes active hiện tại"""
        month = datetime.utcnow().month
        active = []
        for theme, config in self.SEASONAL_THEMES.items():
            if month in config["months"]:
                active.append(theme)
        return active

    def boost_seasonal(
        self,
        designs: list[TrendingDesign],
        design_tags: dict[str, DesignTags],
    ) -> list[TrendingDesign]:
        """Boost score cho designs match seasonal themes"""
        active_themes = self.get_current_themes()

        for design in designs:
            tags = design_tags.get(design.design_id)
            if not tags:
                continue

            for theme_name in active_themes:
                config = self.SEASONAL_THEMES[theme_name]
                # Check if design matches seasonal keywords
                design_keywords = [
                    t.label.lower()
                    for t in (tags.theme + tags.style)
                ]
                matches = set(design_keywords) & set(config["keywords"])
                if matches:
                    design.score *= 1.5  # 50% boost

        return designs
```

---

## 4. Content Moderation

```python
class ContentModerator:
    """AI-powered content moderation"""

    def __init__(self):
        self.nsfw_detector = NSFWDetector()
        self.text_scanner = TextScanner()

    async def moderate(
        self, image: Image.Image
    ) -> ModerationResult:
        # Run all checks in parallel
        nsfw_result = await self.nsfw_detector.check(image)
        text_result = await self.text_scanner.scan(image)

        # Combine results
        issues = []
        if nsfw_result.is_nsfw:
            issues.append(ModerationIssue(
                type="nsfw",
                severity="block",
                detail=nsfw_result.category,
            ))

        if text_result.has_violations:
            for violation in text_result.violations:
                issues.append(ModerationIssue(
                    type="text_violation",
                    severity=violation.severity,
                    detail=violation.text,
                ))

        return ModerationResult(
            is_approved=len(issues) == 0,
            issues=issues,
            nsfw_score=nsfw_result.score,
        )


class NSFWDetector:
    """Detect NSFW content in designs"""

    def __init__(self):
        self.model = self._load_model()

    def _load_model(self):
        from transformers import pipeline
        return pipeline(
            "image-classification",
            model="Falconsai/nsfw_image_detection",
            device=0 if torch.cuda.is_available() else -1,
        )

    async def check(self, image: Image.Image) -> NSFWResult:
        results = self.model(image)

        nsfw_score = 0.0
        for result in results:
            if result["label"] == "nsfw":
                nsfw_score = result["score"]

        return NSFWResult(
            score=nsfw_score,
            is_nsfw=nsfw_score > 0.8,
            category="explicit" if nsfw_score > 0.9 else "suggestive",
        )


class TextScanner:
    """Scan text in designs cho violations"""

    BLOCKED_PATTERNS = [
        r"(?i)\b(trademark|©|®|™)\b",
        # Brand names that shouldn't appear on designs
        r"(?i)\b(nike|adidas|gucci|louis vuitton)\b",
    ]

    async def scan(self, image: Image.Image) -> TextScanResult:
        import easyocr
        reader = easyocr.Reader(["en", "vi"])
        results = reader.readtext(np.array(image))

        text = " ".join([r[1] for r in results])

        violations = []
        for pattern in self.BLOCKED_PATTERNS:
            matches = re.findall(pattern, text)
            if matches:
                violations.append(TextViolation(
                    text=matches[0],
                    severity="block" if "trademark" in pattern else "review",
                ))

        return TextScanResult(
            detected_text=text,
            has_violations=len(violations) > 0,
            violations=violations,
        )
```

---

## 5. Moderation Workflow

```python
@app.post("/api/v1/designs/upload")
async def upload_design(file: UploadFile):
    image = Image.open(file.file)

    # 1. Content moderation
    moderation = await moderator.moderate(image)

    if not moderation.is_approved:
        blocking = [i for i in moderation.issues if i.severity == "block"]
        if blocking:
            return {
                "status": "rejected",
                "reasons": [i.detail for i in blocking],
            }

        # Queue for manual review
        await queue_for_review(image, moderation.issues)
        return {"status": "pending_review"}

    # 2. Auto-tag
    tags = await auto_tagger.tag_design(image)

    # 3. Proceed to product creation
    return {"status": "approved", "tags": tags}
```

---

## Tổng kết

Trending Detection & Content Moderation:

1. **Trending score** — weighted events × exponential decay
2. **Velocity** — acceleration detection (trending up/down)
3. **Seasonal boost** — calendar-based theme matching
4. **NSFW detection** — image classification model
5. **Text scanning** — OCR + blocked pattern matching
6. **Moderation workflow** — auto-approve / queue review / reject

Bài tiếp theo (cuối cùng): **Production Deployment — MLOps Pipeline & GPU Scaling**.
