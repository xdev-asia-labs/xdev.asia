---
id: 019f5a01-d000-7001-his0-000000000803
title: "Bài 21: Ứng dụng AI trong CĐHA & quy trình triển khai"
slug: bai-21-ai-trong-cdha
description: >-
  AI hỗ trợ đọc X-quang ngực, sàng lọc đột quỵ trên CT sọ, mammography. Quy
  trình tích hợp AI vào RIS/PACS và kiểm soát chất lượng / pháp lý.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-21-ai-trong-cdha-banner.png
video_url: null
sort_order: 3
section_title: "Phần 8: Chẩn đoán hình ảnh (RIS / PACS)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![AI trong chẩn đoán hình ảnh](/storage/uploads/2026/05/his/bai-21-ai-trong-cdha-banner.png)

## Các use case phổ biến

![Heatmap AI gợi ý vùng bất thường trên ảnh](/storage/uploads/2026/05/his/bai-21-ai-trong-cdha-workflow.png)


| Use case | Lợi ích |
| --- | --- |
| AI X-quang ngực | Sàng lọc lao, COVID, gãy xương — giảm 70 % phim "negative" mất thời gian |
| AI CT sọ — đột quỵ | Phát hiện tắc mạch lớn (LVO) → ưu tiên đọc & gọi STEMI/Stroke |
| AI mammography | Sàng lọc K vú, tăng độ nhạy |
| AI phát hiện nhân phổi | Theo dõi nốt, tự động đo kích thước qua các lần chụp |
| AI tự động đo (cardiac, gan) | Giảm thao tác thủ công |

## Mô hình tích hợp

```
PACS Router → AI Engine ──► RIS (preliminary report)
                       └─► PACS (overlay / SR object)
```

- AI nhận DICOM, trả lại **DICOM SR** (structured report) hoặc overlay (presentation state).
- Kết quả AI hiển thị trong viewer như "thông tin tham khảo".

## Vai trò pháp lý

- **AI không thay thế BS** — kết quả cuối cùng do BS ký.
- BS có quyền không đồng ý với AI; thao tác này được log.
- BV cần có **danh mục thiết bị/thuật toán AI đã được Bộ Y tế phê duyệt** (theo TT 30/2021 hoặc tương đương) trước khi đưa vào lâm sàng.

## Đo lường hiệu quả

- Sensitivity / Specificity trên dữ liệu nội bộ (validation lại định kỳ).
- Đo TAT trước/sau AI.
- Tỷ lệ AI flag mà BS đổi quyết định (clinical impact).

## Bias & QA

- Mẫu huấn luyện thường thiếu dân số châu Á → cần re-validate cho VN.
- Theo dõi drift: phân phối ảnh thay đổi (đổi máy CT, đổi protocol) → AI có thể giảm chất lượng.

## Bài học vận hành

- Bắt đầu từ "shadow mode" — AI chạy ngầm vài tháng trước khi cho BS thấy.
- Có **kill switch** để tắt AI khi nghi ngờ sai.
- Đào tạo BS hiểu giới hạn AI để tránh "automation bias".

> **Bài tiếp theo:** Pharmacy — kê đơn, tương tác thuốc, cấp phát.
