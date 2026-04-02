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
