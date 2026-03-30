---
id: 019c9619-ac04-7004-d104-ac0400000004
title: 'Bài 4: Model Registry, Versioning & Packaging'
slug: bai-4-model-registry
description: >-
  MLflow Model Registry: stage transitions, model versioning. Model
  packaging: MLflow Models format, BentoML, Docker. Model serving patterns.
  A/B testing & canary deployments. Model governance.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 2: ML Infrastructure"
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: "MLOps & LLMOps: Đưa AI lên Production"
  slug: mlops-llmops
---

## Giới thiệu

Model training xong → lưu `model.pt` → copy lên server → cầu nguyện nó chạy. Nghe quen không?

**Model Registry** giải quyết vấn đề quản lý model lifecycle: versioning, staging, approval, rollback.

> 🎯 **Mục tiêu:** Quản lý model từ experiment → staging → production một cách systematic.

---

## 1. Model Registry là gì?

```
Không có Model Registry:
  models/
  ├── model_v1.pt
  ├── model_v2.pt
  ├── model_v2_fixed.pt
  ├── model_final.pt
  ├── model_final_REALLY_final.pt    ← 🤡
  └── model_prod_backup_20240315.pt

Có Model Registry:
  Registry: churn-predictor
  ├── Version 1 (Staging)  — RF, acc=0.89
  ├── Version 2 (Production) — XGBoost, acc=0.92 ✅
  ├── Version 3 (None)     — NN, acc=0.88
  └── Mỗi version: model + metadata + lineage + artifacts
```

### Model Lifecycle Stages:

```
None → Staging → Production → Archived
  │       │          │           │
  │       │          │           └─ Retired, không dùng nữa
  │       │          └─ Đang serve traffic
  │       └─ Testing, QA, pre-production
  └─ Vừa register, chưa review
```

---

## 2. MLflow Model Registry

### 2.1 Register Model

```python
"""Register model vào MLflow Registry"""
import mlflow
import mlflow.sklearn

mlflow.set_tracking_uri("http://localhost:5000")

# Cách 1: Register từ run
with mlflow.start_run(run_name="xgboost_v2"):
    model = train_xgboost(X_train, y_train)
    accuracy = evaluate(model, X_test, y_test)

    mlflow.log_metric("accuracy", accuracy)

    # Log & register trong 1 bước
    mlflow.sklearn.log_model(
        model,
        artifact_path="model",
        registered_model_name="churn-predictor",  # ← Tên registry
    )

# Cách 2: Register từ existing run
result = mlflow.register_model(
    model_uri="runs:/abc123def456/model",
    name="churn-predictor",
)
print(f"Version: {result.version}")  # Auto-increment
```

### 2.2 Model Versioning & Stages

```python
"""Quản lý model versions và stages"""
from mlflow import MlflowClient

client = MlflowClient()

# Xem tất cả versions
model_name = "churn-predictor"
versions = client.search_model_versions(f"name='{model_name}'")
for v in versions:
    print(f"  v{v.version}: stage={v.current_stage}, "
          f"run_id={v.run_id[:8]}")

# Chuyển stage
client.transition_model_version_stage(
    name=model_name,
    version=2,
    stage="Staging",
    archive_existing_versions=False,
)

# Promote staging → production
client.transition_model_version_stage(
    name=model_name,
    version=2,
    stage="Production",
    archive_existing_versions=True,  # Auto-archive version cũ
)

# Add description
client.update_model_version(
    name=model_name,
    version=2,
    description="XGBoost with new features, +3% accuracy vs v1",
)

# Set tags
client.set_model_version_tag(
    name=model_name,
    version=2,
    key="validation_status",
    value="passed",
)
```

### 2.3 Load Model từ Registry

```python
"""Load model cho serving"""
import mlflow.pyfunc

# Load production model
model = mlflow.pyfunc.load_model(
    model_uri=f"models:/{model_name}/Production"
)

# Hoặc by version
model = mlflow.pyfunc.load_model(
    model_uri=f"models:/{model_name}/2"
)

# Predict
predictions = model.predict(input_df)
```

---

## 3. Model Packaging

### 3.1 MLflow Models Format

```python
"""MLflow Models — standard packaging format"""
import mlflow

# Custom model class
class ChurnPredictor(mlflow.pyfunc.PythonModel):
    def load_context(self, context):
        """Load artifacts khi model được load"""
        import joblib
        self.model = joblib.load(context.artifacts["model_path"])
        self.preprocessor = joblib.load(
            context.artifacts["preprocessor_path"]
        )

    def predict(self, context, model_input):
        """Predict — bao gồm cả preprocessing"""
        processed = self.preprocessor.transform(model_input)
        predictions = self.model.predict(processed)
        probabilities = self.model.predict_proba(processed)[:, 1]
        return {
            "prediction": predictions.tolist(),
            "probability": probabilities.tolist(),
        }

# Log custom model
with mlflow.start_run():
    mlflow.pyfunc.log_model(
        artifact_path="model",
        python_model=ChurnPredictor(),
        artifacts={
            "model_path": "artifacts/model.pkl",
            "preprocessor_path": "artifacts/preprocessor.pkl",
        },
        pip_requirements=[
            "scikit-learn==1.3.0",
            "pandas==2.0.3",
            "numpy==1.24.3",
        ],
        registered_model_name="churn-predictor",
    )
```

### 3.2 BentoML Packaging

```python
"""BentoML — Model packaging & serving framework"""
# pip install bentoml
import bentoml
import xgboost as xgb

# Save model
model = xgb.XGBClassifier()
model.fit(X_train, y_train)

saved_model = bentoml.xgboost.save_model(
    "churn_predictor",
    model,
    signatures={
        "predict": {"batchable": True, "batch_dim": 0},
    },
    labels={"team": "ml", "version": "v2"},
    metadata={"accuracy": 0.92},
)
print(f"Saved: {saved_model}")

# Load model
loaded = bentoml.xgboost.load_model("churn_predictor:latest")
```

```python
"""BentoML Service definition"""
# service.py
import bentoml
import numpy as np
from bentoml.io import NumpyNdarray, JSON

runner = bentoml.xgboost.get("churn_predictor:latest").to_runner()
svc = bentoml.Service("churn_prediction_service", runners=[runner])

@svc.api(input=NumpyNdarray(), output=JSON())
async def predict(input_array: np.ndarray):
    result = await runner.predict.async_run(input_array)
    return {
        "predictions": result.tolist(),
        "model_version": "v2",
    }
```

```bash
# Build container
bentoml build
bentoml containerize churn_prediction_service:latest

# Serve locally
bentoml serve service:svc --reload
# → http://localhost:3000
```

### 3.3 Docker Packaging

```dockerfile
# Dockerfile cho ML model serving
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy model & code
COPY models/ models/
COPY src/serving/ src/serving/

# Download model from registry at build time
ARG MODEL_VERSION=Production
RUN python -c "
import mlflow
model = mlflow.pyfunc.load_model('models:/churn-predictor/${MODEL_VERSION}')
import joblib
joblib.dump(model, 'models/production_model.pkl')
"

EXPOSE 8000
CMD ["uvicorn", "src.serving.api:app", "--host", "0.0.0.0", "--port", "8000"]
```

---

## 4. Model Serving Patterns

### 4.1 Online Serving (REST API)

```python
"""FastAPI model serving"""
from fastapi import FastAPI
import mlflow.pyfunc
import pandas as pd

app = FastAPI()

# Load model once at startup
model = mlflow.pyfunc.load_model("models:/churn-predictor/Production")

@app.post("/predict")
async def predict(features: dict):
    df = pd.DataFrame([features])
    result = model.predict(df)
    return {"prediction": result["prediction"][0],
            "probability": result["probability"][0]}

@app.get("/health")
async def health():
    return {"status": "healthy", "model_version": "v2"}
```

### 4.2 Batch Inference

```python
"""Batch inference cho large datasets"""
import mlflow.pyfunc
import pandas as pd

def batch_predict(input_path, output_path, model_name, batch_size=10000):
    """Batch inference with chunking"""
    model = mlflow.pyfunc.load_model(f"models:/{model_name}/Production")

    results = []
    for chunk in pd.read_csv(input_path, chunksize=batch_size):
        preds = model.predict(chunk)
        chunk["prediction"] = preds["prediction"]
        chunk["probability"] = preds["probability"]
        results.append(chunk)

    output = pd.concat(results)
    output.to_parquet(output_path, index=False)
    print(f"✅ Predictions saved: {len(output)} rows")

# Run daily via cron/Airflow
batch_predict(
    "data/daily_users.csv",
    "data/predictions/2024-01-15.parquet",
    "churn-predictor",
)
```

### 4.3 A/B Testing

```python
"""A/B testing models"""
import random
from fastapi import FastAPI

app = FastAPI()

# Load both models
model_a = mlflow.pyfunc.load_model("models:/churn-predictor/2")  # Control
model_b = mlflow.pyfunc.load_model("models:/churn-predictor/3")  # Treatment

AB_RATIO = 0.2  # 20% traffic → model B

@app.post("/predict")
async def predict(features: dict):
    df = pd.DataFrame([features])

    # Route traffic
    if random.random() < AB_RATIO:
        result = model_b.predict(df)
        model_version = "B (v3)"
    else:
        result = model_a.predict(df)
        model_version = "A (v2)"

    # Log for analysis
    log_prediction(
        model_version=model_version,
        features=features,
        prediction=result,
    )

    return {
        "prediction": result["prediction"][0],
        "model_version": model_version,
    }
```

---

## 5. Model Governance

```python
"""Model approval workflow"""
from mlflow import MlflowClient

client = MlflowClient()

def approve_model_for_production(model_name, version):
    """Model promotion workflow"""
    # 1. Check metrics
    run = client.get_run(
        client.get_model_version(model_name, version).run_id
    )
    accuracy = run.data.metrics.get("accuracy", 0)
    if accuracy < 0.85:
        raise ValueError(f"Accuracy {accuracy} < threshold 0.85")

    # 2. Check tests passed
    tags = client.get_model_version(model_name, version).tags
    if tags.get("tests_passed") != "true":
        raise ValueError("Model tests not passed")

    # 3. Check bias/fairness
    if tags.get("fairness_check") != "passed":
        raise ValueError("Fairness check not passed")

    # 4. Promote
    client.transition_model_version_stage(
        name=model_name,
        version=version,
        stage="Production",
        archive_existing_versions=True,
    )
    print(f"✅ Model {model_name} v{version} → Production")

# Usage
approve_model_for_production("churn-predictor", version=3)
```

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Model Registry** | Central catalog: versions, stages, metadata |
| **Stages** | None → Staging → Production → Archived |
| **MLflow Models** | Standard packaging format + custom models |
| **BentoML** | Framework cho packaging + serving |
| **Online Serving** | REST API, low latency |
| **Batch Inference** | Large datasets, scheduled |
| **A/B Testing** | Compare models in production |
| **Governance** | Approval workflow trước promotion |

## Bài tập

1. **Registry:** Train 3 model variants, register tất cả, promote best → Production.
2. **Custom Model:** Tạo MLflow PythonModel với preprocessing built-in.
3. **Docker:** Package model thành Docker container, serve với FastAPI.
4. **A/B Test:** Implement A/B testing giữa 2 model versions, log predictions.

> **Bài tiếp theo:** CI/CD cho ML — Testing & Validation Pipelines.
