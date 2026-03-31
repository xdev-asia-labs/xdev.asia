---
id: 019d8a21-cb00-700b-d001-e1f2a3b4c5d6
title: 'Kiến trúc Event-Driven Microservices chuyên sâu'
slug: kien-truc-event-driven-microservices-chuyen-sau
description: >-
  Khóa học chuyên sâu về Event-Driven Microservices Architecture. Bao gồm Apache Kafka & Pulsar, Saga Pattern, CQRS & Event Sourcing, Outbox Pattern, Exactly-once Semantics, Schema Registry, Dead Letter Queue, và Choreography vs Orchestration. Thiết kế hệ thống microservices event-driven production-ready với consistency guarantees. Case studies: Uber, Wix, Booking.com. Cập nhật 2026.
featured_image: uploads/2026/03/event-driven-microservices-series-banner-2026.png
level: intermediate
duration_hours: 80
lesson_count: 25
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T10:00:00.000000Z'
created_at: '2026-03-31T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019d8a21-b200-7001-c001-a1b2c3d4e5f6
  name: Kiến trúc hệ thống
  slug: kien-truc-he-thong
tags:
  - name: EventDriven
    slug: eventdriven
  - name: Microservices
    slug: microservices
  - name: Kafka
    slug: kafka
  - name: CQRS
    slug: cqrs
  - name: EventSourcing
    slug: eventsourcing
  - name: Saga
    slug: saga
  - name: DDD
    slug: ddd
  - name: DistributedSystems
    slug: distributedsystems
  - name: Messaging
    slug: messaging
  - name: Pulsar
    slug: pulsar
  - name: Patterns
    slug: patterns
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 'Phần 1: Event-Driven Foundations'
    description: 'Event-Driven Architecture (EDA) fundamentals'
    sort_order: 1
    lessons:
      - id: 019d8a21-cb01-70cb-d001-e1f2a3b4c501
        title: 'Bài 1: Tổng quan Event-Driven Architecture - Why Events Matter'
        slug: bai-1-tong-quan-event-driven-architecture-why-events-matter
        description: >-
          Event-Driven Architecture (EDA) fundamentals. Events vs Commands vs Queries. Temporal coupling vs event decoupling. EDA benefits và trade-offs.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-cb02-70cb-d001-e1f2a3b4c502
        title: 'Bài 2: Domain Events & Event Modeling'
        slug: bai-2-domain-events-event-modeling
        description: >-
          Domain Events trong DDD. Event Storming workshop. Event Modeling technique. Identifying events, commands, aggregates. Event naming conventions.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-cb03-70cb-d001-e1f2a3b4c503
        title: 'Bài 3: Messaging Patterns - Pub/Sub, Queue & Stream'
        slug: bai-3-messaging-patterns-pub-sub-queue-stream
        description: >-
          Messaging patterns: point-to-point, pub/sub, event streaming. Message brokers vs event streaming platforms. At-most-once, at-least-once, exactly-once delivery.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Phần 2: Apache Kafka Deep Dive'
    description: 'Kafka internals: broker architecture, topic partitions, replication factor'
    sort_order: 2
    lessons:
      - id: 019d8a21-cb04-70cb-d001-e1f2a3b4c504
        title: 'Bài 4: Kafka Architecture - Brokers, Partitions & Replication'
        slug: bai-4-kafka-architecture-brokers-partitions-replication
        description: >-
          Kafka internals: broker architecture, topic partitions, replication factor. ISR (In-Sync Replicas). Leader election. Log segments. Controller quorum (KRaft).
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-cb05-70cb-d001-e1f2a3b4c505
        title: 'Bài 5: Kafka Producers & Consumers - Advanced Patterns'
        slug: bai-5-kafka-producers-consumers-advanced-patterns
        description: >-
          Producer: acks, batching, compression, idempotent producer. Consumer: consumer groups, offset management, rebalancing. Exactly-once semantics (EOS).
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-cb06-70cb-d001-e1f2a3b4c506
        title: 'Bài 6: Kafka Streams & ksqlDB'
        slug: bai-6-kafka-streams-ksqldb
        description: >-
          Kafka Streams: KStream, KTable, windowing, joins. State stores. Interactive queries. ksqlDB: SQL over streams. Materialized views. Stream processing topologies.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-cb07-70cb-d001-e1f2a3b4c507
        title: 'Bài 7: Schema Registry & Data Serialization'
        slug: bai-7-schema-registry-data-serialization
        description: >-
          Schema Registry: Avro, Protobuf, JSON Schema. Schema evolution rules. Compatibility modes. Schema validation. Confluent Schema Registry vs Apicurio.
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'Phần 3: Event Sourcing & CQRS'
    description: 'Event Sourcing fundamentals: event store, event replay, snapshots'
    sort_order: 3
    lessons:
      - id: 019d8a21-cb08-70cb-d001-e1f2a3b4c508
        title: 'Bài 8: Event Sourcing - Immutable Event Log as Source of Truth'
        slug: bai-8-event-sourcing-immutable-event-log-source-of-truth
        description: >-
          Event Sourcing fundamentals: event store, event replay, snapshots. Aggregate reconstruction. Temporal queries. Audit trail tự nhiên. Event versioning.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-cb09-70cb-d001-e1f2a3b4c509
        title: 'Bài 9: CQRS - Command Query Responsibility Segregation'
        slug: bai-9-cqrs-command-query-responsibility-segregation
        description: >-
          CQRS pattern: separate read/write models. Command handlers và domain logic. Read model projections. Eventual consistency. When to use CQRS.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-cb10-70cb-d001-e1f2a3b4c510
        title: 'Bài 10: Event Store Implementation - PostgreSQL & EventStoreDB'
        slug: bai-10-event-store-implementation-postgresql-eventstoredb
        description: >-
          Implementing event store: PostgreSQL-based (outbox), EventStoreDB, Axon Server. Event serialization. Subscription models. Projections engine.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-cb11-70cb-d001-e1f2a3b4c511
        title: 'Bài 11: Projections & Read Model Patterns'
        slug: bai-11-projections-read-model-patterns
        description: >-
          Building read models from events. Projection patterns: inline, catch-up, live. Multi-model projections. Rebuilding projections. Handling projection failures.
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 'Phần 4: Distributed Patterns'
    description: 'Saga pattern deep-dive: choreography vs orchestration'
    sort_order: 4
    lessons:
      - id: 019d8a21-cb12-70cb-d001-e1f2a3b4c512
        title: 'Bài 12: Saga Pattern - Managing Distributed Transactions'
        slug: bai-12-saga-pattern-managing-distributed-transactions
        description: >-
          Saga pattern deep-dive: choreography vs orchestration. Compensating transactions. Saga execution coordinator. Error handling. Saga state machine.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-cb13-70cb-d001-e1f2a3b4c513
        title: 'Bài 13: Outbox Pattern & Reliable Event Publishing'
        slug: bai-13-outbox-pattern-reliable-event-publishing
        description: >-
          Transactional outbox pattern. Polling publisher vs CDC-based. Debezium outbox connector. Guaranteed event delivery. Ordering guarantees.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-cb14-70cb-d001-e1f2a3b4c514
        title: 'Bài 14: Dead Letter Queue & Error Handling'
        slug: bai-14-dead-letter-queue-error-handling
        description: >-
          Dead Letter Queue (DLQ) patterns. Retry strategies: exponential backoff, circuit breaker. Poison pill handling. Error classification. DLQ reprocessing.
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-cb15-70cb-d001-e1f2a3b4c515
        title: 'Bài 15: Idempotency & Exactly-once Processing'
        slug: bai-15-idempotency-exactly-once-processing
        description: >-
          Idempotent consumers: deduplication strategies. Idempotency keys. Exactly-once vs effectively-once. Kafka transactional API. Consumer offset management.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 'Phần 5: Advanced Patterns'
    description: 'Communication patterns: request-reply over events, event notification, event-carried state transfer'
    sort_order: 5
    lessons:
      - id: 019d8a21-cb16-70cb-d001-e1f2a3b4c516
        title: 'Bài 16: Event-Driven Microservices Communication Patterns'
        slug: bai-16-event-driven-microservices-communication-patterns
        description: >-
          Communication patterns: request-reply over events, event notification, event-carried state transfer. Hybrid sync+async patterns. API composition.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-cb17-70cb-d001-e1f2a3b4c517
        title: 'Bài 17: Event-Driven Data Consistency & Conflict Resolution'
        slug: bai-17-event-driven-data-consistency-conflict-resolution
        description: >-
          Eventual consistency deep-dive. Conflict detection và resolution. Last-writer-wins vs merge. Vector clocks. CRDTs cho event-driven systems.
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-cb18-70cb-d001-e1f2a3b4c518
        title: 'Bài 18: Event Versioning & Schema Evolution'
        slug: bai-18-event-versioning-schema-evolution
        description: >-
          Event versioning strategies: weak schema, upcasting, event adapters. Breaking changes management. Multi-version consumers. Schema migration patterns.
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-cb19-70cb-d001-e1f2a3b4c519
        title: 'Bài 19: Process Manager & Workflow Engine'
        slug: bai-19-process-manager-workflow-engine
        description: >-
          Process Manager pattern: long-running business processes as state machines. Temporal.io workflow engine. Durable execution. Compensations.
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-06
    title: 'Phần 6: Operations & Production'
    description: 'Kafka operations: monitoring (JMX, Prometheus), performance tuning'
    sort_order: 6
    lessons:
      - id: 019d8a21-cb20-70cb-d001-e1f2a3b4c520
        title: 'Bài 20: Kafka Operations - Monitoring, Tuning & Troubleshooting'
        slug: bai-20-kafka-operations-monitoring-tuning-troubleshooting
        description: >-
          Kafka operations: monitoring (JMX, Prometheus), performance tuning. Consumer lag monitoring. Partition rebalancing. Broker maintenance. Troubleshooting common issues.
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-cb21-70cb-d001-e1f2a3b4c521
        title: 'Bài 21: Testing Event-Driven Systems'
        slug: bai-21-testing-event-driven-systems
        description: >-
          Testing strategies: unit testing event handlers, integration testing with embedded Kafka. Contract testing cho events. End-to-end testing. Testcontainers.
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a21-cb22-70cb-d001-e1f2a3b4c522
        title: 'Bài 22: Observability cho Event-Driven Systems'
        slug: bai-22-observability-cho-event-driven-systems
        description: >-
          Distributed tracing qua events. Correlation IDs. Event flow visualization. Consumer lag alerting. Dead letter monitoring. Partition skew detection.
        duration_minutes: 90
        is_free: true
        sort_order: 22
        video_url: null
  - id: section-07
    title: 'Phần 7: Case Studies'
    description: 'Migrating from monolith to event-driven: strangler fig pattern'
    sort_order: 7
    lessons:
      - id: 019d8a21-cb23-70cb-d001-e1f2a3b4c523
        title: 'Bài 23: Migration to Event-Driven - Strangler Fig Pattern'
        slug: bai-23-migration-to-event-driven-strangler-fig-pattern
        description: >-
          Migrating from monolith to event-driven: strangler fig pattern. Parallel run strategy. Event bridge between old and new. Gradual migration. Risk management.
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-cb24-70cb-d001-e1f2a3b4c524
        title: 'Bài 24: Apache Pulsar & Alternatives'
        slug: bai-24-apache-pulsar-alternatives
        description: >-
          Apache Pulsar: multi-tenancy, tiered storage, geo-replication. Pulsar vs Kafka comparison. NATS JetStream. Redpanda. Amazon EventBridge. Choosing the right platform.
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-cb25-70cb-d001-e1f2a3b4c525
        title: 'Bài 25: Case Studies - Uber, Wix, Booking.com & LinkedIn'
        slug: bai-25-case-studies-uber-wix-booking-com-linkedin
        description: >-
          Phân tích event-driven thực tế: Uber (event sourcing ride matching), Wix (event-driven platform), Booking.com (Kafka at scale), LinkedIn (Kafka origin). Lessons learned.
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
---
