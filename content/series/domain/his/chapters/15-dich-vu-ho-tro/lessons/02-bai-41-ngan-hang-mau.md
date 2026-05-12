---
id: 019f5a01-d000-7001-his0-000000001502
title: "Bài 41: Ngân hàng máu & truyền máu"
slug: bai-41-ngan-hang-mau
description: >-
  Quản lý ngân hàng máu trong BV: nhập máu từ trung tâm, định nhóm, lưu
  trữ, phát máu, theo dõi truyền & phản ứng truyền máu.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-41-ngan-hang-mau-banner.png
video_url: null
sort_order: 2
section_title: "Phần 15: Dịch vụ hỗ trợ"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Ngân hàng máu & cross-match](/storage/uploads/2026/05/his/bai-41-ngan-hang-mau-banner.png)

## Mô hình ngân hàng máu

![Kỹ thuật viên cross-match máu cho BN](/storage/uploads/2026/05/his/bai-41-ngan-hang-mau-workflow.png)


## Mục tiêu bài học

- Triển khai module **Blood Bank** trong HIS: tiếp nhận chế phẩm máu → lưu trữ → cross-match → cấp phát → ghi nhận truyền → theo dõi phản ứng.
- Tuân thủ **Thông tư 26/2013/TT-BYT** (sửa đổi **TT 16/2024/TT-BYT**) về truyền máu.
- Liên thông với **Trung tâm Truyền máu** (Viện Huyết học - TM TW, các trung tâm khu vực).
- Quản lý chuỗi lạnh (2-6°C cho hồng cầu, -25°C cho FFP, 20-24°C cho tiểu cầu).
- Ngăn chặn sự cố truyền nhầm nhóm máu — nguyên nhân hàng đầu của tai biến truyền máu.

## Bối cảnh

- VN có ~150 BV thực hiện truyền máu; tai biến truyền nhầm nhóm máu ABO vẫn xảy ra hằng năm.
- Cross-match phải dùng máu BN tươi (mẫu < 72h) — quản lý nghiêm.
- Tiểu cầu HSD chỉ 5 ngày — tỉ lệ huỷ cao, cần dự báo nhu cầu.
- Truyền chế phẩm máu yêu cầu theo dõi BN trong 15 phút đầu + 1 giờ — bắt buộc ghi nhận.

## Workflow truyền máu

```
BS chỉ định truyền (kèm xét nghiệm: nhóm máu, Hb, INR, ...)
   │
   ▼
Kỹ thuật viên lab lấy máu BN → cross-match
   │
   ▼
Cross-match PASS → kho máu cấp túi máu (gắn label match BN-túi)
   │
   ▼
Vận chuyển có hộp lạnh có log nhiệt
   │
   ▼
2 NV xác nhận tại buồng bệnh: BN-nhóm máu-túi máu-HSD-bedside test (nếu cần)
   │
   ▼
Truyền + theo dõi 15 phút đầu (mạch, HA, nhiệt độ)
   │
   ▼
Hoàn thành → ghi transfusion record + theo dõi 24h sau
   │
   ▼
Phản ứng có hại (FNHTR/AHTR/TRALI/TACO/anaphylaxis) → báo cáo Trung tâm TM
```

## Data model

```sql
CREATE TABLE blood_unit (
  unit_id      uuid PRIMARY KEY,
  donor_unit_no varchar(50) UNIQUE,    -- mã túi từ Trung tâm TM
  product_type varchar(20),    -- RBC/FFP/PLT/CRYO/WB
  abo_group    varchar(2),     -- A/B/AB/O
  rh           varchar(2),
  collected_at date,
  expires_at   date,
  storage_temp varchar(20),
  status       varchar(20),    -- IN_STOCK/RESERVED/CROSSMATCHED/ISSUED/TRANSFUSED/DISCARDED
  screening_results jsonb      -- HIV/HBV/HCV/syphilis/malaria
);

CREATE TABLE crossmatch (
  crossmatch_id uuid PRIMARY KEY,
  patient_id    uuid,
  unit_id       uuid REFERENCES blood_unit,
  patient_sample_id uuid,
  performed_at  timestamptz,
  performed_by  uuid,
  result        varchar(20),   -- COMPATIBLE/INCOMPATIBLE/INDETERMINATE
  expires_at    timestamptz   -- thường 72h
);

CREATE TABLE transfusion (
  transfusion_id uuid PRIMARY KEY,
  patient_id     uuid,
  unit_id        uuid REFERENCES blood_unit,
  crossmatch_id  uuid REFERENCES crossmatch,
  started_at     timestamptz,
  ended_at       timestamptz,
  pre_vitals     jsonb,
  post_vitals    jsonb,
  reaction       varchar(30),   -- NONE/FNHTR/AHTR/TRALI/TACO/ALLERGIC/...
  reaction_severity varchar(20),
  reported_to_btc boolean
);
```

## Quy tắc bắt buộc

1. Truyền máu cần **2 NV xác nhận** (BS + ĐD hoặc 2 ĐD); HIS bắt cả 2 ký số/sinh trắc.
2. Bedside test ABO trước truyền cho RBC.
3. Cross-match hết hạn (>72h) → không cho phép truyền, phải làm lại.
4. Không truyền > 4h cho 1 đơn vị RBC (nguy cơ nhiễm khuẩn).
5. Phản ứng SEVERE → báo cáo Trung tâm Truyền máu trong 24h.

## Sai lầm thường gặp

1. Cross-match expired vẫn truyền → vi phạm.
2. Không bedside test → có nguy cơ truyền nhầm.
3. Không log nhiệt độ vận chuyển → không bảo đảm chất lượng.
4. Bỏ sót báo cáo phản ứng → vi phạm + không cảnh báo lô máu kém.
5. Tủ máu không có IoT cold-chain → mất theo dõi.

## Output / Deliverables

- Module Blood Bank end-to-end.
- Tích hợp với LIS (kết quả nhóm máu, INR).
- IoT cold-chain tủ máu.
- Báo cáo TT 16/2024 cho Trung tâm TM.
- Dashboard tồn máu theo nhóm + cảnh báo HSD.

## UAT checklist

- [ ] Cross-match expired → không cho truyền.
- [ ] Truyền không có 2 NV ký → bị chặn.
- [ ] Phản ứng SEVERE → tự gửi báo cáo Trung tâm TM.
- [ ] Tủ máu cold-chain ngoài ngưỡng > 5 phút → cảnh báo.
- [ ] Báo cáo tồn máu hằng ngày khớp Trung tâm TM.

## KPI

| Chỉ số | Mục tiêu |
| --- | --- |
| Sự cố truyền nhầm nhóm máu | 0 |
| % truyền có cross-match valid | 100% |
| Tỉ lệ huỷ máu (HSD) | ≤ 3% |
| % phản ứng được báo cáo TT TM trong 24h | 100% |
| % truyền có 2 NV xác nhận điện tử | 100% |

## Cơ sở pháp lý 2026

- **Luật KCB 15/2023/QH15**.
- **Thông tư 26/2013/TT-BYT** + **Thông tư 16/2024/TT-BYT** sửa đổi — hoạt động truyền máu.
- **Thông tư 17/2024/TT-BYT** — quản lý người hiến máu.
- **Quyết định 1995/QĐ-BYT/2024** — hướng dẫn truyền máu lâm sàng.
- **Luật Hiến, ghép mô, bộ phận cơ thể 75/2006**.
- **AABB Standards 33rd ed.** — tham chiếu quốc tế.
