---
id: 019d8a21-c507-7005-d001-e1f2a3b4c507
title: "Bài 7: Reconciliation & Settlement Engine"
slug: bai-7-reconciliation-settlement-engine
description: >-
  Thiết kế hệ thống đối soát (reconciliation) tự động. Matching
  algorithms cho transaction reconciliation. Settlement engine
  và payout processing. Handling discrepancies và exceptions.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Core Payment Engine"
course:
  id: 019d8a21-c500-7005-d001-e1f2a3b4c5d6
  title: "Kiến trúc FinTech & Payment Platform"
  slug: kien-truc-fintech-payment-platform
---

![Bài 7: Reconciliation & Settlement Engine](/storage/uploads/2026/03/fintech-bai-7-diagram.png)

## Giới thiệu

Reconciliation (đối soát) là quy trình so khớp giao dịch giữa hệ thống nội bộ và PSP/bank để đảm bảo tính chính xác của dữ liệu tài chính. Đây là chức năng critical nhưng thường bị overlooked trong payment systems.

---

## 1. Reconciliation là gì?

### 1.1 Tổng quan

```
Reconciliation = So khớp records giữa 2+ hệ thống

Internal Records (Our System)    External Records (PSP/Bank)
├── payment_001: 100,000 VND     ├── txn_abc: 100,000 VND     ✓ Match
├── payment_002: 200,000 VND     ├── txn_def: 200,000 VND     ✓ Match
├── payment_003: 150,000 VND     ├── (missing)                ✗ Unmatched
├── (missing)                    ├── txn_ghi: 50,000 VND      ✗ Extra
└── payment_004: 300,000 VND     └── txn_jkl: 310,000 VND     ✗ Mismatch
```

### 1.2 Types of Reconciliation

| Type | Mô tả | Frequency |
|------|--------|-----------|
| **Transaction Recon** | So khớp từng giao dịch | Daily |
| **Settlement Recon** | So khớp tổng settlement | Daily/Weekly |
| **Balance Recon** | So khớp số dư tài khoản | Daily |
| **Fee Recon** | Kiểm tra phí đúng hợp đồng | Monthly |
| **Cross-system Recon** | Giữa các internal services | Real-time |

---

## 2. Reconciliation Architecture

```
┌─────────────────────────────────────────────────────────────┐
│              RECONCILIATION ENGINE                           │
│                                                              │
│  ┌────────────┐     ┌──────────────┐     ┌───────────────┐ │
│  │   File     │     │   Matching   │     │  Exception    │ │
│  │  Ingester  │────►│   Engine     │────►│  Manager      │ │
│  └────────────┘     └──────────────┘     └───────────────┘ │
│       │                    │                     │           │
│  ┌────▼────┐         ┌────▼────┐          ┌─────▼─────┐   │
│  │ Parser  │         │ Rules   │          │ Workflow  │   │
│  │ (CSV,   │         │ Engine  │          │ (Manual   │   │
│  │  SFTP,  │         │         │          │  Review)  │   │
│  │  API)   │         │         │          │           │   │
│  └─────────┘         └─────────┘          └───────────┘   │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              Reporting & Dashboard                     │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 2.1 File Ingestion

```java
@Service
public class ReconciliationFileIngester {

    // PSPs provide settlement files in various formats
    public List<ExternalTransaction> ingest(PSPFileConfig config) {
        return switch (config.getFormat()) {
            case CSV -> parseCsv(config);
            case SFTP_CSV -> downloadAndParseCsv(config);
            case API -> fetchViaApi(config);
            case EXCEL -> parseExcel(config);
        };
    }

    // VNPay sends CSV via SFTP
    private List<ExternalTransaction> downloadAndParseCsv(PSPFileConfig config) {
        var file = sftpClient.download(
            config.getHost(), config.getPath(),
            config.getCredentials());
        return csvParser.parse(file, VNPayTransactionMapper.class);
    }
}
```

### 2.2 Matching Engine

```java
@Service
public class TransactionMatcher {

    public ReconciliationResult match(
            List<InternalTransaction> internal,
            List<ExternalTransaction> external) {

        var result = new ReconciliationResult();
        var externalMap = external.stream()
            .collect(Collectors.toMap(
                ExternalTransaction::getPspReference, Function.identity()));

        for (var txn : internal) {
            var ext = externalMap.remove(txn.getPspReference());

            if (ext == null) {
                result.addUnmatched(txn); // Missing on PSP side
            } else if (!txn.getAmount().equals(ext.getAmount())) {
                result.addMismatch(txn, ext); // Amount mismatch
            } else if (!txn.getCurrency().equals(ext.getCurrency())) {
                result.addMismatch(txn, ext); // Currency mismatch
            } else {
                result.addMatched(txn, ext); // Perfect match
            }
        }

        // Remaining external transactions = not in our system
        for (var ext : externalMap.values()) {
            result.addExtra(ext);
        }

        return result;
    }
}
```

---

## 3. Exception Handling

### 3.1 Exception Types

```
Reconciliation Exceptions:
├── MISSING_EXTERNAL: In our system, not in PSP
│   → PSP may not have processed yet (timing)
│   → PSP failed silently
│
├── MISSING_INTERNAL: In PSP, not in our system
│   → Our system crashed before recording
│   → Duplicate on PSP side
│
├── AMOUNT_MISMATCH: Different amounts
│   → Partial capture not reflected
│   → FX rate difference
│   → Fee deducted at PSP
│
└── STATUS_MISMATCH: Different statuses
    → Async update not received
    → Webhook missed
```

### 3.2 Resolution Workflow

```
Exception Detected
    │
    ▼
Auto-resolution possible?
    │
    ├── YES: Apply auto-fix
    │   ├── Timing issue → Wait and re-check
    │   ├── Missed webhook → Query PSP for status
    │   └── Known pattern → Apply standard fix
    │
    └── NO: Create manual review task
        ├── Assign to operations team
        ├── Set SLA (24h for critical, 72h for normal)
        └── Escalate if unresolved
```

---

## 4. Settlement & Payout

### 4.1 Merchant Payout Flow

```
Daily Settlement:
1. Aggregate captured transactions per merchant
2. Calculate fees (platform fee, PSP fee)
3. Calculate net payout amount
4. Create payout record
5. Submit bank transfer
6. Update settlement status

Payout Schedule:
├── T+1: Next business day (standard)
├── T+0: Same day (premium merchants)
├── Weekly: Every Monday (small merchants)
└── On-demand: Instant payout (with fee)
```

### 4.2 Payout Implementation

```java
@Service
public class PayoutService {

    @Scheduled(cron = "0 0 8 * * MON-FRI") // 8:00 AM weekdays
    public void processPayouts() {
        var pendingPayouts = payoutRepository
            .findByStatus(PayoutStatus.PENDING);

        for (var payout : pendingPayouts) {
            try {
                // Transfer via bank API
                var transferResult = bankApi.transfer(
                    payout.getMerchantBankAccount(),
                    payout.getNetAmount(),
                    payout.getReference());

                payout.markProcessed(transferResult.getReference());
                payoutRepository.save(payout);

                notificationService.notifyMerchant(
                    payout.getMerchantId(),
                    "Payout processed: " + payout.getNetAmount());

            } catch (BankApiException e) {
                payout.markFailed(e.getMessage());
                payoutRepository.save(payout);
                alertService.alert("Payout failed: " + payout.getId());
            }
        }
    }
}
```

---

## Tổng kết

Reconciliation & Settlement là backbone của FinTech operations:
- **Automated matching** giữa internal records và PSP data
- **Exception management** với auto-resolution và manual review
- **Settlement batch** daily với fee calculation
- **Payout processing** với bank integration

**Bài tiếp theo**: Digital Wallet Architecture — E-Wallet & Balance Management.
