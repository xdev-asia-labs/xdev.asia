---
id: 019d8b39-bb16-7016-c016-ee1600000016
title: 'Bài 16: Decision Tree, Random Forest, XGBoost'
slug: bai-16-decision-tree-random-forest-xgboost
description: >-
  So sánh tree-based models, hiểu feature importance, overfitting control, và
  cách chọn mô hình theo dữ liệu.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: 'Phần 3: Thuật toán nâng cao vừa đủ dùng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6500" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6500)"/>

  <!-- Decorations -->
  <g>
    <circle cx="961" cy="253" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="822" cy="154" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="683" cy="55" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1044" cy="216" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="117" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="103" x2="1100" y2="183" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="133" x2="1050" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.9089653438086,134 985.9089653438086,172 953,191 920.0910346561914,172 920.0910346561914,134 953,115" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI &amp; ML — Bài 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 16: Decision Tree, Random Forest,</tspan>
      <tspan x="60" dy="42">XGBoost</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Thuật toán nâng cao vừa đủ dùng</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Đến đây bạn đã có nền tảng tốt với mô hình tuyến tính. Bài này giới thiệu nhóm thuật toán mạnh nhất cho dữ liệu bảng trong thực tế: decision tree, random forest và boosting.

## Mục tiêu bài học

- Hiểu trực giác của decision tree, random forest và boosting.
- Biết trade-off giữa khả năng giải thích, tốc độ và độ mạnh.
- Chọn đúng mô hình tree-based cho dữ liệu bảng.

## Decision tree

Decision tree chia dữ liệu bằng các câu hỏi kiểu age > 35 hay num_tickets > 3. Ưu điểm là dễ hiểu, không cần scale feature và bắt được quan hệ phi tuyến. Nhược điểm là dễ overfit nếu cây quá sâu.

## Random forest

Random forest là nhiều cây quyết định cùng bỏ phiếu. Nó thường giảm overfitting so với một cây đơn lẻ và là baseline rất mạnh cho tabular data.

## XGBoost và boosting

Boosting train nhiều cây tuần tự; mỗi cây mới tập trung sửa lỗi của cây trước. Vì vậy boosting thường rất mạnh trên leaderboard, nhưng cũng dễ bị lạm dụng nếu không kiểm soát tốt validation.

## Khi nào dùng model nào?

- Decision tree: để học trực giác hoặc cần mô hình cực dễ giải thích.
- Random forest: baseline mạnh cho tabular data.
- XGBoost, LightGBM, CatBoost: khi muốn tối ưu hiệu năng nghiêm túc.

## Sai lầm thường gặp

- Tuning quá nhiều tham số ngay từ đầu.
- Dùng feature importance như bằng chứng nhân quả.
- Tin leaderboard mà không xem leakage hoặc error analysis.

## Bài tập thực hành

- So sánh Logistic Regression, Random Forest và XGBoost trên cùng dataset.
- Ghi lại metric, thời gian train, khả năng giải thích.
- Kết luận mô hình nào phù hợp nhất cho môi trường doanh nghiệp vừa và nhỏ.

## Tiêu chí hoàn thành

- [ ] Giải thích được sự khác nhau giữa bagging và boosting.
- [ ] Biết khi nào tree-based model mạnh hơn linear model.
- [ ] So sánh được ít nhất 3 mô hình trên cùng một bài toán.

## Thực hành từng bước (nâng cao)

1. Chạy 3 model: Decision Tree, Random Forest, XGBoost.
2. Giữ cùng train/validation split để so sánh công bằng.
3. Tuning nhẹ cho mỗi model (2-3 tham số chính).
4. So sánh metric, thời gian train và độ dễ giải thích.
5. Viết guideline chọn model theo kích thước dữ liệu.

## Artifact nên nộp

- Bảng benchmark ba model.
- Biểu đồ feature importance có chú thích cẩn trọng.
- Quy tắc chọn model theo từng bối cảnh dự án.

## Câu hỏi tự kiểm tra

- Bagging và boosting khác nhau thế nào về cơ chế giảm lỗi?
- Khi nào Random Forest hợp hơn XGBoost?
- Vì sao feature importance không đồng nghĩa nhân quả?
