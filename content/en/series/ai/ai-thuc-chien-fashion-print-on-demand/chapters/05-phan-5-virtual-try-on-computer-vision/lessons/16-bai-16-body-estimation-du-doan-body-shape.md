---
id: 019d8b30-bb16-7016-c016-f0c4e8000016
title: 'Lesson 16: Body Estimation — Predicting Body Shape from Photos & Measurements'
slug: bai-16-body-estimation-du-doan-body-shape
description: >-
  Input processing: height/weight → body estimate, detailed measurements
  (chest/waist/shoulder), or real person photos. MediaPipe Pose, OpenPose, SMPL
  body model.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: 'Part 5: Virtual Try-On & Computer Vision'
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 'AI in Action: Building an AI Platform for Fashion & Print-on-Demand'
  slug: ai-thuc-chien-fashion-print-on-demand
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5338" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5338)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1027" cy="111" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="954" cy="138" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="881" cy="165" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="808" cy="192" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="219" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="221" x2="1100" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="251" x2="1050" y2="321" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.1769145362398,203 1052.1769145362398,239 1021,257 989.8230854637602,239 989.8230854637602,203 1021,185" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI & ML — Lesson 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 16: Body Estimation — Body Prediction</tspan>
      <tspan x="60" dy="42">Shape from Photos & Measurements</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI in Action: Building an AI Platform for Fashion & Print-on-Demand</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Virtual Try-On & Computer Vision</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Virtual Try-On starts from **understanding the user's body shape**. This article covers three body data input methods — from the simplest (height/weight) to the most precise (uploading images) — and how to convert them all into 3D body parameters.

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

## Summary

Body Estimation module:

1. **3 input modes** — basic (height/weight), detailed (measurements), photo
2. **Statistical estimation** — regression from BMI & height
3. **MediaPipe Pose** — 33 landmarks from real people photos
4. **SMPL mapping** — convert measurements → 10 β parameters
5. **Unified pipeline** — auto-select best mode based on available data

Next article: **3D Avatar Generation** — create avatars from SMPL parameters.
