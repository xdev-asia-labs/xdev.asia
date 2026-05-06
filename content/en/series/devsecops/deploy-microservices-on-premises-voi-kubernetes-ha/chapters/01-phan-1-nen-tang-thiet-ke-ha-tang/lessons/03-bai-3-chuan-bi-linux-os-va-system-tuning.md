---
id: 019e1a00-aa01-7001-c001-k8sha000103
title: 'LESSON 3: PREPARING LINUX OS AND SYSTEM TUNING'
slug: bai-3-chuan-bi-linux-os-va-system-tuning
description: Install Ubuntu 24.04/RHEL 9, configure kernel parameters for K8s (net.bridge, ip_forward, inotify), turn off swap, configure chrony/NTP, firewall rules, SSH hardening and prepare all nodes before installing K8s.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 1: On-Premises Platform & Infrastructure Design'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-77" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-77)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1048" cy="254" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="996" cy="242" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="944" cy="230" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="892" cy="218" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="840" cy="206" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="154" x2="1100" y2="234" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="184" x2="1050" y2="254" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1029.1147367097487,189.5 1029.1147367097487,218.5 1004,233 978.8852632902513,218.5 978.8852632902513,189.5 1004,175" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 3: PREPARING LINUX OS AND SYSTEM TUNING</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Platform &amp; On-Premises Infrastructure Design</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_66___
<p>After completing this lesson, you will:</p>
<ul>
<li>✅ Install and update Ubuntu 24.04 LTS for all nodes</li>
<li>✅ Configure required kernel parameters for Kubernetes</li>
<li>✅ Turn off swap permanently and understand why</li>
<li>✅ Set up NTP synchronization for the entire cluster__HTMLTAG_77___
<li>✅ Hardening SSH and configuring firewall rules</li>
<li>✅ Standardize hostname, hosts file and DNS resolution</li>
</ul>

<hr>

<h2 id="phan-1-cai-dat-ubuntu-2404">PART 1: INSTALL UBUNTU 24.04 LTS</h2>

<h3 id="11-tai-sao-ubuntu-2404">1.1. Why Ubuntu 24.04 LTS?</h3>
<ul>
<li><strong>LTS (Long Term Support):</strong> 12 years support (until 2036 with Ubuntu Pro)</li>
<li><strong>Kernel 6.8+:</strong> Good support for eBPF (Cilium), cgroup v2, io_uring</li>
<li><strong>systemd 255+:</strong> Improve cgroup v2 management</li>
<li><strong>Widespread adoption:</strong> Thoroughly tested with K8s, Ceph, and CNCF tools</li>
</ul>

<p>⚠️ <strong>Note:</strong> RHEL 9 / Rocky Linux 9 is also a good choice for enterprises. This guide uses Ubuntu but will note RHEL commands when different.</p>

<h3 id="12-cai-dat-co-ban">1.2. Basic settings</h3>
<pre><code class="language-bash"># Ubuntu Server 24.04 minimal installation
# Chọn options:
#   - Minimal server (không GUI)
#   - OpenSSH server
#   - Disk layout: LVM (theo Bài 2)
#   - Timezone: Asia/Ho_Chi_Minh (hoặc UTC)

# Sau khi cài xong, update hệ thống
sudo apt update && sudo apt upgrade -y

# Cài đặt essential packages
sudo apt install -y \
  curl \
  wget \
  gnupg \
  apt-transport-https \
  ca-certificates \
  software-properties-common \
  net-tools \
  ipvsadm \
  ipset \
  jq \
  bash-completion \
  vim \
  htop \
  iotop \
  sysstat \
  lsof \
  tcpdump \
  conntrack \
  socat \
  nfs-common \
  open-iscsi \
  lvm2 \
  tree

# RHEL 9 equivalent:
# sudo dnf update -y
# sudo dnf install -y curl wget ...
</code></pre>

<hr>

<h2 id="phan-2-hostname-va-dns">PART 2: HOSTNAME AND DNS RESOLUTION__HTMLTAG_114___

<h3 id="21-dat-hostname">2.1. Set hostname on each node</h3>
<pre><code class="language-bash"># Trên mỗi node, đặt hostname tương ứng
# master1:
sudo hostnamectl set-hostname master1

# master2:
sudo hostnamectl set-hostname master2

# master3:
sudo hostnamectl set-hostname master3

# worker1-3, storage1-3, lb1-2 tương tự
</code></pre>

<h3 id="22-cau-hinh-hosts-file">2.2. Configure /etc/hosts on ALL nodes</h3>
<pre><code class="language-bash">cat >> /etc/hosts << 'EOF'

# K8s HA Cluster - Management Network
192.168.10.9    lb1
192.168.10.10   lb2
192.168.10.11   master1
192.168.10.12   master2
192.168.10.13   master3
192.168.10.21   worker1
192.168.10.22   worker2
192.168.10.23   worker3
192.168.10.31   storage1
192.168.10.32   storage2
192.168.10.33   storage3

# K8s API Server VIP (Cluster Network)
10.10.20.100    k8s-api.local

EOF
</code></pre><p>💡 <strong>Tip:</strong> In production, use Internal DNS server (CoreDNS or BIND) instead of /etc/hosts. This lesson uses /etc/hosts for simplicity.</p>

<hr>

<h2 id="phan-3-kernel-parameters">PART 3: KERNEL PARAMETERS FOR KUBERNETES</h2>

<h3 id="31-tai-sao-can-tuy-chinh-kernel">3.1. Why is it necessary to customize the kernel?</h3>
<p>Kubernetes requires some kernel features to be enabled:</p>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Value</th>
<th>Reason</th>
</tr>
</thead>
<tbody>
<tr>
<td>net.bridge.bridge-nf-call-iptables__HTMLTAG_145___
<td>1</td>
<td>Bridge traffic via iptables rules (required for Service)</td>
</tr>
<tr>
<td>net.bridge.bridge-nf-call-ip6tables</td>
<td>1</td>
<td>IPv6 bridge traffic via ip6tables__HTMLTAG_157___
</tr>
<tr>
<td>net.ipv4.ip_forward</td>
<td>1</td>
<td>Forward packets between interfaces (pod networking)</td>
</tr>
<tr>
<td>net.ipv6.conf.all.forwarding</td>
<td>1</td>
<td>IPv6 forwarding (if using dual-stack)</td>
</tr>
<tr>
<td>fs.inotify.max_user_instances</td>
<td>8192</td>
<td>For many containers need inotify (file watching)</td>
</tr>
<tr>
<td>fs.inotify.max_user_watches</td>
<td>524288</td>
<td>Inotify watches per user</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="32-cau-hinh-kernel-parameters">3.2. Configure Kernel Parameters</h3>
<pre><code class="language-bash"># Load required kernel modules
cat > /etc/modules-load.d/k8s.conf << 'EOF'
overlay
br_netfilter
ip_vs
ip_vs_rr
ip_vs_wrr
ip_vs_sh
nf_conntrack
EOF

# Load modules ngay lập tức
modprobe overlay
modprobe br_netfilter
modprobe ip_vs
modprobe ip_vs_rr
modprobe ip_vs_wrr
modprobe ip_vs_sh
modprobe nf_conntrack

# Verify modules loaded
lsmod | grep -E "overlay|br_netfilter|ip_vs"
</code></pre>

<pre><code class="language-bash"># Cấu hình sysctl parameters
cat > /etc/sysctl.d/99-kubernetes.conf << 'EOF'
# ─── Required cho Kubernetes ───
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
net.ipv6.conf.all.forwarding        = 1

# ─── Performance tuning ───
# Tăng conntrack table cho nhiều connections
net.netfilter.nf_conntrack_max = 1048576

# Tăng số file descriptors
fs.file-max = 2097152
fs.nr_open  = 1048576

# inotify cho containers
fs.inotify.max_user_instances = 8192
fs.inotify.max_user_watches   = 524288

# ─── Network performance ───
# Tăng socket buffer sizes
net.core.somaxconn             = 65535
net.core.netdev_max_backlog    = 65535
net.ipv4.tcp_max_syn_backlog   = 65535

# TCP keepalive (cho long-lived connections)
net.ipv4.tcp_keepalive_time    = 600
net.ipv4.tcp_keepalive_intvl   = 30
net.ipv4.tcp_keepalive_probes  = 10

# Tăng port range
net.ipv4.ip_local_port_range   = 1024 65535

# ─── Memory management ───
vm.max_map_count     = 262144    # Required cho Elasticsearch/Kafka
vm.swappiness        = 0         # Minimize swap usage
vm.overcommit_memory = 1         # Allow memory overcommit (Redis)

# ─── Ceph OSD tuning (chỉ cần trên storage nodes) ───
# kernel.pid_max = 4194304
# vm.min_free_kbytes = 1048576
EOF

# Apply ngay lập tức
sysctl --system

# Verify
sysctl net.bridge.bridge-nf-call-iptables
# Output: net.bridge.bridge-nf-call-iptables = 1

sysctl net.ipv4.ip_forward
# Output: net.ipv4.ip_forward = 1
</code></pre>

<hr>

<h2 id="phan-4-tat-swap">PART 4: TURN OFF SWAP</h2>

<h3 id="41-tai-sao-phai-tat-swap">4.1. Why must Swap be turned off?</h3>
<p>Kubelet <strong>requires swap to be disabled__HTMLTAG_203___ (although K8s 1.28+ has beta swap support). Reason:</p>
<ul>
<li>Swap causes <strong>unpredictable latency</strong> for containers</li>
<li>K8s scheduler calculates resources based on <strong>physical memory</strong></li>
<li>Swap hidden <strong>OOM issues</strong>, making debugging difficult</li>
<li>etcd and databases perform very poorly when swapping__HTMLTAG_219___
</ul>

<h3 id="42-tat-swap-vinh-vien">4.2. Turn off Swap permanently</h3>
<pre><code class="language-bash"># Tắt swap ngay lập tức
sudo swapoff -a

# Tắt vĩnh viễn: comment dòng swap trong /etc/fstab
sudo sed -i '/ swap / s/^/#/' /etc/fstab

# Verify
free -h | grep Swap
# Output:
# Swap:            0B          0B          0B

# Double verify - không có swap partitions
cat /proc/swaps
# Output: (empty)

# Nếu dùng swap file:
sudo rm -f /swap.img  # Xóa swap file nếu có
</code></pre>

<hr>

<h2 id="phan-5-ntp-time-sync">PART 5: NTP TIME SYNCHRONIZATION</h2><h3 id="51-tai-sao-ntp-quan-trong">5.1. Why is NTP extremely important?</h3>
<ul>
<li><strong>etcd:</strong> Use timestamps for leader election, requires clock skew < 500ms</li>
<li><strong>TLS certificates:</strong> Verify based on time, wrong clock → cert invalid</li>
<li><strong>Logs correlation:</strong> Log timestamps must match between nodes</li>
<li><strong>Ceph:</strong> MON quorum request clock skew < 50ms</li>
</ul>

<h3 id="52-cau-hinh-chrony">5.2. Chrony configuration (NTP)</h3>
<pre><code class="language-bash"># Cài đặt chrony (thay thế ntpd, tiêu chuẩn cho RHEL/Ubuntu mới)
sudo apt install -y chrony

# Cấu hình chrony
cat > /etc/chrony/chrony.conf << 'EOF'
# NTP servers - dùng pool gần nhất
pool ntp.ubuntu.com iburst maxsources 4
pool time.google.com iburst maxsources 2
pool time.cloudflare.com iburst maxsources 2

# Fallback: GPS hoặc internal NTP server
# server ntp.internal.company.com iburst prefer

# Record rate of clock drift
driftfile /var/lib/chrony/chrony.drift

# Allow NTP client access from cluster network
allow 192.168.10.0/24
allow 10.10.20.0/24

# Step clock nếu offset > 1 giây trong 3 updates đầu
makestep 1.0 3

# Enable hardware timestamping nếu NIC support
# hwtimestamp *

# Enable kernel synchronization
rtcsync

# Log
logdir /var/log/chrony
EOF

# Restart chrony
sudo systemctl restart chrony
sudo systemctl enable chrony

# Verify synchronization
chronyc sources -v
# Output:
# ^* ntp.ubuntu.com    2   6    17    64   +0.153ms   0.421ms   0.312ms

chronyc tracking
# Output:
# Reference ID    : A29FC801 (time.google.com)
# Stratum         : 2
# System time     : 0.000000023 seconds fast of NTP time

# Kiểm tra trên tất cả nodes: clock skew < 1ms
for host in master{1..3} worker{1..3} storage{1..3}; do
  echo -n "$host: "
  ssh $host "chronyc tracking | grep 'System time'"
done
</code></pre>

<hr>

<h2 id="phan-6-ssh-hardening">PART 6: SSH HARDENING</h2>

<h3 id="61-cau-hinh-ssh-an-toan">6.1. Secure SSH configuration</h3>
<pre><code class="language-bash"># Backup cấu hình gốc
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak

# Tạo cấu hình SSH hardened
cat > /etc/ssh/sshd_config.d/99-hardening.conf << 'EOF'
# ─── Authentication ───
PermitRootLogin prohibit-password    # Chỉ cho SSH key, không password
PasswordAuthentication no             # Tắt password authentication
PubkeyAuthentication yes              # Chỉ dùng SSH keys
AuthenticationMethods publickey       # Enforce public key only

# ─── Security ───
MaxAuthTries 3                        # Max 3 lần thử
MaxSessions 10                        # Max 10 sessions/connection
LoginGraceTime 30                     # 30s timeout cho login
ClientAliveInterval 300               # Gửi keepalive mỗi 5 phút
ClientAliveCountMax 3                 # Disconnect sau 3 lần không reply
PermitEmptyPasswords no
X11Forwarding no                      # Không cần X11
AllowTcpForwarding yes                # Cần cho kubectl port-forward
AllowAgentForwarding yes

# ─── Ciphers (strong only) ───
Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com
MACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com
KexAlgorithms sntrup761x25519-sha512@openssh.com,curve25519-sha256@libssh.org

# ─── Access control ───
AllowUsers root admin deploy          # Chỉ cho phép users cụ thể
# AllowGroups k8s-admins              # Hoặc theo group
EOF

# Validate config trước khi apply
sudo sshd -t
# Output: (no errors)

# Apply
sudo systemctl restart sshd
</code></pre>

<h3 id="62-setup-ssh-key-auth">6.2. Setup SSH Key Authentication</h3>
<pre><code class="language-bash"># Trên workstation/jump host:
# Tạo dedicated key cho K8s cluster (đã làm ở Bài 1)
ssh-keygen -t ed25519 -C "k8s-admin@company.com" -f ~/.ssh/k8s-admin

# Copy sang tất cả nodes
for host in lb{1,2} master{1..3} worker{1..3} storage{1..3}; do
  ssh-copy-id -i ~/.ssh/k8s-admin.pub root@${host}
done

# Test kết nối không cần password
ssh -i ~/.ssh/k8s-admin root@master1 "hostname && date"
</code></pre>

<hr>

<h2 id="phan-7-firewall-configuration">PART 7: FIREWALL CONFIGURATION</h2>

<h3 id="71-ufw-cho-control-plane">7.1. UFW for Control Plane Nodes</h3>
<pre><code class="language-bash"># Trên master1, master2, master3:

# Reset firewall
sudo ufw --force reset
sudo ufw default deny incoming
sudo ufw default allow outgoing

# SSH
sudo ufw allow from 192.168.10.0/24 to any port 22 proto tcp comment 'SSH from mgmt'

# K8s API Server
sudo ufw allow 6443/tcp comment 'K8s API Server'

# etcd
sudo ufw allow from 10.10.20.0/24 to any port 2379:2380 proto tcp comment 'etcd'

# kubelet API
sudo ufw allow 10250/tcp comment 'kubelet API'

# kube-scheduler, kube-controller-manager
sudo ufw allow 10259/tcp comment 'kube-scheduler'
sudo ufw allow 10257/tcp comment 'kube-controller-manager'

# Cilium
sudo ufw allow 4240/tcp comment 'Cilium health'
sudo ufw allow 4244/tcp comment 'Hubble'
sudo ufw allow 8472/udp comment 'Cilium VXLAN'

# VRRP (keepalived) - nếu LB trên cùng node
sudo ufw allow proto vrrp from 10.10.20.0/24 comment 'keepalived VRRP'

# Enable
sudo ufw enable
sudo ufw status verbose
</code></pre>

<h3 id="72-ufw-cho-worker-nodes">7.2. UFW for Worker Nodes</h3>
<pre><code class="language-bash"># Trên worker1, worker2, worker3:
sudo ufw --force reset
sudo ufw default deny incoming
sudo ufw default allow outgoing

# SSH
sudo ufw allow from 192.168.10.0/24 to any port 22 proto tcp

# kubelet API
sudo ufw allow 10250/tcp

# NodePort range
sudo ufw allow 30000:32767/tcp comment 'K8s NodePort'

# Cilium
sudo ufw allow 4240/tcp
sudo ufw allow 4244/tcp
sudo ufw allow 8472/udp

# Ceph client (nếu converged mode)
sudo ufw allow from 10.10.20.0/24 to any port 6789 proto tcp comment 'Ceph MON'
sudo ufw allow from 10.10.20.0/24 to any port 6800:7300 proto tcp comment 'Ceph OSD'

sudo ufw enable
</code></pre>

<p>💡 <strong>Alternative:</strong> Many production environments use nftables or iptables directly instead of UFW. Cilium can also replace node-level firewalls with Host Policies.</p>

<hr>

<h2 id="phan-8-cac-tuy-chinh-khac">PART 8: OTHER CUSTOMIZATIONS</h2>

<h3 id="81-disable-unattended-upgrades">8.1. Disable Unattended Upgrades (Production)</h3>
<pre><code class="language-bash"># Trong production, tự kiểm soát upgrades
sudo apt remove -y unattended-upgrades
# Hoặc cấu hình chỉ security updates:
# sudo dpkg-reconfigure -plow unattended-upgrades
</code></pre>

<h3 id="82-cau-hinh-ulimits">8.2. Configure ulimits</h3>
<pre><code class="language-bash"># Tăng limits cho tất cả users/processes
cat >> /etc/security/limits.conf << 'EOF'
*       soft    nofile      1048576
*       hard    nofile      1048576
*       soft    nproc       65535
*       hard    nproc       65535
*       soft    memlock     unlimited
*       hard    memlock     unlimited
EOF

# Đảm bảo PAM đọc limits.conf
grep -q 'pam_limits.so' /etc/pam.d/common-session || \
  echo "session required pam_limits.so" >> /etc/pam.d/common-session
</code></pre>

<h3 id="83-disable-transparent-hugepages">8.3. Disable Transparent Huge Pages</h3>
<pre><code class="language-bash"># THP gây latency spikes cho databases (PostgreSQL, Redis)
cat > /etc/systemd/system/disable-thp.service << 'EOF'
[Unit]
Description=Disable Transparent Huge Pages
DefaultDependencies=no
After=sysinit.target local-fs.target
Before=basic.target

[Service]
Type=oneshot
ExecStart=/bin/sh -c 'echo never > /sys/kernel/mm/transparent_hugepage/enabled'
ExecStart=/bin/sh -c 'echo never > /sys/kernel/mm/transparent_hugepage/defrag'

[Install]
WantedBy=basic.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable --now disable-thp.service

# Verify
cat /sys/kernel/mm/transparent_hugepage/enabled
# Output: always madvise [never]
</code></pre>

<h3 id="84-cgroup-v2-verification">8.4. cgroup v2 Verification</h3>
<pre><code class="language-bash"># Ubuntu 24.04 mặc định dùng cgroup v2
# Verify:
stat -fc %T /sys/fs/cgroup/
# Output: cgroup2fs  ← cgroup v2 ✅
# Nếu output là tmpfs → cgroup v1, cần migrate

# Nếu cần force enable cgroup v2:
# sudo sed -i 's/GRUB_CMDLINE_LINUX=""/GRUB_CMDLINE_LINUX="systemd.unified_cgroup_hierarchy=1"/' /etc/default/grub
# sudo update-grub && sudo reboot
</code></pre>

<hr>

<h2 id="phan-9-automation-script">PART 9: AUTOMATION — SCRIPT PREPARING ALL NODES</h2>

<h3 id="91-script-chuan-bi">9.1. Node preparation script (runs on all K8s nodes)</h3>
<pre><code class="language-bash">#!/bin/bash
# prepare-k8s-node.sh
# Chạy script này trên tất cả nodes (masters + workers)
set -euo pipefail

echo "=== [1/8] Updating system ==="
apt update && apt upgrade -y

echo "=== [2/8] Installing packages ==="
apt install -y curl wget gnupg apt-transport-https ca-certificates \
  software-properties-common net-tools ipvsadm ipset jq bash-completion \
  vim htop iotop sysstat lsof tcpdump conntrack socat nfs-common \
  open-iscsi lvm2 chrony tree

echo "=== [3/8] Loading kernel modules ==="
cat > /etc/modules-load.d/k8s.conf << 'MODULES'
overlay
br_netfilter
ip_vs
ip_vs_rr
ip_vs_wrr
ip_vs_sh
nf_conntrack
MODULES

modprobe overlay
modprobe br_netfilter
modprobe ip_vs ip_vs_rr ip_vs_wrr ip_vs_sh
modprobe nf_conntrack

echo "=== [4/8] Configuring sysctl ==="
cat > /etc/sysctl.d/99-kubernetes.conf << 'SYSCTL'
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
net.netfilter.nf_conntrack_max      = 1048576
fs.file-max                          = 2097152
fs.inotify.max_user_instances        = 8192
fs.inotify.max_user_watches          = 524288
net.core.somaxconn                   = 65535
net.ipv4.tcp_keepalive_time          = 600
net.ipv4.ip_local_port_range         = 1024 65535
vm.max_map_count                     = 262144
vm.swappiness                        = 0
SYSCTL
sysctl --system

echo "=== [5/8] Disabling swap ==="
swapoff -a
sed -i '/ swap / s/^/#/' /etc/fstab

echo "=== [6/8] Configuring chrony NTP ==="
systemctl enable --now chrony

echo "=== [7/8] Disabling THP ==="
echo never > /sys/kernel/mm/transparent_hugepage/enabled
echo never > /sys/kernel/mm/transparent_hugepage/defrag

echo "=== [8/8] Verifying ==="
echo "--- Swap status ---"
free -h | grep Swap
echo "--- cgroup version ---"
stat -fc %T /sys/fs/cgroup/
echo "--- Kernel modules ---"
lsmod | grep -E "overlay|br_netfilter|ip_vs" | awk '{print $1}'
echo "--- Key sysctl values ---"
sysctl net.bridge.bridge-nf-call-iptables net.ipv4.ip_forward vm.swappiness

echo ""
echo "✅ Node preparation complete! Ready for containerd + kubeadm installation."
</code></pre>

<h3 id="92-chay-script-tren-tat-ca-nodes">9.2. Run script on all nodes</h3>
<pre><code class="language-bash"># Từ workstation, distribute và chạy:
for host in master{1..3} worker{1..3} storage{1..3}; do
  echo "=== Preparing $host ==="
  scp prepare-k8s-node.sh root@${host}:/tmp/
  ssh root@${host} "bash /tmp/prepare-k8s-node.sh"
  echo "=== $host DONE ==="
  echo ""
done
</code></pre>

<hr>

<h2 id="phan-10-verification-checklist">PART 10: VERIFICATION CHECKLIST</h2>

<h3 id="101-checklist-cho-moi-node">10.1. Checklist for each node</h3>
<pre><code class="language-bash">#!/bin/bash
# verify-node.sh - Chạy trên mỗi node để verify
echo "=== Node: $(hostname) ==="

# 1. OS version
echo -n "OS: "; cat /etc/os-release | grep PRETTY_NAME | cut -d'"' -f2

# 2. Kernel version
echo -n "Kernel: "; uname -r

# 3. cgroup v2
echo -n "cgroup: "; stat -fc %T /sys/fs/cgroup/

# 4. Swap
SWAP=$(free -m | grep Swap | awk '{print $2}')
if [ "$SWAP" -eq 0 ]; then
  echo "Swap: ✅ Disabled"
else
  echo "Swap: ❌ Still enabled ($SWAP MB)"
fi

# 5. ip_forward
FWD=$(sysctl -n net.ipv4.ip_forward)
echo "ip_forward: $([ "$FWD" == "1" ] && echo "✅" || echo "❌") ($FWD)"

# 6. br_netfilter
BNF=$(sysctl -n net.bridge.bridge-nf-call-iptables 2>/dev/null)
echo "bridge-nf-call: $([ "$BNF" == "1" ] && echo "✅" || echo "❌") ($BNF)"

# 7. NTP sync
SYNC=$(chronyc tracking 2>/dev/null | grep "Leap status" | awk '{print $4}')
echo "NTP: $([ "$SYNC" == "Normal" ] && echo "✅" || echo "⚠️") ($SYNC)"

# 8. Connectivity
for target in master{1..3} worker{1..3}; do
  if ping -c 1 -W 1 $target &>/dev/null; then
    echo "Ping $target: ✅"
  else
    echo "Ping $target: ❌"
  fi
done
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Kernel modules</strong> overlay and br_netfilter are required for K8s pod networking</li>
<li><strong>ip_forward = 1</strong> allows pod-to-pod traffic to pass through node</li>
<li><strong>Swap must turn off</strong> permanently — kubelet will refuse to start if swap on</li>
<li><strong>NTP synchronous</strong> is critical for etcd, TLS certificates, and Ceph</li>
<li><strong>SSH hardening:</strong> key-based auth only, disable password login</li>
<li><strong>Automation script</strong> helps prepare all nodes consistently</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISES</h2><h3 id="bt1">Exercise 1: Prepare all nodes</h3>
<ul>
<li>Run prepare-k8s-node.sh on all 7 VMs (or servers)</li>
<li>Run verify-node.sh on each node, ensuring all checks PASS</li>
<li>Screenshot of verify-node.sh results of 1 master and 1 worker</li>
</ul>

<h3 id="bt2">Exercise 2: Benchmark NTP</h3>
<ul>
<li>Check clock offset between all nodes: <code>chronyc sources -v</code></li>
<li>Ensure offset < 1ms giữa tất cả nodes</li>
<li>Try interrupting NTP, change the time, and see how long it takes for chrony to re-synchronize</li>
</ul>

<h3 id="bt3">Exercise 3: RHEL 9 variant__HTMLTAG_344___
<ul>
<li>Rewrite prepare-k8s-node.sh for RHEL 9 / Rocky Linux 9</li>
<li>Replace apt → dnf, ufw → firewalld</li>
<li>Test on 1 VM to verify</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 4: Load Balancer for Kubernetes API Server</strong>, we will install keepalived + HAProxy to create Virtual IP for K8s API server, ensuring HA for control plane access.</p>