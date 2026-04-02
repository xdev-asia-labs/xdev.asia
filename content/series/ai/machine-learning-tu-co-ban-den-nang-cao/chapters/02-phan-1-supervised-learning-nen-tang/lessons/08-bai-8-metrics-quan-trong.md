---
id: 019d8b39-bb08-7008-c008-ee0800000008
title: 'Bài 8: Metrics quan trọng: Accuracy, Precision, Recall, F1, AUC'
slug: bai-8-metrics-quan-trong
description: >-
  Chọn đúng metric theo business problem; khi nào dùng PR-AUC thay vì ROC-AUC;
  tránh tối ưu sai mục tiêu.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 7
section_title: 'Phần 1: Supervised Learning nền tảng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Model tốt hay không phụ thuộc rất nhiều vào metric bạn chọn. Cùng một mô hình có thể trông rất tốt theo accuracy nhưng lại rất tệ theo recall. Bài này giúp bạn chọn metric theo đúng bài toán thay vì theo thói quen.

## Mục tiêu bài học

- Phân biệt metric cho regression và classification.
- Hiểu accuracy, precision, recall, F1, ROC-AUC và khi nào nên dùng.
- Biết vì sao metric phải bám vào mục tiêu sản phẩm.

## Regression metrics

- MAE: dễ hiểu, đo sai lệch tuyệt đối trung bình.
- RMSE: phạt nặng lỗi lớn hơn MAE.
- R-squared: đo mức độ giải thích phương sai, nhưng đừng thần thánh hóa.

## Classification metrics

- Accuracy: tỉ lệ dự đoán đúng tổng thể.
- Precision: trong số các mẫu bị dự đoán dương, bao nhiêu mẫu thật sự dương.
- Recall: trong số các mẫu dương thật, model bắt được bao nhiêu.
- F1-score: cân bằng giữa precision và recall.
- ROC-AUC: đo khả năng xếp hạng xác suất giữa hai lớp.

## Ví dụ chọn metric theo ngữ cảnh

- Phát hiện gian lận: ưu tiên recall cao để không bỏ sót.
- Email spam: cần precision đủ tốt để tránh chặn nhầm email thường.
- Churn khách hàng: thường quan tâm recall và giá trị kinh doanh của hành động giữ chân.

## Code mẫu

~~~python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score

print('Accuracy:', accuracy_score(y_test, preds))
print('Precision:', precision_score(y_test, preds))
print('Recall:', recall_score(y_test, preds))
print('F1:', f1_score(y_test, preds))
print('ROC-AUC:', roc_auc_score(y_test, proba))
~~~

## Sai lầm thường gặp

- Dùng accuracy cho dữ liệu mất cân bằng mạnh.
- So sánh model bằng metric khác nhau giữa các lần thử.
- Tối ưu metric kỹ thuật nhưng quên cost kinh doanh.

## Bài tập thực hành

- Lấy một bài toán classification mất cân bằng.
- Tính confusion matrix và 5 metric chính.
- Viết 1 đoạn ngắn: nếu bạn là PM, bạn sẽ chọn metric nào làm KPI chính.

## Tiêu chí hoàn thành

- [ ] Chọn được metric phù hợp cho ít nhất 3 bài toán khác nhau.
- [ ] Giải thích được precision và recall bằng ví dụ đời thường.
- [ ] Đọc được confusion matrix mà không nhầm lẫn.

## Thực hành từng bước (nâng cao)

1. Chọn một bài toán churn hoặc fraud có mất cân bằng lớp.
2. Đo 5 metric: Accuracy, Precision, Recall, F1, ROC-AUC.
3. Thêm PR-AUC để so sánh trong dữ liệu lệch lớp.
4. Mô phỏng chi phí FP/FN và tính expected cost.
5. Chốt metric chính dùng để báo cáo tuần.

## Artifact nên nộp

- Bảng metric + biểu đồ PR curve và ROC curve.
- Mô hình cost matrix đơn giản.
- Kết luận metric chính và metric phụ để giám sát.

## Câu hỏi tự kiểm tra

- Vì sao accuracy gây hiểu nhầm trên dữ liệu lệch lớp?
- PR-AUC khác ROC-AUC ở điểm nào về ý nghĩa?
- Khi nào cần theo dõi nhiều metric cùng lúc?
