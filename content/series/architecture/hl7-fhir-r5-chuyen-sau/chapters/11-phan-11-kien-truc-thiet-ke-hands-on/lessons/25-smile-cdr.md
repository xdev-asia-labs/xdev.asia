---
id: b7e4784b-4de8-47c5-bef8-0aa5573603e8
title: 'Smile CDR'
slug: smile-cdr
description: 'Smile CDR (Clinical Data Repository) là một nền tảng FHIR mã nguồn mở được phát triển bởi Smile Digital Health (trước đây là HAPI FHIR). Đây là một triển khai đầy đủ tính năng của tiêu chuẩn HL7 FHIR, cung cấp giải pháp…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 25
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Smile CDR (Clinical Data Repository) là một nền tảng FHIR mã nguồn mở được phát triển bởi Smile Digital Health (trước đây là HAPI FHIR). Đây là một triển khai đầy đủ tính năng của tiêu chuẩn HL7 FHIR, cung cấp giải pháp toàn diện cho việc lưu trữ, quản lý và trao đổi dữ liệu y tế.

### Tính năng chính của Smile CDR

1. **Lưu trữ dữ liệu FHIR toàn diện**
   * Hỗ trợ tất cả các loại tài nguyên FHIR
   * Lưu trữ dữ liệu có cấu trúc và không có cấu trúc
   * Khả năng mở rộng để xử lý khối lượng dữ liệu lớn
2. **Triển khai RESTful API đầy đủ**
   * Tuân thủ đầy đủ đặc tả REST của FHIR
   * Hỗ trợ tất cả các tương tác FHIR chuẩn (read, search, create, update, delete)
   * Hỗ trợ nhiều phiên bản FHIR (DSTU2, DSTU3, R4, R5)
3. **Bảo mật mạnh mẽ**
   * Xác thực và ủy quyền dựa trên OAuth 2.0/OpenID Connect
   * Kiểm soát truy cập dựa trên vai trò (RBAC)
   * Kiểm toán và ghi nhật ký đầy đủ
   * Bảo mật dữ liệu ở mức tài nguyên và trường
4. **Khả năng tích hợp cao**
   * Kết nối với các hệ thống EHR và y tế khác
   * Hỗ trợ HL7 v2, CDA, và các định dạng cũ khác
   * APIs để tùy chỉnh và mở rộng
5. **Công cụ quản trị web**
   * Giao diện người dùng trực quan để quản lý hệ thống
   * Theo dõi hiệu suất và sức khỏe hệ thống
   * Quản lý người dùng và quyền

### Lợi ích của Smile CDR

* **Mã nguồn mở**: Smile CDR cung cấp phiên bản cộng đồng miễn phí, cho phép kiểm tra mã nguồn và tùy chỉnh theo nhu cầu
* **Hiệu suất cao**: Được tối ưu hóa để xử lý khối lượng lớn dữ liệu y tế và truy vấn phức tạp
* **Tuân thủ tiêu chuẩn**: Tuân thủ nghiêm ngặt các đặc tả FHIR, đảm bảo khả năng tương tác
* **Hỗ trợ doanh nghiệp**: Phiên bản thương mại cung cấp hỗ trợ kỹ thuật và các tính năng bổ sung

### Kiến trúc và thành phần

Smile CDR được xây dựng theo kiến trúc module, bao gồm các thành phần chính:

1. **Mô-đun lưu trữ FHIR**: Xử lý lưu trữ và truy xuất tài nguyên FHIR
2. **Máy chủ FHIR RESTful**: Xử lý yêu cầu API FHIR và phản hồi
3. **Hệ thống xác thực và ủy quyền**: Quản lý bảo mật và kiểm soát truy cập
4. **Bộ máy tìm kiếm và truy vấn**: Tối ưu hóa các truy vấn FHIR phức tạp
5. **Mô-đun đăng ký và thông báo**: Quản lý subscription và thông báo sự kiện
6. **Bộ quản lý tên miền**: Quản lý thuật ngữ và bộ mã

### Triển khai

Smile CDR có thể được triển khai theo nhiều cách:

* **Ứng dụng độc lập**: Chạy trực tiếp trên máy chủ
* **Docker Container**: Dễ dàng triển khai và mở rộng quy mô
* **Dịch vụ đám mây**: Hỗ trợ AWS, Azure, và Google Cloud
* **Kubernetes**: Cho môi trường container hóa và có khả năng mở rộng cao

### Phiên bản và giấy phép

Smile CDR có hai phiên bản chính:

1. **Phiên bản cộng đồng (mã nguồn mở)**: Miễn phí sử dụng, được cấp phép theo MPL 2.0 (Mozilla Public License)
2. **Phiên bản doanh nghiệp**: Cung cấp các tính năng bổ sung và hỗ trợ kỹ thuật, yêu cầu giấy phép thương mại

### Trường hợp sử dụng điển hình

* **Cổng trao đổi dữ liệu y tế**: Tạo điểm kết nối trung tâm cho các hệ thống y tế khác nhau
* **Kho dữ liệu nghiên cứu lâm sàng**: Lưu trữ và quản lý dữ liệu nghiên cứu theo tiêu chuẩn
* **Nền tảng chăm sóc dựa trên giá trị**: Hỗ trợ tích hợp dữ liệu cho các sáng kiến chăm sóc dựa trên giá trị
* **Ứng dụng y tế di động và telehealth**: Cung cấp backend FHIR cho ứng dụng di động và telehealth
* **Hồ sơ sức khỏe cá nhân**: Lưu trữ và quản lý dữ liệu sức khỏe cá nhân

### Kết luận

Smile CDR là một giải pháp FHIR mã nguồn mở mạnh mẽ và linh hoạt, phù hợp cho các tổ chức y tế muốn triển khai một máy chủ FHIR đầy đủ tính năng. Với khả năng bảo mật, hiệu suất cao và tuân thủ tiêu chuẩn, Smile CDR cung cấp nền tảng vững chắc cho việc trao đổi dữ liệu y tế theo tiêu chuẩn FHIR. Cho dù bạn đang xây dựng một ứng dụng mới hoặc tích hợp FHIR vào hệ thống hiện có, Smile CDR cung cấp các công cụ cần thiết để đáp ứng yêu cầu trao đổi dữ liệu y tế hiện đại.
