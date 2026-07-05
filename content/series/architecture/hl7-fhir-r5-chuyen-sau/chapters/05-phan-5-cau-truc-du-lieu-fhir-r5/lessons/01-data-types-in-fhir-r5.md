---
id: 57c40667-0a85-480c-8cf3-a52850bf2af0
title: 'Data Types In FHIR R5'
slug: data-types-in-fhir-r5
description: 'Nếu bạn đã làm việc với các phiên bản FHIR trước đây, bạn sẽ thấy R5 mang đến nhiều cải tiến đáng kể. Còn nếu bạn mới làm quen với FHIR, đây là thời điểm tuyệt vời để bắt đầu với phiên bản mới nhất và đầy đủ nhất.'
duration_minutes: 26
is_free: true
video_url: null
sort_order: 1
section_title: 'Phần 5: Cấu trúc dữ liệu FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Nếu bạn đã làm việc với các phiên bản FHIR trước đây, bạn sẽ thấy R5 mang đến nhiều cải tiến đáng kể. Còn nếu bạn mới làm quen với FHIR, đây là thời điểm tuyệt vời để bắt đầu với phiên bản mới nhất và đầy đủ nhất.

### Tổng quan về Data Types trong FHIR

Trước khi đi vào chi tiết, chúng ta cần hiểu rằng FHIR (Fast Healthcare Interoperability Resources) sử dụng hệ thống kiểu dữ liệu phong phú để mô tả thông tin y tế một cách chính xác và nhất quán. Các kiểu dữ liệu này được chia thành ba nhóm chính:

1. **Primitive Types**: Các kiểu dữ liệu cơ bản như string, integer, boolean
2. **Complex Types**: Các cấu trúc dữ liệu phức tạp như Identifier, HumanName, Address
3. **Resource Types**: Các đối tượng mức cao nhất như Patient, Observation, Medication

Trong bài viết này, chúng ta sẽ tập trung vào hai nhóm đầu tiên: Primitive Types và Complex Types.

### Primitive Types: Nền tảng của FHIR

Primitive Types là các kiểu dữ liệu đơn giản, không thể chia nhỏ thêm, đóng vai trò nền tảng cho mọi cấu trúc dữ liệu phức tạp trong FHIR. Dưới đây là tổng quan chi tiết về các primitive types trong FHIR R5:

| Kiểu dữ liệu   | Mô tả                                                  | Ví dụ                                                                                             | Đặc điểm mới trong R5        | Trường hợp sử dụng điển hình                    |
| -------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------- |
| `boolean`      | Giá trị logic true/false                               | `"active": true`                                                                                  | Cải thiện validation         | Trạng thái kích hoạt, câu trả lời có/không      |
| `integer`      | Số nguyên từ -2^31 đến 2^31-1                          | `"multipleBirthInteger": 2`                                                                       | Không thay đổi               | Số lượng, đếm, thứ tự                           |
| `decimal`      | Số thập phân với độ chính xác tùy ý                    | `"valueDecimal": 98.6`                                                                            | Validation chi tiết hơn      | Đo lường, kết quả xét nghiệm, liều lượng        |
| `string`       | Chuỗi ký tự Unicode                                    | `"text": "Đây là văn bản"`                                                                        | Hỗ trợ các script khác nhau  | Văn bản tự do, tên, mô tả                       |
| `uri`          | Định danh tài nguyên thống nhất                        | `"url": "http://hl7.org/fhir/ValueSet/administrative-gender"`                                     | Không thay đổi               | Định danh tài nguyên, tham chiếu đến bộ giá trị |
| `url`          | URI đặc biệt chỉ chấp nhận URL thực tế                 | `"fullUrl": "https://example.org/fhir/Patient/123"`                                               | Validation nghiêm ngặt hơn   | Liên kết đến tài nguyên trên web                |
| `canonical`    | URI tham chiếu đến định nghĩa mẫu FHIR                 | `"instantiatesCanonical": "http://hl7.org/fhir/PlanDefinition/low-suicide-risk-order-set\|1.0.0"` | Hỗ trợ versioning tốt hơn    | Tham chiếu đến định nghĩa chính thức            |
| `base64Binary` | Dữ liệu nhị phân mã hóa base64                         | `"data": "SGVsbG8gV29ybGQ="`                                                                      | Kiểm tra định dạng mã hóa    | Hình ảnh, tài liệu PDF, âm thanh                |
| `instant`      | Thời điểm chính xác đến mili giây, bắt buộc có múi giờ | `"recorded": "2023-10-25T14:30:14.559+07:00"`                                                     | Validation cải tiến          | Thời điểm ghi nhận, thời gian hệ thống          |
| `date`         | Ngày, tháng, năm với độ chính xác thay đổi             | `"birthDate": "1990-07-15"`                                                                       | Hỗ trợ timezone              | Ngày sinh, ngày hẹn                             |
| `dateTime`     | Thời gian với độ chính xác và múi giờ tùy chọn         | `"effectiveDateTime": "2023-10-25T14:30:00+07:00"`                                                | Quy tắc timezone rõ ràng hơn | Thời gian xét nghiệm, kê đơn                    |
| `time`         | Thời gian trong ngày (giờ:phút:giây)                   | `"timeOfDay": "14:30:15"`                                                                         | Không thay đổi               | Lịch trình, thời gian trong ngày                |
| `code`         | Chuỗi ký tự giới hạn cho mã định danh                  | `"gender": "male"`                                                                                | Không thay đổi               | Mã khái niệm, trạng thái, enum                  |
| `oid`          | Object Identifier theo chuẩn ISO                       | `"system": "urn:oid:2.16.840.1.113883.6.96"`                                                      | Không thay đổi               | Định danh hệ thống mã                           |
| `id`           | Định danh duy nhất cho tài nguyên (1-64 ký tự)         | `"id": "patient-12345"`                                                                           | Không thay đổi               | ID tài nguyên, tham chiếu nội bộ                |
| `markdown`     | Văn bản định dạng Markdown                             | `"text": "# Heading\n\nThis is **bold** text."`                                                   | Nhiều định dạng hơn          | Văn bản có cấu trúc, hướng dẫn                  |
| `unsignedInt`  | Số nguyên không âm (0-2^31-1)                          | `"count": 42`                                                                                     | **Mới trong R5**             | Đếm, số lượng không thể âm                      |
| `positiveInt`  | Số nguyên dương (1-2^31-1)                             | `"sequence": 1`                                                                                   | Không thay đổi               | Số thứ tự, đánh số bắt đầu từ 1                 |
| `uuid`         | Định danh duy nhất toàn cầu theo UUID                  | `"identifier": "urn:uuid:c757873d-ec9a-4326-a141-556f43239520"`                                   | **Mới trong R5**             | Định danh độc lập với hệ thống                  |

#### Phân loại theo nhóm chức năng

**Nhóm số học**

* **integer**: Dùng cho số nguyên có giá trị từ -2,147,483,648 đến 2,147,483,647.
* **decimal**: Sử dụng khi cần biểu diễn giá trị số thập phân như nhiệt độ, cân nặng hay kết quả xét nghiệm.
* **unsignedInt**: Mới trong R5, dùng cho các giá trị đếm không thể âm (0-2,147,483,647).
* **positiveInt**: Dùng cho các giá trị luôn dương như số thứ tự, bắt đầu từ 1.

**Nhóm văn bản**

* **string**: Chuỗi ký tự Unicode không giới hạn, dùng cho văn bản tự do.
* **code**: Chuỗi ký tự giới hạn (\[a-z, A-Z, 0-9, -, .]) cho các mã định danh.
* **markdown**: Văn bản có định dạng, hỗ trợ cú pháp Markdown để trình bày có cấu trúc.

**Nhóm định danh**

* **id**: Định danh logic trong nội bộ FHIR, giới hạn 1-64 ký tự (a-z, A-Z, 0-9, -, .).
* **uri**: Định danh tài nguyên thống nhất theo RFC 3986.
* **url**: URI đặc biệt chỉ chấp nhận URL thực tế có protocol HTTP/HTTPS.
* **canonical**: URI tham chiếu đến định nghĩa chuẩn trong FHIR, có thể bao gồm phiên bản.
* **oid**: Object Identifier theo chuẩn ISO/IEC 8824.
* **uuid**: Mới trong R5, định danh duy nhất toàn cầu theo RFC 4122.

**Nhóm thời gian**

* **date**: Ngày, tháng, năm với độ chính xác linh hoạt (YYYY, YYYY-MM, YYYY-MM-DD).
* **dateTime**: Kết hợp ngày và thời gian với độ chính xác và múi giờ tùy chọn.
* **instant**: Thời điểm chính xác bắt buộc có múi giờ và chi tiết đến mili giây.
* **time**: Thời gian trong ngày không liên quan đến ngày cụ thể.

**Nhóm khác**

* **boolean**: Giá trị logic true/false.
* **base64Binary**: Dữ liệu nhị phân được mã hóa base64, cho phép lưu trữ các dữ liệu không phải văn bản.

#### Chi tiết và cách sử dụng từng kiểu dữ liệu

**boolean**

**Định nghĩa**: Biểu diễn giá trị logic true hoặc false.

**Cú pháp**: `true` hoặc `false` (phân biệt chữ hoa/thường).

**Ví dụ**:

```json
"active": true,
"deceasedBoolean": false
```

**Trường hợp sử dụng**: Đánh dấu trạng thái kích hoạt, câu trả lời có/không, tính năng bật/tắt.

**Lưu ý**: Không sử dụng chuỗi "true"/"false" mà phải là giá trị boolean thực sự.

**integer**

**Định nghĩa**: Số nguyên, phạm vi từ -2,147,483,648 đến 2,147,483,647 (giới hạn của số nguyên 32-bit có dấu).

**Cú pháp**: Dãy các chữ số, có thể bắt đầu bằng dấu âm (-).

**Ví dụ**:

```json
"multipleBirthInteger": 2,
"count": -10
```

**Trường hợp sử dụng**: Biểu diễn số lượng, chỉ số, thứ tự, đếm.

**Lưu ý**: Không được sử dụng dấu phẩy ngăn cách hàng nghìn.

**decimal**

**Định nghĩa**: Số thập phân với độ chính xác tùy ý.

**Cú pháp**: Dãy chữ số có thể bao gồm dấu thập phân (.) và dấu âm (-).

**Ví dụ**:

```json
"valueDecimal": 98.6,
"probability": 0.75,
"weight": -1.5
```

**Trường hợp sử dụng**: Đo lường (cân nặng, chiều cao), kết quả xét nghiệm, liều lượng thuốc.

**Lưu ý**:

* Sử dụng dấu chấm (.) làm dấu thập phân, không được dùng dấu phẩy (,).
* Không sử dụng ký hiệu khoa học (ví dụ: 1.2e3).

**string**

**Định nghĩa**: Chuỗi các ký tự Unicode.

**Cú pháp**: Chuỗi ký tự bất kỳ được đặt trong dấu ngoặc kép.

**Ví dụ**:

```json
"text": "Đây là một chuỗi văn bản có thể chứa Unicode như tiếng Việt",
"name": "Nguyễn Văn A"
```

**Trường hợp sử dụng**: Văn bản tự do, tên, mô tả, ghi chú.

**Lưu ý**:

* Không giới hạn độ dài, nhưng quá dài có thể gây vấn đề hiệu suất.
* Hỗ trợ đầy đủ Unicode cho các ngôn ngữ khác nhau.
* Cần escape các ký tự đặc biệt trong JSON (", , /).

**uri**

**Định nghĩa**: Uniform Resource Identifier theo RFC 3986.

**Cú pháp**: Chuỗi tuân theo định dạng URI.

**Ví dụ**:

```json
"url": "http://hl7.org/fhir/ValueSet/administrative-gender",
"system": "urn:iso:std:iso:3166"
```

**Trường hợp sử dụng**: Định danh hệ thống mã, tham chiếu đến bộ giá trị, nhận dạng tài nguyên.

**Lưu ý**:

* Bao gồm cả URL và URN.
* Không yêu cầu phải tồn tại thực tế, chỉ yêu cầu đúng cú pháp.

**url**

**Định nghĩa**: URI đặc biệt chỉ chấp nhận URL thực tế (http://, https://, ftp://).

**Cú pháp**: URL tuân thủ RFC 1738.

**Ví dụ**:

```json
"fullUrl": "https://example.org/fhir/Patient/123",
"endpoint": "http://terminology.hl7.org/CodeSystem/v2-0203"
```

**Trường hợp sử dụng**: Liên kết đến tài nguyên trên web, điểm cuối API.

**Lưu ý**: Nghiêm ngặt hơn uri, chỉ chấp nhận các URL có protocol.

**canonical**

**Định nghĩa**: URI tham chiếu đến định nghĩa mẫu FHIR, có thể bao gồm phiên bản.

**Cú pháp**: URL cơ bản, tùy chọn theo sau là thông tin phiên bản (|version).

**Ví dụ**:

```json
"instantiatesCanonical": "http://hl7.org/fhir/PlanDefinition/low-suicide-risk-order-set|1.0.0",
"profile": "http://hl7.org/fhir/StructureDefinition/vitalsigns"
```

**Trường hợp sử dụng**: Tham chiếu đến cấu trúc, giá trị tập, quy tắc xác thực.

**Lưu ý**:

* Cho phép tham chiếu đến phiên bản cụ thể của tài nguyên.
* Trong R5, có cải tiến để hỗ trợ phiên bản tốt hơn.

**base64Binary**

**Định nghĩa**: Dữ liệu nhị phân được mã hóa base64 theo RFC 4648.

**Cú pháp**: Chuỗi ký tự base64, có thể bao gồm khoảng trắng.

**Ví dụ**:

```json
"data": "SGVsbG8gV29ybGQ=",
"signature": "dGhpcyBibG9jayBjb250YWlucyBTSEEtMSBo..."
```

**Trường hợp sử dụng**: Hình ảnh, tài liệu PDF, chữ ký số, âm thanh, dữ liệu nhị phân.

**Lưu ý**:

* Khoảng trắng trong chuỗi base64 sẽ bị bỏ qua khi xử lý.
* Kích thước có thể lớn, nên cân nhắc sử dụng tham chiếu bên ngoài cho dữ liệu lớn.

**instant**

**Định nghĩa**: Thời điểm với độ chính xác đến mili giây và bắt buộc có múi giờ.

**Cú pháp**: YYYY-MM-DDThh:mm:ss.sss+zz:zz (ISO 8601).

**Ví dụ**:

```json
"recorded": "2023-10-25T14:30:14.559Z",
"timestamp": "2023-10-25T14:30:14.559+07:00"
```

**Trường hợp sử dụng**: Thời điểm ghi nhận chính xác, dấu thời gian hệ thống.

**Lưu ý**:

* Luôn phải có múi giờ (Z hoặc +/-hh:mm).
* Độ chính xác luôn đến mili giây (không như dateTime).
* Không thể bỏ qua giờ, phút, giây.

**date**

**Định nghĩa**: Ngày, tháng, năm với độ chính xác thay đổi.

**Cú pháp**: YYYY, YYYY-MM, hoặc YYYY-MM-DD (ISO 8601), tùy chọn múi giờ.

**Ví dụ**:

```json
"birthDate": "1990-07-15",
"approximateDate": "2023",
"partialDate": "2023-10"
```

**Trường hợp sử dụng**: Ngày sinh, ngày hẹn, ngày có hiệu lực, khi không cần chính xác đến giờ.

**Lưu ý**:

* Độ chính xác linh hoạt: năm, tháng, hoặc ngày cụ thể.
* Trong R5, hỗ trợ múi giờ (không bắt buộc).

**dateTime**

**Định nghĩa**: Thời gian với độ chính xác và múi giờ tùy chọn.

**Cú pháp**: YYYY, YYYY-MM, YYYY-MM-DD, YYYY-MM-DDThh:mm, YYYY-MM-DDThh:mm:ss, hoặc YYYY-MM-DDThh:mm:ss.sss với múi giờ tùy chọn.

**Ví dụ**:

```json
"effectiveDateTime": "2023-10-25T14:30:00+07:00",
"startDateTime": "2023-10-25",
"estimatedDateTime": "2023-10"
```

**Trường hợp sử dụng**: Thời gian bắt đầu/kết thúc, thời gian xét nghiệm, khi biết ngày nhưng giờ có thể tùy chọn.

**Lưu ý**:

* Độ chính xác linh hoạt hơn instant.
* Múi giờ là tùy chọn, nhưng nên sử dụng khi có thông tin.
* R5 làm rõ quy tắc về múi giờ.

**time**

**Định nghĩa**: Thời gian trong ngày, không phụ thuộc vào ngày cụ thể.

**Cú pháp**: hh:mm:ss hoặc hh:mm:ss.sss (tùy chọn phần thập phân của giây).

**Ví dụ**:

```json
"timeOfDay": "14:30:15",
"preferredTime": "08:00:00"
```

**Trường hợp sử dụng**: Lịch trình, thời gian trong ngày, giờ hẹn lặp lại.

**Lưu ý**:

* Không hỗ trợ múi giờ.
* Sử dụng định dạng 24 giờ.

**code**

**Định nghĩa**: Chuỗi ký tự giới hạn dùng làm mã định danh.

**Cú pháp**: 1+ ký tự \[a-z, A-Z, 0-9, -, .].

**Ví dụ**:

```json
"gender": "male",
"status": "completed",
"language": "vi-VN"
```

**Trường hợp sử dụng**: Mã khái niệm, trạng thái, enum, ngôn ngữ.

**Lưu ý**:

* Không sử dụng khoảng trắng, dấu cách.
* Phân biệt chữ hoa/thường.
* Thường được giới hạn bằng ValueSet hoặc CodeSystem.

**oid**

**Định nghĩa**: Object Identifier theo chuẩn ISO/IEC 8824.

**Cú pháp**: urn:oid: theo sau là chuỗi số phân cách bằng dấu chấm.

**Ví dụ**:

```json
"system": "urn:oid:2.16.840.1.113883.6.96",
"codeSystem": "urn:oid:2.16.840.1.113883.6.1"
```

**Trường hợp sử dụng**: Định danh hệ thống mã, tương thích với HL7 v2/v3, DICOM.

**Lưu ý**:

* Format chuẩn là "urn:oid:" + chuỗi OID.
* Thường dùng trong t

### Complex Types: Sức mạnh của cấu trúc dữ liệu FHIR

Complex Types là các kiểu dữ liệu được cấu tạo từ nhiều thành phần. Chúng là nền tảng cho việc mô tả các khái niệm phức tạp trong y tế. Dưới đây là một số Complex Types quan trọng trong FHIR R5:

#### Identifier

Dùng để xác định một thực thể duy nhất trong một hệ thống cụ thể. Ví dụ: mã số bệnh nhân, số CMND, mã bảo hiểm.

```json
"identifier": [
  {
    "use": "official",
    "system": "http://hospital.example.org/identifiers/patients",
    "value": "12345",
    "period": {
      "start": "2023-01-01"
    },
    "assigner": {
      "display": "General Hospital"
    }
  }
]
```

#### HumanName

Mô tả tên người với đầy đủ các thành phần.

```json
"name": [
  {
    "use": "official",
    "family": "Nguyễn",
    "given": ["Văn", "A"],
    "prefix": ["Ông"],
    "suffix": ["Tiến sĩ"],
    "period": {
      "start": "1990-01-01"
    }
  }
]
```

#### Address

Mô tả địa chỉ địa lý, có thể là địa chỉ nhà, cơ quan...

```json
"address": [
  {
    "use": "home",
    "type": "physical",
    "text": "123 Đường Lê Lợi, Quận 1, TP HCM",
    "line": ["123 Đường Lê Lợi"],
    "city": "TP HCM",
    "district": "Quận 1",
    "state": "Hồ Chí Minh",
    "postalCode": "70000",
    "country": "VN",
    "period": {
      "start": "2020-01-01"
    }
  }
]
```

#### ContactPoint

Thông tin liên lạc như số điện thoại, email, fax.

```json
"telecom": [
  {
    "system": "phone",
    "value": "+84 123 456 789",
    "use": "mobile",
    "rank": 1,
    "period": {
      "start": "2020-01-01"
    }
  },
  {
    "system": "email",
    "value": "example@email.com",
    "use": "work",
    "rank": 2
  }
]
```

#### Timing

Mô tả lịch trình hoặc tần suất diễn ra sự kiện, đặc biệt hữu ích cho việc dùng thuốc.

```json
"timing": {
  "repeat": {
    "boundsDuration": {
      "value": 2,
      "unit": "week",
      "system": "http://unitsofmeasure.org",
      "code": "wk"
    },
    "frequency": 3,
    "period": 1,
    "periodUnit": "d",
    "dayOfWeek": ["mon", "wed", "fri"],
    "timeOfDay": ["09:00:00"]
  }
}
```

#### Quantity

Biểu diễn giá trị số kèm đơn vị đo.

```json
"valueQuantity": {
  "value": 96.5,
  "unit": "kg",
  "system": "http://unitsofmeasure.org",
  "code": "kg"
}
```

Các biến thể của Quantity:

* **SimpleQuantity**: Phiên bản đơn giản hóa của Quantity
* **Age**: Tuổi của một người
* **Distance**: Khoảng cách giữa hai điểm
* **Duration**: Khoảng thời gian
* **Count**: Số lượng đếm được

#### Annotation

Ghi chú, bình luận từ người dùng hoặc hệ thống.

```json
"note": [
  {
    "authorReference": {
      "reference": "Practitioner/123"
    },
    "time": "2023-10-20T14:00:00+07:00",
    "text": "Bệnh nhân cần được theo dõi huyết áp mỗi ngày"
  }
]
```

#### Attachment

Dữ liệu đính kèm như hình ảnh, tài liệu PDF, hoặc tệp âm thanh.

```json
"content": [
  {
    "contentType": "application/pdf",
    "language": "vi-VN",
    "data": "JVBERi0xLjcKJeLjz9MKNSAwIG...",
    "url": "https://example.org/docs/report.pdf",
    "size": 104522,
    "hash": "ZGFkYmViMDM5MjRkZTM4NWY4ZjBmNmFiNjM4ZTEwYjU=",
    "title": "Báo cáo X-quang",
    "creation": "2023-10-15T10:30:00+07:00"
  }
]
```

#### Range

Khoảng giá trị giữa hai điểm.

```json
"valueRange": {
  "low": {
    "value": 90,
    "unit": "mmHg",
    "system": "http://unitsofmeasure.org",
    "code": "mm[Hg]"
  },
  "high": {
    "value": 120,
    "unit": "mmHg",
    "system": "http://unitsofmeasure.org",
    "code": "mm[Hg]"
  }
}
```

#### Ratio

Tỷ lệ giữa hai giá trị số (tử số và mẫu số).

```json
"valueRatio": {
  "numerator": {
    "value": 5,
    "unit": "mg"
  },
  "denominator": {
    "value": 1,
    "unit": "mL"
  }
}
```

#### Period

Khoảng thời gian có điểm bắt đầu và kết thúc.

```json
"active": {
  "start": "2023-01-01T00:00:00+07:00",
  "end": "2023-12-31T23:59:59+07:00"
}
```

#### Reference

Tham chiếu đến tài nguyên FHIR khác.

```json
"subject": {
  "reference": "Patient/123",
  "type": "Patient",
  "identifier": {
    "system": "http://hospital.example.org/identifiers/patients",
    "value": "12345"
  },
  "display": "Nguyễn Văn A"
}
```

#### CodeableConcept

Mã hóa khái niệm với hệ thống mã và văn bản mô tả.

```json
"code": {
  "coding": [
    {
      "system": "http://loinc.org",
      "code": "8480-6",
      "display": "Systolic blood pressure"
    },
    {
      "system": "http://snomed.info/sct",
      "code": "271649006",
      "display": "Systolic blood pressure"
    }
  ],
  "text": "Huyết áp tâm thu"
}
```

#### Coding

Mã và hệ thống mã.

```json
"interpretation": {
  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
  "code": "H",
  "display": "High"
}
```

### Các Data Types mới và cải tiến trong FHIR R5

FHIR R5 giới thiệu một số kiểu dữ liệu mới và cải tiến đáng kể:

#### 1. DataType (Mới)

Là một meta-type cho phép xác định kiểu dữ liệu cụ thể được sử dụng trong một ngữ cảnh.

```json
"value[x]": {
  "valueDataType": {
    "type": "Quantity"
  }
}
```

#### 2. RelatedArtifact (Cải tiến)

Trong R5, RelatedArtifact được mở rộng để hỗ trợ nhiều loại tham chiếu hơn và thêm các thuộc tính mới như `classifier` và `citation`.

```json
"relatedArtifact": [
  {
    "type": "citation",
    "label": "Tài liệu tham khảo 1",
    "display": "Nghiên cứu về huyết áp ở người lớn tuổi",
    "citation": "Nguyễn V, Trần T. Nghiên cứu huyết áp ở người lớn tuổi. Tạp chí Y học Việt Nam. 2022;10(5):45-52.",
    "url": "https://example.org/article/12345",
    "classifier": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/cited-artifact-classification",
            "code": "peer-reviewed",
            "display": "Peer-reviewed"
          }
        ]
      }
    ]
  }
]
```

#### 3. Expression (Cải tiến)

Expression được cải tiến để hỗ trợ nhiều ngôn ngữ biểu thức hơn và thêm thuộc tính `description`.

```json
"condition": {
  "language": "text/cql-identifier",
  "expression": "HighBPCondition",
  "reference": "Library/high-bp-conditions",
  "description": "Điều kiện xác định huyết áp cao"
}
```

#### 4. Availability (Mới)

Kiểu dữ liệu mới để mô tả thời gian và địa điểm khả dụng của một tài nguyên như bác sĩ hoặc phòng khám.

```json
"availability": {
  "availableTime": [
    {
      "daysOfWeek": ["mon", "tue", "wed", "thu", "fri"],
      "allDay": false,
      "availableStartTime": "08:00:00",
      "availableEndTime": "17:00:00"
    }
  ],
  "notAvailableTime": [
    {
      "description": "Nghỉ lễ",
      "during": {
        "start": "2023-12-31",
        "end": "2024-01-02"
      }
    }
  ]
}
```

#### 5. CanonicalReference (Mới)

Kiểu tham chiếu đặc biệt chỉ sử dụng canonical URL.

```json
"protocolReference": {
  "reference": "http://example.org/fhir/PlanDefinition/diabetes-protocol|1.0.0"
}
```

#### 6. RatioRange (Mới)

Mở rộng từ Ratio để biểu diễn khoảng tỷ lệ thay vì một giá trị cụ thể.

```json
"dosage": {
  "doseRatioRange": {
    "lowNumerator": {
      "value": 2,
      "unit": "mg"
    },
    "highNumerator": {
      "value": 4,
      "unit": "mg"
    },
    "denominator": {
      "value": 1,
      "unit": "kg"
    }
  }
}
```

#### 7. Dosage (Cải tiến)

Cải tiến để hỗ trợ nhiều thông tin hơn về liều lượng thuốc.

```json
"dosageInstruction": [
  {
    "sequence": 1,
    "text": "Uống 1 viên mỗi sáng sau khi ăn",
    "additionalInstruction": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "311504000",
            "display": "Với nước"
          }
        ]
      }
    ],
    "patientInstruction": "Uống với nhiều nước",
    "timing": {
      "repeat": {
        "frequency": 1,
        "period": 1,
        "periodUnit": "d",
        "when": ["ACM"]
      }
    },
    "route": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "26643006",
          "display": "Oral route"
        }
      ]
    },
    "doseAndRate": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
              "code": "ordered",
              "display": "Ordered"
            }
          ]
        },
        "doseQuantity": {
          "value": 1,
          "unit": "viên"
        }
      }
    ]
  }
]
```

### Cách Sử Dụng Hiệu Quả Các Data Types

Dưới đây là một số nguyên tắc và thực hành tốt khi sử dụng data types trong FHIR R5:

#### 1. Chọn đúng kiểu dữ liệu

* Sử dụng `dateTime` khi cần ghi lại thời điểm chính xác, `date` khi chỉ cần ngày (như ngày sinh)
* Dùng `CodeableConcept` thay vì `Coding` khi cần thêm văn bản mô tả tự do
* Sử dụng `SimpleQuantity` thay vì `Quantity` đầy đủ khi không cần các thuộc tính phức tạp

#### 2. Tuân thủ quy ước mã hóa

* Luôn cung cấp `system` URL khi sử dụng các mã trong `Coding` hoặc `CodeableConcept`
* Sử dụng các hệ thống mã chuẩn như SNOMED CT, LOINC, RxNorm khi có thể
* Đảm bảo mã và hệ thống mã phù hợp với nhau

#### 3. Xử lý đơn vị đo lường

* Sử dụng `Quantity` với đầy đủ thông tin `value`, `unit`, `system` và `code`
* Ưu tiên sử dụng đơn vị từ hệ thống UCUM (http://unitsofmeasure.org)
* Đảm bảo đơn vị phù hợp với ngữ cảnh sử dụng

#### 4. Quản lý định danh

* Cung cấp đầy đủ thông tin `system` và `value` cho mọi `Identifier`
* Sử dụng thuộc tính `use` để phân biệt các loại định danh
* Xem xét thêm thông tin `period` để chỉ ra thời gian hiệu lực

#### 5. Xử lý tham chiếu

* Ưu tiên sử dụng tham chiếu trực tiếp (`reference`) khi có thể
* Thêm `display` text để tăng tính dễ đọc
* Cân nhắc sử dụng `identifier` khi cần tham chiếu đến tài nguyên bên ngoài hệ thống

#### 6. Ví dụ thực tế

Dưới đây là một ví dụ kết hợp nhiều kiểu dữ liệu trong một tài nguyên Observation:

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
        "display": "Blood pressure panel with all children optional"
      }
    ],
    "text": "Huyết áp"
  },
  "subject": {
    "reference": "Patient/example",
    "display": "Nguyễn Văn A"
  },
  "encounter": {
    "reference": "Encounter/example"
  },
  "effectiveDateTime": "2023-10-25T09:30:00+07:00",
  "issued": "2023-10-25T09:35:00+07:00",
  "performer": [
    {
      "reference": "Practitioner/example",
      "display": "Bác sĩ Trần B"
    }
  ],
  "component": [
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "8480-6",
            "display": "Systolic blood pressure"
          }
        ],
        "text": "Huyết áp tâm thu"
      },
      "valueQuantity": {
        "value": 120,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      },
      "interpretation": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
              "code": "N",
              "display": "Normal"
            }
          ]
        }
      ]
    },
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "8462-4",
            "display": "Diastolic blood pressure"
          }
        ],
        "text": "Huyết áp tâm trương"
      },
      "valueQuantity": {
        "value": 80,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      },
      "interpretation": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
              "code": "N",
              "display": "Normal"
            }
          ]
        }
      ]
    }
  ],
  "note": [
    {
      "authorReference": {
        "reference": "Practitioner/example"
      },
      "time": "2023-10-25T09:35:00+07:00",
      "text": "Bệnh nhân nghỉ ngơi 10 phút trước khi đo"
    }
  ],
  "method": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "43468-2",
        "display": "Automated with manual confirmation"
      }
    ]
  },
  "device": {
    "reference": "Device/example",
    "display": "Máy đo huyết áp Omron HEM-7121"
  }
}
```

### Sự khác biệt giữa R5 và các phiên bản trước

FHIR R5, được phát hành vào tháng 3/2023, có một số thay đổi quan trọng so với R4:

1. **Primitive Types mới**: Thêm `uuid` và `unsignedInt`
2. **Complex Types mới**: Thêm `DataType`, `Availability`, `CanonicalReference`, `RatioRange`
3. **Cải tiến Extensions**: Cách xử lý extensions nhất quán hơn cho tất cả các kiểu dữ liệu
4. **Cấu trúc nhất quán hơn**: Nhiều kiểu dữ liệu được chuẩn hóa lại
5. **Hỗ trợ đa ngôn ngữ tốt hơn**: Cải thiện khả năng xử lý các ngôn ngữ khác nhau
6. **Thông tin metadata phong phú hơn**: Nhiều thuộc tính mô tả và phân loại hơn
7. **Hỗ trợ tốt hơn cho dữ liệu y học chính xác**: Với các kiểu dữ liệu chi tiết như RatioRange, Availability

### Kết luận

Data Types là nền tảng của FHIR, và hiểu rõ chúng là chìa khóa để xây dựng các ứng dụng y tế hiệu quả và tương thích. FHIR R5 mang đến nhiều cải tiến quan trọng về kiểu dữ liệu, giúp biểu diễn thông tin y tế chính xác và phong phú hơn.

Trong bài viết tiếp theo của series, chúng ta sẽ tìm hiểu về các Resource Types chính trong FHIR R5 và cách chúng được sử dụng trong các tình huống thực tế.
