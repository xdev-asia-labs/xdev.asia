---
id: 019f5a01-d000-7001-his0-000000000503
title: "Bài 14: Ra viện, chuyển viện & tóm tắt bệnh án"
slug: bai-14-ra-vien-chuyen-vien-tom-tat
description: >-
  Quy trình ra viện: chốt y lệnh, tổng kết HSBA, kết toán BHYT, in giấy ra
  viện, đơn ra viện, tóm tắt bệnh án (CCD), chuyển viện đúng tuyến.
duration_minutes: 50
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-14-ra-vien-chuyen-vien-tom-tat-banner.png
video_url: null
sort_order: 3
section_title: "Phần 5: Nội trú (IPD)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Ra viện, chuyển viện & tóm tắt HSBA](/storage/uploads/2026/05/his/bai-14-ra-vien-chuyen-vien-tom-tat-banner.png)

## Các loại ra viện

![Trao tóm tắt ra viện, ký số và lưu trữ EMR](/storage/uploads/2026/05/his/bai-14-ra-vien-chuyen-vien-tom-tat-workflow.png)


| Loại | Mã | Ghi chú |
| --- | --- | --- |
| Khỏi / đỡ | 01 | Phổ biến nhất |
| Không thay đổi | 02 |  |
| Nặng hơn | 03 | Cần lý do |
| Chuyển viện | 04 | Phải có giấy chuyển tuyến |
| Tử vong | 05 | Có giờ tử vong, biên bản |
| Bệnh nhân xin về | 06 | Cam kết tự nguyện |
| Trốn viện | 07 | Biên bản BV lập |

Thống kê này gửi báo cáo Bộ Y tế hàng tháng (xem ch.17).

## Checklist ra viện

HIS hiển thị checklist cho điều dưỡng & BS:

- [ ] Đã đóng tất cả y lệnh active
- [ ] Có tổng kết bệnh án + chẩn đoán ra viện (ICD-10)
- [ ] Có đơn thuốc ra viện (nếu cần)
- [ ] Đã trả kết quả CLS đầy đủ
- [ ] Đã thanh toán hoặc xác nhận công nợ
- [ ] Đã đóng dấu HSBA, ký số
- [ ] Đã hẹn tái khám / hướng dẫn

Không hoàn thành checklist → nút "Ra viện" bị disable.

## Kết toán BHYT

Khi ra viện, hệ thống chạy job tổng hợp:

- Tổng dịch vụ phát sinh (theo bảng giá BHYT 39/2018, 13/2019…).
- Tách phần BHYT chi trả vs phần BN đồng chi trả.
- Áp dụng **trần thanh toán** theo loại BV (hạng I/II/III).
- Sinh **XML 4210** chuẩn cổng giám định BHYT (xem ch.13).

## Chứng từ in ra

| Tài liệu | Mục đích |
| --- | --- |
| Giấy ra viện (mẫu BYT) | Bằng chứng đợt điều trị |
| Đơn thuốc ra viện | Mua thuốc bên ngoài / BHYT mạn tính |
| Tóm tắt bệnh án (CCD/CCDA) | Chuyển tuyến, lưu trữ HSSK |
| Giấy chứng nhận nghỉ ốm hưởng BHXH | Mẫu C65-HD — quan trọng với người LĐ |
| Bảng kê chi phí KCB BHYT | Mẫu Phụ lục 3 — bệnh nhân ký xác nhận |
| Hoá đơn điện tử (xem ch.13) | Tài chính |

## Chuyển viện đúng tuyến

Điều kiện BHYT:

- BV hiện tại không đủ năng lực (theo phân hạng).
- Có **giấy chuyển tuyến** TT 14/2014 do BS điều trị ký + Trưởng khoa + Giám đốc.
- Đính kèm tóm tắt HSBA, kết quả CLS gần nhất.

HIS sinh giấy chuyển tuyến tự động + đẩy lên cổng HSSK để BV tuyến trên truy cập.

## Tóm tắt bệnh án (CCD)

Theo HL7 CDA / CCD, gồm các section bắt buộc:

- Allergies
- Medications
- Problems / Diagnoses
- Procedures
- Results
- Vital Signs
- Plan of Care
- Encounters
- Immunizations

Đẩy lên **HSSK quốc gia** giúp BV tiếp theo (kể cả ở tỉnh khác) đọc được lịch sử.

## Mở lại bệnh án (Reopen)

Trong 7 ngày sau ra viện, nếu phát hiện sai sót (ICD sai, thiếu dịch vụ), được mở lại với phê duyệt **Trưởng khoa + QLCL**. Mọi sửa đổi đều log + sinh phiên bản HSBA mới — phiên bản cũ vẫn lưu để truy vết.

> **Bài tiếp theo:** Order Management — luồng chỉ định CLS xuyên suốt.
