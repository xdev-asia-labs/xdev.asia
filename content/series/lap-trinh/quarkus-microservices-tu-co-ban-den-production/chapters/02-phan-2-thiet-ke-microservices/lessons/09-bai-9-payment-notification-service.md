---
id: 019e2a10-a109-7a01-b001-f1a2b3c4d509
title: 'Bài 9: Payment Service & Notification Service'
slug: bai-9-payment-notification-service
description: >-
  Xây dựng Payment Service xử lý thanh toán (VNPay, Stripe mock), Notification
  Service gửi email/SMS, Event-driven communication giữa các services.
duration_minutes: 110
is_free: false
video_url: null
sort_order: 8
section_title: "Phần 2: Thiết kế Microservices Architecture"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

## Giới thiệu

Payment Service và Notification Service hoàn thiện flow E-Commerce: đặt hàng → thanh toán → thông báo. Payment Service xử lý payment gateway integration, Notification Service gửi email/SMS qua event-driven architecture (Kafka sẽ chi tiết ở Phần 4, bài này dùng event cơ bản).

## Payment Service

### Payment Entity

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

### Payment Gateway — Strategy Pattern

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

### VNPay Gateway (Mock Implementation)

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

### Payment Service Layer

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

## Notification Service

### Notification Entity

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

### Email Sender với Quarkus Mailer

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

### Notification Templates

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

### Notification REST API

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

## Docker Compose — Chạy tất cả services

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

## Bài tập

1. Tạo Payment Service với `Payment` entity và VNPay mock gateway
2. Implement callback handler xử lý kết quả từ VNPay
3. Tạo Notification Service với email templates
4. Viết `docker-compose.yml` chạy tất cả databases + Mailpit
5. Test flow: Create Order → Initiate Payment → Callback → Send Email Notification
6. Kiểm tra email qua Mailpit UI tại `http://localhost:8025`

## Tổng kết

- **Payment Service** dùng Strategy Pattern cho payment gateways (VNPay, MoMo...)
- **Callback Pattern** xử lý async payment result từ gateway
- **Notification Service** gửi email qua Quarkus Mailer với Dev Services (Mailpit)
- **CDI Events** (`Event<T>`) cho in-process event communication
- Docker Compose orchestrate tất cả databases cho local development

Bài tiếp theo: Keycloak — Cài đặt và tích hợp OIDC Authentication.
