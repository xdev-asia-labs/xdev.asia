---
id: 5f655894-9612-461c-bbf8-239f6926bfee
title: 'FHIRPath & FluentPath FHIR R5'
slug: fhirpath-and-fluentpath-fhir-r5
description: 'FHIRPath và FluentPath là những công cụ mạnh mẽ giúp bạn truy vấn, lọc và điều hướng trong dữ liệu FHIR. Trong bài viết này, chúng ta sẽ khám phá chi tiết cách sử dụng các công cụ quan trọng này trong FHIR R5, cùng với…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 3
section_title: 'Phần 7: Profiling & Validation trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
FHIRPath và FluentPath là những công cụ mạnh mẽ giúp bạn truy vấn, lọc và điều hướng trong dữ liệu FHIR. Trong bài viết này, chúng ta sẽ khám phá chi tiết cách sử dụng các công cụ quan trọng này trong FHIR R5, cùng với nhiều ví dụ thực tế.

### 1. Cú pháp và cách dùng

FHIRPath là ngôn ngữ truy vấn và điều hướng được thiết kế riêng cho dữ liệu FHIR. Còn FluentPath là tên ban đầu của FHIRPath và đôi khi vẫn được sử dụng thay thế cho nhau.

#### Cách hoạt động

FHIRPath hoạt động trên nguyên tắc "tìm kiếm" (search) và "lọc" (filter). Mỗi biểu thức FHIRPath nhận một bộ đối tượng làm đầu vào, xử lý chúng và trả về một bộ kết quả.

#### Cú pháp cơ bản

**1. Điều hướng qua các phần tử**

Sử dụng dấu chấm để điều hướng qua các phần tử con:

```
Patient.name.given
```

Biểu thức này trả về tất cả các tên (given name) của bệnh nhân.

**2. Lựa chọn phần tử theo chỉ mục**

Sử dụng ngoặc vuông để chọn phần tử theo chỉ mục:

```
Patient.name[0].given
```

Biểu thức này trả về tên của bản ghi tên đầu tiên.

**3. Lọc với điều kiện**

Sử dụng dấu ngoặc vuông với điều kiện để lọc kết quả:

```
Patient.name.where(use = 'official').given
```

Biểu thức này trả về tên từ các bản ghi tên chính thức.

**4. Toán tử**

FHIRPath hỗ trợ nhiều toán tử:

* So sánh: `=`, `!=`, `>`, `<`, `>=`, `<=`
* Logic: `and`, `or`, `xor`, `implies`, `not`
* Số học: `+`, `-`, `*`, `/`, `div`, `mod`
* Ghép chuỗi: `&`

**5. Hàm tích hợp**

FHIRPath có nhiều hàm tích hợp như:

```
Patient.name.given.first()  // Lấy phần tử đầu tiên
Patient.name.given.count()  // Đếm số phần tử
```

#### Ví dụ thực tế

**Ví dụ 1**: Tìm tất cả các bệnh nhân có nhóm máu A+

```
Patient.extension.where(url = 'http://hospital.example.org/fhir/StructureDefinition/blood-type' and value.text = 'A+')
```

**Ví dụ 2**: Tìm tất cả các kết quả xét nghiệm bất thường

```
Observation.where(status = 'final' and interpretation.where(coding.code = 'A' or coding.code = 'H' or coding.code = 'L').exists())
```

### 2. FHIRPath Functions (Các hàm FHIRPath)

FHIRPath cung cấp nhiều hàm để thao tác với dữ liệu. Dưới đây là các nhóm hàm chính:

#### Hàm bộ sưu tập (Collection Functions)

| Hàm                 | Mô tả                                      | Ví dụ                                   |
| ------------------- | ------------------------------------------ | --------------------------------------- |
| `empty()`           | Kiểm tra bộ sưu tập có rỗng không          | `Patient.name.empty()`                  |
| `exists()`          | Kiểm tra có phần tử nào tồn tại không      | `Patient.name.exists()`                 |
| `all(criteria)`     | Kiểm tra tất cả phần tử đều thỏa điều kiện | `Patient.telecom.all(system = 'phone')` |
| `subsetOf(other)`   | Kiểm tra nếu là tập con                    | `collection1.subsetOf(collection2)`     |
| `supersetOf(other)` | Kiểm tra nếu là tập cha                    | `collection1.supersetOf(collection2)`   |
| `count()`           | Đếm số phần tử                             | `Patient.name.given.count()`            |
| `distinct()`        | Loại bỏ các phần tử trùng lặp              | `Patient.identifier.system.distinct()`  |

#### Hàm lọc (Filtering Functions)

| Hàm                  | Mô tả                              | Ví dụ                                  |
| -------------------- | ---------------------------------- | -------------------------------------- |
| `where(criteria)`    | Lọc các phần tử thỏa điều kiện     | `Patient.name.where(use = 'official')` |
| `select(projection)` | Chọn phần tử hoặc thuộc tính       | `Patient.name.select(given)`           |
| `first()`            | Lấy phần tử đầu tiên               | `Patient.name.first()`                 |
| `last()`             | Lấy phần tử cuối cùng              | `Patient.name.last()`                  |
| `tail()`             | Lấy tất cả phần tử trừ phần tử đầu | `Patient.name.tail()`                  |
| `skip(num)`          | Bỏ qua số phần tử                  | `Patient.name.skip(1)`                 |
| `take(num)`          | Lấy số phần tử đầu tiên            | `Patient.name.take(2)`                 |

#### Hàm chuyển đổi (Conversion Functions)

| Hàm                                         | Mô tả                        | Ví dụ                                       |
| ------------------------------------------- | ---------------------------- | ------------------------------------------- |
| `iif(criterion, true-result, false-result)` | Điều kiện nếu-thì            | `iif(Patient.gender = 'male', 'Nam', 'Nữ')` |
| `toBoolean()`                               | Chuyển đổi sang boolean      | `'true'.toBoolean()`                        |
| `toString()`                                | Chuyển đổi sang chuỗi        | `Patient.birthDate.toString()`              |
| `toInteger()`                               | Chuyển đổi sang số nguyên    | `'5'.toInteger()`                           |
| `toDecimal()`                               | Chuyển đổi sang số thập phân | `'5.5'.toDecimal()`                         |

#### Hàm chuỗi (String Functions)

| Hàm                              | Mô tả                             | Ví dụ                          |
| -------------------------------- | --------------------------------- | ------------------------------ |
| `indexOf(substring)`             | Vị trí của chuỗi con              | `'hello'.indexOf('l')`         |
| `substring(start, length)`       | Lấy chuỗi con                     | `'hello'.substring(1, 3)`      |
| `startsWith(prefix)`             | Kiểm tra bắt đầu với              | `'hello'.startsWith('he')`     |
| `endsWith(suffix)`               | Kiểm tra kết thúc với             | `'hello'.endsWith('lo')`       |
| `contains(substring)`            | Kiểm tra chứa chuỗi con           | `'hello'.contains('ell')`      |
| `replace(pattern, substitution)` | Thay thế chuỗi                    | `'hello'.replace('ello', 'i')` |
| `matches(regex)`                 | Kiểm tra khớp biểu thức chính quy | `'hello'.matches('h.*o')`      |
| `length()`                       | Độ dài chuỗi                      | `'hello'.length()`             |

#### Hàm ngày tháng (Date/Time Functions)

| Hàm           | Mô tả                | Ví dụ         |
| ------------- | -------------------- | ------------- |
| `now()`       | Thời gian hiện tại   | `now()`       |
| `today()`     | Ngày hiện tại        | `today()`     |
| `timeOfDay()` | Thời gian trong ngày | `timeOfDay()` |

#### Ví dụ thực tế sử dụng hàm

**Ví dụ 1**: Tìm tất cả người liên hệ là người thân (relative)

```
Patient.contact.where(relationship.coding.where(system = 'http://terminology.hl7.org/CodeSystem/v2-0131' and code = 'N').exists())
```

**Ví dụ 2**: Tính tuổi bệnh nhân

```
today().difference(Patient.birthDate, 'years')
```

**Ví dụ 3**: Lấy tên đầy đủ của bệnh nhân

```
Patient.name.select(given.join(' ') & ' ' & family).first()
```

### 3. Invariants và Constraints (Bất biến và ràng buộc)

Invariants và constraints là các ràng buộc được định nghĩa bằng FHIRPath để đảm bảo tính toàn vẹn của dữ liệu.

#### Định nghĩa Invariant

Invariant là ràng buộc phải luôn đúng với tài nguyên FHIR. Chúng được định nghĩa trong StructureDefinition.

Cấu trúc của một invariant:

```json
{
  "key": "mã-ràng-buộc",
  "severity": "error|warning",
  "human": "Mô tả cho con người đọc",
  "expression": "Biểu thức FHIRPath",
  "xpath": "Biểu thức XPath tương đương"
}
```

#### Ví dụ về Invariants

**Ví dụ 1**: Ràng buộc tên bệnh nhân phải có ít nhất họ hoặc tên

```json
{
  "key": "pat-1",
  "severity": "error",
  "human": "Tên bệnh nhân phải có family hoặc given",
  "expression": "name.where(family.exists() or given.exists()).exists()",
  "xpath": "f:name/f:family or f:name/f:given"
}
```

**Ví dụ 2**: Ràng buộc huyết áp tâm thu phải cao hơn tâm trương

```json
{
  "key": "bp-1",
  "severity": "error",
  "human": "Huyết áp tâm thu phải cao hơn tâm trương",
  "expression": "component.where(code.coding.where(code = '8480-6').exists()).value.value > component.where(code.coding.where(code = '8462-4').exists()).value.value",
  "xpath": "(f:component/f:code/f:coding[f:code/@value='8480-6']/../f:value/f:value/@value) > (f:component/f:code/f:coding[f:code/@value='8462-4']/../f:value/f:value/@value)"
}
```

#### Sử dụng Invariants trong Profiles

Invariants thường được sử dụng trong FHIR Profiles để xác định các ràng buộc cho các tài nguyên:

```json
{
  "resourceType": "StructureDefinition",
  "id": "bp-observation",
  "url": "http://example.org/fhir/StructureDefinition/bp-observation",
  "name": "BloodPressureObservation",
  "status": "active",
  "description": "Profile cho quan sát huyết áp",
  "type": "Observation",
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Observation",
  "differential": {
    "element": [
      {
        "id": "Observation",
        "path": "Observation",
        "constraint": [
          {
            "key": "bp-1",
            "severity": "error",
            "human": "Huyết áp tâm thu phải cao hơn tâm trương",
            "expression": "component.where(code.coding.where(code = '8480-6').exists()).value.value > component.where(code.coding.where(code = '8462-4').exists()).value.value"
          }
        ]
      }
    ]
  }
}
```

### 4. R5 Improvements to FHIRPath (Cải tiến trong FHIR R5)

FHIR R5 đã giới thiệu nhiều cải tiến cho FHIRPath, làm cho nó mạnh mẽ và linh hoạt hơn.

#### Các cải tiến chính trong R5:

**1. Hỗ trợ tốt hơn cho kiểu dữ liệu**

R5 mở rộng hỗ trợ cho các kiểu dữ liệu phức tạp hơn, bao gồm:

* Cải thiện xử lý kiểu Choice
* Hỗ trợ tốt hơn cho các mẫu (patterns)
* Mở rộng hỗ trợ cho kiểu Extension

**2. Các hàm mới**

R5 thêm nhiều hàm mới vào FHIRPath:

| Hàm                  | Mô tả                            | Ví dụ                                                       |
| -------------------- | -------------------------------- | ----------------------------------------------------------- |
| `intersect(other)`   | Giao của hai tập                 | `collection1.intersect(collection2)`                        |
| `exclude(other)`     | Loại trừ các phần tử             | `collection1.exclude(collection2)`                          |
| `memberOf(valueset)` | Kiểm tra thành viên của ValueSet | `code.memberOf('http://example.org/fhir/ValueSet/example')` |
| `subsumes(other)`    | Kiểm tra khái niệm bao hàm       | `coding1.subsumes(coding2)`                                 |
| `subsumedBy(other)`  | Kiểm tra khái niệm được bao hàm  | `coding1.subsumedBy(coding2)`                               |

**3. Cải thiện hiệu suất**

R5 tập trung vào việc tối ưu hóa hiệu suất của FHIRPath:

* Cơ chế đánh giá hiệu quả hơn
* Tối ưu hóa cho các biểu thức phức tạp
* Tích hợp tốt hơn với các công cụ xác thực

**4. Xử lý lỗi tốt hơn**

R5 cải thiện xử lý lỗi trong FHIRPath:

* Thông báo lỗi rõ ràng hơn
* Kiểm tra kiểu dữ liệu mạnh mẽ hơn
* Truy tìm lỗi chi tiết hơn

#### Ví dụ về các tính năng mới trong R5

**Ví dụ 1**: Sử dụng hàm memberOf để kiểm tra mã

```
Condition.code.coding.where(system = 'http://snomed.info/sct').memberOf('http://example.org/fhir/ValueSet/chronic-conditions')
```

**Ví dụ 2**: Sử dụng subsumes để kiểm tra mối quan hệ giữa các mã

```
Condition.code.coding.where(system = 'http://snomed.info/sct' and code = '73211009').subsumes(Condition.code.coding.where(system = 'http://snomed.info/sct' and code = '44054006'))
```

### 5. Testing FHIRPath Expressions (Kiểm thử biểu thức FHIRPath)

Kiểm thử biểu thức FHIRPath là một phần quan trọng để đảm bảo rằng chúng hoạt động như mong đợi.

#### Công cụ kiểm thử

Có nhiều công cụ giúp kiểm thử biểu thức FHIRPath:

1. **FHIRPath Online Evaluator**: Công cụ trực tuyến để thử nghiệm biểu thức
2. **FHIR Validator**: Kiểm tra tính hợp lệ của tài nguyên dựa trên ràng buộc
3. **Unit Testing Frameworks**: Tích hợp FHIRPath vào bộ kiểm thử tự động

#### Quy trình kiểm thử FHIRPath

1. **Chuẩn bị dữ liệu mẫu**: Tạo các tài nguyên FHIR mẫu cho việc kiểm thử
2. **Viết biểu thức FHIRPath**: Viết biểu thức cần kiểm thử
3. **Dự đoán kết quả**: Xác định kết quả mong đợi
4. **Chạy biểu thức**: Áp dụng biểu thức lên dữ liệu mẫu
5. **So sánh kết quả**: So sánh kết quả thực tế với kết quả mong đợi
6. **Điều chỉnh**: Tinh chỉnh biểu thức nếu cần

#### Ví dụ về kiểm thử FHIRPath

**Ví dụ 1**: Kiểm thử biểu thức lấy tên bệnh nhân

Dữ liệu mẫu:

```json
{
  "resourceType": "Patient",
  "id": "example",
  "name": [
    {
      "use": "official",
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    },
    {
      "use": "nickname",
      "given": ["Tony"]
    }
  ]
}
```

Biểu thức cần kiểm thử:

```
Patient.name.where(use = 'official').given
```

Kết quả mong đợi:

```
["Văn", "A"]
```

**Ví dụ 2**: Kiểm thử invariant huyết áp

Dữ liệu mẫu hợp lệ:

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

Biểu thức cần kiểm thử:

```
component.where(code.coding.where(code = '8480-6').exists()).valueQuantity.value > component.where(code.coding.where(code = '8462-4').exists()).valueQuantity.value
```

Kết quả mong đợi:

```
true
```

### Ví dụ thực tế: FHIRPath trong quản lý bệnh mãn tính

Hãy xem một ví dụ thực tế về cách sử dụng FHIRPath trong hệ thống quản lý bệnh mãn tính:

#### 1. Xác định bệnh nhân đái tháo đường cần theo dõi

```
Patient.extension.where(url = 'http://example.org/fhir/StructureDefinition/chronicDiseases')
  .extension.where(url = 'condition' and valueCodeableConcept.coding.where(system = 'http://snomed.info/sct' and code = '73211009').exists())
  .exists() and
Observation.where(code.coding.where(system = 'http://loinc.org' and code = '2339-0').exists() 
  and valueQuantity.value > 7.0 and status = 'final' 
  and effectiveDateTime > today().subtract(3, 'months')).exists()
```

Biểu thức này tìm các bệnh nhân có mã bệnh đái tháo đường và có kết quả HbA1c > 7.0% trong vòng 3 tháng qua.

#### 2. Kiểm tra tuân thủ thuốc hạ đường huyết

```
MedicationRequest.where(
  medication.coding.where(system = 'http://www.nlm.nih.gov/research/umls/rxnorm' and 
  code in ('860975', '897122', '897718')).exists() and
  status = 'active' and
  Patient.id = %patient.id and
  MedicationDispense.where(prescription = %current.id and
  whenHandedOver > today().subtract(30, 'days')).exists().not()
)
```

Biểu thức này tìm bệnh nhân có đơn thuốc hạ đường huyết đang hoạt động nhưng chưa lấy thuốc trong 30 ngày qua.

#### 3. Xác định bệnh nhân có nhiều yếu tố nguy cơ

```
Patient.where(
  (today().difference(birthDate, 'years') > 65) and
  (extension.where(url = 'http://example.org/fhir/StructureDefinition/bmi' and valueDecimal > 30).exists() or
   Observation.where(code.coding.where(system = 'http://loinc.org' and code = '39156-5').exists() and 
   valueQuantity.value > 30).exists()) and
  (Condition.where(code.coding.where(system = 'http://snomed.info/sct' and 
   code in ('38341003', '46635009', '44054006')).exists()).count() >= 2)
)
```

Biểu thức này xác định bệnh nhân trên 65 tuổi, có BMI > 30 và mắc ít nhất 2 bệnh mãn tính (tăng huyết áp, tiểu đường type 1, tiểu đường type 2).

### Tối ưu hóa biểu thức FHIRPath

Khi làm việc với FHIRPath, có một số kỹ thuật tối ưu hóa để cải thiện hiệu suất:

#### 1. Sử dụng điều kiện càng sớm càng tốt

Không tối ưu:

```
Patient.name.given.where(starts-with($this, 'A'))
```

Tối ưu hơn:

```
Patient.name.where(given.where(starts-with($this, 'A')).exists())
```

#### 2. Tránh tính toán trùng lặp

Không tối ưu:

```
Patient.name.where(use = 'official').exists() and Patient.name.where(use = 'official').given.exists()
```

Tối ưu hơn:

```
Patient.name.where(use = 'official' and given.exists()).exists()
```

#### 3. Sử dụng exists() thay vì empty().not()

Không tối ưu:

```
Patient.name.empty().not()
```

Tối ưu hơn:

```
Patient.name.exists()
```

#### 4. Tận dụng các hàm bộ sưu tập

Không tối ưu:

```
Patient.name.where(use = 'official').count() > 0
```

Tối ưu hơn:

```
Patient.name.where(use = 'official').exists()
```

### Kết luận

FHIRPath và FluentPath là những công cụ mạnh mẽ cho việc truy vấn, điều hướng và xác thực dữ liệu FHIR. Với các cải tiến trong FHIR R5, chúng trở nên mạnh mẽ và linh hoạt hơn bao giờ hết.

Việc nắm vững cú pháp, hàm, và kỹ thuật tối ưu hóa FHIRPath sẽ giúp bạn xây dựng các ứng dụng FHIR mạnh mẽ, linh hoạt và đáng tin cậy.

Bằng cách sử dụng FHIRPath để xác định invariants và constraints, bạn có thể đảm bảo tính toàn vẹn dữ liệu trong hệ thống FHIR của mình. Các công cụ kiểm thử FHIRPath giúp xác minh rằng các biểu thức của bạn hoạt động chính xác.

Với kiến thức từ bài viết này, bạn đã sẵn sàng khai thác sức mạnh của FHIRPath và FluentPath trong các dự án FHIR của mình!
