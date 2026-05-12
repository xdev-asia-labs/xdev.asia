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


- **Luật Đấu thầu 22/2023/QH15** — hiệu lực 01/01/2024 (thay Luật ĐT 43/2013).
- **NĐ 24/2024/NĐ-CP** — quy định chi tiết Luật ĐT.
- **TT 07/2024/TT-BYT** — đấu thầu thuốc tại cơ sở y tế công lập.
- **TT 14/2023/TT-BYT** + cập nhật — đấu thầu VTYT, TTB y tế.
- **Luật KCB 15/2023/QH15** — cho phép cơ chế **xã hội hóa, liên doanh, đặt máy** trong BV công.
- **NĐ 96/2023/NĐ-CP** — hướng dẫn đặt máy, mượn máy phục vụ KCB.
- Cơ chế **mua sắm trực tiếp / chỉ định thầu trong cấp cứu** được mở rộng theo Luật ĐT 22/2023 (Đ.23) — giải quyết bài toán thiếu thuốc/VTYT từng gây khủng hoảng 2022–2023.

## Hình thức lựa chọn nhà thầu

| Hình thức | Áp dụng |
| --- | --- |
| Đấu thầu rộng rãi | Mặc định cho gói lớn |
| Đấu thầu hạn chế | Khi yêu cầu kỹ thuật cao |
| Chào giá cạnh tranh | Gói nhỏ |
| Chỉ định thầu | Khẩn cấp (cấp cứu, dịch bệnh), độc quyền |
| Mua sắm trực tiếp | Theo HĐ đã có |

## Quy trình tổng quát

```
[Lập kế hoạch nhu cầu] → [Lập KH lựa chọn nhà thầu] → [Phê duyệt]
        │
        ▼
[Phát hành HSMT / RFQ] → [Nhà thầu nộp HSDT]
        │
        ▼
[Mở thầu, đánh giá, phê duyệt KQ]
        │
        ▼
[Ký HĐ] → [Giao hàng — nhập kho HIS] → [Thanh toán]
```

## HIS hỗ trợ gì

- Lập **kế hoạch nhu cầu** dựa vào tiêu thụ trung bình kho (HSM/PHA) + dự báo.
- Quản lý **danh mục kết quả thầu** — giá trúng, NCC, thời hạn HĐ.
- Ràng buộc khi **nhập kho**: chỉ nhận của NCC trúng thầu, đúng giá HĐ.
- Cảnh báo HĐ sắp hết hạn → triển khai gói thầu mới đúng tiến độ.

## Mua sắm tập trung quốc gia / địa phương

- Bộ Y tế / Trung tâm Mua sắm tập trung làm thầu cho 1 số thuốc/VTYT.
- BV chỉ ký HĐ ăn theo, nhận hàng và thanh toán.
- HIS phải import được kết quả thầu tập trung.

## Tình huống chỉ định thầu khẩn

- Dịch bệnh, thiên tai.
- Cấp cứu cần thuốc cá biệt không trong kho.
- Thường ngắn hạn → vẫn phải đầy đủ chứng từ.

## Minh bạch & chống tiêu cực

- Mọi quyết định phê duyệt log audit.
- Báo cáo "giá thuốc/VTYT mua so với thị trường" định kỳ.
- Tích hợp **cổng đấu thầu quốc gia** (https://muasamcong.mpi.gov.vn) khi đăng tải.

## Bài học vận hành

- Lập kế hoạch nhu cầu là kỹ năng — sai làm thừa hoặc thiếu thuốc.
- Theo dõi **tỷ lệ giao hàng đúng hạn** của NCC → đánh giá lại khi đấu thầu lần sau.
- Có **cơ chế dự phòng**: HĐ chính + 1 NCC dự bị cho thuốc thiết yếu.
- Áp dụng cơ chế **mượn máy/đặt máy** đúng NĐ 96/2023 — phải minh bạch giá DV và VTYT đi kèm.

## Cơ sở pháp lý áp dụng (2026)

- Luật Đấu thầu **22/2023/QH15**.
- NĐ **24/2024/NĐ-CP**.
- Luật KCB **15/2023/QH15** + NĐ **96/2023/NĐ-CP**.
- TT **07/2024/TT-BYT** — đấu thầu thuốc.
- TT **14/2023/TT-BYT** (+ cập nhật) — đấu thầu VTYT, TTB.

> **Bài tiếp theo:** Dinh dưỡng, dịch vụ hỗ trợ & ngân hàng máu.
