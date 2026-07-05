---
id: c3068ae9-78be-4789-a645-fefa7fbe1958
title: 'Search in FHIR R5'
slug: search-in-fhir-r5
description: 'Khả năng tìm kiếm (Search) là một trong những tính năng mạnh mẽ nhất của FHIR. Nó cho phép các ứng dụng truy vấn dữ liệu từ máy chủ FHIR một cách linh hoạt và hiệu quả. Trong R5, khả năng tìm kiếm này đã được mở rộng và…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 2
section_title: 'Phần 4: Search & CRUD trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Khả năng tìm kiếm (Search) là một trong những tính năng mạnh mẽ nhất của FHIR. Nó cho phép các ứng dụng truy vấn dữ liệu từ máy chủ FHIR một cách linh hoạt và hiệu quả. Trong R5, khả năng tìm kiếm này đã được mở rộng và cải tiến đáng kể.

Trước khi đi sâu vào các tính năng, hãy nhớ rằng tìm kiếm FHIR luôn tuân theo mẫu cơ bản:

```
[base]/[resourceType]?[parameter]=[value]&[parameter]=[value]...
```

Ví dụ:

```
GET http://example.org/fhir/Patient?name=Smith&birthdate=gt1970
```

Đây là tìm kiếm những bệnh nhân có họ Smith và sinh sau năm 1970.

### Search Parameters tiêu chuẩn và custom

#### Search Parameters tiêu chuẩn

FHIR định nghĩa nhiều search parameters tiêu chuẩn cho mỗi loại tài nguyên. Ví dụ, với tài nguyên Patient, một số search parameters phổ biến bao gồm:

* `name`: Tìm theo tên bệnh nhân
* `family`: Tìm theo họ
* `given`: Tìm theo tên riêng
* `birthdate`: Tìm theo ngày sinh
* `gender`: Tìm theo giới tính
* `address`: Tìm theo địa chỉ

```
GET http://example.org/fhir/Patient?name=Smith&gender=male
```

#### Custom Search Parameters

R5 cho phép bạn định nghĩa search parameters tùy chỉnh thông qua tài nguyên `SearchParameter`. Điều này đặc biệt hữu ích khi bạn cần tìm kiếm theo các phần mở rộng hoặc các trường không có sẵn search parameter.

Ví dụ, định nghĩa một search parameter cho một extension:

```json
{
  "resourceType": "SearchParameter",
  "id": "patient-nationality",
  "url": "http://example.org/fhir/SearchParameter/patient-nationality",
  "name": "nationality",
  "status": "active",
  "description": "Search by patient nationality extension",
  "code": "nationality",
  "base": ["Patient"],
  "type": "token",
  "expression": "Patient.extension.where(url='http://example.org/fhir/StructureDefinition/nationality').value"
}
```

Sau khi đăng ký, bạn có thể tìm kiếm:

```
GET http://example.org/fhir/Patient?nationality=VN
```

### Modifiers: Mở rộng khả năng tìm kiếm

Modifiers trong FHIR cho phép bạn tinh chỉnh cách thức tìm kiếm. Chúng được thêm vào sau search parameter với dấu hai chấm `:`.

#### :exact

Tìm kiếm chính xác, phân biệt chữ hoa/thường và dấu:

```
GET http://example.org/fhir/Patient?name:exact=Nguyễn Văn A
```

#### :contains

Tìm kiếm chuỗi con (không cần khớp toàn bộ):

```
GET http://example.org/fhir/Patient?address:contains=Hà Nội
```

#### :missing

Kiểm tra xem một trường có tồn tại hay không:

```
GET http://example.org/fhir/Patient?birthdate:missing=true
```

#### :not

Đảo ngược kết quả tìm kiếm:

```
GET http://example.org/fhir/Patient?gender:not=male
```

#### :of-type

Chỉ định loại dữ liệu cụ thể (thường dùng với Reference):

```
GET http://example.org/fhir/Observation?subject:of-type=Patient&subject=123
```

### Prefixes cho tìm kiếm số và ngày

Với số và ngày tháng, FHIR cung cấp các tiền tố để so sánh:

* `eq`: Bằng (mặc định)
* `gt`: Lớn hơn
* `lt`: Nhỏ hơn
* `ge`: Lớn hơn hoặc bằng
* `le`: Nhỏ hơn hoặc bằng
* `sa`: Sau (starts after) - cho khoảng thời gian
* `eb`: Trước (ends before) - cho khoảng thời gian

Ví dụ:

```
GET http://example.org/fhir/Patient?birthdate=ge1960-01-01&birthdate=le1969-12-31
```

Tìm bệnh nhân sinh trong thập niên 60.

```
GET http://example.org/fhir/Observation?value-quantity=gt100
```

Tìm quan sát có giá trị lớn hơn 100.

### Chaining searches và reverse chaining

#### Chaining

Chaining cho phép bạn tìm kiếm dựa trên thuộc tính của tài nguyên được tham chiếu. Cú pháp sử dụng dấu chấm `.`:

```
GET http://example.org/fhir/Observation?subject.name=Smith
```

Tìm các quan sát của bệnh nhân có tên Smith.

Bạn cũng có thể thực hiện chaining nhiều cấp:

```
GET http://example.org/fhir/Observation?subject.organization.name=Bệnh viện Bạch Mai
```

#### Reverse Chaining

Reverse chaining cho phép bạn tìm kiếm tài nguyên dựa trên tài nguyên khác tham chiếu đến nó, sử dụng cú pháp `_has`:

```
GET http://example.org/fhir/Patient?_has:Observation:subject:code=8480-6
```

Tìm bệnh nhân có quan sát về huyết áp tâm thu (mã 8480-6).

### \*include và \*revinclude

#### \_include

`_include` cho phép bạn lấy các tài nguyên được tham chiếu trong kết quả tìm kiếm:

```
GET http://example.org/fhir/MedicationRequest?_include=MedicationRequest:subject
```

Trả về các MedicationRequest cùng với tài nguyên Patient được tham chiếu.

Bạn có thể lấy nhiều loại tham chiếu:

```
GET http://example.org/fhir/MedicationRequest?_include=MedicationRequest:subject&_include=MedicationRequest:medication
```

#### \_revinclude

`_revinclude` lấy các tài nguyên tham chiếu đến các tài nguyên trong kết quả tìm kiếm:

```
GET http://example.org/fhir/Patient?_revinclude=Observation:subject
```

Trả về các bệnh nhân và tất cả các quan sát liên quan đến họ.

#### :iterate modifier

Trong R5, có thêm `:iterate` cho phép bao gồm các tham chiếu lồng nhau:

```
GET http://example.org/fhir/Patient?_include:iterate=Patient:organization
```

### Phân trang và sorting

#### Phân trang

Sử dụng `_count` để kiểm soát số lượng kết quả trên mỗi trang:

```
GET http://example.org/fhir/Patient?_count=20
```

Kết quả sẽ chứa các liên kết để điều hướng:

```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "link": [
    {
      "relation": "self",
      "url": "http://example.org/fhir/Patient?_count=20"
    },
    {
      "relation": "next",
      "url": "http://example.org/fhir/Patient?_count=20&_offset=20"
    }
  ]
}
```

#### Sorting

Sử dụng `_sort` để sắp xếp kết quả:

```
GET http://example.org/fhir/Patient?_sort=birthdate
```

Để sắp xếp giảm dần, thêm dấu trừ:

```
GET http://example.org/fhir/Patient?_sort=-birthdate
```

Bạn cũng có thể sắp xếp theo nhiều trường:

```
GET http://example.org/fhir/Patient?_sort=name,-birthdate
```

#### Tổng số kết quả

Sử dụng `_total` để kiểm soát việc đếm tổng:

* `_total=none`: Không đếm tổng
* `_total=estimate`: Ước tính tổng số
* `_total=accurate`: Đếm chính xác (R5)

```
GET http://example.org/fhir/Patient?_total=accurate
```

### Cải tiến search trong R5

R5 đã giới thiệu nhiều cải tiến đáng chú ý cho khả năng tìm kiếm:

#### 1. Filter Search Parameter

Điểm nổi bật nhất trong R5 là giới thiệu search parameter `_filter` cho phép tạo các truy vấn phức tạp hơn sử dụng biểu thức logic:

```
GET http://example.org/fhir/Patient?_filter=family eq 'Smith' and birthdate ge '1970' or name co 'John'
```

Cú pháp này mạnh mẽ hơn nhiều so với cách truy vấn truyền thống:

* Hỗ trợ các toán tử: `eq`, `ne`, `gt`, `lt`, `ge`, `le`, `co`, `sw`, `ew`, `po`
* Hỗ trợ các toán tử logic: `and`, `or`, `not`
* Hỗ trợ nhóm với ngoặc đơn: `(...)`

#### 2. \_query parameter

`_query` cho phép gọi các truy vấn được định nghĩa trước:

```
GET http://example.org/fhir/Patient?_query=findHighRiskPatients
```

Server định nghĩa truy vấn đặc biệt này, giúp giảm độ phức tạp của URI và chuẩn hóa các truy vấn phổ biến.

#### 3. \_elements parameter

`_elements` cho phép bạn chỉ định chính xác các trường nào sẽ được trả về, giúp giảm kích thước phản hồi:

```
GET http://example.org/fhir/Patient?_elements=name,birthDate,gender
```

#### 4. \_list parameter

`_list` là tham số mới trong R5 cho phép tìm kiếm các tài nguyên có trong danh sách cụ thể:

```
GET http://example.org/fhir/Patient?_list=http://example.org/fhir/List/high-risk-patients
```

#### 5. \_contained và \_containedType

R5 cải thiện việc tìm kiếm tài nguyên được chứa (contained resources):

```
GET http://example.org/fhir/MedicationRequest?_contained=true
```

`_containedType` kiểm soát cách tài nguyên contained được trả về:

* `_containedType=container`: Trả về tài nguyên chứa
* `_containedType=contained`: Trả về tài nguyên được chứa

#### 6. search-where extension

R5 hỗ trợ extension `search-where` cho phép tìm kiếm phức tạp hơn:

```json
{
  "url": "http://hl7.org/fhir/StructureDefinition/search-where",
  "valueString": "Patient.name.given contains 'John' and Patient.birthDate > 1970-01-01"
}
```

### Ví dụ thực tế

#### Tìm tất cả bệnh nhân đái tháo đường có lần khám gần đây

```
GET http://example.org/fhir/Patient?_has:Condition:patient:code=E11&_has:Encounter:patient:date=gt2023-01-01&_sort=-_lastUpdated&_count=20
```

#### Tìm tất cả quan sát về huyết áp cao trong tháng trước

```
GET http://example.org/fhir/Observation?code=85354-9&value-quantity=gt140&date=ge2023-02-01&date=lt2023-03-01&_include=Observation:patient
```

#### Sử dụng \_filter trong R5

```
GET http://example.org/fhir/Patient?_filter=gender eq 'male' and birthdate ge '1950' and birthdate le '1960' and address co 'Hà Nội'
```

### Kết luận

Search trong FHIR R5 đã phát triển thành một công cụ mạnh mẽ cho việc truy vấn dữ liệu y tế. Từ các search parameters cơ bản đến các truy vấn phức tạp với \_filter, FHIR R5 cung cấp khả năng tìm kiếm linh hoạt và mạnh mẽ.

Khi triển khai FHIR, việc nắm vững các tính năng tìm kiếm này là rất quan trọng để xây dựng các ứng dụng y tế hiệu quả và có thể mở rộng.

### Tài liệu tham khảo

1. [HL7 FHIR R5 - Search](https://hl7.org/fhir/R5/search.html)
2. [FHIR R5 - SearchParameter Resource](https://hl7.org/fhir/R5/searchparameter.html)
3. [FHIR R5 - Sorting and Paging](https://hl7.org/fhir/R5/search.html#sorting)
4. [FHIR R5 - \_filter Parameter](https://hl7.org/fhir/R5/search_filter.html)
