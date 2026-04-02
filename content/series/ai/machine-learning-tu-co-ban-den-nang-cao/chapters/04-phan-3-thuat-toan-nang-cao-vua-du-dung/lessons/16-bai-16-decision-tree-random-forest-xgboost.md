---
id: 019d8b39-bb16-7016-c016-ee1600000016
title: 'Bài 16: Decision Tree, Random Forest, XGBoost'
slug: bai-16-decision-tree-random-forest-xgboost
description: >-
  So sánh tree-based models, hiểu feature importance, overfitting control, và
  cách chọn mô hình theo dữ liệu.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: 'Phần 3: Thuật toán nâng cao vừa đủ dùng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Đến đây bạn đã có nền tảng tốt với mô hình tuyến tính. Bài này giới thiệu nhóm thuật toán mạnh nhất cho dữ liệu bảng trong thực tế: decision tree, random forest và boosting.

## Mục tiêu bài học

- Hiểu trực giác của decision tree, random forest và boosting.
- Biết trade-off giữa khả năng giải thích, tốc độ và độ mạnh.
- Chọn đúng mô hình tree-based cho dữ liệu bảng.

## Decision tree

Decision tree chia dữ liệu bằng các câu hỏi kiểu age > 35 hay num_tickets > 3. Ưu điểm là dễ hiểu, không cần scale feature và bắt được quan hệ phi tuyến. Nhược điểm là dễ overfit nếu cây quá sâu.

## Random forest

Random forest là nhiều cây quyết định cùng bỏ phiếu. Nó thường giảm overfitting so với một cây đơn lẻ và là baseline rất mạnh cho tabular data.

## XGBoost và boosting

Boosting train nhiều cây tuần tự; mỗi cây mới tập trung sửa lỗi của cây trước. Vì vậy boosting thường rất mạnh trên leaderboard, nhưng cũng dễ bị lạm dụng nếu không kiểm soát tốt validation.

## Khi nào dùng model nào?

- Decision tree: để học trực giác hoặc cần mô hình cực dễ giải thích.
- Random forest: baseline mạnh cho tabular data.
- XGBoost, LightGBM, CatBoost: khi muốn tối ưu hiệu năng nghiêm túc.

## Sai lầm thường gặp

- Tuning quá nhiều tham số ngay từ đầu.
- Dùng feature importance như bằng chứng nhân quả.
- Tin leaderboard mà không xem leakage hoặc error analysis.

## Bài tập thực hành

- So sánh Logistic Regression, Random Forest và XGBoost trên cùng dataset.
- Ghi lại metric, thời gian train, khả năng giải thích.
- Kết luận mô hình nào phù hợp nhất cho môi trường doanh nghiệp vừa và nhỏ.

## Tiêu chí hoàn thành

- [ ] Giải thích được sự khác nhau giữa bagging và boosting.
- [ ] Biết khi nào tree-based model mạnh hơn linear model.
- [ ] So sánh được ít nhất 3 mô hình trên cùng một bài toán.

## Thực hành từng bước (nâng cao)

1. Chạy 3 model: Decision Tree, Random Forest, XGBoost.
2. Giữ cùng train/validation split để so sánh công bằng.
3. Tuning nhẹ cho mỗi model (2-3 tham số chính).
4. So sánh metric, thời gian train và độ dễ giải thích.
5. Viết guideline chọn model theo kích thước dữ liệu.

## Artifact nên nộp

- Bảng benchmark ba model.
- Biểu đồ feature importance có chú thích cẩn trọng.
- Quy tắc chọn model theo từng bối cảnh dự án.

## Câu hỏi tự kiểm tra

- Bagging và boosting khác nhau thế nào về cơ chế giảm lỗi?
- Khi nào Random Forest hợp hơn XGBoost?
- Vì sao feature importance không đồng nghĩa nhân quả?
