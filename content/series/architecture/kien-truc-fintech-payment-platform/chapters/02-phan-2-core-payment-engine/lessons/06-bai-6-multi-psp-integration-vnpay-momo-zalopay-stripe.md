---
id: 019d8a21-c506-7005-d001-e1f2a3b4c506
title: "Bài 6: Multi-PSP Integration - VNPay, MoMo, ZaloPay, Stripe"
slug: bai-6-multi-psp-integration-vnpay-momo-zalopay-stripe
description: >-
  Thiết kế Payment Service Provider abstraction layer. Adapter
  pattern cho multiple PSPs. Integration với VNPay, MoMo, ZaloPay
  và Stripe. PSP routing và fallback strategy.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Core Payment Engine"
course:
  id: 019d8a21-c500-7005-d001-e1f2a3b4c5d6
  title: "Kiến trúc FinTech & Payment Platform"
  slug: kien-truc-fintech-payment-platform
---

## Giới thiệu

Một payment platform thực tế luôn cần tích hợp nhiều PSP (Payment Service Provider) để tối ưu success rate, chi phí, và coverage. Bài này hướng dẫn thiết kế abstraction layer cho multi-PSP integration với smart routing.

---

## 1. PSP Abstraction Layer

### 1.1 Adapter Pattern

```
┌────────────────────────────────────────────────────┐
│                 PAYMENT SERVICE                     │
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │            PSP Interface (Port)               │  │
│  │  authorize() / capture() / refund() / void() │  │
│  └──────────────────┬───────────────────────────┘  │
│                     │                               │
│      ┌──────────────┼──────────────┐               │
│      │              │              │               │
│  ┌───▼────┐   ┌─────▼────┐  ┌─────▼────┐         │
│  │ VNPay  │   │  MoMo    │  │ Stripe   │  ...    │
│  │Adapter │   │ Adapter  │  │ Adapter  │         │
│  └───┬────┘   └─────┬────┘  └─────┬────┘         │
└──────┼──────────────┼─────────────┼────────────────┘
       │              │             │
   ┌───▼────┐   ┌─────▼────┐  ┌────▼─────┐
   │ VNPay  │   │  MoMo    │  │ Stripe   │
   │  API   │   │   API    │  │   API    │
   └────────┘   └──────────┘  └──────────┘
```

### 1.2 PSP Interface

```java
public interface PaymentServiceProvider {
    String getId();
    Set<PaymentMethod> supportedMethods();
    Set<Currency> supportedCurrencies();

    AuthResult authorize(AuthRequest request);
    CaptureResult capture(CaptureRequest request);
    RefundResult refund(RefundRequest request);
    VoidResult voidPayment(VoidRequest request);
    PaymentStatus queryStatus(String pspReference);
}
```

### 1.3 VNPay Adapter

```java
@Component
public class VNPayAdapter implements PaymentServiceProvider {

    @Override
    public String getId() { return "vnpay"; }

    @Override
    public Set<PaymentMethod> supportedMethods() {
        return Set.of(
            PaymentMethod.ATM_CARD,
            PaymentMethod.CREDIT_CARD,
            PaymentMethod.QR_CODE,
            PaymentMethod.BANK_TRANSFER
        );
    }

    @Override
    public AuthResult authorize(AuthRequest request) {
        // Build VNPay-specific parameters
        var params = new TreeMap<String, String>();
        params.put("vnp_Version", "2.1.0");
        params.put("vnp_Command", "pay");
        params.put("vnp_TmnCode", config.getTmnCode());
        params.put("vnp_Amount", String.valueOf(
            request.getAmount().multiply(100).longValue()));
        params.put("vnp_CurrCode", "VND");
        params.put("vnp_TxnRef", request.getOrderId());
        params.put("vnp_OrderInfo", request.getDescription());
        params.put("vnp_ReturnUrl", config.getReturnUrl());

        // Sign with HMAC-SHA512
        String signature = HmacUtils.hmacSha512(
            config.getHashSecret(), buildQueryString(params));
        params.put("vnp_SecureHash", signature);

        // Return redirect URL for customer
        String paymentUrl = config.getPayUrl() + "?" + buildQueryString(params);
        return AuthResult.redirect(paymentUrl);
    }
}
```

---

## 2. Smart Routing

### 2.1 Routing Engine

```java
@Service
public class PSPRouter {
    private final List<RoutingRule> rules;
    private final PSPHealthMonitor healthMonitor;

    public PaymentServiceProvider selectPSP(PaymentRequest request) {
        // 1. Filter by capability
        var candidates = pspRegistry.getAll().stream()
            .filter(psp -> psp.supportedMethods().contains(request.getMethod()))
            .filter(psp -> psp.supportedCurrencies().contains(request.getCurrency()))
            .filter(psp -> healthMonitor.isHealthy(psp.getId()))
            .toList();

        // 2. Apply routing rules
        for (var rule : rules) {
            var result = rule.evaluate(request, candidates);
            if (result.isPresent()) return result.get();
        }

        // 3. Default: cost-optimized selection
        return candidates.stream()
            .min(Comparator.comparing(psp -> getFeeRate(psp, request)))
            .orElseThrow(() -> new NoPSPAvailableException());
    }
}
```

### 2.2 Routing Strategies

| Strategy | Logic | Use Case |
|----------|-------|----------|
| **Cost-optimized** | Lowest fee PSP | Default |
| **Success-rate** | Highest success rate PSP | High-value transactions |
| **Latency-optimized** | Fastest PSP | Real-time payments |
| **Geographic** | PSP nearest to customer | Cross-border |
| **Load-balanced** | Round-robin/weighted | Traffic distribution |
| **A/B testing** | Random split | Testing new PSP |

### 2.3 Failover Pattern

```
Primary PSP (VNPay)
    │
    ├── Success → Done
    │
    ├── Timeout/5xx → Retry once
    │       │
    │       ├── Success → Done
    │       │
    │       └── Fail → Fallback PSP (Stripe)
    │                   │
    │                   ├── Success → Done
    │                   │
    │                   └── Fail → Return error to customer
    │
    └── Terminal error (declined) → Return error (no fallback)
```

---

## 3. PSP Health Monitoring

```java
@Component
public class PSPHealthMonitor {
    // Track success rate per PSP with sliding window
    private final Map<String, SlidingWindowCounter> successRates;

    @Scheduled(fixedRate = 60000) // Every minute
    public void checkHealth() {
        for (var entry : successRates.entrySet()) {
            var pspId = entry.getKey();
            var counter = entry.getValue();
            double rate = counter.getSuccessRate();

            if (rate < 0.5) { // < 50% success rate
                circuitBreaker.open(pspId);
                alertService.send("PSP " + pspId + " degraded: " + rate);
            }
        }
    }

    public boolean isHealthy(String pspId) {
        return !circuitBreaker.isOpen(pspId);
    }
}
```

---

## 4. Webhook Handling

### 4.1 Receiving PSP Callbacks

```java
@RestController
@RequestMapping("/webhooks")
public class WebhookController {

    @PostMapping("/vnpay")
    public ResponseEntity<String> handleVNPayCallback(
            @RequestParam Map<String, String> params) {
        // 1. Verify signature
        if (!vnpayAdapter.verifySignature(params)) {
            return ResponseEntity.badRequest().body("Invalid signature");
        }

        // 2. Process callback
        var paymentId = params.get("vnp_TxnRef");
        var responseCode = params.get("vnp_ResponseCode");

        webhookProcessor.process(WebhookEvent.builder()
            .pspId("vnpay")
            .paymentId(paymentId)
            .status(mapStatus(responseCode))
            .rawPayload(params)
            .build());

        return ResponseEntity.ok("OK");
    }

    @PostMapping("/stripe")
    public ResponseEntity<Void> handleStripeWebhook(
            @RequestBody String payload,
            @RequestHeader("Stripe-Signature") String signature) {
        // Verify Stripe webhook signature
        var event = stripeAdapter.verifyAndParse(payload, signature);
        webhookProcessor.process(event);
        return ResponseEntity.ok().build();
    }
}
```

---

## Tổng kết

Multi-PSP integration cần:
- **Adapter Pattern** để abstract away PSP-specific APIs
- **Smart Routing** để tối ưu cost, success rate, latency
- **Failover** tự động khi PSP gặp sự cố
- **Health Monitoring** với circuit breaker
- **Webhook handling** cho mỗi PSP với signature verification

**Bài tiếp theo**: Reconciliation & Settlement Engine — hệ thống đối soát và quy trình settlement tự động.
