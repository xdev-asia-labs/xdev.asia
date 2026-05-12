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


## Mục tiêu bài học

- Thiết kế dashboard 3 cấp: **Operational** (realtime), **Tactical** (tuần/tháng), **Strategic** (quý/năm).
- Áp dụng **Balanced Scorecard** cho BV: 4 perspectives — Tài chính, BN, Quy trình nội bộ, Học tập & Phát triển.
- Lựa chọn công cụ BI: PowerBI / Tableau / Apache Superset / Metabase / Looker.
- Đảm bảo "single source of truth" và data quality cho dashboard.
- Phổ biến dashboard với role-based access cho từng cấp lãnh đạo.

## Bối cảnh

- Giám đốc BV cần xem realtime: số BN ER, OR utilization, ICU bed, doanh thu hôm nay.
- Trưởng khoa cần KPI khoa hằng tuần.
- Hội đồng quản trị BV tư cần báo cáo strategic hằng quý.
- Truyền thống "báo cáo Excel cuối tháng" không còn phù hợp.

## 3 cấp dashboard

| Cấp | Người dùng | Ví dụ widget | Tần suất refresh |
| --- | --- | --- | --- |
| Operational | trực ER, trực ICU, NOC | bed status, OR delay, queue ER, downtime alert | realtime/15s |
| Tactical | trưởng khoa, phòng QLCL | doanh thu khoa tuần, % HSBA đầy đủ, sự cố | hàng giờ |
| Strategic | giám đốc, HĐQT | tổng doanh thu, CR, biên LN, market share, EMRAM stage | hàng ngày |

## Balanced Scorecard cho BV

| Perspective | KPI ví dụ |
| --- | --- |
| Tài chính | doanh thu/giường, biên LN, cost per case, days in AR |
| Bệnh nhân | hài lòng, NPS, complaint rate, re-admission |
| Quy trình | LOS trung bình, OR utilization, ER door-to-doc, % HSBA đầy đủ |
| Học tập & Phát triển | NV được đào tạo, scientific publications, EMR adoption |

## Kiến trúc

```
HIS / EMR / Pharmacy / LIS / RIS / Billing
       │
       ▼  CDC (Debezium) / batch ETL
   Data Lake (S3/MinIO)
       │
       ▼ dbt / Airflow
   Data Warehouse (Postgres / ClickHouse / BigQuery)
       │
       ▼
   Semantic Layer (LookML / Cube.js / dbt metrics)
       │
       ▼
   BI Tool (PowerBI / Superset / Metabase)
       │
       ▼
   Role-based dashboard cho user
```

## Sai lầm thường gặp

1. Dashboard show số "đẹp" mà BS/ĐD không tin → bỏ.
2. Mỗi phòng tự build dashboard với data nguồn riêng → 5 con số khác nhau cho 1 KPI.
3. Refresh hàng ngày khi cần realtime → giám đốc không thấy crisis ER.
4. Không có ownership KPI → không ai chịu trách nhiệm.
5. Dùng Excel làm "BI" → không scale.
6. Dashboard quá nhiều widget → giám đốc không đọc.

## Output / Deliverables

- DWH + semantic layer.
- 3 dashboard chuẩn (Op/Tactical/Strategic).
- Role-based access.
- Data quality monitor (Great Expectations).
- Quy trình "đề xuất KPI mới" có owner + định nghĩa.

## UAT checklist

- [ ] Operational: ER queue refresh < 30s.
- [ ] Strategic: KPI tổng hợp khớp Hội đồng QT báo cáo cuối quý.
- [ ] Role-based: BS không xem được lương; trưởng khoa không xem khoa khác.
- [ ] Mỗi KPI có popup "định nghĩa + cách tính + owner".
- [ ] Data freshness lag < 1h cho tactical.

## KPI (ironically, KPI cho hệ thống dashboard)

| Chỉ số | Mục tiêu |
| --- | --- |
| % KPI có owner | 100% |
| Data freshness lag | ≤ 15 phút (op), ≤ 1h (tac), ≤ 24h (strat) |
| Số dashboard active | ≥ 5 cho mỗi cấp |
| User adoption (giám đốc xem ≥ 1 lần/tuần) | 100% |

## Cơ sở pháp lý 2026

- **Luật KCB 15/2023/QH15**.
- **Quyết định 6858/QĐ-BYT/2016** — Bộ tiêu chí 83.
- **Quyết định 4888/QĐ-BYT/2019** — ứng dụng CNTT y tế.
- **Quyết định 06/QĐ-TTg/2022** — Đề án 06 (chia sẻ dữ liệu y tế).
- **Nghị định 13/2023/NĐ-CP** — bảo vệ DLCN trong dashboard.
- **Luật An ninh mạng 24/2018**.
