---
id: c6d7feb0-e441-42e9-a616-d609605bfe0c
title: 'Narrative & Text'
slug: narrative-and-text
description: 'Hôm nay chúng ta sẽ tìm hiểu về một khía cạnh đặc biệt quan trọng nhưng thường bị bỏ qua: Narrative và Text phần hiển thị có thể đọc được của tài nguyên FHIR.Tôi nhận thấy rằng hiểu rõ về narrative không chỉ đơn thuần…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 4
section_title: 'Phần 5: Cấu trúc dữ liệu FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
## Narrative và Text trong FHIR R5: Hiển thị dữ liệu y tế hiệu quả

Hôm nay chúng ta sẽ tìm hiểu về một khía cạnh đặc biệt quan trọng nhưng thường bị bỏ qua: Narrative và Text - phần hiển thị có thể đọc được của tài nguyên FHIR.Tôi nhận thấy rằng hiểu rõ về narrative không chỉ đơn thuần là vấn đề "hiển thị" mà còn là yếu tố then chốt để đảm bảo tính tương thích giữa các hệ thống và khả năng đọc hiểu dữ liệu của con người.

FHIR được thiết kế với hai đối tượng sử dụng chính: hệ thống máy tính và con người. Trong khi cấu trúc dữ liệu được tối ưu cho xử lý máy tính, narrative đảm bảo rằng thông tin vẫn có thể được con người đọc và hiểu, ngay cả khi hệ thống nhận không hiểu hoàn toàn cấu trúc dữ liệu.

### Hiểu về Resource.text và Narrative

Trong FHIR, mỗi tài nguyên (ngoại trừ Bundle và một số tài nguyên đặc biệt khác) đều có thể chứa phần `text` - thành phần hiển thị dạng văn bản có cấu trúc của tài nguyên:

```json
{
  "resourceType": "Patient",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Nguyễn Văn A</b></p><p>Giới tính: Nam</p><p>Ngày sinh: 01-01-1980</p></div>"
  },
  "name": [
    {
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }
  ],
  "gender": "male",
  "birthDate": "1980-01-01"
}
```

Thành phần `text` bao gồm hai phần chính:

1. `status`: Trạng thái của narrative
2. `div`: Nội dung XHTML hiển thị thông tin tài nguyên

### Generated vs. Extensions vs. Additional Narratives

#### 1. Generated Narrative

Generated Narrative là nội dung hiển thị được tạo tự động từ dữ liệu cấu trúc của tài nguyên. Đây là trường hợp phổ biến nhất và được đánh dấu với `status` là `"generated"`.

```json
"text": {
  "status": "generated",
  "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Nội dung được tạo tự động từ dữ liệu</div>"
}
```

Trong trường hợp này, bất kỳ thay đổi nào trong dữ liệu cấu trúc đều dẫn đến việc tái tạo phần narrative để đảm bảo tính nhất quán. Ứng dụng nhận tài nguyên có thể chọn hiển thị narrative này hoặc tạo ra phiên bản mới dựa trên dữ liệu cấu trúc.

#### 2. Extensions trong Narrative

FHIR cho phép mở rộng phần narrative thông qua extensions. Điều này đặc biệt hữu ích khi cần thêm thông tin hiển thị mà không thể được trích xuất trực tiếp từ dữ liệu cấu trúc.

```json
"text": {
  "status": "extensions",
  "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Nội dung có chứa thông tin mở rộng</div>"
}
```

Khi `status` là `"extensions"`, narrative chứa thông tin được tạo từ dữ liệu cấu trúc, kết hợp với dữ liệu từ các extensions. Các hệ thống nhận không hiểu các extensions này không nên tạo lại narrative, vì có thể mất thông tin quan trọng.

#### 3. Additional Narratives

Additional Narratives là nội dung được nhập thủ công, bổ sung thêm vào dữ liệu hiển thị, và được đánh dấu với `status` là `"additional"`.

```json
"text": {
  "status": "additional",
  "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Nội dung có thông tin bổ sung thủ công</div>"
}
```

Narrative này chứa thông tin bổ sung không có trong dữ liệu cấu trúc. Các hệ thống nhận không nên tạo lại narrative này, và cần hiển thị nguyên bản nội dung đã được cung cấp.

#### 4. Empty Narrative

Trong một số trường hợp, narrative có thể được đánh dấu là `"empty"` khi không cần thiết hoặc không phù hợp để hiển thị dữ liệu.

```json
"text": {
  "status": "empty",
  "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"/>"
}
```

Ví dụ, các tài nguyên Binary hoặc các tài nguyên chứa dữ liệu bảng biểu phức tạp không phù hợp để hiển thị dưới dạng text.

### XHTML Requirements trong Narrative

#### Định dạng XHTML Được Hỗ Trợ

Phần `div` trong narrative phải là XHTML hợp lệ và bị giới hạn trong một tập con nghiêm ngặt của XHTML để đảm bảo khả năng hiển thị an toàn trên nhiều nền tảng. FHIR đưa ra những yêu cầu cụ thể sau:

1. **Namespace**: Luôn phải có khai báo namespace `xmlns="http://www.w3.org/1999/xhtml"`
2. **Thẻ được phép**: Chỉ hỗ trợ một tập hợp hạn chế các thẻ HTML
3. **Thuộc tính an toàn**: Chỉ cho phép một số thuộc tính cụ thể
4. **Không có JavaScript**: Không được phép sử dụng mã JavaScript
5. **Không có CSS Inline**: Việc sử dụng CSS phải tuân theo quy tắc nghiêm ngặt

#### Các thẻ XHTML được hỗ trợ trong FHIR R5

```
a, abbr, acronym, b, big, blockquote, br, caption, cite, code, col, colgroup, 
dd, dfn, div, dl, dt, em, h1, h2, h3, h4, h5, h6, hr, i, img, li, ol, p, pre, 
q, samp, small, span, strong, sub, sup, table, tbody, td, tfoot, th, thead, 
tr, tt, ul, var
```

#### Các thuộc tính được phép

```
a: href, name, target
img: src, alt, height, width
table: border, cellpadding, cellspacing
td/th: colspan, rowspan
```

#### Ví dụ về Narrative hợp lệ

```html
<div xmlns="http://www.w3.org/1999/xhtml">
  <p>
    <b>Bệnh nhân:</b> Nguyễn Văn A
  </p>
  <table border="1">
    <tr>
      <th>Ngày</th>
      <th>Chỉ số</th>
      <th>Giá trị</th>
    </tr>
    <tr>
      <td>2023-10-01</td>
      <td>Huyết áp</td>
      <td>120/80 mmHg</td>
    </tr>
  </table>
  <p>
    <a href="https://example.org/guidelines">Hướng dẫn chi tiết</a>
  </p>
</div>
```

#### Những lỗi phổ biến khi tạo Narrative

1.  **Thiếu namespace XML**:

    ```html
    <!-- Sai -->
    <div>Nội dung</div>

    <!-- Đúng -->
    <div xmlns="http://www.w3.org/1999/xhtml">Nội dung</div>
    ```
2.  **Sử dụng thẻ không được hỗ trợ**:

    ```html
    <!-- Sai -->
    <div xmlns="http://www.w3.org/1999/xhtml">
      <button>Click me</button>
    </div>

    <!-- Đúng -->
    <div xmlns="http://www.w3.org/1999/xhtml">
      <a href="#action">Click me</a>
    </div>
    ```
3.  **Sử dụng JavaScript**:

    ```html
    <!-- Sai -->
    <div xmlns="http://www.w3.org/1999/xhtml">
      <a href="javascript:alert('Hello')">Click</a>
    </div>

    <!-- Đúng -->
    <div xmlns="http://www.w3.org/1999/xhtml">
      <a href="https://example.org/action">Click</a>
    </div>
    ```
4.  **Inline CSS không được phép**:

    ```html
    <!-- Sai -->
    <div xmlns="http://www.w3.org/1999/xhtml" style="color: red;">
      Nội dung
    </div>

    <!-- Đúng -->
    <div xmlns="http://www.w3.org/1999/xhtml">
      <span>Nội dung</span>
    </div>
    ```

#### Kỹ thuật tạo Narrative hiệu quả

Để tạo Narrative chất lượng cao, cần cân nhắc:

1. **Bố cục rõ ràng**: Sử dụng tiêu đề, đoạn văn và bảng một cách hợp lý
2. **Thông tin quan trọng đầu tiên**: Đưa thông tin quan trọng nhất lên trên
3. **Sử dụng định dạng phù hợp**: Bold cho tiêu đề, bảng cho dữ liệu có cấu trúc
4. **Tính nhất quán**: Duy trì phong cách nhất quán giữa các tài nguyên

Ví dụ về narrative tốt cho tài nguyên Observation về huyết áp:

```html
<div xmlns="http://www.w3.org/1999/xhtml">
  <p><b>Huyết áp</b></p>
  <p>Đo ngày 01-10-2023, 10:30</p>
  <table>
    <tr>
      <td>Tâm thu:</td>
      <td>120 mmHg</td>
      <td>Bình thường</td>
    </tr>
    <tr>
      <td>Tâm trương:</td>
      <td>80 mmHg</td>
      <td>Bình thường</td>
    </tr>
  </table>
  <p>Đo ở tay phải, tư thế ngồi, sau 5 phút nghỉ ngơi.</p>
</div>
```

### Sử dụng \_narrative param trong Queries

FHIR R5 giới thiệu tham số `_narrative` trong các truy vấn để kiểm soát việc trả về phần narrative trong kết quả. Điều này đặc biệt hữu ích để tối ưu hiệu suất khi không cần hiển thị dữ liệu cho người dùng.

#### Các giá trị của tham số \_narrative

* **\_narrative=true**: Trả về tài nguyên với đầy đủ narrative
* **\_narrative=false**: Trả về tài nguyên mà không có narrative
* **\_narrative=only**: Chỉ trả về phần narrative của tài nguyên

#### Ví dụ về queries với \_narrative

1.  **Truy vấn không bao gồm narrative**:

    ```
    GET [base]/Patient?_narrative=false
    ```

    Kết quả sẽ không bao gồm phần `text` trong các tài nguyên Patient, giúp giảm kích thước dữ liệu truyền tải.
2.  **Chỉ lấy phần narrative**:

    ```
    GET [base]/Observation/blood-pressure?_narrative=only
    ```

    Kết quả chỉ bao gồm phần hiển thị, hữu ích khi cần hiển thị nhanh thông tin cho người dùng.
3.  **Kết hợp với các tham số khác**:

    ```
    GET [base]/Condition?patient=123&clinical-status=active&_narrative=true
    ```

    Lấy tất cả các bệnh lý đang hoạt động của bệnh nhân, bao gồm cả narrative để hiển thị.

#### Tối ưu hóa hiệu suất với \_narrative

Việc sử dụng tham số `_narrative` có thể giúp tối ưu hóa hiệu suất đáng kể:

* **Giảm kích thước dữ liệu**: Narrative thường chiếm một phần đáng kể kích thước của tài nguyên
* **Giảm tải xử lý**: Máy chủ không cần tạo narrative cho các truy vấn hệ thống
* **Tối ưu cho di động**: Đặc biệt hữu ích cho ứng dụng di động với băng thông hạn chế

**Ví dụ thực tế**

Giả sử một ứng dụng di động cần cập nhật danh sách thuốc của bệnh nhân. Thay vì:

```
GET [base]/MedicationRequest?patient=123&status=active
```

Chúng ta có thể sử dụng:

```
GET [base]/MedicationRequest?patient=123&status=active&_narrative=false
```

Kết quả truy vấn có thể giảm tới 40-50% kích thước, giúp tăng tốc độ tải và tiết kiệm dữ liệu di động.

### Cải tiến Narrative trong FHIR R5

FHIR R5 mang đến một số cải tiến đáng kể cho Narrative so với các phiên bản trước:

#### 1. Hỗ trợ đa ngôn ngữ tốt hơn

R5 cải thiện khả năng hỗ trợ đa ngôn ngữ trong narrative thông qua việc sử dụng extension `http://hl7.org/fhir/StructureDefinition/resource-narrative-lang` để chỉ định ngôn ngữ của narrative.

```json
"text": {
  "status": "generated",
  "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Nội dung tiếng Việt</div>",
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/resource-narrative-lang",
      "valueCode": "vi-VN"
    }
  ]
}
```

Điều này cho phép một tài nguyên có thể hiển thị đúng ngôn ngữ phù hợp với người dùng, cải thiện trải nghiệm người dùng trong môi trường đa ngôn ngữ.

#### 2. Narrative có cấu trúc rõ ràng hơn

R5 khuyến khích sử dụng cấu trúc XHTML rõ ràng hơn, với các thẻ ngữ nghĩa để cải thiện khả năng đọc hiểu của máy:

```html
<div xmlns="http://www.w3.org/1999/xhtml">
  <h2>Kết quả xét nghiệm: Công thức máu</h2>
  <table>
    <caption>Chỉ số huyết học - 01/10/2023</caption>
    <thead>
      <tr>
        <th>Chỉ số</th>
        <th>Giá trị</th>
        <th>Đơn vị</th>
        <th>Bình thường</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hồng cầu</td>
        <td>4.5</td>
        <td>10^12/L</td>
        <td>4.2-5.4</td>
      </tr>
      <tr>
        <td>Bạch cầu</td>
        <td>7.2</td>
        <td>10^9/L</td>
        <td>4.0-10.0</td>
      </tr>
    </tbody>
  </table>
</div>
```

#### 3. Hỗ trợ tốt hơn cho tham số \_narrative trong queries

Như đã đề cập ở trên, R5 chuẩn hóa việc sử dụng tham số `_narrative` trong queries, cho phép kiểm soát chi tiết hơn việc trả về narrative.

#### 4. Cải thiện an toàn và xác thực

R5 cũng cải thiện các quy trình xác thực narrative, cung cấp thông báo lỗi rõ ràng hơn khi narrative không tuân thủ các quy tắc XHTML của FHIR. Điều này giúp phát hiện và khắc phục các vấn đề với narrative sớm hơn trong quá trình phát triển.

#### 5. Hướng dẫn tốt hơn về việc tạo narrative

FHIR R5 cung cấp hướng dẫn chi tiết hơn về cách tạo narrative có ý nghĩa, khuyến khích các thực hành tốt như:

* Sử dụng cấu trúc ngữ nghĩa phù hợp
* Đảm bảo trình bày thông tin quan trọng nhất trước
* Tối ưu hóa cho khả năng đọc của con người
* Xử lý các trường hợp đặc biệt (như dữ liệu bị thiếu hoặc ẩn danh)

### Thực hành tốt nhất cho Narrative trong FHIR

#### 1. Luôn cung cấp narrative chất lượng cao

Mặc dù narrative dường như là tùy chọn trong một số trường hợp, việc cung cấp narrative chất lượng cao sẽ tăng cường khả năng tương tác giữa các hệ thống và cải thiện trải nghiệm người dùng.

#### 2. Tạo narrative tự động từ dữ liệu cấu trúc

Khi có thể, nên tạo narrative tự động từ dữ liệu cấu trúc để đảm bảo tính nhất quán. Nhiều thư viện FHIR cung cấp khả năng tạo narrative tự động.

#### 3. Xác thực narrative

Luôn xác thực narrative để đảm bảo tuân thủ các yêu cầu XHTML của FHIR. Các lỗi trong narrative có thể dẫn đến hiển thị không đúng hoặc thậm chí là lỗi bảo mật.

#### 4. Cân nhắc người dùng cuối

Thiết kế narrative với người dùng cuối trong tâm trí. Narrative nên cung cấp tổng quan rõ ràng và dễ hiểu về nội dung của tài nguyên.

#### 5. Tối ưu hóa cho các trường hợp sử dụng

Sử dụng tham số `_narrative` để tối ưu hóa hiệu suất dựa trên trường hợp sử dụng. Không phải mọi truy vấn đều cần narrative.

#### 6. Quốc tế hóa

Sử dụng extension ngôn ngữ để hỗ trợ đa ngôn ngữ trong narrative, đặc biệt trong môi trường y tế đa ngôn ngữ.

### Ví dụ thực tế về Narrative trong các tài nguyên phổ biến

#### 1. Patient Narrative

```html
<div xmlns="http://www.w3.org/1999/xhtml">
  <p><b>Nguyễn Văn A</b> (MRN: 12345)</p>
  <p>Nam, 43 tuổi (01/01/1980)</p>
  <p>Địa chỉ: 123 Đường Lê Lợi, Quận 1, TP.HCM</p>
  <p>SĐT: 0903 123 456</p>
  <p>Email: nguyen.van.a@example.com</p>
</div>
```

#### 2. Observation Narrative

```html
<div xmlns="http://www.w3.org/1999/xhtml">
  <p><b>Glucose máu lúc đói</b></p>
  <p>Ngày xét nghiệm: 15/10/2023 07:30</p>
  <p>Kết quả: <b>5.8 mmol/L</b> (Bình thường: 3.9-5.5 mmol/L)</p>
  <p>Trạng thái: <span style="color: orange">Cao nhẹ</span></p>
  <p>Bác sĩ chỉ định: Nguyễn Văn B</p>
</div>
```

#### 3. MedicationRequest Narrative

```html
<div xmlns="http://www.w3.org/1999/xhtml">
  <h3>Đơn thuốc</h3>
  <p><b>Metformin 500mg</b></p>
  <p>Uống 1 viên, ngày 2 lần, sau bữa ăn sáng và tối</p>
  <p>Số lượng: 60 viên (dùng trong 30 ngày)</p>
  <p>Ngày kê: 15/10/2023</p>
  <p>Bác sĩ: Trần Thị C</p>
  <p>Lưu ý: Theo dõi tác dụng phụ tiêu hóa</p>
</div>
```

#### 4. AllergyIntolerance Narrative

```html
<div xmlns="http://www.w3.org/1999/xhtml">
  <p><b>Dị ứng: Penicillin</b></p>
  <p>Mức độ: <span style="color: red">Nặng</span></p>
  <p>Biểu hiện: Phát ban, khó thở, phù nề</p>
  <p>Ghi nhận lần đầu: 05/06/2015</p>
  <p>Trạng thái: Đang hoạt động</p>
</div>
```

#### 5. Condition Narrative

```html
<div xmlns="http://www.w3.org/1999/xhtml">
  <p><b>Chẩn đoán: Đái tháo đường type 2</b></p>
  <p>Ngày chẩn đoán: 10/09/2022</p>
  <p>Trạng thái: Đang hoạt động</p>
  <p>Mức độ: Trung bình</p>
  <p>Bác sĩ chẩn đoán: Lê Văn D</p>
</div>
```

### Kết luận

Narrative trong FHIR không chỉ là phần "hiển thị" đơn thuần mà đóng vai trò quan trọng trong việc đảm bảo tính tương tác giữa các hệ thống và khả năng đọc hiểu của con người. FHIR R5 mang đến nhiều cải tiến đáng kể cho narrative, giúp tăng cường khả năng hiển thị dữ liệu y tế một cách hiệu quả và an toàn.

Là một Solution Architect, việc hiểu và áp dụng đúng các khía cạnh của narrative sẽ giúp bạn thiết kế các hệ thống FHIR không chỉ hiệu quả về mặt kỹ thuật mà còn thân thiện với người dùng. Hãy coi narrative như một phần không thể thiếu của mỗi tài nguyên FHIR, và đầu tư thời gian để tạo ra narrative chất lượng cao.

Trong bài viết tiếp theo của series, chúng ta sẽ tìm hiểu về REST API trong FHIR R5 và các tính năng mới giúp tương tác với dữ liệu y tế hiệu quả hơn.
