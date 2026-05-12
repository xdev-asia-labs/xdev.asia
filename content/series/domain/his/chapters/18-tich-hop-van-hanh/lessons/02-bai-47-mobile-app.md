---
id: 019f5a01-d000-7001-his0-000000001802
title: "Bài 47: Mobile app cho bệnh nhân & bác sĩ"
slug: bai-47-mobile-app
description: >-
  Tính năng cốt lõi của app BV: đặt khám, hồ sơ của tôi, xem KQ, thanh
  toán; app bác sĩ để duyệt y lệnh / xem KQ ngoài giờ.
duration_minutes: 35
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-47-mobile-app-banner.png
video_url: null
sort_order: 2
section_title: "Phần 18: Tích hợp & Vận hành"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Mobile app cho bệnh nhân & bác sĩ](/storage/uploads/2026/05/his/bai-47-mobile-app-banner.png)

## App bệnh nhân

![BN dùng app, BS xem worklist trên điện thoại](/storage/uploads/2026/05/his/bai-47-mobile-app-workflow.png)


Tính năng cốt lõi:

- Đăng ký tài khoản (xác minh CCCD + OTP).
- Liên kết hồ sơ MPI (qua eKYC + ký phép HSSK).
- Đặt lịch khám (xem ch.2 — bài 5).
- Check-in QR khi tới BV.
- Xem hồ sơ của tôi: lịch sử khám, KQ XN/CĐHA, đơn thuốc, vaccine.
- Thanh toán viện phí (QR, thẻ, ví).
- Nhận thông báo (kết quả mới, hẹn tái khám).
- Đánh giá / phản hồi.

## App bác sĩ

- Lịch khám / mổ trong ngày.
- Worklist y lệnh chờ duyệt (dược sĩ, BS hội chẩn).
- Xem hồ sơ BN (đọc-only ngoài giờ, có MFA).
- Nhận cảnh báo Critical Value.
- Ký số đơn thuốc / phiếu (Smart-CA).

## Bảo mật

- Bắt buộc MFA cho BS.
- Phiên ngắn, auto-logout.
- Không lưu PHI offline (hoặc có encrypt + xoá khi logout).
- Pin/Face/Touch ID khi mở app.

## Tích hợp BackEnd

```
Mobile ─► API Gateway ─► HIS Microservices
                          │
                          └── PACS Web Viewer (cho BS)
```

Dùng OAuth2 / OIDC + scope phân quyền.

## Bài học vận hành

- App đừng làm "tất cả" — chỉ tính năng người dùng thực sự cần.
- Push notification quan trọng (KQ XN nguy hiểm) phải có **fallback SMS**.
- Có version Web App cho BN không cài app — đặc biệt người cao tuổi.

> **Bài tiếp theo:** Vận hành 24/7, DR & continuity.
