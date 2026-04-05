---
id: 019c9617-fbae-719f-bd83-5b4c737bb570
title: 'Bài 25: Real-world Case Studies'
slug: bai-25-real-world-case-studies
description: >-
  Phân tích production architecture thực tế, chiến lược scaling, tối ưu chi phí
  và bài học kinh nghiệm từ các dự án thực tế.
duration_minutes: 130
is_free: true
video_url: null
sort_order: 25
section_title: "Phần 5: Security & Nâng cao"
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9241" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9241)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1029" cy="257" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="958" cy="246" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="887" cy="235" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="816" cy="224" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="745" cy="213" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="167" x2="1100" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="197" x2="1050" y2="267" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1003.3730669589464,146 1003.3730669589464,188 967,209 930.6269330410536,188 930.6269330410536,146 967,125" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Bài 25</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 25: Real-world Case Studies</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability với Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Security &amp; Nâng cao</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Learn from production PostgreSQL HA deployments</li><li>Understand scaling strategies for high traffic</li><li>Analyze cost optimization techniques</li><li>Study incident post-mortems</li><li>Apply best practices from real scenarios</li></ul><h2 id="1-case-study-1-e-commerce-platform-high-transaction-volume">1. Case Study 1: E-commerce Platform (High Transaction Volume)</h2><h3 id="11-company-profile">1.1. Company profile</h3><pre><code class="language-text">Company: Online Retail Platform
Scale: 50M users, 500K daily transactions
Traffic: 10K queries/second peak
Data size: 5TB
Industry: E-commerce
</code></pre><h3 id="12-architecture">1.2. Architecture</h3><pre><code class="language-text">Production Setup:
├─ PostgreSQL 18 + Patroni
├─ 5-node cluster (3 DC1 + 2 DC2)
│  ├─ Leader: AWS r6g.4xlarge (16 vCPU, 128GB RAM)
│  ├─ Replicas: AWS r6g.2xlarge (8 vCPU, 64GB RAM)
│  └─ Storage: io2 SSD, 20K IOPS
├─ PgBouncer connection pooling (transaction mode)
├─ HAProxy load balancing
├─ Redis caching layer
└─ Monitoring: Prometheus + Grafana

Database separation:
├─ orders_db (heavy writes)
├─ products_db (mostly reads)
├─ users_db (mixed workload)
└─ analytics_db (read replica for reports)
</code></pre><h3 id="13-configuration-highlights">1.3. Configuration highlights</h3><pre><code class="language-yaml"># Patroni configuration
postgresql:
  parameters:
    # Memory
    shared_buffers: 32GB
    effective_cache_size: 96GB
    work_mem: 32MB
    maintenance_work_mem: 2GB
    
    # Connections
    max_connections: 500
    
    # Write performance
    wal_buffers: 64MB
    checkpoint_completion_target: 0.9
    max_wal_size: 16GB
    min_wal_size: 4GB
    
    # Query performance
    random_page_cost: 1.1  # SSD
    effective_io_concurrency: 200
    
    # Parallelism
    max_parallel_workers: 8
    max_parallel_workers_per_gather: 4
</code></pre><h3 id="14-challenges-and-solutions">1.4. Challenges and solutions</h3><h4 id="challenge-1-connection-exhaustion">Challenge 1: Connection exhaustion</h4><pre><code class="language-text">Problem: 
- Peak traffic caused max_connections limit to be hit
- Application errors: "FATAL: too many connections"

Solution:
- Implemented PgBouncer with transaction pooling
- Reduced max_connections from 1000 to 500
- PgBouncer pool_size=100 per database
- Result: Handled 10K app connections with 500 DB connections
</code></pre><h4 id="challenge-2-replication-lag-during-flash-sales">Challenge 2: Replication lag during flash sales</h4><pre><code class="language-text">Problem:
- Flash sales caused 50K writes/second
- Replicas lagged by 5-10 seconds
- Read queries returned stale data

Solution:
- Increased wal_sender_timeout and wal_receiver_timeout
- Tuned checkpoint_completion_target to 0.9
- Added synchronous replication for critical tables:
  ALTER TABLE orders SET (synchronous_commit = 'remote_apply');
- Separated analytics queries to dedicated read replica
</code></pre><h4 id="challenge-3-disk-io-bottleneck">Challenge 3: Disk I/O bottleneck</h4><pre><code class="language-text">Problem:
- Disk I/O saturated at 95%+ during peak
- Query latency increased from 5ms to 500ms

Solution:
- Upgraded storage from gp3 to io2 (20K IOPS)
- Implemented table partitioning for orders table
  - Range partitioning by order_date (daily)
  - Automated partition management
- Added btree indexes on frequently queried columns
- Result: I/O dropped to 40%, latency back to 5-10ms
</code></pre><h3 id="15-key-metrics">1.5. Key metrics</h3><pre><code class="language-text">Performance:
- Query throughput: 10K qps peak
- Average query latency: 8ms
- 99th percentile latency: 50ms
- Replication lag: &lt; 100ms
- Failover time: 15 seconds

Availability:
- Uptime: 99.99% (52 minutes downtime/year)
- Unplanned downtime: 2 incidents, 15 minutes total
- Planned maintenance: 0 downtime (rolling updates)

Cost:
- Infrastructure: $15K/month (AWS)
- Staffing: 2 DBAs + 1 SRE
- Total: ~$50K/month
</code></pre><h2 id="2-case-study-2-saas-application-multi-tenant">2. Case Study 2: SaaS Application (Multi-tenant)</h2><h3 id="21-company-profile">2.1. Company profile</h3><pre><code class="language-text">Company: Project Management SaaS
Scale: 100K tenants, 5M users
Traffic: 2K queries/second average
Data size: 2TB
Industry: SaaS
</code></pre><h3 id="22-architecture">2.2. Architecture</h3><pre><code class="language-text">Multi-tenant Strategy:
├─ Shared database, separate schemas per tenant
├─ Row-level security (RLS) for data isolation
├─ Connection pooling per tenant
└─ Automated backup per tenant

Cluster Setup:
├─ 3-node Patroni cluster
├─ PostgreSQL 18 on GCP Cloud SQL equivalent (self-managed)
├─ Compute Engine n2-highmem-8 (8 vCPU, 64GB RAM)
├─ Persistent SSD, 10K IOPS
└─ Automated daily backups to GCS
</code></pre><h3 id="23-multi-tenancy-implementation">2.3. Multi-tenancy implementation</h3><pre><code class="language-sql">-- Schema per tenant
CREATE SCHEMA tenant_12345;
CREATE SCHEMA tenant_12346;

-- Row-level security
CREATE POLICY tenant_isolation ON users
  USING (tenant_id = current_setting('app.current_tenant')::bigint);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Application sets tenant context
SET app.current_tenant = '12345';

-- Query automatically filtered by RLS
SELECT * FROM users;  -- Only sees tenant 12345's data
</code></pre><h3 id="24-challenges-and-solutions">2.4. Challenges and solutions</h3><h4 id="challenge-1-large-tenant-impact">Challenge 1: Large tenant impact</h4><pre><code class="language-text">Problem:
- One tenant (10% of data) caused high CPU usage
- Impacted all other tenants
- "Noisy neighbor" problem

Solution:
- Implemented query timeout per tenant
  ALTER ROLE tenant_12345 SET statement_timeout = '30s';
- Added work_mem limit per tenant
  ALTER ROLE tenant_12345 SET work_mem = '8MB';
- Moved largest tenants to dedicated instances
- Implemented fair queuing with pg_cron
</code></pre><h4 id="challenge-2-backuprestore-for-specific-tenant">Challenge 2: Backup/restore for specific tenant</h4><pre><code class="language-text">Problem:
- Needed to restore one tenant's data
- Full restore would impact all tenants

Solution:
- Implemented per-schema backup script:
  
#!/bin/bash
TENANT_ID=$1
pg_dump -n tenant_${TENANT_ID} myapp &gt; tenant_${TENANT_ID}_backup.sql

- Logical backup to S3 per tenant, daily
- PITR for full database, per-tenant granular restore
</code></pre><h4 id="challenge-3-schema-migration-across-100k-tenants">Challenge 3: Schema migration across 100K tenants</h4><pre><code class="language-text">Problem:
- Need to add column to table
- 100K schemas = 100K migrations
- Can't hold lock that long

Solution:
- Multi-phase migration:
  1. Add column as nullable (fast, no rewrite)
  2. Backfill data in batches (chunked updates)
  3. Add default value (after backfill)
  4. Add NOT NULL constraint (after validation)
  
-- Phase 1: Add column (instant)
ALTER TABLE users ADD COLUMN last_login_at TIMESTAMP;

-- Phase 2: Backfill (chunked)
DO $$
DECLARE
  tenant RECORD;
BEGIN
  FOR tenant IN SELECT schema_name FROM information_schema.schemata 
                WHERE schema_name LIKE 'tenant_%'
  LOOP
    EXECUTE format('UPDATE %I.users SET last_login_at = created_at 
                    WHERE last_login_at IS NULL', tenant.schema_name);
    COMMIT;  -- Commit per tenant
  END LOOP;
END $$;

-- Phase 3: Add default (after backfill)
ALTER TABLE users ALTER COLUMN last_login_at SET DEFAULT now();

-- Phase 4: Add NOT NULL (after validation)
ALTER TABLE users ALTER COLUMN last_login_at SET NOT NULL;
</code></pre><h3 id="25-key-metrics">2.5. Key metrics</h3><pre><code class="language-text">Performance:
- Query throughput: 2K qps average
- Average query latency: 15ms
- Replication lag: &lt; 50ms
- Largest tenant: 50GB (isolated)

Availability:
- Uptime: 99.95%
- Failover time: 20 seconds

Cost:
- Infrastructure: $5K/month (GCP)
- Staffing: 1 DBA
- Cost per tenant: $0.05/month
</code></pre><h2 id="3-case-study-3-financial-services-compliance-heavy">3. Case Study 3: Financial Services (Compliance-heavy)</h2><h3 id="31-company-profile">3.1. Company profile</h3><pre><code class="language-text">Company: Online Banking Platform
Scale: 1M users, $100M transactions/day
Traffic: 500 queries/second
Data size: 10TB
Industry: Financial Services (heavily regulated)
</code></pre><h3 id="32-architecture">3.2. Architecture</h3><pre><code class="language-text">Compliance-focused Setup:
├─ PostgreSQL 18 + Patroni (on-premises)
├─ 5-node cluster + 2 DR site nodes
├─ HPE servers (bare metal, 32-core, 256GB RAM)
├─ Enterprise SSD RAID 10
├─ Full encryption at rest (LUKS)
├─ SSL/TLS for all connections
├─ pgAudit enabled (log all queries)
├─ Backup retention: 7 years (compliance)
└─ Disaster recovery tested quarterly

Security measures:
├─ Network: Air-gapped from internet
├─ Authentication: Client certificates + SCRAM-SHA-256
├─ Authorization: Row-level security for sensitive data
├─ Auditing: All queries logged to SIEM
└─ Monitoring: 24/7 SOC
</code></pre><h3 id="33-compliance-configuration">3.3. Compliance configuration</h3><pre><code class="language-sql">-- Enable pgAudit
CREATE EXTENSION pgaudit;
ALTER SYSTEM SET pgaudit.log = 'all';
ALTER SYSTEM SET pgaudit.log_catalog = off;
ALTER SYSTEM SET pgaudit.log_parameter = on;
ALTER SYSTEM SET pgaudit.log_relation = on;

-- Immutable audit table
CREATE TABLE audit_log (
  id BIGSERIAL PRIMARY KEY,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  user_name TEXT NOT NULL,
  query TEXT NOT NULL,
  client_ip INET NOT NULL
) WITH (fillfactor=100);  -- No updates, append-only

-- Prevent deletion (compliance)
CREATE RULE no_delete AS ON DELETE TO audit_log DO INSTEAD NOTHING;
CREATE RULE no_update AS ON UPDATE TO audit_log DO INSTEAD NOTHING;

-- Separate tablespace on WORM (Write Once Read Many) storage
CREATE TABLESPACE audit_ts LOCATION '/mnt/worm_storage/audit';
ALTER TABLE audit_log SET TABLESPACE audit_ts;
</code></pre><h3 id="34-challenges-and-solutions">3.4. Challenges and solutions</h3><h4 id="challenge-1-7-year-backup-retention">Challenge 1: 7-year backup retention</h4><pre><code class="language-text">Problem:
- Compliance requires 7 years of backups
- 10TB database = 365 x 7 = 2,555 daily backups
- Storage costs astronomical

Solution:
- Implemented tiered backup strategy:
  - Daily full backups: 30 days (hot storage)
  - Weekly full backups: 1 year (warm storage)
  - Monthly full backups: 7 years (cold storage - tape)
- Compression with pgBackRest
- Result: Reduced storage from 25PB to 5PB
</code></pre><h4 id="challenge-2-zero-tolerance-for-data-loss-rpo-0">Challenge 2: Zero-tolerance for data loss (RPO = 0)</h4><pre><code class="language-text">Problem:
- Banking regulations require no data loss
- Async replication has lag window

Solution:
- Synchronous replication to 2 replicas
ALTER SYSTEM SET synchronous_standby_names = 'ANY 2 (node2, node3, node4)';
ALTER SYSTEM SET synchronous_commit = 'remote_apply';

- Trade-off: 10ms additional latency
- Acceptable for financial transactions
</code></pre><h4 id="challenge-3-disaster-recovery-drills">Challenge 3: Disaster recovery drills</h4><pre><code class="language-text">Problem:
- Quarterly DR drills required by auditors
- Can't disrupt production

Solution:
- Automated DR failover testing:
  1. Clone production to DR site (logical replication)
  2. Promote DR site to primary
  3. Run smoke tests (read-only queries)
  4. Measure RTO (target: &lt; 1 hour)
  5. Restore production primary
  6. Document results for audit

- Implemented with Ansible playbooks
- Full drill takes 2 hours (outside business hours)
</code></pre><h3 id="35-key-metrics">3.5. Key metrics</h3><pre><code class="language-text">Performance:
- Query throughput: 500 qps
- Average query latency: 20ms (with sync replication)
- Replication lag: 0ms (synchronous)
- Failover time: 30 seconds

Availability:
- Uptime: 99.999% (5 minutes downtime/year)
- Unplanned downtime: 0 (in last 2 years)

Compliance:
- Audit log retention: 7 years
- Backup retention: 7 years
- DR drills: Quarterly (100% success rate)

Cost:
- Infrastructure: $30K/month (on-prem)
- Staffing: 3 DBAs + 2 security engineers
- Total: ~$100K/month
</code></pre><h2 id="4-case-study-4-social-media-platform-read-heavy">4. Case Study 4: Social Media Platform (Read-heavy)</h2><h3 id="41-company-profile">4.1. Company profile</h3><pre><code class="language-text">Company: Social Media App
Scale: 500M users, 10B posts
Traffic: 50K queries/second (95% reads)
Data size: 50TB
Industry: Social Media
</code></pre><h3 id="42-architecture">4.2. Architecture</h3><pre><code class="language-text">Read-heavy Optimization:
├─ 1 Leader (writes only)
├─ 20 Read replicas (geographically distributed)
├─ CDN for static content
├─ Redis for session/cache
├─ Elasticsearch for search
└─ S3 for media files

Database sharding:
├─ Shard by user_id (hash-based)
├─ 50 shards (1TB each)
├─ Each shard: 1 leader + 5 replicas
└─ Vitess for shard management
</code></pre><h3 id="43-read-scaling-strategy">4.3. Read scaling strategy</h3><pre><code class="language-sql">-- Read queries routed to replicas
-- Application logic:
if query_type == 'SELECT':
    conn = connect_to_replica()
else:
    conn = connect_to_leader()

-- Geographic routing
if user_location == 'us-west':
    replica = 'pg-us-west-replica-1'
elif user_location == 'eu-central':
    replica = 'pg-eu-central-replica-1'
else:
    replica = 'pg-us-east-replica-1'
</code></pre><h3 id="44-challenges-and-solutions">4.4. Challenges and solutions</h3><h4 id="challenge-1-replication-lag-visible-to-users">Challenge 1: Replication lag visible to users</h4><pre><code class="language-text">Problem:
- User posts content, immediately refreshes page
- Content not visible (read from lagging replica)
- User thinks post failed

Solution:
- Sticky sessions after write:
  1. User writes to leader
  2. Application stores LSN in session cookie
  3. Next read checks replica LSN &gt;= session LSN
  4. If replica behind, route to leader temporarily
  5. After replica catches up, route back to replica

-- PostgreSQL 10+ function
SELECT pg_last_wal_replay_lsn();  -- On replica
SELECT pg_current_wal_lsn();       -- On leader

-- App logic
if replica_lsn &lt; session_lsn:
    route_to_leader()
</code></pre><h4 id="challenge-2-hot-partition-celebrity-posts">Challenge 2: Hot partition (celebrity posts)</h4><pre><code class="language-text">Problem:
- Celebrity with 100M followers posts content
- Single partition overwhelmed
- Query latency spikes to 10 seconds

Solution:
- Identify hot users (&gt; 1M followers)
- Replicate hot user data to all shards
- Denormalize celebrity posts to separate table
- Use materialized views for timeline generation
CREATE MATERIALIZED VIEW celebrity_timeline AS 
  SELECT * FROM posts 
  WHERE user_id IN (SELECT user_id FROM celebrities)
  ORDER BY created_at DESC;

-- Refresh every 5 minutes
REFRESH MATERIALIZED VIEW CONCURRENTLY celebrity_timeline;
</code></pre><h4 id="challenge-3-managing-20-read-replicas">Challenge 3: Managing 20 read replicas</h4><pre><code class="language-text">Problem:
- Manual management of 20 replicas is error-prone
- Need to add/remove replicas dynamically

Solution:
- Kubernetes + Zalando Postgres Operator
- Auto-scaling based on CPU/query load
- Example: Scale from 20 to 30 replicas during peak hours

apiVersion: acid.zalan.do/v1
kind: postgresql
spec:
  numberOfInstances: 20  # Auto-scaled by HPA
  resources:
    requests:
      cpu: 4
      memory: 16Gi
    limits:
      cpu: 8
      memory: 32Gi
</code></pre><h3 id="45-key-metrics">4.5. Key metrics</h3><pre><code class="language-text">Performance:
- Query throughput: 50K qps (48K reads, 2K writes)
- Average read latency: 5ms
- Average write latency: 15ms
- Replication lag: 100-500ms (acceptable for social media)

Availability:
- Uptime: 99.9%
- Read replicas can fail without user impact

Cost:
- Infrastructure: $80K/month (AWS)
- 50 shards x (1 leader + 5 replicas) = 300 instances
- Mostly r6g.xlarge (4 vCPU, 32GB RAM)
</code></pre><h2 id="5-lessons-learned-cross-case-analysis">5. Lessons Learned (Cross-case Analysis)</h2><h3 id="51-common-patterns">5.1. Common patterns</h3><pre><code class="language-text">✅ What works:
1. Connection pooling (PgBouncer) - Essential for high traffic
2. Read replicas - Cheapest way to scale reads
3. Monitoring with Prometheus - Early problem detection
4. Automated failover (Patroni) - Reduces MTTR
5. Table partitioning - Improves query performance
6. Backup automation - Prevents human error
7. Regular DR drills - Validates procedures
8. Documentation - Critical for incident response

❌ What doesn't work:
1. Over-sharding - Adds complexity without benefit
2. Premature optimization - YAGNI applies to databases too
3. Ignoring replication lag - Causes data consistency issues
4. Manual processes - Error-prone and slow
5. Single point of failure - No HA = no production
</code></pre><h3 id="52-cost-optimization-techniques">5.2. Cost optimization techniques</h3><pre><code class="language-text">1. Right-sizing instances:
   - Start small, scale up based on metrics
   - Use burstable instances (t3/t4g) for dev/staging
   - Reserved instances for predictable workloads (40% savings)

2. Storage optimization:
   - gp3 instead of io2 for most workloads (60% cheaper)
   - Compress old partitions (pg_squeeze)
   - Archive to S3 for long-term retention

3. Reduce replica count:
   - 2-3 replicas sufficient for most workloads
   - Use read cache (Redis) before adding replicas

4. Connection pooling:
   - Reduces instance size requirements
   - 500 connections → 100 actual DB connections

5. Serverless options:
   - AWS RDS Proxy + Aurora Serverless for variable workload
   - Pay per request instead of fixed capacity
</code></pre><h3 id="53-when-to-not-use-patroni">5.3. When to NOT use Patroni</h3><pre><code class="language-text">Consider alternatives if:
1. Single instance is sufficient (&lt; 100 qps)
2. Cloud-managed HA available (RDS, Cloud SQL)
3. Don't have skilled PostgreSQL DBA
4. Budget very limited
5. Development/testing only

Use Patroni when:
1. Need full control over configuration
2. On-premises or hybrid cloud
3. Compliance requires self-managed
4. Cost optimization vs managed services
5. High availability is critical
</code></pre><h2 id="6-lab-exercises">6. Lab Exercises</h2><h3 id="lab-1-calculate-capacity-planning">Lab 1: Calculate capacity planning</h3><p><strong>Tasks</strong>:</p><ol><li>Estimate queries per second for your use case</li><li>Calculate required connections</li><li>Size instance (CPU, RAM, storage)</li><li>Estimate replication lag for replica count</li><li>Calculate total infrastructure cost</li></ol><h3 id="lab-2-design-multi-tenant-architecture">Lab 2: Design multi-tenant architecture</h3><p><strong>Tasks</strong>:</p><ol><li>Choose tenancy model (shared vs dedicated)</li><li>Implement row-level security</li><li>Create backup strategy per tenant</li><li>Design migration procedure</li><li>Test noisy neighbor mitigation</li></ol><h3 id="lab-3-implement-read-replica-scaling">Lab 3: Implement read replica scaling</h3><p><strong>Tasks</strong>:</p><ol><li>Add read replica to cluster</li><li>Implement read/write routing in application</li><li>Measure replication lag</li><li>Test failover with replicas</li><li>Monitor query distribution</li></ol><h3 id="lab-4-cost-optimization-analysis">Lab 4: Cost optimization analysis</h3><p><strong>Tasks</strong>:</p><ol><li>Audit current infrastructure costs</li><li>Identify optimization opportunities</li><li>Implement connection pooling</li><li>Right-size instances</li><li>Calculate cost savings</li></ol><h2 id="7-t%E1%BB%95ng-k%E1%BA%BFt">7. Tổng kết</h2><h3 id="architecture-patterns-summary">Architecture Patterns Summary</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Pattern</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Best For</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Complexity</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Cost</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">Single Leader + Replicas</td><td style="padding: 5px 10px;">Read-heavy</td><td style="padding: 5px 10px;">Low</td><td style="padding: 5px 10px;">Low</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Multi-datacenter</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Geographic distribution</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">High</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">High</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Sharding</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Horizontal scaling</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Very High</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Multi-tenant</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">SaaS applications</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Low</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="key-takeaways">Key Takeaways</h3><pre><code class="language-text">1. Connection pooling is non-negotiable at scale
2. Read replicas are the easiest way to scale
3. Monitoring and alerting prevent incidents
4. Backup and restore must be tested regularly
5. Documentation saves time during incidents
6. Automation reduces human error
7. Cost optimization is ongoing effort
8. Right-sizing prevents over-provisioning
</code></pre><h3 id="next-steps">Next Steps</h3><p>Bài 26 sẽ cover&nbsp;<strong>Automation with Ansible</strong>:</p><ul><li>Ansible playbooks for Patroni deployment</li><li>Configuration management automation</li><li>Automated testing frameworks</li><li>CI/CD integration for database changes</li><li>Infrastructure as Code</li></ul>
