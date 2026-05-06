---
id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
title: Design a Notification System to send millions of Emails
slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
description: >-
  In-depth course on designing and building a Notification system capable of
  sending millions of emails at once. You'll learn how to design an event-driven
  architecture with message queues, build high-performance email pipelines,
  handle rate limiting, retry, and dead letter queues, ensure deliverability
  with SPF/DKIM/DMARC, and deploy a production-ready system. Combine theory with
  hands-on practice using Kafka, Redis, PostgreSQL, Amazon SES, SendGrid.
  Suitable for Backend Engineers, System Architects who want to solve the
  problem of sending large-scale emails in practice.
featured_image: uploads/2026/03/notification-email-system-series-banner-2026.png
level: intermediate
duration_hours: 40
lesson_count: 15
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-01T10:00:00.000000Z'
created_at: '2026-04-01T10:00:00.000000Z'
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
  - name: Email
    slug: email
  - name: Notification
    slug: notification
  - name: MessageQueue
    slug: message-queue
  - name: Kafka
    slug: kafka
  - name: EventDriven
    slug: event-driven
  - name: Scalability
    slug: scalability
  - name: HighAvailability
    slug: high-availability
  - name: Redis
    slug: redis
  - name: monitoring
    slug: monitoring
  - name: production
    slug: production
  - name: HandsOn
    slug: handson
sections:
  - id: section-01
    title: 'Part 1: Foundation — Understanding the large-scale Notification problem'
    description: >-
      Analyze requirements, overall architecture and core design patterns for a
      system that sends millions of emails
    sort_order: 1
    lessons:
      - id: 019e7a10-a101-7001-d001-f1e2d3c4b501
        title: >-
          Lesson 1: Notification system overview — The problem of sending
          millions of emails
        slug: bai-1-tong-quan-he-thong-notification-bai-toan-gui-trieu-email
        description: >-
          Analyze the problem of sending millions of emails: practical use cases
          (marketing campaigns, transactional emails, system alerts). Functional
          & non-functional requirements. Back-of-the-envelope estimation:
          throughput, storage, bandwidth. Compare notification channels: Email,
          SMS, Push. Why email is still king.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e7a10-a102-7001-d001-f1e2d3c4b502
        title: 'Lesson 2: General architecture — High-Level Design'
        slug: bai-2-kien-truc-tong-quan-high-level-design
        description: >-
          Design high-level architecture for notification system: API Gateway,
          Notification Service, Message Queue, Worker Pool, Email Provider. Data
          flow from trigger to inbox. Separation of concerns. Idempotency.
          Database schema design for notification metadata.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e7a10-a103-7001-d001-f1e2d3c4b503
        title: 'Lesson 3: Design Patterns for large-scale Email Systems'
        slug: bai-3-design-patterns-cho-email-system-quy-mo-lon
        description: >-
          Fan-out pattern, Producer-Consumer pattern, Priority Queue pattern.
          Circuit Breaker for external email providers. Bulkhead pattern to
          isolate failures. Outbox pattern ensures at-least-once delivery. Saga
          pattern for multi-step notification workflows.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Part 2: Message Queue & Event-Driven Architecture'
    description: >-
      Build the backbone of the notification system with message queue and
      event-driven architecture
    sort_order: 2
    lessons:
      - id: 019e7a10-a104-7001-d001-f1e2d3c4b504
        title: 'Lesson 4: Message Queue — The backbone of the Notification System'
        slug: bai-4-message-queue-xuong-song-cua-notification-system
        description: >-
          Why is a message queue needed for email system. Compare Kafka vs
          RabbitMQ vs Amazon SQS vs Redis Streams. Partitioning strategies for
          email workload. Consumer groups and parallel processing. Exactly-once
          vs at-least-once semantics. Hands-on setup Kafka cluster.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e7a10-a105-7001-d001-f1e2d3c4b505
        title: 'Lesson 5: Event-Driven Notification Pipeline with Kafka'
        slug: bai-5-event-driven-notification-pipeline-voi-kafka
        description: >-
          Design event schema for notification events. Topic design:
          notification-requests, email-send, email-status, email-dlq. Kafka
          Connect for data integration. Stream processing with Kafka Streams.
          Event sourcing for notification audit trail. Hands-on: build complete
          pipeline.
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e7a10-a106-7001-d001-f1e2d3c4b506
        title: 'Lesson 6: Priority Queue and Scheduling Engine'
        slug: bai-6-priority-queue-va-scheduling-engine
        description: >-
          Multi-priority queue design: critical (OTP, password reset), high
          (order confirmation), normal (marketing). Delayed/scheduled email
          delivery. Cron-based vs event-based scheduling. Time-zone aware
          sending. Redis Sorted Set for scheduling. Rate-aware queue
          consumption.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-03
    title: 'Part 3: Email Infrastructure & Delivery Engine'
    description: >-
      Deep dive into email protocols, integrating ESP, template engine and
      content pipeline
    sort_order: 3
    lessons:
      - id: 019e7a10-a107-7001-d001-f1e2d3c4b507
        title: 'Lesson 7: SMTP Deep Dive — Understanding email delivery from the root'
        slug: bai-7-smtp-deep-dive-hieu-email-delivery-tu-goc
        description: >-
          SMTP protocol lifecycle: HELO, MAIL FROM, RCPT TO, DATA. MX records
          and DNS resolution. Email routing. Bounce types: hard bounce, soft
          bounce. Feedback loops. Email headers anatomy. Connection pooling for
          SMTP. Hands-on: send email via raw SMTP.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e7a10-a108-7001-d001-f1e2d3c4b508
        title: 'Lesson 8: Email Service Providers — SES, SendGrid, Mailgun'
        slug: bai-8-email-service-providers-ses-sendgrid-mailgun
        description: >-
          Detailed comparison of Amazon SES, SendGrid, Mailgun, Postmark.
          Pricing model and cost optimization for millions of emails. API vs
          SMTP integration. Multi-provider failover strategy. Vendor lock-in
          avoidance. Abstraction layer design. Hands-on: Amazon SES integration
          with SendGrid fallback.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e7a10-a109-7001-d001-f1e2d3c4b509
        title: 'Lesson 9: Template Engine & Content Pipeline'
        slug: bai-9-template-engine-va-content-pipeline
        description: >-
          Email template system: MJML, Handlebars, React Email. Template
          versioning and A/B testing. Dynamic content personalization for
          millions of recipients. Inline CSS, image hosting, responsive email.
          Content pipeline: template → render → validate → send. Pre-rendering
          and caching strategies. Unsubscribe link compliance.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-04
    title: 'Part 4: Handling scale — Scaling to Millions'
    description: >-
      Techniques to scale the system to send millions of emails: rate limiting,
      batch processing, error handling
    sort_order: 4
    lessons:
      - id: 019e7a10-a110-7001-d001-f1e2d3c4b510
        title: 'Lesson 10: Rate Limiting & Throttling — Control sending speed'
        slug: bai-10-rate-limiting-throttling-kiem-soat-toc-do-gui
        description: >-
          Why is rate limiting needed: ESP limits, IP reputation, domain
          reputation. Token bucket, sliding window, leaky bucket algorithms.
          Multi-level throttling: per-provider, per-domain, per-IP. Adaptive
          rate limiting is based on bounce rate. Redis-based distributed rate
          limiter. IP warming strategy for new domain.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e7a10-a111-7001-d001-f1e2d3c4b511
        title: 'Lesson 11: Batch Processing & Worker Pool Architecture'
        slug: bai-11-batch-processing-worker-pool-architecture
        description: >-
          Chunking strategy: divide millions of emails into optimal batches.
          Worker pool design: dynamic scaling, graceful shutdown. Horizontal
          scaling with Kubernetes HPA. Database batch operations.
          Memory-efficient processing for large recipient lists. Progress
          tracking and resumable campaigns. Hands-on: building scalable worker
          system.
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e7a10-a112-7001-d001-f1e2d3c4b512
        title: 'Lesson 12: Retry, Dead Letter Queue & Error Handling'
        slug: bai-12-retry-dead-letter-queue-error-handling
        description: >-
          Retry strategies: exponential backoff, jitter, max retries. Dead
          Letter Queue design and reprocessing workflow. Error classification:
          transient vs permanent failures. Circuit breaker for ESP failures.
          Poison message handling. Compensation logic. Alerting when error rate
          exceeds threshold. Hands-on: implement complete error handling
          pipeline.
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-05
    title: 'Part 5: Deliverability, Monitoring & Production'
    description: >-
      Ensure emails arrive in the inbox, monitor the system and deploy to
      production
    sort_order: 5
    lessons:
      - id: 019e7a10-a113-7001-d001-f1e2d3c4b513
        title: 'Lesson 13: Email Deliverability — SPF, DKIM, DMARC'
        slug: bai-13-email-deliverability-spf-dkim-dmarc
        description: >-
          Email authentication: SPF record, DKIM signing, DMARC policy. IP
          management reputation. Domain warm-up process. Spam score
          optimization. List hygiene: email validation, bounce handling,
          complaint processing. Inbox placement testing. Blacklist monitoring.
          BIMI (Brand Indicators for Message Identification).
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e7a10-a114-7001-d001-f1e2d3c4b514
        title: 'Lesson 14: Monitoring, Metrics & Alerting'
        slug: bai-14-monitoring-metrics-alerting
        description: >-
          Key metrics: send rate, delivery rate, bounce rate, open rate, click
          rate, complaint rate. Prometheus + Grafana dashboard. Distributed
          tracing with OpenTelemetry. Queue depth monitoring. Worker health
          checks. SLA definition and tracking. PagerDuty/OpsGenie integration.
          Runbook for common incidents. Hands-on: build monitoring dashboard.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e7a10-a115-7001-d001-f1e2d3c4b515
        title: >-
          Lesson 15: Production Deployment — Case Study sending 10 million
          emails
        slug: bai-15-production-deployment-case-study-gui-10-trieu-email
        description: >-
          End-to-end case study: design and implementation of a system to send
          10 million emails for marketing campaign. Infrastructure setup on
          AWS/GCP. Kubernetes deployment manifests. CI/CD pipeline. Load testing
          with k6. Chaos engineering scenarios. Cost analysis and optimization.
          Lessons learned from real production incidents.
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
locale: en
---

## Introduction

Have you ever wondered how companies like **Shopee**, **Grab**, **Netflix** send millions of emails every day while still ensuring that emails reach the inbox, are not spammed, and the system does not crash?

This course will take you from **zero to production-ready**, designing and building a notification system capable of sending **millions of emails in one go** — the right way, with the right architecture, and with best practices.

## What will you learn?

- **Architectural design** event-driven notification system from scratch
- **Message Queue** with Kafka: partitioning, consumer groups, exactly-once delivery
- **Email Infrastructure**: SMTP deep dive, ESP integration (SES, SendGrid)
- **Scaling**: Rate limiting, batch processing, worker pool architecture
- **Deliverability**: SPF, DKIM, DMARC — ensures emails reach inbox
- **Production**: Monitoring, alerting, chaos engineering, cost optimization

## Requires knowledge

- Have basic knowledge of backend development (any language)
- Understand basic HTTP, REST API, Database
- Know basic Docker (to run hands-on labs)

## Suitable object

- Backend Developer wants to improve system design knowledge
- System Architect designs notification platform
- Tech Lead needs to solve the problem of sending large-scale emails
- System Design interview preparer
