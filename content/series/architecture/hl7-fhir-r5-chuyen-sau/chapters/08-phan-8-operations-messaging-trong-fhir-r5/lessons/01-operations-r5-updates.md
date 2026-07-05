---
id: dfc8cd12-86f2-4cd7-ac76-e4142c998417
title: 'Operations R5 Updates'
slug: operations-r5-updates
description: 'Operations trong FHIR là các phương thức mở rộng ngoài CRUD chuẩn (Create, Read, Update, Delete), cho phép thực hiện các hành động phức tạp hơn trên tài nguyên FHIR. Với phiên bản R5, FHIR đã đưa ra nhiều cải tiến quan…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 1
section_title: 'Phần 8: Operations & Messaging trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Operations trong FHIR là các phương thức mở rộng ngoài CRUD chuẩn (Create, Read, Update, Delete), cho phép thực hiện các hành động phức tạp hơn trên tài nguyên FHIR. Với phiên bản R5, FHIR đã đưa ra nhiều cải tiến quan trọng giúp tăng cường khả năng, tính linh hoạt và hiệu quả của các operations.

### 1. New Standard Operations

FHIR R5 giới thiệu một số operations tiêu chuẩn mới, mở rộng khả năng tương tác giữa các hệ thống:

#### 1.1. Validate-code Operation

```
POST [base]/CodeSystem/$validate-code
```

Operation này được nâng cấp để hỗ trợ kiểm tra mã không chỉ trong một CodeSystem đơn lẻ mà còn trong nhiều CodeSystem cùng lúc, cho phép kiểm tra chéo giữa các hệ thống mã hóa khác nhau.

#### 1.2. Graph Definition Operations

```
GET [base]/GraphDefinition/[id]/$graph
```

R5 bổ sung nhiều operations liên quan đến GraphDefinition, cho phép truy vấn dữ liệu theo cấu trúc đồ thị phức tạp. Điều này đặc biệt hữu ích khi cần lấy thông tin từ nhiều resource có liên quan đến nhau.

#### 1.3. Measure Evaluation

```
POST [base]/Measure/[id]/$evaluate-measure
```

Operations liên quan đến Measure đã được cải tiến, hỗ trợ tốt hơn cho việc đánh giá các chỉ số chất lượng và báo cáo y tế.

#### 1.4. Subscription Operations

```
POST [base]/Subscription/$events
```

Các operations mới cho Subscription giúp quản lý và giám sát các sự kiện đăng ký hiệu quả hơn, bao gồm khả năng kiểm tra trạng thái và xử lý hàng đợi sự kiện.

### 2. Operation Definition Improvements

OperationDefinition trong R5 đã được cải tiến đáng kể để mô tả rõ ràng và chính xác hơn cách operations hoạt động:

#### 2.1. Improved Parameter Definitions

```xml
<parameter>
  <name value="code"/>
  <use value="in"/>
  <min value="1"/>
  <max value="1"/>
  <type value="code"/>
  <searchType value="token"/>
  <documentation value="The code to be validated"/>
  <binding>
    <strength value="required"/>
    <valueSet value="http://hl7.org/fhir/ValueSet/my-codes"/>
  </binding>
</parameter>
```

R5 giới thiệu khả năng gắn binding vào các tham số, cho phép xác định rõ ràng các giá trị hợp lệ cho tham số đầu vào.

#### 2.2. Base Resource Binding

OperationDefinition giờ đây có thể liên kết với một resource cụ thể hoặc nhiều resource, giúp làm rõ phạm vi của operation:

```xml
<resource value="Patient"/>
<resource value="Practitioner"/>
```

#### 2.3. Chaining Operations

R5 hỗ trợ việc mô tả chuỗi operations, cho phép các operations gọi nhau theo trình tự xác định, tạo ra quy trình công việc phức tạp:

```xml
<affectsState value="true"/>
<system value="false"/>
<type value="true"/>
<instance value="true"/>
<inputProfile value="http://hl7.org/fhir/StructureDefinition/operation-input"/>
<outputProfile value="http://hl7.org/fhir/StructureDefinition/operation-output"/>
```

### 3. Operation Outcomes

OperationOutcome trong R5 đã được mở rộng để cung cấp thông tin phản hồi phong phú hơn:

#### 3.1. Severity Levels

```xml
<issue>
  <severity value="warning"/>
  <code value="business-rule"/>
  <details>
    <text value="Patient date of birth is in the future"/>
  </details>
  <expression value="Patient.birthDate"/>
</issue>
```

Ngoài các mức độ nghiêm trọng cơ bản (information, warning, error, fatal), R5 giới thiệu các mã lỗi chi tiết hơn và cách phân loại vấn đề rõ ràng hơn.

#### 3.2. Expression-based Diagnostics

OperationOutcome trong R5 hỗ trợ FHIRPath expressions, giúp xác định chính xác vị trí của vấn đề trong tài nguyên:

```xml
<expression value="Patient.telecom.where(system='phone' and value='').exists()"/>
```

#### 3.3. Structured Issue Details

R5 cho phép cung cấp chi tiết vấn đề có cấu trúc thay vì chỉ là văn bản thuần túy:

```xml
<details>
  <coding>
    <system value="http://terminology.hl7.org/CodeSystem/operation-outcome"/>
    <code value="MSG_AUTH_REQUIRED"/>
  </coding>
  <text value="Authentication is required for this operation"/>
</details>
```

### 4. Asynchronous Operations

Một trong những tính năng nổi bật của FHIR R5 là hỗ trợ nâng cao cho operations bất đồng bộ:

#### 4.1. Async Pattern Standardization

R5 tiêu chuẩn hóa cách thức yêu cầu và theo dõi operations bất đồng bộ, sử dụng header `Prefer: respond-async`:

```
POST [base]/Patient/$everything
Prefer: respond-async
```

Phản hồi sẽ bao gồm một header `Content-Location` trỏ đến endpoint theo dõi:

```
HTTP/1.1 202 Accepted
Content-Location: http://server.org/fhir/Task/42
```

#### 4.2. Task Resource for Tracking

Operations bất đồng bộ trong R5 sử dụng tài nguyên Task để theo dõi tiến trình, cung cấp cơ chế nhất quán cho việc quản lý operations dài hạn:

```xml
<Task>
  <status value="in-progress"/>
  <intent value="order"/>
  <code>
    <coding>
      <system value="http://hl7.org/fhir/CodeSystem/task-code"/>
      <code value="async-operation"/>
    </coding>
  </code>
  <focus>
    <reference value="Patient/123"/>
  </focus>
  <output>
    <type>
      <text value="operation-result"/>
    </type>
    <valueReference>
      <reference value="Bundle/result-456"/>
    </valueReference>
  </output>
</Task>
```

#### 4.3. Cancellation and Timeout

R5 bổ sung khả năng hủy operations bất đồng bộ đang chạy và cấu hình thời gian chờ:

```
DELETE [base]/Task/42
```

### 5. Batch Operations

Xử lý hàng loạt trong FHIR R5 cũng được nâng cấp đáng kể:

#### 5.1. Enhanced Transaction Bundle

```xml
<Bundle>
  <type value="transaction"/>
  <entry>
    <request>
      <method value="POST"/>
      <url value="Patient"/>
    </request>
    <resource>
      <Patient>
        <!-- Patient data -->
      </Patient>
    </resource>
  </entry>
  <entry>
    <request>
      <method value="POST"/>
      <url value="Observation"/>
      <ifNoneExist value="subject:Patient/123&code=http://loinc.org|8480-6"/>
    </request>
    <resource>
      <Observation>
        <!-- Observation data -->
      </Observation>
    </resource>
  </entry>
</Bundle>
```

R5 cải thiện xử lý lỗi, cho phép kiểm soát tốt hơn việc xử lý từng mục trong bundle.

#### 5.2. Batch Operations with Dynamic References

R5 hỗ trợ tham chiếu động giữa các mục trong cùng một batch, cho phép tạo và liên kết các tài nguyên mới trong cùng một giao dịch:

```xml
<entry>
  <fullUrl value="urn:uuid:4f6a30fb-cd3c-4ab6-8757-532101f72065"/>
  <resource>
    <Patient>
      <!-- Patient data -->
    </Patient>
  </resource>
  <request>
    <method value="POST"/>
    <url value="Patient"/>
  </request>
</entry>
<entry>
  <resource>
    <Observation>
      <subject>
        <reference value="urn:uuid:4f6a30fb-cd3c-4ab6-8757-532101f72065"/>
      </subject>
      <!-- Observation data -->
    </Observation>
  </resource>
  <request>
    <method value="POST"/>
    <url value="Observation"/>
  </request>
</entry>
```

#### 5.3. Conditional References

R5 giới thiệu khả năng tham chiếu điều kiện trong các bundle giao dịch:

```xml
<subject>
  <reference value="Patient?identifier=http://hospital.org|MRN12345"/>
</subject>
```

Điều này cho phép liên kết đến tài nguyên dựa trên các tiêu chí tìm kiếm thay vì ID cụ thể.

### Kết luận

Các cập nhật Operation trong FHIR R5 mang lại nhiều cải tiến đáng kể, giúp phát triển hệ thống y tế linh hoạt và mạnh mẽ hơn. Từ các operations tiêu chuẩn mới đến khả năng xử lý bất đồng bộ nâng cao, các tính năng này đáp ứng nhu cầu ngày càng phức tạp của hệ thống thông tin y tế hiện đại.

Là một Solution Architect, tôi đặc biệt đánh giá cao cách FHIR R5 cải thiện khả năng mô tả và tài liệu hóa operations, cũng như các cơ chế xử lý lỗi nâng cao. Những cải tiến này không chỉ làm cho việc phát triển dễ dàng hơn mà còn nâng cao tính tương tác giữa các hệ thống khác nhau.

Trong các bài viết tiếp theo, chúng ta sẽ khám phá cách triển khai thực tế các operations này và xem xét các mẫu thiết kế tối ưu để tận dụng tối đa những tính năng mới.
