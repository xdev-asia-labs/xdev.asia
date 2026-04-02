---
id: 019e1a00-aa01-7001-c001-k8sha000305
title: 'BÀI 15: CEPH MONITORING, TUNING VÀ TROUBLESHOOTING'
slug: bai-15-ceph-monitoring-tuning-va-troubleshooting
description: >-
  Prometheus metrics cho Ceph, Grafana dashboards, performance
  tuning parameters, OSD tuning, scrubbing, recovery settings,
  và troubleshooting common issues.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: 'Phần 3: Distributed Storage — Rook-Ceph'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Setup Prometheus monitoring cho Ceph</li>
<li>✅ Import Grafana dashboards cho Ceph</li>
<li>✅ Tuning OSD performance parameters</li>
<li>✅ Quản lý scrubbing và recovery</li>
<li>✅ Troubleshoot HEALTH_WARN và common issues</li>
</ul>

<hr>

<h2 id="phan-1-prometheus-metrics">PHẦN 1: PROMETHEUS METRICS</h2>

<h3 id="11-ceph-prometheus-module">1.1. Ceph Prometheus Module</h3>
<pre><code class="language-bash"># Prometheus module đã enable ở CephCluster CRD:
# modules: [{name: prometheus, enabled: true}]

# Verify metrics endpoint:
kubectl -n rook-ceph exec deploy/rook-ceph-tools -- \
  ceph mgr services
# {
#   "dashboard": "https://rook-ceph-mgr-dashboard:8443/",
#   "prometheus": "http://rook-ceph-mgr:9283/"
# }

# Test scrape metrics:
kubectl -n rook-ceph port-forward svc/rook-ceph-mgr 9283:9283
curl -s http://localhost:9283/metrics | head -20
# # HELP ceph_health_status Cluster health status
# # TYPE ceph_health_status gauge
# ceph_health_status 0
</code></pre>

<h3 id="12-servicemonitor">1.2. ServiceMonitor (cho Prometheus Operator)</h3>
<pre><code class="language-yaml"># ceph-servicemonitor.yaml:
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: rook-ceph-mgr
  namespace: rook-ceph
  labels:
    team: rook
spec:
  namespaceSelector:
    matchNames:
      - rook-ceph
  selector:
    matchLabels:
      app: rook-ceph-mgr
      rook_cluster: rook-ceph
  endpoints:
    - port: http-metrics
      path: /metrics
      interval: 15s
</code></pre>

<h3 id="13-key-metrics">1.3. Key Metrics to Monitor</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Metric</th>
<th>Ý nghĩa</th>
<th>Alert threshold</th>
</tr>
</thead>
<tbody>
<tr>
<td>ceph_health_status</td>
<td>0=OK, 1=WARN, 2=ERR</td>
<td>> 0 for 5m</td>
</tr>
<tr>
<td>ceph_osd_up</td>
<td>OSD up status</td>
<td>!= 1</td>
</tr>
<tr>
<td>ceph_osd_in</td>
<td>OSD in cluster</td>
<td>!= 1</td>
</tr>
<tr>
<td>ceph_cluster_total_used_raw_bytes</td>
<td>Raw usage</td>
<td>> 80% capacity</td>
</tr>
<tr>
<td>ceph_osd_op_r_latency_sum</td>
<td>Read latency</td>
<td>> 50ms p99</td>
</tr>
<tr>
<td>ceph_osd_op_w_latency_sum</td>
<td>Write latency</td>
<td>> 100ms p99</td>
</tr>
<tr>
<td>ceph_pg_degraded</td>
<td>Degraded PGs</td>
<td>> 0 for 5m</td>
</tr>
<tr>
<td>ceph_pool_stored_raw</td>
<td>Pool raw usage</td>
<td>Near full</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-grafana-dashboards">PHẦN 2: GRAFANA DASHBOARDS</h2>

<pre><code class="language-bash"># Ceph cung cấp built-in Grafana dashboards:
# Dashboard IDs cho Grafana:
# - Ceph Cluster Overview: 2842
# - Ceph OSD Performance: 5336
# - Ceph Pool Overview: 5342
# - Ceph RBD Overview: 7845

# Import qua Grafana UI:
# 1. Grafana → + → Import
# 2. Nhập Dashboard ID
# 3. Chọn Prometheus datasource
# 4. Import

# Hoặc tạo ConfigMap cho auto-import (Bài 33):
</code></pre>

<hr>

<h2 id="phan-3-performance-tuning">PHẦN 3: PERFORMANCE TUNING</h2>

<h3 id="31-osd-tuning">3.1. OSD Tuning</h3>
<pre><code class="language-bash"># Các OSD config quan trọng:
kubectl -n rook-ceph exec deploy/rook-ceph-tools -- bash

# Xem current config:
ceph config dump | grep osd

# Tuning cho SSD:
ceph config set osd osd_op_num_threads_per_shard 2
ceph config set osd osd_op_num_shards 8
ceph config set osd bluestore_min_alloc_size_ssd 4096        # 4K cho SSD
ceph config set osd bluestore_cache_size_ssd 3221225472      # 3GB cache
ceph config set osd osd_memory_target 4294967296             # 4GB per OSD

# Scrub scheduling:
ceph config set osd osd_scrub_begin_hour 2                   # Start 2 AM
ceph config set osd osd_scrub_end_hour 6                     # End 6 AM
ceph config set osd osd_scrub_sleep 0.1                      # Sleep between scrubs
ceph config set osd osd_deep_scrub_interval 604800           # Deep scrub weekly

# Recovery throttling:
ceph config set osd osd_recovery_max_active 3                # Max concurrent recoveries
ceph config set osd osd_recovery_sleep 0.1                   # Throttle recovery
ceph config set osd osd_max_backfills 1                      # Max backfill per OSD
</code></pre>

<h3 id="32-pool-tuning">3.2. Pool Tuning</h3>
<pre><code class="language-bash"># PG autoscaler:
ceph osd pool set replicapool pg_autoscale_mode on

# PG count (nếu manual):
# PG count formula: (Target_PGs_per_OSD × OSD_count) / size
# (100 × 3) / 3 = 100 PGs
ceph osd pool set replicapool pg_num 128                     # Power of 2

# Compression:
ceph osd pool set replicapool compression_algorithm zstd
ceph osd pool set replicapool compression_mode aggressive
</code></pre>

<hr>

<h2 id="phan-4-troubleshooting">PHẦN 4: TROUBLESHOOTING</h2>

<h3 id="41-health-warnings">4.1. Common HEALTH_WARN</h3>
<pre><code class="language-bash"># 1. HEALTH_WARN: x pgs degraded
# → Một số PGs không đủ replicas
ceph health detail
ceph pg dump_stuck degraded
# Fix: Đợi recovery tự động, hoặc:
ceph pg repair &lt;PG_ID&gt;

# 2. HEALTH_WARN: OSD near full
ceph osd df
# Fix: Thêm OSD mới, hoặc giảm data:
ceph osd reweight-by-utilization

# 3. HEALTH_WARN: clock skew detected
# → NTP không sync giữa MON nodes
# Fix: Kiểm tra chrony/NTP sync trên tất cả nodes

# 4. HEALTH_WARN: slow requests
ceph daemon osd.0 dump_ops_in_flight
# Fix: Check disk I/O, network latency, OSD config

# 5. OSD pod CrashLoopBackOff
kubectl -n rook-ceph logs rook-ceph-osd-0-xxxxx-xxxxx
# Common causes:
# - Disk permission issues
# - Previous data on disk (wipefs -a)
# - Insufficient memory
</code></pre>

<h3 id="42-osd-replace">4.2. Replace Failed OSD</h3>
<pre><code class="language-bash"># Scenario: disk /dev/sdb trên worker2 bị hỏng

# 1. Mark OSD out:
ceph osd out osd.1
# → Data tự migrate sang OSD khác

# 2. Wait for recovery:
ceph -w
# Đợi "recovery" events hoàn tất

# 3. Remove OSD:
ceph osd purge osd.1 --yes-i-really-mean-it

# 4. Replace physical disk

# 5. Update CephCluster CRD (hoặc Rook tự detect disk mới)
# → Rook Operator sẽ tạo OSD mới tự động

# 6. Verify:
ceph osd tree
</code></pre>

<h3 id="43-pool-full-emergency">4.3. Pool Full Emergency</h3>
<pre><code class="language-bash"># ⚠️ Khi pool đạt near_full (85%) hoặc full (95%):
ceph osd pool set replicapool full_ratio 0.97           # Tạm tăng ratio
ceph osd pool set replicapool nearfull_ratio 0.90

# Cleanup:
# 1. Xóa data không cần thiết
# 2. Thêm OSD mới
# 3. Giảm replication size tạm thời (⚠️ risky)
</code></pre>

<hr>

<h2 id="phan-5-benchmark">PHẦN 5: STORAGE BENCHMARKING</h2>

<pre><code class="language-bash"># RADOS bench (raw RADOS performance):
kubectl -n rook-ceph exec deploy/rook-ceph-tools -- \
  rados bench -p replicapool 60 write --no-cleanup
# Output:
# Total time run:       60.000000
# Total writes made:    15000
# Write size:           4194304
# Object size:          4194304
# Bandwidth (MB/sec):   1000.00
# Average IOPS:         250

kubectl -n rook-ceph exec deploy/rook-ceph-tools -- \
  rados bench -p replicapool 60 seq
# -> Sequential read benchmark

# Cleanup bench data:
kubectl -n rook-ceph exec deploy/rook-ceph-tools -- \
  rados -p replicapool cleanup

# fio benchmark (from pod):
# Deploy fio pod with ceph-block PVC → benchmark IOPS, throughput, latency
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Prometheus + Grafana</strong>: Monitor Ceph health, latency, IOPS, capacity</li>
<li><strong>Scrub scheduling</strong>: Off-peak hours (2-6 AM) để minimize impact</li>
<li><strong>Recovery throttling</strong>: osd_recovery_max_active, osd_max_backfills</li>
<li><strong>PG autoscaler</strong>: Tự động adjust PG count</li>
<li><strong>OSD replace</strong>: mark out → wait recovery → purge → replace disk</li>
<li><strong>Benchmark trước deploy</strong>: rados bench cho baseline performance</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Monitoring</h3>
<ul>
<li>Verify Prometheus scraping Ceph metrics</li>
<li>Check <code>ceph health detail</code> và resolve warnings</li>
</ul>

<h3 id="bt2">Bài tập 2: Benchmark</h3>
<ul>
<li>Chạy rados bench write/read</li>
<li>Deploy fio trong pod với ceph-block PVC</li>
<li>So sánh IOPS và latency</li>
</ul>

<h3 id="bt3">Bài tập 3: OSD Failure Simulation</h3>
<ul>
<li>Mark 1 OSD out, observe recovery</li>
<li>Mark OSD in, observe rebalancing</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 16: Kiến trúc PostgreSQL HA với Patroni và CloudNativePG</strong>, chúng ta sẽ bắt đầu Phần 4 — database HA cho microservices.</p>
