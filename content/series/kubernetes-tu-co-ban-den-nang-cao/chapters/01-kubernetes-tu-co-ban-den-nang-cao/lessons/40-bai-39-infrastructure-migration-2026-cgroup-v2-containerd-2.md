---
id: 019c9618-0607-7000-8000-c1147ba22e16
title: 'BÀI 39: INFRASTRUCTURE MIGRATION 2026 — CGROUP V2 VÀ CONTAINERD 2.0'
slug: bai-39-infrastructure-migration-2026-cgroup-v2-containerd-2
description: >-
  Migration guide 2026: nâng cấp từ cgroup v1 lên v2, containerd 1.x lên 2.0, docker shim removal,
  nftables kube-proxy. Phát hiện vấn đề tương thích và rollback strategy.
duration_minutes: 75
is_free: false
video_url: null
sort_order: 39
section_title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Hiểu và thực hiện migration từ infrastructure cũ (cgroup v1, containerd 1.x, iptables) lên stack mới 2026 (cgroup v2, containerd 2.0, nftables). Phát hiện breaking changes và xử lý tương thích.</p>

<h2>1. Tại sao cần migrate?</h2>
<p><strong>Timeline deprecation</strong>:</p>
<ul>
  <li><strong>Dockershim</strong>: removed K8s 1.24 (2022) — phải dùng containerd hoặc CRI-O</li>
  <li><strong>cgroup v1</strong>: deprecated Linux kernel 6.x, Ubuntu 24.04 mặc định cgroup v2</li>
  <li><strong>iptables kube-proxy</strong>: deprecated K8s 1.33, removed planned 1.37</li>
  <li><strong>IPVS kube-proxy</strong>: deprecated K8s 1.35</li>
  <li><strong>containerd 1.x</strong>: EOL, containerd 2.0 GA (2025) với nhiều perf improvements</li>
</ul>

<h2>2. Kiểm tra trước khi migrate</h2>
<pre><code class="language-bash"># 1. Kiểm tra cgroup version hiện tại
stat -fc %T /sys/fs/cgroup
# cgroup2fs → cgroup v2 (không cần migrate cgroup)
# tmpfs → cgroup v1 (cần migrate)

# 2. Kiểm tra container runtime
kubectl get nodes -o wide
# CONTAINER-RUNTIME cột: containerd://1.7.x hoặc containerd://2.0.x

# 3. Kiểm tra kube-proxy mode
kubectl -n kube-system describe configmap kube-proxy | grep mode
# mode: ""       → iptables (default/legacy)
# mode: ipvs     → IPVS (deprecated)
# mode: nftables → OK 2026

# 4. Kiểm tra kubelet cgroup driver
ssh worker-1 "sudo cat /var/lib/kubelet/config.yaml | grep cgroupDriver"
# cgroupDriver: cgroupfs  → cần đổi sang systemd
# cgroupDriver: systemd   → OK

# 5. Kiểm tra applications có dùng cgroup v1 APIs
# Một số apps dùng /sys/fs/cgroup/cpu/cpu.shares (v1 API)
# cgroup v2 dùng /sys/fs/cgroup/cpu.weight (khác!)
grep -r "cpu\.shares\|memory\.limit_in_bytes" /etc/
</code></pre>

<h2>3. Migration cgroup v1 → v2</h2>
<pre><code class="language-bash"># Ubuntu 24.04 đã mặc định cgroup v2
# Nếu đang dùng Ubuntu 22.04 với cgroup v1:

# Bước 1: Enable cgroup v2 trong GRUB
vi /etc/default/grub
# Thêm vào GRUB_CMDLINE_LINUX:
# systemd.unified_cgroup_hierarchy=1 cgroup_no_v1=all

update-grub
reboot

# Bước 2: Verify sau reboot
stat -fc %T /sys/fs/cgroup
# cgroup2fs ← thành công

# Bước 3: Update containerd config
sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' /etc/containerd/config.toml
systemctl restart containerd

# Bước 4: Update kubelet
# /var/lib/kubelet/config.yaml
cat &lt;&lt;EOF &gt;&gt; /var/lib/kubelet/config.yaml
cgroupDriver: systemd
EOF
systemctl restart kubelet

# Bước 5: Kiểm tra pods running bình thường
kubectl get pods -A | grep -v Running
</code></pre>

<h2>4. Migration containerd 1.x → 2.0</h2>
<pre><code class="language-bash"># Migration từng node (không drain cả cluster cùng lúc)

# Bước 1: Drain node (move pods sang node khác)
kubectl drain worker-1 --ignore-daemonsets --delete-emptydir-data

# Bước 2: Nâng cấp containerd
apt-get update
apt-get install -y containerd.io   # cài phiên bản mới nhất (2.0.x)

# Bước 3: Kiểm tra breaking changes containerd 2.0
# - plugins.cri.containerd.default_runtime_name thay đổi
# - snapshotter: overlayfs là default (thay native)
containerd config default > /tmp/new-config.toml
diff /etc/containerd/config.toml /tmp/new-config.toml

# Bước 4: Merge config thủ công
# Giữ SystemdCgroup = true
# Update sandbox_image nếu cần:
# sandbox_image = "registry.k8s.io/pause:3.10"
vim /etc/containerd/config.toml

# Bước 5: Restart và verify
systemctl restart containerd
containerd --version  # 2.0.x
crictl info | grep -i runtime

# Bước 6: Uncordon node
kubectl uncordon worker-1

# Bước 7: Verify pods
kubectl get pods -A -o wide | grep worker-1
</code></pre>

<h2>5. Migration kube-proxy iptables → nftables</h2>
<pre><code class="language-bash"># Xem kube-proxy hiện tại
kubectl -n kube-system get configmap kube-proxy -o yaml

# Patch kube-proxy configmap
kubectl -n kube-system patch configmap kube-proxy --patch '
data:
  config.conf: |
    apiVersion: kubeproxy.config.k8s.io/v1alpha1
    kind: KubeProxyConfiguration
    mode: nftables
    nftables:
      masqueradeAll: false
      masqueradeBit: 14
      minSyncPeriod: 0s
      syncPeriod: 30s
'

# Restart kube-proxy pods
kubectl -n kube-system rollout restart daemonset/kube-proxy

# Verify
kubectl -n kube-system logs -l k8s-app=kube-proxy | head -20
# "Using nftables Proxier"

# Verify nftables rules được tạo
nft list ruleset | grep k8s | head -20
</code></pre>

<h2>6. Xử lý Applications không tương thích cgroup v2</h2>
<pre><code class="language-bash"># Vấn đề 1: Java JVM cũ (trước JDK 11u336/17u96) không detect cgroup v2
# Fix: Nâng cấp JVM hoặc thêm flags:
# JAVA_TOOL_OPTIONS: "-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0"

# Vấn đề 2: Elasticsearch yêu cầu vm.max_map_count
sysctl -w vm.max_map_count=262144
echo "vm.max_map_count=262144" >> /etc/sysctl.d/k8s.conf

# Vấn đề 3: Redis cần disable THP (Transparent Huge Pages)
cat &lt;&lt;EOF > /etc/systemd/system/disable-thp.service
[Unit]
Description=Disable THP
[Service]
Type=oneshot
ExecStart=/bin/sh -c 'echo never > /sys/kernel/mm/transparent_hugepage/enabled'
[Install]
WantedBy=multi-user.target
EOF
systemctl enable --now disable-thp

# Vấn đề 4: Apps dùng /sys/fs/cgroup/memory/memory.limit_in_bytes (v1 API)
# cgroup v2 path: /sys/fs/cgroup/memory.max
# Fix: sử dụng Downward API để lấy limits từ K8s thay vì đọc cgroup trực tiếp
</code></pre>

<h2>7. Rollback Strategy</h2>
<pre><code class="language-bash"># Nếu migration thất bại — rollback từng bước

# Rollback nftables → iptables
kubectl -n kube-system patch configmap kube-proxy --patch '{"data": {"mode": "iptables"}}'
kubectl -n kube-system rollout restart daemonset/kube-proxy

# Rollback containerd 2.0 → 1.7.x
apt-get install -y containerd.io=1.7.*
systemctl restart containerd
kubectl uncordon [node-name]

# Rollback cgroup v2 → v1
# Edit /etc/default/grub
# Remove: systemd.unified_cgroup_hierarchy=1 cgroup_no_v1=all
update-grub && reboot
</code></pre>

<h2>8. Kubernetes Version Upgrade</h2>
<pre><code class="language-bash"># Upgrade theo từng minor version (không skip version)
# 1.30 → 1.31 → 1.32 (KHÔNG nhảy từ 1.30 → 1.32)

# Bước 1: Upgrade kubeadm trên control plane đầu tiên
apt-get update
apt-get install -y kubeadm=1.32.0-1.1
kubeadm upgrade plan   # check plan

kubeadm upgrade apply v1.32.0

# Bước 2: Upgrade kubelet và kubectl trên control planes
apt-get install -y kubelet=1.32.0-1.1 kubectl=1.32.0-1.1
systemctl daemon-reload && systemctl restart kubelet

# Bước 3: Upgrade worker nodes (drain → upgrade → uncordon)
kubectl drain worker-1 --ignore-daemonsets --delete-emptydir-data
ssh worker-1 "apt-get install -y kubeadm=1.32.0-1.1 && kubeadm upgrade node"
ssh worker-1 "apt-get install -y kubelet=1.32.0-1.1 && systemctl restart kubelet"
kubectl uncordon worker-1

# Verify
kubectl get nodes
kubectl version
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>cgroup v2: Ubuntu 24.04 default, đổi cgroupDriver sang systemd</li>
  <li>containerd 2.0: drain → upgrade → verify → uncordon từng node</li>
  <li>kube-proxy nftables: patch configmap → restart DaemonSet</li>
  <li>Luôn có rollback plan trước khi migrate production</li>
  <li>K8s upgrade: từng minor version, không skip</li>
  <li>Test trên staging cluster trước khi migrate production</li>
</ul>
