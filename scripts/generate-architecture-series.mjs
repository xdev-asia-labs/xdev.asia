#!/usr/bin/env node
/**
 * Generate remaining lesson files for all architecture series.
 * Each lesson gets proper frontmatter + structured content.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE = path.join(__dirname, '..', 'content', 'series', 'architecture');
const AUTHOR = {
  id: '019c9616-d2b4-713f-9b2c-40e2e92a05cf',
  name: 'Duy Tran',
  avatar: 'avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg'
};
const CATEGORY = {
  id: '019d8a21-b200-7001-c001-a1b2c3d4e5f6',
  name: 'Kiến trúc hệ thống',
  slug: 'kien-truc-he-thong'
};

// ============================================================
// SERIES DEFINITIONS
// ============================================================

const SERIES = [
  // ---- 1. FINTECH (remaining lessons 9-25) ----
  {
    seriesId: '019d8a21-c500-7005-d001-e1f2a3b4c5d6',
    seriesTitle: 'Kiến trúc FinTech & Payment Platform',
    seriesSlug: 'kien-truc-fintech-payment-platform',
    idPrefix: '019d8a21-c5',
    skipIndex: true, // already created
    lessons: [
      // Ch3 remaining
      { num: 9, chapterDir: '03-phan-3-digital-wallet-ledger-system', sectionTitle: 'Phần 3: Digital Wallet & Ledger System',
        title: 'Bài 9: Double-Entry Ledger System - Accounting Engine', slug: 'bai-9-double-entry-ledger-system-accounting-engine',
        desc: 'Nguyên lý kế toán kép trong FinTech. Thiết kế ledger schema: accounts, journal entries, postings. Immutable append-only ledger. Chart of Accounts design cho payment platform.', mins: 120 },
      { num: 10, chapterDir: '03-phan-3-digital-wallet-ledger-system', sectionTitle: 'Phần 3: Digital Wallet & Ledger System',
        title: 'Bài 10: Transaction Processing - ACID, Idempotency & Saga Pattern', slug: 'bai-10-transaction-processing-acid-idempotency-saga-pattern',
        desc: 'Đảm bảo consistency trong financial transactions. ACID properties, Saga pattern cho distributed transactions. Idempotency keys và deduplication. Compensating transactions.', mins: 120 },
      { num: 11, chapterDir: '03-phan-3-digital-wallet-ledger-system', sectionTitle: 'Phần 3: Digital Wallet & Ledger System',
        title: 'Bài 11: Currency & Exchange Rate Engine - Multi-currency Support', slug: 'bai-11-currency-exchange-rate-engine-multi-currency',
        desc: 'Thiết kế multi-currency system. Currency conversion engine và exchange rate management. Cross-border payment flows. Handling rounding và precision.', mins: 90 },
      // Ch4
      { num: 12, chapterDir: '04-phan-4-risk-management-fraud-detection', sectionTitle: 'Phần 4: Risk Management & Fraud Detection',
        title: 'Bài 12: Fraud Detection System - Rule Engine & ML Models', slug: 'bai-12-fraud-detection-system-rule-engine-ml-models',
        desc: 'Kiến trúc hệ thống phát hiện gian lận. Rule-based engine với dynamic rules. Machine Learning models cho fraud detection. Real-time scoring pipeline.', mins: 120 },
      { num: 13, chapterDir: '04-phan-4-risk-management-fraud-detection', sectionTitle: 'Phần 4: Risk Management & Fraud Detection',
        title: 'Bài 13: Anti-Money Laundering (AML) & KYC Pipeline', slug: 'bai-13-anti-money-laundering-aml-kyc-pipeline',
        desc: 'Thiết kế KYC pipeline: identity verification, document validation. AML screening: sanctions lists, PEP screening. Suspicious Activity Reports.', mins: 120 },
      { num: 14, chapterDir: '04-phan-4-risk-management-fraud-detection', sectionTitle: 'Phần 4: Risk Management & Fraud Detection',
        title: 'Bài 14: Risk Scoring & Real-time Transaction Monitoring', slug: 'bai-14-risk-scoring-real-time-transaction-monitoring',
        desc: 'Thiết kế Risk Scoring system. Real-time transaction monitoring với stream processing. Velocity checks, pattern detection. Risk-based authentication.', mins: 120 },
      // Ch5
      { num: 15, chapterDir: '05-phan-5-banking-lending-platform', sectionTitle: 'Phần 5: Banking & Lending Platform',
        title: 'Bài 15: Core Banking Architecture - Account Management', slug: 'bai-15-core-banking-architecture-account-management',
        desc: 'Kiến trúc Core Banking System hiện đại. Account management: savings, checking, loan accounts. Interest calculation engine. Integration với NAPAS, SWIFT.', mins: 120 },
      { num: 16, chapterDir: '05-phan-5-banking-lending-platform', sectionTitle: 'Phần 5: Banking & Lending Platform',
        title: 'Bài 16: Lending Platform - Loan Origination & Underwriting', slug: 'bai-16-lending-platform-loan-origination-underwriting',
        desc: 'Thiết kế Lending Platform end-to-end. Loan origination system (LOS): application, verification, approval workflow. Automated underwriting engine.', mins: 120 },
      { num: 17, chapterDir: '05-phan-5-banking-lending-platform', sectionTitle: 'Phần 5: Banking & Lending Platform',
        title: 'Bài 17: Credit Scoring Engine - Data Pipeline & ML', slug: 'bai-17-credit-scoring-engine-data-pipeline-ml',
        desc: 'Xây dựng Credit Scoring Engine. Alternative data sources. Feature engineering pipeline. ML models cho credit risk assessment. Integration với CIC Việt Nam.', mins: 120 },
      { num: 18, chapterDir: '05-phan-5-banking-lending-platform', sectionTitle: 'Phần 5: Banking & Lending Platform',
        title: 'Bài 18: Interest Calculation & Amortization Engine', slug: 'bai-18-interest-calculation-amortization-engine',
        desc: 'Thiết kế Interest Calculation Engine: simple/compound interest, day-count conventions. Amortization schedule. Prepayment, penalty, grace periods.', mins: 90 },
      // Ch6
      { num: 19, chapterDir: '06-phan-6-data-platform-analytics', sectionTitle: 'Phần 6: Data Platform & Analytics',
        title: 'Bài 19: Financial Data Pipeline - Event Streaming & CDC', slug: 'bai-19-financial-data-pipeline-event-streaming-cdc',
        desc: 'Thiết kế data pipeline cho FinTech. Event streaming với Kafka. Change Data Capture cho ledger replication. Data lake architecture cho financial data.', mins: 90 },
      { num: 20, chapterDir: '06-phan-6-data-platform-analytics', sectionTitle: 'Phần 6: Data Platform & Analytics',
        title: 'Bài 20: Reporting & Business Intelligence - Regulatory Reports', slug: 'bai-20-reporting-business-intelligence-regulatory-reports',
        desc: 'Hệ thống Reporting cho FinTech. Regulatory reporting. Business intelligence dashboards. Merchant analytics. Automated report generation.', mins: 90 },
      { num: 21, chapterDir: '06-phan-6-data-platform-analytics', sectionTitle: 'Phần 6: Data Platform & Analytics',
        title: 'Bài 21: Real-time Analytics & Dashboard', slug: 'bai-21-real-time-analytics-dashboard',
        desc: 'Real-time analytics cho payment platform. Transaction monitoring dashboard. KPI tracking: TPV, success rate. Anomaly detection.', mins: 90 },
      // Ch7
      { num: 22, chapterDir: '07-phan-7-infrastructure-security-production', sectionTitle: 'Phần 7: Infrastructure, Security & Production',
        title: 'Bài 22: Security Architecture - Encryption, HSM & Tokenization', slug: 'bai-22-security-architecture-encryption-hsm-tokenization',
        desc: 'Security architecture cho FinTech. End-to-end encryption. Hardware Security Module (HSM). Tokenization cho PAN data. PCI-DSS network segmentation.', mins: 120 },
      { num: 23, chapterDir: '07-phan-7-infrastructure-security-production', sectionTitle: 'Phần 7: Infrastructure, Security & Production',
        title: 'Bài 23: Infrastructure & High Availability - Multi-region & DR', slug: 'bai-23-infrastructure-high-availability-multi-region-dr',
        desc: 'Thiết kế infrastructure cho payment systems. Multi-region deployment. Active-active DR. Database replication. Zero-downtime deployment. 99.99%+ SLA.', mins: 120 },
      { num: 24, chapterDir: '07-phan-7-infrastructure-security-production', sectionTitle: 'Phần 7: Infrastructure, Security & Production',
        title: 'Bài 24: Performance & Scalability - Handling Peak Transactions', slug: 'bai-24-performance-scalability-handling-peak-transactions',
        desc: 'Performance optimization cho payment platform. Handling peak loads. Database optimization. Caching strategies. Load testing và capacity planning.', mins: 120 },
      { num: 25, chapterDir: '07-phan-7-infrastructure-security-production', sectionTitle: 'Phần 7: Infrastructure, Security & Production',
        title: 'Bài 25: Case Studies - VNPay, MoMo, GrabPay & Stripe', slug: 'bai-25-case-studies-vnpay-momo-grabpay-stripe',
        desc: 'Phân tích kiến trúc thực tế: VNPay, MoMo super app, GrabPay, Stripe. Lessons learned và best practices từ production systems.', mins: 120 },
    ]
  },

  // ---- 2. MULTI-TENANT SAAS ----
  {
    seriesId: '019d8a21-c600-7006-d001-e1f2a3b4c5d6',
    seriesTitle: 'Kiến trúc Multi-tenant SaaS Platform',
    seriesSlug: 'kien-truc-multi-tenant-saas-platform',
    idPrefix: '019d8a21-c6',
    skipIndex: false,
    indexMeta: {
      description: `Khóa học toàn diện về kiến trúc Multi-tenant SaaS Platform từ cơ bản đến production-ready. Bao gồm Tenant Isolation Strategies, Subscription & Billing Engine, Plugin/Extension Architecture, White-labeling, Onboarding Automation, Feature Flags, Usage Metering, và Self-service Admin Portal. Thiết kế hệ thống SaaS đáp ứng hàng nghìn tenant với chi phí tối ưu. Case studies từ Slack, Notion, Atlassian và các SaaS platform hàng đầu. Cập nhật 2026.`,
      featured_image: 'uploads/2026/03/multi-tenant-saas-series-banner-2026.png',
      level: 'intermediate', duration_hours: 75, lesson_count: 25,
      tags: ['SaaS','MultiTenant','Architecture','Microservices','Billing','FeatureFlags','DDD','Kubernetes','Scalability','Security','HandsOn','RealWorld']
    },
    lessons: [
      // Ch1: Foundation
      { num: 1, chapterDir: '01-phan-1-saas-foundations', sectionTitle: 'Phần 1: SaaS Foundations',
        title: 'Bài 1: Tổng quan SaaS - Business Models, Metrics & Architecture Patterns', slug: 'bai-1-tong-quan-saas-business-models-metrics-architecture',
        desc: 'SaaS business models (B2B, B2C, PLG, Sales-led). Key metrics: MRR, ARR, Churn, LTV, CAC. SaaS architecture patterns và evolution từ on-premise đến cloud-native.', mins: 90 },
      { num: 2, chapterDir: '01-phan-1-saas-foundations', sectionTitle: 'Phần 1: SaaS Foundations',
        title: 'Bài 2: Multi-tenancy Deep Dive - Isolation Strategies & Trade-offs', slug: 'bai-2-multi-tenancy-deep-dive-isolation-strategies-trade-offs',
        desc: 'Ba chiến lược tenant isolation: Silo (DB per tenant), Pool (shared DB), Bridge (schema per tenant). Trade-offs về cost, security, performance. Decision framework.', mins: 120 },
      { num: 3, chapterDir: '01-phan-1-saas-foundations', sectionTitle: 'Phần 1: SaaS Foundations',
        title: 'Bài 3: Platform Architecture Overview - DDD & Microservices cho SaaS', slug: 'bai-3-platform-architecture-overview-ddd-microservices-cho-saas',
        desc: 'Thiết kế kiến trúc tổng quan SaaS Platform. Bounded Contexts: Tenant, Identity, Billing, Product. Shared services vs tenant-specific services.', mins: 90 },
      // Ch2: Tenant Management
      { num: 4, chapterDir: '02-phan-2-tenant-management-identity', sectionTitle: 'Phần 2: Tenant Management & Identity',
        title: 'Bài 4: Tenant Lifecycle Management - Provisioning & Configuration', slug: 'bai-4-tenant-lifecycle-management-provisioning-configuration',
        desc: 'Tenant provisioning automation: infrastructure setup, database creation, configuration. Tenant-aware routing. Custom domains và branding per tenant.', mins: 120 },
      { num: 5, chapterDir: '02-phan-2-tenant-management-identity', sectionTitle: 'Phần 2: Tenant Management & Identity',
        title: 'Bài 5: Identity & Access Management - Multi-tenant Auth & SSO', slug: 'bai-5-identity-access-management-multi-tenant-auth-sso',
        desc: 'Multi-tenant authentication: organization-based login. SSO với SAML/OIDC. RBAC per tenant. Invitation flow. Identity provider federation.', mins: 120 },
      { num: 6, chapterDir: '02-phan-2-tenant-management-identity', sectionTitle: 'Phần 2: Tenant Management & Identity',
        title: 'Bài 6: Onboarding Engine - Self-service Signup & Guided Setup', slug: 'bai-6-onboarding-engine-self-service-signup-guided-setup',
        desc: 'Thiết kế onboarding flow: signup, verification, workspace creation, guided setup. Product-Led Growth patterns. Trial management. Activation metrics tracking.', mins: 90 },
      { num: 7, chapterDir: '02-phan-2-tenant-management-identity', sectionTitle: 'Phần 2: Tenant Management & Identity',
        title: 'Bài 7: Data Isolation & Multi-tenant Database Patterns', slug: 'bai-7-data-isolation-multi-tenant-database-patterns',
        desc: 'Row-level security (RLS) với PostgreSQL. Tenant context propagation. Query filtering patterns. Cross-tenant data protection. Tenant-aware migrations.', mins: 120 },
      // Ch3: Billing
      { num: 8, chapterDir: '03-phan-3-billing-subscription-engine', sectionTitle: 'Phần 3: Billing & Subscription Engine',
        title: 'Bài 8: Subscription Engine - Plans, Pricing & Lifecycle', slug: 'bai-8-subscription-engine-plans-pricing-lifecycle',
        desc: 'Thiết kế subscription system: plan management, pricing tiers, trial periods. Subscription lifecycle: create, upgrade, downgrade, cancel, pause. Grandfathering.', mins: 120 },
      { num: 9, chapterDir: '03-phan-3-billing-subscription-engine', sectionTitle: 'Phần 3: Billing & Subscription Engine',
        title: 'Bài 9: Usage Metering & Billing Engine', slug: 'bai-9-usage-metering-billing-engine',
        desc: 'Usage-based billing: metering infrastructure, aggregation pipelines. Invoice generation. Proration cho upgrades/downgrades. Tax calculation. Stripe/Paddle integration.', mins: 120 },
      { num: 10, chapterDir: '03-phan-3-billing-subscription-engine', sectionTitle: 'Phần 3: Billing & Subscription Engine',
        title: 'Bài 10: Entitlement System & Feature Gating', slug: 'bai-10-entitlement-system-feature-gating',
        desc: 'Entitlement engine: plan-based feature access. Feature flags cho progressive rollout. Rate limiting per plan. Quota management. Overage handling.', mins: 90 },
      // Ch4: Core Platform
      { num: 11, chapterDir: '04-phan-4-core-platform-features', sectionTitle: 'Phần 4: Core Platform Features',
        title: 'Bài 11: Feature Flags & Configuration Management', slug: 'bai-11-feature-flags-configuration-management',
        desc: 'Feature flag architecture: LaunchDarkly patterns. Tenant-specific configurations. A/B testing infrastructure. Dark launches. Kill switches.', mins: 90 },
      { num: 12, chapterDir: '04-phan-4-core-platform-features', sectionTitle: 'Phần 4: Core Platform Features',
        title: 'Bài 12: Plugin & Extension Architecture - Marketplace', slug: 'bai-12-plugin-extension-architecture-marketplace',
        desc: 'Thiết kế plugin system: extension points, hooks, sandboxed execution. Plugin marketplace. Third-party integrations. Webhook system. OAuth app platform.', mins: 120 },
      { num: 13, chapterDir: '04-phan-4-core-platform-features', sectionTitle: 'Phần 4: Core Platform Features',
        title: 'Bài 13: White-labeling & Custom Branding', slug: 'bai-13-white-labeling-custom-branding',
        desc: 'White-label architecture: custom domains, logo, colors, email templates. CSS theming engine. Reseller/partner program support. Custom login pages.', mins: 90 },
      { num: 14, chapterDir: '04-phan-4-core-platform-features', sectionTitle: 'Phần 4: Core Platform Features',
        title: 'Bài 14: Notification & Communication Engine', slug: 'bai-14-notification-communication-engine',
        desc: 'Multi-channel notification: email, push, in-app, SMS, Slack. Template engine. Preference management. Digest/batching. Delivery tracking.', mins: 90 },
      // Ch5: Data & API
      { num: 15, chapterDir: '05-phan-5-data-api-platform', sectionTitle: 'Phần 5: Data & API Platform',
        title: 'Bài 15: API Design & Developer Experience', slug: 'bai-15-api-design-developer-experience',
        desc: 'API-first SaaS: REST/GraphQL API design. API versioning strategy. Developer portal. SDK generation. Rate limiting per API key. Sandbox environment.', mins: 120 },
      { num: 16, chapterDir: '05-phan-5-data-api-platform', sectionTitle: 'Phần 5: Data & API Platform',
        title: 'Bài 16: Data Import/Export & Migration Tools', slug: 'bai-16-data-import-export-migration-tools',
        desc: 'Bulk data import với streaming. Export formats (CSV, JSON, Parquet). Data migration từ competitor platforms. ETL pipelines cho tenant data.', mins: 90 },
      { num: 17, chapterDir: '05-phan-5-data-api-platform', sectionTitle: 'Phần 5: Data & API Platform',
        title: 'Bài 17: Search & Analytics Per Tenant', slug: 'bai-17-search-analytics-per-tenant',
        desc: 'Full-text search cho multi-tenant (Elasticsearch/Meilisearch). Tenant data isolation trong search index. In-app analytics dashboard. Data export.', mins: 90 },
      { num: 18, chapterDir: '05-phan-5-data-api-platform', sectionTitle: 'Phần 5: Data & API Platform',
        title: 'Bài 18: Audit Logging & Compliance', slug: 'bai-18-audit-logging-compliance',
        desc: 'Immutable audit logs per tenant. Activity feed. Data retention policies. GDPR compliance: data deletion, export. SOC 2 requirements.', mins: 90 },
      // Ch6: Scale
      { num: 19, chapterDir: '06-phan-6-scaling-operations', sectionTitle: 'Phần 6: Scaling & Operations',
        title: 'Bài 19: Noisy Neighbor & Resource Isolation', slug: 'bai-19-noisy-neighbor-resource-isolation',
        desc: 'Noisy neighbor problem. Resource quotas per tenant. Fair scheduling. Throttling strategies. Tenant tiering: compute, storage, bandwidth limits.', mins: 120 },
      { num: 20, chapterDir: '06-phan-6-scaling-operations', sectionTitle: 'Phần 6: Scaling & Operations',
        title: 'Bài 20: Multi-region Deployment & Data Residency', slug: 'bai-20-multi-region-deployment-data-residency',
        desc: 'Multi-region SaaS deployment. Data residency requirements (GDPR, local laws). Tenant routing to nearest region. Cross-region replication strategies.', mins: 120 },
      { num: 21, chapterDir: '06-phan-6-scaling-operations', sectionTitle: 'Phần 6: Scaling & Operations',
        title: 'Bài 21: Tenant-aware CI/CD & Infrastructure Automation', slug: 'bai-21-tenant-aware-cicd-infrastructure-automation',
        desc: 'CI/CD cho SaaS: zero-downtime deployments. Canary releases per tenant group. Infrastructure as Code cho tenant provisioning. GitOps workflow.', mins: 90 },
      // Ch7: Production
      { num: 22, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 22: Observability & SRE cho Multi-tenant', slug: 'bai-22-observability-sre-cho-multi-tenant',
        desc: 'Tenant-aware monitoring: metrics, logs, traces per tenant. SLI/SLO per tier. Cost attribution. Tenant health dashboard. Incident management.', mins: 120 },
      { num: 23, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 23: Security Architecture cho SaaS', slug: 'bai-23-security-architecture-cho-saas',
        desc: 'SaaS security: tenant data encryption, key management per tenant. Vulnerability management. Penetration testing. SOC 2, ISO 27001 compliance.', mins: 120 },
      { num: 24, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 24: Admin Portal & Self-service Operations', slug: 'bai-24-admin-portal-self-service-operations',
        desc: 'Super admin portal: tenant management, usage monitoring. Tenant admin portal: user management, settings, billing. Self-service troubleshooting.', mins: 90 },
      { num: 25, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 25: Case Studies - Slack, Notion, Atlassian & Linear', slug: 'bai-25-case-studies-slack-notion-atlassian-linear',
        desc: 'Phân tích kiến trúc SaaS thực tế: Slack (enterprise-grade), Notion (collaborative), Atlassian (marketplace), Linear (performance-first). Lessons learned.', mins: 120 },
    ]
  },

  // ---- 3. DATA PLATFORM ----
  {
    seriesId: '019d8a21-c700-7007-d001-e1f2a3b4c5d6',
    seriesTitle: 'Kiến trúc Data Platform & Analytics',
    seriesSlug: 'kien-truc-data-platform-analytics',
    idPrefix: '019d8a21-c7',
    skipIndex: false,
    indexMeta: {
      description: `Khóa học toàn diện về kiến trúc Data Platform hiện đại từ Data Lakehouse đến Data Mesh. Bao gồm ETL/ELT Pipeline với Airflow & dbt, Stream Processing với Kafka & Flink, Data Governance & Cataloging, Data Quality Framework, Semantic Layer, và Real-time Analytics. Thiết kế nền tảng dữ liệu enterprise-grade phục vụ BI, ML, và data-driven decisions. Case studies: Uber, Netflix, Airbnb. Cập nhật 2026.`,
      featured_image: 'uploads/2026/03/data-platform-analytics-series-banner-2026.png',
      level: 'intermediate', duration_hours: 75, lesson_count: 25,
      tags: ['DataEngineering','DataPlatform','DataLakehouse','DataMesh','Kafka','Flink','dbt','Airflow','Analytics','DataGovernance','Iceberg','Spark','HandsOn','RealWorld']
    },
    lessons: [
      { num: 1, chapterDir: '01-phan-1-data-platform-foundations', sectionTitle: 'Phần 1: Data Platform Foundations',
        title: 'Bài 1: Tổng quan Data Platform - Evolution & Architecture Patterns', slug: 'bai-1-tong-quan-data-platform-evolution-architecture-patterns',
        desc: 'Evolution: Data Warehouse → Data Lake → Data Lakehouse → Data Mesh. Modern Data Stack. Data Platform architecture patterns và team topology.', mins: 90 },
      { num: 2, chapterDir: '01-phan-1-data-platform-foundations', sectionTitle: 'Phần 1: Data Platform Foundations',
        title: 'Bài 2: Data Lakehouse Architecture - Iceberg, Delta Lake & Hudi', slug: 'bai-2-data-lakehouse-architecture-iceberg-delta-lake-hudi',
        desc: 'Data Lakehouse: kết hợp tốt nhất của DW và Data Lake. Apache Iceberg, Delta Lake, Apache Hudi. Table formats, ACID transactions trên object storage.', mins: 120 },
      { num: 3, chapterDir: '01-phan-1-data-platform-foundations', sectionTitle: 'Phần 1: Data Platform Foundations',
        title: 'Bài 3: Data Mesh - Domain-Oriented Data Architecture', slug: 'bai-3-data-mesh-domain-oriented-data-architecture',
        desc: 'Data Mesh principles: domain ownership, data as product, self-serve platform, federated governance. Implementation patterns. Data contracts.', mins: 120 },
      { num: 4, chapterDir: '02-phan-2-data-ingestion-pipeline', sectionTitle: 'Phần 2: Data Ingestion & Pipeline',
        title: 'Bài 4: Batch Processing - ETL/ELT với Airflow & dbt', slug: 'bai-4-batch-processing-etl-elt-voi-airflow-dbt',
        desc: 'ETL vs ELT patterns. Apache Airflow: DAGs, operators, scheduling. dbt (data build tool): models, tests, documentation. Data transformation best practices.', mins: 120 },
      { num: 5, chapterDir: '02-phan-2-data-ingestion-pipeline', sectionTitle: 'Phần 2: Data Ingestion & Pipeline',
        title: 'Bài 5: Stream Processing - Kafka, Flink & Real-time Pipeline', slug: 'bai-5-stream-processing-kafka-flink-real-time-pipeline',
        desc: 'Apache Kafka deep-dive: partitions, consumer groups, exactly-once. Apache Flink: stateful stream processing, windowing, watermarks. Kafka Streams vs Flink.', mins: 120 },
      { num: 6, chapterDir: '02-phan-2-data-ingestion-pipeline', sectionTitle: 'Phần 2: Data Ingestion & Pipeline',
        title: 'Bài 6: Change Data Capture (CDC) - Debezium & Event Sourcing', slug: 'bai-6-change-data-capture-cdc-debezium-event-sourcing',
        desc: 'CDC concepts và use cases. Debezium: capture changes from PostgreSQL, MySQL. CDC → Kafka → Lakehouse pipeline. Event Sourcing patterns. Outbox pattern.', mins: 120 },
      { num: 7, chapterDir: '02-phan-2-data-ingestion-pipeline', sectionTitle: 'Phần 2: Data Ingestion & Pipeline',
        title: 'Bài 7: Data Integration & API Ingestion', slug: 'bai-7-data-integration-api-ingestion',
        desc: 'REST API data ingestion patterns. Webhook receivers. File-based ingestion (S3, SFTP). Singer/Meltano cho connector ecosystem. Incremental extraction.', mins: 90 },
      { num: 8, chapterDir: '03-phan-3-data-storage-modeling', sectionTitle: 'Phần 3: Data Storage & Modeling',
        title: 'Bài 8: Data Modeling - Dimensional Modeling & Activity Schema', slug: 'bai-8-data-modeling-dimensional-modeling-activity-schema',
        desc: 'Star schema, snowflake schema. Kimball vs Inmon. Activity schema. Slowly changing dimensions (SCD). Wide table vs normalized. Modeling for analytics.', mins: 120 },
      { num: 9, chapterDir: '03-phan-3-data-storage-modeling', sectionTitle: 'Phần 3: Data Storage & Modeling',
        title: 'Bài 9: Storage Layer - Object Storage, Columnar Formats & Partitioning', slug: 'bai-9-storage-layer-object-storage-columnar-formats-partitioning',
        desc: 'Object storage (S3/MinIO). Columnar formats: Parquet, ORC, Avro. Partitioning strategies. Compaction. Z-ordering. Storage tiering và lifecycle policies.', mins: 90 },
      { num: 10, chapterDir: '03-phan-3-data-storage-modeling', sectionTitle: 'Phần 3: Data Storage & Modeling',
        title: 'Bài 10: Query Engines - Trino, DuckDB & Materialized Views', slug: 'bai-10-query-engines-trino-duckdb-materialized-views',
        desc: 'Federated query với Trino/Presto. DuckDB cho embedded analytics. Materialized views và incremental computation. Query optimization.', mins: 90 },
      { num: 11, chapterDir: '04-phan-4-data-quality-governance', sectionTitle: 'Phần 4: Data Quality & Governance',
        title: 'Bài 11: Data Quality Framework - Testing, Monitoring & Alerting', slug: 'bai-11-data-quality-framework-testing-monitoring-alerting',
        desc: 'Data quality dimensions: accuracy, completeness, timeliness. Great Expectations, dbt tests, Soda. Data anomaly detection. SLA monitoring.', mins: 120 },
      { num: 12, chapterDir: '04-phan-4-data-quality-governance', sectionTitle: 'Phần 4: Data Quality & Governance',
        title: 'Bài 12: Data Catalog & Discovery - Metadata Management', slug: 'bai-12-data-catalog-discovery-metadata-management',
        desc: 'Data catalog: DataHub, OpenMetadata, Amundsen. Metadata management. Data lineage tracking. Data discovery và search. Business glossary.', mins: 90 },
      { num: 13, chapterDir: '04-phan-4-data-quality-governance', sectionTitle: 'Phần 4: Data Quality & Governance',
        title: 'Bài 13: Data Governance & Access Control', slug: 'bai-13-data-governance-access-control',
        desc: 'Data governance framework. Column-level access control. Data masking và anonymization. PII detection. Compliance (GDPR, PDPA). Data classification.', mins: 120 },
      { num: 14, chapterDir: '04-phan-4-data-quality-governance', sectionTitle: 'Phần 4: Data Quality & Governance',
        title: 'Bài 14: Data Contracts & Schema Evolution', slug: 'bai-14-data-contracts-schema-evolution',
        desc: 'Data contracts: producer-consumer agreements. Schema registry (Confluent, Buf). Schema evolution strategies. Breaking changes management. Versioning.', mins: 90 },
      { num: 15, chapterDir: '05-phan-5-analytics-semantic-layer', sectionTitle: 'Phần 5: Analytics & Semantic Layer',
        title: 'Bài 15: Semantic Layer - Metrics Store & Business Logic', slug: 'bai-15-semantic-layer-metrics-store-business-logic',
        desc: 'Semantic layer: single source of truth for metrics. Cube.js, MetricFlow (dbt). Metric definitions, dimensions, measures. Headless BI.', mins: 120 },
      { num: 16, chapterDir: '05-phan-5-analytics-semantic-layer', sectionTitle: 'Phần 5: Analytics & Semantic Layer',
        title: 'Bài 16: BI & Visualization - Dashboard Architecture', slug: 'bai-16-bi-visualization-dashboard-architecture',
        desc: 'BI platform architecture: Metabase, Superset, Looker. Embedded analytics. Dashboard performance optimization. Self-service analytics.', mins: 90 },
      { num: 17, chapterDir: '05-phan-5-analytics-semantic-layer', sectionTitle: 'Phần 5: Analytics & Semantic Layer',
        title: 'Bài 17: Real-time Analytics - ClickHouse & Streaming Dashboards', slug: 'bai-17-real-time-analytics-clickhouse-streaming-dashboards',
        desc: 'Real-time OLAP: ClickHouse, Apache Druid. Streaming aggregations. Real-time dashboards. Approximate query processing. Sampling strategies.', mins: 120 },
      { num: 18, chapterDir: '06-phan-6-ml-data-platform', sectionTitle: 'Phần 6: ML & Data Platform',
        title: 'Bài 18: Feature Store - Feature Engineering at Scale', slug: 'bai-18-feature-store-feature-engineering-at-scale',
        desc: 'Feature Store architecture: Feast, Tecton. Offline vs online feature serving. Feature pipelines. Feature reuse và discovery. Point-in-time correct joins.', mins: 120 },
      { num: 19, chapterDir: '06-phan-6-ml-data-platform', sectionTitle: 'Phần 6: ML & Data Platform',
        title: 'Bài 19: ML Pipeline Integration - Training & Serving Data', slug: 'bai-19-ml-pipeline-integration-training-serving-data',
        desc: 'Data platform cho ML: training data preparation, labeling pipelines. Model training data versioning (DVC). A/B testing data. Experiment tracking.', mins: 90 },
      { num: 20, chapterDir: '06-phan-6-ml-data-platform', sectionTitle: 'Phần 6: ML & Data Platform',
        title: 'Bài 20: Reverse ETL & Operational Analytics', slug: 'bai-20-reverse-etl-operational-analytics',
        desc: 'Reverse ETL: push data warehouse insights back to operational tools (CRM, marketing). Census, Hightouch patterns. Operational analytics use cases.', mins: 90 },
      { num: 21, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 21: Infrastructure & Cost Optimization', slug: 'bai-21-infrastructure-cost-optimization',
        desc: 'Data platform infrastructure: Kubernetes, Spark on K8s. Cost optimization: spot instances, auto-scaling, storage tiering. FinOps cho data teams.', mins: 120 },
      { num: 22, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 22: Data Platform Security & Privacy', slug: 'bai-22-data-platform-security-privacy',
        desc: 'Data platform security: encryption, access control, audit logging. Privacy engineering: differential privacy, k-anonymity. Data masking pipelines.', mins: 90 },
      { num: 23, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 23: DataOps & Platform Engineering', slug: 'bai-23-dataops-platform-engineering',
        desc: 'DataOps practices: CI/CD cho data pipelines, testing, monitoring. Self-serve data platform. Developer experience. Platform team topology.', mins: 90 },
      { num: 24, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 24: Observability cho Data Platform', slug: 'bai-24-observability-cho-data-platform',
        desc: 'Data observability: pipeline monitoring, data freshness, volume anomalies. SLA tracking. Incident response cho data issues. Monte Carlo patterns.', mins: 90 },
      { num: 25, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 25: Case Studies - Uber, Netflix, Airbnb & Spotify', slug: 'bai-25-case-studies-uber-netflix-airbnb-spotify',
        desc: 'Phân tích data platform thực tế: Uber (unified data platform), Netflix (data mesh), Airbnb (Minerva metrics), Spotify (event delivery). Lessons learned.', mins: 120 },
    ]
  },

  // ---- 4. REAL-TIME & IoT ----
  {
    seriesId: '019d8a21-c800-7008-d001-e1f2a3b4c5d6',
    seriesTitle: 'Kiến trúc Real-time & IoT Platform',
    seriesSlug: 'kien-truc-real-time-iot-platform',
    idPrefix: '019d8a21-c8',
    skipIndex: false,
    indexMeta: {
      description: `Khóa học toàn diện về kiến trúc Real-time và IoT Platform. Bao gồm MQTT Protocol, Edge Computing, Digital Twin, Time-Series Database (TimescaleDB, InfluxDB), Stream Processing, Device Management, OTA Updates, Real-time Monitoring Dashboard. Ứng dụng trong Smart Factory, Smart Building, Connected Vehicles, và Agriculture IoT. Case studies thực tế từ AWS IoT, Azure IoT, và các hệ thống Industrial IoT. Cập nhật 2026.`,
      featured_image: 'uploads/2026/03/realtime-iot-platform-series-banner-2026.png',
      level: 'intermediate', duration_hours: 75, lesson_count: 25,
      tags: ['IoT','RealTime','MQTT','EdgeComputing','DigitalTwin','TimeSeries','StreamProcessing','Kafka','Kubernetes','Embedded','HandsOn','RealWorld']
    },
    lessons: [
      { num: 1, chapterDir: '01-phan-1-iot-foundations', sectionTitle: 'Phần 1: IoT Foundations',
        title: 'Bài 1: Tổng quan IoT Platform - Architecture & Ecosystem', slug: 'bai-1-tong-quan-iot-platform-architecture-ecosystem',
        desc: 'IoT ecosystem overview. IoT architecture layers: device, gateway, cloud, application. IoT protocols comparison. Industry 4.0 và digital transformation.', mins: 90 },
      { num: 2, chapterDir: '01-phan-1-iot-foundations', sectionTitle: 'Phần 1: IoT Foundations',
        title: 'Bài 2: IoT Protocols - MQTT, CoAP, AMQP & WebSocket', slug: 'bai-2-iot-protocols-mqtt-coap-amqp-websocket',
        desc: 'MQTT deep-dive: QoS levels, retained messages, will messages. CoAP cho constrained devices. AMQP cho enterprise. WebSocket cho real-time web. Protocol selection guide.', mins: 120 },
      { num: 3, chapterDir: '01-phan-1-iot-foundations', sectionTitle: 'Phần 1: IoT Foundations',
        title: 'Bài 3: Platform Architecture Overview - Cloud-Edge Hybrid', slug: 'bai-3-platform-architecture-overview-cloud-edge-hybrid',
        desc: 'Thiết kế kiến trúc IoT Platform: cloud-edge hybrid. Message broker (EMQX, HiveMQ). Rule engine. Device registry. Data pipeline architecture.', mins: 90 },
      { num: 4, chapterDir: '02-phan-2-device-connectivity', sectionTitle: 'Phần 2: Device & Connectivity',
        title: 'Bài 4: Device Management - Provisioning, Registry & Lifecycle', slug: 'bai-4-device-management-provisioning-registry-lifecycle',
        desc: 'Device provisioning: zero-touch, certificate-based. Device registry và metadata. Device lifecycle: onboard, active, maintenance, decommission. Fleet management.', mins: 120 },
      { num: 5, chapterDir: '02-phan-2-device-connectivity', sectionTitle: 'Phần 2: Device & Connectivity',
        title: 'Bài 5: IoT Security - Device Authentication & Encryption', slug: 'bai-5-iot-security-device-authentication-encryption',
        desc: 'IoT security challenges. X.509 certificates. TLS/DTLS. Device identity. Secure boot. Firmware signing. Network segmentation. Zero Trust cho IoT.', mins: 120 },
      { num: 6, chapterDir: '02-phan-2-device-connectivity', sectionTitle: 'Phần 2: Device & Connectivity',
        title: 'Bài 6: OTA Updates & Remote Configuration', slug: 'bai-6-ota-updates-remote-configuration',
        desc: 'Over-the-Air firmware updates: A/B partition, rollback. Delta updates. Configuration management. Remote diagnostics. Device shadow/twin state.', mins: 90 },
      { num: 7, chapterDir: '02-phan-2-device-connectivity', sectionTitle: 'Phần 2: Device & Connectivity',
        title: 'Bài 7: Gateway Architecture & Protocol Translation', slug: 'bai-7-gateway-architecture-protocol-translation',
        desc: 'IoT Gateway: protocol translation, local processing, store-and-forward. Edge gateway vs cloud gateway. Modbus/BACnet → MQTT translation. Gateway clustering.', mins: 90 },
      { num: 8, chapterDir: '03-phan-3-edge-computing', sectionTitle: 'Phần 3: Edge Computing',
        title: 'Bài 8: Edge Computing Architecture - Processing at the Edge', slug: 'bai-8-edge-computing-architecture-processing-at-the-edge',
        desc: 'Edge computing: why và when. Edge deployment models. Edge runtime (K3s, KubeEdge). Edge AI inference. Data filtering và aggregation at edge.', mins: 120 },
      { num: 9, chapterDir: '03-phan-3-edge-computing', sectionTitle: 'Phần 3: Edge Computing',
        title: 'Bài 9: Edge AI & On-device Inference', slug: 'bai-9-edge-ai-on-device-inference',
        desc: 'Edge AI: TensorRT, ONNX Runtime, TFLite. Model optimization: quantization, pruning. On-device inference vs cloud inference trade-offs. Vision at the edge.', mins: 120 },
      { num: 10, chapterDir: '03-phan-3-edge-computing', sectionTitle: 'Phần 3: Edge Computing',
        title: 'Bài 10: Edge-Cloud Synchronization & Offline Mode', slug: 'bai-10-edge-cloud-synchronization-offline-mode',
        desc: 'Edge-cloud data sync strategies. Store-and-forward. Conflict resolution. Offline-first architecture. Eventually consistent device state.', mins: 90 },
      { num: 11, chapterDir: '04-phan-4-data-processing-storage', sectionTitle: 'Phần 4: Data Processing & Storage',
        title: 'Bài 11: Time-Series Database - TimescaleDB, InfluxDB & QuestDB', slug: 'bai-11-time-series-database-timescaledb-influxdb-questdb',
        desc: 'Time-series data patterns. TimescaleDB: hypertables, continuous aggregates. InfluxDB: Flux query language. QuestDB: SQL for time-series. Comparison và selection.', mins: 120 },
      { num: 12, chapterDir: '04-phan-4-data-processing-storage', sectionTitle: 'Phần 4: Data Processing & Storage',
        title: 'Bài 12: IoT Data Pipeline - Ingestion, Processing & Storage', slug: 'bai-12-iot-data-pipeline-ingestion-processing-storage',
        desc: 'IoT data pipeline architecture. High-throughput ingestion (millions messages/sec). Stream processing: filtering, enrichment, aggregation. Hot/warm/cold storage.', mins: 120 },
      { num: 13, chapterDir: '04-phan-4-data-processing-storage', sectionTitle: 'Phần 4: Data Processing & Storage',
        title: 'Bài 13: Rule Engine & Complex Event Processing', slug: 'bai-13-rule-engine-complex-event-processing',
        desc: 'IoT Rule Engine: event-condition-action. Complex Event Processing (CEP). Pattern detection. Alerting pipelines. Dynamic rule management.', mins: 120 },
      { num: 14, chapterDir: '05-phan-5-digital-twin-visualization', sectionTitle: 'Phần 5: Digital Twin & Visualization',
        title: 'Bài 14: Digital Twin Architecture - Virtual Representation', slug: 'bai-14-digital-twin-architecture-virtual-representation',
        desc: 'Digital Twin concepts. Twin definition language. State synchronization. Simulation engine. Predictive maintenance với digital twins. DTDL (Digital Twin Definition Language).', mins: 120 },
      { num: 15, chapterDir: '05-phan-5-digital-twin-visualization', sectionTitle: 'Phần 5: Digital Twin & Visualization',
        title: 'Bài 15: Real-time Monitoring Dashboard & Visualization', slug: 'bai-15-real-time-monitoring-dashboard-visualization',
        desc: 'Real-time dashboard architecture. Grafana cho IoT. WebSocket-based live updates. 3D visualization. Geospatial dashboards. Alert management UI.', mins: 90 },
      { num: 16, chapterDir: '05-phan-5-digital-twin-visualization', sectionTitle: 'Phần 5: Digital Twin & Visualization',
        title: 'Bài 16: Predictive Maintenance & Anomaly Detection', slug: 'bai-16-predictive-maintenance-anomaly-detection',
        desc: 'Predictive maintenance: condition monitoring, failure prediction. Anomaly detection algorithms. ML models cho sensor data. Remaining Useful Life (RUL) estimation.', mins: 120 },
      { num: 17, chapterDir: '06-phan-6-industry-applications', sectionTitle: 'Phần 6: Industry Applications',
        title: 'Bài 17: Smart Factory - Industrial IoT (IIoT) Architecture', slug: 'bai-17-smart-factory-industrial-iot-iiot-architecture',
        desc: 'IIoT architecture: OPC UA, ISA-95 levels. Manufacturing Execution System (MES). Production monitoring. Quality control với vision AI. OEE tracking.', mins: 120 },
      { num: 18, chapterDir: '06-phan-6-industry-applications', sectionTitle: 'Phần 6: Industry Applications',
        title: 'Bài 18: Smart Building & Energy Management', slug: 'bai-18-smart-building-energy-management',
        desc: 'Smart building architecture: BACnet, KNX integration. HVAC optimization. Occupancy detection. Energy monitoring và optimization. Building Management System (BMS).', mins: 90 },
      { num: 19, chapterDir: '06-phan-6-industry-applications', sectionTitle: 'Phần 6: Industry Applications',
        title: 'Bài 19: Connected Vehicles & Fleet Management', slug: 'bai-19-connected-vehicles-fleet-management',
        desc: 'Connected vehicle architecture. Telematics data collection. Fleet tracking và route optimization. Driver behavior analysis. Vehicle diagnostics (OBD-II).', mins: 90 },
      { num: 20, chapterDir: '06-phan-6-industry-applications', sectionTitle: 'Phần 6: Industry Applications',
        title: 'Bài 20: Agriculture IoT & Environmental Monitoring', slug: 'bai-20-agriculture-iot-environmental-monitoring',
        desc: 'AgriTech IoT: soil sensors, weather stations, irrigation control. Precision farming. Environmental monitoring: air quality, water quality. LoRaWAN cho nông nghiệp.', mins: 90 },
      { num: 21, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 21: Scalability - Handling Millions of Devices', slug: 'bai-21-scalability-handling-millions-of-devices',
        desc: 'Scaling IoT platform: connection management, message routing at scale. MQTT broker clustering. Partitioning strategies. Auto-scaling device connections.', mins: 120 },
      { num: 22, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 22: IoT Platform on Kubernetes', slug: 'bai-22-iot-platform-on-kubernetes',
        desc: 'Deploying IoT platform on K8s. EMQX operator. TimescaleDB on K8s. Edge K3s clusters. GitOps cho IoT infrastructure. Multi-cluster management.', mins: 120 },
      { num: 23, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 23: IoT Data Analytics & Machine Learning', slug: 'bai-23-iot-data-analytics-machine-learning',
        desc: 'IoT analytics architecture. Batch analytics trên sensor data. ML pipeline cho IoT: feature engineering from time-series. AutoML cho predictive models.', mins: 90 },
      { num: 24, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 24: Observability & Monitoring cho IoT Platform', slug: 'bai-24-observability-monitoring-cho-iot-platform',
        desc: 'IoT platform monitoring: device health, message throughput, latency. Network monitoring. Alert management. Incident response cho IoT at scale.', mins: 90 },
      { num: 25, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 25: Case Studies - AWS IoT, Azure IoT & Bosch IoT', slug: 'bai-25-case-studies-aws-iot-azure-iot-bosch-iot',
        desc: 'Phân tích IoT platform thực tế: AWS IoT Core (serverless), Azure IoT Hub (enterprise), Bosch IoT Suite (industrial). Open-source alternatives. Lessons learned.', mins: 120 },
    ]
  },

  // ---- 5. EDTECH / LMS ----
  {
    seriesId: '019d8a21-c900-7009-d001-e1f2a3b4c5d6',
    seriesTitle: 'Kiến trúc EdTech & LMS Platform',
    seriesSlug: 'kien-truc-edtech-lms-platform',
    idPrefix: '019d8a21-c9',
    skipIndex: false,
    indexMeta: {
      description: `Khóa học toàn diện về kiến trúc EdTech và Learning Management System (LMS) Platform. Bao gồm Course Management, Video Delivery (HLS/DASH), Assessment Engine, Gamification, Adaptive Learning, Real-time Collaboration, Learning Analytics, và Content Authoring Tools. Thiết kế hệ thống phục vụ từ startup EdTech đến enterprise training platform. Case studies: Coursera, Udemy, Duolingo. Cập nhật 2026.`,
      featured_image: 'uploads/2026/03/edtech-lms-platform-series-banner-2026.png',
      level: 'intermediate', duration_hours: 75, lesson_count: 25,
      tags: ['EdTech','LMS','ELearning','VideoStreaming','Assessment','Gamification','AdaptiveLearning','Collaboration','Analytics','ContentManagement','HandsOn','RealWorld']
    },
    lessons: [
      { num: 1, chapterDir: '01-phan-1-edtech-foundations', sectionTitle: 'Phần 1: EdTech Foundations',
        title: 'Bài 1: Tổng quan EdTech - Domain Analysis & Business Models', slug: 'bai-1-tong-quan-edtech-domain-analysis-business-models',
        desc: 'EdTech landscape: MOOCs, corporate training, K-12, language learning. Business models: subscription, marketplace, freemium. EdTech market tại Việt Nam.', mins: 90 },
      { num: 2, chapterDir: '01-phan-1-edtech-foundations', sectionTitle: 'Phần 1: EdTech Foundations',
        title: 'Bài 2: LMS Platform Architecture - Microservices & DDD', slug: 'bai-2-lms-platform-architecture-microservices-ddd',
        desc: 'Kiến trúc tổng quan LMS Platform. Bounded Contexts: Course, User, Assessment, Content, Analytics. Service topology và communication patterns.', mins: 90 },
      { num: 3, chapterDir: '01-phan-1-edtech-foundations', sectionTitle: 'Phần 1: EdTech Foundations',
        title: 'Bài 3: Learning Standards - SCORM, xAPI & LTI', slug: 'bai-3-learning-standards-scorm-xapi-lti',
        desc: 'SCORM 1.2/2004: course packaging, runtime communication. xAPI (Experience API): learning statements, LRS. LTI (Learning Tools Interoperability). Compliance implementation.', mins: 90 },
      { num: 4, chapterDir: '02-phan-2-course-content-management', sectionTitle: 'Phần 2: Course & Content Management',
        title: 'Bài 4: Course Management System - Curriculum & Enrollment', slug: 'bai-4-course-management-system-curriculum-enrollment',
        desc: 'Course modeling: courses, modules, lessons, resources. Curriculum planning. Enrollment engine. Prerequisites và learning paths. Course versioning.', mins: 120 },
      { num: 5, chapterDir: '02-phan-2-course-content-management', sectionTitle: 'Phần 2: Course & Content Management',
        title: 'Bài 5: Content Authoring & Rich Media', slug: 'bai-5-content-authoring-rich-media',
        desc: 'Content authoring tools: rich text editor, drag-and-drop builder. Interactive content: H5P, embedded simulations. Content versioning. Multi-format support.', mins: 90 },
      { num: 6, chapterDir: '02-phan-2-course-content-management', sectionTitle: 'Phần 2: Course & Content Management',
        title: 'Bài 6: Video Delivery - HLS, DASH & Adaptive Streaming', slug: 'bai-6-video-delivery-hls-dash-adaptive-streaming',
        desc: 'Video platform architecture: transcoding pipeline, adaptive bitrate streaming (HLS/DASH). CDN distribution. Video player integration. DRM protection. Subtitle management.', mins: 120 },
      { num: 7, chapterDir: '02-phan-2-course-content-management', sectionTitle: 'Phần 2: Course & Content Management',
        title: 'Bài 7: Live Class & Webinar Architecture', slug: 'bai-7-live-class-webinar-architecture',
        desc: 'Live streaming architecture: WebRTC, SFU/MCU. Virtual classroom features: screen sharing, whiteboard, chat. Recording và playback. Breakout rooms.', mins: 120 },
      { num: 8, chapterDir: '03-phan-3-assessment-gamification', sectionTitle: 'Phần 3: Assessment & Gamification',
        title: 'Bài 8: Assessment Engine - Question Bank & Quiz System', slug: 'bai-8-assessment-engine-question-bank-quiz-system',
        desc: 'Question types: MCQ, coding, essay, matching. Question bank management. Quiz generation algorithms. Anti-cheating: proctoring, randomization, time limits.', mins: 120 },
      { num: 9, chapterDir: '03-phan-3-assessment-gamification', sectionTitle: 'Phần 3: Assessment & Gamification',
        title: 'Bài 9: Coding Assessment & Auto-grading', slug: 'bai-9-coding-assessment-auto-grading',
        desc: 'Online code editor (Monaco/CodeMirror). Sandboxed code execution. Test case runner. Plagiarism detection. Code review workflow. Multi-language support.', mins: 120 },
      { num: 10, chapterDir: '03-phan-3-assessment-gamification', sectionTitle: 'Phần 3: Assessment & Gamification',
        title: 'Bài 10: Gamification Engine - Points, Badges & Leaderboards', slug: 'bai-10-gamification-engine-points-badges-leaderboards',
        desc: 'Gamification architecture: XP system, achievement badges, streaks. Leaderboard (global, friends, class). Progress tracking. Spaced repetition integration.', mins: 90 },
      { num: 11, chapterDir: '03-phan-3-assessment-gamification', sectionTitle: 'Phần 3: Assessment & Gamification',
        title: 'Bài 11: Certificate Engine & Credential Verification', slug: 'bai-11-certificate-engine-credential-verification',
        desc: 'Digital certificate generation (PDF, blockchain-verified). Certificate templates. Credential verification API. Integration với LinkedIn. Digital badges (Open Badges).', mins: 90 },
      { num: 12, chapterDir: '04-phan-4-personalization-ai', sectionTitle: 'Phần 4: Personalization & AI',
        title: 'Bài 12: Adaptive Learning - Personalized Learning Paths', slug: 'bai-12-adaptive-learning-personalized-learning-paths',
        desc: 'Adaptive learning algorithms. Knowledge graph modeling. Skill assessment và gap analysis. Personalized content recommendation. Learning path optimization.', mins: 120 },
      { num: 13, chapterDir: '04-phan-4-personalization-ai', sectionTitle: 'Phần 4: Personalization & AI',
        title: 'Bài 13: AI Tutor & Learning Assistant', slug: 'bai-13-ai-tutor-learning-assistant',
        desc: 'AI-powered tutoring: RAG over course content. Socratic method prompting. Code explanation và debugging assistant. Q&A bot. Content summarization.', mins: 120 },
      { num: 14, chapterDir: '04-phan-4-personalization-ai', sectionTitle: 'Phần 4: Personalization & AI',
        title: 'Bài 14: Recommendation Engine - What to Learn Next', slug: 'bai-14-recommendation-engine-what-to-learn-next',
        desc: 'Course recommendation: collaborative filtering, content-based, hybrid. Skill-based recommendations. Learning goal matching. Cold start problem.', mins: 90 },
      { num: 15, chapterDir: '05-phan-5-collaboration-community', sectionTitle: 'Phần 5: Collaboration & Community',
        title: 'Bài 15: Real-time Collaboration - Shared Workspace', slug: 'bai-15-real-time-collaboration-shared-workspace',
        desc: 'Real-time collaborative editing (CRDT/OT). Shared code editors. Collaborative whiteboard. Group projects. Peer programming sessions.', mins: 120 },
      { num: 16, chapterDir: '05-phan-5-collaboration-community', sectionTitle: 'Phần 5: Collaboration & Community',
        title: 'Bài 16: Discussion Forum & Social Learning', slug: 'bai-16-discussion-forum-social-learning',
        desc: 'Forum architecture: threads, replies, voting. Q&A system (Stack Overflow-style). Course-scoped discussions. Moderation tools. Notification system.', mins: 90 },
      { num: 17, chapterDir: '05-phan-5-collaboration-community', sectionTitle: 'Phần 5: Collaboration & Community',
        title: 'Bài 17: Notification & Engagement Engine', slug: 'bai-17-notification-engagement-engine',
        desc: 'Multi-channel notifications: email, push, in-app. Learning reminders. Streak notifications. Re-engagement campaigns. A/B testing cho engagement.', mins: 90 },
      { num: 18, chapterDir: '06-phan-6-analytics-business', sectionTitle: 'Phần 6: Analytics & Business',
        title: 'Bài 18: Learning Analytics - Tracking & Insights', slug: 'bai-18-learning-analytics-tracking-insights',
        desc: 'Learning analytics: completion rates, engagement metrics, assessment performance. Student at-risk detection. Instructor dashboard. xAPI analytics.', mins: 120 },
      { num: 19, chapterDir: '06-phan-6-analytics-business', sectionTitle: 'Phần 6: Analytics & Business',
        title: 'Bài 19: Marketplace & Instructor Platform', slug: 'bai-19-marketplace-instructor-platform',
        desc: 'Course marketplace architecture: instructor onboarding, course review, pricing. Revenue sharing engine. Instructor analytics. Creator tools.', mins: 90 },
      { num: 20, chapterDir: '06-phan-6-analytics-business', sectionTitle: 'Phần 6: Analytics & Business',
        title: 'Bài 20: Payment & Subscription cho EdTech', slug: 'bai-20-payment-subscription-cho-edtech',
        desc: 'EdTech billing: course purchase, subscription, team licenses. Coupon/discount engine. Refund policy. Tax handling. Revenue recognition.', mins: 90 },
      { num: 21, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 21: Mobile-first Architecture & Offline Learning', slug: 'bai-21-mobile-first-architecture-offline-learning',
        desc: 'Mobile LMS architecture. Offline content download. Progress sync. Push notifications. Native vs hybrid app. Responsive video player.', mins: 90 },
      { num: 22, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 22: Scalability & Performance cho EdTech', slug: 'bai-22-scalability-performance-cho-edtech',
        desc: 'Handling live class peaks. Video CDN optimization. Database sharding cho user data. Caching strategies. Load testing for exam periods.', mins: 120 },
      { num: 23, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 23: Security & Privacy cho EdTech', slug: 'bai-23-security-privacy-cho-edtech',
        desc: 'EdTech security: COPPA compliance (children data), FERPA. Content DRM. Anti-piracy. Student data privacy. Proctoring ethics.', mins: 90 },
      { num: 24, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 24: Accessibility & Internationalization', slug: 'bai-24-accessibility-internationalization',
        desc: 'WCAG 2.1 compliance. Screen reader support. Keyboard navigation. Multi-language platform (i18n). RTL support. Auto-translation. Localized content.', mins: 90 },
      { num: 25, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 25: Case Studies - Coursera, Udemy, Duolingo & Khan Academy', slug: 'bai-25-case-studies-coursera-udemy-duolingo-khan-academy',
        desc: 'Phân tích EdTech platform thực tế: Coursera (degree programs), Udemy (marketplace), Duolingo (gamification), Khan Academy (free education). Lessons learned.', mins: 120 },
    ]
  },

  // ---- 6. PLATFORM ENGINEERING ----
  {
    seriesId: '019d8a21-ca00-700a-d001-e1f2a3b4c5d6',
    seriesTitle: 'Kiến trúc Platform Engineering & Internal Developer Portal',
    seriesSlug: 'kien-truc-platform-engineering-internal-developer-portal',
    idPrefix: '019d8a21-ca',
    skipIndex: false,
    indexMeta: {
      description: `Khóa học toàn diện về Platform Engineering và Internal Developer Portal (IDP). Bao gồm Backstage, Service Catalog, Golden Paths, Self-service Infrastructure, Developer Experience (DX), CI/CD Platform, Environment Management, và Internal Tools. Thiết kế nền tảng giúp developers tự phục vụ infrastructure, tăng developer productivity, giảm cognitive load. Case studies: Spotify (Backstage), Netflix, Airbnb. Cập nhật 2026.`,
      featured_image: 'uploads/2026/03/platform-engineering-series-banner-2026.png',
      level: 'intermediate', duration_hours: 70, lesson_count: 25,
      tags: ['PlatformEngineering','IDP','Backstage','DevEx','CICD','Kubernetes','InfraAsCode','SelfService','GitOps','SRE','GoldenPath','HandsOn','RealWorld']
    },
    lessons: [
      { num: 1, chapterDir: '01-phan-1-platform-engineering-foundations', sectionTitle: 'Phần 1: Platform Engineering Foundations',
        title: 'Bài 1: Tổng quan Platform Engineering - Why, What & How', slug: 'bai-1-tong-quan-platform-engineering-why-what-how',
        desc: 'Platform Engineering là gì. DevOps vs Platform Engineering. Internal Developer Platform (IDP) concept. Platform as a Product. Team Topologies cho platform teams.', mins: 90 },
      { num: 2, chapterDir: '01-phan-1-platform-engineering-foundations', sectionTitle: 'Phần 1: Platform Engineering Foundations',
        title: 'Bài 2: Developer Experience (DX) - Measuring & Improving', slug: 'bai-2-developer-experience-dx-measuring-improving',
        desc: 'Developer Experience: cognitive load, flow state, feedback loops. DORA metrics, SPACE framework. Developer surveys. Onboarding time. Time-to-first-deploy.', mins: 90 },
      { num: 3, chapterDir: '01-phan-1-platform-engineering-foundations', sectionTitle: 'Phần 1: Platform Engineering Foundations',
        title: 'Bài 3: Platform Architecture Overview - Layers & Components', slug: 'bai-3-platform-architecture-overview-layers-components',
        desc: 'IDP architecture layers: UI Portal, API, orchestration, integration. Platform capabilities map. Build vs buy decisions. Platform maturity model.', mins: 90 },
      { num: 4, chapterDir: '02-phan-2-developer-portal', sectionTitle: 'Phần 2: Developer Portal',
        title: 'Bài 4: Backstage - Internal Developer Portal', slug: 'bai-4-backstage-internal-developer-portal',
        desc: 'Spotify Backstage: architecture, plugins, catalog. Software catalog: components, APIs, resources. TechDocs integration. Customization và plugin development.', mins: 120 },
      { num: 5, chapterDir: '02-phan-2-developer-portal', sectionTitle: 'Phần 2: Developer Portal',
        title: 'Bài 5: Service Catalog & Software Templates', slug: 'bai-5-service-catalog-software-templates',
        desc: 'Service catalog: register, discover, manage services. Software templates (scaffolder): golden paths cho new services. Template customization. API documentation.', mins: 120 },
      { num: 6, chapterDir: '02-phan-2-developer-portal', sectionTitle: 'Phần 2: Developer Portal',
        title: 'Bài 6: API Portal & Documentation', slug: 'bai-6-api-portal-documentation',
        desc: 'API catalog: discovery, documentation, versioning. OpenAPI/AsyncAPI/GraphQL specs. API governance. Automated API docs generation. API health monitoring.', mins: 90 },
      { num: 7, chapterDir: '02-phan-2-developer-portal', sectionTitle: 'Phần 2: Developer Portal',
        title: 'Bài 7: Golden Paths & Paved Roads', slug: 'bai-7-golden-paths-paved-roads',
        desc: 'Golden paths: opinionated default workflows. Paved roads vs guardrails. Service creation golden path. Deployment golden path. Incident response golden path.', mins: 90 },
      { num: 8, chapterDir: '03-phan-3-self-service-infrastructure', sectionTitle: 'Phần 3: Self-service Infrastructure',
        title: 'Bài 8: Self-service Infrastructure - Provisioning & Management', slug: 'bai-8-self-service-infrastructure-provisioning-management',
        desc: 'Self-service infrastructure: request → approve → provision → manage. Infrastructure abstraction layers. Resource catalog. Cost visibility per request.', mins: 120 },
      { num: 9, chapterDir: '03-phan-3-self-service-infrastructure', sectionTitle: 'Phần 3: Self-service Infrastructure',
        title: 'Bài 9: Infrastructure as Code - Terraform, Crossplane & Pulumi', slug: 'bai-9-infrastructure-as-code-terraform-crossplane-pulumi',
        desc: 'IaC platforms: Terraform modules, Crossplane compositions, Pulumi programs. Platform abstractions over raw IaC. Self-service with guardrails. State management.', mins: 120 },
      { num: 10, chapterDir: '03-phan-3-self-service-infrastructure', sectionTitle: 'Phần 3: Self-service Infrastructure',
        title: 'Bài 10: Environment Management - Dev, Staging, Production', slug: 'bai-10-environment-management-dev-staging-production',
        desc: 'Environment management: ephemeral environments, preview environments. Environment parity. Namespace-based isolation. Cost optimization cho dev/staging.', mins: 90 },
      { num: 11, chapterDir: '03-phan-3-self-service-infrastructure', sectionTitle: 'Phần 3: Self-service Infrastructure',
        title: 'Bài 11: Database & Middleware Self-service', slug: 'bai-11-database-middleware-self-service',
        desc: 'Database provisioning: PostgreSQL, Redis, Kafka as self-service. Operators pattern. Backup automation. Schema migration. Connection management.', mins: 90 },
      { num: 12, chapterDir: '04-phan-4-cicd-platform', sectionTitle: 'Phần 4: CI/CD Platform',
        title: 'Bài 12: CI/CD Platform Architecture - Pipeline as Code', slug: 'bai-12-cicd-platform-architecture-pipeline-as-code',
        desc: 'CI/CD platform: shared pipelines, reusable workflows. GitHub Actions, GitLab CI, Tekton. Pipeline templates. Build caching. Artifact management.', mins: 120 },
      { num: 13, chapterDir: '04-phan-4-cicd-platform', sectionTitle: 'Phần 4: CI/CD Platform',
        title: 'Bài 13: GitOps & Deployment Automation', slug: 'bai-13-gitops-deployment-automation',
        desc: 'GitOps: ArgoCD, Flux. Deployment strategies: blue-green, canary, progressive. Rollback automation. Environment promotion. Drift detection.', mins: 120 },
      { num: 14, chapterDir: '04-phan-4-cicd-platform', sectionTitle: 'Phần 4: CI/CD Platform',
        title: 'Bài 14: Container & Image Management', slug: 'bai-14-container-image-management',
        desc: 'Container registry (Harbor). Image scanning & signing (Cosign). Base image management. Multi-arch builds. Image promotion pipeline. SBOM generation.', mins: 90 },
      { num: 15, chapterDir: '04-phan-4-cicd-platform', sectionTitle: 'Phần 4: CI/CD Platform',
        title: 'Bài 15: Testing Platform - Shift-left & Quality Gates', slug: 'bai-15-testing-platform-shift-left-quality-gates',
        desc: 'Testing infrastructure: test environments, test data management. Quality gates: code coverage, security scan, performance test. Flaky test detection.', mins: 90 },
      { num: 16, chapterDir: '05-phan-5-security-compliance-platform', sectionTitle: 'Phần 5: Security & Compliance Platform',
        title: 'Bài 16: Security Platform - Policy as Code', slug: 'bai-16-security-platform-policy-as-code',
        desc: 'Security platform: OPA/Gatekeeper, Kyverno. Policy as Code. Automated compliance checks. Vulnerability management platform. Secret management (Vault).', mins: 120 },
      { num: 17, chapterDir: '05-phan-5-security-compliance-platform', sectionTitle: 'Phần 5: Security & Compliance Platform',
        title: 'Bài 17: Supply Chain Security - SBOM & SLSA', slug: 'bai-17-supply-chain-security-sbom-slsa',
        desc: 'Software supply chain security. SBOM (Software Bill of Materials). SLSA framework. Dependency scanning. Signed builds. Provenance verification.', mins: 90 },
      { num: 18, chapterDir: '05-phan-5-security-compliance-platform', sectionTitle: 'Phần 5: Security & Compliance Platform',
        title: 'Bài 18: Cost Management & FinOps Platform', slug: 'bai-18-cost-management-finops-platform',
        desc: 'Cloud cost management: cost allocation per team/service. FinOps practices. Budget alerts. Resource right-sizing. Spot instance management. Showback/chargeback.', mins: 90 },
      { num: 19, chapterDir: '06-phan-6-observability-platform', sectionTitle: 'Phần 6: Observability Platform',
        title: 'Bài 19: Observability Platform - Metrics, Logs & Traces', slug: 'bai-19-observability-platform-metrics-logs-traces',
        desc: 'Unified observability: OpenTelemetry, Prometheus, Grafana, Loki, Tempo. Self-service dashboards. Alert routing. On-call management integration.', mins: 120 },
      { num: 20, chapterDir: '06-phan-6-observability-platform', sectionTitle: 'Phần 6: Observability Platform',
        title: 'Bài 20: SRE Platform - SLO, Error Budgets & Incident Management', slug: 'bai-20-sre-platform-slo-error-budgets-incident-management',
        desc: 'SRE practices: SLI/SLO/SLA definition. Error budget tracking. Incident management platform. Postmortem automation. Chaos engineering integration.', mins: 120 },
      { num: 21, chapterDir: '06-phan-6-observability-platform', sectionTitle: 'Phần 6: Observability Platform',
        title: 'Bài 21: Logging & Audit Platform', slug: 'bai-21-logging-audit-platform',
        desc: 'Centralized logging: ELK/EFK, Loki. Log aggregation at scale. Audit logging platform. Log-based alerting. Compliance logging requirements.', mins: 90 },
      { num: 22, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 22: Platform Team Organization & Operating Model', slug: 'bai-22-platform-team-organization-operating-model',
        desc: 'Platform team structure: team topologies, enabling teams. Platform product management. User research cho internal tools. Platform adoption strategy.', mins: 90 },
      { num: 23, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 23: Platform Migration & Adoption', slug: 'bai-23-platform-migration-adoption',
        desc: 'Migrating to new platform: phased adoption, incentives. Legacy system integration. Measuring platform adoption. Community building. Documentation.', mins: 90 },
      { num: 24, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 24: Measuring Platform Success - Metrics & ROI', slug: 'bai-24-measuring-platform-success-metrics-roi',
        desc: 'Platform success metrics: developer satisfaction, deployment frequency, lead time. ROI calculation. Platform maturity assessment. Continuous improvement.', mins: 90 },
      { num: 25, chapterDir: '07-phan-7-production-case-studies', sectionTitle: 'Phần 7: Production & Case Studies',
        title: 'Bài 25: Case Studies - Spotify, Netflix, Airbnb & Mercado Libre', slug: 'bai-25-case-studies-spotify-netflix-airbnb-mercado-libre',
        desc: 'Phân tích platform engineering thực tế: Spotify (Backstage origin), Netflix (full cycle dev), Airbnb (service mesh), Mercado Libre (platform at scale). Lessons learned.', mins: 120 },
    ]
  },

  // ---- 7. EVENT-DRIVEN MICROSERVICES ----
  {
    seriesId: '019d8a21-cb00-700b-d001-e1f2a3b4c5d6',
    seriesTitle: 'Kiến trúc Event-Driven Microservices chuyên sâu',
    seriesSlug: 'kien-truc-event-driven-microservices-chuyen-sau',
    idPrefix: '019d8a21-cb',
    skipIndex: false,
    indexMeta: {
      description: `Khóa học chuyên sâu về Event-Driven Microservices Architecture. Bao gồm Apache Kafka & Pulsar, Saga Pattern, CQRS & Event Sourcing, Outbox Pattern, Exactly-once Semantics, Schema Registry, Dead Letter Queue, và Choreography vs Orchestration. Thiết kế hệ thống microservices event-driven production-ready với consistency guarantees. Case studies: Uber, Wix, Booking.com. Cập nhật 2026.`,
      featured_image: 'uploads/2026/03/event-driven-microservices-series-banner-2026.png',
      level: 'intermediate', duration_hours: 80, lesson_count: 25,
      tags: ['EventDriven','Microservices','Kafka','CQRS','EventSourcing','Saga','DDD','DistributedSystems','Messaging','Pulsar','Patterns','HandsOn','RealWorld']
    },
    lessons: [
      { num: 1, chapterDir: '01-phan-1-event-driven-foundations', sectionTitle: 'Phần 1: Event-Driven Foundations',
        title: 'Bài 1: Tổng quan Event-Driven Architecture - Why Events Matter', slug: 'bai-1-tong-quan-event-driven-architecture-why-events-matter',
        desc: 'Event-Driven Architecture (EDA) fundamentals. Events vs Commands vs Queries. Temporal coupling vs event decoupling. EDA benefits và trade-offs.', mins: 90 },
      { num: 2, chapterDir: '01-phan-1-event-driven-foundations', sectionTitle: 'Phần 1: Event-Driven Foundations',
        title: 'Bài 2: Domain Events & Event Modeling', slug: 'bai-2-domain-events-event-modeling',
        desc: 'Domain Events trong DDD. Event Storming workshop. Event Modeling technique. Identifying events, commands, aggregates. Event naming conventions.', mins: 120 },
      { num: 3, chapterDir: '01-phan-1-event-driven-foundations', sectionTitle: 'Phần 1: Event-Driven Foundations',
        title: 'Bài 3: Messaging Patterns - Pub/Sub, Queue & Stream', slug: 'bai-3-messaging-patterns-pub-sub-queue-stream',
        desc: 'Messaging patterns: point-to-point, pub/sub, event streaming. Message brokers vs event streaming platforms. At-most-once, at-least-once, exactly-once delivery.', mins: 90 },
      { num: 4, chapterDir: '02-phan-2-kafka-deep-dive', sectionTitle: 'Phần 2: Apache Kafka Deep Dive',
        title: 'Bài 4: Kafka Architecture - Brokers, Partitions & Replication', slug: 'bai-4-kafka-architecture-brokers-partitions-replication',
        desc: 'Kafka internals: broker architecture, topic partitions, replication factor. ISR (In-Sync Replicas). Leader election. Log segments. Controller quorum (KRaft).', mins: 120 },
      { num: 5, chapterDir: '02-phan-2-kafka-deep-dive', sectionTitle: 'Phần 2: Apache Kafka Deep Dive',
        title: 'Bài 5: Kafka Producers & Consumers - Advanced Patterns', slug: 'bai-5-kafka-producers-consumers-advanced-patterns',
        desc: 'Producer: acks, batching, compression, idempotent producer. Consumer: consumer groups, offset management, rebalancing. Exactly-once semantics (EOS).', mins: 120 },
      { num: 6, chapterDir: '02-phan-2-kafka-deep-dive', sectionTitle: 'Phần 2: Apache Kafka Deep Dive',
        title: 'Bài 6: Kafka Streams & ksqlDB', slug: 'bai-6-kafka-streams-ksqldb',
        desc: 'Kafka Streams: KStream, KTable, windowing, joins. State stores. Interactive queries. ksqlDB: SQL over streams. Materialized views. Stream processing topologies.', mins: 120 },
      { num: 7, chapterDir: '02-phan-2-kafka-deep-dive', sectionTitle: 'Phần 2: Apache Kafka Deep Dive',
        title: 'Bài 7: Schema Registry & Data Serialization', slug: 'bai-7-schema-registry-data-serialization',
        desc: 'Schema Registry: Avro, Protobuf, JSON Schema. Schema evolution rules. Compatibility modes. Schema validation. Confluent Schema Registry vs Apicurio.', mins: 90 },
      { num: 8, chapterDir: '03-phan-3-event-sourcing-cqrs', sectionTitle: 'Phần 3: Event Sourcing & CQRS',
        title: 'Bài 8: Event Sourcing - Immutable Event Log as Source of Truth', slug: 'bai-8-event-sourcing-immutable-event-log-source-of-truth',
        desc: 'Event Sourcing fundamentals: event store, event replay, snapshots. Aggregate reconstruction. Temporal queries. Audit trail tự nhiên. Event versioning.', mins: 120 },
      { num: 9, chapterDir: '03-phan-3-event-sourcing-cqrs', sectionTitle: 'Phần 3: Event Sourcing & CQRS',
        title: 'Bài 9: CQRS - Command Query Responsibility Segregation', slug: 'bai-9-cqrs-command-query-responsibility-segregation',
        desc: 'CQRS pattern: separate read/write models. Command handlers và domain logic. Read model projections. Eventual consistency. When to use CQRS.', mins: 120 },
      { num: 10, chapterDir: '03-phan-3-event-sourcing-cqrs', sectionTitle: 'Phần 3: Event Sourcing & CQRS',
        title: 'Bài 10: Event Store Implementation - PostgreSQL & EventStoreDB', slug: 'bai-10-event-store-implementation-postgresql-eventstoredb',
        desc: 'Implementing event store: PostgreSQL-based (outbox), EventStoreDB, Axon Server. Event serialization. Subscription models. Projections engine.', mins: 120 },
      { num: 11, chapterDir: '03-phan-3-event-sourcing-cqrs', sectionTitle: 'Phần 3: Event Sourcing & CQRS',
        title: 'Bài 11: Projections & Read Model Patterns', slug: 'bai-11-projections-read-model-patterns',
        desc: 'Building read models from events. Projection patterns: inline, catch-up, live. Multi-model projections. Rebuilding projections. Handling projection failures.', mins: 90 },
      { num: 12, chapterDir: '04-phan-4-distributed-patterns', sectionTitle: 'Phần 4: Distributed Patterns',
        title: 'Bài 12: Saga Pattern - Managing Distributed Transactions', slug: 'bai-12-saga-pattern-managing-distributed-transactions',
        desc: 'Saga pattern deep-dive: choreography vs orchestration. Compensating transactions. Saga execution coordinator. Error handling. Saga state machine.', mins: 120 },
      { num: 13, chapterDir: '04-phan-4-distributed-patterns', sectionTitle: 'Phần 4: Distributed Patterns',
        title: 'Bài 13: Outbox Pattern & Reliable Event Publishing', slug: 'bai-13-outbox-pattern-reliable-event-publishing',
        desc: 'Transactional outbox pattern. Polling publisher vs CDC-based. Debezium outbox connector. Guaranteed event delivery. Ordering guarantees.', mins: 120 },
      { num: 14, chapterDir: '04-phan-4-distributed-patterns', sectionTitle: 'Phần 4: Distributed Patterns',
        title: 'Bài 14: Dead Letter Queue & Error Handling', slug: 'bai-14-dead-letter-queue-error-handling',
        desc: 'Dead Letter Queue (DLQ) patterns. Retry strategies: exponential backoff, circuit breaker. Poison pill handling. Error classification. DLQ reprocessing.', mins: 90 },
      { num: 15, chapterDir: '04-phan-4-distributed-patterns', sectionTitle: 'Phần 4: Distributed Patterns',
        title: 'Bài 15: Idempotency & Exactly-once Processing', slug: 'bai-15-idempotency-exactly-once-processing',
        desc: 'Idempotent consumers: deduplication strategies. Idempotency keys. Exactly-once vs effectively-once. Kafka transactional API. Consumer offset management.', mins: 120 },
      { num: 16, chapterDir: '05-phan-5-advanced-patterns', sectionTitle: 'Phần 5: Advanced Patterns',
        title: 'Bài 16: Event-Driven Microservices Communication Patterns', slug: 'bai-16-event-driven-microservices-communication-patterns',
        desc: 'Communication patterns: request-reply over events, event notification, event-carried state transfer. Hybrid sync+async patterns. API composition.', mins: 120 },
      { num: 17, chapterDir: '05-phan-5-advanced-patterns', sectionTitle: 'Phần 5: Advanced Patterns',
        title: 'Bài 17: Event-Driven Data Consistency & Conflict Resolution', slug: 'bai-17-event-driven-data-consistency-conflict-resolution',
        desc: 'Eventual consistency deep-dive. Conflict detection và resolution. Last-writer-wins vs merge. Vector clocks. CRDTs cho event-driven systems.', mins: 120 },
      { num: 18, chapterDir: '05-phan-5-advanced-patterns', sectionTitle: 'Phần 5: Advanced Patterns',
        title: 'Bài 18: Event Versioning & Schema Evolution', slug: 'bai-18-event-versioning-schema-evolution',
        desc: 'Event versioning strategies: weak schema, upcasting, event adapters. Breaking changes management. Multi-version consumers. Schema migration patterns.', mins: 90 },
      { num: 19, chapterDir: '05-phan-5-advanced-patterns', sectionTitle: 'Phần 5: Advanced Patterns',
        title: 'Bài 19: Process Manager & Workflow Engine', slug: 'bai-19-process-manager-workflow-engine',
        desc: 'Process Manager pattern: long-running business processes as state machines. Temporal.io workflow engine. Durable execution. Compensations.', mins: 120 },
      { num: 20, chapterDir: '06-phan-6-operations-production', sectionTitle: 'Phần 6: Operations & Production',
        title: 'Bài 20: Kafka Operations - Monitoring, Tuning & Troubleshooting', slug: 'bai-20-kafka-operations-monitoring-tuning-troubleshooting',
        desc: 'Kafka operations: monitoring (JMX, Prometheus), performance tuning. Consumer lag monitoring. Partition rebalancing. Broker maintenance. Troubleshooting common issues.', mins: 120 },
      { num: 21, chapterDir: '06-phan-6-operations-production', sectionTitle: 'Phần 6: Operations & Production',
        title: 'Bài 21: Testing Event-Driven Systems', slug: 'bai-21-testing-event-driven-systems',
        desc: 'Testing strategies: unit testing event handlers, integration testing with embedded Kafka. Contract testing cho events. End-to-end testing. Testcontainers.', mins: 120 },
      { num: 22, chapterDir: '06-phan-6-operations-production', sectionTitle: 'Phần 6: Operations & Production',
        title: 'Bài 22: Observability cho Event-Driven Systems', slug: 'bai-22-observability-cho-event-driven-systems',
        desc: 'Distributed tracing qua events. Correlation IDs. Event flow visualization. Consumer lag alerting. Dead letter monitoring. Partition skew detection.', mins: 90 },
      { num: 23, chapterDir: '07-phan-7-case-studies', sectionTitle: 'Phần 7: Case Studies',
        title: 'Bài 23: Migration to Event-Driven - Strangler Fig Pattern', slug: 'bai-23-migration-to-event-driven-strangler-fig-pattern',
        desc: 'Migrating from monolith to event-driven: strangler fig pattern. Parallel run strategy. Event bridge between old and new. Gradual migration. Risk management.', mins: 120 },
      { num: 24, chapterDir: '07-phan-7-case-studies', sectionTitle: 'Phần 7: Case Studies',
        title: 'Bài 24: Apache Pulsar & Alternatives', slug: 'bai-24-apache-pulsar-alternatives',
        desc: 'Apache Pulsar: multi-tenancy, tiered storage, geo-replication. Pulsar vs Kafka comparison. NATS JetStream. Redpanda. Amazon EventBridge. Choosing the right platform.', mins: 90 },
      { num: 25, chapterDir: '07-phan-7-case-studies', sectionTitle: 'Phần 7: Case Studies',
        title: 'Bài 25: Case Studies - Uber, Wix, Booking.com & LinkedIn', slug: 'bai-25-case-studies-uber-wix-booking-com-linkedin',
        desc: 'Phân tích event-driven thực tế: Uber (event sourcing ride matching), Wix (event-driven platform), Booking.com (Kafka at scale), LinkedIn (Kafka origin). Lessons learned.', mins: 120 },
    ]
  },
];

// ============================================================
// CONTENT GENERATION
// ============================================================

function generateLessonContent(lesson, series) {
  const topicKeywords = lesson.desc.split('. ');
  const mainTopics = topicKeywords.slice(0, Math.min(4, topicKeywords.length));

  return `---
id: ${series.idPrefix}${String(lesson.num).padStart(2, '0')}-70${series.idPrefix.slice(-2)}-d001-e1f2a3b4c5${String(lesson.num).padStart(2, '0')}
title: "${lesson.title}"
slug: ${lesson.slug}
description: >-
  ${lesson.desc}
duration_minutes: ${lesson.mins}
is_free: true
video_url: null
sort_order: ${lesson.num}
section_title: "${lesson.sectionTitle}"
course:
  id: ${series.seriesId}
  title: "${series.seriesTitle}"
  slug: ${series.seriesSlug}
---

## Giới thiệu

${lesson.desc}

---

## 1. ${mainTopics[0] || 'Tổng quan'}

### 1.1 Khái niệm cơ bản

${mainTopics[0] || lesson.title} là một trong những chủ đề quan trọng nhất trong lĩnh vực này. Hiểu rõ các concepts cốt lõi sẽ giúp bạn thiết kế hệ thống đúng đắn ngay từ đầu.

\`\`\`
Key Concepts:
├── Concept 1: Nền tảng lý thuyết
├── Concept 2: Áp dụng thực tế
├── Concept 3: Best practices
└── Concept 4: Anti-patterns cần tránh
\`\`\`

### 1.2 Tại sao quan trọng?

| Khía cạnh | Không áp dụng | Áp dụng đúng |
|-----------|---------------|---------------|
| **Performance** | Bottlenecks, latency cao | Optimized, scalable |
| **Reliability** | Single point of failure | Fault-tolerant |
| **Maintainability** | Technical debt tích lũy | Clean architecture |
| **Security** | Vulnerable | Defense in depth |

---

## 2. ${mainTopics[1] || 'Architecture Design'}

### 2.1 Kiến trúc tổng quan

\`\`\`
┌─────────────────────────────────────────────────────┐
│                  SYSTEM ARCHITECTURE                 │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │  Client   │  │  API     │  │  Core Service    │  │
│  │  Layer    │──│  Gateway │──│  Layer           │  │
│  └──────────┘  └──────────┘  └──────────────────┘  │
│                                      │               │
│                               ┌──────▼──────┐       │
│                               │  Data Layer │       │
│                               └─────────────┘       │
└─────────────────────────────────────────────────────┘
\`\`\`

### 2.2 Component Design

Mỗi component trong hệ thống cần được thiết kế với các nguyên tắc:

- **Single Responsibility**: Mỗi component chỉ đảm nhiệm một trách nhiệm
- **Loose Coupling**: Giảm thiểu dependency giữa các components
- **High Cohesion**: Các elements liên quan nằm cùng một component
- **Interface Segregation**: API rõ ràng, tách biệt

---

## 3. ${mainTopics[2] || 'Implementation Patterns'}

### 3.1 Design Patterns áp dụng

\`\`\`
Applied Patterns:
├── Strategy Pattern: Cho phép thay đổi algorithm at runtime
├── Observer Pattern: Event notification mechanism
├── Repository Pattern: Data access abstraction
└── Factory Pattern: Object creation flexibility
\`\`\`

### 3.2 Code Example

\`\`\`java
// Example implementation
public interface Service {
    Result process(Request request);
    boolean supports(RequestType type);
}

@Component
public class CoreService implements Service {

    @Override
    public Result process(Request request) {
        // Validate input
        validator.validate(request);

        // Execute business logic
        var result = businessLogic.execute(request);

        // Publish domain event
        eventBus.publish(new ProcessedEvent(result));

        return result;
    }
}
\`\`\`

---

## 4. ${mainTopics[3] || 'Production Considerations'}

### 4.1 Monitoring & Observability

\`\`\`
Observability Stack:
├── Metrics: Prometheus + Grafana
├── Logging: ELK / Loki
├── Tracing: OpenTelemetry + Jaeger
└── Alerting: PagerDuty
\`\`\`

### 4.2 Performance Optimization

| Metric | Target | Strategy |
|--------|--------|----------|
| Latency p99 | < 100ms | Caching, async processing |
| Throughput | > 10K RPS | Horizontal scaling |
| Availability | 99.99% | Multi-region, failover |
| Error rate | < 0.01% | Circuit breaker, retry |

---

## Tổng kết

Trong bài học này, chúng ta đã tìm hiểu về ${lesson.title.replace(/^Bài \d+: /, '')}. Các key takeaways:

- Hiểu rõ concepts cốt lõi và cách áp dụng
- Thiết kế architecture phù hợp với requirements
- Implementation patterns và best practices
- Production considerations: monitoring, performance, security

**Bài tiếp theo**: Chúng ta sẽ tiếp tục với chủ đề tiếp theo trong series.
`;
}

function generateIndexContent(series) {
  if (series.skipIndex) return null;

  const meta = series.indexMeta;
  const tags = meta.tags.map(t => `  - name: ${t}\n    slug: ${t.toLowerCase().replace(/[^a-z0-9]/g, '-')}`).join('\n');

  // Group lessons by chapter
  const chapters = {};
  for (const lesson of series.lessons) {
    if (!chapters[lesson.sectionTitle]) {
      chapters[lesson.sectionTitle] = [];
    }
    chapters[lesson.sectionTitle].push(lesson);
  }

  let sectionIdx = 0;
  const sections = Object.entries(chapters).map(([sectionTitle, lessons]) => {
    sectionIdx++;
    const lessonsYaml = lessons.map(l => {
      return `      - id: ${series.idPrefix}${String(l.num).padStart(2, '0')}-70${series.idPrefix.slice(-2)}-d001-e1f2a3b4c5${String(l.num).padStart(2, '0')}
        title: '${l.title}'
        slug: ${l.slug}
        description: >-
          ${l.desc}
        duration_minutes: ${l.mins}
        is_free: true
        sort_order: ${l.num}
        video_url: null`;
    }).join('\n');

    return `  - id: section-${String(sectionIdx).padStart(2, '0')}
    title: '${sectionTitle}'
    description: '${lessons[0].desc.split('.')[0]}'
    sort_order: ${sectionIdx}
    lessons:
${lessonsYaml}`;
  }).join('\n');

  return `---
id: ${series.seriesId}
title: '${series.seriesTitle}'
slug: ${series.seriesSlug}
description: >-
  ${meta.description}
featured_image: ${meta.featured_image}
level: ${meta.level}
duration_hours: ${meta.duration_hours}
lesson_count: ${meta.lesson_count}
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
  id: ${AUTHOR.id}
  name: ${AUTHOR.name}
  avatar: ${AUTHOR.avatar}
category:
  id: ${CATEGORY.id}
  name: ${CATEGORY.name}
  slug: ${CATEGORY.slug}
tags:
${tags}
sections:
${sections}
---
`;
}

// ============================================================
// MAIN
// ============================================================

let filesCreated = 0;
let filesSkipped = 0;

for (const series of SERIES) {
  const seriesDir = path.join(BASE, series.seriesSlug);

  // Create index.md if needed
  if (!series.skipIndex) {
    const indexPath = path.join(seriesDir, 'index.md');
    if (!fs.existsSync(indexPath)) {
      fs.mkdirSync(path.dirname(indexPath), { recursive: true });
      fs.writeFileSync(indexPath, generateIndexContent(series));
      filesCreated++;
      console.log(`Created: ${indexPath}`);
    } else {
      filesSkipped++;
    }
  }

  // Create lesson files
  for (const lesson of series.lessons) {
    const numStr = String(lesson.num).padStart(2, '0');
    const lessonPath = path.join(
      seriesDir,
      'chapters',
      lesson.chapterDir,
      'lessons',
      `${numStr}-${lesson.slug}.md`
    );

    if (!fs.existsSync(lessonPath)) {
      fs.mkdirSync(path.dirname(lessonPath), { recursive: true });
      fs.writeFileSync(lessonPath, generateLessonContent(lesson, series));
      filesCreated++;
      if (filesCreated % 10 === 0) {
        console.log(`Progress: ${filesCreated} files created...`);
      }
    } else {
      filesSkipped++;
    }
  }
}

console.log(`\nDone! Created: ${filesCreated} files, Skipped: ${filesSkipped} files (already existed)`);
