---
id: 61e05786-f7d6-4b7f-8ba4-90d6cd1f8b6d
title: 'Operations in FHIR R5'
slug: operations-in-fhir-r5
description: 'Operations trong FHIR là các chức năng đặc biệt vượt ra ngoài khuôn khổ của các thao tác CRUD cơ bản (Create, Read, Update, Delete). Chúng được thiết kế để thực hiện các hoạt động phức tạp hơn như kiểm tra, biến đổi…'
duration_minutes: 16
is_free: true
video_url: null
sort_order: 4
section_title: 'Phần 4: Search & CRUD trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Operations trong FHIR là các chức năng đặc biệt vượt ra ngoài khuôn khổ của các thao tác CRUD cơ bản (Create, Read, Update, Delete). Chúng được thiết kế để thực hiện các hoạt động phức tạp hơn như kiểm tra, biến đổi, tìm kiếm và xử lý dữ liệu.

Operations được định nghĩa bằng định danh bắt đầu bằng ký tự `$` và có thể được áp dụng ở bốn cấp độ:

1.  **Cấp độ hệ thống**: Áp dụng cho toàn bộ hệ thống FHIR

    ```
    POST [base]/$operation
    ```
2.  **Cấp độ loại tài nguyên**: Áp dụng cho một loại tài nguyên cụ thể

    ```
    POST [base]/[resourceType]/$operation
    ```
3.  **Cấp độ tài nguyên cá nhân**: Áp dụng cho một tài nguyên cụ thể

    ```
    POST [base]/[resourceType]/[id]/$operation
    ```
4.  **Cấp độ phiên bản tài nguyên**: Áp dụng cho một phiên bản cụ thể của tài nguyên

    ```
    POST [base]/[resourceType]/[id]/_history/[vid]/$operation
    ```

Operations có thể được gọi bằng cả phương thức GET và POST, nhưng POST thường được ưu tiên cho các operations phức tạp hoặc có nhiều tham số.

### Standard Operations: Các Operations tiêu chuẩn

FHIR định nghĩa một bộ operations tiêu chuẩn mà tất cả các máy chủ FHIR có thể hỗ trợ. Hãy khám phá một số operations quan trọng nhất:

#### $everything

Operation `$everything` trả về tất cả thông tin có sẵn về một tài nguyên cụ thể, bao gồm cả các tài nguyên liên quan. Nó đặc biệt hữu ích cho việc truy xuất hồ sơ bệnh án đầy đủ của bệnh nhân.

```
GET [base]/Patient/123/$everything
```

Hoặc với tham số:

```http
POST [base]/Patient/123/$everything
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "start",
      "valueDate": "2023-01-01"
    },
    {
      "name": "end",
      "valueDate": "2023-12-31"
    }
  ]
}
```

Phản hồi sẽ là một Bundle chứa tài nguyên chính và tất cả các tài nguyên liên quan:

```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "name": [{"family": "Nguyễn", "given": ["Văn", "A"]}]
      }
    },
    {
      "resource": {
        "resourceType": "Encounter",
        "id": "456",
        "subject": {"reference": "Patient/123"}
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "789",
        "subject": {"reference": "Patient/123"}
      }
    }
  ]
}
```

#### $validate

Operation `$validate` kiểm tra xem một tài nguyên FHIR có hợp lệ không. Điều này bao gồm việc kiểm tra cú pháp, ràng buộc và tuân thủ các profiles.

```http
POST [base]/Patient/$validate
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "resource",
      "resource": {
        "resourceType": "Patient",
        "name": [{"family": "Nguyễn", "given": ["Văn", "A"]}],
        "gender": "male",
        "birthDate": "1970-01-01"
      }
    },
    {
      "name": "profile",
      "valueUri": "http://example.org/fhir/StructureDefinition/VNPatient"
    }
  ]
}
```

Phản hồi sẽ là một OperationOutcome chỉ ra kết quả của việc validation:

```json
{
  "resourceType": "OperationOutcome",
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "diagnostics": "All OK"
    }
  ]
}
```

#### $expand

Operation `$expand` mở rộng một ValueSet để trả về danh sách đầy đủ các mã. Điều này rất hữu ích cho việc xây dựng các dropdown hoặc danh sách chọn trong ứng dụng.

```http
POST [base]/ValueSet/$expand
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "valueSet",
      "resource": {
        "resourceType": "ValueSet",
        "url": "http://example.org/fhir/ValueSet/blood-groups",
        "compose": {
          "include": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0116"
            }
          ]
        }
      }
    }
  ]
}
```

Phản hồi sẽ là một ValueSet đã được mở rộng:

```json
{
  "resourceType": "ValueSet",
  "url": "http://example.org/fhir/ValueSet/blood-groups",
  "expansion": {
    "timestamp": "2023-03-15T12:00:00Z",
    "contains": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0116",
        "code": "A",
        "display": "A"
      },
      {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0116",
        "code": "B",
        "display": "B"
      },
      {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0116",
        "code": "AB",
        "display": "AB"
      },
      {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0116",
        "code": "O",
        "display": "O"
      }
    ]
  }
}
```

#### $meta

Operation `$meta` cho phép quản lý metadata của tài nguyên, như thêm hoặc xóa tags, security labels, và profiles:

```http
POST [base]/Patient/123/$meta-add
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "meta",
      "valueMeta": {
        "tag": [
          {
            "system": "http://example.org/fhir/tags",
            "code": "critical",
            "display": "Critical Patient"
          }
        ],
        "profile": [
          "http://example.org/fhir/StructureDefinition/VNPatient"
        ]
      }
    }
  ]
}
```

#### $document

Operation `$document` tạo một Bundle loại document từ một Composition:

```http
POST [base]/Composition/123/$document
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "persist",
      "valueBoolean": true
    }
  ]
}
```

### New R5 Operations: Các Operations mới trong R5

FHIR R5 đã giới thiệu một số operations mới đáng chú ý:

#### $graph-definition

Operation `$graph-definition` là một trong những tính năng mới trong R5. Nó cho phép truy xuất một đồ thị tài nguyên dựa trên định nghĩa đồ thị.

```http
POST [base]/$graph-definition
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "graph",
      "valueUri": "http://example.org/fhir/GraphDefinition/patient-graph"
    },
    {
      "name": "start",
      "valueUri": "Patient/123"
    }
  ]
}
```

#### $stats

Operation `$stats` (mới trong R5) cung cấp thống kê nhanh về các tài nguyên:

```http
GET [base]/Patient/$stats?_stats=count,min-birthdate,max-birthdate
```

#### $subscription-status

Operation `$subscription-status` (cải tiến trong R5) cho phép kiểm tra trạng thái của các đăng ký:

```http
GET [base]/Subscription/123/$status
```

#### $questionnaire

Operations liên quan đến Questionnaire đã được cải tiến đáng kể trong R5:

* `$populate`: Điền trước một QuestionnaireResponse
* `$extract`: Trích xuất dữ liệu từ một QuestionnaireResponse
* `$next-question`: Xác định câu hỏi tiếp theo trong một Questionnaire thích ứng

#### $purge

Operation `$purge` cho phép xóa hoàn toàn một tài nguyên, bao gồm cả lịch sử của nó:

```http
POST [base]/Patient/123/$purge
```

#### $transform

Operation mới `$transform` chuyển đổi dữ liệu từ định dạng này sang định dạng khác:

```http
POST [base]/$transform?source=http://example.org/fhir/StructureMap/CDA-to-FHIR
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "content",
      "valueString": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>..."
    }
  ]
}
```

#### $diff

Operation mới `$diff` tính toán sự khác biệt giữa hai tài nguyên:

```http
POST [base]/$diff
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "left",
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "name": [{"family": "Nguyễn", "given": ["Văn", "A"]}]
      }
    },
    {
      "name": "right",
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "name": [{"family": "Nguyễn", "given": ["Văn", "B"]}]
      }
    }
  ]
}
```

### Parameters Resource: Tài nguyên Parameters

Tài nguyên Parameters đóng vai trò quan trọng trong FHIR Operations. Nó được sử dụng để truyền tham số cho và từ operations.

#### Cấu trúc Parameters

Một tài nguyên Parameters có cấu trúc đơn giản:

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "parameterName1",
      "value[x]": [value]
    },
    {
      "name": "parameterName2",
      "resource": {
        "resourceType": "Patient",
        ...
      }
    },
    {
      "name": "parameterName3",
      "part": [
        {
          "name": "subParameterName1",
          "value[x]": [value]
        }
      ]
    }
  ]
}
```

#### Các kiểu dữ liệu tham số

Parameters hỗ trợ nhiều kiểu dữ liệu:

* **value\[x]**: Các kiểu dữ liệu đơn giản (valueString, valueInteger, valueBoolean, v.v.)
* **resource**: Tài nguyên FHIR nhúng
* **part**: Tham số con, cho phép cấu trúc phân cấp

#### Ví dụ Parameters phức tạp

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "patient",
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "name": [{"family": "Nguyễn", "given": ["Văn", "A"]}]
      }
    },
    {
      "name": "includeFamily",
      "valueBoolean": true
    },
    {
      "name": "dateRange",
      "part": [
        {
          "name": "start",
          "valueDate": "2023-01-01"
        },
        {
          "name": "end",
          "valueDate": "2023-12-31"
        }
      ]
    }
  ]
}
```

#### Chuyển đổi giữa GET và POST

Một điểm quan trọng là operations có thể được gọi bằng cả GET và POST. Khi sử dụng GET, tham số được chuyển thành query parameters:

```
GET [base]/ValueSet/$expand?url=http://example.org/fhir/ValueSet/blood-groups
```

tương đương với:

```http
POST [base]/ValueSet/$expand
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueUri": "http://example.org/fhir/ValueSet/blood-groups"
    }
  ]
}
```

### Custom Operations: Operations tùy chỉnh

FHIR cho phép bạn định nghĩa các operations tùy chỉnh để đáp ứng nhu cầu cụ thể của tổ chức. Operations tùy chỉnh được định nghĩa bằng tài nguyên OperationDefinition.

#### Tạo một OperationDefinition

```json
{
  "resourceType": "OperationDefinition",
  "id": "patient-merge",
  "url": "http://example.org/fhir/OperationDefinition/patient-merge",
  "name": "PatientMerge",
  "status": "active",
  "kind": "operation",
  "code": "merge",
  "resource": ["Patient"],
  "system": false,
  "type": false,
  "instance": true,
  "parameter": [
    {
      "name": "source",
      "use": "in",
      "min": 1,
      "max": "1",
      "type": "Reference",
      "targetProfile": ["http://hl7.org/fhir/StructureDefinition/Patient"]
    },
    {
      "name": "result",
      "use": "out",
      "min": 1,
      "max": "1",
      "type": "Reference",
      "targetProfile": ["http://hl7.org/fhir/StructureDefinition/Patient"]
    }
  ]
}
```

#### Triển khai Operation tùy chỉnh

Sau khi định nghĩa, bạn cần triển khai logic xử lý trên máy chủ FHIR. Đây là một ví dụ về cách gọi operation tùy chỉnh:

```http
POST [base]/Patient/123/$merge
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "source",
      "valueReference": {
        "reference": "Patient/456"
      }
    }
  ]
}
```

#### Ví dụ về Operations tùy chỉnh phổ biến

Một số operations tùy chỉnh phổ biến trong các triển khai FHIR:

1. **$merge**: Hợp nhất dữ liệu từ hai hoặc nhiều tài nguyên
2. **$convert**: Chuyển đổi dữ liệu giữa các định dạng khác nhau
3. **$bulk-data-export**: Xuất dữ liệu hàng loạt
4. **$anonymize**: Ẩn danh hóa dữ liệu bệnh nhân
5. **$find-matches**: Tìm kiếm các trùng lặp có thể có
6. **$calculate-risk**: Tính toán các điểm rủi ro lâm sàng

#### Thực tiễn tốt cho Operations tùy chỉnh

Khi thiết kế operations tùy chỉnh:

1. **Sử dụng các thao tác RESTful tiêu chuẩn nếu có thể**: Chỉ tạo operations cho những gì không thể thực hiện bằng CRUD.
2. **Đặt tên rõ ràng và mô tả đầy đủ**: Đảm bảo người dùng hiểu chính xác mục đích của operation.
3. **Xác định cấp độ phù hợp**: Quyết định xem operation nên hoạt động ở cấp độ hệ thống, loại tài nguyên, hay tài nguyên cá nhân.
4. **Thiết kế tham số cẩn thận**: Xác định rõ tham số bắt buộc và tùy chọn.
5. **Xử lý lỗi nhất quán**: Trả về OperationOutcome chi tiết khi có lỗi.

### Async Operations: Operations bất đồng bộ

Đối với các operations dài hạn, FHIR R5 nâng cao hỗ trợ cho việc thực hiện bất đồng bộ.

#### Yêu cầu Async Operation

Để yêu cầu thực hiện bất đồng bộ, thêm header `Prefer: respond-async`:

```http
POST [base]/Patient/$everything
Prefer: respond-async
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "start",
      "valueDate": "2020-01-01"
    },
    {
      "name": "end",
      "valueDate": "2023-12-31"
    }
  ]
}
```

#### Phản hồi ban đầu

Máy chủ sẽ trả về mã trạng thái 202 Accepted và một header Location chỉ đến một endpoint giám sát:

```http
HTTP/1.1 202 Accepted
Content-Length: 0
Content-Type: application/fhir+json
Date: Wed, 15 Mar 2023 15:00:00 GMT
Location: http://example.org/fhir/_operations/status/abc123
```

#### Kiểm tra trạng thái

Khách hàng có thể kiểm tra trạng thái bằng cách thực hiện GET đến URL được cung cấp:

```http
GET http://example.org/fhir/_operations/status/abc123
```

#### Phản hồi trạng thái

Nếu chưa hoàn thành:

```http
HTTP/1.1 202 Accepted
Content-Type: application/json
X-Progress: 45%
Retry-After: 120

{
  "resourceType": "OperationOutcome",
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "diagnostics": "Processing: 45% complete"
    }
  ]
}
```

Khi hoàn thành:

```http
HTTP/1.1 200 OK
Content-Type: application/fhir+json

{
  "resourceType": "Bundle",
  "type": "searchset",
  "entry": [
    ...
  ]
}
```

#### Cải tiến Async Operations trong R5

FHIR R5 đã cải thiện đáng kể hỗ trợ cho Async Operations:

1. **Tiêu chuẩn hóa giao thức**: Giao thức Async Operations được tiêu chuẩn hóa rõ ràng hơn.
2. **Bulk Data Export**: Cải tiến hỗ trợ cho xuất dữ liệu hàng loạt bất đồng bộ.
3. **Cơ chế phản hồi webhook**: Cho phép thông báo chủ động khi hoàn thành.
4. **Báo cáo tiến độ chi tiết hơn**: Phản hồi cung cấp thông tin chi tiết hơn về tiến độ.
5. **Xử lý lỗi tốt hơn**: Cơ chế báo cáo lỗi cải tiến cho các thao tác dài hạn.

### Ví dụ thực tế: Kết hợp Operations

Hãy xem xét một kịch bản thực tế kết hợp nhiều operations:

#### Kịch bản: Khởi tạo hồ sơ y tế điện tử mới

1.  **Bước 1**: Tìm kiếm bệnh nhân hiện có để tránh tạo bản sao

    ```http
    POST [base]/Patient/$match
    Content-Type: application/fhir+json

    {
      "resourceType": "Parameters",
      "parameter": [
        {
          "name": "resource",
          "resource": {
            "resourceType": "Patient",
            "identifier": [
              {
                "system": "http://example.org/fhir/identifier/national-id",
                "value": "123456789012"
              }
            ],
            "name": [{"family": "Nguyễn", "given": ["Văn", "A"]}],
            "birthDate": "1970-01-01"
          }
        },
        {
          "name": "onlyCertainMatches",
          "valueBoolean": true
        }
      ]
    }
    ```
2.  **Bước 2**: Nếu không tìm thấy kết quả khớp, tạo bệnh nhân mới và xác nhận hợp lệ

    ```http
    POST [base]/Patient/$validate
    Content-Type: application/fhir+json

    {
      "resourceType": "Parameters",
      "parameter": [
        {
          "name": "resource",
          "resource": {
            "resourceType": "Patient",
            "identifier": [
              {
                "system": "http://example.org/fhir/identifier/national-id",
                "value": "123456789012"
              }
            ],
            "name": [{"family": "Nguyễn", "given": ["Văn", "A"]}],
            "birthDate": "1970-01-01",
            "gender": "male",
            "address": [
              {
                "line": ["123 Đường Lê Lợi"],
                "city": "Hà Nội",
                "country": "VN"
              }
            ]
          }
        },
        {
          "name": "profile",
          "valueUri": "http://example.org/fhir/StructureDefinition/VNPatient"
        }
      ]
    }
    ```
3.  **Bước 3**: Sau khi xác nhận hợp lệ, thực hiện tạo bệnh nhân và tạo lịch hẹn

    ```http
    POST [base]
    Content-Type: application/fhir+json

    {
      "resourceType": "Bundle",
      "type": "transaction",
      "entry": [
        {
          "fullUrl": "urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
          "resource": {
            "resourceType": "Patient",
            "identifier": [
              {
                "system": "http://example.org/fhir/identifier/national-id",
                "value": "123456789012"
              }
            ],
            "name": [{"family": "Nguyễn", "given": ["Văn", "A"]}],
            "birthDate": "1970-01-01",
            "gender": "male",
            "address": [
              {
                "line": ["123 Đường Lê Lợi"],
                "city": "Hà Nội",
                "country": "VN"
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
            "resourceType": "Appointment",
            "status": "booked",
            "participant": [
              {
                "actor": {
                  "reference": "urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a"
                },
                "status": "accepted"
              }
            ],
            "start": "2023-04-01T09:00:00Z",
            "end": "2023-04-01T09:30:00Z"
          },
          "request": {
            "method": "POST",
            "url": "Appointment"
          }
        }
      ]
    }
    ```
4.  **Bước 4**: Lấy dữ liệu toàn diện về bệnh nhân để hiển thị

    ```http
    GET [base]/Patient/123/$everything?start=2023-01-01
    ```

### Hiệu suất và bảo mật

#### Vấn đề hiệu suất với Operations

Operations có thể có tác động đến hiệu suất hệ thống, đặc biệt là các operations phức tạp như `$everything` hoặc `$expand`. Một số chiến lược để cải thiện hiệu suất:

1. **Sử dụng các tham số phù hợp**: Giới hạn phạm vi dữ liệu bằng các tham số như `start`, `end`, `_count`.
2. **Phân trang kết quả**: Thực hiện phân trang cho các kết quả lớn.
3. **Sử dụng Async Operations**: Đối với các operations dài hạn, sử dụng cơ chế bất đồng bộ.
4. **Bộ nhớ đệm**: Lưu trữ kết quả của các operations tốn kém như `$expand` trong bộ nhớ đệm.

#### Bảo mật và kiểm soát truy cập

Operations thường cần chính sách bảo mật riêng:

1. **Kiểm soát truy cập dựa trên operation**: Xác định rõ ai có thể thực hiện các operations cụ thể.
2. **Giới hạn phạm vi dữ liệu**: Đảm bảo operations chỉ trả về dữ liệu mà người dùng được phép xem.
3. **Audit logging**: Ghi lại tất cả các cuộc gọi operation để theo dõi.
4. **Xác thực tham số**: Kiểm tra và xác thực tất cả các tham số đầu vào.

### Kết luận

Operations trong FHIR R5 cung cấp các khả năng mạnh mẽ vượt ra ngoài các thao tác CRUD cơ bản, cho phép thực hiện các chức năng phức tạp trong các hệ thống y tế. Từ các operations tiêu chuẩn như `$everything` và `$validate` đến các operations tùy chỉnh riêng, FHIR cung cấp một khuôn khổ linh hoạt để đáp ứng nhu cầu đa dạng của các tổ chức y tế.

FHIR R5 đã mở rộng đáng kể các khả năng này, giới thiệu các operations mới và cải tiến cho các operations hiện có. Tầm quan trọng của Async Operations trong xử lý các thao tác dài hạn cũng đã được nâng cao,
