---
id: 019d8b39-bb11-7011-c011-ee1100000011
title: 'Bài 11: Missing Values, Categorical Variables, Feature Engineering'
slug: bai-11-missing-categorical-feature-engineering
description: >-
  Quy trình xử lý dữ liệu thực tế: missing, encoding, scaling, outlier handling
  và feature crosses cơ bản.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'Phần 2: Workflow chuẩn công nghiệp'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8918" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8918)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1006" cy="168" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="912" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="818" cy="260" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="724" cy="46" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="92" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="188" x2="1100" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="218" x2="1050" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.2390923627308,116.5 975.2390923627308,159.5 938,181 900.7609076372692,159.5 900.7609076372692,116.50000000000001 938,95" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI &amp; ML — Bài 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 11: Missing Values, Categorical</tspan>
      <tspan x="60" dy="42">Variables, Feature Engineering</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Workflow chuẩn công nghiệp</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Dữ liệu ngoài đời hiếm khi sạch. Cột thiếu giá trị, text lẫn ký hiệu lạ, category quá nhiều mức, feature được tạo thủ công không nhất quán. Bài này giúp bạn xử lý những việc này theo cách có thể lặp lại và ít lỗi nhất.

## Mục tiêu bài học

- Xử lý missing values cho numeric và categorical.
- Encode categorical variables đúng cách.
- Hiểu feature engineering là gì và khi nào nên dừng.

## Missing values: không có nghĩa là bỏ hết

Thiếu dữ liệu đôi khi là tín hiệu. Trước khi fill, hãy hỏi: vì sao dữ liệu bị thiếu, thiếu ngẫu nhiên hay có hệ thống, và có nên tạo thêm cột đánh dấu missing hay không.

## Cách xử lý phổ biến

- Numeric: median thường an toàn hơn mean khi có outlier.
- Categorical: fill bằng giá trị phổ biến nhất hoặc gán nhãn Unknown.
- Missing indicator: hữu ích khi bản thân việc thiếu là tín hiệu.

## Feature engineering thực dụng

Ưu tiên những feature có logic nghiệp vụ rõ ràng như tổng chi tiêu 30 ngày gần nhất, số ticket hỗ trợ mỗi tháng hoặc tỉ lệ sử dụng trên hạn mức.

## Code khung

~~~python
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder

num_imputer = SimpleImputer(strategy='median')
cat_imputer = SimpleImputer(strategy='most_frequent')
encoder = OneHotEncoder(handle_unknown='ignore')
~~~

## Sai lầm thường gặp

- Fill missing trước khi split dữ liệu.
- Tạo feature nhìn thấy tương lai.
- One-hot quá nhiều category làm feature space phình to vô ích.

## Bài tập thực hành

- Chọn một dataset tabular có cả numeric và categorical.
- Thử 2 cách điền missing cho numeric.
- Tạo 3 feature mới có giải thích nghiệp vụ rõ ràng.

## Tiêu chí hoàn thành

- [ ] Biết chọn chiến lược fill missing theo từng loại cột.
- [ ] Dùng one-hot encoding không gây lỗi khi gặp category mới.
- [ ] Tạo feature mới mà không gây leakage.

## Thực hành từng bước (nâng cao)

1. Lập data profiling report (missing rate, cardinality, outlier).
2. Tạo 2 phiên bản xử lý missing để so sánh.
3. Encode categorical bằng one-hot và so sánh với target encoding an toàn.
4. Thêm 3 feature nghiệp vụ có giải thích rõ nguồn gốc.
5. Đánh giá tác động từng bước lên metric cuối.

## Artifact nên nộp

- Bảng data quality trước/sau xử lý.
- Danh sách feature mới và lý do tồn tại.
- Nhật ký thí nghiệm theo từng bước preprocessing.

## Câu hỏi tự kiểm tra

- Missing không ngẫu nhiên cần xử lý khác gì?
- Khi nào one-hot trở nên không hiệu quả?
- Làm sao chứng minh feature mới có giá trị thật?
