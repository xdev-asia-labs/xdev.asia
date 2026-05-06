---
id: 019c9617-fad7-7170-97f5-55c1940af2f5
title: PostgreSQL High Availability with Patroni & etcd
slug: postgresql-high-availability-voi-patroni-etcd
description: 'Learn how to deploy PostgreSQL High Availability cluster with Patroni and etcd. Practical course from A-Z: installation, configuration, automatic failover, monitoring and production operations. 29 lessons + detailed labs.'
featured_image: uploads/2025/11/postgresql-high-availability-6c97b5fc.jpeg
level: intermediate
duration_hours: 76
lesson_count: 29
price: '0.00'
is_free: true
view_count: 1
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2025-11-22T05:07:03.000000Z'
created_at: '2026-02-25T18:37:59.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-faa6-70d6-8679-ee4de1f177b3
  name: DevSecOps
  slug: devsecops
tags:
- name: PostgreSQL High Availability với Patroni & etcd Course
  slug: postgresql-high-availability-voi-patroni-etcd-course
- name: postgresql
  slug: postgresql
- name: high-availability
  slug: high-availability
- name: patroni
  slug: patroni
- name: etcd
  slug: etcd
- name: database-clustering
  slug: database-clustering
- name: replication
  slug: replication
- name: failover
  slug: failover
- name: distributed-systems
  slug: distributed-systems
- name: devops
  slug: devops
- name: database-administration
  slug: database-administration
- name: streaming-replication
  slug: streaming-replication
- name: automated-failover
  slug: automated-failover
- name: cluster-management
  slug: cluster-management
- name: production-deployment
  slug: production-deployment
- name: monitoring
  slug: monitoring
- name: backup-recovery
  slug: backup-recovery
- name: disaster-recovery
  slug: disaster-recovery
- name: linux
  slug: linux
- name: system-administration
  slug: system-administration
- name: infrastructure
  slug: infrastructure
sections:
- id: unsectioned
  title: PostgreSQL High Availability with Patroni & etcd
  description: null
  sort_order: 0
  lessons:
  - id: 019c9617-fb5e-71a4-b3a1-a77a7c225818
    title: 'Lesson 1: Overview of PostgreSQL High Availability'
    slug: bai-1-tong-quan-ve-postgresql-high-availability
    description: Learn why High Availability is needed, compare popular HA solutions (Patroni, Repmgr, Pacemaker) and master the overall architecture of the PostgreSQL HA system.
    duration_minutes: 110
    is_free: true
    sort_order: 1
    video_url: null
  - id: 019c9617-fb63-72fe-8fb4-4839e41ca6b5
    title: 'Lesson 2: Streaming Replication in PostgreSQL'
    slug: bai-2-streaming-replication-trong-postgresql
    description: Explore Streaming Replication mechanism, WAL logging, Synchronous/Asynchronous replication difference and practice basic Primary-Standby setup.
    duration_minutes: 190
    is_free: true
    sort_order: 2
    video_url: null
  - id: 019c9617-fb66-7039-b71b-ae1b85a72eee
    title: 'Lesson 3: Introducing Patroni and etcd'
    slug: bai-3-gioi-thieu-patroni-va-etcd
    description: Understand how Patroni works, the role of DCS (etcd/Consul/ZooKeeper), Raft consensus algorithm and automatic leader election mechanism.
    duration_minutes: 160
    is_free: true
    sort_order: 3
    video_url: null
  - id: 019c9617-fb6a-71b8-aea5-33a8de9b9d29
    title: 'Lesson 4: Prepare infrastructure'
    slug: bai-4-chuan-bi-ha-tang
    description: Detailed instructions on hardware requirements, network/firewall configuration, setup of 3 VMs/Servers and time synchronization for HA cluster.
    duration_minutes: 145
    is_free: true
    sort_order: 4
    video_url: null
  - id: 019c9617-fb6d-73ff-ab92-84838b979806
    title: 'Lesson 5: Install PostgreSQL'
    slug: bai-5-cai-dat-postgresql
    description: Install PostgreSQL from package repository or source, configure postgresql.conf and pg_hba.conf on all 3 nodes in the cluster.
    duration_minutes: 110
    is_free: true
    sort_order: 5
    video_url: null
  - id: 019c9617-fb71-7108-9898-0733dd6d13bf
    title: 'Lesson 6: Install and configure etcd cluster'
    slug: bai-6-cai-dat-va-cau-hinh-etcd-cluster
    description: Download, install and configure etcd cluster 3 nodes, create systemd service and check health with etcdctl commands.
    duration_minutes: 160
    is_free: true
    sort_order: 6
    video_url: null
  - id: 019c9617-fb74-7100-9272-7839bac3bdac
    title: 'Lesson 7: Installing Patroni'
    slug: bai-7-cai-dat-patroni
    description: Install Python dependencies, setup Patroni via pip, analyze patroni.yml structure and create systemd service on 3 nodes.
    duration_minutes: 165
    is_free: true
    sort_order: 7
    video_url: null
  - id: 019c9617-fb77-71c7-a375-ddb3553fc7a4
    title: 'Lesson 8: Detailed Patroni configuration'
    slug: bai-8-cau-hinh-patroni-chi-tiet
    description: 'Deeply analyze the patroni.yml file in each section: bootstrap, PostgreSQL parameters, authentication, tags and constraints for the cluster.'
    duration_minutes: 155
    is_free: true
    sort_order: 8
    video_url: null
  - id: 019c9617-fb7a-7138-be78-f6d8b1653656
    title: 'Lesson 9: Bootstrap PostgreSQL Cluster'
    slug: bai-9-bootstrap-postgresql-cluster
    description: Start Patroni for the first time, monitor the automatic bootstrap process, check the status with patronictl and troubleshoot common problems.
    duration_minutes: 120
    is_free: true
    sort_order: 9
    video_url: null
  - id: 019c9617-fb7c-727d-a01d-896b5d138e2f
    title: 'Lesson 10: Replication management'
    slug: bai-10-quan-ly-replication
    description: Configure synchronous/asynchronous replicas, synchronous_mode, synchronous_node_count and monitoring replication lag in the cluster.
    duration_minutes: 120
    is_free: true
    sort_order: 10
    video_url: null
  - id: 019c9617-fb80-70a6-9003-6e17ae121e1f
    title: 'Lesson 11: Patroni Callbacks'
    slug: bai-11-patroni-callbacks
    description: Create callback scripts (on_start, on_stop, on_role_change), write custom scripts for notifications and integrate with monitoring systems.
    duration_minutes: 285
    is_free: true
    sort_order: 11
    video_url: null
  - id: 019c9617-fb83-7047-bb91-e761d8b60d96
    title: 'Lesson 12: Patroni REST API'
    slug: bai-12-patroni-rest-api
    description: Use Patroni REST API endpoints, master patronictl commands and automate cluster management via CLI and API.
    duration_minutes: 265
    is_free: true
    sort_order: 12
    video_url: null
  - id: 019c9617-fb87-7086-95fc-6fd978990d86
    title: 'Lesson 13: Automatic Failover'
    slug: bai-13-automatic-failover
    description: Learn the error detection mechanism, leader election process, failover timeline and practice simulating primary node failure.
    duration_minutes: 160
    is_free: true
    sort_order: 13
    video_url: null
  - id: 019c9617-fb8b-7187-aede-cf5e97de1cd3
    title: 'Lesson 14: Planned Switchover'
    slug: bai-14-switchover-co-ke-hoach-planned-switchover
    description: Distinguishing between planned switchover and failover, when to switchover, zero-downtime maintenance and safe switchover practices.
    duration_minutes: 200
    is_free: true
    sort_order: 14
    video_url: null
  - id: 019c9617-fb8e-711e-a241-91e33cbbe469
    title: 'Lesson 15: Recovering failed nodes'
    slug: bai-15-recovering-failed-nodes
    description: Rejoin failed primary to cluster, using pg_rewind mechanism and rebuild replica from backup when necessary.
    duration_minutes: 210
    is_free: true
    sort_order: 15
    video_url: null
  - id: 019c9617-fb91-71b3-893f-1f4d0ad10625
    title: 'Lesson 16: Backup and Point-in-Time Recovery (PITR)'
    slug: bai-16-backup-va-point-in-time-recovery-pitr
    description: Using pg_basebackup, configure WAL archiving, continuous archiving and perform Point-in-Time Recovery (PITR).
    duration_minutes: 205
    is_free: true
    sort_order: 16
    video_url: null
  - id: 019c9617-fb94-7137-99fe-08685ac4ab93
    title: 'Lesson 17: Monitoring Patroni Cluster'
    slug: bai-17-monitoring-patroni-cluster
    description: Setup monitoring stack with Prometheus + Grafana, use postgres_exporter, configure alerting rules for HA cluster.
    duration_minutes: 175
    is_free: true
    sort_order: 17
    video_url: null
  - id: 019c9617-fb98-7319-877d-16408c323ce3
    title: 'Lesson 18: Performance Tuning'
    slug: bai-18-performance-tuning
    description: Optimize PostgreSQL configuration, implement connection pooling (PgBouncer), load balancing (HAProxy) and scaling read replicas.
    duration_minutes: 130
    is_free: true
    sort_order: 18
    video_url: null
  - id: 019c9617-fb9b-734d-b723-e97053646091
    title: 'Lesson 19: Logging and Troubleshooting'
    slug: bai-19-logging-va-troubleshooting
    description: Analyze PostgreSQL logs, Patroni logs, etcd logs, resolve common issues and effective debugging techniques.
    duration_minutes: 130
    is_free: true
    sort_order: 19
    video_url: null
  - id: 019c9617-fb9e-7077-950d-b4fa097ce8b1
    title: 'Lesson 20: Security Best Practices'
    slug: bai-20-security-best-practices
    description: Configure SSL/TLS, authentication methods, network security, encryption at rest, audit logging and hardening cluster security.
    duration_minutes: 110
    is_free: true
    sort_order: 20
    video_url: null
  - id: 019c9617-fba1-7128-b313-6412f33f40cf
    title: 'Lesson 21: Multi-datacenter Setup'
    slug: bai-21-multi-datacenter-setup
    description: Cross-DC replication strategy, asynchronous cascading replication, disaster planning recovery and geographic load balancing.
    duration_minutes: 135
    is_free: true
    sort_order: 21
    video_url: null
  - id: 019c9617-fba4-73b9-bb9a-c345301dc226
    title: 'Lesson 22: Patroni with Kubernetes'
    slug: bai-22-patroni-voi-kubernetes
    description: Deploy Patroni on Kubernetes with Patroni operator, StatefulSets, Persistent Volumes and Helm charts.
    duration_minutes: 155
    is_free: true
    sort_order: 22
    video_url: null
  - id: 019c9617-fba8-7143-940f-93cdbbdcd4a1
    title: 'Lesson 23: Patroni Configuration Management'
    slug: bai-23-patroni-configuration-management
    description: Dynamic configuration changes, DCS-based configuration, use patronictl edit-config and update config without downtime.
    duration_minutes: 110
    is_free: true
    sort_order: 23
    video_url: null
  - id: 019c9617-fbab-73c4-8dbe-d7e05b7e381a
    title: 'Lesson 24: Upgrade Strategies'
    slug: bai-24-upgrade-strategies
    description: Upgrade PostgreSQL major version, Patroni version, zero-downtime upgrade techniques, rollback procedures and lab upgrade PG 17 to 18.
    duration_minutes: 145
    is_free: true
    sort_order: 24
    video_url: null
  - id: 019c9617-fbae-719f-bd83-5b4c737bb570
    title: 'Lesson 25: Real-world Case Studies'
    slug: bai-25-real-world-case-studies
    description: Analyze actual production architecture, scaling strategies, cost optimization and lessons learned from real projects.
    duration_minutes: 130
    is_free: true
    sort_order: 25
    video_url: null
  - id: 019c9617-fbb2-70b7-a4db-23daa55ff807
    title: 'Lesson 26: Automation with Ansible'
    slug: bai-26-automation-voi-ansible
    description: Create Ansible playbooks for deployment, configuration management, automated testing, and CI/CD integration for PostgreSQL HA cluster.
    duration_minutes: 115
    is_free: true
    sort_order: 26
    video_url: null
  - id: 019c9617-fbb5-7070-ba8e-a4ee3baf3c1d
    title: 'Lesson 27: Disaster Recovery Drills'
    slug: bai-27-disaster-recovery-drills
    description: DR planning, testing procedures, incident response process, post-mortem analysis and full DR scenario simulation.
    duration_minutes: 110
    is_free: true
    sort_order: 27
    video_url: null
  - id: 019c9617-fbba-71f4-a5c3-d75c9087a96e
    title: 'Lesson 28: Architectural Design HA'
    slug: bai-28-thiet-ke-kien-truc-ha
    description: Collect requirements, design architectural design documents, capacity planning and estimate costs for the HA production system.
    duration_minutes: 160
    is_free: true
    sort_order: 28
    video_url: null
  - id: 019c9617-fbbd-7170-9eb6-c3c63e67172b
    title: 'Lesson 29: Deploy Production-ready Cluster'
    slug: bai-29-deploy-production-ready-cluster
    description: Completely deploy the cluster from scratch, create documentation, runbook, knowledge transfer and end-of-course assessment.
    duration_minutes: 185
    is_free: true
    sort_order: 29
    video_url: null
reviews: []
quizzes: []
locale: en
---
<p><strong>Lesson 1: Overview of PostgreSQL High Availability</strong></p><ul><li>Why HA?</li><li>HA Methods for PostgreSQL</li><li>Compare: Patroni vs Repmgr vs Pacemaker</li><li>System overview architecture</li></ul><p><strong>Lesson 2: Streaming Replication in PostgreSQL</strong></p><ul><li>Streaming Replication mechanism</li><li>WAL (Write-Ahead Logging)</li><li>Synchronous vs Asynchronous Replication</li><li>Replication Slots</li><li>Lab: Simple replication setup (Primary-Standby)</li></ul><p><strong>Lesson 3: Introducing Patroni and etcd</strong></p><ul><li>What is Patroni? How it works</li><li>DCS (Distributed Configuration Store) - etcd/Consul/ZooKeeper</li><li>Consensus algorithm (Raft)</li><li>Leader election &amp; Failover mechanism_</li><li>_Split-brain problem and how to solve_</li></ul><p><strong>Lesson 4: Prepare the infrastructure_</strong></p><ul><li>Part requirements hard &amp; software</li><li>Network and firewall configuration</li><li>Setup 3 VMs/Servers (VirtualBox/VMware/Cloud)</li><li>SSH key-based authentication</li><li>Time synchronization (NTP/chrony)</li></ul><p><strong>Lesson 5: Installing PostgreSQL_</strong></p><ul><li>Install PostgreSQL from package repository</li><li>Install from source (optional)</li><li>Basic postgresql.conf configuration</li><li>Understanding pg_hba.conf_</li><li>Lab: Installing PostgreSQL on 3 nodes</li></ul><p><strong>Lesson 6: Install and configure etcd cluster_</strong></p><ul><li>Download and install etcd_</li><li>Configuration etcd cluster 3 nodes</li><li>Create systemd service</li><li>Check health of etcd cluster_</li><li>etcdctl basic commands_</li><li>Lab: Setup etcd cluster completely edit</li></ul><p><strong>Lesson 7: Install Patroni</strong></p><ul><li>Install Python dependencies_</li><li>Install Patroni via pip_</li><li>Patroni.yml file structure</li><li>Create systemd service for Patroni_</li><li>Lab: Install Patroni on 3 nodes</li></ul><p><strong>Lesson 8: Configuring Patroni in detail</strong></p><ul><li>Analyze the patroni.yml file each time section</li><li>Bootstrap configuration</li><li>PostgreSQL parameters tuning</li><li>Authentication setup_</li><li>Tags and constraints_</li></ul><p><strong>Lesson 9: Bootstrap PostgreSQL Cluster_</strong></p><ul><li>Start Patroni times head</li><li>Automatic bootstrap process</li><li>Check cluster status with patronictl_</li><li>Troubleshooting common issues_</li><li>Lab: Bootstrap cluster into public</li></ul><p><strong>Lesson 10: Replication Management</strong></p><ul><li>Synchronous vs Asynchronous replicas</li><li>Configuring synchronous_mode</li><li>synchronous_node_count</li><li>Monitoring replication lag_</li><li>Lab: Synchronous configuration replication_</li></ul><p><strong>Lesson 11: Callback scripts and Hooks_</strong></p><ul><li>on_start, on_stop, on_role_change callbacks</li><li>Custom scripts for notifications</li><li>Integration with monitoring systems</li><li>Lab: Write script to send alert when failover</li></ul><p><strong>Lesson 12: REST API and patronictl_</strong></p><ul><li>Patroni REST API endpoints</li><li>Using patronictl commands</li><li>Automation with API</li><li>Lab: Cluster management via CLI and API</li></ul><h3 id="module-4-failover-recovery-4-b%C3%A0i"><strong>Module 4: Failover &amp; Recovery</strong> (4 lessons)</h3><p><strong>Lesson 13: Automatic Failover_</strong></p><ul><li>Detection mechanism error</li><li>Leader election process</li><li>Failover timeline</li><li>Testing automatic failover_</li><li>Lab: Simulate primary node failure</li></ul><p><strong>Lesson 14: Switchover with a plan</strong></p><ul><li>When needed switchover?</li><li>Planned switchover vs Failover</li><li>Zero-downtime maintenance</li><li>Lab: Implementation switchover_</li></ul><p><strong>Lesson 15: Recovering failed nodes_</strong></p><ul><li>Rejoin failed primary</li><li>pg_rewind mechanism</li><li>Rebuild replica from backup</li><li>Lab: Recovery scenarios</li></ul><p><strong>Lesson 16: Backup and Point-in-Time Recovery_</strong></p><ul><li>pg_basebackup</li><li>WAL archiving_</li><li>Continuous configuration archiving</li><li>PITR (Point-in-Time Recovery)</li><li>Lab: Restore database from backup</li></ul><p><strong>Lesson 17: Monitoring Patroni Cluster</strong></p><ul><li>Metrics to Track</li><li>Prometheus Integration + Grafana</li><li>postgres_exporter</li><li>Alerting rules</li><li>Lab: Setup monitoring stack</li></ul><p><strong>Lesson 18: Performance Tuning</strong></p><ul><li>PostgreSQL configuration tuning</li><li>Connection pooling (PgBouncer)</li><li>Load balancing (HAProxy/pgpool)</li><li>Read replicas scaling</li><li>Lab: Optimize cluster performance</li></ul><p><strong>Lesson 19: Logging and Troubleshooting</strong></p><ul><li>PostgreSQL logs</li><li>Patroni logs</li><li>etcd logs</li><li>Common issues and how to fix_</li><li>Debug techniques</li></ul><p><strong>Lesson 20: Security Best Practices</strong></p><ul><li>SSL/TLS configuration</li><li>Authentication methods</li><li>Network security</li><li>Encryption at rest</li><li>Audit logging</li><li>Lab: Hardening cluster security</li></ul><p><strong>Lesson 21: Multi-datacenter Setup</strong></p><ul><li>Cross-DC replication strategies</li><li>Asynchronous cascading replication_</li><li>Disaster recovery planning</li><li>Geographic load balancing</li></ul><p><strong>Lesson 22: Patroni with Kubernetes_</strong></p><ul><li>Patroni operator</li><li>StatefulSets_</li><li>Persistent Volumes_</li><li>Helm charts</li><li>Lab: Deploy on K8s_</li></ul><p><strong>Lesson 23: Patroni Configuration Management</strong></p><ul><li>Dynamic configuration changes</li><li>DCS-based configuration_</li><li>patronictl edit-config_</li><li>Config validation</li><li>Lab: Update config without downtime_</li></ul><p><strong>Lesson 24: Upgrade Strategies</strong></p><ul><li>PostgreSQL major version upgrade</li><li>Patroni version upgrade</li><li>Zero-downtime upgrade techniques</li><li>Rollback procedures</li><li>Lab: Upgrade cluster from PG 14 to 15</li></ul><p><strong>Lesson 25: Real-world Case Studies_</strong></p><ul><li>Production architecture examples</li><li>Scaling strategies_</li><li>Cost optimization</li><li>Lessons learned</li></ul><p><strong>Lesson 26: Automation with Ansible_</strong></p><ul><li>Ansible playbooks for deployment_</li><li>_Configuration management_</li><li>Automated testing</li><li>CI/CD integration</li><li>Lab: Automated deployment</li></ul><p><strong>Lesson 27: Disaster Recovery Drills_</strong></p><ul><li>DR planning_</li><li>Testing procedures_</li><li>Incident response</li><li>Post-mortem analysis</li><li>Lab: Full DR simulation</li></ul><p><strong>Lesson 28: Architectural design HA</strong></p><ul><li>Requirements gathering</li><li>Architecture design document</li><li>Capacity planning</li><li>Cost estimation</li></ul><p><strong>Lesson 29: Deploy Production-ready Cluster</strong></p><ul><li>Complete deployment from scratch</li><li>Documentation_</li><li>Runbook creation</li><li>Knowledge transfer</li><li>Final assessment</li></ul><hr><p><strong>Prerequisites:_</strong></p><ul><li>Linux version</li><li>PostgreSQL fundamentals</li><li>Networking basics</li><li>Shell scripting_</li></ul><p><strong>Section Objectives after the course:</strong></p><ul><li>Implement PostgreSQL HA cluster production-ready</li><li>Cluster management and operation_</li><li>Incident handling and troubleshooting</li><li>Optimize performance and security</li></ul>