---
id: 019c9619-ac01-7001-d101-ac0100000001
title: 'レッスン 1: MLOps とは何ですか? — ML のライフサイクルと成熟度レベル'
slug: bai-1-mlops-la-gi
description: >-
  MLOps の基盤: ML ライフサイクル、DevOps と MLOps、成熟度レベル (0→4)、ML の技術的負債、チーム構造、ツール
  エコシステムの概要。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 1: MLOps の基礎'
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: 'MLOps と LLMOps: AI を本番環境に導入する'
  slug: mlops-llmops
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: MLOps とは何ですか? — ML ライフサイクルと</tspan>
      <tspan x="60" dy="42">成熟度レベル</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">MLOps と LLMOps: AI を本番環境に導入する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: MLOps の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**ML モデルの 87%** は本番環境に導入されることはありません。問題はモデルが悪いことではなく、モデルをノートブックから現実世界に移すための**プロセス**がないことです。 MLOps はこれを解決します。

> 🎯 **MLOps = 機械学習 + DevOps + データ エンジニアリング**

---

## 1. ML ライフサイクル — ML プロジェクトのライフサイクル

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

### 各ステップには独自の問題があります。

|フェーズ |よくある問題 |
|------|---------------------|
| **データ** |データの変更、スキーマのドリフト、品質の問題 |
| **トレーニング** |再現性のない、道に迷った実験 |
| **評価** |オフラインの指標 ≠ オンラインのパフォーマンス |
| **展開** | 「コンピュータでは実行されます」が、サーバーでは失敗します。
| **モニタリング** |モデルの崩壊、いつ再トレーニングすべきかわからない |

---

## 2. DevOps と MLOps

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

### 主な違い:

| |開発運用 | MLOps |
|---|--------|------|
| **アーティファクト** |バイナリ/コンテナ |モデル + データ + 構成 |
| **テスト** |単体テスト、統合 | + データ検証、モデル検証 |
| **CI/CD** |コードの変更 | + データ変更、モデルの再トレーニング |
| **モニタリング** |稼働時間、遅延 | + データドリフト、モデルのパフォーマンス |
| **バージョン管理** |コード (Git) | + データ + モデル + パイプライン |
| **再現性** |簡単 |非常に難しい (ランダム シード、GPU など) |

---

## 3. MLOps 成熟度モデル

### レベル 0: MLOps なし (手動)

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

### レベル 1: DevOps はあるが、まだ MLOps ではない

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

### レベル 2: ML パイプラインの自動化

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

### レベル 3: ML の CI/CD

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

### レベル 4: 完全な MLOps

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

## 4. ML における技術的負債

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

### 技術的負債の種類:

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

## 5. MLOps ツール エコシステム

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

### チームの規模に応じて選択されるツール:

|チームの規模 |推薦 |
|----------|------|
| **1 ～ 3 名様** | MLflow + DVC + Docker |
| **3 ～ 10 名様** | + 空気の流れ + 饗宴 + 明らかに |
| **10 名以上** |フルプラットフォーム: Kubeflow / Vertex AI / SageMaker |
| **エンタープライズ** |コマーシャル: Databricks、Dataiku、Domino |

---

## 6. ハンズオン: MLOps プロジェクトのセットアップ

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

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| **MLOps** | ML + DevOps + データ エンジニアリング |
| **ML ライフサイクル** |データ → トレーニング → 導入 → 監視 → 再トレーニング |
| **成熟度 0-4** |手動 → 自動 → CI/CD → フル MLOps |
| **技術的負債** | ML コードはわずか ~5%、95% はインフラストラクチャです。
| **ツール** | MLflow、DVC、Feast、Kubeflow、明らかに |

## 演習

1. **チームを評価します:** あなたのチームはどのくらいの成熟度レベルにありますか?ギャップをリストします。
2. **プロジェクトのセットアップ:** 上記のテンプレートに従ってプロジェクト構造を作成します。 git + dvc を初期化します。
3. **調査ツール:** 2 つの実験追跡ツールを比較します: MLflow と重みとバイアス。チームに 1 つを選択します。

> **次の記事:** 実験の追跡 — MLflow、重み、バイアス。
