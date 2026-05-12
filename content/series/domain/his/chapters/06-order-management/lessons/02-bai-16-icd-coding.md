---
id: 019f5a01-d000-7001-his0-000000000602
title: "Bài 16: ICD-10/ICD-11, mã hoá bệnh tật & báo cáo dịch tễ"
slug: bai-16-icd-coding
description: >-
  Cách HIS quản lý bộ mã ICD (chính, phụ, biến chứng), DRG, gắn mã đúng để
  BHYT chấp nhận và phục vụ báo cáo dịch tễ Bộ Y tế / WHO.
duration_minutes: 45
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-16-icd-coding-banner.png
video_url: null
sort_order: 2
section_title: "Phần 6: Order Management & ICD coding"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![ICD-10/11 coding & vai trò clinical coder](/storage/uploads/2026/05/his/bai-16-icd-coding-banner.png)

## Vai trò của ICD

![Coder phân loại chẩn đoán theo cây mã ICD](/storage/uploads/2026/05/his/bai-16-icd-coding-workflow.png)


ICD (**International Classification of Diseases**) phục vụ 4 mục đích trong HIS:

1. **Lâm sàng** — chuẩn hoá chẩn đoán, hỗ trợ ra quyết định.
2. **BHYT** — căn cứ thanh toán dịch vụ tương ứng chẩn đoán.
3. **Dịch tễ** — báo cáo Bộ Y tế, WHO.
4. **DRG** — gom nhóm chẩn đoán liên quan để khoán chi phí (thí điểm tại Việt Nam).

## ICD-10 vs ICD-11

| Tiêu chí | ICD-10 | ICD-11 |
| --- | --- | --- |
| Số mã | ~14k | ~55k |
| Cấu trúc | Chương — block — mã | Foundation linh hoạt, multi-axis |
| Hỗ trợ y học cổ truyền | Hạn chế | Có chương riêng |
| Tình trạng VN | Đang dùng (TT 46) | Chuẩn bị áp dụng |

HIS nên thiết kế **mã hoá** để dễ chuyển đổi ICD-10 ↔ ICD-11 khi Bộ Y tế ban hành lộ trình.

## Cấu trúc chẩn đoán trong EMR

```
encounter.diagnoses[]
├── primary    : I10  — Tăng huyết áp vô căn
├── secondary  : E11  — Đái tháo đường týp 2
├── secondary  : E78.5 — Rối loạn lipid máu
└── complication: I50.9 — Suy tim không phân loại
```

Trong nội trú thường có thêm:

- **Bệnh chính lúc vào viện** (admission)
- **Bệnh chính lúc ra viện** (discharge — có thể khác)
- **Tai biến / biến chứng** (xem bài QLCL)

## Quy tắc mã hoá

1. **Mã chính phải có 1 và chỉ 1**, không nhập 2 mã chính.
2. **Mã chương Z** thường không thanh toán BHYT cho ngoại trú điều trị.
3. **Mã chương V/W/X/Y** (nguyên nhân ngoại sinh) phải đi kèm mã tổn thương cụ thể.
4. **Mã không xác định (.9)** dùng tạm — cảnh báo nếu dùng > 30 % tổng chẩn đoán → kém chất lượng coding.

## Liên kết Service ↔ ICD

HIS lưu bảng **rules** trả lời câu hỏi: dịch vụ X có hợp với chẩn đoán Y không?

```
HbA1c       hợp với chẩn đoán nhóm E10–E14
Siêu âm tim hợp với I00–I99
Nội soi DD  hợp với K20–K31, ...
```

Nếu mismatch, HIS cảnh báo BS nhưng vẫn cho qua khi có lý do — log lại để giải trình BHYT.

## DRG (gom nhóm chẩn đoán)

DRG = gói thanh toán theo nhóm bệnh, không theo từng dịch vụ. Bộ Y tế đang thí điểm. HIS cần:

- Gắn mã DRG tự động dựa trên ICD chính + thủ thuật chính + tuổi + giới + biến chứng.
- Tính chi phí thực tế vs chi phí gói → tính chỉ số CMI (Case Mix Index).

## Báo cáo dịch tễ

- Báo cáo bệnh truyền nhiễm theo TT 54/2015 — tự động phát hiện ICD nhóm A (nguy hiểm) và đẩy lên CDC.
- Báo cáo tử vong (Mortality) — ICD nguyên nhân chính tử vong gửi WHO.
- Báo cáo K (ung thư) — đẩy về registry ung thư quốc gia.

> **Bài tiếp theo:** LIS — kiến trúc & luồng xét nghiệm máu/nước tiểu.
