---
id: 019e0a01-bb20-7001-c001-ee2000000001
title: 第 20 課：雲端部署 — 適用於 AI 的 AWS、Azure 和 GCP
slug: bai-20-cloud-deployment-aws-azure-gcp
description: >-
  AWS：SageMaker、Bedrock、Lambda。 Azure：OpenAI 服務、ML Studio。 GCP：頂點人工智慧。適用於 AI
  工作負載的 Kubernetes。無伺服器執行個體與專用 GPU 執行個體。基礎架構即程式碼 (Terraform)。成本估算。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 19
section_title: 第 6 部分：部署 AI 系統生產
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> 你完成模型訓練，演示在筆記型電腦上順利運行 - 然後老闆問“我們什麼時候可以為 10,000 個用戶投入生產？”您查看表下的 RTX 4090 GPU，就會明白：自主機無法擴展。具有託管 GPU、自動擴展和全域基礎架構的雲端部署是原型和生產級 AI 系統之間的橋樑。

## 1. 人工智慧雲端 — 為什麼不自行託管？

### 1.1。實際問題

當AI系統需要服務生產流量時，您面臨3大挑戰：

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

### 1.2。我什麼時候該自行託管？

|標準|雲端|自架 |
|---|---|---|
|交通 < 100 請求/秒，可預測 | ✓（但比長期更昂貴）| ✓（如果硬體可用）|
| Traffic bursty, unpredictable | ✓✓✓ | ✗ |
|資料主權（軍事、醫療）|取決於（主權雲）| ✓✓ |
|預算 < 5,000 美元/月 | ✓ | ✗（不夠買GPU）|
| Budget > 每月 5 萬美元，穩定 | ✓ | ✓✓（更好的投資回報率）|
| 團隊 < 5 位工程師 | ✓✓ | ✗（維運人員不足）|
| Latency < 10ms required | Edge/hybrid | ✓ |

> **經驗法則：** 從雲端開始，僅當每月支出 > 30-50K 美元且流量穩定 6 個月以上時才遷移到自託管。

### 1.3。景觀概覽3雲

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

## 2.AWS 人工智慧服務

### 2.1。 Amazon Bedrock — 託管 LLM API

**Bedrock** 是一項完全託管的服務，允許透過 API 呼叫基礎模型（Claude、LLaMA、Mistral、Titan）—無需管理基礎設施。

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

**基本關鍵特徵：**

|特點|描述 |
|---|---|
|型號目錄|克勞德、LLaMA、米斯特拉爾、Cohere、泰坦 |
|知識庫|具有 S3 資料來源的 RAG |
|護欄|內容過濾、PII偵測|
|微調|對託管基礎設施進行自訂微調 |
|代理|使用工具建立 AI 代理 |
|定價|按輸入/輸出代幣付費 |

### 2.2。 Amazon SageMaker — 自訂模型訓練與部署

**SageMaker** 是一個用於自訂 ML 的端到端平台：訓練、調整、部署。

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

### 2.3。 AWS Lambda + API 閘道 — 無伺服器人工智慧

針對輕量級 AI 任務（< 10s response, < 10GB memory):

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

Azure OpenAI 支援在具有企業安全性的 Azure 生態系統中使用**GPT-4、GPT-4o、o1、嵌入**。

```python
# azure_openai_example.py
from openai import AzureOpenAI

client = AzureOpenAI(
    api_key="YOUR_AZURE_OPENAI_KEY",
    api_version="2024-10-21",
    azure_endpoint="https://your-resource.openai.azure.com"
)

def chat_with_azure_openai(messages: list) -> 字串：
    """呼叫 Azure OpenAI GPT-4o。"""
    回應 = client.chat.completions.create(
        model="gpt-4o", # 部署名稱
        訊息=訊息，
        溫度=0.7，
        最大令牌數=2048
    ）
    返回response.choices[0].message.content


def get_embeddings(texts: list[str]) -> list[list[float]]:
    """透過 Azure OpenAI 產生嵌入。"""
    響應 = client.embeddings.create(
        model="text-embedding-3-large", # 部署名稱
        輸入=文字
    ）
    傳回 [response.data 中項目的 item.embedding]
```

**Azure OpenAI 與 OpenAI 即時比較：**

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

```蟒蛇
# azure_ml_deploy.py
從 azure.ai.ml 導入 MLClient
從 azure.ai.ml.entities 導入（
    託管線上端點，
    託管線上部署，
    型號,
    環境
）
從 azure.identity 導入 DefaultAzureCredential

# 驗證
ml_client = MLClient(
    憑證=預設AzureCredential(),
    subscription_id="您的子 ID",
    Resource_group_name =“ai-生產-rg”，
    工作空間名稱=“ai-工作空間”
）

# 註冊模型
模型 = 模型（
    路徑=“./models/情緒分類器”，
    name=“情感分類器”，
    描述=“微調情感模型”
）
註冊模型 = ml_client.models.create_or_update(模型)

# 建立端點
端點 = ManagedOnlineEndpoint(
    名稱=“情感端點”，
    auth_mode =“密鑰”
）
ml_client.online_endpoints.begin_create_or_update(端點).result()

# 部署
部署 = ManagedOnlineDeployment(
    名稱=“藍色”，
    端點名稱=“情感端點”，
    模型=註冊模型.id,
    instance_type =“Standard_NC4as_T4_v3”，#NVIDIA T4 GPU
    實例計數=2
）
ml_client.online_deployments.begin_create_or_update(部署).result()
```

### 3.3. Azure Container Apps cho AI Microservices

**容器應用程式** = 自動縮放至零的無伺服器容器 - 非常適合 AI API：

```yaml
# 容器-app.yaml
api版本：apps/v1
種類：容器應用程式
屬性：
  託管環境 ID：/訂閱/.../託管環境/ai-env
  配置：
    activeRevisionsMode：多個
    入口：
      外部：真實
      目標埠：8000
      交通：
        -名稱修改：ai-api--v2
          重量：90
        -名稱修改：ai-api--v3 # canary
          重量：10
  模板：
    容器：
      - 名稱：ai-api
        圖片：myregistry.azurecr.io/ai-agent:v3
        資源：
          中央處理器：2.0
          記憶體：4Gi
        環境：
          - 名稱：AZURE_OPENAI_ENDPOINT
            SecretRef：openai-端點
          - 名稱：AZURE_OPENAI_KEY
            秘密參考： openai-key
    規模：
      minReplicas: 0 # 空閒時縮放為零
      最大副本數：20
      規則：
        - 名稱：http 縮放
          http：
            元數據：
              並發請求數：“50”
```

```巴什
# 部署容器應用程式
az containerapp 建立 \
  --名稱 ai-agent-api \
  --資源組 ai-生產-rg \
  --環境 ai-env\
  --image myregistry.azurecr.io/ai-agent:v3 \
  --目標埠 8000\
  --入口外部\
  --最小副本數 0 \
  --最大副本數 20\
  --cpu 2.0 --內存 4Gi \
  --secrets openai-key="$AZURE_OPENAI_KEY" \
  --env-vars AZURE_OPENAI_KEY=secretref:openai-key
```

## 4. Google Cloud AI

### 4.1. Vertex AI — Gemini & Custom Models

```蟒蛇
# vertex_ai_example.py
導入頂點
從 vertexai.generative_models 導入 GenerativeModel

vertexai.init（項目=“my-ai-project”，位置=“us-central1”）

# 雙子座型號
模型 = GenerativeModel("gemini-2.0-flash")

defgenerate_with_gemini(提示：str)->str:
    """在 Vertex AI 上與 Gemini 產生回應。"""
    響應 = model.generate_content(
        提示，
        一代配置={
            「最大輸出令牌」：2048，
            “溫度”：0.7，
        }
    ）
    返回回應.文本


# Vertex AI 上的自訂模型部署
從 google.cloud 導入 aiplatform

aiplatform.init（項目=“my-ai-project”，位置=“us-central1”）

# 上傳模型
模型 = aiplatform.Model.upload(
    display_name="自訂分類器",
    artifact_uri =“gs://my-bucket/models/classifier/”，
    服務容器圖像_uri=(
        “us-docker.pkg.dev/vertex-ai/預測/”
        “pytorch-gpu.2-1：最新”
    ）
）

# 部署到端點
端點 = model.deploy(
    deploy_model_display_name="classifier-v1",
    machine_type =“n1-標準-4”，
    Accelerator_type =“NVIDIA_TESLA_T4”，
    Accelerator_count=1,
    min_replica_count=1,
    最大副本數=5
）
```

### 4.2. Cloud Run — Serverless AI Containers

**Cloud Run** 支援無伺服器容器的 **GPU** (NVIDIA L4) — 與 AWS/Azure 相比的獨特優勢：

```yaml
#cloud-run-service.yaml
api版本：serving.knative.dev/v1
種類： 服務
元數據：
  名稱：ai-agent-api
  註：
    run.googleapis.com/launch-stage：測試版
規格：
  模板：
    元數據：
      註：
        autoscaling.knative.dev/minScale：“0”
        autoscaling.knative.dev/maxScale：“10”
        run.googleapis.com/gpu-類型：nvidia-l4
    規格：
      容器：
        - 圖片：gcr.io/my-project/ai-agent:v3
          連接埠：
            - 貨櫃連接埠：8000
          資源：
            限制：
              中央處理器：“4”
              記憶體：16Gi
              nvidia.com/gpu: "1" # GPU!
          環境：
            - 名稱：模型路徑
              值：/模型/代理
```

```巴什
# 使用 GPU 部署 Cloud Run
gcloud 運行部署 ai-agent-api \
  --image gcr.io/my-project/ai-agent:v3 \
  --埠8000 \
  --GPU 1 \
  --GPU 類型 nvidia-l4 \
  --cpu 4 --內存 16Gi \
  --最小實例數 0 \
  --最大實例數 10 \
  --區域 us-central1 \
  --允許未經身份驗證
```

### 4.3. GKE Autopilot cho Kubernetes AI

```巴什
# 建立 GKE Autopilot 叢集（GPU 自動配置）
gcloud 容器叢集 create-auto ai-cluster\
  --區域 us-central1 \
  --release-channel 常規

# 部署AI工作負載－Autopilot自行配置GPU節點
kubectl 應用-f- <<EOF
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

> **成本提示：** 現貨/搶佔式實例可享 60-70% 的折扣。始終使用 Spot 進行訓練作業，因為它可以重試。預留實例在 24/7 運行的推理端點上可享 30-40% 的折扣。

### 5.3。優勢和最適合的場景

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

## 6. 用於 AI 工作負載的 Kubernetes

### 6.1。 GPU調度基礎知識

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

### 6.2。節點池和自動縮放

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

## 7. 無伺服器與專用 GPU

### 7.1。決策矩陣

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

### 7.2。成本比較（每月估算）

|場景 |無伺服器|專用 GPU (1x L4) | K8s 自動縮放 |
|---|---|---|---|
| 100 個請求/天，輕 | 5-20 美元 | 500 美元以上 | 500 美元以上 |
| 1K 請求/天，中等 | 50-200 美元 | 500 美元以上 | 500-700 美元 |
|每天 10K 請求，穩定 | 500-2000 美元 | 500-700 美元 | 500-1000 美元 |
| 100K 請求/天，重 | 5000 美元以上 | 700-1500 美元 | 1000-3000 美元 |
|冷啟動| 5-30 秒（GPU）， <1s (API) | 0s | 0s (min>0) |

> **關鍵見解：** 當流量較低/突發時，無伺服器較便宜。當流量高/穩定時，專用會更便宜。 Kubernetes 提供了最好的靈活性，但複雜性也最高。

## 8. 基礎架構即程式碼 — AI 的 Terraform

### 8.1。為什麼是 IaC？

雲端控制台上的手動點擊操作 = **不可重現**，**無版本控制**，**無審查**。 Terraform 解決了所有 3 個問題。

### 8.2。 Terraform 範例：AWS AI 基礎設施

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

## 9. 網路與安全

### 9.1。 VPC 和私有端點

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

### 9.2。秘密管理

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

**雲端人工智慧的安全清單：**

|項目 |說明 |優先事項 |
|---|---|---|
| VPC 私有子網路 | AI服務不暴露在網路上 |關鍵|
| VPC 端點 |流量不通過公共互聯網 |高|
|秘密經理 |不要對 API 金鑰進行硬編碼 |關鍵|
| IAM 最低權限 |只授予必要的權限 |關鍵|
|靜態加密 | S3、EBS、RDS 加密 |高|
|傳輸中加密 | TLS 1.2+ 所有連線 |高|
| WAF |保護 API 免受攻擊 |中|
|稽核日誌| CloudTrail / Azure 活動日誌 |高|
|網路 ACL |限制子網路之間的流量 |中等|

## 10. 多雲和供應商鎖定

### 10.1。鎖定風險

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

### 10.2。抽象層策略

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

## 11. 步驟：將 AI 代理程式部署到 AWS ECS

AI Agent（第 16 課）到 AWS ECS 的端對端部署。

### 11.1。準備 Dockerfile

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

### 11.2。建置並推送 Docker 映像

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

### 11.3。建立ECS任務和服務

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

### 11.4。驗證和測試

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

### 11.5。部署管道綜合

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

## 總結

本文涵蓋了AI系統的整個景觀雲部署：

- ✅ **雲端與自架**：用於可擴充性、GPU 存取、託管服務的雲端 — 僅當穩定支出 > 30-50K 美元/月時才自架
- ✅ **AWS**：Bedrock（託管 LLM API）、SageMaker（自訂訓練）、ECS/EKS（容器）、Lambda（無伺服器）
- ✅ **Azure**：OpenAI 服務 (GPT-4o)、ML Studio（自訂模型）、容器應用程式（無伺服器容器）
- ✅ **GCP**：Vertex AI (Gemini)、Cloud Run GPU（獨特的無伺服器 GPU）、GKE Autopilot（託管 K8）
- ✅ **比較**：AWS = 廣度和企業，Azure = OpenAI 集成，GCP = 無伺服器 GPU 和研究
- ✅ **Kubernetes**：GPU 調度、節點池、用於 AI 特定自動縮放的 HPA
- ✅ **無伺服器與專用**：流量 < 1K/day → serverless; > 10K/天 → 專用/K8
- ✅ **Terraform IaC**：可複製、版本控制的基礎設施 — 無點擊操作
- ✅ **安全性**：VPC、私有端點、秘密管理、IAM 最小權限
- ✅ **多雲**：抽象層（LLMProvider 介面）減少供應商鎖定
- ✅ **動手**：將 AI 代理端對端部署到 AWS ECS：Dockerfile → ECR → ECS → ALB → 測試

## 練習

### 練習 1：雲選擇矩陣
創建 3 個場景的比較表：(a) 預算為 500 美元/月的新創公司，(b) 企業需要 HIPAA 合規性，(c) 研究團隊訓練大型模型。每個場景都會選擇一個雲端提供者並解釋原因。

### 練習 2：Terraform AI 基礎設施
為 Azure 部署編寫 Terraform 配置：Azure 容器應用程式 + Azure OpenAI 服務 + 用於機密的 Azure Key Vault。輸出端點 URL。

### 練習 3：多雲抽象
擴展類 `LLMProvider` 添加：
- 方法 `stream()` 用於串流回應
- 方法 `count_tokens()` 用於令牌計數
- 為至少 2 個供應商實作（AWS Bedrock + Azure OpenAI）
- 增加具有指數退避的重試邏輯
- 編寫單元測試來模擬兩個提供者

### 練習 4：端對端部署
Dockerize AI Agent（第 16 課），部署到 3 個雲端之一（免費套餐）：
- AWS：ECS Fargate（無 GPU）+ Bedrock API
- Azure：容器應用程式 + Azure OpenAI
- GCP：Cloud Run + Vertex AI
記錄所有步驟、螢幕截圖和成本明細。

### 練習 5：成本最佳化
對於場景：AI 聊天機器人每天處理 50K 請求，平均 500 個輸入令牌 + 1000 個輸出令牌。計算以下各項的每月成本：(a) AWS Bedrock Claude Haiku、(b) Azure OpenAI GPT-4o-mini、(c) GCP Vertex AI Gemini Flash。比較並推薦最佳解決方案。
