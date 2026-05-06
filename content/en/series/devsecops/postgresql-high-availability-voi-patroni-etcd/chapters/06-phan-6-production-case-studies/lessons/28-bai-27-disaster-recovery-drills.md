---
id: 019c9617-fbb5-7070-ba8e-a4ee3baf3c1d
title: 'Lesson 27: Disaster Recovery Drills'
slug: bai-27-disaster-recovery-drills
description: DR planning, testing procedures, incident response process, post-mortem analysis and full DR scenario simulation.
duration_minutes: 110
is_free: true
video_url: null
sort_order: 27
section_title: 'Part 6: Production & Case Studies'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability with Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8633" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8633)"/>

  <!-- Decorations -->
  <g>
    <circle cx="863" cy="39" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="626" cy="42" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="889" cy="45" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="652" cy="48" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="915" cy="51" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="249" x2="1100" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="279" x2="1050" y2="349" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1087.1051177665154,227 1087.1051177665154,271 1049,293 1010.8948822334847,271 1010.8948822334847,227 1049,205" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Lesson 27</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 27: Disaster Recovery Drills</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability with Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Production &amp; Case Studies</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">Objective_</h2><p>After this lesson, you will:_</p><ul><li>Plan comprehensive disaster recovery procedures_</li><li>Execute DR drills scientific</li><li>Measure and optimize RTO/RPO</li><li>Conduct incident response exercises</li><li>Document and improve DR processes</li></ul><h2 id="1-dr-planning-foundation">1. DR Planning Foundation</h2><h3 id="11-key-dr-metrics">1.1. Key DR metrics</h3><pre><code class="language-text">RTO (Recovery Time Objective):
- Maximum acceptable downtime
- Example: 15 minutes

RPO (Recovery Point Objective):
- Maximum acceptable data loss
- Example: 5 minutes

RTA (Recovery Time Actual):
- Actual time taken in drill
- Goal: RTA &lt; RTO

RPD (Recovery Point Detected):
- Actual data loss in drill
- Goal: RPD &lt; RPO
</code></pre><h3 id="12-dr-scenarios-to-test">1.2. DR scenarios to test</h3><pre><code class="language-text">1. Single node failure
   - Impact: Low (automatic failover)
   - RTO: &lt; 1 minute
   - RPO: 0 (synchronous replication)

2. Leader node failure
   - Impact: Medium (brief disruption)
   - RTO: &lt; 2 minutes
   - RPO: 0

3. Complete datacenter failure
   - Impact: High (manual intervention)
   - RTO: &lt; 15 minutes
   - RPO: &lt; 5 minutes

4. Data corruption
   - Impact: High (PITR required)
   - RTO: 1-4 hours
   - RPO: Last valid backup

5. Human error (DROP TABLE)
   - Impact: Medium-High
   - RTO: 30 minutes - 2 hours
   - RPO: Point-in-time before error
</code></pre><h2 id="2-dr-drill-preparation">2. DR Drill Preparation</h2><h3 id="21-pre-drill-checklist">2.1. Pre-drill checklist</h3><pre><code class="language-text">☐ Review DR documentation
☐ Verify all backups are current
☐ Test backup restoration (dry run)
☐ Confirm monitoring/alerting works
☐ Notify stakeholders of drill
☐ Schedule during low-traffic period
☐ Prepare rollback procedure
☐ Assemble response team
☐ Set up communication channels (Slack, Zoom)
☐ Document drill objectives
☐ Prepare stopwatch for timing
☐ Set up screen recording (for post-mortem)
</code></pre><h3 id="22-dr-team-roles">2.2. DR team roles</h3><pre><code class="language-text">Incident Commander:
- Owns overall response
- Makes final decisions
- Coordinates teams

Database Admin:
- Executes PostgreSQL recovery
- Manages Patroni cluster
- Validates data integrity

System Admin:
- Manages infrastructure
- Network connectivity
- Firewall rules

Application Owner:
- Tests application functionality
- Validates business logic
- User acceptance testing

Communications Lead:
- Updates stakeholders
- Documents timeline
- Post-mortem facilitator

Observer (optional):
- Takes notes
- Times each step
- Identifies improvements
</code></pre><h2 id="3-scenario-1-single-replica-failure">3. Scenario 1: Single Replica Failure</h2><h3 id="31-drill-procedure">3.1. Drill procedure</h3><pre><code class="language-bash"># Step 1: Simulate replica failure (10:00:00)
ssh node2 "sudo systemctl stop patroni"

# Step 2: Monitor automatic recovery (10:00:15)
watch -n 1 'patronictl -c /etc/patroni/patroni.yml list'

# Expected output after 30 seconds:
# + Cluster: postgres-cluster -------+----+-----------+
# | Member | Host       | Role    | State   | TL | Lag in MB |
# +--------+------------+---------+---------+----+-----------+
# | node1  | 10.0.1.11  | Leader  | running |  5 |           |
# | node2  | 10.0.1.12  | Replica | STOPPED |    |           |  ← Down
# | node3  | 10.0.1.13  | Replica | running |  5 |         0 |
# +--------+------------+---------+---------+----+-----------+

# Step 3: Verify read traffic routes to remaining replica (10:01:00)
psql -h haproxy-vip -U postgres -c "SELECT inet_server_addr();"
# Should return node1 or node3, NOT node2

# Step 4: Restore failed replica (10:05:00)
ssh node2 "sudo systemctl start patroni"

# Step 5: Wait for replication catchup (10:05:30)
patronictl -c /etc/patroni/patroni.yml list
# node2 should show "streaming" state

# Step 6: Verify replication lag is minimal (10:06:00)
psql -h node2 -U postgres -c "
  SELECT pg_wal_lsn_diff(
    pg_last_wal_receive_lsn(),
    pg_last_wal_replay_lsn()
  ) AS lag_bytes;
"
# lag_bytes should be &lt; 1MB
</code></pre><h3 id="32-expected-results">3.2. Expected results</h3><pre><code class="language-text">Timeline:
- 10:00:00: Failure injected
- 10:00:30: Failure detected by Patroni
- 10:01:00: Traffic automatically rerouted
- 10:05:00: Recovery initiated
- 10:06:00: Full recovery complete

RTO: 1 minute (time until traffic rerouted)
RPO: 0 bytes (no data loss)

Impact:
- No application downtime
- Slightly increased load on remaining replica
- Monitoring alerts triggered (expected)
</code></pre><h2 id="4-scenario-2-leader-failover">4. Scenario 2: Leader Failover</h2><h3 id="41-drill-procedure">4.1. Drill procedure</h3><pre><code class="language-bash"># Step 1: Record current leader (10:00:00)
CURRENT_LEADER=$(patronictl -c /etc/patroni/patroni.yml list | grep Leader | awk '{print $2}')
echo "Current leader: $CURRENT_LEADER"

# Step 2: Simulate leader failure (10:00:05)
ssh $CURRENT_LEADER "sudo systemctl stop patroni"

# Step 3: Monitor automatic failover (10:00:10)
watch -n 1 'patronictl -c /etc/patroni/patroni.yml list'

# Expected: New leader elected in 15-30 seconds
# + Cluster: postgres-cluster -------+----+-----------+
# | Member | Host       | Role    | State   | TL | Lag in MB |
# +--------+------------+---------+---------+----+-----------+
# | node1  | 10.0.1.11  | Replica | STOPPED |    |           |  ← Old leader
# | node2  | 10.0.1.12  | Leader  | running |  6 |           |  ← NEW leader
# | node3  | 10.0.1.13  | Replica | running |  6 |         0 |
# +--------+------------+---------+---------+----+-----------+

# Step 4: Test write operations (10:00:45)
psql -h haproxy-vip -U postgres &lt;&lt;EOF
CREATE TABLE drill_test_$(date +%s) (id serial primary key, data text);
INSERT INTO drill_test_$(date +%s) (data) VALUES ('DR drill success');
SELECT * FROM drill_test_$(date +%s);
EOF

# Step 5: Verify application connectivity (10:01:00)
# Run application health checks
curl -f http://app-server/health || echo "Application DOWN"

# Step 6: Restore old leader as replica (10:03:00)
ssh $CURRENT_LEADER "sudo systemctl start patroni"

# Step 7: Wait for reintegration (10:03:30)
patronictl -c /etc/patroni/patroni.yml list
# node1 should rejoin as replica

# Step 8: Validate replication (10:04:00)
psql -h $CURRENT_LEADER -U postgres -c "SELECT pg_is_in_recovery();"
# Should return 't' (true = replica)
</code></pre><h3 id="42-expected-results">4.2. Expected results</h3><pre><code class="language-text">Timeline:
- 10:00:05: Leader failure injected
- 10:00:20: Failure detected (TTL expired)
- 10:00:35: New leader elected
- 10:00:45: Write operations succeed
- 10:01:00: Application fully functional
- 10:04:00: Old leader rejoins as replica

RTO: 30 seconds (leader election time)
RPO: 0 bytes (with synchronous replication)

Impact:
- 30 seconds of write unavailability
- Read operations continue on replicas
- ~10-20 failed write requests (depending on traffic)
- Monitoring alerts triggered
</code></pre><h2 id="5-scenario-3-complete-datacenter-failure">5. Scenario 3: Complete Datacenter Failure</h2><h3 id="51-drill-procedure">5.1. Drill procedure</h3><pre><code class="language-bash"># Setup: Assume 2 datacenters
# DC1: node1 (leader), node2 (replica)
# DC2: node3 (replica)

# Step 1: Simulate DC1 total failure (10:00:00)
for node in node1 node2; do
  ssh $node "sudo systemctl stop patroni"
  ssh $node "sudo systemctl stop etcd"  # Simulate network partition
done

# Step 2: Monitor DC2 status (10:00:15)
ssh node3 "patronictl -c /etc/patroni/patroni.yml list"
# Expected: No leader (quorum lost)

# Step 3: Manual intervention - promote DC2 replica (10:02:00)
# First, verify DC1 is truly down (not network glitch)
ping -c 3 node1 &amp;&amp; echo "WARNING: DC1 still reachable!"

# Remove DC1 from etcd cluster
ssh node3 "etcdctl member list"
ssh node3 "etcdctl member remove &lt;node1_member_id&gt;"
ssh node3 "etcdctl member remove &lt;node2_member_id&gt;"

# Step 4: Promote node3 to leader (10:03:00)
ssh node3 "patronictl -c /etc/patroni/patroni.yml failover postgres-cluster --candidate node3 --force"

# Step 5: Update application connection strings (10:04:00)
# Point to DC2: node3 (now leader)
# This may require DNS update or load balancer reconfiguration

# Step 6: Verify write operations (10:05:00)
psql -h node3 -U postgres &lt;&lt;EOF
CREATE TABLE dc_failover_test (id serial primary key, recovered_at timestamp default now());
INSERT INTO dc_failover_test VALUES (DEFAULT);
SELECT * FROM dc_failover_test;
EOF

# Step 7: When DC1 recovers, reintegrate (later, during maintenance)
# Bring up DC1 nodes as replicas of DC2
ssh node1 "sudo systemctl start etcd"
ssh node1 "sudo systemctl start patroni"
# Wait for replication catchup
patronictl -c /etc/patroni/patroni.yml list
</code></pre><h3 id="52-expected-results">5.2. Expected results</h3><pre><code class="language-text">Timeline:
- 10:00:00: DC1 failure
- 10:02:00: Decision to failover to DC2
- 10:03:00: Manual promotion of DC2 leader
- 10:04:00: Application reconfiguration
- 10:05:00: Service fully restored

RTO: 5 minutes (includes decision time)
RPO: 0-5 minutes (depends on replication lag at failure time)

Impact:
- 5 minutes of complete outage
- Possible data loss if async replication
- Manual intervention required
- Requires application update
</code></pre><h2 id="6-scenario-4-point-in-time-recovery-data-corruption">6. Scenario 4: Point-in-Time Recovery (Data Corruption)</h2><h3 id="61-drill-procedure">6.1. Drill procedure</h3><pre><code class="language-bash"># Setup: Simulate accidental table drop at 10:30:00
psql -h leader -U postgres &lt;&lt;EOF
CREATE TABLE important_data (id serial, data text);
INSERT INTO important_data (data) SELECT 'Record ' || generate_series(1, 1000);
SELECT count(*) FROM important_data;  -- 1000 rows
EOF

# Record current time before corruption
BEFORE_CORRUPTION=$(date -u +"%Y-%m-%d %H:%M:%S")
echo "Before corruption: $BEFORE_CORRUPTION"

# Simulate data corruption at 10:30:00
psql -h leader -U postgres -c "DROP TABLE important_data;"
echo "Table dropped (simulating accident) at $(date)"

# Step 1: Detect data loss (10:30:30)
psql -h leader -U postgres -c "SELECT * FROM important_data;"
# ERROR: relation "important_data" does not exist

# Step 2: Identify PITR target time (10:31:00)
PITR_TARGET=$BEFORE_CORRUPTION
echo "Will recover to: $PITR_TARGET"

# Step 3: Setup recovery environment (10:32:00)
# Create separate recovery instance (don't disturb production!)
sudo mkdir -p /var/lib/postgresql/18/pitr_recovery
sudo chown postgres:postgres /var/lib/postgresql/18/pitr_recovery

# Step 4: Restore base backup (10:33:00)
sudo -u postgres pg_basebackup \
  -h leader \
  -D /var/lib/postgresql/18/pitr_recovery \
  -X stream -P

# Step 5: Configure recovery (10:35:00)
cat &lt;&lt; EOF | sudo tee /var/lib/postgresql/18/pitr_recovery/recovery.signal
# PITR recovery signal file
EOF

sudo -u postgres tee /var/lib/postgresql/18/pitr_recovery/postgresql.auto.conf &lt;&lt;EOF
restore_command = 'cp /var/lib/postgresql/wal_archive/%f %p'
recovery_target_time = '$PITR_TARGET'
recovery_target_action = 'promote'
EOF

# Step 6: Start recovery instance (10:36:00)
sudo -u postgres /usr/lib/postgresql/18/bin/pg_ctl \
  -D /var/lib/postgresql/18/pitr_recovery \
  -l /tmp/pitr_recovery.log \
  start

# Step 7: Wait for recovery completion (10:40:00)
tail -f /tmp/pitr_recovery.log
# Look for: "database system is ready to accept connections"

# Step 8: Verify recovered data (10:41:00)
psql -h localhost -p 5433 -U postgres -c "SELECT count(*) FROM important_data;"
# Should return: 1000 rows

# Step 9: Export recovered data (10:42:00)
pg_dump -h localhost -p 5433 -U postgres -t important_data &gt; recovered_data.sql

# Step 10: Import to production (10:43:00)
psql -h leader -U postgres &lt; recovered_data.sql

# Step 11: Verify production (10:44:00)
psql -h leader -U postgres -c "SELECT count(*) FROM important_data;"
# Should return: 1000 rows ✅

# Step 12: Cleanup recovery instance (10:45:00)
sudo -u postgres /usr/lib/postgresql/18/bin/pg_ctl \
  -D /var/lib/postgresql/18/pitr_recovery stop
sudo rm -rf /var/lib/postgresql/18/pitr_recovery
</code></pre><h3 id="62-expected-results">6.2. Expected results</h3><pre><code class="language-text">Timeline:
- 10:30:00: Data corruption detected
- 10:31:00: PITR target time identified
- 10:33:00: Base backup restoration started
- 10:36:00: PITR recovery initiated
- 10:41:00: Data recovery complete
- 10:44:00: Data restored to production
- 10:45:00: Cleanup complete

RTO: 15 minutes (data restoration)
RPO: 0 (recovered to exact point before corruption)

Impact:
- Temporary read-only mode during restoration
- Requires manual data export/import
- No service downtime (recovery on separate instance)
</code></pre><h2 id="7-dr-drill-metrics-and-reporting">7. DR Drill Metrics and Reporting</h2><h3 id="71-drill-scorecard">7.1. Drill scorecard</h3><pre><code class="language-text">Scenario: Leader Failover Drill
Date: 2024-11-25
Duration: 30 minutes
Participants: 5 team members

Metrics:
☑ RTO Target: 2 minutes
  RTO Actual: 35 seconds ✅ (Better than target)

☑ RPO Target: 0 bytes
  RPO Actual: 0 bytes ✅

☑ Detection Time: 15 seconds ✅
☑ Failover Time: 20 seconds ✅
☑ Validation Time: 5 minutes ⚠️ (Could be faster)

Issues Found:
1. Monitoring alert delayed by 10 seconds (configuration issue)
2. Runbook step 3 outdated (missing new command)
3. Team member unfamiliar with patronictl commands

Action Items:
☐ Fix monitoring alert configuration
☐ Update runbook documentation
☐ Schedule training session for new commands
☐ Re-test in 2 weeks
</code></pre><h3 id="72-post-drill-analysis">7.2. Post-drill analysis</h3><pre><code class="language-markdown"># DR Drill Post-Mortem: Leader Failover

## Summary
Successfully executed planned leader failover drill. RTO/RPO targets exceeded. Identified 3 areas for improvement.

## Timeline
| Time | Event | Owner |
|------|-------|-------|
| 10:00:00 | Drill initiated | DBA |
| 10:00:15 | Leader stopped | DBA |
| 10:00:30 | Failure detected | Monitoring |
| 10:00:35 | New leader elected | Patroni |
| 10:00:50 | Write operations tested | DBA |
| 10:01:00 | Application health check | App Owner |
| 10:05:00 | Old leader rejoined | DBA |

## What Went Well
✅ Automatic failover worked flawlessly
✅ Zero data loss confirmed
✅ Team communication effective
✅ Documentation mostly accurate

## What Could Be Improved
⚠️ Monitoring alert configuration needs tuning
⚠️ Runbook has outdated commands
⚠️ One team member needs additional training

## Action Items
1. [ ] Update Prometheus alert rules (@sre-team, due: 2024-11-30)
2. [ ] Revise DR runbook (@dba-team, due: 2024-11-28)
3. [ ] Conduct patronictl training (@dba-lead, due: 2024-12-05)
4. [ ] Schedule next drill (@incident-commander, due: 2025-01-15)

## Recommendations
- Continue quarterly DR drills
- Rotate incident commander role
- Add chaos engineering (random failures)
</code></pre><h2 id="8-chaos-engineering-for-ha">8. Chaos Engineering for HA</h2><h3 id="81-chaos-monkey-for-postgresql">8.1. Chaos Monkey for PostgreSQL_</h3><pre><code class="language-bash">#!/bin/bash
# chaos-monkey.sh - Randomly kill PostgreSQL nodes

NODES=("node1" "node2" "node3")
INTERVAL=3600  # 1 hour between failures

while true; do
  # Random node
  NODE=${NODES[$RANDOM % ${#NODES[@]}]}
  
  # Random failure type
  FAILURE_TYPE=$((RANDOM % 3))
  
  case $FAILURE_TYPE in
    0)
      echo "$(date): Stopping Patroni on $NODE"
      ssh $NODE "sudo systemctl stop patroni"
      ;;
    1)
      echo "$(date): Simulating network partition on $NODE"
      ssh $NODE "sudo iptables -A INPUT -p tcp --dport 5432 -j DROP"
      sleep 300
      ssh $NODE "sudo iptables -D INPUT -p tcp --dport 5432 -j DROP"
      ;;
    2)
      echo "$(date): Stopping etcd on $NODE"
      ssh $NODE "sudo systemctl stop etcd"
      ;;
  esac
  
  # Wait for recovery
  sleep 300
  
  # Restore if not auto-recovered
  ssh $NODE "sudo systemctl start patroni"
  ssh $NODE "sudo systemctl start etcd"
  
  # Wait before next chaos
  sleep $INTERVAL
done
</code></pre><h3 id="82-automated-dr-testing">8.2. Automated DR testing</h3><pre><code class="language-yaml"># automated_dr_test.yml
---
- name: Automated DR Drill
  hosts: postgres_cluster
  vars:
    drill_start_time: "{{ ansible_date_time.iso8601 }}"
  tasks:
    - name: Record baseline metrics
      shell: patronictl -c /etc/patroni/patroni.yml list
      register: baseline
      
    - name: Inject failure on leader
      shell: |
        LEADER=$(patronictl -c /etc/patroni/patroni.yml list | grep Leader | awk '{print $2}')
        ssh $LEADER "sudo systemctl stop patroni"
      delegate_to: localhost
      
    - name: Wait for failover
      wait_for:
        timeout: 60
        
    - name: Verify new leader elected
      shell: patronictl -c /etc/patroni/patroni.yml list | grep Leader | wc -l
      register: leader_count
      failed_when: leader_count.stdout != "1"
      
    - name: Measure RTO
      shell: |
        echo "RTO: $(( $(date +%s) - $(date -d '{{ drill_start_time }}' +%s) )) seconds"
      register: rto_result
      
    - name: Generate drill report
      template:
        src: drill_report.j2
        dest: /tmp/drill_report_{{ drill_start_time }}.txt
      
    - name: Send report to Slack
      uri:
        url: https://hooks.slack.com/services/YOUR/WEBHOOK/URL
        method: POST
        body_format: json
        body:
          text: "DR Drill completed. RTO: {{ rto_result.stdout }}"
</code></pre><h2 id="9-best-practices">9. Best Practices</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>Schedule regular drills</strong>&nbsp;- Quarterly minimum</li><li><strong>Test all scenarios</strong>&nbsp;- Not just easy ones_</li><li><strong>Rotate roles</strong>&nbsp;- Everyone should be IC once</li><li><strong>Document everything</strong>&nbsp;- Timestamped notes_</li><li><strong>Measure RTO/RPO</strong>&nbsp;- Track improvements</li><li><strong>Post-mortem every drill</strong>&nbsp;- Learn and improve_</li><li><strong>Update runbooks</strong>&nbsp;- Keep documentation current</li><li><strong>Involve all teams</strong>&nbsp;- Cross-functional practice</li><li><strong>Test backups</strong>&nbsp;- Restore verification essential</li><li><strong>Automate where possible</strong>&nbsp;- Reduce human error</li></ol><h3 id="%E2%9D%8C-dont">❌ DON'T</h3><ol><li><strong>Don't skip drills</strong>&nbsp;- "Too busy" is not an excuse</li><li><strong>Don't test only easy scenarios</strong>&nbsp;- Hard ones matter most</li><li><strong>Don't ignore action items</strong>&nbsp;- Follow up on improvements_</li><li><strong>Don't reuse same scenario</strong>&nbsp;- Vary the drills</li><li><strong>Don't rely on one person</strong>&nbsp;- Bus factor = 1 is dangerous</li><li><strong>Don't rush</strong>&nbsp;- Proper testing takes time</li><li><strong>Don't skip post-mortems</strong>&nbsp;- Learning opportunity</li></ol><h2 id="10-lab-exercises">10. Lab Exercises</h2><h3 id="lab-1-execute-failover-drill">Lab 1: Execute failover drill</h3><p><strong>Tasks</strong>:</p><ol><li>Plan and schedule drill</li><li>Assign team roles</li><li>Execute leader failover</li><li>Document timeline_</li><li>Calculate RTO/RPO</li><li>Write post-mortem</li></ol><h3 id="lab-2-pitr-recovery-drill">Lab 2: PITR recovery drill</h3><p><strong>Tasks</strong>:</p><ol><li>Create test data_</li><li>Simulate data corruption</li><li>Identify PITR target time</li><li>Restore to separate instance</li><li>Verify recovered data_</li><li>Document procedure</li></ol><h3 id="lab-3-multi-dc-failover">Lab 3: Multi-DC failover</h3><p><strong>Tasks</strong>:</p><ol><li>Setup 2-DC cluster</li><li>Simulate DC1 total failure</li><li>Manually promote DC2</li><li>Update application config</li><li>Measure downtime</li><li>Document lessons learned</li></ol><h3 id="lab-4-chaos-engineering">Lab 4: Chaos engineering</h3><p><strong>Tasks_</strong>:_</p><ol><li>Implement chaos monkey script</li><li>Run for 24 hours</li><li>Monitor cluster behavior</li><li>Document failures and recoveries_</li><li>_Identify weak points</li><li>Improve HA configuration</li></ol><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11. Summary</h2><h3 id="dr-drill-frequency">DR Drill Frequency</h3><pre><code class="language-text">Scenario Frequency:
- Single node failure: Monthly (automated)
- Leader failover: Quarterly
- DC failure: Semi-annually
- PITR recovery: Quarterly
- Full DR: Annually
</code></pre><h3 id="success-criteria">Success Criteria_</h3><pre><code class="language-text">A successful DR drill has:
✅ Met RTO/RPO targets
✅ Zero data loss (or within RPO)
✅ All team members participated
✅ Documentation updated
✅ Action items identified
✅ Post-mortem completed
✅ Next drill scheduled
</code></pre><h3 id="key-metrics-to-track">Key Metrics to Track</h3><pre><code class="language-text">- Detection time (how fast we notice)
- Response time (how fast we act)
- Recovery time (how fast we restore)
- Data loss (how much data lost)
- Team coordination (how well we work together)
</code></pre><h3 id="next-steps">Next Steps</h3><p>Lesson 28 will cover&nbsp;<strong>Architectural Design HA</strong>:</p><ul><li>Requirements gathering</li><li>Architecture design documents</li><li>Capacity planning</li><li>Cost estimation</li><li>Design review process</li></ul>