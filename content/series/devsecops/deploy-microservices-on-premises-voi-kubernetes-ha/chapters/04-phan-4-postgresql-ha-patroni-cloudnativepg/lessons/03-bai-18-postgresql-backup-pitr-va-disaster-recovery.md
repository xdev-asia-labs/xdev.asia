---
id: 019e1a00-aa01-7001-c001-k8sha000403
title: 'BÀI 18: POSTGRESQL BACKUP, PITR VÀ DISASTER RECOVERY'
slug: bai-18-postgresql-backup-pitr-va-disaster-recovery
description: >-
  Automated backup với Barman/S3, ScheduledBackup CRD,
  Point-in-Time Recovery (PITR), restore cluster từ backup,
  và disaster recovery procedures.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 18
section_title: 'Phần 4: PostgreSQL HA với Patroni & CloudNativePG'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Cấu hình backup destination (S3/Ceph Object Store)</li>
<li>✅ Setup ScheduledBackup CRD cho automated backups</li>
<li>✅ Thực hành Point-in-Time Recovery (PITR)</li>
<li>✅ Restore cluster từ backup</li>
<li>✅ Disaster recovery procedures</li>
</ul>

<hr>

<h2 id="phan-1-backup-architecture">PHẦN 1: BACKUP ARCHITECTURE</h2>

<pre><code>
CloudNativePG Backup Flow:
┌──────────────────────────────────────────────────────┐
│  Kubernetes Cluster                                   │
│                                                       │
│  ┌──────────────┐     ┌──────────────────────────┐   │
│  │  Primary     │────►│  Barman Cloud Plugin      │   │
│  │  pg-1        │     │  - Base backup             │   │
│  │              │     │  - WAL archiving            │   │
│  └──────────────┘     └───────────┬──────────────┘   │
│                                   │                   │
└───────────────────────────────────┼───────────────────┘
                                    │
                                    ▼
                        ┌──────────────────────┐
                        │  Object Storage      │
                        │  - Ceph RGW (S3)     │
                        │  - MinIO             │
                        │  - AWS S3            │
                        │                      │
                        │  /base/              │
                        │    YYYYMMDDTHHMMSS/  │
                        │  /wals/              │
                        │    00000001/         │
                        └──────────────────────┘

Recovery:
- Full restore: Base backup + ALL WALs
- PITR: Base backup + WALs up to target timestamp
</code></pre>

<hr>

<h2 id="phan-2-setup-backup-s3">PHẦN 2: SETUP BACKUP DESTINATION</h2>

<h3 id="21-ceph-rgw-s3">2.1. Sử dụng Ceph RGW (S3-compatible)</h3>
<pre><code class="language-yaml"># Tạo CephObjectStore (nếu chưa có):
apiVersion: ceph.rook.io/v1
kind: CephObjectStore
metadata:
  name: pg-backup-store
  namespace: rook-ceph
spec:
  metadataPool:
    replicated:
      size: 3
  dataPool:
    replicated:
      size: 3
  gateway:
    port: 80
    instances: 2
</code></pre>

<pre><code class="language-bash"># Tạo S3 user cho backup:
kubectl -n rook-ceph exec deploy/rook-ceph-tools -- \
  radosgw-admin user create --uid=pg-backup --display-name="PG Backup"

# Tạo bucket:
# aws s3 --endpoint-url http://rook-ceph-rgw-pg-backup-store.rook-ceph mb s3://pg-backups

# Tạo secret cho backup credentials:
kubectl -n database create secret generic pg-backup-s3-creds \
  --from-literal=ACCESS_KEY_ID="<access_key>" \
  --from-literal=ACCESS_SECRET_KEY="<secret_key>"
</code></pre>

<h3 id="22-update-cluster-backup-config">2.2. Update Cluster với Backup Config</h3>
<pre><code class="language-yaml"># Thêm vào pg-cluster.yaml spec:
  backup:
    barmanObjectStore:
      destinationPath: s3://pg-backups/production-pg
      endpointURL: http://rook-ceph-rgw-pg-backup-store.rook-ceph:80
      s3Credentials:
        accessKeyId:
          name: pg-backup-s3-creds
          key: ACCESS_KEY_ID
        secretAccessKey:
          name: pg-backup-s3-creds
          key: ACCESS_SECRET_KEY
      wal:
        compression: gzip
        maxParallel: 4
      data:
        compression: gzip
        immediateCheckpoint: true
    retentionPolicy: "30d"              # Giữ backup 30 ngày
</code></pre>

<hr>

<h2 id="phan-3-scheduled-backup">PHẦN 3: SCHEDULED BACKUP</h2>

<pre><code class="language-yaml"># scheduled-backup.yaml:
apiVersion: postgresql.cnpg.io/v1
kind: ScheduledBackup
metadata:
  name: production-pg-daily-backup
  namespace: database
spec:
  schedule: "0 2 * * *"                 # Mỗi ngày lúc 2 AM
  backupOwnerReference: self
  cluster:
    name: production-pg
  immediate: true                       # Tạo backup ngay lập tức (lần đầu)
  target: prefer-standby               # Backup từ standby (giảm load primary)
</code></pre>

<pre><code class="language-bash">kubectl apply -f scheduled-backup.yaml

# Verify backup:
kubectl -n database get backup
# NAME                                    AGE   CLUSTER         METHOD   PHASE       STARTED                  COMPLETED
# production-pg-daily-backup-20250402     5m    production-pg   barman   completed   2025-04-02T02:00:00Z     2025-04-02T02:05:00Z

# Manual backup:
kubectl -n database create -f - <<'EOF'
apiVersion: postgresql.cnpg.io/v1
kind: Backup
metadata:
  name: manual-backup-$(date +%Y%m%d)
  namespace: database
spec:
  cluster:
    name: production-pg
  target: prefer-standby
EOF
</code></pre>

<hr>

<h2 id="phan-4-pitr">PHẦN 4: POINT-IN-TIME RECOVERY (PITR)</h2>

<h3 id="41-simulate-data-loss">4.1. Simulate Data Loss</h3>
<pre><code class="language-bash"># Insert important data:
kubectl -n database exec production-pg-1 -- psql -U appuser -d appdb -c \
  "INSERT INTO test (data) VALUES ('important data 1');
   INSERT INTO test (data) VALUES ('important data 2');
   INSERT INTO test (data) VALUES ('important data 3');"

# Ghi nhận timestamp TRƯỚC KHI XÓA:
RECOVERY_TARGET="2025-04-02 08:00:00"

# ⚠️ Simulate accidental delete:
kubectl -n database exec production-pg-1 -- psql -U appuser -d appdb -c \
  "DELETE FROM test;"
# DELETE 3  ← Dữ liệu bị xóa!
</code></pre>

<h3 id="42-restore-pitr">4.2. Restore với PITR</h3>
<pre><code class="language-yaml"># pitr-restore.yaml — Tạo cluster MỚI từ backup:
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: production-pg-restored
  namespace: database
spec:
  instances: 3
  imageName: ghcr.io/cloudnative-pg/postgresql:16.4
  
  storage:
    storageClass: ceph-block
    size: 50Gi
  
  bootstrap:
    recovery:
      source: production-pg-backup
      recoveryTarget:
        targetTime: "2025-04-02T08:00:00Z"     # Restore tới thời điểm TRƯỚC delete
  
  externalClusters:
    - name: production-pg-backup
      barmanObjectStore:
        destinationPath: s3://pg-backups/production-pg
        endpointURL: http://rook-ceph-rgw-pg-backup-store.rook-ceph:80
        s3Credentials:
          accessKeyId:
            name: pg-backup-s3-creds
            key: ACCESS_KEY_ID
          secretAccessKey:
            name: pg-backup-s3-creds
            key: ACCESS_SECRET_KEY
        wal:
          maxParallel: 4
</code></pre>

<pre><code class="language-bash">kubectl apply -f pitr-restore.yaml

# Monitor restore:
kubectl -n database get cluster production-pg-restored -w
# Đợi cluster healthy

# Verify data recovered:
kubectl -n database exec production-pg-restored-1 -- psql -U appuser -d appdb -c \
  "SELECT * FROM test;"
# id |        data        |         created_at
# ---+--------------------+----------------------------
#  1 | important data 1   | 2025-04-02 07:55:00
#  2 | important data 2   | 2025-04-02 07:55:01
#  3 | important data 3   | 2025-04-02 07:55:02
# ✅ Data recovered to point-in-time TRƯỚC delete!

# Switchover: đổi app connection sang cluster restored
# (hoặc rename cluster)
</code></pre>

<hr>

<h2 id="phan-5-dr-procedures">PHẦN 5: DISASTER RECOVERY PROCEDURES</h2>

<h3 id="51-full-cluster-restore">5.1. Full Cluster Restore (không PITR)</h3>
<pre><code class="language-yaml"># full-restore.yaml:
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: production-pg-dr
  namespace: database
spec:
  instances: 3
  imageName: ghcr.io/cloudnative-pg/postgresql:16.4
  storage:
    storageClass: ceph-block
    size: 50Gi
  bootstrap:
    recovery:
      source: production-pg-backup
      # Không có recoveryTarget → restore latest
  externalClusters:
    - name: production-pg-backup
      barmanObjectStore:
        destinationPath: s3://pg-backups/production-pg
        endpointURL: http://rook-ceph-rgw-pg-backup-store.rook-ceph:80
        s3Credentials:
          accessKeyId:
            name: pg-backup-s3-creds
            key: ACCESS_KEY_ID
          secretAccessKey:
            name: pg-backup-s3-creds
            key: ACCESS_SECRET_KEY
</code></pre>

<h3 id="52-verify-backup-integrity">5.2. Verify Backup Integrity</h3>
<pre><code class="language-bash"># List backups:
kubectl -n database get backup --sort-by=.status.startedAt
# NAME                                    PHASE       STARTED                  COMPLETED
# production-pg-daily-backup-20250401     completed   2025-04-01T02:00:00Z     2025-04-01T02:03:00Z
# production-pg-daily-backup-20250402     completed   2025-04-02T02:00:00Z     2025-04-02T02:04:00Z

# WAL archiving status:
kubectl -n database get cluster production-pg -o jsonpath='{.status.firstRecoverabilityPoint}'
# 2025-03-03T02:00:00Z  ← Có thể restore tới 30 ngày trước
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Barman + S3</strong>: Base backup + continuous WAL archiving</li>
<li><strong>ScheduledBackup</strong>: Automated daily backup, prefer-standby</li>
<li><strong>PITR</strong>: Restore tới bất kỳ thời điểm nào trong retention period</li>
<li><strong>Recovery = Tạo cluster mới</strong> từ backup, sau đó switchover</li>
<li><strong>retentionPolicy: 30d</strong>: Giữ backup 30 ngày</li>
<li><strong>Test restore định kỳ</strong>: Verify backup integrity hàng tháng</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Backup Lab</h3>
<ul>
<li>Configure backup destination (S3/MinIO)</li>
<li>Setup ScheduledBackup, verify backup tạo thành công</li>
</ul>

<h3 id="bt2">Bài tập 2: PITR Lab</h3>
<ul>
<li>Insert data, note timestamp</li>
<li>Delete data (simulate accident)</li>
<li>Restore tới timestamp trước delete</li>
<li>Verify data recovered</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 19: PostgreSQL Failover Testing và Switchover</strong>, chúng ta sẽ test failover scenarios và planned switchover.</p>
