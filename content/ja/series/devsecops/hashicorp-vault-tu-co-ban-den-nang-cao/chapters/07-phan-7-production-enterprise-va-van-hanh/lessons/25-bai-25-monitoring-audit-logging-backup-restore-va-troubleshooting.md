---
id: 019d8b30-b225-7001-c002-e0c5f8200125
title: 'レッスン 25: 監視、監査ログ、バックアップ/復元、およびトラブルシューティング'
slug: bai-25-monitoring-audit-logging-backup-restore-va-troubleshooting
description: Prometheus + Grafana monitoring, audit device configuration, audit log analysis, Raft backup/restore, common issues troubleshooting, upgrade strategies.
duration_minutes: 220
is_free: true
video_url: null
sort_order: 25
section_title: 'パート 7: 生産、エンタープライズ、および運用'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault の基本から上級まで
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5372" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5372)"/>

  <!-- Decorations -->
  <g>
    <circle cx="612" cy="266" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="624" cy="258" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="636" cy="250" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="648" cy="242" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="660" cy="234" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="126" x2="1100" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="156" x2="1050" y2="226" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="961.507041555162,105.5 961.507041555162,146.5 926,167 890.492958444838,146.5 890.492958444838,105.50000000000001 926,85" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 D​​evSecOps — レッスン 25</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">レッスン 25: モニタリング、監査ログ、</tspan>
<tspan x="60" dy="42">バックアップ/復元とトラブルシューティング</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault の基本から上級まで</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: 本番、エンタープライズ、運用</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-monitoring-voi-prometheus-grafana"><strong>1。 Prometheus + Grafana</strong></h2> によるモニタリング

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

<h3 id="key-metrics"><strong>監視すべき主要なメトリクス</strong></h3>

<table>
<thead>
<tr><th>Metric</th><th>Mô tả</th><th>Alert threshold</th></tr>
</thead>
<tbody>
<tr><td><code>vault.core.handle_request.count</code></td><td>総リクエスト</td><td>傾向分析</td></tr>
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

<h3 id="enable-audit"><strong>監査デバイスの構成</strong></h3>

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

<h2 id="3-backup-restore"><strong>3。バックアップと復元</strong></h2>

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
<tr><td>再起動後にコンテナーがシールされます</td><td>自動シール解除なし</td><td>KMS/HSM 構成がシールされます</td></tr>
<tr><td>503 サービスが利用できません</td><td>ノードはスタンバイ/DR セカンダリ</td><td>リクエストをアクティブ ノードにルーティングします</td></tr>
<tr><td>リース数が継続的に増加します</td><td>クライアントがリースを取り消しません</td><td>リースを整理してください、TTLを確認してください</td></tr>
<tr><td>トークン ストアが大きすぎます</td><td>孤立したトークンは取り消されません</td><td>トークンを整理し、TTL を削減してください</td></tr>
<tr><td>ラフトリーダーの羽ばたき</td><td>ネットワークの不安定</td><td>ハートビートタイムアウトの増加</td></tr>
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

<h2 id="5-tong-ket"><strong>5。概要</strong></h2>

<ul>
<li><p><strong>Monitoring</strong> — Prometheus メトリクス + Grafana ダッシュボード + アラートが必要</p></li>
<li><p><strong>Audit</strong> — 常に 2 つ以上の監査デバイスを有効にし、ログを定期的に分析します</p></li>
<li><p><strong>Backup</strong> — 自動 Raft スナップショット、オフサイト保存、定期テスト復元</p></li>
<li><p><strong>トラブルシューティング</strong> — デバッグ コマンド、一般的な問題、およびそれらの対処方法を理解する</p></li>
<li><p><strong>Upgrade</strong> — HA クラスターのローリング アップグレード、常に最初にバックアップ</p></li>
</ul>

<p>この時点で、<strong>HashiCorp Vault シリーズ全体を Basic から Advanced</strong> まで完了しました。セットアップ、シークレット エンジン、認証方法、ポリシー、エージェント、Kubernetes、CI/CD から、運用 HA、エンタープライズ、監視、運用まで。</p>
