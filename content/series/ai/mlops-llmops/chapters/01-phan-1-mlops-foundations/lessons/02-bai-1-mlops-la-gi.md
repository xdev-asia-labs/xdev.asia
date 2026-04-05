---
id: 019c9619-ac01-7001-d101-ac0100000001
title: 'Bài 1: MLOps là gì? — ML Lifecycle & Maturity Levels'
slug: bai-1-mlops-la-gi
description: >-
  MLOps foundation: ML lifecycle, DevOps vs MLOps, maturity levels (0→4),
  technical debt trong ML, team structure, tools ecosystem overview.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 1: MLOps Foundations"
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: "MLOps & LLMOps: Đưa AI lên Production"
  slug: mlops-llmops
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI &amp; ML — Bài 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 1: MLOps là gì? — ML Lifecycle &amp;</tspan>
      <tspan x="60" dy="42">Maturity Levels</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">MLOps &amp; LLMOps: Đưa AI lên Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: MLOps Foundations</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

**87% ML models** không bao giờ lên production. Vấn đề không phải model dở — mà là **không có quy trình** đưa model từ notebook ra thế giới thực. MLOps giải quyết điều này.

> 🎯 **MLOps = Machine Learning + DevOps + Data Engineering**

---

## 1. ML Lifecycle — Vòng đời của ML Project

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

### Mỗi bước có vấn đề riêng:

| Phase | Vấn đề thường gặp |
|-------|-------------------|
| **Data** | Data thay đổi, schema drift, quality issues |
| **Training** | Không reproducible, mất track experiments |
| **Evaluation** | Offline metrics ≠ online performance |
| **Deployment** | "Chạy trên máy tôi" nhưng fail trên server |
| **Monitoring** | Model decay, không biết khi nào retrain |

---

## 2. DevOps vs MLOps

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

### Những khác biệt chính:

| | DevOps | MLOps |
|---|--------|-------|
| **Artifact** | Binary / Container | Model + Data + Config |
| **Testing** | Unit tests, integration | + Data validation, model validation |
| **CI/CD** | Code changes | + Data changes, model retraining |
| **Monitoring** | Uptime, latency | + Data drift, model performance |
| **Versioning** | Code (Git) | + Data + Model + Pipeline |
| **Reproducibility** | Easy | Rất khó (random seeds, GPU, ...) |

---

## 3. MLOps Maturity Model

### Level 0: No MLOps (Manual)

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

### Level 1: DevOps nhưng chưa MLOps

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

### Level 2: ML Pipeline Automation

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

### Level 3: CI/CD for ML

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

### Level 4: Full MLOps

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

## 4. Technical Debt trong ML

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

### Các loại technical debt:

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

## 5. MLOps Tools Ecosystem

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

### Tool chọn theo team size:

| Team Size | Recommendation |
|-----------|---------------|
| **1-3 người** | MLflow + DVC + Docker |
| **3-10 người** | + Airflow + Feast + Evidently |
| **10+ người** | Full platform: Kubeflow / Vertex AI / SageMaker |
| **Enterprise** | Commercial: Databricks, Dataiku, Domino |

---

## 6. Hands-on: Setup MLOps Project

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

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **MLOps** | ML + DevOps + Data Engineering |
| **ML Lifecycle** | Data → Train → Deploy → Monitor → Retrain |
| **Maturity 0-4** | Manual → Automated → CI/CD → Full MLOps |
| **Tech Debt** | ML code chỉ ~5%, 95% là infrastructure |
| **Tools** | MLflow, DVC, Feast, Kubeflow, Evidently |

## Bài tập

1. **Đánh giá team:** Team bạn đang ở maturity level nào? Liệt kê gaps.
2. **Project Setup:** Tạo project structure theo template trên. Init git + dvc.
3. **Tools Research:** So sánh 2 experiment tracking tools: MLflow vs Weights & Biases. Chọn 1 cho team.

> **Bài tiếp theo:** Experiment Tracking — MLflow & Weights & Biases.
