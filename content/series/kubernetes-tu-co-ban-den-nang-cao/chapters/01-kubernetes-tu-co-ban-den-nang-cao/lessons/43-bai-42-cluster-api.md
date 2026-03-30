---
id: 019c9618-060a-7000-8000-c1147ba22e16
title: 'BÀI 42: CLUSTER API VÀ INFRASTRUCTURE AS CODE'
slug: bai-42-cluster-api-va-infrastructure-as-code
description: >-
  Cluster API (CAPI) v1.9+: quản lý Kubernetes clusters như Kubernetes objects. Machine, MachineSet,
  MachineDeployment, ClusterClass. Crossplane so sánh. Infrastructure as Code với Terraform/Pulumi.
duration_minutes: 75
is_free: false
video_url: null
sort_order: 42
section_title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Hiểu Cluster API — cách quản lý K8s clusters như K8s objects. Tìm hiểu ClusterClass, Machine management, và so sánh với các IaC approaches khác (Terraform, Crossplane).</p>

<h2>1. Cluster API là gì?</h2>
<p>Cluster API (CAPI) là Kubernetes project cho phép quản lý lifecycle của Kubernetes clusters sử dụng Kubernetes API — <strong>"Kubernetes để tạo Kubernetes"</strong>.</p>
<p><strong>Các khái niệm chính</strong>:</p>
<ul>
  <li><strong>Management Cluster</strong>: cluster chạy CAPI controllers, quản lý các workload clusters</li>
  <li><strong>Workload Cluster</strong>: cluster được tạo và quản lý bởi CAPI</li>
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

<h2>3. ClusterClass — Template cho Clusters</h2>
<p>ClusterClass (CAPI v1.4+) cho phép định nghĩa template chuẩn để tạo nhiều clusters từ một spec:</p>
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

<h2>4. Cài đặt CAPI</h2>
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

<h2>5. Tạo và Quản lý Clusters</h2>
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
<p>Crossplane là alternative/complement cho CAPI — quản lý cloud resources (không chỉ clusters) bằng Kubernetes CRDs:</p>
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
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>Cluster API: quản lý K8s cluster lifecycle bằng K8s objects</li>
  <li>ClusterClass: template chuẩn để tạo nhiều clusters consistent</li>
  <li>Management cluster + Workload clusters: tách biệt rõ ràng</li>
  <li>Crossplane: quản lý cloud resources (DB, storage, network) bằng K8s CRDs</li>
  <li>CAPI + Crossplane + ArgoCD: full GitOps platform engineering stack 2026</li>
</ul>
