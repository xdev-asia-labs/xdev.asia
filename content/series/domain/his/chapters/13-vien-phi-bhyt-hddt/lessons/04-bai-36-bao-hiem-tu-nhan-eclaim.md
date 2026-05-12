---
id: 019f5a01-d000-7001-his0-000000001304
title: "Bài 36: Bảo hiểm tư nhân & eClaim"
slug: bai-36-bao-hiem-tu-nhan-eclaim
description: >-
  Bảo lãnh trực tiếp với hãng bảo hiểm tư nhân (Bảo Việt, Liberty, Manulife,
  Prudential...) — quy trình authorize, claim, settlement và phần BN tự trả.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-36-bao-hiem-tu-nhan-eclaim-banner.png
video_url: null
sort_order: 4
section_title: "Phần 13: Viện phí, BHYT & Hóa đơn điện tử"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Bảo hiểm tư nhân & eClaim](/storage/uploads/2026/05/his/bai-36-bao-hiem-tu-nhan-eclaim-banner.png)

## Mô hình bảo lãnh

![Form claim auto-fill từ EMR cho hãng bảo hiểm](/storage/uploads/2026/05/his/bai-36-bao-hiem-tu-nhan-eclaim-workflow.png)


## Mục tiêu bài học

- Hiểu thị trường BH y tế tư nhân VN: TPL (third-party liability), nhân thọ rider, sức khoẻ tổng hợp.
- Tích hợp HIS với các hãng BH (Bảo Việt, Liberty, BIC, MIC, Generali, AIA, Manulife, Pacific Cross, …) qua **eClaim/cashless**.
- Triển khai **direct billing**: BN không trả tiền tại BV, hãng BH thanh toán trực tiếp.
- Quản lý **pre-authorization** (xin phép trước phẫu thuật/dịch vụ giá cao).
- Đối soát kết quả claim với hãng BH.

## Bối cảnh: BH tư đang tăng nhanh

- Thị trường BH sức khoẻ VN tăng 18-22%/năm; 2025 ước tính 28 triệu hợp đồng.
- BV tư + BV công có khoa dịch vụ đều phải hỗ trợ BH tư.
- Mô hình **cashless** (BN không trả tiền) đang phổ biến — đòi hỏi BV-BH có hợp đồng song phương + tích hợp dữ liệu.
- Mỗi hãng BH có **mẫu claim form khác nhau** → BV phải auto-fill từ EMR.

## Loại hình BH y tế tư VN

| Loại | Đặc điểm | Yêu cầu HIS |
| --- | --- | --- |
| BH sức khoẻ tổng hợp (in/outpatient) | trả phí KCB | tích hợp eClaim |
| BH nhân thọ rider y tế | bồi thường ngày nằm viện | giấy ra viện + hồ sơ |
| BH du lịch | KCB cấp cứu | bồi thường nhanh |
| BH tai nạn | bồi thường thương tật | hồ sơ + chứng cứ |
| BH doanh nghiệp | nhân viên DN | có hợp đồng nhóm |
| BH quốc tế (Pacific Cross, Cigna, Bupa) | BN nước ngoài | API tiếng Anh + USD |

## Workflow cashless

```
BN xuất trình thẻ BH + CCCD
   │
   ▼
HIS query API hãng BH → trả về quyền lợi (limit, copay, exclusion)
   │
   ▼
Trước phẫu thuật/dịch vụ > X tr → Pre-Authorization
   │
   ▼
Hãng BH phê duyệt trong N giờ → cho phép thực hiện
   │
   ▼
Thực hiện dịch vụ → ghi nhận charge
   │
   ▼
Xuất viện → HIS gom claim → đẩy hãng BH (eClaim XML/JSON)
   │
   ▼
Hãng BH duyệt cuối → chuyển tiền cho BV
   │
   ▼
BN ký không phải trả phần BH chi trả
```

## Pre-authorization (PA)

Bắt buộc cho:
- Phẫu thuật (mọi loại).
- Dịch vụ giá > ngưỡng hợp đồng (thường 5-20 triệu).
- Vật tư cấy ghép.
- Thuốc đặc trị (oncology, biological).

HIS phải:
- Form PA với chẩn đoán, kế hoạch điều trị, dự toán chi phí.
- Đẩy API hãng BH, nhận decision (APPROVED/PENDING/REJECTED) + reason.
- Cảnh báo BS không thực hiện trước khi có PA — tránh BH từ chối thanh toán.

## Data model

```sql
CREATE TABLE patient_insurance (
  insurance_id   uuid PRIMARY KEY,
  patient_id     uuid REFERENCES patient,
  insurer_code   varchar(20),   -- BAOVIET/LIBERTY/AIA/...
  policy_no      varchar(50),
  card_no        varchar(50),
  effective_from date,
  effective_to   date,
  benefits       jsonb,         -- limit/copay/exclusion
  cashless       boolean
);

CREATE TABLE pre_auth (
  pa_id          uuid PRIMARY KEY,
  encounter_id   uuid,
  insurance_id   uuid REFERENCES patient_insurance,
  procedures     text[],
  estimated_amount numeric,
  status         varchar(20),   -- REQUESTED/APPROVED/REJECTED/EXPIRED
  insurer_decision_at timestamptz,
  decision_reason text,
  approval_no    varchar(50)
);

CREATE TABLE eclaim (
  eclaim_id      uuid PRIMARY KEY,
  encounter_id   uuid,
  insurance_id   uuid REFERENCES patient_insurance,
  total_amount   numeric,
  claimed_amount numeric,
  status         varchar(20),   -- DRAFT/SUBMITTED/PARTIAL/PAID/REJECTED
  insurer_ref    varchar(50),
  submitted_at   timestamptz,
  paid_at        timestamptz,
  paid_amount    numeric
);
```

## Auto-fill claim form từ EMR

Mỗi hãng BH có form khác, nhưng cùng cần:
- Chẩn đoán ICD-10.
- Dịch vụ + giá.
- Đơn thuốc.
- Tường trình PT (nếu có).
- Kết quả CLS.
- Giấy ra viện.

HIS phải có **template engine** map field EMR → field claim form từng hãng. Tránh BS điền tay (sai sót cao).

## Sai lầm thường gặp

1. Thực hiện PT/dịch vụ giá cao trước khi xin PA → BH từ chối, BN không trả → BV chịu.
2. Không cache benefits → mỗi charge gọi API hãng BH → chậm + tốn.
3. Auto-fill nhưng không cho dược sĩ/BS review → sai dữ liệu → reject claim.
4. Không track trạng thái claim → tiền BH "ngủ" lâu mà không đòi.
5. Không có quy trình xử lý reject → BV chịu mất.
6. Trộn dữ liệu BHYT vào claim BH tư → vi phạm hợp đồng.

## Output / Deliverables

- Connector eClaim cho 5-10 hãng BH lớn.
- Module Pre-Authorization có queue.
- Module auto-fill claim form theo template hãng.
- Dashboard claim outstanding + ageing.
- Báo cáo doanh thu BH tư theo hãng + so với hợp đồng.

## UAT checklist

- [ ] Nhập thẻ BH → query benefits real-time, hiển thị limit/copay.
- [ ] Chỉ định PT > 10 triệu → bắt buộc PA, không cho thực hiện đến khi APPROVED.
- [ ] Auto-fill claim form 5 hãng phổ biến → ≥ 90% field đúng.
- [ ] Claim đẩy hãng BH → nhận response, cập nhật trạng thái.
- [ ] Báo cáo aging > 60 ngày → tự cảnh báo phòng tài chính.

## KPI

| Chỉ số | Mục tiêu |
| --- | --- |
| % BN BH tư có cashless | ≥ 70% (BV có hợp đồng) |
| % PA xin trước → APPROVED | ≥ 85% |
| Tỉ lệ claim REJECTED | ≤ 5% |
| Thời gian claim → tiền về | ≤ 30 ngày |
| Doanh thu BH tư bị "treo" > 60 ngày | ≤ 5% |

## Cơ sở pháp lý 2026

- **Luật Kinh doanh bảo hiểm 08/2022/QH15** (hiệu lực 01/01/2023).
- **Nghị định 46/2023/NĐ-CP** — chi tiết Luật KDBH.
- **Thông tư 67/2023/TT-BTC** — hướng dẫn nghiệp vụ BH.
- **Luật KCB 15/2023/QH15** + **Luật BHYT 51/2024**.
- **Luật Bảo vệ DLCN 13/2023/NĐ-CP** — chia sẻ dữ liệu BN với hãng BH cần đồng thuận rõ.
