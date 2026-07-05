---
id: 11efe43d-50cf-426d-a0a8-361c8f045a50
title: 'Validation in FHIR R5'
slug: validation-in-fhir-r5
description: 'Xin chào các bạn! Hôm nay chúng ta sẽ tìm hiểu về việc kiểm tra tính hợp lệ (validation) của dữ liệu trong FHIR phiên bản R5. Tôi sẽ trình bày theo cách đơn giản và dễ hiểu nhất, kèm theo những ví dụ thực tế để bạn có…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 4
section_title: 'Phần 7: Profiling & Validation trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Xin chào các bạn! Hôm nay chúng ta sẽ tìm hiểu về việc kiểm tra tính hợp lệ (validation) của dữ liệu trong FHIR phiên bản R5. Tôi sẽ trình bày theo cách đơn giản và dễ hiểu nhất, kèm theo những ví dụ thực tế để bạn có thể áp dụng ngay.

### 1. Công cụ kiểm tra FHIR R5

#### Công cụ FHIR Validator là gì?

FHIR Validator là một công cụ chính thức của HL7 FHIR, giúp bạn kiểm tra xem dữ liệu FHIR của mình có đúng chuẩn không. Nó giống như một "thầy giáo" kiểm tra bài tập của bạn, chỉ ra những lỗi cần sửa.

#### Cách sử dụng đơn giản

Bạn có thể sử dụng FHIR Validator theo nhiều cách:

1. **Trực tuyến**: Truy cập trang [validator.fhir.org](https://validator.fhir.org/), dán dữ liệu vào và nhấn nút kiểm tra.
2. **Thông qua dòng lệnh**: Tải về và chạy lệnh đơn giản:

```bash
# Tải công cụ kiểm tra
curl -L https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar -o validator_cli.jar

# Kiểm tra một tệp bệnh nhân
java -jar validator_cli.jar benh-nhan.json -version 5.0
```

#### Ví dụ thực tế

Giả sử bạn có một tệp `benh-nhan.json` chứa thông tin bệnh nhân:

```json
{
  "resourceType": "Patient",
  "id": "PT001",
  "name": [
    {
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }
  ],
  "gender": "nam",
  "birthDate": "1980-01-01"
}
```

Khi bạn chạy lệnh kiểm tra, bạn có thể nhận được thông báo lỗi:

```
THÔNG BÁO LỖI: Trường "gender" có giá trị không hợp lệ "nam". 
Các giá trị hợp lệ là: male, female, other, unknown
```

Bạn cần sửa lại thành `"gender": "male"` để đúng chuẩn.

### 2. Kiểm tra theo hồ sơ FHIR (Profiles)

#### Hồ sơ FHIR là gì?

Profiles giống như "bộ quy tắc" tùy chỉnh cho dữ liệu FHIR. Nếu FHIR tiêu chuẩn là luật giao thông chung, thì profiles là luật giao thông riêng của từng quốc gia/tổ chức.

Ví dụ: Một bệnh viện ở Việt Nam có thể yêu cầu bệnh nhân phải có số CMND, trong khi tiêu chuẩn FHIR chung không bắt buộc điều này.

#### Cách kiểm tra theo profile

Đơn giản là bạn chỉ định profile khi kiểm tra:

```bash
java -jar validator_cli.jar benh-nhan.json -profile http://example.org/fhir/StructureDefinition/vn-patient
```

#### Ví dụ cụ thể

Giả sử profile của Việt Nam yêu cầu bệnh nhân phải có số CMND. Khi kiểm tra tệp bệnh nhân trên với profile này, bạn sẽ nhận được thông báo:

```
LỖI: Bệnh nhân thiếu số CMND theo quy định của profile Việt Nam
```

Bạn cần bổ sung thông tin định danh:

```json
"identifier": [
  {
    "system": "http://vietnam.gov.vn/id/cmnd",
    "value": "123456789"
  }
]
```

### 3. Kiểm tra thực thể dữ liệu

#### Các mức độ kiểm tra

Khi kiểm tra một tài nguyên FHIR, có nhiều lớp kiểm tra:

1. **Kiểm tra định dạng**: Đảm bảo JSON/XML viết đúng cú pháp
2. **Kiểm tra cấu trúc**: Đảm bảo các trường thông tin đúng với quy định FHIR
3. **Kiểm tra tham chiếu**: Đảm bảo các liên kết đến tài nguyên khác là hợp lệ
4. **Kiểm tra nghiệp vụ**: Đảm bảo dữ liệu hợp lý về mặt y tế/nghiệp vụ

#### Phân loại vấn đề

Khi kiểm tra, các vấn đề được phân loại theo mức độ nghiêm trọng:

* **Error (Lỗi)**: Vấn đề nghiêm trọng, cần sửa
* **Warning (Cảnh báo)**: Vấn đề nhỏ, nên xem xét
* **Information (Thông tin)**: Gợi ý cải thiện

#### Ví dụ thực tế

Giả sử bạn có một tệp `tiem-chung.json`:

```json
{
  "resourceType": "Immunization",
  "status": "completed",
  "occurrenceDateTime": "2025-06-15",
  "patient": {
    "reference": "Patient/missing-patient"
  }
}
```

Khi kiểm tra, bạn sẽ thấy:

```
LỖI: Thiếu trường bắt buộc "vaccineCode" (mã vắc-xin)
CẢNH BÁO: Ngày tiêm chủng nằm trong tương lai
THÔNG TIN: Tham chiếu đến bệnh nhân có thể không tồn tại
```

### 4. Tạo quy tắc kiểm tra tùy chỉnh

#### Tại sao cần tùy chỉnh?

Đôi khi, các quy tắc tiêu chuẩn không đủ cho nhu cầu cụ thể. Ví dụ:

* Kiểm tra tuổi thai phụ phải nằm trong khoảng hợp lý
* Kiểm tra liều lượng thuốc phù hợp với cân nặng

#### Cách viết quy tắc tùy chỉnh với FHIRPath

FHIRPath là một "ngôn ngữ" đơn giản cho phép bạn viết các quy tắc kiểm tra. Ví dụ:

```
// Kiểm tra ngày tiêm chủng không được nằm trong tương lai
occurrenceDateTime.hasValue() and occurrenceDateTime <= today()
```

#### Ví dụ thực tế

Giả sử bạn muốn đảm bảo kết quả xét nghiệm đường huyết lúc đói phải nằm trong khoảng hợp lý:

```
// Nếu là xét nghiệm đường huyết lúc đói, giá trị phải từ 2.0 đến 40.0 mmol/L
(code.coding.where(system='http://loinc.org' and code='14771-0').exists()) implies
(valueQuantity.value >= 2.0 and valueQuantity.value <= 40.0)
```

Đây là quy tắc để thêm vào profile của bạn.

### 5. Kiểm tra trong môi trường sản xuất

#### Phương pháp hiệu quả

Trong môi trường thực tế, cần kiểm tra hiệu quả mà không làm chậm hệ thống:

1. **Kiểm tra nhiều lớp**:
   * Lớp cơ bản: Kiểm tra nhanh mọi dữ liệu (định dạng, cấu trúc)
   * Lớp nâng cao: Kiểm tra chi tiết cho dữ liệu quan trọng (theo profile, logic nghiệp vụ)
2. **Kiểm tra ở các thời điểm khác nhau**:
   * Khi người dùng nhập liệu: Giúp phát hiện sớm
   * Trước khi lưu vào cơ sở dữ liệu: Đảm bảo tính toàn vẹn
   * Khi trao đổi dữ liệu: Đảm bảo tương thích

#### Ví dụ thực tế: Kiểm tra đơn thuốc

```java
// Kiểm tra đơn thuốc trước khi lưu
public boolean validatePrescription(MedicationRequest prescription) {
    // 1. Kiểm tra cơ bản (định dạng, cấu trúc)
    if (!basicValidator.isValid(prescription)) {
        return false;
    }
    
    // 2. Kiểm tra theo profile
    if (!profileValidator.isValid(prescription, "vn-prescription-profile")) {
        return false;
    }
    
    // 3. Kiểm tra nghiệp vụ (liều lượng phù hợp với bệnh nhân)
    Patient patient = getPatient(prescription.getSubject().getReference());
    if (patient != null && isChildPatient(patient)) {
        if (!isValidDosageForChild(prescription.getDosageInstruction(), patient)) {
            saveValidationError("Liều lượng không phù hợp với trẻ em");
            return false;
        }
    }
    
    return true;
}
```

#### Xử lý lỗi kiểm tra

Khi phát hiện lỗi, có nhiều cách xử lý:

1. **Từ chối**: Trả về thông báo lỗi rõ ràng để người dùng sửa
2. **Chấp nhận có điều kiện**: Cho phép lưu nhưng đánh dấu để xem xét sau
3. **Tự sửa**: Với một số lỗi đơn giản, hệ thống có thể tự động sửa

### Ví dụ toàn diện: Kiểm tra hồ sơ tiêm chủng

Hãy xem một ví dụ đầy đủ về kiểm tra hồ sơ tiêm chủng:

1. **Tạo tệp tiêm chủng** (`tiem-chung.json`):

```json
{
  "resourceType": "Immunization",
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://vaccine.vn/cvx",
        "code": "207",
        "display": "COVID-19 Vắc-xin, mRNA"
      }
    ]
  },
  "patient": {
    "reference": "Patient/PT001"
  },
  "occurrenceDateTime": "2023-06-15",
  "lotNumber": "123456A",
  "site": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
        "code": "LA",
        "display": "Cánh tay trái"
      }
    ]
  }
}
```

2. **Kiểm tra cơ bản**:

```bash
java -jar validator_cli.jar tiem-chung.json -version 5.0
```

3. **Kiểm tra theo profile Việt Nam**:

```bash
java -jar validator_cli.jar tiem-chung.json -profile http://example.org/fhir/StructureDefinition/vn-immunization
```

4. **Tạo quy tắc kiểm tra tùy chỉnh** (trong profile):

```
// Số lô vắc-xin COVID-19 phải theo định dạng quy định
(vaccineCode.coding.where(code='207').exists()) implies (lotNumber.matches('^[0-9]{6}[A-Z]$'))
```

5. **Kiểm tra trong ứng dụng**:

```java
// Đoạn mã trong ứng dụng đăng ký tiêm chủng
@PostMapping("/immunizations")
public ResponseEntity<?> saveImmunization(@RequestBody Immunization immunization) {
    // Kiểm tra cơ bản và theo profile
    ValidationResult result = fhirValidator.validate(immunization);
    
    if (!result.isSuccessful()) {
        // Trả về danh sách lỗi cho người dùng
        return ResponseEntity.badRequest().body(result.getMessages());
    }
    
    // Kiểm tra thêm logic nghiệp vụ
    if (immunization.getOccurrenceDateTime().after(new Date())) {
        return ResponseEntity.badRequest().body("Ngày tiêm chủng không thể nằm trong tương lai");
    }
    
    // Kiểm tra vắc-xin còn trong kho
    if (!inventoryService.isVaccineAvailable(immunization.getVaccineCode(), immunization.getLotNumber())) {
        return ResponseEntity.badRequest().body("Vắc-xin với số lô này không có sẵn");
    }
    
    // Nếu tất cả kiểm tra đều thành công, lưu hồ sơ
    Immunization saved = immunizationService.save(immunization);
    return ResponseEntity.ok(saved);
}
```

### Kết luận

Kiểm tra dữ liệu trong FHIR R5 không phải là việc phức tạp nếu bạn tiếp cận từng bước:

1. **Sử dụng công cụ có sẵn**: FHIR Validator giúp bạn kiểm tra cơ bản
2. **Áp dụng profiles phù hợp**: Sử dụng hoặc tạo profiles phù hợp với nhu cầu cụ thể
3. **Thêm quy tắc tùy chỉnh**: Sử dụng FHIRPath để viết các quy tắc riêng
4. **Triển khai nhiều lớp kiểm tra**: Từ kiểm tra đơn giản đến phức tạp
5. **Xử lý lỗi hợp lý**: Cung cấp thông tin rõ ràng để người dùng hiểu và sửa lỗi

Bằng cách này, bạn đảm bảo dữ liệu FHIR trong hệ thống luôn chính xác, đáng tin cậy và tuân thủ các tiêu chuẩn cần thiết.
