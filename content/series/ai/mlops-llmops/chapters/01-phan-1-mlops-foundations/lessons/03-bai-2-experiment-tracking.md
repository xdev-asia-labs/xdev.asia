---
id: 019c9619-ac02-7002-d102-ac0200000002
title: 'Bài 2: Experiment Tracking — MLflow & Weights & Biases'
slug: bai-2-experiment-tracking
description: >-
  Experiment tracking deep dive: MLflow setup, logging params/metrics/artifacts.
  W&B integration. Hyperparameter sweeps. Model comparison. Best practices
  cho reproducibility.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: MLOps Foundations"
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: "MLOps & LLMOps: Đưa AI lên Production"
  slug: mlops-llmops
---

## Giới thiệu

Bạn đã bao giờ:
- Train model xong **quên mất hyperparameters** nào cho kết quả tốt nhất?
- **So sánh 20 experiments** bằng cách đặt tên file `model_v1_lr001_final_FINAL_v2.pt`?
- Đồng nghiệp hỏi "model này train bằng data nào?" — và bạn **không nhớ**?

**Experiment Tracking** giải quyết tất cả vấn đề trên.

> 🎯 **Mục tiêu:** Track mọi thứ liên quan đến ML experiment: params, metrics, artifacts, code version.

---

## 1. Tại sao cần Experiment Tracking?

```
Không có tracking:
  notebook_v1.ipynb  →  model_v1.pt
  notebook_v2.ipynb  →  model_v2.pt
  notebook_FINAL.ipynb  →  model_final.pt
  notebook_FINAL_v2.ipynb  →  ???
  
  3 tháng sau: "Model nào tốt nhất? Train bằng gì? Params gì?"
  → 🤷‍♂️

Có tracking:
  Experiment: sentiment-classifier
  ├── Run: run_abc123 (lr=0.001, epochs=10, acc=0.89)
  ├── Run: run_def456 (lr=0.01,  epochs=20, acc=0.92) ✅ Best
  ├── Run: run_ghi789 (lr=0.1,   epochs=10, acc=0.85)
  └── Mỗi run: params + metrics + model + data hash + code version
```

---

## 2. MLflow — Open Source Standard

### 2.1 Setup

```bash
# Install
pip install mlflow

# Start tracking server (local)
mlflow server --host 0.0.0.0 --port 5000

# Hoặc với database backend (production)
mlflow server \
  --backend-store-uri postgresql://user:pass@localhost/mlflow \
  --default-artifact-root s3://my-bucket/mlflow \
  --host 0.0.0.0 --port 5000
```

### 2.2 Basic Tracking

```python
"""MLflow experiment tracking cơ bản"""
import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score
from sklearn.model_selection import train_test_split
import pandas as pd

# Connect to tracking server
mlflow.set_tracking_uri("http://localhost:5000")
mlflow.set_experiment("churn-prediction")

# Data
df = pd.read_csv("data/churn.csv")
X_train, X_test, y_train, y_test = train_test_split(
    df.drop("churn", axis=1), df["churn"],
    test_size=0.2, random_state=42,
)

# Training với MLflow tracking
with mlflow.start_run(run_name="random_forest_v1"):
    # === Log Parameters ===
    params = {
        "n_estimators": 100,
        "max_depth": 10,
        "min_samples_split": 5,
        "random_state": 42,
    }
    mlflow.log_params(params)

    # Train
    model = RandomForestClassifier(**params)
    model.fit(X_train, y_train)

    # Predict
    y_pred = model.predict(X_test)

    # === Log Metrics ===
    metrics = {
        "accuracy": accuracy_score(y_test, y_pred),
        "f1_score": f1_score(y_test, y_pred),
        "train_size": len(X_train),
        "test_size": len(X_test),
    }
    mlflow.log_metrics(metrics)

    # === Log Model ===
    mlflow.sklearn.log_model(model, "model")

    # === Log Artifacts ===
    # Confusion matrix
    import matplotlib.pyplot as plt
    from sklearn.metrics import ConfusionMatrixDisplay
    fig, ax = plt.subplots()
    ConfusionMatrixDisplay.from_predictions(y_test, y_pred, ax=ax)
    fig.savefig("confusion_matrix.png")
    mlflow.log_artifact("confusion_matrix.png")

    # Feature importance
    importance = pd.DataFrame({
        "feature": X_train.columns,
        "importance": model.feature_importances_,
    }).sort_values("importance", ascending=False)
    importance.to_csv("feature_importance.csv", index=False)
    mlflow.log_artifact("feature_importance.csv")

    # === Log Tags ===
    mlflow.set_tags({
        "model_type": "random_forest",
        "data_version": "v2.1",
        "developer": "team-ml",
    })

    print(f"✅ Run ID: {mlflow.active_run().info.run_id}")
    print(f"📊 Accuracy: {metrics['accuracy']:.4f}")
```

### 2.3 PyTorch + MLflow

```python
"""MLflow với PyTorch training"""
import mlflow
import mlflow.pytorch
import torch
import torch.nn as nn

mlflow.set_experiment("image-classifier")

with mlflow.start_run(run_name="resnet18_finetune"):
    # Log params
    config = {
        "model": "resnet18",
        "lr": 1e-3,
        "epochs": 20,
        "batch_size": 32,
        "optimizer": "adamw",
        "scheduler": "cosine",
    }
    mlflow.log_params(config)

    # Training loop
    model = create_model(config["model"])
    optimizer = torch.optim.AdamW(model.parameters(), lr=config["lr"])

    for epoch in range(config["epochs"]):
        train_loss, train_acc = train_one_epoch(model, train_loader, optimizer)
        val_loss, val_acc = evaluate(model, val_loader)

        # Log metrics per epoch
        mlflow.log_metrics({
            "train_loss": train_loss,
            "train_acc": train_acc,
            "val_loss": val_loss,
            "val_acc": val_acc,
        }, step=epoch)

        print(f"Epoch {epoch+1}: val_acc={val_acc:.4f}")

    # Log final model
    mlflow.pytorch.log_model(model, "model")

    # Log training curves (artifact)
    plot_training_curves()
    mlflow.log_artifact("training_curves.png")
```

### 2.4 Autologging

```python
"""MLflow autolog — tự động track mọi thứ"""

# Sklearn autolog
mlflow.sklearn.autolog()
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)  # Tự log params, metrics, model

# PyTorch Lightning autolog
mlflow.pytorch.autolog()
trainer = pl.Trainer(max_epochs=10)
trainer.fit(model)  # Tự log mọi thứ

# XGBoost autolog
mlflow.xgboost.autolog()
xgb.train(params, dtrain)

# Supported frameworks: sklearn, pytorch, tensorflow,
# xgboost, lightgbm, spark, fastai, ...
```

---

## 3. Weights & Biases (W&B)

### 3.1 Setup

```bash
pip install wandb
wandb login  # Nhập API key từ wandb.ai
```

### 3.2 Basic Tracking

```python
"""W&B experiment tracking"""
import wandb

# Init run
wandb.init(
    project="churn-prediction",
    name="random_forest_v1",
    config={
        "n_estimators": 100,
        "max_depth": 10,
        "learning_rate": 0.01,
    },
    tags=["baseline", "random_forest"],
)

# Training
model = RandomForestClassifier(**wandb.config)
model.fit(X_train, y_train)

# Log metrics
y_pred = model.predict(X_test)
wandb.log({
    "accuracy": accuracy_score(y_test, y_pred),
    "f1_score": f1_score(y_test, y_pred),
})

# Log plots
wandb.log({
    "confusion_matrix": wandb.plot.confusion_matrix(
        y_true=y_test, preds=y_pred,
        class_names=["retained", "churned"],
    ),
    "roc": wandb.plot.roc_curve(y_test, y_pred_proba),
})

# Log table
table = wandb.Table(
    columns=["feature", "importance"],
    data=[[f, i] for f, i in zip(features, importances)],
)
wandb.log({"feature_importance": table})

wandb.finish()
```

### 3.3 Training Loop với W&B

```python
"""W&B trong PyTorch training loop"""
import wandb

wandb.init(
    project="image-classifier",
    config={
        "architecture": "resnet18",
        "learning_rate": 1e-3,
        "epochs": 20,
        "batch_size": 32,
    },
)

for epoch in range(wandb.config.epochs):
    train_loss, train_acc = train_one_epoch(model, train_loader)
    val_loss, val_acc = evaluate(model, val_loader)

    # Log metrics (tự tạo charts đẹp)
    wandb.log({
        "epoch": epoch,
        "train/loss": train_loss,
        "train/accuracy": train_acc,
        "val/loss": val_loss,
        "val/accuracy": val_acc,
        "learning_rate": optimizer.param_groups[0]["lr"],
    })

    # Log sample predictions
    if epoch % 5 == 0:
        images, labels = next(iter(val_loader))
        preds = model(images.cuda()).argmax(1)
        wandb.log({
            "predictions": [
                wandb.Image(img, caption=f"pred={p}, true={l}")
                for img, p, l in zip(images[:8], preds[:8], labels[:8])
            ]
        })

# Save model artifact
artifact = wandb.Artifact("model", type="model")
artifact.add_file("best_model.pt")
wandb.log_artifact(artifact)

wandb.finish()
```

---

## 4. Hyperparameter Sweeps

### 4.1 MLflow + Optuna

```python
"""Hyperparameter tuning với Optuna + MLflow"""
import optuna
import mlflow

def objective(trial):
    with mlflow.start_run(nested=True):
        # Suggest hyperparameters
        params = {
            "n_estimators": trial.suggest_int("n_estimators", 50, 500),
            "max_depth": trial.suggest_int("max_depth", 3, 20),
            "min_samples_split": trial.suggest_int("min_samples_split", 2, 20),
            "min_samples_leaf": trial.suggest_int("min_samples_leaf", 1, 10),
        }
        mlflow.log_params(params)

        # Train & evaluate
        model = RandomForestClassifier(**params)
        model.fit(X_train, y_train)
        accuracy = accuracy_score(y_test, model.predict(X_test))

        mlflow.log_metric("accuracy", accuracy)
        return accuracy

# Run sweep
with mlflow.start_run(run_name="hyperopt_sweep"):
    study = optuna.create_study(direction="maximize")
    study.optimize(objective, n_trials=50)

    # Log best params
    mlflow.log_params({f"best_{k}": v for k, v in study.best_params.items()})
    mlflow.log_metric("best_accuracy", study.best_value)

    print(f"Best accuracy: {study.best_value:.4f}")
    print(f"Best params: {study.best_params}")
```

### 4.2 W&B Sweeps

```python
"""W&B Sweeps — cloud-managed hyperparameter search"""
import wandb

# Sweep config
sweep_config = {
    "method": "bayes",  # bayes, random, grid
    "metric": {"name": "val_accuracy", "goal": "maximize"},
    "parameters": {
        "learning_rate": {
            "distribution": "log_uniform_values",
            "min": 1e-5,
            "max": 1e-2,
        },
        "batch_size": {"values": [16, 32, 64]},
        "epochs": {"values": [10, 20, 30]},
        "optimizer": {"values": ["adam", "adamw", "sgd"]},
        "dropout": {"distribution": "uniform", "min": 0.1, "max": 0.5},
    },
}

# Create sweep
sweep_id = wandb.sweep(sweep_config, project="image-classifier")

# Agent function
def train_sweep():
    wandb.init()
    config = wandb.config

    model = create_model(dropout=config.dropout)
    optimizer = get_optimizer(config.optimizer, model, config.learning_rate)

    for epoch in range(config.epochs):
        train_loss = train_one_epoch(model, train_loader, optimizer)
        val_acc = evaluate(model, val_loader)
        wandb.log({"val_accuracy": val_acc, "train_loss": train_loss})

    wandb.finish()

# Run sweep (50 trials)
wandb.agent(sweep_id, function=train_sweep, count=50)
```

---

## 5. MLflow vs W&B — So sánh

| Feature | MLflow | W&B |
|---------|--------|-----|
| **Pricing** | Free & Open Source | Free (cá nhân), Paid (team) |
| **Self-hosted** | ✅ Dễ dàng | ⚠️ Có, nhưng phức tạp |
| **UI** | ⭐⭐⭐ OK | ⭐⭐⭐⭐⭐ Rất đẹp |
| **Collaboration** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ Reports, Comments |
| **Model Registry** | ✅ Built-in | ✅ Artifacts |
| **Sweeps** | ❌ Cần Optuna | ✅ Built-in |
| **Autologging** | ✅ Nhiều frameworks | ✅ Nhiều frameworks |
| **Visualizations** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ Interactive |
| **Learning Curve** | Dễ | Dễ |

### Recommendation:

```
🏢 Enterprise / Self-hosted → MLflow
👤 Cá nhân / Research → W&B (free tier mạnh)
🤝 Team nhỏ → W&B hoặc MLflow + Optuna
🔒 Data sensitive → MLflow (self-hosted)
```

---

## 6. Best Practices

```python
"""Experiment tracking best practices"""

# 1. Luôn đặt tên RUN có ý nghĩa
mlflow.start_run(run_name="resnet18_lr0.001_aug_heavy_v2")

# 2. Log EVERYTHING
mlflow.log_params({
    # Model
    "model": "resnet18",
    "pretrained": True,
    # Training
    "lr": 1e-3,
    "epochs": 20,
    "batch_size": 32,
    "optimizer": "adamw",
    "scheduler": "cosine",
    # Data
    "data_version": "v2.1",
    "train_size": 5000,
    "val_size": 1000,
    "augmentation": "heavy",
    # Environment
    "gpu": "A100-80GB",
    "pytorch_version": torch.__version__,
    "seed": 42,
})

# 3. Log metrics every epoch (không chỉ final)
for epoch in range(n_epochs):
    mlflow.log_metrics({"loss": loss, "acc": acc}, step=epoch)

# 4. Log git commit hash
import subprocess
git_hash = subprocess.check_output(
    ["git", "rev-parse", "HEAD"]
).decode().strip()
mlflow.set_tag("git_commit", git_hash)

# 5. Log data hash (reproducibility)
import hashlib
data_hash = hashlib.md5(open("data/train.csv", "rb").read()).hexdigest()
mlflow.log_param("data_hash", data_hash)

# 6. Tag experiments for filtering
mlflow.set_tags({
    "status": "production",
    "team": "nlp",
    "sprint": "2024-Q1",
})
```

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Experiment Tracking** | Track params, metrics, artifacts, code cho mỗi run |
| **MLflow** | Open-source, self-hosted, model registry |
| **W&B** | Cloud-based, UI đẹp, built-in sweeps |
| **Autologging** | Tự track không cần code |
| **Sweeps** | Automated hyperparameter search |
| **Reproducibility** | Log git hash + data hash + environment |

## Bài tập

1. **MLflow Setup:** Cài MLflow, train 3 models khác nhau (RF, XGBoost, LightGBM), log tất cả lên MLflow. So sánh trên UI.
2. **W&B Integration:** Tạo account W&B, log training curves cho PyTorch model. Share report link.
3. **Sweep:** Chạy hyperparameter sweep (50 trials) cho 1 model. Tìm best params.
4. **Reproducibility:** Reproduce lại best run từ bài tập 1 bằng thông tin đã log.

> **Bài tiếp theo:** Data Versioning & Feature Store — DVC, LakeFS, Feast.
