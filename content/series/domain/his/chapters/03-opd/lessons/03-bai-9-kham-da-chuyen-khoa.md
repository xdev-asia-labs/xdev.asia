---
id: 019f5a01-d000-7001-his0-000000000303
title: "Bài 9: Khám đa chuyên khoa, chuyển khoa, hội chẩn ngoại trú"
slug: bai-9-kham-da-chuyen-khoa
description: >-
  Bệnh nhân khám 3-4 chuyên khoa trong cùng buổi — HIS phải gắn các lượt
  thành 1 visit, chia sẻ kết quả CLS, tránh chỉ định trùng và tổng hợp viện
  phí cuối ngày.
duration_minutes: 45
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-9-kham-da-chuyen-khoa-banner.png
video_url: null
sort_order: 3
section_title: "Phần 3: Khám ngoại trú (OPD)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Khám đa chuyên khoa & chuyển khoa nội bộ](/storage/uploads/2026/05/his/bai-9-kham-da-chuyen-khoa-banner.png)

## Khái niệm Visit vs Encounter

![Bệnh nhân được referral giữa các chuyên khoa](/storage/uploads/2026/05/his/bai-9-kham-da-chuyen-khoa-workflow.png)


- **Encounter** — 1 lượt khám tại 1 phòng, 1 bác sĩ.
- **Visit** — toàn bộ "lần đến viện" của bệnh nhân trong ngày, có thể gồm nhiều encounter.

Ví dụ: bệnh nhân khám Nội → BS Nội cho khám thêm Tim mạch & Mắt → 1 visit chứa 3 encounter.

## Mô hình dữ liệu

```
Visit (ngày, MPI, lý do tổng)
  ├── Encounter #1 (Nội tổng quát)
  ├── Encounter #2 (Tim mạch) — refer_from = Encounter #1
  └── Encounter #3 (Mắt)      — refer_from = Encounter #1
```

Tất cả CLS gắn vào `visit_id` để **tránh chỉ định trùng** và để cuối ngày **gộp 1 hoá đơn**.

## Chuyển khoa (Internal Referral)

Quy trình:

1. BS phòng A bấm "Chuyển khoa" → chọn chuyên khoa B, lý do, mức ưu tiên.
2. HIS sinh `Encounter #2`, đẩy số ưu tiên 2 vào QMS phòng B.
3. BN không phải qua quầy lễ tân — đi thẳng tới phòng B.
4. BS phòng B nhìn được toàn bộ ghi chép & CLS của Encounter #1.

Lưu ý BHYT:

- **Chuyển khoa nội bộ** trong cùng đợt khám: BHYT vẫn áp như đúng tuyến.
- Bác sĩ phòng B phải có **chẩn đoán riêng** (không copy y nguyên), nếu không sẽ bị tính trùng dịch vụ.

## Hội chẩn ngoại trú

Khi BS phòng A muốn xin ý kiến BS phòng B nhưng **không chuyển bệnh nhân**:

- Tạo "Yêu cầu hội chẩn" — gồm tóm tắt, câu hỏi.
- BS phòng B trả lời trên EMR — không tạo encounter mới, không phát sinh phí (hoặc phí tư vấn nội bộ tuỳ BV).
- Hội chẩn cấp cao (3 BS trở lên) tạo **Biên bản hội chẩn** — chứng từ pháp lý.

## Chia sẻ kết quả CLS giữa encounter

Mặc định: mọi kết quả LIS/RIS trong cùng visit hiển thị cho **mọi encounter** trong visit đó.

Cảnh báo trùng:

- Nếu BS phòng B định chỉ định lại XN đã có **trong vòng 24 giờ** → HIS hỏi "Đã có kết quả lúc 09:30, vẫn muốn chỉ định mới?"
- Nếu vẫn chỉ định, lưu lý do — phục vụ giải trình BHYT.

## Tổng hợp viện phí cuối visit

- Khi tất cả encounter `DONE` → hệ thống chốt visit.
- Sinh **1 hoá đơn duy nhất** gồm tiền khám + CLS + thuốc + thủ thuật.
- BHYT — phần đồng chi trả tách dòng riêng cho từng dịch vụ.

> **Bài tiếp theo:** Cấp cứu (Emergency) — tiếp nhận khẩn, triage và phối hợp đa khoa.
