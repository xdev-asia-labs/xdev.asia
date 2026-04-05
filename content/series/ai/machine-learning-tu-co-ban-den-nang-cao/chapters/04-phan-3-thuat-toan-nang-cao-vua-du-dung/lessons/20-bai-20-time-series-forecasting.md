---
id: 019d8b39-bb20-7020-c020-ee2000000020
title: 'Bài 20: Time Series Forecasting cơ bản'
slug: bai-20-time-series-forecasting
description: >-
  Walk-forward validation, lag features, baseline forecast, và ứng dụng dự báo
  nhu cầu cơ bản.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: 'Phần 3: Thuật toán nâng cao vừa đủ dùng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5736" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5736)"/>

  <!-- Decorations -->
  <g>
    <circle cx="869" cy="77" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="638" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="907" cy="195" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="676" cy="124" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="945" cy="53" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="87" x2="1100" y2="167" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="117" x2="1050" y2="187" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1023.3730669589464,166 1023.3730669589464,208 987,229 950.6269330410536,208 950.6269330410536,166 987,145" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI &amp; ML — Bài 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 20: Time Series Forecasting cơ bản</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Thuật toán nâng cao vừa đủ dùng</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Dự báo theo thời gian khác với tabular ML thông thường ở một điểm rất quan trọng: thứ tự thời gian là cốt lõi. Nếu làm sai cách chia dữ liệu hoặc tạo feature, bạn rất dễ tự lừa mình bằng những kết quả cực đẹp nhưng vô dụng khi triển khai thật.

## Mục tiêu bài học

- Hiểu khác biệt giữa forecasting và regression thường.
- Biết tạo feature thời gian cơ bản.
- Tránh leakage trong chuỗi thời gian.

## Đặc thù của time series

- Dữ liệu có thứ tự trước sau.
- Có thể có xu hướng, mùa vụ, chu kỳ.
- Quan sát gần nhau thường phụ thuộc nhau.

## Feature phổ biến

- Lag features như sales_t-1, sales_t-7.
- Rolling statistics như trung bình 7 ngày, 30 ngày.
- Calendar features như thứ trong tuần, tháng, quý, ngày lễ.

## Cách chia dữ liệu đúng

Không shuffle ngẫu nhiên như tabular thông thường. Hãy chia theo trục thời gian: train ở quá khứ, validation gần hiện tại hơn, test là đoạn mới nhất.

## Baseline rất quan trọng

Trước khi dùng model phức tạp, hãy so sánh với baseline như giá trị kỳ trước, trung bình trượt hoặc cùng kỳ tuần trước.

## Sai lầm thường gặp

- Random split time series.
- Tạo rolling feature nhìn xuyên qua tương lai.
- Không so sánh với naive baseline.

## Bài tập thực hành

- Dự báo doanh thu ngày bằng lag features và một model tree-based đơn giản.
- So sánh với baseline cùng kỳ hôm trước.
- Viết nhận xét khi nào mô hình học thêm được tín hiệu ngoài baseline.

## Tiêu chí hoàn thành

- [ ] Chia dữ liệu theo thời gian đúng logic.
- [ ] Tạo được lag và rolling features cơ bản.
- [ ] So sánh mô hình với baseline thời gian.

## Thực hành từng bước (nâng cao)

1. Xây train/validation/test theo trục thời gian.
2. Tạo lag features và rolling window features.
3. So sánh mô hình ML với naive baseline.
4. Đánh giá theo MAE, MAPE và lỗi theo từng giai đoạn.
5. Kiểm tra hiệu năng ở các mốc mùa vụ quan trọng.

## Artifact nên nộp

- Biểu đồ dự báo vs thực tế theo thời gian.
- Bảng lỗi theo tuần hoặc tháng.
- Nhận xét drift theo mùa vụ và đề xuất cập nhật mô hình.

## Câu hỏi tự kiểm tra

- Vì sao random split gây sai lệch nghiêm trọng cho forecasting?
- Khi nào baseline theo cùng kỳ đủ tốt để dùng ngay?
- Feature nào dễ gây leakage trong time series?
