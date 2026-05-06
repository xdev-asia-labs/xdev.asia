---
id: 019c9618-060a-7000-8000-c1147ba22e16
title: 'LESSON 42: CLUSTER API AND INFRASTRUCTURE AS CODE'
slug: bai-42-cluster-api-va-infrastructure-as-code
description: 'Cluster API (CAPI) v1.9+: manages Kubernetes clusters as Kubernetes objects. Machine, MachineSet, MachineDeployment, ClusterClass. Crossplane comparison. Infrastructure as Code with Terraform/Pulumi.'
duration_minutes: 75
is_free: false
video_url: null
sort_order: 42
section_title: 'Module 9: Cluster Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4724" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4724)"/>

  <!-- Decorations -->
  <g>
    <circle cx="706" cy="288" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="812" cy="114" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="918" cy="200" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1024" cy="286" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="112" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="188" x2="1100" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="218" x2="1050" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.2390923627308,116.5 975.2390923627308,159.5 938,181 900.7609076372692,159.5 900.7609076372692,116.50000000000001 938,95" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — Lesson 42</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 42: CLUSTER API AND INFRASTRUCTURE AS</tspan>
      <tspan x="60" dy="42">CODE</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 9: Cluster Management</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Lesson Objective_</h2><p>Understand Cluster API — how to manage K8s clusters like K8s objects. Learn about ClusterClass, Machine management, and compare with other IaC approaches (Terraform, Crossplane).</p>

<h2>1. What is Cluster API?</h2>
<p>Cluster API (CAPI) is a Kubernetes project that allows managing the lifecycle of Kubernetes clusters using the Kubernetes API — <strong>"Kubernetes to create Kubernetes"</strong>.</p>
<p><strong>Main concepts__HTMLTAG_79___:</p>
<ul>
  <li><strong>Management Cluster</strong>: cluster running CAPI controllers, managing workload clusters</li>
  <li><strong>Workload Cluster</strong>: cluster created and managed by CAPI</li>
  <li><strong>Infrastructure Provider</strong>: AWS (CAPA), GCP (CAPG), Azure (CAPZ), vSphere (CAPV)</li>
  <li><strong>Bootstrap Provider</strong>: kubeadm (KubeadmControlPlane), RKE2</li>
</ul>

<h2>2. CAPI Core Resources</h2>
<pre><code class="language-yaml"># Cluster: đại diện cho một workload cluster
apiVersion: cluster.x-k8s.io/v1beta1
kind: Cluster
metadata:
  name: production-cluster
  namespace: default
spec:
  clusterNetwork:
    pods:
      cidrBlocks: ["10.0.0.0/16"]
    services:
      cidrBlocks: ["10.96.0.0/12"]
  # Reference tới infrastructure provider (AWS/GCP/etc)
  infrastructureRef:
    apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
    kind: AWSCluster
    name: production-cluster
  # Reference tới control plane provider
  controlPlaneRef:
    apiVersion: controlplane.cluster.x-k8s.io/v1beta1
    kind: KubeadmControlPlane
    name: production-cluster-control-plane
</code></pre>
<pre><code class="language-yaml"># MachineDeployment: quản lý worker nodes (giống Deployment cho VMs)
apiVersion: cluster.x-k8s.io/v1beta1
kind: MachineDeployment
metadata:
  name: production-workers
spec:
  clusterName: production-cluster
  replicas: 3
  selector:
    matchLabels:
      cluster.x-k8s.io/cluster-name: production-cluster
  template:
    spec:
      bootstrap:
        configRef:
          apiVersion: bootstrap.cluster.x-k8s.io/v1beta1
          kind: KubeadmConfigTemplate
          name: production-worker-config
      infrastructureRef:
        apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
        kind: AWSMachineTemplate
        name: production-worker-machine
      version: "v1.32.0"
</code></pre>

<h2>3. ClusterClass — Template for Clusters</h2>
<p>ClusterClass (CAPI v1.4+) allows defining standard templates to create multiple clusters from one spec:</p>
<pre><code class="language-yaml">apiVersion: cluster.x-k8s.io/v1beta1
kind: ClusterClass
metadata:
  name: aws-production-class
spec:
  controlPlane:
    ref:
      apiVersion: controlplane.cluster.x-k8s.io/v1beta1
      kind: KubeadmControlPlaneTemplate
      name: aws-cp-template
    machineInfrastructure:
      ref:
        apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
        kind: AWSMachineTemplate
        name: aws-cp-machine-template
  infrastructure:
    ref:
      apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
      kind: AWSClusterTemplate
      name: aws-cluster-template
  workers:
    machineDeployments:
    - class: default-worker
      template:
        bootstrap:
          ref:
            apiVersion: bootstrap.cluster.x-k8s.io/v1beta1
            kind: KubeadmConfigTemplate
            name: worker-bootstrap
        infrastructure:
          ref:
            apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
            kind: AWSMachineTemplate
            name: aws-worker-template
  # Variables có thể customize per-cluster
  variables:
  - name: region
    required: true
    schema:
      openAPIV3Schema:
        type: string
  - name: instanceType
    schema:
      openAPIV3Schema:
        type: string
        default: m5.xlarge
</code></pre>
<pre><code class="language-yaml"># Tạo cluster từ ClusterClass
apiVersion: cluster.x-k8s.io/v1beta1
kind: Cluster
metadata:
  name: team-alpha-cluster
spec:
  topology:
    class: aws-production-class
    version: v1.32.0
    controlPlane:
      replicas: 3
    workers:
      machineDeployments:
      - name: workers
        replicas: 5
    variables:
    - name: region
      value: ap-southeast-1
    - name: instanceType
      value: c5.2xlarge
</code></pre>

<h2>4. CAPI Settings</h2>
<pre><code class="language-bash"># Cài clusterctl CLI
curl -L https://github.com/kubernetes-sigs/cluster-api/releases/latest/download/clusterctl-linux-amd64 -o /usr/local/bin/clusterctl
chmod +x /usr/local/bin/clusterctl

# Init management cluster (ví dụ AWS provider)
export AWS_REGION=ap-southeast-1
export AWS_ACCESS_KEY_ID=...
export AWS_SECRET_ACCESS_KEY=...
export AWS_SESSION_TOKEN=...      # nếu dùng MFA

# Prepare AWS credentials
clusterawsadm bootstrap iam create-cloudformation-stack

export AWS_B64ENCODED_CREDENTIALS=$(clusterawsadm bootstrap credentials encode-as-profile)

# Init CAPI
clusterctl init --infrastructure aws

# Verify
kubectl get pods -n capi-system
kubectl get pods -n capa-system   # AWS provider

# Xem providers
clusterctl describe provider
</code></pre>

<h2>5. Creating and Managing Clusters</h2>
<pre><code class="language-bash"># Generate cluster manifest từ template
clusterctl generate cluster production-cluster \
  --infrastructure aws \
  --kubernetes-version v1.32.0 \
  --control-plane-machine-count 3 \
  --worker-machine-count 5 \
  > production-cluster.yaml

# Apply
kubectl apply -f production-cluster.yaml

# Theo dõi provisioning
clusterctl describe cluster production-cluster
kubectl get machines -A -w

# Lấy kubeconfig của workload cluster
clusterctl get kubeconfig production-cluster > production.kubeconfig

# Upgrade workload cluster
kubectl patch cluster production-cluster --patch '{"spec": {"topology": {"version": "v1.33.0"}}}' --type merge

# Scale worker nodes
kubectl patch machinedeployment production-workers --patch '{"spec": {"replicas": 10}}' --type merge

# Delete cluster (tất cả VMs, LBs sẽ được dọn dẹp)
kubectl delete cluster production-cluster
</code></pre>

<h2>6. Crossplane — Control Plane Framework</h2>
<p>Crossplane is an alternative/complement to CAPI — manage cloud resources (not just clusters) with Kubernetes CRDs:</p>
<pre><code class="language-bash"># Cài Crossplane
helm repo add crossplane-stable https://charts.crossplane.io/stable
helm install crossplane crossplane-stable/crossplane -n crossplane-system --create-namespace

# Cài AWS provider
kubectl apply -f - &lt;&lt;EOF
apiVersion: pkg.crossplane.io/v1
kind: Provider
metadata:
  name: provider-aws-ec2
spec:
  package: xpkg.upbound.io/upbound/provider-aws-ec2:latest
EOF
</code></pre>
<pre><code class="language-yaml"># Tạo RDS instance bằng Crossplane
apiVersion: rds.aws.upbound.io/v1beta1
kind: Instance
metadata:
  name: my-postgres
spec:
  forProvider:
    region: ap-southeast-1
    instanceClass: db.t3.medium
    engine: postgres
    engineVersion: "16.3"
    allocatedStorage: 20
    username: admin
    skipFinalSnapshot: true
  writeConnectionSecretToRef:
    namespace: default
    name: my-postgres-conn     # K8s Secret với connection info
</code></pre>

<h2>7. IaC Comparison 2026</h2>
<pre><code class="language-bash">Tool        Use Case                          Approach
──────────────────────────────────────────────────────────────
Terraform   Multi-cloud infra provisioning    HCL, state file
Pulumi      Infra as code với real languages  Python/TS/Go
CAPI        K8s cluster lifecycle             K8s API, GitOps-friendly
Crossplane  Cloud resources via K8s API       K8s API, Composition
Helm        K8s app deployment                Templates, values
Kustomize   K8s manifest overlay              Patch-based, no templates

# 2026 Trend: CAPI + Crossplane combination
# - CAPI: quản lý cluster lifecycle
# - Crossplane: quản lý cloud resources (RDS, S3, etc.) được tham chiếu bởi apps
# - ArgoCD/Flux: deploy tất cả qua GitOps
</code></pre><h2>Summary</h2>
<ul>
  <li>Cluster API: manage K8s cluster lifecycle using K8s objects</li>
  <li>ClusterClass: standard template to create multiple consistent clusters</li>
  <li>Management cluster + Workload clusters: clearly separated</li>
  <li>Crossplane: manage cloud resources (DB, storage, network) with K8s CRDs</li>
  <li>CAPI + Crossplane + ArgoCD: full GitOps platform engineering stack 2026</li>
</ul>