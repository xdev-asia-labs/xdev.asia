---
id: 019c9617-fbbd-7170-9eb6-c3c63e67172b
title: 'Bài 29: Deploy Production-ready Cluster'
slug: bai-29-deploy-production-ready-cluster
description: >-
  Triển khai hoàn chỉnh cluster từ đầu, tạo documentation, runbook, knowledge
  transfer và đánh giá cuối khóa học.
duration_minutes: 185
is_free: true
video_url: null
sort_order: 29
section_title: "Phần 6: Production & Case Studies"
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8705" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8705)"/>

  <!-- Decorations -->
  <g>
    <circle cx="739" cy="127" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="878" cy="246" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1017" cy="105" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="656" cy="224" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="795" cy="83" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="97" x2="1100" y2="177" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="127" x2="1050" y2="197" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="974.712812921102,131 974.712812921102,163 947,179 919.287187078898,163 919.287187078898,131 947,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Bài 29</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 29: Deploy Production-ready Cluster</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability với Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Production &amp; Case Studies</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Deploy complete production-ready PostgreSQL HA cluster</li><li>Implement all best practices learned in this course</li><li>Create comprehensive operational documentation</li><li>Perform final validation and handoff</li><li>Complete capstone assessment</li></ul><h2 id="1-pre-deployment-checklist">1. Pre-Deployment Checklist</h2><h3 id="11-infrastructure-readiness">1.1. Infrastructure readiness</h3><pre><code class="language-text">☐ Hardware/VMs provisioned
  ☐ 3+ PostgreSQL nodes (Leader + 2 Replicas minimum)
  ☐ 3 etcd nodes (can co-locate with PostgreSQL)
  ☐ 2 HAProxy/Load balancer nodes
  ☐ 1 Monitoring server (Prometheus + Grafana)
  ☐ 1 Bastion host (for secure access)

☐ Network configuration
  ☐ VPC/VLAN created with appropriate CIDR
  ☐ Subnets configured (public + private)
  ☐ Security groups/firewall rules defined
  ☐ NAT gateway for internet access
  ☐ VPN for remote access (optional)

☐ Storage provisioned
  ☐ Data volumes (SSD, appropriate IOPS)
  ☐ WAL archive storage (S3/NFS)
  ☐ Backup storage (S3/GCS/tape)
  ☐ Log storage (centralized logging)

☐ DNS configuration
  ☐ postgres-master.example.com → HAProxy master
  ☐ postgres-replica.example.com → HAProxy replicas
  ☐ postgres-admin.example.com → Direct access (VPN only)

☐ Security
  ☐ SSL certificates generated and installed
  ☐ SSH keys distributed
  ☐ Secrets management (Vault/AWS Secrets Manager)
  ☐ Audit logging configured

☐ Monitoring
  ☐ Prometheus installed and configured
  ☐ Grafana dashboards imported
  ☐ Alert rules configured
  ☐ PagerDuty/Slack integration tested

☐ Documentation
  ☐ Architecture diagrams updated
  ☐ Runbooks created
  ☐ Contact list (on-call rotation)
  ☐ Escalation procedures
</code></pre><h2 id="2-step-by-step-deployment">2. Step-by-Step Deployment</h2><h3 id="21-phase-1-base-system-setup-day-1">2.1. Phase 1: Base system setup (Day 1)</h3><pre><code class="language-bash">#!/bin/bash
# deploy_phase1.sh - Base system setup

set -e

NODES=("pg-node1" "pg-node2" "pg-node3")

echo "=== Phase 1: Base System Setup ==="

for node in "${NODES[@]}"; do
  echo "Configuring $node..."
  
  # Update system
  ssh $node "sudo apt-get update &amp;&amp; sudo apt-get upgrade -y"
  
  # Install required packages
  ssh $node "sudo apt-get install -y \
    curl wget vim git htop \
    net-tools python3 python3-pip \
    postgresql-common"
  
  # Configure system limits
  ssh $node "sudo tee /etc/security/limits.d/postgres.conf" &lt;&lt;EOF
postgres soft nofile 65536
postgres hard nofile 65536
postgres soft nproc 8192
postgres hard nproc 8192
EOF
  
  # Configure sysctl
  ssh $node "sudo tee /etc/sysctl.d/99-postgres.conf" &lt;&lt;EOF
vm.swappiness = 1
vm.overcommit_memory = 2
vm.dirty_ratio = 10
vm.dirty_background_ratio = 3
net.ipv4.tcp_keepalive_time = 60
net.ipv4.tcp_keepalive_intvl = 10
net.ipv4.tcp_keepalive_probes = 6
EOF
  
  ssh $node "sudo sysctl -p /etc/sysctl.d/99-postgres.conf"
  
  # Create directories
  ssh $node "sudo mkdir -p /var/lib/postgresql/wal_archive"
  ssh $node "sudo mkdir -p /var/lib/postgresql/backups"
  
  echo "$node configured ✓"
done

echo "Phase 1 complete! ✅"
</code></pre><h3 id="22-phase-2-etcd-cluster-day-1">2.2. Phase 2: etcd cluster (Day 1)</h3><pre><code class="language-bash">#!/bin/bash
# deploy_phase2.sh - Deploy etcd cluster

echo "=== Phase 2: etcd Cluster Setup ==="

# Using Ansible for etcd deployment
ansible-playbook -i inventory.ini etcd-playbook.yml

# Verify etcd cluster
echo "Verifying etcd cluster health..."
ssh pg-node1 "etcdctl endpoint health --cluster"

# Expected output:
# http://10.0.1.11:2379 is healthy: successfully committed proposal: took = 1.234ms
# http://10.0.1.12:2379 is healthy: successfully committed proposal: took = 1.456ms
# http://10.0.1.13:2379 is healthy: successfully committed proposal: took = 1.678ms

echo "Phase 2 complete! ✅"
</code></pre><h3 id="23-phase-3-postgresql-patroni-day-2">2.3. Phase 3: PostgreSQL + Patroni (Day 2)</h3><pre><code class="language-bash">#!/bin/bash
# deploy_phase3.sh - Deploy PostgreSQL + Patroni

echo "=== Phase 3: PostgreSQL + Patroni Setup ==="

# Deploy with Ansible
ansible-playbook -i inventory.ini postgresql-patroni-playbook.yml

# Wait for cluster initialization
echo "Waiting for Patroni cluster to initialize..."
sleep 60

# Verify cluster
ssh pg-node1 "patronictl -c /etc/patroni/patroni.yml list"

# Expected output:
# + Cluster: postgres-cluster -------+----+-----------+
# | Member   | Host       | Role    | State     | TL | Lag in MB |
# +----------+------------+---------+-----------+----+-----------+
# | pg-node1 | 10.0.1.11  | Leader  | running   |  1 |           |
# | pg-node2 | 10.0.1.12  | Replica | streaming |  1 |         0 |
# | pg-node3 | 10.0.1.13  | Replica | streaming |  1 |         0 |
# +----------+------------+---------+-----------+----+-----------+

echo "Phase 3 complete! ✅"
</code></pre><h3 id="24-phase-4-connection-pooling-day-2">2.4. Phase 4: Connection pooling (Day 2)</h3><pre><code class="language-bash">#!/bin/bash
# deploy_phase4.sh - Deploy PgBouncer

echo "=== Phase 4: PgBouncer Setup ==="

ansible-playbook -i inventory.ini pgbouncer-playbook.yml

# Test connection through PgBouncer
psql -h pg-node1 -p 6432 -U postgres -c "SHOW POOLS;"

echo "Phase 4 complete! ✅"
</code></pre><h3 id="25-phase-5-load-balancing-day-3">2.5. Phase 5: Load balancing (Day 3)</h3><pre><code class="language-bash">#!/bin/bash
# deploy_phase5.sh - Deploy HAProxy

echo "=== Phase 5: HAProxy Setup ==="

ansible-playbook -i inventory.ini haproxy-playbook.yml

# Test connections
echo "Testing master connection..."
psql -h postgres-master.example.com -U postgres -c "SELECT inet_server_addr();"

echo "Testing replica connection..."
psql -h postgres-replica.example.com -U postgres -c "SELECT inet_server_addr();"

echo "Phase 5 complete! ✅"
</code></pre><h3 id="26-phase-6-monitoring-day-3">2.6. Phase 6: Monitoring (Day 3)</h3><pre><code class="language-bash">#!/bin/bash
# deploy_phase6.sh - Deploy monitoring stack

echo "=== Phase 6: Monitoring Setup ==="

ansible-playbook -i inventory.ini monitoring-playbook.yml

# Verify Prometheus targets
curl http://prometheus.example.com:9090/api/v1/targets | jq '.data.activeTargets[] | select(.labels.job=="postgres") | {instance: .labels.instance, health: .health}'

# Import Grafana dashboards
for dashboard in dashboards/*.json; do
  curl -X POST \
    http://admin:admin@grafana.example.com:3000/api/dashboards/db \
    -H "Content-Type: application/json" \
    -d @$dashboard
done

echo "Phase 6 complete! ✅"
echo "Grafana: http://grafana.example.com:3000"
</code></pre><h3 id="27-phase-7-backup-configuration-day-4">2.7. Phase 7: Backup configuration (Day 4)</h3><pre><code class="language-bash">#!/bin/bash
# deploy_phase7.sh - Configure backups

echo "=== Phase 7: Backup Configuration ==="

# Deploy pgBackRest or WAL-G
ansible-playbook -i inventory.ini backup-playbook.yml

# Schedule backup cron jobs
ssh pg-node1 "sudo -u postgres crontab -l" &lt;&lt;EOF
# Daily full backup at 2 AM
0 2 * * * /usr/local/bin/pg_backup.sh full

# Hourly incremental backup
0 * * * * /usr/local/bin/pg_backup.sh incremental

# Continuous WAL archiving (handled by PostgreSQL archive_command)
EOF

# Test backup
echo "Testing backup..."
ssh pg-node1 "sudo -u postgres /usr/local/bin/pg_backup.sh full --test"

# Test restore (to separate directory)
echo "Testing restore..."
ssh pg-node1 "sudo -u postgres /usr/local/bin/pg_restore.sh /var/lib/postgresql/restore_test"

echo "Phase 7 complete! ✅"
</code></pre><h2 id="3-post-deployment-validation">3. Post-Deployment Validation</h2><h3 id="31-functional-testing">3.1. Functional testing</h3><pre><code class="language-bash">#!/bin/bash
# validate_deployment.sh

echo "=== Deployment Validation ==="

# Test 1: Cluster health
echo "Test 1: Cluster health"
patronictl -c /etc/patroni/patroni.yml list
if [ $? -eq 0 ]; then
  echo "✅ Cluster is healthy"
else
  echo "❌ Cluster health check failed"
  exit 1
fi

# Test 2: Replication lag
echo "Test 2: Replication lag"
LAG=$(psql -h pg-node2 -U postgres -Atc "
  SELECT pg_wal_lsn_diff(
    pg_last_wal_receive_lsn(),
    pg_last_wal_replay_lsn()
  );
")
if [ $LAG -lt 1048576 ]; then  # &lt; 1MB
  echo "✅ Replication lag acceptable: $LAG bytes"
else
  echo "⚠️  High replication lag: $LAG bytes"
fi

# Test 3: Write operations
echo "Test 3: Write operations"
psql -h postgres-master.example.com -U postgres &lt;&lt;EOF
CREATE TABLE validation_test (id serial primary key, data text, created_at timestamp default now());
INSERT INTO validation_test (data) VALUES ('Test data 1'), ('Test data 2'), ('Test data 3');
SELECT * FROM validation_test;
EOF
if [ $? -eq 0 ]; then
  echo "✅ Write operations successful"
else
  echo "❌ Write operations failed"
  exit 1
fi

# Test 4: Read from replica
echo "Test 4: Read from replica"
psql -h postgres-replica.example.com -U postgres -c "SELECT * FROM validation_test;"
if [ $? -eq 0 ]; then
  echo "✅ Read from replica successful"
else
  echo "❌ Read from replica failed"
  exit 1
fi

# Test 5: Automatic failover
echo "Test 5: Automatic failover (simulation)"
read -p "Press Enter to simulate leader failure..."
CURRENT_LEADER=$(patronictl -c /etc/patroni/patroni.yml list | grep Leader | awk '{print $2}')
ssh $CURRENT_LEADER "sudo systemctl stop patroni"
echo "Waiting 30 seconds for failover..."
sleep 30
patronictl -c /etc/patroni/patroni.yml list
NEW_LEADER=$(patronictl -c /etc/patroni/patroni.yml list | grep Leader | awk '{print $2}')
if [ "$CURRENT_LEADER" != "$NEW_LEADER" ]; then
  echo "✅ Automatic failover successful: $CURRENT_LEADER → $NEW_LEADER"
  # Restore old leader
  ssh $CURRENT_LEADER "sudo systemctl start patroni"
else
  echo "❌ Failover did not occur"
  exit 1
fi

# Test 6: Backup and restore
echo "Test 6: Backup and restore"
sudo -u postgres /usr/local/bin/pg_backup.sh full
if [ $? -eq 0 ]; then
  echo "✅ Backup successful"
else
  echo "❌ Backup failed"
  exit 1
fi

# Test 7: Monitoring
echo "Test 7: Monitoring"
curl -s http://prometheus.example.com:9090/api/v1/query?query=up | jq '.data.result[] | select(.metric.job=="postgres")'
if [ $? -eq 0 ]; then
  echo "✅ Monitoring operational"
else
  echo "❌ Monitoring check failed"
  exit 1
fi

echo ""
echo "🎉 All validation tests passed!"
echo "Production cluster is ready! ✅"
</code></pre><h3 id="32-performance-testing">3.2. Performance testing</h3><pre><code class="language-bash">#!/bin/bash
# performance_test.sh

echo "=== Performance Testing ==="

# Test 1: Single connection throughput
echo "Test 1: Single connection throughput"
pgbench -i -s 100 testdb
pgbench -c 1 -j 1 -t 10000 testdb
# Expected: &gt; 500 TPS

# Test 2: Multi-connection throughput
echo "Test 2: Multi-connection throughput (10 connections)"
pgbench -c 10 -j 2 -t 10000 testdb
# Expected: &gt; 3,000 TPS

# Test 3: Read-only workload
echo "Test 3: Read-only workload on replica"
pgbench -c 10 -j 2 -S -t 10000 -h postgres-replica.example.com testdb
# Expected: &gt; 5,000 TPS

# Test 4: Connection pooling efficiency
echo "Test 4: Connection pooling (100 connections)"
pgbench -c 100 -j 4 -t 1000 -h pg-node1 -p 6432 testdb
# Should handle without errors

# Test 5: Replication lag under load
echo "Test 5: Replication lag under load"
pgbench -c 50 -j 4 -T 60 testdb &amp;
PGBENCH_PID=$!
while kill -0 $PGBENCH_PID 2&gt;/dev/null; do
  LAG=$(psql -h pg-node2 -U postgres -Atc "SELECT pg_wal_lsn_diff(pg_last_wal_receive_lsn(), pg_last_wal_replay_lsn());")
  echo "Current replication lag: $LAG bytes"
  sleep 5
done
# Expected: Lag &lt; 10MB throughout test

echo "Performance testing complete!"
</code></pre><h2 id="4-operational-documentation">4. Operational Documentation</h2><h3 id="41-runbook-structure">4.1. Runbook structure</h3><pre><code class="language-markdown"># PostgreSQL HA Cluster Runbook

## 1. Cluster Overview
- Architecture: 3-node Patroni cluster with HAProxy
- Leader: pg-node1 (10.0.1.11)
- Replicas: pg-node2 (10.0.1.12), pg-node3 (10.0.1.13)
- Load balancers: haproxy1, haproxy2
- Monitoring: Prometheus + Grafana
- Backup: Daily full to S3, continuous WAL archiving

## 2. Common Tasks

### 2.1. Check cluster status
```bash
patronictl -c /etc/patroni/patroni.yml list
</code></pre><h3 id="22-check-replication-lag">2.2. Check replication lag</h3><pre><code class="language-bash">psql -h pg-node2 -U postgres -c "
  SELECT client_addr,
         pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS lag_bytes
  FROM pg_stat_replication;
"
</code></pre><h3 id="23-perform-planned-switchover">2.3. Perform planned switchover</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml switchover postgres-cluster \
  --leader pg-node1 \
  --candidate pg-node2 \
  --scheduled 'now'
</code></pre><h3 id="24-add-new-replica">2.4. Add new replica</h3><pre><code class="language-bash"># See detailed procedure in Section 8
</code></pre><h3 id="25-manual-backup">2.5. Manual backup</h3><pre><code class="language-bash">sudo -u postgres /usr/local/bin/pg_backup.sh full
</code></pre><h2 id="3-troubleshooting">3. Troubleshooting</h2><h3 id="31-cluster-split-brain">3.1. Cluster split-brain</h3><p><strong>Symptoms</strong>: Multiple leaders reported&nbsp;<strong>Resolution</strong>: See Section 9.1</p><h3 id="32-high-replication-lag">3.2. High replication lag</h3><p><strong>Symptoms</strong>: Lag &gt; 100MB for &gt; 5 minutes&nbsp;<strong>Resolution</strong>: See Section 9.2</p><h3 id="33-disk-space-exhaustion">3.3. Disk space exhaustion</h3><p><strong>Symptoms</strong>: Disk usage &gt; 90%&nbsp;<strong>Resolution</strong>: See Section 9.3</p><h2 id="4-emergency-procedures">4. Emergency Procedures</h2><h3 id="41-complete-cluster-failure">4.1. Complete cluster failure</h3><ol><li>Check etcd cluster health</li><li>If etcd down, restore from backup</li><li>Reinitialize Patroni cluster</li><li>Restore data from backup if needed</li></ol><h3 id="42-data-corruption">4.2. Data corruption</h3><ol><li>Stop writes (set read-only)</li><li>Identify corruption extent</li><li>Perform PITR to point before corruption</li><li>Validate restored data</li><li>Resume normal operations</li></ol><h2 id="5-escalation">5. Escalation</h2><ul><li>L1 Support: DevOps on-call (PagerDuty)</li><li>L2 Support: DBA team (Slack: #dba-oncall)</li><li>L3 Support: Senior DBA (Phone: xxx-xxx-xxxx)</li></ul><pre><code>### 4.2. Monitoring dashboard guide

```markdown
# Grafana Dashboard Guide

## Primary Dashboard: PostgreSQL Cluster Overview

### Panels:

1. **Cluster Health**
   - Shows current leader
   - Replica count
   - Failed/stopped nodes
   - Alert: Any node down for &gt; 1 minute

2. **Query Performance**
   - Queries per second (QPS)
   - Average query duration
   - 95th percentile latency
   - Alert: p95 latency &gt; 100ms

3. **Replication Lag**
   - Lag in bytes for each replica
   - Lag in seconds
   - Alert: Lag &gt; 10MB or &gt; 10 seconds

4. **Resource Usage**
   - CPU usage per node
   - Memory usage
   - Disk I/O
   - Alert: CPU &gt; 80%, Memory &gt; 90%, Disk &gt; 85%

5. **Connections**
   - Active connections
   - Idle connections
   - PgBouncer pool usage
   - Alert: Connections &gt; 90% of max_connections

6. **Disk Space**
   - Data directory usage
   - WAL directory usage
   - Backup storage usage
   - Alert: Any filesystem &gt; 85%

7. **Backup Status**
   - Last backup time
   - Backup size
   - WAL archiving status
   - Alert: No backup in 25 hours

## How to Use:
- Access: http://grafana.example.com:3000
- Username: admin (stored in 1Password)
- Time range: Last 1 hour (default), adjustable
- Refresh: 10 seconds auto-refresh
</code></pre><h2 id="5-knowledge-transfer">5. Knowledge Transfer</h2><h3 id="51-training-checklist">5.1. Training checklist</h3><pre><code class="language-text">☐ PostgreSQL fundamentals
  ☐ Architecture (processes, memory, storage)
  ☐ Replication (streaming, logical)
  ☐ Backup and recovery (PITR)

☐ Patroni operations
  ☐ Cluster management (patronictl commands)
  ☐ Configuration management (edit-config)
  ☐ Failover and switchover
  ☐ Troubleshooting common issues

☐ Monitoring and alerting
  ☐ Grafana dashboards interpretation
  ☐ Prometheus queries
  ☐ Alert handling procedures
  ☐ PagerDuty escalation

☐ Backup and restore
  ☐ Manual backup execution
  ☐ Restore procedures (full and PITR)
  ☐ Backup validation

☐ Incident response
  ☐ Runbook navigation
  ☐ Communication protocols
  ☐ Post-mortem process

☐ Maintenance tasks
  ☐ Vacuum and analyze
  ☐ Index maintenance
  ☐ Configuration changes
  ☐ Version upgrades
</code></pre><h3 id="52-handoff-meeting-agenda">5.2. Handoff meeting agenda</h3><pre><code class="language-markdown"># Production Cluster Handoff Meeting

Date: [Date]
Duration: 2 hours
Attendees: Project team, Operations team, Management

## Agenda:

1. **Introduction** (10 min)
   - Project overview
   - Architecture summary

2. **Live Demo** (30 min)
   - Cluster status check
   - Query execution
   - Monitoring dashboards
   - Simulate failover
   - Restore from backup

3. **Documentation Review** (20 min)
   - Architecture diagrams
   - Runbooks
   - Monitoring guide
   - Backup procedures

4. **Handoff Materials** (15 min)
   - Access credentials (1Password)
   - Git repository access
   - Monitoring URL and credentials
   - PagerDuty integration
   - Contact list

5. **Q&amp;A** (30 min)
   - Open questions from operations team
   - Clarifications

6. **Action Items** (10 min)
   - Shadow period: 2 weeks
   - First on-call rotation
   - Knowledge assessment date

7. **Sign-off** (5 min)
   - Formal handoff acceptance
   - Support plan for first 30 days

## Deliverables:
- [ ] Architecture documentation (Confluence)
- [ ] Runbooks (GitHub)
- [ ] Monitoring dashboards (Grafana)
- [ ] Access credentials (1Password)
- [ ] Contact list (PagerDuty)
- [ ] Training materials (Google Drive)
</code></pre><h2 id="6-production-go-live-checklist">6. Production Go-Live Checklist</h2><pre><code class="language-text">D-7 (One week before):
☐ All validation tests passed
☐ Performance benchmarks met
☐ Monitoring and alerting verified
☐ Backup and restore tested
☐ Runbooks reviewed and approved
☐ Operations team trained
☐ Stakeholders notified of go-live date
☐ Rollback plan documented

D-1 (Day before):
☐ Final smoke tests passed
☐ All data migrated (if applicable)
☐ DNS records prepared (not yet applied)
☐ Load balancer configured
☐ On-call rotation confirmed
☐ War room scheduled (Zoom/Slack)
☐ Communication plan ready

D-Day (Go-live):
☐ 08:00: Final system check
☐ 09:00: Enable monitoring alerts
☐ 10:00: Update DNS to point to new cluster
☐ 10:15: Verify application connectivity
☐ 10:30: Monitor for errors (30 min)
☐ 11:00: Declare success or rollback
☐ 12:00: Post go-live review meeting
☐ EOD: Document any issues and resolutions

D+1 (Day after):
☐ Review monitoring data (full 24 hours)
☐ Check backup completed successfully
☐ Verify replication lag within targets
☐ Confirm no alerts or incidents
☐ Operations team debrief

D+7 (One week after):
☐ Performance review against baselines
☐ Cost analysis (actual vs estimated)
☐ Lessons learned session
☐ Update documentation with findings
☐ Formal project closure
</code></pre><h2 id="7-final-assessment">7. Final Assessment</h2><h3 id="71-capstone-project-requirements">7.1. Capstone project requirements</h3><pre><code class="language-markdown"># Capstone Project: Deploy Production-Ready PostgreSQL HA Cluster

## Objective:
Deploy a fully functional, production-ready PostgreSQL High Availability cluster that meets all requirements specified in Bài 28.

## Requirements:

1. **Architecture** (20 points)
   - [ ] 3-node Patroni cluster deployed
   - [ ] etcd cluster configured
   - [ ] HAProxy load balancing implemented
   - [ ] Network properly segmented

2. **High Availability** (20 points)
   - [ ] Automatic failover functional
   - [ ] RTO &lt; 30 seconds demonstrated
   - [ ] RPO = 0 (synchronous replication)
   - [ ] No single point of failure

3. **Backup &amp; Recovery** (15 points)
   - [ ] Automated daily backups configured
   - [ ] WAL archiving functional
   - [ ] PITR tested successfully
   - [ ] Backup retention policy implemented

4. **Monitoring &amp; Alerting** (15 points)
   - [ ] Prometheus monitoring deployed
   - [ ] Grafana dashboards configured
   - [ ] Alert rules defined
   - [ ] PagerDuty/Slack integration working

5. **Security** (10 points)
   - [ ] SSL/TLS encryption enabled
   - [ ] Network firewall rules configured
   - [ ] Audit logging enabled
   - [ ] Secrets properly managed

6. **Documentation** (10 points)
   - [ ] Architecture diagram created
   - [ ] Runbooks written
   - [ ] Monitoring guide documented
   - [ ] Handoff materials prepared

7. **Testing** (10 points)
   - [ ] All functional tests passed
   - [ ] Performance benchmarks met
   - [ ] Failover drill successful
   - [ ] PITR restore validated

## Deliverables:

1. Working PostgreSQL HA cluster (accessible for validation)
2. Architecture documentation (Markdown/Confluence)
3. Runbooks (GitHub repository)
4. Monitoring dashboards (Grafana export)
5. Test results and evidence (screenshots/logs)
6. Video presentation (15 minutes)

## Grading:
- Total: 100 points
- Pass: 70+ points
- Excellence: 90+ points

## Submission:
- Due: [Date]
- Format: GitHub repository + video link
- Presentation: Live demo + Q&amp;A (30 minutes)
</code></pre><h3 id="72-assessment-rubric">7.2. Assessment rubric</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Criteria</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Excellent (9-10)</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Good (7-8)</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Satisfactory (5-6)</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Needs Improvement (0-4)</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Architecture</strong></td><td style="padding: 5px 10px;">All components deployed, well-designed, scalable</td><td style="padding: 5px 10px;">Most components present, minor issues</td><td style="padding: 5px 10px;">Basic setup, some components missing</td><td style="padding: 5px 10px;">Incomplete or non-functional</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">HA</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">RTO &lt; 30s, RPO = 0, no downtime</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">RTO &lt; 60s, minimal RPO, brief downtime</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">RTO &gt; 60s, some data loss possible</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Frequent failures, unacceptable RTO/RPO</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Backup</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Automated, tested, documented</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Automated, tested</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Manual process, untested</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Not implemented</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Monitoring</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Comprehensive, automated alerts</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Basic monitoring, some alerts</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Manual checks only</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">No monitoring</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Security</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">All best practices implemented</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Most security measures in place</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Basic security</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Insecure configuration</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Documentation</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Comprehensive, clear, actionable</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Good documentation, minor gaps</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Basic docs, some missing info</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Poor or missing docs</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Testing</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">All tests passed, thorough</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Most tests passed</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Some tests passed</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Testing incomplete</td></tr></tbody></table>
<!--kg-card-end: html-->
<h2 id="8-t%E1%BB%95ng-k%E1%BA%BFt">8. Tổng kết</h2><h3 id="key-achievements">Key Achievements</h3><pre><code class="language-text">Congratulations! You have completed the PostgreSQL High Availability course.

You have learned:
✅ PostgreSQL replication and HA concepts
✅ Patroni cluster deployment and management
✅ etcd distributed configuration store
✅ Monitoring with Prometheus and Grafana
✅ Backup and recovery (PITR)
✅ Failover and switchover procedures
✅ Security best practices
✅ Multi-datacenter setups
✅ Kubernetes deployment
✅ Configuration management
✅ Upgrade strategies
✅ Real-world case studies
✅ Automation with Ansible
✅ Disaster recovery drills
✅ Architecture design
✅ Production deployment

You are now ready to:
- Deploy and manage production PostgreSQL HA clusters
- Design high-availability database architectures
- Troubleshoot and resolve HA issues
- Implement best practices for database reliability
- Train and mentor others on PostgreSQL HA
</code></pre><h3 id="next-steps">Next Steps</h3><pre><code class="language-text">Continue your learning:

1. Advanced Topics:
   - PostgreSQL internals and performance tuning
   - Logical replication and multi-master setups
   - Sharding and horizontal scaling (Citus)
   - PostgreSQL on Kubernetes at scale

2. Certifications:
   - PostgreSQL Certified Professional (PGCP)
   - AWS Database Specialty
   - Kubernetes Administrator (CKA)

3. Community:
   - Join PostgreSQL mailing lists
   - Contribute to Patroni/PostgreSQL projects
   - Attend PostgreSQL conferences (PGConf)
   - Share knowledge through blog posts/talks

4. Practice:
   - Build personal projects with HA
   - Contribute to open-source databases
   - Participate in chaos engineering experiments
   - Mentor junior DBAs
</code></pre><h3 id="resources">Resources</h3><pre><code class="language-text">Documentation:
- PostgreSQL Official Docs: https://www.postgresql.org/docs/
- Patroni GitHub: https://github.com/zalando/patroni
- Patroni Docs: https://patroni.readthedocs.io/

Community:
- PostgreSQL Slack: https://postgres-slack.herokuapp.com/
- r/PostgreSQL: https://reddit.com/r/PostgreSQL
- PostgreSQL Discord: https://discord.gg/postgresql

Training:
- Percona PostgreSQL Training
- 2ndQuadrant PostgreSQL Courses
- Crunchy Data PostgreSQL Training

Conferences:
- PGConf.US (annual)
- PostgreSQL Conference Europe
- FOSDEM PostgreSQL DevRoom
</code></pre><h3 id="final-words">Final Words</h3><pre><code class="language-text">Thank you for completing this course!

Remember:
- High availability is a journey, not a destination
- Always test your failover procedures
- Document everything
- Automate where possible
- Monitor relentlessly
- Learn from failures
- Share your knowledge

Good luck with your PostgreSQL HA deployments!

Feel free to reach out with questions or feedback.

Happy hacking! 🚀🐘
</code></pre>
