---
id: de8fd6c1-b8bf-4ed5-8441-ec2e1dd4bbe8
title: 'FHIR Messaging in R5'
slug: fhir-messaging-in-r5
description: 'FHIR Messaging là một trong ba paradigm chính của FHIR (cùng với RESTful API và Documents), cho phép các hệ thống trao đổi thông tin theo cơ chế gửi và nhận tin nhắn. Paradigm này đặc biệt phù hợp với các quy trình làm…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 2
section_title: 'Phần 8: Operations & Messaging trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
FHIR Messaging là một trong ba paradigm chính của FHIR (cùng với RESTful API và Documents), cho phép các hệ thống trao đổi thông tin theo cơ chế gửi và nhận tin nhắn. Paradigm này đặc biệt phù hợp với các quy trình làm việc phức tạp, thông báo sự kiện, và tích hợp với các hệ thống không hỗ trợ RESTful API.

Với phiên bản R5, FHIR đã đưa ra nhiều cải tiến đáng kể cho Messaging, giúp tăng cường tính linh hoạt, độ tin cậy và khả năng mở rộng.

### 1. MessageHeader Resource Updates

MessageHeader là resource cốt lõi của FHIR Messaging, cung cấp thông tin metadata cho mỗi tin nhắn. Trong R5, resource này có một số thay đổi quan trọng:

#### 1.1. Cấu trúc Source và Destination được cải tiến

```xml
<MessageHeader>
  <eventCoding>
    <system value="http://example.org/fhir/message-events"/>
    <code value="admin-notify"/>
  </eventCoding>
  <destination>
    <endpoint value="https://example.org/fhir/endpoint/123"/>
    <name value="Primary Care Provider System"/>
    <target>
      <reference value="Device/software-instance-1"/>
    </target>
    <receiver>
      <reference value="Organization/primary-care"/>
    </receiver>
  </destination>
  <sender>
    <reference value="Organization/hospital"/>
  </sender>
  <source>
    <endpoint value="https://hospital.example.org/fhir/endpoint/456"/>
    <name value="Hospital System"/>
    <version value="2.3.5"/>
    <software value="HospitalEHR"/>
    <contact>
      <system value="email"/>
      <value value="admin@hospital.example.org"/>
    </contact>
  </source>
  <!-- Nội dung khác -->
</MessageHeader>
```

Các thay đổi chính bao gồm:

* **Endpoint URI**: Thay vì sử dụng endpoint name, R5 sử dụng URI để xác định rõ ràng hơn nơi tin nhắn đến và đi.
* **Target và Receiver**: Phân biệt rõ giữa hệ thống kỹ thuật nhận tin nhắn (target) và tổ chức/đơn vị chịu trách nhiệm về mặt nghiệp vụ (receiver).
* **Contact Information**: Thông tin liên hệ được mở rộng để hỗ trợ khắc phục sự cố.

#### 1.2. Focus References được nâng cấp

```xml
<focus>
  <reference value="Patient/123"/>
</focus>
<focus>
  <reference value="Encounter/456"/>
</focus>
```

Trong R5, focus references được cải thiện để hỗ trợ tốt hơn việc tham chiếu đến các resource là đối tượng chính của tin nhắn.

#### 1.3. Response Requirements được làm rõ

```xml
<responseRequired value="always"/>
```

R5 bổ sung trường `responseRequired` với các giá trị rõ ràng (never, on-error, always, on-success), giúp người gửi xác định rõ yêu cầu về phản hồi.

### 2. MessageDefinition Improvements

MessageDefinition là resource mô tả cấu trúc và nội dung kỳ vọng của các loại tin nhắn. R5 mang đến nhiều cải tiến quan trọng:

#### 2.1. Event Definition rõ ràng hơn

```xml
<MessageDefinition>
  <url value="http://example.org/fhir/MessageDefinition/patient-admission"/>
  <name value="PatientAdmissionNotification"/>
  <status value="active"/>
  <date value="2023-04-15"/>
  <eventCoding>
    <system value="http://example.org/fhir/message-events"/>
    <code value="patient-admission"/>
    <display value="Patient Admission Notification"/>
  </eventCoding>
  <category value="notification"/>
  <!-- Các phần khác -->
</MessageDefinition>
```

R5 cho phép định nghĩa rõ ràng hơn về sự kiện kích hoạt tin nhắn, bao gồm cả tài liệu chi tiết về ngữ cảnh sử dụng.

#### 2.2. Focus và Graph Definition

```xml
<focus>
  <code value="Patient"/>
  <profile value="http://example.org/fhir/StructureDefinition/us-core-patient"/>
  <min value="1"/>
  <max value="1"/>
</focus>
<focus>
  <code value="Encounter"/>
  <profile value="http://example.org/fhir/StructureDefinition/inpatient-encounter"/>
  <min value="1"/>
  <max value="1"/>
</focus>
<graph value="http://example.org/fhir/GraphDefinition/admission-resources"/>
```

R5 bổ sung khả năng liên kết với GraphDefinition, cho phép mô tả chi tiết cấu trúc đồ thị của các resource trong tin nhắn.

#### 2.3. Allowable Responses

```xml
<allowedResponse>
  <message>
    <reference value="http://example.org/fhir/MessageDefinition/admission-ack"/>
  </message>
  <situation value="Phản hồi này được sử dụng khi hệ thống đã xử lý thành công thông báo nhập viện."/>
</allowedResponse>
<allowedResponse>
  <message>
    <reference value="http://example.org/fhir/MessageDefinition/admission-error"/>
  </message>
  <situation value="Phản hồi này được sử dụng khi có lỗi xảy ra trong quá trình xử lý thông báo nhập viện."/>
</allowedResponse>
```

MessageDefinition trong R5 có thể chỉ định rõ ràng các phản hồi hợp lệ, giúp làm rõ quy trình trao đổi tin nhắn.

### 3. Bundle Type "message"

Bundle là container chứa tin nhắn FHIR và R5 mang đến một số cải tiến cho Bundle type "message":

#### 3.1. Cấu trúc Bundle Message

```xml
<Bundle>
  <type value="message"/>
  <timestamp value="2023-05-20T14:30:00Z"/>
  <entry>
    <fullUrl value="urn:uuid:267b18ce-3d37-4581-9baa-6fada338038b"/>
    <resource>
      <MessageHeader>
        <!-- MessageHeader content -->
      </MessageHeader>
    </resource>
  </entry>
  <entry>
    <fullUrl value="http://example.org/fhir/Patient/123"/>
    <resource>
      <Patient>
        <!-- Patient data -->
      </Patient>
    </resource>
  </entry>
  <entry>
    <fullUrl value="http://example.org/fhir/Encounter/456"/>
    <resource>
      <Encounter>
        <!-- Encounter data -->
      </Encounter>
    </resource>
  </entry>
</Bundle>
```

R5 làm rõ hơn về cách các resource liên kết với nhau trong message bundle, và cải thiện khả năng xác định context của tin nhắn.

#### 3.2. Signature và Provenance

```xml
<Bundle>
  <type value="message"/>
  <timestamp value="2023-05-20T14:30:00Z"/>
  <signature>
    <type>
      <system value="urn:iso-astm:E1762-95:2013"/>
      <code value="1.2.840.10065.1.12.1.1"/>
      <display value="Author's Signature"/>
    </type>
    <when value="2023-05-20T14:30:01Z"/>
    <who>
      <reference value="Practitioner/123"/>
    </who>
    <sigFormat value="application/jose"/>
    <data value="...signature data..."/>
  </signature>
  <!-- Message entries -->
</Bundle>
```

R5 tăng cường hỗ trợ cho việc ký số tin nhắn và theo dõi nguồn gốc, góp phần nâng cao tính bảo mật và khả năng kiểm toán.

#### 3.3. Batch trong Message

R5 làm rõ và chuẩn hóa việc sử dụng các kiểu Bundle khác (như batch) bên trong message Bundle, mở rộng khả năng xử lý hàng loạt trong ngữ cảnh messaging.

### 4. Reliable Messaging Patterns

FHIR R5 mở rộng hỗ trợ cho các mẫu nhắn tin đáng tin cậy:

#### 4.1. Store and Forward

```
POST [base]/Bundle
Content-Type: application/fhir+xml
```

```xml
<Bundle>
  <type value="message"/>
  <entry>
    <resource>
      <MessageHeader>
        <id value="123"/>
        <eventCoding>
          <system value="http://example.org/fhir/message-events"/>
          <code value="patient-update"/>
        </eventCoding>
        <destination>
          <endpoint value="https://target-system.org/fhir/endpoint/123"/>
          <receiver>
            <reference value="Organization/receiving-org"/>
          </receiver>
        </destination>
        <source>
          <endpoint value="https://source-system.org/fhir/endpoint/456"/>
        </source>
        <response>
          <identifier value="5015fe84-8e76-4526-89d8-44b322e8d4fb"/>
          <code value="ok"/>
        </response>
      </MessageHeader>
    </resource>
  </entry>
  <!-- Message content -->
</Bundle>
```

R5 tiêu chuẩn hóa quy trình store-and-forward, cho phép tin nhắn được lưu trữ tạm thời và chuyển tiếp khi đích đến sẵn sàng.

#### 4.2. Message Queuing

R5 định nghĩa rõ ràng hơn về cách quản lý hàng đợi tin nhắn, bao gồm:

* Xử lý tin nhắn theo thứ tự
* Xác nhận nhận tin nhắn
* Xử lý trùng lặp
* Thời gian hết hạn

#### 4.3. Publish/Subscribe với Messaging

```xml
<Subscription>
  <status value="active"/>
  <end value="2024-01-01T00:00:00Z"/>
  <reason value="Thông báo cập nhật bệnh nhân"/>
  <criteria value="Patient?_lastUpdated=gt${%last-updated}"/>
  <channel>
    <type value="message"/>
    <endpoint value="https://subscriber.example.org/fhir/endpoint/message-receiver"/>
    <payload value="application/fhir+xml"/>
    <header value="Authorization: Bearer secret-token-123"/>
  </channel>
</Subscription>
```

R5 tích hợp tốt hơn giữa Subscription và Messaging, cho phép sử dụng tin nhắn FHIR làm cơ chế thông báo cho các subscription events.

### 5. Response và Error Handling

FHIR R5 nâng cao đáng kể cách xử lý phản hồi và lỗi trong Messaging:

#### 5.1. Response MessageHeader cải tiến

```xml
<MessageHeader>
  <eventCoding>
    <system value="http://example.org/fhir/message-events"/>
    <code value="patient-update-response"/>
  </eventCoding>
  <destination>
    <endpoint value="https://source-system.org/fhir/endpoint/456"/>
  </destination>
  <sender>
    <reference value="Organization/receiving-org"/>
  </sender>
  <source>
    <endpoint value="https://target-system.org/fhir/endpoint/123"/>
  </source>
  <response>
    <identifier value="5015fe84-8e76-4526-89d8-44b322e8d4fb"/>
    <code value="ok"/>
    <details>
      <reference value="OperationOutcome/response-details"/>
    </details>
  </response>
</MessageHeader>
```

R5 cải thiện cấu trúc response trong MessageHeader, cho phép cung cấp thông tin chi tiết hơn về kết quả xử lý.

#### 5.2. Response Codes mở rộng

Các mã phản hồi trong R5 được mở rộng:

* **ok**: Xử lý thành công
* **transient-error**: Lỗi tạm thời, có thể thử lại
* **fatal-error**: Lỗi nghiêm trọng, không nên thử lại
* **pending**: Đã nhận nhưng chưa xử lý hoàn tất

#### 5.3. OperationOutcome trong Messaging

```xml
<OperationOutcome>
  <issue>
    <severity value="error"/>
    <code value="processing"/>
    <details>
      <text value="Không thể xử lý thông tin bệnh nhân do thiếu số định danh"/>
    </details>
    <diagnostics value="Patient.identifier is required"/>
    <expression value="Bundle.entry[1].resource.ofType(Patient).identifier"/>
  </issue>
  <issue>
    <severity value="warning"/>
    <code value="informational"/>
    <details>
      <text value="Thông tin bảo hiểm không được cập nhật do không có sự thay đổi"/>
    </details>
  </issue>
</OperationOutcome>
```

R5 chuẩn hóa việc sử dụng OperationOutcome trong phản hồi tin nhắn, cho phép cung cấp thông tin chi tiết về lỗi và cảnh báo.

#### 5.4. Retry Handling

FHIR R5 định nghĩa các cơ chế và quy tắc rõ ràng cho việc thử lại khi gặp lỗi:

```xml
<MessageHeader>
  <!-- Basic message header info -->
  <response>
    <identifier value="5015fe84-8e76-4526-89d8-44b322e8d4fb"/>
    <code value="transient-error"/>
    <details>
      <reference value="OperationOutcome/response-details"/>
    </details>
  </response>
  <extension url="http://example.org/fhir/StructureDefinition/retry-info">
    <extension url="retry-after">
      <valueUnsignedInt value="300"/>
    </extension>
    <extension url="max-retries">
      <valueUnsignedInt value="5"/>
    </extension>
  </extension>
</MessageHeader>
```

Các cải tiến bao gồm:

* Phân biệt rõ ràng giữa lỗi tạm thời và lỗi vĩnh viễn
* Cơ chế gợi ý thời gian thử lại
* Xác định số lần thử lại tối đa
* Chuẩn hóa cách báo cáo lỗi liên tiếp

### Kết luận

FHIR Messaging trong R5 đã được nâng cấp đáng kể với nhiều cải tiến quan trọng. Từ việc làm rõ cấu trúc MessageHeader đến việc tăng cường độ tin cậy và xử lý lỗi, những thay đổi này giúp Messaging trở thành một paradigm mạnh mẽ hơn cho việc trao đổi thông tin y tế.

Với tư cách là Solution Architect, tôi thấy những cải tiến này đặc biệt có giá trị trong các môi trường yêu cầu trao đổi dữ liệu phức tạp, đáng tin cậy và có khả năng kiểm toán cao. Việc tích hợp tốt hơn với các tính năng khác của FHIR như Subscription và GraphDefinition cũng mở ra nhiều khả năng thiết kế hệ thống linh hoạt hơn.

Trong bài viết tiếp theo của series, chúng ta sẽ khám phá các mẫu thiết kế và triển khai cụ thể để tận dụng tối đa những cải tiến này trong các hệ thống thực tế.
