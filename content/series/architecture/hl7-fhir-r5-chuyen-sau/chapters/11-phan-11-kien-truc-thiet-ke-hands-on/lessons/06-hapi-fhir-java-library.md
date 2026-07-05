---
id: 2d165b2f-809a-43f1-a068-4f581c580a05
title: 'HAPI FHIR'
slug: hapi-fhir-java-library
description: 'HAPI FHIR là một bộ thư viện Java mã nguồn mở triển khai tiêu chuẩn HL7 FHIR (Fast Healthcare Interoperability Resources), giúp các nhà phát triển xây dựng ứng dụng y tế hiện đại với khả năng tương tác cao. Dưới đây là…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 6
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
HAPI FHIR là một bộ thư viện Java mã nguồn mở triển khai tiêu chuẩn HL7 FHIR (Fast Healthcare Interoperability Resources), giúp các nhà phát triển xây dựng ứng dụng y tế hiện đại với khả năng tương tác cao. Dưới đây là tổng quan về các thư viện chính trong hệ sinh thái HAPI FHIR.

*HAPI FHIR*

### Thư viện Cốt lõi (Core Libraries)

#### hapi-fhir-base

Thư viện nền tảng chứa các thành phần cơ bản để làm việc với FHIR. Nó bao gồm các cấu trúc dữ liệu chung, parsers, formatters và các tiện ích cơ bản để thao tác với FHIR resources. Thư viện này không phụ thuộc vào phiên bản FHIR cụ thể, do đó có thể sử dụng cho tất cả các phiên bản FHIR.

**Tính năng chính:**

* Parsers và serializers cho định dạng JSON và XML
* Các lớp tiện ích để làm việc với dữ liệu FHIR
* Các cấu trúc dữ liệu chung và interfaces
* Framework cơ bản cho validation

#### hapi-fhir-structures-\[version]

Tập hợp các thư viện chứa các lớp mô hình (model classes) đặc thù cho từng phiên bản FHIR, bao gồm:

* **hapi-fhir-structures-r5**: Các model cho FHIR R5 (mới nhất)
* **hapi-fhir-structures-r4**: Các model cho FHIR R4
* **hapi-fhir-structures-r4b**: Các model cho FHIR R4B
* **hapi-fhir-structures-dstu3**: Các model cho FHIR DSTU3
* **hapi-fhir-structures-dstu2**: Các model cho FHIR DSTU2

Mỗi thư viện này chứa các lớp Java tương ứng với từng resource FHIR (Patient, Observation, Encounter, v.v.) cho phiên bản cụ thể.

#### hapi-fhir-validation

Thư viện này cung cấp các cơ chế validation cho FHIR resources, đảm bảo dữ liệu tuân thủ theo đặc tả FHIR và profiles cụ thể.

**Tính năng chính:**

* Validation dựa trên StructureDefinition profiles
* Validation terminologies (ValueSet, CodeSystem)
* FhirValidator và ValidationResult APIs
* Tích hợp với FHIR profiles validation

### Client Framework

#### hapi-fhir-client

Thư viện client cung cấp API để tương tác với FHIR servers thông qua RESTful API.

**Tính năng chính:**

* GenericClient cho tất cả thao tác FHIR RESTful API
* Fluent interface cho search queries
* Hỗ trợ CRUD operations, transactions, and batches
* Xử lý phân trang và pagination
* Xử lý lỗi và exception handling

#### hapi-fhir-client-okhttp / hapi-fhir-client-apache

Thư viện mở rộng client framework với các HTTP client khác nhau (OkHttp, Apache HttpClient) để tối ưu hiệu suất và tính linh hoạt.

### Server Framework

#### hapi-fhir-server

Thư viện cung cấp framework để xây dựng FHIR RESTful servers.

**Tính năng chính:**

* RestfulServer để xử lý FHIR operations
* Resource providers và plain providers
* Interceptors cho authentication, authorization và logging
* Framework xử lý requests và responses
* Conformance statement generation

#### hapi-fhir-jpaserver-base

Triển khai FHIR server với khả năng lưu trữ dữ liệu trong cơ sở dữ liệu quan hệ thông qua JPA (Java Persistence API).

**Tính năng chính:**

* Persistence layer cho FHIR resources
* FHIR search engine đầy đủ tính năng
* Hỗ trợ history, transaction, và operations
* Quản lý terminologies (ValueSets, CodeSystems)
* Subscription framework

#### hapi-fhir-jpaserver-elasticsearch

Mở rộng JPA server với Elasticsearch để cải thiện hiệu suất tìm kiếm và hỗ trợ full-text search.

#### hapi-fhir-jpaserver-starter

Dự án mẫu đã được cấu hình sẵn để bắt đầu xây dựng FHIR server với Spring Boot, JPA và web UI.

### Thư viện Tiện ích

#### hapi-fhir-converter

Cung cấp các công cụ để chuyển đổi giữa các định dạng khác nhau như HL7v2, CDA và FHIR.

**Tính năng chính:**

* Chuyển đổi giữa các phiên bản FHIR
* Chuyển đổi từ HL7v2 sang FHIR
* Chuyển đổi từ CDA sang FHIR
* Hỗ trợ XSLT transformations

#### hapi-fhir-testpage-overlay

Giao diện web để kiểm thử FHIR server, cho phép thực hiện các operations và xem kết quả trực quan.

#### hapi-fhir-validation-resources

Chứa các tài nguyên validation mặc định như StructureDefinitions, ValueSets cho việc validation.

### Thư viện Tích hợp

#### hapi-fhir-spring-boot

Starter cho Spring Boot để tự động cấu hình FHIR client và server, tích hợp với Spring ecosystem.

#### hapi-fhir-oauth2

Hỗ trợ OAuth2 cho FHIR client và server, tích hợp với SMART on FHIR.

#### hapi-fhir-caching-caffeine

Cung cấp caching layer sử dụng Caffeine để cải thiện hiệu suất.

### Thư viện Terminology

#### hapi-fhir-terminology

Hỗ trợ các dịch vụ terminology FHIR, quản lý và sử dụng CodeSystem, ValueSet.

**Tính năng chính:**

* Validate codes
* Lookup operations
* Expand ValueSets
* Translate codes

#### hapi-fhir-jpaserver-subscription

Triển khai đầy đủ FHIR subscription framework với hỗ trợ nhiều kênh thông báo.

### Ví dụ Sử dụng Cơ bản

#### Khởi tạo FHIR Client

```java
// Tạo client kết nối đến FHIR server
FhirContext ctx = FhirContext.forR5();
IGenericClient client = ctx.newRestfulGenericClient("http://hapi.fhir.org/baseR5");

// Tìm kiếm bệnh nhân
Bundle response = client.search()
    .forResource(Patient.class)
    .where(Patient.FAMILY.matches().value("Smith"))
    .returnBundle(Bundle.class)
    .execute();
```

#### Tạo và lưu FHIR Resource

```java
// Tạo resource bệnh nhân mới
Patient patient = new Patient();
patient.addIdentifier()
    .setSystem("http://hospital.example.org")
    .setValue("12345");
patient.addName()
    .setFamily("Nguyễn")
    .addGiven("Văn")
    .addGiven("A");
patient.setBirthDateElement(new DateType("1990-01-01"));
patient.setGender(Enumerations.AdministrativeGender.MALE);

// Lưu vào server
MethodOutcome outcome = client.create()
    .resource(patient)
    .execute();
```

#### Khởi tạo FHIR Server đơn giản

```java
@WebServlet(urlPatterns = {"/fhir/*"})
public class ExampleServlet extends RestfulServer {
    
    @Override
    protected void initialize() {
        // Tạo FHIR context
        setFhirContext(FhirContext.forR5());
        
        // Đăng ký resource providers
        registerProvider(new PatientResourceProvider());
        registerProvider(new ObservationResourceProvider());
        
        // Thêm interceptors
        registerInterceptor(new AuthorizationInterceptor());
        registerInterceptor(new LoggingInterceptor());
    }
}
```

### Thêm HAPI FHIR vào Dự án

#### Maven

```xml
<!-- HAPI FHIR Core -->
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-base</artifactId>
    <version>6.4.0</version>
</dependency>

<!-- FHIR R5 Structures -->
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-structures-r5</artifactId>
    <version>6.4.0</version>
</dependency>

<!-- HAPI FHIR Client -->
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-client</artifactId>
    <version>6.4.0</version>
</dependency>
```

#### Gradle

```groovy
implementation 'ca.uhn.hapi.fhir:hapi-fhir-base:6.4.0'
implementation 'ca.uhn.hapi.fhir:hapi-fhir-structures-r5:6.4.0'
implementation 'ca.uhn.hapi.fhir:hapi-fhir-client:6.4.0'
```

### Kết luận

HAPI FHIR cung cấp một bộ thư viện toàn diện cho việc triển khai tiêu chuẩn HL7 FHIR trong các ứng dụng Java. Từ các thành phần cốt lõi đến các tính năng nâng cao như JPA server, terminology services và tích hợp với các frameworks hiện đại như Spring Boot, HAPI FHIR đáp ứng đầy đủ nhu cầu xây dựng hệ thống y tế tương tác theo chuẩn FHIR.

Việc hiểu rõ các thư viện và cách chúng hoạt động cùng nhau là nền tảng quan trọng để xây dựng các ứng dụng y tế hiện đại, khả mở và có khả năng tương tác cao.
