---
id: 019f5a01-d000-7001-his0-000000001501
title: "Bài 40: Dinh dưỡng & suất ăn bệnh viện"
slug: bai-40-dinh-duong-suat-an
description: >-
  Quản lý chế độ ăn theo y lệnh, sàng lọc dinh dưỡng, lập thực đơn bệnh
  lý, sản xuất bếp, giao suất ăn theo giường.
duration_minutes: 35
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-40-dinh-duong-suat-an-banner.png
video_url: null
sort_order: 1
section_title: "Phần 15: Dịch vụ hỗ trợ"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Dinh dưỡng lâm sàng & suất ăn](/storage/uploads/2026/05/his/bai-40-dinh-duong-suat-an-banner.png)

## Vai trò khoa Dinh dưỡng

![Dietitian lên thực đơn, bếp BV chuẩn bị suất](/storage/uploads/2026/05/his/bai-40-dinh-duong-suat-an-workflow.png)


## Mục tiêu bài học

- Triển khai module dinh dưỡng (Clinical Nutrition) trong HIS: sàng lọc dinh dưỡng → đánh giá → kê chế độ ăn → giao suất ăn → theo dõi.
- Tuân thủ **Thông tư 18/2020/TT-BYT** (tổ chức hoạt động dinh dưỡng) và sửa đổi 2024.
- Phối hợp module bếp BV: dự trù → mua thực phẩm → chế biến → giao theo khoa → tính phí.
- Quản lý chế độ ăn đặc biệt (đái tháo đường, suy thận, ăn qua sonde, parenteral nutrition).
- Tích hợp với BHYT: phần ăn theo BHYT vs ăn theo yêu cầu (TT 22/2023 + Luật BHYT 51/2024).

## Bối cảnh

- Suy dinh dưỡng BV (HMUI hospital malnutrition) tại VN: ước tính 30-50% BN nội trú có nguy cơ — không sàng lọc thì không phát hiện.
- BV không có module suất ăn → bếp tự "ước lượng" → lãng phí 15-25% thực phẩm hoặc thiếu suất.
- BHYT chi trả "phần dinh dưỡng" cho một số đối tượng đặc biệt (BN suy dinh dưỡng nặng) — cần ghi nhận đúng.
- BV tư có dịch vụ "thực đơn cao cấp" thu phí riêng — cần phân loại trong billing.

## Workflow

```
NHẬP VIỆN → Sàng lọc dinh dưỡng (MUST/MNA-SF/STRONGkids)
   │
   ▼
Có nguy cơ → Đánh giá chuyên sâu (Subjective Global Assessment)
   │
   ▼
Dietitian kê chế độ ăn (mã code chế độ + năng lượng + đường dùng)
   │
   ▼
HIS đẩy bếp BV → Bếp tổng hợp suất theo khoa, theo bữa
   │
   ▼
Giao suất, ghi nhận BN ăn (% ăn được)
   │
   ▼
Theo dõi cân nặng, albumin, prealbumin → tái đánh giá định kỳ
```

## Phân loại chế độ ăn

| Code | Tên | Đối tượng |
| --- | --- | --- |
| BT | Bình thường | hậu phẫu hồi phục |
| LM | Lỏng/mềm | sau PT đường tiêu hoá |
| ĐTĐ | Đái tháo đường | BN ĐTĐ |
| ST | Suy thận | hạn chế protein/K |
| Hạn muối | suy tim, tăng HA | < 2g muối/ngày |
| Sonde | nuôi ăn qua ống | BN ICU/lú lẫn |
| TPN | parenteral total | qua tĩnh mạch |
| Cao đạm | sau bỏng, suy mòn | > 1.5g protein/kg |
| Ăn theo yêu cầu | dịch vụ | BN tự chọn menu |

## Data model

```sql
CREATE TABLE nutrition_screening (
  screen_id   uuid PRIMARY KEY,
  patient_id  uuid,
  encounter_id uuid,
  tool        varchar(20),    -- MUST/MNA-SF/STRONGkids
  score       int,
  risk_level  varchar(10),    -- LOW/MEDIUM/HIGH
  screened_at timestamptz,
  screened_by uuid
);

CREATE TABLE diet_order (
  order_id    uuid PRIMARY KEY,
  encounter_id uuid,
  diet_code   varchar(20),
  energy_kcal int,
  protein_g   numeric,
  fluid_restriction_ml int,
  feeding_route varchar(20),  -- ORAL/NGT/PEG/PARENTERAL
  texture     varchar(20),    -- REGULAR/SOFT/PUREE/LIQUID
  effective_from timestamptz,
  effective_to timestamptz,
  ordered_by  uuid,            -- dietitian/BS
  bhyt_eligible boolean
);

CREATE TABLE meal_serving (
  serving_id  uuid PRIMARY KEY,
  diet_order_id uuid REFERENCES diet_order,
  meal_time   varchar(20),    -- BREAKFAST/LUNCH/DINNER/SNACK
  served_at   timestamptz,
  intake_pct  int,            -- % BN ăn được (0-100)
  notes       text
);
```

## Kết nối bếp BV

- Mỗi sáng 6h, HIS xuất file/print "phiếu suất ăn" theo khoa, theo chế độ.
- Bếp tổng hợp BOM nguyên liệu → trừ kho thực phẩm.
- Bếp ghi nhận giao đủ → HIS update.
- BN bỏ ăn (intake 0%) → cảnh báo điều dưỡng + dietitian.

## Sai lầm thường gặp

1. Không sàng lọc dinh dưỡng → BN suy mòn không phát hiện → tăng tỉ lệ tử vong.
2. Chế độ ăn ghi free text "cháo" → bếp không hiểu, không tính được calo.
3. Đặt suất ăn cố định không cập nhật khi BN xuất viện → lãng phí.
4. Ăn theo yêu cầu không tách trong billing → BHYT từ chối.
5. Không log intake → không đánh giá hiệu quả can thiệp dinh dưỡng.

## Output / Deliverables

- Module sàng lọc + đánh giá dinh dưỡng.
- Module diet order chuẩn hoá.
- Connector bếp BV (file/API).
- Báo cáo tỉ lệ sàng lọc, can thiệp, intake trung bình.

## UAT checklist

- [ ] Nhập viện > 24h chưa sàng lọc → cảnh báo.
- [ ] Diet order ĐTĐ tự gợi ý 1.800 kcal, hạn đường.
- [ ] BN xuất viện → tự huỷ suất các bữa sau.
- [ ] Bếp nhận file đúng mỗi sáng + chiều.
- [ ] Báo cáo dinh dưỡng tháng cho QLCL.

## KPI

| Chỉ số | Mục tiêu |
| --- | --- |
| % BN nội trú được sàng lọc trong 24h | ≥ 90% |
| % BN nguy cơ cao có diet order | 100% |
| Lãng phí thực phẩm | ≤ 10% |
| % BN ăn ≥ 75% suất | ≥ 70% |

## Cơ sở pháp lý 2026

- **Luật KCB 15/2023/QH15**.
- **Thông tư 18/2020/TT-BYT** + sửa đổi 2024 — hoạt động dinh dưỡng trong BV.
- **Thông tư 22/2023/TT-BYT** + sửa đổi — giá dinh dưỡng BHYT.
- **Quyết định 776/QĐ-BYT/2017** — hướng dẫn dinh dưỡng lâm sàng.
- **Luật ATTP 55/2010/QH12** + **NĐ 15/2018** — an toàn thực phẩm bếp BV.
