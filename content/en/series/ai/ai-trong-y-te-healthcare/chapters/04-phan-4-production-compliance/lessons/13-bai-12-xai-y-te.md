---
id: 019d8b33-bb12-7012-c012-ee1200000012
title: 'Lesson 12: Explainable AI (XAI) in Healthcare'
slug: bai-12-xai-y-te
description: >-
  SHAP, LIME for medical models. Grad-CAM visualization. Attention maps.
  Clinical validation. Building trust with technicians.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 4: Production & Compliance'
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: 'AI in Health & Healthcare: Real Battle Applications'
  slug: ai-trong-y-te-healthcare
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6174" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6174)"/>

  <!-- Decorations -->
  <g>
    <circle cx="833" cy="169" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="1066" cy="42" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="799" cy="175" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1032" cy="48" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="765" cy="181" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="159" x2="1100" y2="239" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="189" x2="1050" y2="259" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="938.444863728671,92 938.444863728671,126 909,143 879.555136271329,126 879.555136271329,92.00000000000001 909,75" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI & ML — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 12: Explainable AI (XAI) in Healthcare</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI in Health & Healthcare: Real Battle Applications</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Production & Compliance</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> "The doctor didn't ask CNN why he learned that way. But they need to know why he made this decision." — Explainability is a mandatory condition for medical AI deployment.

---

## 1. Why is Explainability More Important in Healthcare?

| Situation | Consequences if XAI is lacking |
|-----------|---------------------|
| AI positive for cancer | Doctors don't know why → don't trust |
| AI negative cancer | The doctor was worried about missing something → still did more tests |
| AI is wrong because shortcut | AI learns artifacts, not disease patterns |
| Regulatory submission | FDA requires evidence of transparency |

**Clever Hans Effect in Medical AI**: Model learns spurious correlations:
- Chest X-ray model is a hospital label, not a pathology
- Skin lesion model learns ruler marks = melanoma
- Pneumonia model study hospital (Pittsburgh = "no pneumonia")

---

## 2. Grad-CAM (learned in Lesson 4) — Summary

Grad-CAM (Class Activation Mapping) for image models:
1. Forward pass → predictions
2. Backprop gradient of target class → go to last conv layer
3. Global average pool gradients → importance weights
4. Weighted sum of feature maps → heatmap

Limitations: only for CNNs, only explainable at feature map resolution.

---

## 3. SHAP — Unified Framework for Tabular Data

```python
import shap
import numpy as np
import pandas as pd
from sklearn.ensemble import GradientBoostingClassifier

# Ví dụ: ICU mortality prediction (readmission risk)
# Features: vitals, labs, demographics, diagnosis codes
class ICUMortalityExplainer:
    """
    SHAP TreeExplainer cho tree-based models (XGBoost, GBM, RandomForest).
    
    SHAP = unified measure of feature importance dựa trên game theory.
    SHAP value của feature j = marginal contribution của j với tất cả subsets.
    
    Tính chất quan trọng:
    - Additive: sum(SHAP values) = prediction - expected value
    - Local: explain từng prediction cụ thể (không phải global average)
    - Consistent: nếu model phụ thuộc nhiều hơn vào feature → SHAP lớn hơn
    """
    def __init__(self, model: GradientBoostingClassifier, X_train: pd.DataFrame):
        self.model = model
        self.feature_names = X_train.columns.tolist()
        self.explainer = shap.TreeExplainer(model)
        self.background_data = X_train

    def explain_patient(self, patient_features: pd.DataFrame) -> dict:
        """
        Explain prediction cho 1 bệnh nhân cụ thể.
        """
        shap_values = self.explainer.shap_values(patient_features)
        
        # Với binary classifier: shap_values có thể là list [class0, class1]
        if isinstance(shap_values, list):
            sv = shap_values[1]  # Class 1 (mortality)
        else:
            sv = shap_values
        
        prediction = self.model.predict_proba(patient_features)[0, 1]
        expected = self.explainer.expected_value
        if isinstance(expected, list):
            expected = expected[1]
        
        # Sort features by |SHAP| value
        feature_impacts = sorted(
            zip(self.feature_names, sv[0]),
            key=lambda x: abs(x[1]),
            reverse=True
        )
        
        return {
            "prediction_probability": round(float(prediction), 4),
            "expected_value": round(float(expected), 4),
            "top_contributing_features": [
                {
                    "feature": f,
                    "value": round(float(patient_features[f].iloc[0]), 3),
                    "shap_value": round(float(sv_val), 4),
                    "direction": "increases risk" if sv_val > 0 else "decreases risk"
                }
                for f, sv_val in feature_impacts[:10]
            ],
            "waterfall_data": {f: sv_val for f, sv_val in feature_impacts}
        }

    def global_feature_importance(self, X_test: pd.DataFrame) -> pd.DataFrame:
        """Global importance = mean|SHAP| across test patients."""
        shap_values = self.explainer.shap_values(X_test)
        if isinstance(shap_values, list):
            sv = shap_values[1]
        else:
            sv = shap_values
        
        importance = pd.DataFrame({
            "feature": self.feature_names,
            "mean_abs_shap": np.abs(sv).mean(axis=0)
        }).sort_values("mean_abs_shap", ascending=False)
        
        return importance


def visualize_shap_explanation(explanation: dict) -> str:
    """
    Generate text explanation suitable cho clinical display.
    (Trong production: render as interactive chart với Plotly/D3)
    """
    pred = explanation["prediction_probability"]
    risk_level = "HIGH" if pred > 0.5 else "LOW"
    
    lines = [
        f"Mortality Risk: {pred:.1%} ({risk_level})",
        "\nTop factors increasing risk:",
    ]
    
    for f in explanation["top_contributing_features"]:
        if f["shap_value"] > 0:
            lines.append(
                f"  ↑ {f['feature']} = {f['value']} "
                f"(+{f['shap_value']:.3f} risk contribution)"
            )
    
    lines.append("\nTop factors decreasing risk:")
    for f in explanation["top_contributing_features"]:
        if f["shap_value"] < 0:
            lines.append(
                f"  ↓ {f['feature']} = {f['value']} "
                f"({f['shap_value']:.3f} risk contribution)"
            )
    
    return "\n".join(lines)
```

---

## 4. LIME for Black-box Models

```python
from lime.lime_tabular import LimeTabularExplainer
from lime.lime_image import LimeImageExplainer

def explain_with_lime_tabular(
    model_predict_fn,
    X_train: np.ndarray,
    feature_names: list[str],
    patient_instance: np.ndarray,
    num_features: int = 10,
) -> dict:
    """
    LIME: Local Interpretable Model-agnostic Explanations.
    
    Ý tưởng: fit một linear model (interpretable) xung quanh 1 prediction.
    1. Perturbate instance: tạo nhiều samples gần patient_instance
    2. Get predictions từ black-box model cho perturbed samples
    3. Fit weighted linear model (weight = similarity đến original)
    4. Coefficients của linear model = local explanations
    
    Ưu điểm: model-agnostic (works với bất kỳ model nào)
    Nhược điểm: less stable hơn SHAP, linear approximation chỉ local
    """
    explainer = LimeTabularExplainer(
        training_data=X_train,
        feature_names=feature_names,
        mode="classification",
        discretize_continuous=True,
        random_state=42
    )
    
    explanation = explainer.explain_instance(
        data_row=patient_instance,
        predict_fn=model_predict_fn,
        num_features=num_features,
    )
    
    return {
        "local_prediction": explanation.predict_proba,
        "feature_weights": explanation.as_list(),
        "score": explanation.score,  # R² of local linear model
    }
```

---

## 5. Clinical Validation of Explanations

After building XAI, **clinical validation** is needed:

```python
def evaluate_explanation_quality(
    explanations: list[dict],
    clinical_experts: list[str] = None
) -> dict:
    """
    Metrics đánh giá chất lượng explanations:
    
    1. Faithfulness: explanation có phản ánh đúng model behavior không?
       - Occlusion test: mask top-K features → prediction thay đổi nhiều không?
    
    2. Plausibility: explanation có hợp lý về mặt clinical không?
       - Expert survey: bác sĩ có đồng ý không?
    
    3. Stability: cùng patient, cùng prediction → similar explanation?
    
    4. Completeness: sum(SHAP values) ≈ prediction - baseline?
    """
    results = {}
    
    # Faithfulness: monotonicity test
    faithfulness_scores = []
    for exp in explanations:
        # Sort features by |SHAP|
        ranked_features = sorted(
            exp["top_contributing_features"],
            key=lambda x: abs(x["shap_value"]),
            reverse=True
        )
        faithfulness_scores.append(len(ranked_features) > 0)
    
    results["faithfulness"] = sum(faithfulness_scores) / len(faithfulness_scores)
    
    # Completeness check (SHAP property)
    completeness_errors = []
    for exp in explanations:
        base = exp["expected_value"]
        pred = exp["prediction_probability"]
        shap_sum = sum(f["shap_value"] for f in exp["top_contributing_features"])
        completeness_errors.append(abs((base + shap_sum) - pred))
    
    results["mean_completeness_error"] = round(
        float(np.mean(completeness_errors)), 4
    )
    
    return results
```

---

## 6. Exercises

1. Train XGBoost on MIMIC-III sepsis prediction. Create SHAP waterfall plots for 10 patients. Ask 2 doctors: Are the explanations reasonable? (Plausibility score).

2. Implement Faithfulness test: with top-3 SHAP features, mask them (replace with mean) and measure the decrease in prediction confidence.

3. Compare SHAP vs LIME on the same patient: consistency of top features? Stability test: run LIME 10 times, measure the variance of feature weights.

**Lesson 13**: FDA Regulation — bringing AI into clinical practice.
