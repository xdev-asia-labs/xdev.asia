---
id: 019f5a01-d000-7001-his0-000000000102
title: "Bài 2: Kiến trúc tổng thể HIS & tích hợp HL7/FHIR"
slug: bai-2-kien-truc-his-hl7-fhir
description: >-
  Kiến trúc tham chiếu cho HIS hiện đại: tách biệt các phân hệ, integration
  bus, chuẩn HL7 v2/FHIR, bảo mật PHI và tuân thủ HIPAA/Nghị định 13.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Tổng quan"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

## Kiến trúc tham chiếu

Một HIS hiện đại thường được tách thành các domain service kết nối qua **integration bus** (Mirth Connect, Apache Camel, hoặc message broker), chuẩn hoá theo HL7 v2 / FHIR.

```
[EMR] ─┐
[LIS] ─┼─► [Integration Bus / FHIR API] ◄── [PACS] [Pharmacy] [Billing]
[RIS] ─┘                  │
                          ▼
                   [Data Warehouse / BI]
```

## HL7 vs FHIR

- **HL7 v2** — chuẩn legacy, dạng pipe-delimited, vẫn phổ biến trong giao tiếp giữa LIS/RIS/HIS.
- **HL7 FHIR** — chuẩn hiện đại, RESTful, JSON, dễ tích hợp với hệ thống mới và ứng dụng mobile.

## Bảo mật PHI

- Mã hoá at-rest và in-transit (TLS, AES-256).
- Audit log đầy đủ truy cập dữ liệu bệnh nhân.
- Phân quyền theo vai trò (RBAC/ABAC) qua Keycloak hoặc IAM tương đương.

> **Bài tiếp theo (sẽ bổ sung):** Triển khai EMR module và quy trình tiếp nhận bệnh nhân.
