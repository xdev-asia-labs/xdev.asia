---
id: b1770c1f-dff1-4d81-82d3-e38e164fdfb0
title: 'Administrative Resources'
slug: administrative-resources
description: 'Fast Healthcare Interoperability Resources (FHIR) là tiêu chuẩn được phát triển bởi HL7, nhằm đơn giản hóa việc trao đổi dữ liệu giữa các hệ thống thông tin y tế. Khác với HL7 v2.x mà chúng ta đã tìm hiểu trước đây (với…'
duration_minutes: 26
is_free: true
video_url: null
sort_order: 2
section_title: 'Phần 6: Đào sâu Resource FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Fast Healthcare Interoperability Resources (FHIR) là tiêu chuẩn được phát triển bởi HL7, nhằm đơn giản hóa việc trao đổi dữ liệu giữa các hệ thống thông tin y tế. Khác với HL7 v2.x mà chúng ta đã tìm hiểu trước đây (với cấu trúc dạng văn bản phân cách bởi các ký tự đặc biệt), FHIR áp dụng các công nghệ web hiện đại và sử dụng cấu trúc RESTful API, với dữ liệu được biểu diễn dưới dạng JSON hoặc XML.

Hãy cùng khám phá các Administrative Resources quan trọng trong FHIR R5!

### Practitioner & PractitionerRole

#### Practitioner

Resource `Practitioner` đại diện cho một chuyên gia y tế - người trực tiếp hoặc gián tiếp tham gia vào việc cung cấp dịch vụ chăm sóc sức khỏe.

**Các thuộc tính chính:**

* `identifier`: Mã số định danh (ví dụ: số giấy phép hành nghề)
* `active`: Trạng thái hoạt động
* `name`: Họ tên
* `telecom`: Thông tin liên lạc (email, điện thoại)
* `gender`: Giới tính
* `birthDate`: Ngày sinh
* `address`: Địa chỉ
* `photo`: Hình ảnh
* `qualification`: Bằng cấp, chứng chỉ chuyên môn

**Ví dụ:**

```json
{
  "resourceType": "Practitioner",
  "id": "example",
  "identifier": [
    {
      "system": "http://example.org/fhir/identifier/medical-license",
      "value": "MD12345"
    }
  ],
  "active": true,
  "name": [
    {
      "family": "Nguyễn",
      "given": ["Văn", "A"],
      "prefix": ["BS."]
    }
  ],
  "gender": "male",
  "birthDate": "1970-05-12",
  "qualification": [
    {
      "code": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0360",
            "code": "MD",
            "display": "Doctor of Medicine"
          }
        ]
      },
      "period": {
        "start": "1995-05-21"
      },
      "issuer": {
        "display": "Đại học Y Hà Nội"
      }
    }
  ]
}
```

#### PractitionerRole

Resource `PractitionerRole` mô tả vai trò của một chuyên gia y tế trong một tổ chức cụ thể, với phạm vi thực hành và thời gian làm việc xác định.

**Các thuộc tính chính:**

* `identifier`: Mã định danh cho vai trò
* `active`: Trạng thái hoạt động
* `period`: Khoảng thời gian giữ vai trò
* `practitioner`: Tham chiếu đến Practitioner
* `organization`: Tham chiếu đến Organization
* `code`: Loại vai trò (bác sĩ, y tá, etc.)
* `specialty`: Chuyên khoa
* `location`: Địa điểm làm việc
* `healthcareService`: Dịch vụ y tế cung cấp
* `telecom`: Thông tin liên lạc trong vai trò này
* `availableTime`: Thời gian làm việc
* `notAvailable`: Thời gian không làm việc

**Ví dụ:**

```json
{
  "resourceType": "PractitionerRole",
  "id": "example",
  "active": true,
  "practitioner": {
    "reference": "Practitioner/example"
  },
  "organization": {
    "reference": "Organization/example"
  },
  "code": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/practitioner-role",
          "code": "doctor",
          "display": "Bác sĩ"
        }
      ]
    }
  ],
  "specialty": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "394579002",
          "display": "Cardiology"
        }
      ]
    }
  ],
  "location": [
    {
      "reference": "Location/example"
    }
  ],
  "availableTime": [
    {
      "daysOfWeek": ["mon", "tue", "wed", "thu", "fri"],
      "availableStartTime": "08:00:00",
      "availableEndTime": "17:00:00"
    }
  ],
  "notAvailable": [
    {
      "description": "Nghỉ phép",
      "during": {
        "start": "2023-12-25",
        "end": "2024-01-01"
      }
    }
  ]
}
```

### Organization & OrganizationAffiliation

#### Organization

Resource `Organization` đại diện cho một đơn vị cung cấp dịch vụ y tế hoặc liên quan đến y tế (bệnh viện, phòng khám, phòng xét nghiệm...).

**Các thuộc tính chính:**

* `identifier`: Mã định danh tổ chức
* `active`: Trạng thái hoạt động
* `type`: Loại tổ chức
* `name`: Tên tổ chức
* `alias`: Tên gọi khác
* `telecom`: Thông tin liên lạc
* `address`: Địa chỉ
* `partOf`: Tổ chức cấp trên
* `contact`: Thông tin liên hệ

**Ví dụ:**

```json
{
  "resourceType": "Organization",
  "id": "example",
  "identifier": [
    {
      "system": "http://example.org/fhir/identifier/organizations",
      "value": "BV001"
    }
  ],
  "active": true,
  "type": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/organization-type",
          "code": "prov",
          "display": "Healthcare Provider"
        }
      ]
    }
  ],
  "name": "Bệnh viện Đa khoa Trung ương",
  "telecom": [
    {
      "system": "phone",
      "value": "024.3825.4651",
      "use": "work"
    },
    {
      "system": "email",
      "value": "info@bvdktw.org",
      "use": "work"
    }
  ],
  "address": [
    {
      "use": "work",
      "type": "both",
      "text": "40 Tràng Thi, Hàng Trống, Hoàn Kiếm, Hà Nội",
      "city": "Hà Nội",
      "district": "Hoàn Kiếm",
      "postalCode": "100000"
    }
  ]
}
```

#### OrganizationAffiliation

Resource `OrganizationAffiliation` mô tả mối quan hệ giữa hai tổ chức, bao gồm các dịch vụ được cung cấp, vai trò, và thời gian của mối quan hệ.

**Các thuộc tính chính:**

* `identifier`: Mã định danh của mối quan hệ
* `active`: Trạng thái hoạt động
* `period`: Khoảng thời gian mối quan hệ có hiệu lực
* `organization`: Tổ chức chính
* `participatingOrganization`: Tổ chức tham gia
* `network`: Mạng lưới chăm sóc sức khỏe
* `code`: Loại mối quan hệ
* `specialty`: Chuyên khoa
* `location`: Địa điểm
* `healthcareService`: Dịch vụ y tế
* `telecom`: Thông tin liên lạc
* `endpoint`: Điểm kết nối

**Ví dụ:**

```json
{
  "resourceType": "OrganizationAffiliation",
  "id": "example",
  "active": true,
  "period": {
    "start": "2023-01-01",
    "end": "2023-12-31"
  },
  "organization": {
    "reference": "Organization/main-hospital"
  },
  "participatingOrganization": {
    "reference": "Organization/partner-clinic"
  },
  "code": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/organization-role",
          "code": "provider",
          "display": "Provider"
        }
      ]
    }
  ],
  "specialty": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "394802001",
          "display": "General medicine"
        }
      ]
    }
  ],
  "location": [
    {
      "reference": "Location/example"
    }
  ],
  "healthcareService": [
    {
      "reference": "HealthcareService/example"
    }
  ]
}
```

### Location & Endpoint

#### Location

Resource `Location` mô tả một địa điểm vật lý nơi dịch vụ y tế được cung cấp, hoặc nơi tài nguyên và bệnh nhân có thể được tìm thấy.

**Các thuộc tính chính:**

* `identifier`: Mã định danh địa điểm
* `status`: Trạng thái (active, suspended, inactive)
* `operationalStatus`: Trạng thái hoạt động
* `name`: Tên địa điểm
* `alias`: Tên gọi khác
* `description`: Mô tả
* `mode`: Chế độ (instance, kind)
* `type`: Loại địa điểm
* `telecom`: Thông tin liên lạc
* `address`: Địa chỉ
* `physicalType`: Loại hình vật lý
* `position`: Vị trí địa lý (kinh độ, vĩ độ)
* `managingOrganization`: Tổ chức quản lý
* `partOf`: Thuộc địa điểm lớn hơn
* `hoursOfOperation`: Giờ hoạt động

**Ví dụ:**

```json
{
  "resourceType": "Location",
  "id": "example",
  "status": "active",
  "name": "Khoa Nội tim mạch - Tầng 3",
  "description": "Khoa Nội tim mạch, tầng 3, khu nhà A",
  "mode": "instance",
  "type": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
          "code": "wa",
          "display": "Ward"
        }
      ]
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "024.3825.4651 (máy lẻ 301)",
      "use": "work"
    }
  ],
  "address": {
    "use": "work",
    "text": "40 Tràng Thi, Hàng Trống, Hoàn Kiếm, Hà Nội",
    "city": "Hà Nội",
    "postalCode": "100000"
  },
  "physicalType": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
        "code": "ro",
        "display": "Room"
      }
    ]
  },
  "position": {
    "longitude": 105.85,
    "latitude": 21.03,
    "altitude": 15
  },
  "managingOrganization": {
    "reference": "Organization/example"
  },
  "hoursOfOperation": [
    {
      "daysOfWeek": ["mon", "tue", "wed", "thu", "fri"],
      "openingTime": "08:00:00",
      "closingTime": "17:00:00"
    },
    {
      "daysOfWeek": ["sat"],
      "openingTime": "08:00:00",
      "closingTime": "12:00:00"
    }
  ]
}
```

#### Endpoint

Resource `Endpoint` đại diện cho một điểm kết nối kỹ thuật mà thông qua đó các dịch vụ được cung cấp.

**Các thuộc tính chính:**

* `identifier`: Mã định danh endpoint
* `status`: Trạng thái (active, suspended, error, off, etc.)
* `connectionType`: Loại kết nối (hl7-fhir-rest, hl7-fhir-msg, hl7v2-mllp, etc.)
* `name`: Tên endpoint
* `managingOrganization`: Tổ chức quản lý
* `contact`: Thông tin liên hệ
* `period`: Khoảng thời gian hoạt động
* `payloadType`: Loại payload được hỗ trợ
* `payloadMimeType`: MIME types được hỗ trợ
* `address`: URL hoặc địa chỉ của endpoint
* `header`: Các header cần thiết

**Ví dụ:**

```json
{
  "resourceType": "Endpoint",
  "id": "example",
  "status": "active",
  "connectionType": {
    "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
    "code": "hl7-fhir-rest",
    "display": "HL7 FHIR REST"
  },
  "name": "FHIR API của Bệnh viện Đa khoa",
  "managingOrganization": {
    "reference": "Organization/example"
  },
  "period": {
    "start": "2023-01-01"
  },
  "payloadType": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
          "code": "any",
          "display": "Any"
        }
      ]
    }
  ],
  "payloadMimeType": ["application/fhir+json", "application/fhir+xml"],
  "address": "https://fhir-api.benhvien.example/fhir"
}
```

### Encounter & EpisodeOfCare

#### Encounter

Resource `Encounter` mô tả quá trình tương tác giữa bệnh nhân và nhà cung cấp dịch vụ y tế, như lần thăm khám, nhập viện.

**Các thuộc tính chính:**

* `identifier`: Mã định danh cuộc thăm khám
* `status`: Trạng thái (planned, arrived, in-progress, finished, etc.)
* `class`: Phân loại (inpatient, outpatient, emergency, etc.)
* `type`: Loại thăm khám
* `serviceType`: Loại dịch vụ
* `priority`: Mức độ ưu tiên
* `subject`: Bệnh nhân
* `episodeOfCare`: EpisodeOfCare liên quan
* `basedOn`: ServiceRequest hoặc CarePlan liên quan
* `participant`: Người tham gia (bác sĩ, y tá...)
* `appointment`: Cuộc hẹn liên quan
* `period`: Khoảng thời gian
* `length`: Thời lượng
* `reasonCode`: Lý do thăm khám (mã)
* `reasonReference`: Lý do thăm khám (tham chiếu)
* `diagnosis`: Chẩn đoán liên quan
* `location`: Địa điểm
* `serviceProvider`: Nhà cung cấp dịch vụ

**Ví dụ:**

```json
{
  "resourceType": "Encounter",
  "id": "example",
  "status": "in-progress",
  "class": {
    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code": "AMB",
    "display": "ambulatory"
  },
  "type": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/encounter-type",
          "code": "FOLLOWUP",
          "display": "Khám theo dõi"
        }
      ]
    }
  ],
  "subject": {
    "reference": "Patient/example"
  },
  "participant": [
    {
      "type": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              "code": "PPRF",
              "display": "primary performer"
            }
          ]
        }
      ],
      "individual": {
        "reference": "Practitioner/example"
      }
    }
  ],
  "period": {
    "start": "2023-05-20T09:00:00+07:00"
  },
  "reasonCode": [
    {
      "coding": [
        {
          "system": "http://icd10.vn",
          "code": "I10",
          "display": "Tăng huyết áp"
        }
      ]
    }
  ],
  "location": [
    {
      "location": {
        "reference": "Location/example"
      },
      "status": "active"
    }
  ],
  "serviceProvider": {
    "reference": "Organization/example"
  }
}
```

#### EpisodeOfCare

Resource `EpisodeOfCare` đại diện cho một loạt các dịch vụ chăm sóc sức khỏe liên quan được cung cấp cho một bệnh nhân.

**Các thuộc tính chính:**

* `identifier`: Mã định danh đợt điều trị
* `status`: Trạng thái (planned, waitlist, active, finished, etc.)
* `type`: Loại đợt điều trị
* `diagnosis`: Chẩn đoán liên quan
* `patient`: Bệnh nhân
* `managingOrganization`: Tổ chức quản lý
* `period`: Khoảng thời gian
* `referralRequest`: Yêu cầu chuyển tuyến
* `careManager`: Người quản lý chăm sóc
* `team`: Nhóm chăm sóc

**Ví dụ:**

```json
{
  "resourceType": "EpisodeOfCare",
  "id": "example",
  "status": "active",
  "type": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/episodeofcare-type",
          "code": "hacc",
          "display": "Home and Community Care"
        }
      ]
    }
  ],
  "diagnosis": [
    {
      "condition": {
        "reference": "Condition/example"
      },
      "role": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
            "code": "CC",
            "display": "Chief complaint"
          }
        ]
      },
      "rank": 1
    }
  ],
  "patient": {
    "reference": "Patient/example"
  },
  "managingOrganization": {
    "reference": "Organization/example"
  },
  "period": {
    "start": "2023-05-01"
  },
  "careManager": {
    "reference": "Practitioner/example"
  }
}
```

### Schedule, Slot & Appointment

#### Schedule

Resource `Schedule` định nghĩa một khung thời gian mà các Slots có thể được đặt cho một hoạt động cụ thể và một người thực hiện.

**Các thuộc tính chính:**

* `identifier`: Mã định danh lịch
* `active`: Trạng thái hoạt động
* `serviceCategory`: Danh mục dịch vụ
* `serviceType`: Loại dịch vụ
* `specialty`: Chuyên khoa
* `actor`: Người hoặc địa điểm thực hiện
* `planningHorizon`: Khung thời gian lập kế hoạch
* `comment`: Ghi chú

**Ví dụ:**

```json
{
  "resourceType": "Schedule",
  "id": "example",
  "active": true,
  "serviceCategory": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/service-category",
          "code": "17",
          "display": "General Practice"
        }
      ]
    }
  ],
  "serviceType": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/service-type",
          "code": "124",
          "display": "General Practice Service"
        }
      ]
    }
  ],
  "specialty": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "394814009",
          "display": "General practice"
        }
      ]
    }
  ],
  "actor": [
    {
      "reference": "Practitioner/example",
      "display": "BS. Nguyễn Văn A"
    }
  ],
  "planningHorizon": {
    "start": "2023-06-01",
    "end": "2023-06-30"
  }
}
```

#### Slot

Resource `Slot` đại diện cho một khoảng thời gian cụ thể từ một Schedule nơi các cuộc hẹn có thể được đặt.

**Các thuộc tính chính:**

* `identifier`: Mã định danh slot
* `serviceCategory`: Danh mục dịch vụ
* `serviceType`: Loại dịch vụ
* `specialty`: Chuyên khoa
* `appointmentType`: Loại cuộc hẹn
* `schedule`: Lịch liên quan
* `status`: Trạng thái (free, busy, busy-unavailable, busy-tentative, entered-in-error)
* `start`: Thời gian bắt đầu
* `end`: Thời gian kết thúc
* `overbooked`: Đã đặt quá số lượng
* `comment`: Ghi chú

**Ví dụ:**

```json
{
  "resourceType": "Slot",
  "id": "example",
  "serviceCategory": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/service-category",
          "code": "17",
          "display": "General Practice"
        }
      ]
    }
  ],
  "schedule": {
    "reference": "Schedule/example"
  },
  "status": "free",
  "start": "2023-06-01T09:00:00+07:00",
  "end": "2023-06-01T09:15:00+07:00"
}
```

#### Appointment

Resource `Appointment` cung cấp thông tin về một cuộc hẹn đã lên lịch giữa bệnh nhân và nhà cung cấp dịch vụ y tế.

**Các thuộc tính chính:**

* `identifier`: Mã định danh cuộc hẹn
* `status`: Trạng thái (proposed, pending, booked, arrived, fulfilled, cancelled, etc.)
* `cancelationReason`: Lý do hủy
* `serviceCategory`: Danh mục dịch vụ
* `serviceType`: Loại dịch vụ
* `specialty`: Chuyên khoa
* `appointmentType`: Loại cuộc hẹn
* `reasonCode`: Lý do cuộc hẹn (mã)
* `reasonReference`: Lý do cuộc hẹn (tham chiếu)
* `priority`: Mức độ ưu tiên
* `description`: Mô tả
* `supportingInformation`: Thông tin bổ sung
* `start`: Thời gian bắt đầu
* `end`: Thời gian kết thúc
* `minutesDuration`: Thời lượng (phút)
* `slot`: Slot liên quan
* `created`: Thời điểm tạo
* `comment`: Ghi chú
* `patientInstruction`: Hướng dẫn cho bệnh nhân
* `basedOn`: ServiceRequest liên quan
* `participant`: Người tham gia

**Ví dụ:**

```json
{
  "resourceType": "Appointment",
  "id": "example",
  "status": "booked",
  "serviceCategory": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/service-category",
          "code": "17",
          "display": "General Practice"
        }
      ]
    }
  ],
  "appointmentType": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0276",
        "code": "FOLLOWUP",
        "display": "A follow up visit from a previous appointment"
      }
    ]
  },
  "reasonCode": [
    {
      "coding": [
        {
          "system": "http://icd10.vn",
          "code": "I10",
          "display": "Tăng huyết áp"
        }
      ]
    }
  ],
  "priority": 5,
  "description": "Tái khám tăng huyết áp",
  "start": "2023-06-01T09:00:00+07:00",
  "end": "2023-06-01T09:15:00+07:00",
  "created": "2023-05-25T10:00:00+07:00",
  "comment": "Bệnh nhân yêu cầu gặp BS. Nguyễn Văn A",
  "patientInstruction": "Mang theo thuốc đang uống và kết quả xét nghiệm máu",
  "participant": [
    {
      "type": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              "code": "PPRF",
              "display": "primary performer"
            }
          ]
        }
      ],
      "actor": {
        "reference": "Practitioner/example",
        "display": "BS. Nguyễn Văn A"
      },
      "required": "required",
      "status": "accepted"
    },
    {
      "type": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              "code": "SBJ",
              "display": "subject"
            }
          ]
        }
      ],
      "actor": {
        "reference": "Patient/example",
        "display": "Trần Văn B"
      },
      "required": "required",
      "status": "accepted"
    }
  ]
}
```

### ServiceRequest

Resource `ServiceRequest` mô tả yêu cầu một hoạt động chẩn đoán hoặc điều trị cho một bệnh nhân.

**Các thuộc tính chính:**

* `identifier`: Mã định danh yêu cầu
* `status`: Trạng thái (draft, active, on-hold, completed, etc.)
* `intent`: Ý định (proposal, plan, order, etc.)
* `category`: Danh mục dịch vụ
* `priority`: Mức độ ưu tiên
* `doNotPerform`: Không thực hiện
* `code`: Mã dịch vụ
* `orderDetail`: Chi tiết yêu cầu
* `quantity`: Số lượng
* `subject`: Bệnh nhân
* `encounter`: Cuộc thăm khám liên quan
* `occurrence`: Thời điểm/khoảng thời gian thực hiện
* `asNeeded`: Chỉ khi cần
* `authoredOn`: Thời điểm tạo
* `requester`: Người yêu cầu
* `performer`: Người thực hiện
* `reasonCode`: Lý do yêu cầu (mã)
* `reasonReference`: Lý do yêu cầu (tham chiếu)
* `supportingInfo`: Thông tin bổ sung
* `specimen`: Mẫu vật
* `bodySite`: Vị trí trên cơ thể
* `note`: Ghi chú

**Ví dụ:**

```json
{
  "resourceType": "ServiceRequest",
  "id": "example",
  "status": "active",
  "intent": "order",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/service-category",
          "code": "108",
          "display": "Radiology"
        }
      ]
    }
  ],
  "priority": "routine",
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "24627-2",
        "display": "Chest X-ray"
      }
    ],
    "text": "Chụp X-quang ngực"
  },
  "subject": {
    "reference": "Patient/example",
    "display": "Trần Văn B"
  },
  "encounter": {
    "reference": "Encounter/example"
  },
  "occurrenceDateTime": "2023-06-02",
  "authoredOn": "2023-06-01T10:00:00+07:00",
  "requester": {
    "reference": "Practitioner/example",
    "display": "BS. Nguyễn Văn A"
  },
  "performer": [
    {
      "reference": "PractitionerRole/example-radiologist"
    }
  ],
  "reasonCode": [
    {
      "coding": [
        {
          "system": "http://icd10.vn",
          "code": "R05",
          "display": "Ho"
        }
      ]
    }
  ],
  "bodySite": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "51185008",
          "display": "Thorax"
        }
      ]
    }
  ],
  "note": [
    {
      "text": "Bệnh nhân có tiền sử hen phế quản, nghi ngờ viêm phổi"
    }
  ]
}
```

### So sánh với HL7 v2.x

Để hiểu rõ hơn về FHIR, hãy so sánh với HL7 v2.x mà chúng ta đã tìm hiểu trước đây:

| Khía cạnh         | HL7 v2.x                                       | FHIR R5                                            |
| ----------------- | ---------------------------------------------- | -------------------------------------------------- |
| Cấu trúc          | Tin nhắn dạng văn bản với các segments, fields | Resources dạng JSON/XML với cấu trúc tường minh    |
| Giao thức         | MLLP qua TCP/IP                                | RESTful API qua HTTP/HTTPS                         |
| Tính rõ ràng      | Cấu trúc ngầm định, khó đọc                    | Cấu trúc rõ ràng, dễ đọc với người và máy          |
| Tính mở rộng      | Z-segments, tùy biến                           | Extensions với định nghĩa rõ ràng                  |
| Ngữ nghĩa         | Thiếu mô hình dữ liệu chính thức               | Mô hình dữ liệu chặt chẽ                           |
| Khả năng làm việc | Cần kiến thức chuyên sâu                       | Dễ tiếp cận với web developers                     |
| Tin nhắn HL7 v2.x | MSH, PID, PV1, ORC, OBR, OBX...                | Patient, Encounter, ServiceRequest, Observation... |

**Ví dụ một tin nhắn ADT trong HL7 v2.x:**

```
MSH|^~\&|SENDING_APP|SENDING_FACILITY|RECEIVING_APP|RECEIVING_FACILITY|20230615120000||ADT^A01|MSG00001|P|2.5.1
EVN|A01|20230615120000|||
PID|1||12345^^^MRN||Doe^John^A||19800101|M
PV1|1|I|2NORTH^2104^01|1|||004777^GOOD^SIDNEY^J^^^MD
```

**Phần tương đương trong FHIR:**

```json
// Patient resource
{
  "resourceType": "Patient",
  "id": "example",
  "identifier": [
    {
      "system": "urn:oid:1.2.36.146.595.217.0.1",
      "value": "12345"
    }
  ],
  "name": [
    {
      "family": "Doe",
      "given": ["John", "A"]
    }
  ],
  "gender": "male",
  "birthDate": "1980-01-01"
}

// Encounter resource 
{
  "resourceType": "Encounter",
  "id": "example",
  "status": "in-progress",
  "class": {
    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code": "IMP",
    "display": "inpatient"
  },
  "subject": {
    "reference": "Patient/example"
  },
  "participant": [
    {
      "individual": {
        "reference": "Practitioner/004777",
        "display": "Dr. Sidney J. Good"
      }
    }
  ],
  "period": {
    "start": "2023-06-15T12:00:00+07:00"
  },
  "location": [
    {
      "location": {
        "reference": "Location/2NORTH-2104"
      }
    }
  ]
}
```

### Triển khai thực tế

#### Xây dựng API FHIR với Administrative Resources

Sau đây là ví dụ triển khai đơn giản API FHIR sử dụng Node.js và Express:

```javascript
const express = require('express');
const app = express();
app.use(express.json());

// In-memory database (thực tế nên dùng MongoDB, PostgreSQL...)
const practitioners = [];
const organizations = [];
const appointments = [];

// API endpoints
app.get('/fhir/Practitioner', (req, res) => {
  // Triển khai search parameters theo đặc tả FHIR
  const name = req.query.name;
  let results = practitioners;
  
  if (name) {
    results = results.filter(p => 
      p.name.some(n => 
        n.family.toLowerCase().includes(name.toLowerCase()) || 
        n.given.some(g => g.toLowerCase().includes(name.toLowerCase()))
      )
    );
  }
  
  // Trả về Bundle resource
  res.json({
    resourceType: 'Bundle',
    type: 'searchset',
    total: results.length,
    entry: results.map(p => ({
      resource: p,
      search: {
        mode: 'match'
      }
    }))
  });
});

app.get('/fhir/Practitioner/:id', (req, res) => {
  const practitioner = practitioners.find(p => p.id === req.params.id);
  
  if (!practitioner) {
    return res.status(404).json({
      resourceType: 'OperationOutcome',
      issue: [
        {
          severity: 'error',
          code: 'not-found',
          diagnostics: `Practitioner with ID ${req.params.id} not found`
        }
      ]
    });
  }
  
  res.json(practitioner);
});

app.post('/fhir/Practitioner', (req, res) => {
  // Validate resource
  if (req.body.resourceType !== 'Practitioner') {
    return res.status(400).json({
      resourceType: 'OperationOutcome',
      issue: [
        {
          severity: 'error',
          code: 'invalid',
          diagnostics: 'Resource type must be Practitioner'
        }
      ]
    });
  }
  
  // Generate ID if not provided
  const newPractitioner = req.body;
  if (!newPractitioner.id) {
    newPractitioner.id = generateUUID();
  }
  
  practitioners.push(newPractitioner);
  
  res.status(201).json(newPractitioner);
});

// Tương tự cho các endpoints khác...

app.listen(3000, () => {
  console.log('FHIR Server running on port 3000');
});

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, 
          v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
```

#### Ứng dụng trong quản lý phòng khám

Một ứng dụng quản lý phòng khám sử dụng FHIR có thể tận dụng các Administrative Resources như sau:

1. **Quản lý nhân sự**: Sử dụng `Practitioner` và `PractitionerRole` để quản lý thông tin bác sĩ, y tá và nhân viên y tế.
2. **Quản lý cơ sở vật chất**: Sử dụng `Location` để quản lý các phòng khám, phòng thủ thuật, khu vực chờ.
3. **Lập lịch khám**: Sử dụng `Schedule`, `Slot` và `Appointment` để quản lý lịch làm việc của bác sĩ và cuộc hẹn của bệnh nhân.
4. **Quy trình khám bệnh**: Sử dụng `Encounter` để theo dõi các lần thăm khám của bệnh nhân, và `ServiceRequest` để yêu cầu xét nghiệm, chụp chiếu.
5. **Quản lý dịch vụ**: Sử dụng `HealthcareService` để quản lý các dịch vụ y tế cung cấp.

### Mô hình hóa các tình huống thực tế

#### Tình huống 1: Đặt lịch khám

**Luồng xử lý:**

1. Tạo `Schedule` cho bác sĩ
2. Tạo các `Slot` từ lịch làm việc
3. Bệnh nhân đặt `Appointment` vào một `Slot` còn trống
4. Khi bệnh nhân đến, cập nhật trạng thái `Appointment` thành "arrived"
5. Tạo `Encounter` liên kết với `Appointment`

#### Tình huống 2: Chuyển tuyến bệnh nhân

**Luồng xử lý:**

1. Tại bệnh viện gốc, tạo `ServiceRequest` với intent="referral"
2. Tạo `Task` để theo dõi việc chuyển tuyến
3. Tại bệnh viện đích, tạo `Appointment` và liên kết với `ServiceRequest`
4. Khi khám xong, cập nhật `Task` thành completed
5. Gửi `DiagnosticReport` và `Observation` về bệnh viện gốc

#### Tình huống 3: Quản lý khoa phòng

**Luồng xử lý:**

1. Tạo `Organization` cho bệnh viện
2. Tạo các `Organization` con cho mỗi khoa
3. Tạo `Location` cho mỗi phòng
4. Gán `PractitionerRole` cho từng nhân viên trong khoa
5. Sử dụng `Schedule` và `Slot` để quản lý lịch làm việc của khoa

### Bảo mật trong FHIR

FHIR cung cấp nhiều cơ chế bảo mật:

1. **OAuth 2.0 và OpenID Connect**: Xác thực và ủy quyền
2. **SMART on FHIR**: Khung ứng dụng cho phép apps truy cập dữ liệu FHIR an toàn
3. **Consent Resource**: Quản lý sự đồng ý của bệnh nhân
4. **AuditEvent Resource**: Ghi lại các hoạt động truy cập
5. **Provenance Resource**: Theo dõi nguồn gốc dữ liệu
6. **Communications Security**: TLS/HTTPS cho truyền dữ liệu
7. **Digital Signatures**: Đảm bảo tính toàn vẹn dữ liệu

### Tương lai của Administrative Resources trong FHIR

FHIR đang không ngừng phát triển, với các xu hướng:

1. **Chuẩn hóa quy trình làm việc**: Kết hợp với BPM (Business Process Management)
2. **Tích hợp AI/ML**: Dự đoán nhu cầu lịch hẹn, tối ưu hóa lịch làm việc
3. **FHIR Bulk Data**: Xử lý dữ liệu hành chính quy mô lớn
4. **Population Health Management**: Sử dụng dữ liệu hành chính để phân tích xu hướng sức khỏe cộng đồng
5. **Patient Access**: Bệnh nhân tự quản lý lịch hẹn và dữ liệu hành chính của mình

### Kết luận

Administrative Resources trong FHIR R5 cung cấp nền tảng mạnh mẽ cho việc quản lý hệ thống y tế hiện đại. Với cấu trúc dữ liệu rõ ràng, khả năng mở rộng và tích hợp dễ dàng, FHIR vượt trội so với các tiêu chuẩn cũ như HL7 v2.x.

Khác với HL7 v2.x với cú pháp phức tạp và khó đọc với con người, FHIR tận dụng các công nghệ web hiện đại, giúp nhà phát triển dễ dàng triển khai và tích hợp với các hệ thống khác.

Các Administrative Resources như Practitioner, Organization, Location, Encounter và Appointment làm nền tảng cho việc xây dựng các hệ thống y tế kỹ thuật số, từ phòng khám nhỏ đến mạng lưới bệnh viện phức tạp.

Với sự phát triển không ngừng của FHIR, chúng ta có thể mong đợi các Administrative Resources sẽ ngày càng trở nên hoàn thiện hơn, hỗ trợ tốt hơn cho các quy trình quản lý y tế phức tạp và nhu cầu trao đổi dữ liệu trên toàn cầu.
