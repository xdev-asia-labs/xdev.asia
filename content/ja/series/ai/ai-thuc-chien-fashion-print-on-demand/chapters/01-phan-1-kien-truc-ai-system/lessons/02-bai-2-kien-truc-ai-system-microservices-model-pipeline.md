---
id: 019d8b30-bb02-7002-c002-f0c4e8000002
title: 'レッスン 2: AI システム アーキテクチャ — マイクロサービス、モデル パイプライン、GPU インフラストラクチャ'
slug: bai-2-kien-truc-ai-system-microservices-model-pipeline
description: >-
  AI マイクロサービス アーキテクチャの設計: モデル サービング (Triton、vLLM)、タスク キュー (Celery/Redis)、GPU
  スケジューリング、モデルのバージョン管理、AI モデルの A/B テスト パイプライン。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: AI システムのアーキテクチャとプラットフォーム'
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 'AI の活用: ファッションとプリント オン デマンド向けの AI プラットフォームの構築'
  slug: ai-thuc-chien-fashion-print-on-demand
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-318" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-318)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1037" cy="61" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="974" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="911" cy="255" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="848" cy="92" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="189" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="151" x2="1100" y2="231" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="181" x2="1050" y2="251" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="973.5166604983954,138 973.5166604983954,164 951,177 928.4833395016046,164 928.4833395016046,138 951,125" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI と ML — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: AI システム アーキテクチャ —</tspan>
      <tspan x="60" dy="42">マイクロサービス、モデルパイプライン、GPU</tspan>
      <tspan x="60" dy="42">インフラストラクチャー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI の活用: ファッションとプリント オン デマンド向けの AI プラットフォームの構築</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: AI システムのアーキテクチャとプラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Jupyter Notebook で実行される AI デモと、運用環境で実行される AI システムは、まったく異なる世界です。この記事では、多くの AI モデルが数千のリクエストを同時に処理する、Fashion AI Platform の **AI マイクロサービス アーキテクチャ** を設計します。

---

## 1. AI 用に別のアーキテクチャが必要なのはなぜですか?

### 本番環境における AI の課題

|チャレンジ |説明 |
|----------|----------|
| **GPU 不足** | GPU は高価なので、多くのモデル間で共有する必要があります。
| **長い推論時間** |安定した拡散には 5 ～ 15 秒かかりますが、ブロックすることはできません。
| **モデルサイズ** | SDXL ~6.5GB VRAM、CLIP ~2GB、SMPL ~500MB |
| **同時実行性** |複数のユーザーが同時に生成 |
| **モデルのバージョン管理** |新しいモデルと古いモデルの A/B テスト |
| **コールドスタート** |モデルのロードには 30 ～ 60 秒かかります。

### AI のモノリスとマイクロサービス

```
❌ Monolith AI Server
   - 1 server load TẤT CẢ models
   - VRAM overflow
   - 1 model crash → toàn bộ hệ thống down

✅ AI Microservices
   - Mỗi module AI = 1 service riêng
   - Scale độc lập
   - Isolate failures
```

---

## 2. 全体的なアーキテクチャ

```
                    ┌─────────────────┐
                    │   API Gateway   │
                    │   (FastAPI)     │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │   Task Queue    │
                    │ (Celery + Redis)│
                    └────────┬────────┘
                             │
            ┌────────────────┼────────────────┐
            │                │                │
   ┌────────▼──────┐ ┌──────▼───────┐ ┌──────▼───────┐
   │ Design Gen    │ │ Edit         │ │ Try-On       │
   │ Service       │ │ Service      │ │ Service      │
   │ (GPU: A100)   │ │ (GPU: A100)  │ │ (GPU: A10G)  │
   └────────┬──────┘ └──────┬───────┘ └──────┬───────┘
            │                │                │
   ┌────────▼──────┐ ┌──────▼───────┐ ┌──────▼───────┐
   │ Model Store   │ │ Personalize  │ │ Production   │
   │ (S3 + Cache)  │ │ Service      │ │ AI Service   │
   │               │ │ (CPU/T4)     │ │ (CPU/T4)     │
   └───────────────┘ └──────────────┘ └──────────────┘
```

### 主なコンポーネント

#### 2.1 API ゲートウェイ (FastAPI)

```python
# Nhận request từ frontend
# Validate input
# Gửi task vào queue
# Return task_id để client polling

@app.post("/api/v1/design/generate")
async def generate_design(request: GenerateRequest):
    task = celery_app.send_task(
        "design_gen.generate",
        args=[request.dict()],
        queue="gpu_high_priority"
    )
    return {"task_id": task.id, "status": "queued"}
```

#### 2.2 タスクキュー (Celery + Redis)

```python
# Queues phân theo priority và resource
CELERY_QUEUES = {
    "gpu_high_priority": {
        "tasks": ["design_gen.generate", "edit.apply"],
        "concurrency": 2,  # Max 2 concurrent GPU tasks
    },
    "gpu_low_priority": {
        "tasks": ["tryon.render", "production.upscale"],
        "concurrency": 4,
    },
    "cpu_tasks": {
        "tasks": ["personalize.update", "production.convert_cmyk"],
        "concurrency": 16,
    },
}
```

#### 2.3 モデル提供層

2 つの主なオプション:

| | NVIDIA トリトン | vLLM |カスタム (PyTorch) |
|--|--------------|------|---------------|
| **こんな用途に最適** |マルチモデルの提供 | LLM 推論 |普及モデル |
| **バッチ処理** |動的バッチ処理 |連続バッチ処理 |マニュアル |
| **形式** | ONNX、TensorRT、PyTorch | HFモデル |任意 |
| **使用例** |クリップ、分類子 |製品説明 遺伝子 | SDXL、コントロールネット |

---

## 3. GPU スケジューリング戦略

### GPU プールのアーキテクチャ

```
GPU Pool
├── Partition A: Design Generation (A100 x 2)
│   ├── SDXL model (always loaded)
│   ├── ControlNet (loaded on demand)
│   └── IP-Adapter (loaded on demand)
│
├── Partition B: Editing & Try-On (A100 x 1 + A10G x 1)
│   ├── InstructPix2Pix
│   ├── SMPL-X
│   └── Cloth simulation
│
└── Partition C: Lightweight AI (T4 x 2)
    ├── CLIP (always loaded)
    ├── Auto-tagger
    ├── Real-ESRGAN upscaler
    └── Size recommendation model
```

### モデル読み込み戦略

```python
class ModelManager:
    """Quản lý load/unload models theo demand"""

    def __init__(self, gpu_memory_limit: int):
        self.loaded_models: dict[str, Model] = {}
        self.gpu_memory_limit = gpu_memory_limit
        self.lru_cache = OrderedDict()

    async def get_model(self, model_name: str) -> Model:
        if model_name in self.loaded_models:
            self.lru_cache.move_to_end(model_name)
            return self.loaded_models[model_name]

        # Check if enough VRAM
        required = MODEL_VRAM_MAP[model_name]
        while self._used_vram() + required > self.gpu_memory_limit:
            self._evict_lru()

        model = await self._load_model(model_name)
        self.loaded_models[model_name] = model
        self.lru_cache[model_name] = True
        return model
```

---

## 4. モデルのバージョン管理と A/B テスト

### モデルレジストリ

```yaml
# model_registry.yaml
models:
  design_gen_sdxl:
    current: v2.1
    versions:
      v2.1:
        path: s3://models/sdxl-fashion-v2.1/
        lora: s3://models/lora-tshirt-v2.1/
        metrics:
          fid_score: 12.3
          user_satisfaction: 4.2
      v2.0:
        path: s3://models/sdxl-fashion-v2.0/
        metrics:
          fid_score: 15.7
          user_satisfaction: 3.8

  style_analyzer:
    current: v1.0
    versions:
      v1.0:
        path: s3://models/clip-style-v1.0/
        type: onnx
```

### A/B テスト パイプライン

```python
class ABTestRouter:
    """Route requests tới model versions theo experiment config"""

    def __init__(self, experiments: list[Experiment]):
        self.experiments = experiments

    def get_model_version(
        self, model_name: str, user_id: str
    ) -> str:
        experiment = self._get_active_experiment(model_name)
        if not experiment:
            return self._get_default_version(model_name)

        # Deterministic assignment based on user_id
        bucket = hash(f"{user_id}:{experiment.id}") % 100
        for variant in experiment.variants:
            if bucket < variant.traffic_percentage:
                return variant.model_version
            bucket -= variant.traffic_percentage

        return experiment.control_version
```

---

## 5. 非同期処理パイプライン

### デザイン生成フロー

```
Client                 API              Queue           GPU Worker
  │                     │                │                  │
  │── POST /generate ──►│                │                  │
  │                     │── send_task ──►│                  │
  │◄── {task_id} ──────│                │                  │
  │                     │                │── pick task ────►│
  │── GET /status ─────►│                │                  │
  │◄── "processing" ───│                │                  │
  │                     │                │     (5-15s)      │
  │                     │                │◄── result ──────│
  │── GET /status ─────►│                │                  │
  │◄── "completed" ────│                │                  │
  │    + design URLs    │                │                  │
```

### Webhook の代替 (運用環境用)

```python
# Thay vì polling, dùng webhook callback
@celery_app.task(bind=True)
def generate_design(self, request: dict):
    result = model.generate(request)

    # Notify client via webhook
    webhook_url = request.get("callback_url")
    if webhook_url:
        requests.post(webhook_url, json={
            "task_id": self.request.id,
            "status": "completed",
            "designs": result.urls,
        })

    return result
```

---

## 6. ストレージアーキテクチャ

```
┌────────────────────────────────────────────┐
│              Storage Layer                  │
├────────────────────────────────────────────┤
│                                            │
│  S3 / MinIO                                │
│  ├── /models/          (AI model weights)  │
│  ├── /designs/         (generated designs) │
│  ├── /uploads/         (user uploads)      │
│  ├── /print-files/     (CMYK print-ready)  │
│  └── /mockups/         (product mockups)   │
│                                            │
│  Redis                                     │
│  ├── Task queue                            │
│  ├── Model cache metadata                  │
│  ├── User session / style embeddings       │
│  └── Rate limiting                         │
│                                            │
│  PostgreSQL                                │
│  ├── User data                             │
│  ├── Design metadata                       │
│  ├── Order history                         │
│  ├── A/B test results                      │
│  └── Behavioral logs                       │
│                                            │
│  Vector DB (Qdrant / Pinecone)             │
│  ├── Design embeddings (search)            │
│  ├── Style embeddings (personalization)    │
│  └── User preference vectors               │
│                                            │
└────────────────────────────────────────────┘
```

---

## 7. エラー処理と回復力

### 再試行戦略

```python
@celery_app.task(
    bind=True,
    max_retries=3,
    default_retry_delay=5,
    autoretry_for=(GPUOutOfMemoryError, ModelLoadError),
)
def generate_design(self, request: dict):
    try:
        model = model_manager.get_model("sdxl")
        return model.generate(request)
    except GPUOutOfMemoryError:
        # Clear GPU cache and retry
        torch.cuda.empty_cache()
        raise self.retry()
```

### フォールバック戦略

```python
# Nếu SDXL fail → fallback về lightweight model
FALLBACK_CHAIN = [
    "sdxl_fashion_v2",      # Primary: best quality
    "sdxl_base",             # Fallback 1: generic SDXL
    "sd15_fashion",          # Fallback 2: SD 1.5 (faster, less quality)
]
```

---

## 8. 監視と可観測性

### 主要な指標

```python
# Prometheus metrics cho AI system
ai_request_duration = Histogram(
    "ai_request_duration_seconds",
    "Time spent processing AI request",
    ["model_name", "model_version", "task_type"],
)

ai_gpu_utilization = Gauge(
    "ai_gpu_utilization_percent",
    "GPU utilization percentage",
    ["gpu_id", "partition"],
)

ai_queue_length = Gauge(
    "ai_queue_length",
    "Number of pending tasks in queue",
    ["queue_name", "priority"],
)

ai_generation_quality = Histogram(
    "ai_generation_quality_score",
    "Quality score of generated designs",
    ["model_version"],
)
```

---

## 概要

ファッション AI プラットフォームの AI システム アーキテクチャには次のものが含まれます。

1. **API ゲートウェイ** (FastAPI) — リクエストの受信、検証、タスクのキューイング
2. **タスク キュー** (Celery + Redis) — 非同期処理、優先キュー
3. **GPU ワーカー** — ワークロードによるパーティション、LRU モデルの読み込み
4. **モデル レジストリ** — バージョン管理、A/B テスト、ロールバック
5. **ストレージ** — S3 (ファイル)、Redis (キャッシュ)、PostgreSQL (メタデータ)、Vector DB (埋め込み)
6. **モニタリング** — GPU 使用率、キューの長さ、生成品質

次の記事では、**AI Tech Stack**: Stable Diffusion XL と FLUX、ControlNet、CLIP の比較、および MLOps パイプラインのセットアップについて詳しく説明します。
