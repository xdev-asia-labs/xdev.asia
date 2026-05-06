---
id: 019c9618-0610-7000-8000-c1147ba22e16
title: 'LECTURE 48: KUBERNETES FOR AI/ML WORKLOADS'
slug: bai-48-kubernetes-cho-ai-ml
description: 'Kubernetes AI/ML 2026: GPU scheduling with DRA (Dynamic Resource Allocation) GA K8s 1.34, time-slicing, MIG partitioning. Kubernetes Inference Extension (KIE), KEDA scale to zero, ResourceFlavor, Kueue batch scheduling.'
duration_minutes: 85
is_free: false
video_url: null
sort_order: 48
section_title: 'Module 10: Cloud & Production'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9347" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9347)"/>

  <!-- Decorations -->
  <g>
    <circle cx="728" cy="134" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="856" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="984" cy="30" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="612" cy="238" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="740" cy="186" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="194" x2="1100" y2="274" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="224" x2="1050" y2="294" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="969.1147367097487,129.5 969.1147367097487,158.5 944,173 918.8852632902513,158.5 918.8852632902513,129.5 944,115" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — Lesson 48</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 48: KUBERNETES FOR AI/ML WORKLOADS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 10: Cloud &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Lesson Objective</h2><p>Understand how Kubernetes 2026 supports AI/ML workloads: GPU scheduling with DRA, inference serving with KIE, batch training with Kueue and JobSet, and autoscaling by request queue.</p>

<h2>1. Why Kubernetes for AI/ML?</h2>
<ul>
  <li><strong>GPU as a Service</strong>: share GPU cluster for multiple teams</li>
  <li><strong>Scale to zero</strong>: inference server does not receive requests → reduces to 0 pods, saves GPU</li>
  <li><strong>Batch scheduling</strong>: training jobs are queued and scheduled efficiently</li>
  <li><strong>Reproducibility</strong>: container images ensure a consistent environment</li>
  <li><strong>Multi-cloud portability</strong>: run training on any cloud with GPU</li>
</ul>

<h2>2. GPU Scheduling — Dynamic Resource Allocation (DRA) GA K8s 1.34</h2>
<p>DRA replaces the old Device Plugin API, allowing more flexible GPU sharing:</p>
<pre><code class="language-yaml"># DeviceClass: define loại GPU available
apiVersion: resource.k8s.io/v1beta1
kind: DeviceClass
metadata:
  name: nvidia-gpu
spec:
  selectors:
  - cel:
      expression: device.driver == "gpu.nvidia.com" && device.attributes["memory"].quantity >= "40Gi"
</code></pre>
<pre><code class="language-yaml"># ResourceClaim: request GPU resources
apiVersion: resource.k8s.io/v1beta1
kind: ResourceClaim
metadata:
  name: gpu-claim
spec:
  devices:
    requests:
    - name: gpu
      deviceClassName: nvidia-gpu
      count: 2          # request 2 GPUs
      adminAccess: false
</code></pre>
<pre><code class="language-yaml"># Pod sử dụng ResourceClaim
apiVersion: v1
kind: Pod
metadata:
  name: training-job
spec:
  resourceClaims:
  - name: gpu-resource
    resourceClaimName: gpu-claim
  containers:
  - name: trainer
    image: nvcr.io/nvidia/pytorch:24.12-py3
    resources:
      claims:
      - name: gpu-resource
    command: ["python", "train.py"]
</code></pre>

<h2>3. GPU Time-slicing and MIG</h2>
<pre><code class="language-bash"># Cách 1: Time-slicing (chia sẻ GPU theo thời gian)
# Phù hợp cho inference, batch jobs nhỏ

# ConfigMap cho NVIDIA device plugin
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: ConfigMap
metadata:
  name: time-slicing-config
  namespace: kube-system
data:
  any: |-
    version: v1
    sharing:
      timeSlicing:
        resources:
        - name: nvidia.com/gpu
          replicas: 4    # 1 GPU vật lý chia thành 4 logical GPUs
EOF

# Cách 2: MIG (Multi-Instance GPU) — partition GPU thực sự
# Chỉ hỗ trợ A100, H100, A30
# MIG profiles: 1g.10gb, 2g.20gb, 3g.40gb, 7g.80gb
nvidia-smi mig -cgi 2g.20gb,2g.20gb,3g.40gb -C

# Verify
kubectl describe node gpu-node | grep nvidia
# nvidia.com/gpu: 3     (MIG instances)
# nvidia.com/mig-2g.20gb: 2
# nvidia.com/mig-3g.40gb: 1
</code></pre>

<h2>4. Kubernetes Inference Extension (KIE)</h2>
<p>KIE (2025 CNCF project): standardize LLM inference serving on Kubernetes:</p>
<pre><code class="language-yaml"># InferenceModel: define model spec
apiVersion: inference.networking.x-k8s.io/v1alpha2
kind: InferenceModel
metadata:
  name: llama3-8b
  namespace: ai
spec:
  modelName: "meta-llama/Llama-3-8B-Instruct"
  criticality: Standard   # Critical / Standard / Sheddable
  poolRef:
    name: llm-pool
</code></pre>
<pre><code class="language-yaml"># InferencePool: group of serving instances
apiVersion: inference.networking.x-k8s.io/v1alpha2
kind: InferencePool
metadata:
  name: llm-pool
spec:
  targetPortNumber: 8080
  selector:
    matchLabels:
      app: vllm-server
  extensionRef:
    name: kie-ext-proc   # gRPC extension for intelligent routing
</code></pre>
<pre><code class="language-bash"># KIE features:
# - Per-request routing dựa trên model đang loaded
# - Prefix caching awareness (route requests tới server đã cache prompt)
# - Priority scheduling (critical requests trước)
# - LoRA adapter management

# KIE + vLLM + K8s Gateway API
# Gateway → KIE Extension Proc → vLLM pods
# KIE biết mỗi vLLM đang cache gì → route hiệu quả hơn
</code></pre>

<h2>5. Kueue — Batch Job Scheduling</h2>
<p>Kueue (CNCF): fair queuing for batch workloads (training jobs, data processing):</p>
<pre><code class="language-yaml"># ResourceFlavor: define GPU types
apiVersion: kueue.x-k8s.io/v1beta1
kind: ResourceFlavor
metadata:
  name: nvidia-a100
spec:
  nodeLabels:
    accelerator: nvidia-a100
---
apiVersion: kueue.x-k8s.io/v1beta1
kind: ResourceFlavor
metadata:
  name: nvidia-h100
spec:
  nodeLabels:
    accelerator: nvidia-h100
</code></pre>
<pre><code class="language-yaml"># ClusterQueue: tổng capacity
apiVersion: kueue.x-k8s.io/v1beta1
kind: ClusterQueue
metadata:
  name: gpu-cluster-queue
spec:
  namespaceSelector: {}
  resourceGroups:
  - coveredResources: ["nvidia.com/gpu", "cpu", "memory"]
    flavors:
    - name: nvidia-h100
      resources:
      - name: nvidia.com/gpu
        nominalQuota: 16     # 16 H100 GPUs total
      - name: cpu
        nominalQuota: 512
      - name: memory
        nominalQuota: 2048Gi
    - name: nvidia-a100
      resources:
      - name: nvidia.com/gpu
        nominalQuota: 32     # 32 A100 GPUs total
</code></pre>
<pre><code class="language-yaml"># LocalQueue: per-team quota
apiVersion: kueue.x-k8s.io/v1beta1
kind: LocalQueue
metadata:
  name: team-nlp-queue
  namespace: nlp-team
spec:
  clusterQueueName: gpu-cluster-queue
</code></pre>
<pre><code class="language-yaml"># Job sử dụng Kueue
apiVersion: batch/v1
kind: Job
metadata:
  name: llama-finetune
  namespace: nlp-team
  labels:
    kueue.x-k8s.io/queue-name: team-nlp-queue
spec:
  completions: 1
  parallelism: 1
  template:
    spec:
      containers:
      - name: trainer
        image: nvcr.io/nvidia/pytorch:24.12-py3
        resources:
          requests:
            nvidia.com/gpu: "4"    # request 4 GPUs
            cpu: "32"
            memory: "256Gi"
        command: ["python", "finetune.py", "--model", "llama3-8b"]
</code></pre>

<h2>6. KEDA — Scale to Zero for Inference</h2>
<pre><code class="language-yaml"># KEDA ScaledObject: scale inference server dựa trên queue depth
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: vllm-scaler
  namespace: ai
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: vllm-llama3
  minReplicaCount: 0          # scale to zero khi không có request
  maxReplicaCount: 4
  pollingInterval: 15
  cooldownPeriod: 300         # đợi 5 phút trước khi scale down
  triggers:
  - type: prometheus
    metadata:
      serverAddress: http://prometheus.monitoring:9090
      metricName: vllm_request_queue_depth
      query: sum(vllm_num_requests_waiting)
      threshold: "5"          # scale up khi có > 5 requests chờ
</code></pre>

<h2>7. Overview of AI/ML Stack on K8s 2026</h2>
<pre><code class="language-bash">Layer             Tools
────────────────────────────────────────────────────
Orchestration     Kubernetes 1.34+
GPU Scheduling    DRA (Dynamic Resource Allocation) GA
Training Jobs     JobSet (CNCF), Kueue (fair scheduling)
Training Framework PyTorch Distributed, JAX, DeepSpeed
Inference Serving vLLM, TGI (Text Generation Inference)
Inference Routing Kubernetes Inference Extension (KIE)
Autoscaling       KEDA (scale to zero)
Model Storage     OCI Artifacts, PVC với ReadOnlyMany
MLOps             MLflow, Kubeflow Pipelines, ZenML
Monitoring        Prometheus + Grafana + DCGM Exporter (GPU)
</code></pre><h2>Summary</h2>
<ul>
  <li>DRA GA K8s 1.34: flexible GPU sharing, replace Device Plugin API</li>
  <li>MIG: hardware partitioning A100/H100 for stronger isolation__HTMLTAG_117___
  <li>Kueue: fair batch scheduling for GPU cluster, per-team quotas</li>
  <li>KIE: intelligent LLM inference routing with caching awareness prefix__HTMLTAG_121___
  <li>KEDA: scale inference servers to 0 when idle → save GPU costs</li>
</ul>