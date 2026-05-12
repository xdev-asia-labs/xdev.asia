---
id: 019f5a01-d000-7001-his0-000000001103
title: "Bài 29: IVF & Y học hạt nhân — quy trình đặc thù"
slug: bai-29-ivf-y-hoc-hat-nhan
description: >-
  Hai chuyên khoa có quy trình rất khác biệt mà HIS cần hỗ trợ riêng: hỗ
  trợ sinh sản (IVF) và y học hạt nhân (Nuclear Medicine — PET/SPECT,
  Iod-131).
duration_minutes: 45
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-29-ivf-y-hoc-hat-nhan-banner.png
video_url: null
sort_order: 3
section_title: "Phần 11: Chuyên khoa đặc thù"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![IVF & Y học hạt nhân](/storage/uploads/2026/05/his/bai-29-ivf-y-hoc-hat-nhan-banner.png)

## IVF — Hỗ trợ sinh sản

![Lab IVF với phôi và phòng PET/SPECT](/storage/uploads/2026/05/his/bai-29-ivf-y-hoc-hat-nhan-workflow.png)


### Cấu trúc dữ liệu

```
Couple (vợ + chồng — 2 MPI liên kết)
  └── Cycle (chu kỳ điều trị)
        ├── Stimulation (kích trứng — hormones, siêu âm)
        ├── OPU (chọc hút trứng) — số trứng thu
        ├── Lab (thụ tinh / ICSI) — số phôi
        ├── Embryo Transfer (chuyển phôi) — số phôi chuyển
        └── Outcome (β-hCG, lâm sàng, sinh)
```

### Đặc thù

- **Mọi mẫu sinh học (trứng, tinh trùng, phôi)** phải có barcode + double-witness (2 người ký xác nhận tại mỗi điểm xử lý).
- Kho phôi đông lạnh (cryopreservation) — quản lý dewars + token + hợp đồng lưu trữ với cặp vợ chồng.
- Truy vết liên tục: trứng → phôi → chuyển → kết quả → đứa trẻ → vô cùng quan trọng cho pháp lý & y khoa.
- Đồng thuận pháp lý của 2 vợ chồng cho từng can thiệp (chuyển phôi, đông phôi, hiến tặng, huỷ).

### Báo cáo

- Báo cáo trung tâm IVF lên Bộ Y tế / Hội HỖ Trợ Sinh Sản.
- Tỷ lệ thành công theo độ tuổi, theo phương pháp.

## Y học hạt nhân (Nuclear Medicine)

### Đặc thù

- Sử dụng **dược chất phóng xạ** (radiopharmaceutical) — quản lý nguồn phóng xạ chặt chẽ.
- Bệnh nhân sau tiêm trở thành "nguồn phát xạ" — cần phòng cách ly tạm thời.
- Tuân thủ luật năng lượng nguyên tử + Cục An toàn bức xạ.

### Quy trình PET/CT, SPECT

```
[Đặt lịch] → [Tiền chuẩn bị (nhịn ăn, dừng thuốc)]
        │
        ▼
[Tiêm dược chất phóng xạ] → [Chờ uptake (FDG ~ 60 phút)]
        │
        ▼
[Chụp PET/CT] → [PACS]
        │
        ▼
[BS YHHN đọc — fusion image] → [Báo cáo]
```

### Iod-131 điều trị

- BN nuốt I-131 cho ung thư tuyến giáp / Basedow.
- Cách ly trong phòng chì 2–7 ngày → đo phóng xạ trước khi xuất viện.
- Quản lý chất thải (nước tiểu, áo quần) như chất thải phóng xạ.

### HIS cần hỗ trợ

- Sổ quản lý nguồn phóng xạ (nhập, sử dụng, phế thải, chuyển giao).
- Báo cáo định kỳ cho Cục An toàn bức xạ.
- Theo dõi liều nhân viên (dosimeter).
- Cảnh báo BN mang thai / cho con bú → chống chỉ định.

> **Bài tiếp theo:** EMR — hồ sơ bệnh án điện tử & ký số.
