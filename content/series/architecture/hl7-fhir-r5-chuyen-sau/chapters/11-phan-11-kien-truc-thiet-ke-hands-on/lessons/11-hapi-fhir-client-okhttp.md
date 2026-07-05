---
id: 849a7082-91d4-45ab-a871-e1ecf6317b0b
title: 'hapi-fhir-client-okhttp'
slug: hapi-fhir-client-okhttp
description: 'Trong hệ sinh thái HAPI FHIR, thư viện hapifhirclientokhttp đóng vai trò quan trọng bằng cách tích hợp OkHttp một HTTP client mạnh mẽ của Square vào framework của HAPI FHIR. Từ phiên bản 5.0 trở đi, OkHttp đã trở thành…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 11
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Trong hệ sinh thái HAPI FHIR, thư viện `hapi-fhir-client-okhttp` đóng vai trò quan trọng bằng cách tích hợp OkHttp - một HTTP client mạnh mẽ của Square - vào framework của HAPI FHIR. Từ phiên bản 5.0 trở đi, OkHttp đã trở thành HTTP client mặc định cho HAPI FHIR, thay thế cho Apache HttpClient, nhờ vào hiệu suất vượt trội và thiết kế hiện đại của nó.

Bài viết này sẽ đi sâu vào `hapi-fhir-client-okhttp`, phân tích các ưu điểm, cách sử dụng và tùy chỉnh nó để đạt được hiệu suất tối ưu trong các ứng dụng y tế.

### Tại sao nên sử dụng OkHttp với HAPI FHIR?

OkHttp mang đến nhiều lợi ích đáng kể cho các ứng dụng FHIR:

1. **Hiệu suất cao**: OkHttp được tối ưu hóa cho tốc độ và hiệu quả, đặc biệt trong môi trường có nhiều kết nối đồng thời
2. **HTTP/2 Support**: Hỗ trợ giao thức HTTP/2 với multiplexing, server push và header compression
3. **Connection Pooling**: Tự động tái sử dụng kết nối, giảm độ trễ khi thực hiện nhiều request liên tiếp
4. **Transparent GZIP**: Tự động nén và giải nén dữ liệu để tối ưu băng thông
5. **Modern API**: API trực quan và dễ sử dụng với hỗ trợ tốt cho async/non-blocking operations
6. **Robust Error Handling**: Xử lý lỗi mạng tốt với khả năng retry và timeout management
7. **WebSocket Support**: Hỗ trợ giao thức WebSocket, lý tưởng cho FHIR Subscriptions

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
    <artifactId>hapi-fhir-client-okhttp</artifactId>
    <version>6.4.0</version>
</dependency>
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-structures-r5</artifactId>
    <version>6.4.0</version>
</dependency>
```

#### Sử dụng client với cấu hình mặc định

```java
// Khởi tạo FhirContext
FhirContext ctx = FhirContext.forR5();

// OkHttp là HTTP client mặc định từ HAPI FHIR 5.0+
IGenericClient client = ctx.newRestfulGenericClient("http://hapi.fhir.org/baseR5");

// Sử dụng client
Patient patient = client.read()
    .resource(Patient.class)
    .withId("example")
    .execute();
```

Với cấu hình mặc định, HAPI FHIR sẽ tự động sử dụng OkHttp khi phát hiện thư viện trong classpath. Tuy nhiên, để kiểm soát hoàn toàn cấu hình OkHttp, bạn nên thiết lập rõ ràng.

### Tùy chỉnh OkHttp Client

Một trong những ưu điểm lớn của OkHttp là khả năng tùy biến cao. Dưới đây là cách tùy chỉnh OkHttp client để đáp ứng nhu cầu cụ thể:

```java
// Khởi tạo FhirContext
FhirContext ctx = FhirContext.forR5();

// Tạo builder cho OkHttpClient
OkHttpClient.Builder builder = new OkHttpClient.Builder();

// Cấu hình timeout
builder.connectTimeout(30, TimeUnit.SECONDS);
builder.readTimeout(30, TimeUnit.SECONDS);
builder.writeTimeout(30, TimeUnit.SECONDS);

// Cấu hình connection pool
builder.connectionPool(new ConnectionPool(20, 5, TimeUnit.MINUTES));

// Thêm logging để debug (chỉ nên dùng trong development)
HttpLoggingInterceptor loggingInterceptor = new HttpLoggingInterceptor();
loggingInterceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
builder.addInterceptor(loggingInterceptor);

// Tạo factory và cấu hình OkHttpClient
OkHttpRestfulClientFactory clientFactory = new OkHttpRestfulClientFactory(ctx);
clientFactory.setOkHttpClient(builder.build());
ctx.setRestfulClientFactory(clientFactory);

// Tạo client với factory đã tùy chỉnh
IGenericClient client = ctx.newRestfulGenericClient("http://hapi.fhir.org/baseR5");
```

### Xử lý authentication

Trong ứng dụng y tế thực tế, authentication là yêu cầu bắt buộc. OkHttp cung cấp cách linh hoạt để thêm authentication thông qua interceptors:

#### Basic Authentication

```java
// Tạo interceptor cho Basic Auth
builder.addInterceptor(chain -> {
    Request original = chain.request();
    String credentials = Credentials.basic("username", "password");
    
    Request request = original.newBuilder()
        .header("Authorization", credentials)
        .build();
    
    return chain.proceed(request);
});
```

#### OAuth2 Bearer Token

```java
// Tạo interceptor cho OAuth2
builder.addInterceptor(chain -> {
    Request original = chain.request();
    
    // Lấy access token từ OAuth2 provider
    String token = getAccessToken();
    
    Request request = original.newBuilder()
        .header("Authorization", "Bearer " + token)
        .build();
    
    return chain.proceed(request);
});

// Hàm lấy token (implementation tùy thuộc vào OAuth2 provider)
private String getAccessToken() {
    // Implement OAuth2 token acquisition
    return "your-access-token";
}
```

#### SMART on FHIR Authentication

```java
// Tạo interceptor cho SMART on FHIR
builder.addInterceptor(chain -> {
    Request original = chain.request();
    
    // Lấy token từ SMART on FHIR authorization server
    String smartToken = getSmartOnFhirToken();
    
    Request request = original.newBuilder()
        .header("Authorization", "Bearer " + smartToken)
        .build();
    
    return chain.proceed(request);
});
```

### Xử lý lỗi và retry

Một trong những tính năng mạnh mẽ của OkHttp là khả năng xử lý lỗi mạng và retry. Dưới đây là cách cấu hình retry logic:

```java
// Tạo custom retry policy
builder.addInterceptor(new Interceptor() {
    @Override
    public Response intercept(Chain chain) throws IOException {
        Request request = chain.request();
        Response response = null;
        IOException exception = null;
        
        int maxRetries = 3;
        for (int i = 0; i < maxRetries; i++) {
            try {
                response = chain.proceed(request);
                if (response.isSuccessful() || (response.code() >= 400 && response.code() < 500)) {
                    // Thành công hoặc lỗi client (không retry)
                    return response;
                }
                
                // Server error, đóng response và thử lại
                response.close();
                
                // Delay trước khi retry (exponential backoff)
                Thread.sleep((long) (1000 * Math.pow(2, i)));
            } catch (IOException e) {
                // Lưu exception để throw nếu tất cả các lần retry đều thất bại
                exception = e;
                
                // Delay trước khi retry
                try {
                    Thread.sleep((long) (1000 * Math.pow(2, i)));
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                    throw new IOException("Retry interrupted", ie);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                throw new IOException("Retry interrupted", e);
            }
        }
        
        // Nếu tất cả retry đều thất bại, throw exception cuối cùng
        if (exception != null) {
            throw exception;
        }
        
        return response;
    }
});
```

### Tối ưu hiệu suất với HTTP/2

OkHttp hỗ trợ HTTP/2, mang lại lợi ích lớn cho các ứng dụng FHIR với nhiều requests song song:

```java
// Cấu hình protocol cho HTTP/2
builder.protocols(Arrays.asList(Protocol.HTTP_2, Protocol.HTTP_1_1));
```

HTTP/2 cung cấp:

* **Multiplexing**: Nhiều requests có thể được xử lý song song trên cùng một connection
* **Header Compression**: Giảm overhead khi truyền tải headers
* **Server Push**: Server có thể proactively gửi resources cho client
* **Binary Format**: Hiệu quả hơn format text của HTTP/1.1

### Giám sát và Logging

Để phát hiện và khắc phục sự cố, logging là công cụ quan trọng. OkHttp cung cấp HttpLoggingInterceptor:

```java
// Tạo logging interceptor
HttpLoggingInterceptor logging = new HttpLoggingInterceptor(message -> {
    System.out.println(message);
    // Hoặc sử dụng logging framework như SLF4J, Log4j, etc.
});

// Thiết lập mức độ logging
// NONE: không log (mặc định)
// BASIC: log request và response lines
// HEADERS: log request và response headers
// BODY: log toàn bộ request và response (bodies)
logging.setLevel(HttpLoggingInterceptor.Level.HEADERS);

// Thêm interceptor vào OkHttpClient builder
builder.addInterceptor(logging);
```

Ngoài ra, bạn có thể tạo interceptor để đo lường performance:

```java
builder.addInterceptor(chain -> {
    long startTime = System.currentTimeMillis();
    
    Request request = chain.request();
    Response response = chain.proceed(request);
    
    long endTime = System.currentTimeMillis();
    System.out.println(String.format("Request to %s completed in %d ms", 
        request.url(), (endTime - startTime)));
    
    return response;
});
```

### Tích hợp với HAPI FHIR Transaction và Bulk Data

#### FHIR Transactions

OkHttp xử lý hiệu quả các FHIR transactions lớn:

```java
// Tạo bundle cho transaction
Bundle bundle = new Bundle();
bundle.setType(Bundle.BundleType.TRANSACTION);

// Thêm nhiều resources vào bundle
for (int i = 0; i < 100; i++) {
    Patient patient = new Patient();
    patient.addName().setFamily("Test").addGiven("Patient" + i);
    
    bundle.addEntry()
        .setFullUrl("urn:uuid:" + UUID.randomUUID().toString())
        .setResource(patient)
        .getRequest()
            .setMethod(Bundle.HTTPVerb.POST)
            .setUrl("Patient");
}

// Thực hiện transaction
Bundle resultBundle = client.transaction()
    .withBundle(bundle)
    .execute();
```

#### FHIR Bulk Data

Khi làm việc với FHIR Bulk Data API, OkHttp giúp xử lý hiệu quả các file dữ liệu lớn:

```java
// Khởi tạo bulk data export
Parameters outParams = client.operation()
    .onServer()
    .named("$export")
    .withNoParameters(Parameters.class)
    .execute();

// Lấy status URL từ response (implementation phụ thuộc vào server)
String statusUrl = getStatusUrlFromResponse(outParams);

// Poll status endpoint đến khi hoàn thành
BulkDataResponse bulkDataResponse = pollUntilComplete(statusUrl);

// Download files
for (String fileUrl : bulkDataResponse.getFileUrls()) {
    downloadFile(fileUrl);
}

// Helper method để download file lớn với OkHttp
private void downloadFile(String fileUrl) {
    Request request = new Request.Builder()
        .url(fileUrl)
        .build();
    
    try (Response response = httpClient.newCall(request).execute()) {
        if (!response.isSuccessful()) {
            throw new IOException("Failed to download: " + response);
        }
        
        // Lưu file xuống đĩa với streaming để tránh OOM với file lớn
        try (ResponseBody body = response.body();
             BufferedSink sink = Okio.buffer(Okio.sink(new File("output.ndjson")))) {
            sink.writeAll(body.source());
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

### Xử lý dữ liệu lớn (Large Payloads)

OkHttp xử lý hiệu quả các payload lớn bằng stream processing:

```java
// Tạo patient resource lớn
Patient largePatient = createLargePatient();

// Tùy chỉnh OkHttpClient để xử lý payload lớn
OkHttpClient.Builder builder = new OkHttpClient.Builder();
builder.writeTimeout(2, TimeUnit.MINUTES);
builder.readTimeout(2, TimeUnit.MINUTES);

// Cấu hình cho HAPI FHIR
OkHttpRestfulClientFactory clientFactory = new OkHttpRestfulClientFactory(ctx);
clientFactory.setOkHttpClient(builder.build());
ctx.setRestfulClientFactory(clientFactory);

// Tạo client
IGenericClient client = ctx.newRestfulGenericClient("http://hapi.fhir.org/baseR5");

// Lưu resource lớn
MethodOutcome outcome = client.create()
    .resource(largePatient)
    .execute();
```

### Bảo mật với OkHttp

#### Certificate Pinning

Certificate pinning giúp bảo vệ ứng dụng khỏi các cuộc tấn công man-in-the-middle:

```java
// Cấu hình certificate pinning
CertificatePinner certificatePinner = new CertificatePinner.Builder()
    .add("hapi.fhir.org", "sha256/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX=")
    .build();

builder.certificatePinner(certificatePinner);
```

#### Custom SSL Context

Tùy chỉnh SSL context cho yêu cầu bảo mật đặc biệt:

```java
// Tạo custom trust manager
TrustManager[] trustManagers = new TrustManager[]{
    new X509TrustManager() {
        @Override
        public void checkClientTrusted(X509Certificate[] chain, String authType) {
            // Implementation
        }

        @Override
        public void checkServerTrusted(X509Certificate[] chain, String authType) {
            // Implementation
        }

        @Override
        public X509Certificate[] getAcceptedIssuers() {
            return new X509Certificate[0];
        }
    }
};

// Tạo SSL context với custom trust manager
SSLContext sslContext = SSLContext.getInstance("TLS");
sslContext.init(null, trustManagers, new SecureRandom());

// Áp dụng SSL context cho OkHttpClient
builder.sslSocketFactory(sslContext.getSocketFactory(), (X509TrustManager) trustManagers[0]);
```

### Kết luận

Thư viện `hapi-fhir-client-okhttp` mang lại hiệu suất cao và tính linh hoạt cho các ứng dụng y tế dựa trên FHIR. Với khả năng tùy chỉnh sâu, xử lý lỗi mạnh mẽ và hỗ trợ các tính năng hiện đại như HTTP/2, OkHttp là lựa chọn tuyệt vời cho các ứng dụng FHIR đòi hỏi hiệu suất và độ tin cậy cao.

Bằng cách tận dụng các tính năng nâng cao của OkHttp, các nhà phát triển có thể xây dựng các ứng dụng y tế mạnh mẽ, có khả năng xử lý lượng lớn dữ liệu FHIR một cách hiệu quả và đáng tin cậy.
