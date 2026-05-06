---
id: 019c9619-ac02-7002-d102-ac0200000002
title: 第 2 課：實驗追蹤 — MLflow & 權重與偏差
slug: bai-2-experiment-tracking
description: 實驗追蹤深入研究：MLflow 設定、記錄參數/指標/工件。 W&B 整合。超參數掃描。模型比較。再現性的最佳實踐。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：MLOps 基礎
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: MLOps 和 LLMOps：將 AI 引入生產
  slug: mlops-llmops
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8020" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8020)"/>

  <!-- Decorations -->
  <g>
    <circle cx="707" cy="271" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="814" cy="178" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="921" cy="85" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="1028" cy="252" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="635" cy="159" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="161" x2="1100" y2="241" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="191" x2="1050" y2="261" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="992.1769145362398,143 992.1769145362398,179 961,197 929.8230854637602,179 929.8230854637602,143 961,125" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：實驗追蹤 — MLflow &</tspan>
      <tspan x="60" dy="42">權重和偏差</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">MLOps 和 LLMOps：將 AI 引入生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：MLOps 基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

你是否曾經：
- 訓練模型後**忘記了哪些超參數**可以提供最佳結果？
- **透過命名檔案比較 20 個實驗** `model_v1_lr001_final_FINAL_v2.pt`？
- 同事問「這個模型是用什麼資料訓練的？」— 你**不記得**了？

**實驗追蹤**解決了上述所有問題。

> 🎯 **目標：** 追蹤與 ML 實驗相關的所有內容：參數、指標、工件、程式碼版本。

---

## 1. 為什麼需要實驗追蹤？

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

## 2. MLflow — 開源標準

### 2.1 設置

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

### 2.2 基本追蹤

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

### 2.4 自動記錄

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

## 3. 權重與偏差 (W&B)

### 3.1 設置

```bash
pip install wandb
wandb login  # Nhập API key từ wandb.ai
```

### 3.2 基本追蹤

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

### 3.3 使用 W&B 進行訓練循環

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

## 4. 超參數掃描

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

### 4.2 W&B 橫掃

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

## 5. MLflow 與 W&B — 比較

|特點| ML流| W＆B |
|--------|--------|-----|
| **定價** |免費和開源|免費（個人），付費（團隊）|
| **自架** | ✅ 簡單 | ⚠️ 是的，但是很複雜 |
| **使用者介面** | ⭐⭐⭐ 好的 | ⭐⭐⭐⭐⭐ 很漂亮|
| **合作** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ 報告、評論 |
| **模型註冊表** | ✅ 內建 | ✅ 文物 |
| **掃蕩** | ❌ 需要 Optuna | ✅ 內建 |
| **自動記錄** | ✅ 許多框架 | ✅ 許多框架 |
| **視覺化** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ 互動 |
| **學習曲線** |簡單|簡單|

###推薦：

```
🏢 Enterprise / Self-hosted → MLflow
👤 Cá nhân / Research → W&B (free tier mạnh)
🤝 Team nhỏ → W&B hoặc MLflow + Optuna
🔒 Data sensitive → MLflow (self-hosted)
```

---

## 6. 最佳實踐

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

## 總結

|概念 |記住|
|--------|--------|
| **實驗追蹤** |追蹤每次運行的參數、指標、工件、程式碼 |
| **MLflow** |開源、自架、模型登錄 |
| **W&B** |基於雲，精美UI，內建掃一掃|
| **自動記錄** |無碼自我追蹤 |
| **掃蕩** |自動超參數搜尋 |
| **再現性** |記錄git hash + 資料hash + 環境|

## 練習

1. **MLflow 設定：** 安裝 MLflow，訓練 3 個不同的模型（RF、XGBoost、LightGBM），將所有內容記錄到 MLflow。在 UI 上進行比較。
2. **W&B 整合：** 建立 W&B 帳戶，記錄 PyTorch 模型的訓練曲線。分享報告連結。
3. **掃描：** 對 1 個模型執行超參數掃描（50 次試驗）。找到最佳參數。
4. **再現性：** 使用記錄的資訊再現練習 1 中的最佳運行。

> **下一篇文章：** 資料版本控制與特徵儲存 — DVC、LakeFS、Feast。
