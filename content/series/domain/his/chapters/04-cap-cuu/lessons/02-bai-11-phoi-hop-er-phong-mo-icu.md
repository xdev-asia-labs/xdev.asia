---
id: 019f5a01-d000-7001-his0-000000000402
title: "Bài 11: Phối hợp ER — Phòng mổ — ICU và bàn giao điều dưỡng"
slug: bai-11-phoi-hop-er-phong-mo-icu
description: >-
  Khi cấp cứu cần can thiệp khẩn: chuyển thẳng phòng mổ hoặc ICU, làm sao
  HIS đảm bảo y lệnh không "rơi" và bàn giao điều dưỡng (handover) đầy đủ.
duration_minutes: 45
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-11-phoi-hop-er-phong-mo-icu-banner.png
video_url: null
sort_order: 2
section_title: "Phần 4: Cấp cứu (Emergency)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Handover ER ↔ Phòng mổ ↔ ICU](/storage/uploads/2026/05/his/bai-11-phoi-hop-er-phong-mo-icu-banner.png)

## Bài toán

![Bệnh nhân được chuyển nhanh giữa ER, OR, ICU](/storage/uploads/2026/05/his/bai-11-phoi-hop-er-phong-mo-icu-workflow.png)


Cấp cứu kết thúc không phải bằng "ra viện" mà thường là **chuyển sang đơn vị khác**: phòng mổ (OR), ICU, khoa nội trú. Mỗi lần chuyển là một **handover** — và là điểm có rủi ro y khoa cao nhất.

## Mô hình chuyển

```
ER ──► OR ──► PACU ──► ICU ──► Khoa thường ──► Ra viện
   ▲          │
   │          ▼
   └── ICU (bỏ qua OR)
```

## Y lệnh phải đi cùng bệnh nhân

Mọi **active orders** của ER phải:

- **Hoặc** được hoàn tất trước khi chuyển.
- **Hoặc** được "review & continue" bởi BS đơn vị tiếp nhận.

Không bao giờ để y lệnh `IN_PROGRESS` mà chủ thể `LOCATION` đã đổi mà chưa ai re-confirm — đây là nguyên nhân hàng đầu của sự cố thuốc.

## Handover protocol (SBAR)

HIS nên cung cấp form **SBAR** cho điều dưỡng & bác sĩ:

| Mục | Nội dung |
| --- | --- |
| **S**ituation | Tình trạng hiện tại (sinh hiệu, ý thức, đau) |
| **B**ackground | Tiền sử, dị ứng, lý do vào viện |
| **A**ssessment | Chẩn đoán hiện tại, vấn đề cần lưu ý |
| **R**ecommendation | Y lệnh đang chạy, theo dõi gì |

Form được ký số bởi **người bàn giao + người tiếp nhận** — pháp lý rõ ràng nếu sự cố.

## Theo dõi vị trí bệnh nhân (Patient Location Tracking)

HIS cần `patient_location` realtime: ER bay 1 → OR phòng 3 → PACU → ICU giường 7. Mục đích:

- Người nhà tra cứu ở kiosk.
- Thuốc & vật tư cấp đúng nơi.
- BHYT tính tiền giường đúng loại (thường, hồi sức, nhiễm…).

## Tích hợp với nội trú (IPD)

Khi quyết định nhập viện:

- ER tạo `Admission Order` → IPD nhận và phân giường.
- Toàn bộ y lệnh ER được **sao chép sang đợt nội trú** (admission_id mới) nhưng giữ link tới ER encounter để truy ngược.
- Ngày giờ vào viện chính thức = giờ tiếp nhận ER (quy định BHYT).

## Tử vong tại ER

Quy trình:

1. BS xác nhận tử vong, ghi giờ — chỉ BS được phép.
2. HIS sinh **Biên bản tử vong** (mẫu Bộ Y tế).
3. Khoá mọi thao tác trên hồ sơ trừ vai trò QLCL.
4. Báo cáo CDC (nếu là bệnh truyền nhiễm nhóm A) tự động qua API HSSK.

## Bài học vận hành

- ER thường chạy **Mobile workstation** (xe đẩy) — đảm bảo HIS responsive trên tablet.
- Đặt **shortcut bàn phím** cho các action sống còn (`F2` = Code Blue, `F3` = STEMI…).
- Backup offline: ER phải có **chế độ "giấy" dự phòng** với mẫu in sẵn — khi mạng down vẫn vận hành.

> **Bài tiếp theo:** Nội trú (IPD) — tiếp nhận, phân giường, theo dõi.
