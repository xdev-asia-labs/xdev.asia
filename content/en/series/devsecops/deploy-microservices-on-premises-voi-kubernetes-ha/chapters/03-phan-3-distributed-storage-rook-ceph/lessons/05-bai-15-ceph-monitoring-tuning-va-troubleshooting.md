---
id: 019e1a00-aa01-7001-c001-k8sha000305
title: 'LESSON 15: CEPH MONITORING, TUNING AND TROUBLESHOOTING'
slug: bai-15-ceph-monitoring-tuning-va-troubleshooting
description: Prometheus metrics for Ceph, Grafana dashboards, performance tuning parameters, OSD tuning, scrubbing, recovery settings, and troubleshooting common issues.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: 'Part 3: Distributed Storage — Rook-Ceph'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5846" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5846)"/>

  <!-- Decorations -->
  <g>
    <circle cx="884" cy="222" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="668" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="952" cy="90" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="736" cy="154" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="218" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="82" x2="1100" y2="162" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="112" x2="1050" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="964.0429399400242,113.5 964.0429399400242,150.5 932,169 899.9570600599758,150.5 899.9570600599758,113.50000000000001 932,95" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Lesson 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 15: CEPH MONITORING, TUNING AND</tspan>
      <tspan x="60" dy="42">TROUBLESHOOTING</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Distributed Storage — Rook-Ceph</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_68___
<p>After completing this lesson, you will:</p>
<ul>
<li>✅ Setup Prometheus monitoring for Ceph</li>
<li>✅ Import Grafana dashboards for Ceph</li>
<li>✅ Tuning OSD performance parameters</li>
<li>✅ Managing scrubbing and recovery</li>
<li>✅ Troubleshoot HEALTH_WARN and common issues__HTMLTAG_81___
</ul>

<hr>

<h2 id="phan-1-prometheus-metrics">PART 1: PROMETHEUS METRICS</h2>

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

<h3 id="12-servicemonitor">1.2. ServiceMonitor (for Prometheus Operator)</h3>
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

<h3 id="13-key-metrics">1.3. Key Metrics to Monitor</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Metric</th>
<th>Meaning__HTMLTAG_99___
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
<td>> 80% capacity__HTMLTAG_135___
</tr>
<tr>
<td>ceph_osd_op_r_latency_sum</td>
<td>Read latency__HTMLTAG_141___
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

<h2 id="phan-2-grafana-dashboards">PART 2: GRAFANA DASHBOARDS__HTMLTAG_174___

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

<h2 id="phan-3-performance-tuning">PART 3: PERFORMANCE TUNING</h2>

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

<h2 id="phan-4-troubleshooting">PART 4: TROUBLESHOOTING</h2>

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

<h2 id="phan-5-benchmark">PART 5: STORAGE BENCHMARKING__HTMLTAG_193___

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
<li><strong>Scrub scheduling</strong>: Off-peak hours (2-6 AM) to minimize impact</li>
<li><strong>Recovery throttling</strong>: osd_recovery_max_active, osd_max_backfills</li>
<li><strong>PG autoscaler</strong>: Automatically adjust PG count</li>
<li><strong>OSD replace</strong>: mark out → wait recovery → purge → replace disk</li>
<li><strong>Benchmark before deployment</strong>: rados bench for baseline</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISE</h2><h3 id="bt1">Exercise 1: Monitoring</h3>
<ul>
<li>Verify Prometheus scraping Ceph metrics__HTMLTAG_230___
<li>Check <code>ceph health detail</code> and resolve warnings</li>
</ul>

<h3 id="bt2">Exercise 2: Benchmark</h3>
<ul>
<li>Run rados bench write/read</li>
<li>Deploy fio in pod with ceph-block PVC</li>
<li>Compare IOPS and latency__HTMLTAG_244___
</ul>

<h3 id="bt3">Exercise 3: OSD Failure Simulation__HTMLTAG_247___
<ul>
<li>Mark 1 OSD out, observe recovery</li>
<li>Mark OSD print, observe rebalancing</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 16: PostgreSQL HA Architecture with Patroni and CloudNativePG</strong>, we will start Part 4 — database HA for microservices.</p>