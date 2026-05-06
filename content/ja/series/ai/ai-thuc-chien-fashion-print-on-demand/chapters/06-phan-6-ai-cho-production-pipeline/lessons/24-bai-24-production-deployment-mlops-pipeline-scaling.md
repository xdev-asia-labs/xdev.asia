---
id: 019d8b30-bb24-7024-c024-f0c4e8000024
title: 'レッスン 24: 実稼働デプロイ — MLOps パイプラインと GPU スケーリング'
slug: bai-24-production-deployment-mlops-pipeline-scaling
description: >-
  AI モデルを実稼働環境にデプロイします: Triton Inference Server、vLLM、GPU
  自動スケーリング、モデルのバージョン管理、A/B テスト。 ML モデルのモニタリング、コストの最適化、CI/CD。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 23
section_title: 'パート 6: 本番パイプラインのための AI'
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 'AI の活用: ファッションとプリント オン デマンド向けの AI プラットフォームの構築'
  slug: ai-thuc-chien-fashion-print-on-demand
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6259" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6259)"/>

  <!-- Decorations -->
  <g>
    <circle cx="898" cy="104" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="696" cy="42" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="994" cy="240" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="792" cy="178" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1090" cy="116" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="104" x2="1100" y2="184" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="134" x2="1050" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="937.7749907475932,84.5 937.7749907475932,123.5 904,143 870.2250092524068,123.5 870.2250092524068,84.50000000000001 904,65" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI と ML — レッスン 23</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 24: 実稼働環境のデプロイ — MLOps</tspan>
      <tspan x="60" dy="42">パイプラインと GPU のスケーリング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI の活用: ファッションとプリント オン デマンド向けの AI プラットフォームの構築</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 本番パイプラインのための AI</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

シリーズの最終記事 — **AI システム全体を本番環境に導入**。モデルの提供 (Triton、vLLM) から GPU の自動スケーリング、モニタリング、コストの最適化まで。これは、プロトタイプを実稼働グレードの AI プラットフォームに変える部分です。

---

## 1. 実稼働アーキテクチャの概要

```
                        Load Balancer
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
        ┌──────────┐  ┌──────────┐  ┌──────────┐
        │ API       │  │ API       │  │ API       │
        │ Gateway   │  │ Gateway   │  │ Gateway   │
        └─────┬────┘  └─────┬────┘  └─────┬────┘
              └──────────────┼──────────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
     ┌──────────────┐ ┌───────────┐ ┌────────────┐
     │ Triton Server │ │ vLLM      │ │ Custom     │
     │ (Diffusion,  │ │ (LLM      │ │ Services   │
     │  CLIP, NSFW) │ │  serving) │ │ (Try-On)   │
     └──────┬───────┘ └─────┬─────┘ └─────┬──────┘
            └────────────────┼─────────────┘
                             │
                    GPU Cluster (A100/L4)
                    Auto-scaling 0→N
```

---

## 2. Triton で提供するモデル

```python
# Model repository structure
"""
model_repository/
├── sdxl_lora/
│   ├── config.pbtxt
│   └── 1/
│       └── model.plan        # TensorRT optimized
├── clip_vit/
│   ├── config.pbtxt
│   └── 1/
│       └── model.onnx        # ONNX optimized
├── nsfw_detector/
│   ├── config.pbtxt
│   └── 1/
│       └── model.pt
└── realesrgan/
    ├── config.pbtxt
    └── 1/
        └── model.onnx
"""

# config.pbtxt for SDXL
SDXL_CONFIG = """
name: "sdxl_lora"
platform: "tensorrt_plan"
max_batch_size: 4
input [
  {
    name: "prompt_embeds"
    data_type: TYPE_FP16
    dims: [-1, 77, 2048]
  },
  {
    name: "latent_noise"
    data_type: TYPE_FP16
    dims: [4, 128, 128]
  }
]
output [
  {
    name: "generated_image"
    data_type: TYPE_FP16
    dims: [3, 1024, 1024]
  }
]
instance_group [
  {
    count: 1
    kind: KIND_GPU
    gpus: [0]
  }
]
dynamic_batching {
  max_queue_delay_microseconds: 100000
}
"""
```

### トリトンクライアント

```python
import tritonclient.grpc as grpc_client
import numpy as np

class TritonInferenceClient:
    """Client cho Triton Inference Server"""

    def __init__(self, url: str = "localhost:8001"):
        self.client = grpc_client.InferenceServerClient(url=url)

    async def generate_image(
        self,
        prompt_embeds: np.ndarray,
        latent_noise: np.ndarray,
    ) -> np.ndarray:
        inputs = [
            grpc_client.InferInput(
                "prompt_embeds", prompt_embeds.shape, "FP16"
            ),
            grpc_client.InferInput(
                "latent_noise", latent_noise.shape, "FP16"
            ),
        ]
        inputs[0].set_data_from_numpy(
            prompt_embeds.astype(np.float16)
        )
        inputs[1].set_data_from_numpy(
            latent_noise.astype(np.float16)
        )

        outputs = [
            grpc_client.InferRequestedOutput("generated_image")
        ]

        result = self.client.infer(
            model_name="sdxl_lora",
            inputs=inputs,
            outputs=outputs,
        )

        return result.as_numpy("generated_image")

    async def classify_nsfw(
        self, image: np.ndarray
    ) -> float:
        inputs = [
            grpc_client.InferInput(
                "image", image.shape, "FP32"
            )
        ]
        inputs[0].set_data_from_numpy(image)

        result = self.client.infer(
            model_name="nsfw_detector",
            inputs=inputs,
            outputs=[
                grpc_client.InferRequestedOutput("score")
            ],
        )

        return float(result.as_numpy("score")[0])
```

---

## 3. LLM サービス用の vLLM

```python
# vLLM server deployment
"""
# Start vLLM server for product copy generation
python -m vllm.entrypoints.openai.api_server \
    --model meta-llama/Meta-Llama-3.1-8B-Instruct \
    --tensor-parallel-size 1 \
    --gpu-memory-utilization 0.9 \
    --max-model-len 4096 \
    --port 8000
"""

from openai import AsyncOpenAI

class VLLMClient:
    """Client for vLLM OpenAI-compatible API"""

    def __init__(self, base_url: str = "http://localhost:8000/v1"):
        self.client = AsyncOpenAI(
            base_url=base_url,
            api_key="not-needed",  # vLLM local
        )

    async def generate_product_copy(
        self, tags: DesignTags, marketplace: str
    ) -> str:
        response = await self.client.chat.completions.create(
            model="meta-llama/Meta-Llama-3.1-8B-Instruct",
            messages=[
                {"role": "system", "content": "E-commerce copywriter."},
                {"role": "user", "content": f"Generate listing for {tags}"},
            ],
            max_tokens=500,
            temperature=0.7,
        )
        return response.choices[0].message.content
```

---

## 4. GPU 自動スケーリング (Kubernetes)

```yaml
# gpu-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: triton-inference
spec:
  replicas: 1
  selector:
    matchLabels:
      app: triton-inference
  template:
    metadata:
      labels:
        app: triton-inference
    spec:
      containers:
      - name: triton
        image: nvcr.io/nvidia/tritonserver:24.01-py3
        args:
        - tritonserver
        - --model-repository=/models
        - --http-port=8000
        - --grpc-port=8001
        - --metrics-port=8002
        resources:
          limits:
            nvidia.com/gpu: 1
            memory: "32Gi"
          requests:
            nvidia.com/gpu: 1
            memory: "16Gi"
        volumeMounts:
        - name: model-storage
          mountPath: /models
      volumes:
      - name: model-storage
        persistentVolumeClaim:
          claimName: model-pvc
---
# HPA for GPU autoscaling
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: triton-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: triton-inference
  minReplicas: 0
  maxReplicas: 8
  metrics:
  - type: Pods
    pods:
      metric:
        name: triton_queue_size
      target:
        type: AverageValue
        averageValue: "5"
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
      - type: Pods
        value: 2
        periodSeconds: 120
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Pods
        value: 1
        periodSeconds: 300
```

### ゼロへのスケール

```python
class GPUScaleManager:
    """Manage GPU scaling: 0 → N pods"""

    async def check_and_scale(self):
        """
        Scale-to-zero khi không có requests
        Wake up khi có request mới
        """
        queue_size = await self.get_queue_size()

        if queue_size == 0:
            current_replicas = await self.get_replicas()
            if current_replicas > 0:
                idle_time = await self.get_idle_duration()
                if idle_time > timedelta(minutes=10):
                    await self.scale_to(0)
                    logger.info("Scaled GPU pods to 0 (idle)")
        elif queue_size > 0:
            current_replicas = await self.get_replicas()
            if current_replicas == 0:
                await self.scale_to(1)
                logger.info("Waking up GPU pod (request received)")
```

---

## 5. モデルのバージョン管理と A/B テスト

```python
class ModelVersionManager:
    """Quản lý model versions và A/B testing"""

    def __init__(self):
        self.registry = MLModelRegistry()

    async def deploy_version(
        self,
        model_name: str,
        version: str,
        traffic_split: float = 0.0,
    ):
        """
        Deploy model version với traffic split

        traffic_split = 0.0: shadow mode (log only)
        traffic_split = 0.1: 10% traffic → new version
        traffic_split = 1.0: full rollout
        """
        await self.registry.register(
            model_name, version,
            traffic_split=traffic_split,
        )

    async def route_request(
        self, model_name: str, request: dict
    ) -> dict:
        """Route request to appropriate model version"""
        versions = await self.registry.get_versions(model_name)
        active_versions = [
            v for v in versions if v.traffic_split > 0
        ]

        # Weighted random selection
        r = random.random()
        cumulative = 0
        selected = active_versions[0]  # fallback

        for version in active_versions:
            cumulative += version.traffic_split
            if r <= cumulative:
                selected = version
                break

        # Infer with selected version
        result = await self.infer(
            model_name, selected.version, request
        )

        # Log for comparison
        await self.log_ab_result(
            model_name, selected.version, request, result
        )

        return result
```

---

## 6. モニタリングとコストの最適化

```python
class AIMonitoring:
    """Monitor AI system health và cost"""

    METRICS = {
        "inference_latency_ms": "histogram",
        "gpu_utilization_percent": "gauge",
        "model_requests_total": "counter",
        "generation_quality_score": "histogram",
        "cost_per_generation_usd": "histogram",
    }

    async def collect_metrics(self) -> dict:
        return {
            "gpu": {
                "utilization": await self.get_gpu_utilization(),
                "memory_used_gb": await self.get_gpu_memory(),
                "temperature_c": await self.get_gpu_temp(),
            },
            "inference": {
                "avg_latency_ms": await self.get_avg_latency(),
                "p99_latency_ms": await self.get_p99_latency(),
                "queue_depth": await self.get_queue_depth(),
                "requests_per_minute": await self.get_rpm(),
            },
            "cost": {
                "gpu_cost_per_hour": await self.get_gpu_cost(),
                "cost_per_generation": await self.get_per_gen_cost(),
                "daily_cost_usd": await self.get_daily_cost(),
            },
        }


class CostOptimizer:
    """Optimize GPU costs"""

    STRATEGIES = {
        "spot_instances": {
            "savings": "60-90%",
            "risk": "interruption",
            "use_for": "batch processing, non-real-time",
        },
        "model_quantization": {
            "savings": "50% GPU memory",
            "risk": "slight quality loss",
            "use_for": "all inference models",
        },
        "request_batching": {
            "savings": "2-4x throughput",
            "risk": "increased latency",
            "use_for": "auto-tagging, moderation",
        },
        "caching": {
            "savings": "varies",
            "risk": "stale results",
            "use_for": "CLIP embeddings, similar prompts",
        },
    }

    async def estimate_monthly_cost(
        self,
        daily_generations: int,
        gpu_type: str = "A100",
    ) -> CostEstimate:
        gpu_costs = {
            "A100": 3.0,      # $/hour on-demand
            "L4": 0.81,       # $/hour
            "T4": 0.35,       # $/hour
            "A100_spot": 0.90, # $/hour spot
        }

        avg_gen_time_sec = 8  # seconds per generation
        gpu_hours_per_day = (
            daily_generations * avg_gen_time_sec / 3600
        )
        monthly_cost = (
            gpu_hours_per_day * gpu_costs[gpu_type] * 30
        )

        return CostEstimate(
            gpu_type=gpu_type,
            gpu_hours_per_day=gpu_hours_per_day,
            cost_per_generation=gpu_costs[gpu_type] * avg_gen_time_sec / 3600,
            monthly_cost_usd=monthly_cost,
        )
```

---

## 7. ML モデルの CI/CD

```yaml
# .github/workflows/ml-deploy.yml
name: ML Model Deploy

on:
  push:
    paths:
      - 'models/**'
      - 'training/**'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run model tests
        run: |
          python -m pytest tests/models/ -v
          python scripts/validate_model.py

      - name: Quality benchmark
        run: |
          python scripts/benchmark.py \
            --model models/sdxl_lora/latest \
            --dataset test_prompts.json \
            --min-fid 15.0 \
            --min-clip-score 0.28

  deploy-staging:
    needs: validate
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to staging
        run: |
          kubectl apply -f k8s/staging/
          python scripts/deploy_model.py \
            --env staging \
            --traffic-split 0.0  # shadow mode

  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    environment: production
    steps:
      - name: Canary deploy
        run: |
          python scripts/deploy_model.py \
            --env production \
            --traffic-split 0.1  # 10% canary

      - name: Monitor canary
        run: |
          python scripts/monitor_canary.py \
            --duration 30m \
            --error-threshold 0.01

      - name: Full rollout
        run: |
          python scripts/deploy_model.py \
            --env production \
            --traffic-split 1.0
```

---

## シリーズの概要

**24 の記事 — アーキテクチャから実稼働展開まで:**

|パート |トピックス |記事 |
|-----|--------|-----|
| 1 | AI システム アーキテクチャ | 1-3 |
| 2 | AI デザインの生成 | 4-7 |
| 3 |デザインの最適化と編集 | 8-11 |
| 4 |パーソナライゼーションとレコメンデーション | 12-15 |
| 5 |バーチャル試着とコンピュータビジョン | 16-19 |
| 6 |生産パイプライン | 20-24 |

**主要なテクノロジー**:
- Stable Diffusion XL、LoRA 微調整
- CLIP、ControlNet、IP アダプター
- SMPL-X、Three.js、MediaPipe
- Real-ESRGAN、CMYKカラーマネジメント
- Triton 推論サーバー、vLLM
- Kubernetes GPU 自動スケーリング
- MLOps CI/CD パイプライン

このシリーズでは、デザインのアイデアから店頭に並ぶ製品まで、**ファッションおよびプリント オン デマンド向けのフルスタック AI** を取り上げます。
