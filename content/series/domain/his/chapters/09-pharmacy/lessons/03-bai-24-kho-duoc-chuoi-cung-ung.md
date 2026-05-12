---
id: 019f5a01-d000-7001-his0-000000000903
title: "Bài 24: Kho dược & quản lý chuỗi cung ứng thuốc"
slug: bai-24-kho-duoc-chuoi-cung-ung
description: >-
  Quản lý nhập — xuất — tồn theo lô và hạn dùng, kiểm kê, cấp phát giữa
  kho chính ↔ kho khoa, dự trù theo Min-Max và sản phẩm thay thế.
duration_minutes: 50
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-24-kho-duoc-chuoi-cung-ung-banner.png
video_url: null
sort_order: 3
section_title: "Phần 9: Dược (Pharmacy)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Kho dược, FEFO & chuỗi cung ứng](/storage/uploads/2026/05/his/bai-24-kho-duoc-chuoi-cung-ung-banner.png)

## Mô hình kho

![Kho dược với cold-chain và quét barcode hạn dùng](/storage/uploads/2026/05/his/bai-24-kho-duoc-chuoi-cung-ung-workflow.png)


```
[Nhà cung cấp] → [Kho dược chính (chẵn lô)] ─┬─► Kho khoa Nội
                                              ├─► Kho khoa Ngoại
                                              ├─► Kho cấp cứu
                                              └─► Kho ngoại trú / Quầy
```

Mỗi giao dịch (nhập / xuất / chuyển / hỏng / hết hạn) đều ghi nhận **theo lô**.

## Cấu trúc tồn kho

```
StockItem (drug_id, warehouse_id, lot_no, exp_date, qty, unit_price)
```

Tồn = Σ qty của các lô chưa hết.

## Nhập kho

- Đối chiếu **PO (Purchase Order)** ↔ phiếu giao ↔ phiếu nhập.
- Quét DataMatrix GS1 từng hộp → tự động ghi lô, hạn, mã GTIN.
- QC dược kiểm tra cảm quan, chứng nhận lô (CoA) → mới cho nhập kho "available".

## Xuất kho

Quy tắc FEFO (First Expired First Out):

```
SELECT lots WHERE qty > 0 ORDER BY exp_date ASC
```

Trừ trường hợp đặc biệt (BN dị ứng tá dược trong lô A → chuyển lô B).

## Cấp phát giữa kho

- Phiếu chuyển nội bộ — kho A xuất → kho B nhận.
- Trạng thái: REQUESTED → APPROVED → IN_TRANSIT → RECEIVED.
- IN_TRANSIT chưa thuộc kho nào → phải hiển thị riêng để chống mất hàng.

## Kiểm kê

- Định kỳ (cuối tháng / quý) hoặc đột xuất.
- Tạo phiếu kiểm kê với danh sách lô.
- Khoá xuất nhập trong thời gian kiểm kê.
- Chênh lệch → biên bản, xử lý theo chính sách (kho dược thường rất chặt).

## Min-Max & dự trù

- **Min** = mức tối thiểu để không hết.
- **Max** = mức tối đa để không tồn quá.
- HIS gợi ý dự trù khi tồn ≤ Min, dựa trên lead time + tốc độ tiêu thụ trung bình.

## Quản lý hạn dùng

- Cảnh báo "sắp hết hạn" theo cấu hình (vd. 90/60/30 ngày).
- Báo cáo "thuốc hết hạn cần huỷ" — biên bản huỷ có chữ ký HĐT (Hội đồng thuốc).
- Một số nhóm thuốc cho phép trả lại NCC trước hạn N tháng.

## Quản lý lạnh / chuỗi lạnh

- Vaccine, sinh phẩm: theo dõi nhiệt độ tủ liên tục (sensor IoT).
- Cảnh báo khi vượt ngưỡng — phải có quy trình "cách ly" lô nghi ngờ chờ thẩm định.

## Tích hợp Pharmacy ↔ Billing

Mỗi xuất kho cho BN → tự động sinh dòng phí trên hoá đơn (xem ch.13). Trả thuốc thừa → hoàn phí tự động.

## Bài học vận hành

- "Lô đẹp" (số tròn, hạn xa) hay bị giữ lại — gây lệch FEFO. Phải giám sát.
- Tích hợp với hệ thống quản lý chuỗi cung ứng quốc gia (cổng dược DAV / TraVi).
- KPI: tỷ lệ stock-out, tỷ lệ huỷ hết hạn (< 1 % giá trị nhập).

> **Bài tiếp theo:** Phòng mổ — lịch mổ, checklist WHO, ghi nhận trong mổ.
