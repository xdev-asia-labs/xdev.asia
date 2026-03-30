---
id: 019d8b30-bb16-7016-c016-f0c4e8000016
title: 'Bài 16: Body Estimation — Dự đoán Body Shape từ Ảnh & Số đo'
slug: bai-16-body-estimation-du-doan-body-shape
description: >-
  Input processing: height/weight → body estimate, detailed
  measurements (chest/waist/shoulder), hoặc ảnh người thật.
  MediaPipe Pose, OpenPose, SMPL body model.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 5: Virtual Try-On & Computer Vision"
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: "AI Thực Chiến: Xây dựng AI Platform cho Fashion & Print-on-Demand"
  slug: ai-thuc-chien-fashion-print-on-demand
---

## Giới thiệu

Virtual Try-On bắt đầu từ **hiểu body shape của user**. Bài này cover 3 phương pháp input body data — từ đơn giản nhất (height/weight) đến chính xác nhất (upload ảnh) — và cách convert tất cả thành 3D body parameters.

---

## 1. Three Input Modes

```
Mode 1: Basic Measurements (accuracy: ~70%)
├── Input: height (cm), weight (kg)
├── Process: Statistical regression → body shape params
└── Output: Estimated SMPL β parameters

Mode 2: Detailed Measurements (accuracy: ~85%)
├── Input: height, weight, chest, waist, shoulder
├── Process: Direct mapping → body shape params
└── Output: Accurate SMPL β parameters

Mode 3: Photo-based (accuracy: ~90%)
├── Input: 1-2 photos (front + side)
├── Process: Pose detection → body shape regression
└── Output: Precise SMPL β parameters + pose
```

---

## 2. Mode 1 — Statistical Body Estimation

```python
class BasicBodyEstimator:
    """Estimate body shape từ height/weight"""

    # Regression coefficients (trained trên body scan dataset)
    BODY_RATIOS = {
        "male": {
            "chest": lambda h, bmi: 76 + bmi * 1.3 + (h - 170) * 0.15,
            "waist": lambda h, bmi: 62 + bmi * 1.8 + (h - 170) * 0.1,
            "shoulder": lambda h, bmi: h * 0.256 + bmi * 0.1,
            "hip": lambda h, bmi: 80 + bmi * 1.0 + (h - 170) * 0.1,
            "arm_length": lambda h, bmi: h * 0.44,
            "torso_length": lambda h, bmi: h * 0.30,
        },
        "female": {
            "chest": lambda h, bmi: 72 + bmi * 1.1 + (h - 160) * 0.12,
            "waist": lambda h, bmi: 56 + bmi * 1.6 + (h - 160) * 0.08,
            "shoulder": lambda h, bmi: h * 0.238 + bmi * 0.08,
            "hip": lambda h, bmi: 82 + bmi * 1.4 + (h - 160) * 0.12,
            "arm_length": lambda h, bmi: h * 0.43,
            "torso_length": lambda h, bmi: h * 0.29,
        },
    }

    def estimate(
        self,
        height_cm: float,
        weight_kg: float,
        gender: str = "neutral",
    ) -> BodyMeasurements:
        bmi = weight_kg / (height_cm / 100) ** 2

        if gender == "neutral":
            # Average male & female
            male = self._compute("male", height_cm, bmi)
            female = self._compute("female", height_cm, bmi)
            measurements = {
                k: (male[k] + female[k]) / 2
                for k in male
            }
        else:
            measurements = self._compute(gender, height_cm, bmi)

        return BodyMeasurements(
            height=height_cm,
            weight=weight_kg,
            **measurements,
            estimation_method="basic",
            confidence=0.7,
        )

    def _compute(
        self, gender: str, height: float, bmi: float
    ) -> dict:
        ratios = self.BODY_RATIOS[gender]
        return {
            key: round(func(height, bmi), 1)
            for key, func in ratios.items()
        }
```

---

## 3. Mode 2 — Detailed Measurements

```python
class DetailedBodyMapper:
    """Map chi tiết measurements sang SMPL parameters"""

    def map_to_smpl(
        self, measurements: BodyMeasurements
    ) -> SMPLParams:
        """
        Convert body measurements → SMPL β parameters

        SMPL uses 10 shape parameters (β) that control:
        β[0]: overall body size (height)
        β[1]: weight/mass
        β[2]: chest-to-waist ratio
        β[3]: shoulder width
        β[4]: hip width
        β[5-9]: finer shape details
        """
        # Normalize measurements
        norm = self._normalize(measurements)

        # Linear mapping to β parameters
        # (trained via regression on CAESAR dataset)
        betas = np.array([
            norm.height * 2.5 - 4.2,        # β0: height
            norm.bmi * 1.8 - 2.0,            # β1: mass
            norm.chest_waist_ratio * 1.2,     # β2: proportions
            norm.shoulder * 0.8 - 1.0,        # β3: shoulders
            norm.hip * 0.6 - 0.5,             # β4: hips
            0, 0, 0, 0, 0,                    # β5-9: default
        ], dtype=np.float32)

        return SMPLParams(
            betas=betas,
            gender=measurements.gender or "neutral",
            confidence=0.85,
        )
```

---

## 4. Mode 3 — Photo-based Body Estimation

```python
import mediapipe as mp
import numpy as np
from PIL import Image

class PhotoBodyEstimator:
    """Estimate body từ 1-2 ảnh user"""

    def __init__(self):
        self.mp_pose = mp.solutions.pose
        self.pose = self.mp_pose.Pose(
            static_image_mode=True,
            model_complexity=2,
            min_detection_confidence=0.5,
        )

    def estimate_from_photo(
        self,
        front_photo: Image.Image,
        side_photo: Image.Image | None = None,
        known_height: float | None = None,
    ) -> BodyMeasurements:
        # 1. Detect pose landmarks
        front_landmarks = self._detect_landmarks(front_photo)

        # 2. Calculate proportions from landmarks
        proportions = self._calculate_proportions(
            front_landmarks
        )

        # 3. If side photo, improve depth estimation
        if side_photo:
            side_landmarks = self._detect_landmarks(side_photo)
            proportions = self._refine_with_side(
                proportions, side_landmarks
            )

        # 4. Convert proportions to measurements
        if known_height:
            scale = known_height / proportions["body_height_ratio"]
        else:
            scale = 170  # Default height assumption

        measurements = self._proportions_to_measurements(
            proportions, scale
        )

        return measurements

    def _detect_landmarks(
        self, photo: Image.Image
    ) -> dict:
        """Detect 33 pose landmarks"""
        img_array = np.array(photo.convert("RGB"))
        results = self.pose.process(img_array)

        if not results.pose_landmarks:
            raise ValueError("Không phát hiện được người trong ảnh")

        landmarks = {}
        for idx, lm in enumerate(results.pose_landmarks.landmark):
            name = self.mp_pose.PoseLandmark(idx).name
            landmarks[name] = {
                "x": lm.x, "y": lm.y, "z": lm.z,
                "visibility": lm.visibility,
            }
        return landmarks

    def _calculate_proportions(
        self, landmarks: dict
    ) -> dict:
        """Tính body proportions từ landmarks"""
        # Shoulder width
        l_shoulder = landmarks["LEFT_SHOULDER"]
        r_shoulder = landmarks["RIGHT_SHOULDER"]
        shoulder_width = abs(l_shoulder["x"] - r_shoulder["x"])

        # Hip width
        l_hip = landmarks["LEFT_HIP"]
        r_hip = landmarks["RIGHT_HIP"]
        hip_width = abs(l_hip["x"] - r_hip["x"])

        # Torso length
        mid_shoulder_y = (l_shoulder["y"] + r_shoulder["y"]) / 2
        mid_hip_y = (l_hip["y"] + r_hip["y"]) / 2
        torso_length = abs(mid_hip_y - mid_shoulder_y)

        # Body height (top of head to ankles)
        nose = landmarks.get("NOSE", landmarks["LEFT_EAR"])
        l_ankle = landmarks["LEFT_ANKLE"]
        body_height = abs(l_ankle["y"] - nose["y"])

        return {
            "shoulder_width": shoulder_width,
            "hip_width": hip_width,
            "torso_length": torso_length,
            "body_height_ratio": body_height,
            "shoulder_hip_ratio": shoulder_width / max(hip_width, 0.01),
        }
```

---

## 5. Unified Body Pipeline

```python
class BodyEstimationPipeline:
    """Pipeline thống nhất cho 3 modes"""

    def __init__(self):
        self.basic = BasicBodyEstimator()
        self.detailed = DetailedBodyMapper()
        self.photo = PhotoBodyEstimator()

    async def estimate(
        self,
        height: float | None = None,
        weight: float | None = None,
        chest: float | None = None,
        waist: float | None = None,
        shoulder: float | None = None,
        front_photo: Image.Image | None = None,
        side_photo: Image.Image | None = None,
    ) -> BodyEstimationResult:
        # Determine best mode
        if front_photo:
            measurements = self.photo.estimate_from_photo(
                front_photo, side_photo, known_height=height
            )
            smpl_params = self.detailed.map_to_smpl(measurements)
        elif chest and waist and shoulder:
            measurements = BodyMeasurements(
                height=height, weight=weight,
                chest=chest, waist=waist, shoulder=shoulder,
            )
            smpl_params = self.detailed.map_to_smpl(measurements)
        elif height and weight:
            measurements = self.basic.estimate(height, weight)
            smpl_params = self.detailed.map_to_smpl(measurements)
        else:
            raise ValueError("Cần ít nhất height + weight")

        return BodyEstimationResult(
            measurements=measurements,
            smpl_params=smpl_params,
        )
```

---

## Tổng kết

Body Estimation module:

1. **3 input modes** — basic (height/weight), detailed (measurements), photo
2. **Statistical estimation** — regression từ BMI & height
3. **MediaPipe Pose** — 33 landmarks từ ảnh người thật
4. **SMPL mapping** — convert measurements → 10 β parameters
5. **Unified pipeline** — auto-select best mode dựa trên available data

Bài tiếp theo: **3D Avatar Generation** — tạo avatar từ SMPL parameters.
