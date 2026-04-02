---
id: 019d8b39-bb04-7004-c004-ee0400000004
title: 'Bài 4: Model đầu tiên trong 30 phút + baseline'
slug: bai-4-model-dau-tien-baseline
description: >-
  Tạo mô hình đầu tiên với scikit-learn, hiểu baseline là gì và vì sao luôn cần
  baseline trước khi tối ưu.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'Phần 0: Khởi động cho người mới (Week 0)'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Đây là bài rất quan trọng vì nó giúp bạn vượt qua rào cản tâm lý lớn nhất: “biết lý thuyết nhưng chưa từng train mô hình nào”. Mục tiêu của bài này là để bạn tự tay fit mô hình đầu tiên, đo được kết quả, và hiểu vì sao **baseline** luôn là bước bắt buộc trong mọi dự án ML nghiêm túc.

## Mục tiêu bài học

- Train được mô hình đầu tiên bằng scikit-learn
- Hiểu train/test split hoạt động như thế nào
- Biết cách tạo baseline và so sánh với mô hình học máy

## 1. Bài toán mẫu: dự đoán giá nhà

Ta giả sử có dữ liệu nhà gồm các cột:

- diện tích
- số phòng
- tuổi nhà
- quận
- giá bán

Trong bài toán này:

- `X` là tập feature
- `y` là giá nhà

Đây là bài toán **regression** vì đầu ra là một số thực.

## 2. Baseline là gì?

Baseline là phương án đơn giản nhất dùng làm mốc.

Ví dụ dự đoán giá nhà:

- baseline 1: luôn đoán giá trung bình của tập train
- baseline 2: luôn đoán theo giá trung vị

Nếu mô hình ML không tốt hơn baseline, thì chưa có lý do để dùng mô hình phức tạp.

## 3. Train/test split

Ta chia dữ liệu thành hai phần:

- `train`: để mô hình học
- `test`: để đánh giá trên dữ liệu chưa thấy

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
```

Ý nghĩa của `random_state=42` là để bạn và người khác chạy lại cho ra kết quả giống nhau.

## 4. Mô hình đầu tiên với Linear Regression

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

df = pd.read_csv('data/raw/houses.csv')

features = ['dien_tich', 'so_phong', 'tuoi_nha']
X = df[features]
y = df['gia']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)

pred = model.predict(X_test)
mae = mean_absolute_error(y_test, pred)
print('MAE:', mae)
```

Điều quan trọng nhất cần hiểu:

- `fit()` là lúc mô hình học từ train data
- `predict()` là lúc mô hình dự đoán trên dữ liệu mới
- metric cho ta biết mô hình tốt đến đâu

## 5. Đo baseline để so sánh

```python
baseline_pred = [y_train.mean()] * len(y_test)
baseline_mae = mean_absolute_error(y_test, baseline_pred)

print('Baseline MAE:', baseline_mae)
print('Model MAE:', mae)
```

Nếu `Model MAE < Baseline MAE`, mô hình đã tạo giá trị.

## 6. Vì sao chọn MAE?

Với regression, các metric phổ biến là:

- MAE
- MSE
- RMSE
- $R^2$

Với người mới, MAE là metric dễ hiểu nhất vì nó biểu diễn sai số trung bình theo đúng đơn vị của bài toán.

Ví dụ:

- MAE = 0.25 tỷ nghĩa là trung bình mô hình lệch khoảng 250 triệu.

## 7. Mô hình đầu tiên không cần phải mạnh

Rất nhiều người mới thấy Linear Regression đơn giản nên muốn bỏ qua luôn để sang XGBoost. Điều đó là sai nhịp học.

Lý do nên bắt đầu đơn giản:

- dễ debug
- dễ giải thích
- dễ phát hiện lỗi dữ liệu
- có baseline tư duy cho các mô hình sau

## 8. Checklist đọc kết quả đúng cách

Sau khi train xong, đừng chỉ nhìn một con số metric rồi kết luận. Hãy hỏi:

1. Model có tốt hơn baseline không?
2. Metric có đúng với bài toán không?
3. Dữ liệu test có đại diện cho dữ liệu thật không?
4. Có cột nào bị leakage không?

## 9. Một biến thể classification rất ngắn

Nếu bài toán là phân loại, cấu trúc code gần như giống hệt, chỉ đổi model và metric.

```python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

clf = LogisticRegression(max_iter=300)
clf.fit(X_train, y_train)
pred = clf.predict(X_test)

print('Accuracy:', accuracy_score(y_test, pred))
```

Điều này giúp bạn thấy cùng một workflow có thể áp dụng cho rất nhiều bài toán khác nhau.

## Bài tập thực hành

1. Tạo baseline cho một bài toán regression.
2. Train một mô hình Linear Regression.
3. So sánh metric giữa baseline và model.
4. Viết 3 câu kết luận: model có đáng giữ không, vì sao.

## Sai lầm thường gặp

- Đánh giá model trên chính train set.
- Không so sánh với baseline.
- Dùng metric mà không hiểu ý nghĩa thực tế của nó.

## Tiêu chí hoàn thành

- [ ] Tự train được mô hình đầu tiên
- [ ] Tạo được baseline hợp lý
- [ ] Giải thích được vì sao model tốt hơn hoặc kém hơn baseline
