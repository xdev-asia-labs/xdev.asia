---
id: d91ef72a-006f-46b1-b32c-92d951fc6201
title: 'Terminology Operations'
slug: terminology-operations
description: 'Với phiên bản FHIR R5, các thao tác Terminology (Thuật ngữ) đã được cải tiến đáng kể, giúp việc làm việc với mã và bộ giá trị trở nên mạnh mẽ và linh hoạt hơn. Bài viết này sẽ giải thích chi tiết về các thao tác này qua…'
duration_minutes: 25
is_free: true
video_url: null
sort_order: 2
section_title: 'Phần 10: Terminology trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Với phiên bản FHIR R5, các thao tác Terminology (Thuật ngữ) đã được cải tiến đáng kể, giúp việc làm việc với mã và bộ giá trị trở nên mạnh mẽ và linh hoạt hơn. Bài viết này sẽ giải thích chi tiết về các thao tác này qua các ví dụ cụ thể.

### 1. $validate-code: Xác thực mã

Thao tác `$validate-code` dùng để kiểm tra xem một mã cụ thể có hợp lệ trong một CodeSystem hoặc ValueSet hay không.

#### Cách hoạt động

Thao tác này nhận đầu vào là một mã và hệ thống mã, sau đó trả về thông tin về tính hợp lệ của mã đó.

#### Ví dụ: Xác thực mã ICD-10

**Yêu cầu:**

```http
POST [base]/ValueSet/$validate-code
```

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueUri": "http://hl7.org/fhir/ValueSet/icd-10"
    },
    {
      "name": "code",
      "valueString": "J18.9"
    },
    {
      "name": "system",
      "valueUri": "http://hl7.org/fhir/sid/icd-10"
    },
    {
      "name": "display",
      "valueString": "Pneumonia, unspecified"
    }
  ]
}
```

**Phản hồi:**

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "result",
      "valueBoolean": true
    },
    {
      "name": "message",
      "valueString": "Code 'J18.9' from system 'http://hl7.org/fhir/sid/icd-10' is valid"
    },
    {
      "name": "display",
      "valueString": "Pneumonia, unspecified"
    }
  ]
}
```

#### Cải tiến trong R5

R5 đã mở rộng các tham số cho phép kiểm tra chi tiết hơn:

1. **Xác thực thuộc tính của mã**: Kiểm tra cả các thuộc tính của mã

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueUri": "http://hospital.example.org/fhir/ValueSet/procedures"
    },
    {
      "name": "code",
      "valueString": "CARD-ECHO"
    },
    {
      "name": "system",
      "valueUri": "http://hospital.example.org/fhir/CodeSystem/procedures"
    },
    {
      "name": "property",
      "part": [
        {
          "name": "code",
          "valueString": "department"
        },
        {
          "name": "value",
          "valueString": "Tim mạch"
        }
      ]
    }
  ]
}
```

2. **Kiểm tra bản dịch**: Xác thực cả các bản dịch

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "code",
      "valueString": "8867-4"
    },
    {
      "name": "system",
      "valueUri": "http://loinc.org"
    },
    {
      "name": "display",
      "valueString": "Nhịp tim"
    },
    {
      "name": "displayLanguage",
      "valueCode": "vi"
    }
  ]
}
```

3. **Thông tin chi tiết**: Phản hồi có thể bao gồm nhiều thông tin chi tiết hơn về lý do mã không hợp lệ

#### Ứng dụng thực tế

* **Kiểm tra lúc nhập liệu**: Hệ thống EMR có thể xác thực ngay lập tức mã chẩn đoán khi bác sĩ nhập vào
* **Kiểm tra dữ liệu**: Xác thực tính hợp lệ của mã trong quá trình trao đổi dữ liệu giữa các hệ thống
* **Hiển thị mô tả**: Lấy mô tả chính xác của mã để hiển thị trong giao diện người dùng

### 2. $expand: Mở rộng ValueSet

Thao tác `$expand` chuyển đổi một ValueSet từ định nghĩa thành danh sách đầy đủ các mã thực tế.

#### Cách hoạt động

Thao tác này nhận đầu vào là một ValueSet và các tham số mở rộng, sau đó trả về danh sách đầy đủ các mã trong ValueSet đó.

#### Ví dụ: Mở rộng ValueSet các thuốc kháng sinh

**Yêu cầu:**

```http
POST [base]/ValueSet/$expand
```

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueUri": "http://hospital.example.org/fhir/ValueSet/antibiotics"
    },
    {
      "name": "count",
      "valueInteger": 10
    },
    {
      "name": "includeDesignations",
      "valueBoolean": true
    }
  ]
}
```

**Phản hồi:**

```json
{
  "resourceType": "ValueSet",
  "url": "http://hospital.example.org/fhir/ValueSet/antibiotics",
  "expansion": {
    "timestamp": "2025-03-16T10:30:00Z",
    "total": 120,
    "offset": 0,
    "parameter": [
      {
        "name": "count",
        "valueInteger": 10
      }
    ],
    "contains": [
      {
        "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
        "code": "1656313",
        "display": "Amoxicillin 500 MG Oral Tablet",
        "designation": [
          {
            "language": "vi",
            "value": "Amoxicillin 500 MG Viên uống"
          }
        ]
      },
      {
        "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
        "code": "1668240",
        "display": "Azithromycin 250 MG Oral Tablet",
        "designation": [
          {
            "language": "vi",
            "value": "Azithromycin 250 MG Viên uống"
          }
        ]
      },
      // ... các mã khác
    ]
  }
}
```

#### Cải tiến trong R5

R5 đã nâng cấp thao tác `$expand` với nhiều tính năng mạnh mẽ:

1. **Lọc theo văn bản**: Tìm kiếm mã dựa trên text

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueUri": "http://hospital.example.org/fhir/ValueSet/medications"
    },
    {
      "name": "filter",
      "valueString": "amoxi"
    },
    {
      "name": "filterLanguage",
      "valueCode": "vi"
    }
  ]
}
```

2. **Mở rộng theo ngữ cảnh**: Lấy mã phù hợp với một ngữ cảnh cụ thể

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueUri": "http://hospital.example.org/fhir/ValueSet/lab-tests"
    },
    {
      "name": "contextDirection",
      "valueCode": "incoming"
    },
    {
      "name": "context",
      "valueUri": "http://terminology.hl7.org/CodeSystem/usage-context-type"
    }
  ]
}
```

3. **Phân trang nâng cao**: Điều hướng qua các tập kết quả lớn

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueUri": "http://hospital.example.org/fhir/ValueSet/all-diagnoses"
    },
    {
      "name": "count",
      "valueInteger": 50
    },
    {
      "name": "offset",
      "valueInteger": 100
    },
    {
      "name": "includeTotal",
      "valueBoolean": true
    }
  ]
}
```

4. **Mở rộng theo thuộc tính**: Lọc kết quả dựa trên thuộc tính của mã

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueUri": "http://hospital.example.org/fhir/ValueSet/procedures"
    },
    {
      "name": "property",
      "valueString": "status"
    },
    {
      "name": "propertyFilter",
      "part": [
        {
          "name": "property",
          "valueString": "risk"
        },
        {
          "name": "op",
          "valueString": "="
        },
        {
          "name": "value",
          "valueString": "low"
        }
      ]
    }
  ]
}
```

#### Ứng dụng thực tế

* **Dropdown tìm kiếm**: Tạo dropdown tìm kiếm tự động hoàn thiện trong giao diện người dùng
* **Danh sách phân trang**: Hiển thị và điều hướng qua các danh sách mã lớn (như ICD-10)
* **Lọc theo ngữ cảnh**: Hiển thị chỉ các mã phù hợp với khoa/phòng của bác sĩ
* **Tìm kiếm đa ngôn ngữ**: Cho phép người dùng tìm kiếm bằng ngôn ngữ của họ (tiếng Việt)

### 3. $lookup: Tra cứu thông tin mã

Thao tác `$lookup` giúp tra cứu thông tin chi tiết về một mã cụ thể trong CodeSystem.

#### Cách hoạt động

Thao tác này nhận đầu vào là mã và hệ thống mã, sau đó trả về thông tin chi tiết về mã đó.

#### Ví dụ: Tra cứu thông tin về một mã xét nghiệm

**Yêu cầu:**

```http
POST [base]/CodeSystem/$lookup
```

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "code",
      "valueString": "CBC"
    },
    {
      "name": "system",
      "valueUri": "http://hospital.example.org/fhir/CodeSystem/lab-tests"
    },
    {
      "name": "property",
      "valueString": "department,sampleType,turnaroundTime"
    }
  ]
}
```

**Phản hồi:**

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "name",
      "valueString": "Tổng phân tích tế bào máu"
    },
    {
      "name": "display",
      "valueString": "Tổng phân tích tế bào máu"
    },
    {
      "name": "version",
      "valueString": "2.3.0"
    },
    {
      "name": "designation",
      "part": [
        {
          "name": "language",
          "valueCode": "en"
        },
        {
          "name": "value",
          "valueString": "Complete Blood Count"
        }
      ]
    },
    {
      "name": "property",
      "part": [
        {
          "name": "code",
          "valueCode": "department"
        },
        {
          "name": "value",
          "valueString": "Hematology"
        }
      ]
    },
    {
      "name": "property",
      "part": [
        {
          "name": "code",
          "valueCode": "sampleType"
        },
        {
          "name": "value",
          "valueString": "Whole Blood"
        }
      ]
    },
    {
      "name": "property",
      "part": [
        {
          "name": "code",
          "valueCode": "turnaroundTime"
        },
        {
          "name": "value",
          "valueString": "2 hours"
        }
      ]
    }
  ]
}
```

#### Cải tiến trong R5

R5 đã nâng cao thao tác `$lookup` với:

1. **Hỗ trợ nhiều thuộc tính**: Tra cứu nhiều thuộc tính trong một yêu cầu
2. **Thông tin lịch sử**: Lấy thông tin về lịch sử thay đổi của mã

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "code",
      "valueString": "HBA1C"
    },
    {
      "name": "system",
      "valueUri": "http://hospital.example.org/fhir/CodeSystem/lab-tests"
    },
    {
      "name": "property",
      "valueString": "status,addedInVersion,changedInVersion,previousDisplay"
    },
    {
      "name": "includeHistory",
      "valueBoolean": true
    }
  ]
}
```

3. **Thông tin phân cấp**: Lấy thông tin về vị trí của mã trong cấu trúc phân cấp

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "code",
      "valueString": "SURG-APP"
    },
    {
      "name": "system",
      "valueUri": "http://hospital.example.org/fhir/CodeSystem/procedures"
    },
    {
      "name": "includeHierarchy",
      "valueBoolean": true
    }
  ]
}
```

#### Ứng dụng thực tế

* **Hiển thị chi tiết**: Hiển thị thông tin chi tiết khi chọn một mã
* **Form xét nghiệm**: Tự động điền thông tin như loại mẫu và thời gian hoàn thành
* **Tra cứu nhanh**: Giúp nhân viên y tế tra cứu thông tin chi tiết về mã
* **Hỗ trợ mã hóa**: Cung cấp thông tin cho người mã hóa lâm sàng

### 4. $translate: Chuyển đổi mã giữa các hệ thống

Thao tác `$translate` chuyển đổi mã từ một hệ thống mã sang hệ thống mã khác.

#### Cách hoạt động

Thao tác này nhận đầu vào là mã và hệ thống mã nguồn, sau đó tìm mã tương đương trong hệ thống mã đích.

#### Ví dụ: Chuyển đổi từ mã nội bộ sang LOINC

**Yêu cầu:**

```http
POST [base]/ConceptMap/$translate
```

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "code",
      "valueString": "XN001"
    },
    {
      "name": "system",
      "valueUri": "http://hospital.example.org/fhir/CodeSystem/local-lab-codes"
    },
    {
      "name": "target",
      "valueUri": "http://loinc.org"
    },
    {
      "name": "url",
      "valueUri": "http://hospital.example.org/fhir/ConceptMap/local-to-loinc"
    },
    {
      "name": "reverse",
      "valueBoolean": false
    }
  ]
}
```

**Phản hồi:**

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "result",
      "valueBoolean": true
    },
    {
      "name": "match",
      "part": [
        {
          "name": "equivalence",
          "valueCode": "equivalent"
        },
        {
          "name": "concept",
          "valueCoding": {
            "system": "http://loinc.org",
            "code": "58410-2",
            "display": "Complete blood count panel - Blood"
          }
        },
        {
          "name": "source",
          "valueCoding": {
            "system": "http://hospital.example.org/fhir/CodeSystem/local-lab-codes",
            "code": "XN001",
            "display": "CBC (Tổng phân tích tế bào máu)"
          }
        }
      ]
    }
  ]
}
```

#### Cải tiến trong R5

R5 đã nâng cao thao tác `$translate` với:

1. **Chuyển đổi theo ngữ cảnh**: Chỉ định ngữ cảnh để có kết quả chính xác hơn

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "code",
      "valueString": "XN057"
    },
    {
      "name": "system",
      "valueUri": "http://hospital.example.org/fhir/CodeSystem/local-lab-codes"
    },
    {
      "name": "target",
      "valueUri": "http://loinc.org"
    },
    {
      "name": "conceptMapVersion",
      "valueString": "2.0.0"
    },
    {
      "name": "context",
      "valueString": "outpatient"
    }
  ]
}
```

2. **Phiên bản cụ thể**: Chỉ định phiên bản của ConceptMap để sử dụng
3. **Tính tương đương**: Chỉ định mức độ tương đương tối thiểu mong muốn

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "code",
      "valueString": "K30"
    },
    {
      "name": "system",
      "valueUri": "http://hl7.org/fhir/sid/icd-10"
    },
    {
      "name": "target",
      "valueUri": "http://snomed.info/sct"
    },
    {
      "name": "equivalence",
      "valueCode": "equivalent"
    }
  ]
}
```

#### Ứng dụng thực tế

* **Tương tác giữa các hệ thống**: Chuyển đổi mã khi trao đổi dữ liệu giữa các hệ thống khác nhau
* **Báo cáo tiêu chuẩn**: Chuyển đổi mã nội bộ sang mã tiêu chuẩn khi gửi báo cáo
* **Nhập dữ liệu bên ngoài**: Chuyển đổi mã từ hệ thống bên ngoài sang mã nội bộ
* **Tích hợp dữ liệu**: Kết hợp dữ liệu từ nhiều nguồn với các hệ thống mã khác nhau

### 5. $closure: Tính toán quan hệ phân cấp

Thao tác `$closure` tính toán và duy trì bảng quan hệ phân cấp (closure table) cho các mã trong CodeSystem.

#### Cách hoạt động

Thao tác này tạo và truy vấn một bảng closure, cho phép tìm kiếm nhanh tất cả các mối quan hệ trực tiếp và gián tiếp giữa các khái niệm.

#### Ví dụ: Tìm tất cả các mã con của một mã

**Yêu cầu:**

```http
POST [base]/CodeSystem/$closure
```

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "name",
      "valueString": "example-closure"
    },
    {
      "name": "concept",
      "valueCoding": {
        "system": "http://hospital.example.org/fhir/CodeSystem/diagnosis",
        "code": "RESP"
      }
    },
    {
      "name": "relationship",
      "valueCode": "is-a"
    },
    {
      "name": "direction",
      "valueCode": "children"
    }
  ]
}
```

**Phản hồi:**

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "concept",
      "valueCoding": {
        "system": "http://hospital.example.org/fhir/CodeSystem/diagnosis",
        "code": "PNEUM",
        "display": "Viêm phổi"
      }
    },
    {
      "name": "concept",
      "valueCoding": {
        "system": "http://hospital.example.org/fhir/CodeSystem/diagnosis",
        "code": "BRONCH",
        "display": "Viêm phế quản"
      }
    },
    {
      "name": "concept",
      "valueCoding": {
        "system": "http://hospital.example.org/fhir/CodeSystem/diagnosis",
        "code": "ASTHMA",
        "display": "Hen phế quản"
      }
    },
    {
      "name": "concept",
      "valueCoding": {
        "system": "http://hospital.example.org/fhir/CodeSystem/diagnosis",
        "code": "PNEUM-BAC",
        "display": "Viêm phổi do vi khuẩn"
      }
    }
  ]
}
```

#### Tính năng trong R5

R5 cung cấp các tính năng mạnh mẽ cho `$closure`:

1. **Tạo bảng closure**: Tạo bảng closure cho một CodeSystem

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "name",
      "valueString": "snomed-closure"
    },
    {
      "name": "system",
      "valueUri": "http://snomed.info/sct"
    },
    {
      "name": "version",
      "valueString": "20220731"
    }
  ]
}
```

2. **Truy vấn tổ tiên và con cháu**: Tìm tất cả các khái niệm liên quan

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "name",
      "valueString": "snomed-closure"
    },
    {
      "name": "concept",
      "valueCoding": {
        "system": "http://snomed.info/sct",
        "code": "53084003" // Bacterial pneumonia
      }
    },
    {
      "name": "relationship",
      "valueString": "http://snomed.info/sct#116680003" // Is-a relationship
    },
    {
      "name": "direction",
      "valueCode": "ancestors"
    }
  ]
}
```

3. **Kiểm tra quan hệ cụ thể**: Xác định mối quan hệ giữa hai khái niệm

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "name",
      "valueString": "snomed-closure"
    },
    {
      "name": "sourceConcept",
      "valueCoding": {
        "system": "http://snomed.info/sct",
        "code": "53084003" // Bacterial pneumonia
      }
    },
    {
      "name": "targetConcept",
      "valueCoding": {
        "system": "http://snomed.info/sct",
        "code": "233604007" // Pneumonia
      }
    },
    {
      "name": "relationship",
      "valueString": "http://snomed.info/sct#116680003" // Is-a relationship
    }
  ]
}
```

#### Ứng dụng thực tế

* **Tìm kiếm phân cấp**: Tìm tất cả các loại bệnh đường hô hấp khi tìm kiếm chẩn đoán
* **Phân tích dữ liệu**: Nhóm và phân tích dữ liệu sử dụng mối quan hệ phân cấp (ví dụ: phân tích tất cả các loại viêm phổi)
* **Quy tắc lâm sàng**: Hỗ trợ quy tắc hỗ trợ quyết định lâm sàng dựa trên mối quan hệ phân cấp
* **Tối ưu hóa hiệu suất**: Cải thiện hiệu suất khi truy vấn cấu trúc phân cấp phức tạp như SNOMED CT

### Ví dụ thực tế toàn diện

Hãy xem một ví dụ thực tế về cách sử dụng các thao tác thuật ngữ trong một hệ thống EMR:

#### Kịch bản: Bác sĩ đang chỉ định xét nghiệm

1.  **Bác sĩ tìm kiếm xét nghiệm**

    Sử dụng `$expand` với bộ lọc:

    ```http
    POST [base]/ValueSet/$expand
    ```

    ```json
    {
      "resourceType": "Parameters",
      "parameter": [
        {
          "name": "url",
          "valueUri": "http://hospital.example.org/fhir/ValueSet/active-lab-tests"
        },
        {
          "name": "filter",
          "valueString": "công thức máu"
        },
        {
          "name": "includeDesignations",
          "valueBoolean": true
        },
        {
          "name": "displayLanguage",
          "valueCode": "vi"
        }
      ]
    }
    ```
2.  **Hệ thống hiển thị thông tin chi tiết về xét nghiệm**

    Sử dụng `$lookup` để lấy chi tiết:

    ```http
    POST [base]/CodeSystem/$lookup
    ```

    ```json
    {
      "resourceType": "Parameters",
      "parameter": [
        {
          "name": "code",
          "valueString": "CBC"
        },
        {
          "name": "system",
          "valueUri": "http://hospital.example.org/fhir/CodeSystem/lab-tests"
        },
        {
          "name": "property",
          "valueString": "department,sampleType,turnaroundTime,cost"
        }
      ]
    }
    ```
3.  **Bác sĩ chọn xét nghiệm và hệ thống xác thực**

    Sử dụng `$validate-code` để kiểm tra:

    ```http
    POST [base]/ValueSet/$validate-code
    ```

    ```json
    {
      "resourceType": "Parameters",
      "parameter": [
        {
          "name": "url",
          "valueUri": "http://hospital.example.org/fhir/ValueSet/active-lab-tests"
        },
        {
          "name": "code",
          "valueString": "CBC"
        },
        {
          "name": "system",
          "valueUri": "http://hospital.example.org/fhir/CodeSystem/lab-tests"
        }
      ]
    }
    ```
4.  **Hệ thống gửi chỉ định đến phòng xét nghiệm**

    Sử dụng `$translate` để chuyển đổi sang mã LOINC:

    ```http
    POST [base]/ConceptMap/$translate
    ```

    ```json
    {
      "resourceType": "Parameters",
      "parameter": [
        {
          "name": "code",
          "valueString": "CBC"
        },
        {
          "name": "system",
          "valueUri": "http://hospital.example.org/fhir/CodeSystem/lab-tests"
        },
        {
          "name": "target",
          "valueUri": "http://loinc.org"
        },
        {
          "name": "url",
          "valueUri": "http://hospital.example.org/fhir/ConceptMap/local-to-loinc"
        }
      ]
    }
    ```
5.  **Phòng xét nghiệm thống kê các loại xét nghiệm máu**

    Sử dụng `$closure` để lấy tất cả các loại xét nghiệm máu:

    ```http
    POST [base]/CodeSystem/$closure
    ```

    ```json
    {
      "resourceType": "Parameters",
      "parameter": [
        {
          "name": "name",
          "valueString": "lab-test-closure"
        },
        {
          "name": "concept",
          "valueCoding": {
            "system": "http://hospital.example.org/fhir/CodeSystem/lab-tests",
            "code": "BLOOD-TEST"
          }
        },
        {
          "name": "relationship",
          "valueCode": "is-a"
        },
        {
          "name": "direction",
          "valueCode": "children"
        }
      ]
    }
    ```

Phản hồi sẽ bao gồm tất cả các loại xét nghiệm máu, giúp phòng xét nghiệm thống kê và phân tích     dễ dàng.

### Ứng dụng nâng cao của các Terminology Operations

#### 1. Xây dựng hệ thống hỗ trợ quyết định lâm sàng

Các thao tác Terminology trong R5 là nền tảng cho các hệ thống hỗ trợ quyết định lâm sàng thông minh:

```javascript
// Giả sử có chẩn đoán "Viêm phổi do vi khuẩn"
const diagnosis = "J15.9"; // ICD-10 code

// 1. Xác thực mã chẩn đoán
validateCode(diagnosis, "http://hl7.org/fhir/sid/icd-10");

// 2. Chuyển đổi sang SNOMED CT để sử dụng mối quan hệ phân cấp
const snomedCode = translateCode(diagnosis, "http://hl7.org/fhir/sid/icd-10", "http://snomed.info/sct");

// 3. Tìm tất cả các kháng sinh phù hợp với loại nhiễm trùng này
const infectionType = lookupCodeProperties(snomedCode, "causativeAgent");
const recommendedAntibiotics = expandValueSet("antibiotics-for-infection", { 
  propertyFilter: {
    property: "treatsInfection",
    value: infectionType
  }
});

// 4. Kiểm tra chống chỉ định dựa trên thông tin bệnh nhân
const patientAllergies = getPatientAllergies(patientId);
const safeAntibiotics = recommendedAntibiotics.filter(antibiotic => {
  return !patientAllergies.some(allergy => {
    // Sử dụng $closure để kiểm tra liệu thuốc kháng sinh có thuộc nhóm gây dị ứng không
    return checkRelationship(antibiotic.code, allergy.code, "is-a", "ancestors");
  });
});

// 5. Sắp xếp theo ưu tiên dựa trên hướng dẫn điều trị
displayRecommendations(safeAntibiotics);
```

#### 2. Xây dựng tính năng tìm kiếm thông minh

Kết hợp các thao tác để tạo tính năng tìm kiếm thông minh cho người dùng:

```javascript
// Tạo tính năng tìm kiếm chẩn đoán thông minh
function searchDiagnoses(searchText, userLanguage) {
  // 1. Mở rộng ValueSet với bộ lọc văn bản
  const initialResults = expandValueSet("active-diagnoses", {
    filter: searchText,
    filterLanguage: userLanguage,
    count: 20
  });
  
  // 2. Đối với mỗi kết quả, lấy thêm các mã con nếu người dùng muốn
  const enhancedResults = initialResults.map(diagnosis => {
    // Thêm thuộc tính để chỉ ra rằng mã này có các mã con
    diagnosis.hasChildren = checkHasChildren(diagnosis.code);
    return diagnosis;
  });
  
  // 3. Khi người dùng chọn "xem chi tiết hơn" cho một mã
  function expandDiagnosis(diagnosisCode) {
    // Sử dụng $closure để lấy tất cả các mã con
    const childCodes = getChildCodes(diagnosisCode);
    return childCodes;
  }
  
  return {
    results: enhancedResults,
    expandDiagnosis: expandDiagnosis
  };
}

// Hàm hỗ trợ để kiểm tra xem mã có các mã con không
function checkHasChildren(code) {
  const closureResults = queryClouseTable({
    code: code,
    direction: "children",
    depth: 1
  });
  return closureResults.length > 0;
}

// Hàm để lấy tất cả các mã con
function getChildCodes(code) {
  return queryClouseTable({
    code: code,
    direction: "children",
    depth: "all"
  });
}
```

#### 3. Chuyển đổi dữ liệu giữa các hệ thống

Sử dụng các thao tác Terminology để kết nối các hệ thống khác nhau:

```javascript
// Hàm chuyển đổi dữ liệu từ hệ thống ngoài vào EMR nội bộ
async function importExternalData(externalData) {
  const mappedData = {
    patient: { ... },
    encounters: [],
    medications: [],
    labResults: []
  };
  
  // Chuyển đổi chẩn đoán
  for (const diagnosis of externalData.diagnoses) {
    // 1. Xác thực mã chẩn đoán trong hệ thống bên ngoài
    const isValid = await validateCode(diagnosis.code, diagnosis.system);
    
    if (isValid) {
      // 2. Chuyển đổi sang mã nội bộ
      const internalCode = await translateCode(
        diagnosis.code, 
        diagnosis.system, 
        "http://hospital.example.org/fhir/CodeSystem/diagnosis"
      );
      
      // 3. Nếu không có bản dịch trực tiếp, tìm kiếm mã cha gần nhất
      if (!internalCode && diagnosis.system === "http://snomed.info/sct") {
        const possibleParents = await queryClouseTable({
          code: diagnosis.code,
          direction: "ancestors",
          depth: 3
        });
        
        // Tìm mã cha đầu tiên có thể ánh xạ
        for (const parent of possibleParents) {
          const parentTranslation = await translateCode(
            parent.code,
            parent.system,
            "http://hospital.example.org/fhir/CodeSystem/diagnosis"
          );
          
          if (parentTranslation) {
            // Đánh dấu rằng đây là ánh xạ gần đúng
            mappedData.encounters.push({
              diagnosis: {
                code: parentTranslation.code,
                display: parentTranslation.display,
                approximateMapping: true,
                originalCode: diagnosis.code,
                originalSystem: diagnosis.system
              }
            });
            break;
          }
        }
      } else if (internalCode) {
        // Ánh xạ trực tiếp
        mappedData.encounters.push({
          diagnosis: {
            code: internalCode.code,
            display: internalCode.display
          }
        });
      }
    }
  }
  
  // Tương tự cho thuốc, xét nghiệm, v.v.
  
  return mappedData;
}
```

### So sánh với các phiên bản trước

Để hiểu rõ hơn giá trị của những cải tiến trong R5, dưới đây là bảng so sánh với các phiên bản trước:

| Thao tác       | R4                          | R5                                                | Cải tiến chính                                                                      |
| -------------- | --------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| $validate-code | Chỉ kiểm tra mã và hiển thị | Hỗ trợ kiểm tra thuộc tính và ngôn ngữ            | - Xác thực chi tiết hơn\<br>- Kiểm tra đa ngôn ngữ\<br>- Thông báo lỗi chi tiết     |
| $expand        | Phân trang và bộ lọc cơ bản | Bộ lọc phong phú, tìm kiếm theo ngôn ngữ          | - Lọc theo thuộc tính\<br>- Hỗ trợ ngữ cảnh\<br>- Hiệu suất tốt hơn với tập lớn     |
| $lookup        | Thông tin cơ bản về mã      | Thông tin chi tiết, bao gồm thuộc tính và lịch sử | - Truy vấn nhiều thuộc tính\<br>- Thông tin phân cấp\<br>- Lịch sử thay đổi         |
| $translate     | Chuyển đổi 1-1 đơn giản     | Chuyển đổi theo ngữ cảnh, phiên bản               | - Chỉ định mức tương đương\<br>- Chuyển đổi theo ngữ cảnh\<br>- Kiểm soát phiên bản |
| $closure       | Chưa có hoặc hạn chế        | Hỗ trợ đầy đủ, truy vấn phức tạp                  | - Truy vấn phân cấp hiệu quả\<br>- Nhiều loại quan hệ\<br>- Kiểm tra quan hệ cụ thể |

### Hiệu suất và tối ưu hóa

Khi làm việc với các Terminology Operations trong R5, hiệu suất là yếu tố quan trọng, đặc biệt với các bộ mã lớn như SNOMED CT. Đây là một số chiến lược tối ưu:

1. **Sử dụng phân trang**: Khi sử dụng `$expand` trên bộ lớn, luôn sử dụng tham số `count` và `offset`
2. **Chỉ định thuộc tính cần thiết**: Trong `$lookup`, chỉ lấy các thuộc tính cần thiết
3. **Bảng closure**: Với SNOMED CT hoặc các hệ thống mã lớn, tạo và duy trì bảng closure để truy vấn phân cấp nhanh
4. **Bộ nhớ đệm (Cache)**: Lưu kết quả của các thao tác thường xuyên sử dụng
5. **Chỉ định phiên bản**: Luôn chỉ định phiên bản cụ thể để tránh tải không cần thiết

### Lời khuyên triển khai

Khi triển khai các Terminology Operations trong R5, hãy cân nhắc:

1. **Quy trình quản lý thuật ngữ**: Thiết lập quy trình để cập nhật, kiểm duyệt và phân phối các bộ mã
2. **Kiểm soát phiên bản**: Duy trì lịch sử thay đổi đầy đủ cho tất cả các CodeSystem và ValueSet
3. **Kiểm thử toàn diện**: Kiểm thử các thao tác với nhiều tình huống khác nhau
4. **Tài liệu hóa**: Tài liệu hóa đầy đủ tất cả các CodeSystem, ValueSet và ConceptMap
5. **Tương tác với người dùng**: Thiết kế giao diện người dùng tận dụng các thao tác này một cách trực quan

### Kết luận

Các cải tiến Terminology Operations trong FHIR R5 đánh dấu một bước tiến quan trọng trong quản lý và sử dụng thuật ngữ y tế. Với khả năng mạnh mẽ hơn trong xác thực, mở rộng, tra cứu, chuyển đổi và truy vấn quan hệ phân cấp, FHIR R5 cung cấp nền tảng vững chắc cho các ứng dụng y tế hiện đại.

Những cải tiến này không chỉ giúp tăng tính chính xác và hiệu quả trong mã hóa dữ liệu y tế, mà còn mở ra nhiều khả năng mới cho hệ thống hỗ trợ quyết định lâm sàng, phân tích dữ liệu và trao đổi thông tin giữa các hệ thống khác nhau.

Bằng cách áp dụng hiệu quả các thao tác này, các tổ chức y tế có thể cải thiện đáng kể chất lượng dữ liệu, hỗ trợ tốt hơn cho việc chăm sóc bệnh nhân, và đẩy nhanh quá trình chuyển đổi số trong y tế.
