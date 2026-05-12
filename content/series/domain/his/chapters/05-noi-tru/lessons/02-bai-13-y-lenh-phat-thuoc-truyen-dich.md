---
id: 019f5a01-d000-7001-his0-000000000502
title: "Bài 13: Y lệnh hàng ngày, phát thuốc & truyền dịch nội trú"
slug: bai-13-y-lenh-phat-thuoc-truyen-dich
description: >-
  Vòng đời y lệnh nội trú (CPOE): kê — duyệt — chia liều — phát — thực hiện
  — ghi nhận. eMAR, 5 đúng (Right) khi phát thuốc, ghi nhận truyền dịch.
duration_minutes: 60
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-13-y-lenh-phat-thuoc-truyen-dich-banner.png
video_url: null
sort_order: 2
section_title: "Phần 5: Nội trú (IPD)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Y lệnh điện tử — eMAR & 5 Right](/storage/uploads/2026/05/his/bai-13-y-lenh-phat-thuoc-truyen-dich-banner.png)

## CPOE — Computerized Physician Order Entry

![Điều dưỡng quét vòng tay BN trước khi cho thuốc](/storage/uploads/2026/05/his/bai-13-y-lenh-phat-thuoc-truyen-dich-workflow.png)


Tất cả y lệnh phải nhập trên HIS, không viết tay. Ưu điểm:

- Loại bỏ lỗi chữ viết.
- Kiểm tra tương tác thuốc & dị ứng tự động (xem ch.9).
- Truy vết mọi thay đổi.

## Vòng đời y lệnh thuốc

```
ORDERED (BS) → VERIFIED (Dược sĩ) → DISPENSED (Kho) →
ADMINISTERED (ĐD đầu giường) → DOCUMENTED (eMAR)
                                       ↘ HELD / DISCONTINUED / MISSED
```

**Verified** là bước dược sĩ lâm sàng kiểm tra trước khi cấp phát — bắt buộc với bệnh viện đạt JCI và là good practice với mọi BV.

## eMAR — Electronic Medication Administration Record

Mỗi giường có 1 màn hình eMAR theo giờ:

```
Giờ    | Thuốc                 | ĐD ký | Ghi chú
06:00  | Insulin Regular 8 IU  | NTH   | Glucose 7.2
12:00  | Insulin Regular 8 IU  | NTH   |
18:00  | Insulin Regular 6 IU  | -     | (đến giờ)
```

Khi điều dưỡng phát thuốc, quét **wristband bệnh nhân** + **mã thuốc** → hệ thống xác nhận **5 Right**:

1. Right patient
2. Right drug
3. Right dose
4. Right route
5. Right time

Cảnh báo nếu **lệch giờ > 30 phút**, hoặc bệnh nhân **đã đổi giường** so với eMAR.

## Phân loại y lệnh

| Loại | Ví dụ |
| --- | --- |
| Thường quy | Paracetamol 500 mg uống mỗi 6 h |
| Theo nhu cầu (PRN) | Morphin 2 mg TM khi đau VAS ≥ 6 |
| Một liều (STAT) | Adrenaline 1 mg TM ngay |
| Truyền dịch | Glucose 5 % 500 mL × 3 chai / ngày |
| Vận mạch | Noradrenaline 0.1 mcg/kg/min — chỉnh theo HA |

Mỗi loại có UI riêng. Đặc biệt **vận mạch** cần "live titration" — y lệnh được phép thay đổi liều liên tục, ghi log realtime.

## Truyền dịch & truyền máu

Truyền dịch:

- Bắt đầu / dừng / đổi tốc độ — đều có timestamp.
- Tổng dịch vào / ra (I/O) tổng hợp tự động trong tờ theo dõi.

Truyền máu (xem ch.15 — Ngân hàng máu):

- Yêu cầu **2 điều dưỡng đối chiếu** trước khi truyền.
- Quét chéo wristband ↔ mã túi máu ↔ phiếu phát máu.
- Theo dõi sinh hiệu mỗi 15 phút trong 1 giờ đầu, sau đó 30 phút.

## Sửa / huỷ y lệnh

- Sửa trong **30 phút đầu** sau khi tạo: cho phép, log diff.
- Sau 30 phút **hoặc** đã có hành động cấp phát: phải `DISCONTINUE` cũ + tạo lệnh mới, ghi lý do.
- Không bao giờ cho xoá hard-delete.

## Y lệnh khi chuyển khoa

- Y lệnh **active** được "chuyển theo bệnh nhân" nhưng phải **review & re-sign** bởi BS khoa mới trong vòng 4 giờ — nếu không, hệ thống hold lại.

> **Bài tiếp theo:** Ra viện, chuyển viện & tóm tắt bệnh án.
