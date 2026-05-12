---
id: 019f5a01-d000-7001-his0-000000001304
title: "Bài 36: Bảo hiểm tư nhân & eClaim"
slug: bai-36-bao-hiem-tu-nhan-eclaim
description: >-
  Bảo lãnh trực tiếp với hãng bảo hiểm tư nhân (Bảo Việt, Liberty, Manulife,
  Prudential...) — quy trình authorize, claim, settlement và phần BN tự trả.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-36-bao-hiem-tu-nhan-eclaim-banner.png
video_url: null
sort_order: 4
section_title: "Phần 13: Viện phí, BHYT & Hóa đơn điện tử"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Bảo hiểm tư nhân & eClaim](/storage/uploads/2026/05/his/bai-36-bao-hiem-tu-nhan-eclaim-banner.png)

## Mô hình bảo lãnh

![Form claim auto-fill từ EMR cho hãng bảo hiểm](/storage/uploads/2026/05/his/bai-36-bao-hiem-tu-nhan-eclaim-workflow.png)


```
[BN] ── thẻ BH tư ── [BV ký HĐ với hãng BH] ── BV tạm ứng → BN ra viện không trả
                                              │
                                              ▼
                                    [BV gửi claim → hãng BH thanh toán]
```

## Quy trình điển hình

1. BN xuất trình thẻ + CCCD.
2. BV tra cứu hợp đồng (qua TPA — Third Party Administrator như eClaim, MediLink, Pacific Cross).
3. **Pre-authorization** cho phẫu thuật / nội trú: BV gửi yêu cầu, hãng duyệt mức chi trả.
4. BN điều trị.
5. Khi ra viện, BV tổng hợp chi phí → tách phần được bảo lãnh ↔ phần BN trả.
6. Gửi claim package (HSBA tóm tắt + CLS + hoá đơn) → hãng BH.

## Cấu trúc dữ liệu

```
Patient
└── Insurance (BHYT)
└── Insurance (PrivateInsurance #1)
    ├── policy_no
    ├── insurer
    ├── coverage (limit/year, sublimit phẫu thuật, OPD, dental...)
    └── pre_auth_status
```

Một BN có thể có cả BHYT + 1–2 BH tư → HIS cần **thứ tự áp dụng** (thường BHYT trước, BH tư phần còn lại).

## eClaim / API

Các hãng / TPA cung cấp API:

- Tra cứu hợp đồng (eligibility check).
- Pre-authorization request / response.
- Submit claim với danh sách dịch vụ.
- Nhận trạng thái: APPROVED / PARTIAL / REJECTED / IN_REVIEW.

HIS gửi qua chuẩn nội bộ TPA (mỗi TPA khác nhau) hoặc HL7 X12 ở quốc tế.

## Phần BN tự trả

Sau khi tách BHYT + BH tư, phần còn lại BN trả → xuất HĐĐT (xem bài 35) cho phần đó.

## Khó khăn vận hành

- Mỗi hãng / TPA có form khác → HIS cần "adapter" cho từng đối tác.
- Pre-auth có thể chậm vài giờ → bộ phận tiếp nhận bảo lãnh phải làm việc 24/7 với khoa cấp cứu.
- Tỷ lệ từ chối ~10–20 % — cần module quản lý reject case.

## Bài học vận hành

- **Niêm yết rõ** cho BN biết cái gì được bảo lãnh, cái gì không (vd. dịch vụ ngoài hợp đồng).
- Có **bộ phận chuyên trách** bảo lãnh — không khoán cho thu ngân.
- Đối soát hàng tháng với từng hãng — phát hiện claim bị "trôi".

> **Bài tiếp theo:** Quản lý kho dược, vật tư & TSCĐ.
