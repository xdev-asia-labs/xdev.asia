---
id: 019f5a01-d000-7001-his0-000000001502
title: "Bài 41: Ngân hàng máu & truyền máu"
slug: bai-41-ngan-hang-mau
description: >-
  Quản lý ngân hàng máu trong BV: nhập máu từ trung tâm, định nhóm, lưu
  trữ, phát máu, theo dõi truyền & phản ứng truyền máu.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-41-ngan-hang-mau-banner.png
video_url: null
sort_order: 2
section_title: "Phần 15: Dịch vụ hỗ trợ"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Ngân hàng máu & cross-match](/storage/uploads/2026/05/his/bai-41-ngan-hang-mau-banner.png)

## Mô hình ngân hàng máu

![Kỹ thuật viên cross-match máu cho BN](/storage/uploads/2026/05/his/bai-41-ngan-hang-mau-workflow.png)


```
[Trung tâm Huyết học — Truyền máu Quốc gia] → [Ngân hàng máu BV]
                                                       │
                                                       ▼
                                              [Khoa lâm sàng truyền cho BN]
```

## Cấu trúc dữ liệu

```
BloodUnit
├── unit_no         (mã túi)
├── component       (whole blood / RBC / FFP / platelet / cryo)
├── ABO, Rh
├── volume          (mL)
├── collection_date
├── expiry_date
├── status          (in_stock / reserved / issued / transfused / discarded)
└── donor_test      (HBV, HCV, HIV, syphilis — đã sàng lọc)
```

## Quy trình truyền máu

```
[BS ra y lệnh truyền + lý do] → [XN crossmatch]
        │
        ▼
[Reserve túi máu] → [Phát máu — phiếu phát]
        │
        ▼
[ĐD đến nhận — quét chéo: BN ↔ túi máu ↔ phiếu]
        │
        ▼
[Truyền — sinh hiệu mỗi 15 phút (60' đầu)]
        │
        ▼
[Hoàn thành / Phản ứng truyền máu]
```

## Crossmatch & xác nhận

Trước truyền, **2 nhân viên đối chiếu** tại đầu giường:

- Tên BN, MPI, ngày sinh
- Mã túi máu
- ABO + Rh
- Hạn dùng

Sai 1 yếu tố → DỪNG. Đây là loại sự cố y khoa cấp cao nhất.

## Phản ứng truyền máu

- Sốt, rét run, ngứa, khó thở, tụt HA, đau lưng, nước tiểu sẫm màu.
- DỪNG truyền ngay.
- Báo BS, lưu túi + dây truyền → gửi lại ngân hàng máu điều tra.
- Form báo cáo phản ứng (mẫu BYT).

## Bài học vận hành

- Tủ trữ máu phải có **theo dõi nhiệt độ liên tục** (máu RBC 2–6 °C, FFP −18 °C, tiểu cầu 20–24 °C lắc nhẹ).
- Túi máu **không bao giờ được trả lại tủ** sau khi rời ngân hàng > 30 phút.
- Đối tượng nhận đặc biệt: BN có kháng thể bất thường, sản phụ, trẻ sơ sinh — cần máu sàng lọc đặc biệt.

> **Bài tiếp theo:** Quản lý chất lượng & kiểm soát nhiễm khuẩn.
