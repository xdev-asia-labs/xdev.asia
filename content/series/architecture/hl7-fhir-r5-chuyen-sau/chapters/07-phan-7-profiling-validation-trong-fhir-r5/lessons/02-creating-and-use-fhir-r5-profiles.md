---
id: e232efbc-df95-4058-ab53-2bb1a3c42569
title: 'Creating & Use FHIR R5 Profiles'
slug: creating-and-use-fhir-r5-profiles
description: 'Xin chào các bạn! Trong bài viết này, chúng ta sẽ tìm hiểu cách tạo và sử dụng FHIR Profiles trong phiên bản R5. Đây là công cụ mạnh mẽ giúp bạn tùy chỉnh tài nguyên FHIR phù hợp với nhu cầu riêng, đồng thời vẫn tuân…'
duration_minutes: 23
is_free: true
video_url: null
sort_order: 2
section_title: 'Phần 7: Profiling & Validation trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Xin chào các bạn! Trong bài viết này, chúng ta sẽ tìm hiểu cách tạo và sử dụng FHIR Profiles trong phiên bản R5. Đây là công cụ mạnh mẽ giúp bạn tùy chỉnh tài nguyên FHIR phù hợp với nhu cầu riêng, đồng thời vẫn tuân thủ tiêu chuẩn.

### FHIR Profiles là gì?

FHIR Profiles (hay còn gọi là hồ sơ FHIR) là cách để tùy chỉnh định nghĩa tài nguyên FHIR chuẩn cho phù hợp với ngữ cảnh cụ thể. Chúng cho phép bạn:

* Thêm ràng buộc vào các phần tử
* Mô tả các phần tử bắt buộc hỗ trợ
* Tùy chỉnh và mở rộng cấu trúc
* Đảm bảo tính nhất quán của dữ liệu

### 1. Constraining Resources (Ràng buộc tài nguyên)

Ràng buộc tài nguyên là quá trình áp dụng các giới hạn lên tài nguyên FHIR chuẩn để phù hợp với nhu cầu riêng.

#### Các loại ràng buộc phổ biến:

**Thay đổi độ bắt buộc (cardinality)**

Bạn có thể thay đổi số lần xuất hiện tối thiểu (min) và tối đa (max) của một phần tử.

**Ví dụ**: Ràng buộc trường name của Patient là bắt buộc

```json
{
  "id": "Patient.name",
  "path": "Patient.name",
  "min": 1,
  "max": "*"
}
```

**Giới hạn kiểu dữ liệu**

**Ví dụ**: Giới hạn trường value\[x] của Observation chỉ chấp nhận kiểu Quantity

```json
{
  "id": "Observation.value[x]",
  "path": "Observation.value[x]",
  "type": [
    {
      "code": "Quantity"
    }
  ]
}
```

**Giá trị cố định hoặc mẫu (fixed/pattern)**

**Ví dụ**: Thiết lập mã cố định cho Observation về huyết áp

```json
{
  "id": "Observation.code",
  "path": "Observation.code",
  "patternCodeableConcept": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "85354-9",
        "display": "Blood pressure panel with all children optional"
      }
    ]
  }
}
```

**Ràng buộc giá trị hợp lệ**

**Ví dụ**: Ràng buộc trạng thái Encounter chỉ chấp nhận một số giá trị cụ thể

```json
{
  "id": "Encounter.status",
  "path": "Encounter.status",
  "binding": {
    "strength": "required",
    "valueSet": "http://example.org/fhir/ValueSet/restricted-encounter-status"
  }
}
```

#### Ví dụ thực tế: Profile cho bệnh nhân Việt Nam

```json
{
  "resourceType": "StructureDefinition",
  "id": "vn-patient",
  "url": "http://example.org/fhir/StructureDefinition/vn-patient",
  "name": "VietnamPatientProfile",
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
        "id": "Patient.name",
        "path": "Patient.name",
        "min": 1,
        "comment": "Tên bệnh nhân là bắt buộc trong hệ thống của Việt Nam"
      },
      {
        "id": "Patient.gender",
        "path": "Patient.gender",
        "min": 1,
        "comment": "Giới tính là bắt buộc trong hệ thống của Việt Nam"
      },
      {
        "id": "Patient.birthDate",
        "path": "Patient.birthDate",
        "min": 1,
        "comment": "Ngày sinh là bắt buộc trong hệ thống của Việt Nam"
      }
    ]
  }
}
```

### 2. Must-Support Elements (Phần tử phải hỗ trợ)

Must-Support là một khái niệm quan trọng trong FHIR Profiles. Nó xác định các phần tử mà hệ thống triển khai phải hiểu và xử lý được, mặc dù chúng có thể không bắt buộc phải có.

#### Ý nghĩa của Must-Support:

* Các hệ thống phải hiểu ngữ nghĩa của phần tử
* Các hệ thống phải có khả năng lưu trữ và truy xuất giá trị
* Các hệ thống phải có khả năng hiển thị giá trị cho người dùng
* Các hệ thống không được bỏ qua dữ liệu này

#### Cách xác định phần tử Must-Support:

```json
{
  "id": "Patient.address",
  "path": "Patient.address",
  "mustSupport": true,
  "comment": "Các hệ thống phải hỗ trợ địa chỉ bệnh nhân"
}
```

#### Ví dụ thực tế: Profile cho kết quả xét nghiệm COVID-19

```json
{
  "resourceType": "StructureDefinition",
  "id": "covid19-test-result",
  "url": "http://example.org/fhir/StructureDefinition/covid19-test-result",
  "name": "COVID19TestResult",
  "title": "Kết quả xét nghiệm COVID-19",
  "status": "active",
  "description": "Hồ sơ cho kết quả xét nghiệm COVID-19",
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
        "mustSupport": true,
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
        "mustSupport": true,
        "type": [
          {
            "code": "CodeableConcept"
          }
        ]
      },
      {
        "id": "Observation.effectiveDateTime",
        "path": "Observation.effectiveDateTime",
        "mustSupport": true,
        "min": 1
      },
      {
        "id": "Observation.performer",
        "path": "Observation.performer",
        "mustSupport": true,
        "min": 1
      }
    ]
  }
}
```

### 3. Slicing and Discriminators (Phân lớp và bộ phân biệt)

Slicing là cơ chế cho phép bạn xác định cách xử lý các phần tử lặp lại khác nhau. Slicing đặc biệt hữu ích khi bạn muốn áp dụng các ràng buộc khác nhau cho các phần tử cùng loại.

#### Các loại Discriminators:

* **value**: So sánh giá trị của phần tử
* **exists**: Kiểm tra sự tồn tại của phần tử
* **pattern**: Kiểm tra mẫu của phần tử
* **type**: Kiểm tra kiểu của phần tử
* **profile**: Kiểm tra profile của phần tử

#### Ví dụ thực tế: Phân lớp các loại định danh bệnh nhân

```json
{
  "resourceType": "StructureDefinition",
  "id": "vn-patient-identifiers",
  "url": "http://example.org/fhir/StructureDefinition/vn-patient-identifiers",
  "name": "VietnamPatientIdentifiers",
  "title": "Định danh bệnh nhân Việt Nam",
  "status": "active",
  "description": "Hồ sơ định nghĩa các loại định danh bệnh nhân ở Việt Nam",
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
        "short": "CMND/CCCD",
        "min": 0,
        "max": "1",
        "mustSupport": true,
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
        "mustSupport": true,
        "patternIdentifier": {
          "system": "http://vietnam.gov.vn/id/bhyt"
        }
      },
      {
        "id": "Patient.identifier:patientId",
        "path": "Patient.identifier",
        "sliceName": "patientId",
        "short": "Mã bệnh nhân",
        "min": 1,
        "max": "1",
        "mustSupport": true,
        "patternIdentifier": {
          "system": "http://hospital.example.org/id/patient"
        }
      }
    ]
  }
}
```

#### Ví dụ phức tạp hơn: Phân lớp các thành phần huyết áp

```json
{
  "resourceType": "StructureDefinition",
  "id": "blood-pressure",
  "url": "http://example.org/fhir/StructureDefinition/blood-pressure",
  "name": "BloodPressureProfile",
  "title": "Hồ sơ đo huyết áp",
  "status": "active",
  "description": "Hồ sơ cho kết quả đo huyết áp",
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
              "code": "85354-9",
              "display": "Blood pressure panel"
            }
          ]
        }
      },
      {
        "id": "Observation.component",
        "path": "Observation.component",
        "slicing": {
          "discriminator": [
            {
              "type": "pattern",
              "path": "code"
            }
          ],
          "rules": "open"
        },
        "min": 2
      },
      {
        "id": "Observation.component:systolic",
        "path": "Observation.component",
        "sliceName": "systolic",
        "min": 1,
        "max": "1"
      },
      {
        "id": "Observation.component:systolic.code",
        "path": "Observation.component.code",
        "patternCodeableConcept": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8480-6",
              "display": "Systolic blood pressure"
            }
          ]
        }
      },
      {
        "id": "Observation.component:systolic.value[x]",
        "path": "Observation.component.value[x]",
        "min": 1,
        "type": [
          {
            "code": "Quantity"
          }
        ]
      },
      {
        "id": "Observation.component:systolic.value[x].unit",
        "path": "Observation.component.value[x].unit",
        "min": 1,
        "fixedString": "mmHg"
      },
      {
        "id": "Observation.component:diastolic",
        "path": "Observation.component",
        "sliceName": "diastolic",
        "min": 1,
        "max": "1"
      },
      {
        "id": "Observation.component:diastolic.code",
        "path": "Observation.component.code",
        "patternCodeableConcept": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8462-4",
              "display": "Diastolic blood pressure"
            }
          ]
        }
      },
      {
        "id": "Observation.component:diastolic.value[x]",
        "path": "Observation.component.value[x]",
        "min": 1,
        "type": [
          {
            "code": "Quantity"
          }
        ]
      },
      {
        "id": "Observation.component:diastolic.value[x].unit",
        "path": "Observation.component.value[x].unit",
        "min": 1,
        "fixedString": "mmHg"
      }
    ]
  }
}
```

### 4. Differential vs. Snapshot Views (Chế độ xem khác biệt và snapshot)

FHIR Profiles có hai chế độ xem: Differential và Snapshot.

#### Differential View (Chế độ xem khác biệt):

* Chỉ hiển thị những thay đổi so với tài nguyên cơ sở
* Ngắn gọn và dễ đọc
* Thường được sử dụng khi tạo profile

```json
"differential": {
  "element": [
    {
      "id": "Patient.birthDate",
      "path": "Patient.birthDate",
      "min": 1
    }
  ]
}
```

#### Snapshot View (Chế độ xem toàn diện):

* Hiển thị toàn bộ cấu trúc sau khi áp dụng tất cả các ràng buộc
* Đầy đủ và chi tiết
* Hữu ích cho việc kiểm tra tính hợp lệ và triển khai

```json
"snapshot": {
  "element": [
    {
      "id": "Patient",
      "path": "Patient",
      "min": 0,
      "max": "*",
      "type": [
        {
          "code": "DomainResource"
        }
      ]
    },
    {
      "id": "Patient.id",
      "path": "Patient.id",
      "min": 0,
      "max": "1",
      "type": [
        {
          "code": "id"
        }
      ]
    },
    {
      "id": "Patient.birthDate",
      "path": "Patient.birthDate",
      "min": 1,
      "max": "1",
      "type": [
        {
          "code": "date"
        }
      ]
    }
    // Nhiều phần tử khác...
  ]
}
```

#### Ví dụ thực tế:

Một server FHIR sẽ tự động tạo snapshot từ differential khi cần. Nhiều công cụ hỗ trợ FHIR như FHIR Validator cũng làm điều này.

### 5. Extension Definitions (Định nghĩa phần mở rộng)

Extensions là cách để thêm các thông tin không có trong tài nguyên FHIR chuẩn. Trong R5, việc sử dụng extensions trở nên dễ dàng hơn.

#### Cách định nghĩa Extension:

```json
{
  "resourceType": "StructureDefinition",
  "id": "patient-religion",
  "url": "http://example.org/fhir/StructureDefinition/patient-religion",
  "name": "PatientReligion",
  "title": "Tôn giáo của bệnh nhân",
  "status": "active",
  "description": "Mở rộng để ghi nhận tôn giáo của bệnh nhân",
  "fhirVersion": "5.0.0",
  "kind": "complex-type",
  "abstract": false,
  "type": "Extension",
  "context": [
    {
      "type": "element",
      "expression": "Patient"
    }
  ],
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Extension",
  "snapshot": {
    "element": [
      {
        "id": "Extension",
        "path": "Extension",
        "short": "Tôn giáo của bệnh nhân",
        "definition": "Tôn giáo mà bệnh nhân theo"
      },
      {
        "id": "Extension.url",
        "path": "Extension.url",
        "fixedUri": "http://example.org/fhir/StructureDefinition/patient-religion"
      },
      {
        "id": "Extension.value[x]",
        "path": "Extension.value[x]",
        "type": [
          {
            "code": "CodeableConcept"
          }
        ],
        "binding": {
          "strength": "extensible",
          "valueSet": "http://example.org/fhir/ValueSet/religion-codes"
        }
      }
    ]
  }
}
```

#### Cách sử dụng Extension trong Profile:

```json
{
  "resourceType": "StructureDefinition",
  "id": "vn-patient-extended",
  "url": "http://example.org/fhir/StructureDefinition/vn-patient-extended",
  "name": "VietnamPatientExtended",
  "title": "Hồ sơ bệnh nhân Việt Nam mở rộng",
  "status": "active",
  "fhirVersion": "5.0.0",
  "kind": "resource",
  "abstract": false,
  "type": "Patient",
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Patient",
  "derivation": "constraint",
  "differential": {
    "element": [
      {
        "id": "Patient.extension:religion",
        "path": "Patient.extension",
        "sliceName": "religion",
        "min": 0,
        "max": "1",
        "type": [
          {
            "code": "Extension",
            "profile": ["http://example.org/fhir/StructureDefinition/patient-religion"]
          }
        ]
      }
    ]
  }
}
```

#### Ví dụ thực tế: Extension cho dân tộc ở Việt Nam

```json
{
  "resourceType": "StructureDefinition",
  "id": "vn-ethnicity",
  "url": "http://example.org/fhir/StructureDefinition/vn-ethnicity",
  "name": "VietnamEthnicity",
  "title": "Dân tộc Việt Nam",
  "status": "active",
  "description": "Mở rộng để ghi nhận dân tộc của người Việt Nam",
  "fhirVersion": "5.0.0",
  "kind": "complex-type",
  "abstract": false,
  "type": "Extension",
  "context": [
    {
      "type": "element",
      "expression": "Patient"
    }
  ],
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Extension",
  "snapshot": {
    "element": [
      {
        "id": "Extension",
        "path": "Extension",
        "short": "Dân tộc Việt Nam",
        "definition": "Dân tộc của người Việt Nam"
      },
      {
        "id": "Extension.url",
        "path": "Extension.url",
        "fixedUri": "http://example.org/fhir/StructureDefinition/vn-ethnicity"
      },
      {
        "id": "Extension.value[x]",
        "path": "Extension.value[x]",
        "type": [
          {
            "code": "CodeableConcept"
          }
        ],
        "binding": {
          "strength": "required",
          "valueSet": "http://example.org/fhir/ValueSet/vn-ethnicity"
        }
      }
    ]
  }
}
```

### 6. Version Management (Quản lý phiên bản)

Quản lý phiên bản rất quan trọng khi làm việc với FHIR Profiles, đặc biệt trong môi trường sản xuất.

#### Các nguyên tắc quản lý phiên bản:

**Sử dụng URL ổn định**

URL của profile nên ổn định và không thay đổi. Phiên bản có thể được quản lý thông qua phần tử version.

```json
"url": "http://example.org/fhir/StructureDefinition/vn-patient",
"version": "1.0.0"
```

**Quản lý thay đổi tương thích**

* **Thay đổi nhỏ**: Tăng số phiên bản patch (1.0.0 → 1.0.1)
  * Sửa lỗi nhỏ, thêm chú thích, cải thiện mô tả
* **Thay đổi không phá vỡ**: Tăng số phiên bản minor (1.0.0 → 1.1.0)
  * Thêm phần tử mới, thêm extension, nới lỏng ràng buộc
* **Thay đổi phá vỡ**: Tăng số phiên bản major (1.0.0 → 2.0.0)
  * Xóa phần tử, thay đổi kiểu dữ liệu, thêm ràng buộc nghiêm ngặt hơn

**Sử dụng VersionId và LastUpdated**

```json
"meta": {
  "versionId": "2",
  "lastUpdated": "2023-06-15T12:30:00Z"
}
```

**Sử dụng trạng thái Profile**

```json
"status": "draft",  // Đang phát triển
"status": "active", // Sẵn sàng sử dụng
"status": "retired" // Không còn được khuyến nghị sử dụng
```

#### Ví dụ thực tế: Quản lý phiên bản profile bệnh nhân

```json
{
  "resourceType": "StructureDefinition",
  "id": "vn-patient",
  "url": "http://example.org/fhir/StructureDefinition/vn-patient",
  "version": "2.0.0",
  "name": "VietnamPatientProfile",
  "title": "Hồ sơ bệnh nhân Việt Nam",
  "status": "active",
  "date": "2023-06-15",
  "description": "Hồ sơ bệnh nhân FHIR phù hợp với quy định của Việt Nam",
  "fhirVersion": "5.0.0",
  "kind": "resource",
  "abstract": false,
  "type": "Patient",
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Patient",
  "derivation": "constraint"
}
```

### Ví dụ thực tế hoàn chỉnh: Xây dựng Profile cho hồ sơ tiêm chủng

Dưới đây là một ví dụ thực tế về cách xây dựng một profile cho hồ sơ tiêm chủng tại Việt Nam:

```json
{
  "resourceType": "StructureDefinition",
  "id": "vn-immunization",
  "url": "http://example.org/fhir/StructureDefinition/vn-immunization",
  "version": "1.0.0",
  "name": "VietnamImmunizationProfile",
  "title": "Hồ sơ tiêm chủng Việt Nam",
  "status": "active",
  "date": "2023-06-15",
  "publisher": "Bộ Y tế Việt Nam",
  "description": "Hồ sơ FHIR cho tiêm chủng phù hợp với quy định của Việt Nam",
  "fhirVersion": "5.0.0",
  "kind": "resource",
  "abstract": false,
  "type": "Immunization",
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Immunization",
  "derivation": "constraint",
  "differential": {
    "element": [
      {
        "id": "Immunization.status",
        "path": "Immunization.status",
        "min": 1,
        "mustSupport": true
      },
      {
        "id": "Immunization.vaccineCode",
        "path": "Immunization.vaccineCode",
        "min": 1,
        "mustSupport": true,
        "binding": {
          "strength": "extensible",
          "valueSet": "http://example.org/fhir/ValueSet/vn-vaccine-codes"
        }
      },
      {
        "id": "Immunization.patient",
        "path": "Immunization.patient",
        "min": 1,
        "mustSupport": true,
        "type": [
          {
            "code": "Reference",
            "targetProfile": ["http://example.org/fhir/StructureDefinition/vn-patient"]
          }
        ]
      },
      {
        "id": "Immunization.occurrence[x]",
        "path": "Immunization.occurrence[x]",
        "min": 1,
        "mustSupport": true,
        "type": [
          {
            "code": "dateTime"
          }
        ]
      },
      {
        "id": "Immunization.manufacturer",
        "path": "Immunization.manufacturer",
        "min": 1,
        "mustSupport": true
      },
      {
        "id": "Immunization.lotNumber",
        "path": "Immunization.lotNumber",
        "min": 1,
        "mustSupport": true
      },
      {
        "id": "Immunization.expirationDate",
        "path": "Immunization.expirationDate",
        "min": 1,
        "mustSupport": true
      },
      {
        "id": "Immunization.site",
        "path": "Immunization.site",
        "min": 1,
        "mustSupport": true,
        "binding": {
          "strength": "preferred",
          "valueSet": "http://example.org/fhir/ValueSet/vn-body-sites"
        }
      },
      {
        "id": "Immunization.performer",
        "path": "Immunization.performer",
        "min": 1,
        "mustSupport": true,
        "slicing": {
          "discriminator": [
            {
              "type": "value",
              "path": "function"
            }
          ],
          "rules": "open"
        }
      },
      {
        "id": "Immunization.performer:vaccinator",
        "path": "Immunization.performer",
        "sliceName": "vaccinator",
        "min": 1,
        "max": "1"
      },
      {
        "id": "Immunization.performer:vaccinator.function",
        "path": "Immunization.performer.function",
        "min": 1,
        "patternCodeableConcept": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
              "code": "AP",
              "display": "Administering Provider"
            }
          ]
        }
      },
      {
        "id": "Immunization.performer:vaccinator.actor",
        "path": "Immunization.performer.actor",
        "min": 1,
        "type": [
          {
            "code": "Reference",
            "targetProfile": ["http://example.org/fhir/StructureDefinition/vn-practitioner"]
          }
        ]
      },
      {
        "id": "Immunization.performer:recorder",
        "path": "Immunization.performer",
        "sliceName": "recorder",
        "min": 0,
        "max": "1"
      },
      {
        "id": "Immunization.performer:recorder.function",
        "path": "Immunization.performer.function",
        "min": 1,
        "patternCodeableConcept": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
              "code": "OP",
              "display": "Ordering Provider"
            }
          ]
        }
      },
      {
        "id": "Immunization.performer:recorder.actor",
        "path": "Immunization.performer.actor",
        "min": 1
      },
      {
        "id": "Immunization.location",
        "path": "Immunization.location",
        "min": 1,
        "mustSupport": true,
        "type": [
          {
            "code": "Reference",
            "targetProfile": ["http://example.org/fhir/StructureDefinition/vn-location"]
          }
        ]
      },
      {
        "id": "Immunization.protocolApplied",
        "path": "Immunization.protocolApplied",
        "min": 1,
        "mustSupport": true
      },
      {
        "id": "Immunization.protocolApplied.doseNumber[x]",
        "path": "Immunization.protocolApplied.doseNumber[x]",
        "min": 1,
        "mustSupport": true
      },
      {
        "id": "Immunization.extension:vaccinationCertificate",
        "path": "Immunization.extension",
        "sliceName": "vaccinationCertificate",
        "min": 0,
        "max": "1",
        "type": [
          {
            "code": "Extension",
            "profile": ["http://example.org/fhir/StructureDefinition/vn-vaccination-certificate"]
          }
        ]
      }
    ]
  }
}
```

#### Extension định nghĩa cho chứng nhận tiêm chủng

```json
{
  "resourceType": "StructureDefinition",
  "id": "vn-vaccination-certificate",
  "url": "http://example.org/fhir/StructureDefinition/vn-vaccination-certificate",
  "name": "VNVaccinationCertificate",
  "title": "Chứng nhận tiêm chủng Việt Nam",
  "status": "active",
  "description": "Extension định nghĩa thông tin chứng nhận tiêm chủng",
  "fhirVersion": "5.0.0",
  "kind": "complex-type",
  "abstract": false,
  "type": "Extension",
  "context": [
    {
      "type": "element",
      "expression": "Immunization"
    }
  ],
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Extension",
  "snapshot": {
    "element": [
      {
        "id": "Extension",
        "path": "Extension",
        "short": "Chứng nhận tiêm chủng",
        "definition": "Thông tin về chứng nhận tiêm chủng"
      },
      {
        "id": "Extension.extension:certificateNumber",
        "path": "Extension.extension",
        "sliceName": "certificateNumber",
        "min": 1,
        "max": "1"
      },
      {
        "id": "Extension.extension:certificateNumber.url",
        "path": "Extension.extension.url",
        "fixedUri": "certificateNumber"
      },
      {
        "id": "Extension.extension:certificateNumber.value[x]",
        "path": "Extension.extension.value[x]",
        "min": 1,
        "type": [
          {
            "code": "string"
          }
        ]
      },
      {
        "id": "Extension.extension:issueDate",
        "path": "Extension.extension",
        "sliceName": "issueDate",
        "min": 1,
        "max": "1"
      },
      {
        "id": "Extension.extension:issueDate.url",
        "path": "Extension.extension.url",
        "fixedUri": "issueDate"
      },
      {
        "id": "Extension.extension:issueDate.value[x]",
        "path": "Extension.extension.value[x]",
        "min": 1,
        "type": [
          {
            "code": "date"
          }
        ]
      },
      {
        "id": "Extension.extension:issuer",
        "path": "Extension.extension",
        "sliceName": "issuer",
        "min": 1,
        "max": "1"
      },
      {
        "id": "Extension.extension:issuer.url",
        "path": "Extension.extension.url",
        "fixedUri": "issuer"
      },
      {
        "id": "Extension.extension:issuer.value[x]",
        "path": "Extension.extension.value[x]",
        "min": 1,
        "type": [
          {
            "code": "Reference",
            "targetProfile": ["http://hl7.org/fhir/StructureDefinition/Organization"]
          }
        ]
      },
      {
        "id": "Extension.url",
        "path": "Extension.url",
        "fixedUri": "http://example.org/fhir/StructureDefinition/vn-vaccination-certificate"
      }
    ]
  }
}
```

### Các bước tạo và sử dụng FHIR Profile trong dự án thực tế

Dưới đây là quy trình tiêu chuẩn để tạo và sử dụng FHIR Profiles trong một dự án thực tế:

#### 1. Phân tích yêu cầu

* Xác định các tài nguyên FHIR cần sử dụng
* Xác định các yêu cầu đặc thù của địa phương/tổ chức
* Xác định các thuật ngữ và mã hóa cần sử dụng

#### 2. Thiết kế Profile

* Xác định các ràng buộc cần áp dụng
* Xác định các phần tử Must-Support
* Thiết kế các extension nếu cần

#### 3. Triển khai Profile

* Tạo các StructureDefinition cho profile
* Tạo các ValueSet, CodeSystem và ConceptMap cần thiết
* Tạo các định nghĩa Extension

#### 4. Xác thực Profile

* Sử dụng FHIR Validator để kiểm tra tính hợp lệ của profile
* Tạo các tài nguyên mẫu để kiểm tra

#### 5. Xuất bản Profile

* Triển khai profile lên FHIR server
* Tạo tài liệu hướng dẫn sử dụng

#### 6. Sử dụng Profile

* Tham chiếu profile trong các tài nguyên FHIR
* Xác thực tài nguyên dựa trên profile

#### 7. Quản lý và cập nhật Profile

* Theo dõi phản hồi từ người dùng
* Cập nhật profile theo nhu cầu

### Công cụ hỗ trợ tạo và quản lý FHIR Profiles

Có nhiều công cụ giúp bạn làm việc với FHIR Profiles:

#### 1. FHIR Shorthand và SUSHI

FHIR Shorthand là ngôn ngữ để định nghĩa các tài nguyên FHIR dễ dàng hơn. SUSHI là công cụ để biên dịch FHIR Shorthand thành JSON/XML.

```
Profile: VNPatient
Parent: Patient
Id: vn-patient
Title: "Hồ sơ bệnh nhân Việt Nam"
Description: "Hồ sơ bệnh nhân FHIR phù hợp với quy định của Việt Nam"
* name 1..* MS "Tên bệnh nhân là bắt buộc"
* gender 1..1 MS "Giới tính là bắt buộc"
* birthDate 1..1 MS "Ngày sinh là bắt buộc"
```

#### 2. Simplifier.net

Simplifier.net là nền tảng trực tuyến để tạo, quản lý và chia sẻ FHIR Profiles.

#### 3. Forge

Forge là ứng dụng desktop để tạo và chỉnh sửa FHIR Profiles một cách trực quan.

#### 4. FHIR Implementation Guide Publisher

Công cụ này giúp tạo tài liệu từ các profile và tài nguyên khác.

#### 5. HAPI FHIR Validator

Công cụ để xác thực tài nguyên FHIR dựa trên các profile.

### Một số mẹo khi làm việc với FHIR Profiles

1. **Sử dụng profile gốc hiện có**: Tận dụng các profile đã có sẵn thay vì bắt đầu từ đầu.
2. **Cẩn thận với những thay đổi breaking**: Hãy thận trọng khi thêm ràng buộc mới có thể làm hỏng dữ liệu hiện có.
3. **Dùng slicing một cách hợp lý**: Slicing rất mạnh mẽ nhưng cũng có thể trở nên phức tạp, hãy sử dụng một cách hợp lý.
4. **Ghi chú rõ ràng**: Thêm chú thích và mô tả chi tiết để người khác hiểu được mục đích của profile.
5. **Kiểm thử kỹ lưỡng**: Luôn tạo các tài nguyên mẫu và kiểm tra chúng với profile.
6. **Publish snapshot view**: Khi xuất bản profile, hãy đảm bảo bao gồm cả snapshot view.
7. **Xem xét sự đánh đổi giữa tính linh hoạt và ràng buộc**: Cân nhắc giữa việc thêm ràng buộc chặt để đảm bảo chất lượng dữ liệu và duy trì sự linh hoạt.

### Ví dụ thực tế: Kiểm tra tài nguyên đối với profile

Dưới đây là ví dụ về một tài nguyên Immunization tuân thủ profile tiêm chủng Việt Nam:

```json
{
  "resourceType": "Immunization",
  "id": "example-vn-immunization",
  "meta": {
    "profile": [
      "http://example.org/fhir/StructureDefinition/vn-immunization"
    ]
  },
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://example.org/fhir/CodeSystem/vn-vaccine-codes",
        "code": "COVID19",
        "display": "Vắc-xin COVID-19"
      }
    ]
  },
  "patient": {
    "reference": "Patient/example-vn-patient"
  },
  "occurrenceDateTime": "2023-06-01",
  "manufacturer": {
    "reference": "Organization/astrazeneca",
    "display": "AstraZeneca"
  },
  "lotNumber": "ABX123456",
  "expirationDate": "2023-12-31",
  "site": {
    "coding": [
      {
        "system": "http://example.org/fhir/CodeSystem/vn-body-sites",
        "code": "LA",
        "display": "Cánh tay trái"
      }
    ]
  },
  "performer": [
    {
      "function": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
            "code": "AP",
            "display": "Administering Provider"
          }
        ]
      },
      "actor": {
        "reference": "Practitioner/example-vaccinator",
        "display": "Bác sĩ Nguyễn Văn A"
      }
    }
  ],
  "location": {
    "reference": "Location/example-vaccination-site",
    "display": "Trung tâm Y tế quận 1"
  },
  "protocolApplied": [
    {
      "series": "COVID-19 AstraZeneca",
      "doseNumberPositiveInt": 1,
      "seriesDosesPositiveInt": 2
    }
  ],
  "extension": [
    {
      "url": "http://example.org/fhir/StructureDefinition/vn-vaccination-certificate",
      "extension": [
        {
          "url": "certificateNumber",
          "valueString": "VN-VAX-2023-123456"
        },
        {
          "url": "issueDate",
          "valueDate": "2023-06-01"
        },
        {
          "url": "issuer",
          "valueReference": {
            "reference": "Organization/moh-vietnam",
            "display": "Bộ Y tế Việt Nam"
          }
        }
      ]
    }
  ]
}
```

### Kết luận

FHIR Profiles là công cụ mạnh mẽ giúp tùy chỉnh và mở rộng FHIR để đáp ứng nhu cầu cụ thể của từng tổ chức, quốc gia hoặc lĩnh vực y tế. Bằng cách hiểu và áp dụng đúng các kỹ thuật như constraining resources, must-support elements, slicing, extensions và quản lý phiên bản, bạn có thể xây dựng các hệ thống y tế số linh hoạt, tương thích và tuân thủ các tiêu chuẩn quốc tế.

Trong FHIR R5, nhiều cải tiến đã được thực hiện để làm cho việc tạo và sử dụng profiles trở nên dễ dàng hơn, đồng thời cung cấp nhiều công cụ mạnh mẽ hơn để xác định và kiểm tra tính tuân thủ.

Bằng cách tuân theo các bước và thực hành tốt được nêu trong bài viết này, bạn có thể tận dụng tối đa sức mạnh của FHIR Profiles trong các dự án y tế số của mình.
