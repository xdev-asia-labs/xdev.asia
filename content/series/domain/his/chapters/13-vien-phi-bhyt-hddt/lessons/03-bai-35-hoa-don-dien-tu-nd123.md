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


- **Nghị định 123/2020/NĐ-CP** — quy định gốc về HĐĐT.
- **NĐ 70/2025/NĐ-CP** — sửa đổi, bổ sung NĐ 123/2020 (mở rộng, chặt chẽ hơn về gửi bảng kê từng giao dịch).
- **TT 78/2021/TT-BTC** — hướng dẫn NĐ 123/2020 (có bản cập nhật theo NĐ 70/2025).
- Bắt buộc HĐĐT toàn quốc từ 01/07/2022; mọi BV phải dùng HĐĐT cho viện phí — không dùng hoá đơn giấy.
- Từ 2025: một số nghiệp vụ bắt buộc **HĐĐT từ máy tính tiền** kết nối CQT (áp dụng với BV có dịch vụ bán lẻ trực tiếp — vd. nhà thuốc BV).

## Loại hoá đơn

| Loại | Đặc điểm |
| --- | --- |
| HĐĐT có mã của CQT | Tổng cục Thuế cấp mã từng hoá đơn |
| HĐĐT không mã | Tự cấp mã, gửi dữ liệu CQT |

BV thường dùng **có mã** vì khối lượng vừa phải.

## Tích hợp với HIS

```
[HIS — phiếu thu] → [Module HDDT] → [Tổ chức cung cấp HDDT (Viettel, VNPT, Misa...)]
                                         │
                                         ▼
                                  [Tổng cục Thuế]
```

HIS phải:

- Map **viện phí item → mã HHDV (hàng hoá dịch vụ)**.
- Truyền `MST` (mã số thuế) BN nếu là tổ chức.
- Nhận lại `Mã HĐ + ký số CQT` → in/gửi BN.

## Khi nào phát hành

- Sau khi BN thanh toán xong hoặc khi xuất viện chốt phí.
- BHYT đồng chi trả: **phần BN tự trả** mới xuất HĐĐT.

## Điều chỉnh / Thay thế / Hủy

| Tình huống | Hành động |
| --- | --- |
| Sai sót thông tin BN | Hoá đơn **điều chỉnh** |
| Sai số tiền | **Thay thế** (huỷ + phát mới) |
| Không phát sinh giao dịch | **Hủy** |

Mọi thao tác sửa đều phải có **Biên bản thoả thuận** với người mua (trừ trường hợp pháp luật cho phép tự sửa) và gửi CQT.

## Phát hành cho người mua

- Gửi qua email / SMS / app BV.
- Có **link tra cứu HĐ trên cổng tra cứu của CQT** (https://hoadondientu.gdt.gov.vn).
- Có thể in giấy tham khảo, không có giá trị thay HĐ.

## Báo cáo

- Bảng kê HĐĐT theo ngày / tháng.
- Tích hợp với phần mềm kế toán (Misa, Bravo, SAP).
- Báo cáo doanh thu / VAT / số HĐ phát hành.

## Bài học vận hành

- Có **giao diện huỷ / điều chỉnh có phê duyệt** — tránh staff sửa tuỳ tiện.
- Khi cổng CQT **down**, HIS phải có hàng đợi gửi lại + cảnh báo.
- Lưu ý đối tượng đặc thù: trẻ < 6 tuổi (BHYT 100%), cán bộ HĐ chính sách (miễn) → có thể không phát hành HĐ với tiền BN trả = 0.
- Theo NĐ 70/2025: cần nhật ký từng giao dịch chi tiết (line-item) chứ không chỉ tổng trên HĐ.

## Cơ sở pháp lý áp dụng (2026)

- NĐ **123/2020/NĐ-CP** + **NĐ 70/2025/NĐ-CP**.
- TT **78/2021/TT-BTC** + bản cập nhật hướng dẫn NĐ 70/2025.
- Luật **Quản lý thuế 38/2019/QH14**.
- Luật **GDĐT 20/2023/QH15** — chữ ký số HĐ.

> **Bài tiếp theo:** Bảo hiểm tư nhân (eClaim) — kết nối với hãng bảo hiểm.
