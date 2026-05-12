---
id: 019f5a01-d000-7001-his0-000000000701
title: "Bài 17: LIS — luồng xét nghiệm end-to-end"
slug: bai-17-lis-luong-xet-nghiem
description: >-
  Order LIS, lấy mẫu, dán nhãn barcode, vận chuyển, chạy máy, validate kết
  quả, trả về EMR. Critical value & delta check.
duration_minutes: 60
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-17-lis-luong-xet-nghiem-banner.png
video_url: null
sort_order: 1
section_title: "Phần 7: Xét nghiệm (LIS)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![LIS — luồng xét nghiệm end-to-end](/storage/uploads/2026/05/his/bai-17-lis-luong-xet-nghiem-banner.png)

## Tổng quan luồng LIS

![Mẫu máu từ lấy → analyzer → kết quả với critical value](/storage/uploads/2026/05/his/bai-17-lis-luong-xet-nghiem-workflow.png)


```
[Order từ EMR] → [Phân loại lab: Hoá sinh / Huyết học / Vi sinh / MD]
        │
        ▼
[Sinh barcode mẫu] → [Lấy mẫu — quét wristband + barcode]
        │
        ▼
[Vận chuyển: ống khí nén / ĐD / robot]
        │
        ▼
[Tiền xử lý: ly tâm, chia ống]
        │
        ▼
[Chạy máy XN — interface HL7 ORM/ORU]
        │
        ▼
[Validate (KTV / BS XN)] → [Trả KQ về EMR] → [BS đọc, ký xác nhận]
```

## Sample Lifecycle

| Trạng thái | Mô tả |
| --- | --- |
| ORDERED | Có chỉ định, chưa lấy |
| COLLECTED | Đã lấy mẫu (kèm thời gian, người lấy) |
| RECEIVED | Lab đã nhận, đối chiếu khớp order |
| PROCESSING | Đang chạy máy / pha loãng |
| RESULTED | Có kết quả thô |
| VALIDATED | KTV / BS XN duyệt — mới được trả |
| RELEASED | Đẩy về EMR + Billing |
| REJECTED | Mẫu hỏng (vỡ, đông, thiếu) — yêu cầu lấy lại |

## Barcode mẫu — chìa khoá an toàn

Mỗi ống mẫu in nhãn:

```
┌───────────────────────┐
│ Nguyễn Văn A          │
│ DOB: 1985-04-12  Nam   │
│ MPI: 100023          │
│ Order: O-2026-12345   │
│ Tube: SST  | Hoá sinh │
│ ▮█▮█▮█  M-78451       │
└───────────────────────┘
```

Quét nhãn → tự động map vào instrument; sai bệnh nhân → thiết bị từ chối chạy.

## HL7 với máy xét nghiệm

| Message | Chiều | Mục đích |
| --- | --- | --- |
| ORM^O01 | LIS → Máy | Chỉ định công việc |
| ORU^R01 | Máy → LIS | Trả kết quả |
| ACK | Hai chiều | Xác nhận |
| QBP/RSP | LIS ↔ Máy | Truy vấn order |

Nhiều máy không hỗ trợ HL7 trực tiếp → cần **driver/middleware** (Mirth, Opal, in-house).

## Validate kết quả

Hai mức:

- **Auto-validation**: kết quả nằm trong khoảng tham chiếu, không có flag → tự release.
- **Manual validation**: kết quả bất thường, có flag, hoặc delta lớn → KTV/BS XN xem.

### Critical value

Giá trị nguy hiểm (vd. K⁺ > 6.5, glucose < 2.5) → **gọi điện** ngay cho BS điều trị, ghi log:

- Ai gọi, ai nhận, lúc mấy giờ.
- Nội dung BS xác nhận đã nắm.
- Vì là pháp lý: thiếu ghi nhận → BV chịu trách nhiệm khi sự cố.

### Delta check

So sánh với lần XN gần nhất của cùng BN. Vd. Hb đột ngột giảm 3 g/dL trong 24 h → flag xem có nhầm mẫu / xuất huyết.

## Trả kết quả

- KQ số → bảng + biểu đồ xu hướng.
- KQ định tính (vi sinh, MD) → kèm chú thích, kháng sinh đồ.
- Phiếu KQ in → có chữ ký số BS XN, mã QR truy nguyên.

## Bài học vận hành

- Bảng **mã ánh xạ LIS ↔ EMR ↔ BHYT ↔ LOINC** phải có chủ sở hữu rõ ràng — sai bảng này là sai cả hệ thống.
- Quy trình "lấy lại mẫu" phải nhanh — đặc biệt mẫu khó (nhi sơ sinh, người già khó lấy ven).
- **STAT order** cần kênh thông báo riêng (đèn nhấp nháy / tiếng chuông) — không lẫn với routine.

> **Bài tiếp theo:** Vi sinh, kháng sinh đồ và quản lý kháng kháng sinh.
