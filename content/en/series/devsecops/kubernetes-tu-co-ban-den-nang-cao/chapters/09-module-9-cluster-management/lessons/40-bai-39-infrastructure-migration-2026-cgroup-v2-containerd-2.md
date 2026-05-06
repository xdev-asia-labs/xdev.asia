---
id: 019c9618-0607-7000-8000-c1147ba22e16
title: 'LESSON 39: INFRASTRUCTURE MIGRATION 2026 — CGROUP V2 AND CONTAINERD 2.0'
slug: bai-39-infrastructure-migration-2026-cgroup-v2-containerd-2
description: 'Migration guide 2026: upgrade from cgroup v1 to v2, containerd 1.x to 2.0, docker shim removal, nftables kube-proxy. Detect compatibility issues and rollback strategies.'
duration_minutes: 75
is_free: false
video_url: null
sort_order: 39
section_title: 'Module 9: Cluster Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3184" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3184)"/>

  <!-- Decorations -->
  <g>
    <circle cx="694" cy="212" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="788" cy="186" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="882" cy="160" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="976" cy="134" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="108" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="212" x2="1100" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="242" x2="1050" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1035.38268590218,198.5 1035.38268590218,225.5 1012,239 988.6173140978201,225.5 988.6173140978201,198.5 1012,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Lesson 39</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 39: INFRASTRUCTURE MIGRATION 2026 —</tspan>
      <tspan x="60" dy="42">CGROUP V2 AND CONTAINERD 2.0</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 9: Cluster Management</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Lesson Objective_</h2><p>Understand and implement migration from old infrastructure (cgroup v1, containerd 1.x, iptables) to new stack 2026 (cgroup v2, containerd 2.0, nftables). Detect breaking changes and handle them accordingly.</p>

<h2>1. Why do we need to migrate?</h2>
<p><strong>Timeline deprecation</strong>:</p>
<ul>
  <li><strong>Dockershim</strong>: removed K8s 1.24 (2022) — must use containerd or CRI-O</li>
  <li><strong>cgroup v1</strong>: deprecated Linux kernel 6.x, Ubuntu 24.04 default cgroup v2</li>
  <li><strong>iptables kube-proxy</strong>: deprecated K8s 1.33, removed planned 1.37</li>
  <li><strong>IPVS kube-proxy</strong>: deprecated K8s 1.35</li>
  <li><strong>containerd 1.x</strong>: EOL, containerd 2.0 GA (2025) with many perf improvements</li>
</ul>

<h2>2. Check before migrating</h2>
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

<h2>6. Handling Applications that are not compatible with cgroup v2</h2>
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
</code></pre><h2>Summary</h2>
<ul>
  <li>cgroup v2: Ubuntu 24.04 default, change cgroupDriver to systemd</li>
  <li>containerd 2.0: drain → upgrade → verify → unpack each node</li>
  <li>kube-proxy nftables: patch configmap → restart DaemonSet</li>
  <li>Always have a rollback plan before migrating to production</li>
  <li>K8s upgrade: each minor version, do not skip</li>
  <li>Test on staging cluster before migrating to production</li>
</ul>