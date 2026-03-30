---
id: 019c9618-060c-7000-8000-c1147ba22e16
title: 'BÀI 44: MANAGED KUBERNETES SERVICES 2026 — EKS, GKE, AKS'
slug: bai-44-managed-kubernetes-services-2026
description: >-
  So sánh EKS, GKE, AKS năm 2026: tính năng mới, pricing, networking options. EKS Auto Mode,
  GKE Autopilot, AKS Automatic. Multi-cloud strategy và khi nào tự quản lý cluster.
duration_minutes: 85
is_free: false
video_url: null
sort_order: 44
section_title: 'Module 10: Cloud & Production'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>So sánh EKS, GKE, AKS từ góc nhìn thực tế 2026: tính năng, networking, autoscaling modes, pricing, và khi nào nên chọn managed vs self-managed cluster.</p>

<h2>1. So sánh Tổng quan 2026</h2>
<pre><code class="language-bash">Feature              EKS (AWS)              GKE (Google)           AKS (Azure)
──────────────────────────────────────────────────────────────────────────────────
K8s version lag     ~1-2 months            0 (same day)           ~1 month
Control plane       Free tier/$0.10/hr     $0.10/hr               Free
Node pools          Multiple               Multiple               Multiple
Spot/Preemptible    Spot nodes             Spot nodes             Spot VMs
GPU support         ✅ (NVIDIA A100/H100)  ✅ (TPU v5)            ✅ (NVIDIA)
Networking          VPC CNI/Cilium         Dataplane v2/Cilium    Azure CNI/Cilium
Autopilot mode      EKS Auto Mode          GKE Autopilot          AKS Automatic
Managed nodegroup   ✅                     Node Auto-provisioning  ✅
Multi-AZ            ✅                     ✅                     ✅
Registry            ECR                    Artifact Registry      ACR
Service mesh        App Mesh/Istio         Cloud Service Mesh     OSM
GitOps              CodePipeline/ArgoCD    Cloud Deploy/ArgoCD    Flux (built-in)
Windows nodes       ✅                     ✅                     ✅
ARM64/Graviton      ✅ (Graviton 4)        ✅ (Tau T2A)           ✅ (Ampere Altra)
</code></pre>

<h2>2. Amazon EKS 2026</h2>
<h3>EKS Auto Mode (2025 GA)</h3>
<p>EKS Auto Mode: AWS quản lý toàn bộ data plane — không cần quản lý node groups:</p>
<pre><code class="language-bash"># Tạo EKS Auto Mode cluster
aws eks create-cluster \
  --name my-cluster \
  --kubernetes-version 1.32 \
  --role-arn arn:aws:iam::123456789:role/EKSClusterRole \
  --resources-vpc-config subnetIds=subnet-xxx,subnet-yyy,securityGroupIds=sg-xxx \
  --compute-config enabled=true,nodePools=general-purpose,system   # Auto Mode

# Auto Mode tự động:
# - Provision nodes khi cần (Karpenter-based)
# - Scale down nodes không dùng
# - Upgrade nodes
# - Quản lý AMIs

# Vẫn dùng kubectl như bình thường
kubectl get nodes   # nodes được Karpenter provision tự động
</code></pre>

<h3>EKS Traditional (Managed Node Groups)</h3>
<pre><code class="language-bash"># Cài eksctl
curl --silent --location "https://github.com/eksctl-io/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz
mv eksctl /usr/local/bin/

# Tạo cluster với Managed Node Groups
eksctl create cluster \
  --name production \
  --version 1.32 \
  --region ap-southeast-1 \
  --nodegroup-name general \
  --node-type m5.xlarge \
  --nodes 3 \
  --nodes-min 2 \
  --nodes-max 10 \
  --with-oidc \           # enable IRSA (IAM Roles for Service Accounts)
  --managed               # Managed Node Group

# Thêm GPU node group
eksctl create nodegroup \
  --cluster production \
  --name gpu-workers \
  --node-type p4d.24xlarge \
  --nodes 2 \
  --node-labels=workload=gpu \
  --taints=dedicated=gpu:NoSchedule

# Update node group (rolling update)
eksctl upgrade nodegroup \
  --name general \
  --cluster production \
  --kubernetes-version 1.32
</code></pre>

<h3>EKS Networking Options</h3>
<pre><code class="language-bash"># Option 1: VPC CNI (default) — pods có IP của VPC subnet
# Option 2: VPC CNI + Cilium network policy
# Option 3: Cilium CNI (2025: fully supported on EKS)

# Enable prefix delegation để tăng pod density
kubectl set env daemonset aws-node -n kube-system \
  ENABLE_PREFIX_DELEGATION=true \
  WARM_PREFIX_TARGET=1

# IRSA: Service Account với AWS IAM role
eksctl create iamserviceaccount \
  --name my-app-sa \
  --namespace production \
  --cluster production \
  --attach-policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess \
  --approve \
  --override-existing-serviceaccounts
</code></pre>

<h2>3. Google Kubernetes Engine (GKE) 2026</h2>
<h3>GKE Autopilot</h3>
<p>GKE Autopilot: Google quản lý nodes hoàn toàn, charge theo pod resources:</p>
<pre><code class="language-bash"># Tạo GKE Autopilot cluster
gcloud container clusters create-auto my-cluster \
  --region asia-southeast1 \
  --release-channel regular

# Autopilot:
# - Không quản lý nodes (Google tự provision, scale, upgrade)
# - Bill theo pod CPU/Memory, không theo nodes
# - Enforces best practices tự động (resource limits bắt buộc, etc.)
# - Hỗ trợ GPU, TPU với requests tự động

kubectl get nodes   # tự động scale khi có pending pods
</code></pre>

<h3>GKE Standard (Node pools)</h3>
<pre><code class="language-bash"># Tạo GKE Standard cluster
gcloud container clusters create production \
  --zone asia-southeast1-a \
  --machine-type n2-standard-4 \
  --num-nodes 3 \
  --enable-autoscaling \
  --min-nodes 2 \
  --max-nodes 20 \
  --enable-ip-alias \            # VPC-native networking
  --enable-private-nodes \       # nodes không có public IP
  --master-ipv4-cidr 172.16.0.0/28 \
  --network my-vpc \
  --subnetwork my-subnet \
  --dataplane-v2                 # Cilium-based Dataplane V2

# GKE Dataplane V2: Cilium eBPF-based, thay thế kube-proxy và iptables
# Automatic mTLS giữa pods với NetworkPolicy

# Workload Identity (thay vì key files)
gcloud container clusters update production \
  --workload-pool=PROJECT_ID.svc.id.goog

gcloud iam service-accounts add-iam-policy-binding my-gsa@project.iam.gserviceaccount.com \
  --member "serviceAccount:project.svc.id.goog[namespace/my-ksa]" \
  --role roles/iam.workloadIdentityUser
</code></pre>

<h2>4. Azure Kubernetes Service (AKS) 2026</h2>
<pre><code class="language-bash"># Tạo AKS cluster với Azure CNI Overlay (Cilium-based)
az aks create \
  --resource-group myRG \
  --name production \
  --kubernetes-version 1.32 \
  --node-count 3 \
  --node-vm-size Standard_D4s_v5 \
  --network-plugin azure \
  --network-dataplane cilium \      # Cilium eBPF
  --network-policy cilium \
  --enable-cluster-autoscaler \
  --min-count 2 \
  --max-count 20 \
  --enable-managed-identity \
  --enable-oidc-issuer \
  --enable-workload-identity         # Azure Workload Identity (thay pod identity)

# AKS Automatic (2025): fully managed, như GKE Autopilot
az aks create \
  --resource-group myRG \
  --name auto-cluster \
  --sku automatic

# Flux GitOps tích hợp (built-in AKS extension)
az k8s-configuration flux create \
  --resource-group myRG \
  --cluster-name production \
  --cluster-type managedClusters \
  --name gitops-config \
  --namespace flux-system \
  --scope cluster \
  --url https://github.com/myorg/k8s-configs \
  --branch main \
  --kustomization name=apps path=./apps
</code></pre>

<h2>5. Multi-cloud và khi nào tự quản lý</h2>
<pre><code class="language-bash"># Tự quản lý cluster phù hợp khi:
# 1. On-premises / hybrid (không có cloud provider)
# 2. Compliance: data phải ở trong data center riêng
# 3. Cost: workload rất lớn, managed service quá đắt
# 4. Custom requirements: đặc biệt về networking, hardware

# Managed K8s phù hợp khi:
# - Startup đến mid-size company
# - Team nhỏ, không có dedicated K8s ops
# - Time-to-market quan trọng

# Multi-cloud strategy 2026:
# - Một primary cloud (EKS/GKE/AKS) cho production
# - Workload portability qua Helm + GitOps
# - Không vendor lock-in tại application layer
# - Database: managed services per cloud (RDS, Cloud SQL, Azure Database)

# Tools giúp multi-cloud:
# - Cluster API: provision clusters trên nhiều clouds
# - Crossplane: provision cloud resources across clouds
# - ArgoCD/Flux: deploy applications to multiple clusters
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>GKE: K8s version mới nhất nhanh nhất, Autopilot mạnh nhất, TPU support</li>
  <li>EKS: tích hợp AWS ecosystem tốt nhất, IRSA, EKS Auto Mode mới</li>
  <li>AKS: tích hợp Azure AD, Flux built-in, AKS Automatic mode</li>
  <li>Tất cả 3 đều hỗ trợ Cilium eBPF networking 2026</li>
  <li>Autopilot/Automatic modes: không quản lý nodes, phù hợp team nhỏ</li>
  <li>Workload Identity (IRSA/GKE WI/AKS WI): không dùng key files trong cluster</li>
</ul>
