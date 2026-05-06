---
id: 019c9617-fb91-71b3-893f-1f4d0ad10625
title: 'Lesson 16: Backup and Point-in-Time Recovery (PITR)'
slug: bai-16-backup-va-point-in-time-recovery-pitr
description: Using pg_basebackup, configure WAL archiving, continuous archiving and perform Point-in-Time Recovery (PITR).
duration_minutes: 205
is_free: true
video_url: null
sort_order: 16
section_title: 'Part 4: Backup, Monitoring & Tuning'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability with Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1285" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1285)"/>

  <!-- Decorations -->
  <g>
    <circle cx="610" cy="140" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="630" cy="40" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="250" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="180" x2="1100" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="210" x2="1050" y2="280" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1060.3108891324553,212.5 1060.3108891324553,247.5 1030,265 999.6891108675446,247.5 999.6891108675446,212.5 1030,195" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — Lesson 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 16: Backup and Point-in-Time Recovery__HTMLTAG_53___
      <tspan x="60" dy="42">(PITR)</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability with Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Backup, Monitoring &amp; Tuning</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">Objective_</h2><p>After this lesson, you will:_</p><ul><li>Set up WAL archiving_</li><li>Perform backup with pg_basebackup</li><li>Configure continuous archiving</li><li>Restore database to specific point in time_</li><li>Automate backup strategies</li><li>Implement disaster recovery plan</li></ul><h2 id="1-backup-strategies-overview">1. Backup Strategies Overview</h2><h3 id="11-types-of-backups">1.1. Types of backups</h3><h4 id="a-logical-backup">A. Logical Backup</h4><pre><code class="language-bash"># pg_dump / pg_dumpall
pg_dump -h localhost -U postgres mydb &gt; mydb.sql
pg_dumpall -h localhost -U postgres &gt; cluster.sql

# Pros:
# ✅ Easy to restore specific tables
# ✅ Portable across PostgreSQL versions
# ✅ Human-readable (text)

# Cons:
# ❌ Slow for large databases
# ❌ Not suitable for PITR
# ❌ Requires downtime for consistent backup
</code></pre><h4 id="b-physical-backup">B. Physical Backup</h4><pre><code class="language-bash"># pg_basebackup / File system snapshot
pg_basebackup -D /backup/base -Ft -z -P

# Pros:
# ✅ Fast backup and restore
# ✅ Enables PITR with WAL archiving
# ✅ Consistent snapshot

# Cons:
# ❌ Cannot restore individual tables
# ❌ Must match PostgreSQL version
# ❌ Larger backup size
</code></pre><h4 id="c-continuous-archiving-wal-archiving">C. Continuous Archiving (WAL Archiving)</h4><pre><code class="language-text">WAL files archived continuously
+ Base backup
= Point-in-Time Recovery capability

# Pros:
# ✅ Can restore to ANY point in time
# ✅ Minimal data loss (RPO: seconds)
# ✅ Online backup (no downtime)

# Cons:
# ❌ More complex setup
# ❌ Requires storage for WAL archives
# ❌ More moving parts
</code></pre><h3 id="12-rto-and-rpo">1.2. RTO and RPO: Objective)</strong>&nbsp;= How much data loss is acceptable?</p><pre><code class="language-text">Daily backup: Up to 24 hours data loss ❌
WAL archiving: Up to last archived segment (~16MB)
Synchronous replication: Zero data loss ✅
</code></pre><h3 id="13-backup-strategy-decision-matrix">1.3. Backup strategy decision matrix</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Requirement</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);"> Solution</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">Zero data loss_</td><td style="padding: 5px 10px;">Synchronous replication + PITR</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Fast recovery (&lt;1hr)</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Streaming replication</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">PITR capability</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">WAL archiving + pg_basebackup</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Long-term retention</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Periodic pg_basebackup</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Disaster recovery</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Off-site backups + PITR</td></tr></tbody></table>
<!--kg-card-end: html-->
<h2 id="2-wal-archiving-setup">2. WAL Archiving Setup</h2><h3 id="21-understanding-wal-archiving">2.1. Understanding WAL archiving</h3><p><strong>WAL (Write-Ahead Log)</strong>&nbsp;= Transaction log files</p><pre><code class="language-text">Normal operation:
  Transaction → WAL file → Data files
  
WAL archiving:
  Transaction → WAL file → Data files
                     ↓
                  Archive location (safe storage)
</code></pre><p><strong>WAL segments</strong>:</p><pre><code class="language-bash"># Default: 16MB per segment
# Location: $PGDATA/pg_wal/

ls -lh /var/lib/postgresql/18/data/pg_wal/
# 000000010000000000000001  (16MB)
# 000000010000000000000002  (16MB)
# 000000010000000000000003  (16MB)
# ...
</code></pre><h3 id="22-configure-wal-archiving">2.2. Configure WAL archiving</h3><h4 id="postgresql-configuration">PostgreSQL configuration</h4><pre><code class="language-bash"># Edit postgresql.conf or use ALTER SYSTEM
sudo -u postgres psql -c "
ALTER SYSTEM SET wal_level = 'replica';  -- or 'logical'
ALTER SYSTEM SET archive_mode = 'on';
ALTER SYSTEM SET archive_command = 'test ! -f /mnt/wal_archive/%f &amp;&amp; cp %p /mnt/wal_archive/%f';
ALTER SYSTEM SET archive_timeout = 300;  -- Force archive every 5 min
"

# Restart PostgreSQL
sudo systemctl restart postgresql
</code></pre><p><strong>Parameters explained</strong>:</p><pre><code class="language-yaml">wal_level: 'replica'
  # 'minimal': No archiving possible
  # 'replica': Required for archiving and replication
  # 'logical': For logical replication

archive_mode: 'on'
  # Enable archiving

archive_command: 'test ! -f /mnt/wal_archive/%f &amp;&amp; cp %p /mnt/wal_archive/%f'
  # %f = WAL filename (e.g., 000000010000000000000001)
  # %p = WAL full path (e.g., /var/lib/postgresql/18/data/pg_wal/000000010000000000000001)
  # test ! -f = Don't overwrite existing files
  # cp = Copy to archive location

archive_timeout: 300
  # Force WAL switch every 5 minutes (even if not full)
  # Ensures RPO &lt;= 5 minutes
</code></pre><h4 id="create-archive-directory">Create archive directory</h4><pre><code class="language-bash"># On primary server
sudo mkdir -p /mnt/wal_archive
sudo chown postgres:postgres /mnt/wal_archive
sudo chmod 700 /mnt/wal_archive

# Verify archiving working
sudo -u postgres psql -c "SELECT pg_switch_wal();"
# Forces current WAL file to be archived

# Check archive
ls -lh /mnt/wal_archive/
# Should see WAL files appearing
</code></pre><h3 id="23-advanced-archive-commands">2.3. Advanced archive commands</h3><h4 id="a-archive-to-remote-server-rsync">A. Archive to remote server (rsync)</h4><pre><code class="language-bash"># archive_command using rsync
archive_command = 'rsync -a %p backup-server:/mnt/wal_archive/%f'
</code></pre><h4 id="b-archive-to-s3-wal-g">B. Archive to S3 (wal-g)</h4><pre><code class="language-bash"># Install wal-g
wget https://github.com/wal-g/wal-g/releases/download/v2.0.1/wal-g-pg-ubuntu-20.04-amd64.tar.gz
tar -xzf wal-g-pg-ubuntu-20.04-amd64.tar.gz
sudo mv wal-g-pg-ubuntu-20.04-amd64 /usr/local/bin/wal-g
sudo chmod +x /usr/local/bin/wal-g

# Configure
sudo -u postgres tee /var/lib/postgresql/.walrc &lt;&lt;EOF
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1
WALG_S3_PREFIX=s3://my-bucket/postgres-wal
EOF

# Set archive_command
archive_command = '/usr/local/bin/wal-g wal-push %p'
</code></pre><h4 id="c-archive-with-compression">C. Archive with compression</h4><pre><code class="language-bash"># Compress before archiving
archive_command = 'gzip &lt; %p &gt; /mnt/wal_archive/%f.gz'

# Or with pigz (parallel gzip)
archive_command = 'pigz &lt; %p &gt; /mnt/wal_archive/%f.gz'
</code></pre><h3 id="24-monitor-archiving">2.4. Monitor archiving</h3><pre><code class="language-sql">-- Check archiving status
SELECT archived_count, 
       failed_count,
       last_archived_wal,
       last_archived_time,
       last_failed_wal,
       last_failed_time
FROM pg_stat_archiver;

-- Example output:
--  archived_count | failed_count | last_archived_wal        | last_archived_time          
-- ----------------+--------------+--------------------------+-----------------------------
--            1234 |            0 | 000000010000000000000056 | 2024-11-25 10:30:15.123456

-- If failed_count &gt; 0, check logs!
</code></pre><pre><code class="language-bash"># Check PostgreSQL logs for archive errors
sudo journalctl -u postgresql | grep -i archive

# Common errors:
# - Permission denied on archive directory
# - Archive directory full
# - Network timeout (for remote archiving)
</code></pre><h2 id="3-base-backup-with-pgbasebackup">3. Base Backup with pg_basebackup</h2><h3 id="31-basic-pgbasebackup">3.1. Basic pg_basebackup</h3><pre><code class="language-bash"># Full backup to directory
sudo -u postgres pg_basebackup \
  -D /backup/base/$(date +%Y%m%d_%H%M%S) \
  -Fp \
  -Xs \
  -P \
  -v

# Flags:
# -D: Destination directory
# -Fp: Plain format (directory)
# -Xs: Stream WAL during backup (ensures consistency)
# -P: Show progress
# -v: Verbose
</code></pre><p><strong>Output</strong>:</p><pre><code class="language-text">pg_basebackup: initiating base backup, waiting for checkpoint to complete
pg_basebackup: checkpoint completed
pg_basebackup: write-ahead log start point: 0/6000000 on timeline 3
pg_basebackup: starting background WAL receiver
pg_basebackup: created temporary replication slot "pg_basebackup_12345"
245678/245678 kB (100%), 1/1 tablespace
pg_basebackup: write-ahead log end point: 0/6000168
pg_basebackup: syncing data to disk ...
pg_basebackup: renaming backup_manifest.tmp to backup_manifest
pg_basebackup: base backup completed
</code></pre><h3 id="32-compressed-tar-backup">3.2. Compressed tar backup</h3><pre><code class="language-bash"># Backup as compressed tar
sudo -u postgres pg_basebackup \
  -D /backup/tar \
  -Ft \
  -z \
  -P \
  -v

# Flags:
# -Ft: Tar format
# -z: Gzip compression

# Result:
ls -lh /backup/tar/
# base.tar.gz         (main data)
# pg_wal.tar.gz       (WAL files)
# backup_manifest     (verification)
</code></pre><h3 id="33-backup-to-remote-server">3.3. Backup to remote server</h3><pre><code class="language-bash"># Stream directly to remote server
sudo -u postgres pg_basebackup \
  -D - \
  -Ft \
  -z \
  | ssh backup-server "cat &gt; /backup/postgres-$(date +%Y%m%d).tar.gz"
</code></pre><h3 id="34-backup-with-replication-slot">3.4. Backup with replication slot</h3><pre><code class="language-bash"># Create replication slot first
sudo -u postgres psql -c "
  SELECT pg_create_physical_replication_slot('backup_slot');
"

# Backup using slot
sudo -u postgres pg_basebackup \
  -D /backup/base/$(date +%Y%m%d) \
  -Fp \
  -Xs \
  -P \
  -S backup_slot

# Slot ensures WAL files aren't removed during backup
</code></pre><h3 id="35-verify-backup">3.5. Verify backup</h3><pre><code class="language-bash"># Check backup_manifest
cat /backup/base/20241125/backup_manifest | jq

# Verify checksum
sudo -u postgres pg_verifybackup /backup/base/20241125

# Output:
# backup successfully verified
# ✅
</code></pre><h2 id="4-point-in-time-recovery-pitr">4. Point-in-Time Recovery (PITR)</h2><h3 id="41-pitr-concepts">4.1. PITR concepts</h3><p><strong>PITR</strong>&nbsp;= Restore database to&nbsp;<strong>any point in time</strong>&nbsp;(not just backup time)</p><pre><code class="language-text">Timeline:

T0: Base backup taken
  ↓
T1: Transaction A committed
  ↓
T2: Transaction B committed
  ↓
T3: Transaction C committed (ERROR! Want to undo)
  ↓
T4: Now

With PITR, can restore to T2 (before Transaction C)
</code></pre><p><strong>Requirements</strong>:_</p><ol><li>Base backup (pg_basebackup)</li><li>WAL archive from backup until target time</li><li>Recovery target specification</li></ol><h3 id="42-prepare-for-pitr">4.2. Prepare for PITR</h3><p><strong>Create recovery directory</strong>:</p><pre><code class="language-bash"># Stop PostgreSQL on target server
sudo systemctl stop postgresql

# Backup current data (safety)
sudo mv /var/lib/postgresql/18/data /var/lib/postgresql/18/data.old

# Create new data directory
sudo mkdir -p /var/lib/postgresql/18/data
sudo chown postgres:postgres /var/lib/postgresql/18/data
</code></pre><p><strong>Restore base backup</strong>:_</p><pre><code class="language-bash"># From plain directory backup
sudo cp -a /backup/base/20241125/* /var/lib/postgresql/18/data/

# Or from tar backup
cd /var/lib/postgresql/18/data
sudo -u postgres tar -xzf /backup/tar/base.tar.gz
sudo -u postgres tar -xzf /backup/tar/pg_wal.tar.gz
</code></pre><h3 id="43-configure-recovery">4.3. Configure recovery</h3><p><strong>Create recovery configuration</strong>:</p><pre><code class="language-bash"># PostgreSQL 12+: Use recovery.signal + postgresql.conf

# Step 1: Create recovery.signal
sudo -u postgres touch /var/lib/postgresql/18/data/recovery.signal

# Step 2: Configure recovery in postgresql.conf
sudo -u postgres tee -a /var/lib/postgresql/18/data/postgresql.auto.conf &lt;&lt;EOF
restore_command = 'cp /mnt/wal_archive/%f %p'
recovery_target_time = '2024-11-25 10:30:00'
recovery_target_action = 'promote'
EOF
</code></pre><p><strong>Recovery parameters</strong>:_</p><pre><code class="language-yaml">restore_command: 'cp /mnt/wal_archive/%f %p'
  # How to fetch archived WAL files
  # %f = WAL filename
  # %p = Destination path

recovery_target_time: '2024-11-25 10:30:00'
  # Restore to this timestamp

recovery_target_action: 'promote'
  # After reaching target: promote to normal operation
  # Options: 'pause', 'promote', 'shutdown'
</code></pre><h3 id="44-recovery-target-options">4.4. Recovery target options</h3><h4 id="a-recover-to-specific-time">A. Recover to specific time</h4><pre><code class="language-sql">-- In postgresql.auto.conf
recovery_target_time = '2024-11-25 10:30:00'
</code></pre><h4 id="b-recover-to-specific-transaction">B. Recover to specific transaction</h4><pre><code class="language-sql">-- Find transaction ID
SELECT txid_current();  -- Before bad transaction

-- In postgresql.auto.conf
recovery_target_xid = '12345678'
</code></pre><h4 id="c-recover-to-specific-lsn">C. Recover to specific LSN</h4><pre><code class="language-sql">-- In postgresql.auto.conf
recovery_target_lsn = '0/6000000'
</code></pre><h4 id="d-recover-to-latest">D. Recover to latest</h4><pre><code class="language-sql">-- In postgresql.auto.conf
# No recovery_target_* parameter
# Will replay all available WAL
</code></pre><h4 id="e-recovery-target-inclusiveexclusive">E. Recovery target inclusive/exclusive</h4><pre><code class="language-sql">-- Default: exclusive (stop BEFORE target)
recovery_target_inclusive = 'off'

-- Inclusive: include target transaction
recovery_target_inclusive = 'on'
</code></pre><h3 id="45-perform-recovery">4.5. Perform recovery</h3><pre><code class="language-bash"># Start PostgreSQL
sudo systemctl start postgresql

# Monitor logs
sudo journalctl -u postgresql -f
</code></pre><p><strong>Log output</strong>:</p><pre><code class="language-text">2024-11-25 11:00:00 LOG: starting PostgreSQL 18.0
2024-11-25 11:00:01 LOG: entering standby mode
2024-11-25 11:00:02 LOG: redo starts at 0/6000000
2024-11-25 11:00:03 LOG: restored log file "000000010000000000000006" from archive
2024-11-25 11:00:05 LOG: restored log file "000000010000000000000007" from archive
2024-11-25 11:00:08 LOG: recovery stopping before commit of transaction 12345678, time 2024-11-25 10:30:00
2024-11-25 11:00:09 LOG: pausing at the end of recovery
2024-11-25 11:00:09 HINT: Execute pg_wal_replay_resume() to continue.
</code></pre><p><strong>If paused, resume</strong>:</p><pre><code class="language-sql">-- Check status
SELECT pg_is_in_recovery();
-- true

-- Resume (will promote if action = promote)
SELECT pg_wal_replay_resume();

-- Or promote manually
SELECT pg_promote();
</code></pre><p><strong>Verify recovery</strong>:</p><pre><code class="language-sql">-- Check database state
SELECT pg_is_in_recovery();
-- false (if promoted)

-- Verify data
SELECT * FROM critical_table WHERE created_at &gt;= '2024-11-25 10:25:00';
-- Should see data up to recovery target time
</code></pre><h3 id="46-timeline-after-pitr">4.6. Timeline after PITR</h3><pre><code class="language-text">After PITR, timeline increments:

Original timeline: 3
After PITR: 4

This prevents accidentally replaying WAL from "future" timeline
</code></pre><pre><code class="language-bash"># Check new timeline
sudo -u postgres psql -c "
  SELECT timeline_id FROM pg_control_checkpoint();
"
# timeline_id
# ------------
#           4
</code></pre><h2 id="5-automation-with-patroni">5. Automation with Patroni</h2><h3 id="51-patroni-wal-archiving">5.1. Patroni WAL archiving</h3><p><strong>Configure in patroni.yml</strong>:</p><pre><code class="language-yaml">postgresql:
  parameters:
    wal_level: replica
    archive_mode: 'on'
    archive_command: 'test ! -f /mnt/wal_archive/%f &amp;&amp; cp %p /mnt/wal_archive/%f'
    archive_timeout: 300
  
  # Restore command for replicas
  recovery_conf:
    restore_command: 'cp /mnt/wal_archive/%f %p'
</code></pre><p><strong>Patroni automatically</strong>:</p><ul><li>Configures archiving on primary_</li><li>Configures restore on replicas</li><li>Handles timeline changes</li></ul><h3 id="52-backup-script">5.2. Backup script</h3><pre><code class="language-bash">#!/bin/bash
# backup.sh - Automated PostgreSQL backup

set -e

BACKUP_DIR="/backup/postgres"
RETENTION_DAYS=7
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p "$BACKUP_DIR/$DATE"

# Run pg_basebackup
sudo -u postgres pg_basebackup \
  -D "$BACKUP_DIR/$DATE" \
  -Fp \
  -Xs \
  -P \
  -v \
  -c fast

# Verify backup
sudo -u postgres pg_verifybackup "$BACKUP_DIR/$DATE"

# Create metadata
cat &gt; "$BACKUP_DIR/$DATE/backup_info.txt" &lt;&lt;EOF
Backup Date: $(date)
Hostname: $(hostname)
PostgreSQL Version: $(sudo -u postgres psql -t -c "SELECT version();")
Database Size: $(du -sh "$BACKUP_DIR/$DATE" | awk '{print $1}')
EOF

# Remove old backups
find "$BACKUP_DIR" -maxdepth 1 -type d -mtime +$RETENTION_DAYS -exec rm -rf {} \;

# Log
echo "$(date): Backup completed successfully: $BACKUP_DIR/$DATE" | tee -a /var/log/postgres-backup.log

# Optional: Upload to S3
# aws s3 sync "$BACKUP_DIR/$DATE" "s3://my-bucket/postgres-backups/$DATE/"

# Send notification
# curl -X POST https://hooks.slack.com/... -d '{"text":"Backup completed"}'
</code></pre><p><strong>Schedule with cron</strong>:</p><pre><code class="language-bash"># Run daily at 2 AM
sudo crontab -u postgres -e

# Add:
0 2 * * * /usr/local/bin/backup.sh &gt;&gt; /var/log/postgres-backup.log 2&gt;&amp;1
</code></pre><h3 id="53-wal-g-integration">5.3. WAL-G integration</h3><p><strong>Install WAL-G</strong>:</p><pre><code class="language-bash"># Download
wget https://github.com/wal-g/wal-g/releases/download/v2.0.1/wal-g-pg-ubuntu-20.04-amd64.tar.gz
tar -xzf wal-g-pg-ubuntu-20.04-amd64.tar.gz
sudo mv wal-g-pg-ubuntu-20.04-amd64 /usr/local/bin/wal-g
sudo chmod +x /usr/local/bin/wal-g
</code></pre><p><strong>Configure</strong>:</p><pre><code class="language-bash"># Create config
sudo -u postgres tee /var/lib/postgresql/.walrc &lt;&lt;EOF
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_REGION=us-east-1
WALG_S3_PREFIX=s3://my-bucket/postgres
WALG_COMPRESSION_METHOD=lz4
WALG_DELTA_MAX_STEPS=6
EOF

# Update postgresql.conf
archive_command = '/usr/local/bin/wal-g wal-push %p'
restore_command = '/usr/local/bin/wal-g wal-fetch %f %p'
</code></pre><p><strong>Take backup with WAL-G</strong>:</p><pre><code class="language-bash"># Full backup
sudo -u postgres wal-g backup-push /var/lib/postgresql/18/data

# List backups
sudo -u postgres wal-g backup-list

# name                          modified             wal_segment_backup_start
# base_000000010000000000000004 2024-11-25T10:00:00Z 000000010000000000000004
</code></pre><p><strong>Restore with WAL-G</strong>:</p><pre><code class="language-bash"># Stop PostgreSQL
sudo systemctl stop postgresql

# Clear data directory
sudo rm -rf /var/lib/postgresql/18/data/*

# Restore latest backup
sudo -u postgres wal-g backup-fetch /var/lib/postgresql/18/data LATEST

# Or restore specific backup
sudo -u postgres wal-g backup-fetch /var/lib/postgresql/18/data base_000000010000000000000004

# Configure PITR (if needed)
sudo -u postgres touch /var/lib/postgresql/18/data/recovery.signal
echo "recovery_target_time = '2024-11-25 10:30:00'" | \
  sudo -u postgres tee -a /var/lib/postgresql/18/data/postgresql.auto.conf

# Start PostgreSQL
sudo systemctl start postgresql
</code></pre><h2 id="6-disaster-recovery-planning">6. Disaster Recovery Planning</h2><h3 id="61-dr-strategy">6.1. DR strategy</h3><p><strong>3-2-1 Rule</strong>:</p><pre><code class="language-text">3: Keep 3 copies of data
2: Store on 2 different media types
1: Keep 1 copy off-site

Example:
- Production database (live)
- Local backup (same datacenter)
- S3 backup (cloud, different region)
</code></pre><h3 id="62-dr-checklist">6.2. DR checklist</h3><p><strong>Preparation</strong>:</p><pre><code class="language-text">✅ WAL archiving enabled and tested
✅ Regular base backups (daily/weekly)
✅ Off-site backup storage (S3, remote server)
✅ Backup verification automated
✅ Restore procedures documented
✅ DR drills scheduled (quarterly)
✅ Monitoring and alerting configured
✅ Backup retention policy defined
✅ Encryption for backups (at rest and in transit)
✅ Access controls (who can restore)
</code></pre><h3 id="63-dr-scenarios-and-procedures">6.3. DR scenarios and procedures</h3><h4 id="scenario-1-database-corruption">Scenario 1: Database corruption</h4><pre><code class="language-bash"># 1. Identify corruption
SELECT * FROM corrupt_table;  # ERROR

# 2. Stop PostgreSQL
sudo systemctl stop postgresql

# 3. Restore from last good backup
sudo rm -rf /var/lib/postgresql/18/data
sudo cp -a /backup/base/20241125 /var/lib/postgresql/18/data

# 4. Configure PITR to just before corruption
echo "recovery_target_time = '2024-11-25 09:55:00'" | \
  sudo tee -a /var/lib/postgresql/18/data/postgresql.auto.conf
sudo touch /var/lib/postgresql/18/data/recovery.signal

# 5. Start and verify
sudo systemctl start postgresql
</code></pre><h4 id="scenario-2-datacenter-failure">Scenario 2: Datacenter failure</h4><pre><code class="language-bash"># 1. Provision new servers in different region

# 2. Install PostgreSQL + Patroni

# 3. Restore from off-site backup (S3)
aws s3 sync s3://my-bucket/postgres-backups/20241125 /backup/restore/
sudo cp -a /backup/restore /var/lib/postgresql/18/data

# 4. Restore WAL from S3
# (configure restore_command with wal-g or S3)

# 5. Start cluster
sudo systemctl start patroni

# 6. Update DNS/Load balancer to new region

# RTO: ~1-2 hours (depends on backup size and network)
</code></pre><h4 id="scenario-3-accidental-data-deletion">Scenario 3: Accidental data deletion</h4><pre><code class="language-bash"># Oops: DELETE FROM users WHERE ...;  (without WHERE clause)

# Option A: PITR to before deletion
# (See section 4.4)

# Option B: Restore to separate instance and copy data
sudo -u postgres pg_basebackup -D /tmp/restore ...
# Start on different port
# Copy missing data to production
</code></pre><h3 id="64-recovery-metrics">6.4. Recovery metrics</h3><p><strong>RTO (Recovery Time Objective)</strong>:</p><pre><code class="language-text">Target: &lt; 2 hours for full DR

Breakdown:
- Detection: 5-10 min
- Decision: 10-15 min
- Restore base backup: 30-60 min
- Replay WAL: 10-30 min
- Verification: 10-20 min
- DNS/Traffic switch: 5-10 min

Total: ~70-145 min
</code></pre><p><strong>RPO (Recovery Point Objective)</strong>:</p><pre><code class="language-text">Target: &lt; 5 minutes data loss

With synchronous replication: 0 (zero data loss)
With WAL archiving: &lt; archive_timeout (e.g., 5 min)
With daily backup only: Up to 24 hours ❌
</code></pre><h2 id="7-monitoring-and-alerting">7. Monitoring and Alerting</h2><h3 id="71-key-backup-metrics">7.1. Key backup metrics</h3><pre><code class="language-sql">-- Archive status
SELECT archived_count, 
       failed_count,
       EXTRACT(EPOCH FROM (now() - last_archived_time)) AS seconds_since_last_archive
FROM pg_stat_archiver;

-- Alert if seconds_since_last_archive &gt; 600 (10 min)
</code></pre><pre><code class="language-bash"># Backup age
find /backup/base -maxdepth 1 -type d -name "202*" -mtime -1 | wc -l
# Should be &gt;= 1 (at least one backup in last 24h)
</code></pre><h3 id="72-prometheus-metrics">7.2. Prometheus metrics</h3><pre><code class="language-yaml"># Alert rules
groups:
  - name: backup_alerts
    rules:
      - alert: PostgreSQLArchivingFailed
        expr: pg_stat_archiver_failed_count &gt; 0
        labels:
          severity: critical
        annotations:
          summary: "WAL archiving failures detected"
      
      - alert: PostgreSQLNoRecentBackup
        expr: time() - pg_backup_last_success_timestamp &gt; 86400
        for: 1h
        labels:
          severity: warning
        annotations:
          summary: "No backup in last 24 hours"
      
      - alert: PostgreSQLArchiveDelayHigh
        expr: |
          time() - pg_stat_archiver_last_archived_time &gt; 600
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "WAL archiving delayed &gt; 10 min"
</code></pre><h3 id="73-backup-verification">7.3. Backup verification</h3><pre><code class="language-bash">#!/bin/bash
# verify-backup.sh

BACKUP_DIR="/backup/base"
LATEST_BACKUP=$(ls -td $BACKUP_DIR/*/ | head -1)

echo "Verifying: $LATEST_BACKUP"

# 1. Check backup_manifest exists
if [ ! -f "$LATEST_BACKUP/backup_manifest" ]; then
  echo "❌ backup_manifest missing"
  exit 1
fi

# 2. Run pg_verifybackup
if sudo -u postgres pg_verifybackup "$LATEST_BACKUP" &gt; /dev/null 2&gt;&amp;1; then
  echo "✅ Backup verified successfully"
else
  echo "❌ Backup verification failed"
  exit 1
fi

# 3. Check size (should be reasonable)
SIZE=$(du -sb "$LATEST_BACKUP" | awk '{print $1}')
MIN_SIZE=1000000000  # 1GB minimum
if [ "$SIZE" -lt "$MIN_SIZE" ]; then
  echo "⚠️  Backup size suspicious: $(du -sh "$LATEST_BACKUP" | awk '{print $1}')"
  exit 1
fi

# 4. Test restore to temp location (optional, resource-intensive)
# ...

echo "✅ All backup checks passed"
</code></pre><h2 id="8-best-practices">8. Best Practices</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>Enable WAL archiving</strong>&nbsp;- Required for PITR</li><li><strong>Automate backups</strong>&nbsp;- Daily pg_basebackup via cron/systemd timer_</li><li><strong>Test restores regularly</strong>&nbsp;- Monthly DR drills</li><li><strong>Monitor archiving</strong>&nbsp;- Alert on failures</li><li><strong>Keep multiple backups generations</strong>&nbsp;- 7 daily + 4 weekly + 12 monthly</li><li><strong>Off-site backups</strong>&nbsp;- S3, different region/datacenter</li><li><strong>Encrypt backups</strong>&nbsp;- At rest and in transit_</li><li><strong>Document procedures</strong>&nbsp;- Runbooks for restoration</li><li><strong>Verify backups</strong>&nbsp;- pg_verifybackup after each backup</li><li><strong>Calculate RTO/RPO</strong>&nbsp;- Know your limits</li></ol><h3 id="%E2%9D%8C-dont">❌ DON'T</h3><ol><li><strong>Don't skip testing</strong>&nbsp;- Untested backup = no backup</li><li><strong>Don't store only locally</strong>&nbsp;- Datacenter failure = data loss_</li><li><strong>Don't ignore archive failures</strong>&nbsp;- Silent data loss risk</li><li><strong>Don't delete WAL too early</strong>&nbsp;- Need for PITR_</li><li><strong>Don't forget retention_</strong>&nbsp;- Storage costs vs recovery needs</li><li><strong>Don't backup to same disk</strong>&nbsp;- Disk failure = everything lost_</li><li><strong>Don't skip encryption</strong>&nbsp;- Security/compliance risk_</li><li><strong>_Don't assume it works</strong>&nbsp;- Verify, verify, verify</li></ol><h2 id="9-lab-exercises">9. Lab Exercises</h2><h3 id="lab-1-setup-wal-archiving">Lab 1: Setup WAL archiving</h3><p><strong>Tasks</strong>:</p><ol><li>Configure archive_mode and archive_command</li><li>Create archive directory</li><li>Force WAL switch:&nbsp;<code>SELECT pg_switch_wal();</code></li><li>Verify WAL files in archive directory</li><li>Monitor pg_stat_archiver</li></ol><h3 id="lab-2-take-base-backup">Lab 2: Take base backup</h3><p><strong>Tasks</strong>:</p><ol><li>Use pg_basebackup to create backup</li><li>Verify with pg_verifybackup</li><li>Calculate backup size and time_</li><li>Compress backup and compare size_</li><li>Document backup metadata</li></ol><h3 id="lab-3-perform-pitr">Lab 3: Perform PITR</h3><p><strong>Tasks</strong>:</p><ol><li>Create test table with timestamps_</li><li>Take base backup</li><li>Insert more data</li><li>Note specific timestamp</li><li>Insert "bad" data after timestamp_</li><li>Restore to timestamp (before bad data)</li><li>Verify recovery point is correct</li></ol><h3 id="lab-4-automate-backup">Lab 4: Automate backup</h3><p><strong>Tasks</strong>:</p><ol><li>Write backup script with retention_</li><li>Add error handling and notifications</li><li>Schedule with cron</li><li>Test script execution</li><li>Monitor backup logs</li></ol><h3 id="lab-5-dr-drill">Lab 5: DR drill</h3><p><strong>Tasks</strong>:</p><ol><li>Simulate total database loss (remove data directory)</li><li>Restore from backup</li><li>Replay WAL to latest point</li><li>Measure RTO (time to restore)</li><li>Verify data integrity</li><li>Document lessons learned</li></ol><h2 id="10-troubleshooting">10. Troubleshooting</h2><h3 id="issue-archiving-not-working">Issue: Archiving not working</h3><p><strong>Symptoms</strong>: failed_count &gt; 0 print pg_stat_archiver_</p><p><strong>_Check</strong>:_</p><pre><code class="language-bash"># Check archive_command manually
sudo -u postgres bash -c 'f=000000010000000000000001; p=/var/lib/postgresql/18/data/pg_wal/$f; test ! -f /mnt/wal_archive/$f &amp;&amp; cp $p /mnt/wal_archive/$f'

echo $?  # Should be 0
</code></pre><p><strong>_Common causes</strong>:</p><ul><li>Permission denied on archive directory</li><li>Archive directory doesn't exist</li><li>Disk full</li><li>Network issue (if remote archiving)</li></ul><h3 id="issue-pgbasebackup-slow">Issue: pg_basebackup slow</h3><p><strong>Optimize</strong>:</p><pre><code class="language-bash"># Use compression
pg_basebackup -z ...

# Parallel copy (if multiple tablespaces)
pg_basebackup -j 4 ...

# Adjust checkpoint_timeout
ALTER SYSTEM SET checkpoint_timeout = '15min';

# Use faster storage for backup destination
</code></pre><h3 id="issue-pitr-failswal-not-found">Issue: PITR fails - WAL not found</h3><p><strong>Error</strong>:&nbsp;<code>could not open file "000000010000000000000007": No such file or directory</code></p><p><strong>Cause</strong>: WAL file not in archive or restore_command wrong</p><p><strong>Fix</strong>:</p><pre><code class="language-bash"># Check WAL exists in archive
ls -lh /mnt/wal_archive/000000010000000000000007

# Test restore_command manually
sudo -u postgres cp /mnt/wal_archive/000000010000000000000007 /tmp/test_wal

# If missing, cannot recover to that point
# Restore to earlier point or use latest available WAL
</code></pre><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11. Summary</h2><h3 id="backup-strategy-summary">Backup Strategy Summary</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Method</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">RPO___ HTMLTAG_594___<th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">RTO</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Complexity</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Use Case</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">pg_dump</td>___HTM LTAG_607___Hours/Days</td><td style="padding: 5px 10px;">Hours</td><td style="padding: 5px 10px;">Low</td><td style="padding: 5px 10px;">Small DBs, migration</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">pg_basebackup</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Last backup</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">30-120 min</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Regular backups</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">WAL archiving</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Minutes</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">30-120 min</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">PITR capability</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Replication</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Seconds/0</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">30-60 sec</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">High_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">HA, zero data loss_</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="key-concepts">Key Concepts</h3><p>✅&nbsp;<strong>WAL Archiving_</strong>&nbsp;- Continuous backup of transactions logs</p><p>✅&nbsp;<strong>pg_basebackup</strong>&nbsp;- Physical backup of entire cluster</p><p>✅&nbsp;<strong>PITR</strong>&nbsp;- Restore to any point in time using base backup + WAL</p><p>✅&nbsp;<strong>RTO</strong>&nbsp;- How fast can you recover</p><p>✅&nbsp;<strong>RPO</strong>&nbsp;- How much data loss is acceptable</p><p>✅&nbsp;<strong>3-2-1 Rule</strong>&nbsp;- 3 copies, 2 media types, 1 off-site</p><h3 id="recovery-checklist">Recovery Checklist</h3><ul><li>&nbsp;Stop PostgreSQL</li><li>&nbsp;Restore base backup</li><li>&nbsp;Create recovery.signal</li><li>&nbsp;Configure restore_command</li><li>&nbsp;Set recovery target (time/xid/lsn)</li><li>&nbsp;Start PostgreSQL</li><li>&nbsp;Monitor recovery logs</li><li>&nbsp;Verify recovery point_</li><li>&nbsp;Promote if satisfied</li><li>&nbsp;Update replication if needed</li></ul><h3 id="next-steps">Next Steps_</h3><p>Lesson 17 will cover&nbsp;_<strong>Monitoring and Observability</strong>:</p><ul><li>Prometheus + Grafana setup</li><li>Key PostgreSQL metrics_</li><li>Patroni monitoring</li><li>Log aggregation</li><li>Alerting strategies</li><li>Performance dashboards_</li></ul>