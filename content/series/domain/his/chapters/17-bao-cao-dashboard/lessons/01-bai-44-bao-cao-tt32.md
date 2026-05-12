---
id: 019f5a01-d000-7001-his0-000000001701
title: "Bài 44: Báo cáo Bộ Y tế — TT 32/2023 & XML thống kê"
slug: bai-44-bao-cao-tt32
description: >-
  Hệ thống báo cáo y tế cơ sở theo TT 32/2023, các bộ XML phải gửi định kỳ
  (KCB, dược, dịch tễ, tử vong, dân số…) và lộ trình điện tử hoá báo cáo.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-44-bao-cao-tt32-banner.png
video_url: null
sort_order: 1
section_title: "Phần 17: Báo cáo, Thống kê & Dashboard"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Báo cáo Bộ Y tế theo TT 32/2023](/storage/uploads/2026/05/his/bai-44-bao-cao-tt32-banner.png)

## Khung pháp lý

![Đẩy XML báo cáo lên cổng Bộ Y tế](/storage/uploads/2026/05/his/bai-44-bao-cao-tt32-workflow.png)


## Mục tiêu bài học

- Triển khai bộ báo cáo thống kê BV theo **Thông tư 37/2019/TT-BYT** (sửa đổi **TT 19/2024/TT-BYT**) và bộ chỉ số TT 32/2023.
- Sinh báo cáo định kỳ: **ngày, tuần, tháng, quý, năm** cho Sở YT và BYT.
- Tự sinh XML/Excel theo cấu trúc Cục KCB / Cục QLKCB / Cục YTDP yêu cầu.
- Đẩy báo cáo qua **Cổng thống kê y tế** (statyte.byt.gov.vn) hoặc kênh điện tử khác.
- Đảm bảo dữ liệu báo cáo khớp dữ liệu lâm sàng — tránh "1 BV, 2 con số".

## Bối cảnh

- Báo cáo BYT là gánh nặng truyền thống của BV — phòng KHTH thường tổng hợp tay từ Excel các khoa.
- BYT chuyển dần sang **báo cáo điện tử bắt buộc** từ 2023 — không nộp hoặc nộp sai có thể bị xử phạt hành chính.
- Số liệu báo cáo khác số liệu HIS → bị BYT yêu cầu giải trình.
- Báo cáo bệnh truyền nhiễm (TT 54/2015 sửa đổi 2024) cần realtime hoặc trong 24-48h.

## Các loại báo cáo định kỳ

| Mã | Báo cáo | Tần suất | Cơ quan nhận |
| --- | --- | --- | --- |
| BC HD-1 | Hoạt động BV (số khám, nội trú, PT, tử vong) | tháng | Cục QLKCB |
| BC HD-2 | Bệnh, tử vong theo ICD-10 | tháng | Cục QLKCB |
| BC HD-3 | Nhân lực | quý | Vụ TCCB |
| BC HD-4 | Tài chính + giường | quý | Cục QLKCB + Vụ KHTC |
| BC TN | Bệnh truyền nhiễm theo ngày/tuần | hàng ngày | Cục YTDP |
| BC AEFI | Phản ứng tiêm chủng | khi xảy ra | Cục YTDP |
| BC ADR | Phản ứng có hại của thuốc | khi xảy ra | Trung tâm DI&ADR |
| BC SKSS | Sức khoẻ sinh sản | quý | Vụ SKSS |
| BC SK Trẻ em | Tử vong sơ sinh, tiêm chủng | quý | Vụ BMTE |
| BC HIV | Quản lý HIV | quý | Cục Phòng chống HIV |
| BC LK | Lao, sốt rét | quý | Cục Phòng chống bệnh truyền nhiễm |

## Workflow

```
DỮ LIỆU LÂM SÀNG TRONG HIS
   │
   ▼
ETL/data warehouse — clean, dedup, calculate KPI
   │
   ▼
Generator báo cáo theo template BYT
   │
   ▼
Phòng KHTH review + duyệt → ký số trưởng phòng
   │
   ▼
Đẩy Cổng BYT/Sở YT (REST/SOAP/upload)
   │
   ▼
Lưu lại bản gốc + acknowledgement
```

## Quan trọng: Single Source of Truth

- Số khám, nội trú, tử vong, PT phải lấy **từ HIS lâm sàng**, không nhập lại tay.
- Định nghĩa rõ: "1 lượt khám" = 1 encounter OPD đã CLOSED + có chẩn đoán + có phí.
- Định nghĩa "tử vong tại BV" = encounter có outcome=DEATH; không tính BN nặng xin về tử vong tại nhà.
- Mỗi metric có **business rule** documented + version — đổi rule cần ghi changelog.

## Data warehouse (DWH) tối thiểu

```sql
-- Fact table khám-điều trị
CREATE TABLE fact_encounter (
  encounter_id uuid,
  date_id      int,           -- YYYYMMDD
  facility_id  uuid,
  department_id uuid,
  encounter_type varchar(20), -- OPD/IPD/ER
  age_band     varchar(10),
  gender       varchar(1),
  insurance_type varchar(20),
  primary_dx_icd varchar(10),
  total_cost   numeric,
  bhyt_cost    numeric,
  los_days     int,
  outcome      varchar(20)
);

-- Dim table
CREATE TABLE dim_date (...);
CREATE TABLE dim_facility (...);
CREATE TABLE dim_department (...);
CREATE TABLE dim_disease_icd (...);
```

ETL có thể dùng Airbyte/dbt/Apache Airflow + Postgres/ClickHouse.

## Sai lầm thường gặp

1. Phòng KHTH tổng hợp tay → chậm + sai.
2. Nguồn dữ liệu khác nhau cho từng báo cáo (HIS, kế toán, Excel khoa) → số liệu vênh.
3. Định nghĩa metric không có document → mỗi BS hiểu một kiểu.
4. Đẩy báo cáo TN trễ > 48h → BYT phạt.
5. Không lưu acknowledgement → tranh chấp khi BYT nói "chưa nhận".
6. Báo cáo XML không pass schema → bị reject hàng loạt.

## Output / Deliverables

- Data warehouse + ETL pipeline.
- Generator báo cáo BYT theo template.
- Connector các Cổng BYT/Sở YT.
- Dashboard "Báo cáo đã nộp / chưa nộp / chậm".
- Document business rule cho từng metric.

## UAT checklist

- [ ] Đối soát "số khám tháng" giữa HIS lâm sàng vs DWH → khớp 100%.
- [ ] BC HD-1 generated tự động → ký số → đẩy cổng → nhận ack.
- [ ] BC TN ca COVID/sốt xuất huyết phát hiện → đẩy trong 24h.
- [ ] Schema validation pass tất cả báo cáo.
- [ ] Có changelog khi sửa business rule.

## KPI

| Chỉ số | Mục tiêu |
| --- | --- |
| % báo cáo nộp đúng hạn | 100% |
| Số lần BYT yêu cầu giải trình | ≤ 1/năm |
| Chênh lệch HIS vs báo cáo | 0 |
| Thời gian generate báo cáo | < 1h |

## Cơ sở pháp lý 2026

- **Luật Thống kê 89/2015/QH13** + sửa đổi **01/2021/QH15**.
- **Thông tư 37/2019/TT-BYT** + **TT 19/2024/TT-BYT** sửa đổi — chế độ báo cáo thống kê y tế.
- **Thông tư 32/2023/TT-BYT** — bộ chỉ số chất lượng KCB.
- **Thông tư 54/2015/TT-BYT** + sửa đổi 2024 — báo cáo bệnh truyền nhiễm.
- **Thông tư 51/2017/TT-BYT** + sửa đổi — báo cáo ADR.
- **Thông tư 24/2018/TT-BYT** — báo cáo AEFI.
- **Quyết định 130/QĐ-BYT/2023** — chuẩn dữ liệu BHYT (cũng dùng cho báo cáo).
