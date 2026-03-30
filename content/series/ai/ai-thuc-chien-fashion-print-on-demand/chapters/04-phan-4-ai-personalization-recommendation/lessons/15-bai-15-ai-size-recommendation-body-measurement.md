---
id: 019d8b30-bb15-7015-c015-f0c4e8000015
title: 'Bài 15: AI Size Recommendation — Body Measurement to Size Prediction'
slug: bai-15-ai-size-recommendation-body-measurement
description: >-
  ML model dự đoán size từ height, weight, body ratio.
  Multi-fit recommendation (M regular, L oversize). Training
  data collection, model evaluation và A/B testing.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: AI Personalization & Recommendation"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

User nhập 172cm / 70kg, AI phải suggest: **M regular** hoặc **L oversize**. Size recommendation giảm tỷ lệ đổi trả (quan trọng cho POD vì design custom không thể đổi). Bài này xây dựng ML model cho size prediction.

---

## 1. Input Options

```
Option 1 — Basic (required):
├── height (cm)
└── weight (kg)

Option 2 — Enhanced:
├── height, weight
├── chest (cm)
├── waist (cm)
└── shoulder (cm)

Option 3 — Photo-based:
├── Upload ảnh người thật
└── AI estimate body measurements
    (→ feed vào model Option 2)
```

---

## 2. Size Chart Data Model

```python
SIZE_CHARTS = {
    "US_STANDARD": {
        "XS": {"chest": (81, 86), "waist": (66, 71), "weight": (45, 55)},
        "S":  {"chest": (86, 91), "waist": (71, 76), "weight": (55, 65)},
        "M":  {"chest": (91, 97), "waist": (76, 81), "weight": (65, 75)},
        "L":  {"chest": (97, 102), "waist": (81, 86), "weight": (75, 85)},
        "XL": {"chest": (102, 107), "waist": (86, 91), "weight": (85, 95)},
        "2XL":{"chest": (107, 112), "waist": (91, 97), "weight": (95, 110)},
    },
    "OVERSIZE": {
        "M":  {"chest": (97, 107), "waist": (81, 91), "weight": (60, 75)},
        "L":  {"chest": (107, 117), "waist": (86, 97), "weight": (70, 85)},
        "XL": {"chest": (117, 127), "waist": (91, 102), "weight": (80, 100)},
    },
}
```

---

## 3. ML Model cho Size Prediction

```python
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.model_selection import cross_val_score
import numpy as np

class SizeRecommendationModel:
    """ML model dự đoán size áo"""

    def __init__(self):
        self.model = GradientBoostingClassifier(
            n_estimators=200,
            max_depth=5,
            learning_rate=0.1,
            random_state=42,
        )
        self.scaler = StandardScaler()

    def train(self, X: np.ndarray, y: np.ndarray):
        """
        X: [height, weight, chest?, waist?, shoulder?, bmi]
        y: size label (XS, S, M, L, XL, 2XL)
        """
        # Feature engineering
        X_features = self._engineer_features(X)
        X_scaled = self.scaler.fit_transform(X_features)

        # Train
        self.model.fit(X_scaled, y)

        # Evaluate
        scores = cross_val_score(
            self.model, X_scaled, y, cv=5, scoring="accuracy"
        )
        print(f"CV Accuracy: {scores.mean():.3f} ± {scores.std():.3f}")

    def predict(
        self, height: float, weight: float,
        chest: float | None = None,
        waist: float | None = None,
        shoulder: float | None = None,
    ) -> SizeRecommendation:
        # Build feature vector
        features = self._build_features(
            height, weight, chest, waist, shoulder
        )
        features_scaled = self.scaler.transform([features])

        # Get probabilities for each size
        probs = self.model.predict_proba(features_scaled)[0]
        classes = self.model.classes_

        size_probs = dict(zip(classes, probs))

        # Recommend: best regular + best oversize
        regular_sizes = {k: v for k, v in size_probs.items()
                        if "oversize" not in k.lower()}
        oversize_sizes = self._map_to_oversize(size_probs)

        best_regular = max(regular_sizes, key=regular_sizes.get)
        best_oversize = max(oversize_sizes, key=oversize_sizes.get)

        return SizeRecommendation(
            primary=best_regular,
            primary_confidence=regular_sizes[best_regular],
            oversize=best_oversize,
            oversize_confidence=oversize_sizes[best_oversize],
            all_probabilities=size_probs,
        )

    def _engineer_features(self, X: np.ndarray) -> np.ndarray:
        """Tạo thêm features từ raw measurements"""
        height = X[:, 0]
        weight = X[:, 1]

        bmi = weight / (height / 100) ** 2
        height_weight_ratio = height / weight

        features = np.column_stack([
            X, bmi, height_weight_ratio
        ])
        return features

    def _build_features(
        self, height, weight, chest, waist, shoulder
    ) -> list:
        bmi = weight / (height / 100) ** 2
        hw_ratio = height / weight

        # Handle missing optional measurements
        chest = chest or self._estimate_chest(height, weight)
        waist = waist or self._estimate_waist(height, weight)
        shoulder = shoulder or self._estimate_shoulder(height, weight)

        return [
            height, weight, chest, waist, shoulder,
            bmi, hw_ratio
        ]

    def _estimate_chest(self, height: float, weight: float) -> float:
        """Ước tính vòng ngực từ height/weight"""
        bmi = weight / (height / 100) ** 2
        return 70 + bmi * 1.2  # Rough estimation

    def _estimate_waist(self, height: float, weight: float) -> float:
        bmi = weight / (height / 100) ** 2
        return 55 + bmi * 1.5

    def _estimate_shoulder(self, height: float, weight: float) -> float:
        return height * 0.255  # ~25.5% of height
```

---

## 4. Multi-Fit Recommendation

```python
@dataclass
class SizeRecommendation:
    primary: str                    # "M"
    primary_confidence: float       # 0.85
    oversize: str                   # "L"
    oversize_confidence: float      # 0.72
    all_probabilities: dict         # {"S": 0.05, "M": 0.85, ...}

    def to_display(self) -> dict:
        """Format cho frontend display"""
        return {
            "recommendations": [
                {
                    "size": self.primary,
                    "fit": "Regular fit",
                    "confidence": f"{self.primary_confidence:.0%}",
                    "description": "Vừa vặn theo body",
                },
                {
                    "size": self.oversize,
                    "fit": "Oversize fit",
                    "confidence": f"{self.oversize_confidence:.0%}",
                    "description": "Form rộng, thoải mái",
                },
            ],
            "size_chart": self.all_probabilities,
        }
```

---

## 5. Feedback Loop

```python
class SizeFeedbackLoop:
    """Học từ return/exchange data để cải thiện model"""

    async def record_feedback(
        self,
        user_id: str,
        ordered_size: str,
        fit_feedback: str,  # "too_small", "perfect", "too_large"
        exchanged_to: str | None,
    ):
        await self.feedback_store.insert({
            "user_id": user_id,
            "ordered_size": ordered_size,
            "fit_feedback": fit_feedback,
            "exchanged_to": exchanged_to,
            "user_measurements": await self.get_measurements(user_id),
        })

    async def retrain_model(self):
        """Retrain model khi đủ feedback data"""
        feedback_data = await self.feedback_store.get_all()

        # Convert feedback thành training labels
        # "perfect" → ordered_size là đúng
        # "too_small" → exchanged_to là đúng
        # "too_large" → exchanged_to là đúng

        X, y = self._prepare_training_data(feedback_data)
        self.model.train(X, y)
```

---

## Tổng kết

AI Size Recommendation:

1. **Multi-input** — height/weight cơ bản, measurements chi tiết, hoặc ảnh
2. **ML model** — GradientBoosting với feature engineering
3. **Multi-fit** — recommend cả regular và oversize
4. **Estimation** — ước tính measurements thiếu từ height/weight
5. **Feedback loop** — retrain từ return/exchange data

Bài tiếp theo bắt đầu **Phần 5: Virtual Try-On** — body estimation và 3D avatar.
