---
id: 019e1a00-aa01-7001-c001-k8sha000402
title: 'BÀI 17: DEPLOY CLOUDNATIVEPG OPERATOR VÀ POSTGRESQL CLUSTER'
slug: bai-17-deploy-cloudnativepg-operator-va-postgresql-cluster
description: >-
  Cài đặt CloudNativePG Operator, tạo PostgreSQL cluster 3
  instances với Ceph storage, PgBouncer connection pooling,
  custom configuration và verify HA.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: 'Phần 4: PostgreSQL HA với Patroni & CloudNativePG'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6364" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6364)"/>

  <!-- Decorations -->
  <g>
    <circle cx="634" cy="252" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="668" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="702" cy="140" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="736" cy="214" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="770" cy="288" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="232" x2="1100" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="262" x2="1050" y2="332" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.3826859021799,168.5 1005.3826859021799,195.5 982,209 958.6173140978201,195.5 958.6173140978201,168.5 982,155" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Bài 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 17: DEPLOY CLOUDNATIVEPG OPERATOR VÀ</tspan>
      <tspan x="60" dy="42">POSTGRESQL CLUSTER</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: PostgreSQL HA với Patroni &amp; CloudNativePG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Cài đặt CloudNativePG Operator</li>
<li>✅ Tạo PostgreSQL cluster 3 instances</li>
<li>✅ Cấu hình PgBouncer connection pooling</li>
<li>✅ Custom postgresql.conf parameters</li>
<li>✅ Verify replication và connectivity</li>
</ul>

<hr>

<h2 id="phan-1-install-operator">PHẦN 1: CÀI ĐẶT CLOUDNATIVEPG OPERATOR</h2>

<h3 id="11-helm-install">1.1. Helm Install</h3>
<pre><code class="language-bash"># Add CloudNativePG Helm repo:
helm repo add cnpg https://cloudnative-pg.github.io/charts
helm repo update

# Install operator:
helm install cnpg cnpg/cloudnative-pg \
  --namespace cnpg-system \
  --create-namespace \
  --version 0.22.1 \
  --set monitoring.podMonitorEnabled=true

# Verify:
kubectl -n cnpg-system get pods
# NAME                                     READY   STATUS    RESTARTS   AGE
# cnpg-cloudnative-pg-xxxxx-xxxxx          1/1     Running   0          30s

# Verify CRDs:
kubectl get crd | grep cnpg
# backups.postgresql.cnpg.io
# clusters.postgresql.cnpg.io
# poolers.postgresql.cnpg.io
# scheduledbackups.postgresql.cnpg.io
</code></pre>

<hr>

<h2 id="phan-2-create-cluster">PHẦN 2: TẠO POSTGRESQL CLUSTER</h2>

<h3 id="21-cluster-crd">2.1. Cluster CRD</h3>
<pre><code class="language-yaml"># pg-cluster.yaml:
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: production-pg
  namespace: database
spec:
  instances: 3                           # 1 Primary + 2 Standbys
  
  imageName: ghcr.io/cloudnative-pg/postgresql:16.4
  
  # PostgreSQL configuration:
  postgresql:
    parameters:
      # Memory:
      shared_buffers: "1GB"
      effective_cache_size: "3GB"
      work_mem: "64MB"
      maintenance_work_mem: "256MB"
      
      # WAL:
      wal_buffers: "64MB"
      min_wal_size: "1GB"
      max_wal_size: "4GB"
      checkpoint_completion_target: "0.9"
      
      # Replication:
      max_connections: "200"
      max_replication_slots: "10"
      max_wal_senders: "10"
      
      # Performance (SSD):
      random_page_cost: "1.1"
      effective_io_concurrency: "200"
      
      # Logging:
      log_min_duration_statement: "1000"    # Log queries > 1s
      log_checkpoints: "on"
      log_connections: "on"
      log_disconnections: "on"
      log_lock_waits: "on"
      log_temp_files: "0"
      
      # Security:
      password_encryption: "scram-sha-256"
    
    pg_hba:
      - host all all 10.244.0.0/16 scram-sha-256    # Pod network
      - host all all 10.96.0.0/12 scram-sha-256      # Service network
  
  # Storage:
  storage:
    storageClass: ceph-block
    size: 50Gi
  
  walStorage:
    storageClass: ceph-block
    size: 10Gi
  
  # Resources:
  resources:
    requests:
      cpu: "1"
      memory: "4Gi"
    limits:
      cpu: "4"
      memory: "8Gi"
  
  # Affinity — spread across nodes:
  affinity:
    enablePodAntiAffinity: true
    topologyKey: kubernetes.io/hostname
  
  # Monitoring:
  monitoring:
    enablePodMonitor: true
  
  # Superuser secret:
  superuserSecret:
    name: pg-superuser-secret
  
  # Bootstrap (tạo DB và user):
  bootstrap:
    initdb:
      database: appdb
      owner: appuser
      secret:
        name: pg-app-secret
      postInitSQL:
        - CREATE EXTENSION IF NOT EXISTS pg_stat_statements
        - CREATE EXTENSION IF NOT EXISTS pgcrypto
</code></pre>

<h3 id="22-secrets">2.2. Tạo Secrets</h3>
<pre><code class="language-bash"># Tạo namespace:
kubectl create namespace database

# Superuser secret:
kubectl -n database create secret generic pg-superuser-secret \
  --from-literal=username=postgres \
  --from-literal=password="$(openssl rand -base64 24)"

# App user secret:
kubectl -n database create secret generic pg-app-secret \
  --from-literal=username=appuser \
  --from-literal=password="$(openssl rand -base64 24)"
</code></pre>

<h3 id="23-deploy-cluster">2.3. Deploy Cluster</h3>
<pre><code class="language-bash">kubectl apply -f pg-cluster.yaml

# Monitor deployment:
kubectl -n database get pods -w
# NAME               READY   STATUS    RESTARTS   AGE
# production-pg-1    1/1     Running   0          2m    ← Primary
# production-pg-2    1/1     Running   0          90s   ← Standby
# production-pg-3    1/1     Running   0          60s   ← Standby

# Check cluster status:
kubectl -n database get cluster production-pg
# NAME            AGE   INSTANCES   READY   STATUS                  PRIMARY
# production-pg   5m    3           3       Cluster in healthy state production-pg-1
</code></pre>

<hr>

<h2 id="phan-3-verify-replication">PHẦN 3: VERIFY REPLICATION</h2>

<h3 id="31-check-replication-status">3.1. Check Replication Status</h3>
<pre><code class="language-bash"># Dùng cnpg plugin:
kubectl cnpg status production-pg -n database
# Cluster Summary:
# Name:              production-pg
# Namespace:         database
# PostgreSQL:        16.4
# Primary instance:  production-pg-1
# Status:            Cluster in healthy state
# Instances:         3
# Ready instances:   3
#
# Instances status:
# Name               Database Size  Current LSN  Rep role   Status  Node
# ----               -------------  -----------  --------   ------  ----
# production-pg-1    25 MB          0/5000060    Primary    OK      worker1
# production-pg-2    25 MB          0/5000060    Standby    OK      worker2
# production-pg-3    25 MB          0/5000060    Standby    OK      worker3

# Verify replication on Primary:
kubectl -n database exec production-pg-1 -- psql -U postgres -c \
  "SELECT * FROM pg_stat_replication;"
# pid  | usename  | application_name | client_addr    | state     | sync_state
# -----+----------+------------------+----------------+-----------+-----------
# 1234 | postgres | production-pg-2  | 10.244.2.5     | streaming | async
# 1235 | postgres | production-pg-3  | 10.244.3.5     | streaming | async
</code></pre>

<h3 id="32-test-data-replication">3.2. Test Data Replication</h3>
<pre><code class="language-bash"># Write on Primary:
kubectl -n database exec production-pg-1 -- psql -U appuser -d appdb -c \
  "CREATE TABLE test (id serial PRIMARY KEY, data text, created_at timestamp DEFAULT now());
   INSERT INTO test (data) VALUES ('hello from primary');"

# Read on Standby:
kubectl -n database exec production-pg-2 -- psql -U appuser -d appdb -c \
  "SELECT * FROM test;"
# id |        data        |         created_at
# ---+--------------------+----------------------------
#  1 | hello from primary | 2025-04-02 07:00:00.123456
# ✅ Data replicated!
</code></pre>

<hr>

<h2 id="phan-4-services">PHẦN 4: SERVICES</h2>

<pre><code class="language-bash"># CloudNativePG tự tạo Services:
kubectl -n database get svc
# NAME                  TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)
# production-pg-rw      ClusterIP   10.96.xxx.xx    &lt;none&gt;        5432/TCP   ← Primary (read-write)
# production-pg-ro      ClusterIP   10.96.xxx.xx    &lt;none&gt;        5432/TCP   ← Standbys (read-only)
# production-pg-r       ClusterIP   10.96.xxx.xx    &lt;none&gt;        5432/TCP   ← Any (read)

# Connection strings:
# Write: postgresql://appuser:PASSWORD@production-pg-rw.database:5432/appdb
# Read:  postgresql://appuser:PASSWORD@production-pg-ro.database:5432/appdb
</code></pre>

<hr>

<h2 id="phan-5-pgbouncer">PHẦN 5: PGBOUNCER CONNECTION POOLING</h2>

<pre><code class="language-yaml"># pgbouncer.yaml:
apiVersion: postgresql.cnpg.io/v1
kind: Pooler
metadata:
  name: production-pg-pooler-rw
  namespace: database
spec:
  cluster:
    name: production-pg
  instances: 2                          # 2 PgBouncer pods
  type: rw                              # read-write pooler
  pgbouncer:
    poolMode: transaction               # Transaction pooling
    parameters:
      max_client_conn: "1000"
      default_pool_size: "50"
      min_pool_size: "10"
      reserve_pool_size: "10"
      reserve_pool_timeout: "5"
      max_db_connections: "100"
      max_user_connections: "100"
      server_reset_query: "DISCARD ALL"
      log_connections: "1"
      log_disconnections: "1"
      stats_period: "60"

---
apiVersion: postgresql.cnpg.io/v1
kind: Pooler
metadata:
  name: production-pg-pooler-ro
  namespace: database
spec:
  cluster:
    name: production-pg
  instances: 2
  type: ro                              # read-only pooler
  pgbouncer:
    poolMode: transaction
    parameters:
      max_client_conn: "2000"
      default_pool_size: "100"
</code></pre>

<pre><code class="language-bash">kubectl apply -f pgbouncer.yaml

# Verify PgBouncer pods:
kubectl -n database get pods -l cnpg.io/poolerName
# NAME                                           READY   STATUS
# production-pg-pooler-rw-xxxxx-xxxxx            1/1     Running
# production-pg-pooler-rw-xxxxx-xxxxx            1/1     Running
# production-pg-pooler-ro-xxxxx-xxxxx            1/1     Running
# production-pg-pooler-ro-xxxxx-xxxxx            1/1     Running

# Connection strings via PgBouncer:
# Write: production-pg-pooler-rw.database:5432
# Read:  production-pg-pooler-ro.database:5432
</code></pre>

<hr>

<h2 id="phan-6-test-connectivity">PHẦN 6: TEST CONNECTIVITY</h2>

<pre><code class="language-bash"># Deploy psql client pod:
kubectl -n database run pg-client --rm -it --image=postgres:16-alpine -- bash

# Connect via rw service:
psql "host=production-pg-rw.database dbname=appdb user=appuser"
# appdb=> \conninfo
# You are connected to database "appdb" as user "appuser"

# Connect via PgBouncer:
psql "host=production-pg-pooler-rw.database dbname=appdb user=appuser"
# appdb=>

# Test write → read:
# On rw: INSERT INTO test (data) VALUES ('via pgbouncer');
# On ro: SELECT * FROM test;
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>CloudNativePG operator</strong>: single CRD tạo complete PG HA cluster</li>
<li><strong>3 instances</strong>: 1 primary + 2 standby, anti-affinity spread across nodes</li>
<li><strong>Ceph RBD</strong> cho storage + separate WAL storage cho performance</li>
<li><strong>3 services</strong>: rw (primary), ro (standbys), r (any)</li>
<li><strong>PgBouncer Pooler</strong>: transaction pooling, 50 real connections serve 1000 clients</li>
<li><strong>postInitSQL</strong>: auto-create extensions, users, schemas tại bootstrap</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Deploy PostgreSQL HA</h3>
<ul>
<li>Install CloudNativePG Operator</li>
<li>Create 3-instance cluster với Ceph storage</li>
<li>Verify replication với pg_stat_replication</li>
</ul>

<h3 id="bt2">Bài tập 2: PgBouncer</h3>
<ul>
<li>Deploy PgBouncer Pooler (rw + ro)</li>
<li>Connect qua PgBouncer, verify query routing</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 18: PostgreSQL Backup, PITR và Disaster Recovery</strong>, chúng ta sẽ setup automated backup và point-in-time recovery.</p>
