---
id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
title: 'System Architecture: From Zero to Hero'
slug: system-architecture-from-zero-to-hero
description: >-
  The System Architecture course is comprehensive from basic to advanced,
  helping you master how to design large-scale systems. Includes fundamental
  knowledge of Scalability, Availability, Consistency, architectural patterns
  such as Microservices, Event-Driven, CQRS, along with infrastructure
  components such as Load Balancer, CDN, Caching, Message Queues, Database
  Scaling. The course combines theory with real-life case studies from Netflix,
  Uber, Twitter and other large systems. Updated according to modern
  architectural trends 2026.
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
  name: System architecture
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
    title: 'Part 1: System Design Foundation'
    description: Understand core concepts and approaches to system design problems
    sort_order: 1
    lessons:
      - id: 019d8a21-c101-7001-d001-e1f2a3b4c501
        title: 'Lesson 1: What is System Design? - Overview and Roadmap'
        slug: bai-1-system-design-la-gi-tong-quan-va-roadmap
        description: >-
          Introducing System Design, why system design is needed, how to
          approach a system design problem (requirements → high-level design →
          deep dive → bottlenecks). Compare Monolith vs Distributed Systems.
          Learning roadmap and necessary resources.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c102-7001-d001-e1f2a3b4c502
        title: 'Lesson 2: Performance vs Scalability - Vertical & Horizontal Scaling'
        slug: bai-2-performance-vs-scalability-vertical-horizontal-scaling
        description: >-
          Distinguish between Performance and Scalability. Vertical Scaling
          (Scale Up) vs Horizontal Scaling (Scale Out). Stateless vs Stateful
          architecture. When to choose which scaling strategy?
          Back-of-the-envelope calculations and basic capacity planning.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c103-7001-d001-e1f2a3b4c503
        title: 'Lesson 3: Latency vs Throughput and Availability vs Consistency'
        slug: bai-3-latency-vs-throughput-availability-vs-consistency
        description: >-
          Latency, Throughput and the relationship between them. CAP Theorem
          (Consistency, Availability, Partition Tolerance). CP vs AP systems.
          Consistency Patterns (Strong, Eventual, Weak). Availability Patterns
          (Failover, Replication). Availability in numbers (99.9%, 99.99%).
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8a21-c104-7001-d001-e1f2a3b4c504
        title: 'Lesson 4: Networking Fundamentals for System Design'
        slug: bai-4-networking-fundamentals-cho-system-design
        description: >-
          DNS and how it works. TCP vs UDP. HTTP/HTTPS, HTTP/2, HTTP/3.
          WebSocket and Server-Sent Events. REST vs RPC vs GraphQL. Latency
          numbers every programmer should know.
        duration_minutes: 130
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Part 2: Infrastructure Components'
    description: >-
      Deep understanding of the most important building blocks in system
      architecture
    sort_order: 2
    lessons:
      - id: 019d8a21-c105-7001-d001-e1f2a3b4c505
        title: 'Lesson 5: Load Balancer - Intelligent load distribution'
        slug: bai-5-load-balancer-phan-phoi-tai-thong-minh
        description: >-
          What is Load Balancer and why is it needed? Layer 4 vs Layer 7 Load
          Balancing. Algorithms: Round Robin, Least Connections, IP Hash,
          Weighted. Reverse Proxy vs Load Balancer. Health Checks. Active-Active
          vs Active-Passive. Hands-on with HAProxy and Nginx.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c106-7001-d001-e1f2a3b4c506
        title: 'Lesson 6: CDN (Content Delivery Network) - Global acceleration'
        slug: bai-6-cdn-content-delivery-network-tang-toc-toan-cau
        description: >-
          What is a CDN and how does it work? Push CDN vs Pull CDN. Cache
          Invalidation strategies. Multi-tier CDN architecture. Edge Computing.
          Compare CloudFlare, AWS CloudFront, Fastly. Use cases and
          anti-patterns.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c107-7001-d001-e1f2a3b4c507
        title: 'Lesson 7: Caching Strategies - Optimize performance with Cache'
        slug: bai-7-caching-strategies-toi-uu-hieu-nang-voi-cache
        description: >-
          Caching layers: Client, CDN, Web Server, Application, Database. Cache
          Patterns: Cache-Aside, Write-Through, Write-Behind, Refresh-Ahead.
          Cache Eviction Policies (LRU, LFU, TTL). Redis vs Memcached. Cache
          Stampede, Thundering Herd and how to handle it. Distributed Caching.
        duration_minutes: 180
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8a21-c108-7001-d001-e1f2a3b4c508
        title: 'Lesson 8: Reverse Proxy and API Gateway'
        slug: bai-8-reverse-proxy-va-api-gateway
        description: >-
          Reverse Proxy: SSL Termination, Compression, Security. API Gateway
          Pattern: routing, authentication, rate limiting, throttling. Compare
          Nginx, Envoy, Kong, AWS API Gateway. Service Mesh concepts (Istio,
          Linkerd). BFF (Backend for Frontend) pattern.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Part 3: Database Architecture & Data Management'
    description: Design and expand database for large-scale systems
    sort_order: 3
    lessons:
      - id: 019d8a21-c109-7001-d001-e1f2a3b4c509
        title: 'Lesson 9: SQL vs NoSQL - Choose the right Database'
        slug: bai-9-sql-vs-nosql-chon-database-phu-hop
        description: >-
          RDBMS and ACID properties. NoSQL categories: Key-Value (Redis,
          DynamoDB), Document (MongoDB, CouchDB), Wide Column (Cassandra,
          HBase), Graph (Neo4j). BASE vs ACID. When to choose SQL, when to
          choose NoSQL. Polyglot Persistence. NewSQL (CockroachDB, TiDB).
        duration_minutes: 160
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c110-7001-d001-e1f2a3b4c510
        title: 'Lesson 10: Database Replication - Master-Slave & Master-Master'
        slug: bai-10-database-replication-master-slave-master-master
        description: >-
          What is replication and why is it needed? Synchronous vs Asynchronous
          Replication. Master-Slave: read replicas, failover, promotion.
          Master-Master: conflict resolution, split-brain. Replication Lag and
          how to handle it. Hands-on with PostgreSQL Streaming Replication.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-c111-7001-d001-e1f2a3b4c511
        title: 'Lesson 11: Database Sharding & Partitioning'
        slug: bai-11-database-sharding-partitioning
        description: >-
          Sharding strategies: Hash-based, Range-based, Geographic,
          Directory-based. Consistent Hashing. Shard key selection. Cross-shard
          queries and joins. Rebalancing shards. Federation (Functional
          Partitioning). Denormalization trade-offs. Real cases: Instagram,
          Pinterest.
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-c112-7001-d001-e1f2a3b4c512
        title: >-
          Lesson 12: Data Storage Patterns - Object Storage, Data Lake,
          Time-Series
        slug: bai-12-data-storage-patterns-object-storage-data-lake-time-series
        description: >-
          Object Storage (S3, MinIO). Data Lake vs Data Warehouse. Time-Series
          Databases (InfluxDB, TimescaleDB). Search Engines (Elasticsearch).
          Blob Storage patterns. Data Lifecycle Management. Hot/Warm/Cold
          storage tiers.
        duration_minutes: 140
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Part 4: Asynchronous Processing & Communication'
    description: >-
      Message Queues, Event-Driven Architecture and asynchronous processing
      patterns
    sort_order: 4
    lessons:
      - id: 019d8a21-c113-7001-d001-e1f2a3b4c513
        title: 'Lesson 13: Message Queues & Task Queues'
        slug: bai-13-message-queues-task-queues
        description: >-
          What is Message Queue and when should it be used? Point-to-Point vs
          Pub/Sub models. Compare RabbitMQ, Apache Kafka, AWS SQS, Redis
          Streams. Task Queues (Celery, Sidekiq). Dead Letter Queues. Back
          Pressure and Flow Control. Idempotency and Exactly-Once processing.
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-c114-7001-d001-e1f2a3b4c514
        title: 'Lesson 14: Event-Driven Architecture (EDA)'
        slug: bai-14-event-driven-architecture
        description: >-
          Event-Driven Architecture patterns. Event Sourcing. CQRS (Command
          Query Responsibility Segregation). Event Store design. Saga Pattern
          for distributed transactions. Choreography vs Orchestration. Apache
          Kafka deep dive. Real cases: banking, e-commerce order processing.
        duration_minutes: 200
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-c115-7001-d001-e1f2a3b4c515
        title: 'Lesson 15: Stream Processing & Real-time Data Pipelines'
        slug: bai-15-stream-processing-real-time-data-pipelines
        description: >-
          Batch Processing vs Stream Processing. Apache Kafka Streams. Apache
          Flink, Spark Streaming. Real-time analytics pipeline design. Change
          Data Capture (CDC) with Debezium. Lambda Architecture vs Kappa
          Architecture. Real cases: fraud detection, live dashboards.
        duration_minutes: 160
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 'Part 5: Architectural Patterns'
    description: Popular architectural models and how to apply them in practice
    sort_order: 5
    lessons:
      - id: 019d8a21-c116-7001-d001-e1f2a3b4c516
        title: 'Lesson 16: Monolith to Microservices - Transformation strategy'
        slug: bai-16-monolith-to-microservices-chien-luoc-chuyen-doi
        description: >-
          Monolithic Architecture: advantages and disadvantages. Microservices
          Architecture: principles, benefits, challenges. Strangler Fig Pattern.
          Service Decomposition strategies (by business capability, by
          subdomain). Database per Service. API Composition. Shared Libraries vs
          Shared Nothing.
        duration_minutes: 180
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-c117-7001-d001-e1f2a3b4c517
        title: 'Lesson 17: Service Communication Patterns'
        slug: bai-17-service-communication-patterns
        description: >-
          Synchronous Communication: REST, gRPC, GraphQL. Asynchronous
          Communication: Message Queues, Events. Service Discovery (Consul,
          Etcd). Circuit Breaker Pattern (Resilience4j). Retry, Timeout,
          Bulkhead patterns. Sidecar Pattern. API Versioning strategies.
        duration_minutes: 170
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-c118-7001-d001-e1f2a3b4c518
        title: 'Lesson 18: Domain-Driven Design (DDD) for System Architecture'
        slug: bai-18-domain-driven-design-cho-system-architecture
        description: >-
          DDD Strategic Patterns: Bounded Context, Ubiquitous Language, Context
          Mapping. DDD Tactical Patterns: Aggregates, Entities, Value Objects,
          Domain Events, Repositories. Anti-Corruption Layer. Apply DDD to
          decompose microservices. Event Storming workshop.
        duration_minutes: 190
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-c119-7001-d001-e1f2a3b4c519
        title: 'Lesson 19: Serverless & Cloud-Native Architecture'
        slug: bai-19-serverless-cloud-native-architecture
        description: >-
          Serverless Architecture: AWS Lambda, Google Cloud Functions. FaaS
          (Function as a Service) patterns. 12-Factor App methodology.
          Cloud-Native principles. Container Orchestration overview. Platform
          Engineering. When is Serverless, when is Containers. Cost optimization
          strategies.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-06
    title: 'Part 6: Reliability, Security & Observability'
    description: 'Ensure the production system is reliable, secure and observable'
    sort_order: 6
    lessons:
      - id: 019d8a21-c120-7001-d001-e1f2a3b4c520
        title: 'Lesson 20: High Availability & Fault Tolerance'
        slug: bai-20-high-availability-fault-tolerance
        description: >-
          Designing for Failure. Redundancy strategies. Active-Active vs
          Active-Passive HA. Health Checks and Self-Healing. Graceful
          Degradation. Feature Flags. Blue-Green Deployment vs Canary.
          Zero-Downtime Deployment. Chaos Engineering basics (Netflix Chaos
          Monkey).
        duration_minutes: 180
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-c121-7001-d001-e1f2a3b4c521
        title: 'Lesson 21: Disaster Recovery & Multi-Region Architecture'
        slug: bai-21-disaster-recovery-multi-region-architecture
        description: >-
          RPO (Recovery Point Objective) and RTO (Recovery Time Objective). DR
          strategies: Backup & Restore, Pilot Light, Warm Standby, Multi-Site
          Active-Active. Cross-region replication. Global Load Balancing. Data
          consistency across regions. DR testing and runbooks.
        duration_minutes: 170
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a21-c122-7001-d001-e1f2a3b4c522
        title: 'Lesson 22: Security Architecture - Defense in Depth'
        slug: bai-22-security-architecture-defense-in-depth
        description: >-
          Security Architecture principles. Authentication: OAuth 2.0, OIDC,
          JWT, mTLS. Authorization: RBAC, ABAC, ReBAC. API Security: Rate
          Limiting, Input Validation, CORS. Network Security: VPC, Firewalls,
          WAF. Data Encryption at rest and in transit. Zero Trust Architecture.
          Secrets Management (Vault).
        duration_minutes: 190
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c123-7001-d001-e1f2a3b4c523
        title: 'Lesson 23: Observability - Monitoring, Logging & Tracing'
        slug: bai-23-observability-monitoring-logging-tracing
        description: >-
          Three Pillars of Observability: Metrics, Logs, Traces. Monitoring with
          Prometheus + Grafana. Centralized Logging with ELK/Loki. Distributed
          Tracing with Jaeger/Tempo. OpenTelemetry standard. Alerting
          strategies. SLI, SLO, SLA definitions. Error Budgets. Runbooks and
          Incident Response.
        duration_minutes: 180
        is_free: true
        sort_order: 23
        video_url: null
  - id: section-07
    title: 'Part 7: System Design Case Studies'
    description: >-
      Design practical systems from famous problems - learn from Netflix, Uber,
      Twitter
    sort_order: 7
    lessons:
      - id: 019d8a21-c124-7001-d001-e1f2a3b4c524
        title: 'Lesson 24: Designing URL Shortener (like Bit.ly)'
        slug: bai-24-thiet-ke-url-shortener-nhu-bitly
        description: >-
          Functional & Non-functional requirements. High-level design. URL
          encoding: Base62, MD5 hash. Database schema design. Read-heavy
          optimization. Cache strategies. Analytics tracking. Rate limiting.
          Capacity estimation (100M URLs/day).
        duration_minutes: 150
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c125-7001-d001-e1f2a3b4c525
        title: 'Lesson 25: Designing a Chat System (like WhatsApp/Slack)'
        slug: bai-25-thiet-ke-chat-system-nhu-whatsapp-slack
        description: >-
          1-1 chat and Group chat architecture. WebSocket connections
          management. Message delivery guarantees. Read receipts. Online/Offline
          status. Push Notifications. Media storage. End-to-end encryption.
          Message fanout. Scaling to millions of concurrent connections.
        duration_minutes: 180
        is_free: true
        sort_order: 25
        video_url: null
      - id: 019d8a21-c126-7001-d001-e1f2a3b4c526
        title: 'Lesson 26: Designing News Feed System (like Facebook/Twitter)'
        slug: bai-26-thiet-ke-news-feed-system-nhu-facebook-twitter
        description: >-
          Feed generation: Fan-out on Write vs Fan-out on Read (Push vs Pull).
          Hybrid approach. Timeline Service. Ranking and Relevance algorithms.
          Social Graph. Caching feeds. Media processing pipeline. Real case
          study: Twitter timelines at scale.
        duration_minutes: 180
        is_free: true
        sort_order: 26
        video_url: null
      - id: 019d8a21-c127-7001-d001-e1f2a3b4c527
        title: 'Lesson 27: Designing Video Streaming Platform (like YouTube/Netflix)'
        slug: bai-27-thiet-ke-video-streaming-platform-nhu-youtube-netflix
        description: >-
          Video upload and transcoding pipeline. Adaptive Bitrate Streaming
          (ABR). CDN distribution. Video metadata service. Recommendation engine
          overview. Thumbnail generation. Live streaming architecture. DRM
          (Digital Rights Management). Cost optimization.
        duration_minutes: 190
        is_free: true
        sort_order: 27
        video_url: null
      - id: 019d8a21-c128-7001-d001-e1f2a3b4c528
        title: 'Lesson 28: Designing a Ride-Sharing Platform (like Uber/Grab)'
        slug: bai-28-thiet-ke-ride-sharing-platform-nhu-uber-grab
        description: >-
          Location-based services. Geospatial indexing (Geohash, Quadtree, H3).
          Real-time matching algorithm. ETA calculation. Surge pricing
          architecture. Trip tracking. Payment processing integration. Map
          routing service. Scaling for millions of concurrent rides.
        duration_minutes: 190
        is_free: true
        sort_order: 28
        video_url: null
      - id: 019d8a21-c129-7001-d001-e1f2a3b4c529
        title: 'Lesson 29: E-Commerce Platform design (like Amazon/Shopee)'
        slug: bai-29-thiet-ke-e-commerce-platform-nhu-amazon-shopee
        description: >-
          Product Catalog service. Shopping Cart (stateless vs stateful).
          Inventory Management (pessimistic vs optimistic locking). Order
          Processing pipeline. Payment integration. Search & Discovery
          (Elasticsearch). Flash Sale / High-traffic event handling. Distributed
          transactions (Saga Pattern). Recommendation system.
        duration_minutes: 200
        is_free: true
        sort_order: 29
        video_url: null
  - id: section-08
    title: 'Part 8: Production-Ready Architecture'
    description: Summarize and apply knowledge to actual production
    sort_order: 8
    lessons:
      - id: 019d8a21-c130-7001-d001-e1f2a3b4c530
        title: 'Lesson 30: Architecture Decision Records & Production Checklist'
        slug: bai-30-architecture-decision-records-production-checklist
        description: >-
          Architecture Decision Records (ADRs) - documenting decisions.
          Production Readiness Checklist. Capacity Planning framework. Cost
          Estimation for cloud architectures. Technology Radar. Architecture
          Review process. Course summary and subsequent learning path. Resources
          and communities for System Architects.
        duration_minutes: 150
        is_free: true
        sort_order: 30
        video_url: null
locale: en
---

