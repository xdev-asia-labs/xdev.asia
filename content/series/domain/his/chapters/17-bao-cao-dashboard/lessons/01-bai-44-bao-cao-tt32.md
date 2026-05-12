---
id: 019f5a01-d000-7001-his0-000000001701
title: "Bài 44: Báo cáo Bộ Y tế — TT 32/2023 & XML thống kê"
slug: bai-44-bao-cao-tt32
description: >-
  Hệ thống báo cáo y tế cơ sở theo TT 32/2023, các bộ XML phải gửi định kỳ
  (KCB, dược, dịch tễ, tử vong, dân số…) và lộ trình điện tử hoá báo cáo.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-44-bao-cao-tt32-banner.png
video_url: null
sort_order: 1
section_title: "Phần 17: Báo cáo, Thống kê & Dashboard"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Báo cáo Bộ Y tế theo TT 32/2023](/storage/uploads/2026/05/his/bai-44-bao-cao-tt32-banner.png)

## Khung pháp lý

![Đẩy XML báo cáo lên cổng Bộ Y tế](/storage/uploads/2026/05/his/bai-44-bao-cao-tt32-workflow.png)


Thông tư 32/2023/TT-BYT thay thế các thông tư cũ về **chế độ báo cáo thống kê y tế cơ sở**. Quy định:

- Danh mục báo cáo BV phải gửi.
- Tần suất: hàng ngày / tháng / quý / năm.
- Định dạng: chủ yếu **XML** + Excel báo cáo.
- Kênh: cổng báo cáo Bộ Y tế / Sở Y tế.

## Các nhóm báo cáo chính

| Nhóm | Tần suất | Nội dung |
| --- | --- | --- |
| KCB | Tháng | Số lượt khám, nhập viện, ra viện theo khoa, ICD |
| Dược | Tháng | Tiêu thụ thuốc, tồn kho, ADR |
| Dịch tễ | Tuần / khi có ca | Bệnh truyền nhiễm A/B/C |
| Tử vong | Tháng | Số ca, nguyên nhân (ICD) |
| Phẫu thuật | Tháng | Số ca, loại |
| Tài chính | Quý | Doanh thu, chi phí |
| Nhân lực | Năm | Cơ cấu, đào tạo |

## Quy trình tạo báo cáo

```
[HIS chốt số liệu cuối kỳ] → [Sinh XML / Excel theo mẫu]
        │
        ▼
[QLCL / KHTH kiểm tra] → [Ký số]
        │
        ▼
[Đẩy lên cổng Bộ Y tế / Sở] → [Nhận hồi đáp / yêu cầu sửa]
```

## Liên thông HSSK quốc gia

Ngoài báo cáo định kỳ, BV còn đẩy realtime/near-realtime:

- Tóm tắt mỗi đợt KCB → **Hồ sơ Sức khoẻ Điện tử**.
- Mỗi mũi tiêm → **Tiêm chủng quốc gia**.
- Mỗi giấy chuyển tuyến → cổng giám định BHYT.

## Bài học vận hành

- Mỗi báo cáo phải có **owner + checklist** — đừng để IT một mình lo.
- Đối chiếu nội bộ giữa các module (Pharmacy ↔ Billing ↔ Báo cáo dược) trước khi nộp.
- Backup XML đã gửi — phục vụ thanh tra.

> **Bài tiếp theo:** Dashboard quản trị & BI cho lãnh đạo.
