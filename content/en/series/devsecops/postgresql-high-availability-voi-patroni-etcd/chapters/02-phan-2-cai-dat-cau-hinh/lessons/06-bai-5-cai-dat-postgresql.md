---
id: 019c9617-fb6d-73ff-ab92-84838b979806
title: 'Lesson 5: Install PostgreSQL'
slug: bai-5-cai-dat-postgresql
description: Install PostgreSQL from package repository or source, configure postgresql.conf and pg_hba.conf on all 3 nodes in the cluster.
duration_minutes: 110
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 2: Installation & Configuration'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability with Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-843" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-843)"/>

  <!-- Decorations -->
  <g>
    <circle cx="945" cy="125" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="790" cy="70" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="635" cy="275" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="980" cy="220" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="825" cy="165" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="235" x2="1100" y2="315" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="265" x2="1050" y2="335" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1060.9807621135333,220 1060.9807621135333,250 1035,265 1009.0192378864668,250 1009.0192378864668,220 1035,205" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 5: Installing PostgreSQL</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability with Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Installation &amp; Configuration</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">Aim_</h2><p>After this lesson, you will:</p><ul><li>Install PostgreSQL from package repository_</li><li>Understand how to install PostgreSQL from source (optional)</li><li>Configuration&nbsp;<code>postgresql.conf</code>&nbsp;Basic for HA</li><li>Understand about&nbsp;<code>pg_hba.conf</code>&nbsp;and authentication</li><li>Preparing PostgreSQL on 3 nodes for Patroni cluster_</li></ul><h2 id="1-c%C3%A0i-%C4%91%E1%BA%B7t-postgresql-t%E1%BB%AB-package-repository">1. Install PostgreSQL from Package Repository</h2><h3 id="11-chu%E1%BA%A9n-b%E1%BB%8B">1.1. Preparation</h3><p>Before installing PostgreSQL, you need to setup the official PostgreSQL repository package (PGDG - PostgreSQL Global Development Group).</p><p><strong>Advantages of PGDG repository</strong>:</p><ul><li>✅ Latest PostgreSQL version</li><li>✅ Quick security updates_</li><li>✅ Many extensions available available</li><li>✅ Support many distros</li></ul><h3 id="12-c%C3%A0i-%C4%91%E1%BA%B7t-tr%C3%AAn-ubuntudebian">1.2. Install on Ubuntu/Debian</h3><h4 id="b%C6%B0%E1%BB%9Bc-1-th%C3%AAm-pgdg-repository">Step 1: Add PGDG repository</h4><pre><code class="language-bash"># Import repository signing key
sudo apt install -y wget gnupg2

sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" &gt; /etc/apt/sources.list.d/pgdg.list'

wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# Update package list
sudo apt update
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-2-c%C3%A0i-%C4%91%E1%BA%B7t-postgresql">Step 2: Install PostgreSQL</h4><pre><code class="language-bash"># Cài PostgreSQL 18 (khuyến nghị cho production)
sudo apt install -y postgresql-18 postgresql-contrib-15 postgresql-server-dev-15

# Kiểm tra version
psql --version
# Output: psql (PostgreSQL) 15.5
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-3-ki%E1%BB%83m-tra-service">Step 3: Test service</h4><pre><code class="language-bash"># Kiểm tra status
sudo systemctl status postgresql

# Output:
# ● postgresql.service - PostgreSQL RDBMS
#      Loaded: loaded (/lib/systemd/system/postgresql.service; enabled)
#      Active: active (exited) since ...
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-4-d%E1%BB%ABng-v%C3%A0-disable-postgresql-default-cluster">Step 4: Stop and disable PostgreSQL default cluster</h4><pre><code class="language-bash"># Patroni sẽ quản lý PostgreSQL, nên ta disable service mặc định
sudo systemctl stop postgresql
sudo systemctl disable postgresql

# Xóa cluster mặc định (Patroni sẽ tạo cluster mới)
sudo pg_dropcluster 15 main --stop

# Kiểm tra
pg_lsclusters
# Output: (empty - no clusters)
</code></pre><h3 id="13-c%C3%A0i-%C4%91%E1%BA%B7t-tr%C3%AAn-centosrhelrocky-linux">1.3. Install on CentOS/RHEL/Rocky Linux</h3><h4 id="b%C6%B0%E1%BB%9Bc-1-th%C3%AAm-pgdg-repository-1">Step 1: Add PGDG repository</h4><pre><code class="language-bash"># Cài đặt EPEL (Extra Packages for Enterprise Linux)
sudo dnf install -y epel-release

# Thêm PostgreSQL 18 repository
sudo dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm

# Disable built-in PostgreSQL module
sudo dnf -qy module disable postgresql
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-2-c%C3%A0i-%C4%91%E1%BA%B7t-postgresql-1">Step 2: Install PostgreSQL_</h4><pre><code class="language-bash"># Cài PostgreSQL 18
sudo dnf install -y postgresql15-server postgresql15-contrib postgresql15-devel

# Kiểm tra
/usr/pgsql-15/bin/postgres --version
# Output: postgres (PostgreSQL) 15.5
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-3-t%E1%BA%A1o-symlink-optional-nh%C6%B0ng-ti%E1%BB%87n">Step 3: Create symlink (optional but convenient)</h4><pre><code class="language-bash"># Tạo symlink cho các binary vào PATH
sudo alternatives --install /usr/bin/psql psql /usr/pgsql-15/bin/psql 1
sudo alternatives --install /usr/bin/pg_config pg_config /usr/pgsql-15/bin/pg_config 1
sudo alternatives --install /usr/bin/pg_basebackup pg_basebackup /usr/pgsql-15/bin/pg_basebackup 1
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-4-kh%C3%B4ng-kh%E1%BB%9Fi-t%E1%BA%A1o-database-patroni-s%E1%BA%BD-l%C3%A0m">Step 4: Do not initialize the database (Patroni will do it)</h4><pre><code class="language-bash"># KHÔNG chạy:
# sudo /usr/pgsql-15/bin/postgresql-18-setup initdb

# KHÔNG enable service:
# sudo systemctl enable postgresql-18
</code></pre><h2 id="2-c%C3%A0i-%C4%91%E1%BA%B7t-postgresql-t%E1%BB%AB-source-optionaladvanced">2. Installing PostgreSQL from Source (Optional - Advanced)</h2><p>Installing from source allows custom compile options, but is more complicated and difficult to maintain.</p><h3 id="21-khi-n%C3%A0o-c%E1%BA%A7n-c%C3%A0i-t%E1%BB%AB-source">2.1. When do you need to install from source?</h3><ul><li>🔧 Need custom features that are not in the binary package</li><li>🔧 Testing with development version</li><li>🔧 Optimized for hardware can</li><li>🔧 Apply custom patches</li></ul><h3 id="22-quy-tr%C3%ACnh-c%C3%A0i-t%E1%BB%AB-source">2.2. Installation process from source</h3><h4 id="b%C6%B0%E1%BB%9Bc-1-c%C3%A0i-dependencies">Step 1: Install dependencies</h4><pre><code class="language-bash"># Ubuntu/Debian
sudo apt install -y build-essential libreadline-dev zlib1g-dev \
  flex bison libxml2-dev libxslt-dev libssl-dev libxml2-utils \
  xsltproc libkrb5-dev libldap2-dev libpam0g-dev libperl-dev \
  python3-dev tcl-dev libsystemd-dev

# CentOS/RHEL
sudo dnf install -y gcc make readline-devel zlib-devel openssl-devel \
  libxml2-devel libxslt-devel systemd-devel perl-ExtUtils-Embed \
  python3-devel
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-2-download-source">Step 2: Download source</h4><pre><code class="language-bash">cd /usr/local/src
sudo wget https://ftp.postgresql.org/pub/source/v15.5/postgresql-18.5.tar.gz
sudo tar -xzf postgresql-18.5.tar.gz
cd postgresql-18.5
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-3-configure-v%C3%A0-compile">Step 3: Configure and compile</h4><pre><code class="language-bash"># Configure với options
sudo ./configure \
  --prefix=/usr/local/pgsql-15 \
  --with-openssl \
  --with-libxml \
  --with-systemd \
  --with-readline \
  --enable-nls

# Compile (sử dụng nhiều cores)
sudo make -j$(nproc)

# Chạy tests (optional)
sudo make check

# Install
sudo make install

# Install contrib modules
cd contrib
sudo make install
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-4-setup-environment">Step 4: Setup environment</h4><pre><code class="language-bash"># Thêm vào ~/.bashrc
export PATH=/usr/local/pgsql-15/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/pgsql-15/lib:$LD_LIBRARY_PATH

source ~/.bashrc
</code></pre><p><strong>Note</strong>: Installing from source does not automatically have a systemd service, it needs to be created manually.</p><h2 id="3-c%E1%BA%A5u-h%C3%ACnh-postgresqlconf-c%C6%A1-b%E1%BA%A3n">3. Basic postgresql.conf configuration</h2><p>Patroni will manage most of the PostgreSQL configuration through DCS. However, it is important to understand the important parameters.</p><h3 id="31-c%E1%BA%A5u-tr%C3%BAc-file-postgresqlconf">3.1. File structure postgresql.conf</h3><pre><code class="language-conf"># /etc/postgresql/18/main/postgresql.conf
# hoặc: /var/lib/pgsql/15/data/postgresql.conf

#------------------------------------------------------------------------------
# FILE LOCATIONS
#------------------------------------------------------------------------------
data_directory = '/var/lib/postgresql/18/main'
hba_file = '/etc/postgresql/18/main/pg_hba.conf'
ident_file = '/etc/postgresql/18/main/pg_ident.conf'

#------------------------------------------------------------------------------
# CONNECTIONS AND AUTHENTICATION
#------------------------------------------------------------------------------
listen_addresses = '*'          # Lắng nghe trên tất cả interfaces
port = 5432
max_connections = 100           # Số connections tối đa
</code></pre><h3 id="32-parameters-quan-tr%E1%BB%8Dng-cho-ha">3.2. Important Parameters for HA</h3><h4 id="replication-settings">Replication Settings_</h4><pre><code class="language-conf">#------------------------------------------------------------------------------
# WRITE-AHEAD LOG (WAL)
#------------------------------------------------------------------------------
wal_level = replica              # Mức độ thông tin trong WAL
                                 # minimal, replica, hoặc logical

fsync = on                       # Đảm bảo WAL được flush to disk
synchronous_commit = on          # Wait cho WAL write confirmation

wal_log_hints = on              # Cần cho pg_rewind

#------------------------------------------------------------------------------
# REPLICATION
#------------------------------------------------------------------------------
max_wal_senders = 10            # Số standby servers tối đa
max_replication_slots = 10      # Số replication slots

# WAL keep settings
wal_keep_size = 1GB             # Giữ ít nhất 1GB WAL files
                                # (PG 13+, thay thế wal_keep_segments)

# Archive settings (để PITR)
archive_mode = on
archive_command = 'cp %p /var/lib/postgresql/18/archive/%f'
archive_timeout = 300           # Archive mỗi 5 phút
</code></pre><h4 id="memory-settings">Memory Settings</h4><pre><code class="language-conf">#------------------------------------------------------------------------------
# RESOURCE USAGE (MEMORY)
#------------------------------------------------------------------------------
shared_buffers = 2GB            # RAM dành cho PostgreSQL cache
                                # Khuyến nghị: 25% của RAM

effective_cache_size = 6GB      # Ước tính tổng cache (OS + PG)
                                # Khuyến nghị: 50-75% của RAM

work_mem = 16MB                 # RAM cho mỗi query operation
                                # Tổng có thể dùng: work_mem × max_connections

maintenance_work_mem = 512MB    # RAM cho maintenance operations
                                # (VACUUM, CREATE INDEX, etc.)
</code></pre><h4 id="checkpoint-settings">Checkpoint Settings_</h4><pre><code class="language-conf">#------------------------------------------------------------------------------
# WRITE-AHEAD LOG (Checkpoints)
#------------------------------------------------------------------------------
checkpoint_timeout = 10min      # Tần suất checkpoint tối đa
max_wal_size = 2GB             # WAL size trigger checkpoint
min_wal_size = 1GB             # Giữ ít nhất 1GB WAL

checkpoint_completion_target = 0.9  # Spread checkpoint I/O
                                    # (90% của checkpoint_timeout)
</code></pre><h4 id="logging-settings">Logging Settings</h4><pre><code class="language-conf">#------------------------------------------------------------------------------
# REPORTING AND LOGGING
#------------------------------------------------------------------------------
log_destination = 'stderr'
logging_collector = on

log_directory = 'log'
log_filename = 'postgresql-%Y-%m-%d_%H%M%S.log'
log_rotation_age = 1d
log_rotation_size = 100MB

log_line_prefix = '%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h '
log_timezone = 'UTC'

# Log slow queries
log_min_duration_statement = 1000  # Log queries &gt; 1 second

# Log connections/disconnections
log_connections = on
log_disconnections = on

# Log checkpoints (useful for tuning)
log_checkpoints = on
</code></pre><h3 id="33-patroni-s%E1%BA%BD-override-c%C3%A1c-settings">3.3. Patroni will override the settings</h3><p>Patroni manages the following parameters through DCS,&nbsp;<strong>NO</strong>&nbsp;should be set in postgresql.conf:</p><pre><code class="language-conf"># ❌ KHÔNG set trong postgresql.conf khi dùng Patroni
# hot_standby = on
# primary_conninfo = '...'
# restore_command = '...'
# recovery_target_timeline = 'latest'
</code></pre><p>Patroni will automatically set them in&nbsp;<code>postgresql.auto.conf</code>.</p><h2 id="4-hi%E1%BB%83u-v%E1%BB%81-pghbaconf">4. Understand pg_hba.conf</h2><p><code>pg_hba.conf</code>&nbsp;(Host-Based Authentication) controls client authentication.</p><h3 id="41-c%E1%BA%A5u-tr%C3%BAc-c%E1%BB%A7a-pghbaconf">4.1. Structure of pg_hba.conf_</h3><pre><code class="language-conf"># TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     peer

# IPv4 local connections:
host    all             all             127.0.0.1/32            scram-sha-256

# IPv4 connections from anywhere (for replication)
host    all             all             0.0.0.0/0               scram-sha-256

# Replication connections
host    replication     replicator      10.0.1.0/24             scram-sha-256
</code></pre><h3 id="42-c%C3%A1c-columns">4.2. Columns_</h3><ol><li><strong>TYPE</strong>:_<ul><li><code>local</code>: Unix socket connections</li><li><code>host</code>: TCP/IP (clear text or SSL)</li><li><code>hostssl</code>: TCP/IP with SSL only</li><li><code>hostnossl</code>: TCP/IP without SSL</li></ul></li><li><strong>DATABASE</strong>:_<ul><li>Database name</li><li><code>all</code>: all databases</li><li><code>replication</code>: replication connections</li></ul></li><li><strong>USER___HTMLTAG_232__ _:<ul><li>Username</li><li><code>all</code>: all users</li></ul></li><li><strong>ADDRESS</strong>:_<ul><li>IP/netmask:&nbsp ;<code>10.0.1.0/24</code></li><li>Hostname</li><li><code>0.0.0.0/0</code>: anywhere (not recommended)</li></ul></li><li><strong>METHOD</strong>:<ul><li><code>_trust</code>: Not needed password (local dev only)</li><li><code>md5</code>: MD5 hashed password (deprecated)</li><li><code>scram-sha-256</code>: Modern, secure (recommended)</li><li><code>peer</code>: Unix username = PostgreSQL username_</li><li><code>cert</code>: SSL certificate authentication</li></ul></li></ol><h3 id="43-pghbaconf-cho-patroni-cluster">4.3. pg_hba.conf for Patroni Cluster</h3><pre><code class="language-conf"># /etc/postgresql/18/main/pg_hba.conf

# Local connections
local   all             postgres                                peer
local   all             all                                     md5

# Localhost
host    all             all             127.0.0.1/32            scram-sha-256
host    all             all             ::1/128                 scram-sha-256

# Application connections
host    all             app_user        10.0.1.0/24             scram-sha-256

# Patroni REST API health checks (optional database connection)
host    postgres        patroni_user    10.0.1.0/24             scram-sha-256

# Replication connections (Patroni nodes)
host    replication     replicator      10.0.1.11/32            scram-sha-256
host    replication     replicator      10.0.1.12/32            scram-sha-256
host    replication     replicator      10.0.1.13/32            scram-sha-256

# Monitoring connections (Prometheus exporter)
host    postgres        exporter        10.0.1.0/24             scram-sha-256
</code></pre><h3 id="44-best-practices-cho-pghbaconf">4.4. Best practices for pg_hba.conf</h3><p>✅&nbsp;<strong>Specific is better</strong>: Do not use&nbsp;<code>0.0.0.0/0</code>&nbsp;otherwise need</p><p>✅&nbsp;<strong>Use scram-sha-256</strong>: Modern authentication method</p><p>✅&nbsp;<strong>Separate users</strong>: Different users for app, replication, monitoring</p><p>✅&nbsp;<strong>Document</strong>: Comment for each rule</p><p>✅&nbsp;<strong>Restrict replication</strong>: Allow only replication user from IP of Patroni nodes</p><p>❌&nbsp;<strong>Avoid trust method</strong>: Even in dev environment</p><h2 id="5-t%E1%BA%A1o-users-v%C3%A0-databases-c%E1%BA%A7n-thi%E1%BA%BFt">5. Create necessary users and databases</h2><h3 id="51-t%E1%BA%A1o-replication-user">5.1. Create replication user</h3><pre><code class="language-bash"># Sau khi Patroni bootstrap cluster, connect đến primary:
sudo -u postgres psql -h localhost -p 5432

# Trong psql:
CREATE ROLE replicator WITH REPLICATION LOGIN ENCRYPTED PASSWORD 'your_strong_password';

# Kiểm tra
\du replicator
</code></pre><h3 id="52-t%E1%BA%A1o-patroni-monitoring-user">5.2. Create Patroni monitoring user</h3><pre><code class="language-sql">-- User cho Patroni health checks
CREATE USER patroni_user WITH ENCRYPTED PASSWORD 'patroni_password';
GRANT CONNECT ON DATABASE postgres TO patroni_user;
</code></pre><h3 id="53-t%E1%BA%A1o-application-database-v%C3%A0-user">5.3. Create application database and user</h3><pre><code class="language-sql">-- Tạo database
CREATE DATABASE myapp;

-- Tạo user
CREATE USER app_user WITH ENCRYPTED PASSWORD 'app_password';

-- Grant permissions
GRANT ALL PRIVILEGES ON DATABASE myapp TO app_user;

-- Connect to myapp database
\c myapp

-- Grant schema permissions
GRANT ALL ON SCHEMA public TO app_user;
</code></pre><h2 id="6-lab-c%C3%A0i-%C4%91%E1%BA%B7t-postgresql-tr%C3%AAn-3-nodes">6. Lab: Install PostgreSQL on 3 nodes</h2><h3 id="61-m%C3%B4i-tr%C6%B0%E1%BB%9Dng-lab">6.1. Lab Environment</h3><pre><code>node1 (pg-node1): 10.0.1.11  - Primary (sau khi bootstrap)
node2 (pg-node2): 10.0.1.12  - Replica
node3 (pg-node3): 10.0.1.13  - Replica
</code></pre><h3 id="62-th%E1%BB%B1c-hi%E1%BB%87n-tr%C3%AAn-t%E1%BA%A5t-c%E1%BA%A3-3-nodes">6.2. Execute on ALL 3 nodes</h3><h4 id="b%C6%B0%E1%BB%9Bc-1-update-system">Step 1: Update system</h4><pre><code class="language-bash">sudo apt update &amp;&amp; sudo apt upgrade -y
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-2-c%C3%A0i-postgresql-18">Step 2: Install PostgreSQL 18</h4><pre><code class="language-bash"># Thêm repo
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" &gt; /etc/apt/sources.list.d/pgdg.list'

wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

sudo apt update

# Cài đặt
sudo apt install -y postgresql-18 postgresql-contrib-15 postgresql-server-dev-15
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-3-stop-v%C3%A0-disable-default-cluster">Step 3: Stop and disable default cluster</h4><pre><code class="language-bash">sudo systemctl stop postgresql
sudo systemctl disable postgresql

sudo pg_dropcluster 15 main --stop

# Verify
pg_lsclusters
# Output: (should be empty)
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-4-t%E1%BA%A1o-th%C6%B0-m%E1%BB%A5c-cho-postgresql-data">Step 4: Create directory for PostgreSQL data</h4><pre><code class="language-bash"># Patroni sẽ quản lý data directory, nhưng ta tạo structure
sudo mkdir -p /var/lib/postgresql/18/data
sudo mkdir -p /var/lib/postgresql/18/archive

sudo chown -R postgres:postgres /var/lib/postgresql
sudo chmod 700 /var/lib/postgresql/18/data
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-5-ki%E1%BB%83m-tra-postgresql-binary">Step 5: Test PostgreSQL binary</h4><pre><code class="language-bash"># Kiểm tra version
postgres --version
# Output: postgres (PostgreSQL) 15.5

# Kiểm tra các tools
which psql pg_basebackup pg_rewind
</code></pre><h3 id="63-verify-tr%C3%AAn-m%E1%BB%97i-node">6.3. Verify on each node_</h3><pre><code class="language-bash"># Node name
hostname

# PostgreSQL version
postgres --version

# Directories
ls -ld /var/lib/postgresql/18/data
ls -ld /var/lib/postgresql/18/archive

# PostgreSQL service
systemctl status postgresql
# Output: inactive (dead) ✓
</code></pre><h3 id="64-troubleshooting">6.4. Troubleshooting_</h3><h4 id="issue-1-permission-denied-tr%C3%AAn-data-directory">Issue 1: Permission denied on data directory</h4><pre><code class="language-bash"># Fix ownership
sudo chown -R postgres:postgres /var/lib/postgresql
sudo chmod 700 /var/lib/postgresql/18/data
</code></pre><h4 id="issue-2-postgresql-service-v%E1%BA%ABn-running">_Issue 2: PostgreSQL service still running</h4><pre><code class="language-bash"># Stop forcefully
sudo systemctl stop postgresql@15-main
sudo systemctl disable postgresql@15-main

# Kill processes nếu cần
sudo pkill -9 postgres
</code></pre><h4 id="issue-3-port-5432-%C4%91%C3%A3-b%E1%BB%8B-s%E1%BB%AD-d%E1%BB%A5ng">_Issue 3: Port 5432 is already in use</h4><pre><code class="language-bash"># Kiểm tra process sử dụng port
sudo lsof -i :5432

# Hoặc
sudo netstat -tlnp | grep 5432
</code></pre><h2 id="7-t%E1%BB%95ng-k%E1%BA%BFt">7. Summary</h2><h3 id="key-takeaways">Key Takeaways</h3><p>✅&nbsp;<strong>Package repository__HTMLTAG_355___: Install PostgreSQL from PGDG repo to get the new version most</p><p>✅&nbsp;<strong>Disable default service</strong>: Patroni will manage PostgreSQL, do not use the default systemd service define</p><p>✅&nbsp;<strong>postgresql.conf</strong>: Understand important parameters for HA and replication</p><p>✅&nbsp;<strong>pg_hba.conf</strong>: Configure authentication for connections and replication</p><p>✅&nbsp;<strong>Not initialized cluster</strong>: Patroni will automatically bootstrap the cluster</p><h3 id="checklist-sau-lab">Checklist after Lab</h3><ul><li>&nbsp;PostgreSQL 18 has been installed on all 3 nodes</li><li>&nbsp;Default cluster deleted</li><li>&nbsp;PostgreSQL service disabled</li><li>&nbsp;Data directories created with permissions correct</li><li>&nbsp;Binary paths already exist in $PATH</li></ul><h3 id="chu%E1%BA%A9n-b%E1%BB%8B-cho-b%C3%A0i-6">Preparing for Lesson 6</h3><p>The next lesson will install and configure etcd cluster - DCS layer for Patroni.</p>