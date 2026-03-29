---
id: 019c9617-fb6a-71b8-aea5-33a8de9b9d29
title: 'Bài 4: Chuẩn bị hạ tầng'
slug: bai-4-chuan-bi-ha-tang
description: >-
  Hướng dẫn chi tiết yêu cầu phần cứng, cấu hình network/firewall, setup 3
  VMs/Servers và đồng bộ thời gian cho cluster HA.
duration_minutes: 145
is_free: true
video_url: null
sort_order: 4
section_title: PostgreSQL High Availability với Patroni & etcd
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---
<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Hiểu yêu cầu phần cứng và phần mềm cho Patroni cluster</li><li>Cấu hình network và firewall</li><li>Setup 3 VMs/Servers (VirtualBox/VMware/Cloud)</li><li>Thiết lập SSH key-based authentication</li><li>Đồng bộ thời gian với NTP/chrony</li></ul><h2 id="1-y%C3%AAu-c%E1%BA%A7u-ph%E1%BA%A7n-c%E1%BB%A9ng-ph%E1%BA%A7n-m%E1%BB%81m">1. Yêu cầu phần cứng &amp; phần mềm</h2><h3 id="ki%E1%BA%BFn-tr%C3%BAc-lab">Kiến trúc Lab</h3><p>Chúng ta sẽ setup một cluster gồm 3 nodes:</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="/storage/uploads/2025/11/8c4f56cc-5239-47b9-9716-0552f47ecfdc-1-201-a-c18adfef.jpeg" class="kg-image" alt="" loading="lazy" width="2000" height="1091" sizes="(min-width: 720px) 720px"><figcaption><span style="white-space: pre-wrap;">Kiến trúc Lab</span></figcaption></figure><h3 id="y%C3%AAu-c%E1%BA%A7u-ph%E1%BA%A7n-c%E1%BB%A9ng-m%E1%BB%97i-node">Yêu cầu phần cứng (mỗi node)</h3><p><strong>Minimum (Lab/Dev)</strong>:</p><ul><li><strong>CPU</strong>: 2 cores</li><li><strong>RAM</strong>: 4 GB</li><li><strong>Disk</strong>: 20 GB (OS) + 20 GB (PostgreSQL data)</li><li><strong>Network</strong>: 1 Gbps</li></ul><p><strong>Recommended (Production)</strong>:</p><ul><li><strong>CPU</strong>: 4-8 cores</li><li><strong>RAM</strong>: 8-32 GB (depends on workload)</li><li><strong>Disk</strong>:<ul><li>OS: 50 GB SSD</li><li>PostgreSQL data: 100+ GB NVMe SSD</li><li>WAL: Separate disk (optional, for performance)</li></ul></li><li><strong>Network</strong>: 10 Gbps, redundant NICs</li></ul><p><strong>Storage recommendations</strong>:</p><pre><code>/dev/sda  → OS (Ubuntu 22.04)
/dev/sdb  → PostgreSQL data (/var/lib/postgresql)
/dev/sdc  → WAL files (/var/lib/postgresql/pg_wal) [optional]
</code></pre><h3 id="y%C3%AAu-c%E1%BA%A7u-ph%E1%BA%A7n-m%E1%BB%81m">Yêu cầu phần mềm</h3><p><strong>Operating System</strong>:</p><ul><li>Ubuntu 22.04 LTS (recommended)</li><li>Rocky Linux 9 / AlmaLinux 9</li><li>Debian 12</li></ul><p><strong>Software Stack</strong>:</p><pre><code>Component           Version      Purpose
─────────────────────────────────────────────────
PostgreSQL          18.x  Database
Patroni             3.x          HA orchestration
etcd                3.5.x        DCS
Python              3.9+         Patroni runtime
HAProxy (optional)  2.8+         Load balancer
PgBouncer (optional) 1.21+       Connection pooler
</code></pre><h3 id="network-requirements">Network Requirements</h3><p><strong>Latency</strong>:</p><ul><li>Between PostgreSQL nodes: &lt; 10ms (same datacenter)</li><li>Between etcd nodes: &lt; 5ms (critical!)</li><li>Client to database: &lt; 50ms</li></ul><p><strong>Bandwidth</strong>:</p><ul><li>Replication: Depends on write load</li><li>etcd: Low bandwidth, but low latency critical</li></ul><p><strong>Ports to open</strong>:</p>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Service</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Port</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Protocol</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Purpose</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">PostgreSQL</td><td style="padding: 5px 10px;">5432</td><td style="padding: 5px 10px;">TCP</td><td style="padding: 5px 10px;">Database connections</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Patroni REST API</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">8008</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">TCP</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Health checks, management</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">etcd client</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">2379</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">TCP</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Client-to-etcd communication</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">etcd peer</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">2380</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">TCP</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">etcd cluster communication</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">SSH</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">22</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">TCP</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Remote administration</td></tr></tbody></table>
<!--kg-card-end: html-->
<h2 id="2-c%E1%BA%A5u-h%C3%ACnh-network-v%C3%A0-firewall">2. Cấu hình network và firewall</h2><h3 id="ip-planning">IP Planning</h3><p><strong>Node assignments</strong>:</p><pre><code>Hostname    IP Address    Role
─────────────────────────────────────
pg-node1    10.0.1.11     PostgreSQL + Patroni + etcd
pg-node2    10.0.1.12     PostgreSQL + Patroni + etcd
pg-node3    10.0.1.13     PostgreSQL + Patroni + etcd
</code></pre><p><strong>Optional components</strong>:</p><pre><code>haproxy     10.0.1.10     Load balancer (VIP)
monitoring  10.0.1.20     Prometheus + Grafana
</code></pre><h3 id="hostname-configuration">Hostname Configuration</h3><p><strong>On each node</strong>:</p><pre><code class="language-bash"># Set hostname
sudo hostnamectl set-hostname pg-node1  # Change for each node

# Edit /etc/hosts
sudo tee -a /etc/hosts &lt;&lt; EOF
10.0.1.11   pg-node1
10.0.1.12   pg-node2
10.0.1.13   pg-node3
EOF

# Verify
hostname -f
ping -c 2 pg-node2
ping -c 2 pg-node3
</code></pre><h3 id="firewall-configuration-ufw">Firewall Configuration (UFW)</h3><p><strong>On Ubuntu</strong>:</p><pre><code class="language-bash"># Enable UFW
sudo ufw enable

# Allow SSH
sudo ufw allow 22/tcp

# PostgreSQL
sudo ufw allow from 10.0.1.0/24 to any port 5432

# Patroni REST API
sudo ufw allow from 10.0.1.0/24 to any port 8008

# etcd client port
sudo ufw allow from 10.0.1.0/24 to any port 2379

# etcd peer port
sudo ufw allow from 10.0.1.0/24 to any port 2380

# Verify rules
sudo ufw status numbered
</code></pre><p>Expected output:</p><pre><code>Status: active

     To                         Action      From
     --                         ------      ----
[ 1] 22/tcp                     ALLOW IN    Anywhere
[ 2] 5432                       ALLOW IN    10.0.1.0/24
[ 3] 8008                       ALLOW IN    10.0.1.0/24
[ 4] 2379                       ALLOW IN    10.0.1.0/24
[ 5] 2380                       ALLOW IN    10.0.1.0/24
</code></pre><h3 id="firewall-configuration-firewalld">Firewall Configuration (firewalld)</h3><p><strong>On Rocky Linux / AlmaLinux</strong>:</p><pre><code class="language-bash"># Enable firewalld
sudo systemctl enable --now firewalld

# Add services
sudo firewall-cmd --permanent --add-service=postgresql
sudo firewall-cmd --permanent --add-port=8008/tcp
sudo firewall-cmd --permanent --add-port=2379/tcp
sudo firewall-cmd --permanent --add-port=2380/tcp

# Allow from specific subnet
sudo firewall-cmd --permanent --add-rich-rule='
  rule family="ipv4"
  source address="10.0.1.0/24"
  port protocol="tcp" port="5432" accept'

# Reload
sudo firewall-cmd --reload

# Verify
sudo firewall-cmd --list-all
</code></pre><h3 id="network-performance-testing">Network Performance Testing</h3><p><strong>Test latency between nodes</strong>:</p><pre><code class="language-bash"># Install tools
sudo apt install -y iputils-ping netcat-openbsd iperf3

# Test ping latency
ping -c 10 pg-node2
# Expected: &lt; 1ms same datacenter, &lt; 10ms same region

# Test TCP connectivity
nc -zv pg-node2 5432
nc -zv pg-node2 2379

# Test bandwidth (on receiver node2)
iperf3 -s

# From sender node1
iperf3 -c pg-node2 -t 10
# Expected: &gt; 500 Mbps on 1Gbps network
</code></pre><h2 id="3-setup-3-vmsservers">3. Setup 3 VMs/Servers</h2><h3 id="option-1-virtualbox-local-development">Option 1: VirtualBox (Local Development)</h3><p><strong>Create VM template</strong>:</p><pre><code class="language-bash"># Download Ubuntu 22.04 ISO
wget https://releases.ubuntu.com/22.04/ubuntu-22.04.3-live-server-amd64.iso

# VirtualBox CLI
VBoxManage createvm --name "pg-node1" --ostype Ubuntu_64 --register

VBoxManage modifyvm "pg-node1" \
  --memory 4096 \
  --cpus 2 \
  --nic1 bridged \
  --bridgeadapter1 en0 \
  --boot1 disk

VBoxManage createhd --filename ~/VirtualBox\ VMs/pg-node1/pg-node1.vdi --size 40960

VBoxManage storagectl "pg-node1" --name "SATA Controller" --add sata --controller IntelAHCI
VBoxManage storageattach "pg-node1" --storagectl "SATA Controller" --port 0 --device 0 \
  --type hdd --medium ~/VirtualBox\ VMs/pg-node1/pg-node1.vdi

# Install OS, then clone for other nodes
VBoxManage clonevm "pg-node1" --name "pg-node2" --register
VBoxManage clonevm "pg-node1" --name "pg-node3" --register
</code></pre><p><strong>Configure network</strong>:</p><pre><code class="language-bash"># Edit /etc/netplan/00-installer-config.yaml
network:
  ethernets:
    enp0s3:
      addresses:
        - 10.0.1.11/24
      routes:
        - to: default
          via: 10.0.1.1
      nameservers:
        addresses: [8.8.8.8, 8.8.4.4]
  version: 2

# Apply
sudo netplan apply
</code></pre><h3 id="option-2-vmware-workstation">Option 2: VMware Workstation</h3><p><strong>Create VM</strong>: 1. New Virtual Machine → Custom 2. Hardware compatibility: Workstation 17.x 3. Install from: ISO image (Ubuntu 22.04) 4. Guest OS: Linux → Ubuntu 64-bit 5. VM name: pg-node1 6. Processors: 2 cores 7. Memory: 4096 MB 8. Network: Bridged or NAT with port forwarding 9. Disk: 40 GB, single file 10. Finish and install OS</p><p><strong>Clone for other nodes</strong>:</p><ul><li>Right-click VM → Manage → Clone</li><li>Create linked clone or full clone</li><li>Change VM name and network settings</li></ul><h3 id="post-installation-steps-all-platforms">Post-Installation Steps (All Platforms)</h3><p><strong>Update system</strong>:</p><pre><code class="language-bash"># Ubuntu/Debian
sudo apt update &amp;&amp; sudo apt upgrade -y

# Rocky Linux/AlmaLinux
sudo dnf update -y

# Install essential tools
sudo apt install -y \
  curl \
  wget \
  vim \
  git \
  net-tools \
  htop \
  iotop \
  sysstat \
  build-essential
</code></pre><p><strong>Disable swap</strong>&nbsp;(recommended for databases):</p><pre><code class="language-bash"># Check current swap
free -h

# Disable swap
sudo swapoff -a

# Remove from /etc/fstab
sudo sed -i '/swap/d' /etc/fstab

# Verify
free -h
</code></pre><p><strong>Set system limits</strong>:</p><pre><code class="language-bash"># Edit /etc/security/limits.conf
sudo tee -a /etc/security/limits.conf &lt;&lt; EOF
postgres soft nofile 65536
postgres hard nofile 65536
postgres soft nproc 8192
postgres hard nproc 8192
EOF

# Edit /etc/sysctl.conf
sudo tee -a /etc/sysctl.conf &lt;&lt; EOF
# PostgreSQL optimizations
vm.swappiness = 1
vm.overcommit_memory = 2
vm.dirty_background_ratio = 5
vm.dirty_ratio = 10
net.ipv4.tcp_keepalive_time = 200
net.ipv4.tcp_keepalive_intvl = 200
net.ipv4.tcp_keepalive_probes = 5
EOF

# Apply
sudo sysctl -p
</code></pre><h2 id="4-ssh-key-based-authentication">4. SSH key-based authentication</h2><h3 id="generate-ssh-keys">Generate SSH keys</h3><p><strong>On your local machine/jump server</strong>:</p><pre><code class="language-bash"># Generate SSH key pair
ssh-keygen -t ed25519 -C "patroni-cluster" -f ~/.ssh/patroni_cluster

# Output:
# ~/.ssh/patroni_cluster (private key)
# ~/.ssh/patroni_cluster.pub (public key)

# Set permissions
chmod 600 ~/.ssh/patroni_cluster
chmod 644 ~/.ssh/patroni_cluster.pub
</code></pre><h3 id="copy-keys-to-all-nodes">Copy keys to all nodes</h3><pre><code class="language-bash"># Copy to each node
ssh-copy-id -i ~/.ssh/patroni_cluster.pub ubuntu@10.0.1.11
ssh-copy-id -i ~/.ssh/patroni_cluster.pub ubuntu@10.0.1.12
ssh-copy-id -i ~/.ssh/patroni_cluster.pub ubuntu@10.0.1.13

# Or manually
for node in pg-node1 pg-node2 pg-node3; do
  cat ~/.ssh/patroni_cluster.pub | ssh ubuntu@$node \
    "mkdir -p ~/.ssh &amp;&amp; cat &gt;&gt; ~/.ssh/authorized_keys"
done
</code></pre><h3 id="configure-ssh-client">Configure SSH client</h3><p><strong>Edit ~/.ssh/config</strong>:</p><pre><code class="language-bash">cat &gt;&gt; ~/.ssh/config &lt;&lt; EOF
Host pg-node*
  User ubuntu
  IdentityFile ~/.ssh/patroni_cluster
  StrictHostKeyChecking no
  UserKnownHostsFile /dev/null

Host pg-node1
  HostName 10.0.1.11

Host pg-node2
  HostName 10.0.1.12

Host pg-node3
  HostName 10.0.1.13
EOF

chmod 600 ~/.ssh/config
</code></pre><h3 id="test-ssh-connectivity">Test SSH connectivity</h3><pre><code class="language-bash"># Test password-less SSH
ssh pg-node1 "hostname &amp;&amp; date"
ssh pg-node2 "hostname &amp;&amp; date"
ssh pg-node3 "hostname &amp;&amp; date"

# Should connect without password prompt
</code></pre><h3 id="setup-inter-node-ssh-for-postgres-user">Setup inter-node SSH (for postgres user)</h3><p><strong>On each node</strong>:</p><pre><code class="language-bash"># As postgres user (after PostgreSQL installation)
sudo -u postgres ssh-keygen -t ed25519 -N "" -f /var/lib/postgresql/.ssh/id_ed25519

# Copy public key to other nodes
for node in pg-node1 pg-node2 pg-node3; do
  sudo -u postgres ssh-copy-id -i /var/lib/postgresql/.ssh/id_ed25519.pub postgres@$node
done
</code></pre><h2 id="5-time-synchronization-ntpchrony">5. Time synchronization (NTP/chrony)</h2><h3 id="why-time-sync-is-critical">Why time sync is critical?</h3><p><strong>Importance</strong>:</p><ul><li>Distributed systems rely on consistent time</li><li>etcd uses timestamps for leader election</li><li>PostgreSQL WAL includes timestamps</li><li>Monitoring and debugging requires accurate time</li></ul><p><strong>Acceptable drift</strong>: &lt; 500ms (ideally &lt; 100ms)</p><h3 id="install-and-configure-chrony-recommended">Install and configure chrony (Recommended)</h3><p><strong>Ubuntu/Debian</strong>:</p><pre><code class="language-bash"># Install chrony
sudo apt install -y chrony

# Edit /etc/chrony/chrony.conf
sudo vim /etc/chrony/chrony.conf
</code></pre><p><strong>Configuration</strong>:</p><pre><code class="language-conf"># Use public NTP servers
pool ntp.ubuntu.com iburst maxsources 4
pool 0.ubuntu.pool.ntp.org iburst maxsources 1
pool 1.ubuntu.pool.ntp.org iburst maxsources 1
pool 2.ubuntu.pool.ntp.org iburst maxsources 2

# Or use local NTP server
# server 10.0.1.1 iburst

# Record the rate at which the system clock gains/losses time
driftfile /var/lib/chrony/chrony.drift

# Allow NTP client access from local network
allow 10.0.1.0/24

# Serve time even if not synchronized to a time source
local stratum 10

# Specify directory for log files
logdir /var/log/chrony

# Select which information is logged
log measurements statistics tracking
</code></pre><p><strong>Start and enable</strong>:</p><pre><code class="language-bash"># Start chrony
sudo systemctl enable --now chrony

# Check status
sudo systemctl status chrony

# Verify time synchronization
chronyc sources -v
chronyc tracking
</code></pre><p><strong>Expected output</strong>:</p><pre><code>MS Name/IP address         Stratum Poll Reach LastRx Last sample               
===============================================================================
^* time.cloudflare.com           3   6   377    32   +123us[ +456us] +/-   20ms
^+ ntp.ubuntu.com                2   6   377    33   -234us[ -101us] +/-   15ms
</code></pre><h3 id="alternative-systemd-timesyncd-simpler">Alternative: systemd-timesyncd (Simpler)</h3><p><strong>Ubuntu/Debian</strong>:</p><pre><code class="language-bash"># Install (usually pre-installed)
sudo apt install -y systemd-timesyncd

# Edit /etc/systemd/timesyncd.conf
sudo vim /etc/systemd/timesyncd.conf
</code></pre><p><strong>Configuration</strong>:</p><pre><code class="language-ini">[Time]
NTP=ntp.ubuntu.com 0.ubuntu.pool.ntp.org 1.ubuntu.pool.ntp.org
FallbackNTP=time.cloudflare.com
</code></pre><p><strong>Enable and verify</strong>:</p><pre><code class="language-bash"># Enable
sudo systemctl enable --now systemd-timesyncd

# Check status
timedatectl status
systemctl status systemd-timesyncd

# Should show "System clock synchronized: yes"
</code></pre><h3 id="verify-time-synchronization-across-cluster">Verify time synchronization across cluster</h3><p><strong>Create verification script</strong>:</p><pre><code class="language-bash">#!/bin/bash
# check_time_sync.sh

echo "Checking time synchronization across cluster..."
echo "================================================"

for node in pg-node1 pg-node2 pg-node3; do
  echo -n "$node: "
  ssh $node "date '+%Y-%m-%d %H:%M:%S.%N %Z'"
done

echo ""
echo "Time difference check:"
time1=$(ssh pg-node1 "date +%s%N")
time2=$(ssh pg-node2 "date +%s%N")
time3=$(ssh pg-node3 "date +%s%N")

diff12=$(( (time1 - time2) / 1000000 ))  # Convert to milliseconds
diff13=$(( (time1 - time3) / 1000000 ))
diff23=$(( (time2 - time3) / 1000000 ))

echo "node1 vs node2: ${diff12}ms"
echo "node1 vs node3: ${diff13}ms"
echo "node2 vs node3: ${diff23}ms"

if [ ${diff12#-} -lt 100 ] &amp;&amp; [ ${diff13#-} -lt 100 ] &amp;&amp; [ ${diff23#-} -lt 100 ]; then
  echo "✓ Time synchronization is good (&lt; 100ms)"
else
  echo "✗ WARNING: Time drift detected! Please fix NTP configuration"
fi
</code></pre><pre><code class="language-bash">chmod +x check_time_sync.sh
./check_time_sync.sh
</code></pre><h2 id="6-lab-complete-infrastructure-setup">6. Lab: Complete Infrastructure Setup</h2><h3 id="lab-objectives">Lab Objectives</h3><ul><li>Setup 3 VMs với network đúng</li><li>Configure firewall cho tất cả required ports</li><li>Thiết lập SSH passwordless authentication</li><li>Đồng bộ thời gian với NTP</li><li>Verify connectivity giữa các nodes</li></ul><h3 id="lab-steps">Lab Steps</h3><p><strong>Step 1: Verify VM specifications</strong></p><pre><code class="language-bash"># On each node
ssh pg-node1 "cat /etc/os-release | grep PRETTY_NAME"
ssh pg-node1 "nproc"
ssh pg-node1 "free -h"
ssh pg-node1 "df -h"

# Repeat for node2, node3
</code></pre><p><strong>Step 2: Network connectivity test</strong></p><pre><code class="language-bash"># Create test script
cat &gt; test_connectivity.sh &lt;&lt; 'EOF'
#!/bin/bash

NODES=("pg-node1" "pg-node2" "pg-node3")
PORTS=(22 5432 8008 2379 2380)

for node in "${NODES[@]}"; do
  echo "Testing connectivity to $node..."
  for port in "${PORTS[@]}"; do
    if nc -zv -w 2 $node $port 2&gt;&amp;1 | grep -q succeeded; then
      echo "  ✓ Port $port: OK"
    else
      echo "  ✗ Port $port: FAILED"
    fi
  done
  echo ""
done
EOF

chmod +x test_connectivity.sh
./test_connectivity.sh
</code></pre><p><strong>Step 3: Verify SSH authentication</strong></p><pre><code class="language-bash"># Test SSH without password
for node in pg-node1 pg-node2 pg-node3; do
  echo "Testing SSH to $node..."
  ssh -o BatchMode=yes $node "echo 'SSH OK'" || echo "SSH FAILED"
done
</code></pre><p><strong>Step 4: Check time synchronization</strong></p><pre><code class="language-bash">./check_time_sync.sh
</code></pre><p><strong>Step 5: Run comprehensive validation</strong></p><pre><code class="language-bash">cat &gt; validate_infrastructure.sh &lt;&lt; 'EOF'
#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

NODES=("pg-node1" "pg-node2" "pg-node3")

echo "========================================="
echo "Infrastructure Validation Report"
echo "========================================="
echo ""

for node in "${NODES[@]}"; do
  echo "Checking $node..."
  
  # Hostname
  hostname=$(ssh $node "hostname")
  echo "  Hostname: $hostname"
  
  # IP Address
  ip=$(ssh $node "hostname -I | awk '{print \$1}'")
  echo "  IP: $ip"
  
  # CPU/RAM
  cpu=$(ssh $node "nproc")
  ram=$(ssh $node "free -h | grep Mem | awk '{print \$2}'")
  echo "  CPU: ${cpu} cores, RAM: ${ram}"
  
  # Disk
  disk=$(ssh $node "df -h / | tail -1 | awk '{print \$4}'")
  echo "  Disk free: $disk"
  
  # Firewall
  firewall=$(ssh $node "sudo ufw status | grep Status | awk '{print \$2}'")
  echo "  Firewall: $firewall"
  
  # Time sync
  timesync=$(ssh $node "timedatectl | grep 'System clock synchronized' | awk '{print \$4}'")
  if [ "$timesync" == "yes" ]; then
    echo -e "  Time sync: ${GREEN}✓${NC}"
  else
    echo -e "  Time sync: ${RED}✗${NC}"
  fi
  
  echo ""
done

echo "========================================="
echo "Connectivity Matrix"
echo "========================================="

for src in "${NODES[@]}"; do
  for dst in "${NODES[@]}"; do
    if [ "$src" != "$dst" ]; then
      if ssh $src "ping -c 1 -W 1 $dst" &gt; /dev/null 2&gt;&amp;1; then
        echo -e "$src → $dst: ${GREEN}✓${NC}"
      else
        echo -e "$src → $dst: ${RED}✗${NC}"
      fi
    fi
  done
done

echo ""
echo "========================================="
echo "Validation Complete"
echo "========================================="
EOF

chmod +x validate_infrastructure.sh
./validate_infrastructure.sh
</code></pre><p><strong>Expected output</strong>&nbsp;(all green checkmarks):</p><pre><code>=========================================
Infrastructure Validation Report
=========================================

Checking pg-node1...
  Hostname: pg-node1
  IP: 10.0.1.11
  CPU: 2 cores, RAM: 4.0Gi
  Disk free: 25G
  Firewall: active
  Time sync: ✓

[... similar for node2, node3 ...]

=========================================
Connectivity Matrix
=========================================
pg-node1 → pg-node2: ✓
pg-node1 → pg-node3: ✓
pg-node2 → pg-node1: ✓
pg-node2 → pg-node3: ✓
pg-node3 → pg-node1: ✓
pg-node3 → pg-node2: ✓
</code></pre><h2 id="7-t%E1%BB%95ng-k%E1%BA%BFt">7. Tổng kết</h2><h3 id="checklist-infrastructure">Checklist Infrastructure</h3><p>Trước khi tiếp tục bài 5, đảm bảo:</p><p>✅&nbsp;<strong>3 VMs/Servers</strong>&nbsp;ready với đủ CPU, RAM, disk</p><p>✅&nbsp;<strong>Networking</strong>&nbsp;configured: static IPs, /etc/hosts</p><p>✅&nbsp;<strong>Firewall</strong>&nbsp;rules: ports 22, 5432, 8008, 2379, 2380</p><p>✅&nbsp;<strong>SSH keys</strong>&nbsp;deployed, passwordless authentication works</p><p>✅&nbsp;<strong>Time sync</strong>&nbsp;configured với chrony/timesyncd</p><p>✅&nbsp;<strong>System optimized</strong>: swap disabled, kernel parameters tuned</p><p>✅&nbsp;<strong>Connectivity verified</strong>: all nodes can reach each other</p><h3 id="troubleshooting">Troubleshooting</h3><p><strong>Problem: SSH connection refused</strong></p><pre><code class="language-bash"># Check SSH service
sudo systemctl status sshd

# Check firewall
sudo ufw status | grep 22
</code></pre><p><strong>Problem: Time drift detected</strong></p><pre><code class="language-bash"># Force time sync
sudo chronyc makestep

# Or restart chrony
sudo systemctl restart chrony
</code></pre><p><strong>Problem: Network unreachable</strong></p><pre><code class="language-bash"># Check network interface
ip addr show

# Check routing
ip route show

# Restart networking
sudo systemctl restart systemd-networkd
</code></pre><h3 id="c%C3%A2u-h%E1%BB%8Fi-%C3%B4n-t%E1%BA%ADp">Câu hỏi ôn tập</h3><ol><li>Tại sao cần ít nhất 3 nodes cho Patroni cluster?</li><li>Firewall cần mở những ports nào? Tại sao?</li><li>Tại sao time synchronization quan trọng cho distributed system?</li><li>Swap có nên enable cho PostgreSQL server không? Tại sao?</li><li>Latency giữa các etcd nodes nên là bao nhiêu?</li></ol><h3 id="chu%E1%BA%A9n-b%E1%BB%8B-cho-b%C3%A0i-ti%E1%BA%BFp-theo">Chuẩn bị cho bài tiếp theo</h3><p>Bài 5 sẽ hướng dẫn&nbsp;<strong>cài đặt PostgreSQL</strong>:</p><ul><li>Cài PostgreSQL từ package repository</li><li>Cấu hình postgresql.conf</li><li>Thiết lập pg_hba.conf</li><li>Lab: Cài đặt PostgreSQL trên 3 nodes</li></ul>
