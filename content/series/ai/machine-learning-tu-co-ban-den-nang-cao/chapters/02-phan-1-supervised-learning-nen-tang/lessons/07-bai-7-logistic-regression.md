---
id: 019d8b39-bb07-7007-c007-ee0700000007
title: 'Bài 7: Logistic Regression & xác suất cho classification'
slug: bai-7-logistic-regression
description: >-
  Logistic regression, sigmoid, decision boundary, threshold và cách đọc xác
  suất dự đoán đúng cách.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 'Phần 1: Supervised Learning nền tảng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8295" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8295)"/>

  <!-- Decorations -->
  <g>
    <circle cx="977" cy="61" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="854" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="731" cy="255" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="608" cy="92" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="985" cy="189" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="71" x2="1100" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="101" x2="1050" y2="171" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="943.5166604983954,108 943.5166604983954,134 921,147 898.4833395016046,134 898.4833395016046,108 921,95" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI &amp; ML — Bài 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 7: Logistic Regression &amp; xác suất cho</tspan>
      <tspan x="60" dy="42">classification</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Supervised Learning nền tảng</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Regression dự đoán một số liên tục, còn classification dự đoán một nhãn. Logistic regression là mô hình classification nhập môn tốt nhất vì đơn giản, nhanh, dễ giải thích và vẫn rất hữu ích trong thực tế.

## Mục tiêu bài học

- Hiểu logistic regression khác linear regression ở đâu.
- Đọc được xác suất đầu ra của mô hình.
- Biết dùng threshold để biến xác suất thành nhãn dự đoán.

## Từ đường thẳng sang xác suất

Linear regression có thể cho ra mọi giá trị từ âm vô cực đến dương vô cực. Classification nhị phân thì cần xác suất nằm trong khoảng từ 0 đến 1. Logistic regression giải quyết việc này bằng hàm sigmoid:

$$
\sigma(z) = \frac{1}{1 + e^{-z}}
$$

Trong đó $z = w_1x_1 + ... + w_nx_n + b$.

## Threshold không phải chân lý cố định

Nhiều người mới mặc định threshold = 0.5. Điều này chỉ đúng khi cost của false positive và false negative tương đương nhau.

Ví dụ: dự đoán bệnh thường ưu tiên recall; churn khách hàng có thể chấp nhận gọi dư hơn là bỏ lỡ khách sắp rời đi.

## Ví dụ code

~~~python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)
proba = model.predict_proba(X_test)[:, 1]
preds = (proba >= 0.5).astype(int)

print(classification_report(y_test, preds))
~~~

## Ưu và nhược điểm

Ưu điểm: nhanh, dễ baseline, dễ giải thích.

Nhược điểm: kém hiệu quả khi ranh giới phân lớp quá phi tuyến, nhạy với feature engineering và scale.

## Sai lầm thường gặp

- Chỉ nhìn accuracy khi dữ liệu lệch lớp.
- Không kiểm tra threshold khác nhau.
- Gây leakage ở bước encoding hoặc scaling.

## Bài tập thực hành

- Train logistic regression cho một bài toán churn hoặc spam.
- So sánh kết quả ở threshold 0.3, 0.5 và 0.7.
- Viết nhận xét: threshold nào hợp với bài toán hơn và vì sao.

## Tiêu chí hoàn thành

- [ ] Giải thích được vai trò của sigmoid.
- [ ] Hiểu xác suất đầu ra khác với nhãn dự đoán.
- [ ] Biết đổi threshold theo mục tiêu business.

## Thực hành từng bước (nâng cao)

1. Dùng dataset classification có lệch lớp nhẹ.
2. Train Logistic Regression với class_weight mặc định và balanced.
3. So sánh precision, recall, F1 ở threshold 0.3, 0.5, 0.7.
4. Vẽ precision-recall tradeoff.
5. Chọn threshold theo một kịch bản sản phẩm cụ thể.

## Artifact nên nộp

- Bảng metric theo threshold.
- Một confusion matrix đã chú thích rõ FP/FN.
- Đoạn giải thích 1 trang gửi giả lập cho PM.

## Câu hỏi tự kiểm tra

- Vì sao threshold 0.5 không phải lúc nào đúng?
- Trường hợp nào cần ưu tiên recall hơn precision?
- ROC-AUC cao nhưng business outcome vẫn tệ có thể do đâu?
