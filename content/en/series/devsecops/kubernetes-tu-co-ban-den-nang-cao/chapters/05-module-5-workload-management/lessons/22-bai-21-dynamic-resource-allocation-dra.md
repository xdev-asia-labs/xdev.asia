---
id: 019c9618-0304-7000-8000-c1147ba22e13
title: 'LESSON 21: DYNAMIC RESOURCE ALLOCATION (DRA) — GA K8S 1.34'
slug: bai-21-dynamic-resource-allocation-dra
description: Dynamic Resource Allocation (DRA) GA from K8s 1.34 — replaces old extended resources. ResourceClaim, DeviceClass, GPU sharing and FPGA allocation. NVIDIA GPU Operator with DRA for AI/ML workloads.
duration_minutes: 80
is_free: false
video_url: null
sort_order: 21
section_title: 'Module 5: Workload Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9415" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9415)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1000" cy="270" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="250" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="150" x2="1100" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="180" x2="1050" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1021.650635094611,187.5 1021.650635094611,212.5 1000,225 978.349364905389,212.5 978.349364905389,187.5 1000,175" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — Lesson 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 21: DYNAMIC RESOURCE ALLOCATION (DRA)</tspan>
      <tspan x="60" dy="42">— GA K8S 1.34</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 5: Workload Management__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Lesson Objective_</h2><p>Understand what Dynamic Resource Allocation (DRA) GA in K8s 1.34 is, why it is better than the old extended resources, how to use ResourceClaim and DeviceClass to allocate GPU, FPGA for AI/ML workloads.</p>

<h2>1. Problem with Extended Resources Old</h2>
<p>Before DRA, Kubernetes used <strong>extended resources</strong> to manage GPU:</p>
<pre><code class="language-yaml">resources:
  limits:
    nvidia.com/gpu: 1   # request 1 GPU
</code></pre>
<p>Disadvantages:</p>
<ul>
  <li><strong>All-or-nothing</strong>: cannot share GPU between multiple Pods</li>
  <li><strong>No structured parameters</strong>: cannot specify GPU type, memory, MIG partition</li>
  <li><strong>No topology awareness</strong>: don't know which GPU is on which PCIe switch</li>
  <li><strong>No deallocation hooks</strong>: no cleanup when Pod ends</li>
</ul>

<h2>2. Dynamic Resource Allocation (DRA) — GA K8s 1.34</h2>
<p>DRA provides a flexible API to allocate hardware resources with <strong>structured parameters</strong>.</p>

<h3>2.1 DRA Architecture</h3>
<ul>
  <li><strong>DeviceClass</strong>: defines the device type (GPU, FPGA, NIC) — created by infrastructure team__HTMLTAG_109___
  <li><strong>ResourceClaim</strong>: device-specific request — created by app team</li>
  <li><strong>ResourceClaimTemplate</strong>: create ResourceClaim for each Pod in Deployment/StatefulSet</li>
  <li><strong>ResourceSlice</strong>: information about available devices on each Node (published by the driver)</li>
</ul><h3>2.2 DeviceClass</h3>
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

<h3>2.3 ResourceClaim — GPU specific requirements__HTMLTAG_126___
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

<h3>2.4 Pod uses ResourceClaim</h3>
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

<h3>2.5 ResourceClaimTemplate — For Deployments</h3>
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

<h2>3. GPU Time-Slicing with DRA</h2>
<p>Share 1 GPU for multiple Pods with time-slicing:</p>
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
<p>MIG (Multi-Instance GPU) divides the A100/H100 GPU into independent partitions:</p>
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

<h2>5. NVIDIA GPU Operator with DRA</h2>
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

<h2>6. Comparison: Extended Resources vs DRA</h2>
<pre><code class="language-bash">Feature                  Extended Resources    DRA (K8s 1.34 GA)
─────────────────────────────────────────────────────────────────
GPU sharing              ❌ No                ✅ Time-slicing, MIG
Structured parameters    ❌ No                ✅ CEL expressions
Multi-device request     ❌ Limited           ✅ Multiple claims
Topology awareness       ❌ No                ✅ Yes
Cleanup hooks            ❌ No                ✅ Yes
Kubernetes version       1.8+                 1.34 GA
</code></pre>

<h2>7. Other Use Cases</h2>
<ul>
  <li><strong>FPGA</strong>: accelerate inference, crypto, network processing</li>
  <li><strong>RDMA NIC</strong>: high-speed networking for distributed training</li>
  <li><strong>Custom ASICs</strong>: TPU, custom AI accelerators</li>
  <li><strong>SR-IOV Network Interfaces</strong>: virtual functions for high-performance networking</li>
</ul>

<h2>Summary</h2>
<ul>
  <li>DRA GA K8s 1.34: replace extended resources with flexible allocation</li>
  <li>DeviceClass: defines the hardware type__HTMLTAG_169___
  <li>ResourceClaim: specific request with CEL selectors</li>
  <li>Supports GPU sharing: Time-slicing and MIG partitioning</li>
  <li>NVIDIA GPU Operator: DRA support from latest version</li>
</ul>