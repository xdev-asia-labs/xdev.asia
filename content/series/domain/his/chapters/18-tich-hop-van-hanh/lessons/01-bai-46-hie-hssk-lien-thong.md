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


## Mục tiêu bài học

- Hiểu khái niệm **HIE** (Health Information Exchange) và lộ trình **HSSK điện tử Việt Nam** (Hồ sơ sức khoẻ).
- Tích hợp HIS với **Cổng kết nối liên thông quốc gia** theo Quyết định 5454/QĐ-BYT/2020 và lộ trình QĐ 06/QĐ-TTg/2022.
- Triển khai chuẩn **FHIR R4** cho liên thông Bundle EMR (Patient + Encounter + Observation + MedicationRequest + Immunization).
- Xử lý đồng thuận BN (consent) khi chia sẻ dữ liệu xuyên cơ sở theo NĐ 13/2023.
- Đảm bảo bảo mật: TLS, OAuth2/SMART-on-FHIR, OIDC với VNeID.

## Bối cảnh

- VN có 14.000+ cơ sở KCB; mỗi BV một HIS, không liên thông → BN tái khám ở BV khác phải nói lại + làm lại CLS.
- QĐ 06/QĐ-TTg/2022 (Đề án 06) yêu cầu liên thông dữ liệu y tế với Cơ sở dữ liệu quốc gia về dân cư qua VNeID.
- 2024-2026: BYT phát triển **HSSK điện tử cá nhân** trên VNeID Health — BN xem được lịch sử KCB, đơn thuốc, tiêm chủng, xét nghiệm.
- Đến 2027 mục tiêu 80% BV liên thông HSSK; đến 2030 toàn quốc.

## Kiến trúc HIE

```
        ┌─────────────────────────────┐
        │  Cổng tích hợp BYT (HIE)    │
        │  - FHIR Server               │
        │  - Master Patient Index QG  │
        │  - Consent Service           │
        │  - Audit                     │
        └─────────────────────────────┘
                │              │
        ┌───────┴────┐    ┌────┴───────┐
        │  HSSK     │    │  VNeID Health│
        │  điện tử  │    │  (BN)        │
        └───────────┘    └──────────────┘
                ▲              ▲
        │ FHIR Bundle  │ Read consent
        │              │
   ┌────┴──────┐  ┌────┴─────────┐
   │  HIS BV1  │  │  HIS BV2     │ ...
   │  HMU FHIR │  │  HMU FHIR    │
   └───────────┘  └──────────────┘
```

## Resources FHIR cốt lõi liên thông

- **Patient** — định danh + CCCD + nhóm máu + dị ứng.
- **Encounter** — đợt KCB.
- **Condition** — chẩn đoán (ICD-10).
- **Observation** — kết quả CLS.
- **MedicationRequest / MedicationDispense** — đơn thuốc.
- **Immunization** — tiêm chủng.
- **DiagnosticReport** — báo cáo CĐHA / GPB.
- **AllergyIntolerance** — dị ứng.
- **Procedure** — PT/TT.
- **Composition** — tóm tắt HSBA (CCDA-like).

## Master Patient Index (MPI) Quốc gia

Được xây dựng dựa trên CCCD/VNeID:
- Mỗi BN có **mã định danh y tế cá nhân quốc gia** (BHYT ID, VNeID person ID).
- BV gửi resource Patient kèm CCCD → MPI return person_id chuẩn.
- Tránh trùng lặp BN giữa các BV (đã học bài 4).

## Consent — đồng thuận BN

Theo NĐ 13/2023:
- Mỗi resource gửi đi cần **legal basis** (hợp đồng KCB, đồng thuận, chỉ thị y tế).
- BN có thể **opt-in/opt-out** cho từng loại dữ liệu (vd: dữ liệu HIV cần opt-in riêng).
- HIS lưu consent record ký số BN (qua VNeID).
- Khi BN rút consent → HIS phải dừng đẩy + thông báo các BV đã nhận để xoá local copy.

## Workflow đẩy data lên HSSK

```
Encounter CLOSED → Generator FHIR Bundle (Composition)
   │
   ▼
Check consent BN cho từng resource
   │
   ▼
POST /Bundle lên HIE Gateway (OAuth2 + mTLS)
   │
   ▼
HIE Gateway validate + persist + log audit
   │
   ▼
Return Bundle.entry[*].response 201/200
   │
   ▼
HIS lưu sync_status + retry on failure
```

## Bảo mật

- mTLS giữa HIS BV và HIE Gateway.
- OAuth2 client credentials cho machine-to-machine.
- SMART-on-FHIR cho ứng dụng BS xem dữ liệu xuyên BV.
- OIDC với VNeID cho BN.
- Mã hoá at-rest (AES-256) tại HSSK central.
- Audit log tập trung — BN có thể xem ai đã access dữ liệu của mình.

## Sai lầm thường gặp

1. Đẩy data không có consent → vi phạm NĐ 13/2023, có thể bị phạt nặng.
2. Sai mã ICD/ATC → liên thông được nhưng BV nhận không hiểu.
3. Không retry khi failed → mất data ở HSSK.
4. Không tham gia MPI quốc gia → mỗi BV có ID riêng, BN tái khám không matching.
5. Truyền dữ liệu HIV/tâm thần không opt-in riêng → vi phạm pháp lý nặng.
6. Không có đối soát định kỳ với HSSK → drift dữ liệu.

## Output / Deliverables

- FHIR endpoint nội bộ (R4 + extension VN).
- Connector HIE Gateway BYT.
- Module consent quản lý đồng thuận BN.
- Reconciliation tool đối soát HIS ↔ HSSK.
- Audit log truy cập xuyên BV cung cấp BN.

## UAT checklist

- [ ] Encounter close → bundle FHIR đẩy thành công, ack 201.
- [ ] BN opt-out HIV → resource Condition (HIV) không đẩy.
- [ ] BN xem trên VNeID Health thấy đầy đủ encounter + thuốc + tiêm chủng.
- [ ] BV khác query Patient bằng CCCD → trả về metadata + link tài liệu.
- [ ] Consent withdraw → HIS dừng đẩy + log.

## KPI

| Chỉ số | Mục tiêu |
| --- | --- |
| % encounter sync HSSK trong 24h | ≥ 95% |
| % BN có consent rõ ràng | 100% |
| Latency POST bundle | P95 ≤ 2s |
| Sự cố vi phạm DLCN | 0 |
| % BV BN tái khám có liên thông | tăng theo lộ trình |

## Cơ sở pháp lý 2026

- **Quyết định 06/QĐ-TTg/2022** — Đề án 06 (CSDLQG dân cư + dịch vụ công).
- **Quyết định 5454/QĐ-BYT/2020** — kết nối liên thông phần mềm KCB.
- **Quyết định 4888/QĐ-BYT/2019** — Đề án ứng dụng CNTT.
- **Luật KCB 15/2023/QH15** — Điều 110 ứng dụng CNTT.
- **Luật Giao dịch điện tử 20/2023/QH15**.
- **Nghị định 13/2023/NĐ-CP** — bảo vệ DLCN.
- **Nghị định 53/2022/NĐ-CP** + **NĐ 23/2025** — chi tiết Luật An ninh mạng + chữ ký số.
- **HL7 FHIR R4** — chuẩn quốc tế.
- **IHE XDS / XCA** — chuẩn liên thông tài liệu (tham chiếu).
