---
id: 019f5a01-d000-7001-his0-000000000401
title: "Bài 10: Cấp cứu (Emergency) — tiếp nhận khẩn & triage"
slug: bai-10-cap-cuu-tiep-nhan-triage
description: >-
  Quy trình cấp cứu trong HIS: tiếp nhận trước, hoàn thiện thủ tục sau,
  thang triage 5 mức (ESI), kích hoạt code (Code Blue, STEMI, Stroke), bàn
  giao nội trú/phẫu thuật.
duration_minutes: 60
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-10-cap-cuu-tiep-nhan-triage-banner.png
video_url: null
sort_order: 1
section_title: "Phần 4: Cấp cứu (Emergency)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Cấp cứu — triage ESI & code y khoa](/storage/uploads/2026/05/his/bai-10-cap-cuu-tiep-nhan-triage-banner.png)

## Đặc thù cấp cứu

![Triage tại ER với phân tầng ưu tiên ESI](/storage/uploads/2026/05/his/bai-10-cap-cuu-tiep-nhan-triage-workflow.png)


Cấp cứu (**ER / Emergency Department**) khác OPD ở 3 điểm:

1. **Tiếp nhận trước, thủ tục sau** — y lệnh phải chạy ngay cả khi chưa có MPI/BHYT.
2. **Thời gian quyết định mạng sống** — mọi action phải log millisecond.
3. **Phối hợp đa chuyên khoa song song** — không tuần tự.

## Triage — phân loại 5 mức (ESI)

| Mức | Mô tả | Thời gian tiếp cận BS |
| --- | --- | --- |
| 1 | Đe doạ tính mạng (ngừng thở, ngừng tim, sốc) | Tức thì |
| 2 | Nguy cơ cao (đau ngực, đột quỵ, chấn thương nặng) | < 10 phút |
| 3 | Khẩn cấp, cần nhiều CLS | < 30 phút |
| 4 | Bán khẩn cấp, ít CLS | < 60 phút |
| 5 | Không khẩn cấp | < 120 phút |

HIS phải có **màn hình triage** để điều dưỡng nhập sinh hiệu + chọn mức → bệnh nhân tự động vào hàng đợi tương ứng, hiển thị nổi bật trên dashboard ER.

## Luồng tiếp nhận

```
[BN tới ER] → [Triage ngay tại cửa] ─┬─ Mức 1-2 → Bàn cấp cứu, kích hoạt code
                                      ├─ Mức 3   → Buồng quan sát
                                      └─ Mức 4-5 → Khu chờ
        │
        ▼
[Y lệnh khẩn → LIS/RIS/Pharmacy] (chạy song song)
        │
        ▼
[Hoàn thiện thủ tục hành chính] (người nhà / sau khi BN ổn)
        │
        ▼
[Quyết định: về nhà / nhập viện / chuyển viện / tử vong]
```

## "Bệnh nhân vô danh" (Unknown patient)

Trường hợp tai nạn, hôn mê, không giấy tờ:

- HIS tạo MPI tạm với tên `UNK-YYYYMMDD-HHMMSS-001`, giới tính + ước lượng tuổi.
- Mọi y lệnh, kết quả gắn vào MPI tạm.
- Khi xác định danh tính → **MPI merge** sang hồ sơ thật (xem ch.2 — MPI merge).

## Activation codes

Bộ code phổ biến:

- **Code Blue** — ngừng tuần hoàn hô hấp tại bất kỳ đâu trong BV.
- **Code STEMI** — nhồi máu cơ tim ST chênh — kích hoạt cath-lab < 90 phút.
- **Code Stroke** — đột quỵ < 4.5 giờ — kích hoạt CT/MRI ưu tiên 1.
- **Code Trauma** — đa chấn thương — gọi đội ngoại + gây mê + ngân hàng máu.

HIS cần tích hợp **paging system** (loa nội bộ + push app + SMS) chỉ với 1 cú click.

## Đặc thù BHYT cấp cứu

- **Luôn được hưởng đúng tuyến**, kể cả khám trái tuyến.
- Sau cấp cứu, nếu chuyển nội trú thì giữ chế độ đúng tuyến cho cả đợt nội trú đó.
- Phải có **biên bản tiếp nhận cấp cứu** + chẩn đoán cấp cứu rõ ràng.

## Bàn giao đầu ra

| Đầu ra | Tài liệu sinh ra |
| --- | --- |
| Về nhà | Đơn thuốc, giấy ra ER, hẹn tái khám |
| Nhập viện | Lệnh nhập viện (ch.5 — IPD), bàn giao điều dưỡng |
| Chuyển phẫu thuật | Phiếu chuyển phòng mổ (ch.10) |
| Chuyển viện | Giấy chuyển tuyến (TT 14) — bắt buộc cho BHYT tuyến trên |
| Tử vong | Biên bản tử vong, giấy báo tử, bàn giao nhà tang lễ |

> **Bài tiếp theo:** Phối hợp ER ↔ phòng mổ ↔ ICU.
