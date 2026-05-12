---
id: 019f5a01-d000-7001-his0-000000001203
title: "Bài 32: Chữ ký số, audit log & truy vết HSBA"
slug: bai-32-chu-ky-so-audit-log
description: >-
  Hạ tầng PKI cho HIS: USB token, SIM PKI, ký số đám mây (eSign), HSM cho
  máy chủ; chuẩn audit log theo NĐ 13/2023 và HIPAA.
duration_minutes: 45
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-32-chu-ky-so-audit-log-banner.png
video_url: null
sort_order: 3
section_title: "Phần 12: EMR & lưu trữ HSBA"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Chữ ký số & audit log y khoa](/storage/uploads/2026/05/his/bai-32-chu-ky-so-audit-log-banner.png)

## Hạ tầng PKI cho HIS

![Bác sĩ ký số bằng smart-card, timeline audit](/storage/uploads/2026/05/his/bai-32-chu-ky-so-audit-log-workflow.png)


| Loại token | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| USB token cá nhân | Phổ biến, rẻ | Vướng víu, khó dùng nhiều máy |
| SIM PKI | Ký bằng OTP trên SIM | Cần sóng, hợp đồng nhà mạng |
| Cloud eSign (Smart-CA) | Ký mọi nơi, app/web | Phụ thuộc nhà cung cấp |
| HSM (server-side) | Cho service ký hàng loạt (báo cáo XML 4210, hoá đơn) | Đầu tư cao |

BV thường kết hợp: BS dùng cloud eSign cho thao tác hàng ngày; HSM cho service backend.

## Cái gì cần ký

| Tài liệu | Người ký |
| --- | --- |
| Phiếu khám OPD | BS khám |
| Bệnh án nội trú | BS điều trị + Trưởng khoa (khi tổng kết) |
| Y lệnh | BS ra y lệnh |
| Phiếu CĐHA | BS đọc CĐHA |
| Phiếu XN | BS XN / KTV trưởng |
| Đơn thuốc | BS kê + Dược sĩ duyệt |
| Tóm tắt BA / Giấy chuyển tuyến | BS điều trị + Trưởng khoa + Giám đốc |
| Hoá đơn điện tử | Hệ thống (HSM) |
| XML 4210 | Hệ thống (HSM) |

## Long-term Validation (LTV)

HSBA phải đọc lại được sau 10–20 năm khi chứng thư đã hết hạn. Dùng PAdES-LTV:

- Nhúng OCSP/CRL response tại thời điểm ký.
- Đóng dấu thời gian (TSA).
- Định kỳ "re-timestamp" trước khi TSA hết hạn.

## Audit log — yêu cầu

Theo NĐ 13/2023 (Bảo vệ dữ liệu cá nhân) và best practice HIPAA:

- Log **mọi access** dữ liệu BN — không chỉ thao tác sửa.
- Trường tối thiểu: timestamp, user_id, role, action, resource (MPI / encounter), IP, user-agent, kết quả.
- **Bất biến** — append-only (WORM storage).
- Lưu ≥ 6 năm (HIPAA).
- Không user nào (kể cả admin) được tự sửa log của chính mình.

## Phát hiện bất thường

Build dashboard tự động:

- BS xem hồ sơ BN không phải của mình > N lần / tuần.
- Truy cập ngoài giờ làm việc.
- Truy cập hàng loạt (nghi xuất dữ liệu).
- Login thất bại liên tiếp.

## Bài học vận hành

- Đào tạo BS về **trách nhiệm pháp lý của chữ ký số** — không cho người khác mượn token.
- Khoá USB token tự động sau 5 phút không thao tác.
- Cấp lại token nhanh khi mất / hỏng — đừng để BS phải nghỉ ký giấy.

> **Bài tiếp theo:** Viện phí — kiến trúc tính phí phức tạp.
