---
id: 019f5a01-d000-7001-his0-000000001403
title: "Bài 39: Mua sắm — đấu thầu thuốc, VTYT & TTB"
slug: bai-39-mua-sam-dau-thau
description: >-
  Quy trình mua sắm trong BV công: đấu thầu tập trung, chào giá cạnh tranh,
  chỉ định thầu trong tình huống khẩn — và cách HIS hỗ trợ minh bạch.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-39-mua-sam-dau-thau-banner.png
video_url: null
sort_order: 3
section_title: "Phần 14: Kho dược, TTB & Mua sắm"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Mua sắm & đấu thầu thuốc/TTB](/storage/uploads/2026/05/his/bai-39-mua-sam-dau-thau-banner.png)

## Khung pháp lý *(cập nhật 2026)*

![Tổ thẩm định mở thầu, đánh giá hồ sơ](/storage/uploads/2026/05/his/bai-39-mua-sam-dau-thau-workflow.png)


## Mục tiêu bài học

- Hiểu khung pháp lý đấu thầu y tế VN 2026: **Luật Đấu thầu 22/2023**, **NĐ 24/2024/NĐ-CP**, **TT 07/2024/TT-BYT** (thuốc) + TT đấu thầu VTYT/TTB.
- Mô hình hoá quy trình mua sắm: nhu cầu → kế hoạch → mời thầu → đánh giá → trao thầu → hợp đồng → thực hiện → quyết toán.
- Phân biệt các hình thức: **đấu thầu rộng rãi**, **đấu thầu hạn chế**, **chỉ định thầu**, **chào hàng cạnh tranh**, **mua sắm trực tiếp**.
- Tích hợp HIS với hệ thống mua sắm + kế toán + Cổng đấu thầu quốc gia.
- Quản lý hợp đồng đã trúng và trigger đặt hàng theo Min-Max.

## Bối cảnh: 2024-2025 BV "khát thuốc, VTYT"

- Sự cố nhiều BV thiếu thuốc, VTYT trầm trọng 2022-2023 đã thúc đẩy sửa Luật Đấu thầu.
- Luật 22/2023 + NĐ 24/2024 + TT 07/2024 cải cách: cho phép **đấu thầu tập trung quốc gia/cấp địa phương**, **đàm phán giá**, rút ngắn thời gian.
- BV vẫn phải tự đấu thầu phần lớn — yêu cầu hệ thống e-procurement nội bộ.
- Cổng **muasamcong.mpi.gov.vn** + **eGP** là bắt buộc cho phần lớn gói thầu.

## Quy trình mua sắm (high-level)

```
NHU CẦU TỪ CÁC KHOA (HIS demand planning)
   │
   ▼
Tổng hợp → Kế hoạch lựa chọn nhà thầu (KHLCNT) hàng năm
   │
   ▼
Phê duyệt giám đốc + Sở YT (nếu cấp tỉnh)
   │
   ▼
Hồ sơ mời thầu (HSMT) → đăng cổng eGP
   │
   ▼
Mở thầu, đánh giá kỹ thuật + tài chính → Báo cáo thẩm định
   │
   ▼
Trao thầu → Hợp đồng → Bảo lãnh thực hiện
   │
   ▼
Đặt hàng theo lô (PO) → Nhập kho theo lô
   │
   ▼
Thanh toán theo tiến độ → Quyết toán cuối kỳ
```

## Các hình thức lựa chọn nhà thầu

| Hình thức | Khi áp dụng | Văn bản |
| --- | --- | --- |
| Đấu thầu rộng rãi | mặc định, gói lớn | Luật 22/2023 |
| Đấu thầu hạn chế | yêu cầu kỹ thuật cao, ít NCC | Luật 22 |
| Chỉ định thầu | cấp bách, độc quyền (vd thuốc hiếm) | Luật 22 + NĐ 24 |
| Chào hàng cạnh tranh | gói nhỏ < ngưỡng | NĐ 24/2024 |
| Mua sắm trực tiếp | dựa trên hợp đồng cũ trong N tháng | NĐ 24 |
| Đàm phán giá | thuốc generic, biological theo TT 05/2024/TT-BYT | TT 05/2024 |
| Đấu thầu tập trung QG | thuốc trong danh mục QG | QĐ 1737/QĐ-BYT/2024 |

## Data model e-procurement nội bộ

```sql
CREATE TABLE procurement_plan (
  plan_id      uuid PRIMARY KEY,
  fiscal_year  int,
  plan_name    text,
  total_budget numeric,
  approved_by  uuid,
  approved_at  date,
  status       varchar(20)
);

CREATE TABLE procurement_package (
  package_id   uuid PRIMARY KEY,
  plan_id      uuid REFERENCES procurement_plan,
  package_name text,
  category     varchar(20),    -- DRUG/SUPPLY/EQUIPMENT/SERVICE
  selection_method varchar(30), -- OPEN/LIMITED/DESIGNATED/SHOPPING/...
  estimated_value numeric,
  status       varchar(20),    -- PLANNED/INVITED/EVALUATED/AWARDED/CONTRACTED
  egp_ref      varchar(50)     -- mã trên cổng eGP
);

CREATE TABLE procurement_contract (
  contract_id  uuid PRIMARY KEY,
  package_id   uuid REFERENCES procurement_package,
  vendor_id    uuid,
  contract_no  varchar(50),
  effective_from date,
  effective_to date,
  total_value  numeric,
  payment_terms text,
  guarantee_amount numeric
);

CREATE TABLE contract_item (
  item_id      uuid PRIMARY KEY,
  contract_id  uuid REFERENCES procurement_contract,
  drug_or_supply_id uuid,
  qty_ordered  numeric,
  qty_delivered numeric,
  unit_price   numeric,
  remaining_qty numeric GENERATED ALWAYS AS (qty_ordered - qty_delivered) STORED
);

CREATE TABLE purchase_order (
  po_id        uuid PRIMARY KEY,
  contract_id  uuid REFERENCES procurement_contract,
  po_no        varchar(50),
  po_date      date,
  delivery_due date,
  status       varchar(20)     -- DRAFT/APPROVED/SENT/PARTIAL/RECEIVED/CLOSED
);
```

## Tích hợp HIS — kho — kế toán — đấu thầu

```
   HIS lâm sàng (kê đơn, sử dụng) ──► Kho (xuất, tồn)
        │                              │
        │                              ▼
        │                       Cảnh báo tồn ≤ Min
        │                              │
        ▼                              ▼
   Kế toán doanh thu        e-Procurement (PR theo contract)
        │                              │
        └────► Đối soát ◄──────────────┘
```

Quy tắc:
- Mỗi `drug_catalog.item` / `supply_catalog.item` link tới `contract_item` đang hiệu lực.
- Khi PR (Purchase Request) tạo → tự lấy giá từ contract → không cần phê duyệt giá lại (nếu trong hạn mức contract).
- Khi vượt hạn mức contract → trigger đấu thầu bổ sung hoặc dừng kê.

## Tích hợp Cổng quốc gia

- Đăng tải KHLCNT, HSMT, kết quả lựa chọn nhà thầu lên **muasamcong.mpi.gov.vn / e-GP**.
- API tự đẩy không bắt buộc nhưng nên có để tránh upload tay.
- Báo cáo định kỳ Bộ Y tế / Sở Y tế về thực hiện đấu thầu thuốc/VTYT.

## Sai lầm thường gặp

1. Mua ngoài thầu → tiết kiệm thời gian nhưng vi phạm Luật Đấu thầu, có thể bị truy cứu hình sự.
2. Vượt hạn mức contract mà không thầu mới → ngược lại, đứt nguồn cuối kỳ.
3. Không liên kết catalog ↔ contract → kê thuốc ngoài thầu mà không biết.
4. Không đánh giá NCC sau hợp đồng → trao thầu lại cho NCC kém.
5. Không cập nhật hợp đồng vào HIS → kho nhập lệch giá so với hợp đồng.
6. Không kiểm tra tài chính NCC → NCC phá sản giữa hợp đồng = đứt nguồn.

## Output / Deliverables

- Module e-procurement tích hợp HIS.
- Catalog ↔ contract mapping.
- Dashboard thực hiện hợp đồng: % giải ngân, qty còn lại, ngày hết hạn.
- Báo cáo đấu thầu Bộ Y tế / Sở Y tế.
- KPI vendor: thời gian giao hàng, tỉ lệ giao đủ, chất lượng (return rate).

## UAT checklist

- [ ] Tạo PR cho thuốc trong contract → autofill giá + còn hạn mức.
- [ ] PR vượt hạn mức contract → bị chặn + đề xuất thầu mới.
- [ ] Kê thuốc không có trong contract đang hiệu lực → cảnh báo BS.
- [ ] Báo cáo % giải ngân hợp đồng cuối quý.
- [ ] Đánh giá vendor sau hợp đồng → điểm vào kỳ thầu sau.

## KPI

| Chỉ số | Mục tiêu |
| --- | --- |
| % danh mục có hợp đồng đang hiệu lực | ≥ 95% |
| % gói thầu hoàn thành đúng kế hoạch năm | ≥ 90% |
| Stockout do hết hợp đồng | 0 |
| % NCC giao đúng hạn | ≥ 90% |
| Tỉ lệ thuốc đàm phán giá / generic | tăng theo lộ trình BYT |

## Cơ sở pháp lý 2026

- **Luật Đấu thầu 22/2023/QH15** (hiệu lực 01/01/2024).
- **Nghị định 24/2024/NĐ-CP** — quy định chi tiết Luật Đấu thầu.
- **Nghị định 17/2025/NĐ-CP** sửa đổi NĐ 24 (cập nhật mới nhất).
- **Thông tư 07/2024/TT-BYT** — đấu thầu thuốc tại cơ sở y tế công lập.
- **Thông tư 14/2024/TT-BYT** — bảo quản, GSP.
- **Thông tư 05/2024/TT-BYT** — đàm phán giá thuốc.
- **Quyết định 1737/QĐ-BYT/2024** — danh mục thuốc đấu thầu tập trung QG.
- **Luật Quản lý sử dụng tài sản công 15/2017** — TTB y tế là tài sản công.
