---
id: 163ddace-b43b-473a-912c-f38edeafe6c6
title: 'Clinical Resources in R5'
slug: clinical-resources-in-r5
description: 'Tiếp tục series về FHIR, hôm nay chúng ta sẽ đi sâu vào các Clinical Resources (Tài nguyên lâm sàng) trong FHIR R5. Đây là nhóm tài nguyên quan trọng nhất của FHIR, đại diện cho thông tin y tế cốt lõi của bệnh nhân và…'
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 'Phần 6: Đào sâu Resource FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Tiếp tục series về FHIR, hôm nay chúng ta sẽ đi sâu vào các Clinical Resources (Tài nguyên lâm sàng) trong FHIR R5. Đây là nhóm tài nguyên quan trọng nhất của FHIR, đại diện cho thông tin y tế cốt lõi của bệnh nhân và hoạt động chăm sóc sức khỏe.

Phiên bản R5 mang đến nhiều cải tiến đáng kể cho các tài nguyên lâm sàng, từ việc mở rộng các thuộc tính, cải thiện khả năng biểu diễn thông tin phức tạp, đến việc thêm các tài nguyên mới để đáp ứng các lĩnh vực chuyên sâu như genomics và đánh giá rủi ro.

Là một Solution Architect, việc hiểu rõ các tài nguyên này là nền tảng để thiết kế hệ thống y tế số hiệu quả. Hãy cùng tìm hiểu chi tiết về từng nhóm tài nguyên lâm sàng quan trọng trong FHIR R5.

### Patient và Person: Nền tảng thông tin cá nhân

#### Patient Resource

Tài nguyên Patient là một trong những tài nguyên cơ bản nhất trong FHIR, đại diện cho người nhận dịch vụ y tế.

**Cấu trúc cơ bản của Patient**

```json
{
  "resourceType": "Patient",
  "id": "example",
  "identifier": [
    {
      "use": "official",
      "system": "http://hospital.example.org/identifiers/patients",
      "value": "12345"
    }
  ],
  "active": true,
  "name": [
    {
      "use": "official",
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "+84 123 456 789",
      "use": "mobile"
    }
  ],
  "gender": "male",
  "birthDate": "1974-12-25",
  "address": [
    {
      "use": "home",
      "line": ["123 Đường Lê Lợi"],
      "city": "Hồ Chí Minh",
      "country": "VN"
    }
  ],
  "contact": [
    {
      "relationship": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
              "code": "N",
              "display": "Next-of-Kin"
            }
          ]
        }
      ],
      "name": {
        "family": "Trần",
        "given": ["Thị", "B"]
      },
      "telecom": [
        {
          "system": "phone",
          "value": "+84 987 654 321"
        }
      ]
    }
  ]
}
```

**Các cải tiến trong FHIR R5**

FHIR R5 mang đến một số cải tiến quan trọng cho tài nguyên Patient:

1.  **Cải thiện đại diện giới tính và giới**:

    * Thêm thuộc tính `genderIdentity` để phân biệt với giới tính sinh học (gender)
    * Hỗ trợ tốt hơn cho các trường hợp không nhị phân và đa dạng giới

    ```json
    "genderIdentity": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/gender-identity",
          "code": "transgender-male",
          "display": "Transgender Male"
        }
      ]
    }
    ```
2. **Thông tin nhân khẩu học mở rộng**:
   * Bổ sung thuộc tính `birthPlace` trực tiếp (thay vì qua extension)
   * Hỗ trợ tốt hơn cho thông tin chủng tộc và dân tộc
3. **Liên kết với Person**:
   * Cải thiện cách liên kết giữa Patient và Person
   * Hỗ trợ tốt hơn cho trường hợp một người có nhiều hồ sơ bệnh nhân
4. **Trạng thái tử vong**:
   * Cấu trúc chi tiết hơn cho thông tin về tử vong
   * Thêm thông tin về nguyên nhân tử vong

#### Person Resource

Tài nguyên Person biểu diễn một cá nhân trong ngữ cảnh rộng hơn Patient. Person có thể là bệnh nhân, nhân viên y tế, hoặc người liên quan khác.

**Ví dụ về Person**

```json
{
  "resourceType": "Person",
  "id": "example",
  "identifier": [
    {
      "use": "official",
      "system": "http://example.org/identifiers/person",
      "value": "9876543210"
    }
  ],
  "name": [
    {
      "use": "official",
      "family": "Lê",
      "given": ["Thị", "C"]
    }
  ],
  "gender": "female",
  "birthDate": "1982-05-15",
  "address": [
    {
      "use": "home",
      "line": ["456 Đường Nguyễn Huệ"],
      "city": "Hồ Chí Minh",
      "country": "VN"
    }
  ],
  "link": [
    {
      "target": {
        "reference": "Patient/123"
      },
      "assurance": "level2"
    },
    {
      "target": {
        "reference": "Practitioner/456"
      },
      "assurance": "level2"
    }
  ]
}
```

**Mối quan hệ giữa Person và Patient**

Tài nguyên Person được sử dụng trong các trường hợp:

1. **Quản lý định danh chính (Master Person Index)**: Kết nối nhiều hồ sơ của cùng một người
2. **Vai trò đa dạng**: Khi một người vừa là bệnh nhân, vừa là nhân viên y tế
3. **Quản lý quan hệ**: Theo dõi mối quan hệ giữa các cá nhân không nhất thiết là bệnh nhân

Trong R5, mối quan hệ giữa Person và Patient được cải thiện với cấu trúc liên kết rõ ràng hơn và mức độ đảm bảo (assurance level) được mở rộng.

### Observation và DiagnosticReport: Kết quả xét nghiệm và chẩn đoán

#### Observation Resource

Observation là tài nguyên dùng để biểu diễn các kết quả đo lường, xét nghiệm và quan sát lâm sàng.

**Ví dụ về Observation cho huyết áp**

```json
{
  "resourceType": "Observation",
  "id": "blood-pressure",
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "vital-signs",
          "display": "Vital Signs"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "85354-9",
        "display": "Blood pressure panel"
      }
    ],
    "text": "Blood pressure systolic & diastolic"
  },
  "subject": {
    "reference": "Patient/example"
  },
  "effectiveDateTime": "2023-10-25T10:30:00+07:00",
  "component": [
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "8480-6",
            "display": "Systolic blood pressure"
          }
        ]
      },
      "valueQuantity": {
        "value": 120,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      }
    },
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "8462-4",
            "display": "Diastolic blood pressure"
          }
        ]
      },
      "valueQuantity": {
        "value": 80,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      }
    }
  ]
}
```

**Cải tiến trong FHIR R5**

FHIR R5 cải thiện Observation với:

1. **Cấu trúc phong phú hơn**:
   * Hỗ trợ tốt hơn cho observations phức tạp
   * Cải thiện cách biểu diễn dữ liệu chuỗi thời gian
2. **Kiểu dữ liệu mới**:
   * Thêm các kiểu giá trị mới cho observations
   * Hỗ trợ tốt hơn cho delta (sự thay đổi) và tốc độ
3. **Nhóm observations**:
   * Cải thiện cách nhóm các observations liên quan
   * Thêm thuộc tính `focus` để chỉ ra đối tượng cụ thể của observation
4. **Nguồn gốc dữ liệu**:
   * Thêm thông tin chi tiết về cách lấy dữ liệu
   * Hỗ trợ tốt hơn cho dữ liệu từ thiết bị

#### DiagnosticReport Resource

DiagnosticReport biểu diễn kết quả của một cuộc kiểm tra chẩn đoán hoặc thủ thuật, thường bao gồm nhiều Observation.

**Ví dụ về DiagnosticReport cho xét nghiệm máu**

```json
{
  "resourceType": "DiagnosticReport",
  "id": "cbc-example",
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
          "code": "HM",
          "display": "Hematology"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "58410-2",
        "display": "Complete blood count (hemogram) panel - Blood by Automated count"
      }
    ],
    "text": "CBC"
  },
  "subject": {
    "reference": "Patient/example"
  },
  "effectiveDateTime": "2023-10-25",
  "issued": "2023-10-25T13:45:00+07:00",
  "performer": [
    {
      "reference": "Practitioner/example",
      "display": "Dr. Lê Văn A"
    }
  ],
  "result": [
    {
      "reference": "Observation/hemoglobin"
    },
    {
      "reference": "Observation/wbc"
    },
    {
      "reference": "Observation/rbc"
    },
    {
      "reference": "Observation/platelets"
    }
  ],
  "conclusion": "Chỉ số công thức máu trong giới hạn bình thường.",
  "conclusionCode": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "268917001",
          "display": "Normal blood count"
        }
      ]
    }
  ]
}
```

**Cải tiến trong FHIR R5**

FHIR R5 nâng cao khả năng của DiagnosticReport với:

1. **Thông tin kết luận chi tiết hơn**:
   * Mở rộng thuộc tính `conclusion` và `conclusionCode`
   * Hỗ trợ tốt hơn cho các khuyến nghị lâm sàng
2. **Thông tin phương pháp và thiết bị**:
   * Cải thiện cách ghi nhận phương pháp thực hiện
   * Liên kết tốt hơn với thiết bị sử dụng trong xét nghiệm
3. **Đa phương tiện**:
   * Hỗ trợ tốt hơn cho các báo cáo đa phương tiện
   * Cải thiện cách đính kèm hình ảnh và tài liệu
4. **Tham chiếu liên kết**:
   * Mối quan hệ rõ ràng hơn với ServiceRequest
   * Cải thiện liên kết với các Observation thành phần

### Condition và AllergyIntolerance: Vấn đề sức khỏe

#### Condition Resource

Condition (Tình trạng) biểu diễn các vấn đề sức khỏe, bệnh lý, chẩn đoán hoặc các quan ngại lâm sàng khác.

**Ví dụ về Condition**

```json
{
  "resourceType": "Condition",
  "id": "diabetes-example",
  "clinicalStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
        "code": "active",
        "display": "Active"
      }
    ]
  },
  "verificationStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        "code": "confirmed",
        "display": "Confirmed"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-category",
          "code": "problem-list-item",
          "display": "Problem List Item"
        }
      ]
    }
  ],
  "severity": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "6736007",
        "display": "Moderate"
      }
    ]
  },
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "44054006",
        "display": "Diabetes mellitus type 2"
      }
    ],
    "text": "Đái tháo đường type 2"
  },
  "subject": {
    "reference": "Patient/example"
  },
  "onsetDateTime": "2022-05-10",
  "recordedDate": "2022-05-15",
  "recorder": {
    "reference": "Practitioner/example"
  },
  "evidence": [
    {
      "detail": [
        {
          "reference": "Observation/glucose-example"
        }
      ],
      "code": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "271062006",
              "display": "Fasting blood glucose level"
            }
          ]
        }
      ]
    }
  ]
}
```

**Cải tiến trong FHIR R5**

FHIR R5 cải thiện Condition với:

1. **Mô hình tình trạng phong phú hơn**:
   * Phân biệt rõ ràng hơn giữa chẩn đoán, vấn đề, và quan ngại
   * Hỗ trợ tốt hơn cho mối quan hệ giữa các tình trạng
2. **Thông tin về diễn biến**:
   * Cải thiện cách ghi nhận sự tiến triển của tình trạng
   * Hỗ trợ tốt hơn cho các giai đoạn và mức độ nghiêm trọng
3. **Bằng chứng và xác minh**:
   * Mở rộng mô hình bằng chứng lâm sàng
   * Cải thiện trạng thái xác minh và nguồn thông tin
4. **Coded Detail**:
   * Cải thiện cách mã hóa chi tiết của tình trạng
   * Hỗ trợ tốt hơn cho các hệ thống mã y khoa (SNOMED CT, ICD-10, ICD-11)

#### AllergyIntolerance Resource

AllergyIntolerance biểu diễn phản ứng dị ứng hoặc không dung nạp đối với chất, thuốc, thực phẩm hoặc môi trường.

**Ví dụ về AllergyIntolerance**

```json
{
  "resourceType": "AllergyIntolerance",
  "id": "penicillin-allergy",
  "clinicalStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
        "code": "active",
        "display": "Active"
      }
    ]
  },
  "verificationStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
        "code": "confirmed",
        "display": "Confirmed"
      }
    ]
  },
  "type": "allergy",
  "category": ["medication"],
  "criticality": "high",
  "code": {
    "coding": [
      {
        "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
        "code": "7980",
        "display": "Penicillin"
      }
    ],
    "text": "Penicillin"
  },
  "patient": {
    "reference": "Patient/example"
  },
  "onsetDateTime": "2018-12-30",
  "recordedDate": "2019-01-05",
  "recorder": {
    "reference": "Practitioner/example"
  },
  "reaction": [
    {
      "manifestation": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "247472004",
              "display": "Urticarial rash"
            }
          ],
          "text": "Phát ban nổi mề đay"
        }
      ],
      "severity": "severe",
      "onset": "2018-12-30T12:40:00+07:00"
    },
    {
      "manifestation": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "39579001",
              "display": "Anaphylactic reaction"
            }
          ],
          "text": "Phản ứng phản vệ"
        }
      ],
      "severity": "severe",
      "onset": "2018-12-30T12:45:00+07:00"
    }
  ]
}
```

**Cải tiến trong FHIR R5**

FHIR R5 cải thiện AllergyIntolerance với:

1. **Phân loại chi tiết hơn**:
   * Phân biệt rõ ràng hơn giữa dị ứng và không dung nạp
   * Cải thiện các loại phản ứng
2. **Thông tin về phản ứng phong phú hơn**:
   * Mở rộng thông tin về biểu hiện lâm sàng
   * Hỗ trợ tốt hơn cho mức độ nghiêm trọng và thời gian phản ứng
3. **Liên kết với các tài nguyên khác**:
   * Cải thiện liên kết với Condition
   * Hỗ trợ tốt hơn cho việc tham chiếu đến các xét nghiệm liên quan
4. **Nhóm và phân loại**:
   * Cải thiện cách phân loại các chất gây dị ứng
   * Hỗ trợ tốt hơn cho các nhóm dị ứng chéo

### MedicationRequest và MedicationAdministration: Quản lý thuốc

#### MedicationRequest Resource

MedicationRequest (trước đây gọi là MedicationOrder) biểu diễn đơn thuốc hoặc chỉ định dùng thuốc.

**Ví dụ về MedicationRequest**

```json
{
  "resourceType": "MedicationRequest",
  "id": "metformin-order",
  "status": "active",
  "intent": "order",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
          "code": "outpatient",
          "display": "Outpatient"
        }
      ]
    }
  ],
  "medicationCodeableConcept": {
    "coding": [
      {
        "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
        "code": "860975",
        "display": "Metformin hydrochloride 500 MG Oral Tablet"
      }
    ],
    "text": "Metformin 500mg"
  },
  "subject": {
    "reference": "Patient/example"
  },
  "authoredOn": "2023-10-15",
  "requester": {
    "reference": "Practitioner/example",
    "display": "Bác sĩ Trần Văn B"
  },
  "dosageInstruction": [
    {
      "sequence": 1,
      "text": "Uống 1 viên, ngày 2 lần sau bữa ăn sáng và tối",
      "timing": {
        "repeat": {
          "frequency": 2,
          "period": 1,
          "periodUnit": "d",
          "when": ["ACM", "ACD"]
        }
      },
      "route": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "26643006",
            "display": "Oral Route"
          }
        ]
      },
      "doseAndRate": [
        {
          "doseQuantity": {
            "value": 1,
            "unit": "viên",
            "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            "code": "TAB"
          }
        }
      ]
    }
  ],
  "dispenseRequest": {
    "numberOfRepeatsAllowed": 3,
    "quantity": {
      "value": 60,
      "unit": "viên",
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "TAB"
    },
    "expectedSupplyDuration": {
      "value": 30,
      "unit": "ngày",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    }
  },
  "reasonCode": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "44054006",
          "display": "Type 2 diabetes mellitus"
        }
      ]
    }
  ]
}
```

**Cải tiến trong FHIR R5**

FHIR R5 cải thiện MedicationRequest với:

1. **Mô hình đơn thuốc phong phú hơn**:
   * Hỗ trợ tốt hơn cho các loại đơn thuốc khác nhau
   * Cải thiện cách biểu diễn liều lượng phức tạp
2. **Thông tin liều dùng chi tiết hơn**:
   * Mở rộng mô hình liều dùng
   * Hỗ trợ tốt hơn cho các trường hợp đặc biệt (liều tăng/giảm dần, liều dựa trên cân nặng)
3. **Quản lý cấp phát**:
   * Cải thiện cách quản lý thông tin cấp phát
   * Hỗ trợ tốt hơn cho việc tái cấp thuốc
4. **Lý do và mối liên hệ**:
   * Mở rộng thông tin về lý do kê đơn
   * Cải thiện liên kết với các tình trạng và chẩn đoán

#### MedicationAdministration Resource

MedicationAdministration ghi lại việc một bệnh nhân thực sự sử dụng thuốc, bao gồm thuốc tự dùng hoặc do nhân viên y tế cung cấp.

**Ví dụ về MedicationAdministration**

```json
{
  "resourceType": "MedicationAdministration",
  "id": "morphine-administration",
  "status": "completed",
  "category": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/medication-admin-category",
        "code": "inpatient",
        "display": "Inpatient"
      }
    ]
  },
  "medicationCodeableConcept": {
    "coding": [
      {
        "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
        "code": "1156378",
        "display": "Morphine Sulfate 5 MG/ML Injectable Solution"
      }
    ],
    "text": "Morphine 5mg/mL"
  },
  "subject": {
    "reference": "Patient/example"
  },
  "context": {
    "reference": "Encounter/example"
  },
  "effectiveDateTime": "2023-10-25T14:30:00+07:00",
  "performer": [
    {
      "actor": {
        "reference": "Practitioner/example",
        "display": "Y tá Lê Thị D"
      }
    }
  ],
  "request": {
    "reference": "MedicationRequest/morphine-order"
  },
  "dosage": {
    "text": "5mg tiêm tĩnh mạch",
    "route": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "47625008",
          "display": "Intravenous route"
        }
      ]
    },
    "dose": {
      "value": 5,
      "unit": "mg",
      "system": "http://unitsofmeasure.org",
      "code": "mg"
    },
    "rateQuantity": {
      "value": 1,
      "unit": "mL/min",
      "system": "http://unitsofmeasure.org",
      "code": "mL/min"
    }
  },
  "note": [
    {
      "text": "Bệnh nhân đáp ứng tốt, giảm đau sau 15 phút"
    }
  ]
}
```

**Cải tiến trong FHIR R5**

FHIR R5 cải thiện MedicationAdministration với:

1. **Thông tin đầy đủ hơn về liều đã dùng**:
   * Mở rộng chi tiết về liều lượng thực tế
   * Hỗ trợ tốt hơn cho các trường hợp bỏ lỡ hoặc thay đổi liều
2. **Quản lý thiết bị và phương pháp**:
   * Cải thiện thông tin về thiết bị sử dụng (bơm tiêm, đường truyền)
   * Hỗ trợ tốt hơn cho các phương pháp đặc biệt
3. **Phản ứng và kết quả**:
   * Cải thiện cách ghi nhận phản ứng của bệnh nhân
   * Liên kết tốt hơn với các kết quả sau khi dùng thuốc
4. **Đối chiếu với chỉ định**:
   * Mối quan hệ rõ ràng hơn với MedicationRequest
   * Hỗ trợ tốt hơn cho trường hợp dùng thuốc không theo chỉ định

### CarePlan, CareTeam, và Goal: Kế hoạch chăm sóc toàn diện

#### CarePlan Resource

CarePlan định nghĩa kế hoạch chăm sóc, điều trị, hoặc quản lý sức khỏe dự kiến cho một bệnh nhân. Tài nguyên này mô tả quá trình, hoạt động, và kết quả mong đợi trong việc giải quyết một hay nhiều vấn đề sức khỏe.

**Ví dụ về CarePlan**

```json
{
  "resourceType": "CarePlan",
  "id": "diabetes-management",
  "status": "active",
  "intent": "plan",
  "title": "Kế hoạch quản lý đái tháo đường",
  "description": "Kế hoạch toàn diện để quản lý đái tháo đường type 2",
  "subject": {
    "reference": "Patient/example"
  },
  "period": {
    "start": "2023-10-01",
    "end": "2024-03-31"
  },
  "created": "2023-09-25",
  "author": {
    "reference": "Practitioner/example",
    "display": "Bác sĩ Nguyễn Văn C"
  },
  "careTeam": [
    {
      "reference": "CareTeam/diabetes-team"
    }
  ],
  "addresses": [
    {
      "reference": "Condition/diabetes-example"
    }
  ],
  "goal": [
    {
      "reference": "Goal/diabetes-hba1c-goal"
    },
    {
      "reference": "Goal/diabetes-weight-goal"
    }
  ],
  "activity": [
    {
      "reference": {
        "reference": "ServiceRequest/diabetes-nutrition"
      },
      "status": "scheduled",
      "description": "Tư vấn dinh dưỡng"
    },
    {
      "detail": {
        "status": "in-progress",
        "description": "Theo dõi đường huyết tại nhà",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "33747003",
              "display": "Blood glucose monitoring"
            }
          ]
        },
        "scheduledTiming": {
          "repeat": {
            "frequency": 2,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "productCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "19139007",
              "display": "Blood glucose meter"
            }
          ]
        }
      }
    },
    {
      "detail": {
        "status": "in-progress",
        "description": "Tập thể dục thường xuyên",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "229065009",
              "display": "Exercise therapy"
            }
          ]
        },
        "scheduledTiming": {
          "repeat": {
            "frequency": 5,
            "period": 1,
            "periodUnit": "wk"
          }
        },
        "statusReason": {
          "text": "Hỗ trợ kiểm soát đường huyết và giảm cân"
        }
      }
    }
  ],
  "note": [
    {
      "text": "Bệnh nhân cần được đánh giá lại sau 3 tháng để điều chỉnh kế hoạch nếu cần."
    }
  ]
}
```

**Cải tiến trong FHIR R5**

FHIR R5 cải thiện CarePlan với:

1. **Cấu trúc hoạt động phong phú hơn**:
   * Mở rộng các loại hoạt động có thể được đưa vào kế hoạch
   * Hỗ trợ tốt hơn cho các kế hoạch phức tạp với nhiều hoạt động
2. **Theo dõi tiến trình chi tiết hơn**:
   * Cải thiện cách theo dõi trạng thái của từng hoạt động
   * Thêm thông tin về kết quả và lý do thay đổi
3. **Liên kết với các tài nguyên khác**:
   * Mối quan hệ rõ ràng hơn với Goals và CareTeam
   * Hỗ trợ tốt hơn cho việc tham chiếu đến các tài nguyên liên quan
4. **Hỗ trợ cá nhân hóa kế hoạch**:
   * Cải thiện khả năng điều chỉnh kế hoạch theo nhu cầu cá nhân
   * Hỗ trợ tốt hơn cho việc tham gia của bệnh nhân

#### CareTeam Resource

CareTeam biểu diễn nhóm người và/hoặc tổ chức tham gia vào việc cung cấp dịch vụ chăm sóc cho một bệnh nhân.

**Ví dụ về CareTeam**

```json
{
  "resourceType": "CareTeam",
  "id": "diabetes-team",
  "status": "active",
  "name": "Đội chăm sóc đái tháo đường",
  "subject": {
    "reference": "Patient/example"
  },
  "period": {
    "start": "2023-10-01"
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "LA27976-2",
          "display": "Diabetes"
        }
      ]
    }
  ],
  "participant": [
    {
      "role": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "106291005",
            "display": "Diabetologist"
          }
        ]
      },
      "member": {
        "reference": "Practitioner/endocrinologist-example",
        "display": "Bác sĩ Nguyễn Văn C"
      }
    },
    {
      "role": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "5921000124103",
            "display": "Diabetes nurse specialist"
          }
        ]
      },
      "member": {
        "reference": "Practitioner/nurse-example",
        "display": "Y tá Lê Thị D"
      }
    },
    {
      "role": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "159033005",
            "display": "Dietician"
          }
        ]
      },
      "member": {
        "reference": "Practitioner/dietician-example",
        "display": "Chuyên gia dinh dưỡng Phạm Văn E"
      }
    },
    {
      "role": {
        "text": "Người chăm sóc chính"
      },
      "member": {
        "reference": "RelatedPerson/family-example",
        "display": "Trần Thị F (Vợ)"
      }
    }
  ],
  "managingOrganization": [
    {
      "reference": "Organization/hospital-example"
    }
  ],
  "note": [
    {
      "text": "Họp đánh giá tiến trình mỗi 3 tháng"
    }
  ]
}
```

**Cải tiến trong FHIR R5**

FHIR R5 cải thiện CareTeam với:

1. **Cấu trúc thành viên đội ngũ rõ ràng hơn**:
   * Mở rộng thông tin về vai trò và trách nhiệm
   * Hỗ trợ tốt hơn cho thông tin liên hệ
2. **Quản lý đội ngũ linh hoạt hơn**:
   * Cải thiện cách theo dõi sự thay đổi trong đội ngũ
   * Hỗ trợ tốt hơn cho việc phân công nhiệm vụ
3. **Tích hợp với quy trình chăm sóc**:
   * Mối quan hệ rõ ràng hơn với CarePlan
   * Cải thiện khả năng liên kết với EpisodeOfCare
4. **Phân loại đội ngũ chi tiết hơn**:
   * Thêm thuộc tính để phân loại loại đội ngũ
   * Hỗ trợ tốt hơn cho các mô hình chăm sóc khác nhau

#### Goal Resource

Goal biểu diễn một kết quả mong muốn cụ thể được đặt ra cho bệnh nhân.

**Ví dụ về Goal**

```json
{
  "resourceType": "Goal",
  "id": "diabetes-hba1c-goal",
  "lifecycleStatus": "active",
  "achievementStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/goal-achievement",
        "code": "in-progress",
        "display": "In Progress"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/goal-category",
          "code": "treatment",
          "display": "Treatment"
        }
      ]
    }
  ],
  "priority": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/goal-priority",
        "code": "high-priority",
        "display": "High Priority"
      }
    ]
  },
  "description": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "59261-8",
        "display": "Hemoglobin A1c target"
      }
    ],
    "text": "Mục tiêu HbA1c"
  },
  "subject": {
    "reference": "Patient/example"
  },
  "startDate": "2023-10-01",
  "targetDate": "2024-03-31",
  "target": [
    {
      "measure": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "4548-4",
            "display": "Hemoglobin A1c"
          }
        ]
      },
      "detailQuantity": {
        "value": 7.0,
        "unit": "%",
        "system": "http://unitsofmeasure.org",
        "code": "%"
      },
      "dueDate": "2024-03-31"
    }
  ],
  "statusDate": "2023-10-15",
  "statusReason": "Kiểm soát đường huyết dài hạn",
  "expressedBy": {
    "reference": "Practitioner/endocrinologist-example"
  },
  "addresses": [
    {
      "reference": "Condition/diabetes-example"
    }
  ],
  "note": [
    {
      "text": "Bệnh nhân có tiến triển tốt, lần đo gần nhất là 7.8%"
    }
  ]
}
```

**Cải tiến trong FHIR R5**

FHIR R5 cải thiện Goal với:

1. **Định nghĩa mục tiêu rõ ràng hơn**:
   * Mở rộng cách xác định mục tiêu cụ thể
   * Hỗ trợ tốt hơn cho các mục tiêu định lượng và định tính
2. **Theo dõi tiến trình chi tiết hơn**:
   * Cải thiện cách đánh giá và ghi nhận tiến trình
   * Thêm thông tin về những thay đổi trong mục tiêu
3. **Liên kết với kế hoạch chăm sóc**:
   * Mối quan hệ rõ ràng hơn với CarePlan
   * Hỗ trợ tốt hơn cho việc điều chỉnh mục tiêu theo thời gian
4. **Tham gia của bệnh nhân**:
   * Cải thiện cách ghi nhận mục tiêu do bệnh nhân đặt ra
   * Hỗ trợ tốt hơn cho việc chia sẻ quá trình ra quyết định

### Clinical Genomics Resources: Dữ liệu di truyền

FHIR R5 mang đến sự cải tiến đáng kể trong việc hỗ trợ thông tin genomics (di truyền học), phản ánh tầm quan trọng ngày càng tăng của y học chính xác và dữ liệu di truyền trong chăm sóc sức khỏe.

#### MolecularSequence Resource

MolecularSequence (trước đây là Sequence) là tài nguyên cốt lõi để biểu diễn dữ liệu trình tự phân tử trong FHIR.

**Ví dụ về MolecularSequence**

```json
{
  "resourceType": "MolecularSequence",
  "id": "brca1-example",
  "type": "dna",
  "coordinateSystem": 0,
  "patient": {
    "reference": "Patient/example"
  },
  "specimen": {
    "reference": "Specimen/genetics-example"
  },
  "device": {
    "reference": "Device/sequencer-example"
  },
  "performer": {
    "reference": "Organization/genetics-lab-example"
  },
  "quantity": {
    "value": 30,
    "unit": "x",
    "system": "http://unitsofmeasure.org",
    "code": "x"
  },
  "referenceSeq": {
    "chromosome": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/chromosome-human",
          "code": "17",
          "display": "chromosome 17"
        }
      ]
    },
    "genomeBuild": {
      "text": "GRCh38/hg38"
    },
    "referenceSeqId": {
      "coding": [
        {
          "system": "http://www.ncbi.nlm.nih.gov/nuccore",
          "code": "NC_000017.11",
          "display": "Homo sapiens chromosome 17, GRCh38.p13"
        }
      ]
    },
    "windowStart": 43044295,
    "windowEnd": 43125483
  },
  "variant": [
    {
      "start": 43095800,
      "end": 43095800,
      "observedAllele": "A",
      "referenceAllele": "G",
      "cigar": "1M"
    }
  ],
  "repository": [
    {
      "type": "login",
      "url": "https://sequencerepository.example.org",
      "name": "Laboratory Sequence Repository"
    }
  ],
  "pointer": [
    {
      "reference": "Observation/brca1-variant-observation"
    }
  ]
}
```

**Cải tiến trong FHIR R5**

FHIR R5 mang đến những cải tiến quan trọng cho MolecularSequence:

1. **Mô hình dữ liệu phong phú hơn**:
   * Hỗ trợ đầy đủ hơn cho các loại dữ liệu di truyền
   * Cải thiện cách biểu diễn biến thể di truyền
2. **Tích hợp với báo cáo lâm sàng**:
   * Liên kết tốt hơn với Observation và DiagnosticReport
   * Hỗ trợ phát hiện biến thể và báo cáo lâm sàng
3. **Liên kết với nguồn dữ liệu bên ngoài**:
   * Cải thiện cách tham chiếu đến cơ sở dữ liệu genomics
   * Hỗ trợ tốt hơn cho định danh trình tự tham chiếu
4. **Hỗ trợ dữ liệu genomics lớn**:
   * Khả năng xử lý bộ dữ liệu lớn hơn
   * Cải thiện chiến lược tham chiếu cho dữ liệu lớn

#### GenomicStudy Resource (Mới trong R5)

GenomicStudy là tài nguyên mới trong R5, cung cấp cấu trúc để quản lý các nghiên cứu di truyền.

**Ví dụ về GenomicStudy**

```json
{
  "resourceType": "GenomicStudy",
  "id": "brca-panel-study",
  "status": "completed",
  "type": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/genomic-study-type",
        "code": "panel",
        "display": "Gene Panel"
      }
    ]
  },
  "subject": {
    "reference": "Patient/example"
  },
  "encounter": {
    "reference": "Encounter/genetics-encounter"
  },
  "startDate": "2023-10-01",
  "completionDate": "2023-10-10",
  "reason": [
    {
      "concept": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "428090002",
            "display": "Family history of malignant neoplasm of breast"
          }
        ]
      }
    }
  ],
  "description": "Xét nghiệm bảng gen ung thư vú và buồng trứng di truyền (BRCA1/BRCA2)",
  "analysis": [
    {
      "identifier": {
        "system": "http://example.org/genomicanalysis",
        "value": "brca-analysis-123"
      },
      "methodType": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/genomic-analysis-method",
            "code": "ngs",
            "display": "Next-Generation Sequencing"
          }
        ]
      },
      "title": "Phân tích bảng gen BRCA",
      "specimen": [
        {
          "reference": "Specimen/genetics-example"
        }
      ],
      "performer": {
        "reference": "Organization/genetics-lab-example"
      },
      "device": {
        "reference": "Device/sequencer-example"
      },
      "genomeBuild": {
        "text": "GRCh38/hg38"
      },
      "result": [
        {
          "reference": "DiagnosticReport/brca-panel-report"
        }
      ]
    }
  ]
}
```

**Đặc điểm của GenomicStudy trong R5**

GenomicStudy, là tài nguyên mới trong R5, mang đến những khả năng đáng chú ý:

1. **Quản lý toàn diện nghiên cứu genomics**:
   * Cấu trúc thống nhất để theo dõi quá trình nghiên cứu từ đầu đến cuối
   * Hỗ trợ nhiều loại nghiên cứu khác nhau (bảng gen, giải trình tự toàn bộ bộ gen, v.v.)
2. **Tổ chức phân tích**:
   * Cấu trúc để quản lý nhiều phân tích trong một nghiên cứu
   * Liên kết với các tài nguyên kết quả
3. **Truy xuất nguồn gốc mẫu**:
   * Theo dõi mẫu sinh học được sử dụng
   * Liên kết với thông tin lâm sàng
4. **Tích hợp với quy trình lâm sàng**:
   * Liên kết với yêu cầu lâm sàng và lý do thực hiện
   * Hỗ trợ ra quyết định lâm sàng dựa trên dữ liệu di truyền

#### Observation Genomics

FHIR R5 cải thiện cách sử dụng Observation để biểu diễn kết quả genomics.

**Ví dụ về Observation cho biến thể di truyền**

```json
{
  "resourceType": "Observation",
  "id": "brca1-variant-observation",
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "laboratory",
          "display": "Laboratory"
        }
      ]
    },
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "genomics",
          "display": "Genomics"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "69548-6",
        "display": "Genetic variant assessment"
      }
    ]
  },
  "subject": {
    "reference": "Patient/example"
  },
  "effectiveDateTime": "2023-10-10",
  "performer": [
    {
      "reference": "Organization/genetics-lab-example"
    }
  ],
  "specimen": {
    "reference": "Specimen/genetics-example"
  },
  "device": {
    "reference": "Device/sequencer-example"
  },
  "component": [
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "48005-3",
            "display": "Genomic source class [Type]"
          }
        ]
      },
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "LA6683-2",
            "display": "Germline"
          }
        ]
      }
    },
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "48002-0",
            "display": "Genomic DNA change (gHGVS)"
          }
        ]
      },
      "valueString": "NC_000017.11:g.43095800G>A"
    },
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "51958-7",
            "display": "Transcript reference sequence [ID]"
          }
        ]
      },
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://www.ncbi.nlm.nih.gov/refseq",
            "code": "NM_007294.3",
            "display": "BRCA1, mRNA"
          }
        ]
      }
    },
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "48004-6",
            "display": "DNA change (c.HGVS)"
          }
        ]
      },
      "valueString": "NM_007294.3:c.5333-1G>A"
    },
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "53037-8",
            "display": "Genetic disease assessed [Identifier]"
          }
        ]
      },
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://omim.org",
            "code": "604370",
            "display": "Breast-ovarian cancer, familial, susceptibility to, 1"
          }
        ]
      }
    },
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "53378-6",
            "display": "Genetic variant clinical significance [Imp]"
          }
        ]
      },
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "LA6668-3",
            "display": "Pathogenic"
          }
        ]
      }
    }
  ]
}
```

**Cải tiến trong FHIR R5 cho Observation Genomics**

1. **Cấu trúc component phong phú hơn**:
   * Mở rộng các loại component chuẩn cho dữ liệu genomics
   * Hỗ trợ tốt hơn cho HGVS và các chuẩn biểu diễn biến thể
2. **Phân loại rõ ràng hơn**:
   * Thêm giá trị category cụ thể cho genomics
   * Cải thiện phân loại các loại quan sát di truyền
3. **Liên kết với các tài nguyên genomics khác**:
   * Tích hợp tốt hơn với MolecularSequence và GenomicStudy
   * Hỗ trợ tốt hơn cho việc truy xuất dữ liệu gốc
4. **Đánh giá lâm sàng**:
   * Cải thiện cách ghi nhận ý nghĩa lâm sàng
   * Hỗ trợ tốt hơn cho việc liên kết với các hướng dẫn và dữ liệu tham khảo

### Risk Assessments và Screening: Đánh giá nguy cơ và tầm soát

#### RiskAssessment Resource

RiskAssessment biểu diễn việc đánh giá khả năng một sự kiện có hại sẽ xảy ra trong tương lai, dựa trên các thông tin hiện tại.

**Ví dụ về RiskAssessment**

```json
{
  "resourceType": "RiskAssessment",
  "id": "cardiovascular-risk",
  "status": "final",
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "45701-0",
        "display": "Cardiovascular disease 10Y risk [Score] ACC-AHA Pooled Cohort"
      }
    ],
    "text": "Đánh giá nguy cơ bệnh tim mạch 10 năm"
  },
  "subject": {
    "reference": "Patient/example"
  },
  "encounter": {
    "reference": "Encounter/cardiology-visit"
  },
  "occurrenceDateTime": "2023-10-15",
  "condition": {
    "reference": "Condition/hypertension-example",
    "display": "Tăng huyết áp"
  },
  "performer": {
    "reference": "Practitioner/cardiologist-example",
    "display": "Bác sĩ Tim mạch Tạ Văn G"
  },
  "basis": [
    {
      "reference": "Observation/bp-example"
    },
    {
      "reference": "Observation/cholesterol-example"
    },
    {
      "reference": "Observation/smoking-status-example"
    },
    {
      "reference": "Observation/diabetes-status-example"
    }
  ],
  "prediction": [
    {
      "outcome": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "22298006",
            "display": "Myocardial infarction"
          }
        ],
        "text": "Nhồi máu cơ tim"
      },
      "probabilityDecimal": 0.15,
      "qualitativeRisk": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/risk-probability",
            "code": "moderate",
            "display": "Moderate"
          }
        ]
      },
      "whenRange": {
        "low": {
          "value": 0,
          "unit": "years",
          "system": "http://unitsofmeasure.org",
          "code": "a"
        },
        "high": {
          "value": 10,
          "unit": "years",
          "system": "http://unitsofmeasure.org",
          "code": "a"
        }
      },
      "rationale": "Dựa trên thuật toán ASCVD của ACC/AHA, bệnh nhân có các yếu tố nguy cơ: nam giới, 56 tuổi, hút thuốc, tăng huyết áp, và rối loạn lipid máu"
    }
  ],
  "mitigation": "Đề xuất điều trị statin liều trung bình, kiểm soát huyết áp, và tư vấn bỏ thuốc lá"
}
```

Tôi sẽ tiếp tục bài viết về Clinical Resources trong FHIR R5.

## Cải tiến trong FHIR R5

FHIR R5 cải thiện RiskAssessment với:

1. **Định nghĩa dự đoán phong phú hơn**:
   * Mở rộng cách biểu diễn các dự đoán rủi ro
   * Hỗ trợ tốt hơn cho nhiều kết quả và xác suất
2. **Cơ sở đánh giá chi tiết hơn**:
   * Cải thiện cách ghi nhận cơ sở đánh giá
   * Hỗ trợ tốt hơn cho việc tham chiếu đến các quan sát và tình trạng
3. **Chiến lược giảm thiểu**:
   * Thêm thông tin chi tiết về các biện pháp giảm thiểu rủi ro
   * Liên kết với các kế hoạch chăm sóc và can thiệp
4. **Tích hợp với quy trình lâm sàng**:
   * Cải thiện cách sử dụng đánh giá rủi ro trong quy trình lâm sàng
   * Hỗ trợ tốt hơn cho việc theo dõi thay đổi rủi ro theo thời gian

#### Questionnaire và QuestionnaireResponse: Công cụ tầm soát

FHIR R5 cải thiện đáng kể Questionnaire và QuestionnaireResponse, làm cho chúng trở thành công cụ mạnh mẽ hơn cho tầm soát và thu thập thông tin lâm sàng.

**Ví dụ về Questionnaire cho tầm soát trầm cảm**

```json
{
  "resourceType": "Questionnaire",
  "id": "phq9-questionnaire",
  "url": "http://example.org/Questionnaire/phq9",
  "version": "9.0",
  "title": "PHQ-9 Đánh giá trầm cảm",
  "status": "active",
  "subjectType": ["Patient"],
  "date": "2023-01-15",
  "publisher": "Bộ Y tế",
  "description": "Patient Health Questionnaire-9 (PHQ-9) để sàng lọc và đánh giá mức độ trầm cảm",
  "purpose": "Sàng lọc và đánh giá mức độ trầm cảm cho bệnh nhân trưởng thành",
  "item": [
    {
      "linkId": "intro",
      "text": "Trong 2 tuần qua, bạn có bị ảnh hưởng bởi bất kỳ vấn đề nào sau đây không?",
      "type": "display"
    },
    {
      "linkId": "1",
      "text": "Ít quan tâm hoặc thích thú trong việc làm mọi việc",
      "type": "choice",
      "required": true,
      "repeats": false,
      "answerValueSet": "http://example.org/ValueSet/phq-frequencies"
    },
    {
      "linkId": "2",
      "text": "Cảm thấy buồn bã, chán nản hoặc tuyệt vọng",
      "type": "choice",
      "required": true,
      "repeats": false,
      "answerValueSet": "http://example.org/ValueSet/phq-frequencies"
    },
    {
      "linkId": "3",
      "text": "Khó ngủ hoặc ngủ quá nhiều",
      "type": "choice",
      "required": true,
      "repeats": false,
      "answerValueSet": "http://example.org/ValueSet/phq-frequencies"
    },
    {
      "linkId": "4",
      "text": "Cảm thấy mệt mỏi hoặc ít năng lượng",
      "type": "choice",
      "required": true,
      "repeats": false,
      "answerValueSet": "http://example.org/ValueSet/phq-frequencies"
    },
    {
      "linkId": "5",
      "text": "Ăn kém ngon miệng hoặc ăn quá nhiều",
      "type": "choice",
      "required": true,
      "repeats": false,
      "answerValueSet": "http://example.org/ValueSet/phq-frequencies"
    },
    {
      "linkId": "6",
      "text": "Cảm thấy không tốt về bản thân - hoặc thất bại đã khiến bản thân hoặc gia đình thất vọng",
      "type": "choice",
      "required": true,
      "repeats": false,
      "answerValueSet": "http://example.org/ValueSet/phq-frequencies"
    },
    {
      "linkId": "7",
      "text": "Khó tập trung vào mọi việc, như đọc báo hoặc xem TV",
      "type": "choice",
      "required": true,
      "repeats": false,
      "answerValueSet": "http://example.org/ValueSet/phq-frequencies"
    },
    {
      "linkId": "8",
      "text": "Di chuyển hoặc nói chuyện chậm chạp đến mức người khác có thể nhận thấy, hoặc ngược lại - bồn chồn hoặc bứt rứt khiến bạn di chuyển nhiều hơn bình thường",
      "type": "choice",
      "required": true,
      "repeats": false,
      "answerValueSet": "http://example.org/ValueSet/phq-frequencies"
    },
    {
      "linkId": "9",
      "text": "Có ý nghĩ rằng bạn thà chết còn hơn hoặc nghĩ đến việc tự làm hại bản thân",
      "type": "choice",
      "required": true,
      "repeats": false,
      "answerValueSet": "http://example.org/ValueSet/phq-frequencies"
    },
    {
      "linkId": "10",
      "text": "Nếu bạn đã đánh dấu bất kỳ vấn đề nào, những vấn đề này đã gây khó khăn như thế nào cho bạn trong việc làm công việc, chăm sóc mọi thứ ở nhà, hoặc hòa thuận với người khác?",
      "type": "choice",
      "required": false,
      "repeats": false,
      "answerOption": [
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-difficulty",
            "code": "not-difficult",
            "display": "Không khó khăn"
          }
        },
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-difficulty",
            "code": "somewhat-difficult",
            "display": "Hơi khó khăn"
          }
        },
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-difficulty",
            "code": "very-difficult",
            "display": "Rất khó khăn"
          }
        },
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-difficulty",
            "code": "extremely-difficult",
            "display": "Cực kỳ khó khăn"
          }
        }
      ]
    }
  ]
}
```

**Ví dụ về QuestionnaireResponse**

```json
{
  "resourceType": "QuestionnaireResponse",
  "id": "phq9-response-example",
  "questionnaire": "http://example.org/Questionnaire/phq9",
  "status": "completed",
  "subject": {
    "reference": "Patient/example"
  },
  "encounter": {
    "reference": "Encounter/mental-health-visit"
  },
  "authored": "2023-10-20T09:30:00+07:00",
  "author": {
    "reference": "Practitioner/psychiatrist-example"
  },
  "item": [
    {
      "linkId": "intro",
      "text": "Trong 2 tuần qua, bạn có bị ảnh hưởng bởi bất kỳ vấn đề nào sau đây không?"
    },
    {
      "linkId": "1",
      "text": "Ít quan tâm hoặc thích thú trong việc làm mọi việc",
      "answer": [
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-frequencies",
            "code": "2",
            "display": "Hơn nửa số ngày"
          }
        }
      ]
    },
    {
      "linkId": "2",
      "text": "Cảm thấy buồn bã, chán nản hoặc tuyệt vọng",
      "answer": [
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-frequencies",
            "code": "3",
            "display": "Gần như mỗi ngày"
          }
        }
      ]
    },
    {
      "linkId": "3",
      "text": "Khó ngủ hoặc ngủ quá nhiều",
      "answer": [
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-frequencies",
            "code": "3",
            "display": "Gần như mỗi ngày"
          }
        }
      ]
    },
    {
      "linkId": "4",
      "text": "Cảm thấy mệt mỏi hoặc ít năng lượng",
      "answer": [
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-frequencies",
            "code": "2",
            "display": "Hơn nửa số ngày"
          }
        }
      ]
    },
    {
      "linkId": "5",
      "text": "Ăn kém ngon miệng hoặc ăn quá nhiều",
      "answer": [
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-frequencies",
            "code": "2",
            "display": "Hơn nửa số ngày"
          }
        }
      ]
    },
    {
      "linkId": "6",
      "text": "Cảm thấy không tốt về bản thân - hoặc thất bại đã khiến bản thân hoặc gia đình thất vọng",
      "answer": [
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-frequencies",
            "code": "2",
            "display": "Hơn nửa số ngày"
          }
        }
      ]
    },
    {
      "linkId": "7",
      "text": "Khó tập trung vào mọi việc, như đọc báo hoặc xem TV",
      "answer": [
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-frequencies",
            "code": "1",
            "display": "Một vài ngày"
          }
        }
      ]
    },
    {
      "linkId": "8",
      "text": "Di chuyển hoặc nói chuyện chậm chạp đến mức người khác có thể nhận thấy, hoặc ngược lại - bồn chồn hoặc bứt rứt khiến bạn di chuyển nhiều hơn bình thường",
      "answer": [
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-frequencies",
            "code": "1",
            "display": "Một vài ngày"
          }
        }
      ]
    },
    {
      "linkId": "9",
      "text": "Có ý nghĩ rằng bạn thà chết còn hơn hoặc nghĩ đến việc tự làm hại bản thân",
      "answer": [
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-frequencies",
            "code": "0",
            "display": "Không có"
          }
        }
      ]
    },
    {
      "linkId": "10",
      "text": "Nếu bạn đã đánh dấu bất kỳ vấn đề nào, những vấn đề này đã gây khó khăn như thế nào cho bạn trong việc làm công việc, chăm sóc mọi thứ ở nhà, hoặc hòa thuận với người khác?",
      "answer": [
        {
          "valueCoding": {
            "system": "http://example.org/CodeSystem/phq-difficulty",
            "code": "very-difficult",
            "display": "Rất khó khăn"
          }
        }
      ]
    }
  ]
}
```

**Cải tiến trong FHIR R5**

FHIR R5 cải thiện Questionnaire và QuestionnaireResponse với:

1. **Cấu trúc câu hỏi phong phú hơn**:
   * Mở rộng các loại câu hỏi và định dạng đáp án
   * Hỗ trợ tốt hơn cho câu hỏi phức tạp và có điều kiện
2. **Tính toán điểm và đánh giá**:
   * Cải thiện cách tính điểm tự động
   * Hỗ trợ tốt hơn cho việc đánh giá kết quả
3. **Tích hợp với quy trình lâm sàng**:
   * Liên kết tốt hơn với các tài nguyên lâm sàng khác
   * Hỗ trợ tốt hơn cho việc theo dõi thay đổi theo thời gian
4. **Trình bày và định dạng**:
   * Cải thiện cách hiển thị câu hỏi và hướng dẫn
   * Hỗ trợ tốt hơn cho đa ngôn ngữ và trình bày đáp ứng

### Procedure và ServiceRequest: Thủ thuật và yêu cầu dịch vụ

#### Procedure Resource

Procedure biểu diễn các hoạt động được thực hiện trên bệnh nhân, bao gồm phẫu thuật, chẩn đoán, điều trị, và các can thiệp khác.

**Ví dụ về Procedure**

```json
{
  "resourceType": "Procedure",
  "id": "appendectomy-example",
  "status": "completed",
  "category": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "387713003",
        "display": "Surgical procedure"
      }
    ]
  },
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "80146002",
        "display": "Appendectomy"
      }
    ],
    "text": "Phẫu thuật cắt ruột thừa"
  },
  "subject": {
    "reference": "Patient/example"
  },
  "encounter": {
    "reference": "Encounter/surgery-visit"
  },
  "performedDateTime": "2023-08-15T08:30:00+07:00",
  "recorder": {
    "reference": "Practitioner/nurse-example"
  },
  "asserter": {
    "reference": "Practitioner/surgeon-example"
  },
  "performer": [
    {
      "function": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
            "code": "PP",
            "display": "Primary Performer"
          }
        ]
      },
      "actor": {
        "reference": "Practitioner/surgeon-example",
        "display": "Bác sĩ phẫu thuật Hoàng Văn H"
      }
    },
    {
      "function": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
            "code": "AP",
            "display": "Assistant Performer"
          }
        ]
      },
      "actor": {
        "reference": "Practitioner/assistant-surgeon-example"
      }
    }
  ],
  "location": {
    "reference": "Location/operating-room-1",
    "display": "Phòng mổ 1"
  },
  "reasonCode": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "74400008",
          "display": "Appendicitis"
        }
      ],
      "text": "Viêm ruột thừa"
    }
  ],
  "bodySite": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "181255000",
          "display": "Entire appendix"
        }
      ]
    }
  ],
  "outcome": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "385669000",
        "display": "Successful"
      }
    ]
  },
  "report": [
    {
      "reference": "DiagnosticReport/surgical-pathology-report"
    }
  ],
  "complication": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "67678004",
          "display": "Postoperative wound infection"
        }
      ],
      "text": "Nhiễm trùng vết mổ sau phẫu thuật"
    }
  ],
  "followUp": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "241031001",
          "display": "Removal of surgical sutures"
        }
      ]
    }
  ],
  "note": [
    {
      "text": "Phẫu thuật diễn ra trơn tru, phát hiện ruột thừa bị viêm cấp tính, đã cắt bỏ hoàn toàn."
    }
  ]
}
```

**Cải tiến trong FHIR R5**

FHIR R5 cải thiện Procedure với:

1. **Cấu trúc thủ thuật phong phú hơn**:
   * Mở rộng thông tin về các giai đoạn thủ thuật
   * Hỗ trợ tốt hơn cho các thủ thuật phức tạp
2. **Thông tin chi tiết về người thực hiện**:
   * Cải thiện mô hình người thực hiện và vai trò
   * Hỗ trợ tốt hơn cho đội ngũ phẫu thuật
3. **Kết quả và biến chứng**:
   * Mở rộng cách ghi nhận kết quả và biến chứng
   * Hỗ trợ tốt hơn cho việc đánh giá hiệu quả
4. **Liên kết với tài nguyên khác**:
   * Cải thiện liên kết với ServiceRequest
   * Hỗ trợ tốt hơn cho việc theo dõi quá trình thực hiện

#### ServiceRequest Resource

ServiceRequest biểu diễn yêu cầu cung cấp dịch vụ chăm sóc sức khỏe, bao gồm các xét nghiệm, điều trị, tư vấn, và can thiệp khác.

**Ví dụ về ServiceRequest**

```json
{
  "resourceType": "ServiceRequest",
  "id": "mri-brain-request",
  "status": "active",
  "intent": "order",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/service-category",
          "code": "124",
          "display": "Diagnostic Imaging"
        }
      ]
    }
  ],
  "priority": "routine",
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "36722-3",
        "display": "MRI Brain"
      }
    ],
    "text": "Chụp cộng hưởng từ não"
  },
  "subject": {
    "reference": "Patient/example"
  },
  "encounter": {
    "reference": "Encounter/neurology-visit"
  },
  "occurrenceDateTime": "2023-11-05",
  "authoredOn": "2023-10-22",
  "requester": {
    "reference": "Practitioner/neurologist-example",
    "display": "Bác sĩ thần kinh Đinh Văn I"
  },
  "performer": [
    {
      "reference": "Organization/radiology-dept",
      "display": "Khoa Chẩn đoán hình ảnh"
    }
  ],
  "reasonCode": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "25064002",
          "display": "Headache"
        }
      ],
      "text": "Đau đầu kéo dài"
    }
  ],
  "reasonReference": [
    {
      "reference": "Condition/headache-example"
    }
  ],
  "supportingInfo": [
    {
      "reference": "Observation/neurological-exam"
    }
  ],
  "bodySite": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "12738006",
          "display": "Brain structure"
        }
      ]
    }
  ],
  "note": [
    {
      "text": "Yêu cầu chụp có và không có chất tương phản. Đặc biệt quan tâm đến vùng thái dương bên phải."
    }
  ],
  "patientInstruction": "Không ăn hoặc uống trong vòng 4 giờ trước khi chụp. Loại bỏ tất cả đồ kim loại."
}
```

**Cải tiến trong FHIR R5**

FHIR R5 cải thiện ServiceRequest với:

1. **Mô hình yêu cầu phong phú hơn**:
   * Mở rộng các loại yêu cầu dịch vụ
   * Hỗ trợ tốt hơn cho các yêu cầu phức tạp
2. **Thông tin chi tiết về lập kế hoạch**:
   * Cải thiện thông tin về thời gian và ưu tiên
   * Hỗ trợ tốt hơn cho việc điều phối dịch vụ
3. **Hướng dẫn rõ ràng hơn**:
   * Mở rộng hướng dẫn cho người thực hiện
   * Cải thiện hướng dẫn cho bệnh nhân
4. **Theo dõi và báo cáo**:
   * Liên kết tốt hơn với kết quả
   * Hỗ trợ tốt hơn cho việc theo dõi tiến trình

### DocumentReference và ClinicalImpression: Tài liệu y tế và ấn tượng lâm sàng

#### DocumentReference Resource

DocumentReference cung cấp thông tin về tài liệu lâm sàng và liên kết để truy cập nội dung của tài liệu.

**Ví dụ về DocumentReference**

```json
{
  "resourceType": "DocumentReference",
  "id": "discharge-summary",
  "status": "current",
  "docStatus": "final",
  "type": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "18842-5",
        "display": "Discharge summary"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/document-classcode",
          "code": "clinical-note",
          "display": "Clinical Note"
        }
      ]
    }
  ],
  "subject": {
    "reference": "Patient/example"
  },
  "date": "2023-08-20T15:30:00+07:00",
  "author": [
    {
      "reference": "Practitioner/surgeon-example",
      "display": "Bác sĩ phẫu thuật Hoàng Văn H"
    }
  ],
  "authenticator": {
    "reference": "Practitioner/department-head-example",
    "display": "Trưởng khoa Ngoại"
  },
  "custodian": {
    "reference": "Organization/hospital-example"
  },
  "relatesTo": [
    {
      "code": "replaces",
      "target": {
        "reference": "DocumentReference/previous-discharge-summary"
      }
    }
  ],
  "description": "Tóm tắt xuất viện sau phẫu thuật cắt ruột thừa",
  "securityLabel": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
          "code": "N",
          "display": "Normal"
        }
      ]
    }
  ],
  "content": [
    {
      "attachment": {
        "contentType": "application/pdf",
        "language": "vi-VN",
        "url": "http://example.org/documents/discharge-summary-123.pdf",
        "title": "Tóm tắt xuất viện - Nguyễn Văn A",
        "creation": "2023-08-20"
      },
      "format": {
        "system": "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
        "code": "urn:ihe:iti:xds:2017:mimeTypeSufficient",
        "display": "mimeType Sufficient"
      }
    }
  ],
  "context": {
    "encounter": [
      {
        "reference": "Encounter/surgery-visit"
      }
    ],
    "period": {
      "start": "2023-08-15",
      "end": "2023-08-20"
    },
    "related": [
      {
        "reference": "Procedure/appendectomy-example",
        "display": "Phẫu thuật cắt ruột thừa"
      }
    ]
  }
}
```

**Cải tiến trong FHIR R5**

FHIR R5 cải thiện DocumentReference với:

1. **Quản lý trạng thái tài liệu tốt hơn**:
   * Phân biệt rõ ràng giữa trạng thái tài nguyên và trạng thái tài liệu
   * Hỗ trợ tốt hơn cho vòng đời tài liệu
2. **Phân loại tài liệu phong phú hơn**:
   * Mở rộng các loại và danh mục tài liệu
   * Cải thiện cách phân loại theo nội dung và mục đích
3. **Tăng cường bảo mật**:
   * Cải thiện nhãn bảo mật và kiểm soát truy cập
   * Hỗ trợ tốt hơn cho việc quản lý quyền truy cập
4. **Tích hợp với bối cảnh lâm sàng**:
   * Liên kết tốt hơn với các tài nguyên lâm sàng liên quan
   * Cải thiện thông tin ngữ cảnh của tài liệu

#### ClinicalImpression Resource

ClinicalImpression đại diện cho đánh giá lâm sàng được thực hiện để xác định nhu cầu can thiệp hoặc điều trị dựa trên thông tin từ quan sát, kiểm tra, và lý luận của nhân viên y tế.

**Ví dụ** Tôi sẽ tiếp tục bài viết về Clinical Resources trong FHIR R5.

**Ví dụ về ClinicalImpression**

```json
{
  "resourceType": "ClinicalImpression",
  "id": "neurology-impression",
  "status": "completed",
  "description": "Đánh giá lâm sàng về tình trạng đau đầu kéo dài",
  "subject": {
    "reference": "Patient/example"
  },
  "encounter": {
    "reference": "Encounter/neurology-visit"
  },
  "effectiveDateTime": "2023-10-22",
  "date": "2023-10-22T14:30:00+07:00",
  "assessor": {
    "reference": "Practitioner/neurologist-example",
    "display": "Bác sĩ thần kinh Đinh Văn I"
  },
  "problem": [
    {
      "reference": "Condition/headache-example"
    }
  ],
  "investigation": [
    {
      "code": {
        "text": "Neurologic evaluation"
      },
      "item": [
        {
          "reference": "Observation/neurological-exam"
        },
        {
          "reference": "Observation/cranial-nerves-exam"
        }
      ]
    },
    {
      "code": {
        "text": "Previous diagnostics"
      },
      "item": [
        {
          "reference": "DiagnosticReport/head-ct-report"
        }
      ]
    }
  ],
  "finding": [
    {
      "itemCodeableConcept": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "37796009",
            "display": "Migraine"
          }
        ],
        "text": "Đau nửa đầu"
      },
      "basis": "Dựa trên mô tả cơn đau, các yếu tố kích phát, tiền sử gia đình và kết quả khám thần kinh"
    }
  ],
  "prognosisCodeableConcept": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "439031000124108",
          "display": "Favorable prognosis"
        }
      ]
    }
  ],
  "summary": "Bệnh nhân có biểu hiện phù hợp với đau nửa đầu kinh điển. Không có dấu hiệu của bệnh lý thực thể não. Khuyến nghị điều trị dự phòng và quản lý cơn cấp.",
  "note": [
    {
      "text": "Cần theo dõi đáp ứng với điều trị trong vòng 4 tuần."
    }
  ]
}
```

**Cải tiến trong FHIR R5**

FHIR R5 cải thiện ClinicalImpression với:

1. **Cấu trúc đánh giá lâm sàng phong phú hơn**:
   * Mở rộng cách ghi nhận phát hiện và ấn tượng
   * Hỗ trợ tốt hơn cho quá trình ra quyết định lâm sàng
2. **Tích hợp với quá trình chẩn đoán**:
   * Liên kết tốt hơn với các quan sát và xét nghiệm
   * Cải thiện cách ghi nhận cơ sở cho phát hiện
3. **Thông tin về tiên lượng**:
   * Thêm chi tiết về tiên lượng và kết quả dự kiến
   * Hỗ trợ tốt hơn cho kế hoạch điều trị dài hạn
4. **Liên kết với kế hoạch chăm sóc**:
   * Mối quan hệ rõ ràng hơn với các tài nguyên kế hoạch
   * Hỗ trợ tốt hơn cho việc chuyển từ đánh giá sang hành động

### Các tài nguyên mới trong FHIR R5

Ngoài việc cải tiến các tài nguyên hiện có, FHIR R5 cũng giới thiệu một số tài nguyên lâm sàng mới quan trọng:

#### CitableContent Resource

CitableContent là tài nguyên mới trong R5 dùđể biểu diễn nội dung trích dẫn được như hướng dẫn lâm sàng, khuyến cáo, và kiến thức y tế.

**Ví dụ về CitableContent**

```json
{
  "resourceType": "CitableContent",
  "id": "diabetes-guideline-excerpt",
  "status": "active",
  "title": "Hướng dẫn điều trị đái tháo đường type 2",
  "description": "Trích đoạn từ hướng dẫn quốc gia về điều trị đái tháo đường type 2",
  "url": "http://example.org/guidelines/diabetes-type2/2023",
  "version": "2023.1",
  "citeAs": {
    "text": "Hội Nội tiết và Đái tháo đường Việt Nam. Hướng dẫn chẩn đoán và điều trị đái tháo đường type 2, phiên bản 2023. Hà Nội, Việt Nam."
  },
  "date": "2023-01-15",
  "publisher": "Hội Nội tiết và Đái tháo đường Việt Nam",
  "content": [
    {
      "contentType": "text/markdown",
      "data": "IyMgxJBp4buBdSB0cuG7iyDEkcOhaSB0aMOhbyDEkcaw4budbmcgdHlwZSAyDQoNCiMjIyBNaeG7hW4gSGJBMWMgw41kZWFsw50NCg0KVHJvbmcgY8OhYyB0csaw4budbmcgaOG7o3AgxJHhuqd1IHRpw6puLCBt4bulYyB0acOqdSBIYkExYyA8IDclIMSRxrDhu6NjIGtodXnhur9uIGPDoW8gY2hvIG5o4buvbmcgYuG7h25oIG5ow6JuIHRy4buve5SjdW5nIHbDoCBraMO0bmcgY8OzIGLhuq9uaCBsw70gaMOyYyB24burfVSjbmcuDQoNCiMjIyBMaeG7gXUgxJHhuqd1IHRpw6puDQoNCk1ldGZvcm1pbiDEkcaw4bujYyBraMO0bmcgxJHhu4tuaCBsw6Aga2jhu51pIMSR4bqndSB0aeG7g24gdHJvbmcgxJFp4buBdSB0cuG7iyBiYW8gZ+G7k20ga2jDtG5nIGPDsyBjaOG7kW5nIGNo4buJIMSR4buLbmgsIHbDoCB0aW5oIGdpw6EgY2FvIHRyw6puIHRvw6BuIHRo4bq/IGdp4bubaSBraMOhYyAuLi4="
    }
  ],
  "topic": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "44054006",
          "display": "Type 2 diabetes mellitus"
        }
      ]
    }
  ],
  "author": [
    {
      "name": "Hội Nội tiết và Đái tháo đường Việt Nam"
    }
  ],
  "relatedArtifact": [
    {
      "type": "documentation",
      "label": "Hướng dẫn đầy đủ",
      "url": "http://example.org/guidelines/diabetes-type2/2023/full"
    },
    {
      "type": "citation",
      "citation": "American Diabetes Association. Standards of Medical Care in Diabetes—2023. Diabetes Care. 2023;46(Supplement 1)."
    }
  ]
}
```

**Ưu điểm của CitableContent**

1. **Quản lý nội dung y tế có cấu trúc**:
   * Hỗ trợ các dạng nội dung khác nhau (văn bản, markdown, HTML)
   * Quản lý phiên bản và thông tin trích dẫn
2. **Tích hợp với quy trình lâm sàng**:
   * Liên kết với hướng dẫn và khuyến cáo
   * Hỗ trợ ra quyết định lâm sàng dựa trên bằng chứng
3. **Kiến thức y khoa có thể chia sẻ**:
   * Hỗ trợ chia sẻ kiến thức giữa các hệ thống
   * Chuẩn hóa việc trích dẫn và tham khảo
4. **Quản lý truy xuất nguồn gốc**:
   * Theo dõi nguồn gốc nội dung y khoa
   * Hỗ trợ việc đánh giá chất lượng và độ tin cậy

#### InventoryReport Resource

InventoryReport là tài nguyên mới trong R5 dùng để quản lý thông tin về hàng tồn kho và sử dụng vật tư y tế.

**Ví dụ về InventoryReport**

```json
{
  "resourceType": "InventoryReport",
  "id": "medication-inventory-example",
  "status": "final",
  "countType": "snapshot",
  "operationType": "stock-take",
  "reportedDateTime": "2023-10-30T08:00:00+07:00",
  "reporter": {
    "reference": "Practitioner/pharmacy-tech-example"
  },
  "reportingPeriod": {
    "start": "2023-10-01",
    "end": "2023-10-30"
  },
  "inventoryListing": [
    {
      "category": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/supply-item-type",
            "code": "medication",
            "display": "Medication"
          }
        ]
      },
      "itemReference": {
        "reference": "Medication/metformin-500mg"
      },
      "location": {
        "reference": "Location/pharmacy-main"
      },
      "quantity": {
        "value": 320,
        "unit": "tab",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "TAB"
      },
      "onHand": true,
      "lot": "LOT123456",
      "expiry": "2025-06-30"
    },
    {
      "category": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/supply-item-type",
            "code": "medication",
            "display": "Medication"
          }
        ]
      },
      "itemReference": {
        "reference": "Medication/insulin-regular"
      },
      "location": {
        "reference": "Location/pharmacy-refrigerator"
      },
      "quantity": {
        "value": 45,
        "unit": "vial",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "VIAL"
      },
      "onHand": true,
      "lot": "INS789012",
      "expiry": "2024-03-15"
    }
  ]
}
```

**Ưu điểm của InventoryReport**

1. **Quản lý kho lâm sàng**:
   * Theo dõi số lượng và tình trạng vật tư y tế
   * Hỗ trợ quản lý hạn sử dụng và số lô
2. **Tích hợp với quy trình lâm sàng**:
   * Liên kết với việc sử dụng thuốc và vật tư
   * Hỗ trợ theo dõi tiêu thụ và dự báo nhu cầu
3. **Quản lý chuỗi cung ứng**:
   * Cải thiện tính minh bạch trong chuỗi cung ứng y tế
   * Hỗ trợ quản lý vật tư từ nhập kho đến sử dụng
4. **Phân tích sử dụng**:
   * Hỗ trợ phân tích mô hình sử dụng
   * Cải thiện hiệu quả quản lý tài nguyên

### Tích hợp và áp dụng Clinical Resources

Việc hiểu và áp dụng hiệu quả các tài nguyên lâm sàng trong FHIR R5 đòi hỏi một chiến lược tích hợp toàn diện. Dưới đây là một số nguyên tắc và phương pháp tiếp cận:

#### Mô hình tích hợp dựa trên quy trình lâm sàng

1. **Xác định quy trình lâm sàng cốt lõi**:
   * Phân tích quy trình chăm sóc bệnh nhân
   * Xác định các điểm tiếp xúc và trao đổi thông tin
2. **Ánh xạ tài nguyên vào quy trình**:
   * Xác định các tài nguyên FHIR phù hợp với từng bước
   * Thiết kế cách sử dụng tài nguyên tương ứng
3. **Xây dựng mô hình tham chiếu**:
   * Tạo mô hình tham chiếu cho các tình huống lâm sàng phổ biến
   * Chuẩn hóa cách biểu diễn thông tin
4. **Định nghĩa hồ sơ (profiles) và tiện ích mở rộng**:
   * Tùy chỉnh tài nguyên cho phù hợp với nhu cầu cụ thể
   * Xây dựng hồ sơ FHIR cho các trường hợp sử dụng chính

#### Chiến lược triển khai

1. **Triển khai theo giai đoạn**:
   * Bắt đầu với các tài nguyên cốt lõi
   * Mở rộng dần theo nhu cầu lâm sàng
2. **Sử dụng các ứng dụng tham khảo**:
   * Tận dụng các ứng dụng mẫu và thư viện
   * Học hỏi từ triển khai thành công
3. **Đánh giá và tối ưu hóa**:
   * Đánh giá hiệu quả sử dụng tài nguyên
   * Điều chỉnh và tối ưu hóa theo thời gian
4. **Xây dựng năng lực**:
   * Đào tạo đội ngũ về FHIR và tài nguyên lâm sàng
   * Phát triển kỹ năng mô hình hóa thông tin y tế

#### Ví dụ về tích hợp quy trình

Xét một quy trình quản lý bệnh đái tháo đường:

1. **Tiếp nhận bệnh nhân**:
   * Sử dụng Patient, Person
   * Ghi nhận thông tin cá nhân và nhân khẩu học
2. **Đánh giá lâm sàng**:
   * Sử dụng Observation, DiagnosticReport
   * Ghi nhận đường huyết, HbA1c, và các xét nghiệm liên quan
3. **Chẩn đoán và phân loại**:
   * Sử dụng Condition, ClinicalImpression
   * Ghi nhận chẩn đoán và mức độ
4. **Đánh giá nguy cơ**:
   * Sử dụng RiskAssessment
   * Đánh giá nguy cơ biến chứng
5. **Xây dựng kế hoạch điều trị**:
   * Sử dụng CarePlan, Goal, CareTeam
   * Định nghĩa mục tiêu và kế hoạch chăm sóc
6. **Kê đơn và thực hiện điều trị**:
   * Sử dụng MedicationRequest, MedicationAdministration
   * Quản lý thuốc và tuân thủ điều trị
7. **Theo dõi và đánh giá**:
   * Sử dụng Observation, Procedure
   * Ghi nhận kết quả theo dõi và can thiệp
8. **Tài liệu hóa**:
   * Sử dụng DocumentReference, Composition
   * Tạo và quản lý tài liệu lâm sàng

### Kết luận

FHIR R5 mang đến một bước tiến quan trọng trong việc chuẩn hóa và mô hình hóa thông tin lâm sàng. Các tài nguyên lâm sàng trong R5 không chỉ được cải tiến về mặt cấu trúc và tính linh hoạt, mà còn mở rộng để đáp ứng các nhu cầu mới trong chăm sóc sức khỏe hiện đại, như y học chính xác, quản lý rủi ro, và chăm sóc dựa trên giá trị.

Là một Solution Architect, việc nắm vững các tài nguyên lâm sàng trong FHIR R5 sẽ giúp bạn thiết kế các hệ thống y tế số hiệu quả, tạo nền tảng vững chắc cho việc trao đổi thông tin liền mạch, hỗ trợ ra quyết định lâm sàng, và cuối cùng là cải thiện kết quả chăm sóc bệnh nhân.

Với sự phát triển không ngừng của công nghệ y tế và xu hướng số hóa ngành y, FHIR và các tài nguyên lâm sàng của nó sẽ tiếp tục đóng vai trò then chốt trong việc xây dựng hệ sinh thái y tế kết nối, nơi thông tin lâm sàng được chia sẻ và sử dụng một cách hiệu quả để mang lại lợi ích tối đa cho bệnh nhân và hệ thống y tế.

Trong các bài viết tiếp theo, chúng ta sẽ đi sâu vào các nhóm tài nguyên FHIR khác và cách chúng tương tác với các tài nguyên lâm sàng để tạo nên một hệ thống thông tin y tế toàn diện.
