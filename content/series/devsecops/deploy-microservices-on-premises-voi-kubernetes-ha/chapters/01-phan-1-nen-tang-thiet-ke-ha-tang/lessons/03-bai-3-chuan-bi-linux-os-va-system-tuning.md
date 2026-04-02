---
id: 019e1a00-aa01-7001-c001-k8sha000103
title: 'BÀI 3: CHUẨN BỊ LINUX OS VÀ SYSTEM TUNING'
slug: bai-3-chuan-bi-linux-os-va-system-tuning
description: >-
  Cài đặt Ubuntu 24.04/RHEL 9, cấu hình kernel parameters cho K8s
  (net.bridge, ip_forward, inotify), tắt swap, cấu hình chrony/NTP,
  firewall rules, SSH hardening và chuẩn bị tất cả nodes trước khi cài K8s.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'Phần 1: Nền tảng & Thiết kế Hạ tầng On-Premises'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Cài đặt và cập nhật Ubuntu 24.04 LTS cho tất cả nodes</li>
<li>✅ Cấu hình kernel parameters bắt buộc cho Kubernetes</li>
<li>✅ Tắt swap vĩnh viễn và hiểu lý do</li>
<li>✅ Thiết lập NTP synchronization cho toàn cluster</li>
<li>✅ Hardening SSH và cấu hình firewall rules</li>
<li>✅ Chuẩn hóa hostname, hosts file và DNS resolution</li>
</ul>

<hr>

<h2 id="phan-1-cai-dat-ubuntu-2404">PHẦN 1: CÀI ĐẶT UBUNTU 24.04 LTS</h2>

<h3 id="11-tai-sao-ubuntu-2404">1.1. Tại sao Ubuntu 24.04 LTS?</h3>
<ul>
<li><strong>LTS (Long Term Support):</strong> 12 năm support (đến 2036 với Ubuntu Pro)</li>
<li><strong>Kernel 6.8+:</strong> Support tốt cho eBPF (Cilium), cgroup v2, io_uring</li>
<li><strong>systemd 255+:</strong> Cải thiện cgroup v2 management</li>
<li><strong>Widespread adoption:</strong> Được test kỹ với K8s, Ceph, và CNCF tools</li>
</ul>

<p>⚠️ <strong>Lưu ý:</strong> RHEL 9 / Rocky Linux 9 cũng là lựa chọn tốt cho enterprise. Hướng dẫn này dùng Ubuntu nhưng sẽ ghi chú RHEL commands khi khác biệt.</p>

<h3 id="12-cai-dat-co-ban">1.2. Cài đặt cơ bản</h3>
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

<h2 id="phan-2-hostname-va-dns">PHẦN 2: HOSTNAME VÀ DNS RESOLUTION</h2>

<h3 id="21-dat-hostname">2.1. Đặt hostname trên mỗi node</h3>
<pre><code class="language-bash"># Trên mỗi node, đặt hostname tương ứng
# master1:
sudo hostnamectl set-hostname master1

# master2:
sudo hostnamectl set-hostname master2

# master3:
sudo hostnamectl set-hostname master3

# worker1-3, storage1-3, lb1-2 tương tự
</code></pre>

<h3 id="22-cau-hinh-hosts-file">2.2. Cấu hình /etc/hosts trên TẤT CẢ nodes</h3>
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
</code></pre>

<p>💡 <strong>Tip:</strong> Trong production, dùng Internal DNS server (CoreDNS hoặc BIND) thay vì /etc/hosts. Bài học này dùng /etc/hosts cho simplicity.</p>

<hr>

<h2 id="phan-3-kernel-parameters">PHẦN 3: KERNEL PARAMETERS CHO KUBERNETES</h2>

<h3 id="31-tai-sao-can-tuy-chinh-kernel">3.1. Tại sao cần tùy chỉnh kernel?</h3>
<p>Kubernetes yêu cầu một số kernel features phải được enable:</p>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Giá trị</th>
<th>Lý do</th>
</tr>
</thead>
<tbody>
<tr>
<td>net.bridge.bridge-nf-call-iptables</td>
<td>1</td>
<td>Bridge traffic qua iptables rules (required cho Service)</td>
</tr>
<tr>
<td>net.bridge.bridge-nf-call-ip6tables</td>
<td>1</td>
<td>IPv6 bridge traffic qua ip6tables</td>
</tr>
<tr>
<td>net.ipv4.ip_forward</td>
<td>1</td>
<td>Forward packets giữa interfaces (pod networking)</td>
</tr>
<tr>
<td>net.ipv6.conf.all.forwarding</td>
<td>1</td>
<td>IPv6 forwarding (nếu dùng dual-stack)</td>
</tr>
<tr>
<td>fs.inotify.max_user_instances</td>
<td>8192</td>
<td>Cho nhiều containers cần inotify (file watching)</td>
</tr>
<tr>
<td>fs.inotify.max_user_watches</td>
<td>524288</td>
<td>Inotify watches per user</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="32-cau-hinh-kernel-parameters">3.2. Cấu hình Kernel Parameters</h3>
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

<h2 id="phan-4-tat-swap">PHẦN 4: TẮT SWAP</h2>

<h3 id="41-tai-sao-phai-tat-swap">4.1. Tại sao phải tắt Swap?</h3>
<p>Kubelet <strong>yêu cầu swap phải tắt</strong> (mặc dù K8s 1.28+ có beta swap support). Lý do:</p>
<ul>
<li>Swap gây <strong>unpredictable latency</strong> cho containers</li>
<li>K8s scheduler tính toán resources dựa trên <strong>physical memory</strong></li>
<li>Swap ẩn <strong>OOM issues</strong>, khiến debugging khó khăn</li>
<li>etcd và databases hoạt động rất kém khi swapping</li>
</ul>

<h3 id="42-tat-swap-vinh-vien">4.2. Tắt Swap vĩnh viễn</h3>
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

<h2 id="phan-5-ntp-time-sync">PHẦN 5: NTP TIME SYNCHRONIZATION</h2>

<h3 id="51-tai-sao-ntp-quan-trong">5.1. Tại sao NTP cực kỳ quan trọng?</h3>
<ul>
<li><strong>etcd:</strong> Sử dụng timestamps cho leader election, yêu cầu clock skew < 500ms</li>
<li><strong>TLS certificates:</strong> Verify dựa trên thời gian, clock sai → cert invalid</li>
<li><strong>Logs correlation:</strong> Log timestamps phải khớp giữa các nodes</li>
<li><strong>Ceph:</strong> MON quorum yêu cầu clock skew < 50ms</li>
</ul>

<h3 id="52-cau-hinh-chrony">5.2. Cấu hình chrony (NTP)</h3>
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

<h2 id="phan-6-ssh-hardening">PHẦN 6: SSH HARDENING</h2>

<h3 id="61-cau-hinh-ssh-an-toan">6.1. Cấu hình SSH an toàn</h3>
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

<h2 id="phan-7-firewall-configuration">PHẦN 7: FIREWALL CONFIGURATION</h2>

<h3 id="71-ufw-cho-control-plane">7.1. UFW cho Control Plane Nodes</h3>
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

<h3 id="72-ufw-cho-worker-nodes">7.2. UFW cho Worker Nodes</h3>
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

<p>💡 <strong>Alternative:</strong> Nhiều production environments dùng nftables hoặc iptables trực tiếp thay vì UFW. Cilium cũng có thể thay thế node-level firewall với Host Policies.</p>

<hr>

<h2 id="phan-8-cac-tuy-chinh-khac">PHẦN 8: CÁC TÙY CHỈNH KHÁC</h2>

<h3 id="81-disable-unattended-upgrades">8.1. Disable Unattended Upgrades (Production)</h3>
<pre><code class="language-bash"># Trong production, tự kiểm soát upgrades
sudo apt remove -y unattended-upgrades
# Hoặc cấu hình chỉ security updates:
# sudo dpkg-reconfigure -plow unattended-upgrades
</code></pre>

<h3 id="82-cau-hinh-ulimits">8.2. Cấu hình ulimits</h3>
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

<h2 id="phan-9-automation-script">PHẦN 9: AUTOMATION — SCRIPT CHUẨN BỊ TẤT CẢ NODES</h2>

<h3 id="91-script-chuan-bi">9.1. Script chuẩn bị node (chạy trên tất cả K8s nodes)</h3>
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

<h3 id="92-chay-script-tren-tat-ca-nodes">9.2. Chạy script trên tất cả nodes</h3>
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

<h2 id="phan-10-verification-checklist">PHẦN 10: VERIFICATION CHECKLIST</h2>

<h3 id="101-checklist-cho-moi-node">10.1. Checklist cho mỗi node</h3>
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
<li><strong>Kernel modules</strong> overlay và br_netfilter là bắt buộc cho K8s pod networking</li>
<li><strong>ip_forward = 1</strong> cho phép pod-to-pod traffic đi qua node</li>
<li><strong>Swap phải tắt</strong> vĩnh viễn — kubelet sẽ refuse start nếu swap on</li>
<li><strong>NTP đồng bộ</strong> là critical cho etcd, TLS certificates, và Ceph</li>
<li><strong>SSH hardening:</strong> chỉ key-based auth, disable password login</li>
<li><strong>Automation script</strong> giúp chuẩn bị tất cả nodes nhất quán</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Chuẩn bị tất cả nodes</h3>
<ul>
<li>Chạy prepare-k8s-node.sh trên tất cả 7 VMs (hoặc servers)</li>
<li>Chạy verify-node.sh trên mỗi node, đảm bảo tất cả checks PASS</li>
<li>Screenshot kết quả verify-node.sh của 1 master và 1 worker</li>
</ul>

<h3 id="bt2">Bài tập 2: Benchmark NTP</h3>
<ul>
<li>Kiểm tra clock offset giữa tất cả nodes: <code>chronyc sources -v</code></li>
<li>Đảm bảo offset < 1ms giữa tất cả nodes</li>
<li>Thử ngắt NTP, đổi giờ, và xem chrony tự đồng bộ lại sau bao lâu</li>
</ul>

<h3 id="bt3">Bài tập 3: RHEL 9 variant</h3>
<ul>
<li>Viết lại prepare-k8s-node.sh cho RHEL 9 / Rocky Linux 9</li>
<li>Thay apt → dnf, ufw → firewalld</li>
<li>Test trên 1 VM để verify</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 4: Load Balancer cho Kubernetes API Server</strong>, chúng ta sẽ cài đặt keepalived + HAProxy để tạo Virtual IP cho K8s API server, đảm bảo HA cho control plane access.</p>
