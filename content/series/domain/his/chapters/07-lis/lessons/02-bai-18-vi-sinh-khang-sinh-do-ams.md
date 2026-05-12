---
id: 019f5a01-d000-7001-his0-000000000702
title: "Bài 18: Vi sinh, kháng sinh đồ & AMS"
slug: bai-18-vi-sinh-khang-sinh-do-ams
description: >-
  Quy trình vi sinh dài ngày, nhập kết quả nuôi cấy, kháng sinh đồ (AST),
  hỗ trợ chương trình quản lý kháng kháng sinh (Antimicrobial Stewardship).
duration_minutes: 50
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-18-vi-sinh-khang-sinh-do-ams-banner.png
video_url: null
sort_order: 2
section_title: "Phần 7: Xét nghiệm (LIS)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Vi sinh, kháng sinh đồ & AMS](/storage/uploads/2026/05/his/bai-18-vi-sinh-khang-sinh-do-ams-banner.png)

## Đặc thù vi sinh

![Đọc kháng sinh đồ S/I/R và dashboard AMS](/storage/uploads/2026/05/his/bai-18-vi-sinh-khang-sinh-do-ams-workflow.png)


- Thời gian dài (24 h–7 ngày).
- Kết quả nhiều bước: soi → nuôi cấy → định danh → kháng sinh đồ.
- Bệnh nhân có thể đã ra viện trước khi có kết quả cuối — HIS phải biết "đẩy" đến BS theo dõi tiếp.

## State machine

```
COLLECTED → SMEAR (soi) → CULTURE_INPROGRESS → ID_INPROGRESS →
ID_RESULTED → AST_INPROGRESS → AST_RESULTED → FINAL → RELEASED
```

Mỗi chuyển trạng thái → hệ thống đẩy **báo cáo trung gian** (preliminary) về EMR — BS có thể đổi kháng sinh sớm.

## Cấu trúc kết quả nuôi cấy

```
Specimen: Đờm (sputum)
Smear (Gram): Cầu khuẩn Gram (+) ++
Culture day 2:
  - Streptococcus pneumoniae ++
  - Staphylococcus aureus +
AST (Streptococcus pneumoniae):
  Penicillin   : S (MIC ≤ 0.06)
  Erythromycin : R
  Levofloxacin : S
```

S/I/R theo CLSI (Mỹ) hoặc EUCAST (Châu Âu) — HIS phải khai báo bộ chuẩn nào đang dùng.

## Hỗ trợ AMS (Antimicrobial Stewardship)

HIS cung cấp dashboard cho dược sĩ lâm sàng & BS truyền nhiễm:

- Tỷ lệ đề kháng từng vi khuẩn (antibiogram theo khoa, theo BV).
- Cảnh báo BS đang dùng KS không phù hợp với AST.
- Theo dõi DDD/100 ngày giường (chỉ số dùng kháng sinh chuẩn WHO).
- Báo cáo VRE, MRSA, ESBL, CRE (vi khuẩn kháng đa thuốc).

## Thông báo dịch & cảnh báo nhiễm khuẩn BV (HAI)

- Khi phát hiện chùm ca cùng vi khuẩn / cùng khoa trong 7 ngày → cảnh báo Khoa Kiểm soát nhiễm khuẩn.
- Đánh dấu BN nhiễm khuẩn BV để cách ly và báo cáo TT 16/2018.

## Bệnh truyền nhiễm phải khai báo

Khi vi sinh phát hiện tác nhân nhóm A (Cholera, dịch hạch, COVID-19...) → HIS:

- Sinh báo cáo CDC tự động.
- Cảnh báo BS không cho ra viện chưa cách ly.
- Chuyển sang khoa truyền nhiễm.

## Bài học vận hành

- KQ vi sinh **không in 1 lần xong** — phải có khái niệm **"phiên bản KQ"** (preliminary v1, v2, final).
- Bảng vi khuẩn nội bộ map về **mã chuẩn (LOINC + SNOMED)** phục vụ liên thông.
- Hợp tác chặt với Khoa KSNK & Dược lâm sàng — họ là người dùng chính của báo cáo AMS.

> **Bài tiếp theo:** RIS / PACS — chẩn đoán hình ảnh.
