---
id: 019d8b39-bb15-7015-c015-ee1500000015
title: 'Bài 15: Challenge 60 phút — House Prices nâng cao'
slug: bai-15-challenge-house-prices
description: >-
  Bài thử thách time-boxed: xây pipeline hoàn chỉnh và cải thiện điểm số bằng
  tuning + feature engineering có kiểm soát.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 'Phần 2: Workflow chuẩn công nghiệp'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6479" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6479)"/>

  <!-- Decorations -->
  <g>
    <circle cx="841" cy="173" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="823" cy="95" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="56" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="277" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="243" x2="1100" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="273" x2="1050" y2="343" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1075.9089653438086,224 1075.9089653438086,262 1043,281 1010.0910346561914,262 1010.0910346561914,224 1043,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI &amp; ML — Bài 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 15: Challenge 60 phút — House Prices</tspan>
      <tspan x="60" dy="42">nâng cao</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Workflow chuẩn công nghiệp</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Đây là challenge tổng hợp đầu tiên. Bạn sẽ quay lại bài toán nhà đất nhưng làm ở mức trưởng thành hơn: pipeline, xử lý missing, feature engineering, cross-validation và tuning. Mục tiêu là ghép các kỹ năng rời rạc thành một workflow hoàn chỉnh.

## Mục tiêu bài học

- Hoàn thành một challenge regression tương đối đầy đủ.
- Kết hợp preprocessing, pipeline và tuning trong cùng một luồng.
- Viết phần tổng kết rõ ràng như một mini báo cáo kỹ thuật.

## Yêu cầu challenge

Bạn cần nộp 3 đầu ra: notebook hoặc script huấn luyện, file mô tả quyết định kỹ thuật và bảng so sánh ít nhất 3 thử nghiệm mô hình.

## Hướng làm đề xuất

1. Bắt đầu bằng baseline đơn giản.
2. Kiểm tra missing values và kiểu dữ liệu.
3. Tạo một pipeline chuẩn.
4. Chạy cross-validation.
5. Tuning ít tham số quan trọng.
6. Phân tích model tốt nhất và các lỗi nổi bật.

## Những câu hỏi bạn phải tự trả lời

- Feature nào quan trọng nhất?
- Sai số lớn nhất rơi vào nhóm nhà nào?
- Thêm feature engineering có cải thiện thật không?
- Model hiện tại có đủ tin cậy để dùng ước lượng sơ bộ hay chưa?

## Sai lầm thường gặp

- Viết notebook dài nhưng không có kết luận rõ.
- Tuning rất nhiều nhưng không lưu kết quả cũ.
- Đánh giá theo cảm giác mà không dùng metric nhất quán.

## Bài tập thực hành

- Làm challenge như một submission độc lập.
- Tạo bảng thí nghiệm với cột: model, preprocessing, CV score, ghi chú.
- Viết phần bài học rút ra dài khoảng 10 dòng.

## Tiêu chí hoàn thành

- [ ] Có pipeline hoàn chỉnh chạy được end-to-end.
- [ ] Có so sánh thí nghiệm có cấu trúc.
- [ ] Có kết luận rõ vì sao chọn model cuối cùng.

## Thực hành từng bước (nâng cao)

1. Time-box 60 phút theo ba pha: chuẩn bị, mô hình, tổng kết.
2. Thiết kế ít nhất 3 thí nghiệm có khác biệt rõ ràng.
3. Ghi đầy đủ giả định cho từng thí nghiệm.
4. Chọn model cuối bằng tiêu chí metric + tính ổn định.
5. Viết post-mortem: nếu có thêm 2 giờ bạn sẽ làm gì.

## Artifact nên nộp

- Bảng experiment tracking tối thiểu 3 dòng.
- Notebook sạch, chạy từ đầu đến cuối.
- Tóm tắt 1 trang theo format kỹ thuật + business.

## Câu hỏi tự kiểm tra

- Bạn đã thực sự kiểm soát leakage chưa?
- Tuning nào mang lại lợi ích lớn nhất?
- Kết quả hiện tại đủ để ship bản beta chưa?
