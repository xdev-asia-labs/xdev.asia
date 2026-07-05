---
id: 2437c035-8300-4ee8-a2e0-434328f1a2f1
title: 'CRUD Operations in FHIR R5'
slug: crud-operations-in-fhir-r5
description: 'FHIR là một tiêu chuẩn RESTful, áp dụng các nguyên tắc kiến trúc REST cho dữ liệu y tế. Mỗi tài nguyên FHIR (như Patient, Observation, Medication) có một URL duy nhất và có thể được thao tác thông qua các phương thức…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 1
section_title: 'Phần 4: Search & CRUD trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
FHIR là một tiêu chuẩn RESTful, áp dụng các nguyên tắc kiến trúc REST cho dữ liệu y tế. Mỗi tài nguyên FHIR (như Patient, Observation, Medication) có một URL duy nhất và có thể được thao tác thông qua các phương thức HTTP chuẩn.

Trước khi đi sâu vào các thao tác CRUD, hãy nhớ mẫu URL cơ bản trong FHIR:

```
[base]/[resourceType]/[id]
```

Ví dụ:

```
http://example.org/fhir/Patient/123
```

Bây giờ, hãy khám phá cách thực hiện các thao tác CRUD trong FHIR R5.

### CREATE: Tạo tài nguyên mới

#### Phương thức POST cơ bản

Để tạo một tài nguyên mới, bạn sử dụng phương thức HTTP POST với nội dung là tài nguyên FHIR ở định dạng JSON hoặc XML:

```http
POST http://example.org/fhir/Patient
Content-Type: application/fhir+json

{
  "resourceType": "Patient",
  "name": [
    {
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }
  ],
  "gender": "male",
  "birthDate": "1970-01-01",
  "address": [
    {
      "line": ["123 Đường Lê Lợi"],
      "city": "Hà Nội",
      "country": "VN"
    }
  ]
}
```

Khi thành công, máy chủ sẽ trả về mã HTTP 201 Created và header Location chứa URL đến tài nguyên vừa tạo:

```
HTTP/1.1 201 Created
Location: http://example.org/fhir/Patient/456
ETag: W/"1"
Last-Modified: 2023-03-20T15:30:00.000Z
```

#### Conditional Create

FHIR R5 hỗ trợ "conditional create" - chỉ tạo tài nguyên nếu nó chưa tồn tại. Điều này giúp tránh tạo các bản sao không cần thiết:

```http
POST http://example.org/fhir/Patient?identifier=https://example.org/fhir/identifier/mrn|123456
Content-Type: application/fhir+json

{
  "resourceType": "Patient",
  "identifier": [
    {
      "system": "https://example.org/fhir/identifier/mrn",
      "value": "123456"
    }
  ],
  "name": [
    {
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }
  ]
}
```

Trong trường hợp này:

* Nếu không tìm thấy bệnh nhân với MRN là 123456, máy chủ sẽ tạo mới và trả về 201 Created
* Nếu đã tồn tại, máy chủ sẽ trả về 200 OK và không tạo tài nguyên mới

#### Tạo nhiều tài nguyên cùng lúc

Để tạo nhiều tài nguyên đồng thời, bạn có thể sử dụng Bundle với type là "transaction":

```http
POST http://example.org/fhir
Content-Type: application/fhir+json

{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "name": [
          {
            "family": "Trần",
            "given": ["Thị", "B"]
          }
        ]
      },
      "request": {
        "method": "POST",
        "url": "Patient"
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8867-4",
              "display": "Heart rate"
            }
          ]
        },
        "valueQuantity": {
          "value": 80,
          "unit": "beats/minute"
        }
      },
      "request": {
        "method": "POST",
        "url": "Observation"
      }
    }
  ]
}
```

### READ: Đọc tài nguyên

#### GET Tài nguyên đơn

Để đọc một tài nguyên, bạn sử dụng phương thức HTTP GET với URL chứa loại tài nguyên và ID:

```http
GET http://example.org/fhir/Patient/456
```

Máy chủ sẽ trả về tài nguyên ở định dạng được yêu cầu (mặc định là JSON trong FHIR R5):

```http
HTTP/1.1 200 OK
Content-Type: application/fhir+json
ETag: W/"1"
Last-Modified: 2023-03-20T15:30:00.000Z

{
  "resourceType": "Patient",
  "id": "456",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2023-03-20T15:30:00.000Z"
  },
  "name": [
    {
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }
  ],
  "gender": "male",
  "birthDate": "1970-01-01"
}
```

#### Đọc tài nguyên với \_format

Bạn có thể chỉ định định dạng phản hồi bằng tham số `_format`:

```http
GET http://example.org/fhir/Patient/456?_format=xml
```

#### Đọc phiên bản cụ thể

Để đọc một phiên bản cụ thể của tài nguyên, thêm `_history/[versionId]`:

```http
GET http://example.org/fhir/Patient/456/_history/2
```

Điều này sẽ trả về phiên bản 2 của tài nguyên Patient/456, ngay cả khi đã có các phiên bản mới hơn.

#### Conditional Read

FHIR cũng hỗ trợ "conditional read" - đọc tài nguyên dựa trên các điều kiện thay vì ID:

```http
GET http://example.org/fhir/Patient?identifier=https://example.org/fhir/identifier/mrn|123456
```

Nếu chỉ có một tài nguyên khớp, máy chủ sẽ trả về tài nguyên đó. Nếu có nhiều kết quả, bạn sẽ nhận được 200 OK với Bundle chứa các kết quả.

### UPDATE: Cập nhật tài nguyên

#### PUT: Cập nhật hoàn toàn

Phương thức PUT được sử dụng để thay thế hoàn toàn một tài nguyên hiện có:

```http
PUT http://example.org/fhir/Patient/456
Content-Type: application/fhir+json
If-Match: W/"1"

{
  "resourceType": "Patient",
  "id": "456",
  "name": [
    {
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }
  ],
  "gender": "male",
  "birthDate": "1970-01-01",
  "telecom": [
    {
      "system": "phone",
      "value": "+84123456789",
      "use": "mobile"
    }
  ]
}
```

Lưu ý việc sử dụng header `If-Match` với ETag để tránh cập nhật đồng thời (concurrent updates). Máy chủ sẽ trả về:

```http
HTTP/1.1 200 OK
ETag: W/"2"
Last-Modified: 2023-03-21T10:15:00.000Z
```

#### PATCH: Cập nhật một phần

FHIR R5 hỗ trợ đầy đủ phương thức PATCH để cập nhật một phần tài nguyên. Có hai định dạng chính:

**1. JSON Patch**

```http
PATCH http://example.org/fhir/Patient/456
Content-Type: application/json-patch+json
If-Match: W/"2"

[
  { "op": "replace", "path": "/telecom/0/value", "value": "+84987654321" },
  { "op": "add", "path": "/active", "value": true }
]
```

**2. FHIRPath Patch (Mới trong R5)**

```http
PATCH http://example.org/fhir/Patient/456
Content-Type: application/fhir-patch+json
If-Match: W/"2"

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "operation",
      "part": [
        {
          "name": "type",
          "valueString": "replace"
        },
        {
          "name": "path",
          "valueString": "Patient.telecom.where(system='phone').value"
        },
        {
          "name": "value",
          "valueString": "+84987654321"
        }
      ]
    }
  ]
}
```

FHIRPath Patch mới trong R5 mạnh mẽ hơn, cho phép các biểu thức phức tạp.

#### Conditional Update

Tương tự như conditional create, FHIR hỗ trợ conditional update:

```http
PUT http://example.org/fhir/Patient?identifier=https://example.org/fhir/identifier/mrn|123456
Content-Type: application/fhir+json

{
  "resourceType": "Patient",
  "identifier": [
    {
      "system": "https://example.org/fhir/identifier/mrn",
      "value": "123456"
    }
  ],
  "name": [
    {
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }
  ],
  "gender": "male",
  "active": true
}
```

* Nếu tìm thấy một tài nguyên khớp, nó sẽ được cập nhật
* Nếu không tìm thấy, một tài nguyên mới sẽ được tạo (tương tự upsert)
* Nếu tìm thấy nhiều tài nguyên khớp, máy chủ sẽ trả về lỗi 412 Precondition Failed

### DELETE: Xóa tài nguyên

#### Xóa cơ bản

Để xóa một tài nguyên, sử dụng phương thức HTTP DELETE:

```http
DELETE http://example.org/fhir/Patient/456
```

Máy chủ sẽ trả về:

```http
HTTP/1.1 204 No Content
```

Lưu ý rằng trong FHIR, "xóa" thường chỉ đánh dấu tài nguyên là không hoạt động, không thực sự xóa nó khỏi hệ thống. Điều này phù hợp với các yêu cầu pháp lý về lưu trữ hồ sơ y tế.

#### Conditional Delete

Bạn có thể xóa các tài nguyên dựa trên điều kiện:

```http
DELETE http://example.org/fhir/Observation?status=entered-in-error
```

Để tránh xóa quá nhiều tài nguyên do lỗi, FHIR có cơ chế bảo vệ:

```http
DELETE http://example.org/fhir/Observation?status=entered-in-error&_count=100
```

Ở đây, chỉ tối đa 100 tài nguyên sẽ bị xóa.

### Versioning, History và \_history Parameter

#### Versioning trong FHIR

FHIR lưu trữ lịch sử các phiên bản của mỗi tài nguyên. Mỗi khi tài nguyên được cập nhật, một phiên bản mới được tạo ra. Thông tin phiên bản được lưu trong phần tử `meta`:

```json
"meta": {
  "versionId": "3",
  "lastUpdated": "2023-03-22T09:45:00.000Z"
}
```

#### Truy cập History của tài nguyên

Để xem lịch sử của một tài nguyên:

```http
GET http://example.org/fhir/Patient/456/_history
```

Phản hồi sẽ là một Bundle chứa tất cả các phiên bản của tài nguyên:

```json
{
  "resourceType": "Bundle",
  "type": "history",
  "total": 3,
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "id": "456",
        "meta": {
          "versionId": "3",
          "lastUpdated": "2023-03-22T09:45:00.000Z"
        },
        // Phiên bản mới nhất
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "id": "456",
        "meta": {
          "versionId": "2",
          "lastUpdated": "2023-03-21T10:15:00.000Z"
        },
        // Phiên bản thứ hai
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "id": "456",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2023-03-20T15:30:00.000Z"
        },
        // Phiên bản đầu tiên
      }
    }
  ]
}
```

#### Lọc History

Bạn có thể lọc lịch sử bằng các tham số:

```http
GET http://example.org/fhir/Patient/456/_history?_since=2023-03-21T00:00:00Z
```

Truy vấn này chỉ trả về các phiên bản được tạo từ ngày 21/03/2023.

#### History toàn bộ hệ thống

FHIR cũng cho phép truy cập lịch sử của tất cả tài nguyên trong hệ thống:

```http
GET http://example.org/fhir/_history
```

Hoặc lịch sử của tất cả tài nguyên của một loại cụ thể:

```http
GET http://example.org/fhir/Patient/_history
```

#### Các tham số History

Một số tham số hữu ích cho việc truy vấn lịch sử:

* `_since`: Chỉ trả về các phiên bản sau một thời điểm
* `_count`: Giới hạn số lượng kết quả trả về
* `_at`: Tìm các phiên bản tại một thời điểm cụ thể (R5)
* `_list`: Chỉ trả về các tài nguyên trong một danh sách cụ thể

```http
GET http://example.org/fhir/Patient/_history?_since=2023-01-01T00:00:00Z&_count=100
```

### Ví dụ thực tế: Quy trình CRUD hoàn chỉnh

Hãy xem một ví dụ thực tế về quy trình CRUD hoàn chỉnh cho một bệnh nhân:

#### 1. Tạo bệnh nhân mới

```http
POST http://example.org/fhir/Patient
Content-Type: application/fhir+json

{
  "resourceType": "Patient",
  "identifier": [
    {
      "system": "https://example.org/fhir/identifier/mrn",
      "value": "123456"
    }
  ],
  "name": [
    {
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }
  ],
  "gender": "male",
  "birthDate": "1970-01-01",
  "address": [
    {
      "line": ["123 Đường Lê Lợi"],
      "city": "Hà Nội",
      "country": "VN"
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "+84123456789",
      "use": "mobile"
    }
  ]
}
```

**Phản hồi:**

```http
HTTP/1.1 201 Created
Location: http://example.org/fhir/Patient/456
ETag: W/"1"
Last-Modified: 2023-03-20T15:30:00.000Z
```

#### 2. Đọc thông tin bệnh nhân

```http
GET http://example.org/fhir/Patient/456
```

#### 3. Cập nhật địa chỉ và số điện thoại

```http
PATCH http://example.org/fhir/Patient/456
Content-Type: application/json-patch+json
If-Match: W/"1"

[
  { 
    "op": "replace", 
    "path": "/address/0/line/0", 
    "value": "456 Đường Nguyễn Huệ" 
  },
  { 
    "op": "replace", 
    "path": "/address/0/city", 
    "value": "Hồ Chí Minh" 
  },
  { 
    "op": "replace", 
    "path": "/telecom/0/value", 
    "value": "+84987654321" 
  },
  {
    "op": "add",
    "path": "/telecom/-",
    "value": {
      "system": "email",
      "value": "nguyenvana@example.com",
      "use": "work"
    }
  }
]
```

**Phản hồi:**

```http
HTTP/1.1 200 OK
ETag: W/"2"
Last-Modified: 2023-03-21T10:15:00.000Z
```

#### 4. Xem lịch sử bệnh nhân

```http
GET http://example.org/fhir/Patient/456/_history
```

#### 5. Xóa bệnh nhân

```http
DELETE http://example.org/fhir/Patient/456
```

**Phản hồi:**

```http
HTTP/1.1 204 No Content
```

### Các tính năng CRUD nâng cao trong R5

FHIR R5 đã giới thiệu một số tính năng CRUD nâng cao:

#### 1. Patch với sâu hơn

R5 cải thiện đáng kể khả năng PATCH với FHIRPath, cho phép các biểu thức phức tạp:

```http
PATCH http://example.org/fhir/Patient/456
Content-Type: application/fhir-patch+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "operation",
      "part": [
        {
          "name": "type",
          "valueString": "replace"
        },
        {
          "name": "path",
          "valueString": "Patient.telecom.where(system='phone' and use='mobile').value"
        },
        {
          "name": "value",
          "valueString": "+84987654321"
        }
      ]
    }
  ]
}
```

#### 2. Các bản cập nhật có điều kiện nâng cao

R5 mở rộng khả năng cập nhật có điều kiện với nhiều tiêu chí phức tạp hơn.

#### 3. \_purge Operation

R5 giới thiệu operation `_purge` để hoàn toàn xóa một tài nguyên khi được phép:

```http
DELETE http://example.org/fhir/Patient/456/$purge
```

Lưu ý rằng đây là một thao tác nguy hiểm và thường chỉ được thực hiện bởi người dùng có quyền đặc biệt.

#### 4. \_cascade Parameter cho DELETE

R5 giới thiệu tham số `_cascade` cho DELETE để kiểm soát cách xử lý các tài nguyên liên quan:

```http
DELETE http://example.org/fhir/Patient/456?_cascade=delete
```

Các tùy chọn bao gồm:

* `none`: Chỉ xóa tài nguyên chính (mặc định)
* `delete`: Xóa tài nguyên chính và các tài nguyên trực tiếp phụ thuộc
* `resource`: Xóa tài nguyên, giữ nguyên các tài nguyên liên quan

### Kết luận

CRUD Operations trong FHIR R5 cung cấp một bộ công cụ mạnh mẽ và linh hoạt để tương tác với dữ liệu y tế. Từ các thao tác cơ bản đến các tính năng nâng cao như conditional updates, PATCH phức tạp và quản lý phiên bản, FHIR R5 đã đáp ứng các yêu cầu khắt khe của các hệ thống y tế hiện đại.

Khi triển khai FHIR, việc nắm vững các thao tác CRUD này là nền tảng để xây dựng các ứng dụng y tế hiệu quả, an toàn và có thể mở rộng.

### Tài liệu tham khảo

1. [HL7 FHIR R5 - REST API](https://hl7.org/fhir/R5/http.html)
2. [FHIR R5 - Resource Versioning](https://hl7.org/fhir/R5/versioning.html)
3. [FHIR R5 - FHIRPath Patch](https://hl7.org/fhir/R5/fhirpatch.html)
4. [FHIR R5 - History Operation](https://hl7.org/fhir/R5/http.html#history)
5. [FHIR R5 - Conditional Operations](https://hl7.org/fhir/R5/http.html#conditional)
