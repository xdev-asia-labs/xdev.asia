---
id: bc87e84c-dd49-44c3-8e6e-10a497644d5d
title: 'Conformance Resources in R5'
slug: conformance-resources-in-r5
description: 'Xin chào các bạn! Trong bài viết hôm nay, chúng ta sẽ khám phá về các Conformance Resources (Tài nguyên tuân thủ) trong FHIR R5. Đây là những tài nguyên đóng vai trò quan trọng trong việc định nghĩa cấu trúc, quy tắc và…'
duration_minutes: 26
is_free: true
video_url: null
sort_order: 1
section_title: 'Phần 7: Profiling & Validation trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Xin chào các bạn! Trong bài viết hôm nay, chúng ta sẽ khám phá về các Conformance Resources (Tài nguyên tuân thủ) trong FHIR R5. Đây là những tài nguyên đóng vai trò quan trọng trong việc định nghĩa cấu trúc, quy tắc và ràng buộc cho dữ liệu y tế. Ở phiên bản R5, các tài nguyên này đã được cải tiến đáng kể để hỗ trợ tốt hơn việc triển khai các hệ thống y tế số.

### 1. StructureDefinition: Những cải tiến trong R5

StructureDefinition là tài nguyên cốt lõi để định nghĩa cấu trúc dữ liệu trong FHIR. Nó mô tả các thuộc tính, kiểu dữ liệu và ràng buộc cho các tài nguyên và các thành phần khác.

#### Những cải tiến chính trong R5:

**Cải thiện hỗ trợ cho các loại dữ liệu phức tạp**

Trong R5, StructureDefinition đã được cải tiến để hỗ trợ tốt hơn cho các loại dữ liệu phức tạp, đặc biệt là các loại dữ liệu tổng hợp và các pattern.

**Ví dụ thực tế**: Định nghĩa một cấu trúc cho kết quả xét nghiệm COVID-19

```json
{
  "resourceType": "StructureDefinition",
  "id": "covid19-test-result",
  "url": "http://hospital.vn/fhir/StructureDefinition/covid19-test-result",
  "name": "COVID19TestResult",
  "title": "Kết quả xét nghiệm COVID-19",
  "status": "active",
  "description": "Cấu trúc cho kết quả xét nghiệm COVID-19",
  "fhirVersion": "5.0.0",
  "kind": "resource",
  "abstract": false,
  "type": "Observation",
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Observation",
  "derivation": "constraint",
  "differential": {
    "element": [
      {
        "id": "Observation.code",
        "path": "Observation.code",
        "patternCodeableConcept": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "94500-6",
              "display": "SARS-CoV-2 (COVID-19) RNA [Presence] in Respiratory specimen by NAA with probe detection"
            }
          ]
        }
      },
      {
        "id": "Observation.value[x]",
        "path": "Observation.value[x]",
        "type": [
          {
            "code": "CodeableConcept"
          }
        ],
        "binding": {
          "strength": "required",
          "valueSet": "http://hospital.vn/fhir/ValueSet/covid19-results"
        }
      }
    ]
  }
}
```

**Hỗ trợ tốt hơn cho việc kiểm tra tính hợp lệ**

R5 cải thiện khả năng xác định và áp dụng các ràng buộc phức tạp, giúp kiểm tra tính hợp lệ của dữ liệu tốt hơn.

**Ví dụ thực tế**: Thêm ràng buộc cho phạm vi giá trị huyết áp

```json
{
  "id": "Observation.component.value[x]",
  "path": "Observation.component.value[x]",
  "type": [
    {
      "code": "Quantity"
    }
  ],
  "constraint": [
    {
      "key": "bp-systolic-range",
      "severity": "error",
      "human": "Huyết áp tâm thu phải nằm trong khoảng 50-250 mmHg",
      "expression": "($this is Quantity) and ($this.code = 'mm[Hg]') and ($this.value >= 50 and $this.value <= 250)"
    }
  ]
}
```

**Cải tiến định nghĩa tiêu chí slicing**

Slicing là cơ chế cho phép định nghĩa các ràng buộc khác nhau cho các phần tử lặp lại. Trong R5, việc định nghĩa và sử dụng slicing trở nên dễ dàng và rõ ràng hơn.

**Ví dụ thực tế**: Định nghĩa các loại định danh bệnh nhân khác nhau

```json
{
  "id": "Patient.identifier",
  "path": "Patient.identifier",
  "slicing": {
    "discriminator": [
      {
        "type": "value",
        "path": "system"
      }
    ],
    "ordered": false,
    "rules": "open"
  },
  "min": 1
},
{
  "id": "Patient.identifier:cmnd",
  "path": "Patient.identifier",
  "sliceName": "cmnd",
  "short": "CMND/CCCD",
  "min": 0,
  "max": "1",
  "patternIdentifier": {
    "system": "http://vietnam.gov.vn/id/cmnd"
  }
},
{
  "id": "Patient.identifier:bhyt",
  "path": "Patient.identifier",
  "sliceName": "bhyt",
  "short": "Mã thẻ BHYT",
  "min": 0,
  "max": "1",
  "patternIdentifier": {
    "system": "http://vietnam.gov.vn/id/bhyt"
  }
}
```

#### Áp dụng thực tế của StructureDefinition trong R5

StructureDefinition trong R5 giúp bạn:

1. **Xây dựng mô hình dữ liệu nhất quán**: Định nghĩa cách thức các tài nguyên phải được cấu trúc trong hệ thống của bạn.
2. **Tùy chỉnh FHIR cho ngữ cảnh địa phương**: Điều chỉnh các tài nguyên chuẩn để phù hợp với yêu cầu và quy định của từng quốc gia hoặc tổ chức.
3. **Tạo tài liệu chi tiết**: Tự động tạo tài liệu kỹ thuật để các nhà phát triển hiểu rõ cấu trúc dữ liệu.
4. **Tăng cường chất lượng dữ liệu**: Áp dụng các quy tắc kiểm tra chặt chẽ để đảm bảo dữ liệu nhập vào hệ thống luôn đúng định dạng và hợp lệ.

### 2. ValueSet và CodeSystem: Binding Strength

ValueSet và CodeSystem là hai tài nguyên quan trọng trong FHIR để quản lý bộ mã và thuật ngữ. R5 cải tiến cách sử dụng và quản lý các bộ mã này.

#### CodeSystem: Định nghĩa bộ mã

CodeSystem định nghĩa một tập hợp các mã cùng với ý nghĩa của chúng.

**Ví dụ thực tế**: Định nghĩa bộ mã cho kết quả xét nghiệm COVID-19

```json
{
  "resourceType": "CodeSystem",
  "id": "covid19-test-codes",
  "url": "http://hospital.vn/fhir/CodeSystem/covid19-test-codes",
  "name": "COVID19TestCodes",
  "title": "Bộ mã kết quả xét nghiệm COVID-19",
  "status": "active",
  "content": "complete",
  "concept": [
    {
      "code": "positive",
      "display": "Dương tính",
      "definition": "Xét nghiệm dương tính với SARS-CoV-2"
    },
    {
      "code": "negative",
      "display": "Âm tính",
      "definition": "Xét nghiệm âm tính với SARS-CoV-2"
    },
    {
      "code": "inconclusive",
      "display": "Không xác định",
      "definition": "Kết quả xét nghiệm không xác định"
    }
  ]
}
```

#### ValueSet: Tập hợp các mã có thể sử dụng

ValueSet xác định một tập hợp các mã từ một hoặc nhiều CodeSystem mà có thể được sử dụng trong ngữ cảnh cụ thể.

**Ví dụ thực tế**: Tạo ValueSet cho các kết quả xét nghiệm COVID-19

```json
{
  "resourceType": "ValueSet",
  "id": "covid19-results",
  "url": "http://hospital.vn/fhir/ValueSet/covid19-results",
  "name": "COVID19Results",
  "title": "Các kết quả xét nghiệm COVID-19",
  "status": "active",
  "description": "Các giá trị hợp lệ cho kết quả xét nghiệm COVID-19",
  "compose": {
    "include": [
      {
        "system": "http://hospital.vn/fhir/CodeSystem/covid19-test-codes"
      },
      {
        "system": "http://snomed.info/sct",
        "concept": [
          {
            "code": "260385009",
            "display": "Negative"
          },
          {
            "code": "10828004",
            "display": "Positive"
          }
        ]
      }
    ]
  }
}
```

#### Binding Strength trong R5

Binding strength (độ mạnh ràng buộc) xác định mức độ bắt buộc tuân thủ một ValueSet khi sử dụng các trường dữ liệu. R5 cải tiến độ rõ ràng và linh hoạt của binding strength.

Các mức độ binding strength:

1. **Required (Bắt buộc)**: Phải sử dụng mã từ ValueSet được chỉ định.
2. **Extensible (Mở rộng)**: Nên sử dụng mã từ ValueSet, nhưng có thể sử dụng mã khác nếu không tìm thấy mã phù hợp.
3. **Preferred (Ưu tiên)**: Khuyến khích sử dụng mã từ ValueSet.
4. **Example (Ví dụ)**: Đề xuất một số mã, nhưng không bắt buộc.

**Ví dụ thực tế**: Ràng buộc cho loại xét nghiệm COVID-19

```json
{
  "id": "Observation.code",
  "path": "Observation.code",
  "binding": {
    "strength": "extensible",
    "description": "Loại xét nghiệm COVID-19",
    "valueSet": "http://hospital.vn/fhir/ValueSet/covid19-test-types"
  }
}
```

#### Cải tiến về Subsumption và Membership testing

R5 cải thiện khả năng kiểm tra một mã có nằm trong một ValueSet hay không, bao gồm cả việc kiểm tra mối quan hệ phân cấp giữa các mã.

**Ví dụ**: Kiểm tra mã "J18.9" (Viêm phổi không xác định) có thuộc nhóm bệnh hô hấp không:

```
GET /ValueSet/respiratory-diseases/$validate-code?code=J18.9&system=http://hl7.org/fhir/sid/icd-10
```

### 3. ConceptMap với Improved Mapping Capabilities

ConceptMap định nghĩa cách ánh xạ giữa các mã trong các hệ thống mã khác nhau. R5 nâng cao khả năng ánh xạ và biến đổi dữ liệu.

#### Những cải tiến trong R5:

**Hỗ trợ ánh xạ phức tạp**

R5 mở rộng khả năng ánh xạ, cho phép xử lý các trường hợp phức tạp hơn như ánh xạ một-nhiều, nhiều-một và ánh xạ có điều kiện.

**Ví dụ thực tế**: Ánh xạ giữa mã ICD-10 và SNOMED CT cho bệnh tiểu đường

```json
{
  "resourceType": "ConceptMap",
  "id": "icd10-to-snomed-diabetes",
  "url": "http://hospital.vn/fhir/ConceptMap/icd10-to-snomed-diabetes",
  "name": "ICD10ToSNOMEDDiabetes",
  "title": "Ánh xạ mã ICD-10 sang SNOMED CT cho bệnh tiểu đường",
  "status": "active",
  "sourceCanonical": "http://hospital.vn/fhir/ValueSet/icd10-diabetes-codes",
  "targetCanonical": "http://hospital.vn/fhir/ValueSet/snomed-diabetes-codes",
  "group": [
    {
      "source": "http://hl7.org/fhir/sid/icd-10",
      "target": "http://snomed.info/sct",
      "element": [
        {
          "code": "E11",
          "display": "Đái tháo đường type 2",
          "target": [
            {
              "code": "44054006",
              "display": "Diabetes mellitus type 2",
              "equivalence": "equivalent"
            }
          ]
        },
        {
          "code": "E10",
          "display": "Đái tháo đường type 1",
          "target": [
            {
              "code": "46635009",
              "display": "Diabetes mellitus type 1",
              "equivalence": "equivalent"
            }
          ]
        },
        {
          "code": "E13",
          "display": "Đái tháo đường không xác định",
          "target": [
            {
              "code": "73211009",
              "display": "Diabetes mellitus",
              "equivalence": "wider"
            }
          ]
        }
      ]
    }
  ]
}
```

**Cải thiện thuộc tính equivalence**

R5 làm rõ hơn các mức độ tương đương khi ánh xạ các khái niệm:

* **equivalent**: Hai mã hoàn toàn tương đương
* **wider**: Mã đích rộng hơn (bao quát) mã nguồn
* **narrower**: Mã đích hẹp hơn (cụ thể hơn) mã nguồn
* **inexact**: Có sự tương đương một phần
* **unmatched**: Không có mã tương đương

**Hỗ trợ biến đổi dữ liệu**

R5 cải thiện khả năng chuyển đổi dữ liệu từ định dạng này sang định dạng khác, không chỉ đơn thuần là ánh xạ mã.

**Ví dụ thực tế**: Ánh xạ và chuyển đổi đơn vị đo lường

```json
{
  "resourceType": "ConceptMap",
  "id": "unit-conversion",
  "url": "http://hospital.vn/fhir/ConceptMap/unit-conversion",
  "name": "UnitConversion",
  "status": "active",
  "group": [
    {
      "source": "http://unitsofmeasure.org",
      "target": "http://unitsofmeasure.org",
      "element": [
        {
          "code": "mg/dL",
          "display": "mg/dL",
          "target": [
            {
              "code": "mmol/L",
              "display": "mmol/L",
              "equivalence": "equivalent",
              "comment": "Đối với glucose: mmol/L = mg/dL * 0.0555",
              "property": [
                {
                  "code": "formula",
                  "value": "source * 0.0555"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

#### Ứng dụng thực tế của ConceptMap trong R5

ConceptMap trong R5 giúp bạn:

1. **Hợp nhất dữ liệu từ nhiều nguồn**: Xử lý dữ liệu từ các hệ thống khác nhau sử dụng các bộ mã khác nhau.
2. **Hỗ trợ báo cáo và phân tích**: Chuyển đổi mã cho các mục đích báo cáo cụ thể.
3. **Tương thích với các tiêu chuẩn quốc tế**: Ánh xạ mã địa phương sang các bộ mã quốc tế.
4. **Lưu giữ ngữ nghĩa dữ liệu**: Đảm bảo ý nghĩa của dữ liệu được bảo toàn khi chuyển đổi.

### 4. Implementation Guide Resources

Implementation Guide (Hướng dẫn triển khai) là tài nguyên giúp định nghĩa cách triển khai FHIR trong một ngữ cảnh cụ thể. R5 cải tiến đáng kể các tài nguyên liên quan đến việc tạo và quản lý các hướng dẫn triển khai.

#### Các tài nguyên chính:

**ImplementationGuide**

Tài nguyên này mô tả một hướng dẫn triển khai FHIR, xác định các tài nguyên, cấu trúc, và quy tắc được sử dụng.

**Ví dụ thực tế**: Hướng dẫn triển khai FHIR cho hệ thống EMR Việt Nam

```json
{
  "resourceType": "ImplementationGuide",
  "id": "vietnam-emr-guide",
  "url": "http://health.gov.vn/fhir/ImplementationGuide/vietnam-emr",
  "version": "1.0.0",
  "name": "VietnamEMRGuide",
  "title": "Hướng dẫn triển khai hệ thống EMR Việt Nam",
  "status": "draft",
  "date": "2023-06-15",
  "publisher": "Bộ Y tế Việt Nam",
  "description": "Hướng dẫn triển khai FHIR cho hệ thống hồ sơ y tế điện tử tại Việt Nam",
  "packageId": "vietnam.gov.health.emr",
  "fhirVersion": ["5.0.0"],
  "definition": {
    "resource": [
      {
        "reference": {
          "reference": "StructureDefinition/vn-patient"
        },
        "name": "Vietnam Patient Profile",
        "description": "Hồ sơ bệnh nhân Việt Nam",
        "exampleBoolean": false
      },
      {
        "reference": {
          "reference": "ValueSet/vn-ethnicity"
        },
        "name": "Vietnam Ethnicity Codes",
        "description": "Bộ mã dân tộc Việt Nam",
        "exampleBoolean": false
      }
    ],
    "page": {
      "nameUrl": "index.html",
      "title": "Trang chủ",
      "generation": "html",
      "page": [
        {
          "nameUrl": "profiles.html",
          "title": "Các hồ sơ",
          "generation": "html"
        },
        {
          "nameUrl": "extensions.html",
          "title": "Các phần mở rộng",
          "generation": "html"
        }
      ]
    }
  }
}
```

**Tài nguyên hỗ trợ trong R5**

R5 bổ sung hoặc cải tiến các tài nguyên hỗ trợ việc xây dựng hướng dẫn triển khai:

* **ImplementationGuide-manifest**: Quản lý các tệp và tài nguyên trong hướng dẫn triển khai
* **ImplementationGuide-resource**: Định nghĩa cách sử dụng các tài nguyên FHIR
* **ImplementationGuide-page**: Tổ chức trang tài liệu

#### Cải tiến trong R5:

**Hỗ trợ tốt hơn cho tài liệu mở rộng**

R5 cải thiện khả năng tạo và quản lý tài liệu trong Implementation Guide, hỗ trợ nhiều định dạng và cấu trúc hơn.

**Cải thiện quản lý phụ thuộc**

R5 cho phép quản lý tốt hơn các phụ thuộc giữa các Implementation Guide, cho phép kế thừa và mở rộng từ các hướng dẫn khác.

```json
"dependsOn": [
  {
    "uri": "http://hl7.org/fhir/uv/ips/ImplementationGuide/hl7.fhir.uv.ips",
    "packageId": "hl7.fhir.uv.ips",
    "version": "1.0.0"
  }
]
```

**Hỗ trợ kiểm thử và xác thực**

R5 cải thiện khả năng định nghĩa và chạy kiểm thử để xác thực việc triển khai tuân thủ hướng dẫn.

#### Ứng dụng thực tế của Implementation Guide trong R5

Implementation Guide trong R5 giúp bạn:

1. **Tạo tài liệu toàn diện**: Xây dựng tài liệu hướng dẫn triển khai FHIR theo ngữ cảnh cụ thể.
2. **Định nghĩa quy tắc tuân thủ**: Xác định cách thức tuân thủ FHIR trong một lĩnh vực hoặc quốc gia.
3. **Quản lý và phân phối cấu hình**: Đóng gói và phân phối các cấu hình FHIR để triển khai nhất quán.
4. **Xác thực triển khai**: Kiểm tra việc triển khai có tuân thủ các quy tắc định nghĩa không.

### 5. CapabilityStatement R5 Improvements

CapabilityStatement trong R5 được cải tiến đáng kể để mô tả tốt hơn các khả năng của hệ thống FHIR.

#### Những cải tiến chính trong R5:

**Cải thiện mô tả chi tiết về việc hỗ trợ tài nguyên**

R5 cho phép mô tả chi tiết hơn các thao tác và khả năng được hỗ trợ cho từng loại tài nguyên.

**Ví dụ thực tế**: Mô tả chi tiết khả năng với tài nguyên Patient

```json
{
  "resourceType": "CapabilityStatement",
  "id": "hospital-fhir-api",
  "url": "http://hospital.vn/fhir/CapabilityStatement/hospital-api",
  "name": "HospitalAPICapabilities",
  "title": "Khả năng API FHIR của Bệnh viện",
  "status": "active",
  "date": "2023-06-15",
  "fhirVersion": "5.0.0",
  "format": ["application/fhir+json", "application/fhir+xml"],
  "rest": [
    {
      "mode": "server",
      "documentation": "API FHIR của Bệnh viện Đa khoa",
      "security": {
        "cors": true,
        "service": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/restful-security-service",
                "code": "SMART-on-FHIR"
              }
            ]
          }
        ],
        "description": "Xác thực thông qua OAuth2 với SMART on FHIR"
      },
      "resource": [
        {
          "type": "Patient",
          "supportedProfile": [
            "http://hospital.vn/fhir/StructureDefinition/vn-patient"
          ],
          "documentation": "Quản lý thông tin bệnh nhân",
          "interaction": [
            {
              "code": "read"
            },
            {
              "code": "vread"
            },
            {
              "code": "update"
            },
            {
              "code": "patch"
            },
            {
              "code": "create"
            },
            {
              "code": "search-type"
            }
          ],
          "versioning": "versioned",
          "readHistory": true,
          "updateCreate": false,
          "conditionalCreate": true,
          "conditionalUpdate": true,
          "searchInclude": ["Patient:organization", "Patient:link"],
          "searchParam": [
            {
              "name": "name",
              "type": "string",
              "documentation": "Tìm theo tên bệnh nhân (hỗ trợ tìm kiếm không dấu)"
            },
            {
              "name": "identifier",
              "type": "token",
              "documentation": "Tìm theo CMND/CCCD hoặc Mã bệnh nhân"
            },
            {
              "name": "birthdate",
              "type": "date",
              "documentation": "Tìm theo ngày sinh"
            }
          ],
          "operation": [
            {
              "name": "merge",
              "definition": "http://hospital.vn/fhir/OperationDefinition/patient-merge",
              "documentation": "Gộp hai hồ sơ bệnh nhân trùng lặp"
            }
          ]
        }
      ],
      "interaction": [
        {
          "code": "transaction"
        },
        {
          "code": "batch"
        },
        {
          "code": "search-system"
        }
      ]
    }
  ],
  "messaging": [
    {
      "endpoint": [
        {
          "protocol": {
            "system": "http://terminology.hl7.org/CodeSystem/message-transport",
            "code": "websocket"
          },
          "address": "wss://hospital.vn/fhir/messaging"
        }
      ],
      "reliableCache": 30,
      "documentation": "Hỗ trợ thông báo theo thời gian thực qua WebSocket",
      "supportedMessage": [
        {
          "mode": "receiver",
          "definition": "http://hospital.vn/fhir/MessageDefinition/patient-admit"
        },
        {
          "mode": "sender",
          "definition": "http://hospital.vn/fhir/MessageDefinition/lab-result-available"
        }
      ]
    }
  ]
}
```

**Hỗ trợ tốt hơn cho SMART on FHIR và RESTful API**

R5 cải thiện khả năng mô tả các cơ chế xác thực và ủy quyền, đặc biệt là SMART on FHIR.

```json
"rest": [
  {
    "mode": "server",
    "security": {
      "description": "SMART on FHIR OAuth 2.0",
      "extension": [
        {
          "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris",
          "extension": [
            {
              "url": "authorize",
              "valueUri": "https://hospital.vn/oauth/authorize"
            },
            {
              "url": "token",
              "valueUri": "https://hospital.vn/oauth/token"
            }
          ]
        }
      ],
      "service": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/restful-security-service",
              "code": "SMART-on-FHIR"
            }
          ]
        }
      ]
    }
  }
]
```

**Mô tả tốt hơn về các hoạt động (operations)**

R5 cải thiện cách mô tả các hoạt động tùy chỉnh, cung cấp thông tin chi tiết hơn về tham số và hành vi.

```json
"operation": [
  {
    "name": "export",
    "definition": "http://hl7.org/fhir/OperationDefinition/export",
    "documentation": "Xuất dữ liệu bệnh nhân theo SMART Bulk Data"
  },
  {
    "name": "process-message",
    "definition": "http://hl7.org/fhir/OperationDefinition/MessageHeader-process-message",
    "documentation": "Xử lý tin nhắn FHIR"
  },
  {
    "name": "find-matches",
    "definition": "http://hospital.vn/fhir/OperationDefinition/find-matches",
    "documentation": "Tìm kiếm hồ sơ bệnh nhân có thể trùng lặp"
  }
]
```

**Hỗ trợ GraphQL**

R5 thêm khả năng mô tả hỗ trợ GraphQL, giúp các hệ thống hiểu rõ hơn về khả năng truy vấn dữ liệu qua GraphQL.

```json
"graphQL": true,
"graphQLSchema": "type Query { Patient(id: ID): Patient }",
"graphQLEndpoint": "https://hospital.vn/fhir/graphql"
```

**Cải tiến mô tả khả năng tìm kiếm**

R5 cho phép mô tả chi tiết hơn các khả năng tìm kiếm, bao gồm cả các tham số tìm kiếm tùy chỉnh và hành vi.

```json
"searchParam": [
  {
    "name": "fulltext",
    "type": "string",
    "documentation": "Tìm kiếm toàn văn trong các trường của bệnh nhân",
    "extension": [
      {
        "url": "http://hospital.vn/fhir/StructureDefinition/search-modifier-support",
        "valueCode": "contains"
      }
    ]
  },
  {
    "name": "program",
    "definition": "http://hospital.vn/fhir/SearchParameter/patient-program",
    "type": "token",
    "documentation": "Tìm bệnh nhân theo chương trình y tế đã tham gia"
  }
]
```

#### Ứng dụng thực tế của CapabilityStatement trong R5

CapabilityStatement trong R5 giúp bạn:

1. **Tạo tài liệu API chi tiết**: Mô tả đầy đủ các khả năng API để các nhà phát triển dễ dàng tích hợp.
2. **Phát hiện dịch vụ tự động**: Cho phép các ứng dụng tự động phát hiện và thích ứng với các khả năng của server.
3. **Xác thực tuân thủ**: Kiểm tra xem một triển khai có tuân thủ các yêu cầu về khả năng không.
4. **Tài liệu hỗ trợ kỹ thuật**: Cung cấp tài liệu kỹ thuật chi tiết cho nhóm phát triển và người dùng.

### Ví dụ ứng dụng thực tế

#### Kịch bản: Xây dựng hệ thống EMR (Electronic Medical Record) tại Việt Nam

Giả sử bạn đang xây dựng một hệ thống EMR phù hợp với bối cảnh Việt Nam. Dưới đây là cách áp dụng các Conformance Resources:

**1. Xác định cấu trúc dữ liệu phù hợp với ngữ cảnh địa phương**

Sử dụng **StructureDefinition** để định nghĩa các tài nguyên FHIR phù hợp với quy định và luật pháp Việt Nam:

```json
{
  "resourceType": "StructureDefinition",
  "id": "vn-patient",
  "url": "http://health.gov.vn/fhir/StructureDefinition/vn-patient",
  "name": "VNPatient",
  "title": "Hồ sơ bệnh nhân Việt Nam",
  "status": "active",
  "description": "Hồ sơ bệnh nhân FHIR phù hợp với quy định của Việt Nam",
  "fhirVersion": "5.0.0",
  "kind": "resource",
  "abstract": false,
  "type": "Patient",
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Patient",
  "derivation": "constraint",
  "differential": {
    "element": [
      {
        "id": "Patient.identifier",
        "path": "Patient.identifier",
        "slicing": {
          "discriminator": [
            {
              "type": "value",
              "path": "system"
            }
          ],
          "ordered": false,
          "rules": "open"
        },
        "min": 1
      },
      {
        "id": "Patient.identifier:cmnd",
        "path": "Patient.identifier",
        "sliceName": "cmnd",
        "min": 0,
        "max": "1",
        "patternIdentifier": {
          "system": "http://vietnam.gov.vn/id/cmnd"
        }
      },
      {
        "id": "Patient.identifier:bhyt",
        "path": "Patient.identifier",
        "sliceName": "bhyt",
        "min": 0,
        "max": "1",
        "patternIdentifier": {
          "system": "http://vietnam.gov.vn/id/bhyt"
        }
      },
      {
        "id": "Patient.extension:ethnicity",
        "path": "Patient.extension",
        "sliceName": "ethnicity",
        "min": 0,
        "max": "1",
        "type": [
          {
            "code": "Extension",
            "profile": ["http://health.gov.vn/fhir/StructureDefinition/vn-ethnicity"]
          }
        ]
      }
    ]
  }
}
```

**2. Định nghĩa bộ mã địa phương**

Sử dụng **CodeSystem** và **ValueSet** để định nghĩa các bộ mã đặc thù của Việt Nam:

```json
{
  "resourceType": "CodeSystem",
  "id": "vn-ethnicity-codes",
  "url": "http://health.gov.vn/fhir/CodeSystem/vn-ethnicity-codes",
  "name": "VNEthnicityCodes",
  "title": "Mã dân tộc Việt Nam",
  "status": "active",
  "content": "complete",
  "concept": [
    {
      "code": "kinh",
      "display": "Kinh"
    },
    {
      "code": "tay",
      "display": "Tày"
    },
    {
      "code": "thai",
      "display": "Thái"
    },
    {
      "code": "hoa",
      "display": "Hoa"
    },
    {
      "code": "khmer",
      "display": "Khmer"
    }
  ]
}
```

```json
{
  "resourceType": "ValueSet",
  "id": "vn-ethnicity",
  "url": "http://health.gov.vn/fhir/ValueSet/vn-ethnicity",
  "name": "VNEthnicity",
  "title": "Bộ mã dân tộc Việt Nam",
  "status": "active",
  "compose": {
    "include": [
      {
        "system": "http://health.gov.vn/fhir/CodeSystem/vn-ethnicity-codes"
      }
    ]
  }
}
```

**3. Ánh xạ mã địa phương với mã quốc tế**

Sử dụng **ConceptMap** để ánh xạ giữa mã địa phương và mã quốc tế:

```json
{
  "resourceType": "ConceptMap",
  "id": "vn-to-international-diagnosis",
  "url": "http://health.gov.vn/fhir/ConceptMap/vn-to-international-diagnosis",
  "name": "VNToInternationalDiagnosis",
  "title": "Ánh xạ từ mã bệnh Việt Nam sang mã quốc tế",
  "status": "active",
  "sourceCanonical": "http://health.gov.vn/fhir/ValueSet/vn-diagnosis-codes",
  "targetCanonical": "http://terminology.hl7.org/ValueSet/icd10",
  "group": [
    {
      "source": "http://health.gov.vn/fhir/CodeSystem/vn-diagnosis-codes",
      "target": "http://hl7.org/fhir/sid/icd-10",
      "element": [
        {
          "code": "VN001",
          "display": "Sốt xuất huyết Dengue",
          "target": [
            {
              "code": "A90",
              "display": "Dengue fever",
              "equivalence": "equivalent"
            }
          ]
        },
        {
          "code": "VN002",
          "display": "Viêm gan siêu vi B",
          "target": [
            {
              "code": "B16",
              "display": "Acute hepatitis B",
              "equivalence": "equivalent"
            }
          ]
        }
      ]
    }
  ]
}
```

**4. Tạo hướng dẫn triển khai quốc gia**

Sử dụng **ImplementationGuide** để tạo và quản lý hướng dẫn triển khai FHIR ở Việt Nam:

```json
{
  "resourceType": "ImplementationGuide",
  "id": "vietnam-emr-guide",
  "url": "http://health.gov.vn/fhir/ImplementationGuide/vietnam-emr",
  "version": "1.0.0",
  "name": "VietnamEMRGuide",
  "title": "Hướng dẫn triển khai hệ thống EMR Việt Nam",
  "status": "draft",
  "description": "Hướng dẫn triển khai FHIR cho hệ thống hồ sơ y tế điện tử tại Việt Nam",
  "packageId": "vietnam.gov.health.emr",
  "fhirVersion": ["5.0.0"],
  "definition": {
    "resource": [
      {
        "reference": {
          "reference": "StructureDefinition/vn-patient"
        },
        "name": "Vietnam Patient Profile",
        "description": "Hồ sơ bệnh nhân Việt Nam",
        "exampleBoolean": false
      },
      {
        "reference": {
          "reference": "StructureDefinition/vn-immunization"
        },
        "name": "Vietnam Immunization Profile",
        "description": "Hồ sơ tiêm chủng Việt Nam",
        "exampleBoolean": false
      },
      {
        "reference": {
          "reference": "ValueSet/vn-ethnicity"
        },
        "name": "Vietnam Ethnicity Codes",
        "description": "Bộ mã dân tộc Việt Nam",
        "exampleBoolean": false
      }
    ],
    "page": {
      "nameUrl": "index.html",
      "title": "Trang chủ",
      "generation": "html",
      "page": [
        {
          "nameUrl": "profiles.html",
          "title": "Các hồ sơ",
          "generation": "html"
        },
        {
          "nameUrl": "extensions.html",
          "title": "Các phần mở rộng",
          "generation": "html"
        },
        {
          "nameUrl": "terminology.html",
          "title": "Thuật ngữ",
          "generation": "html"
        }
      ]
    }
  }
}
```

**5. Mô tả khả năng của hệ thống EMR**

Sử dụng **CapabilityStatement** để mô tả các khả năng của hệ thống EMR:

```json
{
  "resourceType": "CapabilityStatement",
  "id": "vietnam-emr-capabilities",
  "url": "http://health.gov.vn/fhir/CapabilityStatement/vietnam-emr",
  "name": "VietnamEMRCapabilities",
  "title": "Khả năng của hệ thống EMR Việt Nam",
  "status": "active",
  "date": "2023-06-15",
  "publisher": "Bộ Y tế Việt Nam",
  "description": "Mô tả khả năng FHIR của hệ thống EMR theo quy định của Việt Nam",
  "kind": "requirements",
  "fhirVersion": "5.0.0",
  "format": ["application/fhir+json", "application/fhir+xml"],
  "rest": [
    {
      "mode": "server",
      "documentation": "API FHIR của hệ thống EMR Việt Nam",
      "security": {
        "cors": true,
        "service": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/restful-security-service",
                "code": "SMART-on-FHIR"
              }
            ]
          }
        ]
      },
      "resource": [
        {
          "type": "Patient",
          "supportedProfile": [
            "http://health.gov.vn/fhir/StructureDefinition/vn-patient"
          ],
          "interaction": [
            { "code": "read" },
            { "code": "create" },
            { "code": "update" },
            { "code": "search-type" }
          ],
          "searchParam": [
            {
              "name": "identifier",
              "type": "token",
              "documentation": "Tìm kiếm theo CMND/CCCD hoặc mã thẻ BHYT"
            },
            {
              "name": "name",
              "type": "string",
              "documentation": "Tìm kiếm theo họ tên bệnh nhân"
            }
          ]
        },
        {
          "type": "Encounter",
          "supportedProfile": [
            "http://health.gov.vn/fhir/StructureDefinition/vn-encounter"
          ],
          "interaction": [
            { "code": "read" },
            { "code": "create" },
            { "code": "update" },
            { "code": "search-type" }
          ]
        },
        {
          "type": "MedicationRequest",
          "supportedProfile": [
            "http://health.gov.vn/fhir/StructureDefinition/vn-prescription"
          ],
          "interaction": [
            { "code": "read" },
            { "code": "create" },
            { "code": "search-type" }
          ]
        },
        {
          "type": "Observation",
          "supportedProfile": [
            "http://health.gov.vn/fhir/StructureDefinition/vn-vital-signs"
          ],
          "interaction": [
            { "code": "read" },
            { "code": "create" },
            { "code": "search-type" }
          ]
        },
        {
          "type": "Immunization",
          "supportedProfile": [
            "http://health.gov.vn/fhir/StructureDefinition/vn-immunization"
          ],
          "interaction": [
            { "code": "read" },
            { "code": "create" },
            { "code": "search-type" }
          ]
        }
      ]
    }
  ]
}
```

#### Quy trình triển khai

1. **Định nghĩa cấu trúc dữ liệu**: Sử dụng StructureDefinition để tạo các hồ sơ (profiles) phù hợp.
2. **Xây dựng bộ mã thuật ngữ**: Định nghĩa các CodeSystem và ValueSet cần thiết.
3. **Ánh xạ với tiêu chuẩn quốc tế**: Tạo ConceptMap để kết nối với các hệ thống mã quốc tế.
4. **Tạo hướng dẫn triển khai**: Tổng hợp thành ImplementationGuide để hướng dẫn triển khai.
5. **Xác định yêu cầu giao diện API**: Sử dụng CapabilityStatement để mô tả khả năng API cần có.

### Kết luận

Các Conformance Resources trong FHIR R5 cung cấp nền tảng vững chắc để tuân thủ, mở rộng và triển khai các hệ thống y tế số. Với những cải tiến trong R5, các tài nguyên này trở nên linh hoạt, chi tiết và mạnh mẽ hơn, giúp xây dựng các hệ thống y tế số hiệu quả và tương thích.

Khi triển khai FHIR trong bối cảnh Việt Nam, các Conformance Resources cho phép chúng ta điều chỉnh tiêu chuẩn quốc tế để phù hợp với yêu cầu địa phương, đồng thời vẫn duy trì khả năng tương tác với các hệ thống toàn cầu.

Bằng cách sử dụng hiệu quả các tài nguyên như StructureDefinition, ValueSet, CodeSystem, ConceptMap, ImplementationGuide và CapabilityStatement, chúng ta có thể xây dựng các hệ thống y tế số tuân thủ tiêu chuẩn, linh hoạt và bền vững.
