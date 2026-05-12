---
id: 019f5a01-d000-7001-his0-000000001702
title: "Bài 45: Dashboard quản trị & BI cho lãnh đạo BV"
slug: bai-45-dashboard-bi
description: >-
  Thiết kế dashboard cho Giám đốc, Trưởng khoa, QLCL: chỉ số hoạt động,
  tài chính, chất lượng, nhân lực — nguồn dữ liệu, tần suất refresh.
duration_minutes: 35
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-45-dashboard-bi-banner.png
video_url: null
sort_order: 2
section_title: "Phần 17: Báo cáo, Thống kê & Dashboard"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Dashboard BI cho lãnh đạo BV](/storage/uploads/2026/05/his/bai-45-dashboard-bi-banner.png)

## Phân tầng người dùng

![Giám đốc xem dashboard KPI hoạt động/tài chính/chất lượng](/storage/uploads/2026/05/his/bai-45-dashboard-bi-workflow.png)


| Cấp | Cần xem |
| --- | --- |
| Giám đốc | Doanh thu, công suất, chất lượng tổng |
| Phó GĐ chuyên môn | KPI lâm sàng theo khoa |
| Phó GĐ tài chính | Doanh thu, công nợ BHYT, BH tư |
| Trưởng khoa | KPI khoa mình |
| QLCL | Sự cố, hài lòng, HAI |
| KSNK | Vi sinh, kháng KS, cảnh báo |

## Chỉ số hoạt động chính

- Số lượt khám / nhập viện / mổ ngày-tuần-tháng (so cùng kỳ).
- Công suất giường (Bed Occupancy Rate).
- Average Length Of Stay (ALOS) theo khoa.
- TAT XN / CĐHA.
- Tỷ lệ tái nhập viện 30 ngày.

## Chỉ số tài chính

- Doanh thu theo nguồn (BHYT / dịch vụ / yêu cầu / BH tư).
- Công nợ BHYT theo tuổi nợ.
- Cost-to-revenue theo khoa.
- Tỷ lệ xuất toán BHYT.

## Chỉ số chất lượng

- Sự cố y khoa NC1–NC5.
- HAI rate.
- Mortality theo khoa.
- Hài lòng NPS.
- Tuân thủ checklist phòng mổ.

## Kiến trúc dữ liệu

```
HIS OLTP DB ─► CDC / ETL ─► Data Warehouse ─► BI (Power BI / Metabase / Superset)
                                       │
                                       └► Data Lake (lưu sự kiện chi tiết, ML)
```

- OLTP không nên truy vấn báo cáo nặng — tách Data Warehouse.
- Refresh: KPI vận hành near-realtime (5–15 phút), KPI tài chính ngày, KPI quản trị tuần.

## Nguyên tắc UI

- 1 trang ≤ 9 widget.
- Drill-down từ tổng → khoa → cá nhân.
- Filter dùng chung (kỳ thời gian, khoa, đối tượng BN).
- Mobile-friendly cho lãnh đạo.

## Bài học vận hành

- Chỉ số phải có **definition rõ ràng** — "tỷ lệ tái nhập viện" tính từ khi nào, loại trừ ai?
- Tránh dashboard "đẹp nhưng không ai dùng" — đồng phát triển với người dùng cuối.
- Đào tạo lãnh đạo cách đọc chỉ số y khoa (chuẩn hoá theo bệnh, theo dân số).

> **Bài tiếp theo:** Tích hợp HIE/HSSK, mobile app & vận hành 24/7.
