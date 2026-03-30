---
id: 019c9618-0304-7000-8000-c1147ba22e13
title: 'BÀI 21: DYNAMIC RESOURCE ALLOCATION (DRA) — GA K8S 1.34'
slug: bai-21-dynamic-resource-allocation-dra
description: >-
  Dynamic Resource Allocation (DRA) GA từ K8s 1.34 — thay thế extended resources cũ. ResourceClaim,
  DeviceClass, GPU sharing và FPGA allocation. NVIDIA GPU Operator với DRA cho AI/ML workloads.
duration_minutes: 80
is_free: false
video_url: null
sort_order: 21
section_title: 'Module 5: Workload Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Hiểu Dynamic Resource Allocation (DRA) GA trong K8s 1.34 là gì, tại sao tốt hơn extended resources cũ, cách dùng ResourceClaim và DeviceClass để allocate GPU, FPGA cho AI/ML workloads.</p>

<h2>1. Vấn đề với Extended Resources Cũ</h2>
<p>Trước DRA, Kubernetes dùng <strong>extended resources</strong> để quản lý GPU:</p>
<pre><code class="language-yaml">resources:
  limits:
    nvidia.com/gpu: 1   # request 1 GPU
</code></pre>
<p>Nhược điểm:</p>
<ul>
  <li><strong>All-or-nothing</strong>: không thể share GPU giữa nhiều Pods</li>
  <li><strong>No structured parameters</strong>: không thể chỉ định loại GPU, memory, MIG partition</li>
  <li><strong>No topology awareness</strong>: không biết GPU nào nằm trên PCIe switch nào</li>
  <li><strong>No deallocation hooks</strong>: không cleanup khi Pod kết thúc</li>
</ul>

<h2>2. Dynamic Resource Allocation (DRA) — GA K8s 1.34</h2>
<p>DRA cung cấp API linh hoạt để allocate hardware resources với <strong>structured parameters</strong>.</p>

<h3>2.1 DRA Architecture</h3>
<ul>
  <li><strong>DeviceClass</strong>: định nghĩa loại device (GPU, FPGA, NIC) — do infrastructure team tạo</li>
  <li><strong>ResourceClaim</strong>: yêu cầu cụ thể cho device — do app team tạo</li>
  <li><strong>ResourceClaimTemplate</strong>: tạo ResourceClaim cho mỗi Pod trong Deployment/StatefulSet</li>
  <li><strong>ResourceSlice</strong>: thông tin về device available trên mỗi Node (do driver publish)</li>
</ul>

<h3>2.2 DeviceClass</h3>
<pre><code class="language-yaml">apiVersion: resource.k8s.io/v1alpha3
kind: DeviceClass
metadata:
  name: gpu.nvidia.com
spec:
  selectors:
  # Chỉ chọn NVIDIA GPUs
  - cel:
      expression: device.driver == "gpu.nvidia.com"
  config:
  - opaque:
      driver: gpu.nvidia.com
      parameters:
        apiVersion: gpu.resource.nvidia.com/v1alpha1
        kind: GpuConfig
        sharing:
          strategy: TimeSlicing
          timeSlicingConfig:
            interval: Default
</code></pre>

<h3>2.3 ResourceClaim — Yêu cầu GPU cụ thể</h3>
<pre><code class="language-yaml">apiVersion: resource.k8s.io/v1alpha3
kind: ResourceClaim
metadata:
  name: my-gpu-claim
  namespace: ml-team
spec:
  devices:
    requests:
    - name: gpu
      deviceClassName: gpu.nvidia.com
      selectors:
      # Chỉ request GPU có ít nhất 40GB VRAM
      - cel:
          expression: device.attributes["gpu.nvidia.com"].memory.isGreaterThan(quantity("40Gi"))
      allocationMode: ExactCount
      count: 1
</code></pre>

<h3>2.4 Pod sử dụng ResourceClaim</h3>
<pre><code class="language-yaml">apiVersion: v1
kind: Pod
metadata:
  name: ml-training
  namespace: ml-team
spec:
  resourceClaims:
  - name: gpu          # tên trong pod spec
    resourceClaimName: my-gpu-claim   # ResourceClaim tạo sẵn
  containers:
  - name: trainer
    image: nvcr.io/nvidia/pytorch:24.12-py3
    resources:
      claims:
      - name: gpu      # reference tên ở trên
    command: ["python", "train.py"]
</code></pre>

<h3>2.5 ResourceClaimTemplate — Cho Deployments</h3>
<pre><code class="language-yaml">apiVersion: resource.k8s.io/v1alpha3
kind: ResourceClaimTemplate
metadata:
  name: gpu-template
  namespace: ml-team
spec:
  spec:
    devices:
      requests:
      - name: gpu
        deviceClassName: gpu.nvidia.com
        count: 1
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: inference-server
spec:
  replicas: 3  # mỗi pod nhận 1 GPU riêng
  template:
    spec:
      resourceClaims:
      - name: gpu
        resourceClaimTemplateName: gpu-template
      containers:
      - name: inference
        image: inference:v1
        resources:
          claims:
          - name: gpu
</code></pre>

<h2>3. GPU Time-Slicing với DRA</h2>
<p>Chia sẻ 1 GPU cho nhiều Pods với time-slicing:</p>
<pre><code class="language-yaml">apiVersion: resource.k8s.io/v1alpha3
kind: DeviceClass
metadata:
  name: gpu-shared.nvidia.com
spec:
  selectors:
  - cel:
      expression: device.driver == "gpu.nvidia.com"
  config:
  - opaque:
      driver: gpu.nvidia.com
      parameters:
        apiVersion: gpu.resource.nvidia.com/v1alpha1
        kind: GpuConfig
        sharing:
          strategy: TimeSlicing     # chia thời gian GPU
          timeSlicingConfig:
            interval: Default       # ~50ms mỗi lần
</code></pre>

<h2>4. Multi-Instance GPU (MIG) Partitioning</h2>
<p>MIG (Multi-Instance GPU) chia GPU A100/H100 thành các partitions độc lập:</p>
<pre><code class="language-yaml">apiVersion: resource.k8s.io/v1alpha3
kind: ResourceClaim
metadata:
  name: mig-1g-10gb
spec:
  devices:
    requests:
    - name: gpu-partition
      deviceClassName: gpu.nvidia.com
      selectors:
      # Request MIG 1g.10gb partition (1/7 của A100 80GB)
      - cel:
          expression: |
            device.attributes["gpu.nvidia.com"].migProfile == "1g.10gb"
</code></pre>

<h2>5. NVIDIA GPU Operator với DRA</h2>
<pre><code class="language-bash"># Cài GPU Operator với DRA enabled
helm repo add nvidia https://helm.ngc.nvidia.com/nvidia
helm repo update

helm install gpu-operator nvidia/gpu-operator \
  --namespace gpu-operator \
  --create-namespace \
  --set driver.enabled=true \
  --set toolkit.enabled=true \
  --set devicePlugin.enabled=false \    # Tắt device plugin cũ
  --set driverManager.enabled=true \
  --set mig.strategy=mixed \
  --set nfd.enabled=true

# Verify DRA
kubectl get resourceslice  # Xem GPUs available
kubectl get deviceclass
</code></pre>

<h2>6. So sánh: Extended Resources vs DRA</h2>
<pre><code class="language-bash">Feature                  Extended Resources    DRA (K8s 1.34 GA)
─────────────────────────────────────────────────────────────────
GPU sharing              ❌ No                ✅ Time-slicing, MIG
Structured parameters    ❌ No                ✅ CEL expressions
Multi-device request     ❌ Limited           ✅ Multiple claims
Topology awareness       ❌ No                ✅ Yes
Cleanup hooks            ❌ No                ✅ Yes
Kubernetes version       1.8+                 1.34 GA
</code></pre>

<h2>7. Use Cases khác</h2>
<ul>
  <li><strong>FPGA</strong>: accelerate inference, crypto, network processing</li>
  <li><strong>RDMA NIC</strong>: high-speed networking cho distributed training</li>
  <li><strong>Custom ASICs</strong>: TPU, custom AI accelerators</li>
  <li><strong>SR-IOV Network Interfaces</strong>: virtual functions cho high-performance networking</li>
</ul>

<h2>Tóm tắt</h2>
<ul>
  <li>DRA GA K8s 1.34: thay extended resources với flexible allocation</li>
  <li>DeviceClass: định nghĩa loại hardware</li>
  <li>ResourceClaim: yêu cầu cụ thể với CEL selectors</li>
  <li>Hỗ trợ GPU sharing: Time-slicing và MIG partitioning</li>
  <li>NVIDIA GPU Operator: hỗ trợ DRA từ phiên bản mới nhất</li>
</ul>
