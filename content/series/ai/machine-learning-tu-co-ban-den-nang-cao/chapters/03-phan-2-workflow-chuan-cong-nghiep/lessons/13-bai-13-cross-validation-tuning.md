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
