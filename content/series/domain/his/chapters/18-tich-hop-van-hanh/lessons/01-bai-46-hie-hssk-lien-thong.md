---
id: 019f5a01-d000-7001-his0-000000001801
title: "Bài 46: Tích hợp HIE / HSSK & liên thông dữ liệu y tế"
slug: bai-46-hie-hssk-lien-thong
description: >-
  Health Information Exchange với HSSK quốc gia, liên thông giữa BV / phòng
  khám / nhà thuốc, định danh y tế, cấu trúc CCD/FHIR Bundle.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-46-hie-hssk-lien-thong-banner.png
video_url: null
sort_order: 1
section_title: "Phần 18: Tích hợp & Vận hành"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![HIE & liên thông HSSK quốc gia](/storage/uploads/2026/05/his/bai-46-hie-hssk-lien-thong-banner.png)

## Bối cảnh

![Các BV kết nối tới HSSK qua FHIR Bundle](/storage/uploads/2026/05/his/bai-46-hie-hssk-lien-thong-workflow.png)


HSSK (Hồ sơ Sức khoẻ Điện tử quốc gia) là cơ sở dữ liệu y tế tập trung do Bộ Y tế chủ trì. Mục tiêu: mỗi công dân có 1 hồ sơ liên thông giữa các tuyến.

## Các luồng tích hợp chính

| Luồng | Mô tả | Chuẩn dữ liệu |
| --- | --- | --- |
| BV → HSSK | Tóm tắt KCB sau xuất viện | CCD / FHIR Bundle |
| HSSK → BV | Lịch sử KCB của BN | FHIR Patient + Encounter + ... |
| BV → CDC | Bệnh truyền nhiễm | Form / FHIR ImmunizationRecommendation |
| BV → Tiêm chủng QG | Mũi tiêm | FHIR Immunization |
| BV → Cổng BHYT | XML 4210 | XML BHXH |
| BV → Cổng dược | Truy xuất nguồn gốc thuốc | DAV API |

## Định danh y tế

Lộ trình thống nhất theo **Đề án 06**: ID y tế = số CCDD/CCCD. HIS phải:

- Đăng ký BN với HSSK lúc tiếp nhận lần đầu.
- Truy vấn `Patient/$match` để tìm hồ sơ HSSK đã có.
- Ghi cả `local_id` lẫn `national_id` trong MPI.

## CCD / CCDA

Cấu trúc tóm tắt bệnh án (xem ch.5 — bài 14). HIE thường dùng CCD vì:

- Đa nền tảng (XML).
- Đầy đủ section: allergies, meds, problems, results, plan...
- Có chữ ký số tích hợp.

## FHIR Bundle

Hiện đại hơn — 1 transaction Bundle gồm nhiều resource:

```json
Bundle (transaction)
├── Patient
├── Encounter
├── Condition (chẩn đoán)
├── Observation (vitals + labs)
├── MedicationRequest
├── DiagnosticReport
└── DocumentReference (PDF HSBA)
```

Đẩy lên endpoint HSSK qua POST.

## Bảo mật khi liên thông

- mTLS giữa BV ↔ HSSK.
- Chữ ký số XAdES / PAdES cho bundle.
- Tokenize PHI khi không cần thật (ví dụ research).
- Ghi log ai truy vấn / nhận dữ liệu nào.

## Bài học vận hành

- HSSK còn đang phát triển → cần thiết kế **adapter** linh hoạt cho thay đổi schema.
- Đừng đẩy realtime sai dữ liệu — sẽ "ô nhiễm" hồ sơ quốc gia.
- Có cơ chế **resync** khi mất kết nối kéo dài.

> **Bài tiếp theo:** Mobile app cho BN & BS.
