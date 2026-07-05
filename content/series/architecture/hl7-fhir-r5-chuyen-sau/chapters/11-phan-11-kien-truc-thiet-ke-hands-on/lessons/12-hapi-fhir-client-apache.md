---
id: 072e45c1-5e2d-4e28-ba7d-a6293ed41367
title: 'hapi-fhir-client-apache'
slug: hapi-fhir-client-apache
description: 'Trong hệ sinh thái HAPI FHIR, thư viện hapifhirclientapache đóng vai trò quan trọng bằng cách cung cấp một HTTP client dựa trên Apache HttpClient một thư viện HTTP client trưởng thành, đáng tin cậy và đã được kiểm chứng…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 12
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Trong hệ sinh thái HAPI FHIR, thư viện `hapi-fhir-client-apache` đóng vai trò quan trọng bằng cách cung cấp một HTTP client dựa trên Apache HttpClient - một thư viện HTTP client trưởng thành, đáng tin cậy và đã được kiểm chứng qua thời gian. Mặc dù từ HAPI FHIR 5.0, OkHttp đã trở thành HTTP client mặc định, Apache HttpClient vẫn là lựa chọn phổ biến cho nhiều dự án, đặc biệt là các hệ thống y tế đòi hỏi tính ổn định cao, khả năng tùy biến sâu và các tính năng bảo mật nâng cao.

Bài viết này sẽ khám phá chi tiết về `hapi-fhir-client-apache`, những ưu điểm đặc trưng của nó và cách tận dụng hiệu quả để xây dựng các ứng dụng FHIR mạnh mẽ.

### Tại sao nên lựa chọn Apache HttpClient với HAPI FHIR?

Apache HttpClient mang đến nhiều lợi thế đáng kể cho các ứng dụng FHIR:

1. **Độ ổn định cao**: Apache HttpClient là một thư viện trưởng thành, được kiểm chứng qua nhiều năm trong vô số dự án production
2. **Kiểm soát chi tiết**: Cung cấp kiểm soát chi tiết đối với mọi khía cạnh của HTTP connections
3. **Hỗ trợ proxy mạnh mẽ**: Tích hợp tốt với các môi trường doanh nghiệp phức tạp có nhiều lớp proxy
4. **Bảo mật nâng cao**: Hỗ trợ nhiều cơ chế authentication phức tạp (Kerberos, NTLM, Digest)
5. **Cơ chế retry và connection pooling linh hoạt**: Cho phép tùy chỉnh theo nhu cầu cụ thể
6. **Kiểm soát cookie**: Quản lý cookie tốt hơn trong các tình huống phức tạp
7. **Tích hợp với Spring Framework**: Hoạt động liền mạch với các ứng dụng Spring

### Cài đặt và cấu hình cơ bản

#### Thêm dependency vào Maven project

```xml
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-client</artifactId>
    <version>6.4.0</version>
</dependency>
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-client-apache</artifactId>
    <version>6.4.0</version>
</dependency>
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-structures-r5</artifactId>
    <version>6.4.0</version>
</dependency>
```

#### Cấu hình cơ bản

```java
// Khởi tạo FhirContext
FhirContext ctx = FhirContext.forR5();

// Đảm bảo sử dụng Apache HttpClient
ApacheRestfulClientFactory clientFactory = new ApacheRestfulClientFactory(ctx);
ctx.setRestfulClientFactory(clientFactory);

// Tạo client
IGenericClient client = ctx.newRestfulGenericClient("http://hapi.fhir.org/baseR5");

// Sử dụng client
Patient patient = client.read()
    .resource(Patient.class)
    .withId("example")
    .execute();
```

Khác với OkHttp, khi sử dụng Apache HttpClient, bạn cần chỉ định rõ ràng `ApacheRestfulClientFactory` để đảm bảo HAPI FHIR sử dụng Apache HttpClient thay vì HTTP client mặc định.

### Tùy chỉnh Apache HttpClient

Apache HttpClient có khả năng tùy biến cao và cho phép kiểm soát chi tiết. Đây là cách tùy chỉnh nó:

```java
// Khởi tạo FhirContext
FhirContext ctx = FhirContext.forR5();

// Tạo connection manager với connection pooling
PoolingHttpClientConnectionManager connectionManager = new PoolingHttpClientConnectionManager();
connectionManager.setMaxTotal(100);  // Tổng số connection tối đa
connectionManager.setDefaultMaxPerRoute(20);  // Số connection tối đa cho mỗi route

// Cấu hình request
RequestConfig requestConfig = RequestConfig.custom()
    .setConnectTimeout(30000)  // 30 giây timeout cho connection
    .setSocketTimeout(60000)   // 60 giây timeout cho socket
    .setConnectionRequestTimeout(30000)  // 30 giây timeout cho connection request
    .build();

// Xây dựng HttpClient
CloseableHttpClient httpClient = HttpClients.custom()
    .setConnectionManager(connectionManager)
    .setDefaultRequestConfig(requestConfig)
    .setRetryHandler(new DefaultHttpRequestRetryHandler(3, true))  // Retry 3 lần
    .build();

// Cấu hình Apache HttpClient cho HAPI FHIR
ApacheRestfulClientFactory clientFactory = new ApacheRestfulClientFactory(ctx);
clientFactory.setHttpClient(httpClient);
ctx.setRestfulClientFactory(clientFactory);

// Tạo client
IGenericClient client = ctx.newRestfulGenericClient("http://hapi.fhir.org/baseR5");
```

Ví dụ trên cung cấp một cấu hình mạnh mẽ với connection pooling, timeout khác nhau và xử lý retry.

### Xử lý Authentication

Một trong những điểm mạnh của Apache HttpClient là hỗ trợ nhiều loại authentication khác nhau:

#### Basic Authentication

```java
// Tạo credentials provider
CredentialsProvider credentialsProvider = new BasicCredentialsProvider();
credentialsProvider.setCredentials(
    new AuthScope("hapi.fhir.org", 443),  // Host và port
    new UsernamePasswordCredentials("username", "password")
);

// Thêm credentials provider vào HttpClient
CloseableHttpClient httpClient = HttpClients.custom()
    .setDefaultCredentialsProvider(credentialsProvider)
    .build();

// Cấu hình cho HAPI FHIR
ApacheRestfulClientFactory clientFactory = new ApacheRestfulClientFactory(ctx);
clientFactory.setHttpClient(httpClient);
ctx.setRestfulClientFactory(clientFactory);
```

#### OAuth2 Bearer Token

```java
// Tạo request interceptor để thêm OAuth token
HttpRequestInterceptor oauthInterceptor = (request, context) -> {
    // Lấy access token từ OAuth2 provider
    String token = getAccessToken();
    request.addHeader("Authorization", "Bearer " + token);
};

// Thêm interceptor vào HttpClient
CloseableHttpClient httpClient = HttpClients.custom()
    .addInterceptorFirst(oauthInterceptor)
    .build();

// Cấu hình cho HAPI FHIR
ApacheRestfulClientFactory clientFactory = new ApacheRestfulClientFactory(ctx);
clientFactory.setHttpClient(httpClient);
ctx.setRestfulClientFactory(clientFactory);

// Hàm lấy token (implementation tùy thuộc vào OAuth2 provider)
private String getAccessToken() {
    // Implement OAuth2 token acquisition
    return "your-access-token";
}
```

#### Kerberos Authentication

```java
// Tạo Kerberos credentials
Credentials kerberosCredentials = new KerberosCredentials(null);

// Tạo credentials provider
CredentialsProvider credentialsProvider = new BasicCredentialsProvider();
credentialsProvider.setCredentials(
    new AuthScope(null, -1, null),
    kerberosCredentials
);

// Tạo authentication scheme registry với Kerberos support
Registry<AuthSchemeProvider> authSchemeRegistry = RegistryBuilder.<AuthSchemeProvider>create()
    .register(AuthSchemes.KERBEROS, new KerberosSchemeFactory())
    .build();

// Tạo HttpClient với Kerberos support
CloseableHttpClient httpClient = HttpClients.custom()
    .setDefaultCredentialsProvider(credentialsProvider)
    .setDefaultAuthSchemeRegistry(authSchemeRegistry)
    .build();

// Cấu hình cho HAPI FHIR
ApacheRestfulClientFactory clientFactory = new ApacheRestfulClientFactory(ctx);
clientFactory.setHttpClient(httpClient);
ctx.setRestfulClientFactory(clientFactory);
```

### Xử lý Proxy

Trong môi trường doanh nghiệp, kết nối qua proxy là yêu cầu phổ biến. Apache HttpClient xử lý tốt các tình huống proxy phức tạp:

```java
// Tạo proxy
HttpHost proxy = new HttpHost("proxy.company.com", 8080, "http");

// Tạo credentials cho proxy nếu cần authentication
CredentialsProvider credentialsProvider = new BasicCredentialsProvider();
credentialsProvider.setCredentials(
    new AuthScope(proxy),
    new UsernamePasswordCredentials("proxyUsername", "proxyPassword")
);

// Tạo HttpClient với proxy
CloseableHttpClient httpClient = HttpClients.custom()
    .setProxy(proxy)
    .setDefaultCredentialsProvider(credentialsProvider)
    .build();

// Cấu hình cho HAPI FHIR
ApacheRestfulClientFactory clientFactory = new ApacheRestfulClientFactory(ctx);
clientFactory.setHttpClient(httpClient);
ctx.setRestfulClientFactory(clientFactory);
```

### Cấu hình SSL/TLS

Đối với ứng dụng y tế, bảo mật là ưu tiên hàng đầu. Apache HttpClient cung cấp kiểm soát chi tiết về SSL/TLS:

```java
// Tạo SSLContext với TLS 1.2
SSLContext sslContext = SSLContexts.custom()
    .setProtocol("TLSv1.2")
    .build();

// Tạo hostname verifier (tùy chọn)
HostnameVerifier hostnameVerifier = new DefaultHostnameVerifier();

// Tạo SSL connection socket factory
SSLConnectionSocketFactory sslSocketFactory = new SSLConnectionSocketFactory(
    sslContext,
    new String[] { "TLSv1.2" },  // Chỉ cho phép TLS 1.2
    null,  // Cho phép tất cả cipher suites
    hostnameVerifier
);

// Registry cho socket factories
Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create()
    .register("https", sslSocketFactory)
    .register("http", PlainConnectionSocketFactory.getSocketFactory())
    .build();

// Tạo connection manager với SSL support
PoolingHttpClientConnectionManager connectionManager = new PoolingHttpClientConnectionManager(socketFactoryRegistry);
connectionManager.setMaxTotal(100);
connectionManager.setDefaultMaxPerRoute(20);

// Tạo HttpClient với SSL cấu hình
CloseableHttpClient httpClient = HttpClients.custom()
    .setConnectionManager(connectionManager)
    .build();

// Cấu hình cho HAPI FHIR
ApacheRestfulClientFactory clientFactory = new ApacheRestfulClientFactory(ctx);
clientFactory.setHttpClient(httpClient);
ctx.setRestfulClientFactory(clientFactory);
```

#### Cấu hình với custom trust store

Đôi khi bạn cần sử dụng custom trust store (ví dụ: cho các chứng chỉ tự ký):

```java
// Load trust store
KeyStore trustStore = KeyStore.getInstance(KeyStore.getDefaultType());
try (FileInputStream instream = new FileInputStream("path/to/truststore.jks")) {
    trustStore.load(instream, "truststore-password".toCharArray());
}

// Tạo trust manager
TrustManagerFactory tmf = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
tmf.init(trustStore);
TrustManager[] trustManagers = tmf.getTrustManagers();

// Tạo SSLContext với custom trust manager
SSLContext sslContext = SSLContext.getInstance("TLS");
sslContext.init(null, trustManagers, null);

// Tạo SSL socket factory
SSLConnectionSocketFactory sslSocketFactory = new SSLConnectionSocketFactory(sslContext);

// Tiếp tục như ví dụ trước...
```

### Giám sát và Logging

Apache HttpClient cung cấp nhiều cách để giám sát và ghi log hoạt động:

#### Wire logging

```java
// Bật wire logging trong log4j/logback
// Thêm cấu hình sau vào file cấu hình log:
// log4j.logger.org.apache.http.wire=DEBUG
// log4j.logger.org.apache.http.headers=DEBUG

// Hoặc sử dụng HttpRequestInterceptor để ghi log
HttpRequestInterceptor loggingInterceptor = (request, context) -> {
    System.out.println("Request: " + request.getRequestLine());
    Arrays.stream(request.getAllHeaders()).forEach(
        header -> System.out.println(header.getName() + ": " + header.getValue())
    );
};

// Thêm interceptor vào HttpClient
CloseableHttpClient httpClient = HttpClients.custom()
    .addInterceptorLast(loggingInterceptor)
    .build();
```

#### Performance monitoring

```java
// Tạo interceptor để đo thời gian request
HttpRequestInterceptor timingInterceptor = (request, context) -> {
    context.setAttribute("request-start-time", System.currentTimeMillis());
};

HttpResponseInterceptor responseInterceptor = (response, context) -> {
    long startTime = (long) context.getAttribute("request-start-time");
    long endTime = System.currentTimeMillis();
    System.out.println("Request took " + (endTime - startTime) + " ms");
};

// Thêm interceptors vào HttpClient
CloseableHttpClient httpClient = HttpClients.custom()
    .addInterceptorLast(timingInterceptor)
    .addInterceptorLast(responseInterceptor)
    .build();
```

### Tích hợp với HAPI FHIR Transaction và Batch

Apache HttpClient xử lý hiệu quả các FHIR transactions lớn:

```java
// Tạo bundle cho transaction
Bundle bundle = new Bundle();
bundle.setType(Bundle.BundleType.TRANSACTION);

// Thêm nhiều resources vào bundle
for (int i = 0; i < 50; i++) {
    Patient patient = new Patient();
    patient.addName().setFamily("Smith").addGiven("Patient" + i);
    
    bundle.addEntry()
        .setFullUrl("urn:uuid:" + UUID.randomUUID().toString())
        .setResource(patient)
        .getRequest()
            .setMethod(Bundle.HTTPVerb.POST)
            .setUrl("Patient");
}

// Cấu hình HttpClient với timeout dài hơn cho transactions lớn
RequestConfig requestConfig = RequestConfig.custom()
    .setSocketTimeout(120000)  // 2 phút cho transactions lớn
    .build();

CloseableHttpClient httpClient = HttpClients.custom()
    .setDefaultRequestConfig(requestConfig)
    .build();

// Cấu hình cho HAPI FHIR
ApacheRestfulClientFactory clientFactory = new ApacheRestfulClientFactory(ctx);
clientFactory.setHttpClient(httpClient);
ctx.setRestfulClientFactory(clientFactory);

// Tạo client
IGenericClient client = ctx.newRestfulGenericClient("http://hapi.fhir.org/baseR5");

// Thực hiện transaction
Bundle resultBundle = client.transaction()
    .withBundle(bundle)
    .execute();
```

### Xử lý lỗi và Retry

Một trong những điểm mạnh của Apache HttpClient là khả năng xử lý lỗi mạng và retry một cách linh hoạt:

```java
// Tạo custom retry handler
HttpRequestRetryHandler retryHandler = (exception, executionCount, context) -> {
    // Không retry quá 5 lần
    if (executionCount >= 5) {
        return false;
    }
    
    // Retry cho một số loại exception cụ thể
    if (exception instanceof NoHttpResponseException ||
        exception instanceof SocketTimeoutException ||
        exception instanceof ConnectTimeoutException) {
        
        System.out.println("Retrying request, attempt " + executionCount);
        
        // Thêm delay với exponential backoff
        try {
            Thread.sleep((long) Math.pow(2, executionCount) * 1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return false;
        }
        
        return true;
    }
    
    // Không retry cho các exception khác
    return false;
};

// Tạo HttpClient với custom retry handler
CloseableHttpClient httpClient = HttpClients.custom()
    .setRetryHandler(retryHandler)
    .build();

// Cấu hình cho HAPI FHIR
ApacheRestfulClientFactory clientFactory = new ApacheRestfulClientFactory(ctx);
clientFactory.setHttpClient(httpClient);
ctx.setRestfulClientFactory(clientFactory);
```

### Tích hợp với Spring Framework

Nếu bạn đang sử dụng Spring Framework, Apache HttpClient tích hợp rất tốt:

```java
@Configuration
public class FhirClientConfig {

    @Bean
    public FhirContext fhirContext() {
        FhirContext ctx = FhirContext.forR5();
        ctx.setRestfulClientFactory(apacheRestfulClientFactory());
        return ctx;
    }
    
    @Bean
    public ApacheRestfulClientFactory apacheRestfulClientFactory() {
        ApacheRestfulClientFactory clientFactory = new ApacheRestfulClientFactory(fhirContext());
        clientFactory.setHttpClient(httpClient());
        return clientFactory;
    }
    
    @Bean
    public CloseableHttpClient httpClient() {
        PoolingHttpClientConnectionManager connectionManager = new PoolingHttpClientConnectionManager();
        connectionManager.setMaxTotal(100);
        connectionManager.setDefaultMaxPerRoute(20);
        
        RequestConfig requestConfig = RequestConfig.custom()
            .setConnectTimeout(30000)
            .setSocketTimeout(60000)
            .build();
        
        return HttpClients.custom()
            .setConnectionManager(connectionManager)
            .setDefaultRequestConfig(requestConfig)
            .setRetryHandler(new DefaultHttpRequestRetryHandler(3, true))
            .build();
    }
    
    @Bean
    public IGenericClient fhirClient() {
        return fhirContext().newRestfulGenericClient("http://hapi.fhir.org/baseR5");
    }
}
```

### Ví dụ thực tế: Tìm kiếm và xử lý dữ liệu bệnh nhân

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.client.api.IGenericClient;
import ca.uhn.fhir.rest.client.apache.ApacheRestfulClientFactory;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.hl7.fhir.r5.model.*;

public class PatientFinderExample {
    public static void main(String[] args) {
        // Khởi tạo FhirContext
        FhirContext ctx = FhirContext.forR5();
        
        // Cấu hình Apache HttpClient
        PoolingHttpClientConnectionManager connectionManager = new PoolingHttpClientConnectionManager();
        connectionManager.setMaxTotal(50);
        connectionManager.setDefaultMaxPerRoute(20);
        
        CloseableHttpClient httpClient = HttpClients.custom()
            .setConnectionManager(connectionManager)
            .build();
        
        // Cấu hình HAPI FHIR client
        ApacheRestfulClientFactory clientFactory = new ApacheRestfulClientFactory(ctx);
        clientFactory.setHttpClient(httpClient);
        ctx.setRestfulClientFactory(clientFactory);
        
        // Tạo client
        IGenericClient client = ctx.newRestfulGenericClient("http://hapi.fhir.org/baseR5");
        
        // Tìm kiếm bệnh nhân và các observation liên quan
        Bundle patientBundle = client.search()
            .forResource(Patient.class)
            .where(Patient.FAMILY.matches().value("Smith"))
            .and(Patient.GIVEN.matches().value("John"))
            .returnBundle(Bundle.class)
            .execute();
        
        System.out.println("Found " + patientBundle.getTotal() + " patients");
        
        // Xử lý kết quả và tìm kiếm observations
        for (Bundle.BundleEntryComponent entry : patientBundle.getEntry()) {
            Patient patient = (Patient) entry.getResource();
            System.out.println("\nPatient: " + patient.getNameFirstRep().getNameAsSingleString());
            System.out.println("ID: " + patient.getIdElement().getIdPart());
            
            // Tìm kiếm observations cho bệnh nhân này
            Bundle obsBundle = client.search()
                .forResource(Observation.class)
                .where(Observation.SUBJECT.hasId(patient.getIdElement().getIdPart()))
                .returnBundle(Bundle.class)
                .execute();
            
            System.out.println("Found " + obsBundle.getTotal() + " observations");
            
            // Xử lý observations
            for (Bundle.BundleEntryComponent obsEntry : obsBundle.getEntry()) {
                Observation obs = (Observation) obsEntry.getResource();
                
                String displayName = "Unknown";
                if (obs.hasCode() && obs.getCode().hasCoding()) {
                    displayName = obs.getCode().getCodingFirstRep().getDisplay();
                }
                
                String valueDisplay = "No value";
                if (obs.hasValueQuantity()) {
                    Quantity quantity = obs.getValueQuantity();
                    valueDisplay = quantity.getValue() + " " + quantity.getUnit();
                }
                
                System.out.println(" - " + displayName + ": " + valueDisplay);
            }
        }
        
        // Đóng connection manager khi kết thúc
        try {
            httpClient.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### Kết luận

Thư viện `hapi-fhir-client-apache` mang đến một giải pháp mạnh mẽ và đáng tin cậy để kết nối với FHIR servers trong các ứng dụng y tế doanh nghiệp. Với khả năng tùy biến sâu rộng, xử lý bảo mật nâng cao và khả năng tích hợp liền mạch với các môi trường phức tạp, Apache HttpClient là lựa chọn lý tưởng cho các hệ thống đòi hỏi độ ổn định cao.

Mặc dù OkHttp đã trở thành HTTP client mặc định của HAPI FHIR từ phiên bản 5.0, `hapi-fhir-client-apache` vẫn là lựa chọn phổ biến trong nhiều tổ chức y tế, đặc biệt là các tổ chức có các yêu cầu bảo mật nghiêm ngặt, cần tích hợp với các hệ thống doanh nghiệp hiện có, hoặc có kinh nghiệm lâu năm với Apache HttpClient.

Bằng cách tận dụng các tính năng nâng cao của Apache HttpClient, các nhà phát triển có thể xây dựng các ứng dụng FHIR mạnh mẽ, an toàn và có khả năng mở rộng cao để đáp ứng các nhu cầu y tế hiện đại.
