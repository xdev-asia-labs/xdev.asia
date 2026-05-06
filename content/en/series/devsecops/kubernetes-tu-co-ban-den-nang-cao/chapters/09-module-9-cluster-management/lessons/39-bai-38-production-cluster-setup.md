---
id: 019c9618-0606-7000-8000-c1147ba22e16
title: 'LESSON 38: PRODUCTION CLUSTER SETUP'
slug: bai-38-production-cluster-setup
description: 'Setup production Kubernetes cluster 2026: kubeadm HA with containerd 2.0, cgroup v2, kube-proxy nftables mode, etcd backup, Velero disaster recovery, multi-zone node pools, resource quotas.'
duration_minutes: 90
is_free: false
video_url: null
sort_order: 38
section_title: 'Module 9: Cluster Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-693" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-693)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1093" cy="269" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="1086" cy="262" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1079" cy="255" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1072" cy="248" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="1065" cy="241" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="239" x2="1100" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="269" x2="1050" y2="339" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="968.444863728671,122 968.444863728671,156 939,173 909.555136271329,156 909.555136271329,122.00000000000001 939,105" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Lesson 38</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 38: PRODUCTION CLUSTER SETUP__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 9: Cluster Management</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Lesson Objective</h2><p>Understand how to set up a production-grade Kubernetes cluster in 2026: High Availability control plane, containerd 2.0, cgroup v2, nftables, etcd backup strategy, and disaster recovery with Velero.</p>

<h2>1. Checklist Production Cluster 2026</h2>
<ul>
  <li><strong>Control plane HA</strong>: 3 or 5 control plane nodes (odd number for etcd quorum)</li>
  <li><strong>Container runtime</strong>: containerd 2.0 + cgroup v2 (systemd driver)</li>
  <li><strong>CNI</strong>: Cilium 1.17+ (eBPF, no kube-proxy mode)</li>
  <li><strong>kube-proxy mode</strong>: nftables (IPVS deprecated 1.35, iptables legacy)</li>
  <li><strong>etcd</strong>: external etcd cluster or stacked, with automated backup</li>
  <li><strong>OS Node</strong>: Ubuntu 24.04 LTS or Flatcar Linux (immutable)</li>
  <li><strong>TLS everywhere</strong>: automatic cert rotation with kubeadm</li>
</ul>

<h2>2. Prepare Node</h2>
<pre><code class="language-bash"># Ubuntu 24.04 — chạy trên tất cả nodes
# Disable swap (bắt buộc với K8s)
swapoff -a
sed -i '/swap/d' /etc/fstab

# Enable required kernel modules
cat &lt;&lt;EOF | tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF
modprobe overlay
modprobe br_netfilter

# Sysctl settings
cat &lt;&lt;EOF | tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
fs.inotify.max_user_watches         = 524288
fs.inotify.max_user_instances       = 512
EOF
sysctl --system

# Verify cgroup v2
stat -fc %T /sys/fs/cgroup
# output: cgroup2fs  ← cgroup v2 OK
# Nếu là tmpfs → cần enable cgroup v2 trong kernel boot params
</code></pre>

<h2>3. Install containerd 2.0</h2>
<pre><code class="language-bash"># Cài containerd 2.0 (released 2025)
apt-get install -y apt-transport-https ca-certificates curl gnupg
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu noble stable" > /etc/apt/sources.list.d/docker.list
apt-get update && apt-get install -y containerd.io

# Config containerd với systemd cgroup driver
mkdir -p /etc/containerd
containerd config default | tee /etc/containerd/config.toml

# Enable systemd cgroup (BẮT BUỘC với cgroup v2)
sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' /etc/containerd/config.toml
# Verify sandbox image mới nhất
grep sandbox_image /etc/containerd/config.toml
# sandbox_image = "registry.k8s.io/pause:3.10"

systemctl restart containerd
systemctl enable containerd

# Verify containerd 2.0
containerd --version
# containerd containerd.io 2.0.x
ctr version
</code></pre>

<h2>4. Install kubeadm, kubelet, kubectl</h2>
<pre><code class="language-bash"># K8s 1.32+ APT repository
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.32/deb/Release.key | gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.32/deb/ /' > /etc/apt/sources.list.d/kubernetes.list

apt-get update
apt-get install -y kubelet kubeadm kubectl
apt-mark hold kubelet kubeadm kubectl

kubelet --version && kubeadm version && kubectl version --client
</code></pre>

<h2>5. Init Control Plane with kubeadm</h2>
<pre><code class="language-yaml"># kubeadm-config.yaml
apiVersion: kubeadm.k8s.io/v1beta4
kind: ClusterConfiguration
kubernetesVersion: "1.32.0"
controlPlaneEndpoint: "k8s-api.example.com:6443"   # Load Balancer endpoint
networking:
  podSubnet: "10.0.0.0/16"     # Cilium pod CIDR
  serviceSubnet: "10.96.0.0/12"
etcd:
  local:
    dataDir: /var/lib/etcd
    # extraArgs để tuning etcd
    extraArgs:
      auto-compaction-retention: "8"
      quota-backend-bytes: "8589934592"   # 8Gi
apiServer:
  extraArgs:
    audit-log-path: /var/log/kubernetes/audit.log
    audit-log-maxage: "30"
    audit-log-maxbackup: "10"
    audit-log-maxsize: "100"
    event-ttl: "8h"
controllerManager:
  extraArgs:
    node-cidr-mask-size: "24"
---
apiVersion: kubeadm.k8s.io/v1beta4
kind: InitConfiguration
nodeRegistration:
  criSocket: unix:///var/run/containerd/containerd.sock
  kubeletExtraArgs:
    cgroup-driver: systemd
---
# Kube-proxy nftables mode (K8s 1.32+)
apiVersion: kubeproxy.config.k8s.io/v1alpha1
kind: KubeProxyConfiguration
mode: nftables    # mới nhất, thay IPVS/iptables
nftables:
  masqueradeAll: false
  masqueradeBit: 14
  minSyncPeriod: 0s
  syncPeriod: 30s
---
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
cgroupDriver: systemd
serverTLSBootstrap: true   # tự động cấp cert cho kubelet
</code></pre>
<pre><code class="language-bash"># Init cluster (chạy trên control plane đầu tiên)
kubeadm init --config kubeadm-config.yaml --upload-certs

# Output quan trọng:
# kubeadm join k8s-api.example.com:6443 --token xxx \
#   --discovery-token-ca-cert-hash sha256:xxx \
#   --control-plane --certificate-key xxx   ← join control plane
#
# kubeadm join k8s-api.example.com:6443 --token xxx \
#   --discovery-token-ca-cert-hash sha256:xxx        ← join worker

# Setup kubectl
mkdir -p $HOME/.kube
cp /etc/kubernetes/admin.conf $HOME/.kube/config

# Cài Cilium CNI (thay vì flannel/calico)
helm repo add cilium https://helm.cilium.io/
helm install cilium cilium/cilium \
  --namespace kube-system \
  --set kubeProxyReplacement=true \    # Cilium thay kube-proxy hoàn toàn
  --set k8sServiceHost=k8s-api.example.com \
  --set k8sServicePort=6443

kubectl get nodes
# NAME              STATUS   ROLES           AGE
# control-plane-1   Ready    control-plane   2m
</code></pre>

<h2>6. Join Control Plane Nodes (HA)</h2>
<pre><code class="language-bash"># Chạy trên control-plane-2 và control-plane-3
kubeadm join k8s-api.example.com:6443 \
  --token [TOKEN] \
  --discovery-token-ca-cert-hash sha256:[HASH] \
  --control-plane \
  --certificate-key [CERT_KEY]

# Join worker nodes
kubeadm join k8s-api.example.com:6443 \
  --token [TOKEN] \
  --discovery-token-ca-cert-hash sha256:[HASH]

# Verify cluster
kubectl get nodes -o wide
kubectl get pods -n kube-system
</code></pre>

<h2>7. etcd Automatic Backup</h2>
<pre><code class="language-bash"># Snapshot etcd thủ công
ETCDCTL_API=3 etcdctl snapshot save /backup/etcd-$(date +%Y%m%d-%H%M%S).db \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key

# Verify snapshot
ETCDCTL_API=3 etcdctl snapshot status /backup/etcd-latest.db --write-out=table

# CronJob backup hàng ngày (tạo pod trên control plane)
cat &lt;&lt;'EOF' > /etc/cron.daily/etcd-backup
#!/bin/bash
BACKUP_DIR=/backup/etcd
mkdir -p $BACKUP_DIR
ETCDCTL_API=3 etcdctl snapshot save $BACKUP_DIR/etcd-$(date +%Y%m%d-%H%M%S).db \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key

# Giữ 7 ngày
find $BACKUP_DIR -name "*.db" -mtime +7 -delete

# Upload lên S3
aws s3 cp $BACKUP_DIR/ s3://my-cluster-backup/etcd/ --recursive
EOF
chmod +x /etc/cron.daily/etcd-backup
</code></pre>

<h2>8. Velero — Disaster Recovery</h2>
<pre><code class="language-bash"># Cài Velero CLI
curl -L https://github.com/vmware-tanzu/velero/releases/latest/download/velero-linux-amd64.tar.gz | tar xz
mv velero-*/velero /usr/local/bin/

# Cài Velero với AWS S3 backend
velero install \
  --provider aws \
  --plugins velero/velero-plugin-for-aws:latest \
  --bucket my-velero-backups \
  --secret-file ./credentials-velero \
  --backup-location-config region=ap-southeast-1 \
  --snapshot-location-config region=ap-southeast-1 \
  --use-node-agent    # cho PV backup với restic/kopia

# Tạo scheduled backup hàng ngày
velero schedule create daily-backup \
  --schedule="0 2 * * *" \
  --ttl 168h    # giữ 7 ngày

# Backup thủ công
velero backup create cluster-backup-$(date +%Y%m%d) \
  --include-namespaces production,staging

# Restore từ backup
velero restore create --from-backup cluster-backup-20260130

# Xem backup status
velero backup describe cluster-backup-20260130
velero backup logs cluster-backup-20260130
</code></pre>

<h2>9. Certificate Management</h2>
<pre><code class="language-bash"># Xem expiry của tất cả certs
kubeadm certs check-expiration

# Output:
# CERTIFICATE                EXPIRES                  RESIDUAL TIME
# admin.conf                 Mar 30, 2027 09:00 UTC   364d
# apiserver                  Mar 30, 2027 09:00 UTC   364d
# etcd-healthcheck-client    Mar 30, 2027 09:00 UTC   364d

# Renew tất cả certs (cần làm trước khi expire)
kubeadm certs renew all

# Restart control plane components sau khi renew
systemctl restart kubelet
# Hoặc kill static pods
crictl pods | grep -E "(kube-apiserver|kube-controller|kube-scheduler|etcd)" | awk '{print $1}' | xargs crictl stopp
</code></pre>

<h2>10. Node Pools and Taints</h2>
<pre><code class="language-bash"># Label nodes theo role
kubectl label node worker-1 node-role.kubernetes.io/worker=
kubectl label node gpu-1 accelerator=nvidia-a100
kubectl label node spot-1 node.kubernetes.io/instance-type=spot

# Taint dedicated nodes
kubectl taint nodes gpu-1 dedicated=gpu:NoSchedule
kubectl taint nodes spot-1 cloud.google.com/gke-spot=true:NoSchedule

# WorkloadSelectorPolicy (K8s 1.32+): nodes chỉ nhận workloads phù hợp
# Deployments chọn nodes với tolerations + nodeSelector
</code></pre><h2>Summary</h2>
<ul>
  <li>Control plane HA: 3+ nodes + external load balancer</li>
  <li>containerd 2.0 + cgroup v2 + systemd driver: production standard 2026</li>
  <li>kube-proxy nftables mode: replace IPVS/iptables</li>
  <li>Cilium CNI with kubeProxyReplacement: a complete networking stack</li>
  <li>etcd automatic backup + Velero: disaster recovery strategy__HTMLTAG_131___
  <li>cert rotation: kubeadm certs renew all before expire</li>
</ul>