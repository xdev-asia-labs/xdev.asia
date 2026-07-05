---
id: f0be1e21-5b69-4adc-8a86-483a51564e80
title: 'Infrastructure Resources'
slug: infrastructure-resources
description: 'Xin chào các bạn! Trong bài viết hôm nay, chúng ta sẽ cùng tìm hiểu về các Infrastructure Resources (Tài nguyên hạ tầng) trong FHIR R5. Đây là những tài nguyên rất quan trọng, cung cấp nền tảng vững chắc cho các hệ…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 4
section_title: 'Phần 6: Đào sâu Resource FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Xin chào các bạn! Trong bài viết hôm nay, chúng ta sẽ cùng tìm hiểu về các Infrastructure Resources (Tài nguyên hạ tầng) trong FHIR R5. Đây là những tài nguyên rất quan trọng, cung cấp nền tảng vững chắc cho các hệ thống y tế số, mặc dù chúng thường không được chú ý nhiều như các tài nguyên lâm sàng.

Hãy cùng khám phá từng loại tài nguyên một cách chi tiết và dễ hiểu!

### 1. CapabilityStatement - Tuyên bố khả năng

CapabilityStatement là một trong những tài nguyên quan trọng nhất trong FHIR. Nó mô tả khả năng của một hệ thống FHIR - các tài nguyên được hỗ trợ, các hoạt động cho phép, và các tính năng được triển khai.

#### Vai trò của CapabilityStatement

* Làm "sổ tay hướng dẫn" cho API FHIR
* Cho biết hệ thống hỗ trợ những tài nguyên nào (ví dụ: Patient, Observation...)
* Xác định các tương tác được phép (đọc, tạo, cập nhật...)
* Liệt kê các tìm kiếm được hỗ trợ

#### Ví dụ thực tế

Giả sử bạn đang xây dựng một ứng dụng di động để theo dõi sức khỏe và muốn kết nối với phòng khám. Trước khi kết nối, ứng dụng cần biết phòng khám hỗ trợ những tính năng gì. Bạn có thể gửi yêu cầu tới endpoint `/metadata` để nhận về CapabilityStatement:

```json
{
  "resourceType": "CapabilityStatement",
  "status": "active",
  "date": "2023-06-15",
  "name": "PhongKhamAPICapabilities",
  "title": "Khả năng API của Phòng Khám ABC",
  "description": "Mô tả các tính năng FHIR được hỗ trợ tại Phòng Khám ABC",
  "fhirVersion": "5.0.0",
  "format": ["application/fhir+json", "application/fhir+xml"],
  "rest": [
    {
      "mode": "server",
      "resource": [
        {
          "type": "Patient",
          "interaction": [
            {
              "code": "read"
            },
            {
              "code": "search-type"
            },
            {
              "code": "create"
            },
            {
              "code": "update"
            }
          ],
          "searchParam": [
            {
              "name": "name",
              "type": "string"
            },
            {
              "name": "identifier",
              "type": "token"
            },
            {
              "name": "birthdate",
              "type": "date"
            }
          ]
        },
        {
          "type": "Observation",
          "interaction": [
            {
              "code": "read"
            },
            {
              "code": "search-type"
            },
            {
              "code": "create"
            }
          ],
          "searchParam": [
            {
              "name": "patient",
              "type": "reference"
            },
            {
              "name": "code",
              "type": "token"
            },
            {
              "name": "date",
              "type": "date"
            }
          ]
        }
      ]
    }
  ]
}
```

Từ CapabilityStatement này, ứng dụng của bạn biết được:

* Server hỗ trợ FHIR phiên bản 5.0.0
* Hỗ trợ cả JSON và XML
* Có thể đọc, tìm kiếm, tạo và cập nhật bệnh nhân (Patient)
* Có thể đọc, tìm kiếm và tạo kết quả xét nghiệm (Observation)
* Biết được các tham số tìm kiếm được hỗ trợ cho mỗi loại tài nguyên

### 2. OperationDefinition - Định nghĩa thao tác

OperationDefinition mô tả các thao tác đặc biệt mà một server FHIR cung cấp, ngoài các thao tác chuẩn như đọc, cập nhật, xóa.

#### Vai trò của OperationDefinition

* Định nghĩa các thao tác phức tạp
* Xác định tham số đầu vào và đầu ra
* Mô tả hành vi của thao tác

#### Ví dụ thực tế

Giả sử bệnh viện có một thao tác đặc biệt để tính toán chỉ số BMI từ chiều cao và cân nặng:

```json
{
  "resourceType": "OperationDefinition",
  "id": "calculate-bmi",
  "status": "active",
  "name": "calculateBMI",
  "title": "Tính toán chỉ số BMI",
  "kind": "operation",
  "code": "calculate-bmi",
  "description": "Tính toán chỉ số khối cơ thể (BMI) từ chiều cao và cân nặng",
  "system": false,
  "type": true,
  "instance": false,
  "resource": ["Patient"],
  "parameter": [
    {
      "name": "height",
      "use": "in",
      "min": 1,
      "max": "1",
      "type": "Quantity",
      "documentation": "Chiều cao (cm)"
    },
    {
      "name": "weight",
      "use": "in",
      "min": 1,
      "max": "1",
      "type": "Quantity",
      "documentation": "Cân nặng (kg)"
    },
    {
      "name": "return",
      "use": "out",
      "min": 1,
      "max": "1",
      "type": "Observation",
      "documentation": "Kết quả BMI dưới dạng Observation"
    }
  ]
}
```

Ứng dụng của bạn có thể sử dụng thao tác này như sau:

```
POST /Patient/123/$calculate-bmi
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "height",
      "valueQuantity": {
        "value": 170,
        "unit": "cm"
      }
    },
    {
      "name": "weight",
      "valueQuantity": {
        "value": 70,
        "unit": "kg"
      }
    }
  ]
}
```

Server sẽ trả về kết quả BMI dưới dạng tài nguyên Observation.

### 3. SearchParameter - Tham số tìm kiếm

SearchParameter định nghĩa cách tìm kiếm dữ liệu trong FHIR. Nó mô tả các tham số tìm kiếm có thể được sử dụng với từng loại tài nguyên.

#### Vai trò của SearchParameter

* Định nghĩa các tham số tìm kiếm tùy chỉnh
* Xác định cách tìm kiếm trong dữ liệu phức tạp
* Cho phép tìm kiếm linh hoạt hơn

#### Ví dụ thực tế

Giả sử bạn muốn tìm kiếm bệnh nhân theo nhóm máu, bạn có thể định nghĩa một SearchParameter như sau:

```json
{
  "resourceType": "SearchParameter",
  "id": "patient-bloodgroup",
  "status": "active",
  "name": "bloodGroup",
  "description": "Tìm kiếm bệnh nhân theo nhóm máu",
  "code": "blood-group",
  "base": ["Patient"],
  "type": "token",
  "expression": "Patient.extension.where(url = 'http://hospital.org/fhir/StructureDefinition/bloodGroup').value"
}
```

Sau khi đăng ký tham số tìm kiếm này, bạn có thể tìm kiếm:

```
GET /Patient?blood-group=A+
```

Server sẽ trả về danh sách bệnh nhân có nhóm máu A+.

### 4. Subscription, SubscriptionTopic, SubscriptionStatus - Đăng ký thông báo

Đây là nhóm tài nguyên phục vụ hệ thống đăng ký nhận thông báo khi có thay đổi. Đây là cách hiệu quả để theo dõi những thay đổi trong hệ thống FHIR mà không cần liên tục truy vấn server.

#### Vai trò của hệ thống Subscription

* Subscription: Đăng ký theo dõi các sự kiện cụ thể
* SubscriptionTopic: Định nghĩa loại sự kiện có thể đăng ký
* SubscriptionStatus: Theo dõi trạng thái của đăng ký

#### Ví dụ thực tế

Giả sử bạn muốn nhận thông báo mỗi khi có kết quả xét nghiệm mới cho bệnh nhân cụ thể:

**1. Định nghĩa SubscriptionTopic:**

```json
{
  "resourceType": "SubscriptionTopic",
  "id": "new-lab-results",
  "status": "active",
  "url": "http://hospital.org/fhir/SubscriptionTopic/new-lab-results",
  "title": "Kết quả xét nghiệm mới",
  "resourceTrigger": [
    {
      "description": "Khi có tài nguyên Observation mới thuộc loại xét nghiệm",
      "resource": "Observation",
      "supportedInteraction": ["create", "update"],
      "queryCriteria": {
        "current": "category=laboratory"
      }
    }
  ]
}
```

**2. Tạo Subscription:**

```json
{
  "resourceType": "Subscription",
  "id": "patient-lab-subscription",
  "status": "requested",
  "reason": "Theo dõi kết quả xét nghiệm của bệnh nhân",
  "topic": "http://hospital.org/fhir/SubscriptionTopic/new-lab-results",
  "end": "2024-12-31T23:59:59Z",
  "filterBy": [
    {
      "searchParam": "patient",
      "searchModifier": "=",
      "value": "Patient/123"
    }
  ],
  "channel": {
    "type": "rest-hook",
    "endpoint": "https://app.example.com/fhir/notification-endpoint",
    "payload": {
      "content": "id-only",
      "contentType": "application/fhir+json"
    }
  }
}
```

**3. Kiểm tra SubscriptionStatus:**

```
GET /Subscription/patient-lab-subscription/$status
```

Server sẽ trả về trạng thái hiện tại của đăng ký:

```json
{
  "resourceType": "SubscriptionStatus",
  "status": "active",
  "type": "status",
  "subscription": {
    "reference": "Subscription/patient-lab-subscription"
  },
  "topic": "http://hospital.org/fhir/SubscriptionTopic/new-lab-results",
  "eventsSinceSubscriptionStart": 5,
  "notificationEvent": [
    {
      "eventNumber": 5,
      "timestamp": "2023-06-15T14:30:00Z",
      "focus": {
        "reference": "Observation/lab-result-789"
      }
    }
  ]
}
```

Khi có kết quả xét nghiệm mới cho bệnh nhân 123, server sẽ gửi thông báo đến `https://app.example.com/fhir/notification-endpoint`.

### 5. Binary, Bundle, Parameters - Tài nguyên đặc biệt

#### Binary - Dữ liệu nhị phân

Binary dùng để lưu trữ dữ liệu nhị phân như hình ảnh, tài liệu PDF, file âm thanh.

**Ví dụ thực tế**

Lưu trữ ảnh chụp X-quang:

```json
{
  "resourceType": "Binary",
  "id": "xray-chest",
  "contentType": "image/jpeg",
  "data": "base64EncodedDataHere..."
}
```

Để lấy dữ liệu nhị phân:

```
GET /Binary/xray-chest
Accept: image/jpeg
```

#### Bundle - Gói tài nguyên

Bundle là một container chứa nhiều tài nguyên FHIR. Nó được sử dụng để nhóm và truyền nhiều tài nguyên cùng một lúc.

**Ví dụ thực tế**

Kết quả tìm kiếm bệnh nhân:

```json
{
  "resourceType": "Bundle",
  "id": "search-results",
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://hospital.org/fhir/Patient?name=Nguyen"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://hospital.org/fhir/Patient/123",
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "name": [
          {
            "family": "Nguyen",
            "given": ["Van", "A"]
          }
        ]
      },
      "search": {
        "mode": "match",
        "score": 1.0
      }
    },
    {
      "fullUrl": "https://hospital.org/fhir/Patient/456",
      "resource": {
        "resourceType": "Patient",
        "id": "456",
        "name": [
          {
            "family": "Nguyen",
            "given": ["Thi", "B"]
          }
        ]
      },
      "search": {
        "mode": "match",
        "score": 0.8
      }
    }
  ]
}
```

Bundle cũng được sử dụng để gửi nhiều tài nguyên trong một giao dịch (transaction):

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "request": {
        "method": "POST",
        "url": "Patient"
      },
      "resource": {
        "resourceType": "Patient",
        "name": [
          {
            "family": "Tran",
            "given": ["Van", "C"]
          }
        ]
      }
    },
    {
      "request": {
        "method": "POST",
        "url": "Encounter"
      },
      "resource": {
        "resourceType": "Encounter",
        "status": "in-progress",
        "class": {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "AMB",
          "display": "ambulatory"
        }
      }
    }
  ]
}
```

#### Parameters - Tham số thao tác

Parameters được sử dụng để truyền tham số cho các thao tác FHIR.

**Ví dụ thực tế**

Gửi tham số cho thao tác tìm kiếm bệnh nhân trùng lặp:

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "patient",
      "resource": {
        "resourceType": "Patient",
        "name": [
          {
            "family": "Le",
            "given": ["Van", "D"]
          }
        ],
        "birthDate": "1980-01-01"
      }
    },
    {
      "name": "threshold",
      "valueDecimal": 0.9
    }
  ]
}
```

### Tại sao Infrastructure Resources quan trọng?

1. **Chuẩn hóa giao tiếp**: Các tài nguyên này tạo ra "ngôn ngữ chung" cho các hệ thống y tế để giao tiếp.
2. **Tự mô tả**: Server FHIR có thể tự mô tả khả năng của mình, giúp client dễ dàng hiểu và sử dụng API.
3. **Linh hoạt**: Cho phép mở rộng và tùy chỉnh hệ thống mà không phá vỡ tính tương thích.
4. **Đảm bảo tính nhất quán**: Giúp duy trì tính nhất quán trong việc triển khai FHIR.
5. **Hỗ trợ tích hợp**: Làm đơn giản hóa việc tích hợp giữa các hệ thống khác nhau.

### Ví dụ ứng dụng thực tế

#### Kịch bản: Xây dựng hệ thống theo dõi bệnh nhân đái tháo đường

Một phòng khám muốn xây dựng hệ thống cho phép bệnh nhân đái tháo đường theo dõi đường huyết tại nhà và chia sẻ với bác sĩ. Dưới đây là cách các Infrastructure Resources được sử dụng:

**1. Tạo API và mô tả bằng CapabilityStatement**

Phòng khám cung cấp API FHIR với CapabilityStatement mô tả đầy đủ các tài nguyên và hoạt động được hỗ trợ (Patient, Observation, CarePlan...).

**2. Định nghĩa thao tác đặc biệt với OperationDefinition**

Tạo thao tác `$calculate-average-glucose` để tính toán đường huyết trung bình trong khoảng thời gian.

**3. Thêm tham số tìm kiếm tùy chỉnh với SearchParameter**

Định nghĩa tham số tìm kiếm `abnormal-glucose` để dễ dàng tìm kiếm các chỉ số đường huyết bất thường.

**4. Thiết lập thông báo với Subscription**

Bác sĩ đăng ký nhận thông báo khi bệnh nhân có chỉ số đường huyết vượt ngưỡng.

**5. Sử dụng Binary để lưu trữ dữ liệu**

Lưu trữ hình ảnh thực phẩm bệnh nhân đã ăn để đánh giá chế độ ăn.

**6. Sử dụng Bundle để gửi dữ liệu hàng loạt**

Ứng dụng di động gửi nhiều chỉ số đường huyết cùng một lúc bằng Bundle.

### Làm thế nào để triển khai Infrastructure Resources?

#### 1. Bắt đầu với CapabilityStatement

Đây là nơi bắt đầu tốt nhất. Xác định rõ những tài nguyên, thao tác, và tìm kiếm mà hệ thống của bạn hỗ trợ.

```
# Tạo CapabilityStatement
POST /CapabilityStatement
Content-Type: application/fhir+json

{
  "resourceType": "CapabilityStatement",
  "status": "active",
  "date": "2023-06-15",
  "name": "DiabetesMonitoringAPI",
  "title": "API Theo dõi bệnh nhân đái tháo đường",
  ...
}
```

#### 2. Định nghĩa các thao tác đặc biệt

Nếu cần các thao tác phức tạp, hãy định nghĩa chúng bằng OperationDefinition.

```
# Đăng ký thao tác mới
POST /OperationDefinition
Content-Type: application/fhir+json

{
  "resourceType": "OperationDefinition",
  "id": "calculate-average-glucose",
  "status": "active",
  "name": "calculateAverageGlucose",
  ...
}
```

#### 3. Thêm tham số tìm kiếm tùy chỉnh

Đăng ký các tham số tìm kiếm mới để hỗ trợ các trường hợp tìm kiếm đặc biệt.

```
# Đăng ký tham số tìm kiếm mới
POST /SearchParameter
Content-Type: application/fhir+json

{
  "resourceType": "SearchParameter",
  "id": "abnormal-glucose",
  "status": "active",
  "name": "abnormalGlucose",
  ...
}
```

#### 4. Thiết lập hệ thống thông báo

Định nghĩa các SubscriptionTopic và cho phép client đăng ký Subscription.

```
# Đăng ký topic mới
POST /SubscriptionTopic
Content-Type: application/fhir+json

{
  "resourceType": "SubscriptionTopic",
  "id": "high-glucose-alert",
  "status": "active",
  ...
}
```

#### 5. Sử dụng Binary, Bundle, và Parameters khi cần

Sử dụng các tài nguyên đặc biệt này để xử lý các trường hợp phức tạp.

### Kết luận

Infrastructure Resources là nền tảng quan trọng cho bất kỳ hệ thống FHIR nào. Tuy không phải là tài nguyên lâm sàng trực tiếp, nhưng chúng cung cấp cơ sở hạ tầng cần thiết để các tài nguyên lâm sàng hoạt động hiệu quả, linh hoạt và mạnh mẽ.

Khi xây dựng hệ thống y tế số, việc hiểu và sử dụng đúng các Infrastructure Resources sẽ giúp bạn tạo ra hệ thống có khả năng mở rộng, dễ tích hợp và tuân thủ các tiêu chuẩn quốc tế về trao đổi dữ liệu y tế.
