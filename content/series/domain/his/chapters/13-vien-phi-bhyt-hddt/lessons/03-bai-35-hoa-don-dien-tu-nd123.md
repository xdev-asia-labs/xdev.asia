---
id: 019f5a01-d000-7001-his0-000000001303
title: "Bài 35: Hóa đơn điện tử (HĐĐT) theo NĐ 123/2020"
slug: bai-35-hoa-don-dien-tu-nd123
description: >-
  Phát hành hóa đơn điện tử có mã / không mã từ HIS, gửi cơ quan thuế,
  xử lý điều chỉnh / thay thế / hủy, gắn với phiếu thu viện phí.
duration_minutes: 45
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-35-hoa-don-dien-tu-nd123-banner.png
video_url: null
sort_order: 3
section_title: "Phần 13: Viện phí, BHYT & Hóa đơn điện tử"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Hóa đơn điện tử theo NĐ 123/2020](/storage/uploads/2026/05/his/bai-35-hoa-don-dien-tu-nd123-banner.png)

## Khung pháp lý *(cập nhật 2026)*

![Hóa đơn điện tử ký số gửi cơ quan thuế](/storage/uploads/2026/05/his/bai-35-hoa-don-dien-tu-nd123-workflow.png)


## Mục tiêu bài học

- Hiểu **NĐ 123/2020/NĐ-CP** + **TT 78/2021/TT-BTC** + sửa đổi 2024 về hoá đơn điện tử.
- Phân biệt **HĐĐT có mã của cơ quan thuế** (CQT) và **HĐĐT không có mã**.
- Triển khai luồng phát hành HĐĐT từ HIS: lập → ký số → cấp mã CQT → gửi BN.
- Xử lý điều chỉnh, huỷ HĐĐT đúng quy định.
- Tích hợp với nhà cung cấp hoá đơn (TVAN) như VNPT-Invoice, Viettel-eInvoice, MISA, MeInvoice.

## Bối cảnh: BV cũng là người nộp thuế

- BV công lập tự chủ + BV tư nhân đều phải xuất HĐĐT cho mọi giao dịch dịch vụ y tế kể từ 01/07/2022 (NĐ 123).
- Một BV 1000 giường có thể phát sinh 5.000-15.000 HĐĐT/tháng.
- Sai HĐĐT → BV bị phạt thuế + uy tín; BN không được hoàn thuế (nếu có).
- BHYT thanh toán không cần HĐĐT, nhưng phần đồng chi trả của BN bắt buộc có HĐĐT.

## HĐĐT có mã vs không mã

| Tiêu chí | Có mã CQT | Không mã |
| --- | --- | --- |
| Đối tượng | DN nhỏ, BV chưa đủ điều kiện | DN lớn có rủi ro thấp, được CQT chấp thuận |
| Quy trình | gửi CQT → CQT cấp mã → gửi BN | tự lập + gửi BN, gửi tổng hợp CQT định kỳ |
| Đa số BV VN | Có mã | Một số BV lớn |

Mặc định khuyến nghị: **HĐĐT có mã** cho an toàn pháp lý.

## Luồng phát hành từ HIS

```
Invoice CLOSED trong HIS
   │
   ▼
Gọi connector TVAN (VNPT/Viettel/MISA…)
   │
   ▼
TVAN tạo HĐĐT theo mẫu, ký số tổ chức BV
   │
   ▼
Đẩy CQT (cqt.gdt.gov.vn) → CQT trả mã
   │
   ▼
Gửi BN qua email/Zalo/SMS link tải PDF
   │
   ▼
Lưu UUID hoá đơn vào HIS, gắn invoice_id
```

## Trường bắt buộc trên HĐĐT y tế

- Tên + mã số thuế bên bán (BV) + người mua (BN, có thể không có MST).
- Số hoá đơn (CQT cấp), ký hiệu, ngày lập.
- Danh mục dịch vụ: tên, đơn vị, số lượng, đơn giá, thuế suất.
- **Dịch vụ KCB do CQ NN cung cấp/thuộc lĩnh vực y tế** thường thuộc đối tượng **không chịu thuế GTGT** (Điều 5 Luật GTGT, NĐ 209/2013).
- Tổng tiền, chiết khấu (nếu có), thuế (nếu có), tổng thanh toán.
- Chữ ký số bên bán.

## Điều chỉnh & huỷ

| Tình huống | Cách xử lý |
| --- | --- |
| Sai thông tin BN (tên, MST) | Lập biên bản điều chỉnh + HĐĐT thay thế hoặc điều chỉnh |
| Sai số tiền | HĐĐT điều chỉnh tăng/giảm |
| BN trả lại dịch vụ | HĐĐT điều chỉnh giảm + hoàn tiền |
| Huỷ hoàn toàn | HĐĐT thay thế (không cho phép xoá) |

Mọi điều chỉnh phải có:
- Lý do chi tiết.
- Tham chiếu HĐĐT gốc.
- Chữ ký số người duyệt.
- Báo cáo CQT trong tháng.

## Data model

```sql
CREATE TABLE einvoice (
  einvoice_id   uuid PRIMARY KEY,
  invoice_id    uuid REFERENCES invoice,
  tvan_provider varchar(20),       -- VNPT/VIETTEL/MISA/EFY
  series        varchar(20),
  no            varchar(20),
  cqt_code      varchar(50),       -- mã CQT
  issued_at     timestamptz,
  signed_hash   varchar(128),
  pdf_uri       text,
  xml_uri       text,
  status        varchar(20),       -- ISSUED/ADJUSTED/REPLACED/CANCELLED
  replaced_by   uuid REFERENCES einvoice,
  parent_id     uuid REFERENCES einvoice    -- HĐĐT điều chỉnh
);
```

## Sai lầm thường gặp

1. Lập HĐĐT trước khi đóng invoice → không khớp tiền thu thực tế.
2. Bỏ qua HĐĐT cho khoản đồng chi trả nhỏ → vi phạm.
3. Ghi sai loại thuế GTGT → kê khai sai.
4. Xoá HĐĐT trong DB thay vì lập điều chỉnh → vi phạm Luật Quản lý thuế.
5. Không gửi BN → BN không có chứng từ hoàn thuế/yêu cầu BH tư.
6. Không lưu XML gốc → khi CQT yêu cầu kiểm tra không xuất được.

## Output / Deliverables

- Connector TVAN (VNPT/Viettel/MISA) cấu hình switchable.
- Module phát hành — điều chỉnh — thay thế HĐĐT.
- Module gửi BN qua Email/Zalo/SMS với link an toàn.
- Báo cáo HĐĐT theo tháng cho kế toán + đối soát CQT.

## UAT checklist

- [ ] Invoice CLOSED → HĐĐT phát hành tự động trong 5 phút.
- [ ] BN nhận email/Zalo có link tải PDF + XML.
- [ ] Lập HĐĐT điều chỉnh giảm khi hoàn 1 dịch vụ.
- [ ] Cố xoá HĐĐT trong UI → không cho.
- [ ] Báo cáo HĐĐT tháng đối chiếu Cổng CQT khớp 100%.

## KPI

| Chỉ số | Mục tiêu |
| --- | --- |
| % invoice phát hành HĐĐT trong 1 giờ | ≥ 99% |
| % HĐĐT có mã CQT thành công lần đầu | ≥ 99% |
| Sai sót cần điều chỉnh | ≤ 0.5% |
| % HĐĐT gửi BN thành công | ≥ 95% |
| Số lần CQT cảnh báo/phạt | 0 |

## Cơ sở pháp lý 2026

- **Luật Quản lý thuế 38/2019/QH14**.
- **Luật Thuế GTGT 13/2008** (sửa đổi 48/2024/QH15, hiệu lực 01/07/2025).
- **Nghị định 123/2020/NĐ-CP** — hoá đơn, chứng từ.
- **Nghị định 70/2025/NĐ-CP** *(không liên quan KCB, là sửa đổi NĐ 123 — kiểm tra số hiệu chính thức trước khi viện dẫn)*.
- **Thông tư 78/2021/TT-BTC** — hướng dẫn HĐĐT.
- **Thông tư 32/2024/TT-BTC** — sửa đổi TT 78.
- **Luật KCB 15/2023** — viện phí phải có chứng từ hợp lệ.
