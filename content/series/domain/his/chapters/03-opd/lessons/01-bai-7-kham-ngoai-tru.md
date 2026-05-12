---
id: 019f5a01-d000-7001-his0-000000000301
title: "Bài 7: Khám ngoại trú (OPD) — luồng phòng khám"
slug: bai-7-kham-ngoai-tru
description: >-
  Quy trình khám ngoại trú: hỏi bệnh, khám lâm sàng, chỉ định CLS, đọc kết
  quả, kê đơn, ra y lệnh — và những bẫy thường gặp với BHYT ngoại trú.
duration_minutes: 70
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-7-kham-ngoai-tru-banner.png
video_url: null
sort_order: 1
section_title: "Phần 3: Khám ngoại trú (OPD)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Khám ngoại trú (OPD) — luồng end-to-end](/storage/uploads/2026/05/his/bai-7-kham-ngoai-tru-banner.png)

## Bối cảnh

![Bác sĩ khám tại phòng khám, EMR và đơn thuốc số hóa](/storage/uploads/2026/05/his/bai-7-kham-ngoai-tru-workflow.png)


OPD (**Outpatient Department**) là nơi xử lý 70–90 % lượt khám của bệnh viện. Doanh thu lớn, nhưng cũng là nơi BHYT bị **xuất toán nhiều nhất** do thao tác ghi chép nhanh, dễ thiếu căn cứ.

## Actor

| Vai trò | Hành động chính |
| --- | --- |
| Bác sĩ khám | Hỏi bệnh, khám, ra chỉ định, kê đơn, kết luận |
| Điều dưỡng phòng khám | Đo sinh hiệu, hướng dẫn, hỗ trợ thủ thuật |
| Thu ngân | Thu tạm ứng cho CLS / thuốc |
| Bệnh nhân | Đi làm CLS, quay lại đọc kết quả |

## Luồng nghiệp vụ điển hình

```
[Gọi vào phòng] → [Đo sinh hiệu (ĐD)] → [Hỏi bệnh / Khám (BS)]
        │
        ▼
[Cần CLS?]──Y──► [Ra chỉ định LIS/RIS/Thủ thuật]
        │             │
        │             ▼
        │    [BN thu phí → đi làm → KQ về EMR]
        │             │
        ▼             ▼
[Kết luận] ◄──────────┘
        │
        ▼
[Kê đơn / hẹn tái khám / nhập viện?]
        │
        ▼
[Phiếu thu cuối / xuất hoá đơn / lấy thuốc]
```

## Bệnh án ngoại trú (mẫu Bộ Y tế)

Một lượt OPD phải đầy đủ các trường (theo TT 56/TT 46):

- Lý do đến khám
- Diễn biến bệnh, tiền sử bản thân & gia đình
- Khám toàn thân + cơ quan bộ phận
- Sinh hiệu (M, T, HA, NT, SpO₂, BMI)
- Chẩn đoán **mã ICD-10 chính + phụ**
- Hướng xử trí
- Đơn thuốc / chỉ định CLS
- Lời dặn, hẹn tái khám
- Chữ ký số bác sĩ (xem ch.12)

Thiếu bất kỳ trường nào → BHYT từ chối thanh toán cho lượt đó.

## State machine OPD encounter

```
WAITING → IN_EXAM → AWAITING_CLS → IN_EXAM (đọc KQ) → DONE
                                       ↘ TRANSFER_IPD (nhập viện)
                                       ↘ REFERRAL (chuyển tuyến)
```

`AWAITING_CLS` là trạng thái rất quan trọng: bệnh nhân **rời phòng khám** đi làm xét nghiệm/X-quang. Bác sĩ "trả số" để gọi bệnh nhân khác. HIS phải đẩy phòng khám hiện tại vào hàng đợi `RECALL` để khi KQ về sẽ ưu tiên gọi lại.

## Quy tắc nghiệp vụ với BHYT

1. **Mỗi đợt khám = 1 phiếu**, không gộp 2 chuyên khoa vào 1 phiếu BHYT.
2. **Chỉ định CLS phải có chẩn đoán** tương ứng — XN không liên quan chẩn đoán → xuất toán.
3. **Trùng dịch vụ trong 30 ngày** (cùng XN, không có lý do) → BHYT cảnh báo / xuất toán.
4. **Đơn thuốc ngoại trú** không quá 30 ngày, BHYT bệnh mạn tính có thể tới 60–90 ngày theo TT 52.
5. **Chữ ký bác sĩ + dược sĩ** trên đơn — bắt buộc nếu là thuốc kê đơn.

## Tích hợp với các phân hệ

- **LIS / RIS** — tạo order, nhận kết quả về EMR (ch.7, 8).
- **Pharmacy** — đẩy đơn về kho cấp phát (ch.9).
- **Billing** — chốt phí cuối phiên (ch.13).
- **MRA** — đóng hồ sơ ngoại trú khi `DONE`.

## Bài học vận hành

- Đặt **timer cảnh báo** nếu encounter `AWAITING_CLS` quá 4 giờ chưa đóng → bệnh nhân quên quay lại.
- **Template hỏi bệnh** theo chuyên khoa (Nội tổng quát, Tim mạch, Da liễu…) tăng tốc 40 % thời gian nhập liệu.
- Mỗi tuần xuất **báo cáo "thiếu trường BHYT"** để các BS tự sửa trước khi quyết toán tháng.

> **Bài tiếp theo:** Sinh hiệu & template hỏi bệnh.
