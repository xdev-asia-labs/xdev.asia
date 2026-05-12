---
id: 019f5a01-d000-7001-his0-000000000601
title: "Bài 15: Order Management — vòng đời chỉ định cận lâm sàng"
slug: bai-15-order-management
description: >-
  Mô hình order tập trung trong HIS: order set, ưu tiên, route tới đơn vị
  thực hiện (LIS, RIS, Pharmacy, thủ thuật), trạng thái, hủy, thay đổi & in
  phiếu thực hiện.
duration_minutes: 50
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-15-order-management-banner.png
video_url: null
sort_order: 1
section_title: "Phần 6: Order Management & ICD coding"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Order Management — vòng đời y lệnh](/storage/uploads/2026/05/his/bai-15-order-management-banner.png)

## Vì sao cần Order Management thống nhất

![Trung tâm điều phối order tới LIS, RIS, PHA](/storage/uploads/2026/05/his/bai-15-order-management-workflow.png)


Mỗi phân hệ (LIS, RIS, Pharmacy) có nội bộ riêng nhưng **đầu vào** đều là một "order" do BS phát ra. Một module **Order Management (ORM)** trung tâm:

- Cấp duy nhất `order_id` xuyên hệ thống.
- Kiểm tra trùng lặp, dị ứng, tương tác.
- Sinh phiếu thực hiện + chuyển phí sang Billing đồng bộ.
- Là nguồn truth duy nhất cho audit BHYT.

## Cấu trúc một order

```
Order
├── id, encounter_id, ordering_doctor, ordered_at
├── service_id (LOINC / mã DV BHYT / nội bộ)
├── priority (ROUTINE / URGENT / STAT)
├── target_dept (LIS / RIS / OR / PHA / NUR)
├── clinical_info (chẩn đoán, lý do)
├── status (xem state machine)
└── result_id (sau khi có KQ)
```

## State machine

```
DRAFT → SIGNED → SENT → ACCEPTED → IN_PROGRESS → COMPLETED → REVIEWED
              ↘ CANCELLED   ↘ REJECTED (đơn vị thực hiện trả về)
```

`REVIEWED` chỉ chuyển khi BS chỉ định **ký xác nhận đã đọc kết quả** — yếu tố quan trọng cho an toàn người bệnh và pháp lý.

## Order Set (gói lệnh)

Cho phép BS chọn nhiều dịch vụ một lúc theo template:

- "Khám sức khoẻ định kỳ" → 12 xét nghiệm + X-quang ngực + ECG.
- "Tiền phẫu khớp háng" → đông máu, sinh hoá, chức năng gan thận, X-quang khung chậu, ECG.
- "Sốt xuất huyết theo dõi" → CTM mỗi 12 h × 5 ngày, NS1, IgM/IgG.

Order set giảm 80 % thao tác và giảm sai sót quên chỉ định.

## Routing đến đơn vị thực hiện

```
Order ─► ORM hub ─┬─ XN máu       → LIS lab Hoá sinh
                  ├─ XN nước tiểu → LIS lab Vi sinh
                  ├─ X-quang      → RIS phòng X-quang 1
                  ├─ Thuốc        → Pharmacy nội trú
                  └─ Thủ thuật    → Khoa Nội (BS trực ban)
```

ORM dùng **routing rules** dựa trên:

- Loại dịch vụ
- Phòng/khoa nguồn (gần lab nào)
- Giờ hành chính / ngoài giờ
- Mức ưu tiên (STAT → lab cấp cứu)

## Hủy & sửa order

- **Hủy** trong vòng N phút (cấu hình theo loại) — nếu chưa SENT thì hủy cứng; nếu đã SENT phải gửi message hủy tới đơn vị thực hiện.
- **Sửa** = `CANCELLED` cũ + tạo mới, link `replaced_by`.
- Hủy sau khi `COMPLETED` chỉ với phê duyệt cấp cao + lý do — phục vụ correction billing.

## Phiếu thực hiện

In phiếu kèm **mã barcode/QR** → đơn vị thực hiện quét để:

- Đối chiếu BN (an toàn).
- Cập nhật trạng thái `ACCEPTED` → `IN_PROGRESS`.
- Đóng order khi nhập KQ.

## Bài học vận hành

- Mỗi service phải có **mã chuẩn**: nội bộ + mã BHYT + mã LOINC. Thiếu mã BHYT → không xuất XML 4210 được.
- Theo dõi **TAT (turnaround time)**: từ SIGNED đến COMPLETED. STAT < 60 phút, ROUTINE < 4 giờ.
- Cảnh báo nếu order SENT nhưng quá X giờ chưa ACCEPTED → có thể máy down / lab ngắt kết nối.

> **Bài tiếp theo:** ICD coding chuẩn cho BHYT & báo cáo dịch tễ.
