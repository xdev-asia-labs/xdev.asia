---
id: 019f5a01-d000-7001-his0-000000001402
title: "Bài 38: Trang thiết bị y tế (TTB) — vòng đời & bảo trì"
slug: bai-38-trang-thiet-bi-y-te
description: >-
  Quản lý vòng đời máy móc y tế (CT, MRI, monitor, máy thở, dao mổ điện):
  nhập → bàn giao → bảo trì PM → hiệu chuẩn → khấu hao → thanh lý.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-38-trang-thiet-bi-y-te-banner.png
video_url: null
sort_order: 2
section_title: "Phần 14: Kho dược, TTB & Mua sắm"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Trang thiết bị y tế — vòng đời](/storage/uploads/2026/05/his/bai-38-trang-thiet-bi-y-te-banner.png)

## Vòng đời TTB

![Kỹ sư BME bảo trì máy CT có QR asset tag](/storage/uploads/2026/05/his/bai-38-trang-thiet-bi-y-te-workflow.png)


## Mục tiêu bài học

- Quản lý **vòng đời TTB y tế** (CMMS): nhập → đưa vào sử dụng → bảo trì → kiểm định → khấu hao → thanh lý.
- Tích hợp HIS với module CMMS (BMET — Biomedical Engineering Team) cho lịch bảo trì PM (Preventive Maintenance) và sự cố CM (Corrective Maintenance).
- Tuân thủ **Nghị định 98/2021** + **NĐ 07/2023** + **NĐ 96/2023/NĐ-CP** + cập nhật 2025 — quản lý TTB y tế.
- Quản lý kiểm định/hiệu chuẩn theo **Thông tư 33/2020/TT-BYT** và TT 06/2022 (sửa đổi).
- Theo dõi **uptime** TTB ảnh hưởng dịch vụ (CT, MRI, máy thận nhân tạo, máy thở).

## Bối cảnh: TTB hỏng = doanh thu rơi tự do

- 1 máy CT 64 lát cắt giá ~15-25 tỉ; 1 ngày dừng = mất ~50-100 ca = 30-50 triệu doanh thu.
- BV không có CMMS → bảo trì theo "khi nó hỏng" — RCA cho thấy 60% sự cố có thể prevent bằng PM định kỳ.
- Kiểm định không đúng hạn → dịch vụ bị BHXH xuất toán, có thể bị Thanh tra y tế xử phạt.
- TTB cấy ghép (đã học bài 26) cần truy vết BN trọn đời — đây là module riêng, gắn với CMMS qua serial.

## Cấu trúc dữ liệu CMMS

```sql
CREATE TABLE asset (
  asset_id        uuid PRIMARY KEY,
  asset_tag       varchar(30) UNIQUE,    -- QR/barcode dán trên máy
  asset_name      varchar(200),
  category        varchar(50),           -- IMAGING/MONITOR/VENT/DIALYSIS/...
  manufacturer    varchar(200),
  model           varchar(100),
  serial_no       varchar(100),
  purchase_date   date,
  installation_date date,
  warranty_until  date,
  vendor_id       uuid,
  cost            numeric,
  depreciation_method varchar(20),
  useful_life_years int,
  location_id     uuid,                   -- khoa/phòng
  status          varchar(20),            -- ACTIVE/MAINTENANCE/BROKEN/RETIRED
  risk_class      varchar(5)              -- A/B/C/D theo NĐ 98/2021
);

CREATE TABLE pm_schedule (
  schedule_id    uuid PRIMARY KEY,
  asset_id       uuid REFERENCES asset,
  pm_type        varchar(30),    -- DAILY/WEEKLY/MONTHLY/QUARTERLY/ANNUAL
  checklist_template uuid,
  next_due_date  date,
  responsible_team uuid
);

CREATE TABLE work_order (
  wo_id          uuid PRIMARY KEY,
  asset_id       uuid REFERENCES asset,
  wo_type        varchar(20),    -- PM/CM/CALIBRATION/INSTALLATION
  reported_by    uuid,
  reported_at    timestamptz,
  description    text,
  priority       varchar(10),    -- LOW/MEDIUM/HIGH/CRITICAL
  assigned_to    uuid,
  status         varchar(20),    -- OPEN/IN_PROGRESS/RESOLVED/CLOSED
  resolved_at    timestamptz,
  resolution_notes text,
  parts_used     jsonb,
  downtime_hours numeric,
  cost           numeric
);

CREATE TABLE calibration_log (
  cal_id         uuid PRIMARY KEY,
  asset_id       uuid,
  performed_by_org varchar(200),  -- đơn vị kiểm định
  performed_at   date,
  next_due_date  date,
  certificate_no varchar(50),
  certificate_uri text,
  result         varchar(20)      -- PASS/FAIL/CONDITIONAL
);
```

## Phân loại rủi ro TTB (theo NĐ 98/2021)

| Class | Mức rủi ro | Ví dụ | Tần suất kiểm tra |
| --- | --- | --- | --- |
| A | thấp | nhiệt kế, máy đo HA tay | hàng năm |
| B | trung bình | máy đo SpO2, máy điện tim | 6 tháng |
| C | cao | máy thở, monitor, máy thận | 3-6 tháng + kiểm định bắt buộc |
| D | rất cao | CT, MRI, máy xạ trị, máy gây mê | 3 tháng + kiểm định + IQ/OQ/PQ |

HIS phải **không cho phép tạo order** trên TTB có status BROKEN hoặc kiểm định quá hạn.

## Workflow CM (sự cố)

```
ĐD/KTV phát hiện máy hỏng
   │
   │ Quét QR asset → tạo WO trong HIS
   ▼
WO gửi BMET team
   │
   ▼
KTV BMET nhận, đánh giá → tự sửa OR gọi vendor
   │
   ▼
Sửa xong → kiểm tra functional → đóng WO + ghi parts/cost/downtime
   │
   ▼
Nếu liên quan an toàn BN (Recall, Adverse Event Device) → báo cáo Vụ TTB BYT
```

## Tích hợp với HIS lâm sàng

- Khi BS chỉ định CT → HIS check asset CT có ACTIVE không, có quá hạn calibration không → nếu không thì gợi ý máy khác hoặc cảnh báo.
- Khi WO tạo cho asset → các order đã đặt được tự reschedule.
- Báo cáo uptime/downtime hàng tuần cho ban giám đốc.

## Kiểm định/hiệu chuẩn bắt buộc

- TT 33/2020/TT-BYT (sửa đổi TT 06/2022) liệt kê danh mục TTB phải kiểm định.
- Hết hạn kiểm định = không được dùng = BHYT từ chối thanh toán dịch vụ chạy trên máy đó.
- HIS cảnh báo trước 60-30-7 ngày trước hạn calibration.

## Sai lầm thường gặp

1. Asset register Excel song song với HIS → không khớp khi thanh tra.
2. Không dán QR/barcode → không thể quét tạo WO nhanh.
3. PM theo "trí nhớ" KTV → bỏ sót → tăng tỉ lệ hỏng.
4. Không kết nối WO với HIS lâm sàng → BS vẫn order trên máy hỏng.
5. Không lưu parts cost & downtime → không tính được TCO máy.
6. Quá hạn calibration vẫn dùng → BHXH xuất toán, có nguy cơ bị phạt.

## Output / Deliverables

- Asset register tích hợp với MPI khoa.
- PM schedule + calendar.
- Workflow CM với mobile app cho KTV.
- Calibration tracker với cảnh báo.
- Báo cáo TCO TTB + uptime/downtime.
- Báo cáo NĐ 98/2021 cho cơ quan QL.

## UAT checklist

- [ ] Quét QR máy hỏng → tạo WO trong < 30 giây.
- [ ] PM trễ > 7 ngày → cảnh báo trưởng BMET.
- [ ] Calibration hết hạn → BS không tạo được order trên máy đó.
- [ ] Báo cáo uptime tự sinh hàng tuần.
- [ ] Recall device từ vendor → tra được list BN/encounter dùng máy đó.

## KPI

| Chỉ số | Mục tiêu |
| --- | --- |
| % asset có dán QR | 100% |
| % PM hoàn thành đúng hạn | ≥ 95% |
| Uptime TTB class C/D | ≥ 95% |
| MTTR (Mean Time To Repair) | ≤ 24h cho C, ≤ 48h cho D |
| Calibration hết hạn vẫn dùng | 0 |

## Cơ sở pháp lý 2026

- **Luật KCB 15/2023/QH15** — Điều 49-50.
- **Nghị định 98/2021/NĐ-CP** + **NĐ 07/2023** + **NĐ 96/2023** — quản lý TTB.
- **Thông tư 33/2020/TT-BYT** + **TT 06/2022/TT-BYT** + sửa đổi 2024 — kiểm định/hiệu chuẩn.
- **Thông tư 39/2018/TT-BYT** — định mức kinh tế-kỹ thuật.
- **Quyết định 4068/QĐ-BYT/2021** — thiết kế phòng mổ + TTB phụ trợ.
- **Luật Đo lường 11/2011/QH13** + sửa đổi 2024 — kiểm định.
- **WHO Medical Device Management** — tham chiếu thực hành tốt quốc tế.
