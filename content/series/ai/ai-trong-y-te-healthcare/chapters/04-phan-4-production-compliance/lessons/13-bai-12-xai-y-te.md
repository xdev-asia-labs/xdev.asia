---
id: 019d8b33-bb12-7012-c012-ee1200000012
title: "Bài 12: Explainable AI (XAI) trong Y tế"
slug: bai-12-xai-y-te
description: >-
  SHAP, LIME cho medical models. Grad-CAM visualization. Attention maps. Clinical validation. Building trust với clinicians.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: Production & Compliance"
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: "AI trong Y tế & Healthcare: Ứng dụng Thực chiến"
  slug: ai-trong-y-te-healthcare
---

> "Bác sĩ không hỏi CNN tại sao nó học như vậy. Nhưng họ cần biết tại sao nó đưa ra quyết định này." — Explainability là điều kiện bắt buộc cho medical AI deployment.

---

## 1. Tại sao Explainability Quan trọng hơn trong Y tế?

| Tình huống | Hậu quả nếu thiếu XAI |
|-----------|----------------------|
| AI dương tính ung thư | Bác sĩ không biết tại sao → không tin tưởng |
| AI âm tính ung thư | Bác sĩ lo ngại bỏ sót → vẫn làm thêm xét nghiệm |
| AI sai vì shortcut | AI học artifact, không phải disease pattern |
| Regulatory submission | FDA yêu cầu evidence of transparency |

**Clever Hans Effect trong Medical AI**: Model học các spurious correlations:
- Chest X-ray model học nhãn bệnh viện, không phải bệnh lý
- Skin lesion model học ruler marks = melanoma
- Pneumonia model học hospital (Pittsburgh =  "no pneumonia")

---

## 2. Grad-CAM (đã học ở Bài 4) — Tổng kết

Grad-CAM (Class Activation Mapping) cho image models:
1. Forward pass → predictions
2. Backprop gradient of target class → vào last conv layer
3. Global average pool gradients → importance weights
4. Weighted sum of feature maps → heatmap

Hạn chế: chỉ cho CNNs, chỉ explainable at feature map resolution.

---

## 3. SHAP — Unified Framework cho Tabular Data

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

## 4. LIME cho Black-box Models

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

## 5. Clinical Validation của Explanations

Sau khi build XAI, cần **clinical validation**:

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

## 6. Bài tập

1. Train XGBoost trên MIMIC-III sepsis prediction. Tạo SHAP waterfall plots cho 10 patients. Hỏi 2 bác sĩ: explanations có hợp lý không? (Plausibility score).

2. Implement Faithfulness test: với top-3 SHAP features, mask chúng (replace với mean) và đo độ giảm prediction confidence.

3. So sánh SHAP vs LIME trên cùng 1 patient: độ nhất quán của top features? Stability test: chạy LIME 10 lần, đo variance của feature weights.

**Bài 13**: FDA Regulatory — đưa AI vào thực tế lâm sàng.
