---
id: 403c6a62-7be1-4987-9dfd-05fef1082def
title: 'Metadata & Control Elements'
slug: metadata-and-control-elements
description: 'Hôm nay chúng ta sẽ đi sâu vào một khía cạnh quan trọng nhưng thường bị bỏ qua: Metadata và Control Elements. Đây là những thành phần không chứa dữ liệu y tế trực tiếp, nhưng lại đóng vai trò thiết yếu trong việc quản…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 3
section_title: 'Phần 5: Cấu trúc dữ liệu FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Hôm nay chúng ta sẽ đi sâu vào một khía cạnh quan trọng nhưng thường bị bỏ qua: Metadata và Control Elements. Đây là những thành phần không chứa dữ liệu y tế trực tiếp, nhưng lại đóng vai trò thiết yếu trong việc quản lý, theo dõi và đảm bảo tính toàn vẹn của thông tin.

Tôi nhận thấy rằng hiểu sâu về các thành phần metadata sẽ giúp bạn thiết kế hệ thống FHIR hiệu quả hơn, đặc biệt trong môi trường phức tạp với nhiều nguồn dữ liệu và yêu cầu quản lý phiên bản.

### Resource.meta: Thẻ thông tin cho mọi tài nguyên

Mọi tài nguyên trong FHIR đều có một thành phần `meta` - phần "thông tin về thông tin" này cung cấp các dữ liệu kiểm soát quan trọng về tài nguyên.

#### Cấu trúc của Resource.meta

Thuộc tính `meta` có cấu trúc như sau:

```json
"meta": {
  "versionId": "1",
  "lastUpdated": "2023-10-25T15:30:15.123+07:00",
  "source": "https://example.org/fhir/Patient/123",
  "profile": [
    "http://hl7.org/fhir/StructureDefinition/Patient"
  ],
  "security": [
    {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "R",
      "display": "Restricted"
    }
  ],
  "tag": [
    {
      "system": "http://example.org/fhir/CodeSystem/tags",
      "code": "draft",
      "display": "Draft"
    }
  ]
}
```

#### Thành phần chính của meta

**1. versionId**

Định danh phiên bản của tài nguyên - mỗi khi tài nguyên được cập nhật, `versionId` sẽ thay đổi.

```json
"versionId": "3"
```

**2. lastUpdated**

Thời điểm cập nhật cuối cùng của tài nguyên.

```json
"lastUpdated": "2023-10-25T15:30:15.123+07:00"
```

**3. source**

URL gốc của tài nguyên này - hữu ích khi tài nguyên được sao chép qua nhiều hệ thống.

```json
"source": "https://hospital.example.org/fhir/Patient/123"
```

**4. profile**

Danh sách các profile mà tài nguyên này tuân thủ.

```json
"profile": [
  "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
]
```

**5. security**

Nhãn bảo mật áp dụng cho tài nguyên.

```json
"security": [
  {
    "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
    "code": "R",
    "display": "Restricted"
  }
]
```

**6. tag**

Nhãn phân loại tài nguyên theo mục đích sử dụng.

```json
"tag": [
  {
    "system": "http://example.org/fhir/CodeSystem/tags",
    "code": "draft",
    "display": "Draft"
  }
]
```

#### Cách sử dụng Resource.meta trong thực tế

1. **Theo dõi phiên bản**: Kiểm tra `versionId` và `lastUpdated` để biết tài nguyên đã được cập nhật khi nào
2. **Kiểm soát nguồn gốc**: Sử dụng `source` để theo dõi nơi tài nguyên được tạo
3. **Xác thực cấu trúc**: Kiểm tra `profile` để biết tài nguyên tuân theo cấu trúc chuẩn nào
4. **Quản lý bảo mật**: Sử dụng `security` để áp dụng các biện pháp kiểm soát truy cập
5. **Phân loại workflow**: Sử dụng `tag` để đánh dấu trạng thái trong quy trình làm việc

### Resource Versioning: Quản lý lịch sử thay đổi

FHIR cung cấp cơ chế quản lý phiên bản mạnh mẽ, cho phép theo dõi toàn bộ lịch sử của một tài nguyên qua thời gian.

#### Cách hoạt động của versioning

1. **Auto-versioning**: Mỗi khi tài nguyên được cập nhật, máy chủ FHIR tự động tăng `versionId`
2. **Version-aware updates**: Cập nhật có thể được thực hiện với điều kiện trên phiên bản hiện tại (để tránh ghi đè đồng thời)
3. **Version history**: Có thể truy xuất lịch sử phiên bản đầy đủ của tài nguyên

#### API Endpoints cho versioning

1.  **Truy xuất phiên bản cụ thể**:

    ```
    GET [base]/Patient/123/_history/2
    ```
2.  **Lấy lịch sử phiên bản**:

    ```
    GET [base]/Patient/123/_history
    ```
3.  **Cập nhật có điều kiện**:

    ```
    PUT [base]/Patient/123
    If-Match: "W/2"
    ```

#### Versioning trong R5

FHIR R5 cải tiến hệ thống versioning với:

1. **Support for version replacement**: Khả năng thay thế một phiên bản cụ thể
2. **Enhanced version references**: Tham chiếu rõ ràng hơn đến các phiên bản tài nguyên
3. **Version-aware search**: Tìm kiếm dựa trên thuộc tính phiên bản

#### Ví dụ thực tế về versioning

**Tình huống**: Bác sĩ cập nhật thông tin chẩn đoán trong hồ sơ bệnh nhân

1.  **Phiên bản ban đầu (v1)**:

    ```json
    {
      "resourceType": "Condition",
      "id": "diabetes",
      "meta": {
        "versionId": "1",
        "lastUpdated": "2023-10-01T10:00:00Z"
      },
      "subject": {
        "reference": "Patient/123"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "73211009",
            "display": "Diabetes mellitus"
          }
        ]
      },
      "clinicalStatus": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
            "code": "active",
            "display": "Active"
          }
        ]
      }
    }
    ```
2.  **Cập nhật (v2)**:

    ```json
    {
      "resourceType": "Condition",
      "id": "diabetes",
      "meta": {
        "versionId": "2",
        "lastUpdated": "2023-10-15T14:30:00Z"
      },
      "subject": {
        "reference": "Patient/123"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "44054006",
            "display": "Diabetes mellitus type 2"
          }
        ]
      },
      "clinicalStatus": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
            "code": "active",
            "display": "Active"
          }
        ]
      },
      "note": [
        {
          "text": "Cập nhật chẩn đoán cụ thể hơn sau khi có kết quả xét nghiệm"
        }
      ]
    }
    ```

### Tags, Profiles, và Security Labels: Phân loại và kiểm soát

#### Tags: Nhãn dán cho tài nguyên

Tags là các nhãn tùy chọn giúp phân loại tài nguyên theo nhiều tiêu chí khác nhau.

**Ví dụ về tags:**

```json
"tag": [
  {
    "system": "http://example.org/fhir/CodeSystem/tags",
    "code": "draft",
    "display": "Draft"
  },
  {
    "system": "http://example.org/fhir/CodeSystem/department",
    "code": "cardiology",
    "display": "Cardiology"
  }
]
```

**Ứng dụng của tags:**

1. **Quản lý workflow**: draft, review, final
2. **Phân loại theo dự án**: project-A, research-study-123
3. **Đánh dấu tính chất**: urgent, follow-up-required
4. **Phân loại theo khoa/bộ phận**: cardiology, radiology

#### Profiles: Định nghĩa cấu trúc tài nguyên

Profiles trong `meta.profile` cho biết tài nguyên tuân theo những cấu trúc chuẩn nào.

**Ví dụ về profiles:**

```json
"profile": [
  "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient",
  "http://example.org/fhir/StructureDefinition/diabetes-patient"
]
```

**Cách sử dụng profiles:**

1. **Xác thực dữ liệu**: Kiểm tra tài nguyên có tuân thủ cấu trúc yêu cầu không
2. **Hướng dẫn xử lý**: Giúp ứng dụng biết cách hiển thị hoặc xử lý tài nguyên
3. **Tương thích hệ thống**: Đảm bảo tài nguyên phù hợp với các hệ thống khác

#### Security Labels: Kiểm soát bảo mật

Security labels xác định các ràng buộc bảo mật và quyền truy cập cho tài nguyên.

**Ví dụ về security labels:**

```json
"security": [
  {
    "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
    "code": "R",
    "display": "Restricted"
  },
  {
    "system": "http://terminology.hl7.org/CodeSystem/security-label-purpose",
    "code": "TREAT",
    "display": "Treatment"
  }
]
```

**Các loại security labels:**

1. **Mức độ bảo mật**: Restricted (R), Normal (N), Very Restricted (V)
2. **Mục đích sử dụng**: Treatment, Payment, Research
3. **Kiểm soát truy cập**: Patient, Provider, Guardian
4. **Cảnh báo nội dung**: HIV, GDPR, Mental Health

### Resource Provenance: Theo dõi nguồn gốc và thay đổi

Provenance (nguồn gốc) là cách FHIR theo dõi chi tiết về việc ai đã thay đổi gì, khi nào và tại sao. Khác với versioning đơn giản, Provenance cung cấp thông tin chi tiết hơn về bối cảnh của sự thay đổi.

#### Tài nguyên Provenance

FHIR có tài nguyên riêng biệt là `Provenance` để lưu thông tin này:

```json
{
  "resourceType": "Provenance",
  "id": "example",
  "target": [
    {
      "reference": "Patient/123"
    }
  ],
  "recorded": "2023-10-25T14:30:00Z",
  "activity": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-DataOperation",
        "code": "UPDATE",
        "display": "update"
      }
    ]
  },
  "agent": [
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
            "code": "author",
            "display": "Author"
          }
        ]
      },
      "who": {
        "reference": "Practitioner/789",
        "display": "Dr. Alice Smith"
      }
    }
  ],
  "reason": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "CLINMOD",
          "display": "Clinical Medication Change"
        }
      ]
    }
  ],
  "entity": [
    {
      "role": "source",
      "what": {
        "reference": "Patient/123",
        "display": "Patient record before update"
      }
    }
  ]
}
```

#### Thành phần chính của Provenance

1. **target**: Tài nguyên mà thông tin provenance này áp dụng
2. **recorded**: Thời điểm ghi nhận
3. **activity**: Loại hoạt động thực hiện (CREATE, UPDATE, DELETE)
4. **agent**: Ai thực hiện hành động
5. **reason**: Lý do thay đổi
6. **entity**: Các tài nguyên liên quan (phiên bản trước, tài liệu gốc, v.v.)

#### Ứng dụng của Provenance

1. **Kiểm toán (Auditing)**: Theo dõi ai đã thay đổi dữ liệu và khi nào
2. **Tuân thủ quy định**: Đáp ứng yêu cầu pháp lý về truy xuất nguồn gốc dữ liệu
3. **Giải quyết tranh chấp**: Xác định chính xác thời điểm và người thay đổi dữ liệu
4. **Phân tích workflow**: Hiểu rõ quy trình làm việc và luồng thông tin

#### Provenance trong R5

FHIR R5 mở rộng khả năng của Provenance với:

1. **Enhanced agent information**: Thông tin chi tiết hơn về người thực hiện
2. **Improved entity tracking**: Theo dõi tốt hơn các thực thể liên quan
3. **Better reason documentation**: Ghi chép lý do thay đổi rõ ràng hơn

### Cách sử dụng Metadata trong FHIR R5

#### 1. Triển khai Quản lý Phiên bản Hiệu quả

```javascript
// Ví dụ: Cập nhật có điều kiện trên phiên bản
let patient = await fetchPatient(patientId);
let currentVersion = patient.meta.versionId;

// Thực hiện cập nhật
patient.name[0].family = "Nguyễn";

// Chỉ cập nhật nếu không ai khác đã thay đổi
let success = await updatePatient(patient, {
  ifMatch: `W/${currentVersion}`
});

if (!success) {
  // Xử lý xung đột
  console.log("Phiên bản đã bị thay đổi, cần tải lại");
}
```

#### 2. Tạo nhãn workflow tùy chỉnh

```javascript
// Thêm nhãn workflow vào tài nguyên
function addWorkflowTag(resource, workflowStatus) {
  if (!resource.meta) {
    resource.meta = {};
  }
  
  if (!resource.meta.tag) {
    resource.meta.tag = [];
  }
  
  // Xóa các tag workflow hiện có
  resource.meta.tag = resource.meta.tag.filter(tag => 
    tag.system !== "http://example.org/fhir/workflow-status"
  );
  
  // Thêm tag mới
  resource.meta.tag.push({
    system: "http://example.org/fhir/workflow-status",
    code: workflowStatus,
    display: workflowStatus.charAt(0).toUpperCase() + workflowStatus.slice(1)
  });
  
  return resource;
}

// Sử dụng
let updatedObservation = addWorkflowTag(observation, "preliminary");
```

#### 3. Tích hợp Provenance vào Luồng Ứng dụng

```javascript
// Tạo tài nguyên Provenance khi cập nhật dữ liệu
async function updateResourceWithProvenance(resource, user, reason) {
  // Cập nhật tài nguyên
  let updatedResource = await updateResource(resource);
  
  // Tạo bản ghi Provenance
  let provenance = {
    resourceType: "Provenance",
    target: [
      {
        reference: `${resource.resourceType}/${resource.id}`
      }
    ],
    recorded: new Date().toISOString(),
    activity: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-DataOperation",
          code: "UPDATE",
          display: "update"
        }
      ]
    },
    agent: [
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
              code: "author",
              display: "Author"
            }
          ]
        },
        who: {
          reference: `Practitioner/${user.id}`,
          display: user.name
        }
      }
    ],
    reason: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            code: reason.code,
            display: reason.display
          }
        ]
      }
    ]
  };
  
  // Lưu Provenance
  await createProvenance(provenance);
  
  return updatedResource;
}

// Sử dụng
let updatedCondition = await updateResourceWithProvenance(
  condition, 
  currentUser,
  { code: "CLINMOD", display: "Clinical Modification" }
);
```

#### 4. Áp dụng Security Labels cho Quản lý Quyền

```javascript
// Kiểm tra quyền truy cập dựa trên security labels
function canAccessResource(resource, user) {
  // Nếu không có security labels, cho phép truy cập
  if (!resource.meta || !resource.meta.security || resource.meta.security.length === 0) {
    return true;
  }
  
  // Kiểm tra các nhãn bảo mật
  for (let securityLabel of resource.meta.security) {
    // Kiểm tra nhãn hạn chế
    if (securityLabel.system === "http://terminology.hl7.org/CodeSystem/v3-Confidentiality") {
      if (securityLabel.code === "R" && !user.hasPermission("access_restricted")) {
        return false;
      }
      if (securityLabel.code === "V" && !user.hasPermission("access_very_restricted")) {
        return false;
      }
    }
    
    // Kiểm tra nhãn mục đích
    if (securityLabel.system === "http://terminology.hl7.org/CodeSystem/security-label-purpose") {
      if (securityLabel.code === "TREAT" && !user.hasRole("clinician")) {
        return false;
      }
      if (securityLabel.code === "HRESCH" && !user.hasRole("researcher")) {
        return false;
      }
    }
  }
  
  return true;
}

// Sử dụng
if (canAccessResource(patient, currentUser)) {
  displayPatientData(patient);
} else {
  showAccessDeniedMessage();
}
```

#### 5. Tìm kiếm dựa trên Metadata

```javascript
// Tìm kiếm tài nguyên dựa trên các tiêu chí metadata
async function findResourcesByMetadata(resourceType, metadataCriteria) {
  let queryParams = new URLSearchParams();
  
  // Thêm các tiêu chí tìm kiếm
  if (metadataCriteria.profile) {
    queryParams.append("_profile", metadataCriteria.profile);
  }
  
  if (metadataCriteria.tag) {
    queryParams.append("_tag", metadataCriteria.tag);
  }
  
  if (metadataCriteria.security) {
    queryParams.append("_security", metadataCriteria.security);
  }
  
  if (metadataCriteria.source) {
    queryParams.append("_source", metadataCriteria.source);
  }
  
  if (metadataCriteria.lastUpdated) {
    queryParams.append("_lastUpdated", metadataCriteria.lastUpdated);
  }
  
  // Thực hiện tìm kiếm
  let searchUrl = `${fhirServerUrl}/${resourceType}?${queryParams.toString()}`;
  let response = await fetch(searchUrl);
  return await response.json();
}

// Sử dụng
let draftObservations = await findResourcesByMetadata("Observation", {
  tag: "http://example.org/fhir/workflow-status|draft",
  lastUpdated: "gt2023-10-01"
});
```

### Các thực hành tốt nhất khi làm việc với Metadata trong FHIR R5

#### 1. Luôn duy trì tính nhất quán của metadata

Tạo các quy tắc và chính sách rõ ràng về việc sử dụng tags, profiles và security labels. Đảm bảo mọi hệ thống đều tuân thủ các quy tắc này để tránh xung đột và nhầm lẫn.

#### 2. Áp dụng phân quyền dựa trên security labels

Security labels không chỉ là metadata - chúng nên được tích hợp vào hệ thống phân quyền để đảm bảo dữ liệu nhạy cảm được bảo vệ đúng cách.

#### 3. Thiết lập hệ thống provenance từ đầu

Đừng để việc triển khai provenance là phần bổ sung sau này. Xây dựng hệ thống ghi nhận provenance từ đầu sẽ dễ dàng hơn nhiều so với việc cố gắng thêm nó vào sau.

#### 4. Tận dụng versioning cho các thay đổi quan trọng

Không phải mọi thay đổi đều cần một phiên bản mới, nhưng đối với những thay đổi có ý nghĩa lâm sàng hoặc pháp lý, hãy đảm bảo chúng được ghi lại thông qua cơ chế versioning.

#### 5. Sử dụng profiles để xác thực dữ liệu

Profiles không chỉ là metadata - chúng nên được sử dụng để xác thực tài nguyên. Kiểm tra tính tuân thủ profile trước khi lưu tài nguyên vào hệ thống.

### Kết luận

Metadata và Control Elements là các thành phần không thể thiếu trong bất kỳ triển khai FHIR nào. Chúng không chỉ cung cấp thông tin quản lý và kiểm soát, mà còn đóng vai trò quan trọng trong việc đảm bảo tính toàn vẹn, an toàn và tuân thủ của dữ liệu.

FHIR R5 mang đến nhiều cải tiến trong lĩnh vực này, cho phép kiểm soát và theo dõi dữ liệu tốt hơn. Việc hiểu và áp dụng đúng các yếu tố này sẽ giúp hệ thống của bạn không chỉ tương thích với tiêu chuẩn mà còn đáp ứng được các yêu cầu phức tạp về quản lý dữ liệu y tế.

Trong bài viết tiếp theo của series, chúng ta sẽ tìm hiểu về Search và Query trong FHIR R5 - cách tìm kiếm và truy vấn dữ liệu hiệu quả trong hệ sinh thái FHIR.
