---
id: 019c9617-fba8-7143-940f-93cdbbdcd4a1
title: 'Bài 23: Patroni Configuration Management'
slug: bai-23-patroni-configuration-management
description: >-
  Dynamic configuration changes, DCS-based configuration, sử dụng patronictl
  edit-config và update config không downtime.
duration_minutes: 110
is_free: true
video_url: null
sort_order: 23
section_title: "Phần 5: Security & Nâng cao"
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8608" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8608)"/>

  <!-- Decorations -->
  <g>
    <circle cx="883" cy="219" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="666" cy="282" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="949" cy="85" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="732" cy="148" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="1015" cy="211" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="109" x2="1100" y2="189" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="139" x2="1050" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.1051177665154,187 1047.1051177665154,231 1009,253 970.8948822334847,231 970.8948822334847,187 1009,165" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Bài 23</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 23: Patroni Configuration Management</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability với Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Security &amp; Nâng cao</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Manage Patroni configuration dynamically</li><li>Use patronictl edit-config</li><li>Understand DCS-stored configuration</li><li>Perform zero-downtime config changes</li><li>Validate and rollback configurations</li></ul><h2 id="1-configuration-layers">1. Configuration Layers</h2><h3 id="11-configuration-hierarchy">1.1. Configuration hierarchy</h3><pre><code class="language-text">Priority (highest to lowest):
1. PostgreSQL parameters in postgresql.conf (overrides all)
2. DCS configuration (patronictl edit-config)
3. Patroni YAML file (/etc/patroni/patroni.yml)
4. PostgreSQL defaults

Typical workflow:
- Bootstrap config → patroni.yml
- Runtime changes → DCS (patronictl edit-config)
- Local overrides → postgresql.conf (rare, not recommended)
</code></pre><h3 id="12-configuration-scope">1.2. Configuration scope</h3><pre><code class="language-yaml"># Bootstrap config (patroni.yml) - initial setup only
bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    postgresql:
      parameters:
        max_connections: 100
        shared_buffers: 256MB

# Runtime config (DCS) - can be changed anytime
# Stored in etcd/consul/k8s and applied to all nodes
</code></pre><h2 id="2-view-current-configuration">2. View Current Configuration</h2><h3 id="21-show-dcs-configuration">2.1. Show DCS configuration</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml show-config

# Output:
# loop_wait: 10
# maximum_lag_on_failover: 1048576
# postgresql:
#   parameters:
#     archive_command: 'test ! -f /var/lib/postgresql/wal_archive/%f &amp;&amp; cp %p /var/lib/postgresql/wal_archive/%f'
#     archive_mode: 'on'
#     hot_standby: 'on'
#     max_connections: 100
#     max_replication_slots: 10
#     max_wal_senders: 10
#     shared_buffers: 256MB
#     wal_level: replica
#   use_pg_rewind: true
#   use_slots: true
# retry_timeout: 10
# ttl: 30
</code></pre><h3 id="22-get-specific-parameter">2.2. Get specific parameter</h3><pre><code class="language-bash"># Query etcd directly
export ETCDCTL_API=3
etcdctl get /service/postgres-cluster/config --print-value-only | jq .

# Or use patronictl
patronictl -c /etc/patroni/patroni.yml show-config | grep max_connections
</code></pre><h3 id="23-compare-with-local-config">2.3. Compare with local config</h3><pre><code class="language-bash"># Show differences
diff &lt;(patronictl -c /etc/patroni/patroni.yml show-config) \
     &lt;(grep -A 100 "^bootstrap:" /etc/patroni/patroni.yml)
</code></pre><h2 id="3-dynamic-configuration-changes">3. Dynamic Configuration Changes</h2><h3 id="31-edit-configuration-interactively">3.1. Edit configuration interactively</h3><pre><code class="language-bash"># Open editor with current config
patronictl -c /etc/patroni/patroni.yml edit-config

# This opens in $EDITOR (vim/nano)
# Example changes:
</code></pre><pre><code class="language-yaml"># Before:
postgresql:
  parameters:
    max_connections: 100
    shared_buffers: 256MB

# After:
postgresql:
  parameters:
    max_connections: 200  # Changed
    shared_buffers: 512MB  # Changed
    work_mem: 8MB  # Added
</code></pre><pre><code class="language-bash"># Save and exit
# Patroni will prompt:
# Apply these changes? [y/N]: y
# --- 
# +++ 
# @@ -5,7 +5,8 @@
#  postgresql:
#    parameters:
# -    max_connections: 100
# -    shared_buffers: 256MB
# +    max_connections: 200
# +    shared_buffers: 512MB
# +    work_mem: 8MB
# 
# Configuration changed
</code></pre><h3 id="32-automatic-vs-manual-restart">3.2. Automatic vs manual restart</h3><pre><code class="language-text">PostgreSQL parameters fall into 3 categories:

1. Dynamic (no restart):
   - work_mem, maintenance_work_mem
   - effective_cache_size
   - random_page_cost
   - Apply immediately with pg_reload_conf()

2. Reload required (SIGHUP):
   - max_connections (if increasing)
   - shared_buffers
   - Patroni will reload automatically

3. Restart required:
   - max_connections (if decreasing)
   - shared_buffers (decreasing)
   - wal_level, max_wal_senders
   - Patroni will restart replicas, then switchover and restart leader
</code></pre><h3 id="33-check-pending-restart">3.3. Check pending restart</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml list

# + Cluster: postgres-cluster (7329123456789012345) ---+----+-----------+
# | Member | Host       | Role    | State   | TL | Lag in MB | Pending restart |
# +--------+------------+---------+---------+----+-----------+-----------------+
# | node1  | 10.0.1.11  | Leader  | running |  5 |           | *               |
# | node2  | 10.0.1.12  | Replica | running |  5 |         0 | *               |
# | node3  | 10.0.1.13  | Replica | running |  5 |         0 | *               |
# +--------+------------+---------+---------+----+-----------+-----------------+
#
# * = Pending restart required
</code></pre><h3 id="34-trigger-restart">3.4. Trigger restart</h3><pre><code class="language-bash"># Restart specific node
patronictl -c /etc/patroni/patroni.yml restart postgres-cluster node2

# Restart all nodes (one by one)
patronictl -c /etc/patroni/patroni.yml restart postgres-cluster

# Force restart (even if no pending changes)
patronictl -c /etc/patroni/patroni.yml restart postgres-cluster node1 --force
</code></pre><h2 id="4-configuration-templates">4. Configuration Templates</h2><h3 id="41-set-configuration-via-command-line">4.1. Set configuration via command line</h3><pre><code class="language-bash"># Patch configuration
patronictl -c /etc/patroni/patroni.yml edit-config --apply - &lt;&lt;EOF
postgresql:
  parameters:
    max_connections: 300
    shared_buffers: 1GB
EOF

# Or use --set flag (if supported)
# patronictl edit-config --set postgresql.parameters.max_connections=300
</code></pre><h3 id="42-save-and-restore-configs">4.2. Save and restore configs</h3><pre><code class="language-bash"># Export current config
patronictl -c /etc/patroni/patroni.yml show-config &gt; config-backup-$(date +%Y%m%d).yml

# Restore config
patronictl -c /etc/patroni/patroni.yml edit-config --apply config-backup-20241125.yml
</code></pre><h3 id="43-version-control">4.3. Version control</h3><pre><code class="language-bash"># Track config changes in git
mkdir -p /opt/patroni/configs
cd /opt/patroni/configs
git init

# Save config
patronictl -c /etc/patroni/patroni.yml show-config &gt; current-config.yml
git add current-config.yml
git commit -m "Increased max_connections to 300"

# View history
git log --oneline
# abc123 Increased max_connections to 300
# def456 Added work_mem parameter
# ghi789 Initial configuration
</code></pre><h2 id="5-common-configuration-tasks">5. Common Configuration Tasks</h2><h3 id="51-increase-maxconnections">5.1. Increase max_connections</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml edit-config
</code></pre><pre><code class="language-yaml">postgresql:
  parameters:
    max_connections: 200  # Change from 100
    
    # May also need to increase:
    shared_buffers: 512MB  # ~25% of RAM
    max_wal_senders: 15    # max_connections / 10
    max_replication_slots: 15
</code></pre><p><strong>Note</strong>: Requires restart if decreasing, reload if increasing within limits.</p><h3 id="52-enable-query-logging">5.2. Enable query logging</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml edit-config
</code></pre><pre><code class="language-yaml">postgresql:
  parameters:
    log_statement: 'all'  # or 'ddl', 'mod', 'none'
    log_duration: 'on'
    log_min_duration_statement: 1000  # Log queries &gt; 1s
</code></pre><p><strong>Note</strong>: No restart required (dynamic parameter).</p><h3 id="53-adjust-memory-settings">5.3. Adjust memory settings</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml edit-config
</code></pre><pre><code class="language-yaml">postgresql:
  parameters:
    shared_buffers: 512MB          # Requires restart
    effective_cache_size: 2GB      # Dynamic
    work_mem: 8MB                  # Dynamic
    maintenance_work_mem: 128MB    # Dynamic
</code></pre><h3 id="54-tune-checkpoint-behavior">5.4. Tune checkpoint behavior</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml edit-config
</code></pre><pre><code class="language-yaml">postgresql:
  parameters:
    checkpoint_timeout: 15min
    checkpoint_completion_target: 0.9
    max_wal_size: 4GB
    min_wal_size: 1GB
</code></pre><p><strong>Note</strong>: Dynamic or reload, no restart needed.</p><h3 id="55-enable-pgstatstatements">5.5. Enable pg_stat_statements</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml edit-config
</code></pre><pre><code class="language-yaml">postgresql:
  parameters:
    shared_preload_libraries: 'pg_stat_statements'  # Requires restart!
    pg_stat_statements.track: 'all'
    pg_stat_statements.max: 10000
</code></pre><pre><code class="language-bash"># After restart, create extension
sudo -u postgres psql -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"
</code></pre><h2 id="6-validation-and-testing">6. Validation and Testing</h2><h3 id="61-check-parameter-values">6.1. Check parameter values</h3><pre><code class="language-sql">-- Current settings
SELECT name, setting, unit, context, source
FROM pg_settings
WHERE name IN ('max_connections', 'shared_buffers', 'work_mem');

-- Pending reload
SELECT name, setting, pending_restart
FROM pg_settings
WHERE pending_restart = true;
</code></pre><h3 id="62-validate-configuration">6.2. Validate configuration</h3><pre><code class="language-bash"># PostgreSQL validation
sudo -u postgres /usr/lib/postgresql/18/bin/postgres \
  -D /var/lib/postgresql/18/data \
  -C max_connections

# Check for errors
sudo journalctl -u patroni -n 100 --no-pager
</code></pre><h3 id="63-test-configuration-change">6.3. Test configuration change</h3><pre><code class="language-bash"># 1. Change config
patronictl -c /etc/patroni/patroni.yml edit-config --apply test-config.yml

# 2. Monitor logs
tail -f /var/lib/postgresql/18/data/log/postgresql-*.log

# 3. Check cluster status
watch -n 1 'patronictl -c /etc/patroni/patroni.yml list'

# 4. Verify parameter
psql -h 10.0.1.11 -U postgres -c "SHOW max_connections;"
</code></pre><h2 id="7-rollback-procedures">7. Rollback Procedures</h2><h3 id="71-immediate-rollback">7.1. Immediate rollback</h3><pre><code class="language-bash"># Restore from backup
patronictl -c /etc/patroni/patroni.yml edit-config --apply config-backup-20241125.yml

# Verify
patronictl -c /etc/patroni/patroni.yml show-config

# Restart if needed
patronictl -c /etc/patroni/patroni.yml restart postgres-cluster
</code></pre><h3 id="72-emergency-recovery">7.2. Emergency recovery</h3><pre><code class="language-bash"># If DCS is corrupted, reset from local config
# 1. Stop Patroni on all nodes
sudo systemctl stop patroni

# 2. Edit patroni.yml directly
sudo vi /etc/patroni/patroni.yml

# 3. Reinitialize DCS config (on leader only)
patronictl -c /etc/patroni/patroni.yml reinit postgres-cluster node1 --force

# 4. Start Patroni on all nodes
sudo systemctl start patroni
</code></pre><h2 id="8-advanced-configuration">8. Advanced Configuration</h2><h3 id="81-per-database-parameters">8.1. Per-database parameters</h3><pre><code class="language-sql">-- Set parameter for specific database
ALTER DATABASE myapp SET work_mem = '16MB';

-- Per-user settings
ALTER USER app_user SET statement_timeout = '30s';
</code></pre><p><strong>Note</strong>: These override cluster-wide settings.</p><h3 id="82-conditional-configuration">8.2. Conditional configuration</h3><pre><code class="language-yaml"># In patroni.yml (local config)
postgresql:
  parameters:
    # Leader-only settings
    synchronous_standby_names: 'node2,node3'
    
  # pg_hba.conf can differ per node
  pg_hba:
    - host replication replicator 10.0.1.0/24 scram-sha-256
    - host all all 10.0.1.0/24 scram-sha-256
</code></pre><h3 id="83-custom-callbacks">8.3. Custom callbacks</h3><pre><code class="language-yaml"># In patroni.yml
postgresql:
  callbacks:
    on_reload: /usr/local/bin/patroni-reload-hook.sh
    on_restart: /usr/local/bin/patroni-restart-hook.sh
    on_role_change: /usr/local/bin/patroni-role-change-hook.sh
</code></pre><pre><code class="language-bash">#!/bin/bash
# /usr/local/bin/patroni-reload-hook.sh
echo "$(date): PostgreSQL reloaded" &gt;&gt; /var/log/patroni-hooks.log

# Send notification
curl -X POST https://hooks.slack.com/... \
  -d '{"text": "PostgreSQL config reloaded on '$(hostname)'"}'
</code></pre><h2 id="9-configuration-best-practices">9. Configuration Best Practices</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>Use DCS for runtime changes</strong>&nbsp;- Consistent across cluster</li><li><strong>Version control configs</strong>&nbsp;- Track changes in git</li><li><strong>Test in staging first</strong>&nbsp;- Validate before production</li><li><strong>Document changes</strong>&nbsp;- Why, what, when</li><li><strong>Backup before changes</strong>&nbsp;- Easy rollback</li><li><strong>Monitor after changes</strong>&nbsp;- Watch for issues</li><li><strong>Schedule restarts</strong>&nbsp;- During maintenance window</li><li><strong>Use patronictl edit-config</strong>&nbsp;- Not manual etcd changes</li><li><strong>Validate parameters</strong>&nbsp;- Check pg_settings</li><li><strong>Review regularly</strong>&nbsp;- Quarterly config audits</li></ol><h3 id="%E2%9D%8C-dont">❌ DON'T</h3><ol><li><strong>Don't edit postgresql.conf</strong>&nbsp;- Use patronictl instead</li><li><strong>Don't change etcd directly</strong>&nbsp;- Use Patroni tools</li><li><strong>Don't skip backups</strong>&nbsp;- Always save before changes</li><li><strong>Don't apply untested changes</strong>&nbsp;- Test first</li><li><strong>Don't ignore pending restart</strong>&nbsp;- May not apply correctly</li><li><strong>Don't change wal_level lightly</strong>&nbsp;- Requires full restart</li><li><strong>Don't forget about replicas</strong>&nbsp;- Changes apply cluster-wide</li></ol><h2 id="10-configuration-monitoring">10. Configuration Monitoring</h2><h3 id="101-track-configuration-drift">10.1. Track configuration drift</h3><pre><code class="language-bash"># Check if all nodes have same config
for node in node1 node2 node3; do
  echo "=== $node ==="
  ssh $node "sudo -u postgres psql -Atc \"SELECT name, setting FROM pg_settings WHERE name = 'max_connections'\""
done
</code></pre><h3 id="102-alert-on-config-changes">10.2. Alert on config changes</h3><pre><code class="language-yaml"># Prometheus alert
groups:
  - name: patroni-config
    rules:
      - alert: PatroniConfigChanged
        expr: changes(patroni_config_last_modified[5m]) &gt; 0
        labels:
          severity: info
        annotations:
          summary: "Patroni configuration changed"
      
      - alert: PostgreSQLPendingRestart
        expr: patroni_pending_restart == 1
        for: 1h
        labels:
          severity: warning
        annotations:
          summary: "PostgreSQL pending restart for {{ $labels.instance }}"
</code></pre><h3 id="103-audit-log-for-config-changes">10.3. Audit log for config changes</h3><pre><code class="language-bash"># Enable auditd for /etc/patroni/
sudo auditctl -w /etc/patroni/ -p wa -k patroni-config

# View audit logs
sudo ausearch -k patroni-config

# Or use journalctl for Patroni service
sudo journalctl -u patroni --since "1 hour ago" | grep "config"
</code></pre><h2 id="11-lab-exercises">11. Lab Exercises</h2><h3 id="lab-1-dynamic-configuration-change">Lab 1: Dynamic configuration change</h3><p><strong>Tasks</strong>:</p><ol><li>View current configuration</li><li>Edit configuration to increase max_connections</li><li>Apply changes without restart</li><li>Verify new setting</li><li>Save configuration backup</li></ol><h3 id="lab-2-configuration-requiring-restart">Lab 2: Configuration requiring restart</h3><p><strong>Tasks</strong>:</p><ol><li>Change shared_buffers parameter</li><li>Observe pending restart flag</li><li>Perform rolling restart</li><li>Verify change applied</li><li>Test with pg_settings query</li></ol><h3 id="lab-3-rollback-configuration">Lab 3: Rollback configuration</h3><p><strong>Tasks</strong>:</p><ol><li>Backup current config</li><li>Make intentional bad change</li><li>Observe cluster behavior</li><li>Rollback to backup</li><li>Document recovery steps</li></ol><h3 id="lab-4-configuration-automation">Lab 4: Configuration automation</h3><p><strong>Tasks</strong>:</p><ol><li>Create shell script to apply config</li><li>Implement validation checks</li><li>Add backup/rollback logic</li><li>Test script on cluster</li><li>Add to cron for scheduled changes</li></ol><h2 id="12-t%E1%BB%95ng-k%E1%BA%BFt">12. Tổng kết</h2><h3 id="configuration-management-flow">Configuration Management Flow</h3><pre><code class="language-text">1. Backup current config
   ↓
2. Edit configuration (patronictl edit-config)
   ↓
3. Validate changes
   ↓
4. Apply to DCS
   ↓
5. Patroni propagates to all nodes
   ↓
6. Reload or restart as needed
   ↓
7. Verify changes applied
   ↓
8. Monitor cluster health
</code></pre><h3 id="key-commands">Key Commands</h3><pre><code class="language-bash"># View config
patronictl show-config

# Edit config
patronictl edit-config

# Backup config
patronictl show-config &gt; backup.yml

# Restore config
patronictl edit-config --apply backup.yml

# Check pending restart
patronictl list

# Restart node
patronictl restart postgres-cluster node1
</code></pre><h3 id="parameter-types">Parameter Types</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Type</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Action</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Examples</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">Dynamic</td><td style="padding: 5px 10px;">Immediate</td><td style="padding: 5px 10px;">work_mem, effective_cache_size</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Reload</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">SIGHUP</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">max_connections (up), log_statement</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Restart</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Full restart</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">shared_buffers (down), wal_level</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="next-steps">Next Steps</h3><p>Bài 24 sẽ cover&nbsp;<strong>Upgrade Strategies</strong>:</p><ul><li>PostgreSQL major version upgrades</li><li>Patroni version upgrades</li><li>Zero-downtime upgrade procedures</li><li>Rollback strategies</li><li>Testing and validation</li></ul>
