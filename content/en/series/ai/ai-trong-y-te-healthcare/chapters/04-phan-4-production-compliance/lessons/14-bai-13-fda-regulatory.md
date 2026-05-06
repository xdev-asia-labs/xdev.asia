---
id: 019d8b33-bb13-7013-c013-ee1300000013
title: 'Lesson 13: FDA & Regulatory Compliance for AI Medical Devices'
slug: bai-13-fda-regulatory
description: >-
  FDA 510(k) and De Novo pathway. SaMD classification. Clinical validation
  requirements. Post-market surveillance. EU MDR/AI Act.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: 'Part 4: Production & Compliance'
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: 'AI in Health & Healthcare: Real Battle Applications'
  slug: ai-trong-y-te-healthcare
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7171" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7171)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1054" cy="32" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="1008" cy="206" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="962" cy="120" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="916" cy="34" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="870" cy="208" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="192" x2="1100" y2="272" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="222" x2="1050" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1065.38268590218,228.5 1065.38268590218,255.5 1042,269 1018.6173140978201,255.5 1018.6173140978201,228.5 1042,215" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI & ML — Lesson 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 13: FDA & Regulatory Compliance for AI</tspan>
      <tspan x="60" dy="42">Medical Devices</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI in Health & Healthcare: Real Battle Applications</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Production & Compliance</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> "Building a good model is only 10% of the job. The remaining 90% is regulatory, clinical validation, and deployment." — The reality of the medical AI industry.

---

## 1. SaMD — Software as a Medical Device

The FDA defines **SaMD** as:
> Software intended to be used for one or more medical purposes that performs these purposes without being part of a hardware medical device.

**AI/ML model used to support diagnosis = SaMD.**

### Risk Classification Matrix

| SaMD Class | Patient Risk | FDA Pathway | Example |
|-----------|-------------|-------------|-------|
| Class I | Low | 510(k) exempt or expedited | Basic heart rate monitoring |
| Class II | Average | 510(k) or De Novo | AI detect diabetic retinopathy |
| Class III | Cao | PMA (Pre-Market Approval) | AI controls insulin pump |

**Rules for determining Class:**
```
Healthcare situation severity × Significance of information

CRITICAL × CRITICAL = Class III (highest, PMA)
CRITICAL × SERIOUS = Class III
SERIOUS × CRITICAL = Class III
SERIOUS × SERIOUS = Class IIb (De Novo)
NON-SERIOUS × any = Class I/IIa (510k)
```

---

## 2. FDA 510(k) Pathway — Details

**510(k)** = Premarket Notification. Requires proof of **substantial equivalence** with predicate device.

```python
# Tài liệu cần chuẩn bị cho 510(k) AI/ML:
SUBMISSION_CHECKLIST = {
    "device_description": [
        "Software architecture diagram",
        "Training data description (source, size, demographics)",
        "Algorithm description (model type, hyperparameters)",
        "Intended use statement",
        "Contraindications and limitations",
    ],
    "performance_testing": [
        "Standalone performance: sensitivity, specificity, AUC",
        "Sub-group analysis: age, sex, race, disease severity",
        "Comparison to predicate device",
        "Clinical study: reader study with radiologists",
    ],
    "cybersecurity": [
        "SBOM (Software Bill of Materials)",
        "Threat modeling",
        "Security testing results",
        "Patch management plan",
    ],
    "ai_ml_specific": [
        "Predetermined change control plan (PCCP)",  # FDA 2023
        "Algorithmic fairness analysis",
        "Training/validation/test data split methodology",
        "Distributional shift analysis",
    ]
}
```

### 2.1. Reader Study Design (Crucial for 510k)

```python
from scipy import stats
import numpy as np

def reader_study_analysis(
    ai_sensitivities: list[float],
    ai_specificities: list[float],
    reader_sensitivities: list[float],
    reader_specificities: list[float]
):
    """
    FDA yêu cầu Non-Inferiority Study:
    AI performance >= Radiologist performance - non-inferiority margin
    
    Typical margin: 5% for sensitivity (không thể miss nhiều hơn 5% so với radiologist)
    
    Thiết kế: Multi-reader Multi-case (MRMC)
    - N cases (200-500+ cho rare disease)
    - M readers (5-10 radiologists)
    - AI vs readers (paired comparison)
    """
    # Non-inferiority test cho sensitivity
    ni_margin = 0.05  # 5% non-inferiority margin
    
    mean_ai_sens = np.mean(ai_sensitivities)
    mean_reader_sens = np.mean(reader_sensitivities)
    
    # Compare distributions
    t_stat, p_value = stats.ttest_ind(
        ai_sensitivities, reader_sensitivities,
        alternative='greater'  # H1: AI >= Reader - margin
    )
    
    # 95% confidence interval
    diff = mean_ai_sens - mean_reader_sens
    se = np.std(np.array(ai_sensitivities) - np.array(reader_sensitivities)) / np.sqrt(len(ai_sensitivities))
    ci_lower = diff - 1.96 * se
    ci_upper = diff + 1.96 * se
    
    non_inferior = ci_lower > -ni_margin
    
    return {
        "ai_mean_sensitivity": round(mean_ai_sens, 4),
        "reader_mean_sensitivity": round(mean_reader_sens, 4),
        "difference": round(diff, 4),
        "ci_95_lower": round(ci_lower, 4),
        "ci_95_upper": round(ci_upper, 4),
        "non_inferior": non_inferior,
        "p_value": round(p_value, 4),
        "conclusion": (
            "AI is non-inferior to radiologists" if non_inferior
            else "AI did not demonstrate non-inferiority"
        )
    }
```

---

## 3. Predetermined Change Control Plan (PCCP)

FDA 2023 guidance for AI/ML-based SaMD: allows model updates without full resubmission if:

```python
PCCP_REQUIREMENTS = {
    "description_of_modifications": {
        "algorithm_changes": "Retraining trên new data, same architecture",
        "performance_goals": {
            "sensitivity": ">= 85%",
            "specificity": ">= 90%",
            "auc": ">= 0.90",
        },
        "out_of_scope_changes": [
            "New intended use (cần submission mới)",
            "New patient population",
            "Architecture changes (same model family OK)",
        ]
    },
    "monitoring_protocol": {
        "real_world_performance_tracking": True,
        "drift_detection_metrics": ["PSI", "KS test", "performance drift"],
        "retrigger_training_conditions": [
            "AUC drops below 0.85 for 30 consecutive days",
            "Distribution shift PSI > 0.25",
        ],
        "hold_out_reference_dataset": "Lock 500-sample reference set for comparison"
    },
    "verification_and_validation": {
        "testing_on_new_data": True,
        "comparison_to_locked_reference_performance": True,
        "bias_analysis": ["sex", "age", "race", "disease_severity"],
    }
}
```

---

## 4. EU AI Act (2024) and Vietnam

### EU AI Act — High Risk AI Systems

```
Medical AI = HIGH RISK → nghĩa vụ nghiêm ngặt:

1. Risk Management System
2. Data Governance (quality, representativeness, documentation)
3. Technical Documentation
4. Transparency (người dùng biết đang dùng AI)
5. Human Oversight (bác sĩ vẫn có final decision)
6. Accuracy, Robustness, Cybersecurity
7. Conformity Assessment (CE marking)
```

### Vietnam — Legal framework 2024

```python
VN_REGULATORY_FRAMEWORK = {
    "primary_laws": [
        "Luật Khám chữa bệnh 2023 (Luật 15/2023/QH15)",
        "Nghị định hướng dẫn thiết bị y tế (2022)",
        "Thông tư về phần mềm y tế (Bộ Y tế)",
    ],
    "key_requirements": {
        "registration": "Đăng ký thiết bị y tế tại Cục Quản lý Dược",
        "clinical_approval": "Thử nghiệm lâm sàng tại Bệnh viện hạng I hoặc Trung ương",
        "data_protection": "Luật An ninh mạng 2018, Nghị định BVLCC",
        "ai_specific": "Chưa có luật riêng — áp dụng khung thiết bị y tế chung",
    },
    "timeline_estimate": "12-24 tháng cho sản phẩm AI y tế lần đầu",
}
```

---

## 5. Documentation Framework

```python
def generate_510k_summary_template(product_info: dict) -> str:
    """Generate FDA 510(k) Summary template."""
    return f"""
FDA 510(k) SUMMARY
==================

Device Name: {product_info.get('device_name')}
Applicant: {product_info.get('company')}
Date of Summary: {product_info.get('date')}

INDICATIONS FOR USE:
{product_info.get('indications_for_use')}

DEVICE DESCRIPTION:
Type: AI/ML-based Software as a Medical Device (SaMD)
Input: {product_info.get('input_description')}
Output: {product_info.get('output_description')}
Intended User: {product_info.get('intended_user')}

PREDICATE DEVICE(S):
{product_info.get('predicate_devices')}

SUMMARY OF PERFORMANCE TESTING:
Primary Analysis Population: {product_info.get('test_population')}
Sensitivity: {product_info.get('sensitivity')} (95% CI: {product_info.get('sens_ci')})
Specificity: {product_info.get('specificity')} (95% CI: {product_info.get('spec_ci')})
AUC: {product_info.get('auc')} (95% CI: {product_info.get('auc_ci')})

CONCLUSION:
{product_info.get('device_name')} is substantially equivalent to predicate device(s)
and is safe and effective for its intended use.
"""
```

---

## 6. Exercises

1. Classify the following 5 types of medical AI software according to SaMD class and determine the appropriate FDA pathway: (a) AI detect diabetic retinopathy, (b) AI triage COVID-19 CT, (c) AI dosing recommendation for chemotherapy, (d) AI wellness app counting steps, (e) AI predicting sepsis in ICU.

2. Designing a reader study for AI chest X-ray: number of cases needed, non-inferiority criteria, statistical analysis plan.

3. Draft a PCCP outline for the AI model you built in lesson 4.

**Lesson 14**: Deploy Medical AI — HIPAA-compliant, production-ready.
