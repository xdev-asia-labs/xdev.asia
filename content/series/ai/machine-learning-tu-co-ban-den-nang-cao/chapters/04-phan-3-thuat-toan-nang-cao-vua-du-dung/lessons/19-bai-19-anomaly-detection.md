---
id: 019d8b39-bb19-7019-c019-ee1900000019
title: 'Bài 19: Anomaly Detection trong hệ thống thật'
slug: bai-19-anomaly-detection
description: >-
  Isolation Forest, One-Class SVM và thiết kế rule cảnh báo cho fraud, log
  monitoring, quality control.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 18
section_title: 'Phần 3: Thuật toán nâng cao vừa đủ dùng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-85" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-85)"/>

  <!-- Decorations -->
  <g>
    <circle cx="711" cy="43" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="822" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="933" cy="225" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="1044" cy="56" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="147" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="153" x2="1100" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="183" x2="1050" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.2487113059642,189 1027.2487113059642,217 1003,231 978.7512886940357,217 978.7512886940357,189 1003,175" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI &amp; ML — Bài 18</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 19: Anomaly Detection trong hệ thống</tspan>
      <tspan x="60" dy="42">thật</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Thuật toán nâng cao vừa đủ dùng</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Có những bài toán mà lớp dương hiếm đến mức gần như không có đủ nhãn để train classification chuẩn, ví dụ phát hiện gian lận, bất thường vận hành, lỗi cảm biến. Khi đó anomaly detection là một hướng rất đáng cân nhắc.

## Mục tiêu bài học

- Hiểu anomaly detection khác classification ở đâu.
- Biết một vài kỹ thuật nhập môn như Isolation Forest.
- Biết đánh giá bất thường trong bối cảnh nghiệp vụ.

## Trực giác cốt lõi

Một điểm bất thường là điểm khác phần lớn dữ liệu còn lại theo một cách có ý nghĩa. Vấn đề là khác không phải lúc nào cũng xấu. Vì vậy anomaly detection luôn cần gắn với ngữ cảnh vận hành.

## Isolation Forest

Ý tưởng trực giác: điểm bất thường thường bị cô lập nhanh hơn trong các lần chia ngẫu nhiên của cây. Điểm càng dễ bị tách ra thì càng có khả năng là anomaly.

## Đánh giá mô hình

Bạn có thể cần một tập có nhãn hạn chế, review top cảnh báo bằng chuyên gia nghiệp vụ và đo chi phí false alarm so với chi phí bỏ sót.

## Sai lầm thường gặp

- Gọi mọi outlier là anomaly quan trọng.
- Không xác nhận với domain expert.
- Dùng threshold tùy tiện mà không xem tác động vận hành.

## Bài tập thực hành

- Chạy Isolation Forest trên một dataset giao dịch.
- Lấy top 20 điểm bất thường nhất để review.
- Viết nhận xét: cảnh báo nào hợp lý, cảnh báo nào có thể là false alarm.

## Tiêu chí hoàn thành

- [ ] Hiểu anomaly detection không chỉ là tìm outlier bằng mắt.
- [ ] Biết dùng một mô hình cơ bản như Isolation Forest.
- [ ] Gắn được việc đánh giá với chi phí vận hành thực tế.

## Thực hành từng bước (nâng cao)

1. Định nghĩa rõ thế nào là anomaly trong bài toán cụ thể.
2. Chạy Isolation Forest với vài mức contamination.
3. Kiểm tra top điểm bất thường bằng review thủ công.
4. So sánh false alarm giữa các cấu hình.
5. Đề xuất ngưỡng cảnh báo vận hành thực tế.

## Artifact nên nộp

- Danh sách top anomaly có giải thích.
- Bảng tác động vận hành của false positives.
- Đề xuất quy trình triage cảnh báo.

## Câu hỏi tự kiểm tra

- Outlier thống kê và anomaly nghiệp vụ khác gì?
- Vì sao contamination cần hiệu chỉnh theo bối cảnh?
- Khi nào cần human-in-the-loop cho anomaly review?
