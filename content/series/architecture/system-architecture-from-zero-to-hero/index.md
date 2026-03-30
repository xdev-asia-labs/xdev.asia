---
id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
title: 'System Architecture: From Zero to Hero'
slug: system-architecture-from-zero-to-hero
description: >-
  Khóa học Kiến Trúc Hệ Thống toàn diện từ cơ bản đến nâng cao, giúp bạn làm chủ
  cách thiết kế hệ thống quy mô lớn (large-scale systems). Bao gồm các kiến thức
  nền tảng về Scalability, Availability, Consistency, các architectural patterns
  như Microservices, Event-Driven, CQRS, cùng với các thành phần hạ tầng như
  Load Balancer, CDN, Caching, Message Queues, Database Scaling. Khóa học kết hợp
  lý thuyết với case studies thực tế từ Netflix, Uber, Twitter và các hệ thống
  lớn khác. Cập nhật theo xu hướng kiến trúc hiện đại 2026.
featured_image: uploads/2026/03/system-architecture-series-banner-2026.png
level: intermediate
duration_hours: 80
lesson_count: 30
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-30T10:00:00.000000Z'
created_at: '2026-03-30T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019d8a21-b200-7001-c001-a1b2c3d4e5f6
  name: Kiến trúc hệ thống
  slug: kien-truc-he-thong
tags:
  - name: SystemDesign
    slug: system-design
  - name: Architecture
    slug: architecture
  - name: Microservices
    slug: microservices
  - name: DistributedSystems
    slug: distributed-systems
  - name: Scalability
    slug: scalability
  - name: HighAvailability
    slug: high-availability
  - name: LoadBalancer
    slug: loadbalancer
  - name: Caching
    slug: caching
  - name: Database
    slug: database
  - name: MessageQueue
    slug: message-queue
  - name: EventDriven
    slug: event-driven
  - name: CQRS
    slug: cqrs
  - name: CDN
    slug: cdn
  - name: API
    slug: api
  - name: cloud-native
    slug: cloud-native
  - name: security
    slug: security
  - name: monitoring
    slug: monitoring
  - name: production
    slug: production
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 'Phần 1: Nền Tảng System Design'
    description: 'Hiểu các khái niệm cốt lõi và cách tiếp cận bài toán thiết kế hệ thống'
    sort_order: 1
    lessons:
      - id: 019d8a21-c101-7001-d001-e1f2a3b4c501
        title: 'Bài 1: System Design là gì? - Tổng quan và Roadmap'
        slug: bai-1-system-design-la-gi-tong-quan-va-roadmap
        description: >-
          Giới thiệu System Design, tại sao cần thiết kế hệ thống, cách tiếp
          cận một bài toán system design (requirements → high-level design →
          deep dive → bottlenecks). So sánh Monolith vs Distributed Systems.
          Roadmap học tập và các tài nguyên cần thiết.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c102-7001-d001-e1f2a3b4c502
        title: 'Bài 2: Performance vs Scalability - Vertical & Horizontal Scaling'
        slug: bai-2-performance-vs-scalability-vertical-horizontal-scaling
        description: >-
          Phân biệt Performance và Scalability. Vertical Scaling (Scale Up)
          vs Horizontal Scaling (Scale Out). Stateless vs Stateful architecture.
          Khi nào chọn scaling strategy nào. Back-of-the-envelope calculations
          và capacity planning cơ bản.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c103-7001-d001-e1f2a3b4c503
        title: 'Bài 3: Latency vs Throughput và Availability vs Consistency'
        slug: bai-3-latency-vs-throughput-availability-vs-consistency
        description: >-
          Latency, Throughput và mối quan hệ giữa chúng. CAP Theorem
          (Consistency, Availability, Partition Tolerance). CP vs AP systems.
          Consistency Patterns (Strong, Eventual, Weak). Availability Patterns
          (Failover, Replication). Availability in numbers (99.9%, 99.99%).
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8a21-c104-7001-d001-e1f2a3b4c504
        title: 'Bài 4: Networking Fundamentals cho System Design'
        slug: bai-4-networking-fundamentals-cho-system-design
        description: >-
          DNS và cách hoạt động. TCP vs UDP. HTTP/HTTPS, HTTP/2, HTTP/3.
          WebSocket và Server-Sent Events. REST vs RPC vs GraphQL.
          Latency numbers every programmer should know.
        duration_minutes: 130
        is_free: true
        sort_order: 4
        video_url: null

  - id: section-02
    title: 'Phần 2: Các Thành Phần Hạ Tầng (Infrastructure Components)'
    description: 'Hiểu sâu về các building blocks quan trọng nhất trong kiến trúc hệ thống'
    sort_order: 2
    lessons:
      - id: 019d8a21-c105-7001-d001-e1f2a3b4c505
        title: 'Bài 5: Load Balancer - Phân phối tải thông minh'
        slug: bai-5-load-balancer-phan-phoi-tai-thong-minh
        description: >-
          Load Balancer là gì và tại sao cần thiết. Layer 4 vs Layer 7 Load
          Balancing. Các thuật toán: Round Robin, Least Connections, IP Hash,
          Weighted. Reverse Proxy vs Load Balancer. Health Checks. Active-Active
          vs Active-Passive. Hands-on với HAProxy và Nginx.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c106-7001-d001-e1f2a3b4c506
        title: 'Bài 6: CDN (Content Delivery Network) - Tăng tốc toàn cầu'
        slug: bai-6-cdn-content-delivery-network-tang-toc-toan-cau
        description: >-
          CDN là gì và cách hoạt động. Push CDN vs Pull CDN. Cache Invalidation
          strategies. Multi-tier CDN architecture. Edge Computing.
          So sánh CloudFlare, AWS CloudFront, Fastly. Use cases và anti-patterns.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c107-7001-d001-e1f2a3b4c507
        title: 'Bài 7: Caching Strategies - Tối ưu hiệu năng với Cache'
        slug: bai-7-caching-strategies-toi-uu-hieu-nang-voi-cache
        description: >-
          Các tầng caching: Client, CDN, Web Server, Application, Database.
          Cache Patterns: Cache-Aside, Write-Through, Write-Behind, Refresh-Ahead.
          Cache Eviction Policies (LRU, LFU, TTL). Redis vs Memcached.
          Cache Stampede, Thundering Herd và cách xử lý. Distributed Caching.
        duration_minutes: 180
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8a21-c108-7001-d001-e1f2a3b4c508
        title: 'Bài 8: Reverse Proxy và API Gateway'
        slug: bai-8-reverse-proxy-va-api-gateway
        description: >-
          Reverse Proxy: SSL Termination, Compression, Security. API Gateway
          Pattern: routing, authentication, rate limiting, throttling.
          So sánh Nginx, Envoy, Kong, AWS API Gateway. Service Mesh concepts
          (Istio, Linkerd). BFF (Backend for Frontend) pattern.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null

  - id: section-03
    title: 'Phần 3: Database Architecture & Data Management'
    description: 'Thiết kế và mở rộng database cho hệ thống quy mô lớn'
    sort_order: 3
    lessons:
      - id: 019d8a21-c109-7001-d001-e1f2a3b4c509
        title: 'Bài 9: SQL vs NoSQL - Chọn Database phù hợp'
        slug: bai-9-sql-vs-nosql-chon-database-phu-hop
        description: >-
          RDBMS và ACID properties. NoSQL categories: Key-Value (Redis, DynamoDB),
          Document (MongoDB, CouchDB), Wide Column (Cassandra, HBase),
          Graph (Neo4j). BASE vs ACID. Khi nào chọn SQL, khi nào chọn NoSQL.
          Polyglot Persistence. NewSQL (CockroachDB, TiDB).
        duration_minutes: 160
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c110-7001-d001-e1f2a3b4c510
        title: 'Bài 10: Database Replication - Master-Slave & Master-Master'
        slug: bai-10-database-replication-master-slave-master-master
        description: >-
          Replication là gì và tại sao cần. Synchronous vs Asynchronous
          Replication. Master-Slave: read replicas, failover, promotion.
          Master-Master: conflict resolution, split-brain. Replication Lag
          và cách xử lý. Hands-on với PostgreSQL Streaming Replication.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-c111-7001-d001-e1f2a3b4c511
        title: 'Bài 11: Database Sharding & Partitioning'
        slug: bai-11-database-sharding-partitioning
        description: >-
          Sharding strategies: Hash-based, Range-based, Geographic, Directory-based.
          Consistent Hashing. Shard key selection. Cross-shard queries và joins.
          Rebalancing shards. Federation (Functional Partitioning).
          Denormalization trade-offs. Real cases: Instagram, Pinterest.
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-c112-7001-d001-e1f2a3b4c512
        title: 'Bài 12: Data Storage Patterns - Object Storage, Data Lake, Time-Series'
        slug: bai-12-data-storage-patterns-object-storage-data-lake-time-series
        description: >-
          Object Storage (S3, MinIO). Data Lake vs Data Warehouse.
          Time-Series Databases (InfluxDB, TimescaleDB). Search Engines
          (Elasticsearch). Blob Storage patterns. Data Lifecycle Management.
          Hot/Warm/Cold storage tiers.
        duration_minutes: 140
        is_free: true
        sort_order: 12
        video_url: null

  - id: section-04
    title: 'Phần 4: Asynchronous Processing & Communication'
    description: 'Message Queues, Event-Driven Architecture và các patterns xử lý bất đồng bộ'
    sort_order: 4
    lessons:
      - id: 019d8a21-c113-7001-d001-e1f2a3b4c513
        title: 'Bài 13: Message Queues & Task Queues'
        slug: bai-13-message-queues-task-queues
        description: >-
          Message Queue là gì, khi nào cần dùng. Point-to-Point vs Pub/Sub models.
          So sánh RabbitMQ, Apache Kafka, AWS SQS, Redis Streams.
          Task Queues (Celery, Sidekiq). Dead Letter Queues. Back Pressure
          và Flow Control. Idempotency và Exactly-Once processing.
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-c114-7001-d001-e1f2a3b4c514
        title: 'Bài 14: Event-Driven Architecture (EDA)'
        slug: bai-14-event-driven-architecture
        description: >-
          Event-Driven Architecture patterns. Event Sourcing. CQRS
          (Command Query Responsibility Segregation). Event Store design.
          Saga Pattern cho distributed transactions. Choreography vs Orchestration.
          Apache Kafka deep dive. Real cases: banking, e-commerce order processing.
        duration_minutes: 200
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-c115-7001-d001-e1f2a3b4c515
        title: 'Bài 15: Stream Processing & Real-time Data Pipelines'
        slug: bai-15-stream-processing-real-time-data-pipelines
        description: >-
          Batch Processing vs Stream Processing. Apache Kafka Streams.
          Apache Flink, Spark Streaming. Real-time analytics pipeline design.
          Change Data Capture (CDC) với Debezium. Lambda Architecture vs
          Kappa Architecture. Real cases: fraud detection, live dashboards.
        duration_minutes: 160
        is_free: true
        sort_order: 15
        video_url: null

  - id: section-05
    title: 'Phần 5: Architectural Patterns'
    description: 'Các mô hình kiến trúc phổ biến và cách áp dụng trong thực tế'
    sort_order: 5
    lessons:
      - id: 019d8a21-c116-7001-d001-e1f2a3b4c516
        title: 'Bài 16: Monolith to Microservices - Chiến lược chuyển đổi'
        slug: bai-16-monolith-to-microservices-chien-luoc-chuyen-doi
        description: >-
          Monolithic Architecture: ưu nhược điểm. Microservices Architecture:
          principles, benefits, challenges. Strangler Fig Pattern.
          Service Decomposition strategies (by business capability, by subdomain).
          Database per Service. API Composition. Shared Libraries vs Shared Nothing.
        duration_minutes: 180
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-c117-7001-d001-e1f2a3b4c517
        title: 'Bài 17: Service Communication Patterns'
        slug: bai-17-service-communication-patterns
        description: >-
          Synchronous Communication: REST, gRPC, GraphQL. Asynchronous
          Communication: Message Queues, Events. Service Discovery (Consul, Etcd).
          Circuit Breaker Pattern (Resilience4j). Retry, Timeout, Bulkhead patterns.
          Sidecar Pattern. API Versioning strategies.
        duration_minutes: 170
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-c118-7001-d001-e1f2a3b4c518
        title: 'Bài 18: Domain-Driven Design (DDD) cho System Architecture'
        slug: bai-18-domain-driven-design-cho-system-architecture
        description: >-
          DDD Strategic Patterns: Bounded Context, Ubiquitous Language,
          Context Mapping. DDD Tactical Patterns: Aggregates, Entities,
          Value Objects, Domain Events, Repositories. Anti-Corruption Layer.
          Áp dụng DDD để decompose microservices. Event Storming workshop.
        duration_minutes: 190
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-c119-7001-d001-e1f2a3b4c519
        title: 'Bài 19: Serverless & Cloud-Native Architecture'
        slug: bai-19-serverless-cloud-native-architecture
        description: >-
          Serverless Architecture: AWS Lambda, Google Cloud Functions.
          FaaS (Function as a Service) patterns. 12-Factor App methodology.
          Cloud-Native principles. Container Orchestration overview.
          Platform Engineering. Khi nào Serverless, khi nào Containers.
          Cost optimization strategies.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null

  - id: section-06
    title: 'Phần 6: Reliability, Security & Observability'
    description: 'Đảm bảo hệ thống production reliable, secure và observable'
    sort_order: 6
    lessons:
      - id: 019d8a21-c120-7001-d001-e1f2a3b4c520
        title: 'Bài 20: High Availability & Fault Tolerance'
        slug: bai-20-high-availability-fault-tolerance
        description: >-
          Designing for Failure. Redundancy strategies. Active-Active vs
          Active-Passive HA. Health Checks và Self-Healing. Graceful Degradation.
          Feature Flags. Blue-Green Deployment vs Canary. Zero-Downtime
          Deployment. Chaos Engineering basics (Netflix Chaos Monkey).
        duration_minutes: 180
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-c121-7001-d001-e1f2a3b4c521
        title: 'Bài 21: Disaster Recovery & Multi-Region Architecture'
        slug: bai-21-disaster-recovery-multi-region-architecture
        description: >-
          RPO (Recovery Point Objective) và RTO (Recovery Time Objective).
          DR strategies: Backup & Restore, Pilot Light, Warm Standby,
          Multi-Site Active-Active. Cross-region replication. Global Load
          Balancing. Data consistency across regions. DR testing và runbooks.
        duration_minutes: 170
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a21-c122-7001-d001-e1f2a3b4c522
        title: 'Bài 22: Security Architecture - Defense in Depth'
        slug: bai-22-security-architecture-defense-in-depth
        description: >-
          Security Architecture principles. Authentication: OAuth 2.0, OIDC,
          JWT, mTLS. Authorization: RBAC, ABAC, ReBAC. API Security:
          Rate Limiting, Input Validation, CORS. Network Security: VPC,
          Firewalls, WAF. Data Encryption at rest và in transit.
          Zero Trust Architecture. Secrets Management (Vault).
        duration_minutes: 190
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c123-7001-d001-e1f2a3b4c523
        title: 'Bài 23: Observability - Monitoring, Logging & Tracing'
        slug: bai-23-observability-monitoring-logging-tracing
        description: >-
          Three Pillars of Observability: Metrics, Logs, Traces. Monitoring
          với Prometheus + Grafana. Centralized Logging với ELK/Loki.
          Distributed Tracing với Jaeger/Tempo. OpenTelemetry standard.
          Alerting strategies. SLI, SLO, SLA definitions. Error Budgets.
          Runbooks và Incident Response.
        duration_minutes: 180
        is_free: true
        sort_order: 23
        video_url: null

  - id: section-07
    title: 'Phần 7: System Design Case Studies'
    description: 'Thiết kế hệ thống thực tế từ các bài toán nổi tiếng - học từ Netflix, Uber, Twitter'
    sort_order: 7
    lessons:
      - id: 019d8a21-c124-7001-d001-e1f2a3b4c524
        title: 'Bài 24: Thiết kế URL Shortener (như Bit.ly)'
        slug: bai-24-thiet-ke-url-shortener-nhu-bitly
        description: >-
          Functional & Non-functional requirements. High-level design.
          URL encoding: Base62, MD5 hash. Database schema design.
          Read-heavy optimization. Cache strategy. Analytics tracking.
          Rate limiting. Capacity estimation (100M URLs/day).
        duration_minutes: 150
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c125-7001-d001-e1f2a3b4c525
        title: 'Bài 25: Thiết kế Chat System (như WhatsApp/Slack)'
        slug: bai-25-thiet-ke-chat-system-nhu-whatsapp-slack
        description: >-
          1-1 chat và Group chat architecture. WebSocket connections management.
          Message delivery guarantees. Read receipts. Online/Offline status.
          Push Notifications. Media storage. End-to-end encryption.
          Message fanout. Scaling to millions of concurrent connections.
        duration_minutes: 180
        is_free: true
        sort_order: 25
        video_url: null
      - id: 019d8a21-c126-7001-d001-e1f2a3b4c526
        title: 'Bài 26: Thiết kế News Feed System (như Facebook/Twitter)'
        slug: bai-26-thiet-ke-news-feed-system-nhu-facebook-twitter
        description: >-
          Feed generation: Fan-out on Write vs Fan-out on Read (Push vs Pull).
          Hybrid approach. Timeline Service. Ranking và Relevance algorithms.
          Social Graph. Caching feed. Media processing pipeline.
          Real case study: Twitter timelines at scale.
        duration_minutes: 180
        is_free: true
        sort_order: 26
        video_url: null
      - id: 019d8a21-c127-7001-d001-e1f2a3b4c527
        title: 'Bài 27: Thiết kế Video Streaming Platform (như YouTube/Netflix)'
        slug: bai-27-thiet-ke-video-streaming-platform-nhu-youtube-netflix
        description: >-
          Video upload và transcoding pipeline. Adaptive Bitrate Streaming (ABR).
          CDN distribution. Video metadata service. Recommendation engine overview.
          Thumbnail generation. Live streaming architecture.
          DRM (Digital Rights Management). Cost optimization.
        duration_minutes: 190
        is_free: true
        sort_order: 27
        video_url: null
      - id: 019d8a21-c128-7001-d001-e1f2a3b4c528
        title: 'Bài 28: Thiết kế Ride-Sharing Platform (như Uber/Grab)'
        slug: bai-28-thiet-ke-ride-sharing-platform-nhu-uber-grab
        description: >-
          Location-based services. Geospatial indexing (Geohash, Quadtree, H3).
          Real-time matching algorithm. ETA calculation. Surge pricing architecture.
          Trip tracking. Payment processing integration.
          Map routing service. Scaling for millions of concurrent rides.
        duration_minutes: 190
        is_free: true
        sort_order: 28
        video_url: null
      - id: 019d8a21-c129-7001-d001-e1f2a3b4c529
        title: 'Bài 29: Thiết kế E-Commerce Platform (như Amazon/Shopee)'
        slug: bai-29-thiet-ke-e-commerce-platform-nhu-amazon-shopee
        description: >-
          Product Catalog service. Shopping Cart (stateless vs stateful).
          Inventory Management (pessimistic vs optimistic locking).
          Order Processing pipeline. Payment integration. Search & Discovery
          (Elasticsearch). Flash Sale / High-traffic event handling.
          Distributed transactions (Saga Pattern). Recommendation system.
        duration_minutes: 200
        is_free: true
        sort_order: 29
        video_url: null

  - id: section-08
    title: 'Phần 8: Production-Ready Architecture'
    description: 'Tổng kết và áp dụng kiến thức vào thực tế production'
    sort_order: 8
    lessons:
      - id: 019d8a21-c130-7001-d001-e1f2a3b4c530
        title: 'Bài 30: Architecture Decision Records & Production Checklist'
        slug: bai-30-architecture-decision-records-production-checklist
        description: >-
          Architecture Decision Records (ADRs) - documenting decisions.
          Production Readiness Checklist. Capacity Planning framework.
          Cost Estimation cho cloud architectures. Technology Radar.
          Architecture Review process. Tổng kết khóa học và learning path tiếp theo.
          Resources và communities cho System Architects.
        duration_minutes: 150
        is_free: true
        sort_order: 30
        video_url: null
---
