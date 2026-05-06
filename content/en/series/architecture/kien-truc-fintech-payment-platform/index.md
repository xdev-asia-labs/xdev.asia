---
id: 019d8a21-c500-7005-d001-e1f2a3b4c5d6
title: FinTech & Payment Platform Architecture
slug: kien-truc-fintech-payment-platform
description: >-
  Comprehensive course on FinTech and Payment Platform system architecture from
  basic to advanced. Including Payment Gateway, Digital Wallet, Double-Entry
  Ledger System, Fraud Detection, AML/KYC Pipeline, Core Banking Architecture,
  Lending Platform. Practical integration with VNPay, MoMo, ZaloPay, Stripe.
  Compliant with PCI-DSS, PSD2 and State Bank of Vietnam regulations. Case
  studies from leading payment systems in the world and Vietnam. Updated
  according to FinTech trends 2026.
featured_image: uploads/2026/03/fintech-payment-platform-series-banner-2026.png
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
  name: System architecture
  slug: kien-truc-he-thong
tags:
  - name: FinTech
    slug: fintech
  - name: Payment
    slug: payment
  - name: Architecture
    slug: architecture
  - name: Microservices
    slug: microservices
  - name: Security
    slug: security
  - name: Banking
    slug: banking
  - name: FraudDetection
    slug: fraud-detection
  - name: Ledger
    slug: ledger
  - name: PCI-DSS
    slug: pci-dss
  - name: DigitalWallet
    slug: digital-wallet
  - name: DDD
    slug: ddd
  - name: EventDriven
    slug: event-driven
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 'Part 1: FinTech & Payment Platform'
    description: >-
      Understand the FinTech domain, business models, and the overall
      architecture of the Payment Platform
    sort_order: 1
    lessons:
      - id: 019d8a21-c501-7005-d001-e1f2a3b4c501
        title: 'Lesson 1: Overview of FinTech - Domain Analysis & Business Models'
        slug: bai-1-tong-quan-fintech-domain-analysis-business-models
        description: >-
          Analyze FinTech domain, main verticals (Payments, Lending, Banking,
          Insurance, Investment). Business models and revenue streams.
          Regulatory landscape in Vietnam and internationally. FinTech ecosystem
          and trends 2026.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c502-7005-d001-e1f2a3b4c502
        title: >-
          Lesson 2: Platform Architecture Overview - Microservices & DDD for
          FinTech
        slug: bai-2-platform-architecture-overview-microservices-ddd-cho-fintech
        description: >-
          Design the overall architecture for FinTech Platform using
          Microservices and Domain-Driven Design. Bounded Contexts for Payment,
          Wallet, Ledger, Risk, Identity. Event-Driven Architecture and API
          Gateway patterns.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c503-7005-d001-e1f2a3b4c503
        title: >-
          Lesson 3: Regulatory Compliance - PCI-DSS, PSD2 & Regulations of the
          State Bank of Vietnam
        slug: bai-3-regulatory-compliance-pci-dss-psd2-quy-dinh-nhnn
        description: >-
          Overview of compliance in FinTech. PCI-DSS requirements for payment
          processing. PSD2 and Open Banking. Regulations of the State Bank of
          Vietnam on electronic payments and e-wallets. Design systems to meet
          compliance.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Part 2: Core Payment Engine'
    description: >-
      Design and build Payment Gateway, Payment Processing, and Multi-PSP
      Integration
    sort_order: 2
    lessons:
      - id: 019d8a21-c504-7005-d001-e1f2a3b4c504
        title: 'Lesson 4: Payment Gateway Architecture - End-to-End Payment Flow'
        slug: bai-4-payment-gateway-architecture-luong-thanh-toan-end-to-end
        description: >-
          Payment Gateway architecture from checkout to settlement. Payment
          flows: card payment, bank transfer, e-wallet. Payment lifecycle:
          authorize, capture, void, refund. Idempotency and retry patterns for
          payment.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-c505-7005-d001-e1f2a3b4c505
        title: 'Lesson 5: Payment Processing - Authorization, Capture & Settlement'
        slug: bai-5-payment-processing-authorization-capture-settlement
        description: >-
          Deep-dive into payment processing flow. Two-phase commit for payment.
          Authorization hold and capture timing. Settlement process and
          clearing. Batch processing vs real-time settlement. Handling partial
          captures and split payments.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c506-7005-d001-e1f2a3b4c506
        title: 'Lesson 6: Multi-PSP Integration - VNPay, MoMo, ZaloPay, Stripe'
        slug: bai-6-multi-psp-integration-vnpay-momo-zalopay-stripe
        description: >-
          Design the Payment Service Provider abstraction layer. Adapter pattern
          for multiple PSPs. Integration with VNPay, MoMo, ZaloPay (Vietnam) and
          Stripe, PayPal (international). PSP routing and fallback strategy.
          Smart routing based on cost and success rate.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c507-7005-d001-e1f2a3b4c507
        title: 'Lesson 7: Reconciliation & Settlement Engine'
        slug: bai-7-reconciliation-settlement-engine
        description: >-
          Design an automatic reconciliation system. Matching algorithms for
          transaction reconciliation. Settlement engine and payout processing.
          Handling discrepancies and exceptions. Automated vs manual
          reconciliation workflows.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'Part 3: Digital Wallet & Ledger System'
    description: 'Building Digital Wallet, Double-Entry Ledger, and Transaction Processing'
    sort_order: 3
    lessons:
      - id: 019d8a21-c508-7005-d001-e1f2a3b4c508
        title: 'Lesson 8: Digital Wallet Architecture - E-Wallet & Balance Management'
        slug: bai-8-digital-wallet-architecture-e-wallet-balance-management
        description: >-
          Digital Wallet architecture: account types, balance management,
          top-up/withdrawal flows. Wallet-to-wallet transfers. Escrow accounts
          and hold balances. Real-time balance calculation vs event-sourced
          balance.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-c509-7005-d001-e1f2a3b4c509
        title: 'Lesson 9: Double-Entry Ledger System - Accounting Engine'
        slug: bai-9-double-entry-ledger-system-accounting-engine
        description: >-
          Double-entry bookkeeping principle in FinTech. Design ledger schema:
          accounts, journal entries, postings. Immutable append-only ledger.
          Audit trails and compliance. Chart of Accounts design for payment
          platform.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c510-7005-d001-e1f2a3b4c510
        title: 'Lesson 10: Transaction Processing - ACID, Idempotency & Saga Pattern'
        slug: bai-10-transaction-processing-acid-idempotency-saga-pattern
        description: >-
          Ensure consistency in financial transactions. ACID properties for
          single-service transactions. Saga pattern for distributed
          transactions. Idempotency keys and deduplication. Compensating
          transactions and rollback strategies.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-c511-7005-d001-e1f2a3b4c511
        title: 'Lesson 11: Currency & Exchange Rate Engine - Multi-currency Support'
        slug: bai-11-currency-exchange-rate-engine-multi-currency
        description: >-
          Multi-currency system design. Currency conversion engine and exchange
          rate management. FX rate caching and update strategies. Cross-border
          payment flows. Handling rounding and precision in financial
          calculations.
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 'Part 4: Risk Management & Fraud Detection'
    description: 'Build fraud detection, AML/KYC, and Risk Scoring systems'
    sort_order: 4
    lessons:
      - id: 019d8a21-c512-7005-d001-e1f2a3b4c512
        title: 'Lesson 12: Fraud Detection System - Rule Engine & ML Models'
        slug: bai-12-fraud-detection-system-rule-engine-ml-models
        description: >-
          Fraud detection system architecture. Rule-based engine with dynamic
          rules. Machine Learning models for fraud detection. Real-time scoring
          pipeline. Feature engineering for fraud signals. Balancing false
          positives and false negatives.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-c513-7005-d001-e1f2a3b4c513
        title: 'Lesson 13: Anti-Money Laundering (AML) & KYC Pipeline'
        slug: bai-13-anti-money-laundering-aml-kyc-pipeline
        description: >-
          Design KYC (Know Your Customer) pipeline: identity verification,
          document validation, liveness check. AML screening: sanctions lists,
          PEP screening, transaction monitoring. Suspicious Activity Reports
          (SAR). Compliance workflows and audit trails.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-c514-7005-d001-e1f2a3b4c514
        title: 'Lesson 14: Risk Scoring & Real-time Transaction Monitoring'
        slug: bai-14-risk-scoring-real-time-transaction-monitoring
        description: >-
          Design Risk Scoring system. Real-time transaction monitoring with
          stream processing. Velocity checks and pattern detection. Risk-based
          authentication (3D Secure, SCA). Alert management and case
          investigation workflow.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-05
    title: 'Part 5: Banking & Lending Platform'
    description: >-
      Core Banking Architecture, Lending Platform, Credit Scoring, and Interest
      Engine
    sort_order: 5
    lessons:
      - id: 019d8a21-c515-7005-d001-e1f2a3b4c515
        title: 'Lesson 15: Core Banking Architecture - Account Management'
        slug: bai-15-core-banking-architecture-account-management
        description: >-
          Modern Core Banking System architecture. Account management: savings,
          checking, loan accounts. Interest calculation engine. Statement
          generation. Integration with national payment systems (NAPAS, SWIFT,
          ACH).
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-c516-7005-d001-e1f2a3b4c516
        title: 'Lesson 16: Lending Platform - Loan Origination & Underwriting'
        slug: bai-16-lending-platform-loan-origination-underwriting
        description: >-
          End-to-end Lending Platform design. Loan origination system (LOS):
          application, verification, approval workflow. Automated underwriting
          engine. Loan product configuration. Disbursement and collection
          processes.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-c517-7005-d001-e1f2a3b4c517
        title: 'Lesson 17: Credit Scoring Engine - Data Pipeline & ML'
        slug: bai-17-credit-scoring-engine-data-pipeline-ml
        description: >-
          Build Credit Scoring Engine. Alternative data sources for credit
          scoring. Feature engineering pipeline. ML models for credit risk
          assessment. Model monitoring and bias detection. Integration with CIC
          (Credit Information Center) Vietnam.
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-c518-7005-d001-e1f2a3b4c518
        title: 'Lesson 18: Interest Calculation & Amortization Engine'
        slug: bai-18-interest-calculation-amortization-engine
        description: >-
          Interest Calculation Engine design: simple interest, compound
          interest, day-count conventions. Amortization schedule generation.
          Prepayment and penalty calculations. Late payment handling and grace
          periods. Regulatory rate caps.
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'Part 6: Data Platform & Analytics'
    description: 'Building Financial Data Pipeline, Reporting, and Real-time Analytics'
    sort_order: 6
    lessons:
      - id: 019d8a21-c519-7005-d001-e1f2a3b4c519
        title: 'Lesson 19: Financial Data Pipeline - Event Streaming & CDC'
        slug: bai-19-financial-data-pipeline-event-streaming-cdc
        description: >-
          Design data pipeline for FinTech. Event streaming with Kafka for
          financial events. Change Data Capture (CDC) for ledger replication.
          Data lake architecture for financial data. Data retention and archival
          policies.
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-c520-7005-d001-e1f2a3b4c520
        title: 'Lesson 20: Reporting & Business Intelligence - Regulatory Reports'
        slug: bai-20-reporting-business-intelligence-regulatory-reports
        description: >-
          Reporting system for FinTech. Regulatory reporting: BSP reports, tax
          reports, AML reports. Business intelligence dashboards. Merchant
          analytics and settlement reports. Automated report generation and
          scheduling.
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-c521-7005-d001-e1f2a3b4c521
        title: 'Lesson 21: Real-time Analytics & Dashboard'
        slug: bai-21-real-time-analytics-dashboard
        description: >-
          Real-time analytics for payment platforms. Transaction monitoring
          dashboard. KPI tracking: TPV, success rate, conversion rate. Real-time
          fraud alerts. Anomaly detection in transaction patterns. Operational
          dashboards for NOCs.
        duration_minutes: 90
        is_free: true
        sort_order: 21
        video_url: null
  - id: section-07
    title: 'Part 7: Infrastructure, Security & Production'
    description: >-
      Security architecture, HA infrastructure, performance tuning and practical
      case studies
    sort_order: 7
    lessons:
      - id: 019d8a21-c522-7005-d001-e1f2a3b4c522
        title: 'Lesson 22: Security Architecture - Encryption, HSM & Tokenization'
        slug: bai-22-security-architecture-encryption-hsm-tokenization
        description: >-
          Security architecture for FinTech. End-to-end encryption for payment
          data. Hardware Security Module (HSM) for key management. Tokenization
          for PAN data. Network security: PCI-DSS network segmentation. API
          security and OAuth2/mTLS.
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c523-7005-d001-e1f2a3b4c523
        title: 'Lesson 23: Infrastructure & High Availability - Multi-region & DR'
        slug: bai-23-infrastructure-high-availability-multi-region-dr
        description: >-
          Infrastructure design for payment systems. Multi-region deployment for
          low latency. Active-active vs active-passive DR strategy. Database
          replication for financial data. Zero-downtime deployment. SLA and
          uptime requirements (99.99%+) for payment systems.
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-c524-7005-d001-e1f2a3b4c524
        title: 'Lesson 24: Performance & Scalability - Handling Peak Transactions'
        slug: bai-24-performance-scalability-handling-peak-transactions
        description: >-
          Performance optimization for payment platform. Handling peak loads
          (flash sales, holidays). Database optimization for high-throughput
          transactions. Caching strategies for payments. Load testing and
          capacity planning. Horizontal patterns for payment services scaling.
        duration_minutes: 120
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c525-7005-d001-e1f2a3b4c525
        title: 'Lesson 25: Case Studies - VNPay, MoMo, GrabPay & Stripe'
        slug: bai-25-case-studies-vnpay-momo-grabpay-stripe
        description: >-
          Analyze the actual architecture of leading payment platforms. VNPay:
          largest payment intermediary in Vietnam. MoMo: super app strategy.
          GrabPay: regional payment across Southeast Asia. Stripe:
          developer-first payment platform. Lessons learned and best practices
          from production systems.
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: en
---

