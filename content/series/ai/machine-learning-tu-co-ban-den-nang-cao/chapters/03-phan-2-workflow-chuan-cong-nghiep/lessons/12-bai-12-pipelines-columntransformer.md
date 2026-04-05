---
id: 019d8b39-bb12-7012-c012-ee1200000012
title: 'Bài 12: Pipelines & ColumnTransformer với scikit-learn'
slug: bai-12-pipelines-columntransformer
description: >-
  Xây pipeline chống lỗi thao tác thủ công, tái sử dụng tốt và giảm rủi ro
  leakage trong huấn luyện.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'Phần 2: Workflow chuẩn công nghiệp'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1947" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1947)"/>

  <!-- Decorations -->
  <g>
    <circle cx="910" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1030" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="80" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="80" x2="1100" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="110" x2="1050" y2="180" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="960.3108891324554,112.5 960.3108891324554,147.5 930,165 899.6891108675446,147.5 899.6891108675446,112.50000000000001 930,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI &amp; ML — Bài 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: Pipelines &amp; ColumnTransformer với</tspan>
      <tspan x="60" dy="42">scikit-learn</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Workflow chuẩn công nghiệp</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Khi dự án ML bắt đầu có nhiều bước tiền xử lý, việc viết tay từng bước rất dễ sai. Pipeline và ColumnTransformer giúp bạn gom toàn bộ preprocessing và model vào một luồng thống nhất, dễ tái lập, dễ debug và giảm hẳn nguy cơ leakage.

## Mục tiêu bài học

- Hiểu vì sao nên dùng Pipeline thay vì xử lý rời rạc.
- Biết dùng ColumnTransformer cho dữ liệu nhiều kiểu cột.
- Dựng được một workflow train/predict nhất quán.

## Vì sao pipeline quan trọng?

Pipeline giúp tránh các lỗi phổ biến như fit scaler trên cả train lẫn test, quên áp dụng cùng transform khi predict dữ liệu mới, hoặc lưu model nhưng quên logic preprocessing.

## Cấu trúc chuẩn

- Numeric: impute rồi scale.
- Categorical: impute rồi one-hot.
- Ghép bằng ColumnTransformer.
- Đặt classifier hoặc regressor ở bước cuối.

## Ví dụ code

~~~python
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.ensemble import RandomForestClassifier
~~~

## Lợi ích trong thực tế

- Dễ đưa vào cross-validation.
- Dễ save/load bằng joblib.
- Ít lỗi khi deploy batch inference.

## Sai lầm thường gặp

- Dùng sai danh sách cột.
- Thêm feature mới nhưng quên cập nhật ColumnTransformer.
- Gọi fit_transform ngoài pipeline rồi lại fit tiếp trong pipeline.

## Bài tập thực hành

- Dựng một pipeline hoàn chỉnh cho dữ liệu churn hoặc housing.
- So sánh code dùng pipeline và code xử lý thủ công.
- Viết 5 dòng: pipeline giúp giảm loại lỗi nào nhiều nhất.

## Tiêu chí hoàn thành

- [ ] Tự dựng được Pipeline và ColumnTransformer.
- [ ] Hiểu pipeline giúp tránh leakage như thế nào.
- [ ] Có thể save/load workflow hoàn chỉnh.

## Thực hành từng bước (nâng cao)

1. Viết pipeline hoàn chỉnh gồm preprocessing + model.
2. Tách numeric/categorical thành hai nhánh transform.
3. Dùng cùng pipeline cho train, validate và predict mẫu mới.
4. Lưu pipeline bằng joblib và load lại để dự đoán.
5. Viết test nhỏ để đảm bảo schema input không vỡ.

## Artifact nên nộp

- File pipeline có thể tái sử dụng.
- Script predict tối thiểu cho 1 record.
- Checklist phòng leakage dựa trên pipeline.

## Câu hỏi tự kiểm tra

- Vì sao fit_transform thủ công dễ lỗi hơn pipeline?
- Khi thêm feature mới cần cập nhật gì trong ColumnTransformer?
- Lợi ích lớn nhất của pipeline khi deploy là gì?
