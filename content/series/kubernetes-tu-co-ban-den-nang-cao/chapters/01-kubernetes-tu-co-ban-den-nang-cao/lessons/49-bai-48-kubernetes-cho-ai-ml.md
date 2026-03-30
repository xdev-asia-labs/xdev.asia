---
id: 019c9618-0610-7000-8000-c1147ba22e16
title: 'BÀI 48: KUBERNETES CHO AI/ML WORKLOADS'
slug: bai-48-kubernetes-cho-ai-ml
description: >-
  Kubernetes AI/ML 2026: GPU scheduling với DRA (Dynamic Resource Allocation) GA K8s 1.34,
  time-slicing, MIG partitioning. Kubernetes Inference Extension (KIE), KEDA scale to zero,
  ResourceFlavor, Kueue batch scheduling.
duration_minutes: 85
is_free: false
video_url: null
sort_order: 48
section_title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Hiểu cách Kubernetes 2026 hỗ trợ AI/ML workloads: GPU scheduling với DRA, inference serving với KIE, batch training với Kueue và JobSet, và autoscaling theo request queue.</p>

<h2>1. Tại sao Kubernetes cho AI/ML?</h2>
<ul>
  <li><strong>GPU as a Service</strong>: share GPU cluster cho nhiều teams</li>
  <li><strong>Scale to zero</strong>: inference server không nhận request → giảm về 0 pods, tiết kiệm GPU</li>
  <li><strong>Batch scheduling</strong>: training jobs được queue và schedule hiệu quả</li>
  <li><strong>Reproducibility</strong>: container images đảm bảo môi trường consistent</li>
  <li><strong>Multi-cloud portability</strong>: chạy training trên cloud bất kỳ có GPU</li>
</ul>

<h2>2. GPU Scheduling — Dynamic Resource Allocation (DRA) GA K8s 1.34</h2>
<p>DRA thay thế Device Plugin API cũ, cho phép GPU sharing linh hoạt hơn:</p>
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

<h2>3. GPU Time-slicing và MIG</h2>
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
<p>KIE (2025 CNCF project): chuẩn hóa LLM inference serving trên Kubernetes:</p>
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
<p>Kueue (CNCF): fair queuing cho batch workloads (training jobs, data processing):</p>
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

<h2>6. KEDA — Scale to Zero cho Inference</h2>
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

<h2>7. Tổng quan AI/ML Stack trên K8s 2026</h2>
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
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>DRA GA K8s 1.34: flexible GPU sharing, thay Device Plugin API</li>
  <li>MIG: hardware partitioning A100/H100 cho isolation mạnh hơn</li>
  <li>Kueue: fair batch scheduling cho GPU cluster, per-team quotas</li>
  <li>KIE: intelligent LLM inference routing với prefix caching awareness</li>
  <li>KEDA: scale inference servers về 0 khi idle → tiết kiệm GPU costs</li>
</ul>
