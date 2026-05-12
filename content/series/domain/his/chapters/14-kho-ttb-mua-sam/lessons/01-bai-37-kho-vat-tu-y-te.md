---
id: 019f5a01-d000-7001-his0-000000001401
title: "Bài 37: Kho vật tư y tế (HSM) — quản lý xuất nhập tồn"
slug: bai-37-kho-vat-tu-y-te
description: >-
  Quản lý vật tư y tế tiêu hao (gạc, kim, găng, ống thông…), khác kho dược
  ở mã hoá, đơn vị tính, định mức theo dịch vụ và "case package".
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-37-kho-vat-tu-y-te-banner.png
video_url: null
sort_order: 1
section_title: "Phần 14: Kho dược, TTB & Mua sắm"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Kho VTYT & quản lý tồn kho](/storage/uploads/2026/05/his/bai-37-kho-vat-tu-y-te-banner.png)

## Vật tư y tế là gì

![Kho VTYT với barcode và dashboard tồn kho](/storage/uploads/2026/05/his/bai-37-kho-vat-tu-y-te-workflow.png)


Khác thuốc, vật tư y tế (VTYT) gồm:

- Tiêu hao thông thường: gạc, băng, kim, ống thông
- Vật tư đặc thù: catheter, dây dẫn, dao điện, lưới, túi máu
- Implant: nẹp, vít, khớp nhân tạo (xem ch.10)

Phân loại theo Bộ Y tế: A / B / C / D theo mức rủi ro.

## Mã hoá

| Mã | Mục đích |
| --- | --- |
| Mã nội bộ | HIS dùng |
| Mã BHYT | Để xuất XML 4210 |
| GTIN / UDI | Truy xuất nguồn gốc |
| Mã đơn vị (UOM) | Cái / hộp / bộ — phải có công thức quy đổi |

## Định mức theo dịch vụ

Một dịch vụ kỹ thuật có **định mức VTYT** chuẩn (theo TT 50/2017):

```
"Đặt nội khí quản":
  - Ống NKQ size 7.5 :  1
  - Ống hút :  1
  - Găng vô khuẩn : 2
  - Lidocain 2% gel : 5 mL
```

Khi BS chỉ định dịch vụ, HIS tự động trừ kho theo định mức + áp giá. Phát sinh ngoài định mức → phải nhập thêm phiếu.

## Case package (gói vật tư)

Phẫu thuật thường có **gói vật tư đóng sẵn** (instrument tray + tiêu hao). Quét mã gói → trừ theo công thức nội bộ.

## Cấp phát

```
[Kho chính] → [Kho khoa] → [Buồng/phòng]
```

- Kho khoa nhận theo dự trù tuần / tháng.
- Buồng dùng → ghi nhận theo BN (qua barcode wristband).

## Kiểm kê

Tương tự kho dược (xem bài 24):

- Khoá xuất nhập trong thời gian kiểm.
- Đối chiếu lô + serial cho implant.
- Biên bản chênh lệch.

## Bài học vận hành

- Định mức VTYT là tài sản chuyên môn — phải có hội đồng cập nhật, không phải IT tự sửa.
- Theo dõi **vật tư hao hụt** ngoài định mức → có thể là quy trình lỏng lẻo.
- Implant phải truy vết toàn vòng đời: nhập → cấy ghép → BN nào → recall (nếu có).

> **Bài tiếp theo:** Trang thiết bị y tế (TTB) — vòng đời thiết bị.
