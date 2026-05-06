---
id: 019c9619-ac01-7001-d101-ac0100000001
title: 第 1 課：什麼是 MLOps？ — 機器學習生命週期與成熟度等級
slug: bai-1-mlops-la-gi
description: MLOps 基礎：ML 生命週期、DevOps 與 MLOps、成熟度等級 (0→4)、ML 中的技術債、團隊結構、工俱生態系統概述。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 0
section_title: 第 1 部分：MLOps 基礎
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: MLOps 和 LLMOps：將 AI 引入生產
  slug: mlops-llmops
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6499" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6499)"/>

  <!-- Decorations -->
  <g>
    <circle cx="795" cy="155" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="990" cy="110" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="685" cy="65" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="880" cy="280" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="235" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="185" x2="1100" y2="265" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="215" x2="1050" y2="285" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1019.6410161513776,165 1019.6410161513776,205 985,225 950.3589838486224,205 950.3589838486224,165 985,145" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 人工智慧與機器學習 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：什麼是 MLOps？ — 機器學習生命週期 &</tspan>
      <tspan x="60" dy="42">成熟度級別</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">MLOps 和 LLMOps：將 AI 引入生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：MLOps 基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**87% 的 ML 模型**從未投入生產。問題不在於模型不好，而是**沒有流程**將模型從筆記本轉移到現實世界。 MLOps 解決了這個問題。

> 🎯 **MLOps = 機器學習 + DevOps + 資料工程**

---

## 1. ML 生命週期 — ML 專案生命週期

```
┌─────────────────────────────────────────────────────────┐
│                    ML LIFECYCLE                          │
│                                                         │
│  1. Problem     2. Data        3. Feature               │
│     Definition     Collection     Engineering           │
│         │              │              │                  │
│         ▼              ▼              ▼                  │
│  4. Model       5. Training    6. Evaluation            │
│     Selection      & Tuning       & Validation          │
│         │              │              │                  │
│         ▼              ▼              ▼                  │
│  7. Deployment  8. Monitoring  9. Retraining            │
│     & Serving      & Alerts       & Updates             │
│         │              │              │                  │
│         └──────────────┴──────────────┘                  │
│                   (Continuous Loop)                      │
└─────────────────────────────────────────────────────────┘
```

### 每一步都有自己的問題：

|相|常見問題 |
|--------|--------------------|
| **資料** |資料變更、架構漂移、品質問題 |
| **訓練** |不可重複、迷失方向的實驗|
| **評估** |線下指標≠線上表現 |
| **部署** | “在我的電腦上運行”但在伺服器上失敗 |
| **監控** |模型衰退，不知道何時重新訓練 |

---

## 2.DevOps 與 MLOps

```
DevOps (Software):
  Code → Build → Test → Deploy → Monitor
  ✅ Deterministic (cùng code → cùng output)

MLOps (Machine Learning):
  Data + Code + Config → Train → Evaluate → Deploy → Monitor
  ❌ Non-deterministic (cùng code, khác data → khác model)
  ❌ Data dependency (model phụ thuộc vào data quality)
  ❌ Model decay (model giảm chất lượng theo thời gian)
```

### 主要區別：

| |開發營運 | MLOps |
|---|--------|--------|
| **神器** |二進位/容器 |模型+資料+配置|
| **測試** |單元測試、整合 | + 資料驗證、模型驗證 |
| **CI/CD** |代碼變更 | + 資料變更、模型再訓練 |
| **監控** |正常運作時間、延遲 | + 資料漂移、模型效能 |
| **版本控制** |程式碼 (Git) | + 資料 + 模型 + 管道 |
| **再現性** |簡單|非常困難（隨機種子、GPU...）|

---

## 3. MLOps 成熟度模型

### 0 級：無 MLOps（手動）

```
Đặc điểm:
  ❌ Jupyter Notebook → Manual deploy
  ❌ Không track experiments
  ❌ Không monitoring
  ❌ Retrain = "ai đó nhớ thì làm"

Team:
  1 Data Scientist làm hết

Phù hợp: POC, hackathon
```

### 第 1 級：DevOps，但還不是 MLOps

```
Đặc điểm:
  ✅ Code trên Git
  ✅ CI/CD pipeline
  ✅ Automated testing (unit tests)
  ❌ Chưa track data versions
  ❌ Chưa track experiments
  ❌ Manual retraining

Team:
  DS + ML Engineer

Phù hợp: Startup giai đoạn đầu
```

### 第 2 級：機器學習管道自動化

```
Đặc điểm:
  ✅ Automated training pipeline
  ✅ Experiment tracking (MLflow)
  ✅ Data versioning (DVC)
  ✅ Model registry
  ✅ Feature store
  ⚠️ Manual trigger retraining

Team:
  DS + ML Engineer + Data Engineer

Phù hợp: Công ty có 5-10 ML models
```

### 第 3 級：機器學習的 CI/CD

```
Đặc điểm:
  ✅ Automated retraining (trigger by data/schedule)
  ✅ A/B testing, canary deployment
  ✅ Model validation pipeline
  ✅ Monitoring + alerting
  ✅ Feature store shared

Team:
  DS + ML Engineer + Data Engineer + ML Platform

Phù hợp: Công ty scale (>10 models)
```

### 第 4 級：完整 MLOps

```
Đặc điểm:
  ✅ Self-healing pipelines
  ✅ Auto-retrain on drift detection
  ✅ Multi-model management
  ✅ Cost optimization
  ✅ Governance & compliance

Team:
  Full ML Platform team

Phù hợp: Big Tech, AI-first companies
```

---

## 4. ML 中的技術債務

```
Google's "Hidden Technical Debt in ML Systems" (NeurIPS 2015):

┌────────────────────────────────────────────┐
│              ML System                      │
│  ┌────────────────────────────────────┐    │
│  │         ML Code (~5%)              │    │
│  └────────────────────────────────────┘    │
│  ┌────┬─────┬──────┬──────┬────┬──────┐   │
│  │Data│Data │Feat. │Config│Serv│Monit.│   │
│  │Col.│Veri.│Extr. │     │ing │oring │   │
│  └────┴─────┴──────┴──────┴────┴──────┘   │
│              (~95% non-ML code)            │
└────────────────────────────────────────────┘

ML Code chỉ chiếm ~5% tổng hệ thống!
```

### 技術債類型：

```python
# 1. Data Dependency Debt
# Input data thay đổi → model hỏng
# VD: Feature từ API bên thứ 3 bị đổi format

# 2. Configuration Debt
# Hyperparams, feature flags, thresholds... không tracked
# VD: Ai đổi threshold từ 0.5 → 0.7? Khi nào?

# 3. Pipeline Debt
# Glue code nối các bước → fragile
# VD: Script bash + cron job + manual copy file

# 4. Reproducibility Debt
# Không thể reproduce kết quả cũ
# VD: "Model v2 tốt hơn v1" — nhưng không reproduce được v1
```

---

## 5. MLOps 工俱生態系統

```
┌─────────────────────────────────────────────────┐
│                 MLOps Stack                      │
├────────────┬────────────────────────────────────┤
│ Layer      │ Tools                               │
├────────────┼────────────────────────────────────┤
│ Experiment │ MLflow, W&B, Neptune, CometML      │
│ Tracking   │                                     │
├────────────┼────────────────────────────────────┤
│ Data Vers. │ DVC, LakeFS, Delta Lake            │
├────────────┼────────────────────────────────────┤
│ Feature    │ Feast, Tecton, Hopsworks           │
│ Store      │                                     │
├────────────┼────────────────────────────────────┤
│ Model Reg. │ MLflow, Vertex AI, SageMaker       │
├────────────┼────────────────────────────────────┤
│ Orchest.   │ Kubeflow, Airflow, Prefect         │
├────────────┼────────────────────────────────────┤
│ Serving    │ TorchServe, Triton, TFServing, BentoML │
├────────────┼────────────────────────────────────┤
│ Monitoring │ Evidently, Arize, WhyLabs          │
├────────────┼────────────────────────────────────┤
│ Infra      │ Docker, K8s, Terraform             │
└────────────┴────────────────────────────────────┘
```

### 根據團隊規模選擇工具：

|團隊規模|推薦|
|------------|--------------|
| **1-3人** | MLflow + DVC + Docker |
| **3-10人** | + 氣流 + 盛宴 + 顯然 |
| **10+人** |全平台：Kubeflow / Vertex AI / SageMaker |
| **企業** |商業：Databricks、Dataiku、Domino |

---

## 6. 實作：設定 MLOps 項目

```python
"""Setup cấu trúc project MLOps chuẩn"""

# Project structure
project_structure = """
my-ml-project/
├── data/
│   ├── raw/              # Data gốc (never modify)
│   ├── processed/        # Data sau preprocessing
│   └── features/         # Feature store output
├── notebooks/            # EDA, prototyping
├── src/
│   ├── data/             # Data processing code
│   ├── features/         # Feature engineering
│   ├── models/           # Model training code
│   ├── serving/          # Inference server
│   └── monitoring/       # Monitoring code
├── configs/
│   ├── training.yaml     # Training hyperparameters
│   ├── serving.yaml      # Serving config
│   └── monitoring.yaml   # Alerting rules
├── tests/
│   ├── test_data.py      # Data validation tests
│   ├── test_model.py     # Model validation tests
│   └── test_api.py       # API tests
├── pipelines/
│   ├── training.py       # Training pipeline
│   ├── evaluation.py     # Evaluation pipeline
│   └── deployment.py     # Deployment pipeline
├── Dockerfile
├── docker-compose.yml
├── Makefile              # Common commands
├── dvc.yaml              # DVC pipeline
├── mlflow.yaml           # MLflow config
└── README.md
"""

print(project_structure)
```

```makefile
# Makefile — Common commands
.PHONY: setup train evaluate deploy monitor

setup:
	pip install -r requirements.txt
	dvc pull

train:
	python pipelines/training.py --config configs/training.yaml

evaluate:
	python pipelines/evaluation.py --model-version latest

deploy:
	python pipelines/deployment.py --target production

monitor:
	python src/monitoring/check_drift.py

test:
	pytest tests/ -v

lint:
	ruff check src/
	mypy src/
```

---

## 總結

|概念 |記住|
|--------|--------|
| **MLOps** |機器學習 + DevOps + 資料工程 |
| **機器學習生命週期** |資料→訓練→部署→監控→重新訓練|
| **成熟度 0-4** |手動 → 自動 → CI/CD → 完整 MLOps |
| **科技債務** | ML 代碼只佔 5%，95% 是基礎設施 |
| **工具** | MLflow、DVC、盛宴、Kubeflow、顯然 |

## 練習

1. **評估您的團隊：** 您的團隊處於什麼成熟度？列出差距。
2. **專案設定：** 根據上述範本建立專案結構。初始化 git + dvc。
3. **研究工具：** 比較 2 個實驗追蹤工具：MLflow 與權重和偏差。為團隊選擇 1。

> **下一篇文章：** 實驗追蹤 - MLflow 和權重和偏差。
