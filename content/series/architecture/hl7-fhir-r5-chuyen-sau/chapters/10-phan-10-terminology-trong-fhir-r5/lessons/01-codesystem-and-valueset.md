---
id: 4f7810b0-692b-4234-90c5-9606a016161a
title: 'CodeSystem & ValueSet'
slug: codesystem-and-valueset
description: 'Phiên bản FHIR R5 đã mang lại những cải tiến đáng kể cho CodeSystem và ValueSet hai thành phần nền tảng trong quản lý thuật ngữ y tế. Hãy cùng tìm hiểu chi tiết về các nâng cấp này qua những ví dụ cụ thể và dễ hiểu.'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 1
section_title: 'Phần 10: Terminology trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Phiên bản FHIR R5 đã mang lại những cải tiến đáng kể cho CodeSystem và ValueSet - hai thành phần nền tảng trong quản lý thuật ngữ y tế. Hãy cùng tìm hiểu chi tiết về các nâng cấp này qua những ví dụ cụ thể và dễ hiểu.

### 1. Cải tiến cấu trúc phân cấp trong CodeSystem

#### Vấn đề trước đây

Trong các phiên bản FHIR trước R5, việc biểu diễn mối quan hệ phân cấp phức tạp giữa các mã khá hạn chế. Ví dụ, khi muốn thể hiện rằng "Viêm phổi" là một loại "Bệnh đường hô hấp", bạn phải dựa vào cấu trúc phân cấp đơn giản hoặc các thuộc tính tùy chỉnh.

#### Cải tiến trong R5

**Phân cấp lồng nhau rõ ràng hơn**

```json
{
  "concept": [
    {
      "code": "respiratory",
      "display": "Bệnh đường hô hấp",
      "concept": [
        {
          "code": "pneumonia",
          "display": "Viêm phổi"
        },
        {
          "code": "bronchitis",
          "display": "Viêm phế quản"
        }
      ]
    }
  ]
}
```

Cấu trúc này giúp bạn dễ dàng thấy rằng "Viêm phổi" và "Viêm phế quản" là các loại "Bệnh đường hô hấp".

**Đa dạng loại quan hệ phân cấp**

R5 cho phép định nghĩa nhiều loại quan hệ phân cấp khác nhau:

```json
{
  "property": [
    {
      "code": "relationship",
      "description": "Loại quan hệ giữa các khái niệm",
      "type": "code",
      "valueSet": "http://example.org/fhir/ValueSet/relationship-types"
    }
  ],
  "concept": [
    {
      "code": "hand",
      "display": "Bàn tay",
      "property": [
        {
          "code": "relationship",
          "valueCode": "part-of",
          "valueCode": "upper-limb"
        }
      ]
    }
  ]
}
```

Giờ đây, bạn có thể biểu diễn không chỉ quan hệ "is-a" cơ bản mà còn là các mối quan hệ phức tạp hơn như "part-of" (một phần của), "contains" (chứa), "caused-by" (gây ra bởi).

#### Lợi ích thực tế

Trong thực tế, cải tiến này đặc biệt có ích khi làm việc với các hệ thống mã phức tạp như SNOMED CT:

* Giúp bác sĩ tìm kiếm chẩn đoán chính xác hơn dựa trên mối quan hệ phân cấp
* Phân tích dữ liệu lâm sàng hiệu quả hơn (ví dụ: tìm tất cả bệnh đường hô hấp)
* Hỗ trợ xây dựng quy tắc hỗ trợ quyết định lâm sàng phức tạp

### 2. Khả năng lọc nâng cao

#### Vấn đề trước đây

Các phiên bản trước gặp khó khăn trong việc lọc và chọn các mã dựa trên nhiều tiêu chí phức tạp. Ví dụ, "lấy tất cả các xét nghiệm máu đang hoạt động không bao gồm xét nghiệm vi sinh" yêu cầu nhiều bước thủ công.

#### Cải tiến trong R5

**Định nghĩa bộ lọc mạnh mẽ hơn**

```json
{
  "filter": [
    {
      "code": "category",
      "description": "Lọc theo danh mục xét nghiệm",
      "operator": ["=", "in", "not-in"],
      "value": "Các danh mục: hematology, biochemistry, microbiology, etc."
    },
    {
      "code": "status",
      "description": "Lọc theo trạng thái xét nghiệm",
      "operator": ["=", "not-equals"],
      "value": "active, inactive, deprecated"
    }
  ]
}
```

**Áp dụng bộ lọc phức tạp trong ValueSet**

```json
{
  "compose": {
    "include": [
      {
        "system": "http://lab.example.org/codesystem/tests",
        "filter": [
          {
            "property": "category",
            "op": "in",
            "value": "hematology,biochemistry"
          },
          {
            "property": "status",
            "op": "=",
            "value": "active"
          },
          {
            "property": "specimen",
            "op": "=",
            "value": "blood"
          }
        ]
      }
    ],
    "exclude": [
      {
        "system": "http://lab.example.org/codesystem/tests",
        "filter": [
          {
            "property": "category",
            "op": "=",
            "value": "microbiology"
          }
        ]
      }
    ]
  }
}
```

**Toán tử lọc mới**

R5 giới thiệu các toán tử mới như:

* `exists` - kiểm tra thuộc tính có tồn tại không
* `regex` - so khớp biểu thức chính quy
* `not-in` - không thuộc một tập hợp giá trị

#### Ví dụ thực tế

Một trường hợp thực tế là khi bạn cần tạo một danh sách thuốc kháng sinh dựa trên nhiều tiêu chí:

```json
{
  "compose": {
    "include": [
      {
        "system": "http://pharmacy.example.org/medications",
        "filter": [
          {
            "property": "class",
            "op": "=",
            "value": "antibiotic"
          },
          {
            "property": "route",
            "op": "in",
            "value": "oral,intravenous"
          },
          {
            "property": "status",
            "op": "=",
            "value": "active"
          }
        ]
      }
    ],
    "exclude": [
      {
        "system": "http://pharmacy.example.org/medications",
        "filter": [
          {
            "property": "contraindication",
            "op": "=",
            "value": "pregnancy"
          }
        ]
      }
    ]
  }
}
```

Trong ví dụ này, bạn tạo một tập hợp thuốc kháng sinh đường uống và tiêm tĩnh mạch đang hoạt động, loại trừ các thuốc chống chỉ định trong thai kỳ.

### 3. Cải tiến metadata

#### Vấn đề trước đây

Phiên bản trước của FHIR thiếu các metadata chi tiết cần thiết để hiểu đầy đủ về ngữ cảnh, mục đích và lịch sử của các mã.

#### Cải tiến trong R5

**Metadata bổ sung cấp CodeSystem**

```json
{
  "title": "Mã Xét Nghiệm Nội Viện",
  "description": "Hệ thống mã xét nghiệm nội bộ của Bệnh viện Đa khoa",
  "purpose": "Sử dụng trong đặt chỉ định và báo cáo kết quả xét nghiệm",
  "copyright": "© 2025 Bệnh viện Đa khoa",
  "caseSensitive": true,
  "content": "complete",
  "count": 247,
  "jurisdiction": [
    {
      "coding": [
        {
          "system": "urn:iso:std:iso:3166",
          "code": "VN"
        }
      ]
    }
  ],
  "publisher": "Khoa Xét nghiệm, Bệnh viện Đa khoa",
  "contact": [
    {
      "name": "Trưởng khoa Xét nghiệm",
      "telecom": [
        {
          "system": "email",
          "value": "lab@hospital.example.org"
        }
      ]
    }
  ],
  "useContext": [
    {
      "code": {
        "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
        "code": "venue"
      },
      "valueCodeableConcept": {
        "text": "Inpatient and Outpatient"
      }
    }
  ]
}
```

**Metadata phong phú cấp concept**

```json
{
  "concept": [
    {
      "code": "CBC",
      "display": "Tổng phân tích tế bào máu",
      "definition": "Phân tích đầy đủ các thành phần tế bào trong máu",
      "designation": [
        {
          "language": "en",
          "use": {
            "system": "http://terminology.hl7.org/CodeSystem/designation-usage",
            "code": "display"
          },
          "value": "Complete Blood Count"
        },
        {
          "language": "vi",
          "use": {
            "system": "http://terminology.hl7.org/CodeSystem/designation-usage",
            "code": "display"
          },
          "value": "Tổng phân tích tế bào máu"
        }
      ],
      "property": [
        {
          "code": "department",
          "valueString": "Hematology"
        },
        {
          "code": "sampleType",
          "valueString": "Whole Blood"
        },
        {
          "code": "turnaroundTime",
          "valueString": "2 hours"
        }
      ]
    }
  ]
}
```

#### Ví dụ thực tế

Khi triển khai hệ thống xét nghiệm mới, bạn có thể cung cấp thông tin phong phú về các xét nghiệm:

* Nhân viên phòng xét nghiệm có thể xem thời gian hoàn thành dự kiến
* Bác sĩ biết được loại mẫu cần thu thập cho mỗi xét nghiệm
* Hệ thống có thể hiển thị tên xét nghiệm bằng nhiều ngôn ngữ tùy theo cài đặt của người dùng
* Thông tin liên hệ rõ ràng về đơn vị chịu trách nhiệm quản lý mã

### 4. Quản lý phiên bản

#### Vấn đề trước đây

Những thách thức trong quản lý thay đổi của bộ mã qua thời gian dẫn đến các vấn đề về khả năng tương thích và nhất quán dữ liệu.

#### Cải tiến trong R5

**Định danh phiên bản rõ ràng**

```json
{
  "url": "http://hospital.example.org/fhir/CodeSystem/lab-tests",
  "version": "2.3.0",
  "versionNeeded": true,
  "status": "active",
  "experimental": false,
  "date": "2025-01-15"
}
```

Trường `versionNeeded` mới cho biết rằng phiên bản phải được chỉ định rõ ràng khi tham chiếu tới CodeSystem này.

**Mối quan hệ giữa các phiên bản**

```json
{
  "relatedArtifact": [
    {
      "type": "predecessor",
      "resource": "http://hospital.example.org/fhir/CodeSystem/lab-tests|2.2.0"
    },
    {
      "type": "successor",
      "resource": "http://hospital.example.org/fhir/CodeSystem/lab-tests|2.4.0"
    },
    {
      "type": "derived-from",
      "resource": "http://standardorg.example.org/fhir/CodeSystem/standard-lab-tests|4.0.0"
    }
  ]
}
```

**Lịch sử thay đổi cấp mã**

```json
{
  "concept": [
    {
      "code": "HBA1C",
      "display": "Hemoglobin A1c",
      "property": [
        {
          "code": "status",
          "valueCode": "active"
        },
        {
          "code": "addedInVersion",
          "valueString": "1.0.0"
        },
        {
          "code": "changedInVersion",
          "valueString": "2.3.0"
        },
        {
          "code": "changeType",
          "valueCode": "updated-display"
        },
        {
          "code": "previousDisplay",
          "valueString": "Glycated Hemoglobin"
        }
      ]
    },
    {
      "code": "OLD-LFT",
      "display": "Liver Function Tests (Legacy)",
      "property": [
        {
          "code": "status",
          "valueCode": "deprecated"
        },
        {
          "code": "addedInVersion",
          "valueString": "1.0.0"
        },
        {
          "code": "deprecatedInVersion",
          "valueString": "2.0.0"
        },
        {
          "code": "replacedBy",
          "valueCode": "LFT-PANEL"
        }
      ]
    }
  ]
}
```

#### Ví dụ thực tế

Quản lý phiên bản hiệu quả giúp:

1. **Khả năng truy vết thay đổi**: Hệ thống có thể hiển thị thông tin về các thay đổi trong định nghĩa mã, như khi "Glycated Hemoglobin" được đổi tên thành "Hemoglobin A1c"
2. **Nâng cấp hệ thống an toàn**: Khi nâng cấp hệ thống bệnh viện, bạn có thể dễ dàng xác định các mã đã thay đổi giữa phiên bản cũ và mới
3. **Hỗ trợ báo cáo lịch sử**: Có thể hiểu chính xác ý nghĩa của mã trong dữ liệu lịch sử, ngay cả khi định nghĩa mã đã thay đổi

### 5. Supplements (Bổ sung)

#### Vấn đề trước đây

Không thể mở rộng các CodeSystem hiện có mà không sửa đổi trực tiếp (đặc biệt là những CodeSystem tiêu chuẩn).

#### Cải tiến trong R5

**Tạo Supplement cho CodeSystem**

```json
{
  "resourceType": "CodeSystem",
  "id": "lab-test-supplement",
  "url": "http://hospital.example.org/fhir/CodeSystem/lab-test-supplement",
  "version": "1.0.0",
  "name": "LabTestSupplement",
  "title": "Bổ sung cho Mã Xét Nghiệm",
  "status": "active",
  "experimental": false,
  "date": "2025-02-20",
  "content": "supplement",
  "supplements": "http://standardorg.example.org/fhir/CodeSystem/standard-lab-tests|4.0.0",
  "concept": [
    {
      "code": "CBC",
      "property": [
        {
          "code": "localCode",
          "valueString": "XN001"
        },
        {
          "code": "cost",
          "valueDecimal": 120000
        },
        {
          "code": "department",
          "valueString": "Hematology"
        }
      ]
    },
    {
      "code": "CMP",
      "designation": [
        {
          "language": "vi",
          "value": "Xét nghiệm hóa sinh cơ bản"
        }
      ],
      "property": [
        {
          "code": "localCode",
          "valueString": "XN057"
        },
        {
          "code": "cost",
          "valueDecimal": 250000
        }
      ]
    }
  ]
}
```

**Bổ sung thông tin riêng cho mã tiêu chuẩn**

```json
{
  "resourceType": "CodeSystem",
  "id": "loinc-vi-translations",
  "url": "http://hospital.example.org/fhir/CodeSystem/loinc-vi-translations",
  "version": "1.0.0",
  "name": "LOINCVietnameseTranslations",
  "title": "Bản dịch tiếng Việt cho LOINC",
  "status": "active",
  "content": "supplement",
  "supplements": "http://loinc.org",
  "concept": [
    {
      "code": "8867-4",
      "designation": [
        {
          "language": "vi",
          "value": "Nhịp tim"
        }
      ]
    },
    {
      "code": "8480-6",
      "designation": [
        {
          "language": "vi",
          "value": "Huyết áp tâm thu"
        }
      ]
    }
  ]
}
```

#### Lợi ích thực tế

1. **Bản địa hóa**: Cung cấp bản dịch tiếng Việt cho các mã LOINC hoặc SNOMED CT mà không cần sửa đổi bộ mã gốc
2. **Thông tin địa phương**: Thêm mã nội bộ, giá thành, và thông tin riêng của bệnh viện vào các mã tiêu chuẩn
3. **Tuân thủ chuẩn**: Sử dụng mã tiêu chuẩn trong khi vẫn đáp ứng nhu cầu cụ thể của tổ chức
4. **Độc lập phiên bản**: Có thể cập nhật thông tin bổ sung mà không ảnh hưởng đến CodeSystem gốc

### Ví dụ thực tế toàn diện

Hãy xem xét trường hợp thực tế của một bệnh viện đang áp dụng FHIR R5:

#### 1. Tạo CodeSystem cho các thủ thuật nội viện

```json
{
  "resourceType": "CodeSystem",
  "id": "hospital-procedures",
  "url": "http://hospital.example.org/fhir/CodeSystem/procedures",
  "version": "1.0.0",
  "name": "HospitalProcedures",
  "title": "Danh mục thủ thuật Bệnh viện Đa khoa",
  "status": "active",
  "description": "Danh sách các thủ thuật thực hiện tại Bệnh viện Đa khoa",
  "content": "complete",
  "hierarchyMeaning": "is-a",
  "property": [
    {
      "code": "department",
      "description": "Khoa thực hiện thủ thuật",
      "type": "string"
    },
    {
      "code": "duration",
      "description": "Thời gian thực hiện trung bình (phút)",
      "type": "integer"
    },
    {
      "code": "risk",
      "description": "Mức độ rủi ro",
      "type": "code",
      "valueSet": "http://hospital.example.org/fhir/ValueSet/risk-levels"
    },
    {
      "code": "anesthesia",
      "description": "Yêu cầu gây mê",
      "type": "boolean"
    }
  ],
  "concept": [
    {
      "code": "PROC-SURG",
      "display": "Thủ thuật Phẫu thuật",
      "concept": [
        {
          "code": "SURG-APP",
          "display": "Phẫu thuật cắt ruột thừa",
          "property": [
            {
              "code": "department",
              "valueString": "Ngoại tổng hợp"
            },
            {
              "code": "duration",
              "valueInteger": 60
            },
            {
              "code": "risk",
              "valueCode": "moderate"
            },
            {
              "code": "anesthesia",
              "valueBoolean": true
            }
          ]
        }
      ]
    },
    {
      "code": "PROC-CARD",
      "display": "Thủ thuật Tim mạch",
      "concept": [
        {
          "code": "CARD-ECHO",
          "display": "Siêu âm tim",
          "property": [
            {
              "code": "department",
              "valueString": "Tim mạch"
            },
            {
              "code": "duration",
              "valueInteger": 30
            },
            {
              "code": "risk",
              "valueCode": "low"
            },
            {
              "code": "anesthesia",
              "valueBoolean": false
            }
          ]
        }
      ]
    }
  ]
}
```

#### 2. Tạo ValueSet cho các thủ thuật tim mạch

```json
{
  "resourceType": "ValueSet",
  "id": "cardiac-procedures",
  "url": "http://hospital.example.org/fhir/ValueSet/cardiac-procedures",
  "version": "1.0.0",
  "name": "CardiacProcedures",
  "title": "Bộ thủ thuật Tim mạch",
  "status": "active",
  "description": "Tất cả các thủ thuật tim mạch được thực hiện tại bệnh viện",
  "compose": {
    "include": [
      {
        "system": "http://hospital.example.org/fhir/CodeSystem/procedures",
        "filter": [
          {
            "property": "department",
            "op": "=",
            "value": "Tim mạch"
          }
        ]
      },
      {
        "system": "http://snomed.info/sct",
        "filter": [
          {
            "property": "concept",
            "op": "is-a",
            "value": "71388002" // Thủ thuật tim mạch
          }
        ]
      }
    ],
    "exclude": [
      {
        "system": "http://hospital.example.org/fhir/CodeSystem/procedures",
        "filter": [
          {
            "property": "status",
            "op": "=",
            "value": "deprecated"
          }
        ]
      }
    ]
  }
}
```

#### 3. Bổ sung thông tin chi phí vào các mã tiêu chuẩn

```json
{
  "resourceType": "CodeSystem",
  "id": "snomed-procedure-costs",
  "url": "http://hospital.example.org/fhir/CodeSystem/snomed-procedure-costs",
  "version": "1.0.0",
  "name": "SnomedProcedureCostSupplement",
  "title": "Thông tin chi phí cho Thủ thuật SNOMED",
  "status": "active",
  "content": "supplement",
  "supplements": "http://snomed.info/sct",
  "property": [
    {
      "code": "cost",
      "description": "Chi phí thủ thuật (VND)",
      "type": "decimal"
    },
    {
      "code": "insuranceCovered",
      "description": "Được bảo hiểm chi trả",
      "type": "boolean"
    }
  ],
  "concept": [
    {
      "code": "73761001", // Colonoscopy
      "property": [
        {
          "code": "cost",
          "valueDecimal": 1500000
        },
        {
          "code": "insuranceCovered",
          "valueBoolean": true
        }
      ]
    },
    {
      "code": "80146002", // Appendectomy
      "property": [
        {
          "code": "cost",
          "valueDecimal": 5000000
        },
        {
          "code": "insuranceCovered",
          "valueBoolean": true
        }
      ]
    }
  ]
}
```

### Kết luận

Những cải tiến trong CodeSystem và ValueSet ở FHIR R5 đã nâng cao đáng kể khả năng quản lý thuật ngữ y tế. Các cải tiến này không chỉ giúp đơn giản hóa việc triển khai hệ thống, mà còn mang lại nhiều lợi ích thiết thực:

* **Dữ liệu chính xác hơn**: Định nghĩa rõ ràng về các mã giúp giảm sai sót trong mã hóa lâm sàng
* **Khả năng tương tác tốt hơn**: Các hệ thống khác nhau có thể hiểu chính xác ý nghĩa của mã
* **Dễ dàng bảo trì**: Quản lý phiên bản tốt hơn giúp việc cập nhật hệ thống trở nên đơn giản
* **Tính linh hoạt cao**: Khả năng mở rộng và tùy chỉnh mà không làm hỏng tính tương thích

Những nâng cấp này là nền tảng quan trọng để xây dựng các hệ thống thông tin y tế hiện đại, hỗ trợ tốt hơn cho việc chăm sóc bệnh nhân và nghiên cứu y khoa.
