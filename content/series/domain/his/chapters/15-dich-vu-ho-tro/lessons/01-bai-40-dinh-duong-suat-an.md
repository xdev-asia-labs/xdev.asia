---
id: 019f5a01-d000-7001-his0-000000001501
title: "Bài 40: Dinh dưỡng & suất ăn bệnh viện"
slug: bai-40-dinh-duong-suat-an
description: >-
  Quản lý chế độ ăn theo y lệnh, sàng lọc dinh dưỡng, lập thực đơn bệnh
  lý, sản xuất bếp, giao suất ăn theo giường.
duration_minutes: 35
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-40-dinh-duong-suat-an-banner.png
video_url: null
sort_order: 1
section_title: "Phần 15: Dịch vụ hỗ trợ"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Dinh dưỡng lâm sàng & suất ăn](/storage/uploads/2026/05/his/bai-40-dinh-duong-suat-an-banner.png)

## Vai trò khoa Dinh dưỡng

![Dietitian lên thực đơn, bếp BV chuẩn bị suất](/storage/uploads/2026/05/his/bai-40-dinh-duong-suat-an-workflow.png)


Khoa Dinh dưỡng (TT 18/2020 BYT) chịu trách nhiệm:

- Sàng lọc dinh dưỡng cho BN nhập viện (MNA, MUST).
- Tư vấn / can thiệp dinh dưỡng.
- Cung cấp suất ăn bệnh lý (đái tháo đường, suy thận, sau mổ…).
- Đào tạo dinh dưỡng cho BS / ĐD.

## Y lệnh chế độ ăn

BS điều trị ra y lệnh chế độ ăn:

- Mã chế độ (vd. ĐTĐ-1500 kcal, suy thận thấp đạm, ăn lỏng).
- Số bữa/ngày, calo, ăn qua đường nào (miệng / sonde dạ dày / dinh dưỡng tĩnh mạch).
- Hạn chế (kiêng muối, kiêng đường, kiêng gluten…).

HIS đẩy y lệnh sang module **Bếp** để chuẩn bị suất ăn.

## Sản xuất bếp

```
[Tổng hợp y lệnh ăn — sáng] → [Lập thực đơn ngày]
        │
        ▼
[Mua nguyên liệu] → [Chế biến] → [Đóng suất theo giường]
        │
        ▼
[Giao đến giường — quét QR wristband + suất]
```

## Sàng lọc dinh dưỡng

Bắt buộc trong 24 giờ đầu nhập viện. HIS có form điểm:

- BMI
- Mất cân không chủ ý
- Khả năng ăn
- Stress bệnh lý

Điểm cao → khoa Dinh dưỡng can thiệp.

## Dinh dưỡng tĩnh mạch (TPN)

- Chỉ định cho BN không ăn được đường tiêu hoá > 7 ngày.
- Tính toán cá nhân hoá: glucose + acid amin + lipid + điện giải.
- Pha tại bếp dinh dưỡng / khoa Dược dưới vô khuẩn.

## Bài học vận hành

- Quên cập nhật chế độ ăn khi đổi giường → BN nhận sai suất → có thể tai biến.
- BHYT chi trả phần dinh dưỡng điều trị (sữa cao năng lượng, TPN) — phải có chỉ định lý do rõ ràng.
- Bếp BV phải tuân thủ HACCP và TT 30/2012 ATTP.

> **Bài tiếp theo:** Dịch vụ hỗ trợ — vận chuyển, vệ sinh, giặt là.
