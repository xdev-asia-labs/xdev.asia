---
id: 019d8b30-bb03-7003-c003-f0c4e8000003
title: 第 3 課：AI 技術堆疊 — 擴散模型、視覺模型、LLM 和 MLOps
slug: bai-3-ai-tech-stack-diffusion-vision-llm-mlops
description: >-
  選擇並比較技術堆疊：Stable Diffusion XL 與 FLUX、ControlNet、CLIP、Segment
  Anything、身體估計模型。使用 MLflow、權重和偏差設定 MLOps 管道。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: 第1部分：AI系統架構與平台
course:
  id: 019d8b30-a100-7001-b001-f0c4e8000001
  title: 人工智慧在行動：建構時尚和按需印刷的人工智慧平台
  slug: ai-thuc-chien-fashion-print-on-demand
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6740" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6740)"/>

  <!-- Decorations -->
  <g>
    <circle cx="762" cy="196" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="924" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1086" cy="220" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="748" cy="102" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="244" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="76" x2="1100" y2="156" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="106" x2="1050" y2="176" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="952.8467875173176,110.5 952.8467875173176,141.5 926,157 899.1532124826824,141.5 899.1532124826824,110.50000000000001 926,95" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：AI 技術堆疊 — 擴散模型，</tspan>
      <tspan x="60" dy="42">視覺模型、LLM 和 MLOps</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧在行動：建構時尚和按需印刷的人工智慧平台</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第1部分：AI系統架構與平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在開始編碼之前，您需要為每個模組選擇正確的人工智慧模型和工具。本文將詳細比較這些選項，解釋為什麼選擇模型 X 而不是模型 Y，並設定 MLOps 環境來管理整個生命週期。

---

## 1. AI 模型圖 — 哪個模型適用於哪個問題？

```
┌─────────────────────────────────────────────────────────────┐
│                   Fashion AI Platform — Model Map                │
├──────────────────┬──────────────────────────────────────────┤
│ Module           │ AI Models                                │
├──────────────────┼──────────────────────────────────────────┤
│ Design Gen       │ SDXL / FLUX, ControlNet, IP-Adapter      │
│ Image Analysis   │ CLIP, DINOv2                              │
│ Editing          │ InstructPix2Pix, Instruct-Diffusion      │
│ Typography       │ TextDiffuser, GlyphControl               │
│ Personalization  │ CLIP (embeddings), Rec model              │
│ Size Recommend   │ Custom ML (XGBoost / LightGBM)           │
│ Body Estimation  │ MediaPipe, OpenPose, SMPL-X               │
│ Garment Render   │ Cloth simulation, PyTorch3D               │
│ Auto-Tagging     │ CLIP zero-shot, fine-tuned ViT           │
│ Upscaling        │ Real-ESRGAN, SwinIR                       │
│ Product Copy     │ GPT-4o / Claude API / local LLM           │
│ Content Mod.     │ CLIP + NSFW classifier                    │
└──────────────────┴──────────────────────────────────────────┘
```

---

## 2. 擴散模型 — SDXL、FLUX 與 SD3

###詳細對比

|特性|標清1.5 | SDXL | SD3 |通量.1 |
|--------|--------|--------|-----|--------|
| **解析度** | 512x512 | 512x512 1024x1024 | 1024x1024 1024x1024 | 1024x1024 1024x1024+ |
| **架構** |大學網| UNet（大）| MMDiT |整流流|
| **顯存** | 〜4GB | 〜6.5GB | 〜12GB | 〜12GB |
| **速度** |快|中|慢|中|
| **品質** |好 |很好|優秀|優秀|
| **文字渲染** |可憐|平均 |好 |很好|
| **微調** |簡單、便宜 |平均 |困難|平均 |
| **控制網** |成熟|成熟|早期|成長|
| **許可證** |開啟|開啟|門控|混合|

### 時尚AI平台推薦

```
Primary:   SDXL + LoRA fine-tuned cho fashion
           → Ecosystem mature, ControlNet đầy đủ, fine-tune dễ

Secondary: FLUX.1 Dev
           → Text rendering tốt hơn (quan trọng cho typography trên áo)

Fallback:  SD 1.5 + LoRA
           → Nhanh, nhẹ, dùng cho preview nhanh
```

### 為什麼選擇 SDXL 為 MVP？

1. 完整的 **ControlNet 生態系統** — 服裝感知放置所需
2. **IP 適配器** 穩定 — 影像參考所需
3. **LoRA 微調** 便宜且快速 — 可以在幾個小時內在 1x A100 上進行訓練
4.豐富的**社群模特兒**－多種LoRA時尚可供選擇
5. **擴散器庫** 全面支持

---

## 3. 視覺模型

### CLIP（對比語言-影像預訓練）

```python
# CLIP — backbone cho nhiều module
from transformers import CLIPModel, CLIPProcessor

# Use cases trong Fashion AI Platform:
# 1. Style analysis: Encode ảnh user upload → style vector
# 2. Auto-tagging: Zero-shot classification
# 3. Design search: Semantic similarity
# 4. Content moderation: NSFW detection

model = CLIPModel.from_pretrained("openai/clip-vit-large-patch14-336")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-large-patch14-336")
```

**變體：**

|型號|參數|影像尺寸|速度|準確度|
|--------|--------|------------|--------|----------|
| ViT-B/32 | 151M | 224 | 224快|好 |
| ViT-L/14 | 428M | 224 | 224平均 |很好|
| ViT-L/14@336 | 428M | 336 | 336慢一點 |優|
|西格利普 | 878M | 384 | 384慢|最先進的|

**建議**： `ViT-L/14@336` — 平衡的準確性/速度，足以進行風格分析和標記。

### 控制網

```
ControlNet variants cần cho Fashion AI Platform:

1. controlnet-canny
   → Garment edge detection, layout placement

2. controlnet-depth
   → 3D-aware design placement trên áo

3. controlnet-seg (segmentation)
   → Phân vùng áo: front, back, sleeve

4. controlnet-inpaint
   → Edit vùng cụ thể của design

5. controlnet-pose (OpenPose)
   → Virtual try-on, body-aware rendering
```

### IP 適配器

```python
# IP-Adapter — dùng image reference để guide generation
# Thay vì chỉ dùng text prompt, kết hợp reference image

from diffusers import StableDiffusionXLPipeline
from ip_adapter import IPAdapterXL

# Load IP-Adapter
ip_adapter = IPAdapterXL(
    pipe, "ip-adapter-plus_sdxl_vit-h.safetensors"
)

# Generate với image reference
result = ip_adapter.generate(
    prompt="minimalist streetwear t-shirt design",
    pil_image=reference_image,    # Style reference
    scale=0.6,                     # Influence strength
    num_images=4,                  # 4 variations
)
```

---

## 4. 人體與服裝模型

### MediaPipe 姿勢

```python
import mediapipe as mp

# Lightweight, chạy trên CPU
# 33 body landmarks → estimate body proportions
# Phù hợp cho: size recommendation, basic body shape

mp_pose = mp.solutions.pose
pose = mp_pose.Pose(
    static_image_mode=True,
    model_complexity=2,     # 0, 1, or 2
    min_detection_confidence=0.5
)
```

### SMPL-X（虛擬試穿的人體模型）

```python
# SMPL-X — parametric body model
# Input: body shape parameters (β) + pose parameters (θ)
# Output: 3D mesh (10,475 vertices)

import smplx

body_model = smplx.create(
    model_path="models/smplx",
    model_type="smplx",
    gender="neutral",
    num_betas=10,        # Body shape parameters
    num_expression_coeffs=10,
)

# Generate body mesh from measurements
body_params = measurements_to_smplx_params(
    height=172, weight=70,
    chest=95, waist=80, shoulder=45
)
output = body_model(**body_params)
vertices = output.vertices  # (10475, 3)
```

---

## 5. 法學碩士整合

### 法學碩士在時尚人工智慧平台中的用例

|使用案例|型號|延遲 |成本|
|----------|--------|---------|--------|
| **即時增強** | GPT-4o / 克勞德 | 1–3 秒 |低|
| **產品標題/描述** | GPT-4o / 克勞德 | 2–5 秒 |低|
| **編輯意圖解析** | GPT-4o-迷你 | <1s | Very low |
| **Style description** | Local LLM (Mistral 7B) | 1–2s | Free |
| **Content moderation** | GPT-4o-mini | <1s | Very low |

### Prompt Enhancement Pipeline

```python
ENHANCE_PROMPT = """
You are a fashion design AI assistant for a t-shirt print-on-demand platform.

Given the user's design prompt, enhance it to produce better t-shirt designs:
1. Add specific style details (art style, color palette)
2. Add print-quality keywords (high resolution, vector, clean lines)
3. Keep the core concept intact
4. Add "t-shirt design, isolated on transparent background"

User prompt: {user_prompt}
Enhanced prompt:
"""
```

---

## 6. MLOps Pipeline

### Experiment Tracking (MLflow / Weights & Biases)

```python
import mlflow

# Track mỗi lần fine-tune model
with mlflow.start_run(run_name="sdxl-fashion-lora-v2.1"):
    mlflow.log_params({
        "base_model": "stabilityai/sdxl-base-1.0",
        "lora_rank": 32,
        "learning_rate": 1e-4,
        "train_steps": 5000,
        "dataset_size": 10000,
        "resolution": 1024,
    })

    # Train
    model = train_lora(config)

    # Evaluate
    fid_score = evaluate_fid(model, test_set)
    clip_score = evaluate_clip_score(model, test_prompts)
    user_pref = run_human_eval(model, eval_set)

    mlflow.log_metrics({
        "fid_score": fid_score,
        "clip_score": clip_score,
        "user_preference_rate": user_pref,
    })

    # Register model
    mlflow.pytorch.log_model(model, "model")
```

### Model Deployment Pipeline

```yaml
# CI/CD cho AI models
# .github/workflows/model-deploy.yml

name: Deploy AI Model
on:
  workflow_dispatch:
    inputs:
      model_name:
        description: 'Model to deploy'
        required: true
      model_version:
        description: 'Version to deploy'
        required: true

jobs:
  validate:
    runs-on: gpu-runner
    steps:
      - name: Run quality checks
        run: |
          python scripts/validate_model.py \
            --model ${{ inputs.model_name }} \
            --version ${{ inputs.model_version }} \
            --min-fid 20 \
            --min-clip-score 0.25

  canary:
    needs: validate
    steps:
      - name: Deploy canary (5% traffic)
        run: |
          kubectl set image deployment/$MODEL \
            model=$IMAGE:$VERSION
          kubectl annotate deployment/$MODEL \
            traffic-split="95:current,5:canary"

  promote:
    needs: canary
    steps:
      - name: Monitor for 1 hour
        run: python scripts/monitor_canary.py --duration 3600
      - name: Promote to 100%
        run: |
          kubectl annotate deployment/$MODEL \
            traffic-split="100:new"
```

---

## 7. Development Environment Setup

### Requirements

```txt
# requirements-ai.txt
torch>=2.2.0
火炬視覺>=0.17.0
擴散器>=0.27.0
變形金剛>=4.40.0
加速>=0.28.0
安全張量>=0.4.0
xformers>=0.0.25
ip 適配器>=1.0.0
controlnet-aux>=0.0.8
媒體管道>=0.10.0
smplx>=0.1.28
修剪網格>=4.0.0
onnxruntime-gpu>=1.17.0
毫升流量>=2.12.0
萬寶>=0.16.0
芹菜>=5.3.0
redis>=5.0.0
fastapi>=0.110.0
枕頭>=10.3.0
opencv-python>=4.9.0
scikit-learn>=1.4.0
```

### Docker Setup cho AI Worker

```docker文件
來自 nvidia/cuda:12.1.1-cudnn8-runtime-ubuntu22.04

#Python環境
運行 apt-get update && apt-get install -y python3.11 python3-pip
複製requirements-ai.txt。
運行 pip install -r requests-ai.txt

# 預先下載模型
運行 python3 -c "
從擴散器導入 StableDiffusionXLPipeline
StableDiffusionXLPipeline.from_pretrained(
    'stabilityai/stable-diffusion-xl-base-1.0',
    cache_dir='/模型'
）
」

複製。 /應用程式
工作目錄/應用程式
CMD [“celery”，“-A”，“工人”，“工人”，“--pool=solo”，“-Q”，“gpu_tasks”]
```

---

## 8. Cost Estimation

### GPU 雲端成本（參考）

| Provider | GPU | $/hour | Use case |
|----------|-----|--------|----------|
| RunPod | A100 80GB | $1.64 | Design generation |
| Lambda | A100 40GB | $1.10 | Fine-tuning |
| RunPod | A10G | $0.50 | Try-on, editing |
| RunPod | T4 | $0.20 | Tagging, upscaling |
| AWS | g5.xlarge (A10G) | $1.00 | Production serving |

### 估算營運成本

```
1000 個設計/天：
├── 設計生成：500 GPU 分鐘 (A100) = ~14 美元/天
├── 編按：200 GPU 分鐘 (A100) = ~$5/天
├── 試試渲染：300 GPU 分鐘 (A10G) = ~$2.5/天
├── 標記與升級：100 GPU 分鐘 (T4) = ~$0.3/天
├── LLM API 呼叫：2000 次呼叫 = ~$2/天
└── 總計：~$24/天 = ~$720/月
```

---

## 總結

時尚人工智慧平台的技術堆疊：

|層 |選擇|原因 |
|--------|--------|--------|
| **影像生成** | SDXL + LoRA |生態系統成熟，微調輕鬆|
| **控制** | ControlNet + IP 轉接器 |服裝感知放置 |
| **願景** |剪輯 ViT-L/14@336 |多用途：分析、標記、搜尋 |
| **身體** | MediaPipe + SMPL-X |輕量級估算+詳細3D |
| **法學碩士** | GPT-4o API + Mistral 7B 本地 |用於生產副本的 API，本地實時 |
| **高檔** |真實-ESRGAN |最佳印刷品質 |
| **MLOps** | MLflow + W&B |實驗追蹤+模型註冊|
| **服務** |海衛一+芹菜|多模型服務+非同步 |

下一篇文章將開始建立第一個人工智慧模組 - **文字到設計**，具有針對時尚進行微調的穩定擴散。
