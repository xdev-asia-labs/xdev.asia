---
id: 019c9617-fb74-7100-9272-7839bac3bdac
title: 'Bài 7: Cài đặt Patroni'
slug: bai-7-cai-dat-patroni
description: >-
  Cài đặt Python dependencies, setup Patroni qua pip, phân tích cấu trúc
  patroni.yml và tạo systemd service trên 3 nodes.
duration_minutes: 165
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Cài đặt & Cấu hình"
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3503" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3503)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1014" cy="112" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="928" cy="226" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="842" cy="80" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="756" cy="194" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="670" cy="48" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="172" x2="1100" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="202" x2="1050" y2="272" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1045.38268590218,208.5 1045.38268590218,235.5 1022,249 998.6173140978201,235.5 998.6173140978201,208.5 1022,195" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Bài 7</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 7: Cài đặt Patroni</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability với Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Cài đặt &amp; Cấu hình</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Cài đặt Python và các dependencies cần thiết</li><li>Cài đặt Patroni qua pip</li><li>Hiểu cấu trúc file&nbsp;<code>patroni.yml</code></li><li>Tạo systemd service cho Patroni</li><li>Cài đặt Patroni trên 3 nodes</li></ul><h2 id="1-gi%E1%BB%9Bi-thi%E1%BB%87u">1. Giới thiệu</h2><p>Patroni là một Python application, do đó cần Python runtime và các dependencies. Trong bài này, chúng ta sẽ:</p><ol><li>Cài đặt Python 3 và pip</li><li>Cài đặt Patroni package</li><li>Cấu hình Patroni</li><li>Tạo systemd service để quản lý Patroni daemon</li></ol><p><strong>Kiến trúc mục tiêu</strong>:</p><pre><code class="language-text">┌──────────────────────────────────┐
│      etcd Cluster (3 nodes)      │
│         ✅ RUNNING                │
└──────────────────────────────────┘
         │        │        │
    ┌────┴────┐  │  ┌─────┴─────┐
    ▼         ▼  ▼  ▼           ▼
┌─────────┐ ┌─────────┐ ┌─────────┐
│Patroni 1│ │Patroni 2│ │Patroni 3│ ← Installing now
│  + PG   │ │  + PG   │ │  + PG   │
└─────────┘ └─────────┘ └─────────┘
</code></pre><h2 id="2-c%C3%A0i-%C4%91%E1%BA%B7t-python-dependencies">2. Cài đặt Python Dependencies</h2><h3 id="21-c%C3%A0i-%C4%91%E1%BA%B7t-python-tr%C3%AAn-ubuntudebian">2.1. Cài đặt Python trên Ubuntu/Debian</h3><p>Thực hiện trên&nbsp;<strong>TẤT CẢ 3 nodes</strong>.</p><h4 id="b%C6%B0%E1%BB%9Bc-1-c%C3%A0i-%C4%91%E1%BA%B7t-python-3-v%C3%A0-pip">Bước 1: Cài đặt Python 3 và pip</h4><pre><code class="language-bash"># Update package list
sudo apt update

# Cài Python 3, pip, và development tools
sudo apt install -y python3 python3-pip python3-dev python3-venv

# Kiểm tra version
python3 --version
# Output: Python 3.10.x (hoặc 3.11.x hoặc 3.12.x)

pip3 --version
# Output: pip 22.x.x
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-2-c%C3%A0i-%C4%91%E1%BA%B7t-system-dependencies">Bước 2: Cài đặt system dependencies</h4><pre><code class="language-bash"># Cài các libraries cần thiết cho Patroni và PostgreSQL Python modules
sudo apt install -y \
  libpq-dev \
  gcc \
  python3-psycopg2

# libpq-dev: PostgreSQL client library headers
# gcc: Compiler cho building Python packages
# python3-psycopg2: PostgreSQL adapter cho Python
</code></pre><h3 id="22-c%C3%A0i-%C4%91%E1%BA%B7t-python-tr%C3%AAn-centosrhel">2.2. Cài đặt Python trên CentOS/RHEL</h3><pre><code class="language-bash"># Python 3 thường đã có sẵn, nhưng cần pip và dev tools
sudo dnf install -y python3 python3-pip python3-devel

# System dependencies
sudo dnf install -y \
  postgresql18-devel \
  gcc \
  python3-psycopg2

# Kiểm tra
python3 --version
pip3 --version
</code></pre><h3 id="23-upgrade-pip-khuy%E1%BA%BFn-ngh%E1%BB%8B">2.3. Upgrade pip (khuyến nghị)</h3><pre><code class="language-bash"># Upgrade pip to latest version
sudo pip3 install --upgrade pip

# Verify
pip3 --version
</code></pre><h2 id="3-c%C3%A0i-%C4%91%E1%BA%B7t-patroni-qua-pip">3. Cài đặt Patroni qua pip</h2><h3 id="31-c%C3%A0i-%C4%91%E1%BA%B7t-patroni">3.1. Cài đặt Patroni</h3><p>Thực hiện trên&nbsp;<strong>TẤT CẢ 3 nodes</strong>.</p><pre><code class="language-bash"># Cài Patroni với etcd support
sudo pip3 install patroni[etcd]

# Hoặc specify version cụ thể
sudo pip3 install patroni[etcd]==3.2.0

# Kiểm tra installation
patroni --version
# Output: patroni 3.2.0

patronictl --version
# Output: patronictl 3.2.0
</code></pre><p><strong>Giải thích&nbsp;<code>[etcd]</code></strong>:</p><ul><li>Patroni hỗ trợ nhiều DCS backends (etcd, consul, zookeeper)</li><li><code>[etcd]</code>&nbsp;install thêm&nbsp;<code>python-etcd</code>&nbsp;client library</li><li>Có thể cài nhiều backends:&nbsp;<code>patroni[etcd,consul,zookeeper]</code></li></ul><h3 id="32-c%C3%A1c-packages-%C4%91%C6%B0%E1%BB%A3c-c%C3%A0i-%C4%91%E1%BA%B7t">3.2. Các packages được cài đặt</h3><pre><code class="language-bash"># Liệt kê các packages liên quan
pip3 list | grep -E "(patroni|etcd|psycopg)"

# Output:
# patroni          3.2.0
# python-etcd      0.4.5
# psycopg2         2.9.x
# psycopg2-binary  2.9.x
</code></pre><h3 id="33-verify-patroni-commands">3.3. Verify Patroni commands</h3><pre><code class="language-bash"># Check patroni binary
which patroni
# Output: /usr/local/bin/patroni

# Check patronictl binary
which patronictl
# Output: /usr/local/bin/patronictl

# List patronictl commands
patronictl --help
</code></pre><p>Output:</p><pre><code class="language-text">Usage: patronictl [OPTIONS] COMMAND [ARGS]...

Commands:
  list        Show cluster members
  switchover  Perform planned switchover
  failover    Perform manual failover
  reinit      Reinitialize cluster member
  restart     Restart cluster member
  reload      Reload cluster member configuration
  pause       Disable auto-failover
  resume      Enable auto-failover
  edit-config Edit cluster configuration
  ...
</code></pre><h2 id="4-c%E1%BA%A5u-tr%C3%BAc-file-patroniyml">4. Cấu trúc file patroni.yml</h2><h3 id="41-t%E1%BB%95ng-quan-v%E1%BB%81-patroniyml">4.1. Tổng quan về patroni.yml</h3><p>File&nbsp;<code>patroni.yml</code>&nbsp;là file cấu hình chính của Patroni, bao gồm:</p><ul><li><strong>Scope</strong>: Tên cluster</li><li><strong>Namespace</strong>: Prefix cho keys trong DCS</li><li><strong>Node information</strong>: Tên node, REST API config</li><li><strong>DCS connection</strong>: etcd endpoints</li><li><strong>Bootstrap</strong>: Initial cluster setup</li><li><strong>PostgreSQL</strong>: Database configuration</li><li><strong>Tags</strong>: Node metadata</li><li><strong>Watchdog</strong>: Optional hardware watchdog</li></ul><h3 id="42-c%E1%BA%A5u-tr%C3%BAc-c%C6%A1-b%E1%BA%A3n">4.2. Cấu trúc cơ bản</h3><pre><code class="language-yaml">scope: postgres
namespace: /service/
name: node1

restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008

etcd:
  hosts: 10.0.1.11:2379,10.0.1.12:2379,10.0.1.13:2379

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    postgresql:
      use_pg_rewind: true
      parameters:
        wal_level: replica
        hot_standby: "on"
        max_wal_senders: 10
        max_replication_slots: 10

  initdb:
    - encoding: UTF8
    - data-checksums

  pg_hba:
    - host replication replicator 10.0.1.0/24 scram-sha-256
    - host all all 0.0.0.0/0 scram-sha-256

postgresql:
  listen: 0.0.0.0:5432
  connect_address: 10.0.1.11:5432
  data_dir: /var/lib/postgresql/18/data
  bin_dir: /usr/lib/postgresql/18/bin
  authentication:
    replication:
      username: replicator
      password: replicator_password
    superuser:
      username: postgres
      password: postgres_password

tags:
  nofailover: false
  noloadbalance: false
  clonefrom: false
  nosync: false
</code></pre><h3 id="43-gi%E1%BA%A3i-th%C3%ADch-c%C3%A1c-sections-ch%C3%ADnh">4.3. Giải thích các sections chính</h3><h4 id="section-global">Section: Global</h4><pre><code class="language-yaml">scope: postgres          # Cluster name (unique identifier)
namespace: /service/     # DCS key prefix
name: node1             # Unique node name trong cluster
</code></pre><h4 id="section-rest-api">Section: REST API</h4><pre><code class="language-yaml">restapi:
  listen: 0.0.0.0:8008              # Listen trên tất cả interfaces
  connect_address: 10.0.1.11:8008   # Address để nodes khác connect
  # authentication:                  # Optional: Basic auth
  #   username: admin
  #   password: secret
</code></pre><p><strong>REST API endpoints</strong>:</p><ul><li><code>GET /</code>: Cluster info</li><li><code>GET /health</code>: Health check (200 = healthy)</li><li><code>GET /primary</code>: Check if node is primary</li><li><code>GET /replica</code>: Check if node is replica</li><li><code>POST /restart</code>: Restart PostgreSQL</li><li><code>POST /reload</code>: Reload configuration</li></ul><h4 id="section-etcd-dcs">Section: etcd (DCS)</h4><pre><code class="language-yaml">etcd:
  hosts: 10.0.1.11:2379,10.0.1.12:2379,10.0.1.13:2379  # etcd endpoints
  # protocol: http      # http hoặc https
  # username: user      # Optional: etcd authentication
  # password: pass
</code></pre><h4 id="section-bootstrap">Section: Bootstrap</h4><pre><code class="language-yaml">bootstrap:
  dcs:
    ttl: 30                           # Leader lock TTL (seconds)
    loop_wait: 10                     # Check interval (seconds)
    retry_timeout: 10                 # DCS operation timeout
    maximum_lag_on_failover: 1048576  # Max lag (bytes) để eligible for failover
    postgresql:
      use_pg_rewind: true             # Enable pg_rewind for fast recovery
      parameters:                     # PostgreSQL parameters
        wal_level: replica
        hot_standby: "on"
        wal_keep_size: "1GB"
        max_wal_senders: 10
        max_replication_slots: 10
        wal_log_hints: "on"           # Required for pg_rewind

  initdb:                             # pg_initdb options
    - encoding: UTF8
    - data-checksums                  # Enable page checksums
    - locale: en_US.UTF-8

  pg_hba:                             # pg_hba.conf entries
    - host replication replicator 10.0.1.0/24 scram-sha-256
    - host all all 0.0.0.0/0 scram-sha-256

  users:                              # Create users during bootstrap
    admin:
      password: admin_password
      options:
        - createrole
        - createdb
</code></pre><p><strong>Lưu ý</strong>: Bootstrap section chỉ áp dụng khi khởi tạo cluster lần đầu.</p><h4 id="section-postgresql">Section: PostgreSQL</h4><pre><code class="language-yaml">postgresql:
  listen: 0.0.0.0:5432                    # PostgreSQL listen address
  connect_address: 10.0.1.11:5432         # Address để connect từ bên ngoài
  data_dir: /var/lib/postgresql/18/data   # Data directory
  bin_dir: /usr/lib/postgresql/18/bin     # PostgreSQL binaries
  pgpass: /tmp/pgpass                     # Optional: pgpass file
  
  authentication:
    replication:
      username: replicator
      password: replicator_password
    superuser:
      username: postgres
      password: postgres_password
    rewind:                                # Optional: dedicated user for pg_rewind
      username: rewind_user
      password: rewind_password
  
  parameters:                              # PostgreSQL runtime parameters
    max_connections: 100
    shared_buffers: 2GB
    effective_cache_size: 6GB
    maintenance_work_mem: 512MB
    checkpoint_completion_target: 0.9
    wal_buffers: 16MB
    default_statistics_target: 100
    random_page_cost: 1.1
    effective_io_concurrency: 200
    work_mem: 16MB
    min_wal_size: 1GB
    max_wal_size: 2GB
  
  pg_hba:                                  # Additional pg_hba.conf entries
    - host all all 10.0.2.0/24 scram-sha-256
  
  callbacks:                               # Optional: callback scripts
    on_start: /etc/patroni/scripts/on_start.sh
    on_stop: /etc/patroni/scripts/on_stop.sh
    on_role_change: /etc/patroni/scripts/on_role_change.sh
</code></pre><h4 id="section-tags">Section: Tags</h4><pre><code class="language-yaml">tags:
  nofailover: false      # false = có thể become primary
  noloadbalance: false   # false = có thể nhận read traffic
  clonefrom: false       # false = có thể clone từ node này
  nosync: false          # false = có thể become synchronous standby
  # Custom tags
  datacenter: dc1
  environment: production
</code></pre><h4 id="section-watchdog-optional">Section: Watchdog (Optional)</h4><pre><code class="language-yaml">watchdog:
  mode: required         # required, automatic, hoặc off
  device: /dev/watchdog  # Hardware watchdog device
  safety_margin: 5       # Seconds before watchdog triggers
</code></pre><h2 id="5-t%E1%BA%A1o-patroni-configuration-files">5. Tạo Patroni configuration files</h2><h3 id="51-t%E1%BA%A1o-th%C6%B0-m%E1%BB%A5c-c%E1%BA%A5u-h%C3%ACnh">5.1. Tạo thư mục cấu hình</h3><p>Trên&nbsp;<strong>TẤT CẢ 3 nodes</strong>:</p><pre><code class="language-bash"># Tạo directory cho Patroni config
sudo mkdir -p /etc/patroni

# Tạo directory cho callback scripts (optional)
sudo mkdir -p /etc/patroni/scripts

# Set ownership
sudo chown -R postgres:postgres /etc/patroni
</code></pre><h3 id="52-node-1etcpatronipatroniyml">5.2. Node 1 - /etc/patroni/patroni.yml</h3><pre><code class="language-yaml">scope: postgres
namespace: /service/
name: node1

restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008

etcd:
  hosts: 10.0.1.11:2379,10.0.1.12:2379,10.0.1.13:2379

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    postgresql:
      use_pg_rewind: true
      parameters:
        wal_level: replica
        hot_standby: "on"
        wal_keep_size: "1GB"
        max_wal_senders: 10
        max_replication_slots: 10
        wal_log_hints: "on"

  initdb:
    - encoding: UTF8
    - data-checksums

  pg_hba:
    - host replication replicator 10.0.1.11/32 scram-sha-256
    - host replication replicator 10.0.1.12/32 scram-sha-256
    - host replication replicator 10.0.1.13/32 scram-sha-256
    - host all all 10.0.1.0/24 scram-sha-256
    - host all all 0.0.0.0/0 md5

  users:
    admin:
      password: admin123
      options:
        - createrole
        - createdb

postgresql:
  listen: 0.0.0.0:5432
  connect_address: 10.0.1.11:5432
  data_dir: /var/lib/postgresql/18/data
  bin_dir: /usr/lib/postgresql/18/bin
  authentication:
    replication:
      username: replicator
      password: replicator_password
    superuser:
      username: postgres
      password: postgres_password
  parameters:
    max_connections: 100
    shared_buffers: 2GB
    effective_cache_size: 6GB
    maintenance_work_mem: 512MB
    checkpoint_completion_target: 0.9

tags:
  nofailover: false
  noloadbalance: false
  clonefrom: false
  nosync: false
</code></pre><h3 id="53-node-2etcpatronipatroniyml">5.3. Node 2 - /etc/patroni/patroni.yml</h3><pre><code class="language-yaml">scope: postgres
namespace: /service/
name: node2

restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.12:8008

etcd:
  hosts: 10.0.1.11:2379,10.0.1.12:2379,10.0.1.13:2379

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    postgresql:
      use_pg_rewind: true
      parameters:
        wal_level: replica
        hot_standby: "on"
        wal_keep_size: "1GB"
        max_wal_senders: 10
        max_replication_slots: 10
        wal_log_hints: "on"

  initdb:
    - encoding: UTF8
    - data-checksums

  pg_hba:
    - host replication replicator 10.0.1.11/32 scram-sha-256
    - host replication replicator 10.0.1.12/32 scram-sha-256
    - host replication replicator 10.0.1.13/32 scram-sha-256
    - host all all 10.0.1.0/24 scram-sha-256
    - host all all 0.0.0.0/0 md5

  users:
    admin:
      password: admin123
      options:
        - createrole
        - createdb

postgresql:
  listen: 0.0.0.0:5432
  connect_address: 10.0.1.12:5432
  data_dir: /var/lib/postgresql/18/data
  bin_dir: /usr/lib/postgresql/18/bin
  authentication:
    replication:
      username: replicator
      password: replicator_password
    superuser:
      username: postgres
      password: postgres_password
  parameters:
    max_connections: 100
    shared_buffers: 2GB
    effective_cache_size: 6GB
    maintenance_work_mem: 512MB
    checkpoint_completion_target: 0.9

tags:
  nofailover: false
  noloadbalance: false
  clonefrom: false
  nosync: false
</code></pre><h3 id="54-node-3etcpatronipatroniyml">5.4. Node 3 - /etc/patroni/patroni.yml</h3><pre><code class="language-yaml">scope: postgres
namespace: /service/
name: node3

restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.13:8008

etcd:
  hosts: 10.0.1.11:2379,10.0.1.12:2379,10.0.1.13:2379

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    postgresql:
      use_pg_rewind: true
      parameters:
        wal_level: replica
        hot_standby: "on"
        wal_keep_size: "1GB"
        max_wal_senders: 10
        max_replication_slots: 10
        wal_log_hints: "on"

  initdb:
    - encoding: UTF8
    - data-checksums

  pg_hba:
    - host replication replicator 10.0.1.11/32 scram-sha-256
    - host replication replicator 10.0.1.12/32 scram-sha-256
    - host replication replicator 10.0.1.13/32 scram-sha-256
    - host all all 10.0.1.0/24 scram-sha-256
    - host all all 0.0.0.0/0 md5

  users:
    admin:
      password: admin123
      options:
        - createrole
        - createdb

postgresql:
  listen: 0.0.0.0:5432
  connect_address: 10.0.1.13:5432
  data_dir: /var/lib/postgresql/18/data
  bin_dir: /usr/lib/postgresql/18/bin
  authentication:
    replication:
      username: replicator
      password: replicator_password
    superuser:
      username: postgres
      password: postgres_password
  parameters:
    max_connections: 100
    shared_buffers: 2GB
    effective_cache_size: 6GB
    maintenance_work_mem: 512MB
    checkpoint_completion_target: 0.9

tags:
  nofailover: false
  noloadbalance: false
  clonefrom: false
  nosync: false
</code></pre><h3 id="55-set-permissions">5.5. Set permissions</h3><p>Trên&nbsp;<strong>TẤT CẢ 3 nodes</strong>:</p><pre><code class="language-bash"># Set ownership
sudo chown postgres:postgres /etc/patroni/patroni.yml

# Secure permissions (file chứa passwords)
sudo chmod 600 /etc/patroni/patroni.yml

# Verify
ls -l /etc/patroni/patroni.yml
# Output: -rw------- 1 postgres postgres ... patroni.yml
</code></pre><h2 id="6-t%E1%BA%A1o-systemd-service-cho-patroni">6. Tạo systemd service cho Patroni</h2><h3 id="61-t%E1%BA%A1o-systemd-unit-file">6.1. Tạo systemd unit file</h3><p>Tạo file&nbsp;<code>/etc/systemd/system/patroni.service</code>&nbsp;trên&nbsp;<strong>TẤT CẢ 3 nodes</strong>:</p><pre><code class="language-ini">[Unit]
Description=Patroni PostgreSQL HA manager
Documentation=https://patroni.readthedocs.io/
After=syslog.target network.target etcd.service

[Service]
Type=simple
User=postgres
Group=postgres

# Start Patroni
ExecStart=/usr/local/bin/patroni /etc/patroni/patroni.yml

# Reload configuration
ExecReload=/bin/kill -HUP $MAINPID

# Restart behavior
Restart=on-failure
RestartSec=5

# Limits
LimitNOFILE=65536
LimitNPROC=65536

# Logging
StandardOutput=journal
StandardError=journal

# Working directory
WorkingDirectory=/var/lib/postgresql

# Environment
Environment=PATH=/usr/lib/postgresql/18/bin:/usr/local/bin:/usr/bin:/bin

[Install]
WantedBy=multi-user.target
</code></pre><h3 id="62-gi%E1%BA%A3i-th%C3%ADch-systemd-unit-file">6.2. Giải thích systemd unit file</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Directive</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Giải thích</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">After=etcd.service</code></td><td style="padding: 5px 10px;">Khởi động sau khi etcd đã sẵn sàng</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">Type=simple</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Process chạy foreground</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">User=postgres</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Chạy với user postgres</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ExecStart</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Command để start Patroni</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ExecReload</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Send HUP signal để reload config</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">Restart=on-failure</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Auto restart nếu fail</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">RestartSec=5</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Đợi 5 giây trước khi restart</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">LimitNOFILE=65536</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Max open files</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">StandardOutput=journal</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Log vào systemd journal</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="63-enable-v%C3%A0-verify-service">6.3. Enable và verify service</h3><p>Trên&nbsp;<strong>TẤT CẢ 3 nodes</strong>:</p><pre><code class="language-bash"># Reload systemd
sudo systemctl daemon-reload

# Enable Patroni service (auto-start on boot)
sudo systemctl enable patroni

# Verify service file
systemctl cat patroni

# Check status (should be inactive/dead - not started yet)
systemctl status patroni
</code></pre><h2 id="7-verify-installation">7. Verify installation</h2><h3 id="71-check-patroni-installation">7.1. Check Patroni installation</h3><p>Trên&nbsp;<strong>TẤT CẢ 3 nodes</strong>:</p><pre><code class="language-bash"># Check Patroni version
patroni --version

# Check patronictl
patronictl --help

# Verify config file
sudo -u postgres cat /etc/patroni/patroni.yml

# Validate YAML syntax
python3 -c "import yaml; yaml.safe_load(open('/etc/patroni/patroni.yml'))"
# No output = valid YAML
</code></pre><h3 id="72-check-etcd-connectivity">7.2. Check etcd connectivity</h3><pre><code class="language-bash"># Test etcd từ mỗi node
etcdctl endpoint health --cluster

# Should see all 3 etcd nodes healthy
</code></pre><h3 id="73-pre-flight-checklist">7.3. Pre-flight checklist</h3><p>Trước khi khởi động Patroni, verify:</p><pre><code class="language-bash"># ✅ PostgreSQL installed nhưng NOT running
systemctl status postgresql
# Should be: inactive (dead)

# ✅ etcd cluster healthy
etcdctl endpoint health --cluster

# ✅ Patroni config file exists và có permissions đúng
ls -l /etc/patroni/patroni.yml

# ✅ Data directory có ownership đúng
ls -ld /var/lib/postgresql/18/data
# Owner: postgres:postgres

# ✅ systemd service enabled
systemctl is-enabled patroni
# Output: enabled

# ✅ Firewall rules (nếu có firewall)
sudo ufw status | grep -E "(5432|8008)"
# Hoặc
sudo firewall-cmd --list-ports | grep -E "(5432|8008)"
</code></pre><h2 id="8-troubleshooting">8. Troubleshooting</h2><h3 id="81-issue-pip-install-fails">8.1. Issue: pip install fails</h3><pre><code class="language-bash"># Error: "No module named 'setuptools'"
# Solution:
sudo apt install python3-setuptools

# Or upgrade pip
sudo pip3 install --upgrade pip setuptools
</code></pre><h3 id="82-issue-cannot-find-postgresql-binaries">8.2. Issue: Cannot find PostgreSQL binaries</h3><pre><code class="language-bash"># Error: "could not find postgres binary"
# Solution: Check bin_dir in patroni.yml

# Find PostgreSQL bin directory
which postgres
# Output: /usr/lib/postgresql/18/bin/postgres

# Update patroni.yml
postgresql:
  bin_dir: /usr/lib/postgresql/18/bin
</code></pre><h3 id="83-issue-permission-denied-on-data-directory">8.3. Issue: Permission denied on data directory</h3><pre><code class="language-bash"># Error: "FATAL:  data directory ... has wrong ownership"
# Solution:
sudo chown -R postgres:postgres /var/lib/postgresql/18/data
sudo chmod 700 /var/lib/postgresql/18/data
</code></pre><h3 id="84-issue-yaml-syntax-error">8.4. Issue: YAML syntax error</h3><pre><code class="language-bash"># Validate YAML
python3 -c "import yaml; yaml.safe_load(open('/etc/patroni/patroni.yml'))"

# Common issues:
# - Mixed tabs and spaces (use spaces only)
# - Incorrect indentation
# - Missing quotes around special characters
# - Duplicate keys
</code></pre><h2 id="9-t%E1%BB%95ng-k%E1%BA%BFt">9. Tổng kết</h2><h3 id="key-takeaways">Key Takeaways</h3><p>✅&nbsp;<strong>Patroni</strong>: Python application, cài qua pip</p><p>✅&nbsp;<strong>Dependencies</strong>: Python 3, pip, psycopg2, python-etcd</p><p>✅&nbsp;<strong>Configuration</strong>:&nbsp;<code>patroni.yml</code>&nbsp;chứa tất cả settings</p><p>✅&nbsp;<strong>systemd service</strong>: Quản lý Patroni daemon</p><p>✅&nbsp;<strong>Security</strong>: File config có permissions 600 (chứa passwords)</p><h3 id="checklist-sau-lab">Checklist sau Lab</h3><ul><li>&nbsp;Python 3 và pip đã cài trên cả 3 nodes</li><li>&nbsp;Patroni 3.2.0+ đã cài trên cả 3 nodes</li><li>&nbsp;File&nbsp;<code>/etc/patroni/patroni.yml</code>&nbsp;đã tạo trên mỗi node với config riêng</li><li>&nbsp;systemd service&nbsp;<code>patroni.service</code>&nbsp;đã tạo và enabled</li><li>&nbsp;Permissions đúng cho config file (600, owner postgres)</li><li>&nbsp;etcd cluster đang running và healthy</li></ul><h3 id="ki%E1%BA%BFn-tr%C3%BAc-hi%E1%BB%87n-t%E1%BA%A1i">Kiến trúc hiện tại</h3><pre><code class="language-text">✅ 3 VMs prepared (Bài 4)
✅ PostgreSQL 18 installed (Bài 5)
✅ etcd cluster running (Bài 6)
✅ Patroni installed and configured (Bài 7)

Next: Bootstrap cluster lần đầu
</code></pre><h3 id="chu%E1%BA%A9n-b%E1%BB%8B-cho-b%C3%A0i-8">Chuẩn bị cho Bài 8</h3><p>Bài 8 sẽ đi sâu vào cấu hình Patroni chi tiết:</p><ul><li>Phân tích từng section trong&nbsp;<code>patroni.yml</code></li><li>Bootstrap configuration options</li><li>PostgreSQL parameters tuning</li><li>Authentication setup</li><li>Tags và constraints</li></ul><h3 id="b%C3%A0i-9-bootstrap-cluster">Bài 9: Bootstrap cluster</h3><p>Sau khi Patroni đã cài và cấu hình xong, Bài 9 sẽ hướng dẫn:</p><ul><li>Khởi động Patroni lần đầu</li><li>Quá trình bootstrap tự động</li><li>Kiểm tra cluster status</li><li>Troubleshootin</li></ul>
