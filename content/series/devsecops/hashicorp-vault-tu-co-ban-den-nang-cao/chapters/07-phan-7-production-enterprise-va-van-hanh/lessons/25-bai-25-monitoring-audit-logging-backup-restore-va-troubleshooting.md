---
id: 019d8b30-b225-7001-c002-e0c5f8200125
title: 'Bài 25: Monitoring, Audit Logging, Backup/Restore và Troubleshooting'
slug: bai-25-monitoring-audit-logging-backup-restore-va-troubleshooting
description: >-
  Prometheus + Grafana monitoring, audit device configuration,
  audit log analysis, Raft backup/restore,
  common issues troubleshooting, upgrade strategies.
duration_minutes: 220
is_free: true
video_url: null
sort_order: 25
section_title: "Phần 7: Production, Enterprise và Vận hành"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<h2 id="1-monitoring-voi-prometheus-grafana"><strong>1. Monitoring với Prometheus + Grafana</strong></h2>

<h3 id="enable-telemetry"><strong>Enable Telemetry</strong></h3>

<pre><code class="language-hcl"># vault.hcl
telemetry {
  prometheus_retention_time = "30s"
  disable_hostname          = true
  
  # StatsD (optional nếu dùng StatsD exporter)
  # statsd_address = "statsd:8125"
}

listener "tcp" {
  address     = "0.0.0.0:8200"
  tls_disable = false
  # ...

  telemetry {
    unauthenticated_metrics_access = true  # Hoặc false + dùng token
  }
}
</code></pre>

<h3 id="prometheus-config"><strong>Prometheus Scrape Config</strong></h3>

<pre><code class="language-yaml"># prometheus.yml
scrape_configs:
  - job_name: 'vault'
    metrics_path: '/v1/sys/metrics'
    params:
      format: ['prometheus']
    scheme: https
    tls_config:
      ca_file: /etc/prometheus/vault-ca.pem
    # Nếu unauthenticated_metrics_access = false:
    # bearer_token_file: /etc/prometheus/vault-token
    static_configs:
      - targets:
          - 'vault-node-1:8200'
          - 'vault-node-2:8200'
          - 'vault-node-3:8200'
        labels:
          cluster: 'production'
</code></pre>

<h3 id="key-metrics"><strong>Key Metrics để Monitor</strong></h3>

<table>
<thead>
<tr><th>Metric</th><th>Mô tả</th><th>Alert threshold</th></tr>
</thead>
<tbody>
<tr><td><code>vault.core.handle_request.count</code></td><td>Tổng số requests</td><td>Trend analysis</td></tr>
<tr><td><code>vault.core.handle_request.duration</code></td><td>Request latency</td><td>P99 > 500ms</td></tr>
<tr><td><code>vault.token.count</code></td><td>Active tokens</td><td>Sudden spike</td></tr>
<tr><td><code>vault.expire.num_leases</code></td><td>Active leases</td><td>> 256000</td></tr>
<tr><td><code>vault.runtime.alloc_bytes</code></td><td>Memory allocation</td><td>> 80% RAM</td></tr>
<tr><td><code>vault.runtime.gc_pause_ns</code></td><td>GC pause</td><td>> 2s</td></tr>
<tr><td><code>vault.raft.leader.lastContact</code></td><td>Time since leader contact</td><td>> 200ms</td></tr>
<tr><td><code>vault.raft.commitTime</code></td><td>Raft commit time</td><td>> 25ms</td></tr>
<tr><td><code>vault.seal.unseal</code></td><td>Unseal events</td><td>Unexpected count</td></tr>
<tr><td><code>vault.audit.log_response_failure</code></td><td>Audit log failures</td><td>Any > 0</td></tr>
</tbody>
</table>

<h3 id="grafana-dashboard"><strong>Grafana Dashboard</strong></h3>

<pre><code class="language-json">{
  "dashboard_id": "vault-overview",
  "panels": [
    {
      "title": "Request Rate",
      "query": "rate(vault_core_handle_request_count[5m])"
    },
    {
      "title": "Request Latency P99",
      "query": "histogram_quantile(0.99, rate(vault_core_handle_request_duration_bucket[5m]))"
    },
    {
      "title": "Active Leases",
      "query": "vault_expire_num_leases"
    },
    {
      "title": "Raft Leader Last Contact",
      "query": "vault_raft_leader_lastContact"
    },
    {
      "title": "Memory Usage",
      "query": "vault_runtime_alloc_bytes / 1024 / 1024"
    }
  ]
}
</code></pre>

<h3 id="alerting-rules"><strong>Alerting Rules</strong></h3>

<pre><code class="language-yaml"># vault-alerts.yml
groups:
  - name: vault
    rules:
      - alert: VaultSealed
        expr: vault_core_unsealed == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Vault node is sealed"

      - alert: VaultHighLatency
        expr: histogram_quantile(0.99, rate(vault_core_handle_request_duration_bucket[5m])) > 0.5
        for: 5m
        labels:
          severity: warning

      - alert: VaultLeadershipLost
        expr: vault_raft_leader_lastContact > 200
        for: 30s
        labels:
          severity: critical

      - alert: VaultAuditFailure
        expr: increase(vault_audit_log_response_failure[5m]) > 0
        labels:
          severity: critical
          
      - alert: VaultTooManyLeases
        expr: vault_expire_num_leases > 200000
        for: 10m
        labels:
          severity: warning
</code></pre>

<h2 id="2-audit-logging"><strong>2. Audit Logging</strong></h2>

<h3 id="enable-audit"><strong>Cấu hình Audit Devices</strong></h3>

<pre><code class="language-bash"># File audit device
vault audit enable file file_path=/var/log/vault/audit.log

# Syslog audit device
vault audit enable syslog tag="vault" facility="LOCAL0"

# Socket audit device (cho log aggregator)
vault audit enable socket \
  address="logstash.company.com:9000" \
  socket_type="tcp"

# Luôn enable ít nhất 2 audit devices!
# Vault sẽ BLOCK tất cả requests nếu không có audit device nào hoạt động

# List audit devices
vault audit list -detailed
</code></pre>

<h3 id="audit-log-format"><strong>Audit Log Format</strong></h3>

<pre><code class="language-json">{
  "time": "2025-01-15T10:30:00.000Z",
  "type": "request",
  "auth": {
    "client_token": "hmac-sha256:abc123...",
    "accessor": "hmac-sha256:def456...",
    "display_name": "approle-cicd",
    "policies": ["cicd-deploy", "default"],
    "metadata": {
      "role_name": "cicd-pipeline"
    },
    "entity_id": "entity-uuid-here",
    "token_type": "service"
  },
  "request": {
    "id": "request-uuid",
    "operation": "read",
    "mount_type": "kv",
    "path": "secret/data/production/db",
    "remote_address": "10.0.1.50",
    "remote_port": 45678
  }
}
</code></pre>

<h3 id="log-analysis"><strong>Log Analysis Queries</strong></h3>

<pre><code class="language-bash"># Tìm failed requests
cat /var/log/vault/audit.log | \
  jq -r 'select(.type == "response" and .response.data == null) | 
  [.time, .request.path, .auth.display_name, .error] | @tsv'

# Tìm policy denials
cat /var/log/vault/audit.log | \
  jq -r 'select(.error != null and (.error | contains("permission denied"))) |
  [.time, .request.path, .request.operation, .auth.display_name] | @tsv'

# Top 10 paths accessed
cat /var/log/vault/audit.log | \
  jq -r 'select(.type == "request") | .request.path' | \
  sort | uniq -c | sort -rn | head -10

# Requests by identity
cat /var/log/vault/audit.log | \
  jq -r 'select(.type == "request") | .auth.display_name' | \
  sort | uniq -c | sort -rn
</code></pre>

<h2 id="3-backup-restore"><strong>3. Backup và Restore</strong></h2>

<h3 id="raft-backup"><strong>Raft Snapshot Backup</strong></h3>

<pre><code class="language-bash">#!/bin/bash
# vault-backup.sh

VAULT_ADDR="https://vault.company.com:8200"
BACKUP_DIR="/backup/vault"
RETENTION_DAYS=30
DATE=$(date +%Y%m%d_%H%M%S)

# Tạo snapshot
vault operator raft snapshot save \
  "${BACKUP_DIR}/vault-snapshot-${DATE}.snap"

# Verify snapshot
vault operator raft snapshot inspect \
  "${BACKUP_DIR}/vault-snapshot-${DATE}.snap"

# Upload to S3
aws s3 cp "${BACKUP_DIR}/vault-snapshot-${DATE}.snap" \
  "s3://company-backup/vault/vault-snapshot-${DATE}.snap" \
  --sse aws:kms

# Cleanup old backups
find "${BACKUP_DIR}" -name "*.snap" -mtime +${RETENTION_DAYS} -delete
</code></pre>

<pre><code class="language-bash"># Cron job — backup mỗi giờ
0 * * * * /opt/vault/scripts/vault-backup.sh >> /var/log/vault-backup.log 2>&1
</code></pre>

<h3 id="restore"><strong>Restore</strong></h3>

<pre><code class="language-bash"># Restore snapshot — CHÚ Ý: overwrite toàn bộ data
vault operator raft snapshot restore \
  /backup/vault/vault-snapshot-20250115_100000.snap

# Force restore (khi cluster đã thay đổi)
vault operator raft snapshot restore -force \
  /backup/vault/vault-snapshot-20250115_100000.snap
</code></pre>

<h2 id="4-troubleshooting"><strong>4. Troubleshooting</strong></h2>

<h3 id="common-issues"><strong>Common Issues</strong></h3>

<table>
<thead>
<tr><th>Issue</th><th>Nguyên nhân</th><th>Giải pháp</th></tr>
</thead>
<tbody>
<tr><td>Vault sealed sau restart</td><td>Không có auto-unseal</td><td>Cấu hình KMS/HSM seal</td></tr>
<tr><td>503 Service Unavailable</td><td>Node đang standby / DR secondary</td><td>Route requests tới active node</td></tr>
<tr><td>Lease count tăng liên tục</td><td>Client không revoke leases</td><td>Tidy leases, kiểm tra TTL</td></tr>
<tr><td>Token store quá lớn</td><td>Orphan tokens không bị revoke</td><td>Token tidy, reduce TTL</td></tr>
<tr><td>Raft leader flapping</td><td>Network instability</td><td>Tăng heartbeat timeout</td></tr>
<tr><td>Audit device blocking</td><td>Disk full / log destination down</td><td>Free disk, fix log dest</td></tr>
<tr><td>High memory usage</td><td>Too many leases/tokens</td><td>Tidy and tune TTLs</td></tr>
</tbody>
</table>

<h3 id="debug-commands"><strong>Debug Commands</strong></h3>

<pre><code class="language-bash"># Server status
vault status
vault status -format=json

# Raft cluster info
vault operator raft list-peers
vault operator raft autopilot state

# Leader info
vault operator step-down  # Force leader election

# Key status
vault operator key-status

# Lease management
vault lease list -prefix "database/"
vault lease revoke -prefix "database/creds/app-role/"

# Token tidy
vault write sys/tidy/tidy-token-store \
  safety_buffer="72h"

# Lease tidy
vault write sys/leases/tidy \
  tidy_type="irrevocable"

# Debug bundle (support)
vault debug -duration=2m -targets=metrics,server-status,replication-status

# Read internal counters
vault read sys/internal/counters/tokens
vault read sys/internal/counters/requests
</code></pre>

<h3 id="upgrade-strategy"><strong>Upgrade Strategy</strong></h3>

<pre><code class="language-bash"># 1. Backup trước khi upgrade
vault operator raft snapshot save /backup/pre-upgrade.snap

# 2. Read release notes + upgrade guide

# 3. Upgrade standby nodes trước (rolling upgrade)
# Node 3 (standby)
systemctl stop vault
# Replace binary
cp vault-new /usr/bin/vault
systemctl start vault

# Verify node rejoins cluster
vault operator raft list-peers

# 4. Repeat cho Node 2

# 5. Step-down leader, upgrade cuối cùng
vault operator step-down
# Wait for new leader election
systemctl stop vault
cp vault-new /usr/bin/vault
systemctl start vault

# 6. Verify
vault status
vault operator raft list-peers
vault operator raft autopilot state
</code></pre>

<h2 id="5-tong-ket"><strong>5. Tổng kết</strong></h2>

<ul>
<li><p><strong>Monitoring</strong> — Prometheus metrics + Grafana dashboards + alerting là bắt buộc</p></li>
<li><p><strong>Audit</strong> — Luôn enable ≥ 2 audit devices, analyze logs regularly</p></li>
<li><p><strong>Backup</strong> — Raft snapshots tự động, lưu offsite, test restore định kỳ</p></li>
<li><p><strong>Troubleshooting</strong> — Biết các debug commands, common issues và cách xử lý</p></li>
<li><p><strong>Upgrade</strong> — Rolling upgrade cho HA cluster, luôn backup trước</p></li>
</ul>

<p>Đến đây, bạn đã hoàn thành toàn bộ series <strong>HashiCorp Vault từ Cơ bản đến Nâng cao</strong>. Từ setup, secrets engines, auth methods, policies, agent, Kubernetes, CI/CD, đến production HA, Enterprise, monitoring và vận hành.</p>
