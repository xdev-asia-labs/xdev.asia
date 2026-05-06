---
id: 019e2a10-a109-7a01-b001-f1a2b3c4d509
title: 'レッスン 9: 支払いサービスと通知サービス'
slug: bai-9-payment-notification-service
description: >-
  支払いを処理するための支払いサービス (VNPay、Stripe モック)、電子メール/SMS
  を送信するための通知サービス、サービス間のイベント駆動型通信を構築します。
duration_minutes: 110
is_free: false
video_url: null
sort_order: 8
section_title: 'パート 2: マイクロサービス アーキテクチャの設計'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus マイクロサービス: 基本から運用まで'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 プログラミング — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: 支払いサービスと通知</tspan>
      <tspan x="60" dy="42">サービス</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus マイクロサービス: 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: マイクロサービス アーキテクチャの設計</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

決済サービスと通知サービスは、ECの注文→支払い→通知という流れを完結させます。 Payment Service は支払いゲートウェイの統合を処理し、Notification Service はイベント駆動型アーキテクチャ経由で電子メール/SMS を送信します (Kafka についてはパート 4 で詳しく説明します。この記事では基本的なイベントを使用します)。

## 決済サービス

### 支払い主体

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

### ペイメントゲートウェイ — 戦略パターン

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

### VNPay ゲートウェイ (モック実装)

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

### 決済サービス層

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

## 通知サービス

### 通知エンティティ

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

### Quarkus Mailer を使用した電子メール送信者

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

### 通知テンプレート

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

## Docker Compose — すべてのサービスを実行する

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

## 演習

1. 決済サービスを作成する `Payment` エンティティと VNPay モック ゲートウェイ
2. VNPay からの結果を処理するコールバック ハンドラーを実装します。
3. 電子メール テンプレートを使用して通知サービスを作成する
4. 書く `docker-compose.yml` すべてのデータベースと Mailpit を実行する
5. テスト フロー: 注文の作成 → 支払いの開始 → コールバック → 電子メール通知の送信
6. Mailpit UI 経由で電子メールを確認します。 `http://localhost:8025`

## 概要

- **決済サービス**は、決済ゲートウェイ (VNPay、MoMo...) に戦略パターンを使用します。
- **コールバック パターン** ゲートウェイからの非同期支払い結果を処理します
- **通知サービス** は、開発サービス (Mailpit) を使用して Quarkus Mailer 経由で電子メールを送信します
- **CDI イベント** (`Event<T>`) インプロセスイベント通信用
- Docker Compose はローカル開発用にすべてのデータベースを調整します

次の記事: Keycloak — OIDC 認証をインストールして統合する。
