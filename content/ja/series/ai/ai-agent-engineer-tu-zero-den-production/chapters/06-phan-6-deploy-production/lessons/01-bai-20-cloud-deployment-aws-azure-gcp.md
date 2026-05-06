---
id: 019e0a01-bb20-7001-c001-ee2000000001
title: 'レッスン 20: クラウドのデプロイ — AI のための AWS、Azure、GCP'
slug: bai-20-cloud-deployment-aws-azure-gcp
description: >-
  AWS: SageMaker、Bedrock、Lambda。 Azure: OpenAI サービス、ML Studio。 GCP: 頂点 AI。 AI
  ワークロード用の Kubernetes。サーバーレスインスタンスと専用 GPU インスタンス。コードとしてのインフラストラクチャ
  (Terraform)。コストの見積もり。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 19
section_title: 'パート 6: AI システムの導入と運用'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> モデルのトレーニングが完了すると、デモはラップトップ上でスムーズに実行されます。その後、上司が「いつ 10,000 ユーザー向けの本番環境に移行しますか?」と尋ねます。テーブルの下の RTX 4090 GPU を見ると、セルフホストはスケールしないことがわかります。マネージド GPU、自動スケーリング、グローバル インフラストラクチャを備えたクラウド デプロイメントは、プロトタイプと本番グレードの AI システムの間の架け橋となります。

## 1. AI 用のクラウド — なぜセルフホストではないのでしょうか?

＃＃＃１．１．実際の問題

AI システムが運用トラフィックに対応する必要がある場合、次の 3 つの大きな課題に直面します。

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

＃＃＃１．２．セルフホストはいつ行う必要がありますか?

|基準 |クラウド |セルフホスト |
|---|---|---|
|交通量 < 100 req/s、予測可能 | ✓ (ただし、長期よりも高価) | ✓ (ハードウェアが利用可能な場合) |
| Traffic bursty, unpredictable | ✓✓✓ | ✗ |
|データ主権 (軍事、医療) |依存 (ソブリンクラウド) | ✓✓ |
|予算 < 5,000/月 | ✓ | ✗ (GPU を購入するほどではありません) |
| Budget > $50,000/月、安定 | ✓ | ✓✓ (ROI の向上) |
| チーム < エンジニア 5 名 | ✓✓ | ✗ (運用担当者が不足しています) |
| Latency < 10ms required | Edge/hybrid | ✓ |

> **経験則:** クラウドから開始し、月々の支出が 30～50,000 ドルを超え、トラフィックが 6 か月以上安定している場合にのみセルフホストに移行します。

＃＃＃１．３．風景概要 3 雲

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

## 2. AWS AI サービス

＃＃＃２．１． Amazon Bedrock — マネージド LLM API

**Bedrock** は、API 経由で基盤モデル (Claude、LLaMA、Mistral、Titan) を呼び出すことができるフルマネージド サービスです。インフラストラクチャを管理する必要はありません。

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

**基本的な主な機能:**

|特長 |説明 |
|---|---|
|モデルカタログ |クロード、LLaMA、ミストラル、コヒア、タイタン |
|ナレッジベース | S3 データソースを使用した RAG |
|ガードレール |コンテンツ フィルタリング、PII 検出 |
|微調整 |マネージド インフラストラクチャのカスタム微調整 |
|エージェント |ツールを使用して AI エージェントを構築する |
|価格 |入出力トークンごとに支払う |

＃＃＃２．２． Amazon SageMaker — カスタムモデルのトレーニングとデプロイメント

**SageMaker** は、カスタム ML (トレーニング、チューニング、デプロイ) のためのエンドツーエンドのプラットフォームです。

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

＃＃＃２．３． AWS Lambda + API ゲートウェイ — サーバーレス AI

軽量の AI タスクの場合 (< 10s response, < 10GB memory):

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

Azure OpenAI を使用すると、エンタープライズ セキュリティを備えた Azure エコシステムで **GPT-4、GPT-4o、o1、埋め込み** を使用できるようになります。

```python
# azure_openai_example.py
from openai import AzureOpenAI

client = AzureOpenAI(
    api_key="YOUR_AZURE_OPENAI_KEY",
    api_version="2024-10-21",
    azure_endpoint="https://your-resource.openai.azure.com"
)

def chat_with_azure_openai(messages: list) -> 文字列:
    """Azure OpenAI GPT-4o を呼び出します。"""
    応答 = client.chat.completions.create(
        model="gpt-4o", # デプロイメント名
        メッセージ=メッセージ、
        温度=0.7、
        max_tokens=2048
    ）
    応答.choices[0].message.contentを返す


def get_embeddings(texts: list[str]) -> list[list[float]]:
    """Azure OpenAI 経由で埋め込みを生成します。"""
    応答 = client.embeddings.create(
        model="text-embedding-3-large", # デプロイメント名
        入力=テキスト
    ）
    return [response.data の item の item.embedding]
```

**Azure OpenAI と OpenAI のライブ:**

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

```パイソン
#azure_ml_deploy.py
azure.ai.ml から MLClient をインポート
azure.ai.ml.entities インポートから (
    マネージドオンラインエンドポイント、
    管理されたオンライン展開、
    モデル、
    環境
）
azure.identity からのインポート DefaultAzureCredential

# 認証する
ml_client = MLClient(
    credential=DefaultAzureCredential(),
    subscription_id="あなたのサブID",
    resource_group_name="ai-production-rg",
    ワークスペース名 = "ai-ワークスペース"
）

# モデルを登録する
モデル = モデル(
    パス="./models/センチメント分類子",
    name="感情分類子",
    description="微調整された感情モデル"
）
registered_model = ml_client.models.create_or_update(モデル)

# エンドポイントを作成する
エンドポイント = マネージドオンラインエンドポイント(
    name="センチメントエンドポイント",
    auth_mode="キー"
）
ml_client.online_endpoints.begin_create_or_update(エンドポイント).result()

# デプロイ
デプロイメント = ManagedOnlineDeployment(
    名前 = "青",
    endpoint_name="センチメントエンドポイント",
    モデル=登録モデル.id、
    instance_type="Standard_NC4as_T4_v3"、#NVIDIA T4 GPU
    インスタンス数=2
）
ml_client.online_deployments.begin_create_or_update(デプロイメント).result()
```

### 3.3. Azure Container Apps cho AI Microservices

**コンテナ アプリ** = ゼロまで自動スケールできるサーバーレス コンテナ — AI API に最適:

```ヤムル
# コンテナーアプリ.yaml
APIバージョン: アプリ/v1
種類: コンテナアプリ
プロパティ:
  管理対象環境 ID: /subscriptions/.../管理対象環境/ai-env
  構成:
    activeRevisionsMode: 複数
    入口:
      外部: true
      ターゲットポート: 8000
      トラフィック:
        - 名前リビジョン: ai-api--v2
          重量: 90
        -名前リビジョン: ai-api--v3 # Canary
          重量: 10
  テンプレート:
    コンテナ:
      - 名前: ai-api
        画像: myregistry.azurecr.io/ai-agent:v3
        リソース:
          CPU：2.0
          メモリ: 4Gi
        環境:
          - 名前: AZURE_OPENAI_ENDPOINT
            SecretRef: openai-endpoint
          - 名前: AZURE_OPENAI_KEY
            秘密参照: openai-key
    スケール:
      minReplicas: 0 # アイドル時にゼロにスケールします
      最大レプリカ数: 20
      ルール:
        - 名前: http-scaling
          http:
            メタデータ:
              同時リクエスト数: "50"
```

```バッシュ
# コンテナアプリをデプロイする
azcontainerapp作成\
  --name ai-agent-api \
  --リソースグループ ai-production-rg \
  --環境 ai-env\
  --image myregistry.azurecr.io/ai-agent:v3 \
  --ターゲットポート8000\
  --ingress 外部 \
  --min-replicas 0 \
  --最大レプリカ 20\
  --cpu 2.0 --メモリ 4Gi \
  --secrets openai-key="$AZURE_OPENAI_KEY" \
  --env-vars AZURE_OPENAI_KEY=secretref:openai キー
```

## 4. Google Cloud AI

### 4.1. Vertex AI — Gemini & Custom Models

```パイソン
#vertex_ai_example.py
インポート頂点
vertexai.generative_models から GenerativeModel をインポート

vertexai.init(project="my-ai-project", location="us-central1")

# ジェミニモデル
モデル = GenerativeModel("gemini-2.0-フラッシュ")

defgenerate_with_gemini(プロンプト: str) -> str:
    """Vertex AI 上の Gemini を使用して応答を生成します。"""
    応答 = model.generate_content(
        プロンプト、
        世代構成={
            "max_output_tokens": 2048、
            「温度」: 0.7、
        }
    ）
    応答.テキストを返す


# Vertex AI へのカスタム モデルのデプロイメント
google.cloud から aiplatform をインポート

aiplatform.init(project="my-ai-project", location="us-central1")

# モデルをアップロードする
モデル = aiplatform.Model.upload(
    display_name="カスタム分類子",
    artifact_uri="gs://my-bucket/models/classifier/",
    serving_container_image_uri=(
        「us-docker.pkg.dev/vertex-ai/prediction/」
        「pytorch-gpu.2-1:最新」
    ）
）

# エンドポイントにデプロイする
エンドポイント = モデル.デプロイ(
    deploy_model_display_name="分類子-v1",
    machine_type="n1-standard-4",
    アクセラレータータイプ = "NVIDIA_TESLA_T4",
    アクセラレーターカウント=1、
    min_replica_count=1、
    max_replica_count=5
）
```

### 4.2. Cloud Run — Serverless AI Containers

**Cloud Run** は、サーバーレス コンテナ用の **GPU** (NVIDIA L4) をサポートしています。これは、AWS/Azure と比較して独自の利点です。

```ヤムル
#cloud-run-service.yaml
apiバージョン:serving.knative.dev/v1
種類: サービス
メタデータ:
  名前: ai-エージェント-API
  注釈:
    run.googleapis.com/launch-stage: ベータ版
仕様:
  テンプレート:
    メタデータ:
      注釈:
        autoscaling.knative.dev/minScale: "0"
        autoscaling.knative.dev/maxScale: "10"
        run.googleapis.com/gpu-type: nvidia-l4
    仕様:
      コンテナ:
        - 画像: gcr.io/my-project/ai-agent:v3
          ポート:
            - コンテナポート: 8000
          リソース:
            制限:
              CPU：「4」
              メモリ: 16Gi
              nvidia.com/gpu: "1" # GPU!
          環境:
            - 名前: MODEL_PATH
              値: /models/agent
```

```バッシュ
# GPU を使用して Cloud Run をデプロイする
gcloud run デプロイ ai-agent-api \
  --image gcr.io/my-project/ai-agent:v3 \
  --ポート 8000 \
  --GPU1 \
  --gpu-type nvidia-l4 \
  --cpu 4 --メモリ 16Gi \
  --min-instances 0 \
  --最大インスタンス数 10 \
  --region us-central1 \
  --allow-未認証
```

### 4.3. GKE Autopilot cho Kubernetes AI

```バッシュ
# GKE Autopilot クラスタを作成する（GPU 自動プロビジョニング）
gcloud コンテナ クラスタ create-auto ai-cluster\
  --region us-central1 \
  --release-channel 定期

# AI ワークロードのデプロイ — 自動操縦による GPU ノードのセルフプロビジョニング
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

> **コストに関するヒント:** スポット/プリエンプティブル インスタンスは 60 ～ 70% オフです。再試行できるため、トレーニング ジョブには常にスポットを使用してください。リザーブドインスタンスは、24 時間年中無休で実行される推論エンドポイントに対して 30 ～ 40% の割引を受けます。

＃＃＃５．３．強みと最適なシナリオ

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

## 6. AI ワークロード用の Kubernetes

＃＃＃６．１． GPU スケジューリングの基本

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

＃＃＃６．２．ノードプールと自動スケーリング

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

## 7. サーバーレス vs 専用 GPU

＃＃＃７．１．意思決定マトリックス

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

＃＃＃７．２．コスト比較（月々の見積り）

|シナリオ |サーバーレス |専用GPU (1x L4) | K8s オートスケール |
|---|---|---|---|
| 100 リクエスト/日、ライト | 5～20ドル | 500ドル以上 | 500ドル以上 |
| 1,000 要求/日、中 | $50-200 | 500ドル以上 | $500-700 |
| 10,000 要求/日、安定 | 500～2000ドル | $500-700 | 500～1000ドル |
| 100K リクエスト/日、重い | 5000ドル以上 | $700-1500 | 1000～3000ドル |
|コールドスタート | 5 ～ 30 秒 (GPU)、 <1s (API) | 0s | 0s (min>0) |

> **重要な洞察:** トラフィックが少ない/バーストしている場合、サーバーレスは低コストです。トラフィックが多い/安定している場合は、専用の方が安価です。 Kubernetes は最高の柔軟性を提供しますが、最高の複雑さを実現します。

## 8. コードとしてのインフラストラクチャ — AI 用の Terraform

### 8.1。なぜIaCなのか？

クラウド コンソールでの手動クリック操作 = **再現不可能**、**バージョン管理なし**、**レビューなし**。 Terraform は 3 つすべてを解決します。

### 8.2。 Terraform の例: AWS AI インフラストラクチャ

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

## 9. ネットワーキングとセキュリティ

＃＃＃９．１． VPC とプライベート エンドポイント

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

＃＃＃９．２．秘密管理

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

**クラウド AI のセキュリティ チェックリスト:**

|アイテム |説明 |優先事項 |
|---|---|---|
| VPC プライベート サブネット | AI サービスはインターネットに公開されません |クリティカル |
| VPC エンドポイント |トラフィックは公共のインターネットを経由しません。高 |
|シークレットマネージャー | API キーをハードコーディングしないでください。クリティカル |
| IAM の最低特権 |必要な権限のみを付与する |クリティカル |
|保存時の暗号化 | S3、EBS、RDS 暗号化 |高 |
|転送中の暗号化 | TLS 1.2+ のすべての接続 |高 |
| WAF | API を攻撃から保護する |中 |
|監査ログ | CloudTrail / Azure アクティビティ ログ |高 |
|ネットワーク ACL |サブネット間のトラフィックを制限する |中 |

## 10. マルチクラウドとベンダーロックイン

### 10.1。ロックインのリスク

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

### 10.2。抽象化レイヤー戦略

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

## 11. ステップバイステップ: AI エージェントを AWS ECS にデプロイする

AI エージェント (レッスン 16 から) の AWS ECS へのエンドツーエンドのデプロイメント。

### 11.1。 Dockerfileの準備

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

＃＃＃１１．２． Dockerイメージのビルドとプッシュ

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

＃＃＃１１．３． ECS タスクとサービスの作成

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

＃＃＃１１．４。検証とテスト

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

＃＃＃１１．５。デプロイメントパイプラインの合成

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

## 概要

この記事では、AI システムのクラウド展開全体について説明します。

- ✅ **クラウドとセルフホスト**: スケーラビリティ、GPU アクセス、マネージド サービスのためのクラウド — 月額 30,000 ～ 50,000 ドルを超えて安定的に支出する場合のみセルフホスト
- ✅ **AWS**: Bedrock (マネージド LLM API)、SageMaker (カスタム トレーニング)、ECS/EKS (コンテナ)、Lambda (サーバーレス)
- ✅ **Azure**: OpenAI サービス (GPT-4o)、ML Studio (カスタム モデル)、コンテナ アプリ (サーバーレス コンテナ)
- ✅ **GCP**: Vertex AI (Gemini)、Cloud Run GPU (独自のサーバーレス GPU)、GKE Autopilot (マネージド K8)
- ✅ **比較**: AWS = 広範さとエンタープライズ、Azure = OpenAI 統合、GCP = サーバーレス GPU と研究
- ✅ **Kubernetes**: GPU スケジューリング、ノード プール、AI 固有の自動スケーリング用の HPA
- ✅ **サーバーレス vs 専用**: トラフィック < 1K/day → serverless; > 10,000/日 → 専用/K8
- ✅ **Terraform IaC**: 再現可能でバージョン管理されたインフラストラクチャ — クリック操作は不要
- ✅ **セキュリティ**: VPC、プライベート エンドポイント、シークレット管理、IAM 最小権限
- ✅ **マルチクラウド**: 抽象化レイヤー (LLMProvider インターフェイス) によりベンダー ロックインが軽減されます。
- ✅ **ハンズオン**: AI エージェントを AWS ECS にエンドツーエンドでデプロイ: Dockerfile → ECR → ECS → ALB → テスト

## 演習

### 演習 1: クラウド選択マトリックス
3 つのシナリオの比較表を作成します: (a) 予算 500 ドル/月のスタートアップ、(b) 企業は HIPAA 準拠を必要とする、(c) 研究チームが大規模モデルをトレーニングする。各シナリオではクラウド プロバイダーを選択し、その理由を説明します。

### 演習 2: Terraform AI インフラストラクチャ
Azure デプロイ用の Terraform 構成を作成します: Azure Container Apps + Azure OpenAI Service + シークレット用の Azure Key Vault。出力エンドポイント URL。

### 演習 3: マルチクラウドの抽象化
クラスを拡張する `LLMProvider` 追加:
- 方法 `stream()` ストリーミング応答用
- 方法 `count_tokens()` トークンカウント用
- 少なくとも 2 つのプロバイダー (AWS Bedrock + Azure OpenAI) に対して実装します。
- 指数バックオフを使用した再試行ロジックを追加
- 両方のプロバイダーを模擬する単体テストを作成する

### 演習 4: エンドツーエンドの展開
レッスン 16 の AI エージェントを Dockerize し、3 つのクラウドのいずれかにデプロイします (無料枠):
- AWS: ECS Fargate (GPU なし) + Bedrock API
- Azure: コンテナ アプリ + Azure OpenAI
- GCP: Cloud Run + Vertex AI
すべての手順、スクリーンショット、コストの内訳を文書化します。

### 演習 5: コストの最適化
シナリオの場合: AI チャットボットは 1 日あたり 50,000 のリクエスト、平均 500 の入力トークン + 1,000 の出力トークンを処理します。 (a) AWS Bedrock Claude Haiku、(b) Azure OpenAI GPT-4o-mini、(c) GCP Vertex AI Gemini Flash の月額コストを計算します。比較して最適なソリューションを推奨します。
