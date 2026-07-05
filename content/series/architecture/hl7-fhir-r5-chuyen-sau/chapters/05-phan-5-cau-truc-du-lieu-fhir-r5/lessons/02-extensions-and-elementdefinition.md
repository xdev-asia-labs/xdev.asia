---
id: 73df50be-e901-44d8-b34f-af19fb4e0716
title: 'Extensions & ElementDefinition'
slug: extensions-and-elementdefinition
description: 'Sau khi tìm hiểu về Data Types, hôm nay chúng ta sẽ đi sâu vào một khía cạnh cực kỳ quan trọng của FHIR: Extensions và ElementDefinition.'
duration_minutes: 20
is_free: true
video_url: null
sort_order: 2
section_title: 'Phần 5: Cấu trúc dữ liệu FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
### Tại sao cần Extensions trong FHIR?

Sau khi tìm hiểu về Data Types, hôm nay chúng ta sẽ đi sâu vào một khía cạnh cực kỳ quan trọng của FHIR: Extensions và ElementDefinition.

Hãy bắt đầu với một câu hỏi: Làm thế nào một tiêu chuẩn như FHIR có thể vừa đảm bảo tính nhất quán giữa các hệ thống, vừa đáp ứng được nhu cầu đặc thù của từng tổ chức y tế, từng quốc gia?

Đây chính là thách thức lớn mà FHIR phải giải quyết, vì:

* Mỗi quốc gia có hệ thống y tế và yêu cầu pháp lý khác nhau
* Mỗi bệnh viện có quy trình và thông tin cần lưu trữ riêng
* Các chuyên khoa khác nhau cần các thông tin đặc thù

Giải pháp của FHIR? **Extensions** - một cơ chế linh hoạt cho phép mở rộng tiêu chuẩn mà không phá vỡ khả năng tương tác giữa các hệ thống.

### Extensions: Hiểu đơn giản về tính mở rộng trong FHIR

#### Bản chất của Extensions: Giải thích dễ hiểu

Tưởng tượng FHIR như một bộ LEGO tiêu chuẩn, với các khối cơ bản (tài nguyên) được thiết kế sẵn. Nhưng nếu bạn cần một mảnh đặc biệt không có trong bộ LEGO tiêu chuẩn? Đó chính là lúc cần đến Extensions.

Extensions là "các mảnh LEGO tùy chỉnh" cho phép bạn thêm thông tin vào tài nguyên FHIR mà không làm thay đổi cấu trúc chuẩn. Ví dụ, tài nguyên Patient chuẩn của FHIR không có trường dành riêng cho "dân tộc" hoặc "nơi sinh" - đây là lúc bạn cần sử dụng extensions.

Một extension trong FHIR đơn giản bao gồm hai phần chính:

1. **URL định danh**: Giống như "tên gọi" của extension, giúp mọi người hiểu extension này dùng để làm gì
2. **Giá trị**: Dữ liệu thực tế của extension

**Ví dụ thực tế:** Một bệnh viện ở Việt Nam cần lưu thông tin về dân tộc của bệnh nhân (Kinh, Thái, Mường...) - thông tin này không có sẵn trong tài nguyên Patient tiêu chuẩn của FHIR.

#### Simple Extensions và Complex Extensions: Giải thích bằng ví dụ thực tế

FHIR cung cấp hai loại extensions: Simple (đơn giản) và Complex (phức tạp). Hãy tìm hiểu sự khác biệt thông qua ví dụ thực tế.

**Simple Extensions: Khi bạn cần thêm một thông tin đơn lẻ**

Simple Extensions là những extension chứa một giá trị đơn lẻ - giống như việc thêm một trường dữ liệu mới vào biểu mẫu.

**Ví dụ:** Thêm thông tin nơi sinh của bệnh nhân

```json
{
  "resourceType": "Patient",
  "id": "patient-123",
  "name": [
    {
      "use": "official",
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }
  ],
  // Đây là simple extension để lưu nơi sinh
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/patient-birthPlace",
      "valueAddress": {
        "city": "Hà Nội",
        "country": "Việt Nam"
      }
    }
  ]
}
```

**Giải thích đơn giản:**

* `url`: Định danh extension - như "tiêu đề" của trường dữ liệu mới
* `valueAddress`: Giá trị của extension - ở đây là một địa chỉ

Lưu ý tên của thuộc tính giá trị luôn bắt đầu bằng `value` và theo sau là kiểu dữ liệu (valueString, valueBoolean, valueAddress...).

**Complex Extensions: Khi một thông tin có nhiều thành phần**

Complex Extensions giống như một "nhóm trường dữ liệu" - khi bạn cần lưu nhiều thông tin liên quan đến một khái niệm.

**Ví dụ:** Lưu thông tin dân tộc với cả mã code và mô tả

```json
{
  "resourceType": "Patient",
  "id": "patient-123",
  // Đây là complex extension về dân tộc
  "extension": [
    {
      "url": "http://example.org/fhir/StructureDefinition/ethnicity",
      "extension": [
        {
          "url": "code",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://example.org/fhir/CodeSystem/ethnicity",
                "code": "kinh",
                "display": "Người Kinh"
              }
            ]
          }
        },
        {
          "url": "text",
          "valueString": "Người Kinh hoặc người Việt"
        }
      ]
    }
  ]
}
```

**Giải thích đơn giản:**

* Extension chính (`ethnicity`) chứa các extension con
* Extension con `code` lưu mã dân tộc theo chuẩn mã hóa
* Extension con `text` lưu mô tả bằng văn bản

**Khi nào dùng Complex Extensions?**

* Khi thông tin cần lưu có nhiều thành phần liên quan
* Khi bạn muốn nhóm các thông tin liên quan lại với nhau
* Khi bạn cần cả dữ liệu có cấu trúc (code) và văn bản mô tả (text)

**Lưu ý:** Complex extension không có thuộc tính `value` trực tiếp, thay vào đó nó chứa các extension con.

#### URL để Định danh Extension: Hiểu đơn giản về "tên gọi" của extension

Mỗi extension trong FHIR cần có một URL duy nhất - đây chính là "tên gọi" giúp xác định extension này là gì và do ai tạo ra.

> **Hiểu đơn giản:** URL của extension giống như biển số xe - nó giúp xác định chính xác extension của bạn và phân biệt với các extension khác trong hệ sinh thái FHIR.

**Cấu trúc URL extension theo từng đối tượng tạo ra**

1.  **Extensions chính thức của HL7 FHIR**:

    ```
    http://hl7.org/fhir/StructureDefinition/[tên-extension]
    ```

    _Ví dụ:_ `http://hl7.org/fhir/StructureDefinition/patient-birthPlace`
2.  **Extensions của tổ chức hoặc quốc gia**:

    ```
    http://[tên-tổ-chức].org/fhir/StructureDefinition/[tên-extension]
    ```

    _Ví dụ:_ `http://hospital.org.vn/fhir/StructureDefinition/patient-ethnicity-vn`
3.  **Extensions cục bộ (chỉ dùng trong quá trình phát triển)**:

    ```
    http://localhost/fhir/StructureDefinition/[tên-extension]
    ```

    _Ví dụ:_ `http://localhost/fhir/StructureDefinition/test-extension`

**Các ví dụ URL extension trong thực tế**

**1. Extensions chính thức từ HL7:**

* `http://hl7.org/fhir/StructureDefinition/patient-birthPlace` (nơi sinh của bệnh nhân)
* `http://hl7.org/fhir/StructureDefinition/patient-nationality` (quốc tịch)
* `http://hl7.org/fhir/StructureDefinition/observation-bodyPosition` (tư thế cơ thể khi đo)

**2. Extensions từ US Core (Hoa Kỳ):**

* `http://hl7.org/fhir/us/core/StructureDefinition/us-core-race` (chủng tộc - định nghĩa theo Hoa Kỳ)
* `http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity` (dân tộc - định nghĩa theo Hoa Kỳ)

**3. Ví dụ extension giả định cho Việt Nam:**

* `http://fhir.moh.gov.vn/StructureDefinition/patient-ethnicity-vn` (dân tộc - định nghĩa theo Việt Nam)
* `http://fhir.moh.gov.vn/StructureDefinition/patient-insurance-vn` (bảo hiểm y tế Việt Nam)

**Quy tắc đặt URL extension**

1. **Sử dụng domain bạn kiểm soát**: Nếu bạn tạo extension cho tổ chức, hãy sử dụng domain của tổ chức
2. **Đặt tên mô tả và rõ ràng**: URL nên cho biết extension áp dụng cho tài nguyên nào và chứa thông tin gì
3. **Nhất quán trong đặt tên**: Theo mẫu `[tài-nguyên]-[thuộc-tính]`
4. **Không thay đổi URL sau khi công bố**: Nếu cần thay đổi định nghĩa, hãy tạo phiên bản mới

> **Lưu ý quan trọng:** URL extension không nhất thiết phải trỏ đến một trang web thực sự tồn tại - nó chỉ là một định danh duy nhất. Tuy nhiên, nếu có thể, nên tạo trang web với tài liệu mô tả extension tại URL đó.

#### modifierExtension: Khi extension thay đổi ý nghĩa của dữ liệu

FHIR cung cấp hai loại phần mở rộng: `extension` thông thường và `modifierExtension`. Sự khác biệt giữa chúng cực kỳ quan trọng.

> **Hiểu đơn giản:**
>
> * `extension` thông thường: Thêm thông tin mới không thay đổi ý nghĩa của dữ liệu (như thêm "nơi sinh" cho bệnh nhân)
> * `modifierExtension`: Thay đổi cách hiểu về dữ liệu (như chỉ ra rằng "đây không phải dữ liệu thực, mà là dữ liệu ẩn danh")

**Ví dụ minh họa về modifierExtension**

```json
{
  "resourceType": "Patient",
  "id": "patient123",
  "name": [
    {
      "family": "Nguyễn",
      "given": ["Văn", "X"]
    }
  ],
  "modifierExtension": [
    {
      "url": "http://example.org/fhir/StructureDefinition/patient-anonymized",
      "valueBoolean": true
    }
  ]
}
```

**Giải thích ví dụ trên:**

* `modifierExtension` với URL `patient-anonymized` và giá trị `true`
* Extension này cho biết: "Thông tin bệnh nhân này đã được ẩn danh"
* Điều này thay đổi hoàn toàn cách hiểu - chúng ta không còn làm việc với dữ liệu thực của bệnh nhân!

**Ví dụ thực tế khác về modifierExtension**

1.  **Dữ liệu mô phỏng cho đào tạo:**

    ```json
    "modifierExtension": [
      {
        "url": "http://example.org/fhir/StructureDefinition/simulated-data",
        "valueBoolean": true
      }
    ]
    ```
2.  **Chỉ định một bản ghi là "nháp" - chưa hoàn thiện:**

    ```json
    "modifierExtension": [
      {
        "url": "http://example.org/fhir/StructureDefinition/draft-record",
        "valueBoolean": true
      }
    ]
    ```
3.  **Thay đổi ý nghĩa của thuốc (dùng làm thuốc thử, không phải điều trị):**

    ```json
    "modifierExtension": [
      {
        "url": "http://example.org/fhir/StructureDefinition/trial-medication",
        "valueBoolean": true
      }
    ]
    ```

**⚠️ Cảnh báo quan trọng về modifierExtension**

Khi hệ thống nhận được tài nguyên có `modifierExtension` mà nó không hiểu:

1. Hệ thống **KHÔNG NÊN** xử lý tài nguyên đó
2. Phản hồi với lỗi hoặc cảnh báo về việc không hiểu modifier extension

**Giải thích bằng ví dụ thực tế:** Nếu hệ thống không biết extension `patient-anonymized` có nghĩa là gì, nó có thể vô tình sử dụng tên "Nguyễn Văn X" như tên thật của bệnh nhân, dẫn đến hiểu sai nghiêm trọng về dữ liệu.

> 🔑 **Nguyên tắc cơ bản:** Chỉ sử dụng `modifierExtension` khi thông tin thực sự thay đổi ý nghĩa của dữ liệu. Trong hầu hết trường hợp, sử dụng `extension` thông thường là đủ và an toàn hơn.

#### Extension Registry: Thư viện extension sẵn có để tham khảo

> **Hiểu đơn giản:** Extension Registry giống như "thư viện mở" chứa tất cả các extension đã được chuẩn hóa. Trước khi tạo extension mới, hãy kiểm tra xem thư viện đã có extension phù hợp chưa!

HL7 duy trì một "sổ đăng ký" (registry) chính thức cho tất cả các extension FHIR đã được định nghĩa và công bố. Đây là nguồn tham khảo quý giá dành cho các nhà phát triển.

**Tại sao Extension Registry quan trọng?**

1. **Tránh "phát minh lại bánh xe"**: Nhiều thông tin phổ biến đã có extension sẵn (như nơi sinh, dân tộc, ngôn ngữ...)
2. **Tăng khả năng tương tác**: Sử dụng extension chung giúp các hệ thống dễ hiểu nhau hơn
3. **Tiết kiệm thời gian**: Không phải định nghĩa cấu trúc và quy tắc từ đầu

**Extension Registry chứa những gì?**

* **Extensions chính thức từ HL7**: Extensions được tổ chức HL7 xây dựng và duy trì
* **Extensions của cộng đồng**: Extensions từ các tổ chức y tế trên toàn cầu
* **Extensions theo quốc gia**: Extensions đặc thù cho từng quốc gia (US Core, UK Core, AU Core...)
* **Tài liệu chi tiết**: Mỗi extension đều có mô tả, cấu trúc, và ví dụ sử dụng

**Cách sử dụng Extension Registry**

**Truy cập Registry:** [http://hl7.org/fhir/extensibility-registry.html](http://hl7.org/fhir/extensibility-registry.html)

**Quy trình tìm kiếm extension phù hợp:**

1. **Xác định nhu cầu**: Bạn cần lưu trữ thông tin gì?
2. **Tìm kiếm trong Registry**: Sử dụng chức năng tìm kiếm hoặc lọc theo tài nguyên
3. **Đánh giá phù hợp**: Extension đã có đáp ứng nhu cầu của bạn không?
4. **Sử dụng hoặc điều chỉnh**: Nếu phù hợp, sử dụng nguyên vẹn; nếu gần phù hợp, có thể tham khảo cấu trúc

**Ví dụ về extensions phổ biến trong Registry**

1. **Thông tin cá nhân:**
   * `patient-birthPlace`: Nơi sinh của bệnh nhân
   * `patient-nationality`: Quốc tịch
   * `patient-religion`: Tôn giáo
2. **Thông tin lâm sàng:**
   * `observation-bodyPosition`: Tư thế cơ thể khi đo các chỉ số
   * `observation-secondaryFinding`: Phát hiện thứ cấp
   * `procedure-method`: Phương pháp thực hiện thủ thuật
3. **Thông tin quản lý:**
   * `encounter-reasonCancelled`: Lý do hủy cuộc hẹn
   * `organization-affiliate`: Tổ chức liên kết
   * `timing-exact`: Thời gian chính xác

> **Mẹo thực hành:** Luôn tìm kiếm trong Extension Registry trước khi tạo extension mới. Việc sử dụng các extension đã được chuẩn hóa sẽ giúp hệ thống của bạn dễ tích hợp hơn với các hệ thống khác.

#### R5 Canonical Extensions: Extensions được "chính thức hóa" trong FHIR R5

Trong FHIR R5, một khái niệm mới đã được giới thiệu: "Canonical Extensions" (Extensions chuẩn). Đây là bước tiến lớn trong việc chuẩn hóa các extension phổ biến.

> \*\*Hiểu đ

### ElementDefinition: Định nghĩa chi tiết về cấu trúc

ElementDefinition là một kiểu dữ liệu phức tạp trong FHIR được sử dụng để mô tả cấu trúc của tài nguyên và extensions. Nó là thành phần cốt lõi của các tài nguyên StructureDefinition, dùng để định nghĩa:

1. Các trường trong một tài nguyên
2. Cấu trúc của extensions
3. Các ràng buộc và quy tắc áp dụng cho dữ liệu

#### Cấu trúc của ElementDefinition

ElementDefinition bao gồm nhiều thành phần để mô tả chi tiết một phần tử trong cấu trúc dữ liệu:

```json
{
  "path": "Patient.name.given",
  "short": "Tên của bệnh nhân",
  "definition": "Tên gọi, tên đệm của bệnh nhân",
  "min": 1,
  "max": "*",
  "type": [
    {
      "code": "string"
    }
  ],
  "example": [
    {
      "label": "Ví dụ thông thường",
      "valueString": "Văn"
    }
  ],
  "constraint": [
    {
      "key": "ele-1",
      "severity": "error",
      "human": "Giá trị tất cả các FHIR elements phải là null hoặc có giá trị",
      "expression": "hasValue() or (children().count() > id.count())"
    }
  ]
}
```

Các thuộc tính quan trọng của ElementDefinition:

* **path**: Đường dẫn đến phần tử trong cấu trúc tài nguyên
* **short**: Mô tả ngắn gọn
* **definition**: Định nghĩa đầy đủ
* **min**/**max**: Số lượng tối thiểu/tối đa
* **type**: Kiểu dữ liệu của phần tử
* **example**: Các ví dụ minh họa
* **constraint**: Các ràng buộc áp dụng cho phần tử

#### Sử dụng ElementDefinition để định nghĩa Extensions

ElementDefinition đóng vai trò quan trọng trong việc định nghĩa cấu trúc của extensions. Mỗi extension được định nghĩa thông qua một StructureDefinition chứa các ElementDefinition mô tả:

1. URL của extension
2. Kiểu dữ liệu được chấp nhận
3. Số lượng phần tử (cardinality)
4. Liệu đó có phải là modifier extension hay không
5. Các ràng buộc và quy tắc áp dụng

Ví dụ về StructureDefinition định nghĩa một extension:

```json
{
  "resourceType": "StructureDefinition",
  "id": "patient-ethnicity",
  "url": "http://example.org/fhir/StructureDefinition/patient-ethnicity",
  "name": "PatientEthnicity",
  "status": "active",
  "description": "Extension để ghi lại thông tin dân tộc của bệnh nhân",
  "fhirVersion": "5.0.0",
  "kind": "complex-type",
  "abstract": false,
  "type": "Extension",
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation": "constraint",
  "differential": {
    "element": [
      {
        "id": "Extension",
        "path": "Extension",
        "definition": "Extension để ghi lại thông tin dân tộc của bệnh nhân"
      },
      {
        "id": "Extension.extension:code",
        "path": "Extension.extension",
        "sliceName": "code",
        "min": 1,
        "max": "1"
      },
      {
        "id": "Extension.extension:code.value[x]",
        "path": "Extension.extension.value[x]",
        "type": [
          {
            "code": "CodeableConcept"
          }
        ]
      },
      {
        "id": "Extension.extension:text",
        "path": "Extension.extension",
        "sliceName": "text",
        "min": 0,
        "max": "1"
      },
      {
        "id": "Extension.extension:text.value[x]",
        "path": "Extension.extension.value[x]",
        "type": [
          {
            "code": "string"
          }
        ]
      }
    ]
  }
}
```

### Thực hành tốt khi sử dụng Extensions

#### 1. Kiểm tra Extension Registry trước khi tạo mới

Trước khi định nghĩa extension mới, luôn kiểm tra Extension Registry để xem đã có extension tương tự chưa. Sử dụng extension chính thức sẽ tăng khả năng tương tác.

#### 2. Đặt tên URL phù hợp

URL của extension nên:

* Thuộc domain mà bạn kiểm soát
* Có tên mô tả rõ ràng mục đích
* Tuân theo quy ước đặt tên nhất quán

```
http://[tổ-chức].org/fhir/StructureDefinition/[tài-nguyên]-[thuộc-tính]
```

#### 3. Tài liệu hóa đầy đủ

Mỗi extension nên được tài liệu hóa đầy đủ với:

* Mục đích và cách sử dụng
* Kiểu dữ liệu được hỗ trợ
* Ngữ cảnh áp dụng
* Ví dụ minh họa

#### 4. Cẩn trọng với modifierExtension

Chỉ sử dụng modifierExtension khi thực sự cần thay đổi ngữ nghĩa của tài nguyên. Trong hầu hết các trường hợp, extension thông thường là đủ.

#### 5. Sử dụng complex extension có cấu trúc

Khi cần nhiều thông tin liên quan, hãy sử dụng complex extension với cấu trúc rõ ràng thay vì nhiều simple extension riêng lẻ.

### Ví dụ thực tế về Extensions trong y tế

#### 1. Thông tin dân tộc và sắc tộc

```json
{
  "resourceType": "Patient",
  "id": "example",
  "extension": [
    {
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
      "extension": [
        {
          "url": "ombCategory",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2135-2",
            "display": "Hispanic or Latino"
          }
        },
        {
          "url": "text",
          "valueString": "Hispanic"
        }
      ]
    }
  ]
}
```

#### 2. Thông tin lâm sàng bổ sung

```json
{
  "resourceType": "Observation",
  "id": "blood-pressure",
  "status": "final",
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "85354-9",
        "display": "Blood pressure panel"
      }
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/observation-bodyPosition",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "33586001",
            "display": "Sitting position"
          }
        ]
      }
    }
  ]
}
```

#### 3. Thông tin văn hóa

```json
{
  "resourceType": "Patient",
  "id": "example",
  "extension": [
    {
      "url": "http://example.org/fhir/StructureDefinition/patient-religion",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ReligiousAffiliation",
            "code": "1041",
            "display": "Buddhism"
          }
        ],
        "text": "Phật giáo"
      }
    }
  ]
}
```

### Những cải tiến trong Extensions với FHIR R5

FHIR R5 mang đến một số cải tiến quan trọng cho cơ chế Extensions:

#### 1. Canonical Extensions

Như đã đề cập, R5 giới thiệu khái niệm Canonical Extensions - các extension được chuẩn hóa và đề xuất sử dụng rộng rãi.

#### 2. Cải thiện ElementDefinition

ElementDefinition trong R5 được mở rộng với:

* Hỗ trợ tốt hơn cho các ràng buộc đa ngôn ngữ
* Cơ chế xác thực phong phú hơn
* Khả năng mô tả chi tiết hơn về cách sử dụng extensions

#### 3. Extension Context Improvements

R5 cải thiện khả năng xác định ngữ cảnh cho extensions, cho phép chỉ định chính xác hơn nơi extension có thể được sử dụng.

```json
{
  "context": [
    {
      "type": "element",
      "expression": "Patient.name"
    },
    {
      "type": "element",
      "expression": "Practitioner.name"
    }
  ]
}
```

#### 4. Versioning Support

R5 cung cấp hỗ trợ tốt hơn cho việc quản lý phiên bản của extensions:

```json
{
  "url": "http://example.org/fhir/StructureDefinition/patient-ethnicity",
  "version": "2.0.0"
}
```

#### 5. Extension Discovery

R5 giới thiệu các cơ chế mới để khám phá và tìm hiểu về extensions có sẵn, giúp việc tái sử dụng extensions dễ dàng hơn.

### Kết luận

Extensions và ElementDefinition là các thành phần thiết yếu trong kiến trúc FHIR, cho phép tiêu chuẩn vừa giữ được tính nhất quán cốt lõi, vừa linh hoạt đáp ứng nhu cầu đa dạng của ngành y tế. FHIR R5 tiếp tục cải tiến các cơ chế này, mang đến khả năng tùy biến và mở rộng mạnh mẽ hơn, đồng thời vẫn duy trì khả năng tương tác - một trong những giá trị cốt lõi của FHIR.

Với hiểu biết về Extensions và ElementDefinition, các nhà phát triển có thể xây dựng các giải pháp y tế số vừa tuân thủ tiêu chuẩn, vừa đáp ứng được các yêu cầu đặc thù của từng tổ chức và địa phương.
