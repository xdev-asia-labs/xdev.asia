---
id: 019e1a00-aa01-7001-c001-k8sha000206
title: 'BÀI 10: ETCD — VẬN HÀNH, BACKUP VÀ DISASTER RECOVERY'
slug: bai-10-etcd-van-hanh-backup-va-disaster-recovery
description: >-
  Deep dive etcd internals, Raft consensus, etcdctl operations,
  automated backup với CronJob, snapshot restore, defragmentation,
  compaction, alarm management và disaster recovery procedures.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 10
section_title: 'Phần 2: Kubernetes HA Cluster với kubeadm'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Hiểu Raft consensus algorithm và etcd internals</li>
<li>✅ Thành thạo etcdctl cho operations hàng ngày</li>
<li>✅ Setup automated backup với CronJob</li>
<li>✅ Thực hành restore từ snapshot (disaster recovery)</li>
<li>✅ Defragmentation, compaction, và performance tuning</li>
</ul>

<hr>

<h2 id="phan-1-etcd-internals">PHẦN 1: ETCD INTERNALS</h2>

<h3 id="11-raft-consensus">1.1. Raft Consensus Algorithm</h3>
<pre><code>
Raft — Bầu cử Leader:
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   etcd-1     │    │   etcd-2     │    │   etcd-3     │
│   LEADER     │    │   FOLLOWER   │    │   FOLLOWER   │
│              │    │              │    │              │
│  WAL ──────► │───►│  WAL         │    │  WAL         │
│  Log         │    │  Log         │    │  Log         │
│  Snapshot    │    │  Snapshot    │    │  Snapshot    │
└──────┬───────┘    └──────┬───────┘    └──────┬───────┘
       │                   │                   │
       └────── Replicate ──┴────── Replicate ──┘

Write Flow (Raft consensus):
1. Client gửi write request → Leader
2. Leader ghi vào WAL (Write-Ahead Log)
3. Leader replicate entry tới Followers
4. Khi MAJORITY (2/3) confirm → COMMIT
5. Leader apply entry vào state machine
6. Response client: success

⚠️ etcd tolerates (N-1)/2 failures:
• 3 nodes → tolerate 1 failure  (quorum = 2)
• 5 nodes → tolerate 2 failures (quorum = 3)
</code></pre>

<h3 id="12-data-model">1.2. Data Model</h3>
<pre><code class="language-bash"># etcd lưu trữ key-value pairs trong B+ Tree
# Kubernetes objects → etcd keys:
# /registry/deployments/default/nginx
# /registry/pods/kube-system/coredns-xxx
# /registry/secrets/default/my-secret
# /registry/configmaps/kube-system/kubeadm-config
# /registry/services/default/kubernetes

# etcdctl alias (thêm vào ~/.bashrc):
alias etcdctl='kubectl -n kube-system exec etcd-master1 -- etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key'
</code></pre>

<hr>

<h2 id="phan-2-etcdctl-operations">PHẦN 2: ETCDCTL OPERATIONS</h2>

<h3 id="21-cluster-health">2.1. Cluster Health Monitoring</h3>
<pre><code class="language-bash"># Tạo script helper (chạy trên master1):
cat > /usr/local/bin/etcd-check.sh << 'EOF'
#!/bin/bash
ETCDCTL_CMD="etcdctl \
  --endpoints=https://10.10.20.11:2379,https://10.10.20.12:2379,https://10.10.20.13:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key"

echo "=== MEMBER LIST ==="
$ETCDCTL_CMD member list -w table

echo ""
echo "=== ENDPOINT HEALTH ==="
$ETCDCTL_CMD endpoint health -w table

echo ""
echo "=== ENDPOINT STATUS ==="
$ETCDCTL_CMD endpoint status -w table

echo ""
echo "=== ALARM LIST ==="
$ETCDCTL_CMD alarm list
EOF
chmod +x /usr/local/bin/etcd-check.sh
</code></pre>

<h3 id="22-performance-check">2.2. Performance Check</h3>
<pre><code class="language-bash"># etcd performance benchmark:
kubectl -n kube-system exec etcd-master1 -- etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  check perf --load="s"

# Output:
# 60/60: 99% PASS  (write: 2000/2000, read: 8000/8000)
# Passed ✅

# Disk performance (CRITICAL cho etcd):
# etcd yêu cầu p99 write latency < 10ms
# Nếu > 10ms → cần NVMe SSD
fio --rw=write --ioengine=sync \
  --fdatasync=1 --directory=/var/lib/etcd \
  --size=22m --bs=2300 --name=etcd-test
# Kiểm tra: fsync/fdatasync p99 latency
</code></pre>

<h3 id="23-xem-kubernetes-data">2.3. Xem Kubernetes data trong etcd</h3>
<pre><code class="language-bash"># List tất cả keys (registry prefix):
kubectl -n kube-system exec etcd-master1 -- etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  get /registry --prefix --keys-only | head -20

# Output:
# /registry/apiregistration.k8s.io/apiservices/v1.
# /registry/apiregistration.k8s.io/apiservices/v1.admissionregistration.k8s.io
# /registry/clusterrolebindings/cluster-admin
# /registry/clusterroles/admin
# /registry/configmaps/kube-system/kubeadm-config
# ...

# Đếm số keys:
kubectl -n kube-system exec etcd-master1 -- etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  get /registry --prefix --keys-only | wc -l
# ~500-1000 keys cho cluster mới
</code></pre>

<hr>

<h2 id="phan-3-backup">PHẦN 3: ETCD BACKUP</h2>

<h3 id="31-manual-snapshot">3.1. Manual Snapshot</h3>
<pre><code class="language-bash"># Tạo snapshot trên master1:
ETCDCTL_API=3 etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  snapshot save /backup/etcd/snapshot-$(date +%Y%m%d-%H%M%S).db

# Verify snapshot:
ETCDCTL_API=3 etcdctl snapshot status /backup/etcd/snapshot-*.db -w table
# +----------+----------+------------+------------+
# |   HASH   | REVISION | TOTAL KEYS | TOTAL SIZE |
# +----------+----------+------------+------------+
# | abc12345 |   14523  |        832 |     3.3 MB |
# +----------+----------+------------+------------+
</code></pre>

<h3 id="32-automated-backup-script">3.2. Automated Backup Script</h3>
<pre><code class="language-bash"># /usr/local/bin/etcd-backup.sh:
cat > /usr/local/bin/etcd-backup.sh << 'SCRIPT'
#!/bin/bash
set -euo pipefail

BACKUP_DIR="/backup/etcd"
RETENTION_DAYS=30
DATE=$(date +%Y%m%d-%H%M%S)
SNAPSHOT="${BACKUP_DIR}/snapshot-${DATE}.db"

# Tạo backup directory:
mkdir -p "${BACKUP_DIR}"

# Snapshot:
ETCDCTL_API=3 etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  snapshot save "${SNAPSHOT}"

# Verify snapshot:
ETCDCTL_API=3 etcdctl snapshot status "${SNAPSHOT}" -w json | jq .

# gzip compress:
gzip "${SNAPSHOT}"

# Backup certificates (cần cho restore):
tar czf "${BACKUP_DIR}/pki-${DATE}.tar.gz" /etc/kubernetes/pki/

# Copy to remote storage (NFS, S3, etc.):
# rsync -avz "${BACKUP_DIR}/" backup-server:/etcd-backups/

# Cleanup old backups:
find "${BACKUP_DIR}" -name "snapshot-*.db.gz" -mtime +${RETENTION_DAYS} -delete
find "${BACKUP_DIR}" -name "pki-*.tar.gz" -mtime +${RETENTION_DAYS} -delete

echo "[$(date)] Backup completed: ${SNAPSHOT}.gz"
SCRIPT
chmod +x /usr/local/bin/etcd-backup.sh
</code></pre>

<h3 id="33-cron-backup">3.3. Cron Backup (mỗi 6 giờ)</h3>
<pre><code class="language-bash"># Crontab trên master1:
crontab -e
# Add:
0 */6 * * * /usr/local/bin/etcd-backup.sh >> /var/log/etcd-backup.log 2>&1

# Hoặc dùng Kubernetes CronJob:
</code></pre>

<pre><code class="language-yaml"># etcd-backup-cronjob.yaml:
apiVersion: batch/v1
kind: CronJob
metadata:
  name: etcd-backup
  namespace: kube-system
spec:
  schedule: "0 */6 * * *"
  concurrencyPolicy: Forbid
  successfulJobsHistoryLimit: 3
  failedJobsHistoryLimit: 3
  jobTemplate:
    spec:
      template:
        spec:
          hostNetwork: true
          nodeSelector:
            node-role.kubernetes.io/control-plane: ""
          tolerations:
            - key: "node-role.kubernetes.io/control-plane"
              effect: "NoSchedule"
          containers:
            - name: etcd-backup
              image: registry.k8s.io/etcd:3.5.15-0
              command:
                - /bin/sh
                - -c
                - |
                  DATE=$(date +%Y%m%d-%H%M%S)
                  etcdctl snapshot save /backup/snapshot-${DATE}.db \
                    --endpoints=https://127.0.0.1:2379 \
                    --cacert=/etc/kubernetes/pki/etcd/ca.crt \
                    --cert=/etc/kubernetes/pki/etcd/server.crt \
                    --key=/etc/kubernetes/pki/etcd/server.key
                  etcdctl snapshot status /backup/snapshot-${DATE}.db -w table
                  # Cleanup old backups
                  find /backup -name "snapshot-*.db" -mtime +30 -delete
              volumeMounts:
                - name: etcd-certs
                  mountPath: /etc/kubernetes/pki/etcd
                  readOnly: true
                - name: backup
                  mountPath: /backup
          restartPolicy: OnFailure
          volumes:
            - name: etcd-certs
              hostPath:
                path: /etc/kubernetes/pki/etcd
            - name: backup
              hostPath:
                path: /backup/etcd
                type: DirectoryOrCreate
</code></pre>

<hr>

<h2 id="phan-4-restore">PHẦN 4: DISASTER RECOVERY — RESTORE</h2>

<h3 id="41-restore-scenario">4.1. Restore Scenario</h3>
<pre><code>
🔴 DISASTER: etcd data bị corrupt trên tất cả 3 nodes
                hoặc cần rollback cluster state

Restore Process:
1. Stop kube-apiserver + etcd trên TẤT CẢ masters
2. Restore snapshot trên MỖI master (different initial-cluster settings)
3. Restart etcd → form new cluster
4. Restart kube-apiserver
5. Verify cluster

⚠️ RESTORE = TẠO CLUSTER MỚI từ snapshot
   Tất cả resources sau thời điểm snapshot sẽ BỊ MẤT
</code></pre>

<h3 id="42-restore-step-by-step">4.2. Restore Step-by-Step</h3>
<pre><code class="language-bash"># === BƯỚC 1: Stop tất cả trên MỖI master ===
# Trên master1, master2, master3:
mv /etc/kubernetes/manifests/kube-apiserver.yaml /tmp/
mv /etc/kubernetes/manifests/etcd.yaml /tmp/

# Đợi pods terminate:
crictl ps | grep -E "etcd|apiserver"
# Phải trống (không có container nào)

# Backup data cũ:
mv /var/lib/etcd /var/lib/etcd.bak

# === BƯỚC 2: Restore snapshot trên MỖI master ===

# Trên master1:
ETCDCTL_API=3 etcdctl snapshot restore /backup/etcd/snapshot-20250402-060000.db \
  --name=master1 \
  --initial-cluster="master1=https://10.10.20.11:2380,master2=https://10.10.20.12:2380,master3=https://10.10.20.13:2380" \
  --initial-advertise-peer-urls=https://10.10.20.11:2380 \
  --data-dir=/var/lib/etcd

# Trên master2:
ETCDCTL_API=3 etcdctl snapshot restore /backup/etcd/snapshot-20250402-060000.db \
  --name=master2 \
  --initial-cluster="master1=https://10.10.20.11:2380,master2=https://10.10.20.12:2380,master3=https://10.10.20.13:2380" \
  --initial-advertise-peer-urls=https://10.10.20.12:2380 \
  --data-dir=/var/lib/etcd

# Trên master3:
ETCDCTL_API=3 etcdctl snapshot restore /backup/etcd/snapshot-20250402-060000.db \
  --name=master3 \
  --initial-cluster="master1=https://10.10.20.11:2380,master2=https://10.10.20.12:2380,master3=https://10.10.20.13:2380" \
  --initial-advertise-peer-urls=https://10.10.20.13:2380 \
  --data-dir=/var/lib/etcd

# === BƯỚC 3: Restart etcd và API server trên MỖI master ===
mv /tmp/etcd.yaml /etc/kubernetes/manifests/
# Đợi etcd start:
crictl ps | grep etcd
# Khi etcd running → start API server:
mv /tmp/kube-apiserver.yaml /etc/kubernetes/manifests/

# === BƯỚC 4: Verify ===
kubectl get nodes
kubectl get pods -A
etcd-check.sh
</code></pre>

<hr>

<h2 id="phan-5-compaction-defrag">PHẦN 5: COMPACTION VÀ DEFRAGMENTATION</h2>

<h3 id="51-compaction">5.1. Compaction</h3>
<pre><code class="language-bash"># etcd giữ tất cả revisions (history).
# Compaction xóa history cũ, giảm DB size.

# Lấy current revision:
kubectl -n kube-system exec etcd-master1 -- etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  endpoint status -w json | jq '.[0].Status.header.revision'
# Output: 14523

# Compact tới revision cũ (giữ lại last 1000 revisions):
kubectl -n kube-system exec etcd-master1 -- etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  compact 13523
# compacted revision 13523

# ⚠️ Kubernetes kube-apiserver tự động compact etcd
# Thường không cần manual compact
</code></pre>

<h3 id="52-defragmentation">5.2. Defragmentation</h3>
<pre><code class="language-bash"># Sau compaction, disk space không được giải phóng ngay
# Defrag giải phóng disk space:

# ⚠️ Defrag BLOCK etcd trong vài giây
# Chạy trên TỪNG node, KHÔNG đồng thời:

# Defrag master1:
kubectl -n kube-system exec etcd-master1 -- etcdctl \
  --endpoints=https://10.10.20.11:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  defrag
# Finished defragmenting etcd member[https://10.10.20.11:2379]

# Repeat cho master2, master3 (lần lượt, không đồng thời)
</code></pre>

<h3 id="53-alarm-management">5.3. Alarm Management</h3>
<pre><code class="language-bash"># etcd tự động raise alarm khi:
# - NOSPACE: DB size > quota (default 2GB)
# - CORRUPT: Data corruption detected

# List alarms:
kubectl -n kube-system exec etcd-master1 -- etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  alarm list
# (empty = no alarms ✅)

# Nếu NOSPACE alarm:
# 1. Compact old revisions
# 2. Defrag
# 3. Disarm alarm:
# etcdctl alarm disarm
</code></pre>

<hr>

<h2 id="phan-6-monitoring">PHẦN 6: ETCD MONITORING</h2>

<h3 id="61-prometheus-metrics">6.1. Prometheus Metrics</h3>
<pre><code class="language-bash"># etcd expose metrics tại port 2381 (đã cấu hình ở Bài 6):
curl -sk https://10.10.20.11:2381/metrics | head -20

# Key metrics to monitor:
# etcd_server_has_leader                    = 1 (phải = 1)
# etcd_server_leader_changes_seen_total     = number of leader changes
# etcd_disk_wal_fsync_duration_seconds      = WAL fsync latency
# etcd_disk_backend_commit_duration_seconds = backend commit latency
# etcd_mvcc_db_total_size_in_bytes         = DB size
# etcd_network_peer_round_trip_time_seconds = peer RTT
</code></pre>

<h3 id="62-alerting-rules">6.2. PrometheusRule (sẽ dùng ở Bài 32)</h3>
<pre><code class="language-yaml"># etcd-alerts.yaml (tham khảo):
groups:
  - name: etcd
    rules:
      - alert: EtcdNoLeader
        expr: etcd_server_has_leader == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "etcd member has no leader"

      - alert: EtcdHighDiskLatency
        expr: histogram_quantile(0.99, rate(etcd_disk_wal_fsync_duration_seconds_bucket[5m])) > 0.01
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "etcd WAL fsync p99 > 10ms"

      - alert: EtcdDatabaseSizeHigh
        expr: etcd_mvcc_db_total_size_in_bytes > 6*1024*1024*1024
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "etcd DB size > 6GB (quota 8GB)"
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Raft consensus</strong>: majority quorum (2/3) required cho writes</li>
<li><strong>Backup mỗi 6h</strong> là minimum cho production — lưu cả snapshot + certificates</li>
<li><strong>Restore = Tạo cluster mới</strong> từ snapshot, tất cả data sau snapshot bị mất</li>
<li><strong>Defrag lần lượt</strong> từng member, KHÔNG đồng thời (blocks I/O)</li>
<li><strong>NOSPACE alarm</strong>: compact → defrag → disarm</li>
<li><strong>NVMe SSD</strong> là must-have cho etcd (p99 write latency < 10ms)</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Backup & Restore Lab</h3>
<ul>
<li>Tạo Deployment nginx (3 replicas)</li>
<li>Backup etcd snapshot</li>
<li>Xóa Deployment nginx</li>
<li>Restore từ snapshot, verify Deployment nginx trở lại</li>
</ul>

<h3 id="bt2">Bài tập 2: Monitoring</h3>
<ul>
<li>Chạy etcd-check.sh, ghi nhận DB size, leader, health</li>
<li>Compact và defrag, so sánh DB size trước/sau</li>
</ul>

<h3 id="bt3">Bài tập 3: Setup CronJob backup</h3>
<ul>
<li>Deploy etcd-backup CronJob</li>
<li>Verify Job chạy thành công</li>
<li>Kiểm tra snapshot file trong /backup/etcd/</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 11: Kiến trúc Distributed Storage với Rook-Ceph</strong>, chúng ta sẽ bắt đầu Phần 3 — cài đặt Rook-Ceph cho persistent storage.</p>
