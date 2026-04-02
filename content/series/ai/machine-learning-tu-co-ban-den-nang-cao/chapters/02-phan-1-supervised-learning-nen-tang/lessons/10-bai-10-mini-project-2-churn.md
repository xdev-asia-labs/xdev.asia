---
id: 019d8b39-bb10-7010-c010-ee1000000010
title: 'Bài 10: Mini-project 2 — Dự đoán churn khách hàng'
slug: bai-10-mini-project-2-churn
description: >-
  Ứng dụng supervised learning cho bài toán phân loại thực tế và trình bày kết
  quả theo góc nhìn sản phẩm.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 'Phần 1: Supervised Learning nền tảng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Đây là mini-project classification đầu tiên của series. Mục tiêu không phải chỉ train được model churn, mà là biết đặt câu hỏi sản phẩm: dự đoán ai sắp rời đi để làm gì, hành động nào sẽ được kích hoạt, và metric nào thực sự đáng quan tâm.

## Mục tiêu bài học

- Làm một workflow phân loại tương đối trọn vẹn.
- Xây baseline, chọn metric, thử nhiều threshold.
- Trình bày kết quả theo góc nhìn kinh doanh.

## Bối cảnh bài toán

Một công ty subscription muốn dự đoán khách hàng nào có nguy cơ rời đi trong 30 ngày tới. Nếu biết sớm, team CS hoặc marketing có thể gửi ưu đãi giữ chân.

## Quy trình nên làm

1. Đọc và kiểm tra dữ liệu.
2. Xem tỉ lệ churn có bị lệch lớp không.
3. Tạo baseline đơn giản.
4. Train logistic regression trước.
5. Đánh giá bằng confusion matrix, precision, recall, F1, ROC-AUC.
6. Thử threshold theo mục tiêu business.

## Feature gợi ý

- tenure
- monthly_charges
- contract_type
- support_tickets
- payment_method
- is_auto_renew

## Code khung

~~~python
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
~~~

## Cách trình bày cho stakeholder

Đừng chỉ nói “model đạt F1 = 0.71”. Hãy nói model bắt được bao nhiêu phần trăm khách sắp churn, đổi lại có bao nhiêu khách bị cảnh báo nhầm, và chi phí giữ chân có hợp lý không.

## Sai lầm thường gặp

- Chỉ báo accuracy khi dữ liệu lệch lớp.
- Không nói rõ threshold đang dùng.
- Dùng feature phát sinh sau thời điểm churn, gây leakage.

## Bài tập thực hành

- Làm notebook hoàn chỉnh cho churn prediction.
- Chọn 2 threshold khác nhau và so sánh chi phí/lợi ích giả định.
- Viết phần kết luận như một email ngắn gửi PM.

## Tiêu chí hoàn thành

- [ ] Có baseline, model chính và metric rõ ràng.
- [ ] Có giải thích về threshold.
- [ ] Có kết luận theo góc nhìn kinh doanh, không chỉ kỹ thuật.

## Thực hành từng bước (nâng cao)

1. Thiết kế biến mục tiêu churn rõ thời gian cửa sổ dự báo.
2. Xây baseline theo quy tắc nghiệp vụ (rule-based).
3. Train ít nhất 2 model: Logistic + Tree-based.
4. Tối ưu threshold theo chi phí giữ chân giả định.
5. Viết executive summary ngắn cho team business.

## Artifact nên nộp

- Notebook end-to-end có pipeline.
- File markdown tổng hợp giả định chi phí.
- Một bảng action list: nhóm nào cần can thiệp trước.

## Câu hỏi tự kiểm tra

- Churn label có thể bị leakage ở bước nào?
- Vì sao cần baseline rule-based trước model ML?
- Cách chọn threshold nào sát mục tiêu lợi nhuận hơn?
