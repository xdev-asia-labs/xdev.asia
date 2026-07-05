---
id: 07215244-67b9-4384-b2b0-5a174c4c8ebf
title: 'Implementation Guides in R5'
slug: implementation-guides-in-r5
description: 'Xin chào các bạn! Hôm nay chúng ta sẽ cùng khám phá về Implementation Guides (Hướng dẫn triển khai) trong FHIR R5. Implementation Guides (IGs) là tài liệu thiết yếu giúp đảm bảo các hệ thống y tế có thể giao tiếp và…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 5
section_title: 'Phần 7: Profiling & Validation trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Xin chào các bạn! Hôm nay chúng ta sẽ cùng khám phá về Implementation Guides (Hướng dẫn triển khai) trong FHIR R5. Implementation Guides (IGs) là tài liệu thiết yếu giúp đảm bảo các hệ thống y tế có thể giao tiếp và hoạt động hiệu quả với nhau. Trong bài viết này, tôi sẽ chia sẻ kiến thức chi tiết về cách tạo, sử dụng và chia sẻ IGs trong phiên bản mới nhất của FHIR.

### 1. IG Publisher với R5 support

#### IG Publisher là gì?

IG Publisher là công cụ chính thức từ HL7 FHIR, giúp tạo ra các hướng dẫn triển khai FHIR dưới dạng trang web có định dạng chuẩn. Công cụ này cực kỳ mạnh mẽ, biến các đặc tả kỹ thuật thành tài liệu trực quan và dễ sử dụng.

#### Cập nhật cho FHIR R5

Phiên bản mới của IG Publisher đã được cập nhật đầy đủ để hỗ trợ FHIR R5 với nhiều cải tiến:

1. **Hỗ trợ đầy đủ các tài nguyên R5**: Tạo tài liệu cho tất cả tài nguyên mới và đã cập nhật trong R5
2. **Công cụ kiểm tra hỗ trợ R5**: Xác thực nội dung theo chuẩn FHIR R5
3. **Cải thiện giao diện**: Bổ sung các tính năng hiển thị mới trong R5
4. **Tương thích đa phiên bản**: Hỗ trợ cả nội dung R4 và R4B trong IG R5

#### Cài đặt và sử dụng IG Publisher

Để bắt đầu sử dụng IG Publisher cho FHIR R5, bạn cần:

1. **Cài đặt các yêu cầu tiên quyết**:
   * Java (phiên bản 8 trở lên)
   * Ruby (tùy chọn, cho template processing)
   * Jekyll (tùy chọn, cho template processing)
2.  **Tải IG Publisher**:

    ```bash
    curl -L https://github.com/HL7/fhir-ig-publisher/releases/latest/download/publisher.jar -o publisher.jar
    ```
3.  **Kiểm tra phiên bản**:

    ```bash
    java -jar publisher.jar -version
    ```

#### Ví dụ đơn giản

Để khởi tạo một IG mới cho FHIR R5:

```bash
# Tạo cấu trúc thư mục cho IG mới
java -jar publisher.jar -ig ig.ini

# Biên dịch IG
java -jar publisher.jar -ig ig.ini
```

Tệp `ig.ini` chứa thông tin cấu hình cơ bản:

```ini
[IG]
ig = input/myig.xml
template = fhir.base.template#current
fhirspec = http://hl7.org/fhir/R5/
```

### 2. Creating R5-based IGs

#### Cấu trúc của một Implementation Guide

Một IG thường bao gồm các thành phần sau:

1. **Tài nguyên ImplementationGuide**: Tệp định nghĩa chính của IG
2. **Profiles**: Các tùy chỉnh cho tài nguyên FHIR
3. **Extensions**: Các phần mở rộng cho tài nguyên
4. **ValueSets & CodeSystems**: Bộ mã và hệ thống mã
5. **ConceptMaps**: Ánh xạ giữa các hệ thống mã
6. **Examples**: Ví dụ về tài nguyên tuân thủ
7. **Pages**: Trang Markdown giải thích IG

#### Tạo IG cho FHIR R5

**Bước 1: Thiết lập dự án IG**

```bash
# Tạo cấu trúc thư mục ban đầu
mkdir -p my-ig/input/resources
mkdir -p my-ig/input/examples
mkdir -p my-ig/input/profiles
mkdir -p my-ig/input/vocabulary
mkdir -p my-ig/input/pagecontent
```

**Bước 2: Tạo tệp định nghĩa IG**

Tạo tệp `input/myig.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ImplementationGuide xmlns="http://hl7.org/fhir">
  <id value="example.fhir.r5-guide"/>
  <url value="http://example.org/fhir/ImplementationGuide/example-r5-guide"/>
  <version value="0.1.0"/>
  <name value="ExampleR5Guide"/>
  <title value="Hướng dẫn ví dụ FHIR R5"/>
  <status value="draft"/>
  <date value="2023-06-15"/>
  <publisher value="Example Organization"/>
  <contact>
    <name value="Example"/>
    <telecom>
      <system value="url"/>
      <value value="http://example.org"/>
    </telecom>
  </contact>
  <description value="Đây là hướng dẫn triển khai ví dụ cho FHIR R5"/>
  <packageId value="example.fhir.r5-guide"/>
  <license value="CC0-1.0"/>
  <fhirVersion value="5.0.0"/>
  <definition>
    <resource>
      <reference>
        <reference value="StructureDefinition/vn-patient"/>
      </reference>
      <name value="Vietnam Patient Profile"/>
      <description value="Hồ sơ bệnh nhân FHIR R5 cho Việt Nam"/>
    </resource>
    <page>
      <nameUrl value="toc.html"/>
      <title value="Mục lục"/>
      <generation value="html"/>
      <page>
        <nameUrl value="index.html"/>
        <title value="Trang chủ"/>
        <generation value="markdown"/>
      </page>
      <page>
        <nameUrl value="profiles.html"/>
        <title value="Profiles"/>
        <generation value="markdown"/>
      </page>
    </page>
  </definition>
</ImplementationGuide>
```

**Bước 3: Tạo trang nội dung**

Tạo tệp `input/pagecontent/index.md`:

```markdown
# Hướng dẫn triển khai FHIR R5 ví dụ

Chào mừng đến với hướng dẫn triển khai FHIR R5!

## Mục đích

Hướng dẫn này nhằm minh họa cách tạo và xuất bản IG trên FHIR R5.

## Phạm vi

Hướng dẫn bao gồm:
- Profile bệnh nhân Việt Nam
- Các ví dụ minh họa
- Hướng dẫn sử dụng
```

**Bước 4: Tạo Profile**

Tạo tệp `input/profiles/StructureDefinition-vn-patient.json`:

```json
{
  "resourceType": "StructureDefinition",
  "id": "vn-patient",
  "url": "http://example.org/fhir/StructureDefinition/vn-patient",
  "name": "VNPatient",
  "title": "Vietnam Patient Profile",
  "status": "draft",
  "description": "Hồ sơ bệnh nhân Việt Nam",
  "fhirVersion": "5.0.0",
  "kind": "resource",
  "abstract": false,
  "type": "Patient",
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Patient",
  "derivation": "constraint",
  "differential": {
    "element": [
      {
        "id": "Patient.identifier",
        "path": "Patient.identifier",
        "slicing": {
          "discriminator": [
            {
              "type": "value",
              "path": "system"
            }
          ],
          "ordered": false,
          "rules": "open"
        },
        "min": 1
      },
      {
        "id": "Patient.identifier:cmnd",
        "path": "Patient.identifier",
        "sliceName": "cmnd",
        "min": 0,
        "max": "1"
      },
      {
        "id": "Patient.identifier:cmnd.system",
        "path": "Patient.identifier.system",
        "min": 1,
        "fixedUri": "http://example.org/fhir/sid/cmnd"
      },
      {
        "id": "Patient.name",
        "path": "Patient.name",
        "min": 1
      }
    ]
  }
}
```

**Bước 5: Tạo ví dụ**

Tạo tệp `input/examples/Patient-example.json`:

```json
{
  "resourceType": "Patient",
  "id": "vn-patient-example",
  "meta": {
    "profile": [
      "http://example.org/fhir/StructureDefinition/vn-patient"
    ]
  },
  "identifier": [
    {
      "system": "http://example.org/fhir/sid/cmnd",
      "value": "123456789"
    }
  ],
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

**Bước 6: Tạo tệp cấu hình**

Tạo tệp `ig.ini`:

```ini
[IG]
ig = input/myig.xml
template = fhir.base.template#current
fhirspec = http://hl7.org/fhir/R5/
```

**Bước 7: Biên dịch IG**

```bash
java -jar publisher.jar -ig ig.ini
```

Khi quá trình biên dịch hoàn tất, IG của bạn sẽ được tạo ra trong thư mục `output`.

#### Sử dụng FHIR Shorthand (FSH)

FHIR Shorthand là ngôn ngữ giúp viết tài nguyên FHIR dễ dàng hơn. Với SUSHI (công cụ biên dịch FSH), bạn có thể viết IG nhanh hơn.

**Ví dụ:**

Thay vì viết JSON dài dòng, bạn có thể định nghĩa profile như sau:

```fsh
Profile: VNPatient
Parent: Patient
Id: vn-patient
Title: "Vietnam Patient Profile"
Description: "Hồ sơ bệnh nhân Việt Nam"

* identifier 1..* MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open

* identifier contains
    cmnd 0..1

* identifier[cmnd].system = "http://example.org/fhir/sid/cmnd" (exactly)
* name 1..* MS
```

### 3. Versioning và compatibility

#### Quản lý phiên bản trong IG

Quản lý phiên bản trong IG rất quan trọng để đảm bảo tương thích và cập nhật hiệu quả.

**Các quy ước đặt tên phiên bản**

Nên sử dụng Semantic Versioning (SemVer) với cấu trúc X.Y.Z:

* **X (Major)**: Thay đổi làm phá vỡ tương thích
* **Y (Minor)**: Thêm tính năng mới, tương thích ngược
* **Z (Patch)**: Sửa lỗi, không thay đổi tính năng

**Khai báo phiên bản trong IG**

```xml
<ImplementationGuide>
  <url value="http://example.org/fhir/ImplementationGuide/example-r5-guide"/>
  <version value="1.0.0"/>
  ...
</ImplementationGuide>
```

#### Đảm bảo tương thích FHIR R5

**Tương thích với các phiên bản FHIR khác**

FHIR R5 có nhiều thay đổi so với R4. Để đảm bảo tương thích:

1. **Sử dụng mappings**: Định nghĩa cách ánh xạ giữa R4 và R5
2. **Cung cấp biến đổi**: Viết hướng dẫn chuyển đổi dữ liệu
3. **Đánh dấu khác biệt**: Làm rõ những thay đổi trong các phiên bản

**Ví dụ mapping R4-to-R5**

```xml
<StructureMap>
  <id value="patient-r4-to-r5"/>
  <url value="http://example.org/fhir/StructureMap/patient-r4-to-r5"/>
  <name value="PatientR4ToR5"/>
  <title value="Patient R4 to R5 Mapping"/>
  <status value="draft"/>
  <structure>
    <url value="http://hl7.org/fhir/4.0/StructureDefinition/Patient"/>
    <mode value="source"/>
  </structure>
  <structure>
    <url value="http://hl7.org/fhir/5.0/StructureDefinition/Patient"/>
    <mode value="target"/>
  </structure>
  <group>
    <input>
      <name value="source"/>
      <type value="Patient"/>
    </input>
    <input>
      <name value="target"/>
      <type value="Patient"/>
      <mode value="target"/>
    </input>
    <rule>
      <name value="Rule1"/>
      <source>
        <context value="source"/>
        <element value="identifier"/>
      </source>
      <target>
        <context value="target"/>
        <element value="identifier"/>
      </target>
    </rule>
    <!-- Thêm các rule khác... -->
  </group>
</StructureMap>
```

#### Sự kiện thay đổi phiên bản

Khi phát hành phiên bản mới, nên làm rõ:

1. **Nhật ký thay đổi**: Liệt kê tất cả các thay đổi
2. **Hướng dẫn nâng cấp**: Cách chuyển từ phiên bản cũ
3. **Thời hạn hỗ trợ**: Khi nào phiên bản cũ hết hạn

**Ví dụ nhật ký thay đổi**

```markdown
# Nhật ký thay đổi

## Phiên bản 1.1.0 (2023-06-15)

### Thêm mới
- Bổ sung Extension cho địa chỉ chi tiết
- Thêm Profile cho kết quả xét nghiệm

### Thay đổi
- Cập nhật ValueSet mã giới tính
- Bổ sung ví dụ mới

## Phiên bản 1.0.0 (2023-01-10)
- Phát hành lần đầu
```

### 4. Publishing và sharing IGs

#### Phương pháp xuất bản IG

Có nhiều cách để xuất bản và chia sẻ IG của bạn:

**1. Xuất bản trên trang web tĩnh**

Đơn giản nhất là đưa nội dung của thư mục `output` lên một máy chủ web tĩnh như GitHub Pages:

```bash
# Đưa IG lên GitHub Pages
git add output
git commit -m "Publish IG version 1.0.0"
git push origin main
```

**2. Xuất bản thông qua Simplifier.net**

Simplifier.net là nền tảng chuyên dụng cho IG FHIR:

1. Tạo tài khoản trên [Simplifier.net](https://simplifier.net/)
2. Tạo dự án mới
3. Tải lên tài nguyên từ IG của bạn
4. Xuất bản IG từ trang quản lý dự án

**3. Xuất bản qua HL7 FHIR Registry**

Nếu IG của bạn có giá trị cho cộng đồng rộng lớn, hãy cân nhắc xuất bản qua HL7:

1. Liên hệ với ủy ban HL7 liên quan
2. Trải qua quá trình đánh giá và xem xét
3. Được xuất bản trong danh sách IG chính thức

#### Đăng ký tên miền và package ID

Mỗi IG nên có package ID duy nhất. Quy ước đặt tên:

```
organization.category.name
```

Ví dụ:

* `hl7.fhir.us.core` (US Core IG)
* `example.fhir.vn.core` (Vietnam Core IG)

#### Tạo Package NPM

IG Publisher có thể tạo package NPM chứa IG của bạn:

```bash
java -jar publisher.jar -ig ig.ini -publish -package
```

Tệp .tgz được tạo ra có thể chia sẻ và cài đặt:

```bash
npm install example.fhir.r5-guide-0.1.0.tgz
```

#### Ví dụ quy trình xuất bản hoàn chỉnh

```bash
# 1. Cập nhật phiên bản trong IG definition
# 2. Biên dịch IG
java -jar publisher.jar -ig ig.ini

# 3. Tạo package
java -jar publisher.jar -ig ig.ini -publish -package

# 4. Đưa lên GitHub
git add .
git commit -m "Release version 1.0.0"
git tag v1.0.0
git push origin main --tags

# 5. Xuất bản lên GitHub Pages
git subtree push --prefix output origin gh-pages
```

### 5. Cộng đồng IGs cho R5

#### Những IG R5 nổi bật

Mặc dù FHIR R5 còn tương đối mới, đã có một số IG đáng chú ý:

1. **FHIR R5 Core Implementation Guide**
   * URL: [http://hl7.org/fhir/R5/implementationguide.html](http://hl7.org/fhir/R5/implementationguide.html)
   * Mô tả: Tài liệu chính thức giải thích việc sử dụng tất cả tài nguyên R5
2. **International Patient Summary (IPS) R5**
   * Dự kiến phát hành
   * Tiêu chuẩn hóa bản tóm tắt thông tin bệnh nhân quốc tế
3. **SMART App Launch Framework for R5**
   * Dự kiến cập nhật để hỗ trợ R5
   * Tiêu chuẩn để ứng dụng y tế tích hợp với hệ thống FHIR

#### Sự đóng góp cho cộng đồng

Cách tham gia vào cộng đồng FHIR IG:

1. **Tham gia nhóm HL7**:
   * [http://www.hl7.org/Special/committees/index.cfm](http://www.hl7.org/Special/committees/index.cfm)
   * Tìm nhóm làm việc phù hợp với lĩnh vực của bạn
2. **Chat FHIR**:
   * [https://chat.fhir.org/](https://chat.fhir.org/)
   * Tham gia thảo luận với cộng đồng FHIR
3. **HL7 FHIR Confluence**:
   * [https://confluence.hl7.org/display/FHIR/](https://confluence.hl7.org/display/FHIR/)
   * Đóng góp vào quá trình phát triển tiêu chuẩn

#### Tạo IG quốc gia

Nhiều quốc gia đang phát triển IG riêng cho R5. Dưới đây là hướng dẫn cho việc tạo IG quốc gia:

1. **Thành lập nhóm làm việc**: Tập hợp các bên liên quan
2. **Xác định phạm vi**: Tài nguyên ưu tiên, tình huống sử dụng
3. **Nghiên cứu luật và quy định**: Đảm bảo tuân thủ luật pháp địa phương
4. **Xây dựng lộ trình**: Kế hoạch phát triển và triển khai
5. **Tham khảo IG quốc tế**: Học hỏi từ các nước đi trước

#### Ví dụ khung IG quốc gia

```xml
<ImplementationGuide>
  <id value="example-vn-core"/>
  <url value="http://example.org/fhir/ImplementationGuide/vn-core"/>
  <version value="0.1.0"/>
  <name value="VNCore"/>
  <title value="Vietnam Core Implementation Guide"/>
  <status value="draft"/>
  <experimental value="true"/>
  <date value="2023-06-15"/>
  <publisher value="Example Vietnam Health IT Organization"/>
  <description value="Hướng dẫn triển khai cốt lõi cho FHIR tại Việt Nam"/>
  <packageId value="example.fhir.vn.core"/>
  <fhirVersion value="5.0.0"/>
  <dependsOn>
    <uri value="http://hl7.org/fhir/ImplementationGuide/fhir"/>
    <packageId value="hl7.fhir.r5.core"/>
    <version value="5.0.0"/>
  </dependsOn>
  <definition>
    <!-- Định nghĩa các tài nguyên của IG -->
  </definition>
</ImplementationGuide>
```

### Kết luận

Implementation Guides là trái tim của việc triển khai FHIR trong thực tế. Với FHIR R5, IGs trở nên mạnh mẽ hơn, linh hoạt hơn, và dễ phát triển hơn. Bằng cách tuân theo các thực hành tốt nhất về tạo, quản lý phiên bản, xuất bản và chia sẻ như đã trình bày trong bài viết này, bạn có thể tạo ra IGs hiệu quả giúp thúc đẩy khả năng tương tác trong chăm sóc sức khỏe.

Bắt đầu với một phạm vi rõ ràng, tận dụng các công cụ như IG Publisher và FHIR Shorthand, và tích cực tham gia vào cộng đồng FHIR. Với những nỗ lực này, bạn không chỉ tạo ra hướng dẫn cho tổ chức của mình mà còn đóng góp vào hệ sinh thái FHIR toàn cầu.
