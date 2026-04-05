---
id: 019d8b39-bb03-7003-c003-ee0300000003
title: 'Bài 3: Python/Pandas crash course cho ML'
slug: bai-3-python-pandas-crash-course
description: >-
  DataFrame, filtering, groupby, merge, xử lý thiếu dữ liệu mức cơ bản và EDA
  nhanh cho người chưa vững Python dữ liệu.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'Phần 0: Khởi động cho người mới (Week 0)'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7527" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7527)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1025" cy="205" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="950" cy="90" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="235" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="800" cy="120" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="265" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1000.9807621135332,160 1000.9807621135332,190 975,205 949.0192378864668,190 949.0192378864668,160 975,145" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI &amp; ML — Bài 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 3: Python/Pandas crash course cho ML</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 0: Khởi động cho người mới (Week 0)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Bạn không cần trở thành chuyên gia Python để học ML, nhưng bạn bắt buộc phải đủ thoải mái với dữ liệu dạng bảng. Bài này là bản “crash course” tập trung đúng những gì cần dùng nhiều nhất trong ML: đọc dữ liệu, lọc, biến đổi, kiểm tra thiếu dữ liệu và tạo feature đơn giản.

## Mục tiêu bài học

- Đọc và khám phá dữ liệu bằng Pandas
- Thực hiện các thao tác phổ biến nhất trước khi train model
- Biết lúc nào nên dùng notebook, lúc nào nên tách code ra file riêng

## 1. Hai thư viện bạn sẽ dùng liên tục

### NumPy

Dùng cho mảng số học và phép toán vector hóa.

### Pandas

Dùng cho dữ liệu dạng bảng (`DataFrame`).

Trong phần lớn dự án ML cơ bản, bạn sẽ dành nhiều thời gian ở Pandas hơn là ở mô hình.

## 2. Tạo một DataFrame đầu tiên

```python
import pandas as pd

df = pd.DataFrame({
    'dien_tich': [45, 60, 80, 120],
    'so_phong': [1, 2, 3, 4],
    'gia': [1.2, 1.8, 2.6, 4.1]
})

print(df)
```

Kết quả là một bảng gồm hàng và cột. Trong ML:

- mỗi hàng thường là một quan sát
- mỗi cột là một feature hoặc target

## 3. 5 thao tác Pandas cần nhớ ngay

### Xem nhanh dữ liệu

```python
df.head()
df.shape
df.columns
df.info()
df.describe()
```

### Chọn cột

```python
df['dien_tich']
df[['dien_tich', 'so_phong']]
```

### Lọc dòng

```python
df[df['so_phong'] >= 2]
```

### Tạo cột mới

```python
df['gia_m2'] = df['gia'] / df['dien_tich']
```

### Sắp xếp

```python
df.sort_values('gia', ascending=False)
```

## 4. Đọc dữ liệu từ CSV

```python
df = pd.read_csv('data/raw/houses.csv')
```

Việc đầu tiên sau khi đọc dữ liệu luôn nên là:

```python
print(df.head())
print(df.shape)
print(df.isnull().sum())
```

Mục tiêu là trả lời ba câu hỏi:

1. Dữ liệu có bao nhiêu dòng, bao nhiêu cột?
2. Cột nào đang thiếu dữ liệu?
3. Cột nào là số, cột nào là text?

## 5. Missing values là gì?

Missing values là ô dữ liệu bị thiếu. Ví dụ khách hàng không khai tuổi, hoặc hệ thống không ghi lại một trường nào đó.

Kiểm tra:

```python
df.isnull().sum()
```

Cách xử lý cơ bản:

- bỏ dòng/cột nếu thiếu quá nhiều
- điền giá trị trung bình, trung vị hoặc mode
- thêm cờ `is_missing`

Ví dụ:

```python
df['tuoi'] = df['tuoi'].fillna(df['tuoi'].median())
```

## 6. Categorical variables

Nhiều cột không phải số, ví dụ:

- thành phố
- loại gói dịch vụ
- giới tính

ML model thường không làm việc trực tiếp với text thuần, nên cần biến đổi. Cách cơ bản nhất là one-hot encoding.

```python
pd.get_dummies(df, columns=['thanh_pho'], drop_first=True)
```

## 7. Groupby và aggregation

Đây là kỹ năng rất mạnh để hiểu dữ liệu và tạo feature.

```python
df.groupby('thanh_pho')['gia'].mean()
df.groupby('loai_khach')['doanh_thu'].agg(['mean', 'count'])
```

Ví dụ ứng dụng:

- trung bình doanh thu theo nhóm khách hàng
- số lần mua theo thành phố
- tỷ lệ churn theo gói dịch vụ

## 8. Merge dữ liệu

Trong thực tế, dữ liệu hiếm khi nằm trong một bảng duy nhất.

```python
customers = pd.read_csv('customers.csv')
orders = pd.read_csv('orders.csv')

df = customers.merge(orders, on='customer_id', how='left')
```

Nguyên tắc quan trọng: sau khi merge, luôn kiểm tra số dòng và các giá trị null mới phát sinh.

## 9. Feature engineering cơ bản

Feature engineering là tạo thêm cột giúp mô hình học tốt hơn.

Ví dụ:

- `gia_m2 = gia / dien_tich`
- `thoi_gian_su_dung = ngay_hien_tai - ngay_dang_ky`
- `tong_chi_tieu_30_ngay`

Feature tốt thường đến từ hiểu bài toán hơn là từ mẹo mô hình.

## 10. Notebook hay script?

### Dùng notebook khi:

- khám phá dữ liệu
- vẽ biểu đồ
- thử nhanh ý tưởng

### Dùng script / module khi:

- code được lặp lại nhiều lần
- cần tái sử dụng
- muốn pipeline sạch và dễ maintain

Nguyên tắc thực tế:

- notebook để khám phá
- `src/` để sản xuất code

## Ví dụ ngắn: EDA đầu tiên

```python
import pandas as pd

df = pd.read_csv('data/raw/customers.csv')

print(df.head())
print(df.shape)
print(df.isnull().sum())
print(df['plan'].value_counts())

df['monthly_spend'] = df['total_spend'] / df['months_active']
print(df[['monthly_spend', 'churn']].head())
```

## Bài tập thực hành

1. Đọc một file CSV bất kỳ và chạy `head`, `info`, `describe`.
2. Tạo ít nhất 2 feature mới từ dữ liệu gốc.
3. Viết 3 câu mô tả điều bạn học được từ EDA.

## Sai lầm thường gặp

- Chỉnh dữ liệu mà không hiểu cột đó có ý nghĩa gì.
- Tạo feature dùng thông tin từ tương lai.
- Merge xong nhưng không kiểm tra lại số dòng.

## Tiêu chí hoàn thành

- [ ] Đọc được CSV vào DataFrame
- [ ] Thực hiện được filter, groupby, merge cơ bản
- [ ] Tạo được feature mới có ý nghĩa cho bài toán
