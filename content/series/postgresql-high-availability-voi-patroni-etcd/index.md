---
id: 019c9617-fad7-7170-97f5-55c1940af2f5
title: PostgreSQL High Availability với Patroni & etcd
slug: postgresql-high-availability-voi-patroni-etcd
description: >-
  Học cách triển khai PostgreSQL High Availability cluster với Patroni và etcd.
  Khóa học thực hành từ A-Z: cài đặt, cấu hình, failover tự động, monitoring và
  vận hành production. 29 bài học + labs chi tiết.
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
  name: DUY TRAN
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-fac1-71f4-b665-ef72b9169543
  name: Database
  slug: database-course
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
    title: PostgreSQL High Availability với Patroni & etcd
    description: null
    sort_order: 0
    lessons:
      - id: 019c9617-fb5e-71a4-b3a1-a77a7c225818
        title: 'Bài 1: Tổng quan về PostgreSQL High Availability'
        slug: bai-1-tong-quan-ve-postgresql-high-availability
        description: >-
          Tìm hiểu lý do cần High Availability, so sánh các giải pháp HA phổ
          biến (Patroni, Repmgr, Pacemaker) và nắm vững kiến trúc tổng quan của
          hệ thống PostgreSQL HA.
        duration_minutes: 110
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9617-fb63-72fe-8fb4-4839e41ca6b5
        title: 'Bài 2: Streaming Replication trong PostgreSQL'
        slug: bai-2-streaming-replication-trong-postgresql
        description: >-
          Khám phá cơ chế Streaming Replication, WAL logging, sự khác biệt
          Synchronous/Asynchronous replication và thực hành setup
          Primary-Standby cơ bản.
        duration_minutes: 190
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019c9617-fb66-7039-b71b-ae1b85a72eee
        title: 'Bài 3: Giới thiệu Patroni và etcd'
        slug: bai-3-gioi-thieu-patroni-va-etcd
        description: >-
          Hiểu rõ Patroni hoạt động thế nào, vai trò của DCS
          (etcd/Consul/ZooKeeper), thuật toán Raft consensus và cơ chế tự động
          leader election.
        duration_minutes: 160
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9617-fb6a-71b8-aea5-33a8de9b9d29
        title: 'Bài 4: Chuẩn bị hạ tầng'
        slug: bai-4-chuan-bi-ha-tang
        description: >-
          Hướng dẫn chi tiết yêu cầu phần cứng, cấu hình network/firewall, setup
          3 VMs/Servers và đồng bộ thời gian cho cluster HA.
        duration_minutes: 145
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9617-fb6d-73ff-ab92-84838b979806
        title: 'Bài 5: Cài đặt PostgreSQL'
        slug: bai-5-cai-dat-postgresql
        description: >-
          Cài đặt PostgreSQL từ package repository hoặc source, cấu hình
          postgresql.conf và pg_hba.conf trên cả 3 nodes trong cluster.
        duration_minutes: 110
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019c9617-fb71-7108-9898-0733dd6d13bf
        title: 'Bài 6: Cài đặt và cấu hình etcd cluster'
        slug: bai-6-cai-dat-va-cau-hinh-etcd-cluster
        description: >-
          Download, cài đặt và cấu hình etcd cluster 3 nodes, tạo systemd
          service và kiểm tra health với etcdctl commands.
        duration_minutes: 160
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9617-fb74-7100-9272-7839bac3bdac
        title: 'Bài 7: Cài đặt Patroni'
        slug: bai-7-cai-dat-patroni
        description: >-
          Cài đặt Python dependencies, setup Patroni qua pip, phân tích cấu trúc
          patroni.yml và tạo systemd service trên 3 nodes.
        duration_minutes: 165
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9617-fb77-71c7-a375-ddb3553fc7a4
        title: 'Bài 8: Cấu hình Patroni chi tiết'
        slug: bai-8-cau-hinh-patroni-chi-tiet
        description: >-
          Phân tích sâu file patroni.yml từng section: bootstrap, PostgreSQL
          parameters, authentication, tags và constraints cho cluster.
        duration_minutes: 155
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9617-fb7a-7138-be78-f6d8b1653656
        title: 'Bài 9: Bootstrap PostgreSQL Cluster'
        slug: bai-9-bootstrap-postgresql-cluster
        description: ' Khởi động Patroni lần đầu, theo dõi quá trình bootstrap tự động, kiểm tra status với patronictl và troubleshooting các vấn đề thường gặp.'
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c9617-fb7c-727d-a01d-896b5d138e2f
        title: 'Bài 10: Quản lý Replication'
        slug: bai-10-quan-ly-replication
        description: >-
          Cấu hình synchronous/asynchronous replicas, synchronous_mode,
          synchronous_node_count và monitoring replication lag trong cluster.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9617-fb80-70a6-9003-6e17ae121e1f
        title: 'Bài 11: Patroni Callbacks'
        slug: bai-11-patroni-callbacks
        description: >-
          Tạo callback scripts (on_start, on_stop, on_role_change), viết custom
          scripts cho notifications và tích hợp với monitoring systems.
        duration_minutes: 285
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9617-fb83-7047-bb91-e761d8b60d96
        title: 'Bài 12: Patroni REST API'
        slug: bai-12-patroni-rest-api
        description: >-
          Sử dụng Patroni REST API endpoints, làm chủ patronictl commands và
          automation quản lý cluster qua CLI và API.
        duration_minutes: 265
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9617-fb87-7086-95fc-6fd978990d86
        title: 'Bài 13: Automatic Failover'
        slug: bai-13-automatic-failover
        description: >-
          Tìm hiểu cơ chế phát hiện lỗi, quá trình leader election, failover
          timeline và thực hành mô phỏng primary node failure.
        duration_minutes: 160
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019c9617-fb8b-7187-aede-cf5e97de1cd3
        title: 'Bài 14: Switchover có kế hoạch (Planned Switchover)'
        slug: bai-14-switchover-co-ke-hoach-planned-switchover
        description: >-
          Phân biệt planned switchover và failover, khi nào cần switchover,
          zero-downtime maintenance và thực hành switchover an toàn.
        duration_minutes: 200
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c9617-fb8e-711e-a241-91e33cbbe469
        title: 'Bài 15: Recovering failed nodes'
        slug: bai-15-recovering-failed-nodes
        description: >-
          Rejoin failed primary vào cluster, sử dụng pg_rewind mechanism và
          rebuild replica từ backup khi cần thiết.
        duration_minutes: 210
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019c9617-fb91-71b3-893f-1f4d0ad10625
        title: 'Bài 16: Backup và Point-in-Time Recovery (PITR)'
        slug: bai-16-backup-va-point-in-time-recovery-pitr
        description: >-
          Sử dụng pg_basebackup, cấu hình WAL archiving, continuous archiving và
          thực hiện Point-in-Time Recovery (PITR).
        duration_minutes: 205
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019c9617-fb94-7137-99fe-08685ac4ab93
        title: 'Bài 17: Monitoring Patroni Cluster'
        slug: bai-17-monitoring-patroni-cluster
        description: >-
          Setup monitoring stack với Prometheus + Grafana, sử dụng
          postgres_exporter, cấu hình alerting rules cho cluster HA.
        duration_minutes: 175
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019c9617-fb98-7319-877d-16408c323ce3
        title: 'Bài 18: Performance Tuning'
        slug: bai-18-performance-tuning
        description: >-
          Tối ưu PostgreSQL configuration, triển khai connection pooling
          (PgBouncer), load balancing (HAProxy) và scaling read replicas.
        duration_minutes: 130
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019c9617-fb9b-734d-b723-e97053646091
        title: 'Bài 19: Logging và Troubleshooting'
        slug: bai-19-logging-va-troubleshooting
        description: >-
          Phân tích PostgreSQL logs, Patroni logs, etcd logs, giải quyết common
          issues và các kỹ thuật debug hiệu quả.
        duration_minutes: 130
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019c9617-fb9e-7077-950d-b4fa097ce8b1
        title: 'Bài 20: Security Best Practices'
        slug: bai-20-security-best-practices
        description: >-
          Cấu hình SSL/TLS, authentication methods, network security, encryption
          at rest, audit logging và hardening cluster security.
        duration_minutes: 110
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019c9617-fba1-7128-b313-6412f33f40cf
        title: 'Bài 21: Multi-datacenter Setup'
        slug: bai-21-multi-datacenter-setup
        description: ' Chiến lược replication cross-DC, asynchronous cascading replication, disaster recovery planning và geographic load balancing.'
        duration_minutes: 135
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019c9617-fba4-73b9-bb9a-c345301dc226
        title: 'Bài 22: Patroni với Kubernetes'
        slug: bai-22-patroni-voi-kubernetes
        description: >-
          Deploy Patroni trên Kubernetes với Patroni operator, StatefulSets,
          Persistent Volumes và Helm charts.
        duration_minutes: 155
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019c9617-fba8-7143-940f-93cdbbdcd4a1
        title: 'Bài 23: Patroni Configuration Management'
        slug: bai-23-patroni-configuration-management
        description: >-
          Dynamic configuration changes, DCS-based configuration, sử dụng
          patronictl edit-config và update config không downtime.
        duration_minutes: 110
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019c9617-fbab-73c4-8dbe-d7e05b7e381a
        title: 'Bài 24: Upgrade Strategies'
        slug: bai-24-upgrade-strategies
        description: >-
          Upgrade PostgreSQL major version, Patroni version, zero-downtime
          upgrade techniques, rollback procedures và lab upgrade PG 17 lên 18.
        duration_minutes: 145
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019c9617-fbae-719f-bd83-5b4c737bb570
        title: 'Bài 25: Real-world Case Studies'
        slug: bai-25-real-world-case-studies
        description: >-
          Phân tích production architecture thực tế, chiến lược scaling, tối ưu
          chi phí và bài học kinh nghiệm từ các dự án thực tế.
        duration_minutes: 130
        is_free: true
        sort_order: 25
        video_url: null
      - id: 019c9617-fbb2-70b7-a4db-23daa55ff807
        title: 'Bài 26: Automation với Ansible'
        slug: bai-26-automation-voi-ansible
        description: >-
          Tạo Ansible playbooks cho deployment, configuration management,
          automated testing và tích hợp CI/CD cho PostgreSQL HA cluster.
        duration_minutes: 115
        is_free: true
        sort_order: 26
        video_url: null
      - id: 019c9617-fbb5-7070-ba8e-a4ee3baf3c1d
        title: 'Bài 27: Disaster Recovery Drills'
        slug: bai-27-disaster-recovery-drills
        description: >-
          Lập kế hoạch DR, testing procedures, quy trình incident response,
          post-mortem analysis và mô phỏng full DR scenario.
        duration_minutes: 110
        is_free: true
        sort_order: 27
        video_url: null
      - id: 019c9617-fbba-71f4-a5c3-d75c9087a96e
        title: 'Bài 28: Thiết Kế Kiến Trúc HA'
        slug: bai-28-thiet-ke-kien-truc-ha
        description: >-
          Thu thập requirements, thiết kế architecture design document, capacity
          planning và ước tính chi phí cho hệ thống HA production.
        duration_minutes: 160
        is_free: true
        sort_order: 28
        video_url: null
      - id: 019c9617-fbbd-7170-9eb6-c3c63e67172b
        title: 'Bài 29: Deploy Production-ready Cluster'
        slug: bai-29-deploy-production-ready-cluster
        description: >-
          Triển khai hoàn chỉnh cluster từ đầu, tạo documentation, runbook,
          knowledge transfer và đánh giá cuối khóa học.
        duration_minutes: 185
        is_free: true
        sort_order: 29
        video_url: null
reviews: []
quizzes: []
---
<p><strong>Bài 1: Tổng quan về PostgreSQL High Availability</strong></p><ul><li>Tại sao cần HA?</li><li>Các phương pháp HA cho PostgreSQL</li><li>So sánh: Patroni vs Repmgr vs Pacemaker</li><li>Kiến trúc tổng quan hệ thống</li></ul><p><strong>Bài 2: Streaming Replication trong PostgreSQL</strong></p><ul><li>Cơ chế hoạt động của Streaming Replication</li><li>WAL (Write-Ahead Logging)</li><li>Synchronous vs Asynchronous Replication</li><li>Replication Slots</li><li>Lab: Setup replication đơn giản (Primary-Standby)</li></ul><p><strong>Bài 3: Giới thiệu Patroni và etcd</strong></p><ul><li>Patroni là gì? Cách hoạt động</li><li>DCS (Distributed Configuration Store) - etcd/Consul/ZooKeeper</li><li>Consensus algorithm (Raft)</li><li>Leader election &amp; Failover mechanism</li><li>Split-brain problem và cách giải quyết</li></ul><p><strong>Bài 4: Chuẩn bị hạ tầng</strong></p><ul><li>Yêu cầu phần cứng &amp; phần mềm</li><li>Cấu hình network và firewall</li><li>Setup 3 VMs/Servers (VirtualBox/VMware/Cloud)</li><li>SSH key-based authentication</li><li>Time synchronization (NTP/chrony)</li></ul><p><strong>Bài 5: Cài đặt PostgreSQL</strong></p><ul><li>Cài PostgreSQL từ package repository</li><li>Cài từ source (optional)</li><li>Cấu hình postgresql.conf cơ bản</li><li>Hiểu về pg_hba.conf</li><li>Lab: Cài đặt PostgreSQL trên 3 nodes</li></ul><p><strong>Bài 6: Cài đặt và cấu hình etcd cluster</strong></p><ul><li>Download và cài đặt etcd</li><li>Cấu hình etcd cluster 3 nodes</li><li>Tạo systemd service</li><li>Kiểm tra health của etcd cluster</li><li>etcdctl commands cơ bản</li><li>Lab: Setup etcd cluster hoàn chỉnh</li></ul><p><strong>Bài 7: Cài đặt Patroni</strong></p><ul><li>Cài đặt Python dependencies</li><li>Cài đặt Patroni qua pip</li><li>Cấu trúc file patroni.yml</li><li>Tạo systemd service cho Patroni</li><li>Lab: Cài Patroni trên 3 nodes</li></ul><p><strong>Bài 8: Cấu hình Patroni chi tiết</strong></p><ul><li>Phân tích file patroni.yml từng section</li><li>Bootstrap configuration</li><li>PostgreSQL parameters tuning</li><li>Authentication setup</li><li>Tags và constraints</li></ul><p><strong>Bài 9: Bootstrap PostgreSQL Cluster</strong></p><ul><li>Khởi động Patroni lần đầu</li><li>Quá trình bootstrap tự động</li><li>Kiểm tra cluster status với patronictl</li><li>Troubleshooting common issues</li><li>Lab: Bootstrap cluster thành công</li></ul><p><strong>Bài 10: Quản lý Replication</strong></p><ul><li>Synchronous vs Asynchronous replicas</li><li>Cấu hình synchronous_mode</li><li>synchronous_node_count</li><li>Monitoring replication lag</li><li>Lab: Cấu hình sync replication</li></ul><p><strong>Bài 11: Callback scripts và Hooks</strong></p><ul><li>on_start, on_stop, on_role_change callbacks</li><li>Custom scripts cho notifications</li><li>Tích hợp với monitoring systems</li><li>Lab: Viết script gửi alert khi failover</li></ul><p><strong>Bài 12: REST API và patronictl</strong></p><ul><li>Patroni REST API endpoints</li><li>Sử dụng patronictl commands</li><li>Automation với API</li><li>Lab: Quản lý cluster qua CLI và API</li></ul><h3 id="module-4-failover-recovery-4-b%C3%A0i"><strong>Module 4: Failover &amp; Recovery</strong> (4 bài)</h3><p><strong>Bài 13: Automatic Failover</strong></p><ul><li>Cơ chế phát hiện lỗi</li><li>Leader election process</li><li>Failover timeline</li><li>Testing automatic failover</li><li>Lab: Mô phỏng primary node failure</li></ul><p><strong>Bài 14: Switchover có kế hoạch</strong></p><ul><li>Khi nào cần switchover?</li><li>Planned switchover vs Failover</li><li>Zero-downtime maintenance</li><li>Lab: Thực hiện switchover</li></ul><p><strong>Bài 15: Recovering failed nodes</strong></p><ul><li>Rejoin failed primary</li><li>pg_rewind mechanism</li><li>Rebuild replica từ backup</li><li>Lab: Recovery scenarios</li></ul><p><strong>Bài 16: Backup và Point-in-Time Recovery</strong></p><ul><li>pg_basebackup</li><li>WAL archiving</li><li>Cấu hình continuous archiving</li><li>PITR (Point-in-Time Recovery)</li><li>Lab: Restore database từ backup</li></ul><p><strong>Bài 17: Monitoring Patroni Cluster</strong></p><ul><li>Metrics cần theo dõi</li><li>Tích hợp Prometheus + Grafana</li><li>postgres_exporter</li><li>Alerting rules</li><li>Lab: Setup monitoring stack</li></ul><p><strong>Bài 18: Performance Tuning</strong></p><ul><li>PostgreSQL configuration tuning</li><li>Connection pooling (PgBouncer)</li><li>Load balancing (HAProxy/pgpool)</li><li>Read replicas scaling</li><li>Lab: Optimize cluster performance</li></ul><p><strong>Bài 19: Logging và Troubleshooting</strong></p><ul><li>PostgreSQL logs</li><li>Patroni logs</li><li>etcd logs</li><li>Common issues và cách fix</li><li>Debug techniques</li></ul><p><strong>Bài 20: Security Best Practices</strong></p><ul><li>SSL/TLS configuration</li><li>Authentication methods</li><li>Network security</li><li>Encryption at rest</li><li>Audit logging</li><li>Lab: Hardening cluster security</li></ul><p><strong>Bài 21: Multi-datacenter Setup</strong></p><ul><li>Cross-DC replication strategies</li><li>Asynchronous cascading replication</li><li>Disaster recovery planning</li><li>Geographic load balancing</li></ul><p><strong>Bài 22: Patroni với Kubernetes</strong></p><ul><li>Patroni operator</li><li>StatefulSets</li><li>Persistent Volumes</li><li>Helm charts</li><li>Lab: Deploy trên K8s</li></ul><p><strong>Bài 23: Patroni Configuration Management</strong></p><ul><li>Dynamic configuration changes</li><li>DCS-based configuration</li><li>patronictl edit-config</li><li>Config validation</li><li>Lab: Update config without downtime</li></ul><p><strong>Bài 24: Upgrade Strategies</strong></p><ul><li>PostgreSQL major version upgrade</li><li>Patroni version upgrade</li><li>Zero-downtime upgrade techniques</li><li>Rollback procedures</li><li>Lab: Upgrade cluster từ PG 14 lên 15</li></ul><p><strong>Bài 25: Real-world Case Studies</strong></p><ul><li>Production architecture examples</li><li>Scaling strategies</li><li>Cost optimization</li><li>Lessons learned</li></ul><p><strong>Bài 26: Automation với Ansible</strong></p><ul><li>Ansible playbooks cho deployment</li><li>Configuration management</li><li>Automated testing</li><li>CI/CD integration</li><li>Lab: Automated deployment</li></ul><p><strong>Bài 27: Disaster Recovery Drills</strong></p><ul><li>DR planning</li><li>Testing procedures</li><li>Incident response</li><li>Post-mortem analysis</li><li>Lab: Full DR simulation</li></ul><p><strong>Bài 28: Thiết kế kiến trúc HA</strong></p><ul><li>Requirements gathering</li><li>Architecture design document</li><li>Capacity planning</li><li>Cost estimation</li></ul><p><strong>Bài 29: Deploy Production-ready Cluster</strong></p><ul><li>Complete deployment từ đầu</li><li>Documentation</li><li>Runbook creation</li><li>Knowledge transfer</li><li>Final assessment</li></ul><hr><p><strong>Prerequisites:</strong></p><ul><li>Linux cơ bản</li><li>PostgreSQL fundamentals</li><li>Networking basics</li><li>Shell scripting</li></ul><p><strong>Mục tiêu sau khóa học:</strong></p><ul><li>Triển khai PostgreSQL HA cluster production-ready</li><li>Quản lý và vận hành cluster</li><li>Xử lý incidents và troubleshooting</li><li>Optimize performance và security</li></ul>
