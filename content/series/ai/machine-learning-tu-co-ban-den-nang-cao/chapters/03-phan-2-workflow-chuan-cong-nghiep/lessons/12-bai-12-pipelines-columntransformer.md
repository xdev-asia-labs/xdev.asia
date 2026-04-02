---
id: 019d8b39-bb12-7012-c012-ee1200000012
title: 'Bài 12: Pipelines & ColumnTransformer với scikit-learn'
slug: bai-12-pipelines-columntransformer
description: >-
  Xây pipeline chống lỗi thao tác thủ công, tái sử dụng tốt và giảm rủi ro
  leakage trong huấn luyện.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'Phần 2: Workflow chuẩn công nghiệp'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Khi dự án ML bắt đầu có nhiều bước tiền xử lý, việc viết tay từng bước rất dễ sai. Pipeline và ColumnTransformer giúp bạn gom toàn bộ preprocessing và model vào một luồng thống nhất, dễ tái lập, dễ debug và giảm hẳn nguy cơ leakage.

## Mục tiêu bài học

- Hiểu vì sao nên dùng Pipeline thay vì xử lý rời rạc.
- Biết dùng ColumnTransformer cho dữ liệu nhiều kiểu cột.
- Dựng được một workflow train/predict nhất quán.

## Vì sao pipeline quan trọng?

Pipeline giúp tránh các lỗi phổ biến như fit scaler trên cả train lẫn test, quên áp dụng cùng transform khi predict dữ liệu mới, hoặc lưu model nhưng quên logic preprocessing.

## Cấu trúc chuẩn

- Numeric: impute rồi scale.
- Categorical: impute rồi one-hot.
- Ghép bằng ColumnTransformer.
- Đặt classifier hoặc regressor ở bước cuối.

## Ví dụ code

~~~python
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.ensemble import RandomForestClassifier
~~~

## Lợi ích trong thực tế

- Dễ đưa vào cross-validation.
- Dễ save/load bằng joblib.
- Ít lỗi khi deploy batch inference.

## Sai lầm thường gặp

- Dùng sai danh sách cột.
- Thêm feature mới nhưng quên cập nhật ColumnTransformer.
- Gọi fit_transform ngoài pipeline rồi lại fit tiếp trong pipeline.

## Bài tập thực hành

- Dựng một pipeline hoàn chỉnh cho dữ liệu churn hoặc housing.
- So sánh code dùng pipeline và code xử lý thủ công.
- Viết 5 dòng: pipeline giúp giảm loại lỗi nào nhiều nhất.

## Tiêu chí hoàn thành

- [ ] Tự dựng được Pipeline và ColumnTransformer.
- [ ] Hiểu pipeline giúp tránh leakage như thế nào.
- [ ] Có thể save/load workflow hoàn chỉnh.

## Thực hành từng bước (nâng cao)

1. Viết pipeline hoàn chỉnh gồm preprocessing + model.
2. Tách numeric/categorical thành hai nhánh transform.
3. Dùng cùng pipeline cho train, validate và predict mẫu mới.
4. Lưu pipeline bằng joblib và load lại để dự đoán.
5. Viết test nhỏ để đảm bảo schema input không vỡ.

## Artifact nên nộp

- File pipeline có thể tái sử dụng.
- Script predict tối thiểu cho 1 record.
- Checklist phòng leakage dựa trên pipeline.

## Câu hỏi tự kiểm tra

- Vì sao fit_transform thủ công dễ lỗi hơn pipeline?
- Khi thêm feature mới cần cập nhật gì trong ColumnTransformer?
- Lợi ích lớn nhất của pipeline khi deploy là gì?
