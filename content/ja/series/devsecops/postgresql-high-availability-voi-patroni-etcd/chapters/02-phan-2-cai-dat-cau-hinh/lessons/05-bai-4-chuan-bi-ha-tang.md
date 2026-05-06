---
id: 019c9617-fb6a-71b8-aea5-33a8de9b9d29
title: 'レッスン 4: インフラストラクチャの準備'
slug: bai-4-chuan-bi-ha-tang
description: ハードウェア要件、ネットワーク/ファイアウォール構成、3 つの VM/サーバーのセットアップ、HA クラスターの時刻同期に関する詳細な手順。
duration_minutes: 145
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 2: インストールと構成'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
---
<h2 id="m%E1%BB%A5c-ti%C3%AAu">目的_</h2><p>このレッスンの後、次のことを学びます:_</p><ul><li>_Patroni クラスターのハードウェア要件とソフトウェア要件を理解する_</li><li>ネットワークとファイアウォールを構成する</li><li>3 つの VM/サーバーをセットアップする(VirtualBox/VMware/クラウド)</li><li>SSH キーベースの認証をセットアップ</li><li>NTP/chrony と時刻を同期</li></ul><h2 id="1-y%C3%AAu-c%E1%BA%A7u-ph%E1%BA%A7n-c%E1%BB%A9ng-ph%E1%BA%A7n-m%E1%BB%81m">1。ハードウェア要件とソフトウェア_</h2><h3 id="ki%E1%BA%BFn-tr%C3%BAc-lab">ラボ アーキテクチャ</h3><p>3 つのノードのクラスターをセットアップします。</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="/storage/uploads/2025/11/8c4f56cc-5239-47b9-9716-0552f47ecfdc-1-201-a-c18adfef.jpeg" class="kg-image" alt="" loading="lazy" width="2000" height="1091" sizes="(min-width: 720px) 720px"><figcaption><span style="white-space: pre-wrap;">アーキテクチャ ラボ</span></figcaption></figure><h3 id="y%C3%AAu-c%E1%BA%A7u-ph%E1%BA%A7n-c%E1%BB%A9ng-m%E1%BB%97i-node">ハードウェア要件 (ごとノード)</h3><p><strong>最小値 (ラボ/開発)</strong>:</p><ul><li><strong>CPU</strong>: 2 コア_</li><li><strong>RAM</strong>_: 4 GB</li><li><strong>ディスク</strong>: 20 GB (OS) + 20 GB (PostgreSQL データ)</li><li><strong>ネットワーク</strong>: 1 Gbps</li></ul><p><strong>推奨(実稼働)</strong>:</p><ul><li><strong>CPU</strong>: 4 ～ 8 コア</li><li><strong>RAM</strong>: 8 ～ 32 GB (環境によって異なります)ワークロード)_</li><li><strong>ディスク</strong>:<ul><li>OS: 50 GB SSD</li><li>PostgreSQL データ: 100+ GB NVMe SSD</li><li>WAL: 別個のディスク (オプション、パフォーマンス)</li></ul></li><li><strong>ネットワーク_</strong>: 10 Gbps、冗長 NIC_</li></ul><p><strong>ストレージ推奨事項</strong>:</p><pre><code>/dev/sda  → OS (Ubuntu 22.04)
/dev/sdb  → PostgreSQL data (/var/lib/postgresql)
/dev/sdc  → WAL files (/var/lib/postgresql/pg_wal) [optional]
</code></pre><h3 id="y%C3%AAu-c%E1%BA%A7u-ph%E1%BA%A7n-m%E1%BB%81m">ソフトウェア要件</h3><p><strong>オペレーティング システム</strong>:</p><ul><li>Ubuntu 22.04 LTS (推奨)_</li><li>Rocky Linux 9 / AlmaLinux 9</li><li>Debian 12_</li></ul><p><strong>ソフトウェアスタック</strong>:_</p><pre><code>Component           Version      Purpose
─────────────────────────────────────────────────
PostgreSQL          18.x  Database
Patroni             3.x          HA orchestration
etcd                3.5.x        DCS
Python              3.9+         Patroni runtime
HAProxy (optional)  2.8+         Load balancer
PgBouncer (optional) 1.21+       Connection pooler
</code></pre><h3 id="network-requirements">ネットワーク要件</h3><p><strong>レイテンシー</strong>:</p><ul><li>PostgreSQL ノード間: &lt; 10 ミリ秒 (同じデータセンター)</li><li>etcd ノード間: &lt; 5 ミリ秒 (重要!)_</li><li>クライアントからデータベースまで: <; 50ms_</li></ul><p><strong>帯域幅</strong>:_</p><ul><li>レプリケーション:書き込み負荷に依存</li><li>etcd:低帯域幅ですが低遅延重要_</li></ul><p><strong>開くポート</strong>:</p>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">サービス</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_ポート</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">プロトコル_</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">目的</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">PostgreSQL</td><td style="padding: 5px 10px;">5432_</td><td style="padding: 5px 10px;">TCP_</td><td style="padding: 5px 10px;">データベース接続_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Patroni REST API</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">8008_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">TCP_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ヘルスチェック、管理_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">etcd クライアント</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">2379</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">TCP</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">クライアントから etcd通信</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">etcdピア</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">2380</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">TCP</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">etcdクラスタ通信</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">SSH</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">22_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">TCP</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">リモート管理</td></tr></tbody></table>
<!--kg-card-end: html-->
<h2 id="2-c%E1%BA%A5u-h%C3%ACnh-network-v%C3%A0-firewall">2.ネットワークとファイアウォールの構成</h2><h3 id="ip-planning">IP 計画</h3><p><strong>ノードの割り当て_</strong>:_</p><pre><code>Hostname    IP Address    Role
─────────────────────────────────────
pg-node1    10.0.1.11     PostgreSQL + Patroni + etcd
pg-node2    10.0.1.12     PostgreSQL + Patroni + etcd
pg-node3    10.0.1.13     PostgreSQL + Patroni + etcd
</code></pre><p><strong>オプションコンポーネント</strong>:</p><pre><code>haproxy     10.0.1.10     Load balancer (VIP)
monitoring  10.0.1.20     Prometheus + Grafana
</code></pre><h3 id="hostname-configuration">ホスト名の構成</h3><p><strong>各ノード</strong>:</p><pre><code class="language-bash"># Set hostname
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
</code></pre><h3 id="firewall-configuration-ufw">ファイアウォール構成(UFW)</h3><p><strong>Ubuntu 上</strong>:</p><pre><code class="language-bash"># Enable UFW
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
</code></pre><p>期待される出力:</p><pre><code>Status: active

     To                         Action      From
     --                         ------      ----
[ 1] 22/tcp                     ALLOW IN    Anywhere
[ 2] 5432                       ALLOW IN    10.0.1.0/24
[ 3] 8008                       ALLOW IN    10.0.1.0/24
[ 4] 2379                       ALLOW IN    10.0.1.0/24
[ 5] 2380                       ALLOW IN    10.0.1.0/24
</code></pre><h3 id="firewall-configuration-firewalld">ファイアウォール構成(ファイアウォール)</h3><p><strong>Rocky Linux / AlmaLinux 上</strong>:</p><pre><code class="language-bash"># Enable firewalld
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
</code></pre><h3 id="network-performance-testing">ネットワーク パフォーマンス テスト</h3><p><strong>間のレイテンシをテストするノード_</strong>:</p><pre><code class="language-bash"># Install tools
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
</code></pre><h2 id="3-setup-3-vmsservers">3。 3 つの VM/サーバーのセットアップ</h2><h3 id="option-1-virtualbox-local-development">オプション 1: VirtualBox (ローカル開発)</h3><p><strong>VM テンプレートの作成</strong>:</p><pre><code class="language-bash"># Download Ubuntu 22.04 ISO
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
</code></pre><p><strong>構成network</strong>:_</p><pre><code class="language-bash"># Edit /etc/netplan/00-installer-config.yaml
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
</code></pre><h3 id="option-2-vmware-workstation">オプション 2: VMware Workstation</h3><p><strong>VM</strong> の作成___: 1. 新しい仮想マシン → カスタム 2. ハードウェア互換性: Workstation 17.x 3. インストール元: ISO イメージ(Ubuntu 22.04) 4. ゲスト OS: Linux → Ubuntu 64 ビット 5. VM 名: pg-node1 6. プロセッサ: 2 コア 7. メモリ: 4096 MB 8. ネットワーク: ポート転送を備えたブリッジまたは NAT 9. ディスク: 40 GB、単一ファイル 10. 完了してインストールOS</p><p><strong>他のノードのクローン</strong>:</p><ul><li>VMを右クリック→「管理」→「クローン」</li><li>リンククローンまたは完全を作成クローン_</li><li>VM 名とネットワーク設定の変更</li></ul><h3 id="post-installation-steps-all-platforms">インストール後の手順 (すべてのプラットフォーム)</h3><p><strong>更新システム_</strong>:</p><pre><code class="language-bash"># Ubuntu/Debian
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
</code></pre><p><strong>Diセーブル スワップ</strong>&nbsp;(データベースに推奨):</p><pre><code class="language-bash"># Check current swap
free -h

# Disable swap
sudo swapoff -a

# Remove from /etc/fstab
sudo sed -i '/swap/d' /etc/fstab

# Verify
free -h
</code></pre><p><strong>システム制限を設定</strong>:</p><pre><code class="language-bash"># Edit /etc/security/limits.conf
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
</code></pre><h2 id="4-ssh-key-based-authentication">4。 SSH キーベースの認証_</h2><h3 id="generate-ssh-keys">SSH キーの生成</h3><p><strong>ローカルマシン/ジャンプサーバー上</strong>:</p><pre><code class="language-bash"># Generate SSH key pair
ssh-keygen -t ed25519 -C "patroni-cluster" -f ~/.ssh/patroni_cluster

# Output:
# ~/.ssh/patroni_cluster (private key)
# ~/.ssh/patroni_cluster.pub (public key)

# Set permissions
chmod 600 ~/.ssh/patroni_cluster
chmod 644 ~/.ssh/patroni_cluster.pub
</code></pre><h3 id="copy-keys-to-all-nodes">キーをすべてにコピーノード</h3><pre><code class="language-bash"># Copy to each node
ssh-copy-id -i ~/.ssh/patroni_cluster.pub ubuntu@10.0.1.11
ssh-copy-id -i ~/.ssh/patroni_cluster.pub ubuntu@10.0.1.12
ssh-copy-id -i ~/.ssh/patroni_cluster.pub ubuntu@10.0.1.13

# Or manually
for node in pg-node1 pg-node2 pg-node3; do
  cat ~/.ssh/patroni_cluster.pub | ssh ubuntu@$node \
    "mkdir -p ~/.ssh &amp;&amp; cat &gt;&gt; ~/.ssh/authorized_keys"
done
</code></pre><h3 id="configure-ssh-client">SSH クライアントの構成</h3><p><strong>ユーザーに関する編集</h3><p><strong>各ノードノード_</strong>:</p><pre><code class="language-bash"># As postgres user (after PostgreSQL installation)
sudo -u postgres ssh-keygen -t ed25519 -N "" -f /var/lib/postgresql/.ssh/id_ed25519

# Copy public key to other nodes
for node in pg-node1 pg-node2 pg-node3; do
  sudo -u postgres ssh-copy-id -i /var/lib/postgresql/.ssh/id_ed25519.pub postgres@$node
done
</code></pre><h2 id="5-time-synchronization-ntpchrony">5。時刻同期 (NTP/chrony)</h2><h3 id="why-time-sync-is-critical">時刻同期が重要な理由</h3><p><strong>重要</strong>:</p><ul><li>分散システムは一貫したシステムに依存します。時間_</li><li>_etcd はリーダーの選出にタイムスタンプを使用_</li><li>PostgreSQL WAL にはタイムスタンプが含まれます_</li><li>監視とデバッグには正確な時間が必要_</li></ul><p><strong>_許容可能ドリフト</strong>: &lt; 500 ミリ秒 (理想的には 100 ミリ秒未満)</p><h3 id="install-and-configure-chrony-recommended">chrony のインストールと構成 (推奨)</h3><p><strong>Ubuntu/Debian</strong>:</p><pre><code class="language-bash"># Install chrony
sudo apt install -y chrony

# Edit /etc/chrony/chrony.conf
sudo vim /etc/chrony/chrony.conf
</code></pre>___H TMLTAG_335___<strong>構成</strong>:</p><pre><code class="language-conf"># Use public NTP servers
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
</code></pre><p><strong>開始して有効化_</strong>:</p><pre><code class="language-bash"># Start chrony
sudo systemctl enable --now chrony

# Check status
sudo systemctl status chrony

# Verify time synchronization
chronyc sources -v
chronyc tracking
</code></pre><p><strong>予想通り出力_</strong>:</p><pre><code>MS Name/IP address         Stratum Poll Reach LastRx Last sample               
===============================================================================
^* time.cloudflare.com           3   6   377    32   +123us[ +456us] +/-   20ms
^+ ntp.ubuntu.com                2   6   377    33   -234us[ -101us] +/-   15ms
</code></pre><h3 id="alternative-systemd-timesyncd-simpler">代替: systemd-timesyncd (より単純な)</h3><p><strong>Ubuntu/Debian</strong>:_</p><pre><code class="language-bash"># Install (usually pre-installed)
sudo apt install -y systemd-timesyncd

# Edit /etc/systemd/timesyncd.conf
sudo vim /etc/systemd/timesyncd.conf
</code></pre>___HTML TAG_353___<strong>構成</strong>:</p><pre><code class="language-ini">[Time]
NTP=ntp.ubuntu.com 0.ubuntu.pool.ntp.org 1.ubuntu.pool.ntp.org
FallbackNTP=time.cloudflare.com
</code></pre><p><strong>有効にして確認</strong>:</p><pre><code class="language-bash"># Enable
sudo systemctl enable --now systemd-timesyncd

# Check status
timedatectl status
systemctl status systemd-timesyncd

# Should show "System clock synchronized: yes"
</code></pre><h3 id="verify-time-synchronization-across-cluster">全体の時刻同期を確認するクラスター_</h3><p><strong>検証スクリプトを作成</strong>:</p><pre><code class="language-bash">#!/bin/bash
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
</code></pre><h2 id="6-lab-complete-infrastructure-setup">6。ラボ: インフラストラクチャの完全なセットアップ_</h2><h3 id="lab-objectives">ラボの目的_</h3><ul><li>_正しいネットワークを使用して 3 つの VM をセットアップ</li><li>_必要なすべてのポートのファイアウォールを構成</li><li>パスワードなしの SSH をセットアップする認証_</li><li>NTP と時刻を同期する___</li><li>ノード間の接続を確認する_</li></ul><h3 id="lab-steps">ラボのステップ</h3><p><strong>ステップ 1: VM を確認する仕様_</strong></p><pre><code class="language-bash"># On each node
ssh pg-node1 "cat /etc/os-release | grep PRETTY_NAME"
ssh pg-node1 "nproc"
ssh pg-node1 "free -h"
ssh pg-node1 "df -h"

# Repeat for node2, node3
</code></pre><p><strong>ステップ 2: ネットワーク接続テスト</strong>___HTMLTAG_392__CODEBLOCK_29___<p><strong>ステップ 3: SSH 認証の確認</strong></p><pre><code class="language-bash"># Test SSH without password
for node in pg-node1 pg-node2 pg-node3; do
  echo "Testing SSH to $node..."
  ssh -o BatchMode=yes $node "echo 'SSH OK'" || echo "SSH FAILED"
done
</code></pre><p><strong>ステップ 4: 時刻同期の確認</strong></p><pre><code class="language-bash">./check_time_sync.sh
</code></pre><p><strong>ステップ 5: 包括的な実行検証_</strong></p><pre><code class="language-bash">cat &gt; validate_infrastructure.sh &lt;&lt; 'EOF'
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
</code></pre><p><strong>_期待される出力_</strong>_&nbsp;(すべて緑色のチェックマーク):</p><pre><code>=========================================
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
</code></pre><h2 id="7-t%E1%BB%95ng-k%E1%BA%BFt">7。概要</h2><h3 id="checklist-infrastructure">チェックリスト インフラストラクチャ</h3><p>レッスン 5 に進む前に、</p><p>✅&nbsp;<strong>3 台の VM/サーバー</strong>&nbsp;十分な CPU、RAM、ディスク</p><p>✅&nbsp;<strong>ネットワーク</strong>&nbsp;構成: 静的 IP、 /etc/hosts</p><p>✅&nbsp;<strong>ファイアウォール</strong>&nbsp;ルール: ポート 22、5432、8008、2379、 2380_</p><p>✅&nbsp;<strong>SSH キー</strong>&nbsp;導入済み、パスワードなしの認証は機能</p><p>✅&nbsp;<strong>時間sync</strong>&nbsp;chrony/timesyncd で構成</p><p>✅&nbsp;<strong>システム最適化</strong>: スワップ無効、カーネルパラメータ調整済み</p><p>✅&nbsp;<strong>接続が確認されました</strong>: すべてのノードが相互に接続可能</p><h3 id="troubleshooting">トラブルシューティング</h3><p><strong>問題: SSH 接続拒否_</strong></p><pre><code class="language-bash"># Check SSH service
sudo systemctl status sshd

# Check firewall
sudo ufw status | grep 22
</code></pre><p><strong>_問題: タイムドリフトが検出されました_</strong></p><pre><code class="language-bash"># Force time sync
sudo chronyc makestep

# Or restart chrony
sudo systemctl restart chrony
</code></pre><p><strong>問題: ネットワーク到達不能_</strong></p><pre><code class="language-bash"># Check network interface
ip addr show

# Check routing
ip route show

# Restart networking
sudo systemctl restart systemd-networkd
</code></pre><h3 id="c%C3%A2u-h%E1%BB%8Fi-%C3%B4n-t%E1%BA%ADp">確認質問_</h3><ol><li>Patroni クラスターに少なくとも 3 つのノードが必要なのはなぜですか?</li><li>_ファイアウォールが必要ですどのポートを開きますか?その理由は何ですか?_</li><li>分散システムにとって時刻同期が重要なのはなぜですか?</li><li>PostgreSQL サーバーに対してスワップを有効にする必要がありますか?その理由は何ですか?_</li><li>etcd ノード間のレイテンシはどれくらいにすべきですか?</li></ol><h3 id="chu%E1%BA%A9n-b%E1%BB%8B-cho-b%C3%A0i-ti%E1%BA%BFp-theo">次のレッスンの準備_</h3><p>レッスン 5 で手順を説明します&nbsp;<strong>インストールPostgreSQL</strong>:</p><ul><li>パッケージ リポジトリから PostgreSQL をインストール_</li><li>構成 postgresql.conf</li><li>セットアップpg_hba.conf_</li><li>ラボ: 3 つのノードに PostgreSQL をインストール_</li></ul>