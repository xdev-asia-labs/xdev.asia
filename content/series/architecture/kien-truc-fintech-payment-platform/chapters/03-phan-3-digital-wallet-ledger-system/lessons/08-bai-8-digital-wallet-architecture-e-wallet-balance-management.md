---
id: 019d8a21-c508-7005-d001-e1f2a3b4c508
title: "Bài 8: Digital Wallet Architecture - E-Wallet & Balance Management"
slug: bai-8-digital-wallet-architecture-e-wallet-balance-management
description: >-
  Kiến trúc Digital Wallet: account types, balance management,
  top-up/withdrawal flows. Wallet-to-wallet transfer. Escrow
  accounts và hold balances.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: Digital Wallet & Ledger System"
course:
  id: 019d8a21-c500-7005-d001-e1f2a3b4c5d6
  title: "Kiến trúc FinTech & Payment Platform"
  slug: kien-truc-fintech-payment-platform
---

## Giới thiệu

Digital Wallet (ví điện tử) là trung tâm của mọi FinTech super app. Tại Việt Nam, MoMo, ZaloPay, ShopeePay đã biến ví điện tử trở thành phương thức thanh toán phổ biến nhất. Bài này sẽ phân tích kiến trúc một Digital Wallet Platform chuyên nghiệp.

---

## 1. Wallet Architecture Overview

### 1.1 Account Types

```
Wallet Account Hierarchy:
├── User Wallet
│   ├── Main Balance (available for payment)
│   ├── Hold Balance (reserved/pending)
│   ├── Bonus Balance (promotions, non-withdrawable)
│   └── Credit Balance (lending, BNPL)
│
├── Merchant Wallet
│   ├── Settlement Balance
│   ├── Fee Balance
│   └── Reserve Balance (for chargebacks)
│
├── Platform Wallet
│   ├── Fee Collection Account
│   ├── Float Account (pooled user funds)
│   └── Escrow Account
│
└── System Wallet
    ├── Suspense Account (unresolved transactions)
    ├── Reconciliation Account
    └── Interest Pool Account
```

### 1.2 Core Components

```
┌─────────────────────────────────────────────────────────────┐
│                 WALLET SERVICE                               │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Account    │  │   Balance    │  │   Transaction    │  │
│  │   Manager    │  │   Engine     │  │   Processor      │  │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────────┘  │
│         │                 │                  │               │
│  ┌──────▼───────┐  ┌──────▼───────┐  ┌──────▼───────────┐  │
│  │   KYC        │  │   Hold       │  │   Transfer       │  │
│  │   Validator  │  │   Manager    │  │   Engine         │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Event Store (Kafka)                      │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Balance Management

### 2.1 Balance Calculation Strategy

```
Strategy 1: Snapshot + Delta (Recommended)
─────────────────────────────────────────
Snapshot (cached): 1,000,000 VND (at timestamp T)
+ Credit: +200,000 (top-up)
+ Credit: +50,000 (cashback)
- Debit: -150,000 (payment)
─────────────────────────────
Current Balance: 1,100,000 VND

Every N transactions or periodically → create new snapshot
```

### 2.2 Concurrent Balance Updates

```java
// Optimistic locking approach
@Entity
@Table(name = "wallet_balances")
public class WalletBalance {
    @Id
    private UUID walletId;

    @Column(name = "available_balance")
    private long availableBalance; // In smallest currency unit

    @Column(name = "hold_balance")
    private long holdBalance;

    @Version
    private long version; // Optimistic lock

    public void debit(long amount) {
        if (availableBalance < amount) {
            throw new InsufficientFundsException();
        }
        this.availableBalance -= amount;
    }

    public void credit(long amount) {
        this.availableBalance += amount;
    }

    public void placeHold(long amount) {
        if (availableBalance < amount) {
            throw new InsufficientFundsException();
        }
        this.availableBalance -= amount;
        this.holdBalance += amount;
    }

    public void releaseHold(long amount) {
        this.holdBalance -= amount;
        this.availableBalance += amount;
    }
}
```

### 2.3 Database Design

```sql
CREATE TABLE wallet_accounts (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL,
    account_type    VARCHAR(30) NOT NULL, -- 'MAIN', 'BONUS', 'CREDIT'
    currency        VARCHAR(3) NOT NULL DEFAULT 'VND',
    status          VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',
    kyc_level       INT NOT NULL DEFAULT 0,
    daily_limit     BIGINT NOT NULL,
    monthly_limit   BIGINT NOT NULL,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE wallet_balances (
    wallet_id           UUID PRIMARY KEY REFERENCES wallet_accounts(id),
    available_balance   BIGINT NOT NULL DEFAULT 0,
    hold_balance        BIGINT NOT NULL DEFAULT 0,
    total_credited      BIGINT NOT NULL DEFAULT 0,
    total_debited       BIGINT NOT NULL DEFAULT 0,
    version             BIGINT NOT NULL DEFAULT 0,
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT positive_balance CHECK (available_balance >= 0),
    CONSTRAINT positive_hold CHECK (hold_balance >= 0)
);

CREATE TABLE wallet_transactions (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    wallet_id       UUID NOT NULL REFERENCES wallet_accounts(id),
    type            VARCHAR(30) NOT NULL, -- 'TOP_UP', 'PAYMENT', 'TRANSFER', 'WITHDRAWAL'
    direction       VARCHAR(10) NOT NULL, -- 'CREDIT', 'DEBIT'
    amount          BIGINT NOT NULL,
    balance_after   BIGINT NOT NULL,
    reference_id    UUID,
    reference_type  VARCHAR(50),
    description     TEXT,
    metadata        JSONB DEFAULT '{}',
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_wallet_txn_wallet_date
    ON wallet_transactions(wallet_id, created_at DESC);
```

---

## 3. Top-up & Withdrawal

### 3.1 Top-up Flow

```
Customer ──► Select top-up method ──► Payment Gateway
                                           │
                                    ┌──────▼──────┐
                                    │ Bank/Card   │
                                    │ Charge      │
                                    └──────┬──────┘
                                           │ Success
                                    ┌──────▼──────┐
                                    │ Credit      │
                                    │ Wallet      │
                                    └──────┬──────┘
                                           │
                                    ┌──────▼──────┐
                                    │ Notify      │
                                    │ Customer    │
                                    └─────────────┘
```

### 3.2 Wallet-to-Wallet Transfer

```java
@Transactional
public TransferResult transfer(TransferRequest request) {
    var sender = walletRepository.findWithLock(request.getSenderId());
    var receiver = walletRepository.findWithLock(request.getReceiverId());

    // Validate
    sender.validateTransfer(request.getAmount());
    limitChecker.check(sender, request.getAmount());

    // Execute double-entry
    sender.debit(request.getAmount());
    receiver.credit(request.getAmount());

    // Save both
    walletRepository.save(sender);
    walletRepository.save(receiver);

    // Record transactions
    var debitTxn = WalletTransaction.debit(sender, request.getAmount());
    var creditTxn = WalletTransaction.credit(receiver, request.getAmount());
    transactionRepository.saveAll(List.of(debitTxn, creditTxn));

    // Publish event
    eventBus.publish(new TransferCompletedEvent(request));

    return TransferResult.success(debitTxn.getId());
}
```

---

## 4. Wallet Limits & KYC

### 4.1 Limit Structure (theo quy định NHNN)

```
KYC Level 0 (chưa xác minh):
├── Số dư tối đa: 10,000,000 VND
├── Giao dịch/ngày: 5,000,000 VND
└── Giao dịch/tháng: 20,000,000 VND

KYC Level 1 (xác minh cơ bản):
├── Số dư tối đa: 50,000,000 VND
├── Giao dịch/ngày: 30,000,000 VND
└── Giao dịch/tháng: 100,000,000 VND

KYC Level 2 (xác minh đầy đủ - eKYC):
├── Số dư tối đa: 100,000,000 VND
├── Giao dịch/ngày: 100,000,000 VND
└── Giao dịch/tháng: 300,000,000 VND
```

---

## Tổng kết

Digital Wallet cần balance giữa performance (concurrent access) và correctness (không mất tiền):
- **Optimistic locking** cho balance updates
- **Double-entry** cho mọi transaction
- **Limit enforcement** theo KYC level
- **Event-driven** cho async processing

**Bài tiếp theo**: Double-Entry Ledger System — thiết kế accounting engine cho FinTech.
