---
id: 153d0a9d-c55e-4675-a7cf-c4cf00d129fd
title: 'hapi-fhir-jpaserver-subscription'
slug: hapi-fhir-jpaserver-subscription
description: 'HAPI FHIR JPA Server Subscription là một thành phần quan trọng trong hệ sinh thái HAPI FHIR, cung cấp khả năng triển khai các FHIR Subscriptions một cơ chế thông báo thời gian thực giúp các ứng dụng được cập nhật khi có…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 24
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
HAPI FHIR JPA Server Subscription là một thành phần quan trọng trong hệ sinh thái HAPI FHIR, cung cấp khả năng triển khai các FHIR Subscriptions - một cơ chế thông báo thời gian thực giúp các ứng dụng được cập nhật khi có sự thay đổi dữ liệu trên FHIR server. Module này mở rộng khả năng của HAPI FHIR JPA Server, giúp xây dựng các hệ thống y tế có khả năng phản ứng nhanh và theo dõi liên tục thay đổi dữ liệu lâm sàng.

Trong bài viết này, chúng ta sẽ khám phá chi tiết về HAPI FHIR JPA Server Subscription, bao gồm cách thức hoạt động, các loại kênh thông báo, cách triển khai và tùy chỉnh, cùng những ứng dụng thực tế trong các hệ thống y tế hiện đại.

### FHIR Subscription - Nền tảng kiến thức

#### Khái niệm FHIR Subscription

Trong tiêu chuẩn HL7 FHIR, Subscription là một resource cho phép các ứng dụng đăng ký nhận thông báo khi có sự kiện đặc biệt xảy ra trên FHIR server. Về bản chất, đây là mô hình "publish-subscribe" được áp dụng cho dữ liệu y tế.

Các thành phần chính của một FHIR Subscription:

1. **Criteria**: Tiêu chí xác định khi nào nên gửi thông báo (thường là biểu thức tìm kiếm)
2. **Channel**: Cách thức gửi thông báo (REST hook, Websocket, Email, SMS, etc.)
3. **Status**: Trạng thái của subscription (requested, active, error, off, etc.)
4. **End**: Thời điểm kết thúc subscription
5. **Reason**: Lý do subscription được tạo
6. **Payload**: Thông tin sẽ được gửi trong thông báo

#### Các loại kênh thông báo (Channel Types)

FHIR R5 định nghĩa nhiều loại kênh thông báo khác nhau, HAPI FHIR hỗ trợ các kênh chính sau:

1. **REST Hook**: Server gửi HTTP POST request đến một endpoint được chỉ định
2. **Websocket**: Thông báo được gửi qua kết nối websocket duy trì liên tục
3. **Email**: Thông báo được gửi qua email
4. **MQTT**: Thông báo được gửi qua giao thức MQTT (message queuing)
5. **Topic-Based/Message Queue**: Thông báo được gửi đến message broker như RabbitMQ, Kafka

### HAPI FHIR JPA Server Subscription

#### Kiến trúc và Nguyên lý hoạt động

HAPI FHIR JPA Server Subscription mở rộng HAPI FHIR JPA Server để hỗ trợ cơ chế subscription. Khi một resource được tạo, cập nhật hoặc xóa, server sẽ:

1. Kiểm tra các subscription đang hoạt động
2. Đánh giá tiêu chí (criteria) của mỗi subscription
3. Nếu resource phù hợp với tiêu chí, tạo thông báo
4. Gửi thông báo qua kênh đã đăng ký

Kiến trúc này triển khai một **Subscription Registry** quản lý tất cả các subscription đang hoạt động và một **Delivery Manager** chịu trách nhiệm gửi thông báo qua các kênh khác nhau.

#### Cài đặt và Cấu hình

**Maven Dependency**

```xml
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-jpaserver-subscription</artifactId>
    <version>6.4.0</version>
</dependency>
```

**Cấu hình cơ bản trong Spring Boot**

```java
@Configuration
public class FhirServerConfig {
    
    @Bean
    public DaoConfig daoConfig() {
        DaoConfig config = new DaoConfig();
        // Cho phép Subscription
        config.setSubscriptionEnabled(true);
        // Số lượng thread xử lý subscription
        config.setSubscriptionThreadsCount(5);
        // Cache size cho subscription matching
        config.setSubscriptionMatchingCacheSize(10000);
        return config;
    }
    
    @Autowired
    private SubscriptionInterceptorLoader subscriptionInterceptorLoader;
    
    @Bean
    public IInterceptorService interceptorService() {
        InterceptorService interceptorService = new InterceptorService();
        // Đăng ký interceptor xử lý subscription
        subscriptionInterceptorLoader.registerInterceptors(interceptorService);
        return interceptorService;
    }
    
    @Bean
    public SubscriptionMatcherInterceptor subscriptionMatcherInterceptor() {
        return new SubscriptionMatcherInterceptor();
    }
    
    @Bean
    public SubscriptionActivatingInterceptor subscriptionActivatingInterceptor() {
        SubscriptionActivatingInterceptor interceptor = new SubscriptionActivatingInterceptor();
        // Thời gian kiểm tra subscription activation (ms)
        interceptor.setPollingFrequencyMs(10000);
        return interceptor;
    }
}
```

**Cấu hình cho các Channel Types**

**REST Hook**

```java
@Bean
public SubscriptionRestHookInterceptor subscriptionRestHookInterceptor() {
    SubscriptionRestHookInterceptor interceptor = new SubscriptionRestHookInterceptor();
    // Số thread sử dụng cho delivery
    interceptor.setThreadCount(5);
    // Độ trễ tối đa khi gửi thông báo (ms)
    interceptor.setMaximumSendAttemptDelaySeconds(300);
    return interceptor;
}
```

**Websocket**

```java
@Bean
public WebSocketServlet webSocketServlet() {
    WebSocketServlet servlet = new WebSocketServlet();
    servlet.setSubscriptionRegistry(subscriptionRegistry());
    return servlet;
}

@Bean
public ISubscriptionRegistry subscriptionRegistry() {
    return new SubscriptionWebSocketRegistry();
}

@Bean
public SubscriptionWebsocketInterceptor subscriptionWebsocketInterceptor() {
    return new SubscriptionWebsocketInterceptor();
}
```

**Email**

```java
@Bean
public SubscriptionEmailInterceptor subscriptionEmailInterceptor() {
    SubscriptionEmailInterceptor interceptor = new SubscriptionEmailInterceptor();
    
    // Cấu hình SMTP
    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
    mailSender.setHost("smtp.example.com");
    mailSender.setPort(587);
    mailSender.setUsername("notification@example.com");
    mailSender.setPassword("password");
    
    Properties props = mailSender.getJavaMailProperties();
    props.put("mail.transport.protocol", "smtp");
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.starttls.enable", "true");
    
    interceptor.setMailSender(mailSender);
    interceptor.setFromAddress("notification@example.com");
    
    return interceptor;
}
```

### Ví dụ thực tế

#### Tạo REST Hook Subscription để theo dõi bệnh nhân mới

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.client.api.IGenericClient;
import org.hl7.fhir.r5.model.*;

public class CreateSubscriptionExample {
    
    public static void main(String[] args) {
        FhirContext ctx = FhirContext.forR5();
        IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");
        
        // Tạo subscription theo dõi bệnh nhân mới
        Subscription subscription = new Subscription();
        
        // Thiết lập trạng thái
        subscription.setStatus(Subscription.SubscriptionStatus.REQUESTED);
        
        // Thiết lập tiêu chí: theo dõi khi có Patient mới được tạo
        subscription.setCriteria("Patient?_lastUpdated=gt=${%date.now.withSecondOfMinute(0).withMinuteOfHour(0).withHourOfDay(0)}");
        
        // Thiết lập lý do
        subscription.setReason("Theo dõi bệnh nhân mới để gửi email chào mừng");
        
        // Thiết lập kênh (REST Hook)
        Subscription.SubscriptionChannelComponent channel = subscription.getChannel();
        channel.setType(Subscription.SubscriptionChannelType.RESTHOOK);
        channel.setEndpoint("https://webhook.example.com/patient-notifications");
        
        // Thiết lập payload
        channel.setPayload("application/fhir+json");
        
        // Thiết lập header cho REST Hook
        Extension headerExtension = new Extension();
        headerExtension.setUrl("http://hl7.org/fhir/subscription/header");
        headerExtension.setValue(new StringType("Authorization: Bearer secret-token-here"));
        channel.addExtension(headerExtension);
        
        // Lưu subscription vào server
        MethodOutcome outcome = client.create().resource(subscription).execute();
        
        // In ra ID của subscription đã tạo
        System.out.println("Subscription created, ID: " + outcome.getId().getValue());
    }
}
```

#### Tạo Websocket Subscription để theo dõi dấu hiệu sinh tồn

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.client.api.IGenericClient;
import org.hl7.fhir.r5.model.*;

public class CreateWebsocketSubscriptionExample {
    
    public static void main(String[] args) {
        FhirContext ctx = FhirContext.forR5();
        IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");
        
        // Tạo subscription theo dõi dấu hiệu sinh tồn
        Subscription subscription = new Subscription();
        
        // Thiết lập trạng thái
        subscription.setStatus(Subscription.SubscriptionStatus.REQUESTED);
        
        // Thiết lập tiêu chí: theo dõi khi có Observation mới với category = "vital-signs"
        subscription.setCriteria("Observation?category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs");
        
        // Thiết lập lý do
        subscription.setReason("Theo dõi dấu hiệu sinh tồn để cảnh báo bác sĩ");
        
        // Thiết lập kênh (Websocket)
        Subscription.SubscriptionChannelComponent channel = subscription.getChannel();
        channel.setType(Subscription.SubscriptionChannelType.WEBSOCKET);
        channel.setPayload("application/fhir+json");
        
        // Lưu subscription vào server
        MethodOutcome outcome = client.create().resource(subscription).execute();
        
        // In ra ID của subscription đã tạo
        System.out.println("Websocket Subscription created, ID: " + outcome.getId().getValue());
    }
}
```

#### Client Websocket để nhận thông báo

```java
import javax.websocket.*;
import java.net.URI;

@ClientEndpoint
public class FhirWebsocketClient {
    
    private Session session;
    
    @OnOpen
    public void onOpen(Session session) {
        this.session = session;
        System.out.println("Connected to FHIR Websocket Subscription");
        
        // Gửi binding message để liên kết với subscription
        String bindingMessage = "bind " + subscriptionId;
        session.getAsyncRemote().sendText(bindingMessage);
    }
    
    @OnMessage
    public void onMessage(String message) {
        System.out.println("Received: " + message);
        
        // Parse thông báo FHIR
        FhirContext ctx = FhirContext.forR5();
        IParser parser = ctx.newJsonParser();
        
        try {
            // Thông báo có thể là Subscription hoặc SubscriptionStatus
            // hoặc resource gốc (tùy thuộc vào cấu hình)
            IBaseResource resource = parser.parseResource(message);
            
            if (resource instanceof Observation) {
                Observation obs = (Observation) resource;
                // Xử lý thông tin dấu hiệu sinh tồn
                processVitalSign(obs);
            }
        } catch (Exception e) {
            System.err.println("Error parsing message: " + e.getMessage());
        }
    }
    
    @OnClose
    public void onClose(CloseReason reason) {
        System.out.println("Connection closed: " + reason);
    }
    
    @OnError
    public void onError(Throwable t) {
        System.err.println("Error: " + t.getMessage());
    }
    
    public static void main(String[] args) {
        try {
            String subscriptionId = "Subscription/123";
            WebSocketContainer container = ContainerProvider.getWebSocketContainer();
            
            URI uri = new URI("ws://localhost:8080/fhir/websocket");
            FhirWebsocketClient client = new FhirWebsocketClient();
            container.connectToServer(client, uri);
            
            // Giữ kết nối mở
            Thread.sleep(Long.MAX_VALUE);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    private void processVitalSign(Observation obs) {
        // Logic xử lý dấu hiệu sinh tồn
        System.out.println("Processing vital sign: " + obs.getCode().getText());
        
        // Kiểm tra giá trị và phát cảnh báo nếu cần
        if (obs.hasValueQuantity()) {
            Quantity value = obs.getValueQuantity();
            System.out.println("Value: " + value.getValue() + " " + value.getUnit());
            
            // Kiểm tra nếu là nhịp tim và quá cao
            if (obs.getCode().getCodingFirstRep().getCode().equals("8867-4")
                    && value.getValue().floatValue() > 100) {
                System.out.println("ALERT: High heart rate detected!");
                // Gửi cảnh báo đến bác sĩ
                alertDoctor(obs);
            }
        }
    }
    
    private void alertDoctor(Observation obs) {
        // Gửi cảnh báo đến bác sĩ
        // Có thể qua SMS, email, hoặc notification trong ứng dụng
    }
}
```

### Các tính năng nâng cao

#### 1. Subscription Topics (FHIR R5)

FHIR R5 giới thiệu khái niệm "Subscription Topics" giúp định nghĩa trước các mẫu subscription phổ biến:

```java
// Tạo subscription sử dụng topic
Subscription subscription = new Subscription();
subscription.setStatus(Subscription.SubscriptionStatus.REQUESTED);

// Sử dụng topic đã định nghĩa thay vì criteria
Canonical topicReference = new Canonical("http://example.org/fhir/SubscriptionTopic/patient-admission");
subscription.setTopic(topicReference);

// Định nghĩa các tham số cho topic (nếu cần)
Parameters filterParams = new Parameters();
filterParams.addParameter().setName("patient").setValue(new Reference("Patient/123"));
String encodedParams = ctx.newJsonParser().encodeResourceToString(filterParams);
subscription.setFilterBy(encodedParams);

// Thiết lập kênh
Subscription.SubscriptionChannelComponent channel = subscription.getChannel();
channel.setType(Subscription.SubscriptionChannelType.RESTHOOK);
channel.setEndpoint("https://webhook.example.com/notifications");
channel.setPayload("application/fhir+json");

// Lưu subscription
client.create().resource(subscription).execute();
```

#### 2. Back-Pressure và Error Handling

HAPI FHIR JPA Server Subscription hỗ trợ các cơ chế quản lý back-pressure và xử lý lỗi:

```java
@Bean
public SubscriptionRestHookInterceptor subscriptionRestHookInterceptor() {
    SubscriptionRestHookInterceptor interceptor = new SubscriptionRestHookInterceptor();
    
    // Số lần thử lại tối đa khi gặp lỗi
    interceptor.setMaxRetryAttempts(5);
    
    // Thời gian tăng dần giữa các lần thử lại (exponential backoff)
    interceptor.setRetryDelayMillis(1000);
    interceptor.setRetryDelayMaxMillis(60000);
    
    // Kích thước queue tối đa
    interceptor.setDeliveryQueueMaxSize(10000);
    
    // Xử lý khi queue đầy
    interceptor.setQueueFullBehaviour(QueueFullBehaviour.DISCARD_OLDEST);
    
    return interceptor;
}
```

#### 3. Bảo mật cho Subscriptions

```java
@Bean
public SubscriptionAuthorizationInterceptor subscriptionAuthorizationInterceptor() {
    SubscriptionAuthorizationInterceptor interceptor = new SubscriptionAuthorizationInterceptor();
    
    // Giới hạn địa chỉ endpoint được phép
    interceptor.setAllowedEndpointPatterns(Arrays.asList(
        "https://*.example.com/fhir/*",
        "https://trusted-partner.org/webhooks/*"
    ));
    
    // Yêu cầu xác thực cho tất cả subscriptions
    interceptor.setRequireAuthentication(true);
    
    return interceptor;
}
```

#### 4. CloudEvents Format

FHIR R5 hỗ trợ định dạng CloudEvents cho thông báo, giúp tích hợp với hệ sinh thái event-driven rộng lớn hơn:

```java
@Bean
public SubscriptionRestHookInterceptor subscriptionRestHookInterceptor() {
    SubscriptionRestHookInterceptor interceptor = new SubscriptionRestHookInterceptor();
    
    // Sử dụng CloudEvents format
    interceptor.setDeliveryFormatType(DeliveryFormatType.CLOUDEVENTS);
    
    // Thêm source cho CloudEvents
    interceptor.setCloudEventsSource("urn:example:fhir-server");
    
    return interceptor;
}
```

### Ứng dụng thực tế

#### 1. Theo dõi chỉ số sinh tồn trong thời gian thực

Các thiết bị IoT y tế có thể gửi dữ liệu đến FHIR server dưới dạng Observation. Bằng cách sử dụng Subscription, các ứng dụng giám sát có thể nhận thông báo tức thì khi có đọc số bất thường, cho phép can thiệp y tế kịp thời.

#### 2. Hệ thống cảnh báo thuốc

Khi một MedicationRequest mới được tạo, hệ thống có thể kiểm tra tương tác thuốc và gửi cảnh báo đến bác sĩ thông qua Subscription nếu phát hiện vấn đề.

#### 3. Quản lý bệnh nhân nhập viện

Subscription có thể theo dõi khi bệnh nhân được nhập viện (Encounter.status = 'in-progress') và tự động kích hoạt quy trình như chuẩn bị phòng, thông báo cho nhân viên và gửi thông tin đến các hệ thống khác.

#### 4. Hệ thống nhắc lịch tự động

Subscription có thể theo dõi Appointment và tự động gửi nhắc nhở đến bệnh nhân trước ngày hẹn.

#### 5. Đồng bộ hóa dữ liệu giữa các hệ thống

Sử dụng Subscription để đồng bộ dữ liệu giữa hệ thống chính và các hệ thống con, đảm bảo thông tin luôn nhất quán mà không cần polling liên tục.

### Thách thức và Giải pháp

#### Thách thức

1. **Hiệu suất**: Với số lượng lớn subscription, quá trình đánh giá tiêu chí có thể tốn tài nguyên
2. **Độ tin cậy**: Đảm bảo thông báo được gửi, ngay cả khi có lỗi mạng
3. **Bảo mật**: Bảo vệ thông tin y tế khi được gửi qua subscription
4. **Khả năng mở rộng**: Xử lý nhiều subscription đồng thời

#### Giải pháp

1. **Hiệu suất**:
   * Sử dụng subscription topics thay vì criteria phức tạp
   * Tối ưu hóa cache cho subscription matching
   * Tăng số lượng thread xử lý
2. **Độ tin cậy**:
   * Cơ chế retry tự động với exponential backoff
   * Persistent queue cho các thông báo chưa gửi
   * Cơ chế dead-letter queue cho thông báo không thể gửi
3. **Bảo mật**:
   * Mã hóa dữ liệu truyền đi
   * Xác thực webhook endpoints
   * Triển khai SMART on FHIR authorization
4. **Khả năng mở rộng**:
   * Phân tán xử lý subscription qua nhiều node
   * Sử dụng message broker trung gian (RabbitMQ, Kafka)
   * Kiến trúc microservices cho delivery manager

### Kết luận

HAPI FHIR JPA Server Subscription cung cấp một giải pháp mạnh mẽ và linh hoạt để triển khai cơ chế thông báo thời gian thực trong các ứng dụng y tế dựa trên FHIR. Với sự hỗ trợ đa dạng các kênh thông báo, khả năng tùy chỉnh cao và tích hợp sẵn với HAPI FHIR Server, module này trở thành công cụ thiết yếu cho các hệ thống y tế hiện đại đòi hỏi phản ứng nhanh với thay đổi dữ liệu.

Khi tiêu chuẩn FHIR tiếp tục phát triển, đặc biệt là với FHIR R5 và các khái niệm mới như Subscription Topics, chúng ta có thể mong đợi các cải tiến hơn nữa trong cơ chế thông báo, giúp xây dựng hệ thống y tế linh hoạt, hiệu quả và phản ứng nhanh hơn với nhu cầu chăm sóc bệnh nhân.
