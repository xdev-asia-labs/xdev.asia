---
id: 712e065a-8610-492b-bea1-6b79b74450a2
title: 'Bundles & Transactions in FHIR R5'
slug: bundles-and-transactions-in-fhir-r5
description: 'Bundle là một tài nguyên FHIR đặc biệt được sử dụng để nhóm nhiều tài nguyên thành một đơn vị duy nhất. Nó làm nhiều vai trò khác nhau, từ việc đóng gói kết quả tìm kiếm đến thực hiện nhiều thao tác trong một giao dịch…'
duration_minutes: 40
is_free: true
video_url: null
sort_order: 3
section_title: 'Phần 4: Search & CRUD trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Bundle là một tài nguyên FHIR đặc biệt được sử dụng để nhóm nhiều tài nguyên thành một đơn vị duy nhất. Nó làm nhiều vai trò khác nhau, từ việc đóng gói kết quả tìm kiếm đến thực hiện nhiều thao tác trong một giao dịch duy nhất.

Cấu trúc cơ bản của một Bundle trông như sau:

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "fullUrl": "urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
      "resource": {
        "resourceType": "Patient",
        ...
      },
      "request": {
        "method": "POST",
        "url": "Patient"
      }
    },
    {
      "fullUrl": "urn:uuid:88f151c0-a954-468a-88bd-5ae15c08e059",
      "resource": {
        "resourceType": "Observation",
        ...
      },
      "request": {
        "method": "POST",
        "url": "Observation"
      }
    }
  ]
}
```

### Bundle Types: Các loại Bundle trong FHIR R5

FHIR R5 định nghĩa sáu loại Bundle khác nhau, mỗi loại phục vụ một mục đích cụ thể:

#### 1. transaction

Bundle type `transaction` được sử dụng để thực hiện nhiều thao tác (create, update, delete) trong một giao dịch ACID (Atomicity, Consistency, Isolation, Durability). Nghĩa là, tất cả các thao tác hoặc là thành công cùng nhau, hoặc là thất bại cùng nhau.

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
      },
      "request": {
        "method": "POST",
        "url": "Patient"
      }
    },
    {
      "resource": {
        "resourceType": "Encounter",
        "status": "finished",
        "subject": {
          "reference": "urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a"
        }
      },
      "request": {
        "method": "POST",
        "url": "Encounter"
      }
    }
  ]
}
```

Trong ví dụ này, cả Patient và Encounter sẽ được tạo cùng nhau, hoặc không được tạo nếu có lỗi.

#### 2. batch

Bundle type `batch` tương tự như transaction, nhưng không đảm bảo tính ACID. Mỗi entry trong batch được xử lý độc lập, một số có thể thành công và một số có thể thất bại.

```json
{
  "resourceType": "Bundle",
  "type": "batch",
  "entry": [
    {
      "request": {
        "method": "GET",
        "url": "Patient?name=Smith"
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "name": [{ "family": "Jones", "given": ["Frank"] }]
      },
      "request": {
        "method": "POST",
        "url": "Patient"
      }
    }
  ]
}
```

Batch hữu ích khi bạn cần thực hiện nhiều thao tác không liên quan đến nhau.

#### 3. history

Bundle type `history` chứa lịch sử của một tài nguyên hoặc một nhóm tài nguyên. Đây là định dạng phản hồi khi bạn yêu cầu lịch sử:

```json
{
  "resourceType": "Bundle",
  "type": "history",
  "total": 3,
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "meta": {
          "versionId": "3",
          "lastUpdated": "2023-03-01T12:30:00Z"
        }
      },
      "request": {
        "method": "GET",
        "url": "Patient/123/_history/3"
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "meta": {
          "versionId": "2",
          "lastUpdated": "2023-02-15T10:45:00Z"
        }
      },
      "request": {
        "method": "GET",
        "url": "Patient/123/_history/2"
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2023-02-01T09:00:00Z"
        }
      },
      "request": {
        "method": "GET",
        "url": "Patient/123/_history/1"
      }
    }
  ]
}
```

#### 4. searchset

Bundle type `searchset` chứa kết quả của một truy vấn tìm kiếm:

```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "http://example.org/fhir/Patient?name=Smith"
    }
  ],
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "name": [{ "family": "Smith", "given": ["John"] }]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "id": "456",
        "name": [{ "family": "Smith", "given": ["Jane"] }]
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

#### 5. collection

Bundle type `collection` đơn giản là một tập hợp các tài nguyên không có mối quan hệ cụ thể với nhau. Bundle này thường được sử dụng cho mục đích lưu trữ hoặc truyền dữ liệu:

```json
{
  "resourceType": "Bundle",
  "type": "collection",
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123"
      }
    },
    {
      "resource": {
        "resourceType": "Practitioner",
        "id": "456"
      }
    }
  ]
}
```

#### 6. document

Bundle type `document` biểu diễn một tài liệu y tế hoàn chỉnh như bệnh án, báo cáo xét nghiệm, hoặc tóm tắt xuất viện. Bundle này phải bắt đầu bằng một tài nguyên Composition:

```json
{
  "resourceType": "Bundle",
  "type": "document",
  "identifier": {
    "system": "urn:ietf:rfc:3986",
    "value": "urn:uuid:0c3201bd-1cbf-4d64-b04d-cd9187a4c6e0"
  },
  "timestamp": "2023-03-10T09:43:41+11:00",
  "entry": [
    {
      "fullUrl": "http://example.org/fhir/Composition/1",
      "resource": {
        "resourceType": "Composition",
        "id": "1",
        "status": "final",
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "34133-9",
              "display": "Summarization of episode note"
            }
          ]
        },
        "subject": {
          "reference": "Patient/123"
        },
        "date": "2023-03-10T09:43:41+11:00",
        "author": [
          {
            "reference": "Practitioner/456"
          }
        ],
        "title": "Discharge Summary",
        "section": [
          {
            "title": "Medications",
            "entry": [
              {
                "reference": "MedicationRequest/789"
              }
            ]
          }
        ]
      }
    },
    {
      "fullUrl": "http://example.org/fhir/Patient/123",
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
      }
    },
    {
      "fullUrl": "http://example.org/fhir/Practitioner/456",
      "resource": {
        "resourceType": "Practitioner",
        "id": "456",
        "name": [{ "family": "Trần", "given": ["Thị", "B"] }]
      }
    },
    {
      "fullUrl": "http://example.org/fhir/MedicationRequest/789",
      "resource": {
        "resourceType": "MedicationRequest",
        "id": "789",
        "status": "active",
        "intent": "order",
        "medicationCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "1000048",
              "display": "Paracetamol 500mg tablet"
            }
          ]
        },
        "subject": {
          "reference": "Patient/123"
        }
      }
    }
  ]
}
```

### Xử lý nhiều operations trong một request

#### Transaction và Batch

Cả transaction và batch đều cho phép bạn gửi nhiều thao tác trong một request, nhưng chúng có đặc điểm khác nhau:

| Đặc điểm     | Transaction                                   | Batch                        |
| ------------ | --------------------------------------------- | ---------------------------- |
| Tính ACID    | Có                                            | Không                        |
| Xử lý lỗi    | Tất cả thất bại nếu bất kỳ entry nào thất bại | Mỗi entry được xử lý độc lập |
| References   | Hỗ trợ conditional references trong bundle    | Không hỗ trợ                 |
| Thứ tự xử lý | Xác định                                      | Không xác định               |

#### Request và Response

Để gửi một transaction hoặc batch, bạn POST Bundle tới endpoint gốc của FHIR server:

```http
POST http://example.org/fhir
Content-Type: application/fhir+json

{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [...]
}
```

Phản hồi cũng là một Bundle, có cùng cấu trúc nhưng chứa kết quả của mỗi thao tác:

```json
{
  "resourceType": "Bundle",
  "type": "transaction-response",
  "entry": [
    {
      "response": {
        "status": "201 Created",
        "location": "Patient/123/_history/1",
        "etag": "W/\"1\"",
        "lastModified": "2023-03-10T09:43:41+11:00"
      }
    },
    {
      "response": {
        "status": "201 Created",
        "location": "Encounter/456/_history/1",
        "etag": "W/\"1\"",
        "lastModified": "2023-03-10T09:43:41+11:00"
      }
    }
  ]
}
```

#### Các phương thức HTTP trong Bundle

Trong một Bundle, bạn có thể sử dụng các phương thức HTTP khác nhau:

* **POST**: Tạo tài nguyên mới
* **PUT**: Cập nhật hoặc tạo tài nguyên với ID xác định
* **PATCH**: Cập nhật một phần tài nguyên
* **DELETE**: Xóa tài nguyên
* **GET**: Đọc tài nguyên (chỉ trong batch)
* **HEAD**: Kiểm tra tài nguyên tồn tại (chỉ trong batch)

Ví dụ về một Bundle chứa các phương thức khác nhau:

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "fullUrl": "urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
      "resource": {
        "resourceType": "Patient",
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
      },
      "request": {
        "method": "POST",
        "url": "Patient"
      }
    },
    {
      "request": {
        "method": "DELETE",
        "url": "Patient/789"
      }
    },
    {
      "fullUrl": "http://example.org/fhir/Patient/456",
      "resource": {
        "resourceType": "Patient",
        "id": "456",
        "name": [{ "family": "Trần", "given": ["Thị", "B"] }]
      },
      "request": {
        "method": "PUT",
        "url": "Patient/456"
      }
    }
  ]
}
```

#### Conditional Operations trong Bundle

FHIR cho phép bạn thực hiện các thao tác có điều kiện trong Bundle, sử dụng cùng cú pháp như trong các thao tác FHIR thông thường:

**Conditional Create**

```json
{
  "resource": {
    "resourceType": "Patient",
    "identifier": [
      {
        "system": "http://example.org/fhir/identifier/mrn",
        "value": "12345"
      }
    ],
    "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
  },
  "request": {
    "method": "POST",
    "url": "Patient",
    "ifNoneExist": "identifier=http://example.org/fhir/identifier/mrn|12345"
  }
}
```

**Conditional Update**

```json
{
  "resource": {
    "resourceType": "Patient",
    "id": "123",
    "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
  },
  "request": {
    "method": "PUT",
    "url": "Patient?identifier=http://example.org/fhir/identifier/mrn|12345"
  }
}
```

**Conditional Delete**

```json
{
  "request": {
    "method": "DELETE",
    "url": "Observation?status=entered-in-error&patient=Patient/123"
  }
}
```

### Transaction Processing Order

Trong FHIR transaction, thứ tự xử lý các entry có thể ảnh hưởng đến kết quả. FHIR R5 có một thuật toán cụ thể để xác định thứ tự xử lý:

1. Tất cả các DELETE được xử lý trước
2. Tất cả các POST được xử lý kế tiếp
3. Tất cả các PUT/PATCH được xử lý tiếp theo
4. Tất cả các GET/HEAD được xử lý cuối cùng (chỉ áp dụng cho batch)

Trong mỗi nhóm, thứ tự được quyết định bởi các ràng buộc phụ thuộc giữa các tài nguyên.

#### Ví dụ về thứ tự xử lý

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "request": {
        "method": "DELETE",
        "url": "Patient/123"
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
      },
      "request": {
        "method": "POST",
        "url": "Patient"
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "id": "456",
        "name": [{ "family": "Trần", "given": ["Thị", "B"] }]
      },
      "request": {
        "method": "PUT",
        "url": "Patient/456"
      }
    }
  ]
}
```

Trong ví dụ này:

1. DELETE Patient/123 được xử lý trước
2. POST Patient mới được xử lý tiếp theo
3. PUT Patient/456 được xử lý cuối cùng

### Conditional References trong Transactions

Một trong những tính năng mạnh mẽ nhất của FHIR transactions là khả năng sử dụng conditional references. Điều này cho phép bạn tham chiếu đến các tài nguyên khác trong cùng một Bundle, ngay cả khi chúng chưa tồn tại trên máy chủ.

#### UUID References

Cách phổ biến nhất là sử dụng một UUID cho mỗi tài nguyên trong Bundle, và tham chiếu đến UUID đó:

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "fullUrl": "urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
      "resource": {
        "resourceType": "Patient",
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
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
        "subject": {
          "reference": "urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a"
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

Trong ví dụ này, Observation tham chiếu đến Patient bằng cách sử dụng UUID được chỉ định trong fullUrl của Patient.

#### Conditional References trong R5

FHIR R5 mở rộng khả năng này với conditional references. Thay vì tham chiếu trực tiếp, bạn có thể sử dụng một truy vấn:

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "identifier": [
          {
            "system": "http://example.org/fhir/identifier/mrn",
            "value": "12345"
          }
        ],
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
      },
      "request": {
        "method": "POST",
        "url": "Patient",
        "ifNoneExist": "identifier=http://example.org/fhir/identifier/mrn|12345"
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
        "subject": {
          "reference": "Patient?identifier=http://example.org/fhir/identifier/mrn|12345"
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

Khi máy chủ xử lý transaction này, nó sẽ tự động giải quyết reference "Patient?identifier=..." thành ID thực tế của Patient, dù Patient đó có trong Bundle hay đã tồn tại trên máy chủ.

### Error Handling

Xử lý lỗi khác nhau tùy thuộc vào loại Bundle:

#### Transaction Error Handling

Trong một transaction, nếu bất kỳ entry nào thất bại, toàn bộ transaction sẽ thất bại (tất cả hoặc không có gì). Máy chủ sẽ trả về mã lỗi HTTP (thường là 400 Bad Request) và một OperationOutcome mô tả lỗi.

```json
{
  "resourceType": "OperationOutcome",
  "issue": [
    {
      "severity": "error",
      "code": "processing",
      "diagnostics": "Failed to process entry at index 1: Patient with ID 789 not found"
    }
  ]
}
```

#### Batch Error Handling

Trong một batch, mỗi entry được xử lý độc lập. Nếu một entry thất bại, các entry khác vẫn có thể thành công. Phản hồi sẽ chứa kết quả cho mỗi entry:

```json
{
  "resourceType": "Bundle",
  "type": "batch-response",
  "entry": [
    {
      "response": {
        "status": "201 Created",
        "location": "Patient/123/_history/1"
      }
    },
    {
      "response": {
        "status": "404 Not Found",
        "outcome": {
          "resourceType": "OperationOutcome",
          "issue": [
            {
              "severity": "error",
              "code": "not-found",
              "diagnostics": "Patient with ID 789 not found"
            }
          ]
        }
      }
    },
    {
      "response": {
        "status": "200 OK",
        "location": "Patient/456/_history/2"
      }
    }
  ]
}
```

#### Các lỗi phổ biến trong Bundles

1. **Invalid References**: Tham chiếu đến tài nguyên không tồn tại
2. **Dependency Conflicts**: Xung đột giữa các thao tác phụ thuộc vào nhau
3. **Version Conflicts**: Xung đột phiên bản khi cập nhật tài nguyên
4. **Processing Order Errors**: Lỗi liên quan đến thứ tự xử lý
5. **Validation Errors**: Tài nguyên không tuân thủ các ràng buộc validation

#### Xử lý lỗi trong ứng dụng khách

Khi làm việc với Bundles, ứng dụng khách nên:

1. Luôn kiểm tra mã trạng thái HTTP của phản hồi
2. Kiểm tra từng entry trong phản hồi batch để xác định entry nào thành công và entry nào thất bại
3. Có chiến lược rollback cho các thay đổi cục bộ nếu transaction thất bại
4. Xử lý OperationOutcome để hiểu rõ lỗi và cung cấp thông báo lỗi có ý nghĩa

### Cải tiến trong FHIR R5

FHIR R5 đã giới thiệu một số cải tiến đáng kể cho Bundles và Transactions:

#### 1. Cải thiện Conditional References

R5 mở rộng hỗ trợ cho conditional references, cho phép các tham chiếu phức tạp hơn.

#### 2. Nested Transactions

R5 thêm hỗ trợ cho nested transactions, cho phép bạn nhúng một transaction bên trong một transaction khác.

#### 3. Batch trong Transaction

R5 làm rõ hành vi khi một batch được nhúng trong một transaction.

#### 4. \_cascade Parameter

Khi xóa tài nguyên trong một transaction, R5 thêm tham số `_cascade` để kiểm soát cách xử lý các tài nguyên liên quan.

#### 5. Transaction Profiling

R5 cải thiện khả năng xác định profiles cho transactions, giúp validation chặt chẽ hơn.

### Ví dụ thực tế: Document Creation

Hãy xem một ví dụ thực tế về việc tạo một document lâm sàng bằng transaction:

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "fullUrl": "urn:uuid:945a851d-2c4b-4c05-a7c7-119121a9bd5f",
      "resource": {
        "resourceType": "Composition",
        "status": "final",
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "34133-9",
              "display": "Discharge Summary"
            }
          ]
        },
        "subject": {
          "reference": "urn:uuid:4f28acc1-c0a4-4074-86a3-e3c34489e4a6"
        },
        "date": "2023-03-10T09:43:41+11:00",
        "author": [
          {
            "reference": "urn:uuid:3359a419-5a7e-4d94-b268-0d952c2e3f2b"
          }
        ],
        "title": "Discharge Summary for Nguyễn Văn A",
        "section": [
          {
            "title": "Medications",
            "entry": [
              {
                "reference": "urn:uuid:8c957193-6118-45d1-a074-2b5e9e837e4b"
              }
            ]
          }
        ]
      },
      "request": {
        "method": "POST",
        "url": "Composition"
      }
    },
    {
      "fullUrl": "urn:uuid:4f28acc1-c0a4-4074-86a3-e34c489e4a6",
      "resource": {
        "resourceType": "Patient",
        "identifier": [
          {
            "system": "http://example.org/fhir/identifier/mrn",
            "value": "12345"
          }
        ],
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }],
        "birthDate": "1970-01-01",
        "gender": "male"
      },
      "request": {
        "method": "POST",
        "url": "Patient",
        "ifNoneExist": "identifier=http://example.org/fhir/identifier/mrn|12345"
      }
    },
    {
      "fullUrl": "urn:uuid:3359a419-5a7e-4d94-b268-0d952c2e3f2b",
      "resource": {
        "resourceType": "Practitioner",
        "identifier": [
          {
            "system": "http://example.org/fhir/identifier/prn",
            "value": "54321"
          }
        ],
        "name": [{ "family": "Trần", "given": ["Thị", "B"] }]
      },
      "request": {
        "method": "POST",
        "url": "Practitioner",
        "ifNoneExist": "identifier=http://example.org/fhir/identifier/prn|54321"
      }
    },
    {
      "fullUrl": "urn:uuid:8c957193-6118-45d1-a074-2b5e9e837e4b",
      "resource": {
        "resourceType": "MedicationRequest",
        "status": "active",
        "intent": "order",
        "medicationCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "1000048",
              "display": "Paracetamol 500mg tablet"
            }
          ]
        },
        "subject": {
          "reference": "urn:uuid:4f28acc1-c0a4-4074-86a3-e34c489e4a6"
        },
        "authoredOn": "2023-03-09T14:30:00+11:00",
        "requester": {
          "reference": "urn:uuid:3359a419-5a7e-4d94-b268-0d952c2e3f2b"
        },
        "dosageInstruction": [
          {
            "text": "1 tablet every 6 hours as needed for pain",
            "timing": {
              "repeat": {
                "frequency": 1,
                "period": 6,
                "periodUnit": "h"
              }
            },
            "asNeededBoolean": true,
            "doseAndRate": [
              {
                "doseQuantity": {
                  "value": 1,
                  "unit": "tablet"
                }
              }
            ]
          }
        ]
      },
      "request": {
        "method": "POST",
        "url": "MedicationRequest"
      }
    }
  ]
}
```

## Bundles và Transactions trong FHIR R5: Xử lý nhiều tài nguyên cùng lúc

_FHIR (Fast Healthcare Interoperability Resources) cho phép các hệ thống y tế trao đổi dữ liệu một cách hiệu quả. Một trong những tính năng mạnh mẽ nhất của FHIR là khả năng xử lý nhiều tài nguyên cùng lúc thông qua Bundles và Transactions. Trong bài viết này, chúng ta sẽ khám phá chi tiết về cách sử dụng Bundles và Transactions trong FHIR R5 - phiên bản mới nhất của tiêu chuẩn._

![FHIR Bundle](https://www.hl7.org/fhir/assets/images/fhir-logo-www.png)

### Giới thiệu về Bundle trong FHIR

Bundle là một tài nguyên FHIR đặc biệt được sử dụng để nhóm nhiều tài nguyên thành một đơn vị duy nhất. Nó làm nhiều vai trò khác nhau, từ việc đóng gói kết quả tìm kiếm đến thực hiện nhiều thao tác trong một giao dịch duy nhất.

Cấu trúc cơ bản của một Bundle trông như sau:

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "fullUrl": "urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
      "resource": {
        "resourceType": "Patient",
        ...
      },
      "request": {
        "method": "POST",
        "url": "Patient"
      }
    },
    {
      "fullUrl": "urn:uuid:88f151c0-a954-468a-88bd-5ae15c08e059",
      "resource": {
        "resourceType": "Observation",
        ...
      },
      "request": {
        "method": "POST",
        "url": "Observation"
      }
    }
  ]
}
```

### Bundle Types: Các loại Bundle trong FHIR R5

FHIR R5 định nghĩa sáu loại Bundle khác nhau, mỗi loại phục vụ một mục đích cụ thể:

#### 1. transaction

Bundle type `transaction` được sử dụng để thực hiện nhiều thao tác (create, update, delete) trong một giao dịch ACID (Atomicity, Consistency, Isolation, Durability). Nghĩa là, tất cả các thao tác hoặc là thành công cùng nhau, hoặc là thất bại cùng nhau.

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
      },
      "request": {
        "method": "POST",
        "url": "Patient"
      }
    },
    {
      "resource": {
        "resourceType": "Encounter",
        "status": "finished",
        "subject": {
          "reference": "urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a"
        }
      },
      "request": {
        "method": "POST",
        "url": "Encounter"
      }
    }
  ]
}
```

Trong ví dụ này, cả Patient và Encounter sẽ được tạo cùng nhau, hoặc không được tạo nếu có lỗi.

#### 2. batch

Bundle type `batch` tương tự như transaction, nhưng không đảm bảo tính ACID. Mỗi entry trong batch được xử lý độc lập, một số có thể thành công và một số có thể thất bại.

```json
{
  "resourceType": "Bundle",
  "type": "batch",
  "entry": [
    {
      "request": {
        "method": "GET",
        "url": "Patient?name=Smith"
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "name": [{ "family": "Jones", "given": ["Frank"] }]
      },
      "request": {
        "method": "POST",
        "url": "Patient"
      }
    }
  ]
}
```

Batch hữu ích khi bạn cần thực hiện nhiều thao tác không liên quan đến nhau.

#### 3. history

Bundle type `history` chứa lịch sử của một tài nguyên hoặc một nhóm tài nguyên. Đây là định dạng phản hồi khi bạn yêu cầu lịch sử:

```json
{
  "resourceType": "Bundle",
  "type": "history",
  "total": 3,
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "meta": {
          "versionId": "3",
          "lastUpdated": "2023-03-01T12:30:00Z"
        }
      },
      "request": {
        "method": "GET",
        "url": "Patient/123/_history/3"
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "meta": {
          "versionId": "2",
          "lastUpdated": "2023-02-15T10:45:00Z"
        }
      },
      "request": {
        "method": "GET",
        "url": "Patient/123/_history/2"
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2023-02-01T09:00:00Z"
        }
      },
      "request": {
        "method": "GET",
        "url": "Patient/123/_history/1"
      }
    }
  ]
}
```

#### 4. searchset

Bundle type `searchset` chứa kết quả của một truy vấn tìm kiếm:

```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "http://example.org/fhir/Patient?name=Smith"
    }
  ],
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "name": [{ "family": "Smith", "given": ["John"] }]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "id": "456",
        "name": [{ "family": "Smith", "given": ["Jane"] }]
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

#### 5. collection

Bundle type `collection` đơn giản là một tập hợp các tài nguyên không có mối quan hệ cụ thể với nhau. Bundle này thường được sử dụng cho mục đích lưu trữ hoặc truyền dữ liệu:

```json
{
  "resourceType": "Bundle",
  "type": "collection",
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123"
      }
    },
    {
      "resource": {
        "resourceType": "Practitioner",
        "id": "456"
      }
    }
  ]
}
```

#### 6. document

Bundle type `document` biểu diễn một tài liệu y tế hoàn chỉnh như bệnh án, báo cáo xét nghiệm, hoặc tóm tắt xuất viện. Bundle này phải bắt đầu bằng một tài nguyên Composition:

```json
{
  "resourceType": "Bundle",
  "type": "document",
  "identifier": {
    "system": "urn:ietf:rfc:3986",
    "value": "urn:uuid:0c3201bd-1cbf-4d64-b04d-cd9187a4c6e0"
  },
  "timestamp": "2023-03-10T09:43:41+11:00",
  "entry": [
    {
      "fullUrl": "http://example.org/fhir/Composition/1",
      "resource": {
        "resourceType": "Composition",
        "id": "1",
        "status": "final",
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "34133-9",
              "display": "Summarization of episode note"
            }
          ]
        },
        "subject": {
          "reference": "Patient/123"
        },
        "date": "2023-03-10T09:43:41+11:00",
        "author": [
          {
            "reference": "Practitioner/456"
          }
        ],
        "title": "Discharge Summary",
        "section": [
          {
            "title": "Medications",
            "entry": [
              {
                "reference": "MedicationRequest/789"
              }
            ]
          }
        ]
      }
    },
    {
      "fullUrl": "http://example.org/fhir/Patient/123",
      "resource": {
        "resourceType": "Patient",
        "id": "123",
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
      }
    },
    {
      "fullUrl": "http://example.org/fhir/Practitioner/456",
      "resource": {
        "resourceType": "Practitioner",
        "id": "456",
        "name": [{ "family": "Trần", "given": ["Thị", "B"] }]
      }
    },
    {
      "fullUrl": "http://example.org/fhir/MedicationRequest/789",
      "resource": {
        "resourceType": "MedicationRequest",
        "id": "789",
        "status": "active",
        "intent": "order",
        "medicationCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "1000048",
              "display": "Paracetamol 500mg tablet"
            }
          ]
        },
        "subject": {
          "reference": "Patient/123"
        }
      }
    }
  ]
}
```

### Xử lý nhiều operations trong một request

#### Transaction và Batch

Cả transaction và batch đều cho phép bạn gửi nhiều thao tác trong một request, nhưng chúng có đặc điểm khác nhau:

| Đặc điểm     | Transaction                                   | Batch                        |
| ------------ | --------------------------------------------- | ---------------------------- |
| Tính ACID    | Có                                            | Không                        |
| Xử lý lỗi    | Tất cả thất bại nếu bất kỳ entry nào thất bại | Mỗi entry được xử lý độc lập |
| References   | Hỗ trợ conditional references trong bundle    | Không hỗ trợ                 |
| Thứ tự xử lý | Xác định                                      | Không xác định               |

#### Request và Response

Để gửi một transaction hoặc batch, bạn POST Bundle tới endpoint gốc của FHIR server:

```http
POST http://example.org/fhir
Content-Type: application/fhir+json

{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [...]
}
```

Phản hồi cũng là một Bundle, có cùng cấu trúc nhưng chứa kết quả của mỗi thao tác:

```json
{
  "resourceType": "Bundle",
  "type": "transaction-response",
  "entry": [
    {
      "response": {
        "status": "201 Created",
        "location": "Patient/123/_history/1",
        "etag": "W/\"1\"",
        "lastModified": "2023-03-10T09:43:41+11:00"
      }
    },
    {
      "response": {
        "status": "201 Created",
        "location": "Encounter/456/_history/1",
        "etag": "W/\"1\"",
        "lastModified": "2023-03-10T09:43:41+11:00"
      }
    }
  ]
}
```

#### Các phương thức HTTP trong Bundle

Trong một Bundle, bạn có thể sử dụng các phương thức HTTP khác nhau:

* **POST**: Tạo tài nguyên mới
* **PUT**: Cập nhật hoặc tạo tài nguyên với ID xác định
* **PATCH**: Cập nhật một phần tài nguyên
* **DELETE**: Xóa tài nguyên
* **GET**: Đọc tài nguyên (chỉ trong batch)
* **HEAD**: Kiểm tra tài nguyên tồn tại (chỉ trong batch)

Ví dụ về một Bundle chứa các phương thức khác nhau:

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "fullUrl": "urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
      "resource": {
        "resourceType": "Patient",
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
      },
      "request": {
        "method": "POST",
        "url": "Patient"
      }
    },
    {
      "request": {
        "method": "DELETE",
        "url": "Patient/789"
      }
    },
    {
      "fullUrl": "http://example.org/fhir/Patient/456",
      "resource": {
        "resourceType": "Patient",
        "id": "456",
        "name": [{ "family": "Trần", "given": ["Thị", "B"] }]
      },
      "request": {
        "method": "PUT",
        "url": "Patient/456"
      }
    }
  ]
}
```

#### Conditional Operations trong Bundle

FHIR cho phép bạn thực hiện các thao tác có điều kiện trong Bundle, sử dụng cùng cú pháp như trong các thao tác FHIR thông thường:

**Conditional Create**

```json
{
  "resource": {
    "resourceType": "Patient",
    "identifier": [
      {
        "system": "http://example.org/fhir/identifier/mrn",
        "value": "12345"
      }
    ],
    "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
  },
  "request": {
    "method": "POST",
    "url": "Patient",
    "ifNoneExist": "identifier=http://example.org/fhir/identifier/mrn|12345"
  }
}
```

**Conditional Update**

```json
{
  "resource": {
    "resourceType": "Patient",
    "id": "123",
    "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
  },
  "request": {
    "method": "PUT",
    "url": "Patient?identifier=http://example.org/fhir/identifier/mrn|12345"
  }
}
```

**Conditional Delete**

```json
{
  "request": {
    "method": "DELETE",
    "url": "Observation?status=entered-in-error&patient=Patient/123"
  }
}
```

### Transaction Processing Order

Trong FHIR transaction, thứ tự xử lý các entry có thể ảnh hưởng đến kết quả. FHIR R5 có một thuật toán cụ thể để xác định thứ tự xử lý:

1. Tất cả các DELETE được xử lý trước
2. Tất cả các POST được xử lý kế tiếp
3. Tất cả các PUT/PATCH được xử lý tiếp theo
4. Tất cả các GET/HEAD được xử lý cuối cùng (chỉ áp dụng cho batch)

Trong mỗi nhóm, thứ tự được quyết định bởi các ràng buộc phụ thuộc giữa các tài nguyên.

#### Ví dụ về thứ tự xử lý

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "request": {
        "method": "DELETE",
        "url": "Patient/123"
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
      },
      "request": {
        "method": "POST",
        "url": "Patient"
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "id": "456",
        "name": [{ "family": "Trần", "given": ["Thị", "B"] }]
      },
      "request": {
        "method": "PUT",
        "url": "Patient/456"
      }
    }
  ]
}
```

Trong ví dụ này:

1. DELETE Patient/123 được xử lý trước
2. POST Patient mới được xử lý tiếp theo
3. PUT Patient/456 được xử lý cuối cùng

### Conditional References trong Transactions

Một trong những tính năng mạnh mẽ nhất của FHIR transactions là khả năng sử dụng conditional references. Điều này cho phép bạn tham chiếu đến các tài nguyên khác trong cùng một Bundle, ngay cả khi chúng chưa tồn tại trên máy chủ.

#### UUID References

Cách phổ biến nhất là sử dụng một UUID cho mỗi tài nguyên trong Bundle, và tham chiếu đến UUID đó:

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "fullUrl": "urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
      "resource": {
        "resourceType": "Patient",
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
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
        "subject": {
          "reference": "urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a"
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

Trong ví dụ này, Observation tham chiếu đến Patient bằng cách sử dụng UUID được chỉ định trong fullUrl của Patient.

#### Conditional References trong R5

FHIR R5 mở rộng khả năng này với conditional references. Thay vì tham chiếu trực tiếp, bạn có thể sử dụng một truy vấn:

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "identifier": [
          {
            "system": "http://example.org/fhir/identifier/mrn",
            "value": "12345"
          }
        ],
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }]
      },
      "request": {
        "method": "POST",
        "url": "Patient",
        "ifNoneExist": "identifier=http://example.org/fhir/identifier/mrn|12345"
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
        "subject": {
          "reference": "Patient?identifier=http://example.org/fhir/identifier/mrn|12345"
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

Khi máy chủ xử lý transaction này, nó sẽ tự động giải quyết reference "Patient?identifier=..." thành ID thực tế của Patient, dù Patient đó có trong Bundle hay đã tồn tại trên máy chủ.

### Error Handling

Xử lý lỗi khác nhau tùy thuộc vào loại Bundle:

#### Transaction Error Handling

Trong một transaction, nếu bất kỳ entry nào thất bại, toàn bộ transaction sẽ thất bại (tất cả hoặc không có gì). Máy chủ sẽ trả về mã lỗi HTTP (thường là 400 Bad Request) và một OperationOutcome mô tả lỗi.

```json
{
  "resourceType": "OperationOutcome",
  "issue": [
    {
      "severity": "error",
      "code": "processing",
      "diagnostics": "Failed to process entry at index 1: Patient with ID 789 not found"
    }
  ]
}
```

#### Batch Error Handling

Trong một batch, mỗi entry được xử lý độc lập. Nếu một entry thất bại, các entry khác vẫn có thể thành công. Phản hồi sẽ chứa kết quả cho mỗi entry:

```json
{
  "resourceType": "Bundle",
  "type": "batch-response",
  "entry": [
    {
      "response": {
        "status": "201 Created",
        "location": "Patient/123/_history/1"
      }
    },
    {
      "response": {
        "status": "404 Not Found",
        "outcome": {
          "resourceType": "OperationOutcome",
          "issue": [
            {
              "severity": "error",
              "code": "not-found",
              "diagnostics": "Patient with ID 789 not found"
            }
          ]
        }
      }
    },
    {
      "response": {
        "status": "200 OK",
        "location": "Patient/456/_history/2"
      }
    }
  ]
}
```

#### Các lỗi phổ biến trong Bundles

1. **Invalid References**: Tham chiếu đến tài nguyên không tồn tại
2. **Dependency Conflicts**: Xung đột giữa các thao tác phụ thuộc vào nhau
3. **Version Conflicts**: Xung đột phiên bản khi cập nhật tài nguyên
4. **Processing Order Errors**: Lỗi liên quan đến thứ tự xử lý
5. **Validation Errors**: Tài nguyên không tuân thủ các ràng buộc validation

#### Xử lý lỗi trong ứng dụng khách

Khi làm việc với Bundles, ứng dụng khách nên:

1. Luôn kiểm tra mã trạng thái HTTP của phản hồi
2. Kiểm tra từng entry trong phản hồi batch để xác định entry nào thành công và entry nào thất bại
3. Có chiến lược rollback cho các thay đổi cục bộ nếu transaction thất bại
4. Xử lý OperationOutcome để hiểu rõ lỗi và cung cấp thông báo lỗi có ý nghĩa

### Cải tiến trong FHIR R5

FHIR R5 đã giới thiệu một số cải tiến đáng kể cho Bundles và Transactions:

#### 1. Cải thiện Conditional References

R5 mở rộng hỗ trợ cho conditional references, cho phép các tham chiếu phức tạp hơn.

#### 2. Nested Transactions

R5 thêm hỗ trợ cho nested transactions, cho phép bạn nhúng một transaction bên trong một transaction khác.

#### 3. Batch trong Transaction

R5 làm rõ hành vi khi một batch được nhúng trong một transaction.

#### 4. \_cascade Parameter

Khi xóa tài nguyên trong một transaction, R5 thêm tham số `_cascade` để kiểm soát cách xử lý các tài nguyên liên quan.

#### 5. Transaction Profiling

R5 cải thiện khả năng xác định profiles cho transactions, giúp validation chặt chẽ hơn.

### Ví dụ thực tế: Document Creation

Hãy xem một ví dụ thực tế về việc tạo một document lâm sàng bằng transaction:

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "fullUrl": "urn:uuid:945a851d-2c4b-4c05-a7c7-119121a9bd5f",
      "resource": {
        "resourceType": "Composition",
        "status": "final",
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "34133-9",
              "display": "Discharge Summary"
            }
          ]
        },
        "subject": {
          "reference": "urn:uuid:4f28acc1-c0a4-4074-86a3-e3c34489e4a6"
        },
        "date": "2023-03-10T09:43:41+11:00",
        "author": [
          {
            "reference": "urn:uuid:3359a419-5a7e-4d94-b268-0d952c2e3f2b"
          }
        ],
        "title": "Discharge Summary for Nguyễn Văn A",
        "section": [
          {
            "title": "Medications",
            "entry": [
              {
                "reference": "urn:uuid:8c957193-6118-45d1-a074-2b5e9e837e4b"
              }
            ]
          }
        ]
      },
      "request": {
        "method": "POST",
        "url": "Composition"
      }
    },
    {
      "fullUrl": "urn:uuid:4f28acc1-c0a4-4074-86a3-e34c489e4a6",
      "resource": {
        "resourceType": "Patient",
        "identifier": [
          {
            "system": "http://example.org/fhir/identifier/mrn",
            "value": "12345"
          }
        ],
        "name": [{ "family": "Nguyễn", "given": ["Văn", "A"] }],
        "birthDate": "1970-01-01",
        "gender": "male"
      },
      "request": {
        "method": "POST",
        "url": "Patient",
        "ifNoneExist": "identifier=http://example.org/fhir/identifier/mrn|12345"
      }
    },
    {
      "fullUrl": "urn:uuid:3359a419-5a7e-4d94-b268-0d952c2e3f2b",
      "resource": {
        "resourceType": "Practitioner",
        "identifier": [
          {
            "system": "http://example.org/fhir/identifier/prn",
            "value": "54321"
          }
        ],
        "name": [{ "family": "Trần", "given": ["Thị", "B"] }]
      },
      "request": {
        "method": "POST",
        "url": "Practitioner",
        "ifNoneExist": "identifier=http://example.org/fhir/identifier/prn|54321"
      }
    },
    {
      "fullUrl": "urn:uuid:8c957193-6118-45d1-a074-2b5e9e837e4b",
      "resource": {
        "resourceType": "MedicationRequest",
        "status": "active",
        "intent": "order",
        "medicationCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "1000048",
              "display": "Paracetamol 500mg tablet"
            }
          ]
        },
        "subject": {
          "reference": "urn:uuid:4f28acc1-c0a4-4074-86a3-e34c489e4a6"
        },
        "authoredOn": "2023-03-09T14:30:00+11:00",
        "requester": {
          "reference": "urn:uuid:3359a419-5a7e-4d94-b268-0d952c2e3f2b"
        },
        "dosageInstruction": [
          {
            "text": "1 tablet every 6 hours as needed for pain",
            "timing": {
              "repeat": {
                "frequency": 1,
                "period": 6,
                "periodUnit": "h"
              }
            },
            "asNeededBoolean": true,
            "doseAndRate": [
              {
                "doseQuantity": {
                  "value": 1,
                  "unit": "tablet"
                }
              }
            ]
          }
        ]
      },
      "request": {
        "method": "POST",
        "url": "MedicationRequest"
      }
    }
  ]
}
```

Khi transaction này được gửi đến máy chủ FHIR, tất cả các tài nguyên sẽ được tạo cùng lúc, với các tham chiếu giữa chúng được giải quyết tự động.

### Ví dụ thực tế: Batch Operations

Hãy xem một ví dụ về việc sử dụng batch để thực hiện các thao tác khác nhau trên nhiều tài nguyên:

```json
{
  "resourceType": "Bundle",
  "type": "batch",
  "entry": [
    {
      "request": {
        "method": "GET",
        "url": "Patient?name=Nguyễn"
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "name": [{ "family": "Lê", "given": ["Thị", "C"] }]
      },
      "request": {
        "method": "POST",
        "url": "Patient"
      }
    },
    {
      "request": {
        "method": "DELETE",
        "url": "Observation?status=entered-in-error&_count=50"
      }
    },
    {
      "resource": {
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
                "valueString": "+84123456789"
              }
            ]
          }
        ]
      },
      "request": {
        "method": "PATCH",
        "url": "Patient/123"
      }
    }
  ]
}
```

Trong ví dụ này, chúng ta thực hiện nhiều thao tác khác nhau trong một yêu cầu:

1. Tìm kiếm tất cả bệnh nhân có họ Nguyễn
2. Tạo một bệnh nhân mới
3. Xóa các quan sát có trạng thái "entered-in-error"
4. Cập nhật số điện thoại của bệnh nhân ID 123

### Sử dụng Bundles trong các kịch bản lâm sàng

Bundles và Transactions đặc biệt hữu ích trong nhiều kịch bản lâm sàng:

#### 1. Nhập viện bệnh nhân

Khi bệnh nhân nhập viện, nhiều tài nguyên cần được tạo cùng lúc: Patient, Encounter, Condition, MedicationRequest, và nhiều tài nguyên khác. Sử dụng transaction đảm bảo tất cả đều được tạo cùng nhau hoặc không có gì được tạo nếu có lỗi.

#### 2. Kết quả xét nghiệm

Khi phòng xét nghiệm gửi kết quả, chúng thường bao gồm nhiều quan sát liên quan đến nhau. Một transaction đảm bảo tất cả các quan sát đều được lưu trữ cùng nhau.

#### 3. Chuyển dữ liệu giữa các hệ thống

Khi di chuyển dữ liệu giữa các hệ thống, bundle loại "document" hoặc "collection" cho phép đóng gói tất cả dữ liệu liên quan để chuyển giao.

#### 4. Đồng bộ hóa dữ liệu

Các ứng dụng di động hoặc offline có thể tích lũy các thay đổi và đồng bộ hóa tất cả cùng một lúc bằng cách sử dụng batch.

### Các kỹ thuật và thực tiễn tốt nhất

#### 1. Xử lý ID và References

* Sử dụng UUID cho tất cả các tài nguyên tạm thời trong một transaction
* Đảm bảo mọi UUID là duy nhất để tránh xung đột
* Sử dụng conditional references khi cần tham chiếu đến tài nguyên có thể đã tồn tại

#### 2. Kích thước và hiệu suất

* Giữ kích thước Bundle trong giới hạn hợp lý (thường dưới 100 entry)
* Chia các transactions lớn thành nhiều phần nhỏ hơn
* Cân nhắc thứ tự xử lý để tối ưu hóa hiệu suất

#### 3. Xử lý lỗi

* Luôn có kế hoạch dự phòng cho trường hợp transaction thất bại
* Thiết kế các cơ chế khôi phục
* Lưu trữ transactions thất bại để phân tích và thử lại

#### 4. Transaction Security

* Đảm bảo toàn bộ transaction được bảo mật
* Cân nhắc các trường hợp một người dùng có thể có quyền truy cập vào một số tài nguyên nhưng không phải tất cả
* Kiểm tra xem một transaction có thể tiết lộ thông tin nhạy cảm không

### Cải tiến trong các phiên bản FHIR R5 tương lai

Trong tương lai, FHIR có thể mở rộng khả năng của Bundles và Transactions:

1. **Improved async processing**: Xử lý bất đồng bộ cho các transactions lớn
2. **Enhanced validation**: Kiểm tra hợp lệ tốt hơn cho các tham chiếu và ràng buộc
3. **More granular control**: Kiểm soát chi tiết hơn về cách xử lý các lỗi
4. **Extended transaction capabilities**: Các khả năng giao dịch mở rộng như rollback một phần
5. **Standardized retry mechanisms**: Cơ chế thử lại tiêu chuẩn cho các transactions thất bại

### Kết luận

Bundles và Transactions là các tính năng mạnh mẽ của FHIR, cho phép xử lý nhiều tài nguyên trong một yêu cầu duy nhất. Chúng rất quan trọng cho việc duy trì tính toàn vẹn dữ liệu và hiệu quả trong các hệ thống y tế.

FHIR R5 đã cải thiện đáng kể các khả năng này thông qua conditional references tốt hơn, xử lý lỗi cải tiến và kiểm soát chi tiết hơn về cách xử lý các phụ thuộc giữa các tài nguyên.

Khi phát triển các ứng dụng y tế, việc nắm vững Bundles và Transactions là rất quan trọng để xây dựng các giải pháp mạnh mẽ, hiệu quả và đáng tin cậy.

### Tài liệu tham khảo

1. [HL7 FHIR R5 - Bundle Resource](https://hl7.org/fhir/R5/bundle.html)
2. [FHIR R5 - RESTful API](https://hl7.org/fhir/R5/http.html)
3. [FHIR R5 - Transaction References](https://hl7.org/fhir/R5/references.html#transaction)
4. [FHIR R5 - Error Handling](https://hl7.org/fhir/R5/operationoutcome.html)
5. [FHIR R5 - Document Resource](https://hl7.org/fhir/R5/composition.html)
