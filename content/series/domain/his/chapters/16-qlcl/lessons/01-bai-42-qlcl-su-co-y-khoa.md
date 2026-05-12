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


## Mục tiêu bài học

- Triển khai module **QLCL** (Quản lý chất lượng) trong HIS: bộ chỉ số chất lượng, sự cố y khoa, RCA.
- Tuân thủ **Bộ tiêu chí chất lượng BV Việt Nam** (QĐ 6858/QĐ-BYT/2016 + cập nhật 2024).
- Triển khai **Incident Reporting System** không trừng phạt theo nguyên tắc Just Culture.
- Phân tích RCA (Root Cause Analysis) bằng fishbone, 5-Whys, FMEA.
- Báo cáo sự cố nghiêm trọng (Sentinel Event) theo **Thông tư 43/2018/TT-BYT** (sửa đổi 2024).

## Bối cảnh

- VN còn thiếu văn hoá báo cáo sự cố — sợ trừng phạt nên giấu.
- Theo nghiên cứu, ~10% BN nhập viện gặp ít nhất 1 sự cố y khoa, một nửa có thể prevent.
- Bộ Y tế đẩy mạnh QLCL từ 2016 (Bộ 83 tiêu chí); BV phải tự chấm điểm + Sở YT/Bộ YT phúc tra.
- Sentinel Event (sự cố cực nghiêm trọng): mổ nhầm bên, BN tự tử trong viện, chết do truyền nhầm máu — phải báo cáo BYT trong 24h.

## Bộ tiêu chí chất lượng BV (83 tiêu chí, 5 mức)

5 phần A-E:
- A: Hướng tới người bệnh (19 TC).
- B: Phát triển nguồn nhân lực (14 TC).
- C: Hoạt động chuyên môn (35 TC).
- D: Hoạt động cải tiến chất lượng (11 TC).
- E: Tiêu chí đặc thù chuyên khoa (4 TC).

5 mức điểm 1-5; BV tự chấm + báo cáo Sở YT hằng năm.

## Module Incident Report trong HIS

```sql
CREATE TABLE incident (
  incident_id   uuid PRIMARY KEY,
  reported_at   timestamptz,
  reported_by   uuid,           -- ai báo (tên hoặc ẩn danh tuỳ chọn)
  occurred_at   timestamptz,
  location      varchar(100),
  patient_id    uuid,           -- nullable nếu ẩn danh BN
  category      varchar(50),    -- MEDICATION/SURGERY/FALL/INFECTION/EQUIPMENT/...
  severity      varchar(20),    -- NEAR_MISS/NO_HARM/MILD/MODERATE/SEVERE/DEATH
  description   text,
  immediate_action text,
  investigated_by uuid,
  rca_id        uuid,
  status        varchar(20),    -- REPORTED/ASSIGNED/INVESTIGATING/ACTIONED/CLOSED
  is_sentinel   boolean,
  reported_to_byt boolean
);

CREATE TABLE rca (
  rca_id        uuid PRIMARY KEY,
  incident_id   uuid REFERENCES incident,
  team_members  uuid[],
  fishbone_data jsonb,        -- 6M categories
  five_whys     jsonb,
  contributing_factors text[],
  root_cause    text,
  corrective_actions jsonb,    -- [{action, owner, due_date, status}]
  completed_at  timestamptz
);
```

Quy tắc Just Culture:
- Báo cáo có thể **ẩn danh** (HIS hash user_id).
- Chỉ phân tích, không kỷ luật trừ khi có hành vi cố ý hoặc reckless.
- Khuyến khích báo cáo Near Miss (suýt xảy ra) — học bài học không tốn ai.

## Workflow xử lý sự cố

```
PHÁT HIỆN → Báo cáo trong HIS (mobile app)
   │
   ▼
QLCL phân loại severity + category
   │
   ▼
Severity SEVERE/DEATH → Sentinel
   │
   ├─ Báo cáo BYT trong 24h (TT 43/2018)
   └─ RCA bắt buộc trong 45 ngày
   │
   ▼
Severity MILD/MODERATE → RCA tuỳ + biện pháp khắc phục
   │
   ▼
Theo dõi corrective action → đóng incident
   │
   ▼
Đăng tải bài học (lessons learned) ẩn danh cho toàn BV
```

## Bộ chỉ số chất lượng cần thu thập tự động

- **HAI** (Hospital-Acquired Infection): VAP, CAUTI, CLABSI, SSI rates.
- **Falls per 1000 patient-days**.
- **Pressure ulcer incidence**.
- **Medication error rate** (gồm ADE).
- **Re-admission rate 30 ngày**.
- **Mortality rate (HSMR)**.
- **OR-related: wrong site, retained item, mortality**.
- **Patient satisfaction** (đã có module bài 43).

HIS phải lấy số liệu **tự động** từ EMR thay vì điều dưỡng nhập tay (số liệu sẽ "đẹp" giả).

## Sai lầm thường gặp

1. Báo cáo sự cố trên giấy → tỉ lệ báo cáo thấp, mất dữ liệu.
2. Không có Just Culture → NV sợ báo cáo → mất bài học.
3. RCA dừng ở "lỗi cá nhân" thay vì hệ thống → vấn đề tái diễn.
4. Không track corrective action → action không thực hiện.
5. Sentinel không báo BYT → vi phạm TT 43/2018.
6. Chỉ số HAI, falls thu thập tay → không đáng tin.

## Output / Deliverables

- Module Incident Report mobile-friendly.
- Module RCA với fishbone/5-Whys template.
- Dashboard sự cố theo loại, theo khoa, theo tháng.
- API tự sinh báo cáo Sentinel cho BYT.
- Báo cáo Bộ tiêu chí 83 tự chấm điểm.

## UAT checklist

- [ ] Báo cáo ẩn danh từ mobile → vào hệ thống không lộ user.
- [ ] Sentinel → email BYT trong 24h.
- [ ] Corrective action quá hạn → cảnh báo trưởng QLCL.
- [ ] Dashboard cập nhật KPI realtime.
- [ ] Bài học tháng đăng intranet ẩn danh.

## KPI

| Chỉ số | Mục tiêu |
| --- | --- |
| Số sự cố báo cáo / 1000 patient-day | tăng (chứng tỏ Just Culture) |
| % RCA hoàn thành đúng 45 ngày | ≥ 90% |
| % corrective action thực hiện | ≥ 80% |
| Sentinel báo BYT trong 24h | 100% |
| Tỉ lệ HAI giảm theo năm | giảm 5-10% |

## Cơ sở pháp lý 2026

- **Luật KCB 15/2023/QH15** — Điều 64 an toàn người bệnh.
- **Quyết định 6858/QĐ-BYT/2016** + cập nhật 2024 — Bộ tiêu chí chất lượng BV.
- **Thông tư 43/2018/TT-BYT** + sửa đổi 2024 — báo cáo sự cố y khoa.
- **Thông tư 19/2013/TT-BYT** — quản lý chất lượng dịch vụ KCB.
- **Quyết định 4858/QĐ-BYT/2013** + cập nhật — kiểm soát nhiễm khuẩn.
- **WHO Patient Safety Curriculum 2024** — tham chiếu.
