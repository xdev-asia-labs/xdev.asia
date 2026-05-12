---
id: 019f5a01-d000-7001-his0-000000001401
title: "Bài 37: Kho vật tư y tế (HSM) — quản lý xuất nhập tồn"
slug: bai-37-kho-vat-tu-y-te
description: >-
  Quản lý vật tư y tế tiêu hao (gạc, kim, găng, ống thông…), khác kho dược
  ở mã hoá, đơn vị tính, định mức theo dịch vụ và "case package".
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-37-kho-vat-tu-y-te-banner.png
video_url: null
sort_order: 1
section_title: "Phần 14: Kho dược, TTB & Mua sắm"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Kho VTYT & quản lý tồn kho](/storage/uploads/2026/05/his/bai-37-kho-vat-tu-y-te-banner.png)

## Vật tư y tế là gì

![Kho VTYT với barcode và dashboard tồn kho](/storage/uploads/2026/05/his/bai-37-kho-vat-tu-y-te-workflow.png)


## Mục tiêu bài học

- Phân biệt **kho dược** (Pharmacy WH, đã học bài 24) và **kho vật tư y tế** (HSM — Hospital Supply Management): vật tư tiêu hao, hoá chất, sinh phẩm, vật tư trang thiết bị.
- Triển khai quản lý nhập — xuất — tồn — kiểm kê theo lô và HSD cho VTYT.
- Áp dụng ABC analysis và VED analysis để tối ưu tồn kho.
- Quản lý vật tư đặc biệt: sinh phẩm máu, hoá chất xét nghiệm, vật tư cấy ghép tồn tại nhiều kho.
- Đối soát kho ↔ chi phí ↔ thanh toán.

## Bối cảnh: VTYT là "kho thứ hai" sau kho dược

- BV 1000 giường có thể có 8.000-15.000 mã VTYT (gấp 3-5 lần kho dược).
- Hoá chất XN có giá trị cao nhưng tiêu thụ không đều — dễ tồn đọng hoặc stockout.
- Vật tư có HSD (test nhanh, sinh phẩm) cùng cần FEFO như thuốc.
- Sự cố thiếu găng tay/khẩu trang/bộ lọc HEPA mùa COVID đã chỉ ra rủi ro chuỗi cung ứng VTYT.

## Phân loại VTYT trong HIS

| Nhóm | Ví dụ | Đặc thù quản lý |
| --- | --- | --- |
| Tiêu hao chung | gạc, găng, bơm tiêm | tiêu thụ đều, ABC class A |
| Hoá chất XN | reagent, calibrator, control | gắn máy, có HSD, lưu lạnh |
| Sinh phẩm máu | hồng cầu, tiểu cầu, huyết tương | crossmatch, blood bank |
| Vật tư PT | dụng cụ chỉ dùng 1 lần, dao siêu âm | gắn ca mổ |
| Cấy ghép | implant, stent (đã học bài 26) | serial trọn đời |
| Vật tư bảo trì TTB | filter, dây dẫn | gắn TTB |
| Văn phòng phẩm + đồ chung | giấy in, mực in | kế toán quản trị |

## ABC + VED analysis

- **ABC** theo doanh số: A (top 20% mã chiếm 80% giá trị), B (kế tiếp), C (đuôi dài).
- **VED** theo tính sống còn: Vital (cứu sống — adrenalin, găng PT), Essential (cần thiết — gạc), Desirable (tiện lợi).
- Ma trận **AV/AE/AD/BV/...**:
  - AV: kiểm soát chặt nhất, không bao giờ hết.
  - CD: có thể just-in-time, ít safety stock.

HIS hỗ trợ tự gợi ý phân loại theo thuật toán + cho phép dược sĩ override.

## Data model (tương tự Pharmacy bài 24)

```sql
CREATE TABLE supply_catalog (
  item_id      uuid PRIMARY KEY,
  item_code    varchar(50) UNIQUE,
  item_name    text,
  category     varchar(30),    -- CONSUMABLE/REAGENT/BLOOD/IMPLANT/MAINT
  unit         varchar(20),
  abc_class    char(1),
  ved_class    char(1),
  has_lot_expiry boolean,
  storage_temp varchar(20)
);

CREATE TABLE supply_lot (
  lot_id       uuid PRIMARY KEY,
  item_id      uuid REFERENCES supply_catalog,
  lot_no       varchar(50),
  expiry_date  date,
  serial_no    varchar(100),       -- cho cấy ghép
  unit_cost    numeric,
  contract_id  uuid
);

-- inventory_balance, inventory_transaction tương tự pharmacy
```

## Sinh phẩm máu — module riêng

Quy định **TT 26/2013/TT-BYT** + **TT 16/2024/TT-BYT** sửa đổi:

- Mỗi đơn vị máu/chế phẩm có **mã túi máu duy nhất** từ Trung tâm Truyền máu.
- HIS lưu: nhóm máu, Rh, kết quả sàng lọc (HIV, HBV, HCV, syphilis), HSD.
- Trước truyền: cross-match với BN, double-check 2 NV.
- Sau truyền: ghi nhận transfusion record + theo dõi phản ứng.
- Báo cáo Cục Truyền máu hàng tháng.

## Workflow nhập kho VTYT

```
PO/Phiếu giao hàng từ NCC
   │
   ▼
Kho VTYT nhận → quét barcode/lot/HSD
   │
   ▼
QA kiểm tra: chứng chỉ, COA, cảm quan
   │
   ▼
Approved → tạo `supply_lot` + tăng inventory_balance
   │
   ▼
Phiếu nhập điện tử có ký số trưởng kho + kế toán
   │
   ▼
Đối soát với hợp đồng + thanh toán
```

## Cấp phát VTYT trong ca lâm sàng

- Khi BS chỉ định dịch vụ (vd: chụp CT) → HIS tự gợi ý VTYT chuẩn (kim luồn, thuốc cản quang) → trừ kho theo BOM (Bill of Materials).
- Khi điều dưỡng "tự lấy" thêm VTYT (gạc, găng) → quét barcode tủ + chọn BN → trừ kho.
- Cuối ca → đối soát BOM với thực dùng → tính phí + tính lại tồn.

## Sai lầm thường gặp

1. Quản lý VTYT chỉ ở mức "tổng tồn" không có lot/HSD → mất kiểm soát thuốc thử XN cận date.
2. Dùng chung kho VTYT cho nhiều khoa mà không phân ngăn → mất, không truy được.
3. Không gắn BOM với dịch vụ → không tính được giá thành thực.
4. Sinh phẩm máu lưu chung kho VTYT thường → vi phạm TT 26/2013.
5. Không có IoT cold-chain cho hoá chất → reagent hỏng nhưng vẫn dùng → kết quả XN sai.
6. Không kiểm kê ABC class A hàng tuần → thất thoát vật tư đắt tiền.

## Output / Deliverables

- Module HSM với ABC/VED.
- Module máu riêng tích hợp blood bank.
- Module hoá chất XN gắn máy + HSD.
- Báo cáo tồn kho theo nhóm + cảnh báo Min/HSD.
- BOM dịch vụ — tính giá thành.

## UAT checklist

- [ ] Nhập kho test nhanh có HSD → cảnh báo khi cận date.
- [ ] Cấp phát máu cho BN → bắt buộc cross-match đúng nhóm máu.
- [ ] Hoá chất XN cold-chain ngoài ngưỡng > 30 phút → cảnh báo.
- [ ] BOM CT có thuốc cản quang → tự trừ kho khi BS chỉ định.
- [ ] Báo cáo TT 16/2024 truyền máu xuất đúng định dạng.

## KPI

| Chỉ số | Mục tiêu |
| --- | --- |
| % VTYT class A đúng tồn (kiểm tuần) | ≥ 99% |
| Stockout class A | 0 |
| Tồn HSD bị huỷ | ≤ 1% giá trị |
| % cấp phát có gắn BN/encounter | ≥ 98% |
| Sự cố truyền máu sai nhóm | 0 |

## Cơ sở pháp lý 2026

- **Luật KCB 15/2023/QH15**.
- **Nghị định 98/2021/NĐ-CP** + **NĐ 07/2023** + **NĐ 96/2023** — quản lý trang thiết bị y tế (gồm VTYT).
- **Thông tư 04/2017/TT-BYT** (sửa đổi TT 27/2024) — danh mục giá VTYT BHYT.
- **Thông tư 26/2013/TT-BYT** (sửa đổi TT 16/2024) — truyền máu.
- **Thông tư 14/2024/TT-BYT** — bảo quản (GSP áp dụng vật tư cần điều kiện đặc biệt).
- **Luật Đấu thầu 22/2023** + **NĐ 24/2024** — mua sắm VTYT.
- **TT 07/2024/TT-BYT** — đấu thầu thuốc tại CSYT công lập (VTYT theo TT riêng).
