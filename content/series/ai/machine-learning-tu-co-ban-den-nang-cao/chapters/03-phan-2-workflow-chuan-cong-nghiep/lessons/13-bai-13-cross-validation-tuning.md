---
id: 019d8b39-bb13-7013-c013-ee1300000013
title: 'Bài 13: Cross-validation & Hyperparameter Tuning'
slug: bai-13-cross-validation-tuning
description: >-
  KFold/StratifiedKFold, GridSearch/RandomizedSearch, và cách đọc kết quả tuning
  để chọn mô hình chắc chắn hơn.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 'Phần 2: Workflow chuẩn công nghiệp'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7754" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7754)"/>

  <!-- Decorations -->
  <g>
    <circle cx="864" cy="262" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="628" cy="166" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="892" cy="70" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="656" cy="234" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="138" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="222" x2="1100" y2="302" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="252" x2="1050" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1054.0429399400243,203.5 1054.0429399400243,240.5 1022,259 989.9570600599758,240.5 989.9570600599758,203.5 1022,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI &amp; ML — Bài 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 13: Cross-validation &amp; Hyperparameter</tspan>
      <tspan x="60" dy="42">Tuning</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Workflow chuẩn công nghiệp</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Một lần train-test split có thể cho bạn cảm giác giả tạo về chất lượng mô hình. Cross-validation giúp đánh giá ổn định hơn, còn hyperparameter tuning giúp bạn tìm cấu hình hợp lý mà không dựa vào may mắn của một lần chia dữ liệu.

## Mục tiêu bài học

- Hiểu vì sao không nên tin tuyệt đối vào một split duy nhất.
- Dùng cross-validation để ước lượng hiệu năng ổn định hơn.
- Tuning hyperparameter theo quy trình có kiểm soát.

## Cross-validation là gì?

Dữ liệu được chia thành nhiều fold. Mỗi lần, một fold làm validation, các fold còn lại làm train. Kết quả cuối cùng là trung bình của nhiều lần đánh giá.

## Hyperparameter là gì?

Hyperparameter là những giá trị bạn chọn trước khi train, ví dụ max_depth, n_estimators, C hoặc learning_rate. Chúng khác với parameter mà model tự học từ dữ liệu.

## Cách tuning thực dụng

- Bắt đầu bằng baseline đơn giản.
- Chọn ít hyperparameter quan trọng nhất.
- Dùng GridSearchCV hoặc RandomizedSearchCV.
- Theo dõi cả mean score và độ lệch chuẩn giữa các fold.

## Code mẫu

~~~python
from sklearn.model_selection import RandomizedSearchCV
from sklearn.ensemble import RandomForestClassifier
~~~

## Sai lầm thường gặp

- Tuning quá rộng khi baseline còn chưa ổn.
- Dùng test set để điều chỉnh hyperparameter.
- Chạy rất nhiều thử nghiệm nhưng không ghi lại kết quả.

## Bài tập thực hành

- Tuning một model tree-based với 3 hyperparameter.
- So sánh score trước tuning và sau tuning.
- Ghi lại nhận xét: tuning có cải thiện thật không, hay chỉ cải thiện rất ít.

## Tiêu chí hoàn thành

- [ ] Dùng được cross-validation trong một pipeline hoàn chỉnh.
- [ ] Phân biệt được validation dùng cho tuning và test dùng cho đánh giá cuối.
- [ ] Ghi lại được thí nghiệm một cách có hệ thống.

## Thực hành từng bước (nâng cao)

1. Chạy baseline với một split chuẩn.
2. Chạy KFold hoặc StratifiedKFold 5 folds.
3. Tuning bằng RandomizedSearchCV với không quá 4 tham số quan trọng.
4. So sánh mean score và std score giữa các cấu hình.
5. Chốt cấu hình theo hiệu năng + độ ổn định.

## Artifact nên nộp

- Bảng top 10 cấu hình theo score.
- Biểu đồ score phân bố theo fold.
- Quy tắc dừng tuning để tránh over-search.

## Câu hỏi tự kiểm tra

- Khi nào nên ưu tiên RandomizedSearchCV hơn GridSearchCV?
- Độ lệch chuẩn cao giữa các fold nói lên điều gì?
- Vì sao test set không dùng để tuning?
