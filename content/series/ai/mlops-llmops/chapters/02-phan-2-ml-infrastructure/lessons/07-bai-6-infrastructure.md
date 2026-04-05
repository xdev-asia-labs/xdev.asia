---
id: 019c9619-ac06-7006-d106-ac0600000006
title: 'Bài 6: Infrastructure — Docker, Kubernetes & Cloud ML'
slug: bai-6-infrastructure
description: >-
  ML infrastructure: Docker cho ML, multi-stage builds. Kubernetes cho ML
  workloads, GPU scheduling. Cloud ML platforms: AWS SageMaker, GCP Vertex
  AI, Azure ML. Infrastructure as Code với Terraform.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: ML Infrastructure"
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: "MLOps & LLMOps: Đưa AI lên Production"
  slug: mlops-llmops
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7258" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7258)"/>

  <!-- Decorations -->
  <g>
    <circle cx="809" cy="137" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1018" cy="86" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="727" cy="35" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="936" cy="244" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="193" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="207" x2="1100" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="237" x2="1050" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="943.3730669589464,86 943.3730669589464,128 907,149 870.6269330410536,128 870.6269330410536,86.00000000000001 907,65" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI &amp; ML — Bài 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: Infrastructure — Docker, Kubernetes</tspan>
      <tspan x="60" dy="42">&amp; Cloud ML</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">MLOps &amp; LLMOps: Đưa AI lên Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: ML Infrastructure</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

ML model chạy trên laptop → chuyển lên server → fail. "Works on my machine" syndrome nhưng phiên bản ML: khác CUDA, khác PyTorch, khác numpy version...

> 🎯 **Bài này:** Docker containerize ML, Kubernetes orchestrate, Cloud ML platforms để scale.

---

## 1. Docker cho ML

### 1.1 Basic ML Dockerfile

```dockerfile
# Dockerfile — ML Training
FROM python:3.11-slim

# System dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libgomp1 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python deps (cache layer)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy code
COPY src/ src/
COPY configs/ configs/

# Default command
CMD ["python", "src/models/train.py", "--config", "configs/training.yaml"]
```

### 1.2 GPU Docker

```dockerfile
# Dockerfile.gpu — ML Training với GPU
FROM nvidia/cuda:12.1-cudnn8-runtime-ubuntu22.04

# Python
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 python3-pip \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# PyTorch with CUDA
COPY requirements.txt .
RUN pip3 install --no-cache-dir torch torchvision --index-url \
    https://download.pytorch.org/whl/cu121
RUN pip3 install --no-cache-dir -r requirements.txt

COPY src/ src/
COPY configs/ configs/

CMD ["python3", "src/models/train.py"]
```

### 1.3 Multi-stage Build (Production Serving)

```dockerfile
# Dockerfile.serving — Optimized cho serving
# === Stage 1: Build ===
FROM python:3.11 AS builder

WORKDIR /build
COPY requirements-serving.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements-serving.txt

# === Stage 2: Runtime ===
FROM python:3.11-slim

# Copy chỉ những gì cần
COPY --from=builder /install /usr/local

WORKDIR /app
COPY src/serving/ src/serving/
COPY models/ models/

# Non-root user
RUN useradd -m appuser
USER appuser

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost:8000/health || exit 1

CMD ["uvicorn", "src.serving.api:app", \
     "--host", "0.0.0.0", "--port", "8000", \
     "--workers", "4"]
```

### 1.4 Docker Compose cho ML Stack

```yaml
# docker-compose.yml
services:
  # Training
  trainer:
    build:
      context: .
      dockerfile: Dockerfile.gpu
    deploy:
      resources:
        reservations:
          devices:
            - capabilities: [gpu]
    volumes:
      - ./data:/app/data
      - ./models:/app/models
    environment:
      - MLFLOW_TRACKING_URI=http://mlflow:5000
      - WANDB_API_KEY=${WANDB_API_KEY}

  # Serving
  api:
    build:
      context: .
      dockerfile: Dockerfile.serving
    ports:
      - "8000:8000"
    volumes:
      - ./models:/app/models:ro
    environment:
      - MODEL_NAME=churn-predictor
      - MODEL_STAGE=Production

  # MLflow
  mlflow:
    image: ghcr.io/mlflow/mlflow:latest
    ports:
      - "5000:5000"
    volumes:
      - mlflow_data:/mlflow
    command: >
      mlflow server
      --host 0.0.0.0
      --backend-store-uri sqlite:///mlflow/mlflow.db
      --default-artifact-root /mlflow/artifacts

  # Monitoring
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    depends_on:
      - prometheus
    volumes:
      - grafana_data:/var/lib/grafana

volumes:
  mlflow_data:
  grafana_data:
```

---

## 2. Kubernetes cho ML

### 2.1 ML Training Job

```yaml
# k8s/training-job.yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: model-training-v2
  labels:
    app: ml-training
    model: churn-predictor
spec:
  backoffLimit: 2
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: trainer
          image: my-registry/ml-trainer:latest
          command: ["python", "src/models/train.py"]
          args:
            - "--config"
            - "configs/training.yaml"
            - "--experiment"
            - "churn-v2"
          resources:
            requests:
              cpu: "4"
              memory: "16Gi"
              nvidia.com/gpu: "1"
            limits:
              cpu: "8"
              memory: "32Gi"
              nvidia.com/gpu: "1"
          env:
            - name: MLFLOW_TRACKING_URI
              value: "http://mlflow-service:5000"
          volumeMounts:
            - name: data
              mountPath: /app/data
            - name: models
              mountPath: /app/models
      volumes:
        - name: data
          persistentVolumeClaim:
            claimName: training-data-pvc
        - name: models
          persistentVolumeClaim:
            claimName: models-pvc
      nodeSelector:
        gpu-type: a100
```

### 2.2 Model Serving Deployment

```yaml
# k8s/serving-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: churn-predictor
  labels:
    app: churn-predictor
spec:
  replicas: 3
  selector:
    matchLabels:
      app: churn-predictor
  template:
    metadata:
      labels:
        app: churn-predictor
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "8000"
    spec:
      containers:
        - name: api
          image: my-registry/ml-serving:latest
          ports:
            - containerPort: 8000
          resources:
            requests:
              cpu: "1"
              memory: "2Gi"
            limits:
              cpu: "2"
              memory: "4Gi"
          readinessProbe:
            httpGet:
              path: /health
              port: 8000
            initialDelaySeconds: 10
            periodSeconds: 5
          livenessProbe:
            httpGet:
              path: /health
              port: 8000
            initialDelaySeconds: 30
            periodSeconds: 10
          env:
            - name: MODEL_NAME
              value: "churn-predictor"
---
apiVersion: v1
kind: Service
metadata:
  name: churn-predictor-svc
spec:
  selector:
    app: churn-predictor
  ports:
    - port: 80
      targetPort: 8000
  type: ClusterIP
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: churn-predictor-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: churn-predictor
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```

### 2.3 CronJob cho Scheduled Retraining

```yaml
# k8s/retrain-cronjob.yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: weekly-retrain
spec:
  schedule: "0 2 * * 1"  # Monday 2am
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
            - name: retrain
              image: my-registry/ml-trainer:latest
              command: ["python", "pipelines/retrain.py"]
              resources:
                requests:
                  nvidia.com/gpu: "1"
```

---

## 3. Cloud ML Platforms

### 3.1 AWS SageMaker

```python
"""AWS SageMaker — Managed ML platform"""
import sagemaker
from sagemaker.estimator import Estimator

session = sagemaker.Session()
role = "arn:aws:iam::role/SageMakerRole"

# Training
estimator = Estimator(
    image_uri="my-training-image:latest",
    role=role,
    instance_count=1,
    instance_type="ml.g5.xlarge",  # GPU instance
    output_path="s3://my-bucket/models/",
    hyperparameters={
        "epochs": 20,
        "learning_rate": 0.001,
        "batch_size": 32,
    },
)

estimator.fit({
    "training": "s3://my-bucket/data/train/",
    "validation": "s3://my-bucket/data/val/",
})

# Deploy
predictor = estimator.deploy(
    initial_instance_count=1,
    instance_type="ml.m5.xlarge",
)

# Predict
result = predictor.predict(input_data)
```

### 3.2 GCP Vertex AI

```python
"""Google Cloud Vertex AI"""
from google.cloud import aiplatform

aiplatform.init(
    project="my-project",
    location="us-central1",
)

# Training
job = aiplatform.CustomTrainingJob(
    display_name="churn-training",
    script_path="src/models/train.py",
    container_uri="us-docker.pkg.dev/vertex-ai/training/pytorch-gpu.1-13:latest",
    requirements=["scikit-learn", "pandas"],
)

model = job.run(
    replica_count=1,
    machine_type="n1-standard-8",
    accelerator_type="NVIDIA_TESLA_T4",
    accelerator_count=1,
)

# Deploy
endpoint = model.deploy(
    machine_type="n1-standard-4",
    min_replica_count=1,
    max_replica_count=5,
)

# Predict
prediction = endpoint.predict(instances=[{"features": [1, 2, 3]}])
```

### 3.3 So sánh Cloud Platforms

| Feature | AWS SageMaker | GCP Vertex AI | Azure ML |
|---------|--------------|---------------|----------|
| **Ease of use** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **GPU availability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **AutoML** | ✅ Autopilot | ✅ AutoML | ✅ AutoML |
| **Experiment tracking** | ✅ Built-in | ✅ Built-in | ✅ Built-in |
| **Model registry** | ✅ | ✅ | ✅ |
| **Feature store** | ✅ | ✅ | ✅ |
| **Pricing** | 💰💰💰 | 💰💰 | 💰💰💰 |
| **Best for** | Enterprise | Research + Prod | Microsoft shops |

---

## 4. Infrastructure as Code

```hcl
# terraform/ml-infra/main.tf
# Infrastructure as Code với Terraform

provider "aws" {
  region = "us-east-1"
}

# S3 bucket cho data & models
resource "aws_s3_bucket" "ml_artifacts" {
  bucket = "my-ml-artifacts"
  
  versioning {
    enabled = true
  }
}

# ECR cho Docker images
resource "aws_ecr_repository" "ml_training" {
  name = "ml-training"
}

resource "aws_ecr_repository" "ml_serving" {
  name = "ml-serving"
}

# ECS Cluster cho serving
resource "aws_ecs_cluster" "ml_serving" {
  name = "ml-serving-cluster"
}

# SageMaker Endpoint
resource "aws_sagemaker_endpoint_configuration" "churn" {
  name = "churn-predictor-config"

  production_variants {
    variant_name           = "primary"
    model_name             = aws_sagemaker_model.churn.name
    initial_instance_count = 2
    instance_type          = "ml.m5.xlarge"
  }
}

# RDS cho MLflow
resource "aws_db_instance" "mlflow" {
  engine         = "postgres"
  instance_class = "db.t3.medium"
  allocated_storage = 20
  db_name        = "mlflow"
}
```

---

## 5. Best Practices

```
Docker:
  ✅ Multi-stage builds (build vs runtime)
  ✅ Pin dependency versions
  ✅ Non-root user
  ✅ Health checks
  ✅ .dockerignore (exclude data, notebooks)

Kubernetes:
  ✅ Resource requests & limits
  ✅ HPA for auto-scaling
  ✅ Readiness & liveness probes
  ✅ Node selectors cho GPU
  ✅ Separate namespaces (dev/staging/prod)

Cloud:
  ✅ Spot instances cho training (70% cheaper)
  ✅ Auto-scaling cho serving
  ✅ Monitoring & alerting
  ✅ Infrastructure as Code
  ✅ Cost monitoring & budgets
```

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Docker** | Containerize ML → reproducible environment |
| **Multi-stage** | Separate build vs runtime → smaller images |
| **GPU Docker** | nvidia/cuda base image + NVIDIA Container Toolkit |
| **Kubernetes** | Orchestrate: Jobs (train), Deployments (serve), CronJobs (retrain) |
| **HPA** | Auto-scale serving pods |
| **SageMaker** | AWS managed ML, end-to-end |
| **Vertex AI** | GCP managed ML, tốt cho research |
| **Terraform** | Infrastructure as Code |

## Bài tập

1. **Docker:** Tạo Dockerfile cho ML serving (multi-stage, < 500MB image size).
2. **Compose:** Tạo docker-compose với API + MLflow + Prometheus + Grafana.
3. **K8s:** Deploy model serving lên K8s cluster (minikube/kind). Thêm HPA.
4. **Cloud:** Deploy 1 model lên SageMaker hoặc Vertex AI (free tier).

> **Bài tiếp theo:** LLMOps vs MLOps — Paradigm Shift.
