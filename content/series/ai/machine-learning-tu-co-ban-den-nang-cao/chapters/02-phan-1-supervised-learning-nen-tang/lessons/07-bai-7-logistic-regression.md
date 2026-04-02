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
