---
id: 019d8b39-bb06-7006-c006-ee0600000006
title: 'Bài 6: Linear Regression & trực giác gradient descent'
slug: bai-6-linear-regression-gradient-descent
description: >-
  Hiểu loss function, gradient descent và regularization ở mức dễ hiểu, đủ để
  debug mô hình regression.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 'Phần 1: Supervised Learning nền tảng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3393" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3393)"/>

  <!-- Decorations -->
  <g>
    <circle cx="709" cy="117" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="818" cy="146" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="927" cy="175" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1036" cy="204" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="233" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="207" x2="1100" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="237" x2="1050" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="993.3730669589464,136 993.3730669589464,178 957,199 920.6269330410536,178 920.6269330410536,136 957,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI &amp; ML — Bài 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: Linear Regression &amp; trực giác</tspan>
      <tspan x="60" dy="42">gradient descent</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Supervised Learning nền tảng</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Sau khi bạn đã train được mô hình đầu tiên, câu hỏi tiếp theo là: vì sao model học được? Bài này giúp bạn hiểu linear regression ở mức trực giác đủ chắc để đọc loss, debug kết quả và biết khi nào mô hình đang học đúng hoặc học sai.

## Mục tiêu bài học

- Hiểu linear regression đang cố gắng học điều gì.
- Nắm trực giác về loss function, gradient descent và regularization.
- Biết khi nào nên dùng linear regression và khi nào không nên cố ép nó.

## Linear regression đang làm gì?

Hãy tưởng tượng bạn muốn dự đoán giá nhà từ diện tích. Mô hình tuyến tính cố tìm một đường thẳng tốt nhất sao cho sai số giữa giá dự đoán và giá thật là nhỏ nhất.

Công thức cơ bản:

$$
\hat{y} = w_1x_1 + w_2x_2 + ... + w_nx_n + b
$$

## Loss function: thước đo model đang tệ đến đâu

Với regression, một loss quen thuộc là MSE:

$$
MSE = \frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y_i})^2
$$

Ý nghĩa rất đời thường: model dự đoán càng lệch xa thực tế thì loss càng lớn. Bình phương giúp phạt nặng những điểm sai quá xa.

## Gradient descent: cách mô hình sửa sai

Gradient descent là quy trình lặp: dự đoán, tính loss, xem cần tăng giảm trọng số ra sao, rồi cập nhật nhiều lần cho tới khi mô hình ổn định hơn.

Nếu learning rate quá lớn, model dễ nhảy qua lại và không hội tụ. Nếu quá nhỏ, model học rất chậm.

## Ví dụ code tối thiểu

~~~python
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)
preds = model.predict(X_test)

print('MAE:', mean_absolute_error(y_test, preds))
print('Intercept:', model.intercept_)
print('Coefficients:', model.coef_)
~~~

## Regularization để chống học quá đà

- Ridge thường giúp trọng số mượt hơn.
- Lasso có thể đẩy một số trọng số về 0, phù hợp khi muốn chọn feature.

## Sai lầm thường gặp

- Chuẩn hóa dữ liệu xong nhưng không áp dụng cùng cách cho tập test.
- Kết luận hệ số là quan hệ nhân quả.
- Chỉ nhìn train score mà không nhìn test error.

## Bài tập thực hành

- Train Linear Regression và Ridge trên cùng một tập dữ liệu.
- So sánh MAE của hai mô hình.
- Viết ngắn 5 dòng: khi nào Ridge tốt hơn Linear Regression thuần.

## Tiêu chí hoàn thành

- [ ] Giải thích được loss function bằng ngôn ngữ đơn giản.
- [ ] Hiểu gradient descent dùng để cập nhật trọng số.
- [ ] So sánh được Linear Regression và Ridge trên một ví dụ thật.

## Thực hành từng bước (nâng cao)

1. Chọn một dataset regression có ít nhất 6 feature.
2. Train baseline bằng Linear Regression không regularization.
3. Thử Ridge với 5 giá trị alpha khác nhau.
4. Vẽ biểu đồ so sánh MAE theo từng alpha.
5. Viết nhận xét: alpha quá lớn ảnh hưởng bias/variance ra sao.

## Artifact nên nộp

- Notebook có phần so sánh Linear vs Ridge.
- Bảng kết quả MAE và RMSE.
- Kết luận 8-10 dòng về chọn regularization.

## Câu hỏi tự kiểm tra

- Vì sao MSE nhạy với outlier hơn MAE?
- Learning rate ảnh hưởng gì đến tốc độ hội tụ?
- Khi nào Lasso đáng thử hơn Ridge?
