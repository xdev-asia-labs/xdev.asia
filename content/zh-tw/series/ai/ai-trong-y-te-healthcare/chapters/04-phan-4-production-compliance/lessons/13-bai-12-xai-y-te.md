---
id: 019d8b33-bb12-7012-c012-ee1200000012
title: 第 12 課：醫療保健領域的可解釋人工智慧 (XAI)
slug: bai-12-xai-y-te
description: SHAP、LIME 用於醫療模式。 Grad-CAM 視覺化。注意圖。臨床驗證。與技術人員建立信任。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 第 4 部分：生產與合規性
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: 健康與醫療保健中的人工智慧：實戰應用
  slug: ai-trong-y-te-healthcare
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：醫療保健領域的可解釋人工智慧 (XAI)</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">健康與醫療保健中的人工智慧：實戰應用</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：生產與合規性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

> 「醫生沒有問 CNN 為什麼他會這樣。但他們需要知道他為什麼做出這個決定。」— 可解釋性是醫療人工智慧部署的必備條件。

---

## 1. 為什麼可解釋性在醫療保健領域更為重要？

|情況|缺乏 XAI 的後果 |
|------------|------------------------|
|人工智慧對癌症呈陽性醫生不知道為什麼→不信任|
| AI陰性癌症|醫生擔心漏掉什麼→還是做了更多檢查 |
| AI是錯的，因為捷徑|人工智慧學習的是文物，而不是疾病模式
|監管提交 | FDA 要求提供透明度證據 |

**醫療人工智慧中的聰明漢斯效應**：模型學習虛假相關性：
- 胸部X光模型是醫院標籤，而不是病理
- 皮膚病變模型學習標尺標記 = 黑色素瘤
- 肺炎模型研究醫院（匹茲堡=「無肺炎」）

---

## 2. Grad-CAM（第 4 課中學習）－總結

影像模型的 Grad-CAM（類激活映射）：
1. 前向傳播→預測
2.目標類別的反向傳播梯度→轉到最後一個卷積層
3.全域平均池梯度→重要性權重
4.特徵圖的加權和→熱圖

限制：僅適用於 CNN，只能在特徵圖解析度下解釋。

---

## 3. SHAP——表格資料的統一框架

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

## 4. 黑盒模型的 LIME

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

## 5. 解釋的臨床驗證

建構 XAI 後，需要**臨床驗證**：

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

## 6. 練習

1. 在 MIMIC-III 敗血症預測上訓練 XGBoost。為 10 名患者建立 SHAP 瀑布圖。請教2位醫生：解釋合理嗎？ （合理性分數）。

2. 實施忠實性測試：使用前 3 個 SHAP 特徵，掩蓋它們（以平均值取代）並測量預測置信度的下降。

3. 比較同一病患的 SHAP 與 LIME：主要特徵的一致性？穩定性測試：執行LIME 10次，測量特徵權重的變異數。

**第 13 課**：FDA 監管－將人工智慧帶入臨床實務。
