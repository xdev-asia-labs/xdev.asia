---
id: 019d8b39-bb05-7005-c005-ee0500000005
title: 'Bài 5: Mini-project 1 — Dự đoán giá nhà'
slug: bai-5-mini-project-1-du-doan-gia-nha
description: >-
  Bài thực hành trọn vẹn đầu tiên: EDA đơn giản, train/test split, baseline
  model, đánh giá và rút kinh nghiệm.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'Phần 0: Khởi động cho người mới (Week 0)'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2294" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2294)"/>

  <!-- Decorations -->
  <g>
    <circle cx="677" cy="81" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="754" cy="98" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="831" cy="115" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="908" cy="132" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="985" cy="149" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <polygon points="993.5166604983954,158 993.5166604983954,184 971,197 948.4833395016046,184 948.4833395016046,158 971,145" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI &amp; ML — Bài 4</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 5: Mini-project 1 — Dự đoán giá nhà</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 0: Khởi động cho người mới (Week 0)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Đây là mini-project đầu tiên của series. Mục tiêu không phải tối ưu đến mức tốt nhất, mà là để bạn đi trọn quy trình từ đầu đến cuối: hiểu dữ liệu, chọn feature, chia train/test, dựng baseline, train model, đánh giá và rút ra kết luận.

## Bối cảnh bài toán

Bạn có dữ liệu nhà ở một thành phố với các thông tin:

- diện tích
- số phòng ngủ
- số toilet
- quận
- tuổi nhà
- giá bán

Mục tiêu là dự đoán giá nhà cho một căn mới.

## Mục tiêu mini-project

- Làm EDA cơ bản để hiểu dữ liệu
- Xây baseline đầu tiên
- Train ít nhất một mô hình regression
- Đưa ra kết luận rõ ràng bằng metric

## 1. Câu hỏi business

Một môi giới hoặc hệ thống đăng tin muốn ước lượng giá bán hợp lý cho căn nhà mới.

Câu hỏi ML tương ứng:

> Với các thông tin đầu vào của căn nhà, giá bán ước tính là bao nhiêu?

## 2. EDA tối thiểu cần làm

```python
import pandas as pd

df = pd.read_csv('data/raw/houses.csv')

print(df.head())
print(df.shape)
print(df.info())
print(df.isnull().sum())
print(df.describe())
```

Bạn cần trả lời ít nhất các câu hỏi sau:

1. Dữ liệu có bao nhiêu dòng?
2. Có cột nào thiếu dữ liệu không?
3. Cột target là gì?
4. Có cột nào không hợp lý để đưa vào mô hình không?

## 3. Chọn feature đầu tiên

Ở vòng đầu, đừng chọn quá nhiều cột. Chỉ cần vài feature rõ ràng:

```python
features = ['dien_tich', 'so_phong', 'so_toilet', 'tuoi_nha']
X = df[features]
y = df['gia']
```

Lý do chọn ít feature ở vòng đầu:

- dễ debug
- dễ hiểu ảnh hưởng từng biến
- giảm lỗi xử lý dữ liệu phức tạp

## 4. Baseline

```python
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

baseline_pred = [y_train.mean()] * len(y_test)
baseline_mae = mean_absolute_error(y_test, baseline_pred)

print('Baseline MAE:', baseline_mae)
```

## 5. Mô hình đầu tiên

```python
from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X_train, y_train)

pred = model.predict(X_test)
model_mae = mean_absolute_error(y_test, pred)

print('Model MAE:', model_mae)
```

## 6. Đọc kết quả

Ví dụ:

- Baseline MAE: 0.85 tỷ
- Model MAE: 0.42 tỷ

Kết luận sơ bộ:

- Mô hình tốt hơn baseline khá rõ
- Workflow ban đầu đang đi đúng hướng
- Có thể cải thiện tiếp bằng feature engineering hoặc mô hình mạnh hơn

## 7. Mở rộng thêm một bước

Thử thêm một biến categorical như `quan`:

```python
X = pd.get_dummies(df[['dien_tich', 'so_phong', 'so_toilet', 'tuoi_nha', 'quan']], drop_first=True)
y = df['gia']
```

Sau đó train lại và so sánh metric. Đây là cách đơn giản để kiểm tra việc thêm thông tin vị trí có thực sự giúp mô hình không.

## 8. Mẫu báo cáo ngắn sau mini-project

Bạn nên viết một đoạn tóm tắt như sau:

> Tôi dùng 4 feature số cơ bản để dự đoán giá nhà. Baseline dự đoán theo giá trung bình cho MAE = X, trong khi Linear Regression cho MAE = Y. Điều này cho thấy mô hình đã học được quan hệ giữa feature và giá bán. Tuy nhiên mô hình hiện chưa dùng feature vị trí chi tiết và chưa xử lý outlier.

Đây là thói quen rất quan trọng vì ML không chỉ là code, mà còn là giao tiếp kết quả.

## Thử thách thêm

1. So sánh Linear Regression với Random Forest Regressor.
2. Thử bỏ một feature để xem metric thay đổi thế nào.
3. Tạo feature `gia_m2` và xem có leakage không nếu dùng sai cách.

## Sai lầm thường gặp

- Dùng luôn mọi cột mà không hiểu ý nghĩa.
- Quên tách train/test trước khi đánh giá.
- Nhìn metric tốt hơn baseline rồi kết luận quá sớm, không kiểm tra dữ liệu.

## Tiêu chí hoàn thành

- [ ] Chạy xong mini-project từ đầu đến cuối
- [ ] Có baseline và ít nhất 1 mô hình học máy
- [ ] Viết được kết luận ngắn, dễ hiểu về kết quả
