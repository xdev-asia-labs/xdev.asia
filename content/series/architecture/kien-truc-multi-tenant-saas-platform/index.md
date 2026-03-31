---
id: 019d8a21-c600-7006-d001-e1f2a3b4c5d6
title: 'Kiến trúc Multi-tenant SaaS Platform'
slug: kien-truc-multi-tenant-saas-platform
description: >-
  Khóa học toàn diện về kiến trúc Multi-tenant SaaS Platform từ cơ bản đến production-ready. Bao gồm Tenant Isolation Strategies, Subscription & Billing Engine, Plugin/Extension Architecture, White-labeling, Onboarding Automation, Feature Flags, Usage Metering, và Self-service Admin Portal. Thiết kế hệ thống SaaS đáp ứng hàng nghìn tenant với chi phí tối ưu. Case studies từ Slack, Notion, Atlassian và các SaaS platform hàng đầu. Cập nhật 2026.
featured_image: uploads/2026/03/multi-tenant-saas-series-banner-2026.png
level: intermediate
duration_hours: 75
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
  - name: SaaS
    slug: saas
  - name: MultiTenant
    slug: multitenant
  - name: Architecture
    slug: architecture
  - name: Microservices
    slug: microservices
  - name: Billing
    slug: billing
  - name: FeatureFlags
    slug: featureflags
  - name: DDD
    slug: ddd
  - name: Kubernetes
    slug: kubernetes
  - name: Scalability
    slug: scalability
  - name: Security
    slug: security
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 'Phần 1: SaaS Foundations'
    description: 'SaaS business models (B2B, B2C, PLG, Sales-led)'
    sort_order: 1
    lessons:
      - id: 019d8a21-c601-70c6-d001-e1f2a3b4c501
        title: 'Bài 1: Tổng quan SaaS - Business Models, Metrics & Architecture Patterns'
        slug: bai-1-tong-quan-saas-business-models-metrics-architecture
        description: >-
          SaaS business models (B2B, B2C, PLG, Sales-led). Key metrics: MRR, ARR, Churn, LTV, CAC. SaaS architecture patterns và evolution từ on-premise đến cloud-native.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c602-70c6-d001-e1f2a3b4c502
        title: 'Bài 2: Multi-tenancy Deep Dive - Isolation Strategies & Trade-offs'
        slug: bai-2-multi-tenancy-deep-dive-isolation-strategies-trade-offs
        description: >-
          Ba chiến lược tenant isolation: Silo (DB per tenant), Pool (shared DB), Bridge (schema per tenant). Trade-offs về cost, security, performance. Decision framework.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c603-70c6-d001-e1f2a3b4c503
        title: 'Bài 3: Platform Architecture Overview - DDD & Microservices cho SaaS'
        slug: bai-3-platform-architecture-overview-ddd-microservices-cho-saas
        description: >-
          Thiết kế kiến trúc tổng quan SaaS Platform. Bounded Contexts: Tenant, Identity, Billing, Product. Shared services vs tenant-specific services.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Phần 2: Tenant Management & Identity'
    description: 'Tenant provisioning automation: infrastructure setup, database creation, configuration'
    sort_order: 2
    lessons:
      - id: 019d8a21-c604-70c6-d001-e1f2a3b4c504
        title: 'Bài 4: Tenant Lifecycle Management - Provisioning & Configuration'
        slug: bai-4-tenant-lifecycle-management-provisioning-configuration
        description: >-
          Tenant provisioning automation: infrastructure setup, database creation, configuration. Tenant-aware routing. Custom domains và branding per tenant.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-c605-70c6-d001-e1f2a3b4c505
        title: 'Bài 5: Identity & Access Management - Multi-tenant Auth & SSO'
        slug: bai-5-identity-access-management-multi-tenant-auth-sso
        description: >-
          Multi-tenant authentication: organization-based login. SSO với SAML/OIDC. RBAC per tenant. Invitation flow. Identity provider federation.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c606-70c6-d001-e1f2a3b4c506
        title: 'Bài 6: Onboarding Engine - Self-service Signup & Guided Setup'
        slug: bai-6-onboarding-engine-self-service-signup-guided-setup
        description: >-
          Thiết kế onboarding flow: signup, verification, workspace creation, guided setup. Product-Led Growth patterns. Trial management. Activation metrics tracking.
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c607-70c6-d001-e1f2a3b4c507
        title: 'Bài 7: Data Isolation & Multi-tenant Database Patterns'
        slug: bai-7-data-isolation-multi-tenant-database-patterns
        description: >-
          Row-level security (RLS) với PostgreSQL. Tenant context propagation. Query filtering patterns. Cross-tenant data protection. Tenant-aware migrations.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'Phần 3: Billing & Subscription Engine'
    description: 'Thiết kế subscription system: plan management, pricing tiers, trial periods'
    sort_order: 3
    lessons:
      - id: 019d8a21-c608-70c6-d001-e1f2a3b4c508
        title: 'Bài 8: Subscription Engine - Plans, Pricing & Lifecycle'
        slug: bai-8-subscription-engine-plans-pricing-lifecycle
        description: >-
          Thiết kế subscription system: plan management, pricing tiers, trial periods. Subscription lifecycle: create, upgrade, downgrade, cancel, pause. Grandfathering.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-c609-70c6-d001-e1f2a3b4c509
        title: 'Bài 9: Usage Metering & Billing Engine'
        slug: bai-9-usage-metering-billing-engine
        description: >-
          Usage-based billing: metering infrastructure, aggregation pipelines. Invoice generation. Proration cho upgrades/downgrades. Tax calculation. Stripe/Paddle integration.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c610-70c6-d001-e1f2a3b4c510
        title: 'Bài 10: Entitlement System & Feature Gating'
        slug: bai-10-entitlement-system-feature-gating
        description: >-
          Entitlement engine: plan-based feature access. Feature flags cho progressive rollout. Rate limiting per plan. Quota management. Overage handling.
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'Phần 4: Core Platform Features'
    description: 'Feature flag architecture: LaunchDarkly patterns'
    sort_order: 4
    lessons:
      - id: 019d8a21-c611-70c6-d001-e1f2a3b4c511
        title: 'Bài 11: Feature Flags & Configuration Management'
        slug: bai-11-feature-flags-configuration-management
        description: >-
          Feature flag architecture: LaunchDarkly patterns. Tenant-specific configurations. A/B testing infrastructure. Dark launches. Kill switches.
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-c612-70c6-d001-e1f2a3b4c512
        title: 'Bài 12: Plugin & Extension Architecture - Marketplace'
        slug: bai-12-plugin-extension-architecture-marketplace
        description: >-
          Thiết kế plugin system: extension points, hooks, sandboxed execution. Plugin marketplace. Third-party integrations. Webhook system. OAuth app platform.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-c613-70c6-d001-e1f2a3b4c513
        title: 'Bài 13: White-labeling & Custom Branding'
        slug: bai-13-white-labeling-custom-branding
        description: >-
          White-label architecture: custom domains, logo, colors, email templates. CSS theming engine. Reseller/partner program support. Custom login pages.
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-c614-70c6-d001-e1f2a3b4c514
        title: 'Bài 14: Notification & Communication Engine'
        slug: bai-14-notification-communication-engine
        description: >-
          Multi-channel notification: email, push, in-app, SMS, Slack. Template engine. Preference management. Digest/batching. Delivery tracking.
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-05
    title: 'Phần 5: Data & API Platform'
    description: 'API-first SaaS: REST/GraphQL API design'
    sort_order: 5
    lessons:
      - id: 019d8a21-c615-70c6-d001-e1f2a3b4c515
        title: 'Bài 15: API Design & Developer Experience'
        slug: bai-15-api-design-developer-experience
        description: >-
          API-first SaaS: REST/GraphQL API design. API versioning strategy. Developer portal. SDK generation. Rate limiting per API key. Sandbox environment.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-c616-70c6-d001-e1f2a3b4c516
        title: 'Bài 16: Data Import/Export & Migration Tools'
        slug: bai-16-data-import-export-migration-tools
        description: >-
          Bulk data import với streaming. Export formats (CSV, JSON, Parquet). Data migration từ competitor platforms. ETL pipelines cho tenant data.
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-c617-70c6-d001-e1f2a3b4c517
        title: 'Bài 17: Search & Analytics Per Tenant'
        slug: bai-17-search-analytics-per-tenant
        description: >-
          Full-text search cho multi-tenant (Elasticsearch/Meilisearch). Tenant data isolation trong search index. In-app analytics dashboard. Data export.
        duration_minutes: 90
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-c618-70c6-d001-e1f2a3b4c518
        title: 'Bài 18: Audit Logging & Compliance'
        slug: bai-18-audit-logging-compliance
        description: >-
          Immutable audit logs per tenant. Activity feed. Data retention policies. GDPR compliance: data deletion, export. SOC 2 requirements.
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'Phần 6: Scaling & Operations'
    description: 'Noisy neighbor problem'
    sort_order: 6
    lessons:
      - id: 019d8a21-c619-70c6-d001-e1f2a3b4c519
        title: 'Bài 19: Noisy Neighbor & Resource Isolation'
        slug: bai-19-noisy-neighbor-resource-isolation
        description: >-
          Noisy neighbor problem. Resource quotas per tenant. Fair scheduling. Throttling strategies. Tenant tiering: compute, storage, bandwidth limits.
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-c620-70c6-d001-e1f2a3b4c520
        title: 'Bài 20: Multi-region Deployment & Data Residency'
        slug: bai-20-multi-region-deployment-data-residency
        description: >-
          Multi-region SaaS deployment. Data residency requirements (GDPR, local laws). Tenant routing to nearest region. Cross-region replication strategies.
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-c621-70c6-d001-e1f2a3b4c521
        title: 'Bài 21: Tenant-aware CI/CD & Infrastructure Automation'
        slug: bai-21-tenant-aware-cicd-infrastructure-automation
        description: >-
          CI/CD cho SaaS: zero-downtime deployments. Canary releases per tenant group. Infrastructure as Code cho tenant provisioning. GitOps workflow.
        duration_minutes: 90
        is_free: true
        sort_order: 21
        video_url: null
  - id: section-07
    title: 'Phần 7: Production & Case Studies'
    description: 'Tenant-aware monitoring: metrics, logs, traces per tenant'
    sort_order: 7
    lessons:
      - id: 019d8a21-c622-70c6-d001-e1f2a3b4c522
        title: 'Bài 22: Observability & SRE cho Multi-tenant'
        slug: bai-22-observability-sre-cho-multi-tenant
        description: >-
          Tenant-aware monitoring: metrics, logs, traces per tenant. SLI/SLO per tier. Cost attribution. Tenant health dashboard. Incident management.
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c623-70c6-d001-e1f2a3b4c523
        title: 'Bài 23: Security Architecture cho SaaS'
        slug: bai-23-security-architecture-cho-saas
        description: >-
          SaaS security: tenant data encryption, key management per tenant. Vulnerability management. Penetration testing. SOC 2, ISO 27001 compliance.
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-c624-70c6-d001-e1f2a3b4c524
        title: 'Bài 24: Admin Portal & Self-service Operations'
        slug: bai-24-admin-portal-self-service-operations
        description: >-
          Super admin portal: tenant management, usage monitoring. Tenant admin portal: user management, settings, billing. Self-service troubleshooting.
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c625-70c6-d001-e1f2a3b4c525
        title: 'Bài 25: Case Studies - Slack, Notion, Atlassian & Linear'
        slug: bai-25-case-studies-slack-notion-atlassian-linear
        description: >-
          Phân tích kiến trúc SaaS thực tế: Slack (enterprise-grade), Notion (collaborative), Atlassian (marketplace), Linear (performance-first). Lessons learned.
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
---
