---
id: 019c9617-fb77-71c7-a375-ddb3553fc7a4
title: 'Bài 8: Cấu hình Patroni chi tiết'
slug: bai-8-cau-hinh-patroni-chi-tiet
description: >-
  Phân tích sâu file patroni.yml từng section: bootstrap, PostgreSQL parameters,
  authentication, tags và constraints cho cluster.
duration_minutes: 155
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: Cài đặt & Cấu hình"
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---
<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Hiểu sâu về từng section trong file&nbsp;<code>patroni.yml</code></li><li>Cấu hình bootstrap options</li><li>Tuning PostgreSQL parameters cho HA</li><li>Cấu hình authentication và security</li><li>Sử dụng tags và constraints</li><li>Tối ưu các timing parameters</li></ul><h2 id="1-t%E1%BB%95ng-quan-v%E1%BB%81-patroni-configuration">1. Tổng quan về Patroni Configuration</h2><h3 id="11-configuration-layers">1.1. Configuration layers</h3><p>Patroni có nhiều layers cấu hình:</p><pre><code class="language-text">┌─────────────────────────────────────┐
│   1. Command line arguments         │ (Highest priority)
│      patroni --config-file=...      │
├─────────────────────────────────────┤
│   2. Environment variables          │
│      PATRONI_SCOPE=postgres         │
├─────────────────────────────────────┤
│   3. Configuration file             │
│      /etc/patroni/patroni.yml       │
├─────────────────────────────────────┤
│   4. DCS (Dynamic configuration)    │
│      Stored in etcd                 │
└─────────────────────────────────────┘
        ↓
   Merged configuration
</code></pre><p><strong>Priority order</strong>: Command line &gt; Environment &gt; Config file &gt; DCS</p><h3 id="12-static-vs-dynamic-configuration">1.2. Static vs Dynamic configuration</h3><p><strong>Static configuration</strong>&nbsp;(trong&nbsp;<code>patroni.yml</code>):</p><ul><li>Node-specific settings (name, addresses)</li><li>etcd connection info</li><li>Data directory, bin directory</li><li>Restart required để apply changes</li></ul><p><strong>Dynamic configuration</strong>&nbsp;(trong DCS):</p><ul><li>PostgreSQL parameters</li><li>Bootstrap settings</li><li>TTL, loop_wait, retry_timeout</li><li>Có thể update runtime:&nbsp;<code>patronictl edit-config</code></li></ul><h2 id="2-section-scope-v%C3%A0-namespace">2. Section: Scope và Namespace</h2><h3 id="21-scope-cluster-name">2.1. Scope (Cluster name)</h3><pre><code class="language-yaml">scope: postgres
</code></pre><p><strong>Scope</strong>&nbsp;là tên unique của cluster trong DCS.</p><p><strong>Ý nghĩa</strong>:</p><ul><li>Tất cả nodes trong cùng cluster phải có cùng&nbsp;<code>scope</code></li><li>DCS keys được prefix với scope:&nbsp;<code>/service/postgres/...</code></li><li>Cho phép nhiều clusters trên cùng etcd cluster</li></ul><p><strong>Best practices</strong>:</p><pre><code class="language-yaml"># Development
scope: postgres-dev

# Staging
scope: postgres-staging

# Production
scope: postgres-prod

# Multi-tenant
scope: customer1-postgres
scope: customer2-postgres
</code></pre><h3 id="22-namespace">2.2. Namespace</h3><pre><code class="language-yaml">namespace: /service/
</code></pre><p><strong>Namespace</strong>&nbsp;là prefix cho tất cả keys trong DCS.</p><p><strong>Full DCS key structure</strong>:</p><pre><code>/service/postgres/leader
/service/postgres/members/node1
/service/postgres/config
</code></pre><p><strong>Multiple clusters example</strong>:</p><pre><code>/service/postgres-prod/leader
/service/postgres-staging/leader
/application/myapp-db/leader
</code></pre><h2 id="3-section-node-information">3. Section: Node Information</h2><h3 id="31-node-name">3.1. Node name</h3><pre><code class="language-yaml">name: node1
</code></pre><p><strong>Requirements</strong>:</p><ul><li>Unique trong cluster</li><li>Không đổi sau khi bootstrap</li><li>Nên dùng hostname hoặc FQDN</li></ul><p><strong>Ví dụ naming conventions</strong>:</p><pre><code class="language-yaml"># Simple
name: node1
name: node2
name: node3

# With datacenter
name: dc1-node1
name: dc2-node1

# With role hint (not recommended)
name: pg-primary-01   # ❌ Role changes
name: pg-db-01        # ✅ Better
</code></pre><h3 id="32-host-information">3.2. Host information</h3><pre><code class="language-yaml"># Optional: Override hostname
host: 10.0.1.11
</code></pre><p>Patroni tự động detect hostname, nhưng có thể override nếu cần.</p><h2 id="4-section-rest-api">4. Section: REST API</h2><h3 id="41-basic-configuration">4.1. Basic configuration</h3><pre><code class="language-yaml">restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008
</code></pre><p><strong>Parameters</strong>:</p><ul><li><code>listen</code>: Interface và port để bind (0.0.0.0 = all interfaces)</li><li><code>connect_address</code>: Address mà các nodes khác dùng để connect</li></ul><h3 id="42-authentication">4.2. Authentication</h3><pre><code class="language-yaml">restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008
  authentication:
    username: admin
    password: secret_password
</code></pre><p><strong>Khi nào cần authentication?</strong>:</p><ul><li>REST API exposed ra internet</li><li>Compliance requirements</li><li>Multi-tenant environments</li></ul><p><strong>Sử dụng với curl</strong>:</p><pre><code class="language-bash">curl -u admin:secret_password http://10.0.1.11:8008/
</code></pre><h3 id="43-ssltls">4.3. SSL/TLS</h3><pre><code class="language-yaml">restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008
  certfile: /etc/patroni/ssl/server.crt
  keyfile: /etc/patroni/ssl/server.key
  cafile: /etc/patroni/ssl/ca.crt
  verify_client: required  # none, optional, required
</code></pre><p><strong>Generate self-signed certificates</strong>:</p><pre><code class="language-bash"># CA
openssl genrsa -out ca.key 4096
openssl req -new -x509 -days 3650 -key ca.key -out ca.crt

# Server certificate
openssl genrsa -out server.key 4096
openssl req -new -key server.key -out server.csr
openssl x509 -req -days 365 -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt
</code></pre><h3 id="44-rest-api-endpoints">4.4. REST API endpoints</h3><p><strong>Health check endpoints</strong>:</p><pre><code class="language-bash"># General health
GET /health
# Returns: 200 if healthy, 503 if not

# Primary check
GET /primary
GET /master  # deprecated
# Returns: 200 if primary, 503 if not

# Replica check
GET /replica
# Returns: 200 if replica, 503 if primary or unhealthy

# Read-only check (replica or sync standby)
GET /read-only
# Returns: 200 if can serve reads

# Synchronous standby check
GET /synchronous
GET /sync
# Returns: 200 if synchronous standby
</code></pre><p><strong>Management endpoints</strong>:</p><pre><code class="language-bash"># Restart PostgreSQL
POST /restart

# Reload configuration
POST /reload

# Reinitialize
POST /reinitialize
</code></pre><h2 id="5-section-bootstrap">5. Section: Bootstrap</h2><h3 id="51-dcs-settings">5.1. DCS settings</h3><pre><code class="language-yaml">bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    maximum_lag_on_syncnode: 1048576
    synchronous_mode: false
    synchronous_mode_strict: false
</code></pre><p><strong>TTL (Time To Live)</strong>:</p><pre><code class="language-yaml">ttl: 30  # seconds
</code></pre><ul><li>Leader lock expiration time</li><li>Nếu leader không renew trong TTL → lock expires</li><li><strong>Tradeoff</strong>:<ul><li>TTL thấp (10s): Failover nhanh, nhưng risk false positives</li><li>TTL cao (60s): Ổn định hơn, nhưng downtime lâu hơn</li></ul></li><li><strong>Recommended</strong>: 30 seconds</li></ul><p><strong>loop_wait</strong>:</p><pre><code class="language-yaml">loop_wait: 10  # seconds
</code></pre><ul><li>Interval giữa các health checks</li><li>Leader renews lock mỗi&nbsp;<code>loop_wait</code>&nbsp;seconds</li><li><strong>Recommended</strong>: 10 seconds (1/3 của TTL)</li></ul><p><strong>retry_timeout</strong>:</p><pre><code class="language-yaml">retry_timeout: 10  # seconds
</code></pre><ul><li>Timeout cho DCS operations</li><li>Nếu DCS không respond trong timeout → consider failed</li><li><strong>Recommended</strong>: 10 seconds</li></ul><p><strong>maximum_lag_on_failover</strong>:</p><pre><code class="language-yaml">maximum_lag_on_failover: 1048576  # bytes (1MB)
</code></pre><ul><li>Max replication lag để eligible for promotion</li><li>Replica với lag &gt; threshold sẽ không được chọn làm primary</li><li><strong>0 = no limit</strong>&nbsp;(any replica can be promoted)</li><li><strong>Recommended</strong>: 1MB cho zero data loss preference</li></ul><p><strong>synchronous_mode</strong>:</p><pre><code class="language-yaml">synchronous_mode: false
synchronous_mode_strict: false
</code></pre><ul><li><code>false</code>: Asynchronous replication (default)</li><li><code>true</code>: Enable synchronous replication</li><li><code>synchronous_mode_strict</code>: Strict sync mode (no writes if no sync standby)</li></ul><h3 id="52-postgresql-bootstrap-parameters">5.2. PostgreSQL bootstrap parameters</h3><pre><code class="language-yaml">bootstrap:
  dcs:
    postgresql:
      use_pg_rewind: true
      use_slots: true
      parameters:
        # Replication
        wal_level: replica
        hot_standby: "on"
        wal_keep_size: "1GB"
        max_wal_senders: 10
        max_replication_slots: 10
        wal_log_hints: "on"
        
        # Archiving (optional)
        archive_mode: "on"
        archive_timeout: 300
        archive_command: "cp %p /var/lib/postgresql/18/archive/%f"
        
        # Performance
        shared_buffers: "2GB"
        effective_cache_size: "6GB"
        maintenance_work_mem: "512MB"
        checkpoint_completion_target: 0.9
        wal_buffers: "16MB"
        default_statistics_target: 100
        random_page_cost: 1.1
        effective_io_concurrency: 200
        work_mem: "16MB"
        min_wal_size: "1GB"
        max_wal_size: "4GB"
        max_worker_processes: 4
        max_parallel_workers_per_gather: 2
        max_parallel_workers: 4
        max_parallel_maintenance_workers: 2
</code></pre><p><strong>use_pg_rewind</strong>:</p><pre><code class="language-yaml">use_pg_rewind: true
</code></pre><ul><li>Enable automatic recovery với pg_rewind</li><li>Faster recovery khi rejoining cluster</li><li><strong>Requires</strong>:&nbsp;<code>wal_log_hints = on</code>&nbsp;hoặc data checksums</li></ul><p><strong>use_slots</strong>:</p><pre><code class="language-yaml">use_slots: true
</code></pre><ul><li>Create replication slots tự động</li><li>Prevent WAL deletion khi replica lag</li><li><strong>Recommended</strong>: true</li></ul><h3 id="53-initdb-options">5.3. initdb options</h3><pre><code class="language-yaml">bootstrap:
  initdb:
    - encoding: UTF8
    - locale: en_US.UTF-8
    - data-checksums
    - auth-host: scram-sha-256
    - auth-local: peer
</code></pre><p><strong>Common options</strong>:</p><ul><li><code>encoding</code>: Character encoding (UTF8 recommended)</li><li><code>locale</code>: System locale</li><li><code>data-checksums</code>: Enable page checksums (detect corruption)</li><li><code>auth-host</code>: Default authentication method for host connections</li><li><code>auth-local</code>: Default authentication method for local connections</li></ul><p><strong>Lưu ý</strong>:&nbsp;<code>initdb</code>&nbsp;chỉ chạy khi bootstrap cluster lần đầu.</p><h3 id="54-pghba-configuration">5.4. pg_hba configuration</h3><pre><code class="language-yaml">bootstrap:
  pg_hba:
    # Local connections
    - local all all peer
    - local all all md5
    
    # Localhost
    - host all all 127.0.0.1/32 scram-sha-256
    - host all all ::1/128 scram-sha-256
    
    # Replication connections
    - host replication replicator 10.0.1.11/32 scram-sha-256
    - host replication replicator 10.0.1.12/32 scram-sha-256
    - host replication replicator 10.0.1.13/32 scram-sha-256
    
    # Application connections
    - host all all 10.0.1.0/24 scram-sha-256
    
    # Allow from specific app servers
    - host myapp myapp_user 10.0.2.0/24 scram-sha-256
</code></pre><p><strong>Best practices</strong>:</p><ul><li>✅ Use&nbsp;<code>scram-sha-256</code>&nbsp;(most secure)</li><li>✅ Specific IP addresses/subnets</li><li>✅ Separate users for different purposes</li><li>❌ Avoid&nbsp;<code>trust</code>&nbsp;method</li><li>❌ Avoid&nbsp;<code>0.0.0.0/0</code>&nbsp;unless necessary</li></ul><h3 id="55-bootstrap-users">5.5. Bootstrap users</h3><pre><code class="language-yaml">bootstrap:
  users:
    admin:
      password: admin_password_here
      options:
        - createrole
        - createdb
    
    myapp:
      password: myapp_password_here
      options:
        - login
    
    monitoring:
      password: monitoring_password_here
      options:
        - login
</code></pre><p><strong>User types</strong>:</p><ul><li><strong>admin</strong>: Administrative tasks</li><li><strong>application</strong>: Application database user</li><li><strong>monitoring</strong>: Prometheus exporter, etc.</li><li><strong>replication</strong>: Already handled by Patroni</li></ul><h3 id="56-post-bootstrap-scripts">5.6. Post-bootstrap scripts</h3><pre><code class="language-yaml">bootstrap:
  post_bootstrap: /etc/patroni/scripts/post_bootstrap.sh
  post_init: /etc/patroni/scripts/post_init.sh
</code></pre><p><strong>post_bootstrap</strong>: Chạy sau khi bootstrap cluster (chỉ trên primary)&nbsp;<strong>post_init</strong>: Chạy sau khi initialize database</p><p><strong>Example script</strong>&nbsp;(<code>/etc/patroni/scripts/post_bootstrap.sh</code>):</p><pre><code class="language-bash">#!/bin/bash
# Create extensions
psql -U postgres -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"
psql -U postgres -c "CREATE EXTENSION IF NOT EXISTS pg_trgm;"

# Create databases
psql -U postgres -c "CREATE DATABASE myapp;"

# Grant permissions
psql -U postgres -d myapp -c "GRANT ALL ON SCHEMA public TO myapp;"
</code></pre><h2 id="6-section-postgresql">6. Section: PostgreSQL</h2><h3 id="61-connection-settings">6.1. Connection settings</h3><pre><code class="language-yaml">postgresql:
  listen: 0.0.0.0:5432
  connect_address: 10.0.1.11:5432
  proxy_address: 10.0.1.100:5432  # Optional: VIP address
</code></pre><p><strong>listen</strong>: Interface để PostgreSQL listen&nbsp;<strong>connect_address</strong>: Address để replication connections&nbsp;<strong>proxy_address</strong>: Virtual IP (HAProxy, pgBouncer)</p><h3 id="62-data-and-binary-directories">6.2. Data and binary directories</h3><pre><code class="language-yaml">postgresql:
  data_dir: /var/lib/postgresql/18/data
  bin_dir: /usr/lib/postgresql/18/bin
  config_dir: /etc/postgresql/18/main  # Optional
  pgpass: /var/lib/postgresql/.pgpass  # Optional
</code></pre><p><strong>Lưu ý</strong>:</p><ul><li><code>data_dir</code>: Nơi lưu database files</li><li><code>bin_dir</code>: Nơi chứa PostgreSQL binaries (psql, pg_ctl, etc.)</li><li><code>config_dir</code>: Nếu config files ở nơi khác với data_dir</li></ul><h3 id="63-authentication">6.3. Authentication</h3><pre><code class="language-yaml">postgresql:
  authentication:
    replication:
      username: replicator
      password: replicator_password
    
    superuser:
      username: postgres
      password: postgres_password
    
    rewind:
      username: rewind_user
      password: rewind_password
</code></pre><p><strong>replication</strong>: User cho streaming replication&nbsp;<strong>superuser</strong>: Patroni dùng để manage PostgreSQL&nbsp;<strong>rewind</strong>: User cho pg_rewind (optional, có thể dùng superuser)</p><p><strong>Security best practice</strong>: Store passwords in environment variables hoặc secrets manager.</p><h3 id="64-runtime-parameters">6.4. Runtime parameters</h3><pre><code class="language-yaml">postgresql:
  parameters:
    # Connection
    max_connections: 200
    superuser_reserved_connections: 3
    
    # Memory
    shared_buffers: "4GB"              # 25% of RAM
    effective_cache_size: "12GB"       # 50-75% of RAM
    maintenance_work_mem: "1GB"
    work_mem: "20MB"
    
    # WAL
    wal_buffers: "16MB"
    min_wal_size: "2GB"
    max_wal_size: "8GB"
    wal_compression: "on"
    
    # Checkpoints
    checkpoint_timeout: "15min"
    checkpoint_completion_target: 0.9
    
    # Query planning
    default_statistics_target: 100
    random_page_cost: 1.1              # SSD
    effective_io_concurrency: 200      # SSD
    
    # Parallel query
    max_worker_processes: 8
    max_parallel_workers_per_gather: 4
    max_parallel_workers: 8
    max_parallel_maintenance_workers: 4
    
    # Logging
    log_line_prefix: "%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h "
    log_checkpoints: "on"
    log_connections: "on"
    log_disconnections: "on"
    log_lock_waits: "on"
    log_temp_files: 0
    log_autovacuum_min_duration: 0
    
    # Auto-vacuum
    autovacuum: "on"
    autovacuum_max_workers: 3
    autovacuum_naptime: "10s"
    
    # Locale
    lc_messages: "en_US.UTF-8"
    lc_monetary: "en_US.UTF-8"
    lc_numeric: "en_US.UTF-8"
    lc_time: "en_US.UTF-8"
    
    # Extensions
    shared_preload_libraries: "pg_stat_statements"
</code></pre><p><strong>Memory sizing guide</strong>:</p><pre><code>Total RAM: 16GB

shared_buffers: 4GB (25%)
effective_cache_size: 12GB (75%)
maintenance_work_mem: 1GB
work_mem: 20MB × max_connections = 4GB max
</code></pre><h3 id="65-additional-pghba-entries">6.5. Additional pg_hba entries</h3><pre><code class="language-yaml">postgresql:
  pg_hba:
    # Additional entries beyond bootstrap
    - hostssl all all 10.0.3.0/24 scram-sha-256
    - host replication replicator 10.0.4.0/24 scram-sha-256
</code></pre><p>Merge với entries từ&nbsp;<code>bootstrap.pg_hba</code>.</p><h3 id="66-callback-scripts">6.6. Callback scripts</h3><pre><code class="language-yaml">postgresql:
  callbacks:
    on_reload: /etc/patroni/scripts/on_reload.sh
    on_restart: /etc/patroni/scripts/on_restart.sh
    on_role_change: /etc/patroni/scripts/on_role_change.sh
    on_start: /etc/patroni/scripts/on_start.sh
    on_stop: /etc/patroni/scripts/on_stop.sh
</code></pre><p><strong>on_role_change example</strong>:</p><pre><code class="language-bash">#!/bin/bash
# /etc/patroni/scripts/on_role_change.sh

ROLE=$1  # 'master' or 'replica'
CLUSTER=$2
LEADER=$3

if [ "$ROLE" = "master" ]; then
    echo "$(date): Promoted to PRIMARY" &gt;&gt; /var/log/patroni/role_changes.log
    
    # Update HAProxy
    curl -X POST http://haproxy:9999/update
    
    # Send notification
    curl -X POST https://slack.webhook.url \
      -d "{\"text\": \"PostgreSQL node promoted to PRIMARY\"}"
else
    echo "$(date): Demoted to REPLICA" &gt;&gt; /var/log/patroni/role_changes.log
fi
</code></pre><h3 id="67-custom-configuration-files">6.7. Custom configuration files</h3><pre><code class="language-yaml">postgresql:
  custom_conf: /etc/postgresql/18/main/custom.conf
</code></pre><p>Include custom configuration file.</p><p><strong>Example</strong>&nbsp;(<code>custom.conf</code>):</p><pre><code class="language-conf"># Custom settings
statement_timeout = 30000
idle_in_transaction_session_timeout = 60000
</code></pre><h3 id="68-remove-data-directory-on-failover">6.8. Remove data directory on failover</h3><pre><code class="language-yaml">postgresql:
  remove_data_directory_on_rewind_failure: true
  remove_data_directory_on_diverged_timelines: true
</code></pre><p><strong>Cẩn thận</strong>: Xóa data directory nếu recovery fail.</p><h2 id="7-section-tags">7. Section: Tags</h2><h3 id="71-failover-tags">7.1. Failover tags</h3><pre><code class="language-yaml">tags:
  nofailover: false
  noloadbalance: false
  clonefrom: false
  nosync: false
</code></pre><p><strong>nofailover</strong>:</p><pre><code class="language-yaml">nofailover: false  # Node có thể become primary
nofailover: true   # Node KHÔNG BAO GIỜ become primary
</code></pre><p><strong>Use case</strong>: Replica chỉ dùng cho reporting, analytics.</p><p><strong>noloadbalance</strong>:</p><pre><code class="language-yaml">noloadbalance: false  # Node có thể serve read queries
noloadbalance: true   # Node KHÔNG serve read queries
</code></pre><p><strong>Use case</strong>: Node đang maintenance hoặc có issue.</p><p><strong>clonefrom</strong>:</p><pre><code class="language-yaml">clonefrom: false  # Node có thể làm source cho basebackup
clonefrom: true   # Node ưu tiên làm source
</code></pre><p><strong>Use case</strong>: Designated backup node.</p><p><strong>nosync</strong>:</p><pre><code class="language-yaml">nosync: false  # Node có thể become synchronous standby
nosync: true   # Node KHÔNG become synchronous standby
</code></pre><p><strong>Use case</strong>: Async replica ở datacenter khác.</p><h3 id="72-custom-tags">7.2. Custom tags</h3><pre><code class="language-yaml">tags:
  datacenter: dc1
  environment: production
  application: myapp
  version: v1.0.0
  rack: rack1
  zone: us-east-1a
</code></pre><p><strong>Use cases</strong>:</p><ul><li>Monitoring và labeling</li><li>Custom failover logic</li><li>Geographic routing</li><li>Multi-tenant identification</li></ul><h3 id="73-priority-tag">7.3. Priority tag</h3><pre><code class="language-yaml">tags:
  nofailover: false
  # Higher number = higher priority for promotion
  failover_priority: 100
</code></pre><p><strong>Example cluster</strong>:</p><pre><code>node1: failover_priority: 100  ← Preferred primary
node2: failover_priority: 50
node3: failover_priority: 10   ← Last resort
</code></pre><h2 id="8-section-watchdog">8. Section: Watchdog</h2><h3 id="81-basic-watchdog-configuration">8.1. Basic watchdog configuration</h3><pre><code class="language-yaml">watchdog:
  mode: required     # off, automatic, required
  device: /dev/watchdog
  safety_margin: 5
</code></pre><p><strong>Modes</strong>:</p><ul><li><code>off</code>: Disable watchdog</li><li><code>automatic</code>: Use if available</li><li><code>required</code>: Fail if watchdog không available</li></ul><h3 id="82-hardware-watchdog">8.2. Hardware watchdog</h3><p><strong>Check watchdog availability</strong>:</p><pre><code class="language-bash">ls -l /dev/watchdog
# crw------- 1 root root 10, 130 ... /dev/watchdog
</code></pre><p><strong>Load watchdog module</strong>:</p><pre><code class="language-bash"># Load softdog module
sudo modprobe softdog

# Make persistent
echo "softdog" | sudo tee -a /etc/modules

# Verify
lsmod | grep dog
# softdog   ...
</code></pre><p><strong>Grant access to postgres user</strong>:</p><pre><code class="language-bash"># Create udev rule
sudo tee /etc/udev/rules.d/60-watchdog.rules &lt;&lt; EOF
KERNEL=="watchdog", OWNER="postgres", GROUP="postgres", MODE="0660"
EOF

# Reload udev
sudo udevadm control --reload-rules
sudo udevadm trigger
</code></pre><h3 id="83-why-use-watchdog">8.3. Why use watchdog?</h3><p><strong>Split-brain prevention</strong>:</p><ul><li>Patroni hangs nhưng PostgreSQL vẫn chạy</li><li>Network issue: Patroni loses DCS but node alive</li><li>Watchdog reboots node → Prevent zombie primary</li></ul><p><strong>Flow</strong>:</p><pre><code>1. Patroni healthy → Kicks watchdog every 10s
2. Patroni hangs/loses DCS → Stops kicking
3. Watchdog timeout (safety_margin) → Reboot node
4. Node reboots → No zombie primary
</code></pre><h2 id="9-section-synchronous-replication">9. Section: Synchronous Replication</h2><h3 id="91-enable-synchronous-mode">9.1. Enable synchronous mode</h3><pre><code class="language-yaml">bootstrap:
  dcs:
    synchronous_mode: true
    synchronous_mode_strict: false
    synchronous_node_count: 1
</code></pre><p><strong>synchronous_mode</strong>: Enable sync replication&nbsp;<strong>synchronous_mode_strict</strong>: Primary refuses writes nếu không có sync standby&nbsp;<strong>synchronous_node_count</strong>: Số sync standbys (≥1)</p><h3 id="92-synchronous-mode-variants">9.2. Synchronous mode variants</h3><p><strong>Async (default)</strong>:</p><pre><code class="language-yaml">synchronous_mode: false
</code></pre><ul><li>Fast writes</li><li>Risk data loss nếu primary fails</li></ul><p><strong>Synchronous</strong>:</p><pre><code class="language-yaml">synchronous_mode: true
synchronous_mode_strict: false
</code></pre><ul><li>Wait for 1 standby confirmation</li><li>Degrade to async nếu không có standbys</li></ul><p><strong>Strict synchronous</strong>:</p><pre><code class="language-yaml">synchronous_mode: true
synchronous_mode_strict: true
</code></pre><ul><li>REFUSE writes nếu không có sync standby</li><li>Zero data loss guarantee</li><li>Risk availability impact</li></ul><h3 id="93-multiple-synchronous-standbys">9.3. Multiple synchronous standbys</h3><pre><code class="language-yaml">bootstrap:
  dcs:
    synchronous_mode: true
    synchronous_node_count: 2  # Wait for 2 standbys
</code></pre><p>PostgreSQL 18 supports:</p><pre><code class="language-sql">synchronous_standby_names = 'FIRST 2 (node2, node3, node4)'
-- or
synchronous_standby_names = 'ANY 2 (node2, node3, node4)'
</code></pre><h2 id="10-complete-configuration-example">10. Complete Configuration Example</h2><h3 id="101-production-grade-patroniyml">10.1. Production-grade patroni.yml</h3><pre><code class="language-yaml">scope: postgres-prod
namespace: /service/
name: node1

restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008
  authentication:
    username: admin
    password: ${PATRONI_RESTAPI_PASSWORD}
  certfile: /etc/patroni/ssl/server.crt
  keyfile: /etc/patroni/ssl/server.key

etcd:
  hosts: 10.0.1.11:2379,10.0.1.12:2379,10.0.1.13:2379

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    maximum_lag_on_syncnode: 1048576
    synchronous_mode: true
    synchronous_mode_strict: false
    
    postgresql:
      use_pg_rewind: true
      use_slots: true
      
      parameters:
        # Replication
        wal_level: replica
        hot_standby: "on"
        wal_keep_size: "2GB"
        max_wal_senders: 10
        max_replication_slots: 10
        wal_log_hints: "on"
        
        # Performance
        max_connections: 200
        shared_buffers: "4GB"
        effective_cache_size: "12GB"
        maintenance_work_mem: "1GB"
        work_mem: "20MB"
        wal_buffers: "16MB"
        checkpoint_completion_target: 0.9
        
        # Logging
        logging_collector: "on"
        log_directory: "log"
        log_filename: "postgresql-%Y-%m-%d_%H%M%S.log"
        log_line_prefix: "%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h "
        log_checkpoints: "on"
        log_connections: "on"
        log_disconnections: "on"
        log_min_duration_statement: 1000
        
        # Extensions
        shared_preload_libraries: "pg_stat_statements"
  
  initdb:
    - encoding: UTF8
    - locale: en_US.UTF-8
    - data-checksums
  
  pg_hba:
    - local all all peer
    - host replication replicator 10.0.1.11/32 scram-sha-256
    - host replication replicator 10.0.1.12/32 scram-sha-256
    - host replication replicator 10.0.1.13/32 scram-sha-256
    - host all all 10.0.1.0/24 scram-sha-256
    - hostssl all all 0.0.0.0/0 scram-sha-256
  
  users:
    admin:
      password: ${ADMIN_PASSWORD}
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
      password: ${REPLICATION_PASSWORD}
    superuser:
      username: postgres
      password: ${POSTGRES_PASSWORD}
  
  parameters:
    unix_socket_directories: "/var/run/postgresql"
  
  callbacks:
    on_role_change: /etc/patroni/scripts/on_role_change.sh
    on_start: /etc/patroni/scripts/on_start.sh
    on_stop: /etc/patroni/scripts/on_stop.sh

tags:
  nofailover: false
  noloadbalance: false
  clonefrom: false
  nosync: false
  datacenter: dc1
  environment: production
  failover_priority: 100

watchdog:
  mode: automatic
  device: /dev/watchdog
  safety_margin: 5
</code></pre><h3 id="102-environment-variables">10.2. Environment variables</h3><pre><code class="language-bash"># /etc/patroni/patroni.env
export PATRONI_RESTAPI_PASSWORD="secure_api_password"
export ADMIN_PASSWORD="secure_admin_password"
export REPLICATION_PASSWORD="secure_replication_password"
export POSTGRES_PASSWORD="secure_postgres_password"
</code></pre><p><strong>Load in systemd</strong>:</p><pre><code class="language-ini">[Service]
EnvironmentFile=/etc/patroni/patroni.env
</code></pre><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11. Tổng kết</h2><h3 id="key-takeaways">Key Takeaways</h3><p>✅&nbsp;<strong>Configuration layers</strong>: Command line &gt; Env &gt; Config file &gt; DCS</p><p>✅&nbsp;<strong>Static config</strong>: Node-specific, requires restart</p><p>✅&nbsp;<strong>Dynamic config</strong>: Cluster-wide, update via&nbsp;<code>patronictl edit-config</code></p><p>✅&nbsp;<strong>Bootstrap</strong>: One-time initialization settings</p><p>✅&nbsp;<strong>Tags</strong>: Control failover behavior và node roles</p><p>✅&nbsp;<strong>Sync replication</strong>: Balance between durability và availability</p><h3 id="best-practices-checklist">Best Practices Checklist</h3><ul><li>&nbsp;Use environment variables cho passwords</li><li>&nbsp;Enable&nbsp;<code>use_pg_rewind</code>&nbsp;với&nbsp;<code>wal_log_hints: on</code></li><li>&nbsp;Set appropriate&nbsp;<code>ttl</code>,&nbsp;<code>loop_wait</code>,&nbsp;<code>retry_timeout</code></li><li>&nbsp;Configure&nbsp;<code>maximum_lag_on_failover</code>&nbsp;for zero data loss</li><li>&nbsp;Use&nbsp;<code>data-checksums</code>&nbsp;trong initdb</li><li>&nbsp;Set up callback scripts cho notifications</li><li>&nbsp;Configure watchdog cho split-brain prevention</li><li>&nbsp;Use&nbsp;<code>scram-sha-256</code>&nbsp;authentication</li><li>&nbsp;Document custom tags và their meanings</li><li>&nbsp;Regular backup of configuration files</li></ul><h3 id="chu%E1%BA%A9n-b%E1%BB%8B-cho-b%C3%A0i-9">Chuẩn bị cho Bài 9</h3><p>Bài 9 sẽ bootstrap cluster lần đầu với configuration đã chuẩn bị:</p><ul><li>Start Patroni trên 3 nodes</li><li>Verify cluster formation</li><li>Test basic operations</li><li>Troubleshoot common issues</li></ul>
