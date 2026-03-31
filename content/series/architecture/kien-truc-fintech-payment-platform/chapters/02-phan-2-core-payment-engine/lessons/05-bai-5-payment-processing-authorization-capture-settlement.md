---
id: 019d8a21-c505-7005-d001-e1f2a3b4c505
title: "Bài 5: Payment Processing - Authorization, Capture & Settlement"
slug: bai-5-payment-processing-authorization-capture-settlement
description: >-
  Deep-dive vào payment processing flow. Two-phase commit cho
  payment. Authorization hold và capture timing. Settlement
  process và clearing. Batch processing vs real-time settlement.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Core Payment Engine"
course:
  id: 019d8a21-c500-7005-d001-e1f2a3b4c5d6
  title: "Kiến trúc FinTech & Payment Platform"
  slug: kien-truc-fintech-payment-platform
---

## Giới thiệu

Sau khi hiểu tổng quan Payment Gateway, bài này deep-dive vào quy trình xử lý thanh toán — từ authorization đến settlement. Đây là phần phức tạp nhất và đòi hỏi sự chính xác tuyệt đối vì liên quan trực tiếp đến tiền.

---

## 1. Authorization Flow

### 1.1 Card Authorization

```
┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│ Customer │   │ Merchant │   │ Acquirer │   │  Card    │   │  Issuer  │
│          │   │          │   │  Bank    │   │ Network  │   │  Bank    │
└────┬─────┘   └────┬─────┘   └────┬─────┘   └────┬─────┘   └────┬─────┘
     │              │              │              │              │
     │  Card Info   │              │              │              │
     ├─────────────►│              │              │              │
     │              │  Auth Req    │              │              │
     │              ├─────────────►│              │              │
     │              │              │  Auth Req    │              │
     │              │              ├─────────────►│              │
     │              │              │              │  Auth Req    │
     │              │              │              ├─────────────►│
     │              │              │              │              │
     │              │              │              │  Check:      │
     │              │              │              │  - Balance   │
     │              │              │              │  - Fraud     │
     │              │              │              │  - Limits    │
     │              │              │              │              │
     │              │              │              │  Auth Resp   │
     │              │              │              │◄─────────────┤
     │              │              │  Auth Resp   │              │
     │              │              │◄─────────────┤              │
     │              │  Auth Resp   │              │              │
     │              │◄─────────────┤              │              │
     │  Result      │              │              │              │
     │◄─────────────┤              │              │              │
```

### 1.2 Authorization Response Codes

| Code | Meaning | Action |
|------|---------|--------|
| `00` | Approved | Proceed with capture |
| `05` | Do not honor | Terminal - don't retry |
| `14` | Invalid card number | Terminal |
| `51` | Insufficient funds | Terminal |
| `54` | Expired card | Terminal |
| `61` | Exceeds limit | Can retry with lower amount |
| `91` | Issuer unavailable | Retry later |

### 1.3 Auth Hold Management

```
Authorization creates a "hold" on customer funds:

Timeline:
Day 0: Auth $100 ──► Hold $100 on card
Day 1-7: Hold active, merchant can capture
Day 7+: Hold expires (auto-release by issuer)

Rules:
├── Auth hold duration varies by card network
│   ├── Visa: 7-30 days
│   ├── Mastercard: 7-30 days
│   └── NAPAS: Varies by issuer
├── Partial capture: Can capture <= auth amount
├── Multi-capture: Some networks support partial captures
└── Void: Cancel auth before capture (release hold)
```

---

## 2. Capture Process

### 2.1 Capture Strategies

```
1. Auto-capture (immediate):
   Auth ──► Immediate Capture
   Use case: Digital goods, instant delivery

2. Manual capture (delayed):
   Auth ──► Wait ──► Capture when ready
   Use case: Physical goods (capture on ship)

3. Partial capture:
   Auth $100 ──► Capture $80 (partial shipment)
   Remaining $20 ──► Void or capture later

4. Multi-capture:
   Auth $100 ──► Capture $50 ──► Capture $30 ──► Capture $20
   Use case: Marketplace with multiple sellers
```

### 2.2 Capture Implementation

```java
public class CaptureService {

    @Transactional
    public CaptureResult capture(String paymentId, Money amount) {
        var payment = paymentRepository.findById(paymentId)
            .orElseThrow(() -> new PaymentNotFoundException(paymentId));

        // Validate
        if (payment.getStatus() != PaymentStatus.AUTHORIZED) {
            throw new InvalidStateException("Payment must be AUTHORIZED");
        }
        if (amount.isGreaterThan(payment.remainingCapturable())) {
            throw new AmountExceedsAuthException();
        }

        // Capture with PSP
        var pspResult = pspAdapter.capture(payment, amount);

        // Update payment
        payment.capture(amount, pspResult);
        paymentRepository.save(payment);

        // Publish event
        eventBus.publish(new PaymentCapturedEvent(payment, amount));

        return CaptureResult.success(payment);
    }
}
```

---

## 3. Settlement Process

### 3.1 Settlement Flow

```
Settlement = Transfer of actual funds from issuer to acquirer to merchant

Daily Settlement Cycle:
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  23:00  Cut-off time                                     │
│    │                                                     │
│    ▼                                                     │
│  Batch all captured transactions for the day             │
│    │                                                     │
│    ▼                                                     │
│  Submit settlement file to acquirer/network              │
│    │                                                     │
│    ▼                                                     │
│  T+1: Clearing (acquirer receives funds from network)    │
│    │                                                     │
│    ▼                                                     │
│  T+1~T+3: Payout to merchant account                    │
│    │                                                     │
│    ▼                                                     │
│  Settlement complete                                     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Settlement Architecture

```
┌─────────────────────────────────────────────────────────┐
│                 SETTLEMENT ENGINE                        │
│                                                          │
│  ┌──────────┐    ┌──────────┐    ┌──────────────────┐  │
│  │ Batch    │    │ Fee      │    │ Payout           │  │
│  │ Builder  │───►│ Engine   │───►│ Calculator       │  │
│  └──────────┘    └──────────┘    └────────┬─────────┘  │
│                                           │              │
│  ┌──────────┐    ┌──────────┐    ┌────────▼─────────┐  │
│  │ Report   │◄───│Reconcile │◄───│ Transfer         │  │
│  │ Generator│    │ Engine   │    │ Executor         │  │
│  └──────────┘    └──────────┘    └──────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### 3.3 Fee Calculation

```
Transaction Amount: 1,000,000 VND

Fee Breakdown:
├── Interchange fee (issuer):     1.5%  = 15,000 VND
├── Network fee (Visa/MC):        0.2%  =  2,000 VND
├── Acquirer fee:                 0.3%  =  3,000 VND
├── Gateway fee (our platform):   0.5%  =  5,000 VND
└── Total fees:                   2.5%  = 25,000 VND

Merchant receives: 975,000 VND
```

```java
public record SettlementCalculation(
    Money grossAmount,
    Money interchangeFee,
    Money networkFee,
    Money acquirerFee,
    Money platformFee,
    Money netAmount
) {
    public static SettlementCalculation calculate(
            Payment payment, MerchantFeeConfig config) {
        Money gross = payment.getCapturedAmount();
        Money interchange = gross.multiply(config.interchangeRate());
        Money network = gross.multiply(config.networkRate());
        Money acquirer = gross.multiply(config.acquirerRate());
        Money platform = gross.multiply(config.platformRate());
        Money net = gross.subtract(interchange)
                        .subtract(network)
                        .subtract(acquirer)
                        .subtract(platform);
        return new SettlementCalculation(
            gross, interchange, network, acquirer, platform, net);
    }
}
```

---

## 4. Batch Processing

### 4.1 End-of-Day Batch

```java
@Scheduled(cron = "0 0 23 * * *") // 23:00 daily
public void runDailySettlement() {
    var cutoffTime = LocalDateTime.now();
    var transactions = paymentRepository
        .findCapturedNotSettled(cutoffTime);

    // Group by merchant
    var byMerchant = transactions.stream()
        .collect(Collectors.groupingBy(Payment::getMerchantId));

    for (var entry : byMerchant.entrySet()) {
        var merchantId = entry.getKey();
        var payments = entry.getValue();

        // Calculate settlement
        var settlement = settlementService
            .createSettlement(merchantId, payments);

        // Generate settlement file
        settlementFileGenerator.generate(settlement);

        // Queue payout
        payoutService.queuePayout(settlement);
    }
}
```

### 4.2 Real-time Settlement

Xu hướng mới với instant payments (VietQR, UPI):

```
Traditional:  Capture → T+1~T+3 Settlement
Real-time:    Capture → Instant Settlement (< 30 seconds)

Real-time settlement requires:
├── Real-time clearing network (NAPAS for Vietnam)
├── Pre-funded settlement accounts
├── Real-time balance management
└── Instant notification to merchant
```

---

## 5. Refund Processing

### 5.1 Refund Types

```
Full Refund:    Payment $100 → Refund $100
Partial Refund: Payment $100 → Refund $30 (keep $70)
Multiple Refund: Payment $100 → Refund $30 → Refund $20 → ... (total ≤ $100)
```

### 5.2 Refund Flow

```java
@Transactional
public RefundResult processRefund(String paymentId, Money amount, String reason) {
    var payment = paymentRepository.findById(paymentId)
        .orElseThrow(() -> new PaymentNotFoundException(paymentId));

    // Validate
    if (!payment.isRefundable()) {
        throw new PaymentNotRefundableException();
    }
    if (amount.isGreaterThan(payment.refundableAmount())) {
        throw new RefundAmountExceedsException();
    }

    // Process refund with PSP
    var pspResult = pspAdapter.refund(payment, amount);

    // Create refund record
    var refund = Refund.create(payment, amount, reason, pspResult);
    refundRepository.save(refund);

    // Update payment
    payment.addRefund(refund);
    paymentRepository.save(payment);

    // Reverse ledger entries
    eventBus.publish(new RefundProcessedEvent(refund));

    return RefundResult.success(refund);
}
```

---

## Tổng kết

Payment processing là quy trình phức tạp với nhiều bước:
- **Authorization**: Reserve funds, validate card
- **Capture**: Collect authorized funds (immediate hoặc delayed)
- **Settlement**: Actual fund transfer qua clearing network
- **Refund**: Reverse the payment flow

Key principles: **idempotency** ở mọi bước, **state machine** rõ ràng, **audit trail** cho mỗi thay đổi.

**Bài tiếp theo**: Multi-PSP Integration — thiết kế abstraction layer để tích hợp nhiều PSPs (VNPay, MoMo, Stripe) với smart routing.
