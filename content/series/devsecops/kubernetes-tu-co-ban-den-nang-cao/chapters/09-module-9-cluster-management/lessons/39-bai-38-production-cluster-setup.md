---
id: 019c9618-0606-7000-8000-c1147ba22e16
title: 'BÀI 38: PRODUCTION CLUSTER SETUP'
slug: bai-38-production-cluster-setup
description: >-
  Setup production Kubernetes cluster 2026: kubeadm HA với containerd 2.0, cgroup v2, kube-proxy
  nftables mode, etcd backup, Velero disaster recovery, multi-zone node pools, resource quotas.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 38
section_title: 'Module 9: Cluster Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Hiểu cách thiết lập Kubernetes cluster production-grade năm 2026: High Availability control plane, containerd 2.0, cgroup v2, nftables, etcd backup strategy, và disaster recovery với Velero.</p>

<h2>1. Checklist Production Cluster 2026</h2>
<ul>
  <li><strong>Control plane HA</strong>: 3 hoặc 5 control plane nodes (số lẻ cho etcd quorum)</li>
  <li><strong>Container runtime</strong>: containerd 2.0 + cgroup v2 (systemd driver)</li>
  <li><strong>CNI</strong>: Cilium 1.17+ (eBPF, no kube-proxy mode)</li>
  <li><strong>kube-proxy mode</strong>: nftables (IPVS deprecated 1.35, iptables legacy)</li>
  <li><strong>etcd</strong>: external etcd cluster hoặc stacked, với automated backup</li>
  <li><strong>Node OS</strong>: Ubuntu 24.04 LTS hoặc Flatcar Linux (immutable)</li>
  <li><strong>TLS everywhere</strong>: cert rotation tự động với kubeadm</li>
</ul>

<h2>2. Chuẩn bị Node</h2>
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

<h2>3. Cài containerd 2.0</h2>
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

<h2>4. Cài kubeadm, kubelet, kubectl</h2>
<pre><code class="language-bash"># K8s 1.32+ APT repository
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.32/deb/Release.key | gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.32/deb/ /' > /etc/apt/sources.list.d/kubernetes.list

apt-get update
apt-get install -y kubelet kubeadm kubectl
apt-mark hold kubelet kubeadm kubectl

kubelet --version && kubeadm version && kubectl version --client
</code></pre>

<h2>5. Init Control Plane với kubeadm</h2>
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

<h2>7. etcd Backup Tự Động</h2>
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

<h2>10. Node Pools và Taints</h2>
<pre><code class="language-bash"># Label nodes theo role
kubectl label node worker-1 node-role.kubernetes.io/worker=
kubectl label node gpu-1 accelerator=nvidia-a100
kubectl label node spot-1 node.kubernetes.io/instance-type=spot

# Taint dedicated nodes
kubectl taint nodes gpu-1 dedicated=gpu:NoSchedule
kubectl taint nodes spot-1 cloud.google.com/gke-spot=true:NoSchedule

# WorkloadSelectorPolicy (K8s 1.32+): nodes chỉ nhận workloads phù hợp
# Deployments chọn nodes với tolerations + nodeSelector
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>Control plane HA: 3+ nodes + external load balancer</li>
  <li>containerd 2.0 + cgroup v2 + systemd driver: production standard 2026</li>
  <li>kube-proxy nftables mode: thay thế IPVS/iptables</li>
  <li>Cilium CNI với kubeProxyReplacement: một stack cho networking hoàn chỉnh</li>
  <li>etcd backup tự động + Velero: disaster recovery strategy</li>
  <li>cert rotation: kubeadm certs renew all trước khi expire</li>
</ul>
