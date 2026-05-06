---
id: 019e2a10-a109-7a01-b001-f1a2b3c4d509
title: 第9課：支付服務和通知服務
slug: bai-9-payment-notification-service
description: 建立支付服務來處理付款（VNPay、Stripe 模擬）、通知服務來發送電子郵件/簡訊、服務之間的事件驅動通訊。
duration_minutes: 110
is_free: false
video_url: null
sort_order: 8
section_title: 第 2 部分：設計微服務架構
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2547" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2547)"/>

  <!-- Decorations -->
  <g>
    <circle cx="901" cy="253" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="702" cy="154" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1003" cy="55" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="804" cy="216" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="605" cy="117" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="123" x2="1100" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="153" x2="1050" y2="223" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1055.9089653438086,204 1055.9089653438086,242 1023,261 990.0910346561914,242 990.0910346561914,204 1023,185" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 程式設計 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 课：支付服务和通知</tspan>
      <tspan x="60" dy="42">服務</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：設計微服務架構</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

支付服務和通知服務完成電子商務流程：訂單→付款→通知。 Payment Service 處理支付網關集成，Notification Service 透過事件驅動架構發送電子郵件/簡訊（Kafka 將在第 4 部分詳細介紹，本文使用基本事件）。

## 支付服務

### 支付實體

```java
@Entity
@Table(name = "payments")
public class Payment extends PanacheEntity {

    @Column(name = "payment_number", unique = true, nullable = false)
    public String paymentNumber;

    @Column(name = "order_id", nullable = false)
    public Long orderId;

    @Column(name = "order_number")
    public String orderNumber;

    @Column(name = "customer_id", nullable = false)
    public String customerId;

    @Embedded
    @AttributeOverrides({
        @AttributeOverride(name = "amount",
            column = @Column(name = "amount")),
        @AttributeOverride(name = "currency",
            column = @Column(name = "currency"))
    })
    public Money amount;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    public PaymentStatus status = PaymentStatus.PENDING;

    @Enumerated(EnumType.STRING)
    @Column(name = "payment_method", length = 20)
    public PaymentMethod method;

    @Column(name = "gateway_transaction_id")
    public String gatewayTransactionId;

    @Column(name = "gateway_response", columnDefinition = "TEXT")
    public String gatewayResponse;

    @Column(name = "failure_reason")
    public String failureReason;

    @Column(name = "created_at", updatable = false)
    public LocalDateTime createdAt;

    @Column(name = "completed_at")
    public LocalDateTime completedAt;

    @PrePersist
    void onCreate() {
        createdAt = LocalDateTime.now();
        paymentNumber = "PAY-" + System.currentTimeMillis()
            + "-" + UUID.randomUUID().toString()
            .substring(0, 6).toUpperCase();
    }

    // Domain Methods
    public void complete(String transactionId) {
        this.status = PaymentStatus.COMPLETED;
        this.gatewayTransactionId = transactionId;
        this.completedAt = LocalDateTime.now();
    }

    public void fail(String reason) {
        this.status = PaymentStatus.FAILED;
        this.failureReason = reason;
    }

    public void refund() {
        if (this.status != PaymentStatus.COMPLETED) {
            throw new BusinessException(400,
                "Can only refund completed payments");
        }
        this.status = PaymentStatus.REFUNDED;
    }
}

public enum PaymentStatus {
    PENDING, PROCESSING, COMPLETED, FAILED, REFUNDED
}

public enum PaymentMethod {
    VNPAY, MOMO, BANK_TRANSFER, COD
}
```

### 支付網關－策略模式

```java
public interface PaymentGateway {
    PaymentResult process(PaymentRequest request);
    PaymentResult checkStatus(String transactionId);
}

public record PaymentRequest(
    String paymentNumber,
    BigDecimal amount,
    String currency,
    PaymentMethod method,
    String returnUrl,
    String customerIp
) {}

public record PaymentResult(
    boolean success,
    String transactionId,
    String redirectUrl,  // cho online payment
    String message,
    String rawResponse
) {}
```

### VNPay 網關（模擬實作）

```java
@ApplicationScoped
@Named("vnpay")
public class VnPayGateway implements PaymentGateway {

    @ConfigProperty(name = "payment.vnpay.tmn-code")
    String tmnCode;

    @ConfigProperty(name = "payment.vnpay.secret-key")
    String secretKey;

    @ConfigProperty(name = "payment.vnpay.url",
        defaultValue = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html")
    String vnpayUrl;

    @Override
    public PaymentResult process(PaymentRequest request) {
        // Build VNPay payment URL
        Map<String, String> params = new TreeMap<>();
        params.put("vnp_Version", "2.1.0");
        params.put("vnp_TmnCode", tmnCode);
        params.put("vnp_Amount",
            String.valueOf(request.amount()
                .multiply(BigDecimal.valueOf(100)).longValue()));
        params.put("vnp_Command", "pay");
        params.put("vnp_OrderInfo", request.paymentNumber());
        params.put("vnp_TxnRef", request.paymentNumber());
        params.put("vnp_IpAddr", request.customerIp());
        params.put("vnp_ReturnUrl", request.returnUrl());
        params.put("vnp_CreateDate",
            LocalDateTime.now().format(
                DateTimeFormatter.ofPattern("yyyyMMddHHmmss")));

        String queryString = buildQueryString(params);
        String secureHash = hmacSHA512(secretKey, queryString);
        String paymentUrl = vnpayUrl + "?" + queryString
            + "&vnp_SecureHash=" + secureHash;

        return new PaymentResult(
            true, null, paymentUrl,
            "Redirect to VNPay", null);
    }

    @Override
    public PaymentResult checkStatus(String transactionId) {
        // Query VNPay API for transaction status
        return new PaymentResult(true, transactionId,
            null, "Transaction completed", null);
    }

    private String buildQueryString(Map<String, String> params) {
        return params.entrySet().stream()
            .map(e -> e.getKey() + "="
                + URLEncoder.encode(e.getValue(),
                    StandardCharsets.UTF_8))
            .collect(Collectors.joining("&"));
    }

    private String hmacSHA512(String key, String data) {
        try {
            Mac hmac = Mac.getInstance("HmacSHA512");
            hmac.init(new SecretKeySpec(
                key.getBytes(StandardCharsets.UTF_8),
                "HmacSHA512"));
            byte[] hash = hmac.doFinal(
                data.getBytes(StandardCharsets.UTF_8));
            return HexFormat.of().formatHex(hash);
        } catch (Exception e) {
            throw new RuntimeException(
                "Failed to generate HMAC", e);
        }
    }
}
```

### 支付服務層

```java
@ApplicationScoped
public class PaymentService {

    @Inject
    @Named("vnpay")
    PaymentGateway vnpayGateway;

    @Inject
    @RestClient
    OrderServiceClient orderClient;

    @Inject
    Event<PaymentCompletedEvent> paymentCompletedEvent;

    @Transactional
    public PaymentResponse initiatePayment(
            String customerId,
            InitiatePaymentRequest request) {

        Payment payment = new Payment();
        payment.orderId = request.orderId();
        payment.orderNumber = request.orderNumber();
        payment.customerId = customerId;
        payment.amount = Money.vnd(request.amount());
        payment.method = request.method();
        payment.status = PaymentStatus.PROCESSING;
        payment.persist();

        PaymentResult result = vnpayGateway.process(
            new PaymentRequest(
                payment.paymentNumber,
                request.amount(), "VND",
                request.method(),
                request.returnUrl(),
                request.customerIp()));

        return new PaymentResponse(
            payment.paymentNumber,
            result.redirectUrl(),
            payment.status.name());
    }

    @Transactional
    public void handleCallback(Map<String, String> params) {
        String paymentNumber = params.get("vnp_TxnRef");
        String responseCode = params.get("vnp_ResponseCode");
        String transactionId = params.get("vnp_TransactionNo");

        Payment payment = Payment.find(
            "paymentNumber", paymentNumber)
            .firstResult();

        if ("00".equals(responseCode)) {
            payment.complete(transactionId);
            // Notify Order Service
            orderClient.markPaid(payment.orderId,
                payment.paymentNumber);
            // Fire CDI Event
            paymentCompletedEvent.fire(
                new PaymentCompletedEvent(
                    payment.orderId,
                    payment.paymentNumber,
                    payment.amount));
        } else {
            payment.fail("VNPay response: " + responseCode);
        }
    }
}
```

## 通知服務

### 通知實體

```java
@Entity
@Table(name = "notifications")
public class Notification extends PanacheEntity {

    @Column(name = "recipient", nullable = false)
    public String recipient; // email or phone

    @Enumerated(EnumType.STRING)
    @Column(name = "channel", length = 10)
    public NotificationChannel channel;

    @Column(nullable = false)
    public String subject;

    @Column(columnDefinition = "TEXT", nullable = false)
    public String body;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    public NotificationStatus status = NotificationStatus.PENDING;

    @Column(name = "reference_type", length = 50)
    public String referenceType; // ORDER, PAYMENT

    @Column(name = "reference_id")
    public String referenceId;

    @Column(name = "sent_at")
    public LocalDateTime sentAt;

    @Column(name = "error_message")
    public String errorMessage;

    @Column(name = "retry_count")
    public int retryCount = 0;

    @Column(name = "created_at", updatable = false)
    public LocalDateTime createdAt;

    @PrePersist
    void onCreate() { createdAt = LocalDateTime.now(); }

    public void markSent() {
        this.status = NotificationStatus.SENT;
        this.sentAt = LocalDateTime.now();
    }

    public void markFailed(String error) {
        this.retryCount++;
        if (retryCount >= 3) {
            this.status = NotificationStatus.FAILED;
        }
        this.errorMessage = error;
    }
}

public enum NotificationChannel { EMAIL, SMS }
public enum NotificationStatus { PENDING, SENT, FAILED }
```

### 使用 Quarkus Mailer 發送電子郵件

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-mailer</artifactId>
</dependency>
```

```properties
# Dev mode: Quarkus Mailpit (mock SMTP)
# Production:
%prod.quarkus.mailer.from=noreply@ecommerce.xdev.asia
%prod.quarkus.mailer.host=${SMTP_HOST}
%prod.quarkus.mailer.port=587
%prod.quarkus.mailer.start-tls=REQUIRED
%prod.quarkus.mailer.username=${SMTP_USERNAME}
%prod.quarkus.mailer.password=${SMTP_PASSWORD}
```

```java
@ApplicationScoped
public class EmailNotificationSender {

    @Inject
    Mailer mailer;

    public void send(Notification notification) {
        try {
            mailer.send(Mail.withHtml(
                notification.recipient,
                notification.subject,
                notification.body));
            notification.markSent();
        } catch (Exception e) {
            notification.markFailed(e.getMessage());
        }
    }
}
```

### 通知模板

```java
@ApplicationScoped
public class NotificationTemplateService {

    public Notification createOrderConfirmation(
            String email, String orderNumber,
            BigDecimal total) {
        Notification n = new Notification();
        n.recipient = email;
        n.channel = NotificationChannel.EMAIL;
        n.subject = "Xác nhận đơn hàng " + orderNumber;
        n.body = """
            <h2>Đơn hàng của bạn đã được xác nhận!</h2>
            <p>Mã đơn hàng: <strong>%s</strong></p>
            <p>Tổng tiền: <strong>%s VNĐ</strong></p>
            <p>Cảm ơn bạn đã mua sắm tại xdev.asia!</p>
            """.formatted(orderNumber,
                NumberFormat.getInstance(
                    new Locale("vi", "VN")).format(total));
        n.referenceType = "ORDER";
        n.referenceId = orderNumber;
        return n;
    }

    public Notification createPaymentSuccess(
            String email, String paymentNumber,
            String orderNumber, BigDecimal amount) {
        Notification n = new Notification();
        n.recipient = email;
        n.channel = NotificationChannel.EMAIL;
        n.subject = "Thanh toán thành công — " + orderNumber;
        n.body = """
            <h2>Thanh toán thành công!</h2>
            <p>Mã giao dịch: <strong>%s</strong></p>
            <p>Đơn hàng: <strong>%s</strong></p>
            <p>Số tiền: <strong>%s VNĐ</strong></p>
            """.formatted(paymentNumber, orderNumber,
                NumberFormat.getInstance(
                    new Locale("vi", "VN")).format(amount));
        n.referenceType = "PAYMENT";
        n.referenceId = paymentNumber;
        return n;
    }
}
```

### 通知 REST API

```java
@Path("/api/v1/notifications")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Notifications")
public class NotificationResource {

    @Inject
    NotificationService notificationService;

    @POST
    @Path("/send")
    public Response sendNotification(
            @Valid SendNotificationRequest request) {
        notificationService.send(request);
        return Response.accepted().build();
    }

    @GET
    @Path("/history")
    public List<NotificationDTO> history(
            @QueryParam("referenceType") String type,
            @QueryParam("referenceId") String id) {
        return notificationService.getHistory(type, id);
    }

    @POST
    @Path("/retry-failed")
    public Response retryFailed() {
        int count = notificationService.retryFailed();
        return Response.ok(Map.of("retried", count)).build();
    }
}
```

## Docker Compose — 運行所有服務

```yaml
# docker-compose.yml
services:
  product-db:
    image: postgres:16
    environment:
      POSTGRES_DB: product_db
      POSTGRES_USER: product
      POSTGRES_PASSWORD: product_pass
    ports: ["5433:5432"]

  order-db:
    image: postgres:16
    environment:
      POSTGRES_DB: order_db
      POSTGRES_USER: order
      POSTGRES_PASSWORD: order_pass
    ports: ["5434:5432"]

  payment-db:
    image: postgres:16
    environment:
      POSTGRES_DB: payment_db
      POSTGRES_USER: payment
      POSTGRES_PASSWORD: payment_pass
    ports: ["5435:5432"]

  notification-db:
    image: postgres:16
    environment:
      POSTGRES_DB: notification_db
      POSTGRES_USER: notification
      POSTGRES_PASSWORD: notification_pass
    ports: ["5436:5432"]

  mailpit:
    image: axllent/mailpit
    ports:
      - "8025:8025"  # Web UI
      - "1025:1025"  # SMTP
```

## 練習

1. 創建支付服務 `Payment` 实体和 VNPay 模拟网关
2. 實現回調處理程序來處理來自 VNPay 的結果
3. 使用電子郵件範本建立通知服務
4. 寫 `docker-compose.yml` 運行所有資料庫+ Mailpit
5. 測試流程：建立訂單→發起支付→回呼→發送郵件通知
6. 透過 Mailpit UI 檢查電子郵件： `http://localhost:8025`

## 總結

- **支付服務**使用支付網關的策略模式（VNPay、MoMo...）
- **回呼模式**處理來自網關的非同步支付結果
- **通知服務** 透過 Quarkus Mailer 和開發服務 (Mailpit) 發送電子郵件
- **CDI 活動** (`Event<T>`) 用於進程內事件通信
- Docker Compose 編排所有資料庫以進行本地開發

下一篇文章：Keycloak — 安裝並整合 OIDC 身份驗證。
