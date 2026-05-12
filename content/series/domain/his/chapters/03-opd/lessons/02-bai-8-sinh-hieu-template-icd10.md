---
id: 019f5a01-d000-7001-his0-000000000302
title: "Bài 8: Sinh hiệu, template hỏi bệnh & ICD-10"
slug: bai-8-sinh-hieu-template-icd10
description: >-
  Cách HIS tổ chức nhập sinh hiệu, template SOAP theo chuyên khoa, gợi ý
  ICD-10 thông minh, snippets / phrases để bác sĩ ghi chép nhanh & chuẩn.
duration_minutes: 50
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-8-sinh-hieu-template-icd10-banner.png
video_url: null
sort_order: 2
section_title: "Phần 3: Khám ngoại trú (OPD)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Sinh hiệu, template khám & ICD-10](/storage/uploads/2026/05/his/bai-8-sinh-hieu-template-icd10-banner.png)

## Sinh hiệu (Vital Signs)

![Đo sinh hiệu, ghi chú template, gắn mã ICD-10](/storage/uploads/2026/05/his/bai-8-sinh-hieu-template-icd10-workflow.png)


| Trường | Đơn vị | Validation |
| --- | --- | --- |
| Nhiệt độ | °C | 30–43 |
| Mạch | l/p | 30–220 |
| Huyết áp tâm thu / trương | mmHg | 50–260 / 30–160 |
| Nhịp thở | l/p | 5–60 |
| SpO₂ | % | 50–100 |
| Cân nặng / Chiều cao | kg / cm | tính BMI tự động |

Quy tắc:

- Bắt buộc nhập sinh hiệu trước khi `IN_EXAM`.
- Cảnh báo **đỏ** nếu giá trị nằm ngoài ngưỡng (HA > 180/110, SpO₂ < 90 → cảnh báo nguy hiểm, gợi ý chuyển cấp cứu).
- Sinh hiệu lưu kèm `taken_at`, `taken_by` — phục vụ kiểm toán.

## Template SOAP

HIS ngoại trú nên hỗ trợ template **SOAP** theo chuyên khoa:

- **S**ubjective — than phiền, tiền sử
- **O**bjective — sinh hiệu, khám
- **A**ssessment — chẩn đoán (ICD-10)
- **P**lan — điều trị, CLS, hẹn

Mỗi chuyên khoa có biến thể riêng (Nội: chú trọng cơ quan; Da liễu: vị trí, hình thái tổn thương; Sản: PARA, tuổi thai…).

## Snippets / Phrases

Cho phép bác sĩ định nghĩa **macro** cá nhân:

```
.vmtinh   → "Họng đỏ, amydal sưng độ II, không giả mạc."
.cao_ha   → "Tăng huyết áp giai đoạn II — khuyến cáo đo HA tại nhà 2 lần/ngày."
```

Lợi ích: chuẩn hoá ngôn ngữ, giảm lỗi chính tả, tăng tốc 3–5 lần.

## ICD-10: tra cứu thông minh

Bác sĩ ngại ICD-10 vì khó nhớ. HIS cần:

1. **Search-as-you-type** theo tiếng Việt + tiếng Anh + mã.
2. Ưu tiên gợi ý **theo chuyên khoa** (Tim mạch hay dùng I10, I25…).
3. **Most-recent** — top 20 mã đã dùng của chính bác sĩ đó.
4. **Multi-axis** — bệnh chính + bệnh kèm + biến chứng (cho EMR nội trú).
5. Cảnh báo **mã không hợp BHYT** (ví dụ mã chương Z không thanh toán ngoại trú một số tình huống).

## Liên kết ICD ↔ Service

- ICD `J20` (viêm phế quản) → gợi ý **dịch vụ XN** CRP, công thức máu, X-quang ngực.
- ICD `E11` (đái tháo đường týp 2) → gợi ý HbA1c, glucose máu, lipid máu.

Bộ rules này gọi là **clinical pathway nhẹ** — vừa nhanh, vừa đảm bảo BHYT chấp nhận.

## Chuẩn dữ liệu

- **ICD-10 WHO** (Bộ Y tế Việt Nam đã địa hoá).
- **ICD-10-CM** (Mỹ) — cho khách hàng quốc tế.
- Gắn **SNOMED-CT** ở mức tuỳ chọn để tích hợp với EMR quốc tế.
- Đơn vị đo theo **UCUM** (mg, mmol/L…).

> **Bài tiếp theo:** Khám đa chuyên khoa — chuyển khoa & hội chẩn ngoại trú.
