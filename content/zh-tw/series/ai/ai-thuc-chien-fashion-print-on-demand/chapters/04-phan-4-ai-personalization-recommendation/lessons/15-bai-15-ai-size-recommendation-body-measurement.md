---
id: 019d8b30-bb15-7015-c015-f0c4e8000015
title: 第十五課：AI尺寸推薦－從身體測量到尺寸預測
slug: bai-15-ai-size-recommendation-body-measurement
description: ML 模型根據身高、體重、身體比例來預測尺寸。多款推薦（M 常規款、L 超大款）。訓練資料收集、模型評估和 A/B 測試。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 第 4 部分：AI 個性化與推薦
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 人工智慧在行動：建構時尚和按需印刷的人工智慧平台
  slug: ai-thuc-chien-fashion-print-on-demand
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5112" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5112)"/>

  <!-- Decorations -->
  <g>
    <circle cx="712" cy="66" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="824" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="936" cy="90" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="1048" cy="102" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="660" cy="114" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="226" x2="1100" y2="306" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="256" x2="1050" y2="326" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1061.507041555162,205.5 1061.507041555162,246.5 1026,267 990.492958444838,246.5 990.492958444838,205.5 1026,185" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第15課：AI尺寸推薦－身體</tspan>
      <tspan x="60" dy="42">測量到尺寸預測</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧在行動：建構時尚和按需印刷的人工智慧平台</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：AI 個性化與推薦</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

使用者輸入 172 公分/70 公斤，AI 必須建議：**M 常規** 或 **L 超大**。尺寸推薦可降低退貨率（對於 POD 很重要，因為客製化設計無法更換）。本文建構了一個用於尺寸預測的 ML 模型。

---

## 1. 輸入選項

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

## 2.尺寸表資料模型

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

## 3. 用於尺寸預測的 ML 模型

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

## 4. 多重適配推薦

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

## 5.回饋循環

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

## 總結

AI尺寸推薦：

1. **多輸入** — 基本身高/體重、詳細測量數據或照片
2. **ML 模型** — 具有特徵工程的 GradientBoosting
3. **多款** — 推薦常規碼和超大碼
4. **估計** — 估計身高/體重中缺少的測量值
5. **回饋循環** - 從返回/交換資料重新訓練

下一課開始**第 5 部分：虛擬試穿** — 身體估計和 3D 頭像。
