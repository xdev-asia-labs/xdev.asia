---
id: 019f5a01-d000-7001-his0-000000000001
title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
slug: his
description: >-
  Series chuyên sâu về Hospital Information System (HIS): kiến trúc tổng thể,
  các phân hệ chức năng (EMR, LIS, RIS, PACS, Pharmacy, Billing), tích hợp
  HL7/FHIR, quy trình triển khai cho bệnh viện và cơ sở y tế. Có ví dụ thực tế
  từ vận hành tại Việt Nam và đối chiếu với chuẩn quốc tế.
featured_image: null
level: intermediate
duration_hours: 62
lesson_count: 49
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-05-12T08:00:00.000000Z'
created_at: '2026-05-12T08:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019f5a01-c000-7001-doma-000000000001
  name: Lĩnh vực
  slug: domain
tags:
  - name: Healthcare
    slug: healthcare
  - name: HIS
    slug: his
  - name: HL7 FHIR
    slug: hl7-fhir
  - name: EMR
    slug: emr
---

# Hospital Information System (HIS)

Series tổng hợp các bài viết theo **lĩnh vực y tế** — tập trung vào **nghiệp vụ vận hành** của bệnh viện: từ tiếp nhận, khám chữa bệnh, điều trị nội/ngoại trú, dược, xét nghiệm, chẩn đoán hình ảnh, viện phí — BHYT — hóa đơn điện tử, kho vật tư, quản lý chất lượng đến báo cáo Bộ Y tế (Thông tư 32/46…).

Nội dung được rút ra từ kinh nghiệm triển khai một HIS thực tế đang vận hành tại nhiều bệnh viện ở Việt Nam, đối chiếu với chuẩn quốc tế (HL7 v2 / FHIR, ICD-10, LOINC, DICOM).

## Cấu trúc series

| Phần | Chủ đề chính |
| --- | --- |
| 1 | Tổng quan & kiến trúc HIS |
| 2 | Tiếp nhận, MPI, lịch hẹn, kiosk, xếp hàng (QMS) |
| 3 | Khám ngoại trú (OPD) |
| 4 | Cấp cứu (Emergency) |
| 5 | Nội trú (IPD) & quản lý giường |
| 6 | Order management & ICD coding |
| 7 | Xét nghiệm (LIS) |
| 8 | Chẩn đoán hình ảnh (RIS / PACS) |
| 9 | Dược (Pharmacy) & tương tác thuốc |
| 10 | Phòng mổ (Surgery) |
| 11 | Sản, tiêm chủng, IVF, y học hạt nhân |
| 12 | EMR & lưu trữ hồ sơ bệnh án (MRA) |
| 13 | Viện phí, BHYT, hóa đơn điện tử |
| 14 | Kho dược, trang thiết bị, mua sắm |
| 15 | Dinh dưỡng, dịch vụ hỗ trợ, ngân hàng máu |
| 16 | Quản lý chất lượng (QLCL) |
| 17 | Báo cáo, thống kê, TT32, Dashboard |
| 18 | Tích hợp & vận hành (HIE, mobile) |
| 19 | **Phụ lục — Khung pháp lý 2026** (Luật KCB 15/2023, Luật BHYT 51/2024, Luật ĐT 22/2023, TT 22/2024, TT 32/2023, QĐ 130/QĐ-BYT…) |

> Mỗi bài đều bám sát **dòng chảy nghiệp vụ thực tế**, có sơ đồ luồng, vai trò (actor), trạng thái (state) và những ràng buộc pháp lý / BHYT đi kèm — tham chiếu đến các văn bản pháp luật **mới nhất tới 2026** (xem chi tiết trong Phần 19).
