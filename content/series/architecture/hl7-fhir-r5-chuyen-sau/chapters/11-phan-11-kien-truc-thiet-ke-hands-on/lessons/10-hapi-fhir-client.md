---
id: beffaf06-6dc0-45cd-b055-acb2fce19028
title: 'hapi-fhir-client'
slug: hapi-fhir-client
description: 'hapifhirclient là một thành phần trong hệ sinh thái HAPI FHIR, được phát triển để đơn giản hóa việc tương tác với FHIR servers thông qua RESTful API. Thư viện này được thiết kế với triết lý "fluent interface", cho phép…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 10
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
`hapi-fhir-client` là một thành phần trong hệ sinh thái HAPI FHIR, được phát triển để đơn giản hóa việc tương tác với FHIR servers thông qua RESTful API. Thư viện này được thiết kế với triết lý "fluent interface", cho phép các nhà phát triển xây dựng các request phức tạp một cách trực quan và dễ đọc.

Phiên bản hiện tại hỗ trợ đầy đủ cho FHIR R5 và các phiên bản trước đó (R4, DSTU3, DSTU2), giúp nhà phát triển làm việc liền mạch với nhiều phiên bản FHIR khác nhau.

### Tính năng chính

#### 1. GenericClient - Nền tảng tương tác với FHIR servers

`IGenericClient` là interface trung tâm của thư viện, cung cấp phương thức để thực hiện tất cả các hoạt động RESTful FHIR, từ CRUD cơ bản đến các operations phức tạp hơn:

```java
// Khởi tạo FhirContext
FhirContext ctx = FhirContext.forR5();

// Tạo client kết nối đến FHIR server
IGenericClient client = ctx.newRestfulGenericClient("http://hapi.fhir.org/baseR5");
```

Đối tượng `IGenericClient` được tạo ra từ `FhirContext` và là cổng vào cho tất cả các tương tác với FHIR server.

#### 2. Fluent interface cho search queries

Một trong những điểm mạnh của `hapi-fhir-client` là cú pháp fluent cho phép xây dựng các truy vấn tìm kiếm phức tạp một cách trực quan:

```java
// Tìm kiếm bệnh nhân theo nhiều tiêu chí
Bundle results = client.search()
    .forResource(Patient.class)
    .where(Patient.FAMILY.matches().value("Nguyễn"))
    .and(Patient.BIRTHDATE.after().day("2000-01-01"))
    .and(Patient.GENDER.exactly().code("male"))
    .sort().descending(Patient.BIRTHDATE)
    .count(10)
    .returnBundle(Bundle.class)
    .execute();
```

Đoạn mã trên xây dựng một truy vấn tìm kiếm bệnh nhân có họ "Nguyễn", sinh sau 2000-01-01, giới tính nam, sắp xếp theo ngày sinh giảm dần và giới hạn 10 kết quả.

#### 3. CRUD operations đơn giản

Thư viện cung cấp các phương thức đơn giản để thực hiện các thao tác CRUD (Create, Read, Update, Delete) cơ bản:

```java
// CREATE - Tạo resource mới
MethodOutcome outcome = client.create()
    .resource(patient)
    .execute();
String newId = outcome.getId().getIdPart();

// READ - Đọc resource theo ID
Patient retrievedPatient = client.read()
    .resource(Patient.class)
    .withId(newId)
    .execute();

// UPDATE - Cập nhật resource
patient.setActive(true);
client.update()
    .resource(patient)
    .execute();

// DELETE - Xóa resource
client.delete()
    .resourceById("Patient", newId)
    .execute();
```

#### 4. Hỗ trợ transaction và batch

Khi cần thực hiện nhiều thao tác trong một request, `hapi-fhir-client` hỗ trợ cả transaction (toàn bộ thành công hoặc thất bại) và batch (các thao tác độc lập):

```java
// Tạo bundle
Bundle bundle = new Bundle();
bundle.setType(Bundle.BundleType.TRANSACTION);

// Thêm entry tạo bệnh nhân mới
bundle.addEntry()
    .setFullUrl("urn:uuid:" + UUID.randomUUID().toString())
    .setResource(newPatient)
    .getRequest()
        .setMethod(Bundle.HTTPVerb.POST)
        .setUrl("Patient");

// Thêm entry cập nhật observation
bundle.addEntry()
    .setResource(existingObservation)
    .getRequest()
        .setMethod(Bundle.HTTPVerb.PUT)
        .setUrl("Observation/" + existingObservation.getIdElement().getIdPart());

// Thực hiện transaction
Bundle resultBundle = client.transaction()
    .withBundle(bundle)
    .execute();
```

#### 5. Xử lý phân trang dễ dàng

Khi làm việc với tập dữ liệu lớn, `hapi-fhir-client` đơn giản hóa việc xử lý phân trang:

```java
// Tìm kiếm với giới hạn kết quả
Bundle results = client.search()
    .forResource(Observation.class)
    .where(Observation.SUBJECT.hasId("Patient/123"))
    .count(20)  // 20 kết quả mỗi trang
    .returnBundle(Bundle.class)
    .execute();

// Duyệt qua kết quả trang đầu tiên
for (BundleEntryComponent entry : results.getEntry()) {
    Observation obs = (Observation) entry.getResource();
    System.out.println("Found: " + obs.getId());
}

// Lấy trang tiếp theo khi cần
if (results.getLink(Bundle.LINK_NEXT) != null) {
    Bundle nextPage = client.loadPage().next(results).execute();
    // Xử lý trang tiếp theo
}

// Hoặc duyệt qua tất cả các trang một cách tự động
Bundle firstPage = results;
do {
    // Xử lý trang hiện tại
    for (BundleEntryComponent entry : firstPage.getEntry()) {
        // Xử lý mỗi resource
    }
    
    // Lấy trang tiếp theo nếu có
    if (firstPage.getLink(Bundle.LINK_NEXT) != null) {
        firstPage = client.loadPage().next(firstPage).execute();
    } else {
        firstPage = null;
    }
} while (firstPage != null);
```

#### 6. Xử lý lỗi và exception handling

Thư viện cung cấp cơ chế xử lý lỗi toàn diện, giúp bạn xử lý các tình huống khác nhau:

```java
try {
    // Thực hiện thao tác với FHIR server
    Patient patient = client.read()
        .resource(Patient.class)
        .withId("non-existent-id")
        .execute();
} catch (ResourceNotFoundException e) {
    // Xử lý khi resource không tồn tại
    System.out.println("Patient not found: " + e.getMessage());
} catch (AuthenticationException e) {
    // Xử lý lỗi xác thực
    System.out.println("Authentication failed: " + e.getMessage());
} catch (BaseServerResponseException e) {
    // Xử lý các lỗi server khác
    int statusCode = e.getStatusCode();
    String responseBody = e.getResponseBody();
    System.out.println("Server error " + statusCode + ": " + responseBody);
    
    // Trích xuất OperationOutcome nếu có
    if (e.getOperationOutcome() != null) {
        OperationOutcome outcome = (OperationOutcome) e.getOperationOutcome();
        // Xử lý chi tiết lỗi
    }
}
```

#### 7. Hỗ trợ FHIR operations

FHIR định nghĩa nhiều operations đặc biệt như `$everything`, `$validate`, `$meta`, và `hapi-fhir-client` hỗ trợ gọi các operations này:

```java
// $everything operation - lấy tất cả dữ liệu của bệnh nhân
Bundle everything = client.operation()
    .onInstance(new IdType("Patient", "123"))
    .named("$everything")
    .withNoParameters(Parameters.class)
    .returnResourceType(Bundle.class)
    .execute();

// $validate operation - kiểm tra resource
Parameters inParams = new Parameters();
inParams.addParameter().setName("resource").setResource(patient);

Parameters outParams = client.operation()
    .onType(Patient.class)
    .named("$validate")
    .withParameters(inParams)
    .execute();

// Custom operation với parameters
Parameters matchParams = new Parameters();
matchParams.addParameter().setName("targetSystem").setValue(new StringType("http://loinc.org"));
matchParams.addParameter().setName("code").setValue(new StringType("8480-6"));

Parameters results = client.operation()
    .onType(CodeSystem.class)
    .named("$lookup")
    .withParameters(matchParams)
    .execute();
```

### Ví dụ thực tế

#### Ứng dụng tìm kiếm và hiển thị bệnh nhân

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.client.api.IGenericClient;
import ca.uhn.fhir.rest.gclient.ReferenceClientParam;
import org.hl7.fhir.r5.model.*;

public class PatientSearchExample {
    public static void main(String[] args) {
        // Khởi tạo client
        FhirContext ctx = FhirContext.forR5();
        IGenericClient client = ctx.newRestfulGenericClient("http://hapi.fhir.org/baseR5");
        
        // Tìm kiếm bệnh nhân có họ bắt đầu bằng "N"
        Bundle patientBundle = client.search()
            .forResource(Patient.class)
            .where(Patient.FAMILY.matches().value("N"))
            .returnBundle(Bundle.class)
            .execute();
        
        System.out.println("Found " + patientBundle.getTotal() + " patients");
        
        // Hiển thị thông tin bệnh nhân đầu tiên
        if (!patientBundle.getEntry().isEmpty()) {
            Patient firstPatient = (Patient) patientBundle.getEntryFirstRep().getResource();
            
            System.out.println("\nPatient Details:");
            System.out.println("ID: " + firstPatient.getIdElement().getIdPart());
            
            if (firstPatient.hasName()) {
                HumanName name = firstPatient.getNameFirstRep();
                System.out.println("Name: " + name.getNameAsSingleString());
            }
            
            if (firstPatient.hasBirthDate()) {
                System.out.println("Birth Date: " + firstPatient.getBirthDate());
            }
            
            if (firstPatient.hasGender()) {
                System.out.println("Gender: " + firstPatient.getGender().getDisplay());
            }
            
            // Tìm các Observations của bệnh nhân này
            Bundle obsBundle = client.search()
                .forResource(Observation.class)
                .where(new ReferenceClientParam("subject").hasId(firstPatient.getIdElement()))
                .returnBundle(Bundle.class)
                .execute();
            
            System.out.println("\nObservations for this patient: " + obsBundle.getTotal());
            
            for (Bundle.BundleEntryComponent entry : obsBundle.getEntry()) {
                Observation obs = (Observation) entry.getResource();
                
                System.out.println("\n - Observation ID: " + obs.getIdElement().getIdPart());
                
                if (obs.hasCode() && obs.getCode().hasCoding()) {
                    Coding coding = obs.getCode().getCodingFirstRep();
                    System.out.println("   Type: " + coding.getDisplay() + " (" + coding.getCode() + ")");
                }
                
                if (obs.hasValue()) {
                    if (obs.getValue() instanceof Quantity) {
                        Quantity quantity = (Quantity) obs.getValue();
                        System.out.println("   Value: " + quantity.getValue() + " " + quantity.getUnit());
                    } else {
                        System.out.println("   Value: " + obs.getValue().toString());
                    }
                }
                
                if (obs.hasEffective()) {
                    System.out.println("   Date: " + obs.getEffectiveDateTimeType().getValueAsString());
                }
            }
        }
    }
}
```

#### Tạo và cập nhật nhiều resources trong một transaction

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.client.api.IGenericClient;
import org.hl7.fhir.r5.model.*;

import java.util.Date;
import java.util.UUID;

public class TransactionExample {
    public static void main(String[] args) {
        FhirContext ctx = FhirContext.forR5();
        IGenericClient client = ctx.newRestfulGenericClient("http://hapi.fhir.org/baseR5");
        
        // Tạo bệnh nhân mới
        Patient patient = new Patient();
        patient.addName().setFamily("Trần").addGiven("Minh");
        patient.setBirthDate(new Date());
        patient.setGender(Enumerations.AdministrativeGender.MALE);
        
        // Tạo observation mới cho bệnh nhân
        Observation observation = new Observation();
        observation.setStatus(Observation.ObservationStatus.FINAL);
        observation.getCode().addCoding()
            .setSystem("http://loinc.org")
            .setCode("8480-6")
            .setDisplay("Systolic blood pressure");
        
        // Sử dụng UUID tạm thời để liên kết resources trong bundle
        String patientUuid = UUID.randomUUID().toString();
        
        // Set reference từ observation đến patient
        observation.setSubject(new Reference("urn:uuid:" + patientUuid));
        
        // Đặt giá trị cho observation
        Quantity quantity = new Quantity();
        quantity.setValue(120);
        quantity.setUnit("mmHg");
        quantity.setSystem("http://unitsofmeasure.org");
        quantity.setCode("mm[Hg]");
        observation.setValue(quantity);
        
        // Tạo bundle theo kiểu transaction
        Bundle bundle = new Bundle();
        bundle.setType(Bundle.BundleType.TRANSACTION);
        
        // Thêm patient vào bundle
        bundle.addEntry()
            .setFullUrl("urn:uuid:" + patientUuid)
            .setResource(patient)
            .getRequest()
                .setMethod(Bundle.HTTPVerb.POST)
                .setUrl("Patient");
        
        // Thêm observation vào bundle
        bundle.addEntry()
            .setResource(observation)
            .getRequest()
                .setMethod(Bundle.HTTPVerb.POST)
                .setUrl("Observation");
        
        // Gửi transaction đến server
        Bundle responseBundle = client.transaction().withBundle(bundle).execute();
        
        // Xử lý kết quả
        System.out.println("Transaction completed with " + responseBundle.getEntry().size() + " entries");
        
        for (Bundle.BundleEntryComponent entry : responseBundle.getEntry()) {
            System.out.println("Created: " + entry.getResponse().getLocation());
        }
    }
}
```

### Cài đặt và cấu hình

#### Thêm thư viện vào dự án Maven:

```xml
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-base</artifactId>
    <version>6.4.0</version>
</dependency>

<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-client</artifactId>
    <version>6.4.0</version>
</dependency>

<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-structures-r5</artifactId>
    <version>6.4.0</version>
</dependency>
```

#### Thêm vào Gradle Project:

```groovy
implementation 'ca.uhn.hapi.fhir:hapi-fhir-base:6.4.0'
implementation 'ca.uhn.hapi.fhir:hapi-fhir-client:6.4.0'
implementation 'ca.uhn.hapi.fhir:hapi-fhir-structures-r5:6.4.0'
```

### Tùy chỉnh client

HAPI FHIR Client cung cấp nhiều tùy chọn để điều chỉnh hành vi của client:

```java
// Tạo context
FhirContext ctx = FhirContext.forR5();

// Tùy chỉnh client factory
IRestfulClientFactory factory = ctx.getRestfulClientFactory();

// Thiết lập timeout
factory.setConnectTimeout(20000); // 20 giây cho kết nối
factory.setSocketTimeout(40000);  // 40 giây cho socket

// Thiết lập proxy nếu cần
factory.setProxy("proxy.example.com", 8080);

// Thiết lập HTTP client
factory.setHttpClient(customHttpClient);

// Tạo client với factory đã tùy chỉnh
IGenericClient client = ctx.newRestfulGenericClient("http://hapi.fhir.org/baseR5");

// Thêm interceptors
client.registerInterceptor(new LoggingInterceptor(true)); // Ghi log request/response

// Thêm interceptor tùy chỉnh để xử lý authentication
client.registerInterceptor(new IClientInterceptor() {
    @Override
    public void interceptRequest(IHttpRequest request) {
        request.addHeader("Authorization", "Bearer " + getAccessToken());
    }

    @Override
    public void interceptResponse(IHttpResponse response) {
        // Xử lý response nếu cần
    }
});
```

### Kết luận

Thư viện `hapi-fhir-client` cung cấp một API mạnh mẽ và linh hoạt để tương tác với FHIR servers. Với thiết kế fluent interface trực quan, hỗ trợ đầy đủ các hoạt động RESTful, và các tính năng xử lý nâng cao như transactions và phân trang, thư viện này làm cho việc tích hợp với các hệ thống y tế dựa trên FHIR trở nên đơn giản và hiệu quả.

Đối với các nhà phát triển đang xây dựng ứng dụng y tế hiện đại, `hapi-fhir-client` là một công cụ thiết yếu trong bộ công cụ phát triển, giúp kết nối liền mạch với hệ sinh thái FHIR ngày càng phổ biến.
