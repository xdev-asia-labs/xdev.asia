---
id: 019f5a01-d000-7001-his0-000000001402
title: "Bài 38: Trang thiết bị y tế (TTB) — vòng đời & bảo trì"
slug: bai-38-trang-thiet-bi-y-te
description: >-
  Quản lý vòng đời máy móc y tế (CT, MRI, monitor, máy thở, dao mổ điện):
  nhập → bàn giao → bảo trì PM → hiệu chuẩn → khấu hao → thanh lý.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-38-trang-thiet-bi-y-te-banner.png
video_url: null
sort_order: 2
section_title: "Phần 14: Kho dược, TTB & Mua sắm"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Trang thiết bị y tế — vòng đời](/storage/uploads/2026/05/his/bai-38-trang-thiet-bi-y-te-banner.png)

## Vòng đời TTB

![Kỹ sư BME bảo trì máy CT có QR asset tag](/storage/uploads/2026/05/his/bai-38-trang-thiet-bi-y-te-workflow.png)


```
Đề xuất → Mua sắm (đấu thầu) → Nhập kho → Lắp đặt → Nghiệm thu → Bàn giao
        → Sử dụng (kèm bảo trì PM, hiệu chuẩn)
        → Khấu hao
        → Thanh lý / Tái sử dụng / Tiêu huỷ
```

## Phân loại

| Nhóm | Ví dụ |
| --- | --- |
| Chẩn đoán | CT, MRI, X-quang, US |
| Điều trị | Máy thở, máy mê, dao mổ, laser |
| Theo dõi | Monitor, ECG holter |
| Hồi sức | Bơm tiêm điện, máy lọc máu |
| Hỗ trợ | Tủ ấm, tủ sấy, đèn mổ |

## Hồ sơ TTB

- Mã thiết bị (asset tag QR)
- Hãng, model, serial, năm SX
- Vị trí lắp đặt + người chịu trách nhiệm
- Hợp đồng bảo hành / bảo trì
- Lịch sử bảo trì + sự cố
- Hiệu chuẩn (calibration)

## Bảo trì phòng ngừa (PM)

- Lịch theo khuyến cáo nhà SX (vd. 6 tháng / năm).
- HIS tự sinh phiếu PM, gửi cho phòng TTB.
- Sau PM: cập nhật log + cấp giấy xác nhận hoạt động.

## Hiệu chuẩn

Bắt buộc với một số nhóm (theo TT 23/2013, TT 39/2016):

- Cân, máy đo HA, monitor sinh hiệu, máy XN…
- Phải làm tại đơn vị được Bộ KHCN công nhận.
- Tem hiệu chuẩn dán trên máy + ngày hết hạn → HIS cảnh báo.

## Sự cố TTB

- Form báo cáo: ngày, máy, hiện tượng, ảnh hưởng BN (nếu có).
- Phân loại: hỏng nhẹ / nặng / có sự cố y khoa.
- Báo cáo Cục Trang thiết bị (Bộ Y tế) nếu có sự cố nghiêm trọng — Vigilance.

## Quản lý sử dụng

- Gắn TTB với khoa / phòng → tính tiền sử dụng theo ca (đặc biệt máy đắt: máy thở, lọc máu).
- Theo dõi giờ chạy → so với tuổi thọ thiết kế.

## Bài học vận hành

- TTB **không có tem hiệu chuẩn còn hạn** không được dùng cho BN — kiểm tra trước mỗi ca quan trọng.
- Hồ sơ TTB là **bằng chứng quan trọng** khi có sự cố y khoa — đừng để mất.
- Tích hợp với phần mềm tài sản (asset management) chung của BV.

> **Bài tiếp theo:** Mua sắm — đấu thầu thuốc và VTYT.
