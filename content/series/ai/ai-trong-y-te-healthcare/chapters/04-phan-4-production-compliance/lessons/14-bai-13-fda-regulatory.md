---
id: 019d8b33-bb13-7013-c013-ee1300000013
title: "Bài 13: FDA & Regulatory Compliance cho AI Medical Devices"
slug: bai-13-fda-regulatory
description: >-
  FDA 510(k) và De Novo pathway. SaMD classification. Clinical validation requirements. Post-market surveillance. EU MDR/AI Act.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: Production & Compliance"
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: "AI trong Y tế & Healthcare: Ứng dụng Thực chiến"
  slug: ai-trong-y-te-healthcare
---

> "Xây dựng model tốt chỉ là 10% công việc. 90% còn lại là regulatory, clinical validation, và deployment." — Thực tế của medical AI industry.

---

## 1. SaMD — Software as a Medical Device

FDA định nghĩa **SaMD** là:
> Software intended to be used for one or more medical purposes that performs these purposes without being part of a hardware medical device.

**AI/ML model dùng để hỗ trợ chẩn đoán = SaMD.**

### Risk Classification Matrix

| SaMD Class | Patient Risk | FDA Pathway | Ví dụ |
|-----------|-------------|------------|-------|
| Class I | Thấp | 510(k) exempt hoặc nhanh | Theo dõi nhịp tim cơ bản |
| Class II | Trung bình | 510(k) hoặc De Novo | AI detect diabetic retinopathy |
| Class III | Cao | PMA (Pre-Market Approval) | AI điều khiển insulin pump |

**Quy tắc xác định Class:**
```
Healthcare situation severity × Significance of information

CRITICAL × CRITICAL = Class III (highest, PMA)
CRITICAL × SERIOUS = Class III
SERIOUS × CRITICAL = Class III
SERIOUS × SERIOUS = Class IIb (De Novo)
NON-SERIOUS × any = Class I/IIa (510k)
```

---

## 2. FDA 510(k) Pathway — Chi tiết

**510(k)** = Premarket Notification. Yêu cầu chứng minh **substantial equivalence** với predicate device.

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

FDA 2023 guidance cho AI/ML-based SaMD: cho phép update model mà không cần resubmit toàn bộ nếu:

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

## 4. EU AI Act (2024) và Việt Nam

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

### Việt Nam — Khung pháp lý 2024

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

## 6. Bài tập

1. Phân loại 5 loại medical AI software sau theo SaMD class và xác định FDA pathway phù hợp: (a) AI detect diabetic retinopathy, (b) AI triage COVID-19 CT, (c) AI dosing recommendation cho chemotherapy, (d) AI wellness app đếm bước chân, (e) AI predict sepsis trong ICU.

2. Thiết kế reader study cho AI X-quang phổi: số lượng cases cần thiết, tiêu chí non-inferiority, statistical analysis plan.

3. Draft một PCCP outline cho model AI bạn đã xây dựng ở bài 4.

**Bài 14**: Deploy Medical AI — HIPAA-compliant, production-ready.
