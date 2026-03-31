---
id: 019d8a21-c500-7005-d001-e1f2a3b4c5d6
title: 'Kiến trúc FinTech & Payment Platform'
slug: kien-truc-fintech-payment-platform
description: >-
  Khóa học toàn diện về kiến trúc hệ thống FinTech và Payment Platform từ cơ bản
  đến nâng cao. Bao gồm Payment Gateway, Digital Wallet, Double-Entry Ledger System,
  Fraud Detection, AML/KYC Pipeline, Core Banking Architecture, Lending Platform.
  Tích hợp thực tế với VNPay, MoMo, ZaloPay, Stripe. Tuân thủ PCI-DSS, PSD2
  và quy định Ngân hàng Nhà nước Việt Nam. Case studies từ các hệ thống thanh toán
  hàng đầu thế giới và Việt Nam. Cập nhật theo xu hướng FinTech 2026.
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
  name: Kiến trúc hệ thống
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
    title: 'Phần 1: Nền Tảng FinTech & Payment'
    description: 'Hiểu domain FinTech, các business models, và kiến trúc tổng quan của Payment Platform'
    sort_order: 1
    lessons:
      - id: 019d8a21-c501-7005-d001-e1f2a3b4c501
        title: 'Bài 1: Tổng quan FinTech - Domain Analysis & Business Models'
        slug: bai-1-tong-quan-fintech-domain-analysis-business-models
        description: >-
          Phân tích domain FinTech, các vertical chính (Payments, Lending,
          Banking, Insurance, Investment). Business models và revenue streams.
          Regulatory landscape tại Việt Nam và quốc tế. FinTech ecosystem
          và xu hướng 2026.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c502-7005-d001-e1f2a3b4c502
        title: 'Bài 2: Platform Architecture Overview - Microservices & DDD cho FinTech'
        slug: bai-2-platform-architecture-overview-microservices-ddd-cho-fintech
        description: >-
          Thiết kế kiến trúc tổng quan cho FinTech Platform sử dụng
          Microservices và Domain-Driven Design. Bounded Contexts cho
          Payment, Wallet, Ledger, Risk, Identity. Event-Driven Architecture
          và API Gateway patterns.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c503-7005-d001-e1f2a3b4c503
        title: 'Bài 3: Regulatory Compliance - PCI-DSS, PSD2 & Quy định NHNN Việt Nam'
        slug: bai-3-regulatory-compliance-pci-dss-psd2-quy-dinh-nhnn
        description: >-
          Tổng quan về compliance trong FinTech. PCI-DSS requirements cho
          payment processing. PSD2 và Open Banking. Quy định của Ngân hàng
          Nhà nước Việt Nam về thanh toán điện tử, ví điện tử. Thiết kế
          hệ thống đáp ứng compliance.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Phần 2: Core Payment Engine'
    description: 'Thiết kế và xây dựng Payment Gateway, Payment Processing, và Multi-PSP Integration'
    sort_order: 2
    lessons:
      - id: 019d8a21-c504-7005-d001-e1f2a3b4c504
        title: 'Bài 4: Payment Gateway Architecture - Luồng Thanh Toán End-to-End'
        slug: bai-4-payment-gateway-architecture-luong-thanh-toan-end-to-end
        description: >-
          Kiến trúc Payment Gateway từ checkout đến settlement. Các luồng
          thanh toán: card payment, bank transfer, e-wallet. Payment
          lifecycle: authorize, capture, void, refund. Idempotency và
          retry patterns cho payment.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-c505-7005-d001-e1f2a3b4c505
        title: 'Bài 5: Payment Processing - Authorization, Capture & Settlement'
        slug: bai-5-payment-processing-authorization-capture-settlement
        description: >-
          Deep-dive vào payment processing flow. Two-phase commit cho
          payment. Authorization hold và capture timing. Settlement
          process và clearing. Batch processing vs real-time settlement.
          Handling partial captures và split payments.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c506-7005-d001-e1f2a3b4c506
        title: 'Bài 6: Multi-PSP Integration - VNPay, MoMo, ZaloPay, Stripe'
        slug: bai-6-multi-psp-integration-vnpay-momo-zalopay-stripe
        description: >-
          Thiết kế Payment Service Provider abstraction layer. Adapter
          pattern cho multiple PSPs. Integration với VNPay, MoMo, ZaloPay
          (Việt Nam) và Stripe, PayPal (quốc tế). PSP routing và
          fallback strategy. Smart routing dựa trên cost và success rate.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c507-7005-d001-e1f2a3b4c507
        title: 'Bài 7: Reconciliation & Settlement Engine'
        slug: bai-7-reconciliation-settlement-engine
        description: >-
          Thiết kế hệ thống đối soát (reconciliation) tự động. Matching
          algorithms cho transaction reconciliation. Settlement engine
          và payout processing. Handling discrepancies và exceptions.
          Automated vs manual reconciliation workflows.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'Phần 3: Digital Wallet & Ledger System'
    description: 'Xây dựng Digital Wallet, Double-Entry Ledger, và Transaction Processing'
    sort_order: 3
    lessons:
      - id: 019d8a21-c508-7005-d001-e1f2a3b4c508
        title: 'Bài 8: Digital Wallet Architecture - E-Wallet & Balance Management'
        slug: bai-8-digital-wallet-architecture-e-wallet-balance-management
        description: >-
          Kiến trúc Digital Wallet: account types, balance management,
          top-up/withdrawal flows. Wallet-to-wallet transfer. Escrow
          accounts và hold balances. Real-time balance calculation
          vs event-sourced balance.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-c509-7005-d001-e1f2a3b4c509
        title: 'Bài 9: Double-Entry Ledger System - Accounting Engine'
        slug: bai-9-double-entry-ledger-system-accounting-engine
        description: >-
          Nguyên lý kế toán kép (double-entry bookkeeping) trong FinTech.
          Thiết kế ledger schema: accounts, journal entries, postings.
          Immutable append-only ledger. Audit trail và compliance.
          Chart of Accounts design cho payment platform.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c510-7005-d001-e1f2a3b4c510
        title: 'Bài 10: Transaction Processing - ACID, Idempotency & Saga Pattern'
        slug: bai-10-transaction-processing-acid-idempotency-saga-pattern
        description: >-
          Đảm bảo consistency trong financial transactions. ACID properties
          cho single-service transactions. Saga pattern cho distributed
          transactions. Idempotency keys và deduplication. Compensating
          transactions và rollback strategies.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-c511-7005-d001-e1f2a3b4c511
        title: 'Bài 11: Currency & Exchange Rate Engine - Multi-currency Support'
        slug: bai-11-currency-exchange-rate-engine-multi-currency
        description: >-
          Thiết kế multi-currency system. Currency conversion engine
          và exchange rate management. FX rate caching và update
          strategies. Cross-border payment flows. Handling rounding
          và precision trong financial calculations.
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 'Phần 4: Risk Management & Fraud Detection'
    description: 'Xây dựng hệ thống phát hiện gian lận, AML/KYC, và Risk Scoring'
    sort_order: 4
    lessons:
      - id: 019d8a21-c512-7005-d001-e1f2a3b4c512
        title: 'Bài 12: Fraud Detection System - Rule Engine & ML Models'
        slug: bai-12-fraud-detection-system-rule-engine-ml-models
        description: >-
          Kiến trúc hệ thống phát hiện gian lận. Rule-based engine
          với dynamic rules. Machine Learning models cho fraud detection.
          Real-time scoring pipeline. Feature engineering cho fraud
          signals. Balancing false positives và false negatives.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-c513-7005-d001-e1f2a3b4c513
        title: 'Bài 13: Anti-Money Laundering (AML) & KYC Pipeline'
        slug: bai-13-anti-money-laundering-aml-kyc-pipeline
        description: >-
          Thiết kế KYC (Know Your Customer) pipeline: identity
          verification, document validation, liveness check. AML
          screening: sanctions lists, PEP screening, transaction
          monitoring. Suspicious Activity Reports (SAR). Compliance
          workflows và audit trails.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-c514-7005-d001-e1f2a3b4c514
        title: 'Bài 14: Risk Scoring & Real-time Transaction Monitoring'
        slug: bai-14-risk-scoring-real-time-transaction-monitoring
        description: >-
          Thiết kế Risk Scoring system. Real-time transaction monitoring
          với stream processing. Velocity checks và pattern detection.
          Risk-based authentication (3D Secure, SCA). Alert management
          và case investigation workflow.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-05
    title: 'Phần 5: Banking & Lending Platform'
    description: 'Kiến trúc Core Banking, Lending Platform, Credit Scoring, và Interest Engine'
    sort_order: 5
    lessons:
      - id: 019d8a21-c515-7005-d001-e1f2a3b4c515
        title: 'Bài 15: Core Banking Architecture - Account Management'
        slug: bai-15-core-banking-architecture-account-management
        description: >-
          Kiến trúc Core Banking System hiện đại. Account management:
          savings, checking, loan accounts. Interest calculation engine.
          Statement generation. Integration với national payment
          systems (NAPAS, SWIFT, ACH).
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-c516-7005-d001-e1f2a3b4c516
        title: 'Bài 16: Lending Platform - Loan Origination & Underwriting'
        slug: bai-16-lending-platform-loan-origination-underwriting
        description: >-
          Thiết kế Lending Platform end-to-end. Loan origination system
          (LOS): application, verification, approval workflow. Automated
          underwriting engine. Loan product configuration. Disbursement
          và collection processes.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-c517-7005-d001-e1f2a3b4c517
        title: 'Bài 17: Credit Scoring Engine - Data Pipeline & ML'
        slug: bai-17-credit-scoring-engine-data-pipeline-ml
        description: >-
          Xây dựng Credit Scoring Engine. Alternative data sources cho
          credit scoring. Feature engineering pipeline. ML models cho
          credit risk assessment. Model monitoring và bias detection.
          Integration với CIC (Credit Information Center) Việt Nam.
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-c518-7005-d001-e1f2a3b4c518
        title: 'Bài 18: Interest Calculation & Amortization Engine'
        slug: bai-18-interest-calculation-amortization-engine
        description: >-
          Thiết kế Interest Calculation Engine: simple interest, compound
          interest, day-count conventions. Amortization schedule
          generation. Prepayment và penalty calculations. Late payment
          handling và grace periods. Regulatory rate caps.
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'Phần 6: Data Platform & Analytics'
    description: 'Xây dựng Financial Data Pipeline, Reporting, và Real-time Analytics'
    sort_order: 6
    lessons:
      - id: 019d8a21-c519-7005-d001-e1f2a3b4c519
        title: 'Bài 19: Financial Data Pipeline - Event Streaming & CDC'
        slug: bai-19-financial-data-pipeline-event-streaming-cdc
        description: >-
          Thiết kế data pipeline cho FinTech. Event streaming với Kafka
          cho financial events. Change Data Capture (CDC) cho ledger
          replication. Data lake architecture cho financial data.
          Data retention và archival policies.
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-c520-7005-d001-e1f2a3b4c520
        title: 'Bài 20: Reporting & Business Intelligence - Regulatory Reports'
        slug: bai-20-reporting-business-intelligence-regulatory-reports
        description: >-
          Hệ thống Reporting cho FinTech. Regulatory reporting: BSP
          reports, tax reports, AML reports. Business intelligence
          dashboards. Merchant analytics và settlement reports.
          Automated report generation và scheduling.
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-c521-7005-d001-e1f2a3b4c521
        title: 'Bài 21: Real-time Analytics & Dashboard'
        slug: bai-21-real-time-analytics-dashboard
        description: >-
          Real-time analytics cho payment platform. Transaction
          monitoring dashboard. KPI tracking: TPV, success rate,
          conversion rate. Real-time fraud alerts. Anomaly detection
          trong transaction patterns. Operational dashboards cho NOC.
        duration_minutes: 90
        is_free: true
        sort_order: 21
        video_url: null
  - id: section-07
    title: 'Phần 7: Infrastructure, Security & Production'
    description: 'Security architecture, HA infrastructure, performance tuning và case studies thực tế'
    sort_order: 7
    lessons:
      - id: 019d8a21-c522-7005-d001-e1f2a3b4c522
        title: 'Bài 22: Security Architecture - Encryption, HSM & Tokenization'
        slug: bai-22-security-architecture-encryption-hsm-tokenization
        description: >-
          Security architecture cho FinTech. End-to-end encryption cho
          payment data. Hardware Security Module (HSM) cho key management.
          Tokenization cho PAN data. Network security: PCI-DSS network
          segmentation. API security và OAuth2/mTLS.
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c523-7005-d001-e1f2a3b4c523
        title: 'Bài 23: Infrastructure & High Availability - Multi-region & DR'
        slug: bai-23-infrastructure-high-availability-multi-region-dr
        description: >-
          Thiết kế infrastructure cho payment systems. Multi-region
          deployment cho low latency. Active-active vs active-passive
          DR strategy. Database replication cho financial data.
          Zero-downtime deployment. SLA và uptime requirements
          (99.99%+) cho payment systems.
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-c524-7005-d001-e1f2a3b4c524
        title: 'Bài 24: Performance & Scalability - Handling Peak Transactions'
        slug: bai-24-performance-scalability-handling-peak-transactions
        description: >-
          Performance optimization cho payment platform. Handling peak
          loads (flash sales, holidays). Database optimization cho
          high-throughput transactions. Caching strategies cho payment.
          Load testing và capacity planning. Horizontal scaling
          patterns cho payment services.
        duration_minutes: 120
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c525-7005-d001-e1f2a3b4c525
        title: 'Bài 25: Case Studies - VNPay, MoMo, GrabPay & Stripe'
        slug: bai-25-case-studies-vnpay-momo-grabpay-stripe
        description: >-
          Phân tích kiến trúc thực tế của các payment platforms hàng đầu.
          VNPay: largest payment intermediary in Vietnam. MoMo: super app
          strategy. GrabPay: regional payment across Southeast Asia.
          Stripe: developer-first payment platform. Lessons learned
          và best practices từ production systems.
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
---
