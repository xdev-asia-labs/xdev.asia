---
id: 64351a61-4f7c-48ef-9a54-20ee02e8444a
title: 'FHIR Documents In R5'
slug: fhir-documents-in-r5
description: 'FHIR Documents là một cơ chế để tổng hợp và trình bày thông tin lâm sàng dưới dạng một tài liệu có cấu trúc, có thể đọc được và có khả năng trao đổi giữa các hệ thống. Tài liệu FHIR bao gồm nhiều tài nguyên (resources)…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 4
section_title: 'Phần 8: Operations & Messaging trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
FHIR Documents là một cơ chế để tổng hợp và trình bày thông tin lâm sàng dưới dạng một tài liệu có cấu trúc, có thể đọc được và có khả năng trao đổi giữa các hệ thống. Tài liệu FHIR bao gồm nhiều tài nguyên (resources) khác nhau được đóng gói trong một Bundle với loại "document".

**Đặc điểm chính của FHIR Documents:**

* **Tính toàn vẹn**: Một tài liệu FHIR là một đơn vị thông tin bất biến. Một khi đã được tạo, nó không thể thay đổi.
* **Tính lâu dài**: Tài liệu được thiết kế để lưu trữ lâu dài và vẫn có thể đọc được qua thời gian.
* **Tính xác thực**: Tài liệu có thể được ký số để đảm bảo nguồn gốc và tính toàn vẹn.
* **Tính đọc được**: Con người có thể đọc và hiểu được nội dung của tài liệu.

FHIR Documents trong R5 đã được cải tiến đáng kể so với các phiên bản trước, với nhiều tính năng mới và cải tiến. Hãy cùng khám phá chi tiết từng thành phần.

### 1. Composition Resource

Composition là tài nguyên trung tâm của một FHIR Document, đóng vai trò như một "trang bìa" hoặc "bảng mục lục" của tài liệu. Nó cung cấp ngữ cảnh và cấu trúc cho tất cả các tài nguyên khác trong tài liệu.

#### Cấu trúc của Composition trong R5

```json
{
  "resourceType": "Composition",
  "id": "example",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Composition"
    ]
  },
  "status": "final",
  "type": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "34133-9",
        "display": "Summary of episode note"
      }
    ]
  },
  "subject": {
    "reference": "Patient/example"
  },
  "encounter": {
    "reference": "Encounter/example"
  },
  "date": "2023-08-15T15:30:10+01:00",
  "author": [
    {
      "reference": "Practitioner/example"
    }
  ],
  "title": "Discharge Summary",
  "confidentiality": "N",
  "attester": [
    {
      "mode": "legal",
      "time": "2023-08-15T15:30:10+01:00",
      "party": {
        "reference": "Practitioner/example"
      }
    }
  ],
  "custodian": {
    "reference": "Organization/example"
  },
  "section": [
    {
      "title": "Medications",
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "10160-0",
            "display": "History of Medication use"
          }
        ]
      },
      "entry": [
        {
          "reference": "MedicationStatement/example"
        }
      ]
    }
  ]
}
```

#### Các thay đổi chính trong R5

1. **Cải tiến các thuộc tính xác thực (attester)**: R5 đã thêm các mode mới như "professional" và "personal" bên cạnh "legal".
2. **Thông tin tốt hơn về nguồn gốc (provenance)**: Thêm các trường để liên kết rõ ràng hơn với thông tin Provenance.
3. **Hỗ trợ cấu trúc mở rộng**: Khả năng mở rộng cấu trúc một cách linh hoạt hơn thông qua việc sử dụng các profile.

#### Các thực hành tốt nhất

* **Sử dụng mã chuẩn**: Luôn sử dụng LOINC hoặc SNOMED CT cho các trường `type` và `section.code`.
* **Xác định rõ ràng thông tin người xác thực**: Đảm bảo rằng vai trò của mỗi người xác thực được chỉ định rõ ràng.
* **Tham chiếu đầy đủ**: Đảm bảo tất cả các tài nguyên được tham chiếu từ các phần trong Composition đều có trong Bundle.

### 2. Document Bundles

Bundle là container chứa Composition và tất cả các tài nguyên được tham chiếu. Trong FHIR Documents, Bundle phải có loại "document".

#### Cấu trúc của Document Bundle trong R5

```json
{
  "resourceType": "Bundle",
  "id": "document-example",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Bundle-document"
    ]
  },
  "identifier": {
    "system": "urn:ietf:rfc:3986",
    "value": "urn:uuid:0c3151bd-1cbf-4d64-b04d-cd9187a4c6e0"
  },
  "type": "document",
  "timestamp": "2023-08-15T15:30:10+01:00",
  "entry": [
    {
      "fullUrl": "http://example.org/fhir/Composition/example",
      "resource": {
        "resourceType": "Composition",
        "id": "example",
        "status": "final",
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "34133-9",
              "display": "Summary of episode note"
            }
          ]
        },
        "subject": {
          "reference": "Patient/example"
        },
        "date": "2023-08-15T15:30:10+01:00",
        "author": [
          {
            "reference": "Practitioner/example"
          }
        ],
        "title": "Discharge Summary"
      }
    },
    {
      "fullUrl": "http://example.org/fhir/Patient/example",
      "resource": {
        "resourceType": "Patient",
        "id": "example",
        "name": [
          {
            "family": "Nguyễn",
            "given": ["Văn", "A"]
          }
        ]
      }
    },
    {
      "fullUrl": "http://example.org/fhir/Practitioner/example",
      "resource": {
        "resourceType": "Practitioner",
        "id": "example",
        "name": [
          {
            "family": "Lê",
            "given": ["Thị", "B"],
            "prefix": ["BS."]
          }
        ]
      }
    }
  ]
}
```

#### Các thay đổi chính trong R5

1. **Hỗ trợ signature trong Bundle**: R5 đã cải thiện hỗ trợ cho chữ ký số ở cấp Bundle.
2. **Timestamp bắt buộc**: Trường timestamp bây giờ là bắt buộc để đảm bảo tính toàn vẹn về thời gian.
3. **Cải thiện về quy tắc và ràng buộc**: R5 có các quy tắc và ràng buộc rõ ràng hơn về cấu trúc của một Document Bundle.

#### Các thực hành tốt nhất

* **Đặt Composition đầu tiên**: Tài nguyên Composition phải luôn là entry đầu tiên trong Bundle.
* **Sử dụng identifier độc nhất**: Mỗi Document Bundle phải có một identifier độc nhất vĩnh viễn.
* **Tài nguyên đầy đủ**: Đảm bảo tất cả các tài nguyên được tham chiếu đều có trong Bundle, không có tham chiếu đến tài nguyên bên ngoài.
* **Sử dụng fullUrl**: Mỗi entry trong Bundle phải có một fullUrl định danh duy nhất.

### 3. Document References

DocumentReference là một tài nguyên quan trọng trong hệ sinh thái FHIR Documents, dùng để tham chiếu đến các tài liệu bên ngoài hoặc cung cấp metadata về một tài liệu FHIR.

#### Cấu trúc của DocumentReference trong R5

```json
{
  "resourceType": "DocumentReference",
  "id": "example",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/DocumentReference"
    ]
  },
  "masterIdentifier": {
    "system": "urn:ietf:rfc:3986",
    "value": "urn:uuid:0c3151bd-1cbf-4d64-b04d-cd9187a4c6e0"
  },
  "identifier": [
    {
      "system": "http://hospital.example.org/documents",
      "value": "23425234-23470"
    }
  ],
  "status": "current",
  "docStatus": "final",
  "type": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "34133-9",
        "display": "Summary of episode note"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "47039-3",
          "display": "Hospital Admission history and physical note"
        }
      ]
    }
  ],
  "subject": {
    "reference": "Patient/example"
  },
  "date": "2023-08-15T15:30:10+01:00",
  "author": [
    {
      "reference": "Practitioner/example"
    }
  ],
  "authenticator": {
    "reference": "Practitioner/example"
  },
  "custodian": {
    "reference": "Organization/example"
  },
  "content": [
    {
      "attachment": {
        "contentType": "application/fhir+json",
        "url": "http://example.org/fhir/Binary/example"
      },
      "format": {
        "system": "urn:oid:1.3.6.1.4.1.19376.1.2.3",
        "code": "urn:hl7-org:sdwg:ccda-structuredBody:2.1",
        "display": "CCDA Structured Body"
      }
    }
  ],
  "context": {
    "encounter": [
      {
        "reference": "Encounter/example"
      }
    ],
    "period": {
      "start": "2023-08-10T15:30:10+01:00",
      "end": "2023-08-15T15:30:10+01:00"
    }
  }
}
```

#### Các thay đổi chính trong R5

1. **Thêm trường docStatus**: Một trường mới để phân biệt trạng thái của tài liệu (nháp, cuối cùng) khỏi trạng thái của tài nguyên.
2. **Cải tiến nội dung đa dạng**: Hỗ trợ tốt hơn cho tài liệu đa dạng định dạng.
3. **Liên kết tốt hơn đến tài nguyên**: Cải thiện khả năng liên kết giữa tài liệu và các tài nguyên FHIR khác.

#### Tương tác giữa DocumentReference và Document Bundle

DocumentReference có thể được sử dụng theo nhiều cách:

1. **Chỉ đến một Document Bundle**: DocumentReference có thể chỉ đến một FHIR Document Bundle hoàn chỉnh.
2. **Chỉ đến một tài liệu không phải FHIR**: Ví dụ như PDF, CDA, hoặc các định dạng khác.
3. **Đóng vai trò là "bản ghost" của tài liệu**: Một DocumentReference có thể chứa metadata của một tài liệu mà không có nội dung thực tế.

#### Các thực hành tốt nhất

* **Sử dụng masterIdentifier**: Luôn sử dụng trường này để tham chiếu đến identifier duy nhất của tài liệu.
* **Phân loại rõ ràng**: Sử dụng các hệ thống mã hóa chuẩn cho type và category.
* **Bảo vệ tính toàn vẹn**: Cân nhắc sử dụng hash và chữ ký số để đảm bảo tính toàn vẹn của tài liệu được tham chiếu.

### 4. Digital Signatures

Chữ ký số là một phần quan trọng của FHIR Documents, đảm bảo tính xác thực và toàn vẹn của tài liệu. R5 đã có những cải tiến đáng kể trong hỗ trợ chữ ký số.

#### Các loại chữ ký trong FHIR R5

1. **Chữ ký trên Bundle**: Được thêm vào trường `signature` của Bundle.
2. **Chữ ký trong Provenance**: Sử dụng tài nguyên Provenance với chữ ký.
3. **Chữ ký trong Attachment**: Cho các tài liệu bên ngoài.

#### Ví dụ về chữ ký trên Bundle

```json
{
  "resourceType": "Bundle",
  "type": "document",
  "signature": {
    "type": [
      {
        "system": "urn:iso-astm:E1762-95:2013",
        "code": "1.2.840.10065.1.12.1.1",
        "display": "Author's Signature"
      }
    ],
    "when": "2023-08-15T15:30:10+01:00",
    "who": {
      "reference": "Practitioner/example"
    },
    "targetFormat": "application/fhir+json",
    "sigFormat": "application/signature+json",
    "data": "base64encodedSignatureData..."
  }
}
```

#### Các cải tiến chữ ký số trong R5

1. **Cấu trúc chữ ký rõ ràng hơn**: Định nghĩa chi tiết hơn về định dạng và nội dung chữ ký.
2. **Hỗ trợ nhiều thuật toán**: Khả năng sử dụng các thuật toán chữ ký hiện đại.
3. **Xác định rõ nội dung được ký**: Trường `targetFormat` mới giúp xác định rõ định dạng nội dung được ký.

#### Các thực hành tốt nhất

* **Sử dụng mã chuẩn cho loại chữ ký**: Tuân thủ các mã loại chữ ký từ ISO-ASTM E1762-95:2013.
* **Xác định rõ người ký**: Luôn tham chiếu đến tài nguyên cụ thể đại diện cho người ký.
* **Sử dụng các thuật toán bảo mật**: Ưu tiên các thuật toán mạnh như RSA-SHA256 hoặc ECDSA.
* **Bao gồm thông tin timestamp**: Luôn bao gồm thời điểm ký chính xác.

### 5. Document Versioning

Quản lý phiên bản tài liệu là một khía cạnh quan trọng trong các hệ thống y tế. FHIR R5 cung cấp cơ chế rõ ràng hơn để quản lý các phiên bản của tài liệu.

#### Cơ chế quản lý phiên bản trong R5

1. **Sử dụng identifier và version**: DocumentReference sử dụng masterIdentifier cùng với việc theo dõi phiên bản.
2. **Liên kết giữa các phiên bản**: Sử dụng relatesTo để liên kết các phiên bản của tài liệu.
3. **Provenance**: Sử dụng tài nguyên Provenance để theo dõi lịch sử thay đổi.

#### Ví dụ về liên kết phiên bản trong DocumentReference

```json
{
  "resourceType": "DocumentReference",
  "id": "example-version2",
  "masterIdentifier": {
    "system": "urn:ietf:rfc:3986",
    "value": "urn:uuid:0c3151bd-1cbf-4d64-b04d-cd9187a4c6e0"
  },
  "status": "current",
  "docStatus": "amended",
  "relatesTo": [
    {
      "code": "replaces",
      "target": {
        "reference": "DocumentReference/example-version1"
      }
    }
  ],
  "content": [
    {
      "attachment": {
        "contentType": "application/fhir+json",
        "url": "http://example.org/fhir/Binary/example-v2"
      }
    }
  ]
}
```

#### Cải tiến trong quản lý phiên bản R5

1. **Mối quan hệ phiên bản rõ ràng hơn**: Mở rộng các loại mối quan hệ trong relatesTo.
2. **Trạng thái tài liệu**: Thêm trường docStatus để theo dõi trạng thái của tài liệu (nháp, cuối cùng, điều chỉnh, v.v.).
3. **Quản lý phiên bản tốt hơn trên server FHIR**: Quy định rõ ràng hơn về cách server quản lý phiên bản tài liệu.

#### Các thực hành tốt nhất

* **Duy trì identifier không đổi**: masterIdentifier phải không đổi giữa các phiên bản.
* **Chỉ định rõ mối quan hệ**: Sử dụng relatesTo với mã quan hệ chính xác (replaces, transforms, signs, appends).
* **Cập nhật trạng thái**: Đảm bảo trạng thái của tài liệu cũ được cập nhật thành "superseded" khi có phiên bản mới.
* **Lưu trữ tất cả phiên bản**: Không nên xóa phiên bản cũ khi tạo phiên bản mới.

### Triển khai FHIR Documents trong R5

#### Các trường hợp sử dụng phổ biến

1. **Trao đổi tài liệu lâm sàng**: Tóm tắt xuất viện, ghi chú thăm khám, báo cáo phẫu thuật.
2. **Hồ sơ sức khỏe điện tử**: Tổng hợp thông tin sức khỏe toàn diện của bệnh nhân.
3. **Báo cáo y tế**: Báo cáo xét nghiệm, báo cáo hình ảnh, báo cáo bệnh lý.
4. **Tài liệu pháp lý**: Đồng ý điều trị, chỉ thị trước, giấy ủy quyền y tế.

#### Thách thức và giải pháp

1. **Kích thước tài liệu lớn**:
   * Sử dụng Binary resource để tham chiếu đến nội dung lớn
   * Cân nhắc việc tách tài liệu thành nhiều Bundle nhỏ hơn
2. **Quản lý chữ ký số**:
   * Triển khai PKI (Public Key Infrastructure) phù hợp
   * Sử dụng các tiêu chuẩn chữ ký số được công nhận
3. **Tương thích ngược**:
   * Duy trì khả năng chuyển đổi giữa các phiên bản FHIR
   * Cung cấp API để chuyển đổi giữa các định dạng tài liệu
4. **Bảo mật và quyền riêng tư**:
   * Triển khai kiểm soát truy cập chi tiết
   * Mã hóa tài liệu khi lưu trữ và truyền tải

#### Ví dụ triển khai và mã nguồn mẫu

```java
// Ví dụ Java sử dụng HAPI FHIR để tạo Document Bundle
Bundle documentBundle = new Bundle();
documentBundle.setType(Bundle.BundleType.DOCUMENT);
documentBundle.setTimestamp(new Date());

// Tạo Composition
Composition composition = new Composition();
composition.setStatus(Composition.CompositionStatus.FINAL);
composition.setDate(new Date());
composition.setTitle("Tóm tắt xuất viện");
// Thêm các thông tin khác...

// Thêm Composition vào Bundle
documentBundle.addEntry()
    .setFullUrl("urn:uuid:" + UUID.randomUUID().toString())
    .setResource(composition);

// Thêm các tài nguyên khác
Patient patient = new Patient();
// Thiết lập thông tin bệnh nhân...
documentBundle.addEntry()
    .setFullUrl("urn:uuid:" + UUID.randomUUID().toString())
    .setResource(patient);

// Lưu hoặc gửi Bundle
IParser parser = ctx.newJsonParser().setPrettyPrint(true);
String documentJson = parser.encodeResourceToString(documentBundle);
```

### Kết luận

FHIR Documents trong phiên bản R5 đã có những cải tiến đáng kể, cung cấp nền tảng vững chắc cho việc trao đổi tài liệu y tế. Các tính năng như chữ ký số nâng cao, quản lý phiên bản tốt hơn, và cấu trúc tài liệu rõ ràng hơn đã giúp FHIR trở thành lựa chọn hàng đầu cho việc trao đổi tài liệu trong lĩnh vực y tế.

Khi triển khai FHIR Documents, việc tuân thủ các thực hành tốt nhất và hiểu rõ các cơ chế cốt lõi như Composition, Document Bundle, DocumentReference, chữ ký số, và quản lý phiên bản là vô cùng quan trọng để đảm bảo tính toàn vẹn, bảo mật, và tính sử dụng lâu dài của tài liệu y tế.

Hy vọng bài viết này giúp bạn có cái nhìn toàn diện về FHIR Documents trong R5 và cung cấp kiến thức cần thiết để triển khai chúng một cách hiệu quả trong hệ thống y tế của bạn.
