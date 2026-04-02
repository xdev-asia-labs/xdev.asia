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
