---
id: 019e0a01-bb20-7001-c001-ee2000000001
title: 'Lesson 20: Cloud Deployment — AWS, Azure & GCP for AI'
slug: bai-20-cloud-deployment-aws-azure-gcp
description: >-
  AWS: SageMaker, Bedrock, Lambda. Azure: OpenAI Service, ML Studio. GCP: Vertex
  AI. Kubernetes for AI workloads. Serverless vs dedicated GPU instances.
  Infrastructure as Code (Terraform). Cost estimation.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 19
section_title: 'Part 6: Deploy AI System Production'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI Agent Engineer: From Zero to Production'
  slug: ai-agent-engineer-tu-zero-den-production
locale: en
---

> You finish training the model, the demo runs smoothly on the laptop — then the boss asks "when will we go into production for 10,000 users?" You look at the RTX 4090 GPU under the table and understand: self-host will not scale. Cloud deployment with managed GPU, auto-scaling, and global infrastructure is the bridge between prototype and production-grade AI system.

## 1. Cloud for AI — why not self-host?

### 1.1. Actual problem

When an AI system needs to serve production traffic, you face 3 big challenges:

```
Self-Host AI Server:
┌─────────────────────────────────────────────────┐
│  1. HARDWARE                                    │
│     - GPU A100 80GB: ~$15,000/card              │
│     - Need 2-4 cards cho model lớn              │
│     - Cooling, rack space, power                │
│     - Lead time: 6-12 tuần đặt hàng            │
│                                                 │
│  2. OPERATIONS                                  │
│     - 24/7 monitoring & on-call                 │
│     - Driver updates, security patches          │
│     - Network, firewall, DDoS protection        │
│     - Backup, disaster recovery                 │
│                                                 │
│  3. SCALING                                     │
│     - Traffic spike 10x → mua thêm GPU?        │
│     - Traffic giảm → GPU idle, tiền vẫn chạy   │
│     - Multi-region → duplicate infrastructure   │
└─────────────────────────────────────────────────┘

Cloud AI Platform:
┌─────────────────────────────────────────────────┐
│  ✓ GPU on-demand (pay per second)               │
│  ✓ Auto-scale 0 → N instances                  │
│  ✓ Managed security, networking                 │
│  ✓ Global regions, low latency                  │
│  ✓ Managed ML services (training, serving)      │
│  ✓ Start in minutes, not months                 │
└─────────────────────────────────────────────────┘
```

### 1.2. When should I self-host?

| Criteria | Cloud | Self-Host |
|---|---|---|
| Traffic < 100 req/s, predictable | ✓ (but more expensive than long-term) | ✓ (if hardware is available) |
| Traffic bursty, unpredictable | ✓✓✓ | ✗ |
| Data sovereignty (military, medical) | Depends (sovereign cloud) | ✓✓ |
| Budget < $5K/month | ✓ | ✗ (not enough to buy GPU) |
| Budget > $50K/month, stable | ✓ | ✓✓ (Better ROI) |
| Team < 5 engineers | ✓✓ | ✗ (not enough ops people) |
| Latency < 10ms required | Edge/hybrid | ✓ |

> **Rule of thumb:** Start on the cloud, only migrate to self-host when monthly spend > $30-50K and traffic is stable for 6+ months.

### 1.3. Landscape overview 3 clouds

```
                    ┌──────────────────────────────────────┐
                    │        CLOUD AI SERVICES             │
                    └──────────┬───────────────────────────┘
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
    ┌──────────┐        ┌──────────┐        ┌──────────┐
    │   AWS    │        │  AZURE   │        │   GCP    │
    ├──────────┤        ├──────────┤        ├──────────┤
    │ Bedrock  │        │ OpenAI   │        │ Vertex   │
    │ SageMaker│        │ Service  │        │ AI       │
    │ Lambda   │        │ ML Studio│        │ Cloud Run│
    │ ECS/EKS  │        │ Container│        │ GKE      │
    │          │        │ Apps     │        │ Autopilot│
    └──────────┘        └──────────┘        └──────────┘
```

## 2. AWS AI Services

### 2.1. Amazon Bedrock — Managed LLM APIs

**Bedrock** is a fully managed service that allows calling foundation models (Claude, LLaMA, Mistral, Titan) via API — no need to manage infrastructure.

```python
# aws_bedrock_example.py
import boto3
import json

# Initialize Bedrock client
bedrock = boto3.client(
    service_name="bedrock-runtime",
    region_name="us-east-1"
)

def call_claude_on_bedrock(prompt: str, max_tokens: int = 1024) -> str:
    """Call Claude 3.5 Sonnet via Amazon Bedrock."""
    body = json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": max_tokens,
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ],
        "temperature": 0.7
    })

    response = bedrock.invoke_model(
        modelId="anthropic.claude-3-5-sonnet-20241022-v2:0",
        body=body,
        contentType="application/json",
        accept="application/json"
    )

    result = json.loads(response["body"].read())
    return result["content"][0]["text"]


def call_claude_streaming(prompt: str):
    """Stream response từ Claude qua Bedrock."""
    body = json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 2048,
        "messages": [{"role": "user", "content": prompt}]
    })

    response = bedrock.invoke_model_with_response_stream(
        modelId="anthropic.claude-3-5-sonnet-20241022-v2:0",
        body=body
    )

    for event in response["body"]:
        chunk = json.loads(event["chunk"]["bytes"])
        if chunk["type"] == "content_block_delta":
            yield chunk["delta"]["text"]
```

**Bedrock key features:**

| Features | Description |
|---|---|
| Model catalog | Claude, LLaMA, Mistral, Cohere, Titan |
| Knowledge Bases | RAG with S3 data sources |
| Guardrails | Content filtering, PII detection |
| Fine-tuning | Custom fine-tune on managed infra |
| Agents | Build AI agents with tool use |
| Pricing | Pay per input/output token |

### 2.2. Amazon SageMaker — Custom Model Training & Deployment

**SageMaker** is an end-to-end platform for custom ML: training, tuning, deploying.

```python
# sagemaker_deploy.py
import sagemaker
from sagemaker.huggingface import HuggingFaceModel

role = sagemaker.get_execution_role()

# Deploy Hugging Face model lên SageMaker Endpoint
hub_config = {
    "HF_MODEL_ID": "sentence-transformers/all-MiniLM-L6-v2",
    "HF_TASK": "feature-extraction"
}

huggingface_model = HuggingFaceModel(
    transformers_version="4.37.0",
    pytorch_version="2.1.0",
    py_version="py310",
    env=hub_config,
    role=role,
)

# Deploy với auto-scaling
predictor = huggingface_model.deploy(
    initial_instance_count=1,
    instance_type="ml.g5.xlarge",  # NVIDIA A10G GPU
    endpoint_name="embedding-endpoint-prod"
)

# Inference
result = predictor.predict({
    "inputs": "Deploy AI models to production"
})
```

### 2.3. AWS Lambda + API Gateway — Serverless AI

For lightweight AI tasks (< 10s response, < 10GB memory):

```python
# lambda_function.py
import json
import boto3

bedrock = boto3.client("bedrock-runtime")

def lambda_handler(event, context):
    """Serverless AI endpoint via Lambda."""
    body = json.loads(event.get("body", "{}"))
    user_message = body.get("message", "")

    if not user_message:
        return {
            "statusCode": 400,
            "body": json.dumps({"error": "message is required"})
        }

    response = bedrock.invoke_model(
        modelId="anthropic.claude-3-haiku-20240307-v1:0",
        body=json.dumps({
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 512,
            "messages": [{"role": "user", "content": user_message}]
        })
    )

    result = json.loads(response["body"].read())

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps({
            "response": result["content"][0]["text"],
            "model": "claude-3-haiku",
            "usage": result.get("usage", {})
        })
    }
```

### 2.4. ECR/ECS/EKS — Containerized AI

```
AWS Container Options cho AI:
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ECR (Elastic Container Registry)                       │
│  └── Store Docker images (AI app + model weights)       │
│                                                         │
│  ECS (Elastic Container Service)                        │
│  └── Run containers trên AWS-managed cluster            │
│  └── Fargate: serverless containers (no GPU)            │
│  └── EC2 launch type: GPU instances (p4d, g5)           │
│                                                         │
│  EKS (Elastic Kubernetes Service)                       │
│  └── Managed Kubernetes                                 │
│  └── GPU node pools, auto-scaling                       │
│  └── Best cho complex AI microservices                  │
│                                                         │
│  Recommendation:                                        │
│  - Simple API: ECS Fargate (no GPU) hoặc Lambda         │
│  - GPU inference: ECS EC2 with g5 instances             │
│  - Complex system: EKS with mixed node pools            │
└─────────────────────────────────────────────────────────┘
```

## 3. Azure AI Services

### 3.1. Azure OpenAI Service

Azure OpenAI enables the use of **GPT-4, GPT-4o, o1, embeddings** in the Azure ecosystem with enterprise security.

```python
# azure_openai_example.py
from openai import AzureOpenAI

client = AzureOpenAI(
    api_key="YOUR_AZURE_OPENAI_KEY",
    api_version="2024-10-21",
    azure_endpoint="https://your-resource.openai.azure.com"
)

def chat_with_azure_openai(messages: list) -> str:
    """Call Azure OpenAI GPT-4o."""
    response = client.chat.completions.create(
        model="gpt-4o", # deployment name
        messages=messages,
        temperature=0.7,
        max_tokens=2048
    )
    return response.choices[0].message.content


def get_embeddings(texts: list[str]) -> list[list[float]]:
    """Generate embeddings via Azure OpenAI."""
    response = client.embeddings.create(
        model="text-embedding-3-large", # deployment name
        input=texts
    )
    return [item.embedding for item in response.data]
```

**Azure OpenAI vs OpenAI live:**

| Feature | OpenAI Direct | Azure OpenAI |
|---|---|---|
| Models | GPT-4o, o1, DALL-E | Same models |
| Data privacy | OpenAI policy | Azure data boundary |
| SLA | No enterprise SLA | 99.9% SLA |
| Network | Public internet | Private endpoints, VNet |
| Compliance | SOC 2 | SOC 2, HIPAA, FedRAMP |
| Content filtering | Basic | Configurable filters |
| Pricing | Per token | Per token (similar) |
| Regional deployment | US, EU | 20+ Azure regions |

### 3.2. Azure ML Studio — Custom Experiments

```python
# azure_ml_deploy.py
from azure.ai.ml import MLClient
from azure.ai.ml.entities import (
    ManagedOnlineEndpoint,
    ManagedOnlineDeployment,
    Model,
    Environment
)
from azure.identity import DefaultAzureCredential

# Authenticate
ml_client = MLClient(
    credential=DefaultAzureCredential(),
    subscription_id="your-sub-id",
    resource_group_name="ai-production-rg",
    workspace_name="ai-workspace"
)

# Register model
model = Model(
    path="./models/sentiment-classifier",
    name="sentiment-classifier",
    description="Fine-tuned sentiment model"
)
registered_model = ml_client.models.create_or_update(model)

# Create endpoint
endpoint = ManagedOnlineEndpoint(
    name="sentiment-endpoint",
    auth_mode="key"
)
ml_client.online_endpoints.begin_create_or_update(endpoint).result()

# Deploy
deployment = ManagedOnlineDeployment(
    name="blue",
    endpoint_name="sentiment-endpoint",
    model=registered_model.id,
    instance_type="Standard_NC4as_T4_v3", #NVIDIA T4 GPU
    instance_count=2
)
ml_client.online_deployments.begin_create_or_update(deployment).result()
```

### 3.3. Azure Container Apps cho AI Microservices

**Container Apps** = serverless containers with auto-scale to zero — ideal for AI APIs:

```yaml
# container-app.yaml
apiVersion: apps/v1
kind: ContainerApp
properties:
  managedEnvironmentId: /subscriptions/.../managedEnvironments/ai-env
  configuration:
    activeRevisionsMode: Multiple
    ingress:
      external: true
      targetPort: 8000
      traffic:
        -Name revision: ai-api--v2
          weight: 90
        -Name revision: ai-api--v3 # canary
          weight: 10
  templates:
    containers:
      - name: ai-api
        image: myregistry.azurecr.io/ai-agent:v3
        resources:
          CPU: 2.0
          memory: 4Gi
        env:
          - name: AZURE_OPENAI_ENDPOINT
            secretRef: openai-endpoint
          - name: AZURE_OPENAI_KEY
            secretRef: openai-key
    scale:
      minReplicas: 0 # scale to zero when idle
      maxReplicas: 20
      rules:
        - name: http-scaling
          http:
            metadata:
              concurrentRequests: "50"
```

```bash
# Deploy Container App
az containerapp create \
  --name ai-agent-api \
  --resource-group ai-production-rg \
  --environment ai-env\
  --image myregistry.azurecr.io/ai-agent:v3 \
  --target-port 8000\
  --ingress external \
  --min-replicas 0 \
  --max-replicas 20\
  --cpu 2.0 --memory 4Gi \
  --secrets openai-key="$AZURE_OPENAI_KEY" \
  --env-vars AZURE_OPENAI_KEY=secretref:openai-key
```

## 4. Google Cloud AI

### 4.1. Vertex AI — Gemini & Custom Models

```python
# vertex_ai_example.py
import vertexai
from vertexai.generative_models import GenerativeModel

vertexai.init(project="my-ai-project", location="us-central1")

# Gemini models
model = GenerativeModel("gemini-2.0-flash")

def generate_with_gemini(prompt: str) -> str:
    """Generate response with Gemini on Vertex AI."""
    response = model.generate_content(
        prompt,
        generation_config={
            "max_output_tokens": 2048,
            "temperature": 0.7,
        }
    )
    return response.text


# Custom model deployment on Vertex AI
from google.cloud import aiplatform

aiplatform.init(project="my-ai-project", location="us-central1")

# Upload model
model = aiplatform.Model.upload(
    display_name="custom-classifier",
    artifact_uri="gs://my-bucket/models/classifier/",
    serving_container_image_uri=(
        "us-docker.pkg.dev/vertex-ai/prediction/"
        "pytorch-gpu.2-1:latest"
    )
)

# Deploy to endpoint
endpoint = model.deploy(
    deploy_model_display_name="classifier-v1",
    machine_type="n1-standard-4",
    accelerator_type="NVIDIA_TESLA_T4",
    accelerator_count=1,
    min_replica_count=1,
    max_replica_count=5
)
```

### 4.2. Cloud Run — Serverless AI Containers

**Cloud Run** supports **GPU** (NVIDIA L4) for serverless containers — unique advantage compared to AWS/Azure:

```yaml
#cloud-run-service.yaml
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: ai-agent-api
  annotations:
    run.googleapis.com/launch-stage: BETA
spec:
  templates:
    metadata:
      annotations:
        autoscaling.knative.dev/minScale: "0"
        autoscaling.knative.dev/maxScale: "10"
        run.googleapis.com/gpu-type: nvidia-l4
    spec:
      containers:
        - image: gcr.io/my-project/ai-agent:v3
          ports:
            - containerPort: 8000
          resources:
            limits:
              CPU: "4"
              memory: 16Gi
              nvidia.com/gpu: "1" # GPU!
          env:
            - name: MODEL_PATH
              value: /models/agent
```

```bash
# Deploy Cloud Run with GPU
gcloud run deploy ai-agent-api \
  --image gcr.io/my-project/ai-agent:v3 \
  --port 8000 \
  --gpu 1 \
  --gpu-type nvidia-l4 \
  --cpu 4 --memory 16Gi \
  --min-instances 0 \
  --max-instances 10 \
  --region us-central1 \
  --allow-unauthenticated
```

### 4.3. GKE Autopilot cho Kubernetes AI

```bash
# Create GKE Autopilot cluster (GPU auto-provisioned)
gcloud container clusters create-auto ai-cluster\
  --region us-central1 \
  --release-channel regular

# Deploy AI workload — Autopilot self-provisions GPU nodes
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ai-inference
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ai-inference
  template:
    metadata:
      labels:
        app: ai-inference
    spec:
      nodeSelector:
        cloud.google.com/gke-accelerator: nvidia-l4
      containers:
        - name: inference
          image: gcr.io/my-project/ai-inference:v2
          resources:
            limits:
              nvidia.com/gpu: 1
              cpu: "4"
              memory: "16Gi"
          ports:
            - containerPort: 8000
EOF
```

## 5. Mega Comparison — AWS vs Azure vs GCP

### 5.1. Feature comparison

| Feature | AWS | Azure | GCP |
|---|---|---|---|
| **Managed LLM API** | Bedrock (Claude, LLaMA, Mistral) | OpenAI Service (GPT-4o, o1) | Vertex AI (Gemini) |
| **Custom training** | SageMaker | Azure ML | Vertex AI Training |
| **Serverless inference** | Lambda + Bedrock | Container Apps | Cloud Run (GPU!) |
| **Kubernetes** | EKS | AKS | GKE Autopilot |
| **GPU containers** | ECS on EC2 | ACI / AKS | Cloud Run GPU |
| **Model registry** | SageMaker Registry | Azure ML Registry | Vertex AI Model Registry |
| **Vector search** | OpenSearch Serverless | AI Search | Vertex AI Vector Search |
| **Edge deployment** | Greengrass | IoT Edge | Coral / Edge TPU |
| **Fine-tuning** | Bedrock / SageMaker | OpenAI Service | Vertex AI |

### 5.2. GPU instance pricing (on-demand, 2025)

| GPU | Instance | AWS ($/hr) | Azure ($/hr) | GCP ($/hr) |
|---|---|---|---|---|
| NVIDIA T4 | Entry inference | $0.53 (g4dn.xl) | $0.53 (NC4as_T4) | $0.35 (n1+T4) |
| NVIDIA A10G | Mid inference | $1.01 (g5.xl) | — | — |
| NVIDIA L4 | Modern inference | $0.81 (g6.xl) | — | $0.70 (g2-std-4) |
| NVIDIA A100 40GB | Training | $3.67 (p4d) | $3.67 (NC24ads_A100) | $2.93 (a2-highgpu) |
| NVIDIA H100 80GB | Heavy training | $12.36 (p5) | $11.56 (NC80adis_H100) | $11.28 (a3-highgpu) |

> **Cost tip:** Spot/preemptible instances 60-70% off. Always use spot for training jobs because it can retry. Reserved instances receive a 30-40% discount on inference endpoints running 24/7.

### 5.3. Strengths & best-fit scenarios

```
┌─────────────────────────────────────────────────────────┐
│  AWS — Best khi:                                        │
│  ✓ Đã có AWS infrastructure                            │
│  ✓ Cần nhiều model choices (Bedrock)                   │
│  ✓ Complex ML pipelines (SageMaker)                    │
│  ✓ Enterprise, regulated industries                     │
├─────────────────────────────────────────────────────────┤
│  Azure — Best khi:                                      │
│  ✓ Dùng OpenAI models (GPT-4o exclusive features)      │
│  ✓ Microsoft ecosystem (365, Teams, Copilot)           │
│  ✓ Enterprise compliance (HIPAA, FedRAMP)              │
│  ✓ Hybrid cloud với on-prem                            │
├─────────────────────────────────────────────────────────┤
│  GCP — Best khi:                                        │
│  ✓ Training large models (TPU pods)                    │
│  ✓ Serverless GPU inference (Cloud Run)                │
│  ✓ Gemini models & Google ecosystem                    │
│  ✓ Research-oriented, data-heavy workloads             │
└─────────────────────────────────────────────────────────┘
```

## 6. Kubernetes for AI Workloads

### 6.1. GPU scheduling basics

```yaml
# k8s-gpu-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ai-inference-server
  namespace: ai-production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ai-inference
  template:
    metadata:
      labels:
        app: ai-inference
    spec:
      # Tolerations cho GPU nodes
      tolerations:
        - key: nvidia.com/gpu
          operator: Exists
          effect: NoSchedule

      # Node selector: chỉ schedule lên GPU nodes
      nodeSelector:
        accelerator: nvidia-l4

      containers:
        - name: inference
          image: registry.example.com/ai-agent:v3
          ports:
            - containerPort: 8000
          resources:
            requests:
              cpu: "2"
              memory: "8Gi"
              nvidia.com/gpu: 1     # Request 1 GPU
            limits:
              cpu: "4"
              memory: "16Gi"
              nvidia.com/gpu: 1     # Limit 1 GPU
          readinessProbe:
            httpGet:
              path: /health
              port: 8000
            initialDelaySeconds: 30   # model load time
            periodSeconds: 10
          livenessProbe:
            httpGet:
              path: /health
              port: 8000
            initialDelaySeconds: 60
            periodSeconds: 30
```

### 6.2. Node pools & autoscaling

```yaml
# cluster-autoscaler-config.yaml
# Mixed node pool strategy cho AI workloads
#
# Pool 1: CPU nodes (API gateway, preprocessing)
# Pool 2: GPU nodes (inference)
# Pool 3: High-memory nodes (embedding, RAG)

# HPA cho AI inference
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: ai-inference-hpa
  namespace: ai-production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ai-inference-server
  minReplicas: 2
  maxReplicas: 20
  metrics:
    # Scale dựa trên request concurrency
    - type: Pods
      pods:
        metric:
          name: http_requests_in_flight
        target:
          type: AverageValue
          averageValue: "10"
    # Scale dựa trên GPU utilization
    - type: Pods
      pods:
        metric:
          name: gpu_utilization_percent
        target:
          type: AverageValue
          averageValue: "70"
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
        - type: Pods
          value: 4
          periodSeconds: 60
    scaleDown:
      stabilizationWindowSeconds: 300   # wait 5 min before scale down
      policies:
        - type: Pods
          value: 1
          periodSeconds: 120
```

## 7. Serverless vs Dedicated GPU

### 7.1. Decision matrix

```
                    Requests/day
                    │
            10K+    │  ┌─────────────────────┐
                    │  │  DEDICATED GPU       │
                    │  │  (ECS, AKS, GKE)    │
                    │  │  Always-on instances  │
             1K     │  └─────────┬───────────┘
                    │            │
                    │  ┌─────────┴───────────┐
                    │  │  AUTO-SCALING GPU    │
                    │  │  (K8s + HPA)        │
                    │  │  Min 1, scale up     │
              100   │  └─────────┬───────────┘
                    │            │
                    │  ┌─────────┴───────────┐
                    │  │  SERVERLESS          │
                    │  │  (Cloud Run GPU,     │
                    │  │   Lambda + Bedrock)  │
               10   │  │  Scale to 0          │
                    │  └─────────────────────┘
                    └──────────────────────────
                    Latency tolerance ───────►
                    Low            High
```

### 7.2. Cost comparison (monthly estimate)

| Scenario | Serverless | Dedicated GPU (1x L4) | K8s Auto-scale |
|---|---|---|---|
| 100 req/day, light | $5-20 | $500+ | $500+ |
| 1K req/day, medium | $50-200 | $500+ | $500-700 |
| 10K req/day, steady | $500-2000 | $500-700 | $500-1000 |
| 100K req/day, heavy | $5000+ | $700-1500 | $1000-3000 |
| Cold start | 5-30s (GPU), <1s (API) | 0s | 0s (min>0) |

> **Key insight:** Serverless is cheaper when traffic is low/bursty. Dedicated is cheaper when traffic is high/stable. Kubernetes gives the best flexibility but highest complexity.

## 8. Infrastructure as Code — Terraform for AI

### 8.1. Why IaC?

Manual click-ops on cloud console = **no reproducible**, **no version control**, **no review**. Terraform solves all 3.

### 8.2. Terraform example: AWS AI infrastructure

```hcl
# main.tf — AI Production Infrastructure

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket = "ai-terraform-state"
    key    = "production/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.aws_region
}

# --- VPC ---
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.5.0"

  name = "ai-production-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = true
}

# --- ECS Cluster ---
resource "aws_ecs_cluster" "ai_cluster" {
  name = "ai-production"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}

# --- ECS Task Definition (GPU) ---
resource "aws_ecs_task_definition" "ai_agent" {
  family                   = "ai-agent"
  network_mode             = "awsvpc"
  requires_compatibilities = ["EC2"]
  cpu                      = "4096"
  memory                   = "16384"

  container_definitions = jsonencode([
    {
      name  = "ai-agent"
      image = "${aws_ecr_repository.ai_agent.repository_url}:latest"
      portMappings = [
        {
          containerPort = 8000
          protocol      = "tcp"
        }
      ]
      resourceRequirements = [
        {
          type  = "GPU"
          value = "1"
        }
      ]
      environment = [
        {
          name  = "ENV"
          value = "production"
        }
      ]
      secrets = [
        {
          name      = "ANTHROPIC_API_KEY"
          valueFrom = aws_secretsmanager_secret.api_key.arn
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = "/ecs/ai-agent"
          "awslogs-region"        = var.aws_region
          "awslogs-stream-prefix" = "ecs"
        }
      }
    }
  ])
}

# --- ECR Repository ---
resource "aws_ecr_repository" "ai_agent" {
  name                 = "ai-agent"
  image_tag_mutability = "IMMUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

# --- Secrets ---
resource "aws_secretsmanager_secret" "api_key" {
  name = "ai-agent/anthropic-api-key"
}

# --- ALB ---
resource "aws_lb" "ai_alb" {
  name               = "ai-agent-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_sg.id]
  subnets            = module.vpc.public_subnets
}
```

```hcl
# variables.tf
variable "aws_region" {
  description = "AWS region for deployment"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "gpu_instance_type" {
  description = "EC2 instance type for GPU nodes"
  type        = string
  default     = "g5.xlarge"
}
```

```bash
# Terraform workflow
terraform init          # download providers
terraform plan          # preview changes
terraform apply         # create/update infrastructure
terraform destroy       # tear down (cẩn thận!)
```

## 9. Networking & Security

### 9.1. VPC & Private Endpoints

```
Production AI Network Architecture:
┌─────────────────────────────────────────────────────────┐
│  VPC (10.0.0.0/16)                                      │
│                                                         │
│  ┌──────────────────┐    ┌──────────────────┐          │
│  │ Public Subnet    │    │ Public Subnet    │          │
│  │ 10.0.101.0/24   │    │ 10.0.102.0/24   │          │
│  │                  │    │                  │          │
│  │  ┌────────────┐  │    │  ┌────────────┐  │          │
│  │  │    ALB     │  │    │  │    ALB     │  │          │
│  │  └─────┬──────┘  │    │  └─────┬──────┘  │          │
│  └────────┼─────────┘    └────────┼─────────┘          │
│           │                       │                     │
│  ┌────────┼─────────┐    ┌────────┼─────────┐          │
│  │ Private Subnet   │    │ Private Subnet   │          │
│  │ 10.0.1.0/24     │    │ 10.0.2.0/24     │          │
│  │                  │    │                  │          │
│  │ ┌──────────────┐ │    │ ┌──────────────┐ │          │
│  │ │ AI Agent Pod │ │    │ │ AI Agent Pod │ │          │
│  │ │  (GPU)       │ │    │ │  (GPU)       │ │          │
│  │ └──────┬───────┘ │    │ └──────┬───────┘ │          │
│  └────────┼─────────┘    └────────┼─────────┘          │
│           │                       │                     │
│           └───────────┬───────────┘                     │
│                       │                                 │
│  ┌────────────────────┼────────────────────┐           │
│  │  VPC Endpoints (Private)                │           │
│  │  ├── Bedrock Runtime                    │           │
│  │  ├── Secrets Manager                    │           │
│  │  ├── S3 (model artifacts)              │           │
│  │  ├── CloudWatch Logs                    │           │
│  │  └── ECR (pull images)                 │           │
│  └─────────────────────────────────────────┘           │
└─────────────────────────────────────────────────────────┘
```

### 9.2. Secret management

```python
# secrets_manager.py — Load secrets an toàn
import boto3
import json
from functools import lru_cache

secrets_client = boto3.client("secretsmanager")

@lru_cache(maxsize=32)
def get_secret(secret_name: str) -> dict:
    """Load secret from AWS Secrets Manager (cached)."""
    response = secrets_client.get_secret_value(
        SecretId=secret_name
    )
    return json.loads(response["SecretString"])


# Usage
secrets = get_secret("ai-agent/production")
api_key = secrets["ANTHROPIC_API_KEY"]
db_url = secrets["DATABASE_URL"]
```

**Security checklist for cloud AI:**

| Item | Description | Priorities |
|---|---|---|
| VPC Private Subnets | AI services are not exposed to the internet | Critical |
| VPC Endpoints | Traffic does not go through the public internet | High |
| Secrets Manager | Do not hardcode API keys | Critical |
| IAM Least Privilege | Only grant necessary permissions | Critical |
| Encryption at rest | S3, EBS, RDS encrypted | High |
| Encryption in transit | TLS 1.2+ all connections | High |
| WAF | Protect API from attacks | Medium |
| Audit logging | CloudTrail / Azure Activity Log | High |
| Network ACLs | Restrict traffic between subnets | Medium |

## 10. Multi-Cloud & Vendor Lock-in

### 10.1. Lock-in risks

```
Vendor Lock-in Spectrum:
┌───────────────────────────────────────────────────┐
│  LOW LOCK-IN                   HIGH LOCK-IN       │
│  ◄──────────────────────────────────────────►     │
│                                                   │
│  Kubernetes (K8s)    Containers    Managed LLM    │
│  Terraform           Serverless    Proprietary    │
│  Open models         Functions     training       │
│  Standard APIs                     Custom SDK     │
│                                                   │
│  Easy to migrate     Moderate      Hard to leave  │
└───────────────────────────────────────────────────┘
```

### 10.2. Abstraction layer strategy

```python
# llm_provider.py — Abstract LLM provider
from abc import ABC, abstractmethod

class LLMProvider(ABC):
    """Abstract LLM provider — switch cloud without code changes."""

    @abstractmethod
    async def generate(self, messages: list, **kwargs) -> str:
        pass

    @abstractmethod
    async def embed(self, texts: list[str]) -> list[list[float]]:
        pass


class BedrockProvider(LLMProvider):
    """AWS Bedrock implementation."""

    def __init__(self, model_id: str = "anthropic.claude-3-5-sonnet-20241022-v2:0"):
        import boto3
        self.client = boto3.client("bedrock-runtime")
        self.model_id = model_id

    async def generate(self, messages: list, **kwargs) -> str:
        import json
        body = json.dumps({
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": kwargs.get("max_tokens", 1024),
            "messages": messages
        })
        response = self.client.invoke_model(
            modelId=self.model_id, body=body
        )
        result = json.loads(response["body"].read())
        return result["content"][0]["text"]

    async def embed(self, texts: list[str]) -> list[list[float]]:
        # Bedrock embedding implementation
        ...


class AzureOpenAIProvider(LLMProvider):
    """Azure OpenAI implementation."""

    def __init__(self, endpoint: str, api_key: str):
        from openai import AzureOpenAI
        self.client = AzureOpenAI(
            azure_endpoint=endpoint,
            api_key=api_key,
            api_version="2024-10-21"
        )

    async def generate(self, messages: list, **kwargs) -> str:
        response = self.client.chat.completions.create(
            model="gpt-4o",
            messages=messages,
            max_tokens=kwargs.get("max_tokens", 1024)
        )
        return response.choices[0].message.content

    async def embed(self, texts: list[str]) -> list[list[float]]:
        response = self.client.embeddings.create(
            model="text-embedding-3-large",
            input=texts
        )
        return [item.embedding for item in response.data]


class VertexAIProvider(LLMProvider):
    """GCP Vertex AI implementation."""

    async def generate(self, messages: list, **kwargs) -> str:
        from vertexai.generative_models import GenerativeModel
        model = GenerativeModel("gemini-2.0-flash")
        # Convert messages format
        prompt = "\n".join(m["content"] for m in messages)
        response = model.generate_content(prompt)
        return response.text

    async def embed(self, texts: list[str]) -> list[list[float]]:
        # Vertex AI embedding implementation
        ...


# Factory
def get_llm_provider(cloud: str = "aws") -> LLMProvider:
    """Get LLM provider based on cloud platform."""
    providers = {
        "aws": lambda: BedrockProvider(),
        "azure": lambda: AzureOpenAIProvider(
            endpoint="...", api_key="..."
        ),
        "gcp": lambda: VertexAIProvider()
    }
    return providers[cloud]()
```

## 11. Step-by-Step: Deploy AI Agent to AWS ECS

End-to-end deployment of AI Agent (from Lesson 16) to AWS ECS.

### 11.1. Prepare Dockerfile

```dockerfile
# Dockerfile
FROM python:3.12-slim AS builder

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

FROM python:3.12-slim

WORKDIR /app

# Copy installed packages
COPY --from=builder /install /usr/local

# Copy application code
COPY src/ ./src/
COPY config/ ./config/

# Non-root user
RUN useradd -m -r appuser && chown -R appuser /app
USER appuser

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')"

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### 11.2. Build & push Docker image

```bash
# 1. Login to ECR
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin \
  123456789012.dkr.ecr.us-east-1.amazonaws.com

# 2. Build image
docker build -t ai-agent:v1.0.0 .

# 3. Tag for ECR
docker tag ai-agent:v1.0.0 \
  123456789012.dkr.ecr.us-east-1.amazonaws.com/ai-agent:v1.0.0

# 4. Push to ECR
docker push \
  123456789012.dkr.ecr.us-east-1.amazonaws.com/ai-agent:v1.0.0
```

### 11.3. Create ECS Task & Service

```bash
# 1. Register task definition
aws ecs register-task-definition \
  --cli-input-json file://task-definition.json

# 2. Create ECS Service
aws ecs create-service \
  --cluster ai-production \
  --service-name ai-agent-service \
  --task-definition ai-agent:1 \
  --desired-count 2 \
  --launch-type EC2 \
  --network-configuration \
    "awsvpcConfiguration={
      subnets=[subnet-xxx,subnet-yyy],
      securityGroups=[sg-zzz],
      assignPublicIp=DISABLED
    }" \
  --load-balancers \
    "targetGroupArn=arn:aws:elasticloadbalancing:...,
     containerName=ai-agent,
     containerPort=8000"

# 3. Verify deployment
aws ecs describe-services \
  --cluster ai-production \
  --services ai-agent-service \
  --query 'services[0].{
    Status: status,
    Running: runningCount,
    Desired: desiredCount,
    Deployments: deployments[0].rolloutState
  }'
```

### 11.4. Verify & test

```bash
# Get ALB DNS
ALB_DNS=$(aws elbv2 describe-load-balancers \
  --names ai-agent-alb \
  --query 'LoadBalancers[0].DNSName' \
  --output text)

# Health check
curl -s "http://${ALB_DNS}/health" | jq .

# Test inference
curl -s -X POST "http://${ALB_DNS}/api/v1/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Explain cloud deployment for AI systems",
    "session_id": "test-001"
  }' | jq .

# Load test (nhẹ)
hey -n 100 -c 10 -m POST \
  -H "Content-Type: application/json" \
  -d '{"message":"hello","session_id":"load-test"}' \
  "http://${ALB_DNS}/api/v1/chat"
```

### 11.5. Deployment pipeline synthesis

```
Complete Deployment Flow:
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Code    │    │  Build   │    │  Push    │    │  Deploy  │
│  Change  │───►│  Docker  │───►│  to ECR  │───►│  ECS     │
│  (Git)   │    │  Image   │    │  Registry│    │  Service │
└──────────┘    └──────────┘    └──────────┘    └────┬─────┘
                                                     │
                     ┌───────────────────────────────┘
                     ▼
              ┌──────────────┐    ┌──────────┐
              │  Health      │    │  Route   │
              │  Check Pass  │───►│  Traffic │
              │  (30s wait)  │    │  via ALB │
              └──────────────┘    └──────────┘
                     │
              ┌──────┴──────┐
              │  Monitor    │
              │  - Latency  │
              │  - Errors   │
              │  - GPU util │
              │  - Cost     │
              └─────────────┘
```

## Summary

This article covers the entire landscape cloud deployment for AI systems:

- ✅ **Cloud vs Self-host**: Cloud for scalability, GPU access, managed services — self-host only when spending > $30-50K/month stably
- ✅ **AWS**: Bedrock (managed LLM APIs), SageMaker (custom training), ECS/EKS (containers), Lambda (serverless)
- ✅ **Azure**: OpenAI Service (GPT-4o), ML Studio (custom models), Container Apps (serverless containers)
- ✅ **GCP**: Vertex AI (Gemini), Cloud Run GPU (unique serverless GPU), GKE Autopilot (managed K8s)
- ✅ **Comparison**: AWS = breadth & enterprise, Azure = OpenAI integration, GCP = serverless GPU & research
- ✅ **Kubernetes**: GPU scheduling, node pools, HPA for AI-specific autoscaling
- ✅ **Serverless vs Dedicated**: Traffic < 1K/day → serverless; > 10K/day → dedicated/K8s
- ✅ **Terraform IaC**: Reproducible, version-controlled infrastructure — no click-ops
- ✅ **Security**: VPC, private endpoints, secrets management, IAM least privilege
- ✅ **Multi-cloud**: Abstraction layer (LLMProvider interface) reduces vendor lock-in
- ✅ **Hands-on**: Deploy AI Agent to AWS ECS end-to-end: Dockerfile → ECR → ECS → ALB → test

## Exercises

### Exercise 1: Cloud selection matrix
Create a comparison table for 3 scenarios: (a) startup with budget $500/month, (b) enterprise needs HIPAA compliance, (c) research team training large models. Each scenario chooses a cloud provider and explains why.

### Exercise 2: Terraform AI infrastructure
Write Terraform configuration for Azure deployment: Azure Container Apps + Azure OpenAI Service + Azure Key Vault for secrets. Output endpoint URL.

### Exercise 3: Multi-cloud abstraction
Extend class `LLMProvider` add:
- Method `stream()` for streaming responses
- Method `count_tokens()` for token counting
- Implement for at least 2 providers (AWS Bedrock + Azure OpenAI)
- Add retry logic with exponential backoff
- Write unit tests to mock both providers

### Exercise 4: Deploy end-to-end
Dockerize AI Agent from Lesson 16, deploy to one of 3 clouds (free tier):
- AWS: ECS Fargate (no GPU) + Bedrock API
- Azure: Container Apps + Azure OpenAI
- GCP: Cloud Run + Vertex AI
Document all steps, screenshots, and cost breakdown.

### Exercise 5: Cost optimization
For scenario: AI chatbot serves 50K requests/day, average 500 input tokens + 1000 output tokens. Calculate monthly costs for: (a) AWS Bedrock Claude Haiku, (b) Azure OpenAI GPT-4o-mini, (c) GCP Vertex AI Gemini Flash. Compare and recommend the most optimal solution.
