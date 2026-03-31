---
id: 019d8a21-c502-7005-d001-e1f2a3b4c502
title: "Bài 2: Platform Architecture Overview - Microservices & DDD cho FinTech"
slug: bai-2-platform-architecture-overview-microservices-ddd-cho-fintech
description: >-
  Thiết kế kiến trúc tổng quan cho FinTech Platform sử dụng
  Microservices và Domain-Driven Design. Bounded Contexts cho
  Payment, Wallet, Ledger, Risk, Identity. Event-Driven Architecture
  và API Gateway patterns.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền Tảng FinTech & Payment"
course:
  id: 019d8a21-c500-7005-d001-e1f2a3b4c5d6
  title: "Kiến trúc FinTech & Payment Platform"
  slug: kien-truc-fintech-payment-platform
---

![Bài 2: Platform Architecture Overview - Microservices & DDD cho FinTech](/storage/uploads/2026/03/fintech-bai-2-diagram.png)

## Giới thiệu

Một FinTech Platform không phải là một ứng dụng monolithic đơn giản — nó là một hệ thống phức tạp với nhiều domain khác nhau cần được tách biệt rõ ràng. Trong bài này, chúng ta sẽ thiết kế kiến trúc tổng quan sử dụng **Microservices** và **Domain-Driven Design (DDD)**.

---

## 1. High-Level Architecture

### 1.1 Tổng quan hệ thống

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT LAYER                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│  │Mobile App│  │ Web App  │  │Merchant  │  │Partner │ │
│  │          │  │          │  │Dashboard │  │  API   │ │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └───┬────┘ │
└───────┼──────────────┼─────────────┼────────────┼───────┘
        │              │             │            │
┌───────▼──────────────▼─────────────▼────────────▼───────┐
│                   API GATEWAY LAYER                       │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ API Gateway (Kong/Envoy)                            │ │
│  │ ├── Rate Limiting    ├── Authentication             │ │
│  │ ├── Request Routing  ├── SSL Termination            │ │
│  │ └── API Versioning   └── Request/Response Transform │ │
│  └─────────────────────────────────────────────────────┘ │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                   SERVICE MESH                            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐ │
│  │ Payment  │ │ Wallet   │ │ Ledger   │ │   Risk     │ │
│  │ Service  │ │ Service  │ │ Service  │ │  Service   │ │
│  └──────────┘ └──────────┘ └──────────┘ └────────────┘ │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐ │
│  │ Identity │ │ Merchant │ │Reporting │ │Notification│ │
│  │ Service  │ │ Service  │ │ Service  │ │  Service   │ │
│  └──────────┘ └──────────┘ └──────────┘ └────────────┘ │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                   DATA LAYER                              │
│  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────────┐│
│  │PostgreSQL│ │Redis │ │Kafka │ │  S3   │ │Elasticsearch││
│  └───────┘ └───────┘ └───────┘ └───────┘ └───────────┘│
└─────────────────────────────────────────────────────────┘
```

### 1.2 Nguyên tắc thiết kế

1. **Domain-first**: Chia service theo domain, không theo technical layer
2. **Database per service**: Mỗi service sở hữu data riêng
3. **Event-driven communication**: Async communication cho cross-domain
4. **API-first design**: Contract-first approach với OpenAPI
5. **Defense in depth**: Security ở mọi layer

---

## 2. Domain-Driven Design cho FinTech

### 2.1 Strategic Design — Bounded Contexts

```
┌─────────────────────────────────────────────────────────────┐
│                    FINTECH PLATFORM                          │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │  IDENTITY   │  │   PAYMENT   │  │      WALLET         │ │
│  │   Context   │  │   Context   │  │      Context        │ │
│  │             │  │             │  │                     │ │
│  │ • User      │  │ • Payment   │  │ • Account           │ │
│  │ • KYC       │  │ • Refund    │  │ • Balance           │ │
│  │ • Auth      │  │ • PSP       │  │ • Transaction       │ │
│  │ • Session   │  │ • Checkout  │  │ • Transfer          │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │   LEDGER    │  │    RISK     │  │     MERCHANT        │ │
│  │   Context   │  │   Context   │  │     Context         │ │
│  │             │  │             │  │                     │ │
│  │ • Journal   │  │ • Fraud     │  │ • Merchant          │ │
│  │ • Account   │  │ • AML       │  │ • Settlement        │ │
│  │ • Posting   │  │ • KYC       │  │ • Fee               │ │
│  │ • Balance   │  │ • Scoring   │  │ • Contract          │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │  LENDING    │  │ REPORTING   │  │   NOTIFICATION      │ │
│  │  Context    │  │  Context    │  │     Context         │ │
│  │             │  │             │  │                     │ │
│  │ • Loan      │  │ • Report    │  │ • Template          │ │
│  │ • Credit    │  │ • Dashboard │  │ • Channel           │ │
│  │ • Schedule  │  │ • Export    │  │ • Preference        │ │
│  │ • Offer     │  │ • Audit     │  │ • History           │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Context Mapping

```
Identity ──[U/D]──► Payment    (Identity upstream, Payment downstream)
Payment  ──[Pub]──► Ledger     (Payment publishes events, Ledger subscribes)
Payment  ──[Pub]──► Risk       (Payment publishes for fraud check)
Payment  ──[ACL]──► PSP        (Anti-corruption layer for external PSPs)
Wallet   ──[Pub]──► Ledger     (Wallet changes reflected in Ledger)
Merchant ──[Pub]──► Reporting  (Merchant events feed Reporting)
Risk     ──[U/D]──► Payment    (Risk provides scoring to Payment)
```

**Patterns sử dụng**:
- **Published Language**: Events dùng chung schema (Avro/Protobuf)
- **Anti-Corruption Layer (ACL)**: Wrap external PSP APIs
- **Upstream/Downstream (U/D)**: Clear dependency direction
- **Shared Kernel**: Common types (Money, Currency, Address)

### 2.3 Shared Kernel — Common Value Objects

```java
// Shared across all bounded contexts
public record Money(BigDecimal amount, Currency currency) {
    public Money {
        if (amount.scale() > currency.getDefaultFractionDigits()) {
            throw new IllegalArgumentException("Invalid precision");
        }
    }

    public Money add(Money other) {
        requireSameCurrency(other);
        return new Money(amount.add(other.amount), currency);
    }
}

public record TransactionId(String value) {
    // UUID v7 for time-ordered IDs
    public static TransactionId generate() {
        return new TransactionId(UUIDv7.generate().toString());
    }
}
```

---

## 3. Microservice Architecture

### 3.1 Service Topology

```
                    ┌──────────────┐
                    │ API Gateway  │
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
   ┌──────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
   │   Payment   │ │   Wallet    │ │  Identity   │
   │   Service   │ │   Service   │ │   Service   │
   │             │ │             │ │             │
   │ PostgreSQL  │ │ PostgreSQL  │ │ PostgreSQL  │
   │    Redis    │ │    Redis    │ │    Redis    │
   └──────┬──────┘ └──────┬──────┘ └─────────────┘
          │                │
          └────────┬───────┘
                   │
            ┌──────▼──────┐
            │    Kafka    │  Event Bus
            └──────┬──────┘
                   │
     ┌─────────────┼─────────────┐
     │             │             │
┌────▼────┐ ┌─────▼─────┐ ┌────▼────┐
│ Ledger  │ │   Risk    │ │Reporting│
│ Service │ │  Service  │ │ Service │
│         │ │           │ │         │
│PostgreSQL│ │PostgreSQL │ │ClickHouse│
└─────────┘ │   Redis   │ └─────────┘
            │  ML Model │
            └───────────┘
```

### 3.2 Communication Patterns

| Pattern | Use Case | Ví dụ |
|---------|----------|-------|
| **Sync (REST/gRPC)** | Real-time queries | Check balance, get payment status |
| **Async (Events)** | State changes | Payment completed → update ledger |
| **Command** | Action requests | Process payment, create refund |
| **Query** | Read-only | Get transaction history |

### 3.3 Database per Service

```
Payment Service  ──► payment_db (PostgreSQL)
                     ├── payments
                     ├── payment_methods
                     ├── payment_attempts
                     └── refunds

Wallet Service   ──► wallet_db (PostgreSQL)
                     ├── accounts
                     ├── balances
                     ├── transactions
                     └── holds

Ledger Service   ──► ledger_db (PostgreSQL)
                     ├── journal_entries
                     ├── postings
                     ├── accounts
                     └── balances

Risk Service     ──► risk_db (PostgreSQL + Redis)
                     ├── fraud_rules
                     ├── risk_scores
                     ├── blacklists
                     └── ml_features (Redis)
```

---

## 4. Event-Driven Architecture

### 4.1 Domain Events

```
Payment Domain Events:
├── PaymentInitiated
├── PaymentAuthorized
├── PaymentCaptured
├── PaymentFailed
├── PaymentRefunded
└── PaymentSettled

Wallet Domain Events:
├── AccountCreated
├── BalanceCredited
├── BalanceDebited
├── TransferInitiated
├── TransferCompleted
└── HoldPlaced

Risk Domain Events:
├── FraudCheckRequested
├── FraudCheckCompleted
├── RiskScoreCalculated
├── TransactionBlocked
└── AlertRaised
```

### 4.2 Event Schema (Avro)

```json
{
  "type": "record",
  "name": "PaymentCompletedEvent",
  "namespace": "com.fintech.payment.events",
  "fields": [
    {"name": "eventId", "type": "string"},
    {"name": "eventType", "type": "string"},
    {"name": "timestamp", "type": "long"},
    {"name": "paymentId", "type": "string"},
    {"name": "amount", "type": {"type": "record", "name": "Money", "fields": [
      {"name": "value", "type": "string"},
      {"name": "currency", "type": "string"}
    ]}},
    {"name": "merchantId", "type": "string"},
    {"name": "customerId", "type": "string"},
    {"name": "paymentMethod", "type": "string"},
    {"name": "status", "type": "string"}
  ]
}
```

### 4.3 Event Flow — Payment Processing

```
Customer ─── Initiate Payment ───► Payment Service
                                       │
                                       ├──► Risk Service (Fraud Check)
                                       │       │
                                       │    ◄──┤ (Approved/Rejected)
                                       │
                                       ├──► PSP (Authorize)
                                       │       │
                                       │    ◄──┤ (Auth Response)
                                       │
                                       ├──► Event: PaymentAuthorized
                                       │       │
                                       │       ├──► Wallet Service (Debit)
                                       │       ├──► Ledger Service (Record)
                                       │       ├──► Notification Service
                                       │       └──► Reporting Service
                                       │
                                       └──► Response to Customer
```

---

## 5. API Gateway Design

### 5.1 Gateway Responsibilities

```yaml
API Gateway Configuration:
  authentication:
    - JWT validation
    - API key verification
    - mTLS for service-to-service

  rate_limiting:
    default: 100 req/min
    premium: 1000 req/min
    merchant_api: 5000 req/min

  routing:
    /api/v1/payments/*  → payment-service
    /api/v1/wallets/*   → wallet-service
    /api/v1/merchants/* → merchant-service
    /api/v1/reports/*   → reporting-service

  security:
    - CORS policies
    - Request validation
    - IP whitelisting (for merchant APIs)
    - PCI-DSS compliant headers
```

### 5.2 API Versioning Strategy

```
/api/v1/payments       ← Current stable
/api/v2/payments       ← Next version (beta)

Header-based: Accept: application/vnd.fintech.v1+json
```

---

## 6. Cross-cutting Concerns

### 6.1 Observability Stack

```
┌──────────────────────────────────────┐
│          OBSERVABILITY STACK          │
├──────────────────────────────────────┤
│ Metrics:  Prometheus + Grafana       │
│ Logging:  ELK Stack / Loki          │
│ Tracing:  OpenTelemetry + Jaeger    │
│ Alerting: PagerDuty / OpsGenie     │
└──────────────────────────────────────┘
```

### 6.2 Security Layer

```
Defense in Depth:
├── Network: VPC, Security Groups, WAF
├── Transport: TLS 1.3, mTLS
├── Application: JWT, OAuth2, RBAC
├── Data: Encryption at rest (AES-256)
├── Payment: Tokenization, HSM
└── Audit: Immutable audit logs
```

---

## Tổng kết

Kiến trúc FinTech Platform cần:
- **DDD** để chia domain phức tạp thành bounded contexts rõ ràng
- **Microservices** với database per service cho isolation
- **Event-Driven** cho loose coupling và eventual consistency
- **API Gateway** cho security, routing, rate limiting
- **Defense in Depth** cho security ở mọi layer

**Bài tiếp theo**: Chúng ta sẽ deep-dive vào Regulatory Compliance — PCI-DSS, PSD2, và quy định NHNN Việt Nam — và cách thiết kế hệ thống đáp ứng các yêu cầu compliance.
