---
id: 019f5a01-d000-7001-his0-000000000901
title: "Bài 22: Pharmacy — kê đơn, duyệt & cấp phát"
slug: bai-22-pharmacy-ke-don-duyet-cap-phat
description: >-
  Vòng đời đơn thuốc trong HIS: kê — duyệt dược — cấp phát ngoại trú / nội
  trú, kiểm soát số lô, hạn dùng, FEFO, in tem nhãn theo **TT 22/2024/TT-BYT**
  (thay TT 52/2017) và Luật KCB 15/2023.
duration_minutes: 60
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-22-pharmacy-ke-don-duyet-cap-phat-banner.png
video_url: null
sort_order: 1
section_title: "Phần 9: Dược (Pharmacy)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Pharmacy — kê đơn, duyệt, cấp phát](/storage/uploads/2026/05/his/bai-22-pharmacy-ke-don-duyet-cap-phat-banner.png)

## Phân loại đơn thuốc

![Bác sĩ kê đơn → dược sĩ duyệt → phát thuốc](/storage/uploads/2026/05/his/bai-22-pharmacy-ke-don-duyet-cap-phat-workflow.png)


| Loại | Đặc điểm |
| --- | --- |
| Đơn ngoại trú | Bệnh nhân tự lấy / mua, đơn riêng từng đợt khám |
| Đơn nội trú | Y lệnh hằng ngày, kho cấp phát theo bệnh nhân |
| Đơn ra viện | Mang về dùng tiếp, có thể có BHYT mạn tính |
| Đơn cấp cứu | STAT, cấp ngay, hoàn thiện sau |

## Quy tắc kê theo TT 22/2024/TT-BYT *(văn bản hiện hành 2026)*

> **TT 22/2024/TT-BYT** quy định kê đơn thuốc hóa dược, sinh phẩm trong điều trị ngoại trú — **thay thế TT 52/2017/TT-BYT**. Áp dụng cùng Luật KCB 15/2023 và Luật Dược 105/2016 (sửa đổi 44/2024).

- Đơn thuốc gây nghiện / hướng thần / tiền chất → **mẫu riêng**, có sổ theo dõi (theo TT 20/2017 + sửa đổi).
- Số lượng tối đa cho 1 đợt (TT 22/2024):
  - Thường: ≤ 30 ngày.
  - Bệnh mạn tính (THA, ĐTĐ, hen, COPD, viêm gan virus B/C, suy giáp, parkinson…): ≤ 90 ngày khi đủ điều kiện *(mở rộng so với TT 52)*.
  - Gây nghiện: ≤ 10 ngày (≤ 30 ngày cho ung thư giai đoạn cuối/AIDS).
- Bắt buộc ghi: tên thuốc + nồng độ/hàm lượng + dạng bào chế + liều + đường dùng + tần suất + thời điểm.
- **Đơn điện tử** có chữ ký số được công nhận giá trị pháp lý theo Luật GDĐT 20/2023 và Luật KCB 15/2023.
- Liên thông **Đơn thuốc Quốc gia** (donthuocquocgia.vn) — bắt buộc với một số nhóm thuốc.

## Vòng đời đơn

```
KÊ (BS) → DUYỆT DƯỢC SĨ → CẤP PHÁT (kho) → NHẬN THUỐC (BN/ĐD) → DÙNG (eMAR)
                          │
                          ▼ thiếu thuốc → ĐỔI / TRẢ
```

Bước **duyệt dược sĩ** bắt buộc với:

- Thuốc gây nghiện / hướng thần.
- Kháng sinh nhóm hạn chế (carbapenem, colistin).
- Thuốc giá cao (vd. > 1 triệu / liều).

## Cảnh báo CPOE khi kê

- **Dị ứng** (allergy check) — chặn cứng nếu BN có history dị ứng nhóm thuốc đó.
- **Tương tác thuốc** (xem bài 23) — popup mức D/X bắt buộc xác nhận lý do.
- **Trùng nhóm** — đã có 1 NSAID, kê thêm NSAID khác.
- **Liều theo cân nặng / tuổi / chức năng thận** — gợi ý liều, cảnh báo quá liều.
- **Thai kỳ / cho con bú** — phân loại FDA (A/B/C/D/X).

## Cấp phát kho dược

Nguyên tắc:

- **FEFO (First Expired First Out)** — ưu tiên xuất lô gần hạn.
- Quét **mã DataMatrix GS1** trên hộp thuốc → kiểm tra số lô + hạn dùng + chống thuốc giả.
- In tem nhãn lên gói phát cho bệnh nhân:
  - Tên thuốc, hàm lượng
  - Liều, đường dùng, tần suất
  - Lưu ý (uống xa bữa, không uống với sữa…)

## Cấp phát nội trú

- Cấp theo lịch (UD — Unit Dose, từng liều / từng giờ) hoặc theo ngày.
- Tủ thuốc khoa (ADC — Automated Dispensing Cabinet) tích hợp eMAR.
- Trả thuốc thừa: BN đổi y lệnh → trả về kho, ghi nhận, hoàn phí.

## Đặc thù BHYT *(cập nhật 2026)*

- Danh mục thuốc hóa dược BHYT theo **TT 04/2024/TT-BYT** (thay TT 30/2018, TT 20/2022).
- Danh mục thuốc YHCT BHYT theo **TT 14/2024/TT-BYT**.
- Tỷ lệ chi trả riêng cho từng thuốc (vd. 30/50/100 %).
- Trần thanh toán cho thuốc đặc trị, biosimilar; tỷ lệ thanh toán có thay đổi sau **Luật BHYT sửa đổi 51/2024** (hiệu lực 07/2025).
- Thuốc hiếm/thuốc cứu mệnh: cơ chế đặc biệt theo Luật Dược sửa đổi 44/2024.

## Bài học vận hành

- Quản lý **danh mục thuốc** là việc liên tục — TT 04/2024 và TT 14/2024 sẽ có cập nhật phụ lục theo từng đợt; HIS phải có job đồng bộ định kỳ.
- Chống thuốc giả: bắt buộc quét DataMatrix, đối chiếu cổng truy xuất quốc gia.
- Báo cáo **ADR (phản ứng có hại)** — HIS có form gửi DAV (Cục Quản lý dược) qua hệ thống mới (vigiACCESS / Canhgiacduoc.org.vn).

## Cơ sở pháp lý áp dụng (2026)

- Luật KCB **15/2023/QH15** (hiệu lực 01/01/2024).
- Luật Dược **105/2016/QH13** (sửa đổi **44/2024/QH15**).
- Luật GDĐT **20/2023/QH15** — chữ ký số đơn thuốc.
- TT **22/2024/TT-BYT** — kê đơn ngoại trú (thay TT 52/2017).
- TT **04/2024/TT-BYT** — danh mục thuốc hóa dược BHYT.
- TT **14/2024/TT-BYT** — danh mục thuốc YHCT BHYT.
- TT **20/2017/TT-BYT** + sửa đổi — quản lý thuốc gây nghiện/hướng thần.

> **Bài tiếp theo:** Tương tác thuốc & cảnh báo lâm sàng.
