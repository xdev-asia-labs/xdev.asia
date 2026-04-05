---
id: 019d8b39-bb09-7009-c009-ee0900000009
title: 'Bài 9: Overfitting/Underfitting và cách sửa'
slug: bai-9-overfitting-underfitting
description: >-
  Learning curve, validation curve, bias-variance tradeoff và chiến lược cải
  thiện mô hình có hệ thống.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 'Phần 1: Supervised Learning nền tảng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6534" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6534)"/>

  <!-- Decorations -->
  <g>
    <circle cx="780" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="960" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="90" x2="1100" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="120" x2="1050" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1011.650635094611,177.5 1011.650635094611,202.5 990,215 968.349364905389,202.5 968.349364905389,177.5 990,165" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI &amp; ML — Bài 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 9: Overfitting/Underfitting và cách</tspan>
      <tspan x="60" dy="42">sửa</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Supervised Learning nền tảng</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Học ML không chỉ là làm cho điểm số cao lên. Một model mạnh trên tập train nhưng yếu trên dữ liệu mới là model chưa sẵn sàng dùng thực tế. Bài này giúp bạn nhìn ra overfitting và underfitting bằng dấu hiệu rất cụ thể.

## Mục tiêu bài học

- Phân biệt overfitting và underfitting.
- Biết cách đọc train score và validation score cùng nhau.
- Có checklist xử lý khi model học chưa đúng mức.

## Underfitting là gì?

Underfitting xảy ra khi model quá đơn giản hoặc feature quá nghèo nàn, khiến nó không học được tín hiệu đủ tốt ngay cả trên tập train.

## Overfitting là gì?

Overfitting xảy ra khi model học cả tín hiệu thật lẫn nhiễu riêng của tập train.

Dấu hiệu điển hình:

- Train score rất cao.
- Validation score thấp rõ rệt.
- Mỗi lần đổi split thì kết quả dao động mạnh.

## Cách xử lý theo hướng thực dụng

Khi underfitting: thêm feature hữu ích, dùng model mạnh hơn, huấn luyện lâu hơn nếu là iterative algorithm.

Khi overfitting: giảm độ phức tạp model, thêm regularization, tăng dữ liệu hoặc dùng cross-validation.

## Learning curves

Learning curve cho bạn thấy nếu tăng dữ liệu thì model có khả năng cải thiện không. Đây là cách chẩn đoán tốt hơn việc đoán mò.

## Sai lầm thường gặp

- Tăng model complexity liên tục mà không có validation tử tế.
- Chạy nhiều lần rồi chọn split đẹp nhất.
- Sửa feature dựa trên test set.

## Bài tập thực hành

- Train 3 mô hình với độ phức tạp tăng dần.
- Ghi lại train score và validation score.
- Kết luận mô hình nào underfit, mô hình nào overfit, mô hình nào hợp lý nhất.

## Tiêu chí hoàn thành

- [ ] Giải thích được hai khái niệm bằng ngôn ngữ đời thường.
- [ ] Biết đọc chênh lệch giữa train và validation.
- [ ] Đề xuất được ít nhất 2 cách xử lý cho mỗi tình huống.

## Thực hành từng bước (nâng cao)

1. Train ba model với độ phức tạp tăng dần.
2. Thu train/validation score cho từng model.
3. Vẽ learning curve theo số lượng dữ liệu train.
4. Thử regularization hoặc giảm độ sâu model.
5. Ghi lại thay đổi trước và sau khi sửa.

## Artifact nên nộp

- Biểu đồ learning curve.
- Bảng so sánh trước/sau điều chỉnh.
- Checklist quyết định xử lý overfitting áp dụng cho dự án sau.

## Câu hỏi tự kiểm tra

- Dấu hiệu nào phân biệt underfit và overfit rõ nhất?
- Vì sao thêm dữ liệu có thể giảm overfitting?
- Khi nào giảm model complexity là lựa chọn hợp lý nhất?
