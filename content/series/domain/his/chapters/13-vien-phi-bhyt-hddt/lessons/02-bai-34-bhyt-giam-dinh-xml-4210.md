---
id: 019f5a01-d000-7001-his0-000000001302
title: "Bài 34: BHYT — giám định, chuẩn dữ liệu QĐ 130/QĐ-BYT 2023"
slug: bai-34-bhyt-giam-dinh-xml-4210
description: >-
  Cổng giám định BHXH, chuẩn dữ liệu đầu ra HIS theo **QĐ 130/QĐ-BYT 2023**
  (thay QĐ 4210/QĐ-BHXH), Luật BHYT sửa đổi 51/2024, giám định tự động, xuất
  toán & quy trình BV phản hồi.
duration_minutes: 60
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-34-bhyt-giam-dinh-xml-4210-banner.png
video_url: null
sort_order: 2
section_title: "Phần 13: Viện phí, BHYT & Hóa đơn điện tử"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![BHYT — giám định & XML 4210](/storage/uploads/2026/05/his/bai-34-bhyt-giam-dinh-xml-4210-banner.png)

## Cổng tiếp nhận BHXH

![Giám định viên BHYT soi từng dòng phí trên claim](/storage/uploads/2026/05/his/bai-34-bhyt-giam-dinh-xml-4210-workflow.png)


URL chính: `https://gdbhyt.baohiemxahoi.gov.vn` — gọi là **Cổng giám định BHYT**. Tích hợp 2 mặt:

- **Realtime** lúc tiếp nhận: kiểm tra thẻ, lịch sử KCB, đăng ký KCB.
- **Batch** sau ra viện: gửi bộ XML hồ sơ đề nghị thanh toán.

## Chuẩn dữ liệu hiện hành: QĐ 130/QĐ-BYT 2023

> **Quyết định 130/QĐ-BYT** ngày 18/01/2023 ban hành **chuẩn dữ liệu đầu ra phục vụ quản lý, giám định, thanh toán BHYT** — **thay thế QĐ 4210/QĐ-BHXH (2017)** trước đây. BV cần cập nhật mapping HIS theo phiên bản mới nhất, vì BHXH có công văn cập nhật từng đợt.

Bộ XML chính (cấu trúc tương đương trước, được mở rộng & chuẩn hoá lại theo BYT):

| File | Nội dung |
| --- | --- |
| XML 1 (CHI TIET KCB) | Thông tin chung lượt KCB, BN, tổng phí |
| XML 2 (CHI TIET THUOC) | Danh sách thuốc đã sử dụng |
| XML 3 (CHI TIET DICH VU KT) | Dịch vụ kỹ thuật, CLS, phẫu thuật |
| XML 4 (CHI TIET CDHA) | Kết quả CĐHA |
| XML 5 (CHI TIET XN) | Kết quả XN |
| XML 6 (HSBA tóm tắt) | Diễn biến |
| XML 7 (Giấy chuyển tuyến) | Khi có chuyển tuyến |
| XML 8/9/… | Bổ sung theo chuyên khoa (sản, ung bướu, lọc máu…) |

Bộ XML này phải khớp tuyệt đối với HSBA điện tử (TT 46/2018 + lộ trình mở rộng).

## Giám định BHYT

Có 3 cấp:

1. **Pre-screen tại BV**: HIS tự kiểm tra trước khi gửi.
2. **Giám định điện tử BHXH**: rule engine quốc gia chạy tự động.
3. **Giám định viên**: con người xem ca có warning.

## Lý do bị xuất toán phổ biến

| Mã lỗi | Mô tả | Phòng tránh |
| --- | --- | --- |
| Sai chẩn đoán — dịch vụ | Mismatch ICD ↔ DV | Bộ rule ICD-Service tốt |
| Trùng dịch vụ trong N ngày | Cùng XN cho cùng BN | Cảnh báo CPOE |
| Thiếu chỉ định / phiếu | Có DV nhưng không có chỉ định trong HSBA | Workflow bắt buộc chỉ định trước thực hiện |
| Sai mã thẻ / hết hạn | Không kiểm BHYT realtime | Tích hợp realtime check |
| Vượt định mức / trần | Vd. ngày giường > giới hạn cho ICD | Cảnh báo tự động |
| Sai mức hưởng | Áp 100% nhưng thẻ chỉ 80% | Lấy mức từ cổng, không nhập tay |

## Quy trình phản hồi xuất toán

```
[BHXH thông báo xuất toán] → [Phòng KHTH/BHYT BV xem]
        │
        ▼
[Phân loại: chấp nhận / khiếu nại]
        │
        ▼
[Gửi giải trình + tài liệu bổ sung]
        │
        ▼
[BHXH xem xét lại] → Quyết định cuối
```

HIS cần **module quản lý xuất toán**: theo dõi từng ca bị treo, người phụ trách, deadline.

## Quyết toán định kỳ

- Hàng tháng: chốt số liệu, đối chiếu với BHXH.
- Hàng quý: thanh toán số tạm ứng + thực thanh.
- Hàng năm: quyết toán cả năm.

## Tác động của Luật BHYT sửa đổi 51/2024 (hiệu lực 07/2025)

- **Thông tuyến tỉnh nội trú** với một số nhóm bệnh — HIS cần kiểm tra mức hưởng động theo tuyến BV nơi điều trị.
- **Chuyển tuyến điện tử** liên thông giữa các cơ sở — không còn giấy chuyển viện thuần giấy.
- Mở rộng đối tượng tham gia & quyền lợi — danh mục thuốc/DV thanh toán BHYT thay đổi → cần đồng bộ TT 04/2024, TT 14/2024.
- Tăng yêu cầu công khai chi phí: BV phải hiển thị mức tự chi trả của BN theo thời gian thực.

## Bài học vận hành

- Có **dashboard "tỷ lệ xuất toán"** theo khoa/bác sĩ → coaching.
- Bộ rules pre-screen tại BV phải sao y rule BHXH (cập nhật theo CV mới của BHXH/BYT).
- Đừng để dồn công nợ BHYT > 60 ngày — ảnh hưởng dòng tiền.
- Có **module quản lý phiên bản schema** XML — BHXH/BYT đổi schema không báo trước nhiều, cần test environment trước khi deploy.

## Cơ sở pháp lý áp dụng (2026)

- Luật BHYT **25/2008/QH12** sửa đổi bởi **51/2024/QH15** (hiệu lực 01/07/2025).
- Luật KCB **15/2023/QH15**.
- NĐ **75/2023/NĐ-CP** — sửa đổi NĐ 146/2018 hướng dẫn Luật BHYT.
- **QĐ 130/QĐ-BYT 2023** — chuẩn dữ liệu đầu ra HIS phục vụ giám định BHYT (thay QĐ 4210/QĐ-BHXH 2017).
- TT **39/2024/TT-BYT** *(và các bản cập nhật)* — giá DV KCB BHYT.
- TT **04/2024/TT-BYT**, TT **14/2024/TT-BYT** — danh mục thuốc BHYT.
- TT **46/2018/TT-BYT** — HSBA điện tử (cơ sở dữ liệu HSBA gắn với XML).

> **Bài tiếp theo:** Hoá đơn điện tử (HDDT) theo NĐ 123/2020 + NĐ 70/2025.
