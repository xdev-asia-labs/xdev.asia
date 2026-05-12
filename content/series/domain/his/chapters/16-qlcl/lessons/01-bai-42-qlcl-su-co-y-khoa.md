---
id: 019f5a01-d000-7001-his0-000000001601
title: "Bài 42: Quản lý chất lượng (QLCL) — sự cố y khoa & QA"
slug: bai-42-qlcl-su-co-y-khoa
description: >-
  Bộ tiêu chí chất lượng BV của BYT, quy trình báo cáo sự cố y khoa
  (TT 43/2018), root cause analysis, kiểm soát nhiễm khuẩn (KSNK).
duration_minutes: 45
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-42-qlcl-su-co-y-khoa-banner.png
video_url: null
sort_order: 1
section_title: "Phần 16: Quản lý chất lượng"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![QLCL — sự cố y khoa NC1–NC5 & RCA](/storage/uploads/2026/05/his/bai-42-qlcl-su-co-y-khoa-banner.png)

## Bộ tiêu chí chất lượng BV

![Tổ QLCL phân tích RCA bằng fishbone diagram](/storage/uploads/2026/05/his/bai-42-qlcl-su-co-y-khoa-workflow.png)


Bộ Y tế ban hành **83 tiêu chí chất lượng** (Quyết định 6858/QĐ-BYT) chia 5 nhóm:

A. Hướng đến người bệnh
B. Phát triển nguồn nhân lực
C. Hoạt động chuyên môn
D. Hoạt động cải tiến
E. Tiêu chí đặc thù

Mỗi tiêu chí 5 mức (1–5). HIS hỗ trợ:

- Lưu trữ minh chứng.
- Tự động chấm điểm dựa trên dữ liệu khai thác từ EMR / log.
- Báo cáo mức A–E hàng quý / năm.

## Báo cáo sự cố y khoa (TT 43/2018)

Phân loại NC1–NC5 (theo WHO):

| Mức | Hậu quả |
| --- | --- |
| NC1 | Cận sự cố (near miss) — chưa tới BN |
| NC2 | Sự cố không gây hại |
| NC3 | Tổn hại nhẹ |
| NC4 | Tổn hại trung bình — kéo dài điều trị |
| NC5 | Tổn hại nặng — tàn phế / tử vong |

Quy trình:

```
[Phát hiện] → [Báo cáo điện tử (HIS)] → [QLCL nhận, phân loại]
        │
        ▼
[NC1-3: phân tích nội bộ — 1 tuần]
[NC4-5: RCA — 1-3 tháng + báo Sở/BYT]
        │
        ▼
[Hành động khắc phục] → [Theo dõi tái diễn]
```

## RCA — Root Cause Analysis

Công cụ phổ biến:

- **5 Whys** — hỏi "tại sao" 5 lần.
- **Fishbone (Ishikawa)** — chia nhánh nhân lực / quy trình / thiết bị / môi trường.
- **Swiss cheese model** — nhiều lớp phòng vệ thủng cùng lúc.

Kết quả: hành động khắc phục có người chịu trách nhiệm + deadline.

## KPI chất lượng

| KPI | Mục tiêu |
| --- | --- |
| Tỷ lệ tử vong nội trú | Theo từng nhóm bệnh, so với benchmark |
| Tỷ lệ tái nhập viện 30 ngày | Càng thấp càng tốt |
| Tỷ lệ nhiễm khuẩn BV (HAI) | TT 16/2018 |
| Tỷ lệ té ngã, loét tỳ đè | Indicator điều dưỡng |
| Tỷ lệ hài lòng BN | Khảo sát |
| Tỷ lệ tuân thủ Time-out phòng mổ | ~100 % |

## Kiểm soát nhiễm khuẩn (KSNK)

Khoa KSNK:

- Giám sát nhiễm khuẩn BV (HAI surveillance).
- Quản lý kháng kháng sinh (xem ch.7 — bài 18).
- Kiểm soát tiệt khuẩn dụng cụ.
- Đào tạo vệ sinh tay.

HIS hỗ trợ:

- Tự động phát hiện ca HAI dựa trên kết quả vi sinh + ngày nằm viện.
- Dashboard tỷ lệ HAI theo khoa, theo loại (UTI catheter, viêm phổi máy thở…).
- Cảnh báo cách ly.

## Bài học vận hành

- Văn hoá báo cáo "không trừng phạt" — nếu sợ thì sẽ giấu, mất cơ hội học từ sai lầm.
- Sự cố NC4–NC5 phải có báo cáo gửi Bộ Y tế trong 24–72 giờ tuỳ mức.
- Lưu RCA + hành động khắc phục — kiểm tra lại sau 6 tháng để đo hiệu quả.

> **Bài tiếp theo:** Khảo sát hài lòng & quản lý phản ánh.
