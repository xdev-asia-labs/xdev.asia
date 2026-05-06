---
id: 019c9617-fbba-71f4-a5c3-d75c9087a96e
title: 'Lesson 28: Architectural Design HA'
slug: bai-28-thiet-ke-kien-truc-ha
description: Collect requirements, design architectural design documents, capacity planning and estimate costs for the HA production system.
duration_minutes: 160
is_free: true
video_url: null
sort_order: 28
section_title: 'Part 6: Production & Case Studies'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability with Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9221" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9221)"/>

  <!-- Decorations -->
  <g>
    <circle cx="742" cy="136" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="884" cy="258" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1026" cy="120" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="668" cy="242" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="810" cy="104" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="216" x2="1100" y2="296" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="246" x2="1050" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1042.8467875173176,200.5 1042.8467875173176,231.5 1016,247 989.1532124826824,231.5 989.1532124826824,200.5 1016,185" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Lesson 28</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 28: Architectural Design HA</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability with Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Production &amp; Case Studies</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">Goals</h2><p>After this lesson, you will:</p><ul><li>Gather requirements for HA cluster design</li><li>Create comprehensive architecture documents</li><li>Perform capacity planning calculations</li><li>Estimate infrastructure costs</li><li>Conduct design reviews effectively</li></ul><h2 id="1-requirements-gathering">1. Requirements Gathering</h2><h3 id="11-business-requirements-template">1.1. Business requirements template</h3><pre><code class="language-markdown"># PostgreSQL HA Requirements

## Business Context
- Application: [E-commerce platform]
- Users: [50M registered, 2M DAU]
- Business hours: [24/7 global]
- Peak traffic: [Black Friday, 10x normal]

## Availability Requirements
- Target uptime: [99.99% = 52 min downtime/year]
- Planned maintenance windows: [None - zero-downtime required]
- Acceptable downtime per incident: [&lt; 5 minutes]

## Performance Requirements
- Expected QPS: [5,000 average, 15,000 peak]
- Query latency target: [p50: 10ms, p95: 50ms, p99: 200ms]
- Write throughput: [1,000 TPS average, 3,000 TPS peak]

## Data Requirements
- Current data size: [2TB]
- Growth rate: [20% per year]
- Retention period: [7 years for compliance]
- Backup frequency: [Daily full, continuous WAL archiving]

## Disaster Recovery
- RPO (Recovery Point Objective): [&lt; 5 minutes]
- RTO (Recovery Time Objective): [&lt; 15 minutes]
- Geographic redundancy: [Required - multi-region]

## Security &amp; Compliance
- Data encryption: [At rest and in transit]
- Audit logging: [All queries must be logged]
- Compliance: [PCI DSS, GDPR, SOC 2]

## Budget Constraints
- Infrastructure budget: [$10K-15K/month]
- Staffing: [1 Senior DBA, 1 Junior DBA]
- Acceptable cost per transaction: [&lt; $0.0001]
</code></pre><h3 id="12-technical-requirements">1.2. Technical requirements</h3><pre><code class="language-markdown"># Technical Requirements

## Workload Characteristics
- Read/Write ratio: [80% reads, 20% writes]
- Transaction types:
  * OLTP (transactional): 70%
  * OLAP (analytical): 30%
- Query complexity: [Mix of simple and complex joins]
- Largest tables: [orders: 500M rows, users: 50M rows]

## Integration Requirements
- Application stack: [Node.js, Python, Java]
- Connection pooling: [Required - PgBouncer]
- Load balancing: [HAProxy or cloud LB]
- Monitoring: [Prometheus + Grafana]
- CI/CD: [GitLab CI]

## Operational Requirements
- Deployment method: [Kubernetes preferred, VMs acceptable]
- Backup storage: [S3-compatible object storage]
- Log aggregation: [ELK or Loki]
- Alerting: [PagerDuty integration]
- Documentation: [Confluence/GitHub Wiki]
</code></pre><h2 id="2-architecture-design-document">2. Architecture Design Document</h2><h3 id="21-high-level-architecture">2.1. High-level architecture</h3><pre><code class="language-text">                                    Internet
                                       ↓
                              [CloudFlare CDN]
                                       ↓
                          [AWS Application Load Balancer]
                                       ↓
                    ┌──────────────────┴──────────────────┐
                    ↓                                      ↓
            [us-east-1a]                            [us-east-1b]
        ┌─────────────────┐                    ┌─────────────────┐
        │ Application     │                    │ Application     │
        │ Servers (ECS)   │                    │ Servers (ECS)   │
        └────────┬────────┘                    └────────┬────────┘
                 ↓                                       ↓
              [HAProxy]                              [HAProxy]
           10.0.1.100:5432                       10.0.2.100:5432
                 ↓                                       ↓
    ┌────────────┴───────────┬──────────────────────────┴────────┐
    ↓                        ↓                                    ↓
[PostgreSQL Leader]  [PostgreSQL Replica]              [PostgreSQL Replica]
  10.0.1.11              10.0.1.12                         10.0.2.11
  r6g.4xlarge            r6g.2xlarge                       r6g.2xlarge
  16 vCPU, 128GB         8 vCPU, 64GB                      8 vCPU, 64GB
  2TB io2 SSD            1TB io2 SSD                       1TB io2 SSD
  20K IOPS               10K IOPS                          10K IOPS
  Patroni + etcd         Patroni + etcd                    Patroni + etcd
  
Supporting Services:
├─ PgBouncer (connection pooling) - Co-located with PostgreSQL
├─ etcd cluster (3 nodes) - Co-located with PostgreSQL
├─ Prometheus (monitoring) - Separate t3.large
├─ Grafana (visualization) - Separate t3.small
├─ Backup storage - S3 bucket (s3://pg-backups)
└─ WAL archive - S3 bucket (s3://pg-wal-archive)

DR Site (us-west-2):
└─ [PostgreSQL Replica] - Async replication from us-east-1
   10.100.1.11
   r6g.xlarge (standby, can scale up on DR activation)
</code></pre><h3 id="22-network-design">2.2. Network design</h3><pre><code class="language-text">VPC: 10.0.0.0/16

Subnets:
├─ Public subnet (us-east-1a): 10.0.1.0/24
│  └─ NAT Gateway, Bastion host
├─ Private subnet (us-east-1a): 10.0.10.0/24
│  └─ PostgreSQL leader, replica1, etcd1
├─ Public subnet (us-east-1b): 10.0.2.0/24
│  └─ NAT Gateway
├─ Private subnet (us-east-1b): 10.0.20.0/24
│  └─ PostgreSQL replica2, etcd2
└─ Private subnet (us-east-1c): 10.0.30.0/24
   └─ etcd3

Security Groups:
├─ PostgreSQL SG:
│  ├─ Inbound: 5432 from Application SG
│  ├─ Inbound: 8008 from Monitoring SG (Patroni API)
│  ├─ Inbound: 5432 from PostgreSQL SG (replication)
│  └─ Outbound: All
├─ Application SG:
│  ├─ Inbound: 443 from ALB
│  └─ Outbound: 5432 to PostgreSQL SG
└─ Monitoring SG:
   ├─ Inbound: 9090 from VPN
   └─ Outbound: 8008 to PostgreSQL SG
</code></pre><h3 id="23-data-flow-diagram">2.3. Data flow diagram</h3><pre><code class="language-text">Write Path:
Client → ALB → Application → HAProxy (master) → PostgreSQL Leader
                                                    ↓
                                         [Synchronous replication]
                                                    ↓
                                            PostgreSQL Replica1
                                                    ↓
                                         [Asynchronous replication]
                                                    ↓
                                            PostgreSQL Replica2 (AZ2)
                                                    ↓
                                         [Asynchronous replication]
                                                    ↓
                                            PostgreSQL DR (us-west-2)

Read Path (80% of traffic):
Client → ALB → Application → HAProxy (replicas) → Round-robin:
                                                    ├─ PostgreSQL Replica1
                                                    ├─ PostgreSQL Replica2
                                                    └─ PostgreSQL Replica (DR, optional)

Backup Path:
PostgreSQL Leader → WAL archiving → S3 (wal-archive)
                  ↓
            Daily pg_basebackup → S3 (backups)
                  ↓
            Monthly full backup → S3 Glacier
</code></pre><h2 id="3-capacity-planning">3. Capacity Planning</h2><h3 id="31-compute-capacity">3.1. Compute capacity</h3><pre><code class="language-python"># Capacity planning calculator

# Given requirements:
avg_qps = 5000  # queries per second
peak_qps = 15000  # peak queries per second
avg_query_time_ms = 10  # milliseconds
connection_per_query = 1

# Calculate connections needed
avg_connections = (avg_qps * avg_query_time_ms) / 1000
peak_connections = (peak_qps * avg_query_time_ms) / 1000

print(f"Average concurrent connections: {avg_connections}")
# Output: 50 connections

print(f"Peak concurrent connections: {peak_connections}")
# Output: 150 connections

# With connection pooling (transaction mode):
pooler_multiplier = 10  # Each DB connection serves 10 app connections
app_connections = peak_connections * pooler_multiplier
db_connections = peak_connections

print(f"Application connections: {app_connections}")
# Output: 1500 connections

print(f"Database connections (with pooler): {db_connections}")
# Output: 150 connections

# PostgreSQL configuration:
max_connections = 200  # 150 + 50 overhead
</code></pre><h3 id="32-memory-capacity">3.2. Memory capacity</h3><pre><code class="language-python"># PostgreSQL memory calculation

# Rule of thumb: 25% of RAM for shared_buffers
total_ram_gb = 128
shared_buffers_gb = total_ram_gb * 0.25
print(f"shared_buffers: {shared_buffers_gb}GB")
# Output: 32GB

# effective_cache_size: 50-75% of RAM
effective_cache_size_gb = total_ram_gb * 0.75
print(f"effective_cache_size: {effective_cache_size_gb}GB")
# Output: 96GB

# work_mem per connection
# Formula: (RAM - shared_buffers) / max_connections / 2
available_ram_gb = total_ram_gb - shared_buffers_gb
work_mem_mb = (available_ram_gb * 1024) / max_connections / 2
print(f"work_mem: {work_mem_mb:.0f}MB per connection")
# Output: 240MB per connection

# Validate total memory usage
max_memory_usage_gb = shared_buffers_gb + (max_connections * work_mem_mb / 1024)
print(f"Maximum memory usage: {max_memory_usage_gb:.1f}GB")
# Output: 80GB (within 128GB limit ✅)
</code></pre><h3 id="33-storage-capacity">3.3. Storage capacity</h3><pre><code class="language-python"># Storage planning

# Current data size
current_data_tb = 2  # TB

# Growth rate
annual_growth_rate = 0.20  # 20% per year
years_to_plan = 3

# Projected data size
projected_data_tb = current_data_tb * (1 + annual_growth_rate) ** years_to_plan
print(f"Data size in {years_to_plan} years: {projected_data_tb:.2f}TB")
# Output: 3.46TB

# WAL volume
# Estimate: 10% of data size per day
wal_per_day_gb = (current_data_tb * 1024) * 0.10
wal_retention_days = 7
total_wal_gb = wal_per_day_gb * wal_retention_days
print(f"WAL storage needed (7 days): {total_wal_gb:.0f}GB")
# Output: 1434GB ~ 1.4TB

# Backup storage
# Full backup + 7 days of WAL
backup_storage_tb = projected_data_tb + (total_wal_gb / 1024)
print(f"Backup storage needed: {backup_storage_tb:.2f}TB")
# Output: 4.86TB

# Total storage per instance
# Data + WAL + temp + overhead (20%)
storage_per_instance_tb = (projected_data_tb + (total_wal_gb / 1024)) * 1.20
print(f"Storage per instance: {storage_per_instance_tb:.2f}TB")
# Output: 5.83TB ~ 6TB

# Recommend: Provision 8TB for growth buffer
</code></pre><h3 id="34-iops-calculation">3.4. IOPS calculation</h3><pre><code class="language-python"># IOPS requirements

# Given:
write_tps = 3000  # transactions per second (peak)
reads_per_write = 4  # Average reads per write
checkpoint_interval_sec = 300  # 5 minutes

# Write IOPS
# Each transaction: 1 write to WAL + 1 write to data (during checkpoint)
wal_iops = write_tps * 1  # WAL writes
checkpoint_iops = write_tps * 1 / (checkpoint_interval_sec / 5)  # Amortized
total_write_iops = wal_iops + checkpoint_iops
print(f"Write IOPS: {total_write_iops:.0f}")
# Output: 3060 IOPS

# Read IOPS
# 80% read ratio, 20% write ratio
total_tps = write_tps / 0.20  # Total transactions = write TPS / write percentage
read_tps = total_tps * 0.80
read_iops = read_tps * reads_per_write
print(f"Read IOPS: {read_iops:.0f}")
# Output: 48000 IOPS

# Total IOPS
total_iops = total_write_iops + read_iops
print(f"Total IOPS required: {total_iops:.0f}")
# Output: 51060 IOPS

# Recommendation: Provision 60K IOPS for headroom
# AWS io2 SSD: $0.065/IOPS/month
iops_provisioned = 60000
</code></pre><h2 id="4-cost-estimation">4. Cost Estimation</h2><h3 id="41-aws-infrastructure-costs">4.1. AWS infrastructure costs</h3><pre><code class="language-text">Compute (EC2):
├─ Leader: r6g.4xlarge (16 vCPU, 128GB RAM)
│  └─ $0.672/hour x 730 hours = $490/month
├─ Replica1: r6g.2xlarge (8 vCPU, 64GB RAM)
│  └─ $0.336/hour x 730 hours = $245/month
├─ Replica2: r6g.2xlarge (8 vCPU, 64GB RAM)
│  └─ $0.336/hour x 730 hours = $245/month
├─ DR Replica: r6g.xlarge (4 vCPU, 32GB RAM)
│  └─ $0.168/hour x 730 hours = $123/month
└─ Total compute: $1,103/month

Storage (EBS io2):
├─ Leader: 8TB @ $0.125/GB = $1,000/month
│  └─ IOPS: 20K @ $0.065/IOPS = $1,300/month
├─ Replica1: 6TB @ $0.125/GB = $750/month
│  └─ IOPS: 10K @ $0.065/IOPS = $650/month
├─ Replica2: 6TB @ $0.125/GB = $750/month
│  └─ IOPS: 10K @ $0.065/IOPS = $650/month
├─ DR: 6TB @ $0.125/GB = $750/month
│  └─ IOPS: 5K @ $0.065/IOPS = $325/month
└─ Total storage: $6,175/month

Backup Storage (S3):
├─ S3 Standard (30 days): 5TB @ $0.023/GB = $115/month
├─ S3 Glacier (7 years): 50TB @ $0.004/GB = $200/month
└─ Total backup storage: $315/month

Network:
├─ Data transfer out: 2TB @ $0.09/GB = $180/month
├─ Inter-AZ transfer: 5TB @ $0.01/GB = $50/month
└─ Total network: $230/month

Supporting Services:
├─ Application Load Balancer: $23/month
├─ NAT Gateway (2): $65/month
├─ Monitoring (Prometheus, Grafana): $100/month
└─ Total supporting: $188/month

Grand Total: $8,011/month

Reserved Instance Savings (1-year):
- Compute: $1,103 → $770 (30% savings)
- Revised total: $7,678/month
</code></pre><h3 id="42-cost-optimization-opportunities">4.2. Cost optimization opportunities</h3><pre><code class="language-text">Potential Savings:
1. Use gp3 instead of io2 for non-critical replicas
   Savings: ~$2,000/month

2. Use Spot instances for DR replica
   Savings: ~$90/month

3. Lifecycle S3 backups to Glacier faster (7 days vs 30 days)
   Savings: ~$50/month

4. Reduce DR replica size (only scale up during DR)
   Savings: ~$60/month

5. Use AWS Savings Plans
   Additional 10-15% savings: ~$750/month

Optimized Total: ~$4,728/month (41% savings)
</code></pre><h2 id="5-design-review-process">5. Design Review Process</h2><h3 id="51-design-review-checklist">5.1. Design review checklist</h3><pre><code class="language-text">☐ Requirements Review
  ☐ Business requirements documented
  ☐ Technical requirements clear
  ☐ Non-functional requirements (performance, security)
  ☐ Constraints identified (budget, timeline)

☐ Architecture Review
  ☐ High-level diagram created
  ☐ Component responsibilities defined
  ☐ Data flow documented
  ☐ Network topology validated
  ☐ Security controls identified

☐ Capacity Planning
  ☐ Compute resources sized appropriately
  ☐ Storage capacity calculated
  ☐ IOPS requirements met
  ☐ Network bandwidth sufficient
  ☐ Growth projections considered

☐ High Availability
  ☐ SPoF (Single Points of Failure) eliminated
  ☐ Failover mechanisms tested
  ☐ RTO/RPO targets achievable
  ☐ DR plan documented
  ☐ Backup/restore validated

☐ Performance
  ☐ Query performance tested
  ☐ Load testing completed
  ☐ Bottlenecks identified
  ☐ Tuning recommendations documented
  ☐ Monitoring and alerting in place

☐ Security
  ☐ Encryption at rest and in transit
  ☐ Network segmentation
  ☐ Access controls (IAM, RBAC)
  ☐ Audit logging enabled
  ☐ Compliance requirements met

☐ Operational Readiness
  ☐ Runbooks created
  ☐ Monitoring dashboards configured
  ☐ Alerting rules defined
  ☐ On-call rotation established
  ☐ Training completed

☐ Cost Management
  ☐ Cost estimation completed
  ☐ Budget approved
  ☐ Cost optimization opportunities identified
  ☐ Ongoing cost monitoring plan
</code></pre><h3 id="52-review-meeting-agenda">5.2. Review meeting agenda</h3><pre><code class="language-markdown"># Architecture Design Review Meeting

Date: 2024-11-25
Duration: 90 minutes
Attendees: DBA team, SRE, Dev team, Product manager, Security

Agenda:
1. Introduction (5 min)
   - Project overview
   - Review objectives

2. Requirements Review (10 min)
   - Business requirements
   - Q&amp;A

3. Architecture Presentation (30 min)
   - High-level design
   - Component details
   - Data flow
   - Network design

4. Capacity Planning (15 min)
   - Compute, storage, IOPS calculations
   - Growth projections

5. Cost Estimation (10 min)
   - Infrastructure costs
   - Optimization opportunities

6. Security &amp; Compliance (10 min)
   - Security controls
   - Compliance mapping

7. Open Discussion (10 min)
   - Concerns and risks
   - Alternative approaches

8. Action Items &amp; Next Steps (5 min)
   - Assign owners
   - Set deadlines

Follow-up:
- Circulate meeting notes within 24 hours
- Address action items within 1 week
- Final approval from stakeholders
</code></pre><h2 id="6-risk-assessment">6. Risk Assessment</h2><h3 id="61-risk-matrix">6.1. Risk matrix</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_Risk</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_Likelihood</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_Impact_</th>__ _HTMLTAG_131___Severity</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Mitigation</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">Leader node failure</td><td style="padding: 5px 10px;">Medium</td><td style="padding: 5px 10px;">Low</td><td style="padding: 5px 10px;">Medium</td><td style="padding: 5px 10px;">Automatic failover with Patroni</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Datacenter outage</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Low</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">High</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Multi-AZ deployment + DR site</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Data corruption</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Low</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">High</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">PITR backups, checksums enabled</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Capacity exhaustion</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Monitoring + auto-scaling</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Security breach</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Low</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Critical_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">High</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Encryption, network segmentation, audit logs_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Cost overrun</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Budget alerts, cost optimization</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Staff turnover</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">High</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Documentation, cross-training</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Vendor lock-in_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Low</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Low</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Use open-source tools (Patroni vs RDS)</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="62-mitigation-strategies">6.2. Mitigation strategies</h3><pre><code class="language-text">1. Leader node failure
   - Patroni automatic failover (RTO &lt; 30s)
   - Health checks every 10s
   - Synchronous replication to 1 replica
   - Runbook for manual intervention

2. Datacenter outage
   - Multi-AZ deployment (2 AZs in primary region)
   - DR site in different region (us-west-2)
   - Quarterly DR drills
   - Documented failover procedures

3. Data corruption
   - pg_checksums enabled
   - Daily full backups + continuous WAL archiving
   - PITR tested monthly
   - Backup retention: 30 days hot, 7 years cold

4. Capacity exhaustion
   - Prometheus alerts at 70% CPU/memory/disk
   - PgBouncer for connection management
   - Read replicas for horizontal scaling
   - Annual capacity planning review

5. Security breach
   - Encryption at rest (LUKS) and in transit (SSL/TLS)
   - Network segmentation (private subnets)
   - MFA for all admin access
   - Quarterly security audits
   - Intrusion detection system (IDS)

6. Cost overrun
   - AWS Budgets with alerts at 80%, 100%, 120%
   - Monthly cost review meetings
   - Reserved instances for predictable workloads
   - Automatic shutdown of non-production environments

7. Staff turnover
   - Comprehensive documentation (Confluence)
   - Runbooks for common tasks
   - Cross-training program
   - Bus factor &gt; 2 for critical knowledge
</code></pre><h2 id="7-lab-exercises">7. Lab Exercises</h2><h3 id="lab-1-requirements-gathering">Lab 1: Requirements gathering</h3><p><strong>Tasks</strong>:</p><ol><li>Interview stakeholders (role-play)</li><li>Document business requirements</li><li>Define technical requirements_</li><li>Identify constraints</li><li>_Create requirements document</li></ol><h3 id="lab-2-architecture-design">Lab 2: Architecture design</h3><p><strong>Tasks</strong>:_</p><ol><li>Create high-level architecture diagram</li><li>Design network topology</li><li>Document data flow</li><li>Define security controls</li><li>Present to team for review</li></ol><h3 id="lab-3-capacity-planning">Lab 3: Capacity planning</h3><p><strong>Tasks_</strong>:_</p><ol><li>_Calculate compute requirements</li><li>Estimate storage needs</li><li>Determine IOPS requirements</li><li>Plan for 3-year growth</li><li>Document assumption_</li></ol><h3 id="lab-4-cost-estimation">Lab 4: Cost estimation</h3><p><strong>Tasks_</strong>:_</p><ol><li>Price out infrastructure on AWS/GCP/Azure</li><li>Compare managed vs self-hosted options</li><li>Identify cost opportunities</li><li>Create budget proposal</li><li>Present to management</li></ol><h2 id="8-t%E1%BB%95ng-k%E1%BA%BFt">8. Summary</h2><h3 id="design-principles">Design Principles_</h3><pre><code class="language-text">1. Simplicity: Start simple, add complexity as needed
2. Resilience: Eliminate single points of failure
3. Scalability: Plan for 3x growth
4. Security: Defense in depth
5. Observability: Monitor everything
6. Cost-effectiveness: Optimize for cost/performance ratio
7. Maintainability: Document and automate
</code></pre><h3 id="key-deliverables">Key Deliverables_</h3><pre><code class="language-text">1. Requirements document
2. Architecture diagrams
3. Capacity planning spreadsheet
4. Cost estimation
5. Risk assessment
6. Design review presentation
7. Runbooks and documentation
</code></pre><h3 id="next-steps">Next Steps_</h3><p>Article 29 will cover&nbsp;<strong>Deploy Production-Ready Cluster</strong>:</p><ul><li>Complete end-to-end deployment guide</li><li>_Production deployment checklist</li><li>Operational runbooks</li><li>Knowledge transfer</li><li>Final assessment</li></ul>