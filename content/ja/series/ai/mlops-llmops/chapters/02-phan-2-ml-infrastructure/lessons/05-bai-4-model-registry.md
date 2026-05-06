---
id: 019c9619-ac04-7004-d104-ac0400000004
title: 'レッスン 4: モデル レジストリ、バージョン管理、パッケージ化'
slug: bai-4-model-registry
description: >-
  MLflow モデル レジストリ: ステージ移行、モデルのバージョン管理。モデルのパッケージ化: MLflow
  モデル形式、BentoML、Docker。モデル提供パターン。 A/B テストとカナリア デプロイメント。モデルガバナンス。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 2: ML インフラストラクチャ'
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: 'MLOps と LLMOps: AI を本番環境に導入する'
  slug: mlops-llmops
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9116" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9116)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1005" cy="45" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="910" cy="50" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="815" cy="55" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="720" cy="60" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="625" cy="65" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="215" x2="1100" y2="295" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="245" x2="1050" y2="315" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="990.9807621135332,150 990.9807621135332,180 965,195 939.0192378864668,180 939.0192378864668,150 965,135" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: モデル レジストリ、バージョン管理、</tspan>
      <tspan x="60" dy="42">包装</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">MLOps と LLMOps: AI を本番環境に導入する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: ML インフラストラクチャ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

モデルのトレーニングが完了 → 保存 `model.pt` → サーバーにコピー → 実行されることを祈ります。おなじみですね？

**モデル レジストリ** は、バージョン管理、ステージング、承認、ロールバックといったモデルのライフサイクル管理の問題を解決します。

> 🎯 **目標:** 実験→ステージング→本番までのモデルを体系的に管理します。

---

## 1. モデルレジストリとは何ですか?

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

### モデルのライフサイクルの段階:

```
None → Staging → Production → Archived
  │       │          │           │
  │       │          │           └─ Retired, không dùng nữa
  │       │          └─ Đang serve traffic
  │       └─ Testing, QA, pre-production
  └─ Vừa register, chưa review
```

---

## 2. MLflow モデル レジストリ

### 2.1 レジスタモデル

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

### 2.2 モデルのバージョン管理とステージ

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

### 2.3 レジストリからモデルをロードする

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

## 3. モデルのパッケージ化

### 3.1 MLflow モデルの形式

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

### 3.2 BentoML のパッケージ化

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

### 3.3 Docker のパッケージ化

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

## 4. モデル提供パターン

### 4.1 オンライン サービス (REST API)

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

### 4.2 バッチ推論

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

### 4.3 A/B テスト

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

## 5. モデルガバナンス

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

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| **モデル レジストリ** |中央カタログ: バージョン、ステージ、メタデータ |
| **ステージ** |なし → ステージング → 本番 → アーカイブ |
| **MLflow モデル** |標準パッケージ形式 + カスタムモデル |
| **BentoML** |包装 + 提供のフレームワーク |
| **オンライン サービス** | REST API、低遅延 |
| **バッチ推論** |大規模なデータセット、スケジュール済み |
| **A/B テスト** |本番環境のモデルを比較 |
| **ガバナンス** |昇格前の承認ワークフロー |

## 演習

1. **レジストリ:** 3 つのモデル バリアントをトレーニングし、すべて登録し、最適なモデルから本番環境に昇格します。
2. **カスタム モデル:** 前処理が組み込まれた MLflow PythonModel を作成します。
3. **Docker:** モデルを Docker コンテナにパッケージ化し、FastAPI で提供します。
4. **A/B テスト:** 2 つのモデル バージョン間で A/B テストを実装し、予測をログに記録します。

> **次の記事:** ML 用 CI/CD — テストおよび検証パイプライン。
